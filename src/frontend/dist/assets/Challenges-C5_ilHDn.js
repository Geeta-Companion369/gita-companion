import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, a as Link } from "./index-vCKiyWhq.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
import { u as useStreak } from "./use-streak-IRvcBEqu.js";
const ALL_CHALLENGES = [
  {
    id: "t1",
    task: "Write 27 Names of Krishna",
    taskSanskrit: "कृष्ण नाम लेखन — सत्ताईस",
    instruction: "Open Naam Practice and write any mantra 27 times with full devotion. Each name is a prayer.",
    points: 20,
    action: "Begin Naam Lekhan",
    actionRoute: "/naam",
    category: "writing",
    symbol: "✍"
  },
  {
    id: "t2",
    task: "Read 3 Verses from Chapter 2",
    taskSanskrit: "अध्याय द्वितीय — तीन श्लोक",
    instruction: "Reflect on the Yoga of Knowledge. Read any three verses from Chapter 2 with contemplation.",
    points: 15,
    action: "Open Chapter 2",
    actionRoute: "/chapter/2",
    category: "reading",
    symbol: "📖"
  },
  {
    id: "t3",
    task: "Chant Om Namah Shivaya 11 Times",
    taskSanskrit: "ओम् नमः शिवाय — एकादश बार",
    instruction: "Open the Mantra Player and chant along with devotion for 11 repetitions of this sacred mantra.",
    points: 10,
    action: "Open Mantra Player",
    actionRoute: "/mantra",
    category: "listening",
    symbol: "🕉"
  },
  {
    id: "t4",
    task: "Complete a Full Mala — 108 Beads",
    taskSanskrit: "पूर्ण माला — अष्टोत्तरशत",
    instruction: "Complete a full mala cycle on the Digital Mala Counter. 108 beads, one breath per bead.",
    points: 25,
    action: "Begin Mala",
    actionRoute: "/mala",
    category: "streak",
    symbol: "📿"
  },
  {
    id: "t5",
    task: "Seek Guidance from Krishna",
    taskSanskrit: "कृष्ण मार्गदर्शन — प्रश्न करो",
    instruction: "Ask Krishna AI about dharma, a difficulty, or a question of the heart. He answers from the Gita.",
    points: 10,
    action: "Ask Krishna",
    actionRoute: "/guidance",
    category: "reading",
    symbol: "🪈"
  },
  {
    id: "t6",
    task: "Read 3 Verses on Karma & Dharma",
    taskSanskrit: "कर्म धर्म — तीन श्लोक",
    instruction: "Open Chapter 3 or 4 and contemplate right action and duty as taught by the Lord.",
    points: 15,
    action: "Open Reader",
    actionRoute: "/chapter/3",
    category: "reading",
    symbol: "⚖"
  },
  {
    id: "t7",
    task: "Write Gayatri Mantra 27 Times",
    taskSanskrit: "गायत्री मंत्र लेखन — सत्ताईस",
    instruction: "Write the sacred Gayatri Mantra 27 times — the mother of all mantras, the light of the intellect.",
    points: 20,
    action: "Write Gayatri",
    actionRoute: "/naam",
    category: "writing",
    symbol: "☀"
  },
  {
    id: "t8",
    task: "Listen to Gita Audio for 10 Minutes",
    taskSanskrit: "गीता श्रवण — दस मिनट",
    instruction: "Enter continuous audio mode and immerse in the Gita's sacred sound for ten minutes.",
    points: 15,
    action: "Open Audio",
    actionRoute: "/audio",
    category: "listening",
    symbol: "🎧"
  },
  {
    id: "t9",
    task: "Complete 54 Naam Repetitions",
    taskSanskrit: "नाम जप — चौवन बार",
    instruction: "Half a mala of naam writing. Choose any mantra and write it with steady focus — 54 times.",
    points: 30,
    action: "Begin Writing",
    actionRoute: "/naam",
    category: "writing",
    symbol: "॥"
  },
  {
    id: "t10",
    task: "Read Full Chapter 12 — Bhakti Yoga",
    taskSanskrit: "भक्तियोग — द्वादश अध्याय",
    instruction: "Chapter 12 has only 20 verses — the yoga of devotion. Read them all in one sitting with a pure heart.",
    points: 20,
    action: "Open Chapter 12",
    actionRoute: "/chapter/12",
    category: "reading",
    symbol: "💛"
  },
  {
    id: "t11",
    task: "Ask Krishna About Fear or Stress",
    taskSanskrit: "भय और व्याकुलता — मार्गदर्शन",
    instruction: "Use the Krishna AI to explore a fear, a worry, or a source of stress in your life today.",
    points: 10,
    action: "Ask Krishna",
    actionRoute: "/guidance",
    category: "reading",
    symbol: "🌊"
  },
  {
    id: "t12",
    task: "Write 108 Naam — A Full Mala",
    taskSanskrit: "पूर्ण नाम माला — अष्टोत्तरशत",
    instruction: "The most powerful practice: write your chosen mantra 108 full times. A complete mala of naam.",
    points: 50,
    action: "Begin Lekhan",
    actionRoute: "/naam",
    category: "writing",
    symbol: "🙏"
  },
  {
    id: "t13",
    task: "Explore the Festival Calendar",
    taskSanskrit: "पंचांग दर्शन — उत्सव",
    instruction: "Visit the Sacred Calendar and read about the next upcoming Hindu festival and its meaning.",
    points: 5,
    action: "Open Panchang",
    actionRoute: "/calendar",
    category: "reading",
    symbol: "🏮"
  },
  {
    id: "t14",
    task: "Set Your Spiritual Profile",
    taskSanskrit: "साधक परिचय — प्रोफ़ाइल",
    instruction: "Visit your Profile: set your name, spiritual level, and preferred voice for your practice.",
    points: 5,
    action: "View Profile",
    actionRoute: "/profile",
    category: "streak",
    symbol: "✨"
  }
];
const STORAGE_KEY = "gita-challenges";
function todayStr() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: todayStr(), completedIds: [], history: {} };
    const parsed = JSON.parse(raw);
    if (parsed.date !== todayStr()) {
      const history = {
        ...parsed.history,
        [parsed.date]: parsed.completedIds.length
      };
      const fresh = { date: todayStr(), completedIds: [], history };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    }
    return parsed;
  } catch {
    return { date: todayStr(), completedIds: [], history: {} };
  }
}
function saveStorage(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
  }
}
function getDailyChallenges() {
  const now = /* @__PURE__ */ new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor(
    (now.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)
  );
  const baseIdx = dayOfYear * 3 % ALL_CHALLENGES.length;
  const picks = [];
  for (let i = 0; i < 3; i++) {
    picks.push(ALL_CHALLENGES[(baseIdx + i) % ALL_CHALLENGES.length]);
  }
  return picks;
}
function WeeklyTally({ history }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toISOString().split("T")[0];
    const label = d.toLocaleDateString("en-US", { weekday: "short" });
    const count = key === todayStr() ? void 0 : history[key] ?? 0;
    return { key, label, count };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-end justify-between gap-2",
      "aria-label": "7-day history",
      children: days.map((day) => {
        const isToday = day.key === todayStr();
        const done = day.count !== void 0 && day.count > 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-1 flex-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 flex items-end justify-center w-full", children: isToday ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-accent text-base font-bold leading-none", children: "✦" }) : done ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-accent/80 text-base font-bold leading-none", children: "॥" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-muted-foreground/50 text-xs leading-none", children: "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[0.6rem] font-display font-bold tracking-wider uppercase ${isToday ? "text-accent" : "text-muted-foreground/70"}`,
                  children: day.label
                }
              ),
              !isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.55rem] font-body text-muted-foreground", children: done ? `${day.count}` : "·" })
            ]
          },
          day.key
        );
      })
    }
  );
}
function TaskEntry({ challenge, done, index, onComplete }) {
  const justDoneRef = reactExports.useRef(false);
  const [justDone, setJustDone] = reactExports.useState(false);
  const handleComplete = () => {
    if (done || justDoneRef.current) return;
    justDoneRef.current = true;
    setJustDone(true);
    onComplete(challenge.id, challenge.points, challenge.category);
    setTimeout(() => setJustDone(false), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -10 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.1 },
      className: `relative border-b border-border/40 last:border-0 py-5 px-2 transition-smooth ${done ? "opacity-60" : ""}`,
      "data-ocid": `challenge-card-${challenge.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 text-center pt-0.5", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-accent text-xl font-bold leading-none",
              title: "Completed",
              children: "✓"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-accent/50 text-lg font-bold leading-none", children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.7rem] text-accent/70 italic tracking-wide mb-0.5", children: challenge.taskSanskrit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `font-display text-base font-bold leading-snug italic ${done ? "line-through text-muted-foreground" : "text-primary"}`,
                children: challenge.task
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mt-1.5", children: challenge.instruction }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mt-3 flex-wrap", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-accent/80 flex items-center gap-1.5", children: "✓ Completed today — Jai Shri Krishna 🙏" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: challenge.actionRoute, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "font-body text-xs italic text-accent hover:text-primary border border-accent/40 hover:border-primary/50 px-3 py-1 transition-smooth bg-transparent",
                  "data-ocid": `challenge-action-${challenge.id}`,
                  style: { borderRadius: "2px" },
                  children: [
                    challenge.action,
                    " →"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth",
                  onClick: handleComplete,
                  "data-ocid": `challenge-mark-${challenge.id}`,
                  children: "Mark as done ॥"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[0.65rem] text-accent/70 font-bold tracking-wider uppercase leading-tight block", children: [
              "+",
              challenge.points
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[0.55rem] text-muted-foreground/70 block", children: "pts" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: justDone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            className: "mt-3 ml-12 font-body text-xs italic text-accent",
            children: [
              "✦ +",
              challenge.points,
              " points received. Well done, Arjuna. ॥"
            ]
          }
        ) })
      ]
    }
  );
}
function ChallengesPage() {
  const [store, setStore] = reactExports.useState(loadStorage);
  const { addPoints } = usePoints();
  const { recordPractice } = useStreak();
  const dailyChallenges = reactExports.useMemo(() => getDailyChallenges(), []);
  const completed = new Set(store.completedIds);
  reactExports.useEffect(() => {
    setStore(loadStorage());
  }, []);
  const handleComplete = reactExports.useCallback(
    (id, pts, category) => {
      setStore((prev) => {
        if (prev.completedIds.includes(id)) return prev;
        const updated = {
          ...prev,
          completedIds: [...prev.completedIds, id]
        };
        saveStorage(updated);
        return updated;
      });
      addPoints(category, pts);
      recordPractice();
    },
    [addPoints, recordPractice]
  );
  const completedCount = dailyChallenges.filter(
    (c) => completed.has(c.id)
  ).length;
  const totalEarnedToday = dailyChallenges.filter((c) => completed.has(c.id)).reduce((s, c) => s + c.points, 0);
  const allDone = completedCount === dailyChallenges.length;
  const lifetimeCompleted = Object.values(store.history).reduce((a, b) => a + b, 0) + completedCount;
  const challengeStreak = reactExports.useMemo(() => {
    let streak = 0;
    const today2 = /* @__PURE__ */ new Date();
    for (let i = 0; i <= 60; i++) {
      const d = new Date(today2);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      const count = key === todayStr() ? completedCount : store.history[key] ?? 0;
      if (count > 0) streak++;
      else break;
    }
    return streak;
  }, [store.history, completedCount]);
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const totalPoints = dailyChallenges.reduce((s, c) => s + c.points, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center pb-8 pt-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/70 text-base", children: "✦ ॐ ✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-[0.25em] uppercase text-accent/60 font-bold mb-1", children: "Dainika Sadhana" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header mb-2", children: "Daily Krishna Challenges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mb-4", children: today }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "inline-flex items-center gap-3 px-5 py-2 border border-accent/25 bg-accent/5",
              style: { borderRadius: "2px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs font-bold tracking-widest uppercase text-accent/70", children: "Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground italic", children: "—" }),
                dailyChallenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `font-display text-base font-bold ${i < completedCount ? "text-accent" : "text-muted-foreground/30"}`,
                    children: i < completedCount ? "✓" : "✦"
                  },
                  c.id
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground italic", children: "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xs font-bold text-accent/70", children: [
                  completedCount,
                  "/",
                  dailyChallenges.length
                ] })
              ]
            }
          ),
          totalEarnedToday > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "mt-4 flex items-center justify-center gap-4 flex-wrap",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs italic text-accent", children: [
                  "✦ ",
                  totalEarnedToday,
                  " points received today"
                ] }),
                challengeStreak > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs italic text-accent/80", children: [
                  "॥ ",
                  challengeStreak,
                  "-day streak"
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: allDone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        className: "mx-2 mb-6 text-center border border-accent/30 bg-accent/5 py-5 px-6",
        style: { borderRadius: "2px" },
        "data-ocid": "all-done-banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-accent font-bold italic mb-2", children: "✦ Sadhana Sampurna ✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-foreground/80 leading-relaxed", children: '"Do your duty and leave the rest to Me."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-wider text-accent/70 mt-1", children: "— Bhagavad Gita 9.22" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "verse-block !border !border-border/50 !px-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-4 pt-2 border-b border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-[0.2em] uppercase text-accent/60 font-bold", children: "Aaj Ka Abhyasa — Today's Practice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.7rem] italic text-muted-foreground mt-0.5", children: "Three sacred duties assigned for this day" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: dailyChallenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TaskEntry,
        {
          challenge: c,
          done: completed.has(c.id),
          index: i,
          onComplete: handleComplete
        },
        c.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[0.65rem] tracking-[0.2em] uppercase text-accent/60 font-bold px-3", children: "Sapta-Dina Abhyasa — Seven-Day Record" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border/50 p-5 space-y-6",
          style: { borderRadius: "2px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyTally, { history: store.history }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "separator-sacred" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.6rem] tracking-[0.2em] uppercase text-accent/60 font-bold mb-1", children: "Dhara" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold italic text-primary leading-none", children: challengeStreak }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.65rem] text-muted-foreground italic mt-0.5", children: "days streak" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.6rem] tracking-[0.2em] uppercase text-accent/60 font-bold mb-1", children: "Sampurna" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold italic text-primary leading-none", children: lifetimeCompleted }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.65rem] text-muted-foreground italic mt-0.5", children: "total tasks" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.6rem] tracking-[0.2em] uppercase text-accent/60 font-bold mb-1", children: "Aaj" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold italic text-primary leading-none", children: totalEarnedToday }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.65rem] text-muted-foreground italic mt-0.5", children: "pts today" })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[0.65rem] tracking-[0.2em] uppercase text-accent/60 font-bold px-3", children: "Sadhana Krama — All 14 Sacred Duties" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border/50",
          style: { borderRadius: "2px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-border/40 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.7rem] italic text-muted-foreground", children: "The complete catalogue of daily practice tasks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-widest uppercase text-accent/60 font-bold", children: "Points" })
            ] }),
            ALL_CHALLENGES.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between gap-3 px-5 py-3 border-b border-border/30 last:border-0 hover:bg-accent/3 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-accent/50 text-sm font-bold w-5 text-right flex-shrink-0", children: [
                      idx + 1,
                      "."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-foreground/75 leading-snug truncate", children: c.task }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.6rem] text-muted-foreground/60 italic", children: c.taskSanskrit })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[0.7rem] font-bold text-accent flex-shrink-0", children: [
                    "+",
                    c.points
                  ] })
                ]
              },
              c.id
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-t border-border/40 bg-accent/3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[0.65rem] italic text-muted-foreground", children: "Three tasks rotate daily" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[0.7rem] font-bold text-accent", children: [
                "Max ",
                totalPoints,
                " pts"
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/50 text-sm", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground leading-relaxed max-w-sm mx-auto", children: '"Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-wider text-accent/70 mt-2", children: "— Bhagavad Gita 2.48" })
    ] })
  ] });
}
export {
  ChallengesPage
};
