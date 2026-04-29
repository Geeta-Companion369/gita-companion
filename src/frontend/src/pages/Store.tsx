import { usePoints } from "@/hooks/use-points";
import { useUserProfile } from "@/hooks/use-user-profile";
import type { RewardItemType } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

type ExtendedRewardType = RewardItemType | "scripture" | "badge" | "experience";

interface StoreItem {
  id: string;
  name: string;
  description: string;
  type: RewardItemType;
  cost: number;
  gradient: string;
  accentColor: string;
  symbol: string;
}

const WALLPAPERS: StoreItem[] = [
  {
    id: "wp-golden-gita",
    name: "Golden Gita",
    description:
      "Lustrous gold-leaf gradient evoking sacred manuscripts and ancient scripture",
    type: "wallpaper",
    cost: 500,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.25 48) 0%, oklch(0.65 0.28 52) 50%, oklch(0.48 0.22 38) 100%)",
    accentColor: "oklch(0.82 0.22 52)",
    symbol: "📜",
  },
  {
    id: "wp-midnight-krishna",
    name: "Midnight Krishna",
    description:
      "Deep cosmic blue — the eternal colour of the divine, Vishnu's sacred hue",
    type: "wallpaper",
    cost: 500,
    gradient:
      "linear-gradient(145deg, oklch(0.15 0.02 280) 0%, oklch(0.28 0.18 280) 60%, oklch(0.42 0.22 260) 100%)",
    accentColor: "oklch(0.68 0.22 270)",
    symbol: "🌙",
  },
  {
    id: "wp-sunrise-lotus",
    name: "Sunrise Lotus",
    description:
      "Warm amber rising into soft rose — purity and devotion at dawn",
    type: "wallpaper",
    cost: 500,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.2 52) 0%, oklch(0.72 0.18 32) 50%, oklch(0.72 0.14 340) 100%)",
    accentColor: "oklch(0.85 0.12 32)",
    symbol: "🪷",
  },
  {
    id: "wp-sacred-fire",
    name: "Sacred Fire",
    description:
      "The agni of the sacred yagna — transforming, purifying, ever-rising",
    type: "wallpaper",
    cost: 500,
    gradient:
      "linear-gradient(135deg, oklch(0.32 0.18 24) 0%, oklch(0.52 0.25 32) 40%, oklch(0.68 0.22 48) 100%)",
    accentColor: "oklch(0.78 0.22 42)",
    symbol: "🔥",
  },
  {
    id: "wp-celestial-om",
    name: "Celestial Om",
    description:
      "Infinite starfield in sacred purple — the primordial sound of creation",
    type: "wallpaper",
    cost: 500,
    gradient:
      "linear-gradient(145deg, oklch(0.12 0.02 260) 0%, oklch(0.22 0.18 280) 50%, oklch(0.38 0.2 275) 100%)",
    accentColor: "oklch(0.72 0.2 275)",
    symbol: "ॐ",
  },
];

const VOICE_MODES: StoreItem[] = [
  {
    id: "voice-ancient-sage",
    name: "Ancient Sage Voice",
    description:
      "Deep resonant tones — like a Himalayan rishi chanting at dawn",
    type: "voice",
    cost: 300,
    gradient:
      "linear-gradient(135deg, oklch(0.32 0.12 30) 0%, oklch(0.48 0.18 22) 100%)",
    accentColor: "oklch(0.68 0.18 28)",
    symbol: "🧘",
  },
  {
    id: "voice-devotee-female",
    name: "Devotee Female Voice",
    description:
      "Gentle, melodic — the bhakti of a devoted soul in sacred prayer",
    type: "voice",
    cost: 300,
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.2 0) 0%, oklch(0.55 0.18 350) 100%)",
    accentColor: "oklch(0.75 0.15 355)",
    symbol: "🌸",
  },
  {
    id: "voice-chant-mode",
    name: "Chant Mode",
    description:
      "Rhythmic cadence with breath pauses — meditative mantra recitation",
    type: "voice",
    cost: 200,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 220) 0%, oklch(0.48 0.2 200) 100%)",
    accentColor: "oklch(0.68 0.18 210)",
    symbol: "🎵",
  },
];

