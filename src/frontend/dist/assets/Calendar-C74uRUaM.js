import { j as jsxRuntimeExports, m as motion, r as reactExports, A as AnimatePresence } from "./index-vCKiyWhq.js";
const FESTIVALS_RAW = [
  {
    name: "Guru Purnima",
    date: /* @__PURE__ */ new Date("2025-07-10"),
    dateStr: "Thursday, July 10, 2025",
    meaning: "Day to honour the spiritual teacher who illuminates the path from darkness to light. The guru is the sacred bridge between the seeker and the divine.",
    mantraName: "Om Gurubhyo Namah",
    recommendedVerse: "Gita 4.34",
    rituals: [
      "Offer prayers at your guru's feet",
      "Read teachings of the great saints",
      "Perform 108 prostrations (Sashtanga Namaskar)",
      "Light a ghee lamp at dawn",
      "Fast until noon in reverence"
    ],
    emoji: "🌕",
    auspiciousNote: "Purnima (Full Moon) of Ashadha month. Most auspicious for initiating spiritual learning.",
    nakshatra: "Purva Ashadha",
    tithi: "Purnima — 15th"
  },
  {
    name: "Krishna Janmashtami",
    date: /* @__PURE__ */ new Date("2025-08-16"),
    dateStr: "Saturday, August 16, 2025",
    meaning: "Birth of Lord Krishna, the divine teacher of the Bhagavad Gita. On this sacred midnight the Supreme descended into the world to restore dharma and reveal the eternal truth.",
    mantraName: "Om Namo Bhagavate Vasudevaya",
    recommendedVerse: "Gita 4.7–8",
    rituals: [
      "Fast until midnight (Nirjala or fruit only)",
      "Sing bhajans and kirtans from dusk to midnight",
      "Decorate Krishna's cradle (Jhoola)",
      "Break fast with Panchamrit prasad at midnight",
      "Recite the birth story from Srimad Bhagavatam"
    ],
    emoji: "🪈",
    auspiciousNote: "Rohini Nakshatra — midnight puja is the most sacred moment of the year for Vaishnavas.",
    nakshatra: "Rohini",
    tithi: "Ashtami — 8th"
  },
  {
    name: "Ganesh Chaturthi",
    date: /* @__PURE__ */ new Date("2025-08-27"),
    dateStr: "Wednesday, August 27, 2025",
    meaning: "Festival of Ganesha, remover of obstacles and lord of new beginnings. Invoke his blessings before any sacred endeavour for unimpeded progress.",
    mantraName: "Om Gam Ganapataye Namah",
    recommendedVerse: "Gita 9.22",
    rituals: [
      "Install clay Ganesha idol in the home",
      "Offer modaks (sweet rice dumplings)",
      "Offer durva grass and red flowers",
      "Chant Ganesh Atharvashirsha 21 times",
      "Immerse idol on the 11th day"
    ],
    emoji: "🐘",
    auspiciousNote: "Chaturthi Tithi of Bhadrapada Shukla. Ganesha presides for ten days of celebration.",
    nakshatra: "Hasta",
    tithi: "Chaturthi — 4th"
  },
  {
    name: "Navratri",
    date: /* @__PURE__ */ new Date("2025-09-22"),
    dateStr: "Monday, September 22, 2025",
    meaning: "Nine sacred nights celebrating the divine feminine — Goddess Durga's cosmic victory over Mahishasura. Each night invokes a different form of the Mother Shakti.",
    mantraName: "Om Dum Durgayei Namah",
    recommendedVerse: "Gita 10.34",
    rituals: [
      "Fast or observe a sattvic diet",
      "Recite Durga Saptashati daily",
      "Invoke the nine forms (Navadurga) one each night",
      "Perform Kumari Puja on Navami",
      "Light nine lamps in nine directions"
    ],
    emoji: "🏮",
    auspiciousNote: "Nine nights of Ashwin Navratri. Culminates in Dussehra — victory of dharma.",
    nakshatra: "Ashwini",
    tithi: "Pratipada — 1st"
  },
  {
    name: "Dussehra — Vijaya Dashami",
    date: /* @__PURE__ */ new Date("2025-10-02"),
    dateStr: "Thursday, October 2, 2025",
    meaning: "Victory of Rama over Ravana — the eternal triumph of righteousness over the ten-headed ego. On this day, burn the inner Ravana of pride, greed, and delusion.",
    mantraName: "Jai Shri Ram",
    recommendedVerse: "Gita 4.7",
    rituals: [
      "Read Sundara Kanda of the Ramayana",
      "Burn effigies of Ravana (symbolising the ego)",
      "Perform Ayudha Puja — worship of tools and skill",
      "Begin a new spiritual practice or study"
    ],
    emoji: "🏹",
    auspiciousNote: "Vijaya Dashami — most auspicious day in the year for beginning new sacred ventures.",
    nakshatra: "Shravana",
    tithi: "Dashami — 10th"
  },
  {
    name: "Diwali — Deepavali",
    date: /* @__PURE__ */ new Date("2025-10-20"),
    dateStr: "Monday, October 20, 2025",
    meaning: "Festival of lights — the return of Lord Rama to Ayodhya and Lakshmi's annual blessing. Light dispels ignorance; knowledge is the true Diwali of the soul.",
    mantraName: "Om Shreem Mahalakshmyai Namah",
    recommendedVerse: "Gita 16.3",
    rituals: [
      "Light 108 earthen oil lamps (diyas)",
      "Perform Lakshmi Puja at midnight",
      "Chant the Lakshmi Ashtakam",
      "Give generously to the less fortunate",
      "Fast during the day, feast after puja"
    ],
    emoji: "🪔",
    auspiciousNote: "Amavasya (New Moon) of Kartik — Lakshmi walks the earth on this dark night.",
    nakshatra: "Swati",
    tithi: "Amavasya — New Moon"
  },
  {
    name: "Dev Deepawali",
    date: /* @__PURE__ */ new Date("2025-11-05"),
    dateStr: "Wednesday, November 5, 2025",
    meaning: "When the gods themselves celebrate Diwali. Sacred lamps line the banks of the Ganga at Varanasi, and the devatas are said to descend to join the worship.",
    mantraName: "Om Namah Shivaya",
    recommendedVerse: "Gita 11.15",
    rituals: [
      "Light earthen lamps on riverbanks",
      "Offer prayers to Mother Ganga",
      "Witness the great aarti at a temple",
      "Chant Shiva Sahasranama"
    ],
    emoji: "✨",
    auspiciousNote: "Kartik Purnima — Full Moon. Most sacred night for river bathing at Varanasi and Prayagraj.",
    nakshatra: "Krittika",
    tithi: "Purnima — Full Moon"
  },
  {
    name: "Gita Jayanti",
    date: /* @__PURE__ */ new Date("2025-12-01"),
    dateStr: "Monday, December 1, 2025",
    meaning: "Sacred anniversary of the day Lord Krishna spoke the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra. The holiest day for all Gita devotees.",
    mantraName: "Om Namo Bhagavate Vasudevaya",
    recommendedVerse: "Gita 18.66",
    rituals: [
      "Read the entire Bhagavad Gita in one sitting",
      "Chant Krishna's name 108 times",
      "Fast until noon — Mokshada Ekadashi",
      "Light a ghee lamp at your altar",
      "Recite Gita Mahatmya (glory of the Gita)"
    ],
    emoji: "📖",
    auspiciousNote: "Mokshada Ekadashi in Margashirsha — liberation-granting fast. The most auspicious day for Gita study.",
    nakshatra: "Mrigashira",
    tithi: "Ekadashi — 11th"
  },
  {
    name: "Makar Sankranti",
    date: /* @__PURE__ */ new Date("2026-01-14"),
    dateStr: "Wednesday, January 14, 2026",
    meaning: "The sun enters Capricorn — harvest festival celebrated with kite flying, sesame sweets, and the start of Uttarayan, the auspicious northward journey of the sun.",
    mantraName: "Om Suryaya Namah",
    recommendedVerse: "Gita 8.24",
    rituals: [
      "Donate sesame and jaggery (til-gul)",
      "Take a sacred dip in holy rivers at dawn",
      "Offer water and flowers to the rising sun",
      "Fly kites as a celebration of the new season"
    ],
    emoji: "☀️",
    auspiciousNote: "Uttarayan begins — the sun moves northward, considered auspicious for liberation (moksha).",
    nakshatra: "Uttara Ashadha",
    tithi: "Sankranti — Solar transit"
  },
  {
    name: "Vasant Panchami",
    date: /* @__PURE__ */ new Date("2026-02-02"),
    dateStr: "Monday, February 2, 2026",
    meaning: "Festival of spring and Goddess Saraswati, patron of wisdom, music, and the arts. Seekers and students worship her for knowledge and creative inspiration.",
    mantraName: "Om Aim Sarasvatyai Namah",
    recommendedVerse: "Gita 10.32",
    rituals: [
      "Place books and instruments at Saraswati's feet",
      "Offer yellow flowers and yellow sweets",
      "Begin a new study, art, or spiritual practice",
      "Wear yellow clothes to honour the season"
    ],
    emoji: "🌸",
    auspiciousNote: "Panchami Tithi of Magha Shukla — Saraswati appears in the first bloom of spring.",
    nakshatra: "Dhanishtha",
    tithi: "Panchami — 5th"
  },
  {
    name: "Mahashivratri",
    date: /* @__PURE__ */ new Date("2026-02-26"),
    dateStr: "Thursday, February 26, 2026",
    meaning: "The great night of Shiva — a night of deep meditation and self-transcendence. Shiva performs the cosmic Tandava, and the devoted soul may merge with the infinite.",
    mantraName: "Om Namah Shivaya",
    recommendedVerse: "Gita 7.4",
    rituals: [
      "Perform all-night vigil (jaagran) with prayer and mantra",
      "Abhishek of Shivalinga with milk, honey, and water",
      "Fast throughout the day and night",
      "Chant Om Namah Shivaya 1008 times"
    ],
    emoji: "🔱",
    auspiciousNote: "Chaturdashi (14th night) of Magha Krishna — the darkest and most sacred night for Shiva worship.",
    nakshatra: "Shatabhisha",
    tithi: "Chaturdashi — 14th"
  },
  {
    name: "Holi — Phalguna Purnima",
    date: /* @__PURE__ */ new Date("2026-03-14"),
    dateStr: "Saturday, March 14, 2026",
    meaning: "Festival of colours — spring's arrival and victory of devotion over arrogance. Celebrates Prahlad's unwavering devotion and the burning of Holika by divine grace.",
    mantraName: "Hare Krishna Hare Rama",
    recommendedVerse: "Gita 9.29",
    rituals: [
      "Light the Holika bonfire on the night before",
      "Play with natural, plant-based colours at dawn",
      "Sing devotional songs and kirtan",
      "Share sweets and celebrate with family"
    ],
    emoji: "🎨",
    auspiciousNote: "Phalgun Purnima — Full Moon marks the joyous end of winter.",
    nakshatra: "Purva Phalguni",
    tithi: "Purnima — Full Moon"
  },
  {
    name: "Ram Navami",
    date: /* @__PURE__ */ new Date("2026-04-06"),
    dateStr: "Monday, April 6, 2026",
    meaning: "Birth of Lord Rama, the 7th avatar of Vishnu and the ideal king. His life embodies perfect dharma, compassion, and the highest ideals of human conduct.",
    mantraName: "Sri Ram Jai Ram Jai Jai Ram",
    recommendedVerse: "Gita 4.7",
    rituals: [
      "Read Ramayana passages at noon (birth time)",
      "Chant Ram Naam 1008 times",
      "Offer flowers and tulsi to Lord Rama",
      "Attend or organise Ram Katha"
    ],
    emoji: "🏹",
    auspiciousNote: "Navami (9th day) of Chaitra Shukla — Rama was born at noon in Ayodhya.",
    nakshatra: "Punarvasu",
    tithi: "Navami — 9th"
  },
  {
    name: "Hanuman Jayanti",
    date: /* @__PURE__ */ new Date("2026-04-12"),
    dateStr: "Sunday, April 12, 2026",
    meaning: "Birth of Hanuman, the supreme symbol of devotion, strength, and selfless service. The greatest bhakta who exemplifies total surrender at the lotus feet of the Lord.",
    mantraName: "Om Hum Hanumate Namah",
    recommendedVerse: "Gita 12.13–14",
    rituals: [
      "Recite the Hanuman Chalisa 108 times",
      "Offer red flowers and vermilion (sindoor)",
      "Fast on fruits and sattvic food",
      "Visit Hanuman temple before sunrise"
    ],
    emoji: "🐒",
    auspiciousNote: "Chaitra Purnima — Full Moon. Hanuman was born on this most auspicious full moon night.",
    nakshatra: "Chitra",
    tithi: "Purnima — Full Moon"
  },
  {
    name: "Akshaya Tritiya",
    date: /* @__PURE__ */ new Date("2026-04-28"),
    dateStr: "Tuesday, April 28, 2026",
    meaning: "The imperishable third — considered the most auspicious day in the Hindu calendar. Anything begun today grows without end, for Akshaya means 'that which never diminishes'.",
    mantraName: "Om Namo Bhagavate Vasudevaya",
    recommendedVerse: "Gita 9.22",
    rituals: [
      "Begin a new spiritual practice with intention",
      "Give generously in charity",
      "Plant seeds in the earth as a blessing",
      "Offer 108 Tulsi leaves to Vishnu"
    ],
    emoji: "💛",
    auspiciousNote: "Vaishakha Shukla Tritiya — both sun and moon are simultaneously exalted. Extremely rare.",
    nakshatra: "Rohini",
    tithi: "Tritiya — 3rd"
  },
  {
    name: "Rath Yatra",
    date: /* @__PURE__ */ new Date("2026-06-27"),
    dateStr: "Saturday, June 27, 2026",
    meaning: "The chariot festival of Lord Jagannath, a form of Krishna. The Lord emerges from his temple to bless all beings equally, transcending boundaries of caste or creed.",
    mantraName: "Jai Jagannath",
    recommendedVerse: "Gita 9.29",
    rituals: [
      "Pull the sacred chariot rope as an act of surrender",
      "Sing bhajans along the procession route",
      "Receive prasad with open hands and gratitude",
      "Offer coconut and sweets to Lord Jagannath"
    ],
    emoji: "🏛️",
    auspiciousNote: "Ashadha Shukla Dwitiya — the Lord emerges from his inner sanctum for his annual journey.",
    nakshatra: "Ardra",
    tithi: "Dwitiya — 2nd"
  },
  {
    name: "Guru Purnima 2026",
    date: /* @__PURE__ */ new Date("2026-07-29"),
    dateStr: "Wednesday, July 29, 2026",
    meaning: "Annual honour to all spiritual teachers who have shaped our inner journey. The guru's grace is the sacred boat that carries the sincere seeker across the ocean of samsara.",
    mantraName: "Om Gurubhyo Namah",
    recommendedVerse: "Gita 4.34",
    rituals: [
      "Write a heartfelt letter of gratitude to your guru",
      "Practice the teachings you have received",
      "Light a lamp before your guru's image and meditate",
      "Study a sacred text in silence"
    ],
    emoji: "🌕",
    auspiciousNote: "Ashadha Purnima — Vyas Purnima, honouring Sage Vyasa who codified the Vedas.",
    nakshatra: "Purva Ashadha",
    tithi: "Purnima — Full Moon"
  }
];
function todayStart() {
  const d = /* @__PURE__ */ new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
function daysUntil(date) {
  const today = todayStart();
  const diff = date.getTime() - today.getTime();
  return Math.ceil(diff / (1e3 * 60 * 60 * 24));
}
const VEDIC_MONTHS = [
  "Magha",
  "Phalguna",
  "Chaitra",
  "Vaishakha",
  "Jyeshtha",
  "Ashadha",
  "Shravana",
  "Bhadrapada",
  "Ashwin",
  "Kartik",
  "Margashirsha",
  "Pausha"
];
function currentMonthLabel() {
  const now = /* @__PURE__ */ new Date();
  const en = now.toLocaleString("en-US", { month: "long", year: "numeric" });
  const skIdx = (now.getMonth() + 9) % 12;
  return `${en} · ${VEDIC_MONTHS[skIdx]} Maasa`;
}
function sortedFestivals() {
  const now = todayStart();
  const upcoming = FESTIVALS_RAW.filter((f) => f.date >= now).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  const past = FESTIVALS_RAW.filter((f) => f.date < now).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  return { upcoming, past };
}
function nearTodayFestival() {
  return FESTIVALS_RAW.find((f) => {
    const d = daysUntil(f.date);
    return d >= 0 && d <= 3;
  }) ?? null;
}
function formatDaysChip(date) {
  const d = daysUntil(date);
  if (d === 0) return { text: "Today — Auspicious!", urgent: true };
  if (d === 1) return { text: "Tomorrow", urgent: true };
  if (d <= 7) return { text: `In ${d} days`, urgent: true };
  if (d < 0) return { text: "Passed", urgent: false };
  return { text: `${d} days hence`, urgent: false };
}
function FestivalEntry({
  festival,
  highlight,
  isPast,
  index
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const { text: daysText, urgent } = formatDaysChip(festival.date);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.06, 0.4) },
      className: `border-b border-border/40 last:border-0 transition-smooth ${isPast ? "opacity-50" : ""}`,
      "data-ocid": `festival-card-${festival.name.toLowerCase().replace(/\s+/g, "-")}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `py-5 px-5 ${highlight ? "bg-accent/5" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[0.65rem] tracking-[0.18em] uppercase text-accent/60 font-bold", children: festival.dateStr.split(",")[0] }),
            festival.tithi && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/30 text-xs", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[0.65rem] italic text-muted-foreground", children: festival.tithi })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-display text-[0.6rem] font-bold tracking-wider uppercase flex-shrink-0 ${urgent ? "text-accent" : "text-muted-foreground/60"}`,
              children: daysText
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-2xl flex-shrink-0 leading-tight mt-0.5",
              "aria-hidden": "true",
              children: festival.emoji
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `font-display text-xl font-bold italic leading-tight ${highlight ? "text-primary" : "text-foreground"}`,
                children: festival.name
              }
            ),
            festival.nakshatra && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-[0.65rem] italic text-muted-foreground mt-0.5", children: [
              "Nakshatra: ",
              festival.nakshatra
            ] })
          ] }),
          highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-[0.6rem] tracking-widest uppercase text-accent/80 font-bold flex-shrink-0 border border-accent/30 px-2 py-0.5",
              style: { borderRadius: "2px" },
              children: "Next"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/80 leading-relaxed mt-3 pl-9", children: festival.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pl-9 flex flex-wrap gap-x-5 gap-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs italic text-accent/80", children: [
            "Mantra: ",
            festival.mantraName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs italic text-muted-foreground", children: [
            "Verse: ",
            festival.recommendedVerse
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((p) => !p),
            className: "font-body text-xs italic text-accent/70 hover:text-accent transition-smooth flex items-center gap-1.5",
            "aria-expanded": expanded,
            children: expanded ? "▲ Collapse rituals" : "▼ Show rituals & details"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.22 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pl-9 grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-[0.18em] uppercase text-accent/60 font-bold mb-2", children: "Vidhis — Sacred Rituals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2", children: festival.rituals.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2.5 text-sm font-body text-foreground/75 leading-snug",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-accent/60 font-bold flex-shrink-0 text-xs mt-0.5", children: [
                        i + 1,
                        "."
                      ] }),
                      r
                    ]
                  },
                  r
                )) })
              ] }),
              festival.auspiciousNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-[0.18em] uppercase text-accent/60 font-bold mb-2", children: "Shubha Samay — Auspicious Note" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground leading-relaxed", children: festival.auspiciousNote })
              ] })
            ] })
          }
        ) })
      ] })
    }
  );
}
const TITHIS = [
  "Pratipada",
  "Dvitiya",
  "Tritiya",
  "Chaturthi",
  "Panchami",
  "Shashthi",
  "Saptami",
  "Ashtami",
  "Navami",
  "Dashami",
  "Ekadashi",
  "Dvadashi",
  "Trayodashi",
  "Chaturdashi",
  "Purnima/Amavasya",
  "Pratipada",
  "Dvitiya",
  "Tritiya",
  "Chaturthi",
  "Panchami",
  "Shashthi",
  "Saptami",
  "Ashtami",
  "Navami",
  "Dashami",
  "Ekadashi",
  "Dvadashi",
  "Trayodashi",
  "Chaturdashi",
  "Amavasya"
];
const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishtha",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati"
];
const YOGAS = [
  "Vishkamba",
  "Priti",
  "Ayushman",
  "Saubhagya",
  "Shobhana",
  "Atiganda",
  "Sukarma",
  "Dhriti",
  "Shula",
  "Ganda",
  "Vriddhi",
  "Dhruva",
  "Vyaghata",
  "Harshana",
  "Vajra",
  "Siddhi",
  "Vyatipata",
  "Variyana",
  "Parigha",
  "Shiva",
  "Siddha",
  "Sadhya",
  "Shubha",
  "Shukla",
  "Brahma",
  "Indra",
  "Vaidhriti"
];
const KARANAS = [
  "Bava",
  "Balava",
  "Kaulava",
  "Taitila",
  "Garija",
  "Vanija",
  "Vishti",
  "Bava",
  "Balava",
  "Kaulava",
  "Taitila"
];
const RAHU_KAAL = {
  0: "4:30 PM – 6:00 PM",
  1: "7:30 AM – 9:00 AM",
  2: "3:00 PM – 4:30 PM",
  3: "12:00 PM – 1:30 PM",
  4: "1:30 PM – 3:00 PM",
  5: "10:30 AM – 12:00 PM",
  6: "9:00 AM – 10:30 AM"
};
const GULIK_KAAL = {
  0: "3:00 PM – 4:30 PM",
  1: "1:30 PM – 3:00 PM",
  2: "12:00 PM – 1:30 PM",
  3: "10:30 AM – 12:00 PM",
  4: "9:00 AM – 10:30 AM",
  5: "7:30 AM – 9:00 AM",
  6: "6:00 AM – 7:30 AM"
};
const YAMAGANDA = {
  0: "12:00 PM – 1:30 PM",
  1: "10:30 AM – 12:00 PM",
  2: "9:00 AM – 10:30 AM",
  3: "7:30 AM – 9:00 AM",
  4: "6:00 AM – 7:30 AM",
  5: "4:30 PM – 6:00 PM",
  6: "3:00 PM – 4:30 PM"
};
const VAR_NAMES = [
  "Ravivara",
  "Somavara",
  "Mangalavara",
  "Budhavara",
  "Guruvara",
  "Shukravara",
  "Shanivara"
];
function getPanchang() {
  const now = /* @__PURE__ */ new Date();
  const day = now.getDay();
  const dateNum = now.getDate();
  const moonDay = ((dateNum - 1) % 30 + 30) % 30;
  return {
    tithi: TITHIS[moonDay] ?? "Pratipada",
    nakshatra: NAKSHATRAS[(dateNum * 3 + day) % NAKSHATRAS.length] ?? "Rohini",
    yoga: YOGAS[(dateNum + day * 2) % YOGAS.length] ?? "Siddha",
    karana: KARANAS[dateNum * 2 % KARANAS.length] ?? "Bava",
    var: VAR_NAMES[day] ?? "Ravivara",
    rahuKaal: RAHU_KAAL[day] ?? "",
    gulikKaal: GULIK_KAAL[day] ?? "",
    yamaganda: YAMAGANDA[day] ?? "",
    brahmaMuhurta: "4:24 AM – 5:12 AM",
    abhijitMuhurta: "11:48 AM – 12:36 PM",
    day
  };
}
const CHOGHADIYA_NAMES = [
  "Udveg",
  "Char",
  "Labh",
  "Amrit",
  "Kaal",
  "Shubh",
  "Rog",
  "Kaal"
];
const CHOGHADIYA_COLORS = {
  Amrit: "oklch(0.52 0.22 140 / 0.25)",
  Labh: "oklch(0.70 0.26 52 / 0.2)",
  Shubh: "oklch(0.62 0.24 268 / 0.2)",
  Char: "oklch(0.65 0.20 200 / 0.2)",
  Kaal: "oklch(0.42 0.12 26 / 0.2)",
  Rog: "oklch(0.55 0.22 16 / 0.15)",
  Udveg: "oklch(0.55 0.18 46 / 0.18)"
};
function getChoghadiya(dayIndex) {
  const now = /* @__PURE__ */ new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const startHours = [6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5];
  const offsets = {
    0: 0,
    1: 6,
    2: 3,
    3: 5,
    4: 2,
    5: 4,
    6: 1
  };
  const offset = offsets[dayIndex] ?? 0;
  return startHours.map((h, i) => {
    const nameIdx = (i + offset) % CHOGHADIYA_NAMES.length;
    const endH = startHours[i + 1] ?? 18;
    const isNow = currentHour >= h && currentHour < endH;
    const fmtH = (hr) => {
      const h12 = Math.floor(hr) % 12 || 12;
      const m = Math.round(hr % 1 * 60);
      return `${h12}:${m.toString().padStart(2, "0")} ${Math.floor(hr) < 12 ? "AM" : "PM"}`;
    };
    return {
      name: CHOGHADIYA_NAMES[nameIdx] ?? "Amrit",
      time: `${fmtH(h)} – ${fmtH(endH)}`,
      isNow
    };
  });
}
function CalendarPage() {
  const { upcoming, past } = sortedFestivals();
  const nearFestival = nearTodayFestival();
  const monthLabel = currentMonthLabel();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const panchang = getPanchang();
  const choghadiya = getChoghadiya(panchang.day);
  const today = /* @__PURE__ */ new Date();
  const vikramYear = currentYear + 56;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center pb-6 pt-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/60 text-base", children: "✦ ॐ ✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.65rem] tracking-[0.25em] uppercase text-accent/60 font-bold mb-1", children: "Sanatan Dharma Panchang — Janmabhoomi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header mb-2", children: "Hindu Sacred Calendar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mb-1", children: monthLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground/60 font-bold", children: [
            "Vikram Samvat ",
            vikramYear,
            " · ",
            currentYear
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "manuscript-card p-5 mb-6",
        "data-ocid": "calendar.panchang.today",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[0.62rem] tracking-[0.22em] uppercase text-accent/70 font-bold mb-3", children: [
            "✦ Today's Panchang —",
            " ",
            today.toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
            { label: "Tithi (Lunar Day)", value: panchang.tithi, icon: "🌙" },
            {
              label: "Nakshatra (Star)",
              value: panchang.nakshatra,
              icon: "⭐"
            },
            { label: "Yoga", value: panchang.yoga, icon: "🕉️" },
            { label: "Karana (Half-day)", value: panchang.karana, icon: "🌿" },
            { label: "Var (Weekday)", value: panchang.var, icon: "📅" },
            { label: "Rahu Kaal ⚠️", value: panchang.rahuKaal, icon: "⚡" }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-2.5 rounded-lg",
              style: {
                background: "oklch(0.95 0.06 68 / 0.65)",
                border: "1px solid oklch(0.72 0.24 52 / 0.28)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-[0.58rem] uppercase tracking-wider mb-0.5",
                    style: { color: "oklch(0.58 0.16 46 / 0.8)" },
                    children: [
                      item.icon,
                      " ",
                      item.label
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-sm font-bold italic",
                    style: { color: "oklch(0.28 0.12 36)" },
                    children: item.value
                  }
                )
              ]
            },
            item.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mb-3 p-3 rounded-lg",
              style: {
                background: "oklch(0.72 0.28 140 / 0.08)",
                border: "1px solid oklch(0.55 0.22 140 / 0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-2",
                    style: { color: "oklch(0.38 0.18 140)" },
                    children: "✦ Auspicious Muhurtas Today"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.48 0.14 46)" }, children: "🌅 Brahma Muhurta:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-bold",
                        style: { color: "oklch(0.38 0.16 140)" },
                        children: panchang.brahmaMuhurta
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.48 0.14 46)" }, children: "☀️ Abhijit Muhurta:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-bold",
                        style: { color: "oklch(0.38 0.16 140)" },
                        children: panchang.abhijitMuhurta
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.48 0.14 46)" }, children: "⚡ Gulik Kaal:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.52 0.16 30)" }, children: panchang.gulikKaal })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.48 0.14 46)" }, children: "⚠️ Yamaganda:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.52 0.16 30)" }, children: panchang.yamaganda })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs font-bold italic mb-2",
                style: { color: "oklch(0.38 0.16 46)" },
                children: "⏰ Choghadiya — Today's Time Slots"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: choghadiya.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-2.5 py-2 rounded-lg",
                style: {
                  background: c.isNow ? "oklch(0.72 0.28 52 / 0.20)" : CHOGHADIYA_COLORS[c.name] ?? "oklch(0.93 0.05 68 / 0.5)",
                  border: c.isNow ? "1.5px solid oklch(0.72 0.28 52 / 0.55)" : "1px solid oklch(0.72 0.20 54 / 0.22)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display text-xs font-bold italic",
                      style: {
                        color: c.isNow ? "oklch(0.38 0.20 46)" : "oklch(0.45 0.14 46)"
                      },
                      children: [
                        c.name,
                        c.isNow ? " ← Now" : ""
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[0.58rem]",
                      style: { color: "oklch(0.55 0.12 46)" },
                      children: c.time
                    }
                  )
                ]
              },
              c.time
            )) })
          ] })
        ]
      }
    ),
    nearFestival && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.15 },
        className: "morning-banner mb-6 flex items-start gap-3",
        "data-ocid": "auspicious-banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex-shrink-0 mt-0.5", children: nearFestival.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-sm font-bold italic text-primary", children: [
              nearFestival.name,
              daysUntil(nearFestival.date) === 0 ? " — Today. Most auspicious. 🙏" : daysUntil(nearFestival.date) === 1 ? " — Tomorrow. Prepare your heart." : ` — In ${daysUntil(nearFestival.date)} days. Begin your preparations.`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs italic text-muted-foreground mt-0.5", children: [
              "Mantra: ",
              nearFestival.mantraName,
              " · Verse:",
              " ",
              nearFestival.recommendedVerse
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[0.65rem] tracking-[0.2em] uppercase text-accent/60 font-bold px-3", children: "Agami Utsava — Upcoming Festivals" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border/50",
          style: { borderRadius: "2px" },
          children: [
            upcoming.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FestivalEntry,
              {
                festival: f,
                index: i,
                highlight: i === 0
              },
              `${f.name}-${f.dateStr}`
            )),
            upcoming.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground", children: "All festivals of this cycle have concluded." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-wider text-accent/60 mt-1", children: "The sacred wheel of time turns again. ॥" })
            ] })
          ]
        }
      )
    ] }),
    past.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[0.65rem] tracking-[0.2em] uppercase text-accent/60 font-bold px-3", children: "Atita Utsava — Festivals Passed" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "border border-border/50",
          style: { borderRadius: "2px" },
          children: past.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FestivalEntry,
            {
              festival: f,
              index: i,
              isPast: true
            },
            `${f.name}-${f.dateStr}-past`
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/40 text-sm", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground leading-relaxed max-w-sm mx-auto", children: "Dates follow the Gregorian calendar. Actual tithis and nakshatra positions may vary by region and traditional lunar calculation. Consult a jyotishi for exact muhurtas." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.6rem] tracking-[0.18em] uppercase text-accent/50 font-bold mt-3", children: "Sarve Jana Sukhino Bhavantu" })
    ] })
  ] });
}
export {
  CalendarPage
};
