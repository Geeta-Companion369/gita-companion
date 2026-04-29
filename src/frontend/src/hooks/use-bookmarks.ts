import type { Bookmark } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-bookmarks";

function loadBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Bookmark[]) : [];
  } catch {
    return [];
  }
}

function saveBookmarks(bookmarks: Bookmark[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  } catch {
    // silently fail
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarksState] = useState<Bookmark[]>(loadBookmarks);

  const addBookmark = useCallback(
    (chapterId: number, verseId: number, note?: string) => {
      setBookmarksState((prev) => {
        const exists = prev.some(
          (b) => b.chapterId === chapterId && b.verseId === verseId,
        );
        if (exists) return prev;
        const updated = [
          ...prev,
          {
            chapterId,
            verseId,
            addedDate: new Date().toISOString().split("T")[0],
            note,
          },
        ];
        saveBookmarks(updated);
        return updated;
      });
    },
    [],
  );

  const removeBookmark = useCallback((chapterId: number, verseId: number) => {
    setBookmarksState((prev) => {
      const updated = prev.filter(
        (b) => !(b.chapterId === chapterId && b.verseId === verseId),
      );
      saveBookmarks(updated);
      return updated;
    });
  }, []);

  const isBookmarked = useCallback(
    (chapterId: number, verseId: number) =>
      bookmarks.some((b) => b.chapterId === chapterId && b.verseId === verseId),
    [bookmarks],
  );

  return { bookmarks, addBookmark, removeBookmark, isBookmarked };
}
