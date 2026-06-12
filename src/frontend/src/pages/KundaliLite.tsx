import { useKundli } from "@/hooks/use-kundli";
import { useNewsletter } from "@/hooks/use-newsletter";
import { useUserProfile } from "@/hooks/use-user-profile";
import { calculateKundli } from "@/lib/kundli-calculator";
import type {
  DashaEntry,
  KundliData,
  PlanetPlacement,
  UserProfileInput,
} from "@/types/user-profile";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { GemstoneCheckTab } from "./GemstoneCheckTab";
import {
  AajKaGrahaTab,
  GrahaShantTab,
  TransitCalendarTab,
} from "./KundaliLiteContent";

// ─── Types ───────────────────────────────────────────────────────────────────

type KundaliTab =
  | "my-kundali"
  | "aaj-ka-graha"
  | "graha-shanti"
  | "gemstone-check"
  | "transit-calendar";

const RASHI_NAMES = [
  "Mesha",
  "Vrishabha",
  "Mithuna",
  "Karka",
  "Simha",
  "Kanya",
  "Tula",
  "Vrishchika",
  "Dhanu",
  "Makara",
  "Kumbha",
  "Meena",
];

const RASHI_EN = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDeg(deg: number): string {
  const d = Math.floor(deg);
  const m = Math.round((deg - d) * 60);
  return `${d}°${m.toString().padStart(2, "0")}'`;
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

// ─── North-Indian Chart Grid ──────────────────────────────────────────────────
// House positions in the diamond grid (row × col, 0-indexed, 4×4 grid)
// Standard North Indian layout: 12 houses around the border, center = lotus

const HOUSE_CELLS: Array<{ row: number; col: number }> = [
  { row: 0, col: 1 }, // House 1 (Lagna) — top-center-left
  { row: 0, col: 0 }, // House 2 — top-left corner
  { row: 1, col: 0 }, // House 3 — left
  { row: 2, col: 0 }, // House 4 — left-bottom
  { row: 3, col: 0 }, // House 5 — bottom-left corner
  { row: 3, col: 1 }, // House 6 — bottom-center-left
  { row: 3, col: 2 }, // House 7 — bottom-center-right
  { row: 3, col: 3 }, // House 8 — bottom-right corner
  { row: 2, col: 3 }, // House 9 — right-bottom
  { row: 1, col: 3 }, // House 10 — right
  { row: 0, col: 3 }, // House 11 — top-right corner
  { row: 0, col: 2 }, // House 12 — top-center-right
];

const KENDRA_HOUSES = [1, 4, 7, 10];

interface ChartGridProps {
  planets: PlanetPlacement[];
  lagnaSign: number;
  lagnaRashi: string;
  rulingPlanet: string;
  title: string;
}

function ChartGrid({
  planets,
  lagnaSign,
  lagnaRashi,
  rulingPlanet,
  title,
}: ChartGridProps) {
  // Build a map of house → planets
  const houseMap: Record<number, PlanetPlacement[]> = {};
  for (let i = 1; i <= 12; i++) houseMap[i] = [];
  for (const p of planets) {
    const h = Math.max(1, Math.min(12, p.house));
    houseMap[h].push(p);
  }

  // Build a 4×4 grid
  const grid: Array<Array<{ house: number | null; isCenter: boolean }>> = [];
  for (let r = 0; r < 4; r++) {
    grid[r] = [];
    for (let c = 0; c < 4; c++) {
      grid[r][c] = { house: null, isCenter: false };
    }
  }
  // Center 2×2 = lotus
  grid[1][1].isCenter = true;
  grid[1][2].isCenter = true;
  grid[2][1].isCenter = true;
  grid[2][2].isCenter = true;
  // Assign houses
  for (let i = 0; i < 12; i++) {
    const { row, col } = HOUSE_CELLS[i];
    const houseNum = ((lagnaSign + i) % 12) + 1;
    grid[row][col].house = houseNum;
  }

  return (
    <div className="kundli-chart">
      <div
        className="text-center mb-2 font-display font-bold"
        style={{
          color: "oklch(0.22 0.10 32)",
          fontSize: "0.9rem",
          textShadow: "0 1px 4px oklch(0.78 0.34 54 / 0.25)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "2px 14px",
            background:
              "linear-gradient(90deg, oklch(0.52 0.26 268), oklch(0.5 0.26 268 / 0.9))",
            color: "oklch(0.97 0.04 70)",
            borderRadius: "3px",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          width: "100%",
          aspectRatio: "1",
          border: "2px solid oklch(0.65 0.28 48 / 0.55)",
          borderRadius: "4px",
          background:
            "linear-gradient(145deg, oklch(0.97 0.07 68) 0%, oklch(0.93 0.10 62) 100%)",
          boxShadow:
            "0 4px 20px oklch(0.65 0.28 48 / 0.20), inset 0 1px 0 oklch(1 0 0 / 0.6)",
        }}
        className="kundli-chart"
      >
        {grid.flatMap((row, ri) =>
          row.map((cell, ci) => {
            const cellKey = `r${ri}c${ci}`;
            if (cell.isCenter) {
              if (ri === 1 && ci === 1) {
                return (
                  <div
                    key="center-lotus"
                    style={{
                      gridRow: "2 / 4",
                      gridColumn: "2 / 4",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(145deg, oklch(0.95 0.10 62 / 0.8), oklch(0.88 0.12 56 / 0.9))",
                      borderTop: "1px solid oklch(0.72 0.28 52 / 0.45)",
                      borderLeft: "1px solid oklch(0.72 0.28 52 / 0.45)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.6rem",
                        color: "oklch(0.72 0.30 52)",
                        textShadow: "0 0 12px oklch(0.78 0.34 54 / 0.5)",
                        lineHeight: 1,
                      }}
                    >
                      ✿
                    </div>
                    <div
                      style={{
                        fontSize: "0.55rem",
                        color: "oklch(0.45 0.18 44)",
                        marginTop: "2px",
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        textAlign: "center",
                        lineHeight: 1.3,
                        maxWidth: "80%",
                      }}
                    >
                      {lagnaRashi}
                    </div>
                  </div>
                );
              }
              return null; // other center cells — handled by gridRow/gridColumn span
            }
            if (cell.house === null) return <div key={cellKey} />;
            const housePlanets = houseMap[cell.house] ?? [];
            const isLagna = cell.house === 1;
            const isKendra = KENDRA_HOUSES.includes(cell.house);
            const houseSignIdx = (lagnaSign + cell.house - 1) % 12;
            return (
              <div
                key={`house-${cell.house}`}
                style={{
                  border: "0.5px solid oklch(0.72 0.28 52 / 0.30)",
                  padding: "2px 3px",
                  position: "relative",
                  background: isLagna
                    ? "oklch(0.88 0.18 54 / 0.28)"
                    : isKendra
                      ? "oklch(0.88 0.12 56 / 0.15)"
                      : "transparent",
                  minHeight: 0,
                  overflow: "hidden",
                }}
              >
                {/* House number + rashi */}
                <div
                  style={{
                    fontSize: "0.5rem",
                    color: isLagna
                      ? "oklch(0.45 0.22 44)"
                      : "oklch(0.52 0.14 46)",
                    fontWeight: isLagna ? 700 : 400,
                    lineHeight: 1.2,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {cell.house}
                  {isLagna && (
                    <span style={{ marginLeft: "2px", fontSize: "0.45rem" }}>
                      L
                    </span>
                  )}
                </div>
                {/* Sign abbrev */}
                <div
                  style={{
                    fontSize: "0.45rem",
                    color: "oklch(0.55 0.16 46 / 0.8)",
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  {RASHI_NAMES[houseSignIdx]?.slice(0, 3)}
                </div>
                {/* Planet glyphs */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1px",
                    marginTop: "2px",
                  }}
                >
                  {housePlanets.map((p) => (
                    <span
                      key={p.planet}
                      title={`${p.planet} — ${RASHI_NAMES[p.sign]} ${formatDeg(p.degree)}${p.isRetrograde ? " (R)" : ""}`}
                      style={{
                        fontSize: "0.52rem",
                        color:
                          p.planet === rulingPlanet
                            ? "oklch(0.52 0.26 48)"
                            : "oklch(0.28 0.12 36)",
                        fontWeight: p.planet === rulingPlanet ? 700 : 500,
                        fontFamily: "var(--font-body)",
                        lineHeight: 1,
                        textShadow:
                          p.planet === rulingPlanet
                            ? "0 0 6px oklch(0.78 0.34 54 / 0.5)"
                            : "none",
                      }}
                    >
                      {p.glyph}
                      {p.isRetrograde && (
                        <sup
                          style={{
                            fontSize: "0.4rem",
                            color: "oklch(0.55 0.24 24)",
                          }}
                        >
                          R
                        </sup>
                      )}
                    </span>
                  ))}
                </div>
                {/* Degree for lagna house */}
                {isLagna && housePlanets.length === 0 && (
                  <div
                    style={{
                      fontSize: "0.42rem",
                      color: "oklch(0.52 0.20 48)",
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                    }}
                  >
                    {formatDeg((lagnaSign * 30 + 0) % 30)}
                  </div>
                )}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}

// ─── Planet Table ─────────────────────────────────────────────────────────────

function PlanetTable({
  planets,
  rulingPlanet,
}: { planets: PlanetPlacement[]; rulingPlanet: string }) {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "6px",
        border: "1.5px solid oklch(0.72 0.28 52 / 0.35)",
        background:
          "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.96), oklch(0.94 0.09 62 / 0.95))",
        boxShadow: "0 4px 18px oklch(0.65 0.28 48 / 0.12)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.72rem",
        }}
      >
        <thead>
          <tr
            style={{
              background:
                "linear-gradient(90deg, oklch(0.52 0.26 268 / 0.85), oklch(0.50 0.24 268 / 0.80))",
            }}
          >
            {["Planet", "Sign", "House", "Nakshatra", "Degree", "R"].map(
              (h) => (
                <th
                  key={h}
                  style={{
                    padding: "6px 8px",
                    color: "oklch(0.97 0.04 70)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    textAlign: h === "Degree" || h === "R" ? "center" : "left",
                    fontSize: "0.68rem",
                    letterSpacing: "0.04em",
                    borderBottom: "1px solid oklch(0.72 0.28 52 / 0.30)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {planets.map((p, idx) => {
            const isLagnesh = p.planet === rulingPlanet;
            return (
              <tr
                key={p.planet}
                style={{
                  background: isLagnesh
                    ? "oklch(0.88 0.18 54 / 0.22)"
                    : idx % 2 === 0
                      ? "transparent"
                      : "oklch(0.93 0.07 66 / 0.5)",
                  borderBottom: "0.5px solid oklch(0.78 0.14 60 / 0.30)",
                }}
              >
                <td
                  style={{
                    padding: "5px 8px",
                    fontFamily: "var(--font-display)",
                    fontWeight: isLagnesh ? 700 : 500,
                    color: isLagnesh
                      ? "oklch(0.45 0.22 44)"
                      : "oklch(0.22 0.10 32)",
                  }}
                >
                  <span style={{ marginRight: "4px", fontSize: "0.8rem" }}>
                    {p.glyph}
                  </span>
                  {p.planet}
                  {isLagnesh && (
                    <span
                      style={{
                        marginLeft: "4px",
                        fontSize: "0.55rem",
                        background: "oklch(0.78 0.34 54 / 0.25)",
                        color: "oklch(0.45 0.22 44)",
                        padding: "1px 4px",
                        borderRadius: "2px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Lagnesh
                    </span>
                  )}
                </td>
                <td
                  style={{ padding: "5px 8px", color: "oklch(0.32 0.12 40)" }}
                >
                  {p.signName}{" "}
                  <span style={{ opacity: 0.6, fontSize: "0.62rem" }}>
                    ({RASHI_EN[p.sign]})
                  </span>
                </td>
                <td
                  style={{ padding: "5px 8px", color: "oklch(0.32 0.12 40)" }}
                >
                  {ordinal(p.house)}
                </td>
                <td
                  style={{
                    padding: "5px 8px",
                    color: "oklch(0.32 0.12 40)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.nakshatra}
                </td>
                <td
                  style={{
                    padding: "5px 8px",
                    color: "oklch(0.38 0.16 46)",
                    textAlign: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                  }}
                >
                  {formatDeg(p.degree)}
                </td>
                <td
                  style={{
                    padding: "5px 8px",
                    textAlign: "center",
                    color: "oklch(0.55 0.24 24)",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                  }}
                >
                  {p.isRetrograde ? "R" : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Dasha Card ───────────────────────────────────────────────────────────────

interface DashaCardProps {
  dasha: DashaEntry;
  level: "maha" | "antar" | "pratyantar";
  label: string;
}

function DashaCard({ dasha, level, label }: DashaCardProps) {
  const bg =
    level === "maha"
      ? "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.68 0.28 48))"
      : level === "antar"
        ? "linear-gradient(135deg, oklch(0.62 0.12 220), oklch(0.56 0.10 210))"
        : "linear-gradient(135deg, oklch(0.62 0.18 42), oklch(0.56 0.14 36))";

  const textColor = "oklch(0.97 0.04 70)";

  return (
    <div
      style={{
        background: bg,
        borderRadius: "8px",
        padding: "12px 14px",
        boxShadow:
          level === "maha"
            ? "0 6px 24px oklch(0.65 0.28 48 / 0.35)"
            : "0 3px 12px oklch(0.40 0.12 40 / 0.20)",
      }}
    >
      <div
        style={{
          fontSize: "0.62rem",
          color: "oklch(0.96 0.06 70 / 0.75)",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "2px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: level === "maha" ? "1.15rem" : "0.95rem",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: textColor,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          lineHeight: 1.2,
        }}
      >
        <span style={{ fontSize: level === "maha" ? "1.3rem" : "1.05rem" }}>
          {dasha.lordGlyph}
        </span>
        {dasha.lord} Dasha
      </div>
      <div
        style={{
          fontSize: "0.65rem",
          color: "oklch(0.96 0.06 70 / 0.80)",
          marginTop: "4px",
          fontFamily: "var(--font-body)",
        }}
      >
        {formatDate(dasha.startDate)} — {formatDate(dasha.endDate)}
        <span style={{ marginLeft: "8px", opacity: 0.7 }}>
          ({dasha.durationYears} yr{level !== "maha" ? "s" : ""})
        </span>
      </div>
    </div>
  );
}

// ─── Kundali Form ─────────────────────────────────────────────────────────────

interface KundaliFormProps {
  onGenerated: (kundli: KundliData) => void;
  isSaving: boolean;
}

function KundaliForm({ onGenerated, isSaving }: KundaliFormProps) {
  // Auto-restore saved details from localStorage
  const saved = (() => {
    try {
      const s = localStorage.getItem("gita-kundali-form-autosave");
      return s ? (JSON.parse(s) as Record<string, string>) : {};
    } catch {
      return {};
    }
  })();
  const [name, setName] = useState(saved.name ?? "");
  const [dob, setDob] = useState(saved.dob ?? "");
  const [tob, setTob] = useState(saved.tob ?? "");
  const [place, setPlace] = useState(saved.place ?? "");
  const [lat, setLat] = useState(saved.lat ?? "");
  const [lng, setLng] = useState(saved.lng ?? "");
  const [tz, setTz] = useState(saved.tz ?? "5.5");
  const [error, setError] = useState<string | null>(null);

  function handleGenerate() {
    setError(null);
    if (!name.trim() || !dob || !tob || !place.trim()) {
      setError("Please fill in Name, Date of Birth, Time of Birth, and Place.");
      return;
    }
    const [year, month, day] = dob.split("-").map(Number);
    const [hour, minute] = tob.split(":").map(Number);
    const latN = lat ? Number.parseFloat(lat) : 20.5937;
    const lngN = lng ? Number.parseFloat(lng) : 78.9629;
    const tzN = Number.parseFloat(tz) || 5.5;
    if (!year || !month || !day || Number.isNaN(hour) || Number.isNaN(minute)) {
      setError("Invalid date or time format.");
      return;
    }
    // Auto-save details so user is never asked again
    try {
      localStorage.setItem(
        "gita-kundali-form-autosave",
        JSON.stringify({
          name: name.trim(),
          dob,
          tob,
          place: place.trim(),
          lat,
          lng,
          tz,
        }),
      );
    } catch {
      /* localStorage unavailable */
    }
    const kundli = calculateKundli(
      `${name.trim()}-${dob}`,
      name.trim(),
      { day, month, year },
      { hour, minute },
      latN,
      lngN,
      tzN,
    );
    onGenerated(kundli);
  }

  return (
    <div
      className="content-card"
      style={{ padding: "24px", maxWidth: "480px", margin: "0 auto" }}
      data-ocid="kundali.form"
    >
      <div className="text-center mb-4">
        <div
          className="swastik-symbol"
          style={{ fontSize: "2rem", marginBottom: "6px" }}
        >
          卐
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "oklch(0.22 0.10 32)",
            marginBottom: "4px",
          }}
        >
          Generate Your Kundali
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "oklch(0.45 0.12 46)",
            fontStyle: "italic",
          }}
        >
          Enter your birth details to receive your sacred Vedic birth chart
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label
            htmlFor="kf-name"
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-display)",
              color: "oklch(0.35 0.12 40)",
              fontWeight: 600,
              display: "block",
              marginBottom: "4px",
            }}
          >
            Full Name *
          </label>
          <input
            id="kf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            data-ocid="kundali.name_input"
            style={{
              width: "100%",
              padding: "9px 12px",
              borderRadius: "5px",
              border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
              background: "oklch(0.97 0.05 70 / 0.8)",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "oklch(0.18 0.09 32)",
              outline: "none",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <div>
            <label
              htmlFor="kf-dob"
              style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-display)",
                color: "oklch(0.35 0.12 40)",
                fontWeight: 600,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Date of Birth *
            </label>
            <input
              id="kf-dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              data-ocid="kundali.dob_input"
              style={{
                width: "100%",
                padding: "9px 10px",
                borderRadius: "5px",
                border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
                background: "oklch(0.97 0.05 70 / 0.8)",
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "oklch(0.18 0.09 32)",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="kf-tob"
              style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-display)",
                color: "oklch(0.35 0.12 40)",
                fontWeight: 600,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Time of Birth *
            </label>
            <input
              id="kf-tob"
              type="time"
              value={tob}
              onChange={(e) => setTob(e.target.value)}
              data-ocid="kundali.tob_input"
              style={{
                width: "100%",
                padding: "9px 10px",
                borderRadius: "5px",
                border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
                background: "oklch(0.97 0.05 70 / 0.8)",
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "oklch(0.18 0.09 32)",
                outline: "none",
              }}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="kf-place"
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-display)",
              color: "oklch(0.35 0.12 40)",
              fontWeight: 600,
              display: "block",
              marginBottom: "4px",
            }}
          >
            Place of Birth *
          </label>
          <input
            id="kf-place"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="City, Country (e.g. Mumbai, India)"
            data-ocid="kundali.place_input"
            style={{
              width: "100%",
              padding: "9px 12px",
              borderRadius: "5px",
              border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
              background: "oklch(0.97 0.05 70 / 0.8)",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "oklch(0.18 0.09 32)",
              outline: "none",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "8px",
          }}
        >
          <div>
            <label
              htmlFor="kf-lat"
              style={{
                fontSize: "0.67rem",
                fontFamily: "var(--font-display)",
                color: "oklch(0.45 0.10 46)",
                display: "block",
                marginBottom: "3px",
              }}
            >
              Latitude
            </label>
            <input
              id="kf-lat"
              type="number"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="20.59"
              step="0.01"
              data-ocid="kundali.lat_input"
              style={{
                width: "100%",
                padding: "7px 8px",
                borderRadius: "4px",
                border: "1.5px solid oklch(0.72 0.20 52 / 0.4)",
                background: "oklch(0.97 0.05 70 / 0.8)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "oklch(0.18 0.09 32)",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="kf-lng"
              style={{
                fontSize: "0.67rem",
                fontFamily: "var(--font-display)",
                color: "oklch(0.45 0.10 46)",
                display: "block",
                marginBottom: "3px",
              }}
            >
              Longitude
            </label>
            <input
              id="kf-lng"
              type="number"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              placeholder="78.96"
              step="0.01"
              data-ocid="kundali.lng_input"
              style={{
                width: "100%",
                padding: "7px 8px",
                borderRadius: "4px",
                border: "1.5px solid oklch(0.72 0.20 52 / 0.4)",
                background: "oklch(0.97 0.05 70 / 0.8)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "oklch(0.18 0.09 32)",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="kf-tz"
              style={{
                fontSize: "0.67rem",
                fontFamily: "var(--font-display)",
                color: "oklch(0.45 0.10 46)",
                display: "block",
                marginBottom: "3px",
              }}
            >
              UTC Offset
            </label>
            <input
              id="kf-tz"
              type="number"
              value={tz}
              onChange={(e) => setTz(e.target.value)}
              placeholder="5.5"
              step="0.5"
              data-ocid="kundali.tz_input"
              style={{
                width: "100%",
                padding: "7px 8px",
                borderRadius: "4px",
                border: "1.5px solid oklch(0.72 0.20 52 / 0.4)",
                background: "oklch(0.97 0.05 70 / 0.8)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "oklch(0.18 0.09 32)",
                outline: "none",
              }}
            />
          </div>
        </div>
        {error && (
          <div
            data-ocid="kundali.form.error_state"
            style={{
              background: "oklch(0.94 0.06 24 / 0.3)",
              border: "1px solid oklch(0.65 0.22 24 / 0.5)",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.75rem",
              color: "oklch(0.38 0.18 24)",
              fontFamily: "var(--font-body)",
            }}
          >
            {error}
          </div>
        )}
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isSaving}
          className="wax-seal-btn"
          data-ocid="kundali.generate_button"
          style={{ width: "100%", padding: "12px", marginTop: "4px" }}
        >
          {isSaving ? "Calculating…" : "✦ Generate My Kundali ✦"}
        </button>
      </div>
    </div>
  );
}

// ─── My Kundali Tab ───────────────────────────────────────────────────────────

function MyKundaliTab() {
  const { kundli, saveKundli, isLoading } = useKundli();
  const { vedicProfile } = useUserProfile();
  const chartRef = useRef<HTMLDivElement>(null);

  const handleGenerated = useCallback(
    async (k: KundliData) => {
      await saveKundli(k);
    },
    [saveKundli],
  );

  async function handleDownloadPDF() {
    if (!chartRef.current || !kundli) return;
    // Use browser print-to-PDF — works on all devices without external deps
    // The "Sanatan Dharma · Krishna AI" watermark is already visible in the page
    window.print();
  }

  if (!kundli && !vedicProfile) {
    return <KundaliForm onGenerated={handleGenerated} isSaving={isLoading} />;
  }

  if (!kundli && vedicProfile) {
    // Auto-generate from profile
    const dob = vedicProfile.dateOfBirth;
    const tob = vedicProfile.timeOfBirth;
    const generated = calculateKundli(
      vedicProfile.fullName,
      vedicProfile.fullName,
      dob,
      tob,
      vedicProfile.latitude || 20.5937,
      vedicProfile.longitude || 78.9629,
      vedicProfile.timezone || 5.5,
    );
    void saveKundli(generated);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30vh",
          gap: "12px",
        }}
        data-ocid="kundali.loading_state"
      >
        <div className="om-loading">ॐ</div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "oklch(0.42 0.18 46)",
            fontSize: "0.9rem",
          }}
        >
          Calculating your sacred birth chart…
        </p>
      </div>
    );
  }

  if (!kundli)
    return <KundaliForm onGenerated={handleGenerated} isSaving={isLoading} />;

  const nextDashas = kundli.nextDashas ?? [];

  return (
    <div
      ref={chartRef}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      data-ocid="kundali.my_kundali_section"
    >
      {/* Lagna info strip */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {[
          {
            label: "Lagna",
            value: `${kundli.lagnaRashi} (${RASHI_EN[kundli.lagnaSign]})`,
          },
          { label: "Lagnesh", value: kundli.rulingPlanet },
          { label: "Moon Nakshatra", value: kundli.moonNakshatra },
          { label: "Navamsa Lagna", value: kundli.navamsaLagnaRashi },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              background:
                "linear-gradient(135deg, oklch(0.94 0.09 62), oklch(0.90 0.12 56))",
              border: "1px solid oklch(0.72 0.26 50 / 0.40)",
              borderRadius: "6px",
              padding: "6px 14px",
              textAlign: "center",
              boxShadow: "0 2px 8px oklch(0.65 0.26 48 / 0.12)",
            }}
          >
            <div
              style={{
                fontSize: "0.58rem",
                color: "oklch(0.52 0.14 46)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "oklch(0.28 0.14 36)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Two charts side by side */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        <ChartGrid
          planets={kundli.planets}
          lagnaSign={kundli.lagnaSign}
          lagnaRashi={kundli.lagnaRashi}
          rulingPlanet={kundli.rulingPlanet}
          title="Lagna Kundali Chart"
        />
        <ChartGrid
          planets={kundli.navamsaPlanets}
          lagnaSign={kundli.navamsaLagnaSign}
          lagnaRashi={kundli.navamsaLagnaRashi}
          rulingPlanet={kundli.rulingPlanet}
          title="Navamsa Chart (D-9)"
        />
      </div>

      {/* Planet Table */}
      <div>
        <div className="lotus-divider" style={{ marginBottom: "10px" }}>
          <span>Planet Positions</span>
        </div>
        <PlanetTable
          planets={kundli.planets}
          rulingPlanet={kundli.rulingPlanet}
        />
      </div>

      {/* Dasha Timeline */}
      <div>
        <div className="lotus-divider" style={{ marginBottom: "10px" }}>
          <span>Vimshottari Dasha</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <DashaCard
            dasha={kundli.mahadasha}
            level="maha"
            label="Current Mahadasha"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            <DashaCard
              dasha={kundli.antardasha}
              level="antar"
              label="Antardasha"
            />
            <DashaCard
              dasha={kundli.pratyantarDasha}
              level="pratyantar"
              label="Pratyantar Dasha"
            />
          </div>
          {nextDashas.length > 0 && (
            <div>
              <p
                style={{
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.45 0.12 46)",
                  fontStyle: "italic",
                  marginBottom: "6px",
                  textAlign: "center",
                }}
              >
                Upcoming Mahadashas
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                {nextDashas.slice(0, 3).map((d, i) => (
                  <div
                    key={`${d.lord}-${i}`}
                    data-ocid={`kundali.next_dasha.item.${i + 1}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "7px 12px",
                      background: "oklch(0.94 0.08 64 / 0.7)",
                      border: "1px solid oklch(0.78 0.18 54 / 0.30)",
                      borderRadius: "5px",
                      fontSize: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        color: "oklch(0.28 0.12 36)",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontSize: "0.95rem" }}>{d.lordGlyph}</span>
                      {d.lord}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "oklch(0.45 0.14 46)",
                        fontSize: "0.68rem",
                      }}
                    >
                      {formatDate(d.startDate)} — {formatDate(d.endDate)}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "oklch(0.55 0.16 46)",
                        fontSize: "0.65rem",
                      }}
                    >
                      {d.durationYears} yrs
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Download + watermark */}
      <div>
        {/* Watermark element (captured by html2canvas) */}
        <div
          style={{
            textAlign: "right",
            padding: "4px 0 8px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "0.72rem",
            color: "oklch(0.65 0.26 48 / 0.55)",
            letterSpacing: "0.06em",
          }}
        >
          Sanatan Dharma · Krishna AI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="wax-seal-btn"
            data-ocid="kundali.download_pdf_button"
            style={{ width: "100%", padding: "12px" }}
          >
            ↓ Download Chart PDF
          </button>
          {/* Pro teaser */}
          <div
            style={{
              background:
                "linear-gradient(135deg, oklch(0.50 0.26 268 / 0.10), oklch(0.48 0.22 268 / 0.15))",
              border: "1.5px solid oklch(0.52 0.24 268 / 0.35)",
              borderRadius: "7px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
            data-ocid="kundali.pro_teaser"
          >
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "oklch(0.38 0.18 268)",
                  marginBottom: "2px",
                }}
              >
                🪐 Pro Kundali — Detailed Dasha PDF
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-body)",
                  color: "oklch(0.45 0.14 268)",
                  fontStyle: "italic",
                }}
              >
                Transit PDF · Gemstone report · Ad-free experience
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "oklch(0.38 0.18 268)",
                }}
              >
                ₹299/yr
              </div>
              <button
                type="button"
                className="wax-seal-btn"
                data-ocid="kundali.upgrade_button"
                style={{
                  fontSize: "0.65rem",
                  padding: "5px 12px",
                  marginTop: "3px",
                }}
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reset option */}
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              sessionStorage.removeItem("gita-kundli-loaded");
            }
          }}
          style={{
            background: "none",
            border: "none",
            fontSize: "0.7rem",
            color: "oklch(0.55 0.12 46 / 0.7)",
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          data-ocid="kundali.recalculate_button"
        >
          Recalculate with different birth details
        </button>
      </div>
    </div>
  );
}

// ─── Tab Navigation ───────────────────────────────────────────────────────────

const TABS: Array<{ id: KundaliTab; label: string; glyph: string }> = [
  { id: "my-kundali", label: "My Kundali", glyph: "🪐" },
  { id: "aaj-ka-graha", label: "Aaj Ka Graha", glyph: "🌞" },
  { id: "graha-shanti", label: "Graha Shanti", glyph: "🔱" },
  { id: "gemstone-check", label: "Gemstone", glyph: "💎" },
  { id: "transit-calendar", label: "Transits", glyph: "📅" },
];

// ─── Kundali Setup Screen (shown on first open of Kundali Lite) ──────────────

interface KundaliSetupScreenProps {
  onComplete: () => void;
  saveProfile: (input: UserProfileInput) => Promise<boolean>;
  saveKundli: (
    data: import("@/types/user-profile").KundliData,
  ) => Promise<boolean>;
  subscribe: (email: string, name: string) => Promise<boolean>;
  isSaving: boolean;
}

function KundaliSetupScreen({
  onComplete,
  saveProfile,
  saveKundli,
  subscribe,
  isSaving,
}: KundaliSetupScreenProps) {
  const restored = (() => {
    try {
      const s = localStorage.getItem("gita-kundali-form-autosave");
      return s ? (JSON.parse(s) as Record<string, string>) : null;
    } catch {
      return null;
    }
  })();

  const [fullName, setFullName] = useState(restored?.name ?? "");
  const [dob, setDob] = useState(restored?.dob ?? "");
  const [tob, setTob] = useState(restored?.tob ?? "");
  const [place, setPlace] = useState(restored?.place ?? "");
  const [lat, setLat] = useState(restored?.lat ?? "20.5937");
  const [lng, setLng] = useState(restored?.lng ?? "78.9629");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit() {
    setFormError(null);
    if (!fullName.trim() || !dob || !tob || !place.trim() || !email.trim()) {
      setFormError("Please fill in all required fields (*).");
      return;
    }
    if (!email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    const [year, month, day] = dob.split("-").map(Number);
    const [hour, minute] = tob.split(":").map(Number);
    if (!year || !month || !day || Number.isNaN(hour) || Number.isNaN(minute)) {
      setFormError("Invalid date or time format.");
      return;
    }
    const latN = lat ? Number.parseFloat(lat) : 20.5937;
    const lngN = lng ? Number.parseFloat(lng) : 78.9629;
    const timezone = 5.5;
    setSubmitting(true);
    try {
      const profileInput: UserProfileInput = {
        fullName: fullName.trim(),
        dateOfBirth: { day, month, year },
        timeOfBirth: { hour, minute },
        placeOfBirth: place.trim(),
        latitude: latN,
        longitude: lngN,
        timezone,
        email: email.trim(),
        phone: phone.trim(),
        newsletterOptIn,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      const saved = await saveProfile(profileInput);
      if (!saved) {
        setFormError("Could not save profile. Please try again.");
        return;
      }
      // Auto-save to localStorage + set persistent setup-done flag
      try {
        localStorage.setItem(
          "gita-kundali-form-autosave",
          JSON.stringify({
            name: fullName.trim(),
            dob,
            tob,
            place: place.trim(),
            lat,
            lng,
            tz: String(timezone),
          }),
        );
        localStorage.setItem("gita-kundali-setup-done", "1");
      } catch {
        /* silent */
      }
      // Calculate & save kundli
      const kundliData = calculateKundli(
        `${fullName.trim()}-${dob}`,
        fullName.trim(),
        profileInput.dateOfBirth,
        profileInput.timeOfBirth,
        latN,
        lngN,
        timezone,
      );
      await saveKundli(kundliData);
      // Newsletter
      if (newsletterOptIn && email)
        await subscribe(email.trim(), fullName.trim());
      onComplete();
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
    background: "oklch(0.97 0.05 70 / 0.9)",
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
    color: "oklch(0.18 0.09 32)",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.72rem",
    fontFamily: "var(--font-display)",
    color: "oklch(0.35 0.12 40)",
    fontWeight: 600,
    display: "block",
    marginBottom: "5px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, oklch(0.93 0.08 68) 0%, oklch(0.90 0.10 62) 100%)",
        paddingBottom: "80px",
      }}
      data-ocid="kundali.setup_screen"
    >
      {/* Hero Header */}
      <div
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.10 32) 0%, oklch(0.18 0.12 28) 100%)",
          padding: "20px 16px 18px",
          textAlign: "center",
          boxShadow: "0 4px 20px oklch(0.12 0.08 28 / 0.45)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), oklch(0.86 0.40 54), oklch(0.78 0.34 54), transparent)",
          }}
        />
        <div
          style={{
            fontSize: "2.2rem",
            color: "oklch(0.84 0.38 54)",
            textShadow: "0 0 18px oklch(0.78 0.34 54 / 0.7)",
            marginBottom: "6px",
            lineHeight: 1,
          }}
          aria-hidden
        >
          ॐ
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.4rem",
            fontStyle: "italic",
            color: "oklch(0.94 0.08 68)",
            lineHeight: 1.2,
            marginBottom: "4px",
          }}
        >
          Kundali Lite + Graha Shanti
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "oklch(0.78 0.22 54 / 0.85)",
            fontStyle: "italic",
          }}
        >
          Enter your sacred birth details once — saved forever
        </p>
      </div>

      {/* Form */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{ padding: "20px 16px", maxWidth: "520px", margin: "0 auto" }}
        >
          {/* Sanskrit blessing card */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "oklch(0.52 0.22 46)",
                letterSpacing: "0.08em",
                marginBottom: "6px",
              }}
            >
              सर्वे भवन्तु सुखिनः
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "oklch(0.45 0.12 46)",
                fontStyle: "italic",
              }}
            >
              Your Vedic birth chart — a sacred map of your soul's journey
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(145deg, oklch(0.96 0.08 64), oklch(0.93 0.10 60))",
              border: "2px solid oklch(0.72 0.28 52 / 0.40)",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 8px 32px oklch(0.65 0.28 48 / 0.18)",
            }}
          >
            {/* Top gold line */}
            <div
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), transparent)",
                borderRadius: "1px",
                marginBottom: "20px",
              }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {/* Full Name */}
              <div>
                <label htmlFor="ks-name" style={labelStyle}>
                  Full Name *
                </label>
                <input
                  id="ks-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Arjun Sharma"
                  autoComplete="name"
                  data-ocid="kundali.setup.name_input"
                  style={inputStyle}
                />
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "oklch(0.52 0.10 46)",
                    fontStyle: "italic",
                    marginTop: "3px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ✦ This is how Krishna will greet you
                </p>
              </div>

              {/* DOB + TOB */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <div>
                  <label htmlFor="ks-dob" style={labelStyle}>
                    Date of Birth *
                  </label>
                  <input
                    id="ks-dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    data-ocid="kundali.setup.dob_input"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="ks-tob" style={labelStyle}>
                    Time of Birth (IST) *
                  </label>
                  <input
                    id="ks-tob"
                    type="time"
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    data-ocid="kundali.setup.tob_input"
                    style={inputStyle}
                  />
                  <p
                    style={{
                      fontSize: "0.65rem",
                      color: "oklch(0.52 0.10 46)",
                      fontStyle: "italic",
                      marginTop: "3px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ✦ Exact time = accurate Lagna
                  </p>
                </div>
              </div>

              {/* Place of Birth */}
              <div>
                <label htmlFor="ks-place" style={labelStyle}>
                  Place of Birth *
                </label>
                <input
                  id="ks-place"
                  type="text"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="e.g. Mumbai, Maharashtra"
                  data-ocid="kundali.setup.place_input"
                  style={inputStyle}
                />
              </div>

              {/* Lat / Lng (optional) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <div>
                  <label
                    htmlFor="ks-lat"
                    style={{
                      ...labelStyle,
                      color: "oklch(0.48 0.10 46)",
                      fontWeight: 500,
                    }}
                  >
                    Latitude{" "}
                    <span style={{ fontWeight: 400, fontStyle: "italic" }}>
                      (opt)
                    </span>
                  </label>
                  <input
                    id="ks-lat"
                    type="number"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    placeholder="20.59"
                    step="0.01"
                    data-ocid="kundali.setup.lat_input"
                    style={{
                      ...inputStyle,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="ks-lng"
                    style={{
                      ...labelStyle,
                      color: "oklch(0.48 0.10 46)",
                      fontWeight: 500,
                    }}
                  >
                    Longitude{" "}
                    <span style={{ fontWeight: 400, fontStyle: "italic" }}>
                      (opt)
                    </span>
                  </label>
                  <input
                    id="ks-lng"
                    type="number"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    placeholder="78.96"
                    step="0.01"
                    data-ocid="kundali.setup.lng_input"
                    style={{
                      ...inputStyle,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="ks-email" style={labelStyle}>
                  Email Address *
                </label>
                <input
                  id="ks-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  data-ocid="kundali.setup.email_input"
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="ks-phone"
                  style={{ ...labelStyle, fontWeight: 500 }}
                >
                  Phone Number{" "}
                  <span
                    style={{
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "oklch(0.52 0.10 46)",
                    }}
                  >
                    (optional)
                  </span>
                </label>
                <input
                  id="ks-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  data-ocid="kundali.setup.phone_input"
                  style={inputStyle}
                />
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "oklch(0.52 0.10 46)",
                    fontStyle: "italic",
                    marginTop: "3px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ✦ For future festival reminders via WhatsApp/SMS
                </p>
              </div>

              {/* Newsletter opt-in */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  cursor: "pointer",
                  padding: "10px 12px",
                  borderRadius: "7px",
                  background: newsletterOptIn
                    ? "oklch(0.78 0.34 54 / 0.08)"
                    : "oklch(0.94 0.05 72 / 0.5)",
                  border: `1.5px solid oklch(0.78 0.34 54 / ${newsletterOptIn ? "0.35" : "0.15"})`,
                  transition: "all 0.2s ease",
                }}
              >
                <input
                  type="checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="mt-1 accent-amber-600"
                  data-ocid="kundali.setup.newsletter_checkbox"
                />
                <span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "oklch(0.25 0.10 32)",
                      display: "block",
                    }}
                  >
                    Receive Sacred Festival Newsletters
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      fontStyle: "italic",
                      color: "oklch(0.45 0.10 40)",
                    }}
                  >
                    Deep Vedic stories, rituals &amp; dharmic significance
                  </span>
                </span>
              </label>

              {/* Error */}
              {formError && (
                <div
                  data-ocid="kundali.setup.error_state"
                  style={{
                    background: "oklch(0.94 0.06 24 / 0.3)",
                    border: "1px solid oklch(0.65 0.22 24 / 0.5)",
                    borderRadius: "5px",
                    padding: "9px 12px",
                    fontSize: "0.75rem",
                    color: "oklch(0.38 0.18 24)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {formError}
                </div>
              )}

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || isSaving}
                className="wax-seal-btn"
                data-ocid="kundali.setup.submit_button"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "4px",
                  fontSize: "1rem",
                }}
              >
                {submitting || isSaving ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <span className="om-loading" style={{ fontSize: "1rem" }}>
                      ॐ
                    </span>
                    Preparing your Kundali…
                  </span>
                ) : (
                  "Reveal My Kundali ✦"
                )}
              </button>
            </div>

            {/* Bottom gold line */}
            <div
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), transparent)",
                borderRadius: "1px",
                marginTop: "20px",
              }}
            />
          </div>

          {/* Info note */}
          <p
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "oklch(0.50 0.10 46)",
              fontStyle: "italic",
              fontFamily: "var(--font-body)",
              marginTop: "14px",
              lineHeight: 1.6,
            }}
          >
            ✦ Your details are saved securely once. You will never be asked
            again. ✦
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

const KUNDALI_SETUP_DONE_KEY = "gita-kundali-setup-done";

function autosaveHasValidData(): boolean {
  try {
    const s = localStorage.getItem("gita-kundali-form-autosave");
    if (!s) return false;
    const data = JSON.parse(s) as Record<string, string>;
    return !!(data.name?.trim() && data.dob);
  } catch {
    return false;
  }
}

export function KundaliLitePage() {
  const [activeTab, setActiveTab] = useState<KundaliTab>("my-kundali");
  const { kundli } = useKundli();
  const {
    vedicProfile,
    saveProfile,
    isLoading: profileLoading,
  } = useUserProfile();
  const { saveKundli, isLoading: kundliLoading } = useKundli();
  const { subscribe } = useNewsletter();

  // Initialize from localStorage so the flag survives navigation and page refreshes
  const [setupDone, setSetupDone] = useState(() => {
    try {
      return (
        localStorage.getItem(KUNDALI_SETUP_DONE_KEY) === "1" ||
        autosaveHasValidData()
      );
    } catch {
      return false;
    }
  });

  // Determine if user has already entered birth details
  const hasProfile =
    setupDone ||
    (vedicProfile !== null &&
      vedicProfile?.fullName?.trim().length > 0 &&
      vedicProfile?.dateOfBirth?.year > 0);

  function handleSetupComplete() {
    try {
      localStorage.setItem(KUNDALI_SETUP_DONE_KEY, "1");
    } catch {
      /* silent */
    }
    setSetupDone(true);
  }

  // Show sacred setup screen if profile missing
  if (!hasProfile) {
    return (
      <KundaliSetupScreen
        onComplete={handleSetupComplete}
        saveProfile={saveProfile}
        saveKundli={saveKundli}
        subscribe={subscribe}
        isSaving={profileLoading || kundliLoading}
      />
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, oklch(0.93 0.08 68) 0%, oklch(0.90 0.10 62) 100%)",
        paddingBottom: "80px",
      }}
    >
      {/* Hero Header */}
      <div
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.10 32) 0%, oklch(0.18 0.12 28) 100%)",
          padding: "20px 16px 18px",
          textAlign: "center",
          boxShadow: "0 4px 20px oklch(0.12 0.08 28 / 0.45)",
          position: "relative",
          overflow: "hidden",
        }}
        data-ocid="kundali.hero"
      >
        {/* Temple arch ornament */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), oklch(0.86 0.40 54), oklch(0.78 0.34 54), transparent)",
          }}
        />
        {/* Swastik */}
        <div
          className="swastik-symbol"
          style={{
            fontSize: "1.8rem",
            marginBottom: "6px",
            display: "inline-block",
            color: "oklch(0.84 0.38 54)",
            textShadow:
              "0 0 12px oklch(0.78 0.34 54 / 0.7), 0 0 28px oklch(0.78 0.34 54 / 0.4)",
            userSelect: "none",
          }}
          aria-label="Swastik — auspicious sacred symbol"
        >
          卍
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.55rem",
            fontStyle: "italic",
            color: "oklch(0.94 0.08 68)",
            textShadow: "0 2px 12px oklch(0.12 0.08 28 / 0.55)",
            lineHeight: 1.2,
            marginBottom: "4px",
          }}
        >
          Kundali Lite + Graha Shanti
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "oklch(0.78 0.22 54 / 0.85)",
            fontStyle: "italic",
            letterSpacing: "0.04em",
          }}
        >
          Jyotish for Daily Life · Upay not Bhay
        </p>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "0",
          background: "oklch(0.20 0.10 30)",
          borderBottom: "2px solid oklch(0.72 0.28 52 / 0.45)",
          scrollbarWidth: "none",
        }}
        data-ocid="kundali.tab_nav"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            data-ocid={`kundali.tab.${tab.id}`}
            style={{
              flex: "1 0 auto",
              minWidth: "80px",
              padding: "11px 10px 9px",
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              fontWeight: activeTab === tab.id ? 700 : 500,
              color:
                activeTab === tab.id
                  ? "oklch(0.84 0.38 54)"
                  : "oklch(0.72 0.20 52 / 0.75)",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2.5px solid oklch(0.84 0.38 54)"
                  : "2.5px solid transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textAlign: "center",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <span style={{ fontSize: "1rem" }}>{tab.glyph}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "16px" }}>
        {activeTab === "my-kundali" && <MyKundaliTab />}
        {activeTab === "aaj-ka-graha" && <AajKaGrahaTab kundli={kundli} />}
        {activeTab === "graha-shanti" && <GrahaShantTab />}
        {activeTab === "gemstone-check" && <GemstoneCheckTab />}
        {activeTab === "transit-calendar" && <TransitCalendarTab />}
      </div>

      {/* Safety Footer */}
      <div
        className="kundli-disclaimer"
        data-ocid="kundali.disclaimer"
        style={{
          margin: "8px 16px 0",
          padding: "12px 16px",
          background: "oklch(0.94 0.07 64 / 0.7)",
          border: "1px solid oklch(0.72 0.22 50 / 0.30)",
          borderRadius: "6px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "oklch(0.42 0.12 44)",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          ✦ Jyotish is eye of Vedas. Karma + Dharma are above all grahas. Use
          this as guidance, not final truth. ✦
          <br />
          Remedies are spiritual support. Consult a doctor for health issues.
          Ratna can give opposite effect if planet malefic — consult a qualified
          Daivagna before wearing.
        </p>
      </div>
    </div>
  );
}
