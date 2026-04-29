// ─── Verse Hooks ──────────────────────────────────────────────────────────────
// All React Query hooks for Bhagavad Gita verse data.
// Data is sourced entirely from local static data (700 verses, offline-first).

import {
  ALL_VERSES,
  VERSE_BY_ID,
  getChapterVerses,
  getDailyVerse,
  getVerse,
  getVersesByMood,
  searchVerses,
} from "@/data/gita-index";
import type { GitaVerse } from "@/data/gita-verses-ch1";
import {
  WORD_INTELLIGENCE,
  getWordIntelligence,
} from "@/data/word-intelligence";
import type { Verse, WordIntelligence } from "@/types/gita";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

// ─── Legacy VERSES map for backward compatibility ─────────────────────────────
// Converts GitaVerse (local data format) → Verse (app type) for existing callers.

function toVerse(v: GitaVerse): Verse {
  return {
    id: `${v.chapter}-${v.verse}`,
    chapterId: v.chapter,
    verseNumber: v.verse,
    sanskritText: v.sanskrit,
    transliteration: v.transliteration,
    englishTranslation: v.english,
    hindiTranslation: v.hindi,
    explanation: v.meaning,
  };
}

// ─── Legacy chapter map (keyed by string chapter number) ─────────────────────

function getChapterVersesAsVerse(chapterId: number): Verse[] {
  return getChapterVerses(chapterId).map(toVerse);
}

// ─── All Verses ───────────────────────────────────────────────────────────────

