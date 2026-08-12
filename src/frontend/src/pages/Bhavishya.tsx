/**
 * Bhavishya.tsx — Bhavishya Gathan (Future Knowledge)
 * Two modes:
 *   1. Vedic astrology — links to /kundali-lite (KundaliLite content)
 *   2. Western — tarot reading using getBackend().listTarotCards() + drawTarot()
 * Mode selector at top. Manuscript-page styling, larger fonts. No Gen Z.
 */
import type { TarotCard, TarotReading } from "@/backend.d";
import { getBackend } from "@/lib/backend-client";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

type Mode = "vedic" | "western";

const SPREAD_OPTIONS: Array<{
  id: string;
  label: string;
  positions: string[];
}> = [
  {
    id: "single",
    label: "Single Card — Daily Guidance",
    positions: ["Today's Reflection"],
  },
  {
    id: "three-card",
    label: "Three Card — Past, Present, Future",
    positions: ["Past", "Present", "Future"],
  },
  {
    id: "mind-heart",
    label: "Mind & Heart — Inner Dialogue",
    positions: ["Mind", "Heart", "Synthesis"],
  },
];

const VEDIC_FEATURES: Array<{
  glyph: string;
  title: string;
  sanskrit: string;
  description: string;
  href: string;
  cta: string;
}> = [
  {
    glyph: "🪐",
    title: "My Kundali",
    sanskrit: "जन्म कुण्डली",
    description:
      "Your Vedic birth chart — Lagna, Navamsa, Vimshottari Dasha. The sacred map of your soul's journey, calculated from your birth details.",
    href: "/kundali-lite",
    cta: "Open My Kundali",
  },
  {
    glyph: "🌞",
    title: "Aaj Ka Graha",
    sanskrit: "आज का ग्रह",
    description:
      "Today's Panchang (Tithi, Nakshatra, Yoga, Karana) and the daily position of Chandra from your Rashi — with mantra and remedy.",
    href: "/kundali-lite",
    cta: "See Today's Graha",
  },
  {
    glyph: "🔱",
    title: "Graha Shanti",
    sanskrit: "ग्रह शान्ति",
    description:
      "The nine grahas — Surya, Chandra, Mangal, Budh, Guru, Shukra, Shani, Rahu, Ketu. Their mantras, remedies, daan, and gemstone guidance.",
    href: "/kundali-lite",
    cta: "Open Graha Shanti",
  },
  {
    glyph: "📅",
    title: "Transit Calendar",
    sanskrit: "गोचर पञ्जिका",
    description:
      "Twelve months of graha gochar, vakri (retrograde), and eclipse events — with remedies for each transit and downloadable calendar entries.",
    href: "/kundali-lite",
    cta: "View Transits",
  },
];

