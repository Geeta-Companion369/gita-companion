import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LANGUAGE_LABELS, useLanguage } from "@/hooks/use-language";
import { TTS_SPEED_PRESETS, useTTS } from "@/hooks/use-tts";
import { useUserProfile } from "@/hooks/use-user-profile";
import type { Language } from "@/types/gita";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const LANGUAGES = Object.entries(LANGUAGE_LABELS) as [Language, string][];

const DAILY_TARGETS = [
  { value: 27, label: "27", desc: "Trinitarian round" },
  { value: 54, label: "54", desc: "Half mala" },
  { value: 108, label: "108", desc: "Full mala" },
];

const DAILY_TARGET_KEY = "gita-daily-target";
const REMINDER_KEY = "gita-reminder-enabled";

function loadDailyTarget(): number {
  try {
    return Number(localStorage.getItem(DAILY_TARGET_KEY) ?? 27);
  } catch {
    return 27;
  }
}
function loadReminder(): boolean {
  try {
    return localStorage.getItem(REMINDER_KEY) === "true";
  } catch {
    return false;
  }
}

// Manuscript ink-toggle — ancient selector style
function InkToggle({
  checked,
  onCheckedChange,
  id,
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className="relative transition-smooth focus-visible:outline-2 focus-visible:outline-ring"
      style={{
        width: 46,
        height: 24,
        borderRadius: "2px",
        background: checked
          ? "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))"
          : "oklch(var(--muted) / 0.7)",
        border: checked
          ? "1px solid oklch(0.40 0.14 36)"
          : "1px solid oklch(var(--border))",
        boxShadow: checked
          ? "inset 0 1px 3px rgba(60,40,20,0.2), 0 1px 4px oklch(0.48 0.16 38 / 0.3)"
          : "inset 0 1px 3px rgba(60,40,20,0.08)",
        flexShrink: 0,
      }}
    >
      <div
        className="absolute top-1 transition-smooth"
        style={{
          width: 16,
          height: 14,
          borderRadius: "1px",
          background: checked
            ? "oklch(0.94 0.06 60)"
            : "oklch(var(--muted-foreground))",
          left: checked ? 26 : 4,
          boxShadow: "0 1px 2px rgba(60,40,20,0.2)",
        }}
      />
    </button>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display text-xs font-bold uppercase tracking-widest mb-4"
      style={{
        color: "oklch(var(--accent) / 0.70)",
        borderBottom: "1px solid oklch(var(--accent) / 0.18)",
        paddingBottom: "0.5rem",
      }}
    >
      {children}
    </p>
  );
}

