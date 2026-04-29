// ============================================================
// Karma Darpan — Deep content data
// ============================================================

export interface KarmaType {
  id: "sanchita" | "prarabdha" | "kriyamana";
  nameDevanagari: string;
  nameEnglish: string;
  definition: string;
  metaphor: string;
  story: { title: string; narrative: string; lesson: string };
  gitaRef: string;
  gitaVerse: string;
  whatToDo: string;
  color: string;
  icon: string;
}

export const KARMA_TYPES: KarmaType[] = [
  {
    id: "sanchita",
    nameDevanagari: "संचित कर्म",
    nameEnglish: "Sanchita Karma",
    definition:
      "The total storehouse of ALL karma accumulated across every past life — your cosmic bank account of actions, thoughts, and intentions from all previous existences.",
    metaphor:
      "Like a vast library containing every book ever written by your soul across countless lifetimes — you cannot read all at once, but they are all there.",
    story: {
      title: "The Righteous King and His Hidden Debt",
      narrative:
        "In the Mahabharata, there was a righteous king in his current life — generous, just, devoted to dharma. Yet he faced inexplicable suffering: his kingdom declined, his children died young, crops failed despite rain. The court sages were baffled. A great Rishi revealed the truth: in a previous life, this king had been a forest chieftain who had unknowingly destroyed an anthill killing thousands of innocent creatures, and in another life had broken a sacred promise to feed travelers. These Sanchita karmas, accumulated across lives, had finally ripened. His current righteousness could not erase what was already stored — it could only ensure his future was bright.",
      lesson:
        "Sanchita karma cannot be escaped by current goodness alone — it must be dissolved through knowledge, devotion, and grace. Even the righteous carry debts from lives they no longer remember.",
    },
    gitaRef: "BG 4.37",
    gitaVerse:
      '"As a blazing fire reduces wood to ashes, O Arjuna, so does the fire of knowledge burn all karma to ashes."',
    whatToDo:
      "Regular charity, yajna, devotion, selfless service, and above all — the fire of Self-knowledge (Jnana) gradually dissolves Sanchita karma. Complete surrender to Krishna (BG 18.66) can burn it entirely.",
    color: "oklch(0.52 0.24 280)",
    icon: "🏛️",
  },
  {
    id: "prarabdha",
    nameDevanagari: "प्रारब्ध कर्म",
    nameEnglish: "Prarabdha Karma",
    definition:
      "The specific portion of Sanchita karma that has been 'activated' for THIS lifetime — the karmic arrow already in flight. This is what shapes your birth circumstances, family, body, and major life events.",
    metaphor:
      "Like an arrow already released from the bow — once Prarabdha karma is set in motion, it must complete its arc. Even the archer cannot call it back.",
    story: {
      title: "Even Rama Had Prarabdha",
      narrative:
        "Lord Rama — the perfect avatar of Vishnu — underwent 14 years of forest exile. His beloved wife Sita was abducted. He fought an enormous war and lost countless dear companions. Scholars ask: if Rama was God himself, why did he suffer? The answer given in Adhyatma Ramayana: this was the divine play of Prarabdha. Even Krishna himself accepted Gandhari's curse after the Kurukshetra war — that his Yadava clan would perish just as the Kauravas had. He did not use his divine power to escape it. This was Prarabdha karma, and even God honored its law by living through it.",
      lesson:
        "Prarabdha cannot be avoided — even by saints and avatars. The wise do not rage against it but face it with equanimity, knowing it is finite and will exhaust itself.",
    },
    gitaRef: "BG 2.14",
    gitaVerse:
      '"O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearing and disappearing of winter and summer seasons."',
    whatToDo:
      "Prarabdha cannot be avoided — it must be lived through. But it CAN be experienced with grace. The Gita's teaching: accept Prarabdha as Krishna's blessing, not punishment. Face it with equanimity (samatvam). Suffering endured with dharma burns the karma faster.",
    color: "oklch(0.62 0.28 32)",
    icon: "🏹",
  },
  {
    id: "kriyamana",
    nameDevanagari: "क्रियमाण कर्म",
    nameEnglish: "Kriyamana Karma",
    definition:
      "The karma being created RIGHT NOW by your current thoughts, words, and actions — where your freedom lies. You cannot change Prarabdha, but you can choose Kriyamana every single moment.",
    metaphor:
      "Like seeds you are planting today — you cannot change the harvest already sprouting (Prarabdha), but the seeds in your hands RIGHT NOW will determine tomorrow's field.",
    story: {
      title: "Arjuna's Choice on Kurukshetra",
      narrative:
        "On the battlefield of Kurukshetra, Arjuna faced the ultimate Kriyamana karma moment. His Prarabdha — the war, the circumstance, the enemy lined before him — was already set. He could not make the Kauravas disappear. But his CHOICE — to fight with dharma or to run in delusion — that was entirely his. The entire Bhagavad Gita is Krishna teaching Arjuna how to act in THIS moment without creating binding karma. 'Fight not for yourself, not for a throne, not for victory — but as a sacred duty, offering the action to Me.' That is how Kriyamana becomes dharmic — and leaves no residue.",
      lesson:
        "The Entire Bhagavad Gita is about Kriyamana karma — how to act NOW with freedom, dharma, and non-attachment, so your current actions create liberation instead of new bondage.",
    },
    gitaRef: "BG 2.47",
    gitaVerse:
      '"You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of results, and never be attached to not acting."',
    whatToDo:
      "Nishkama Karma — action without expectation of reward — converts Kriyamana into zero new karma. Offer every action to Krishna mentally: 'This is for You, not for me.' Acts done this way leave no residue, no debt, no new chains.",
    color: "oklch(0.48 0.24 268)",
    icon: "🌱",
  },
];

export interface KarmaBurningMethod {
  id: string;
  name: string;
  nameDevanagari: string;
  gitaRef: string;
  gitaVerse: string;
  description: string;
  dailyPractice: string;
  color: string;
  icon: string;
}

export const KARMA_BURNING_METHODS: KarmaBurningMethod[] = [
  {
    id: "jnana",
    name: "Jnana — Knowledge",
    nameDevanagari: "ज्ञान",
    gitaRef: "BG 4.37",
    gitaVerse:
      "As a blazing fire reduces all wood to ashes, so the fire of knowledge burns all karma to ashes.",
    description:
      "The deepest karma-burner. True knowledge of the eternal Self — that you are not this body, not this mind, not this ego — dissolves the very illusion that creates karma. When the doer disappears through Self-knowledge, no new karma can bind, and existing karma loses its grip.",
    dailyPractice:
      "20-30 minutes of scripture study with deep reflection. Not just reading — contemplate: 'Who am I? What is truly happening here?' Let each verse dissolve one layer of the false self.",
    color: "oklch(0.72 0.28 54)",
    icon: "📖",
  },
  {
    id: "bhakti",
    name: "Bhakti — Devotion",
    nameDevanagari: "भक्ति",
    gitaRef: "BG 9.30-31",
    gitaVerse:
      "Even if the most sinful person decides to cross the ocean of miseries by the boat of devotion, I consider such a person a saint, for that person is properly situated.",
    description:
      "Krishna calls this the FASTEST karma-burner. Sincere, loving devotion to God bypasses the mechanics of karma entirely — not by escaping them, but by dissolving the ego that creates them. The devotee stops being the 'doer' and becomes an instrument of God's love.",
    dailyPractice:
      "Morning and evening prayer — not ritual obligation but genuine conversation with Krishna. Remember God throughout the day. When something beautiful happens: 'Thank you, Krishna.' When something painful: 'I trust you, Krishna.' This is living Bhakti.",
    color: "oklch(0.58 0.26 32)",
    icon: "🪷",
  },
  {
    id: "karma-yoga",
    name: "Karma Yoga — Selfless Action",
    nameDevanagari: "कर्म योग",
    gitaRef: "BG 3.19",
    gitaVerse:
      "Perform your duty without attachment to results. By acting without selfish motive, one attains the Supreme.",
    description:
      "Karma Yoga does not mean doing less — it means doing everything as an offering to God. The same action done with ego creates binding karma. The same action done as God's seva creates liberation. The action is identical — the inner orientation transforms everything.",
    dailyPractice:
      "Before any action — work, cooking, study, helping someone — pause for one breath and offer it mentally: 'This is for You, Krishna, not for me.' You will notice the quality of your actions change, and the weight of stress around them lighten.",
    color: "oklch(0.48 0.24 268)",
    icon: "⚡",
  },
  {
    id: "tapasya",
    name: "Tapasya — Sacred Austerity",
    nameDevanagari: "तपस्या",
    gitaRef: "BG 17.14-16",
    gitaVerse:
      "Austerity of the body: service to gods, Brahmins, teachers, parents; cleanliness; non-violence. Austerity of speech: speaking truth, kindness, scripture recitation. Austerity of the mind: equanimity, compassion, self-control.",
    description:
      "Tapasya is intentional voluntary difficulty that purifies — like a fire that burns away impurities. Every moment you choose discomfort for the sake of growth rather than comfort for the sake of ease, you burn Sanchita karma. Even waking early for prayer is Tapasya.",
    dailyPractice:
      "Choose one small daily Tapasya: wake 30 minutes earlier for meditation, fast one meal on Ekadashi, speak only kindly for one day, silence the phone for one hour. Small consistent Tapasya accumulates into enormous karma-purification over time.",
    color: "oklch(0.56 0.22 24)",
    icon: "🔥",
  },
  {
    id: "dana",
    name: "Dana — Sacred Charity",
    nameDevanagari: "दान",
    gitaRef: "BG 17.20",
    gitaVerse:
      "Charity given as a duty, without expectation of return, at the right time and place, to a worthy person — this is sattvic (pure) charity.",
    description:
      "The Gita distinguishes three kinds of charity: Sattvic (given selflessly, highest karma-burning), Rajasic (given for prestige or reciprocity, partial effect), and Tamasic (given with contempt or unwillingly, creates negative karma). The Puranas specify four especially powerful karma-burning charities.",
    dailyPractice:
      "Gau-seva (cow service), Annadanam (feeding the hungry), Vidyadanam (supporting education for those who cannot afford it), Jivanam (life-saving acts — donating blood, helping in emergencies). Even small daily charities done consistently purify deeply.",
    color: "oklch(0.45 0.22 150)",
    icon: "🤲",
  },
];

export interface PuranicStory {
  id: string;
  title: string;
  subtitle: string;
  karmaType: string;
  narrative: string;
  lesson: string;
  gitaRef: string;
  gitaVerse: string;
  icon: string;
  color: string;
}

export const PURANIC_STORIES: PuranicStory[] = [
  {
    id: "harishchandra",
    title: "Harishchandra",
    subtitle: "Truth and the Endurance of Prarabdha",
    karmaType: "Prarabdha",
    narrative:
      "King Harishchandra was the most truth-devoted king who ever lived — not one lie had passed his lips in his entire life. Yet his Prarabdha karma was severe: through a series of events orchestrated by the sage Vishwamitra (testing his dharma), Harishchandra lost his entire kingdom, was forced to sell his wife and son into servitude, and himself became a cremation-ground attendant demanding toll from the bereaved. His son died. He was about to cremate his own child when he recognized his wife in the crowd — she had come with their dead son's body. Even then, bound by duty, he demanded the toll. At the ultimate moment of darkness, the gods appeared and revealed: his entire suffering was Prarabdha karma. Because he had never broken dharma through all of it, all was restored — kingdom, wife, son, life.",
    lesson:
      "Prarabdha must be endured — even the most righteous are not exempt. But pure Kriyamana karma (the choices made during Prarabdha) determines what follows. Harishchandra's unwavering truth through suffering created karma that could only resolve in total restoration.",
    gitaRef: "BG 2.14",
    gitaVerse:
      "The nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearing and disappearing of winter and summer seasons.",
    icon: "👑",
    color: "oklch(0.68 0.28 52)",
  },
  {
    id: "nahusha",
    title: "King Nahusha",
    subtitle: "How Pride Destroys Accumulated Punya in an Instant",
    karmaType: "Sanchita",
    narrative:
      "King Nahusha had performed such extraordinary penance and accumulated such enormous punya (merit) across lifetimes that he was elevated to become the temporary king of the gods — the position of Indra itself. At the peak of his power and glory, pride entered his heart. He commanded seven great Rishis — sacred sages who had dedicated centuries to tapasya — to carry his royal palanquin like servants. They endured this humiliation in silence. Then Nahusha spoke an impatient and insulting word to the sage Agastya: 'Sarpa! Sarpa!' ('Move! Move!'). The word 'sarpa' also means serpent. Agastya, his dignity finally broken, turned and said: 'Sarpa bhava' — 'Be a serpent.' Nahusha fell immediately from the celestial throne and was transformed into a python for thousands of years. Lifetimes of accumulated merit — dissolved in one moment of ego.",
    lesson:
      "Sanchita karma (accumulated merit) can be destroyed instantly by ego and adharma. The same law that slowly burns good karma can also rapidly create catastrophic bad karma. Pride is the swiftest karma-destroyer — and the subtlest.",
    gitaRef: "BG 16.18",
    gitaVerse:
      "Those bewildered by false ego, strength, pride, lust, and anger become envious of God, who dwells in their own bodies and in the bodies of others, and blaspheme the real religion.",
    icon: "⚡",
    color: "oklch(0.52 0.22 280)",
  },
  {
    id: "yudhishthira",
    title: "Yudhishthira's Brief Hell",
    subtitle: "The Puzzle of Karma — No Action Goes Unaccounted",
    karmaType: "Sanchita + Kriyamana",
    narrative:
      "At the end of the Mahabharata, Yudhishthira — the most righteous of the Pandavas, whose footsteps never touched the earth in full (such was his dharma) — arrived at the gates of heaven after his earthly journey. The gods welcomed him with honor. But then he was led to a dark, foul, terrible region — a place of suffering and lament. He recognized voices he knew: Karna, Draupadi, Bhima, Arjuna, Nakula, Sahadeva. They were in torment. He demanded an explanation: 'These are the most righteous people I have known — why are they here?' The answer: for even their tiny sins, they must experience a brief moment of consequence before entering liberation. Then Yudhishthira himself was shown HIS hell — for one dharmic lie he had spoken during the war, saying 'Ashwatthama is dead' (referring to the elephant Ashwatthama, not the man) to deceive Drona. Even this half-truth, spoken for dharmic reasons, required brief consequence before complete liberation.",
    lesson:
      "Even a moment of adharma leaves a karmic mark that must be experienced — even by the most righteous. This is why accuracy in thought, word, and deed matters every single moment. Karma is not cruel — it is precise beyond our understanding.",
    gitaRef: "BG 4.17",
    gitaVerse:
      "The intricacies of action are very difficult to understand. Therefore one should know properly what action is, what forbidden action is, and what inaction is.",
    icon: "⚖️",
    color: "oklch(0.45 0.24 268)",
  },
  {
    id: "dhruva",
    title: "Prince Dhruva",
    subtitle: "A Child's Devotion Burns All Karma in Six Months",
    karmaType: "Kriyamana → Liberation",
    narrative:
      "Prince Dhruva was five years old when his stepmother publicly humiliated him — pushing him off his father's lap and saying 'You have no right to sit here. You were not born of me.' Wounded to his core, young Dhruva went to his mother, who said: 'If you want what no one can take from you, go seek Vishnu.' The five-year-old child, told by sages that the forest was too dangerous, simply replied: 'I am going.' He found the sage Narada, who tested him — Dhruva's determination was unmovable. Narada gave him the mantra 'Om Namo Bhagavate Vasudevaya' and instructed him in meditation. Dhruva sat in absolute, single-pointed devotion — for six months. Without food. Without distraction. Without wavering. Vishnu was so moved by the purity and intensity of this child's devotion that he appeared before him and granted him immortality as Dhruva Tara — the Pole Star. A fixed, eternal point in the sky because a child's heart was fixed, eternal, and unwavering.",
    lesson:
      "Bhakti (devotion) is the fastest karma-burner of all. What kings and sages couldn't achieve in lifetimes of ritual, a five-year-old achieved in six months through pure, uncompromising love for God. The quality of devotion matters infinitely more than its quantity or duration.",
    gitaRef: "BG 9.31",
    gitaVerse: "My devotee never perishes, O son of Kunti.",
    icon: "⭐",
    color: "oklch(0.58 0.26 52)",
  },
  {
    id: "brahmin-debt",
    title: "The Brahmin's Mysterious Debt",
    subtitle: "Karma's Precision — Every Action Has an Exact Consequence",
    karmaType: "Sanchita",
    narrative:
      "There was a Brahmin who in one life had been extraordinarily generous — feeding hundreds daily, giving freely of his wealth to temples and travelers. He died with great merit. In his next birth, he was born into wealth again — but now he was mysteriously stingy, unable to give without feeling a strange anxiety. Yet his wealth kept flowing OUT unexpectedly — bills, mishaps, losses, demands. No matter how much he earned, it drained away. Baffled and distressed, he consulted a great sage who could see past lives. The sage revealed: 'In your previous birth, you were generous with everyone — but once, in a time of crisis, you borrowed a small measure of rice from a destitute widow to feed a large gathering of guests. You intended to repay her the next day. But you forgot. She died before you remembered. The universe collected that debt in this life — with interest, across many years.' The Brahmin was stunned. 'Such a small thing?' The sage replied: 'Karma knows no small things.'",
    lesson:
      "Karma is more precise than any accounting system humans have devised. Every action — however small — has an exact consequence. Every debt, even forgotten, is eventually collected. This is not punishment but dharmic law, operating with perfect justice beyond our comprehension.",
    gitaRef: "BG 4.17",
    gitaVerse:
      "The intricacies of action are very difficult to understand. Therefore one should properly know what action is, what forbidden action is, and what inaction is.",
    icon: "🌾",
    color: "oklch(0.45 0.22 150)",
  },
];

