import { r as reactExports, g as useTTS, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-DqMoqjqS.js";
import { u as useChapters } from "./use-chapters-BoO0tWpD.js";
import { u as usePoints } from "./use-points-C2isEgOA.js";
import { u as useVersesByChapter } from "./use-verse-Dwfjyjfx.js";
import "./useQuery-DTb8J6Ym.js";
const RECENT_KEY = "gita-audio-recent";
const POS_KEY = "gita-audio-position";
function loadRecent() {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveRecent(verses) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(verses));
  } catch {
  }
}
function loadPosition() {
  try {
    const raw = localStorage.getItem(POS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function savePosition(pos) {
  try {
    localStorage.setItem(POS_KEY, JSON.stringify(pos));
  } catch {
  }
}
const CHAPTER_VERSE_COUNTS = {
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
  18: 78
};
const TOTAL_VERSES = Object.values(CHAPTER_VERSE_COUNTS).reduce(
  (a, b) => a + b,
  0
);
function getOverallIndex(chapterId, verseIndex) {
  let count = 0;
  for (let c = 1; c < chapterId; c++) {
    count += CHAPTER_VERSE_COUNTS[c] ?? 0;
  }
  return count + verseIndex + 1;
}
function ChapterSidebar({
  chapters,
  currentChapterId,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[480px] overflow-y-auto", children: chapters.map((ch) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onSelect(ch.id),
      className: "w-full text-left transition-smooth border-b border-border/30 hover:bg-accent/5",
      style: currentChapterId === ch.id ? {
        background: "oklch(var(--accent) / 0.08)",
        borderLeft: "3px solid oklch(var(--accent) / 0.6)"
      } : { borderLeft: "3px solid transparent" },
      "data-ocid": `audio-chapter-${ch.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-display text-xs font-bold w-6 h-6 rounded-full border flex items-center justify-center shrink-0",
            style: {
              borderColor: currentChapterId === ch.id ? "oklch(var(--accent) / 0.6)" : "oklch(var(--border))",
              color: currentChapterId === ch.id ? "oklch(var(--accent))" : "oklch(var(--muted-foreground))"
            },
            children: ch.id
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-body text-xs font-medium text-foreground truncate", children: ch.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-body text-xs text-muted-foreground/60 italic truncate", children: ch.sanskritName })
        ] }),
        currentChapterId === ch.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse" })
      ] })
    },
    ch.id
  )) });
}
function AudioPage() {
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [currentChapterId, setCurrentChapterId] = reactExports.useState(1);
  const [verseIndex, setVerseIndex] = reactExports.useState(0);
  const [speed, setSpeed] = reactExports.useState("slow");
  const [loopEnabled, setLoopEnabled] = reactExports.useState(true);
  const [sleepTimer, setSleepTimer] = reactExports.useState(0);
  const [sleepCountdown, setSleepCountdown] = reactExports.useState(0);
  const [showChapterList, setShowChapterList] = reactExports.useState(false);
  const [totalPlayed, setTotalPlayed] = reactExports.useState(0);
  const [recentVerses, setRecentVerses] = reactExports.useState(loadRecent);
  const { speak, stop, isSpeaking } = useTTS();
  const { addPoints } = usePoints();
  const { data: chapters = [] } = useChapters();
  const { data: currentVerses = [] } = useVersesByChapter(currentChapterId);
  const isPlayingRef = reactExports.useRef(false);
  const chapterIdRef = reactExports.useRef(currentChapterId);
  const verseIndexRef = reactExports.useRef(verseIndex);
  const speedRef = reactExports.useRef(speed);
  const loopRef = reactExports.useRef(loopEnabled);
  const currentVersesRef = reactExports.useRef(currentVerses);
  reactExports.useEffect(() => {
    chapterIdRef.current = currentChapterId;
  }, [currentChapterId]);
  reactExports.useEffect(() => {
    verseIndexRef.current = verseIndex;
  }, [verseIndex]);
  reactExports.useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  reactExports.useEffect(() => {
    loopRef.current = loopEnabled;
  }, [loopEnabled]);
  reactExports.useEffect(() => {
    currentVersesRef.current = currentVerses;
  }, [currentVerses]);
  reactExports.useEffect(() => {
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
    }, 1e3);
    return () => clearInterval(interval);
  }, [sleepTimer]);
  const handleStopPlayback = reactExports.useCallback(() => {
    isPlayingRef.current = false;
    stop();
    setIsPlaying(false);
  }, [stop]);
  const addToRecent = reactExports.useCallback(
    (chapterId, verseNum, chapterName) => {
      setRecentVerses((prev) => {
        const updated = [
          {
            chapterId,
            verseNumber: verseNum,
            chapterName,
            timestamp: Date.now()
          },
          ...prev.filter(
            (v) => !(v.chapterId === chapterId && v.verseNumber === verseNum)
          )
        ].slice(0, 3);
        saveRecent(updated);
        return updated;
      });
    },
    []
  );
  const advanceVerse = reactExports.useCallback(() => {
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
  const advanceRef = reactExports.useRef(advanceVerse);
  reactExports.useEffect(() => {
    advanceRef.current = advanceVerse;
  }, [advanceVerse]);
  const speakCurrentVerse = reactExports.useCallback(() => {
    var _a;
    if (!isPlayingRef.current) return;
    const verses = currentVersesRef.current;
    const idx = verseIndexRef.current;
    if (!verses.length) return;
    const verse = verses[idx];
    if (!verse) return;
    const chName = ((_a = chapters.find((c) => c.id === chapterIdRef.current)) == null ? void 0 : _a.name) ?? "";
    addToRecent(chapterIdRef.current, verse.verseNumber, chName);
    setTotalPlayed((p) => p + 1);
    addPoints("listening", 1);
    const pos = {
      chapterId: chapterIdRef.current,
      verseIndex: idx,
      verseId: verse.id,
      timestamp: Date.now()
    };
    savePosition(pos);
    const rate = speedRef.current === "slow" ? 0.7 : 0.9;
    const sanText = verse.sanskritText.replace(/\|/g, "").replace(/\n/g, " ");
    speak(`${sanText}... ${verse.englishTranslation}`, "sa", "male", rate);
  }, [speak, addPoints, chapters, addToRecent]);
  const speakCurrentRef = reactExports.useRef(speakCurrentVerse);
  reactExports.useEffect(() => {
    speakCurrentRef.current = speakCurrentVerse;
  }, [speakCurrentVerse]);
  reactExports.useEffect(() => {
    if (!isPlaying) return;
    if (currentVerses.length === 0) return;
    speakCurrentRef.current();
  }, [isPlaying, currentVerses]);
  reactExports.useEffect(() => {
    if (!isPlaying) return;
    if (!isSpeaking && isPlayingRef.current) {
      const timer = setTimeout(() => {
        advanceRef.current();
      }, 2e3);
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
  const handleChapterJump = (id) => {
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
  const formatCountdown = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center py-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-[0.25em] mb-2", children: "॥ श्रुति पाठ ॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold italic text-primary mb-1", children: "24×7 Sacred Recitation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base italic text-accent mb-3", children: "— all 700 verses flowing as a living river of divine wisdom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornate-rule text-sm", children: "✦ ॐ ✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 flex-wrap mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "streak-badge", children: [
              TOTAL_VERSES,
              " श्लोक · verses"
            ] }),
            totalPlayed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "streak-badge", children: [
              totalPlayed,
              " verses played"
            ] }),
            sleepCountdown > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                animate: { scale: [1, 1.03, 1] },
                transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
                className: "streak-badge",
                children: [
                  "⏱ Stops in ",
                  formatCountdown(sleepCountdown)
                ]
              }
            ),
            isPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "streak-badge",
                style: { color: "oklch(var(--accent))" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse mr-1" }),
                  "Live Recitation"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_300px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "manuscript-page border border-accent/20 shadow-elevated overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-6 py-3 border-b flex items-center justify-between",
                  style: {
                    borderColor: "oklch(var(--accent) / 0.25)",
                    background: "oklch(var(--muted) / 0.55)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-[0.2em]", children: currentChapter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      currentChapter.sanskritName,
                      " · अध्याय ",
                      currentChapterId,
                      " · श्लोक ",
                      (currentVerse == null ? void 0 : currentVerse.verseNumber) ?? "—"
                    ] }) : "Loading..." }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-verse-number tracking-widest", children: [
                      overallIndex,
                      " / ",
                      TOTAL_VERSES
                    ] }) })
                  ]
                }
              ),
              currentChapter && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pt-4 pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold italic text-foreground", children: currentChapter.name }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: currentVerse ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -8 },
                    transition: { duration: 0.3 },
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-center whitespace-pre-line leading-loose",
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "1.55rem",
                            fontWeight: 500,
                            color: "oklch(var(--foreground))",
                            lineHeight: 2.2,
                            letterSpacing: "0.04em"
                          },
                          children: currentVerse.sanskritText
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "॥" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm italic text-center leading-relaxed",
                          style: { color: "oklch(var(--accent) / 0.85)" },
                          children: currentVerse.transliteration
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "border-t pt-4",
                          style: { borderColor: "oklch(var(--border) / 0.4)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest mb-2", children: "English Rendering" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground leading-[1.95] italic", children: [
                              '"',
                              currentVerse.englishTranslation,
                              '"'
                            ] })
                          ]
                        }
                      ),
                      currentVerse.explanation && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs text-muted-foreground italic border-l-2 pl-3 leading-relaxed",
                          style: { borderColor: "oklch(var(--accent) / 0.35)" },
                          children: currentVerse.explanation
                        }
                      )
                    ]
                  },
                  `${currentChapterId}-${verseIndex}`
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "py-12 text-center space-y-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-symbol text-5xl", children: "ॐ" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground italic", children: "Loading verses from the sacred text..." })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-body text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Adhyāya ",
                      currentChapterId,
                      " · ",
                      currentVerses.length,
                      " ślokas"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      verseIndex + 1,
                      " / ",
                      currentVerses.length || "—"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 w-full border border-border/40",
                      style: { background: "oklch(var(--muted) / 0.5)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          animate: {
                            width: currentVerses.length ? `${(verseIndex + 1) / currentVerses.length * 100}%` : "0%"
                          },
                          transition: { duration: 0.5 },
                          className: "h-full",
                          style: {
                            background: "linear-gradient(90deg, oklch(var(--accent) / 0.5), oklch(var(--accent)))"
                          }
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handlePrevVerse,
                      className: "w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-smooth font-body text-lg",
                      "aria-label": "Previous verse",
                      "data-ocid": "audio-prev-btn",
                      style: { borderRadius: "1px" },
                      children: "◂"
                    }
                  ),
                  !isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handlePlay,
                      className: "px-10 py-3 font-display text-sm font-semibold tracking-widest uppercase border border-accent/40 shadow-warm-glow transition-smooth hover:shadow-candlelight",
                      style: {
                        background: "linear-gradient(135deg, oklch(var(--primary) / 0.15), oklch(var(--accent) / 0.1))",
                        color: "oklch(var(--primary))",
                        borderRadius: "1px"
                      },
                      "data-ocid": "audio-play-btn",
                      children: "▶ श्रवण करें · Begin Listening"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handlePause,
                      className: "px-10 py-3 font-display text-sm font-semibold tracking-widest uppercase border border-border transition-smooth",
                      style: {
                        color: "oklch(var(--muted-foreground))",
                        borderRadius: "1px",
                        background: "oklch(var(--muted) / 0.4)"
                      },
                      "data-ocid": "audio-pause-btn",
                      children: "⏸ विराम · Pause"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleNextVerse,
                      className: "w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-smooth font-body text-lg",
                      "aria-label": "Next verse",
                      "data-ocid": "audio-next-btn",
                      style: { borderRadius: "1px" },
                      children: "▸"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleSkipChapter,
                      className: "w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-smooth text-xs font-display",
                      "aria-label": "Skip chapter",
                      "data-ocid": "audio-skip-chapter-btn",
                      title: "Skip to next chapter",
                      style: { borderRadius: "1px" },
                      children: "↠"
                    }
                  ),
                  isPlaying && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleStopPlayback,
                      className: "w-10 h-10 flex items-center justify-center border border-border/60 text-muted-foreground hover:border-destructive/40 hover:text-destructive transition-smooth",
                      "aria-label": "Stop",
                      "data-ocid": "audio-stop-btn",
                      style: { borderRadius: "1px" },
                      children: "◼"
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "border border-border shadow-sacred overflow-hidden",
            style: { background: "oklch(var(--card) / 0.85)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-6 py-3 border-b",
                  style: {
                    borderColor: "oklch(var(--accent) / 0.2)",
                    background: "oklch(var(--muted) / 0.4)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-[0.2em] text-center", children: "पाठ विधान · Recitation Settings" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-foreground", children: "गति · Speed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["slow", "normal"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSpeed(s),
                      className: `px-5 py-1.5 text-sm font-body border transition-smooth ${speed === s ? "bg-primary text-primary-foreground border-primary shadow-sacred" : "border-border text-muted-foreground hover:border-accent/40"}`,
                      style: { borderRadius: "1px" },
                      "data-ocid": `audio-speed-${s}`,
                      children: s === "slow" ? "🕉 भक्ति · Devotional" : "सामान्य · Normal"
                    },
                    s
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground", children: "पुनरावृत्ति · Loop All" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic", children: "Returns to Chapter 1 after completing all 18 chapters" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setLoopEnabled((v) => !v),
                      className: `w-14 h-7 border transition-smooth relative shrink-0 ${loopEnabled ? "border-accent/50" : "border-border"}`,
                      style: {
                        background: loopEnabled ? "oklch(var(--primary) / 0.15)" : "oklch(var(--muted) / 0.5)",
                        borderRadius: "1px"
                      },
                      "aria-label": "Toggle loop",
                      "data-ocid": "audio-loop-toggle",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "absolute top-0.5 w-5 h-5 border border-border bg-background shadow transition-all",
                          style: {
                            left: loopEnabled ? "calc(100% - 1.5rem)" : "0.125rem",
                            borderRadius: "1px",
                            background: loopEnabled ? "oklch(var(--accent))" : "oklch(var(--muted-foreground) / 0.4)"
                          }
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground", children: "निद्रा टाइमर · Sleep Timer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [0, 30, 60, 90, 120].map((mins) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSleepTimer(mins),
                      className: `px-4 py-1.5 text-xs font-body border transition-smooth ${sleepTimer === mins ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-accent/40"}`,
                      style: { borderRadius: "1px" },
                      "data-ocid": `audio-sleep-${mins}`,
                      children: mins === 0 ? "बंद · Off" : `${mins} min`
                    },
                    mins
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "border border-border/40 px-4 py-3",
                    style: {
                      background: "oklch(var(--muted) / 0.35)",
                      borderRadius: "1px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-foreground font-medium mb-0.5", children: "🎧 पृष्ठभूमि पाठ · Background Recitation" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic leading-relaxed", children: "Recitation continues as you navigate through other pages. Return here to see the current verse and control playback." })
                    ]
                  }
                ),
                savedPos && !isPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setCurrentChapterId(savedPos.chapterId);
                      setVerseIndex(savedPos.verseIndex);
                      chapterIdRef.current = savedPos.chapterId;
                      verseIndexRef.current = savedPos.verseIndex;
                    },
                    className: "w-full flex items-center gap-3 px-5 py-3 border border-accent/20 text-sm font-body text-foreground hover:bg-accent/5 transition-smooth shadow-sacred",
                    style: {
                      background: "oklch(var(--accent) / 0.05)",
                      borderRadius: "1px"
                    },
                    "data-ocid": "audio-resume-saved",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "↩" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-display text-sm font-semibold italic", children: "पुनः आरंभ · Resume Last Position" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-xs text-muted-foreground italic", children: [
                          "Chapter ",
                          savedPos.chapterId,
                          " · Verse",
                          " ",
                          savedPos.verseIndex + 1
                        ] })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        recentVerses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.3 },
            className: "space-y-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate text-xs font-display uppercase tracking-widest", children: "हाल में सुना · Recently Played" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "space-y-1 border border-border",
                  style: { background: "oklch(var(--card) / 0.7)" },
                  children: recentVerses.map((rv, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setCurrentChapterId(rv.chapterId);
                        chapterIdRef.current = rv.chapterId;
                        setVerseIndex(0);
                        verseIndexRef.current = 0;
                      },
                      className: "w-full flex items-center gap-3 px-5 py-3 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-accent/5 border-b border-border/30 transition-smooth text-left",
                      "data-ocid": `audio-recent-${i}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/60 shrink-0", children: "♪" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-display text-sm font-medium text-foreground truncate italic", children: rv.chapterName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-xs opacity-60", children: [
                            "Chapter ",
                            rv.chapterId,
                            " · Verse ",
                            rv.verseNumber
                          ] })
                        ] })
                      ]
                    },
                    `${rv.chapterId}-${rv.verseNumber}-${i}`
                  ))
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 16 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.15 },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border border-border shadow-sacred overflow-hidden",
                style: { background: "oklch(var(--card) / 0.85)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-5 py-3 border-b flex items-center justify-between",
                      style: {
                        borderColor: "oklch(var(--accent) / 0.2)",
                        background: "oklch(var(--muted) / 0.4)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-[0.18em]", children: "अध्याय · Chapters" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "18 adhyāyas" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowChapterList((v) => !v),
                      className: "w-full flex items-center justify-between px-5 py-3 text-sm font-body text-muted-foreground hover:text-foreground border-b border-border/30 transition-smooth lg:hidden",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: showChapterList ? "सूची छुपाएं · Hide" : "सभी देखें · Show All 18" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              transform: showChapterList ? "rotate(90deg)" : "none",
                              transition: "transform 0.2s"
                            },
                            children: "›"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: showChapterList ? "block" : "hidden lg:block", children: chapters.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChapterSidebar,
                    {
                      chapters,
                      currentChapterId,
                      onSelect: handleChapterJump
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "border border-border shadow-sacred overflow-hidden",
                style: {
                  background: "linear-gradient(135deg, oklch(var(--sacred) / 0.06), oklch(var(--accent) / 0.04))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-6 text-center space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-symbol text-4xl", children: "ॐ" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-[0.2em]", children: "श्रीमद्भगवद्गीता" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed italic", children: "This sacred audio stream carries all 700 verses of the Bhagavad Gita in order — Sanskrit then English — at a meditative pace, as recited by ancient devotional saints." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate my-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold italic text-accent", children: "✨ Jai Shree Krishna ✨" })
                ] })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mt-12" })
  ] });
}
export {
  AudioPage
};
