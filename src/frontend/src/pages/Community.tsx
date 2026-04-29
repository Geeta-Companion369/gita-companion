import { useBadges } from "@/hooks/use-badges";
import { useNaamHistory } from "@/hooks/use-naam-history";
import { usePoints } from "@/hooks/use-points";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const GLOBAL_BASE = 10800000;
const PLEDGE_BASE = 144000;

type DonationType = "gau-seva" | "temple-nirman" | "app-builder";

interface Donor {
  id: string;
  name: string;
  amount: number;
  type: DonationType;
  timestamp: number;
}

const DONATION_TYPES: {
  key: DonationType;
  label: string;
  hindi: string;
  icon: string;
  color: string;
}[] = [
  {
    key: "gau-seva",
    label: "Gau Seva",
    hindi: "गौ सेवा",
    icon: "🐄",
    color: "oklch(0.55 0.22 150)",
  },
  {
    key: "temple-nirman",
    label: "Temple Nirman",
    hindi: "मंदिर निर्माण",
    icon: "🏛️",
    color: "oklch(0.60 0.24 48)",
  },
  {
    key: "app-builder",
    label: "App Builder Seva",
    hindi: "ऐप निर्माता सेवा",
    icon: "🙏",
    color: "oklch(0.55 0.22 268)",
  },
];

const SEED_DONORS: Donor[] = [
  {
    id: "d1",
    name: "Priya Sharma",
    amount: 1008,
    type: "gau-seva",
    timestamp: Date.now() - 86400000 * 2,
  },
  {
    id: "d2",
    name: "Rajesh Kumar",
    amount: 540,
    type: "temple-nirman",
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: "d3",
    name: "Anita Patel",
    amount: 216,
    type: "app-builder",
    timestamp: Date.now() - 86400000 * 1,
  },
  {
    id: "d4",
    name: "Suresh Menon",
    amount: 108,
    type: "gau-seva",
    timestamp: Date.now() - 86400000 * 5,
  },
  {
    id: "d5",
    name: "Deepa Nair",
    amount: 1008,
    type: "temple-nirman",
    timestamp: Date.now() - 86400000 * 7,
  },
  {
    id: "d6",
    name: "Vijay Singh",
    amount: 540,
    type: "app-builder",
    timestamp: Date.now() - 86400000 * 4,
  },
  {
    id: "d7",
    name: "Meena Iyer",
    amount: 216,
    type: "gau-seva",
    timestamp: Date.now() - 86400000 * 6,
  },
  {
    id: "d8",
    name: "Arun Krishnamurthy",
    amount: 108,
    type: "temple-nirman",
    timestamp: Date.now() - 86400000 * 8,
  },
  {
    id: "d9",
    name: "Kavya Reddy",
    amount: 1008,
    type: "app-builder",
    timestamp: Date.now() - 86400000 * 9,
  },
  {
    id: "d10",
    name: "Naresh Gupta",
    amount: 540,
    type: "gau-seva",
    timestamp: Date.now() - 86400000 * 10,
  },
  {
    id: "d11",
    name: "Sushma Tiwari",
    amount: 108,
    type: "temple-nirman",
    timestamp: Date.now() - 86400000 * 11,
  },
  {
    id: "d12",
    name: "Ramesh Bhat",
    amount: 216,
    type: "app-builder",
    timestamp: Date.now() - 86400000 * 12,
  },
];