export function SettingsPage() {
  const { language, setLanguage } = useLanguage();
  const { profile, setProfile } = useUserProfile();
  const { ttsSpeed, setTtsSpeed } = useTTS();

  const [nameInput, setNameInput] = useState(profile.name);
  const [dailyTarget, setDailyTargetState] = useState(loadDailyTarget);
  const [reminderEnabled, setReminderEnabled] = useState(loadReminder);

  const handleNameBlur = () => {
    const trimmed = nameInput.trim();
    if (trimmed !== profile.name) {
      setProfile({ name: trimmed });
      toast.success("Name updated", {
        description: `Welcome, ${trimmed || "Seeker"}! 🙏`,
      });
    }
  };

  const handleNameKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
  };

  const handleDailyTarget = (val: number) => {
    setDailyTargetState(val);
    try {
      localStorage.setItem(DAILY_TARGET_KEY, String(val));
    } catch {
      /* silent */
    }
    toast.success(`Daily target set to ${val} reps`);
  };

  const handleReminder = (checked: boolean) => {
    setReminderEnabled(checked);
    try {
      localStorage.setItem(REMINDER_KEY, String(checked));
    } catch {
      /* silent */
    }
    if (checked) toast.success("Daily reminders enabled 🙏");
    else toast.info("Reminders disabled");
  };

  const handleExport = () => {
    try {
      const data: Record<string, unknown> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith("gita-")) {
          const raw = localStorage.getItem(key);
          if (raw) {
            try {
              data[key] = JSON.parse(raw);
            } catch {
              data[key] = raw;
            }
          }
        }
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `gita-sadhana-${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Data exported", {
        description: "Your sadhana data has been downloaded.",
      });
    } catch {
      toast.error("Export failed");
    }
  };

  const handleReset = () => {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("gita-")) keys.push(key);
    }
    for (const key of keys) localStorage.removeItem(key);
    toast.success("All data cleared", {
      description: "Your sadhana data has been reset. Jai Shree Krishna 🙏",
    });
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <div className="max-w-lg mx-auto pb-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="divider-ornate">
          <span>॥</span>
        </div>
        <p className="text-verse-number mb-1">Sadhana Preferences</p>
        <h1
          className="chapter-header"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
        >
          Settings
        </h1>
        <p className="text-translation italic" style={{ fontSize: "0.88rem" }}>
          Arrange your sacred practice as your heart desires
        </p>
        <div className="divider-ornate mt-4">
          <span>ॐ</span>
        </div>
      </motion.div>

      {/* Identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.07 }}
        className="mb-5"
      >
        <div className="sacred-card">
          <SectionTitle>✦ Your Identity</SectionTitle>
          <div className="space-y-5">
            {/* Name input — manuscript handwritten style */}
            <div>
              <label
                htmlFor="settings-name"
                className="font-body text-sm italic block mb-2"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Your Sacred Name
              </label>
              <input
                id="settings-name"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onBlur={handleNameBlur}
                onKeyDown={handleNameKey}
                placeholder="Enter your name (or leave blank for 'Seeker')"
                className="w-full font-body italic focus:outline-none"
                style={{
                  padding: "0.65rem 1rem",
                  fontSize: "0.9rem",
                  background: "oklch(var(--background) / 0.6)",
                  border: "1px solid oklch(var(--accent) / 0.28)",
                  borderBottom: "2px solid oklch(var(--accent) / 0.35)",
                  borderRadius: "1px",
                  color: "oklch(var(--foreground))",
                }}
                data-ocid="settings-name-input"
              />
              <p
                className="font-body text-xs italic mt-1.5"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Inscribed automatically when you leave this field
              </p>
            </div>

            <Separator style={{ opacity: 0.25 }} />

            {/* Arjun mode */}
            <div className="flex items-center justify-between">
              <div>
                <label
                  htmlFor="arjun-mode"
                  className="font-display text-sm font-semibold italic block"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  Arjun Mode
                </label>
                <p
                  className="font-body text-xs italic mt-0.5"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Be addressed as "Arjun" — for immersive reading
                </p>
              </div>
              <InkToggle
                id="arjun-mode"
                checked={profile.arjunMode ?? false}
                onCheckedChange={(checked) => {
                  setProfile({ arjunMode: checked });
                  toast.success(
                    checked ? "Arjun Mode enabled 🦚" : "Arjun Mode disabled",
                  );
                }}
                data-ocid="arjun-mode-toggle"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Language */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="mb-5"
      >
        <div className="sacred-card">
          <SectionTitle>✦ Language of the Sacred Text</SectionTitle>
          <div className="space-y-1.5">
            {LANGUAGES.map(([lang, label]) => {
              const selected = language === lang;
              return (
                <button
                  type="button"
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    toast.success(`Language set to ${label}`);
                  }}
                  className="w-full text-left font-body text-sm italic transition-smooth flex items-center justify-between"
                  style={{
                    padding: "0.6rem 1rem",
                    borderRadius: "2px",
                    border: selected
                      ? "1px solid oklch(var(--accent) / 0.45)"
                      : "1px solid transparent",
                    background: selected
                      ? "oklch(var(--accent) / 0.08)"
                      : "transparent",
                    color: selected
                      ? "oklch(var(--foreground))"
                      : "oklch(var(--muted-foreground))",
                    fontWeight: selected ? 600 : 400,
                  }}
                  data-ocid={`lang-option-${lang}`}
                >
                  <span>
                    {selected ? "❯ " : "  "}
                    {label}
                  </span>
                  {selected && (
                    <Badge
                      variant="secondary"
                      className="font-body text-[10px] py-0"
                    >
                      Active
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Voice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="mb-5"
      >
        <div className="sacred-card">
          <SectionTitle>✦ Voice for Recitation</SectionTitle>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="font-display text-sm font-semibold italic"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  Voice Preference
                </p>
                <p
                  className="font-body text-xs italic mt-0.5"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {profile.voiceGender === "female"
                    ? "Female — gentle, melodic bhakti"
                    : "Male — deep, devotional resonance"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="font-body text-xs italic"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Male
                </span>
                <InkToggle
                  id="voice-gender"
                  checked={profile.voiceGender === "female"}
                  onCheckedChange={(checked) => {
                    setProfile({ voiceGender: checked ? "female" : "male" });
                    toast.success(
                      checked ? "Female voice selected" : "Male voice selected",
                    );
                  }}
                />
                <span
                  className="font-body text-xs italic"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Female
                </span>
              </div>
            </div>

            <Separator style={{ opacity: 0.25 }} />

            {/* Mantra Recitation Speed */}
            <div>
              <p
                className="font-display text-sm font-semibold italic mb-1"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Mantra Recitation Speed
              </p>
              <p
                className="font-body text-xs italic mb-3"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Adjust how fast mantras and verses are spoken aloud
              </p>
              <div className="grid grid-cols-3 gap-2">
                {TTS_SPEED_PRESETS.map((preset) => {
                  const active = ttsSpeed === preset.value;
                  return (
                    <button
                      type="button"
                      key={preset.value}
                      onClick={() => {
                        setTtsSpeed(preset.value);
                        toast.success(`Speed set to ${preset.label}`);
                      }}
                      className="flex flex-col items-center justify-center gap-0.5 py-3 transition-smooth"
                      style={{
                        borderRadius: "2px",
                        border: active
                          ? "1px solid oklch(var(--accent) / 0.5)"
                          : "1px solid oklch(var(--border) / 0.55)",
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
                      data-ocid={`tts-speed-${preset.value}`}
                    >
                      <span className="text-xl leading-none">
                        {preset.emoji}
                      </span>
                      <span className="font-body text-[10px] italic mt-1 opacity-80">
                        {preset.label.replace(`${preset.emoji} `, "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Daily Practice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-5"
      >
        <div className="sacred-card">
          <SectionTitle>✦ Daily Practice</SectionTitle>
          <div className="space-y-5">
            <div>
              <p
                className="font-body text-sm italic mb-3"
                style={{ color: "oklch(var(--foreground))" }}
              >
                Default Naam Writing Target
              </p>
              <div className="grid grid-cols-3 gap-3">
                {DAILY_TARGETS.map(({ value, label, desc }) => {
                  const active = dailyTarget === value;
                  return (
                    <button
                      type="button"
                      key={value}
                      onClick={() => handleDailyTarget(value)}
                      className="flex flex-col items-center justify-center gap-0.5 py-3.5 transition-smooth"
                      style={{
                        borderRadius: "2px",
                        border: active
                          ? "1px solid oklch(var(--accent) / 0.5)"
                          : "1px solid oklch(var(--border) / 0.55)",
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
                      data-ocid={`daily-target-${value}`}
                    >
                      <span className="font-display text-xl font-bold italic leading-none">
                        {label}
                      </span>
                      <span className="font-body text-[10px] italic mt-0.5 opacity-80">
                        {desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Separator style={{ opacity: 0.25 }} />

            {/* Reminder */}
            <div className="flex items-center justify-between">
              <div>
                <label
                  htmlFor="reminder-toggle"
                  className="font-display text-sm font-semibold italic block"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  Daily Practice Reminder
                </label>
                <p
                  className="font-body text-xs italic mt-0.5"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Show a reminder banner when you open the app
                </p>
              </div>
              <InkToggle
                id="reminder-toggle"
                checked={reminderEnabled}
                onCheckedChange={handleReminder}
                data-ocid="reminder-toggle"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24 }}
        className="mb-5"
      >
        <div className="sacred-card">
          <SectionTitle>✦ Your Sadhana Data</SectionTitle>
          <p
            className="font-body text-xs italic mb-4 leading-relaxed"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            All your sacred data — practice history, points, streaks, and
            settings — is preserved locally on your device. Export it as a
            backup at any time.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleExport}
              className="w-full font-body italic transition-smooth hover:opacity-90"
              style={{
                padding: "0.7rem",
                background: "transparent",
                color: "oklch(var(--foreground))",
                border: "1px solid oklch(var(--accent) / 0.35)",
                borderRadius: "2px",
                fontSize: "0.875rem",
              }}
              data-ocid="export-data-btn"
            >
              ↓ Export Sadhana Data
            </button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="w-full font-body italic transition-smooth hover:opacity-90"
                  style={{
                    padding: "0.7rem",
                    background: "oklch(0.50 0.18 22 / 0.10)",
                    color: "oklch(0.50 0.18 22)",
                    border: "1px solid oklch(0.50 0.18 22 / 0.35)",
                    borderRadius: "2px",
                    fontSize: "0.875rem",
                  }}
                  data-ocid="reset-data-btn"
                >
                  ↺ Reset All Data
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-display italic">
                    Reset All Sadhana Data?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="font-body italic">
                    This will permanently erase all your practice history,
                    points, streaks, badges, and settings. This cannot be
                    undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="font-body italic rounded-sm">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleReset}
                    className="font-body italic rounded-sm"
                    data-ocid="confirm-reset-btn"
                  >
                    Yes, Reset Everything
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        className="mb-5"
      >
        <div className="sacred-card">
          <SectionTitle>✦ About This App</SectionTitle>
          <div
            className="space-y-3 font-body text-sm italic leading-relaxed"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            <div className="flex items-center justify-between text-xs not-italic">
              <span
                style={{ color: "oklch(var(--foreground))" }}
                className="font-semibold"
              >
                Version
              </span>
              <Badge variant="outline" className="font-body text-[10px]">
                1.0.0
              </Badge>
            </div>
            <Separator style={{ opacity: 0.25 }} />
            <p>
              The{" "}
              <span
                style={{ color: "oklch(var(--foreground))" }}
                className="font-semibold"
              >
                Bhagavad Gita
              </span>{" "}
              is a sacred dialogue between Lord Krishna and Arjuna on the
              battlefield of Kurukshetra. Its 700 verses across 18 chapters
              reveal the eternal wisdom of dharma, karma, jnana, and bhakti.
            </p>
            <p>
              This companion offers chapter reading, naam writing, mala
              counting, mantra listening, and AI-powered guidance rooted
              exclusively in the Gita's teachings.
            </p>
            <p className="text-center text-xs mt-4" style={{ opacity: 0.65 }}>
              🪷 Jai Shree Krishna · ✨ Raaadhe Raaadhe
            </p>
          </div>
        </div>
      </motion.div>

      <p
        className="text-center font-body text-xs italic pb-4"
        style={{ color: "oklch(var(--muted-foreground))" }}
      >
        🙏 All data stays on your device — no accounts, no tracking
      </p>
    </div>
  );
}
