import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VERSE_BY_ID } from "@/data/gita-index";
import type { GitaVerse } from "@/data/gita-verses-ch1";
import { usePoints } from "@/hooks/use-points";
import { useTTS } from "@/hooks/use-tts";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

// Reading log
const VIEWED_KEY = "gita-daily-verse-dates";

function loadReadDates(): Record<string, string> {
  try {
    const raw = localStorage.getItem(VIEWED_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
function saveReadDates(d: Record<string, string>): void {
  try {
    localStorage.setItem(VIEWED_KEY, JSON.stringify(d));
  } catch {
    /* silent */
  }
}

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SANSKRIT_MONTHS = [
  "Chaitra",
  "Vaishakha",
  "Jyeshtha",
  "Ashadha",
  "Shravana",
  "Bhadrapada",
  "Ashwin",
  "Kartika",
  "Margashirsha",
  "Pausha",
  "Magha",
  "Phalguna",
];

function formatDivineDate(date: Date): string {
  const day = DAY_NAMES[date.getDay()];
  const month = MONTH_NAMES[date.getMonth()];
  const sankritMonth = SANSKRIT_MONTHS[date.getMonth()];
  return `${day}, ${month} ${date.getDate()} · ${sankritMonth} Maas`;
}

const WEEKDAY_TOPICS: Record<number, { topic: string; application: string }> = {
  0: {
    topic: "surrender and devotion (Bhakti)",
    application: "offer every action of this day to the Divine",
  },
  1: {
    topic: "righteous duty (Dharma)",
    application: "begin this week with clarity of purpose",
  },
  2: {
    topic: "disciplined action (Karma Yoga)",
    application: "act without attachment to results",
  },
  3: {
    topic: "wisdom and knowledge (Jnana)",
    application: "seek understanding in every situation",
  },
  4: {
    topic: "abundance and grace (Yoga of Prosperity)",
    application: "trust that what you need shall be provided",
  },
  5: {
    topic: "spiritual practice (Sadhana)",
    application: "dedicate your practice to Krishna today",
  },
  6: {
    topic: "inner peace (Shanti)",
    application: "rest in the stillness that the Divine alone gives",
  },
};

function getDailyVerse(date: Date): GitaVerse {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const allKeys = Object.keys(VERSE_BY_ID);
  const key = allKeys[dayOfYear % allKeys.length];
  return VERSE_BY_ID[key] ?? VERSE_BY_ID["2.47"];
}

function getPersonalizedReasoning(verse: GitaVerse, date: Date): string {
  const dayInfo = WEEKDAY_TOPICS[date.getDay()] ?? WEEKDAY_TOPICS[1];
  const keyword = verse.keywords?.[0] ?? "dharma";
  const mood = verse.moodTags?.[0] ?? "devotion";
  return `On this ${DAY_NAMES[date.getDay()]}, Krishna illuminates the path of ${dayInfo.topic}. This verse, rooted in the wisdom of "${keyword}" and the spirit of "${mood}", guides you to ${dayInfo.application}. Allow these sacred words to be your charioteer today, Arjun.`;
}

function getDateOffset(offset: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d;
}

export function DailyVersePage() {
  const { addPoints } = usePoints();
  const { speak, stop, isSpeaking } = useTTS();
  const [dayOffset, setDayOffset] = useState(0);

  const targetDate = useMemo(() => getDateOffset(dayOffset), [dayOffset]);
  const verse = useMemo(() => getDailyVerse(targetDate), [targetDate]);
  const todayKey = targetDate.toISOString().split("T")[0];

  const [readDates, setReadDates] =
    useState<Record<string, string>>(loadReadDates);
  const isRead = !!readDates[todayKey];

  const reasoning = useMemo(
    () => getPersonalizedReasoning(verse, targetDate),
    [verse, targetDate],
  );
  const divineDate = formatDivineDate(targetDate);

  const handleMarkRead = useCallback(() => {
    if (isRead) return;
    const updated = { ...readDates, [todayKey]: new Date().toISOString() };
    setReadDates(updated);
    saveReadDates(updated);
    addPoints("reading", 2);
    toast.success("✦ +2 points — Verse marked as read. Hare Krishna 🙏");
  }, [isRead, readDates, todayKey, addPoints]);

  const handleSpeak = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(verse.sanskrit, "hi", "male", 0.7, () => {
        speak(verse.english, "en", "male", 0.8);
      });
    }
  };

  const isToday = dayOffset === 0;

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ दैनिक श्लोक ॥</p>
        <h1 className="chapter-header">Daily Verse</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm italic">
          Krishna's personal message for you today
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </motion.div>

      {/* Date navigation */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-between max-w-2xl mx-auto mb-8"
      >
        <button
          type="button"
          data-ocid="daily-verse.pagination_prev"
          onClick={() => setDayOffset((d) => d - 1)}
          className="transition-smooth font-display font-semibold italic"
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid oklch(var(--accent) / 0.35)",
            borderRadius: "2px",
            color: "oklch(var(--muted-foreground))",
            background: "transparent",
          }}
          aria-label="Previous day's verse"
        >
          ← Prev Day
        </button>

        <div className="text-center">
          <p
            className="font-display italic font-semibold"
            style={{
              color: "oklch(var(--accent))",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
            }}
          >
            {isToday
              ? "✦ Today ✦"
              : dayOffset === -1
                ? "Yesterday"
                : dayOffset === 1
                  ? "Tomorrow"
                  : `${Math.abs(dayOffset)} days ${dayOffset < 0 ? "ago" : "ahead"}`}
          </p>
          <p className="font-body text-xs text-muted-foreground italic">
            {divineDate}
          </p>
        </div>

        <button
          type="button"
          data-ocid="daily-verse.pagination_next"
          onClick={() => setDayOffset((d) => d + 1)}
          className="transition-smooth font-display font-semibold italic"
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid oklch(var(--accent) / 0.35)",
            borderRadius: "2px",
            color: "oklch(var(--muted-foreground))",
            background: "transparent",
          }}
          aria-label="Next day's verse"
        >
          Next Day →
        </button>
      </motion.div>

      {/* Main verse card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={verse.id + dayOffset}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {/* Prayer card — ornate gold border */}
          <div
            className="p-8 mb-6 text-center relative"
            style={{
              background:
                "radial-gradient(ellipse at top, oklch(0.95 0.08 72) 0%, oklch(0.91 0.07 68) 100%)",
              border: "2px solid oklch(var(--accent) / 0.4)",
              borderRadius: "3px",
              boxShadow:
                "0 4px 32px oklch(var(--accent) / 0.12), inset 0 0 60px oklch(0.88 0.1 64 / 0.3)",
            }}
          >
            {/* Corner ornaments */}
            {[
              "top-2 left-2",
              "top-2 right-2",
              "bottom-2 left-2",
              "bottom-2 right-2",
            ].map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} text-accent`}
                style={{ fontSize: "0.6rem", opacity: 0.55 }}
                aria-hidden="true"
              >
                ✦
              </span>
            ))}

            {/* Verse ID */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 1,
                  background: "oklch(var(--accent) / 0.4)",
                }}
              />
              <span className="text-verse-number">
                Chapter {verse.chapter}, Verse {verse.verse}
              </span>
              <div
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 1,
                  background: "oklch(var(--accent) / 0.4)",
                }}
              />
            </div>

            {/* Sanskrit */}
            <p
              className="text-sanskrit text-center"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.45rem)",
                lineHeight: 2.1,
                color: "oklch(var(--foreground))",
                marginBottom: "1.25rem",
              }}
            >
              {verse.sanskrit}
            </p>

            {/* Transliteration */}
            <p
              className="font-body italic text-muted-foreground text-sm mb-4"
              style={{ letterSpacing: "0.02em" }}
            >
              {verse.transliteration}
            </p>

            <div className="ornate-rule my-4">
              <span className="text-accent text-sm">❧</span>
            </div>

            {/* English */}
            <p
              className="text-translation text-center"
              style={{ maxWidth: "42rem", margin: "0 auto" }}
            >
              {verse.english}
            </p>

            {/* Hindi */}
            {verse.hindi && (
              <p
                className="font-body text-sm text-muted-foreground text-center mt-3 italic"
                style={{ maxWidth: "40rem", margin: "0.75rem auto 0" }}
              >
                {verse.hindi}
              </p>
            )}

            {isRead && (
              <Badge
                className="mt-5 font-display italic"
                style={{
                  background: "oklch(var(--accent) / 0.15)",
                  color: "oklch(var(--accent))",
                  border: "1px solid oklch(var(--accent) / 0.4)",
                }}
              >
                ✦ Read Today
              </Badge>
            )}
          </div>

          {/* Personalized reasoning card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="sacred-card mb-6 p-6"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5" aria-hidden="true">
                🌸
              </span>
              <div>
                <p
                  className="font-display text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "oklch(var(--accent) / 0.75)" }}
                >
                  Why This Verse Speaks to You Today
                </p>
                <p className="font-body text-sm leading-relaxed text-foreground italic">
                  {reasoning}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            <button
              type="button"
              data-ocid="daily-verse.listen_button"
              onClick={handleSpeak}
              className="transition-smooth font-body italic text-sm"
              style={{
                padding: "0.75rem",
                border: `1px solid oklch(var(--accent) / ${isSpeaking ? "0.6" : "0.3"})`,
                borderRadius: "2px",
                background: isSpeaking
                  ? "oklch(var(--accent) / 0.1)"
                  : "transparent",
                color: "oklch(var(--foreground))",
              }}
            >
              {isSpeaking ? "⏹ Stop" : "▶ Listen"}
            </button>

            <button
              type="button"
              data-ocid="daily-verse.mark_read_button"
              onClick={handleMarkRead}
              disabled={isRead}
              className="transition-smooth font-body italic text-sm"
              style={{
                padding: "0.75rem",
                border: "1px solid oklch(var(--accent) / 0.3)",
                borderRadius: "2px",
                background: isRead
                  ? "oklch(var(--accent) / 0.12)"
                  : "transparent",
                color: isRead
                  ? "oklch(var(--accent))"
                  : "oklch(var(--foreground))",
                opacity: isRead ? 0.8 : 1,
              }}
            >
              {isRead ? "✦ Read" : "✓ Mark Read"}
            </button>

            <Link
              to="/verse-share"
              data-ocid="daily-verse.share_button"
              className="transition-smooth font-body italic text-sm text-center flex items-center justify-center"
              style={{
                padding: "0.75rem",
                border: "1px solid oklch(var(--accent) / 0.3)",
                borderRadius: "2px",
                color: "oklch(var(--foreground))",
              }}
            >
              ↗ Share
            </Link>

            <Link
              to="/journal"
              data-ocid="daily-verse.journal_button"
              className="transition-smooth font-body italic text-sm text-center flex items-center justify-center"
              style={{
                padding: "0.75rem",
                border: "1px solid oklch(var(--accent) / 0.3)",
                borderRadius: "2px",
                color: "oklch(var(--foreground))",
              }}
            >
              ✏ Journal
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
