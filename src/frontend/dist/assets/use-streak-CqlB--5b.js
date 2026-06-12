import { r as reactExports } from "./index-CodWPqWB.js";
const STORAGE_KEY = "gita-streak";
function todayStr() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function loadStreak() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, lastDate: "", longestStreak: 0 };
    return JSON.parse(raw);
  } catch {
    return { count: 0, lastDate: "", longestStreak: 0 };
  }
}
function saveStreak(streak) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(streak));
  } catch {
  }
}
function useStreak() {
  const [streak, setStreakState] = reactExports.useState(loadStreak);
  const recordPractice = reactExports.useCallback(() => {
    const today = todayStr();
    setStreakState((prev) => {
      const yesterday = /* @__PURE__ */ new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];
      if (prev.lastDate === today) return prev;
      let newCount;
      if (prev.lastDate === yesterdayStr) {
        newCount = prev.count + 1;
      } else if (prev.lastDate === "") {
        newCount = 1;
      } else {
        newCount = 1;
      }
      const updated = {
        count: newCount,
        lastDate: today,
        longestStreak: Math.max(prev.longestStreak, newCount)
      };
      saveStreak(updated);
      return updated;
    });
  }, []);
  const hasPracticedToday = streak.lastDate === todayStr();
  return { streak, recordPractice, hasPracticedToday };
}
export {
  useStreak as u
};
