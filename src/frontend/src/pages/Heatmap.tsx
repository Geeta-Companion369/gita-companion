import { useStreak } from "@/hooks/use-streak";
import type { HeatmapDay } from "@/types/gita";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

// ─── LocalStorage helpers ────────────────────────────────────────────────────
const HEATMAP_KEY = "gita-heatmap";

function loadHeatmap(): HeatmapDay[] {
  try {
    const raw = localStorage.getItem(HEATMAP_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HeatmapDay[];
  } catch {
    return [];
  }
}

// ─── Color scale ──────────────────────────────────────────────────────────────
function cellColor(day: HeatmapDay | undefined): string {
  if (!day || day.versesRead === 0) return "oklch(0.88 0.04 65)"; // off-white parchment
  if (day.allGoalsMet) return "oklch(0.72 0.28 52)"; // vibrant gold
  if (day.versesRead >= 10) return "oklch(0.60 0.22 34)"; // deep saffron
  if (day.versesRead >= 4) return "oklch(0.70 0.22 52)"; // medium gold
  return "oklch(0.82 0.18 60)"; // light amber
}

// ─── Build 52×7 grid aligned to Sunday ───────────────────────────────────────
function buildGrid(): { date: string; displayDate: string }[][] {
  const today = new Date();
  const end = new Date(today);
  const start = new Date(today);
  start.setDate(start.getDate() - 364);

  // Align start to last Sunday
  while (start.getDay() !== 0) start.setDate(start.getDate() - 1);

  const weeks: { date: string; displayDate: string }[][] = [];
  let current = new Date(start);

  while (current <= end) {
    const week: { date: string; displayDate: string }[] = [];
    for (let d = 0; d < 7; d++) {
      const dt = new Date(current);
      week.push({
        date: dt.toISOString().split("T")[0],
        displayDate: dt.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
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
  "Dec",
];
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ─── Stats helpers ────────────────────────────────────────────────────────────
function calcStats(heatmapData: HeatmapDay[]) {
  const totalVerses = heatmapData.reduce((s, d) => s + d.versesRead, 0);
  const totalSessions = heatmapData.filter((d) => d.versesRead > 0).length;
  const avgDaily =
    totalSessions > 0 ? Math.round(totalVerses / totalSessions) : 0;
  const completion = Math.min(100, Math.round((totalVerses / 700) * 100));

  const chapterCount: Record<number, number> = {};
  for (const d of heatmapData) {
    chapterCount[d.chaptersRead] = (chapterCount[d.chaptersRead] ?? 0) + 1;
  }
  const favChapter =
    Object.entries(chapterCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

  const consistencyScore = Math.round((totalSessions / 365) * 100);
  return {
    totalVerses,
    totalSessions,
    avgDaily,
    completion,
    favChapter,
    consistencyScore,
  };
}

export function HeatmapPage() {
  const { streak } = useStreak();
  const heatmapData = useMemo(() => loadHeatmap(), []);
  const grid = useMemo(() => buildGrid(), []);
  const [hovered, setHovered] = useState<{
    day: HeatmapDay | undefined;
    label: string;
  } | null>(null);

  const dataMap = useMemo(() => {
    const map: Record<string, HeatmapDay> = {};
    for (const d of heatmapData) {
      map[d.date] = d;
    }
    return map;
  }, [heatmapData]);

  const stats = useMemo(() => calcStats(heatmapData), [heatmapData]);

  // Month labels for the top of the grid
  const monthPositions = useMemo(() => {
    const positions: { label: string; col: number }[] = [];
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

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ साधना-मानचित्र ॥</p>
        <h1 className="chapter-header">Reading Progress</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm">
          365 days of your sacred journey through the Gita
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
        data-ocid="heatmap.stats_section"
      >
        {[
          {
            label: "Current Streak",
            value: `${streak.count} days`,
            icon: "🔥",
          },
          {
            label: "Longest Streak",
            value: `${streak.longestStreak} days`,
            icon: "⚡",
          },
          {
            label: "Verses Read",
            value: `${stats.totalVerses} / 700`,
            icon: "📜",
          },
          { label: "Completion", value: `${stats.completion}%`, icon: "🌟" },
          { label: "Avg Daily", value: `${stats.avgDaily} verses`, icon: "📖" },
          {
            label: "Consistency",
            value: `${stats.consistencyScore}%`,
            icon: "🙏",
          },
        ].map(({ label, value, icon }) => (
          <div key={label} className="sacred-card text-center p-4">
            <div className="text-2xl mb-1">{icon}</div>
            <div className="font-display font-bold text-lg text-accent">
              {value}
            </div>
            <div className="font-body text-xs text-muted-foreground mt-0.5">
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Heatmap grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="sacred-card p-5 overflow-x-auto"
        data-ocid="heatmap.grid"
      >
        <div className="min-w-[640px]">
          {/* Month labels */}
          <div className="flex mb-1 pl-8" style={{ gap: "3px" }}>
            {grid.map((week) => {
              const firstDate = week[0].date;
              const mp = monthPositions.find(
                (p) => p.col === grid.indexOf(week),
              );
              return (
                <div
                  key={firstDate}
                  className="font-body text-xs text-muted-foreground"
                  style={{ width: 13, flexShrink: 0 }}
                >
                  {mp ? mp.label : ""}
                </div>
              );
            })}
          </div>

          {/* Day rows */}
          <div className="flex gap-0.5">
            {/* Day labels */}
            <div className="flex flex-col mr-1" style={{ gap: "3px" }}>
              {DAY_LABELS.map((day, i) => (
                <div
                  key={day}
                  className="font-body text-xs text-muted-foreground flex items-center justify-end pr-1"
                  style={{
                    height: 13,
                    width: 28,
                    visibility: i % 2 === 0 ? "visible" : "hidden",
                  }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Week columns */}
            {grid.map((week) => (
              <div
                key={week[0].date}
                className="flex flex-col"
                style={{ gap: "3px" }}
              >
                {week.map((cell) => {
                  const dayData = dataMap[cell.date];
                  const bg = cellColor(dayData);
                  const isFuture =
                    cell.date > new Date().toISOString().split("T")[0];
                  return (
                    <div
                      key={cell.date}
                      data-ocid="heatmap.day_cell"
                      style={{
                        width: 13,
                        height: 13,
                        borderRadius: 2,
                        background: isFuture ? "oklch(0.88 0.02 65 / 0.4)" : bg,
                        border: `1px solid ${isFuture ? "oklch(0.82 0.02 60 / 0.2)" : "oklch(0.72 0.1 52 / 0.25)"}`,
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "transform 0.1s",
                      }}
                      onMouseEnter={() =>
                        setHovered({ day: dayData, label: cell.displayDate })
                      }
                      onMouseLeave={() => setHovered(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-body text-xs text-muted-foreground">
              Less
            </span>
            {[
              { bg: "oklch(0.88 0.04 65)", label: "None" },
              { bg: "oklch(0.82 0.18 60)", label: "1–3" },
              { bg: "oklch(0.70 0.22 52)", label: "4–10" },
              { bg: "oklch(0.60 0.22 34)", label: "10+" },
              { bg: "oklch(0.72 0.28 52)", label: "Goal" },
            ].map(({ bg, label }) => (
              <div key={label} className="flex items-center gap-1">
                <div
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 2,
                    background: bg,
                    border: "1px solid oklch(0.72 0.1 52 / 0.25)",
                  }}
                />
                <span className="font-body text-xs text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
            <span className="font-body text-xs text-muted-foreground">
              More
            </span>
          </div>
        </div>
      </motion.div>

      {/* Hover tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="sacred-card mt-4 p-4 max-w-xs mx-auto text-center shadow-elevated"
          data-ocid="heatmap.tooltip"
        >
          <p className="font-display font-bold text-sm text-foreground mb-1">
            {hovered.label}
          </p>
          {hovered.day ? (
            <div className="font-body text-xs text-muted-foreground space-y-0.5">
              <p>
                Verses read:{" "}
                <span className="text-accent font-bold">
                  {hovered.day.versesRead}
                </span>
              </p>
              <p>
                Chapters touched:{" "}
                <span className="text-accent font-bold">
                  {hovered.day.chaptersRead}
                </span>
              </p>
              {hovered.day.allGoalsMet && (
                <p className="text-accent font-bold">✦ All goals met!</p>
              )}
            </div>
          ) : (
            <p className="font-body text-xs text-muted-foreground">
              No reading recorded
            </p>
          )}
        </motion.div>
      )}

      {/* Summary section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 sacred-card p-6"
        data-ocid="heatmap.summary_section"
      >
        <div className="divider-ornate mb-4">
          <span className="font-display font-bold text-accent">
            ✦ Sacred Statistics
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 font-body text-sm text-foreground">
          <div className="flex justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Total Sessions</span>
            <span className="font-bold text-accent">{stats.totalSessions}</span>
          </div>
          <div className="flex justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Average Daily Verses</span>
            <span className="font-bold text-accent">{stats.avgDaily}</span>
          </div>
          <div className="flex justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">
              Verses of 700 Completed
            </span>
            <span className="font-bold text-accent">{stats.totalVerses}</span>
          </div>
          <div className="flex justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Reading Consistency</span>
            <span className="font-bold text-accent">
              {stats.consistencyScore}%
            </span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-muted-foreground">
              Progress to Completion
            </span>
            <span className="font-bold text-accent">{stats.completion}%</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="h-3 rounded-full bg-muted/60 overflow-hidden border border-accent/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.completion}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.28 52), oklch(0.60 0.22 34))",
              }}
            />
          </div>
          <p className="font-body text-xs text-muted-foreground mt-1 text-center">
            {stats.totalVerses} of 700 verses read — {700 - stats.totalVerses}{" "}
            remaining on your sacred journey
          </p>
        </div>
      </motion.div>
    </div>
  );
}
