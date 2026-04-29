import type { LastReadPosition } from "@/types/gita";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gita_last_read";

function loadPosition(): LastReadPosition | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LastReadPosition) : null;
  } catch {
    return null;
  }
}

function savePosition(pos: LastReadPosition): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
  } catch {
    // silently fail
  }
}

export function useLastRead() {
  const [lastRead, setLastRead] = useState<LastReadPosition | null>(
    loadPosition,
  );

  useEffect(() => {
    if (lastRead) savePosition(lastRead);
  }, [lastRead]);

  const setPosition = (pos: LastReadPosition) => {
    setLastRead(pos);
  };

  return { lastRead, setPosition };
}
