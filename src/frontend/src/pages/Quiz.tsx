import { usePoints } from "@/hooks/use-points";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface QuizQuestion {
  id: string;
  level: "easy" | "medium" | "hard";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  verse?: string;
}

const QUESTIONS: QuizQuestion[] = [
  // ─── EASY (11 pts) ─────────────────────────────────────────────────────────
  {
    id: "e1",
    level: "easy",
    question: "How many chapters are in the Bhagavad Gita?",
    options: ["14", "16", "18", "20"],
    correct: 2,
    explanation:
      "The Bhagavad Gita has 18 chapters, mirroring the 18 days of the Kurukshetra war and the 18 Parvas of the Mahabharata.",
    verse: "BG 1.1",
  },
  {
    id: "e2",
    level: "easy",
    question: "How many verses (shlokas) does the Bhagavad Gita contain?",
    options: ["500", "600", "700", "800"],
    correct: 2,
    explanation:
      "The Bhagavad Gita contains 700 shlokas, distributed across 18 chapters.",
    verse: "",
  },
  {
    id: "e3",
    level: "easy",
    question: "Who narrates the Bhagavad Gita to Arjuna?",
    options: ["Vyasa", "Dhritarashtra", "Sanjaya", "Lord Krishna"],
    correct: 3,
    explanation:
      "Lord Krishna, acting as Arjuna's charioteer, narrates the entire Gita on the Kurukshetra battlefield.",
    verse: "BG 2.1",
  },
  {
    id: "e4",
    level: "easy",
    question: "On which battlefield was the Bhagavad Gita spoken?",
    options: ["Panipat", "Kurukshetra", "Lanka", "Mathura"],
    correct: 1,
    explanation:
      "The Bhagavad Gita was spoken on the sacred field of Kurukshetra (Dharmakshetra) before the Mahabharata war.",
    verse: "BG 1.1",
  },
  {
    id: "e5",
    level: "easy",
    question: "What is the famous opening verse of the Gita about?",
    options: [
      "Krishna's birth",
      "Arjuna's doubt",
      "Dhritarashtra asking about the armies",
      "Sanjaya's vision",
    ],
    correct: 2,
    explanation:
      "Dhritarashtra opens by asking Sanjaya what his sons (Kauravas) and the Pandavas are doing on the Kurukshetra battlefield.",
    verse: "BG 1.1",
  },
  {
    id: "e6",
    level: "easy",
    question: "What does 'Karma Yoga' primarily teach?",
    options: [
      "Renouncing all work",
      "Acting without attachment to results",
      "Performing rituals",
      "Seeking pleasure",
    ],
    correct: 1,
    explanation:
      "'Karmaṇy-evādhikāras te mā phaleṣu kadācana' — You have the right to act, never to the fruits thereof. (BG 2.47)",
    verse: "BG 2.47",
  },
  {
    id: "e7",
    level: "easy",
    question:
      "In which chapter does Krishna reveal His Vishvarupa (cosmic form)?",
    options: ["Chapter 9", "Chapter 10", "Chapter 11", "Chapter 12"],
    correct: 2,
    explanation:
      "Krishna reveals His magnificent universal form (Vishvarupa) in Chapter 11 at Arjuna's request.",
    verse: "BG 11.9",
  },
  {
    id: "e8",
    level: "easy",
    question:
      "What Sanskrit word means 'eternal soul' or 'the self' in the Gita?",
    options: ["Karma", "Dharma", "Atman", "Maya"],
    correct: 2,
    explanation:
      "Atman refers to the eternal, individual soul that is indestructible and beyond birth and death.",
    verse: "BG 2.20",
  },
  {
    id: "e9",
    level: "easy",
    question:
      "Which chapter of the Gita is called 'Bhakti Yoga' (path of devotion)?",
    options: ["Chapter 6", "Chapter 10", "Chapter 12", "Chapter 15"],
    correct: 2,
    explanation:
      "Chapter 12 is dedicated to Bhakti Yoga — the path of loving devotion to the Lord.",
    verse: "BG 12.1",
  },
  {
    id: "e10",
    level: "easy",
    question: "What does Krishna promise in BG 18.66 — the final teaching?",
    options: [
      "Victory in battle",
      "Liberation from all sins and deliverance",
      "Wealth and prosperity",
      "Long life",
    ],
    correct: 1,
    explanation:
      "'Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja' — Surrender to me alone; I shall deliver you from all sins.",
    verse: "BG 18.66",
  },
  {
    id: "e11",
    level: "easy",
    question: "What is 'Maya' in Vedic philosophy?",
    options: [
      "Divine grace",
      "Sacred scripture",
      "Illusion that veils reality",
      "Supreme consciousness",
    ],
    correct: 2,
    explanation:
      "Maya is the divine illusion or veil that makes the temporary material world seem real and causes souls to forget their divine nature.",
    verse: "BG 7.14",
  },
  {
    id: "e12",
    level: "easy",
    question: "Who composed the Mahabharata, in which the Gita appears?",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    correct: 2,
    explanation:
      "Sage Vyasa (Krishna Dvaipayana) composed the Mahabharata, which contains the Bhagavad Gita in the Bhishma Parva.",
    verse: "",
  },
  {
    id: "e13",
    level: "easy",
    question: "What are the three gunas described in the Gita?",
    options: [
      "Satya, Dharma, Karma",
      "Sattva, Rajas, Tamas",
      "Brahma, Vishnu, Shiva",
      "Jnana, Bhakti, Karma",
    ],
    correct: 1,
    explanation:
      "The three gunas (qualities of nature) are Sattva (purity/light), Rajas (passion/activity), and Tamas (inertia/darkness). Chapter 14 explains them in depth.",
    verse: "BG 14.5",
  },
  {
    id: "e14",
    level: "easy",
    question:
      "In the Gita, what does Krishna say about the soul being wounded by weapons?",
    options: [
      "Weapons destroy it instantly",
      "Fire cannot burn it",
      "The soul cannot be cut, burned, wetted, or dried",
      "Only sacred weapons can harm it",
    ],
    correct: 2,
    explanation:
      "'Nainaṁ chindanti śastrāṇi' — no weapon can cut it, fire cannot burn it, water cannot wet it, wind cannot dry it. (BG 2.23)",
    verse: "BG 2.23",
  },
  {
    id: "e15",
    level: "easy",
    question: "What is 'Moksha' according to the Gita?",
    options: [
      "Worldly success",
      "Liberation from the cycle of birth and death",
      "Earning merit through rituals",
      "Union with nature",
    ],
    correct: 1,
    explanation:
      "Moksha is the ultimate liberation — freedom from the cycle of samsara (birth, death, and rebirth), achieved through realizing one's eternal union with the Supreme.",
    verse: "BG 18.66",
  },
  {
    id: "e16",
    level: "easy",
    question: "Which yoga does Chapter 6 of the Gita primarily describe?",
    options: ["Karma Yoga", "Jnana Yoga", "Dhyana Yoga", "Bhakti Yoga"],
    correct: 2,
    explanation:
      "Chapter 6 is called Dhyana Yoga — the yoga of meditation. Krishna teaches Arjuna techniques to still the restless mind.",
    verse: "BG 6.10",
  },
  {
    id: "e17",
    level: "easy",
    question: "What does 'Dharma' mean in the context of the Gita?",
    options: [
      "Religious ritual only",
      "Righteous duty and universal law",
      "Payment of debt",
      "Physical strength",
    ],
    correct: 1,
    explanation:
      "Dharma encompasses righteous duty, moral law, and one's sacred obligation according to one's nature, role, and stage of life.",
    verse: "BG 3.35",
  },
  {
    id: "e18",
    level: "easy",
    question: "In Chapter 4, how does Krishna describe His own birth?",
    options: [
      "He was born like ordinary humans",
      "He takes birth whenever dharma declines to restore righteousness",
      "He never takes birth",
      "His birth is determined by karma",
    ],
    correct: 1,
    explanation:
      "'Yadā yadā hi dharmasya glānir bhavati Bhārata' — Whenever dharma declines and adharma rises, I manifest myself. (BG 4.7-8)",
    verse: "BG 4.7",
  },

  // ─── MEDIUM (21 pts) ───────────────────────────────────────────────────────
  {
    id: "m1",
    level: "medium",
    question: "What is 'Nishkama Karma' as taught in the Gita?",
    options: [
      "Performing rituals for heaven",
      "Action performed without desire for personal fruit",
      "Renouncing all action",
      "Acting only for family benefit",
    ],
    correct: 1,
    explanation:
      "Nishkama Karma is selfless action — doing one's duty without attachment to rewards. 'Let right deeds be thy motive, not the fruit which comes from them.' (BG 2.47)",
    verse: "BG 2.47",
  },
  {
    id: "m2",
    level: "medium",
    question:
      "Which chapter contains Krishna's declaration of His divine manifestations (Vibhutis)?",
    options: ["Chapter 7", "Chapter 9", "Chapter 10", "Chapter 11"],
    correct: 2,
    explanation:
      "Chapter 10 (Vibhuti Yoga) contains Krishna's famous declaration of His infinite divine manifestations — 'I am the Ganges among rivers, the Himalayas among mountains...'",
    verse: "BG 10.1",
  },
  {
    id: "m3",
    level: "medium",
    question:
      "What are the 'Kshetra' and 'Kshetrajna' described in Chapter 13?",
    options: [
      "Heaven and Earth",
      "Body (the field) and the Soul (the knower of the field)",
      "Battle and warrior",
      "Teacher and student",
    ],
    correct: 1,
    explanation:
      "Kshetra is the field (body/matter), and Kshetrajna is the Knower of the field (the soul/consciousness). Krishna declares himself the ultimate Kshetrajna.",
    verse: "BG 13.1",
  },
  {
    id: "m4",
    level: "medium",
    question:
      "In BG 9.22, what does Krishna promise to devotees who worship Him exclusively?",
    options: [
      "Wealth and power",
      "He carries what they lack and preserves what they have",
      "Victory in all battles",
      "Long life and health",
    ],
    correct: 1,
    explanation:
      "'Ananyāś cintayanto māṁ' — For those who worship me with exclusive devotion, I personally carry what they lack and preserve what they have. (BG 9.22)",
    verse: "BG 9.22",
  },
  {
    id: "m5",
    level: "medium",
    question:
      "What is the teaching on 'Svadharma' versus 'Paradharma' in BG 3.35?",
    options: [
      "Follow others' duties for success",
      "One's own duty performed imperfectly is better than another's duty performed perfectly",
      "Duty is relative and can be exchanged",
      "All duties are equal",
    ],
    correct: 1,
    explanation:
      "'Śreyān sva-dharmo viguṇaḥ para-dharmāt svanuṣṭhitāt' — Better is one's own dharma, imperfectly performed, than the dharma of another well performed.",
    verse: "BG 3.35",
  },
  {
    id: "m6",
    level: "medium",
    question: "What does Krishna mean by 'Yoga' in the Gita's broadest sense?",
    options: [
      "Physical exercise postures",
      "Union with the Divine through disciplined action, knowledge, or devotion",
      "Breathing techniques only",
      "Ascetic practices",
    ],
    correct: 1,
    explanation:
      "Yoga in the Gita means union with the Supreme — achieved through the path of karma (action), jnana (knowledge), bhakti (devotion), or dhyana (meditation).",
    verse: "BG 2.48",
  },
  {
    id: "m7",
    level: "medium",
    question: "What are the three doors to hell mentioned in Chapter 16?",
    options: [
      "Pride, greed, attachment",
      "Lust, anger, greed",
      "Fear, doubt, laziness",
      "Envy, cruelty, deceit",
    ],
    correct: 1,
    explanation:
      "'Tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ — kāmaḥ krodhas tathā lobhaḥ' — Lust, anger, and greed are the three gates to hell. (BG 16.21)",
    verse: "BG 16.21",
  },
  {
    id: "m8",
    level: "medium",
    question:
      "In BG 2.62-63, what chain of destruction does Krishna describe starting from contemplating sense objects?",
    options: [
      "Contemplation → pleasure → virtue → moksha",
      "Contemplation → attachment → desire → anger → delusion → loss of memory → loss of intelligence → destruction",
      "Desire → renunciation → peace → moksha",
      "Attachment → karma → rebirth → suffering",
    ],
    correct: 1,
    explanation:
      "Thinking of sense objects creates attachment → attachment becomes desire → frustrated desire becomes anger → anger creates delusion → delusion destroys memory → loss of memory destroys intelligence → that destroys the person.",
    verse: "BG 2.62",
  },
  {
    id: "m9",
    level: "medium",
    question:
      "What does BG 4.11 teach about Krishna's response to devotees of all paths?",
    options: [
      "Only Bhakti devotees are rewarded",
      "Krishna rewards those who surrender",
      "As devotees approach Him, He rewards them accordingly — all paths lead to Him",
      "Only the knowledgeable attain liberation",
    ],
    correct: 2,
    explanation:
      "'Ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham' — As devotees approach me, I reward them accordingly. All paths, in all ways, lead to me.",
    verse: "BG 4.11",
  },
  {
    id: "m10",
    level: "medium",
    question: "What is the 'Peepul tree' (Ashvattha) metaphor in Chapter 15?",
    options: [
      "Symbol of worldly desires",
      "The tree of samsara with roots above and branches below — to be cut with knowledge",
      "Symbol of prosperity",
      "The tree of eternal life",
    ],
    correct: 1,
    explanation:
      "Chapter 15 describes the imperishable Ashvattha tree of samsara — roots upward (in Brahman), branches downward. One must cut this tree of attachment with the axe of non-attachment.",
    verse: "BG 15.1",
  },
  {
    id: "m11",
    level: "medium",
    question:
      "What does Krishna say about those born in divine versus demoniac nature (BG 16)?",
    options: [
      "Both lead to liberation",
      "Divine nature leads to liberation; demoniac nature to bondage",
      "Demoniac nature is more powerful",
      "Nature changes through effort alone",
    ],
    correct: 1,
    explanation:
      "BG 16.5 — 'Daivī sampad vimokṣāya nibandhāyāsurī matā' — Divine qualities lead to liberation; demoniac qualities lead to bondage.",
    verse: "BG 16.5",
  },
  {
    id: "m12",
    level: "medium",
    question: "In BG 6.5, what does Krishna teach about self-upliftment?",
    options: [
      "Depend on a guru only",
      "The self is both the friend and the enemy of the self — elevate yourself",
      "External circumstances determine our fate",
      "Only God can uplift us",
    ],
    correct: 1,
    explanation:
      "'Uddhared ātmanātmānaṁ nātmānam avasādayet' — One must elevate, not degrade the self. The mind is both friend and enemy of the self.",
    verse: "BG 6.5",
  },
  {
    id: "m13",
    level: "medium",
    question:
      "What three categories of faith (shraddha) does Chapter 17 describe?",
    options: [
      "Vedic, Tantric, Folk",
      "Sattvic, Rajasic, Tamasic",
      "Devotional, Philosophical, Ritual",
      "Divine, Human, Demonic",
    ],
    correct: 1,
    explanation:
      "Chapter 17 describes three kinds of faith corresponding to the three gunas — Sattvic faith worships gods, Rajasic faith worships demigods and demons, Tamasic faith worships ghosts.",
    verse: "BG 17.1",
  },
  {
    id: "m14",
    level: "medium",
    question:
      "What is the significance of 'OM TAT SAT' mentioned at the end of the Gita's chapters?",
    options: [
      "A war cry",
      "The three-fold designation of Brahman — Absolute Truth",
      "Names of three gods",
      "A mantra for protection",
    ],
    correct: 1,
    explanation:
      "'Om Tat Sat' — these three words are the designation of the Absolute Truth (Brahman). 'Om' is the symbol of Brahman, 'Tat' means 'That' (transcendence), 'Sat' means truth/existence.",
    verse: "BG 17.23",
  },
  {
    id: "m15",
    level: "medium",
    question:
      "What does BG 18.78 — the final verse — promise when Krishna and Arjuna are together?",
    options: [
      "Peace after war",
      "Where there is Krishna (yoga) and Arjuna (dharma), there is victory, prosperity, and righteousness",
      "The war will end peacefully",
      "Liberation for all warriors",
    ],
    correct: 1,
    explanation:
      "The final verse: 'Where Krishna the Lord of Yoga and Arjuna the bearer of the bow are present — there is victory, prosperity, righteousness, and eternal order.'",
    verse: "BG 18.78",
  },
  {
    id: "m16",
    level: "medium",
    question:
      "What does the Gita say about the relationship between the individual soul and the Supreme Soul?",
    options: [
      "They are completely separate forever",
      "They are identical in all ways",
      "The individual soul is part of the Supreme but distinct — both one and different",
      "The individual soul merges and loses identity",
    ],
    correct: 2,
    explanation:
      "The Gita teaches achintya-bhedābheda — the soul is simultaneously one with and different from the Supreme (an eternal part, like a spark of the same fire).",
    verse: "BG 15.7",
  },
  {
    id: "m17",
    level: "medium",
    question: "In BG 7.19, what does Krishna say about the rare great soul?",
    options: [
      "Such souls are born in royal families",
      "After many births of knowledge, a great soul surrenders to Krishna realizing 'Vasudevah sarvam iti'",
      "A great soul renounces the world",
      "Such souls are free from all desires",
    ],
    correct: 1,
    explanation:
      "'Bahūnāṁ janmanām ante jñānavān māṁ prapadyate' — After many births of seeking wisdom, one who realizes 'Vasudeva is everything' surrenders to me. Such great souls are very rare.",
    verse: "BG 7.19",
  },
  {
    id: "m18",
    level: "medium",
    question: "What is the teaching of 'Lokasamgraha' in the Gita?",
    options: [
      "Saving oneself first",
      "The welfare and cohesion of the world — acting for the good of all beings",
      "Gathering worldly resources",
      "Creating a following",
    ],
    correct: 1,
    explanation:
      "Lokasamgraha means the welfare and holding-together of the world. Krishna tells Arjuna that leaders must perform their duty to inspire others and maintain the order of society. (BG 3.20-21)",
    verse: "BG 3.20",
  },

  // ─── HARD (51 pts) ─────────────────────────────────────────────────────────
  {
    id: "h1",
    level: "hard",
    question:
      "In BG 13.14, how does Krishna describe the Supreme as the knower of the field?",
    options: [
      "Present in one place only",
      "Sensing through all senses yet without sense organs; detached yet supporting all; beyond all gunas yet experiencing them",
      "Visible to the pure-hearted",
      "Known through scripture alone",
    ],
    correct: 1,
    explanation:
      "BG 13.14 — The Supreme 'has hands and feet everywhere, eyes and faces everywhere, ears everywhere — pervading everything in the universe, existing without sense organs.'",
    verse: "BG 13.14",
  },
  {
    id: "h2",
    level: "hard",
    question:
      "What is the precise Sanskrit teaching of BG 2.20 about the soul?",
    options: [
      "Na hanyate hanyamāne śarīre",
      "Na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ",
      "Karmaṇy evādhikāras te",
      "Ahaṁ sarvasya prabhavo",
    ],
    correct: 1,
    explanation:
      "'Na jāyate mriyate vā kadācin...' — The soul is never born nor dies; it has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.",
    verse: "BG 2.20",
  },
  {
    id: "h3",
    level: "hard",
    question:
      "Chapter 14 describes Sattvic, Rajasic, and Tamasic food. Which of these are Sattvic?",
    options: [
      "Pungent, bitter, salty, very hot foods",
      "Juicy, fatty, wholesome, agreeable foods that promote happiness and longevity",
      "Putrid, stale, leftover foods",
      "Excessively spicy and stimulating foods",
    ],
    correct: 1,
    explanation:
      "BG 17.8 — Sattvic foods are those that promote longevity, virtue, strength, health, happiness, and joy — juicy, smooth, substantial, and pleasing.",
    verse: "BG 17.8",
  },
  {
    id: "h4",
    level: "hard",
    question: "In BG 8.17, how long is Brahma's day (Kalpa)?",
    options: [
      "1 million years",
      "100 million years",
      "1,000 mahayugas (4.32 billion years)",
      "1 billion years",
    ],
    correct: 2,
    explanation:
      "'Sahasra-yuga-paryantam ahar yad brahmaṇo viduḥ' — Those who know that Brahma's day lasts for a thousand yugas (mahayugas), and his night is equally long — they truly understand time and day.",
    verse: "BG 8.17",
  },
  {
    id: "h5",
    level: "hard",
    question: "BG 3.27 states 'Prakṛtyaiva ca karmāṇi' — what does this mean?",
    options: [
      "We choose all our actions freely",
      "All actions are performed by the modes of material nature; only the ego-deluded mind thinks 'I am the doer'",
      "God performs all our actions",
      "Nature is inferior to spirit",
    ],
    correct: 1,
    explanation:
      "BG 3.27 — All activities are carried out by the three gunas of material nature. One who is bewildered by ego-identification thinks 'I am the doer.'",
    verse: "BG 3.27",
  },
  {
    id: "h6",
    level: "hard",
    question:
      "In Chapter 11, when Arjuna asks for Krishna's normal form back, what does Krishna declare?",
    options: [
      "The cosmic form is his true form",
      "The cosmic form has never been seen by Vedic study, austerity, or charity — only through exclusive devotion",
      "Only kings may see His true form",
      "His form can be seen through meditation alone",
    ],
    correct: 1,
    explanation:
      "BG 11.53-54 — 'Not by the Vedas, nor by austerity, nor by gift, nor by ritual can I be seen in this form. But through exclusive devotion (ananya-bhakti), I can be known and seen and entered into.'",
    verse: "BG 11.53",
  },
  {
    id: "h7",
    level: "hard",
    question: "What are the five elements of action described in BG 18.14?",
    options: [
      "Body, soul, fire, water, earth",
      "The body (adhishthanam), the doer, the various senses, efforts (functions), and the Supersoul (daiva)",
      "Thought, word, deed, time, cause",
      "Desire, knowledge, effort, result, memory",
    ],
    correct: 1,
    explanation:
      "BG 18.14 — Adhishthanam (the body/seat), karta (the doer), karanas (the senses), cheshta (the various kinds of effort), and daiva (the Supersoul) — these five are the causes of all action.",
    verse: "BG 18.14",
  },
  {
    id: "h8",
    level: "hard",
    question:
      "BG 15.15 states: 'Sarvasya cāhaṁ hṛdi sanniviṣṭo...' What does this mean?",
    options: [
      "God is only in temples",
      "I am seated in the hearts of all beings; from me come memory, knowledge, and forgetfulness; I am the author of all Vedas and their knower",
      "The soul resides in the heart",
      "Krishna speaks to everyone in dreams",
    ],
    correct: 1,
    explanation:
      "BG 15.15 — Krishna is the Supersoul (Paramatma) seated in every heart — giving memory and taking it away, and is the object of all Vedic knowledge.",
    verse: "BG 15.15",
  },
  {
    id: "h9",
    level: "hard",
    question: "What is 'Brahma-nirvana' as mentioned in Chapter 5 of the Gita?",
    options: [
      "Death of the physical body",
      "Extinction of the ego in the absolute — the liberated state of merging in Brahman consciousness",
      "A state of dreamless sleep",
      "The final judgment of karma",
    ],
    correct: 1,
    explanation:
      "Brahma-nirvana is the blissful peace of liberation — the extinguishing of the ego-self and abidance in pure Brahman consciousness, described as the highest peace in Chapter 5.",
    verse: "BG 5.24",
  },
  {
    id: "h10",
    level: "hard",
    question:
      "In BG 4.24, how does Krishna describe the nature of the transcendental act of offering?",
    options: [
      "Offering is material exchange",
      "Brahman is the ritual, Brahman is the offering, Brahman is offered into Brahman's fire — reaching Brahman through Brahman",
      "Rituals must be performed outwardly",
      "The priest alone performs sacrifice",
    ],
    correct: 1,
    explanation:
      "BG 4.24 — 'Brahmarpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam' — Everything is Brahman: the ladle, the oblation, the fire, the act of offering, and the goal.",
    verse: "BG 4.24",
  },
  {
    id: "h11",
    level: "hard",
    question:
      "What is the teaching of 'Para Prakriti' versus 'Apara Prakriti' in Chapter 7?",
    options: [
      "Superior and inferior castes",
      "Apara prakriti is the inferior material nature (8 elements); Para prakriti is the superior spiritual nature (the living beings)",
      "Ancient and modern knowledge",
      "External and internal meditation",
    ],
    correct: 1,
    explanation:
      "BG 7.4-5 — Krishna's inferior energy (apara prakriti) consists of earth, water, fire, air, ether, mind, intelligence, and ego. His superior energy (para prakriti) is the conscious living beings who sustain the universe.",
    verse: "BG 7.4",
  },
  {
    id: "h12",
    level: "hard",
    question:
      "How does BG 2.14 describe the nature of pleasure and pain, using the metaphor of seasons?",
    options: [
      "They are permanent and must be accepted",
      "The contacts of the senses with objects are impermanent, like winter and summer — one must learn to tolerate them without being disturbed",
      "Pleasure is divine, pain is demonic",
      "Pain comes from past karma alone",
    ],
    correct: 1,
    explanation:
      "'Mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ' — Sense contacts (producing pleasure and pain) come and go like winter and summer. Learn to tolerate them without disturbance, O Arjuna.",
    verse: "BG 2.14",
  },
  {
    id: "h13",
    level: "hard",
    question:
      "In BG 6.30, what does Krishna promise to one who sees Him everywhere?",
    options: [
      "Such a person attains power",
      "He who sees Me in all beings and sees all beings in Me — he never loses sight of Me and I never lose sight of him",
      "Vision of God requires years of penance",
      "Such a person becomes omniscient",
    ],
    correct: 1,
    explanation:
      "'Yo māṁ paśyati sarvatra sarvaṁ ca mayi paśyati' — One who sees Me everywhere and sees everything in Me — I am never lost to him, nor is he ever lost to Me.",
    verse: "BG 6.30",
  },
  {
    id: "h14",
    level: "hard",
    question:
      "According to BG 18.41-44, what determines the four varnas (social orders)?",
    options: [
      "Birth alone",
      "Qualities (gunas) and actions (karma) arising from one's nature — not birth",
      "Government appointment",
      "Wealth",
    ],
    correct: 1,
    explanation:
      "BG 18.41 — 'Brāhmaṇa-kṣatriya-viśāṁ śūdrāṇāṁ ca parantapa karma svabhāva-jaṁ vibhaktam' — The duties of Brahmanas, Kshatriyas, Vaishyas and Shudras are divided according to qualities born of their own nature.",
    verse: "BG 18.41",
  },
  {
    id: "h15",
    level: "hard",
    question:
      "In the Gita's cosmology (BG 8.20-21), what lies beyond even the unmanifest?",
    options: [
      "Material universe",
      "Another material realm",
      "The supreme unmanifest — the eternal, imperishable abode which, once reached, is never abandoned",
      "The realm of demigods",
    ],
    correct: 2,
    explanation:
      "BG 8.20-21 — Beyond the unmanifest (avyakta) is another higher unmanifest — the eternal supreme abode (parama dhama). 'Whoever reaches it never returns to material existence.'",
    verse: "BG 8.20",
  },
  {
    id: "h16",
    level: "hard",
    question:
      "What is the significance of the phrase 'Aham brahmasmi' in relation to the Gita's teachings?",
    options: [
      "Aham brahmasmi is Krishna's own declaration",
      "It expresses the realization of the soul's identity with Brahman (consciousness), consistent with the Gita's non-dual dimension",
      "It means God and creation are completely one",
      "It is a rejection of the personal God",
    ],
    correct: 1,
    explanation:
      "While the Gita acknowledges both personal and impersonal aspects of the Absolute, 'Aham brahmasmi' (I am Brahman) represents the realization of the soul as pure consciousness — one aspect of the Gita's full teaching on the Atman-Brahman relationship.",
    verse: "BG 5.17",
  },
  {
    id: "h17",
    level: "hard",
    question:
      "BG 9.25 describes different destinations based on worship. What does it say?",
    options: [
      "All worshippers reach the same place",
      "Worshippers of gods go to gods; of ancestors to ancestors; of beings to beings; but My devotees come to Me",
      "Only highest castes reach God",
      "After death, everyone merges into formlessness",
    ],
    correct: 1,
    explanation:
      "'Yānti deva-vratā devān pitṛn yānti pitṛ-vratāḥ' — Those who worship the gods go to the gods; those who worship ancestors go to ancestors; those who worship spirits go to spirits; but My devotees come to Me.",
    verse: "BG 9.25",
  },
  {
    id: "h18",
    level: "hard",
    question:
      "In the famous last verse of the Gita (BG 18.78), what four outcomes are declared where Yogeshvara and Arjuna meet?",
    options: [
      "Peace, love, joy, liberation",
      "Victory (vijaya), prosperity (bhuti), righteousness (niti), and unchanging moral order (shri/niti)",
      "Dharma, artha, kama, moksha",
      "Strength, wisdom, devotion, renunciation",
    ],
    correct: 1,
    explanation:
      "'Yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ tatra śrīr vijayo bhūtir dhruvā nītir matir mama' — Where Krishna (Lord of Yoga) and Arjuna (the archer) are together — there is beauty, victory, wealth, and sound morality.",
    verse: "BG 18.78",
  },
];

