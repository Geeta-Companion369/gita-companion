import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-vCKiyWhq.js";
const VERSES = [
  {
    id: 1,
    ref: "BG 6.30",
    sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।",
    transliteration: "Yo māṁ paśyati sarvatra sarvaṁ ca mayi paśyati",
    meaning: "I am never lost to you, and you are never lost to me.",
    krishnaWords: "I see you right now. I am here."
  },
  {
    id: 2,
    ref: "BG 2.20",
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।",
    transliteration: "Na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ",
    meaning: "The soul is eternal, unborn — it is not slain when the body is slain.",
    krishnaWords: "You cannot be destroyed. This pain is temporary."
  },
  {
    id: 3,
    ref: "BG 2.14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।",
    transliteration: "Mātrāsparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ",
    meaning: "Happiness and distress come and go like seasons. They will pass.",
    krishnaWords: "This darkness will pass. Do not make a permanent decision in a temporary moment."
  },
  {
    id: 4,
    ref: "BG 9.22",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।",
    transliteration: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate",
    meaning: "I carry what you lack and preserve what you have.",
    krishnaWords: "Give me your burden. All of it. Right now."
  },
  {
    id: 5,
    ref: "BG 18.66",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।",
    transliteration: "Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja",
    meaning: "Surrender to me alone. I shall deliver you. Do not fear.",
    krishnaWords: "Drop everything. Just come to me."
  },
  {
    id: 6,
    ref: "BG 4.36",
    sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः।",
    transliteration: "Api ced asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛttamaḥ",
    meaning: "Even the most sinful crosses the ocean of misery by my grace.",
    krishnaWords: "No mistake is too big for my love."
  },
  {
    id: 7,
    ref: "BG 18.65",
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।",
    transliteration: "Man-manā bhava mad-bhakto mad-yājī māṁ namaskuru",
    meaning: "You are my very dear friend. You will come to me without fail.",
    krishnaWords: "You are dear to me. I never abandon what is mine."
  },
  {
    id: 8,
    ref: "BG 18.33",
    sanskrit: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।",
    transliteration: "Dhṛtyā yayā dhārayate manaḥ-prāṇendriya-kriyāḥ",
    meaning: "Unbreakable determination — the resolve that is never broken.",
    krishnaWords: "I am giving you my strength right now."
  },
  {
    id: 9,
    ref: "BG 2.3",
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।",
    transliteration: "Klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate",
    meaning: "Do not yield to this weakness. Arise.",
    krishnaWords: "This darkness has lied to you. Arise."
  },
  {
    id: 10,
    ref: "BG 3.16",
    sanskrit: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।",
    transliteration: "Evaṁ pravartitaṁ cakraṁ nānuvartayatīha yaḥ",
    meaning: "Your life has purpose. You were placed here intentionally.",
    krishnaWords: "There are souls who need you. Your life matters."
  },
  {
    id: 11,
    ref: "BG 2.45",
    sanskrit: "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन।",
    transliteration: "Trai-guṇya-viṣayā vedā nistrai-guṇyo bhavārjuna",
    meaning: "Rise above this pain. I am calling you higher.",
    krishnaWords: "Your true self is above all of this."
  },
  {
    id: 12,
    ref: "BG 2.66",
    sanskrit: "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना।",
    transliteration: "Nāsti buddhir ayuktasya na cāyuktasya bhāvanā",
    meaning: "Come to me and I will give you real, permanent peace.",
    krishnaWords: "The peace I give is unshakeable."
  },
  {
    id: 13,
    ref: "BG 9.2",
    sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्।",
    transliteration: "Rāja-vidyā rāja-guhyaṁ pavitram idam uttamam",
    meaning: "My path is joyful and everlasting. Just begin.",
    krishnaWords: "One step. Say my name once. That is enough."
  },
  {
    id: 14,
    ref: "BG 9.31",
    sanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति।",
    transliteration: "Kṣipraṁ bhavati dharmātmā śaśvac-chāntiṁ nigacchati",
    meaning: "My devotee never perishes. Never.",
    krishnaWords: "I declare this — you will not perish. This is my oath."
  },
  {
    id: 15,
    ref: "BG 18.57",
    sanskrit: "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः।",
    transliteration: "Cetasā sarva-karmāṇi mayi sannyasya mat-paraḥ",
    meaning: "Work always under my protection. Your future is safe with me.",
    krishnaWords: "Give me your tomorrow. I will show you one step at a time."
  },
  {
    id: 16,
    ref: "BG 7.17",
    sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते।",
    transliteration: "Teṣāṁ jñānī nitya-yukta eka-bhaktir viśiṣyate",
    meaning: "You are dear to me — not because you are perfect, but because you came to me.",
    krishnaWords: "That one step toward me makes you the most precious."
  },
  {
    id: 17,
    ref: "BG 8.16",
    sanskrit: "आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन।",
    transliteration: "Ābrahma-bhuvanāl lokāḥ punar āvartino 'rjuna",
    meaning: "Beyond this darkness is eternal light — my abode where there is no more suffering.",
    krishnaWords: "I am taking you there. Stay on the path."
  },
  {
    id: 18,
    ref: "BG 18.66",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja | Ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    meaning: "Surrender to me alone. I shall deliver you. Do not grieve.",
    krishnaWords: "Do not worry. I will take you out of this immediately. Just follow my path. You are eternal. You are loved. You are not alone. Hare Krishna."
  }
];
const CRISIS_VERSE_ORDER = {
  suicidal: [1, 0, 2, 9, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17],
  divorced: [6, 0, 2, 15, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 1, 16, 17],
  addiction: [4, 5, 6, 0, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  prison: [5, 6, 4, 0, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  terminal: [1, 16, 0, 6, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17],
  caregiver: [3, 0, 6, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  youth: [9, 0, 12, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 1, 16, 17],
  unemployed: [3, 9, 0, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  student: [2, 9, 0, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  migrant: [0, 6, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  elderly: [6, 0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  abuse: [7, 0, 8, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  betrayed: [6, 15, 0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 1, 16, 17],
  soldier: [8, 0, 9, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  atheist: [12, 15, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 1, 16, 17],
  midlife: [15, 0, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 1, 16, 17],
  domestic: [3, 6, 0, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17],
  disabled: [0, 6, 3, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 16, 17]
};
const CRISIS_CATEGORIES = [
  {
    id: "suicidal",
    icon: "🕯️",
    hindi: "जीवन का संकट",
    title: "Suicidal / Wanting to Give Up",
    desc: "Feeling like there is no reason to continue",
    verseRef: "BG 2.20"
  },
  {
    id: "divorced",
    icon: "💔",
    hindi: "विच्छेद का दर्द",
    title: "Divorced / Separated / Heartbroken",
    desc: "Relationship loss tearing the heart",
    verseRef: "BG 18.65"
  },
  {
    id: "addiction",
    icon: "⛓️",
    hindi: "व्यसन का बंधन",
    title: "Struggling with Addiction",
    desc: "Trapped in a cycle I cannot break",
    verseRef: "BG 18.66"
  },
  {
    id: "prison",
    icon: "🔒",
    hindi: "पश्चाताप का भार",
    title: "In Prison / Guilt-Ridden",
    desc: "Carrying shame and the weight of past mistakes",
    verseRef: "BG 4.36"
  },
  {
    id: "terminal",
    icon: "🌅",
    hindi: "मृत्यु का साक्षात्कार",
    title: "Facing Terminal Illness",
    desc: "Confronting death, seeking peace for the soul",
    verseRef: "BG 2.20"
  },
  {
    id: "caregiver",
    icon: "🤲",
    hindi: "सेवा का थकान",
    title: "Exhausted Caregiver",
    desc: "Giving everything to others, silently breaking",
    verseRef: "BG 9.22"
  },
  {
    id: "youth",
    icon: "🌱",
    hindi: "दिशाहीन युवा",
    title: "Youth Without Direction / Purpose",
    desc: "No path, no purpose, no identity",
    verseRef: "BG 3.16"
  },
  {
    id: "unemployed",
    icon: "🪔",
    hindi: "आर्थिक संकट",
    title: "Unemployed / Business Failure",
    desc: "Financial ruin, shame, hopelessness",
    verseRef: "BG 9.22"
  },
  {
    id: "student",
    icon: "📿",
    hindi: "परीक्षा का भय",
    title: "Student Under Extreme Pressure",
    desc: "Exams, failure, parental expectations crushing the spirit",
    verseRef: "BG 2.14"
  },
  {
    id: "migrant",
    icon: "🌍",
    hindi: "विदेश में एकाकी",
    title: "Migrant / Refugee / Displaced",
    desc: "Uprooted from home, culture, identity",
    verseRef: "BG 6.30"
  },
  {
    id: "elderly",
    icon: "☀️",
    hindi: "बुढ़ापे की एकांत",
    title: "Elderly and Alone / Forgotten",
    desc: "Living forgotten, waiting, purposeless",
    verseRef: "BG 18.65"
  },
  {
    id: "abuse",
    icon: "🛡️",
    hindi: "शोषण का घाव",
    title: "Surviving Abuse / Trauma",
    desc: "Carrying deep wounds from what others did to you",
    verseRef: "BG 18.33"
  },
  {
    id: "betrayed",
    icon: "🌊",
    hindi: "विश्वासघात का दर्द",
    title: "Betrayed / Trust Broken",
    desc: "Love or trust turned to pain and loss",
    verseRef: "BG 18.65"
  },
  {
    id: "soldier",
    icon: "⚔️",
    hindi: "सैनिक का बोझ",
    title: "Soldier / Veteran Carrying Wounds",
    desc: "Carrying violence, loss, and the weight of duty",
    verseRef: "BG 2.3"
  },
  {
    id: "atheist",
    icon: "🔍",
    hindi: "संशय में आत्मा",
    title: "Atheist / Doubting God",
    desc: "Faith lost, searching, questioning everything",
    verseRef: "BG 9.2"
  },
  {
    id: "midlife",
    icon: "⏳",
    hindi: "जीवन की खालीपन",
    title: "Midlife Emptiness / 'Is This All?'",
    desc: "Success without peace, achievement without meaning",
    verseRef: "BG 7.17"
  },
  {
    id: "domestic",
    icon: "🆘",
    hindi: "घरेलू हिंसा",
    title: "Domestic Violence / Unsafe",
    desc: "In danger at home — please reach out for help",
    verseRef: "BG 9.22",
    showHelplineFirst: true
  },
  {
    id: "disabled",
    icon: "♾️",
    hindi: "अलग-अलग क्षमता",
    title: "Differently Abled / Disabled",
    desc: "Daily challenges, feeling overlooked or limited",
    verseRef: "BG 6.30"
  }
];
const HELPLINE_CATEGORIES = [
  {
    id: "emergency",
    label: "Emergency Services",
    icon: "🚨",
    helplines: [
      {
        name: "National Emergency",
        number: "112",
        type: "All Emergencies",
        icon: "🆘"
      },
      { name: "Police", number: "100", type: "Law Enforcement", icon: "🚔" },
      {
        name: "Ambulance / Medical",
        number: "108",
        type: "Medical Emergency",
        icon: "🚑"
      },
      {
        name: "Fire Brigade",
        number: "101",
        type: "Fire Emergency",
        icon: "🔥"
      },
      {
        name: "Medical Helpline",
        number: "104",
        type: "Health Info & Emergency",
        icon: "🏥"
      },
      {
        name: "AIIMS Emergency (Delhi)",
        number: "011-26588500",
        type: "Hospital Emergency",
        icon: "🏥"
      }
    ]
  },
  {
    id: "mental_health",
    label: "Mental Health & Suicide Prevention",
    icon: "🧠",
    helplines: [
      {
        name: "iCall (TISS)",
        number: "9152987821",
        type: "Mental Health Counselling",
        icon: "🧠",
        note: "Mon–Sat, 8am–10pm"
      },
      {
        name: "AASRA",
        number: "9820466627",
        type: "Suicide Prevention",
        icon: "🕊️",
        note: "24x7"
      },
      {
        name: "Vandrevala Foundation",
        number: "1860-2662-345",
        type: "Mental Health 24x7",
        icon: "🙏",
        note: "24x7"
      },
      {
        name: "Vandrevala Foundation (Alt)",
        number: "1800-2333-330",
        type: "Mental Health Toll-Free",
        icon: "🙏",
        note: "24x7 Free"
      },
      {
        name: "iCall (Alternate)",
        number: "9152987821",
        type: "Substance Abuse / LGBTQ+",
        icon: "🌈"
      },
      {
        name: "Mann Talks",
        number: "8686139139",
        type: "Mental Health Support",
        icon: "💬"
      },
      {
        name: "Fortis Stress Helpline",
        number: "8376804102",
        type: "Stress & Mental Wellbeing",
        icon: "🌿"
      },
      {
        name: "Parivarthan (Bangalore)",
        number: "+91-7676602602",
        type: "Counselling & Support",
        icon: "🌸"
      },
      {
        name: "Snehi",
        number: "044-24640050",
        type: "Emotional Support",
        icon: "🤍",
        note: "Mon–Sat, 8am–10pm"
      },
      {
        name: "Sumaitri (Delhi)",
        number: "011-23389090",
        type: "Emotional Support",
        icon: "💛",
        note: "2pm–10pm daily"
      },
      {
        name: "Connecting NGO (Pune)",
        number: "9922001122",
        type: "Suicide Prevention",
        icon: "🤝"
      },
      {
        name: "Maitra (Pune)",
        number: "9763533441",
        type: "Mental Health Support",
        icon: "🌻"
      },
      {
        name: "NIMHANS (Bangalore)",
        number: "080-46110007",
        type: "Mental Health / Drug Helpline",
        icon: "🏥"
      },
      {
        name: "Roshni (Hyderabad)",
        number: "040-66202000",
        type: "Crisis Support",
        icon: "🌟"
      },
      {
        name: "Sahai (Bangalore)",
        number: "080-25497777",
        type: "Emotional Support",
        icon: "💙"
      },
      {
        name: "Lifeline Foundation (Kolkata)",
        number: "033-64643267",
        type: "Suicide Prevention",
        icon: "🕊️"
      },
      {
        name: "Sanjivini (Delhi)",
        number: "011-24311918",
        type: "Mental Health Support",
        icon: "🌺"
      },
      {
        name: "Cooj (Goa)",
        number: "0832-2252525",
        type: "Crisis Counselling",
        icon: "🌊"
      },
      {
        name: "Arpita (Bangalore)",
        number: "080-23655557",
        type: "Suicide Prevention",
        icon: "🪷"
      }
    ]
  },
  {
    id: "women",
    label: "Women in Distress / Domestic Violence",
    icon: "🛡️",
    helplines: [
      {
        name: "Women Helpline (Nationwide)",
        number: "181",
        type: "Women's Safety & Distress",
        icon: "🛡️",
        note: "24x7"
      },
      {
        name: "Women in Distress",
        number: "1091",
        type: "Women Emergency",
        icon: "🚨",
        note: "24x7"
      },
      {
        name: "NCW — National Commission for Women",
        number: "7827170170",
        type: "Women's Rights & Safety",
        icon: "⚖️"
      },
      {
        name: "Shakti Shalini (Delhi)",
        number: "011-24373737",
        type: "Domestic Violence Support",
        icon: "💪"
      },
      {
        name: "Nirbhaya Fund Helpline",
        number: "181",
        type: "Women Safety (Nirbhaya)",
        icon: "🏛️"
      }
    ]
  },
  {
    id: "child",
    label: "Child Helpline & Protection",
    icon: "👶",
    helplines: [
      {
        name: "Childline India",
        number: "1098",
        type: "Child Protection & Trafficking",
        icon: "👶",
        note: "24x7 Free"
      },
      {
        name: "NCPCR Child Welfare",
        number: "1800-121-2830",
        type: "Child Rights & Protection",
        icon: "🌱",
        note: "Toll-Free"
      }
    ]
  },
  {
    id: "elderly",
    label: "Elderly & Senior Citizens",
    icon: "☀️",
    helplines: [
      {
        name: "Elder Line India",
        number: "14567",
        type: "Senior Citizens Helpline",
        icon: "☀️",
        note: "National"
      },
      {
        name: "Agewell Foundation",
        number: "1800-180-1253",
        type: "Elderly Welfare",
        icon: "🌼",
        note: "Toll-Free"
      }
    ]
  },
  {
    id: "addiction",
    label: "Drug & Alcohol Rehabilitation",
    icon: "⛓️",
    helplines: [
      {
        name: "MANAS — Drug Abuse Helpline",
        number: "14446",
        type: "Substance Abuse National Helpline",
        icon: "🌿",
        note: "24x7"
      },
      {
        name: "NIMHANS Drug Helpline",
        number: "080-46110007",
        type: "Drug & Alcohol Counselling",
        icon: "🏥"
      },
      {
        name: "iCall (Substance Abuse)",
        number: "9152987821",
        type: "Addiction Counselling",
        icon: "🧠"
      }
    ]
  },
  {
    id: "legal",
    label: "Legal Aid & Rights",
    icon: "⚖️",
    helplines: [
      {
        name: "NALSA — Legal Aid",
        number: "15100",
        type: "Free Legal Services",
        icon: "⚖️",
        note: "National"
      },
      {
        name: "Legal Aid Toll-Free",
        number: "1800-11-5111",
        type: "Legal Assistance",
        icon: "🏛️",
        note: "Toll-Free"
      }
    ]
  },
  {
    id: "disability",
    label: "Disability Support",
    icon: "♾️",
    helplines: [
      {
        name: "Disability Helpline",
        number: "1800-180-5129",
        type: "Disability Services",
        icon: "♾️",
        note: "Toll-Free"
      },
      {
        name: "Divyangjan Helpline",
        number: "011-22015999",
        type: "Persons with Disabilities",
        icon: "🤝"
      }
    ]
  },
  {
    id: "health",
    label: "Health — Cancer / HIV / Illness",
    icon: "🏥",
    helplines: [
      {
        name: "National AIDS Helpline",
        number: "1097",
        type: "HIV / AIDS Support",
        icon: "🎗️",
        note: "24x7 Free"
      },
      {
        name: "CanSupport Cancer Helpline",
        number: "011-41010539",
        type: "Cancer Support",
        icon: "💛"
      },
      {
        name: "ICS Cancer Helpline",
        number: "1800-419-1010",
        type: "Cancer Awareness & Support",
        icon: "🌸",
        note: "Toll-Free"
      }
    ]
  },
  {
    id: "disaster",
    label: "Disaster Management & Relief",
    icon: "🌪️",
    helplines: [
      {
        name: "Disaster Management",
        number: "1070",
        type: "State Disaster Helpline",
        icon: "🌪️"
      },
      {
        name: "NDRF Helpline",
        number: "011-24363260",
        type: "National Disaster Response Force",
        icon: "🚒"
      },
      {
        name: "NDMA",
        number: "1800-180-1253",
        type: "National Disaster Mgmt Authority",
        icon: "🏛️",
        note: "Toll-Free"
      }
    ]
  },
  {
    id: "road",
    label: "Road & Traffic Emergencies",
    icon: "🚗",
    helplines: [
      {
        name: "Road Accident Emergency",
        number: "1073",
        type: "Road Accident Help",
        icon: "🚗"
      },
      {
        name: "Highway Emergency",
        number: "1033",
        type: "National Highway Helpline",
        icon: "🛣️"
      },
      {
        name: "Railway Emergency",
        number: "182",
        type: "Railway Emergency",
        icon: "🚂"
      },
      {
        name: "Railway Enquiry",
        number: "139",
        type: "Railway / Missing Persons",
        icon: "🚆"
      }
    ]
  },
  {
    id: "cyber",
    label: "Cyber Crime",
    icon: "💻",
    helplines: [
      {
        name: "Cyber Crime Helpline",
        number: "1930",
        type: "Online Fraud & Cyber Crime",
        icon: "💻",
        note: "24x7"
      }
    ]
  },
  {
    id: "financial",
    label: "Financial Distress & Consumer",
    icon: "💰",
    helplines: [
      {
        name: "SEBI Investor Helpline",
        number: "1800-22-7575",
        type: "Investment / Securities Fraud",
        icon: "📈",
        note: "Toll-Free"
      },
      {
        name: "Consumer Forum",
        number: "1800-11-4000",
        type: "Consumer Complaints",
        icon: "🛒",
        note: "Toll-Free"
      },
      {
        name: "Kisan Call Centre",
        number: "1800-180-1551",
        type: "Farmers Distress",
        icon: "🌾",
        note: "24x7 Free"
      },
      {
        name: "PM-Kisan Helpline",
        number: "155261",
        type: "Farmer Support",
        icon: "🌻"
      }
    ]
  },
  {
    id: "trafficking",
    label: "Anti-Trafficking",
    icon: "✊",
    helplines: [
      {
        name: "Childline / Anti-Trafficking",
        number: "1098",
        type: "Child Trafficking & Rescue",
        icon: "✊",
        note: "24x7"
      },
      {
        name: "Shakti Vahini",
        number: "011-42244224",
        type: "Human Trafficking Support",
        icon: "🛡️"
      }
    ]
  },
  {
    id: "defence",
    label: "Armed Forces & Veterans",
    icon: "⚔️",
    helplines: [
      {
        name: "Sainik Welfare Board",
        number: "1800-180-5505",
        type: "Ex-Servicemen Welfare",
        icon: "⚔️",
        note: "Toll-Free"
      },
      {
        name: "AWWA — Army Welfare",
        number: "011-26173215",
        type: "Army Family Welfare",
        icon: "🎖️"
      },
      {
        name: "Ex-Servicemen Welfare",
        number: "011-26173215",
        type: "Veterans Support",
        icon: "🏅"
      }
    ]
  }
];
const CRISIS_HELPLINE_MAP = {
  suicidal: ["emergency", "mental_health"],
  divorced: ["mental_health", "legal", "women"],
  addiction: ["addiction", "mental_health", "emergency"],
  prison: ["legal", "mental_health"],
  terminal: ["health", "emergency", "mental_health"],
  caregiver: ["mental_health", "health"],
  youth: ["mental_health", "emergency"],
  unemployed: ["mental_health", "financial", "legal"],
  student: ["mental_health"],
  migrant: ["emergency", "mental_health", "legal"],
  elderly: ["elderly", "emergency", "mental_health"],
  abuse: ["emergency", "women", "mental_health", "legal"],
  betrayed: ["mental_health"],
  soldier: ["defence", "mental_health", "emergency"],
  atheist: ["mental_health"],
  midlife: ["mental_health"],
  domestic: ["women", "emergency", "legal", "mental_health"],
  disabled: ["disability", "emergency", "mental_health"]
};
const DOMESTIC_QUICK = [
  { name: "Women Helpline", number: "181", icon: "🛡️" },
  { name: "Women in Distress", number: "1091", icon: "🚨" },
  { name: "Police", number: "100", icon: "🚔" },
  { name: "National Emergency", number: "112", icon: "🆘" },
  { name: "NCW Helpline", number: "7827170170", icon: "⚖️" },
  { name: "Shakti Shalini (Delhi)", number: "011-24373737", icon: "💪" }
];
const INTERNATIONAL_HELPLINES = [
  // USA
  {
    country: "🇺🇸 USA",
    name: "988 Suicide & Crisis Lifeline",
    number: "988",
    note: "Call or Text, 24x7"
  },
  {
    country: "🇺🇸 USA",
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    note: "Text only"
  },
  {
    country: "🇺🇸 USA",
    name: "National Domestic Violence Hotline",
    number: "1-800-799-7233",
    note: "24x7"
  },
  {
    country: "🇺🇸 USA",
    name: "SAMHSA Substance Abuse",
    number: "1-800-662-4357",
    note: "24x7"
  },
  // Canada
  {
    country: "🇨🇦 Canada",
    name: "Crisis Services Canada",
    number: "1-833-456-4566",
    note: "24x7"
  },
  {
    country: "🇨🇦 Canada",
    name: "Kids Help Phone",
    number: "1-800-668-6868",
    note: "24x7"
  },
  // UK
  {
    country: "🇬🇧 UK",
    name: "Samaritans",
    number: "116 123",
    note: "24x7 Free"
  },
  {
    country: "🇬🇧 UK",
    name: "Crisis Text Line UK",
    number: "Text SHOUT to 85258",
    note: "Text only"
  },
  {
    country: "🇬🇧 UK",
    name: "Mind UK",
    number: "0300 123 3393",
    note: "Mon–Fri 9am–6pm"
  },
  {
    country: "🇬🇧 UK",
    name: "National Domestic Abuse Helpline",
    number: "0808 2000 247",
    note: "24x7 Free"
  },
  // Australia
  {
    country: "🇦🇺 Australia",
    name: "Lifeline Australia",
    number: "13 11 14",
    note: "24x7"
  },
  {
    country: "🇦🇺 Australia",
    name: "Beyond Blue",
    number: "1300 22 4636",
    note: "24x7"
  },
  {
    country: "🇦🇺 Australia",
    name: "Kids Helpline",
    number: "1800 55 1800",
    note: "24x7"
  },
  // Europe
  {
    country: "🇫🇷 France",
    name: "SOS Amitié",
    number: "09 72 39 40 50",
    note: "24x7"
  },
  {
    country: "🇩🇪 Germany",
    name: "TelefonSeelsorge",
    number: "0800 111 0 111",
    note: "24x7 Free"
  },
  // UAE / Gulf
  {
    country: "🇦🇪 UAE / Dubai",
    name: "Mental Health Helpline",
    number: "800-636825",
    note: "800-MENTAL"
  },
  {
    country: "🇦🇪 UAE / Abu Dhabi",
    name: "Abu Dhabi Crisis Line",
    number: "800-4673",
    note: "24x7"
  },
  // Global
  {
    country: "🌍 Worldwide",
    name: "Befrienders Worldwide",
    number: "www.befrienders.org",
    note: "International directory"
  },
  {
    country: "🌍 Worldwide",
    name: "WHO Mental Health",
    number: "www.who.int/mental_health/en",
    note: "Global resource"
  }
];
function BattlefieldBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none overflow-hidden",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.22 0.18 268 / 0.6) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 30% 20%, oklch(0.18 0.12 280 / 0.4) 0%, transparent 60%),
            linear-gradient(180deg,
              oklch(0.08 0.08 268) 0%,
              oklch(0.10 0.06 45) 40%,
              oklch(0.12 0.08 32) 70%,
              oklch(0.08 0.04 28) 100%
            )
          `
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0",
            style: {
              height: "35%",
              background: `
            radial-gradient(ellipse 80% 100% at 50% 100%,
              oklch(0.45 0.18 52 / 0.5) 0%,
              oklch(0.30 0.14 45 / 0.3) 40%,
              transparent 70%
            )
          `
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `
            linear-gradient(oklch(0.76 0.32 54 / 0.12) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.76 0.32 54 / 0.08) 1px, transparent 1px)
          `,
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)"
            }
          }
        )
      ]
    }
  );
}
function KrishnaChariot({ isVisible }) {
  const [fluteDown, setFluteDown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setFluteDown(true), 2200);
      return () => clearTimeout(t);
    }
  }, [isVisible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.4, ease: "easeOut" },
      className: "flex flex-col items-center gap-2 my-4",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute rounded-full",
              style: {
                width: 80,
                height: 80,
                background: "radial-gradient(circle, oklch(0.82 0.32 54 / 0.35) 0%, transparent 70%)"
              },
              animate: { scale: [1, 1.3, 1] },
              transition: {
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative z-10 flex flex-col items-center",
              style: { fontSize: "3.5rem", lineHeight: 1, userSelect: "none" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🦚" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2rem", marginTop: "-0.5rem" }, children: "🙏" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: fluteDown ? { rotate: 90, opacity: 0.6, y: 8 } : { rotate: 0, opacity: 1, y: 0 },
            transition: { duration: 1.2, ease: "easeInOut" },
            style: { fontSize: "1.6rem", transformOrigin: "left center" },
            title: "Krishna has set aside his flute for you",
            children: "🪈"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: fluteDown && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.6 },
            className: "font-body text-center text-xs italic",
            style: {
              color: "oklch(0.82 0.32 54 / 0.85)",
              letterSpacing: "0.04em"
            },
            children: "I have set aside my flute. Right now, only you matter."
          }
        ) })
      ]
    }
  ) });
}
function HelplineCard({ h }) {
  const isText = h.number.toLowerCase().startsWith("text");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: isText ? void 0 : `tel:${h.number.replace(/[\s\-()]/g, "")}`,
      "data-ocid": `emergency.helpline.${h.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
      className: "flex items-center gap-3 rounded-lg p-3 transition-all duration-200",
      style: {
        background: "oklch(0.20 0.08 268 / 0.55)",
        border: "1px solid oklch(0.48 0.24 268 / 0.25)",
        cursor: isText ? "default" : "pointer"
      },
      "aria-label": isText ? `${h.name}: ${h.number}` : `Call ${h.name} at ${h.number}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem", flexShrink: 0 }, children: h.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body font-semibold text-xs leading-snug truncate",
              style: { color: "oklch(0.85 0.06 74)" },
              children: h.name
            }
          ),
          h.note && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs",
              style: { color: "oklch(0.55 0.06 60 / 0.7)" },
              children: h.note
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-display font-bold text-xs tracking-wide text-right flex-shrink-0 max-w-[130px]",
            style: { color: "oklch(0.82 0.32 54)" },
            children: isText ? h.number : `📞 ${h.number}`
          }
        )
      ]
    }
  );
}
function HelplineCategoryBlock({ cat }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl overflow-hidden mb-3",
      style: {
        background: "oklch(0.14 0.07 268 / 0.8)",
        border: "1px solid oklch(0.48 0.24 268 / 0.3)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between px-4 py-3 transition-all",
            style: { color: "oklch(0.88 0.28 54)" },
            "data-ocid": `emergency.helpline_cat.${cat.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 font-body font-semibold text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.1rem" }, children: cat.icon }),
                cat.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full px-1.5 py-0.5 font-body text-xs",
                    style: {
                      background: "oklch(0.48 0.24 268 / 0.3)",
                      color: "oklch(0.72 0.08 74)"
                    },
                    children: cat.helplines.length
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.62 0.26 32)", fontSize: "0.85rem" }, children: open ? "▲" : "▼" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3 grid gap-2", children: cat.helplines.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(HelplineCard, { h }, h.name + h.number)) })
          }
        ) })
      ]
    }
  );
}
function HelplineSection({
  crisisId,
  showAll = false
}) {
  const [viewAll, setViewAll] = reactExports.useState(showAll);
  const priorityCategoryIds = crisisId ? CRISIS_HELPLINE_MAP[crisisId] ?? ["emergency", "mental_health"] : ["emergency", "mental_health"];
  const priorityCategories = HELPLINE_CATEGORIES.filter(
    (c) => priorityCategoryIds.includes(c.id)
  );
  const otherCategories = HELPLINE_CATEGORIES.filter(
    (c) => !priorityCategoryIds.includes(c.id)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      className: "mt-6 rounded-xl p-4 text-left",
      style: {
        background: "oklch(0.13 0.06 268 / 0.9)",
        border: "1px solid oklch(0.48 0.24 268 / 0.35)"
      },
      "data-ocid": "emergency.helplines_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-center mb-1",
            style: { color: "oklch(0.82 0.32 54)", fontSize: "0.95rem" },
            children: "When you need human hands too —"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-center text-xs mb-1 italic",
            style: { color: "oklch(0.68 0.06 60 / 0.8)" },
            children: "Krishna sends help through people."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-center text-xs mb-5",
            style: {
              color: "oklch(0.55 0.12 268 / 0.8)",
              background: "oklch(0.18 0.08 268 / 0.5)",
              borderRadius: "6px",
              padding: "6px 10px"
            },
            children: "📡 All helplines are pre-loaded and available without internet connection. Tap any number to call."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs font-semibold mb-2 uppercase tracking-widest",
            style: { color: "oklch(0.62 0.26 32 / 0.85)" },
            children: "✦ Relevant for your situation"
          }
        ),
        priorityCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(HelplineCategoryBlock, { cat }, cat.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-4 mb-3 mt-1",
            style: {
              background: "oklch(0.16 0.10 268 / 0.6)",
              border: "1px solid oklch(0.48 0.24 268 / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs font-semibold mb-3",
                  style: { color: "oklch(0.70 0.08 74 / 0.85)" },
                  children: "🌍 International Helplines"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-1.5", children: INTERNATIONAL_HELPLINES.map((h) => {
                const isLink = h.number.startsWith("www");
                const isText = h.number.toLowerCase().startsWith("text");
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start justify-between gap-2 py-1",
                    style: {
                      borderBottom: "1px solid oklch(0.48 0.24 268 / 0.12)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-body text-xs font-semibold block",
                            style: { color: "oklch(0.70 0.10 52 / 0.9)" },
                            children: h.country
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-body text-xs",
                            style: { color: "oklch(0.65 0.06 60 / 0.75)" },
                            children: [
                              h.name,
                              h.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "oklch(0.50 0.06 54 / 0.6)" }, children: [
                                " ",
                                "· ",
                                h.note
                              ] })
                            ]
                          }
                        )
                      ] }),
                      isLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `https://${h.number}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "font-body text-xs font-bold flex-shrink-0",
                          style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                          children: "🔗 Visit"
                        }
                      ) : isText ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-body text-xs font-bold flex-shrink-0 text-right max-w-[110px]",
                          style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                          children: h.number
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `tel:${h.number.replace(/[\s\-()]/g, "")}`,
                          className: "font-body text-xs font-bold flex-shrink-0",
                          style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                          children: h.number
                        }
                      )
                    ]
                  },
                  h.name
                );
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setViewAll((v) => !v),
            "data-ocid": "emergency.view_all_helplines_button",
            className: "w-full rounded-lg py-2.5 font-body font-semibold text-sm transition-all mb-1",
            style: {
              background: viewAll ? "oklch(0.20 0.10 268 / 0.6)" : "oklch(0.22 0.12 268 / 0.7)",
              color: "oklch(0.78 0.12 74)",
              border: "1px solid oklch(0.48 0.24 268 / 0.35)"
            },
            children: viewAll ? "▲ Hide All India Helplines" : "▼ View All India Helplines (All Categories)"
          }
        ),
        viewAll && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            className: "mt-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs mb-3 text-center",
                  style: { color: "oklch(0.60 0.06 60 / 0.7)" },
                  children: "All helplines work 24/7 unless noted. Tap any number to call."
                }
              ),
              otherCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(HelplineCategoryBlock, { cat }, cat.id))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs text-center mt-3",
            style: {
              color: "oklch(0.48 0.06 54 / 0.65)",
              borderTop: "1px solid oklch(0.48 0.24 268 / 0.15)",
              paddingTop: "10px"
            },
            children: "🔒 These numbers are pre-loaded and available without internet connection. Krishna sends help through many hands."
          }
        )
      ]
    }
  );
}
function PersonalStoryCard() {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 0.15 },
      className: "mb-8 relative",
      "data-ocid": "emergency.personal_story_card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "linear-gradient(135deg, oklch(0.38 0.18 50 / 0.9), oklch(0.28 0.14 44 / 0.85), oklch(0.35 0.16 52 / 0.9))",
            padding: "2px",
            boxShadow: "0 0 48px oklch(0.78 0.34 54 / 0.35), 0 8px 32px oklch(0.48 0.24 268 / 0.2), inset 0 1px 0 oklch(0.90 0.42 54 / 0.3)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl px-5 py-6",
              style: {
                background: "linear-gradient(160deg, oklch(0.22 0.12 46 / 0.97) 0%, oklch(0.18 0.10 268 / 0.97) 60%, oklch(0.20 0.11 44 / 0.97) 100%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        color: "oklch(0.82 0.32 54 / 0.5)",
                        fontSize: "0.9rem",
                        letterSpacing: "0.2em"
                      },
                      children: "🌸"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-bold",
                      style: {
                        fontSize: "1.8rem",
                        color: "oklch(0.86 0.38 54)",
                        textShadow: "0 0 28px oklch(0.82 0.36 54 / 0.7), 0 0 56px oklch(0.78 0.34 52 / 0.4)",
                        lineHeight: 1
                      },
                      children: "ॐ"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        color: "oklch(0.82 0.32 54 / 0.5)",
                        fontSize: "0.9rem",
                        letterSpacing: "0.2em"
                      },
                      children: "🌸"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-center font-bold italic mb-1",
                    style: {
                      fontSize: "clamp(1rem, 3vw, 1.2rem)",
                      color: "oklch(0.90 0.28 54)",
                      textShadow: "0 0 16px oklch(0.82 0.32 54 / 0.35)",
                      lineHeight: 1.3
                    },
                    children: "You Are Not Alone — Krishna's Promise"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-center text-xs tracking-[0.28em] uppercase mb-4",
                    style: { color: "oklch(0.70 0.26 46 / 0.9)" },
                    children: "✦ A True Story of How Krishna Found His Arjuna ✦"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl px-4 py-4 mb-4",
                    style: {
                      background: "oklch(0.16 0.08 268 / 0.6)",
                      border: "1px solid oklch(0.78 0.32 54 / 0.18)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "rounded-lg px-4 py-3 mb-4",
                          style: {
                            background: "oklch(0.22 0.12 46 / 0.6)",
                            border: "1px solid oklch(0.82 0.32 54 / 0.25)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display italic font-bold text-center leading-relaxed",
                              style: {
                                fontSize: "clamp(0.88rem, 2.5vw, 1rem)",
                                color: "oklch(0.90 0.28 54)",
                                textShadow: "0 0 16px oklch(0.82 0.32 54 / 0.3)",
                                lineHeight: 1.75
                              },
                              children: '"A man once sat alone at a railway station, in the darkest night of his soul. He had lost everything — hope, joy, the will to carry on. A stranger sat beside him and handed him a small book: the Bhagavad Gita."'
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body leading-relaxed",
                          style: {
                            fontSize: "0.9rem",
                            color: "oklch(0.85 0.06 74 / 0.92)",
                            lineHeight: 1.85
                          },
                          children: "He read it. And Krishna spoke directly to him:"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-display italic text-center my-3 px-2",
                          style: {
                            fontSize: "0.88rem",
                            color: "oklch(0.88 0.28 54)",
                            lineHeight: 1.75
                          },
                          children: [
                            "'Never was there a time when I did not exist, nor you, nor all these beings; nor in the future shall any of us cease to be.'",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "block font-body text-[10px] mt-1 not-italic",
                                style: { color: "oklch(0.62 0.20 46 / 0.80)" },
                                children: "— Chapter 2, Verse 12"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body leading-relaxed",
                          style: {
                            fontSize: "0.9rem",
                            color: "oklch(0.85 0.06 74 / 0.92)",
                            lineHeight: 1.85
                          },
                          children: "That man built this app. For you. So that Krishna would find you the same way Krishna found him — through an unexpected moment of grace."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: { opacity: 0, height: 0 },
                          transition: { duration: 0.5 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "font-body leading-relaxed mt-3",
                              style: {
                                fontSize: "0.9rem",
                                color: "oklch(0.85 0.06 74 / 0.92)",
                                lineHeight: 1.85
                              },
                              children: [
                                "That book saved this life. And so this app was born — not as a business, not as a project, but as seva. As an offering back to Krishna for the grace He showed. This app is our way of making sure that the next soul sitting alone in a dark hour, wondering if it’s worth going on — finds Krishna. Finds the Gita. Finds that still, small voice saying:",
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: { color: "oklch(0.82 0.30 54)" }, children: "‘I am here. I have always been here. I will never leave you.’" })
                              ]
                            }
                          )
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setExpanded((v) => !v),
                          className: "font-body text-xs mt-2 underline underline-offset-2 transition-all",
                          style: { color: "oklch(0.65 0.24 54 / 0.8)" },
                          children: expanded ? "Show less ▲" : "Read full story ▼"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl px-4 py-4 text-center",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.28 0.16 50 / 0.7), oklch(0.22 0.12 268 / 0.6))",
                      border: "1px solid oklch(0.82 0.32 54 / 0.3)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display italic font-bold leading-relaxed",
                          style: {
                            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                            color: "oklch(0.90 0.34 54)",
                            textShadow: "0 0 20px oklch(0.82 0.34 54 / 0.45)",
                            lineHeight: 1.7
                          },
                          children: "Krishna came to this man through a stranger at a railway station. He came to you through this app. He never stops finding ways to reach his Arjuna. Never."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              height: 1,
                              width: 40,
                              background: "oklch(0.82 0.32 54 / 0.35)"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem", opacity: 0.7 }, children: "🪔" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              height: 1,
                              width: 40,
                              background: "oklch(0.82 0.32 54 / 0.35)"
                            }
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
      )
    }
  );
}
function EmergencyAlertBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7 },
      className: "rounded-xl px-4 py-3 mb-6 flex items-start gap-3",
      style: {
        background: "linear-gradient(135deg, oklch(0.25 0.16 24 / 0.92), oklch(0.20 0.13 20 / 0.9))",
        border: "1.5px solid oklch(0.62 0.28 24 / 0.55)",
        boxShadow: "0 4px 20px oklch(0.48 0.22 24 / 0.25)"
      },
      "data-ocid": "emergency.alert_banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.3rem", flexShrink: 0, marginTop: 1 }, children: "🆘" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-display font-bold text-sm leading-snug mb-0.5",
              style: { color: "oklch(0.92 0.28 40)" },
              children: [
                "If you are in immediate danger — call",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:112",
                    className: "underline underline-offset-2",
                    style: { color: "oklch(0.88 0.34 54)" },
                    children: "112"
                  }
                ),
                " ",
                "(India Emergency)"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs",
              style: { color: "oklch(0.75 0.08 60 / 0.85)", lineHeight: 1.5 },
              children: "Krishna is with you right now. You are not alone."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "rounded-full px-2 py-0.5 font-body text-xs font-semibold flex-shrink-0",
            style: {
              background: "oklch(0.35 0.15 150 / 0.35)",
              color: "oklch(0.72 0.18 150)",
              border: "1px solid oklch(0.50 0.18 150 / 0.4)"
            },
            children: "Works Offline ✓"
          }
        )
      ]
    }
  );
}
function EntryScreen({
  onSelectCategory,
  onDirectVerses
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.7 },
      className: "relative z-10 w-full max-w-4xl mx-auto px-4 py-8 pb-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmergencyAlertBanner, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PersonalStoryCard, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9, delay: 0.2 },
            className: "text-center mb-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      height: 1,
                      width: 60,
                      background: "linear-gradient(to right, transparent, oklch(0.82 0.32 54 / 0.7))"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem", color: "oklch(0.82 0.32 54)" }, children: "🪔" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      height: 1,
                      width: 60,
                      background: "linear-gradient(to left, transparent, oklch(0.82 0.32 54 / 0.7))"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs mb-1 tracking-[0.35em] uppercase",
                  style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                  children: "॥ हरे कृष्ण ॥"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display font-bold mb-1",
                  style: {
                    fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
                    lineHeight: 1.2,
                    color: "oklch(0.88 0.32 54)",
                    textShadow: "0 0 40px oklch(0.82 0.32 54 / 0.5)"
                  },
                  children: "धर्म आपातकाल"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-display font-semibold mb-4",
                  style: {
                    fontSize: "clamp(1rem, 3vw, 1.4rem)",
                    color: "oklch(0.78 0.26 52 / 0.9)",
                    letterSpacing: "0.06em"
                  },
                  children: "Dharma Emergency"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mx-auto max-w-lg rounded-lg p-5 mb-6",
                  style: {
                    background: "oklch(0.15 0.10 268 / 0.7)",
                    border: "1px solid oklch(0.82 0.32 54 / 0.3)",
                    boxShadow: "0 0 32px oklch(0.48 0.24 268 / 0.2), inset 0 1px 0 oklch(0.82 0.32 54 / 0.1)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display italic mb-2",
                        style: {
                          fontSize: "1.05rem",
                          color: "oklch(0.88 0.32 54)",
                          lineHeight: 1.6
                        },
                        children: '"I am here, Arjun."'
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body",
                        style: {
                          fontSize: "0.9rem",
                          color: "oklch(0.78 0.10 74 / 0.9)",
                          lineHeight: 1.7
                        },
                        children: "You are not alone. Whatever weight you carry — bring it to me. I have set aside everything. Right now, only you matter."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display italic mt-3 text-sm",
                        style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                        children: "Hare Krishna — you are not alone."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body mb-2",
                  style: { color: "oklch(0.80 0.08 74 / 0.85)", fontSize: "0.95rem" },
                  children: "What is weighing on your heart today, Arjun?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm",
                  style: { color: "oklch(0.65 0.08 60 / 0.7)" },
                  children: "Choose your battle, and Krishna will speak directly to you."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid gap-3 mb-8",
            style: {
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))"
            },
            "data-ocid": "emergency.category_list",
            children: CRISIS_CATEGORIES.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 + idx * 0.04, duration: 0.5 },
                whileHover: { scale: 1.02, y: -2 },
                whileTap: { scale: 0.97 },
                onClick: () => onSelectCategory(cat.id),
                "data-ocid": `emergency.category.${idx + 1}`,
                className: "text-left rounded-lg p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2",
                style: {
                  background: cat.showHelplineFirst ? "oklch(0.25 0.14 28 / 0.8)" : "oklch(0.16 0.08 268 / 0.75)",
                  border: cat.showHelplineFirst ? "1px solid oklch(0.62 0.26 32 / 0.5)" : "1px solid oklch(0.48 0.24 268 / 0.4)",
                  boxShadow: "0 2px 16px oklch(0.48 0.24 268 / 0.15)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "1.6rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: 2
                      },
                      children: cat.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-xs mb-0.5",
                        style: {
                          color: "oklch(0.62 0.26 32 / 0.85)",
                          letterSpacing: "0.05em"
                        },
                        children: cat.hindi
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body font-semibold leading-snug mb-1",
                        style: { color: "oklch(0.88 0.28 54)", fontSize: "0.875rem" },
                        children: cat.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body leading-snug",
                        style: {
                          color: "oklch(0.70 0.06 60 / 0.85)",
                          fontSize: "0.775rem"
                        },
                        children: cat.desc
                      }
                    ),
                    cat.showHelplineFirst && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block mt-1.5 rounded px-2 py-0.5 text-xs font-body font-semibold",
                        style: {
                          background: "oklch(0.62 0.26 32 / 0.25)",
                          color: "oklch(0.88 0.28 54)"
                        },
                        children: "🆘 Helplines shown first"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-xs mt-1.5",
                        style: { color: "oklch(0.55 0.18 268 / 0.8)" },
                        children: [
                          cat.verseRef,
                          " ✦"
                        ]
                      }
                    )
                  ] })
                ] })
              },
              cat.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1 },
            className: "flex justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onDirectVerses,
                "data-ocid": "emergency.speak_to_krishna_button",
                className: "font-display font-semibold rounded-full px-8 py-3.5 transition-all duration-300",
                style: {
                  background: "linear-gradient(135deg, oklch(0.48 0.24 268), oklch(0.38 0.20 280))",
                  color: "oklch(0.92 0.04 74)",
                  border: "1px solid oklch(0.60 0.24 268 / 0.5)",
                  boxShadow: "0 4px 24px oklch(0.48 0.24 268 / 0.4)",
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em"
                },
                children: "🙏 Just speak to me, Krishna"
              }
            )
          }
        )
      ]
    }
  );
}
const DEFAULT_ORDER = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17
];
function VerseScreen({
  categoryId,
  onBack,
  onTalkToKrishna
}) {
  const order = categoryId ? CRISIS_VERSE_ORDER[categoryId] ?? DEFAULT_ORDER : DEFAULT_ORDER;
  const orderedVerses = order.map((i) => VERSES[i]);
  const isDomestic = categoryId === "domestic";
  const [verseIdx, setVerseIdx] = reactExports.useState(0);
  const [showHelplines, setShowHelplines] = reactExports.useState(isDomestic);
  const [finished, setFinished] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const currentVerse = orderedVerses[verseIdx];
  const progress = (verseIdx + 1) / 18 * 100;
  const selectedCat = CRISIS_CATEGORIES.find((c) => c.id === categoryId);
  const goNext = () => {
    var _a;
    if (verseIdx < 17) {
      setVerseIdx((v) => v + 1);
      (_a = containerRef.current) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setFinished(true);
    }
  };
  const goPrev = () => {
    if (verseIdx > 0) setVerseIdx((v) => v - 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.6 },
      ref: containerRef,
      className: "relative z-10 w-full max-w-2xl mx-auto px-4 py-6 pb-28 overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onBack,
              "data-ocid": "emergency.back_button",
              className: "rounded-full p-2 transition-all",
              style: {
                background: "oklch(0.20 0.08 268 / 0.7)",
                border: "1px solid oklch(0.48 0.24 268 / 0.4)",
                color: "oklch(0.82 0.32 54)"
              },
              "aria-label": "Go back",
              children: "←"
            }
          ),
          selectedCat && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs truncate",
                style: { color: "oklch(0.62 0.26 32 / 0.85)" },
                children: selectedCat.hindi
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm font-semibold truncate",
                style: { color: "oklch(0.88 0.28 54)" },
                children: selectedCat.title
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KrishnaChariot, { isVisible: true }),
        isDomestic && showHelplines && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            className: "mb-6 rounded-lg p-5",
            style: {
              background: "oklch(0.22 0.14 28 / 0.9)",
              border: "2px solid oklch(0.62 0.26 32 / 0.6)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-center mb-2",
                  style: { color: "oklch(0.88 0.28 54)", fontSize: "1rem" },
                  children: "🆘 Your safety comes first, Arjun."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm text-center mb-4",
                  style: { color: "oklch(0.78 0.06 60 / 0.9)" },
                  children: "Please reach out to these helplines immediately."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 mb-4", children: DOMESTIC_QUICK.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `tel:${h.number.replace(/[\s\-]/g, "")}`,
                  className: "flex items-center gap-3 rounded-lg p-3 font-body font-semibold text-sm transition-all",
                  style: {
                    background: "oklch(0.62 0.26 32 / 0.25)",
                    color: "oklch(0.92 0.04 74)",
                    border: "1px solid oklch(0.62 0.26 32 / 0.4)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem" }, children: h.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: h.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        style: {
                          color: "oklch(0.82 0.32 54)",
                          letterSpacing: "0.05em"
                        },
                        children: [
                          "📞 ",
                          h.number
                        ]
                      }
                    )
                  ]
                },
                h.name
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowHelplines(false),
                  className: "w-full text-center font-body text-sm py-2 transition-all rounded-lg",
                  style: {
                    color: "oklch(0.65 0.20 268)",
                    background: "oklch(0.18 0.08 268 / 0.5)"
                  },
                  children: "Continue to Krishna's words →"
                }
              )
            ]
          }
        ),
        !finished && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-body text-xs",
                style: { color: "oklch(0.65 0.08 60 / 0.7)" },
                children: [
                  "Verse ",
                  verseIdx + 1,
                  " of 18"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-xs",
                style: { color: "oklch(0.62 0.26 32 / 0.8)" },
                children: currentVerse.ref
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-full overflow-hidden",
              style: { height: 3, background: "oklch(0.25 0.08 268 / 0.6)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    background: "linear-gradient(to right, oklch(0.62 0.26 32), oklch(0.82 0.32 54))"
                  },
                  animate: { width: `${progress}%` },
                  transition: { duration: 0.5 }
                }
              )
            }
          )
        ] }),
        !finished && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -30 },
            transition: { duration: 0.5, ease: "easeInOut" },
            "data-ocid": "emergency.verse_card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-6 mb-4 text-center",
                  style: {
                    background: "oklch(0.14 0.10 268 / 0.85)",
                    border: "1px solid oklch(0.82 0.32 54 / 0.25)",
                    boxShadow: "0 0 40px oklch(0.48 0.24 268 / 0.2), inset 0 1px 0 oklch(0.82 0.32 54 / 0.1)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-xs mb-4 tracking-[0.3em]",
                        style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                        children: [
                          "✦ ॥ ",
                          currentVerse.ref,
                          " ॥ ✦"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display mb-3 leading-relaxed",
                        style: {
                          fontSize: "clamp(1rem, 3.5vw, 1.4rem)",
                          color: "oklch(0.88 0.32 54)",
                          textShadow: "0 0 20px oklch(0.82 0.32 54 / 0.3)"
                        },
                        children: currentVerse.sanskrit
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body italic text-sm mb-4",
                        style: {
                          color: "oklch(0.68 0.14 52 / 0.85)",
                          letterSpacing: "0.03em"
                        },
                        children: currentVerse.transliteration
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 my-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            height: 1,
                            width: 40,
                            background: "oklch(0.82 0.32 54 / 0.3)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem", opacity: 0.7 }, children: "🪷" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            height: 1,
                            width: 40,
                            background: "oklch(0.82 0.32 54 / 0.3)"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body font-semibold mb-1",
                        style: {
                          color: "oklch(0.85 0.06 74)",
                          fontSize: "0.95rem",
                          lineHeight: 1.65
                        },
                        children: currentVerse.meaning
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-5 mb-5",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.20 0.12 46 / 0.9), oklch(0.18 0.10 268 / 0.9))",
                    border: "1px solid oklch(0.62 0.26 32 / 0.4)",
                    boxShadow: "0 4px 24px oklch(0.62 0.26 32 / 0.15)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs uppercase tracking-widest mb-2",
                        style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                        children: "Krishna speaks to you directly —"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-display italic",
                        style: {
                          fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                          color: "oklch(0.88 0.32 54)",
                          lineHeight: 1.7,
                          textShadow: "0 0 16px oklch(0.82 0.32 54 / 0.2)"
                        },
                        children: [
                          "“",
                          currentVerse.krishnaWords,
                          "”"
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: goPrev,
                    disabled: verseIdx === 0,
                    "data-ocid": "emergency.verse_prev",
                    className: "flex-1 rounded-lg py-3 font-body font-semibold text-sm transition-all duration-200 disabled:opacity-30",
                    style: {
                      background: "oklch(0.20 0.08 268 / 0.6)",
                      border: "1px solid oklch(0.48 0.24 268 / 0.35)",
                      color: "oklch(0.78 0.10 74)"
                    },
                    children: "← Previous"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    type: "button",
                    onClick: goNext,
                    "data-ocid": "emergency.verse_next",
                    whileTap: { scale: 0.96 },
                    className: "flex-[2] rounded-lg py-3 font-display font-bold text-sm transition-all duration-200",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                      color: "oklch(0.10 0.06 28)",
                      boxShadow: "0 4px 20px oklch(0.62 0.26 32 / 0.4)",
                      letterSpacing: "0.04em"
                    },
                    children: verseIdx < 17 ? "Next Verse →" : "Complete ✦"
                  }
                )
              ] })
            ]
          },
          verseIdx
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: finished && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8 },
            className: "text-center py-6",
            "data-ocid": "emergency.completed_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { scale: [1, 1.15, 1] },
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  style: { fontSize: "3rem", marginBottom: "1rem" },
                  children: "🙏"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-display font-bold mb-3",
                  style: {
                    fontSize: "1.6rem",
                    color: "oklch(0.88 0.32 54)",
                    textShadow: "0 0 24px oklch(0.82 0.32 54 / 0.4)"
                  },
                  children: "Krishna is still here."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic mb-2",
                  style: { color: "oklch(0.78 0.28 52)", fontSize: "1.1rem" },
                  children: "You are not alone."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body mb-6 max-w-xs mx-auto",
                  style: {
                    color: "oklch(0.70 0.06 60 / 0.85)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7
                  },
                  children: "All 18 verses have spoken to your heart. Whenever you need me — I am here. Just say “Hare Krishna.”"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      height: 1,
                      width: 48,
                      background: "oklch(0.82 0.32 54 / 0.4)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      color: "oklch(0.82 0.32 54 / 0.7)",
                      fontSize: "0.85rem"
                    },
                    children: "✦ ॐ ✦"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      height: 1,
                      width: 48,
                      background: "oklch(0.82 0.32 54 / 0.4)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 max-w-xs mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onTalkToKrishna,
                    "data-ocid": "emergency.talk_to_krishna_button",
                    className: "rounded-full py-3.5 px-6 font-display font-bold transition-all duration-300",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                      color: "oklch(0.10 0.06 28)",
                      boxShadow: "0 4px 24px oklch(0.62 0.26 32 / 0.45)",
                      letterSpacing: "0.04em"
                    },
                    children: "🙏 Talk to Krishna"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowHelplines(true),
                    "data-ocid": "emergency.show_helplines_button",
                    className: "rounded-full py-3 px-6 font-body font-semibold text-sm transition-all",
                    style: {
                      background: "oklch(0.18 0.08 268 / 0.7)",
                      color: "oklch(0.70 0.08 74)",
                      border: "1px solid oklch(0.48 0.24 268 / 0.3)"
                    },
                    children: "View Helpline Numbers"
                  }
                )
              ] }),
              showHelplines && /* @__PURE__ */ jsxRuntimeExports.jsx(HelplineSection, { crisisId: categoryId, showAll: false })
            ]
          }
        ) }),
        !finished && !isDomestic && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowHelplines((v) => !v),
              "data-ocid": "emergency.helplines_toggle",
              className: "font-body text-xs underline-offset-2 underline transition-all",
              style: { color: "oklch(0.55 0.18 268 / 0.7)" },
              children: showHelplines ? "Hide helplines" : "Need immediate human help? View helplines"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showHelplines && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.4 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HelplineSection, { crisisId: categoryId })
            }
          ) })
        ] })
      ]
    }
  );
}
function EmergencyIntroBanner({ onEnter }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.6 },
      className: "relative z-10 w-full max-w-lg mx-auto px-6 py-16 text-center flex flex-col items-center justify-center min-h-screen",
      "data-ocid": "emergency.intro.banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { scale: [1, 1.1, 1] },
            transition: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            style: { fontSize: "3.5rem", marginBottom: "1.5rem" },
            "aria-hidden": true,
            children: "🪔"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-xs tracking-[0.35em] uppercase mb-4",
            style: { color: "oklch(0.62 0.26 32 / 0.85)" },
            children: "॥ धर्म आपातकाल ॥"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-display italic font-bold mb-2",
            style: {
              fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
              color: "oklch(0.88 0.32 54)",
              textShadow: "0 0 40px oklch(0.82 0.32 54 / 0.5)",
              lineHeight: 1.2
            },
            children: "Dharma Emergency"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4, duration: 0.8 },
            className: "my-8 max-w-md",
            style: {
              background: "oklch(0.15 0.10 268 / 0.75)",
              border: "1.5px solid oklch(0.82 0.32 54 / 0.35)",
              borderRadius: "12px",
              padding: "1.6rem 1.75rem",
              backdropFilter: "blur(10px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display italic font-bold mb-3 leading-relaxed",
                  style: {
                    fontSize: "clamp(1rem, 3vw, 1.25rem)",
                    color: "oklch(0.92 0.08 68)",
                    lineHeight: 1.7
                  },
                  children: [
                    '"Krishna is with you.',
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.86 0.36 54)" }, children: "Whatever battle you face —" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.78 0.28 54)" }, children: "you are not alone." }),
                    '"'
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body italic text-sm mt-3",
                  style: { color: "oklch(0.70 0.06 60 / 0.8)", lineHeight: 1.65 },
                  children: "I have set aside my flute. Right now, only you matter."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.7, duration: 0.6 },
            className: "flex flex-col items-center gap-3 mb-8 w-full max-w-xs",
            children: [
              "18 life-saving Gita verses",
              "Tailored for your specific battle",
              "Real helplines — always available offline"
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 font-body text-sm",
                style: { color: "oklch(0.78 0.08 68 / 0.85)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.82 0.32 54)", flexShrink: 0 }, children: "✦" }),
                  item
                ]
              },
              item
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            type: "button",
            onClick: onEnter,
            "data-ocid": "emergency.intro.enter_button",
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.9, duration: 0.5 },
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.96 },
            className: "rounded-full py-4 px-10 font-display font-bold text-base transition-all duration-300",
            style: {
              background: "linear-gradient(135deg, oklch(0.48 0.24 268), oklch(0.38 0.20 280))",
              color: "oklch(0.92 0.04 74)",
              border: "1px solid oklch(0.60 0.24 268 / 0.5)",
              boxShadow: "0 4px 32px oklch(0.48 0.24 268 / 0.45)",
              letterSpacing: "0.04em"
            },
            children: "🙏 I need Krishna now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2, duration: 0.5 },
            className: "font-display italic mt-8 text-sm",
            style: { color: "oklch(0.62 0.24 32 / 0.8)" },
            children: '"I shall deliver you. Do not fear." — BG 18.66'
          }
        )
      ]
    }
  );
}
function EmergencyPage() {
  const [showIntro, setShowIntro] = reactExports.useState(() => {
    try {
      return !sessionStorage.getItem("emergency-intro-seen");
    } catch {
      return true;
    }
  });
  const [screen, setScreen] = reactExports.useState("entry");
  const [selectedCategory, setSelectedCategory] = reactExports.useState(null);
  const handleEnterEmergency = () => {
    try {
      sessionStorage.setItem("emergency-intro-seen", "1");
    } catch {
    }
    setShowIntro(false);
  };
  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
    setScreen("verses");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDirectVerses = () => {
    setSelectedCategory(null);
    setScreen("verses");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleBack = () => {
    setScreen("entry");
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleTalkToKrishna = () => {
    window.location.href = "/guidance";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen relative overflow-x-hidden",
      "data-ocid": "emergency.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BattlefieldBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: showIntro && /* @__PURE__ */ jsxRuntimeExports.jsx(EmergencyIntroBanner, { onEnter: handleEnterEmergency }, "intro") }),
        !showIntro && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "sticky top-0 z-50 flex items-center justify-between px-4 py-3",
              style: {
                background: "oklch(0.10 0.08 268 / 0.92)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid oklch(0.82 0.32 54 / 0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.1rem" }, children: "🪔" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-semibold text-sm",
                      style: {
                        color: "oklch(0.82 0.32 54)",
                        letterSpacing: "0.04em"
                      },
                      children: "Dharma Emergency"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/guidance",
                    "data-ocid": "emergency.talk_to_krishna_header",
                    className: "rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all",
                    style: {
                      background: "oklch(0.62 0.26 32 / 0.25)",
                      color: "oklch(0.82 0.32 54)",
                      border: "1px solid oklch(0.62 0.26 32 / 0.4)"
                    },
                    children: "🙏 Talk to Krishna"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: screen === "entry" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EntryScreen,
            {
              onSelectCategory: handleSelectCategory,
              onDirectVerses: handleDirectVerses
            },
            "entry"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            VerseScreen,
            {
              categoryId: selectedCategory,
              onBack: handleBack,
              onTalkToKrishna: handleTalkToKrishna
            },
            "verses"
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
              style: { pointerEvents: "none" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  href: "/guidance",
                  "data-ocid": "emergency.krishna_need_you_button",
                  whileHover: { scale: 1.06 },
                  whileTap: { scale: 0.95 },
                  className: "flex items-center gap-2 rounded-full px-5 py-3 font-display font-bold text-sm shadow-lg",
                  style: {
                    pointerEvents: "auto",
                    background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                    color: "oklch(0.10 0.06 28)",
                    boxShadow: "0 4px 32px oklch(0.62 0.26 32 / 0.5), 0 0 0 2px oklch(0.82 0.32 54 / 0.2)",
                    letterSpacing: "0.03em"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🙏" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Krishna, I need you" })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
export {
  EmergencyPage
};
