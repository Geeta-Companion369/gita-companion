import { Button } from "@/components/ui/button";
import { usePoints } from "@/hooks/use-points";
import type { TypingSession } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// ─── Verse dataset split by difficulty ───────────────────────────────────────
const TYPING_VERSES = [
  // Easy — Ch 1-3
  {
    id: "2.47",
    ch: 2,
    diff: "easy",
    title: "Nishkāma Karma",
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
  },
  {
    id: "2.20",
    ch: 2,
    diff: "easy",
    title: "The Eternal Soul",
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः |",
  },
  {
    id: "3.27",
    ch: 3,
    diff: "easy",
    title: "Nature Acts",
    sanskrit:
      "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||",
  },
  // Medium — Ch 4-12
  {
    id: "4.7",
    ch: 4,
    diff: "medium",
    title: "Krishna's Advent",
    sanskrit:
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
  },
  {
    id: "9.22",
    ch: 9,
    diff: "medium",
    title: "Divine Provision",
    sanskrit:
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
  },
  {
    id: "10.20",
    ch: 10,
    diff: "medium",
    title: "Krishna in All",
    sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः | अहमादिश्च मध्यं च भूतानामन्त एव च ||",
  },
  // Hard — Ch 13-18
  {
    id: "15.15",
    ch: 15,
    diff: "hard",
    title: "Seated in All Hearts",
    sanskrit:
      "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च | वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ||",
  },
  {
    id: "18.66",
    ch: 18,
    diff: "hard",
    title: "Supreme Surrender",
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
  },
  {
    id: "18.78",
    ch: 18,
    diff: "hard",
    title: "Victory with Krishna",
    sanskrit:
      "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः | तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ||",
  },
];

const STORAGE_KEY = "gita-typing-sessions";

function loadSessions(): TypingSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as TypingSession[]) : [];
  } catch {
    return [];
  }
}

function saveSessions(s: TypingSession[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /**/
  }
}

type Diff = "all" | "easy" | "medium" | "hard";

const DIFF_LABEL: Record<Diff, string> = {
  all: "All",
  easy: "Easy (Ch 1–3)",
  medium: "Medium (Ch 4–12)",
  hard: "Hard (Ch 13–18)",
};

