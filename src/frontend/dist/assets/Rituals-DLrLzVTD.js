import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, d as Link } from "./index-DqMoqjqS.js";
import { l as loadObservedEkadashis, g as getDaysToNextEkadashi, a as getUpcomingEkadashiName, s as saveObservedEkadashis, E as EKADASHI_DATA, V as VRAT_DATA } from "./vrat-data-C8uJnB7A.js";
import { u as useBadges } from "./use-badges-DspXxsqp.js";
import { u as usePoints } from "./use-points-C2isEgOA.js";
import { u as useStreak } from "./use-streak-DFw7a2Id.js";
const VAAR_DATA = [
  {
    id: 0,
    name: "Sunday",
    hindi: "रविवार",
    deity: "Surya Dev",
    deityEmoji: "☀️",
    color: "oklch(0.72 0.28 48)",
    colorBg: "oklch(0.96 0.09 60 / 0.92)",
    colorBorder: "oklch(0.72 0.28 48 / 0.6)",
    colorText: "oklch(0.42 0.22 46)",
    vrat: "Surya Vrat",
    mantra: "Om Suryaya Namah",
    mantraDevanagari: "ॐ सूर्याय नमः",
    ritual: "Offer red flowers and water to the Sun at sunrise. Recite Aditya Hridayam facing east. Light a ghee diya.",
    offerings: "Red flowers, water arghya, red sandalwood, copper vessel",
    gitaVerse: "Bhagavad Gita — Chapter 10, Verse 21",
    gitaText: "ज्योतिषां रविरंशुमान्",
    gitaMeaning: '"Of lights I am the radiant sun." — Krishna declares Himself the Sun among luminaries.',
    healthBenefit: "Improves eyesight, vitality, and confidence. Removes skin ailments. Strengthens heart and immune system.",
    story: "When the sage Agastya was exhausted in battle, Lord Rama recited the Aditya Hridayam — the hymn of Surya Dev — and gained divine strength to defeat Ravana. Surya Dev blesses His devotees with boundless energy, clarity of vision, and the courage of a thousand suns."
  },
  {
    id: 1,
    name: "Monday",
    hindi: "सोमवार",
    deity: "Lord Shiva",
    deityEmoji: "🔱",
    color: "oklch(0.65 0.18 240)",
    colorBg: "oklch(0.96 0.05 230 / 0.92)",
    colorBorder: "oklch(0.65 0.18 240 / 0.6)",
    colorText: "oklch(0.36 0.14 238)",
    vrat: "Somvar Vrat",
    mantra: "Om Namah Shivaya",
    mantraDevanagari: "ॐ नमः शिवाय",
    ritual: "Offer white flowers, milk, and bilva leaves to the Shiva linga. Fast until evening. Light a diya of sesame oil.",
    offerings: "White flowers, raw milk, bilva leaves, bel fruit, white sandalwood, water from Ganga",
    gitaVerse: "Bhagavad Gita — Chapter 7, Verse 8",
    gitaText: "रसोऽहमप्सु कौन्तेय",
    gitaMeaning: '"I am the taste of water." — Krishna identifies Himself with the life-giving essence of water, associated with Soma (Moon) and Shiva.',
    healthBenefit: "Mental peace, removes fear and anxiety. Balances the mind and emotions. Brings clarity in relationships.",
    story: "Devoted to Shiva, the hunter Kannappa brought flesh, water, and flowers for his Lord every day. When Shiva tested him by making one of the deity's eyes bleed, Kannappa offered his own eye without hesitation. Shiva wept with love and granted him liberation. Such is the compassion of Mahadeva for those who surrender to him completely."
  },
  {
    id: 2,
    name: "Tuesday",
    hindi: "मंगलवार",
    deity: "Lord Hanuman",
    deityEmoji: "🪬",
    color: "oklch(0.65 0.26 32)",
    colorBg: "oklch(0.97 0.08 40 / 0.92)",
    colorBorder: "oklch(0.65 0.26 32 / 0.6)",
    colorText: "oklch(0.40 0.20 30)",
    vrat: "Mangal Vrat",
    mantra: "Om Hanumate Namah",
    mantraDevanagari: "ॐ हनुमते नमः",
    ritual: "Offer sindoor, red flowers. Recite Hanuman Chalisa 3 times. Light mustard oil lamp. Observe celibacy.",
    offerings: "Sindoor, red flowers, red cloth, jaggery, panchamrit",
    gitaVerse: "Bhagavad Gita — Chapter 18, Verse 65",
    gitaText: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु",
    gitaMeaning: '"Always think of Me, become My devotee, worship Me, bow down to Me." — Pure devotion as Hanuman demonstrated, thinking only of Rama.',
    healthBenefit: "Courage, strength, and fearlessness. Protection from enemies and evil forces. Removes Mangal dosha. Builds physical and mental strength.",
    story: "When Ravana's army seemed unbeatable, Hanuman crossed the ocean alone, burned Lanka, and returned with news of Sita — all out of pure love for Rama. He asked for no reward. He sought no recognition. His only desire was to serve his Lord. Hanuman is the highest example of Karma Yoga — complete action with complete surrender."
  },
  {
    id: 3,
    name: "Wednesday",
    hindi: "बुधवार",
    deity: "Lord Ganesha",
    deityEmoji: "🐘",
    color: "oklch(0.56 0.22 155)",
    colorBg: "oklch(0.96 0.06 150 / 0.92)",
    colorBorder: "oklch(0.56 0.22 155 / 0.6)",
    colorText: "oklch(0.32 0.18 152)",
    vrat: "Budh Vrat",
    mantra: "Om Ganapataye Namah",
    mantraDevanagari: "ॐ गणपतये नमः",
    ritual: "Offer green grass (durva), modak, incense. Recite Ganapati Atharvashirsha. Keep 21 durva blades.",
    offerings: "21 blades of durva grass, modak, green cloth, incense, sandalwood paste",
    gitaVerse: "Bhagavad Gita — Chapter 10, Verse 11",
    gitaText: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः",
    gitaMeaning: '"Out of compassion for them, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance." — Ganesha removes the darkness of ignorance and obstacles.',
    healthBenefit: "Sharpens intellect and memory. Removes obstacles in education, business, and new beginnings. Improves speech and communication.",
    story: "When the sage Vyasa wished to dictate the entire Mahabharata, he needed a scribe who could write as fast as he spoke. Only Ganesha agreed — on the condition that Vyasa never pause. Vyasa agreed, adding his own condition: Ganesha must understand every word before writing it. So great is Ganesha's intellect that he understood every cosmic truth in an instant. He is the first deity worshipped because all obstacles dissolve in His presence."
  },
  {
    id: 4,
    name: "Thursday",
    hindi: "गुरुवार",
    deity: "Vishnu / Krishna",
    deityEmoji: "🦚",
    color: "oklch(0.74 0.30 56)",
    colorBg: "oklch(0.97 0.10 64 / 0.92)",
    colorBorder: "oklch(0.74 0.30 56 / 0.6)",
    colorText: "oklch(0.44 0.24 52)",
    vrat: "Guruvar Vrat",
    mantra: "Om Namo Narayanaya",
    mantraDevanagari: "ॐ नमो नारायणाय",
    ritual: "Wear yellow, offer yellow flowers and chana dal. Recite Vishnu Sahasranama. Worship your Guru with full reverence.",
    offerings: "Yellow flowers, chana dal, turmeric, yellow cloth, banana, ghee lamp",
    gitaVerse: "Bhagavad Gita — Chapter 4, Verse 1",
    gitaText: "इमं विवस्वते योगं प्रोक्तवानहमव्ययम्",
    gitaMeaning: '"I instructed this imperishable science of yoga to the Sun-God Vivasvan." — Krishna as the original Guru who began the divine knowledge lineage.',
    healthBenefit: "Wisdom, prosperity, and good fortune. Removes effects of weak Jupiter. Brings blessings in education, children, and spiritual progress.",
    story: "A poor Brahmin devotee of Lord Vishnu had nothing to offer but love. Each Thursday he would come to the temple empty-handed and sit in stillness. One day the Lord appeared to him in a dream and said: 'Your silence is the finest offering. Your love is the richest gift.' The next morning the devotee found his home filled with abundance — not because he had asked, but because he had surrendered. Krishna's grace descends on those who honor their Guru and practice pure devotion."
  },
  {
    id: 5,
    name: "Friday",
    hindi: "शुक्रवार",
    deity: "Goddess Lakshmi",
    deityEmoji: "🪷",
    color: "oklch(0.76 0.22 340)",
    colorBg: "oklch(0.97 0.07 340 / 0.92)",
    colorBorder: "oklch(0.76 0.22 340 / 0.6)",
    colorText: "oklch(0.44 0.18 338)",
    vrat: "Shukra Vrat",
    mantra: "Om Shri Mahalakshmyai Namah",
    mantraDevanagari: "ॐ श्री महालक्ष्म्यै नमः",
    ritual: "Offer lotus flowers, kheer. Light a ghee lamp. Wear pink or white. Recite Lakshmi Stotram or Sri Suktam.",
    offerings: "Lotus flowers, kheer, lotus seeds, pink/white cloth, rose water, conch shell",
    gitaVerse: "Bhagavad Gita — Chapter 10, Verse 34",
    gitaText: "कीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा",
    gitaMeaning: '"I am fame, prosperity, and speech in women. I am memory, intelligence, steadfastness, and patience." — Lakshmi embodies all auspicious qualities.',
    healthBenefit: "Attracts prosperity, beauty, and harmonious relationships. Removes financial obstacles. Brings peace in the home and blessings for the family.",
    story: "When the ocean of creation was churned by the gods and demons, Lakshmi arose from the depths — radiant, carrying a lotus, choosing her dwelling in the pure heart of Lord Vishnu. She said: 'I will reside wherever there is dharma, cleanliness, gratitude, and devotion.' The lesson is eternal: Lakshmi does not come to those who chase her, but to those who purify their hearts and live in righteousness."
  },
  {
    id: 6,
    name: "Saturday",
    hindi: "शनिवार",
    deity: "Shani Dev",
    deityEmoji: "🌑",
    color: "oklch(0.46 0.18 258)",
    colorBg: "oklch(0.94 0.06 250 / 0.92)",
    colorBorder: "oklch(0.46 0.18 258 / 0.6)",
    colorText: "oklch(0.30 0.16 256)",
    vrat: "Shani Vrat",
    mantra: "Om Sham Shanicharaya Namah",
    mantraDevanagari: "ॐ शं शनिश्चराय नमः",
    ritual: "Offer black sesame seeds and mustard oil lamp. Feed crows and dogs. Donate to the poor. Recite Shani Chalisa.",
    offerings: "Black sesame, mustard oil lamp, black cloth, iron vessel, urad dal, donation to the poor",
    gitaVerse: "Bhagavad Gita — Chapter 18, Verse 17",
    gitaText: "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते",
    gitaMeaning: '"He who is free from ego and whose intellect is not contaminated — though he kills people in this world, he does not kill, nor is he bound by karma."',
    healthBenefit: "Reduces suffering from accumulated karma. Brings discipline, patience, and endurance. Removes delays and obstacles caused by Saturn's influence.",
    story: "Shani Dev once asked Lord Vishnu: 'Even you cannot escape my influence.' Vishnu smiled and said: 'Test me.' For seven and a half years Shani tested Vishnu — but Vishnu remained undisturbed in his dharma, his service, and his devotion. Shani bowed and said: 'You who are free of ego cannot be touched by karma.' Shani Dev does not punish — he purifies. His tests strip away what is false so that what is eternal can shine through."
  }
];
const HORA_PLANETS = {
  Sun: {
    planet: "Sun (Surya)",
    sanskrit: "सूर्य",
    emoji: "☀️",
    color: "oklch(0.72 0.28 48)",
    colorBg: "oklch(0.97 0.09 58 / 0.95)",
    colorBorder: "oklch(0.72 0.28 48 / 0.55)",
    mantra: "Om Suryaya Namah",
    mantraDevanagari: "ॐ सूर्याय नमः",
    auspicious: [
      "Government work",
      "Leadership decisions",
      "Health matters",
      "Seeking authority",
      "Starting new ventures"
    ],
    avoid: "Borrowing money, emotional conversations"
  },
  Moon: {
    planet: "Moon (Chandra)",
    sanskrit: "चंद्र",
    emoji: "🌙",
    color: "oklch(0.65 0.16 238)",
    colorBg: "oklch(0.97 0.05 235 / 0.95)",
    colorBorder: "oklch(0.65 0.16 238 / 0.55)",
    mantra: "Om Chandraya Namah",
    mantraDevanagari: "ॐ चंद्राय नमः",
    auspicious: [
      "Travel",
      "Emotional healing",
      "Meeting women",
      "Agriculture",
      "Artistic activities",
      "Family matters"
    ],
    avoid: "Confrontations, legal disputes"
  },
  Mars: {
    planet: "Mars (Mangal)",
    sanskrit: "मंगल",
    emoji: "🔴",
    color: "oklch(0.58 0.26 22)",
    colorBg: "oklch(0.97 0.07 26 / 0.95)",
    colorBorder: "oklch(0.58 0.26 22 / 0.55)",
    mantra: "Om Mangalaya Namah",
    mantraDevanagari: "ॐ मंगलाय नमः",
    auspicious: [
      "Physical training",
      "Courage-requiring tasks",
      "Surgery",
      "Construction",
      "Confronting enemies"
    ],
    avoid: "Marriage proposals, starting partnerships"
  },
  Mercury: {
    planet: "Mercury (Budha)",
    sanskrit: "बुध",
    emoji: "✍️",
    color: "oklch(0.56 0.22 155)",
    colorBg: "oklch(0.96 0.06 150 / 0.95)",
    colorBorder: "oklch(0.56 0.22 155 / 0.55)",
    mantra: "Om Budhaya Namah",
    mantraDevanagari: "ॐ बुधाय नमः",
    auspicious: [
      "Writing",
      "Business deals",
      "Education",
      "Communication",
      "Signing contracts",
      "Learning"
    ],
    avoid: "Heavy physical work, rash decisions"
  },
  Jupiter: {
    planet: "Jupiter (Guru)",
    sanskrit: "गुरु",
    emoji: "🦚",
    color: "oklch(0.74 0.30 56)",
    colorBg: "oklch(0.97 0.10 62 / 0.95)",
    colorBorder: "oklch(0.74 0.30 56 / 0.55)",
    mantra: "Om Gurave Namah",
    mantraDevanagari: "ॐ गुरवे नमः",
    auspicious: [
      "Spiritual study",
      "Teaching",
      "Consulting Guru",
      "Starting education",
      "Religious ceremonies",
      "Prayer"
    ],
    avoid: "Frivolous activities, gossip"
  },
  Venus: {
    planet: "Venus (Shukra)",
    sanskrit: "शुक्र",
    emoji: "🪷",
    color: "oklch(0.76 0.22 340)",
    colorBg: "oklch(0.97 0.07 338 / 0.95)",
    colorBorder: "oklch(0.76 0.22 340 / 0.55)",
    mantra: "Om Shukraya Namah",
    mantraDevanagari: "ॐ शुक्राय नमः",
    auspicious: [
      "Art",
      "Romance",
      "Beauty rituals",
      "Buying jewellery",
      "Music",
      "Creative work",
      "Marriage discussions"
    ],
    avoid: "Disputes, harsh speech"
  },
  Saturn: {
    planet: "Saturn (Shani)",
    sanskrit: "शनि",
    emoji: "🌑",
    color: "oklch(0.46 0.18 258)",
    colorBg: "oklch(0.94 0.06 250 / 0.95)",
    colorBorder: "oklch(0.46 0.18 258 / 0.55)",
    mantra: "Om Shanaishcharaya Namah",
    mantraDevanagari: "ॐ शनैश्चराय नमः",
    auspicious: [
      "Agriculture",
      "Service work",
      "Disciplined routines",
      "Charitable acts",
      "Long-term planning"
    ],
    avoid: "Starting new businesses, social events"
  }
};
const HORA_SEQUENCE = {
  0: ["Sun", "Venus", "Mercury", "Moon", "Saturn", "Jupiter", "Mars"],
  1: ["Moon", "Saturn", "Jupiter", "Mars", "Sun", "Venus", "Mercury"],
  2: ["Mars", "Sun", "Venus", "Mercury", "Moon", "Saturn", "Jupiter"],
  3: ["Mercury", "Moon", "Saturn", "Jupiter", "Mars", "Sun", "Venus"],
  4: ["Jupiter", "Mars", "Sun", "Venus", "Mercury", "Moon", "Saturn"],
  5: ["Venus", "Mercury", "Moon", "Saturn", "Jupiter", "Mars", "Sun"],
  6: ["Saturn", "Jupiter", "Mars", "Sun", "Venus", "Mercury", "Moon"]
};
function getCurrentHoraIndex(now) {
  const sunriseHour = 6;
  const minutesSinceSunrise = (now.getHours() - sunriseHour) * 60 + now.getMinutes();
  const horaIndex = Math.floor(minutesSinceSunrise / 60);
  const secondsIntoHora = minutesSinceSunrise % 60 * 60 + now.getSeconds();
  const normalizedIndex = (horaIndex % 24 + 24) % 24;
  const planetIndex = normalizedIndex % 7;
  return { index: planetIndex, secondsIntoHora };
}
function DharmaVaarChakra() {
  const today = (/* @__PURE__ */ new Date()).getDay();
  const [selectedDay, setSelectedDay] = reactExports.useState(today);
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      const todayCard = scrollRef.current.querySelector(
        `[data-day="${today}"]`
      );
      if (todayCard) {
        todayCard.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [today]);
  const selected = VAAR_DATA[selectedDay];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "space-y-4",
      "data-ocid": "rituals.vaar-chakra.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "धर्म वार चक्र" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mt-1", children: "Dharma Vaar Chakra — The Sacred 7-Day Wheel of Vedic Life" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: scrollRef,
            className: "flex gap-3 overflow-x-auto pb-2 scroll-smooth",
            style: {
              scrollbarWidth: "thin",
              scrollbarColor: "oklch(0.78 0.34 54 / 0.4) transparent"
            },
            "aria-label": "Day selector",
            "data-ocid": "rituals.vaar-chakra.days-row",
            children: VAAR_DATA.map((day) => {
              const isToday = day.id === today;
              const isSelected = day.id === selectedDay;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-day": day.id,
                  "data-ocid": `rituals.vaar-chakra.day.${day.id + 1}`,
                  onClick: () => setSelectedDay(day.id),
                  className: "flex-shrink-0 flex flex-col items-center gap-1.5 transition-smooth rounded-lg p-3 min-w-[76px]",
                  style: {
                    background: isSelected ? day.colorBg : "oklch(0.95 0.05 70 / 0.85)",
                    border: `2px solid ${isSelected ? day.colorBorder : "oklch(0.82 0.12 60 / 0.4)"}`,
                    boxShadow: isToday ? `0 0 0 3px ${day.colorBorder}, 0 4px 20px ${day.color.replace(")", " / 0.25)")}` : isSelected ? `0 4px 16px ${day.color.replace(")", " / 0.18)")}` : "none",
                    transform: isSelected ? "translateY(-2px)" : "none"
                  },
                  "aria-pressed": isSelected,
                  "aria-label": `${day.name}${isToday ? " (Today)" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none", children: day.deityEmoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display italic text-[11px] font-bold leading-tight text-center",
                        style: {
                          color: isSelected ? day.colorText : "oklch(0.46 0.09 52)"
                        },
                        children: day.name.slice(0, 3)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-[9px] leading-tight text-center",
                        style: {
                          color: isSelected ? day.colorText : "oklch(0.58 0.07 56)"
                        },
                        children: day.hindi
                      }
                    ),
                    isToday && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-[8px] font-bold px-1.5 py-0.5 rounded-full",
                        style: {
                          background: day.color,
                          color: "oklch(0.98 0.04 70)"
                        },
                        children: "Today"
                      }
                    )
                  ]
                },
                day.id
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.28 },
            className: "manuscript-card overflow-hidden",
            style: { border: `1.5px solid ${selected.colorBorder}` },
            "data-ocid": "rituals.vaar-chakra.detail-panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-1 w-full",
                  style: {
                    background: `linear-gradient(90deg, transparent, ${selected.color}, transparent)`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: selected.deityEmoji }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-base font-bold text-primary leading-tight", children: selected.deity }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-body text-xs",
                            style: { color: selected.colorText },
                            children: [
                              selected.name,
                              " · ",
                              selected.hindi
                            ]
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-[10px] px-2 py-0.5 rounded-full font-bold",
                        style: {
                          background: `${selected.color.replace(")", " / 0.15)")}`,
                          color: selected.colorText,
                          border: `1px solid ${selected.colorBorder}`
                        },
                        children: [
                          "🪔 ",
                          selected.vrat
                        ]
                      }
                    ) })
                  ] }),
                  today === selectedDay && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display italic text-[10px] px-2 py-1 rounded font-bold flex-shrink-0",
                      style: {
                        background: selected.color,
                        color: "oklch(0.98 0.04 70)"
                      },
                      children: "Today ✦"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded p-3 text-center",
                    style: {
                      background: `${selected.color.replace(")", " / 0.10)")}`,
                      border: `1px solid ${selected.colorBorder}`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-[10px] tracking-widest uppercase mb-1",
                          style: { color: selected.colorText },
                          children: "Sacred Mantra"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-lg font-bold leading-loose",
                          style: { color: selected.colorText },
                          children: selected.mantraDevanagari
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground", children: selected.mantra })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-1.5", children: "Today's Ritual" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: selected.ritual })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-1.5", children: "Sacred Offerings" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed italic", children: selected.offerings })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded p-3",
                    style: {
                      background: "oklch(0.96 0.06 68 / 0.7)",
                      border: "1.5px solid oklch(0.78 0.34 54 / 0.3)",
                      borderLeft: "4px solid oklch(0.78 0.34 54 / 0.75)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-1.5", children: selected.gitaVerse }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base font-medium text-foreground leading-loose mb-1", children: selected.gitaText }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground leading-relaxed", children: selected.gitaMeaning })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0", children: "💚" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-1", children: "Health & Spiritual Benefit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: selected.healthBenefit })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Sacred Story" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: selected.story })
                ] })
              ] })
            ]
          },
          selectedDay
        ) })
      ]
    }
  );
}
function HoraChakra() {
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const interval = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(interval);
  }, []);
  const dayOfWeek = now.getDay();
  const { index: horaIndex, secondsIntoHora } = getCurrentHoraIndex(now);
  const seq = HORA_SEQUENCE[dayOfWeek];
  const currentPlanetKey = seq[horaIndex];
  const currentHora = HORA_PLANETS[currentPlanetKey];
  const secondsRemaining = 3600 - secondsIntoHora;
  const minutesLeft = Math.floor(secondsRemaining / 60);
  const secondsLeft = secondsRemaining % 60;
  const nextPlanetKey = seq[(horaIndex + 1) % 7];
  const nextHora = HORA_PLANETS[nextPlanetKey];
  const horaProgress = secondsIntoHora / 3600;
  const sunriseHour = 6;
  const minutesSinceSunrise = (now.getHours() - sunriseHour) * 60 + now.getMinutes();
  const horaNumber = Math.max(1, Math.floor(minutesSinceSunrise / 60) + 1);
  const circumference = 2 * Math.PI * 48;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.1 },
      className: "manuscript-card overflow-hidden",
      "data-ocid": "rituals.hora-chakra.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1 w-full",
            style: {
              background: `linear-gradient(90deg, transparent, ${currentHora.color}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] tracking-widest uppercase text-accent/70 mb-1", children: "✦ Vedic Planetary Hours ✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display italic text-lg font-bold text-primary", children: "होरा चक्र" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground mt-0.5", children: "Hora Chakra — Auspicious Time Science of the Vedas" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "120",
                  height: "120",
                  viewBox: "0 0 120 120",
                  className: "-rotate-90",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: "60",
                        cy: "60",
                        r: "48",
                        fill: "none",
                        stroke: "oklch(0.82 0.12 60 / 0.3)",
                        strokeWidth: "8"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: "60",
                        cy: "60",
                        r: "48",
                        fill: "none",
                        stroke: currentHora.color,
                        strokeWidth: "8",
                        strokeDasharray: circumference,
                        strokeDashoffset: circumference * (1 - horaProgress),
                        strokeLinecap: "round",
                        style: { transition: "stroke-dashoffset 1s linear" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl leading-none", children: currentHora.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display italic text-[10px] font-bold mt-0.5 text-primary", children: [
                  "Hora ",
                  horaNumber
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic text-xl font-bold leading-tight",
                  style: { color: currentHora.color },
                  children: currentHora.planet
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base leading-loose text-foreground", children: currentHora.sanskrit })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded p-3 text-center mb-4",
              style: {
                background: `${currentHora.color.replace(")", " / 0.10)")}`,
                border: `1px solid ${currentHora.colorBorder}`
              },
              "data-ocid": "rituals.hora-chakra.current-hora",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[10px] tracking-widest uppercase mb-1",
                    style: { color: currentHora.color },
                    children: "Chant Now"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm font-bold",
                    style: { color: currentHora.color },
                    children: currentHora.mantraDevanagari
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] italic text-muted-foreground", children: currentHora.mantra })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Auspicious in This Hora" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: currentHora.auspicious.map((act) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-body text-[10px] px-2 py-0.5 rounded-full",
                style: {
                  background: `${currentHora.color.replace(")", " / 0.12)")}`,
                  color: currentHora.color,
                  border: `1px solid ${currentHora.colorBorder}`
                },
                children: [
                  "✦ ",
                  act
                ]
              },
              act
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-[10px] text-muted-foreground italic mt-2", children: [
              "Avoid: ",
              currentHora.avoid
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between rounded p-3 gap-3",
              style: {
                background: "oklch(0.94 0.06 66 / 0.8)",
                border: "1px solid oklch(0.78 0.28 54 / 0.3)"
              },
              "data-ocid": "rituals.hora-chakra.countdown",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-0.5", children: "Hora Ends In" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-xl font-bold text-primary tabular-nums", children: [
                    String(minutesLeft).padStart(2, "0"),
                    ":",
                    String(secondsLeft).padStart(2, "0")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-0.5", children: "Next Hora" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: nextHora.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs font-bold",
                        style: { color: nextHora.color },
                        children: nextPlanetKey
                      }
                    )
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-4", "data-ocid": "rituals.hora-chakra.full-list", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-body text-[10px] tracking-widest uppercase text-accent/70 cursor-pointer hover:text-accent transition-smooth py-1", children: "▼ View All 7 Planetary Hours — Today's Cycle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-1 gap-1.5", children: seq.map((planetKey, i) => {
              const hora = HORA_PLANETS[planetKey];
              const isCurrent = i === horaIndex;
              const horaStart = sunriseHour + i;
              const horaEnd = horaStart + 1;
              const startStr = `${String(horaStart % 24).padStart(2, "0")}:00`;
              const endStr = `${String(horaEnd % 24).padStart(2, "0")}:00`;
              const horaKey = `hora-slot-${startStr}`;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 rounded px-3 py-2 transition-smooth",
                  style: {
                    background: isCurrent ? `${hora.color.replace(")", " / 0.15)")}` : "oklch(0.96 0.05 70 / 0.6)",
                    border: `1px solid ${isCurrent ? hora.colorBorder : "oklch(0.82 0.10 60 / 0.3)"}`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base flex-shrink-0", children: hora.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs font-bold",
                          style: { color: hora.color },
                          children: hora.planet
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-muted-foreground truncate", children: hora.auspicious[0] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-[10px] text-muted-foreground", children: [
                        startStr,
                        "–",
                        endStr
                      ] }),
                      isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-body text-[9px] font-bold",
                          style: { color: hora.color },
                          children: "▶ Now"
                        }
                      )
                    ] })
                  ]
                },
                horaKey
              );
            }) })
          ] })
        ] })
      ]
    }
  );
}
const DAILY_PRACTICES = [
  {
    id: "brahma-muhurta",
    number: 1,
    time: "4:00–5:30 AM",
    timeOfDay: "dawn",
    name: "ब्रह्म मुहूर्त",
    english: "Brahma Muhurta",
    description: "The sacred waking hour — 96 minutes before sunrise when cosmic energy is most pure. Rise in silence, meditate, and connect with the divine before the world stirs.",
    when: "Daily, between 4:00 AM and 5:30 AM",
    gitaVerse: "BG 6.17",
    gitaText: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    gitaMeaning: "He who is regulated in his habits of eating, sleeping, recreation and work can mitigate all material pains by practicing the yoga system.",
    mantra: "OM Namah Shivaya",
    mantraFull: "ॐ नमः शिवाय",
    steps: [
      "Rise gently — no phone. Only silence and gratitude.",
      "Splash cool water on face. Say: 'Thank you, Krishna, for this new day.'",
      "Sit facing east. Light a diya. Breathe deeply.",
      "Chant OM 3 times — feel the vibration fill your body.",
      "Meditate for 10 minutes: simply watch your breath."
    ],
    links: []
  },
  {
    id: "pratah-kriya",
    number: 2,
    time: "5:30–6:00 AM",
    timeOfDay: "dawn",
    name: "प्रातः क्रिया",
    english: "Morning Purification",
    description: "Sacred purification — achaman (sipping water thrice), morning bath, application of tilak. The body becomes a purified vessel fit to receive Krishna's grace.",
    when: "After Brahma Muhurta, before morning prayer",
    gitaVerse: "BG 17.14",
    gitaText: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्।\nब्रह्मचर्यमहिंसा च शारीरं तप उच्यते॥",
    gitaMeaning: "Worship of God, the brahmanas, the spiritual master, and superiors like father and mother, and cleanliness, simplicity, celibacy and nonviolence — these are the austerities of the body.",
    mantra: "Om Apavitrah Pavitro Va",
    mantraFull: "ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा।\nयः स्मरेत् पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥",
    steps: [
      "Achaman: sip water three times reciting Achyutaya, Anantaya, Govindaya Namah.",
      "Bathe with cool water — feel purification happening from outside in.",
      "After bath, apply sandal tilak on forehead.",
      "Dress in clean, modest clothing — white, yellow, or saffron preferred.",
      "Your body is now a temple. Enter the day as a temple priest."
    ],
    links: []
  },
  {
    id: "morning-sandhya",
    number: 3,
    time: "6:00–6:30 AM",
    timeOfDay: "dawn",
    name: "संध्या वंदनम् (प्रातः)",
    english: "Morning Sandhya Prayer",
    description: "The first of three daily Sandhya prayers — offered at sunrise. The Gayatri Mantra is the crown jewel, recited 108 times as the sun rises to fill the world with divine light.",
    when: "At sunrise, facing east",
    gitaVerse: "BG 3.16",
    gitaText: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥",
    gitaMeaning: "My dear Arjuna, one who does not follow the cycle of sacrifice leads a life full of sin. He lives in vain.",
    mantra: "Gayatri Mantra",
    mantraFull: "ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥",
    steps: [
      "Stand or sit facing east as the sun rises.",
      "Recite Gayatri Mantra 108 times — slowly, with full devotion.",
      "Offer water (Arghya) to the rising sun — pour from cupped hands.",
      "Complete with 'Om Shanti Shanti Shanti' and a full pranam."
    ],
    links: []
  },
  {
    id: "surya-namaskar",
    number: 4,
    time: "6:30–7:00 AM",
    timeOfDay: "dawn",
    name: "सूर्य नमस्कार",
    english: "Surya Namaskar",
    description: "12 sun salutations — each posture connected to a solar mantra. A complete offering of the body to the divine. 12 rounds = 144 postures, the sacred number of Vedic completion.",
    when: "After morning prayer, facing the rising sun",
    gitaVerse: "BG 6.16",
    gitaText: "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।\nन चाति स्वप्नशीलस्य जाग्रतो नैव चार्जुन॥",
    gitaMeaning: "There is no possibility of one's becoming a yogi, O Arjuna, if one eats too much or too little, sleeps too much or does not sleep enough.",
    mantra: "12 Solar Mantras (Om Mitraya Namah...)",
    mantraFull: "OM Mitrāya · OM Ravaye · OM Sūryāya · OM Bhānave · OM Khagāya · OM Pūṣhṇe · OM Hiraṇyagarbhāya · OM Marīchaye · OM Ādityāya · OM Savitre · OM Arkāya · OM Bhāskarāya",
    steps: [
      "Begin in Pranamasana (Prayer pose): 'Om Mitraya Namah'",
      "Progress through all 12 postures — one mantra per posture.",
      "Move slowly, mindfully — this is yoga, not exercise.",
      "Complete at least 3 rounds (36 postures) minimum.",
      "Rest in Savasana for 5 minutes after completion."
    ],
    links: []
  },
  {
    id: "naam-japa",
    number: 5,
    time: "7:00–7:30 AM",
    timeOfDay: "morning",
    name: "नाम जप",
    english: "Naam Japa",
    description: "Daily 108-bead mala practice — sacred repetition of the divine name. Each repetition is a step closer to Krishna. 108 is the sacred number connecting the individual soul to the universe.",
    when: "Morning, sitting still facing north or east",
    gitaVerse: "BG 10.25",
    gitaText: "महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम्।\nयज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः॥",
    gitaMeaning: "Of the great sages I am Bhrigu; of vibrations I am the transcendental OM. Of sacrifices I am the chanting of the holy names (japa).",
    mantra: "Hare Krishna Mahamantra",
    mantraFull: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।\nहरे राम हरे राम राम राम हरे हरे॥",
    steps: [
      "Sit in a comfortable meditative posture — back straight.",
      "Hold the mala in your right hand, beginning at the guru bead.",
      "Recite one mantra per bead — move with thumb and middle finger.",
      "Complete 108 beads = 1 mala round.",
      "Use the Mala Counter in this app for daily tracking."
    ],
    links: [{ label: "Open Mala Counter", to: "/mala" }]
  },
  {
    id: "brahmarpanam",
    number: 6,
    time: "Before each meal",
    timeOfDay: "morning",
    name: "ब्रह्मार्पणम्",
    english: "Sacred Meal Offering",
    description: "The sacred mantra from BG 4.24 — offered before every meal. This single act transforms eating from a bodily function into a sacred yajna, offering every bite to Brahman.",
    when: "Before every meal, hands folded over the food",
    gitaVerse: "BG 4.24",
    gitaText: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",
    gitaMeaning: "A person who is fully absorbed in Krishna consciousness is sure to attain the spiritual kingdom because of his full contribution to spiritual activities.",
    mantra: "Brahmarpanam",
    mantraFull: "ब्रह्मार्पणं ब्रह्म हविः ब्रह्माग्नौ ब्रह्मणा हुतम्।\nब्रह्मैव तेन गन्तव्यं ब्रह्म-कर्म-समाधिना॥",
    steps: [
      "Before eating, fold hands over the plate or thali.",
      "Recite the Brahmarpanam mantra slowly and with full awareness.",
      "Offer a portion mentally to Krishna — see him accepting it.",
      "Eat in silence if possible — food eaten silently digests as wisdom.",
      "Eat sattvic food: fresh, vegetarian, light."
    ],
    links: []
  },
  {
    id: "gita-paath",
    number: 7,
    time: "8:00–8:30 AM",
    timeOfDay: "morning",
    name: "गीता पाठ",
    english: "Daily Gita Reading",
    description: "Read at least 3 Gita shlokas daily — slowly, with understanding. In 18 weeks of 3 verses daily, you complete the entire Gita. Reading is not study — it is communion with Krishna's voice.",
    when: "Morning, in a clean and quiet place",
    gitaVerse: "BG 18.70",
    gitaText: "अध्येष्यते च य इमं धर्म्यं संवादमावयोः।\nज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः॥",
    gitaMeaning: "And I declare that he who studies this sacred conversation of ours worships Me by his intelligence.",
    mantra: "Om Sri Krishnaya Namah",
    mantraFull: "ॐ श्री कृष्णाय नमः",
    steps: [
      "Open the Gita Reader in this app or a physical copy.",
      "Read at least 3 shlokas — Sanskrit first, then transliteration, then meaning.",
      "Sit with one verse for 5 minutes: let it dissolve into your awareness.",
      "Write one line in your journal: what did Krishna say to me today?",
      "Recite one verse from memory before sleeping."
    ],
    links: [{ label: "Open Gita Reader", to: "/" }]
  },
  {
    id: "sattvic-ahara",
    number: 8,
    time: "Meal times",
    timeOfDay: "morning",
    name: "सात्त्विक आहार",
    english: "Sattvic Eating",
    description: "Righteous eating is a form of tapas. Sattvic food is fresh, plant-based, light, and eaten in the right quantity. It produces clarity, energy, and devotion.",
    when: "All meal times — permanent daily practice",
    gitaVerse: "BG 17.8",
    gitaText: "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः।\nरस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः॥",
    gitaMeaning: "Foods dear to those in the mode of goodness increase the duration of life, purify one's existence and give strength, health, happiness and satisfaction.",
    mantra: "Brahmarpanam (before meals)",
    mantraFull: "सात्त्विक आहार: फल, सब्जियाँ, दाल, अनाज, दूध, घी।",
    steps: [
      "Eat fresh, vegetarian food — fruits, vegetables, grains, legumes, dairy.",
      "Avoid meat, fish, eggs — these are tamasic.",
      "Avoid excessive spice, onion, garlic — these increase rajas.",
      "Eat in the right quantity — neither too much nor too little.",
      "Fast once weekly or on Ekadashi — rest the body and mind."
    ],
    links: []
  },
  {
    id: "midday-sandhya",
    number: 9,
    time: "12:00 PM",
    timeOfDay: "afternoon",
    name: "मध्याह्न संध्या",
    english: "Midday Sandhya",
    description: "The second of three Sandhya prayers — a brief midday pause. Even 5 minutes of conscious prayer at noon anchors you to Krishna in the midst of worldly activity.",
    when: "At noon — even if very brief",
    gitaVerse: "BG 11.36",
    gitaText: "स्थाने हृषीकेश तव प्रकीर्त्या जगत्प्रहृष्यत्यनुरज्यते च।\nरक्षांसि भीतानि दिशो द्रवन्ति सर्वे नमस्यन्ति च सिद्धसंघाः॥",
    gitaMeaning: "O master of the senses, the world becomes joyful upon hearing Your name, and thus everyone becomes attached to You.",
    mantra: "Gayatri Mantra",
    mantraFull: "ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥",
    steps: [
      "Pause whatever you are doing — even for 5 minutes.",
      "Face south — midday prayer is offered to the noon sun.",
      "Recite Gayatri 3 times minimum.",
      "Offer a mental prayer: 'Krishna, I offer this day's work to you.'",
      "Return to your work with renewed sacred intention."
    ],
    links: []
  },
  {
    id: "seva",
    number: 10,
    time: "Any time",
    timeOfDay: "afternoon",
    name: "सेवा",
    english: "Selfless Service",
    description: "One daily act of pure seva — selfless service with no expectation of reward. This is the direct practice of Karma Yoga. Every act of seva burns karma and purifies the soul.",
    when: "Any time — build this as a daily non-negotiable",
    gitaVerse: "BG 3.11",
    gitaText: "देवान्भावयतानेन ते देवा भावयन्तु वः।\nपरस्परं भावयन्तः श्रेयः परमवाप्स्यथ॥",
    gitaMeaning: "The demigods, being pleased by sacrifices, will also please you, and thus, by cooperation between humans and demigods, prosperity will reign for all.",
    mantra: "Om Tat Sat",
    mantraFull: "ॐ तत् सत्",
    steps: [
      "Choose your seva for today — it can be as small as offering water to a plant.",
      "Perform it with 100% of your attention and love.",
      "Do it silently — seva loses power when performed for recognition.",
      "Remember: 'I am not the doer — Krishna acts through me.'"
    ],
    links: []
  },
  {
    id: "evening-sandhya",
    number: 11,
    time: "6:00–6:30 PM",
    timeOfDay: "evening",
    name: "सायं संध्या",
    english: "Evening Sandhya Prayer",
    description: "The third Sandhya — offered at sunset as the day closes. Light a diya, offer prayers, chant the Gayatri as the sun sets. This seals the spiritual protection over your day.",
    when: "At sunset, facing west",
    gitaVerse: "BG 3.16",
    gitaText: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥",
    gitaMeaning: "One who does not follow the cycle of sacrifice leads a life full of sin. He lives in vain.",
    mantra: "Gayatri Mantra",
    mantraFull: "ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥",
    steps: [
      "Stop all activities as the sun sets — even for 5 minutes.",
      "Light a diya — let the small flame represent the divine light within.",
      "Face west and recite Gayatri 3 or 108 times.",
      "Offer a sandhya prayer: 'Thank you, Krishna, for this day.'",
      "Ring a bell if available — the sound drives away negative energy."
    ],
    links: []
  },
  {
    id: "puja-aarti",
    number: 12,
    time: "6:30–7:00 PM",
    timeOfDay: "evening",
    name: "पूजा और आरती",
    english: "Home Puja & Aarti",
    description: "Daily worship at the home temple — light diyas, offer flowers, perform Tulsi puja, recite aarti. Krishna is personally present when worshipped with love.",
    when: "Evening, at your home temple",
    gitaVerse: "BG 9.14",
    gitaText: "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः।\nनमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते॥",
    gitaMeaning: "Always chanting My glories, endeavoring with great determination, bowing down before Me, these great souls perpetually worship Me with devotion.",
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraFull: "ॐ नमो भगवते वासुदेवाय",
    steps: [
      "Light a minimum of 5 diyas — each represents one of the five elements.",
      "Offer fresh flowers or tulsi leaves at Krishna's feet.",
      "Ring the bell 3 times to invoke Krishna's presence.",
      "Recite the aarti — Om Jai Jagadish Hare.",
      "Complete with 3 full pranams — forehead touching the floor."
    ],
    links: []
  },
  {
    id: "ekadashi-vrat",
    number: 13,
    time: "11th lunar day",
    timeOfDay: "evening",
    name: "एकादशी व्रत",
    english: "Ekadashi Fast",
    description: "On Ekadashi — the 11th day of each lunar fortnight — fast from grains, increase Gita reading, and perform extra japa. The most sacred fasting day, personally recommended by Lord Vishnu.",
    when: "Ekadashi days only — see the Ekadashi Calendar",
    gitaVerse: "BG 9.20",
    gitaText: "त्रैविद्या मां सोमपाः पूतपापा यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते।\nते पुण्यमासाद्य सुरेन्द्रलोक अश्नन्ति दिव्यान्दिवि देवभोगान्॥",
    gitaMeaning: "Those who study the Vedas and seek the heavenly planets worship Me indirectly. They are born on the heavenly planet of Indra, where they enjoy godly delights.",
    mantra: "Vishnu Sahasranama",
    mantraFull: "ॐ विष्णवे नमः — ॐ श्री विष्णु सहस्रनाम स्तोत्रम्",
    steps: [
      "Fast from grains, beans, and lentils on Ekadashi day.",
      "Consume only fruits, milk, nuts, and pure vegetarian food.",
      "Double your japa — complete 2 mala rounds minimum.",
      "Read one full chapter of the Gita.",
      "Break the fast on Dvadashi morning with light sattvic food."
    ],
    links: [{ label: "View Ekadashi Calendar", to: "/calendar" }]
  },
  {
    id: "pancha-maha-yajna",
    number: 14,
    time: "Throughout the day",
    timeOfDay: "evening",
    name: "पंच महायज्ञ",
    english: "Five Sacred Daily Duties",
    description: "The five great sacrifices from Vedic tradition — five acts of dharmic responsibility that every householder must perform daily. Together they maintain the sacred order of the universe.",
    when: "Throughout the day — woven into daily routine",
    gitaVerse: "BG 17.23",
    gitaText: "ॐ तत् सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः।\nब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा॥",
    gitaMeaning: "From the beginning of creation, the three words 'Om Tat Sat' were used to indicate the Supreme Absolute Truth.",
    mantra: "Om Tat Sat",
    mantraFull: "ब्रह्म यज्ञ (वेद पाठ) · देव यज्ञ (पूजा) · पितृ यज्ञ (पूर्वजों को जल) · भूत यज्ञ (जीवों को आहार) · अतिथि यज्ञ (अतिथि सेवा)",
    steps: [
      "Brahma Yajna — recite at least 3 Gita verses daily.",
      "Deva Yajna — offer puja at your home temple.",
      "Pitri Yajna — offer water to ancestors on new moon.",
      "Bhuta Yajna — leave food for animals and birds daily.",
      "Atithi Yajna — offer food and hospitality to any unexpected guest."
    ],
    links: []
  },
  {
    id: "avoid-adharma",
    number: 15,
    time: "All day",
    timeOfDay: "evening",
    name: "अधर्म त्याग",
    english: "What to Avoid",
    description: "BG Chapter 16 defines divine and demonic qualities. Daily self-awareness of what Krishna asks us to abandon — as the natural arising of purified consciousness.",
    when: "Constant daily awareness",
    gitaVerse: "BG 16.21",
    gitaText: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
    gitaMeaning: "There are three gates leading to hell — lust, anger, and greed. Every sane man should give these up, for they lead to the degradation of the soul.",
    mantra: "Om Shanti",
    mantraFull: "त्यजेत्: काम (lust) · क्रोध (anger) · लोभ (greed) · मोह (delusion) · अहंकार (ego) · द्वेष (hatred)",
    steps: [
      "Avoid lust — do not consume content that inflames desire.",
      "Avoid anger — pause 18 breaths before reacting to any provocation.",
      "Avoid greed — be content with your dharmic share.",
      "Avoid pride — see yourself as Krishna's servant.",
      "Before sleep, review: where did adharma enter my day? Release it."
    ],
    links: []
  },
  {
    id: "daily-pledge",
    number: 16,
    time: "First thing AM",
    timeOfDay: "dawn",
    name: "दैनिक धर्म संकल्प",
    english: "Daily Dharma Pledge",
    description: "The morning sankalpa — a sacred intention set at the beginning of the day. Spoken aloud, it activates the will and directs the entire day toward dharma and Krishna.",
    when: "First thing in the morning, before any action",
    gitaVerse: "BG 6.3",
    gitaText: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते।\nयोगारूढस्य तस्यैव शमः कारणमुच्यते॥",
    gitaMeaning: "For one who is a neophyte in yoga, work is said to be the means; and for one already elevated, cessation of all material activities is said to be the means.",
    mantra: "Morning Sankalpa",
    mantraFull: "ॐ तत्सत् — आज मैं धर्म के मार्ग पर चलूँगा।\nमेरे सभी कार्य कृष्ण को समर्पित हैं। हरे कृष्ण॥",
    steps: [
      "Rise and immediately (before phone, before food) set your sankalpa.",
      "Stand facing east or north.",
      "Fold hands and speak aloud: 'Today I walk on Krishna's path. All my actions are his offering.'",
      "Add one specific intention for this day.",
      "Return to this intention 3 times during the day to stay anchored."
    ],
    links: []
  },
  {
    id: "evening-reflection",
    number: 17,
    time: "9:00–9:30 PM",
    timeOfDay: "night",
    name: "सायं विमर्श",
    english: "Evening Dharmic Reflection",
    description: "Before sleep, review your day against the mirror of dharmic principles. Not to judge harshly, but to learn, improve, and release. This is the Karma Mirror practice.",
    when: "Before the night prayer, while memory of the day is fresh",
    gitaVerse: "BG 4.18",
    gitaText: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्॥",
    gitaMeaning: "One who sees inaction in action, and action in inaction, is intelligent among men and is in the transcendental position.",
    mantra: "Om Namah Shivaya",
    mantraFull: "ॐ नमः शिवाय",
    steps: [
      "Sit quietly with your journal or simply in silence.",
      "Ask: 'What did I do today that moved toward dharma?'",
      "Ask: 'Where did I fall short? What would Krishna have done differently?'",
      "Release any guilt with 3 deep breaths — tomorrow is a fresh beginning.",
      "Write one sentence: the most important dharmic lesson of today."
    ],
    links: [{ label: "Open Journal", to: "/journal" }]
  },
  {
    id: "night-prayer",
    number: 18,
    time: "10:00–10:30 PM",
    timeOfDay: "night",
    name: "रात्रि प्रार्थना",
    english: "Night Prayer & Surrender",
    description: "The final sacred act — surrender the entire day to Krishna and enter sleep under his divine protection. The protective mantra ensures the mind rests in divine peace.",
    when: "Immediately before sleep",
    gitaVerse: "BG 8.14",
    gitaText: "अनन्यचेताः सततं यो मां स्मरति नित्यशः।\nतस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः॥",
    gitaMeaning: "For one who always remembers Me without deviation, I am easy to obtain because of his constant engagement in devotional service.",
    mantra: "Achyutam Keshavam",
    mantraFull: "अच्युतं केशवं कृष्णदामोदरम्। रामनारायणं जानकीवल्लभम्॥",
    steps: [
      "Lie down peacefully — no phone, no television, no distressing content.",
      "Recite the night prayer or simply say 'Krishna, I surrender this day to you.'",
      "Play Achyutam Keshavam or a soft bhajan softly in the background.",
      "Feel Krishna's presence around you like a protective blanket of light.",
      "Enter sleep thinking of Krishna — your last thought becomes your first morning thought."
    ],
    links: [{ label: "Open Mantra Player", to: "/mantra" }]
  }
];
const TIME_COLORS = {
  dawn: {
    bg: "linear-gradient(135deg, oklch(0.76 0.22 54 / 0.15), oklch(0.88 0.12 60 / 0.08))",
    text: "oklch(0.52 0.20 52)",
    border: "oklch(0.76 0.22 54 / 0.4)",
    badge: "oklch(0.76 0.22 54 / 0.15)"
  },
  morning: {
    bg: "linear-gradient(135deg, oklch(0.80 0.28 54 / 0.12), oklch(0.88 0.14 58 / 0.06))",
    text: "oklch(0.48 0.22 50)",
    border: "oklch(0.76 0.28 52 / 0.4)",
    badge: "oklch(0.80 0.28 54 / 0.15)"
  },
  afternoon: {
    bg: "linear-gradient(135deg, oklch(0.70 0.24 50 / 0.12), oklch(0.82 0.14 56 / 0.06))",
    text: "oklch(0.44 0.20 46)",
    border: "oklch(0.68 0.24 48 / 0.4)",
    badge: "oklch(0.70 0.24 50 / 0.12)"
  },
  evening: {
    bg: "linear-gradient(135deg, oklch(0.52 0.24 268 / 0.12), oklch(0.40 0.18 280 / 0.08))",
    text: "oklch(0.40 0.20 266)",
    border: "oklch(0.52 0.24 268 / 0.4)",
    badge: "oklch(0.52 0.24 268 / 0.12)"
  },
  night: {
    bg: "linear-gradient(135deg, oklch(0.34 0.20 280 / 0.14), oklch(0.26 0.16 290 / 0.08))",
    text: "oklch(0.38 0.18 278)",
    border: "oklch(0.44 0.22 278 / 0.4)",
    badge: "oklch(0.34 0.20 280 / 0.12)"
  }
};
const TIME_LABELS = {
  dawn: "🌅 Dawn",
  morning: "☀️ Morning",
  afternoon: "🌤️ Afternoon",
  evening: "🌆 Evening",
  night: "🌙 Night"
};
function getTodayKey() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function loadChecked() {
  try {
    const r = localStorage.getItem(`dharmic-rituals-${getTodayKey()}`);
    return r ? JSON.parse(r) : {};
  } catch {
    return {};
  }
}
function saveChecked(c) {
  try {
    localStorage.setItem(`dharmic-rituals-${getTodayKey()}`, JSON.stringify(c));
  } catch {
  }
}
function ProgressRing({
  completed,
  total
}) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - completed / total * circ;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-20 h-20 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          className: "w-20 h-20 -rotate-90",
          viewBox: "0 0 80 80",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "40",
                cy: "40",
                r,
                fill: "none",
                stroke: "oklch(var(--border) / 0.5)",
                strokeWidth: "6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "40",
                cy: "40",
                r,
                fill: "none",
                stroke: "oklch(var(--accent))",
                strokeWidth: "6",
                strokeDasharray: circ,
                strokeDashoffset: offset,
                strokeLinecap: "round",
                style: { transition: "stroke-dashoffset 0.5s ease" }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic text-lg font-bold text-accent", children: completed }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-[9px] text-muted-foreground", children: [
          "of ",
          total
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-base text-primary", children: [
        Math.round(completed / total * 100),
        "% Complete"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-0.5", children: completed === total ? "🏆 Dharma Warrior achieved today!" : `${total - completed} practices remaining` }),
      completed === total && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-accent italic mt-1", children: "+18 Sacred Points Earned" })
    ] })
  ] });
}
function RitualCard({
  practice,
  checked,
  onToggle,
  idx
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const colors = TIME_COLORS[practice.timeOfDay] ?? TIME_COLORS.morning;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -10 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { delay: idx * 0.025 },
      className: "manuscript-card overflow-hidden",
      style: {
        border: `1.5px solid ${colors.border}`,
        opacity: checked ? 0.75 : 1
      },
      "data-ocid": `rituals.item.${idx + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-0.5 w-full",
            style: {
              background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-display",
                style: {
                  background: colors.badge,
                  border: `1px solid ${colors.border}`,
                  color: colors.text
                },
                children: practice.number
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm font-bold text-primary", children: practice.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs", style: { color: colors.text }, children: practice.english })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground/70 italic", children: practice.time }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onToggle(practice.id),
                      "aria-label": `Mark ${practice.english} as ${checked ? "incomplete" : "complete"}`,
                      "data-ocid": `rituals.checkbox.${idx + 1}`,
                      className: "w-6 h-6 rounded flex items-center justify-center transition-smooth flex-shrink-0",
                      style: {
                        background: checked ? "oklch(var(--accent))" : "transparent",
                        border: `2px solid ${checked ? "oklch(var(--accent))" : colors.border}`
                      },
                      children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-foreground text-xs font-bold", children: "✓" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed mt-1.5 line-clamp-2", children: practice.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-verse-number mt-2", children: [
                practice.gitaVerse,
                " · ",
                practice.mantra
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setExpanded((v) => !v),
              "data-ocid": `rituals.expand.${idx + 1}`,
              className: "mt-3 font-body text-[10px] tracking-widest uppercase text-accent/70 hover:text-accent transition-smooth flex items-center gap-1",
              children: expanded ? "▲ Close" : "▼ View Details, Mantra & Steps"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25 },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-5 space-y-4 border-t border-accent/10 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-sanskrit whitespace-pre-line", children: practice.gitaText }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation", children: practice.gitaMeaning })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-accent/80 tracking-widest uppercase mb-2", children: "Sacred Mantra" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium leading-loose text-foreground", children: practice.mantraFull }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `rituals.audio.${idx + 1}`,
                    className: "mt-3 flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-foreground transition-smooth",
                    "aria-label": `Play ${practice.mantra} audio`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-7 h-7 rounded-full flex items-center justify-center",
                          style: {
                            background: "oklch(var(--accent)/0.15)",
                            border: "1px solid oklch(var(--accent)/0.4)"
                          },
                          children: "🔊"
                        }
                      ),
                      "Listen to this mantra"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-accent/80 tracking-widest uppercase mb-3", children: "Step-by-Step Guide" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: practice.steps.map((step, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-2 items-start",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent text-xs font-bold font-display flex-shrink-0 mt-0.5", children: [
                        si + 1,
                        "."
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs leading-relaxed text-foreground", children: step })
                    ]
                  },
                  step.slice(0, 18)
                )) })
              ] }),
              practice.links.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: practice.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: link.to,
                  className: "wax-seal-btn text-xs py-1.5 px-3",
                  "data-ocid": `rituals.link.${idx + 1}`,
                  children: link.label
                },
                link.to
              )) })
            ] })
          }
        ) })
      ]
    }
  );
}
const PAKSHA_COLORS = {
  Shukla: {
    bg: "oklch(0.78 0.34 54 / 0.12)",
    border: "oklch(0.78 0.34 54 / 0.5)",
    text: "oklch(0.38 0.22 48)",
    badge: "oklch(0.78 0.34 54 / 0.18)",
    label: "🌕 Shukla"
  },
  Krishna: {
    bg: "oklch(0.52 0.26 268 / 0.1)",
    border: "oklch(0.52 0.26 268 / 0.4)",
    text: "oklch(0.36 0.2 264)",
    badge: "oklch(0.52 0.26 268 / 0.15)",
    label: "🌑 Krishna"
  }
};
const FASTING_TYPE_LABELS = {
  nirjala: "💧 Nirjala — No Water",
  phalahar: "🍎 Phalahar — Fruits Only",
  upvas: "🌾 Upvas — No Grains"
};
function EkadashiCard({
  ekadashi,
  index,
  observed,
  onToggleObserved
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const pc = PAKSHA_COLORS[ekadashi.paksha];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.03 },
      className: "manuscript-card overflow-hidden",
      style: {
        border: `1.5px solid ${pc.border}`,
        opacity: observed ? 0.8 : 1
      },
      "data-ocid": `rituals.ekadashi.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-0.5 w-full",
            style: {
              background: `linear-gradient(90deg, transparent, ${pc.border}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            "data-ocid": `rituals.ekadashi.toggle.${index + 1}`,
            className: "w-full p-4 text-left flex items-start gap-3",
            "aria-expanded": expanded,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-display mt-0.5",
                  style: {
                    background: pc.badge,
                    border: `1px solid ${pc.border}`,
                    color: pc.text
                  },
                  children: index + 1
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm font-bold text-primary leading-snug", children: ekadashi.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-0.5", style: { color: pc.text }, children: ekadashi.devanagari }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] px-1.5 py-0.5 rounded-full",
                      style: { background: pc.badge, color: pc.text },
                      children: pc.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-[10px] text-muted-foreground", children: [
                    ekadashi.month,
                    " · ",
                    ekadashi.calendarMonth
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground", children: FASTING_TYPE_LABELS[ekadashi.fastingType] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      onToggleObserved(ekadashi.id);
                    },
                    "data-ocid": `rituals.ekadashi.observed.${index + 1}`,
                    "aria-label": `Mark ${ekadashi.name} as ${observed ? "not observed" : "observed"}`,
                    className: "w-6 h-6 rounded flex items-center justify-center transition-smooth flex-shrink-0",
                    style: {
                      background: observed ? pc.border : "transparent",
                      border: `2px solid ${pc.border}`
                    },
                    children: observed && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] font-bold",
                        style: { color: pc.text },
                        children: "✓"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/60 text-xs", children: expanded ? "▲" : "▼" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.22 },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-4 pb-5 border-t pt-4 space-y-4",
                style: { borderColor: `${pc.border}` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase", children: "Deity:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-foreground", children: ekadashi.deity }),
                    ekadashi.specialNote && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-[10px] italic px-2 py-0.5 rounded",
                        style: { background: pc.badge, color: pc.text },
                        children: [
                          "⭐ ",
                          ekadashi.specialNote
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Sacred Story & Origin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: ekadashi.story })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded p-3",
                      style: {
                        background: pc.badge,
                        border: `1px solid ${pc.border}`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-1.5", children: "Spiritual Benefit" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-sm font-medium leading-relaxed",
                            style: { color: pc.text },
                            children: ekadashi.benefit
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Fasting Guidelines" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: ekadashi.fastingRules }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground italic mt-2", children: [
                      "Break fast: ",
                      ekadashi.breakFastTiming
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Puja Vidhi — Step by Step" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: ekadashi.pujaVidhi.map((step, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex gap-2 items-start",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent text-xs font-bold font-display flex-shrink-0 mt-0.5", children: [
                            si + 1,
                            "."
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs leading-relaxed text-foreground", children: step })
                        ]
                      },
                      `${ekadashi.id}-step-${si}`
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Sacred Mantra" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-foreground leading-loose", children: ekadashi.mantraDevanagari }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic mt-1", children: ekadashi.mantra }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mt-2", children: ekadashi.gitaVerse })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onToggleObserved(ekadashi.id),
                      "data-ocid": `rituals.ekadashi.mark.${index + 1}`,
                      className: "w-full py-2.5 font-display italic text-xs tracking-widest uppercase transition-smooth rounded",
                      style: {
                        background: observed ? pc.badge : "transparent",
                        border: `1.5px solid ${pc.border}`,
                        color: pc.text
                      },
                      children: observed ? "✓ Marked as Observed — Remove Mark" : "Mark as Observed This Year"
                    }
                  )
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
function EkadashiSection() {
  const [observed, setObserved] = reactExports.useState(
    loadObservedEkadashis
  );
  const [filter, setFilter] = reactExports.useState("all");
  const [search, setSearch] = reactExports.useState("");
  const daysToNext = reactExports.useMemo(() => getDaysToNextEkadashi(), []);
  const nextName = reactExports.useMemo(() => getUpcomingEkadashiName(), []);
  const observedCount = Object.values(observed).filter(Boolean).length;
  const toggleObserved = reactExports.useCallback((id) => {
    setObserved((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      saveObservedEkadashis(updated);
      return updated;
    });
  }, []);
  const filtered = reactExports.useMemo(
    () => EKADASHI_DATA.filter((e) => {
      const matchFilter = filter === "all" || e.paksha === filter;
      const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase()) || e.devanagari.includes(search) || e.month.toLowerCase().includes(search.toLowerCase()) || e.calendarMonth.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    }),
    [filter, search]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "rituals.ekadashi.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "एकादशी दर्शन" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mt-2", children: "All 24 Ekadashis of the Vedic Year — personally recommended by Lord Vishnu" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "morning-banner rounded p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-base font-bold text-primary", children: [
            "🌙 Next Ekadashi in ",
            daysToNext,
            " day",
            daysToNext !== 1 ? "s" : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground italic mt-0.5", children: nextName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-sm text-accent", children: [
            observedCount,
            " / 24"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-muted-foreground", children: "Observed this year" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "h-full rounded-full",
          style: {
            background: "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--saffron)))"
          },
          initial: { width: 0 },
          animate: { width: `${observedCount / 24 * 100}%` },
          transition: { duration: 0.5 }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded p-4 space-y-1.5",
        style: {
          background: "oklch(0.78 0.34 54 / 0.08)",
          border: "1px solid oklch(0.78 0.34 54 / 0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-3", children: "✦ 18 Universal Vedic Rules of Ekadashi ✦" }),
          [
            "Observe complete fast or eat only fruits and roots — no grains, no rice, no wheat, no lentils on any Ekadashi",
            "Wake before sunrise — Brahma Muhurta (4:24–5:12 AM) — take a holy bath and begin mantra recitation",
            "Visit the temple or worship Lord Vishnu/Krishna at home with full devotion and offerings",
            "Observe celibacy (Brahmacharya) throughout the entire Ekadashi day without exception",
            "Do not cut hair, nails, or shave on Ekadashi day — preserve the body's sacred energy",
            "Avoid sleep during daytime — night vigil (Jagran) with kirtan is highly meritorious",
            "Chant Vishnu Sahasranama, Bhagavad Gita Chapter 15, or Hare Krishna Maha Mantra throughout the day",
            "Donate food, clothing, or seva to the poor and to Brahmins — charity multiplies merit on Ekadashi",
            "Do not tell lies, speak harshly, or engage in arguments on this sacred day",
            "Avoid eating at another person's house — cook simple sattvic food yourself if not fasting fully",
            "Maintain inner silence — minimize unnecessary speech — use the day for inner contemplation",
            "Light a ghee diya (lamp) before Vishnu's image throughout the day and night",
            "Read or listen to the Bhagavata Purana or the relevant Ekadashi Mahatmya story for that specific Ekadashi",
            "Do not buy or sell — avoid material transactions on this day — focus only on the sacred",
            "The fast is broken the next morning (Dwadashi) only after sunrise — break with tulsi leaf water and sattvic food",
            "Offer tulsi leaves to Lord Vishnu — tulsi is especially sacred on Ekadashi and multiplies all offerings",
            "Recite the Ekadashi Vrata Katha (story) — each Ekadashi has its own sacred story that must be heard",
            "Surrender the day fully to Lord Vishnu/Krishna — dedicate all actions, thoughts, and speech to him throughout"
          ].map((rule, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-accent text-xs flex-shrink-0 font-display font-bold w-4 mt-0.5",
                style: { color: "oklch(0.62 0.22 48)" },
                children: [
                  idx + 1,
                  "."
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-foreground leading-relaxed", children: rule })
          ] }, rule))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", "aria-label": "Filter Ekadashis", children: [
      ["all", "Shukla", "Krishna"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setFilter(f),
          "data-ocid": `rituals.ekadashi.filter.${f}`,
          className: `px-3 py-1.5 rounded font-body text-xs transition-smooth ${filter === f ? "bg-accent text-accent-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground"}`,
          children: f === "all" ? "All 24" : f === "Shukla" ? "🌕 Shukla (Waxing)" : "🌑 Krishna (Waning)"
        },
        f
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search by name or month…",
          "data-ocid": "rituals.ekadashi.search_input",
          className: "manuscript-input flex-1 min-w-[140px] text-xs py-1.5 px-3",
          "aria-label": "Search Ekadashis"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "rituals.ekadashi.list", children: [
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "manuscript-card p-8 text-center",
          "data-ocid": "rituals.ekadashi.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground", children: "No Ekadashis match your search." })
        }
      ),
      filtered.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        EkadashiCard,
        {
          ekadashi: e,
          index: EKADASHI_DATA.indexOf(e),
          observed: !!observed[e.id],
          onToggleObserved: toggleObserved
        },
        e.id
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm text-primary mb-2", children: '"Of sacrifices, I am the chanting of the holy names."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic", children: "— Bhagavad Gita 10.25" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-3 leading-relaxed", children: "Ekadashi is more than a fast — it is a monthly appointment with Lord Vishnu. Each of the 24 Ekadashis is a doorway to grace." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 p-3 rounded-lg",
          style: {
            background: "oklch(0.78 0.34 54 / 0.08)",
            border: "1px solid oklch(0.78 0.34 54 / 0.3)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-xs text-primary mb-2", children: "✦ Want to explore more sacred fasts?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: 'The "Vrat Throughout Year" tab has all weekly, monthly and annual fasts — Mondays for Shiva, Navratri, Mahashivratri, Janmashtami, Pradosh, Purnima, Amavasya and more.' })
          ]
        }
      )
    ] })
  ] });
}
const FREQ_COLORS = {
  weekly: {
    bg: "oklch(0.80 0.28 54 / 0.10)",
    border: "oklch(0.76 0.28 54 / 0.45)",
    text: "oklch(0.42 0.22 50)",
    badge: "oklch(0.80 0.28 54 / 0.18)"
  },
  monthly: {
    bg: "oklch(0.72 0.26 268 / 0.10)",
    border: "oklch(0.60 0.26 268 / 0.45)",
    text: "oklch(0.36 0.20 264)",
    badge: "oklch(0.60 0.26 268 / 0.15)"
  },
  "bi-monthly": {
    bg: "oklch(0.76 0.24 180 / 0.10)",
    border: "oklch(0.58 0.22 178 / 0.45)",
    text: "oklch(0.34 0.18 178)",
    badge: "oklch(0.58 0.22 180 / 0.15)"
  },
  annual: {
    bg: "oklch(0.78 0.30 36 / 0.10)",
    border: "oklch(0.68 0.28 34 / 0.45)",
    text: "oklch(0.38 0.22 34)",
    badge: "oklch(0.70 0.28 36 / 0.18)"
  }
};
const FREQ_LABELS = {
  weekly: "📅 Weekly",
  monthly: "🌕 Monthly",
  "bi-monthly": "🌗 Bi-Monthly",
  annual: "🌸 Annual"
};
function VratCard({ vrat, index }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const c = FREQ_COLORS[vrat.frequency];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.025 },
      className: "manuscript-card overflow-hidden",
      style: { border: `1.5px solid ${c.border}` },
      "data-ocid": `rituals.vrat.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-0.5 w-full",
            style: {
              background: `linear-gradient(90deg, transparent, ${c.border}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            "data-ocid": `rituals.vrat.toggle.${index + 1}`,
            className: "w-full p-4 text-left flex items-start gap-3",
            "aria-expanded": expanded,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-display mt-0.5",
                  style: {
                    background: c.badge,
                    border: `1px solid ${c.border}`,
                    color: c.text
                  },
                  children: index + 1
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm font-bold text-primary leading-snug", children: vrat.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-0.5", style: { color: c.text }, children: vrat.hindiName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] px-1.5 py-0.5 rounded-full",
                      style: { background: c.badge, color: c.text },
                      children: FREQ_LABELS[vrat.frequency]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground", children: vrat.deity })
                ] }),
                vrat.timing && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-muted-foreground italic mt-1", children: vrat.timing })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/60 text-xs flex-shrink-0 mt-1", children: expanded ? "▲" : "▼" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.24 },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-4 pb-5 border-t pt-4 space-y-4",
                style: { borderColor: c.border },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Sacred Story (Katha)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: vrat.katha })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Puja Vidhi — Step by Step" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: vrat.vidhi.map((step, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex gap-2 items-start",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "text-xs font-bold font-display flex-shrink-0 mt-0.5",
                              style: { color: c.text },
                              children: [
                                si + 1,
                                "."
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs leading-relaxed text-foreground", children: step })
                        ]
                      },
                      `${vrat.id}-vidhi-${si}`
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded p-3 space-y-1.5",
                      style: { background: c.badge, border: `1px solid ${c.border}` },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-[10px] tracking-widest uppercase mb-1",
                            style: { color: c.text },
                            children: "Fasting Rules"
                          }
                        ),
                        vrat.fastingRules.map((rule, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex gap-2 items-start",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xs flex-shrink-0",
                                  style: { color: c.text },
                                  children: "•"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs leading-relaxed text-foreground", children: rule })
                            ]
                          },
                          `${vrat.id}-rule-${ri}`
                        ))
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Spiritual Benefits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: vrat.benefits.map((b, bi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex gap-2 items-start",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-xs flex-shrink-0 mt-0.5", children: "✦" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs leading-relaxed text-foreground", children: b })
                        ]
                      },
                      `${vrat.id}-benefit-${bi}`
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-accent/80 tracking-widest uppercase mb-2", children: "Sacred Mantra" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base font-medium text-foreground leading-loose", children: vrat.mantra.sanskrit }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic mt-1.5 leading-relaxed", children: vrat.mantra.meaning })
                  ] })
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
function VratSection() {
  const [freqFilter, setFreqFilter] = reactExports.useState(
    "all"
  );
  const [search, setSearch] = reactExports.useState("");
  const filtered = reactExports.useMemo(
    () => VRAT_DATA.filter((v) => {
      const matchFreq = freqFilter === "all" || v.frequency === freqFilter;
      const matchSearch = !search || v.name.toLowerCase().includes(search.toLowerCase()) || v.hindiName.includes(search) || v.deity.toLowerCase().includes(search.toLowerCase());
      return matchFreq && matchSearch;
    }),
    [freqFilter, search]
  );
  const counts = reactExports.useMemo(
    () => ({
      weekly: VRAT_DATA.filter((v) => v.frequency === "weekly").length,
      monthly: VRAT_DATA.filter((v) => v.frequency === "monthly").length,
      "bi-monthly": VRAT_DATA.filter((v) => v.frequency === "bi-monthly").length,
      annual: VRAT_DATA.filter((v) => v.frequency === "annual").length
    }),
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "rituals.vrat.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "व्रत — सारे वर्ष के पवित्र उपवास" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mt-2", children: "Vrat Throughout the Year — Weekly, Monthly & Annual Sacred Fasts — Complete Katha, Vidhi & Benefits" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "morning-banner rounded p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm text-primary", children: '"Fasting is not punishment — it is the highest offering of the body to God."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mt-2", children: ["weekly", "monthly", "bi-monthly", "annual"].map((f) => {
        const col = FREQ_COLORS[f];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full",
            style: {
              background: col.badge,
              border: `1px solid ${col.border}`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body text-[10px]",
                  style: { color: col.text },
                  children: FREQ_LABELS[f]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-xs font-bold",
                  style: { color: col.text },
                  children: counts[f]
                }
              )
            ]
          },
          f
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", "aria-label": "Filter by frequency", children: [
      ["all", "weekly", "monthly", "bi-monthly", "annual"].map(
        (f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFreqFilter(f),
            "data-ocid": `rituals.vrat.filter.${f}`,
            className: `px-3 py-1.5 rounded font-body text-xs transition-smooth ${freqFilter === f ? "bg-accent text-accent-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground"}`,
            children: f === "all" ? "All 18" : FREQ_LABELS[f]
          },
          f
        )
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search by name or deity…",
          "data-ocid": "rituals.vrat.search_input",
          className: "manuscript-input flex-1 min-w-[140px] text-xs py-1.5 px-3",
          "aria-label": "Search Vrats"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "rituals.vrat.list", children: [
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "manuscript-card p-8 text-center",
          "data-ocid": "rituals.vrat.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground", children: "No vrats match your search." })
        }
      ),
      filtered.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(VratCard, { vrat: v, index: VRAT_DATA.indexOf(v) }, v.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm text-primary mb-2", children: '"I am the taste of water, the light of the sun and moon."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic", children: "— Bhagavad Gita 7.8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-3 leading-relaxed", children: "Every vrat is an offering. Every fast is a door. Every dawn broken in prayer is a step closer to Krishna's feet." })
    ] })
  ] });
}
function RitualsPage() {
  const [checked, setChecked] = reactExports.useState(
    () => loadChecked()
  );
  const [tab, setTab] = reactExports.useState(
    "practices"
  );
  const [showWarrior, setShowWarrior] = reactExports.useState(false);
  const { addPoints } = usePoints();
  const { awardBadge } = useBadges();
  const { recordPractice } = useStreak();
  const completedCount = reactExports.useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked]
  );
  const allComplete = completedCount >= DAILY_PRACTICES.length;
  reactExports.useEffect(() => {
    saveChecked(checked);
  }, [checked]);
  const togglePractice = reactExports.useCallback(
    (id) => {
      setChecked((prev) => {
        const updated = { ...prev, [id]: !prev[id] };
        const nowComplete = Object.values(updated).filter(Boolean).length >= DAILY_PRACTICES.length;
        if (nowComplete && !allComplete) {
          addPoints("streak", 18);
          awardBadge("challenge-7");
          recordPractice();
          setShowWarrior(true);
          setTimeout(() => setShowWarrior(false), 3200);
        }
        return updated;
      });
    },
    [allComplete, addPoints, awardBadge, recordPractice]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", "data-ocid": "rituals.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showWarrior && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.85 },
        className: "fixed inset-0 z-[300] flex items-center justify-center",
        style: { background: "oklch(0 0 0 / 0.5)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-10 text-center shadow-candlelight max-w-sm mx-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🏅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-3xl text-accent mb-2", children: "Dharma Warrior!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-foreground italic", children: "All 18 sacred practices complete" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mt-3 leading-relaxed", children: '"You have lived this day as a true devotee, Arjun. Krishna is pleased." 🙏' })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end mb-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/guidance",
          "data-ocid": "rituals.header.talk-to-krishna",
          className: "wax-seal-btn text-xs py-2 px-4",
          children: "🦚 Talk to Krishna"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/emergency",
          "data-ocid": "rituals.header.krishna-i-need-you",
          className: "wax-seal-btn-saffron wax-seal-btn text-xs py-2 px-4",
          children: "🙏 Krishna I Need You"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "दैनिक धर्म" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mt-2", children: "18 Sacred Practices — From Brahma Muhurta to Night Prayer" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "manuscript-card p-5 mb-6",
        "data-ocid": "rituals.progress.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProgressRing,
            {
              completed: completedCount,
              total: DAILY_PRACTICES.length
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "h-full rounded-full",
              style: {
                background: "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--saffron)))"
              },
              initial: { width: 0 },
              animate: {
                width: `${completedCount / DAILY_PRACTICES.length * 100}%`
              },
              transition: { duration: 0.5 }
            }
          ) }),
          allComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic text-sm text-accent", children: "🏅 Dharma Warrior — Badge Earned!" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DharmaVaarChakra, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoraChakra, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 p-1 bg-muted/40 rounded mb-6", role: "tablist", children: ["practices", "ekadashi", "vrat"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": tab === t,
        "data-ocid": `rituals.${t}.tab`,
        onClick: () => setTab(t),
        className: `flex-1 py-2.5 px-2 text-[10px] font-display italic tracking-widest uppercase transition-smooth rounded ${tab === t ? "bg-card shadow-sacred text-primary" : "text-muted-foreground hover:text-foreground"}`,
        children: t === "practices" ? "🪔 Daily" : t === "ekadashi" ? "🌙 Ekadashi" : "📅 Vrat Throughout Year"
      },
      t
    )) }),
    tab === "practices" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "rituals.practices.list", children: [
      ["dawn", "morning", "afternoon", "evening", "night"].map(
        (tod) => {
          const group = DAILY_PRACTICES.filter((p) => p.timeOfDay === tod);
          if (group.length === 0) return null;
          const c = TIME_COLORS[tod] ?? TIME_COLORS.morning;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-px flex-1",
                  style: {
                    background: `linear-gradient(90deg, transparent, ${c.border})`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display italic text-xs tracking-widest uppercase",
                  style: { color: c.text },
                  children: TIME_LABELS[tod]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-px flex-1",
                  style: {
                    background: `linear-gradient(90deg, ${c.border}, transparent)`
                  }
                }
              )
            ] }),
            group.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              RitualCard,
              {
                practice: p,
                checked: !!checked[p.id],
                onToggle: togglePractice,
                idx: DAILY_PRACTICES.findIndex((dp) => dp.id === p.id)
              },
              p.id
            ))
          ] }, tod);
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "manuscript-card p-6 text-center mt-6",
          "data-ocid": "rituals.dharma-warrior.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "🏅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-lg text-primary mb-2", children: "धर्म योद्धा — Dharma Warrior" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic leading-relaxed", children: "Complete all 18 daily practices to earn the sacred Dharma Warrior badge, 18 dharma points, and Krishna's personal blessing." }),
            allComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-accent italic mt-3 font-medium", children: "✓ You have earned this today, Arjun! 🙏" })
          ]
        }
      )
    ] }),
    tab === "ekadashi" && /* @__PURE__ */ jsxRuntimeExports.jsx(EkadashiSection, {}),
    tab === "vrat" && /* @__PURE__ */ jsxRuntimeExports.jsx(VratSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-accent/20 pt-6 text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm italic text-muted-foreground", children: [
        '"In every battle of life, Krishna stands with you —',
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
        'as he stood with Arjuna on Kurukshetra."'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            "data-ocid": "rituals.back-home.link",
            className: "font-body text-xs italic text-accent/70 hover:text-accent transition-smooth",
            children: "← Return to Home"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40 text-xs", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/kurukshetra",
            "data-ocid": "rituals.kurukshetra.link",
            className: "font-body text-xs italic text-accent/70 hover:text-accent transition-smooth",
            children: "My Kurukshetra ⚔️"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40 text-xs", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/mala",
            "data-ocid": "rituals.mala.link",
            className: "font-body text-xs italic text-accent/70 hover:text-accent transition-smooth",
            children: "Mala Counter 📿"
          }
        )
      ] })
    ] })
  ] });
}
export {
  RitualsPage
};
