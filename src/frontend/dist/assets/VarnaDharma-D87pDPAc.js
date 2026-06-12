import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-CodWPqWB.js";
const PRAHARS = [
  {
    id: "brahma-muhurta",
    number: 1,
    name: "Brahma Muhurta",
    nameSanskrit: "ब्रह्म मुहूर्त",
    time: "3:30 AM – 6:00 AM",
    icon: "🌅",
    description: "The most sacred period — Brahma creates anew, gods descend to earth",
    generalActivity: "Rise, bathe, Sandhyavandana, Vedic recitation, meditation",
    color: "from-amber-900/40 to-orange-800/30"
  },
  {
    id: "madhyanha",
    number: 2,
    name: "Madhyanha",
    nameSanskrit: "मध्याह्न",
    time: "9:00 AM – 12:00 PM",
    icon: "☀️",
    description: "Peak solar energy — most auspicious for elaborate puja and rituals",
    generalActivity: "Full Shodashopachara puja, major rituals, havan, charity",
    color: "from-yellow-900/40 to-amber-800/30"
  },
  {
    id: "sandhya",
    number: 3,
    name: "Sayam Sandhya",
    nameSanskrit: "सायं संध्या",
    time: "5:30 PM – 7:00 PM",
    icon: "🌆",
    description: "Evening twilight — junction between day and night, Shiva's time",
    generalActivity: "Sandhyavandana, Tulsi puja, Diya lighting, evening aarti",
    color: "from-orange-900/40 to-red-900/30"
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
    color: "from-indigo-900/40 to-blue-900/30"
  }
];
const DEITY_GUIDES = [
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
          "Milk"
        ],
        procedure: "Perform Abhishek with Gangajal, offer Bel patra (in sets of 3), apply Vibhuti. Chant Om Namah Shivaya 108 times. Light a single deepam. Offer white flowers."
      },
      madhyanha: {
        offerings: ["Panchamrit abhishek", "Rudra pushpa", "Bilva leaves"],
        mantra: "ॐ त्र्यम्बकं यजामहे",
        times: 11,
        samagri: [
          "Panchamrit (milk, curd, ghee, honey, sugar)",
          "Bilva leaves",
          "Rudraksha",
          "White sandalwood"
        ],
        procedure: "Panchamrit abhishek over Shivling. Offer Bilva in sets of 3 with Mahamrityunjaya. Perform aarti."
      },
      sandhya: {
        offerings: ["Deepam", "Dhupa", "Bel patra"],
        mantra: "ॐ नमः शिवाय",
        times: 21,
        samagri: ["Ghee deepam", "Camphor", "Agarbatti", "Bel patra"],
        procedure: "Light ghee lamp, offer Bel patra, perform Sandhya aarti. Chant Namah Shivaya 21 times."
      },
      ratri: {
        offerings: ["Deepam", "White flowers", "Milk"],
        mantra: "ॐ नमः शिवाय नमः",
        times: 11,
        samagri: ["Deepam", "White flowers", "Cold milk"],
        procedure: "Offer white flowers and cold milk on Shivling. Light deepam. Perform Shivaratri-style night puja."
      }
    }
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
          "Dhupa"
        ],
        procedure: "Rise at Brahma Muhurta. Offer Tulsi leaves first (never without Tulsi). Panchamrit abhishek. Chant Ashtakshara 108 times. Perform Tulsi Pradakshina."
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
          "Naivedhya"
        ],
        procedure: "Full 16-step Shodashopachara puja. Offer Tulsi garland. Recite Vishnu Sahasranama or Dvadasha Stotra."
      },
      sandhya: {
        offerings: ["Tulsi", "Deepam", "Conch water"],
        mantra: "ॐ विष्णवे नमः",
        times: 21,
        samagri: ["Tulsi", "Ghee deepam", "Shankh water", "Camphor aarti"],
        procedure: "Blow the Shankh to begin. Offer Tulsi. Light deepam. Perform Sandhya aarti with camphor."
      },
      ratri: null
    }
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
          "Gold/silver coins"
        ],
        procedure: "Face east. Offer red/pink flowers first. Apply kumkum and turmeric. Chant Shreem Mahalakshmyai Namah 108 times. Keep clean coins on altar."
      },
      madhyanha: {
        offerings: ["Shreedal puja with 16 steps", "Sweet naivedhya"],
        mantra: "ॐ ह्रीं श्रीं क्लीं महालक्ष्म्यै नमः",
        times: 108,
        samagri: [
          "Full puja samagri",
          "Kheer/payasam",
          "Red flowers",
          "Lotus if available"
        ],
        procedure: "Full Shodashopachara. Offer sweet kheer/payasam as naivedhya. Recite Shri Sukta (Rigveda). Perform Lakshmi aarti."
      },
      sandhya: {
        offerings: ["Deepam (most important)", "Lotus", "Kumkum"],
        mantra: "ॐ श्रीं लक्ष्म्यै नमः",
        times: 21,
        samagri: ["Ghee deepam in red bowl", "Lotus flower", "Kumkum", "Rice"],
        procedure: "Lighting the Lakshmi deepam at sunset is most sacred. Place deepam at door. Offer lotus. Recite Mahalakshmi Ashtakam."
      },
      ratri: null
    }
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
          "Red cloth"
        ],
        procedure: "Always begin puja of any deity with Ganesha first. Offer 21 Durva blades, modak, red flowers. Chant Gam Ganapataye 108 times. Circumambulate 3 times."
      },
      madhyanha: {
        offerings: ["Panchamrit abhishek", "21 modak", "Shami leaves"],
        mantra: "ॐ गं गणपतये नमः ॐ",
        times: 21,
        samagri: ["Panchamrit", "21 modak", "Shami/Durva", "Red sindoor"],
        procedure: "Panchamrit abhishek. Offer 21 modak. Apply red sindoor. Recite Ganesha Atharvashirsha."
      },
      sandhya: {
        offerings: ["Deepam", "Modak", "Durva"],
        mantra: "ॐ विघ्नहर्त्रे नमः",
        times: 11,
        samagri: ["Deepam", "Modak", "Durva grass"],
        procedure: "Light deepam before Ganesha. Offer Durva and modak. Chant Vignaharta mantra 11 times."
      },
      ratri: null
    }
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
          "White cloth"
        ],
        procedure: "Best day: Panchami. Offer white flowers. Place books at altar. Offer white food. Chant Aim Sarasvatyai 108 times. Do not study from Basant Panchami to the next day."
      },
      madhyanha: {
        offerings: ["Shodashopachara with white items", "Saraswati Vandana"],
        mantra: "ॐ सरस्वत्यै विद्महे ब्रह्मपुत्र्यै धीमहि",
        times: 21,
        samagri: ["All white items", "Veena symbol", "White pushpa"],
        procedure: "Full puja with white theme. Recite Saraswati Vandana, Gayatri, and Saraswati Stotram."
      },
      sandhya: {
        offerings: ["White deepam", "Jasmine"],
        mantra: "ॐ ऐं सरस्वत्यै नमः",
        times: 21,
        samagri: ["White/sesame oil deepam", "Jasmine flowers"],
        procedure: "Light white sesame oil lamp. Offer jasmine. Pray for clear intellect before study."
      },
      ratri: null
    }
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
          "Red deepam"
        ],
        procedure: "Offer red flowers and sindoor. Drape chunri on image. Chant Dum Durgayai Namah 108 times. Light red deepam. Offer coconut."
      },
      madhyanha: {
        offerings: ["Durga Saptashati recitation", "Naivedhya of halwa"],
        mantra: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
        times: 11,
        samagri: ["Full Navratri samagri", "Halwa prasad", "Red flowers"],
        procedure: "Recite Durga Saptashati (or chapters). Offer halwa/prasad. Perform Kumari puja on Navami."
      },
      sandhya: {
        offerings: ["Aarti", "Red deepam", "Dhoop"],
        mantra: "ॐ ह्रीं दुर्गायै नमः",
        times: 21,
        samagri: ["Red deepam", "Camphor aarti thali", "Dhoop", "Red flowers"],
        procedure: "Devi aarti at sunset is extremely important during Navratri. Light camphor aarti. Chant Hreem Durgayai 21 times."
      },
      ratri: {
        offerings: ["Deepam", "Night puja", "Kali/Chamunda invocation"],
        mantra: "ॐ क्रीं कालिकायै नमः",
        times: 108,
        samagri: [
          "Black sesame deepam",
          "Hibiscus (Japakusuma)",
          "Blue/black cloth"
        ],
        procedure: "Midnight puja for Kali/Chamunda aspects. Offer hibiscus flowers. The 8th night of Navratri is supreme for this."
      }
    }
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
          "Til oil deepam"
        ],
        procedure: "Apply sindoor mixed in oil on Hanuman murti. Offer jasmine. Chant Ham Hanumate 108 times. Best days: Tuesday and Saturday."
      },
      madhyanha: {
        offerings: ["Hanuman Chalisa recitation", "Ladoo prasad"],
        mantra: "ॐ श्रीरामदूताय नमः",
        times: 11,
        samagri: ["Hanuman Chalisa text", "Besan ladoo", "Red cloth"],
        procedure: "Recite Hanuman Chalisa. Offer ladoo prasad. Chant Ram Nama with Hanuman as witness."
      },
      sandhya: {
        offerings: ["Til oil deepam", "Sindoor"],
        mantra: "ॐ हं हनुमते रुद्रात्मकाय हुं फट्",
        times: 21,
        samagri: ["Til (sesame) oil deepam", "Sindoor"],
        procedure: "Light til oil lamp before Hanuman. Apply sindoor. Chant Panchakshara with Hanuman's name."
      },
      ratri: null
    }
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
          "Flute image"
        ],
        procedure: "Mangala aarti (Vaishnava practice). Offer Tulsi. Place butter as prasad. Chant Dvadasha mantra 108 times."
      },
      madhyanha: {
        offerings: ["Madhyanha bhog", "Full 5-time seva"],
        mantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        times: 108,
        samagri: [
          "Full bhog thali",
          "Tulsi",
          "Yellow/blue flowers",
          "Panchamrit"
        ],
        procedure: "Raja bhoga (royal food offering). Full Shodashopachara. Recite Bhagavad Gita or Bhagavata. Maha aarti."
      },
      sandhya: {
        offerings: ["Sandhya aarti", "Tulsi Pradakshina"],
        mantra: "हरे राम हरे राम राम राम हरे हरे",
        times: 108,
        samagri: ["Deepam", "Tulsi", "Camphor aarti", "Flowers"],
        procedure: "Sandhya aarti at dusk. Tulsi Pradakshina (circumambulate Tulsi plant). Maha Mantra 108 times."
      },
      ratri: {
        offerings: ["Shayan bhog", "Goodnight prayer"],
        mantra: "ॐ नमो भगवते वासुदेवाय",
        times: 11,
        samagri: ["Light naivedhya", "White flowers", "Deepam"],
        procedure: "Shayan seva — put Krishna to rest. Offer light food, white flowers. Pray for Krishna's protection through the night."
      }
    }
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
        procedure: "Offer Tulsi. Chant Ram Naam 108 times. Recite Ramayana or Sundara Kanda. Best days: Sunday and Ram Navami."
      },
      madhyanha: {
        offerings: ["Ramayana recitation", "Panch bhog"],
        mantra: "ॐ रामाय नमः",
        times: 108,
        samagri: ["Five food items", "Tulsi", "Sita-Ram image"],
        procedure: "Full puja with Sita, Rama, Lakshmana, and Hanuman. Recite Ramayana. Offer bhog."
      },
      sandhya: {
        offerings: ["Tulsi aarti", "Deepam"],
        mantra: "जय राम राम राम",
        times: 21,
        samagri: ["Deepam", "Tulsi", "Camphor"],
        procedure: "Evening aarti for Rama. Light deepam. Tulsi seva. Recite Hanuman Chalisa or Ramayana dohas."
      },
      ratri: null
    }
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
          "Akshat (rice)"
        ],
        procedure: "Face east. Offer Arghya to rising sun — pour water from copper vessel as sun rises, chant Surya mantra. Most powerful puja is at sunrise itself."
      },
      madhyanha: {
        offerings: ["Surya Namaskar 12 rounds", "Water arghya at noon"],
        mantra: "ॐ घृणि सूर्य आदित्य",
        times: 12,
        samagri: ["Copper vessel", "Red flowers", "Open sky access"],
        procedure: "Perform 12 Surya Namaskars. Offer noon arghya at solar zenith. Chant Aditya Hridayam."
      },
      sandhya: null,
      ratri: null
    }
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
        procedure: "Kali's energy is strongest at midnight and brahma muhurta. Offer Japakusuma (hibiscus). Chant Kreem Kalikayai 108 times."
      },
      madhyanha: null,
      sandhya: {
        offerings: ["Deepam", "Hibiscus"],
        mantra: "ॐ ह्रीं क्रीं कालिकायै नमः",
        times: 21,
        samagri: ["Deepam", "Hibiscus", "Black sesame"],
        procedure: "Evening aarti. Offer hibiscus. Light black sesame deepam."
      },
      ratri: {
        offerings: ["Full Kali puja", "108 hibiscus", "Deepam"],
        mantra: "ॐ क्रीं कालिकायै नमः ह्रीं",
        times: 108,
        samagri: [
          "108 hibiscus flowers",
          "Midnight deepam",
          "Sindoor",
          "Red wine/coconut water substitute"
        ],
        procedure: "Kali Puja is most potent at midnight. Offer 108 hibiscus. Light 108 deepams. Recite Kali Kavach. Most powerful on Diwali night."
      }
    }
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
        procedure: "Saturday Shani puja. Offer sesame oil on Shani murti. Black sesame havan. Chant Shani mantra 108 times."
      },
      madhyanha: null,
      sandhya: {
        offerings: ["Til oil deepam", "Black sesame"],
        mantra: "ॐ शनये नमः",
        times: 19,
        samagri: ["Til oil deepam", "Black sesame", "Urad dal"],
        procedure: "Saturday evening — offer Til oil deepam under Peepal tree. Donate black items. Chant Shani mantra 19 times."
      },
      ratri: null
    }
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
        procedure: "Best day: Tuesday and Thaipusam. Offer red flowers. Peacock feather decoration. Milk abhishek. Chant Kartikeya mantra 108 times."
      },
      madhyanha: {
        offerings: ["Vel puja", "Kavadi in major temples"],
        mantra: "ॐ सरवणभव",
        times: 108,
        samagri: ["Vel (spear) symbol", "Red flowers", "Fruits"],
        procedure: "The 6-syllable mantra of Kartikeya: Om Saravanabhava. Offer fruits and red flowers."
      },
      sandhya: null,
      ratri: null
    }
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
          "Kamandalu water"
        ],
        procedure: "Brahma puja is rare. Most sacred time is Brahma Muhurta (named after him). Offer lotus. Recite Vedic hymns. Chant Brahma mantra 108 times."
      },
      madhyanha: {
        offerings: ["Gayatri Mantra recitation", "Lotus"],
        mantra: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं",
        times: 108,
        samagri: ["Lotus", "Kamandalu water", "White items"],
        procedure: "Gayatri Japa is the supreme worship of Brahma's energy. Recite Gayatri 108 times facing the sun."
      },
      sandhya: null,
      ratri: null
    }
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
          "Indra Dhvaja"
        ],
        procedure: "Indra puja for rain, power, and victory. Offer white flowers. Coconut milk as Soma substitute. Chant Indra mantra 108 times. Most relevant in drought or before battle."
      },
      madhyanha: null,
      sandhya: null,
      ratri: null
    }
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
        procedure: "Chandra puja before moonset at Brahma Muhurta. Offer white items. Chant Som Somaya Namah."
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
          "White rice"
        ],
        procedure: "Face the full moon. Offer milk under moonlight. Place white flowers. Chant Chandraya Namah 108 times. Most sacred on Purnima (full moon)."
      }
    }
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
          "Nine deepams"
        ],
        procedure: "Place nine lamps for nine planets. Offer each planet's specific grain and flower. Chant each planet mantra 9 times for a quick salutation."
      },
      madhyanha: {
        offerings: ["Full Navagraha puja", "Nine specific items"],
        mantra: "ब्रह्मा मुरारिस्त्रिपुरान्तकारी...",
        times: 108,
        samagri: [
          "Nine specific grains",
          "Nine colored cloths",
          "Nine specific flowers",
          "Navagraha yantra"
        ],
        procedure: "The full Navagraha shanti puja with each planet's specific samagri. Recite Navagraha stotra. Best done on Rahu Kalam days for full effect."
      },
      sandhya: null,
      ratri: null
    }
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
        procedure: "Perform 108 Pranayama cycles as worship of Vayu deva. Offer incense to the four directions. Best done in open air at dawn."
      },
      madhyanha: null,
      sandhya: null,
      ratri: null
    }
  }
];
function PraharPoojaSection() {
  var _a, _b;
  const [selectedPrahar, setSelectedPrahar] = reactExports.useState(PRAHARS[0].id);
  const [selectedDeity, setSelectedDeity] = reactExports.useState(DEITY_GUIDES[0].deityId);
  const prahar = PRAHARS.find((p) => p.id === selectedPrahar);
  const deity = DEITY_GUIDES.find((d) => d.deityId === selectedDeity);
  const praharData = deity.prahars[selectedPrahar];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest mb-1", children: "॥ चतुष्प्रहर पूजा विधि ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold italic text-primary mb-2", children: "4 Prahar Pooja Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground max-w-lg mx-auto", children: "The day is divided into 4 Prahars (3-hour sacred periods). Each Prahar has specific energies, presiding deities, and prescribed worship methods according to Vedic tradition." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: PRAHARS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setSelectedPrahar(p.id),
        "data-ocid": `prahar-tab-${p.id}`,
        className: `p-4 border text-center transition-smooth ${selectedPrahar === p.id ? "border-accent/60 bg-accent/10" : "border-border hover:border-accent/30 hover:bg-accent/5"}`,
        style: { borderRadius: "2px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: p.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-foreground", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-0.5", children: p.time })
        ]
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        className: `p-4 border border-border/50 bg-gradient-to-r ${prahar.color}`,
        style: { borderRadius: "2px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-bold text-foreground", children: [
            prahar.icon,
            " ",
            prahar.nameSanskrit,
            " — ",
            prahar.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mt-1", children: prahar.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs italic text-accent mt-2", children: [
            "✦ General Practice: ",
            prahar.generalActivity
          ] })
        ]
      },
      selectedPrahar
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest mb-3", children: "Select Deity for Detailed Vidhi ↓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2", children: DEITY_GUIDES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSelectedDeity(d.deityId),
          "data-ocid": `prahar-deity-${d.deityId}`,
          className: `p-2 border text-center transition-smooth text-xs ${selectedDeity === d.deityId ? "border-accent/60 bg-accent/10 text-accent" : "border-border hover:border-accent/30 text-muted-foreground hover:text-foreground"}`,
          style: { borderRadius: "2px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold leading-tight", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body italic", style: { fontSize: "0.65rem" }, children: d.nameSanskrit })
          ]
        },
        d.deityId
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        className: "border border-border",
        style: {
          background: "oklch(var(--card) / 0.7)",
          borderRadius: "2px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-5 py-3 border-b border-border/40",
              style: { background: "oklch(var(--muted) / 0.4)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-base font-semibold text-foreground", children: [
                  deity.name,
                  " (",
                  deity.nameSanskrit,
                  ") — ",
                  prahar.name,
                  " Puja Vidhi"
                ] }),
                deity.bestPrahar === selectedPrahar && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs mt-0.5",
                    style: { color: "oklch(var(--accent))" },
                    children: [
                      "✦ This is the BEST prahar for ",
                      deity.name,
                      " worship"
                    ]
                  }
                )
              ]
            }
          ),
          praharData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 border border-border/30 text-center",
                style: { background: "oklch(var(--muted) / 0.3)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mb-1", children: "Mantra to chant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg font-medium text-foreground leading-relaxed", children: praharData.mantra }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-accent mt-1", children: [
                    "Repeat ",
                    praharData.times,
                    " times"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground mb-2", children: "🌸 Offerings (Upachara)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: praharData.offerings.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "font-body text-sm text-muted-foreground flex gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent shrink-0", children: "•" }),
                      " ",
                      o
                    ]
                  },
                  o
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground mb-2", children: "🪔 Samagri (Materials)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: praharData.samagri.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "font-body text-sm text-muted-foreground flex gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent shrink-0", children: "✦" }),
                      " ",
                      s
                    ]
                  },
                  s
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 border-l-2",
                style: {
                  borderColor: "oklch(var(--accent) / 0.5)",
                  background: "oklch(var(--muted) / 0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground mb-1", children: "📿 Puja Vidhi (Procedure)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: praharData.procedure })
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground italic", children: [
            deity.name,
            " is not traditionally worshipped during",
            " ",
            prahar.name,
            ".",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Best time:",
            " ",
            (_a = PRAHARS.find((p) => p.id === deity.bestPrahar)) == null ? void 0 : _a.name,
            " (",
            (_b = PRAHARS.find((p) => p.id === deity.bestPrahar)) == null ? void 0 : _b.time,
            ")"
          ] }) })
        ]
      },
      `${selectedDeity}-${selectedPrahar}`
    ) })
  ] });
}
const SHODASH_STEPS = [
  {
    number: 1,
    name: "Dhyana",
    nameSanskrit: "ध्यान",
    meaning: "Meditation / Mental visualization of the deity",
    genericMantra: "ॐ [देवता] ध्यायामि",
    action: "Close eyes, visualize the complete form of the deity with all ornaments, weapons, and divine aura"
  },
  {
    number: 2,
    name: "Avahana",
    nameSanskrit: "आवाहन",
    meaning: "Invocation — calling the deity's divine presence into the murti",
    genericMantra: "ॐ [देवता] आवाहयामि",
    action: "Gesture with both hands joined, invite the deity's presence with the Avahana mudra"
  },
  {
    number: 3,
    name: "Asana",
    nameSanskrit: "आसन",
    meaning: "Offering a seat to the divine guest",
    genericMantra: "ॐ [देवता] आसनम् समर्पयामि",
    action: "Place clean cloth or asana before the murti. The deity is treated as the most honored guest"
  },
  {
    number: 4,
    name: "Padya",
    nameSanskrit: "पाद्य",
    meaning: "Washing the feet of the divine guest",
    genericMantra: "ॐ [देवता] पाद्यम् समर्पयामि",
    action: "Offer water at the feet of the murti. Symbolizes the respect shown to an honored guest"
  },
  {
    number: 5,
    name: "Arghya",
    nameSanskrit: "अर्घ्य",
    meaning: "Offering water for hands/welcome",
    genericMantra: "ॐ [देवता] अर्घ्यम् समर्पयामि",
    action: "Offer water with flowers and akshat in a copper vessel. This is the highest welcome offering"
  },
  {
    number: 6,
    name: "Achamana",
    nameSanskrit: "आचमन",
    meaning: "Sipping water for purification",
    genericMantra: "ॐ [देवता] आचमनम् समर्पयामि",
    action: "Offer water with a tulsi leaf or spoon for the deity to sip. Purifies the space spiritually"
  },
  {
    number: 7,
    name: "Snanam",
    nameSanskrit: "स्नान",
    meaning: "Sacred bathing / Abhishekam",
    genericMantra: "ॐ [देवता] स्नानम् समर्पयामि",
    action: "Perform Panchamrit abhishek (milk, curd, ghee, honey, sugar water) and final Gangajal bath"
  },
  {
    number: 8,
    name: "Vastra",
    nameSanskrit: "वस्त्र",
    meaning: "Offering clothing / divine dress",
    genericMantra: "ॐ [देवता] वस्त्रम् समर्पयामि",
    action: "Offer new cloth, or drape sacred thread/chunri as appropriate for the deity"
  },
  {
    number: 9,
    name: "Yajnopavita",
    nameSanskrit: "यज्ञोपवीत",
    meaning: "Offering the sacred thread",
    genericMantra: "ॐ [देवता] यज्ञोपवीतम् समर्पयामि",
    action: "Offer a sacred thread (for male deities). This step is sometimes replaced with Abharana (ornaments)"
  },
  {
    number: 10,
    name: "Gandha",
    nameSanskrit: "गन्ध",
    meaning: "Offering sandalwood paste / fragrance",
    genericMantra: "ॐ [देवता] गन्धम् समर्पयामि",
    action: "Apply sandalwood paste or kumkum to the deity. Each deity has a specific application method"
  },
  {
    number: 11,
    name: "Pushpa",
    nameSanskrit: "पुष्प",
    meaning: "Offering of flowers",
    genericMantra: "ॐ [देवता] पुष्पम् समर्पयामि",
    action: "Offer fresh flowers — each deity has specific flowers. Never offer broken, wilted, or scentless flowers"
  },
  {
    number: 12,
    name: "Dhupa",
    nameSanskrit: "धूप",
    meaning: "Offering incense / fragrant smoke",
    genericMantra: "ॐ [देवता] धूपम् आघ्रापयामि",
    action: "Wave incense in clockwise circles before the deity. The fragrant smoke carries prayers upward"
  },
  {
    number: 13,
    name: "Dipa",
    nameSanskrit: "दीप",
    meaning: "Offering of the sacred lamp",
    genericMantra: "ॐ [देवता] दीपम् दर्शयामि",
    action: "Wave the deepam (ghee lamp with odd-numbered wicks) in 3, 7, or 21 circles before the murti"
  },
  {
    number: 14,
    name: "Naivedhya",
    nameSanskrit: "नैवेद्य",
    meaning: "Food offering / sacred meal",
    genericMantra: "ॐ [देवता] नैवेद्यम् निवेदयामि",
    action: "Place food on a clean leaf or plate. Never taste before offering. Sprinkle water around food first"
  },
  {
    number: 15,
    name: "Tambula",
    nameSanskrit: "ताम्बूल",
    meaning: "Betel leaf offering / after-meal gift",
    genericMantra: "ॐ [देवता] ताम्बूलम् समर्पयामि",
    action: "Offer betel leaf with areca nut and clove — the traditional South Asian sign of hospitality and respect"
  },
  {
    number: 16,
    name: "Pradakshina & Namaskar",
    nameSanskrit: "प्रदक्षिण नमस्कार",
    meaning: "Circumambulation and prostration",
    genericMantra: "ॐ [देवता] प्रदक्षिणाम् करोमि",
    action: "Walk around the deity clockwise (right side always toward deity). Then perform full prostration. Complete the puja."
  }
];
const DEITY_SPECIFIC = [
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
    uniqueStep: "Abhishek is Shiva's most beloved offering — the Abhishek mantra is the Rudra Chamakam",
    specificMantras: {
      1: "ध्यायेत् गौरीपतिं देवं गंगाधरं त्रिलोचनम्",
      2: "ॐ नमः शिवाय आवाहयामि",
      7: "ॐ त्र्यम्बकं यजामहे... (Mahamrityunjaya during Abhishek)",
      10: "ॐ चन्दनं चन्द्रसुन्दराय नमः",
      11: "ॐ शिवाय बिल्वपत्रं समर्पयामि",
      13: "ॐ ब्रह्माण्डव्यापकं दीपं शिवाय दर्शयामि",
      14: "ॐ नैवेद्यं षड्रसयुक्तं भोजनं शिवाय निवेदयामि",
      16: "यानि कानि च पापानि... (Shiva Aparadha Kshamapana at end)"
    },
    specialNotes: {
      7: "Abhishek materials in order: water, milk, curd, honey, ghee, coconut water, sugarcane juice, Gangajal",
      11: "Offer Bel patra in sets of 3. Each leaf represents the three eyes of Shiva or the three syllables Na-Ma-Shi",
      13: "Shiva's deepam should have 5 wicks (Panchapradipa) if possible"
    }
  },
  {
    deityId: "vishnu",
    name: "Vishnu",
    nameSanskrit: "विष्णु",
    icon: "🪷",
    color: "from-yellow-800/30 to-amber-900/20",
    overallMantra: "ॐ नमो नारायणाय",
    bestFlower: "Tulsi — mandatory. Never worship Vishnu without Tulsi",
    bestFood: "Panchamrit, Kheer, fruits, Tulsi-flavored milk — no onion, garlic",
    bestTime: "Brahma Muhurta, Ekadashi, Kartika month",
    uniqueStep: "Tulsi offering is mandatory — Vishnu rejects puja without Tulsi",
    specificMantras: {
      1: "ध्यायेत् पद्मासनस्थं विकसितवदनं...",
      2: "ॐ विष्णवे आवाहयामि",
      7: "ॐ नमो नारायणाय स्नानम् समर्पयामि",
      10: "ॐ चन्दनं सुगन्धं दिव्यं विष्णवे समर्पयामि",
      11: "ॐ तुलसीपत्रं विष्णवे समर्पयामि",
      13: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्...",
      14: "ॐ नैवेद्यम् विष्णवे निवेदयामि",
      16: "यानि कानि च पापानि जन्मान्तरकृतानि च..."
    },
    specialNotes: {
      11: "Offer Tulsi with even number of leaves. Chant the 12 names of Vishnu with each leaf",
      8: "Vishnu's color is yellow — offer yellow cloth and yellow flowers when possible",
      13: "Conch (shankh) blowing before deepam aarti is Vishnu's special tradition"
    }
  },
  {
    deityId: "krishna",
    name: "Krishna",
    nameSanskrit: "कृष्ण",
    icon: "🦚",
    color: "from-blue-900/30 to-indigo-900/20",
    overallMantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
    bestFlower: "Tulsi — mandatory. Also Kadamba, Champa, Jasmine",
    bestFood: "Makhan (butter), Misri (crystal sugar), Panchamrit, Fruits — no onion/garlic",
    bestTime: "Brahma Muhurta, Janmashtami midnight, Ekadashi",
    uniqueStep: "Makhan-Misri offering — Krishna's eternal love for butter is the devotional heart of his puja",
    specificMantras: {
      1: "वसुदेवसुतं देवं कंसचाणूरमर्दनम्...",
      2: "ॐ कृष्णाय आवाहयामि",
      7: "ॐ नमो भगवते वासुदेवाय स्नानम् समर्पयामि",
      10: "ॐ चन्दनम् कृष्णाय समर्पयामि",
      11: "ॐ तुलसीपत्रं श्रीकृष्णाय समर्पयामि",
      12: "ॐ धूपायते नमः कृष्णाय",
      13: "भजे व्रजैकमण्डनं... (Ashtapadi) दीपं दर्शयामि",
      14: "ॐ माखनम् मिश्रीयुतं कृष्णाय निवेदयामि"
    },
    specialNotes: {
      8: "Dress Krishna in yellow pitambara (silk cloth). Blue-black skin tone with yellow is sacred",
      11: "Tulsi mala offering is supreme for Vishnu/Krishna — 108 Tulsi leaves with 12 names",
      14: "The five-time-a-day bhog tradition: Mangala, Shringar, Rajabhog, Shayan bhog"
    }
  },
  {
    deityId: "ganesha",
    name: "Ganesha",
    nameSanskrit: "गणेश",
    icon: "🐘",
    color: "from-red-900/30 to-orange-900/20",
    overallMantra: "ॐ गं गणपतये नमः",
    bestFlower: "Durva grass (21 blades), Red/Marigold flowers — never Tulsi for Ganesha",
    bestFood: "Modak (sweet), Ladoo — Ganesha's favorite prasad",
    bestTime: "Brahma Muhurta, Chaturthi (4th day of fortnight)",
    uniqueStep: "Durva offering — 21 blades of Durva grass is mandatory for Ganesha",
    specificMantras: {
      1: "गजाननम् भूतगणादिसेवितम् ...",
      2: "ॐ गणेशाय आवाहयामि",
      7: "ॐ गं गणपतये स्नानम् समर्पयामि",
      10: "ॐ सिन्दूरं रक्तवर्णं गणेशाय समर्पयामि",
      11: "ॐ एकविंशति दूर्वांकुरान् गणेशाय समर्पयामि",
      13: "ॐ विघ्नराजाय दीपं दर्शयामि",
      14: "ॐ मोदकनैवेद्यं गणेशाय निवेदयामि",
      16: "ॐ गणेशाय प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      10: "Apply red sindoor — Ganesha is always red/orange colored. Red is his primary color",
      11: "Count exactly 21 Durva blades. Ganesha is especially pleased by Durva over any flower",
      14: "Modak is the supreme prasad. Make or buy fresh — never stale modak"
    }
  },
  {
    deityId: "durga",
    name: "Durga",
    nameSanskrit: "दुर्गा",
    icon: "🌺",
    color: "from-red-800/30 to-orange-800/20",
    overallMantra: "ॐ दुं दुर्गायै नमः",
    bestFlower: "Red Hibiscus (Japakusuma), Marigold — these are Devi's favorites",
    bestFood: "Halwa (suji), Puri, Chana — Navratri prasad. No meat offering in most traditions",
    bestTime: "Brahma Muhurta, Navratri, Fridays",
    uniqueStep: "Chunri (red cloth) draping — the most important offering to Devi Durga",
    specificMantras: {
      1: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके...",
      2: "ॐ दुर्गायै आवाहयामि",
      7: "ॐ दुर्गायै स्नानम् समर्पयामि",
      8: "ॐ रक्तचुनरीवस्त्रम् दुर्गायै समर्पयामि",
      10: "ॐ सिन्दूरं कुंकुमं दुर्गायै समर्पयामि",
      11: "ॐ रक्तपुष्पाणि दुर्गायै समर्पयामि",
      13: "ॐ जगज्जोत्स्नां जगत्प्रकाशिकां दुर्गायै दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् दुर्गायै निवेदयामि"
    },
    specialNotes: {
      8: "Offer red chunri as the first cloth. Devi accepts red as her primary color",
      11: "Offer 108 red hibiscus flowers on Navami for maximum spiritual merit",
      14: "Kumari puja (worship of young girl as Devi) on Navami is supreme — feed 9 girls"
    }
  },
  {
    deityId: "lakshmi",
    name: "Lakshmi",
    nameSanskrit: "लक्ष्मी",
    icon: "🌸",
    color: "from-pink-900/30 to-rose-900/20",
    overallMantra: "ॐ श्रीं महालक्ष्म्यै नमः",
    bestFlower: "Lotus, Rose, Marigold — pink and red flowers. Lakshmi loves lotus above all",
    bestFood: "Kheer, Payasam, sweet rice, fruits — Lakshmi loves sweets",
    bestTime: "Friday, Diwali, Purnima",
    uniqueStep: "Deepam lighting at sunset on Friday — the most beloved offering to Lakshmi",
    specificMantras: {
      1: "ध्यायेत् पद्मासनस्थां विकसितवदनां पद्मपत्रायताक्षीं...",
      2: "ॐ महालक्ष्म्यै आवाहयामि",
      7: "ॐ महालक्ष्म्यै स्नानम् समर्पयामि",
      10: "ॐ चन्दनकुंकुमं महालक्ष्म्यै समर्पयामि",
      11: "ॐ लक्ष्म्यै पुष्पाणि समर्पयामि",
      13: "ॐ लक्ष्म्यै दीपं दर्शयामि — ॐ महालक्ष्म्यै नमः",
      14: "ॐ नैवेद्यम् लक्ष्म्यै निवेदयामि — खीर/पायसं",
      16: "ॐ लक्ष्म्यै प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      5: "Arghya for Lakshmi: place coins in the water vessel — she is the goddess of prosperity",
      13: "Place the deepam at the entrance door (south-facing is traditional on Diwali night)",
      14: "Offer fresh kheer/payasam as first prasad. Rice and milk are Lakshmi's symbols"
    }
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
    uniqueStep: "Book and instrument placement at the altar — Saraswati dwells in all tools of knowledge",
    specificMantras: {
      1: "या कुन्देन्दुतुषारहारधवला...",
      2: "ॐ सरस्वत्यै आवाहयामि",
      7: "ॐ सरस्वत्यै स्नानम् समर्पयामि",
      11: "ॐ श्वेतपुष्पाणि सरस्वत्यै समर्पयामि",
      13: "ॐ विद्यादीपं सरस्वत्यै दर्शयामि",
      14: "ॐ श्वेतखीरं सरस्वत्यै निवेदयामि",
      16: "ॐ सरस्वत्यै प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      11: "Only white flowers for Saraswati — she is the goddess of purity and light",
      8: "Offer white cloth or white silk. White symbolizes the pure light of knowledge",
      14: "Do not read or write on Basant Panchami until after puja is complete"
    }
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
    uniqueStep: "Sita-Ram image must be worshipped together — Rama puja without Sita is incomplete",
    specificMantras: {
      1: "ध्यायेत् रामं मनोहरं मेघश्यामं...",
      2: "ॐ श्रीरामाय आवाहयामि",
      7: "ॐ रामाय स्नानम् समर्पयामि",
      10: "ॐ चन्दनं श्रीरामाय समर्पयामि",
      11: "ॐ तुलसीपत्रं श्रीरामाय समर्पयामि",
      13: "ॐ रामाय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् श्रीरामाय निवेदयामि",
      16: "ॐ रामाय प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      11: "Tulsi with Rama puja is essential — each leaf offered with 'Jai Shri Ram'",
      2: "Invoke Sita-Rama-Lakshmana-Hanuman together for the complete divine family",
      14: "Offer fruits, rice, and simple food — Rama is the simplest and most loving god"
    }
  },
  {
    deityId: "hanuman",
    name: "Hanuman",
    nameSanskrit: "हनुमान",
    icon: "🙏",
    color: "from-orange-900/30 to-red-900/20",
    overallMantra: "ॐ हं हनुमते नमः",
    bestFlower: "Jasmine, marigold, red flowers — Hanuman loves fragrant offerings",
    bestFood: "Besan ladoo, jaggery, banana — simple offering from the heart",
    bestTime: "Tuesday, Saturday, Brahma Muhurta",
    uniqueStep: "Sindoor mixed in oil anointing — Hanuman's most beloved physical offering",
    specificMantras: {
      1: "गोष्पदीकृत वारशिं...",
      2: "ॐ हनुमते आवाहयामि",
      7: "ॐ हं हनुमते स्नानम् समर्पयामि",
      10: "ॐ सिन्दूरं हनुमते समर्पयामि",
      11: "ॐ जासमिनं पुष्पं हनुमते समर्पयामि",
      13: "ॐ हनुमते दीपं दर्शयामि",
      14: "ॐ मोदकं हनुमते निवेदयामि",
      16: "ॐ हनुमते प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      10: "Mix sindoor in sesame oil and apply to the murti — this is Hanuman's most cherished offering",
      14: "Offer besan ladoo or jaggery — Hanuman accepts simple food with great love",
      8: "Wrap red cloth around Hanuman murti — red is the color of his power and devotion"
    }
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
    uniqueStep: "Arghya at sunrise — offering water to the rising sun is Surya's supreme ritual",
    specificMantras: {
      1: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम्...",
      2: "ॐ सूर्याय आवाहयामि",
      5: "ॐ आर्घ्यं सूर्याय समर्पयामि — (pour water toward rising sun)",
      7: "ॐ सूर्याय स्नानम् समर्पयामि",
      11: "ॐ रक्तपुष्पाणि सूर्याय समर्पयामि",
      13: "ॐ तेजोमये दीपं सूर्याय दर्शयामि",
      14: "ॐ नैवेद्यम् सूर्याय निवेदयामि",
      16: "ॐ सूर्याय प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      5: "Arghya to Surya is the supreme puja — pour water in a copper vessel at sunrise while chanting Aditya Hridayam",
      7: "Surya's abhishek is done with water only — the sun purifies everything",
      11: "Never offer white flowers to Surya — only bright, vibrant, colored flowers"
    }
  },
  {
    deityId: "kali",
    name: "Kali",
    nameSanskrit: "काली",
    icon: "🗡️",
    color: "from-gray-900/40 to-indigo-900/30",
    overallMantra: "ॐ क्रीं कालिकायै नमः",
    bestFlower: "Red hibiscus (Japakusuma) — Kali's favorite flower in all traditions",
    bestFood: "Red foods — hibiscus water, red fruit, bel fruit. Simple offerings",
    bestTime: "Midnight on Amavasya, Diwali night, Navratri nights",
    uniqueStep: "Night puja — Kali's energy is most potent after midnight",
    specificMantras: {
      1: "करालवदनां घोरां मुक्तकेशीं चतुर्भुजाम्...",
      2: "ॐ कालिकायै आवाहयामि",
      7: "ॐ कालिकायै स्नानम् समर्पयामि",
      10: "ॐ सिन्दूरं रक्तवर्णं कालिकायै समर्पयामि",
      11: "ॐ रक्तजपाकुसुमं कालिकायै समर्पयामि",
      13: "ॐ कालिकायै दीपं दर्शयामि — midnight lamp",
      14: "ॐ नैवेद्यम् कालिकायै निवेदयामि"
    },
    specialNotes: {
      11: "108 red hibiscus flowers for full Kali puja — one for each name in her Sahasranama",
      2: "Invoke Kali facing south — she is the deity of the southern direction",
      13: "Black sesame oil lamp is Kali's preferred deepam — light it at midnight"
    }
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
    uniqueStep: "Solah Shringar (16 adornments) for Parvati — the complete feminine offering",
    specificMantras: {
      1: "ॐ उमायै नमः। ध्यायेत् पार्वतीं गौरीं शंकरार्धांगिनीम्...",
      2: "ॐ पार्वत्यै आवाहयामि",
      7: "ॐ पार्वत्यै स्नानम् समर्पयामि",
      8: "ॐ श्रृंगारवस्त्रं पार्वत्यै समर्पयामि",
      10: "ॐ हरिद्रां कुंकुमं पार्वत्यै समर्पयामि",
      11: "ॐ सुमनसः पार्वत्यै समर्पयामि",
      13: "ॐ पार्वत्यै दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् पार्वत्यै निवेदयामि"
    },
    specialNotes: {
      8: "Complete Solah Shringar for Parvati — 16 adornments including bindi, bangles, necklace, toe rings",
      10: "Apply turmeric and kumkum to Parvati's image — she loves these as symbols of Suhaag (married bliss)",
      14: "Parvati is especially pleased by offering made by married women — Teej vrat prasad is supreme"
    }
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
    uniqueStep: "Radha-Krishna are inseparable — Radha puja is always done as Radha-Krishna together",
    specificMantras: {
      1: "ध्यायेत् राधां परमानन्दस्वरूपिणीं श्यामां...",
      2: "ॐ राधायै आवाहयामि",
      7: "ॐ राधायै स्नानम् समर्पयामि",
      8: "ॐ पीतवस्त्रं राधायै समर्पयामि",
      11: "ॐ कदम्बपुष्पं राधायै समर्पयामि",
      13: "ॐ राधायै दीपं दर्शयामि",
      14: "ॐ खीरमिश्री राधायै निवेदयामि"
    },
    specialNotes: {
      11: "Kadamba flower is Radha's favorite — the forest tree of Vrindavan",
      8: "Dress Radha in bright yellow or pink — the colors of spring in Vrindavan",
      14: "Always offer to Radha first, then Krishna — in their sacred love, she is first"
    }
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
    uniqueStep: "Pradakshina (circumambulation) in the rhythm of the cosmic dance — 3 or 108 times",
    specificMantras: {
      1: "ॐ नमः शिवाय नटराजाय नमः। सभानायक नटराज...",
      2: "ॐ नटराजाय आवाहयामि",
      7: "ॐ नटराजाय स्नानम् समर्पयामि",
      11: "ॐ बिल्वपत्रं नटराजाय समर्पयामि",
      13: "ॐ नटराजाय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् नटराजाय निवेदयामि",
      16: "ॐ नटराजाय प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      16: "Pradakshina of Nataraj is done with awareness of the cosmic dance — each step is a bow to creation",
      1: "Nataraj is Shiva as Ananda Tandava — the dance of bliss that sustains the universe",
      13: "The dance of Nataraj's 5 actions: creation, sustenance, dissolution, concealment, grace"
    }
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
    uniqueStep: "Vedic recitation is the supreme worship of Brahma — his puja is through Veda study",
    specificMantras: {
      1: "ॐ ब्रह्मणे नमः। चतुर्मुखाय ब्रह्मणे नमः...",
      2: "ॐ ब्रह्मणे आवाहयामि",
      5: "ॐ अर्घ्यं ब्रह्मणे समर्पयामि",
      7: "ॐ ब्रह्मणे स्नानम् समर्पयामि",
      11: "ॐ पद्मपुष्पं ब्रह्मणे समर्पयामि",
      13: "ॐ ज्ञानदीपं ब्रह्मणे दर्शयामि",
      14: "ॐ नैवेद्यम् ब्रह्मणे निवेदयामि"
    },
    specialNotes: {
      11: "Lotus is the only flower for Brahma — he was born from a lotus on Vishnu's navel",
      1: "Brahma's dhyana is done facing east — he always faces east, the direction of creation",
      13: "The lamp for Brahma symbolizes the light of knowledge — Brahma is Saraswati's consort"
    }
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
    uniqueStep: "Vel (divine spear) worship — Kartikeya's Vel is the most sacred symbol of divine power",
    specificMantras: {
      1: "ॐ कार्तिकेयाय नमः। शरवणभवाय...",
      2: "ॐ कार्तिकेयाय आवाहयामि",
      7: "ॐ कार्तिकेयाय स्नानम् समर्पयामि",
      11: "ॐ रक्तपुष्पाणि कार्तिकेयाय समर्पयामि",
      13: "ॐ कार्तिकेयाय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् कार्तिकेयाय निवेदयामि"
    },
    specialNotes: {
      2: "The 6-syllable Kartikeya mantra: Om Saravanabhava — each syllable is a sacred name",
      11: "Decorate with peacock feather — Kartikeya's vahana (vehicle) is the peacock",
      14: "Offer milk mixed with honey — the Amrit offering to the son of Shiva and Parvati"
    }
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
    uniqueStep: "Vajra (thunderbolt) symbol — Indra's divine weapon is his identity",
    specificMantras: {
      1: "ॐ इन्द्राय नमः। वज्रपाणये महाराजाय...",
      2: "ॐ इन्द्राय आवाहयामि",
      5: "ॐ सोमरसं इन्द्राय समर्पयामि",
      7: "ॐ इन्द्राय स्नानम् समर्पयामि",
      11: "ॐ श्वेतपुष्पाणि इन्द्राय समर्पयामि",
      13: "ॐ इन्द्राय दीपं दर्शयामि",
      14: "ॐ नैवेद्यम् इन्द्राय निवेदयामि"
    },
    specialNotes: {
      5: "Offer coconut water as Soma substitute — Indra was the chief Soma-drinker of the Vedas",
      2: "Indra puja is most powerful during drought or before a major challenge requiring power",
      11: "White flowers for Indra — he is the ruler of the pure white heaven (Swarga)"
    }
  },
  {
    deityId: "yama",
    name: "Yama",
    nameSanskrit: "यम",
    icon: "🪔",
    color: "from-gray-800/30 to-slate-900/20",
    overallMantra: "ॐ यमाय नमः",
    bestFlower: "Black sesame, dark flowers — symbolic of the dark realm",
    bestFood: "Simple offerings of rice and water — Yama accepts humble offerings",
    bestTime: "Yama Dwitiya, Bhai Dooj, Kartika Amavasya",
    uniqueStep: "Yama puja is done for protection from untimely death and for the welfare of ancestors",
    specificMantras: {
      1: "ॐ यमाय नमः। धर्मराजाय महाराजाय...",
      2: "ॐ यमाय आवाहयामि",
      7: "ॐ यमाय स्नानम् समर्पयामि",
      11: "ॐ यमाय पुष्पाणि समर्पयामि",
      13: "ॐ यमाय दीपं दर्शयामि — sesame oil lamp",
      14: "ॐ नैवेद्यम् यमाय निवेदयामि",
      16: "ॐ यमाय प्रदक्षिणाम् करोमि"
    },
    specialNotes: {
      2: "Yama puja is performed for the long life of brothers and for protection from death",
      13: "Black sesame oil lamp for Yama — lit during Yama Dwitiya (Bhai Dooj day)",
      16: "Yama puja is done facing south — Yama is the lord of the southern direction"
    }
  }
];
function ShodashSection() {
  const [selectedDeity, setSelectedDeity] = reactExports.useState(DEITY_SPECIFIC[0].deityId);
  const [expandedStep, setExpandedStep] = reactExports.useState(null);
  const deity = DEITY_SPECIFIC.find((d) => d.deityId === selectedDeity);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest mb-1", children: "॥ षोडशोपचार पूजा ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold italic text-primary mb-2", children: "Shodashopachara Puja" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground max-w-lg mx-auto", children: "The 16 sacred steps of complete puja — treating the deity as the most honored divine guest. These steps are observed in all traditional Hindu puja, from daily home worship to grand temple rituals." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest mb-3", children: "Select Deity →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2", children: DEITY_SPECIFIC.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setSelectedDeity(d.deityId);
            setExpandedStep(null);
          },
          "data-ocid": `shodash-deity-${d.deityId}`,
          className: `p-3 border text-center transition-smooth ${selectedDeity === d.deityId ? "border-accent/60 bg-accent/10" : "border-border hover:border-accent/30 hover:bg-accent/5"}`,
          style: { borderRadius: "2px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-1", children: d.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-foreground", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs text-muted-foreground",
                style: { fontSize: "0.65rem" },
                children: d.nameSanskrit
              }
            )
          ]
        },
        d.deityId
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        className: `p-4 border border-border/50 bg-gradient-to-r ${deity.color}`,
        style: { borderRadius: "2px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: deity.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-bold text-foreground", children: [
                deity.name,
                " Puja Guide"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-accent", children: deity.overallMantra })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-foreground/70 mb-0.5", children: "Best Flower" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: deity.bestFlower })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-foreground/70 mb-0.5", children: "Best Food (Naivedhya)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: deity.bestFood })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-foreground/70 mb-0.5", children: "Best Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: deity.bestTime })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-semibold text-foreground/70 mb-0.5", children: "Special Step" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: deity.uniqueStep })
            ] })
          ] })
        ]
      },
      selectedDeity
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest", children: "The 16 Sacred Steps (tap to expand)" }),
      SHODASH_STEPS.map((step) => {
        const specificMantra = deity.specificMantras[step.number];
        const specialNote = deity.specialNotes[step.number];
        const isOpen = expandedStep === step.number;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "border border-border",
            style: {
              background: "oklch(var(--card) / 0.65)",
              borderRadius: "2px"
            },
            whileHover: { x: 2 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setExpandedStep(isOpen ? null : step.number),
                  "data-ocid": `shodash-step-${step.number}`,
                  className: "w-full flex items-center gap-3 px-4 py-3 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "shrink-0 w-7 h-7 flex items-center justify-center text-xs font-display font-bold border",
                        style: {
                          background: "oklch(var(--accent) / 0.15)",
                          borderColor: "oklch(var(--accent) / 0.4)",
                          color: "oklch(var(--accent))",
                          borderRadius: "1px"
                        },
                        children: step.number
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground", children: step.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground", children: step.nameSanskrit })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-0.5", children: step.meaning })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-muted-foreground text-xs", children: isOpen ? "▲" : "▼" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.2 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 space-y-3 border-t border-border/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 text-center",
                        style: { background: "oklch(var(--muted) / 0.3)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mb-1", children: "Generic form" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-foreground", children: step.genericMantra })
                        ]
                      }
                    ),
                    specificMantra && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 border-l-2",
                        style: {
                          borderColor: "oklch(var(--accent) / 0.5)",
                          background: "oklch(var(--accent) / 0.05)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xs font-semibold text-accent mb-1", children: [
                            deity.name,
                            " specific mantra:"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground leading-relaxed", children: specificMantra })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                        "Action:",
                        " "
                      ] }),
                      step.action
                    ] }),
                    specialNote && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-xs italic leading-relaxed border-l-2 pl-3",
                        style: {
                          borderColor: "oklch(var(--primary) / 0.5)",
                          color: "oklch(var(--muted-foreground))"
                        },
                        children: [
                          "✦ ",
                          deity.name,
                          " note: ",
                          specialNote
                        ]
                      }
                    )
                  ] })
                }
              ) })
            ]
          },
          step.number
        );
      })
    ] })
  ] });
}
const VARNAS = [
  {
    id: "brahmin",
    name: "Brahmin",
    nameSanskrit: "ब्राह्मण",
    icon: "📿",
    color: "from-amber-900/30 to-yellow-900/20",
    nature: "Tamas purified to pure Sattva — the custodians of Vedic knowledge",
    gitaVerse: "Gita 18.42: Shama (mental calm), Dama (self-control), Tapas (austerity), Shaucha (purity), Kshama (forgiveness), Arjava (honesty), Jnana (knowledge), Vijnana (wisdom), Astikya (faith) — these are the natural duties of a Brahmin",
    duties: [
      {
        number: 1,
        title: "Brahma Muhurta Rising",
        description: "Rise before sunrise (at least 96 minutes before), bathe, perform Sandhyavandana. The Brahmin's day begins with the universe, not with personal comfort. This cannot be skipped.",
        source: "Apastamba Dharmasutra, Manusmriti 4.92"
      },
      {
        number: 2,
        title: "Sandhyavandana (Three Times)",
        description: "Perform Sandhyavandana at three junctions: Brahma Muhurta (dawn), Madhyanha (noon), and Sayam (sunset). The Gayatri Mantra recitation within Sandhyavandana is the supreme daily duty.",
        source: "Manusmriti 2.101, Yajnavalkya Smriti 1.25"
      },
      {
        number: 3,
        title: "Adhyayana — Vedic Study",
        description: "Daily minimum of one hour of Veda recitation and study. A Brahmin who does not recite Vedas daily loses his spiritual qualification (Brahminhood) according to the Dharmasutras.",
        source: "Apastamba Dharmasutra 1.4.1, Manusmriti 4.147"
      },
      {
        number: 4,
        title: "Adhyapana — Teaching",
        description: "Teaching others is equally sacred as personal study. A Brahmin who has knowledge and does not teach is not fulfilling dharma. The teacher's duty is the transmission of knowledge.",
        source: "Manusmriti 1.103, Parasara Smriti"
      },
      {
        number: 5,
        title: "Agnihotra — Sacred Fire",
        description: "A Brahmin householder must maintain the sacred Agni (fire). Daily Agnihotra at sunrise and sunset is prescribed. In modern contexts, a daily deepam with Vedic mantra is the minimum.",
        source: "Taittiriya Samhita 2.5.1, Apastamba Shrauta Sutra"
      },
      {
        number: 6,
        title: "Pancha Mahayajnas",
        description: "The five great daily sacrifices: Brahma Yajna (recite Vedas), Deva Yajna (fire offering), Pitru Yajna (water libations to ancestors), Manushya Yajna (hospitality/Atithi Devo Bhava), Bhuta Yajna (feeding all creatures including animals).",
        source: "Taittiriya Aranyaka 2.10, Manusmriti 3.67-71"
      },
      {
        number: 7,
        title: "Dana — Sacred Charity",
        description: "Give a minimum of one-tenth of income as Dana. Brahmin Dana must be to the genuinely deserving — scholars, the needy, and sacred causes. Giving for social status is not Dana.",
        source: "Manusmriti 4.226, Parasara Smriti 1.62"
      },
      {
        number: 8,
        title: "Yajna — Fire Ritual",
        description: "Perform or attend Yajnas regularly. At minimum: Agnihotra daily, Darsha-Purnimasa monthly. Support larger community Yajnas financially or through priestly service.",
        source: "Shatapatha Brahmana, Apastamba Shrauta Sutra"
      },
      {
        number: 9,
        title: "Tarpana — Ancestral Rites",
        description: "Daily water offerings (Tarpana) to gods, sages, and ancestors. This maintains the sacred debt to Pitrus (ancestors). On auspicious days, perform Shradha with appropriate Brahmins.",
        source: "Manusmriti 3.74, Apastamba Dharmasutra 2.7.16"
      },
      {
        number: 10,
        title: "Ahimsa and Satya",
        description: "Non-violence and absolute truth are the foundation. A Brahmin's word must be as reliable as the Vedas. Untruth spoken by a Brahmin causes immediate spiritual degradation according to all Smritis.",
        source: "Manusmriti 4.138, Yajnavalkya Smriti 1.122"
      }
    ],
    dailySchedule: [
      {
        time: "3:30 AM",
        activity: "Rise — Brahma Muhurta. Quick bath. Sandhyavandana begins"
      },
      {
        time: "4:30 AM",
        activity: "Sandhyavandana complete. Veda recitation (minimum 1 hour)"
      },
      { time: "5:30 AM", activity: "Agnihotra (sunrise fire ritual)" },
      { time: "6:00 AM", activity: "Study, teaching, or contemplation" },
      {
        time: "12:00 PM",
        activity: "Madhyanha Sandhyavandana. Pancha Mahayajnas. Bhojana (meal)"
      },
      { time: "3:00 PM", activity: "Teaching, counseling, community service" },
      {
        time: "6:00 PM",
        activity: "Sayam Sandhyavandana (sunset prayers). Agnihotra"
      },
      {
        time: "7:00 PM",
        activity: "Evening Veda recitation or spiritual discourse"
      },
      { time: "9:00 PM", activity: "Light meal, contemplation" },
      { time: "10:00 PM", activity: "Sleep (bed before 10 PM is prescribed)" }
    ],
    importance: "The Brahmin is the spiritual backbone of society — the keeper of cosmic order (Rita) through Vedic knowledge. Without Brahmins performing their dharma, the Vedic tradition itself is at risk."
  },
  {
    id: "kshatriya",
    name: "Kshatriya",
    nameSanskrit: "क्षत्रिय",
    icon: "⚔️",
    color: "from-red-900/30 to-orange-900/20",
    nature: "Rajas channeled through Dharma — the protectors and upholders of cosmic order",
    gitaVerse: "Gita 18.43: Shaurya (heroism), Tejas (power), Dhriti (fortitude), Daksha (skill), never fleeing battle, Dana (generosity), Ishvara-bhava (lordliness) — these are the natural duties of a Kshatriya",
    duties: [
      {
        number: 1,
        title: "Sandhyavandana",
        description: "Morning and evening Sandhyavandana — minimum Gayatri Mantra 108 times. The Kshatriya warrior begins every day with divine alignment, for only a dharma-aligned warrior serves justice.",
        source: "Manusmriti 2.101, Bhagavad Gita 3.35"
      },
      {
        number: 2,
        title: "Shastra Abhyasa — Physical Training",
        description: "Daily weapons training and physical discipline. The Kshatriya's body is an instrument of dharma. Neglecting physical training is equivalent to a Brahmin neglecting Vedic study.",
        source: "Mahabharata Shanti Parva, Arthashastra 2.33"
      },
      {
        number: 3,
        title: "Praja Palana — People Protection",
        description: "Every daily decision must protect the people under care. A Kshatriya's primary duty is Praja Palana — the welfare of subjects. Public service is not optional: it is the core dharma.",
        source: "Manusmriti 7.1-37, Mahabharata Shanti Parva"
      },
      {
        number: 4,
        title: "Dharma Palana — Dharma Upholding",
        description: "Uphold dharma in all decisions — justice over personal gain, truth over convenience. The Kshatriya who compromises dharma for personal benefit becomes a Rakshas, not a protector.",
        source: "Bhagavad Gita 2.31-37, Mahabharata Udyoga Parva"
      },
      {
        number: 5,
        title: "Shiksha — Continuous Learning",
        description: "Daily learning of statecraft, ethics, law, and warfare. A Kshatriya must be more educated than those he protects — in both knowledge and dharmic discernment.",
        source: "Arthashastra 1.5, Manusmriti 7.97"
      },
      {
        number: 6,
        title: "Ahimsa to Own Subjects",
        description: "While a warrior uses force against enemies of dharma, violence against one's own subjects is the gravest sin for a Kshatriya. Protection and non-harm to the governed is absolute.",
        source: "Mahabharata Shanti Parva 58.17, Manusmriti 7.101"
      },
      {
        number: 7,
        title: "Dana — Brahmin and Community Support",
        description: "Support Brahmins, temples, and scholars generously. The Kshatriya-Brahmin relationship is the sacred governance axis of Vedic civilization — the king supports the priest and the priest guides the king.",
        source: "Manusmriti 7.37, Arthashastra 1.3"
      },
      {
        number: 8,
        title: "Yajna Support",
        description: "Fund and attend Yajnas. The great kings of the Mahabharata and Ramayana — Yudhishthira, Dasharatha — were known for magnificent Yajnas. This redistributes wealth spiritually.",
        source: "Mahabharata Ashvamedhika Parva, Ramayana 1.10"
      },
      {
        number: 9,
        title: "Vedic Recitation Minimum",
        description: "Minimum daily duty: Gayatri Mantra 108 times. A Kshatriya is not primarily a Vedic scholar, but Gayatri is the universal minimum for all twice-born Hindus.",
        source: "Manusmriti 2.101, Yajnavalkya Smriti"
      },
      {
        number: 10,
        title: "Shatrau Mardana — Against Adharma",
        description: "A Kshatriya's duty includes actively confronting injustice and adharma. Non-action in the face of adharma is itself adharma — this is Krishna's core teaching to Arjuna in Gita Chapter 2.",
        source: "Bhagavad Gita 2.31-33, Mahabharata"
      }
    ],
    dailySchedule: [
      {
        time: "5:00 AM",
        activity: "Rise. Bath. Sandhyavandana and Gayatri Mantra 108 times"
      },
      {
        time: "5:45 AM",
        activity: "Physical training — weapons, warfare discipline, yoga"
      },
      {
        time: "7:00 AM",
        activity: "Administrative duties — review of state/community welfare"
      },
      {
        time: "8:00 AM",
        activity: "Learning — statecraft, ethics, law (one hour minimum)"
      },
      {
        time: "12:00 PM",
        activity: "Madhyanha Sandhyavandana. Affairs of justice. Counsel with advisors"
      },
      {
        time: "2:00 PM",
        activity: "Public audience — hearing grievances and dispensing justice"
      },
      {
        time: "6:00 PM",
        activity: "Evening Sandhyavandana. Reflection on the day's dharma"
      },
      { time: "7:00 PM", activity: "Military review or strategic planning" },
      { time: "10:00 PM", activity: "Study or rest" }
    ],
    importance: "The Kshatriya is the shield of civilization — without righteous protection, neither learning nor trade nor spiritual life can flourish. Arjuna's moment of doubt on Kurukshetra was a Kshatriya abandoning his dharma."
  },
  {
    id: "vaishya",
    name: "Vaishya",
    nameSanskrit: "वैश्य",
    icon: "🐄",
    color: "from-green-900/30 to-teal-900/20",
    nature: "Rajas directed toward sustenance — the providers and sustainers of society",
    gitaVerse: "Gita 18.44: Krishi (agriculture), Gau Raksha (cow protection), Vanijya (trade) — these are the natural duties of a Vaishya",
    duties: [
      {
        number: 1,
        title: "Sandhyavandana — Morning Prayer",
        description: "Begin every business day with Sandhyavandana. The Vaishya's trade and prosperity are only dharmic when conducted under divine oversight. No business begins without prayer.",
        source: "Manusmriti 1.90, Arthashastra"
      },
      {
        number: 2,
        title: "Krishi / Vanijya — Honest Trade",
        description: "Agriculture or trade conducted with absolute honesty. Every transaction is a yajna — an offering to society. Adulteration, deception, or exploitation negates all the merit of trade.",
        source: "Manusmriti 9.326, Arthashastra 2.22"
      },
      {
        number: 3,
        title: "Gau Seva — Cow Protection",
        description: "Cow protection is a primary Vaishya duty. Support Gaushalas, maintain cattle with care. The cow represents the entire economy and ecology of Vedic civilization.",
        source: "Mahabharata Anushasana Parva, Manusmriti 11.50"
      },
      {
        number: 4,
        title: "Satya Vakyam — Honesty in Trade",
        description: "Complete honesty in weights, measures, and quality. False weights are among the gravest sins for a Vaishya — equivalent to murder according to Manusmriti.",
        source: "Manusmriti 9.291, Arthashastra 4.2"
      },
      {
        number: 5,
        title: "Dana — Annadanam Supreme",
        description: "Vaishya Dana is most sacred when it feeds the hungry. Annadanam (food donation) removes all sins according to all Puranas. Support community kitchens, temple prasad, and the poor.",
        source: "Manusmriti 3.116, Mahabharata"
      },
      {
        number: 6,
        title: "Yajna Financial Support",
        description: "Fund community Yajnas financially. The Vaishya's wealth is meant to flow through the community via Dana and Yajna. Hoarding without community support violates Vaishya dharma.",
        source: "Manusmriti 1.90, Shatapatha Brahmana"
      },
      {
        number: 7,
        title: "Vedic Learning — Basic Education",
        description: "Basic Vedic education — at minimum Gayatri Mantra and knowledge of one's ancestral tradition. A Vaishya needs less Vedic scholarship than a Brahmin but cannot be spiritually illiterate.",
        source: "Manusmriti 2.168, Apastamba Dharmasutra"
      },
      {
        number: 8,
        title: "Fair Trade Ethics",
        description: "No adulteration, no cheating in weights/measures, no monopolistic exploitation. The Vaishya's code of ethics is essentially a sacred trust — the community's economy depends on Vaishya integrity.",
        source: "Arthashastra 4.2.3, Manusmriti 9.291"
      },
      {
        number: 9,
        title: "Community Wealth",
        description: "Use wealth for community benefit — build wells, roads, ghats, dharmashalas. The Vaishya who accumulates only for himself violates the purpose of Vaishya dharma.",
        source: "Manusmriti 4.236, Mahabharata Shanti Parva"
      },
      {
        number: 10,
        title: "Goseva — Sacred Cattle Care",
        description: "Beyond just protection — the Vaishya must actively serve cattle. Milk offering to temples, care for sick animals, and maintaining pastures are all dharmic duties.",
        source: "Mahabharata Anushasana Parva 81"
      }
    ],
    dailySchedule: [
      {
        time: "5:30 AM",
        activity: "Rise. Bath. Sandhyavandana and morning prayer"
      },
      { time: "6:30 AM", activity: "Gau Seva — feeding and caring for cattle" },
      {
        time: "7:30 AM",
        activity: "Commence business activities after prayer"
      },
      { time: "12:00 PM", activity: "Madhyanha prayer. Meal with family" },
      { time: "1:00 PM", activity: "Continue trade/agriculture" },
      {
        time: "5:00 PM",
        activity: "Close accounts. Check measures and weights for next day"
      },
      { time: "6:30 PM", activity: "Evening prayer. Annadana (if applicable)" },
      { time: "8:00 PM", activity: "Community matters or Dana activities" }
    ],
    importance: "The Vaishya sustains the material life of society through honest trade and agriculture. Without the Vaishya's dharmic trade, the food and goods that support all other varnas in their sacred duties would not exist."
  },
  {
    id: "shudra",
    name: "Shudra",
    nameSanskrit: "शूद्र",
    icon: "🙏",
    color: "from-purple-900/30 to-violet-900/20",
    nature: "Tamas transformed into devoted service — the foundation of society through skilled work",
    gitaVerse: "Gita 18.44: Seva (service to the three varnas) — the natural duty of a Shudra. Note: Gita 9.32 — even those of Shudra birth, O Partha, attain the supreme goal through devotion",
    duties: [
      {
        number: 1,
        title: "Seva — Devoted Service",
        description: "Honest, devoted service to one's work and community. All service performed with devotion is a form of worship. The Vedic principle: Seva is Yajna — service is sacrifice.",
        source: "Manusmriti 1.91, Bhagavata Purana 11.17"
      },
      {
        number: 2,
        title: "Nitya Karma — Daily Prayers",
        description: "Basic daily prayers accessible to all: Surya Namaskar (12 rounds), Gayatri (accessible to all by Smriti provisions), and local deity worship. Bhagavata Purana explicitly grants Shudras full devotional rights.",
        source: "Bhagavata Purana 11.17, Gita 9.32"
      },
      {
        number: 3,
        title: "Ghar ki Pooja — Home Worship",
        description: "Complete home puja. Keeping the home as a temple — clean, lit with deepam, decorated with flowers, with daily worship at the home altar.",
        source: "Griha Sutras, Bhagavata Purana tradition"
      },
      {
        number: 4,
        title: "Shuchi — Cleanliness",
        description: "Absolute cleanliness of body, home, work, and tools. The Shudra's dharma in keeping the environment clean is a sacred duty — physical cleanliness is spiritual purity in manifestation.",
        source: "Manusmriti 1.91, Bhagavata Purana"
      },
      {
        number: 5,
        title: "Satya — Integrity in Work",
        description: "Complete honesty and integrity in all service. A craftsperson who does poor work, a servant who steals time — these violate Shudra dharma as surely as a Brahmin speaking falsehood.",
        source: "Manusmriti 10.123, Arthashastra tradition"
      },
      {
        number: 6,
        title: "Guru Bhakti — Reverence",
        description: "Deep reverence for teachers, elders, and those with knowledge. This is the Shudra's primary spiritual access — through the grace of a guru, all paths open.",
        source: "Bhagavata Purana 11.17.27"
      },
      {
        number: 7,
        title: "Bhakti — Devotional Worship",
        description: "The Bhagavata Purana's supreme gift to all varnas: pure devotion bypasses all ritual and caste restrictions. Bhakta saints like Kannappa, Vidura, and Sabari show that a Shudra devotee surpasses Brahmin ritual.",
        source: "Bhagavata Purana 11.14-15, Gita 9.32"
      },
      {
        number: 8,
        title: "Bhagavad Gita Study",
        description: "The Gita (9.32) explicitly states that even those of Shudra birth attain the supreme. The Gita is the universal scripture — study and chanting grants liberation regardless of varna.",
        source: "Bhagavad Gita 9.32, 18.70"
      },
      {
        number: 9,
        title: "Dana — Give What One Can",
        description: "Even small Dana (giving) purifies. Giving food, water, shelter, or simple services to those in need generates enormous merit. Dana is available to all regardless of wealth or varna.",
        source: "Mahabharata Anushasana Parva 58"
      },
      {
        number: 10,
        title: "Community Service",
        description: "Maintaining sacred spaces, community infrastructure, and the environment. The Shudra's service sustains the physical world in which dharma can be lived by all.",
        source: "Manusmriti 10.123, Bhagavata Purana tradition"
      }
    ],
    dailySchedule: [
      {
        time: "6:00 AM",
        activity: "Rise. Bath. Surya Namaskar or basic morning prayer"
      },
      {
        time: "7:00 AM",
        activity: "Home puja. Light deepam. Offer flowers to home deity"
      },
      {
        time: "8:00 AM",
        activity: "Begin work with dedication — work as a form of puja"
      },
      { time: "12:00 PM", activity: "Midday prayer. Meal" },
      { time: "1:00 PM", activity: "Afternoon service/work" },
      { time: "6:00 PM", activity: "Evening puja at home. Deepam lighting" },
      { time: "8:00 PM", activity: "Bhagavad Gita reading or kirtan" }
    ],
    importance: "In Sanatana Dharma, every varna is equally sacred and necessary. The Shudra's service sustains the physical foundation on which Brahmin knowledge, Kshatriya protection, and Vaishya trade all depend."
  }
];
function VarnaDharmaSection() {
  const [selectedVarna, setSelectedVarna] = reactExports.useState(VARNAS[0].id);
  const [activeTab, setActiveTab] = reactExports.useState("duties");
  const varna = VARNAS.find((v) => v.id === selectedVarna);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number tracking-widest mb-1", children: "॥ वर्ण धर्म ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold italic text-primary mb-2", children: "Varna Dharma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground max-w-lg mx-auto", children: "Daily duties according to Varna, as prescribed in Vedic and Dharmic literature." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 p-4 border border-accent/30 max-w-lg mx-auto",
          style: {
            background: "oklch(var(--accent) / 0.05)",
            borderRadius: "2px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic text-accent", children: "Bhagavad Gita 18.41:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"Brahmins, Kshatriyas, Vaishyas and Shudras are distinguished by qualities born of their own nature — svabhava-jam karma."' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-2 italic", children: "Varna is defined by QUALITIES (gunas) and ACTIONS (karma), not birth alone. One who has a Brahmin's qualities performs a Brahmin's dharma, regardless of birth." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: VARNAS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setSelectedVarna(v.id),
        "data-ocid": `varna-tab-${v.id}`,
        className: `p-4 border text-center transition-smooth ${selectedVarna === v.id ? "border-accent/60 bg-accent/10" : "border-border hover:border-accent/30 hover:bg-accent/5"}`,
        style: { borderRadius: "2px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: v.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground", children: v.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic", children: v.nameSanskrit })
        ]
      },
      v.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        className: `p-5 border border-border/50 bg-gradient-to-r ${varna.color}`,
        style: { borderRadius: "2px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl shrink-0", children: varna.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-bold text-foreground", children: [
                varna.name,
                " (",
                varna.nameSanskrit,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-accent italic mt-0.5", children: varna.nature })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-3 border-l-2 mb-3",
              style: {
                borderColor: "oklch(var(--accent) / 0.5)",
                background: "oklch(var(--muted) / 0.2)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-foreground leading-relaxed", children: varna.gitaVerse })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: varna.importance })
        ]
      },
      selectedVarna
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex border border-border",
        style: { background: "oklch(var(--card) / 0.7)" },
        children: ["duties", "schedule"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab),
            "data-ocid": `varna-subtab-${tab}`,
            className: `flex-1 py-3 text-sm font-body border-b-2 transition-smooth ${activeTab === tab ? "text-primary border-b-accent/70" : "text-muted-foreground border-b-transparent hover:text-foreground"}`,
            children: tab === "duties" ? "📿 10 Sacred Duties" : "⏰ Daily Schedule"
          },
          tab
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: activeTab === "duties" ? -8 : 8 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        children: activeTab === "duties" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: varna.duties.map((duty) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: duty.number * 0.04 },
            className: "border border-border p-4",
            style: {
              background: "oklch(var(--card) / 0.65)",
              borderRadius: "2px"
            },
            "data-ocid": `varna-duty-${varna.id}-${duty.number}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "shrink-0 w-7 h-7 flex items-center justify-center text-xs font-display font-bold border",
                  style: {
                    background: "oklch(var(--accent) / 0.15)",
                    borderColor: "oklch(var(--accent) / 0.4)",
                    color: "oklch(var(--accent))",
                    borderRadius: "1px"
                  },
                  children: duty.number
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground mb-1", children: duty.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: duty.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1.5",
                    style: { color: "oklch(var(--accent) / 0.7)" },
                    children: [
                      "Source: ",
                      duty.source
                    ]
                  }
                )
              ] })
            ] })
          },
          duty.number
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border",
            style: {
              background: "oklch(var(--card) / 0.65)",
              borderRadius: "2px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-4 py-3 border-b border-border/40",
                  style: { background: "oklch(var(--muted) / 0.4)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-sm font-semibold text-foreground", children: [
                    varna.icon,
                    " Ideal Daily Schedule — ",
                    varna.name
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/30", children: varna.dailySchedule.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "shrink-0 font-display text-xs font-semibold w-16",
                    style: { color: "oklch(var(--accent))" },
                    children: item.time
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: item.activity })
              ] }, item.time)) })
            ]
          }
        )
      },
      `${selectedVarna}-${activeTab}`
    ) })
  ] });
}
export {
  PraharPoojaSection as P,
  ShodashSection as S,
  VarnaDharmaSection as V
};
