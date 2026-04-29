import type { MalaSession } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-mala-history";

function loadHistory(): MalaSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MalaSession[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: MalaSession[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // silently fail
  }
}

export function useMalaHistory() {
  const [history, setHistory] = useState<MalaSession[]>(loadHistory);

  const addSession = useCallback((beadCount: number, mantra?: string) => {
    const session: MalaSession = {
      id: `mala-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      beadCount,
      mantra,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [session, ...prev].slice(0, 100); // keep last 100
      saveHistory(updated);
      return updated;
    });
    return session;
  }, []);

  const totalBeads = history.reduce((sum, s) => sum + s.beadCount, 0);
  const todaySessions = history.filter(
    (s) => s.date === new Date().toISOString().split("T")[0],
  );

  return { history, addSession, totalBeads, todaySessions };
}
