import { r as reactExports } from "./index-CodWPqWB.js";
const STORAGE_KEY = "gita_last_read";
function loadPosition() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function savePosition(pos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
  } catch {
  }
}
function useLastRead() {
  const [lastRead, setLastRead] = reactExports.useState(
    loadPosition
  );
  reactExports.useEffect(() => {
    if (lastRead) savePosition(lastRead);
  }, [lastRead]);
  const setPosition = (pos) => {
    setLastRead(pos);
  };
  return { lastRead, setPosition };
}
export {
  useLastRead as u
};
