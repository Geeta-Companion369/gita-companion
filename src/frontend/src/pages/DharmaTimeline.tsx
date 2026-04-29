import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

const YUGAS = [
  {
    id: "satyug",
    name: "सतयुग",
    english: "Satyug — Krita Yuga",
    subtitle: "The Age of Truth & Perfection",
    dharma: 100,
    color: "oklch(0.76 0.3 54)",
    colorDim: "oklch(0.76 0.3 54 / 0.15)",
    icon: "☀️",
    gist: "Gods walked among men. Perfect dharma. No disease, no death before time. The Vedas were heard directly from Brahma.",
    events: [
      "Brahma creates all living beings through the Vedas",
      "First great Rishis receive divine wisdom directly",
      "The 4 Vedas revealed — Rigveda, Samaveda, Yajurveda, Atharvaveda",
      "Brahma's sons — Sanaka, Sanandana, Sanatana, Sanatkumara — born",
      "No temples needed — divine presence everywhere",
    ],
    avatars: ["🐟 Matsya", "🐢 Kurma", "🐗 Varaha", "🦁 Narasimha"],
    verse: {
      ref: "BG 4.1",
      text: "I first spoke this imperishable yoga to the sun-god Vivasvan...",
    },
    duration: "1,728,000 years",
  },
  {
    id: "treta",
    name: "त्रेतायुग",
    english: "Treta Yuga",
    subtitle: "The Age of Ritual",
    dharma: 75,
    color: "oklch(0.62 0.26 48)",
    colorDim: "oklch(0.62 0.26 48 / 0.15)",
    icon: "🌕",
    gist: "Three-quarters of dharma remains. Ritual and sacrifice become the primary means of connecting with the divine. Lord Rama appears.",
    events: [
      "Lord Rama born in Ayodhya — the ideal of dharmic kingship",
      "The Ramayana composed by sage Valmiki",
      "Sita, Lakshmana, Hanuman — archetypes of devotion",
      "Lanka war — victory of dharma over adharma",
      "Vedic sacrificial rituals reach their highest refinement",
    ],
    avatars: ["🦶 Vamana", "⚔️ Parashurama", "🏹 Rama"],
    verse: {
      ref: "BG 4.7",
      text: "Whenever and wherever dharma declines and adharma rises, O Bharata, at that time I manifest myself.",
    },
    duration: "1,296,000 years",
  },
  {
    id: "dvapara",
    name: "द्वापरयुग",
    english: "Dvapara Yuga",
    subtitle: "The Age of Duality",
    dharma: 50,
    color: "oklch(0.48 0.24 268)",
    colorDim: "oklch(0.48 0.24 268 / 0.15)",
    icon: "🌓",
    gist: "Half dharma remains. Duality, conflict, and choice define this age. Krishna appears — the supreme Bhagavad Gita is spoken on Kurukshetra.",
    events: [
      "Krishna born in Mathura (3228 BCE) — the Supreme Personality",
      "Mahabharata composed by Vyasa",
      "Bhagavad Gita spoken on Kurukshetra (3138 BCE) — most sacred scripture",
      "Vyasa divides the one Veda into four",
      "Vyasa composes the 18 Puranas",
      "108 Upanishads composed",
    ],
    avatars: ["🦚 Krishna", "🌾 Balarama"],
    verse: {
      ref: "BG 4.8",
      text: "To deliver the pious and to annihilate the miscreants, as well as to re-establish the principles of dharma, I appear millennium after millennium.",
    },
    duration: "864,000 years",
  },
  {
    id: "kaliyug",
    name: "कलियुग",
    english: "Kali Yuga — The Present Age",
    subtitle: "The Age of Quarrel & Darkness",
    dharma: 25,
    color: "oklch(0.52 0.22 280)",
    colorDim: "oklch(0.52 0.22 280 / 0.15)",
    icon: "🌑",
    gist: "We are here. 5,128 years into Kali Yuga. The Bhagavad Gita is your only refuge in this age — Krishna's direct words preserved for us.",
    events: [
      "Kali Yuga begins with Krishna's departure (~3102 BCE)",
      "Rise of materialism, quarrel, and spiritual ignorance",
      "The Gita becomes the most essential scripture of all ages",
      "Adi Shankaracharya restores Vedic wisdom (788 CE)",
      "Great saints — Chaitanya, Ramanuja, Madhva — revive bhakti",
      "You are HERE — 2026 CE — 5,128 years into Kali Yuga",
      "Kalki Avatar will appear at the end to restore Satyug",
    ],
    avatars: ["⚔️ Kalki (to come)"],
    verse: {
      ref: "BG 12.6-7",
      text: "Those who worship me with devotion — meditating on my form, ever devoted — I personally lift them out of the ocean of Samsara.",
    },
    duration: "432,000 years (only ~5,128 years elapsed)",
    isNow: true,
  },
];

