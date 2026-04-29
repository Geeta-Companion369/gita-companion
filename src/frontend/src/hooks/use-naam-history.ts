import type { NaamSession } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-naam-history";

function loadHistory(): NaamSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as NaamSession[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: NaamSession[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // silently fail
  }
}

export function useNaamHistory() {
  const [history, setHistory] = useState<NaamSession[]>(loadHistory);

  const addSession = useCallback((mantra: string, reps: number) => {
    const session: NaamSession = {
      id: `naam-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      mantra,
      reps,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [session, ...prev].slice(0, 100); // keep last 100
      saveHistory(updated);
      return updated;
    });
    return session;
  }, []);

  const totalReps = history.reduce((sum, s) => sum + s.reps, 0);
  const completedCycles = Math.floor(totalReps / 108);
  const todaySessions = history.filter(
    (s) => s.date === new Date().toISOString().split("T")[0],
  );

  return { history, addSession, totalReps, completedCycles, todaySessions };
}
