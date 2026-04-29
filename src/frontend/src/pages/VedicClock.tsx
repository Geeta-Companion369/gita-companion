import { motion } from "motion/react";
import { useEffect, useState } from "react";

const MUHURTAS = [
  "Rudra",
  "Ahi",
  "Mitra",
  "Pitru",
  "Vasu",
  "Vara",
  "Vishvedeva",
  "Vidhi",
  "Satamukhi",
  "Puruhuta",
  "Vahini",
  "Naktanakara",
  "Varuna",
  "Aryama",
  "Bhaga",
  "Girisa",
  "Ajapada",
  "Ahirbudhnya",
  "Pushya",
  "Ashwini",
  "Yama",
  "Agni",
  "Vidhata",
  "Kanda",
  "Aditi",
  "Jiva",
  "Vishnu",
  "Dyumadgadyuti",
  "Brahma",
  "Samudrama",
  "Purnayu",
];

const VARAS = [
  "Ravi-vara",
  "Soma-vara",
  "Mangala-vara",
  "Budha-vara",
  "Guru-vara",
  "Shukra-vara",
  "Shani-vara",
];
const VARA_DEITY = [
  "Surya (Sun)",
  "Chandra (Moon)",
  "Mangala (Mars)",
  "Budha (Mercury)",
  "Brihaspati (Jupiter)",
  "Shukra (Venus)",
  "Shani (Saturn)",
];

const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishtha",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

// Rahu Kaal duration = 90 minutes per day, time changes per weekday
const RAHU_KAAL_HOURS: [number, number][] = [
  [7.5, 9], // Sunday: 7:30–9:00
  [7.5, 9], // Monday: 7:30–9:00 (adjusted to start)
  [15, 16.5], // Tuesday: 3:00–4:30 PM
  [12, 13.5], // Wednesday: 12:00–1:30 PM
  [13.5, 15], // Thursday: 1:30–3:00 PM
  [10.5, 12], // Friday: 10:30–12:00 PM
  [9, 10.5], // Saturday: 9:00–10:30 AM
];
const RAHU_KAAL_TIMES = [
  "7:30–9:00 AM",
  "7:30–9:00 AM",
  "3:00–4:30 PM",
  "12:00–1:30 PM",
  "1:30–3:00 PM",
  "10:30 AM–12:00 PM",
  "9:00–10:30 AM",
];

function getVedicData(now: Date) {
  const h = now.getHours() + now.getMinutes() / 60;
  const totalMins = now.getHours() * 60 + now.getMinutes();
  const dayFraction = totalMins / 1440; // 0-1

  // Muhurta: 30 per day, each ~48 mins (24*60/30 = 48)
  const muhurtaIdx = Math.floor(totalMins / 48) % 30;

  // Prahara: 8 per day, ~3hrs each
  const praharaIdx = Math.floor(totalMins / 180) % 8;
  const praharaNames = [
    "Pratah (Dawn)",
    "Sangava (Morning)",
    "Madhyahna (Midday)",
    "Aparahna (Afternoon)",
    "Sayahna (Evening)",
    "Pradosha (Dusk)",
    "Nishi (Night)",
    "Ardha-Ratra (Midnight)",
  ];

  // Ghati: 60 per day = 24 mins each. Pala: 60 per ghati = 24 seconds each
  const ghati = Math.floor(totalMins / 24);
  const pala = Math.floor((totalMins % 24) * 2.5);

  // Tithi: approximate lunar day (1-30) based on day of year
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000,
  );
  const lunarDay = ((dayOfYear * 12.37) / 365) % 30;
  const tithiNum = Math.floor(lunarDay) + 1;
  const paksha = lunarDay < 15 ? "Shukla Paksha" : "Krishna Paksha";
  const tithiNames = [
    "Pratipada",
    "Dwitiya",
    "Tritiya",
    "Chaturthi",
    "Panchami",
    "Shashthi",
    "Saptami",
    "Ashtami",
    "Navami",
    "Dashami",
    "Ekadashi",
    "Dwadashi",
    "Trayodashi",
    "Chaturdashi",
    "Purnima/Amavasya",
  ];
  const tithi = tithiNames[Math.min(tithiNum - 1, 14)];

  // Nakshatra: approximate
  const nakshatraIdx = Math.floor((dayOfYear * 27.32) / 365) % 27;

  // Brahma Muhurta: 4:24 AM to 5:12 AM (48 mins before sunrise ~6 AM)
  const bramhaMuhurta = "4:24 AM – 5:12 AM";
  const isBrahmaMuhurta = h >= 4.4 && h < 5.2;

  const dayOfWeek = now.getDay();
  const rahuKaal = RAHU_KAAL_TIMES[dayOfWeek];
  const [rahuStart, rahuEnd] = RAHU_KAAL_HOURS[dayOfWeek];
  const isRahuKaal = h >= rahuStart && h < rahuEnd;

  // Auspicious times (simplified — morning golden hours)
  const auspiciousTimes =
    h >= 6 && h < 7.5
      ? "Now — Pratah Kala is auspicious!"
      : h >= 9 && h < 10.5
        ? "Sangava Kala — auspicious for business and decisions"
        : "Check Panchang for today's specific muhurta";

  return {
    muhurta: MUHURTAS[muhurtaIdx],
    muhurtaIdx,
    prahara: praharaNames[praharaIdx],
    praharaIdx,
    ghati,
    pala,
    tithi,
    paksha,
    vara: VARAS[dayOfWeek],
    varaDeity: VARA_DEITY[dayOfWeek],
    nakshatra: NAKSHATRAS[nakshatraIdx],
    bramhaMuhurta,
    isBrahmaMuhurta,
    rahuKaal,
    isRahuKaal,
    auspiciousTimes,
    dayFraction,
  };
}

