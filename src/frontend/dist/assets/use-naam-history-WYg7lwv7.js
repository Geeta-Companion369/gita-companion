import { r as reactExports } from "./index-CodWPqWB.js";
const STORAGE_KEY = "gita-naam-history";
function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveHistory(history) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
  }
}
function useNaamHistory() {
  const [history, setHistory] = reactExports.useState(loadHistory);
  const addSession = reactExports.useCallback((mantra, reps) => {
    const session = {
      id: `naam-${Date.now()}`,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      mantra,
      reps,
      timestamp: Date.now()
    };
    setHistory((prev) => {
      const updated = [session, ...prev].slice(0, 100);
      saveHistory(updated);
      return updated;
    });
    return session;
  }, []);
  const totalReps = history.reduce((sum, s) => sum + s.reps, 0);
  const completedCycles = Math.floor(totalReps / 108);
  const todaySessions = history.filter(
    (s) => s.date === (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  return { history, addSession, totalReps, completedCycles, todaySessions };
}
export {
  useNaamHistory as u
};