function ModeSelector({
  mode,
  onChange,
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
}) {
  return (
    <div
      className="mx-3 mt-4 mb-2 grid grid-cols-2 gap-2"
      data-ocid="bhavishya.mode_selector"
    >
      <button
        type="button"
        onClick={() => onChange("vedic")}
        data-ocid="bhavishya.mode.vedic"
        className="flex flex-col items-center gap-1 py-3 px-3 rounded-xl transition-smooth"
        style={{
          background:
            mode === "vedic"
              ? "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.65 0.28 46))"
              : "oklch(0.95 0.06 70)",
          border:
            mode === "vedic"
              ? "2px solid oklch(0.62 0.26 32)"
              : "1.5px solid oklch(0.72 0.22 54 / 0.35)",
          boxShadow:
            mode === "vedic" ? "0 6px 22px oklch(0.72 0.30 52 / 0.35)" : "none",
          color:
            mode === "vedic" ? "oklch(0.12 0.06 28)" : "oklch(0.32 0.12 40)",
        }}
      >
        <span style={{ fontSize: "1.6rem" }} aria-hidden>
          🪐
        </span>
        <span
          className="font-display font-bold italic"
          style={{ fontSize: "1.05rem" }}
        >
          Vedic Jyotish
        </span>
        <span
          className="font-body italic"
          style={{ fontSize: "0.78rem", opacity: 0.85 }}
        >
          Kundali · Graha · Panchang
        </span>
      </button>
      <button
        type="button"
        onClick={() => onChange("western")}
        data-ocid="bhavishya.mode.western"
        className="flex flex-col items-center gap-1 py-3 px-3 rounded-xl transition-smooth"
        style={{
          background:
            mode === "western"
              ? "linear-gradient(135deg, oklch(0.54 0.26 268), oklch(0.46 0.24 280))"
              : "oklch(0.95 0.06 70)",
          border:
            mode === "western"
              ? "2px solid oklch(0.40 0.22 268)"
              : "1.5px solid oklch(0.72 0.22 54 / 0.35)",
          boxShadow:
            mode === "western"
              ? "0 6px 22px oklch(0.50 0.24 268 / 0.35)"
              : "none",
          color:
            mode === "western" ? "oklch(0.96 0.04 70)" : "oklch(0.32 0.12 40)",
        }}
      >
        <span style={{ fontSize: "1.6rem" }} aria-hidden>
          🃏
        </span>
        <span
          className="font-display font-bold italic"
          style={{ fontSize: "1.05rem" }}
        >
          Western Tarot
        </span>
        <span
          className="font-body italic"
          style={{ fontSize: "0.78rem", opacity: 0.85 }}
        >
          Draw · Reflect · Guidance
        </span>
      </button>
    </div>
  );
}

function VedicMode() {
  return (
    <div className="px-3 pb-6" data-ocid="bhavishya.vedic.section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-1 mt-3 p-4 rounded-xl"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
          border: "1.5px solid oklch(0.76 0.24 54 / 0.40)",
          boxShadow: "0 4px 20px rgba(180,130,45,0.14)",
        }}
        data-ocid="bhavishya.vedic.intro"
      >
        <div className="flex items-start gap-3">
          <span style={{ fontSize: "1.6rem" }} aria-hidden>
            🪐
          </span>
          <div>
            <p
              className="font-display font-bold italic mb-1"
              style={{ color: "oklch(0.22 0.10 32)", fontSize: "1.05rem" }}
            >
              Vedic Jyotish — The Eye of the Vedas
            </p>
            <p
              className="font-body leading-relaxed"
              style={{ color: "oklch(0.30 0.09 34)", fontSize: "0.95rem" }}
            >
              Jyotish is the science of light — the Vedic understanding that the
              grahas (planets) reflect your karmic patterns. Your Kundali is a
              sacred map; remedies (upay) are spiritual support, never a
              substitute for dharma and right action.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {VEDIC_FEATURES.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="rounded-xl p-4 flex flex-col gap-2"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
              border: "1.5px solid oklch(0.76 0.24 54 / 0.40)",
              boxShadow: "0 4px 18px rgba(180,130,45,0.12)",
            }}
            data-ocid={`bhavishya.vedic.feature.${idx + 1}`}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "1.5rem" }} aria-hidden>
                {f.glyph}
              </span>
              <div>
                <p
                  className="font-display font-bold italic"
                  style={{ color: "oklch(0.22 0.10 32)", fontSize: "1.05rem" }}
                >
                  {f.title}
                </p>
                <p
                  className="font-body"
                  style={{
                    color: "oklch(0.55 0.20 46)",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                  }}
                  lang="sa"
                >
                  {f.sanskrit}
                </p>
              </div>
            </div>
            <p
              className="font-body leading-relaxed"
              style={{ color: "oklch(0.32 0.10 38)", fontSize: "0.92rem" }}
            >
              {f.description}
            </p>
            <Link
              to={f.href}
              className="wax-seal-btn mt-1 self-start"
              style={{ fontSize: "0.85rem", padding: "0.55rem 1.1rem" }}
              data-ocid={`bhavishya.vedic.feature.${idx + 1}.open_button`}
            >
              {f.cta} →
            </Link>
          </motion.div>
        ))}
      </div>

      <div
        className="mt-4 p-3 rounded-xl text-center"
        style={{
          background: "oklch(0.94 0.08 60 / 0.6)",
          border: "1px solid oklch(0.72 0.24 54 / 0.30)",
        }}
        data-ocid="bhavishya.vedic.disclaimer"
      >
        <p
          className="font-body italic"
          style={{ color: "oklch(0.45 0.14 46)", fontSize: "0.85rem" }}
        >
          ✦ Jyotish is the eye of the Vedas. Karma + Dharma are above all
          Grahas. Use this as guidance, not final truth. ✦
        </p>
      </div>
    </div>
  );
}

