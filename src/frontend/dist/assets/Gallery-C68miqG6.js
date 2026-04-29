import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-vCKiyWhq.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
import { KURUKSHETRA_DAYS } from "./Videos-iwDf8EYI.js";
const CATEGORIES = [
  {
    id: "vrindavan-leelas",
    name: "Vrindavan Leelas",
    nameSk: "वृन्दावन लीला",
    locked: false,
    pts: 0,
    hue: 54
  },
  {
    id: "mathura-birth",
    name: "Mathura Birth",
    nameSk: "मथुरा जन्म",
    locked: false,
    pts: 0,
    hue: 46
  },
  {
    id: "govardhan-dharana",
    name: "Govardhan Dharana",
    nameSk: "गोवर्धन धारण",
    locked: false,
    pts: 0,
    hue: 148
  },
  {
    id: "rasa-lila",
    name: "Rasa Lila",
    nameSk: "रास लीला",
    locked: false,
    pts: 0,
    hue: 340
  },
  {
    id: "kurukshetra-gita",
    name: "Kurukshetra — Gita",
    nameSk: "कुरुक्षेत्र गीता",
    locked: false,
    pts: 0,
    hue: 28
  },
  {
    id: "gokul-pastimes",
    name: "Gokul Pastimes",
    nameSk: "गोकुल लीला",
    locked: false,
    pts: 0,
    hue: 52
  },
  {
    id: "gopis-radha",
    name: "Gopis & Radha",
    nameSk: "गोपी राधा",
    locked: false,
    pts: 0,
    hue: 340
  },
  {
    id: "vrindavan-pastimes",
    name: "Vrindavan Pastimes",
    nameSk: "वृन्दावन लीला",
    locked: false,
    pts: 0,
    hue: 148
  },
  {
    id: "dwaraka-kingdom",
    name: "Dwaraka Kingdom",
    nameSk: "द्वारका राज्य",
    locked: false,
    pts: 0,
    hue: 268
  },
  {
    id: "divine-love-stories",
    name: "Divine Love Stories",
    nameSk: "दिव्य प्रेम",
    locked: true,
    pts: 100,
    hue: 340
  },
  {
    id: "krishna-with-flute",
    name: "Krishna with Flute",
    nameSk: "वेणुगोपाल",
    locked: true,
    pts: 200,
    hue: 54
  },
  {
    id: "sacred-geometry",
    name: "Sacred Geometry",
    nameSk: "पवित्र ज्यामिति",
    locked: true,
    pts: 300,
    hue: 220
  },
  {
    id: "celestial-vision",
    name: "Celestial Vision",
    nameSk: "दिव्य दर्शन",
    locked: true,
    pts: 400,
    hue: 268
  },
  {
    id: "temple-art",
    name: "Temple Art",
    nameSk: "मंदिर कला",
    locked: true,
    pts: 500,
    hue: 46
  },
  {
    id: "modern-devotion",
    name: "Modern Devotion",
    nameSk: "आधुनिक भक्ति",
    locked: true,
    pts: 600,
    hue: 32
  },
  {
    id: "meditation-mandalas",
    name: "Meditation Mandalas",
    nameSk: "ध्यान मण्डल",
    locked: true,
    pts: 700,
    hue: 280
  },
  {
    id: "mystical-darshan",
    name: "Mystical Darshan",
    nameSk: "रहस्यमय दर्शन",
    locked: true,
    pts: 800,
    hue: 52
  },
  {
    id: "rare-paintings",
    name: "Rare Paintings",
    nameSk: "दुर्लभ चित्र",
    locked: true,
    pts: 1e3,
    hue: 44
  }
];
function getCatMeta(catId) {
  return CATEGORIES.find((c) => c.id === catId) ?? CATEGORIES[0];
}
const ARTWORKS = [
  // ── Vrindavan Leelas (FREE) ─────────────────────────────────────────────────
  {
    id: "vl-1",
    title: "Radha and Krishna in the Sacred Grove",
    titleSanskrit: "राधा कृष्ण वन विहार",
    category: "vrindavan-leelas",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 9.34",
    verseText: "Fill your mind with Me, be My devotee, worship Me, bow down to Me. So shall you come to Me. I promise you truly, for you are dear to Me.",
    artist: "Pahari miniature, 18th century",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "vl-2",
    title: "Krishna and Radha on the Swing — Kangra Painting",
    titleSanskrit: "राधा कृष्ण झूला",
    category: "vrindavan-leelas",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    verse: "BG 10.41",
    verseText: "Whatever exists that is powerful, beautiful, or illustrious — know that it has sprung from a fraction of My splendour.",
    artist: "Kangra school, c. 1800",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "vl-3",
    title: "Lord Krishna with the Sacred Cow",
    titleSanskrit: "गोपाल गो सेवा",
    category: "vrindavan-leelas",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lord_Krishna_with_cow.jpg/640px-Lord_Krishna_with_cow.jpg",
    verse: "BG 10.28",
    verseText: "Among cows I am the wish-fulfilling Kamadhenu; among procreators I am Kandarpa, the god of love.",
    artist: "Traditional devotional art",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Mathura Birth (FREE) ────────────────────────────────────────────────────
  {
    id: "mb-1",
    title: "Radha Krishna — Tanjore Style",
    titleSanskrit: "राधा कृष्ण तंजावुर",
    category: "mathura-birth",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    verse: "BG 4.7",
    verseText: "Whenever there is a decline of righteousness and rise of unrighteousness, O Arjuna, I incarnate Myself.",
    artist: "Tanjore painting, South India",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "mb-2",
    title: "Radha Krishna — Sacred Union",
    titleSanskrit: "राधा कृष्ण युगल",
    category: "mathura-birth",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 4.9",
    verseText: "One who knows, in truth, My divine birth and activities, does not, upon leaving the body, take birth again, but comes to Me, O Arjuna.",
    artist: "Traditional miniature painting",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "mb-3",
    title: "Krishna and Arjuna on the Sacred Chariot",
    titleSanskrit: "रथ पर कृष्ण अर्जुन",
    category: "mathura-birth",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    verse: "BG 11.33",
    verseText: "Therefore arise and obtain glory. Conquer the enemies and enjoy the prosperous kingdom. They have already been slain by Me; be just the instrument, O Arjuna.",
    artist: "Traditional devotional art",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Govardhan Dharana (FREE) ────────────────────────────────────────────────
  {
    id: "gov-1",
    title: "Narayana — The Supreme Lord",
    titleSanskrit: "नारायण",
    category: "govardhan-dharana",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    verse: "BG 10.42",
    verseText: "But of what use is such detailed knowledge to you, O Arjuna? I support this entire universe by entering it with just one fragment of Myself.",
    artist: "Traditional Vishnu art",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "gov-2",
    title: "Lakshmi Narayana — Divine Couple",
    titleSanskrit: "लक्ष्मी नारायण",
    category: "govardhan-dharana",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    verse: "BG 7.7",
    verseText: "There is nothing higher than Me, O Arjuna. All this is strung on Me as clusters of gems on a string.",
    artist: "Traditional temple painting",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "gov-3",
    title: "Govardhan Puja — Sacred Mountain",
    titleSanskrit: "गोवर्धन पूजा",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    category: "govardhan-dharana",
    verse: "BG 12.14",
    verseText: "One who is free from wants, who is pure, clever, impartial, and unafflicted, who has renounced all undertakings — such a devotee is dear to Me.",
    artist: "Nathdwara Pichwai painting",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Rasa Lila (FREE) ────────────────────────────────────────────────────────
  {
    id: "rl-1",
    title: "Rasa Lila — Divine Dance of Krishna",
    titleSanskrit: "रास लीला",
    category: "rasa-lila",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 10.35",
    verseText: "Among all hymns I am the Brihatsaman; among poetic metres I am the Gayatri; among months I am Margashirsha; among seasons I am spring.",
    artist: "Pahari school painting",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "rl-2",
    title: "Radha and Krishna by the Yamuna",
    titleSanskrit: "यमुना तट राधा कृष्ण",
    category: "rasa-lila",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    verse: "BG 7.8",
    verseText: "I am the taste of water, O Arjuna, I am the light of the sun and moon, the syllable Om in all the Vedas.",
    artist: "Kangra miniature, 18th century",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "rl-3",
    title: "Madhubani — Radha Krishna Dance",
    titleSanskrit: "मधुबनी राधा कृष्ण",
    category: "rasa-lila",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lord_Krishna_with_cow.jpg/640px-Lord_Krishna_with_cow.jpg",
    verse: "BG 11.54",
    verseText: "By devotion alone can I be seen and known in this form and as I truly am, and entered into, O Arjuna.",
    artist: "Madhubani folk painting",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Kurukshetra — Gita (FREE) ───────────────────────────────────────────────
  {
    id: "kg-1",
    title: "Krishna Speaks the Bhagavad Gita",
    titleSanskrit: "गीता उपदेश",
    category: "kurukshetra-gita",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    verse: "BG 2.20",
    verseText: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing and primeval.",
    artist: "Raja Ravi Varma / Traditional",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "kg-2",
    title: "Arjuna's Grief Before Battle",
    titleSanskrit: "विषाद योग",
    category: "kurukshetra-gita",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 2.47",
    verseText: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of results, and never be attached to inaction.",
    artist: "Mysore traditional painting",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "kg-3",
    title: "Vishwaroopa — The Cosmic Vision",
    titleSanskrit: "विश्वरूप दर्शन",
    category: "kurukshetra-gita",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    verse: "BG 11.12",
    verseText: "If hundreds of thousands of suns were to rise at once into the sky, their radiance might resemble the effulgence of the Supreme Person in that universal form.",
    artist: "Traditional sacred art",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Gokul Pastimes (FREE) ───────────────────────────────────────────────────
  {
    id: "gp-1",
    title: "Baby Krishna — Makhan Chor",
    titleSanskrit: "माखन चोर बाल कृष्ण",
    category: "gokul-pastimes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    verse: "BG 9.22",
    verseText: "For those who worship Me with devotion, meditating on My transcendental form — to them I carry what they lack and preserve what they have.",
    artist: "Tanjore folk style",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "gp-2",
    title: "Yashoda and Baby Krishna",
    titleSanskrit: "यशोदा बाल लीला",
    category: "gokul-pastimes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    verse: "BG 9.17",
    verseText: "I am the father of this universe, the mother, the support, the grandfather, the sacred syllable, the Vedas, and what ought to be known.",
    artist: "Traditional Gokul devotional art",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "gp-3",
    title: "Gokul Village — The Sacred Land",
    titleSanskrit: "गोकुल ग्राम",
    category: "gokul-pastimes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 8.14",
    verseText: "For those who always remember Me without deviation, I am easily attainable because of their constant engagement in devotional service.",
    artist: "Pahari school",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Gopis & Radha (FREE) ────────────────────────────────────────────────────
  {
    id: "gr-1",
    title: "Radha — The Supreme Devotee",
    titleSanskrit: "राधा रानी",
    category: "gopis-radha",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 11.54",
    verseText: "By devotion alone can I be seen and known in this form and as I truly am, and entered into, O Arjuna.",
    artist: "Traditional Braj art",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "gr-2",
    title: "Gopis Awaiting Krishna's Flute",
    titleSanskrit: "गोपी विरह",
    category: "gopis-radha",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    verse: "BG 9.29",
    verseText: "I am equally disposed to all living beings; I have neither enemies nor favourites. But those who worship Me with devotion are in Me, and I am in them.",
    artist: "Kangra miniature painting",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "gr-3",
    title: "Radha Offering Lotus to Krishna",
    titleSanskrit: "राधा पुष्प अर्पण",
    category: "gopis-radha",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lord_Krishna_with_cow.jpg/640px-Lord_Krishna_with_cow.jpg",
    verse: "BG 9.26",
    verseText: "If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it.",
    artist: "Nathdwara Pichwai",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Vrindavan Pastimes (FREE) ───────────────────────────────────────────────
  {
    id: "vp-1",
    title: "Krishna Fluting Under Kadamba",
    titleSanskrit: "कदम्ब वंशी धारी",
    category: "vrindavan-pastimes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    verse: "BG 10.35",
    verseText: "Among hymns I am the Brihatsaman, among metres I am the Gayatri, among months I am Margashirsha, among seasons I am spring.",
    artist: "Traditional sacred painting",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "vp-2",
    title: "Kaliya Naag Mardana",
    titleSanskrit: "कालिया मर्दन",
    category: "vrindavan-pastimes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    verse: "BG 7.7",
    verseText: "There is nothing higher than Me, O Arjuna. Everything is strung on Me as a cluster of gems on a string.",
    artist: "Orissa Pattachitra style",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "vp-3",
    title: "Govardhan Hill Sacred Landscape",
    titleSanskrit: "गोवर्धन पर्वत",
    category: "vrindavan-pastimes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    verse: "BG 9.16",
    verseText: "I am the ritual, I am the sacrifice, I am the offering, I am the herb, I am the chant, I am the ghee, I am the fire, and I am the offering.",
    artist: "Nathdwara Pichwai",
    isLocked: false,
    pointsRequired: 0
  },
  // ── Dwaraka Kingdom (FREE) ──────────────────────────────────────────────────
  {
    id: "dk-1",
    title: "Dwarkadhish — Lord of Dwarka",
    titleSanskrit: "द्वारकाधीश",
    category: "dwaraka-kingdom",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 10.32",
    verseText: "Among all creations I am the beginning, the end, and also the middle. Among sciences I am the science of the self, and among those who debate I am the divine logic.",
    artist: "Traditional Dwarka temple art",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "dk-2",
    title: "Rukmini Vivaha — Divine Marriage",
    titleSanskrit: "रुक्मिणी विवाह",
    category: "dwaraka-kingdom",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    verse: "BG 7.11",
    verseText: "I am the strength of the strong, devoid of desire and passion. I am sex life which is not contrary to religious principles, O Arjuna.",
    artist: "Tanjore style",
    isLocked: false,
    pointsRequired: 0
  },
  {
    id: "dk-3",
    title: "Krishna as King of Dwarka",
    titleSanskrit: "द्वारका नरेश",
    category: "dwaraka-kingdom",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    verse: "BG 9.17",
    verseText: "I am the father of this universe, the mother, the sustainer, the grandfather, the purifier, the Om, and also the Rig, Sama and Yajur Vedas.",
    artist: "Traditional royal portrait",
    isLocked: false,
    pointsRequired: 0
  },
  // ════════════════════════════════════════════════════════════════════
  // LOCKED CATEGORIES — require points to unlock
  // ════════════════════════════════════════════════════════════════════
  // ── Divine Love Stories (100 pts) ───────────────────────────────────────────
  {
    id: "dl-1",
    title: "Radha Krishna — Eternal Bond",
    titleSanskrit: "नित्य प्रेम",
    category: "divine-love-stories",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 9.34",
    verseText: "Always think of Me, be devoted to Me, worship Me, bow down to Me. So shall you come to Me. I promise you truly, for you are dear to Me.",
    artist: "Classical miniature, 18th c.",
    isLocked: true,
    pointsRequired: 100
  },
  {
    id: "dl-2",
    title: "Radha Awaiting Her Beloved",
    titleSanskrit: "राधा विरह",
    category: "divine-love-stories",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 8.14",
    verseText: "For those who remember Me always, without deviation, for them I am easily attainable because of their constant devotion.",
    artist: "Pahari miniature",
    isLocked: true,
    pointsRequired: 100
  },
  {
    id: "dl-3",
    title: "The Sacred Grove — Radha Krishna",
    titleSanskrit: "वन विहार",
    category: "divine-love-stories",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    verse: "BG 10.41",
    verseText: "Whatever exists that is powerful, beautiful, or glorious — know that it has sprung from a fraction of My splendour.",
    artist: "Kangra painting, c. 1800",
    isLocked: true,
    pointsRequired: 100
  },
  // ── Krishna with Flute (200 pts) ────────────────────────────────────────────
  {
    id: "kf-1",
    title: "Venugopala — The Divine Flautist",
    titleSanskrit: "वेणुगोपाल",
    category: "krishna-with-flute",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lord_Krishna_with_cow.jpg/640px-Lord_Krishna_with_cow.jpg",
    verse: "BG 7.8",
    verseText: "I am the taste in water, the light of the sun and moon, the sacred syllable Om in the Vedic mantras.",
    artist: "Traditional devotional",
    isLocked: true,
    pointsRequired: 200
  },
  {
    id: "kf-2",
    title: "Bansuri — The Calling Flute",
    titleSanskrit: "बंसुरी",
    category: "krishna-with-flute",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    verse: "BG 10.35",
    verseText: "Among hymns I am the Brihatsaman; among poetic metres I am the Gayatri.",
    artist: "Nathdwara style",
    isLocked: true,
    pointsRequired: 200
  },
  {
    id: "kf-3",
    title: "Murali Manohar — Flute in the Forest",
    titleSanskrit: "मुरली मनोहर",
    category: "krishna-with-flute",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 15.15",
    verseText: "I am seated in the hearts of all living beings; from Me come memory, knowledge and forgetfulness.",
    artist: "Pahari school",
    isLocked: true,
    pointsRequired: 200
  },
  // ── Sacred Geometry (300 pts) ───────────────────────────────────────────────
  {
    id: "sg-1",
    title: "Sri Yantra — The Sacred Geometry",
    titleSanskrit: "श्री यंत्र",
    category: "sacred-geometry",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    verse: "BG 7.10",
    verseText: "Know Me to be the eternal seed of all beings, O Arjuna. I am the intelligence of the intelligent and the heroism of the heroic.",
    artist: "Tantric sacred art",
    isLocked: true,
    pointsRequired: 300
  },
  {
    id: "sg-2",
    title: "Sacred Mandala — Divine Pattern",
    titleSanskrit: "पवित्र मण्डल",
    category: "sacred-geometry",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    verse: "BG 13.17",
    verseText: "That is the light of all lights beyond all darkness; it is knowledge, the knowable and the goal of all knowledge.",
    artist: "Vedic geometric tradition",
    isLocked: true,
    pointsRequired: 300
  },
  {
    id: "sg-3",
    title: "Chakra Yantra — Cosmic Wheel",
    titleSanskrit: "चक्र यंत्र",
    category: "sacred-geometry",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    verse: "BG 7.7",
    verseText: "There is nothing higher than Me, O Arjuna. Everything is strung on Me as clusters of gems on a string.",
    artist: "Tantric manuscript",
    isLocked: true,
    pointsRequired: 300
  },
  // ── Celestial Vision (400 pts) ──────────────────────────────────────────────
  {
    id: "cv-1",
    title: "Anantashayana Vishnu — Cosmic Rest",
    titleSanskrit: "अनन्त शयन विष्णु",
    category: "celestial-vision",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    verse: "BG 11.5",
    verseText: "Behold, O Arjuna, My hundreds and thousands of divine and various forms — different in colour and shape, of divine varieties.",
    artist: "Traditional Vishnu temple art",
    isLocked: true,
    pointsRequired: 400
  },
  {
    id: "cv-2",
    title: "Celestial Krishna — Universal Form",
    titleSanskrit: "विराट स्वरूप",
    category: "celestial-vision",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 11.12",
    verseText: "If hundreds of thousands of suns were to rise at once into the sky, their radiance might resemble the effulgence of the Supreme Person.",
    artist: "Sacred cosmic art",
    isLocked: true,
    pointsRequired: 400
  },
  {
    id: "cv-3",
    title: "Divine Vision of Arjuna",
    titleSanskrit: "दिव्य दृष्टि",
    category: "celestial-vision",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 11.8",
    verseText: "But you cannot see Me with your present eyes. Therefore I give you divine eyes. Behold My mystic opulence.",
    artist: "Mysore traditional",
    isLocked: true,
    pointsRequired: 400
  },
  // ── Temple Art (500 pts) ────────────────────────────────────────────────────
  {
    id: "ta-1",
    title: "Nathdwara Temple Pichwai",
    titleSanskrit: "नाथद्वारा पिछवाई",
    category: "temple-art",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    verse: "BG 9.16",
    verseText: "I am the ritual, I am the sacrifice, I am the offering, I am the herb, I am the chant, I am the ghee, I am the fire and I am the act of offering.",
    artist: "Nathdwara Pichwai tradition",
    isLocked: true,
    pointsRequired: 500
  },
  {
    id: "ta-2",
    title: "Tanjore Golden Krishna",
    titleSanskrit: "तंजावुर स्वर्ण कृष्ण",
    category: "temple-art",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    verse: "BG 10.20",
    verseText: "I am the Self, O Arjuna, seated in the hearts of all creatures. I am the beginning, the middle and the end of all beings.",
    artist: "Tanjore gold painting",
    isLocked: true,
    pointsRequired: 500
  },
  {
    id: "ta-3",
    title: "Temple Gopuram — Sacred Architecture",
    titleSanskrit: "गोपुरम",
    category: "temple-art",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    verse: "BG 7.14",
    verseText: "This divine energy of Mine, consisting of three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it.",
    artist: "Traditional temple mural",
    isLocked: true,
    pointsRequired: 500
  },
  // ── Modern Devotion (600 pts) ───────────────────────────────────────────────
  {
    id: "md-1",
    title: "ISKCON Radha Krishna Deity",
    titleSanskrit: "इस्कॉन राधा कृष्ण",
    category: "modern-devotion",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 12.14",
    verseText: "One who is free from wants, who is pure and expert, impartial and unafflicted, who has renounced all undertakings — such a devotee of Mine is dear to Me.",
    artist: "ISKCON devotional art",
    isLocked: true,
    pointsRequired: 600
  },
  {
    id: "md-2",
    title: "Contemporary Spiritual Painting",
    titleSanskrit: "आधुनिक भक्ति कला",
    category: "modern-devotion",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    verse: "BG 18.66",
    verseText: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reaction. Do not fear.",
    artist: "Modern devotional artist",
    isLocked: true,
    pointsRequired: 600
  },
  {
    id: "md-3",
    title: "Global Krishna Consciousness",
    titleSanskrit: "विश्व कृष्ण चेतना",
    category: "modern-devotion",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lord_Krishna_with_cow.jpg/640px-Lord_Krishna_with_cow.jpg",
    verse: "BG 14.26",
    verseText: "One who engages in full devotional service, who does not fall down in any circumstance, at once transcends the modes of material nature.",
    artist: "Contemporary sacred art",
    isLocked: true,
    pointsRequired: 600
  },
  // ── Meditation Mandalas (700 pts) ───────────────────────────────────────────
  {
    id: "mm-1",
    title: "Dhyana Mandala — Sacred Circle",
    titleSanskrit: "ध्यान मण्डल",
    category: "meditation-mandalas",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    verse: "BG 6.10",
    verseText: "A yogi should always try to concentrate his mind on the Supreme Self; he should live alone in a secluded place, always carefully controlling his mind.",
    artist: "Tantric mandala tradition",
    isLocked: true,
    pointsRequired: 700
  },
  {
    id: "mm-2",
    title: "Lotus Meditation — Path to Liberation",
    titleSanskrit: "कमल ध्यान",
    category: "meditation-mandalas",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 6.19",
    verseText: "As a lamp in a windless place does not waver, so the yogi who has controlled the mind is steady in meditation on the transcendent self.",
    artist: "Sacred meditation art",
    isLocked: true,
    pointsRequired: 700
  },
  {
    id: "mm-3",
    title: "Om Mandala — Primordial Sound",
    titleSanskrit: "ॐ मण्डल",
    category: "meditation-mandalas",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    verse: "BG 7.8",
    verseText: "I am the taste of water, the light of the sun and the moon, the syllable Om in the Vedic mantras.",
    artist: "Sacred geometric tradition",
    isLocked: true,
    pointsRequired: 700
  },
  // ── Mystical Darshan (800 pts) ──────────────────────────────────────────────
  {
    id: "myd-1",
    title: "Mystical Vision of the Lord",
    titleSanskrit: "रहस्यमय दर्शन",
    category: "mystical-darshan",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    verse: "BG 11.52",
    verseText: "My dear Arjuna, this form of Mine you are now seeing is very difficult to behold. Even the gods are ever seeking the opportunity to see this form.",
    artist: "Sacred mystical art",
    isLocked: true,
    pointsRequired: 800
  },
  {
    id: "myd-2",
    title: "Srinathji — The Sacred Revelation",
    titleSanskrit: "श्रीनाथजी",
    category: "mystical-darshan",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    verse: "BG 18.55",
    verseText: "By devotional service one can know Me as I am, as the Supreme Personality of Godhead. And thus knowing Me in truth, one can enter into the kingdom of God.",
    artist: "Pushti marg tradition",
    isLocked: true,
    pointsRequired: 800
  },
  {
    id: "myd-3",
    title: "Divine Glow — The Inner Light",
    titleSanskrit: "आत्म ज्योति",
    category: "mystical-darshan",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    verse: "BG 15.12",
    verseText: "The splendour of the sun, which dissipates the darkness of this whole world, comes from Me. And the splendour of the moon and the splendour of fire are also from Me.",
    artist: "Classical sacred painting",
    isLocked: true,
    pointsRequired: 800
  },
  // ── Rare Paintings (1000 pts) ───────────────────────────────────────────────
  {
    id: "rp-1",
    title: "Rare 18th Century Miniature — Krishna Lila",
    titleSanskrit: "दुर्लभ कृष्ण लीला",
    category: "rare-paintings",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    verse: "BG 10.19",
    verseText: "Yes, I will tell you of My splendorous manifestations, but only of those which are prominent, O Arjuna, for My opulence is limitless.",
    artist: "18th century Pahari, Guler school",
    isLocked: true,
    pointsRequired: 1e3
  },
  {
    id: "rp-2",
    title: "Mughal-Era Bhagavata Illustration",
    titleSanskrit: "मुगल काल भागवत",
    category: "rare-paintings",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    verse: "BG 9.2",
    verseText: "This knowledge is the king of all knowledge, the most sacred of all secrets. It is the purest knowledge; it gives direct perception of the Self by realisation.",
    artist: "Mughal period illustration, c. 1580",
    isLocked: true,
    pointsRequired: 1e3
  },
  {
    id: "rp-3",
    title: "Vijayanagara Temple Mural — Sacred Fragment",
    titleSanskrit: "विजयनगर मंदिर भित्तिचित्र",
    category: "rare-paintings",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    verse: "BG 4.7",
    verseText: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion — at that time I descend Myself.",
    artist: "Vijayanagara murals, 14th–16th c.",
    isLocked: true,
    pointsRequired: 1e3
  }
];
const PETAL_HUE = [340, 0, 32, 54, 320, 340, 280, 160, 340, 54, 32, 0];
const PETAL_CFG = PETAL_HUE.map((hue, i) => ({
  key: `fp${i}`,
  left: `${4 + i * 8}%`,
  size: 7 + i % 4 * 3,
  rot: i * 30 % 180,
  dur: `${1.8 + i % 4 * 0.3}s`,
  delay: `${(i * 0.14).toFixed(2)}s`,
  hue
}));
function FlowerPetalShower({ active }) {
  if (!active) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none z-50", "aria-hidden": true, children: PETAL_CFG.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "absolute",
        left: p.left,
        top: "-20px",
        width: p.size,
        height: p.size * 1.4,
        background: `oklch(0.86 0.26 ${p.hue} / 0.88)`,
        borderRadius: "50% 50% 30% 30%",
        animation: `petalRain ${p.dur} ease-in forwards`,
        animationDelay: p.delay,
        transform: `rotate(${p.rot}deg)`
      }
    },
    p.key
  )) });
}
function ArtworkCard({
  artwork,
  index,
  unlocked,
  canAfford,
  onOpen,
  onUnlock
}) {
  const [imgError, setImgError] = reactExports.useState(false);
  const cat = getCatMeta(artwork.category);
  const hue = cat.hue;
  const isActuallyLocked = artwork.isLocked && !unlocked;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.92 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.025, 0.5) },
      className: "relative group overflow-hidden",
      style: {
        borderRadius: "8px",
        border: `1.5px solid oklch(0.78 0.24 ${hue} / 0.5)`,
        boxShadow: `0 4px 20px oklch(0.18 0.08 ${hue} / 0.3)`,
        cursor: isActuallyLocked ? "default" : "pointer",
        aspectRatio: "3/4",
        background: `oklch(0.94 0.05 ${hue})`
      },
      onClick: isActuallyLocked ? void 0 : () => onOpen(artwork),
      "data-ocid": `gallery.item.${index + 1}`,
      children: [
        !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: artwork.src,
            alt: artwork.title,
            loading: "lazy",
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            style: {
              filter: isActuallyLocked ? "blur(4px) brightness(0.6)" : "brightness(0.95) saturate(1.05)"
            },
            onError: () => setImgError(true)
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full h-full flex flex-col items-center justify-center gap-2",
            style: {
              background: `linear-gradient(160deg, oklch(0.92 0.12 ${hue}) 0%, oklch(0.84 0.18 ${hue - 6}) 100%)`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2.5rem", opacity: 0.6 }, children: "🪷" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs text-center px-3 italic",
                  style: { color: `oklch(0.30 0.18 ${hue})` },
                  children: artwork.titleSanskrit
                }
              )
            ]
          }
        ),
        !artwork.isLocked && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-2 left-2 z-10",
            style: {
              fontSize: "0.45rem",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              padding: "2px 6px",
              borderRadius: "3px",
              background: "oklch(0.72 0.30 148 / 0.9)",
              color: "oklch(0.96 0.04 70)"
            },
            children: "FREE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-x-0 bottom-0 z-10 pointer-events-none",
            style: {
              background: `linear-gradient(to top, oklch(0.08 0.08 ${hue} / 0.95) 0%, oklch(0.08 0.06 ${hue} / 0.6) 55%, transparent 100%)`,
              padding: "32px 10px 10px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "0.55rem",
                    fontStyle: "italic",
                    color: `oklch(0.75 0.20 ${hue})`,
                    marginBottom: "2px"
                  },
                  children: artwork.titleSanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "oklch(0.96 0.08 60)",
                    lineHeight: 1.2
                  },
                  children: artwork.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "0.52rem",
                    color: `oklch(0.72 0.22 ${hue})`,
                    marginTop: "2px"
                  },
                  children: [
                    artwork.verse,
                    " · ",
                    artwork.artist
                  ]
                }
              )
            ]
          }
        ),
        isActuallyLocked && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 z-20 flex flex-col items-center justify-center gap-2",
            style: {
              background: "oklch(0.10 0.06 30 / 0.70)",
              backdropFilter: "blur(2px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center",
                  style: {
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, oklch(0.78 0.28 ${hue}), oklch(0.65 0.22 ${hue}))`,
                    border: `2px solid oklch(0.82 0.30 ${hue} / 0.7)`,
                    fontSize: 16
                  },
                  children: "🔒"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "0.60rem",
                    fontStyle: "italic",
                    color: `oklch(0.82 0.18 ${hue})`,
                    textAlign: "center",
                    padding: "0 8px"
                  },
                  children: [
                    artwork.pointsRequired,
                    " pts"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    onUnlock(artwork);
                  },
                  disabled: !canAfford,
                  className: "font-display font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: {
                    fontSize: "0.50rem",
                    padding: "3px 8px",
                    background: canAfford ? `oklch(0.72 0.28 ${hue})` : `oklch(0.55 0.10 ${hue})`,
                    color: "oklch(0.98 0.02 70)",
                    borderRadius: "3px",
                    border: `1px solid oklch(0.80 0.30 ${hue} / 0.5)`
                  },
                  "data-ocid": `gallery.unlock.${index + 1}`,
                  "aria-label": `Unlock for ${artwork.pointsRequired} points`,
                  children: "🔓 Unlock"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Lightbox({
  artwork,
  allFreeArtworks,
  onClose,
  onNavigate
}) {
  const [imgError, setImgError] = reactExports.useState(false);
  const cat = getCatMeta(artwork.category);
  const hue = cat.hue;
  const idx = allFreeArtworks.findIndex((a) => a.id === artwork.id);
  const prev = idx > 0 ? allFreeArtworks[idx - 1] : null;
  const next = idx < allFreeArtworks.length - 1 ? allFreeArtworks[idx + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-3",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      style: { background: "rgba(4,2,1,0.96)", backdropFilter: "blur(14px)" },
      "data-ocid": "gallery.modal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "relative w-full max-w-sm overflow-hidden",
          initial: { scale: 0.85, opacity: 0, y: 24 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.88, opacity: 0 },
          transition: { type: "spring", damping: 22, stiffness: 300 },
          onClick: (e) => e.stopPropagation(),
          style: {
            borderRadius: "10px",
            border: `2px solid oklch(0.78 0.30 ${hue} / 0.65)`,
            boxShadow: `0 24px 80px oklch(0.10 0.06 ${hue} / 0.8)`,
            background: "linear-gradient(160deg, oklch(0.96 0.07 68 / 0.98) 0%, oklch(0.93 0.09 64 / 0.98) 100%)",
            overflow: "hidden",
            maxHeight: "90vh",
            overflowY: "auto"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center font-bold hover:opacity-70 transition-opacity",
                style: {
                  background: "oklch(0.14 0.06 30 / 0.7)",
                  borderRadius: "50%",
                  color: "oklch(0.92 0.10 60)",
                  border: `1px solid oklch(0.72 0.24 ${hue} / 0.4)`,
                  fontSize: "0.9rem"
                },
                "aria-label": "Close",
                "data-ocid": "gallery.close_button",
                children: "✕"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden",
                style: { aspectRatio: "4/3" },
                children: [
                  !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: artwork.src,
                      alt: artwork.title,
                      className: "w-full h-full object-cover",
                      onError: () => setImgError(true)
                    },
                    artwork.id
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full h-full flex items-center justify-center",
                      style: { background: `oklch(0.90 0.12 ${hue})` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "3rem", opacity: 0.5 }, children: "🪷" })
                    }
                  ),
                  prev && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onNavigate(prev),
                      className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center font-bold hover:scale-110 transition-transform",
                      style: {
                        background: "oklch(0.10 0.06 30 / 0.7)",
                        borderRadius: "50%",
                        color: "oklch(0.90 0.10 60)",
                        border: `1px solid oklch(0.72 0.24 ${hue} / 0.4)`,
                        fontSize: "1rem"
                      },
                      "aria-label": "Previous",
                      "data-ocid": "gallery.pagination_prev",
                      children: "‹"
                    }
                  ),
                  next && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onNavigate(next),
                      className: "absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center font-bold hover:scale-110 transition-transform",
                      style: {
                        background: "oklch(0.10 0.06 30 / 0.7)",
                        borderRadius: "50%",
                        color: "oklch(0.90 0.10 60)",
                        border: `1px solid oklch(0.72 0.24 ${hue} / 0.4)`,
                        fontSize: "1rem"
                      },
                      "aria-label": "Next",
                      "data-ocid": "gallery.pagination_next",
                      children: "›"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 space-y-2",
                style: { borderTop: `1px solid oklch(0.78 0.24 ${hue} / 0.3)` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "0.62rem",
                        fontStyle: "italic",
                        color: `oklch(0.55 0.20 ${hue})`
                      },
                      children: [
                        artwork.titleSanskrit,
                        " · ",
                        cat.nameSk
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "oklch(0.14 0.09 28)",
                        lineHeight: 1.2
                      },
                      children: artwork.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "0.70rem",
                        color: `oklch(0.42 0.16 ${hue})`
                      },
                      children: [
                        "🎨 ",
                        artwork.artist
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        height: 1.5,
                        background: `linear-gradient(90deg, transparent, oklch(0.72 0.28 ${hue} / 0.5), transparent)`,
                        margin: "6px 0"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "0.80rem",
                        fontStyle: "italic",
                        color: "oklch(0.28 0.09 36)",
                        lineHeight: 1.55
                      },
                      children: [
                        '"',
                        artwork.verseText,
                        '"'
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "0.70rem",
                        fontWeight: 700,
                        color: `oklch(0.55 0.24 ${hue})`
                      },
                      children: [
                        "— ",
                        artwork.verse,
                        ", Bhagavad Gita"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "/guidance",
                        className: "flex-1 font-display font-bold text-xs py-2 rounded text-center transition-colors duration-200 hover:opacity-90",
                        style: {
                          background: `oklch(0.68 0.26 ${hue})`,
                          color: "oklch(0.98 0.02 70)",
                          textDecoration: "none",
                          display: "block"
                        },
                        "data-ocid": "gallery.ask_krishna_link",
                        children: "🪷 Ask Krishna"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "flex-1 font-display font-bold text-xs py-2 rounded transition-colors duration-200",
                        style: {
                          background: "oklch(0.26 0.08 30)",
                          color: `oklch(0.80 0.18 ${hue})`,
                          border: `1px solid oklch(0.55 0.18 ${hue} / 0.4)`
                        },
                        onClick: () => {
                          if (navigator.share)
                            navigator.share({
                              title: artwork.title,
                              text: `"${artwork.verseText}" — ${artwork.verse}`
                            }).catch(() => {
                            });
                        },
                        "data-ocid": "gallery.share_button",
                        children: "🔗 Share"
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function StoryCard({ day, index }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.04, 0.6) },
      className: "rounded-xl overflow-hidden cursor-pointer",
      style: {
        border: `1.5px solid oklch(0.78 0.24 ${day.hue} / 0.5)`,
        boxShadow: `0 4px 20px oklch(0.20 0.10 ${day.hue} / 0.22)`,
        background: `linear-gradient(150deg, oklch(0.94 0.08 ${day.hue} / 0.96) 0%, oklch(0.90 0.10 ${day.hue} / 0.96) 100%)`
      },
      onClick: () => setExpanded((v) => !v),
      "data-ocid": `gallery.story_card.${day.day}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: 3,
              background: `linear-gradient(90deg, oklch(0.80 0.30 ${day.hue}), oklch(0.70 0.26 ${(day.hue + 40) % 360}), oklch(0.80 0.30 ${day.hue}))`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-shrink-0 flex items-center justify-center rounded-full",
                style: {
                  width: 40,
                  height: 40,
                  background: `linear-gradient(135deg, oklch(0.80 0.30 ${day.hue}), oklch(0.68 0.26 ${day.hue}))`,
                  boxShadow: `0 4px 14px oklch(0.65 0.26 ${day.hue} / 0.45)`,
                  fontSize: "1.2rem"
                },
                children: day.warSymbol
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-display text-[0.56rem] font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded",
                    style: {
                      background: `oklch(0.82 0.24 ${day.hue} / 0.30)`,
                      color: `oklch(0.42 0.20 ${day.hue})`,
                      border: `1px solid oklch(0.74 0.22 ${day.hue} / 0.4)`
                    },
                    children: [
                      "Day ",
                      day.day
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-[0.58rem] italic",
                    style: { color: `oklch(0.52 0.18 ${day.hue})` },
                    children: day.keyWarrior
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display font-bold italic leading-tight",
                  style: { fontSize: "0.85rem", color: "oklch(0.20 0.10 32)" },
                  children: day.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body italic text-[0.60rem] mt-0.5",
                  style: { color: `oklch(0.48 0.18 ${day.hue})` },
                  children: day.titleSanskrit
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body italic leading-relaxed mb-3",
              style: {
                fontSize: "0.68rem",
                color: "oklch(0.28 0.08 38)",
                lineHeight: 1.75,
                display: "-webkit-box",
                WebkitLineClamp: expanded ? void 0 : 3,
                WebkitBoxOrient: "vertical",
                overflow: expanded ? "visible" : "hidden"
              },
              children: day.story
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg p-3 mb-3",
              style: {
                background: `oklch(0.90 0.08 ${day.hue} / 0.30)`,
                border: `1.5px solid oklch(0.74 0.20 ${day.hue} / 0.38)`,
                borderLeft: `4px solid oklch(0.68 0.26 ${day.hue})`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display text-[0.52rem] tracking-widest uppercase font-bold mb-1",
                    style: { color: `oklch(0.42 0.18 ${day.hue})` },
                    children: [
                      "📖 ",
                      day.gitaVerse.ref
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body italic",
                    style: { fontSize: "0.62rem", color: "oklch(0.24 0.10 34)" },
                    children: [
                      '"',
                      day.gitaVerse.meaning,
                      '"'
                    ]
                  }
                )
              ]
            }
          ),
          expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: "rounded-lg p-3 mb-3",
              style: {
                background: `oklch(0.94 0.06 ${day.hue} / 0.40)`,
                border: `1px solid oklch(0.78 0.20 ${day.hue} / 0.3)`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-[0.52rem] tracking-widest uppercase font-bold mb-1",
                    style: { color: "oklch(0.56 0.24 52)" },
                    children: "🌸 Krishna's Wisdom"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body italic",
                    style: { fontSize: "0.62rem", color: "oklch(0.28 0.10 36)" },
                    children: [
                      '"',
                      day.krishnaWisdom,
                      '"'
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap", children: day.characters.slice(0, 3).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body text-[0.52rem]",
                style: {
                  background: `oklch(0.82 0.18 ${day.hue} / 0.30)`,
                  color: `oklch(0.36 0.16 ${day.hue})`,
                  padding: "1px 5px",
                  borderRadius: "3px"
                },
                children: c
              },
              c
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body text-[0.58rem] italic",
                style: { color: `oklch(0.52 0.18 ${day.hue})` },
                children: expanded ? "Tap to collapse ▲" : "Read more ▼"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: 2,
              background: `linear-gradient(90deg, transparent, oklch(0.72 0.24 ${day.hue} / 0.4), transparent)`
            }
          }
        )
      ]
    }
  );
}
function GalleryPage() {
  const { points, deductPoints } = usePoints();
  const [section, setSection] = reactExports.useState("images");
  const [activeCategory, setActiveCategory] = reactExports.useState(
    "all"
  );
  const [search, setSearch] = reactExports.useState("");
  const [selectedArtwork, setSelectedArtwork] = reactExports.useState(
    null
  );
  const [petals, setPetals] = reactExports.useState(false);
  const [unlockedCats, setUnlockedCats] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem("gallery-unlocked-cats");
      return raw ? new Set(JSON.parse(raw)) : /* @__PURE__ */ new Set();
    } catch {
      return /* @__PURE__ */ new Set();
    }
  });
  const isCatUnlocked = reactExports.useCallback(
    (catId) => {
      const cat = CATEGORIES.find((c) => c.id === catId);
      if (!cat) return true;
      return !cat.locked || unlockedCats.has(catId);
    },
    [unlockedCats]
  );
  const unlockByPoints = reactExports.useCallback(
    (artwork) => {
      const cat = CATEGORIES.find((c) => c.id === artwork.category);
      if (!cat || !cat.locked) return;
      if (points.total < cat.pts) return;
      deductPoints(cat.pts);
      setUnlockedCats((prev) => {
        const next = new Set(prev);
        next.add(artwork.category);
        try {
          localStorage.setItem(
            "gallery-unlocked-cats",
            JSON.stringify([...next])
          );
        } catch {
        }
        return next;
      });
      setPetals(true);
      setTimeout(() => setPetals(false), 2500);
    },
    [points.total, deductPoints]
  );
  const handleOpen = reactExports.useCallback((art) => {
    setPetals(true);
    setTimeout(() => setPetals(false), 1800);
    setSelectedArtwork(art);
  }, []);
  const displayedArtworks = reactExports.useMemo(() => {
    return ARTWORKS.filter((art) => {
      if (activeCategory !== "all" && art.category !== activeCategory)
        return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return art.title.toLowerCase().includes(q) || art.titleSanskrit.includes(q) || art.category.includes(q) || art.verse.toLowerCase().includes(q);
      }
      return true;
    }).map((art) => ({
      ...art,
      isLocked: art.isLocked && !isCatUnlocked(art.category)
    }));
  }, [activeCategory, search, isCatUnlocked]);
  const freeArtworks = reactExports.useMemo(
    () => displayedArtworks.filter((a) => !a.isLocked),
    [displayedArtworks]
  );
  const catPtsRequired = (catId) => {
    const cat = CATEGORIES.find((c) => c.id === catId);
    return (cat == null ? void 0 : cat.pts) ?? 0;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes petalRain {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlowerPetalShower, { active: petals }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center pb-3 pt-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/60 text-base", children: "✦ ॐ ✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[0.60rem] tracking-[0.25em] uppercase text-accent/60 font-bold mb-1", children: "चित्र मण्डल — Sacred Visual Library" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header mb-1", children: "Krishna Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs italic text-accent/80", children: [
              "✦ ",
              points.total,
              " pts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/30", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-muted-foreground", children: "54 artworks · 18 story cards" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex gap-1.5 mb-4 p-1 rounded-xl",
        style: { background: "oklch(0.88 0.08 56 / 0.55)" },
        "data-ocid": "gallery.section_toggle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSection("images"),
              className: "flex-1 py-2.5 rounded-lg font-display font-bold text-xs tracking-wide uppercase transition-all duration-200",
              style: {
                background: section === "images" ? "oklch(0.70 0.26 52)" : "transparent",
                color: section === "images" ? "oklch(0.97 0.04 70)" : "oklch(0.42 0.12 46)",
                boxShadow: section === "images" ? "0 2px 10px oklch(0.62 0.24 50 / 0.4)" : "none"
              },
              "data-ocid": "gallery.tab.images",
              children: "🪷 Krishna Gallery"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSection("stories"),
              className: "flex-1 py-2.5 rounded-lg font-display font-bold text-xs tracking-wide uppercase transition-all duration-200",
              style: {
                background: section === "stories" ? "oklch(0.58 0.24 28)" : "transparent",
                color: section === "stories" ? "oklch(0.97 0.04 70)" : "oklch(0.42 0.12 46)",
                boxShadow: section === "stories" ? "0 2px 10px oklch(0.50 0.22 28 / 0.4)" : "none"
              },
              "data-ocid": "gallery.tab.stories",
              children: "⚔️ Sacred Story Cards"
            }
          )
        ]
      }
    ),
    section === "images" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "mb-4",
          style: {
            background: "linear-gradient(135deg, oklch(0.96 0.12 54 / 0.96) 0%, oklch(0.93 0.14 46 / 0.96) 100%)",
            border: "1.5px solid oklch(0.78 0.32 54 / 0.7)",
            borderRadius: "8px",
            padding: "12px 14px",
            boxShadow: "0 4px 20px oklch(0.78 0.28 54 / 0.25)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs text-center leading-relaxed",
              style: { color: "oklch(0.28 0.12 38)" },
              children: [
                "🙏",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-bold",
                    style: { color: "oklch(0.45 0.22 36)" },
                    children: "Arjun's personal collection of 1008 Krishna images"
                  }
                ),
                " ",
                "will be added to this gallery soon — a devotee's seva for the world. ❤️"
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search by title, verse, or category...",
            className: "w-full manuscript-input py-2.5 px-4 pr-8 text-sm",
            "data-ocid": "gallery.search_input",
            "aria-label": "Search gallery"
          }
        ),
        search && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSearch(""),
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
            "aria-label": "Clear search",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "overflow-x-auto pb-2 mb-2",
          style: { scrollbarWidth: "none" },
          "data-ocid": "gallery.category_filter",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 min-w-max", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveCategory("all"),
                className: "font-display font-bold tracking-wide uppercase transition-all duration-200 py-1.5 flex-shrink-0",
                style: {
                  fontSize: "0.54rem",
                  borderRadius: "4px",
                  padding: "6px 10px",
                  background: activeCategory === "all" ? "oklch(0.72 0.28 52)" : "oklch(0.90 0.06 68 / 0.8)",
                  color: activeCategory === "all" ? "oklch(0.98 0.02 70)" : "oklch(0.40 0.10 44)",
                  border: activeCategory === "all" ? "1px solid oklch(0.80 0.32 54)" : "1px solid oklch(0.72 0.14 52 / 0.3)"
                },
                "data-ocid": "gallery.filter.all",
                children: "All 18"
              },
              "all"
            ),
            CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveCategory(cat.id),
                className: "font-display font-bold tracking-wide uppercase transition-all duration-200 flex-shrink-0",
                style: {
                  fontSize: "0.50rem",
                  borderRadius: "4px",
                  padding: "6px 9px",
                  background: activeCategory === cat.id ? `oklch(0.68 0.26 ${cat.hue})` : "oklch(0.90 0.06 68 / 0.8)",
                  color: activeCategory === cat.id ? "oklch(0.98 0.02 70)" : "oklch(0.40 0.10 44)",
                  border: activeCategory === cat.id ? `1px solid oklch(0.78 0.30 ${cat.hue})` : "1px solid oklch(0.72 0.14 52 / 0.3)",
                  opacity: cat.locked && !unlockedCats.has(cat.id) ? 0.75 : 1
                },
                "data-ocid": `gallery.filter.${cat.id}`,
                children: [
                  cat.locked && !unlockedCats.has(cat.id) ? "🔒 " : "",
                  cat.name
                ]
              },
              cat.id
            ))
          ] })
        }
      ),
      displayedArtworks.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "gallery.list",
          className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
          children: displayedArtworks.map((art, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArtworkCard,
            {
              artwork: art,
              index: i,
              unlocked: isCatUnlocked(art.category),
              canAfford: points.total >= catPtsRequired(art.category),
              onOpen: handleOpen,
              onUnlock: unlockByPoints
            },
            art.id
          ))
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 text-center",
          "data-ocid": "gallery.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "3rem", opacity: 0.4 }, children: "🪷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground mt-3", children: "No sacred artworks found — try a different search or category" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-8 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/40 text-sm", children: "❀" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground", children: "Sources: Wikimedia Commons Public Domain · Raja Ravi Varma · Pahari School · Kangra · Tanjore · Nathdwara" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-accent/50 mt-1", children: '"I am the source of all creation — behold My infinite forms" — BG 10.8' })
      ] })
    ] }),
    section === "stories" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-[10px] tracking-[0.3em] uppercase mb-1",
                style: { color: "oklch(0.52 0.22 28 / 0.9)" },
                children: "✦ कुरुक्षेत्र के 18 दिन ✦"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display font-bold italic",
                style: {
                  fontSize: "1.25rem",
                  color: "oklch(0.40 0.20 28)",
                  textShadow: "0 0 20px oklch(0.72 0.28 32 / 0.3)"
                },
                children: "Kurukshetra Sacred Story"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic mt-1",
                style: { color: "oklch(0.46 0.16 36 / 0.80)" },
                children: "All 18 days of the Great Battle — complete stories, Gita verses, and Krishna's wisdom"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 gap-4",
          "data-ocid": "gallery.story_cards_list",
          children: KURUKSHETRA_DAYS.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StoryCard, { day, index: i }, day.day))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-8 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "py-4 px-4 rounded-xl text-center",
          style: {
            background: "oklch(0.92 0.08 36 / 0.25)",
            border: "1px dashed oklch(0.70 0.22 32 / 0.4)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic",
                style: { fontSize: "0.80rem", color: "oklch(0.40 0.18 32)" },
                children: '"Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna the archer — there will surely be prosperity, victory, and righteousness."'
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-[10px] italic mt-1",
                style: { color: "oklch(0.48 0.14 36 / 0.75)" },
                children: "— Bhagavad Gita, Chapter 18, Verse 78"
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedArtwork && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        artwork: selectedArtwork,
        allFreeArtworks: freeArtworks,
        onClose: () => setSelectedArtwork(null),
        onNavigate: (art) => {
          setSelectedArtwork(art);
        }
      }
    ) })
  ] });
}
export {
  GalleryPage
};
