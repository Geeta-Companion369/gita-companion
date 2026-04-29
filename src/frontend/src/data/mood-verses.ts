// ─── Mood-Based Verse Finder ─────────────────────────────────────────────────
// Maps 18 sacred moods (mirroring the 18 chapters of the Gita) to the most
// relevant Bhagavad Gita verses with reasoning grounded in Krishna's teachings.

import type { GitaMood, MoodEntry } from "../types/gita";

export const MOOD_VERSE_MAP: Record<GitaMood, MoodEntry> = {
  anxious: {
    mood: "anxious",
    label: "Anxious & Worried",
    icon: "😰",
    verseIds: ["2.14", "2.47", "6.35", "12.15", "18.33"],
    reasoning:
      "Anxiety arises from attachment to outcomes. Krishna teaches that the soul is untouched by temporary disturbances — pain and pleasure come and go like seasons. Fix the mind on your duty, not on results, and anxiety dissolves in the light of Nishkama Karma.",
  },
  lost: {
    mood: "lost",
    label: "Lost & Directionless",
    icon: "🌫️",
    verseIds: ["2.7", "3.2", "4.34", "18.63", "18.66"],
    reasoning:
      "When Arjuna felt utterly lost, he surrendered to Krishna and asked for guidance. The Gita itself was born from this sacred moment of surrender. Approach a wise teacher, ask sincerely, and the path will be revealed. Surrender is not weakness — it is the highest intelligence.",
  },
  angry: {
    mood: "angry",
    label: "Angry & Frustrated",
    icon: "🔥",
    verseIds: ["2.62", "2.63", "3.37", "5.23", "16.21"],
    reasoning:
      "Krishna traces the chain of destruction: desire → frustration → anger → delusion → loss of memory → destruction of intellect → ruin. Anger is the enemy born of Rajas. Before acting in anger, pause and ask: am I serving Dharma or feeding the ego?",
  },
  grieving: {
    mood: "grieving",
    label: "Grieving & Heartbroken",
    icon: "💔",
    verseIds: ["2.19", "2.20", "2.23", "2.27", "15.7"],
    reasoning:
      "Grief for the body's passing is born of ignorance of the eternal Self. The soul is never born and never dies — it merely changes bodies as a person changes worn-out garments. Those we grieve for are eternal, immortal beings. Krishna's first teaching was to heal Arjuna's grief with the knowledge of the deathless Atman.",
  },
  confused: {
    mood: "confused",
    label: "Confused & Uncertain",
    icon: "🌀",
    verseIds: ["2.7", "3.2", "4.34", "6.5", "18.63"],
    reasoning:
      "Confusion (Moha) is the root delusion that obscures right action. Krishna dispels confusion not by giving easy answers but by teaching the eternal principles that guide all decisions. Sit quietly, seek inner clarity, and remember: your duty in this moment, performed without ego, is always the right path.",
  },
  fearful: {
    mood: "fearful",
    label: "Fearful & Insecure",
    icon: "😨",
    verseIds: ["2.14", "2.40", "4.10", "9.31", "18.58"],
    reasoning:
      "Fear arises when we mistake the temporary for the permanent. Krishna assures that no sincere spiritual effort is ever wasted — even a little practice protects from great fear. Take refuge in the Divine; one who is surrendered to Krishna is protected in all circumstances.",
  },
  grateful: {
    mood: "grateful",
    label: "Grateful & Blessed",
    icon: "🙏",
    verseIds: ["9.26", "10.8", "10.11", "12.20", "18.65"],
    reasoning:
      "Gratitude is devotion in action. Krishna says He personally illuminates those devoted to Him with the lamp of knowledge and destroys the darkness born of ignorance. When the heart overflows with gratitude, offer it back to the Source of all blessings — this is the purest form of worship.",
  },
  joyful: {
    mood: "joyful",
    label: "Joyful & Celebratory",
    icon: "✨",
    verseIds: ["5.21", "5.24", "6.28", "12.14", "18.54"],
    reasoning:
      "The Gita describes the supreme joy of one who is liberated — bliss that is independent of all external circumstances. This Brahmananada, Divine Bliss, is the natural state of the Atman. Joy that arises from within, untouched by sensory pleasure and pain, is the truest joy. Celebrate, and dedicate your joy to Krishna.",
  },
  seeking_purpose: {
    mood: "seeking_purpose",
    label: "Seeking Life's Purpose",
    icon: "🔍",
    verseIds: ["3.8", "3.19", "4.7", "18.41", "18.47"],
    reasoning:
      "Your Svadharma — your own unique duty in this life — is your highest purpose. Krishna says it is better to perform one's own duty imperfectly than another's duty perfectly. Discover your natural gifts and inclinations; they are the fingerprints of the Divine on your soul.",
  },
  relationship_trouble: {
    mood: "relationship_trouble",
    label: "Relationship Pain",
    icon: "🤝",
    verseIds: ["2.47", "3.30", "5.10", "6.32", "12.13"],
    reasoning:
      "All relationships are sacred meetings of eternal souls. Krishna teaches that one who sees all beings equally, who hates none and is friendly to all, has truly understood the teaching of the Gita. Perform your duties in every relationship without expectation of return — this is the highest love.",
  },
  career_confusion: {
    mood: "career_confusion",
    label: "Career Crossroads",
    icon: "💼",
    verseIds: ["3.8", "18.41", "18.42", "18.43", "18.47"],
    reasoning:
      "The Gita's framework of Varna and Svadharma is essentially a vocational guide. Brahmin qualities (teaching, learning), Kshatriya qualities (leadership, protection), Vaishya qualities (trade, agriculture), and Shudra qualities (craftsmanship, service) — all are sacred when performed with excellence and dedication. Choose the path where your nature meets the world's need.",
  },
  lack_of_focus: {
    mood: "lack_of_focus",
    label: "Lack of Focus",
    icon: "🎯",
    verseIds: ["6.11", "6.12", "6.26", "6.35", "6.47"],
    reasoning:
      "The restless mind is like a flame in the wind. Krishna prescribes steady practice (Abhyasa) and non-attachment (Vairagya) as the two tools for mastering the wandering mind. Every time the mind wanders, gently, firmly bring it back. Consistency, not perfection, is the path to concentration.",
  },
  grief: {
    mood: "grief",
    label: "Deep Grief",
    icon: "😢",
    verseIds: ["2.19", "2.20", "2.22", "2.25", "2.27"],
    reasoning:
      "The Gita's opening teaching is specifically given to heal grief. Arjuna's grief was so profound that Krishna dedicated the entire second chapter to dispelling it with knowledge of the immortal Self. The soul that grieves and the soul that is mourned are both eternal — they have never truly been separated.",
  },
  doubt: {
    mood: "doubt",
    label: "Doubt & Disbelief",
    icon: "❓",
    verseIds: ["4.39", "4.40", "4.41", "4.42", "9.1"],
    reasoning:
      "The doubting person is destroyed — they cannot enjoy this world or the next, says Krishna. Yet doubt itself, when brought sincerely to the teacher, leads to the highest wisdom. The Gita was born from Arjuna's doubt. Bring your doubts into the open; they are the seeds of deeper understanding.",
  },
  envy: {
    mood: "envy",
    label: "Envious & Jealous",
    icon: "😒",
    verseIds: ["3.27", "5.18", "12.13", "14.22", "16.18"],
    reasoning:
      "Envy arises when we compare our path to another's. But Krishna says the wise see a Brahmin, an elephant, a dog, and an outcast with equal vision. Every soul is on a unique journey ordained by its karma. Your path is incomparable — there is no competition in the realm of the soul.",
  },
  pride: {
    mood: "pride",
    label: "Pride & Ego",
    icon: "🦚",
    verseIds: ["3.27", "12.13", "15.5", "16.17", "16.18"],
    reasoning:
      "Pride (Ahamkara — the 'I am the doer' illusion) is the root cause of bondage. Krishna repeatedly reminds Arjuna that he is not the doer — Nature performs all actions through the three Gunas. True greatness lies in seeing oneself as an instrument of the Divine, not as an independent actor.",
  },
  excessive_desire: {
    mood: "excessive_desire",
    label: "Overcome by Desire",
    icon: "🌊",
    verseIds: ["2.55", "2.59", "2.62", "3.37", "5.23"],
    reasoning:
      "Desire (Kama) is the great enemy — it covers wisdom like smoke covers fire, like dust covers a mirror. Krishna says one who is free from all desires of the mind and is satisfied in the Self alone is the Sthitaprajna, the person of steady wisdom. Redirect desire toward the Divine and watch it transform into devotion.",
  },
  need_courage: {
    mood: "need_courage",
    label: "Need Courage",
    icon: "⚔️",
    verseIds: ["2.3", "2.31", "2.37", "11.33", "18.43"],
    reasoning:
      "Krishna called Arjuna's hesitation 'unmanly' and urged him to rise and fight. Courage is a divine quality — it is listed first among the twenty-six divine virtues in Chapter 16. When the cause is righteous, hesitation is itself a form of adharma. Stand up for what is right — this is your Kshatriya nature, regardless of your birth.",
  },
};

// Ordered list for display — 18 moods mirroring the 18 chapters
export const MOODS_ORDERED: GitaMood[] = [
  "anxious",
  "lost",
  "angry",
  "grieving",
  "confused",
  "fearful",
  "grateful",
  "joyful",
  "seeking_purpose",
  "relationship_trouble",
  "career_confusion",
  "lack_of_focus",
  "grief",
  "doubt",
  "envy",
  "pride",
  "excessive_desire",
  "need_courage",
];

// Get verses for a given mood
export function getVersesForMood(mood: GitaMood): MoodEntry {
  return MOOD_VERSE_MAP[mood];
}

// Get all moods as an ordered array of entries
export function getAllMoods(): MoodEntry[] {
  return MOODS_ORDERED.map((mood) => MOOD_VERSE_MAP[mood]);
}

// Find which moods reference a given verse
export function getMoodsForVerse(verseId: string): GitaMood[] {
  return MOODS_ORDERED.filter((mood) =>
    MOOD_VERSE_MAP[mood].verseIds.includes(verseId),
  );
}
