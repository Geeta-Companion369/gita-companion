import { WordIntelligencePopup } from "@/components/WordIntelligencePopup";
import { Skeleton } from "@/components/ui/skeleton";
import type { GitaVerse } from "@/data/gita-verses-ch1";
import { WORD_INTELLIGENCE } from "@/data/word-intelligence";
import { useChapters } from "@/hooks/use-chapters";
import { LANGUAGE_LABELS, useLanguage } from "@/hooks/use-language";
import { useLastRead } from "@/hooks/use-last-read";
import { useVersesByChapter } from "@/hooks/use-verse";
import type { Language, WordIntelligence } from "@/types/gita";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { BookOpen, Languages } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Roman numerals helper
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

// ── Grammar label helpers ─────────────────────────────────────────────────────

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
  sadhana: "noun",
  sattva: "noun",
  rajas: "noun",
  tamas: "noun",
  ahimsa: "noun",
  manas: "noun",
  buddhi: "noun",
  ahamkara: "noun",
  prana: "noun",
  mantra: "noun",
  tapas: "noun",
  seva: "noun",
  sankalpa: "noun",
  vairagya: "noun",
  sukha: "adj",
  duhkha: "adj",
  nitya: "adj",
  anitya: "adj",
  shanti: "noun",
};

function getGrammarLabel(word: string): string {
  const lower = word.toLowerCase().replace(/[āīūṛṝḷṃḥṭḍṇśṣ]/g, (c) => c);
  for (const [key, label] of Object.entries(GRAMMAR_LABELS)) {
    if (lower.includes(key)) return label;
  }
  // Guess from length and ending
  if (word.endsWith("ti") || word.endsWith("tu")) return "verb";
  if (word.endsWith("ḥ") || word.endsWith("m")) return "noun";
  if (word.length <= 3) return "particle";
  return "word";
}

// ── Mood highlight check ──────────────────────────────────────────────────────

const EMOTIONAL_KEYWORDS = [
  "karma",
  "dharma",
  "yoga",
  "brahman",
  "ātman",
  "atman",
  "moksha",
  "bhakti",
  "śānti",
  "shanti",
  "jñāna",
  "jnana",
  "satya",
  "ahiṃsā",
  "ahimsa",
];

function isEmotionalWord(word: string): boolean {
  const lower = word.toLowerCase();
  return EMOTIONAL_KEYWORDS.some((kw) => lower.includes(kw));
}

// ── Split Sanskrit verse into words ──────────────────────────────────────────

function splitSanskritWords(transliteration: string): string[] {
  // Split on spaces and pipe separators, filter empties
  return transliteration
    .split(/[\s|]+/)
    .map((w) => w.replace(/[,;।॥]/g, "").trim())
    .filter((w) => w.length > 0);
}

// ── Find word intelligence by IAST match ─────────────────────────────────────

function findWordIntelligence(iast: string): WordIntelligence | null {
  const lower = iast.toLowerCase().replace(/[āīūṛṝḷṃḥṭḍṇśṣ]/g, (c) => c);
  for (const [key, entry] of Object.entries(WORD_INTELLIGENCE)) {
    if (lower.includes(key) || key.includes(lower.slice(0, 4))) {
      return entry;
    }
  }
  return null;
}

// ── Word-by-Word Row Component ────────────────────────────────────────────────

interface WordRowProps {
  verse: {
    id: string;
    transliteration: string;
    sanskritText: string;
    moodTags?: string[];
  };
  onWordClick: (word: string, intel: WordIntelligence, rect: DOMRect) => void;
}