const MANTRA_PACKS: StoreItem[] = [
  {
    id: "mp-108-names",
    name: "108 Names of Krishna",
    description:
      "Ashtottara — 108 divine names of the Lord, each a meditation unto itself",
    type: "mantra-pack",
    cost: 400,
    gradient:
      "linear-gradient(135deg, oklch(0.28 0.18 270) 0%, oklch(0.45 0.22 260) 100%)",
    accentColor: "oklch(0.65 0.22 265)",
    symbol: "🪈",
  },
  {
    id: "mp-vedic-morning",
    name: "Vedic Morning Pack",
    description:
      "5 sunrise mantras to consecrate your day — Surya, Gayatri, and more",
    type: "mantra-pack",
    cost: 400,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.2 52) 0%, oklch(0.72 0.22 42) 100%)",
    accentColor: "oklch(0.85 0.18 50)",
    symbol: "🌅",
  },
  {
    id: "mp-shiva-pack",
    name: "Shiva Pack",
    description:
      "5 powerful Shiva mantras — Panchakshara, Maha Mrityunjaya, and more",
    type: "mantra-pack",
    cost: 350,
    gradient:
      "linear-gradient(145deg, oklch(0.22 0.18 280) 0%, oklch(0.35 0.22 290) 100%)",
    accentColor: "oklch(0.62 0.18 285)",
    symbol: "🔱",
  },
];

interface ExtendedStoreItem {
  id: string;
  name: string;
  description: string;
  type: ExtendedRewardType;
  cost: number;
  gradient: string;
  accentColor: string;
  symbol: string;
}

const SPECIAL_UNLOCKS: ExtendedStoreItem[] = [
  {
    id: "unlock-vedas",
    name: "Unlock the 4 Vedas",
    description:
      "Rigveda, Samaveda, Yajurveda, Atharvaveda — the eternal fountainhead of Sanatan Dharma. Sanskrit texts, key hymns, and divine knowledge unlocked.",
    type: "scripture",
    cost: 200,
    gradient:
      "linear-gradient(135deg, oklch(0.28 0.18 50) 0%, oklch(0.42 0.22 54) 100%)",
    accentColor: "oklch(0.72 0.28 52)",
    symbol: "📚",
  },
  {
    id: "unlock-puranas",
    name: "Unlock 18 Puranas",
    description:
      "All 18 Maha Puranas — Vishnu Purana, Bhagavata Purana, Shiva Purana, and 15 more. Complete sacred library unlocked in the app.",
    type: "scripture",
    cost: 300,
    gradient:
      "linear-gradient(135deg, oklch(0.35 0.22 268) 0%, oklch(0.48 0.24 275) 100%)",
    accentColor: "oklch(0.65 0.22 270)",
    symbol: "🕉️",
  },
  {
    id: "badge-scholar",
    name: "Dharma Scholar Badge",
    description:
      "A rare exclusive badge displayed on your profile — marks you as a devoted student of the Gita and Sanatan Dharma.",
    type: "badge",
    cost: 150,
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.18 32) 0%, oklch(0.55 0.22 40) 100%)",
    accentColor: "oklch(0.72 0.26 46)",
    symbol: "🏅",
  },
  {
    id: "experience-adfree",
    name: "Ad-Free Experience",
    description:
      "Remove all ad spaces from the app — a pure, uninterrupted sacred experience. Krishna's presence without distraction.",
    type: "experience",
    cost: 500,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.22 150) 0%, oklch(0.45 0.20 155) 100%)",
    accentColor: "oklch(0.65 0.20 150)",
    symbol: "✨",
  },
];

const CATEGORY_TABS = [
  {
    key: "wallpaper" as RewardItemType,
    label: "Wallpapers",
    icon: "🖼️",
    items: WALLPAPERS,
  },
  {
    key: "voice" as RewardItemType,
    label: "Voice Modes",
    icon: "🎙️",
    items: VOICE_MODES,
  },
  {
    key: "mantra-pack" as RewardItemType,
    label: "Mantra Packs",
    icon: "📿",
    items: MANTRA_PACKS,
  },
];

const UNLOCKS_KEY = "gita-store-unlocks";
const ACTIVE_VOICE_KEY = "gita-active-voice";