/** Returns the full 700-verse array as GitaVerse objects. */
export function useAllVerses() {
  return useQuery<GitaVerse[]>({
    queryKey: ["all-verses"],
    queryFn: async () => ALL_VERSES,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ─── Chapter Verses ───────────────────────────────────────────────────────────

/** Returns all verses for a given chapter (1–18) as legacy Verse type. */
export function useVersesByChapter(chapterId: number) {
  return useQuery<Verse[]>({
    queryKey: ["verses", chapterId],
    queryFn: async () => getChapterVersesAsVerse(chapterId),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

/** Returns all verses for a given chapter as GitaVerse objects. */
export function useChapterVerses(chapter: number) {
  return useQuery<GitaVerse[]>({
    queryKey: ["chapter-verses", chapter],
    queryFn: async () => getChapterVerses(chapter),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ─── Single Verse ─────────────────────────────────────────────────────────────

/** Look up a single verse by chapterId + legacy string verse ID (e.g. "2-47"). */
export function useVerse(chapterId: number, verseId: string) {
  return useQuery<Verse | null>({
    queryKey: ["verse", chapterId, verseId],
    queryFn: async () => {
      // verseId may be in format "2-47" or "2.47"
      const normalized = verseId.replace("-", ".");
      const parts = normalized.split(".");
      const chapter = Number.parseInt(parts[0], 10);
      const verse = Number.parseInt(parts[1], 10);
      const found = getVerse(chapter, verse);
      return found ? toVerse(found) : null;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

/** Look up a verse by its canonical dot-notation ID (e.g. "2.47"). */
export function useVerseById(verseId: string) {
  return useQuery<GitaVerse | null>({
    queryKey: ["verse-by-id", verseId],
    queryFn: async () => VERSE_BY_ID[verseId] ?? null,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ─── Daily Verse ──────────────────────────────────────────────────────────────

/** Returns the deterministic verse of the day (same for all users on the same day). */
export function useDailyVerse() {
  return useQuery<GitaVerse>({
    queryKey: ["daily-verse", new Date().toDateString()],
    queryFn: async () => getDailyVerse(new Date()),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ─── Verse Search ─────────────────────────────────────────────────────────────

/** Full-text verse search across English, meaning, Hindi, keywords. */
export function useVerseSearch(query: string) {
  return useQuery<GitaVerse[]>({
    queryKey: ["verse-search", query],
    queryFn: async () => (query.trim() ? searchVerses(query) : []),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: query.trim().length > 0,
  });
}

// ─── Mood Verses ──────────────────────────────────────────────────────────────

/** Returns verses associated with a given mood string. */
export function useVersesForMood(mood: string) {
  return useQuery<GitaVerse[]>({
    queryKey: ["mood-verses", mood],
    queryFn: async () => (mood ? getVersesByMood(mood) : []),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ─── Navigate Within Chapter ──────────────────────────────────────────────────

/** Jump to a specific verse number within a chapter; returns legacy ID or null. */
export function useVerseJump(chapterId: number) {
  const { data: verses } = useVersesByChapter(chapterId);

  const jumpToVerse = useCallback(
    (verseNumber: number): string | null => {
      const verse = verses?.find((v) => v.verseNumber === verseNumber);
      return verse ? verse.id : null;
    },
    [verses],
  );

  const getVerseById = useCallback(
    (verseNumber: number): Verse | null => {
      return verses?.find((v) => v.verseNumber === verseNumber) ?? null;
    },
    [verses],
  );

  return { jumpToVerse, getVerseById, verses };
}

// ─── Adjacent Verses (Prev / Next) ───────────────────────────────────────────

/** Returns the previous and next Verse objects for navigation. */
export function useAdjacentVerses(chapterId: number, currentVerseId: string) {
  const { data: verses } = useVersesByChapter(chapterId);

  if (!verses || verses.length === 0)
    return { prevVerse: null, nextVerse: null };

  const idx = verses.findIndex((v) => v.id === currentVerseId);
  if (idx === -1) return { prevVerse: null, nextVerse: null };

  return {
    prevVerse: idx > 0 ? verses[idx - 1] : null,
    nextVerse: idx < verses.length - 1 ? verses[idx + 1] : null,
  };
}

// ─── Word Intelligence ────────────────────────────────────────────────────────

/** Returns word intelligence data for a Sanskrit word (IAST key). */
export function useWordIntelligence(word: string) {
  return useQuery<WordIntelligence | null>({
    queryKey: ["word-intelligence", word],
    queryFn: async () => {
      if (!word.trim()) return null;
      return getWordIntelligence(word.toLowerCase().trim()) ?? null;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

/** Returns all word intelligence entries for browsing. */
export function useAllWordIntelligence() {
  return useQuery<Record<string, WordIntelligence>>({
    queryKey: ["all-word-intelligence"],
    queryFn: async () => WORD_INTELLIGENCE,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ─── Utility: plain function (non-hook) for sync access ──────────────────────

/** Synchronous helper to get all verses in a chapter without React Query. */
export { getChapterVerses } from "@/data/gita-index";

// ─── Krishna Guidance (backward compatibility) ────────────────────────────────

const KRISHNA_GUIDANCE: Record<
  string,
  { chapterId: number; verseId: string; message: string }
> = {
  grief: {
    chapterId: 2,
    verseId: "2-20",
    message:
      "The soul is eternal. What grieves you is only the temporary form, not the immortal self within.",
  },
  fear: {
    chapterId: 9,
    verseId: "9-22",
    message:
      "Surrender to Me completely. I will protect what you have and provide what you lack. Fear not.",
  },
  duty: {
    chapterId: 2,
    verseId: "2-47",
    message:
      "Perform your duty without attachment to results. This is the highest path.",
  },
  anger: {
    chapterId: 3,
    verseId: "3-27",
    message:
      "The deluded ego says 'I am the doer.' See beyond the ego and anger dissolves.",
  },
  peace: {
    chapterId: 6,
    verseId: "6-26",
    message:
      "Whenever the mind wanders, gently bring it back. Each return is a step toward inner peace.",
  },
  purpose: {
    chapterId: 4,
    verseId: "4-7",
    message:
      "Whenever righteousness declines, I manifest to restore the divine order. Your life has sacred purpose.",
  },
};

export { KRISHNA_GUIDANCE };
