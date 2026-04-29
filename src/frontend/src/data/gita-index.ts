// ─── Bhagavad Gita Master Index ──────────────────────────────────────────────
// Merges all 700 verses from all chapter files into one unified data layer.
// All search, lookup, and retrieval utilities live here.

export type { GitaVerse } from "./gita-verses-ch1";
export {
  GITA_CHAPTERS,
  CHAPTER_VERSE_COUNTS,
  TOTAL_VERSES,
} from "./gita-chapters";
export { MOOD_VERSE_MAP } from "./mood-verses";

import type { GitaMood } from "../types/gita";
import type { GitaVerse } from "./gita-verses-ch1";
import { GITA_VERSES_CH1 } from "./gita-verses-ch1";
import { GITA_VERSES_CH2 } from "./gita-verses-ch2";
import { GITA_VERSES_CH3 } from "./gita-verses-ch3";
import { GITA_VERSES_CH4 } from "./gita-verses-ch4";
import { GITA_VERSES_CH5_6 } from "./gita-verses-ch5-6";
import { GITA_VERSES_CH7_8 } from "./gita-verses-ch7-8";
import { GITA_VERSES_CH9_10 } from "./gita-verses-ch9-10";
import { GITA_VERSES_CH11 } from "./gita-verses-ch11";
import { GITA_VERSES_CH12_13 } from "./gita-verses-ch12-13";
import { GITA_VERSES_CH14_15 } from "./gita-verses-ch14-15";
import { GITA_VERSES_CH16_17 } from "./gita-verses-ch16-17";
import { GITA_VERSES_CH18 } from "./gita-verses-ch18";
import { MOOD_VERSE_MAP } from "./mood-verses";

// ─── All 700 Verses in canonical order ───────────────────────────────────────

export const ALL_VERSES: GitaVerse[] = [
  ...GITA_VERSES_CH1,
  ...GITA_VERSES_CH2,
  ...GITA_VERSES_CH3,
  ...GITA_VERSES_CH4,
  ...GITA_VERSES_CH5_6,
  ...GITA_VERSES_CH7_8,
  ...GITA_VERSES_CH9_10,
  ...GITA_VERSES_CH11,
  ...GITA_VERSES_CH12_13,
  ...GITA_VERSES_CH14_15,
  ...GITA_VERSES_CH16_17,
  ...GITA_VERSES_CH18,
];

// ─── Fast Lookup Map: "2.47" → GitaVerse ─────────────────────────────────────

export const VERSE_BY_ID: Record<string, GitaVerse> = Object.fromEntries(
  ALL_VERSES.map((v) => [v.id, v]),
);

// ─── Core Retrieval Functions ─────────────────────────────────────────────────

/** Get a single verse by chapter and verse number. */
export function getVerse(
  chapter: number,
  verse: number,
): GitaVerse | undefined {
  return VERSE_BY_ID[`${chapter}.${verse}`];
}

/** Get all verses in a given chapter (1-indexed). */
export function getChapterVerses(chapter: number): GitaVerse[] {
  return ALL_VERSES.filter((v) => v.chapter === chapter);
}

/** Deterministic daily verse — same verse for everyone on the same day. */
export function getDailyVerse(date: Date = new Date()): GitaVerse {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % ALL_VERSES.length;
  return ALL_VERSES[index] ?? ALL_VERSES[0];
}

/** Full-text search across english, meaning, keywords, and hindi fields. */
export function searchVerses(query: string): GitaVerse[] {
  if (!query.trim()) return [];
  const lower = query.toLowerCase();
  const terms = lower.split(/\s+/).filter(Boolean);
  return ALL_VERSES.filter((v) => {
    const haystack = [
      v.english,
      v.meaning,
      v.hindi,
      v.transliteration,
      ...(v.keywords ?? []),
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}

/** Get verses mapped to a mood using the mood-verse data. */
export function getVersesByMood(mood: string): GitaVerse[] {
  const entry = MOOD_VERSE_MAP[mood as GitaMood];
  if (!entry) return [];
  return entry.verseIds
    .map((id) => VERSE_BY_ID[id])
    .filter((v): v is GitaVerse => v !== undefined);
}

/** Return a random verse from the complete 700. */
export function getRandomVerse(): GitaVerse {
  const index = Math.floor(Math.random() * ALL_VERSES.length);
  return ALL_VERSES[index] ?? ALL_VERSES[0];
}
