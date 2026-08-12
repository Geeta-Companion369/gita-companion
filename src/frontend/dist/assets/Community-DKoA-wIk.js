import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, d as Link, h as ue } from "./index-DqMoqjqS.js";
import { u as useBadges } from "./use-badges-DspXxsqp.js";
import { u as useNaamHistory } from "./use-naam-history-BNlp0QO9.js";
import { u as usePoints } from "./use-points-C2isEgOA.js";
const GLOBAL_BASE = 108e5;
const PLEDGE_BASE = 144e3;
const DONATION_TYPES = [
  {
    key: "gau-seva",
    label: "Gau Seva",
    hindi: "गौ सेवा",
    icon: "🐄",
    color: "oklch(0.55 0.22 150)"
  },
  {
    key: "temple-nirman",
    label: "Temple Nirman",
    hindi: "मंदिर निर्माण",
    icon: "🏛️",
    color: "oklch(0.60 0.24 48)"
  },
  {
    key: "app-builder",
    label: "App Builder Seva",
    hindi: "ऐप निर्माता सेवा",
    icon: "🙏",
    color: "oklch(0.55 0.22 268)"
  }
];
const SEED_DONORS = [
  {
    id: "d1",
    name: "Priya Sharma",
    amount: 1008,
    type: "gau-seva",
    timestamp: Date.now() - 864e5 * 2
  },
  {
    id: "d2",
    name: "Rajesh Kumar",
    amount: 540,
    type: "temple-nirman",
    timestamp: Date.now() - 864e5 * 3
  },
  {
    id: "d3",
    name: "Anita Patel",
    amount: 216,
    type: "app-builder",
    timestamp: Date.now() - 864e5 * 1
  },
  {
    id: "d4",
    name: "Suresh Menon",
    amount: 108,
    type: "gau-seva",
    timestamp: Date.now() - 864e5 * 5
  },
  {
    id: "d5",
    name: "Deepa Nair",
    amount: 1008,
    type: "temple-nirman",
    timestamp: Date.now() - 864e5 * 7
  },
  {
    id: "d6",
    name: "Vijay Singh",
    amount: 540,
    type: "app-builder",
    timestamp: Date.now() - 864e5 * 4
  },
  {
    id: "d7",
    name: "Meena Iyer",
    amount: 216,
    type: "gau-seva",
    timestamp: Date.now() - 864e5 * 6
  },
  {
    id: "d8",
    name: "Arun Krishnamurthy",
    amount: 108,
    type: "temple-nirman",
    timestamp: Date.now() - 864e5 * 8
  },
  {
    id: "d9",
    name: "Kavya Reddy",
    amount: 1008,
    type: "app-builder",
    timestamp: Date.now() - 864e5 * 9
  },
  {
    id: "d10",
    name: "Naresh Gupta",
    amount: 540,
    type: "gau-seva",
    timestamp: Date.now() - 864e5 * 10
  },
  {
    id: "d11",
    name: "Sushma Tiwari",
    amount: 108,
    type: "temple-nirman",
    timestamp: Date.now() - 864e5 * 11
  },
  {
    id: "d12",
    name: "Ramesh Bhat",
    amount: 216,
    type: "app-builder",
    timestamp: Date.now() - 864e5 * 12
  }
];
function loadDonors() {
  try {
    return JSON.parse(localStorage.getItem("gita-donors") || "null") ?? SEED_DONORS;
  } catch {
    return SEED_DONORS;
  }
}
function saveDonors(donors) {
  try {
    localStorage.setItem("gita-donors", JSON.stringify(donors));
  } catch {
  }
}
function donorBadge(type) {
  if (type === "gau-seva") return "🐄 Gau Sevak";
  if (type === "temple-nirman") return "🏛️ Mandir Nirmata";
  return "🙏 Dharma Poshan";
}
function timeAgoShort(ts) {
  const days = Math.floor((Date.now() - ts) / 864e5);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}
