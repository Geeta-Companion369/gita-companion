import { PraharPoojaSection } from "@/components/mantra/PraharPooja";
import { ShodashSection } from "@/components/mantra/Shodashopachara";
import { VarnaDharmaSection } from "@/components/mantra/VarnaDharma";
import {
  ALL_STOTRAMS,
  STOTRAM_CATEGORIES,
  type Stotram,
  type StotramCategory,
} from "@/data/stotra-data";
import { useTTS } from "@/hooks/use-tts";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function loadFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem("stotram-favorites") || "[]");
  } catch {
    return [];
  }
}
function saveFavorites(ids: string[]) {
  try {
    localStorage.setItem("stotram-favorites", JSON.stringify(ids));
  } catch {}
}

type LangMode = "full" | "transliteration" | "meaning";
type LibraryTab =
  | "stotras"
  | "shodashopachara"
  | "prahar-pooja"
  | "varna-dharma";

function SacredBanner() {
  return (
    <div
      className="p-4 mb-6 text-center rounded-lg"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.08 52) 0%, oklch(0.95 0.06 268) 100%)",
        border: "1.5px solid oklch(0.72 0.30 52 / 0.5)",
      }}
    >
      <p
        className="font-display italic leading-relaxed"
        style={{
          color: "oklch(0.28 0.14 40)",
          fontSize: "0.9rem",
          lineHeight: 1.85,
        }}
      >
        "This sacred library holds the living words of the Divine. Each shloka
        is a door — recite with devotion and Krishna opens it."
      </p>
      <div
        className="my-2 text-center font-display text-sm"
        style={{ color: "oklch(0.52 0.20 52)" }}
      >
        ✦ ॐ ✦
      </div>
      <p
        className="font-body text-xs italic"
        style={{ color: "oklch(0.45 0.18 46)" }}
      >
        अखण्ड ज्योति — The unbroken light of sacred knowledge
      </p>
    </div>
  );
}

function MantraCrossLink() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="p-4 mb-6 rounded-lg"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.95 0.10 52) 0%, oklch(0.93 0.12 268) 100%)",
        border: "1.5px solid oklch(0.62 0.26 268 / 0.4)",
      }}
      data-ocid="stotram-library.mantra-link"
    >
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p
            className="font-display text-sm font-bold italic mb-0.5"
            style={{ color: "oklch(0.22 0.10 32)" }}
          >
            🔗 Connected to Mantra Section
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.38 0.12 44)" }}
          >
            Explore 108 rare Vedic mantras, Naam Japa, Mala counter and
            life-situation mantras
          </p>
        </div>
        <Link
          to="/mantra"
          className="wax-seal-btn text-xs px-4 py-2 flex-shrink-0"
          data-ocid="stotram-library.goto-mantra-button"
        >
          Mantra Section →
        </Link>
      </div>
    </motion.div>
  );
}

// ── Library Section Tabs ──────────────────────────────────────────────────────

const LIBRARY_TABS: {
  id: LibraryTab;
  label: string;
  labelHindi: string;
  icon: string;
  desc: string;
}[] = [
  {
    id: "stotras",
    label: "Stotra Sanhita",
    labelHindi: "स्तोत्र संहिता",
    icon: "📜",
    desc: "Sacred hymns & stotras",
  },
  {
    id: "shodashopachara",
    label: "Shodashopachara Pooja",
    labelHindi: "षोडशोपचार पूजा",
    icon: "🪷",
    desc: "16-step complete pooja vidhi",
  },
  {
    id: "prahar-pooja",
    label: "4 Prahar Pooja",
    labelHindi: "चतुष्प्रहर पूजा",
    icon: "🕯️",
    desc: "Morning, noon, evening, night pooja",
  },
  {
    id: "varna-dharma",
    label: "Varna Dharma",
    labelHindi: "वर्ण धर्म",
    icon: "📿",
    desc: "Daily duties by Vedic order",
  },
];

