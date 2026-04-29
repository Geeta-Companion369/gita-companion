import { useCallback, useEffect, useRef, useState } from "react";

const IDLE_TIMEOUT_MS = 120_000; // 2 minutes
const ROTATE_INTERVAL_MS = 30_000; // rotate every 30 seconds
const BOOKMARKED_ONLY_KEY = "gita-screensaver-bookmarked-only";

export function useScreensaverPrefs() {
  const [bookmarkedOnly, setBookmarkedOnlyState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(BOOKMARKED_ONLY_KEY) === "true";
    } catch {
      return false;
    }
  });

  const setBookmarkedOnly = useCallback((val: boolean) => {
    setBookmarkedOnlyState(val);
    try {
      localStorage.setItem(BOOKMARKED_ONLY_KEY, String(val));
    } catch {
      /* silent */
    }
  }, []);

  return { bookmarkedOnly, setBookmarkedOnly };
}

export function useScreensaver() {
  const [isActive, setIsActive] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotateTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [rotateCount, setRotateCount] = useState(0);

  const dismiss = useCallback(() => {
    setIsActive(false);
  }, []);

  const resetIdle = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsActive(true);
    }, IDLE_TIMEOUT_MS);
  }, []);

  // Start idle detection
  useEffect(() => {
    const events = ["mousemove", "keydown", "touchstart", "click", "scroll"];

    const handleActivity = () => {
      if (isActive) {
        dismiss();
      }
      resetIdle();
    };

    for (const ev of events) {
      document.addEventListener(ev, handleActivity, { passive: true });
    }

    // Start initial idle timer
    resetIdle();

    return () => {
      for (const ev of events) {
        document.removeEventListener(ev, handleActivity);
      }
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isActive, dismiss, resetIdle]);

  // Verse rotation while active
  useEffect(() => {
    if (isActive) {
      rotateTimerRef.current = setInterval(() => {
        setRotateCount((c) => c + 1);
      }, ROTATE_INTERVAL_MS);
    } else {
      if (rotateTimerRef.current) clearInterval(rotateTimerRef.current);
    }
    return () => {
      if (rotateTimerRef.current) clearInterval(rotateTimerRef.current);
    };
  }, [isActive]);

  return { isActive, dismiss, rotateCount };
}