function loadUnlocks(): string[] {
  try {
    const raw = localStorage.getItem(UNLOCKS_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveUnlocks(ids: string[]): void {
  try {
    localStorage.setItem(UNLOCKS_KEY, JSON.stringify(ids));
  } catch {
    /* silent */
  }
}

function loadActiveVoice(): string {
  return localStorage.getItem(ACTIVE_VOICE_KEY) ?? "";
}

function saveActiveVoice(id: string): void {
  try {
    localStorage.setItem(ACTIVE_VOICE_KEY, id);
  } catch {
    /* silent */
  }
}

// Manuscript scroll listing item
function ScrollEntry({
  item,
  isUnlocked,
  isActive,
  canAfford,
  shortfall,
  onUnlock,
  onSetActive,
}: {
  item: StoreItem;
  isUnlocked: boolean;
  isActive: boolean;
  canAfford: boolean;
  shortfall: number;
  onUnlock: () => void;
  onSetActive: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
      style={{ opacity: !isUnlocked && !canAfford ? 0.65 : 1 }}
      data-ocid={`store-item-${item.id}`}
    >
      <div
        className="flex items-start gap-4 py-4 transition-smooth"
        style={{
          borderBottom: "1px dashed oklch(var(--accent) / 0.22)",
          borderLeft: isActive
            ? "3px solid oklch(var(--accent) / 0.55)"
            : "3px solid transparent",
          paddingLeft: isActive ? "1rem" : "0",
          background: isActive ? "oklch(var(--accent) / 0.05)" : "transparent",
        }}
      >
        {/* Illuminated symbol */}
        <div
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            width: 52,
            height: 52,
            borderRadius: "2px",
            background: item.gradient,
            boxShadow: isActive
              ? `0 2px 12px ${item.accentColor}50, inset 0 1px 0 rgba(255,248,220,0.2)`
              : "0 2px 6px rgba(80,55,30,0.18)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <span
            className="text-2xl leading-none drop-shadow"
            aria-hidden="true"
          >
            {item.symbol}
          </span>
          {isUnlocked && (
            <div
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px]"
              style={{
                background: "oklch(0.52 0.18 44)",
                border: "1px solid oklch(0.40 0.14 38)",
                color: "oklch(0.94 0.06 58)",
              }}
            >
              ✓
            </div>
          )}
        </div>

        {/* Manuscript listing text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p
                className="font-display text-base font-bold italic leading-tight"
                style={{ color: "oklch(var(--foreground))" }}
              >
                {isActive && (
                  <span style={{ color: "oklch(var(--accent))" }}>❯ </span>
                )}
                {item.name}
              </p>
              <p
                className="font-body text-xs italic mt-1 leading-relaxed"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {item.description}
              </p>
            </div>

            {/* Cost + action */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              <span
                className="font-display text-sm font-bold italic"
                style={{
                  color: isUnlocked
                    ? "oklch(var(--accent))"
                    : "oklch(var(--muted-foreground))",
                }}
              >
                {isUnlocked ? "✦ Owned" : `✦ ${item.cost} pts`}
              </span>

              {isUnlocked ? (
                isActive ? (
                  <span
                    className="font-body text-xs italic"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    — active —
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={onSetActive}
                    className="font-body text-xs italic transition-smooth"
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "2px",
                      border: "1px solid oklch(var(--accent) / 0.45)",
                      color: "oklch(var(--accent))",
                      background: "transparent",
                    }}
                    data-ocid={`store-set-active-${item.id}`}
                  >
                    Set Active
                  </button>
                )
              ) : canAfford ? (
                <button
                  type="button"
                  onClick={onUnlock}
                  className="font-body text-xs italic transition-smooth hover:opacity-90"
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "2px",
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.14 36), oklch(0.52 0.20 44))",
                    color: "oklch(0.94 0.06 58)",
                    border: "none",
                  }}
                  data-ocid={`store-unlock-${item.id}`}
                >
                  Unlock
                </button>
              ) : (
                <span
                  className="font-body text-xs italic"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  need {shortfall} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StorePage() {
  const { points, deductPoints } = usePoints();
  const { profile, setProfile } = useUserProfile();
  const [activeTab, setActiveTab] = useState<RewardItemType | "special">(
    "wallpaper",
  );
  const [unlocked, setUnlocked] = useState<string[]>(loadUnlocks);
  const [activeVoice, setActiveVoiceState] = useState<string>(loadActiveVoice);
  const [confirmItem, setConfirmItem] = useState<StoreItem | null>(null);
  const [confirmSpecial, setConfirmSpecial] =
    useState<ExtendedStoreItem | null>(null);

  const currentBalance = points.total;
  const isItemUnlocked = (id: string) => unlocked.includes(id);
  const canAfford = (cost: number) => currentBalance >= cost;

  const handleUnlock = (item: StoreItem) => {
    if (isItemUnlocked(item.id) || !canAfford(item.cost)) return;
    setConfirmItem(item);
  };

  const confirmUnlock = () => {
    if (!confirmItem) return;
    const newUnlocks = [...unlocked, confirmItem.id];
    setUnlocked(newUnlocks);
    saveUnlocks(newUnlocks);
    deductPoints(confirmItem.cost);
    toast.success(`${confirmItem.name} unlocked!`, {
      description: `${confirmItem.cost} points spent.`,
    });
    setConfirmItem(null);
  };

  const handleSetActive = (item: StoreItem) => {
    if (item.type === "wallpaper") {
      setProfile({ selectedWallpaper: item.id });
      toast.success("Wallpaper set!", {
        description: `${item.name} is now active.`,
      });
    } else if (item.type === "voice") {
      setActiveVoiceState(item.id);
      saveActiveVoice(item.id);
      toast.success("Voice activated!", {
        description: `${item.name} is now your reading voice.`,
      });
    } else {
      toast.success("Mantra pack ready!", {
        description: `${item.name} added to your Naam practice.`,
      });
    }
  };

  const activeItems =
    activeTab !== "special"
      ? (CATEGORY_TABS.find((t) => t.key === activeTab)?.items ?? [])
      : [];

  return (
    <div className="max-w-2xl mx-auto pb-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="divider-ornate">
          <span>॥</span>
        </div>
        <p className="text-verse-number mb-1">Sacred Offerings</p>
        <h1
          className="chapter-header"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Reward Store
        </h1>
        <p className="text-translation italic" style={{ fontSize: "0.9rem" }}>
          Your devotion earns rewards. Spend your sacred points to unlock divine
          offerings.
        </p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span
            className="font-display font-bold italic"
            style={{ color: "oklch(var(--accent))", fontSize: "1.5rem" }}
            data-ocid="store-points-balance"
          >
            ✦ {currentBalance}
          </span>
          <span
            className="font-body text-sm italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            sacred points available
          </span>
        </div>
        <div className="divider-ornate mt-4">
          <span>ॐ</span>
        </div>
      </motion.div>

      {/* Category tabs — manuscript section titles */}
      <div
        className="flex gap-1 mb-6"
        role="tablist"
        aria-label="Store categories"
        style={{
          borderBottom: "2px solid oklch(var(--accent) / 0.20)",
          paddingBottom: "0.25rem",
        }}
      >
        {CATEGORY_TABS.map((tab) => (
          <button
            type="button"
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="font-body italic transition-smooth"
            style={{
              padding: "0.5rem 1.1rem",
              borderRadius: "2px 2px 0 0",
              fontSize: "0.85rem",
              color:
                activeTab === tab.key
                  ? "oklch(var(--foreground))"
                  : "oklch(var(--muted-foreground))",
              background:
                activeTab === tab.key
                  ? "oklch(var(--accent) / 0.10)"
                  : "transparent",
              border:
                activeTab === tab.key
                  ? "1px solid oklch(var(--accent) / 0.30)"
                  : "1px solid transparent",
              borderBottom: "none",
              fontWeight: activeTab === tab.key ? 600 : 400,
            }}
            data-ocid={`store-tab-${tab.key}`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
        {/* Special Unlocks tab */}
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "special"}
          onClick={() => setActiveTab("special")}
          className="font-body italic transition-smooth"
          style={{
            padding: "0.5rem 1.1rem",
            borderRadius: "2px 2px 0 0",
            fontSize: "0.85rem",
            color:
              activeTab === "special"
                ? "oklch(var(--foreground))"
                : "oklch(var(--muted-foreground))",
            background:
              activeTab === "special"
                ? "oklch(var(--accent) / 0.10)"
                : "transparent",
            border:
              activeTab === "special"
                ? "1px solid oklch(var(--accent) / 0.30)"
                : "1px solid transparent",
            borderBottom: "none",
            fontWeight: activeTab === "special" ? 600 : 400,
          }}
          data-ocid="store-tab-special"
        >
          <span className="mr-1">🕉️</span>Sacred Unlocks
        </button>
      </div>

      {/* Special Unlocks section */}
      {activeTab === "special" && (
        <motion.div
          key="special"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 mb-6"
        >
          {SPECIAL_UNLOCKS.map((item) => {
            const isOwned = unlocked.includes(item.id);
            const affordable = currentBalance >= item.cost;
            return (
              <div
                key={item.id}
                className="relative overflow-hidden"
                style={{
                  borderRadius: "4px",
                  border: isOwned
                    ? "2px solid oklch(0.55 0.22 150 / 0.55)"
                    : "1.5px solid oklch(0.72 0.20 54 / 0.35)",
                }}
                data-ocid={`store-special-${item.id}`}
              >
                <div
                  className="flex items-start gap-4 p-4"
                  style={{ background: "oklch(0.93 0.06 68 / 0.7)" }}
                >
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded flex items-center justify-center text-2xl"
                    style={{ background: item.gradient }}
                  >
                    {item.symbol}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display text-sm font-bold italic mb-0.5"
                      style={{ color: "oklch(0.22 0.10 32)" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="font-body text-xs italic mb-2 leading-relaxed"
                      style={{ color: "oklch(0.45 0.10 46)" }}
                    >
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span
                        className="font-display text-sm font-bold italic"
                        style={{
                          color: isOwned
                            ? "oklch(0.55 0.22 150)"
                            : item.accentColor,
                        }}
                      >
                        {isOwned ? "✓ Unlocked" : `✦ ${item.cost} pts`}
                      </span>
                      {!isOwned &&
                        (affordable ? (
                          <button
                            type="button"
                            onClick={() => setConfirmSpecial(item)}
                            className="font-body text-xs italic px-4 py-1.5 rounded transition-smooth hover:opacity-90"
                            style={{
                              background: item.gradient,
                              color: "oklch(0.94 0.06 58)",
                            }}
                            data-ocid={`store-special-unlock-${item.id}`}
                          >
                            Unlock Now
                          </button>
                        ) : (
                          <span
                            className="font-body text-xs italic"
                            style={{ color: "oklch(0.58 0.08 50)" }}
                          >
                            Need {item.cost - currentBalance} more pts
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Confirm Special Purchase */}
      <AnimatePresence>
        {confirmSpecial && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "oklch(0.12 0.02 40 / 0.65)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setConfirmSpecial(null)}
            data-ocid="store-special-confirm-overlay"
          >
            <motion.div
              className="w-full max-w-sm overflow-hidden"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "oklch(0.92 0.08 57)",
                border: "2px solid oklch(var(--accent) / 0.35)",
                borderRadius: "4px",
                boxShadow: "0 8px 40px rgba(80,55,30,0.35)",
              }}
            >
              <div
                className="h-20 flex items-center justify-center text-4xl"
                style={{ background: confirmSpecial.gradient }}
              >
                {confirmSpecial.symbol}
              </div>
              <div className="p-5 text-center space-y-3">
                <h3
                  className="font-display text-lg font-bold italic"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  {confirmSpecial.name}
                </h3>
                <p
                  className="font-body text-sm italic"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Spend{" "}
                  <span
                    className="font-bold"
                    style={{ color: confirmSpecial.accentColor }}
                  >
                    {confirmSpecial.cost} points
                  </span>{" "}
                  to unlock?
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setConfirmSpecial(null)}
                    className="flex-1 font-body italic py-2 rounded transition-smooth"
                    style={{
                      border: "1px solid oklch(var(--border))",
                      color: "oklch(var(--muted-foreground))",
                      fontSize: "0.875rem",
                    }}
                    data-ocid="store-special-confirm-cancel"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const newU = [...unlocked, confirmSpecial.id];
                      setUnlocked(newU);
                      saveUnlocks(newU);
                      deductPoints(confirmSpecial.cost);
                      toast.success(`${confirmSpecial.name} unlocked! 🙏`, {
                        description: `${confirmSpecial.cost} sacred points spent.`,
                      });
                      setConfirmSpecial(null);
                    }}
                    className="flex-1 font-body italic py-2 rounded hover:opacity-90 transition-smooth"
                    style={{
                      background: confirmSpecial.gradient,
                      color: "oklch(0.94 0.06 58)",
                      fontSize: "0.875rem",
                    }}
                    data-ocid="store-special-confirm-unlock"
                  >
                    Unlock ✦
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Items list — manuscript scroll entries */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sacred-card"
      >
        {activeItems.map((item) => {
          const unlocked_item = isItemUnlocked(item.id);
          const affordable = canAfford(item.cost);
          const shortfall = item.cost - currentBalance;
          const isActiveWallpaper =
            item.type === "wallpaper" && profile.selectedWallpaper === item.id;
          const isActiveVoice =
            item.type === "voice" && activeVoice === item.id;
          const isActive = isActiveWallpaper || isActiveVoice;

          return (
            <ScrollEntry
              key={item.id}
              item={item}
              isUnlocked={unlocked_item}
              isActive={isActive}
              canAfford={affordable}
              shortfall={shortfall}
              onUnlock={() => handleUnlock(item)}
              onSetActive={() => handleSetActive(item)}
            />
          );
        })}
      </motion.div>

      {/* Earn more points hint */}
      <div
        className="mt-5 text-center py-4 font-body text-xs italic"
        style={{ color: "oklch(var(--muted-foreground))" }}
      >
        Earn points through naam writing, reading chapters, and maintaining your
        daily streak
      </div>

      {/* Confirm Purchase Dialog — manuscript style */}
      <AnimatePresence>
        {confirmItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "oklch(0.12 0.02 40 / 0.65)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setConfirmItem(null)}
            data-ocid="store-confirm-overlay"
          >
            <motion.div
              className="w-full max-w-sm overflow-hidden"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "oklch(0.92 0.08 57)",
                border: "2px solid oklch(var(--accent) / 0.35)",
                borderRadius: "4px",
                boxShadow: "0 8px 40px rgba(80,55,30,0.35)",
              }}
            >
              {/* Symbol preview */}
              <div
                className="h-24 flex items-center justify-center"
                style={{ background: confirmItem.gradient }}
              >
                <span className="text-5xl drop-shadow-lg" aria-hidden="true">
                  {confirmItem.symbol}
                </span>
              </div>

              <div className="p-5 space-y-4">
                <div className="divider-ornate">
                  <span>✦</span>
                </div>
                <div className="text-center">
                  <h3
                    className="font-display text-lg font-bold italic"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    Confirm Sacred Exchange
                  </h3>
                  <p
                    className="font-body text-sm italic mt-1"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Spend{" "}
                    <span
                      className="font-bold"
                      style={{ color: confirmItem.accentColor }}
                    >
                      {confirmItem.cost} points
                    </span>{" "}
                    to unlock{" "}
                    <span
                      style={{
                        color: "oklch(var(--foreground))",
                        fontWeight: 600,
                      }}
                    >
                      {confirmItem.name}
                    </span>
                    ?
                  </p>
                  <p
                    className="font-body text-xs italic mt-1"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Balance after: {currentBalance - confirmItem.cost} pts
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setConfirmItem(null)}
                    className="flex-1 font-body italic transition-smooth"
                    style={{
                      padding: "0.65rem",
                      borderRadius: "2px",
                      border: "1px solid oklch(var(--border))",
                      color: "oklch(var(--muted-foreground))",
                      background: "transparent",
                      fontSize: "0.875rem",
                    }}
                    data-ocid="store-confirm-cancel"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={confirmUnlock}
                    className="flex-1 font-body italic transition-smooth hover:opacity-90"
                    style={{
                      padding: "0.65rem",
                      borderRadius: "2px",
                      background:
                        "linear-gradient(135deg, oklch(0.42 0.14 36), oklch(0.54 0.22 44))",
                      color: "oklch(0.94 0.06 58)",
                      border: "none",
                      fontSize: "0.875rem",
                    }}
                    data-ocid="store-confirm-unlock"
                  >
                    Unlock Now ✦
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
