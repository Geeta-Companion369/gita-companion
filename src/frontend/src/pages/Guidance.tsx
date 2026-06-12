import { GlitterParticles } from "@/components/GlitterParticles";
import { LotusParticles } from "@/components/LotusParticles";
import { Badge } from "@/components/ui/badge";
import { LANGUAGE_LABELS, useLanguage } from "@/hooks/use-language";
import { usePoints } from "@/hooks/use-points";
import { useTTS } from "@/hooks/use-tts";
import type { Language, Verse } from "@/types/gita";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

// ─── GITA AI CORE — 200+ keyword entries ──────────────────────────────────────

interface GuidanceEntry {
  keywords: string[];
  chapterId: number;
  verse: Verse;
  krishnaMessage: string;
  context: string;
  // Source citation — always shown as a sacred badge
  sourceScripture?: string; // e.g. "Bhagavad Gita" — defaults computed from chapterId
  sourceReference?: string; // e.g. "Chapter 2, Verse 47" — computed if not set
  crossRef?: {
    // optional secondary source from Vedas/Puranas
    scripture: string;
    reference: string;
    teaching: string;
  };
}

// Out-of-scope detection — topics not from Gita/Vedas/Puranas
const OUT_OF_SCOPE_KEYWORDS = [
  "weather",
  "sports",
  "cricket",
  "football",
  "movies",
  "bollywood",
  "recipe",
  "cooking",
  "technology",
  "computer",
  "phone",
  "politics",
  "news",
  "stock",
  "investment",
  "fashion",
  "celebrity",
  "entertainment",
  "gaming",
  "video game",
  "netflix",
  "youtube",
  "instagram",
  "tiktok",
  "science",
  "physics",
  "chemistry",
  "math",
  "history",
  "geography",
  "travel",
  "hotel",
  "flight",
  "shopping",
  "discount",
];

function isOutOfScope(query: string): boolean {
  const lower = query.toLowerCase();
  return (
    OUT_OF_SCOPE_KEYWORDS.some((kw) => lower.includes(kw)) &&
    !lower.match(
      /dharma|karma|soul|god|krishna|gita|veda|purana|meditation|peace|suffering|death|life|purpose|duty|faith/,
    )
  );
}

// ─── SCRIPTURAL REFERENCE — Library-linked verse ──────────────────────────────

interface ScripturalRef {
  bookName: string;
  shelf: string; // "Shelf 1", "Shelf 2", "Shelf 3"
  chapterOrSection: string;
  verseRef: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  libraryId: string; // fragment id for deeplink
}

// ─── LIFE SITUATION → SCRIPTURE MAPPING (cross-book references) ──────────────

interface SituationMapping {
  situations: string[]; // keywords to match
  title: string;
  refs: ScripturalRef[];
  moreFromChapter: string; // expandable text
}

const SCRIPTURE_SITUATION_MAP: SituationMapping[] = [
  {
    situations: [
      "grief",
      "sadness",
      "mourning",
      "loss",
      "bereaved",
      "passed away",
      "died",
    ],
    title: "On Grief — The Soul Never Dies",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 2, Verse 20",
        verseRef: "BG 2.20",
        sanskrit:
          "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ||",
        transliteration:
          "na jāyate mriyate vā kadāchin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śhāśhvato 'yaṁ purāṇo na hanyate hanyamāne śharīre",
        meaning:
          "The soul is never born nor dies. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
        libraryId: "gita",
      },
      {
        bookName: "Garuda Purana",
        shelf: "Shelf 3",
        chapterOrSection: "Preta Khanda — Chapter 1",
        verseRef: "Garuda Purana 1.1",
        sanskrit:
          "आत्मा नित्यः शरीरं तु नाशवन्मर्त्यसंज्ञितम् |\nतस्मात् शोकं न कुर्वीत ज्ञानी शोकविवर्जितः ||",
        transliteration:
          "ātmā nityaḥ śharīraṁ tu nāśhavan martya-saṁjñitam\ntasmāt śhokaṁ na kurvīta jñānī śhoka-vivarjitaḥ",
        meaning:
          "The soul is eternal; it is only the body that is mortal and known to perish. Therefore, the wise person does not grieve.",
        libraryId: "garuda-purana",
      },
    ],
    moreFromChapter:
      "Chapter 2 of the Bhagavad Gita is entirely devoted to conquering grief through wisdom. Verses 11–30 give the complete teaching on the eternal soul (Atma Jnana). The Garuda Purana's Preta Khanda describes the soul's journey after death in full detail — what happens in the first 13 days, the Shradh rituals that help the departed soul, and the ultimate destination of the liberated atman. Both texts together offer the most complete scriptural guidance on grief ever written.",
  },
  {
    situations: [
      "fear",
      "scared",
      "afraid",
      "terrified",
      "panic",
      "anxious",
      "anxiety",
      "nervous",
    ],
    title: "On Fear — The Fearless Soul",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 6, Verse 26",
        verseRef: "BG 6.26",
        sanskrit:
          "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ||",
        transliteration:
          "yato yato niśhcharati manaśh chañchalam asthiram\ntatas tato niyamyaitad ātmany eva vaśhaṁ nayet",
        meaning:
          "Whenever the restless and unsteady mind wanders, bring it back and continually direct it toward God.",
        libraryId: "gita",
      },
      {
        bookName: "Rig Veda",
        shelf: "Shelf 1",
        chapterOrSection: "Mandala 1, Hymn 1",
        verseRef: "RV 1.1.1",
        sanskrit: "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् |\nहोतारं रत्नधातमम् ||",
        transliteration:
          "agnim īḷe purohitaṁ yajñasya devam ṛtvijam\nhotāraṁ ratna-dhātamam",
        meaning:
          "I praise Agni, the household priest, the divine minister of the sacrifice, the invoker, best bestower of treasures. The sacred fire within dispels all darkness and fear.",
        libraryId: "rig-veda",
      },
    ],
    moreFromChapter:
      "Chapter 6 of the Bhagavad Gita contains Krishna's complete meditation manual — the path to dissolving fear through inner stillness. Verses 10–26 describe the exact technique. The Rig Veda's opening hymn to Agni is a prayer of courage — fire as the symbol of divine presence that burns away fear. For deep study of fear and its dissolution, also read the Mandukya Upanishad (available in the Vedic Library).",
  },
  {
    situations: [
      "depression",
      "depressed",
      "despair",
      "hopeless",
      "hopelessness",
      "dark",
      "emptiness",
      "numb",
    ],
    title: "On Depression & Despair — Arjuna's Own Crisis",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 1, Verse 47 — Chapter 2, Verse 3",
        verseRef: "BG 1.47 + 2.3",
        sanskrit:
          "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते |\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ||",
        transliteration:
          "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate\nkṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa",
        meaning:
          "Do not yield to unmanliness, O Arjuna. It does not become you. Shake off your faint-heartedness and arise, O scorcher of foes.",
        libraryId: "gita",
      },
      {
        bookName: "Sanatana Dharma — 1916 Edition",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 3 — The Nature of Man",
        verseRef: "Sanatana Dharma p.34",
        sanskrit: "आत्मा ज्ञानस्वरूपः सत्य-चिद्-आनन्दः |",
        transliteration: "ātmā jñāna-svarūpaḥ satya-cid-ānandaḥ",
        meaning:
          "The Self is of the nature of knowledge — eternally true, conscious, and blissful. This is the Hindu understanding of the human being at their core.",
        libraryId: "sanatana-dharma-1916",
      },
    ],
    moreFromChapter:
      "Chapter 1 of the Gita is the only chapter where Krishna does NOT speak — Arjuna speaks, and he is in total depression. He is trembling, weeping, his bow has fallen, he cannot stand. This is the Gita's honest acknowledgment that depression and despair are human experiences. Chapter 2 is then the complete cure. The 1916 Sanatana Dharma textbook (available FREE in the Library) has a beautiful chapter on the nature of the human self that speaks directly to depression and its Vedic remedy.",
  },
  {
    situations: [
      "purpose",
      "dharma",
      "duty",
      "confused",
      "career",
      "path",
      "calling",
      "life purpose",
      "meaning",
    ],
    title: "On Purpose & Dharma — Your Sacred Calling",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 18, Verse 41–44",
        verseRef: "BG 18.41",
        sanskrit:
          "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप |\nकर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः ||",
        transliteration:
          "brāhmaṇa-kṣhatriya-viśhāṁ śhūdrāṇāṁ cha parantapa\nkarmāṇi pravibhaktāni svabhāva-prabhavair guṇaiḥ",
        meaning:
          "The duties of the four orders of society are divided according to their inherent qualities and nature. Find your nature — find your purpose.",
        libraryId: "gita",
      },
      {
        bookName: "Manu Smriti",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 1 — On the Origin of Dharma",
        verseRef: "Manu Smriti 1.1",
        sanskrit: "मनुमेकाग्रमासीनमभिगम्य महर्षयः |\nप्रतिपूज्य यथान्यायमिदं वचनमब्रुवन् ||",
        transliteration:
          "manum ekāgram āsīnam abhigamya maharṣhayaḥ\npratipūjya yathā-nyāyam idaṁ vacanam abruvan",
        meaning:
          "The great sages approached Manu, who was seated in solitude, and after paying proper respect, addressed him with these words — teaching that dharma is learned from the wise, not invented by the self.",
        libraryId: "manu-smriti",
      },
    ],
    moreFromChapter:
      "Chapter 18 of the Bhagavad Gita contains the most detailed teaching on dharma and one's unique nature (svabhava) — verses 41–48 describe how every soul has a particular combination of qualities (gunas) that point to their right dharma. The Manu Smriti, available in the Library, gives the complete framework of dharma as understood in Vedic civilisation — not as rigid rules but as the living principle of right action in every situation.",
  },
  {
    situations: [
      "liberation",
      "moksha",
      "freedom",
      "enlightenment",
      "mukti",
      "self-realisation",
      "awakening",
      "ashtavakra",
    ],
    title: "On Liberation (Moksha) — The Ashtavakra Path",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 4, Verse 38",
        verseRef: "BG 4.38",
        sanskrit:
          "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते |\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ||",
        transliteration:
          "na hi jñānena sadṛiśhaṁ pavitram iha vidyate\ntat svayaṁ yoga-sansiddhaḥ kālenātmani vindati",
        meaning:
          "There is nothing as purifying as knowledge in this world. One who has attained purity through yoga finds this within the self.",
        libraryId: "gita",
      },
      {
        bookName: "Ashtavakra Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 1, Verse 1",
        verseRef: "AG 1.1",
        sanskrit:
          "मुक्तिमिच्छसि चेत्तात विषयान्विषवत्त्यज |\nक्षमार्जवदयातोषसत्यं पीयूषवद्भज ||",
        transliteration:
          "muktim ichchhasi chet tāta viṣhayān viṣhavat tyaja\nkṣhamārjava-dayātośha-satyaṁ pīyūṣhavad bhaja",
        meaning:
          "If you desire liberation, my dear child, then abandon sense pleasures as poison and seek forgiveness, sincerity, compassion, contentment, and truth as nectar.",
        libraryId: "ashtavakra-gita",
      },
    ],
    moreFromChapter:
      "The Ashtavakra Gita (available FREE in the Library on Shelf 3) is the most radical and direct scripture on liberation ever written. Sage Ashtavakra does not give a path — he points directly to what you already are: pure awareness, beyond bondage. 20 chapters, 298 verses. Every verse is a direct pointer to moksha. The Roadmap to Moksha pathway in this app is built entirely on Ashtavakra's teachings — Read the book in the Library, then use Roadmap to Moksha to apply each teaching to your life.",
  },
  {
    situations: [
      "death",
      "dying",
      "afterlife",
      "what happens after death",
      "fear of death",
      "soul after death",
    ],
    title: "On Death — The Soul's Sacred Journey",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 8, Verse 5–6",
        verseRef: "BG 8.5",
        sanskrit:
          "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् |\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ||",
        transliteration:
          "anta-kāle cha mām eva smaran muktvā kalevaram\nyaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra sanśhayaḥ",
        meaning:
          "Whoever, at the time of death, gives up the body while remembering me alone, reaches my state. Of this there is no doubt.",
        libraryId: "gita",
      },
      {
        bookName: "Garuda Purana",
        shelf: "Shelf 3",
        chapterOrSection: "Preta Khanda — Complete Death Rituals",
        verseRef: "Garuda Purana Ch.1–10",
        sanskrit:
          "गरुड उवाच — मृत्युकाले च यात्रा सा पित्रुभिः सह साधुना |\nदर्शनं क्रियते नित्यं धर्मराज-समीपतः ||",
        transliteration:
          "garuḍa uvācha — mṛityu-kāle cha yātrā sā pitṛibhiḥ saha sādhunā\ndarśhanaṁ kriyate nityaṁ dharmarāja-samīpataḥ",
        meaning:
          "Garuda said: At the time of death, the soul's journey is accompanied by the ancestors and the righteous. The soul then stands before Dharmaraja (the lord of dharma) for the great reckoning.",
        libraryId: "garuda-purana",
      },
    ],
    moreFromChapter:
      "Chapter 8 of the Bhagavad Gita is called 'Aksara Brahma Yoga' — the yoga of the imperishable Absolute — and deals entirely with death, the moment of death, and what determines the soul's next destination. Verses 5–28 are the most detailed description of death and liberation in the Gita. The Garuda Purana (available FREE in the Library) is the authoritative Puranic text on death and the afterlife — describing the 13 days of mourning, the soul's journey through different planes, and the rituals that help the departed.",
  },
  {
    situations: [
      "relationship",
      "relationships",
      "marriage",
      "love",
      "family",
      "breakup",
      "divorce",
    ],
    title: "On Relationships — Duty, Love & Right Action",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 3, Verse 35",
        verseRef: "BG 3.35",
        sanskrit:
          "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||",
        transliteration:
          "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt\nsva-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ",
        meaning:
          "It is far better to perform one's own dharma imperfectly than another's dharma perfectly. In one's own dharma there is no danger.",
        libraryId: "gita",
      },
      {
        bookName: "Manu Smriti",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 3 — On Marriage and Relationships",
        verseRef: "Manu Smriti 3.55",
        sanskrit:
          "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः |\nयत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः ||",
        transliteration:
          "yatra nāryas tu pūjyante ramante tatra devatāḥ\nyatraitās tu na pūjyante sarvās tatrāphalāḥ kriyāḥ",
        meaning:
          "Where women are honoured, there the gods rejoice. Where they are not honoured, all actions become fruitless. — The Vedic foundation of relationships built on mutual respect.",
        libraryId: "manu-smriti",
      },
    ],
    moreFromChapter:
      "Chapter 3 of the Bhagavad Gita teaches karma yoga — acting in the world with full love and attention, without the poison of selfish expectation. This is the Gita's model for all relationships: give fully, but do not make another person your source of completeness. The Manu Smriti (Shelf 3, Library) provides the full Vedic framework of dharmic relationships — the sacred duties of husband and wife, parent and child, teacher and student, all based on mutual reverence.",
  },
  {
    situations: [
      "youth",
      "student",
      "young",
      "exams",
      "school",
      "college",
      "peer pressure",
      "social media",
    ],
    title: "On Youth — Krishna's Message to the Young",
    refs: [
      {
        bookName: "Bhagavad Gita",
        shelf: "Shelf 3",
        chapterOrSection: "Chapter 2, Verse 47",
        verseRef: "BG 2.47",
        sanskrit:
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
        transliteration:
          "karmaṇy-evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo 'stvakarmaṇi",
        meaning:
          "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. This is the supreme teaching for youth — act with full dedication, release anxiety about results.",
        libraryId: "gita",
      },
      {
        bookName: "Sanatana Dharma — 1916 Edition",
        shelf: "Shelf 3",
        chapterOrSection: "Introduction — Especially Suited to Youth",
        verseRef: "Sanatana Dharma (1916) p.1",
        sanskrit:
          "विद्यां ददाति विनयं विनयाद्याति पात्रताम् |\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ||",
        transliteration:
          "vidyāṁ dadāti vinayaṁ vinayād yāti pātratām\npātratād dhanam āpnoti dhanād dharmaṁ tataḥ sukham",
        meaning:
          "Knowledge gives humility; from humility comes worthiness; from worthiness comes wealth; from wealth comes dharma; from dharma comes happiness.",
        libraryId: "sanatana-dharma-1916",
      },
    ],
    moreFromChapter:
      "The 1916 Sanatana Dharma book (FREE on Shelf 3 of the Library) was specifically written for young people as an introduction to Hinduism — it is described as 'especially suited to youth.' Published by Benaras Hindu University, it covers the nature of the self, the four aims of life (Purusharthas), ethics, duty, and the path to God — all in clear, accessible language. Every young person in this app should read it.",
  },
];

// ─── WHAT WOULD KRISHNA SAY — 18 Modern Dilemmas ─────────────────────────────

interface KrishnaDilemma {
  id: string;
  situation: string;
  emoji: string;
  krishnaAnswer: string;
  primaryVerse: string;
  verseText: string;
  secondaryRef: string;
}

const WHAT_WOULD_KRISHNA_SAY: KrishnaDilemma[] = [
  {
    id: "job-loss",
    situation: "I lost my job",
    emoji: "💼",
    krishnaAnswer:
      "Arjun, this loss is not your end — it is your redirection. Chapter 12, verse 14 describes my devotee: 'steadfast in all circumstances, who has no pride.' Your worth is not your job title. Chapter 3, verse 35 — perform YOUR dharma. Perhaps this loss is removing you from someone else's dharma and returning you to your own. Continue acting with full sincerity — this is all that is yours to do. Chapter 9, verse 22 is my personal promise: I carry what you lack. Stand up. Start again. I am walking with you.",
    primaryVerse:
      "BG 3.35 — Better one's own dharma imperfect than another's dharma perfectly",
    verseText: "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt",
    secondaryRef:
      "Also: BG 9.22 — I carry what you lack and preserve what you have",
  },
  {
    id: "relationship-broke",
    situation: "My relationship broke",
    emoji: "💔",
    krishnaAnswer:
      "Arjun, Chapter 6, verse 5 speaks directly to you now: 'Rise by yourself; do not let yourself fall.' No human relationship, however beautiful, can complete the soul. You were whole before this person; you are whole now. Chapter 2, verse 14 — pleasure and pain are temporary contacts with the world. Bear them with patience. What this experience is teaching you is the nature of attachment — and the Gita's deeper teaching of love without chains. Let grief happen fully. Then rise. You are Arjuna — you have a dharma beyond this moment.",
    primaryVerse: "BG 6.5 — Rise by yourself; the self alone is your friend",
    verseText: "uddhared ātmanātmānaṁ nātmānam avasādayet",
    secondaryRef:
      "Also: BG 2.14 — Temporary contacts bring pleasure and pain; bear them with patience",
  },
  {
    id: "exam-failing",
    situation: "I'm failing in exams",
    emoji: "📚",
    krishnaAnswer:
      "Arjun, Chapter 2, verse 47 — your right is to act, never to the fruits. Study with your FULL heart, prepare with complete sincerity — and then offer the result to me. The fear of failing actually reduces performance by clouding the mind. Chapter 6, verse 40 carries a divine guarantee: the doer of good never comes to grief, in this world or the next. You have taken birth to seek knowledge — that seeking itself is sacred. A 'failed' exam cannot erase the knowledge gained. Rise, study, offer. The result belongs to me.",
    primaryVerse:
      "BG 2.47 — Your right is to the action, not to the fruits thereof",
    verseText: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana",
    secondaryRef:
      "Also: BG 6.40 — The doer of good never comes to grief in this world or the next",
  },
  {
    id: "betrayal",
    situation: "I'm being betrayed",
    emoji: "🗡️",
    krishnaAnswer:
      "Arjun, betrayal is the oldest human wound — and the Gita itself was spoken on a battlefield caused by betrayal. Chapter 16, verses 1–3 describe the divine qualities — fearlessness, purity, and freedom from malice. Do not allow their darkness to enter you as hatred. Chapter 5, verse 18 — the wise see the same divine presence even in those who harm them. Protect yourself — that is your dharma. But release the desire for revenge — it is a heavier chain on you than on them. Chapter 18, verse 58 — by my grace you shall cross even this. Divine justice never sleeps.",
    primaryVerse:
      "BG 16.1-3 — Fearlessness, purity, freedom from malice are divine qualities",
    verseText: "abhayaṁ sattva-sanśhuddhir jñāna-yoga-vyavasthitiḥ",
    secondaryRef:
      "Also: BG 5.18 — The wise see the same Divine in all beings, including those who harm",
  },
  {
    id: "family-conflict",
    situation: "My family is fighting",
    emoji: "🏠",
    krishnaAnswer:
      "Arjun, the entire Gita was born from a family conflict. Chapter 1 is Arjuna weeping over having to face his own kin. You are not alone in this pain. The Gita's teaching: you cannot force others to choose rightly — Chapter 3, verse 27, all actions arise from their own nature and gunas. But you can choose who YOU are in this conflict. Chapter 12, verse 15 — the one who does not disturb others and is not disturbed by others is very dear to me. Be the peace in the family, not the amplifier of the storm. One person choosing dignity can shift the entire dynamic.",
    primaryVerse:
      "BG 12.15 — One who does not disturb others and is not disturbed",
    verseText: "yasmān nodvijate loko lokān nodvijate cha yaḥ",
    secondaryRef:
      "Also: BG 3.27 — Actions arise from one's own nature; you cannot force another",
  },
  {
    id: "health-crisis",
    situation: "I'm dealing with a serious illness",
    emoji: "🤒",
    krishnaAnswer:
      "Arjun, Chapter 2, verse 20 — the soul is never sick, never broken, never diminished. Your body is experiencing this trial; you, the atman, remain untouched and whole. Chapter 17 teaches that sattvic practices — light nourishing food, prayer, peaceful mind, gentle activity — support the body's healing. I ask you to offer this illness to me: 'Krishna, I offer this body and this pain to you.' Chapter 18, verse 58 — by my grace, you shall cross this difficulty. Medical care is dharmic — use it. And fill every hour with my name. Healing is possible. Hope is dharmic.",
    primaryVerse:
      "BG 2.20 — The soul is never born, never dies, is not slain when the body is slain",
    verseText: "na jāyate mriyate vā kadāchin",
    secondaryRef:
      "Also: BG 18.58 — By keeping your mind fixed on me, by my grace you shall cross all obstacles",
  },
  {
    id: "loneliness",
    situation: "I feel deeply alone",
    emoji: "🌙",
    krishnaAnswer:
      "Arjun, Chapter 9, verse 22 — I carry what you lack and preserve what you have. The loneliness you feel is the soul recognising it was made for infinite love, and nothing finite fully satisfies. This ache is sacred — it is pointing you toward me. I am not far away. Chapter 10, verse 20 — I am the soul seated in the heart of every being. Turn inward right now, and you will find me. I was there before your first friend, and I remain when all have left. You have never been truly alone. Not for a single moment.",
    primaryVerse: "BG 9.22 — I carry what you lack and preserve what you have",
    verseText: "ananyāśh chintayanto māṁ ye janāḥ paryupāsate",
    secondaryRef:
      "Also: BG 10.20 — I am the soul seated in the heart of all living beings",
  },
  {
    id: "anger-issues",
    situation: "I can't control my anger",
    emoji: "🔥",
    krishnaAnswer:
      "Arjun, Chapter 2, verse 63 shows the chain clearly: from anger comes delusion; from delusion, the loss of memory; from that loss, the destruction of discrimination; and from that destruction, ruin. But between stimulus and anger is a space — and in that space is your freedom. Chapter 6, verse 35 — the mind can be mastered through practice and non-attachment. Begin small: when anger rises, name it out loud to yourself: 'I am feeling angry.' This act of witnessing separates you from it. Then take three slow breaths. The watcher cannot be the watched.",
    primaryVerse:
      "BG 2.63 — From anger comes delusion; from delusion, destruction of wisdom",
    verseText: "krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ",
    secondaryRef:
      "Also: BG 16.1-3 — Fearlessness, patience, and freedom from anger are divine qualities",
  },
  {
    id: "money-problems",
    situation: "I have serious financial problems",
    emoji: "💰",
    krishnaAnswer:
      "Arjun, Chapter 9, verse 22 — for those who worship me with devotion, I carry what they lack. This is a direct divine commitment to you. And Chapter 2, verse 47 — your right is to act, never to despair. Do not stop your effort; do not abandon your sincerity. Every honest action is building something real, even when you cannot see it yet. Chapter 16, verse 21 warns — greed is one of the three gates of destruction. Wealth sought through dharma comes and stays; wealth through adharma comes and destroys. Keep your means pure. Act. Trust. I am watching over you.",
    primaryVerse: "BG 9.22 — I personally carry what my devotees lack",
    verseText: "teṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham",
    secondaryRef:
      "Also: BG 2.47 — Act with full effort; release anxiety about results",
  },
  {
    id: "depression-dark",
    situation: "I feel worthless and empty",
    emoji: "😔",
    krishnaAnswer:
      "Arjun, Chapter 6, verse 5 — lift yourself up by yourself; you are your own best friend. What the world says about you, what failures have whispered, what comparisons have implied — these are not your truth. Chapter 9, verse 29 — I am equal to all beings, none hated, none favoured. And yet those who turn to me with devotion are IN me, and I am in them. You are seen. You are held. You are infinitely worthy — because you are a fragment of the Divine itself. No human judgment can change what the Eternal has already declared. Rise, O Arjuna.",
    primaryVerse: "BG 6.5 — Rise by yourself; the self alone is your friend",
    verseText: "uddhared ātmanātmānaṁ nātmānam avasādayet",
    secondaryRef:
      "Also: BG 9.29 — I am equal to all; those devoted to me are in me and I am in them",
  },
  {
    id: "addiction",
    situation: "I'm struggling with an addiction",
    emoji: "🔗",
    krishnaAnswer:
      "Arjun, addiction is the soul's misdirected search for the bliss that is its own nature. Chapter 3, verse 37 — lust (uncontrolled desire) is the supreme enemy. But Chapter 6, verse 35 — the mind can be mastered through practice and non-attachment. Do not condemn yourself; every moment you choose consciousness over compulsion is a spiritual victory. Begin with mantra: at the moment of craving, chant 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare.' The energy of desire cannot be destroyed, but it can be redirected. One prayer, one mantra, one step. I am walking with you.",
    primaryVerse:
      "BG 3.37 — Lust is the supreme enemy, born of contact with passion",
    verseText: "kāma eṣha krodha eṣha rajo-guṇa-samudbhavaḥ",
    secondaryRef:
      "Also: BG 6.35 — The restless mind is mastered through practice and non-attachment",
  },
  {
    id: "purpose-crisis",
    situation: "I don't know my purpose in life",
    emoji: "🧭",
    krishnaAnswer:
      "Arjun, your purpose is not something to be invented — it is to be discovered. Chapter 3, verse 35 — it is better to perform your own dharma imperfectly than another's dharma perfectly. Look at your deepest nature, your innate gifts, what gives you life when you do it — that thread leads to your dharma. Chapter 18, verses 41–44 describe how every human being carries a combination of qualities given by the Divine that points to their unique function in the world. Begin with what is most immediate and most honest. Clarity comes through action, not through waiting for perfect certainty.",
    primaryVerse:
      "BG 3.35 — Better one's own dharma imperfect than another's perfectly",
    verseText: "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt",
    secondaryRef:
      "Also: BG 18.41 — Every soul carries unique qualities that point to their dharma",
  },
  {
    id: "grief-loss",
    situation: "I lost someone I love",
    emoji: "😢",
    krishnaAnswer:
      "Arjun, grief is the language of love meeting impermanence. The Gita does not ask you to deny or suppress your pain — Chapter 1 honours grief completely. But Chapter 2, verse 20 holds the deepest comfort: the soul is never born, never dies. What you love most deeply cannot truly be lost, for the soul is eternal. The one you mourn has not disappeared — they have changed form. And Chapter 9, verse 22 — I carry what you lack. Let your grief open you, not close you. Let it deepen your love, not harden your heart. And know: they are safe in the arms of the Eternal.",
    primaryVerse: "BG 2.20 — The soul is never born nor dies; it is eternal",
    verseText: "na jāyate mriyate vā kadāchin",
    secondaryRef:
      "Also: BG 9.22 — I carry what you lack and preserve what you have",
  },
  {
    id: "betrayed-by-friend",
    situation: "My closest friend betrayed me",
    emoji: "🤝",
    krishnaAnswer:
      "Arjun, the Gita's own opening is about betrayal — and Krishna's response was not to encourage Arjuna to forgive blindly, nor to destroy blindly. Chapter 16, verse 2 — forgiveness is a divine quality. Chapter 6, verse 5 — the self alone is your ultimate friend. The one who betrayed you is acting from their own darkness and limitation. You do not need to be the executor of justice — Chapter 18, verse 58, by my grace divine justice operates perfectly. Protect yourself. Establish wise boundaries. But do not allow their betrayal to close your heart to trust forever. Wisdom, not walls.",
    primaryVerse:
      "BG 16.2 — Forgiveness is a divine quality that leads to liberation",
    verseText: "ahiṁsā satyam akrodhas tyāgaḥ śhāntir apaiśhunam",
    secondaryRef:
      "Also: BG 6.5 — The self alone is your ultimate friend; ultimate security comes from within",
  },
  {
    id: "career-crossroads",
    situation: "I'm at a crossroads in my career",
    emoji: "🔀",
    krishnaAnswer:
      "Arjun, you are standing exactly where Arjuna stood — at a battlefield of choices. Chapter 18, verse 63 — I have given you this knowledge. Reflect on it carefully, and then act as you choose. The choice is yours. But Chapter 4, verse 38 — wisdom is the greatest purifier. Seek counsel from those who have realised the truth. And Chapter 3, verse 35 — do not simply follow the crowd or copy another's path. Your dharma is specific to your nature. Whatever path aligns with your deepest gifts and serves others — that is your path. Take one step. The next step will reveal itself.",
    primaryVerse:
      "BG 18.63 — Reflect on this knowledge fully; then act as you choose",
    verseText: "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā",
    secondaryRef:
      "Also: BG 3.35 — Follow your own nature (svadharma), not another's path",
  },
  {
    id: "relationship-breakup",
    situation: "I'm going through a painful divorce",
    emoji: "💍",
    krishnaAnswer:
      "Arjun, Chapter 2, verse 14 speaks into this exact pain: the contacts of the world bring pleasure and pain, heat and cold — they are temporary. Bear them with patience. This burning will not last forever. But also do not rush past the grief. Let it teach you. Chapter 5, verse 24 — the one who finds happiness within, delight within, illumination within — that person attains brahma-nirvana. This painful season is preparing you for a completeness that no human relationship could give you. And Chapter 18, verse 58 — by fixing your mind on me, by my grace, you shall cross even this. You will be whole again.",
    primaryVerse:
      "BG 2.14 — Pleasure and pain are temporary; endure them with patience",
    verseText: "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ",
    secondaryRef:
      "Also: BG 5.24 — The one who finds happiness within attains liberation",
  },
  {
    id: "digital-addiction",
    situation: "I'm addicted to my phone / social media",
    emoji: "📱",
    krishnaAnswer:
      "Arjun, Chapter 3, verse 27 — social media shows you everyone else's outer life while hiding your inner treasure. Chapter 3, verse 35 — follow your own svadharma, not the trends, not the comparisons. Your unique path, your authentic expression — these are infinitely more valuable than any imitation of another's life. Chapter 6, verse 10 — the yogi keeps the mind on God even in solitude. Replace screen time with sacred time. Begin with 10 minutes of mantra, prayer, or silence every morning before touching your phone. Gradually, you will prefer the inner world to the outer noise. The kingdom within is greater than anything on a screen.",
    primaryVerse:
      "BG 6.10 — The yogi should constantly engage the mind in spiritual practice",
    verseText: "yogī yuñjīta satatam ātmānaṁ rahasi sthitaḥ",
    secondaryRef:
      "Also: BG 3.35 — Follow your own authentic nature, not the crowd",
  },
  {
    id: "parent-child-conflict",
    situation: "I am in conflict with my parents / children",
    emoji: "👨‍👩‍👦",
    krishnaAnswer:
      "Arjun, every dharmic relationship calls for specific duties. Chapter 3, verse 21 — whatever a great person does, others follow; whatever standard they set, the world follows. In a family, one person choosing dignity and wisdom changes the atmosphere for all. The Gita does not say 'the other person must change first.' It says: BE the change in consciousness. Chapter 12, verse 15 — the one who does not disturb others and is not disturbed by others is dearest to me. You cannot control what others do; you can only choose who you are in the relationship. Choose the higher response, always.",
    primaryVerse: "BG 3.21 — What great persons do, others follow",
    verseText: "yad yad ācharati śhreṣhṭhas tat tad evetaro janaḥ",
    secondaryRef:
      "Also: BG 12.15 — Not disturbing others and not being disturbed is the mark of the devotee",
  },
];

