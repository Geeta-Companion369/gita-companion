// ─── Bhagavad Gita Chapter Metadata ─────────────────────────────────────────
// All 18 chapters with authentic Sanskrit names, yoga names, verse counts,
// and detailed summaries reflecting the sacred teachings.

export interface GitaChapter {
  number: number;
  nameDevanagari: string;
  nameEnglish: string;
  yogaName: string;
  verseCount: number;
  summary: string;
  keyVerse: string; // representative verse ID
  keyTheme: string; // one-line essence
}

export const GITA_CHAPTERS: GitaChapter[] = [
  {
    number: 1,
    nameDevanagari: "अर्जुन विषाद योग",
    nameEnglish: "Arjuna's Grief",
    yogaName: "Arjuna Vishada Yoga",
    verseCount: 47,
    summary:
      "On the battlefield of Kurukshetra, Arjuna surveys both armies and is overcome by grief and delusion at the sight of beloved teachers, kinsmen, and friends arrayed for battle. He loses his resolve, his bow slips from his hands, and he collapses in his chariot, overwhelmed by compassion and confusion about his duty. This chapter sets the stage for Krishna's divine instruction — it is the human cry that invites cosmic wisdom.",
    keyVerse: "1.28",
    keyTheme: "The crisis of conscience that opens the door to divine wisdom",
  },
  {
    number: 2,
    nameDevanagari: "सांख्य योग",
    nameEnglish: "The Yoga of Knowledge",
    yogaName: "Sankhya Yoga",
    verseCount: 72,
    summary:
      "Krishna begins his eternal teaching by revealing the immortality of the Self — the Atman that is never born and never dies. He instructs Arjuna on the distinction between the eternal soul and the perishable body. He introduces the concept of Nishkama Karma — performing one's duty without attachment to results — and describes the qualities of the Sthitaprajna, the person of steady wisdom who remains unshaken by pleasure and pain alike.",
    keyVerse: "2.47",
    keyTheme: "Act without attachment; the soul is eternal and imperishable",
  },
  {
    number: 3,
    nameDevanagari: "कर्म योग",
    nameEnglish: "The Yoga of Action",
    yogaName: "Karma Yoga",
    verseCount: 43,
    summary:
      "Krishna explains that no one can remain without action even for a moment. He teaches that action performed as duty, dedicated to the Divine and free from selfish desire, is the path of Karma Yoga. He reveals the cycle of sacrifice that sustains creation and warns against desire and anger as humanity's greatest enemies. One must act for the welfare of the world, following the example of great souls.",
    keyVerse: "3.19",
    keyTheme: "Perform your duty selflessly; action is inevitable and sacred",
  },
  {
    number: 4,
    nameDevanagari: "ज्ञान कर्म संन्यास योग",
    nameEnglish: "The Yoga of Wisdom and Renunciation",
    yogaName: "Jnana Karma Sannyas Yoga",
    verseCount: 42,
    summary:
      "Krishna reveals his divine birth and cosmic purpose — that whenever Dharma declines and Adharma rises, He manifests in the world to restore righteousness. He expounds the science of sacrifice in its many forms and declares that all paths of purification lead to the Supreme. The chapter culminates with the boat of knowledge that carries one across the ocean of all sin and confusion.",
    keyVerse: "4.7",
    keyTheme:
      "Divine incarnation restores Dharma; knowledge destroys all karmas",
  },
  {
    number: 5,
    nameDevanagari: "कर्म संन्यास योग",
    nameEnglish: "The Yoga of Renunciation of Action",
    yogaName: "Karma Sannyas Yoga",
    verseCount: 29,
    summary:
      "Krishna reconciles the apparent conflict between the path of renunciation and the path of action, declaring that both lead to liberation but Karma Yoga is superior for most seekers. The true renunciant acts without the sense of doership, having surrendered all actions to the Divine. Such a sage sees the Self equally in all beings — a Brahmin, a cow, an elephant, a dog — and remains ever blissful.",
    keyVerse: "5.10",
    keyTheme:
      "Act without ego; true renunciation is inner detachment, not outer withdrawal",
  },
  {
    number: 6,
    nameDevanagari: "आत्म संयम योग",
    nameEnglish: "The Yoga of Self-Mastery",
    yogaName: "Atma Sanyam Yoga",
    verseCount: 47,
    summary:
      "Krishna teaches the practical science of meditation — proper posture, controlled breathing, fixed gaze, and one-pointed concentration. He describes the mind as the greatest friend when controlled and the greatest enemy when uncontrolled. He reveals the highest yogi as one who sees all beings in the Self and the Self in all beings, abiding in perfect equanimity. The chapter ends with the assurance that no sincere spiritual effort is ever wasted.",
    keyVerse: "6.5",
    keyTheme:
      "The mind is your greatest friend or foe; master it through meditation",
  },
  {
    number: 7,
    nameDevanagari: "ज्ञान विज्ञान योग",
    nameEnglish: "The Yoga of Knowledge and Realization",
    yogaName: "Jnana Vijnana Yoga",
    verseCount: 30,
    summary:
      "Krishna reveals his dual nature — the lower material nature of eight elements and the higher spiritual nature that sustains all life. He describes the four types of devotees who approach him and the seven types who do not. He declares that out of thousands of humans, only a rare soul truly knows Him. This chapter bridges theoretical knowledge with direct experiential realization of the Supreme.",
    keyVerse: "7.14",
    keyTheme:
      "Know the two natures of the Divine; transcend Maya through devotion",
  },
  {
    number: 8,
    nameDevanagari: "अक्षर ब्रह्म योग",
    nameEnglish: "The Yoga of the Imperishable Absolute",
    yogaName: "Akshar Brahma Yoga",
    verseCount: 28,
    summary:
      "Krishna explains the nature of Brahman, the cosmic spirit, and the mystery of death and rebirth. He teaches that whatever one remembers at the moment of death determines their next birth. He reveals the two eternal paths — the bright northern path of liberation and the dark southern path of return. Through constant practice and devotion, one transcends both paths and reaches the Supreme Abode beyond all cycles of creation.",
    keyVerse: "8.5",
    keyTheme: "Remembrance of the Divine at life's end determines liberation",
  },
  {
    number: 9,
    nameDevanagari: "राज विद्या राज गुह्य योग",
    nameEnglish: "The Royal Knowledge and Royal Secret",
    yogaName: "Raja Vidya Raja Guhya Yoga",
    verseCount: 34,
    summary:
      "Krishna reveals the most secret of all knowledge — the royal science of devotion. He pervades the entire universe yet remains transcendent. All beings exist in Him, yet He is not contained in them. He accepts the simplest offering — a leaf, a flower, a fruit, some water — when given with pure love. He assures that His devotees never perish and that He personally carries what they lack and preserves what they have.",
    keyVerse: "9.22",
    keyTheme: "The royal secret: pure devotion reaches the Supreme directly",
  },
  {
    number: 10,
    nameDevanagari: "विभूति योग",
    nameEnglish: "The Yoga of Divine Manifestations",
    yogaName: "Vibhuti Yoga",
    verseCount: 42,
    summary:
      "Krishna reveals his divine glories — he is the beginning, middle, and end of all existence. Among the Vedas he is Sama Veda; among gods he is Indra; among rivers, the Ganga; among seasons, spring; among the wise, wisdom itself. Every magnificent, glorious, and powerful being in creation is a spark of his splendor. By knowing these manifestations, devotees recognize the Divine in all of creation.",
    keyVerse: "10.8",
    keyTheme: "Every excellence in creation is a fragment of Divine glory",
  },
  {
    number: 11,
    nameDevanagari: "विश्वरूप दर्शन योग",
    nameEnglish: "The Vision of the Cosmic Form",
    yogaName: "Vishwarupa Darshana Yoga",
    verseCount: 55,
    summary:
      "At Arjuna's request, Krishna reveals his awe-inspiring Vishwarupa — the Cosmic Form containing all the universe. Arjuna beholds innumerable mouths, eyes, and divine adornments simultaneously. Warriors and kings are already consumed in the fiery mouths of Time. Trembling with fear and wonder, Arjuna prays to be shown again the gentle four-armed form. Krishna assures him that this vision is rarely granted and is only accessible through pure, undivided devotion.",
    keyVerse: "11.32",
    keyTheme: "The Cosmic Form reveals that Time is the ultimate reality",
  },
  {
    number: 12,
    nameDevanagari: "भक्ति योग",
    nameEnglish: "The Yoga of Devotion",
    yogaName: "Bhakti Yoga",
    verseCount: 20,
    summary:
      "Krishna declares Bhakti — pure devotional love — as the supreme and most direct path to the Divine. He describes the qualities of the ideal devotee: one who hates none, is friendly and compassionate to all, free from possessiveness and ego, equal in pain and pleasure, forgiving, ever-content, with mind and intellect fixed on God. Such a devotee is supremely dear to Krishna. This is the shortest and most beautiful chapter, a garland of divine qualities.",
    keyVerse: "12.13",
    keyTheme: "Pure devotion is the most direct and supreme path to the Divine",
  },
  {
    number: 13,
    nameDevanagari: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    nameEnglish: "The Field and Its Knower",
    yogaName: "Kshetra Kshetrajña Vibhaga Yoga",
    verseCount: 34,
    summary:
      "Krishna explains the profound distinction between the Field (Kshetra) — the body, senses, and mind — and the Knower of the Field (Kshetrajña) — the immortal consciousness that witnesses all experience. He enumerates the twenty qualities of a true knower: humility, non-violence, forgiveness, cleanliness, steadiness. One who sees the Supreme Self dwelling equally in all perishable bodies achieves true vision and attains liberation.",
    keyVerse: "13.27",
    keyTheme:
      "Know the difference between the body and the eternal witnessing soul",
  },
  {
    number: 14,
    nameDevanagari: "गुण त्रय विभाग योग",
    nameEnglish: "The Three Qualities of Nature",
    yogaName: "Gunatraya Vibhaga Yoga",
    verseCount: 27,
    summary:
      "Krishna reveals the three fundamental qualities (Gunas) of material nature that bind every soul: Tamas (inertia, darkness, delusion), Rajas (passion, restlessness, desire), and Sattva (purity, clarity, harmony). All actions, states, and conditions arise from their interplay. One who transcends all three Gunas — equanimous toward pleasure and pain, gold and stone, praise and blame — is said to have crossed beyond nature and reached the Divine.",
    keyVerse: "14.19",
    keyTheme: "Transcend the three Gunas to attain eternal freedom",
  },
  {
    number: 15,
    nameDevanagari: "पुरुषोत्तम योग",
    nameEnglish: "The Supreme Person",
    yogaName: "Purushottama Yoga",
    verseCount: 20,
    summary:
      "Krishna describes the eternal Ashvattha tree of cosmic existence with its roots above and branches below. One who cuts this tree with the sword of detachment and takes refuge in the Primeval Person attains the Supreme. He distinguishes between the perishable (Kshara), the imperishable (Akshara), and the Supreme Being (Purushottama) — the Highest Self who transcends both and sustains all three worlds. One who knows this secret truly knows the Gita.",
    keyVerse: "15.15",
    keyTheme: "The Supreme Person transcends both perishable and imperishable",
  },
  {
    number: 16,
    nameDevanagari: "दैव असुर सम्पद् विभाग योग",
    nameEnglish: "Divine and Demonic Natures",
    yogaName: "Daivasura Sampad Vibhaga Yoga",
    verseCount: 24,
    summary:
      "Krishna enumerates the twenty-six divine qualities that lead toward liberation — fearlessness, purity of heart, steadfastness in knowledge, charity, self-restraint, sacrifice, and compassion — and contrasts them with the demonic qualities of pride, arrogance, lust, anger, cruelty, and delusion. He declares lust, anger, and greed as the triple gates of hell that destroy the soul. One should follow the injunctions of scripture as the guide for right action.",
    keyVerse: "16.21",
    keyTheme:
      "Divine qualities lead to liberation; demonic qualities bind the soul",
  },
  {
    number: 17,
    nameDevanagari: "श्रद्धात्रय विभाग योग",
    nameEnglish: "The Three Divisions of Faith",
    yogaName: "Shraddhatraya Vibhaga Yoga",
    verseCount: 28,
    summary:
      "Krishna reveals that every person's faith, food, sacrifice, austerity, and charity reflect their predominant Guna. Sattvic faith nourishes virtue and leads to wisdom; Rajasic faith seeks power and pleasure; Tamasic faith deludes and destroys. He explains the sacred significance of the three-syllable mantra 'Om Tat Sat' — the eternal affirmation that sanctifies all acts of sacrifice, charity, and austerity when performed without desire for reward.",
    keyVerse: "17.3",
    keyTheme:
      "Your faith shapes your nature; align faith with Sattva to reach the Divine",
  },
  {
    number: 18,
    nameDevanagari: "मोक्ष संन्यास योग",
    nameEnglish: "The Yoga of Liberation through Renunciation",
    yogaName: "Moksha Sannyas Yoga",
    verseCount: 78,
    summary:
      "The final and longest chapter summarizes the entire teaching of the Gita. Krishna distinguishes true renunciation (Sannyasa) from mere abandonment of action and teaches the five causes of all action. He describes the three types of knowledge, action, doer, intellect, and fortitude according to the Gunas. He reveals the pinnacle of devotion — surrender all actions and duties to the Divine and take complete refuge in Him alone. Verse 18.66 is the Gita's ultimate promise: surrender completely and Krishna personally liberates the devotee from all sins.",
    keyVerse: "18.66",
    keyTheme:
      "Surrender completely to the Divine; this is the highest teaching of the Gita",
  },
];

