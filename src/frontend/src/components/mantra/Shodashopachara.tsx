import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Shodashopachara Data ─────────────────────────────────────────────────────

interface ShodashStep {
  number: number;
  name: string;
  nameSanskrit: string;
  meaning: string;
  genericMantra: string;
  action: string;
}

const SHODASH_STEPS: ShodashStep[] = [
  {
    number: 1,
    name: "Dhyana",
    nameSanskrit: "ध्यान",
    meaning: "Meditation / Mental visualization of the deity",
    genericMantra: "ॐ [देवता] ध्यायामि",
    action:
      "Close eyes, visualize the complete form of the deity with all ornaments, weapons, and divine aura",
  },
  {
    number: 2,
    name: "Avahana",
    nameSanskrit: "आवाहन",
    meaning: "Invocation — calling the deity's divine presence into the murti",
    genericMantra: "ॐ [देवता] आवाहयामि",
    action:
      "Gesture with both hands joined, invite the deity's presence with the Avahana mudra",
  },
  {
    number: 3,
    name: "Asana",
    nameSanskrit: "आसन",
    meaning: "Offering a seat to the divine guest",
    genericMantra: "ॐ [देवता] आसनम् समर्पयामि",
    action:
      "Place clean cloth or asana before the murti. The deity is treated as the most honored guest",
  },
  {
    number: 4,
    name: "Padya",
    nameSanskrit: "पाद्य",
    meaning: "Washing the feet of the divine guest",
    genericMantra: "ॐ [देवता] पाद्यम् समर्पयामि",
    action:
      "Offer water at the feet of the murti. Symbolizes the respect shown to an honored guest",
  },
  {
    number: 5,
    name: "Arghya",
    nameSanskrit: "अर्घ्य",
    meaning: "Offering water for hands/welcome",
    genericMantra: "ॐ [देवता] अर्घ्यम् समर्पयामि",
    action:
      "Offer water with flowers and akshat in a copper vessel. This is the highest welcome offering",
  },
  {
    number: 6,
    name: "Achamana",
    nameSanskrit: "आचमन",
    meaning: "Sipping water for purification",
    genericMantra: "ॐ [देवता] आचमनम् समर्पयामि",
    action:
      "Offer water with a tulsi leaf or spoon for the deity to sip. Purifies the space spiritually",
  },
  {
    number: 7,
    name: "Snanam",
    nameSanskrit: "स्नान",
    meaning: "Sacred bathing / Abhishekam",
    genericMantra: "ॐ [देवता] स्नानम् समर्पयामि",
    action:
      "Perform Panchamrit abhishek (milk, curd, ghee, honey, sugar water) and final Gangajal bath",
  },
  {
    number: 8,
    name: "Vastra",
    nameSanskrit: "वस्त्र",
    meaning: "Offering clothing / divine dress",
    genericMantra: "ॐ [देवता] वस्त्रम् समर्पयामि",
    action:
      "Offer new cloth, or drape sacred thread/chunri as appropriate for the deity",
  },
  {
    number: 9,
    name: "Yajnopavita",
    nameSanskrit: "यज्ञोपवीत",
    meaning: "Offering the sacred thread",
    genericMantra: "ॐ [देवता] यज्ञोपवीतम् समर्पयामि",
    action:
      "Offer a sacred thread (for male deities). This step is sometimes replaced with Abharana (ornaments)",
  },
  {
    number: 10,
    name: "Gandha",
    nameSanskrit: "गन्ध",
    meaning: "Offering sandalwood paste / fragrance",
    genericMantra: "ॐ [देवता] गन्धम् समर्पयामि",
    action:
      "Apply sandalwood paste or kumkum to the deity. Each deity has a specific application method",
  },
  {
    number: 11,
    name: "Pushpa",
    nameSanskrit: "पुष्प",
    meaning: "Offering of flowers",
    genericMantra: "ॐ [देवता] पुष्पम् समर्पयामि",
    action:
      "Offer fresh flowers — each deity has specific flowers. Never offer broken, wilted, or scentless flowers",
  },
  {
    number: 12,
    name: "Dhupa",
    nameSanskrit: "धूप",
    meaning: "Offering incense / fragrant smoke",
    genericMantra: "ॐ [देवता] धूपम् आघ्रापयामि",
    action:
      "Wave incense in clockwise circles before the deity. The fragrant smoke carries prayers upward",
  },
  {
    number: 13,
    name: "Dipa",
    nameSanskrit: "दीप",
    meaning: "Offering of the sacred lamp",
    genericMantra: "ॐ [देवता] दीपम् दर्शयामि",
    action:
      "Wave the deepam (ghee lamp with odd-numbered wicks) in 3, 7, or 21 circles before the murti",
  },
  {
    number: 14,
    name: "Naivedhya",
    nameSanskrit: "नैवेद्य",
    meaning: "Food offering / sacred meal",
    genericMantra: "ॐ [देवता] नैवेद्यम् निवेदयामि",
    action:
      "Place food on a clean leaf or plate. Never taste before offering. Sprinkle water around food first",
  },
  {
    number: 15,
    name: "Tambula",
    nameSanskrit: "ताम्बूल",
    meaning: "Betel leaf offering / after-meal gift",
    genericMantra: "ॐ [देवता] ताम्बूलम् समर्पयामि",
    action:
      "Offer betel leaf with areca nut and clove — the traditional South Asian sign of hospitality and respect",
  },
  {
    number: 16,
    name: "Pradakshina & Namaskar",
    nameSanskrit: "प्रदक्षिण नमस्कार",
    meaning: "Circumambulation and prostration",
    genericMantra: "ॐ [देवता] प्रदक्षिणाम् करोमि",
    action:
      "Walk around the deity clockwise (right side always toward deity). Then perform full prostration. Complete the puja.",
  },
];

