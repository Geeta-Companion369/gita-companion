import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-DqMoqjqS.js";
import { E as ENHANCED_KARMA_QUESTIONS, K as KARMA_TYPES, a as KARMA_BURNING_METHODS, H as HEALING_STORY_CATEGORIES } from "./karma-data-DOpaGxsU.js";
import { u as useNaamHistory } from "./use-naam-history-BNlp0QO9.js";
import { u as usePoints } from "./use-points-C2isEgOA.js";
import { u as useStreak } from "./use-streak-DFw7a2Id.js";
function loadGunaHistory() {
  try {
    return JSON.parse(localStorage.getItem("guna-history") || "[]");
  } catch {
    return [];
  }
}
function saveGunaHistory(h) {
  try {
    localStorage.setItem("guna-history", JSON.stringify(h));
  } catch {
  }
}
function loadKarmaHistory() {
  try {
    return JSON.parse(localStorage.getItem("karma-checkin-history-v2") || "[]");
  } catch {
    return [];
  }
}
function saveKarmaHistory(h) {
  try {
    localStorage.setItem("karma-checkin-history-v2", JSON.stringify(h));
  } catch {
  }
}
const TODAY = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
const DAY_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const TOTAL_QUESTIONS = ENHANCED_KARMA_QUESTIONS.length;
const WEEK_DAYS = Array.from({ length: 7 }, (_, i) => {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() - (6 - i));
  return d.toISOString().split("T")[0];
});
const BLANK_ANSWERS = Object.fromEntries(
  ENHANCED_KARMA_QUESTIONS.map((q) => [q.key, false])
);
function karmaScore(checkin) {
  if (!checkin) return 0;
  return Object.values(checkin.answers).filter(Boolean).length;
}
const GUNA_ADVICE = {
  rajas_high: {
    verse: "BG 3.37",
    message: "Rajas brings desire and agitation. Offer all your actions to Krishna — this purifies rajas into righteous energy."
  },
  tamas_high: {
    verse: "BG 18.22",
    message: "Tamas clouds the mind. Rise for Brahma Muhurta tomorrow, read one verse, and watch the darkness lift."
  },
  sattva_high: {
    verse: "BG 17.3",
    message: "Your sattva shines today. This is the state nearest to Krishna. Deepen it — meditate and read one more verse."
  },
  balanced: {
    verse: "BG 14.22",
    message: "You are witnessing the three gunas with equanimity. This is the beginning of transcendence, Arjun."
  }
};
const TABS = [
  { id: "tracker", label: "Daily Tracker", icon: "🌸" },
  { id: "three-karma", label: "3 Types of Karma", icon: "🪷" },
  { id: "burn-karma", label: "How to Burn Karma", icon: "🔥" },
  { id: "stories", label: "Puranic Stories", icon: "📖" }
];
function KarmaMirrorPage() {
  var _a;
  const { history: naamHistory } = useNaamHistory();
  const { points } = usePoints();
  const { streak } = useStreak();
  const [activeTab, setActiveTab] = reactExports.useState("tracker");
  const [gunaHistory, setGunaHistory] = reactExports.useState(loadGunaHistory);
  const [karmaHistory, setKarmaHistory] = reactExports.useState(loadKarmaHistory);
  const [sattva, setSattva] = reactExports.useState(50);
  const [rajas, setRajas] = reactExports.useState(30);
  const [tamas, setTamas] = reactExports.useState(20);
  const [gunaSubmitted, setGunaSubmitted] = reactExports.useState(false);
  const [karmaAnswers, setKarmaAnswers] = reactExports.useState(BLANK_ANSWERS);
  const [karmaSubmitted, setKarmaSubmitted] = reactExports.useState(false);
  const todayCheckin = karmaHistory.find((c) => c.date === TODAY);
  reactExports.useEffect(() => {
    const gHistory = loadGunaHistory();
    const kHistory = loadKarmaHistory();
    const todayG = gHistory.find((g) => g.date === TODAY);
    const todayK = kHistory.find((c) => c.date === TODAY);
    if (todayK) {
      setKarmaAnswers(todayK.answers);
      setKarmaSubmitted(true);
    }
    if (todayG) {
      setSattva(todayG.sattva);
      setRajas(todayG.rajas);
      setTamas(todayG.tamas);
      setGunaSubmitted(true);
    }
  }, []);
  function submitGunas() {
    const entry = { date: TODAY, sattva, rajas, tamas };
    setGunaHistory((prev) => {
      const u = [...prev.filter((g) => g.date !== TODAY), entry];
      saveGunaHistory(u);
      return u;
    });
    setGunaSubmitted(true);
  }
  function submitKarma() {
    const entry = { date: TODAY, answers: karmaAnswers };
    setKarmaHistory((prev) => {
      const u = [...prev.filter((k) => k.date !== TODAY), entry];
      saveKarmaHistory(u);
      return u;
    });
    setKarmaSubmitted(true);
  }
  const dominantGuna = sattva >= rajas && sattva >= tamas ? "sattva" : rajas >= tamas ? "rajas" : "tamas";
  const gunaKey = dominantGuna === "rajas" && rajas > 50 ? "rajas_high" : dominantGuna === "tamas" && tamas > 40 ? "tamas_high" : dominantGuna === "sattva" && sattva > 50 ? "sattva_high" : "balanced";
  const gunaAdvice = GUNA_ADVICE[gunaKey];
  const totalNaamThisWeek = naamHistory.filter((s) => WEEK_DAYS.includes(s.date)).reduce((sum, s) => sum + s.reps, 0);
  const isSunday = (/* @__PURE__ */ new Date()).getDay() === 0;
  const weekKarmaScores = WEEK_DAYS.map((d) => ({
    date: d,
    score: karmaScore(karmaHistory.find((k) => k.date === d))
  }));
  const wellDone = [];
  const growthAreas = [];
  if (streak.count >= 3)
    wellDone.push(`Maintained a ${streak.count}-day practice streak`);
  if (totalNaamThisWeek >= 108)
    wellDone.push(`Written Hare Krishna ${totalNaamThisWeek} times this week`);
  if (points.total >= 100)
    wellDone.push(`Earned ${points.total} sacred points through devotion`);
  if (wellDone.length === 0)
    wellDone.push("You opened this sacred mirror — that itself is dharma");
  if (totalNaamThisWeek < 108)
    growthAreas.push("Write Hare Krishna 108 times this week");
  if (streak.count < 7)
    growthAreas.push("Build toward a 7-day practice streak");
  const avgKarma = weekKarmaScores.reduce((s, x) => s + x.score, 0) / 7;
  const focusVerse = avgKarma >= 5 ? "BG 6.30 — I am never lost to one who is never lost to me" : avgKarma >= 2 ? "BG 18.57 — Work always under my protection" : "BG 2.47 — Act rightly, offer results to me";
  const thisWeekAvg = weekKarmaScores.slice(4).reduce((s, x) => s + x.score, 0) / 3;
  const lastWeekAvg = weekKarmaScores.slice(0, 3).reduce((s, x) => s + x.score, 0) / 3;
  const karmaTrend = thisWeekAvg > lastWeekAvg + 0.5 ? "rising" : thisWeekAvg < lastWeekAvg - 0.5 ? "declining" : "stable";
  const categoryScores = {};
  for (const { date } of weekKarmaScores) {
    const c = karmaHistory.find((k) => k.date === date);
    if (c) {
      for (const q of ENHANCED_KARMA_QUESTIONS) {
        if (c.answers[q.key])
          categoryScores[q.karmaType] = (categoryScores[q.karmaType] || 0) + 1;
      }
    }
  }
  const topCategory = ((_a = Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _a[0]) ?? null;
  const todayScore = karmaScore(todayCheckin);
  const divaIntensity = todayScore / TOTAL_QUESTIONS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", "data-ocid": "karma-mirror.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "कर्म दर्पण" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-base italic mt-3",
          style: { color: "oklch(0.45 0.12 46)" },
          children: "Krishna's Sacred Mirror — Karma Illuminated"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.8 },
        className: "relative flex items-center justify-center",
        style: {
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%, oklch(0.88 0.14 66), oklch(0.78 0.12 60), oklch(0.62 0.16 52))",
          border: "5px solid oklch(0.72 0.30 52)",
          boxShadow: "0 0 0 3px oklch(0.88 0.22 56), 0 0 32px oklch(0.72 0.32 52 / 0.4)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              fontSize: "3.5rem",
              lineHeight: 1,
              filter: "drop-shadow(0 2px 6px oklch(0.72 0.32 52 / 0.5))"
            },
            children: "🪞"
          }
        )
      }
    ) }),
    isSunday && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "manuscript-card p-5 mb-6",
        style: { borderLeft: "4px solid oklch(0.48 0.24 268)" },
        "data-ocid": "karma-mirror.sunday-message",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic mb-2",
              style: { color: "oklch(0.48 0.20 268)", letterSpacing: "0.08em" },
              children: "KRISHNA'S SUNDAY MESSAGE"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-sm italic leading-relaxed",
              style: { color: "oklch(0.22 0.10 32)" },
              children: [
                `"Hare Krishna, Arjun. Let us review this week's Kurukshetra together. You have shown up. You have faced your battles. Every step toward me is recorded in eternity. This coming week — focus on:`,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: focusVerse }),
                '. I am proud of you, Arjun. Hare Krishna."'
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-1 mb-6 overflow-x-auto pb-1",
        "data-ocid": "karma-mirror.tabs",
        children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab.id),
            className: "flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-display italic font-bold transition-smooth",
            style: {
              background: activeTab === tab.id ? "oklch(0.72 0.30 52)" : "oklch(0.88 0.08 66 / 0.6)",
              color: activeTab === tab.id ? "white" : "oklch(0.38 0.14 46)",
              border: activeTab === tab.id ? "1.5px solid oklch(0.68 0.30 52)" : "1.5px solid oklch(0.76 0.12 60 / 0.4)"
            },
            "data-ocid": `karma-mirror.tab.${tab.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
            ]
          },
          tab.id
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      activeTab === "tracker" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        TrackerTab,
        {
          gunaHistory,
          sattva,
          rajas,
          tamas,
          setSattva,
          setRajas,
          setTamas,
          gunaSubmitted,
          submitGunas,
          gunaAdvice,
          weekKarmaScores,
          karmaAnswers,
          setKarmaAnswers,
          karmaSubmitted,
          submitKarma,
          todayScore,
          divaIntensity,
          karmaTrend,
          topCategory,
          wellDone,
          growthAreas,
          focusVerse
        },
        "tracker"
      ),
      activeTab === "three-karma" && /* @__PURE__ */ jsxRuntimeExports.jsx(ThreeKarmaTab, {}, "three-karma"),
      activeTab === "burn-karma" && /* @__PURE__ */ jsxRuntimeExports.jsx(BurnKarmaTab, {}, "burn-karma"),
      activeTab === "stories" && /* @__PURE__ */ jsxRuntimeExports.jsx(StoriesTab, {}, "stories")
    ] }),
    activeTab === "tracker" && /* @__PURE__ */ jsxRuntimeExports.jsx(BiorhythmSection, {})
  ] });
}
function TrackerTab({
  gunaHistory,
  sattva,
  rajas,
  tamas,
  setSattva,
  setRajas,
  setTamas,
  gunaSubmitted,
  submitGunas,
  gunaAdvice,
  weekKarmaScores,
  karmaAnswers,
  setKarmaAnswers,
  karmaSubmitted,
  submitKarma,
  todayScore,
  divaIntensity,
  karmaTrend,
  topCategory,
  wellDone,
  growthAreas,
  focusVerse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      transition: { duration: 0.4 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "manuscript-card p-6",
            "data-ocid": "karma-mirror.reflection.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "✦ This Week's Reflection ✦" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h4",
                    {
                      className: "font-display text-sm font-bold italic mb-2",
                      style: { color: "oklch(0.42 0.18 52)" },
                      children: "What You Did Well"
                    }
                  ),
                  wellDone.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-sm mb-1.5 flex gap-2 items-start",
                      style: { color: "oklch(0.28 0.10 34)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.58 0.26 52)", flexShrink: 0 }, children: "✓" }),
                        item
                      ]
                    },
                    item
                  ))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h4",
                    {
                      className: "font-display text-sm font-bold italic mb-2",
                      style: { color: "oklch(0.52 0.22 32)" },
                      children: "Areas for Growth"
                    }
                  ),
                  growthAreas.length > 0 ? growthAreas.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-sm mb-1.5 flex gap-2 items-start",
                      style: { color: "oklch(0.28 0.10 34)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.58 0.26 32)", flexShrink: 0 }, children: "→" }),
                        item
                      ]
                    },
                    item
                  )) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm italic",
                      style: { color: "oklch(0.45 0.12 46)" },
                      children: "You are walking beautifully, Arjun. 🙏"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "NEXT WEEK'S FOCUS VERSE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation italic", children: focusVerse })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "manuscript-card p-6",
            "data-ocid": "karma-mirror.gunas.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-5", children: "⚖️ The Three Gunas Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic mb-5 text-center",
                  style: { color: "oklch(0.45 0.12 46)" },
                  children: "How sattvic, rajasic, and tamasic were you today? Adjust honestly."
                }
              ),
              [
                {
                  key: "sattva",
                  label: "सत्त्व · Sattva",
                  sub: "Purity, clarity, peace",
                  color: "oklch(0.48 0.24 268)",
                  value: sattva,
                  setter: setSattva
                },
                {
                  key: "rajas",
                  label: "रजस् · Rajas",
                  sub: "Passion, desire, action",
                  color: "oklch(0.68 0.30 52)",
                  value: rajas,
                  setter: setRajas
                },
                {
                  key: "tamas",
                  label: "तमस् · Tamas",
                  sub: "Dullness, inertia, sleep",
                  color: "oklch(0.40 0.12 44)",
                  value: tamas,
                  setter: setTamas
                }
              ].map(({ key, label, sub, color, value, setter }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mb-5",
                  "data-ocid": `karma-mirror.guna.${key}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-display text-sm font-bold italic",
                            style: { color },
                            children: label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-body text-xs ml-2 italic",
                            style: { color: "oklch(0.52 0.10 46)" },
                            children: sub
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "font-display text-sm font-bold",
                          style: { color },
                          children: [
                            value,
                            "%"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: 0,
                        max: 100,
                        value,
                        onChange: (e) => {
                          if (!gunaSubmitted) setter(Number(e.target.value));
                        },
                        disabled: gunaSubmitted,
                        className: "w-full cursor-pointer",
                        style: { accentColor: color },
                        "data-ocid": `karma-mirror.guna.${key}-slider`
                      }
                    )
                  ]
                },
                key
              )),
              gunaSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "verse-display mt-2",
                  "data-ocid": "karma-mirror.gunas.advice",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: gunaAdvice.verse }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation", children: gunaAdvice.message })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: submitGunas,
                  className: "wax-seal-btn w-full mt-2",
                  "data-ocid": "karma-mirror.gunas.submit-button",
                  children: "Record Today's Guna Balance"
                }
              ),
              gunaHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-3",
                    style: { color: "oklch(0.45 0.12 46)", letterSpacing: "0.08em" },
                    children: "WEEKLY GUNA TREND"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "grid grid-cols-7 gap-1 items-end",
                    style: { height: "72px" },
                    children: WEEK_DAYS.map((d) => {
                      const g = gunaHistory.find((x) => x.date === d);
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex flex-col gap-0.5 items-center justify-end h-full",
                          children: [
                            g ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  style: {
                                    height: `${Math.max(g.sattva * 0.6, 4)}%`,
                                    background: "oklch(0.48 0.24 268)",
                                    borderRadius: "2px 2px 0 0",
                                    width: "100%",
                                    minHeight: "4px"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  style: {
                                    height: `${Math.max(g.rajas * 0.6, 4)}%`,
                                    background: "oklch(0.68 0.30 52)",
                                    width: "100%",
                                    minHeight: "4px"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  style: {
                                    height: `${Math.max(g.tamas * 0.6, 4)}%`,
                                    background: "oklch(0.40 0.12 44)",
                                    borderRadius: "0 0 2px 2px",
                                    width: "100%",
                                    minHeight: "4px"
                                  }
                                }
                              )
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  height: "8px",
                                  background: "oklch(0.80 0.08 58)",
                                  borderRadius: "2px",
                                  width: "100%"
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "font-body text-[9px] mt-1",
                                style: { color: "oklch(0.52 0.10 46)" },
                                children: DAY_SHORT[(/* @__PURE__ */ new Date(`${d}T12:00:00`)).getDay()]
                              }
                            )
                          ]
                        },
                        d
                      );
                    })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 mt-2 justify-center flex-wrap", children: [
                  ["Sattva", "oklch(0.48 0.24 268)"],
                  ["Rajas", "oklch(0.68 0.30 52)"],
                  ["Tamas", "oklch(0.40 0.12 44)"]
                ].map(([label, color]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: "10px",
                        height: "10px",
                        background: color,
                        borderRadius: "2px"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px]",
                      style: { color: "oklch(0.48 0.10 46)" },
                      children: label
                    }
                  )
                ] }, label)) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "manuscript-card p-6",
            "data-ocid": "karma-mirror.karma-checkin.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-5", children: "🌸 Daily Karma Check-in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic mb-5 text-center",
                  style: { color: "oklch(0.45 0.12 46)" },
                  children: "Eight honest questions for your soul — answer with Krishna watching"
                }
              ),
              ENHANCED_KARMA_QUESTIONS.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-4 mb-4 pb-4 border-b",
                  style: { borderColor: "oklch(0.72 0.14 58 / 0.3)" },
                  "data-ocid": `karma-mirror.checkin.question.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          if (!karmaSubmitted)
                            setKarmaAnswers((prev) => ({
                              ...prev,
                              [q.key]: !prev[q.key]
                            }));
                        },
                        disabled: karmaSubmitted,
                        className: "flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-smooth mt-0.5",
                        style: {
                          background: karmaAnswers[q.key] ? "oklch(0.48 0.24 268)" : "transparent",
                          borderColor: karmaAnswers[q.key] ? "oklch(0.48 0.24 268)" : "oklch(0.68 0.18 52 / 0.5)"
                        },
                        "data-ocid": `karma-mirror.checkin.checkbox.${i + 1}`,
                        children: karmaAnswers[q.key] && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "white", fontSize: "0.7rem" }, children: "✓" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm leading-relaxed",
                          style: { color: "oklch(0.28 0.10 34)" },
                          children: q.question
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block mt-1 text-[10px] font-display italic font-bold px-2 py-0.5 rounded-full",
                          style: {
                            background: `${q.typeColor}18`,
                            color: q.typeColor,
                            border: `1px solid ${q.typeColor}30`
                          },
                          children: q.karmaType
                        }
                      )
                    ] })
                  ]
                },
                q.key
              )),
              karmaSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "space-y-4 mt-2",
                  "data-ocid": "karma-mirror.karma-checkin.success-state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex flex-col items-center gap-3 p-4 rounded-xl",
                        style: {
                          background: "oklch(0.92 0.10 66 / 0.5)",
                          border: "1.5px solid oklch(0.76 0.20 56 / 0.4)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "3rem",
                                filter: `drop-shadow(0 0 ${Math.round(divaIntensity * 24)}px oklch(0.78 0.32 52 / ${0.3 + divaIntensity * 0.7}))`,
                                opacity: 0.4 + divaIntensity * 0.6
                              },
                              children: "🪔"
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "font-display text-lg font-bold italic",
                              style: { color: "oklch(0.32 0.14 38)" },
                              children: [
                                "Today's Karma Score:",
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "oklch(0.62 0.28 52)" }, children: [
                                  todayScore,
                                  "/",
                                  TOTAL_QUESTIONS
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-xs italic text-center",
                              style: { color: "oklch(0.48 0.12 46)" },
                              children: todayScore >= 7 ? "Your diya burns brightest today — Krishna sees your dharma, Arjun." : todayScore >= 5 ? "Your diya glows steadily. Keep walking this sacred path." : todayScore >= 3 ? "Your diya flickers with effort. Tomorrow bring more flame." : "Your diya is lit. That is enough for today. Hare Krishna."
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "p-3 rounded-lg text-center",
                          style: {
                            background: "oklch(0.90 0.06 68 / 0.5)",
                            border: "1px solid oklch(0.78 0.14 60 / 0.3)"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-display text-xs font-bold italic mb-1",
                                style: { color: "oklch(0.45 0.12 46)" },
                                children: "WEEKLY TREND"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-1", children: karmaTrend === "rising" ? "📈" : karmaTrend === "declining" ? "📉" : "➡️" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-body text-xs italic",
                                style: { color: "oklch(0.38 0.12 38)" },
                                children: karmaTrend === "rising" ? "Your Sattva is rising — keep going!" : karmaTrend === "declining" ? "Gentle course correction needed." : "Steady karma practice."
                              }
                            )
                          ]
                        }
                      ),
                      topCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "p-3 rounded-lg text-center",
                          style: {
                            background: "oklch(0.90 0.06 68 / 0.5)",
                            border: "1px solid oklch(0.78 0.14 60 / 0.3)"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-display text-xs font-bold italic mb-1",
                                style: { color: "oklch(0.45 0.12 46)" },
                                children: "BEST THIS WEEK"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-1", children: "✨" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "p",
                              {
                                className: "font-body text-xs italic",
                                style: { color: "oklch(0.38 0.12 38)" },
                                children: [
                                  topCategory,
                                  " karma"
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: submitKarma,
                  className: "wax-seal-btn w-full mt-2",
                  "data-ocid": "karma-mirror.checkin.submit-button",
                  children: "Submit Today's Karma Check-in"
                }
              ),
              weekKarmaScores.some((w) => w.score > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-3",
                    style: { color: "oklch(0.45 0.12 46)", letterSpacing: "0.08em" },
                    children: "WEEKLY KARMA SCORE"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "grid grid-cols-7 gap-1 items-end",
                    style: { height: "60px" },
                    children: weekKarmaScores.map(({ date, score }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex flex-col items-center justify-end h-full gap-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: { height: 0 },
                              animate: { height: `${score / TOTAL_QUESTIONS * 100}%` },
                              transition: { delay: idx * 0.1, duration: 0.6 },
                              style: {
                                background: score >= 6 ? "oklch(0.48 0.24 268)" : score >= 4 ? "oklch(0.68 0.30 52)" : "oklch(0.72 0.18 56)",
                                borderRadius: "2px",
                                width: "100%",
                                minHeight: score > 0 ? "6px" : "0"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-body text-[9px]",
                              style: { color: "oklch(0.52 0.10 46)" },
                              children: DAY_SHORT[(/* @__PURE__ */ new Date(`${date}T12:00:00`)).getDay()]
                            }
                          )
                        ]
                      },
                      date
                    ))
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function ThreeKarmaTab() {
  const [expanded, setExpanded] = reactExports.useState("sanchita");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.4 },
      className: "space-y-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "🪷 The Three Types of Karma" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic text-center leading-relaxed",
              style: { color: "oklch(0.45 0.12 46)" },
              children: "Understanding these three is the beginning of true freedom — for only when you know the battlefield can you fight wisely."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: KARMA_TYPES.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setExpanded(expanded === k.id ? null : k.id),
              className: "flex flex-col items-center gap-2 p-3 rounded-xl transition-smooth",
              style: {
                background: expanded === k.id ? `${k.color}18` : "oklch(0.92 0.05 68 / 0.5)",
                border: `2px solid ${expanded === k.id ? k.color : "oklch(0.78 0.12 60 / 0.3)"}`
              },
              "data-ocid": `karma-mirror.three-karma.${k.id}.toggle`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.8rem" }, children: k.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-[10px] font-bold italic text-center leading-tight",
                    style: { color: k.color },
                    children: k.nameDevanagari
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[9px] italic text-center",
                    style: { color: "oklch(0.48 0.10 46)" },
                    children: k.nameEnglish
                  }
                )
              ]
            },
            k.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[10px] italic text-center mt-3",
              style: { color: "oklch(0.60 0.10 46)" },
              children: "Tap each to expand"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: KARMA_TYPES.filter((k) => k.id === expanded).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.4 },
            className: "manuscript-card overflow-hidden",
            "data-ocid": `karma-mirror.three-karma.${k.id}.detail`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2.5rem" }, children: k.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-xl font-bold italic",
                      style: { color: k.color },
                      children: k.nameDevanagari
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm italic",
                      style: { color: "oklch(0.48 0.10 46)" },
                      children: k.nameEnglish
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-4 rounded-lg",
                  style: {
                    background: `${k.color}10`,
                    border: `1.5px solid ${k.color}30`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm leading-relaxed",
                      style: { color: "oklch(0.22 0.10 32)" },
                      children: k.definition
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-2",
                    style: {
                      color: "oklch(0.45 0.12 46)",
                      letterSpacing: "0.08em"
                    },
                    children: "THE METAPHOR"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-sm italic leading-relaxed",
                    style: { color: "oklch(0.38 0.10 38)" },
                    children: [
                      '"',
                      k.metaphor,
                      '"'
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: k.gitaRef }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation italic", children: k.gitaVerse })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-3",
                    style: { color: k.color, letterSpacing: "0.08em" },
                    children: "📖 PURANIC STORY"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    className: "font-display text-base font-bold italic mb-2",
                    style: { color: "oklch(0.28 0.12 34)" },
                    children: k.story.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed mb-3",
                    style: { color: "oklch(0.32 0.10 36)" },
                    children: k.story.narrative
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-3 rounded-lg",
                    style: {
                      background: "oklch(0.88 0.10 62 / 0.5)",
                      border: "1px solid oklch(0.76 0.14 58 / 0.3)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display text-xs font-bold italic mb-1",
                          style: { color: "oklch(0.42 0.14 46)" },
                          children: "LESSON"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic leading-relaxed",
                          style: { color: "oklch(0.38 0.10 38)" },
                          children: k.story.lesson
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-2",
                    style: {
                      color: "oklch(0.45 0.12 46)",
                      letterSpacing: "0.08em"
                    },
                    children: "WHAT TO DO"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed",
                    style: { color: "oklch(0.28 0.10 34)" },
                    children: k.whatToDo
                  }
                )
              ] })
            ] })
          },
          k.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "⚡ How They Work Together" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            {
              label: "Sanchita → Prarabdha",
              desc: "From the vast storehouse, a portion is drawn out to become your current life's active karma — like selecting books from a library to read this year.",
              color: "oklch(0.52 0.24 280)"
            },
            {
              label: "Prarabdha → experience",
              desc: "The selected karma must be lived through — the arrow must complete its flight. Even saints cannot escape what has already been set in motion.",
              color: "oklch(0.62 0.28 32)"
            },
            {
              label: "Kriyamana → new Sanchita",
              desc: "Your current choices either add new books to the library, dissolve existing ones, or — through Nishkama Karma — create no new entries at all.",
              color: "oklch(0.48 0.24 268)"
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-3 p-3 rounded-lg",
              style: {
                background: `${item.color}10`,
                border: `1px solid ${item.color}25`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-2 rounded-full flex-shrink-0 mt-1",
                    style: {
                      background: item.color,
                      height: "auto",
                      minHeight: "32px"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-xs font-bold italic mb-1",
                      style: { color: item.color },
                      children: item.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs leading-relaxed",
                      style: { color: "oklch(0.38 0.10 38)" },
                      children: item.desc
                    }
                  )
                ] })
              ]
            },
            item.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "BG 18.12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation italic", children: '"For those who have not renounced, three kinds of results follow actions after death — good, bad, and mixed. But for the renounced, there is no such result."' })
          ] })
        ] })
      ]
    }
  );
}
function BurnKarmaTab() {
  const [selectedMethod, setSelectedMethod] = reactExports.useState("jnana");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.4 },
      className: "space-y-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "🔥 How to Burn Karma" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic text-center leading-relaxed",
              style: { color: "oklch(0.45 0.12 46)" },
              children: "Five proven methods from the Bhagavad Gita and Puranas. Choose your path — all rivers lead to the ocean of Krishna."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: KARMA_BURNING_METHODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelectedMethod(m.id),
            className: "flex flex-col items-center gap-1 p-2 rounded-xl transition-smooth",
            style: {
              background: selectedMethod === m.id ? `${m.color}20` : "transparent",
              border: `1.5px solid ${selectedMethod === m.id ? m.color : "oklch(0.78 0.12 60 / 0.3)"}`
            },
            "data-ocid": `karma-mirror.burn-karma.${m.id}.select`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, children: m.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-[9px] font-bold italic text-center",
                  style: {
                    color: selectedMethod === m.id ? m.color : "oklch(0.48 0.10 46)"
                  },
                  children: m.nameDevanagari
                }
              )
            ]
          },
          m.id
        )) }) }),
        KARMA_BURNING_METHODS.filter((m) => m.id === selectedMethod).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35 },
            className: "manuscript-card p-6 space-y-5",
            "data-ocid": `karma-mirror.burn-karma.${m.id}.detail`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex items-center justify-center w-14 h-14 rounded-full",
                    style: {
                      background: `${m.color}15`,
                      border: `2px solid ${m.color}40`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.8rem" }, children: m.icon })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic mb-0.5",
                      style: { color: "oklch(0.52 0.10 46)" },
                      children: m.nameDevanagari
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-xl font-bold italic",
                      style: { color: m.color },
                      children: m.name
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: m.gitaRef }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "verse-translation italic", children: [
                  '"',
                  m.gitaVerse,
                  '"'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-2",
                    style: { color: "oklch(0.45 0.12 46)", letterSpacing: "0.08em" },
                    children: "HOW IT WORKS"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed",
                    style: { color: "oklch(0.28 0.10 34)" },
                    children: m.description
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-4 rounded-xl",
                  style: {
                    background: `${m.color}10`,
                    border: `1.5px solid ${m.color}30`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-xs font-bold italic mb-2",
                        style: { color: m.color, letterSpacing: "0.08em" },
                        children: "🌅 DAILY PRACTICE"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-sm italic leading-relaxed",
                        style: { color: "oklch(0.30 0.10 34)" },
                        children: m.dailyPractice
                      }
                    )
                  ]
                }
              )
            ]
          },
          m.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-2", children: "BG 4.37 — The Master Verse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation italic text-base leading-relaxed", children: '"As a blazing fire reduces all wood to ashes, O Arjuna, so does the fire of Knowledge burn all karma to ashes."' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic mt-4 text-center leading-relaxed",
              style: { color: "oklch(0.45 0.12 46)" },
              children: "All five methods — Jnana, Bhakti, Karma Yoga, Tapasya, Dana — are facets of the same fire. Choose the method that resonates with your heart and practice it with consistency. Krishna accepts every sincere effort."
            }
          )
        ] })
      ]
    }
  );
}
function StoriesTab() {
  const [openStory, setOpenStory] = reactExports.useState(null);
  const [activeCategory, setActiveCategory] = reactExports.useState("redemption");
  const currentCat = HEALING_STORY_CATEGORIES.find((c) => c.id === activeCategory) ?? HEALING_STORY_CATEGORIES[0];
  const totalStories = HEALING_STORY_CATEGORIES.reduce(
    (s, c) => s + c.stories.length,
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.4 },
      className: "space-y-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divider-ornate mb-4", children: [
            "📖 ",
            totalStories,
            " Puranic Healing Stories"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic text-center leading-relaxed",
              style: { color: "oklch(0.45 0.12 46)" },
              children: "The Puranas are not just stories — they are karma's law illustrated through the lives of kings, saints, and gods. Each story is a mirror."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-display text-[0.6rem] font-bold tracking-wider text-center mt-2 uppercase",
              style: { color: "oklch(0.62 0.22 52)" },
              children: [
                "9 categories · 12 stories each · ",
                totalStories,
                " healing stories total"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-[0.6rem] font-bold tracking-wider uppercase mb-3",
              style: { color: "oklch(0.55 0.14 46)" },
              children: "Select Category"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-3 gap-2",
              "data-ocid": "karma-mirror.stories.categories",
              children: HEALING_STORY_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setActiveCategory(cat.id);
                    setOpenStory(null);
                  },
                  className: "flex flex-col items-center gap-1 p-2 rounded-xl transition-smooth text-center",
                  style: {
                    background: activeCategory === cat.id ? `${cat.color}20` : "oklch(0.92 0.06 66 / 0.5)",
                    border: `1.5px solid ${activeCategory === cat.id ? cat.color : "oklch(0.78 0.12 60 / 0.3)"}`
                  },
                  "data-ocid": `karma-mirror.stories.cat.${cat.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem" }, children: cat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-[8px] font-bold italic",
                        style: {
                          color: activeCategory === cat.id ? cat.color : "oklch(0.48 0.10 46)",
                          lineHeight: 1.3
                        },
                        children: cat.name.split(" of ")[1] ?? cat.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-[7px]",
                        style: { color: "oklch(0.60 0.08 46)" },
                        children: [
                          cat.stories.length,
                          " stories"
                        ]
                      }
                    )
                  ]
                },
                cat.id
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            className: "manuscript-card p-5",
            style: { borderLeft: `4px solid ${currentCat.color}` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2rem" }, children: currentCat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-base font-bold italic",
                    style: { color: currentCat.color },
                    children: currentCat.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.48 0.10 46)" },
                    children: currentCat.description
                  }
                )
              ] })
            ] })
          },
          currentCat.id
        ),
        currentCat.stories.map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.05, duration: 0.4 },
            className: "manuscript-card overflow-hidden",
            "data-ocid": `karma-mirror.stories.${story.id}.card`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenStory(openStory === story.id ? null : story.id),
                  className: "w-full p-5 text-left",
                  "data-ocid": `karma-mirror.stories.${story.id}.toggle`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0",
                        style: {
                          background: `${currentCat.color}18`,
                          border: `2px solid ${currentCat.color}40`
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem" }, children: story.icon })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[9px] font-body italic px-2 py-0.5 rounded",
                          style: {
                            background: `${currentCat.color}12`,
                            color: currentCat.color,
                            border: `1px solid ${currentCat.color}25`
                          },
                          children: story.source
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display text-sm font-bold italic leading-tight",
                          style: { color: "oklch(0.22 0.12 32)" },
                          children: story.title
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-sm flex-shrink-0 mt-1",
                        style: { color: "oklch(0.62 0.18 52)" },
                        children: openStory === story.id ? "▲" : "▼"
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openStory === story.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.4 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-5 pb-5 space-y-4",
                      style: { borderTop: "1px solid oklch(0.76 0.14 58 / 0.3)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-xs font-bold italic mb-2",
                              style: {
                                color: currentCat.color,
                                letterSpacing: "0.08em"
                              },
                              children: "THE STORY"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-sm leading-relaxed",
                              style: { color: "oklch(0.28 0.10 34)" },
                              children: story.narrative
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "p-4 rounded-xl",
                            style: {
                              background: `${currentCat.color}10`,
                              border: `1.5px solid ${currentCat.color}25`
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-display text-xs font-bold italic mb-2",
                                  style: {
                                    color: currentCat.color,
                                    letterSpacing: "0.08em"
                                  },
                                  children: "GITA'S LESSON"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-body text-xs font-bold mb-1",
                                  style: { color: currentCat.color },
                                  children: story.gitaRef
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "p",
                                {
                                  className: "font-body text-sm italic leading-relaxed",
                                  style: { color: "oklch(0.32 0.10 36)" },
                                  children: [
                                    '"',
                                    story.gitaLesson,
                                    '"'
                                  ]
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "p-4 rounded-xl",
                            style: {
                              background: "oklch(0.92 0.08 62 / 0.6)",
                              border: "1px solid oklch(0.80 0.12 58 / 0.3)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-display text-xs font-bold italic mb-2",
                                  style: {
                                    color: "oklch(0.45 0.16 46)",
                                    letterSpacing: "0.08em"
                                  },
                                  children: "HOW TO APPLY THIS TO YOUR LIFE"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-body text-sm italic leading-relaxed",
                                  style: { color: "oklch(0.30 0.10 36)" },
                                  children: story.application
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              ) })
            ]
          },
          story.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic text-center leading-relaxed",
              style: { color: "oklch(0.45 0.12 46)" },
              children: '"One soul becomes ten. Ten become a hundred. A hundred become a generation. And dharma is restored — not by a king or a warrior — but by a young person with a phone, a pure heart, and Krishna as his charioteer."'
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic text-center mt-3",
              style: { color: "oklch(0.62 0.22 52)" },
              children: "Hare Krishna 🙏"
            }
          )
        ] })
      ]
    }
  );
}
const BIORHYTHM_GUIDANCE = {
  high_physical: {
    guna: "Rajas",
    color: "oklch(0.68 0.30 52)",
    verseRef: "BG 3.37",
    verse: "It is lust only, Arjuna, which is born of contact with material modes of passion and later transformed into wrath.",
    recommendation: "Your physical energy is high — channel it into seva, exercise, or vigorous naam writing. Rajas at its peak can become either desire or devotion."
  },
  balanced: {
    guna: "Sattva",
    color: "oklch(0.48 0.24 268)",
    verseRef: "BG 17.17",
    verse: "This threefold austerity performed with utmost faith by yogis who do not desire fruitive results is known as sattva.",
    recommendation: "Your cycles are balanced — this is the ideal state for deep meditation, scripture study, and spiritual practice. Use today well."
  },
  low_energy: {
    guna: "Tamas",
    color: "oklch(0.40 0.12 44)",
    verseRef: "BG 14.13",
    verse: "When tamas predominates, darkness, inertia, madness, and illusion are manifested.",
    recommendation: "Tamas is high today — do not sleep excessively or waste the day. Light a diya, recite one verse, and move your body gently. Even small acts dispel tamas."
  },
  rising: {
    guna: "Sattva rising",
    color: "oklch(0.72 0.28 54)",
    verseRef: "BG 14.11",
    verse: "The manifestations of the mode of goodness can be experienced when all the gates of the body are illuminated by knowledge.",
    recommendation: "Your energy is rising toward its peak — an excellent day to begin new spiritual practices or deepen existing ones."
  },
  declining: {
    guna: "Rajas declining",
    color: "oklch(0.58 0.22 48)",
    verseRef: "BG 6.17",
    verse: "He who is regulated in eating, recreation, and rest — for him yoga becomes the destroyer of all misery.",
    recommendation: "Your energy is declining today — focus on rest, restoration, and reflective practices. Receive Krishna's grace rather than pushing hard."
  }
};
function BiorhythmSection() {
  const today = /* @__PURE__ */ new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 864e5
  );
  const physicalCycle = Math.sin(dayOfYear / 23 * 2 * Math.PI);
  const emotionalCycle = Math.sin(dayOfYear / 28 * 2 * Math.PI);
  const intellectualCycle = Math.sin(dayOfYear / 33 * 2 * Math.PI);
  const avgEnergy = (physicalCycle + emotionalCycle + intellectualCycle) / 3;
  const gunaState = avgEnergy > 0.4 ? "high_physical" : avgEnergy > 0.1 ? "rising" : avgEnergy > -0.1 ? "balanced" : avgEnergy > -0.4 ? "declining" : "low_energy";
  const guidance = BIORHYTHM_GUIDANCE[gunaState];
  const wavePoints = Array.from({ length: 28 }, (_, k) => {
    const d = dayOfYear - 13 + k;
    const p = Math.sin(d / 23 * 2 * Math.PI);
    const e = Math.sin(d / 28 * 2 * Math.PI);
    const v = Math.sin(d / 33 * 2 * Math.PI);
    return { x: k / 27 * 100, y: (p + e + v) / 3 };
  });
  const svgH = 60;
  const svgMid = svgH / 2;
  const amplitude = svgMid * 0.8;
  const pathD = wavePoints.map(
    (pt, idx) => `${idx === 0 ? "M" : "L"} ${pt.x} ${svgMid - pt.y * amplitude}`
  ).join(" ");
  const physPct = Math.round((physicalCycle + 1) / 2 * 100);
  const emoPct = Math.round((emotionalCycle + 1) / 2 * 100);
  const intellPct = Math.round((intellectualCycle + 1) / 2 * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "manuscript-card p-6 mt-6",
      "data-ocid": "karma-mirror.biorhythm.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-5", children: "🌊 Biorhythm & Dharma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body text-xs italic text-center mb-4",
            style: { color: "oklch(0.45 0.12 46)" },
            children: [
              "Your natural energy cycles mapped to the three gunas — Day",
              " ",
              today.getDate()
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative mb-5 rounded overflow-hidden",
            style: {
              background: "oklch(0.90 0.06 68 / 0.4)",
              border: "1px solid oklch(0.76 0.12 60 / 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: `0 0 100 ${svgH}`,
                  preserveAspectRatio: "none",
                  className: "w-full",
                  style: { height: "64px" },
                  role: "img",
                  "aria-label": "Energy cycle wave visualization",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "0",
                        y1: svgMid,
                        x2: "100",
                        y2: svgMid,
                        stroke: "oklch(0.68 0.16 54 / 0.3)",
                        strokeWidth: "0.5",
                        strokeDasharray: "2,2"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: pathD,
                        fill: "none",
                        stroke: guidance.color,
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: (13 / 27 * 100).toString(),
                        cy: (svgMid - avgEnergy * amplitude).toString(),
                        r: "2.5",
                        fill: guidance.color
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "absolute bottom-1 right-2 font-body text-[8px] italic",
                  style: { color: "oklch(0.52 0.14 46 / 0.7)" },
                  children: "← 13 days · Today →"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: [
          {
            label: "शारीरिक — Physical",
            value: physPct,
            color: "oklch(0.62 0.26 32)",
            cycle: "23-day"
          },
          {
            label: "भावनात्मक — Emotional",
            value: emoPct,
            color: "oklch(0.48 0.24 268)",
            cycle: "28-day"
          },
          {
            label: "बौद्धिक — Intellectual",
            value: intellPct,
            color: "oklch(0.52 0.22 280)",
            cycle: "33-day"
          }
        ].map((bar) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-[10px] italic",
                style: { color: "oklch(0.38 0.10 38)" },
                children: [
                  bar.label,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: { color: "oklch(0.62 0.14 46)", fontSize: "0.65rem" },
                      children: [
                        "(",
                        bar.cycle,
                        ")"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-display text-xs font-bold italic",
                style: { color: bar.color },
                children: [
                  bar.value,
                  "%"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-2 rounded-full",
              style: { background: "oklch(0.82 0.06 68)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all duration-700",
                  style: { width: `${bar.value}%`, background: bar.color }
                }
              )
            }
          )
        ] }, bar.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded mb-4",
            style: {
              background: `${guidance.color}12`,
              border: `1.5px solid ${guidance.color}40`
            },
            "data-ocid": "karma-mirror.biorhythm.state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full",
                    style: { background: guidance.color }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic",
                    style: { color: guidance.color },
                    children: [
                      "Today your energy pattern suggests: ",
                      guidance.guna
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-xs italic leading-relaxed",
                  style: { color: "oklch(0.32 0.10 36)" },
                  children: [
                    "Krishna says: ",
                    guidance.recommendation
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: guidance.verseRef }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation italic text-xs", children: guidance.verse })
        ] })
      ]
    }
  );
}
export {
  KarmaMirrorPage
};