// Canonical verse count per chapter (matches the 700-verse canonical Gita)
export const CHAPTER_VERSE_COUNTS: number[] = [
  47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 34, 27, 20, 24, 28, 78,
];

// Total = 700 verses
export const TOTAL_VERSES = CHAPTER_VERSE_COUNTS.reduce((a, b) => a + b, 0);

// Get verse ID from chapter + verse number
export function getVerseId(chapter: number, verse: number): string {
  return `${chapter}.${verse}`;
}

// Get chapter number from verse ID
export function getChapterFromVerseId(verseId: string): number {
  return Number.parseInt(verseId.split(".")[0], 10);
}

// Get verse number from verse ID
export function getVerseNumberFromId(verseId: string): number {
  return Number.parseInt(verseId.split(".")[1], 10);
}

// Get chapter metadata by number
export function getChapterByNumber(number: number): GitaChapter | undefined {
  return GITA_CHAPTERS.find((c) => c.number === number);
}

// Check if a verse ID is valid
export function isValidVerseId(verseId: string): boolean {
  const parts = verseId.split(".");
  if (parts.length !== 2) return false;
  const ch = Number.parseInt(parts[0], 10);
  const v = Number.parseInt(parts[1], 10);
  if (ch < 1 || ch > 18) return false;
  const maxVerses = CHAPTER_VERSE_COUNTS[ch - 1];
  return v >= 1 && v <= maxVerses;
}
