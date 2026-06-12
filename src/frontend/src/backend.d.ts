import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PanchangData {
    tithi: string;
    vara: string;
    yoga: string;
    moonSign: string;
    description: string;
    nakshatra: string;
    karana: string;
    tithiNumber: bigint;
}
export interface GuidanceResult {
    guidanceText: string;
    verse: bigint;
    keyword: string;
    chapter: bigint;
}
export interface DateOfBirth {
    day: bigint;
    month: bigint;
    year: bigint;
}
export interface GrahaRemedyData {
    avoidList: Array<string>;
    daan: string;
    role: string;
    mantraSanskrit: string;
    mantraCount: bigint;
    gemstone: string;
    graha: string;
    weakCauses: Array<string>;
    gemstoneWarning: string;
    remedies: Array<string>;
    strongGives: Array<string>;
}
export interface DashaEntry {
    durationYears: number;
    endDate: bigint;
    lord: string;
    startDate: bigint;
}
export interface Chapter {
    id: bigint;
    verseCount: bigint;
    name: string;
    summary: string;
}
export interface TimeOfBirth {
    hour: bigint;
    minute: bigint;
}
export interface TransitEvent {
    remedy: string;
    colorCode: string;
    endDate: string;
    planet: string;
    description: string;
    startDate: string;
    eventType: string;
}
export interface VerseCommentary {
    tilak: string;
    shankaracharya: string;
    verseId: string;
    ramanuja: string;
}
export interface RemedyReminder {
    isActive: boolean;
    reminderTime: string;
    graha: string;
}
export interface AdminConfigInput {
    newsletterEnabled: boolean;
    appVersion: string;
    senderName: string;
    senderEmail: string;
}
export interface EmailSubscriber {
    active: boolean;
    subscribedAt: bigint;
    name: string;
    email: string;
}
export interface HeatmapEntry {
    allGoalsMet: boolean;
    chaptersRead: bigint;
    date: string;
    versesRead: bigint;
    principalId: string;
}
export interface GalleryImageMeta {
    id: bigint;
    isApproved: boolean;
    assetId: string;
    caption: string;
    category: string;
    uploader: Principal;
    uploadedAt: bigint;
}
export interface DonationInfo {
    qrCodeAssetId: string;
    ifscCode: string;
    bankName: string;
    updatedAt: bigint;
    accountName: string;
    upiId: string;
    accountNumber: string;
}
export interface KundliData {
    navamsaLagnaSign: bigint;
    pratyantarDasha: DashaEntry;
    lagnaRashi: string;
    profileId: Principal;
    rulingPlanetGlyph: string;
    lagnaSign: bigint;
    calculatedAt: bigint;
    planets: Array<PlanetPlacement>;
    rulingPlanet: string;
    antardasha: DashaEntry;
    navamsaPlanets: Array<PlanetPlacement>;
    nextDashas: Array<DashaEntry>;
    mahadasha: DashaEntry;
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
export interface SatsangMessage {
    circleId: string;
    authorName: string;
    message: string;
    timestamp: bigint;
}
export interface PlanetPlacement {
    house: bigint;
    planet: string;
    retrograde: boolean;
    sign: bigint;
    degree: number;
    nakshatra: string;
    nakshatraLord: string;
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
export interface DonationInfoInput {
    qrCodeAssetId: string;
    ifscCode: string;
    bankName: string;
    accountName: string;
    upiId: string;
    accountNumber: string;
}
export interface DailyChallenge {
    action: string;
    date: string;
    task: string;
    points: bigint;
}
export interface AdminConfig {
    newsletterEnabled: boolean;
    appVersion: string;
    senderName: string;
    senderEmail: string;
}
export interface UserProfileInput {
    placeOfBirth: string;
    latitude: number;
    timezone: string;
    dateOfBirth: DateOfBirth;
    newsletterOptIn: boolean;
    fullName: string;
    email: string;
    timeOfBirth: TimeOfBirth;
    longitude: number;
    phone: string;
}
export interface UserProfile {
    id: Principal;
    placeOfBirth: string;
    latitude: number;
    timezone: string;
    dateOfBirth: DateOfBirth;
    newsletterOptIn: boolean;
    createdAt: bigint;
    fullName: string;
    email: string;
    updatedAt: bigint;
    timeOfBirth: TimeOfBirth;
    longitude: number;
    phone: string;
}
export interface GalleryImageInput {
    assetId: string;
    caption: string;
    category: string;
}
export interface backendInterface {
    adminListAllGalleryImages(): Promise<Array<GalleryImageMeta>>;
    clearOldMessages(): Promise<void>;
    createJournalEntry(verseId: string, text: string, mood: string): Promise<JournalEntry>;
    deleteJournalEntry(id: string): Promise<boolean>;
    getAdminConfig(): Promise<AdminConfig>;
    getAllGrahaRemedies(): Promise<Array<GrahaRemedyData>>;
    getChapter(chapterId: bigint): Promise<Chapter | null>;
    getCircleMessages(circleId: string): Promise<Array<SatsangMessage>>;
    getConcentrationHistory(limit: bigint): Promise<Array<ConcentrationSession>>;
    getDailyChallenge(dateKey: string): Promise<DailyChallenge | null>;
    getDonationInfo(): Promise<DonationInfo | null>;
    getFestivals(): Promise<Array<Festival>>;
    getGalleryUploads(): Promise<Array<GalleryImageMeta>>;
    getGrahaRemedy(graha: string): Promise<GrahaRemedyData | null>;
    getGuidanceByCategory(category: string): Promise<GuidanceResult | null>;
    getHeatmapData(days: bigint): Promise<Array<HeatmapEntry>>;
    getJournalEntries(): Promise<Array<JournalEntry>>;
    getKrishnaGuidance(keyword: string): Promise<GuidanceResult | null>;
    getKundliData(): Promise<KundliData | null>;
    getMantras(): Promise<Array<MantraEntry>>;
    getPanchangToday(date: string): Promise<PanchangData>;
    getReadingStreak(): Promise<bigint>;
    getRemedyReminder(): Promise<RemedyReminder | null>;
    getTransitCalendar(year: bigint): Promise<Array<TransitEvent>>;
    getUserProfile(): Promise<UserProfile | null>;
    getVerse(chapterId: bigint, verseId: bigint): Promise<Verse | null>;
    getVerseCommentary(verseId: string): Promise<VerseCommentary | null>;
    listChapters(): Promise<Array<Chapter>>;
    listNewsletterSubscribers(): Promise<Array<EmailSubscriber>>;
    listSatsangCircles(): Promise<Array<string>>;
    listVerses(chapterId: bigint): Promise<Array<Verse>>;
    postCircleMessage(circleId: string, authorName: string, message: string): Promise<void>;
    recordConcentrationSession(durationMinutes: bigint, sessionType: string): Promise<ConcentrationSession>;
    recordDailyReading(date: string, versesRead: bigint, chaptersRead: bigint, allGoalsMet: boolean): Promise<HeatmapEntry>;
    saveKundliData(data: KundliData): Promise<boolean>;
    saveRemedyReminder(graha: string, time: string): Promise<boolean>;
    saveUserProfile(input: UserProfileInput): Promise<boolean>;
    searchJournalEntries(searchText: string): Promise<Array<JournalEntry>>;
    setDonationInfo(input: DonationInfoInput): Promise<boolean>;
    setGalleryImageApproval(id: bigint, approved: boolean): Promise<boolean>;
    subscribeNewsletter(email: string, name: string): Promise<boolean>;
    unsubscribeNewsletter(email: string): Promise<boolean>;
    updateAdminConfig(config: AdminConfigInput): Promise<boolean>;
    updateJournalEntry(id: string, text: string, mood: string): Promise<JournalEntry | null>;
    uploadGalleryImage(input: GalleryImageInput): Promise<bigint>;
}