function TarotCardFace({
  card,
  isReversed,
  positionName,
}: {
  card: TarotCard | undefined;
  isReversed: boolean;
  positionName: string;
}) {
  if (!card) {
    return (
      <div
        className="rounded-xl p-4 flex flex-col items-center justify-center min-h-[180px]"
        style={{
          background: "oklch(0.94 0.06 60 / 0.5)",
          border: "1.5px dashed oklch(0.72 0.22 54 / 0.4)",
        }}
      >
        <p
          className="font-display italic"
          style={{ color: "oklch(0.55 0.14 46)", fontSize: "0.95rem" }}
        >
          …
        </p>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.30 0.10 268) 0%, oklch(0.22 0.12 280) 100%)",
        border: "2px solid oklch(0.78 0.34 54 / 0.55)",
        boxShadow: "0 8px 28px oklch(0.30 0.18 268 / 0.45)",
      }}
      data-ocid="bhavishya.tarot.card_face"
    >
      <div
        className="text-center py-1.5 font-display font-bold tracking-widest uppercase"
        style={{
          background: "oklch(0.78 0.34 54 / 0.25)",
          color: "oklch(0.94 0.06 70)",
          fontSize: "0.72rem",
          borderBottom: "1px solid oklch(0.78 0.34 54 / 0.35)",
        }}
      >
        {positionName}
      </div>
      <div
        className="p-4 flex flex-col items-center gap-2"
        style={{
          transform: isReversed ? "rotate(180deg)" : "none",
        }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: "64px",
            height: "64px",
            background:
              "radial-gradient(circle, oklch(0.78 0.34 54 / 0.35) 0%, oklch(0.40 0.20 268 / 0.4) 100%)",
            border: "1.5px solid oklch(0.78 0.34 54 / 0.55)",
            boxShadow: "0 0 18px oklch(0.78 0.34 54 / 0.45)",
          }}
          aria-hidden
        >
          <span style={{ fontSize: "1.6rem" }}>🃏</span>
        </div>
        <p
          className="font-display font-bold italic text-center"
          style={{ color: "oklch(0.94 0.06 70)", fontSize: "1.05rem" }}
        >
          {card.name}
        </p>
        <p
          className="font-body"
          style={{
            color: "oklch(0.78 0.22 54)",
            fontSize: "0.78rem",
            fontStyle: "italic",
          }}
        >
          {card.arcana} Arcana · {card.suit} · No. {card.number.toString()}
        </p>
      </div>
      <div
        className="px-4 pb-3"
        style={{ borderTop: "1px solid oklch(0.78 0.34 54 / 0.25)" }}
      >
        <p
          className="font-body text-center"
          style={{
            color: isReversed ? "oklch(0.86 0.20 24)" : "oklch(0.86 0.20 148)",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          {isReversed ? "⟲ Reversed" : "↑ Upright"}
        </p>
        <p
          className="font-body mt-1 leading-relaxed"
          style={{
            color: "oklch(0.92 0.06 70)",
            fontSize: "0.88rem",
          }}
        >
          {isReversed ? card.reversedMeaning : card.uprightMeaning}
        </p>
      </div>
    </motion.div>
  );
}

