import { r as reactExports, h as ue, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-DqMoqjqS.js";
import { u as usePoints } from "./use-points-C2isEgOA.js";
const DURATIONS = [
  { value: 5, label: "5", desc: "Starter" },
  { value: 15, label: "15", desc: "Sadhana" },
  { value: 25, label: "25", desc: "Dharana" },
  { value: 45, label: "45", desc: "Dhyana" },
  { value: 60, label: "60", desc: "Samadhi" }
];
const SOUND_MODES = [
  { id: "silence", label: "Silence", desc: "Pure stillness" },
  { id: "bell", label: "Temple Bell", desc: "Every 5 min" },
  { id: "mantra", label: "Mantra Hum", desc: "Soft background" }
];
const SESSION_STORAGE_KEY = "gita-timer-sessions";
function loadSessions() {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveSessions(sessions) {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessions));
  } catch {
  }
}
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function formatSessionDate(ts) {
  return new Date(ts).toLocaleDateString("en-IN", { dateStyle: "medium" });
}
function useBell(soundMode, isRunning, elapsedSecs) {
  const lastBellRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    if (!isRunning || soundMode !== "bell") return;
    const intervalMins = 5;
    const intervalSecs = intervalMins * 60;
    if (elapsedSecs > 0 && elapsedSecs % intervalSecs === 0 && elapsedSecs !== lastBellRef.current) {
      lastBellRef.current = elapsedSecs;
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 432;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 2);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2);
      } catch {
      }
    }
  }, [soundMode, isRunning, elapsedSecs]);
}
function useMantraHum(soundMode, isRunning) {
  const humRef = reactExports.useRef(null);
  const gainRef = reactExports.useRef(null);
  const ctxRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a, _b;
    if (soundMode !== "mantra" || !isRunning) {
      if (humRef.current) {
        (_b = gainRef.current) == null ? void 0 : _b.gain.setValueAtTime(
          0,
          ((_a = ctxRef.current) == null ? void 0 : _a.currentTime) ?? 0
        );
        humRef.current.stop();
        humRef.current = null;
      }
      return;
    }
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 136.1;
      osc.type = "sine";
      gain.gain.value = 0.04;
      osc.start();
      humRef.current = osc;
      gainRef.current = gain;
    } catch {
    }
    return () => {
      if (humRef.current) {
        try {
          humRef.current.stop();
        } catch {
        }
        humRef.current = null;
      }
    };
  }, [soundMode, isRunning]);
}
function TimerPage() {
  const { addPoints } = usePoints();
  const [duration, setDuration] = reactExports.useState(25);
  const [soundMode, setSoundMode] = reactExports.useState("bell");
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [isPaused, setIsPaused] = reactExports.useState(false);
  const [elapsed, setElapsed] = reactExports.useState(0);
  const [isComplete, setIsComplete] = reactExports.useState(false);
  const [sessions, setSessions] = reactExports.useState(loadSessions);
  const intervalRef = reactExports.useRef(null);
  const totalSecs = duration * 60;
  const remaining = Math.max(0, totalSecs - elapsed);
  const progress = elapsed / totalSecs;
  useBell(soundMode, isRunning && !isPaused, elapsed);
  useMantraHum(soundMode, isRunning && !isPaused);
  reactExports.useEffect(() => {
    if (!isRunning || isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= totalSecs) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setIsComplete(true);
          return totalSecs;
        }
        return next;
      });
    }, 1e3);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, isPaused, totalSecs]);
  const addPointsRef = reactExports.useRef(addPoints);
  addPointsRef.current = addPoints;
  const durationRef = reactExports.useRef(duration);
  durationRef.current = duration;
  const sessionsRef = reactExports.useRef(sessions);
  sessionsRef.current = sessions;
  reactExports.useEffect(() => {
    if (!isComplete) return;
    const dur = durationRef.current;
    const currentSessions = sessionsRef.current;
    const session = {
      id: `cs-${Date.now()}`,
      durationMinutes: dur,
      completedAt: Date.now(),
      sessionType: "meditation"
    };
    const updated = [session, ...currentSessions].slice(0, 20);
    setSessions(updated);
    saveSessions(updated);
    addPointsRef.current("reading", 5);
    ue.success(
      "✦ +5 points — Concentration session complete! Hare Krishna 🙏",
      {
        duration: 6e3
      }
    );
  }, [isComplete]);
  const handleStart = reactExports.useCallback(() => {
    setElapsed(0);
    setIsComplete(false);
    setIsRunning(true);
    setIsPaused(false);
  }, []);
  const handlePause = reactExports.useCallback(() => {
    setIsPaused((p) => !p);
  }, []);
  const handleStop = reactExports.useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
    setElapsed(0);
    setIsComplete(false);
  }, []);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ एकाग्रता साधना ॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Concentration Timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm italic", children: '"Yatra yatra mano yāti tatra tatrātma netrayet" — Wherever the mind wanders, bring it back' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto", children: [
      !isRunning && !isComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "sacred-card p-5 mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs font-bold uppercase tracking-widest mb-3",
                style: { color: "oklch(var(--accent) / 0.7)" },
                children: "✦ Session Duration"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: DURATIONS.map(({ value, label, desc }) => {
              const active = duration === value;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `timer.duration_${value}`,
                  onClick: () => setDuration(value),
                  className: "flex flex-col items-center py-3.5 gap-0.5 transition-smooth",
                  style: {
                    borderRadius: "2px",
                    border: active ? "1px solid oklch(var(--accent) / 0.55)" : "1px solid oklch(var(--border) / 0.5)",
                    background: active ? "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))" : "transparent",
                    color: active ? "oklch(0.94 0.06 60)" : "oklch(var(--muted-foreground))",
                    boxShadow: active ? "0 2px 10px rgba(120,80,30,0.22)" : "none"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold italic leading-none", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[9px] italic opacity-80", children: "min" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[9px] italic opacity-65", children: desc })
                  ]
                },
                value
              );
            }) })
          ]
        }
      ),
      !isRunning && !isComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "sacred-card p-5 mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs font-bold uppercase tracking-widest mb-3",
                style: { color: "oklch(var(--accent) / 0.7)" },
                children: "✦ Sound During Practice"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: SOUND_MODES.map(({ id, label, desc }) => {
              const active = soundMode === id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `timer.sound_${id}`,
                  onClick: () => setSoundMode(id),
                  className: "flex flex-col items-center py-3 gap-0.5 transition-smooth",
                  style: {
                    borderRadius: "2px",
                    border: active ? "1px solid oklch(var(--accent) / 0.5)" : "1px solid oklch(var(--border) / 0.45)",
                    background: active ? "oklch(var(--accent) / 0.09)" : "transparent",
                    color: active ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body italic text-sm", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] italic opacity-65", children: desc })
                  ]
                },
                id
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isRunning || isComplete ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          className: "text-center mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex relative mb-6",
                "data-ocid": "timer.canvas_target",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      width: "220",
                      height: "220",
                      className: "rotate-[-90deg]",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Concentration timer progress" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "110",
                            cy: "110",
                            r: radius,
                            fill: "none",
                            stroke: "oklch(var(--muted) / 0.4)",
                            strokeWidth: "8"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "110",
                            cy: "110",
                            r: radius,
                            fill: "none",
                            stroke: "oklch(0.72 0.28 52)",
                            strokeWidth: "8",
                            strokeLinecap: "round",
                            strokeDasharray: circumference,
                            strokeDashoffset: dashOffset,
                            style: { transition: "stroke-dashoffset 1s linear" }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: isComplete ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl mb-1", "aria-hidden": "true", children: "🙏" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display italic font-bold",
                        style: {
                          color: "oklch(var(--accent))",
                          fontSize: "1.1rem"
                        },
                        children: "Complete!"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display font-bold",
                        style: {
                          fontSize: "2.8rem",
                          lineHeight: 1.1,
                          color: "oklch(var(--foreground))",
                          letterSpacing: "0.04em"
                        },
                        children: formatTime(remaining)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body italic text-muted-foreground text-xs mt-1", children: isPaused ? "Paused" : "Focus…" })
                  ] }) })
                ]
              }
            ),
            !isComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "sacred-card p-4 mb-5 text-center mx-auto",
                style: { maxWidth: "26rem" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body italic text-sm text-muted-foreground leading-relaxed", children: [
                    '"यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।',
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    'तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-2 italic", children: "Where Krishna is, there is victory — 18.78" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
              !isComplete && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "timer.pause_button",
                  onClick: handlePause,
                  className: "transition-smooth font-body italic",
                  style: {
                    padding: "0.7rem 1.8rem",
                    border: "1px solid oklch(var(--accent) / 0.4)",
                    borderRadius: "2px",
                    background: "transparent",
                    color: "oklch(var(--foreground))"
                  },
                  children: isPaused ? "▶ Resume" : "⏸ Pause"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "timer.stop_button",
                  onClick: handleStop,
                  className: "transition-smooth font-body italic",
                  style: {
                    padding: "0.7rem 1.8rem",
                    border: "1px solid oklch(0.52 0.18 22 / 0.4)",
                    borderRadius: "2px",
                    background: "transparent",
                    color: "oklch(0.52 0.18 22)"
                  },
                  children: "✕ Stop"
                }
              ),
              isComplete && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "timer.start_button",
                  onClick: handleStart,
                  className: "transition-smooth font-display font-bold italic shadow-warm-glow",
                  style: {
                    padding: "0.7rem 2rem",
                    background: "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))",
                    color: "oklch(0.94 0.06 60)",
                    border: "1px solid oklch(0.40 0.14 36)",
                    borderRadius: "2px"
                  },
                  children: "✦ Start Again"
                }
              )
            ] }),
            isComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: "mt-5 sacred-card p-4 text-center",
                "data-ocid": "timer.success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display italic font-semibold",
                      style: { color: "oklch(var(--accent))" },
                      children: "✦ +5 points earned"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground mt-1 italic", children: [
                    "Your ",
                    duration,
                    "-minute Dhyana session is complete. Hare Krishna 🙏"
                  ] })
                ]
              }
            )
          ]
        },
        "running"
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          className: "text-center mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "timer.start_button",
                onClick: handleStart,
                className: "transition-smooth font-display text-xl font-bold italic shadow-warm-glow",
                style: {
                  padding: "1.1rem 3.5rem",
                  background: "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))",
                  color: "oklch(0.94 0.06 60)",
                  border: "2px solid oklch(0.40 0.14 36)",
                  borderRadius: "3px",
                  letterSpacing: "0.05em"
                },
                children: "✦ Begin Sadhana"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body italic text-muted-foreground text-xs mt-3", children: [
              duration,
              " minutes of sacred concentration ·",
              " ",
              soundMode === "silence" ? "Silence" : soundMode === "bell" ? "Temple bell every 5 min" : "Soft mantra hum"
            ] })
          ]
        },
        "start"
      ) }),
      sessions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "sacred-card p-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs font-bold uppercase tracking-widest mb-4",
                style: { color: "oklch(var(--accent) / 0.7)" },
                children: "✦ Recent Sessions"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: sessions.slice(0, 5).map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `timer.item.${idx + 1}`,
                className: "flex items-center justify-between",
                style: {
                  padding: "0.5rem 0",
                  borderBottom: idx < 4 ? "1px solid oklch(var(--border) / 0.3)" : "none"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "text-accent font-display font-bold",
                        style: { fontSize: "0.75rem" },
                        children: [
                          s.durationMinutes,
                          "min"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground italic", children: "Dhyana session" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground italic", children: formatSessionDate(s.completedAt) })
                ]
              },
              s.id
            )) })
          ]
        }
      )
    ] })
  ] });
}
export {
  TimerPage
};