const POINTS_BY_LEVEL = { easy: 11, medium: 21, hard: 51 };
const DIFFICULTY_LABEL = {
  easy: "Shloka Shishya",
  medium: "Dharma Seeker",
  hard: "Gita Pandit",
};
const DIFFICULTY_COLOR = {
  easy: "oklch(0.55 0.22 150)",
  medium: "oklch(0.60 0.24 48)",
  hard: "oklch(0.50 0.24 32)",
};

type DifficultyLevel = "easy" | "medium" | "hard";

// Lotus petal burst component — flower petals (not glitter)
const PETAL_POSITIONS = [
  { l: 12, t: 15 },
  { l: 25, t: 8 },
  { l: 40, t: 12 },
  { l: 55, t: 7 },
  { l: 70, t: 14 },
  { l: 83, t: 9 },
  { l: 90, t: 22 },
  { l: 88, t: 38 },
  { l: 85, t: 55 },
  { l: 80, t: 72 },
  { l: 68, t: 82 },
  { l: 52, t: 88 },
  { l: 36, t: 85 },
  { l: 20, t: 80 },
  { l: 10, t: 68 },
  { l: 8, t: 50 },
  { l: 10, t: 33 },
  { l: 15, t: 18 },
  { l: 45, t: 50 },
  { l: 60, t: 45 },
  { l: 30, t: 55 },
  { l: 72, t: 35 },
  { l: 50, t: 25 },
  { l: 35, t: 70 },
];

