import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-vCKiyWhq.js";
import { B as Button } from "./button-S7Tmk-Xe.js";
import { I as Input } from "./input-6Gh_LKu9.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
import "./index-Di4-AdbR.js";
import "./index-BknLay4C.js";
import "./utils-2v2HxlWs.js";
const VERSES = [
  {
    id: "2.47",
    ch: 2,
    v: 47,
    title: "Nishkāma Karma",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
    english: "You have a right to perform your duties, but never to the fruits of your actions. Do not be motivated by results, nor attached to inaction."
  },
  {
    id: "2.20",
    ch: 2,
    v: 20,
    title: "The Eternal Soul",
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः | अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ||",
    english: "The soul is never born nor dies at any time. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."
  },
  {
    id: "4.7",
    ch: 4,
    v: 7,
    title: "Krishna's Advent",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
    english: "Whenever there is a decline in righteousness and rise in unrighteousness, at that time I manifest myself."
  },
  {
    id: "9.22",
    ch: 9,
    v: 22,
    title: "Divine Provision",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
    english: "To those who worship Me with devotion, I carry what they lack and preserve what they have."
  },
  {
    id: "18.66",
    ch: 18,
    v: 66,
    title: "Supreme Surrender",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
    english: "Abandon all varieties of religion and surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear."
  },
  {
    id: "6.5",
    ch: 6,
    v: 5,
    title: "Self as Friend",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् | आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
    english: "Elevate yourself through the power of your mind, and do not degrade yourself. The mind can be both a friend and a foe."
  },
  {
    id: "3.27",
    ch: 3,
    v: 27,
    title: "Nature Acts",
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||",
    english: "All actions are performed by the modes of material nature. Only the fool, deluded by ego, thinks 'I am the doer.'"
  },
  {
    id: "10.20",
    ch: 10,
    v: 20,
    title: "Krishna in All",
    sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः | अहमादिश्च मध्यं च भूतानामन्त एव च ||",
    english: "I am the Supersoul seated in the hearts of all living entities. I am the beginning, the middle and the end of all beings."
  },
  {
    id: "18.78",
    ch: 18,
    v: 78,
    title: "Victory with Krishna",
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः | तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ||",
    english: "Wherever there is Krishna and Arjuna the archer, there will certainly be opulence, victory, extraordinary power, and morality."
  },
  {
    id: "15.15",
    ch: 15,
    v: 15,
    title: "Seated in All Hearts",
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च |",
    english: "I am seated in everyone's heart, and from Me come remembrance, knowledge, and forgetfulness. I am to be known by all the Vedas."
  }
];
const STORAGE_KEY = "gita-memorize";
function loadSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveSessions(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
  }
}
function MemorizePage() {
  const { addPoints } = usePoints();
  const [sessions, setSessions] = reactExports.useState(loadSessions);
  const [chapter, setChapter] = reactExports.useState("all");
  const [selectedId, setSelectedId] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState("select");
  const [hidePercent, setHidePercent] = reactExports.useState(25);
  const [userInput, setUserInput] = reactExports.useState("");
  const [resultScore, setResultScore] = reactExports.useState(null);
  const chapters = reactExports.useMemo(
    () => [...new Set(VERSES.map((v) => v.ch))].sort((a, b) => a - b),
    []
  );
  const filtered = reactExports.useMemo(
    () => chapter === "all" ? VERSES : VERSES.filter((v) => v.ch === Number.parseInt(chapter)),
    [chapter]
  );
  const verse = VERSES.find((v) => v.id === selectedId);
  const words = reactExports.useMemo(
    () => verse ? verse.sanskrit.replace(/[|॥]/g, "").trim().split(/\s+/) : [],
    [verse]
  );
  const hiddenSet = reactExports.useMemo(() => {
    if (!words.length) return /* @__PURE__ */ new Set();
    const count = Math.max(1, Math.ceil(words.length * hidePercent / 100));
    const set = /* @__PURE__ */ new Set();
    let i = 0;
    while (set.size < count && i < words.length * 3) {
      set.add(Math.floor((i * 7 + hidePercent) % words.length));
      i++;
    }
    return set;
  }, [words, hidePercent]);
  const displayWords = reactExports.useMemo(
    () => words.map(
      (w, i) => hiddenSet.has(i) ? "_".repeat(Math.max(4, w.length)) : w
    ),
    [words, hiddenSet]
  );
  const calcScore = reactExports.useCallback(() => {
    if (!words.length) return { correct: 0, total: 0 };
    const typed = userInput.trim().split(/\s+/);
    let correct = 0;
    for (const idx of hiddenSet) {
      if (typed[idx] === words[idx]) correct++;
    }
    return { correct, total: hiddenSet.size };
  }, [words, hiddenSet, userInput]);
  const handleSubmit = reactExports.useCallback(() => {
    const score = calcScore();
    setResultScore(score);
    const mastered = score.correct === score.total && score.total > 0;
    addPoints("reading", mastered ? 10 : score.correct > 0 ? 5 : 0);
    setSessions((prev) => {
      const existing = prev.find((s) => s.verseId === selectedId);
      const newSession = {
        verseId: selectedId,
        attempts: ((existing == null ? void 0 : existing.attempts) ?? 0) + 1,
        correctWords: score.correct,
        totalWords: score.total,
        lastAttempt: Date.now(),
        mastered
      };
      const updated = existing ? prev.map((s) => s.verseId === selectedId ? newSession : s) : [newSession, ...prev];
      saveSessions(updated);
      return updated;
    });
    setStage("result");
  }, [calcScore, selectedId, addPoints]);
  const masteredIds = new Set(
    sessions.filter((s) => s.mastered).map((s) => s.verseId)
  );
  const start = (id) => {
    setSelectedId(id);
    setHidePercent(25);
    setUserInput("");
    setResultScore(null);
    setStage("view");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ श्लोक-स्मृति ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Verse Memorization" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm italic", children: '"Let every word of the Gita become a permanent lamp in your heart"' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
    ] }),
    masteredIds.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "streak-badge", children: [
      "🏆 ",
      masteredIds.size,
      " verse",
      masteredIds.size > 1 ? "s" : "",
      " ",
      "mastered"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      stage === "select" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "memo-chapter", className: "text-verse-number", children: "CHAPTER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "memo-chapter",
                  "data-ocid": "memorize.chapter_select",
                  value: chapter,
                  onChange: (e) => setChapter(e.target.value),
                  className: "rounded border border-accent/30 bg-card/70 px-3 py-2 font-body text-sm text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Chapters" }),
                    chapters.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c, children: [
                      "Chapter ",
                      c
                    ] }, c))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((v, i) => {
              const session = sessions.find((s) => s.verseId === v.id);
              const pct = session && session.totalWords > 0 ? Math.round(
                session.correctWords / session.totalWords * 100
              ) : null;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  type: "button",
                  "data-ocid": `memorize.verse.${i + 1}`,
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.04 },
                  onClick: () => start(v.id),
                  className: "w-full text-left sacred-card-hover flex items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "shrink-0 w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center",
                        style: { background: "oklch(var(--accent)/0.1)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-bold text-accent", children: v.id })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base italic font-semibold text-foreground", children: v.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-xs text-muted-foreground truncate mt-0.5", children: [
                        v.sanskrit.substring(0, 48),
                        "…"
                      ] })
                    ] }),
                    masteredIds.has(v.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg shrink-0", children: "🏆" }),
                    !masteredIds.has(v.id) && pct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground shrink-0", children: [
                      pct,
                      "%"
                    ] })
                  ]
                },
                v.id
              );
            }) })
          ]
        },
        "select"
      ),
      stage === "view" && verse && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                onClick: () => setStage("select"),
                className: "mb-4 text-muted-foreground font-body text-sm",
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-verse-number text-center mb-1", children: [
                "CHAPTER ",
                verse.ch,
                " · VERSE ",
                verse.v
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl italic text-center mb-4 text-foreground", children: verse.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-sm", children: "✦" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-center my-6 leading-loose text-foreground",
                  style: { fontSize: "1.15rem" },
                  children: verse.sanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-sm", children: "✦" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground text-center mt-4", children: verse.english }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number text-center", children: "CHOOSE DIFFICULTY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap justify-center", children: [
                  { label: "25% hidden", value: 25 },
                  { label: "50% hidden", value: 50 },
                  { label: "75% hidden", value: 75 },
                  { label: "All hidden", value: 100 }
                ].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `memorize.difficulty.${d.value}`,
                    onClick: () => setHidePercent(d.value),
                    className: "px-4 py-2 rounded border font-body text-sm transition-smooth",
                    style: {
                      borderColor: hidePercent === d.value ? "oklch(var(--accent))" : "oklch(var(--border))",
                      background: hidePercent === d.value ? "oklch(var(--accent)/0.15)" : "oklch(var(--card)/0.5)",
                      color: hidePercent === d.value ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))"
                    },
                    children: d.label
                  },
                  d.value
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "memorize.begin_button",
                    onClick: () => setStage("practice"),
                    className: "mt-2 font-display font-bold text-primary-foreground shadow-warm-glow",
                    style: {
                      background: "oklch(var(--accent))",
                      border: "2px solid oklch(var(--gold-deep))"
                    },
                    children: "🪔 Begin Memorization"
                  }
                ) })
              ] })
            ] })
          ] })
        },
        "view"
      ),
      stage === "practice" && verse && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                onClick: () => setStage("view"),
                className: "mb-4 text-muted-foreground font-body text-sm",
                children: "← View Full Verse"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-verse-number text-center mb-2", children: [
                "MEMORIZATION PRACTICE — ",
                verse.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground text-center mb-6 italic", children: "Blanks represent hidden words. Type the complete verse below." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-body text-center leading-loose mb-6",
                  style: {
                    fontSize: "1.1rem",
                    color: "oklch(var(--foreground))"
                  },
                  children: displayWords.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mx-1 inline-block",
                      style: {
                        borderBottom: hiddenSet.has(i) ? "2px solid oklch(var(--accent)/0.5)" : "none",
                        color: hiddenSet.has(i) ? "oklch(var(--muted-foreground))" : "oklch(var(--foreground))",
                        minWidth: "2ch"
                      },
                      children: w
                    },
                    `w-${i}-${w}`
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-sm", children: "✦" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "verse-type-input",
                    className: "text-verse-number block",
                    children: "TYPE THE COMPLETE VERSE"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "verse-type-input",
                    "data-ocid": "memorize.verse_input",
                    placeholder: "Type each Sanskrit word in order, separated by spaces…",
                    value: userInput,
                    onChange: (e) => setUserInput(e.target.value),
                    className: "bg-card/80 border-accent/30 font-body text-base h-12"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "memorize.submit_button",
                  onClick: handleSubmit,
                  disabled: !userInput.trim(),
                  className: "mt-6 font-display font-bold text-primary-foreground shadow-warm-glow",
                  style: { background: "oklch(var(--accent))" },
                  children: "Check My Answer"
                }
              )
            ] })
          ] })
        },
        "practice"
      ),
      stage === "result" && verse && resultScore && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sacred-card p-6 text-center", children: (() => {
            const pct = resultScore.total > 0 ? Math.round(
              resultScore.correct / resultScore.total * 100
            ) : 0;
            const mastered = pct === 100;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: mastered ? "🏆" : pct >= 80 ? "✨" : "🌱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl italic mb-1 text-foreground", children: mastered ? "Perfect Mastery!" : pct >= 80 ? "Excellent!" : "Keep Practicing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground text-sm mb-6", children: [
                verse.id,
                " — ",
                verse.title
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-8 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold text-accent", children: [
                    pct,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: "Score" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold text-foreground", children: [
                    resultScore.correct,
                    "/",
                    resultScore.total
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: "Words Correct" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold text-accent", children: [
                    "+",
                    mastered ? 10 : resultScore.correct > 0 ? 5 : 0
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: "Points" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "parchment-section rounded p-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-2", children: "CORRECT VERSE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground leading-loose", children: verse.sanskrit })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "memorize.retry_button",
                    variant: "outline",
                    onClick: () => {
                      setUserInput("");
                      setResultScore(null);
                      setStage("practice");
                    },
                    className: "border-accent/40 text-accent font-body",
                    children: "Try Again"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "memorize.select_button",
                    onClick: () => {
                      setStage("select");
                      setSelectedId("");
                    },
                    className: "font-display font-bold text-primary-foreground shadow-warm-glow",
                    style: { background: "oklch(var(--accent))" },
                    children: "Choose Another Verse"
                  }
                )
              ] })
            ] });
          })() }) })
        },
        "result"
      )
    ] })
  ] });
}
export {
  MemorizePage
};
