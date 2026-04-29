import {
  ENHANCED_KARMA_QUESTIONS,
  type EnhancedKarmaKey,
  HEALING_STORY_CATEGORIES,
  KARMA_BURNING_METHODS,
  KARMA_TYPES,
} from "@/data/karma-data";
import { useNaamHistory } from "@/hooks/use-naam-history";
import { usePoints } from "@/hooks/use-points";
import { useStreak } from "@/hooks/use-streak";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface DailyGuna {
  date: string;
  sattva: number;
  rajas: number;
  tamas: number;
}

type EnhancedKarmaAnswers = Record<EnhancedKarmaKey, boolean>;

interface KarmaCheckin {
  date: string;
  answers: EnhancedKarmaAnswers;
}

// ─── Persistence helpers ──────────────────────────────────────────────────────

function loadGunaHistory(): DailyGuna[] {
  try {
    return JSON.parse(localStorage.getItem("guna-history") || "[]");
  } catch {
    return [];
  }
}
function saveGunaHistory(h: DailyGuna[]) {
  try {
    localStorage.setItem("guna-history", JSON.stringify(h));
  } catch {}
}
function loadKarmaHistory(): KarmaCheckin[] {
  try {
    return JSON.parse(localStorage.getItem("karma-checkin-history-v2") || "[]");
  } catch {
    return [];
  }
}
function saveKarmaHistory(h: KarmaCheckin[]) {
  try {
    localStorage.setItem("karma-checkin-history-v2", JSON.stringify(h));
  } catch {}
}

// ─── Constants ───────────────────────────────────────────────────────────────

const TODAY = new Date().toISOString().split("T")[0];
const DAY_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const TOTAL_QUESTIONS = ENHANCED_KARMA_QUESTIONS.length;

const WEEK_DAYS = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (6 - i));
  return d.toISOString().split("T")[0];
});

const BLANK_ANSWERS: EnhancedKarmaAnswers = Object.fromEntries(
  ENHANCED_KARMA_QUESTIONS.map((q) => [q.key, false]),
) as EnhancedKarmaAnswers;

function karmaScore(checkin: KarmaCheckin | undefined): number {
  if (!checkin) return 0;
  return Object.values(checkin.answers).filter(Boolean).length;
}

const GUNA_ADVICE: Record<string, { verse: string; message: string }> = {
  rajas_high: {
    verse: "BG 3.37",
    message:
      "Rajas brings desire and agitation. Offer all your actions to Krishna — this purifies rajas into righteous energy.",
  },
  tamas_high: {
    verse: "BG 18.22",
    message:
      "Tamas clouds the mind. Rise for Brahma Muhurta tomorrow, read one verse, and watch the darkness lift.",
  },
  sattva_high: {
    verse: "BG 17.3",
    message:
      "Your sattva shines today. This is the state nearest to Krishna. Deepen it — meditate and read one more verse.",
  },
  balanced: {
    verse: "BG 14.22",
    message:
      "You are witnessing the three gunas with equanimity. This is the beginning of transcendence, Arjun.",
  },
};

// ─── Tabs ─────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "tracker", label: "Daily Tracker", icon: "🌸" },
  { id: "three-karma", label: "3 Types of Karma", icon: "🪷" },
  { id: "burn-karma", label: "How to Burn Karma", icon: "🔥" },
  { id: "stories", label: "Puranic Stories", icon: "📖" },
] as const;
type TabId = (typeof TABS)[number]["id"];

// ─── Main Page ────────────────────────────────────────────────────────────────

