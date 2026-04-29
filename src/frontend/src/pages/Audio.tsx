import { useChapters } from "@/hooks/use-chapters";
import { usePoints } from "@/hooks/use-points";
import { useTTS } from "@/hooks/use-tts";
import { useVersesByChapter } from "@/hooks/use-verse";
import type { Chapter } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlaybackPosition {
  chapterId: number;
  verseIndex: number;
  verseId: string;
  timestamp: number;
}

interface RecentVerse {
  chapterId: number;
  verseNumber: number;
  chapterName: string;
  timestamp: number;
}

type SpeedOption = "slow" | "normal";
type SleepTimerOption = 0 | 30 | 60 | 90 | 120;

// ─── Storage Helpers ──────────────────────────────────────────────────────────

const RECENT_KEY = "gita-audio-recent";
const POS_KEY = "gita-audio-position";

function loadRecent(): RecentVerse[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? (JSON.parse(raw) as RecentVerse[]) : [];
  } catch {
    return [];
  }
}

function saveRecent(verses: RecentVerse[]): void {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(verses));
  } catch {
    /* ignore */
  }
}

function loadPosition(): PlaybackPosition | null {
  try {
    const raw = localStorage.getItem(POS_KEY);
    return raw ? (JSON.parse(raw) as PlaybackPosition) : null;
  } catch {
    return null;
  }
}

function savePosition(pos: PlaybackPosition): void {
  try {
    localStorage.setItem(POS_KEY, JSON.stringify(pos));
  } catch {
    /* ignore */
  }
}

// ─── Chapter verse counts ────────────────────────────────────────────────────

const CHAPTER_VERSE_COUNTS: Record<number, number> = {
  1: 47,
  2: 72,
  3: 43,
  4: 42,
  5: 29,
  6: 47,
  7: 30,
  8: 28,
  9: 34,
  10: 42,
  11: 55,
  12: 20,
  13: 34,
  14: 27,
  15: 20,
  16: 24,
  17: 28,
  18: 78,
};

const TOTAL_VERSES = Object.values(CHAPTER_VERSE_COUNTS).reduce(
  (a, b) => a + b,
  0,
);

function getOverallIndex(chapterId: number, verseIndex: number): number {
  let count = 0;
  for (let c = 1; c < chapterId; c++) {
    count += CHAPTER_VERSE_COUNTS[c] ?? 0;
  }
  return count + verseIndex + 1;
}

// ─── Chapter List Sidebar ────────────────────────────────────────────────────

