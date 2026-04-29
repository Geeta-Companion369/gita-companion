import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Prahar Pooja Data ────────────────────────────────────────────────────────

interface PraharInfo {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  time: string;
  icon: string;
  description: string;
  generalActivity: string;
  color: string;
}

const PRAHARS: PraharInfo[] = [
  {
    id: "brahma-muhurta",
    number: 1,
    name: "Brahma Muhurta",
    nameSanskrit: "ब्रह्म मुहूर्त",
    time: "3:30 AM – 6:00 AM",
    icon: "🌅",
    description:
      "The most sacred period — Brahma creates anew, gods descend to earth",
    generalActivity:
      "Rise, bathe, Sandhyavandana, Vedic recitation, meditation",
    color: "from-amber-900/40 to-orange-800/30",
  },
  {
    id: "madhyanha",
    number: 2,
    name: "Madhyanha",
    nameSanskrit: "मध्याह्न",
    time: "9:00 AM – 12:00 PM",
    icon: "☀️",
    description:
      "Peak solar energy — most auspicious for elaborate puja and rituals",
    generalActivity: "Full Shodashopachara puja, major rituals, havan, charity",
    color: "from-yellow-900/40 to-amber-800/30",
  },
  {
    id: "sandhya",
    number: 3,
    name: "Sayam Sandhya",
    nameSanskrit: "सायं संध्या",
    time: "5:30 PM – 7:00 PM",
    icon: "🌆",
    description:
      "Evening twilight — junction between day and night, Shiva's time",
    generalActivity: "Sandhyavandana, Tulsi puja, Diya lighting, evening aarti",
    color: "from-orange-900/40 to-red-900/30",
  },
  {
    id: "ratri",
    number: 4,
    name: "Ratri Puja",
    nameSanskrit: "रात्रि पूजा",
    time: "9:00 PM – 12:00 AM",
    icon: "🌙",
    description: "Night worship — Shiva, Devi, and Vishnu in their night forms",
    generalActivity: "Aarti, Shiva/Kali/Vishnu puja, mantra, sleep prayer",
    color: "from-indigo-900/40 to-blue-900/30",
  },
];

interface DeityPraharGuide {
  deityId: string;
  name: string;
  nameSanskrit: string;
  bestPrahar: string;
  prahars: {
    [key: string]: {
      offerings: string[];
      mantra: string;
      times: number;
      samagri: string[];
      procedure: string;
    } | null;
  };
}

