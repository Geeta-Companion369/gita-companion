import {
  MANTRAS_108,
  VEDIC_CATEGORIES,
  type VedicCategory,
  type VedicMantra,
} from "@/data/mantra-108";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Helper ───────────────────────────────────────────────────────────────────

function directSpeak(text: string, onEnd?: () => void): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.68;
  u.pitch = 0.8;
  u.volume = 1.0;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    const v = voices.find(
      (v) => v.lang.startsWith("hi") || v.lang.startsWith("en-IN"),
    );
    u.voice = v ?? voices[0];
  }
  if (onEnd) u.onend = onEnd;
  setTimeout(() => window.speechSynthesis.speak(u), 60);
}

// ─── Mantra Card ──────────────────────────────────────────────────────────────

function MantraCard108({
  mantra,
  isSelected,
  onSelect,
}: {
  mantra: VedicMantra;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ x: 3 }}
      className="w-full text-left transition-smooth"
      data-ocid={`mantra-108-${mantra.id}`}
    >
      <div
        className="flex items-start gap-3 px-4 py-3 border-b border-border/30 hover:bg-accent/5 transition-smooth"
        style={
          isSelected
            ? {
                background: "oklch(var(--accent) / 0.08)",
                borderLeft: "3px solid oklch(var(--accent) / 0.6)",
              }
            : { borderLeft: "3px solid transparent" }
        }
      >
        <div
          className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center text-xs font-display font-bold border"
          style={{
            background: "oklch(var(--accent) / 0.1)",
            borderColor: "oklch(var(--accent) / 0.3)",
            color: "oklch(var(--accent))",
            borderRadius: "1px",
          }}
        >
          {mantra.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body text-sm text-foreground font-medium leading-snug">
            {mantra.sanskrit}
          </p>
          <p className="font-body text-xs text-muted-foreground italic mt-0.5 truncate">
            {mantra.transliteration}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function Mantras108Section() {
  const [activeCategory, setActiveCategory] =
    useState<VedicCategory>("raksha-kavach");
  const [selectedMantra, setSelectedMantra] = useState<VedicMantra>(
    MANTRAS_108.find((m) => m.category === "raksha-kavach")!,
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const filtered = MANTRAS_108.filter((m) => m.category === activeCategory);
  const currentCat = VEDIC_CATEGORIES.find((c) => c.id === activeCategory)!;
  const totalCounted = VEDIC_CATEGORIES.reduce((a, c) => a + c.count, 0);

  const handlePlay = () => {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    directSpeak(
      `${selectedMantra.transliteration}. ${selectedMantra.meaning}`,
      () => {
        setIsPlaying(false);
      },
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <p className="text-verse-number tracking-widest mb-1">
          ॥ अष्टोत्तरशतमन्त्राः ॥
        </p>
        <h2 className="font-display text-2xl font-bold italic text-primary mb-2">
          108 Vedic Mantras
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
          {totalCounted} rare, authentic, and verified Vedic mantras —
          protective, prosperous, healing, and liberating. All Sanskrit text is
          accurate with source citations from Vedas, Upanishads, and Puranas.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {VEDIC_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setActiveCategory(cat.id);
              const first = MANTRAS_108.find((m) => m.category === cat.id);
              if (first) setSelectedMantra(first);
              window.speechSynthesis?.cancel();
              setIsPlaying(false);
            }}
            data-ocid={`mantra-108-cat-${cat.id}`}
            className={`p-3 border text-left transition-smooth ${
              activeCategory === cat.id
                ? "border-accent/60 bg-accent/10"
                : "border-border hover:border-accent/30 hover:bg-accent/5"
            }`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{cat.icon}</span>
              <p className="font-display text-xs font-semibold text-foreground leading-tight">
                {cat.label}
              </p>
            </div>
            <p className="font-body text-xs text-muted-foreground italic">
              {cat.labelSanskrit}
            </p>
            <p className="font-body text-xs text-accent mt-1">
              {cat.count} mantras
            </p>
          </button>
        ))}
      </div>

      {/* Category subtitle */}
      <div className="px-1">
        <p className="text-verse-number tracking-widest">
          {currentCat.icon} {currentCat.description}
        </p>
      </div>

      {/* Split layout */}
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Mantra List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border border-border"
            style={{ background: "oklch(var(--card) / 0.7)" }}
          >
            {filtered.map((m) => (
              <MantraCard108
                key={m.id}
                mantra={m}
                isSelected={selectedMantra.id === m.id}
                onSelect={() => {
                  setSelectedMantra(m);
                  window.speechSynthesis?.cancel();
                  setIsPlaying(false);
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Detail Panel */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="h-fit sticky top-4 border border-border shadow-elevated space-y-0"
          style={{ background: "oklch(var(--card) / 0.9)" }}
        >
          <div
            className="px-5 py-3 border-b border-border/40"
            style={{ background: "oklch(var(--muted) / 0.5)" }}
          >
            <p className="text-verse-number tracking-widest text-center">
              ॥ मन्त्र {selectedMantra.id} of 108 ॥
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMantra.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-5 space-y-4"
            >
              {/* Sanskrit */}
              <div
                className="p-4 text-center border border-border/30"
                style={{
                  background: "oklch(var(--muted) / 0.4)",
                  borderRadius: "1px",
                }}
              >
                <p
                  className="font-body text-lg font-medium text-foreground leading-loose"
                  style={{ lineHeight: 2 }}
                >
                  {selectedMantra.sanskrit}
                </p>
              </div>

              {/* Transliteration */}
              <p className="font-body text-xs italic text-center text-muted-foreground leading-relaxed">
                {selectedMantra.transliteration}
              </p>

              {/* Meaning */}
              <p
                className="font-body text-sm text-muted-foreground leading-relaxed border-l-2 pl-3"
                style={{ borderColor: "oklch(var(--accent) / 0.4)" }}
              >
                {selectedMantra.meaning}
              </p>

              {/* Source */}
              <p
                className="font-body text-xs italic text-center"
                style={{ color: "oklch(var(--accent) / 0.7)" }}
              >
                📜 {selectedMantra.source}
              </p>

              {/* Play Button */}
              <button
                type="button"
                onClick={handlePlay}
                data-ocid="mantra-108-play-btn"
                className="w-full py-3 font-display text-sm font-semibold tracking-widest uppercase border border-accent/40 transition-smooth hover:shadow-warm-glow"
                style={{
                  background: isPlaying
                    ? "oklch(var(--accent) / 0.15)"
                    : "linear-gradient(135deg, oklch(var(--primary) / 0.12), oklch(var(--accent) / 0.08))",
                  color: "oklch(var(--primary))",
                  borderRadius: "1px",
                }}
              >
                {isPlaying ? "⏸ रुकिए · Stop" : "▶ सुनिए · Listen"}
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