function ChapterSidebar({
  chapters,
  currentChapterId,
  onSelect,
}: {
  chapters: Chapter[];
  currentChapterId: number;
  onSelect: (id: number) => void;
}) {
  return (
    <div className="max-h-[480px] overflow-y-auto">
      {chapters.map((ch) => (
        <button
          type="button"
          key={ch.id}
          onClick={() => onSelect(ch.id)}
          className="w-full text-left transition-smooth border-b border-border/30 hover:bg-accent/5"
          style={
            currentChapterId === ch.id
              ? {
                  background: "oklch(var(--accent) / 0.08)",
                  borderLeft: "3px solid oklch(var(--accent) / 0.6)",
                }
              : { borderLeft: "3px solid transparent" }
          }
          data-ocid={`audio-chapter-${ch.id}`}
        >
          <div className="flex items-center gap-3 px-4 py-2.5">
            <span
              className="font-display text-xs font-bold w-6 h-6 rounded-full border flex items-center justify-center shrink-0"
              style={{
                borderColor:
                  currentChapterId === ch.id
                    ? "oklch(var(--accent) / 0.6)"
                    : "oklch(var(--border))",
                color:
                  currentChapterId === ch.id
                    ? "oklch(var(--accent))"
                    : "oklch(var(--muted-foreground))",
              }}
            >
              {ch.id}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-body text-xs font-medium text-foreground truncate">
                {ch.name}
              </span>
              <span className="block font-body text-xs text-muted-foreground/60 italic truncate">
                {ch.sanskritName}
              </span>
            </span>
            {currentChapterId === ch.id && (
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

// ─── Audio Page ───────────────────────────────────────────────────────────────

export function AudioPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const [verseIndex, setVerseIndex] = useState(0);
  const [speed, setSpeed] = useState<SpeedOption>("slow");
  const [loopEnabled, setLoopEnabled] = useState(true);
  const [sleepTimer, setSleepTimer] = useState<SleepTimerOption>(0);
  const [sleepCountdown, setSleepCountdown] = useState(0);
  const [showChapterList, setShowChapterList] = useState(false);
  const [totalPlayed, setTotalPlayed] = useState(0);
  const [recentVerses, setRecentVerses] = useState<RecentVerse[]>(loadRecent);

  const { speak, stop, isSpeaking } = useTTS();
  const { addPoints } = usePoints();
  const { data: chapters = [] } = useChapters();
  const { data: currentVerses = [] } = useVersesByChapter(currentChapterId);

  const isPlayingRef = useRef(false);
  const chapterIdRef = useRef(currentChapterId);
  const verseIndexRef = useRef(verseIndex);
  const speedRef = useRef(speed);
  const loopRef = useRef(loopEnabled);
  const currentVersesRef = useRef(currentVerses);

  useEffect(() => {
    chapterIdRef.current = currentChapterId;
  }, [currentChapterId]);
  useEffect(() => {
    verseIndexRef.current = verseIndex;
  }, [verseIndex]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    loopRef.current = loopEnabled;
  }, [loopEnabled]);
  useEffect(() => {
    currentVersesRef.current = currentVerses;
  }, [currentVerses]);

  useEffect(() => {
    if (sleepTimer === 0) {
      setSleepCountdown(0);
      return;
    }
    const totalSeconds = sleepTimer * 60;
    setSleepCountdown(totalSeconds);
    const interval = setInterval(() => {
      setSleepCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleStopPlayback();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sleepTimer]);

  const handleStopPlayback = useCallback(() => {
    isPlayingRef.current = false;
    stop();
    setIsPlaying(false);
  }, [stop]);

  const addToRecent = useCallback(
    (chapterId: number, verseNum: number, chapterName: string) => {
      setRecentVerses((prev) => {
        const updated: RecentVerse[] = [
          {
            chapterId,
            verseNumber: verseNum,
            chapterName,
            timestamp: Date.now(),
          },
          ...prev.filter(
            (v) => !(v.chapterId === chapterId && v.verseNumber === verseNum),
          ),
        ].slice(0, 3);
        saveRecent(updated);
        return updated;
      });
    },
    [],
  );

  const advanceVerse = useCallback(() => {
    if (!isPlayingRef.current) return;
    const verses = currentVersesRef.current;
    const nextIdx = verseIndexRef.current + 1;
    if (nextIdx < verses.length) {
      setVerseIndex(nextIdx);
      verseIndexRef.current = nextIdx;
    } else {
      const nextChapter = chapterIdRef.current + 1;
      if (nextChapter <= 18) {
        setCurrentChapterId(nextChapter);
        chapterIdRef.current = nextChapter;
        setVerseIndex(0);
        verseIndexRef.current = 0;
      } else if (loopRef.current) {
        setCurrentChapterId(1);
        chapterIdRef.current = 1;
        setVerseIndex(0);
        verseIndexRef.current = 0;
      } else {
        handleStopPlayback();
      }
    }
  }, [handleStopPlayback]);

  const advanceRef = useRef(advanceVerse);
  useEffect(() => {
    advanceRef.current = advanceVerse;
  }, [advanceVerse]);

  const speakCurrentVerse = useCallback(() => {
    if (!isPlayingRef.current) return;
    const verses = currentVersesRef.current;
    const idx = verseIndexRef.current;
    if (!verses.length) return;
    const verse = verses[idx];
    if (!verse) return;
    const chName =
      chapters.find((c) => c.id === chapterIdRef.current)?.name ?? "";
    addToRecent(chapterIdRef.current, verse.verseNumber, chName);
    setTotalPlayed((p) => p + 1);
    addPoints("listening", 1);
    const pos: PlaybackPosition = {
      chapterId: chapterIdRef.current,
      verseIndex: idx,
      verseId: verse.id,
      timestamp: Date.now(),
    };
    savePosition(pos);
    const rate = speedRef.current === "slow" ? 0.7 : 0.9;
    const sanText = verse.sanskritText.replace(/\|/g, "").replace(/\n/g, " ");
    speak(`${sanText}... ${verse.englishTranslation}`, "sa", "male", rate);
  }, [speak, addPoints, chapters, addToRecent]);

  const speakCurrentRef = useRef(speakCurrentVerse);
  useEffect(() => {
    speakCurrentRef.current = speakCurrentVerse;
  }, [speakCurrentVerse]);

  useEffect(() => {
    if (!isPlaying) return;
    if (currentVerses.length === 0) return;
    speakCurrentRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentVerses]);

  useEffect(() => {
    if (!isPlaying) return;
    if (!isSpeaking && isPlayingRef.current) {
      const timer = setTimeout(() => {
        advanceRef.current();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSpeaking, isPlaying]);

  const handlePlay = () => {
    if (currentVerses.length === 0) return;
    isPlayingRef.current = true;
    setIsPlaying(true);
  };

  const handlePause = () => {
    isPlayingRef.current = false;
    stop();
    setIsPlaying(false);
  };

  const handlePrevVerse = () => {
    const newIdx = Math.max(0, verseIndex - 1);
    setVerseIndex(newIdx);
    verseIndexRef.current = newIdx;
  };

  const handleNextVerse = () => {
    advanceRef.current();
  };

  const handleSkipChapter = () => {
    const next = Math.min(18, currentChapterId + 1);
    setCurrentChapterId(next);
    chapterIdRef.current = next;
    setVerseIndex(0);
    verseIndexRef.current = 0;
  };

  const handleChapterJump = (id: number) => {
    stop();
    setCurrentChapterId(id);
    chapterIdRef.current = id;
    setVerseIndex(0);
    verseIndexRef.current = 0;
    setShowChapterList(false);
    if (isPlaying) setTimeout(() => speakCurrentRef.current(), 200);
  };

  const currentVerse = currentVerses[verseIndex];
  const currentChapter = chapters.find((c) => c.id === currentChapterId);
  const overallIndex = getOverallIndex(currentChapterId, verseIndex);
  const savedPos = loadPosition();

  const formatCountdown = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* ── MANUSCRIPT PAGE HEADER ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="manuscript-header-border mb-6" />
        <p className="text-verse-number tracking-[0.25em] mb-2">॥ श्रुति पाठ ॥</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold italic text-primary mb-1">
          24×7 Sacred Recitation
        </h1>
        <p className="font-display text-base italic text-accent mb-3">
          — all 700 verses flowing as a living river of divine wisdom
        </p>
        <div className="ornate-rule text-sm">✦ ॐ ✦</div>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-3">
          <span className="streak-badge">{TOTAL_VERSES} श्लोक · verses</span>
          {totalPlayed > 0 && (
            <span className="streak-badge">{totalPlayed} verses played</span>
          )}
          {sleepCountdown > 0 && (
            <motion.span
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="streak-badge"
            >
              ⏱ Stops in {formatCountdown(sleepCountdown)}
            </motion.span>
          )}
          {isPlaying && (
            <span
              className="streak-badge"
              style={{ color: "oklch(var(--accent))" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse mr-1" />
              Live Recitation
            </span>
          )}
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* ── MAIN PLAYER ──────────────────────────────── */}
        <div className="space-y-6">
          {/* Now Playing — manuscript verse leaf */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="manuscript-page border border-accent/20 shadow-elevated overflow-hidden"
          >
            {/* Leaf header */}
            <div
              className="px-6 py-3 border-b flex items-center justify-between"
              style={{
                borderColor: "oklch(var(--accent) / 0.25)",
                background: "oklch(var(--muted) / 0.55)",
              }}
            >
              <div>
                <p className="text-verse-number tracking-[0.2em]">
                  {currentChapter ? (
                    <>
                      {currentChapter.sanskritName} · अध्याय {currentChapterId} ·
                      श्लोक {currentVerse?.verseNumber ?? "—"}
                    </>
                  ) : (
                    "Loading..."
                  )}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-verse-number tracking-widest">
                  {overallIndex} / {TOTAL_VERSES}
                </span>
              </div>
            </div>

            {/* Chapter name */}
            {currentChapter && (
              <div className="px-6 pt-4 pb-0">
                <p className="font-display text-lg font-semibold italic text-foreground">
                  {currentChapter.name}
                </p>
              </div>
            )}

            {/* Verse text */}
            <div className="px-6 py-5 space-y-5">
              <AnimatePresence mode="wait">
                {currentVerse ? (
                  <motion.div
                    key={`${currentChapterId}-${verseIndex}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Sanskrit — the heart of the page */}
                    <p
                      className="text-center whitespace-pre-line leading-loose"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.55rem",
                        fontWeight: 500,
                        color: "oklch(var(--foreground))",
                        lineHeight: 2.2,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {currentVerse.sanskritText}
                    </p>

                    <div className="divider-ornate">
                      <span>॥</span>
                    </div>

                    {/* Transliteration */}
                    <p
                      className="font-body text-sm italic text-center leading-relaxed"
                      style={{ color: "oklch(var(--accent) / 0.85)" }}
                    >
                      {currentVerse.transliteration}
                    </p>

                    {/* English */}
                    <div
                      className="border-t pt-4"
                      style={{ borderColor: "oklch(var(--border) / 0.4)" }}
                    >
                      <p className="text-verse-number tracking-widest mb-2">
                        English Rendering
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-[1.95] italic">
                        "{currentVerse.englishTranslation}"
                      </p>
                    </div>

                    {currentVerse.explanation && (
                      <p
                        className="font-body text-xs text-muted-foreground italic border-l-2 pl-3 leading-relaxed"
                        style={{ borderColor: "oklch(var(--accent) / 0.35)" }}
                      >
                        {currentVerse.explanation}
                      </p>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center space-y-3"
                  >
                    <div className="om-symbol text-5xl">ॐ</div>
                    <p className="font-body text-sm text-muted-foreground italic">
                      Loading verses from the sacred text...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-body text-muted-foreground">
                  <span>
                    Adhyāya {currentChapterId} · {currentVerses.length} ślokas
                  </span>
                  <span>
                    {verseIndex + 1} / {currentVerses.length || "—"}
                  </span>
                </div>
                <div
                  className="h-1.5 w-full border border-border/40"
                  style={{ background: "oklch(var(--muted) / 0.5)" }}
                >
                  <motion.div
                    animate={{
                      width: currentVerses.length
                        ? `${((verseIndex + 1) / currentVerses.length) * 100}%`
                        : "0%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(var(--accent) / 0.5), oklch(var(--accent)))",
                    }}
                  />
                </div>
              </div>

              {/* Transport Controls — minimal sacred icons */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handlePrevVerse}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-smooth font-body text-lg"
                  aria-label="Previous verse"
                  data-ocid="audio-prev-btn"
                  style={{ borderRadius: "1px" }}
                >
                  ◂
                </button>

                {!isPlaying ? (
                  <button
                    type="button"
                    onClick={handlePlay}
                    className="px-10 py-3 font-display text-sm font-semibold tracking-widest uppercase border border-accent/40 shadow-warm-glow transition-smooth hover:shadow-candlelight"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(var(--primary) / 0.15), oklch(var(--accent) / 0.1))",
                      color: "oklch(var(--primary))",
                      borderRadius: "1px",
                    }}
                    data-ocid="audio-play-btn"
                  >
                    ▶ श्रवण करें · Begin Listening
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePause}
                    className="px-10 py-3 font-display text-sm font-semibold tracking-widest uppercase border border-border transition-smooth"
                    style={{
                      color: "oklch(var(--muted-foreground))",
                      borderRadius: "1px",
                      background: "oklch(var(--muted) / 0.4)",
                    }}
                    data-ocid="audio-pause-btn"
                  >
                    ⏸ विराम · Pause
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleNextVerse}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-smooth font-body text-lg"
                  aria-label="Next verse"
                  data-ocid="audio-next-btn"
                  style={{ borderRadius: "1px" }}
                >
                  ▸
                </button>

                <button
                  type="button"
                  onClick={handleSkipChapter}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-smooth text-xs font-display"
                  aria-label="Skip chapter"
                  data-ocid="audio-skip-chapter-btn"
                  title="Skip to next chapter"
                  style={{ borderRadius: "1px" }}
                >
                  ↠
                </button>

                {isPlaying && (
                  <button
                    type="button"
                    onClick={handleStopPlayback}
                    className="w-10 h-10 flex items-center justify-center border border-border/60 text-muted-foreground hover:border-destructive/40 hover:text-destructive transition-smooth"
                    aria-label="Stop"
                    data-ocid="audio-stop-btn"
                    style={{ borderRadius: "1px" }}
                  >
                    ◼
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Playback Settings — manuscript annotation panel */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-border shadow-sacred overflow-hidden"
            style={{ background: "oklch(var(--card) / 0.85)" }}
          >
            <div
              className="px-6 py-3 border-b"
              style={{
                borderColor: "oklch(var(--accent) / 0.2)",
                background: "oklch(var(--muted) / 0.4)",
              }}
            >
              <p className="text-verse-number tracking-[0.2em] text-center">
                पाठ विधान · Recitation Settings
              </p>
            </div>

            <div className="px-6 py-5 space-y-5">
              {/* Speed */}
              <div className="flex items-center justify-between gap-4">
                <span className="font-body text-sm text-foreground">
                  गति · Speed
                </span>
                <div className="flex gap-2">
                  {(["slow", "normal"] as SpeedOption[]).map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSpeed(s)}
                      className={`px-5 py-1.5 text-sm font-body border transition-smooth ${
                        speed === s
                          ? "bg-primary text-primary-foreground border-primary shadow-sacred"
                          : "border-border text-muted-foreground hover:border-accent/40"
                      }`}
                      style={{ borderRadius: "1px" }}
                      data-ocid={`audio-speed-${s}`}
                    >
                      {s === "slow" ? "🕉 भक्ति · Devotional" : "सामान्य · Normal"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loop */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-body text-sm text-foreground">
                    पुनरावृत्ति · Loop All
                  </p>
                  <p className="font-body text-xs text-muted-foreground italic">
                    Returns to Chapter 1 after completing all 18 chapters
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLoopEnabled((v) => !v)}
                  className={`w-14 h-7 border transition-smooth relative shrink-0 ${
                    loopEnabled ? "border-accent/50" : "border-border"
                  }`}
                  style={{
                    background: loopEnabled
                      ? "oklch(var(--primary) / 0.15)"
                      : "oklch(var(--muted) / 0.5)",
                    borderRadius: "1px",
                  }}
                  aria-label="Toggle loop"
                  data-ocid="audio-loop-toggle"
                >
                  <span
                    className="absolute top-0.5 w-5 h-5 border border-border bg-background shadow transition-all"
                    style={{
                      left: loopEnabled ? "calc(100% - 1.5rem)" : "0.125rem",
                      borderRadius: "1px",
                      background: loopEnabled
                        ? "oklch(var(--accent))"
                        : "oklch(var(--muted-foreground) / 0.4)",
                    }}
                  />
                </button>
              </div>

              {/* Sleep Timer */}
              <div className="space-y-2">
                <p className="font-body text-sm text-foreground">
                  निद्रा टाइमर · Sleep Timer
                </p>
                <div className="flex flex-wrap gap-2">
                  {([0, 30, 60, 90, 120] as SleepTimerOption[]).map((mins) => (
                    <button
                      type="button"
                      key={mins}
                      onClick={() => setSleepTimer(mins)}
                      className={`px-4 py-1.5 text-xs font-body border transition-smooth ${
                        sleepTimer === mins
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-accent/40"
                      }`}
                      style={{ borderRadius: "1px" }}
                      data-ocid={`audio-sleep-${mins}`}
                    >
                      {mins === 0 ? "बंद · Off" : `${mins} min`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background note */}
              <div
                className="border border-border/40 px-4 py-3"
                style={{
                  background: "oklch(var(--muted) / 0.35)",
                  borderRadius: "1px",
                }}
              >
                <p className="font-body text-xs text-foreground font-medium mb-0.5">
                  🎧 पृष्ठभूमि पाठ · Background Recitation
                </p>
                <p className="font-body text-xs text-muted-foreground italic leading-relaxed">
                  Recitation continues as you navigate through other pages.
                  Return here to see the current verse and control playback.
                </p>
              </div>

              {/* Resume from saved */}
              {savedPos && !isPlaying && (
                <button
                  type="button"
                  onClick={() => {
                    setCurrentChapterId(savedPos.chapterId);
                    setVerseIndex(savedPos.verseIndex);
                    chapterIdRef.current = savedPos.chapterId;
                    verseIndexRef.current = savedPos.verseIndex;
                  }}
                  className="w-full flex items-center gap-3 px-5 py-3 border border-accent/20 text-sm font-body text-foreground hover:bg-accent/5 transition-smooth shadow-sacred"
                  style={{
                    background: "oklch(var(--accent) / 0.05)",
                    borderRadius: "1px",
                  }}
                  data-ocid="audio-resume-saved"
                >
                  <span className="text-accent">↩</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm font-semibold italic">
                      पुनः आरंभ · Resume Last Position
                    </span>
                    <span className="block text-xs text-muted-foreground italic">
                      Chapter {savedPos.chapterId} · Verse{" "}
                      {savedPos.verseIndex + 1}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Recently Played */}
          {recentVerses.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <div className="divider-ornate text-xs font-display uppercase tracking-widest">
                हाल में सुना · Recently Played
              </div>
              <div
                className="space-y-1 border border-border"
                style={{ background: "oklch(var(--card) / 0.7)" }}
              >
                {recentVerses.map((rv, i) => (
                  <button
                    type="button"
                    key={`${rv.chapterId}-${rv.verseNumber}-${i}`}
                    onClick={() => {
                      setCurrentChapterId(rv.chapterId);
                      chapterIdRef.current = rv.chapterId;
                      setVerseIndex(0);
                      verseIndexRef.current = 0;
                    }}
                    className="w-full flex items-center gap-3 px-5 py-3 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-accent/5 border-b border-border/30 transition-smooth text-left"
                    data-ocid={`audio-recent-${i}`}
                  >
                    <span className="text-accent/60 shrink-0">♪</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-sm font-medium text-foreground truncate italic">
                        {rv.chapterName}
                      </span>
                      <span className="block text-xs opacity-60">
                        Chapter {rv.chapterId} · Verse {rv.verseNumber}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ── CHAPTER PLAYLIST ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-4"
        >
          {/* Chapter list */}
          <div
            className="border border-border shadow-sacred overflow-hidden"
            style={{ background: "oklch(var(--card) / 0.85)" }}
          >
            <div
              className="px-5 py-3 border-b flex items-center justify-between"
              style={{
                borderColor: "oklch(var(--accent) / 0.2)",
                background: "oklch(var(--muted) / 0.4)",
              }}
            >
              <p className="text-verse-number tracking-[0.18em]">
                अध्याय · Chapters
              </p>
              <span className="text-xs text-muted-foreground font-body">
                18 adhyāyas
              </span>
            </div>

            {/* Mobile: toggle */}
            <button
              type="button"
              onClick={() => setShowChapterList((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-3 text-sm font-body text-muted-foreground hover:text-foreground border-b border-border/30 transition-smooth lg:hidden"
            >
              <span>
                {showChapterList ? "सूची छुपाएं · Hide" : "सभी देखें · Show All 18"}
              </span>
              <span
                style={{
                  transform: showChapterList ? "rotate(90deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                ›
              </span>
            </button>

            <div className={showChapterList ? "block" : "hidden lg:block"}>
              {chapters.length > 0 && (
                <ChapterSidebar
                  chapters={chapters}
                  currentChapterId={currentChapterId}
                  onSelect={handleChapterJump}
                />
              )}
            </div>
          </div>

          {/* Sacred info card */}
          <div
            className="border border-border shadow-sacred overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--sacred) / 0.06), oklch(var(--accent) / 0.04))",
            }}
          >
            <div className="px-5 py-6 text-center space-y-3">
              <div className="om-symbol text-4xl">ॐ</div>
              <p className="text-verse-number tracking-[0.2em]">
                श्रीमद्भगवद्गीता
              </p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed italic">
                This sacred audio stream carries all 700 verses of the Bhagavad
                Gita in order — Sanskrit then English — at a meditative pace, as
                recited by ancient devotional saints.
              </p>
              <div className="divider-ornate my-2">
                <span>✦</span>
              </div>
              <p className="font-display text-sm font-semibold italic text-accent">
                ✨ Jai Shree Krishna ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="manuscript-header-border mt-12" />
    </div>
  );
}
