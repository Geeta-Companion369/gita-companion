import { Input } from "@/components/ui/input";
import { useBadges } from "@/hooks/use-badges";
import { useMalaHistory } from "@/hooks/use-mala-history";
import { useNaamHistory } from "@/hooks/use-naam-history";
import { usePoints } from "@/hooks/use-points";
import { useStreak } from "@/hooks/use-streak";
import { useUserProfile } from "@/hooks/use-user-profile";
import type { MalaSession, NaamSession } from "@/types/gita";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Achievement ladder ─────────────────────────────────────────────────────────
const NAAM_LEVELS = [
  {
    title: "Shraddhavan",
    minReps: 0,
    maxReps: 1007,
    seal: "🌿",
    desc: "The Faithful Seeker",
  },
  {
    title: "Bhakta",
    minReps: 1008,
    maxReps: 10007,
    seal: "🪷",
    desc: "The Devoted Soul",
  },
  {
    title: "Naam Premi",
    minReps: 10008,
    maxReps: 53999,
    seal: "📿",
    desc: "Lover of the Sacred Name",
  },
  {
    title: "Naam Sadhak",
    minReps: 54000,
    maxReps: 124999,
    seal: "🔱",
    desc: "Practitioner of Naam",
  },
  {
    title: "Krishna Sevak",
    minReps: 125000,
    maxReps: Number.POSITIVE_INFINITY,
    seal: "🪈",
    desc: "Servant of Lord Krishna",
  },
];

function getSpiritualTitle(reps: number) {
  return (
    [...NAAM_LEVELS].reverse().find((l) => reps >= l.minReps) ?? NAAM_LEVELS[0]
  );
}
function getNextLevel(reps: number) {
  return NAAM_LEVELS.find((l) => reps < l.minReps);
}

