import { usePoints } from "@/hooks/use-points";
import type { ConcentrationSession } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const DURATIONS = [
  { value: 5, label: "5", desc: "Starter" },
  { value: 15, label: "15", desc: "Sadhana" },
  { value: 25, label: "25", desc: "Dharana" },
  { value: 45, label: "45", desc: "Dhyana" },
  { value: 60, label: "60", desc: "Samadhi" },
];

type SoundMode = "silence" | "bell" | "mantra";

const SOUND_MODES: { id: SoundMode; label: string; desc: string }[] = [
  { id: "silence", label: "Silence", desc: "Pure stillness" },
  { id: "bell", label: "Temple Bell", desc: "Every 5 min" },
  { id: "mantra", label: "Mantra Hum", desc: "Soft background" },
];

const SESSION_STORAGE_KEY = "gita-timer-sessions";

function loadSessions(): ConcentrationSession[] {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConcentrationSession[]) : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions: ConcentrationSession[]): void {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessions));
  } catch {
    /* silent */
  }
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function formatSessionDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-IN", { dateStyle: "medium" });
}

function useBell(
  soundMode: SoundMode,
  isRunning: boolean,
  elapsedSecs: number,
) {
  const lastBellRef = useRef(0);

  useEffect(() => {
    if (!isRunning || soundMode !== "bell") return;
    const intervalMins = 5;
    const intervalSecs = intervalMins * 60;
    if (
      elapsedSecs > 0 &&
      elapsedSecs % intervalSecs === 0 &&
      elapsedSecs !== lastBellRef.current
    ) {
      lastBellRef.current = elapsedSecs;
      // Play a short beep using Web Audio API
      try {
        const ctx = new (
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext
        )();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 432;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2);
      } catch {
        /* silent */
      }
    }
  }, [soundMode, isRunning, elapsedSecs]);
}

function useMantraHum(soundMode: SoundMode, isRunning: boolean) {
  const humRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (soundMode !== "mantra" || !isRunning) {
      if (humRef.current) {
        gainRef.current?.gain.setValueAtTime(
          0,
          ctxRef.current?.currentTime ?? 0,
        );
        humRef.current.stop();
        humRef.current = null;
      }
      return;
    }
    try {
      const ctx = new (
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      )();
      ctxRef.current = ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 136.1; // OM frequency
      osc.type = "sine";
      gain.gain.value = 0.04;
      osc.start();
      humRef.current = osc;
      gainRef.current = gain;
    } catch {
      /* silent */
    }
    return () => {
      if (humRef.current) {
        try {
          humRef.current.stop();
        } catch {
          /* silent */
        }
        humRef.current = null;
      }
    };
  }, [soundMode, isRunning]);
}