export const ENHANCED_KARMA_QUESTIONS = [
  {
    key: "actedWithDharma" as const,
    question: "Did I act with dharma in thought, word, and deed today?",
    karmaType: "Kriyamana",
    typeColor: "oklch(0.48 0.24 268)",
    punya: "Creates positive Kriyamana karma in all three dimensions of action",
  },
  {
    key: "harmedNone" as const,
    question: "Did I go through this day without harming any soul?",
    karmaType: "Kriyamana",
    typeColor: "oklch(0.48 0.24 268)",
    punya: "Ahimsa — non-harming — prevents new negative Kriyamana karma",
  },
  {
    key: "served" as const,
    question: "Did I perform at least one act of selfless seva today?",
    karmaType: "Kriyamana",
    typeColor: "oklch(0.48 0.24 268)",
    punya: "Seva without expectation burns Sanchita karma through Dana",
  },
  {
    key: "practiced" as const,
    question: "Did I practice naam, mala, or scripture reading today?",
    karmaType: "Sanchita",
    typeColor: "oklch(0.52 0.24 280)",
    punya:
      "Spiritual practice directly dissolves Sanchita karma through Jnana and Bhakti",
  },
  {
    key: "rememberedKrishna" as const,
    question: "Did I remember Krishna in at least one difficult moment?",
    karmaType: "Prarabdha",
    typeColor: "oklch(0.62 0.28 32)",
    punya:
      "Turning to Krishna during Prarabdha transforms suffering into devotion",
  },
  {
    key: "performedSeva" as const,
    question:
      "Did I perform any selfless service (seva) today without expecting return?",
    karmaType: "Kriyamana",
    typeColor: "oklch(0.48 0.24 268)",
    punya: "Nishkama seva creates zero binding karma — action that liberates",
  },
  {
    key: "spoketruth" as const,
    question: "Did I speak truth even when it was difficult?",
    karmaType: "Kriyamana",
    typeColor: "oklch(0.48 0.24 268)",
    punya:
      "Satya (truthfulness) is Tapasya of speech — burns karma through verbal discipline",
  },
  {
    key: "showedCompassion" as const,
    question: "Did I show compassion to someone who needed it?",
    karmaType: "Kriyamana",
    typeColor: "oklch(0.48 0.24 268)",
    punya:
      "Compassion (karuna) is the fastest way to dissolve the ego that creates karma",
  },
] as const;

export type EnhancedKarmaKey = (typeof ENHANCED_KARMA_QUESTIONS)[number]["key"];

// ─── 108 Puranic Healing Stories ──────────────────────────────────────────────

export interface HealingStory {
  id: string;
  title: string;
  source: string;
  narrative: string;
  gitaLesson: string;
  gitaRef: string;
  application: string;
  icon: string;
}

export interface StoryCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  stories: HealingStory[];
}

