import { r as reactExports } from "./index-vCKiyWhq.js";
const STORAGE_KEY = "gita-points";
function loadPoints() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw)
      return {
        total: 0,
        fromWriting: 0,
        fromReading: 0,
        fromListening: 0,
        fromStreak: 0
      };
    return JSON.parse(raw);
  } catch {
    return {
      total: 0,
      fromWriting: 0,
      fromReading: 0,
      fromListening: 0,
      fromStreak: 0
    };
  }
}
function savePoints(points) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
  } catch {
  }
}
function usePoints() {
  const [points, setPointsState] = reactExports.useState(loadPoints);
  const addPoints = reactExports.useCallback((category, amount) => {
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
  const deductPoints = reactExports.useCallback((amount) => {
    setPointsState((prev) => {
      const updated = { ...prev, total: Math.max(0, prev.total - amount) };
      savePoints(updated);
      return updated;
    });
  }, []);
  return { points, addPoints, deductPoints };
}
export {
  usePoints as u
};