function WesternMode() {
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [cardsLoading, setCardsLoading] = useState(true);
  const [cardsError, setCardsError] = useState<string | null>(null);

  const [spreadType, setSpreadType] = useState<string>("three-card");
  const [question, setQuestion] = useState("");
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [drawError, setDrawError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setCardsLoading(true);
    getBackend()
      .listTarotCards()
      .then((c) => {
        if (active) {
          setCards(c);
          setCardsError(null);
        }
      })
      .catch(() => {
        if (active)
          setCardsError("Could not load the tarot deck. Please try again.");
      })
      .finally(() => {
        if (active) setCardsLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const cardById = useCallback(
    (id: string) => cards.find((c) => c.id === id),
    [cards],
  );

  const handleDraw = useCallback(async () => {
    setDrawing(true);
    setDrawError(null);
    try {
      const r = await getBackend().drawTarot(spreadType, question.trim());
      setReading(r);
    } catch {
      setDrawError("The cards could not be drawn at this moment. Try again.");
    } finally {
      setDrawing(false);
    }
  }, [spreadType, question]);

  const _activeSpread =
    SPREAD_OPTIONS.find((s) => s.id === spreadType) ?? SPREAD_OPTIONS[1];

  return (
    <div className="px-3 pb-6" data-ocid="bhavishya.western.section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-1 mt-3 p-4 rounded-xl"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.30 0.10 268 / 0.92) 0%, oklch(0.24 0.12 280 / 0.92) 100%)",
          border: "1.5px solid oklch(0.78 0.34 54 / 0.45)",
          boxShadow: "0 6px 24px oklch(0.30 0.18 268 / 0.30)",
        }}
        data-ocid="bhavishya.western.intro"
      >
        <div className="flex items-start gap-3">
          <span style={{ fontSize: "1.6rem" }} aria-hidden>
            🃏
          </span>
          <div>
            <p
              className="font-display font-bold italic mb-1"
              style={{ color: "oklch(0.94 0.06 70)", fontSize: "1.05rem" }}
            >
              Western Tarot — Mirror of the Subconscious
            </p>
            <p
              className="font-body leading-relaxed"
              style={{
                color: "oklch(0.86 0.10 70)",
                fontSize: "0.92rem",
              }}
            >
              The tarot does not predict a fixed future — it reflects the inner
              landscape of the questioner. Sit quietly, hold your question with
              sincerity, then draw. The cards reveal what your own subconscious
              already knows.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Spread selector */}
      <div className="mt-4">
        <p
          className="font-display font-bold italic mb-2"
          style={{ color: "oklch(0.22 0.10 32)", fontSize: "1rem" }}
        >
          Choose a Spread
        </p>
        <div className="grid grid-cols-1 gap-2">
          {SPREAD_OPTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSpreadType(s.id)}
              data-ocid={`bhavishya.western.spread.${s.id}`}
              className="text-left rounded-xl p-3 transition-smooth"
              style={{
                background:
                  spreadType === s.id
                    ? "linear-gradient(135deg, oklch(0.54 0.26 268), oklch(0.46 0.24 280))"
                    : "oklch(0.95 0.06 70)",
                border:
                  spreadType === s.id
                    ? "2px solid oklch(0.40 0.22 268)"
                    : "1.5px solid oklch(0.72 0.22 54 / 0.35)",
                color:
                  spreadType === s.id
                    ? "oklch(0.96 0.04 70)"
                    : "oklch(0.32 0.12 40)",
              }}
            >
              <p
                className="font-display font-bold italic"
                style={{ fontSize: "0.95rem" }}
              >
                {s.label}
              </p>
              <p
                className="font-body italic"
                style={{ fontSize: "0.82rem", opacity: 0.85 }}
              >
                {s.positions.join(" · ")}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Question input */}
      <div className="mt-4">
        <label
          htmlFor="bhavishya-tarot-question"
          className="font-display font-bold italic block mb-2"
          style={{ color: "oklch(0.22 0.10 32)", fontSize: "1rem" }}
        >
          Your Question (optional)
        </label>
        <textarea
          id="bhavishya-tarot-question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Hold your question in your heart, then write it here…"
          rows={3}
          className="manuscript-input"
          data-ocid="bhavishya.western.question_input"
        />
      </div>

      {/* Draw button */}
      <button
        type="button"
        onClick={handleDraw}
        disabled={drawing || cardsLoading}
        className="wax-seal-btn w-full mt-2 justify-center"
        style={{ fontSize: "1rem", padding: "0.85rem 1.5rem" }}
        data-ocid="bhavishya.western.draw_button"
      >
        {drawing
          ? "✦ Drawing the cards… ✦"
          : cardsLoading
            ? "Loading deck…"
            : "✦ Draw the Cards ✦"}
      </button>

      {drawError && (
        <div
          className="mt-3 p-3 rounded-xl text-center"
          style={{
            background: "oklch(0.94 0.08 24 / 0.3)",
            border: "1px solid oklch(0.65 0.22 24 / 0.45)",
          }}
          data-ocid="bhavishya.western.error_state"
        >
          <p
            className="font-body italic"
            style={{ color: "oklch(0.42 0.18 24)", fontSize: "0.9rem" }}
          >
            {drawError}
          </p>
        </div>
      )}

      {/* Reading result */}
      <AnimatePresence>
        {reading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5"
            data-ocid="bhavishya.western.reading"
          >
            <p
              className="font-display font-bold italic text-center mb-3"
              style={{ color: "oklch(0.22 0.10 32)", fontSize: "1.1rem" }}
            >
              ✦ Your Reading ✦
            </p>
            {reading.question && (
              <p
                className="font-body italic text-center mb-3"
                style={{
                  color: "oklch(0.45 0.14 46)",
                  fontSize: "0.92rem",
                }}
              >
                "{reading.question}"
              </p>
            )}
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: `repeat(${Math.min(reading.draws.length, 3)}, minmax(0, 1fr))`,
              }}
              data-ocid="bhavishya.western.draws"
            >
              {reading.draws.map((d, i) => (
                <TarotCardFace
                  key={`${d.cardId}-${i}`}
                  card={cardById(d.cardId)}
                  isReversed={d.isReversed}
                  positionName={d.positionName}
                />
              ))}
            </div>

            <div
              className="mt-4 p-4 rounded-xl"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
                border: "1.5px solid oklch(0.76 0.24 54 / 0.45)",
                boxShadow: "0 4px 18px rgba(180,130,45,0.14)",
              }}
              data-ocid="bhavishya.western.interpretation"
            >
              <p
                className="font-display font-bold italic mb-2"
                style={{ color: "oklch(0.22 0.10 32)", fontSize: "1rem" }}
              >
                Interpretation
              </p>
              <p
                className="font-body leading-relaxed mb-3"
                style={{ color: "oklch(0.28 0.10 36)", fontSize: "0.95rem" }}
              >
                {reading.interpretation}
              </p>
              <p
                className="font-display font-bold italic mb-1"
                style={{ color: "oklch(0.45 0.20 46)", fontSize: "0.95rem" }}
              >
                Guidance
              </p>
              <p
                className="font-body italic leading-relaxed"
                style={{ color: "oklch(0.32 0.10 38)", fontSize: "0.95rem" }}
              >
                {reading.guidance}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deck library */}
      <div className="mt-6">
        <p
          className="font-display font-bold italic text-center mb-3"
          style={{ color: "oklch(0.22 0.10 32)", fontSize: "1.05rem" }}
        >
          ✦ The Tarot Deck ✦
        </p>
        {cardsError ? (
          <div
            className="p-3 rounded-xl text-center"
            style={{
              background: "oklch(0.94 0.08 24 / 0.3)",
              border: "1px solid oklch(0.65 0.22 24 / 0.45)",
            }}
            data-ocid="bhavishya.western.deck_error"
          >
            <p
              className="font-body italic"
              style={{ color: "oklch(0.42 0.18 24)", fontSize: "0.9rem" }}
            >
              {cardsError}
            </p>
          </div>
        ) : cardsLoading ? (
          <div
            className="text-center py-6"
            data-ocid="bhavishya.western.deck_loading"
          >
            <div className="om-loading" aria-label="Loading tarot deck">
              ॐ
            </div>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            data-ocid="bhavishya.western.deck"
          >
            {cards.map((c, i) => (
              <div
                key={c.id}
                className="rounded-xl p-3"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
                  border: "1px solid oklch(0.72 0.22 54 / 0.30)",
                }}
                data-ocid={`bhavishya.western.deck.card.${i + 1}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontSize: "1.2rem" }} aria-hidden>
                    🃏
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-display font-bold italic truncate"
                      style={{
                        color: "oklch(0.22 0.10 32)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {c.name}
                    </p>
                    <p
                      className="font-body italic"
                      style={{
                        color: "oklch(0.55 0.18 46)",
                        fontSize: "0.78rem",
                      }}
                    >
                      {c.arcana} · {c.suit} · No. {c.number.toString()}
                    </p>
                  </div>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: "oklch(0.32 0.10 38)",
                    fontSize: "0.85rem",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>↑ Upright:</span>{" "}
                  {c.uprightMeaning}
                </p>
                <p
                  className="font-body leading-relaxed mt-1"
                  style={{
                    color: "oklch(0.38 0.14 44)",
                    fontSize: "0.85rem",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>⟲ Reversed:</span>{" "}
                  {c.reversedMeaning}
                </p>
                <p
                  className="font-body italic mt-1"
                  style={{
                    color: "oklch(0.50 0.14 46)",
                    fontSize: "0.8rem",
                  }}
                >
                  {c.symbolism}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="mt-4 p-3 rounded-xl text-center"
        style={{
          background: "oklch(0.94 0.08 60 / 0.6)",
          border: "1px solid oklch(0.72 0.24 54 / 0.30)",
        }}
        data-ocid="bhavishya.western.disclaimer"
      >
        <p
          className="font-body italic"
          style={{ color: "oklch(0.45 0.14 46)", fontSize: "0.85rem" }}
        >
          ✦ The cards reflect your inner state — they do not bind your karma.
          Act with dharma; the future is shaped by your actions. ✦
        </p>
      </div>
    </div>
  );
}

export function BhavishyaPage() {
  const [mode, setMode] = useState<Mode>("vedic");

  return (
    <div
      className="manuscript-page min-h-screen pb-28 relative"
      data-ocid="bhavishya.page"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center pt-6 pb-4 px-4"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.88 0.18 54 / 0.55) 0%, oklch(0.82 0.20 268 / 0.45) 50%, oklch(0.86 0.16 54 / 0.50) 100%)",
            borderRadius: "0 0 24px 24px",
            borderBottom: "2px solid oklch(0.78 0.30 54 / 0.45)",
          }}
          data-ocid="bhavishya.hero"
        >
          <div
            className="text-5xl mb-2 sacred-float divine-glow-pulse"
            style={{ lineHeight: 1 }}
            aria-hidden
          >
            ✦
          </div>
          <p
            className="font-display tracking-[0.35em] uppercase mb-1"
            style={{ color: "oklch(0.40 0.18 46)", fontSize: "0.85rem" }}
          >
            ✦ भविष्य गाथन ✦
          </p>
          <h1
            className="font-display font-bold italic mb-1"
            style={{
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              color: "oklch(0.18 0.09 32)",
              textShadow: "0 2px 12px oklch(0.78 0.34 54 / 0.30)",
              lineHeight: 1.15,
            }}
          >
            Bhavishya Gathan
          </h1>
          <p
            className="font-body italic"
            style={{
              color: "oklch(0.32 0.12 38)",
              fontSize: "0.95rem",
            }}
          >
            Future Knowledge — two paths of seeing: Vedic Jyotish and Western
            Tarot
          </p>
        </motion.div>

        <ModeSelector mode={mode} onChange={setMode} />

        {mode === "vedic" ? <VedicMode /> : <WesternMode />}

        <div className="text-center mt-6 px-4">
          <Link
            to="/"
            className="font-body italic"
            style={{ color: "oklch(0.52 0.14 46)", fontSize: "0.9rem" }}
            data-ocid="bhavishya.back_home"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