export const HEALING_STORY_CATEGORIES: StoryCategory[] = [
  {
    id: "redemption",
    name: "Stories of Redemption",
    description: "When karma reverses through sincere transformation",
    color: "oklch(0.62 0.28 32)",
    icon: "🔥",
    stories: [
      {
        id: "valmiki",
        title: "Valmiki — The Dacoit Who Became a Sage",
        source: "Valmiki Ramayana",
        narrative:
          "Ratnakar was a feared dacoit who robbed and murdered travelers to feed his family. One day he intercepted the sage Narada. Narada asked: 'Will your family share in the sin of your deeds?' Ratnakar went home and found his answer — No. Shattered, he returned and surrendered to Narada who gave him the name Ram to chant. He sat in such deep meditation that an anthill grew around him. When he emerged, Brahma himself named him Valmiki — the one who emerged from the anthill. He then composed the entire Ramayana.",
        gitaLesson:
          "Even the most sinful person can cross all sin by the boat of knowledge.",
        gitaRef: "BG 4.36",
        application:
          "No matter what you have done, the moment you turn toward God sincerely, transformation begins. Your past does not define your destiny — only your present choice does.",
        icon: "📝",
      },
      {
        id: "ajamila",
        title: "Ajamila — Saved at the Moment of Death",
        source: "Srimad Bhagavatam, Canto 6",
        narrative:
          "Ajamila was a learned Brahmin who abandoned his duties and lived a sinful life for years. At the moment of death, Yama's messengers came for him. In terror, he called out for his beloved son: 'Narayana!' This one utterance of the Lord's name, even accidentally, immediately summoned Vishnu's divine messengers who freed him. The Yamadoots were stopped and explained: 'Even unconscious utterance of God's name at death destroys all sin.' Ajamila lived and spent his remaining years in devotion.",
        gitaLesson:
          "Thinking of Me alone at the time of death, he reaches My state.",
        gitaRef: "BG 8.5",
        application:
          "God's name carries infinite power. Even when we call on God without full awareness, He hears. Keep His name on your lips — especially in your darkest moments.",
        icon: "🕊️",
      },
      {
        id: "angulimala",
        title: "Angulimala — The Serial Killer Became a Saint",
        source:
          "Majjhima Nikaya (Buddhist Pali Canon, cross-reference in Hindu tradition)",
        narrative:
          "Angulimala had killed 999 people and wore their fingers as a garland. He had vowed to kill 1000. When he saw the Buddha walking calmly, he rushed to kill him but could not catch up despite running. When he said 'Stop!', the Buddha said 'I have stopped, Angulimala — you stop.' This simple response pierced his heart. He threw down his sword, surrendered, and became a monk of extraordinary compassion. People who had feared him saw his transformation and wept.",
        gitaLesson:
          "Not by birth but by one's karma and knowledge is one's nature determined.",
        gitaRef: "BG 4.13",
        application:
          "It is never too late to stop. The most violent person can choose, in one moment, to change. The people who hurt the most can become those who heal the most.",
        icon: "🏹",
      },
      {
        id: "prahlada",
        title: "Prahlada — The Child Who Could Not Be Killed",
        source: "Srimad Bhagavatam, Canto 7",
        narrative:
          "Prahlada was born to the demon king Hiranyakashipu who wanted to destroy Vishnu devotion. From birth, Prahlada worshipped Vishnu openly despite being the demon king's own son. Every attempt to kill the boy — poison, fire, elephants, drowning — failed because Vishnu's presence protected him. When Prahlada finally said 'Vishnu is everywhere — even in this pillar', Hiranyakashipu struck the pillar in rage. Narasimha emerged from it and destroyed the demon who had no protection.",
        gitaLesson:
          "To those who worship Me with devotion, I carry what they lack.",
        gitaRef: "BG 9.22",
        application:
          "When you hold God in your heart with absolute conviction, no force in the world can truly destroy you. Fear is conquered not by strength but by complete surrender to the Divine.",
        icon: "🦁",
      },
      {
        id: "kuchela",
        title: "Kuchela/Sudama — Poverty Transformed by Love",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Sudama was Krishna's childhood friend who had fallen into poverty so extreme that his family starved. His wife urged him to visit Krishna, their old friend who was now a king. Sudama went with only a handful of beaten rice as a gift, too ashamed to ask for help. Krishna saw him from afar, ran to embrace him, and personally washed his feet. He took Sudama's rice gift with tears of joy. When Sudama returned home, he found a palace in place of his hut and his family free of want forever. Krishna had given everything without Sudama even asking.",
        gitaLesson:
          "I am the same to all beings. None is hateful or dear to me. But those who worship Me with devotion — they are in Me and I in them.",
        gitaRef: "BG 9.29",
        application:
          "When you come to God with pure love — not calculation — His response exceeds every expectation. Don't be ashamed of what you cannot bring. Just bring yourself.",
        icon: "🌾",
      },
      {
        id: "draupadi",
        title: "Draupadi's Complete Surrender",
        source: "Mahabharata, Sabha Parva",
        narrative:
          "In the court of the Kauravas, Draupadi's sari was being pulled by Dushasana while her five husbands watched helplessly. At first she clutched the sari with both hands, trying to hold it herself. Then, in utter exhaustion and despair, she raised both hands and called out: 'Krishna!' In that moment of complete surrender — when she stopped trying to save herself and trusted completely — the miracle happened. The cloth became endless. Dushasana collapsed from exhaustion. Krishna had provided what no human could.",
        gitaLesson:
          "Take refuge in Me alone with all your being. I will liberate you from all sin. Do not grieve.",
        gitaRef: "BG 18.66",
        application:
          "Sometimes we exhaust ourselves trying to save ourselves when we need only to call God's name. The moment we release control completely, God moves.",
        icon: "🧵",
      },
      {
        id: "gajendra",
        title: "Gajendra Moksha — The Elephant's Cry",
        source: "Srimad Bhagavatam, Canto 8",
        narrative:
          "Gajendra, the elephant king, was caught by a crocodile in a lake. For a thousand years he struggled to free himself. He tried every physical means. As his strength failed and his life faded, he raised his trunk with a lotus flower and called to Vishnu — not from fear but from surrender: 'I take refuge in You who are the cause of all causes.' Vishnu immediately flew down on Garuda, threw His Sudarshana Chakra, and freed Gajendra, who attained liberation instantly.",
        gitaLesson: "For those who worship Me, I am easy to attain.",
        gitaRef: "BG 8.14",
        application:
          "When every human effort has failed and you are truly exhausted — that is the moment God has been waiting for. Cry out in genuine surrender. He comes immediately.",
        icon: "🐘",
      },
      {
        id: "dhruva",
        title: "Prince Dhruva — A Child's Unbroken Devotion",
        source: "Srimad Bhagavatam, Canto 4",
        narrative:
          "Five-year-old Dhruva was pushed off his father's lap by his stepmother. His mother told him: 'If you want what cannot be taken, seek Vishnu.' The boy went to the forest despite all warnings and meditated for six months without food or water in absolute one-pointed devotion. Vishnu was so moved He appeared and offered any boon. Dhruva said: 'I want only to always remember Your lotus feet.' Vishnu gave him the Pole Star — an eternal, fixed abode — because his heart was eternally fixed on God.",
        gitaLesson:
          "Fix your mind on Me, be devoted to Me, worship Me, bow down to Me. So shall you come to Me.",
        gitaRef: "BG 18.65",
        application:
          "Intensity of devotion matters more than its duration. A child's six months of pure love achieved what kings could not in lifetimes. Give your practice your full heart.",
        icon: "⭐",
      },
      {
        id: "ambarisha",
        title: "King Ambarisha — Devotion Defeats Even Rishis",
        source: "Srimad Bhagavatam, Canto 9",
        narrative:
          "King Ambarisha was a great devotee who dedicated everything — his senses, mind, speech, all — to Vishnu. Once, during Ekadashi fasting, the great sage Durvasa came as a guest at the moment Ambarisha was about to break his fast. Durvasa stormed off in anger at a technical infraction. He released his terrible Kritya weapon at Ambarisha. But Vishnu's Sudarshana Chakra — given to protect His devotee — turned the weapon back on Durvasa. The sage spent a year running from his own weapon before returning to Ambarisha and begging forgiveness.",
        gitaLesson: "I carry the burden of those whose minds are fixed on Me.",
        gitaRef: "BG 9.22",
        application:
          "Unfailing, consistent devotion to God builds a shield that ordinary people cannot comprehend. When you give God your complete dedication over time, you become invincible in the deepest sense.",
        icon: "🛡️",
      },
      {
        id: "vibhishana",
        title: "Vibhishana — Dharma Over Family",
        source: "Valmiki Ramayana, Yuddha Kanda",
        narrative:
          "Vibhishana was the brother of Ravana. He repeatedly counseled Ravana to return Sita and avoid war — for dharma, not strategy. Ravana humiliated and banished him. Vibhishana flew to Rama's camp and surrendered completely. Rama's advisors were suspicious — 'He could be a spy.' But Rama said: 'Even if he is my enemy's emissary, I cannot turn away someone who comes to me for shelter. It is my vow.' Rama accepted Vibhishana fully and later made him King of Lanka.",
        gitaLesson:
          "Abandoning all dharmas, take refuge in Me alone. I will liberate you from all sins. Do not grieve.",
        gitaRef: "BG 18.66",
        application:
          "When choosing between family pressure and dharma, choose dharma. God will honor the choice. You may lose everything you know, but you will gain everything that matters.",
        icon: "🕊️",
      },
      {
        id: "chaitanya",
        title: "Chaitanya Mahaprabhu — Ecstasy of God's Name",
        source: "Chaitanya Bhagavata, Chaitanya Charitamrita",
        narrative:
          "Nimai was a brilliant scholar in Navadwip who could defeat any philosopher in debate. At the age of 22, he went to Gaya for his father's shraddha ceremony. When he received the mantra from Ishvara Puri, something broke open in him — he saw Krishna everywhere, in everything. He returned a transformed man who would collapse in ecstatic kirtan, weeping for hours, embracing untouchables, seeing Krishna in every face. He spent the rest of his life chanting and distributing divine love to everyone without distinction.",
        gitaLesson:
          "The wise, who know the truth, perform all actions, dedicating them to the Divine.",
        gitaRef: "BG 5.17",
        application:
          "When God touches you genuinely, everything changes. You don't need to perform spirituality — it overflows from you naturally. Seek the experience, not the description of it.",
        icon: "🎵",
      },
      {
        id: "tukaram",
        title: "Tukaram — The Farmer Who Heard God's Voice",
        source: "Tukaram Gatha, Marathi Bhakti tradition",
        narrative:
          "Tukaram was a farmer in Maharashtra who went bankrupt and lost his family to drought and famine. In his devastation, he sat by the river and began composing abhangas — spontaneous songs to Vitthal (Krishna). He became so absorbed in devotion that he stopped caring for his worldly affairs entirely. His wife beat him for negligence. Traders threw his account books in the river. But Vitthal himself came in Tukaram's dreams, confirmed his devotion, and eventually took him bodily to Vaikuntha while thousands watched.",
        gitaLesson:
          "Whoever remembers Me with undivided attention, I carry what they lack.",
        gitaRef: "BG 9.22",
        application:
          "Complete absorption in God is not irresponsibility — it is the highest wisdom. The devotee who gives everything to God finds that God manages everything for them.",
        icon: "🌾",
      },
    ],
  },
  {
    id: "devotion",
    name: "Stories of Devotion",
    description: "How pure bhakti transforms the devotee and moves God",
    color: "oklch(0.58 0.26 54)",
    icon: "🪷",
    stories: [
      {
        id: "meera",
        title: "Meera Bai — Love Stronger Than Poison",
        source: "Meera Padavali, Rajput tradition",
        narrative:
          "Meera was a Rajput queen who was devoted to Krishna from childhood. Her husband died young and her in-laws tried to force her back into worldly duties. When she refused, they sent poison calling it 'prasad from God.' Meera drank it without fear, offering it to Krishna first — and it became nectar. They sent a venomous snake in a basket calling it flower garlands. When she opened it, she found flower garlands. She left the palace singing and never looked back, wandering and composing 1300 bhajans of yearning for Krishna.",
        gitaLesson:
          "To those who love Me with devotion, I give the yoga of understanding by which they come to Me.",
        gitaRef: "BG 10.10",
        application:
          "When love for God is total, the world loses its power to harm. Meera's story is proof that the greatest protection is God's love — it can turn poison to nectar.",
        icon: "🌹",
      },
      {
        id: "kabir",
        title: "Kabir Das — God Has No Religion",
        source: "Kabir Dohas, Bijak",
        narrative:
          "Kabir was born to a Muslim weaver family but devoted himself to Ram. He was rejected by both Hindus (who said he was not caste-eligible for initiation) and Muslims (who called him a kafir for worshipping Ram). He went to the Ganges at dawn where Ramananda walked — knowing the teacher would say 'Ram Ram' to whoever lay at his feet. Kabir lay down in the dark and received initiation this way. He spent his life weaving cloth and composing couplets of profound wisdom, mocking religious division and pointing to the one God within.",
        gitaLesson:
          "I am equally disposed to all beings. None is hateful or dear to Me. But those who worship Me with devotion — they are in Me and I in them.",
        gitaRef: "BG 9.29",
        application:
          "God does not live in institutions or castes — God lives in sincere hearts. Direct approach through love, without religious politics, is the highest path.",
        icon: "🧵",
      },
      {
        id: "shabari",
        title: "Shabari — The Berries of Pure Love",
        source: "Valmiki Ramayana, Aranya Kanda",
        narrative:
          "Shabari was an old tribal woman, rejected by her community, who spent decades alone in the forest waiting for Ram as her dying teacher had promised. Every day she swept the forest path in case Ram came. She collected berries, tasting each one to ensure they were sweet enough for Ram — because she wanted to give him only the best. When Ram finally came, he ate her pre-tasted berries with joy while Lakshmana looked on in concern. Ram said: 'What matters is not form but bhakti. Shabari's love is perfection.'",
        gitaLesson:
          "The wise see the same in a learned Brahmin, a cow, an elephant, a dog, and a dog-eater.",
        gitaRef: "BG 5.18",
        application:
          "God is not concerned with your caste, class, education, or status. He looks at the quality of your love. Pre-taste your berries — give God your absolute best, with your whole heart.",
        icon: "🫐",
      },
      {
        id: "andal",
        title: "Andal — The Girl Who Married Vishnu",
        source: "Nalayira Divya Prabandham, Tamil Vaishnava tradition",
        narrative:
          "Andal (Goda Devi) was a Tamil girl who believed she was Krishna's bride from childhood. She composed the Tiruppavai — 30 verses of exquisite devotion recited every day in all Vaishnava temples during Margazhi month. She wore the garland meant for the Vishnu idol, which scandalized the priests. But that night, Vishnu appeared in the temple priest's dream and said: 'Bring me the garland Andal wore. I want only garlands touched by her devotion.' She disappeared at age 17, merging with Vishnu's form in the Srirangam temple.",
        gitaLesson:
          "By devotion he knows me truly — what and who I am — and having known Me truly, he immediately enters Me.",
        gitaRef: "BG 18.55",
        application:
          "When love for God becomes total identity — when you cannot imagine yourself separate from God — you have reached the highest state. The boundary between devotee and God dissolves.",
        icon: "🌺",
      },
      {
        id: "narsi",
        title: "Narsi Mehta — The Krishna Who Loves the Outcast",
        source: "Narsi Mehta's Padas, Gujarat tradition",
        narrative:
          "Narsi Mehta was a poor Brahmin in Gujarat whose family despised him for his bhakti and neglect of worldly affairs. His sister-in-law publicly humiliated him. He went to Shiva's temple and wept. Shiva told him to go to the forest. There he saw a great kirtan with Radha and Krishna at the center. Krishna touched his forehead. From that day, Narsi sang bhajans that moved everyone. He spent his life among outcastes, whom he called Krishna's own. He composed 'Vaishnav Jan To' — Gandhi's favorite hymn.",
        gitaLesson:
          "I look upon all beings equally. There is none hateful or dear to Me.",
        gitaRef: "BG 9.29",
        application:
          "The one who serves the most marginalized, the poorest, the most rejected — serves Krishna directly. Do not wait for social approval to do what God is asking you to do.",
        icon: "🎤",
      },
      {
        id: "surdas",
        title: "Surdas — The Blind Poet Who Saw Krishna",
        source: "Sursagar, Hindi Bhakti",
        narrative:
          "Surdas was blind from birth. Yet he composed over 100,000 verses describing Krishna's appearance, his leelas, the blue of his complexion, the peacock feather in his hair — visual descriptions of extraordinary beauty. When asked how a blind man could describe Krishna's beauty so perfectly, Surdas said: 'I do not see with eyes. I see with devotion.' Once he fell into a well. Krishna himself came as a cowherd boy and pulled him out. When Surdas reached out to touch his rescuer's feet and said 'Let me see your face', Krishna revealed his divine form.",
        gitaLesson:
          "By bhakti he knows me truly — who and what I am — and having known me truly, he enters Me.",
        gitaRef: "BG 18.55",
        application:
          "The eyes of devotion see what ordinary eyes cannot. When your love is pure and focused, Krishna reveals himself directly to you — not in temples but in your own life, right when you need him.",
        icon: "👁️",
      },
      {
        id: "namdev",
        title: "Namdev — God Ate His Offering",
        source: "Namdev Gatha, Varkari tradition",
        narrative:
          "Namdev was a young tailor devotee of Vitthal. Once he made naivedyam (food offering) for the deity but realized there was no priest to present it. He wept and begged Vitthal to eat it himself. To everyone's astonishment, the deity actually ate the food — the offering disappeared from the plate. Namdev was then guided by the saint Janabai to seek a true guru. He found Gyaneshwar who took him deeper into the path. Namdev's abhangas are recited in all Sikh Gurudwaras to this day.",
        gitaLesson:
          "Whoever offers Me with devotion a leaf, a flower, a fruit, water — that offering of love, I accept.",
        gitaRef: "BG 9.26",
        application:
          "God accepts what you offer when the offering comes from the heart — not from ritual obligation. Even a simple meal cooked with love and offered to God becomes prasad that God receives personally.",
        icon: "🍚",
      },
      {
        id: "janabai",
        title: "Janabai — The Servant Who Became a Saint",
        source: "Janabai Gatha, Varkari tradition",
        narrative:
          "Janabai was a low-caste servant in Namdev's household. Every night after her work was done, she would sing to Vitthal. One night she was grinding grain and Vitthal appeared and ground alongside her, singing with her through the night. Her abhangas capture both her poverty and her fierce joy: 'I am Vitthal's servant — who can touch me?' She stood equal before God with all the great saints, not despite her low status but because of her complete surrender.",
        gitaLesson:
          "In this human body, the wise who worship Me with equal vision see Me in the Brahmin, the dog, the outcaste.",
        gitaRef: "BG 5.18",
        application:
          "Your social status means nothing to God. Your complete surrender means everything. The lowest person with the most love is higher than the highest person with mere ritual.",
        icon: "🏺",
      },
      {
        id: "tyagaraja",
        title: "Tyagaraja — Music as Constant Prayer",
        source: "Tyagaraja Kirtanas, Carnatic classical tradition",
        narrative:
          "Tyagaraja was a Telugu composer in 18th-century Tamil Nadu who composed over 700 compositions in praise of Rama. He refused a king's gift of wealth and elephants in exchange for a composition — because he could not compose for worldly gain. He starved rather than compromise. When he threw his family's Rama idol into the river in anger after a domestic dispute, Rama appeared in his dream and guided him to recover it. His compositions 'Pancharatna Kritis' are considered the highest expression of devotional music in Indian tradition.",
        gitaLesson:
          "By me, in My unmanifested form, this entire universe is pervaded — I exist in all, all do not exist in Me.",
        gitaRef: "BG 9.4",
        application:
          "When you refuse to sell your gift to God for worldly approval or comfort, God himself honors your integrity. Art, music, and creativity offered entirely to God become eternal.",
        icon: "🎼",
      },
      {
        id: "purandaradasa",
        title: "Purandaradasa — Wealth Surrendered for Krishna",
        source: "Purandaradasa Kirtanas, Haridasa tradition",
        narrative:
          "Srinivasa Nayaka was a wealthy moneylender in Karnataka, so miserly he refused to feed even his own relatives. But his wife, a secret devotee, regularly gave to sadhus from the household treasury. When Nayaka discovered this, he confronted her in fury — but what he found in the treasury was so miraculous it shattered his ego entirely. He surrendered his entire wealth immediately, became a wandering devotee named Purandaradasa, and composed 475,000 compositions. He is called the 'Father of Carnatic Music.'",
        gitaLesson:
          "Those who renounce all possessions in Me — worshipping Me with love — I consider them the best of yogis.",
        gitaRef: "BG 12.2",
        application:
          "True generosity breaks through the armor of ego that accumulated wealth builds around the heart. When something breaks that armor — accept it as grace, not loss.",
        icon: "💰",
      },
      {
        id: "raidas",
        title: "Raidas — The Cobbler Saint",
        source: "Raidas Vani, North Indian Bhakti",
        narrative:
          "Raidas was an untouchable cobbler who became one of the most revered saints in Indian history. Meerabai considered him her guru. Brahmin nobles came to him for teachings. Once, some Brahmins tried to prevent him from joining a sacred meal. When they saw a golden image of Vishnu seated beside him at the meal, they fell at his feet. His compositions say: 'The caste system is a lie. One is what one's devotion is.' His couplets are still chanted in Sikh Gurudwaras alongside those of great poets.",
        gitaLesson:
          "The wise see with equal vision a learned Brahmin, a cow, an elephant, a dog, and a dog-eater.",
        gitaRef: "BG 5.18",
        application:
          "God has never accepted the caste system. He sits beside the cobbler, the weaver, the untouchable who calls His name with love. Humility and love break all barriers.",
        icon: "👟",
      },
      {
        id: "bhanudas",
        title: "Bhanudas — Bringing God Back Home",
        source: "Varkari tradition",
        narrative:
          "Bhanudas was a great devotee of Vitthal in Pandharpur when a Muslim king forcibly took the Vitthal deity to his capital. The devotees were heartbroken. Bhanudas traveled to the king's court, sat outside the palace in complete absorption, and sang kirtans day and night without eating or drinking. After three days, Vitthal appeared to the king in a dream and said: 'The saint's love calls me back. I cannot stay here.' The king returned the deity and became Bhanudas's devotee.",
        gitaLesson: "My devotee never perishes, O Arjuna.",
        gitaRef: "BG 9.31",
        application:
          "A true devotee's love is so intense that God cannot stay away from it. When you love God completely, God comes looking for you.",
        icon: "🛕",
      },
    ],
  },
  {
    id: "courage",
    name: "Stories of Courage",
    description: "When dharmic bravery transforms the world",
    color: "oklch(0.52 0.24 28)",
    icon: "⚔️",
    stories: [
      {
        id: "abhimanyu",
        title: "Abhimanyu — The Last Stand of the Young Warrior",
        source: "Mahabharata, Drona Parva",
        narrative:
          "Abhimanyu was 16 years old when he entered the Chakravyuha formation that none but Arjuna could exit. He had heard the method to enter but not to exit — his mother had fallen asleep before that part was told. Inside the formation, six great warriors simultaneously attacked him — against all rules of dharma. He fought them all with superhuman valor and fell, not defeated in spirit, but felled by impossible odds. His death shook the entire Pandava camp and galvanized Arjuna's ultimate fury.",
        gitaLesson:
          "The soul is never born nor does it die. It is not slain when the body is slain.",
        gitaRef: "BG 2.20",
        application:
          "Face your battles with complete commitment even when the odds are impossible. Victory is not the only measure of valor. How you face what is given to you is everything.",
        icon: "⚔️",
      },
      {
        id: "karna-courage",
        title: "Karna — The Dignity of the Denied Hero",
        source: "Mahabharata, Karna Parva",
        narrative:
          "Karna was mocked his entire life for his birth. When he tried to compete with Arjuna at the tournament, Kripa stopped him: 'Only princes can compete. Who is your father? What kingdom do you rule?' Duryodhana instantly gave him the kingdom of Anga. Karna never forgot this. Despite knowing by the end that he would lose, despite Kunti's revelation that he was actually her firstborn, despite Krishna's offer of the Pandava kingdom — Karna refused to abandon Duryodhana. He faced Arjuna knowing he would die, with absolute dignity.",
        gitaLesson:
          "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed.",
        gitaRef: "BG 3.35",
        application:
          "Loyalty, once given, must be honored. Karna's tragedy was the result of circumstances beyond his control — but his response to those circumstances was heroic. How you live your given life is your dharma.",
        icon: "🏹",
      },
      {
        id: "savitri",
        title: "Savitri — Love That Defeated Death Himself",
        source: "Mahabharata, Vana Parva",
        narrative:
          "Savitri knew through an oracle that her husband Satyavan would die in one year. She married him anyway. When Yama came to take Satyavan, Savitri followed. Yama offered her three boons — all except the return of her husband. She asked for eyes for her blind in-laws, restoration of her father-in-law's lost kingdom, and then: 'Grant me many virtuous sons from Satyavan.' Yama granted this — and then realized he had committed to giving her sons from her living husband. He had to release Satyavan. She defeated death by logic born from love.",
        gitaLesson:
          "Courage, the absence of fear... are the divine qualities of one born with divine nature.",
        gitaRef: "BG 16.3",
        application:
          "Courage in the face of certain loss — love that follows even into death — is the highest human attribute. When you love completely, even the impossible finds a way.",
        icon: "💍",
      },
      {
        id: "bhishma",
        title: "Bhishma — The Vow That Could Not Be Broken",
        source: "Mahabharata, Adi Parva",
        narrative:
          "Prince Devavrata fell in love with the fisherman's daughter Satyavati. His father King Shantanu wanted to marry her, but her father demanded that only Satyavati's sons could inherit the throne. Devavrata immediately renounced his right to the throne — and further vowed to never marry so there would be no competing heirs. This vow was so terrible that the gods named him Bhishma — 'The One of the Terrible Vow.' He kept that vow for his entire long life, never wavering despite all temptations and pressures.",
        gitaLesson:
          "He who is unaffected even in great suffering, free from longing for pleasures, free from passion and fear — is called a sage of steady wisdom.",
        gitaRef: "BG 2.56",
        application:
          "A vow kept against all temptation becomes the foundation of unbreakable character. The hardest promises to keep are the ones most worth keeping.",
        icon: "🔱",
      },
      {
        id: "hanuman-lanka",
        title: "Hanuman Burns Lanka — Fearless in Service",
        source: "Valmiki Ramayana, Sundara Kanda",
        narrative:
          "When Hanuman was captured by Ravana's forces after finding Sita, they set fire to his tail to humiliate him. But Hanuman grew his tail so long that the burning could not keep up. Then he broke free, jumped from building to building, and set all of Lanka on fire with his own burning tail. He then plunged into the sea to cool himself and reported back to Rama. His message to Ravana was clear: 'Nothing you do can stop what Lord Rama's devotee is committed to do.'",
        gitaLesson:
          "A person free from ego, whose intelligence is not tainted, though he kills, he does not kill and is not bound.",
        gitaRef: "BG 18.17",
        application:
          "When you act in complete service of God without ego, no force can stop you. Hanuman was not brave because he was strong — he was brave because he forgot himself in service.",
        icon: "🔥",
      },
      {
        id: "arjuna-fear",
        title: "Arjuna Overcomes His Fear — The Gita's Central Teaching",
        source: "Mahabharata, Bhishma Parva",
        narrative:
          "The greatest archer in the world collapsed on his chariot, threw down his bow, and said: 'I cannot fight.' He had a thousand rational reasons — his teachers, relatives, the grief war would cause. This was not cowardice. It was a spiritual crisis of the deepest kind. And Krishna spent 18 chapters answering it. By the end, Arjuna said: 'My delusion is gone. My memory is restored. I will do as you say.' He then fought the greatest battle in history — not from rage but from clarity.",
        gitaLesson:
          "Do not grieve, do not be afraid. I have already slain these warriors. You are only the instrument, O Arjuna.",
        gitaRef: "BG 11.33",
        application:
          "The confusion you feel is not weakness — it may be the beginning of wisdom. Let your doubts drive you deeper into dialogue with God. The answers will come. Then act.",
        icon: "🏹",
      },
      {
        id: "prahlada-fire",
        title: "Prahlada in the Fire — Love That Does Not Burn",
        source: "Srimad Bhagavatam, Canto 7",
        narrative:
          "When poison failed, Hiranyakashipu had Prahlada thrown from a mountain, trampled by elephants, attacked by sorcerers. Each time, Vishnu's presence protected him. Finally, Holika — who had a boon of immunity from fire — sat in a pyre with Prahlada to burn him. But the boon had a condition: it worked only when she used it selfishly, not against dharma. Prahlada's pure faith created an invincible shield. Holika burned. Prahlada walked out unscathed. This became the festival of Holi.",
        gitaLesson:
          "To those who worship Me with devotion, I carry what they lack and preserve what they have.",
        gitaRef: "BG 9.22",
        application:
          "Pure faith in God is the only armor that never breaks. Those who try to harm sincere devotion ultimately destroy only themselves.",
        icon: "🔥",
      },
      {
        id: "bhima-oath",
        title: "Bhima's Oath — Righteous Fury Sustained",
        source: "Mahabharata, Sabha Parva",
        narrative:
          "When Draupadi was humiliated in court and her sari was being pulled, Bhima was restrained from attacking only by Yudhishthira's command. He made a terrible oath: 'I swear to drink Dushasana's blood and break Duryodhana's thigh on a battlefield.' For 13 years of forest exile, for a year of servitude in disguise, Bhima kept this oath in the back of his mind, never letting it extinguish. At Kurukshetra, on the last day of battle, he fulfilled both parts of his oath, exactly as spoken.",
        gitaLesson:
          "Never let go of your righteous duty. The warrior who fights in the field of righteousness has nothing to fear.",
        gitaRef: "BG 3.30",
        application:
          "Righteous indignation — anger at injustice held as a sacred commitment — can be the fuel that sustains you through years of difficulty. Transform your pain into a purpose.",
        icon: "💪",
      },
      {
        id: "nala",
        title: "King Nala — Losing Everything and Finding Dharma",
        source: "Mahabharata, Vana Parva",
        narrative:
          "King Nala was famous for his perfect dharma and skill in chariot driving. But Kali (the demon of the evil age) entered him and caused him to gamble away his entire kingdom and abandon his beloved wife Damayanti in the forest. For years he wandered in poverty, humiliated, eventually serving as a charioteer for another king under a false name. But Damayanti's love found him. When Kali was finally expelled, Nala returned — his suffering had refined him into someone even wiser and more capable than before.",
        gitaLesson:
          "The soul passes through childhood, youth, and old age in this body and then attains another body. The self-realized person is not confused about this.",
        gitaRef: "BG 2.13",
        application:
          "Being stripped of everything you had can be the beginning of discovering who you truly are. Nala's poverty taught him what his palace never could.",
        icon: "🎲",
      },
      {
        id: "bhagirath",
        title: "Bhagirath — A Thousand Years to Redeem Ancestors",
        source: "Valmiki Ramayana, Bala Kanda",
        narrative:
          "Sixty thousand ancestors of King Sagara had been burned to ashes by the sage Kapila's curse. They could not attain moksha without the touch of the Ganga from heaven. Prince Bhagirath did tapasya for a thousand years to bring the Ganga from heaven to earth. Then he did more tapasya for Shiva to hold the Ganga in his matted locks, so the force of her descent would not shatter the earth. Then more penance to release her. The Ganga finally touched the ashes and liberated all sixty thousand souls.",
        gitaLesson:
          "In any venture, if done with wisdom and devotion, it bears fruit according to the purity of the intent.",
        gitaRef: "BG 6.17",
        application:
          "Some missions take a thousand years. If your purpose is to liberate suffering souls — do not count the cost or the time. Persistence of that quality changes the entire landscape of history.",
        icon: "🏔️",
      },
      {
        id: "lakshmana",
        title: "Lakshmana — Fourteen Years of Perfect Service",
        source: "Valmiki Ramayana",
        narrative:
          "When Rama was exiled, his younger brother Lakshmana voluntarily gave up the palace to accompany him. For 14 years in the forest, Lakshmana guarded Rama's sleep while sleeping himself only 14 times in 14 years (once per year). When Ravana crossed the Lakshmana Rekha boundary Lakshmana had drawn, it was because Sita demanded that Lakshmana leave to help Rama — even though Lakshmana knew it was wrong. His service was total, his loyalty without condition, his sacrifice without complaint.",
        gitaLesson:
          "Dedicating all actions to Me, with Me as the goal, seeking Me with unbroken practice — this is the path.",
        gitaRef: "BG 12.6",
        application:
          "Perfect, silent, loyal service — without complaint or recognition — is one of the highest dharmas. Lakshmana never asked for appreciation. He simply served because it was right.",
        icon: "🌿",
      },
      {
        id: "vidura",
        title: "Vidura — Truth Spoken to a King",
        source: "Mahabharata, Udyoga Parva",
        narrative:
          "Vidura was the half-brother of Dhritarashtra and the wisest man at the Hastinapura court. When Dhritarashtra kept asking for counsel on how to help Duryodhana in his schemes, Vidura repeatedly told the truth: 'Your son is on the path of adharma. This path leads to destruction. Stop him now.' Dhritarashtra, blinded by parental love, ignored all counsel. Vidura ultimately walked away from the court, choosing dharma over duty to the king. He joined the Pandavas in their exile and returned only when dharma was restored.",
        gitaLesson:
          "Truth alone is the highest dharma. Truth is the highest form of austerity.",
        gitaRef: "BG 17.15",
        application:
          "When you see adharma happening around you, speak truth even when no one wants to hear it. Keep speaking it. Then, if you are still ignored, walk away. You are responsible only for the truth you speak, not for whether it is heard.",
        icon: "⚖️",
      },
    ],
  },
  {
    id: "forgiveness",
    name: "Stories of Forgiveness",
    description: "How letting go liberates the forgiver more than the forgiven",
    color: "oklch(0.55 0.22 148)",
    icon: "🕊️",
    stories: [
      {
        id: "yudhishthira-forgive",
        title: "Yudhishthira Forgives at the Gates of Heaven",
        source: "Mahabharata, Swargarohanika Parva",
        narrative:
          "After the great Kurukshetra war, the Pandavas made their final journey. At the gates of heaven, Yudhishthira found Duryodhana seated in glory. He was told that Duryodhana had earned heaven through his warrior's death. When asked if he would share heaven with his greatest enemy, Yudhishthira sat down without complaint. The gods tested his equanimity — he had passed. He was shown his brothers briefly in hellish conditions — another test. Yudhishthira refused to leave them. Finally all was revealed as divine illusion, and he entered eternal peace.",
        gitaLesson:
          "Fearlessness, purity, steadfastness in yoga, charity, self-control, sacrifice, study — these are the divine qualities.",
        gitaRef: "BG 16.1",
        application:
          "Forgiveness of enemies — especially after injustice — is the test of the highest character. When you can sit beside one who wronged you without hatred, you have transcended karma.",
        icon: "⚖️",
      },
      {
        id: "rama-vibhishana-pardon",
        title: "Rama Accepts His Enemy's Brother",
        source: "Valmiki Ramayana, Yuddha Kanda",
        narrative:
          "When Vibhishana fled Ravana and came to Rama, all of Rama's advisors warned against trust. Angad, Sugriva, all were cautious. But Rama said: 'I take a vow — I will never turn away anyone who comes to Me for shelter, even if they are my enemy. This is My dharma.' He accepted Vibhishana completely, made him King of Lanka even before the war was fought, and trusted him with information that helped win the battle. His trust was not naive — it was a dharmic principle he upheld at personal risk.",
        gitaLesson:
          "Abandoning all dharmas, take refuge in Me alone. I will liberate you from all sins.",
        gitaRef: "BG 18.66",
        application:
          "True forgiveness and acceptance require risk. But when your principle is divine — when you accept because God would accept — you create a magnet for transformation in the other person.",
        icon: "🛕",
      },
      {
        id: "krishna-shishupala",
        title: "Krishna Forgives 100 Times — Then Acts",
        source: "Mahabharata, Sabha Parva",
        narrative:
          "Shishupala was a king who hated Krishna from birth — because Krishna was destined to be his death. At the Rajasuya Yagna, Shishupala publicly insulted Krishna 100 times with the worst abuse imaginable. Krishna listened with perfect equanimity. When the 100th insult was spoken, Krishna released His Sudarshana Chakra. Shishupala was killed — and his soul merged with Krishna. Even his death was an act of grace: Krishna had promised his aunt to forgive 100 of her son's offenses. He kept that promise exactly.",
        gitaLesson:
          "I am equal to all beings. None is hateful or dear to Me. But those who worship Me with devotion — they are in Me and I in them.",
        gitaRef: "BG 9.29",
        application:
          "Forgive completely — up to the limit of what is possible. But at some point, justice must be served. Forgiveness does not mean tolerance of endless harm. 100 times, then act.",
        icon: "💫",
      },
      {
        id: "gandhari-forgive",
        title: "Gandhari's Curse and Krishna's Acceptance",
        source: "Mahabharata, Stri Parva",
        narrative:
          "After the war, Gandhari walked the battlefield where all 100 of her sons lay dead. When she met Krishna, she blamed him: 'You could have stopped this war. You are capable of everything but you chose not to intervene.' She cursed him that as his Kauravas had been destroyed, so would his Yadavas be destroyed and he himself would die alone in a forest. Krishna bowed his head and accepted the curse with grace, saying: 'What you say is true. I accept your curse willingly.' He knew her grief was the real thing requiring respect, not defense.",
        gitaLesson:
          "He who is equanimous in pleasure and pain, who is the same to friend and foe — this person is very dear to Me.",
        gitaRef: "BG 12.18",
        application:
          "Sometimes the greatest act of forgiveness is to accept another's curse or accusation without defense — because their pain is real and needs to be witnessed. Receiving grief with grace is itself healing.",
        icon: "🌿",
      },
      {
        id: "durvasa",
        title: "Durvasa's Rage and Krishna's Milk",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "The furious sage Durvasa once came to Krishna's court demanding to be fed instantly in impossible circumstances. He flew into a rage at a perceived insult and unleashed his fiery weapon. Krishna, amused, asked Durvasa to smear leftover food from his own plate on his entire body to stop the weapon. Durvasa — the man who cursed Shakuntala, Indra, and countless others — swallowed his pride and did it. The weapon was stopped. Krishna showed Durvasa through this that ego, even in a great sage, was the real enemy.",
        gitaLesson:
          "From anger comes delusion; from delusion, confused memory; from confused memory, loss of reason; from loss of reason, total destruction.",
        gitaRef: "BG 2.63",
        application:
          "Anger, even in the most spiritually accomplished person, creates destruction. The antidote is the willingness to act with humility — even if it means literally smearing yourself with someone else's leftovers to save yourself.",
        icon: "🔥",
      },
      {
        id: "parikshit",
        title: "Parikshit's Forgiveness Before Death",
        source: "Srimad Bhagavatam, Canto 1",
        narrative:
          "King Parikshit accidentally committed an offense against a sage while hunting. The sage's son cursed him to die of a snakebite in seven days. Parikshit could have fought the curse. Instead, he sat on the banks of the Ganga, gave up his kingdom and all possessions, and asked Shuka to speak on the highest truth. For seven days, Shuka narrated the Srimad Bhagavatam to him. When the snake Takshaka came on the seventh day, Parikshit was so absorbed in God-consciousness that death was simply a doorway.",
        gitaLesson:
          "Even if you are the most sinful of all sinners, you shall cross over all sin by the boat of knowledge.",
        gitaRef: "BG 4.36",
        application:
          "When you know death is coming, how do you spend the time? Parikshit's response — not revenge, not denial, but complete absorption in truth — is the model of a life well ended.",
        icon: "🐍",
      },
      {
        id: "indra-forgives-vritra",
        title: "Indra Defeats Vritra After Asking Forgiveness",
        source: "Srimad Bhagavatam, Canto 6",
        narrative:
          "Indra had killed Vishwarupa, a divine teacher, which earned him the sin of Brahminicide. To atone, Vishnu instructed Indra to distribute the sin equally among earth, water, trees, and women — each of whom accepted a portion and received blessings in return. Only after this complete atonement could Indra face the demon Vritra, who was actually a great devotee wrongly incarnated as a demon. Vritra himself asked to be killed by Indra — as it would liberate him. The story shows that both sin and redemption require completing the karmic cycle.",
        gitaLesson:
          "As a blazing fire reduces wood to ashes, the fire of knowledge burns all karma to ashes.",
        gitaRef: "BG 4.37",
        application:
          "When you sin, complete the process of atonement fully — don't partial-atone and move on. Distribute the weight of your mistakes to all who were harmed. Only then can you move forward cleanly.",
        icon: "🌩️",
      },
      {
        id: "ashwatthama-forgiven",
        title: "Ashwatthama — When Forgiveness Is Denied and Why",
        source: "Mahabharata, Sauptika Parva",
        narrative:
          "After Ashwatthama committed the night massacre — killing sleeping warriors and releasing Brahmastra at the Pandava women's wombs — he was captured. Draupadi said: 'Do not kill him. He is our teacher's son. Let him go.' But she also demanded the gem from his forehead as penance. Arjuna obeyed and removed the gem, leaving Ashwatthama permanently disfigured and cursed to wander for thousands of years bearing his wound. Forgiveness was given — but consequences were not removed. The gem was gone. The punishment remained.",
        gitaLesson:
          "The intricacies of karma are very hard to understand. Know properly what action is, what forbidden action is, and what inaction is.",
        gitaRef: "BG 4.17",
        application:
          "True forgiveness does not always mean removing consequences. It means releasing hatred while still ensuring accountability. Draupadi forgave but demanded justice. Both are right.",
        icon: "💎",
      },
      {
        id: "yudhishthira-dice",
        title: "Yudhishthira Forgives Shakuni — Then Defeats Him",
        source: "Mahabharata",
        narrative:
          "In the final battle at Kurukshetra, Yudhishthira killed Shalya (the Madra king who had been lured into supporting the Kauravas). Sahadeva killed Shakuni, the architect of all their misfortune — the dice-player who had rigged the game that lost them everything. But throughout the 14 years of exile, Yudhishthira had harbored no hatred for Shakuni, only grief at the adharma. When the moment came, he acted from dharma, not rage. His forgiveness was real, but it did not prevent justice from being served.",
        gitaLesson:
          "Let your actions be for My sake. Dedicate all actions to Me. This is how one crosses over all difficulties.",
        gitaRef: "BG 12.6",
        application:
          "Forgiveness lived out over years of hardship — without hatred, without revenge plans, without bitterness — creates the kind of purity from which true justice can finally flow.",
        icon: "🎲",
      },
      {
        id: "nahusha-forgiven",
        title: "Nahusha's Long Punishment — Forgiveness Through Time",
        source: "Mahabharata, Vana Parva",
        narrative:
          "The king who had humiliated sages and been cursed to become a python waited for thousands of years in his snake form. When Bhima was caught by a great serpent and asked who he was, the serpent revealed himself as King Nahusha. He asked Yudhishthira questions about dharma. When Yudhishthira answered them rightly, the curse was lifted — Nahusha ascended in a divine form. The punishment was exactly as long as was needed for the lesson to be learned, then compassionately ended.",
        gitaLesson:
          "He who has no hatred for any being, who is friendly and compassionate — is dear to Me.",
        gitaRef: "BG 12.13",
        application:
          "Karma takes the time it takes. When the lesson is genuinely learned and humility is genuine — relief comes. Don't fight the process. Learn it.",
        icon: "🐍",
      },
      {
        id: "rukmini-forgives-krishna",
        title: "Rukmini's Perfect Trust",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Once Krishna playfully teased Rukmini, suggesting she had made a mistake in choosing him over the handsome Shishupala. Rukmini's face fell and she nearly fainted. Krishna took her in his arms and revealed the teasing. She said simply: 'Even if all you say were true — even if you were imperfect — my love is already given. I could not take it back.' This absolute trust — forgiveness in advance — is what Krishna called the peak of love. Not love that demands perfection, but love that gives itself completely.",
        gitaLesson:
          "Those who fix their minds on Me with devotion — I regard them as the most perfect yogis.",
        gitaRef: "BG 12.2",
        application:
          "The highest love trusts without conditions. It does not require God to be what you expect Him to be. It gives itself completely and leaves the outcome to God.",
        icon: "💕",
      },
      {
        id: "nriga-freed",
        title: "King Nriga — Released by a Touch of Krishna",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "King Nriga had been the most generous king who ever lived — he gave away millions of cows in charity. But once, through oversight, a cow he had already given to a Brahmin was accidentally given to another Brahmin. He was cursed to become a chameleon for ages. Thousands of years later, Krishna's grandsons were playing near a dry well and found an enormous chameleon. When Krishna touched it, the chameleon transformed back into King Nriga, who had been waiting for exactly this touch of liberation. One error — however unintentional — kept him bound until the grace of God's touch freed him.",
        gitaLesson:
          "Even if you are the most sinful of all sinners, the boat of knowledge will carry you across all sin.",
        gitaRef: "BG 4.36",
        application:
          "Unintentional errors still create karma. The solution is not self-flagellation — it is seeking the grace of God's touch. God's presence dissolves what years of penance cannot.",
        icon: "🦎",
      },
    ],
  },
  {
    id: "love-sacrifice",
    name: "Stories of Love and Sacrifice",
    description: "When love transcends self and transforms the world",
    color: "oklch(0.65 0.28 340)",
    icon: "💕",
    stories: [
      {
        id: "savitri-yama",
        title: "Savitri Defeats Yama with Love",
        source: "Mahabharata, Vana Parva",
        narrative:
          "Savitri chose Satyavan knowing he would die in a year. When Yama came for him, she followed the god of death for three days, speaking profound dharma. She asked three boons — all except Satyavan's life. Finally she requested sons from Satyavan, not 'from anyone else.' Yama granted it without realizing the implication — he had to release Satyavan for this boon to be fulfilled. He returned Satyavan and said: 'You have defeated me not with weapons but with love and wisdom. I have never met such a woman.'",
        gitaLesson:
          "He is not born and does not die. He is ancient. He is not slain when the body is slain.",
        gitaRef: "BG 2.20",
        application:
          "The deepest love refuses to accept loss as final. It finds a way through wisdom and persistence when direct confrontation fails. Bring your heart and your intelligence together — and even death can be defeated.",
        icon: "🌹",
      },
      {
        id: "sita-purity",
        title: "Sita's Ordeal — Purity in the Face of Doubt",
        source: "Valmiki Ramayana, Uttara Kanda",
        narrative:
          "After being rescued from Lanka, Sita was asked to prove her purity before the court. She walked into fire — and Agni (fire deity) himself rose from the pyre carrying her, declaring her purity. Years later, even after this divine testimony, a washerman's gossip caused Rama to exile Sita a second time — while she was pregnant. She raised her twins alone in Valmiki's ashram. When called back to Ayodhya for a final proof, she called Mother Earth to receive her if she had been faithful — and the earth opened.",
        gitaLesson:
          "Even a little practice of this dharma saves one from great fear.",
        gitaRef: "BG 2.40",
        application:
          "When you have lived with absolute integrity, you can stand in any fire without fear. Your inner purity is your only real protection — and it is absolute.",
        icon: "🔥",
      },
      {
        id: "radha-krishna-love",
        title: "Radha's Love — The Mirror of God's Love for the Soul",
        source: "Srimad Bhagavatam, Brahma Vaivarta Purana",
        narrative:
          "Radha's love for Krishna was so total that she forgot herself entirely. When separated from Krishna after he left Vrindavan for Mathura, her longing became itself a form of yoga. The Gopis who loved Krishna most were said to have attained moksha — not through scripture but through love. When Krishna returned much later, old, after all his wars, Radha received him with the same love as the first meeting. Her love was absolute, unconditional, non-possessive — a perfect mirror of how the Divine loves every soul.",
        gitaLesson:
          "Think of Me always. Be devoted to Me. Worship Me. Bow to Me. You shall reach Me alone.",
        gitaRef: "BG 18.65",
        application:
          "The soul's relationship to God is Radha's relationship to Krishna. Total love that does not diminish with separation, does not calcify into possession, and finds God in every breath — this is the path.",
        icon: "🌺",
      },
      {
        id: "kunti-prayers",
        title: "Kunti's Prayer — Asking for More Difficulties",
        source: "Srimad Bhagavatam, Canto 1",
        narrative:
          "After the Kurukshetra war ended, when Yudhishthira asked everyone what they desired, the widowed, childless Kunti said: 'I want difficulties — because in difficulties I remember Krishna. In prosperity I forget Him. Give me more obstacles so Krishna stays present with me always.' This prayer — asking for hardship to maintain closeness with God — is considered one of the most spiritually advanced prayers in all of sacred literature.",
        gitaLesson:
          "He who is equanimous in pleasure and pain, who is the same in honor and dishonor — is dear to Me.",
        gitaRef: "BG 12.18",
        application:
          "When you stop fighting difficulties and start seeing them as Krishna's way of staying close to you, your entire relationship with suffering transforms. Difficulties are not punishment — they are invitations.",
        icon: "🙏",
      },
      {
        id: "devaki",
        title: "Devaki's Sacrifice — Giving Away God Himself",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Devaki gave birth to Krishna in a prison cell. She had watched six of her children be killed by her own brother Kansa. When Krishna was born — and she held the divine child glowing with cosmic light — she was told He must be taken away immediately to Nanda's house to be safe. She gave her divine son away at the moment of his birth — to be raised by another woman, to protect him from her own family. She did not see him again for many years. Her love meant giving him up.",
        gitaLesson:
          "Those who perform actions, dedicating all to Me, without seeking results — these are dear to Me.",
        gitaRef: "BG 12.10",
        application:
          "The deepest love sometimes requires releasing what you love most. Clinging — even to God's gift — can endanger it. Trust God enough to give back what God gave you.",
        icon: "🕊️",
      },
      {
        id: "gandhari-blindfold",
        title: "Gandhari's Blindfold — Love Through Self-Limitation",
        source: "Mahabharata, Adi Parva",
        narrative:
          "When Gandhari learned she was to marry the blind king Dhritarashtra, she voluntarily blindfolded herself for the rest of her life — so she would never see something her husband could not. This decision caused her enormous suffering when she could have used her power of sight many times. Her love was not romantic sentiment but a physical, daily, total sacrifice. The Puranas say her penance through blindness gave her such spiritual power that her single glance could make any part of a person's body invincible.",
        gitaLesson:
          "Endurance, self-restraint, purity, loyalty — these are the duties that lead to what is eternal.",
        gitaRef: "BG 16.3",
        application:
          "Love that takes on limitation out of solidarity with the beloved is the most powerful form of love. Gandhari's blindfold was an act of such completeness that it generated yogic power beyond ordinary understanding.",
        icon: "🎀",
      },
      {
        id: "subhadra-arjuna",
        title: "Subhadra and Arjuna — Love That Honors Dharma",
        source: "Mahabharata, Adi Parva",
        narrative:
          "Arjuna fell in love with Subhadra, Krishna's sister. But her brother Balarama had promised her to Duryodhana. Rather than waiting for social permission, Krishna suggested Arjuna elope with Subhadra — 'The Kshatriya way is to win the one you love by valor, not by waiting for approval.' Subhadra participated willingly, taking the reins of the chariot herself. When Balarama was furious, Krishna mediated. The marriage was accepted. Love that moves decisively — with both parties' full consent — honoring the essence of dharma if not its letter.",
        gitaLesson:
          "The brave person considers courage as heaven and cowardice as hell.",
        gitaRef: "BG 2.32",
        application:
          "When you know something is right, act decisively and trust those who support you to mediate the consequences. Waiting passively for permission often means the moment passes.",
        icon: "🏹",
      },
      {
        id: "gargi-yajnavalkya",
        title: "Gargi's Debate — Love of Truth Over Social Pressure",
        source: "Brihadaranyaka Upanishad",
        narrative:
          "At the great debate convened by King Janaka, the sage Yajnavalkya challenged all philosophers. Gargi Vachaknavi — the only woman in the assembly — engaged him in a profound public debate about the ultimate nature of reality. When Yajnavalkya told her to stop questioning or 'her head would fall off,' she paused, regrouped, and asked the most penetrating question ever posed in the Upanishads: 'What is the ground of the ground?' Yajnavalkya was compelled to honor it fully.",
        gitaLesson:
          "For the one established in knowledge, equanimous in success and failure — actions do not bind.",
        gitaRef: "BG 4.22",
        application:
          "Love of truth requires courage to face powerful people and ask the deepest questions. When someone tries to silence you through intimidation, pause — then return with an even sharper question.",
        icon: "🌸",
      },
      {
        id: "damayanti-nala",
        title: "Damayanti Chooses the Human Over Gods",
        source: "Mahabharata, Vana Parva",
        narrative:
          "At Damayanti's swayamvara, all four gods appeared in the form of King Nala to confuse her. Damayanti prayed for the ability to distinguish. She saw that the four gods did not blink, did not sweat, and their flower garlands never wilted — while the real Nala did all of these human things. She chose the real, imperfect, sweating, blinking human king — because his imperfection meant he could truly be with her, truly need her, and truly be known by her. Love chose humanity over divinity.",
        gitaLesson: "The Lord dwells in the heart of every being, O Arjuna.",
        gitaRef: "BG 18.61",
        application:
          "True love seeks authentic human presence — someone who sweats and blinks and needs you — over abstract perfection. God is already in the imperfect person. You are already in his temple.",
        icon: "💍",
      },
      {
        id: "uttara-abhimanyu",
        title: "Uttara's Grief and Parikshit's Miracle",
        source: "Mahabharata, Ashramavasika Parva",
        narrative:
          "Uttara was pregnant with Abhimanyu's child when Ashwatthama's Brahmastra struck her womb. The child in her womb was killed. When the child was born dead, Kunti wept: 'Krishna, this is the last of the Pandava line. You must restore it.' Krishna entered the womb with his divine effulgence and restored life to the dead embryo. The child was born alive and named Parikshit — 'he who was examined' — the last king of the Kuru dynasty, for whom the Srimad Bhagavatam was spoken.",
        gitaLesson: "My devotee never perishes, O son of Kunti.",
        gitaRef: "BG 9.31",
        application:
          "Sometimes the intervention of God is so complete that even death is reversed for the sake of His devotees. Nothing that is truly important to God's plan can ultimately be destroyed.",
        icon: "👶",
      },
      {
        id: "sita-valmiki",
        title: "Sita in the Forest — Dignity Without Bitterness",
        source: "Valmiki Ramayana, Uttara Kanda",
        narrative:
          "After her second exile, alone and pregnant, Sita could have raged. Could have cursed Rama, despaired, given up. Instead she lived in Valmiki's ashram with complete dignity, raised twin sons who were mirrors of their father, and ensured they learned the Ramayana. When they sang it in Rama's court without knowing who their father was, their voices were so like Rama's that the court wept. Sita never revealed bitterness — only love — until the moment she asked Mother Earth to receive her back.",
        gitaLesson:
          "Though dwelling in a body, the one who is equanimous in pleasure and pain, heat and cold, honor and dishonor — is dear to Me.",
        gitaRef: "BG 12.18",
        application:
          "How you carry yourself in exile, in abandonment, in injustice — that is your true character. Sita's dignity in loss is more instructive than her joy in Ayodhya.",
        icon: "🌿",
      },
    ],
  },
  {
    id: "divine-grace",
    name: "Stories of Divine Grace",
    description: "When God's mercy exceeds all human understanding",
    color: "oklch(0.62 0.28 268)",
    icon: "✨",
    stories: [
      {
        id: "gajendra-full",
        title: "Gajendra Moksha — The Full Story",
        source: "Srimad Bhagavatam, Canto 8",
        narrative:
          "Gajendra, the elephant king, had been a human king in a previous life who had devotedly worshipped Vishnu. He was cursed to be born as an elephant. For a thousand years as a magnificent elephant king, a crocodile held his leg in a lake. His wives, his herd — all eventually gave up and left. Alone, exhausted, dying, he raised his trunk with a lotus and called to the One he had worshipped before. In his prayer he said: 'I do not know who you are or what form you take — I call only to the ultimate cause.' Vishnu came faster than thought.",
        gitaLesson:
          "I am easily attainable by the ever-steadfast yogi who remembers Me daily.",
        gitaRef: "BG 8.14",
        application:
          "Even when you do not know the right words, even when you cannot name God correctly — a sincere cry from the depth of exhaustion reaches God immediately. He recognizes his devotee's voice beyond words.",
        icon: "🐘",
      },
      {
        id: "sudama-grace",
        title: "Sudama at Krishna's Palace",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Sudama arrived at Krishna's palace embarrassed, wearing torn clothes, carrying just a handful of broken rice wrapped in a dirty cloth. He was too ashamed to present the gift. But Krishna took the cloth from his hands himself, eating the rice with delight, saying: 'This gives me more pleasure than any royal feast.' Each handful Rukmini stopped him from eating — 'you will give him too much.' Sudama left the palace only with love, asking for nothing. When he arrived home, he found a divine palace instead of his hut, and a transformed life.",
        gitaLesson:
          "Whoever offers me a leaf, flower, fruit, or water with love — that loving offering I accept.",
        gitaRef: "BG 9.26",
        application:
          "What we offer God does not matter in quantity or quality. The love with which it is offered is everything. Do not be ashamed of what little you can bring. God receives it with delight.",
        icon: "🌾",
      },
      {
        id: "draupadi-sari-full",
        title: "Draupadi's Miracle Sari",
        source: "Mahabharata, Sabha Parva",
        narrative:
          "The detail that is often missed: when Draupadi first grabbed her sari with both hands to prevent it being pulled — the cloth was ending. At some point — no one saw exactly when — she let go. She raised both hands and simply called 'Krishna' with her whole being. From that moment, the cloth became infinite. The shift from holding tight to releasing completely was the hinge point of the miracle. Dushasana pulled for an hour and fell exhausted. The hall sat in stunned silence. The cloth just kept coming.",
        gitaLesson:
          "Abandon all dharmas and take refuge in Me alone. I will free you from all sins. Do not grieve.",
        gitaRef: "BG 18.66",
        application:
          "There is always a moment when our grip on the problem must be released entirely. That complete release — calling God with both hands raised — is not defeat. It is the condition for miracle.",
        icon: "🧵",
      },
      {
        id: "hanuman-ram-nam",
        title: "Hanuman's Heart — Ram's Name Written Inside",
        source: "Ram Charitmanas, popular Bhakti tradition",
        narrative:
          "When Vibhishana's coronation celebration included a pearl necklace for Hanuman, Hanuman bit each pearl and threw it away saying they had no value since 'Ram' was not written in them. When challenged — 'Is Ram written in you?' — Hanuman tore open his chest with his own fingers. Inside his chest was Ram and Sita, inscribed in his very flesh, his heart blazing with their image. Witnessing this, even Sita and Ram wept. Hanuman said: 'I do not carry them in my chest — I am built of their names.'",
        gitaLesson:
          "Fill your mind with Me. Be devoted to Me. Worship Me. Bow to Me. You shall come to Me.",
        gitaRef: "BG 18.65",
        application:
          "When God's name is truly absorbed — not memorized but actually embedded in your identity — every breath becomes a prayer and every crisis becomes a calling for His presence.",
        icon: "❤️",
      },
      {
        id: "pandavas-exile-end",
        title: "The Pandavas' Forest — 13 Years of Grace in Hardship",
        source: "Mahabharata, Vana Parva",
        narrative:
          "During the 12 years of forest exile, the Pandavas received unexpected blessings: Arjuna received divine weapons directly from the gods. Bhima encountered his half-brother Hanuman, who blessed him. Yudhishthira received profound dharma wisdom from the Yaksha at the lake. Draupadi received the divine Akshaya Patra from which food flowed endlessly. What appeared to be punishment was actually intensive spiritual training — each difficulty yielding a specific gift that would be needed in the final battle.",
        gitaLesson:
          "No effort on this path is lost, no obstacle exists. Even a little practice of this dharma saves one from great fear.",
        gitaRef: "BG 2.40",
        application:
          "The difficulties that feel most like exile are often the periods of most intensive spiritual preparation. Look for the gifts hidden inside your hardships.",
        icon: "🌿",
      },
      {
        id: "krishna-arjuna-virat",
        title: "Krishna's Universal Form — Grace Beyond Comprehension",
        source: "Mahabharata, Bhishma Parva",
        narrative:
          "When Arjuna asked to see Krishna's true form, what he saw was overwhelming beyond any ability to bear: countless suns, the entire universe inside one divine body, all time flowing in one direction. Gods, seers, demons — all were flowing into the cosmic mouth like rivers into the sea. Arjuna begged Krishna to stop. Krishna withdrew the universal form and stood again as his friend. He said: 'This form you've seen can only be seen through bhakti — not through study, austerity, or ritual.' Grace alone grants this vision.",
        gitaLesson:
          "By devotion alone am I known, O Arjuna — who I am in truth. By devotion he knows Me, and enters into Me.",
        gitaRef: "BG 11.54",
        application:
          "The fullness of God cannot be comprehended — only received. When a glimpse of the infinite comes, you cannot hold it with your mind. You can only bow and be grateful it came at all.",
        icon: "🌌",
      },
      {
        id: "narada-vishnumaya",
        title: "Narada and the Illusion of Maya",
        source: "Srimad Bhagavatam",
        narrative:
          "Narada once asked Vishnu: 'Show me the power of your Maya.' Vishnu said: 'Come, let's walk. I am thirsty.' In a village, Vishnu asked Narada to get water. Narada knocked at a house. A beautiful girl answered. Years passed — Narada married, had children, prospered. Then a great flood came and swept away everything. He cried for his wife and children. Suddenly Vishnu stood beside him: 'You've been gone 30 minutes. Where is my water?' Maya is how completely we can forget God through just one ordinary distraction.",
        gitaLesson:
          "This divine Maya of Mine, consisting of the three gunas, is very difficult to overcome. But those who take refuge in Me alone cross over this Maya.",
        gitaRef: "BG 7.14",
        application:
          "The world can make you forget God as completely as Narada did — in what feels like a lifetime but is 30 minutes in God's time. The practice is simply returning to God each time you wake up from the dream.",
        icon: "💭",
      },
      {
        id: "bhagiratha-ganga",
        title: "Ganga Descends Through Shiva's Hair",
        source: "Valmiki Ramayana, Bala Kanda",
        narrative:
          "When Bhagirath's penance brought the Ganga down from heaven, the force of her descent would have shattered the earth. Bhagirath then meditated to Shiva to catch the river in his matted locks. Shiva absorbed the entire celestial river in his hair without a single drop reaching earth. Then he gradually released a gentle stream. This shows that even when divine grace is ready to pour down completely, it must be moderated — received in stages through a qualified medium — so it doesn't destroy what it comes to save.",
        gitaLesson:
          "I give the yoga of discernment to those who are ever devout and worship Me with love, by which they come to Me.",
        gitaRef: "BG 10.10",
        application:
          "Divine grace is real and can flow in full force. But we need to develop the capacity to receive it. Practice is building that capacity — expanding the container — so grace can pour in without overwhelming you.",
        icon: "🌊",
      },
      {
        id: "krishna-akrura",
        title: "Krishna's Farewell — Every Touch Is Sacred",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "When Akrura came to take Krishna from Vrindavan to Mathura, the Gopis wept and begged Krishna to stay. Krishna consoled them saying they would always be with him — 'I dwell in the heart of everyone. I have never left and will never leave.' When Akrura stopped to bathe in the Yamuna, he looked down into the water and saw Krishna's cosmic form. He came up and saw Krishna sitting normally on the chariot. He plunged in again. Again the cosmic vision. This happened three times. Even in the ordinary world, the extraordinary is everywhere.",
        gitaLesson:
          "I am the same to all beings. None is hateful or dear to Me. But those who worship Me with devotion — they are in Me and I in them.",
        gitaRef: "BG 9.29",
        application:
          "The divine is everywhere — in the water you bathe in, in the face of your companion, in the ordinary act of travel. Open your eyes of devotion and you will see Krishna in your chariot.",
        icon: "🪈",
      },
      {
        id: "dhruva-vishnu-darshan",
        title: "Dhruva Sees Vishnu — The Pole Star's Silence",
        source: "Srimad Bhagavatam, Canto 4",
        narrative:
          "When Vishnu finally appeared to the six-year-old Dhruva after his long meditation, Dhruva was speechless — his tongue would not move to speak a prayer or ask a boon. Vishnu touched his conch to Dhruva's cheek and gave him the ability to speak. Dhruva's first words were a flood of divine poetry describing Vishnu's glory — words that sprang from beyond his ordinary mind. He then said: 'I came seeking a kingdom, and I found You. What need do I have of a kingdom now?' Vishnu gave him the eternal Pole Star anyway.",
        gitaLesson:
          "By devotion he knows Me — what and who I truly am — and having known Me truly, he enters Me.",
        gitaRef: "BG 18.55",
        application:
          "When you genuinely encounter God, what you originally wanted seems trivial. The encounter itself is the boon beyond all boons. Then God gives you the original thing anyway — because you no longer need it, He can give it freely.",
        icon: "⭐",
      },
      {
        id: "kubera-shiva",
        title: "Kubera's Humiliation and Shiva's Teaching",
        source: "Shiva Purana",
        narrative:
          "Kubera, the god of wealth, was so proud of his riches that he invited Shiva and Parvati for a feast. They could not come and sent Ganesha instead. The child Ganesha ate everything — every dish, every decoration, every piece of furniture — and was still hungry. Kubera in terror tried to appease him with more food from his treasury. Ganesha was beginning to eat Kubera himself when Shiva appeared. 'Give him a handful of rice cooked in love,' Shiva said. The rice immediately satisfied Ganesha. The simplest offering given with love is greater than all wealth given with ego.",
        gitaLesson:
          "Whatever you do, whatever you offer, whatever you give — offer it to Me.",
        gitaRef: "BG 9.27",
        application:
          "Wealth can never buy what love can give. The most elaborate feast offered from ego goes unappreciated, while a handful of rice offered from the heart satisfies God completely.",
        icon: "🍚",
      },
    ],
  },
  {
    id: "wisdom",
    name: "Stories of Wisdom",
    description: "When knowledge becomes the fire that burns all darkness",
    color: "oklch(0.68 0.26 52)",
    icon: "📖",
    stories: [
      {
        id: "nachiketa-yama",
        title: "Nachiketa and the Secret of Death",
        source: "Katha Upanishad",
        narrative:
          "Young Nachiketa was sent to Yama's house by his angry father. Yama was absent for three days, and when he returned, he offered three boons as compensation. Nachiketa's third wish was: 'Tell me the secret of what happens after death.' Yama tried to dissuade him with wealth, kingdoms, beautiful women, anything. Nachiketa refused all of it. 'These things perish. Tell me the imperishable truth.' Yama, moved by this extraordinary discrimination, taught Nachiketa the deepest teaching of the Upanishads — the eternal, indestructible nature of the Self.",
        gitaLesson:
          "The soul is never born nor does it die. It is not slain when the body is slain.",
        gitaRef: "BG 2.20",
        application:
          "True wisdom means knowing what to ask for. Not wealth, not pleasure, not reputation — but the truth that cannot be taken away. Ask for the imperishable. Be Nachiketa.",
        icon: "💀",
      },
      {
        id: "ashtavakra",
        title: "Ashtavakra — Deformed Body, Luminous Self",
        source: "Ashtavakra Gita",
        narrative:
          "Ashtavakra was born deformed — eight joints bent in eight places — because his father had corrected him while he was still in the womb, when he laughed at his father's mispronunciation of the Vedas. When he came to King Janaka's court, the assembled Brahmins laughed at his appearance. He laughed back: 'I see only a gathering of cobblers! You discuss the skin — the body — and ignore the soul within.' Janaka was struck. He had Ashtavakra sit in honor and received from him the most radical teaching of pure non-duality in all of Vedanta.",
        gitaLesson: "The wise do not grieve for the living or the dead.",
        gitaRef: "BG 2.11",
        application:
          "The body is irrelevant to the quality of wisdom. The most deformed vessel can carry the brightest light. Never judge a teacher by appearance, background, age, or social standing.",
        icon: "📜",
      },
      {
        id: "dattatreya-gurus",
        title: "Dattatreya's 24 Gurus",
        source: "Srimad Bhagavatam, Canto 11",
        narrative:
          "Dattatreya was a great avadhoota (one who has completely renounced) who traveled with no possessions. When asked who his teacher was, he said he had 24 teachers: the earth (teaches patience), the water (teaches purity), the fire (consumes everything equally), the wind (stays unattached while touching everything), the sky (is not stained by clouds), the moon (appears to wax and wane but doesn't), the sun (reflects in many waters but stays one), the spider (creates and destroys its own web), the arrow-maker (teaches focus), the python (receives what comes)... and so on.",
        gitaLesson:
          "The wise see with equal vision a Brahmin, a cow, an elephant, a dog, and an outcaste.",
        gitaRef: "BG 5.18",
        application:
          "Everything teaches the wise person. The problem is not lack of teachers — it is the habit of deciding in advance who qualifies as a teacher. Open your eyes and everything is your guru.",
        icon: "🌿",
      },
      {
        id: "janaka-wisdom",
        title: "King Janaka — Kingdom in the Dream",
        source: "Yoga Vasishtha",
        narrative:
          "King Janaka once fell asleep in court and dreamed he was a beggar starving in a forest. When he woke in the dream and was a king again, he was haunted: 'Am I a king who dreams of being a beggar, or a beggar who dreams of being a king?' He fell into deep meditation over this question. When he presented it to Vasishtha, the sage said: 'Neither is permanent. Both are states of consciousness. Find the witness who perceives both states — that witness is what you truly are.' Janaka attained liberation through this inquiry.",
        gitaLesson:
          "The one who sees action in inaction and inaction in action — among humans, that person is wise.",
        gitaRef: "BG 4.18",
        application:
          "The question 'Who am I really?' — if asked with genuine urgency and not just philosophically — leads to liberation. Don't just ask it intellectually. Sit with it until it burns through the answer.",
        icon: "👑",
      },
      {
        id: "shukadeva",
        title: "Shukadeva and the Paradox of Liberation",
        source: "Srimad Bhagavatam, Canto 1",
        narrative:
          "Shukadeva was born liberated — he remained in his mother's womb for twelve years rather than enter a world of Maya. He emerged already free and immediately walked into the forest. His father Vyasa called after him. The trees answered. Vyasa realized his son's consciousness was in everything. When Shukadeva agreed to narrate the Bhagavatam to the dying King Parikshit, he said: 'I who am already free now speak on Krishna — because the name of God is so sweet that even the liberated desire to taste it again.'",
        gitaLesson:
          "My devotees, ever united in love, find supreme satisfaction and bliss in exchanging knowledge of Me.",
        gitaRef: "BG 10.9",
        application:
          "Even liberation is not the end of love for God. The saints who have attained moksha still sing God's name because His sweetness is beyond even the sweetness of freedom.",
        icon: "🌲",
      },
      {
        id: "yajnavalkya-gargi",
        title: "Yajnavalkya and Gargi — The Ground of All Being",
        source: "Brihadaranyaka Upanishad",
        narrative:
          "In the great debate, Gargi Vachaknavi asked Yajnavalkya: 'That which is above the sky, below the earth, between them — what is it pervaded by?' Yajnavalkya answered: 'Space.' She continued: 'What is space pervaded by?' 'The Imperishable.' 'What is the Imperishable?' At that point, Yajnavalkya said: 'That Imperishable, O Gargi — cannot be perceived, cannot be described, cannot be denied. It is the ground of all being. All this has been strung on it like beads on a thread.' Gargi bowed and declared: 'None can overcome this person in debate about Brahman.'",
        gitaLesson:
          "I am the thread that runs through all these pearls, and I am the origin, the middle and the end of all beings.",
        gitaRef: "BG 7.7",
        application:
          "Keep pulling the question all the way back. Don't stop at space, or matter, or consciousness. Pull until you reach the Imperishable that cannot be taken further — and rest there.",
        icon: "📿",
      },
      {
        id: "vidura-niti",
        title: "Vidura's Wisdom — The Highest Ethics",
        source: "Mahabharata, Udyoga Parva",
        narrative:
          "When Dhritarashtra was sleepless with anxiety before the war, he called Vidura to speak through the night. Vidura's teachings — the Vidura Niti — covered every aspect of ethical life: how to choose friends (by their character not wealth), how to speak truth (with kindness not cruelty), how to handle anger (never act in it), how to treat the helpless (as you would treat God), what prosperity truly means (inner peace, not outer wealth). These teachings are as applicable today as they were 5000 years ago.",
        gitaLesson:
          "That by which one sees the undivided in the divided, the infinite in the finite — know that wisdom to be sattvic.",
        gitaRef: "BG 18.20",
        application:
          "Ethical wisdom is not about rules — it is about seeing clearly. When you see the divine presence in every person and situation, ethical action flows naturally without effort or calculation.",
        icon: "⚖️",
      },
      {
        id: "sanatsujata",
        title: "Sanatsujata — Death Is Not the Enemy",
        source: "Mahabharata, Udyoga Parva",
        narrative:
          "At the eve of war, Dhritarashtra asked the sage Sanatsujata about death. The sage said: 'Death is not the enemy. Heedlessness is death. The person who lives without awareness — sleeping through life, forgetting the eternal, chasing pleasure and avoiding pain — that person is dead even while breathing. The person who lives with full awareness is immortal even while dying.' This teaching turned everything upside down: death is a state of mind, not an event.",
        gitaLesson:
          "He who is uninfluenced by sorrow, who does not crave pleasures, free from passion, fear, and anger — is called a sage of steady wisdom.",
        gitaRef: "BG 2.56",
        application:
          "Wake up. The deepest spiritual emergency is not death — it is sleepwalking through life. Every moment of full, conscious presence is an act of defeating death before it comes.",
        icon: "⚡",
      },
      {
        id: "pingala",
        title: "Pingala's Liberation — Cutting Hope's Root",
        source: "Srimad Bhagavatam, Canto 11",
        narrative:
          "Pingala was a prostitute who waited all night for a wealthy patron who never came. In the early morning hours, she suddenly saw clearly: 'I have been a slave to hope for something from a passing man, ignoring the Supreme within me who is with me always.' In that moment of complete desillusionment, she gained dispassion. Dattatreya described her as one of his 24 gurus: 'She taught me that cutting the root of hope — not the hope itself, but the dependence on external fulfillment — brings immediate peace.'",
        gitaLesson:
          "The one who is free from attachment, free from fear, free from anger — is truly a sage.",
        gitaRef: "BG 4.10",
        application:
          "Disillusionment — the moment you stop expecting the external world to fill your internal emptiness — is the beginning of liberation, not its end. Welcome every disappointment as Pingala welcomed her empty night.",
        icon: "🌙",
      },
      {
        id: "kapila-devahuti",
        title: "Kapila's Teaching to His Mother",
        source: "Srimad Bhagavatam, Canto 3",
        narrative:
          "The sage Kapila stayed behind when his father went on pilgrimage, in order to teach his mother Devahuti the Sankhya philosophy and the path of devotion. He taught her the nature of prakriti and purusha (matter and consciousness), how consciousness becomes entangled in matter, how the three gunas operate, and how bhakti yoga is the direct path to liberation. A mother was taught by her son the highest wisdom. At the end of his teaching, Devahuti attained liberation while still in her body — she became a river, the Kapila River, which still flows in Gujarat.",
        gitaLesson:
          "By me, in My unmanifested form, this entire universe is pervaded. In Me, all beings exist. I do not dwell in them, they dwell in Me.",
        gitaRef: "BG 9.4",
        application:
          "The highest teacher you need may already be in your home. The highest student you can teach may be your own mother. Sacred wisdom flows in unexpected directions when the heart is open.",
        icon: "🌊",
      },
      {
        id: "parashurama-lesson",
        title: "Parashurama's Fury and the Limits of Violence",
        source: "Mahabharata, Adi Parva",
        narrative:
          "Parashurama, the great warrior Brahmin, killed every Kshatriya on earth 21 times in fury over his father's death. He performed great tapasya afterward to cleanse himself of this mass killing. When he finally taught Karna, he discovered Karna was not a Brahmin. In his anger he cursed Karna to forget his knowledge at the crucial moment. Later, struck by the quality of Karna's endurance through terrible pain (he had sat still while an insect bored into his thigh to not disturb his sleeping teacher), Parashurama wept and softened his curse somewhat. Even the greatest warrior must learn that violence has limits.",
        gitaLesson:
          "Valor, strength, and not fleeing from battle — these are the natural duties of a Kshatriya. But one should know the limits of righteous warfare.",
        gitaRef: "BG 18.43",
        application:
          "Even when your anger is righteous, the scale of violence must be proportionate. Parashurama's 21-times mass destruction — however motivated — required 21 times the penance to cleanse. Every action has its exact counterpart.",
        icon: "🪓",
      },
    ],
  },
  {
    id: "overcoming-darkness",
    name: "Stories of Overcoming Darkness",
    description: "When divine light dissolves even the most ancient evil",
    color: "oklch(0.48 0.22 280)",
    icon: "🌅",
    stories: [
      {
        id: "narasimha",
        title: "Narasimha — God in the Pillar",
        source: "Srimad Bhagavatam, Canto 7",
        narrative:
          "Hiranyakashipu had boons that made him unable to be killed: not by man or animal, not inside or outside, not by day or night, not on earth or in the air, not by weapon, not by living or non-living things. He thought himself immortal. When Prahlada said 'Vishnu is everywhere — even in this pillar', Hiranyakashipu struck the pillar. Narasimha — half man, half lion — erupted from the pillar. At twilight (neither day nor night), on the threshold (neither inside nor outside), holding Hiranyakashipu on his lap (neither earth nor air), he killed him with his nails (neither weapon nor non-weapon). God found the gap in every protection.",
        gitaLesson: "Whenever dharma declines and adharma rises, I descend.",
        gitaRef: "BG 4.7",
        application:
          "No protection from truth is complete. No armor built on adharma is truly impenetrable. God finds every gap. If your life is built on injustice, no technical protection will save it.",
        icon: "🦁",
      },
      {
        id: "mahishasura",
        title: "Durga and Mahishasura — Shakti Destroys Ego",
        source: "Devi Bhagavata Purana",
        narrative:
          "Mahishasura had a boon that he could not be killed by any man or male deity. He conquered heaven itself. The male gods, humiliated and powerless, combined all their energies into a divine feminine form — Durga. She rode a lion and fought Mahishasura for nine days. He shape-shifted through every form — buffalo, lion, elephant, human — but she destroyed each form. Finally as Mahishasura — the Buffalo Demon — he stood. She severed his head. The nine days became Navratri. The victory became the festival of Dussehra.",
        gitaLesson:
          "The divine feminine power — Shakti — which is my own energy — manifests for the protection of dharma.",
        gitaRef: "BG 10.34",
        application:
          "Ego-based power — however protected it seems — always has a vulnerability. The divine feminine principle (creative, protective, decisive action without ego) is what ultimately dissolves it.",
        icon: "🌺",
      },
      {
        id: "ravana-fall",
        title: "Ravana's Downfall — Brilliance Destroyed by Ego",
        source: "Valmiki Ramayana",
        narrative:
          "Ravana was the most powerful, learned, and accomplished being of his age. He was a scholar of the Vedas, a master musician who played the veena with his skull as the instrument. He had meditated for eons and received incredible boons from Brahma. He ruled the most opulent kingdom in the world. His single fatal flaw — the inability to overcome lust and ego — drove him to kidnap Sita. From that one act of adharma flowed the complete destruction of everything he had built. All his learning, his power, his kingdom — swept away in one act of ego.",
        gitaLesson:
          "From anger comes delusion, from delusion confused memory, from confused memory loss of reason, from loss of reason total destruction.",
        gitaRef: "BG 2.63",
        application:
          "No amount of knowledge, achievement, or spiritual practice can save you from the consequences of ego if the ego is not addressed. One unaddressed craving can destroy a lifetime of achievement.",
        icon: "👑",
      },
      {
        id: "kansa-end",
        title: "Kansa's End — Running From Destiny",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Kansa imprisoned his sister Devaki and her husband Vasudeva and killed six of their children immediately at birth. He lived in such terror of the prophecy that his own nephew would kill him that he created an entire apparatus of surveillance, fear, and control. He sent demon after demon to kill Krishna — and every one was destroyed. Kansa never understood: his own fear was the engine that kept creating the conditions for his death. When Krishna finally walked into the wrestling arena, Kansa knew before the first blow.",
        gitaLesson:
          "Fear arises from the second thing. Where there is only the One, there is no fear.",
        gitaRef: "BG 2.56",
        application:
          "The thing you fear most and the lengths you go to avoid it often create the exact conditions that produce it. The only escape from fear is not more protection but the dissolution of the separate self that fears.",
        icon: "👿",
      },
      {
        id: "hiranyaksha",
        title: "Varaha Avatar — Earth Rescued from the Deep",
        source: "Srimad Bhagavatam, Canto 3",
        narrative:
          "The demon Hiranyaksha seized the earth goddess Bhudevi and took her to the bottom of the cosmic ocean. The gods were helpless. Vishnu took the form of a divine boar — Varaha — descended into the primordial ocean, and found Hiranyaksha there. They fought the most epic battle in the history of the cosmos while the universe shook. Varaha killed Hiranyaksha and with his tusks lifted Mother Earth from the ocean floor, placing her gently back in her orbit. The entire cosmos breathed again.",
        gitaLesson:
          "I descend whenever dharma declines. For the protection of the good, for the destruction of the wicked, and for the re-establishment of dharma.",
        gitaRef: "BG 4.8",
        application:
          "When the foundational elements of life — truth, earth, dharma — are taken down to the lowest depths, God comes in an unprecedented form to recover them. No descent is final. Recovery is always possible.",
        icon: "🐗",
      },
      {
        id: "kaliya-tamed",
        title: "Kaliya Tamed — Poison Neutralized by Presence",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Kaliya was a vast, many-hooded serpent whose venom had poisoned the entire Yamuna river. No creature could live in the water. Birds flying overhead fell dead from the fumes. Krishna dove into the Yamuna, played in the deep, and lured Kaliya out. The serpent coiled around Krishna, trying to crush and poison him. Krishna simply expanded and danced on Kaliya's hoods, pressing him down. Kaliya's wives wept and prayed for their husband's life. Krishna released Kaliya and sent him to the ocean, purifying the Yamuna instantly.",
        gitaLesson:
          "I am in the hearts of all beings, O Arjuna. Everything I touch, I transform.",
        gitaRef: "BG 15.15",
        application:
          "The presence of God purifies what cannot be purified by any other means. Bring whatever is most toxic in your life into full conscious contact with God's presence. Don't run from it. Dance on it.",
        icon: "🐍",
      },
      {
        id: "narakasura",
        title: "Narakasura — Krishna and Satyabhama's Victory",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Narakasura had imprisoned 16,100 women who had been brought to him against their will. He had stolen Aditi's (the mother of the gods) divine earrings. He had boons making him almost invincible. Krishna went to battle him with his wife Satyabhama. In the battle, Krishna was briefly felled. Satyabhama took up the bow herself and fought with extraordinary valor. Krishna recovered, killed Narakasura, and freed all the imprisoned women. He then married all 16,100 women to protect their honor — taking responsibility for those society had abandoned.",
        gitaLesson: "All this is strung on Me like a row of gems on a thread.",
        gitaRef: "BG 7.7",
        application:
          "When those who should protect others instead exploit them, God's response is to come personally, restore what was stolen, and take responsibility for those who were abandoned. Be the person who shows up.",
        icon: "💎",
      },
      {
        id: "shumbha-nishumbha",
        title: "Devi Defeats Shumbha-Nishumbha — The Last Trick of Ego",
        source: "Devi Mahatmyam",
        narrative:
          "At the end of the battle with the demon brothers, Shumbha cried at Devi: 'You have only won with the help of all these other goddesses!' Devi responded by drawing all the divine forms back into herself — the armies of goddesses, the powers, the weapons — until she stood alone. Then she said: 'I was always alone. Those forms were all My own vibrations. There is nothing in this universe that is not Me.' Then she destroyed Shumbha with a single blow.",
        gitaLesson:
          "By Me, in My unmanifested form, this entire universe is pervaded. All beings exist in Me. I do not dwell in them — they dwell in Me.",
        gitaRef: "BG 9.4",
        application:
          "The ego's final argument is always 'you didn't do this alone.' The Divine's answer is: There is only One. There never was a second. The entire apparent diversity was always One power.",
        icon: "🌟",
      },
      {
        id: "kamadeva-destroyed",
        title: "Shiva Burns Kama — Desire Itself Is Burned",
        source: "Shiva Purana",
        narrative:
          "When the gods needed Shiva to emerge from meditation and father a son to defeat the demon Tarakasura, they sent Kama (the god of desire) to distract Shiva with an arrow of love. When the arrow struck, Shiva's third eye opened. From it came fire that reduced Kama to ash. Then Rati (Kama's wife) wept so completely that Shiva restored Kama — but in formless form, as 'Ananga' (the bodiless one). Desire, when it approaches the truly realized, does not produce attachment but is itself transformed into awareness.",
        gitaLesson:
          "The world is bound by actions done for desire. Therefore, O Arjuna, do your work as a sacrifice, free from attachment.",
        gitaRef: "BG 3.9",
        application:
          "When awareness is fully mature, desire loses the power to distract. The fires of true spiritual practice do not kill desire but transform it into its formless essence — pure creative energy without attachment.",
        icon: "🔥",
      },
      {
        id: "taraka-defeated",
        title: "Kartikeya — The General Born to Defeat Darkness",
        source: "Shiva Purana",
        narrative:
          "Tarakasura had a boon that only Shiva's son could kill him. He thought this made him immortal since Shiva had burned Kama and would never father a child. But the power of Parvati's love eventually brought Shiva back from samadhi. Their union produced Kartikeya — born of fire in the Ganga, raised by the Krittikas (the Pleiades). He led the divine armies with a peacock as his vehicle and a vel (divine spear) as his weapon. He defeated Tarakasura in a battle that restored balance to the cosmos.",
        gitaLesson:
          "Nothing impure can withstand the power born from the union of consciousness and its creative energy.",
        gitaRef: "BG 4.8",
        application:
          "Some demons can only be defeated by a force that has not yet been born — a new synthesis, a new creation, something unprecedented. Sometimes you must generate the very thing that will solve your problem.",
        icon: "🦚",
      },
      {
        id: "andhaka",
        title: "Shiva and Andhaka — Darkness Transformed",
        source: "Shiva Purana",
        narrative:
          "Andhaka — born of a moment of Parvati's hands covering Shiva's eyes — was a demon of blindness and darkness. Every drop of his blood that fell created a new Andhaka. Shiva impaled him on his trident and held him there for thousands of years as he bled and writhed. Slowly, through this painful purification, Andhaka's sins burned away. He gave up his demonic nature completely. Shiva released him and made him a gana (divine attendant). The destroyer of darkness became its guardian.",
        gitaLesson:
          "Those who are dark within take refuge in demonic nature. They are lost in adharma. But even they can be transformed through the discipline of higher awareness.",
        gitaRef: "BG 16.20",
        application:
          "Some transformations require sustained, painful impalement on truth. The darkness within cannot be released quickly — it must be held on the spear of consciousness until it has fully burned out, then released.",
        icon: "🔱",
      },
    ],
  },
  {
    id: "krishna-leelas",
    name: "Krishna's Divine Leelas",
    description:
      "The playful, miraculous actions through which God is revealed",
    color: "oklch(0.52 0.28 268)",
    icon: "🪈",
    stories: [
      {
        id: "makhan-chor",
        title: "Makhan Chor — God Stealing Butter",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Baby Krishna was caught red-handed stealing butter with his gang of Gopa friends. His mother Yashoda caught him with butter on his face. When she asked if he had eaten butter, he said 'No' and opened his mouth to show it was empty. When Yashoda looked inside his open mouth, she saw the entire universe — all of creation, all three worlds, the stars, the seas, the mountains — inside her son's little mouth. Then she forgot what she had seen. Krishna's love for butter (the concentrated essence of milk/love) is his love for pure devotion.",
        gitaLesson: "I am easily approachable by those who always remember Me.",
        gitaRef: "BG 8.14",
        application:
          "God's approach to the devotee is not solemn and distant — it is playful, intimate, and direct. The butter Krishna steals is the concentrated love of the devotee. God is always coming to steal your heart.",
        icon: "🧈",
      },
      {
        id: "putana",
        title: "Putana — The Poison-Giver Granted Liberation",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Putana was sent by Kansa to kill baby Krishna with poisoned breast milk. She disguised herself as a beautiful woman and picked up the baby to nurse him. Krishna took the nipple and did not stop with the milk — he drank her very life force. Putana crashed to the ground and died, her body covering miles. But when the sages saw how Krishna treated her remains, they said: 'He has granted her the liberation given to a mother.' Because she gave the gesture of nursing — even with poison — Krishna accepted her as a mother and gave her moksha.",
        gitaLesson:
          "For those who worship Me, I am easy to attain, for I am equal to all.",
        gitaRef: "BG 8.14",
        application:
          "Krishna's generosity is absolute — even a gesture of motherhood given with lethal intent earned liberation. How much more will a genuine act of love earn? Give what you can. God accepts even imperfect offerings beyond what they deserve.",
        icon: "🌙",
      },
      {
        id: "kaliya-dance",
        title: "Krishna Dances on Kaliya",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "When the cowherd boys saw Krishna drowning in the Yamuna after jumping in to retrieve their ball, they wept and fell unconscious from grief. Nanda rushed to jump in, but Balarama stopped him knowing Krishna would be fine. Then Krishna emerged — dancing on Kaliya's many-hooded head. Each time Kaliya tried to raise a hood in attack, Krishna danced on it more vigorously. The Gopis' grief turned to joy. Kaliya's blood mixed in the water — and the river was purified by Krishna's feet. The poison became nectar wherever He danced.",
        gitaLesson:
          "O Arjuna, there is nothing in the three worlds that I need to do, nor anything unattained that I need to attain. Yet I continue to act.",
        gitaRef: "BG 3.22",
        application:
          "God engages completely with every situation — not from fear or need, but from love and play. Your difficulties are not overwhelming God. He is dancing on them.",
        icon: "🕺",
      },
      {
        id: "govardhan-lift",
        title: "Govardhan Lift — God Becomes an Umbrella",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "When Krishna diverted the Gokul villagers' annual offering from Indra to Govardhan Hill, Indra was furious. He unleashed torrential rains and thunderbolts for seven days straight. Krishna simply lifted Govardhan Hill on his little finger and held it up as an umbrella over all the cows and cowherd people. For seven days, everyone sheltered under the hill like a mushroom. Indra, humiliated, finally appeared and bowed to Krishna. The mountain was replaced, and Indra acknowledged his error.",
        gitaLesson:
          "To those whose thoughts are set on Me, who worship Me with constant devotion, I carry what they lack and preserve what they have.",
        gitaRef: "BG 9.22",
        application:
          "When you are committed to God — when you redirect your worship from social/cosmic powers to the One — God himself becomes your shelter. Not symbolically. Actually. On his little finger.",
        icon: "⛰️",
      },
      {
        id: "aghasura",
        title: "Aghasura — Death Swallowed and Spit Out",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Aghasura, Putana's brother, took the form of a massive serpent with a cave-like mouth, lying still as a mountain pass. When the cowherd boys and calves walked into the mouth thinking it was a cave, it began to close. Krishna, realizing what was happening, expanded himself inside the serpent's throat. Aghasura could not swallow or breathe. His entire life force shot through the top of his head and merged with Krishna as he died. This is the liberation of the enemy through God's complete presence — not punishment but transformation.",
        gitaLesson:
          "Even those who are devoted to other gods worship Me alone, though not according to the prescribed rules.",
        gitaRef: "BG 9.23",
        application:
          "Whatever comes against you — even death itself, even what seems like it will swallow you whole — when you are filled with God's presence, it cannot contain you. You expand. It is dissolved.",
        icon: "🐍",
      },
      {
        id: "brahma-steals",
        title: "Brahma's Test — Krishna Multiplies Himself",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Brahma, curious about Krishna's divinity, stole all the cowherd boys and calves to test Krishna. Krishna noticed and simply manifested perfect duplicates of every single cowherd boy and calf — so the mothers, the cows, the fathers noticed nothing different for a full year. When Brahma returned a year later, he found his original boys still sleeping in the cave and exact copies living normal lives everywhere. He bowed in utter confusion. Krishna revealed his cosmic form to Brahma, who wept: 'Even I, the creator, cannot comprehend you.'",
        gitaLesson:
          "I am the father of this universe, its mother, sustainer, and grandfather. I am the object of knowledge, the purifier.",
        gitaRef: "BG 9.17",
        application:
          "When God 'takes away' what you love, look more carefully — God may have already replaced it with something equally whole, and is only testing whether you notice. Nothing that belongs to God's devotee can truly be lost.",
        icon: "✨",
      },
      {
        id: "dhenukasura",
        title: "Dhenukasura — Darkness in Holy Places Removed",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Dhenukasura was an asura in the form of a huge donkey who had claimed the Talavana (palm forest) and prevented anyone from enjoying its fruits. No creature was allowed near. Krishna and Balarama entered the forest, shook the palm trees, and picked up the donkey who ran at them in rage. Balarama swung it by the hind legs until it fell dead. The forest was freed. Its fragrant fruits fell everywhere. The creatures of the forest came out of hiding and feasted. The liberation of a sacred space from the demon who occupied it.",
        gitaLesson:
          "For the protection of the righteous, for the destruction of the wicked, I come in every age.",
        gitaRef: "BG 4.8",
        application:
          "Sometimes a place — a relationship, an institution, a sacred practice — has been occupied by darkness for so long that nothing good can grow there. Sometimes the only solution is to directly remove what has taken over.",
        icon: "🌴",
      },
      {
        id: "arishtasura",
        title: "Arishtasura — The Mad Bull and Its Defeat",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "Arishtasura appeared as a massive bull, terrorizing Vrindavan — shaking the earth with his hooves, bellowing so loudly that mountains trembled, clouds fled, and birds fell from trees in terror. The Gopis ran to Krishna. Krishna walked forward to meet the bull with complete calm, then gripped it by the horns and twisted its neck. The bull died and was transformed. The Gopis marveled: 'How did you face this with no fear?' Krishna said simply: 'What would fear of a bull when My devotees are endangered?'",
        gitaLesson:
          "Those who take refuge in Me, though they be of sinful origin, women, vaishyas, and shudras — even they attain the Supreme goal.",
        gitaRef: "BG 9.32",
        application:
          "When your devotees are in danger, God does not wait to be asked. He runs out to meet the threat. The question is: do you trust that enough to let God fight your battles?",
        icon: "🐂",
      },
      {
        id: "vishwarupa-arjuna",
        title: "Vishwarupa — When God Shows Too Much",
        source: "Mahabharata, Bhishma Parva",
        narrative:
          "Arjuna asked to see Krishna's universal form. Krishna gave him divine eyes since human eyes could not bear it. What Arjuna saw overwhelmed him completely — thousands of suns blazing simultaneously, the entire cosmos within one divine body, all time rushing in one direction toward the vast mouth. All the warriors of Kurukshetra already consumed. Arjuna begged him to stop: 'I cannot bear it. Be my friend again.' Krishna immediately withdrew the form. 'This form,' he said, 'is more difficult to see than even the Vedas. Only bhakti grants it.'",
        gitaLesson:
          "This form of Mine that you have just seen — it cannot be seen through study, austerity, or ritual. Only by undivided devotion can I be seen in this way.",
        gitaRef: "BG 11.53",
        application:
          "The glimpse of God's infinite nature is overwhelming to the human mind. Don't try to hold it or analyze it. Simply bow and return to the intimate friendship that is, after all, what God actually wants from you.",
        icon: "🌌",
      },
      {
        id: "krishna-gopis-vastra",
        title: "The Gopis' Clothes — Surrender Without Shame",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "The Gopi women had vowed to worship Katyayani for a month to get Krishna as their husband. On the last day, they bathed naked in the Yamuna as the dawn came. Krishna had climbed the tree and taken their clothes. He called down: 'Come out of the water with hands folded above your head — not covering your bodies.' The Gopis, who had nothing left to hide and nothing left to lose, folded their hands in namaskar and surrendered. Krishna returned the clothes and blessed them. Complete surrender — with nothing held back, nothing hidden — is what the devotee-God relationship requires.",
        gitaLesson:
          "Abandon all dharmas and take refuge in Me alone. I will liberate you from all sins. Do not grieve.",
        gitaRef: "BG 18.66",
        application:
          "The moment of complete surrender — when you have nothing left to hide, nothing left to protect, no image left to maintain — is the moment God returns what you thought was taken. Real dignity begins in complete transparency before God.",
        icon: "🌊",
      },
      {
        id: "krishna-departure",
        title: "Krishna's Last Gift to Vrindavan — The Flute's Song",
        source: "Srimad Bhagavatam, Canto 10",
        narrative:
          "When Krishna left Vrindavan forever for Mathura, he stopped at the edge of the village and played his flute one last time. The Gopis, the cows, the birds, the trees — all became completely still. The entire universe held its breath for that one moment of music. Then he turned and walked away without looking back. The Gopis said afterward: 'That final song contained everything — the beginning, the middle, and the end of all existence. We will never forget it. He left his flute behind. Every time the wind blows through the trees of Vrindavan, we hear it again.'",
        gitaLesson:
          "For My devotees, I am ever-present. They are in Me and I in them.",
        gitaRef: "BG 9.29",
        application:
          "God's departure is never final for the true devotee. The love that was given leaves something permanent behind — a resonance in the heart that no wind can scatter. Every breath you take can become the sound of that flute.",
        icon: "🪈",
      },
    ],
  },
];