interface DeitySpecificPuja {
  deityId: string;
  name: string;
  nameSanskrit: string;
  icon: string;
  color: string;
  specificMantras: { [step: number]: string };
  specialNotes: { [step: number]: string };
  overallMantra: string;
  bestFlower: string;
  bestFood: string;
  bestTime: string;
  uniqueStep: string;
}

const DEITY_SPECIFIC: DeitySpecificPuja[] = [
  {
    deityId: "shiva",
    name: "Shiva",
    nameSanskrit: "शिव",
    icon: "🔱",
    color: "from-gray-700/30 to-blue-900/20",
    overallMantra: "ॐ नमः शिवाय",
    bestFlower: "Bel patra (Bilva) — never use Tulsi, Ketaki, or broken leaves",
    bestFood: "Kheer, milk, white sweets — never salt, meat, or garlic",
    bestTime: "Brahma Muhurta or Pradosha Kalam (dusk on Trayodashi)",
    uniqueStep:
      "Abhishek is Shiva's most beloved offering — the Abhishek mantra is the Rudra Chamakam",
    specificMantras: {
      1: "ध्यायेत् गौरीपतिं देवं गंगाधरं त्रिलोचनम्",
      2: "ॐ नमः शिवाय आवाहयामि",
      7: "ॐ त्र्यम्बकं यजामहे... (Mahamrityunjaya during Abhishek)",
      10: "ॐ चन्दनं चन्द्रसुन्दराय नमः",
      11: "ॐ शिवाय बिल्वपत्रं समर्पयामि",
      13: "ॐ ब्रह्माण्डव्यापकं दीपं शिवाय दर्शयामि",
      14: "ॐ नैवेद्यं षड्रसयुक्तं भोजनं शिवाय निवेदयामि",
      16: "यानि कानि च पापानि... (Shiva Aparadha Kshamapana at end)",
    },
    specialNotes: {
      7: "Abhishek materials in order: water, milk, curd, honey, ghee, coconut water, sugarcane juice, Gangajal",
      11: "Offer Bel patra in sets of 3. Each leaf represents the three eyes of Shiva or the three syllables Na-Ma-Shi",
      13: "Shiva's deepam should have 5 wicks (Panchapradipa) if possible",
    },
  },
  {
    deityId: "vishnu",
    name: "Vishnu",
    nameSanskrit: "विष्णु",
    icon: "🪷",
    color: "from-yellow-800/30 to-amber-900/20",
    overallMantra: "ॐ नमो नारायणाय",
    bestFlower: "Tulsi — mandatory. Never worship Vishnu without Tulsi",
    bestFood:
      "Panchamrit, Kheer, fruits, Tulsi-flavored milk — no onion, garlic",
    bestTime: "Brahma Muhurta, Ekadashi, Kartika month",
    uniqueStep:
      "Tulsi offering is mandatory — Vishnu rejects puja without Tulsi",
    specificMantras: {
      1: "ध्यायेत् पद्मासनस्थं विकसितवदनं...",
      2: "ॐ विष्णवे आवाहयामि",
      7: "ॐ नमो नारायणाय स्नानम् समर्पयामि",
      10: "ॐ चन्दनं सुगन्धं दिव्यं विष्णवे समर्पयामि",
      11: "ॐ तुलसीपत्रं विष्णवे समर्पयामि",
      13: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्...",
      14: "ॐ नैवेद्यम् विष्णवे निवेदयामि",
      16: "यानि कानि च पापानि जन्मान्तरकृतानि च...",
    },
    specialNotes: {
      11: "Offer Tulsi with even number of leaves. Chant the 12 names of Vishnu with each leaf",
      8: "Vishnu's color is yellow — offer yellow cloth and yellow flowers when possible",
      13: "Conch (shankh) blowing before deepam aarti is Vishnu's special tradition",
    },
  },
  {
    deityId: "krishna",
    name: "Krishna",
    nameSanskrit: "कृष्ण",
    icon: "🦚",
    color: "from-blue-900/30 to-indigo-900/20",
    overallMantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
    bestFlower: "Tulsi — mandatory. Also Kadamba, Champa, Jasmine",
    bestFood:
      "Makhan (butter), Misri (crystal sugar), Panchamrit, Fruits — no onion/garlic",
    bestTime: "Brahma Muhurta, Janmashtami midnight, Ekadashi",
    uniqueStep:
      "Makhan-Misri offering — Krishna's eternal love for butter is the devotional heart of his puja",
    specificMantras: {
      1: "वसुदेवसुतं देवं कंसचाणूरमर्दनम्...",
      2: "ॐ कृष्णाय आवाहयामि",
      7: "ॐ नमो भगवते वासुदेवाय स्नानम् समर्पयामि",
      10: "ॐ चन्दनम् कृष्णाय समर्पयामि",
      11: "ॐ तुलसीपत्रं श्रीकृष्णाय समर्पयामि",
      12: "ॐ धूपायते नमः कृष्णाय",
      13: "भजे व्रजैकमण्डनं... (Ashtapadi) दीपं दर्शयामि",
      14: "ॐ माखनम् मिश्रीयुतं कृष्णाय निवेदयामि",
    },
    specialNotes: {
      8: "Dress Krishna in yellow pitambara (silk cloth). Blue-black skin tone with yellow is sacred",
      11: "Tulsi mala offering is supreme for Vishnu/Krishna — 108 Tulsi leaves with 12 names",
      14: "The five-time-a-day bhog tradition: Mangala, Shringar, Rajabhog, Shayan bhog",
    },
  },
  {
    deityId: "ganesha",
    name: "Ganesha",
    nameSanskrit: "गणेश",
    icon: "🐘",
    color: "from-red-900/30 to-orange-900/20",
    overallMantra: "ॐ गं गणपतये नमः",
    bestFlower:
      "Durva grass (21 blades), Red/Marigold flowers — never Tulsi for Ganesha",
    bestFood: "Modak (sweet), Ladoo — Ganesha's favorite prasad",
    bestTime: "Brahma Muhurta, Chaturthi (4th day of fortnight)",
    uniqueStep:
      "Durva offering — 21 blades of Durva grass is mandatory for Ganesha",
    specificMantras: {
      1: "गजाननम् भूतगणादिसेवितम् ...",
      2: "ॐ गणेशाय आवाहयामि",
      7: "ॐ गं गणपतये स्नानम् समर्पयामि",
      10: "ॐ सिन्दूरं रक्तवर्णं गणेशाय समर्पयामि",
      11: "ॐ एकविंशति दूर्वांकुरान् गणेशाय समर्पयामि",
      13: "ॐ विघ्नराजाय दीपं दर्शयामि",
      14: "ॐ मोदकनैवेद्यं गणेशाय निवेदयामि",
      16: "ॐ गणेशाय प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      10: "Apply red sindoor — Ganesha is always red/orange colored. Red is his primary color",
      11: "Count exactly 21 Durva blades. Ganesha is especially pleased by Durva over any flower",
      14: "Modak is the supreme prasad. Make or buy fresh — never stale modak",
    },
  },
  {
    deityId: "durga",
    name: "Durga",
    nameSanskrit: "दुर्गा",
    icon: "🌺",
    color: "from-red-800/30 to-orange-800/20",
    overallMantra: "ॐ दुं दुर्गायै नमः",
    bestFlower:
      "Red Hibiscus (Japakusuma), Marigold — these are Devi's favorites",
    bestFood:
      "Halwa (suji), Puri, Chana — Navratri prasad. No meat offering in most traditions",
    bestTime: "Brahma Muhurta, Navratri, Fridays",
    uniqueStep:
      "Chunri (red cloth) draping — the most important offering to Devi Durga",
    specificMantras: {
      1: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके...",
      2: "ॐ दुर्गायै आवाहयामि",
      7: "ॐ दुर्गायै स्नानम् समर्पयामि",
      8: "ॐ रक्तचुनरीवस्त्रम् दुर्गायै समर्पयामि",
      10: "ॐ सिन्दूरं कुंकुमं दुर्गायै समर्पयामि",
      11: "ॐ रक्तपुष्पाणि दुर्गायै समर्पयामि",
      13: "ॐ जगज्जोत्स्नां जगत्प्रकाशिकां दुर्गायै दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् दुर्गायै निवेदयामि",
    },
    specialNotes: {
      8: "Offer red chunri as the first cloth. Devi accepts red as her primary color",
      11: "Offer 108 red hibiscus flowers on Navami for maximum spiritual merit",
      14: "Kumari puja (worship of young girl as Devi) on Navami is supreme — feed 9 girls",
    },
  },
  {
    deityId: "lakshmi",
    name: "Lakshmi",
    nameSanskrit: "लक्ष्मी",
    icon: "🌸",
    color: "from-pink-900/30 to-rose-900/20",
    overallMantra: "ॐ श्रीं महालक्ष्म्यै नमः",
    bestFlower:
      "Lotus, Rose, Marigold — pink and red flowers. Lakshmi loves lotus above all",
    bestFood: "Kheer, Payasam, sweet rice, fruits — Lakshmi loves sweets",
    bestTime: "Friday, Diwali, Purnima",
    uniqueStep:
      "Deepam lighting at sunset on Friday — the most beloved offering to Lakshmi",
    specificMantras: {
      1: "ध्यायेत् पद्मासनस्थां विकसितवदनां पद्मपत्रायताक्षीं...",
      2: "ॐ महालक्ष्म्यै आवाहयामि",
      7: "ॐ महालक्ष्म्यै स्नानम् समर्पयामि",
      10: "ॐ चन्दनकुंकुमं महालक्ष्म्यै समर्पयामि",
      11: "ॐ लक्ष्म्यै पुष्पाणि समर्पयामि",
      13: "ॐ लक्ष्म्यै दीपं दर्शयामि — ॐ महालक्ष्म्यै नमः",
      14: "ॐ नैवेद्यम् लक्ष्म्यै निवेदयामि — खीर/पायसं",
      16: "ॐ लक्ष्म्यै प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      5: "Arghya for Lakshmi: place coins in the water vessel — she is the goddess of prosperity",
      13: "Place the deepam at the entrance door (south-facing is traditional on Diwali night)",
      14: "Offer fresh kheer/payasam as first prasad. Rice and milk are Lakshmi's symbols",
    },
  },
  {
    deityId: "saraswati",
    name: "Saraswati",
    nameSanskrit: "सरस्वती",
    icon: "📚",
    color: "from-indigo-900/30 to-violet-900/20",
    overallMantra: "ॐ ऐं सरस्वत्यै नमः",
    bestFlower: "White jasmine, white chrysanthemum — all white flowers",
    bestFood: "White kheer, sugar, white modak — all white/light foods",
    bestTime: "Brahma Muhurta, Basant Panchami, Saraswati Puja day",
    uniqueStep:
      "Book and instrument placement at the altar — Saraswati dwells in all tools of knowledge",
    specificMantras: {
      1: "या कुन्देन्दुतुषारहारधवला...",
      2: "ॐ सरस्वत्यै आवाहयामि",
      7: "ॐ सरस्वत्यै स्नानम् समर्पयामि",
      11: "ॐ श्वेतपुष्पाणि सरस्वत्यै समर्पयामि",
      13: "ॐ विद्यादीपं सरस्वत्यै दर्शयामि",
      14: "ॐ श्वेतखीरं सरस्वत्यै निवेदयामि",
      16: "ॐ सरस्वत्यै प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      11: "Only white flowers for Saraswati — she is the goddess of purity and light",
      8: "Offer white cloth or white silk. White symbolizes the pure light of knowledge",
      14: "Do not read or write on Basant Panchami until after puja is complete",
    },
  },
  {
    deityId: "rama",
    name: "Rama",
    nameSanskrit: "राम",
    icon: "🏹",
    color: "from-green-900/30 to-teal-900/20",
    overallMantra: "ॐ श्रीराम जय राम जय जय राम",
    bestFlower: "Tulsi — mandatory. Also white champa and yellow flowers",
    bestFood: "Panchamrit, fruits, rice dishes — no onion, garlic",
    bestTime: "Sunday, Ram Navami, Brahma Muhurta",
    uniqueStep:
      "Sita-Ram image must be worshipped together — Rama puja without Sita is incomplete",
    specificMantras: {
      1: "ध्यायेत् रामं मनोहरं मेघश्यामं...",
      2: "ॐ श्रीरामाय आवाहयामि",
      7: "ॐ रामाय स्नानम् समर्पयामि",
      10: "ॐ चन्दनं श्रीरामाय समर्पयामि",
      11: "ॐ तुलसीपत्रं श्रीरामाय समर्पयामि",
      13: "ॐ रामाय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् श्रीरामाय निवेदयामि",
      16: "ॐ रामाय प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      11: "Tulsi with Rama puja is essential — each leaf offered with 'Jai Shri Ram'",
      2: "Invoke Sita-Rama-Lakshmana-Hanuman together for the complete divine family",
      14: "Offer fruits, rice, and simple food — Rama is the simplest and most loving god",
    },
  },
  {
    deityId: "hanuman",
    name: "Hanuman",
    nameSanskrit: "हनुमान",
    icon: "🙏",
    color: "from-orange-900/30 to-red-900/20",
    overallMantra: "ॐ हं हनुमते नमः",
    bestFlower:
      "Jasmine, marigold, red flowers — Hanuman loves fragrant offerings",
    bestFood: "Besan ladoo, jaggery, banana — simple offering from the heart",
    bestTime: "Tuesday, Saturday, Brahma Muhurta",
    uniqueStep:
      "Sindoor mixed in oil anointing — Hanuman's most beloved physical offering",
    specificMantras: {
      1: "गोष्पदीकृत वारशिं...",
      2: "ॐ हनुमते आवाहयामि",
      7: "ॐ हं हनुमते स्नानम् समर्पयामि",
      10: "ॐ सिन्दूरं हनुमते समर्पयामि",
      11: "ॐ जासमिनं पुष्पं हनुमते समर्पयामि",
      13: "ॐ हनुमते दीपं दर्शयामि",
      14: "ॐ मोदकं हनुमते निवेदयामि",
      16: "ॐ हनुमते प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      10: "Mix sindoor in sesame oil and apply to the murti — this is Hanuman's most cherished offering",
      14: "Offer besan ladoo or jaggery — Hanuman accepts simple food with great love",
      8: "Wrap red cloth around Hanuman murti — red is the color of his power and devotion",
    },
  },
  {
    deityId: "surya",
    name: "Surya",
    nameSanskrit: "सूर्य",
    icon: "☀️",
    color: "from-yellow-900/30 to-orange-900/20",
    overallMantra: "ॐ सूर्याय नमः",
    bestFlower: "Red flowers — red hibiscus, red roses, marigold",
    bestFood: "Wheat products, jaggery, red fruits — foods of the sun",
    bestTime: "Sunrise — the only correct time for Surya puja",
    uniqueStep:
      "Arghya at sunrise — offering water to the rising sun is Surya's supreme ritual",
    specificMantras: {
      1: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्...",
      2: "ॐ सूर्याय आवाहयामि",
      5: "ॐ आर्घ्यं सूर्याय समर्पयामि — (pour water toward rising sun)",
      7: "ॐ सूर्याय स्नानम् समर्पयामि",
      11: "ॐ रक्तपुष्पाणि सूर्याय समर्पयामि",
      13: "ॐ तेजोमये दीपं सूर्याय दर्शयामि",
      14: "ॐ नैवेद्यम् सूर्याय निवेदयामि",
      16: "ॐ सूर्याय प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      5: "Arghya to Surya is the supreme puja — pour water in a copper vessel at sunrise while chanting Aditya Hridayam",
      7: "Surya's abhishek is done with water only — the sun purifies everything",
      11: "Never offer white flowers to Surya — only bright, vibrant, colored flowers",
    },
  },
  {
    deityId: "kali",
    name: "Kali",
    nameSanskrit: "काली",
    icon: "🗡️",
    color: "from-gray-900/40 to-indigo-900/30",
    overallMantra: "ॐ क्रीं कालिकायै नमः",
    bestFlower:
      "Red hibiscus (Japakusuma) — Kali's favorite flower in all traditions",
    bestFood:
      "Red foods — hibiscus water, red fruit, bel fruit. Simple offerings",
    bestTime: "Midnight on Amavasya, Diwali night, Navratri nights",
    uniqueStep: "Night puja — Kali's energy is most potent after midnight",
    specificMantras: {
      1: "करालवदनां घोरां मुक्तकेशीं चतुर्भुजाम्...",
      2: "ॐ कालिकायै आवाहयामि",
      7: "ॐ कालिकायै स्नानम् समर्पयामि",
      10: "ॐ सिन्दूरं रक्तवर्णं कालिकायै समर्पयामि",
      11: "ॐ रक्तजपाकुसुमं कालिकायै समर्पयामि",
      13: "ॐ कालिकायै दीपं दर्शयामि — midnight lamp",
      14: "ॐ नैवेद्यम् कालिकायै निवेदयामि",
    },
    specialNotes: {
      11: "108 red hibiscus flowers for full Kali puja — one for each name in her Sahasranama",
      2: "Invoke Kali facing south — she is the deity of the southern direction",
      13: "Black sesame oil lamp is Kali's preferred deepam — light it at midnight",
    },
  },
  {
    deityId: "parvati",
    name: "Parvati",
    nameSanskrit: "पार्वती",
    icon: "🌙",
    color: "from-purple-900/30 to-pink-900/20",
    overallMantra: "ॐ पार्वत्यै नमः",
    bestFlower: "Red and white flowers — Parvati accepts all pure flowers",
    bestFood: "Kheer, white sweets, fruits — the gentle mother accepts all",
    bestTime: "Monday (Shiva's day), Navaratri, Teej festival",
    uniqueStep:
      "Solah Shringar (16 adornments) for Parvati — the complete feminine offering",
    specificMantras: {
      1: "ॐ उमायै नमः। ध्यायेत् पार्वतीं गौरीं शंकरार्धांगिनीम्...",
      2: "ॐ पार्वत्यै आवाहयामि",
      7: "ॐ पार्वत्यै स्नानम् समर्पयामि",
      8: "ॐ श्रृंगारवस्त्रं पार्वत्यै समर्पयामि",
      10: "ॐ हरिद्रां कुंकुमं पार्वत्यै समर्पयामि",
      11: "ॐ सुमनसः पार्वत्यै समर्पयामि",
      13: "ॐ पार्वत्यै दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् पार्वत्यै निवेदयामि",
    },
    specialNotes: {
      8: "Complete Solah Shringar for Parvati — 16 adornments including bindi, bangles, necklace, toe rings",
      10: "Apply turmeric and kumkum to Parvati's image — she loves these as symbols of Suhaag (married bliss)",
      14: "Parvati is especially pleased by offering made by married women — Teej vrat prasad is supreme",
    },
  },
  {
    deityId: "radha",
    name: "Radha",
    nameSanskrit: "राधा",
    icon: "💐",
    color: "from-pink-800/30 to-rose-800/20",
    overallMantra: "ॐ राधायै नमः",
    bestFlower: "Champa, jasmine, rose — fragrant flowers of Vrindavan",
    bestFood: "Kheer, malpua, misri — Radha's favorite sweet offerings",
    bestTime: "Radhashtami, Teej, any day with pure bhakti heart",
    uniqueStep:
      "Radha-Krishna are inseparable — Radha puja is always done as Radha-Krishna together",
    specificMantras: {
      1: "ध्यायेत् राधां परमानन्दस्वरूपिणीं श्यामां...",
      2: "ॐ राधायै आवाहयामि",
      7: "ॐ राधायै स्नानम् समर्पयामि",
      8: "ॐ पीतवस्त्रं राधायै समर्पयामि",
      11: "ॐ कदम्बपुष्पं राधायै समर्पयामि",
      13: "ॐ राधायै दीपं दर्शयामि",
      14: "ॐ खीरमिश्री राधायै निवेदयामि",
    },
    specialNotes: {
      11: "Kadamba flower is Radha's favorite — the forest tree of Vrindavan",
      8: "Dress Radha in bright yellow or pink — the colors of spring in Vrindavan",
      14: "Always offer to Radha first, then Krishna — in their sacred love, she is first",
    },
  },
  {
    deityId: "nataraj",
    name: "Nataraj",
    nameSanskrit: "नटराज",
    icon: "💃",
    color: "from-amber-900/30 to-yellow-900/20",
    overallMantra: "ॐ नटराजाय नमः",
    bestFlower: "Bel patra, white flowers — same as Shiva",
    bestFood: "Milk, kheer, white food — Shiva-form accepts all",
    bestTime: "Pradosha Kalam especially — the cosmic dance moment",
    uniqueStep:
      "Pradakshina (circumambulation) in the rhythm of the cosmic dance — 3 or 108 times",
    specificMantras: {
      1: "ॐ नमः शिवाय नटराजाय नमः। सभानायक नटराज...",
      2: "ॐ नटराजाय आवाहयामि",
      7: "ॐ नटराजाय स्नानम् समर्पयामि",
      11: "ॐ बिल्वपत्रं नटराजाय समर्पयामि",
      13: "ॐ नटराजाय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् नटराजाय निवेदयामि",
      16: "ॐ नटराजाय प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      16: "Pradakshina of Nataraj is done with awareness of the cosmic dance — each step is a bow to creation",
      1: "Nataraj is Shiva as Ananda Tandava — the dance of bliss that sustains the universe",
      13: "The dance of Nataraj's 5 actions: creation, sustenance, dissolution, concealment, grace",
    },
  },
  {
    deityId: "brahma",
    name: "Brahma",
    nameSanskrit: "ब्रह्मा",
    icon: "📜",
    color: "from-yellow-900/30 to-amber-900/20",
    overallMantra: "ॐ ब्रह्मणे नमः",
    bestFlower: "Lotus flowers — Brahma is always depicted with lotus",
    bestFood: "Rice, grains, white food — Brahma is the deity of creation",
    bestTime: "Brahma Muhurta — the period is named after Brahma",
    uniqueStep:
      "Vedic recitation is the supreme worship of Brahma — his puja is through Veda study",
    specificMantras: {
      1: "ॐ ब्रह्मणे नमः। चतुर्मुखाय ब्रह्मणे नमः...",
      2: "ॐ ब्रह्मणे आवाहयामि",
      5: "ॐ अर्घ्यं ब्रह्मणे समर्पयामि",
      7: "ॐ ब्रह्मणे स्नानम् समर्पयामि",
      11: "ॐ पद्मपुष्पं ब्रह्मणे समर्पयामि",
      13: "ॐ ज्ञानदीपं ब्रह्मणे दर्शयामि",
      14: "ॐ नैवेद्यम् ब्रह्मणे निवेदयामि",
    },
    specialNotes: {
      11: "Lotus is the only flower for Brahma — he was born from a lotus on Vishnu's navel",
      1: "Brahma's dhyana is done facing east — he always faces east, the direction of creation",
      13: "The lamp for Brahma symbolizes the light of knowledge — Brahma is Saraswati's consort",
    },
  },
  {
    deityId: "kartikeya",
    name: "Kartikeya",
    nameSanskrit: "कार्तिकेय",
    icon: "⚔️",
    color: "from-red-900/30 to-orange-900/20",
    overallMantra: "ॐ कार्तिकेयाय नमः",
    bestFlower: "Red flowers, peacock feather decoration",
    bestFood: "Milk, honey, fruits — Kartikeya accepts simple offerings",
    bestTime: "Tuesday, Skanda Sashti, Thaipusam",
    uniqueStep:
      "Vel (divine spear) worship — Kartikeya's Vel is the most sacred symbol of divine power",
    specificMantras: {
      1: "ॐ कार्तिकेयाय नमः। शरवणभवाय...",
      2: "ॐ कार्तिकेयाय आवाहयामि",
      7: "ॐ कार्तिकेयाय स्नानम् समर्पयामि",
      11: "ॐ रक्तपुष्पाणि कार्तिकेयाय समर्पयामि",
      13: "ॐ कार्तिकेयाय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् कार्तिकेयाय निवेदयामि",
    },
    specialNotes: {
      2: "The 6-syllable Kartikeya mantra: Om Saravanabhava — each syllable is a sacred name",
      11: "Decorate with peacock feather — Kartikeya's vahana (vehicle) is the peacock",
      14: "Offer milk mixed with honey — the Amrit offering to the son of Shiva and Parvati",
    },
  },
  {
    deityId: "indra",
    name: "Indra",
    nameSanskrit: "इन्द्र",
    icon: "⚡",
    color: "from-blue-900/30 to-cyan-900/20",
    overallMantra: "ॐ इन्द्राय नमः",
    bestFlower: "White flowers — Indra is the king of heaven",
    bestFood: "Soma (coconut water substitute), white food",
    bestTime: "Brahma Muhurta on Monday or during drought",
    uniqueStep:
      "Vajra (thunderbolt) symbol — Indra's divine weapon is his identity",
    specificMantras: {
      1: "ॐ इन्द्राय नमः। वज्रपाणये महाराजाय...",
      2: "ॐ इन्द्राय आवाहयामि",
      5: "ॐ सोमरसं इन्द्राय समर्पयामि",
      7: "ॐ इन्द्राय स्नानम् समर्पयामि",
      11: "ॐ श्वेतपुष्पाणि इन्द्राय समर्पयामि",
      13: "ॐ इन्द्राय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् इन्द्राय निवेदयामि",
    },
    specialNotes: {
      5: "Offer coconut water as Soma substitute — Indra was the chief Soma-drinker of the Vedas",
      2: "Indra puja is most powerful during drought or before a major challenge requiring power",
      11: "White flowers for Indra — he is the ruler of the pure white heaven (Swarga)",
    },
  },
  {
    deityId: "yama",
    name: "Yama",
    nameSanskrit: "यम",
    icon: "🪔",
    color: "from-gray-800/30 to-slate-900/20",
    overallMantra: "ॐ यमाय नमः",
    bestFlower: "Black sesame, dark flowers — symbolic of the dark realm",
    bestFood:
      "Simple offerings of rice and water — Yama accepts humble offerings",
    bestTime: "Yama Dwitiya, Bhai Dooj, Kartika Amavasya",
    uniqueStep:
      "Yama puja is done for protection from untimely death and for the welfare of ancestors",
    specificMantras: {
      1: "ॐ यमाय नमः। धर्मराजाय महाराजाय...",
      2: "ॐ यमाय आवाहयामि",
      7: "ॐ यमाय स्नानम् समर्पयामि",
      11: "ॐ यमाय पुष्पाणि समर्पयामि",
      13: "ॐ यमाय दीपं दर्शयामि — sesame oil lamp",
      14: "ॐ नैवेद्यम् यमाय निवेदयामि",
      16: "ॐ यमाय प्रदक्षिणाम् करोमि",
    },
    specialNotes: {
      2: "Yama puja is performed for the long life of brothers and for protection from death",
      13: "Black sesame oil lamp for Yama — lit during Yama Dwitiya (Bhai Dooj day)",
      16: "Yama puja is done facing south — Yama is the lord of the southern direction",
    },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ShodashSection() {
  const [selectedDeity, setSelectedDeity] = useState(DEITY_SPECIFIC[0].deityId);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const deity = DEITY_SPECIFIC.find((d) => d.deityId === selectedDeity)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <p className="text-verse-number tracking-widest mb-1">
          ॥ षोडशोपचार पूजा ॥
        </p>
        <h2 className="font-display text-2xl font-bold italic text-primary mb-2">
          Shodashopachara Puja
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
          The 16 sacred steps of complete puja — treating the deity as the most
          honored divine guest. These steps are observed in all traditional
          Hindu puja, from daily home worship to grand temple rituals.
        </p>
      </div>

      {/* Deity Selector */}
      <div>
        <p className="text-verse-number tracking-widest mb-3">Select Deity →</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {DEITY_SPECIFIC.map((d) => (
            <button
              key={d.deityId}
              type="button"
              onClick={() => {
                setSelectedDeity(d.deityId);
                setExpandedStep(null);
              }}
              data-ocid={`shodash-deity-${d.deityId}`}
              className={`p-3 border text-center transition-smooth ${
                selectedDeity === d.deityId
                  ? "border-accent/60 bg-accent/10"
                  : "border-border hover:border-accent/30 hover:bg-accent/5"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <div className="text-xl mb-1">{d.icon}</div>
              <p className="font-display text-xs font-semibold text-foreground">
                {d.name}
              </p>
              <p
                className="font-body text-xs text-muted-foreground"
                style={{ fontSize: "0.65rem" }}
              >
                {d.nameSanskrit}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Deity Overview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDeity}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`p-4 border border-border/50 bg-gradient-to-r ${deity.color}`}
          style={{ borderRadius: "2px" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{deity.icon}</span>
            <div>
              <p className="font-display text-lg font-bold text-foreground">
                {deity.name} Puja Guide
              </p>
              <p className="font-body text-xs italic text-accent">
                {deity.overallMantra}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="font-display text-xs font-semibold text-foreground/70 mb-0.5">
                Best Flower
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {deity.bestFlower}
              </p>
            </div>
            <div>
              <p className="font-display text-xs font-semibold text-foreground/70 mb-0.5">
                Best Food (Naivedhya)
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {deity.bestFood}
              </p>
            </div>
            <div>
              <p className="font-display text-xs font-semibold text-foreground/70 mb-0.5">
                Best Time
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {deity.bestTime}
              </p>
            </div>
            <div>
              <p className="font-display text-xs font-semibold text-foreground/70 mb-0.5">
                Special Step
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {deity.uniqueStep}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 16 Steps */}
      <div className="space-y-2">
        <p className="text-verse-number tracking-widest">
          The 16 Sacred Steps (tap to expand)
        </p>
        {SHODASH_STEPS.map((step) => {
          const specificMantra = deity.specificMantras[step.number];
          const specialNote = deity.specialNotes[step.number];
          const isOpen = expandedStep === step.number;

          return (
            <motion.div
              key={step.number}
              className="border border-border"
              style={{
                background: "oklch(var(--card) / 0.65)",
                borderRadius: "2px",
              }}
              whileHover={{ x: 2 }}
            >
              <button
                type="button"
                onClick={() => setExpandedStep(isOpen ? null : step.number)}
                data-ocid={`shodash-step-${step.number}`}
                className="w-full flex items-center gap-3 px-4 py-3 text-left"
              >
                <div
                  className="shrink-0 w-7 h-7 flex items-center justify-center text-xs font-display font-bold border"
                  style={{
                    background: "oklch(var(--accent) / 0.15)",
                    borderColor: "oklch(var(--accent) / 0.4)",
                    color: "oklch(var(--accent))",
                    borderRadius: "1px",
                  }}
                >
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <p className="font-display text-sm font-semibold text-foreground">
                      {step.name}
                    </p>
                    <p className="font-body text-xs italic text-muted-foreground">
                      {step.nameSanskrit}
                    </p>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {step.meaning}
                  </p>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 space-y-3 border-t border-border/30">
                      {/* Generic mantra */}
                      <div
                        className="p-3 text-center"
                        style={{ background: "oklch(var(--muted) / 0.3)" }}
                      >
                        <p className="font-body text-xs text-muted-foreground mb-1">
                          Generic form
                        </p>
                        <p className="font-body text-base text-foreground">
                          {step.genericMantra}
                        </p>
                      </div>

                      {/* Deity-specific mantra */}
                      {specificMantra && (
                        <div
                          className="p-3 border-l-2"
                          style={{
                            borderColor: "oklch(var(--accent) / 0.5)",
                            background: "oklch(var(--accent) / 0.05)",
                          }}
                        >
                          <p className="font-display text-xs font-semibold text-accent mb-1">
                            {deity.name} specific mantra:
                          </p>
                          <p className="font-body text-sm text-foreground leading-relaxed">
                            {specificMantra}
                          </p>
                        </div>
                      )}

                      {/* Action */}
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">
                          Action:{" "}
                        </span>
                        {step.action}
                      </p>

                      {/* Special note */}
                      {specialNote && (
                        <p
                          className="font-body text-xs italic leading-relaxed border-l-2 pl-3"
                          style={{
                            borderColor: "oklch(var(--primary) / 0.5)",
                            color: "oklch(var(--muted-foreground))",
                          }}
                        >
                          ✦ {deity.name} note: {specialNote}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
