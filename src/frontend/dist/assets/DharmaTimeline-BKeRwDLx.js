import { r as reactExports, j as jsxRuntimeExports, m as motion, d as Link } from "./index-DqMoqjqS.js";
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
      "No temples needed — divine presence everywhere"
    ],
    avatars: ["🐟 Matsya", "🐢 Kurma", "🐗 Varaha", "🦁 Narasimha"],
    verse: {
      ref: "BG 4.1",
      text: "I first spoke this imperishable yoga to the sun-god Vivasvan..."
    },
    duration: "1,728,000 years"
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
      "Vedic sacrificial rituals reach their highest refinement"
    ],
    avatars: ["🦶 Vamana", "⚔️ Parashurama", "🏹 Rama"],
    verse: {
      ref: "BG 4.7",
      text: "Whenever and wherever dharma declines and adharma rises, O Bharata, at that time I manifest myself."
    },
    duration: "1,296,000 years"
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
      "108 Upanishads composed"
    ],
    avatars: ["🦚 Krishna", "🌾 Balarama"],
    verse: {
      ref: "BG 4.8",
      text: "To deliver the pious and to annihilate the miscreants, as well as to re-establish the principles of dharma, I appear millennium after millennium."
    },
    duration: "864,000 years"
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
      "Kalki Avatar will appear at the end to restore Satyug"
    ],
    avatars: ["⚔️ Kalki (to come)"],
    verse: {
      ref: "BG 12.6-7",
      text: "Those who worship me with devotion — meditating on my form, ever devoted — I personally lift them out of the ocean of Samsara."
    },
    duration: "432,000 years (only ~5,128 years elapsed)",
    isNow: true
  }
];
const VEDAS = [
  {
    name: "ऋग्वेद — Rigveda",
    verses: "10,552",
    desc: "Hymns to the divine powers — the oldest scripture in the world. Foundation of all Vedic knowledge.",
    yuga: "Satyug",
    gitaRef: "BG 10.20"
  },
  {
    name: "सामवेद — Samaveda",
    verses: "1,875",
    desc: "The Veda of music and sacred melody. Krishna says in the Gita: 'Of the Vedas, I am the Sama Veda.'",
    yuga: "Satyug",
    gitaRef: "BG 10.22"
  },
  {
    name: "यजुर्वेद — Yajurveda",
    verses: "1,984",
    desc: "Sacred procedures and formulas for rituals, sacrifices, and Havan. The practical Veda.",
    yuga: "Satyug",
    gitaRef: "BG 3.15"
  },
  {
    name: "अथर्ववेद — Atharvaveda",
    verses: "5,977",
    desc: "Wisdom for daily life — healing, protection, prosperity, and navigating the material world.",
    yuga: "Satyug/Treta",
    gitaRef: "BG 9.17"
  }
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
  "Brahmanda Purana"
];
const DASHAVATAR = [
  {
    num: 1,
    name: "Matsya",
    meaning: "The Fish",
    yuga: "Satyug",
    purpose: "Saved the Vedas from the cosmic deluge",
    verse: "BG 10.31"
  },
  {
    num: 2,
    name: "Kurma",
    meaning: "The Tortoise",
    yuga: "Satyug",
    purpose: "Supported Mount Mandara during Samudra Manthan",
    verse: "BG 9.17"
  },
  {
    num: 3,
    name: "Varaha",
    meaning: "The Boar",
    yuga: "Satyug",
    purpose: "Rescued the Earth from demon Hiranyaksha",
    verse: "BG 10.25"
  },
  {
    num: 4,
    name: "Narasimha",
    meaning: "The Man-Lion",
    yuga: "Satyug",
    purpose: "Destroyed Hiranyakashipu and protected Prahlad",
    verse: "BG 4.8"
  },
  {
    num: 5,
    name: "Vamana",
    meaning: "The Dwarf",
    yuga: "Treta",
    purpose: "Humbled King Bali with three cosmic steps",
    verse: "BG 4.7"
  },
  {
    num: 6,
    name: "Parashurama",
    meaning: "Rama with Axe",
    yuga: "Treta",
    purpose: "Destroyed corrupt kshatriya rulership 21 times",
    verse: "BG 4.8"
  },
  {
    num: 7,
    name: "Rama",
    meaning: "The Ideal King",
    yuga: "Treta",
    purpose: "Established the ideal of dharmic kingship and devotion",
    verse: "BG 10.31"
  },
  {
    num: 8,
    name: "Krishna",
    meaning: "The Dark One",
    yuga: "Dvapara",
    purpose: "Spoke the Bhagavad Gita and restored cosmic dharma",
    verse: "BG 4.1"
  },
  {
    num: 9,
    name: "Buddha",
    meaning: "The Enlightened",
    yuga: "Kali (early)",
    purpose: "Promoted compassion and non-violence",
    verse: "BG 10.1"
  },
  {
    num: 10,
    name: "Kalki",
    meaning: "The Destroyer of Darkness",
    yuga: "Kali (end)",
    purpose: "Will appear at end of Kali Yuga to destroy adharma and restore Satyug",
    verse: "BG 4.7"
  }
];
function DharmaTimelinePage() {
  const [activeYuga, setActiveYuga] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("yugas");
  const TABS = [
    { id: "yugas", label: "4 Yugas" },
    { id: "vedas", label: "4 Vedas" },
    { id: "puranas", label: "18 Puranas" },
    { id: "avatars", label: "Dashavatar" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: "0.5rem" }, "aria-hidden": true, children: "⏳" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "font-display font-bold italic mb-2",
          style: {
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "oklch(0.18 0.08 32)"
          },
          children: "सनातन धर्म यात्रा"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-base italic",
          style: { color: "oklch(0.52 0.18 46)" },
          children: "Sanatan Dharma Timeline — From Satyug to Kalyug"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 mb-6", children: [
      { num: "4", label: "Yugas" },
      { num: "18", label: "Puranas" },
      { num: "108", label: "Upanishads" },
      { num: "700", label: "Gita Verses" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-display text-xl font-bold italic",
          style: { color: "oklch(0.76 0.3 54)" },
          children: s.num
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-[10px] italic",
          style: { color: "oklch(0.52 0.14 46)" },
          children: s.label
        }
      )
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-1 mb-6 overflow-x-auto pb-1",
        "data-ocid": "dharma-timeline.tabs",
        children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(t.id),
            className: "font-body text-xs italic whitespace-nowrap px-3 py-1.5 rounded transition-smooth",
            style: {
              background: activeTab === t.id ? "oklch(0.48 0.24 268)" : "oklch(0.92 0.05 70 / 0.5)",
              color: activeTab === t.id ? "oklch(0.96 0.04 72)" : "oklch(0.48 0.14 46)",
              border: activeTab === t.id ? "1px solid oklch(0.42 0.22 266)" : "1px solid oklch(0.76 0.12 60 / 0.4)",
              fontWeight: activeTab === t.id ? 700 : 400
            },
            "data-ocid": `dharma-timeline.tab.${t.id}`,
            children: t.label
          },
          t.id
        ))
      }
    ),
    activeTab === "yugas" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-5 top-8 bottom-8 w-0.5",
              style: {
                background: "linear-gradient(180deg, oklch(0.76 0.3 54), oklch(0.48 0.24 268), oklch(0.52 0.22 280))"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "dharma-timeline.yugas_list", children: YUGAS.map((yuga, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 16 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.12 },
              className: "pl-12 relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute left-3 top-4 w-5 h-5 rounded-full flex items-center justify-center text-xs z-10",
                    style: {
                      background: yuga.color,
                      border: "2px solid oklch(0.92 0.04 72)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "w-full text-left manuscript-card p-4 transition-smooth",
                    style: {
                      borderColor: activeYuga === yuga.id ? yuga.color : void 0
                    },
                    onClick: () => setActiveYuga(activeYuga === yuga.id ? null : yuga.id),
                    "data-ocid": `dharma-timeline.yuga.${yuga.id}`,
                    "aria-expanded": activeYuga === yuga.id,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.8rem" }, children: yuga.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: "font-display text-base font-bold italic",
                              style: { color: "oklch(0.18 0.08 32)" },
                              children: yuga.name
                            }
                          ),
                          yuga.isNow && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-body text-[10px] px-2 py-0.5 rounded-full font-bold",
                              style: {
                                background: "oklch(0.52 0.22 280 / 0.2)",
                                color: "oklch(0.52 0.22 280)",
                                border: "1px solid oklch(0.52 0.22 280 / 0.5)"
                              },
                              children: "YOU ARE HERE"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-xs italic",
                            style: { color: yuga.color },
                            children: yuga.english
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-xs italic mt-1",
                            style: { color: "oklch(0.42 0.12 44)" },
                            children: yuga.gist
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "font-body text-[10px] italic flex-shrink-0",
                              style: { color: "oklch(0.52 0.14 46)" },
                              children: [
                                "Dharma: ",
                                yuga.dharma,
                                "%"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "flex-1 h-1.5 rounded-full",
                              style: { background: "oklch(0.82 0.06 68)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "h-full rounded-full",
                                  style: {
                                    width: `${yuga.dharma}%`,
                                    background: yuga.color
                                  }
                                }
                              )
                            }
                          )
                        ] })
                      ] })
                    ] })
                  }
                ),
                activeYuga === yuga.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-2 manuscript-card p-4 space-y-3",
                    style: { borderColor: `${yuga.color}60` },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-xs font-bold italic mb-2",
                            style: { color: "oklch(0.28 0.10 36)" },
                            children: "Key Events"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: yuga.events.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                color: yuga.color,
                                fontSize: "0.7rem",
                                marginTop: "2px"
                              },
                              children: "✦"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-xs italic",
                              style: { color: "oklch(0.38 0.10 38)" },
                              children: ev
                            }
                          )
                        ] }, ev)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-xs font-bold italic mb-1",
                            style: { color: "oklch(0.28 0.10 36)" },
                            children: "Avatars"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: yuga.avatars.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-body text-[10px] italic px-2 py-0.5 rounded",
                            style: {
                              background: yuga.colorDim,
                              color: "oklch(0.28 0.10 36)"
                            },
                            children: a
                          },
                          a
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-xs font-bold italic mb-1",
                            style: { color: yuga.color },
                            children: yuga.verse.ref
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation text-xs", children: yuga.verse.text })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-[10px] italic",
                          style: { color: "oklch(0.52 0.14 46)" },
                          children: [
                            "Duration: ",
                            yuga.duration
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            },
            yuga.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-6 manuscript-card p-5 text-center",
              style: {
                background: "oklch(0.52 0.22 280 / 0.08)",
                borderColor: "oklch(0.52 0.22 280 / 0.5)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-base font-bold italic mb-1",
                    style: { color: "oklch(0.42 0.20 280)" },
                    children: "📍 You Are in Kali Yuga"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm italic",
                    style: { color: "oklch(0.32 0.12 36)" },
                    children: "This app is your Satyug portal. Open it and leave Kali Yuga behind."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-2",
                    style: { color: "oklch(0.52 0.22 280 / 0.8)" },
                    children: '"In Kali Yuga, the Bhagavad Gita is your only refuge."'
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    activeTab === "vedas" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "space-y-4",
        children: VEDAS.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1 },
            className: "manuscript-card p-5",
            "data-ocid": `dharma-timeline.veda.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "oklch(0.18 0.08 32)" },
                      children: v.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[10px] italic",
                      style: { color: "oklch(0.62 0.22 48)" },
                      children: [
                        "Revealed in ",
                        v.yuga,
                        " · ",
                        v.verses,
                        " verses"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-display text-xs font-bold italic px-2 py-1 rounded flex-shrink-0",
                    style: {
                      background: "oklch(0.76 0.3 54 / 0.15)",
                      color: "oklch(0.62 0.24 50)",
                      border: "1px solid oklch(0.76 0.3 54 / 0.4)"
                    },
                    children: v.gitaRef
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic leading-relaxed",
                  style: { color: "oklch(0.38 0.10 38)" },
                  children: v.desc
                }
              )
            ]
          },
          v.name
        ))
      }
    ),
    activeTab === "puranas" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-card p-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic text-center",
              style: { color: "oklch(0.42 0.12 44)" },
              children: "The 18 Mahapuranas — composed by Sage Vyasa in Dvapara Yuga. Sacred number 18 — same as Gita chapters and Mahabharata Parvans."
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 gap-2",
              "data-ocid": "dharma-timeline.puranas_grid",
              children: PURANAS_18.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: i * 0.04 },
                  className: "manuscript-card p-3 flex items-center gap-2",
                  "data-ocid": `dharma-timeline.purana.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display text-xs font-bold italic flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                        style: {
                          background: "oklch(0.76 0.3 54 / 0.15)",
                          color: "oklch(0.72 0.28 50)",
                          border: "1.5px solid oklch(0.76 0.3 54 / 0.4)"
                        },
                        children: i + 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.28 0.10 36)" },
                        children: p
                      }
                    )
                  ]
                },
                p
              ))
            }
          )
        ]
      }
    ),
    activeTab === "avatars" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "space-y-3",
        "data-ocid": "dharma-timeline.avatars_list",
        children: DASHAVATAR.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.07 },
            className: "manuscript-card p-4",
            "data-ocid": `dharma-timeline.avatar.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold italic flex-shrink-0",
                  style: {
                    background: a.name === "Krishna" ? "oklch(0.48 0.24 268 / 0.2)" : "oklch(0.76 0.3 54 / 0.12)",
                    border: `2px solid ${a.name === "Krishna" ? "oklch(0.48 0.24 268)" : "oklch(0.76 0.3 54 / 0.5)"}`,
                    color: a.name === "Krishna" ? "oklch(0.48 0.24 268)" : "oklch(0.72 0.28 50)"
                  },
                  children: a.num
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "oklch(0.18 0.08 32)" },
                      children: a.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] italic",
                      style: { color: "oklch(0.62 0.22 48)" },
                      children: a.meaning
                    }
                  ),
                  a.name === "Kalki" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] px-2 py-0.5 rounded-full",
                      style: {
                        background: "oklch(0.52 0.22 280 / 0.2)",
                        color: "oklch(0.52 0.22 280)",
                        border: "1px solid oklch(0.52 0.22 280 / 0.4)"
                      },
                      children: "To Come"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[10px] italic mb-1",
                    style: { color: "oklch(0.62 0.18 48)" },
                    children: a.yuga
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.38 0.10 38)" },
                    children: a.purpose
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[10px] italic mt-1",
                    style: { color: "oklch(0.62 0.22 48 / 0.7)" },
                    children: a.verse
                  }
                )
              ] })
            ] })
          },
          a.name
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "font-body text-xs italic",
        style: { color: "oklch(0.58 0.20 48)" },
        "data-ocid": "dharma-timeline.back-home",
        children: "← Return to Temple"
      }
    ) })
  ] });
}
export {
  DharmaTimelinePage
};