function LotusBurst({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0 }}
        >
          {PETAL_POSITIONS.map((pos, i) => {
            const petalId = `petal-${i}`;
            const colors = [
              "oklch(0.88 0.22 340)", // pink
              "oklch(0.92 0.18 50)", // saffron
              "oklch(0.86 0.28 54)", // gold
              "oklch(0.82 0.20 320)", // magenta
              "oklch(0.90 0.16 80)", // yellow
            ];
            return (
              <motion.div
                key={petalId}
                className="absolute"
                style={{
                  left: `${pos.l}%`,
                  top: `${pos.t}%`,
                  fontSize: `${0.8 + (i % 3) * 0.3}rem`,
                  color: colors[i % 5],
                  filter: "drop-shadow(0 0 4px currentColor)",
                }}
                initial={{ scale: 0, opacity: 1, rotate: 0 }}
                animate={{
                  scale: [0, 1.4, 0.8, 0],
                  opacity: [1, 1, 0.7, 0],
                  rotate: [
                    (i % 2 === 0 ? -1 : 1) * 15 * i,
                    (i % 2 === 0 ? 1 : -1) * 25 * i,
                  ],
                  x: [
                    (i % 2 === 0 ? -1 : 1) * (15 + i * 3),
                    (i % 2 === 0 ? -1 : 1) * (30 + i * 5),
                  ],
                  y: [-(10 + i * 2), -(25 + i * 4)],
                }}
                transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
              >
                {["🌸", "🌺", "🪷", "✿", "❀"][i % 5]}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Daily Challenge questions — 5 per day, rotating
const DAILY_CHALLENGE_QUESTIONS: QuizQuestion[] = [
  {
    id: "dc1",
    level: "medium",
    question:
      "What is the meaning of 'Nishkama Karma' — the central teaching of the Gita?",
    options: [
      "Acting only for personal gain",
      "Action performed without attachment to the fruits",
      "Renouncing all worldly activity",
      "Performing charity exclusively",
    ],
    correct: 1,
    explanation:
      "Nishkama Karma means selfless action — doing one's duty with full dedication but releasing all attachment to results. (BG 2.47)",
    verse: "BG 2.47",
  },
  {
    id: "dc2",
    level: "medium",
    question:
      "In BG 9.22, what specific promise does Krishna make to His sincere devotees?",
    options: [
      "They will become wealthy",
      "He carries what they lack and preserves what they have",
      "They will never face difficulties",
      "They will attain heaven after death",
    ],
    correct: 1,
    explanation:
      "'Ananyāś cintayanto māṁ... yogakṣemaṁ vahāmy aham' — For those who worship me exclusively, I personally carry what they lack and preserve what they have.",
    verse: "BG 9.22",
  },
  {
    id: "dc3",
    level: "easy",
    question: "What event triggered Krishna to deliver the Bhagavad Gita?",
    options: [
      "Arjuna asked about the nature of the soul",
      "Arjuna dropped his bow and refused to fight",
      "Dhritarashtra asked for advice",
      "Yudhishthira prayed for guidance",
    ],
    correct: 1,
    explanation:
      "Arjuna, overcome with grief and confusion at seeing his relatives on the battlefield, dropped his bow and refused to fight. Krishna then spoke the entire Gita to restore his understanding.",
    verse: "BG 1.47",
  },
  {
    id: "dc4",
    level: "hard",
    question:
      "BG 18.66 — the final and most famous teaching — begins with 'Sarva-dharmān parityajya'. What does this mean?",
    options: [
      "Follow all religious duties perfectly",
      "Abandon all other forms of dharma and surrender to Me alone",
      "Give up sinful activities only",
      "Renounce the world completely",
    ],
    correct: 1,
    explanation:
      "'Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja' — Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    verse: "BG 18.66",
  },
  {
    id: "dc5",
    level: "medium",
    question:
      "What does the 'Kurukshetra' represent symbolically in the Bhagavad Gita?",
    options: [
      "A physical battlefield in ancient India",
      "The inner battlefield of the human mind and soul",
      "The kingdom of Hastinapura",
      "The home of the Pandavas",
    ],
    correct: 1,
    explanation:
      "While Kurukshetra is a real place, it symbolizes Dharma-kshetra — the field of righteousness — and the inner battlefield of every human soul making dharmic choices.",
    verse: "BG 1.1",
  },
];

export function QuizPage() {
  const { addPoints } = usePoints();
  const [difficulty, setDifficulty] = useState<DifficultyLevel | null>(null);
  const [isDailyChallenge, setIsDailyChallenge] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [petalBurst, setPetalBurst] = useState(false);
  const [streakBonus, setStreakBonus] = useState(false);
  const [perfectBonus, setPerfectBonus] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  // Load quiz session stats
  const [sessionStats, setSessionStats] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("quiz-session-stats") || "{}") as {
        totalPoints?: number;
        quizzesCompleted?: number;
        dailyChallengeLastDate?: string;
      };
    } catch {
      return {};
    }
  });

  const todayKey = new Date().toISOString().split("T")[0];
  const dailyChallengeCompletedToday =
    sessionStats.dailyChallengeLastDate === todayKey;

  function startQuiz(level: DifficultyLevel) {
    const pool = QUESTIONS.filter((q) => q.level === level);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 18);
    setDifficulty(level);
    setIsDailyChallenge(false);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setStreak(0);
    setTotalCorrect(0);
    setQuizDone(false);
    setPetalBurst(false);
    setStreakBonus(false);
    setPerfectBonus(false);
  }

  function startDailyChallenge() {
    // Rotate 5 questions per day based on date
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        86400000,
    );
    const startIdx = (dayOfYear * 5) % DAILY_CHALLENGE_QUESTIONS.length;
    const dailyQs = DAILY_CHALLENGE_QUESTIONS.slice(startIdx, startIdx + 5);
    const finalQs =
      dailyQs.length >= 5
        ? dailyQs
        : [
            ...dailyQs,
            ...DAILY_CHALLENGE_QUESTIONS.slice(0, 5 - dailyQs.length),
          ];
    setDifficulty("medium");
    setIsDailyChallenge(true);
    setQuestions(finalQs);
    setCurrentIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setStreak(0);
    setTotalCorrect(0);
    setQuizDone(false);
    setPetalBurst(false);
    setStreakBonus(false);
    setPerfectBonus(false);
  }

  function handleAnswer(optionIdx: number) {
    if (answered) return;
    setSelected(optionIdx);
    setAnswered(true);

    const q = questions[currentIdx];
    const pts = POINTS_BY_LEVEL[q.level];

    if (optionIdx === q.correct) {
      const newStreak = streak + 1;
      const newCorrect = totalCorrect + 1;
      setStreak(newStreak);
      setTotalCorrect(newCorrect);
      setPetalBurst(true);
      setTimeout(() => setPetalBurst(false), 2100);

      let earned = pts;
      if (newStreak === 5) {
        setStreakBonus(true);
        earned += 5;
        setTimeout(() => setStreakBonus(false), 2500);
      }
      setScore((prev) => prev + earned);
      addPoints("reading", earned);
    } else {
      setStreak(0);
    }
  }

  function nextQuestion() {
    if (currentIdx + 1 >= questions.length) {
      const allCorrect = totalCorrect === questions.length;
      if (allCorrect) {
        setPerfectBonus(true);
        setScore((prev) => prev + 18);
        addPoints("reading", 18);
      }
      setQuizDone(true);
      // Save stats — also track daily challenge completion
      const newStats = {
        totalPoints: (sessionStats.totalPoints || 0) + score,
        quizzesCompleted: (sessionStats.quizzesCompleted || 0) + 1,
        dailyChallengeLastDate: isDailyChallenge
          ? todayKey
          : sessionStats.dailyChallengeLastDate,
      };
      setSessionStats(newStats);
      try {
        localStorage.setItem("quiz-session-stats", JSON.stringify(newStats));
      } catch {
        /* silent */
      }
    } else {
      setCurrentIdx((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  const q = questions[currentIdx];
  const progress =
    questions.length > 0
      ? ((currentIdx + (answered ? 1 : 0)) / questions.length) * 100
      : 0;

  return (
    <div className="page-enter max-w-2xl mx-auto pb-16" data-ocid="quiz.page">
      {/* Header */}
      <div className="ornate-header mb-8">
        <h1>गीता ज्ञान Quiz</h1>
        <p
          className="font-body text-lg italic mt-2"
          style={{ color: "oklch(0.42 0.16 46)" }}
        >
          Gita Gyan Quiz — Test Your Divine Knowledge
        </p>
        <p
          className="font-body text-xs italic mt-1"
          style={{ color: "oklch(0.50 0.12 44 / 0.75)" }}
        >
          "Even a little practice of this yoga knowledge saves one from the
          greatest fear." — BG 2.40
        </p>
      </div>

      {/* Difficulty Selection */}
      {!difficulty && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p
            className="font-body text-center italic mb-6"
            style={{ color: "oklch(0.45 0.12 44)" }}
          >
            Choose your level, O Arjun. Each question is a step toward divine
            knowledge.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            data-ocid="quiz.difficulty.section"
          >
            {(["easy", "medium", "hard"] as DifficultyLevel[]).map(
              (level, i) => (
                <motion.button
                  key={level}
                  type="button"
                  onClick={() => startQuiz(level)}
                  className="manuscript-card p-6 text-center cursor-pointer transition-smooth hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`quiz.difficulty.${level}`}
                  style={{ border: "2px solid oklch(0.72 0.28 54 / 0.4)" }}
                >
                  <div className="text-3xl mb-3">
                    {level === "easy" ? "🌱" : level === "medium" ? "🔥" : "🪔"}
                  </div>
                  <p
                    className="font-display text-lg font-bold italic mb-1"
                    style={{ color: "oklch(0.22 0.10 32)" }}
                  >
                    {DIFFICULTY_LABEL[level]}
                  </p>
                  <p
                    className="font-body text-xs italic mb-3"
                    style={{ color: "oklch(0.50 0.10 44)" }}
                  >
                    {level === "easy"
                      ? "Foundational Gita knowledge"
                      : level === "medium"
                        ? "Deeper teachings & philosophy"
                        : "Advanced scripture & Sanskrit"}
                  </p>
                  <div
                    className="inline-block px-4 py-1.5 rounded-full font-display font-bold text-sm"
                    style={{
                      background: DIFFICULTY_COLOR[level],
                      color: "oklch(0.96 0.04 74)",
                    }}
                  >
                    ✦ {POINTS_BY_LEVEL[level]} pts per correct
                  </div>
                  <p
                    className="font-body text-xs italic mt-2"
                    style={{ color: "oklch(0.55 0.10 46)" }}
                  >
                    18 questions
                  </p>
                </motion.button>
              ),
            )}
          </div>

          {/* Daily Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="manuscript-card p-5 mb-6 text-center"
            style={{ border: "2px solid oklch(0.72 0.32 54 / 0.5)" }}
            data-ocid="quiz.daily-challenge.section"
          >
            <div className="text-3xl mb-2">🌅</div>
            <p
              className="font-display text-lg font-bold italic mb-1"
              style={{ color: "oklch(0.22 0.10 32)" }}
            >
              Daily Challenge
            </p>
            <p
              className="font-body text-xs italic mb-3"
              style={{ color: "oklch(0.50 0.10 44)" }}
            >
              5 sacred questions — fresh every day — rotating Krishna's wisdom
            </p>
            {dailyChallengeCompletedToday ? (
              <div
                className="inline-block px-4 py-2 rounded-full font-body text-xs italic"
                style={{
                  background: "oklch(0.72 0.28 54 / 0.12)",
                  color: "oklch(0.45 0.14 46)",
                  border: "1px solid oklch(0.72 0.28 54 / 0.3)",
                }}
                data-ocid="quiz.daily-challenge.completed-state"
              >
                ✓ Completed for today — Come back tomorrow!
              </div>
            ) : (
              <button
                type="button"
                onClick={startDailyChallenge}
                className="wax-seal-btn px-6 py-2.5 text-sm"
                data-ocid="quiz.daily-challenge.start_button"
              >
                🌅 Start Today's Challenge (+21 pts)
              </button>
            )}
          </motion.div>

          {/* Stats */}
          {(sessionStats.quizzesCompleted || 0) > 0 && (
            <div
              className="manuscript-card p-5 text-center"
              data-ocid="quiz.stats.section"
            >
              <p
                className="font-body text-xs italic mb-2"
                style={{ color: "oklch(0.48 0.12 46)" }}
              >
                Your Quiz Journey
              </p>
              <div className="flex justify-center gap-8">
                <div>
                  <p
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.55 0.26 48)" }}
                  >
                    {sessionStats.quizzesCompleted}
                  </p>
                  <p
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.52 0.10 46)" }}
                  >
                    Quizzes Taken
                  </p>
                </div>
                <div>
                  <p
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(0.55 0.26 48)" }}
                  >
                    {sessionStats.totalPoints?.toLocaleString() || 0}
                  </p>
                  <p
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.52 0.10 46)" }}
                  >
                    Points Earned
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Quiz Questions */}
      {difficulty && !quizDone && q && (
        <motion.div
          key={currentIdx}
          ref={quizRef}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
          data-ocid="quiz.question.section"
        >
          <LotusBurst active={petalBurst} />

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span
                className="font-body text-xs italic"
                style={{ color: "oklch(0.52 0.10 46)" }}
              >
                Question {currentIdx + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-3">
                {streak >= 2 && (
                  <span
                    className="font-body text-xs font-semibold"
                    style={{ color: "oklch(0.60 0.24 48)" }}
                  >
                    🔥 {streak} streak
                  </span>
                )}
                <span
                  className="font-display text-sm font-bold px-3 py-1 rounded-full"
                  style={{
                    background: DIFFICULTY_COLOR[difficulty],
                    color: "oklch(0.96 0.04 74)",
                  }}
                >
                  {POINTS_BY_LEVEL[difficulty]} pts
                </span>
              </div>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "oklch(0.82 0.06 68)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.32 52), oklch(0.65 0.28 48))",
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Streak bonus notice */}
          <AnimatePresence>
            {streakBonus && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mb-4 py-3 rounded"
                style={{
                  background: "oklch(0.72 0.32 52 / 0.14)",
                  border: "1.5px solid oklch(0.72 0.32 52 / 0.45)",
                }}
              >
                <p
                  className="font-display text-base font-bold italic"
                  style={{ color: "oklch(0.48 0.22 46)" }}
                >
                  🎉 5-Question Streak! +5 Bonus Points!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question card */}
          <div
            className="manuscript-card p-6 mb-6"
            style={{ border: "2px solid oklch(0.72 0.28 54 / 0.45)" }}
            data-ocid="quiz.question.card"
          >
            {q.verse && (
              <p
                className="font-display text-xs font-bold italic mb-3"
                style={{ color: "oklch(0.60 0.24 48)" }}
              >
                ✦ {q.verse}
              </p>
            )}
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "oklch(0.18 0.08 32)" }}
            >
              {q.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6" data-ocid="quiz.options.list">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correct;
              const isSelected = i === selected;
              let bg = "oklch(0.93 0.06 68 / 0.7)";
              let border = "1.5px solid oklch(0.72 0.20 54 / 0.35)";
              let textColor = "oklch(0.22 0.10 32)";
              if (answered) {
                if (isCorrect) {
                  bg = "oklch(0.88 0.15 150 / 0.3)";
                  border = "2px solid oklch(0.55 0.22 150)";
                  textColor = "oklch(0.25 0.14 150)";
                } else if (isSelected && !isCorrect) {
                  bg = "oklch(0.88 0.12 24 / 0.25)";
                  border = "2px solid oklch(0.56 0.22 24)";
                  textColor = "oklch(0.32 0.16 24)";
                }
              }
              return (
                <motion.button
                  key={q.options[i]}
                  type="button"
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className="w-full text-left px-5 py-4 rounded transition-smooth"
                  style={{
                    background: bg,
                    border,
                    color: textColor,
                    cursor: answered ? "default" : "pointer",
                  }}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  data-ocid={`quiz.option.${i + 1}`}
                >
                  <span className="font-body text-sm leading-relaxed">
                    <span
                      className="font-display font-bold mr-2"
                      style={{ color: "oklch(0.65 0.22 48)" }}
                    >
                      {["अ", "ब", "स", "द"][i]}.
                    </span>
                    {opt}
                    {answered && isCorrect && <span className="ml-2">✓</span>}
                    {answered && isSelected && !isCorrect && (
                      <span className="ml-2">✗</span>
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation after answer */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="manuscript-card p-5 mb-5"
                data-ocid="quiz.explanation"
              >
                <p
                  className="font-display text-sm font-bold italic mb-2"
                  style={{
                    color:
                      selected === q.correct
                        ? "oklch(0.40 0.18 150)"
                        : "oklch(0.45 0.18 24)",
                  }}
                >
                  {selected === q.correct
                    ? "🙏 Excellent, Arjun!"
                    : "📖 Krishna teaches us..."}
                </p>
                <p
                  className="font-body text-sm italic leading-relaxed"
                  style={{ color: "oklch(0.30 0.10 40)" }}
                >
                  {q.explanation}
                </p>
                {selected !== q.correct && (
                  <p
                    className="font-body text-xs italic mt-2"
                    style={{ color: "oklch(0.50 0.14 44)" }}
                  >
                    The correct answer: <strong>{q.options[q.correct]}</strong>
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {answered && (
            <div className="text-center">
              <button
                type="button"
                onClick={nextQuestion}
                className="wax-seal-btn px-8 py-3 text-base"
                data-ocid="quiz.next-button"
              >
                {currentIdx + 1 >= questions.length
                  ? "See Results ✦"
                  : "Next Question →"}
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* Quiz Complete */}
      {quizDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
          data-ocid="quiz.results.section"
        >
          <LotusBurst active={true} />
          <div
            className="manuscript-card p-8 mb-6 relative overflow-hidden"
            style={{ border: "2.5px solid oklch(0.72 0.30 54 / 0.55)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[4px] rounded-t"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.65 0.28 46), oklch(0.72 0.22 268), oklch(0.84 0.38 54))",
              }}
            />
            <p className="font-display text-5xl mb-4">
              {totalCorrect === questions.length
                ? "🌟"
                : totalCorrect >= questions.length * 0.8
                  ? "🏆"
                  : totalCorrect >= questions.length * 0.5
                    ? "🙏"
                    : "📖"}
            </p>
            <h2
              className="font-display text-2xl font-bold italic mb-2"
              style={{ color: "oklch(0.22 0.10 32)" }}
            >
              {totalCorrect === questions.length
                ? "Perfect Score! Krishna's Wisdom Shines Through You!"
                : "Quiz Complete — Hare Krishna!"}
            </h2>
            <p
              className="font-body text-sm italic mb-6"
              style={{ color: "oklch(0.45 0.12 44)" }}
            >
              {difficulty && DIFFICULTY_LABEL[difficulty]} · {totalCorrect}/
              {questions.length} correct
            </p>

            <div className="flex justify-center gap-8 mb-6">
              <div>
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: "oklch(0.55 0.26 48)" }}
                >
                  {score}
                </p>
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.10 46)" }}
                >
                  points earned
                </p>
              </div>
              <div>
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: "oklch(0.55 0.22 150)" }}
                >
                  {totalCorrect}
                </p>
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.10 46)" }}
                >
                  correct answers
                </p>
              </div>
            </div>

            {perfectBonus && (
              <div
                className="inline-block px-5 py-2.5 rounded mb-5"
                style={{
                  background: "oklch(0.72 0.32 52 / 0.14)",
                  border: "1.5px solid oklch(0.72 0.32 52 / 0.5)",
                }}
              >
                <p
                  className="font-body text-sm italic"
                  style={{ color: "oklch(0.42 0.18 46)" }}
                >
                  ✨ Perfect Quiz Bonus! +18 points for completing all questions
                  correctly!
                </p>
              </div>
            )}

            <p
              className="font-body text-sm italic mb-2"
              style={{ color: "oklch(0.42 0.14 44)" }}
            >
              "Even a little practice of this yoga knowledge saves one from the
              greatest fear." — BG 2.40
            </p>
            <div className="ornate-rule">हरे कृष्ण</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => {
                setDifficulty(null);
                setQuestions([]);
                setQuizDone(false);
              }}
              className="wax-seal-btn px-6 py-3"
              data-ocid="quiz.play-again-button"
            >
              Play Again ✦
            </button>
            <button
              type="button"
              onClick={() => difficulty && startQuiz(difficulty)}
              className="wax-seal-btn px-6 py-3"
              style={{
                background: "oklch(0.55 0.22 150 / 0.15)",
                borderColor: "oklch(0.55 0.22 150 / 0.5)",
              }}
              data-ocid="quiz.retry-same-button"
            >
              Same Level Again
            </button>
          </div>
          <p
            className="font-body text-xs italic mt-4"
            style={{ color: "oklch(0.52 0.10 46)" }}
          >
            Redeem your points in the{" "}
            <a
              href="/store"
              className="underline"
              style={{ color: "oklch(0.55 0.22 46)" }}
            >
              Dharma Seva Store
            </a>
          </p>
        </motion.div>
      )}
    </div>
  );
}
