import type { Chapter } from "@/types/gita";
import { Link } from "@tanstack/react-router";

// Roman numerals for chapter display
const ROMAN = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
];

interface ChapterCardProps {
  chapter: Chapter;
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  const roman = ROMAN[chapter.id] ?? String(chapter.id);

  return (
    <Link
      to="/chapter/$id"
      params={{ id: String(chapter.id) }}
      className="group block relative"
      data-ocid={`chapter-card-${chapter.id}`}
    >
      <article
        className="relative py-6 px-2 transition-smooth"
        style={{
          borderBottom: "1px solid oklch(var(--border) / 0.40)",
        }}
      >
        {/* Candlelight hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none rounded-sm"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, oklch(var(--accent) / 0.06) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="flex items-start gap-5 relative z-10">
          {/* Roman numeral — large, display, left column */}
          <div className="flex-shrink-0 w-12 text-right">
            <span
              className="font-display font-bold italic leading-none select-none"
              style={{
                fontSize: "1.6rem",
                color: "oklch(var(--accent) / 0.55)",
                textShadow: "0 1px 3px rgba(60,40,20,0.12)",
              }}
            >
              {roman}
            </span>
          </div>

          {/* Vertical divider — manuscript rule */}
          <div
            className="flex-shrink-0 w-px self-stretch mt-1"
            style={{
              background:
                "linear-gradient(180deg, oklch(var(--accent) / 0.3) 0%, oklch(var(--accent) / 0.12) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Sanskrit name */}
            <p
              className="font-body mb-1 leading-tight"
              style={{
                fontSize: "1.1rem",
                color: "oklch(var(--accent) / 0.85)",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              {chapter.sanskritName}
            </p>

            {/* Chapter name — Fraunces display */}
            <h3
              className="font-display font-bold mb-2 leading-snug group-hover:text-primary transition-smooth"
              style={{
                fontSize: "1.25rem",
                color: "oklch(var(--foreground))",
                fontStyle: "italic",
              }}
            >
              {chapter.name}
            </h3>

            {/* Summary — two lines, Lora, justified */}
            <p
              className="font-body leading-relaxed line-clamp-2 mb-3"
              style={{
                fontSize: "0.88rem",
                color: "oklch(var(--muted-foreground))",
                textAlign: "justify",
              }}
            >
              {chapter.summary}
            </p>

            {/* Footer row — verse count + TOC dots */}
            <div className="flex items-center gap-3">
              <span
                className="font-display text-xs tracking-widest uppercase"
                style={{ color: "oklch(var(--accent) / 0.65)" }}
              >
                {chapter.verseCount} Shlokas
              </span>
              <span
                className="flex-1 border-b border-dashed"
                style={{ borderColor: "oklch(var(--border) / 0.7)" }}
                aria-hidden="true"
              />
              <span
                className="font-display text-xs italic opacity-0 group-hover:opacity-100 transition-smooth"
                style={{ color: "oklch(var(--accent))" }}
              >
                Adhyaya {roman} →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