const GITA_AI_CORE: GuidanceEntry[] = [
  // ── FEAR ──────────────────────────────────────────────────────────────────────
  {
    keywords: [
      "fear",
      "scared",
      "afraid",
      "terror",
      "dread",
      "phobia",
      "frightened",
      "anxious",
      "anxiety",
      "panic",
      "nervous",
      "worry",
      "worried",
      "dreading",
    ],
    chapterId: 2,
    context:
      "On the eternal nature of the soul — the foundation of fearlessness",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 2, Verse 20",
    crossRef: {
      scripture: "Rig Veda",
      reference: "Mandala 10, Hymn 18",
      teaching:
        "Fear not death, O soul — the Devas protect the departed. The eternal cosmic fire purifies all fear.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Dear one, fear arises when we forget our true eternal nature. You are not this body — you are the undying soul, ancient and imperishable. The Gita reveals in Chapter 2 verse 20 that this soul is never born, never dies, and cannot be harmed by fire, water, weapons, or time. Release your grip on the impermanent body, and rest in your own eternal being. Nothing in creation can truly destroy who you are at your deepest core.",
    verse: {
      id: "2-20",
      chapterId: 2,
      verseNumber: 20,
      sanskritText:
        "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ||",
      transliteration:
        "na jāyate mriyate vā kadāchin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śhāśhvato 'yaṁ purāṇo\nna hanyate hanyamāne śharīre",
      englishTranslation:
        "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
    },
  },
  // ── STRESS / OVERWHELM ────────────────────────────────────────────────────────
  {
    keywords: [
      "stress",
      "overwhelmed",
      "tension",
      "pressure",
      "burnout",
      "exhausted",
      "too much",
      "overloaded",
      "burden",
      "heavy",
    ],
    chapterId: 6,
    context: "On steadying the restless mind through meditation",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 6, Verse 26",
    crossRef: {
      scripture: "Sama Veda",
      reference: "Udgitha — OM as Cosmic Sound",
      teaching:
        "Chant OM — the primordial sound that settles all agitation. 'Sarvam Khalvidam Brahma' — All this is Brahman, and in that recognition, the mind finds rest.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Your mind is like a flame caught in the wind, flickering with every passing thought and demand. Krishna teaches in Chapter 6 that through patient, gentle practice the mind can become still — not by forcing silence, but by lovingly returning, again and again, to the peace that lives within you. You do not need to solve everything at once. Take one breath, one moment. Even a small step toward inner stillness is progress on this divine path.",
    verse: {
      id: "6-26",
      chapterId: 6,
      verseNumber: 26,
      sanskritText:
        "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ||",
      transliteration:
        "yato yato niśhcharati manaśh chañchalam asthiram\ntatas tato niyamyaitad ātmany eva vaśhaṁ nayet",
      englishTranslation:
        "Whenever the restless and unsteady mind wanders away, bring it back and continually keep directing it towards God.",
    },
  },
  // ── DUTY / DHARMA ─────────────────────────────────────────────────────────────
  {
    keywords: [
      "duty",
      "dharma",
      "obligation",
      "responsibility",
      "work",
      "career",
      "job",
      "purpose",
      "what to do",
      "confused",
      "confusion",
      "path",
      "my role",
      "my calling",
    ],
    chapterId: 2,
    context: "The most sacred teaching — act without attachment to outcomes",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 2, Verse 47",
    crossRef: {
      scripture: "Yajur Veda",
      reference: "Ishavasya Upanishad — Verse 2",
      teaching:
        "Perform your actions thus — live a hundred years here. There is no other way than this by which karma shall not adhere to you. (Karma done without attachment leaves no bondage — the foundation of Nishkama Karma.)",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — You have come to this moment with a sacred purpose. The Bhagavad Gita's supreme teaching, given in Chapter 2, is this: perform your duty with full sincerity and complete heart — but release all attachment to whether the fruits come as you desire. The action belongs to you; the result belongs to the Divine. This is not indifference — it is the highest form of trust. In this surrender of outcomes while fully engaging in effort, you discover true inner freedom.",
    verse: {
      id: "2-47",
      chapterId: 2,
      verseNumber: 47,
      sanskritText:
        "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
      transliteration:
        "karmaṇy-evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo 'stvakarmaṇi",
      englishTranslation:
        "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction.",
    },
  },
  // ── ANGER ─────────────────────────────────────────────────────────────────────
  {
    keywords: [
      "anger",
      "angry",
      "frustrated",
      "rage",
      "irritated",
      "upset",
      "furious",
      "mad",
      "resentment",
      "outrage",
      "temper",
      "hostile",
      "bitter",
    ],
    chapterId: 2,
    context: "On how anger destroys wisdom and leads to ruin",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — When anger arises, it clouds your judgment like smoke obscuring a fire. Krishna reveals in Chapter 2 the chain of destruction: desire leads to anger, anger leads to delusion, and delusion leads to the collapse of all wisdom you have carefully built. Yet there is hope — in the pause between stimulus and response, you find your freedom. That breath, that moment of stepping back, is where the soul reclaims its sovereignty. Choose clarity over reaction, and you choose divinity.",
    verse: {
      id: "2-63",
      chapterId: 2,
      verseNumber: 63,
      sanskritText:
        "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः |\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||",
      transliteration:
        "krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ\nsmṛiti-bhranśhād buddhi-nāśho buddhi-nāśhāt praṇaśhyati",
      englishTranslation:
        "Anger leads to clouding of judgment, which results in bewilderment of memory. When memory is bewildered, the intellect gets destroyed; and when the intellect is destroyed, one is ruined.",
    },
  },
  // ── SURRENDER / FAITH / BHAKTI ────────────────────────────────────────────────
  {
    keywords: [
      "surrender",
      "let go",
      "trust god",
      "trust",
      "faith",
      "bhakti",
      "devotion",
      "give it to god",
      "let god",
      "divine will",
      "thy will",
      "acceptance",
    ],
    chapterId: 18,
    context: "The final and supreme teaching of the Gita — total surrender",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 18, Verse 66",
    crossRef: {
      scripture: "Bhagavata Purana",
      reference: "Canto 11, Chapter 29",
      teaching:
        "Dharmo Rakshati Rakshitah — protect Dharma and Dharma protects you. Complete surrender to the Lord removes all sins. Bhakti is the highest path — the Bhagavata Purana proclaims devotion as the supreme means of liberation.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — This is the highest wisdom I can offer you in this sacred scripture: let go completely. Surrender not just your burdens, but your very sense of being the doer. When you offer everything to the Divine — your fears, hopes, confusion, mistakes, and desires — they are all received with infinite compassion. Chapter 18, verse 66 is Krishna's final promise: I will liberate you from every form of sin and suffering. You need not fear. The arms of grace are always open.",
    verse: {
      id: "18-66",
      chapterId: 18,
      verseNumber: 66,
      sanskritText:
        "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
      transliteration:
        "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
      englishTranslation:
        "Abandon all varieties of dharmas and simply surrender unto me alone. I shall liberate you from all sinful reactions; do not fear.",
    },
  },
  // ── GRIEF / SADNESS / LOSS ────────────────────────────────────────────────────
  {
    keywords: [
      "grief",
      "sad",
      "sadness",
      "sorrow",
      "loss",
      "mourning",
      "heartbroken",
      "heartbreak",
      "pain",
      "suffering",
      "despair",
      "bereaved",
      "lost someone",
      "death of",
      "passed away",
    ],
    chapterId: 2,
    context: "Krishna's counsel to Arjuna in his hour of deepest grief",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 2, Verse 11",
    crossRef: {
      scripture: "Garuda Purana",
      reference: "Preta Khanda — Chapter 1",
      teaching:
        "The soul is eternal; it is only the body that is mortal. Therefore the wise person does not grieve. The Garuda Purana describes the soul's complete journey after death — the 13 days of mourning, the soul's ascent, and the ultimate liberation.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Grief is the language of love meeting impermanence. Krishna does not ask you to deny or suppress your pain — he asks you to see through it to the deeper truth. What you love most deeply can never truly be lost, for the soul is eternal. At the very start of the Gita, Krishna addresses Arjuna's grief not with dismissal but with the highest wisdom: those who are wise do not mourn, for they understand that all souls continue eternally. Let this sorrow become the doorway that opens you to wisdom.",
    verse: {
      id: "2-11",
      chapterId: 2,
      verseNumber: 11,
      sanskritText:
        "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे |\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||",
      transliteration:
        "aśhochyān anvaśhochas tvaṁ prajñā-vādānśh cha bhāṣhase\ngatāsūn agatāsūnśh cha nānuśhochanti paṇḍitāḥ",
      englishTranslation:
        "You grieve for those who are not worthy of grief, and yet speak words of wisdom. The wise grieve neither for the living nor for the dead.",
    },
  },
  // ── HOPELESSNESS / GIVING UP ──────────────────────────────────────────────────
  {
    keywords: [
      "hopeless",
      "hopelessness",
      "give up",
      "quit",
      "can't go on",
      "no way out",
      "lost",
      "meaningless",
      "no point",
      "worthless",
      "pointless",
      "suicidal",
      "end it",
    ],
    chapterId: 4,
    context: "Krishna's promise to arise whenever goodness needs protection",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 4, Verse 7",
    crossRef: {
      scripture: "Markandeya Purana",
      reference: "Devi Mahatmya — Chapter 1",
      teaching:
        "When darkness seemed to conquer all, the Divine Mother arose — the supreme power of the universe — and destroyed every demon of delusion. No darkness lasts forever. Divine power always arises to restore light.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Even in the darkest age, I come. This world has never been abandoned — not once in all of creation's vast history. The Gita, in Chapter 4, carries this sacred promise: whenever dharma weakens and darkness grows, the Divine sends itself forth. When you feel crushed under the weight of hopelessness, know that divine grace is already moving toward you right now. You are not alone. The light within you is the same light that holds this entire universe together. Reach toward it.",
    verse: {
      id: "4-7",
      chapterId: 4,
      verseNumber: 7,
      sanskritText:
        "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
      transliteration:
        "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
      englishTranslation:
        "Whenever righteousness wanes and unrighteousness increases, I send myself forth. For the protection of the good and the destruction of evil, I come into being age after age.",
    },
  },
  // ── JEALOUSY / ENVY ───────────────────────────────────────────────────────────
  {
    keywords: [
      "jealous",
      "jealousy",
      "envy",
      "envious",
      "comparison",
      "comparing",
      "someone else has more",
      "not fair",
      "unfair",
    ],
    chapterId: 12,
    context: "On the qualities of one dear to the Divine",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Jealousy arises when we forget our own unique, incomparable divine path and measure our worth by another's outer circumstances. Krishna describes in Chapter 12 the one who is dearest to him: free from envy, seeing all beings with equal eyes, not coveting what belongs to others. Your journey is singular and sacred — there is no competition in devotion. Another's success does not diminish yours. Each soul has its own destiny written by the Divine. Water your own roots.",
    verse: {
      id: "12-13",
      chapterId: 12,
      verseNumber: 13,
      sanskritText:
        "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च |\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||",
      transliteration:
        "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha\nnirmamo nirahṅkāraḥ sama-duḥkha-sukhaḥ kṣhamī",
      englishTranslation:
        "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant — such a person is very dear to me.",
    },
  },
  // ── LONELINESS / ISOLATION ────────────────────────────────────────────────────
  {
    keywords: [
      "lonely",
      "loneliness",
      "alone",
      "isolated",
      "nobody understands",
      "no one cares",
      "abandoned",
      "left out",
      "forgotten",
      "invisible",
    ],
    chapterId: 9,
    context: "Krishna's unwavering presence for devoted souls",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 9, Verse 22",
    crossRef: {
      scripture: "Vishnu Purana",
      reference: "Book 1, Chapter 19",
      teaching:
        "Vishnu dwells in the heart of every being as Antaryami — the inner controller. No soul is ever truly alone. The Lord's compassion pervades all creation — reach inward, and you reach the infinite.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — You are never truly alone. I am the witness dwelling in every heart, the silence that underlies every sound, the warmth hidden in every act of love. Chapter 9, verse 22 carries one of the most intimate promises in all of scripture: for those who turn toward me with devotion, I personally carry what they lack and preserve what they have. Even when no human presence can reach you, I am here — closer than your own breath. Turn inward even now, and you will find me waiting.",
    verse: {
      id: "9-22",
      chapterId: 9,
      verseNumber: 22,
      sanskritText:
        "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते |\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
      transliteration:
        "ananyāśh chintayanto māṁ ye janāḥ paryupāsate\nteṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham",
      englishTranslation:
        "For those who worship me with devotion, meditating on my transcendental form, I carry what they lack and preserve what they have.",
    },
  },
  // ── FAILURE / GUILT / SHAME ───────────────────────────────────────────────────
  {
    keywords: [
      "failure",
      "failed",
      "mistake",
      "regret",
      "shame",
      "guilt",
      "wrong",
      "sinful",
      "sin",
      "bad person",
      "unworthy",
      "not good enough",
      "mess up",
      "messed up",
    ],
    chapterId: 4,
    context: "The purifying power of the fire of wisdom",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Every mistake you have ever made can become the fuel for your spiritual awakening. Chapter 4 of the Gita carries one of the most liberating verses in all of scripture: even if you were the most sinful among all sinners, the boat of true knowledge would carry you across the entire ocean of sin. You are not defined by your past actions. You are the awareness that chose to see them clearly — and that very seeing is the beginning of transformation. Rise, and let wisdom burn the old into ash.",
    verse: {
      id: "4-36",
      chapterId: 4,
      verseNumber: 36,
      sanskritText:
        "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः |\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि ||",
      transliteration:
        "api ched asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛit-tamaḥ\nsarvaṁ jñāna-plavenaiva vṛijanaṁ santariṣhyasi",
      englishTranslation:
        "Even if you were the most sinful among all sinners, you could cross the ocean of all sins by the boat of knowledge alone.",
    },
  },
  // ── DOUBT / INDECISION ────────────────────────────────────────────────────────
  {
    keywords: [
      "doubt",
      "doubt myself",
      "uncertain",
      "uncertainty",
      "unsure",
      "hesitation",
      "indecision",
      "can't decide",
      "don't know what to choose",
      "second guess",
    ],
    chapterId: 4,
    context: "On destroying doubt through knowledge",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Doubt is the sword that cuts your own strength from within. Yet even doubt, when it drives sincere seeking, can become a doorway to wisdom. Chapter 4 instructs clearly: take up the sword of knowledge, cut through the uncertainty that lives in the heart, and arise! A soul who acts with even imperfect clarity moves forward on the path. The one who waits in endless doubt remains still, life passing like a river around an unmoved stone.",
    verse: {
      id: "4-42",
      chapterId: 4,
      verseNumber: 42,
      sanskritText:
        "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः |\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ||",
      transliteration:
        "tasmād ajñāna-sambhūtaṁ hṛit-sthaṁ jñānāsinātmanaḥ\nchittvainaṁ sanśhayaṁ yogam ātiṣhṭhottiṣhṭha bhārata",
      englishTranslation:
        "Therefore, with the sword of knowledge, cut asunder the doubt about the self, born of ignorance, residing in your heart. Be established in Yoga; arise, O Arjuna!",
    },
  },
  // ── LOVE / RELATIONSHIPS ──────────────────────────────────────────────────────
  {
    keywords: [
      "love",
      "relationship",
      "relationships",
      "family",
      "friendship",
      "friend",
      "partner",
      "marriage",
      "spouse",
      "breakup",
      "heartache",
      "romance",
      "miss someone",
    ],
    chapterId: 12,
    context: "The marks of one who loves purely and deeply",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — True divine love asks nothing in return — it gives freely, like sunlight that does not choose whom to illuminate. Krishna describes in Chapter 12 the devotee dearest to him: one who is a friend to all, who harms no one, who is equally present in pleasure and in pain. Bring this quality into your human relationships — not as weakness but as the deepest strength. Love without the chain of expectation becomes an infinite well that never runs dry.",
    verse: {
      id: "12-15",
      chapterId: 12,
      verseNumber: 15,
      sanskritText:
        "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः |\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ||",
      transliteration:
        "yasmān nodvijate loko lokān nodvijate cha yaḥ\nharṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ",
      englishTranslation:
        "One who does not disturb others and is not disturbed by others, who is free from joy, envy, fear, and anxiety — such a person is very dear to me.",
    },
  },
  // ── PEACE / CALM ──────────────────────────────────────────────────────────────
  {
    keywords: [
      "peace",
      "calm",
      "stillness",
      "inner peace",
      "tranquility",
      "quiet",
      "silence",
      "serenity",
      "equanimity",
      "composure",
    ],
    chapterId: 2,
    context: "The description of a person of steady wisdom — the sthitaprajna",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — True peace is not the absence of challenge — it is the presence of something deeper and more real than any challenge. The Gita describes the sthitaprajna — the one of steady wisdom — as unshaken in sorrow, without exaltation in happiness, free from attachment, fear, and anger. This is the peace the world cannot give and cannot take away. It lives in the depth of your own being, waiting patiently beneath the waves of circumstance. Go there. Rest there.",
    verse: {
      id: "2-56",
      chapterId: 2,
      verseNumber: 56,
      sanskritText:
        "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः |\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ||",
      transliteration:
        "duḥkheṣhv anudvigna-manāḥ sukheṣhu vigata-spṛihaḥ\nvīta-rāga-bhaya-krodhaḥ sthita-dhīr munir uchyate",
      englishTranslation:
        "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear, and anger, is called a sage of steady mind.",
    },
  },
  // ── COURAGE / STRENGTH ────────────────────────────────────────────────────────
  {
    keywords: [
      "courage",
      "brave",
      "bravery",
      "strength",
      "strong",
      "warrior",
      "fight",
      "overcome",
      "face it",
      "stand up",
      "hero",
      "bold",
    ],
    chapterId: 11,
    context: "Arjuna's prayer — rise and be the instrument of the Divine",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — You are Arjuna in this moment — standing before a great challenge, wondering if you have what it takes. You do. The very fact that you are here, searching, questioning, seeking guidance — that itself is courage. The Gita tells Arjuna in Chapter 11: arise, attain glory, conquer your enemies, because the Divine has already done the work — you are merely the instrument. You are not alone in this battle. Divine power works through willing hearts.",
    verse: {
      id: "11-33",
      chapterId: 11,
      verseNumber: 33,
      sanskritText:
        "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम् |\nमयैवैते निहताः पूर्वमेव\nनिमित्तमात्रं भव सव्यसाचिन् ||",
      transliteration:
        "tasmāt tvam uttiṣhṭha yaśho labhasva\njitvā śhatrūn bhuṅkṣhva rājyaṁ samṛiddham\nmayaivaite nihatāḥ pūrvam eva\nnimittamātraṁ bhava savyasāchin",
      englishTranslation:
        "Therefore, arise and attain glory. Conquer the enemies and enjoy a flourishing kingdom. They have already been destroyed by me; you are merely my instrument.",
    },
  },
  // ── KNOWLEDGE / WISDOM ────────────────────────────────────────────────────────
  {
    keywords: [
      "knowledge",
      "wisdom",
      "learning",
      "understanding",
      "truth",
      "scripture",
      "study",
      "enlightenment",
      "know myself",
      "self-knowledge",
    ],
    chapterId: 4,
    context: "On the supreme importance of wisdom — greater than all ritual",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Among all purifying forces, wisdom is the greatest. Even a small boat of genuine understanding can carry you across the mightiest ocean of suffering and confusion. Chapter 4 instructs the seeker: approach those who have realised the truth with humility, question them earnestly, serve sincerely — and they will awaken the knowledge that already sleeps within you. All knowledge ultimately leads to the same destination: the recognition of the divine presence within yourself.",
    verse: {
      id: "4-38",
      chapterId: 4,
      verseNumber: 38,
      sanskritText:
        "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते |\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ||",
      transliteration:
        "na hi jñānena sadṛiśhaṁ pavitram iha vidyate\ntat svayaṁ yoga-sansiddhaḥ kālenātmani vindati",
      englishTranslation:
        "There is nothing as purifying as knowledge in this world. One who has attained purity of mind through prolonged practice of yoga finds this knowledge within the self in due course of time.",
    },
  },
  // ── ATTACHMENT ────────────────────────────────────────────────────────────────
  {
    keywords: [
      "attachment",
      "attached",
      "clinging",
      "letting go",
      "possessive",
      "obsession",
      "can't let go",
      "holding on",
      "possessiveness",
    ],
    chapterId: 2,
    context: "On how attachment to senses creates bondage",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Attachment is the root of all suffering, not the objects themselves. The Gita explains in Chapter 2 that when the mind dwells continuously on sense objects, attachment forms; from attachment arises desire; from frustrated desire comes anger and pain. The teaching is not to renounce the world, but to engage fully while holding lightly — like a lotus that grows in water yet is never wetted. True non-attachment brings freedom, not coldness.",
    verse: {
      id: "2-62",
      chapterId: 2,
      verseNumber: 62,
      sanskritText:
        "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते |\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ||",
      transliteration:
        "dhyāyato viṣhayān puṁsaḥ saṅgas teṣhūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
      englishTranslation:
        "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment desire is born, and from desire anger arises.",
    },
  },
  // ── EGO / PRIDE ───────────────────────────────────────────────────────────────
  {
    keywords: [
      "ego",
      "pride",
      "arrogance",
      "pride",
      "conceited",
      "self-importance",
      "narcissism",
      "vanity",
      "showing off",
      "superiority",
      "hubris",
    ],
    chapterId: 16,
    context: "On the divine and demonic natures — overcoming ego",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The ego is the veil that separates you from the infinite. Chapter 16 describes the divine qualities that lead to liberation: fearlessness, purity, compassion, humility, and freedom from pride. The one who is arrogant mistakes the instrument for the musician — they forget that all talent, beauty, and intelligence are gifts from the Divine, flowing through them. True greatness always bows in humility before the source of all greatness. Dissolve the ego and find you are something far vaster.",
    verse: {
      id: "16-3",
      chapterId: 16,
      verseNumber: 3,
      sanskritText:
        "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता |\nभवन्ति सम्पदं दैवीमभिजातस्य भारत ||",
      transliteration:
        "tejaḥ kṣhamā dhṛitiḥ śhaucham adroho nāti-mānitā\nbhavanti sampadaṁ daivīm abhijātasya bhārata",
      englishTranslation:
        "Splendor, forgiveness, fortitude, cleanliness, bearing no malice, and absence of pride — these are the qualities of those endowed with divine virtues.",
    },
  },
  // ── GREED ─────────────────────────────────────────────────────────────────────
  {
    keywords: [
      "greed",
      "greedy",
      "money",
      "wealth obsession",
      "materialism",
      "never enough",
      "wanting more",
      "accumulation",
      "hoarding",
      "craving",
    ],
    chapterId: 16,
    context: "On greed as one of the three gateways to self-destruction",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita names lust, anger, and greed as the three gates of hell — not because wealth is evil, but because these qualities bind the soul and prevent it from experiencing its own boundless divine nature. True abundance is recognised within. When you know yourself as infinite consciousness, the craving for external accumulation naturally softens. Seek the imperishable wealth of wisdom and devotion, which no circumstance can ever take away.",
    verse: {
      id: "16-21",
      chapterId: 16,
      verseNumber: 21,
      sanskritText:
        "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः |\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ||",
      transliteration:
        "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśhanam ātmanaḥ\nkāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
      englishTranslation:
        "There are three gates to self-destruction and hell — lust, anger, and greed. Therefore, one must give up all three.",
    },
  },
  // ── DEPRESSION ────────────────────────────────────────────────────────────────
  {
    keywords: [
      "depression",
      "depressed",
      "dark cloud",
      "emptiness",
      "numb",
      "hollow",
      "joyless",
      "can't feel anything",
      "dark",
      "bleak",
      "despondent",
    ],
    chapterId: 18,
    context: "On the three modes of nature — rising above tamasic darkness",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita describes three qualities of nature — sattva (clarity), rajas (passion), and tamas (inertia and darkness). Depression is tamas thickening into a veil over the luminous soul within. The remedy is gentle, sustained movement toward the light: sacred sound, light food, service to others, small acts of beauty and devotion. You cannot think your way out of darkness — you must act your way. Even one small step, one mantra spoken, one act of kindness, begins to dissolve the veil.",
    verse: {
      id: "18-35",
      chapterId: 18,
      verseNumber: 35,
      sanskritText:
        "यया स्वप्नं भयं शोकं विषादं मदमेव च |\nन विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी ||",
      transliteration:
        "yayā svapnaṁ bhayaṁ śhokaṁ viṣhādaṁ madam eva cha\nna vimuñchati durmedhā dhṛitiḥ sā pārtha tāmasī",
      englishTranslation:
        "That determination which cannot go beyond dreaming, fear, grief, despondency, and conceit — that determination is of the nature of ignorance (tamas).",
    },
  },
  // ── KARMA / ACTION ────────────────────────────────────────────────────────────
  {
    keywords: [
      "karma",
      "action",
      "consequences",
      "reaping",
      "sowing",
      "cause and effect",
      "past karma",
      "bad karma",
      "good deeds",
      "consequences of actions",
    ],
    chapterId: 4,
    context: "On performing action with divine knowledge — nishkama karma",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 4, Verse 18",
    crossRef: {
      scripture: "Brahmanda Purana",
      reference: "Cosmic Creation and Karma",
      teaching:
        "As you sow, so shall you reap across lifetimes — cosmic duty and karma consequences are woven into the very fabric of creation. Every soul progresses through dharmic actions offered to the Divine.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita does not teach that karma is punishment — it reveals karma as the sacred law of divine mathematics, perfectly just and compassionate in the long arc of eternity. Chapter 4 teaches that action performed without selfish desire, in a spirit of offering to the Divine, creates no binding karma. This is the path of liberation through action itself. You need not retreat from the world — transform how you act within it. Offer every action as worship.",
    verse: {
      id: "4-18",
      chapterId: 4,
      verseNumber: 18,
      sanskritText:
        "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः |\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ||",
      transliteration:
        "karmaṇy akarma yaḥ paśhyed akarmaṇi cha karma yaḥ\nsa buddhimān manuṣhyeṣhu sa yuktaḥ kṛitsna-karma-kṛit",
      englishTranslation:
        "One who sees action in inaction and inaction in action is truly wise among humans, performing all actions in a yogic spirit.",
    },
  },
  // ── LIBERATION / MOKSHA ───────────────────────────────────────────────────────
  {
    keywords: [
      "liberation",
      "moksha",
      "freedom",
      "enlightenment",
      "spiritual freedom",
      "release",
      "awakening",
      "self-realisation",
      "realization",
      "nirvana",
      "mukti",
    ],
    chapterId: 5,
    context: "On the liberated soul — brahma-nirvana",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 5, Verse 24",
    crossRef: {
      scripture: "Narada Purana",
      reference: "On Bhakti as the Highest Path",
      teaching:
        "Bhakti — pure loving devotion — is the most direct path to liberation. Narada declares: by constant remembrance of the Lord, by chanting His name, the soul attains liberation even while living in the body (jivanmukti).",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Liberation is not a distant destination at the end of many lives — it is your own nature, temporarily obscured. The Gita describes the liberated soul in Chapter 5: one who finds happiness within, delight within, and inner illumination — such a yogi attains brahma-nirvana, the peace of the Absolute. Liberation begins the moment the mind rests, even briefly, in its own natural silence. Every moment of genuine inner stillness is a taste of moksha.",
    verse: {
      id: "5-24",
      chapterId: 5,
      verseNumber: 24,
      sanskritText:
        "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः |\nस योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति ||",
      transliteration:
        "yo 'ntaḥ-sukho 'ntar-ārāmas tathāntar-jyotir eva yaḥ\nsa yogī brahma-nirvāṇaṁ brahma-bhūto 'dhigachchhati",
      englishTranslation:
        "One who finds happiness within, delight within, and illumination within — that yogi, becoming one with God, attains liberation in the divine.",
    },
  },
  // ── MEDITATION / YOGA ─────────────────────────────────────────────────────────
  {
    keywords: [
      "meditation",
      "meditate",
      "yoga",
      "practice",
      "sadhana",
      "spiritual practice",
      "how to meditate",
      "concentration",
      "focus",
      "dhyana",
    ],
    chapterId: 6,
    context: "On the practice of dhyana yoga — meditation",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 6, Verse 10",
    crossRef: {
      scripture: "Sama Veda",
      reference: "Chandogya Upanishad 3.14.1",
      teaching:
        "Sarvam khalv idam brahma — All this is Brahman. In meditation, the meditator, the act of meditation, and the object of meditation merge into one. The Sama Veda's sacred melodies are themselves a form of moving meditation that leads the soul to divine unity.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 6 is Krishna's complete manual of meditation. The practice is deceptively simple: find a clean, quiet place; sit still with spine erect; single-point the mind on the Divine; and when the mind wanders — and it will, this is natural — gently bring it back. The key is consistency over intensity. Daily practice of even ten minutes, done with sincere love, builds the inner stillness that gradually transforms every moment of life into a kind of continuous meditation.",
    verse: {
      id: "6-10",
      chapterId: 6,
      verseNumber: 10,
      sanskritText:
        "योगी युञ्जीत सततमात्मानं रहसि स्थितः |\nएकाकी यतचित्तात्मा निराशीरपरिग्रहः ||",
      transliteration:
        "yogī yuñjīta satatam ātmānaṁ rahasi sthitaḥ\nekākī yata-chittātmā nirāśhīr aparigrahaḥ",
      englishTranslation:
        "A yogi should constantly engage the mind in meditation, remaining in solitude, with subdued mind and body, free from desires and possessiveness.",
    },
  },
  // ── SOUL / SELF / CONSCIOUSNESS ───────────────────────────────────────────────
  {
    keywords: [
      "soul",
      "self",
      "consciousness",
      "who am i",
      "true self",
      "atman",
      "spirit",
      "inner self",
      "real me",
      "identity",
      "awareness",
    ],
    chapterId: 2,
    context: "On the imperishable nature of the eternal soul",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita's greatest revelation is the nature of the soul — the atman. Chapter 2 describes it with extraordinary precision: the soul cannot be cut by weapons, burned by fire, wetted by water, or dried by wind. It is eternal, all-pervading, unchanging, and primeval. This is who you actually are — not the thoughts, not the emotions, not the body that ages and changes. You are the unchanging witness behind all experience. Rest in that recognition, and all fear dissolves.",
    verse: {
      id: "2-23",
      chapterId: 2,
      verseNumber: 23,
      sanskritText:
        "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः |\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः ||",
      transliteration:
        "nainaṁ chhindanti śhastrāṇi nainaṁ dahati pāvakaḥ\nna chainaṁ kledayanty āpo na śhoṣhayati mārutaḥ",
      englishTranslation:
        "The soul cannot be cut by weapons, nor burned by fire, nor moistened by water, nor dried by the wind.",
    },
  },
  // ── SUCCESS / ACHIEVEMENT ─────────────────────────────────────────────────────
  {
    keywords: [
      "success",
      "achieve",
      "achievement",
      "winning",
      "goal",
      "ambition",
      "accomplish",
      "reach my goal",
      "manifest",
      "desire to succeed",
    ],
    chapterId: 3,
    context: "On performing one's duty excellently — the path of karma yoga",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita does not discourage success — it teaches the highest form of it. In Chapter 3, Krishna explains the path of karma yoga: perform every action as an offering to the Divine, with full skill and complete effort, but without clinging to the outcome as your source of identity. This paradox unlocks peak performance: when fear of failure is gone, you can act with total clarity and freedom. True success is not measured by external reward but by the quality of consciousness you bring to the work.",
    verse: {
      id: "3-19",
      chapterId: 3,
      verseNumber: 19,
      sanskritText:
        "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||",
      transliteration:
        "tasmād asaktaḥ satataṁ kāryaṁ karma samāchara\nasakto hy ācharan karma param āpnoti pūruṣhaḥ",
      englishTranslation:
        "Therefore, always perform your duty without attachment, for by performing action without attachment, a person achieves the supreme.",
    },
  },
  // ── FORGIVENESS ───────────────────────────────────────────────────────────────
  {
    keywords: [
      "forgiveness",
      "forgive",
      "forgiving",
      "grudge",
      "resentment",
      "holding grudge",
      "hurt by someone",
      "betrayed",
      "cannot forgive",
    ],
    chapterId: 16,
    context: "On forgiveness as a divine quality",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Forgiveness is described in Chapter 16 as one of the divine qualities that lead to liberation. It is important to understand what forgiveness is not: it is not approval of wrong, nor weakness, nor forgetting. Forgiveness is the sacred act of releasing the poison of resentment from your own system. The one who wronged you may not even know you carry this weight — but you do. Forgiveness frees you, not the other. It is an act of profound self-love and divine alignment.",
    verse: {
      id: "16-2",
      chapterId: 16,
      verseNumber: 2,
      sanskritText:
        "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् |\nदया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ||",
      transliteration:
        "ahiṁsā satyam akrodhas tyāgaḥ śhāntir apaiśhunam\ndayā bhūteṣhv aloluptvaṁ mārdavaṁ hrīr achāpalam",
      englishTranslation:
        "Non-violence, truthfulness, freedom from anger, renunciation, peacefulness, absence of cruelty, compassion toward all beings, freedom from greed, gentleness, modesty — these are divine qualities.",
    },
  },
  // ── PATIENCE ──────────────────────────────────────────────────────────────────
  {
    keywords: [
      "patience",
      "impatient",
      "waiting",
      "slow progress",
      "why is it taking so long",
      "results not coming",
      "frustrated with progress",
      "taking too long",
    ],
    chapterId: 13,
    context: "On steadiness as a divine quality of the illumined",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The spiritual path and life itself move on the Divine's timeline, not the ego's. Patience is not passive resignation — it is the active, faithful continuation of right effort while trusting that the harvest will come in the appropriate season. Chapter 13 describes the illumined seeker as one who has constancy — who does not abandon the path when results are slow. Water does not force the mountain; it flows around, through, over — and eventually shapes even the hardest stone.",
    verse: {
      id: "13-7",
      chapterId: 13,
      verseNumber: 7,
      sanskritText:
        "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् |\nआचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः ||",
      transliteration:
        "amānitvam adambhitvam ahiṁsā kṣhāntir ārjavam\nāchāryopāsanaṁ śhauchaṁ sthairyam ātma-vinigrahaḥ",
      englishTranslation:
        "Humility, unpretentiousness, non-violence, patience, straightforwardness, service to the guru, cleanliness, steadiness, and self-control.",
    },
  },
  // ── GRATITUDE ─────────────────────────────────────────────────────────────────
  {
    keywords: [
      "gratitude",
      "grateful",
      "thankful",
      "blessing",
      "blessings",
      "appreciate",
      "appreciation",
      "thankfulness",
    ],
    chapterId: 9,
    context: "On the greatness of even a small offering given with devotion",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Gratitude is one of the highest spiritual practices, for it aligns the heart with the recognition of the Divine in all things. Chapter 9 contains one of the most tender verses in the Gita: if anyone offers me a leaf, a flower, a fruit, or even water with pure devotion and a loving heart, I accept it. The Divine does not require grand gestures — only an open, grateful heart. Every breath you breathe, every moment you are alive, is a gift being given. Receive it consciously.",
    verse: {
      id: "9-26",
      chapterId: 9,
      verseNumber: 26,
      sanskritText:
        "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति |\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||",
      transliteration:
        "patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati\ntad ahaṁ bhakty-upahṛitam aśhnāmi prayatātmanaḥ",
      englishTranslation:
        "If someone offers me a leaf, a flower, a fruit, or water with devotion and love, I will accept it, for it is the offering of a pure heart.",
    },
  },
  // ── HOPE ──────────────────────────────────────────────────────────────────────
  {
    keywords: [
      "hope",
      "hopeful",
      "future",
      "better days",
      "will it get better",
      "is there a future",
      "looking forward",
    ],
    chapterId: 4,
    context: "On the divine's eternal presence across all ages",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Hope is not wishful thinking — it is the soul's innate recognition that the Divine is at work even when the outer circumstances look dark. Chapter 4 tells us that the Divine comes forth age after age to restore goodness and light. This is not merely ancient history — it is the living principle operating in your life right now. Every time you choose truth, kindness, or devotion over despair, you are participating in this divine renewal. Light always follows darkness. Always.",
    verse: {
      id: "4-8",
      chapterId: 4,
      verseNumber: 8,
      sanskritText:
        "परित्राणाय साधूनां विनाशाय च दुष्कृताम् |\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ||",
      transliteration:
        "paritrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām\ndharma-sansthāpanārthāya sambhavāmi yuge yuge",
      englishTranslation:
        "For the protection of the good and the destruction of evil and to firmly establish righteousness, I appear in every era.",
    },
  },
  // ── MAYA / ILLUSION ───────────────────────────────────────────────────────────
  {
    keywords: [
      "maya",
      "illusion",
      "delusion",
      "reality",
      "what is real",
      "not real",
      "confused about reality",
      "worldly illusion",
      "materialism",
      "what is truth",
    ],
    chapterId: 7,
    context: "On the divine maya — the cosmic illusion",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Maya, the divine illusion, is described in Chapter 7 as a powerful, divine energy — daivi maya — that veils the true nature of reality from ordinary perception. It is not evil; it is the creative power through which the Infinite plays the game of finite existence. You pierce maya not through intellectual analysis but through sincere devotion and grace. When the veil lifts, even briefly, you see that what you called 'the world' is a magnificent expression of the Divine dancing with itself.",
    verse: {
      id: "7-14",
      chapterId: 7,
      verseNumber: 14,
      sanskritText:
        "दैवी ह्येषा गुणमयी मम माया दुरत्यया |\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ||",
      transliteration:
        "daivī hy eṣhā guṇa-mayī mama māyā durātyayā\nmām eva ye prapadyante māyām etāṁ taranti te",
      englishTranslation:
        "This divine energy of mine, consisting of the three modes of nature, is difficult to overcome. But those who surrender unto me can easily cross beyond it.",
    },
  },
  // ── REBIRTH / REINCARNATION ───────────────────────────────────────────────────
  {
    keywords: [
      "rebirth",
      "reincarnation",
      "afterlife",
      "past life",
      "next life",
      "life after death",
      "soul journey",
      "transmigration",
    ],
    chapterId: 2,
    context: "On the soul's journey through bodies — the eternal cycle",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita reveals the soul's journey with extraordinary clarity. Just as a person changes worn-out garments and takes new ones, the soul discards aged bodies and enters fresh ones. This is not something to fear but to understand deeply — you have lived before, and you will live again, until the final recognition frees you from the cycle entirely. Each life is a fresh opportunity to grow in wisdom, devotion, and love, moving ever closer to the divine reunion that is your ultimate destiny.",
    verse: {
      id: "2-22",
      chapterId: 2,
      verseNumber: 22,
      sanskritText:
        "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि |\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही ||",
      transliteration:
        "vāsānsi jīrṇāni yathā vihāya\nnavāni gṛihṇāti naro 'parāṇi\ntathā śharīrāṇi vihāya jīrṇā-\nnyanyāni sanyāti navāni dehī",
      englishTranslation:
        "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
    },
  },
  // ── SERVICE / SEVA ────────────────────────────────────────────────────────────
  {
    keywords: [
      "service",
      "seva",
      "helping others",
      "serve",
      "selfless service",
      "give back",
      "charity",
      "volunteer",
      "compassion",
      "help people",
    ],
    chapterId: 3,
    context: "On yajna — selfless action as worship",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita teaches that selfless service — yajna — is the very sustenance of the world. Chapter 3 describes how the ancient sages lived by a sacred cycle of giving: the divine nourishes the world; those who receive that nourishment offer service back. When you give freely without expectation of return, you step into this sacred cycle and align yourself with the deepest currents of cosmic purpose. Service is not a sacrifice — it is the most direct path to experiencing unity with all life.",
    verse: {
      id: "3-10",
      chapterId: 3,
      verseNumber: 10,
      sanskritText:
        "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः |\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ||",
      transliteration:
        "saha-yajñāḥ prajāḥ sṛiṣhṭvā purovācha prajāpatiḥ\nanena prasaviṣhyadhvam eṣha vo 'stv iṣhṭa-kāma-dhuk",
      englishTranslation:
        "In the beginning, the Lord of creatures created humankind together with yajna (sacrifice), and said: 'By this shall you prosper; may this be the divine cow that grants your desires.'",
    },
  },
  // ── LUST / TEMPTATION ─────────────────────────────────────────────────────────
  {
    keywords: [
      "lust",
      "temptation",
      "desire",
      "craving",
      "addiction",
      "urge",
      "compulsion",
      "indulgence",
      "sensual pleasure",
      "excessive desire",
    ],
    chapterId: 3,
    context: "On lust as the greatest enemy of the soul",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 3 identifies uncontrolled desire — lust in its many forms — as the supreme enemy of the seeker. It covers wisdom like smoke covers fire, like dust covers a mirror. But do not condemn yourself for desire — understand it. The energy of desire, when purified and redirected toward the Divine, becomes the most powerful spiritual force. Bhakti itself — the highest yoga — is love redirected toward the infinite. Transform desire; do not merely suppress it.",
    verse: {
      id: "3-37",
      chapterId: 3,
      verseNumber: 37,
      sanskritText:
        "काम एष क्रोध एष रजोगुणसमुद्भवः |\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ||",
      transliteration:
        "kāma eṣha krodha eṣha rajo-guṇa-samudbhavaḥ\nmahāśhano mahā-pāpmā viddhy enam iha vairiṇam",
      englishTranslation:
        "It is lust alone, born of contact with the material mode of passion, which later transforms into anger. Know this as the sinful, all-devouring enemy in this world.",
    },
  },
  // ── MIND CONTROL ──────────────────────────────────────────────────────────────
  {
    keywords: [
      "mind control",
      "control my mind",
      "overthinking",
      "racing thoughts",
      "can't stop thinking",
      "mental chatter",
      "intrusive thoughts",
      "mind won't stop",
    ],
    chapterId: 6,
    context: "On mastering the mind — friend or enemy",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 6 contains one of the most honest exchanges in the Gita: Arjuna says to Krishna that the mind is more difficult to control than the wind. And Krishna agrees — but then gives the solution: practice and non-attachment. The mind is a tool of tremendous power. When undisciplined, it enslaves; when mastered, it liberates. The practice is simple though not easy: watch the mind without becoming it. Be the witness. The watcher cannot be the watched.",
    verse: {
      id: "6-35",
      chapterId: 6,
      verseNumber: 35,
      sanskritText:
        "श्रीभगवानुवाच |\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम् |\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||",
      transliteration:
        "śhrī bhagavān uvācha\nasanśhayaṁ mahā-bāho mano durnigrahaṁ chalam\nabhyāsena tu kaunteya vairāgyeṇa cha gṛihyate",
      englishTranslation:
        "Lord Krishna said: O mighty-armed Arjuna, undoubtedly the mind is restless and difficult to control. But it can be mastered through practice and non-attachment.",
    },
  },
  // ── FOOD / BODY ───────────────────────────────────────────────────────────────
  {
    keywords: [
      "food",
      "diet",
      "eating",
      "body health",
      "sattvik",
      "sattvic",
      "health",
      "physical body",
      "body care",
      "nourishment",
    ],
    chapterId: 17,
    context: "On the three types of food and their effects on consciousness",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita devotes an entire section in Chapter 17 to food, for the sages knew that what we consume profoundly shapes our consciousness. Sattvic foods — fresh, nourishing, mildly prepared — increase clarity, strength, and inner peace. Rajasic foods — overly spicy, stimulating — agitate the mind. Tamasic foods — stale, heavy, intoxicating — dull and darken consciousness. You are, in a very real sense, what you eat. Choose foods that serve your spiritual practice and inner luminosity.",
    verse: {
      id: "17-8",
      chapterId: 17,
      verseNumber: 8,
      sanskritText:
        "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः |\nरस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः ||",
      transliteration:
        "āyuḥ-sattva-balārogya-sukha-prīti-vivardhanāḥ\nrasyāḥ snigdhāḥ sthirā hṛidyā āhārāḥ sāttvika-priyāḥ",
      englishTranslation:
        "Foods that promote longevity, virtue, strength, health, happiness, and joy — foods that are juicy, smooth, substantial, and nourishing — are dear to those in the mode of goodness.",
    },
  },
  // ── RIGHTEOUSNESS / TRUTH ─────────────────────────────────────────────────────
  {
    keywords: [
      "righteousness",
      "truth",
      "truthful",
      "honesty",
      "honest",
      "integrity",
      "dharmic",
      "righteous",
      "ethical",
      "moral",
      "doing the right thing",
    ],
    chapterId: 16,
    context: "On divine qualities — the path of righteousness",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita describes in Chapter 16 the divine and demoniac paths in vivid detail. Those on the divine path are characterised by fearlessness, truth, non-violence, and compassion — these qualities lead to liberation. Truth is not merely factual accuracy; it is alignment between thought, word, and deed — the rarest and most powerful integrity. When you commit to truth even when it is costly, you build a spiritual foundation that no circumstance can shake.",
    verse: {
      id: "16-1",
      chapterId: 16,
      verseNumber: 1,
      sanskritText:
        "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः |\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ||",
      transliteration:
        "abhayaṁ sattva-sanśhuddhir jñāna-yoga-vyavasthitiḥ\ndānaṁ damaśh cha yajñaśh cha svādhyāyas tapa ārjavam",
      englishTranslation:
        "Fearlessness, purity of mind, steadfastness in knowledge and yoga, charity, control of the senses, sacrifice, study of the scriptures, austerity, and straightforwardness.",
    },
  },
  // ── EQUANIMITY / BALANCE ──────────────────────────────────────────────────────
  {
    keywords: [
      "equanimity",
      "balance",
      "balanced",
      "ups and downs",
      "highs and lows",
      "emotional rollercoaster",
      "stability",
      "even-minded",
      "stoic",
    ],
    chapterId: 14,
    context: "On rising above the three modes of nature",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita's model of the spiritually mature person is one who is not tossed by every wave of circumstance — who recognises pleasure and pain, success and failure, as movements of the three modes of nature rather than ultimate realities. Chapter 14 describes the one who has transcended these modes: they are alike in honour and dishonour, alike toward friend and foe, having renounced all undertakings. This equanimity is not indifference — it is the stillness of one who knows the ocean beneath the waves.",
    verse: {
      id: "14-24",
      chapterId: 14,
      verseNumber: 24,
      sanskritText:
        "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः |\nतुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः ||",
      transliteration:
        "sama-duḥkha-sukhaḥ svastathaḥ sama-loṣhṭāśhma-kāñchanaḥ\ntulya-priyāpriyo dhīras tulya-nindātma-saṁstutiḥ",
      englishTranslation:
        "One who is the same in joy and sorrow, who is established in the self, to whom a clod of earth, stone, and gold are the same, to whom the dear and the unfriendly are equal, who is the same in censure and praise.",
    },
  },
  // ── RELATIONSHIPS / FAMILY CONFLICT ───────────────────────────────────────────
  {
    keywords: [
      "family conflict",
      "conflict",
      "difficult family",
      "conflict with parents",
      "conflict with siblings",
      "disagreement",
      "family problem",
      "relationship problem",
      "argument",
    ],
    chapterId: 1,
    context: "Arjuna's crisis — the battlefield of relationships",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The entire Bhagavad Gita begins with a family conflict — Arjuna facing his own kin across the battlefield of Kurukshetra. His grief and confusion in Chapter 1 is deeply human and deeply relatable. The Gita's insight is that every relationship difficulty is, at its core, a spiritual lesson — an invitation to clarity, right action, and growth. What relationship conflict ultimately asks is: who do I choose to be in this moment? Act from your highest self, not your reactive self.",
    verse: {
      id: "1-47",
      chapterId: 1,
      verseNumber: 47,
      sanskritText:
        "एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् |\nविसृज्य सशरं चापं शोकसंविग्नमानसः ||",
      transliteration:
        "evam uktvārjunaḥ saṅkhye rathopastha upāviśhat\nvisṛijya sa-śharaṁ chāpaṁ śhoka-saṁvigna-mānasaḥ",
      englishTranslation:
        "Having spoken thus on the battlefield, Arjuna sat down on the seat of the chariot, casting aside his bow and arrows, his mind overwhelmed with grief.",
    },
  },
  // ── SLEEP / INSOMNIA ──────────────────────────────────────────────────────────
  {
    keywords: [
      "sleep",
      "insomnia",
      "can't sleep",
      "sleepless",
      "night",
      "restless nights",
      "troubled sleep",
      "wakeful",
    ],
    chapterId: 6,
    context: "On moderation and discipline for the yogi",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 6 beautifully describes the yoga of balanced living. The yogi who seeks inner peace must observe right measure in eating, sleeping, waking, recreation, and work. Neither too much nor too little — this is the sacred principle of mitahara. A restless mind produces restless sleep; the path to deep, healing sleep is a quieted mind. Try ending your day with gentle mantra repetition, gratitude, and surrender of the day's events to the Divine. Let each night be a small moksha.",
    verse: {
      id: "6-17",
      chapterId: 6,
      verseNumber: 17,
      sanskritText:
        "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु |\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा ||",
      transliteration:
        "yuktāhāra-vihārasya yukta-cheṣhṭasya karmasu\nyukta-svapnāvabodhasya yogo bhavati duḥkha-hā",
      englishTranslation:
        "For one who is moderate in eating, recreation, work, sleep and wakefulness — yoga becomes the destroyer of all suffering.",
    },
  },
  // ── IMPERMANENCE / CHANGE ─────────────────────────────────────────────────────
  {
    keywords: [
      "change",
      "impermanence",
      "everything changes",
      "nothing lasts",
      "loss of something",
      "end of an era",
      "transition",
      "things ending",
      "moving on",
    ],
    chapterId: 2,
    context: "On the impermanent nature of all phenomena",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita opens with one of the profoundest observations about human existence: we suffer most because we expect the impermanent to be permanent. All material phenomena — bodies, relationships, circumstances, emotions, even entire ages — arise and pass. But the soul within you is the one thing that never changes. Learn to abide in that unchanging presence, and the waves of change can no longer drown you. Every ending is also a beginning — every season of loss contains within it the seed of a new gift.",
    verse: {
      id: "2-14",
      chapterId: 2,
      verseNumber: 14,
      sanskritText:
        "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||",
      transliteration:
        "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣhasva bhārata",
      englishTranslation:
        "O Arjuna, the contact between the senses and the sense objects gives rise to feelings of heat and cold, pleasure and pain. These are temporary and passing. Bear them with patience.",
    },
  },
  // ── DIVINE GRACE ──────────────────────────────────────────────────────────────
  {
    keywords: [
      "grace",
      "divine grace",
      "blessing",
      "prasad",
      "miracle",
      "god's will",
      "divine intervention",
      "protected",
      "saved",
      "miracle happened",
    ],
    chapterId: 18,
    context: "On the supreme grace that transcends all effort",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Grace is the deepest mystery and the greatest gift. The Gita speaks in Chapter 18 of the supreme grace of the Divine that transcends all human effort and strategy: by his grace alone you shall cross all obstacles and attain the eternal. Grace is not something earned — it is the natural response of the infinite to a sincere and open heart. The preparation for grace is surrender, humility, and the genuine desire to be used for something larger than yourself.",
    verse: {
      id: "18-58",
      chapterId: 18,
      verseNumber: 58,
      sanskritText:
        "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि |\nअथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि ||",
      transliteration:
        "mach-chittaḥ sarva-durgāṇi mat-prasādāt tariṣhyasi\natha chet tvam ahankārān na śhroṣhyasi vinaṅkṣhyasi",
      englishTranslation:
        "By keeping your mind fixed on me, you will, by my grace, overcome all obstacles. But if you do not listen to me out of ego, you shall perish.",
    },
  },
  // ── BODY / SOUL DISTINCTION ───────────────────────────────────────────────────
  {
    keywords: [
      "body and soul",
      "am i my body",
      "physical vs spiritual",
      "material vs spiritual",
      "flesh",
      "temporary body",
      "body is not self",
    ],
    chapterId: 2,
    context: "On the eternal soul as distinct from the temporary body",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — One of the Gita's most liberating revelations is the clear distinction between what you appear to be and what you truly are. Chapter 2 uses the remarkable word dehi — the soul that wears the body, as one wears clothing. You are not your body; you inhabit it, as the sun inhabits the sky. The body will grow old, sicken, and die — these are its nature. But you, the eternal witness within, continue. This knowing transforms every experience of physical limitation into a reminder of your own imperishable nature.",
    verse: {
      id: "2-18",
      chapterId: 2,
      verseNumber: 18,
      sanskritText:
        "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः |\nअनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ||",
      transliteration:
        "antavanta ime dehā nityasyoktāḥ śharīriṇaḥ\nanāśhino 'prameyasya tasmād yudhyasva bhārata",
      englishTranslation:
        "Only the material body of the indestructible, immeasurable, and eternal living entity is subject to destruction. Therefore, fight, O descendant of Bharata.",
    },
  },
  // ── CONCENTRATION / FOCUS ─────────────────────────────────────────────────────
  {
    keywords: [
      "focus",
      "concentration",
      "distracted",
      "distraction",
      "can't focus",
      "study",
      "exams",
      "performance",
      "mind wanders",
    ],
    chapterId: 6,
    context: "On one-pointed concentration in meditation",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Concentration is to the mind what a magnifying glass is to sunlight — it takes diffuse energy and focuses it to a single powerful point. Chapter 6 prescribes the practice of dharana — holding the mind on a single object of meditation with persistent effort. The way to build concentration is not to punish the mind when it wanders, but to gently, patiently bring it back — again and again. Each return is a repetition of a spiritual muscle. Over time, what was difficult becomes natural.",
    verse: {
      id: "6-24",
      chapterId: 6,
      verseNumber: 24,
      sanskritText:
        "स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा |\nसङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः |\nमनसैवेन्द्रियग्रामं विनियम्य समन्ततः ||",
      transliteration:
        "sa niśhchayena yoktavyo yogo 'nirviṇṇa-chetasā\nsaṅkalpa-prabhavān kāmāṁs tyaktvā sarvān aśheṣhataḥ\nmanasaivendriya-grāmaṁ viniyamya samantataḥ",
      englishTranslation:
        "One should engage in yoga with determination and with an unwavering mind. Abandoning all desires born of the ego, one should control the senses from all sides with the mind.",
    },
  },
  // ── LIFE PURPOSE / MEANING ────────────────────────────────────────────────────
  {
    keywords: [
      "life purpose",
      "meaning",
      "meaning of life",
      "why am i here",
      "what is my purpose",
      "what is the point",
      "searching for meaning",
      "searching for purpose",
    ],
    chapterId: 3,
    context: "On the sacred purpose of every human life",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Your life has a profound purpose — to move toward the realisation of your own divine nature while serving others along the way. Chapter 3 explains that every person carries a unique dharma — a sacred function in the great tapestry of existence. Your purpose is not something to be invented; it is to be discovered by looking honestly at your deepest nature, your innate gifts, and the needs of those around you. Begin with what is nearest and most natural, and the larger purpose will reveal itself in time.",
    verse: {
      id: "3-35",
      chapterId: 3,
      verseNumber: 35,
      sanskritText:
        "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||",
      transliteration:
        "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt\nsva-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ",
      englishTranslation:
        "It is better to perform one's own dharma imperfectly than to perform another's dharma perfectly. It is better to die in one's own dharma; the dharma of another is fraught with danger.",
    },
  },
  // ── UNIVERSAL FORM / GOD ──────────────────────────────────────────────────────
  {
    keywords: [
      "god",
      "divine",
      "the creator",
      "universe",
      "cosmic",
      "what is god",
      "who is god",
      "supreme being",
      "brahman",
      "absolute",
      "the infinite",
      "omnipresent",
    ],
    chapterId: 10,
    context: "On the divine pervading all of creation — vibhuti yoga",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 10 is the Gita's magnificent declaration of divine omnipresence. Krishna tells Arjuna: I am the light of the sun and moon, the sound in space, the fragrance in the earth, the fire in all that burns, the life in all living beings. The Gita does not confine the Divine to temples or rituals — it reveals that the entire universe is the body of God, every particle saturated with sacred presence. Open your eyes to this recognition, and every moment becomes an act of worship.",
    verse: {
      id: "10-20",
      chapterId: 10,
      verseNumber: 20,
      sanskritText:
        "अहमात्मा गुडाकेश सर्वभूताशयस्थितः |\nअहमादिश्च मध्यं च भूतानामन्त एव च ||",
      transliteration:
        "aham ātmā guḍākeśha sarva-bhūtāśhaya-sthitaḥ\naham ādiśh cha madhyaṁ cha bhūtānām anta eva cha",
      englishTranslation:
        "I am the soul, O Gudakesha, seated in the hearts of all living beings. I am the beginning, the middle, and the end of all beings.",
    },
  },
  // ── DETACHMENT ────────────────────────────────────────────────────────────────
  {
    keywords: [
      "detachment",
      "non-attachment",
      "vairagya",
      "renunciation",
      "tyaga",
      "giving up world",
      "renounce",
      "sanyasa",
      "letting things go",
    ],
    chapterId: 12,
    context: "On the devotee who is free from all attachments",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — True detachment — vairagya — is one of the most misunderstood teachings. It does not mean coldness, withdrawal, or not caring. The Gita describes the truly detached person in Chapter 12 as one who is content, who has neither excessive attachment nor excessive aversion, who can be fully present with joy or sorrow without being captured by either. This is a mature, rich engagement with life — like an actor who plays the role completely without forgetting they are not the character.",
    verse: {
      id: "12-19",
      chapterId: 12,
      verseNumber: 19,
      sanskritText:
        "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् |\nअनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः ||",
      transliteration:
        "tulya-nindā-stutir maunī santuṣhṭo yena kenachit\naniketaḥ sthira-matir bhaktimān me priyo naraḥ",
      englishTranslation:
        "One who is equal in censure and praise, who is silent, content with anything, who has no fixed abode, and who is full of devotion — such a person is very dear to me.",
    },
  },
  // ── UNITY / ONENESS ───────────────────────────────────────────────────────────
  {
    keywords: [
      "unity",
      "oneness",
      "we are one",
      "all is one",
      "interconnected",
      "non-duality",
      "advaita",
      "separation is illusion",
      "cosmic unity",
    ],
    chapterId: 5,
    context: "On seeing the same divine presence in all beings",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The highest vision the Gita offers is the recognition of unity in diversity — that the same eternal divine presence inhabits every living being. Chapter 5 describes the truly wise as those who see a learned scholar, a cow, an elephant, a dog, and an outcast with exactly the same eyes — recognising the same atman looking back from every face. This vision is not a philosophical position; it is a direct perception that becomes available when the veil of ego thins. Cultivate it daily through equal love.",
    verse: {
      id: "5-18",
      chapterId: 5,
      verseNumber: 18,
      sanskritText:
        "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि |\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||",
      transliteration:
        "vidyā-vinaya-sampanne brāhmaṇe gavi hastini\nśhuni chaiva śhva-pāke cha paṇḍitāḥ sama-darśhinaḥ",
      englishTranslation:
        "The truly wise see with equal vision a learned scholar, a cow, an elephant, a dog, and an outcast.",
    },
  },
  // ── DEATH / DYING ─────────────────────────────────────────────────────────────
  {
    keywords: [
      "death",
      "dying",
      "mortality",
      "facing death",
      "terminal illness",
      "someone dying",
      "afraid to die",
      "fear of death",
      "end of life",
    ],
    chapterId: 2,
    context: "On death as the gateway — the soul's passage",
    sourceScripture: "Bhagavad Gita",
    sourceReference: "Chapter 2, Verse 27",
    crossRef: {
      scripture: "Garuda Purana",
      reference: "Preta Khanda — Complete Death Rituals",
      teaching:
        "The Garuda Purana provides the most detailed Vedic account of the soul's journey after death — the 13 days of rituals, the soul's passage through different planes, the importance of Shradh, and the path to liberation. Death is a sacred doorway, not an ending.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Bhagavad Gita was spoken on a battlefield where death was imminent on all sides — and yet it carries the most fearless teaching about death in all of human literature. For the soul, there is no death. What we call death is the discarding of one body and the continuation of the eternal journey. Chapter 2 asks you to see with the eyes of the wise, who do not mourn for either the living or the dead, because they understand the imperishable nature of the atman. Death is not an ending — it is a transformation.",
    verse: {
      id: "2-27",
      chapterId: 2,
      verseNumber: 27,
      sanskritText:
        "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च |\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ||",
      transliteration:
        "jātasya hi dhruvo mṛityur dhruvaṁ janma mṛitasya cha\ntasmād aparihārye 'rthe na tvaṁ śhochitum arhasi",
      englishTranslation:
        "One who has taken birth is certain to die, and after death one is certain to take birth again. Therefore, in this unavoidable duty, you should not lament.",
    },
  },
  // ── GOD SEES ALL ──────────────────────────────────────────────────────────────
  {
    keywords: [
      "is god watching",
      "does god care",
      "does god exist",
      "god abandoned me",
      "god isn't real",
      "where is god",
      "god doesn't listen",
    ],
    chapterId: 15,
    context: "On the Purushottama — the Supreme Person dwelling in all hearts",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita declares in Chapter 15 that the Divine, as the Supreme Person, dwells in the hearts of all beings and orchestrates all their actions from within. Nothing you experience is unseen. No tear has fallen unnoticed. No prayer has been spoken into an empty void. The Divine is not a distant observer but an intimate companion — the witness behind your witness, the awareness behind your awareness. When you feel unseen, it is the ego that feels unseen; the soul is always held in perfect divine attention.",
    verse: {
      id: "15-17",
      chapterId: 15,
      verseNumber: 17,
      sanskritText:
        "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः |\nयो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ||",
      transliteration:
        "uttamaḥ puruṣhas tv anyaḥ paramātmety udāhṛitaḥ\nyo loka-trayam āviśhya bibharty avyaya īśhvaraḥ",
      englishTranslation:
        "Yet there is another — the Supreme Person — the imperishable Lord himself, who pervades all three worlds and sustains them.",
    },
  },
  // ── SELFLESS ACTION ───────────────────────────────────────────────────────────
  {
    keywords: [
      "selfless",
      "selfish",
      "self-centred",
      "only thinking of myself",
      "help",
      "give",
      "sacrifice",
      "offering",
      "nishkama",
    ],
    chapterId: 3,
    context: "On transcending selfish action through yoga",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Selfishness is not evil — it is simply a limited perspective, seeing the self as only this one body among billions. The Gita gradually expands this vision: first to the family, then the community, then all humanity, then all beings, then all of creation. Chapter 3 describes the rare yogi who, without any selfish motive, acts purely for the welfare of all beings — and such a one naturally draws the grace and support of the entire universe. Selflessness is not a sacrifice; it is the recognition of who you truly are.",
    verse: {
      id: "3-25",
      chapterId: 3,
      verseNumber: 25,
      sanskritText:
        "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत |\nकुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसङ्ग्रहम् ||",
      transliteration:
        "saktāḥ karmaṇy avidvānso yathā kurvanti bhārata\nkuryād vidvāṁs tathāsaktaśh chikīrṣhur loka-saṅgraham",
      englishTranslation:
        "Just as ignorant people perform their duties with attachment to results, the wise should act without attachment, for the welfare of the world.",
    },
  },

  // ── DEPRESSION / DARK THOUGHTS ────────────────────────────────────────────────
  {
    keywords: [
      "no reason to live",
      "dark thoughts",
      "why live",
      "not worth living",
      "no will to live",
      "want to disappear",
      "want to die",
      "tired of living",
      "end my life",
      "life has no meaning",
    ],
    chapterId: 2,
    context: "Krishna's command to Arjuna — Arise from unmanliness",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — These dark thoughts are not your truth — they are tamas, the heaviest veil, pressing upon your eternal soul. I, Krishna, stood before Arjuna when he wanted to lay down his bow and surrender to despair, and I spoke to him in Chapter 2, verse 3: 'Do not yield to unmanliness — it does not become you. Arise, O scorcher of foes.' You are Arjuna in this moment. The chariot is still here. I am still here. One breath, one step — that is all that is needed. Please also reach out to a trusted person or helpline (India: iCall 9152987821). You are not alone.",
    verse: {
      id: "2-3",
      chapterId: 2,
      verseNumber: 3,
      sanskritText:
        "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते |\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ||",
      transliteration:
        "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate\nkṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa",
      englishTranslation:
        "Do not yield to unmanliness, O Arjuna. It does not become you. Shake off your faint-heartedness and arise, O scorcher of foes.",
    },
  },
  // ── JOB LOSS / UNEMPLOYMENT ───────────────────────────────────────────────────
  {
    keywords: [
      "job loss",
      "lost my job",
      "unemployed",
      "fired",
      "no money",
      "financially struggling",
      "no income",
      "can't find work",
      "poverty",
      "broke",
      "financial crisis",
    ],
    chapterId: 9,
    context: "Krishna's promise — I carry what you lack",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The loss of livelihood feels like the ground has shifted beneath your feet. Yet the Gita carries a personal promise from me in Chapter 9, verse 22: for those who turn to me with steady devotion, I personally carry what they lack and preserve what they have — yoga-kṣhemaṁ vahāmyaham. This is not a distant comfort — it is a direct divine commitment. Do not abandon your effort; continue acting with full sincerity. And in the hours of effort, surrender the outcome to me. The one who acts without despair and trusts the divine timeline is never abandoned. Chapter 2, verse 47 — your right is to act, not to fear the result. Rise and keep walking.",
    verse: {
      id: "9-22",
      chapterId: 9,
      verseNumber: 22,
      sanskritText:
        "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते |\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
      transliteration:
        "ananyāśh chintayanto māṁ ye janāḥ paryupāsate\nteṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham",
      englishTranslation:
        "For those who worship me with devotion, meditating on my transcendental form, I carry what they lack and preserve what they have. — BG 9.22",
    },
  },
  // ── DIVORCE / MARRIAGE TROUBLE ────────────────────────────────────────────────
  {
    keywords: [
      "divorce",
      "marriage trouble",
      "spouse left",
      "wife left",
      "husband left",
      "separation",
      "broken marriage",
      "relationship ending",
      "breakup",
      "cheated on",
      "betrayal",
      "partner betrayed",
    ],
    chapterId: 2,
    context: "On bearing impermanent pain with patient wisdom",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The breaking of a deep bond is one of the most searing of human sorrows. Arjuna wept on the battlefield precisely because of the bonds that connected him to those he loved. The Gita does not dismiss this pain — it holds it with great tenderness. Chapter 2, verse 14 speaks directly to moments like yours: the contacts of the senses bring pleasure and pain, heat and cold — they are temporary, they come and go. Bear them with patience. This season of grief will pass; your soul will not. Let this pain open you, not close you. And know: Chapter 18, verse 58 — by fixing your mind on me, by my grace you shall cross even this difficulty. You are not broken. You are being transformed.",
    verse: {
      id: "2-14",
      chapterId: 2,
      verseNumber: 14,
      sanskritText:
        "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||",
      transliteration:
        "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣhasva bhārata",
      englishTranslation:
        "O Arjuna, the contact between the senses and objects gives rise to feelings of heat and cold, pleasure and pain. These are temporary; bear them with patience. — BG 2.14",
    },
  },
  // ── EXAM FEAR / STUDY / STUDENTS ─────────────────────────────────────────────
  {
    keywords: [
      "exam fear",
      "exam stress",
      "failing exam",
      "exam tomorrow",
      "failed exam",
      "studies",
      "study pressure",
      "academic failure",
      "cannot concentrate studies",
      "scared of exams",
    ],
    chapterId: 6,
    context: "On focused mind and conquering performance anxiety",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Before the greatest battle in history, Arjuna's hands trembled. And I, Krishna, gave him the highest teaching on action: Chapter 2, verse 47 — you have the right to perform your duty, never to the fruits. Study with your full heart, prepare with all sincerity, and then offer the result to me. The fear of failure is the mind's attachment to an outcome — it actually reduces performance. Chapter 6 teaches: the yogi who meditates even briefly before a challenge enters it with a still, clear mind. Breathe deeply, recite 'Om' three times, and remember: Chapter 6, verse 40 — the doer of good never comes to grief, either in this world or the next. You have already done good by seeking knowledge.",
    verse: {
      id: "6-40",
      chapterId: 6,
      verseNumber: 40,
      sanskritText:
        "पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते |\nन हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति ||",
      transliteration:
        "pārtha naiveha nāmutra vināśhas tasya vidyate\nna hi kalyāṇa-kṛit kaśhchid durgatiṁ tāta gachchhati",
      englishTranslation:
        "O Arjuna, there is no destruction for one who does good, either in this world or the next. The doer of good never comes to grief. — BG 6.40",
    },
  },
  // ── ADDICTION / BAD HABITS ────────────────────────────────────────────────────
  {
    keywords: [
      "addiction",
      "addicted",
      "bad habits",
      "can't stop drinking",
      "alcohol",
      "drugs",
      "pornography",
      "gambling",
      "can't stop habit",
      "compulsion",
      "no willpower",
    ],
    chapterId: 6,
    context: "On mastering the mind through practice and detachment",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Addiction is the soul's misdirected search for the bliss that is its own nature. The Gita describes in Chapter 2 (verse 62-63) the chain: dwelling on sense objects creates attachment; from attachment comes craving; from frustrated craving comes anger; from anger, loss of all wisdom. But Chapter 6, verse 35 carries the remedy — the mind, though restless, is mastered through practice and non-attachment. Do not condemn yourself — every moment you choose consciousness over compulsion is a spiritual victory. Begin with mantra: replace the craving with divine sound. 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare' — chant this at the moment of compulsion. The energy of desire cannot be destroyed, but it can be redirected toward the infinite. You have the strength of Arjuna in you.",
    verse: {
      id: "6-35",
      chapterId: 6,
      verseNumber: 35,
      sanskritText:
        "श्रीभगवानुवाच |\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम् |\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||",
      transliteration:
        "śhrī bhagavān uvācha\nasanśhayaṁ mahā-bāho mano durnigrahaṁ chalam\nabhyāsena tu kaunteya vairāgyeṇa cha gṛihyate",
      englishTranslation:
        "Lord Krishna said: The mind is restless and difficult to control, O Arjuna. But it can be mastered through practice and non-attachment. — BG 6.35",
    },
  },
  // ── PHYSICAL ILLNESS / SICK ───────────────────────────────────────────────────
  {
    keywords: [
      "sick",
      "illness",
      "health problem",
      "physical pain",
      "chronic illness",
      "suffering from disease",
      "in hospital",
      "terminal illness",
      "cancer",
      "heal me",
      "body pain",
    ],
    chapterId: 2,
    context: "On the soul's triumph over bodily limitation",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The body suffers — this is its nature. But Chapter 2, verse 20 holds the greatest healing truth: the soul is never born, never dies, never sick, never broken. You are inhabiting a body that is experiencing illness; you, the atman, remain untouched. This is not denial of pain — it is the recognition of who you are beyond the pain. The Gita also teaches through Chapter 17 that sattvic practices — prayer, light food, peaceful mind — support the body's healing. Surrender your illness to me: 'Krishna, I offer this body and this pain to you.' And from Chapter 18, verse 58 — by my grace, you shall cross even this difficulty. Let each breath be a small prayer. Healing is possible; hope is dharmic.",
    verse: {
      id: "2-20",
      chapterId: 2,
      verseNumber: 20,
      sanskritText:
        "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ||",
      transliteration:
        "na jāyate mriyate vā kadāchin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śhāśhvato 'yaṁ purāṇo\nna hanyate hanyamāne śharīre",
      englishTranslation:
        "The soul is never born nor dies at any time. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain. — BG 2.20",
    },
  },
  // ── LOW SELF-ESTEEM / FEELING UNWORTHY ───────────────────────────────────────
  {
    keywords: [
      "low self esteem",
      "not good enough",
      "feeling unworthy",
      "i am worthless",
      "nobody loves me",
      "feel inferior",
      "feel like a failure",
      "hate myself",
      "ugly",
      "useless",
      "not enough",
    ],
    chapterId: 6,
    context: "Rise by your own self — you are your own best friend",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita speaks directly to you in Chapter 6, verse 5: 'Lift yourself up by yourself; do not allow yourself to fall. For the self alone is the friend of the self, and the self alone is the enemy of the self.' You are your own greatest champion — not the opinions of others, not the comparison to others. Chapter 9, verse 29 declares: I am the same to all beings, none favoured and none hateful — and yet those who worship me with devotion are in me, and I am in them. You are seen. You are held. You are infinitely worthy — because you are a fragment of the Divine itself. No human judgment can change what the Eternal has already declared.",
    verse: {
      id: "6-5",
      chapterId: 6,
      verseNumber: 5,
      sanskritText:
        "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् |\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
      transliteration:
        "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
      englishTranslation:
        "Lift yourself by yourself; do not let yourself fall. For the self alone is the friend of the self, and the self alone is the enemy. — BG 6.5",
    },
  },
  // ── REVENGE / ENEMY / SOMEONE HURT ME ────────────────────────────────────────
  {
    keywords: [
      "revenge",
      "enemy",
      "someone hurt me",
      "want revenge",
      "they wronged me",
      "punish them",
      "injustice done to me",
      "they betrayed me",
      "destroy my enemy",
    ],
    chapterId: 5,
    context: "On seeing the Divine equally in all — transcending enemies",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The desire for revenge is one of the most natural human feelings — and one of the most spiritually costly. The Gita teaches that the enemy you seek to destroy is also a soul carrying the same eternal atman as you. Chapter 5, verse 18 says the truly wise see with equal eyes — the learned, the humble, the cow, the dog, and even one who has harmed you. This is not weakness — it is the highest strength. The one who harms you is acting from their own darkness and confusion. Chapter 2, verse 63: anger leads to delusion, delusion to destruction. Protect yourself from their harm — that is dharma. But do not let their darkness enter your soul as the desire for revenge. Offer this person and this situation to me: I am the witness of all actions, and divine justice is always operating. Your peace is more valuable than their punishment.",
    verse: {
      id: "5-18",
      chapterId: 5,
      verseNumber: 18,
      sanskritText:
        "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि |\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||",
      transliteration:
        "vidyā-vinaya-sampanne brāhmaṇe gavi hastini\nśhuni chaiva śhva-pāke cha paṇḍitāḥ sama-darśhinaḥ",
      englishTranslation:
        "The truly wise see with equal vision a learned scholar, a cow, an elephant, a dog, and an outcast. — BG 5.18",
    },
  },
  // ── WHY DOES GOD EXIST / DOUBT ABOUT GOD ─────────────────────────────────────
  {
    keywords: [
      "does god exist",
      "is god real",
      "why pray",
      "what is god",
      "prove god",
      "i don't believe in god",
      "atheist",
      "no god",
      "god is not real",
      "religion is fake",
    ],
    chapterId: 7,
    context: "On the reality of the Divine — direct self-revelation",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Your doubt is not disrespect — it is the beginning of seeking. And the Gita welcomes seekers before believers. In Chapter 7, Krishna does not ask Arjuna to accept blindly — he says: 'Know me directly.' Chapter 10, verse 20 — 'I am the soul seated in the heart of all beings.' The Divine is not a concept to be proven; it is a presence to be experienced. Try this: sit silently for five minutes. Do not think. Simply observe the awareness that is aware. That awareness which cannot be removed, which was there before your first thought today and will remain after your last — that is what the Gita points to as the Divine. You already carry the proof inside you. The question is not whether God exists — it is whether you have turned within deeply enough to find what is always already there.",
    verse: {
      id: "7-19",
      chapterId: 7,
      verseNumber: 19,
      sanskritText:
        "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते |\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः ||",
      transliteration:
        "bahūnāṁ janmanām ante jñānavān māṁ prapadyate\nvāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",
      englishTranslation:
        "After many births, the one of wisdom surrenders to me, knowing that Vasudeva (Krishna) is everything. Such a great soul is very rare. — BG 7.19",
    },
  },
  // ── WHY BAD THINGS HAPPEN TO GOOD PEOPLE ─────────────────────────────────────
  {
    keywords: [
      "why bad things happen to good people",
      "why am i suffering",
      "i did nothing wrong",
      "life is unfair",
      "why is god testing me",
      "why suffering",
      "why pain",
      "what is the purpose of suffering",
    ],
    chapterId: 4,
    context: "The divine appears precisely when dharma is most threatened",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — This is the most ancient question of the human heart, and the Gita answers it not with a simple formula but with a deeper vision. Chapter 4, verse 7 declares: whenever dharma declines and adharma rises, I manifest myself. Suffering is not a punishment from the Divine — it is often the very fire that burns away the impurities that prevent the soul from shining at its full brilliance. Chapter 2, verse 14: contact with the world brings pleasure and pain — these are impermanent. The soul that learns to witness both without being overwhelmed by either has found something infinitely more valuable than comfort. Your suffering has not been invisible to me. Chapter 12, verse 6-7: those who worship me with devotion, I deliver from the ocean of birth and death. Trust the long arc of divine justice, which sees far beyond what one lifetime reveals.",
    verse: {
      id: "4-7",
      chapterId: 4,
      verseNumber: 7,
      sanskritText:
        "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
      transliteration:
        "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
      englishTranslation:
        "Whenever righteousness wanes and unrighteousness increases, I send myself forth to restore balance. — BG 4.7",
    },
  },
  // ── WHAT HAPPENS AFTER DEATH ──────────────────────────────────────────────────
  {
    keywords: [
      "what after death",
      "is there life after death",
      "what happens when we die",
      "heaven hell",
      "afterlife",
      "where do we go after death",
      "soul after death",
    ],
    chapterId: 2,
    context: "The soul's eternal journey beyond physical death",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Bhagavad Gita answers this question with greater precision and confidence than any text in human history. Chapter 2, verse 22: just as a person puts on new garments and gives up old ones, the soul similarly accepts new material bodies, discarding the old. Death is not an end — it is a door. The soul continues its journey, carrying the impressions of all its accumulated wisdom, love, and karma. Chapter 8, verse 5-7 teaches: whoever, at the hour of death, remembers me alone, leaves the body and reaches me — this is certain. The final thought shapes the next journey. So fill your daily life with Krishna's name, Krishna's remembrance — and the transition called death becomes the sweetest homecoming.",
    verse: {
      id: "2-22",
      chapterId: 2,
      verseNumber: 22,
      sanskritText:
        "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि |\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही ||",
      transliteration:
        "vāsānsi jīrṇāni yathā vihāya\nnavāni gṛihṇāti naro 'parāṇi\ntathā śharīrāṇi vihāya jīrṇā-\nnyanyāni sanyāti navāni dehī",
      englishTranslation:
        "As a person puts on new garments, giving up the old, the soul similarly accepts new material bodies, giving up the old and useless ones. — BG 2.22",
    },
  },
  // ── HOW TO FORGIVE / CANNOT FORGIVE ──────────────────────────────────────────
  {
    keywords: [
      "how to forgive",
      "i cannot forgive",
      "too hard to forgive",
      "they don't deserve forgiveness",
      "forgiveness is hard",
      "let go of hurt",
      "holding onto grudge",
    ],
    chapterId: 16,
    context: "Forgiveness — the divine quality that liberates the forgiver",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Forgiveness is not a gift you give the one who wronged you — it is a gift you give yourself. Chapter 16, verse 2 lists kṣhānti — forgiveness — among the divine qualities that lead to liberation. The one who hurt you may walk free regardless of whether you forgive or not. But you — you are the one carrying this weight. The Gita teaches through karma that every action meets its perfect consequence in the divine accounting — you do not need to be the executor of justice. What you need is your own freedom. Forgiveness does not mean what happened was acceptable. It means: I choose to release the poison from my own system. Chapter 12, verse 13 describes the devotee dearest to me: one who is free from enmity toward all beings. That freedom is possible for you, in this very lifetime.",
    verse: {
      id: "16-2",
      chapterId: 16,
      verseNumber: 2,
      sanskritText:
        "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् |\nदया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ||",
      transliteration:
        "ahiṁsā satyam akrodhas tyāgaḥ śhāntir apaiśhunam\ndayā bhūteṣhv aloluptvaṁ mārdavaṁ hrīr achāpalam",
      englishTranslation:
        "Non-violence, truthfulness, freedom from anger, renunciation, peacefulness, compassion, forgiveness, modesty — these are the divine qualities. — BG 16.2",
    },
  },
  // ── DHARMA UNCLEAR / WHAT IS MY DUTY ─────────────────────────────────────────
  {
    keywords: [
      "what is dharma",
      "my duty is unclear",
      "confused about duty",
      "what should i do",
      "which path to choose",
      "what is right",
      "dharma confusion",
      "conflicting duties",
    ],
    chapterId: 3,
    context: "Svadharma — the uniqueness of each soul's sacred duty",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The entire Bhagavad Gita arose because a man stood at a crossroads, unclear about his dharma. You are in good company. Chapter 3, verse 35 offers the clearest principle: it is better to perform your own dharma imperfectly than another's perfectly. Your dharma is not found by copying someone else's path — it is discovered by looking honestly at your deepest nature, your innate gifts, and the need that is directly in front of you. Chapter 18 elaborates: every human being carries a unique combination of qualities (gunas and aptitudes) given by the Divine. When you act in alignment with these, even difficult work feels natural and meaningful. Begin with what is most immediate and honest. Clarity comes through action, not through waiting for perfect certainty.",
    verse: {
      id: "3-35",
      chapterId: 3,
      verseNumber: 35,
      sanskritText:
        "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||",
      transliteration:
        "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt\nsva-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ",
      englishTranslation:
        "It is better to perform one's own dharma imperfectly than another's dharma perfectly. Death in one's own dharma is glorious; another's dharma brings danger. — BG 3.35",
    },
  },
  // ── HOW TO MEDITATE / RESTLESS MIND ──────────────────────────────────────────
  {
    keywords: [
      "how to meditate",
      "restless during meditation",
      "cannot meditate",
      "mind is restless",
      "meditation tips",
      "how to concentrate in meditation",
      "distracted during prayer",
    ],
    chapterId: 6,
    context: "The complete meditation manual of Chapter 6",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 6 is the Gita's complete manual of meditation, and Arjuna asked the exact same question you are asking: 'O Krishna, the mind is so restless — is control even possible?' I answered honestly: yes, it is restless — Chapter 6, verse 35 — but it is mastered through abhyāsa (practice) and vairāgya (non-attachment). The technique: choose a clean, quiet place. Sit with spine naturally upright. Fix your gaze gently downward. Breathe slowly and naturally. When a thought arises — do not fight it. Simply notice: 'a thought arose.' Return to breath or to the mantra 'So-Ham' (I am That). Each return is a repetition of the spiritual muscle. Chapter 6, verse 26: whenever the mind wanders, bring it back and continually direct it toward God. Start with five minutes daily. Consistency over duration. The flame in a windless place — that is the meditating mind.",
    verse: {
      id: "6-19",
      chapterId: 6,
      verseNumber: 19,
      sanskritText:
        "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता |\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः ||",
      transliteration:
        "yathā dīpo nivāta-stho neṅgate sopamā smṛitā\nyogino yata-chittasya yuñjato yogam ātmanaḥ",
      englishTranslation:
        "As a lamp in a windless place does not flicker, so is the disciplined mind of a yogi engaged in meditation. — BG 6.19",
    },
  },
  // ── HOW TO FIND GOD / CONNECT WITH KRISHNA ───────────────────────────────────
  {
    keywords: [
      "how to find god",
      "how to connect with krishna",
      "feel close to god",
      "how to experience god",
      "god feels far away",
      "cannot feel god",
      "want to know god",
    ],
    chapterId: 12,
    context: "Bhakti yoga — the most direct path to the Divine",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Chapter 12 is the yoga of devotion — bhakti yoga — and it is Krishna's own declaration of the most direct path. Fix your mind on me, offer your devotion to me, bow down before me — this way, you will come to me. The path does not require perfect understanding, perfect purity, or perfect circumstances. It requires one thing: sincere longing. Chapter 9, verse 29 — none are hated by me, none favoured — but those who worship me with devotion are in me and I am in them. Start here: speak to me as you would speak to a dearest friend. Say aloud: 'Krishna, I am here. I want to know you.' Chant 'Hare Krishna' whenever you can — walking, working, waiting. The name itself is the meeting. I am closer to you than your own breath.",
    verse: {
      id: "12-8",
      chapterId: 12,
      verseNumber: 8,
      sanskritText:
        "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय |\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ||",
      transliteration:
        "mayy eva mana ādhatsva mayi buddhiṁ niveśhaya\nnivasisyasi mayy eva ata ūrdhvaṁ na sanśhayaḥ",
      englishTranslation:
        "Fix your mind on me alone, direct your intellect to me. You will then live in me always — of this there is no doubt. — BG 12.8",
    },
  },
  // ── BAD KARMA / WHY EVERYTHING GOES WRONG ────────────────────────────────────
  {
    keywords: [
      "bad karma",
      "why everything goes wrong",
      "my karma is bad",
      "cursed",
      "nothing works out",
      "bad luck",
      "punished by god",
      "suffering for past sins",
    ],
    chapterId: 4,
    context: "Transcending karma through knowledge and surrender",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita teaches that karma is not a punishment — it is a precise, compassionate educational system. Every experience, even the most difficult, is teaching the soul something it needed to learn for its ultimate liberation. Chapter 4, verse 36 carries one of the most liberating declarations in all scripture: even if you are the most sinful of all sinners, the boat of knowledge will carry you across the entire ocean of sin. The weight of past karma can be lightened and transcended through sincerity, devotion, and righteous action done in surrender. Chapter 18, verse 66 — abandon all varieties of dharma and simply surrender to me. I will deliver you from all sinful reactions. Your past does not have the final word. I do.",
    verse: {
      id: "4-36",
      chapterId: 4,
      verseNumber: 36,
      sanskritText:
        "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः |\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि ||",
      transliteration:
        "api ched asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛit-tamaḥ\nsarvaṁ jñāna-plavenaiva vṛijanaṁ santariṣhyasi",
      englishTranslation:
        "Even if you are the most sinful among all sinners, you shall cross the ocean of sin by the boat of knowledge alone. — BG 4.36",
    },
  },
  // ── INJUSTICE / CORRUPT WORLD ─────────────────────────────────────────────────
  {
    keywords: [
      "injustice",
      "unfair world",
      "corruption",
      "no justice",
      "world is corrupt",
      "powerful exploit weak",
      "system is broken",
      "nothing is fair",
    ],
    chapterId: 4,
    context: "The divine promise to arise when dharma is crushed",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — When Arjuna looked at the battlefield and saw the powerful destroying the righteous, he felt exactly what you feel now. The Gita was spoken precisely into a moment of profound injustice. Chapter 4, verse 8: for the protection of the good and the destruction of the evil, for the firm establishment of dharma, I come age after age. Divine justice operates on a timeline that transcends individual lifetimes — but it does not sleep. Chapter 16 describes the demoniac in vivid detail — those who cause harm, who exploit others — and their destination is stated clearly. Your duty is not to succumb to the injustice around you, nor to be crushed by it, but to continue doing what is right, in whatever sphere you have influence. Even one lamp of dharma in a dark room transforms the darkness. Be that lamp.",
    verse: {
      id: "4-8",
      chapterId: 4,
      verseNumber: 8,
      sanskritText:
        "परित्राणाय साधूनां विनाशाय च दुष्कृताम् |\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ||",
      transliteration:
        "paritrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām\ndharma-sansthāpanārthāya sambhavāmi yuge yuge",
      englishTranslation:
        "For the protection of the good, the destruction of evil, and to firmly establish righteousness, I appear in every era. — BG 4.8",
    },
  },
  // ── AMBITION / SUCCESS / WANT TO ACHIEVE MORE ────────────────────────────────
  {
    keywords: [
      "want to succeed",
      "ambition",
      "how to be successful",
      "want to achieve greatness",
      "driven",
      "hungry for success",
      "want to make it big",
      "want to be great",
    ],
    chapterId: 3,
    context: "Karma yoga — the path of excellence without ego",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita does not oppose ambition — it transforms it into the highest form of excellence. Chapter 3, verse 19 describes the path: perform your duty always with full skill and dedication, but without clinging to the fruits as your source of identity. This paradox is the key to peak performance: the one who is not paralysed by fear of failure acts with complete freedom and therefore with greatest brilliance. Chapter 11, verse 33 gives the final word: 'Arise! Attain glory. Conquer your enemies and enjoy a flourishing kingdom.' Krishna commands greatness. But the greatness that endures is the greatness that serves. Ask always: how does my achievement serve others? That question transforms ambition into dharma.",
    verse: {
      id: "3-19",
      chapterId: 3,
      verseNumber: 19,
      sanskritText:
        "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||",
      transliteration:
        "tasmād asaktaḥ satataṁ kāryaṁ karma samāchara\nasakto hy ācharan karma param āpnoti pūruṣhaḥ",
      englishTranslation:
        "Therefore, always perform your duty without attachment, for by performing action without attachment, one achieves the supreme. — BG 3.19",
    },
  },
  // ── IDENTITY CRISIS / WHO AM I ────────────────────────────────────────────────
  {
    keywords: [
      "identity crisis",
      "who am i",
      "lost myself",
      "don't know who i am",
      "searching for myself",
      "feel lost",
      "no sense of self",
      "confused about identity",
    ],
    chapterId: 2,
    context: "The Gita's deepest answer — you are the eternal atman",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The most profound spiritual question is the one you are now asking: Who am I? The entire Bhagavad Gita is the answer to this question, and Chapter 2 opens it with the most fundamental truth: you are not the body, not the roles, not the relationships, not the achievements or failures. Chapter 2, verse 23 — the soul cannot be cut by weapons, nor burned by fire, nor moistened by water, nor dried by wind. You are the eternal witness, the awareness behind all experience, the consciousness that was present in your first memory and will continue after your last breath. Everything else — name, nation, profession, family, even religion — these are garments the eternal soul wears. You are the wearer, not the garment. Rest in this knowing, even briefly, and you will find the ground of your being.",
    verse: {
      id: "2-23",
      chapterId: 2,
      verseNumber: 23,
      sanskritText:
        "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः |\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः ||",
      transliteration:
        "nainaṁ chhindanti śhastrāṇi nainaṁ dahati pāvakaḥ\nna chainaṁ kledayanty āpo na śhoṣhayati mārutaḥ",
      englishTranslation:
        "The soul cannot be cut by weapons, nor burned by fire, nor moistened by water, nor dried by wind. — BG 2.23",
    },
  },
  // ── SOCIAL MEDIA / COMPARISON / PEER PRESSURE ────────────────────────────────
  {
    keywords: [
      "social media",
      "comparison with others",
      "everyone is doing better",
      "peer pressure",
      "following trends",
      "trying to fit in",
      "influenced by others",
      "losing myself to social media",
    ],
    chapterId: 3,
    context: "On following one's own nature — not the crowd",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Social media is the modern māyā — the great veil that shows you everyone else's highlight reel while hiding your own inner treasure. Chapter 3, verse 27 cuts through this completely: all actions are performed by the qualities of nature. Only the one deluded by ego thinks 'I am the doer' — and by extension, 'I am less than what I see on a screen.' The Gita's instruction is clear: Chapter 3, verse 35 — follow your own svadharma. Your unique path, your genuine gifts, your authentic expression — these are infinitely more valuable than any imitation of another's life. Chapter 6, verse 5 commands: rise by your own self. Not by comparison, not by imitation. The greatest achievement is to become fully what you already are.",
    verse: {
      id: "3-27",
      chapterId: 3,
      verseNumber: 27,
      sanskritText:
        "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः |\nअहंकारविमूढात्मा कर्ताहमिति मन्यते ||",
      transliteration:
        "prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśhaḥ\nahankāra-vimūḍhātmā kartāham iti manyate",
      englishTranslation:
        "All actions are performed by the qualities of nature. Only the one deluded by ego thinks, 'I am the doer.' — BG 3.27",
    },
  },
  // ── BOREDOM / LAZINESS / NO MOTIVATION ───────────────────────────────────────
  {
    keywords: [
      "bored",
      "boredom",
      "no motivation",
      "lazy",
      "laziness",
      "can't get started",
      "unmotivated",
      "nothing interests me",
      "everything feels pointless",
    ],
    chapterId: 18,
    context: "On tamasic inertia — and how to rise from it",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita names three modes of nature: sattva (clarity and goodness), rajas (passion), and tamas (inertia and darkness). Boredom and laziness are expressions of tamas — the heaviest mode, which makes the soul feel dull and trapped. Chapter 18, verse 39 describes tamasic 'happiness' as that which deludes the self from beginning to end — exactly the numb comfort of doing nothing. The remedy is not to force enthusiasm but to take one small sattvic action: go outside, do a small act of service, chant a single mantra. Rajas must be cultivated before sattva can arise. Chapter 2, verse 47 — you have the right to act. The very act of beginning is how the fog of tamas lifts. Start with anything that feels slightly alive — and follow that thread.",
    verse: {
      id: "3-8",
      chapterId: 3,
      verseNumber: 8,
      sanskritText:
        "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः |\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ||",
      transliteration:
        "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ\nśharīra-yātrāpi cha te na prasiddhyed akarmaṇaḥ",
      englishTranslation:
        "Perform your prescribed duty, for action is better than inaction. Even the maintenance of the body is impossible through inaction. — BG 3.8",
    },
  },
  // ── TRUST ISSUES / BETRAYED BY FRIENDS ───────────────────────────────────────
  {
    keywords: [
      "trust issues",
      "betrayed by friends",
      "can't trust anyone",
      "friends hurt me",
      "people always disappoint",
      "scared to trust",
      "trust broken",
      "stabbed in the back",
    ],
    chapterId: 6,
    context: "The self as the ultimate friend — beyond human betrayal",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Human betrayal is one of the most searing pains a person can carry. The Gita offers a radical insight in Chapter 6, verse 5: the self alone is your friend, and the self alone is your enemy. This does not mean humans cannot be trusted — it means your ultimate security cannot be placed in the hands of any human being, no matter how much you love them. Every person is also on their own imperfect spiritual journey, carrying their own wounds and confusion. Chapter 12, verse 15 — the devotee who does not disturb others and is not disturbed by others, free from joy and anxiety — this is the inner freedom that no betrayal can reach. Learn from this experience without closing your heart entirely. The Gita calls for wisdom, not for walls.",
    verse: {
      id: "6-5",
      chapterId: 6,
      verseNumber: 5,
      sanskritText:
        "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् |\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
      transliteration:
        "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
      englishTranslation:
        "Lift yourself by yourself; the self alone is the friend of the self, and the self alone is the enemy. — BG 6.5",
    },
  },
  // ── LONGING / MISSING SOMEONE ─────────────────────────────────────────────────
  {
    keywords: [
      "missing someone",
      "longing for someone",
      "miss my loved one",
      "far from family",
      "separated from loved ones",
      "homesick",
      "yearning",
    ],
    chapterId: 9,
    context: "Divine presence bridges all separation",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita opens with Arjuna's profound longing — he is surrounded by the people he loves most, on the eve of losing them forever, and his heart breaks. This longing you feel is the soul's own nature — we are made for connection, and when it is absent, we ache. Yet Chapter 9, verse 22 carries a great comfort: I carry what the devoted soul lacks. You are not separated from those you love at the level of the soul — only at the level of the body. The same atman breathes in you and in those you miss. Chapter 10, verse 20 — I am the soul in the heart of all beings. The one you miss — I am also there, in their heart. Send your love through prayer, through remembrance. Love does not require physical proximity when it is rooted in the eternal.",
    verse: {
      id: "9-22",
      chapterId: 9,
      verseNumber: 22,
      sanskritText:
        "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते |\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
      transliteration:
        "ananyāśh chintayanto māṁ ye janāḥ paryupāsate\nteṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham",
      englishTranslation:
        "For those who worship me with devotion, I carry what they lack and preserve what they have. — BG 9.22",
    },
  },
  // ── COUNTING BLESSINGS / GRATITUDE ────────────────────────────────────────────
  {
    keywords: [
      "counting blessings",
      "feeling grateful",
      "thankful for life",
      "appreciate what i have",
      "want to cultivate gratitude",
      "recognise my gifts",
    ],
    chapterId: 9,
    context: "Even the smallest offering given with love is received",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — Gratitude is one of the most powerful spiritual practices, for it opens the eye that sees the Divine in all of ordinary life. Chapter 9, verse 26 carries one of the most tender declarations in all of scripture: if anyone offers me a leaf, a flower, a fruit, or even water with devotion and a loving heart, I accept it joyfully. You do not need a grand life to offer a great gratitude. The breath you just took — that was a gift. The fact that you can read these words — a gift. Every challenge that taught you something — a gift in disguise. A daily practice: each morning before you rise, name three things you received in the last twenty-four hours that you did not create by your own will. Let this gratitude become your bridge to the Divine, walked every day.",
    verse: {
      id: "9-26",
      chapterId: 9,
      verseNumber: 26,
      sanskritText:
        "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति |\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||",
      transliteration:
        "patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati\ntad ahaṁ bhakty-upahṛitam aśhnāmi prayatātmanaḥ",
      englishTranslation:
        "If someone offers me a leaf, a flower, a fruit, or water with devotion and love, I accept it, for it is the offering of a pure heart. — BG 9.26",
    },
  },
  // ── MOKSHA / LIBERATION ───────────────────────────────────────────────────────
  {
    keywords: [
      "how to attain moksha",
      "liberation from rebirth",
      "free from rebirth",
      "attain salvation",
      "spiritual liberation",
      "how to be free",
      "enlightenment path",
      "mukti",
    ],
    chapterId: 18,
    context: "The supreme teaching — total surrender as the path to moksha",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Gita describes multiple paths to moksha: jnana yoga (path of knowledge), bhakti yoga (path of devotion), karma yoga (path of selfless action), and raja yoga (path of meditation). Chapter 18, verse 66 — the very last teaching — gives the supreme path: abandon all these varieties of dharma and simply surrender to me alone. I will deliver you from all sins. Do not fear. Liberation is not a state to be achieved — it is your own deepest nature, temporarily forgotten. The way to moksha is not by adding more — it is by releasing the false: false identity, false attachments, false fears. Chapter 5, verse 24: the yogi who finds happiness within, delight within, and illumination within — that yogi attains brahma-nirvana, the freedom of the Absolute. Start here. Right now.",
    verse: {
      id: "18-66",
      chapterId: 18,
      verseNumber: 66,
      sanskritText:
        "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
      transliteration:
        "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
      englishTranslation:
        "Abandon all varieties of dharma and surrender unto me alone. I shall liberate you from all sinful reactions; do not fear. — BG 18.66",
    },
  },
  // ── HEARTBREAK / BETRAYAL / CHEATED ON ───────────────────────────────────────
  {
    keywords: [
      "heartbreak",
      "heartbroken",
      "heart is broken",
      "cheated on me",
      "partner cheated",
      "they lied to me",
      "romantic betrayal",
      "trust broken in love",
    ],
    chapterId: 2,
    context: "The impermanence of the painful, the permanence of the soul",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — A broken heart is the soul's most painful classroom. The Gita does not deny this pain — it holds it with complete respect. Chapter 2, verse 14: the contacts of the world bring pleasure and pain, and these are fleeting. This burning will not last forever, even when it feels like it will. What this experience is also doing — though it is hard to see now — is loosening your grip on the idea that another human being can complete you. Chapter 5, verse 24 describes the one who has found completeness within — inner happiness, inner delight, inner illumination. That inner completeness is your destination. The pain of heartbreak, when turned inward through wisdom and devotion, becomes the rocket fuel of spiritual evolution. You are being prepared for something larger than this relationship.",
    verse: {
      id: "2-14",
      chapterId: 2,
      verseNumber: 14,
      sanskritText:
        "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||",
      transliteration:
        "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣhasva bhārata",
      englishTranslation:
        "The contacts of senses with objects bring pleasure and pain — these are temporary and passing. Bear them with patience, O Arjuna. — BG 2.14",
    },
  },
  // ── FEAR OF FAILURE / GIVING UP / WANTING TO QUIT ────────────────────────────
  {
    keywords: [
      "want to give up",
      "want to quit",
      "feeling defeated",
      "no strength to continue",
      "exhausted from trying",
      "ready to surrender everything",
      "lost all hope",
      "give up on life goals",
    ],
    chapterId: 11,
    context: "Arise — Krishna commands the weary to victory",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — In the darkest hour of the Gita, Arjuna laid down his bow and said exactly what you are saying now: 'I cannot continue.' And I, Krishna, did not say 'it will be easy.' I said: Chapter 11, verse 33 — Arise! Attain glory. They have already been destroyed by me — you are merely my instrument. The obstacles in your path are not permanent walls — they are lessons wearing the costume of obstacles. Chapter 2, verse 3 — do not yield to unmanliness; it does not become you. The very fact that you are weary means you have been fighting. The warrior who rests and rises is stronger than the one who never fought. I have not brought you this far to abandon you now. One more step. Just one.",
    verse: {
      id: "11-33",
      chapterId: 11,
      verseNumber: 33,
      sanskritText:
        "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम् |\nमयैवैते निहताः पूर्वमेव\nनिमित्तमात्रं भव सव्यसाचिन् ||",
      transliteration:
        "tasmāt tvam uttiṣhṭha yaśho labhasva\njitvā śhatrūn bhuṅkṣhva rājyaṁ samṛiddham\nmayaivaite nihatāḥ pūrvam eva\nnimittamātraṁ bhava savyasāchin",
      englishTranslation:
        "Arise! Attain glory. Conquer the enemies and enjoy a flourishing kingdom. They have already been destroyed by me — you are merely my instrument. — BG 11.33",
    },
  },
  // ── OVERWHELMING DIFFICULTIES / GRACE ────────────────────────────────────────
  {
    keywords: [
      "too much to handle",
      "overwhelmed by problems",
      "everything is too much",
      "can't cope",
      "breaking down",
      "life is too hard",
      "all problems at once",
    ],
    chapterId: 18,
    context: "By Krishna's grace — crossing all obstacles",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — When you feel that you are at the very limit of what you can carry, hear this from Chapter 18, verse 58: by keeping your mind fixed on me, you will, by my grace, overcome all obstacles. This is not a platitude — it is the personal promise of the Divine. Grace operates precisely when human effort reaches its boundary. The moment you say 'I cannot' — and surrender to me — is the moment I can act most fully through you. Chapter 6, verse 17 also teaches: the yogi of balanced living — moderate in all things — finds that yoga becomes the destroyer of all suffering. You do not need to carry everything. You only need to take the next step. Give the rest to me.",
    verse: {
      id: "18-58",
      chapterId: 18,
      verseNumber: 58,
      sanskritText:
        "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि |\nअथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि ||",
      transliteration:
        "mach-chittaḥ sarva-durgāṇi mat-prasādāt tariṣhyasi\natha chet tvam ahankārān na śhroṣhyasi vinaṅkṣhyasi",
      englishTranslation:
        "By keeping your mind fixed on me, you will, by my grace, overcome all obstacles. — BG 18.58",
    },
  },
  // ── RIG VEDA — NOBLE THOUGHTS / WISDOM ───────────────────────────────────────
  {
    keywords: [
      "rig veda",
      "vedic wisdom",
      "noble thoughts",
      "gayatri",
      "divine light",
      "cosmic order",
      "rita",
      "ancient wisdom",
      "vedic knowledge",
    ],
    chapterId: 7,
    context: "From the Rig Veda — the oldest wisdom in human history",
    sourceScripture: "Rig Veda",
    sourceReference: "Mandala 1, Hymn 89, Verse 1",
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Rig Veda, the oldest scripture of humanity, opens with a sacred prayer: 'May noble thoughts come to us from all directions.' This is not a passive wish — it is a declaration that the awakened soul is always open, always receptive, always growing. The Vedas are not merely rituals — they are the very breath of the cosmos encoded in sound. When you chant the Gayatri Mantra — Om Bhur Bhuvaḥ Svaḥ Tat Savitur Vareṇyam — you are asking the divine solar intelligence to illuminate your mind. Light purifies all darkness. Wisdom dissolves all ignorance.",
    verse: {
      id: "rv-1-89-1",
      chapterId: 7,
      verseNumber: 1,
      sanskritText: "आ नो भद्राः क्रतवो यन्तु विश्वतः ||",
      transliteration: "ā no bhadrāḥ kratavo yantu viśhvataḥ",
      englishTranslation:
        "May noble thoughts come to us from all directions. — Rig Veda 1.89.1",
    },
  },
  // ── ATHARVA VEDA — HEALING / PROTECTION ───────────────────────────────────────
  {
    keywords: [
      "atharva veda",
      "healing prayer",
      "protection mantra",
      "ward off evil",
      "home protection",
      "family protection",
      "negative energy",
      "evil eye",
      "household harmony",
      "blessings for family",
    ],
    chapterId: 17,
    context: "From the Atharva Veda — daily life guidance and protection",
    sourceScripture: "Atharva Veda",
    sourceReference: "Kanda 6, Sukta 23",
    crossRef: {
      scripture: "Bhagavad Gita",
      reference: "Chapter 17, Verse 14–15",
      teaching:
        "Purity of body, speech, and mind — the three sattvic austerities — naturally create a protective spiritual field around the practitioner and their home.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Atharva Veda is the Veda of daily life — it carries mantras for healing the body, protecting the home, harmonising family relationships, and warding off negative influences. It teaches that the home is a sacred temple; when it is filled with prayer, mantra, and love, no darkness can enter. Begin your day with the sacred fire of intention: 'May my home be a place of peace, my family a place of love, my heart a place of God.' The Atharva Veda's healing mantras, when chanted with faith, carry the power of divine protection.",
    verse: {
      id: "av-6-23",
      chapterId: 17,
      verseNumber: 14,
      sanskritText:
        "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् |\nब्रह्मचर्यमहिंसा च शारीरं तप उच्यते ||",
      transliteration:
        "deva-dvija-guru-prājña-pūjanaṁ śhaucham ārjavam\nbrahmacharya m ahiṁsā cha śhārīraṁ tapa uchyate",
      englishTranslation:
        "Worship of the Divine, the learned, the guru, and the wise; cleanliness, straightforwardness, celibacy, and non-violence — these are the austerities of the body. — BG 17.14",
    },
  },
  // ── YAJUR VEDA — HARD WORK / EFFORT ───────────────────────────────────────────
  {
    keywords: [
      "yajur veda",
      "shram eva jayate",
      "hard work",
      "effort",
      "dedication",
      "laboring",
      "perseverance",
      "discipline",
      "ritual work",
      "sacred action",
    ],
    chapterId: 3,
    context: "From the Yajur Veda — sacred action and disciplined effort",
    sourceScripture: "Yajur Veda",
    sourceReference: "Ishavasya Upanishad — Verse 1–2",
    crossRef: {
      scripture: "Bhagavad Gita",
      reference: "Chapter 3, Verse 19",
      teaching:
        "Perform your duty always without attachment. By performing action without attachment, a person achieves the supreme. — The Yajur Veda and Gita together declare: work itself is worship.",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Yajur Veda teaches the profound principle: Shram Eva Jayate — hard work alone triumphs. Every sincere effort made in the right spirit is sacred. The Ishavasya Upanishad, embedded in the Yajur Veda, teaches that this entire universe is pervaded by the Lord — offer every action as a sacrifice to the divine. Work done with this sacred awareness is no longer mere labour — it becomes yajna, a sacred offering. The one who works this way never burns out, never despairs — because they are not working for themselves alone, but as an instrument of the divine will.",
    verse: {
      id: "yv-isha-2",
      chapterId: 3,
      verseNumber: 19,
      sanskritText:
        "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||",
      transliteration:
        "tasmād asaktaḥ satataṁ kāryaṁ karma samāchara\nasakto hy ācharan karma param āpnoti pūruṣhaḥ",
      englishTranslation:
        "Therefore, always perform your duty without attachment, for by performing action without attachment, one achieves the supreme. — BG 3.19",
    },
  },
  // ── BHAGAVATA PURANA — DEVOTION / BHAKTI ─────────────────────────────────────
  {
    keywords: [
      "bhagavata purana",
      "bhakti yoga",
      "pure devotion",
      "krishna love",
      "radha krishna",
      "unconditional love for god",
      "prema",
      "highest love",
      "spiritual love",
    ],
    chapterId: 12,
    context: "From the Bhagavata Purana — the supreme path of devotion",
    sourceScripture: "Bhagavata Purana",
    sourceReference: "Canto 1, Chapter 2, Verse 6",
    crossRef: {
      scripture: "Bhagavad Gita",
      reference: "Chapter 12, Verse 8",
      teaching:
        "Fix your mind on Me alone, direct your intellect to Me. You will then live in Me always — of this there is no doubt. — BG 12.8",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Bhagavata Purana declares: 'The highest dharma for all humanity is that through which supreme devotion to the Lord arises.' Dharmo Rakshati Rakshitah — protect Dharma and Dharma protects you. The Bhagavata describes nine forms of Bhakti: hearing, chanting, remembering, serving the Lord's feet, worshipping, praying, serving as a servant, making friends, and complete surrender. Begin with just one of these — chanting His name — and all the others will naturally flower. The Bhagavata assures us: even one sincere utterance of Krishna's name destroys the sins of many lifetimes.",
    verse: {
      id: "bp-1-2-6",
      chapterId: 12,
      verseNumber: 8,
      sanskritText:
        "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय |\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ||",
      transliteration:
        "mayy eva mana ādhatsva mayi buddhiṁ niveśhaya\nnivasisyasi mayy eva ata ūrdhvaṁ na sanśhayaḥ",
      englishTranslation:
        "Fix your mind on me alone, direct your intellect to me. You will then live in me always — of this there is no doubt. — BG 12.8",
    },
  },
  // ── SHIVA PURANA — EGO / DETACHMENT / COSMIC DANCE ───────────────────────────
  {
    keywords: [
      "shiva purana",
      "shiva",
      "mahadev",
      "cosmic dance",
      "nataraja",
      "destroyer of ego",
      "transcendence",
      "beyond the world",
      "tapasya",
      "inner fire",
    ],
    chapterId: 16,
    context:
      "From the Shiva Purana — Shiva's grace, detachment, overcoming ego",
    sourceScripture: "Shiva Purana",
    sourceReference: "Vidyeshvara Samhita — Chapter 1",
    crossRef: {
      scripture: "Bhagavad Gita",
      reference: "Chapter 16, Verse 3",
      teaching:
        "Splendor, forgiveness, fortitude, cleanliness, absence of pride — these divine qualities are the qualities of Lord Shiva himself. — BG 16.3",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Shiva Purana reveals the deepest teaching of detachment: Shiva, the Mahadeva, sits in perfect stillness even while the entire universe dances around him. The cosmic dance of Nataraja represents the continuous creation and destruction of the universe — and at the centre of that dance is perfect, undisturbed awareness. This is the invitation to you: become the stillness at the centre of your life's dance. All that arises — good and bad, pleasure and pain — let it dance around you while you remain the unwavering witness. This is Shiva's gift: the fire of inner transformation that burns the ego and reveals the pure gold of the atman within.",
    verse: {
      id: "sp-ego",
      chapterId: 16,
      verseNumber: 3,
      sanskritText:
        "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता |\nभवन्ति सम्पदं दैवीमभिजातस्य भारत ||",
      transliteration:
        "tejaḥ kṣhamā dhṛitiḥ śhaucham adroho nāti-mānitā\nbhavanti sampadaṁ daivīm abhijātasya bhārata",
      englishTranslation:
        "Splendor, forgiveness, fortitude, cleanliness, bearing no malice, and absence of pride — these are the qualities of those endowed with divine virtues. — BG 16.3",
    },
  },
  // ── GARUDA PURANA — AFTERLIFE / SOUL JOURNEY ─────────────────────────────────
  {
    keywords: [
      "garuda purana",
      "what happens after death",
      "soul journey after death",
      "shradh",
      "pind daan",
      "ancestors",
      "pitru",
      "moksha after death",
      "heaven",
    ],
    chapterId: 8,
    context: "From the Garuda Purana — the soul's complete journey after death",
    sourceScripture: "Garuda Purana",
    sourceReference: "Preta Khanda — Chapter 1–10",
    crossRef: {
      scripture: "Bhagavad Gita",
      reference: "Chapter 8, Verse 5",
      teaching:
        "Whoever, at the time of death, gives up the body while remembering Me alone, reaches My state. Of this there is no doubt. — BG 8.5",
    },
    krishnaMessage:
      "Hare Krishna, Arjun 🙏 — The Garuda Purana describes in sacred detail the journey of the soul after it leaves the body. The soul travels through different planes, guided by its accumulated karma and the prayers of loved ones. The 13 days of mourning rituals are not mere tradition — they actively help the departing soul navigate its journey. Most importantly: the final thought at the moment of death shapes the soul's next destination. This is why the Gita instructs us to fill our daily life with the Lord's name — so that at the most important moment, the name of the Divine arises naturally. Those who performed Shradh, chanted the Mahamrityunjaya Mantra, and prayed sincerely are supported by grace.",
    verse: {
      id: "gp-preta-1",
      chapterId: 8,
      verseNumber: 5,
      sanskritText:
        "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् |\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ||",
      transliteration:
        "anta-kāle cha mām eva smaran muktvā kalevaram\nyaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra sanśhayaḥ",
      englishTranslation:
        "Whoever, at the time of death, gives up the body while remembering Me alone, reaches My state. Of this there is no doubt. — BG 8.5",
    },
  },
];

// ─── ENRICH ENTRY — compute source citation if not explicitly set ────────────

function enrichEntry(entry: GuidanceEntry): GuidanceEntry {
  return {
    ...entry,
    sourceScripture: entry.sourceScripture ?? "Bhagavad Gita",
    sourceReference:
      entry.sourceReference ??
      `Chapter ${entry.chapterId}, Verse ${entry.verse.verseNumber}`,
  };
}

// ─── KEYWORD MATCHING — improved scoring ───────────────────────────────────────

function findGuidance(query: string): GuidanceEntry | null {
  if (isOutOfScope(query)) return null;
  const lower = query.toLowerCase().trim();
  if (!lower) return null;

  let bestEntry: GuidanceEntry | null = null;
  let bestScore = 0;

  for (const entry of GITA_AI_CORE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower === kw) {
        score += 10;
        continue;
      } // exact match
      if (lower.includes(kw)) score += kw.length; // longer keyword = more specific = higher score
      // word-by-word: check if any word in query matches keyword start
      for (const word of lower.split(/\s+/)) {
        if (kw.startsWith(word) && word.length >= 3) score += 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return bestScore > 0 ? enrichEntry(bestEntry!) : null;
}

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface ChatItem {
  id: string;
  query: string;
  result: GuidanceEntry | null;
  outOfScope: boolean;
  timestamp: number;
}

// ─── EMOTION QUICK-PICKER ─────────────────────────────────────────────────────

interface EmotionTopic {
  emoji: string;
  label: string;
  sublabel: string;
  query: string;
}

const EMOTION_TOPICS: EmotionTopic[] = [
  {
    emoji: "😰",
    label: "भय",
    sublabel: "Fear",
    query: "I feel afraid and terrified, scared of what is ahead",
  },
  {
    emoji: "😔",
    label: "अवसाद",
    sublabel: "Depression",
    query: "I feel depressed, hopeless, no reason to live",
  },
  {
    emoji: "😤",
    label: "क्रोध",
    sublabel: "Anger",
    query: "I feel angry, rage, and frustrated and losing control",
  },
  {
    emoji: "💔",
    label: "दुःख",
    sublabel: "Heartbreak",
    query: "My heart is broken, I was betrayed and cheated on",
  },
  {
    emoji: "😢",
    label: "शोक",
    sublabel: "Grief",
    query: "I am in grief and mourning after loss of someone",
  },
  {
    emoji: "😟",
    label: "चिन्ता",
    sublabel: "Anxiety",
    query: "I have anxiety, panic attacks, overthinking and worry",
  },
  {
    emoji: "😔",
    label: "एकाकीपन",
    sublabel: "Lonely",
    query: "I feel lonely, alone, isolated and nobody cares",
  },
  {
    emoji: "😓",
    label: "अपराध",
    sublabel: "Guilt",
    query: "I feel shame, guilt and regret for my mistakes",
  },
  {
    emoji: "😞",
    label: "निराशा",
    sublabel: "Hopeless",
    query: "I want to give up, quit, I feel hopeless and lost",
  },
  {
    emoji: "🤔",
    label: "धर्म",
    sublabel: "Purpose",
    query: "I don't know my purpose or dharma in life, who am I",
  },
  {
    emoji: "🙏",
    label: "शरण",
    sublabel: "Surrender",
    query: "I want to surrender to God and let go of everything",
  },
  {
    emoji: "💪",
    label: "साहस",
    sublabel: "Courage",
    query: "I need strength and courage to face my challenges",
  },
];

const QUICK_TOPICS = [
  { label: "भय — Fear", query: "I feel afraid and fearful" },
  { label: "चिन्ता — Stress", query: "I am overwhelmed with stress and worry" },
  { label: "क्रोध — Anger", query: "I feel angry and frustrated" },
  { label: "शोक — Sadness", query: "I am sad and in grief" },
  { label: "धर्म — Purpose", query: "I don't know my purpose or duty in life" },
  { label: "प्रेम — Love", query: "I am struggling in my relationship" },
  { label: "शरण — Surrender", query: "I want to surrender to God and let go" },
  { label: "शान्ति — Peace", query: "I need inner peace and calm" },
  { label: "कर्म — Karma", query: "How does karma work and what should I do" },
  { label: "मोक्ष — Freedom", query: "I seek liberation and spiritual freedom" },
  { label: "अहंकार — Ego", query: "My ego and pride are causing problems" },
  { label: "मृत्यु — Death", query: "I am afraid of death and mortality" },
];

// ─── MANN KI BAAT — 18 AFFILIATIONS ──────────────────────────────────────────

interface Affiliation {
  id: string;
  label: string;
  hindi: string;
  emoji: string;
  preQuery: string;
  interlinkTo?: string;
  interlinkLabel?: string;
  gita: string;
}

const MANN_KI_BAAT_AFFILIATIONS: Affiliation[] = [
  {
    id: "student",
    label: "Student / Vidyarthi",
    hindi: "विद्यार्थी",
    emoji: "📚",
    preQuery:
      "Krishna, as a student, I need your guidance on focus, exams and academic pressure",
    interlinkTo: "/youth",
    interlinkLabel: "Youth Hub",
    gita: "BG 6.35 — Master the mind through practice and non-attachment",
  },
  {
    id: "householder",
    label: "Householder / Grihasthi",
    hindi: "गृहस्थी",
    emoji: "🏠",
    preQuery:
      "Krishna, as a householder, I need your guidance on family duties and responsibilities",
    gita: "BG 3.8 — Perform your prescribed duty; action is better than inaction",
  },
  {
    id: "professional",
    label: "Professional / Karmayogi",
    hindi: "कर्मयोगी",
    emoji: "💼",
    preQuery:
      "Krishna, as a professional, I need your guidance on work, career and duty",
    gita: "BG 2.47 — Your right is to perform your duty, not to the fruits thereof",
  },
  {
    id: "parent",
    label: "Parent / Mata-Pita",
    hindi: "माता-पिता",
    emoji: "👪",
    preQuery:
      "Krishna, as a parent, I need your guidance on raising children with dharma",
    interlinkTo: "/garbha-sanskar",
    interlinkLabel: "Garbha Sanskar",
    gita: "BG 3.21 — Whatever a great person does, others follow that example",
  },
  {
    id: "seeker",
    label: "Seeker / Jijnasu",
    hindi: "जिज्ञासु",
    emoji: "🕉️",
    preQuery:
      "Krishna, as a spiritual seeker, I need your guidance on the path to God",
    gita: "BG 4.34 — Approach the wise with humility; they will impart knowledge to you",
  },
  {
    id: "grieving",
    label: "Grieving / Shokakul",
    hindi: "शोकाकुल",
    emoji: "😢",
    preQuery:
      "Krishna, I am grieving deeply and need your comfort after a loss",
    interlinkTo: "/emergency",
    interlinkLabel: "Emergency Mode",
    gita: "BG 2.20 — The soul is never born nor does it die; it is eternal",
  },
  {
    id: "anxious",
    label: "Anxious / Chintit",
    hindi: "चिंतित",
    emoji: "😰",
    preQuery: "Krishna, I am filled with anxiety and worry and need your peace",
    gita: "BG 6.26 — Whenever the restless mind wanders, bring it back to God",
  },
  {
    id: "lonely",
    label: "Lonely / Ekant",
    hindi: "एकांत",
    emoji: "🌙",
    preQuery:
      "Krishna, I feel deeply lonely and alone and nobody understands me",
    gita: "BG 9.22 — I carry what they lack and preserve what they have",
  },
  {
    id: "angry",
    label: "Angry / Krodhi",
    hindi: "क्रोधी",
    emoji: "🔥",
    preQuery: "Krishna, I am consumed by anger and rage and need your guidance",
    gita: "BG 2.63 — Anger leads to delusion; delusion leads to destruction of wisdom",
  },
  {
    id: "heartbroken",
    label: "Heartbroken / Manobhagna",
    hindi: "मनोभग्न",
    emoji: "💔",
    preQuery: "Krishna, my heart is broken and I am in deep pain from betrayal",
    gita: "BG 2.14 — Pain and pleasure are temporary — bear them with patience",
  },
  {
    id: "confused",
    label: "Confused / Bhrami",
    hindi: "भ्रमी",
    emoji: "🌀",
    preQuery:
      "Krishna, I am completely confused and cannot find my path or direction",
    gita: "BG 4.42 — Cut asunder the doubt with the sword of knowledge; arise!",
  },
  {
    id: "grateful",
    label: "Grateful / Kritajna",
    hindi: "कृतज्ञ",
    emoji: "🙏",
    preQuery: "Krishna, I am filled with gratitude and want to offer it to you",
    gita: "BG 9.26 — Even a leaf offered with devotion and love — I accept it joyfully",
  },
  {
    id: "sick",
    label: "Sick / Rog-Peedit",
    hindi: "रोग-पीड़ित",
    emoji: "🤒",
    preQuery:
      "Krishna, I am suffering from illness and physical pain — please guide me",
    gita: "BG 2.20 — The soul is never sick, broken, or touched by bodily limitation",
  },
  {
    id: "financial",
    label: "Struggling Financially / Arthik Sankat",
    hindi: "आर्थिक संकट",
    emoji: "💰",
    preQuery:
      "Krishna, I am in severe financial difficulty and struggling financially",
    gita: "BG 9.22 — I carry what you lack; continue with devotion and right effort",
  },
  {
    id: "crossroads",
    label: "At Crossroads / Dwandwa",
    hindi: "द्वंद्व",
    emoji: "🔀",
    preQuery:
      "Krishna, I am at a crossroads in life and cannot decide which path to take",
    gita: "BG 18.63 — Reflect on this fully, then do as you choose — the choice is yours",
  },
  {
    id: "soldier",
    label: "Soldier / Sainik",
    hindi: "सैनिक",
    emoji: "⚔️",
    preQuery:
      "Krishna, as a soldier and protector of my nation, I need your strength and courage",
    gita: "BG 2.31 — There is nothing more auspicious for a warrior than a righteous war",
  },
  {
    id: "devotee",
    label: "Devotee / Bhakta",
    hindi: "भक्त",
    emoji: "🌸",
    preQuery:
      "Krishna, as your devoted bhakta, I want to deepen my connection and love for you",
    gita: "BG 12.8 — Fix your mind on me alone — you will live in me always",
  },
  {
    id: "elderly",
    label: "Elderly / Vriddha",
    hindi: "वृद्ध",
    emoji: "👴",
    preQuery:
      "Krishna, as an elderly person facing the twilight of life, I seek your wisdom and peace",
    gita: "BG 8.5 — Whoever remembers me at the time of death attains my divine abode",
  },
];

const LANG_SPEECH_MAP: Record<Language, string> = {
  english: "en-US",
  hindi: "hi-IN",
  sanskrit: "hi-IN",
  marathi: "mr-IN",
  gujarati: "gu-IN",
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────────

export function GuidancePage() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<ChatItem[]>([]);
  const [expandedHistory, setExpandedHistory] = useState(false);
  const [voiceGender, setVoiceGender] = useState<"male" | "female">("male");
  const { language, setLanguage } = useLanguage();
  const { addPoints } = usePoints();
  const { speak, stop, isSpeaking, unlockAudio } = useTTS();
  const inputRef = useRef<HTMLInputElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  const [selectedAffiliation, setSelectedAffiliation] = useState<string | null>(
    null,
  );
  const [expandedMoreFromChapter, setExpandedMoreFromChapter] = useState(false);
  const [showWhatKrishnaSays, setShowWhatKrishnaSays] = useState(false);
  const [selectedDilemma, setSelectedDilemma] = useState<KrishnaDilemma | null>(
    null,
  );

  const latestItem = history[0] ?? null;

  // Find relevant scripture mapping for the latest query
  const currentScriptureMapping = latestItem
    ? (SCRIPTURE_SITUATION_MAP.find((m) =>
        m.situations.some((s) => latestItem.query.toLowerCase().includes(s)),
      ) ?? null)
    : null;

  const handleAsk = (q: string) => {
    if (!q.trim()) return;
    unlockAudio(); // unlock TTS on first user interaction
    const oos = isOutOfScope(q);
    const result = oos ? null : findGuidance(q);
    const item: ChatItem = {
      id: Date.now().toString(),
      query: q,
      result,
      outOfScope: oos,
      timestamp: Date.now(),
    };
    setHistory((prev) => [item, ...prev].slice(0, 10));
    addPoints("reading", 3);
    setTimeout(() => {
      responseRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(query);
    setQuery("");
  };

  const handleSpeak = (item: ChatItem) => {
    if (!item.result) return;
    const speechLang = LANG_SPEECH_MAP[language];
    const text = `${item.result.krishnaMessage}. ${item.result.verse.englishTranslation}`;
    if (isSpeaking) {
      stop();
      return;
    }
    speak(text, speechLang, voiceGender);
  };

  return (
    <div className="max-w-2xl mx-auto pb-16 relative">
      {/* ─── PARTICLES ───────────── */}
      <LotusParticles zIndex={1} opacity={0.42} />
      <GlitterParticles count={16} className="opacity-70" />
      {/* ─── MANUSCRIPT PAGE HEADER ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-10"
      >
        <div className="manuscript-header-border mb-8" />

        {/* OM glow */}
        <div className="om-loading mb-4" aria-hidden>
          ॐ
        </div>

        <p
          className="font-display text-4xl md:text-5xl font-bold italic mb-2"
          style={{
            color: "oklch(var(--accent))",
            letterSpacing: "0.03em",
            textShadow:
              "0 0 28px oklch(var(--accent) / 0.55), 0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          🙏 Hare Krishna, Arjun 🙏
        </p>

        <div className="mt-4 mb-2">
          <p
            className="font-display text-xs font-bold tracking-[0.25em] uppercase mb-1"
            style={{ color: "oklch(var(--accent) / 0.85)" }}
          >
            ॥ श्रीमद्भगवद्गीता ॥
          </p>
          <h1
            className="font-display text-3xl md:text-4xl font-bold"
            style={{
              color: "oklch(var(--primary))",
              textShadow: "0 2px 12px oklch(var(--accent) / 0.20)",
            }}
          >
            Divine Counsel — Ask Lord Krishna
          </h1>
        </div>

        <div className="chapter-separator my-4">॥</div>

        <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto italic">
          "As Arjuna once asked Krishna on the field of Kurukshetra, so may you
          bring your heart's questions here. The eternal wisdom of the Gita
          shall answer."
        </p>

        {/* Sacred quote banner */}
        <div
          className="mx-auto max-w-md mt-5 px-5 py-3 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--accent) / 0.10) 0%, oklch(var(--sacred) / 0.08) 100%)",
            border: "1px solid oklch(var(--accent) / 0.30)",
            borderRadius: "6px",
          }}
        >
          <p
            className="font-display italic text-xs font-semibold leading-relaxed"
            style={{ color: "oklch(0.42 0.18 46)" }}
          >
            "The flower you see — Krishna. The breath you just took — Krishna.
            Even your question right now — Krishna is already preparing the
            answer."
          </p>
        </div>

        {/* Voice + Language controls */}
        <div className="flex items-center justify-center gap-4 flex-wrap pt-6">
          <div
            className="flex items-center gap-0.5 border border-border rounded px-1 py-1"
            style={{ background: "oklch(var(--card) / 0.8)" }}
          >
            <button
              type="button"
              onClick={() => setVoiceGender("male")}
              className={`px-3 py-1 rounded text-xs font-body font-medium transition-smooth ${voiceGender === "male" ? "bg-primary text-primary-foreground shadow-sacred" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Male voice"
              data-ocid="voice-male"
            >
              ♂ Male Voice
            </button>
            <button
              type="button"
              onClick={() => setVoiceGender("female")}
              className={`px-3 py-1 rounded text-xs font-body font-medium transition-smooth ${voiceGender === "female" ? "bg-primary text-primary-foreground shadow-sacred" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Female voice"
              data-ocid="voice-female"
            >
              ♀ Female Voice
            </button>
          </div>
          <div
            className="flex items-center gap-0.5 border border-border rounded px-1 py-1"
            style={{ background: "oklch(var(--card) / 0.8)" }}
          >
            {(Object.keys(LANGUAGE_LABELS) as Language[]).map((lang) => (
              <button
                type="button"
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1 rounded text-xs font-body font-medium transition-smooth ${language === lang ? "bg-accent text-accent-foreground shadow-sacred" : "text-muted-foreground hover:text-foreground"}`}
                aria-label={`Switch to ${LANGUAGE_LABELS[lang]}`}
                data-ocid={`lang-${lang}`}
              >
                {LANGUAGE_LABELS[lang]}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── MANN KI BAAT — 18 AFFILIATIONS ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="mb-6"
        data-ocid="guidance.mann-ki-baat.section"
      >
        <div
          className="text-center mb-3 px-4 py-3 rounded"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--accent) / 0.12) 0%, oklch(var(--sacred) / 0.08) 100%)",
            border: "1px solid oklch(var(--accent) / 0.28)",
          }}
        >
          <p
            className="font-display text-sm font-bold italic mb-0.5"
            style={{ color: "oklch(var(--primary))" }}
          >
            🕉️ Mann Ki Baat — मन की बात
          </p>
          <p
            className="font-body text-xs italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Who are you today, O Arjun? Select your life stage — Krishna will
            speak directly to you.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-2">
          {MANN_KI_BAAT_AFFILIATIONS.map((aff, idx) => {
            const isSelected = selectedAffiliation === aff.id;
            return (
              <button
                key={aff.id}
                type="button"
                onClick={() => {
                  setSelectedAffiliation(isSelected ? null : aff.id);
                  if (!isSelected) {
                    handleAsk(aff.preQuery);
                  }
                }}
                className="flex flex-col items-center gap-0.5 px-1.5 py-2.5 border transition-smooth group"
                style={{
                  background: isSelected
                    ? "oklch(var(--accent) / 0.18)"
                    : "oklch(var(--card) / 0.85)",
                  border: isSelected
                    ? "1.5px solid oklch(var(--accent) / 0.70)"
                    : "1px solid oklch(var(--border))",
                  borderRadius: "4px",
                  boxShadow: isSelected
                    ? "0 0 10px oklch(var(--accent) / 0.22)"
                    : undefined,
                }}
                aria-label={aff.label}
                aria-pressed={isSelected}
                data-ocid={`guidance.mann-ki-baat.chip.${idx + 1}`}
              >
                <span className="text-xl leading-none group-hover:scale-110 transition-smooth">
                  {aff.emoji}
                </span>
                <span
                  className="font-body text-[9px] leading-tight text-center font-semibold"
                  style={{
                    color: isSelected
                      ? "oklch(var(--accent))"
                      : "oklch(var(--foreground))",
                  }}
                >
                  {aff.id === "financial"
                    ? "Fin. Struggle"
                    : (aff.label.split(" / ")[1] ?? aff.label.split(" / ")[0])}
                </span>
                <span
                  className="font-body text-[9px] leading-tight"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {aff.hindi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected affiliation detail panel */}
        <AnimatePresence>
          {selectedAffiliation &&
            (() => {
              const aff = MANN_KI_BAAT_AFFILIATIONS.find(
                (a) => a.id === selectedAffiliation,
              );
              if (!aff) return null;
              return (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="mt-2 px-4 py-3 rounded flex flex-col sm:flex-row items-start sm:items-center gap-3"
                    style={{
                      background: "oklch(var(--accent) / 0.10)",
                      border: "1px solid oklch(var(--accent) / 0.30)",
                    }}
                    data-ocid="guidance.mann-ki-baat.detail"
                  >
                    <span className="text-2xl flex-shrink-0">{aff.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-display text-sm font-bold italic mb-0.5"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        {aff.label}
                      </p>
                      <p
                        className="font-body text-xs italic leading-relaxed"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        ✦ {aff.gita}
                      </p>
                    </div>
                    {aff.interlinkTo && (
                      <Link
                        to={aff.interlinkTo}
                        className="flex-shrink-0 px-3 py-1.5 font-display text-xs tracking-wide uppercase border transition-smooth hover:shadow-sacred"
                        style={{
                          background: "oklch(var(--accent) / 0.18)",
                          borderColor: "oklch(var(--accent) / 0.45)",
                          color: "oklch(var(--primary))",
                          borderRadius: "2px",
                        }}
                        data-ocid="guidance.mann-ki-baat.interlink"
                      >
                        → {aff.interlinkLabel}
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })()}
        </AnimatePresence>
      </motion.div>

      {/* ─── EMOTION QUICK-PICKER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <p
          className="text-center font-display text-xs tracking-[0.18em] uppercase mb-4"
          style={{ color: "oklch(var(--accent) / 0.8)" }}
        >
          — How are you feeling right now? —
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mb-4">
          {EMOTION_TOPICS.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => {
                setQuery(t.query);
                handleAsk(t.query);
              }}
              className="flex flex-col items-center gap-1 px-2 py-2.5 border border-border transition-smooth hover:border-accent/60 hover:shadow-sacred group"
              style={{
                background: "oklch(var(--card) / 0.85)",
                borderRadius: "4px",
              }}
              data-ocid={`emotion-${t.label.toLowerCase()}`}
              aria-label={`I am feeling ${t.sublabel}`}
              title={t.sublabel}
            >
              <span className="text-2xl leading-none group-hover:scale-110 transition-smooth">
                {t.emoji}
              </span>
              <span
                className="font-body text-xs font-semibold leading-tight"
                style={{ color: "oklch(var(--foreground))" }}
              >
                {t.sublabel}
              </span>
              <span
                className="font-body text-[10px] leading-tight"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>

        {/* Text-based quick topics row */}
        <div className="flex flex-wrap gap-2 justify-center">
          {QUICK_TOPICS.slice(6).map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => {
                setQuery(t.query);
                handleAsk(t.query);
              }}
              className="px-3.5 py-1.5 text-xs font-body border border-border transition-smooth hover:border-accent/60 hover:shadow-sacred"
              style={{
                background: "oklch(var(--card) / 0.85)",
                color: "oklch(var(--foreground))",
                borderRadius: "2px",
                fontStyle: "italic",
              }}
              data-ocid={`quick-${t.label
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "")}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ─── WHAT WOULD KRISHNA SAY — 18 MODERN DILEMMAS ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-6"
        data-ocid="guidance.what-krishna-says.section"
      >
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 rounded border transition-smooth"
          style={{
            background: showWhatKrishnaSays
              ? "linear-gradient(135deg, oklch(0.84 0.34 54 / 0.18) 0%, oklch(0.72 0.28 268 / 0.10) 100%)"
              : "linear-gradient(135deg, oklch(0.96 0.10 60 / 0.92) 0%, oklch(0.93 0.12 52 / 0.90) 100%)",
            border: "1.5px solid oklch(0.78 0.28 54 / 0.40)",
            borderRadius: "6px",
          }}
          onClick={() => setShowWhatKrishnaSays((v) => !v)}
          data-ocid="guidance.what-krishna-says.toggle"
        >
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "1.2rem" }}>🦚</span>
            <div className="text-left">
              <p
                className="font-display text-sm font-bold italic"
                style={{ color: "oklch(0.22 0.10 32)" }}
              >
                "What Would Krishna Say?" — 18 Modern Dilemmas
              </p>
              <p
                className="font-body text-xs italic"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Real situations. Krishna's direct answer. Backed by the Gita.
              </p>
            </div>
          </div>
          <span
            className="font-display text-xs font-bold"
            style={{ color: "oklch(0.55 0.24 48)" }}
          >
            {showWhatKrishnaSays ? "▲ Close" : "▼ Open"}
          </span>
        </button>

        <AnimatePresence>
          {showWhatKrishnaSays && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="mt-2 rounded overflow-hidden"
                style={{
                  border: "1.5px solid oklch(0.78 0.28 54 / 0.35)",
                  background: "oklch(0.96 0.07 68 / 0.95)",
                }}
              >
                {/* Dilemma grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-3">
                  {WHAT_WOULD_KRISHNA_SAY.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      className="flex flex-col items-center gap-1 px-2 py-2.5 border transition-smooth text-center rounded"
                      style={{
                        background:
                          selectedDilemma?.id === d.id
                            ? "linear-gradient(135deg, oklch(0.84 0.34 54 / 0.22), oklch(0.74 0.28 48 / 0.18))"
                            : "oklch(0.97 0.08 66 / 0.90)",
                        border:
                          selectedDilemma?.id === d.id
                            ? "1.5px solid oklch(0.78 0.28 54 / 0.70)"
                            : "1px solid oklch(0.78 0.28 54 / 0.22)",
                        boxShadow:
                          selectedDilemma?.id === d.id
                            ? "0 0 10px oklch(0.78 0.28 54 / 0.20)"
                            : undefined,
                      }}
                      onClick={() =>
                        setSelectedDilemma(
                          selectedDilemma?.id === d.id ? null : d,
                        )
                      }
                      data-ocid={`guidance.dilemma.${d.id}`}
                    >
                      <span className="text-xl">{d.emoji}</span>
                      <span
                        className="font-body text-xs font-semibold leading-tight"
                        style={{ color: "oklch(0.22 0.10 32)" }}
                      >
                        {d.situation}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected dilemma — Krishna's answer */}
                <AnimatePresence>
                  {selectedDilemma && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="mx-3 mb-3 rounded p-4 space-y-4"
                        style={{
                          background:
                            "linear-gradient(160deg, oklch(0.96 0.10 60 / 0.97) 0%, oklch(0.93 0.12 54 / 0.96) 100%)",
                          border: "1.5px solid oklch(0.78 0.28 54 / 0.50)",
                        }}
                        data-ocid="guidance.dilemma.answer"
                      >
                        {/* Situation header */}
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">
                            {selectedDilemma.emoji}
                          </span>
                          <p
                            className="font-display text-base font-bold italic"
                            style={{ color: "oklch(0.22 0.10 32)" }}
                          >
                            "{selectedDilemma.situation}"
                          </p>
                        </div>

                        {/* Krishna greeting */}
                        <p
                          className="font-display text-sm font-bold italic"
                          style={{ color: "oklch(0.55 0.26 54)" }}
                        >
                          🙏 Śrī Kṛṣṇa uvāca:
                        </p>

                        {/* Krishna's answer */}
                        <div className="flex gap-3">
                          <div
                            className="w-1 shrink-0 rounded-full"
                            style={{
                              background:
                                "linear-gradient(180deg, oklch(0.78 0.30 54), oklch(0.78 0.30 54 / 0.15))",
                            }}
                          />
                          <p
                            className="font-body text-sm leading-relaxed"
                            style={{
                              color: "oklch(0.18 0.10 32)",
                              lineHeight: "1.85",
                            }}
                          >
                            {selectedDilemma.krishnaAnswer}
                          </p>
                        </div>

                        {/* Primary verse */}
                        <div
                          className="p-3 rounded"
                          style={{
                            background: "oklch(0.78 0.28 54 / 0.10)",
                            border: "1px solid oklch(0.78 0.28 54 / 0.28)",
                          }}
                        >
                          <p
                            className="font-display text-xs font-bold tracking-wide"
                            style={{ color: "oklch(0.42 0.20 46)" }}
                          >
                            ✦ {selectedDilemma.primaryVerse}
                          </p>
                          <p
                            className="font-body text-xs italic mt-1"
                            style={{ color: "oklch(0.50 0.18 46)" }}
                          >
                            {selectedDilemma.verseText}
                          </p>
                          {selectedDilemma.secondaryRef && (
                            <p
                              className="font-body text-xs italic mt-1"
                              style={{
                                color: "oklch(var(--muted-foreground))",
                              }}
                            >
                              {selectedDilemma.secondaryRef}
                            </p>
                          )}
                        </div>

                        {/* Never Alone */}
                        <p
                          className="font-display text-xs font-bold italic text-center"
                          style={{ color: "oklch(0.46 0.22 48)" }}
                        >
                          🙏 Krishna is with you. He guided Arjuna through
                          Kurukshetra. He guides you through your life.
                        </p>

                        {/* Read Gita */}
                        <div className="flex justify-center">
                          <Link to="/gita">
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 px-4 py-2 font-display text-xs tracking-widest uppercase border transition-smooth hover:shadow-sacred"
                              style={{
                                background:
                                  "linear-gradient(135deg, oklch(0.84 0.36 54) 0%, oklch(0.74 0.30 48) 100%)",
                                color: "oklch(0.12 0.08 30)",
                                border: "1.5px solid oklch(0.70 0.28 50)",
                                borderRadius: "3px",
                                boxShadow:
                                  "0 3px 12px oklch(0.78 0.28 54 / 0.30)",
                              }}
                              data-ocid="guidance.dilemma.read-gita"
                            >
                              📖 Read Bhagavad Gita →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ─── INPUT AREA ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 relative"
        style={{
          background: "oklch(var(--card) / 0.9)",
          border: "1px solid oklch(var(--border))",
          borderRadius: "2px",
          boxShadow:
            "inset 0 2px 8px oklch(0.18 0.04 44 / 0.06), 0 2px 6px oklch(0.18 0.04 44 / 0.08)",
        }}
        data-ocid="guidance-form"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 31px, oklch(var(--border) / 0.25) 31px, oklch(var(--border) / 0.25) 32px)",
            backgroundPositionY: "10px",
            borderRadius: "2px",
          }}
        />
        <form
          onSubmit={handleSubmit}
          className="relative p-4 flex gap-3 items-start"
        >
          <div
            className="absolute left-14 top-0 bottom-0 w-px"
            style={{ background: "oklch(var(--accent) / 0.2)" }}
          />
          <span
            className="font-display text-2xl mt-1 shrink-0"
            style={{ color: "oklch(var(--accent) / 0.7)", width: "2rem" }}
          >
            ✦
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Write what weighs upon your heart, O seeker..."
            className="flex-1 bg-transparent border-none outline-none font-body text-base text-foreground placeholder:text-muted-foreground/60 placeholder:italic resize-none"
            style={{ lineHeight: "32px", minHeight: "64px" }}
            aria-label="Your question or feeling"
            data-ocid="guidance-input"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="shrink-0 mt-1 px-4 py-1.5 font-display text-xs tracking-widest uppercase border transition-smooth hover:border-accent/60 hover:shadow-sacred disabled:opacity-40"
            style={{
              background: "oklch(var(--accent) / 0.18)",
              color: "oklch(var(--primary))",
              borderColor: "oklch(var(--accent) / 0.4)",
              borderRadius: "2px",
            }}
            aria-label="Ask Krishna"
            data-ocid="guidance-submit"
          >
            Ask →
          </button>
        </form>
      </motion.div>

      {/* ─── DIVINE RESPONSE ───────────────────────────── */}
      <div ref={responseRef}>
        <AnimatePresence mode="wait">
          {latestItem && (
            <motion.div
              key={latestItem.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: "oklch(var(--card) / 0.92)",
                border: "1px solid oklch(var(--border))",
                borderRadius: "2px",
                boxShadow:
                  "0 4px 24px oklch(0.18 0.04 44 / 0.14), inset 0 1px 0 oklch(0.95 0.06 60 / 0.4)",
              }}
            >
              {/* Arjuna's Question */}
              <div
                className="px-6 pt-5 pb-4 border-b"
                style={{ borderColor: "oklch(var(--border) / 0.5)" }}
              >
                <div className="flex items-start gap-3 justify-end">
                  <div
                    className="max-w-[82%] text-right"
                    style={{
                      borderRight: "2px solid oklch(var(--primary) / 0.4)",
                      paddingRight: "0.75rem",
                    }}
                  >
                    <p
                      className="font-body text-sm italic leading-relaxed"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      "{latestItem.query}"
                    </p>
                    <p
                      className="font-display text-xs mt-1 tracking-widest"
                      style={{ color: "oklch(var(--primary) / 0.55)" }}
                    >
                      — Arjuna uvāca
                    </p>
                  </div>
                </div>
              </div>

              {latestItem.result ? (
                <>
                  <div
                    className="px-6 py-6 space-y-5"
                    data-ocid="krishna-response"
                  >
                    {/* Krishna greeting */}
                    <div>
                      <p
                        className="font-display text-xl font-bold italic mb-3"
                        style={{ color: "oklch(var(--accent))" }}
                      >
                        🙏 Hare Krishna, Arjun 🙏
                      </p>
                      <p
                        className="font-display text-xs tracking-[0.18em] uppercase mb-3"
                        style={{ color: "oklch(var(--accent) / 0.7)" }}
                      >
                        ✦ Śrī-Kṛṣṇa uvāca — Thus spoke Lord Krishna
                      </p>
                    </div>

                    {/* Divine message */}
                    <div className="flex gap-4">
                      <div
                        className="w-1 shrink-0 rounded-full mt-1"
                        style={{
                          background:
                            "linear-gradient(180deg, oklch(var(--accent)), oklch(var(--accent) / 0.15))",
                        }}
                      />
                      <p
                        className="font-display text-lg font-semibold leading-relaxed"
                        style={{
                          color: "oklch(var(--foreground))",
                          lineHeight: "1.75",
                        }}
                      >
                        {latestItem.result.krishnaMessage}
                      </p>
                    </div>

                    {/* Context footnote */}
                    <p
                      className="font-body text-xs italic"
                      style={{
                        color: "oklch(var(--muted-foreground))",
                        borderTop: "1px dotted oklch(var(--border) / 0.6)",
                        paddingTop: "0.75rem",
                      }}
                    >
                      † Chapter {latestItem.result.chapterId} ·{" "}
                      {latestItem.result.context}
                    </p>

                    {/* ─── SOURCE CITATION BADGE ─── */}
                    <div
                      className="flex flex-col gap-2"
                      data-ocid="guidance.source-badge"
                    >
                      {/* Primary source */}
                      <div
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded self-start"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.84 0.36 54 / 0.18) 0%, oklch(0.72 0.30 48 / 0.12) 100%)",
                          border: "1.5px solid oklch(0.78 0.28 54 / 0.65)",
                          boxShadow:
                            "0 0 16px oklch(0.78 0.28 54 / 0.22), inset 0 1px 0 rgba(255,248,220,0.5)",
                        }}
                      >
                        <span style={{ fontSize: "1rem" }}>📖</span>
                        <div>
                          <span
                            className="font-display text-[10px] font-bold tracking-[0.16em] uppercase block"
                            style={{ color: "oklch(0.46 0.20 46)" }}
                          >
                            Sacred Source
                          </span>
                          <span
                            className="font-display text-sm font-bold italic"
                            style={{ color: "oklch(0.24 0.12 36)" }}
                          >
                            {latestItem.result.sourceScripture}
                          </span>
                          <span
                            className="font-body text-xs ml-2 italic"
                            style={{ color: "oklch(0.48 0.18 44)" }}
                          >
                            — {latestItem.result.sourceReference}
                          </span>
                        </div>
                      </div>

                      {/* Cross-reference from Vedas/Puranas */}
                      {latestItem.result.crossRef && (
                        <div
                          className="px-4 py-3 rounded"
                          style={{
                            background:
                              "linear-gradient(135deg, oklch(0.56 0.24 268 / 0.10) 0%, oklch(0.52 0.22 268 / 0.06) 100%)",
                            border: "1px solid oklch(0.56 0.24 268 / 0.35)",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span style={{ fontSize: "0.9rem" }}>📜</span>
                            <span
                              className="font-display text-[10px] font-bold tracking-[0.14em] uppercase"
                              style={{ color: "oklch(0.50 0.22 268)" }}
                            >
                              Also from: {latestItem.result.crossRef.scripture}{" "}
                              — {latestItem.result.crossRef.reference}
                            </span>
                          </div>
                          <p
                            className="font-body text-xs italic leading-relaxed"
                            style={{ color: "oklch(0.32 0.14 46)" }}
                          >
                            {latestItem.result.crossRef.teaching}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* TTS — Hear Krishna button */}
                    <button
                      type="button"
                      onClick={() => {
                        unlockAudio();
                        handleSpeak(latestItem);
                      }}
                      className="inline-flex items-center gap-2.5 font-display text-xs tracking-widest uppercase transition-smooth px-4 py-2 border"
                      style={{
                        background: isSpeaking
                          ? "linear-gradient(135deg, oklch(0.55 0.28 290), oklch(0.48 0.28 270))"
                          : "linear-gradient(135deg, oklch(0.76 0.32 54 / 0.18), oklch(0.62 0.26 32 / 0.14))",
                        borderColor: isSpeaking
                          ? "oklch(0.55 0.28 290 / 0.6)"
                          : "oklch(var(--accent) / 0.45)",
                        color: isSpeaking
                          ? "oklch(0.88 0.1 280)"
                          : "oklch(var(--primary))",
                        borderRadius: "2px",
                        boxShadow: isSpeaking
                          ? "0 0 12px oklch(0.55 0.28 290 / 0.35), inset 0 1px 0 rgba(255,255,255,0.08)"
                          : "0 2px 8px oklch(0.76 0.32 54 / 0.15)",
                      }}
                      aria-label={
                        isSpeaking
                          ? "Stop reading"
                          : "Hear Krishna speak this guidance"
                      }
                      data-ocid="tts-toggle"
                    >
                      <span
                        style={{
                          fontSize: "1.1rem",
                          filter: isSpeaking
                            ? "drop-shadow(0 0 6px oklch(0.65 0.28 290))"
                            : "drop-shadow(0 0 4px oklch(0.76 0.32 54 / 0.5))",
                          animation: isSpeaking
                            ? "pulse 1.2s ease-in-out infinite"
                            : "none",
                        }}
                      >
                        {isSpeaking ? "◼" : "🔊"}
                      </span>
                      {isSpeaking ? "◼ Stop Recitation" : "🙏 Hear Krishna"}
                    </button>
                  </div>

                  {/* Sacred Verse */}
                  <div
                    className="mx-6 mb-6 p-5 space-y-4"
                    style={{
                      background: "oklch(var(--muted) / 0.5)",
                      border: "1px solid oklch(var(--border) / 0.7)",
                      borderLeft: "3px solid oklch(var(--accent) / 0.7)",
                      borderRadius: "1px",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-display text-xs font-bold tracking-[0.18em] uppercase"
                        style={{ color: "oklch(var(--accent))" }}
                      >
                        ॥ Adhyāya {latestItem.result.chapterId} · Śloka{" "}
                        {latestItem.result.verse.verseNumber} ॥
                      </span>
                    </div>

                    <p
                      className="text-center whitespace-pre-line leading-loose"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1.35rem",
                        fontWeight: 500,
                        color: "oklch(var(--foreground))",
                        letterSpacing: "0.04em",
                        lineHeight: 2.1,
                      }}
                    >
                      {latestItem.result.verse.sanskritText}
                    </p>

                    <div className="divider-ornate">
                      <span>✦</span>
                    </div>

                    <p
                      className="font-body text-sm italic text-center leading-relaxed whitespace-pre-line"
                      style={{ color: "oklch(var(--accent) / 0.85)" }}
                    >
                      {latestItem.result.verse.transliteration}
                    </p>

                    <div
                      style={{
                        borderTop: "1px solid oklch(var(--border) / 0.5)",
                        paddingTop: "0.75rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{
                          color: "oklch(var(--muted-foreground))",
                          fontStyle: "italic",
                        }}
                      >
                        {latestItem.result.verse.englishTranslation}
                      </p>
                    </div>
                  </div>

                  {/* ─── SCRIPTURAL REFERENCES SECTION ─── */}
                  {currentScriptureMapping && (
                    <div
                      className="mx-6 mb-4 rounded overflow-hidden"
                      style={{
                        border: "1.5px solid oklch(0.78 0.28 54 / 0.45)",
                        background:
                          "linear-gradient(160deg, oklch(0.97 0.08 60 / 0.96) 0%, oklch(0.95 0.10 54 / 0.95) 100%)",
                      }}
                      data-ocid="guidance.scriptural-refs"
                    >
                      {/* Header */}
                      <div
                        className="px-4 py-3 flex items-center gap-2"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.84 0.34 54 / 0.18) 0%, oklch(0.72 0.28 46 / 0.12) 100%)",
                          borderBottom: "1px solid oklch(0.78 0.28 54 / 0.30)",
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>📚</span>
                        <p
                          className="font-display text-sm font-bold italic"
                          style={{ color: "oklch(0.22 0.10 32)" }}
                        >
                          {currentScriptureMapping.title}
                        </p>
                      </div>

                      {/* Refs */}
                      <div
                        className="divide-y"
                        style={{ borderColor: "oklch(0.78 0.28 54 / 0.18)" }}
                      >
                        {currentScriptureMapping.refs.map((ref) => (
                          <div
                            key={ref.verseRef}
                            className="px-4 py-4 space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                              <div>
                                <span
                                  className="font-display text-xs font-bold tracking-wide uppercase"
                                  style={{ color: "oklch(0.55 0.26 48)" }}
                                >
                                  {ref.bookName}
                                </span>
                                <span
                                  className="font-body text-xs ml-2 italic"
                                  style={{
                                    color: "oklch(var(--muted-foreground))",
                                  }}
                                >
                                  · {ref.shelf} · {ref.chapterOrSection}
                                </span>
                              </div>
                              <span
                                className="font-display text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                                style={{
                                  background: "oklch(0.78 0.28 54 / 0.15)",
                                  color: "oklch(0.42 0.20 46)",
                                  border:
                                    "1px solid oklch(0.78 0.28 54 / 0.30)",
                                }}
                              >
                                {ref.verseRef}
                              </span>
                            </div>

                            {/* Sanskrit */}
                            <p
                              className="whitespace-pre-line text-center leading-loose"
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "1.05rem",
                                fontWeight: 500,
                                color: "oklch(0.18 0.10 32)",
                                letterSpacing: "0.03em",
                                lineHeight: 1.9,
                              }}
                            >
                              {ref.sanskrit}
                            </p>

                            {/* Transliteration */}
                            <p
                              className="font-body text-xs italic text-center"
                              style={{ color: "oklch(0.55 0.22 46)" }}
                            >
                              {ref.transliteration}
                            </p>

                            {/* Meaning */}
                            <p
                              className="font-body text-sm leading-relaxed"
                              style={{
                                color: "oklch(0.30 0.12 36)",
                                fontStyle: "italic",
                                borderLeft:
                                  "2px solid oklch(0.78 0.28 54 / 0.50)",
                                paddingLeft: "0.75rem",
                              }}
                            >
                              {ref.meaning}
                            </p>

                            {/* Read in Library button */}
                            <Link to="/gita">
                              <button
                                type="button"
                                className="mt-1 inline-flex items-center gap-2 px-4 py-2 font-display text-xs tracking-widest uppercase border transition-smooth hover:shadow-sacred"
                                style={{
                                  background:
                                    "linear-gradient(135deg, oklch(0.84 0.36 54) 0%, oklch(0.74 0.30 48) 100%)",
                                  color: "oklch(0.12 0.08 30)",
                                  border: "1.5px solid oklch(0.70 0.28 50)",
                                  borderRadius: "3px",
                                  boxShadow:
                                    "0 3px 12px oklch(0.78 0.28 54 / 0.35)",
                                }}
                                data-ocid={`guidance.read-in-gita.${ref.libraryId}`}
                              >
                                📖 Read Bhagavad Gita →
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>

                      {/* More from this chapter — expandable */}
                      <div
                        style={{
                          borderTop: "1px solid oklch(0.78 0.28 54 / 0.20)",
                          background: "oklch(0.96 0.06 68 / 0.60)",
                        }}
                      >
                        <button
                          type="button"
                          className="w-full px-4 py-2.5 flex items-center gap-2 text-left transition-smooth hover:opacity-80"
                          onClick={() => setExpandedMoreFromChapter((v) => !v)}
                          data-ocid="guidance.more-from-chapter-toggle"
                        >
                          <span
                            className="font-display text-xs font-bold tracking-wide uppercase"
                            style={{ color: "oklch(0.52 0.22 48)" }}
                          >
                            {expandedMoreFromChapter ? "▲" : "▼"} More from this
                            chapter
                          </span>
                        </button>
                        <AnimatePresence>
                          {expandedMoreFromChapter && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{ overflow: "hidden" }}
                            >
                              <p
                                className="px-4 pb-4 font-body text-sm leading-relaxed"
                                style={{
                                  color: "oklch(0.30 0.10 36)",
                                  fontStyle: "italic",
                                }}
                              >
                                {currentScriptureMapping.moreFromChapter}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}

                  {/* Closing */}
                  <div
                    className="px-6 py-5 text-center space-y-4 border-t"
                    style={{ borderColor: "oklch(var(--border) / 0.4)" }}
                  >
                    <p
                      className="font-display text-xl font-bold italic"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      ✨️Jai Shree Krishna✨️
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        to="/chapter/$id"
                        params={{ id: String(latestItem.result.chapterId) }}
                      >
                        <button
                          type="button"
                          className="px-5 py-2 font-display text-xs tracking-widest uppercase border transition-smooth hover:border-accent/60 hover:shadow-sacred"
                          style={{
                            background: "oklch(var(--accent) / 0.15)",
                            color: "oklch(var(--primary))",
                            borderColor: "oklch(var(--accent) / 0.4)",
                            borderRadius: "2px",
                          }}
                          data-ocid="explore-chapter"
                        >
                          Read Adhyāya {latestItem.result.chapterId} →
                        </button>
                      </Link>
                      <Link to="/gita">
                        <button
                          type="button"
                          className="px-5 py-2 font-display text-xs tracking-widest uppercase border transition-smooth hover:shadow-sacred"
                          style={{
                            background:
                              "linear-gradient(135deg, oklch(0.84 0.36 54 / 0.20), oklch(0.74 0.30 48 / 0.15))",
                            color: "oklch(0.32 0.16 44)",
                            borderColor: "oklch(0.78 0.28 54 / 0.45)",
                            borderRadius: "2px",
                          }}
                          data-ocid="goto-gita"
                        >
                          📖 Read Gita →
                        </button>
                      </Link>
                      <Link to="/guidance/life">
                        <button
                          type="button"
                          className="px-5 py-2 font-display text-xs tracking-widest uppercase border border-border/50 transition-smooth hover:border-border"
                          style={{
                            color: "oklch(var(--muted-foreground))",
                            borderRadius: "2px",
                          }}
                          data-ocid="goto-life-guidance"
                        >
                          Mann Ki Baat →
                        </button>
                      </Link>
                    </div>

                    {/* Never Alone footer */}
                    <div
                      className="mt-4 px-4 py-4 rounded text-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.96 0.10 60 / 0.92) 0%, oklch(0.93 0.12 52 / 0.90) 100%)",
                        border: "1.5px solid oklch(0.78 0.28 54 / 0.45)",
                        boxShadow: "0 4px 20px oklch(0.78 0.28 54 / 0.18)",
                      }}
                      data-ocid="guidance.never-alone-footer"
                    >
                      <p
                        className="font-display text-base font-bold italic leading-relaxed"
                        style={{
                          color: "oklch(0.30 0.14 42)",
                          textShadow: "0 1px 4px oklch(0.78 0.28 54 / 0.20)",
                        }}
                      >
                        🙏 Krishna is with you. He guided Arjuna through
                        Kurukshetra. He guides you through your life. 🙏
                      </p>
                      <p
                        className="font-body text-xs italic mt-2"
                        style={{ color: "oklch(0.46 0.18 46)" }}
                      >
                        "I am always with you, Arjun. I will never leave your
                        chariot." — Bhagavad Gita 18.65
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="px-6 py-8 text-center space-y-4"
                  data-ocid="guidance-not-found"
                >
                  {latestItem.outOfScope ? (
                    /* Out-of-scope — warm Krishna response */
                    <>
                      <p className="text-4xl">🙏</p>
                      <div
                        className="mx-auto max-w-sm px-5 py-5 rounded text-center space-y-3"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.96 0.10 60 / 0.95) 0%, oklch(0.93 0.12 52 / 0.93) 100%)",
                          border: "1.5px solid oklch(0.78 0.28 54 / 0.50)",
                          boxShadow: "0 4px 20px oklch(0.78 0.28 54 / 0.18)",
                        }}
                      >
                        <p
                          className="font-display text-xl font-bold italic"
                          style={{ color: "oklch(var(--accent))" }}
                        >
                          🙏 Hare Krishna, Arjun 🙏
                        </p>
                        <p
                          className="font-body text-sm leading-relaxed italic"
                          style={{
                            color: "oklch(0.22 0.10 32)",
                            lineHeight: "1.8",
                          }}
                        >
                          "Beloved devotee, I can only guide you from the sacred
                          wisdom of the <strong>Bhagavad Gita</strong>, the{" "}
                          <strong>four Vedas</strong> (Rig, Sama, Yajur,
                          Atharva), and the <strong>eighteen Puranas</strong>.
                          Please ask me about dharma, life challenges, spiritual
                          practice, relationships, karma, or the eternal truths
                          of the universe — and I shall answer you from the
                          sacred scriptures."
                        </p>
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded"
                          style={{
                            background: "oklch(0.78 0.28 54 / 0.15)",
                            border: "1px solid oklch(0.78 0.28 54 / 0.30)",
                          }}
                        >
                          <span style={{ fontSize: "0.85rem" }}>📖</span>
                          <span
                            className="font-display text-[10px] font-bold tracking-wide uppercase"
                            style={{ color: "oklch(0.42 0.18 46)" }}
                          >
                            Bhagavad Gita · 4 Vedas · 18 Puranas
                          </span>
                        </div>
                        <p
                          className="font-display text-xs italic"
                          style={{ color: "oklch(0.50 0.20 46)" }}
                        >
                          — Try asking about fear, grief, purpose, dharma,
                          karma, or devotion
                        </p>
                      </div>
                    </>
                  ) : (
                    /* No match found — suggest related topics */
                    <>
                      <p className="text-4xl">🦚</p>
                      <p
                        className="font-display text-xl font-semibold italic"
                        style={{ color: "oklch(var(--foreground))" }}
                      >
                        Arjun, bring me your question.
                      </p>
                      <p
                        className="font-body text-sm leading-relaxed max-w-xs mx-auto italic"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        No question is too small or too deep for the Gita. Type
                        what is in your heart, and I will find Krishna's answer
                        for you.
                      </p>
                      <p
                        className="font-display text-xs tracking-widest uppercase mt-2"
                        style={{ color: "oklch(var(--accent) / 0.8)" }}
                      >
                        — You might be asking about —
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[
                          {
                            label: "Fear & Anxiety",
                            query: "I feel afraid and anxious about the future",
                          },
                          {
                            label: "Purpose & Duty",
                            query:
                              "I don't know my purpose in life or my dharma",
                          },
                          {
                            label: "Grief & Loss",
                            query:
                              "I am grieving deeply after losing someone I loved",
                          },
                          {
                            label: "Relationship Pain",
                            query:
                              "My relationship is broken and my heart is in pain",
                          },
                          {
                            label: "Surrender to God",
                            query:
                              "I want to surrender completely to Krishna and let go",
                          },
                        ].map((t) => (
                          <Badge
                            key={t.label}
                            variant="outline"
                            className="cursor-pointer hover:bg-muted transition-smooth text-xs font-body italic px-3 py-1.5"
                            onClick={() => handleAsk(t.query)}
                            data-ocid={`guidance.fallback-suggestion.${t.label
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[^\w-]/g, "")}`}
                          >
                            {t.label}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── QUERY HISTORY ───────────────── */}
      {history.length > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 pt-6"
          style={{ borderTop: "1px solid oklch(var(--border) / 0.5)" }}
        >
          <button
            type="button"
            onClick={() => setExpandedHistory((v) => !v)}
            className="flex items-center gap-2 font-display text-xs tracking-[0.18em] uppercase mb-3 transition-smooth hover:opacity-80"
            style={{ color: "oklch(var(--accent) / 0.8)" }}
            data-ocid="history-toggle"
          >
            <span>{expandedHistory ? "▴" : "▾"}</span>
            Previous Inquiries ({history.length - 1})
          </button>
          <AnimatePresence>
            {expandedHistory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1 overflow-hidden"
              >
                {history.slice(1, 6).map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      setQuery(item.query);
                      handleAsk(item.query);
                      setExpandedHistory(false);
                    }}
                    className="toc-item w-full text-left text-sm transition-smooth"
                    data-ocid={`history-item-${item.id}`}
                  >
                    <span className="text-sm shrink-0">✦</span>
                    <span className="flex-1 min-w-0 truncate italic">
                      {item.query}
                    </span>
                    <span className="text-xs shrink-0 opacity-50">
                      {new Date(item.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {history.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8 space-y-2"
          data-ocid="guidance-empty"
        >
          <div className="chapter-separator">॥</div>
          <p
            className="font-body text-sm italic"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            "Whenever you feel lost, remember — I am always within you."
          </p>
          <p
            className="font-display text-xs tracking-widest uppercase"
            style={{ color: "oklch(var(--muted-foreground) / 0.6)" }}
          >
            — Bhagavad Gita 18.61
          </p>
        </motion.div>
      )}

      <div className="manuscript-header-border mt-12" />
    </div>
  );
}
