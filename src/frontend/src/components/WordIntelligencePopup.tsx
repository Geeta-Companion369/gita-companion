// ─── WordIntelligencePopup ─────────────────────────────────────────────────
// Floating manuscript-style card showing deep Sanskrit word intelligence.
// Styled as an ancient marginal note on aged parchment.

import type { GitaVerse } from "@/data/gita-verses-ch1";
import type { WordIntelligence } from "@/types/gita";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface WordIntelligencePopupProps {
  word: string;
  intelligence: WordIntelligence;
  onClose: () => void;
  relatedVerses: GitaVerse[];
  /** Position hint — popup will try to stay on screen */
  anchorRect?: DOMRect;
}

export function WordIntelligencePopup({
  word,
  intelligence,
  onClose,
  relatedVerses,
  anchorRect,
}: WordIntelligencePopupProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);

  // Compute position: default below anchor, clamp to viewport
  const style: React.CSSProperties = { position: "fixed", zIndex: 9999 };
  if (anchorRect) {
    const top = Math.min(anchorRect.bottom + 8, window.innerHeight - 320);
    const left = Math.min(
      Math.max(anchorRect.left, 12),
      window.innerWidth - 320,
    );
    style.top = top;
    style.left = left;
  } else {
    style.top = "50%";
    style.left = "50%";
    style.transform = "translate(-50%, -50%)";
  }

  const displayRelated = relatedVerses.slice(0, 3);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        width: 300,
        background:
          "linear-gradient(160deg, oklch(0.95 0.07 74) 0%, oklch(0.92 0.08 68) 55%, oklch(0.89 0.09 63) 100%)",
        border: "1.5px solid oklch(0.72 0.28 52 / 0.55)",
        borderRadius: "0.25rem",
        boxShadow:
          "0 8px 32px oklch(0.18 0.06 44 / 0.35), inset 0 1px 0 oklch(0.96 0.08 74 / 0.7)",
      }}
      aria-label={`Word intelligence for ${word}`}
      aria-modal="true"
      tabIndex={-1}
      data-ocid="word-intelligence.dialog"
    >
      {/* Ornate top border */}
      <div
        aria-hidden
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.6), oklch(0.72 0.28 52 / 0.9), oklch(0.72 0.28 52 / 0.6), transparent)",
          borderRadius: "0.25rem 0.25rem 0 0",
        }}
      />

      <div className="p-4 relative">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close word intelligence"
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
          data-ocid="word-intelligence.close_button"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Devanagari word — large, gold */}
        <p
          className="font-body text-accent leading-none mb-0.5"
          lang="sa"
          style={{ fontSize: "2.2rem", fontWeight: 600 }}
        >
          {intelligence.word}
        </p>

        {/* IAST transliteration */}
        <p className="font-body italic text-sm text-accent/70 mb-3 leading-none">
          {intelligence.iast}
        </p>

        {/* Ornate mini-rule */}
        <div
          aria-hidden
          className="mb-3"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.45), transparent)",
          }}
        />

        {/* Meaning */}
        <p className="font-body text-foreground leading-snug mb-3 text-sm">
          {intelligence.meaning}
        </p>

        {/* Grammar tag */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span
            className="font-body text-xs italic px-2 py-0.5 rounded-sm"
            style={{
              background: "oklch(0.72 0.28 52 / 0.12)",
              border: "1px solid oklch(0.72 0.28 52 / 0.3)",
              color: "oklch(0.35 0.12 44)",
            }}
          >
            {intelligence.grammar}
          </span>
          <span
            className="font-body text-xs italic px-2 py-0.5 rounded-sm"
            style={{
              background: "oklch(0.45 0.18 280 / 0.08)",
              border: "1px solid oklch(0.45 0.18 280 / 0.22)",
              color: "oklch(0.35 0.12 270)",
            }}
          >
            ×{intelligence.frequency} in Gita
          </span>
        </div>

        {/* Etymology */}
        <p className="font-body text-xs italic text-muted-foreground/80 leading-snug mb-3">
          <span className="not-italic font-semibold text-accent/70">
            Etymology:{" "}
          </span>
          {intelligence.etymology}
        </p>

        {/* Related verses */}
        {displayRelated.length > 0 && (
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-1.5">
              Related Verses
            </p>
            <div className="flex flex-wrap gap-2">
              {displayRelated.map((rv) => (
                <Link
                  key={rv.id}
                  to="/verse/$chapterId/$verseId"
                  params={{ chapterId: String(rv.chapter), verseId: rv.id }}
                  onClick={onClose}
                  className="font-body text-xs italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5"
                  data-ocid={`word-intelligence.related_verse.${rv.id}`}
                >
                  {rv.chapter}.{rv.verse}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Corner flourish */}
        <div
          aria-hidden
          className="absolute bottom-3 right-4 text-accent/20 select-none font-display"
          style={{ fontSize: "1.1rem" }}
        >
          ✦
        </div>
      </div>
    </div>
  );
}