export function TypingPracticePage() {
  const { addPoints } = usePoints();
  const [sessions, setSessions] = useState<TypingSession[]>(loadSessions);
  const [diff, setDiff] = useState<Diff>("all");
  const [selectedId, setSelectedId] = useState("");
  const [stage, setStage] = useState<"select" | "practice" | "result">(
    "select",
  );

  // Typing state
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsed, setElapsed] = useState(0);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredVerses = useMemo(
    () =>
      diff === "all"
        ? TYPING_VERSES
        : TYPING_VERSES.filter((v) => v.diff === diff),
    [diff],
  );

  const verse = TYPING_VERSES.find((v) => v.id === selectedId);
  const target = verse?.sanskrit ?? "";

  // Character-by-character comparison
  const chars = useMemo(() => {
    return target.split("").map((ch, i) => {
      if (i >= typed.length) return { ch, state: "pending" as const };
      if (typed[i] === ch) return { ch, state: "correct" as const };
      return { ch, state: "error" as const };
    });
  }, [target, typed]);

  const correctCount = useMemo(
    () => chars.filter((c) => c.state === "correct").length,
    [chars],
  );
  const accuracy =
    typed.length > 0
      ? Math.round((correctCount / Math.max(typed.length, 1)) * 100)
      : 100;
  const wpm =
    elapsed > 0 ? Math.round(typed.split(/\s+/).length / (elapsed / 60000)) : 0;

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    const t0 = Date.now();
    setStartTime(t0);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - t0);
    }, 500);
  }, []);

  useEffect(() => {
    if (stage !== "practice") stopTimer();
    return stopTimer;
  }, [stage, stopTimer]);

  const handleTyping = useCallback(
    (val: string) => {
      if (finished) return;
      if (!startTime && val.length > 0) startTimer();
      setTyped(val);
      if (val === target) {
        stopTimer();
        setFinished(true);
      }
    },
    [finished, startTime, startTimer, stopTimer, target],
  );

  const completeSession = useCallback(() => {
    if (!verse) return;
    const finalWpm =
      elapsed > 0
        ? Math.round(typed.split(/\s+/).length / (elapsed / 60000))
        : 0;
    const finalErrors = typed
      .split("")
      .filter((c, i) => c !== target[i]).length;
    const pts = Math.max(5, Math.min(20, 5 + Math.floor(finalWpm / 10)));
    addPoints("reading", pts);
    const s: TypingSession = {
      verseId: verse.id,
      wpm: finalWpm,
      errors: finalErrors,
      completedAt: Date.now(),
    };
    setSessions((prev) => {
      const updated = [s, ...prev.slice(0, 49)];
      saveSessions(updated);
      return updated;
    });
    setStage("result");
  }, [verse, elapsed, typed, target, addPoints]);

  const beginPractice = (id: string) => {
    setSelectedId(id);
    setTyped("");
    setElapsed(0);
    setStartTime(0);
    setFinished(false);
    stopTimer();
    setStage("practice");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    return m > 0 ? `${m}m ${s % 60}s` : `${s}s`;
  };

  const recentSessions = sessions.slice(0, 5);

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      <div className="text-center mb-8">
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ श्लोक-लेखन ॥</p>
        <h1 className="chapter-header">Shloka Typing Practice</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm italic">
          "Write the sacred words — let every keystroke be a devotion"
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ── SELECT ── */}
        {stage === "select" && (
          <motion.div
            key="select"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {/* Difficulty selector */}
            <div className="flex flex-wrap gap-2 mb-6 items-center">
              <span className="text-verse-number">DIFFICULTY</span>
              {(["all", "easy", "medium", "hard"] as Diff[]).map((d) => (
                <button
                  key={d}
                  type="button"
                  data-ocid={`typing.diff.${d}`}
                  onClick={() => setDiff(d)}
                  className="px-3 py-1.5 rounded border font-body text-sm transition-smooth"
                  style={{
                    borderColor:
                      diff === d
                        ? "oklch(var(--accent))"
                        : "oklch(var(--border))",
                    background:
                      diff === d
                        ? "oklch(var(--accent)/0.15)"
                        : "oklch(var(--card)/0.6)",
                    color:
                      diff === d
                        ? "oklch(var(--foreground))"
                        : "oklch(var(--muted-foreground))",
                  }}
                >
                  {DIFF_LABEL[d]}
                </button>
              ))}
            </div>

            <div className="grid gap-3">
              {filteredVerses.map((v, i) => {
                const prevSession = sessions.find((s) => s.verseId === v.id);
                return (
                  <motion.button
                    key={v.id}
                    type="button"
                    data-ocid={`typing.verse.${i + 1}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => beginPractice(v.id)}
                    className="text-left sacred-card-hover flex items-center gap-4"
                  >
                    <div
                      className="shrink-0 w-14 h-14 rounded-full border border-accent/40 flex flex-col items-center justify-center"
                      style={{ background: "oklch(var(--accent)/0.08)" }}
                    >
                      <span className="font-display text-xs font-bold text-accent">
                        {v.id}
                      </span>
                      <span
                        className={`text-xs font-body mt-0.5 ${v.diff === "easy" ? "text-green-600" : v.diff === "medium" ? "text-yellow-600" : "text-red-600"}`}
                      >
                        {v.diff}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-base italic font-semibold text-foreground">
                        {v.title}
                      </div>
                      <div className="font-body text-xs text-muted-foreground truncate mt-0.5">
                        {v.sanskrit.substring(0, 52)}…
                      </div>
                    </div>
                    {prevSession && (
                      <div className="shrink-0 text-right">
                        <div className="font-display text-sm font-bold text-accent">
                          {prevSession.wpm} WPM
                        </div>
                        <div className="font-body text-xs text-muted-foreground">
                          Best
                        </div>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Practice history */}
            {recentSessions.length > 0 && (
              <div className="mt-10" data-ocid="typing.history_section">
                <div className="ornate-rule mb-4">
                  <span className="font-display font-bold text-accent text-sm">
                    Recent Practice
                  </span>
                </div>
                <div className="sacred-card overflow-auto">
                  <table className="w-full font-body text-sm">
                    <thead>
                      <tr className="text-left border-b border-border">
                        <th className="pb-2 text-verse-number font-normal pr-4">
                          VERSE
                        </th>
                        <th className="pb-2 text-verse-number font-normal pr-4">
                          WPM
                        </th>
                        <th className="pb-2 text-verse-number font-normal pr-4">
                          ERRORS
                        </th>
                        <th className="pb-2 text-verse-number font-normal">
                          DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSessions.map((s) => (
                        <tr
                          key={s.completedAt}
                          className="border-b border-border/30"
                        >
                          <td className="py-2 pr-4 text-accent font-bold">
                            {s.verseId}
                          </td>
                          <td className="py-2 pr-4 text-foreground">{s.wpm}</td>
                          <td className="py-2 pr-4 text-foreground">
                            {s.errors}
                          </td>
                          <td className="py-2 text-muted-foreground">
                            {new Date(s.completedAt).toLocaleDateString(
                              "en-IN",
                              { dateStyle: "short" },
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* ── PRACTICE ── */}
        {stage === "practice" && verse && (
          <motion.div
            key="practice"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-2xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => {
                  stopTimer();
                  setStage("select");
                }}
                className="mb-4 text-muted-foreground font-body text-sm"
              >
                ← Back
              </Button>

              <div className="sacred-card p-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <p className="text-verse-number">
                    {verse.id} — {verse.title}
                  </p>
                  <div className="flex gap-4 font-body text-xs">
                    <span className="text-muted-foreground">
                      ⏱ {formatTime(elapsed)}
                    </span>
                    <span
                      className={
                        accuracy >= 90
                          ? "text-green-600"
                          : accuracy >= 70
                            ? "text-yellow-600"
                            : "text-red-600"
                      }
                    >
                      {accuracy}% acc
                    </span>
                    <span className="text-accent font-bold">{wpm} WPM</span>
                  </div>
                </div>

                {/* Reference Sanskrit */}
                <div className="p-4 rounded mb-6 bg-muted/30 border border-accent/20">
                  <p className="text-verse-number mb-2">REFERENCE VERSE</p>
                  <p
                    className="font-body leading-loose text-foreground"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {verse.sanskrit}
                  </p>
                </div>

                {/* Character display */}
                <div
                  className="parchment-section rounded p-4 mb-4 min-h-[60px] font-body leading-loose"
                  style={{ fontSize: "1.1rem" }}
                >
                  {chars.map((c, i) => {
                    const charKey = `${target.charCodeAt(i)}-${i}`;
                    return (
                      <span
                        key={charKey}
                        style={{
                          color:
                            c.state === "correct"
                              ? "oklch(0.50 0.18 140)"
                              : c.state === "error"
                                ? "oklch(0.55 0.22 22)"
                                : "oklch(var(--muted-foreground))",
                          background:
                            c.state === "error"
                              ? "oklch(0.95 0.1 22 / 0.3)"
                              : "transparent",
                          borderBottom:
                            i === typed.length
                              ? "2px solid oklch(var(--accent))"
                              : "none",
                        }}
                      >
                        {c.ch}
                      </span>
                    );
                  })}
                  {typed.length >= target.length && (
                    <span
                      style={{ borderLeft: "2px solid oklch(var(--accent))" }}
                    >
                      &nbsp;
                    </span>
                  )}
                </div>

                {/* Typing input */}
                <div className="space-y-2">
                  <label htmlFor="typing-input" className="text-verse-number">
                    TYPE THE VERSE BELOW
                  </label>
                  <input
                    id="typing-input"
                    ref={inputRef}
                    data-ocid="typing.input"
                    type="text"
                    value={typed}
                    onChange={(e) => handleTyping(e.target.value)}
                    disabled={finished}
                    placeholder="Begin typing the Sanskrit verse…"
                    className="w-full rounded border border-accent/30 bg-card/80 px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>

                {finished && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded text-center"
                    style={{
                      background: "oklch(var(--accent)/0.1)",
                      border: "1px solid oklch(var(--accent)/0.4)",
                    }}
                  >
                    <p className="font-display text-lg font-bold text-accent mb-2">
                      🏆 Verse Complete!
                    </p>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {wpm} WPM · {accuracy}% accuracy · {formatTime(elapsed)}
                    </p>
                    <Button
                      data-ocid="typing.complete_button"
                      onClick={completeSession}
                      className="font-display font-bold text-primary-foreground shadow-warm-glow"
                      style={{ background: "oklch(var(--accent))" }}
                    >
                      ✦ Save Score &amp; Earn Points
                    </Button>
                  </motion.div>
                )}

                {/* Live progress */}
                <div className="mt-4 h-1.5 rounded-full bg-muted/50 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.round((typed.length / Math.max(target.length, 1)) * 100)}%`,
                      background:
                        "linear-gradient(90deg, oklch(0.72 0.28 52), oklch(0.60 0.22 34))",
                    }}
                  />
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1 text-right">
                  {typed.length} / {target.length} characters
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── RESULT ── */}
        {stage === "result" && verse && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="sacred-card p-6 text-center">
                {(() => {
                  const last = sessions[0];
                  const accFinal =
                    last && last.verseId === verse.id
                      ? Math.round(
                          (1 - last.errors / Math.max(target.length, 1)) * 100,
                        )
                      : accuracy;
                  return (
                    <>
                      <div className="text-5xl mb-3">
                        {accFinal >= 95 ? "🏆" : accFinal >= 80 ? "✨" : "🌱"}
                      </div>
                      <h2 className="font-display text-2xl italic mb-4 text-foreground">
                        {accFinal >= 95
                          ? "Perfect Accuracy!"
                          : accFinal >= 80
                            ? "Well Done!"
                            : "Practice Makes Perfect"}
                      </h2>
                      <div className="flex justify-center gap-8 mb-6">
                        {[
                          { label: "WPM", value: last?.wpm ?? wpm },
                          { label: "Accuracy", value: `${accFinal}%` },
                          { label: "Errors", value: last?.errors ?? 0 },
                          { label: "Time", value: formatTime(elapsed) },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <div className="font-display text-2xl font-bold text-accent">
                              {value}
                            </div>
                            <div className="font-body text-xs text-muted-foreground mt-0.5">
                              {label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 justify-center flex-wrap">
                        <Button
                          data-ocid="typing.retry_button"
                          variant="outline"
                          onClick={() => beginPractice(verse.id)}
                          className="border-accent/40 text-accent font-body"
                        >
                          Practice Again
                        </Button>
                        <Button
                          data-ocid="typing.select_button"
                          onClick={() => setStage("select")}
                          className="font-display font-bold text-primary-foreground shadow-warm-glow"
                          style={{ background: "oklch(var(--accent))" }}
                        >
                          Choose Another Verse
                        </Button>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
