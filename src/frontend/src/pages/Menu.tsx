import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── EXACT 21 Sacred Pathways ─────────────────────────────────────────────────
// Mann Ki Baat is NOT here — it is an interlinked feature only
// Digital Mala and Naam Jaap are 2 SEPARATE pathways
const PATHWAYS = [
  // 1
  {
    id: "gita",
    to: "/gita",
    symbol: "📖",
    label: "भगवद् गीता पाठक",
    sub: "Bhagavad Gita Reader",
    desc: "700 Sacred Verses • 18 Chapters",
    grad: "linear-gradient(135deg, oklch(0.94 0.14 54 / 0.97) 0%, oklch(0.90 0.18 48 / 0.97) 100%)",
    glow: "oklch(0.82 0.34 54)",
    border: "oklch(0.78 0.30 54 / 0.70)",
  },
  // 2
  {
    id: "guidance",
    to: "/guidance",
    symbol: "🕉️",
    label: "कृष्ण AI चैटबॉट",
    sub: "Krishna AI Chatbot",
    desc: "Your Divine Guide",
    grad: "linear-gradient(135deg, oklch(0.90 0.12 268 / 0.97) 0%, oklch(0.86 0.16 260 / 0.97) 100%)",
    glow: "oklch(0.72 0.26 268)",
    border: "oklch(0.66 0.22 268 / 0.70)",
  },
  // 3
  {
    id: "mala",
    to: "/mala",
    symbol: "📿",
    label: "डिजिटल माला",
    sub: "Digital Mala (जपमाला)",
    desc: "108 Sacred Beads",
    grad: "linear-gradient(135deg, oklch(0.93 0.12 340 / 0.97) 0%, oklch(0.88 0.16 330 / 0.97) 100%)",
    glow: "oklch(0.76 0.28 340)",
    border: "oklch(0.70 0.22 340 / 0.70)",
  },
  // 4
  {
    id: "naam",
    to: "/naam",
    symbol: "🙏",
    label: "नाम जाप",
    sub: "Naam Jaap (नाम जाप)",
    desc: "18 Life-Situation Mantras",
    grad: "linear-gradient(135deg, oklch(0.94 0.16 48 / 0.97) 0%, oklch(0.90 0.20 40 / 0.97) 100%)",
    glow: "oklch(0.80 0.32 46)",
    border: "oklch(0.74 0.26 44 / 0.70)",
  },
  // 5
  {
    id: "mantra",
    to: "/mantra",
    symbol: "🎵",
    label: "पवित्र मंत्र",
    sub: "Sacred Mantra Player",
    desc: "108 Vedic Mantras",
    grad: "linear-gradient(135deg, oklch(0.93 0.14 32 / 0.97) 0%, oklch(0.88 0.18 26 / 0.97) 100%)",
    glow: "oklch(0.74 0.28 32)",
    border: "oklch(0.68 0.24 32 / 0.70)",
  },
  // 6
  {
    id: "rituals",
    to: "/rituals",
    symbol: "🪔",
    label: "दैनिक धर्म अनुष्ठान",
    sub: "Daily Dharmic Rituals",
    desc: "Sacred Daily Practice",
    grad: "linear-gradient(135deg, oklch(0.94 0.12 52 / 0.97) 0%, oklch(0.90 0.16 46 / 0.97) 100%)",
    glow: "oklch(0.80 0.32 50)",
    border: "oklch(0.74 0.26 50 / 0.70)",
  },
  // 7
  {
    id: "temple",
    to: "/virtual-temple",
    symbol: "🏛️",
    label: "वर्चुअल मंदिर",
    sub: "Virtual Temple",
    desc: "Day-Specific Deity Worship",
    grad: "linear-gradient(135deg, oklch(0.94 0.16 54 / 0.97) 0%, oklch(0.89 0.20 44 / 0.97) 100%)",
    glow: "oklch(0.82 0.36 54)",
    border: "oklch(0.76 0.30 50 / 0.70)",
  },
  // 8
  {
    id: "gallery",
    to: "/gallery",
    symbol: "🖼️",
    label: "कृष्ण दर्शन गैलरी",
    sub: "Krishna Gallery",
    desc: "Sacred Devotional Art",
    grad: "linear-gradient(135deg, oklch(0.92 0.12 310 / 0.97) 0%, oklch(0.87 0.16 300 / 0.97) 100%)",
    glow: "oklch(0.72 0.24 310)",
    border: "oklch(0.66 0.20 310 / 0.70)",
  },
  // 9
  {
    id: "videos",
    to: "/videos",
    symbol: "🎬",
    label: "वीडियो अनुभाग",
    sub: "Video Section",
    desc: "Kurukshetra • Darshans • Bhajans",
    grad: "linear-gradient(135deg, oklch(0.93 0.14 32 / 0.97) 0%, oklch(0.88 0.18 22 / 0.97) 100%)",
    glow: "oklch(0.74 0.28 32)",
    border: "oklch(0.68 0.24 28 / 0.70)",
  },
  // 10
  {
    id: "kurukshetra",
    to: "/kurukshetra",
    symbol: "⚔️",
    label: "मेरा कुरुक्षेत्र",
    sub: "My Kurukshetra",
    desc: "Your Personal Battles",
    grad: "linear-gradient(135deg, oklch(0.91 0.12 50 / 0.97) 0%, oklch(0.86 0.16 42 / 0.97) 100%)",
    glow: "oklch(0.72 0.24 50)",
    border: "oklch(0.66 0.20 46 / 0.70)",
  },
  // 11
  {
    id: "emergency",
    to: "/emergency",
    symbol: "🆘",
    label: "आपातकाल मोड",
    sub: "Emergency Mode",
    desc: "Krishna's Instant Help",
    grad: "linear-gradient(135deg, oklch(0.95 0.18 18 / 0.97) 0%, oklch(0.90 0.22 12 / 0.97) 100%)",
    glow: "oklch(0.62 0.28 18)",
    border: "oklch(0.62 0.28 18 / 0.80)",
    isEmergency: true,
  },
  // 12
  {
    id: "garbha-sanskar",
    to: "/garbha-sanskar",
    symbol: "🌸",
    label: "गर्भ संस्कार मार्ग",
    sub: "Garbha Sanskar",
    desc: "280-Day Sacred Pregnancy",
    grad: "linear-gradient(135deg, oklch(0.94 0.14 340 / 0.97) 0%, oklch(0.90 0.18 330 / 0.97) 100%)",
    glow: "oklch(0.78 0.26 340)",
    border: "oklch(0.72 0.22 335 / 0.70)",
  },
  // 13
  {
    id: "youth",
    to: "/youth",
    symbol: "🌟",
    label: "युवा धर्म Hub",
    sub: "Youth Dharma Hub",
    desc: "Krishna's Message for Youth",
    grad: "linear-gradient(135deg, oklch(0.94 0.16 52 / 0.97) 0%, oklch(0.89 0.20 44 / 0.97) 100%)",
    glow: "oklch(0.82 0.34 50)",
    border: "oklch(0.76 0.28 48 / 0.70)",
  },
  // 14
  {
    id: "sanskaar",
    to: "/16-sanskaar",
    symbol: "🌺",
    label: "षोडश संस्कार",
    sub: "16 Sanskaar Module",
    desc: "Sacred Rites of Life",
    grad: "linear-gradient(135deg, oklch(0.92 0.12 160 / 0.97) 0%, oklch(0.87 0.16 152 / 0.97) 100%)",
    glow: "oklch(0.70 0.22 160)",
    border: "oklch(0.64 0.18 155 / 0.70)",
  },
  // 15
  {
    id: "community",
    to: "/community",
    symbol: "🫂",
    label: "सत्संग मंडली",
    sub: "Satsang Circles",
    desc: "Community & Inner Chat",
    grad: "linear-gradient(135deg, oklch(0.92 0.12 152 / 0.97) 0%, oklch(0.87 0.16 144 / 0.97) 100%)",
    glow: "oklch(0.68 0.24 152)",
    border: "oklch(0.62 0.20 148 / 0.70)",
  },
  // 16
  {
    id: "donations",
    to: "/donate",
    symbol: "💛",
    label: "दान सेवा मॉड्यूल",
    sub: "Donation Module",
    desc: "Gau Seva • Temple Nirman",
    grad: "linear-gradient(135deg, oklch(0.94 0.16 340 / 0.97) 0%, oklch(0.89 0.20 330 / 0.97) 100%)",
    glow: "oklch(0.76 0.28 340)",
    border: "oklch(0.70 0.24 336 / 0.70)",
  },
  // 17
  {
    id: "achievements",
    to: "/challenges",
    symbol: "🏆",
    label: "उपलब्धि एवं पुरस्कार",
    sub: "Achievements & Rewards",
    desc: "Points • Badges • Streaks",
    grad: "linear-gradient(135deg, oklch(0.95 0.18 54 / 0.97) 0%, oklch(0.91 0.22 46 / 0.97) 100%)",
    glow: "oklch(0.84 0.38 54)",
    border: "oklch(0.78 0.32 50 / 0.70)",
  },
  // 18
  {
    id: "antim-yatra",
    to: "/antim-yatra",
    symbol: "🕯️",
    label: "अंतिम यात्रा",
    sub: "Antim Yaatra",
    desc: "Sacred Last Rites",
    grad: "linear-gradient(135deg, oklch(0.92 0.10 60 / 0.97) 0%, oklch(0.88 0.13 52 / 0.97) 100%)",
    glow: "oklch(0.68 0.20 58)",
    border: "oklch(0.62 0.16 54 / 0.70)",
  },
  // 19
  {
    id: "kundali-lite",
    to: "/kundali-lite",
    symbol: "🪐",
    label: "कुण्डली लाइट",
    sub: "Kundali Lite",
    desc: "Vedic Astrology",
    grad: "linear-gradient(135deg, oklch(0.93 0.14 50 / 0.97) 0%, oklch(0.89 0.18 42 / 0.97) 100%)",
    glow: "oklch(0.76 0.26 48)",
    border: "oklch(0.70 0.22 44 / 0.70)",
  },
  // 20
  {
    id: "dharma-wellness",
    to: "/dharma-wellness",
    symbol: "🪷",
    label: "मोक्ष का मार्ग",
    sub: "Roadmap to Moksha",
    desc: "Ashtavakra Gita Teachings",
    grad: "linear-gradient(135deg, oklch(0.93 0.12 142 / 0.97) 0%, oklch(0.88 0.16 134 / 0.97) 100%)",
    glow: "oklch(0.74 0.26 140)",
    border: "oklch(0.68 0.22 136 / 0.70)",
  },
  // 21 — USP
  {
    id: "life-purpose",
    to: "/life-purpose",
    symbol: "✨",
    label: "जीवन उद्देश्य खोजक",
    sub: "Life Purpose Finder",
    desc: "Discover Your Dharma",
    grad: "linear-gradient(135deg, oklch(0.95 0.16 70 / 0.97) 0%, oklch(0.91 0.20 62 / 0.97) 100%)",
    glow: "oklch(0.82 0.30 68)",
    border: "oklch(0.76 0.26 64 / 0.70)",
    isUSP: true,
  },
  // 22 — Devlok Yaatra (The Sacred Journey to the World of Gods)
  {
    id: "daivi-charitra",
    to: "/daivi-charitra",
    symbol: "🕉️",
    label: "देवलोक यात्रा",
    sub: "Devlok Yaatra",
    desc: "21 Sacred Stories • Path to Parabrahma",
    grad: "linear-gradient(135deg, oklch(0.94 0.14 54 / 0.97) 0%, oklch(0.88 0.22 30 / 0.97) 50%, oklch(0.86 0.16 268 / 0.97) 100%)",
    glow: "oklch(0.82 0.34 54)",
    border: "oklch(0.78 0.30 54 / 0.70)",
    isUSP: true,
  },
] as const;