function LibraryTabBar({
  active,
  onChange,
}: {
  active: LibraryTab;
  onChange: (t: LibraryTab) => void;
}) {
  return (
    <div
      className="flex gap-1 flex-wrap mb-6 p-1.5 rounded-xl"
      style={{
        background: "oklch(0.96 0.06 52 / 0.8)",
        border: "1.5px solid oklch(0.78 0.16 52 / 0.4)",
      }}
      data-ocid="stotram-library.main-tabs"
    >
      {LIBRARY_TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className="flex-1 min-w-[120px] px-3 py-2.5 rounded-lg font-display text-xs font-bold transition-all duration-200 flex flex-col items-center gap-0.5"
            style={{
              background: isActive ? "oklch(0.72 0.28 52)" : "transparent",
              color: isActive ? "oklch(0.08 0.04 28)" : "oklch(0.38 0.14 44)",
              boxShadow: isActive
                ? "0 2px 8px oklch(0.72 0.28 52 / 0.35)"
                : "none",
            }}
            data-ocid={`stotram-library.tab.${tab.id}`}
          >
            <span className="text-base">{tab.icon}</span>
            <span className="leading-tight text-center">{tab.label}</span>
            <span
              className="text-[9px] font-body opacity-70 leading-tight"
              style={{ fontStyle: "italic" }}
            >
              {tab.labelHindi}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Pooja Section Wrapper (light background) ──────────────────────────────────

function PoojaWrapper({
  children,
  title,
  titleHindi,
  icon,
  description,
}: {
  children: React.ReactNode;
  title: string;
  titleHindi: string;
  icon: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="rounded-xl p-1"
      style={{
        background: "oklch(0.98 0.03 52 / 0.95)",
        border: "1.5px solid oklch(0.78 0.18 52 / 0.35)",
      }}
    >
      {/* Section header */}
      <div
        className="rounded-t-lg p-5 mb-1 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.72 0.28 52) 0%, oklch(0.68 0.24 46) 100%)",
        }}
      >
        <span className="text-3xl mb-2 block">{icon}</span>
        <h2
          className="font-display text-xl font-bold italic"
          style={{ color: "oklch(0.10 0.06 28)" }}
        >
          {title}
        </h2>
        <p
          className="font-display text-sm italic mt-0.5"
          style={{ color: "oklch(0.20 0.08 32)" }}
        >
          {titleHindi}
        </p>
        <p
          className="font-body text-xs mt-2 max-w-lg mx-auto leading-relaxed"
          style={{ color: "oklch(0.18 0.08 34)" }}
        >
          {description}
        </p>
      </div>

      {/* Content in light wrapper */}
      <div
        className="rounded-b-lg p-4"
        style={{
          background: "oklch(0.99 0.02 52)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// ── Stotra grid components ────────────────────────────────────────────────────

function CategoryFilter({
  active,
  onChange,
}: {
  active: StotramCategory | "All";
  onChange: (c: StotramCategory | "All") => void;
}) {
  const all: Array<StotramCategory | "All"> = [
    "All",
    "Vedic",
    "Bhakti",
    "Vaishnava",
    "Shiva",
    "Shakta",
    "Kavach",
    "Guru",
  ];
  return (
    <div
      className="flex gap-2 flex-wrap mb-5"
      data-ocid="stotram-library.category-filter"
    >
      {all.map((cat) => {
        const isActive = active === cat;
        const meta = cat !== "All" ? STOTRAM_CATEGORIES[cat] : null;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className="px-3 py-1.5 rounded font-display text-xs font-bold italic transition-smooth flex-shrink-0"
            style={{
              background: isActive
                ? "oklch(0.72 0.30 52)"
                : "oklch(0.94 0.07 58)",
              color: isActive ? "oklch(0.10 0.06 28)" : "oklch(0.38 0.14 44)",
              border: `1px solid ${isActive ? "oklch(0.68 0.28 52)" : "oklch(0.76 0.14 52 / 0.5)"}`,
            }}
            data-ocid={`stotram-library.category.${cat.toLowerCase()}`}
          >
            {meta ? `${meta.icon} ${meta.label}` : "All Stotras"}
          </button>
        );
      })}
    </div>
  );
}

function StotramCard({
  stotram,
  index,
  isFav,
  onOpen,
  onToggleFav,
}: {
  stotram: Stotram;
  index: number;
  isFav: boolean;
  onOpen: () => void;
  onToggleFav: (e: React.MouseEvent) => void;
}) {
  const catMeta = STOTRAM_CATEGORIES[stotram.category];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="cursor-pointer transition-smooth hover:shadow-lg rounded-xl"
      onClick={onOpen}
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.06 52) 0%, oklch(0.96 0.05 268) 100%)",
        border: "1.5px solid oklch(0.80 0.14 52 / 0.5)",
        padding: "1.25rem",
      }}
      data-ocid={`stotram-library.stotram.${index + 1}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl flex-shrink-0">{stotram.symbol}</span>
        <div className="flex-1 min-w-0">
          <h3
            className="font-display text-base font-bold italic leading-tight truncate"
            style={{ color: "oklch(0.18 0.10 32)" }}
          >
            {stotram.nameHindi}
          </h3>
          <h4
            className="font-display text-sm italic truncate"
            style={{ color: "oklch(0.38 0.16 46)" }}
          >
            {stotram.name}
          </h4>
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className="font-body text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded"
              style={{
                background: "oklch(0.88 0.14 52 / 0.6)",
                color: catMeta.color,
              }}
            >
              {catMeta.icon} {stotram.category}
            </span>
            <span
              className="font-body text-[10px]"
              style={{ color: "oklch(0.45 0.12 44)" }}
            >
              {stotram.deity}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleFav}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          className="flex-shrink-0 text-xl transition-smooth hover:scale-125"
          data-ocid={`stotram-library.fav-button.${index + 1}`}
        >
          {isFav ? "⭐" : "☆"}
        </button>
      </div>
      <p
        className="font-body text-xs leading-relaxed mb-3 line-clamp-2"
        style={{ color: "oklch(0.38 0.10 44)" }}
      >
        {stotram.intro}
      </p>
      <div className="flex items-center justify-between">
        <span
          className="font-body text-xs italic"
          style={{ color: "oklch(0.48 0.12 46)" }}
        >
          {stotram.sections.length} sections · {stotram.language}
        </span>
        <span
          className="font-display text-xs font-bold italic"
          style={{ color: "oklch(0.52 0.24 52)" }}
        >
          Read →
        </span>
      </div>
    </motion.div>
  );
}

function StotramDetail({
  stotram,
  isFav,
  onBack,
  onToggleFav,
}: {
  stotram: Stotram;
  isFav: boolean;
  onBack: () => void;
  onToggleFav: () => void;
}) {
  const { speak, stop, isSpeaking } = useTTS();
  const [langMode, setLangMode] = useState<LangMode>("full");
  const [activeSection, setActiveSection] = useState(0);

  function speakSection(idx: number) {
    if (isSpeaking) {
      stop();
      return;
    }
    const section = stotram.sections[idx];
    speak(
      `${section.title}. ${section.content.replace(/\n/g, " ")}`,
      "en",
      "male",
      0.72,
    );
  }

  const currentSection = stotram.sections[activeSection];

  return (
    <motion.div
      key={stotram.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      data-ocid="stotram-library.detail"
    >
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="wax-seal-btn-saffron wax-seal-btn text-sm mb-5"
        data-ocid="stotram-library.back-button"
      >
        ← Back to Library
      </button>

      {/* Header */}
      <div
        className="p-5 mb-5 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.08 52) 0%, oklch(0.95 0.07 268) 100%)",
          border: "1.5px solid oklch(0.76 0.18 52 / 0.5)",
        }}
      >
        <div className="flex items-start gap-4">
          <span className="text-4xl flex-shrink-0">{stotram.symbol}</span>
          <div className="flex-1 min-w-0">
            <h2
              className="font-display text-xl font-bold italic leading-tight"
              style={{ color: "oklch(0.18 0.10 32)" }}
            >
              {stotram.nameHindi}
            </h2>
            <h3
              className="font-display text-base italic mb-1"
              style={{ color: "oklch(0.38 0.16 46)" }}
            >
              {stotram.name}
            </h3>
            <span
              className="font-body text-xs uppercase tracking-wider font-semibold"
              style={{ color: "oklch(0.45 0.22 46)" }}
            >
              {stotram.deity}
            </span>
          </div>
          <button
            type="button"
            onClick={onToggleFav}
            className="text-2xl transition-smooth flex-shrink-0 hover:scale-125"
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            data-ocid="stotram-library.detail.fav-button"
          >
            {isFav ? "⭐" : "☆"}
          </button>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        {[
          { label: "About", content: stotram.intro, icon: "📜" },
          { label: "Benefits", content: stotram.benefits, icon: "✨" },
          { label: "How to Recite", content: stotram.instructions, icon: "🙏" },
        ].map(({ label, content, icon }) => (
          <div
            key={label}
            className="p-4 rounded-lg"
            style={{
              background: "oklch(0.97 0.06 52)",
              border: "1px solid oklch(0.80 0.12 52 / 0.4)",
            }}
          >
            <p
              className="font-display text-xs font-bold italic mb-2"
              style={{ color: "oklch(0.45 0.18 46)", letterSpacing: "0.08em" }}
            >
              {icon} {label.toUpperCase()}
            </p>
            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: "oklch(0.28 0.10 36)", lineHeight: 1.75 }}
            >
              {content}
            </p>
          </div>
        ))}
      </div>

      {/* Related mantras cross-link */}
      {stotram.relatedMantras && stotram.relatedMantras.length > 0 && (
        <div
          className="p-3 mb-5 flex items-center gap-3 flex-wrap rounded-lg"
          style={{
            background: "oklch(0.96 0.08 268 / 0.5)",
            border: "1px solid oklch(0.62 0.26 268 / 0.4)",
          }}
          data-ocid="stotram-library.related-mantras"
        >
          <span
            className="font-body text-xs italic"
            style={{ color: "oklch(0.38 0.14 44)" }}
          >
            🔗 Related in Mantra Section:
          </span>
          <Link
            to="/mantra"
            className="wax-seal-btn text-xs px-3 py-1"
            data-ocid="stotram-library.related-mantra-link"
          >
            Visit Mantra Section →
          </Link>
        </div>
      )}

      {/* Display mode toggle */}
      <div
        className="flex gap-2 mb-4 flex-wrap"
        data-ocid="stotram-library.language-toggle"
      >
        {(["full", "transliteration", "meaning"] as LangMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setLangMode(mode)}
            className={
              mode === langMode
                ? "wax-seal-btn text-xs px-4 py-2"
                : "wax-seal-btn-saffron wax-seal-btn text-xs px-4 py-2"
            }
            data-ocid={`stotram-library.mode-${mode}-button`}
          >
            {mode === "full"
              ? "📖 Full Text"
              : mode === "transliteration"
                ? "🔤 Transliteration"
                : "💡 Meaning"}
          </button>
        ))}
      </div>

      {/* Section tabs */}
      <div
        className="flex gap-2 mb-5 overflow-x-auto pb-2"
        data-ocid="stotram-library.sections-tabs"
      >
        {stotram.sections.map((section, i) => (
          <button
            key={section.title}
            type="button"
            onClick={() => setActiveSection(i)}
            className="flex-shrink-0 px-3 py-2 rounded font-display text-xs font-bold italic transition-smooth"
            style={{
              background:
                activeSection === i
                  ? "oklch(0.72 0.30 52)"
                  : "oklch(0.94 0.07 58)",
              color:
                activeSection === i
                  ? "oklch(0.10 0.06 28)"
                  : "oklch(0.38 0.14 44)",
              border: `1px solid ${activeSection === i ? "oklch(0.68 0.28 52)" : "oklch(0.76 0.14 52 / 0.4)"}`,
            }}
            data-ocid={`stotram-library.section.tab.${i + 1}`}
          >
            {i + 1}.{" "}
            {section.title.length > 22
              ? `${section.title.slice(0, 22)}…`
              : section.title}
          </button>
        ))}
      </div>

      {/* Section content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-6 rounded-xl"
          style={{
            background: "oklch(0.98 0.04 52)",
            border: "1.5px solid oklch(0.80 0.14 52 / 0.4)",
          }}
          data-ocid="stotram-library.section.content"
        >
          <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
            <h4
              className="font-display text-base font-bold italic"
              style={{ color: "oklch(0.18 0.10 32)" }}
            >
              {currentSection.title}
            </h4>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => speakSection(activeSection)}
                className="wax-seal-btn-saffron wax-seal-btn text-xs px-3 py-1.5"
                data-ocid="stotram-library.section.listen-button"
              >
                {isSpeaking ? "⏸ Pause" : "🔊 Listen"}
              </button>
            </div>
          </div>

          {langMode === "meaning" ? (
            <div
              className="font-body leading-relaxed whitespace-pre-line"
              style={{
                color: "oklch(0.28 0.12 44)",
                lineHeight: 2.0,
                fontSize: "0.9rem",
              }}
            >
              {currentSection.content
                .split("\n")
                .filter((line) => {
                  if (!line.trim()) return true;
                  const isDevanagari = /^[\u0900-\u097F]/.test(line.trim());
                  return !isDevanagari;
                })
                .join("\n")}
            </div>
          ) : langMode === "transliteration" ? (
            <div
              className="font-body leading-relaxed whitespace-pre-line"
              style={{
                color: "oklch(0.22 0.12 38)",
                lineHeight: 2.1,
                fontSize: "0.92rem",
                fontStyle: "italic",
              }}
            >
              {currentSection.content
                .split("\n")
                .filter((line) => {
                  if (!line.trim()) return true;
                  return (
                    /^[A-Z\s—\-\d\.]/.test(line.trim()) ||
                    line.trim().startsWith("Om") ||
                    line.trim().startsWith("OM")
                  );
                })
                .join("\n") || currentSection.content}
            </div>
          ) : (
            <div
              className="font-body leading-relaxed whitespace-pre-line"
              style={{
                color: "oklch(0.15 0.10 30)",
                lineHeight: 2.1,
                fontSize: "1.02rem",
              }}
            >
              {currentSection.content}
            </div>
          )}

          <div
            className="mt-4 text-center font-display text-sm"
            style={{ color: "oklch(0.55 0.16 52)" }}
          >
            ✦
          </div>
          <p
            className="font-body text-xs italic text-center"
            style={{ color: "oklch(0.45 0.14 46)" }}
          >
            Section {activeSection + 1} of {stotram.sections.length} —{" "}
            {stotram.name}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Prev/Next navigation */}
      <div className="flex gap-3 mt-5 justify-between items-center">
        <button
          type="button"
          onClick={() => setActiveSection((p) => Math.max(0, p - 1))}
          disabled={activeSection === 0}
          className="wax-seal-btn-saffron wax-seal-btn text-sm disabled:opacity-40"
          data-ocid="stotram-library.prev-section-button"
        >
          ← Previous
        </button>
        <span
          className="font-display text-xs italic"
          style={{ color: "oklch(0.42 0.12 46)" }}
        >
          {activeSection + 1} / {stotram.sections.length}
        </span>
        <button
          type="button"
          onClick={() =>
            setActiveSection((p) =>
              Math.min(stotram.sections.length - 1, p + 1),
            )
          }
          disabled={activeSection === stotram.sections.length - 1}
          className="wax-seal-btn text-sm disabled:opacity-40"
          data-ocid="stotram-library.next-section-button"
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
}

// ── Varna Dharma Disclaimer ──────────────────────────────────────────────────

function VarnaDharmaDisclaimer() {
  return (
    <div
      className="mb-5 p-4 rounded-lg"
      style={{
        background: "oklch(0.97 0.06 268 / 0.6)",
        border: "1.5px solid oklch(0.62 0.26 268 / 0.35)",
      }}
    >
      <p
        className="font-display text-sm font-bold italic mb-1"
        style={{ color: "oklch(0.28 0.14 268)" }}
      >
        ℹ️ Vedic Context Note
      </p>
      <p
        className="font-body text-xs leading-relaxed"
        style={{ color: "oklch(0.32 0.10 44)", lineHeight: 1.8 }}
      >
        This section describes the traditional Vedic social order for{" "}
        <strong>historical and knowledge purposes</strong>. As Bhagavad Gita
        18.41 states, Varna is defined by <em>qualities (gunas)</em> and{" "}
        <em>actions (karma)</em>, not birth alone. Every soul can worship
        Krishna regardless of birth — Gita 9.32: "Even those of sinful birth, O
        Partha, attain the supreme goal by taking refuge in Me."
      </p>
    </div>
  );
}

// ── Stotra Grid Section ──────────────────────────────────────────────────────

function StotrasSection({
  favorites,
  onToggleFav,
}: {
  favorites: string[];
  onToggleFav: (id: string, e: React.MouseEvent) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [category, setCategory] = useState<StotramCategory | "All">("All");
  const [search, setSearch] = useState("");

  const selected = ALL_STOTRAMS.find((s) => s.id === selectedId) ?? null;
  const favStotrams = ALL_STOTRAMS.filter((s) => favorites.includes(s.id));

  const filtered = ALL_STOTRAMS.filter((s) => {
    const matchCat = category === "All" || s.category === category;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.nameHindi.includes(q) ||
      s.deity.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (selected) {
    return (
      <AnimatePresence>
        <StotramDetail
          stotram={selected}
          isFav={favorites.includes(selected.id)}
          onBack={() => setSelectedId(null)}
          onToggleFav={() => {
            const fakeEvent = new MouseEvent(
              "click",
            ) as unknown as React.MouseEvent;
            onToggleFav(selected.id, fakeEvent);
          }}
        />
      </AnimatePresence>
    );
  }

  return (
    <>
      {/* Favorites row */}
      {favStotrams.length > 0 && (
        <div className="mb-6" data-ocid="stotram-library.favorites-section">
          <p
            className="font-display text-sm font-bold italic mb-3"
            style={{ color: "oklch(0.38 0.14 46)" }}
          >
            ⭐ Your Favorites
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {favStotrams.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className="flex-shrink-0 px-3 py-2 rounded font-display text-xs font-bold italic transition-smooth"
                style={{
                  background: "oklch(0.94 0.10 52 / 0.9)",
                  border: "1px solid oklch(0.72 0.24 52 / 0.5)",
                  color: "oklch(0.22 0.12 36)",
                }}
                data-ocid={`stotram-library.favorite-quick.${s.id}`}
              >
                {s.symbol} {s.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search stotras... (e.g. Hanuman, Shiva, Gayatri)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="manuscript-input"
          data-ocid="stotram-library.search-input"
        />
      </div>

      {/* Category filter */}
      <CategoryFilter active={category} onChange={setCategory} />

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        data-ocid="stotram-library.grid"
      >
        {filtered.length === 0 ? (
          <div
            className="col-span-2 p-8 text-center rounded-xl"
            style={{
              background: "oklch(0.97 0.05 52)",
              border: "1.5px solid oklch(0.80 0.12 52 / 0.4)",
            }}
            data-ocid="stotram-library.empty-state"
          >
            <p className="text-3xl mb-3">📜</p>
            <p
              className="font-display italic"
              style={{ color: "oklch(0.40 0.12 46)" }}
            >
              No stotras found for your search
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="wax-seal-btn-saffron wax-seal-btn text-xs mt-4"
              data-ocid="stotram-library.clear-search-button"
            >
              Show All Stotras
            </button>
          </div>
        ) : (
          filtered.map((stotram, i) => (
            <StotramCard
              key={stotram.id}
              stotram={stotram}
              index={i}
              isFav={favorites.includes(stotram.id)}
              onOpen={() => setSelectedId(stotram.id)}
              onToggleFav={(e) => onToggleFav(stotram.id, e)}
            />
          ))
        )}
      </motion.div>

      {/* Bottom mantra link */}
      <div className="mt-8 text-center">
        <div
          className="text-center font-display text-base mb-3"
          style={{ color: "oklch(0.55 0.20 52)" }}
        >
          ✦ ॐ ✦
        </div>
        <p
          className="font-body text-xs italic mb-3"
          style={{ color: "oklch(0.42 0.12 46)" }}
        >
          For Japa practice with 108 Vedic mantras, mala counter, and
          life-situation mantras:
        </p>
        <a
          href="/mantra"
          className="wax-seal-btn text-sm"
          data-ocid="stotram-library.bottom-mantra-link"
        >
          🔱 Visit the Mantra Section
        </a>
      </div>
    </>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export function StotramLibraryPage() {
  const [favorites, setFavorites] = useState<string[]>(loadFavorites);
  const [activeTab, setActiveTab] = useState<LibraryTab>("stotras");

  function toggleFav(id: string, e?: React.MouseEvent) {
    e?.stopPropagation();
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      saveFavorites(next);
      return next;
    });
  }

  return (
    <div className="page-enter" data-ocid="stotram-library.page">
      <div className="ornate-header mb-6">
        <h1>स्तोत्र संग्रह</h1>
        <p
          className="font-body text-base italic mt-3"
          style={{ color: "oklch(0.40 0.12 46)" }}
        >
          Stotra Sangraha — Sacred Hymns, Pooja Vidhi & Dharma Guide
        </p>
      </div>

      <SacredBanner />
      <MantraCrossLink />

      {/* Main Tab Navigation */}
      <LibraryTabBar active={activeTab} onChange={setActiveTab} />

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "stotras" && (
          <motion.div
            key="stotras"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <StotrasSection favorites={favorites} onToggleFav={toggleFav} />
          </motion.div>
        )}

        {activeTab === "shodashopachara" && (
          <motion.div
            key="shodashopachara"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <PoojaWrapper
              title="Shodashopachara Pooja"
              titleHindi="षोडशोपचार पूजा विधि"
              icon="🪷"
              description="The complete 16-step pooja vidhi — the most thorough and sacred form of Hindu worship. Each step has its specific Sanskrit mantra, ritual action, and deity-specific variations. From ancient Grihyasutras and Agama traditions."
            >
              <ShodashSection />
            </PoojaWrapper>
          </motion.div>
        )}

        {activeTab === "prahar-pooja" && (
          <motion.div
            key="prahar-pooja"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <PoojaWrapper
              title="4 Prahar Pooja Vidhi"
              titleHindi="चतुष्प्रहर पूजा"
              icon="🕯️"
              description="The Vedic day is divided into 4 sacred Prahars (time periods). Each Prahar has specific divine energies, prescribed mantras, samagri, and worship methods for 18 major deities. From Smritis, Puranas, and Vedic tradition."
            >
              <PraharPoojaSection />
            </PoojaWrapper>
          </motion.div>
        )}

        {activeTab === "varna-dharma" && (
          <motion.div
            key="varna-dharma"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <PoojaWrapper
              title="Varna Dharma — Daily Sacred Duties"
              titleHindi="वर्ण धर्म — नित्य कर्म"
              icon="📿"
              description="Daily duties (Nitya Karma) for each Varna as prescribed in Vedas, Manusmriti, Mahabharata, and Bhagavad Gita. Includes complete daily schedule, 10 core duties, and Gita verse references for each Varna."
            >
              <VarnaDharmaDisclaimer />
              <VarnaDharmaSection />
            </PoojaWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
