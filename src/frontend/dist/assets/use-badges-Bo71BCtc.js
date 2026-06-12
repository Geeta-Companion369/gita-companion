import { r as reactExports } from "./index-CodWPqWB.js";
const STORAGE_KEY = "gita-badges";
const AVAILABLE_BADGES = [
  {
    id: "streak-3",
    name: "Devoted Seeker",
    description: "3-day practice streak",
    icon: "🔥",
    type: "streak"
  },
  {
    id: "streak-7",
    name: "Sapta Siddhi",
    description: "7-day practice streak",
    icon: "⭐",
    type: "streak"
  },
  {
    id: "streak-21",
    name: "Vrata Yogi",
    description: "21-day practice streak",
    icon: "🌟",
    type: "streak"
  },
  {
    id: "streak-108",
    name: "Mala Siddha",
    description: "108-day practice streak",
    icon: "🪬",
    type: "streak"
  },
  {
    id: "mala-1",
    name: "First Mala",
    description: "Completed first mala round",
    icon: "📿",
    type: "achievement"
  },
  {
    id: "naam-108",
    name: "Naam Premi",
    description: "Written naam 108 times",
    icon: "✍️",
    type: "achievement"
  },
  {
    id: "read-18",
    name: "Gita Pathak",
    description: "Read all 18 chapters",
    icon: "📖",
    type: "achievement"
  },
  {
    id: "challenge-7",
    name: "Challenge Warrior",
    description: "Completed 7 daily challenges",
    icon: "⚔️",
    type: "challenge"
  }
];
function loadBadges() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveBadges(badges) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(badges));
  } catch {
  }
}
function useBadges() {
  const [badges, setBadgesState] = reactExports.useState(loadBadges);
  const awardBadge = reactExports.useCallback((badgeId) => {
    setBadgesState((prev) => {
      if (prev.some((b) => b.id === badgeId)) return prev;
      const template = AVAILABLE_BADGES.find((b) => b.id === badgeId);
      if (!template) return prev;
      const newBadge = {
        ...template,
        earnedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      };
      const updated = [...prev, newBadge];
      saveBadges(updated);
      return updated;
    });
  }, []);
  const checkAndAwardBadges = reactExports.useCallback(
    (streakCount, malaTotal, naamTotal) => {
      if (streakCount >= 3) awardBadge("streak-3");
      if (streakCount >= 7) awardBadge("streak-7");
      if (streakCount >= 21) awardBadge("streak-21");
      if (streakCount >= 108) awardBadge("streak-108");
      if (malaTotal >= 108) awardBadge("mala-1");
      if (naamTotal >= 108) awardBadge("naam-108");
    },
    [awardBadge]
  );
  const hasBadge = reactExports.useCallback(
    (badgeId) => badges.some((b) => b.id === badgeId),
    [badges]
  );
  const badgesByType = reactExports.useCallback(
    (type) => badges.filter((b) => b.type === type),
    [badges]
  );
  return {
    badges,
    awardBadge,
    checkAndAwardBadges,
    hasBadge,
    badgesByType,
    availableBadges: AVAILABLE_BADGES
  };
}
export {
  useBadges as u
};
