import { PageCurl } from "@/components/PageCurl";
import { WordIntelligencePopup } from "@/components/WordIntelligencePopup";
import { Skeleton } from "@/components/ui/skeleton";
import { WORD_INTELLIGENCE } from "@/data/word-intelligence";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useChapters } from "@/hooks/use-chapters";
import { LANGUAGE_LABELS, useLanguage } from "@/hooks/use-language";
import { useLastRead } from "@/hooks/use-last-read";
import { usePoints } from "@/hooks/use-points";
import { useTTS } from "@/hooks/use-tts";
import { useAdjacentVerses, useVerse } from "@/hooks/use-verse";
import type { Language, WordIntelligence } from "@/types/gita";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Share2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const KRISHNA_MESSAGES: Record<string, string> = {
  "2-47":
    "Act without attachment to results. Your duty is to act rightly — the outcome belongs to the Divine.",
  "2-20":
    "Fear not, dear one. That which you call 'self' was never born and shall never die.",
  "6-26":
    "The wandering mind is not your enemy — each gentle return is the very practice of yoga.",
  "9-22":
    "I am with you always. Surrender your worries to Me, and I shall provide what you need.",
  "18-66":
    "Let go of all striving. Simply come to Me. I shall free you from all that binds you.",
  "4-7":
    "When darkness seems to rise, remember — the Divine always comes to restore the light.",
  "6-5":
    "You carry within you the power of your own liberation. The mind is both the key and the lock.",
  "12-13": "Cultivate compassion for all beings. This is the highest devotion.",
  "3-27":
    "Release the ego's claim of 'I am the doer.' Watch, and let grace flow through you.",
  "9-26":
    "The simplest act of love — a leaf, a flower — received with devotion is the greatest offering.",
};

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

// ── Emotional word highlights ────────────────────────────────────────────────

const EMOTIONAL_KEYWORDS = [
  "karma",
  "dharma",
  "yoga",
  "brahman",
  "atman",
  "moksha",
  "bhakti",
  "shanti",
  "jnana",
  "satya",
  "ahimsa",
];

function isEmotionalWord(word: string): boolean {
  const lower = word.toLowerCase();
  return EMOTIONAL_KEYWORDS.some((kw) => lower.includes(kw));
}

const GRAMMAR_LABELS: Record<string, string> = {
  karma: "noun",
  dharma: "noun",
  yoga: "noun",
  atman: "noun",
  brahman: "noun",
  moksha: "noun",
  arjuna: "name",
  krishna: "name",
  bhakti: "noun",
  jnana: "noun",
  shanti: "noun",
  sattva: "noun",
  rajas: "noun",
  tamas: "noun",
  prana: "noun",
  mantra: "noun",
};

function getGrammarLabel(word: string): string {
  const lower = word.toLowerCase();
  for (const [key, label] of Object.entries(GRAMMAR_LABELS)) {
    if (lower.includes(key)) return label;
  }
  if (word.endsWith("ti") || word.endsWith("tu")) return "verb";
  if (word.endsWith("ḥ") || word.endsWith("m")) return "noun";
  if (word.length <= 3) return "particle";
  return "word";
}

function findWordIntelligence(iast: string): WordIntelligence | null {
  const lower = iast.toLowerCase();
  for (const [key, entry] of Object.entries(WORD_INTELLIGENCE)) {
    if (lower.includes(key) || key.includes(lower.slice(0, 4))) {
      return entry;
    }
  }
  return null;
}

function splitToWords(transliteration: string): string[] {
  return transliteration
    .split(/[\s|]+/)
    .map((w) => w.replace(/[,;।॥]/g, "").trim())
    .filter((w) => w.length > 0);
}

// ── WordByWordSection ─────────────────────────────────────────────────────────

interface WordByWordSectionProps {
  sanskritText: string;
  transliteration: string;
  onWordClick: (word: string, intel: WordIntelligence, rect: DOMRect) => void;
}