const DEITY_GUIDES: DeityPraharGuide[] = [
  {
    deityId: "shiva",
    name: "Shiva",
    nameSanskrit: "शिव",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Gangajal", "Bel patra", "White flowers", "Vibhuti"],
        mantra: "ॐ नमः शिवाय",
        times: 108,
        samagri: [
          "Shivling",
          "Gangajal/water",
          "Bel patra",
          "White flowers",
          "Vibhuti/Bhasma",
          "Dhatura",
          "Milk",
        ],
        procedure:
          "Perform Abhishek with Gangajal, offer Bel patra (in sets of 3), apply Vibhuti. Chant Om Namah Shivaya 108 times. Light a single deepam. Offer white flowers.",
      },
      madhyanha: {
        offerings: ["Panchamrit abhishek", "Rudra pushpa", "Bilva leaves"],
        mantra: "ॐ त्र्यम्बकं यजामहे",
        times: 11,
        samagri: [
          "Panchamrit (milk, curd, ghee, honey, sugar)",
          "Bilva leaves",
          "Rudraksha",
          "White sandalwood",
        ],
        procedure:
          "Panchamrit abhishek over Shivling. Offer Bilva in sets of 3 with Mahamrityunjaya. Perform aarti.",
      },
      sandhya: {
        offerings: ["Deepam", "Dhupa", "Bel patra"],
        mantra: "ॐ नमः शिवाय",
        times: 21,
        samagri: ["Ghee deepam", "Camphor", "Agarbatti", "Bel patra"],
        procedure:
          "Light ghee lamp, offer Bel patra, perform Sandhya aarti. Chant Namah Shivaya 21 times.",
      },
      ratri: {
        offerings: ["Deepam", "White flowers", "Milk"],
        mantra: "ॐ नमः शिवाय नमः",
        times: 11,
        samagri: ["Deepam", "White flowers", "Cold milk"],
        procedure:
          "Offer white flowers and cold milk on Shivling. Light deepam. Perform Shivaratri-style night puja.",
      },
    },
  },
  {
    deityId: "vishnu",
    name: "Vishnu",
    nameSanskrit: "विष्णु",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Tulsi", "Yellow flowers", "Panchamrit"],
        mantra: "ॐ नमो नारायणाय",
        times: 108,
        samagri: [
          "Tulsi leaves",
          "Yellow flowers",
          "Panchamrit",
          "Yellow sandal paste",
          "Dhupa",
        ],
        procedure:
          "Rise at Brahma Muhurta. Offer Tulsi leaves first (never without Tulsi). Panchamrit abhishek. Chant Ashtakshara 108 times. Perform Tulsi Pradakshina.",
      },
      madhyanha: {
        offerings: ["Shodashopachara full puja", "Tulsi garland"],
        mantra: "ॐ नमो भगवते वासुदेवाय",
        times: 108,
        samagri: [
          "Full puja samagri",
          "Tulsi mala",
          "Yellow cloth",
          "Panchamrit",
          "Naivedhya",
        ],
        procedure:
          "Full 16-step Shodashopachara puja. Offer Tulsi garland. Recite Vishnu Sahasranama or Dvadasha Stotra.",
      },
      sandhya: {
        offerings: ["Tulsi", "Deepam", "Conch water"],
        mantra: "ॐ विष्णवे नमः",
        times: 21,
        samagri: ["Tulsi", "Ghee deepam", "Shankh water", "Camphor aarti"],
        procedure:
          "Blow the Shankh to begin. Offer Tulsi. Light deepam. Perform Sandhya aarti with camphor.",
      },
      ratri: null,
    },
  },
  {
    deityId: "lakshmi",
    name: "Lakshmi",
    nameSanskrit: "लक्ष्मी",
    bestPrahar: "madhyanha",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Red/pink lotus", "Kumkum", "Turmeric"],
        mantra: "ॐ श्रीं महालक्ष्म्यै नमः",
        times: 108,
        samagri: [
          "Red lotus or marigold",
          "Kumkum",
          "Turmeric",
          "Gold/silver coins",
        ],
        procedure:
          "Face east. Offer red/pink flowers first. Apply kumkum and turmeric. Chant Shreem Mahalakshmyai Namah 108 times. Keep clean coins on altar.",
      },
      madhyanha: {
        offerings: ["Shreedal puja with 16 steps", "Sweet naivedhya"],
        mantra: "ॐ ह्रीं श्रीं क्लीं महालक्ष्म्यै नमः",
        times: 108,
        samagri: [
          "Full puja samagri",
          "Kheer/payasam",
          "Red flowers",
          "Lotus if available",
        ],
        procedure:
          "Full Shodashopachara. Offer sweet kheer/payasam as naivedhya. Recite Shri Sukta (Rigveda). Perform Lakshmi aarti.",
      },
      sandhya: {
        offerings: ["Deepam (most important)", "Lotus", "Kumkum"],
        mantra: "ॐ श्रीं लक्ष्म्यै नमः",
        times: 21,
        samagri: ["Ghee deepam in red bowl", "Lotus flower", "Kumkum", "Rice"],
        procedure:
          "Lighting the Lakshmi deepam at sunset is most sacred. Place deepam at door. Offer lotus. Recite Mahalakshmi Ashtakam.",
      },
      ratri: null,
    },
  },
  {
    deityId: "ganesha",
    name: "Ganesha",
    nameSanskrit: "गणेश",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Modak (sweet)", "Red flowers", "Durva grass"],
        mantra: "ॐ गं गणपतये नमः",
        times: 108,
        samagri: [
          "Modak or sweet",
          "Red/marigold flowers",
          "Durva grass (21 blades)",
          "Red cloth",
        ],
        procedure:
          "Always begin puja of any deity with Ganesha first. Offer 21 Durva blades, modak, red flowers. Chant Gam Ganapataye 108 times. Circumambulate 3 times.",
      },
      madhyanha: {
        offerings: ["Panchamrit abhishek", "21 modak", "Shami leaves"],
        mantra: "ॐ गं गणपतये नमः ॐ",
        times: 21,
        samagri: ["Panchamrit", "21 modak", "Shami/Durva", "Red sindoor"],
        procedure:
          "Panchamrit abhishek. Offer 21 modak. Apply red sindoor. Recite Ganesha Atharvashirsha.",
      },
      sandhya: {
        offerings: ["Deepam", "Modak", "Durva"],
        mantra: "ॐ विघ्नहर्त्रे नमः",
        times: 11,
        samagri: ["Deepam", "Modak", "Durva grass"],
        procedure:
          "Light deepam before Ganesha. Offer Durva and modak. Chant Vignaharta mantra 11 times.",
      },
      ratri: null,
    },
  },
  {
    deityId: "saraswati",
    name: "Saraswati",
    nameSanskrit: "सरस्वती",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["White flowers", "Books/instruments", "White food"],
        mantra: "ॐ ऐं सरस्वत्यै नमः",
        times: 108,
        samagri: [
          "White flowers (jasmine)",
          "Books/instruments",
          "White kheer or sugar",
          "White cloth",
        ],
        procedure:
          "Best day: Panchami. Offer white flowers. Place books at altar. Offer white food. Chant Aim Sarasvatyai 108 times. Do not study from Basant Panchami to the next day.",
      },
      madhyanha: {
        offerings: ["Shodashopachara with white items", "Saraswati Vandana"],
        mantra: "ॐ सरस्वत्यै विद्महे ब्रह्मपुत्र्यै धीमहि",
        times: 21,
        samagri: ["All white items", "Veena symbol", "White pushpa"],
        procedure:
          "Full puja with white theme. Recite Saraswati Vandana, Gayatri, and Saraswati Stotram.",
      },
      sandhya: {
        offerings: ["White deepam", "Jasmine"],
        mantra: "ॐ ऐं सरस्वत्यै नमः",
        times: 21,
        samagri: ["White/sesame oil deepam", "Jasmine flowers"],
        procedure:
          "Light white sesame oil lamp. Offer jasmine. Pray for clear intellect before study.",
      },
      ratri: null,
    },
  },
  {
    deityId: "durga",
    name: "Durga",
    nameSanskrit: "दुर्गा",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Red flowers", "Sindoor", "Chunri"],
        mantra: "ॐ दुं दुर्गायै नमः",
        times: 108,
        samagri: [
          "Red flowers",
          "Red/orange chunri",
          "Sindoor",
          "Coconut",
          "Red deepam",
        ],
        procedure:
          "Offer red flowers and sindoor. Drape chunri on image. Chant Dum Durgayai Namah 108 times. Light red deepam. Offer coconut.",
      },
      madhyanha: {
        offerings: ["Durga Saptashati recitation", "Naivedhya of halwa"],
        mantra: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
        times: 11,
        samagri: ["Full Navratri samagri", "Halwa prasad", "Red flowers"],
        procedure:
          "Recite Durga Saptashati (or chapters). Offer halwa/prasad. Perform Kumari puja on Navami.",
      },
      sandhya: {
        offerings: ["Aarti", "Red deepam", "Dhoop"],
        mantra: "ॐ ह्रीं दुर्गायै नमः",
        times: 21,
        samagri: ["Red deepam", "Camphor aarti thali", "Dhoop", "Red flowers"],
        procedure:
          "Devi aarti at sunset is extremely important during Navratri. Light camphor aarti. Chant Hreem Durgayai 21 times.",
      },
      ratri: {
        offerings: ["Deepam", "Night puja", "Kali/Chamunda invocation"],
        mantra: "ॐ क्रीं कालिकायै नमः",
        times: 108,
        samagri: [
          "Black sesame deepam",
          "Hibiscus (Japakusuma)",
          "Blue/black cloth",
        ],
        procedure:
          "Midnight puja for Kali/Chamunda aspects. Offer hibiscus flowers. The 8th night of Navratri is supreme for this.",
      },
    },
  },
  {
    deityId: "hanuman",
    name: "Hanuman",
    nameSanskrit: "हनुमान",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Sindoor", "Jasmine garland", "Panchamrit"],
        mantra: "ॐ हं हनुमते नमः",
        times: 108,
        samagri: [
          "Sindoor (minium/vermilion)",
          "Jasmine garland",
          "Til oil deepam",
        ],
        procedure:
          "Apply sindoor mixed in oil on Hanuman murti. Offer jasmine. Chant Ham Hanumate 108 times. Best days: Tuesday and Saturday.",
      },
      madhyanha: {
        offerings: ["Hanuman Chalisa recitation", "Ladoo prasad"],
        mantra: "ॐ श्रीरामदूताय नमः",
        times: 11,
        samagri: ["Hanuman Chalisa text", "Besan ladoo", "Red cloth"],
        procedure:
          "Recite Hanuman Chalisa. Offer ladoo prasad. Chant Ram Nama with Hanuman as witness.",
      },
      sandhya: {
        offerings: ["Til oil deepam", "Sindoor"],
        mantra: "ॐ हं हनुमते रुद्रात्मकाय हुं फट्",
        times: 21,
        samagri: ["Til (sesame) oil deepam", "Sindoor"],
        procedure:
          "Light til oil lamp before Hanuman. Apply sindoor. Chant Panchakshara with Hanuman's name.",
      },
      ratri: null,
    },
  },
  {
    deityId: "krishna",
    name: "Krishna",
    nameSanskrit: "कृष्ण",
    bestPrahar: "madhyanha",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Tulsi", "Yellow flowers", "Butter/Makhan"],
        mantra: "ॐ नमो भगवते वासुदेवाय",
        times: 108,
        samagri: [
          "Tulsi leaves",
          "Yellow/white flowers",
          "Fresh butter",
          "Flute image",
        ],
        procedure:
          "Mangala aarti (Vaishnava practice). Offer Tulsi. Place butter as prasad. Chant Dvadasha mantra 108 times.",
      },
      madhyanha: {
        offerings: ["Madhyanha bhog", "Full 5-time seva"],
        mantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        times: 108,
        samagri: [
          "Full bhog thali",
          "Tulsi",
          "Yellow/blue flowers",
          "Panchamrit",
        ],
        procedure:
          "Raja bhoga (royal food offering). Full Shodashopachara. Recite Bhagavad Gita or Bhagavata. Maha aarti.",
      },
      sandhya: {
        offerings: ["Sandhya aarti", "Tulsi Pradakshina"],
        mantra: "हरे राम हरे राम राम राम हरे हरे",
        times: 108,
        samagri: ["Deepam", "Tulsi", "Camphor aarti", "Flowers"],
        procedure:
          "Sandhya aarti at dusk. Tulsi Pradakshina (circumambulate Tulsi plant). Maha Mantra 108 times.",
      },
      ratri: {
        offerings: ["Shayan bhog", "Goodnight prayer"],
        mantra: "ॐ नमो भगवते वासुदेवाय",
        times: 11,
        samagri: ["Light naivedhya", "White flowers", "Deepam"],
        procedure:
          "Shayan seva — put Krishna to rest. Offer light food, white flowers. Pray for Krishna's protection through the night.",
      },
    },
  },
  {
    deityId: "rama",
    name: "Rama",
    nameSanskrit: "राम",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Tulsi", "Yellow flowers", "Bilva"],
        mantra: "ॐ श्रीराम जय राम जय जय राम",
        times: 108,
        samagri: ["Tulsi", "Yellow/white flowers", "Sandal paste"],
        procedure:
          "Offer Tulsi. Chant Ram Naam 108 times. Recite Ramayana or Sundara Kanda. Best days: Sunday and Ram Navami.",
      },
      madhyanha: {
        offerings: ["Ramayana recitation", "Panch bhog"],
        mantra: "ॐ रामाय नमः",
        times: 108,
        samagri: ["Five food items", "Tulsi", "Sita-Ram image"],
        procedure:
          "Full puja with Sita, Rama, Lakshmana, and Hanuman. Recite Ramayana. Offer bhog.",
      },
      sandhya: {
        offerings: ["Tulsi aarti", "Deepam"],
        mantra: "जय राम राम राम",
        times: 21,
        samagri: ["Deepam", "Tulsi", "Camphor"],
        procedure:
          "Evening aarti for Rama. Light deepam. Tulsi seva. Recite Hanuman Chalisa or Ramayana dohas.",
      },
      ratri: null,
    },
  },
  {
    deityId: "surya",
    name: "Surya",
    nameSanskrit: "सूर्य",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Water arghya", "Red flowers", "Red cloth"],
        mantra: "ॐ सूर्याय नमः",
        times: 108,
        samagri: [
          "Copper vessel with water",
          "Red flowers",
          "Red sandal",
          "Akshat (rice)",
        ],
        procedure:
          "Face east. Offer Arghya to rising sun — pour water from copper vessel as sun rises, chant Surya mantra. Most powerful puja is at sunrise itself.",
      },
      madhyanha: {
        offerings: ["Surya Namaskar 12 rounds", "Water arghya at noon"],
        mantra: "ॐ घृणि सूर्य आदित्य",
        times: 12,
        samagri: ["Copper vessel", "Red flowers", "Open sky access"],
        procedure:
          "Perform 12 Surya Namaskars. Offer noon arghya at solar zenith. Chant Aditya Hridayam.",
      },
      sandhya: null,
      ratri: null,
    },
  },
  {
    deityId: "kali",
    name: "Kali",
    nameSanskrit: "काली",
    bestPrahar: "ratri",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Hibiscus", "Sindoor", "Deepam"],
        mantra: "ॐ क्रीं कालिकायै नमः",
        times: 108,
        samagri: ["Hibiscus (Japakusuma)", "Sindoor", "Til oil deepam"],
        procedure:
          "Kali's energy is strongest at midnight and brahma muhurta. Offer Japakusuma (hibiscus). Chant Kreem Kalikayai 108 times.",
      },
      madhyanha: null,
      sandhya: {
        offerings: ["Deepam", "Hibiscus"],
        mantra: "ॐ ह्रीं क्रीं कालिकायै नमः",
        times: 21,
        samagri: ["Deepam", "Hibiscus", "Black sesame"],
        procedure: "Evening aarti. Offer hibiscus. Light black sesame deepam.",
      },
      ratri: {
        offerings: ["Full Kali puja", "108 hibiscus", "Deepam"],
        mantra: "ॐ क्रीं कालिकायै नमः ह्रीं",
        times: 108,
        samagri: [
          "108 hibiscus flowers",
          "Midnight deepam",
          "Sindoor",
          "Red wine/coconut water substitute",
        ],
        procedure:
          "Kali Puja is most potent at midnight. Offer 108 hibiscus. Light 108 deepams. Recite Kali Kavach. Most powerful on Diwali night.",
      },
    },
  },
  {
    deityId: "shani",
    name: "Shani",
    nameSanskrit: "शनि",
    bestPrahar: "sandhya",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Til oil", "Sesame", "Black items"],
        mantra: "ॐ शं शनिश्चराय नमः",
        times: 108,
        samagri: ["Sesame oil", "Black sesame", "Black cloth", "Iron nail"],
        procedure:
          "Saturday Shani puja. Offer sesame oil on Shani murti. Black sesame havan. Chant Shani mantra 108 times.",
      },
      madhyanha: null,
      sandhya: {
        offerings: ["Til oil deepam", "Black sesame"],
        mantra: "ॐ शनये नमः",
        times: 19,
        samagri: ["Til oil deepam", "Black sesame", "Urad dal"],
        procedure:
          "Saturday evening — offer Til oil deepam under Peepal tree. Donate black items. Chant Shani mantra 19 times.",
      },
      ratri: null,
    },
  },
  {
    deityId: "kartikeya",
    name: "Kartikeya",
    nameSanskrit: "कार्तिकेय",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Red flowers", "Vel symbol", "Peacock feather"],
        mantra: "ॐ कार्तिकेयाय नमः",
        times: 108,
        samagri: ["Red flowers", "Peacock feather", "Milk", "Honey"],
        procedure:
          "Best day: Tuesday and Thaipusam. Offer red flowers. Peacock feather decoration. Milk abhishek. Chant Kartikeya mantra 108 times.",
      },
      madhyanha: {
        offerings: ["Vel puja", "Kavadi in major temples"],
        mantra: "ॐ सरवणभव",
        times: 108,
        samagri: ["Vel (spear) symbol", "Red flowers", "Fruits"],
        procedure:
          "The 6-syllable mantra of Kartikeya: Om Saravanabhava. Offer fruits and red flowers.",
      },
      sandhya: null,
      ratri: null,
    },
  },
  {
    deityId: "brahma",
    name: "Brahma",
    nameSanskrit: "ब्रह्मा",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Lotus", "White flowers", "Books/Vedas"],
        mantra: "ॐ ब्रह्मणे नमः",
        times: 108,
        samagri: [
          "Lotus flowers",
          "White flowers",
          "Veda text symbol",
          "Kamandalu water",
        ],
        procedure:
          "Brahma puja is rare. Most sacred time is Brahma Muhurta (named after him). Offer lotus. Recite Vedic hymns. Chant Brahma mantra 108 times.",
      },
      madhyanha: {
        offerings: ["Gayatri Mantra recitation", "Lotus"],
        mantra: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं",
        times: 108,
        samagri: ["Lotus", "Kamandalu water", "White items"],
        procedure:
          "Gayatri Japa is the supreme worship of Brahma's energy. Recite Gayatri 108 times facing the sun.",
      },
      sandhya: null,
      ratri: null,
    },
  },
  {
    deityId: "indra",
    name: "Indra",
    nameSanskrit: "इन्द्र",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["White flowers", "Soma offering", "Rain prayers"],
        mantra: "ॐ इन्द्राय नमः",
        times: 108,
        samagri: [
          "White flowers",
          "Soma (coconut milk substitute)",
          "Indra Dhvaja",
        ],
        procedure:
          "Indra puja for rain, power, and victory. Offer white flowers. Coconut milk as Soma substitute. Chant Indra mantra 108 times. Most relevant in drought or before battle.",
      },
      madhyanha: null,
      sandhya: null,
      ratri: null,
    },
  },
  {
    deityId: "chandra",
    name: "Chandra",
    nameSanskrit: "चन्द्र",
    bestPrahar: "ratri",
    prahars: {
      "brahma-muhurta": {
        offerings: ["White flowers", "Milk", "Rice"],
        mantra: "ॐ सों सोमाय नमः",
        times: 11,
        samagri: ["White flowers", "White rice", "Milk", "Silver items"],
        procedure:
          "Chandra puja before moonset at Brahma Muhurta. Offer white items. Chant Som Somaya Namah.",
      },
      madhyanha: null,
      sandhya: null,
      ratri: {
        offerings: ["Moonlight darshan", "Milk offering", "White flowers"],
        mantra: "ॐ चन्द्राय नमः",
        times: 108,
        samagri: [
          "White/silver vessel with milk",
          "White flowers",
          "White rice",
        ],
        procedure:
          "Face the full moon. Offer milk under moonlight. Place white flowers. Chant Chandraya Namah 108 times. Most sacred on Purnima (full moon).",
      },
    },
  },
  {
    deityId: "navagraha",
    name: "Navagraha (All Nine Planets)",
    nameSanskrit: "नवग्रह",
    bestPrahar: "madhyanha",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Nine-grain offering", "Nine colored flowers"],
        mantra: "ॐ सूर्यादि नवग्रहेभ्यो नमः",
        times: 9,
        samagri: [
          "Nine grains (navadhanyas)",
          "Nine colored flowers one each",
          "Nine deepams",
        ],
        procedure:
          "Place nine lamps for nine planets. Offer each planet's specific grain and flower. Chant each planet mantra 9 times for a quick salutation.",
      },
      madhyanha: {
        offerings: ["Full Navagraha puja", "Nine specific items"],
        mantra: "ब्रह्मा मुरारिस्त्रिपुरान्तकारी...",
        times: 108,
        samagri: [
          "Nine specific grains",
          "Nine colored cloths",
          "Nine specific flowers",
          "Navagraha yantra",
        ],
        procedure:
          "The full Navagraha shanti puja with each planet's specific samagri. Recite Navagraha stotra. Best done on Rahu Kalam days for full effect.",
      },
      sandhya: null,
      ratri: null,
    },
  },
  {
    deityId: "vayu",
    name: "Vayu (Prana)",
    nameSanskrit: "वायु",
    bestPrahar: "brahma-muhurta",
    prahars: {
      "brahma-muhurta": {
        offerings: ["Pranayama", "Air prayer", "Incense"],
        mantra: "ॐ वायवे नमः",
        times: 108,
        samagri: ["Pure incense", "Open air altar", "Blue/white flowers"],
        procedure:
          "Perform 108 Pranayama cycles as worship of Vayu deva. Offer incense to the four directions. Best done in open air at dawn.",
      },
      madhyanha: null,
      sandhya: null,
      ratri: null,
    },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PraharPoojaSection() {
  const [selectedPrahar, setSelectedPrahar] = useState(PRAHARS[0].id);
  const [selectedDeity, setSelectedDeity] = useState(DEITY_GUIDES[0].deityId);

  const prahar = PRAHARS.find((p) => p.id === selectedPrahar)!;
  const deity = DEITY_GUIDES.find((d) => d.deityId === selectedDeity)!;
  const praharData = deity.prahars[selectedPrahar];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <p className="text-verse-number tracking-widest mb-1">
          ॥ चतुष्प्रहर पूजा विधि ॥
        </p>
        <h2 className="font-display text-2xl font-bold italic text-primary mb-2">
          4 Prahar Pooja Guide
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
          The day is divided into 4 Prahars (3-hour sacred periods). Each Prahar
          has specific energies, presiding deities, and prescribed worship
          methods according to Vedic tradition.
        </p>
      </div>

      {/* Prahar Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {PRAHARS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelectedPrahar(p.id)}
            data-ocid={`prahar-tab-${p.id}`}
            className={`p-4 border text-center transition-smooth ${
              selectedPrahar === p.id
                ? "border-accent/60 bg-accent/10"
                : "border-border hover:border-accent/30 hover:bg-accent/5"
            }`}
            style={{ borderRadius: "2px" }}
          >
            <div className="text-2xl mb-1">{p.icon}</div>
            <p className="font-display text-xs font-semibold text-foreground">
              {p.name}
            </p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">
              {p.time}
            </p>
          </button>
        ))}
      </div>

      {/* Selected Prahar Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPrahar}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`p-4 border border-border/50 bg-gradient-to-r ${prahar.color}`}
          style={{ borderRadius: "2px" }}
        >
          <p className="font-display text-lg font-bold text-foreground">
            {prahar.icon} {prahar.nameSanskrit} — {prahar.name}
          </p>
          <p className="font-body text-sm text-muted-foreground mt-1">
            {prahar.description}
          </p>
          <p className="font-body text-xs italic text-accent mt-2">
            ✦ General Practice: {prahar.generalActivity}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Deity Grid */}
      <div>
        <p className="text-verse-number tracking-widest mb-3">
          Select Deity for Detailed Vidhi ↓
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {DEITY_GUIDES.map((d) => (
            <button
              key={d.deityId}
              type="button"
              onClick={() => setSelectedDeity(d.deityId)}
              data-ocid={`prahar-deity-${d.deityId}`}
              className={`p-2 border text-center transition-smooth text-xs ${
                selectedDeity === d.deityId
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-border hover:border-accent/30 text-muted-foreground hover:text-foreground"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <p className="font-display font-semibold leading-tight">
                {d.name}
              </p>
              <p className="font-body italic" style={{ fontSize: "0.65rem" }}>
                {d.nameSanskrit}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Puja Vidhi Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedDeity}-${selectedPrahar}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border border-border"
          style={{
            background: "oklch(var(--card) / 0.7)",
            borderRadius: "2px",
          }}
        >
          <div
            className="px-5 py-3 border-b border-border/40"
            style={{ background: "oklch(var(--muted) / 0.4)" }}
          >
            <p className="font-display text-base font-semibold text-foreground">
              {deity.name} ({deity.nameSanskrit}) — {prahar.name} Puja Vidhi
            </p>
            {deity.bestPrahar === selectedPrahar && (
              <p
                className="text-xs mt-0.5"
                style={{ color: "oklch(var(--accent))" }}
              >
                ✦ This is the BEST prahar for {deity.name} worship
              </p>
            )}
          </div>

          {praharData ? (
            <div className="p-5 space-y-4">
              {/* Mantra */}
              <div
                className="p-4 border border-border/30 text-center"
                style={{ background: "oklch(var(--muted) / 0.3)" }}
              >
                <p className="font-body text-xs text-muted-foreground mb-1">
                  Mantra to chant
                </p>
                <p className="font-body text-lg font-medium text-foreground leading-relaxed">
                  {praharData.mantra}
                </p>
                <p className="font-body text-xs text-accent mt-1">
                  Repeat {praharData.times} times
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Offerings */}
                <div>
                  <p className="font-display text-sm font-semibold text-foreground mb-2">
                    🌸 Offerings (Upachara)
                  </p>
                  <ul className="space-y-1">
                    {praharData.offerings.map((o) => (
                      <li
                        key={o}
                        className="font-body text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-accent shrink-0">•</span> {o}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Samagri */}
                <div>
                  <p className="font-display text-sm font-semibold text-foreground mb-2">
                    🪔 Samagri (Materials)
                  </p>
                  <ul className="space-y-1">
                    {praharData.samagri.map((s) => (
                      <li
                        key={s}
                        className="font-body text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-accent shrink-0">✦</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Procedure */}
              <div
                className="p-4 border-l-2"
                style={{
                  borderColor: "oklch(var(--accent) / 0.5)",
                  background: "oklch(var(--muted) / 0.2)",
                }}
              >
                <p className="font-display text-sm font-semibold text-foreground mb-1">
                  📿 Puja Vidhi (Procedure)
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {praharData.procedure}
                </p>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="font-body text-sm text-muted-foreground italic">
                {deity.name} is not traditionally worshipped during{" "}
                {prahar.name}.<br />
                Best time:{" "}
                {PRAHARS.find((p) => p.id === deity.bestPrahar)?.name} (
                {PRAHARS.find((p) => p.id === deity.bestPrahar)?.time})
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