function WordByWordRow({ verse, onWordClick }: WordRowProps) {
  const words = splitSanskritWords(verse.transliteration);
  // Split Sanskrit devanagari on spaces similarly
  const devanagariWords = verse.sanskritText
    .split(/[\s|।॥]+/)
    .filter((w) => w.trim().length > 0);

  return (
    <div className="flex flex-wrap gap-3 pt-3 pb-1">
      {words.map((word, idx) => {
        const devanagari = devanagariWords[idx] ?? word;
        const grammarLabel = getGrammarLabel(word);
        const emotional = isEmotionalWord(word);
        const intel = findWordIntelligence(word);

        return (
          <button
            type="button"
            key={`${verse.id}-w-${idx}`}
            className="group flex flex-col items-center gap-0.5 px-2.5 py-2 rounded-sm transition-smooth cursor-pointer text-center"
            style={{
              background: emotional
                ? "oklch(0.72 0.28 52 / 0.08)"
                : "oklch(0.88 0.07 66 / 0.5)",
              border: emotional
                ? "1px solid oklch(0.72 0.28 52 / 0.35)"
                : "1px solid oklch(0.78 0.08 56 / 0.4)",
              minWidth: 52,
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
            data-ocid={`word-row.item.${idx + 1}`}
          >
            {/* Devanagari */}
            <span
              className="font-body leading-none"
              lang="sa"
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: emotional
                  ? "oklch(0.58 0.22 28)"
                  : "oklch(0.72 0.28 52)",
              }}
            >
              {devanagari}
            </span>
            {/* IAST */}
            <span
              className="font-body italic leading-none"
              style={{ fontSize: "0.65rem", color: "oklch(0.52 0.12 46)" }}
            >
              {word}
            </span>
            {/* Grammar label */}
            <span
              className="font-body uppercase leading-none tracking-wide"
              style={{
                fontSize: "0.52rem",
                color: "oklch(0.62 0.08 50)",
                letterSpacing: "0.08em",
              }}
            >
              {grammarLabel}
            </span>
            {/* Meaning hint if known */}
            {intel && (
              <span
                className="font-body italic leading-none"
                style={{
                  fontSize: "0.6rem",
                  color: "oklch(0.30 0.06 40)",
                  maxWidth: 80,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {intel.meaning.split(";")[0].split(",")[0].trim()}
              </span>
            )}
            {/* Tap indicator for intel words */}
            {intel && (
              <span
                className="text-accent/40 group-hover:text-accent/70 transition-smooth"
                style={{ fontSize: "0.5rem" }}
              >
                ✦
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── CHAPTER INDEX (18 Adhyayas selector) ─────────────────────────────────────

const CHAPTER_THEMES = [
  "Arjuna's grief and confusion on the battlefield",
  "Krishna's teaching on the eternal soul and duty",
  "The path of selfless action (Karma Yoga)",
  "The path of divine knowledge (Jnana Yoga)",
  "Renunciation of action in knowledge",
  "The path of meditation (Dhyana Yoga)",
  "Knowledge of the Absolute",
  "Attaining the Supreme",
  "The most confidential knowledge",
  "The opulences of the Absolute",
  "The universal form of Krishna",
  "Devotional service (Bhakti Yoga)",
  "Nature, the enjoyer, and consciousness",
  "The three modes of material nature",
  "The Supreme Person (Purushottama Yoga)",
  "The divine and demoniac natures",
  "The divisions of faith",
  "Conclusion — the perfection of renunciation",
];

const CHAPTER_VERSE_COUNTS = [
  47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
];

interface ChapterIndexProps {
  chapters:
    | Array<{
        id: number;
        name: string;
        sanskritName?: string;
        summary?: string;
      }>
    | undefined;
  currentChapterId: number;
  isLoading: boolean;
  lastRead: { chapterId: number; verseId: string } | null;
}

function ChapterIndex({
  chapters,
  currentChapterId,
  isLoading,
  lastRead,
}: ChapterIndexProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8">
      {/* Index toggle header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        data-ocid="chapter-index.toggle"
        className="w-full flex items-center justify-between px-5 py-4 rounded-sm mb-1 transition-smooth group"
        style={{
          background: "oklch(0.92 0.06 56 / 0.45)",
          border: "1px solid oklch(var(--accent)/0.25)",
        }}
        aria-expanded={open}
        aria-controls="chapter-index-panel"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-display text-sm italic text-accent font-bold">
            📖 18 Adhyāyas
          </span>
          <span className="font-body text-xs italic text-muted-foreground hidden sm:block">
            Select any chapter
          </span>
          {lastRead && !open && (
            <Link
              to="/verse/$chapterId/$verseId"
              params={{
                chapterId: String(lastRead.chapterId),
                verseId: lastRead.verseId,
              }}
              className="font-body text-xs italic text-accent/70 hover:text-accent underline-offset-2 underline transition-smooth ml-2"
              onClick={(e) => e.stopPropagation()}
              data-ocid="chapter-index.continue-reading"
            >
              ← Resume Ch. {lastRead.chapterId}
            </Link>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-body text-xs italic text-muted-foreground/60">
            Chapter {currentChapterId} / 18
          </span>
          <span
            className="font-body text-sm text-accent/60 group-hover:text-accent transition-smooth"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              display: "inline-block",
              transition: "transform 0.25s",
            }}
            aria-hidden
          >
            ↓
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="chapter-index-panel"
            key="chapter-index"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="rounded-sm px-4 py-5"
              style={{
                background: "oklch(0.92 0.06 56 / 0.35)",
                border: "1px solid oklch(var(--accent)/0.18)",
              }}
              data-ocid="chapter-index.panel"
            >
              <p className="font-body text-xs italic text-center text-muted-foreground tracking-widest uppercase mb-5">
                ✦ Select an Adhyāya to begin reading ✦
              </p>

              {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Array.from({ length: 18 }, (_, i) => `chi-${i}`).map((k) => (
                    <div
                      key={k}
                      className="h-20 bg-muted/30 rounded animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                  data-ocid="chapter-index.grid"
                >
                  {(chapters ?? []).map((ch, i) => {
                    const isCurrent = ch.id === currentChapterId;
                    const verseCount = CHAPTER_VERSE_COUNTS[i] ?? 0;
                    const theme = CHAPTER_THEMES[i] ?? "";
                    return (
                      <motion.div
                        key={ch.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.3 }}
                      >
                        <Link
                          to="/chapter/$id"
                          params={{ id: String(ch.id) }}
                          onClick={() => setOpen(false)}
                          data-ocid={`chapter-index.item.${ch.id}`}
                          className="group flex flex-col p-3 rounded-sm transition-smooth hover:shadow-warm-glow"
                          style={{
                            background: isCurrent
                              ? "oklch(var(--accent)/0.12)"
                              : "oklch(0.92 0.06 56 / 0.4)",
                            border: isCurrent
                              ? "1.5px solid oklch(var(--accent)/0.55)"
                              : "1px solid oklch(var(--accent)/0.15)",
                          }}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {/* Chapter number + roman */}
                          <div className="flex items-baseline gap-2 mb-1">
                            <span
                              className="font-display text-xs italic font-bold"
                              style={{
                                color: isCurrent
                                  ? "oklch(var(--accent))"
                                  : "oklch(var(--accent)/0.65)",
                              }}
                            >
                              {ROMAN[ch.id]}
                            </span>
                            <span className="font-display text-[10px] text-muted-foreground/60 italic">
                              Ch. {ch.id}
                            </span>
                          </div>
                          {/* Sanskrit name */}
                          <p
                            className="font-body text-[11px] italic font-semibold mb-0.5 group-hover:text-accent transition-smooth leading-tight"
                            style={{
                              color: isCurrent
                                ? "oklch(var(--foreground))"
                                : "oklch(var(--foreground)/0.85)",
                            }}
                          >
                            {ch.sanskritName ?? ch.name}
                          </p>
                          {/* English name */}
                          <p className="font-body text-[10px] text-muted-foreground leading-tight mb-1">
                            {ch.name}
                          </p>
                          {/* Theme + verse count */}
                          <p className="font-body text-[9px] italic text-muted-foreground/55 leading-tight line-clamp-2 mb-1">
                            {theme}
                          </p>
                          <p className="font-body text-[9px] text-accent/60">
                            {verseCount} verses
                          </p>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ChapterPage() {
  const { id } = useParams({ from: "/chapter/$id" });
  const navigate = useNavigate();
  const chapterId = Number(id);
  const { data: chapters } = useChapters();
  const { data: verses, isLoading } = useVersesByChapter(chapterId);
  const { language, setLanguage } = useLanguage();
  const { lastRead } = useLastRead();

  const [jumpValue, setJumpValue] = useState("");
  const [jumpError, setJumpError] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [expandedWords, setExpandedWords] = useState<Record<string, boolean>>(
    {},
  );

  // Word intelligence popup state
  const [wordPopup, setWordPopup] = useState<{
    word: string;
    intel: WordIntelligence;
    rect: DOMRect;
  } | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const verseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const chapter = chapters?.find((c) => c.id === chapterId);

  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      setStickyVisible(headerRef.current.getBoundingClientRect().bottom < 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleJump(e: React.FormEvent) {
    e.preventDefault();
    const num = Number(jumpValue.trim());
    if (!num || !verses) {
      setJumpError(true);
      return;
    }
    const target = verses.find((v) => v.verseNumber === num);
    if (!target) {
      setJumpError(true);
      return;
    }
    setJumpError(false);
    const el = verseRefs.current[target.id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      void navigate({
        to: "/verse/$chapterId/$verseId",
        params: { chapterId: id, verseId: target.id },
      });
    }
    setJumpValue("");
  }

  function toggleWordRow(verseId: string) {
    setExpandedWords((prev) => ({ ...prev, [verseId]: !prev[verseId] }));
  }

  function handleWordClick(
    word: string,
    intel: WordIntelligence,
    rect: DOMRect,
  ) {
    setWordPopup({ word, intel, rect });
  }

  // Convert Verse type to minimal GitaVerse shape needed by WordByWordRow
  function verseToRowShape(v: {
    id: string;
    transliteration: string;
    sanskritText: string;
  }): {
    id: string;
    transliteration: string;
    sanskritText: string;
    moodTags: string[];
  } {
    return {
      id: v.id,
      transliteration: v.transliteration,
      sanskritText: v.sanskritText,
      moodTags: [],
    };
  }

  const languages: Language[] = [
    "english",
    "hindi",
    "sanskrit",
    "marathi",
    "gujarati",
  ];

  return (
    <div className="max-w-3xl mx-auto relative">
      {/* ── Sticky mini-header ── */}
      <AnimatePresence>
        {stickyVisible && chapter && (
          <motion.div
            key="sticky-header"
            initial={{ y: -56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -56, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 shadow-sacred px-5 py-2.5 flex items-center justify-between gap-4"
            style={{
              background: "oklch(0.91 0.08 57 / 0.97)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-display text-sm italic text-accent/70 flex-shrink-0">
                {ROMAN[chapterId]}
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-foreground italic truncate leading-tight">
                  {chapter.name}
                </p>
                <p className="text-xs font-body italic text-accent/70 truncate leading-tight">
                  {chapter.sanskritName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {chapterId > 1 && (
                <Link
                  to="/chapter/$id"
                  params={{ id: String(chapterId - 1) }}
                  className="font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth"
                  aria-label="Previous chapter"
                >
                  ← Ch. {chapterId - 1}
                </Link>
              )}
              {chapterId < 18 && (
                <Link
                  to="/chapter/$id"
                  params={{ id: String(chapterId + 1) }}
                  className="font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth"
                  aria-label="Next chapter"
                >
                  Ch. {chapterId + 1} →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Back nav ── */}
      <Link
        to="/"
        className="inline-block font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 mb-6"
      >
        ← Return to Home
      </Link>

      {/* ── 18 Adhyayas Index ── */}
      <ChapterIndex
        chapters={chapters}
        currentChapterId={chapterId}
        isLoading={!chapters}
        lastRead={lastRead}
      />

      {/* ── Chapter header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="manuscript-page rounded-sm px-8 md:px-14 py-12 mb-8 relative text-center"
      >
        <div
          className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-25"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 0 0, oklch(0.18 0.02 48 / 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-25"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 100% 100%, oklch(0.18 0.02 48 / 0.3) 0%, transparent 70%)",
          }}
        />

        <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.35em] mb-3">
          Adhyāya · Chapter
        </p>
        <p
          className="font-display text-primary/20 font-bold leading-none select-none mb-2"
          style={{ fontSize: "7rem", fontStyle: "italic" }}
          aria-hidden
        >
          {ROMAN[chapterId]}
        </p>
        <p className="font-body text-xl italic text-accent mb-2 leading-snug">
          {chapter?.sanskritName ?? ""}
        </p>
        <h1 className="chapter-header mb-0" style={{ marginBottom: 0 }}>
          {chapter?.name ?? `Chapter ${chapterId}`}
        </h1>
        <div className="divider-ornate mt-6 mb-6">
          <span className="font-body text-accent/50 text-xl select-none">
            ✦ ✦ ✦
          </span>
        </div>
        {chapter?.summary && (
          <p
            className="font-body text-muted-foreground leading-loose text-[1.05rem] max-w-xl mx-auto text-left"
            style={{ textAlign: "justify" }}
          >
            <span className="ornate-initial">{chapter.summary[0]}</span>
            {chapter.summary.slice(1)}
          </p>
        )}
        {verses && (
          <p className="font-body text-xs italic text-muted-foreground/60 mt-5 tracking-widest">
            — Contains {verses.length} sacred verses
          </p>
        )}
      </motion.div>

      {/* ── Controls row ── */}
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <div className="flex items-center gap-2 font-body text-xs italic text-muted-foreground">
          <Languages className="w-3.5 h-3.5 text-accent/60 flex-shrink-0" />
          <span className="text-muted-foreground/70">Translation:</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="appearance-none bg-transparent font-body text-xs italic text-accent cursor-pointer focus:outline-none border-b border-accent/30 pb-0.5"
            aria-label="Select language"
            data-ocid="language-picker"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {LANGUAGE_LABELS[lang]}
              </option>
            ))}
          </select>
        </div>

        <form onSubmit={handleJump} className="flex items-center gap-2">
          <span className="font-body text-xs italic text-muted-foreground/70">
            See verse:
          </span>
          <input
            type="number"
            min={1}
            value={jumpValue}
            onChange={(e) => {
              setJumpValue(e.target.value);
              setJumpError(false);
            }}
            placeholder="no."
            className={[
              "w-14 bg-transparent font-body text-xs italic text-foreground border-b pb-0.5 focus:outline-none transition-smooth",
              jumpError
                ? "border-destructive text-destructive"
                : "border-accent/30 focus:border-accent/70",
            ].join(" ")}
            aria-label="Jump to verse number"
            data-ocid="verse-jump-input"
          />
          <button
            type="submit"
            className="font-body text-xs italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5"
            data-ocid="verse-jump-btn"
          >
            Go →
          </button>
        </form>
      </div>

      {jumpError && (
        <p className="text-xs font-body italic text-destructive -mt-5 mb-5">
          That verse is not found in this chapter.
        </p>
      )}

      {/* ── Verses ── */}
      <section>
        {isLoading ? (
          <div className="space-y-8">
            {Array.from({ length: 4 }, (_, i) => `skel-v-${i}`).map((skid) => (
              <Skeleton key={skid} className="h-64 rounded-none" />
            ))}
          </div>
        ) : verses && verses.length > 0 ? (
          <div className="manuscript-page rounded-sm px-6 md:px-10 py-10 space-y-0">
            {verses.map((verse, i) => {
              const wordRowOpen = expandedWords[verse.id] ?? false;
              return (
                <motion.div
                  key={verse.id}
                  ref={(el) => {
                    verseRefs.current[verse.id] = el;
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: Math.min(0.05 * i, 0.3), duration: 0.5 }}
                  className="relative group"
                >
                  {/* Verse block */}
                  <Link
                    to="/verse/$chapterId/$verseId"
                    params={{
                      chapterId: String(verse.chapterId),
                      verseId: verse.id,
                    }}
                    className="block py-8"
                    data-ocid={`verse-row-${verse.id}`}
                  >
                    <div className="flex gap-5 md:gap-8">
                      <div className="flex-shrink-0 w-10 text-right pt-1">
                        <span
                          className="font-display text-xs text-accent/50 group-hover:text-accent/80 transition-smooth"
                          style={{
                            fontStyle: "italic",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {verse.chapterId}.{verse.verseNumber}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p
                          className="font-body text-foreground whitespace-pre-line leading-loose mb-4"
                          lang="sa"
                          style={{
                            fontSize: "1.35rem",
                            letterSpacing: "0.04em",
                            fontWeight: 500,
                          }}
                        >
                          {verse.sanskritText}
                        </p>
                        <p
                          className="text-accent/40 text-lg mb-3 select-none"
                          aria-label={`Verse ${verse.verseNumber}`}
                        >
                          ॥ {verse.verseNumber} ॥
                        </p>
                        <p className="font-body italic text-sm text-accent/65 leading-relaxed whitespace-pre-line mb-4">
                          {verse.transliteration}
                        </p>
                        <p
                          className="font-body text-muted-foreground group-hover:text-foreground/80 transition-smooth leading-loose"
                          style={{ fontSize: "0.97rem" }}
                        >
                          {language === "hindi" && verse.hindiTranslation
                            ? verse.hindiTranslation
                            : verse.englishTranslation}
                        </p>
                        <p className="font-body text-xs italic text-muted-foreground/40 group-hover:text-accent/50 transition-smooth mt-3">
                          — Open for full commentary
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* ── Word-by-Word toggle ── */}
                  <div className="ml-[3.75rem] md:ml-[4.5rem] pb-5">
                    <button
                      type="button"
                      onClick={() => toggleWordRow(verse.id)}
                      className="flex items-center gap-1.5 font-body text-xs italic text-muted-foreground/55 hover:text-accent/80 transition-smooth"
                      aria-expanded={wordRowOpen}
                      aria-controls={`word-row-${verse.id}`}
                      data-ocid={`word-by-word.toggle.${verse.id}`}
                    >
                      <BookOpen className="w-3 h-3" aria-hidden />
                      <span>
                        {wordRowOpen ? "Hide" : "Word-by-Word"} Sanskrit
                      </span>
                      <span
                        className="transition-smooth"
                        style={{
                          transform: wordRowOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          display: "inline-block",
                        }}
                        aria-hidden
                      >
                        ↓
                      </span>
                    </button>

                    <AnimatePresence>
                      {wordRowOpen && (
                        <motion.div
                          id={`word-row-${verse.id}`}
                          key={`wr-${verse.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                          style={{ overflow: "hidden" }}
                        >
                          {/* Legend */}
                          <div className="flex items-center gap-4 mt-3 mb-1.5">
                            <span className="flex items-center gap-1 font-body text-xs italic text-muted-foreground/50">
                              <span
                                className="inline-block w-2.5 h-2.5 rounded-sm border"
                                style={{
                                  background: "oklch(0.72 0.28 52 / 0.08)",
                                  borderColor: "oklch(0.72 0.28 52 / 0.35)",
                                }}
                              />
                              Spiritually significant
                            </span>
                            <span className="font-body text-xs italic text-muted-foreground/40">
                              ✦ = tap for deep meaning
                            </span>
                          </div>

                          <WordByWordRow
                            verse={verseToRowShape(verse)}
                            onWordClick={handleWordClick}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Verse separator */}
                  {i < verses.length - 1 && (
                    <div className="flex items-center gap-4 py-1" aria-hidden>
                      <div
                        className="flex-1 h-px"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, oklch(var(--accent) / 0.20), transparent)",
                        }}
                      />
                      <span className="text-accent/30 text-sm select-none">
                        ❦
                      </span>
                      <div
                        className="flex-1 h-px"
                        style={{
                          background:
                            "linear-gradient(to left, transparent, oklch(var(--accent) / 0.20), transparent)",
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Chapter ending colophon */}
            <div className="text-center pt-8 pb-2 space-y-2">
              <p className="text-accent/40 text-2xl select-none" aria-hidden>
                ❦
              </p>
              <p className="font-body text-xs italic text-muted-foreground/50 tracking-widest">
                iti śrīmad bhagavad-gītāsu — adhyāya {ROMAN[chapterId]}
              </p>
              <p className="font-body text-xs text-muted-foreground/40 uppercase tracking-[0.2em]">
                End of Chapter {chapterId}
              </p>
            </div>
          </div>
        ) : (
          <div
            className="manuscript-page rounded-sm px-8 py-16 text-center"
            data-ocid="empty-chapter-verses"
          >
            <p className="om-symbol mb-4" aria-hidden>
              ॐ
            </p>
            <p className="font-display text-lg italic text-muted-foreground mb-2">
              More verses coming soon
            </p>
            <p className="font-body text-sm italic text-muted-foreground/70 mb-6 max-w-xs mx-auto">
              Explore other chapters or seek Krishna's guidance
            </p>
            <Link
              to="/guidance"
              className="font-body text-sm italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5"
            >
              Ask Krishna →
            </Link>
          </div>
        )}
      </section>

      {/* ── Chapter navigation ── */}
      <div className="flex justify-between items-center pt-10 pb-2">
        {chapterId > 1 ? (
          <Link
            to="/chapter/$id"
            params={{ id: String(chapterId - 1) }}
            className="font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5"
            data-ocid="prev-chapter"
          >
            ← Chapter {chapterId - 1} · {ROMAN[chapterId - 1]}
          </Link>
        ) : (
          <div />
        )}
        {chapterId < 18 && (
          <Link
            to="/chapter/$id"
            params={{ id: String(chapterId + 1) }}
            className="font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5"
            data-ocid="next-chapter"
          >
            Chapter {chapterId + 1} · {ROMAN[chapterId + 1]} →
          </Link>
        )}
      </div>

      <div className="h-10" />

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
