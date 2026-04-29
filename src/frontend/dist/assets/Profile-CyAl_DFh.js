import { r as reactExports, j as jsxRuntimeExports, m as motion, a as Link } from "./index-vCKiyWhq.js";
import { I as Input } from "./input-6Gh_LKu9.js";
import { u as useBadges } from "./use-badges-zVyPkU05.js";
import { u as useMalaHistory } from "./use-mala-history-B9nT2ChS.js";
import { u as useNaamHistory } from "./use-naam-history-DQaMjvEw.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
import { u as useStreak } from "./use-streak-IRvcBEqu.js";
import { u as useUserProfile } from "./use-user-profile-Ch8fUFbr.js";
import "./utils-2v2HxlWs.js";
const NAAM_LEVELS = [
  {
    title: "Shraddhavan",
    minReps: 0,
    maxReps: 1007,
    seal: "🌿",
    desc: "The Faithful Seeker"
  },
  {
    title: "Bhakta",
    minReps: 1008,
    maxReps: 10007,
    seal: "🪷",
    desc: "The Devoted Soul"
  },
  {
    title: "Naam Premi",
    minReps: 10008,
    maxReps: 53999,
    seal: "📿",
    desc: "Lover of the Sacred Name"
  },
  {
    title: "Naam Sadhak",
    minReps: 54e3,
    maxReps: 124999,
    seal: "🔱",
    desc: "Practitioner of Naam"
  },
  {
    title: "Krishna Sevak",
    minReps: 125e3,
    maxReps: Number.POSITIVE_INFINITY,
    seal: "🪈",
    desc: "Servant of Lord Krishna"
  }
];
function getSpiritualTitle(reps) {
  return [...NAAM_LEVELS].reverse().find((l) => reps >= l.minReps) ?? NAAM_LEVELS[0];
}
function getNextLevel(reps) {
  return NAAM_LEVELS.find((l) => reps < l.minReps);
}
const STREAK_BADGES = [
  {
    days: 3,
    id: "streak-3",
    label: "3 Days",
    symbol: "🔥",
    title: "Spark of Devotion"
  },
  {
    days: 7,
    id: "streak-7",
    label: "7 Days",
    symbol: "⭐",
    title: "Week of Grace"
  },
  {
    days: 21,
    id: "streak-21",
    label: "21 Days",
    symbol: "🌟",
    title: "Habit of the Soul"
  },
  {
    days: 108,
    id: "streak-108",
    label: "108 Days",
    symbol: "🪬",
    title: "Sacred Completion"
  }
];
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function formatTimestamp(ts) {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function WaxSeal({
  symbol,
  label,
  sublabel,
  earned,
  earnedDate
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-2 text-center",
      title: earned && earnedDate ? `Earned: ${earnedDate}` : `${label} — not yet earned`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-16 h-16 flex items-center justify-center transition-smooth",
            style: {
              background: earned ? "radial-gradient(circle at 40% 35%, oklch(0.62 0.20 38), oklch(0.42 0.18 32))" : "radial-gradient(circle at 40% 35%, oklch(0.82 0.05 54), oklch(0.72 0.06 50))",
              borderRadius: "50%",
              boxShadow: earned ? "0 3px 14px oklch(0.48 0.18 38 / 0.5), inset 0 1px 0 oklch(0.72 0.12 44 / 0.4), inset 0 -1px 0 oklch(0.28 0.10 32 / 0.3)" : "0 2px 6px rgba(80,55,30,0.1), inset 0 1px 0 rgba(255,248,220,0.2)",
              border: earned ? "2px solid oklch(0.38 0.14 34)" : "2px solid oklch(0.68 0.07 52)",
              opacity: earned ? 1 : 0.45,
              filter: earned ? "none" : "grayscale(0.5)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none select-none", children: symbol }),
              earned && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-full pointer-events-none",
                  style: {
                    background: "radial-gradient(circle at 30% 25%, oklch(0.72 0.14 44 / 0.25) 0%, transparent 55%)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold",
              style: {
                color: earned ? "oklch(0.28 0.08 36)" : "oklch(0.58 0.05 50)"
              },
              children: label
            }
          ),
          sublabel && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[9px] italic mt-0.5",
              style: { color: "oklch(0.52 0.06 50)" },
              children: sublabel
            }
          ),
          !earned && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[9px] mt-0.5",
              style: { color: "oklch(0.62 0.06 52)" },
              children: "— locked —"
            }
          )
        ] })
      ]
    }
  );
}
function RecordRow({
  icon,
  label,
  value,
  note
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-baseline justify-between py-2.5 border-b border-dashed",
      style: { borderColor: "oklch(0.70 0.08 52 / 0.35)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "font-body text-sm italic flex items-center gap-2",
            style: { color: "oklch(0.48 0.05 50)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base w-5 text-center", children: icon }),
              label
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-base font-bold",
              style: { color: "oklch(0.28 0.08 36)" },
              children: typeof value === "number" ? value.toLocaleString() : value
            }
          ),
          note && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body text-xs italic ml-1.5",
              style: { color: "oklch(0.52 0.08 50)" },
              children: note
            }
          )
        ] })
      ]
    }
  );
}
function ProfilePage() {
  const { profile, setProfile, displayName } = useUserProfile();
  const { streak } = useStreak();
  const { points } = usePoints();
  const { badges, hasBadge, checkAndAwardBadges } = useBadges();
  const { history: malaHistory, totalBeads } = useMalaHistory();
  const { history: naamHistory, totalReps, completedCycles } = useNaamHistory();
  const [editing, setEditing] = reactExports.useState(false);
  const [nameInput, setNameInput] = reactExports.useState(profile.name);
  reactExports.useEffect(() => {
    checkAndAwardBadges(streak.count, totalBeads, totalReps);
  }, [streak.count, totalBeads, totalReps, checkAndAwardBadges]);
  const spiritualTitle = getSpiritualTitle(totalReps);
  const nextLevel = getNextLevel(totalReps);
  const nextBadge = STREAK_BADGES.find((b) => streak.count < b.days);
  const daysToNextBadge = nextBadge ? nextBadge.days - streak.count : 0;
  const allDates = /* @__PURE__ */ new Set([
    ...malaHistory.map((s) => s.date),
    ...naamHistory.map((s) => s.date)
  ]);
  const daysActive = allDates.size;
  const versesRead = (() => {
    try {
      const raw = localStorage.getItem("gita-read-verses");
      if (!raw) return 0;
      return JSON.parse(raw).length;
    } catch {
      return 0;
    }
  })();
  const recentActivity = [
    ...malaHistory.slice(0, 10).map((s) => ({ ...s, kind: "mala" })),
    ...naamHistory.slice(0, 10).map((s) => ({ ...s, kind: "naam" }))
  ].sort((a, b) => b.timestamp - a.timestamp).slice(0, 6);
  const handleSaveName = () => {
    setProfile({ name: nameInput });
    setEditing(false);
  };
  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") handleSaveName();
    if (e.key === "Escape") setEditing(false);
  };
  const levelProgressPct = nextLevel ? (totalReps - spiritualTitle.minReps) / (nextLevel.minReps - spiritualTitle.minReps) * 100 : 100;
  const parchmentPanel = {
    background: "oklch(0.91 0.07 58 / 0.60)",
    border: "1px solid oklch(0.72 0.08 52 / 0.45)",
    borderRadius: "2px",
    boxShadow: "inset 0 1px 0 rgba(255,248,220,0.3), 0 2px 8px rgba(80,55,30,0.08)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-verse-number mb-1",
              style: { letterSpacing: "0.2em" },
              children: "Personal Sadhana Diary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "chapter-header",
              style: {
                textShadow: "0 4px 20px rgba(180,130,45,0.30), 0 0 48px oklch(0.78 0.34 54 / 0.15)"
              },
              children: "My Spiritual Record"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-translation mt-2 mx-auto max-w-sm", children: "A faithful record of your daily practice, devotion, and progress upon the sacred path." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mt-5 mb-2" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.08 },
        className: "mb-7",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative p-6 overflow-hidden",
            style: {
              background: "linear-gradient(145deg, oklch(0.96 0.08 60 / 0.95) 0%, oklch(0.93 0.10 56 / 0.90) 50%, oklch(0.91 0.09 52) 100%)",
              border: "2.5px solid oklch(0.72 0.30 54 / 0.55)",
              borderRadius: "6px",
              boxShadow: "0 8px 36px rgba(190,140,45,0.25), 0 0 0 1px oklch(0.82 0.26 54 / 0.12), inset 0 1px 0 rgba(255,252,228,0.65)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]",
                  style: {
                    background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.70 0.28 46), oklch(0.56 0.24 268), oklch(0.70 0.28 46), oklch(0.84 0.38 54))",
                    boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.55)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-2 right-4 select-none pointer-events-none font-display font-bold",
                  "aria-hidden": true,
                  style: {
                    fontSize: "8rem",
                    lineHeight: "1",
                    color: "oklch(0.52 0.22 50 / 0.055)"
                  },
                  children: "ॐ"
                }
              ),
              [
                "top-4 left-4",
                "top-4 right-4",
                "bottom-4 left-4",
                "bottom-4 right-4"
              ].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `absolute ${pos} font-display text-xs pointer-events-none select-none`,
                  style: { color: "oklch(0.70 0.28 54 / 0.45)" },
                  "aria-hidden": true,
                  children: "✦"
                },
                pos
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "radial-gradient(circle at 38% 32%, oklch(0.62 0.20 42), oklch(0.40 0.16 34))",
                      border: "2px solid oklch(0.40 0.14 36)",
                      boxShadow: "0 4px 16px oklch(0.42 0.16 38 / 0.45), inset 0 1px 0 oklch(0.72 0.12 44 / 0.35)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl leading-none select-none", children: spiritualTitle.seal })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        value: nameInput,
                        onChange: (e) => setNameInput(e.target.value),
                        onKeyDown: handleNameKeyDown,
                        onBlur: handleSaveName,
                        placeholder: "Your name",
                        className: "font-body h-8 text-base",
                        autoFocus: true,
                        "data-ocid": "profile-name-input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: handleSaveName,
                        className: "font-body text-xs px-3 h-8 transition-smooth shrink-0",
                        style: {
                          background: "oklch(0.42 0.14 40)",
                          color: "oklch(0.92 0.07 58)",
                          border: "1px solid oklch(0.38 0.12 38)",
                          borderRadius: "2px"
                        },
                        "data-ocid": "profile-save",
                        children: "Save"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-2xl font-bold italic",
                        style: { color: "oklch(0.22 0.06 38)" },
                        children: displayName
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setNameInput(profile.name);
                          setEditing(true);
                        },
                        className: "transition-smooth",
                        style: { color: "oklch(0.58 0.08 48)", padding: "0.15rem" },
                        "aria-label": "Edit name",
                        "data-ocid": "profile-edit-name",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "svg",
                          {
                            viewBox: "0 0 16 16",
                            className: "w-3.5 h-3.5",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Edit name" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11.5 1.5a1.5 1.5 0 0 1 2.12 2.12L5 12.24l-2.5.5.5-2.5L11.5 1.5z" })
                            ]
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-semibold italic",
                      style: { color: "oklch(0.48 0.18 44)" },
                      children: spiritualTitle.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic mt-0.5",
                      style: { color: "oklch(0.52 0.08 50)" },
                      children: spiritualTitle.desc
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs mt-1.5",
                      style: { color: "oklch(0.58 0.06 52)" },
                      children: [
                        "Sadhana begun ",
                        formatDate(profile.joinDate)
                      ]
                    }
                  )
                ] })
              ] }),
              nextLevel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mt-5 pt-4",
                  style: { borderTop: "1px dashed oklch(0.68 0.08 52 / 0.4)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-xs italic",
                          style: { color: "oklch(0.52 0.08 50)" },
                          children: [
                            "Path to",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: { color: "oklch(0.42 0.14 44)", fontWeight: "600" },
                                children: nextLevel.title
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-xs",
                          style: { color: "oklch(0.52 0.08 50)" },
                          children: [
                            (nextLevel.minReps - totalReps).toLocaleString(),
                            " reps remaining"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-2 relative overflow-hidden",
                        style: {
                          background: "oklch(0.82 0.06 56)",
                          border: "1px solid oklch(0.70 0.07 52 / 0.5)",
                          borderRadius: "1px"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute inset-y-0 left-0",
                            style: {
                              background: "linear-gradient(90deg, oklch(0.52 0.16 44), oklch(0.62 0.22 48))",
                              boxShadow: "inset 0 1px 0 oklch(0.72 0.14 50 / 0.4)"
                            },
                            initial: { width: 0 },
                            animate: { width: `${Math.min(100, levelProgressPct)}%` },
                            transition: { duration: 1, delay: 0.3 }
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.13 },
        className: "mb-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-4", children: "Streak of Daily Practice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", style: parchmentPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-5xl font-bold italic",
                    style: { color: "oklch(0.48 0.18 44)" },
                    children: streak.count
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1",
                    style: { color: "oklch(0.52 0.06 50)" },
                    children: "days current streak"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-10 w-px",
                  style: { background: "oklch(0.70 0.07 52 / 0.4)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-3xl font-bold italic",
                    style: { color: "oklch(0.32 0.06 42)" },
                    children: streak.longestStreak
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1",
                    style: { color: "oklch(0.52 0.06 50)" },
                    children: "best ever streak"
                  }
                )
              ] }),
              nextBadge && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.52 0.06 50)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-bold",
                          style: { color: "oklch(0.32 0.08 40)" },
                          children: daysToNextBadge
                        }
                      ),
                      " ",
                      "days to ",
                      nextBadge.symbol
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-[10px] italic",
                    style: { color: "oklch(0.58 0.06 52)" },
                    children: [
                      nextBadge.label,
                      " badge"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex gap-4 justify-center flex-wrap pt-3",
                style: { borderTop: "1px dashed oklch(0.68 0.08 52 / 0.35)" },
                children: STREAK_BADGES.map((sb) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  WaxSeal,
                  {
                    symbol: sb.symbol,
                    label: sb.label,
                    sublabel: sb.title,
                    earned: hasBadge(sb.id)
                  },
                  sb.id
                ))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.18 },
        className: "mb-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-4", children: "Points & Sacred Offerings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", style: parchmentPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-5xl font-bold italic",
                  style: { color: "oklch(0.48 0.18 44)" },
                  children: points.total.toLocaleString()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body text-sm italic",
                  style: { color: "oklch(0.52 0.06 50)" },
                  children: "total sacred points"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "✍️",
                label: "From Naam Writing",
                value: points.fromWriting,
                note: "pts"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "📖",
                label: "From Reading",
                value: points.fromReading,
                note: "pts"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "🎵",
                label: "From Listening",
                value: points.fromListening,
                note: "pts"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "🔥",
                label: "From Streaks",
                value: points.fromStreak,
                note: "pts"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-4 pt-3",
                style: { borderTop: "1px dashed oklch(0.68 0.08 52 / 0.35)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex justify-between text-xs font-body italic mb-2",
                      style: { color: "oklch(0.52 0.06 50)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          points.total % 100,
                          " / 100 to next milestone"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          Math.ceil((points.total + 1) / 100) * 100,
                          " pts"
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 relative overflow-hidden",
                      style: {
                        background: "oklch(0.82 0.06 56)",
                        border: "1px solid oklch(0.70 0.07 52 / 0.5)",
                        borderRadius: "1px"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "absolute inset-y-0 left-0",
                          style: {
                            background: "linear-gradient(90deg, oklch(0.52 0.16 44), oklch(0.62 0.22 48))"
                          },
                          initial: { width: 0 },
                          animate: { width: `${points.total % 100 / 100 * 100}%` },
                          transition: { duration: 0.8 }
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.22 },
        className: "mb-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-4", children: "The Sadhana Ladder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "overflow-hidden",
              style: {
                border: "1px solid oklch(0.72 0.08 52 / 0.45)",
                borderRadius: "2px",
                background: "oklch(0.91 0.07 58 / 0.55)"
              },
              children: NAAM_LEVELS.map((level, i) => {
                const isActive = spiritualTitle.title === level.title;
                const isUnlocked = totalReps >= level.minReps;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-4 px-5 py-4 transition-smooth",
                    style: {
                      borderBottom: i < NAAM_LEVELS.length - 1 ? "1px dashed oklch(0.70 0.08 52 / 0.35)" : "none",
                      background: isActive ? "oklch(0.89 0.09 57 / 0.8)" : "transparent",
                      borderLeft: isActive ? "3px solid oklch(0.58 0.18 46)" : "3px solid transparent"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-2xl leading-none w-8 text-center flex-shrink-0",
                          style: {
                            opacity: isUnlocked ? 1 : 0.3,
                            filter: isUnlocked ? "none" : "grayscale(1)"
                          },
                          children: level.seal
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-display text-sm font-bold italic",
                            style: {
                              color: isActive ? "oklch(0.38 0.14 40)" : isUnlocked ? "oklch(0.28 0.08 36)" : "oklch(0.58 0.05 52)"
                            },
                            children: [
                              level.title,
                              isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "ml-2 font-body text-xs font-normal",
                                  style: { color: "oklch(0.48 0.16 44)" },
                                  children: "— your current rank"
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-body text-xs italic mt-0.5",
                            style: { color: "oklch(0.52 0.06 50)" },
                            children: [
                              level.desc,
                              " ·",
                              " ",
                              level.maxReps === Number.POSITIVE_INFINITY ? `${level.minReps.toLocaleString()}+ reps` : `${level.minReps.toLocaleString()} – ${level.maxReps.toLocaleString()}`
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-body text-sm flex-shrink-0",
                          style: {
                            color: isUnlocked ? "oklch(0.48 0.16 44)" : "oklch(0.65 0.05 52)"
                          },
                          children: isUnlocked ? "✓" : "⋯"
                        }
                      )
                    ]
                  },
                  level.title
                );
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.26 },
        className: "mb-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-4", children: "Practice Statistics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", style: parchmentPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "✍️",
                label: "Naam Reps Lifetime",
                value: totalReps,
                note: "total repetitions"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "📿",
                label: "Mala Sessions",
                value: malaHistory.length,
                note: "sessions completed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "🔮",
                label: "Full Malas (108 beads)",
                value: Math.floor(totalBeads / 108),
                note: "complete rounds"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "📖",
                label: "Verses Read",
                value: versesRead,
                note: "from Bhagavad Gita"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "🔢",
                label: "Naam Cycles",
                value: completedCycles,
                note: "108-rep cycles"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "📅",
                label: "Days Active",
                value: daysActive,
                note: "unique practice days"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "🧠",
                label: "Quizzes Completed",
                value: (() => {
                  try {
                    return JSON.parse(localStorage.getItem("quiz-session-stats") || "{}").quizzesCompleted ?? 0;
                  } catch {
                    return 0;
                  }
                })(),
                note: "Gita Gyan quizzes"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RecordRow,
              {
                icon: "⚔️",
                label: "Kurukshetra Battles Won",
                value: Number.parseInt(
                  localStorage.getItem("kurukshetra-battles-won") || "0",
                  10
                ),
                note: "battles overcome"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        className: "mb-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-4", children: "Sacred Seals Earned" }),
          badges.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-10",
              style: {
                border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
                borderRadius: "2px",
                background: "oklch(0.91 0.07 58 / 0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-2", children: "🏅" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm italic",
                    style: { color: "oklch(0.52 0.06 50)" },
                    children: "Complete practice streaks and challenges to receive your first sacred seal"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", style: parchmentPanel, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-5 justify-center", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            WaxSeal,
            {
              symbol: b.icon,
              label: b.name,
              sublabel: b.description,
              earned: true,
              earnedDate: formatTimestamp(Number(b.earnedDate))
            },
            b.id
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.34 },
        className: "mb-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-4", children: "Recent Sadhana Entries" }),
          recentActivity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-10",
              style: {
                border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
                borderRadius: "2px",
                background: "oklch(0.91 0.07 58 / 0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-2", children: "🙏" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm italic",
                    style: { color: "oklch(0.52 0.06 50)" },
                    children: "Begin your sadhana — your practice will be recorded here as diary entries."
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", style: parchmentPanel, children: recentActivity.map((session, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "py-3",
              style: {
                borderBottom: i < recentActivity.length - 1 ? "1px dashed oklch(0.70 0.08 52 / 0.35)" : "none"
              },
              "data-ocid": `activity-row-${session.id}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base w-6 text-center flex-shrink-0 mt-0.5", children: session.kind === "naam" ? "✍️" : "📿" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm italic",
                      style: { color: "oklch(0.22 0.04 42)" },
                      children: session.kind === "naam" ? `Naam Writing — ${session.reps} repetitions` : `Japa Mala — ${session.beadCount} beads counted`
                    }
                  ),
                  "mantra" in session && session.mantra && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic mt-0.5",
                      style: { color: "oklch(0.52 0.08 50)" },
                      children: session.mantra
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic flex-shrink-0 ml-2",
                    style: { color: "oklch(0.58 0.06 52)" },
                    children: formatDate(session.date)
                  }
                )
              ] })
            },
            session.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 },
        className: "mb-7",
        "data-ocid": "profile.subscription.section",
        children: (() => {
          const subscribed = typeof window !== "undefined" && localStorage.getItem("gita-subscribed") === "true";
          const firstVisit = typeof window !== "undefined" ? localStorage.getItem("gita-first-visit") : null;
          const daysUsed = firstVisit ? Math.floor((Date.now() - Number(firstVisit)) / 864e5) : 0;
          const trialDaysLeft = Math.max(0, 7 - daysUsed);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative p-6 overflow-hidden",
              style: {
                background: subscribed ? "linear-gradient(145deg, oklch(0.94 0.10 150 / 0.5) 0%, oklch(0.92 0.12 155 / 0.4) 100%)" : "linear-gradient(145deg, oklch(0.96 0.08 60) 0%, oklch(0.93 0.10 56) 100%)",
                border: `2.5px solid ${subscribed ? "oklch(0.55 0.22 150 / 0.55)" : "oklch(0.72 0.30 54 / 0.55)"}`,
                borderRadius: "6px",
                boxShadow: "0 8px 36px rgba(190,140,45,0.20)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]",
                    style: {
                      background: subscribed ? "linear-gradient(90deg, oklch(0.55 0.22 150), oklch(0.65 0.22 155))" : "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.65 0.28 46), oklch(0.72 0.22 268), oklch(0.84 0.38 54))"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-2", children: subscribed ? "✅" : "🔐" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-lg font-bold italic mb-1",
                      style: { color: "oklch(0.22 0.10 32)" },
                      children: subscribed ? "Dharma Subscriber — All Features Unlocked" : trialDaysLeft > 0 ? `Free Trial — ${trialDaysLeft} day${trialDaysLeft === 1 ? "" : "s"} remaining` : "Free Trial Ended"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic mb-4",
                      style: { color: "oklch(0.48 0.10 46)" },
                      children: subscribed ? "You are fully in Krishna's embrace. All features unlocked." : "The Bhagavad Gita reading remains free forever — Krishna's wisdom is for every soul."
                    }
                  ),
                  !subscribed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "inline-block mb-3 cursor-pointer transition-smooth hover:scale-105",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.50 0.22 44), oklch(0.60 0.26 50))",
                          boxShadow: "0 4px 20px oklch(0.55 0.22 46 / 0.45), inset 0 1px 0 rgba(255,248,220,0.2)",
                          border: "2px solid oklch(0.40 0.16 38)",
                          borderRadius: "4px",
                          padding: "0.75rem 2rem"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              try {
                                localStorage.setItem("gita-subscribed", "true");
                              } catch {
                              }
                              window.location.reload();
                            },
                            className: "font-display font-bold italic text-base",
                            style: { color: "oklch(0.96 0.06 72)" },
                            "data-ocid": "profile.subscribe-button",
                            children: "🙏 Subscribe — ₹108/month ✦"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.52 0.10 46)" },
                        children: "Payment integration powered by Stripe — coming soon"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic mt-1",
                        style: { color: "oklch(0.52 0.10 46)" },
                        children: "Less than ₹4/day — the price of Krishna's full presence in your life"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/chapter/$id",
                        params: { id: "1" },
                        className: "font-body text-xs italic underline",
                        style: { color: "oklch(0.48 0.16 44)" },
                        "data-ocid": "profile.free-reading-link",
                        children: "📖 Read the full Gita — always free →"
                      }
                    ) })
                  ] })
                ] })
              ]
            }
          );
        })()
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "॥ ॐ ॥" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.44 },
        className: "mb-6",
        "data-ocid": "profile.about.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/about",
            className: "flex items-center gap-4 p-5 transition-smooth group",
            style: {
              background: "linear-gradient(135deg, oklch(0.97 0.09 60 / 0.95) 0%, oklch(0.94 0.11 56 / 0.92) 100%)",
              border: "2px solid oklch(0.72 0.28 52 / 0.55)",
              borderRadius: "6px",
              boxShadow: "0 4px 20px rgba(190,140,45,0.18), inset 0 1px 0 rgba(255,248,210,0.60)",
              textDecoration: "none"
            },
            "data-ocid": "profile.about-link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "radial-gradient(circle at 38% 32%, oklch(0.86 0.38 54) 0%, oklch(0.68 0.28 50) 100%)",
                    border: "2px solid oklch(0.68 0.26 50 / 0.70)",
                    boxShadow: "0 4px 16px oklch(0.76 0.34 54 / 0.35)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none select-none", children: "🪷" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-base font-bold italic mb-0.5",
                    style: { color: "oklch(0.24 0.10 32)" },
                    children: "About Gita Companion"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.46 0.12 44)" },
                    children: "Our story, mission, and the Digital Dharma movement"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-smooth",
                  style: { color: "oklch(0.58 0.24 50)" },
                  children: "→"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "॥ ॐ ॥" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-center font-body text-xs italic pb-4",
        style: { color: "oklch(0.58 0.06 52)" },
        children: "🪷 All data is stored locally on your sacred device"
      }
    )
  ] });
}
export {
  ProfilePage
};