const VEDAS = [
  {
    name: "ऋग्वेद — Rigveda",
    verses: "10,552",
    desc: "Hymns to the divine powers — the oldest scripture in the world. Foundation of all Vedic knowledge.",
    yuga: "Satyug",
    gitaRef: "BG 10.20",
  },
  {
    name: "सामवेद — Samaveda",
    verses: "1,875",
    desc: "The Veda of music and sacred melody. Krishna says in the Gita: 'Of the Vedas, I am the Sama Veda.'",
    yuga: "Satyug",
    gitaRef: "BG 10.22",
  },
  {
    name: "यजुर्वेद — Yajurveda",
    verses: "1,984",
    desc: "Sacred procedures and formulas for rituals, sacrifices, and Havan. The practical Veda.",
    yuga: "Satyug",
    gitaRef: "BG 3.15",
  },
  {
    name: "अथर्ववेद — Atharvaveda",
    verses: "5,977",
    desc: "Wisdom for daily life — healing, protection, prosperity, and navigating the material world.",
    yuga: "Satyug/Treta",
    gitaRef: "BG 9.17",
  },
];

const PURANAS_18 = [
  "Brahma Purana",
  "Padma Purana",
  "Vishnu Purana",
  "Shiva Purana",
  "Bhagavata Purana",
  "Narada Purana",
  "Markandeya Purana",
  "Agni Purana",
  "Bhavishya Purana",
  "Brahmavaivarta Purana",
  "Linga Purana",
  "Varaha Purana",
  "Skanda Purana",
  "Vamana Purana",
  "Kurma Purana",
  "Matsya Purana",
  "Garuda Purana",
  "Brahmanda Purana",
];

const DASHAVATAR = [
  {
    num: 1,
    name: "Matsya",
    meaning: "The Fish",
    yuga: "Satyug",
    purpose: "Saved the Vedas from the cosmic deluge",
    verse: "BG 10.31",
  },
  {
    num: 2,
    name: "Kurma",
    meaning: "The Tortoise",
    yuga: "Satyug",
    purpose: "Supported Mount Mandara during Samudra Manthan",
    verse: "BG 9.17",
  },
  {
    num: 3,
    name: "Varaha",
    meaning: "The Boar",
    yuga: "Satyug",
    purpose: "Rescued the Earth from demon Hiranyaksha",
    verse: "BG 10.25",
  },
  {
    num: 4,
    name: "Narasimha",
    meaning: "The Man-Lion",
    yuga: "Satyug",
    purpose: "Destroyed Hiranyakashipu and protected Prahlad",
    verse: "BG 4.8",
  },
  {
    num: 5,
    name: "Vamana",
    meaning: "The Dwarf",
    yuga: "Treta",
    purpose: "Humbled King Bali with three cosmic steps",
    verse: "BG 4.7",
  },
  {
    num: 6,
    name: "Parashurama",
    meaning: "Rama with Axe",
    yuga: "Treta",
    purpose: "Destroyed corrupt kshatriya rulership 21 times",
    verse: "BG 4.8",
  },
  {
    num: 7,
    name: "Rama",
    meaning: "The Ideal King",
    yuga: "Treta",
    purpose: "Established the ideal of dharmic kingship and devotion",
    verse: "BG 10.31",
  },
  {
    num: 8,
    name: "Krishna",
    meaning: "The Dark One",
    yuga: "Dvapara",
    purpose: "Spoke the Bhagavad Gita and restored cosmic dharma",
    verse: "BG 4.1",
  },
  {
    num: 9,
    name: "Buddha",
    meaning: "The Enlightened",
    yuga: "Kali (early)",
    purpose: "Promoted compassion and non-violence",
    verse: "BG 10.1",
  },
  {
    num: 10,
    name: "Kalki",
    meaning: "The Destroyer of Darkness",
    yuga: "Kali (end)",
    purpose:
      "Will appear at end of Kali Yuga to destroy adharma and restore Satyug",
    verse: "BG 4.7",
  },
];