function WordByWordSection({
  sanskritText,
  transliteration,
  onWordClick,
}: WordByWordSectionProps) {
  const iastWords = splitToWords(transliteration);
  const devanagariWords = sanskritText
    .split(/[\s|।॥]+/)
    .filter((w) => w.trim().length > 0);

  return (
    <div>
      {/* Legend */}
      <div className="flex items-center gap-4 mb-3">
        <span className="flex items-center gap-1.5 font-body text-xs italic text-muted-foreground/55">
          <span
            className="inline-block w-2.5 h-2.5 rounded-sm border"
            style={{
              background: "oklch(0.72 0.28 52 / 0.1)",
              borderColor: "oklch(0.72 0.28 52 / 0.4)",
            }}
          />
          Spiritually significant
        </span>
        <span className="font-body text-xs italic text-muted-foreground/40">
          ✦ tap = deep meaning
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {iastWords.map((word, idx) => {
          const devanagari = devanagariWords[idx] ?? word;
          const grammar = getGrammarLabel(word);
          const emotional = isEmotionalWord(word);
          const intel = findWordIntelligence(word);

          return (
            <button
              type="button"
              key={`wbw-${word}-${word.length}-${devanagari}`}
              className="group flex flex-col items-center gap-0.5 px-2.5 py-2 rounded-sm transition-smooth"
              style={{
                background: emotional
                  ? "oklch(0.72 0.28 52 / 0.09)"
                  : "oklch(0.88 0.07 66 / 0.5)",
                border: emotional
                  ? "1px solid oklch(0.72 0.28 52 / 0.35)"
                  : "1px solid oklch(0.78 0.08 56 / 0.4)",
                minWidth: 52,
                cursor: intel ? "pointer" : "default",
              }}
              onClick={(e) => {
                if (intel) {
                  const rect = (
                    e.currentTarget as HTMLElement
                  ).getBoundingClientRect();
                  onWordClick(word, intel, rect);
                }
              }}
              aria-label={
                intel ? `${devanagari} — tap for word intelligence` : devanagari
              }
              data-ocid={`verse-word.item.${idx + 1}`}
            >
              {/* Devanagari */}
              <span
                className="font-body leading-none"
                lang="sa"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: emotional
                    ? "oklch(0.55 0.22 28)"
                    : "oklch(0.68 0.26 52)",
                }}
              >
                {devanagari}
              </span>
              {/* IAST */}
              <span
                className="font-body italic leading-none"
                style={{ fontSize: "0.67rem", color: "oklch(0.50 0.12 46)" }}
              >
                {word}
              </span>
              {/* Grammar */}
              <span
                className="font-body leading-none tracking-wide"
                style={{
                  fontSize: "0.52rem",
                  color: "oklch(0.60 0.08 50)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {grammar}
              </span>
              {/* Meaning hint */}
              {intel && (
                <span
                  className="font-body italic leading-none"
                  style={{
                    fontSize: "0.6rem",
                    color: "oklch(0.28 0.06 40)",
                    maxWidth: 80,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {intel.meaning.split(";")[0].split(",")[0].trim()}
                </span>
              )}
              {intel && (
                <span
                  className="text-accent/40 group-hover:text-accent/75 transition-smooth"
                  style={{ fontSize: "0.5rem" }}
                >
                  ✦
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Verse Page ───────────────────────────────────────────────────────────

export function VersePage() {
  const { chapterId, verseId } = useParams({
    from: "/verse/$chapterId/$verseId",
  });
  const navigate = useNavigate();
  const { data: verse, isLoading } = useVerse(Number(chapterId), verseId);
  const { data: chapters } = useChapters();
  const { setPosition } = useLastRead();
  const { addPoints } = usePoints();
  const { language, setLanguage } = useLanguage();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const { speak, stop, isSpeaking, isSupported } = useTTS();

  const [wordRowOpen, setWordRowOpen] = useState(false);
  const [wordPopup, setWordPopup] = useState<{
    word: string;
    intel: WordIntelligence;
    rect: DOMRect;
  } | null>(null);

  const chapter = chapters?.find((c) => c.id === Number(chapterId));
  const { prevVerse, nextVerse } = useAdjacentVerses(
    Number(chapterId),
    verseId,
  );
  const bookmarked = verse
    ? isBookmarked(verse.chapterId, verse.verseNumber)
    : false;
  const krishnaMessage = KRISHNA_MESSAGES[verseId];

  const pointsAwarded = useRef(false);
  useEffect(() => {
    if (verse) {
      setPosition({ chapterId: verse.chapterId, verseId: verse.id });
      if (!pointsAwarded.current) {
        addPoints("reading", 5);
        pointsAwarded.current = true;
      }
    }
  }, [verse, setPosition, addPoints]);

  const displayTranslation =
    language === "hindi" && verse?.hindiTranslation
      ? verse.hindiTranslation
      : (verse?.englishTranslation ?? "");

  async function handleShare() {
    if (!verse) return;
    const text = `${verse.sanskritText}\n\n${verse.englishTranslation}\n\n— Bhagavad Gita ${verse.chapterId}.${verse.verseNumber} ✨`;
    try {
      if (navigator.share) {
        await navigator.share({
          text,
          title: `Gita ${verse.chapterId}.${verse.verseNumber}`,
        });
      } else {
        await navigator.clipboard.writeText(text);
        toast.success("Verse copied to clipboard ✨");
      }
    } catch {
      /* user cancelled */
    }
  }

  function handleBookmark() {
    if (!verse) return;
    if (bookmarked) {
      removeBookmark(verse.chapterId, verse.verseNumber);
      toast.info("Bookmark removed");
    } else {
      addBookmark(verse.chapterId, verse.verseNumber);
      toast.success("Verse bookmarked 🌸");
    }
  }

  function handleTTS() {
    if (!verse) return;
    if (isSpeaking) {
      stop();
    } else {
      const text = `${verse.sanskritText}. ${verse.englishTranslation}`;
      speak(text, "hi", "male");
      addPoints("listening", 2);
    }
  }

  function handleNextPage() {
    if (nextVerse) {
      void navigate({
        to: "/verse/$chapterId/$verseId",
        params: { chapterId, verseId: nextVerse.id },
      });
    } else if (Number(chapterId) < 18) {
      void navigate({
        to: "/chapter/$id",
        params: { id: String(Number(chapterId) + 1) },
      });
    }
  }

  function handlePrevPage() {
    if (prevVerse) {
      void navigate({
        to: "/verse/$chapterId/$verseId",
        params: { chapterId, verseId: prevVerse.id },
      });
    } else if (chapterId !== "1") {
      void navigate({
        to: "/chapter/$id",
        params: { id: String(Number(chapterId) - 1) },
      });
    }
  }

  const canGoNext = !!nextVerse || Number(chapterId) < 18;
  const canGoPrev = !!prevVerse || chapterId !== "1";

  const languages: Language[] = [
    "english",
    "hindi",
    "sanskrit",
    "marathi",
    "gujarati",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* ── Breadcrumb ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 font-body text-xs italic text-muted-foreground/70 mb-8 flex-wrap"
      >
        <Link to="/" className="hover:text-accent transition-smooth">
          Home
        </Link>
        <span className="text-muted-foreground/40">·</span>
        <Link
          to="/chapter/$id"
          params={{ id: chapterId }}
          className="hover:text-accent transition-smooth"
        >
          {chapter ? chapter.name : `Chapter ${chapterId}`}
        </Link>
        {verse && (
          <>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-accent/80">Verse {verse.verseNumber}</span>
          </>
        )}
      </motion.div>

      {isLoading ? (
        <div className="space-y-6">
          <Skeleton className="h-8 w-48 rounded-none" />
          <Skeleton className="h-72 w-full rounded-none" />
          <Skeleton className="h-28 w-full rounded-none" />
        </div>
      ) : verse ? (
        <>
          {/* ── Top annotation bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center justify-between mb-7 flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 font-body text-xs italic text-muted-foreground/70">
              <span>Read in:</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none bg-transparent font-body text-xs italic text-accent cursor-pointer focus:outline-none border-b border-accent/30 pb-0.5"
                aria-label="Select translation language"
                data-ocid="verse-language-picker"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {LANGUAGE_LABELS[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              {isSupported && (
                <button
                  type="button"
                  onClick={handleTTS}
                  aria-label={
                    isSpeaking ? "Stop recitation" : "Listen to verse"
                  }
                  className={[
                    "w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
                    isSpeaking
                      ? "text-accent bg-accent/15 border border-accent/40"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25",
                  ].join(" ")}
                  data-ocid="verse-tts-btn"
                >
                  {isSpeaking ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              )}
              <button
                type="button"
                onClick={handleBookmark}
                aria-label={bookmarked ? "Remove bookmark" : "Bookmark verse"}
                className={[
                  "w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
                  bookmarked
                    ? "text-accent bg-accent/15 border border-accent/40"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25",
                ].join(" ")}
                data-ocid="bookmark-verse"
              >
                {bookmarked ? (
                  <BookmarkCheck className="w-4 h-4" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  void handleShare();
                }}
                aria-label="Share verse"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25 transition-smooth"
                data-ocid="share-verse"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* ── Main verse — wrapped in PageCurl ── */}
          <PageCurl
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            canGoNext={canGoNext}
            canGoPrev={canGoPrev}
          >
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="manuscript-page rounded-sm px-8 md:px-14 py-12 mb-8 relative"
              aria-label={`Verse ${verse.chapterId}.${verse.verseNumber}`}
            >
              {/* Corner aging */}
              <div
                className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-20"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse at 0 0, oklch(0.18 0.02 48 / 0.35) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse at 100% 0, oklch(0.18 0.02 48 / 0.35) 0%, transparent 70%)",
                }}
              />

              {/* Drag hint — appears briefly on mount */}
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none"
                aria-hidden
                style={{ opacity: 0.3 }}
              >
                <span className="font-body text-xs italic text-accent/60 tracking-wider">
                  ‹ swipe to turn page ›
                </span>
              </div>

              {/* Chapter & Verse header */}
              <div className="text-center mb-8">
                <p className="font-body text-xs text-muted-foreground/60 italic tracking-widest uppercase mb-2">
                  {chapter?.name ?? `Chapter ${chapterId}`} ·{" "}
                  {chapter?.sanskritName ?? ""}
                </p>
                <div className="om-symbol mb-3" aria-hidden>
                  ॐ
                </div>
                <p className="font-body text-xs italic text-accent/70 tracking-[0.2em] uppercase">
                  Verse &nbsp;{verse.chapterId}.{verse.verseNumber} ·{" "}
                  {ROMAN[verse.chapterId]}
                </p>
              </div>

              {/* Sanskrit */}
              <div className="mb-8">
                <p
                  className="text-center font-body text-foreground whitespace-pre-line"
                  lang="sa"
                  style={{
                    fontSize: "1.75rem",
                    lineHeight: 2.1,
                    letterSpacing: "0.05em",
                    fontWeight: 500,
                  }}
                >
                  {verse.sanskritText}
                </p>
              </div>

              {/* Verse ornament */}
              <p
                className="text-center text-accent/45 text-2xl mb-7 select-none"
                aria-label={`Verse ${verse.verseNumber}`}
              >
                ॥ {verse.verseNumber} ॥
              </p>

              {/* Transliteration */}
              {verse.transliteration && (
                <div className="mb-8 px-2">
                  <p
                    className="text-center font-body italic text-accent/65 leading-relaxed whitespace-pre-line"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {verse.transliteration}
                  </p>
                </div>
              )}

              {/* Sacred divider */}
              <div className="divider-ornate my-8" aria-hidden>
                <span className="text-accent/45 text-xl select-none">❦</span>
              </div>

              {/* Translation */}
              <div>
                <p className="text-xs font-body text-muted-foreground/55 italic text-center uppercase tracking-[0.2em] mb-5">
                  {LANGUAGE_LABELS[language]}
                </p>
                <p
                  className="font-body text-foreground leading-loose text-center"
                  style={{ fontSize: "1.12rem", fontStyle: "italic" }}
                >
                  {displayTranslation}
                </p>
              </div>
            </motion.article>
          </PageCurl>

          {/* ── Word-by-Word Sanskrit Section ── */}
          {verse.transliteration && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="manuscript-page rounded-sm px-8 md:px-12 py-6 mb-6"
            >
              <button
                type="button"
                onClick={() => setWordRowOpen((p) => !p)}
                className="flex items-center gap-2 w-full font-body text-sm italic text-muted-foreground/70 hover:text-accent/90 transition-smooth group"
                aria-expanded={wordRowOpen}
                data-ocid="verse-word-by-word.toggle"
              >
                <BookOpen className="w-4 h-4 text-accent/50 group-hover:text-accent transition-smooth flex-shrink-0" />
                <span className="flex-1 text-left">
                  Word-by-Word Sanskrit Reading
                </span>
                <span
                  aria-hidden
                  className="text-accent/50 transition-smooth"
                  style={{
                    transform: wordRowOpen ? "rotate(180deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  ↓
                </span>
              </button>

              <AnimatePresence>
                {wordRowOpen && (
                  <motion.div
                    key="word-row"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="mt-5 pt-4"
                      style={{
                        borderTop: "1px solid oklch(var(--accent) / 0.18)",
                      }}
                    >
                      <WordByWordSection
                        sanskritText={verse.sanskritText}
                        transliteration={verse.transliteration}
                        onWordClick={(word, intel, rect) =>
                          setWordPopup({ word, intel, rect })
                        }
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── Commentary ── */}
          {verse.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="manuscript-page rounded-sm px-8 md:px-12 py-8 mb-6"
            >
              <p className="font-body text-xs italic text-muted-foreground/60 tracking-widest uppercase mb-5 text-center">
                — Commentary —
              </p>
              <p
                className="font-body text-muted-foreground leading-loose pl-6 border-l-2"
                style={{
                  borderColor: "oklch(var(--accent) / 0.3)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                }}
              >
                {verse.explanation}
              </p>
            </motion.div>
          )}

          {/* ── Krishna Speaks ── */}
          {krishnaMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--sacred) / 0.07) 0%, oklch(var(--accent) / 0.04) 100%)",
                border: "1px solid oklch(var(--sacred) / 0.18)",
                borderRadius: "0.25rem",
                padding: "1.75rem 2rem",
              }}
            >
              <p className="font-body text-xs italic text-muted-foreground/60 tracking-widest uppercase mb-4 text-center">
                🦚 &nbsp; Krishna Speaks &nbsp; 🦚
              </p>
              <p
                className="font-body text-foreground/90 leading-relaxed text-center"
                style={{ fontSize: "1rem", fontStyle: "italic" }}
              >
                "{krishnaMessage}"
              </p>
            </motion.div>
          )}

          {/* ── Chapter context ── */}
          {chapter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="manuscript-page rounded-sm px-8 py-6 mb-10"
            >
              <p className="font-body text-xs italic text-muted-foreground/55 tracking-widest uppercase mb-3 text-center">
                — Chapter Context —
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                <span className="font-display font-semibold text-foreground not-italic">
                  {chapter.name} ({chapter.sanskritName})
                </span>
                {" — "}
                {chapter.summary}
              </p>
            </motion.div>
          )}

          {/* ── Page navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="border-t pt-8 mb-2"
            style={{ borderColor: "oklch(var(--accent) / 0.2)" }}
          >
            <div className="flex items-center justify-between gap-4">
              {prevVerse ? (
                <button
                  type="button"
                  className="font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 text-left"
                  onClick={() =>
                    void navigate({
                      to: "/verse/$chapterId/$verseId",
                      params: { chapterId, verseId: prevVerse.id },
                    })
                  }
                  data-ocid="prev-verse"
                >
                  ← {chapterId}.{prevVerse.verseNumber}
                </button>
              ) : chapterId !== "1" ? (
                <Link
                  to="/chapter/$id"
                  params={{ id: String(Number(chapterId) - 1) }}
                  className="font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5"
                  data-ocid="prev-chapter-from-verse"
                >
                  ← Chapter {Number(chapterId) - 1}
                </Link>
              ) : (
                <div />
              )}

              <span className="text-xs font-body italic text-muted-foreground/40 text-center select-none">
                {verse.chapterId}.{verse.verseNumber}
              </span>

              {nextVerse ? (
                <button
                  type="button"
                  className="font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 text-right"
                  onClick={() =>
                    void navigate({
                      to: "/verse/$chapterId/$verseId",
                      params: { chapterId, verseId: nextVerse.id },
                    })
                  }
                  data-ocid="next-verse"
                >
                  {chapterId}.{nextVerse.verseNumber} →
                </button>
              ) : Number(chapterId) < 18 ? (
                <Link
                  to="/chapter/$id"
                  params={{ id: String(Number(chapterId) + 1) }}
                  className="font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 text-right"
                  data-ocid="next-chapter-from-verse"
                >
                  Chapter {Number(chapterId) + 1} →
                </Link>
              ) : (
                <div />
              )}
            </div>
          </motion.div>

          {/* Return to chapter */}
          <div className="text-center py-5">
            <Link
              to="/chapter/$id"
              params={{ id: chapterId }}
              className="font-body text-xs italic text-muted-foreground/60 hover:text-accent transition-smooth border-b border-transparent hover:border-accent/30 pb-0.5"
            >
              ← Return to {chapter ? chapter.name : `Chapter ${chapterId}`}
            </Link>
          </div>

          <div className="h-8" />
        </>
      ) : (
        <div
          className="manuscript-page rounded-sm px-8 py-20 text-center"
          data-ocid="verse-not-found"
        >
          <p className="om-symbol mb-4" aria-hidden>
            ॐ
          </p>
          <p className="font-display text-lg italic text-muted-foreground mb-2">
            Verse not found
          </p>
          <p className="font-body text-sm italic text-muted-foreground/70 mb-6">
            Navigate from the chapter page to explore verses
          </p>
          <Link
            to="/"
            className="font-body text-sm italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5"
          >
            Return to the sacred text →
          </Link>
        </div>
      )}

      {/* ── Word Intelligence Popup (global layer) ── */}
      <AnimatePresence>
        {wordPopup && (
          <motion.div
            key="word-popup"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              pointerEvents: "none",
            }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <WordIntelligencePopup
                word={wordPopup.word}
                intelligence={wordPopup.intel}
                relatedVerses={[]}
                anchorRect={wordPopup.rect}
                onClose={() => setWordPopup(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
