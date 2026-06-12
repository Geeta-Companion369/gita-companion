import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-CodWPqWB.js";
import { u as useStreak } from "./use-streak-CqlB--5b.js";
const HEATMAP_KEY = "gita-heatmap";
function loadHeatmap() {
  try {
    const raw = localStorage.getItem(HEATMAP_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function cellColor(day) {
  if (!day || day.versesRead === 0) return "oklch(0.88 0.04 65)";
  if (day.allGoalsMet) return "oklch(0.72 0.28 52)";
  if (day.versesRead >= 10) return "oklch(0.60 0.22 34)";
  if (day.versesRead >= 4) return "oklch(0.70 0.22 52)";
  return "oklch(0.82 0.18 60)";
}
function buildGrid() {
  const today = /* @__PURE__ */ new Date();
  const end = new Date(today);
  const start = new Date(today);
  start.setDate(start.getDate() - 364);
  while (start.getDay() !== 0) start.setDate(start.getDate() - 1);
  const weeks = [];
  let current = new Date(start);
  while (current <= end) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dt = new Date(current);
      week.push({
        date: dt.toISOString().split("T")[0],
        displayDate: dt.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      });
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
    if (weeks.length >= 53) break;
  }
  return weeks;
}
const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function calcStats(heatmapData) {
  var _a;
  const totalVerses = heatmapData.reduce((s, d) => s + d.versesRead, 0);
  const totalSessions = heatmapData.filter((d) => d.versesRead > 0).length;
  const avgDaily = totalSessions > 0 ? Math.round(totalVerses / totalSessions) : 0;
  const completion = Math.min(100, Math.round(totalVerses / 700 * 100));
  const chapterCount = {};
  for (const d of heatmapData) {
    chapterCount[d.chaptersRead] = (chapterCount[d.chaptersRead] ?? 0) + 1;
  }
  const favChapter = ((_a = Object.entries(chapterCount).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _a[0]) ?? "—";
  const consistencyScore = Math.round(totalSessions / 365 * 100);
  return {
    totalVerses,
    totalSessions,
    avgDaily,
    completion,
    favChapter,
    consistencyScore
  };
}
function HeatmapPage() {
  const { streak } = useStreak();
  const heatmapData = reactExports.useMemo(() => loadHeatmap(), []);
  const grid = reactExports.useMemo(() => buildGrid(), []);
  const [hovered, setHovered] = reactExports.useState(null);
  const dataMap = reactExports.useMemo(() => {
    const map = {};
    for (const d of heatmapData) {
      map[d.date] = d;
    }
    return map;
  }, [heatmapData]);
  const stats = reactExports.useMemo(() => calcStats(heatmapData), [heatmapData]);
  const monthPositions = reactExports.useMemo(() => {
    const positions = [];
    let lastMonth = -1;
    grid.forEach((week, col) => {
      const d = new Date(week[0].date);
      const m = d.getMonth();
      if (m !== lastMonth) {
        positions.push({ label: MONTH_LABELS[m], col });
        lastMonth = m;
      }
    });
    return positions;
  }, [grid]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ साधना-मानचित्र ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Reading Progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm", children: "365 days of your sacred journey through the Gita" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8",
        "data-ocid": "heatmap.stats_section",
        children: [
          {
            label: "Current Streak",
            value: `${streak.count} days`,
            icon: "🔥"
          },
          {
            label: "Longest Streak",
            value: `${streak.longestStreak} days`,
            icon: "⚡"
          },
          {
            label: "Verses Read",
            value: `${stats.totalVerses} / 700`,
            icon: "📜"
          },
          { label: "Completion", value: `${stats.completion}%`, icon: "🌟" },
          { label: "Avg Daily", value: `${stats.avgDaily} verses`, icon: "📖" },
          {
            label: "Consistency",
            value: `${stats.consistencyScore}%`,
            icon: "🙏"
          }
        ].map(({ label, value, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card text-center p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg text-accent", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground mt-0.5", children: label })
        ] }, label))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.2 },
        className: "sacred-card p-5 overflow-x-auto",
        "data-ocid": "heatmap.grid",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[640px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-1 pl-8", style: { gap: "3px" }, children: grid.map((week) => {
            const firstDate = week[0].date;
            const mp = monthPositions.find(
              (p) => p.col === grid.indexOf(week)
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-body text-xs text-muted-foreground",
                style: { width: 13, flexShrink: 0 },
                children: mp ? mp.label : ""
              },
              firstDate
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col mr-1", style: { gap: "3px" }, children: DAY_LABELS.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-body text-xs text-muted-foreground flex items-center justify-end pr-1",
                style: {
                  height: 13,
                  width: 28,
                  visibility: i % 2 === 0 ? "visible" : "hidden"
                },
                children: day
              },
              day
            )) }),
            grid.map((week) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-col",
                style: { gap: "3px" },
                children: week.map((cell) => {
                  const dayData = dataMap[cell.date];
                  const bg = cellColor(dayData);
                  const isFuture = cell.date > (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "data-ocid": "heatmap.day_cell",
                      style: {
                        width: 13,
                        height: 13,
                        borderRadius: 2,
                        background: isFuture ? "oklch(0.88 0.02 65 / 0.4)" : bg,
                        border: `1px solid ${isFuture ? "oklch(0.82 0.02 60 / 0.2)" : "oklch(0.72 0.1 52 / 0.25)"}`,
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "transform 0.1s"
                      },
                      onMouseEnter: () => setHovered({ day: dayData, label: cell.displayDate }),
                      onMouseLeave: () => setHovered(null)
                    },
                    cell.date
                  );
                })
              },
              week[0].date
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: "Less" }),
            [
              { bg: "oklch(0.88 0.04 65)", label: "None" },
              { bg: "oklch(0.82 0.18 60)", label: "1–3" },
              { bg: "oklch(0.70 0.22 52)", label: "4–10" },
              { bg: "oklch(0.60 0.22 34)", label: "10+" },
              { bg: "oklch(0.72 0.28 52)", label: "Goal" }
            ].map(({ bg, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: 13,
                    height: 13,
                    borderRadius: 2,
                    background: bg,
                    border: "1px solid oklch(0.72 0.1 52 / 0.25)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: label })
            ] }, label)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: "More" })
          ] })
        ] })
      }
    ),
    hovered && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 4 },
        animate: { opacity: 1, y: 0 },
        className: "sacred-card mt-4 p-4 max-w-xs mx-auto text-center shadow-elevated",
        "data-ocid": "heatmap.tooltip",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground mb-1", children: hovered.label }),
          hovered.day ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-xs text-muted-foreground space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Verses read:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: hovered.day.versesRead })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Chapters touched:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: hovered.day.chaptersRead })
            ] }),
            hovered.day.allGoalsMet && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent font-bold", children: "✦ All goals met!" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "No reading recorded" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        className: "mt-8 sacred-card p-6",
        "data-ocid": "heatmap.summary_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-accent", children: "✦ Sacred Statistics" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 font-body text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total Sessions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-accent", children: stats.totalSessions })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Average Daily Verses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-accent", children: stats.avgDaily })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Verses of 700 Completed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-accent", children: stats.totalVerses })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Reading Consistency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-accent", children: [
                stats.consistencyScore,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Progress to Completion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-accent", children: [
                stats.completion,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted/60 overflow-hidden border border-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: `${stats.completion}%` },
                transition: { duration: 1.2, ease: "easeOut" },
                className: "h-full rounded-full",
                style: {
                  background: "linear-gradient(90deg, oklch(0.72 0.28 52), oklch(0.60 0.22 34))"
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mt-1 text-center", children: [
              stats.totalVerses,
              " of 700 verses read — ",
              700 - stats.totalVerses,
              " ",
              "remaining on your sacred journey"
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  HeatmapPage
};
