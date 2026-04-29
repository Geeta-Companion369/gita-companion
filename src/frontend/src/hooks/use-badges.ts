import type { Badge, BadgeType } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-badges";

const AVAILABLE_BADGES: Omit<Badge, "earnedDate">[] = [
  {
    id: "streak-3",
    name: "Devoted Seeker",
    description: "3-day practice streak",
    icon: "🔥",
    type: "streak",
  },
  {
    id: "streak-7",
    name: "Sapta Siddhi",
    description: "7-day practice streak",
    icon: "⭐",
    type: "streak",
  },
  {
    id: "streak-21",
    name: "Vrata Yogi",
    description: "21-day practice streak",
    icon: "🌟",
    type: "streak",
  },
  {
    id: "streak-108",
    name: "Mala Siddha",
    description: "108-day practice streak",
    icon: "🪬",
    type: "streak",
  },
  {
    id: "mala-1",
    name: "First Mala",
    description: "Completed first mala round",
    icon: "📿",
    type: "achievement",
  },
  {
    id: "naam-108",
    name: "Naam Premi",
    description: "Written naam 108 times",
    icon: "✍️",
    type: "achievement",
  },
  {
    id: "read-18",
    name: "Gita Pathak",
    description: "Read all 18 chapters",
    icon: "📖",
    type: "achievement",
  },
  {
    id: "challenge-7",
    name: "Challenge Warrior",
    description: "Completed 7 daily challenges",
    icon: "⚔️",
    type: "challenge",
  },
];

function loadBadges(): Badge[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Badge[]) : [];
  } catch {
    return [];
  }
}

function saveBadges(badges: Badge[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(badges));
  } catch {
    // silently fail
  }
}

export function useBadges() {
  const [badges, setBadgesState] = useState<Badge[]>(loadBadges);

  const awardBadge = useCallback((badgeId: string) => {
    setBadgesState((prev) => {
      if (prev.some((b) => b.id === badgeId)) return prev;
      const template = AVAILABLE_BADGES.find((b) => b.id === badgeId);
      if (!template) return prev;
      const newBadge: Badge = {
        ...template,
        earnedDate: new Date().toISOString().split("T")[0],
      };
      const updated = [...prev, newBadge];
      saveBadges(updated);
      return updated;
    });
  }, []);

  const checkAndAwardBadges = useCallback(
    (streakCount: number, malaTotal: number, naamTotal: number) => {
      if (streakCount >= 3) awardBadge("streak-3");
      if (streakCount >= 7) awardBadge("streak-7");
      if (streakCount >= 21) awardBadge("streak-21");
      if (streakCount >= 108) awardBadge("streak-108");
      if (malaTotal >= 108) awardBadge("mala-1");
      if (naamTotal >= 108) awardBadge("naam-108");
    },
    [awardBadge],
  );

  const hasBadge = useCallback(
    (badgeId: string) => badges.some((b) => b.id === badgeId),
    [badges],
  );

  const badgesByType = useCallback(
    (type: BadgeType) => badges.filter((b) => b.type === type),
    [badges],
  );

  return {
    badges,
    awardBadge,
    checkAndAwardBadges,
    hasBadge,
    badgesByType,
    availableBadges: AVAILABLE_BADGES,
  };
}
