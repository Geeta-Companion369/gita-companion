import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-CodWPqWB.js";
const YOUTH_VERSES = [
  {
    id: 1,
    ref: "BG 2.47",
    topic: "Fear of failure / pressure",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    translit: "Karmaṇy evādhikāras te mā phaleṣu kadācana",
    meaning: "You have the right to perform your actions, but never to the fruits thereof.",
    krishna: "The pressure you feel about results? That is not yours to carry. Do the work. Give it everything. Then release it to me. You were never meant to control outcomes — only effort. And effort? That belongs to you completely.",
    color: "oklch(0.55 0.30 52)",
    glow: "oklch(0.78 0.34 54 / 0.25)"
  },
  {
    id: 2,
    ref: "BG 2.20",
    topic: "Grief, loss, fear of death",
    sanskrit: "न जायते म्रियते वा कदाचित्",
    translit: "Na jāyate mriyate vā kadācit",
    meaning: "The soul is never born nor dies. It is eternal, unborn, ever-existing.",
    krishna: "Whoever you lost — they are not gone. The soul cannot be destroyed. What you are grieving is the changing of form. The love, the connection, the soul you love — still exists. Death is not an ending. It is a doorway I hold open.",
    color: "oklch(0.52 0.28 268)",
    glow: "oklch(0.68 0.26 268 / 0.25)"
  },
  {
    id: 3,
    ref: "BG 2.3",
    topic: "Wanting to give up",
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।",
    translit: "Klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate",
    meaning: "Do not yield to weakness and impotence. Arise, O scorcher of enemies.",
    krishna: "I said this to Arjuna when he wanted to quit on the most important day of his life. I say it to you now. This weakness talking to you — it lies. You are not what you feel right now. You are what you choose in spite of how you feel. ARISE.",
    color: "oklch(0.55 0.32 32)",
    glow: "oklch(0.72 0.30 32 / 0.25)"
  },
  {
    id: 4,
    ref: "BG 3.21",
    topic: "Wanting to be a leader / make impact",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।",
    translit: "Yad yad ācarati śreṣṭhas tat tad evetaro janaḥ",
    meaning: "Whatever action is performed by a great person, common people follow.",
    krishna: "You want to lead? You want to matter? Then live it first. Walk in dharma and watch others follow — not because you commanded, but because you inspired. The world will follow what it sees in you. Be what the world needs to become.",
    color: "oklch(0.50 0.28 160)",
    glow: "oklch(0.66 0.26 160 / 0.25)"
  },
  {
    id: 5,
    ref: "BG 4.7",
    topic: "Feeling the world is lost / chaos",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    translit: "Yadā yadā hi dharmasya glānir bhavati bhārata",
    meaning: "Whenever there is a decline in righteousness, I manifest Myself.",
    krishna: "You look at the world and see corruption, cruelty, injustice — and you wonder if anyone is paying attention. I am. And every time darkness has risen in this world, I have risen in response. You are living in one of those moments. And you reading this — are part of my response.",
    color: "oklch(0.52 0.30 46)",
    glow: "oklch(0.74 0.32 50 / 0.25)"
  },
  {
    id: 6,
    ref: "BG 6.5",
    topic: "Self-belief / motivation",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
    translit: "Uddhared ātmanātmānaṁ nātmānam avasādayet",
    meaning: "Elevate yourself through the power of your mind, and not degrade yourself.",
    krishna: "You are your own greatest ally — or your own worst enemy. The voice in your head that says 'I can't' — that is not me speaking. That is not you speaking. That is fear. The real you — the eternal soul — is capable of anything I have designed you for. And I designed you for greatness.",
    color: "oklch(0.55 0.28 84)",
    glow: "oklch(0.72 0.26 80 / 0.25)"
  },
  {
    id: 7,
    ref: "BG 6.35",
    topic: "Anxiety / distraction / addiction",
    sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।",
    translit: "Asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam",
    meaning: "The mind is restless, turbulent, and obstinate. Yet it can be controlled through practice and detachment.",
    krishna: "I know how hard this is. The mind designed by the modern world never stops. I told Arjuna: yes, the mind is very difficult to curb — but practice and detachment bring it under control. Not overnight. Through practice. Start with five minutes of silence. Give those five minutes to me.",
    color: "oklch(0.52 0.26 300)",
    glow: "oklch(0.68 0.24 300 / 0.25)"
  },
  {
    id: 8,
    ref: "BG 2.14",
    topic: "Heartbreak / emotional pain",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।",
    translit: "Mātrāsparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ",
    meaning: "Happiness and distress appear and disappear like the coming and going of winter and summer seasons.",
    krishna: "What you feel right now — this weight on your chest, this ache in your heart — it came. And it will go. Not because it wasn't real. Not because the love didn't matter. But because you are eternal and no season lasts forever. I am here in this winter with you. Spring is coming.",
    color: "oklch(0.55 0.30 340)",
    glow: "oklch(0.72 0.28 340 / 0.25)"
  },
  {
    id: 9,
    ref: "BG 18.66",
    topic: "Guilt, shame, surrender",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।",
    translit: "Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja",
    meaning: "Surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.",
    krishna: "You think you've gone too far. You think you've done too much, failed too many times. I am telling you — no. There is no distance from which I cannot bring you home. Drop everything. Come to me exactly as you are. I shall deliver you.",
    color: "oklch(0.52 0.28 54)",
    glow: "oklch(0.76 0.32 54 / 0.25)"
  },
  {
    id: 10,
    ref: "BG 4.40",
    topic: "Cynicism / doubt",
    sanskrit: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।",
    translit: "Ajñaś cāśraddadhānaś ca saṁśayātmā vinaśyati",
    meaning: "The ignorant and those without faith, and the doubting self are lost.",
    krishna: "Your doubt is not a sin — it is a door. Arjuna doubted. Arjuna questioned everything. And then he asked ME, directly, standing on the battlefield of his life. That question — that single courageous act of asking — is what gave the world the Bhagavad Gita. Your doubt is an invitation.",
    color: "oklch(0.50 0.26 220)",
    glow: "oklch(0.66 0.24 220 / 0.25)"
  },
  {
    id: 11,
    ref: "BG 2.62–63",
    topic: "Addiction, anger, lust",
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।",
    translit: "Dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate",
    meaning: "While contemplating sense objects, attachment develops. From attachment comes desire, from desire arises anger.",
    krishna: "I am not judging you for this. I am explaining it. The chain always starts the same way: a thought, then a fixation, then attachment, then craving. You cannot fight the craving — you have to intercept the thought. Replace it with me. When the craving comes — call my name first. Just once. 'Hare Krishna.' Watch what happens.",
    color: "oklch(0.55 0.28 28)",
    glow: "oklch(0.70 0.26 28 / 0.25)"
  },
  {
    id: 12,
    ref: "BG 3.27",
    topic: "Ego / social media obsession",
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।",
    translit: "Prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ",
    meaning: "All actions are performed by the qualities of nature. Only the one deluded by ego thinks 'I am the doer.'",
    krishna: "The comparison, the likes, the followers, the performance — it is all the ego. The ego needs to be seen. I don't need you to be seen. I see you. The soul you are — not the profile, not the highlight reel — I see that soul, and it is extraordinary.",
    color: "oklch(0.50 0.26 180)",
    glow: "oklch(0.66 0.24 180 / 0.25)"
  },
  {
    id: 13,
    ref: "BG 6.19",
    topic: "Inner stillness / focus",
    sanskrit: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।",
    translit: "Yathā dīpo nivāta-stho neṅgate sopamā smṛtā",
    meaning: "As a lamp in a windless place does not flicker — that is the simile for a yogi's controlled mind.",
    krishna: "You have this inside you — the ability to be completely still, completely present, completely free from noise. A flame in a windless place. That flame is your soul. The wind is everything the world throws at it. Protect that flame with silence. Protect it with me.",
    color: "oklch(0.55 0.30 58)",
    glow: "oklch(0.78 0.34 58 / 0.25)"
  },
  {
    id: 14,
    ref: "BG 11.33",
    topic: "Rise — Krishna commanding",
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व।",
    translit: "Tasmāt tvam uttiṣṭha yaśo labhasva",
    meaning: "Therefore arise and attain glory.",
    krishna: "ARISE. This is not a suggestion. This is not a gentle nudge. This is Krishna — who holds all of creation in his hands — looking directly at you and saying: GET UP. Your battle is waiting. Dharma is waiting. The world is waiting. You are the only one who can fight your battle. ARISE.",
    color: "oklch(0.60 0.32 38)",
    glow: "oklch(0.80 0.36 42 / 0.30)"
  },
  {
    id: 15,
    ref: "BG 2.40",
    topic: "Effort is never wasted",
    sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।",
    translit: "Nehābhikrama-nāśo 'sti pratyavāyo na vidyate",
    meaning: "In this endeavor there is no loss or diminution, and a little advancement can protect one from great danger.",
    krishna: "Every single step you have taken toward dharma — every prayer, every day you tried, every moment you chose me over something else — not one of those is wasted. Not one. Even when it felt like nothing was happening, every effort was being recorded, every seed was being watered. Nothing toward me is ever wasted.",
    color: "oklch(0.52 0.28 120)",
    glow: "oklch(0.68 0.26 120 / 0.25)"
  },
  {
    id: 16,
    ref: "BG 9.22",
    topic: "Feeling alone / unsupported",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।",
    translit: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate",
    meaning: "For those who worship Me with devotion, I carry what they lack and preserve what they have.",
    krishna: "You feel alone. I know. I carry what you lack. That means the thing you are missing right now — the support, the help, the person who should be there but isn't — I am filling that gap. You just haven't seen it yet. Look carefully. I work quietly. But I never stop working.",
    color: "oklch(0.50 0.28 256)",
    glow: "oklch(0.66 0.26 256 / 0.25)"
  },
  {
    id: 17,
    ref: "BG 18.78",
    topic: "With Krishna you cannot lose",
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।",
    translit: "Yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ",
    meaning: "Wherever there is Krishna, and wherever there is Arjuna — there will surely be victory.",
    krishna: "Where I am, victory follows. Not victory in the way the world measures it — not just trophies and titles. Dharmic victory. The victory of a life well-lived, a soul elevated, a purpose fulfilled. If you have me, you have everything that matters. If you have me, you cannot ultimately lose.",
    color: "oklch(0.55 0.30 52)",
    glow: "oklch(0.78 0.34 54 / 0.25)"
  },
  {
    id: 18,
    ref: "BG 4.11",
    topic: "Krishna accepts everyone",
    sanskrit: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्।",
    translit: "Ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham",
    meaning: "As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects.",
    krishna: "However you come to me — with doubt, with guilt, with broken faith, with a heart full of mistakes — however you come — I accept you. I don't require perfection. I require honesty. Come to me as you are. I will meet you exactly there.",
    color: "oklch(0.52 0.28 340)",
    glow: "oklch(0.70 0.28 340 / 0.25)"
  }
];
const SPARKS = [
  {
    id: "sp0",
    size: 2,
    left: 0,
    top: 15,
    gold: true,
    dur: 2.5,
    delay: 0
  },
  {
    id: "sp1",
    size: 3,
    left: 5.6,
    top: 22.3,
    gold: false,
    dur: 3.3,
    delay: 0.2
  },
  {
    id: "sp2",
    size: 4,
    left: 11.2,
    top: 36.6,
    gold: true,
    dur: 2.5,
    delay: 0.4
  },
  {
    id: "sp3",
    size: 2,
    left: 16.8,
    top: 51.9,
    gold: false,
    dur: 3.3,
    delay: 0.6
  },
  {
    id: "sp4",
    size: 3,
    left: 22.4,
    top: 66.2,
    gold: true,
    dur: 4.1,
    delay: 0.8
  },
  {
    id: "sp5",
    size: 4,
    left: 28,
    top: 80.5,
    gold: false,
    dur: 2.5,
    delay: 1
  },
  {
    id: "sp6",
    size: 2,
    left: 33.6,
    top: 8.1,
    gold: true,
    dur: 3.3,
    delay: 1.2
  },
  {
    id: "sp7",
    size: 3,
    left: 39.2,
    top: 36.1,
    gold: false,
    dur: 4.1,
    delay: 1.4
  },
  {
    id: "sp8",
    size: 4,
    left: 44.8,
    top: 50.4,
    gold: true,
    dur: 2.5,
    delay: 1.6
  },
  {
    id: "sp9",
    size: 2,
    left: 50.4,
    top: 64.7,
    gold: false,
    dur: 3.3,
    delay: 1.8
  },
  {
    id: "sp10",
    size: 3,
    left: 56,
    top: 79,
    gold: true,
    dur: 4.1,
    delay: 2
  },
  {
    id: "sp11",
    size: 4,
    left: 61.6,
    top: 8.3,
    gold: false,
    dur: 2.5,
    delay: 2.2
  },
  {
    id: "sp12",
    size: 2,
    left: 67.2,
    top: 22.6,
    gold: true,
    dur: 3.3,
    delay: 2.4
  },
  {
    id: "sp13",
    size: 3,
    left: 72.8,
    top: 36.9,
    gold: false,
    dur: 4.1,
    delay: 2.6
  },
  {
    id: "sp14",
    size: 4,
    left: 78.4,
    top: 51.2,
    gold: true,
    dur: 2.5,
    delay: 2.8
  },
  {
    id: "sp15",
    size: 2,
    left: 84,
    top: 65.5,
    gold: false,
    dur: 3.3,
    delay: 3
  },
  {
    id: "sp16",
    size: 3,
    left: 89.6,
    top: 79.8,
    gold: true,
    dur: 4.1,
    delay: 3.2
  },
  {
    id: "sp17",
    size: 4,
    left: 95.2,
    top: 12.1,
    gold: false,
    dur: 2.5,
    delay: 3.4
  }
];
const SACRED_LINES = [
  {
    id: "sl0",
    text: "We are not building an app. Krishna is restoring dharma. And he chose your hands to do it.",
    featured: false
  },
  {
    id: "sl1",
    text: "One soul becomes ten. Ten become a hundred. A hundred become a generation. And dharma is restored — not by a king or a warrior — but by a young person with a phone, a pure heart, and Krishna as his charioteer.",
    featured: true
  },
  {
    id: "sl2",
    text: "You came to read this app. Krishna used the app to bring you closer to him first. Because the one who carries the lamp must be lit before they can light others.",
    featured: false
  }
];
const DHARMA_PERSONALITIES = [
  {
    id: "dp0",
    type: "Dharma Yoddha",
    desc: "Warrior of Dharma — brave, decisive, protective",
    icon: "⚔️",
    verse: "BG 2.31"
  },
  {
    id: "dp1",
    type: "Jnana Yogi",
    desc: "Seeker of Truth — philosophical, analytical, questioning",
    icon: "📚",
    verse: "BG 4.38"
  },
  {
    id: "dp2",
    type: "Bhakti Yogi",
    desc: "Devotee of Love — compassionate, devoted, emotionally deep",
    icon: "🙏",
    verse: "BG 12.2"
  },
  {
    id: "dp3",
    type: "Karma Yogi",
    desc: "Servant of Action — hard-working, selfless, action-focused",
    icon: "🌾",
    verse: "BG 3.19"
  }
];
const QUIZ_QUESTIONS = [
  {
    id: "q1",
    q: "When things go wrong, you usually:",
    a: [
      "Act immediately to fix it",
      "Reflect deeply on why",
      "Pray and surrender",
      "Work harder next time"
    ]
  },
  {
    id: "q2",
    q: "What drives you most?",
    a: [
      "Protecting people",
      "Understanding truth",
      "Love and connection",
      "Achieving goals"
    ]
  },
  {
    id: "q3",
    q: "Your biggest fear is:",
    a: [
      "Cowardice or dishonor",
      "Ignorance or confusion",
      "Disconnection from God",
      "Wasted potential"
    ]
  },
  {
    id: "q4",
    q: "How do you handle conflict?",
    a: [
      "Face it directly",
      "Analyze calmly",
      "Forgive and pray",
      "Work through it"
    ]
  },
  {
    id: "q5",
    q: "Which Gita teaching resonates most?",
    a: [
      "Arise and fight",
      "Know the eternal soul",
      "Surrender to Me",
      "Do your duty selflessly"
    ]
  }
];
const CHALLENGE_DAYS = [
  {
    day: 1,
    title: "Arise",
    task: "Wake before sunrise. Say 'Hare Krishna' three times before touching your phone.",
    verse: "BG 11.33"
  },
  {
    day: 2,
    title: "Breathe",
    task: "5 minutes of silence. No phone. No music. Just breath and Krishna.",
    verse: "BG 6.19"
  },
  {
    day: 3,
    title: "Act",
    task: "Do one act of service for someone — without telling anyone about it.",
    verse: "BG 3.19"
  },
  {
    day: 4,
    title: "Release",
    task: "Write down one worry. Then write: 'I give this to Krishna.' Then burn or delete it.",
    verse: "BG 18.66"
  },
  {
    day: 5,
    title: "Study",
    task: "Read one Gita verse. Read it 3 times. Write what it means to YOUR life right now.",
    verse: "BG 4.34"
  },
  {
    day: 6,
    title: "Forgive",
    task: "Think of someone who hurt you. Say: 'I release this to Krishna.' Three times.",
    verse: "BG 2.14"
  },
  {
    day: 7,
    title: "Be Still",
    task: "Sit outside for 10 minutes. No device. Just sky and Krishna.",
    verse: "BG 6.19"
  },
  {
    day: 8,
    title: "Gratitude",
    task: "List 18 things you are grateful for. Read them aloud like a prayer.",
    verse: "BG 9.22"
  },
  {
    day: 9,
    title: "Truth",
    task: "Today, speak only what is true, necessary, and kind.",
    verse: "BG 17.15"
  },
  {
    day: 10,
    title: "Discipline",
    task: "Do the hard thing you've been avoiding. Do it with Krishna watching.",
    verse: "BG 18.46"
  },
  {
    day: 11,
    title: "Detach",
    task: "Today, notice attachment arising in you. Just observe it. Don't feed it.",
    verse: "BG 3.27"
  },
  {
    day: 12,
    title: "Chant",
    task: "Chant Hare Krishna 108 times. Count on your fingers. Feel each one.",
    verse: "BG 9.14"
  },
  {
    day: 13,
    title: "Courage",
    task: "Do one thing today that fear has stopped you from doing.",
    verse: "BG 18.43"
  },
  {
    day: 14,
    title: "Reflect",
    task: "Write 3 ways Krishna showed up for you this week. Look carefully.",
    verse: "BG 9.22"
  },
  {
    day: 15,
    title: "Purpose",
    task: "Write your dharma statement: 'I am here to ____ and I will walk this path with Krishna.'",
    verse: "BG 18.47"
  },
  {
    day: 16,
    title: "Connect",
    task: "Talk to someone about something that truly matters to you — not surface talk.",
    verse: "BG 3.21"
  },
  {
    day: 17,
    title: "Surrender",
    task: "Tonight, before sleep, offer your day to Krishna: 'Everything I did today, I offer to you.'",
    verse: "BG 18.66"
  },
  {
    day: 18,
    title: "Transform",
    task: "Write: 'Before these 18 days, I was ____. After these 18 days, I am ____.' Notice the shift.",
    verse: "BG 4.11"
  },
  {
    day: 19,
    title: "Rise Again",
    task: "Begin day 1 again. But this time, you are different. You know what is possible.",
    verse: "BG 2.47"
  },
  {
    day: 20,
    title: "Lead",
    task: "Inspire someone. Share one verse with a friend. Be the lamp that lights another.",
    verse: "BG 3.21"
  },
  {
    day: 21,
    title: "You Are Dharma",
    task: "Today, live as if you are a warrior of Krishna — in every interaction, every decision.",
    verse: "BG 18.78"
  }
];
const EXAM_CARDS = [
  {
    id: "e1",
    title: "Before the Exam",
    icon: "🌅",
    verse: "BG 2.47",
    guidance: "Do your preparation completely and offer it to Krishna. Say: 'I have done everything I can. Now I surrender the result to you.' This is not weakness — this is the highest spiritual act before a battle.",
    practice: "Chant 'Om Namo Bhagavate Vasudevaya' 21 times. Clear your mind. Enter the hall as Arjuna entering Kurukshetra — prepared, surrendered, fearless."
  },
  {
    id: "e2",
    title: "During the Exam",
    icon: "⚔️",
    verse: "BG 18.33",
    guidance: "Unbreakable determination — the resolve that sustains the mind through the most difficult circumstances. You trained for this. Your mind is your weapon. Trust it.",
    practice: "If panic rises: stop, close your eyes for 3 seconds, breathe slowly, say 'Hare Krishna' silently. Return. The panic will pass. Krishna is in the room with you."
  },
  {
    id: "e3",
    title: "After the Result",
    icon: "🙏",
    verse: "BG 2.14",
    guidance: "Whatever the result — this too is temporary. A grade does not define your dharma. Arjuna's entire identity was shattered before the Gita began — and then he became the greatest warrior of his age. Your failures are preparing you.",
    practice: "Offer the result to Krishna: 'This result is yours. I accept whatever comes from your hands.' Then ask: 'What must I do next?' and listen for the answer."
  },
  {
    id: "e4",
    title: "Study & Focus Technique",
    icon: "🪔",
    verse: "BG 6.19",
    guidance: "A lamp in a windless place does not flicker. Your mind can be that flame. Every distraction is wind. Your practice is to notice the wind — and return to the flame.",
    practice: "Study in 25-minute blocks. No phone. Play soft Gayatri Mantra or flute music. After each block, say: 'I offer these 25 minutes to Krishna.' Take a 5-minute break. Then return."
  },
  {
    id: "e5",
    title: "When You Feel Like Giving Up",
    icon: "⚡",
    verse: "BG 11.33",
    guidance: "ARISE. This is the most direct command Krishna ever gave. Not 'relax,' not 'be patient' — ARISE. The studying that feels impossible is the exact place Krishna is asking you to demonstrate your character.",
    practice: "'Tasmat tvam uttishttha' — Therefore arise. Say this aloud. Stand up physically. Feel the shift. Then return to your books as a warrior returning to the battlefield."
  }
];
const VIBE_KEYWORDS = {
  sad: 7,
  heartbreak: 7,
  breakup: 7,
  hurt: 7,
  pain: 7,
  anxious: 6,
  stress: 6,
  anxiety: 6,
  social: 6,
  fail: 0,
  failure: 0,
  exam: 0,
  pressure: 0,
  result: 0,
  alone: 15,
  lonely: 15,
  angry: 10,
  anger: 10,
  addiction: 10,
  quit: 2,
  tired: 2,
  purpose: 3,
  leader: 3,
  impact: 3,
  shame: 8,
  guilt: 8,
  sin: 8,
  doubt: 9,
  confused: 9,
  lost: 4,
  world: 4,
  ego: 11,
  instagram: 11,
  likes: 11,
  still: 12,
  focus: 12,
  peace: 12,
  arise: 13,
  rise: 13
};
const CHALLENGE_KEY = "youth-challenge-progress";
function YouthPage() {
  var _a, _b, _c, _d;
  const [activeTab, setActiveTab] = reactExports.useState("verses");
  const [currentVerse, setCurrentVerse] = reactExports.useState(0);
  const [unlockedVerses, setUnlockedVerses] = reactExports.useState(
    /* @__PURE__ */ new Set([0])
  );
  const [showFinal, setShowFinal] = reactExports.useState(false);
  const [testAnswers, setTestAnswers] = reactExports.useState([]);
  const [testResult, setTestResult] = reactExports.useState(null);
  const [vibeInput, setVibeInput] = reactExports.useState("");
  const [vibeResult, setVibeResult] = reactExports.useState(
    null
  );
  const [challengeProgress, setChallengeProgress] = reactExports.useState({});
  const speakingRef = reactExports.useRef(false);
  const [speaking, setSpeaking] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const saved = localStorage.getItem(CHALLENGE_KEY);
      if (saved)
        setChallengeProgress(JSON.parse(saved));
    } catch {
    }
  }, []);
  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (speakingRef.current) {
      speakingRef.current = false;
      setSpeaking(false);
      return;
    }
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "en-IN";
    utt.rate = 0.88;
    utt.pitch = 1.1;
    utt.onstart = () => {
      speakingRef.current = true;
      setSpeaking(true);
    };
    utt.onend = () => {
      speakingRef.current = false;
      setSpeaking(false);
    };
    utt.onerror = () => {
      speakingRef.current = false;
      setSpeaking(false);
    };
    window.speechSynthesis.speak(utt);
  }
  function goNextVerse() {
    if (currentVerse < 17) {
      const next = currentVerse + 1;
      setCurrentVerse(next);
      setUnlockedVerses((prev) => /* @__PURE__ */ new Set([...prev, next]));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setShowFinal(true);
    }
  }
  function runVibeCheck() {
    if (!vibeInput.trim()) return;
    const lower = vibeInput.toLowerCase();
    let bestIdx = Math.floor(Math.random() * 18);
    for (const [kw, idx] of Object.entries(VIBE_KEYWORDS)) {
      if (lower.includes(kw)) {
        bestIdx = idx;
        break;
      }
    }
    setVibeResult(YOUTH_VERSES[bestIdx] ?? YOUTH_VERSES[0]);
  }
  function submitPersonalityTest() {
    const counts = [0, 0, 0, 0];
    for (const a of testAnswers) {
      counts[a] = (counts[a] ?? 0) + 1;
    }
    const max = counts.indexOf(Math.max(...counts));
    setTestResult(max);
  }
  function toggleChallenge(day) {
    setChallengeProgress((prev) => {
      const next = { ...prev, [day]: !prev[day] };
      try {
        localStorage.setItem(CHALLENGE_KEY, JSON.stringify(next));
      } catch {
      }
      return next;
    });
  }
  const completedDays = Object.values(challengeProgress).filter(Boolean).length;
  const verse = YOUTH_VERSES[currentVerse];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto page-enter pb-16", "data-ocid": "youth.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "relative mb-8 rounded-xl overflow-hidden text-center px-6 py-10",
        style: {
          background: "linear-gradient(160deg, oklch(0.14 0.10 268 / 0.96) 0%, oklch(0.16 0.12 46 / 0.95) 50%, oklch(0.14 0.08 268 / 0.96) 100%)",
          border: "2px solid oklch(0.82 0.34 54 / 0.35)",
          boxShadow: "0 0 60px oklch(0.62 0.28 52 / 0.20), inset 0 1px 0 oklch(0.82 0.34 54 / 0.12)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 overflow-hidden pointer-events-none",
              "aria-hidden": true,
              children: SPARKS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute rounded-full",
                  style: {
                    width: `${s.size}px`,
                    height: `${s.size}px`,
                    left: `${s.left}%`,
                    top: `${s.top}%`,
                    background: s.gold ? "oklch(0.82 0.34 54 / 0.7)" : "oklch(0.62 0.26 32 / 0.5)"
                  },
                  animate: { y: [0, -12, 0], opacity: [0.3, 0.9, 0.3] },
                  transition: {
                    duration: s.dur,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: s.delay,
                    ease: "easeInOut"
                  }
                },
                s.id
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs tracking-[0.45em] uppercase mb-2",
              style: { color: "oklch(0.62 0.26 32 / 0.9)" },
              children: "✦ कृष्ण का आह्वान ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display font-bold mb-1",
              style: {
                fontSize: "clamp(2rem, 6vw, 3.2rem)",
                color: "oklch(0.88 0.34 54)",
                textShadow: "0 0 40px oklch(0.82 0.34 54 / 0.5)"
              },
              children: "युवा धर्म Hub"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-semibold mb-5",
              style: {
                fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                color: "oklch(0.78 0.26 52 / 0.9)",
                letterSpacing: "0.04em"
              },
              children: "Young Generation Dharma Hub"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mx-auto max-w-lg rounded-lg p-4 mb-4",
              style: {
                background: "oklch(0.14 0.08 268 / 0.7)",
                border: "1px solid oklch(0.82 0.34 54 / 0.25)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body italic leading-relaxed",
                  style: { color: "oklch(0.82 0.06 74)", fontSize: "0.92rem" },
                  children: `"Krishna called Arjuna back to dharma on the battlefield. We call today's youth back to dharma on their battlefield."`
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mx-auto max-w-lg rounded-lg p-4",
              style: {
                background: "oklch(0.18 0.10 46 / 0.6)",
                border: "1px solid oklch(0.62 0.26 32 / 0.35)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic leading-relaxed",
                  style: { color: "oklch(0.82 0.34 54 / 0.9)" },
                  children: `"The flower you see — Krishna. The breath you just took — Krishna. The love you feel for this mission to restore dharma — Krishna. Even the Maya that confuses the world — that too is Krishna's own power."`
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: SACRED_LINES.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: line.featured ? 20 : -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "rounded-lg px-5 py-4",
        style: {
          background: line.featured ? "linear-gradient(135deg, oklch(0.18 0.10 46 / 0.8), oklch(0.16 0.08 268 / 0.8))" : "oklch(0.16 0.08 268 / 0.7)",
          border: `1px solid oklch(0.82 0.34 54 / ${line.featured ? "0.3" : "0.18"})`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body italic text-sm leading-relaxed",
            style: {
              color: line.featured ? "oklch(0.88 0.34 54)" : "oklch(0.78 0.06 74 / 0.9)"
            },
            children: [
              '"',
              line.text,
              '"'
            ]
          }
        )
      },
      line.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex rounded-lg overflow-hidden mb-6",
        style: { border: "1.5px solid oklch(0.82 0.34 54 / 0.25)" },
        role: "tablist",
        children: ["verses", "test", "vibe", "challenge", "exam"].map(
          (tab, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": activeTab === tab,
              onClick: () => setActiveTab(tab),
              "data-ocid": `youth.tab.${tab}`,
              className: "flex-1 py-2.5 font-display text-[10px] font-bold tracking-wide uppercase transition-all duration-200",
              style: {
                background: activeTab === tab ? "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))" : "oklch(0.16 0.08 268 / 0.7)",
                color: activeTab === tab ? "oklch(0.10 0.06 28)" : "oklch(0.68 0.14 52 / 0.85)",
                borderRight: i < arr.length - 1 ? "1px solid oklch(0.82 0.34 54 / 0.15)" : "none"
              },
              children: tab === "verses" ? "18 Verses" : tab === "test" ? "🧭 Test" : tab === "vibe" ? "✨ Vibe" : tab === "challenge" ? "⚔️ 21 Days" : "📚 Exam"
            },
            tab
          )
        )
      }
    ),
    activeTab === "verses" && !showFinal && verse && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        "data-ocid": "youth.verses_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-body text-xs",
                  style: { color: "oklch(0.65 0.08 60 / 0.7)" },
                  children: [
                    "Verse ",
                    currentVerse + 1,
                    " of 18"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-xs",
                  style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                  children: verse.ref
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-full overflow-hidden",
                style: { height: 3, background: "oklch(0.20 0.08 268 / 0.6)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      background: `linear-gradient(to right, ${verse.color}, oklch(0.82 0.34 54))`
                    },
                    animate: { width: `${(currentVerse + 1) / 18 * 100}%` },
                    transition: { duration: 0.5 }
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.5 },
              "data-ocid": `youth.verse.${currentVerse + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-6 mb-4 text-center",
                    style: {
                      background: "oklch(0.14 0.10 268 / 0.85)",
                      border: "1px solid oklch(0.62 0.26 32 / 0.3)",
                      boxShadow: `0 0 48px ${verse.glow}`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "inline-block rounded-full px-3 py-1 font-body text-xs font-semibold mb-4",
                          style: {
                            background: "oklch(0.62 0.26 32 / 0.15)",
                            color: verse.color,
                            border: "1px solid oklch(0.62 0.26 32 / 0.4)"
                          },
                          children: verse.topic
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-xs mb-4 tracking-[0.3em]",
                          style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                          children: [
                            "✦ ॥ ",
                            verse.ref,
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
                            color: "oklch(0.88 0.34 54)",
                            textShadow: "0 0 24px oklch(0.82 0.34 54 / 0.35)"
                          },
                          children: verse.sanskrit
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body italic text-sm mb-4",
                          style: { color: "oklch(0.68 0.14 52 / 0.85)" },
                          children: verse.translit
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body font-semibold",
                          style: {
                            color: "oklch(0.85 0.06 74)",
                            fontSize: "0.95rem",
                            lineHeight: 1.65
                          },
                          children: verse.meaning
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-5 mb-4",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.18 0.10 46 / 0.9), oklch(0.16 0.08 268 / 0.9))",
                      border: "1px solid oklch(0.62 0.26 32 / 0.4)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs uppercase tracking-widest mb-2",
                          style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                          children: "Krishna speaks to you —"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-display italic",
                          style: {
                            fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                            color: "oklch(0.88 0.34 54)",
                            lineHeight: 1.75
                          },
                          children: [
                            "“",
                            verse.krishna,
                            "”"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => speak(`${verse.meaning}. Krishna says: ${verse.krishna}`),
                          "data-ocid": `youth.verse.${currentVerse + 1}.audio`,
                          className: "mt-3 flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-all duration-200",
                          style: {
                            background: speaking ? "oklch(0.62 0.26 32 / 0.25)" : "oklch(0.20 0.08 268 / 0.5)",
                            border: "1px solid oklch(0.62 0.26 32 / 0.4)",
                            color: "oklch(0.82 0.34 54)"
                          },
                          "aria-label": "Hear Krishna's message",
                          children: speaking ? "🔊 Listening..." : "🔊 Hear Krishna"
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
                      onClick: () => setCurrentVerse((v) => Math.max(0, v - 1)),
                      disabled: currentVerse === 0,
                      "data-ocid": "youth.verse_prev",
                      className: "flex-1 rounded-lg py-3 font-body font-semibold text-sm transition-all disabled:opacity-30",
                      style: {
                        background: "oklch(0.18 0.08 268 / 0.6)",
                        border: "1px solid oklch(0.48 0.24 268 / 0.35)",
                        color: "oklch(0.78 0.10 74)"
                      },
                      children: "← Prev"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.button,
                    {
                      type: "button",
                      onClick: goNextVerse,
                      whileTap: { scale: 0.96 },
                      "data-ocid": "youth.verse_next",
                      className: "flex-[2] rounded-lg py-3 font-display font-bold text-sm transition-all",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                        color: "oklch(0.10 0.06 28)",
                        boxShadow: "0 4px 20px oklch(0.62 0.26 32 / 0.4)",
                        letterSpacing: "0.04em"
                      },
                      children: currentVerse < 17 ? "Next Verse →" : "Complete ✦"
                    }
                  )
                ] })
              ]
            },
            verse.id
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1.5 mt-5 flex-wrap", children: YOUTH_VERSES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setCurrentVerse(v.id - 1);
                setUnlockedVerses((p) => /* @__PURE__ */ new Set([...p, v.id - 1]));
              },
              "data-ocid": `youth.verse_dot.${v.id}`,
              className: "rounded-full transition-all duration-200",
              style: {
                width: currentVerse === v.id - 1 ? "20px" : "8px",
                height: "8px",
                background: unlockedVerses.has(v.id - 1) ? "oklch(0.76 0.32 54)" : "oklch(0.30 0.06 268 / 0.5)"
              },
              "aria-label": `Go to verse ${v.id}`
            },
            v.id
          )) })
        ]
      }
    ),
    activeTab === "verses" && showFinal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8 },
        className: "text-center py-10 px-4",
        "data-ocid": "youth.final_screen",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { scale: [1, 1.2, 1] },
              transition: {
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              },
              style: { fontSize: "3.5rem", marginBottom: "1.5rem" },
              children: "🙏"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-8 mb-6",
              style: {
                background: "linear-gradient(160deg, oklch(0.14 0.10 268 / 0.9), oklch(0.18 0.12 46 / 0.9))",
                border: "1px solid oklch(0.82 0.34 54 / 0.35)",
                boxShadow: "0 0 60px oklch(0.62 0.26 52 / 0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold mb-4",
                    style: {
                      fontSize: "clamp(1.4rem, 4vw, 2rem)",
                      color: "oklch(0.88 0.34 54)",
                      textShadow: "0 0 30px oklch(0.82 0.34 54 / 0.5)"
                    },
                    children: "Hare Krishna 🙏"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display italic text-lg mb-4",
                    style: { color: "oklch(0.82 0.34 54 / 0.9)", lineHeight: 1.7 },
                    children: '"These 18 verses were waiting for you. Krishna placed them here knowing you would come. Hare Krishna."'
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "my-5",
                    style: {
                      height: 1,
                      background: "linear-gradient(to right, transparent, oklch(0.82 0.34 54 / 0.4), transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed",
                    style: { color: "oklch(0.78 0.06 74 / 0.9)" },
                    children: "You have received all 18 sacred teachings. Every one of them was spoken for you — placed here by Krishna before you arrived, waiting for this exact moment in your life."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5, duration: 0.8 },
              className: "rounded-2xl p-7 mb-6",
              style: {
                background: "linear-gradient(135deg, oklch(0.18 0.12 46 / 0.95), oklch(0.14 0.10 268 / 0.95))",
                border: "2px solid oklch(0.82 0.34 54 / 0.4)",
                boxShadow: "0 0 48px oklch(0.62 0.26 52 / 0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs tracking-widest uppercase mb-4",
                    style: { color: "oklch(0.62 0.26 32 / 0.8)" },
                    children: "✦ The Sacred Promise of This Generation ✦"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display italic font-bold leading-relaxed",
                    style: {
                      fontSize: "clamp(1.05rem, 3vw, 1.3rem)",
                      color: "oklch(0.88 0.34 54)",
                      lineHeight: 1.75,
                      textShadow: "0 0 24px oklch(0.82 0.34 54 / 0.4)"
                    },
                    children: [
                      '"One soul becomes ten.',
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.78 0.28 54 / 0.9)" }, children: "Ten become a hundred." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "A hundred become a generation.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "And dharma is restored —",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.72 0.26 32 / 0.95)" }, children: "not by a king or a warrior —" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "but by a young person with a phone,",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "oklch(0.88 0.36 54)" }, children: "a pure heart, and Krishna as his charioteer." }),
                      '"'
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowFinal(false);
                setCurrentVerse(0);
              },
              "data-ocid": "youth.read_again_button",
              className: "rounded-full px-8 py-3.5 font-display font-bold text-sm transition-all duration-300",
              style: {
                background: "linear-gradient(135deg, oklch(0.48 0.24 268), oklch(0.38 0.20 280))",
                color: "oklch(0.92 0.04 74)",
                border: "1px solid oklch(0.60 0.24 268 / 0.5)",
                boxShadow: "0 4px 24px oklch(0.48 0.24 268 / 0.4)"
              },
              children: "🙏 Read Again"
            }
          )
        ]
      }
    ),
    activeTab === "test" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        "data-ocid": "youth.personality_test",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-5 mb-6 text-center",
              style: {
                background: "oklch(0.14 0.10 268 / 0.8)",
                border: "1px solid oklch(0.82 0.34 54 / 0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold mb-1",
                    style: { color: "oklch(0.88 0.34 54)", fontSize: "1.2rem" },
                    children: "🧭 Dharma Personality Test"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: "oklch(0.70 0.06 60 / 0.8)" },
                    children: "5 questions. Krishna reveals your dharmic nature."
                  }
                )
              ]
            }
          ),
          testResult === null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            QUIZ_QUESTIONS.map((q, qi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-5",
                style: {
                  background: "oklch(0.16 0.08 268 / 0.7)",
                  border: "1px solid oklch(0.48 0.24 268 / 0.35)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display font-semibold mb-4",
                      style: {
                        color: "oklch(0.85 0.06 74)",
                        fontSize: "0.95rem"
                      },
                      children: [
                        qi + 1,
                        ". ",
                        q.q
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2", children: q.a.map((ans, ai) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        const n = [...testAnswers];
                        n[qi] = ai;
                        setTestAnswers(n);
                      },
                      "data-ocid": `youth.test.q${qi + 1}.a${ai + 1}`,
                      className: "text-left rounded-lg p-3 font-body text-sm transition-all duration-200",
                      style: {
                        background: testAnswers[qi] === ai ? "oklch(0.62 0.26 32 / 0.25)" : "oklch(0.20 0.08 268 / 0.5)",
                        border: testAnswers[qi] === ai ? "1px solid oklch(0.62 0.26 32 / 0.7)" : "1px solid oklch(0.48 0.24 268 / 0.25)",
                        color: testAnswers[qi] === ai ? "oklch(0.88 0.34 54)" : "oklch(0.72 0.06 60 / 0.9)"
                      },
                      children: ans
                    },
                    `${q.id}-${ans.slice(0, 10)}`
                  )) })
                ]
              },
              q.id
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: submitPersonalityTest,
                disabled: testAnswers.length < QUIZ_QUESTIONS.length,
                "data-ocid": "youth.test.submit_button",
                className: "w-full rounded-xl py-4 font-display font-bold text-sm transition-all disabled:opacity-40",
                style: {
                  background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                  color: "oklch(0.10 0.06 28)",
                  boxShadow: "0 4px 24px oklch(0.62 0.26 32 / 0.35)",
                  letterSpacing: "0.04em"
                },
                children: "🙏 Reveal My Dharma Nature"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "text-center",
              "data-ocid": "youth.test.result",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl p-8 mb-5",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.16 0.10 268 / 0.9), oklch(0.20 0.12 46 / 0.9))",
                      border: "1px solid oklch(0.82 0.34 54 / 0.35)",
                      boxShadow: "0 0 48px oklch(0.62 0.26 52 / 0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: (_a = DHARMA_PERSONALITIES[testResult ?? 0]) == null ? void 0 : _a.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-bold mb-2",
                          style: { fontSize: "1.6rem", color: "oklch(0.88 0.34 54)" },
                          children: (_b = DHARMA_PERSONALITIES[testResult ?? 0]) == null ? void 0 : _b.type
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body mb-4",
                          style: {
                            color: "oklch(0.78 0.06 74 / 0.9)",
                            fontSize: "0.95rem"
                          },
                          children: (_c = DHARMA_PERSONALITIES[testResult ?? 0]) == null ? void 0 : _c.desc
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-sm italic",
                          style: { color: "oklch(0.62 0.26 32 / 0.9)" },
                          children: [
                            "Your guiding verse:",
                            " ",
                            (_d = DHARMA_PERSONALITIES[testResult ?? 0]) == null ? void 0 : _d.verse
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display italic mt-4",
                          style: {
                            color: "oklch(0.82 0.34 54 / 0.85)",
                            fontSize: "0.95rem"
                          },
                          children: '"Krishna placed this dharmic nature in you before you were born. Walk it fully."'
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setTestResult(null);
                      setTestAnswers([]);
                    },
                    "data-ocid": "youth.test.retake_button",
                    className: "rounded-full px-6 py-3 font-body font-semibold text-sm transition-all",
                    style: {
                      background: "oklch(0.18 0.08 268 / 0.7)",
                      color: "oklch(0.70 0.08 74)",
                      border: "1px solid oklch(0.48 0.24 268 / 0.3)"
                    },
                    children: "Retake Test"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    activeTab === "vibe" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        "data-ocid": "youth.vibe_check",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-5 mb-6 text-center",
              style: {
                background: "oklch(0.14 0.10 268 / 0.8)",
                border: "1px solid oklch(0.82 0.34 54 / 0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold mb-1",
                    style: { color: "oklch(0.88 0.34 54)", fontSize: "1.2rem" },
                    children: "✨ Vibe Check with Krishna"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: "oklch(0.70 0.06 60 / 0.8)" },
                    children: "Type how you feel. Krishna responds."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: vibeInput,
                onChange: (e) => setVibeInput(e.target.value),
                placeholder: "How are you feeling right now? What's on your mind? Type anything...",
                "data-ocid": "youth.vibe.input",
                rows: 4,
                className: "w-full rounded-xl p-4 font-body text-sm resize-none focus:outline-none transition-all",
                style: {
                  background: "oklch(0.16 0.08 268 / 0.8)",
                  border: "1px solid oklch(0.48 0.24 268 / 0.45)",
                  color: "oklch(0.85 0.06 74)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: runVibeCheck,
                disabled: !vibeInput.trim(),
                "data-ocid": "youth.vibe.submit_button",
                className: "w-full rounded-xl py-4 font-display font-bold text-sm transition-all disabled:opacity-40",
                style: {
                  background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                  color: "oklch(0.10 0.06 28)",
                  boxShadow: "0 4px 24px oklch(0.62 0.26 32 / 0.35)",
                  letterSpacing: "0.04em"
                },
                children: "🙏 Krishna, speak to me"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: vibeResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "mt-6 rounded-xl p-6",
              style: {
                background: "linear-gradient(135deg, oklch(0.14 0.10 268 / 0.9), oklch(0.18 0.12 46 / 0.9))",
                border: "1px solid oklch(0.62 0.26 32 / 0.4)",
                boxShadow: "0 0 40px oklch(0.62 0.26 52 / 0.2)"
              },
              "data-ocid": "youth.vibe.result",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs uppercase tracking-widest mb-2",
                    style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                    children: "Krishna's message for your vibe —"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs mb-3",
                    style: { color: "oklch(0.55 0.18 268 / 0.8)" },
                    children: [
                      vibeResult.ref,
                      " — ",
                      vibeResult.topic
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display mb-3",
                    style: {
                      fontSize: "1.05rem",
                      color: "oklch(0.88 0.34 54)",
                      lineHeight: 1.5
                    },
                    children: vibeResult.sanskrit
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body font-semibold text-sm mb-4",
                    style: { color: "oklch(0.82 0.06 74)", lineHeight: 1.7 },
                    children: vibeResult.meaning
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display italic",
                    style: {
                      fontSize: "0.95rem",
                      color: "oklch(0.82 0.34 54 / 0.9)",
                      lineHeight: 1.75
                    },
                    children: [
                      "“",
                      vibeResult.krishna,
                      "”"
                    ]
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    activeTab === "challenge" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        "data-ocid": "youth.challenge_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-5 mb-5 text-center",
              style: {
                background: "oklch(0.14 0.10 268 / 0.8)",
                border: "1px solid oklch(0.82 0.34 54 / 0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold mb-1",
                    style: { color: "oklch(0.88 0.34 54)", fontSize: "1.2rem" },
                    children: "⚔️ Rise Like Arjuna — 21 Days"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-3",
                    style: { color: "oklch(0.70 0.06 60 / 0.8)" },
                    children: "21 days. One sacred task per day. Dharma becomes your nature."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-bold",
                      style: { color: "oklch(0.76 0.32 54)", fontSize: "1.4rem" },
                      children: completedDays
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-xs",
                      style: { color: "oklch(0.65 0.08 60 / 0.7)" },
                      children: "/ 21 days completed"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 max-w-[120px] rounded-full overflow-hidden",
                      style: { height: 4, background: "oklch(0.20 0.08 268 / 0.6)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "h-full rounded-full",
                          style: {
                            background: "linear-gradient(to right, oklch(0.62 0.26 32), oklch(0.82 0.34 54))"
                          },
                          animate: { width: `${completedDays / 21 * 100}%` },
                          transition: { duration: 0.5 }
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: CHALLENGE_DAYS.map((day, i) => {
            const done = challengeProgress[day.day] ?? false;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: i % 2 === 0 ? -12 : 12 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.03, duration: 0.4 },
                className: "rounded-xl p-4 flex items-start gap-4 transition-all duration-200",
                style: {
                  background: done ? "oklch(0.62 0.26 32 / 0.12)" : "oklch(0.16 0.08 268 / 0.7)",
                  border: done ? "1px solid oklch(0.62 0.26 32 / 0.5)" : "1px solid oklch(0.48 0.24 268 / 0.3)"
                },
                "data-ocid": `youth.challenge.day.${day.day}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => toggleChallenge(day.day),
                      "data-ocid": `youth.challenge.check.${day.day}`,
                      className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs transition-all duration-200",
                      style: {
                        background: done ? "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))" : "oklch(0.20 0.08 268 / 0.5)",
                        border: done ? "none" : "2px solid oklch(0.48 0.24 268 / 0.4)",
                        color: done ? "oklch(0.10 0.06 28)" : "oklch(0.55 0.18 268 / 0.8)"
                      },
                      "aria-label": done ? `Unmark day ${day.day}` : `Complete day ${day.day}`,
                      children: done ? "✓" : day.day
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-display font-bold text-sm",
                        style: {
                          color: done ? "oklch(0.82 0.34 54)" : "oklch(0.85 0.06 74)"
                        },
                        children: [
                          "Day ",
                          day.day,
                          ": ",
                          day.title
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-sm mt-0.5 leading-relaxed",
                        style: {
                          color: done ? "oklch(0.65 0.18 52 / 0.8)" : "oklch(0.68 0.06 60 / 0.85)"
                        },
                        children: day.task
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs mt-1 italic",
                        style: { color: "oklch(0.55 0.18 268 / 0.7)" },
                        children: day.verse
                      }
                    )
                  ] })
                ]
              },
              day.day
            );
          }) })
        ]
      }
    ),
    activeTab === "exam" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        "data-ocid": "youth.exam_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-6 mb-5 text-center",
              style: {
                background: "oklch(0.14 0.10 268 / 0.8)",
                border: "1px solid oklch(0.82 0.34 54 / 0.25)",
                boxShadow: "0 0 40px oklch(0.48 0.24 268 / 0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "2.5rem", marginBottom: "0.5rem" }, children: "📚" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold mb-2",
                    style: { color: "oklch(0.88 0.34 54)", fontSize: "1.3rem" },
                    children: "Exam Warrior Mode"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: "oklch(0.70 0.06 60 / 0.85)" },
                    children: "Krishna's guidance for academic pressure, focus, and performance anxiety."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: EXAM_CARDS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1, duration: 0.5 },
              className: "rounded-xl overflow-hidden",
              style: {
                background: "oklch(0.16 0.08 268 / 0.75)",
                border: "1px solid oklch(0.48 0.24 268 / 0.35)"
              },
              "data-ocid": `youth.exam.card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.4rem" }, children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display font-bold text-sm",
                        style: { color: "oklch(0.88 0.34 54)" },
                        children: item.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.55 0.18 268 / 0.8)" },
                        children: item.verse
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed mb-3",
                    style: { color: "oklch(0.78 0.06 74 / 0.9)" },
                    children: item.guidance
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-lg p-3",
                    style: {
                      background: "oklch(0.14 0.10 46 / 0.6)",
                      border: "1px solid oklch(0.62 0.26 32 / 0.3)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-xs italic leading-relaxed",
                        style: { color: "oklch(0.82 0.34 54 / 0.85)" },
                        children: [
                          "🙏 ",
                          item.practice
                        ]
                      }
                    )
                  }
                )
              ] })
            },
            item.id
          )) })
        ]
      }
    )
  ] });
}
export {
  YouthPage
};
