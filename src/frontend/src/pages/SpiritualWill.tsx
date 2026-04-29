import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface WillData {
  recipients: string[];
  lifeLesson: string;
  dharmaMessage: string;
  promises: string;
  blessings: string;
  closingVerseRef: string;
  lastSaved: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CLOSING_VERSES = [
  {
    ref: "BG 18.66",
    text: "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    why: "Krishna's ultimate promise — end with surrender",
  },
  {
    ref: "BG 2.20",
    text: "The soul is never born nor does it die at any time. It has not come into being and will not come into being. It is unborn, eternal, ever-existing and primordial.",
    why: "Assure them — you are eternal, and so are they",
  },
  {
    ref: "BG 6.30",
    text: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is such a person ever lost to Me.",
    why: "Your love and theirs — never truly separated",
  },
  {
    ref: "BG 9.22",
    text: "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack, and I preserve what they have.",
    why: "Krishna's promise to take care of those you love",
  },
  {
    ref: "BG 18.65",
    text: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this.",
    why: "Leave them with a path — come to Me",
  },
  {
    ref: "BG 2.47",
    text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities.",
    why: "Guide them to live with purpose without attachment",
  },
  {
    ref: "BG 4.7-8",
    text: "Whenever and wherever there is a decline in religious practice and a predominant rise of irreligion — at that time I descend Myself to deliver the pious and annihilate the miscreants.",
    why: "Krishna is always coming back — they are never alone",
  },
  {
    ref: "BG 9.31",
    text: "He quickly becomes righteous and attains lasting peace. O son of Kunti, declare it boldly that My devotee never perishes.",
    why: "For those who grieve — your devotee never perishes",
  },
  {
    ref: "BG 12.6-7",
    text: "But those who worship Me with devotion, meditating on My transcendental form — for them I am the swift deliverer from the ocean of birth and death.",
    why: "Krishna speeds their liberation — and yours",
  },
  {
    ref: "BG 15.6",
    text: "That supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.",
    why: "Where you are going — a place beyond all suffering",
  },
];

const LIFE_LESSON_PROMPTS = [
  "What did the Gita teach you about karma — about how every action shapes the soul?",
  "What did you learn about love — and how love never truly ends?",
  "What is the most important truth you discovered about God, about Krishna?",
  "What do you know now about death that you wish you had known earlier?",
  "What would you tell them about how to face their hardest days?",
];

const DHARMA_PROMPTS = [
  "What is the most sacred thing you have learned about living a good life?",
  "What does dharma mean to you, in your own words?",
  "What practice — a single daily act of devotion — would you urge them to never abandon?",
];

const SECTION_VERSE = {
  recipients: { ref: "BG 18.65", text: "You are My dear friend." },
  lifeLesson: {
    ref: "BG 4.38",
    text: "There is nothing so sublime and pure as transcendental knowledge.",
  },
  dharmaMessage: {
    ref: "BG 3.35",
    text: "It is far better to discharge one's prescribed duties, even if they are imperfect, than another's duties.",
  },
  promises: {
    ref: "BG 9.22",
    text: "I carry what you lack and preserve what you have.",
  },
  blessings: {
    ref: "BG 18.66",
    text: "Surrender to Me alone. I shall deliver you from all sins. Do not grieve.",
  },
  closingVerse: {
    ref: "BG 6.30",
    text: "I am never lost, nor is such a person ever lost to Me.",
  },
};

// ─── PRINT STYLES ────────────────────────────────────────────────────────────

const PRINT_STYLES = `
  @media print {
    body * { visibility: hidden !important; }
    #spiritual-will-print, #spiritual-will-print * { visibility: visible !important; }
    #spiritual-will-print {
      position: absolute; left: 0; top: 0; width: 100%;
      background: #f5ead8 !important;
      padding: 3cm !important;
      font-family: Georgia, serif;
      color: #2a1a0e !important;
    }
    .no-print { display: none !important; }
  }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionHeader({
  icon,
  title,
  hindi,
  verse,
}: {
  icon: string;
  title: string;
  hindi: string;
  verse: { ref: string; text: string };
}) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.76 0.32 54 / 0.2), oklch(0.62 0.26 32 / 0.15))",
          border: "1px solid oklch(0.76 0.32 54 / 0.4)",
        }}
      >
        <span style={{ fontSize: "1.3rem" }}>{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="font-display font-bold italic"
          style={{ color: "oklch(0.18 0.08 32)", fontSize: "1.1rem" }}
        >
          {title}
        </p>
        <p
          className="font-body text-xs italic mb-1"
          style={{ color: "oklch(0.52 0.14 46)" }}
        >
          {hindi}
        </p>
        <p
          className="font-body text-xs italic"
          style={{ color: "oklch(0.58 0.18 48 / 0.8)" }}
        >
          "{verse.text.slice(0, 60)}…" — {verse.ref}
        </p>
      </div>
    </div>
  );
}

function RecipientInput({
  recipients,
  onChange,
}: { recipients: string[]; onChange: (r: string[]) => void }) {
  const [newName, setNewName] = useState("");

  const addRecipient = () => {
    if (newName.trim() && !recipients.includes(newName.trim())) {
      onChange([...recipients, newName.trim()]);
      setNewName("");
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addRecipient();
            }
          }}
          placeholder="Add a name (e.g. Priya, my daughter…)"
          className="manuscript-input flex-1"
          style={{ resize: "none" }}
          data-ocid="spiritual-will.recipient_input"
        />
        <button
          type="button"
          onClick={addRecipient}
          className="rounded-lg px-4 py-2 font-display font-bold text-sm transition-all"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
            color: "oklch(0.12 0.08 28)",
            flexShrink: 0,
          }}
          data-ocid="spiritual-will.add_recipient"
        >
          Add
        </button>
      </div>
      {recipients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {recipients.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
              style={{
                background: "oklch(0.76 0.32 54 / 0.15)",
                border: "1px solid oklch(0.76 0.32 54 / 0.4)",
              }}
            >
              <span
                className="font-body text-sm"
                style={{ color: "oklch(0.28 0.10 36)" }}
              >
                {name}
              </span>
              <button
                type="button"
                onClick={() => onChange(recipients.filter((r) => r !== name))}
                aria-label={`Remove ${name}`}
                className="font-body text-xs leading-none transition-all"
                style={{ color: "oklch(0.52 0.14 46 / 0.6)" }}
                data-ocid={`spiritual-will.remove_recipient_${name}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function WillDocument({ will }: { will: WillData }) {
  const closingVerse =
    CLOSING_VERSES.find((v) => v.ref === will.closingVerseRef) ??
    CLOSING_VERSES[0];

  return (
    <div
      id="spiritual-will-print"
      className="manuscript-page rounded-xl p-6 sm:p-8"
      style={{ position: "relative" }}
    >
      {/* Decorative top border */}
      <div
        className="h-2 rounded-t-xl mb-6 -mt-6 -mx-6 sm:-mx-8"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54), oklch(0.62 0.26 32))",
        }}
      />

      {/* Header */}
      <div className="text-center mb-8">
        <p
          className="font-display text-xs tracking-[0.4em] mb-2"
          style={{ color: "oklch(0.62 0.26 32 / 0.8)" }}
        >
          ✦ ॐ ✦ ॐ ✦ ॐ ✦
        </p>
        <h2
          className="font-display font-bold italic mb-1"
          style={{
            color: "oklch(0.18 0.08 32)",
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          }}
        >
          आध्यात्मिक वसीयत
        </h2>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.52 0.14 46)" }}
        >
          My Spiritual Will — A Sacred Letter
        </p>
        <div
          className="h-px mt-4 mb-2"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.76 0.32 54 / 0.6), transparent)",
          }}
        />
        <p
          className="font-body text-xs"
          style={{ color: "oklch(0.52 0.14 46 / 0.7)" }}
        >
          {will.lastSaved}
        </p>
      </div>

      {/* To */}
      {will.recipients.length > 0 && (
        <div className="mb-6">
          <p
            className="font-display italic font-bold mb-1"
            style={{ color: "oklch(0.62 0.26 32)", fontSize: "0.95rem" }}
          >
            This sacred letter is written with love, for —
          </p>
          <p
            className="font-body text-lg"
            style={{ color: "oklch(0.18 0.08 32)" }}
          >
            {will.recipients.join(", ")}
          </p>
        </div>
      )}

      <div
        className="h-px mb-6"
        style={{ background: "oklch(0.76 0.32 54 / 0.3)" }}
      />

      {/* Life lessons */}
      {will.lifeLesson && (
        <div className="mb-6">
          <p
            className="font-display italic font-bold mb-2"
            style={{ color: "oklch(0.38 0.14 36)", fontSize: "1rem" }}
          >
            What the Gita Taught Me About Life —
          </p>
          <p
            className="font-body"
            style={{
              color: "oklch(0.22 0.08 34)",
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            {will.lifeLesson}
          </p>
        </div>
      )}

      {/* Dharma message */}
      {will.dharmaMessage && (
        <div className="mb-6">
          <p
            className="font-display italic font-bold mb-2"
            style={{ color: "oklch(0.38 0.14 36)", fontSize: "1rem" }}
          >
            My Dharma Message to You —
          </p>
          <p
            className="font-body"
            style={{
              color: "oklch(0.22 0.08 34)",
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            {will.dharmaMessage}
          </p>
        </div>
      )}

      {/* Promises */}
      {will.promises && (
        <div className="mb-6">
          <p
            className="font-display italic font-bold mb-2"
            style={{ color: "oklch(0.38 0.14 36)", fontSize: "1rem" }}
          >
            My Sacred Promises to You —
          </p>
          <p
            className="font-body"
            style={{
              color: "oklch(0.22 0.08 34)",
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            {will.promises}
          </p>
        </div>
      )}

      {/* Blessings */}
      {will.blessings && (
        <div className="mb-6">
          <p
            className="font-display italic font-bold mb-2"
            style={{ color: "oklch(0.38 0.14 36)", fontSize: "1rem" }}
          >
            My Blessings for You —
          </p>
          <p
            className="font-body"
            style={{
              color: "oklch(0.22 0.08 34)",
              lineHeight: 1.9,
              fontSize: "1rem",
              fontStyle: "italic",
            }}
          >
            {will.blessings}
          </p>
        </div>
      )}

      <div
        className="h-px mb-6"
        style={{ background: "oklch(0.76 0.32 54 / 0.3)" }}
      />

      {/* Closing verse */}
      <div
        className="text-center py-4 rounded-lg px-4"
        style={{
          background: "oklch(0.76 0.32 54 / 0.08)",
          border: "1px solid oklch(0.76 0.32 54 / 0.25)",
        }}
      >
        <p
          className="font-body italic text-sm mb-2"
          style={{ color: "oklch(0.28 0.10 38)", lineHeight: 1.75 }}
        >
          "{closingVerse.text}"
        </p>
        <p
          className="font-display text-xs"
          style={{ color: "oklch(0.62 0.26 32 / 0.8)" }}
        >
          — Bhagavad Gita {closingVerse.ref}
        </p>
      </div>

      <div className="text-center mt-6">
        <p
          className="font-display italic"
          style={{ color: "oklch(0.62 0.26 32 / 0.8)" }}
        >
          ॥ हरे कृष्ण ॥
        </p>
        <p
          className="font-body text-xs mt-1"
          style={{ color: "oklch(0.52 0.14 46 / 0.7)" }}
        >
          Written in the presence of Krishna, who witnesses all.
        </p>
      </div>

      {/* Decorative bottom border */}
      <div
        className="h-2 rounded-b-xl mt-6 -mb-6 -mx-6 sm:-mx-8"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54), oklch(0.62 0.26 32))",
        }}
      />
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

type WillSection =
  | "recipients"
  | "lifeLesson"
  | "dharmaMessage"
  | "promises"
  | "blessings"
  | "closingVerse";

const SECTIONS: {
  id: WillSection;
  icon: string;
  title: string;
  hindi: string;
}[] = [
  { id: "recipients", icon: "💌", title: "To Whom", hindi: "किनके लिए" },
  {
    id: "lifeLesson",
    icon: "📖",
    title: "What I Have Learned About Life",
    hindi: "जीवन की सीख",
  },
  {
    id: "dharmaMessage",
    icon: "🙏",
    title: "My Dharma Message",
    hindi: "धर्म का संदेश",
  },
  {
    id: "promises",
    icon: "🌿",
    title: "My Sacred Promises",
    hindi: "मेरी प्रतिज्ञाएं",
  },
  { id: "blessings", icon: "✨", title: "My Blessings", hindi: "मेरे आशीर्वाद" },
  {
    id: "closingVerse",
    icon: "ॐ",
    title: "Closing Verse",
    hindi: "समापन श्लोक",
  },
];

export function SpiritualWillPage() {
  const [will, setWill] = useState<WillData>(() => {
    try {
      const stored = localStorage.getItem("spiritual-will");
      if (stored) return JSON.parse(stored) as WillData;
    } catch {
      /* ignore */
    }
    return {
      recipients: [],
      lifeLesson: "",
      dharmaMessage: "",
      promises: "",
      blessings: "",
      closingVerseRef: "BG 18.66",
      lastSaved: "",
    };
  });
  const [activeSection, setActiveSection] = useState<WillSection>("recipients");
  const [viewMode, setViewMode] = useState<"edit" | "preview">("edit");
  const [savedFlash, setSavedFlash] = useState(false);
  const autoSaveRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateWill = (updates: Partial<WillData>) => {
    setWill((prev) => {
      const next = { ...prev, ...updates };
      // Debounced auto-save
      if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
      autoSaveRef.current = setTimeout(() => {
        localStorage.setItem(
          "spiritual-will",
          JSON.stringify({
            ...next,
            lastSaved: new Date().toLocaleString("en-IN"),
          }),
        );
      }, 800);
      return next;
    });
  };

  const saveNow = () => {
    const saved = { ...will, lastSaved: new Date().toLocaleString("en-IN") };
    localStorage.setItem("spiritual-will", JSON.stringify(saved));
    setWill(saved);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2500);
  };

  const printWill = () => window.print();

  useEffect(() => {
    return () => {
      if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
    };
  }, []);

  const completedSections = [
    will.recipients.length > 0,
    will.lifeLesson.trim().length > 0,
    will.dharmaMessage.trim().length > 0,
    will.promises.trim().length > 0,
    will.blessings.trim().length > 0,
    !!will.closingVerseRef,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen relative" data-ocid="spiritual-will.page">
      <style>{PRINT_STYLES}</style>
      {/* Parchment background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(160deg, oklch(0.93 0.05 70) 0%, oklch(0.90 0.07 66) 100%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p
            className="font-display text-xs tracking-[0.35em] mb-2"
            style={{ color: "oklch(0.62 0.26 32 / 0.85)" }}
          >
            ॥ हरे कृष्ण ॥
          </p>
          <h1
            className="font-display font-bold italic mb-1"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "oklch(0.18 0.08 32)",
              textShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.2)",
            }}
          >
            आध्यात्मिक वसीयत
          </h1>
          <p
            className="font-body text-sm italic"
            style={{ color: "oklch(0.52 0.14 46)" }}
          >
            Your Spiritual Will — The most sacred letter you will ever write
          </p>
        </motion.div>

        {/* Opening quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="manuscript-card p-5 mb-6 text-center"
        >
          <p
            className="font-display italic font-bold mb-2"
            style={{
              color: "oklch(0.18 0.08 32)",
              fontSize: "1.05rem",
              lineHeight: 1.5,
            }}
          >
            "This is perhaps the most sacred thing you will ever write, Arjun."
          </p>
          <p
            className="font-body text-sm"
            style={{ color: "oklch(0.42 0.12 44)", lineHeight: 1.7 }}
          >
            A letter not about possessions — but about wisdom, love, and the
            eternal truths you have learned. Guided at every step by Krishna.
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-5"
        >
          <div className="flex items-center gap-2">
            <div
              className="rounded-full px-3 py-1 font-body text-xs"
              style={{
                background: "oklch(0.76 0.32 54 / 0.15)",
                border: "1px solid oklch(0.76 0.32 54 / 0.4)",
                color: "oklch(0.38 0.14 36)",
              }}
            >
              {completedSections}/6 sections complete
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setViewMode((v) => (v === "edit" ? "preview" : "edit"))
              }
              className="rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all"
              style={{
                background:
                  viewMode === "preview"
                    ? "oklch(0.62 0.26 32 / 0.15)"
                    : "transparent",
                border: "1px solid oklch(0.72 0.12 56 / 0.5)",
                color: "oklch(0.38 0.14 36)",
              }}
              data-ocid="spiritual-will.toggle_preview"
            >
              {viewMode === "edit" ? "👁 Preview" : "✏ Edit"}
            </button>
          </div>
        </motion.div>

        {/* Preview mode */}
        <AnimatePresence mode="wait">
          {viewMode === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <WillDocument will={will} />
              <div className="flex gap-3 mt-4 no-print">
                <button
                  type="button"
                  onClick={saveNow}
                  className="flex-1 rounded-lg py-3 font-display font-bold italic text-sm transition-all"
                  style={{
                    background: savedFlash
                      ? "oklch(0.58 0.22 140)"
                      : "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                    color: "oklch(0.12 0.08 28)",
                  }}
                  data-ocid="spiritual-will.save_button"
                >
                  {savedFlash ? "✓ Saved" : "💾 Save Will"}
                </button>
                <button
                  type="button"
                  onClick={printWill}
                  className="flex-1 rounded-lg py-3 font-display font-bold italic text-sm transition-all"
                  style={{
                    background: "oklch(0.88 0.06 66)",
                    border: "1px solid oklch(0.72 0.12 56 / 0.5)",
                    color: "oklch(0.28 0.10 38)",
                  }}
                  data-ocid="spiritual-will.print_button"
                >
                  🖨 Print
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="edit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Section tabs */}
              <div
                className="flex gap-1 overflow-x-auto pb-2 mb-5 scrollbar-hide"
                data-ocid="spiritual-will.sections"
              >
                {SECTIONS.map((s) => {
                  const isDone =
                    s.id === "recipients"
                      ? will.recipients.length > 0
                      : s.id === "closingVerse"
                        ? !!will.closingVerseRef
                        : (will[s.id as keyof WillData] as string).trim()
                            .length > 0;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveSection(s.id)}
                      className="flex-shrink-0 rounded-lg px-3 py-2 font-display text-xs font-bold italic transition-all"
                      style={{
                        background:
                          activeSection === s.id
                            ? "linear-gradient(135deg, oklch(0.62 0.26 32 / 0.2), oklch(0.76 0.32 54 / 0.12))"
                            : "oklch(0.88 0.06 66 / 0.5)",
                        border:
                          activeSection === s.id
                            ? "1.5px solid oklch(0.76 0.32 54 / 0.5)"
                            : "1px solid oklch(0.72 0.12 56 / 0.3)",
                        color:
                          activeSection === s.id
                            ? "oklch(0.18 0.08 32)"
                            : "oklch(0.48 0.12 44)",
                      }}
                      data-ocid={`spiritual-will.section_${s.id}`}
                    >
                      {isDone ? "✓ " : ""}
                      {s.icon} {s.title.split(" ").slice(0, 2).join(" ")}
                    </button>
                  );
                })}
              </div>

              {/* Section content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="manuscript-card p-5 mb-5">
                    <SectionHeader
                      icon={
                        SECTIONS.find((s) => s.id === activeSection)?.icon ??
                        "📜"
                      }
                      title={
                        SECTIONS.find((s) => s.id === activeSection)?.title ??
                        ""
                      }
                      hindi={
                        SECTIONS.find((s) => s.id === activeSection)?.hindi ??
                        ""
                      }
                      verse={SECTION_VERSE[activeSection]}
                    />

                    {/* Recipients */}
                    {activeSection === "recipients" && (
                      <div>
                        <p
                          className="font-body text-sm italic mb-3"
                          style={{ color: "oklch(0.48 0.12 44)" }}
                        >
                          Who is this sacred letter for? Add the names of those
                          you love — children, spouse, parents, friends.
                        </p>
                        <RecipientInput
                          recipients={will.recipients}
                          onChange={(r) => updateWill({ recipients: r })}
                        />
                      </div>
                    )}

                    {/* Life Lesson */}
                    {activeSection === "lifeLesson" && (
                      <div>
                        <div className="mb-3 space-y-1">
                          {LIFE_LESSON_PROMPTS.map((prompt) => (
                            <p
                              key={prompt}
                              className="font-body text-xs italic"
                              style={{ color: "oklch(0.52 0.14 46 / 0.8)" }}
                            >
                              • {prompt}
                            </p>
                          ))}
                        </div>
                        <textarea
                          value={will.lifeLesson}
                          onChange={(e) =>
                            updateWill({ lifeLesson: e.target.value })
                          }
                          placeholder="Tell them what the Gita taught you about karma… about love… about God… about death…"
                          rows={7}
                          className="manuscript-input"
                          data-ocid="spiritual-will.life_lesson_input"
                        />
                      </div>
                    )}

                    {/* Dharma Message */}
                    {activeSection === "dharmaMessage" && (
                      <div>
                        <div className="mb-3 space-y-1">
                          {DHARMA_PROMPTS.map((prompt) => (
                            <p
                              key={prompt}
                              className="font-body text-xs italic"
                              style={{ color: "oklch(0.52 0.14 46 / 0.8)" }}
                            >
                              • {prompt}
                            </p>
                          ))}
                        </div>
                        <textarea
                          value={will.dharmaMessage}
                          onChange={(e) =>
                            updateWill({ dharmaMessage: e.target.value })
                          }
                          placeholder="What is the one thing you most want them to know about living a dharmic life?"
                          rows={6}
                          className="manuscript-input"
                          data-ocid="spiritual-will.dharma_input"
                        />
                      </div>
                    )}

                    {/* Promises */}
                    {activeSection === "promises" && (
                      <div>
                        <p
                          className="font-body text-xs italic mb-3"
                          style={{ color: "oklch(0.52 0.14 46 / 0.8)" }}
                        >
                          What promises do you make to them — guided by
                          Krishna's own promise to Arjuna in BG 18.66?
                        </p>
                        <textarea
                          value={will.promises}
                          onChange={(e) =>
                            updateWill({ promises: e.target.value })
                          }
                          placeholder="I promise to always watch over you… I promise that my love for you is eternal… I promise to come to you in your dreams…"
                          rows={6}
                          className="manuscript-input"
                          data-ocid="spiritual-will.promises_input"
                        />
                      </div>
                    )}

                    {/* Blessings */}
                    {activeSection === "blessings" && (
                      <div>
                        <p
                          className="font-body text-xs italic mb-3"
                          style={{ color: "oklch(0.52 0.14 46 / 0.8)" }}
                        >
                          Write your blessings as Krishna blessed Arjuna — with
                          the full authority of a soul who has loved completely.
                        </p>
                        <textarea
                          value={will.blessings}
                          onChange={(e) =>
                            updateWill({ blessings: e.target.value })
                          }
                          placeholder="May you always remember Krishna in every difficulty… May you never feel alone… May your life be filled with dharma and love…"
                          rows={6}
                          className="manuscript-input"
                          data-ocid="spiritual-will.blessings_input"
                        />
                      </div>
                    )}

                    {/* Closing Verse */}
                    {activeSection === "closingVerse" && (
                      <div>
                        <p
                          className="font-body text-xs italic mb-4"
                          style={{ color: "oklch(0.52 0.14 46 / 0.8)" }}
                        >
                          Choose the Gita verse that will close your letter —
                          the final words of Krishna that you leave for those
                          you love.
                        </p>
                        <div
                          className="space-y-2"
                          data-ocid="spiritual-will.verse_choices"
                        >
                          {CLOSING_VERSES.map((v) => (
                            <button
                              key={v.ref}
                              type="button"
                              onClick={() =>
                                updateWill({ closingVerseRef: v.ref })
                              }
                              className="w-full rounded-lg p-4 text-left transition-all duration-200"
                              style={{
                                background:
                                  will.closingVerseRef === v.ref
                                    ? "oklch(0.76 0.32 54 / 0.12)"
                                    : "oklch(0.90 0.06 68 / 0.6)",
                                border: `1.5px solid ${will.closingVerseRef === v.ref ? "oklch(0.76 0.32 54 / 0.6)" : "oklch(0.72 0.12 56 / 0.3)"}`,
                              }}
                              data-ocid={`spiritual-will.verse_${v.ref.replace(/\./g, "_").replace(/\s+/g, "")}`}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className="flex-shrink-0 font-display text-xs font-bold pt-0.5"
                                  style={{ color: "oklch(0.62 0.26 32)" }}
                                >
                                  {v.ref}
                                </div>
                                <div>
                                  <p
                                    className="font-body italic text-sm mb-1"
                                    style={{
                                      color: "oklch(0.28 0.10 36)",
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    "{v.text.slice(0, 70)}…"
                                  </p>
                                  <p
                                    className="font-body text-xs"
                                    style={{ color: "oklch(0.52 0.10 44)" }}
                                  >
                                    {v.why}
                                  </p>
                                </div>
                                {will.closingVerseRef === v.ref && (
                                  <span
                                    className="ml-auto font-display text-sm"
                                    style={{ color: "oklch(0.62 0.26 32)" }}
                                  >
                                    ✓
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Section navigation */}
                  <div className="flex gap-3">
                    {SECTIONS.findIndex((s) => s.id === activeSection) > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSection(
                            SECTIONS[
                              SECTIONS.findIndex(
                                (s) => s.id === activeSection,
                              ) - 1
                            ].id,
                          )
                        }
                        className="rounded-lg px-4 py-2.5 font-body text-sm transition-all"
                        style={{
                          background: "oklch(0.88 0.06 66)",
                          border: "1px solid oklch(0.72 0.12 56 / 0.4)",
                          color: "oklch(0.38 0.12 42)",
                        }}
                        data-ocid="spiritual-will.prev_section"
                      >
                        ← Previous
                      </button>
                    )}
                    {SECTIONS.findIndex((s) => s.id === activeSection) <
                    SECTIONS.length - 1 ? (
                      <motion.button
                        type="button"
                        onClick={() =>
                          setActiveSection(
                            SECTIONS[
                              SECTIONS.findIndex(
                                (s) => s.id === activeSection,
                              ) + 1
                            ].id,
                          )
                        }
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 rounded-lg py-2.5 font-display font-bold italic text-sm transition-all"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                          color: "oklch(0.12 0.08 28)",
                          boxShadow: "0 4px 16px oklch(0.62 0.26 32 / 0.3)",
                        }}
                        data-ocid="spiritual-will.next_section"
                      >
                        Continue →
                      </motion.button>
                    ) : (
                      <motion.button
                        type="button"
                        onClick={() => {
                          saveNow();
                          setViewMode("preview");
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 rounded-lg py-2.5 font-display font-bold italic text-sm transition-all"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                          color: "oklch(0.12 0.08 28)",
                          boxShadow: "0 4px 16px oklch(0.62 0.26 32 / 0.35)",
                        }}
                        data-ocid="spiritual-will.complete_button"
                      >
                        ✦ Complete My Spiritual Will ✦
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Save indicator */}
              <AnimatePresence>
                {savedFlash && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed bottom-24 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 font-body text-sm z-[200]"
                    style={{
                      background: "oklch(0.58 0.22 140)",
                      color: "oklch(0.96 0.04 74)",
                    }}
                    data-ocid="spiritual-will.saved_toast"
                  >
                    ✓ Saved to your device
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="font-body text-xs italic"
            style={{ color: "oklch(0.52 0.14 46)" }}
            data-ocid="spiritual-will.back_home"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