export function KarmaMirrorPage() {
  const { history: naamHistory } = useNaamHistory();
  const { points } = usePoints();
  const { streak } = useStreak();

  const [activeTab, setActiveTab] = useState<TabId>("tracker");
  const [gunaHistory, setGunaHistory] = useState<DailyGuna[]>(loadGunaHistory);
  const [karmaHistory, setKarmaHistory] =
    useState<KarmaCheckin[]>(loadKarmaHistory);

  const [sattva, setSattva] = useState(50);
  const [rajas, setRajas] = useState(30);
  const [tamas, setTamas] = useState(20);
  const [gunaSubmitted, setGunaSubmitted] = useState(false);

  const [karmaAnswers, setKarmaAnswers] =
    useState<EnhancedKarmaAnswers>(BLANK_ANSWERS);
  const [karmaSubmitted, setKarmaSubmitted] = useState(false);

  const todayCheckin = karmaHistory.find((c) => c.date === TODAY);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submitGunas() {
    const entry: DailyGuna = { date: TODAY, sattva, rajas, tamas };
    setGunaHistory((prev) => {
      const u = [...prev.filter((g) => g.date !== TODAY), entry];
      saveGunaHistory(u);
      return u;
    });
    setGunaSubmitted(true);
  }

  function submitKarma() {
    const entry: KarmaCheckin = { date: TODAY, answers: karmaAnswers };
    setKarmaHistory((prev) => {
      const u = [...prev.filter((k) => k.date !== TODAY), entry];
      saveKarmaHistory(u);
      return u;
    });
    setKarmaSubmitted(true);
  }

  const dominantGuna =
    sattva >= rajas && sattva >= tamas
      ? "sattva"
      : rajas >= tamas
        ? "rajas"
        : "tamas";
  const gunaKey =
    dominantGuna === "rajas" && rajas > 50
      ? "rajas_high"
      : dominantGuna === "tamas" && tamas > 40
        ? "tamas_high"
        : dominantGuna === "sattva" && sattva > 50
          ? "sattva_high"
          : "balanced";
  const gunaAdvice = GUNA_ADVICE[gunaKey];

  const totalNaamThisWeek = naamHistory
    .filter((s) => WEEK_DAYS.includes(s.date))
    .reduce((sum, s) => sum + s.reps, 0);
  const isSunday = new Date().getDay() === 0;
  const weekKarmaScores = WEEK_DAYS.map((d) => ({
    date: d,
    score: karmaScore(karmaHistory.find((k) => k.date === d)),
  }));

  const wellDone: string[] = [];
  const growthAreas: string[] = [];
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
  const focusVerse =
    avgKarma >= 5
      ? "BG 6.30 — I am never lost to one who is never lost to me"
      : avgKarma >= 2
        ? "BG 18.57 — Work always under my protection"
        : "BG 2.47 — Act rightly, offer results to me";

  // Karma trend analysis
  const thisWeekAvg =
    weekKarmaScores.slice(4).reduce((s, x) => s + x.score, 0) / 3;
  const lastWeekAvg =
    weekKarmaScores.slice(0, 3).reduce((s, x) => s + x.score, 0) / 3;
  const karmaTrend =
    thisWeekAvg > lastWeekAvg + 0.5
      ? "rising"
      : thisWeekAvg < lastWeekAvg - 0.5
        ? "declining"
        : "stable";

  // Best karma category this week
  const categoryScores: Record<string, number> = {};
  for (const { date } of weekKarmaScores) {
    const c = karmaHistory.find((k) => k.date === date);
    if (c) {
      for (const q of ENHANCED_KARMA_QUESTIONS) {
        if (c.answers[q.key])
          categoryScores[q.karmaType] = (categoryScores[q.karmaType] || 0) + 1;
      }
    }
  }
  const topCategory =
    Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

  const todayScore = karmaScore(todayCheckin);
  const divaIntensity = todayScore / TOTAL_QUESTIONS;

  return (
    <div className="page-enter" data-ocid="karma-mirror.page">
      {/* Header */}
      <div className="ornate-header mb-6">
        <h1>कर्म दर्पण</h1>
        <p
          className="font-body text-base italic mt-3"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          Krishna's Sacred Mirror — Karma Illuminated
        </p>
      </div>

      {/* Mirror motif */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 35%, oklch(0.88 0.14 66), oklch(0.78 0.12 60), oklch(0.62 0.16 52))",
            border: "5px solid oklch(0.72 0.30 52)",
            boxShadow:
              "0 0 0 3px oklch(0.88 0.22 56), 0 0 32px oklch(0.72 0.32 52 / 0.4)",
          }}
        >
          <span
            style={{
              fontSize: "3.5rem",
              lineHeight: 1,
              filter: "drop-shadow(0 2px 6px oklch(0.72 0.32 52 / 0.5))",
            }}
          >
            🪞
          </span>
        </motion.div>
      </div>

      {/* Sunday message */}
      {isSunday && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="manuscript-card p-5 mb-6"
          style={{ borderLeft: "4px solid oklch(0.48 0.24 268)" }}
          data-ocid="karma-mirror.sunday-message"
        >
          <p
            className="font-display text-xs font-bold italic mb-2"
            style={{ color: "oklch(0.48 0.20 268)", letterSpacing: "0.08em" }}
          >
            KRISHNA'S SUNDAY MESSAGE
          </p>
          <p
            className="font-body text-sm italic leading-relaxed"
            style={{ color: "oklch(0.22 0.10 32)" }}
          >
            "Hare Krishna, Arjun. Let us review this week's Kurukshetra
            together. You have shown up. You have faced your battles. Every step
            toward me is recorded in eternity. This coming week — focus on:{" "}
            <em>{focusVerse}</em>. I am proud of you, Arjun. Hare Krishna."
          </p>
        </motion.div>
      )}

      {/* Tab Navigation */}
      <div
        className="flex gap-1 mb-6 overflow-x-auto pb-1"
        data-ocid="karma-mirror.tabs"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-display italic font-bold transition-smooth"
            style={{
              background:
                activeTab === tab.id
                  ? "oklch(0.72 0.30 52)"
                  : "oklch(0.88 0.08 66 / 0.6)",
              color: activeTab === tab.id ? "white" : "oklch(0.38 0.14 46)",
              border:
                activeTab === tab.id
                  ? "1.5px solid oklch(0.68 0.30 52)"
                  : "1.5px solid oklch(0.76 0.12 60 / 0.4)",
            }}
            data-ocid={`karma-mirror.tab.${tab.id}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "tracker" && (
          <TrackerTab
            key="tracker"
            gunaHistory={gunaHistory}
            sattva={sattva}
            rajas={rajas}
            tamas={tamas}
            setSattva={setSattva}
            setRajas={setRajas}
            setTamas={setTamas}
            gunaSubmitted={gunaSubmitted}
            submitGunas={submitGunas}
            gunaAdvice={gunaAdvice}
            weekKarmaScores={weekKarmaScores}
            karmaAnswers={karmaAnswers}
            setKarmaAnswers={setKarmaAnswers}
            karmaSubmitted={karmaSubmitted}
            submitKarma={submitKarma}
            todayScore={todayScore}
            divaIntensity={divaIntensity}
            karmaTrend={karmaTrend}
            topCategory={topCategory}
            wellDone={wellDone}
            growthAreas={growthAreas}
            focusVerse={focusVerse}
          />
        )}
        {activeTab === "three-karma" && <ThreeKarmaTab key="three-karma" />}
        {activeTab === "burn-karma" && <BurnKarmaTab key="burn-karma" />}
        {activeTab === "stories" && <StoriesTab key="stories" />}
      </AnimatePresence>

      {/* Biorhythm always at bottom */}
      {activeTab === "tracker" && <BiorhythmSection />}
    </div>
  );
}

// ─── Tracker Tab ──────────────────────────────────────────────────────────────

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
  focusVerse,
}: {
  gunaHistory: DailyGuna[];
  sattva: number;
  rajas: number;
  tamas: number;
  setSattva: (v: number) => void;
  setRajas: (v: number) => void;
  setTamas: (v: number) => void;
  gunaSubmitted: boolean;
  submitGunas: () => void;
  gunaAdvice: { verse: string; message: string };
  weekKarmaScores: { date: string; score: number }[];
  karmaAnswers: EnhancedKarmaAnswers;
  setKarmaAnswers: (
    fn: (prev: EnhancedKarmaAnswers) => EnhancedKarmaAnswers,
  ) => void;
  karmaSubmitted: boolean;
  submitKarma: () => void;
  todayScore: number;
  divaIntensity: number;
  karmaTrend: string;
  topCategory: string | null;
  wellDone: string[];
  growthAreas: string[];
  focusVerse: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Weekly Reflection */}
      <section
        className="manuscript-card p-6"
        data-ocid="karma-mirror.reflection.section"
      >
        <div className="divider-ornate mb-4">✦ This Week's Reflection ✦</div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h4
              className="font-display text-sm font-bold italic mb-2"
              style={{ color: "oklch(0.42 0.18 52)" }}
            >
              What You Did Well
            </h4>
            {wellDone.map((item) => (
              <p
                key={item}
                className="font-body text-sm mb-1.5 flex gap-2 items-start"
                style={{ color: "oklch(0.28 0.10 34)" }}
              >
                <span style={{ color: "oklch(0.58 0.26 52)", flexShrink: 0 }}>
                  ✓
                </span>
                {item}
              </p>
            ))}
          </div>
          <div>
            <h4
              className="font-display text-sm font-bold italic mb-2"
              style={{ color: "oklch(0.52 0.22 32)" }}
            >
              Areas for Growth
            </h4>
            {growthAreas.length > 0 ? (
              growthAreas.map((item) => (
                <p
                  key={item}
                  className="font-body text-sm mb-1.5 flex gap-2 items-start"
                  style={{ color: "oklch(0.28 0.10 34)" }}
                >
                  <span style={{ color: "oklch(0.58 0.26 32)", flexShrink: 0 }}>
                    →
                  </span>
                  {item}
                </p>
              ))
            ) : (
              <p
                className="font-body text-sm italic"
                style={{ color: "oklch(0.45 0.12 46)" }}
              >
                You are walking beautifully, Arjun. 🙏
              </p>
            )}
          </div>
        </div>
        <div className="verse-display">
          <p className="text-verse-number mb-1">NEXT WEEK'S FOCUS VERSE</p>
          <p className="verse-translation italic">{focusVerse}</p>
        </div>
      </section>

      {/* Three Gunas Tracker */}
      <section
        className="manuscript-card p-6"
        data-ocid="karma-mirror.gunas.section"
      >
        <div className="divider-ornate mb-5">⚖️ The Three Gunas Today</div>
        <p
          className="font-body text-sm italic mb-5 text-center"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          How sattvic, rajasic, and tamasic were you today? Adjust honestly.
        </p>
        {[
          {
            key: "sattva",
            label: "सत्त्व · Sattva",
            sub: "Purity, clarity, peace",
            color: "oklch(0.48 0.24 268)",
            value: sattva,
            setter: setSattva,
          },
          {
            key: "rajas",
            label: "रजस् · Rajas",
            sub: "Passion, desire, action",
            color: "oklch(0.68 0.30 52)",
            value: rajas,
            setter: setRajas,
          },
          {
            key: "tamas",
            label: "तमस् · Tamas",
            sub: "Dullness, inertia, sleep",
            color: "oklch(0.40 0.12 44)",
            value: tamas,
            setter: setTamas,
          },
        ].map(({ key, label, sub, color, value, setter }) => (
          <div
            key={key}
            className="mb-5"
            data-ocid={`karma-mirror.guna.${key}`}
          >
            <div className="flex justify-between items-baseline mb-1.5">
              <div>
                <span
                  className="font-display text-sm font-bold italic"
                  style={{ color }}
                >
                  {label}
                </span>
                <span
                  className="font-body text-xs ml-2 italic"
                  style={{ color: "oklch(0.52 0.10 46)" }}
                >
                  {sub}
                </span>
              </div>
              <span
                className="font-display text-sm font-bold"
                style={{ color }}
              >
                {value}%
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => {
                if (!gunaSubmitted) setter(Number(e.target.value));
              }}
              disabled={gunaSubmitted}
              className="w-full cursor-pointer"
              style={{ accentColor: color }}
              data-ocid={`karma-mirror.guna.${key}-slider`}
            />
          </div>
        ))}
        {gunaSubmitted ? (
          <div
            className="verse-display mt-2"
            data-ocid="karma-mirror.gunas.advice"
          >
            <p className="text-verse-number mb-1">{gunaAdvice.verse}</p>
            <p className="verse-translation">{gunaAdvice.message}</p>
          </div>
        ) : (
          <button
            type="button"
            onClick={submitGunas}
            className="wax-seal-btn w-full mt-2"
            data-ocid="karma-mirror.gunas.submit-button"
          >
            Record Today's Guna Balance
          </button>
        )}
        {gunaHistory.length > 0 && (
          <div className="mt-6">
            <p
              className="font-display text-xs font-bold italic mb-3"
              style={{ color: "oklch(0.45 0.12 46)", letterSpacing: "0.08em" }}
            >
              WEEKLY GUNA TREND
            </p>
            <div
              className="grid grid-cols-7 gap-1 items-end"
              style={{ height: "72px" }}
            >
              {WEEK_DAYS.map((d) => {
                const g = gunaHistory.find((x) => x.date === d);
                return (
                  <div
                    key={d}
                    className="flex flex-col gap-0.5 items-center justify-end h-full"
                  >
                    {g ? (
                      <>
                        <div
                          style={{
                            height: `${Math.max(g.sattva * 0.6, 4)}%`,
                            background: "oklch(0.48 0.24 268)",
                            borderRadius: "2px 2px 0 0",
                            width: "100%",
                            minHeight: "4px",
                          }}
                        />
                        <div
                          style={{
                            height: `${Math.max(g.rajas * 0.6, 4)}%`,
                            background: "oklch(0.68 0.30 52)",
                            width: "100%",
                            minHeight: "4px",
                          }}
                        />
                        <div
                          style={{
                            height: `${Math.max(g.tamas * 0.6, 4)}%`,
                            background: "oklch(0.40 0.12 44)",
                            borderRadius: "0 0 2px 2px",
                            width: "100%",
                            minHeight: "4px",
                          }}
                        />
                      </>
                    ) : (
                      <div
                        style={{
                          height: "8px",
                          background: "oklch(0.80 0.08 58)",
                          borderRadius: "2px",
                          width: "100%",
                        }}
                      />
                    )}
                    <span
                      className="font-body text-[9px] mt-1"
                      style={{ color: "oklch(0.52 0.10 46)" }}
                    >
                      {DAY_SHORT[new Date(`${d}T12:00:00`).getDay()]}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 mt-2 justify-center flex-wrap">
              {[
                ["Sattva", "oklch(0.48 0.24 268)"],
                ["Rajas", "oklch(0.68 0.30 52)"],
                ["Tamas", "oklch(0.40 0.12 44)"],
              ].map(([label, color]) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      background: color,
                      borderRadius: "2px",
                    }}
                  />
                  <span
                    className="font-body text-[10px]"
                    style={{ color: "oklch(0.48 0.10 46)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Karma Check-in */}
      <section
        className="manuscript-card p-6"
        data-ocid="karma-mirror.karma-checkin.section"
      >
        <div className="divider-ornate mb-5">🌸 Daily Karma Check-in</div>
        <p
          className="font-body text-sm italic mb-5 text-center"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          Eight honest questions for your soul — answer with Krishna watching
        </p>

        {ENHANCED_KARMA_QUESTIONS.map((q, i) => (
          <div
            key={q.key}
            className="flex items-start gap-4 mb-4 pb-4 border-b"
            style={{ borderColor: "oklch(0.72 0.14 58 / 0.3)" }}
            data-ocid={`karma-mirror.checkin.question.${i + 1}`}
          >
            <button
              type="button"
              onClick={() => {
                if (!karmaSubmitted)
                  setKarmaAnswers((prev) => ({
                    ...prev,
                    [q.key]: !prev[q.key],
                  }));
              }}
              disabled={karmaSubmitted}
              className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-smooth mt-0.5"
              style={{
                background: karmaAnswers[q.key]
                  ? "oklch(0.48 0.24 268)"
                  : "transparent",
                borderColor: karmaAnswers[q.key]
                  ? "oklch(0.48 0.24 268)"
                  : "oklch(0.68 0.18 52 / 0.5)",
              }}
              data-ocid={`karma-mirror.checkin.checkbox.${i + 1}`}
            >
              {karmaAnswers[q.key] && (
                <span style={{ color: "white", fontSize: "0.7rem" }}>✓</span>
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "oklch(0.28 0.10 34)" }}
              >
                {q.question}
              </p>
              <span
                className="inline-block mt-1 text-[10px] font-display italic font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: `${q.typeColor}18`,
                  color: q.typeColor,
                  border: `1px solid ${q.typeColor}30`,
                }}
              >
                {q.karmaType}
              </span>
            </div>
          </div>
        ))}

        {karmaSubmitted ? (
          <div
            className="space-y-4 mt-2"
            data-ocid="karma-mirror.karma-checkin.success-state"
          >
            {/* Diya brightness indicator */}
            <div
              className="flex flex-col items-center gap-3 p-4 rounded-xl"
              style={{
                background: "oklch(0.92 0.10 66 / 0.5)",
                border: "1.5px solid oklch(0.76 0.20 56 / 0.4)",
              }}
            >
              <div className="relative">
                <span
                  style={{
                    fontSize: "3rem",
                    filter: `drop-shadow(0 0 ${Math.round(divaIntensity * 24)}px oklch(0.78 0.32 52 / ${0.3 + divaIntensity * 0.7}))`,
                    opacity: 0.4 + divaIntensity * 0.6,
                  }}
                >
                  🪔
                </span>
              </div>
              <p
                className="font-display text-lg font-bold italic"
                style={{ color: "oklch(0.32 0.14 38)" }}
              >
                Today's Karma Score:{" "}
                <span style={{ color: "oklch(0.62 0.28 52)" }}>
                  {todayScore}/{TOTAL_QUESTIONS}
                </span>
              </p>
              <p
                className="font-body text-xs italic text-center"
                style={{ color: "oklch(0.48 0.12 46)" }}
              >
                {todayScore >= 7
                  ? "Your diya burns brightest today — Krishna sees your dharma, Arjun."
                  : todayScore >= 5
                    ? "Your diya glows steadily. Keep walking this sacred path."
                    : todayScore >= 3
                      ? "Your diya flickers with effort. Tomorrow bring more flame."
                      : "Your diya is lit. That is enough for today. Hare Krishna."}
              </p>
            </div>

            {/* Trend + top category */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-3 rounded-lg text-center"
                style={{
                  background: "oklch(0.90 0.06 68 / 0.5)",
                  border: "1px solid oklch(0.78 0.14 60 / 0.3)",
                }}
              >
                <p
                  className="font-display text-xs font-bold italic mb-1"
                  style={{ color: "oklch(0.45 0.12 46)" }}
                >
                  WEEKLY TREND
                </p>
                <p className="text-xl mb-1">
                  {karmaTrend === "rising"
                    ? "📈"
                    : karmaTrend === "declining"
                      ? "📉"
                      : "➡️"}
                </p>
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.38 0.12 38)" }}
                >
                  {karmaTrend === "rising"
                    ? "Your Sattva is rising — keep going!"
                    : karmaTrend === "declining"
                      ? "Gentle course correction needed."
                      : "Steady karma practice."}
                </p>
              </div>
              {topCategory && (
                <div
                  className="p-3 rounded-lg text-center"
                  style={{
                    background: "oklch(0.90 0.06 68 / 0.5)",
                    border: "1px solid oklch(0.78 0.14 60 / 0.3)",
                  }}
                >
                  <p
                    className="font-display text-xs font-bold italic mb-1"
                    style={{ color: "oklch(0.45 0.12 46)" }}
                  >
                    BEST THIS WEEK
                  </p>
                  <p className="text-xl mb-1">✨</p>
                  <p
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.38 0.12 38)" }}
                  >
                    {topCategory} karma
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={submitKarma}
            className="wax-seal-btn w-full mt-2"
            data-ocid="karma-mirror.checkin.submit-button"
          >
            Submit Today's Karma Check-in
          </button>
        )}

        {/* Weekly karma bar chart */}
        {weekKarmaScores.some((w) => w.score > 0) && (
          <div className="mt-6">
            <p
              className="font-display text-xs font-bold italic mb-3"
              style={{ color: "oklch(0.45 0.12 46)", letterSpacing: "0.08em" }}
            >
              WEEKLY KARMA SCORE
            </p>
            <div
              className="grid grid-cols-7 gap-1 items-end"
              style={{ height: "60px" }}
            >
              {weekKarmaScores.map(({ date, score }, idx) => (
                <div
                  key={date}
                  className="flex flex-col items-center justify-end h-full gap-1"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(score / TOTAL_QUESTIONS) * 100}%` }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    style={{
                      background:
                        score >= 6
                          ? "oklch(0.48 0.24 268)"
                          : score >= 4
                            ? "oklch(0.68 0.30 52)"
                            : "oklch(0.72 0.18 56)",
                      borderRadius: "2px",
                      width: "100%",
                      minHeight: score > 0 ? "6px" : "0",
                    }}
                  />
                  <span
                    className="font-body text-[9px]"
                    style={{ color: "oklch(0.52 0.10 46)" }}
                  >
                    {DAY_SHORT[new Date(`${date}T12:00:00`).getDay()]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
}