// Blueprint entry (non-pathway, appears after the 21)
const BLUEPRINT_ENTRY = {
  id: "blueprint",
  to: "/blueprint" as const,
  symbol: "📜",
  label: "ऐप ब्लूप्रिंट",
  sub: "App Blueprint",
  desc: "All 21 Pathways — Full PDF",
  grad: "linear-gradient(135deg, oklch(0.95 0.14 68 / 0.97) 0%, oklch(0.91 0.18 60 / 0.97) 100%)",
  glow: "oklch(0.80 0.32 62)",
  border: "oklch(0.76 0.28 60 / 0.70)",
};

// ─── Pathway Tile ──────────────────────────────────────────────────────────────
function PathwayTile({
  pathway,
  index,
  onEmergency,
}: {
  pathway: (typeof PATHWAYS)[number];
  index: number;
  onEmergency: () => void;
}) {
  const isEmergency = "isEmergency" in pathway && pathway.isEmergency;
  const isUSP = "isUSP" in pathway && pathway.isUSP;

  const inner = (
    <div
      className="group flex flex-col items-center text-center p-2.5 h-full relative overflow-hidden transition-all duration-300"
      style={{
        background: pathway.grad,
        border: `1.5px solid ${pathway.border}`,
        borderRadius: "10px",
        boxShadow: isEmergency
          ? "0 3px 14px oklch(0.62 0.28 18 / 0.28), 0 0 20px oklch(0.72 0.30 18 / 0.18), inset 0 1px 0 rgba(255,248,210,0.70)"
          : isUSP
            ? "0 3px 16px oklch(0.78 0.32 62 / 0.30), 0 0 24px oklch(0.82 0.34 64 / 0.18), inset 0 1px 0 rgba(255,248,210,0.70)"
            : "0 3px 14px rgba(180,130,45,0.18), inset 0 1px 0 rgba(255,248,210,0.70)",
        minHeight: "108px",
      }}
    >
      {/* Top sacred gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[8px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${pathway.glow}, transparent)`,
          opacity: 0.9,
        }}
      />
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[8px]"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${pathway.glow}22 0%, transparent 70%)`,
          boxShadow: `inset 0 0 0 1.5px ${pathway.glow}55`,
        }}
      />

      {/* Emergency pulse ring */}
      {isEmergency && (
        <div
          className="absolute inset-0 rounded-[8px] pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1px oklch(0.72 0.28 18 / 0.45)",
            animation: "sacred-shimmer 2.5s ease-in-out infinite",
          }}
        />
      )}

      {/* USP badge — top-right */}
      {isUSP && (
        <div
          className="absolute top-1 right-1 px-1 py-0.5 rounded-sm flex items-center gap-0.5"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.82 0.36 54), oklch(0.70 0.30 48))",
            border: "1px solid oklch(0.76 0.30 52 / 0.70)",
            boxShadow: "0 1px 6px oklch(0.78 0.34 54 / 0.40)",
          }}
        >
          <span
            style={{
              fontSize: "5.5px",
              color: "oklch(0.10 0.06 28)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              fontFamily: "var(--font-display)",
            }}
          >
            ✨ USP
          </span>
        </div>
      )}

      {/* Number badge — top-left (move down if no USP badge) */}
      {!isUSP && (
        <div
          className="absolute top-1 left-1 w-4 h-4 rounded-full flex items-center justify-center"
          style={{
            background: `${pathway.glow}33`,
            border: `1px solid ${pathway.glow}55`,
          }}
        >
          <span
            className="font-body font-bold leading-none"
            style={{ fontSize: "6px", color: "oklch(0.22 0.14 42)" }}
          >
            {index + 1}
          </span>
        </div>
      )}
      {isUSP && (
        <div
          className="absolute top-1 left-1 w-4 h-4 rounded-full flex items-center justify-center"
          style={{
            background: `${pathway.glow}33`,
            border: `1px solid ${pathway.glow}55`,
          }}
        >
          <span
            className="font-body font-bold leading-none"
            style={{ fontSize: "6px", color: "oklch(0.22 0.14 42)" }}
          >
            {index + 1}
          </span>
        </div>
      )}

      {/* Icon orb */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5 mt-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 35% 28%, ${pathway.glow}44 0%, ${pathway.glow}18 100%)`,
          border: `1.5px solid ${pathway.glow}55`,
          boxShadow: `0 3px 12px ${pathway.glow}33`,
        }}
      >
        <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>
          {pathway.symbol}
        </span>
      </div>
      {/* Hindi label */}
      <p
        className="font-display text-[8.5px] font-bold italic leading-tight mb-0.5 w-full"
        style={{
          color: "oklch(0.18 0.10 38)",
          textShadow: "0 1px 2px rgba(255,248,200,0.5)",
        }}
      >
        {pathway.label}
      </p>
      {/* English title */}
      <p
        className="font-display text-[8px] font-bold leading-tight mb-0.5"
        style={{ color: "oklch(0.28 0.12 36)" }}
      >
        {pathway.sub}
      </p>
      {/* Descriptive line */}
      <p
        className="font-body text-[7.5px] leading-tight"
        style={{ color: "oklch(0.42 0.12 46 / 0.85)" }}
      >
        {pathway.desc}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.025, duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      {isEmergency ? (
        <button
          type="button"
          className="w-full text-left h-full"
          onClick={onEmergency}
          data-ocid={`menu.pathway.item.${index + 1}`}
        >
          {inner}
        </button>
      ) : (
        <Link
          to={pathway.to}
          className="block h-full"
          data-ocid={`menu.pathway.item.${index + 1}`}
        >
          {inner}
        </Link>
      )}
    </motion.div>
  );
}

// ─── Emergency Modal ───────────────────────────────────────────────────────────
function EmergencyModal({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.72)",
            backdropFilter: "blur(10px)",
          }}
          onClick={onClose}
          data-ocid="menu.emergency.dialog"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-w-sm w-full rounded-2xl p-8 text-center"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.97 0.10 54 / 0.98) 0%, oklch(0.95 0.08 48 / 0.98) 100%)",
              border: "2px solid oklch(0.72 0.30 32 / 0.70)",
              boxShadow:
                "0 24px 64px rgba(180,60,20,0.35), 0 0 60px oklch(0.72 0.28 32 / 0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.82 0.36 54), oklch(0.72 0.30 32), oklch(0.78 0.34 54))",
              }}
            />
            <div className="text-5xl mb-3">🛡️</div>
            <p
              className="font-display italic font-bold mb-3 leading-snug"
              style={{ fontSize: "1.1rem", color: "oklch(0.22 0.14 32)" }}
            >
              "Krishna is with you. Whatever battle you face — you are not
              alone."
            </p>
            <p
              className="font-body text-sm italic mb-5 leading-relaxed"
              style={{ color: "oklch(0.38 0.10 42)" }}
            >
              18 life-saving verses · Helplines · Krishna's voice · All offline
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                navigate({ to: "/emergency" });
              }}
              data-ocid="menu.emergency.confirm_button"
              className="w-full rounded-full py-3 font-display font-bold mb-3 transition-all duration-200 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.28 32), oklch(0.80 0.34 46))",
                color: "oklch(0.97 0.04 70)",
                fontSize: "0.95rem",
                boxShadow: "0 4px 18px oklch(0.68 0.28 32 / 0.45)",
              }}
            >
              🙏 I need Krishna now
            </button>
            <button
              type="button"
              onClick={onClose}
              data-ocid="menu.emergency.cancel_button"
              className="font-body text-xs underline underline-offset-2"
              style={{ color: "oklch(0.48 0.10 46 / 0.8)" }}
            >
              Return to menu
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Menu Page ────────────────────────────────────────────────────────────
export function MenuPage() {
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <div className="max-w-3xl mx-auto pb-6" data-ocid="menu.page">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-4 pb-4"
      >
        <p
          className="font-display text-[9px] tracking-[0.4em] uppercase mb-1.5"
          style={{ color: "oklch(0.58 0.22 54 / 0.75)" }}
        >
          ✦ ॐ ✦ · ✦ ॐ ✦ · ✦ ॐ ✦
        </p>
        <h1
          className="font-display font-bold italic"
          style={{
            fontSize: "clamp(1.35rem, 4.5vw, 1.9rem)",
            color: "oklch(0.20 0.12 38)",
            textShadow: "0 2px 8px oklch(0.82 0.34 54 / 0.30)",
            lineHeight: 1.2,
          }}
        >
          22 Sacred Pathways to Krishna
        </h1>
        <p
          className="font-body text-xs italic mt-1"
          style={{ color: "oklch(0.42 0.14 46 / 0.85)" }}
        >
          Choose your path to the Divine — हर मार्ग कृष्ण की ओर जाता है
        </p>
      </motion.div>

      {/* Ornate container */}
      <div
        className="relative mx-1 p-3 rounded-xl"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.08 64 / 0.96) 0%, oklch(0.95 0.10 58 / 0.96) 100%)",
          border: "2px solid oklch(0.78 0.28 52 / 0.60)",
          boxShadow:
            "0 8px 40px rgba(180,130,45,0.28), inset 0 1px 0 rgba(255,248,210,0.80)",
        }}
      >
        {/* Top ornate gold bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.82 0.36 54), oklch(0.70 0.28 46), oklch(0.60 0.26 268), oklch(0.70 0.28 46), oklch(0.82 0.36 54))",
            boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.50)",
          }}
        />
        {/* Corner ornaments */}
        <div
          className="absolute top-3 left-3 text-[11px] pointer-events-none select-none"
          style={{ color: "oklch(0.68 0.28 52 / 0.55)" }}
        >
          ❋
        </div>
        <div
          className="absolute top-3 right-3 text-[11px] pointer-events-none select-none"
          style={{ color: "oklch(0.68 0.28 52 / 0.55)" }}
        >
          ❋
        </div>
        <div
          className="absolute bottom-3 left-3 text-[11px] pointer-events-none select-none"
          style={{ color: "oklch(0.68 0.28 52 / 0.40)" }}
        >
          ❀
        </div>
        <div
          className="absolute bottom-3 right-3 text-[11px] pointer-events-none select-none"
          style={{ color: "oklch(0.68 0.28 52 / 0.40)" }}
        >
          ❀
        </div>

        <p
          className="text-center font-body text-[9.5px] italic tracking-widest uppercase mb-3 mt-0.5"
          style={{ color: "oklch(0.50 0.18 50 / 0.80)" }}
        >
          ✦ बाईस धर्म मार्ग · The 22 Paths of Dharma ✦
        </p>

        {/* 3-column grid — all 21 pathways */}
        <div className="grid grid-cols-3 gap-2" data-ocid="menu.pathways-grid">
          {PATHWAYS.map((pathway, i) => (
            <PathwayTile
              key={pathway.id}
              pathway={pathway}
              index={i}
              onEmergency={() => setShowEmergency(true)}
            />
          ))}
        </div>

        {/* Blueprint card below the grid */}
        <div
          className="mt-3 pt-3"
          style={{ borderTop: "1px solid oklch(0.76 0.26 52 / 0.30)" }}
        >
          <p
            className="text-center font-body text-[9px] italic tracking-widest uppercase mb-2"
            style={{ color: "oklch(0.50 0.18 50 / 0.80)" }}
          >
            ✦ App Documentation ✦
          </p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.35 }}
            whileHover={{ y: -2 }}
          >
            <Link
              to={BLUEPRINT_ENTRY.to}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
              style={{
                background: BLUEPRINT_ENTRY.grad,
                border: `1.5px solid ${BLUEPRINT_ENTRY.border}`,
                boxShadow: `0 3px 14px ${BLUEPRINT_ENTRY.glow}22, inset 0 1px 0 rgba(255,248,210,0.70)`,
              }}
              data-ocid="menu.blueprint.link"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: `radial-gradient(circle at 35% 28%, ${BLUEPRINT_ENTRY.glow}44 0%, ${BLUEPRINT_ENTRY.glow}18 100%)`,
                  border: `1.5px solid ${BLUEPRINT_ENTRY.glow}55`,
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>
                  {BLUEPRINT_ENTRY.symbol}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="font-display text-[8.5px] font-bold italic leading-tight"
                  style={{ color: "oklch(0.18 0.10 38)" }}
                >
                  {BLUEPRINT_ENTRY.label}
                </p>
                <p
                  className="font-display text-[9.5px] font-bold leading-tight"
                  style={{ color: "oklch(0.28 0.12 36)" }}
                >
                  {BLUEPRINT_ENTRY.sub}
                </p>
                <p
                  className="font-body text-[8px] leading-tight"
                  style={{ color: "oklch(0.42 0.12 46 / 0.85)" }}
                >
                  {BLUEPRINT_ENTRY.desc}
                </p>
              </div>
              <span
                className="font-body text-sm"
                style={{ color: "oklch(0.60 0.22 52)" }}
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom sacred quote — Gita 4:7 */}
        <div
          className="mt-4 pt-3 text-center space-y-1"
          style={{ borderTop: "1px solid oklch(0.76 0.26 52 / 0.30)" }}
        >
          <p
            className="font-display text-[10px] font-bold italic"
            style={{
              color: "oklch(0.28 0.12 38)",
              textShadow: "0 1px 4px oklch(0.82 0.34 54 / 0.25)",
            }}
          >
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।
          </p>
          <p
            className="font-display text-[10px] font-bold italic"
            style={{
              color: "oklch(0.28 0.12 38)",
              textShadow: "0 1px 4px oklch(0.82 0.34 54 / 0.25)",
            }}
          >
            अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥
          </p>
          <p
            className="font-body text-[9px] italic mt-1"
            style={{ color: "oklch(0.46 0.14 48 / 0.80)" }}
          >
            "Whenever dharma declines and unrighteousness arises, I manifest
            myself." — Bhagavad Gita 4:7
          </p>
          <p
            className="font-body text-[8.5px] italic"
            style={{ color: "oklch(0.52 0.12 46 / 0.65)" }}
          >
            ✦ Every pathway leads to Krishna · हर मार्ग कृष्ण की ओर ✦
          </p>
        </div>
      </div>

      <EmergencyModal
        open={showEmergency}
        onClose={() => setShowEmergency(false)}
      />
    </div>
  );
}
