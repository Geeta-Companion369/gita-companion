import { i as getVerse, k as getChapterVerses } from "./index-CodWPqWB.js";
import { a as useQuery } from "./use-chapters-cZFeA1qb.js";
function toVerse(v) {
  return {
    id: `${v.chapter}-${v.verse}`,
    chapterId: v.chapter,
    verseNumber: v.verse,
    sanskritText: v.sanskrit,
    transliteration: v.transliteration,
    englishTranslation: v.english,
    hindiTranslation: v.hindi,
    explanation: v.meaning
  };
}
function getChapterVersesAsVerse(chapterId) {
  return getChapterVerses(chapterId).map(toVerse);
}
function useVersesByChapter(chapterId) {
  return useQuery({
    queryKey: ["verses", chapterId],
    queryFn: async () => getChapterVersesAsVerse(chapterId),
    staleTime: Number.POSITIVE_INFINITY
  });
}
function useVerse(chapterId, verseId) {
  return useQuery({
    queryKey: ["verse", chapterId, verseId],
    queryFn: async () => {
      const normalized = verseId.replace("-", ".");
      const parts = normalized.split(".");
      const chapter = Number.parseInt(parts[0], 10);
      const verse = Number.parseInt(parts[1], 10);
      const found = getVerse(chapter, verse);
      return found ? toVerse(found) : null;
    },
    staleTime: Number.POSITIVE_INFINITY
  });
}
function useAdjacentVerses(chapterId, currentVerseId) {
  const { data: verses } = useVersesByChapter(chapterId);
  if (!verses || verses.length === 0)
    return { prevVerse: null, nextVerse: null };
  const idx = verses.findIndex((v) => v.id === currentVerseId);
  if (idx === -1) return { prevVerse: null, nextVerse: null };
  return {
    prevVerse: idx > 0 ? verses[idx - 1] : null,
    nextVerse: idx < verses.length - 1 ? verses[idx + 1] : null
  };
}
export {
  useVerse as a,
  useAdjacentVerses as b,
  useVersesByChapter as u
};
