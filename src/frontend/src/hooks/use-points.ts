import type { Points } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-points";

type PointCategory = "writing" | "reading" | "listening" | "streak";

function loadPoints(): Points {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw)
      return {
        total: 0,
        fromWriting: 0,
        fromReading: 0,
        fromListening: 0,
        fromStreak: 0,
      };
    return JSON.parse(raw) as Points;
  } catch {
    return {
      total: 0,
      fromWriting: 0,
      fromReading: 0,
      fromListening: 0,
      fromStreak: 0,
    };
  }
}

function savePoints(points: Points): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
  } catch {
    // silently fail
  }
}

export function usePoints() {
  const [points, setPointsState] = useState<Points>(loadPoints);

  const addPoints = useCallback((category: PointCategory, amount: number) => {
    setPointsState((prev) => {
      const updated = { ...prev, total: prev.total + amount };
      if (category === "writing")
        updated.fromWriting = prev.fromWriting + amount;
      else if (category === "reading")
        updated.fromReading = prev.fromReading + amount;
      else if (category === "listening")
        updated.fromListening = prev.fromListening + amount;
      else if (category === "streak")
        updated.fromStreak = prev.fromStreak + amount;
      savePoints(updated);
      return updated;
    });
  }, []);

  const deductPoints = useCallback((amount: number) => {
    setPointsState((prev) => {
      const updated = { ...prev, total: Math.max(0, prev.total - amount) };
      savePoints(updated);
      return updated;
    });
  }, []);

  return { points, addPoints, deductPoints };
}
