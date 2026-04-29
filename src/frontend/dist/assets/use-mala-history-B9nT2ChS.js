import { r as reactExports } from "./index-vCKiyWhq.js";
const STORAGE_KEY = "gita-mala-history";
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
function useMalaHistory() {
  const [history, setHistory] = reactExports.useState(loadHistory);
  const addSession = reactExports.useCallback((beadCount, mantra) => {
    const session = {
      id: `mala-${Date.now()}`,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      beadCount,
      mantra,
      timestamp: Date.now()
    };
    setHistory((prev) => {
      const updated = [session, ...prev].slice(0, 100);
      saveHistory(updated);
      return updated;
    });
    return session;
  }, []);
  const totalBeads = history.reduce((sum, s) => sum + s.beadCount, 0);
  const todaySessions = history.filter(
    (s) => s.date === (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  return { history, addSession, totalBeads, todaySessions };
}
export {
  useMalaHistory as u
};
