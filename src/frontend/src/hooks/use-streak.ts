import type { Streak } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-streak";

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function loadStreak(): Streak {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, lastDate: "", longestStreak: 0 };
    return JSON.parse(raw) as Streak;
  } catch {
    return { count: 0, lastDate: "", longestStreak: 0 };
  }
}

function saveStreak(streak: Streak): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(streak));
  } catch {
    // silently fail
  }
}

export function useStreak() {
  const [streak, setStreakState] = useState<Streak>(loadStreak);

  const recordPractice = useCallback(() => {
    const today = todayStr();
    setStreakState((prev) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (prev.lastDate === today) return prev; // already recorded today

      let newCount: number;
      if (prev.lastDate === yesterdayStr) {
        newCount = prev.count + 1;
      } else if (prev.lastDate === "") {
        newCount = 1;
      } else {
        newCount = 1; // streak broken
      }

      const updated: Streak = {
        count: newCount,
        lastDate: today,
        longestStreak: Math.max(prev.longestStreak, newCount),
      };
      saveStreak(updated);
      return updated;
    });
  }, []);

  const hasPracticedToday = streak.lastDate === todayStr();

  return { streak, recordPractice, hasPracticedToday };
}
