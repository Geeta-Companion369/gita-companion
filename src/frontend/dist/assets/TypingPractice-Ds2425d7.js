import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-CodWPqWB.js";
import { B as Button } from "./button-DETjaKCt.js";
import { u as usePoints } from "./use-points-BR8pxHqh.js";
import "./index-DYfIouYk.js";
import "./index--TUt74_3.js";
import "./utils-2v2HxlWs.js";
const TYPING_VERSES = [
  // Easy — Ch 1-3
  {
    id: "2.47",
    ch: 2,
    diff: "easy",
    title: "Nishkāma Karma",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||"
  },
  {
    id: "2.20",
    ch: 2,
    diff: "easy",
    title: "The Eternal Soul",
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः |"
  },
  {
    id: "3.27",
    ch: 3,
    diff: "easy",
    title: "Nature Acts",
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||"
  },
  // Medium — Ch 4-12
  {
    id: "4.7",
    ch: 4,
    diff: "medium",
    title: "Krishna's Advent",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||"
  },
  {
    id: "9.22",
    ch: 9,
    diff: "medium",
    title: "Divine Provision",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||"
  },
  {
    id: "10.20",
    ch: 10,
    diff: "medium",
    title: "Krishna in All",
    sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः | अहमादिश्च मध्यं च भूतानामन्त एव च ||"
  },
  // Hard — Ch 13-18
  {
    id: "15.15",
    ch: 15,
    diff: "hard",
    title: "Seated in All Hearts",
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च | वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ||"
  },
  {
    id: "18.66",
    ch: 18,
    diff: "hard",
    title: "Supreme Surrender",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||"
  },
  {
    id: "18.78",
    ch: 18,
    diff: "hard",
    title: "Victory with Krishna",
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः | तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ||"
  }
];
const STORAGE_KEY = "gita-typing-sessions";
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
const DIFF_LABEL = {
  all: "All",
  easy: "Easy (Ch 1–3)",
  medium: "Medium (Ch 4–12)",
  hard: "Hard (Ch 13–18)"
};
function TypingPracticePage() {
  const { addPoints } = usePoints();
  const [sessions, setSessions] = reactExports.useState(loadSessions);
  const [diff, setDiff] = reactExports.useState("all");
  const [selectedId, setSelectedId] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState(
    "select"
  );
  const [typed, setTyped] = reactExports.useState("");
  const [startTime, setStartTime] = reactExports.useState(0);
  const [elapsed, setElapsed] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const filteredVerses = reactExports.useMemo(
    () => diff === "all" ? TYPING_VERSES : TYPING_VERSES.filter((v) => v.diff === diff),
    [diff]
  );
  const verse = TYPING_VERSES.find((v) => v.id === selectedId);
  const target = (verse == null ? void 0 : verse.sanskrit) ?? "";
  const chars = reactExports.useMemo(() => {
    return target.split("").map((ch, i) => {
      if (i >= typed.length) return { ch, state: "pending" };
      if (typed[i] === ch) return { ch, state: "correct" };
      return { ch, state: "error" };
    });
  }, [target, typed]);
  const correctCount = reactExports.useMemo(
    () => chars.filter((c) => c.state === "correct").length,
    [chars]
  );
  const accuracy = typed.length > 0 ? Math.round(correctCount / Math.max(typed.length, 1) * 100) : 100;
  const wpm = elapsed > 0 ? Math.round(typed.split(/\s+/).length / (elapsed / 6e4)) : 0;
  const stopTimer = reactExports.useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const startTimer = reactExports.useCallback(() => {
    const t0 = Date.now();
    setStartTime(t0);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - t0);
    }, 500);
  }, []);
  reactExports.useEffect(() => {
    if (stage !== "practice") stopTimer();
    return stopTimer;
  }, [stage, stopTimer]);
  const handleTyping = reactExports.useCallback(
    (val) => {
      if (finished) return;
      if (!startTime && val.length > 0) startTimer();
      setTyped(val);
      if (val === target) {
        stopTimer();
        setFinished(true);
      }
    },
    [finished, startTime, startTimer, stopTimer, target]
  );
  const completeSession = reactExports.useCallback(() => {
    if (!verse) return;
    const finalWpm = elapsed > 0 ? Math.round(typed.split(/\s+/).length / (elapsed / 6e4)) : 0;
    const finalErrors = typed.split("").filter((c, i) => c !== target[i]).length;
    const pts = Math.max(5, Math.min(20, 5 + Math.floor(finalWpm / 10)));
    addPoints("reading", pts);
    const s = {
      verseId: verse.id,
      wpm: finalWpm,
      errors: finalErrors,
      completedAt: Date.now()
    };
    setSessions((prev) => {
      const updated = [s, ...prev.slice(0, 49)];
      saveSessions(updated);
      return updated;
    });
    setStage("result");
  }, [verse, elapsed, typed, target, addPoints]);
  const beginPractice = (id) => {
    setSelectedId(id);
    setTyped("");
    setElapsed(0);
    setStartTime(0);
    setFinished(false);
    stopTimer();
    setStage("practice");
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 100);
  };
  const formatTime = (ms) => {
    const s = Math.floor(ms / 1e3);
    const m = Math.floor(s / 60);
    return m > 0 ? `${m}m ${s % 60}s` : `${s}s`;
  };
  const recentSessions = sessions.slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ श्लोक-लेखन ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Shloka Typing Practice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm italic", children: '"Write the sacred words — let every keystroke be a devotion"' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      stage === "select" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-6 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-verse-number", children: "DIFFICULTY" }),
              ["all", "easy", "medium", "hard"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `typing.diff.${d}`,
                  onClick: () => setDiff(d),
                  className: "px-3 py-1.5 rounded border font-body text-sm transition-smooth",
                  style: {
                    borderColor: diff === d ? "oklch(var(--accent))" : "oklch(var(--border))",
                    background: diff === d ? "oklch(var(--accent)/0.15)" : "oklch(var(--card)/0.6)",
                    color: diff === d ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))"
                  },
                  children: DIFF_LABEL[d]
                },
                d
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: filteredVerses.map((v, i) => {
              const prevSession = sessions.find((s) => s.verseId === v.id);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  type: "button",
                  "data-ocid": `typing.verse.${i + 1}`,
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.05 },
                  onClick: () => beginPractice(v.id),
                  className: "text-left sacred-card-hover flex items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "shrink-0 w-14 h-14 rounded-full border border-accent/40 flex flex-col items-center justify-center",
                        style: { background: "oklch(var(--accent)/0.08)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs font-bold text-accent", children: v.id }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `text-xs font-body mt-0.5 ${v.diff === "easy" ? "text-green-600" : v.diff === "medium" ? "text-yellow-600" : "text-red-600"}`,
                              children: v.diff
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base italic font-semibold text-foreground", children: v.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-xs text-muted-foreground truncate mt-0.5", children: [
                        v.sanskrit.substring(0, 52),
                        "…"
                      ] })
                    ] }),
                    prevSession && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-sm font-bold text-accent", children: [
                        prevSession.wpm,
                        " WPM"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground", children: "Best" })
                    ] })
                  ]
                },
                v.id
              );
            }) }),
            recentSessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", "data-ocid": "typing.history_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornate-rule mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-accent text-sm", children: "Recent Practice" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sacred-card overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full font-body text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-verse-number font-normal pr-4", children: "VERSE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-verse-number font-normal pr-4", children: "WPM" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-verse-number font-normal pr-4", children: "ERRORS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-verse-number font-normal", children: "DATE" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: recentSessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "border-b border-border/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-accent font-bold", children: s.verseId }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-foreground", children: s.wpm }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-foreground", children: s.errors }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: new Date(s.completedAt).toLocaleDateString(
                        "en-IN",
                        { dateStyle: "short" }
                      ) })
                    ]
                  },
                  s.completedAt
                )) })
              ] }) })
            ] })
          ]
        },
        "select"
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
                onClick: () => {
                  stopTimer();
                  setStage("select");
                },
                className: "mb-4 text-muted-foreground font-body text-sm",
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-verse-number", children: [
                  verse.id,
                  " — ",
                  verse.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 font-body text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "⏱ ",
                    formatTime(elapsed)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: accuracy >= 90 ? "text-green-600" : accuracy >= 70 ? "text-yellow-600" : "text-red-600",
                      children: [
                        accuracy,
                        "% acc"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent font-bold", children: [
                    wpm,
                    " WPM"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded mb-6 bg-muted/30 border border-accent/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-2", children: "REFERENCE VERSE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body leading-loose text-foreground",
                    style: { fontSize: "1.1rem" },
                    children: verse.sanskrit
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "parchment-section rounded p-4 mb-4 min-h-[60px] font-body leading-loose",
                  style: { fontSize: "1.1rem" },
                  children: [
                    chars.map((c, i) => {
                      const charKey = `${target.charCodeAt(i)}-${i}`;
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            color: c.state === "correct" ? "oklch(0.50 0.18 140)" : c.state === "error" ? "oklch(0.55 0.22 22)" : "oklch(var(--muted-foreground))",
                            background: c.state === "error" ? "oklch(0.95 0.1 22 / 0.3)" : "transparent",
                            borderBottom: i === typed.length ? "2px solid oklch(var(--accent))" : "none"
                          },
                          children: c.ch
                        },
                        charKey
                      );
                    }),
                    typed.length >= target.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: { borderLeft: "2px solid oklch(var(--accent))" },
                        children: " "
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "typing-input", className: "text-verse-number", children: "TYPE THE VERSE BELOW" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "typing-input",
                    ref: inputRef,
                    "data-ocid": "typing.input",
                    type: "text",
                    value: typed,
                    onChange: (e) => handleTyping(e.target.value),
                    disabled: finished,
                    placeholder: "Begin typing the Sanskrit verse…",
                    className: "w-full rounded border border-accent/30 bg-card/80 px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    autoComplete: "off",
                    spellCheck: false
                  }
                )
              ] }),
              finished && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  className: "mt-4 p-4 rounded text-center",
                  style: {
                    background: "oklch(var(--accent)/0.1)",
                    border: "1px solid oklch(var(--accent)/0.4)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-accent mb-2", children: "🏆 Verse Complete!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground mb-4", children: [
                      wpm,
                      " WPM · ",
                      accuracy,
                      "% accuracy · ",
                      formatTime(elapsed)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "typing.complete_button",
                        onClick: completeSession,
                        className: "font-display font-bold text-primary-foreground shadow-warm-glow",
                        style: { background: "oklch(var(--accent))" },
                        children: "✦ Save Score & Earn Points"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1.5 rounded-full bg-muted/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all",
                  style: {
                    width: `${Math.round(typed.length / Math.max(target.length, 1) * 100)}%`,
                    background: "linear-gradient(90deg, oklch(0.72 0.28 52), oklch(0.60 0.22 34))"
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mt-1 text-right", children: [
                typed.length,
                " / ",
                target.length,
                " characters"
              ] })
            ] })
          ] })
        },
        "practice"
      ),
      stage === "result" && verse && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sacred-card p-6 text-center", children: (() => {
            const last = sessions[0];
            const accFinal = last && last.verseId === verse.id ? Math.round(
              (1 - last.errors / Math.max(target.length, 1)) * 100
            ) : accuracy;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: accFinal >= 95 ? "🏆" : accFinal >= 80 ? "✨" : "🌱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl italic mb-4 text-foreground", children: accFinal >= 95 ? "Perfect Accuracy!" : accFinal >= 80 ? "Well Done!" : "Practice Makes Perfect" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-8 mb-6", children: [
                { label: "WPM", value: (last == null ? void 0 : last.wpm) ?? wpm },
                { label: "Accuracy", value: `${accFinal}%` },
                { label: "Errors", value: (last == null ? void 0 : last.errors) ?? 0 },
                { label: "Time", value: formatTime(elapsed) }
              ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-accent", children: value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground mt-0.5", children: label })
              ] }, label)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "typing.retry_button",
                    variant: "outline",
                    onClick: () => beginPractice(verse.id),
                    className: "border-accent/40 text-accent font-body",
                    children: "Practice Again"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "typing.select_button",
                    onClick: () => setStage("select"),
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
  TypingPracticePage
};