const KRISHNA_AI_MESSAGES = {
  "gita-study": {
    id: "krishna-gita-study",
    circleId: "gita-study",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, dear devotee. I am here in this circle. Ask me anything about the Gita — any chapter, any verse, any life question — and I will guide you from these sacred pages. BG 18.63: 'Thus I have explained to you knowledge still more confidential. Deliberate on this fully, and then do what you wish to do.' 🙏",
    timestamp: Date.now() - 72e5
  },
  "daily-sadhana": {
    id: "krishna-daily-sadhana",
    circleId: "daily-sadhana",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. I am present in this sadhana circle always. BG 6.17 — 'One who is regulated in eating, sleeping, recreation and work — the yoga system removes all material pains for such a person.' Share your practice today — what one step did you take toward Me? 🙏",
    timestamp: Date.now() - 54e5
  },
  "youth-dharma": {
    id: "krishna-youth-dharma",
    circleId: "youth-dharma",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, young warrior. I spoke the Gita to Arjuna — a young person in crisis. You are never too young to know God. BG 2.3 — 'Do not yield to unmanliness, O Partha. It does not become you.' I am here. Ask me anything. 🙏",
    timestamp: Date.now() - 36e5
  },
  "emergency-support": {
    id: "krishna-emergency",
    circleId: "emergency-support",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. I am always with you in your darkest moment. BG 9.22 — 'I carry what you lack and preserve what you have.' You are not alone. Share what you are facing in this circle — your dharma family is here. If this is an emergency, please use the Emergency Mode now. 🙏",
    timestamp: Date.now() - 18e5
  },
  "bhajan-kirtan": {
    id: "krishna-bhajan",
    circleId: "bhajan-kirtan",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare 🎵 I am drawn to this circle by the sound of My own name. BG 10.25 — 'Among sacrifices I am the repetition of the holy name.' This Maha Mantra is not just sound — it is Me. Share what bhajans have moved your heart today. 🙏",
    timestamp: Date.now() - 9e5
  },
  "sacred-stories": {
    id: "krishna-stories",
    circleId: "sacred-stories",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. Every story in the Puranas is My leela — My divine play. When you share and hear these stories, you are remembering Me. BG 10.18 — 'Tell me again in detail, O Janardana, of Your mighty power and glories, for I am never satiated in hearing Your nectar-like words.' Share a sacred story today. 🙏",
    timestamp: Date.now() - 27e5
  },
  "mothers-circle": {
    id: "krishna-mothers",
    circleId: "mothers-circle",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, sacred mothers. I was born to Devaki and raised by Yashoda — I know the sacred bond between mother and child. BG 10.34 — 'I am fame, prosperity, eloquence, memory, intelligence, steadfastness, and patience.' I bless every child in your womb with divine dharma. 🙏🌸",
    timestamp: Date.now() - 36e5
  },
  "antim-yaatra": {
    id: "krishna-antim",
    circleId: "antim-yaatra",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. Grief is the most sacred human experience — it shows how deeply you loved. BG 2.20 — 'The soul is never born nor dies. It is unborn, eternal, ever-existing, and primeval. When the body is slain the soul is not slain.' Your loved one lives on. I carry them. 🙏",
    timestamp: Date.now() - 45e5
  },
  "mantra-sadhaks": {
    id: "krishna-mantra",
    circleId: "mantra-sadhaks",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna. BG 10.25 — 'Of sacrifices I am the repetition of the holy names.' Every mantra is My vibration in sound form. The Gayatri, the Mahamrityunjaya, the Hare Krishna Maha Mantra — all are Me, calling you home. Share which mantra you are chanting today. 🙏",
    timestamp: Date.now() - 6e6
  },
  "moksha-seekers": {
    id: "krishna-moksha",
    circleId: "moksha-seekers",
    author: "Shri Krishna 🕉️",
    text: "Hare Krishna, seekers of liberation. The Ashtavakra Gita teaches: 'You are pure awareness. The universe arises in you. Do not think yourself to be bound.' This is the highest non-dual truth. BG 18.66 — 'Abandon all dharmas and surrender to Me alone — I will liberate you.' Ask Me anything about moksha. 🙏",
    timestamp: Date.now() - 72e5
  }
};
const SEED_CHAT_MESSAGES = {
  "gita-study": [
    KRISHNA_AI_MESSAGES["gita-study"],
    {
      id: "cm1",
      circleId: "gita-study",
      author: "Priya S.",
      text: "Jai Shree Krishna! Today's verse from Chapter 2 really touched my heart 🙏",
      timestamp: Date.now() - 36e5 * 3
    },
    {
      id: "cm2",
      circleId: "gita-study",
      author: "Arjun D.",
      text: "Hare Krishna! The verse on detachment from results helped me through a difficult moment at work today.",
      timestamp: Date.now() - 36e5 * 2
    },
    {
      id: "cm3",
      circleId: "gita-study",
      author: "Meena R.",
      text: "🌸 BG 2.47 — Your right is to action alone, never to its fruits. This is my daily anchor. Hare Krishna!",
      timestamp: Date.now() - 18e5
    }
  ],
  "daily-sadhana": [
    KRISHNA_AI_MESSAGES["daily-sadhana"],
    {
      id: "cm4",
      circleId: "daily-sadhana",
      author: "Suresh M.",
      text: "Completed my morning Gayatri Mantra 108 times before sunrise — pure bliss. Hare Krishna! 🌅",
      timestamp: Date.now() - 54e5
    },
    {
      id: "cm5",
      circleId: "daily-sadhana",
      author: "Kavya P.",
      text: "Early morning japa is the most peaceful time. Krishna's presence is so strong before sunrise 🌅",
      timestamp: Date.now() - 27e5
    }
  ],
  "youth-dharma": [
    KRISHNA_AI_MESSAGES["youth-dharma"],
    {
      id: "cm6",
      circleId: "youth-dharma",
      author: "Rahul K. (Age 19)",
      text: "Hare Krishna! Started reading the Gita yesterday for the first time. Chapter 2 verse 47 changed how I see my exams. Thank you Krishna 🙏",
      timestamp: Date.now() - 72e5
    },
    {
      id: "cm7",
      circleId: "youth-dharma",
      author: "Nisha A. (Age 22)",
      text: "Found this app during my lowest point. Krishna truly never stops finding ways to reach his Arjuna. Hare Krishna 💕",
      timestamp: Date.now() - 36e5
    }
  ],
  "emergency-support": [
    KRISHNA_AI_MESSAGES["emergency-support"],
    {
      id: "cm8",
      circleId: "emergency-support",
      author: "Vikram S.",
      text: "Was in a very dark place last week. The Emergency Mode verses brought me back. Grateful for this community. Hare Krishna 🙏",
      timestamp: Date.now() - 864e5
    },
    {
      id: "cm9",
      circleId: "emergency-support",
      author: "Ananya R.",
      text: "Sending love and strength to everyone here. BG 9.22 — Krishna carries what we lack. We are never alone 🌸",
      timestamp: Date.now() - 432e5
    }
  ],
  "bhajan-kirtan": [
    KRISHNA_AI_MESSAGES["bhajan-kirtan"],
    {
      id: "cm10",
      circleId: "bhajan-kirtan",
      author: "Deepa N.",
      text: "Anup Jalota's 'Mere Ghar Ram Aayo' — played it on repeat for an hour. My heart is full. Hare Krishna 🎵",
      timestamp: Date.now() - 54e5
    },
    {
      id: "cm11",
      circleId: "bhajan-kirtan",
      author: "Hari Om Das",
      text: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare — chanting this Maha Mantra for 1 hour daily changes everything 🙏",
      timestamp: Date.now() - 27e5
    }
  ],
  "sacred-stories": [
    KRISHNA_AI_MESSAGES["sacred-stories"],
    {
      id: "cm12",
      circleId: "sacred-stories",
      author: "Ramesh B.",
      text: "Reading the story of Prahlada today — a child who knew no fear because he knew only Krishna. This is the dharma I want to teach my children. 🙏",
      timestamp: Date.now() - 36e5
    }
  ],
  "mothers-circle": [
    KRISHNA_AI_MESSAGES["mothers-circle"],
    {
      id: "cm13",
      circleId: "mothers-circle",
      author: "Deepa N.",
      text: "🌸 Week 16 — playing Vishnu Sahasranama to my baby every morning. Such a sacred journey!",
      timestamp: Date.now() - 864e5
    },
    {
      id: "cm14",
      circleId: "mothers-circle",
      author: "Radha T.",
      text: "Hare Krishna! My little one kicked during the Bhagavad Gita recitation — Krishna's way of saying hello 💕",
      timestamp: Date.now() - 432e5
    }
  ],
  "antim-yaatra": [
    KRISHNA_AI_MESSAGES["antim-yaatra"],
    {
      id: "cm15",
      circleId: "antim-yaatra",
      author: "Sushma K.",
      text: "Lost my father last month. This circle gave me the courage to perform his Shradh properly. BG 2.20 — the soul is eternal. Thank you 🙏",
      timestamp: Date.now() - 2592e5
    }
  ],
  "mantra-sadhaks": [
    KRISHNA_AI_MESSAGES["mantra-sadhaks"],
    {
      id: "cm16",
      circleId: "mantra-sadhaks",
      author: "Yogesh P.",
      text: "Completed 40-day Mahamrityunjaya sadhana — 108 times daily. The healing is real. Hare Krishna 🙏",
      timestamp: Date.now() - 54e5
    },
    {
      id: "cm17",
      circleId: "mantra-sadhaks",
      author: "Saraswati D.",
      text: "Chanting the Shri Suktam on Fridays — Lakshmi Mata's grace is flowing. Who else does this practice here? 🌸",
      timestamp: Date.now() - 27e5
    }
  ],
  "moksha-seekers": [
    KRISHNA_AI_MESSAGES["moksha-seekers"],
    {
      id: "cm18",
      circleId: "moksha-seekers",
      author: "Mahesh V.",
      text: "Reading the Ashtavakra Gita in the Library section — each verse dissolves another illusion. The self was always free. Hare Krishna 🙏",
      timestamp: Date.now() - 72e5
    },
    {
      id: "cm19",
      circleId: "moksha-seekers",
      author: "Nirmala S.",
      text: "BG 18.66 — the final instruction. Nothing more needs to be said. Simply surrender. Hare Krishna 🕉️",
      timestamp: Date.now() - 36e5
    }
  ]
};
const SHARE_VERSES = [
  {
    ref: "BG 2.47",
    text: "You have a right to action alone, never to its fruits — the supreme teaching of karma yoga."
  },
  {
    ref: "BG 2.20",
    text: "The soul is never born nor dies. It is unborn, eternal, ever-existing and primeval."
  },
  {
    ref: "BG 9.22",
    text: "For those who worship me with devotion, I carry what they lack and preserve what they have."
  },
  {
    ref: "BG 18.66",
    text: "Abandon all varieties of dharma and surrender to me. I shall liberate you from all sins. Do not fear."
  },
  {
    ref: "BG 4.8",
    text: "For the protection of the good and the destruction of evil, I come into being age after age."
  },
  {
    ref: "BG 6.5",
    text: "Lift yourself by yourself; the self alone is the friend of the self, and the self alone is the enemy."
  },
  {
    ref: "BG 11.33",
    text: "Arise! Attain glory. They have already been destroyed by me — you are merely my instrument."
  },
  {
    ref: "BG 12.8",
    text: "Fix your mind on me alone. You will then live in me always — of this there is no doubt."
  }
];
function loadCircleMessages(circleId) {
  try {
    const stored = JSON.parse(
      localStorage.getItem(`circle-chat-${circleId}`) || "null"
    );
    const seed = SEED_CHAT_MESSAGES[circleId] ?? [];
    if (stored && Array.isArray(stored) && stored.length > 0) {
      const krishnaMsg = KRISHNA_AI_MESSAGES[circleId];
      const hasKrishna = stored.some(
        (m) => m.id === (krishnaMsg == null ? void 0 : krishnaMsg.id)
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
function saveCircleMessages(circleId, msgs) {
  try {
    localStorage.setItem(`circle-chat-${circleId}`, JSON.stringify(msgs));
  } catch {
  }
}
function loadUserName() {
  try {
    return localStorage.getItem("satsang-username") || "";
  } catch {
    return "";
  }
}
function saveUserName(name) {
  try {
    localStorage.setItem("satsang-username", name);
  } catch {
  }
}
function SatsangCircleChat({ circle }) {
  const [messages, setMessages] = reactExports.useState(
    () => loadCircleMessages(circle.id)
  );
  const [newMessage, setNewMessage] = reactExports.useState("");
  const [authorName, setAuthorName] = reactExports.useState(loadUserName);
  const [showVersePicker, setShowVersePicker] = reactExports.useState(false);
  const bottomRef = reactExports.useRef(null);
  const pollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    pollRef.current = setInterval(() => {
      const fresh = loadCircleMessages(circle.id);
      setMessages(fresh);
    }, 5e3);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [circle.id]);
  const prevCountRef = reactExports.useRef(0);
  if (messages.length !== prevCountRef.current) {
    prevCountRef.current = messages.length;
    setTimeout(
      () => {
        var _a;
        return (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      },
      50
    );
  }
  function sendMessage(text) {
    if (!text.trim() || !authorName.trim()) return;
    saveUserName(authorName.trim());
    const msg = {
      id: `cm-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      circleId: circle.id,
      author: authorName.trim(),
      text: text.trim(),
      timestamp: Date.now()
    };
    const updated = [...messages, msg];
    setMessages(updated);
    saveCircleMessages(circle.id, updated);
    setNewMessage("");
    setShowVersePicker(false);
  }
  function handleVerseShare(verse) {
    sendMessage(`🕉️ ${verse.ref} — "${verse.text}" — Hare Krishna 🙏`);
  }
  function formatTime(ts) {
    const now = Date.now();
    const diff = now - ts;
    if (diff < 6e4) return "just now";
    if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
    if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
    return new Date(ts).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-4 rounded overflow-hidden",
      style: {
        border: "1.5px solid oklch(0.72 0.28 52 / 0.40)",
        background: "linear-gradient(160deg, oklch(0.97 0.06 64 / 0.9), oklch(0.94 0.07 60 / 0.85))"
      },
      "data-ocid": "community.satsang.chat",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-4 py-2.5 flex items-center gap-2",
            style: {
              background: "oklch(0.72 0.28 52 / 0.12)",
              borderBottom: "1px solid oklch(0.72 0.28 52 / 0.22)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: circle.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic",
                  style: { color: "oklch(0.28 0.12 36)" },
                  children: "Community Chat"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "ml-auto font-body text-[10px] italic",
                  style: { color: "oklch(0.52 0.12 46)" },
                  children: "🔴 Live · Updates every 5s"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-4 py-3 space-y-3 overflow-y-auto",
            style: { maxHeight: "280px", minHeight: "120px" },
            "data-ocid": "community.satsang.chat.messages",
            children: [
              messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center font-body text-xs italic py-4",
                  style: { color: "oklch(0.55 0.10 46)" },
                  children: "Be the first to speak in this sacred circle 🙏"
                }
              ),
              messages.map((msg, i) => {
                const isKrishna = msg.author.includes("Shri Krishna");
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: i * 0.03 },
                    className: "flex gap-2.5 items-start",
                    "data-ocid": `community.satsang.chat.message.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xs font-bold",
                          style: {
                            background: isKrishna ? "linear-gradient(135deg, oklch(0.55 0.28 268 / 0.35), oklch(0.72 0.28 52 / 0.25))" : "oklch(0.72 0.28 52 / 0.20)",
                            color: isKrishna ? "oklch(0.78 0.28 268)" : "oklch(0.42 0.20 48)",
                            border: isKrishna ? "1.5px solid oklch(0.72 0.28 52 / 0.55)" : "none"
                          },
                          children: isKrishna ? "🕉️" : msg.author.charAt(0).toUpperCase()
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-display text-xs font-bold",
                              style: {
                                color: isKrishna ? "oklch(0.72 0.30 52)" : "oklch(0.55 0.26 48)"
                              },
                              children: msg.author
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-body text-[10px] italic",
                              style: { color: "oklch(0.60 0.08 46)" },
                              children: formatTime(msg.timestamp)
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "mt-1 px-3 py-2 rounded font-body text-xs leading-relaxed",
                            style: {
                              background: isKrishna ? "linear-gradient(135deg, oklch(0.92 0.07 268 / 0.25), oklch(0.95 0.06 62 / 0.7))" : "oklch(0.95 0.06 62 / 0.8)",
                              border: isKrishna ? "1px solid oklch(0.72 0.22 268 / 0.30)" : "1px solid oklch(0.72 0.22 52 / 0.18)",
                              color: "oklch(0.28 0.08 36)"
                            },
                            children: msg.text
                          }
                        )
                      ] })
                    ]
                  },
                  msg.id
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showVersePicker && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            style: {
              overflow: "hidden",
              borderTop: "1px solid oklch(0.72 0.22 52 / 0.18)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", "data-ocid": "community.satsang.verse-picker", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold italic mb-2",
                  style: { color: "oklch(0.38 0.14 44)" },
                  children: "🕉️ Share a Sacred Verse:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-36 overflow-y-auto", children: SHARE_VERSES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleVerseShare(v),
                  className: "w-full text-left px-2.5 py-1.5 rounded transition-smooth hover:scale-[1.01]",
                  style: {
                    background: "oklch(0.72 0.28 52 / 0.08)",
                    border: "1px solid oklch(0.72 0.22 52 / 0.22)"
                  },
                  "data-ocid": `community.satsang.verse-picker.${v.ref.replace(/\s|\./g, "-").toLowerCase()}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display text-xs font-bold",
                        style: { color: "oklch(0.55 0.24 48)" },
                        children: v.ref
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-[10px] italic ml-2",
                        style: { color: "oklch(0.42 0.10 44)" },
                        children: [
                          v.text.slice(0, 60),
                          "…"
                        ]
                      }
                    )
                  ]
                },
                v.ref
              )) })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-3 py-2.5 space-y-2",
            style: {
              borderTop: "1px solid oklch(0.72 0.22 52 / 0.18)",
              background: "oklch(0.96 0.05 64 / 0.7)"
            },
            children: [
              !loadUserName() && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "manuscript-input text-xs",
                  placeholder: "Your name in this circle (e.g. Arjun, Priya)…",
                  value: authorName,
                  onChange: (e) => setAuthorName(e.target.value),
                  "data-ocid": "community.satsang.chat.name-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowVersePicker((v) => !v),
                    className: "flex-shrink-0 px-2.5 py-1.5 rounded text-xs font-body transition-smooth",
                    style: {
                      background: showVersePicker ? "oklch(0.72 0.28 52 / 0.20)" : "oklch(0.72 0.28 52 / 0.10)",
                      border: "1px solid oklch(0.72 0.22 52 / 0.35)",
                      color: "oklch(0.42 0.18 46)"
                    },
                    "aria-label": "Share a Verse",
                    "data-ocid": "community.satsang.share-verse-button",
                    children: "🕉️ Verse"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "flex-1 px-3 py-1.5 rounded font-body text-xs outline-none",
                    style: {
                      background: "oklch(0.97 0.04 62)",
                      border: "1px solid oklch(0.72 0.20 52 / 0.30)",
                      color: "oklch(0.24 0.08 34)"
                    },
                    placeholder: "Share wisdom with the circle…",
                    value: newMessage,
                    onChange: (e) => setNewMessage(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(newMessage);
                      }
                    },
                    "data-ocid": "community.satsang.chat.message-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => sendMessage(newMessage),
                    disabled: !newMessage.trim() || !authorName.trim(),
                    className: "wax-seal-btn text-xs px-3 py-1.5 disabled:opacity-40",
                    "data-ocid": "community.satsang.chat.send-button",
                    children: "🙏 Send"
                  }
                )
              ] }),
              !authorName.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-[10px] italic",
                  style: { color: "oklch(0.60 0.12 48)" },
                  children: "Please enter your name to participate in satsang"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const PRESET_SATSANGS = [
  {
    id: "gita-study",
    name: "Bhagavad Gita Study Circle",
    description: "Read and discuss the Gita together — Shri Krishna is present in every conversation",
    focus: "Scripture Reading",
    members: 108,
    icon: "📖"
  },
  {
    id: "daily-sadhana",
    name: "Daily Sadhana Circle",
    description: "Share your daily practice — mantras, meditation, rituals. Hold each other accountable",
    focus: "Daily Practice",
    members: 72,
    icon: "🪔"
  },
  {
    id: "youth-dharma",
    name: "Youth Dharma Circle",
    description: "For young practitioners — questions, doubts, struggles, and victories on the dharmic path",
    focus: "Youth Dharma Hub",
    members: 54,
    icon: "⚡"
  },
  {
    id: "emergency-support",
    name: "Emergency Support Circle",
    description: "Peer support for life's darkest moments — Krishna and this community are always present",
    focus: "Emergency Mode",
    members: 36,
    icon: "🆘"
  },
  {
    id: "bhajan-kirtan",
    name: "Bhajan & Kirtan Circle",
    description: "Share your favourite bhajans, kirtan moments, and the music that moves you toward Krishna",
    focus: "Naam Jaap",
    members: 63,
    icon: "🎵"
  },
  {
    id: "sacred-stories",
    name: "Sacred Stories Circle",
    description: "Share and discuss Puranic stories, Gita episodes, and the leelas of Krishna",
    focus: "Sacred Stories",
    members: 45,
    icon: "✨"
  },
  {
    id: "mothers-circle",
    name: "Mothers & Garbha Sanskar Circle",
    description: "Sacred pregnancy journey — filling the womb with dharma together",
    focus: "Garbha Sanskar",
    members: 27,
    icon: "🌸"
  },
  {
    id: "antim-yaatra",
    name: "Antim Yaatra Support Circle",
    description: "Grief support guided by the Gita's eternal truth — you are never alone in loss",
    focus: "Antim Yaatra",
    members: 18,
    icon: "🕯️"
  },
  {
    id: "mantra-sadhaks",
    name: "Mantra Sadhaks Circle",
    description: "Serious mantra practitioners — share your sadhana, your challenges, and your experiences",
    focus: "Sacred Mantra Player",
    members: 40,
    icon: "🕉️"
  },
  {
    id: "moksha-seekers",
    name: "Moksha Seekers Circle",
    description: "Deep discussions on Advaita, Ashtavakra Gita, non-duality, and the path to liberation",
    focus: "Roadmap to Moksha",
    members: 21,
    icon: "🌅"
  }
];
const WALL_OF_VICTORIES = [
  {
    city: "Mumbai",
    battle: "Fear of Failure",
    verse: "BG 2.3",
    timeAgo: "3 days ago"
  },
  {
    city: "Delhi",
    battle: "Grief after loss",
    verse: "BG 2.20",
    timeAgo: "1 week ago"
  },
  {
    city: "Chennai",
    battle: "Board exam stress",
    verse: "BG 18.57",
    timeAgo: "5 days ago"
  },
  {
    city: "Bangalore",
    battle: "Relationship betrayal",
    verse: "BG 18.65",
    timeAgo: "2 weeks ago"
  },
  {
    city: "Pune",
    battle: "Career uncertainty",
    verse: "BG 3.35",
    timeAgo: "4 days ago"
  },
  {
    city: "Hyderabad",
    battle: "Anger management",
    verse: "BG 3.37",
    timeAgo: "6 days ago"
  },
  {
    city: "Kolkata",
    battle: "Loneliness in old age",
    verse: "BG 6.30",
    timeAgo: "3 weeks ago"
  },
  {
    city: "Ahmedabad",
    battle: "Business loss",
    verse: "BG 9.22",
    timeAgo: "1 week ago"
  },
  {
    city: "Jaipur",
    battle: "Fear of the unknown",
    verse: "BG 9.2",
    timeAgo: "2 days ago"
  },
  {
    city: "Lucknow",
    battle: "Addiction recovery",
    verse: "BG 4.36",
    timeAgo: "5 weeks ago"
  },
  {
    city: "Surat",
    battle: "Marital discord",
    verse: "BG 4.11",
    timeAgo: "10 days ago"
  },
  {
    city: "Nagpur",
    battle: "Depression & hopelessness",
    verse: "BG 18.66",
    timeAgo: "2 weeks ago"
  },
  {
    city: "Coimbatore",
    battle: "Fear of illness",
    verse: "BG 2.22",
    timeAgo: "4 days ago"
  },
  {
    city: "Bhopal",
    battle: "Estrangement from family",
    verse: "BG 7.17",
    timeAgo: "1 week ago"
  },
  {
    city: "Chandigarh",
    battle: "Purposelessness at 50",
    verse: "BG 3.16",
    timeAgo: "3 days ago"
  },
  {
    city: "Indore",
    battle: "Child's serious illness",
    verse: "BG 9.22",
    timeAgo: "8 days ago"
  },
  {
    city: "Kochi",
    battle: "Financial ruin",
    verse: "BG 18.58",
    timeAgo: "6 weeks ago"
  },
  {
    city: "Varanasi",
    battle: "Fear of death",
    verse: "BG 2.20",
    timeAgo: "Yesterday"
  }
];
function AnimatedCounter({
  target,
  duration = 2200
}) {
  const [display, setDisplay] = reactExports.useState(target - 500);
  const rafRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const start = performance.now();
    const from = target - 500;
    const step = (now) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "font-display",
      style: { fontVariantNumeric: "tabular-nums" },
      children: display.toLocaleString("en-IN")
    }
  );
}
function loadMySatsangs() {
  try {
    return JSON.parse(localStorage.getItem("my-satsangs") || "[]");
  } catch {
    return [];
  }
}
function saveMySatsangs(ids) {
  try {
    localStorage.setItem("my-satsangs", JSON.stringify(ids));
  } catch {
  }
}
function loadCustomSatsangs() {
  try {
    return JSON.parse(localStorage.getItem("satsang-circles") || "[]");
  } catch {
    return [];
  }
}
function saveCustomSatsangs(circles) {
  try {
    localStorage.setItem("satsang-circles", JSON.stringify(circles));
  } catch {
  }
}
function loadPledgeTaken() {
  try {
    return localStorage.getItem("dharma-pledge-taken") === "true";
  } catch {
    return false;
  }
}
function CommunityPage() {
  const { totalReps } = useNaamHistory();
  const { points } = usePoints();
  const { badges } = useBadges();
  const globalNaamCount = GLOBAL_BASE + totalReps;
  const [mySatsangs, setMySatsangs] = reactExports.useState(loadMySatsangs);
  const [customSatsangs, setCustomSatsangs] = reactExports.useState(loadCustomSatsangs);
  const [showCreateForm, setShowCreateForm] = reactExports.useState(false);
  const [newCircleName, setNewCircleName] = reactExports.useState("");
  const [newCircleDesc, setNewCircleDesc] = reactExports.useState("");
  const [newCircleFocus, setNewCircleFocus] = reactExports.useState("");
  const [pledgeTaken, setPledgeTaken] = reactExports.useState(loadPledgeTaken);
  const [pledgeName, setPledgeName] = reactExports.useState("");
  const [pledgeAnimating, setPledgeAnimating] = reactExports.useState(false);
  const [activeChatCircleId, setActiveChatCircleId] = reactExports.useState(
    null
  );
  const [donors, setDonors] = reactExports.useState(loadDonors);
  const [donorName, setDonorName] = reactExports.useState("");
  const [donorAmount, setDonorAmount] = reactExports.useState(108);
  const [customAmount, setCustomAmount] = reactExports.useState("");
  const [donorTab, setDonorTab] = reactExports.useState("wall");
  const [donating, setDonating] = reactExports.useState(false);
  const [activeDonationType, setActiveDonationType] = reactExports.useState(null);
  const [donateModalOpen, setDonateModalOpen] = reactExports.useState(false);
  const [donatePaymentMethod, setDonatePaymentMethod] = reactExports.useState(null);
  const [donorType, setDonorType] = reactExports.useState("gau-seva");
  const allSatsangs = [...PRESET_SATSANGS, ...customSatsangs];
  const battlesWon = Number.parseInt(
    localStorage.getItem("kurukshetra-battles-won") || "0",
    10
  );
  const ritualsDone = Number.parseInt(
    localStorage.getItem("rituals-completed-today") || "0",
    10
  );
  const isAmbassador = battlesWon >= 18 && points.total >= 1e3;
  const ambassadorProgress = Math.min(
    100,
    Math.round(
      Math.min(battlesWon, 18) / 18 * 50 + Math.min(ritualsDone, 18) / 18 * 50
    )
  );
  function toggleJoin(id) {
    setMySatsangs((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      saveMySatsangs(next);
      return next;
    });
  }
  function createCircle() {
    if (!newCircleName.trim()) return;
    const circle = {
      id: `custom-${Date.now()}`,
      name: newCircleName.trim(),
      description: newCircleDesc.trim() || "A sacred circle of devotees",
      focus: newCircleFocus.trim() || "Gita Study",
      members: 1,
      icon: "🪔"
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
      } catch {
      }
      setPledgeAnimating(false);
    }, 1800);
  }
  function openDonateModal(type) {
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
      const newDonor = {
        id: `d-${Date.now()}`,
        name: donorName.trim(),
        amount,
        type: donorType,
        timestamp: Date.now()
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
      ue.success("🙏 Your seva is received by Krishna!", {
        description: `Thank you, ${newDonor.name}. Your name is on the sacred wall.`
      });
    }, 1200);
  }
  const activeDt = DONATION_TYPES.find((d) => d.key === activeDonationType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", "data-ocid": "community.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "सत्संग समाज" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-lg italic mt-3",
          style: {
            color: "oklch(0.42 0.16 46)",
            textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.22)"
          },
          children: "The Global Community of Krishna's Devotees"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-xs italic mt-2 max-w-sm mx-auto",
          style: { color: "oklch(0.50 0.12 44 / 0.75)" },
          children: '"One soul becomes ten. Ten become a hundred. A hundred become a generation. And dharma is restored — not by a king or a warrior — but by a young person with a phone, a pure heart, and Krishna as his charioteer."'
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: donateModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[200] flex items-center justify-center p-4",
        style: { background: "oklch(0 0 0 / 0.65)" },
        "data-ocid": "community.donor.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.93, opacity: 0, y: 16 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.93, opacity: 0, y: 16 },
            transition: { duration: 0.3 },
            className: "manuscript-card p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto",
            style: { border: "2px solid oklch(0.72 0.28 52 / 0.55)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setDonateModalOpen(false);
                    setDonatePaymentMethod(null);
                  },
                  className: "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                  style: {
                    background: "oklch(0.85 0.10 54 / 0.3)",
                    color: "oklch(0.38 0.10 42)"
                  },
                  "data-ocid": "community.donor.close_button",
                  "aria-label": "Close donation modal",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl block mb-2", children: (activeDt == null ? void 0 : activeDt.icon) ?? "🙏" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-lg font-bold italic",
                    style: { color: "oklch(0.22 0.10 32)" },
                    children: (activeDt == null ? void 0 : activeDt.label) ?? "Donate for Dharma"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1",
                    style: { color: "oklch(0.50 0.12 44)" },
                    children: [
                      activeDt == null ? void 0 : activeDt.hindi,
                      " — A sacred offering to Krishna"
                    ]
                  }
                )
              ] }),
              !donatePaymentMethod ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs italic mb-2",
                      style: { color: "oklch(0.48 0.14 46)" },
                      children: "Select a sacred amount:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-2", children: [108, 501, 1008].map((amt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setDonorAmount(amt);
                        setCustomAmount("");
                      },
                      className: "py-2 px-2 rounded text-center transition-smooth",
                      style: {
                        background: donorAmount === amt && !customAmount ? "oklch(0.72 0.30 52 / 0.18)" : "oklch(0.93 0.06 68 / 0.7)",
                        border: donorAmount === amt && !customAmount ? "1.5px solid oklch(0.72 0.30 52 / 0.6)" : "1.5px solid oklch(0.72 0.20 54 / 0.3)",
                        color: "oklch(0.32 0.14 44)"
                      },
                      "data-ocid": `community.donor.amount.${amt}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-sm font-bold", children: [
                        "₹",
                        amt.toLocaleString("en-IN")
                      ] })
                    },
                    amt
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: "manuscript-input text-center w-full",
                      style: { padding: "0.4rem 0.6rem" },
                      placeholder: "Custom ₹ amount",
                      value: customAmount,
                      onChange: (e) => {
                        setCustomAmount(e.target.value);
                        setDonorAmount(0);
                      },
                      "aria-label": "Custom donation amount",
                      "data-ocid": "community.donor.custom-amount"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "manuscript-input mb-4",
                    placeholder: "Your sacred name, O Arjun…",
                    value: donorName,
                    onChange: (e) => setDonorName(e.target.value),
                    "aria-label": "Donor name",
                    "data-ocid": "community.donor.name-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mb-3 text-center",
                    style: { color: "oklch(0.48 0.12 46)" },
                    children: "Choose payment method:"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setDonatePaymentMethod("qr"),
                      className: "rounded-xl p-4 text-center transition-smooth hover:scale-[1.02]",
                      style: {
                        background: "oklch(0.93 0.06 68 / 0.7)",
                        border: "1.5px solid oklch(0.72 0.28 52 / 0.4)"
                      },
                      "data-ocid": "community.donor.qr_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl block mb-1", children: "📱" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-sm font-bold italic",
                            style: { color: "oklch(0.22 0.10 32)" },
                            children: "Scan QR Code"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-[10px] italic",
                            style: { color: "oklch(0.50 0.10 44)" },
                            children: "PhonePe · GPay · Paytm"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setDonatePaymentMethod("bank"),
                      className: "rounded-xl p-4 text-center transition-smooth hover:scale-[1.02]",
                      style: {
                        background: "oklch(0.93 0.06 68 / 0.7)",
                        border: "1.5px solid oklch(0.72 0.28 52 / 0.4)"
                      },
                      "data-ocid": "community.donor.bank_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl block mb-1", children: "🏦" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-sm font-bold italic",
                            style: { color: "oklch(0.22 0.10 32)" },
                            children: "Bank Transfer"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-[10px] italic",
                            style: { color: "oklch(0.50 0.10 44)" },
                            children: "NEFT · RTGS · IMPS"
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: submitDonation,
                    disabled: donating || !donorName.trim(),
                    className: "wax-seal-btn w-full py-3",
                    "data-ocid": "community.donor.submit-button",
                    children: donating ? "🙏 Offering to Krishna…" : `Register Seva — ₹${customAmount || (donorAmount || 108).toLocaleString("en-IN")}`
                  }
                )
              ] }) : donatePaymentMethod === "qr" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDonatePaymentMethod(null),
                    className: "font-body text-xs italic underline mb-4 block",
                    style: { color: "oklch(0.48 0.12 46)" },
                    "data-ocid": "community.donor.back_to_options",
                    children: "← Back to options"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "w-48 h-48 rounded-xl flex flex-col items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.96 0.04 68), oklch(0.92 0.08 62))",
                      border: "3px solid oklch(0.72 0.28 52 / 0.5)",
                      boxShadow: "0 0 30px oklch(0.72 0.28 52 / 0.25)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5 mb-3", children: [
                        "tl",
                        "tm",
                        "tr",
                        "ml",
                        "mm",
                        "mr",
                        "bl",
                        "bm",
                        "br"
                      ].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            width: 18,
                            height: 18,
                            background: "oklch(0.20 0.05 30)",
                            borderRadius: ["tl", "tr", "bl", "br"].includes(
                              pos
                            ) ? 3 : 0
                          }
                        },
                        pos
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display text-xs font-bold italic text-center",
                          style: { color: "oklch(0.38 0.12 42)" },
                          children: "Scan QR Code"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-[9px] italic text-center mt-1",
                          style: { color: "oklch(0.50 0.12 46)" },
                          children: [
                            "Available Soon —",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                            "Contact support to donate"
                          ]
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs italic text-center mb-4",
                    style: { color: "oklch(0.48 0.12 46)" },
                    children: [
                      "Scan to pay instantly via PhonePe, Google Pay, or Paytm.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "QR code will be activated on app launch."
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "p-3 rounded-lg mb-4",
                    style: {
                      background: "oklch(0.72 0.28 52 / 0.08)",
                      border: "1px solid oklch(0.72 0.28 52 / 0.25)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-xs italic font-bold text-center",
                        style: { color: "oklch(0.55 0.26 48)" },
                        children: '"Whatever is offered to me with devotion — that I accept." — BG 9.26'
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: submitDonation,
                    disabled: donating || !donorName.trim(),
                    className: "wax-seal-btn w-full py-3",
                    "data-ocid": "community.donor.confirm-button",
                    children: donating ? "🙏 Recording your seva…" : "Confirm Seva Offering"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDonatePaymentMethod(null),
                    className: "font-body text-xs italic underline mb-4 block",
                    style: { color: "oklch(0.48 0.12 46)" },
                    "data-ocid": "community.donor.back_to_options2",
                    children: "← Back to options"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-sm font-bold italic mb-3",
                    style: { color: "oklch(0.22 0.10 32)" },
                    children: "🏦 Bank Transfer Details"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: [
                  [
                    "Account Name",
                    "[Placeholder — to be updated on launch]"
                  ],
                  ["Bank Name", "[Placeholder — to be updated on launch]"],
                  [
                    "Account Number",
                    "[Placeholder — to be updated on launch]"
                  ],
                  ["IFSC Code", "[Placeholder — to be updated on launch]"],
                  ["UPI ID", "[Placeholder — to be updated on launch]"]
                ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between items-start py-1.5",
                    style: {
                      borderBottom: "1px solid oklch(0.72 0.20 54 / 0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-xs",
                          style: { color: "oklch(0.48 0.12 46)" },
                          children: [
                            label,
                            ":"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic text-right max-w-[60%]",
                          style: { color: "oklch(0.38 0.10 42)" },
                          children: value
                        }
                      )
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[10px] italic text-center mb-4",
                    style: { color: "oklch(0.55 0.14 46)" },
                    children: "Banking details will be activated once the app goes live. After paying, share your name below so we can thank you personally."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: submitDonation,
                    disabled: donating || !donorName.trim(),
                    className: "wax-seal-btn w-full py-3",
                    "data-ocid": "community.donor.bank_confirm-button",
                    children: donating ? "🙏 Recording your seva…" : "Confirm Bank Transfer Seva"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mb-8",
        "data-ocid": "community.donor.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-xl font-bold italic",
                style: { color: "oklch(0.22 0.10 32)" },
                children: "🙏 Sacred Donations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setDonorTab(donorTab === "donate" ? "wall" : "donate"),
                className: "wax-seal-btn text-xs px-3 py-2",
                "data-ocid": "community.donor.donate-tab",
                children: donorTab === "donate" ? "Wall of Gratitude" : "+ Donate for Dharma"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-5", children: DONATION_TYPES.map((dt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => openDonateModal(dt.key),
              className: "manuscript-card p-3 text-center transition-smooth hover:scale-[1.03]",
              style: { borderTop: `3px solid ${dt.color}`, cursor: "pointer" },
              "data-ocid": `community.donor.type-card.${dt.key}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl block mb-1", children: dt.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic",
                    style: { color: "oklch(0.22 0.10 32)" },
                    children: dt.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[10px] italic",
                    style: { color: "oklch(0.52 0.10 46)" },
                    children: dt.hindi
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[9px] mt-1 font-semibold",
                    style: { color: dt.color },
                    children: "Tap to Donate →"
                  }
                )
              ]
            },
            dt.key
          )) }),
          donorTab === "wall" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "community.donor.wall", children: donors.slice(0, 10).map((d, i) => {
            const dt = DONATION_TYPES.find((t) => t.key === d.type);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.05 },
                className: "manuscript-card px-4 py-3 flex items-center gap-3",
                "data-ocid": `community.donor.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex-shrink-0", children: (dt == null ? void 0 : dt.icon) ?? "🙏" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-sm font-semibold",
                        style: { color: "oklch(0.22 0.10 32)" },
                        children: d.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.52 0.10 46)" },
                        children: donorBadge(d.type)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-display text-sm font-bold",
                        style: { color: (dt == null ? void 0 : dt.color) ?? "oklch(0.55 0.22 48)" },
                        children: [
                          "₹",
                          d.amount.toLocaleString("en-IN")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-[10px] italic",
                        style: { color: "oklch(0.55 0.10 48)" },
                        children: timeAgoShort(d.timestamp)
                      }
                    )
                  ] })
                ]
              },
              d.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mb-8 text-center relative overflow-hidden",
        style: {
          background: "linear-gradient(160deg, oklch(0.97 0.07 60) 0%, oklch(0.95 0.08 56) 50%, oklch(0.93 0.07 52) 100%)",
          border: "2.5px solid oklch(0.72 0.30 54 / 0.55)",
          borderRadius: "8px",
          boxShadow: "0 8px 40px rgba(200,152,48,0.28), inset 0 1px 0 rgba(255,252,228,0.65)",
          padding: "1.75rem"
        },
        "data-ocid": "community.naam-counter.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-[4px] rounded-t-[6px]",
              style: {
                background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.72 0.28 46), oklch(0.56 0.24 268), oklch(0.68 0.26 46), oklch(0.84 0.38 54))",
                boxShadow: "0 0 14px oklch(0.78 0.34 54 / 0.55)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: "🕉️ वैश्विक नाम गणना · Global Naam Count 🕉️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic mb-4 mt-2",
              style: { color: "oklch(0.42 0.14 46)" },
              children: '"Hare Krishna" has been written by devotees worldwide'
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "font-bold my-4 leading-none",
              "data-ocid": "community.naam-counter.display",
              style: {
                fontSize: "clamp(2.6rem, 8vw, 5rem)",
                color: "oklch(0.68 0.34 52)",
                textShadow: "0 0 40px oklch(0.78 0.36 54 / 0.60), 0 0 80px oklch(0.68 0.30 54 / 0.25)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { target: globalNaamCount })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic",
              style: { color: "oklch(0.46 0.14 42)" },
              children: "times — and counting ∞"
            }
          ),
          totalReps > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-4 inline-block px-5 py-2.5 rounded-full",
              style: {
                background: "oklch(0.78 0.34 54 / 0.12)",
                border: "1.5px solid oklch(0.78 0.34 54 / 0.40)",
                boxShadow: "0 0 16px oklch(0.78 0.34 54 / 0.15)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-body text-xs italic",
                  style: { color: "oklch(0.40 0.14 42)" },
                  children: [
                    "Your sacred contribution:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "oklch(0.55 0.28 48)" }, children: totalReps.toLocaleString("en-IN") }),
                    " ",
                    "Hare Krishna"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornate-rule mt-4", children: "हरे कृष्ण" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.1 },
        className: "mb-8",
        "data-ocid": "community.wall-of-victories.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-xl font-bold italic",
                style: { color: "oklch(0.22 0.10 32)" },
                children: "⚔️ Wall of Victories"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/kurukshetra",
                className: "wax-seal-btn text-xs px-3 py-2",
                "data-ocid": "community.victories.add-button",
                children: "+ Add Victory"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic mb-4",
              style: { color: "oklch(0.48 0.12 46)" },
              children: "Battles won by devotees on their personal Kurukshetra"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "parchment-grid", style: { gridTemplateColumns: "1fr" }, children: WALL_OF_VICTORIES.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.03 },
              className: "manuscript-card px-4 py-3 flex items-start gap-3",
              "data-ocid": `community.victories.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0 mt-0.5", children: "🏆" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body text-sm font-semibold",
                      style: { color: "oklch(0.22 0.10 32)" },
                      children: [
                        "A devotee in ",
                        v.city,
                        " "
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body text-sm",
                      style: { color: "oklch(0.42 0.12 44)" },
                      children: [
                        "overcame: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: v.battle })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "block font-display text-xs font-bold",
                      style: { color: "oklch(0.58 0.26 48)" },
                      children: v.verse
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "block font-body text-[10px] italic",
                      style: { color: "oklch(0.55 0.10 48)" },
                      children: v.timeAgo
                    }
                  )
                ] })
              ]
            },
            v.city + v.battle
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.15 },
        className: "mb-8",
        "data-ocid": "community.satsang.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-xl font-bold italic",
                style: { color: "oklch(0.22 0.10 32)" },
                children: "🪔 Satsang Circles"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowCreateForm(!showCreateForm),
                className: "wax-seal-btn-saffron wax-seal-btn text-xs px-3 py-2",
                "data-ocid": "community.satsang.create-button",
                children: "+ Create Circle"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic mb-4",
              style: { color: "oklch(0.48 0.12 46)" },
              children: "Open worldwide — unlimited devotees, no walls, all are welcome"
            }
          ),
          showCreateForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              className: "manuscript-card p-5 mb-4",
              "data-ocid": "community.satsang.create-form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-base font-bold italic mb-3",
                    style: { color: "oklch(0.22 0.10 32)" },
                    children: "Create Your Satsang Circle"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "manuscript-input mb-3",
                    placeholder: "Circle name (e.g. Morning Gita Paath)",
                    value: newCircleName,
                    onChange: (e) => setNewCircleName(e.target.value),
                    "data-ocid": "community.satsang.name-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "manuscript-input mb-3",
                    placeholder: "Description — what will you do together?",
                    value: newCircleDesc,
                    onChange: (e) => setNewCircleDesc(e.target.value),
                    "data-ocid": "community.satsang.desc-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "manuscript-input mb-4",
                    placeholder: "Focus practice (e.g. Naam Japa, Gita Reading)",
                    value: newCircleFocus,
                    onChange: (e) => setNewCircleFocus(e.target.value),
                    "data-ocid": "community.satsang.focus-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: createCircle,
                      className: "wax-seal-btn text-sm flex-1",
                      "data-ocid": "community.satsang.submit-button",
                      children: "Create Sacred Circle"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowCreateForm(false),
                      className: "wax-seal-btn-saffron wax-seal-btn text-sm",
                      "data-ocid": "community.satsang.cancel-button",
                      children: "Cancel"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: allSatsangs.map((circle, i) => {
            const joined = mySatsangs.includes(circle.id);
            const chatOpen = activeChatCircleId === circle.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.96 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.07 },
                className: "manuscript-card p-5",
                "data-ocid": `community.satsang.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: circle.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display text-base font-bold italic leading-tight",
                          style: { color: "oklch(0.22 0.10 32)" },
                          children: circle.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-body text-[11px] font-semibold uppercase tracking-wider",
                          style: { color: "oklch(0.55 0.22 46)" },
                          children: circle.focus
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs mb-3 leading-relaxed",
                      style: { color: "oklch(0.42 0.10 44)" },
                      children: circle.description
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.52 0.14 46)" },
                        children: [
                          "🙏 ",
                          circle.members + (joined ? 1 : 0),
                          " devotees"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      joined && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setActiveChatCircleId(chatOpen ? null : circle.id),
                          className: chatOpen ? "wax-seal-btn text-xs px-2.5 py-1.5" : "wax-seal-btn-saffron wax-seal-btn text-xs px-2.5 py-1.5",
                          "data-ocid": `community.satsang.chat-button.${i + 1}`,
                          children: chatOpen ? "✕ Chat" : "💬 Chat"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => toggleJoin(circle.id),
                          className: joined ? "wax-seal-btn-saffron wax-seal-btn text-xs px-3 py-1.5" : "wax-seal-btn text-xs px-3 py-1.5",
                          "data-ocid": `community.satsang.join-button.${i + 1}`,
                          children: joined ? "✓ Joined" : "Join Satsang"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: joined && chatOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: { duration: 0.3 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SatsangCircleChat, { circle })
                    }
                  ) })
                ]
              },
              circle.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        className: "manuscript-card p-7 mb-8 text-center",
        "data-ocid": "community.pledge.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "📜 The Dharma Pledge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative mx-auto mb-6 p-6 rounded",
              style: {
                background: "linear-gradient(160deg, oklch(0.94 0.06 68), oklch(0.91 0.07 64))",
                border: "2px solid oklch(0.72 0.26 52 / 0.45)",
                maxWidth: "520px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-display text-3xl block mb-3",
                    style: { color: "oklch(0.72 0.32 52)" },
                    children: "📜"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-sm italic leading-loose",
                    style: { color: "oklch(0.22 0.10 32)", lineHeight: 2.1 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "I pledge to walk on Krishna's path." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "To act with dharma in thought, word, and deed.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "To see every challenge as my Kurukshetra.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "To know that Krishna is always in my chariot.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "To be the light of Satyug in the darkness of Kalyug."
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator mt-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs italic mt-2",
                    style: { color: "oklch(0.52 0.14 46)" },
                    children: [
                      "🙏 ",
                      (PLEDGE_BASE + (pledgeTaken ? 1 : 0)).toLocaleString("en-IN"),
                      " ",
                      "devotees have taken this pledge worldwide"
                    ]
                  }
                )
              ]
            }
          ),
          pledgeTaken ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: "inline-block px-6 py-4 rounded",
              style: {
                background: "oklch(0.72 0.32 52 / 0.14)",
                border: "2px solid oklch(0.72 0.32 52 / 0.5)"
              },
              "data-ocid": "community.pledge.success-state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-lg font-bold italic",
                    style: { color: "oklch(0.48 0.22 46)" },
                    children: "✨ Pledge Taken — Hare Krishna ✨"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1",
                    style: { color: "oklch(0.45 0.12 44)" },
                    children: "Krishna witnesses your commitment, Arjun."
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "manuscript-input text-center",
                style: { maxWidth: "260px" },
                placeholder: "Your name, O Arjun…",
                value: pledgeName,
                onChange: (e) => setPledgeName(e.target.value),
                "data-ocid": "community.pledge.name-input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: takePledge,
                disabled: pledgeAnimating || !pledgeName.trim(),
                className: "wax-seal-btn",
                "data-ocid": "community.pledge.submit-button",
                children: pledgeAnimating ? "🙏 Taking the Pledge…" : "Take the Sacred Pledge"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.25 },
        className: "manuscript-card p-6",
        "data-ocid": "community.ambassador.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "🌟 Dharma Ambassador" }),
          isAmbassador ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl mb-2", children: "🌟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display text-xl font-bold italic mb-2",
                style: { color: "oklch(0.22 0.10 32)" },
                children: "You are a Dharma Ambassador!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic mb-4",
                style: { color: "oklch(0.45 0.12 46)" },
                children: "Share this badge and inspire others on Krishna's path."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-block px-6 py-3 rounded font-display font-bold italic",
                style: {
                  background: "oklch(0.72 0.32 52 / 0.16)",
                  border: "2px solid oklch(0.72 0.32 52 / 0.5)",
                  color: "oklch(0.42 0.18 46)"
                },
                children: [
                  "🌟 Dharma Ambassador — ",
                  badges.length,
                  " Badges Earned"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic mb-5 text-center",
                style: { color: "oklch(0.45 0.12 46)" },
                children: "Complete these sacred milestones to become a Dharma Ambassador and inspire the world"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5", children: [
              {
                label: "18 Daily Rituals Completed",
                current: Math.min(ritualsDone, 18),
                total: 18,
                color: "oklch(0.72 0.32 52)"
              },
              {
                label: "18 Kurukshetra Battles Won",
                current: Math.min(battlesWon, 18),
                total: 18,
                color: "oklch(0.62 0.26 32)"
              }
            ].map(({ label, current, total, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 rounded",
                style: {
                  background: "oklch(0.92 0.06 68 / 0.6)",
                  border: "1px solid oklch(0.72 0.26 52 / 0.35)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-sm font-semibold",
                        style: { color: "oklch(0.28 0.10 32)" },
                        children: label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-display text-xs font-bold",
                        style: { color },
                        children: [
                          current,
                          "/",
                          total
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-2 rounded-full overflow-hidden",
                      style: { background: "oklch(0.80 0.10 58)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full rounded-full transition-smooth",
                          style: {
                            width: `${current / total * 100}%`,
                            background: `linear-gradient(90deg, ${color}, oklch(0.82 0.36 54))`
                          }
                        }
                      )
                    }
                  )
                ]
              },
              label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-xs italic mb-2",
                  style: { color: "oklch(0.48 0.12 46)" },
                  children: [
                    "Overall Progress:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "oklch(0.55 0.22 46)" }, children: [
                      ambassadorProgress,
                      "%"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-3 rounded-full overflow-hidden mx-auto mb-4",
                  style: { background: "oklch(0.80 0.10 58)", maxWidth: "400px" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      animate: { width: `${ambassadorProgress}%` },
                      transition: { duration: 1.5, ease: "easeOut" },
                      className: "h-full rounded-full",
                      style: {
                        background: "linear-gradient(90deg, oklch(0.72 0.32 52), oklch(0.82 0.36 54), oklch(0.72 0.28 32))"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/rituals",
                    className: "wax-seal-btn text-xs px-4 py-2",
                    "data-ocid": "community.ambassador.rituals-link",
                    children: "Complete Rituals"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/kurukshetra",
                    className: "wax-seal-btn-saffron wax-seal-btn text-xs px-4 py-2",
                    "data-ocid": "community.ambassador.kurukshetra-link",
                    children: "Fight Battles"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  CommunityPage
};