const STREAK_BADGES = [
  {
    days: 3,
    id: "streak-3",
    label: "3 Days",
    symbol: "🔥",
    title: "Spark of Devotion",
  },
  {
    days: 7,
    id: "streak-7",
    label: "7 Days",
    symbol: "⭐",
    title: "Week of Grace",
  },
  {
    days: 21,
    id: "streak-21",
    label: "21 Days",
    symbol: "🌟",
    title: "Habit of the Soul",
  },
  {
    days: 108,
    id: "streak-108",
    label: "108 Days",
    symbol: "🪬",
    title: "Sacred Completion",
  },
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
function formatTimestamp(ts: number): string {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type ActivitySession = (MalaSession | NaamSession) & { kind: "mala" | "naam" };

// ─── Wax seal badge component ───────────────────────────────────────────────────
function WaxSeal({
  symbol,
  label,
  sublabel,
  earned,
  earnedDate,
}: {
  symbol: string;
  label: string;
  sublabel?: string;
  earned: boolean;
  earnedDate?: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2 text-center"
      title={
        earned && earnedDate
          ? `Earned: ${earnedDate}`
          : `${label} — not yet earned`
      }
    >
      <div
        className="relative w-16 h-16 flex items-center justify-center transition-smooth"
        style={{
          background: earned
            ? "radial-gradient(circle at 40% 35%, oklch(0.62 0.20 38), oklch(0.42 0.18 32))"
            : "radial-gradient(circle at 40% 35%, oklch(0.82 0.05 54), oklch(0.72 0.06 50))",
          borderRadius: "50%",
          boxShadow: earned
            ? "0 3px 14px oklch(0.48 0.18 38 / 0.5), inset 0 1px 0 oklch(0.72 0.12 44 / 0.4), inset 0 -1px 0 oklch(0.28 0.10 32 / 0.3)"
            : "0 2px 6px rgba(80,55,30,0.1), inset 0 1px 0 rgba(255,248,220,0.2)",
          border: earned
            ? "2px solid oklch(0.38 0.14 34)"
            : "2px solid oklch(0.68 0.07 52)",
          opacity: earned ? 1 : 0.45,
          filter: earned ? "none" : "grayscale(0.5)",
        }}
      >
        <span className="text-2xl leading-none select-none">{symbol}</span>
        {/* Wax seal crack effect */}
        {earned && (
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, oklch(0.72 0.14 44 / 0.25) 0%, transparent 55%)",
            }}
          />
        )}
      </div>
      <div>
        <p
          className="font-display text-xs font-bold"
          style={{
            color: earned ? "oklch(0.28 0.08 36)" : "oklch(0.58 0.05 50)",
          }}
        >
          {label}
        </p>
        {sublabel && (
          <p
            className="font-body text-[9px] italic mt-0.5"
            style={{ color: "oklch(0.52 0.06 50)" }}
          >
            {sublabel}
          </p>
        )}
        {!earned && (
          <p
            className="font-body text-[9px] mt-0.5"
            style={{ color: "oklch(0.62 0.06 52)" }}
          >
            — locked —
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Manuscript record row ──────────────────────────────────────────────────────
function RecordRow({
  icon,
  label,
  value,
  note,
}: { icon: string; label: string; value: string | number; note?: string }) {
  return (
    <div
      className="flex items-baseline justify-between py-2.5 border-b border-dashed"
      style={{ borderColor: "oklch(0.70 0.08 52 / 0.35)" }}
    >
      <span
        className="font-body text-sm italic flex items-center gap-2"
        style={{ color: "oklch(0.48 0.05 50)" }}
      >
        <span className="text-base w-5 text-center">{icon}</span>
        {label}
      </span>
      <span>
        <span
          className="font-display text-base font-bold"
          style={{ color: "oklch(0.28 0.08 36)" }}
        >
          {typeof value === "number" ? value.toLocaleString() : value}
        </span>
        {note && (
          <span
            className="font-body text-xs italic ml-1.5"
            style={{ color: "oklch(0.52 0.08 50)" }}
          >
            {note}
          </span>
        )}
      </span>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export function ProfilePage() {
  const { profile, setProfile, displayName } = useUserProfile();
  const { streak } = useStreak();
  const { points } = usePoints();
  const { badges, hasBadge, checkAndAwardBadges } = useBadges();
  const { history: malaHistory, totalBeads } = useMalaHistory();
  const { history: naamHistory, totalReps, completedCycles } = useNaamHistory();

  const [editing, setEditing] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);

  useEffect(() => {
    checkAndAwardBadges(streak.count, totalBeads, totalReps);
  }, [streak.count, totalBeads, totalReps, checkAndAwardBadges]);

  const spiritualTitle = getSpiritualTitle(totalReps);
  const nextLevel = getNextLevel(totalReps);

  const nextBadge = STREAK_BADGES.find((b) => streak.count < b.days);
  const daysToNextBadge = nextBadge ? nextBadge.days - streak.count : 0;

  const allDates = new Set([
    ...malaHistory.map((s) => s.date),
    ...naamHistory.map((s) => s.date),
  ]);
  const daysActive = allDates.size;

  const versesRead = (() => {
    try {
      const raw = localStorage.getItem("gita-read-verses");
      if (!raw) return 0;
      return (JSON.parse(raw) as string[]).length;
    } catch {
      return 0;
    }
  })();

  const recentActivity: ActivitySession[] = [
    ...malaHistory.slice(0, 10).map((s) => ({ ...s, kind: "mala" as const })),
    ...naamHistory.slice(0, 10).map((s) => ({ ...s, kind: "naam" as const })),
  ]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 6);

  const handleSaveName = () => {
    setProfile({ name: nameInput });
    setEditing(false);
  };
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSaveName();
    if (e.key === "Escape") setEditing(false);
  };

  // Level progress
  const levelProgressPct = nextLevel
    ? ((totalReps - spiritualTitle.minReps) /
        (nextLevel.minReps - spiritualTitle.minReps)) *
      100
    : 100;

  const parchmentPanel = {
    background: "oklch(0.91 0.07 58 / 0.60)",
    border: "1px solid oklch(0.72 0.08 52 / 0.45)",
    borderRadius: "2px",
    boxShadow:
      "inset 0 1px 0 rgba(255,248,220,0.3), 0 2px 8px rgba(80,55,30,0.08)",
  };

  return (
    <div className="max-w-2xl mx-auto pb-16">
      {/* Page Header — sacred diary with rainbow accent */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p
          className="text-verse-number mb-1"
          style={{ letterSpacing: "0.2em" }}
        >
          Personal Sadhana Diary
        </p>
        <h1
          className="chapter-header"
          style={{
            textShadow:
              "0 4px 20px rgba(180,130,45,0.30), 0 0 48px oklch(0.78 0.34 54 / 0.15)",
          }}
        >
          My Spiritual Record
        </h1>
        <p className="text-translation mt-2 mx-auto max-w-sm">
          A faithful record of your daily practice, devotion, and progress upon
          the sacred path.
        </p>
        <div className="manuscript-header-border mt-5 mb-2" />
      </motion.div>

      {/* Identity / Devotee Card — inscribed name page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mb-7"
      >
        <div
          className="relative p-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.96 0.08 60 / 0.95) 0%, oklch(0.93 0.10 56 / 0.90) 50%, oklch(0.91 0.09 52) 100%)",
            border: "2.5px solid oklch(0.72 0.30 54 / 0.55)",
            borderRadius: "6px",
            boxShadow:
              "0 8px 36px rgba(190,140,45,0.25), 0 0 0 1px oklch(0.82 0.26 54 / 0.12), inset 0 1px 0 rgba(255,252,228,0.65)",
          }}
        >
          {/* Rainbow top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.70 0.28 46), oklch(0.56 0.24 268), oklch(0.70 0.28 46), oklch(0.84 0.38 54))",
              boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.55)",
            }}
          />
          {/* Background Om watermark */}
          <div
            className="absolute top-2 right-4 select-none pointer-events-none font-display font-bold"
            aria-hidden
            style={{
              fontSize: "8rem",
              lineHeight: "1",
              color: "oklch(0.52 0.22 50 / 0.055)",
            }}
          >
            ॐ
          </div>
          {/* Corner ornaments */}
          {[
            "top-4 left-4",
            "top-4 right-4",
            "bottom-4 left-4",
            "bottom-4 right-4",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute ${pos} font-display text-xs pointer-events-none select-none`}
              style={{ color: "oklch(0.70 0.28 54 / 0.45)" }}
              aria-hidden
            >
              ✦
            </span>
          ))}

          <div className="flex items-start gap-5">
            {/* Wax seal avatar */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "radial-gradient(circle at 38% 32%, oklch(0.62 0.20 42), oklch(0.40 0.16 34))",
                border: "2px solid oklch(0.40 0.14 36)",
                boxShadow:
                  "0 4px 16px oklch(0.42 0.16 38 / 0.45), inset 0 1px 0 oklch(0.72 0.12 44 / 0.35)",
              }}
            >
              <span className="text-4xl leading-none select-none">
                {spiritualTitle.seal}
              </span>
            </div>

            {/* Name and title */}
            <div className="flex-1 min-w-0">
              {editing ? (
                <div className="flex items-center gap-2 mb-1">
                  <Input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={handleNameKeyDown}
                    onBlur={handleSaveName}
                    placeholder="Your name"
                    className="font-body h-8 text-base"
                    autoFocus
                    data-ocid="profile-name-input"
                  />
                  <button
                    type="button"
                    onClick={handleSaveName}
                    className="font-body text-xs px-3 h-8 transition-smooth shrink-0"
                    style={{
                      background: "oklch(0.42 0.14 40)",
                      color: "oklch(0.92 0.07 58)",
                      border: "1px solid oklch(0.38 0.12 38)",
                      borderRadius: "2px",
                    }}
                    data-ocid="profile-save"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 mb-0.5">
                  <p
                    className="font-display text-2xl font-bold italic"
                    style={{ color: "oklch(0.22 0.06 38)" }}
                  >
                    {displayName}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setNameInput(profile.name);
                      setEditing(true);
                    }}
                    className="transition-smooth"
                    style={{ color: "oklch(0.58 0.08 48)", padding: "0.15rem" }}
                    aria-label="Edit name"
                    data-ocid="profile-edit-name"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <title>Edit name</title>
                      <path d="M11.5 1.5a1.5 1.5 0 0 1 2.12 2.12L5 12.24l-2.5.5.5-2.5L11.5 1.5z" />
                    </svg>
                  </button>
                </div>
              )}

              <p
                className="font-display text-sm font-semibold italic"
                style={{ color: "oklch(0.48 0.18 44)" }}
              >
                {spiritualTitle.title}
              </p>
              <p
                className="font-body text-xs italic mt-0.5"
                style={{ color: "oklch(0.52 0.08 50)" }}
              >
                {spiritualTitle.desc}
              </p>
              <p
                className="font-body text-xs mt-1.5"
                style={{ color: "oklch(0.58 0.06 52)" }}
              >
                Sadhana begun {formatDate(profile.joinDate)}
              </p>
            </div>
          </div>

          {/* Level progress bar — manuscript ink line */}
          {nextLevel && (
            <div
              className="mt-5 pt-4"
              style={{ borderTop: "1px dashed oklch(0.68 0.08 52 / 0.4)" }}
            >
              <div className="flex justify-between items-baseline mb-2">
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.08 50)" }}
                >
                  Path to{" "}
                  <span
                    style={{ color: "oklch(0.42 0.14 44)", fontWeight: "600" }}
                  >
                    {nextLevel.title}
                  </span>
                </p>
                <p
                  className="font-body text-xs"
                  style={{ color: "oklch(0.52 0.08 50)" }}
                >
                  {(nextLevel.minReps - totalReps).toLocaleString()} reps
                  remaining
                </p>
              </div>
              <div
                className="h-2 relative overflow-hidden"
                style={{
                  background: "oklch(0.82 0.06 56)",
                  border: "1px solid oklch(0.70 0.07 52 / 0.5)",
                  borderRadius: "1px",
                }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.52 0.16 44), oklch(0.62 0.22 48))",
                    boxShadow: "inset 0 1px 0 oklch(0.72 0.14 50 / 0.4)",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, levelProgressPct)}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Streak Record */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.13 }}
        className="mb-7"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-4">Streak of Daily Practice</p>
        <div className="p-5" style={parchmentPanel}>
          <div className="flex items-center gap-6 mb-5">
            <div className="text-center">
              <p
                className="font-display text-5xl font-bold italic"
                style={{ color: "oklch(0.48 0.18 44)" }}
              >
                {streak.count}
              </p>
              <p
                className="font-body text-xs italic mt-1"
                style={{ color: "oklch(0.52 0.06 50)" }}
              >
                days current streak
              </p>
            </div>
            <div
              className="h-10 w-px"
              style={{ background: "oklch(0.70 0.07 52 / 0.4)" }}
            />
            <div className="text-center">
              <p
                className="font-display text-3xl font-bold italic"
                style={{ color: "oklch(0.32 0.06 42)" }}
              >
                {streak.longestStreak}
              </p>
              <p
                className="font-body text-xs italic mt-1"
                style={{ color: "oklch(0.52 0.06 50)" }}
              >
                best ever streak
              </p>
            </div>
            {nextBadge && (
              <div className="ml-auto text-right">
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.06 50)" }}
                >
                  <span
                    className="font-bold"
                    style={{ color: "oklch(0.32 0.08 40)" }}
                  >
                    {daysToNextBadge}
                  </span>{" "}
                  days to {nextBadge.symbol}
                </p>
                <p
                  className="font-body text-[10px] italic"
                  style={{ color: "oklch(0.58 0.06 52)" }}
                >
                  {nextBadge.label} badge
                </p>
              </div>
            )}
          </div>
          {/* Streak seals */}
          <div
            className="flex gap-4 justify-center flex-wrap pt-3"
            style={{ borderTop: "1px dashed oklch(0.68 0.08 52 / 0.35)" }}
          >
            {STREAK_BADGES.map((sb) => (
              <WaxSeal
                key={sb.id}
                symbol={sb.symbol}
                label={sb.label}
                sublabel={sb.title}
                earned={hasBadge(sb.id)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Points Record */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="mb-7"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-4">Points & Sacred Offerings</p>
        <div className="p-5" style={parchmentPanel}>
          <div className="flex items-baseline gap-3 mb-4">
            <span
              className="font-display text-5xl font-bold italic"
              style={{ color: "oklch(0.48 0.18 44)" }}
            >
              {points.total.toLocaleString()}
            </span>
            <span
              className="font-body text-sm italic"
              style={{ color: "oklch(0.52 0.06 50)" }}
            >
              total sacred points
            </span>
          </div>
          <RecordRow
            icon="✍️"
            label="From Naam Writing"
            value={points.fromWriting}
            note="pts"
          />
          <RecordRow
            icon="📖"
            label="From Reading"
            value={points.fromReading}
            note="pts"
          />
          <RecordRow
            icon="🎵"
            label="From Listening"
            value={points.fromListening}
            note="pts"
          />
          <RecordRow
            icon="🔥"
            label="From Streaks"
            value={points.fromStreak}
            note="pts"
          />
          {/* Next milestone */}
          <div
            className="mt-4 pt-3"
            style={{ borderTop: "1px dashed oklch(0.68 0.08 52 / 0.35)" }}
          >
            <div
              className="flex justify-between text-xs font-body italic mb-2"
              style={{ color: "oklch(0.52 0.06 50)" }}
            >
              <span>{points.total % 100} / 100 to next milestone</span>
              <span>{Math.ceil((points.total + 1) / 100) * 100} pts</span>
            </div>
            <div
              className="h-1.5 relative overflow-hidden"
              style={{
                background: "oklch(0.82 0.06 56)",
                border: "1px solid oklch(0.70 0.07 52 / 0.5)",
                borderRadius: "1px",
              }}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.52 0.16 44), oklch(0.62 0.22 48))",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${((points.total % 100) / 100) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievement Ladder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="mb-7"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-4">The Sadhana Ladder</p>
        <div
          className="overflow-hidden"
          style={{
            border: "1px solid oklch(0.72 0.08 52 / 0.45)",
            borderRadius: "2px",
            background: "oklch(0.91 0.07 58 / 0.55)",
          }}
        >
          {NAAM_LEVELS.map((level, i) => {
            const isActive = spiritualTitle.title === level.title;
            const isUnlocked = totalReps >= level.minReps;
            return (
              <div
                key={level.title}
                className="flex items-center gap-4 px-5 py-4 transition-smooth"
                style={{
                  borderBottom:
                    i < NAAM_LEVELS.length - 1
                      ? "1px dashed oklch(0.70 0.08 52 / 0.35)"
                      : "none",
                  background: isActive
                    ? "oklch(0.89 0.09 57 / 0.8)"
                    : "transparent",
                  borderLeft: isActive
                    ? "3px solid oklch(0.58 0.18 46)"
                    : "3px solid transparent",
                }}
              >
                <span
                  className="text-2xl leading-none w-8 text-center flex-shrink-0"
                  style={{
                    opacity: isUnlocked ? 1 : 0.3,
                    filter: isUnlocked ? "none" : "grayscale(1)",
                  }}
                >
                  {level.seal}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-display text-sm font-bold italic"
                    style={{
                      color: isActive
                        ? "oklch(0.38 0.14 40)"
                        : isUnlocked
                          ? "oklch(0.28 0.08 36)"
                          : "oklch(0.58 0.05 52)",
                    }}
                  >
                    {level.title}
                    {isActive && (
                      <span
                        className="ml-2 font-body text-xs font-normal"
                        style={{ color: "oklch(0.48 0.16 44)" }}
                      >
                        — your current rank
                      </span>
                    )}
                  </p>
                  <p
                    className="font-body text-xs italic mt-0.5"
                    style={{ color: "oklch(0.52 0.06 50)" }}
                  >
                    {level.desc} ·{" "}
                    {level.maxReps === Number.POSITIVE_INFINITY
                      ? `${level.minReps.toLocaleString()}+ reps`
                      : `${level.minReps.toLocaleString()} – ${level.maxReps.toLocaleString()}`}
                  </p>
                </div>
                <span
                  className="font-body text-sm flex-shrink-0"
                  style={{
                    color: isUnlocked
                      ? "oklch(0.48 0.16 44)"
                      : "oklch(0.65 0.05 52)",
                  }}
                >
                  {isUnlocked ? "✓" : "⋯"}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Practice Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26 }}
        className="mb-7"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-4">Practice Statistics</p>
        <div className="p-5" style={parchmentPanel}>
          <RecordRow
            icon="✍️"
            label="Naam Reps Lifetime"
            value={totalReps}
            note="total repetitions"
          />
          <RecordRow
            icon="📿"
            label="Mala Sessions"
            value={malaHistory.length}
            note="sessions completed"
          />
          <RecordRow
            icon="🔮"
            label="Full Malas (108 beads)"
            value={Math.floor(totalBeads / 108)}
            note="complete rounds"
          />
          <RecordRow
            icon="📖"
            label="Verses Read"
            value={versesRead}
            note="from Bhagavad Gita"
          />
          <RecordRow
            icon="🔢"
            label="Naam Cycles"
            value={completedCycles}
            note="108-rep cycles"
          />
          <RecordRow
            icon="📅"
            label="Days Active"
            value={daysActive}
            note="unique practice days"
          />
          <RecordRow
            icon="🧠"
            label="Quizzes Completed"
            value={(() => {
              try {
                return (
                  JSON.parse(localStorage.getItem("quiz-session-stats") || "{}")
                    .quizzesCompleted ?? 0
                );
              } catch {
                return 0;
              }
            })()}
            note="Gita Gyan quizzes"
          />
          <RecordRow
            icon="⚔️"
            label="Kurukshetra Battles Won"
            value={Number.parseInt(
              localStorage.getItem("kurukshetra-battles-won") || "0",
              10,
            )}
            note="battles overcome"
          />
        </div>
      </motion.div>

      {/* Earned Badges / Wax Seals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-7"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-4">Sacred Seals Earned</p>
        {badges.length === 0 ? (
          <div
            className="text-center py-10"
            style={{
              border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
              borderRadius: "2px",
              background: "oklch(0.91 0.07 58 / 0.3)",
            }}
          >
            <p className="text-3xl mb-2">🏅</p>
            <p
              className="font-body text-sm italic"
              style={{ color: "oklch(0.52 0.06 50)" }}
            >
              Complete practice streaks and challenges to receive your first
              sacred seal
            </p>
          </div>
        ) : (
          <div className="p-5" style={parchmentPanel}>
            <div className="flex flex-wrap gap-5 justify-center">
              {badges.map((b) => (
                <WaxSeal
                  key={b.id}
                  symbol={b.icon}
                  label={b.name}
                  sublabel={b.description}
                  earned
                  earnedDate={formatTimestamp(Number(b.earnedDate))}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Recent Activity — handwritten diary entries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34 }}
        className="mb-7"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-4">Recent Sadhana Entries</p>
        {recentActivity.length === 0 ? (
          <div
            className="text-center py-10"
            style={{
              border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
              borderRadius: "2px",
              background: "oklch(0.91 0.07 58 / 0.3)",
            }}
          >
            <p className="text-3xl mb-2">🙏</p>
            <p
              className="font-body text-sm italic"
              style={{ color: "oklch(0.52 0.06 50)" }}
            >
              Begin your sadhana — your practice will be recorded here as diary
              entries.
            </p>
          </div>
        ) : (
          <div className="p-5" style={parchmentPanel}>
            {recentActivity.map((session, i) => (
              <div
                key={session.id}
                className="py-3"
                style={{
                  borderBottom:
                    i < recentActivity.length - 1
                      ? "1px dashed oklch(0.70 0.08 52 / 0.35)"
                      : "none",
                }}
                data-ocid={`activity-row-${session.id}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-base w-6 text-center flex-shrink-0 mt-0.5">
                    {session.kind === "naam" ? "✍️" : "📿"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body text-sm italic"
                      style={{ color: "oklch(0.22 0.04 42)" }}
                    >
                      {session.kind === "naam"
                        ? `Naam Writing — ${(session as NaamSession).reps} repetitions`
                        : `Japa Mala — ${(session as MalaSession).beadCount} beads counted`}
                    </p>
                    {"mantra" in session && session.mantra && (
                      <p
                        className="font-body text-xs italic mt-0.5"
                        style={{ color: "oklch(0.52 0.08 50)" }}
                      >
                        {(session as NaamSession).mantra}
                      </p>
                    )}
                  </div>
                  <p
                    className="font-body text-xs italic flex-shrink-0 ml-2"
                    style={{ color: "oklch(0.58 0.06 52)" }}
                  >
                    {formatDate(session.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Subscription Status & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-7"
        data-ocid="profile.subscription.section"
      >
        {(() => {
          const subscribed =
            typeof window !== "undefined" &&
            localStorage.getItem("gita-subscribed") === "true";
          const firstVisit =
            typeof window !== "undefined"
              ? localStorage.getItem("gita-first-visit")
              : null;
          const daysUsed = firstVisit
            ? Math.floor((Date.now() - Number(firstVisit)) / 86400000)
            : 0;
          const trialDaysLeft = Math.max(0, 7 - daysUsed);
          return (
            <div
              className="relative p-6 overflow-hidden"
              style={{
                background: subscribed
                  ? "linear-gradient(145deg, oklch(0.94 0.10 150 / 0.5) 0%, oklch(0.92 0.12 155 / 0.4) 100%)"
                  : "linear-gradient(145deg, oklch(0.96 0.08 60) 0%, oklch(0.93 0.10 56) 100%)",
                border: `2.5px solid ${subscribed ? "oklch(0.55 0.22 150 / 0.55)" : "oklch(0.72 0.30 54 / 0.55)"}`,
                borderRadius: "6px",
                boxShadow: "0 8px 36px rgba(190,140,45,0.20)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]"
                style={{
                  background: subscribed
                    ? "linear-gradient(90deg, oklch(0.55 0.22 150), oklch(0.65 0.22 155))"
                    : "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.65 0.28 46), oklch(0.72 0.22 268), oklch(0.84 0.38 54))",
                }}
              />
              <div className="text-center">
                <p className="text-3xl mb-2">{subscribed ? "✅" : "🔐"}</p>
                <h3
                  className="font-display text-lg font-bold italic mb-1"
                  style={{ color: "oklch(0.22 0.10 32)" }}
                >
                  {subscribed
                    ? "Dharma Subscriber — All Features Unlocked"
                    : trialDaysLeft > 0
                      ? `Free Trial — ${trialDaysLeft} day${trialDaysLeft === 1 ? "" : "s"} remaining`
                      : "Free Trial Ended"}
                </h3>
                <p
                  className="font-body text-xs italic mb-4"
                  style={{ color: "oklch(0.48 0.10 46)" }}
                >
                  {subscribed
                    ? "You are fully in Krishna's embrace. All features unlocked."
                    : "The Bhagavad Gita reading remains free forever — Krishna's wisdom is for every soul."}
                </p>
                {!subscribed && (
                  <div className="text-center">
                    <div
                      className="inline-block mb-3 cursor-pointer transition-smooth hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.50 0.22 44), oklch(0.60 0.26 50))",
                        boxShadow:
                          "0 4px 20px oklch(0.55 0.22 46 / 0.45), inset 0 1px 0 rgba(255,248,220,0.2)",
                        border: "2px solid oklch(0.40 0.16 38)",
                        borderRadius: "4px",
                        padding: "0.75rem 2rem",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          try {
                            localStorage.setItem("gita-subscribed", "true");
                          } catch {
                            /* silent */
                          }
                          window.location.reload();
                        }}
                        className="font-display font-bold italic text-base"
                        style={{ color: "oklch(0.96 0.06 72)" }}
                        data-ocid="profile.subscribe-button"
                      >
                        🙏 Subscribe — ₹108/month ✦
                      </button>
                    </div>
                    <p
                      className="font-body text-xs italic"
                      style={{ color: "oklch(0.52 0.10 46)" }}
                    >
                      Payment integration powered by Stripe — coming soon
                    </p>
                    <p
                      className="font-body text-xs italic mt-1"
                      style={{ color: "oklch(0.52 0.10 46)" }}
                    >
                      Less than ₹4/day — the price of Krishna's full presence in
                      your life
                    </p>
                    <div className="mt-3">
                      <Link
                        to="/chapter/$id"
                        params={{ id: "1" }}
                        className="font-body text-xs italic underline"
                        style={{ color: "oklch(0.48 0.16 44)" }}
                        data-ocid="profile.free-reading-link"
                      >
                        📖 Read the full Gita — always free →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </motion.div>

      <div className="divider-ornate">
        <span>॥ ॐ ॥</span>
      </div>

      {/* About the App — sacred link panel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44 }}
        className="mb-6"
        data-ocid="profile.about.section"
      >
        <Link
          to="/about"
          className="flex items-center gap-4 p-5 transition-smooth group"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.09 60 / 0.95) 0%, oklch(0.94 0.11 56 / 0.92) 100%)",
            border: "2px solid oklch(0.72 0.28 52 / 0.55)",
            borderRadius: "6px",
            boxShadow:
              "0 4px 20px rgba(190,140,45,0.18), inset 0 1px 0 rgba(255,248,210,0.60)",
            textDecoration: "none",
          }}
          data-ocid="profile.about-link"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "radial-gradient(circle at 38% 32%, oklch(0.86 0.38 54) 0%, oklch(0.68 0.28 50) 100%)",
              border: "2px solid oklch(0.68 0.26 50 / 0.70)",
              boxShadow: "0 4px 16px oklch(0.76 0.34 54 / 0.35)",
            }}
          >
            <span className="text-2xl leading-none select-none">🪷</span>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-display text-base font-bold italic mb-0.5"
              style={{ color: "oklch(0.24 0.10 32)" }}
            >
              About Gita Companion
            </p>
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.46 0.12 44)" }}
            >
              Our story, mission, and the Digital Dharma movement
            </p>
          </div>
          <span
            className="font-body text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-smooth"
            style={{ color: "oklch(0.58 0.24 50)" }}
          >
            →
          </span>
        </Link>
      </motion.div>

      <div className="divider-ornate">
        <span>॥ ॐ ॥</span>
      </div>
      <p
        className="text-center font-body text-xs italic pb-4"
        style={{ color: "oklch(0.58 0.06 52)" }}
      >
        🪷 All data is stored locally on your sacred device
      </p>
    </div>
  );
}