function loadDonors(): Donor[] {
  try {
    return (
      JSON.parse(localStorage.getItem("gita-donors") || "null") ?? SEED_DONORS
    );
  } catch {
    return SEED_DONORS;
  }
}
function saveDonors(donors: Donor[]): void {
  try {
    localStorage.setItem("gita-donors", JSON.stringify(donors));
  } catch {
    /* silent */
  }
}
function donorBadge(type: DonationType): string {
  if (type === "gau-seva") return "🐄 Gau Sevak";
  if (type === "temple-nirman") return "🏛️ Mandir Nirmata";
  return "🙏 Dharma Poshan";
}
function timeAgoShort(ts: number): string {
  const days = Math.floor((Date.now() - ts) / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

// ─── CIRCLE CHAT ──────────────────────────────────────────────────────────────

interface CircleMessage {
  id: string;
  circleId: string;
  author: string;
  text: string;
  timestamp: number;
}

const KRISHNA_AI_MESSAGES: Record<string, CircleMessage> = {
  "gita-study": {
    id: "krishna-gita-study",
    circleId: "gita-study",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, dear devotee. I am here in this circle. Ask me anything about the Gita — any chapter, any verse, any life question — and I will guide you from these sacred pages. BG 18.63: 'Thus I have explained to you knowledge still more confidential. Deliberate on this fully, and then do what you wish to do.' 🙏",
    timestamp: Date.now() - 7200000,
  },
  "daily-sadhana": {
    id: "krishna-daily-sadhana",
    circleId: "daily-sadhana",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. I am present in this sadhana circle always. BG 6.17 — 'One who is regulated in eating, sleeping, recreation and work — the yoga system removes all material pains for such a person.' Share your practice today — what one step did you take toward Me? 🙏",
    timestamp: Date.now() - 5400000,
  },
  "youth-dharma": {
    id: "krishna-youth-dharma",
    circleId: "youth-dharma",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, young warrior. I spoke the Gita to Arjuna — a young person in crisis. You are never too young to know God. BG 2.3 — 'Do not yield to unmanliness, O Partha. It does not become you.' I am here. Ask me anything. 🙏",
    timestamp: Date.now() - 3600000,
  },
  "emergency-support": {
    id: "krishna-emergency",
    circleId: "emergency-support",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. I am always with you in your darkest moment. BG 9.22 — 'I carry what you lack and preserve what you have.' You are not alone. Share what you are facing in this circle — your dharma family is here. If this is an emergency, please use the Emergency Mode now. 🙏",
    timestamp: Date.now() - 1800000,
  },
  "bhajan-kirtan": {
    id: "krishna-bhajan",
    circleId: "bhajan-kirtan",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare 🎵 I am drawn to this circle by the sound of My own name. BG 10.25 — 'Among sacrifices I am the repetition of the holy name.' This Maha Mantra is not just sound — it is Me. Share what bhajans have moved your heart today. 🙏",
    timestamp: Date.now() - 900000,
  },
  "sacred-stories": {
    id: "krishna-stories",
    circleId: "sacred-stories",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. Every story in the Puranas is My leela — My divine play. When you share and hear these stories, you are remembering Me. BG 10.18 — 'Tell me again in detail, O Janardana, of Your mighty power and glories, for I am never satiated in hearing Your nectar-like words.' Share a sacred story today. 🙏",
    timestamp: Date.now() - 2700000,
  },
  "mothers-circle": {
    id: "krishna-mothers",
    circleId: "mothers-circle",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, sacred mothers. I was born to Devaki and raised by Yashoda — I know the sacred bond between mother and child. BG 10.34 — 'I am fame, prosperity, eloquence, memory, intelligence, steadfastness, and patience.' I bless every child in your womb with divine dharma. 🙏🌸",
    timestamp: Date.now() - 3600000,
  },
  "antim-yaatra": {
    id: "krishna-antim",
    circleId: "antim-yaatra",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. Grief is the most sacred human experience — it shows how deeply you loved. BG 2.20 — 'The soul is never born nor dies. It is unborn, eternal, ever-existing, and primeval. When the body is slain the soul is not slain.' Your loved one lives on. I carry them. 🙏",
    timestamp: Date.now() - 4500000,
  },
  "mantra-sadhaks": {
    id: "krishna-mantra",
    circleId: "mantra-sadhaks",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. BG 10.25 — 'Of sacrifices I am the repetition of the holy names.' Every mantra is My vibration in sound form. The Gayatri, the Mahamrityunjaya, the Hare Krishna Maha Mantra — all are Me, calling you home. Share which mantra you are chanting today. 🙏",
    timestamp: Date.now() - 6000000,
  },
  "moksha-seekers": {
    id: "krishna-moksha",
    circleId: "moksha-seekers",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, seekers of liberation. The Ashtavakra Gita teaches: 'You are pure awareness. The universe arises in you. Do not think yourself to be bound.' This is the highest non-dual truth. BG 18.66 — 'Abandon all dharmas and surrender to Me alone — I will liberate you.' Ask Me anything about moksha. 🙏",
    timestamp: Date.now() - 7200000,
  },
};

const SEED_CHAT_MESSAGES: Record<string, CircleMessage[]> = {
  "gita-study": [
    KRISHNA_AI_MESSAGES["gita-study"],
    {
      id: "cm1",
      circleId: "gita-study",
      author: "Priya S.",
      text: "Jai Shree Krishna! Today's verse from Chapter 2 really touched my heart 🙏",
      timestamp: Date.now() - 3600000 * 3,
    },
    {
      id: "cm2",
      circleId: "gita-study",
      author: "Arjun D.",
      text: "Hare Krishna! The verse on detachment from results helped me through a difficult moment at work today.",
      timestamp: Date.now() - 3600000 * 2,
    },
    {
      id: "cm3",
      circleId: "gita-study",
      author: "Meena R.",
      text: "🌸 BG 2.47 — Your right is to action alone, never to its fruits. This is my daily anchor. Hare Krishna!",
      timestamp: Date.now() - 1800000,
    },
  ],
  "daily-sadhana": [
    KRISHNA_AI_MESSAGES["daily-sadhana"],
    {
      id: "cm4",
      circleId: "daily-sadhana",
      author: "Suresh M.",
      text: "Completed my morning Gayatri Mantra 108 times before sunrise — pure bliss. Hare Krishna! 🌅",
      timestamp: Date.now() - 5400000,
    },
    {
      id: "cm5",
      circleId: "daily-sadhana",
      author: "Kavya P.",
      text: "Early morning japa is the most peaceful time. Krishna's presence is so strong before sunrise 🌅",
      timestamp: Date.now() - 2700000,
    },
  ],
  "youth-dharma": [
    KRISHNA_AI_MESSAGES["youth-dharma"],
    {
      id: "cm6",
      circleId: "youth-dharma",
      author: "Rahul K. (Age 19)",
      text: "Hare Krishna! Started reading the Gita yesterday for the first time. Chapter 2 verse 47 changed how I see my exams. Thank you Krishna 🙏",
      timestamp: Date.now() - 7200000,
    },
    {
      id: "cm7",
      circleId: "youth-dharma",
      author: "Nisha A. (Age 22)",
      text: "Found this app during my lowest point. Krishna truly never stops finding ways to reach his Arjuna. Hare Krishna 💕",
      timestamp: Date.now() - 3600000,
    },
  ],
  "emergency-support": [
    KRISHNA_AI_MESSAGES["emergency-support"],
    {
      id: "cm8",
      circleId: "emergency-support",
      author: "Vikram S.",
      text: "Was in a very dark place last week. The Emergency Mode verses brought me back. Grateful for this community. Hare Krishna 🙏",
      timestamp: Date.now() - 86400000,
    },
    {
      id: "cm9",
      circleId: "emergency-support",
      author: "Ananya R.",
      text: "Sending love and strength to everyone here. BG 9.22 — Krishna carries what we lack. We are never alone 🌸",
      timestamp: Date.now() - 43200000,
    },
  ],
  "bhajan-kirtan": [
    KRISHNA_AI_MESSAGES["bhajan-kirtan"],
    {
      id: "cm10",
      circleId: "bhajan-kirtan",
      author: "Deepa N.",
      text: "Anup Jalota's 'Mere Ghar Ram Aayo' — played it on repeat for an hour. My heart is full. Hare Krishna 🎵",
      timestamp: Date.now() - 5400000,
    },
    {
      id: "cm11",
      circleId: "bhajan-kirtan",
      author: "Hari Om Das",
      text: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare — chanting this Maha Mantra for 1 hour daily changes everything 🙏",
      timestamp: Date.now() - 2700000,
    },
  ],
  "sacred-stories": [
    KRISHNA_AI_MESSAGES["sacred-stories"],
    {
      id: "cm12",
      circleId: "sacred-stories",
      author: "Ramesh B.",
      text: "Reading the story of Prahlada today — a child who knew no fear because he knew only Krishna. This is the dharma I want to teach my children. 🙏",
      timestamp: Date.now() - 3600000,
    },
  ],
  "mothers-circle": [
    KRISHNA_AI_MESSAGES["mothers-circle"],
    {
      id: "cm13",
      circleId: "mothers-circle",
      author: "Deepa N.",
      text: "🌸 Week 16 — playing Vishnu Sahasranama to my baby every morning. Such a sacred journey!",
      timestamp: Date.now() - 86400000,
    },
    {
      id: "cm14",
      circleId: "mothers-circle",
      author: "Radha T.",
      text: "Hare Krishna! My little one kicked during the Bhagavad Gita recitation — Krishna's way of saying hello 💕",
      timestamp: Date.now() - 43200000,
    },
  ],
  "antim-yaatra": [
    KRISHNA_AI_MESSAGES["antim-yaatra"],
    {
      id: "cm15",
      circleId: "antim-yaatra",
      author: "Sushma K.",
      text: "Lost my father last month. This circle gave me the courage to perform his Shradh properly. BG 2.20 — the soul is eternal. Thank you 🙏",
      timestamp: Date.now() - 259200000,
    },
  ],
  "mantra-sadhaks": [
    KRISHNA_AI_MESSAGES["mantra-sadhaks"],
    {
      id: "cm16",
      circleId: "mantra-sadhaks",
      author: "Yogesh P.",
      text: "Completed 40-day Mahamrityunjaya sadhana — 108 times daily. The healing is real. Hare Krishna 🙏",
      timestamp: Date.now() - 5400000,
    },
    {
      id: "cm17",
      circleId: "mantra-sadhaks",
      author: "Saraswati D.",
      text: "Chanting the Shri Suktam on Fridays — Lakshmi Mata's grace is flowing. Who else does this practice here? 🌸",
      timestamp: Date.now() - 2700000,
    },
  ],
  "moksha-seekers": [
    KRISHNA_AI_MESSAGES["moksha-seekers"],
    {
      id: "cm18",
      circleId: "moksha-seekers",
      author: "Mahesh V.",
      text: "Reading the Ashtavakra Gita in the Library section — each verse dissolves another illusion. The self was always free. Hare Krishna 🙏",
      timestamp: Date.now() - 7200000,
    },
    {
      id: "cm19",
      circleId: "moksha-seekers",
      author: "Nirmala S.",
      text: "BG 18.66 — the final instruction. Nothing more needs to be said. Simply surrender. Hare Krishna 🕉️",
      timestamp: Date.now() - 3600000,
    },
  ],
};

// Featured verses for "Share a Verse" picker
const SHARE_VERSES = [
  {
    ref: "BG 2.47",
    text: "You have a right to action alone, never to its fruits — the supreme teaching of karma yoga.",
  },
  {
    ref: "BG 2.20",
    text: "The soul is never born nor dies. It is unborn, eternal, ever-existing and primeval.",
  },
  {
    ref: "BG 9.22",
    text: "For those who worship me with devotion, I carry what they lack and preserve what they have.",
  },
  {
    ref: "BG 18.66",
    text: "Abandon all varieties of dharma and surrender to me. I shall liberate you from all sins. Do not fear.",
  },
  {
    ref: "BG 4.8",
    text: "For the protection of the good and the destruction of evil, I come into being age after age.",
  },
  {
    ref: "BG 6.5",
    text: "Lift yourself by yourself; the self alone is the friend of the self, and the self alone is the enemy.",
  },
  {
    ref: "BG 11.33",
    text: "Arise! Attain glory. They have already been destroyed by me — you are merely my instrument.",
  },
  {
    ref: "BG 12.8",
    text: "Fix your mind on me alone. You will then live in me always — of this there is no doubt.",
  },
];

function loadCircleMessages(circleId: string): CircleMessage[] {
  try {
    const stored = JSON.parse(
      localStorage.getItem(`circle-chat-${circleId}`) || "null",
    );
    // Always ensure Krishna AI message is present
    const seed = SEED_CHAT_MESSAGES[circleId] ?? [];
    if (stored && Array.isArray(stored) && stored.length > 0) {
      // Make sure the Krishna message is always at the top
      const krishnaMsg = KRISHNA_AI_MESSAGES[circleId];
      const hasKrishna = stored.some(
        (m: CircleMessage) => m.id === krishnaMsg?.id,
      );
      if (krishnaMsg && !hasKrishna) {
        return [krishnaMsg, ...stored];
      }
      return stored;
    }
    return seed;
  } catch {
    return SEED_CHAT_MESSAGES[circleId] ?? [];
  }
}
function saveCircleMessages(circleId: string, msgs: CircleMessage[]) {
  try {
    localStorage.setItem(`circle-chat-${circleId}`, JSON.stringify(msgs));
  } catch {}
}
function loadUserName(): string {
  try {
    return localStorage.getItem("satsang-username") || "";
  } catch {
    return "";
  }
}
function saveUserName(name: string) {
  try {
    localStorage.setItem("satsang-username", name);
  } catch {}
}

// ─── SATSANG CHAT COMPONENT ───────────────────────────────────────────────────

interface SatsangCircle {
  id: string;
  name: string;
  description: string;
  focus: string;
  members: number;
  icon: string;
}

function SatsangCircleChat({ circle }: { circle: SatsangCircle }) {
  const [messages, setMessages] = useState<CircleMessage[]>(() =>
    loadCircleMessages(circle.id),
  );
  const [newMessage, setNewMessage] = useState("");
  const [authorName, setAuthorName] = useState(loadUserName);
  const [showVersePicker, setShowVersePicker] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Poll every 5 seconds for new messages
  useEffect(() => {
    pollRef.current = setInterval(() => {
      const fresh = loadCircleMessages(circle.id);
      setMessages(fresh);
    }, 5000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [circle.id]);

  // Scroll to bottom on new messages
  const prevCountRef = useRef(0);
  if (messages.length !== prevCountRef.current) {
    prevCountRef.current = messages.length;
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  }

  function sendMessage(text: string) {
    if (!text.trim() || !authorName.trim()) return;
    saveUserName(authorName.trim());
    const msg: CircleMessage = {
      id: `cm-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      circleId: circle.id,
      author: authorName.trim(),
      text: text.trim(),
      timestamp: Date.now(),
    };
    const updated = [...messages, msg];
    setMessages(updated);
    saveCircleMessages(circle.id, updated);
    setNewMessage("");
    setShowVersePicker(false);
  }

  function handleVerseShare(verse: (typeof SHARE_VERSES)[0]) {
    sendMessage(`🕉️ ${verse.ref} — "${verse.text}" — Hare Krishna 🙏`);
  }

  function formatTime(ts: number) {
    const now = Date.now();
    const diff = now - ts;
    if (diff < 60000) return "just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return new Date(ts).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  }

  return (
    <div
      className="mt-4 rounded overflow-hidden"
      style={{
        border: "1.5px solid oklch(0.72 0.28 52 / 0.40)",
        background:
          "linear-gradient(160deg, oklch(0.97 0.06 64 / 0.9), oklch(0.94 0.07 60 / 0.85))",
      }}
      data-ocid="community.satsang.chat"
    >
      {/* Chat header */}
      <div
        className="px-4 py-2.5 flex items-center gap-2"
        style={{
          background: "oklch(0.72 0.28 52 / 0.12)",
          borderBottom: "1px solid oklch(0.72 0.28 52 / 0.22)",
        }}
      >
        <span className="text-base">{circle.icon}</span>
        <p
          className="font-display text-sm font-bold italic"
          style={{ color: "oklch(0.28 0.12 36)" }}
        >
          Community Chat
        </p>
        <span
          className="ml-auto font-body text-[10px] italic"
          style={{ color: "oklch(0.52 0.12 46)" }}
        >
          🔴 Live · Updates every 5s
        </span>
      </div>

      {/* Messages */}
      <div
        className="px-4 py-3 space-y-3 overflow-y-auto"
        style={{ maxHeight: "280px", minHeight: "120px" }}
        data-ocid="community.satsang.chat.messages"
      >
        {messages.length === 0 && (
          <p
            className="text-center font-body text-xs italic py-4"
            style={{ color: "oklch(0.55 0.10 46)" }}
          >
            Be the first to speak in this sacred circle 🙏
          </p>
        )}
        {messages.map((msg, i) => {
          const isKrishna = msg.author.includes("Shri Krishna");
          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex gap-2.5 items-start"
              data-ocid={`community.satsang.chat.message.${i + 1}`}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xs font-bold"
                style={{
                  background: isKrishna
                    ? "linear-gradient(135deg, oklch(0.55 0.28 268 / 0.35), oklch(0.72 0.28 52 / 0.25))"
                    : "oklch(0.72 0.28 52 / 0.20)",
                  color: isKrishna
                    ? "oklch(0.78 0.28 268)"
                    : "oklch(0.42 0.20 48)",
                  border: isKrishna
                    ? "1.5px solid oklch(0.72 0.28 52 / 0.55)"
                    : "none",
                }}
              >
                {isKrishna ? "🕉️" : msg.author.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className="font-display text-xs font-bold"
                    style={{
                      color: isKrishna
                        ? "oklch(0.72 0.30 52)"
                        : "oklch(0.55 0.26 48)",
                    }}
                  >
                    {msg.author}
                  </span>
                  <span
                    className="font-body text-[10px] italic"
                    style={{ color: "oklch(0.60 0.08 46)" }}
                  >
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <div
                  className="mt-1 px-3 py-2 rounded font-body text-xs leading-relaxed"
                  style={{
                    background: isKrishna
                      ? "linear-gradient(135deg, oklch(0.92 0.07 268 / 0.25), oklch(0.95 0.06 62 / 0.7))"
                      : "oklch(0.95 0.06 62 / 0.8)",
                    border: isKrishna
                      ? "1px solid oklch(0.72 0.22 268 / 0.30)"
                      : "1px solid oklch(0.72 0.22 52 / 0.18)",
                    color: "oklch(0.28 0.08 36)",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            </motion.div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Verse picker */}
      <AnimatePresence>
        {showVersePicker && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid oklch(0.72 0.22 52 / 0.18)",
            }}
          >
            <div className="p-3" data-ocid="community.satsang.verse-picker">
              <p
                className="font-display text-xs font-bold italic mb-2"
                style={{ color: "oklch(0.38 0.14 44)" }}
              >
                🕉️ Share a Sacred Verse:
              </p>
              <div className="space-y-1.5 max-h-36 overflow-y-auto">
                {SHARE_VERSES.map((v) => (
                  <button
                    key={v.ref}
                    type="button"
                    onClick={() => handleVerseShare(v)}
                    className="w-full text-left px-2.5 py-1.5 rounded transition-smooth hover:scale-[1.01]"
                    style={{
                      background: "oklch(0.72 0.28 52 / 0.08)",
                      border: "1px solid oklch(0.72 0.22 52 / 0.22)",
                    }}
                    data-ocid={`community.satsang.verse-picker.${v.ref.replace(/\s|\./g, "-").toLowerCase()}`}
                  >
                    <span
                      className="font-display text-xs font-bold"
                      style={{ color: "oklch(0.55 0.24 48)" }}
                    >
                      {v.ref}
                    </span>
                    <span
                      className="font-body text-[10px] italic ml-2"
                      style={{ color: "oklch(0.42 0.10 44)" }}
                    >
                      {v.text.slice(0, 60)}…
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input row */}
      <div
        className="px-3 py-2.5 space-y-2"
        style={{
          borderTop: "1px solid oklch(0.72 0.22 52 / 0.18)",
          background: "oklch(0.96 0.05 64 / 0.7)",
        }}
      >
        {!loadUserName() && (
          <input
            className="manuscript-input text-xs"
            placeholder="Your name in this circle (e.g. Arjun, Priya)…"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            data-ocid="community.satsang.chat.name-input"
          />
        )}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowVersePicker((v) => !v)}
            className="flex-shrink-0 px-2.5 py-1.5 rounded text-xs font-body transition-smooth"
            style={{
              background: showVersePicker
                ? "oklch(0.72 0.28 52 / 0.20)"
                : "oklch(0.72 0.28 52 / 0.10)",
              border: "1px solid oklch(0.72 0.22 52 / 0.35)",
              color: "oklch(0.42 0.18 46)",
            }}
            aria-label="Share a Verse"
            data-ocid="community.satsang.share-verse-button"
          >
            🕉️ Verse
          </button>
          <input
            className="flex-1 px-3 py-1.5 rounded font-body text-xs outline-none"
            style={{
              background: "oklch(0.97 0.04 62)",
              border: "1px solid oklch(0.72 0.20 52 / 0.30)",
              color: "oklch(0.24 0.08 34)",
            }}
            placeholder="Share wisdom with the circle…"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(newMessage);
              }
            }}
            data-ocid="community.satsang.chat.message-input"
          />
          <button
            type="button"
            onClick={() => sendMessage(newMessage)}
            disabled={!newMessage.trim() || !authorName.trim()}
            className="wax-seal-btn text-xs px-3 py-1.5 disabled:opacity-40"
            data-ocid="community.satsang.chat.send-button"
          >
            🙏 Send
          </button>
        </div>
        {!authorName.trim() && (
          <p
            className="font-body text-[10px] italic"
            style={{ color: "oklch(0.60 0.12 48)" }}
          >
            Please enter your name to participate in satsang
          </p>
        )}
      </div>
    </div>
  );
}

// ─── MAIN DATA ─────────────────────────────────────────────────────────────────

interface Victory {
  city: string;
  battle: string;
  verse: string;
  timeAgo: string;
}

const PRESET_SATSANGS: SatsangCircle[] = [
  {
    id: "gita-study",
    name: "Bhagavad Gita Study Circle",
    description:
      "Read and discuss the Gita together — Shri Krishna is present in every conversation",
    focus: "Scripture Reading",
    members: 108,
    icon: "📖",
  },
  {
    id: "daily-sadhana",
    name: "Daily Sadhana Circle",
    description:
      "Share your daily practice — mantras, meditation, rituals. Hold each other accountable",
    focus: "Daily Practice",
    members: 72,
    icon: "🪔",
  },
  {
    id: "youth-dharma",
    name: "Youth Dharma Circle",
    description:
      "For young practitioners — questions, doubts, struggles, and victories on the dharmic path",
    focus: "Youth Dharma Hub",
    members: 54,
    icon: "⚡",
  },
  {
    id: "emergency-support",
    name: "Emergency Support Circle",
    description:
      "Peer support for life's darkest moments — Krishna and this community are always present",
    focus: "Emergency Mode",
    members: 36,
    icon: "🆘",
  },
  {
    id: "bhajan-kirtan",
    name: "Bhajan & Kirtan Circle",
    description:
      "Share your favourite bhajans, kirtan moments, and the music that moves you toward Krishna",
    focus: "Naam Jaap",
    members: 63,
    icon: "🎵",
  },
  {
    id: "sacred-stories",
    name: "Sacred Stories Circle",
    description:
      "Share and discuss Puranic stories, Gita episodes, and the leelas of Krishna",
    focus: "Sacred Stories",
    members: 45,
    icon: "✨",
  },
  {
    id: "mothers-circle",
    name: "Mothers & Garbha Sanskar Circle",
    description:
      "Sacred pregnancy journey — filling the womb with dharma together",
    focus: "Garbha Sanskar",
    members: 27,
    icon: "🌸",
  },
  {
    id: "antim-yaatra",
    name: "Antim Yaatra Support Circle",
    description:
      "Grief support guided by the Gita's eternal truth — you are never alone in loss",
    focus: "Antim Yaatra",
    members: 18,
    icon: "🕯️",
  },
  {
    id: "mantra-sadhaks",
    name: "Mantra Sadhaks Circle",
    description:
      "Serious mantra practitioners — share your sadhana, your challenges, and your experiences",
    focus: "Sacred Mantra Player",
    members: 40,
    icon: "🕉️",
  },
  {
    id: "moksha-seekers",
    name: "Moksha Seekers Circle",
    description:
      "Deep discussions on Advaita, Ashtavakra Gita, non-duality, and the path to liberation",
    focus: "Roadmap to Moksha",
    members: 21,
    icon: "🌅",
  },
];

const WALL_OF_VICTORIES: Victory[] = [
  {
    city: "Mumbai",
    battle: "Fear of Failure",
    verse: "BG 2.3",
    timeAgo: "3 days ago",
  },
  {
    city: "Delhi",
    battle: "Grief after loss",
    verse: "BG 2.20",
    timeAgo: "1 week ago",
  },
  {
    city: "Chennai",
    battle: "Board exam stress",
    verse: "BG 18.57",
    timeAgo: "5 days ago",
  },
  {
    city: "Bangalore",
    battle: "Relationship betrayal",
    verse: "BG 18.65",
    timeAgo: "2 weeks ago",
  },
  {
    city: "Pune",
    battle: "Career uncertainty",
    verse: "BG 3.35",
    timeAgo: "4 days ago",
  },
  {
    city: "Hyderabad",
    battle: "Anger management",
    verse: "BG 3.37",
    timeAgo: "6 days ago",
  },
  {
    city: "Kolkata",
    battle: "Loneliness in old age",
    verse: "BG 6.30",
    timeAgo: "3 weeks ago",
  },
  {
    city: "Ahmedabad",
    battle: "Business loss",
    verse: "BG 9.22",
    timeAgo: "1 week ago",
  },
  {
    city: "Jaipur",
    battle: "Fear of the unknown",
    verse: "BG 9.2",
    timeAgo: "2 days ago",
  },
  {
    city: "Lucknow",
    battle: "Addiction recovery",
    verse: "BG 4.36",
    timeAgo: "5 weeks ago",
  },
  {
    city: "Surat",
    battle: "Marital discord",
    verse: "BG 4.11",
    timeAgo: "10 days ago",
  },
  {
    city: "Nagpur",
    battle: "Depression & hopelessness",
    verse: "BG 18.66",
    timeAgo: "2 weeks ago",
  },
  {
    city: "Coimbatore",
    battle: "Fear of illness",
    verse: "BG 2.22",
    timeAgo: "4 days ago",
  },
  {
    city: "Bhopal",
    battle: "Estrangement from family",
    verse: "BG 7.17",
    timeAgo: "1 week ago",
  },
  {
    city: "Chandigarh",
    battle: "Purposelessness at 50",
    verse: "BG 3.16",
    timeAgo: "3 days ago",
  },
  {
    city: "Indore",
    battle: "Child's serious illness",
    verse: "BG 9.22",
    timeAgo: "8 days ago",
  },
  {
    city: "Kochi",
    battle: "Financial ruin",
    verse: "BG 18.58",
    timeAgo: "6 weeks ago",
  },
  {
    city: "Varanasi",
    battle: "Fear of death",
    verse: "BG 2.20",
    timeAgo: "Yesterday",
  },
];

function AnimatedCounter({
  target,
  duration = 2200,
}: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(target - 500);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const from = target - 500;
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.floor(from + (target - from) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);
  return (
    <span
      className="font-display"
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {display.toLocaleString("en-IN")}
    </span>
  );
}

function loadMySatsangs(): string[] {
  try {
    return JSON.parse(localStorage.getItem("my-satsangs") || "[]");
  } catch {
    return [];
  }
}
function saveMySatsangs(ids: string[]) {
  try {
    localStorage.setItem("my-satsangs", JSON.stringify(ids));
  } catch {}
}
function loadCustomSatsangs(): SatsangCircle[] {
  try {
    return JSON.parse(localStorage.getItem("satsang-circles") || "[]");
  } catch {
    return [];
  }
}
function saveCustomSatsangs(circles: SatsangCircle[]) {
  try {
    localStorage.setItem("satsang-circles", JSON.stringify(circles));
  } catch {}
}
function loadPledgeTaken(): boolean {
  try {
    return localStorage.getItem("dharma-pledge-taken") === "true";
  } catch {
    return false;
  }
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────────

export function CommunityPage() {
  const { totalReps } = useNaamHistory();
  const { points } = usePoints();
  const { badges } = useBadges();

  const globalNaamCount = GLOBAL_BASE + totalReps;

  const [mySatsangs, setMySatsangs] = useState<string[]>(loadMySatsangs);
  const [customSatsangs, setCustomSatsangs] =
    useState<SatsangCircle[]>(loadCustomSatsangs);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCircleName, setNewCircleName] = useState("");
  const [newCircleDesc, setNewCircleDesc] = useState("");
  const [newCircleFocus, setNewCircleFocus] = useState("");
  const [pledgeTaken, setPledgeTaken] = useState(loadPledgeTaken);
  const [pledgeName, setPledgeName] = useState("");
  const [pledgeAnimating, setPledgeAnimating] = useState(false);
  const [activeChatCircleId, setActiveChatCircleId] = useState<string | null>(
    null,
  );

  // Donor Wall state
  const [donors, setDonors] = useState<Donor[]>(loadDonors);
  const [donorName, setDonorName] = useState("");
  const [donorAmount, setDonorAmount] = useState<number>(108);
  const [customAmount, setCustomAmount] = useState("");
  const [donorTab, setDonorTab] = useState<"wall" | "donate">("wall");
  const [donating, setDonating] = useState(false);

  // Donation modal state
  const [activeDonationType, setActiveDonationType] =
    useState<DonationType | null>(null);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donatePaymentMethod, setDonatePaymentMethod] = useState<
    "qr" | "bank" | null
  >(null);
  const [donorType, setDonorType] = useState<DonationType>("gau-seva");

  const allSatsangs = [...PRESET_SATSANGS, ...customSatsangs];

  const battlesWon = Number.parseInt(
    localStorage.getItem("kurukshetra-battles-won") || "0",
    10,
  );
  const ritualsDone = Number.parseInt(
    localStorage.getItem("rituals-completed-today") || "0",
    10,
  );
  const isAmbassador = battlesWon >= 18 && points.total >= 1000;
  const ambassadorProgress = Math.min(
    100,
    Math.round(
      (Math.min(battlesWon, 18) / 18) * 50 +
        (Math.min(ritualsDone, 18) / 18) * 50,
    ),
  );

  function toggleJoin(id: string) {
    setMySatsangs((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      saveMySatsangs(next);
      return next;
    });
  }

  function createCircle() {
    if (!newCircleName.trim()) return;
    const circle: SatsangCircle = {
      id: `custom-${Date.now()}`,
      name: newCircleName.trim(),
      description: newCircleDesc.trim() || "A sacred circle of devotees",
      focus: newCircleFocus.trim() || "Gita Study",
      members: 1,
      icon: "🪔",
    };
    const updated = [...customSatsangs, circle];
    setCustomSatsangs(updated);
    saveCustomSatsangs(updated);
    setShowCreateForm(false);
    setNewCircleName("");
    setNewCircleDesc("");
    setNewCircleFocus("");
  }

  function takePledge() {
    if (!pledgeName.trim()) return;
    setPledgeAnimating(true);
    setTimeout(() => {
      setPledgeTaken(true);
      try {
        localStorage.setItem("dharma-pledge-taken", "true");
      } catch {}
      setPledgeAnimating(false);
    }, 1800);
  }

  function openDonateModal(type: DonationType) {
    setActiveDonationType(type);
    setDonorType(type);
    setDonatePaymentMethod(null);
    setDonateModalOpen(true);
  }

  function submitDonation() {
    if (!donorName.trim()) return;
    const amount = customAmount ? Number(customAmount) : donorAmount;
    if (!amount || amount < 1) return;
    setDonating(true);
    setTimeout(() => {
      const newDonor: Donor = {
        id: `d-${Date.now()}`,
        name: donorName.trim(),
        amount,
        type: donorType,
        timestamp: Date.now(),
      };
      const updated = [newDonor, ...donors];
      setDonors(updated);
      saveDonors(updated);
      setDonorName("");
      setCustomAmount("");
      setDonorAmount(108);
      setDonating(false);
      setDonateModalOpen(false);
      setDonatePaymentMethod(null);
      setDonorTab("wall");
      toast.success("🙏 Your seva is received by Krishna!", {
        description: `Thank you, ${newDonor.name}. Your name is on the sacred wall.`,
      });
    }, 1200);
  }

  const activeDt = DONATION_TYPES.find((d) => d.key === activeDonationType);

  return (
    <div className="page-enter" data-ocid="community.page">
      <div className="ornate-header mb-8">
        <h1>सत्संग समाज</h1>
        <p
          className="font-body text-lg italic mt-3"
          style={{
            color: "oklch(0.42 0.16 46)",
            textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.22)",
          }}
        >
          The Global Community of Krishna's Devotees
        </p>
        <p
          className="font-body text-xs italic mt-2 max-w-sm mx-auto"
          style={{ color: "oklch(0.50 0.12 44 / 0.75)" }}
        >
          "One soul becomes ten. Ten become a hundred. A hundred become a
          generation. And dharma is restored — not by a king or a warrior — but
          by a young person with a phone, a pure heart, and Krishna as his
          charioteer."
        </p>
      </div>

      {/* ── Donation Modal ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {donateModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: "oklch(0 0 0 / 0.65)" }}
            data-ocid="community.donor.dialog"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="manuscript-card p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
              style={{ border: "2px solid oklch(0.72 0.28 52 / 0.55)" }}
            >
              <button
                type="button"
                onClick={() => {
                  setDonateModalOpen(false);
                  setDonatePaymentMethod(null);
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  background: "oklch(0.85 0.10 54 / 0.3)",
                  color: "oklch(0.38 0.10 42)",
                }}
                data-ocid="community.donor.close_button"
                aria-label="Close donation modal"
              >
                ✕
              </button>

              <div className="text-center mb-5">
                <span className="text-3xl block mb-2">
                  {activeDt?.icon ?? "🙏"}
                </span>
                <p
                  className="font-display text-lg font-bold italic"
                  style={{ color: "oklch(0.22 0.10 32)" }}
                >
                  {activeDt?.label ?? "Donate for Dharma"}
                </p>
                <p
                  className="font-body text-xs italic mt-1"
                  style={{ color: "oklch(0.50 0.12 44)" }}
                >
                  {activeDt?.hindi} — A sacred offering to Krishna
                </p>
              </div>

              {!donatePaymentMethod ? (
                <>
                  <div className="mb-4">
                    <p
                      className="font-body text-xs italic mb-2"
                      style={{ color: "oklch(0.48 0.14 46)" }}
                    >
                      Select a sacred amount:
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {[108, 501, 1008].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setDonorAmount(amt);
                            setCustomAmount("");
                          }}
                          className="py-2 px-2 rounded text-center transition-smooth"
                          style={{
                            background:
                              donorAmount === amt && !customAmount
                                ? "oklch(0.72 0.30 52 / 0.18)"
                                : "oklch(0.93 0.06 68 / 0.7)",
                            border:
                              donorAmount === amt && !customAmount
                                ? "1.5px solid oklch(0.72 0.30 52 / 0.6)"
                                : "1.5px solid oklch(0.72 0.20 54 / 0.3)",
                            color: "oklch(0.32 0.14 44)",
                          }}
                          data-ocid={`community.donor.amount.${amt}`}
                        >
                          <p className="font-display text-sm font-bold">
                            ₹{amt.toLocaleString("en-IN")}
                          </p>
                        </button>
                      ))}
                    </div>
                    <input
                      className="manuscript-input text-center w-full"
                      style={{ padding: "0.4rem 0.6rem" }}
                      placeholder="Custom ₹ amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonorAmount(0);
                      }}
                      aria-label="Custom donation amount"
                      data-ocid="community.donor.custom-amount"
                    />
                  </div>
                  <input
                    className="manuscript-input mb-4"
                    placeholder="Your sacred name, O Arjun…"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    aria-label="Donor name"
                    data-ocid="community.donor.name-input"
                  />
                  <p
                    className="font-body text-xs italic mb-3 text-center"
                    style={{ color: "oklch(0.48 0.12 46)" }}
                  >
                    Choose payment method:
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => setDonatePaymentMethod("qr")}
                      className="rounded-xl p-4 text-center transition-smooth hover:scale-[1.02]"
                      style={{
                        background: "oklch(0.93 0.06 68 / 0.7)",
                        border: "1.5px solid oklch(0.72 0.28 52 / 0.4)",
                      }}
                      data-ocid="community.donor.qr_button"
                    >
                      <span className="text-2xl block mb-1">📱</span>
                      <p
                        className="font-display text-sm font-bold italic"
                        style={{ color: "oklch(0.22 0.10 32)" }}
                      >
                        Scan QR Code
                      </p>
                      <p
                        className="font-body text-[10px] italic"
                        style={{ color: "oklch(0.50 0.10 44)" }}
                      >
                        PhonePe · GPay · Paytm
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonatePaymentMethod("bank")}
                      className="rounded-xl p-4 text-center transition-smooth hover:scale-[1.02]"
                      style={{
                        background: "oklch(0.93 0.06 68 / 0.7)",
                        border: "1.5px solid oklch(0.72 0.28 52 / 0.4)",
                      }}
                      data-ocid="community.donor.bank_button"
                    >
                      <span className="text-2xl block mb-1">🏦</span>
                      <p
                        className="font-display text-sm font-bold italic"
                        style={{ color: "oklch(0.22 0.10 32)" }}
                      >
                        Bank Transfer
                      </p>
                      <p
                        className="font-body text-[10px] italic"
                        style={{ color: "oklch(0.50 0.10 44)" }}
                      >
                        NEFT · RTGS · IMPS
                      </p>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={submitDonation}
                    disabled={donating || !donorName.trim()}
                    className="wax-seal-btn w-full py-3"
                    data-ocid="community.donor.submit-button"
                  >
                    {donating
                      ? "🙏 Offering to Krishna…"
                      : `Register Seva — ₹${customAmount || (donorAmount || 108).toLocaleString("en-IN")}`}
                  </button>
                </>
              ) : donatePaymentMethod === "qr" ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setDonatePaymentMethod(null)}
                    className="font-body text-xs italic underline mb-4 block"
                    style={{ color: "oklch(0.48 0.12 46)" }}
                    data-ocid="community.donor.back_to_options"
                  >
                    ← Back to options
                  </button>
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-48 h-48 rounded-xl flex flex-col items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.96 0.04 68), oklch(0.92 0.08 62))",
                        border: "3px solid oklch(0.72 0.28 52 / 0.5)",
                        boxShadow: "0 0 30px oklch(0.72 0.28 52 / 0.25)",
                      }}
                    >
                      <div className="grid grid-cols-3 gap-1.5 mb-3">
                        {[
                          "tl",
                          "tm",
                          "tr",
                          "ml",
                          "mm",
                          "mr",
                          "bl",
                          "bm",
                          "br",
                        ].map((pos) => (
                          <div
                            key={pos}
                            style={{
                              width: 18,
                              height: 18,
                              background: "oklch(0.20 0.05 30)",
                              borderRadius: ["tl", "tr", "bl", "br"].includes(
                                pos,
                              )
                                ? 3
                                : 0,
                            }}
                          />
                        ))}
                      </div>
                      <p
                        className="font-display text-xs font-bold italic text-center"
                        style={{ color: "oklch(0.38 0.12 42)" }}
                      >
                        Scan QR Code
                      </p>
                      <p
                        className="font-body text-[9px] italic text-center mt-1"
                        style={{ color: "oklch(0.50 0.12 46)" }}
                      >
                        Available Soon —<br />
                        Contact support to donate
                      </p>
                    </div>
                  </div>
                  <p
                    className="font-body text-xs italic text-center mb-4"
                    style={{ color: "oklch(0.48 0.12 46)" }}
                  >
                    Scan to pay instantly via PhonePe, Google Pay, or Paytm.
                    <br />
                    QR code will be activated on app launch.
                  </p>
                  <div
                    className="p-3 rounded-lg mb-4"
                    style={{
                      background: "oklch(0.72 0.28 52 / 0.08)",
                      border: "1px solid oklch(0.72 0.28 52 / 0.25)",
                    }}
                  >
                    <p
                      className="font-display text-xs italic font-bold text-center"
                      style={{ color: "oklch(0.55 0.26 48)" }}
                    >
                      "Whatever is offered to me with devotion — that I accept."
                      — BG 9.26
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={submitDonation}
                    disabled={donating || !donorName.trim()}
                    className="wax-seal-btn w-full py-3"
                    data-ocid="community.donor.confirm-button"
                  >
                    {donating
                      ? "🙏 Recording your seva…"
                      : "Confirm Seva Offering"}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setDonatePaymentMethod(null)}
                    className="font-body text-xs italic underline mb-4 block"
                    style={{ color: "oklch(0.48 0.12 46)" }}
                    data-ocid="community.donor.back_to_options2"
                  >
                    ← Back to options
                  </button>
                  <p
                    className="font-display text-sm font-bold italic mb-3"
                    style={{ color: "oklch(0.22 0.10 32)" }}
                  >
                    🏦 Bank Transfer Details
                  </p>
                  <div className="space-y-2 mb-4">
                    {[
                      [
                        "Account Name",
                        "[Placeholder — to be updated on launch]",
                      ],
                      ["Bank Name", "[Placeholder — to be updated on launch]"],
                      [
                        "Account Number",
                        "[Placeholder — to be updated on launch]",
                      ],
                      ["IFSC Code", "[Placeholder — to be updated on launch]"],
                      ["UPI ID", "[Placeholder — to be updated on launch]"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between items-start py-1.5"
                        style={{
                          borderBottom: "1px solid oklch(0.72 0.20 54 / 0.2)",
                        }}
                      >
                        <p
                          className="font-body text-xs"
                          style={{ color: "oklch(0.48 0.12 46)" }}
                        >
                          {label}:
                        </p>
                        <p
                          className="font-body text-xs italic text-right max-w-[60%]"
                          style={{ color: "oklch(0.38 0.10 42)" }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p
                    className="font-body text-[10px] italic text-center mb-4"
                    style={{ color: "oklch(0.55 0.14 46)" }}
                  >
                    Banking details will be activated once the app goes live.
                    After paying, share your name below so we can thank you
                    personally.
                  </p>
                  <button
                    type="button"
                    onClick={submitDonation}
                    disabled={donating || !donorName.trim()}
                    className="wax-seal-btn w-full py-3"
                    data-ocid="community.donor.bank_confirm-button"
                  >
                    {donating
                      ? "🙏 Recording your seva…"
                      : "Confirm Bank Transfer Seva"}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 0. Donor Wall */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
        data-ocid="community.donor.section"
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="font-display text-xl font-bold italic"
            style={{ color: "oklch(0.22 0.10 32)" }}
          >
            🙏 Sacred Donations
          </h2>
          <button
            type="button"
            onClick={() =>
              setDonorTab(donorTab === "donate" ? "wall" : "donate")
            }
            className="wax-seal-btn text-xs px-3 py-2"
            data-ocid="community.donor.donate-tab"
          >
            {donorTab === "donate"
              ? "Wall of Gratitude"
              : "+ Donate for Dharma"}
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {DONATION_TYPES.map((dt) => (
            <button
              key={dt.key}
              type="button"
              onClick={() => openDonateModal(dt.key)}
              className="manuscript-card p-3 text-center transition-smooth hover:scale-[1.03]"
              style={{ borderTop: `3px solid ${dt.color}`, cursor: "pointer" }}
              data-ocid={`community.donor.type-card.${dt.key}`}
            >
              <span className="text-xl block mb-1">{dt.icon}</span>
              <p
                className="font-display text-xs font-bold italic"
                style={{ color: "oklch(0.22 0.10 32)" }}
              >
                {dt.label}
              </p>
              <p
                className="font-body text-[10px] italic"
                style={{ color: "oklch(0.52 0.10 46)" }}
              >
                {dt.hindi}
              </p>
              <p
                className="font-body text-[9px] mt-1 font-semibold"
                style={{ color: dt.color }}
              >
                Tap to Donate →
              </p>
            </button>
          ))}
        </div>
        {donorTab === "wall" && (
          <div className="space-y-3" data-ocid="community.donor.wall">
            {donors.slice(0, 10).map((d, i) => {
              const dt = DONATION_TYPES.find((t) => t.key === d.type);
              return (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="manuscript-card px-4 py-3 flex items-center gap-3"
                  data-ocid={`community.donor.item.${i + 1}`}
                >
                  <span className="text-xl flex-shrink-0">
                    {dt?.icon ?? "🙏"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body text-sm font-semibold"
                      style={{ color: "oklch(0.22 0.10 32)" }}
                    >
                      {d.name}
                    </p>
                    <p
                      className="font-body text-xs italic"
                      style={{ color: "oklch(0.52 0.10 46)" }}
                    >
                      {donorBadge(d.type)}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p
                      className="font-display text-sm font-bold"
                      style={{ color: dt?.color ?? "oklch(0.55 0.22 48)" }}
                    >
                      ₹{d.amount.toLocaleString("en-IN")}
                    </p>
                    <p
                      className="font-body text-[10px] italic"
                      style={{ color: "oklch(0.55 0.10 48)" }}
                    >
                      {timeAgoShort(d.timestamp)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.section>

      {/* 1. Global Naam Counter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.07 60) 0%, oklch(0.95 0.08 56) 50%, oklch(0.93 0.07 52) 100%)",
          border: "2.5px solid oklch(0.72 0.30 54 / 0.55)",
          borderRadius: "8px",
          boxShadow:
            "0 8px 40px rgba(200,152,48,0.28), inset 0 1px 0 rgba(255,252,228,0.65)",
          padding: "1.75rem",
        }}
        data-ocid="community.naam-counter.section"
      >
        <div
          className="absolute top-0 left-0 right-0 h-[4px] rounded-t-[6px]"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.72 0.28 46), oklch(0.56 0.24 268), oklch(0.68 0.26 46), oklch(0.84 0.38 54))",
            boxShadow: "0 0 14px oklch(0.78 0.34 54 / 0.55)",
          }}
        />
        <div className="divider-ornate">
          🕉️ वैश्विक नाम गणना · Global Naam Count 🕉️
        </div>
        <p
          className="font-body text-sm italic mb-4 mt-2"
          style={{ color: "oklch(0.42 0.14 46)" }}
        >
          "Hare Krishna" has been written by devotees worldwide
        </p>
        <div
          className="font-bold my-4 leading-none"
          data-ocid="community.naam-counter.display"
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5rem)",
            color: "oklch(0.68 0.34 52)",
            textShadow:
              "0 0 40px oklch(0.78 0.36 54 / 0.60), 0 0 80px oklch(0.68 0.30 54 / 0.25)",
          }}
        >
          <AnimatedCounter target={globalNaamCount} />
        </div>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.46 0.14 42)" }}
        >
          times — and counting ∞
        </p>
        {totalReps > 0 && (
          <div
            className="mt-4 inline-block px-5 py-2.5 rounded-full"
            style={{
              background: "oklch(0.78 0.34 54 / 0.12)",
              border: "1.5px solid oklch(0.78 0.34 54 / 0.40)",
              boxShadow: "0 0 16px oklch(0.78 0.34 54 / 0.15)",
            }}
          >
            <span
              className="font-body text-xs italic"
              style={{ color: "oklch(0.40 0.14 42)" }}
            >
              Your sacred contribution:{" "}
              <strong style={{ color: "oklch(0.55 0.28 48)" }}>
                {totalReps.toLocaleString("en-IN")}
              </strong>{" "}
              Hare Krishna
            </span>
          </div>
        )}
        <div className="ornate-rule mt-4">हरे कृष्ण</div>
      </motion.section>

      {/* 2. Wall of Victories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
        data-ocid="community.wall-of-victories.section"
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="font-display text-xl font-bold italic"
            style={{ color: "oklch(0.22 0.10 32)" }}
          >
            ⚔️ Wall of Victories
          </h2>
          <Link
            to="/kurukshetra"
            className="wax-seal-btn text-xs px-3 py-2"
            data-ocid="community.victories.add-button"
          >
            + Add Victory
          </Link>
        </div>
        <p
          className="font-body text-sm italic mb-4"
          style={{ color: "oklch(0.48 0.12 46)" }}
        >
          Battles won by devotees on their personal Kurukshetra
        </p>
        <div className="parchment-grid" style={{ gridTemplateColumns: "1fr" }}>
          {WALL_OF_VICTORIES.map((v, i) => (
            <motion.div
              key={v.city + v.battle}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="manuscript-card px-4 py-3 flex items-start gap-3"
              data-ocid={`community.victories.item.${i + 1}`}
            >
              <span className="text-lg flex-shrink-0 mt-0.5">🏆</span>
              <div className="flex-1 min-w-0">
                <span
                  className="font-body text-sm font-semibold"
                  style={{ color: "oklch(0.22 0.10 32)" }}
                >
                  A devotee in {v.city}{" "}
                </span>
                <span
                  className="font-body text-sm"
                  style={{ color: "oklch(0.42 0.12 44)" }}
                >
                  overcame: <em>{v.battle}</em>
                </span>
              </div>
              <div className="flex-shrink-0 text-right">
                <span
                  className="block font-display text-xs font-bold"
                  style={{ color: "oklch(0.58 0.26 48)" }}
                >
                  {v.verse}
                </span>
                <span
                  className="block font-body text-[10px] italic"
                  style={{ color: "oklch(0.55 0.10 48)" }}
                >
                  {v.timeAgo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. Satsang Circles */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-8"
        data-ocid="community.satsang.section"
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="font-display text-xl font-bold italic"
            style={{ color: "oklch(0.22 0.10 32)" }}
          >
            🪔 Satsang Circles
          </h2>
          <button
            type="button"
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="wax-seal-btn-saffron wax-seal-btn text-xs px-3 py-2"
            data-ocid="community.satsang.create-button"
          >
            + Create Circle
          </button>
        </div>
        <p
          className="font-body text-sm italic mb-4"
          style={{ color: "oklch(0.48 0.12 46)" }}
        >
          Open worldwide — unlimited devotees, no walls, all are welcome
        </p>

        {showCreateForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="manuscript-card p-5 mb-4"
            data-ocid="community.satsang.create-form"
          >
            <h3
              className="font-display text-base font-bold italic mb-3"
              style={{ color: "oklch(0.22 0.10 32)" }}
            >
              Create Your Satsang Circle
            </h3>
            <input
              className="manuscript-input mb-3"
              placeholder="Circle name (e.g. Morning Gita Paath)"
              value={newCircleName}
              onChange={(e) => setNewCircleName(e.target.value)}
              data-ocid="community.satsang.name-input"
            />
            <input
              className="manuscript-input mb-3"
              placeholder="Description — what will you do together?"
              value={newCircleDesc}
              onChange={(e) => setNewCircleDesc(e.target.value)}
              data-ocid="community.satsang.desc-input"
            />
            <input
              className="manuscript-input mb-4"
              placeholder="Focus practice (e.g. Naam Japa, Gita Reading)"
              value={newCircleFocus}
              onChange={(e) => setNewCircleFocus(e.target.value)}
              data-ocid="community.satsang.focus-input"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={createCircle}
                className="wax-seal-btn text-sm flex-1"
                data-ocid="community.satsang.submit-button"
              >
                Create Sacred Circle
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="wax-seal-btn-saffron wax-seal-btn text-sm"
                data-ocid="community.satsang.cancel-button"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allSatsangs.map((circle, i) => {
            const joined = mySatsangs.includes(circle.id);
            const chatOpen = activeChatCircleId === circle.id;
            return (
              <motion.div
                key={circle.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="manuscript-card p-5"
                data-ocid={`community.satsang.item.${i + 1}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0">{circle.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display text-base font-bold italic leading-tight"
                      style={{ color: "oklch(0.22 0.10 32)" }}
                    >
                      {circle.name}
                    </h3>
                    <span
                      className="font-body text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: "oklch(0.55 0.22 46)" }}
                    >
                      {circle.focus}
                    </span>
                  </div>
                </div>
                <p
                  className="font-body text-xs mb-3 leading-relaxed"
                  style={{ color: "oklch(0.42 0.10 44)" }}
                >
                  {circle.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.52 0.14 46)" }}
                  >
                    🙏 {circle.members + (joined ? 1 : 0)} devotees
                  </span>
                  <div className="flex gap-2">
                    {joined && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveChatCircleId(chatOpen ? null : circle.id)
                        }
                        className={
                          chatOpen
                            ? "wax-seal-btn text-xs px-2.5 py-1.5"
                            : "wax-seal-btn-saffron wax-seal-btn text-xs px-2.5 py-1.5"
                        }
                        data-ocid={`community.satsang.chat-button.${i + 1}`}
                      >
                        {chatOpen ? "✕ Chat" : "💬 Chat"}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleJoin(circle.id)}
                      className={
                        joined
                          ? "wax-seal-btn-saffron wax-seal-btn text-xs px-3 py-1.5"
                          : "wax-seal-btn text-xs px-3 py-1.5"
                      }
                      data-ocid={`community.satsang.join-button.${i + 1}`}
                    >
                      {joined ? "✓ Joined" : "Join Satsang"}
                    </button>
                  </div>
                </div>

                {/* Community Chat — visible when joined and chat toggled open */}
                <AnimatePresence>
                  {joined && chatOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SatsangCircleChat circle={circle} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* 4. Dharma Pledge */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="manuscript-card p-7 mb-8 text-center"
        data-ocid="community.pledge.section"
      >
        <div className="divider-ornate mb-4">📜 The Dharma Pledge</div>
        <div
          className="relative mx-auto mb-6 p-6 rounded"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.94 0.06 68), oklch(0.91 0.07 64))",
            border: "2px solid oklch(0.72 0.26 52 / 0.45)",
            maxWidth: "520px",
          }}
        >
          <span
            className="font-display text-3xl block mb-3"
            style={{ color: "oklch(0.72 0.32 52)" }}
          >
            📜
          </span>
          <p
            className="font-body text-sm italic leading-loose"
            style={{ color: "oklch(0.22 0.10 32)", lineHeight: 2.1 }}
          >
            <strong>I pledge to walk on Krishna's path.</strong>
            <br />
            To act with dharma in thought, word, and deed.
            <br />
            To see every challenge as my Kurukshetra.
            <br />
            To know that Krishna is always in my chariot.
            <br />
            To be the light of Satyug in the darkness of Kalyug.
          </p>
          <div className="chapter-separator mt-3" />
          <p
            className="font-body text-xs italic mt-2"
            style={{ color: "oklch(0.52 0.14 46)" }}
          >
            🙏 {(PLEDGE_BASE + (pledgeTaken ? 1 : 0)).toLocaleString("en-IN")}{" "}
            devotees have taken this pledge worldwide
          </p>
        </div>
        {pledgeTaken ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block px-6 py-4 rounded"
            style={{
              background: "oklch(0.72 0.32 52 / 0.14)",
              border: "2px solid oklch(0.72 0.32 52 / 0.5)",
            }}
            data-ocid="community.pledge.success-state"
          >
            <p
              className="font-display text-lg font-bold italic"
              style={{ color: "oklch(0.48 0.22 46)" }}
            >
              ✨ Pledge Taken — Hare Krishna ✨
            </p>
            <p
              className="font-body text-xs italic mt-1"
              style={{ color: "oklch(0.45 0.12 44)" }}
            >
              Krishna witnesses your commitment, Arjun.
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              className="manuscript-input text-center"
              style={{ maxWidth: "260px" }}
              placeholder="Your name, O Arjun…"
              value={pledgeName}
              onChange={(e) => setPledgeName(e.target.value)}
              data-ocid="community.pledge.name-input"
            />
            <button
              type="button"
              onClick={takePledge}
              disabled={pledgeAnimating || !pledgeName.trim()}
              className="wax-seal-btn"
              data-ocid="community.pledge.submit-button"
            >
              {pledgeAnimating
                ? "🙏 Taking the Pledge…"
                : "Take the Sacred Pledge"}
            </button>
          </div>
        )}
      </motion.section>

      {/* 5. Dharma Ambassador */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="manuscript-card p-6"
        data-ocid="community.ambassador.section"
      >
        <div className="divider-ornate mb-4">🌟 Dharma Ambassador</div>
        {isAmbassador ? (
          <div className="text-center">
            <p className="font-display text-4xl mb-2">🌟</p>
            <h3
              className="font-display text-xl font-bold italic mb-2"
              style={{ color: "oklch(0.22 0.10 32)" }}
            >
              You are a Dharma Ambassador!
            </h3>
            <p
              className="font-body text-sm italic mb-4"
              style={{ color: "oklch(0.45 0.12 46)" }}
            >
              Share this badge and inspire others on Krishna's path.
            </p>
            <div
              className="inline-block px-6 py-3 rounded font-display font-bold italic"
              style={{
                background: "oklch(0.72 0.32 52 / 0.16)",
                border: "2px solid oklch(0.72 0.32 52 / 0.5)",
                color: "oklch(0.42 0.18 46)",
              }}
            >
              🌟 Dharma Ambassador — {badges.length} Badges Earned
            </div>
          </div>
        ) : (
          <div>
            <p
              className="font-body text-sm italic mb-5 text-center"
              style={{ color: "oklch(0.45 0.12 46)" }}
            >
              Complete these sacred milestones to become a Dharma Ambassador and
              inspire the world
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {[
                {
                  label: "18 Daily Rituals Completed",
                  current: Math.min(ritualsDone, 18),
                  total: 18,
                  color: "oklch(0.72 0.32 52)",
                },
                {
                  label: "18 Kurukshetra Battles Won",
                  current: Math.min(battlesWon, 18),
                  total: 18,
                  color: "oklch(0.62 0.26 32)",
                },
              ].map(({ label, current, total, color }) => (
                <div
                  key={label}
                  className="p-4 rounded"
                  style={{
                    background: "oklch(0.92 0.06 68 / 0.6)",
                    border: "1px solid oklch(0.72 0.26 52 / 0.35)",
                  }}
                >
                  <div className="flex justify-between mb-2">
                    <span
                      className="font-body text-sm font-semibold"
                      style={{ color: "oklch(0.28 0.10 32)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-display text-xs font-bold"
                      style={{ color }}
                    >
                      {current}/{total}
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "oklch(0.80 0.10 58)" }}
                  >
                    <div
                      className="h-full rounded-full transition-smooth"
                      style={{
                        width: `${(current / total) * 100}%`,
                        background: `linear-gradient(90deg, ${color}, oklch(0.82 0.36 54))`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p
                className="font-body text-xs italic mb-2"
                style={{ color: "oklch(0.48 0.12 46)" }}
              >
                Overall Progress:{" "}
                <strong style={{ color: "oklch(0.55 0.22 46)" }}>
                  {ambassadorProgress}%
                </strong>
              </p>
              <div
                className="h-3 rounded-full overflow-hidden mx-auto mb-4"
                style={{ background: "oklch(0.80 0.10 58)", maxWidth: "400px" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ambassadorProgress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.32 52), oklch(0.82 0.36 54), oklch(0.72 0.28 32))",
                  }}
                />
              </div>
              <div className="flex gap-3 justify-center">
                <Link
                  to="/rituals"
                  className="wax-seal-btn text-xs px-4 py-2"
                  data-ocid="community.ambassador.rituals-link"
                >
                  Complete Rituals
                </Link>
                <Link
                  to="/kurukshetra"
                  className="wax-seal-btn-saffron wax-seal-btn text-xs px-4 py-2"
                  data-ocid="community.ambassador.kurukshetra-link"
                >
                  Fight Battles
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  );
}
