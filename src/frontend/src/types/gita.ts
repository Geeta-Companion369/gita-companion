// ─── Core Scripture Types ───────────────────────────────────────────────────

export interface Chapter {
  id: number;
  name: string;
  summary: string;
  verseCount: number;
  sanskritName: string;
}

export interface Verse {
  id: string;
  chapterId: number;
  verseNumber: number;
  sanskritText: string;
  transliteration: string;
  englishTranslation: string;
  hindiTranslation?: string;
  explanation?: string;
}

export interface GuidanceResult {
  chapter: number;
  verse: number;
  keyword: string;
  message: string;
  sanskritText?: string;
  englishTranslation?: string;
}

export interface LastReadPosition {
  chapterId: number;
  verseId: string;
}

// ─── Language & User Settings ───────────────────────────────────────────────

export type Language =
  | "sanskrit"
  | "english"
  | "hindi"
  | "marathi"
  | "gujarati";

export interface UserProfile {
  name: string;
  arjunMode: boolean;
  language: Language;
  voiceGender: "male" | "female";
  selectedWallpaper?: string;
  joinDate: string;
}

// ─── Practice Tracking ───────────────────────────────────────────────────────

export interface MalaSession {
  id: string;
  date: string;
  beadCount: number;
  mantra?: string;
  timestamp: number;
}

export interface NaamSession {
  id: string;
  date: string;
  mantra: string;
  reps: number;
  timestamp: number;
}

export interface Streak {
  count: number;
  lastDate: string;
  longestStreak: number;
}

// ─── Points & Gamification ───────────────────────────────────────────────────

export interface Points {
  total: number;
  fromWriting: number;
  fromReading: number;
  fromListening: number;
  fromStreak: number;
}

export type BadgeType = "streak" | "achievement" | "challenge";

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
  type: BadgeType;
}

export interface Bookmark {
  chapterId: number;
  verseId: number;
  addedDate: string;
  note?: string;
}

// ─── Mantra & Festival ───────────────────────────────────────────────────────

export interface MantraEntry {
  id: string;
  name: string;
  category:
    | "protection"
    | "education"
    | "prosperity"
    | "stress-relief"
    | "devotion";
  meaning: string;
  benefit: string;
  text: string;
  repetitions?: number;
}

export interface Festival {
  name: string;
  dateStr: string;
  meaning: string;
  mantraName: string;
  recommendedVerse: string;
  rituals?: string[];
}

// ─── Challenges & Rewards ────────────────────────────────────────────────────

export interface DailyChallenge {
  date: string;
  task: string;
  points: number;
  action: string;
  completed?: boolean;
  actionRoute?: string;
}

export type RewardItemType = "wallpaper" | "voice" | "mantra-pack";

export interface RewardItem {
  id: string;
  name: string;
  description: string;
  type: RewardItemType;
  cost: number;
  unlocked: boolean;
  preview?: string;
}

// ─── Gallery & Media ─────────────────────────────────────────────────────────

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: "krishna" | "kurukshetra" | "divine" | "nature";
  locked: boolean;
  pointsRequired?: number;
}

// ─── Achievement Ladder ──────────────────────────────────────────────────────

export type SpiritualTitle =
  | "Jigyasu"
  | "Shraddhavan"
  | "Bhakta"
  | "Naam Premi"
  | "Naam Sadhak"
  | "Krishna Sevak";

export interface AchievementLevel {
  title: SpiritualTitle;
  minPoints: number;
  color: string;
  description: string;
}

// ─── Sanskrit Word Intelligence ──────────────────────────────────────────────

export interface WordIntelligence {
  word: string; // Devanagari
  iast: string; // IAST transliteration
  meaning: string;
  grammar: string; // e.g., "noun, masculine, nominative"
  etymology: string;
  frequency: number; // approximate frequency in Gita
  relatedVerses: string[]; // verse IDs like ["2.47", "3.8"]
}

// ─── Mood-Based Verse Finder ─────────────────────────────────────────────────

export interface MoodEntry {
  mood: string; // key
  label: string; // display label
  icon: string; // emoji
  verseIds: string[];
  reasoning: string;
}

export type GitaMood =
  | "anxious"
  | "lost"
  | "angry"
  | "grieving"
  | "confused"
  | "fearful"
  | "grateful"
  | "joyful"
  | "seeking_purpose"
  | "relationship_trouble"
  | "career_confusion"
  | "lack_of_focus"
  | "grief"
  | "doubt"
  | "envy"
  | "pride"
  | "excessive_desire"
  | "need_courage";

// ─── Personal Spiritual Journal ──────────────────────────────────────────────

export interface JournalEntry {
  id: string;
  verseId: string;
  text: string;
  mood: string;
  createdAt: number; // timestamp
  updatedAt: number;
}

// ─── Reading Progress Heatmap ────────────────────────────────────────────────

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  versesRead: number;
  chaptersRead: number;
  allGoalsMet: boolean;
}

// ─── Verse Commentary (Acharya Perspectives) ─────────────────────────────────

export interface VerseCommentary {
  verseId: string;
  shankaracharya: string;
  ramanuja: string;
  tilak: string;
}

// ─── Memorization & Practice Sessions ───────────────────────────────────────

export interface MemorizationSession {
  verseId: string;
  attempts: number;
  correctWords: number;
  totalWords: number;
  lastAttempt: number;
  mastered: boolean;
}

export interface TypingSession {
  verseId: string;
  wpm: number;
  errors: number;
  completedAt: number;
}

export interface ConcentrationSession {
  id: string;
  durationMinutes: number;
  completedAt: number;
  sessionType: string; // "reading" | "meditation" | "naam"
}