type TabId = "yugas" | "vedas" | "puranas" | "avatars";

export function DharmaTimelinePage() {
  const [activeYuga, setActiveYuga] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("yugas");

  const TABS: { id: TabId; label: string }[] = [
    { id: "yugas", label: "4 Yugas" },
    { id: "vedas", label: "4 Vedas" },
    { id: "puranas", label: "18 Puranas" },
    { id: "avatars", label: "Dashavatar" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="ornate-header mb-6">
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }} aria-hidden>
          ⏳
        </div>
        <h1
          className="font-display font-bold italic mb-2"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "oklch(0.18 0.08 32)",
          }}
        >
          सनातन धर्म यात्रा
        </h1>
        <p
          className="font-body text-base italic"
          style={{ color: "oklch(0.52 0.18 46)" }}
        >
          Sanatan Dharma Timeline — From Satyug to Kalyug
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {[
          { num: "4", label: "Yugas" },
          { num: "18", label: "Puranas" },
          { num: "108", label: "Upanishads" },
          { num: "700", label: "Gita Verses" },
        ].map((s) => (
          <div key={s.label} className="manuscript-card p-3 text-center">
            <p
              className="font-display text-xl font-bold italic"
              style={{ color: "oklch(0.76 0.3 54)" }}
            >
              {s.num}
            </p>
            <p
              className="font-body text-[10px] italic"
              style={{ color: "oklch(0.52 0.14 46)" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div
        className="flex gap-1 mb-6 overflow-x-auto pb-1"
        data-ocid="dharma-timeline.tabs"
      >
        {TABS.map((t) => (
          <button
            type="button"
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className="font-body text-xs italic whitespace-nowrap px-3 py-1.5 rounded transition-smooth"
            style={{
              background:
                activeTab === t.id
                  ? "oklch(0.48 0.24 268)"
                  : "oklch(0.92 0.05 70 / 0.5)",
              color:
                activeTab === t.id
                  ? "oklch(0.96 0.04 72)"
                  : "oklch(0.48 0.14 46)",
              border:
                activeTab === t.id
                  ? "1px solid oklch(0.42 0.22 266)"
                  : "1px solid oklch(0.76 0.12 60 / 0.4)",
              fontWeight: activeTab === t.id ? 700 : 400,
            }}
            data-ocid={`dharma-timeline.tab.${t.id}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "yugas" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div
            className="absolute left-5 top-8 bottom-8 w-0.5"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.76 0.3 54), oklch(0.48 0.24 268), oklch(0.52 0.22 280))",
            }}
          />
          <div className="space-y-4" data-ocid="dharma-timeline.yugas_list">
            {YUGAS.map((yuga, i) => (
              <motion.div
                key={yuga.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 }}
                className="pl-12 relative"
              >
                <div
                  className="absolute left-3 top-4 w-5 h-5 rounded-full flex items-center justify-center text-xs z-10"
                  style={{
                    background: yuga.color,
                    border: "2px solid oklch(0.92 0.04 72)",
                  }}
                />
                <button
                  type="button"
                  className="w-full text-left manuscript-card p-4 transition-smooth"
                  style={{
                    borderColor:
                      activeYuga === yuga.id ? yuga.color : undefined,
                  }}
                  onClick={() =>
                    setActiveYuga(activeYuga === yuga.id ? null : yuga.id)
                  }
                  data-ocid={`dharma-timeline.yuga.${yuga.id}`}
                  aria-expanded={activeYuga === yuga.id}
                >
                  <div className="flex items-start gap-3">
                    <span style={{ fontSize: "1.8rem" }}>{yuga.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="font-display text-base font-bold italic"
                          style={{ color: "oklch(0.18 0.08 32)" }}
                        >
                          {yuga.name}
                        </h3>
                        {yuga.isNow && (
                          <span
                            className="font-body text-[10px] px-2 py-0.5 rounded-full font-bold"
                            style={{
                              background: "oklch(0.52 0.22 280 / 0.2)",
                              color: "oklch(0.52 0.22 280)",
                              border: "1px solid oklch(0.52 0.22 280 / 0.5)",
                            }}
                          >
                            YOU ARE HERE
                          </span>
                        )}
                      </div>
                      <p
                        className="font-body text-xs italic"
                        style={{ color: yuga.color }}
                      >
                        {yuga.english}
                      </p>
                      <p
                        className="font-body text-xs italic mt-1"
                        style={{ color: "oklch(0.42 0.12 44)" }}
                      >
                        {yuga.gist}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <p
                          className="font-body text-[10px] italic flex-shrink-0"
                          style={{ color: "oklch(0.52 0.14 46)" }}
                        >
                          Dharma: {yuga.dharma}%
                        </p>
                        <div
                          className="flex-1 h-1.5 rounded-full"
                          style={{ background: "oklch(0.82 0.06 68)" }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${yuga.dharma}%`,
                              background: yuga.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                {activeYuga === yuga.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 manuscript-card p-4 space-y-3"
                    style={{ borderColor: `${yuga.color}60` }}
                  >
                    <div>
                      <p
                        className="font-display text-xs font-bold italic mb-2"
                        style={{ color: "oklch(0.28 0.10 36)" }}
                      >
                        Key Events
                      </p>
                      <div className="space-y-1">
                        {yuga.events.map((ev) => (
                          <div key={ev} className="flex gap-2">
                            <span
                              style={{
                                color: yuga.color,
                                fontSize: "0.7rem",
                                marginTop: "2px",
                              }}
                            >
                              ✦
                            </span>
                            <p
                              className="font-body text-xs italic"
                              style={{ color: "oklch(0.38 0.10 38)" }}
                            >
                              {ev}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p
                        className="font-display text-xs font-bold italic mb-1"
                        style={{ color: "oklch(0.28 0.10 36)" }}
                      >
                        Avatars
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {yuga.avatars.map((a) => (
                          <span
                            key={a}
                            className="font-body text-[10px] italic px-2 py-0.5 rounded"
                            style={{
                              background: yuga.colorDim,
                              color: "oklch(0.28 0.10 36)",
                            }}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="verse-display">
                      <p
                        className="font-display text-xs font-bold italic mb-1"
                        style={{ color: yuga.color }}
                      >
                        {yuga.verse.ref}
                      </p>
                      <p className="verse-translation text-xs">
                        {yuga.verse.text}
                      </p>
                    </div>
                    <p
                      className="font-body text-[10px] italic"
                      style={{ color: "oklch(0.52 0.14 46)" }}
                    >
                      Duration: {yuga.duration}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 manuscript-card p-5 text-center"
            style={{
              background: "oklch(0.52 0.22 280 / 0.08)",
              borderColor: "oklch(0.52 0.22 280 / 0.5)",
            }}
          >
            <p
              className="font-display text-base font-bold italic mb-1"
              style={{ color: "oklch(0.42 0.20 280)" }}
            >
              📍 You Are in Kali Yuga
            </p>
            <p
              className="font-body text-sm italic"
              style={{ color: "oklch(0.32 0.12 36)" }}
            >
              This app is your Satyug portal. Open it and leave Kali Yuga
              behind.
            </p>
            <p
              className="font-body text-xs italic mt-2"
              style={{ color: "oklch(0.52 0.22 280 / 0.8)" }}
            >
              "In Kali Yuga, the Bhagavad Gita is your only refuge."
            </p>
          </motion.div>
        </motion.div>
      )}

      {activeTab === "vedas" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {VEDAS.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="manuscript-card p-5"
              data-ocid={`dharma-timeline.veda.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p
                    className="font-display text-sm font-bold italic"
                    style={{ color: "oklch(0.18 0.08 32)" }}
                  >
                    {v.name}
                  </p>
                  <p
                    className="font-body text-[10px] italic"
                    style={{ color: "oklch(0.62 0.22 48)" }}
                  >
                    Revealed in {v.yuga} · {v.verses} verses
                  </p>
                </div>
                <span
                  className="font-display text-xs font-bold italic px-2 py-1 rounded flex-shrink-0"
                  style={{
                    background: "oklch(0.76 0.3 54 / 0.15)",
                    color: "oklch(0.62 0.24 50)",
                    border: "1px solid oklch(0.76 0.3 54 / 0.4)",
                  }}
                >
                  {v.gitaRef}
                </span>
              </div>
              <p
                className="font-body text-xs italic leading-relaxed"
                style={{ color: "oklch(0.38 0.10 38)" }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "puranas" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="manuscript-card p-4 mb-4">
            <p
              className="font-body text-xs italic text-center"
              style={{ color: "oklch(0.42 0.12 44)" }}
            >
              The 18 Mahapuranas — composed by Sage Vyasa in Dvapara Yuga.
              Sacred number 18 — same as Gita chapters and Mahabharata Parvans.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-2"
            data-ocid="dharma-timeline.puranas_grid"
          >
            {PURANAS_18.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="manuscript-card p-3 flex items-center gap-2"
                data-ocid={`dharma-timeline.purana.${i + 1}`}
              >
                <span
                  className="font-display text-xs font-bold italic flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.76 0.3 54 / 0.15)",
                    color: "oklch(0.72 0.28 50)",
                    border: "1.5px solid oklch(0.76 0.3 54 / 0.4)",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.28 0.10 36)" }}
                >
                  {p}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === "avatars" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
          data-ocid="dharma-timeline.avatars_list"
        >
          {DASHAVATAR.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="manuscript-card p-4"
              data-ocid={`dharma-timeline.avatar.${i + 1}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold italic flex-shrink-0"
                  style={{
                    background:
                      a.name === "Krishna"
                        ? "oklch(0.48 0.24 268 / 0.2)"
                        : "oklch(0.76 0.3 54 / 0.12)",
                    border: `2px solid ${a.name === "Krishna" ? "oklch(0.48 0.24 268)" : "oklch(0.76 0.3 54 / 0.5)"}`,
                    color:
                      a.name === "Krishna"
                        ? "oklch(0.48 0.24 268)"
                        : "oklch(0.72 0.28 50)",
                  }}
                >
                  {a.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p
                      className="font-display text-sm font-bold italic"
                      style={{ color: "oklch(0.18 0.08 32)" }}
                    >
                      {a.name}
                    </p>
                    <span
                      className="font-body text-[10px] italic"
                      style={{ color: "oklch(0.62 0.22 48)" }}
                    >
                      {a.meaning}
                    </span>
                    {a.name === "Kalki" && (
                      <span
                        className="font-body text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.52 0.22 280 / 0.2)",
                          color: "oklch(0.52 0.22 280)",
                          border: "1px solid oklch(0.52 0.22 280 / 0.4)",
                        }}
                      >
                        To Come
                      </span>
                    )}
                  </div>
                  <p
                    className="font-body text-[10px] italic mb-1"
                    style={{ color: "oklch(0.62 0.18 48)" }}
                  >
                    {a.yuga}
                  </p>
                  <p
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.38 0.10 38)" }}
                  >
                    {a.purpose}
                  </p>
                  <p
                    className="font-body text-[10px] italic mt-1"
                    style={{ color: "oklch(0.62 0.22 48 / 0.7)" }}
                  >
                    {a.verse}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="text-center mt-8">
        <Link
          to="/"
          className="font-body text-xs italic"
          style={{ color: "oklch(0.58 0.20 48)" }}
          data-ocid="dharma-timeline.back-home"
        >
          ← Return to Temple
        </Link>
      </div>
    </div>
  );
}