function pad(n: number, len = 2): string {
  return String(n).padStart(len, "0");
}

function ClockHand({
  angle,
  length,
  width,
  color,
}: { angle: number; length: number; width: number; color: string }) {
  const cx = 50;
  const cy = 50;
  const rad = (angle - 90) * (Math.PI / 180);
  const x2 = cx + length * Math.cos(rad);
  const y2 = cy + length * Math.sin(rad);
  return (
    <line
      x1={cx}
      y1={cy}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
    />
  );
}

export function VedicClockPage() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const data = getVedicData(now);

  const hourAngle = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
  const minuteAngle = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const secondAngle = now.getSeconds() * 6;
  const muhurtaAngle = (data.muhurtaIdx / 30) * 360;
  const ghatiAngle = (data.ghati / 60) * 360;

  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const dateStr = now.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page-enter" data-ocid="vedic-clock.page">
      <div className="ornate-header mb-8">
        <h1>वैदिक काल</h1>
        <p
          className="font-body text-base italic mt-3"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          Sacred Time — The Vedic Way of Knowing the Present Moment
        </p>
      </div>

      {/* Brahma Muhurta alert */}
      {data.isBrahmaMuhurta && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="manuscript-card p-4 mb-5 text-center"
          style={{ borderLeft: "4px solid oklch(0.48 0.24 268)" }}
          data-ocid="vedic-clock.brahma-muhurta-alert"
        >
          <p
            className="font-display text-sm font-bold italic"
            style={{ color: "oklch(0.48 0.20 268)" }}
          >
            🌅 Brahma Muhurta is NOW
          </p>
          <p
            className="font-body text-xs italic mt-1"
            style={{ color: "oklch(0.35 0.12 38)" }}
          >
            This is the most sacred hour — ideal for meditation, Gita reading,
            and naam japa. Seize it, Arjun!
          </p>
        </motion.div>
      )}

      {/* Rahu Kaal alert */}
      {data.isRahuKaal && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="manuscript-card p-4 mb-5 text-center"
          style={{ borderLeft: "4px solid oklch(0.55 0.24 26)" }}
          data-ocid="vedic-clock.rahu-kaal-alert"
        >
          <p
            className="font-display text-sm font-bold italic"
            style={{ color: "oklch(0.55 0.24 26)" }}
          >
            ⚠️ Rahu Kaal is Active
          </p>
          <p
            className="font-body text-xs italic mt-1"
            style={{ color: "oklch(0.35 0.12 38)" }}
          >
            Avoid beginning important new activities during Rahu Kaal. Continue
            ongoing work with Krishna's name.
          </p>
        </motion.div>
      )}

      {/* Main clock */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* SVG Clock Face */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="manuscript-card p-4 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full max-w-[280px]"
            aria-label="Vedic clock showing current time"
            role="img"
            style={{
              filter: "drop-shadow(0 4px 24px oklch(0.72 0.32 52 / 0.3))",
            }}
          >
            {/* Outer ring — sacred geometry mandala style */}
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="oklch(0.72 0.28 52)"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="50" r="46" fill="oklch(0.94 0.06 68)" />
            {/* Vedic Sanskrit hour markers */}
            {Array.from({ length: 12 }, (_, i) => {
              const a = (i / 12) * 360 - 90;
              const rad = a * (Math.PI / 180);
              const x1 = 50 + 42 * Math.cos(rad);
              const y1 = 50 + 42 * Math.sin(rad);
              const x2 = 50 + 44 * Math.cos(rad);
              const y2 = 50 + 44 * Math.sin(rad);
              const angles = [
                0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
              ];
              return (
                <line
                  key={angles[i]}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="oklch(0.68 0.28 52)"
                  strokeWidth="1.5"
                />
              );
            })}
            {/* Muhurta ring */}
            {Array.from({ length: 30 }, (_, i) => {
              const a = (i / 30) * 360 - 90;
              const rad = a * (Math.PI / 180);
              const x1 = 50 + 36 * Math.cos(rad);
              const y1 = 50 + 36 * Math.sin(rad);
              const x2 = 50 + 38 * Math.cos(rad);
              const y2 = 50 + 38 * Math.sin(rad);
              const deg = Math.round(i * 12);
              return (
                <line
                  key={deg}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="oklch(0.62 0.24 48 / 0.6)"
                  strokeWidth="0.5"
                />
              );
            })}
            {/* Current muhurta arc */}
            <circle
              cx="50"
              cy="50"
              r="37"
              fill="none"
              stroke="oklch(0.72 0.32 52 / 0.25)"
              strokeWidth="3"
              strokeDasharray={`${(muhurtaAngle / 360) * 232.3} 232.3`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            {/* Ghati ring */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="oklch(0.48 0.22 268 / 0.2)"
              strokeWidth="2"
              strokeDasharray={`${(ghatiAngle / 360) * 188.5} 188.5`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            {/* Clock face inner bg */}
            <circle cx="50" cy="50" r="28" fill="oklch(0.92 0.07 66)" />
            {/* Lotus petal decorations */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
              const rad = (a - 90) * (Math.PI / 180);
              const x = 50 + 24 * Math.cos(rad);
              const y = 50 + 24 * Math.sin(rad);
              return (
                <circle
                  key={a}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="oklch(0.72 0.28 52 / 0.4)"
                />
              );
            })}
            {/* Clock hands */}
            <ClockHand
              angle={hourAngle}
              length={14}
              width={1.8}
              color="oklch(0.22 0.10 32)"
            />
            <ClockHand
              angle={minuteAngle}
              length={19}
              width={1.2}
              color="oklch(0.42 0.18 44)"
            />
            <ClockHand
              angle={secondAngle}
              length={22}
              width={0.7}
              color="oklch(0.62 0.26 32)"
            />
            {/* Center */}
            <circle cx="50" cy="50" r="2" fill="oklch(0.72 0.32 52)" />
            {/* OM symbol */}
            <text
              x="50"
              y="18"
              textAnchor="middle"
              fontSize="5"
              fontFamily="serif"
              fill="oklch(0.68 0.28 52)"
              fontWeight="bold"
              aria-label="OM"
            >
              ॐ
            </text>
          </svg>
        </motion.div>

        {/* Modern time + key Vedic time */}
        <div className="space-y-4">
          <div
            className="manuscript-card p-5"
            data-ocid="vedic-clock.modern-time"
          >
            <p
              className="font-display text-xs font-bold italic mb-1"
              style={{ color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" }}
            >
              MODERN TIME
            </p>
            <p
              className="font-display font-bold"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.2rem)",
                color: "oklch(0.22 0.10 32)",
                letterSpacing: "0.05em",
              }}
            >
              {timeStr}
            </p>
            <p
              className="font-body text-xs italic mt-1"
              style={{ color: "oklch(0.48 0.12 46)" }}
            >
              {dateStr}
            </p>
          </div>
          <div className="manuscript-card p-4" data-ocid="vedic-clock.vara">
            <p
              className="font-display text-xs font-bold italic mb-1"
              style={{ color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" }}
            >
              VARA · WEEKDAY
            </p>
            <p
              className="font-display text-xl font-bold italic"
              style={{ color: "oklch(0.42 0.20 46)" }}
            >
              {data.vara}
            </p>
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.52 0.12 46)" }}
            >
              Ruled by {data.varaDeity}
            </p>
          </div>
          <div className="manuscript-card p-4" data-ocid="vedic-clock.muhurta">
            <p
              className="font-display text-xs font-bold italic mb-1"
              style={{ color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" }}
            >
              CURRENT MUHURTA
            </p>
            <p
              className="font-display text-xl font-bold italic"
              style={{ color: "oklch(0.42 0.20 46)" }}
            >
              {data.muhurta}
            </p>
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.52 0.12 46)" }}
            >
              Muhurta {data.muhurtaIdx + 1} of 30 · ~48 min each
            </p>
          </div>
        </div>
      </div>

      {/* Vedic time details grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "PRAHARA",
            value: data.prahara,
            sub: `Prahara ${data.praharaIdx + 1} of 8`,
            icon: "🌅",
            ocid: "prahara",
          },
          {
            label: "GHATI · PALA",
            value: `${data.ghati} Gh · ${data.pala} Pa`,
            sub: "60 ghatis per day",
            icon: "⏱️",
            ocid: "ghati",
          },
          {
            label: "TITHI",
            value: data.tithi,
            sub: `Lunar day ${data.tithi}`,
            icon: "🌙",
            ocid: "tithi",
          },
          {
            label: "PAKSHA",
            value: data.paksha,
            sub:
              data.paksha === "Shukla Paksha"
                ? "Waxing Moon fortnight"
                : "Waning Moon fortnight",
            icon: "🌓",
            ocid: "paksha",
          },
          {
            label: "NAKSHATRA",
            value: data.nakshatra,
            sub: "Lunar mansion of the day",
            icon: "⭐",
            ocid: "nakshatra",
          },
          {
            label: "RAHU KAAL",
            value: data.rahuKaal,
            sub: "Avoid new beginnings",
            icon: "⚠️",
            ocid: "rahu-kaal",
          },
        ].map(({ label, value, sub, icon, ocid }) => (
          <motion.div
            key={ocid}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="manuscript-card p-4"
            data-ocid={`vedic-clock.${ocid}`}
          >
            <span className="block text-xl mb-2">{icon}</span>
            <p
              className="font-display text-xs font-bold italic mb-1"
              style={{ color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" }}
            >
              {label}
            </p>
            <p
              className="font-display text-base font-bold italic leading-tight"
              style={{ color: "oklch(0.28 0.12 34)" }}
            >
              {value}
            </p>
            <p
              className="font-body text-[10px] italic mt-0.5"
              style={{ color: "oklch(0.52 0.12 46)" }}
            >
              {sub}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Daily guidance */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="manuscript-card p-6"
        data-ocid="vedic-clock.guidance.section"
      >
        <div className="divider-ornate mb-5">
          🌸 Today's Sacred Time Guidance
        </div>
        <div className="space-y-4">
          <div className="verse-display">
            <p className="text-verse-number mb-1">BRAHMA MUHURTA TODAY</p>
            <p className="verse-translation">
              Brahma Muhurta is at <strong>{data.bramhaMuhurta}</strong> today —
              the most powerful time for meditation, Gita reading, and naam
              japa. This is when the world is still and Krishna is most easily
              heard.
            </p>
          </div>
          <div className="verse-display">
            <p className="text-verse-number mb-1">AUSPICIOUS TIME NOW</p>
            <p className="verse-translation">{data.auspiciousTimes}</p>
          </div>
          <div
            className="verse-display"
            style={{ borderLeftColor: "oklch(0.55 0.24 26 / 0.65)" }}
          >
            <p
              className="text-verse-number mb-1"
              style={{ color: "oklch(0.55 0.24 26)" }}
            >
              RAHU KAAL — AVOID
            </p>
            <p className="verse-translation">
              Today's Rahu Kaal: <strong>{data.rahuKaal}</strong>. Avoid
              beginning new ventures, journeys, or important decisions. Chant
              Krishna's name continuously during this period for protection.
            </p>
          </div>
          <div
            className="verse-display"
            style={{ borderLeftColor: "oklch(0.48 0.22 268 / 0.65)" }}
          >
            <p
              className="text-verse-number mb-1"
              style={{ color: "oklch(0.48 0.22 268)" }}
            >
              GITA CONNECTION — BG 8.17
            </p>
            <p className="verse-translation">
              <em>
                "By human calculation, a thousand ages taken together form the
                duration of Brahma's one day."
              </em>
              — The Vedic understanding of time humbles the ego and expands the
              soul.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
