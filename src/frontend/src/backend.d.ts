import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SatsangMessage {
    circleId: string;
    authorName: string;
    message: string;
    timestamp: bigint;
}
export interface HeatmapEntry {
    allGoalsMet: boolean;
    chaptersRead: bigint;
    date: string;
    versesRead: bigint;
    principalId: string;
}
export interface VerseCommentary {
    tilak: string;
    shankaracharya: string;
    verseId: string;
    ramanuja: string;
}
export interface JournalEntry {
    id: string;
    mood: string;
    createdAt: bigint;
    text: string;
    verseId: string;
    updatedAt: bigint;
    principalId: string;
}
export interface GuidanceResult {
    guidanceText: string;
    verse: bigint;
    keyword: string;
    chapter: bigint;
}
export interface DailyChallenge {
    action: string;
    date: string;
    task: string;
    points: bigint;
}
export interface Verse {
    id: bigint;
    verseNumber: string;
    sanskritText: string;
    chapterId: bigint;
    transliteration: string;
    englishTranslation: string;
}
export interface Festival {
    dateStr: string;
    meaning: string;
    name: string;
    mantraName: string;
    recommendedVerse: string;
}
export interface ConcentrationSession {
    id: string;
    completedAt: bigint;
    sessionType: string;
    durationMinutes: bigint;
    principalId: string;
}
export interface MantraEntry {
    id: string;
    meaning: string;
    name: string;
    text: string;
    category: string;
    benefit: string;
}
export interface Chapter {
    id: bigint;
    verseCount: bigint;
    name: string;
    summary: string;
}
export interface backendInterface {
    clearOldMessages(): Promise<void>;
    createJournalEntry(verseId: string, text: string, mood: string): Promise<JournalEntry>;
    deleteJournalEntry(id: string): Promise<boolean>;
    getChapter(chapterId: bigint): Promise<Chapter | null>;
    getCircleMessages(circleId: string): Promise<Array<SatsangMessage>>;
    getConcentrationHistory(limit: bigint): Promise<Array<ConcentrationSession>>;
    getDailyChallenge(dateKey: string): Promise<DailyChallenge | null>;
    getFestivals(): Promise<Array<Festival>>;
    getGuidanceByCategory(category: string): Promise<GuidanceResult | null>;
    getHeatmapData(days: bigint): Promise<Array<HeatmapEntry>>;
    getJournalEntries(): Promise<Array<JournalEntry>>;
    getKrishnaGuidance(keyword: string): Promise<GuidanceResult | null>;
    getMantras(): Promise<Array<MantraEntry>>;
    getReadingStreak(): Promise<bigint>;
    getVerse(chapterId: bigint, verseId: bigint): Promise<Verse | null>;
    getVerseCommentary(verseId: string): Promise<VerseCommentary | null>;
    listChapters(): Promise<Array<Chapter>>;
    listSatsangCircles(): Promise<Array<string>>;
    listVerses(chapterId: bigint): Promise<Array<Verse>>;
    postCircleMessage(circleId: string, authorName: string, message: string): Promise<void>;
    recordConcentrationSession(durationMinutes: bigint, sessionType: string): Promise<ConcentrationSession>;
    recordDailyReading(date: string, versesRead: bigint, chaptersRead: bigint, allGoalsMet: boolean): Promise<HeatmapEntry>;
    searchJournalEntries(searchText: string): Promise<Array<JournalEntry>>;
    updateJournalEntry(id: string, text: string, mood: string): Promise<JournalEntry | null>;
}
