import { useBookmarks } from "@/hooks/use-bookmarks";
import { useLanguage } from "@/hooks/use-language";
import { useTTS } from "@/hooks/use-tts";
import type { Verse } from "@/types/gita";
import { Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, Volume2, VolumeX } from "lucide-react";

interface VerseCardProps {
  verse: Verse;
  highlighted?: boolean;
}

export function VerseCard({ verse, highlighted = false }: VerseCardProps) {
  const { language } = useLanguage();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const { toggle, isSpeaking } = useTTS();

  const bookmarked = isBookmarked(verse.chapterId, verse.verseNumber);

  const displayTranslation =
    language === "hindi" && verse.hindiTranslation
      ? verse.hindiTranslation
      : verse.englishTranslation;

  function handleBookmark(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(verse.chapterId, verse.verseNumber);
    } else {
      addBookmark(verse.chapterId, verse.verseNumber);
    }
  }

  function handleTTS(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const text = `${verse.sanskritText}. ${verse.englishTranslation}`;
    toggle(text, "hi", "male");
  }

  return (
    <Link
      to="/verse/$chapterId/$verseId"
      params={{
        chapterId: String(verse.chapterId),
        verseId: verse.id,
      }}
      className="group block relative"
      data-ocid={`verse-card-${verse.id}`}
    >
      {/* === Manuscript verse block — open-book text flow === */}
      <article
        className="relative py-8 px-0"
        style={{
          borderBottom: "1px solid oklch(var(--border) / 0.45)",
          transition: "background 0.3s ease",
          background: highlighted
            ? "oklch(var(--accent) / 0.04)"
            : "transparent",
        }}
      >
        {/* Background hover — candlelight deepening */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, oklch(var(--accent) / 0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Verse number & actions row */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          {/* Manuscript verse number — left margin annotation style */}
          <div className="flex items-center gap-3">
            <span
              className="font-display text-xs font-bold tracking-widest uppercase select-none"
              style={{ color: "oklch(var(--accent) / 0.7)" }}
            >
              ॥ {verse.chapterId}.{verse.verseNumber} ॥
            </span>
            {highlighted && (
              <span
                className="font-body text-[10px] italic px-2 py-0.5"
                style={{
                  color: "oklch(var(--accent))",
                  border: "1px solid oklch(var(--accent) / 0.35)",
                  borderRadius: "2px",
                  background: "oklch(var(--accent) / 0.06)",
                }}
              >
                Bookmarked
              </span>
            )}
          </div>

          {/* Action icons — subtle, ink-style */}
          <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-smooth">
            <button
              type="button"
              onClick={handleTTS}
              aria-label={isSpeaking ? "Stop speaking" : "Listen to verse"}
              className="w-7 h-7 flex items-center justify-center rounded-sm transition-smooth hover:bg-accent/10"
              style={{ color: "oklch(var(--muted-foreground))" }}
              data-ocid={`verse-tts-${verse.id}`}
            >
              {isSpeaking ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              type="button"
              onClick={handleBookmark}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark verse"}
              className={[
                "w-7 h-7 flex items-center justify-center rounded-sm transition-smooth",
                bookmarked ? "hover:bg-accent/15" : "hover:bg-accent/10",
              ].join(" ")}
              style={{
                color: bookmarked
                  ? "oklch(var(--accent))"
                  : "oklch(var(--muted-foreground))",
              }}
              data-ocid={`verse-bookmark-${verse.id}`}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-3.5 h-3.5" />
              ) : (
                <Bookmark className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Sanskrit text — centered like a printed manuscript */}
        <div className="text-center mb-4 relative z-10">
          <p
            className="font-body whitespace-pre-line leading-loose mx-auto"
            style={{
              fontSize: "1.4rem",
              lineHeight: "2.0",
              color: "oklch(var(--foreground))",
              fontWeight: 500,
              letterSpacing: "0.035em",
              maxWidth: "38rem",
            }}
          >
            {verse.sanskritText}
          </p>
        </div>

        {/* Transliteration — italic, below Sanskrit */}
        <div className="text-center mb-5 relative z-10">
          <p
            className="font-body italic whitespace-pre-line leading-relaxed mx-auto"
            style={{
              fontSize: "0.875rem",
              color: "oklch(var(--accent) / 0.8)",
              maxWidth: "34rem",
            }}
          >
            {verse.transliteration}
          </p>
        </div>

        {/* Manuscript ornate divider — ॥ with thin lines */}
        <div className="chapter-separator relative z-10">
          <span
            className="font-body text-xs select-none"
            style={{
              color: "oklch(var(--accent) / 0.5)",
              letterSpacing: "0.4em",
            }}
          >
            ॥ ✦ ॥
          </span>
        </div>

        {/* English translation — Lora, indented, warm brown */}
        <div className="relative z-10">
          <p
            className="font-body leading-relaxed group-hover:text-foreground transition-smooth mx-auto"
            style={{
              fontSize: "1rem",
              lineHeight: "1.85",
              color: "oklch(var(--muted-foreground))",
              maxWidth: "34rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              fontStyle: "normal",
              textAlign: "justify",
            }}
          >
            {displayTranslation}
          </p>

          {/* Read more — manuscript annotation */}
          <p
            className="font-body italic text-xs text-center mt-3 opacity-0 group-hover:opacity-100 transition-smooth"
            style={{ color: "oklch(var(--accent) / 0.65)" }}
          >
            ↯ &nbsp; Tap to read full commentary &nbsp; ↯
          </p>
        </div>
      </article>
    </Link>
  );
}