// ─── Three Karma Types Tab ────────────────────────────────────────────────────

function ThreeKarmaTab() {
  const [expanded, setExpanded] = useState<string | null>("sanchita");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="manuscript-card p-5 mb-2">
        <div className="divider-ornate mb-4">🪷 The Three Types of Karma</div>
        <p
          className="font-body text-sm italic text-center leading-relaxed"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          Understanding these three is the beginning of true freedom — for only
          when you know the battlefield can you fight wisely.
        </p>
      </div>

      {/* Overview diagram */}
      <div className="manuscript-card p-5">
        <div className="grid grid-cols-3 gap-3">
          {KARMA_TYPES.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setExpanded(expanded === k.id ? null : k.id)}
              className="flex flex-col items-center gap-2 p-3 rounded-xl transition-smooth"
              style={{
                background:
                  expanded === k.id
                    ? `${k.color}18`
                    : "oklch(0.92 0.05 68 / 0.5)",
                border: `2px solid ${expanded === k.id ? k.color : "oklch(0.78 0.12 60 / 0.3)"}`,
              }}
              data-ocid={`karma-mirror.three-karma.${k.id}.toggle`}
            >
              <span style={{ fontSize: "1.8rem" }}>{k.icon}</span>
              <p
                className="font-display text-[10px] font-bold italic text-center leading-tight"
                style={{ color: k.color }}
              >
                {k.nameDevanagari}
              </p>
              <p
                className="font-body text-[9px] italic text-center"
                style={{ color: "oklch(0.48 0.10 46)" }}
              >
                {k.nameEnglish}
              </p>
            </button>
          ))}
        </div>
        <p
          className="font-body text-[10px] italic text-center mt-3"
          style={{ color: "oklch(0.60 0.10 46)" }}
        >
          Tap each to expand
        </p>
      </div>

      {/* Expanded karma type detail */}
      <AnimatePresence>
        {KARMA_TYPES.filter((k) => k.id === expanded).map((k) => (
          <motion.div
            key={k.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="manuscript-card overflow-hidden"
            data-ocid={`karma-mirror.three-karma.${k.id}.detail`}
          >
            <div className="p-6 space-y-5">
              {/* Title */}
              <div className="flex items-center gap-3">
                <span style={{ fontSize: "2.5rem" }}>{k.icon}</span>
                <div>
                  <h3
                    className="font-display text-xl font-bold italic"
                    style={{ color: k.color }}
                  >
                    {k.nameDevanagari}
                  </h3>
                  <p
                    className="font-body text-sm italic"
                    style={{ color: "oklch(0.48 0.10 46)" }}
                  >
                    {k.nameEnglish}
                  </p>
                </div>
              </div>

              {/* Definition */}
              <div
                className="p-4 rounded-lg"
                style={{
                  background: `${k.color}10`,
                  border: `1.5px solid ${k.color}30`,
                }}
              >
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.22 0.10 32)" }}
                >
                  {k.definition}
                </p>
              </div>

              {/* Metaphor */}
              <div>
                <p
                  className="font-display text-xs font-bold italic mb-2"
                  style={{
                    color: "oklch(0.45 0.12 46)",
                    letterSpacing: "0.08em",
                  }}
                >
                  THE METAPHOR
                </p>
                <p
                  className="font-body text-sm italic leading-relaxed"
                  style={{ color: "oklch(0.38 0.10 38)" }}
                >
                  "{k.metaphor}"
                </p>
              </div>

              {/* Gita verse */}
              <div className="verse-display">
                <p className="text-verse-number mb-1">{k.gitaRef}</p>
                <p className="verse-translation italic">{k.gitaVerse}</p>
              </div>

              {/* Story */}
              <div>
                <p
                  className="font-display text-xs font-bold italic mb-3"
                  style={{ color: k.color, letterSpacing: "0.08em" }}
                >
                  📖 PURANIC STORY
                </p>
                <h4
                  className="font-display text-base font-bold italic mb-2"
                  style={{ color: "oklch(0.28 0.12 34)" }}
                >
                  {k.story.title}
                </h4>
                <p
                  className="font-body text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.32 0.10 36)" }}
                >
                  {k.story.narrative}
                </p>
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: "oklch(0.88 0.10 62 / 0.5)",
                    border: "1px solid oklch(0.76 0.14 58 / 0.3)",
                  }}
                >
                  <p
                    className="font-display text-xs font-bold italic mb-1"
                    style={{ color: "oklch(0.42 0.14 46)" }}
                  >
                    LESSON
                  </p>
                  <p
                    className="font-body text-xs italic leading-relaxed"
                    style={{ color: "oklch(0.38 0.10 38)" }}
                  >
                    {k.story.lesson}
                  </p>
                </div>
              </div>

              {/* What to do */}
              <div>
                <p
                  className="font-display text-xs font-bold italic mb-2"
                  style={{
                    color: "oklch(0.45 0.12 46)",
                    letterSpacing: "0.08em",
                  }}
                >
                  WHAT TO DO
                </p>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.28 0.10 34)" }}
                >
                  {k.whatToDo}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* The interrelationship */}
      <div className="manuscript-card p-5">
        <div className="divider-ornate mb-4">⚡ How They Work Together</div>
        <div className="space-y-3">
          {[
            {
              label: "Sanchita → Prarabdha",
              desc: "From the vast storehouse, a portion is drawn out to become your current life's active karma — like selecting books from a library to read this year.",
              color: "oklch(0.52 0.24 280)",
            },
            {
              label: "Prarabdha → experience",
              desc: "The selected karma must be lived through — the arrow must complete its flight. Even saints cannot escape what has already been set in motion.",
              color: "oklch(0.62 0.28 32)",
            },
            {
              label: "Kriyamana → new Sanchita",
              desc: "Your current choices either add new books to the library, dissolve existing ones, or — through Nishkama Karma — create no new entries at all.",
              color: "oklch(0.48 0.24 268)",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex gap-3 p-3 rounded-lg"
              style={{
                background: `${item.color}10`,
                border: `1px solid ${item.color}25`,
              }}
            >
              <div
                className="w-2 rounded-full flex-shrink-0 mt-1"
                style={{
                  background: item.color,
                  height: "auto",
                  minHeight: "32px",
                }}
              />
              <div>
                <p
                  className="font-display text-xs font-bold italic mb-1"
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>
                <p
                  className="font-body text-xs leading-relaxed"
                  style={{ color: "oklch(0.38 0.10 38)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="verse-display mt-4">
          <p className="text-verse-number mb-1">BG 18.12</p>
          <p className="verse-translation italic">
            "For those who have not renounced, three kinds of results follow
            actions after death — good, bad, and mixed. But for the renounced,
            there is no such result."
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Burn Karma Tab ───────────────────────────────────────────────────────────

function BurnKarmaTab() {
  const [selectedMethod, setSelectedMethod] = useState<string>("jnana");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="manuscript-card p-5">
        <div className="divider-ornate mb-4">🔥 How to Burn Karma</div>
        <p
          className="font-body text-sm italic text-center leading-relaxed"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          Five proven methods from the Bhagavad Gita and Puranas. Choose your
          path — all rivers lead to the ocean of Krishna.
        </p>
      </div>

      {/* Method selector */}
      <div className="manuscript-card p-4">
        <div className="grid grid-cols-5 gap-2">
          {KARMA_BURNING_METHODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedMethod(m.id)}
              className="flex flex-col items-center gap-1 p-2 rounded-xl transition-smooth"
              style={{
                background:
                  selectedMethod === m.id ? `${m.color}20` : "transparent",
                border: `1.5px solid ${selectedMethod === m.id ? m.color : "oklch(0.78 0.12 60 / 0.3)"}`,
              }}
              data-ocid={`karma-mirror.burn-karma.${m.id}.select`}
            >
              <span style={{ fontSize: "1.5rem" }}>{m.icon}</span>
              <p
                className="font-display text-[9px] font-bold italic text-center"
                style={{
                  color:
                    selectedMethod === m.id ? m.color : "oklch(0.48 0.10 46)",
                }}
              >
                {m.nameDevanagari}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected method detail */}
      {KARMA_BURNING_METHODS.filter((m) => m.id === selectedMethod).map((m) => (
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="manuscript-card p-6 space-y-5"
          data-ocid={`karma-mirror.burn-karma.${m.id}.detail`}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                background: `${m.color}15`,
                border: `2px solid ${m.color}40`,
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>{m.icon}</span>
            </div>
            <div>
              <p
                className="font-body text-xs italic mb-0.5"
                style={{ color: "oklch(0.52 0.10 46)" }}
              >
                {m.nameDevanagari}
              </p>
              <h3
                className="font-display text-xl font-bold italic"
                style={{ color: m.color }}
              >
                {m.name}
              </h3>
            </div>
          </div>

          <div className="verse-display">
            <p className="text-verse-number mb-1">{m.gitaRef}</p>
            <p className="verse-translation italic">"{m.gitaVerse}"</p>
          </div>

          <div>
            <p
              className="font-display text-xs font-bold italic mb-2"
              style={{ color: "oklch(0.45 0.12 46)", letterSpacing: "0.08em" }}
            >
              HOW IT WORKS
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "oklch(0.28 0.10 34)" }}
            >
              {m.description}
            </p>
          </div>

          <div
            className="p-4 rounded-xl"
            style={{
              background: `${m.color}10`,
              border: `1.5px solid ${m.color}30`,
            }}
          >
            <p
              className="font-display text-xs font-bold italic mb-2"
              style={{ color: m.color, letterSpacing: "0.08em" }}
            >
              🌅 DAILY PRACTICE
            </p>
            <p
              className="font-body text-sm italic leading-relaxed"
              style={{ color: "oklch(0.30 0.10 34)" }}
            >
              {m.dailyPractice}
            </p>
          </div>
        </motion.div>
      ))}

      {/* The BG 4.37 anchor verse */}
      <div className="manuscript-card p-5">
        <div className="verse-display">
          <p className="text-verse-number mb-2">BG 4.37 — The Master Verse</p>
          <p className="verse-translation italic text-base leading-relaxed">
            "As a blazing fire reduces all wood to ashes, O Arjuna, so does the
            fire of Knowledge burn all karma to ashes."
          </p>
        </div>
        <p
          className="font-body text-xs italic mt-4 text-center leading-relaxed"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          All five methods — Jnana, Bhakti, Karma Yoga, Tapasya, Dana — are
          facets of the same fire. Choose the method that resonates with your
          heart and practice it with consistency. Krishna accepts every sincere
          effort.
        </p>
      </div>
    </motion.div>
  );
}

// ─── Puranic Stories Tab ──────────────────────────────────────────────────────

function StoriesTab() {
  const [openStory, setOpenStory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("redemption");

  const currentCat =
    HEALING_STORY_CATEGORIES.find((c) => c.id === activeCategory) ??
    HEALING_STORY_CATEGORIES[0];
  const totalStories = HEALING_STORY_CATEGORIES.reduce(
    (s, c) => s + c.stories.length,
    0,
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {/* Header */}
      <div className="manuscript-card p-5">
        <div className="divider-ornate mb-4">
          📖 {totalStories} Puranic Healing Stories
        </div>
        <p
          className="font-body text-sm italic text-center leading-relaxed"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          The Puranas are not just stories — they are karma's law illustrated
          through the lives of kings, saints, and gods. Each story is a mirror.
        </p>
        <p
          className="font-display text-[0.6rem] font-bold tracking-wider text-center mt-2 uppercase"
          style={{ color: "oklch(0.62 0.22 52)" }}
        >
          9 categories · 12 stories each · {totalStories} healing stories total
        </p>
      </div>

      {/* Category Selector */}
      <div className="manuscript-card p-4">
        <p
          className="font-display text-[0.6rem] font-bold tracking-wider uppercase mb-3"
          style={{ color: "oklch(0.55 0.14 46)" }}
        >
          Select Category
        </p>
        <div
          className="grid grid-cols-3 gap-2"
          data-ocid="karma-mirror.stories.categories"
        >
          {HEALING_STORY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenStory(null);
              }}
              className="flex flex-col items-center gap-1 p-2 rounded-xl transition-smooth text-center"
              style={{
                background:
                  activeCategory === cat.id
                    ? `${cat.color}20`
                    : "oklch(0.92 0.06 66 / 0.5)",
                border: `1.5px solid ${activeCategory === cat.id ? cat.color : "oklch(0.78 0.12 60 / 0.3)"}`,
              }}
              data-ocid={`karma-mirror.stories.cat.${cat.id}`}
            >
              <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
              <p
                className="font-display text-[8px] font-bold italic"
                style={{
                  color:
                    activeCategory === cat.id
                      ? cat.color
                      : "oklch(0.48 0.10 46)",
                  lineHeight: 1.3,
                }}
              >
                {cat.name.split(" of ")[1] ?? cat.name}
              </p>
              <p
                className="font-body text-[7px]"
                style={{ color: "oklch(0.60 0.08 46)" }}
              >
                {cat.stories.length} stories
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Header */}
      <motion.div
        key={currentCat.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="manuscript-card p-5"
        style={{ borderLeft: `4px solid ${currentCat.color}` }}
      >
        <div className="flex items-center gap-3">
          <span style={{ fontSize: "2rem" }}>{currentCat.icon}</span>
          <div>
            <h3
              className="font-display text-base font-bold italic"
              style={{ color: currentCat.color }}
            >
              {currentCat.name}
            </h3>
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.48 0.10 46)" }}
            >
              {currentCat.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stories List */}
      {currentCat.stories.map((story, i) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className="manuscript-card overflow-hidden"
          data-ocid={`karma-mirror.stories.${story.id}.card`}
        >
          <button
            type="button"
            onClick={() =>
              setOpenStory(openStory === story.id ? null : story.id)
            }
            className="w-full p-5 text-left"
            data-ocid={`karma-mirror.stories.${story.id}.toggle`}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                style={{
                  background: `${currentCat.color}18`,
                  border: `2px solid ${currentCat.color}40`,
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{story.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[9px] font-body italic px-2 py-0.5 rounded"
                    style={{
                      background: `${currentCat.color}12`,
                      color: currentCat.color,
                      border: `1px solid ${currentCat.color}25`,
                    }}
                  >
                    {story.source}
                  </span>
                </div>
                <h3
                  className="font-display text-sm font-bold italic leading-tight"
                  style={{ color: "oklch(0.22 0.12 32)" }}
                >
                  {story.title}
                </h3>
              </div>
              <span
                className="font-body text-sm flex-shrink-0 mt-1"
                style={{ color: "oklch(0.62 0.18 52)" }}
              >
                {openStory === story.id ? "▲" : "▼"}
              </span>
            </div>
          </button>

          <AnimatePresence>
            {openStory === story.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div
                  className="px-5 pb-5 space-y-4"
                  style={{ borderTop: "1px solid oklch(0.76 0.14 58 / 0.3)" }}
                >
                  <div className="pt-4">
                    <p
                      className="font-display text-xs font-bold italic mb-2"
                      style={{
                        color: currentCat.color,
                        letterSpacing: "0.08em",
                      }}
                    >
                      THE STORY
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "oklch(0.28 0.10 34)" }}
                    >
                      {story.narrative}
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: `${currentCat.color}10`,
                      border: `1.5px solid ${currentCat.color}25`,
                    }}
                  >
                    <p
                      className="font-display text-xs font-bold italic mb-2"
                      style={{
                        color: currentCat.color,
                        letterSpacing: "0.08em",
                      }}
                    >
                      GITA'S LESSON
                    </p>
                    <p
                      className="font-body text-xs font-bold mb-1"
                      style={{ color: currentCat.color }}
                    >
                      {story.gitaRef}
                    </p>
                    <p
                      className="font-body text-sm italic leading-relaxed"
                      style={{ color: "oklch(0.32 0.10 36)" }}
                    >
                      "{story.gitaLesson}"
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "oklch(0.92 0.08 62 / 0.6)",
                      border: "1px solid oklch(0.80 0.12 58 / 0.3)",
                    }}
                  >
                    <p
                      className="font-display text-xs font-bold italic mb-2"
                      style={{
                        color: "oklch(0.45 0.16 46)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      HOW TO APPLY THIS TO YOUR LIFE
                    </p>
                    <p
                      className="font-body text-sm italic leading-relaxed"
                      style={{ color: "oklch(0.30 0.10 36)" }}
                    >
                      {story.application}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Footer */}
      <div className="manuscript-card p-5">
        <p
          className="font-body text-sm italic text-center leading-relaxed"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          "One soul becomes ten. Ten become a hundred. A hundred become a
          generation. And dharma is restored — not by a king or a warrior — but
          by a young person with a phone, a pure heart, and Krishna as his
          charioteer."
        </p>
        <p
          className="font-display text-xs font-bold italic text-center mt-3"
          style={{ color: "oklch(0.62 0.22 52)" }}
        >
          Hare Krishna 🙏
        </p>
      </div>
    </motion.div>
  );
}

// ─── Biorhythm Section (unchanged from original) ─────────────────────────────

const BIORHYTHM_GUIDANCE: Record<
  string,
  {
    guna: string;
    color: string;
    verse: string;
    verseRef: string;
    recommendation: string;
  }
> = {
  high_physical: {
    guna: "Rajas",
    color: "oklch(0.68 0.30 52)",
    verseRef: "BG 3.37",
    verse:
      "It is lust only, Arjuna, which is born of contact with material modes of passion and later transformed into wrath.",
    recommendation:
      "Your physical energy is high — channel it into seva, exercise, or vigorous naam writing. Rajas at its peak can become either desire or devotion.",
  },
  balanced: {
    guna: "Sattva",
    color: "oklch(0.48 0.24 268)",
    verseRef: "BG 17.17",
    verse:
      "This threefold austerity performed with utmost faith by yogis who do not desire fruitive results is known as sattva.",
    recommendation:
      "Your cycles are balanced — this is the ideal state for deep meditation, scripture study, and spiritual practice. Use today well.",
  },
  low_energy: {
    guna: "Tamas",
    color: "oklch(0.40 0.12 44)",
    verseRef: "BG 14.13",
    verse:
      "When tamas predominates, darkness, inertia, madness, and illusion are manifested.",
    recommendation:
      "Tamas is high today — do not sleep excessively or waste the day. Light a diya, recite one verse, and move your body gently. Even small acts dispel tamas.",
  },
  rising: {
    guna: "Sattva rising",
    color: "oklch(0.72 0.28 54)",
    verseRef: "BG 14.11",
    verse:
      "The manifestations of the mode of goodness can be experienced when all the gates of the body are illuminated by knowledge.",
    recommendation:
      "Your energy is rising toward its peak — an excellent day to begin new spiritual practices or deepen existing ones.",
  },
  declining: {
    guna: "Rajas declining",
    color: "oklch(0.58 0.22 48)",
    verseRef: "BG 6.17",
    verse:
      "He who is regulated in eating, recreation, and rest — for him yoga becomes the destroyer of all misery.",
    recommendation:
      "Your energy is declining today — focus on rest, restoration, and reflective practices. Receive Krishna's grace rather than pushing hard.",
  },
};

function BiorhythmSection() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      86400000,
  );
  const physicalCycle = Math.sin((dayOfYear / 23) * 2 * Math.PI);
  const emotionalCycle = Math.sin((dayOfYear / 28) * 2 * Math.PI);
  const intellectualCycle = Math.sin((dayOfYear / 33) * 2 * Math.PI);
  const avgEnergy = (physicalCycle + emotionalCycle + intellectualCycle) / 3;

  const gunaState =
    avgEnergy > 0.4
      ? "high_physical"
      : avgEnergy > 0.1
        ? "rising"
        : avgEnergy > -0.1
          ? "balanced"
          : avgEnergy > -0.4
            ? "declining"
            : "low_energy";
  const guidance = BIORHYTHM_GUIDANCE[gunaState];

  const wavePoints = Array.from({ length: 28 }, (_, k) => {
    const d = dayOfYear - 13 + k;
    const p = Math.sin((d / 23) * 2 * Math.PI);
    const e = Math.sin((d / 28) * 2 * Math.PI);
    const v = Math.sin((d / 33) * 2 * Math.PI);
    return { x: (k / 27) * 100, y: (p + e + v) / 3 };
  });

  const svgH = 60;
  const svgMid = svgH / 2;
  const amplitude = svgMid * 0.8;
  const pathD = wavePoints
    .map(
      (pt, idx) =>
        `${idx === 0 ? "M" : "L"} ${pt.x} ${svgMid - pt.y * amplitude}`,
    )
    .join(" ");
  const physPct = Math.round(((physicalCycle + 1) / 2) * 100);
  const emoPct = Math.round(((emotionalCycle + 1) / 2) * 100);
  const intellPct = Math.round(((intellectualCycle + 1) / 2) * 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="manuscript-card p-6 mt-6"
      data-ocid="karma-mirror.biorhythm.section"
    >
      <div className="divider-ornate mb-5">🌊 Biorhythm & Dharma</div>
      <p
        className="font-body text-xs italic text-center mb-4"
        style={{ color: "oklch(0.45 0.12 46)" }}
      >
        Your natural energy cycles mapped to the three gunas — Day{" "}
        {today.getDate()}
      </p>

      <div
        className="relative mb-5 rounded overflow-hidden"
        style={{
          background: "oklch(0.90 0.06 68 / 0.4)",
          border: "1px solid oklch(0.76 0.12 60 / 0.3)",
        }}
      >
        <svg
          viewBox={`0 0 100 ${svgH}`}
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "64px" }}
          role="img"
          aria-label="Energy cycle wave visualization"
        >
          <line
            x1="0"
            y1={svgMid}
            x2="100"
            y2={svgMid}
            stroke="oklch(0.68 0.16 54 / 0.3)"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
          <path
            d={pathD}
            fill="none"
            stroke={guidance.color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx={((13 / 27) * 100).toString()}
            cy={(svgMid - avgEnergy * amplitude).toString()}
            r="2.5"
            fill={guidance.color}
          />
        </svg>
        <p
          className="absolute bottom-1 right-2 font-body text-[8px] italic"
          style={{ color: "oklch(0.52 0.14 46 / 0.7)" }}
        >
          ← 13 days · Today →
        </p>
      </div>

      <div className="space-y-3 mb-4">
        {[
          {
            label: "शारीरिक — Physical",
            value: physPct,
            color: "oklch(0.62 0.26 32)",
            cycle: "23-day",
          },
          {
            label: "भावनात्मक — Emotional",
            value: emoPct,
            color: "oklch(0.48 0.24 268)",
            cycle: "28-day",
          },
          {
            label: "बौद्धिक — Intellectual",
            value: intellPct,
            color: "oklch(0.52 0.22 280)",
            cycle: "33-day",
          },
        ].map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between mb-1">
              <p
                className="font-body text-[10px] italic"
                style={{ color: "oklch(0.38 0.10 38)" }}
              >
                {bar.label}{" "}
                <span
                  style={{ color: "oklch(0.62 0.14 46)", fontSize: "0.65rem" }}
                >
                  ({bar.cycle})
                </span>
              </p>
              <p
                className="font-display text-xs font-bold italic"
                style={{ color: bar.color }}
              >
                {bar.value}%
              </p>
            </div>
            <div
              className="h-2 rounded-full"
              style={{ background: "oklch(0.82 0.06 68)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${bar.value}%`, background: bar.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="p-4 rounded mb-4"
        style={{
          background: `${guidance.color}12`,
          border: `1.5px solid ${guidance.color}40`,
        }}
        data-ocid="karma-mirror.biorhythm.state"
      >
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: guidance.color }}
          />
          <p
            className="font-display text-xs font-bold italic"
            style={{ color: guidance.color }}
          >
            Today your energy pattern suggests: {guidance.guna}
          </p>
        </div>
        <p
          className="font-body text-xs italic leading-relaxed"
          style={{ color: "oklch(0.32 0.10 36)" }}
        >
          Krishna says: {guidance.recommendation}
        </p>
      </div>

      <div className="verse-display">
        <p className="text-verse-number mb-1">{guidance.verseRef}</p>
        <p className="verse-translation italic text-xs">{guidance.verse}</p>
      </div>
    </motion.section>
  );
}