export function TimerPage() {
  const { addPoints } = usePoints();
  const [duration, setDuration] = useState(25);
  const [soundMode, setSoundMode] = useState<SoundMode>("bell");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [sessions, setSessions] =
    useState<ConcentrationSession[]>(loadSessions);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSecs = duration * 60;
  const remaining = Math.max(0, totalSecs - elapsed);
  const progress = elapsed / totalSecs;

  useBell(soundMode, isRunning && !isPaused, elapsed);
  useMantraHum(soundMode, isRunning && !isPaused);

  // Timer tick
  useEffect(() => {
    if (!isRunning || isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= totalSecs) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setIsComplete(true);
          return totalSecs;
        }
        return next;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, isPaused, totalSecs]);

  // Use refs to avoid stale closure in completion handler
  const addPointsRef = useRef(addPoints);
  addPointsRef.current = addPoints;
  const durationRef = useRef(duration);
  durationRef.current = duration;
  const sessionsRef = useRef(sessions);
  sessionsRef.current = sessions;

  // Handle completion
  useEffect(() => {
    if (!isComplete) return;
    const dur = durationRef.current;
    const currentSessions = sessionsRef.current;
    const session: ConcentrationSession = {
      id: `cs-${Date.now()}`,
      durationMinutes: dur,
      completedAt: Date.now(),
      sessionType: "meditation",
    };
    const updated = [session, ...currentSessions].slice(0, 20);
    setSessions(updated);
    saveSessions(updated);
    addPointsRef.current("reading", 5);
    toast.success(
      "✦ +5 points — Concentration session complete! Hare Krishna 🙏",
      {
        duration: 6000,
      },
    );
  }, [isComplete]);

  const handleStart = useCallback(() => {
    setElapsed(0);
    setIsComplete(false);
    setIsRunning(true);
    setIsPaused(false);
  }, []);

  const handlePause = useCallback(() => {
    setIsPaused((p) => !p);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
    setElapsed(0);
    setIsComplete(false);
  }, []);

  // Radial progress SVG
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ एकाग्रता साधना ॥</p>
        <h1 className="chapter-header">Concentration Timer</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm italic">
          "Yatra yatra mano yāti tatra tatrātma netrayet" — Wherever the mind
          wanders, bring it back
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </motion.div>

      <div className="max-w-xl mx-auto">
        {/* Duration selector */}
        {!isRunning && !isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="sacred-card p-5 mb-5"
          >
            <p
              className="font-display text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--accent) / 0.7)" }}
            >
              ✦ Session Duration
            </p>
            <div className="grid grid-cols-5 gap-2">
              {DURATIONS.map(({ value, label, desc }) => {
                const active = duration === value;
                return (
                  <button
                    key={value}
                    type="button"
                    data-ocid={`timer.duration_${value}`}
                    onClick={() => setDuration(value)}
                    className="flex flex-col items-center py-3.5 gap-0.5 transition-smooth"
                    style={{
                      borderRadius: "2px",
                      border: active
                        ? "1px solid oklch(var(--accent) / 0.55)"
                        : "1px solid oklch(var(--border) / 0.5)",
                      background: active
                        ? "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))"
                        : "transparent",
                      color: active
                        ? "oklch(0.94 0.06 60)"
                        : "oklch(var(--muted-foreground))",
                      boxShadow: active
                        ? "0 2px 10px rgba(120,80,30,0.22)"
                        : "none",
                    }}
                  >
                    <span className="font-display text-xl font-bold italic leading-none">
                      {label}
                    </span>
                    <span className="font-body text-[9px] italic opacity-80">
                      min
                    </span>
                    <span className="font-body text-[9px] italic opacity-65">
                      {desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Sound mode */}
        {!isRunning && !isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="sacred-card p-5 mb-6"
          >
            <p
              className="font-display text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--accent) / 0.7)" }}
            >
              ✦ Sound During Practice
            </p>
            <div className="grid grid-cols-3 gap-2">
              {SOUND_MODES.map(({ id, label, desc }) => {
                const active = soundMode === id;
                return (
                  <button
                    key={id}
                    type="button"
                    data-ocid={`timer.sound_${id}`}
                    onClick={() => setSoundMode(id)}
                    className="flex flex-col items-center py-3 gap-0.5 transition-smooth"
                    style={{
                      borderRadius: "2px",
                      border: active
                        ? "1px solid oklch(var(--accent) / 0.5)"
                        : "1px solid oklch(var(--border) / 0.45)",
                      background: active
                        ? "oklch(var(--accent) / 0.09)"
                        : "transparent",
                      color: active
                        ? "oklch(var(--foreground))"
                        : "oklch(var(--muted-foreground))",
                    }}
                  >
                    <span className="font-body italic text-sm">{label}</span>
                    <span className="font-body text-[10px] italic opacity-65">
                      {desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Timer display */}
        <AnimatePresence mode="wait">
          {isRunning || isComplete ? (
            <motion.div
              key="running"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mb-6"
            >
              {/* Circular timer */}
              <div
                className="inline-flex relative mb-6"
                data-ocid="timer.canvas_target"
              >
                <svg
                  width="220"
                  height="220"
                  className="rotate-[-90deg]"
                  aria-hidden="true"
                >
                  <title>Concentration timer progress</title>
                  {/* Track */}
                  <circle
                    cx="110"
                    cy="110"
                    r={radius}
                    fill="none"
                    stroke="oklch(var(--muted) / 0.4)"
                    strokeWidth="8"
                  />
                  {/* Progress */}
                  <circle
                    cx="110"
                    cy="110"
                    r={radius}
                    fill="none"
                    stroke="oklch(0.72 0.28 52)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    style={{ transition: "stroke-dashoffset 1s linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {isComplete ? (
                    <>
                      <span className="text-4xl mb-1" aria-hidden="true">
                        🙏
                      </span>
                      <p
                        className="font-display italic font-bold"
                        style={{
                          color: "oklch(var(--accent))",
                          fontSize: "1.1rem",
                        }}
                      >
                        Complete!
                      </p>
                    </>
                  ) : (
                    <>
                      <span
                        className="font-display font-bold"
                        style={{
                          fontSize: "2.8rem",
                          lineHeight: 1.1,
                          color: "oklch(var(--foreground))",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {formatTime(remaining)}
                      </span>
                      <span className="font-body italic text-muted-foreground text-xs mt-1">
                        {isPaused ? "Paused" : "Focus…"}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Verse for focus */}
              {!isComplete && (
                <div
                  className="sacred-card p-4 mb-5 text-center mx-auto"
                  style={{ maxWidth: "26rem" }}
                >
                  <p className="font-body italic text-sm text-muted-foreground leading-relaxed">
                    "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।
                    <br />
                    तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥"
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-2 italic">
                    Where Krishna is, there is victory — 18.78
                  </p>
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center justify-center gap-3">
                {!isComplete && (
                  <button
                    type="button"
                    data-ocid="timer.pause_button"
                    onClick={handlePause}
                    className="transition-smooth font-body italic"
                    style={{
                      padding: "0.7rem 1.8rem",
                      border: "1px solid oklch(var(--accent) / 0.4)",
                      borderRadius: "2px",
                      background: "transparent",
                      color: "oklch(var(--foreground))",
                    }}
                  >
                    {isPaused ? "▶ Resume" : "⏸ Pause"}
                  </button>
                )}
                <button
                  type="button"
                  data-ocid="timer.stop_button"
                  onClick={handleStop}
                  className="transition-smooth font-body italic"
                  style={{
                    padding: "0.7rem 1.8rem",
                    border: "1px solid oklch(0.52 0.18 22 / 0.4)",
                    borderRadius: "2px",
                    background: "transparent",
                    color: "oklch(0.52 0.18 22)",
                  }}
                >
                  ✕ Stop
                </button>
                {isComplete && (
                  <button
                    type="button"
                    data-ocid="timer.start_button"
                    onClick={handleStart}
                    className="transition-smooth font-display font-bold italic shadow-warm-glow"
                    style={{
                      padding: "0.7rem 2rem",
                      background:
                        "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))",
                      color: "oklch(0.94 0.06 60)",
                      border: "1px solid oklch(0.40 0.14 36)",
                      borderRadius: "2px",
                    }}
                  >
                    ✦ Start Again
                  </button>
                )}
              </div>

              {isComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 sacred-card p-4 text-center"
                  data-ocid="timer.success_state"
                >
                  <p
                    className="font-display italic font-semibold"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    ✦ +5 points earned
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1 italic">
                    Your {duration}-minute Dhyana session is complete. Hare
                    Krishna 🙏
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center mb-6"
            >
              <button
                type="button"
                data-ocid="timer.start_button"
                onClick={handleStart}
                className="transition-smooth font-display text-xl font-bold italic shadow-warm-glow"
                style={{
                  padding: "1.1rem 3.5rem",
                  background:
                    "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))",
                  color: "oklch(0.94 0.06 60)",
                  border: "2px solid oklch(0.40 0.14 36)",
                  borderRadius: "3px",
                  letterSpacing: "0.05em",
                }}
              >
                ✦ Begin Sadhana
              </button>
              <p className="font-body italic text-muted-foreground text-xs mt-3">
                {duration} minutes of sacred concentration ·{" "}
                {soundMode === "silence"
                  ? "Silence"
                  : soundMode === "bell"
                    ? "Temple bell every 5 min"
                    : "Soft mantra hum"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Session history */}
        {sessions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="sacred-card p-5"
          >
            <p
              className="font-display text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(var(--accent) / 0.7)" }}
            >
              ✦ Recent Sessions
            </p>
            <div className="space-y-2">
              {sessions.slice(0, 5).map((s, idx) => (
                <div
                  key={s.id}
                  data-ocid={`timer.item.${idx + 1}`}
                  className="flex items-center justify-between"
                  style={{
                    padding: "0.5rem 0",
                    borderBottom:
                      idx < 4 ? "1px solid oklch(var(--border) / 0.3)" : "none",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-accent font-display font-bold"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {s.durationMinutes}min
                    </span>
                    <span className="font-body text-xs text-muted-foreground italic">
                      Dhyana session
                    </span>
                  </div>
                  <span className="font-body text-xs text-muted-foreground italic">
                    {formatSessionDate(s.completedAt)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
