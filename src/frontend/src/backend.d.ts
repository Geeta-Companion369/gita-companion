import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
import type { ExternalBlob } from "@caffeineai/object-storage";
export type { ExternalBlob } from "@caffeineai/object-storage";
export interface LeaderboardEntry {
    donorName: string;
    rank: bigint;
    lastDonationAt: bigint;
    totalDonation: bigint;
    donorPrincipal: string;
    donationCount: bigint;
}
export interface Sampradaya {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    lineage: Array<string>;
    sanskritName: string;
    name: string;
    sourceVerse: string;
    founder: string;
    philosophy: string;
}
export interface PitruRite {
    id: string;
    sourceGranth: string;
    offerings: Array<string>;
    sourceChapter: string;
    timing: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    procedure: string;
}
export interface PanchangData {
    tithi: string;
    date: string;
    masa: string;
    ritu: string;
    vaar: string;
    yoga: string;
    moonSign: string;
    description: string;
    nakshatra: string;
    paksha: string;
    karana: string;
    tithiNumber: bigint;
}
export interface GuidanceResult {
    guidanceText: string;
    verse: bigint;
    keyword: string;
    chapter: bigint;
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
export interface Chapter {
    id: bigint;
    verseCount: bigint;
    name: string;
    summary: string;
}
export interface KarmaType {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    practice: string;
}
export interface YugCycle {
    id: string;
    sourceGranth: string;
    durationYears: bigint;
    sourceChapter: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    characteristics: string;
    dharmaQuarter: bigint;
}
export interface DailyDuty {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    timing: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    linkedExplanationId: string;
    practice: string;
    category: string;
}
export interface GranthVerse {
    sourceGranth: string;
    sourceChapter: bigint;
    verseNumber: string;
    sourceVerse: string;
    chapterId: bigint;
    verseId: bigint;
    sanskritDevanagari: string;
    simpleMeaning: string;
    sanskritTransliteration: string;
    granthId: string;
}
export interface RemedyReminder {
    isActive: boolean;
    reminderTime: string;
    graha: string;
}
export interface MokshaTeaching {
    id: string;
    sourceGranth: string;
    sourceChapter: bigint;
    verse: string;
    sourceVerse: string;
    sanskritDevanagari: string;
    chapter: bigint;
    simpleMeaning: string;
    commentary: string;
    sanskritTransliteration: string;
}
export interface Cell {
    value: Value;
    name: string;
}
export interface HeatmapEntry {
    allGoalsMet: boolean;
    chaptersRead: bigint;
    date: string;
    versesRead: bigint;
    principalId: string;
}
export interface TarotCard {
    id: string;
    name: string;
    suit: string;
    reversedMeaning: string;
    number: bigint;
    uprightMeaning: string;
    arcana: string;
    imagery: string;
    symbolism: string;
}
export interface DharmaPillar {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    practice: string;
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
export interface Festival {
    sourceGranth: string;
    dateStr: string;
    sourceChapter: string;
    meaning: string;
    name: string;
    sourceVerse: string;
    story: string;
    mantraName: string;
    recommendedVerse: string;
}
export interface MantraEntry {
    id: string;
    meaning: string;
    name: string;
    text: string;
    category: MantraCategory;
    benefit: string;
    recommendedCount: bigint;
}
export interface PregnancyWeek {
    sourceGranth: string;
    title: string;
    sourceChapter: string;
    trimester: bigint;
    sourceVerse: string;
    weekNumber: bigint;
    saadhna: string;
    development: string;
    mantra: string;
    garbhaSanskarTip: string;
}
export interface SatsangCircle {
    id: string;
    name: string;
    memberCount: bigint;
    description: string;
    iconGlyph: string;
}
export interface Result {
    hasMore: boolean;
    rows: Array<Array<Cell>>;
}
export interface TarotReading {
    id: string;
    spreadType: string;
    question: string;
    interpretation: string;
    guidance: string;
    draws: Array<TarotDraw>;
    principalId: string;
    readAt: bigint;
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
export interface DharmaBodhStep {
    id: string;
    sourceGranth: string;
    title: string;
    sourceChapter: string;
    sanskritName: string;
    question: string;
    sourceVerse: string;
    stepNumber: bigint;
    practice: string;
    guidance: string;
}
export interface DailyChallenge {
    action: string;
    date: string;
    task: string;
    points: bigint;
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
    asset: ExternalBlob;
    caption: string;
    category: string;
}
export interface TarotDraw {
    positionName: string;
    cardId: string;
    position: bigint;
    isReversed: boolean;
}
export type GranthType = {
    __kind__: "gita";
    gita: null;
} | {
    __kind__: "veda";
    veda: VedaName;
} | {
    __kind__: "purana";
    purana: PuranaName;
} | {
    __kind__: "upanishad";
    upanishad: UpanishadName;
};
export interface Sanskaar {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    timing: string;
    sanskritName: string;
    name: string;
    sanskaarNumber: bigint;
    description: string;
    sourceVerse: string;
    significance: string;
    mantra: string;
    procedure: Array<string>;
}
export interface QuizQuestion {
    id: string;
    sourceGranth: string;
    question: string;
    correctIndex: bigint;
    date: string;
    explanation: string;
    sourceVerse: string;
    options: Array<string>;
    points: bigint;
}
export interface ShauchaPractice {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    sanskritName: string;
    kind: string;
    name: string;
    description: string;
    sourceVerse: string;
    practice: string;
    benefits: Array<string>;
}
export interface DateOfBirth {
    day: bigint;
    month: bigint;
    year: bigint;
}
export interface RitualExplanation {
    id: string;
    sourceGranth: string;
    title: string;
    sourceChapter: string;
    ritualName: string;
    explanation: string;
    sourceVerse: string;
    relatedDutyIds: Array<string>;
}
export interface LastRiteStep {
    id: string;
    sourceGranth: string;
    title: string;
    sourceChapter: string;
    sanskritName: string;
    description: string;
    sourceVerse: string;
    stepNumber: bigint;
    mantra: string;
    procedure: string;
}
export interface SiddhiEntry {
    id: string;
    sourceGranth: string;
    guruDisclaimer: string;
    sourceChapter: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    significance: string;
    category: SiddhiCategory;
}
export interface TimeOfBirth {
    hour: bigint;
    minute: bigint;
}
export interface PunyaProfile {
    currentStreakDays: bigint;
    badges: Array<Badge>;
    totalPoints: bigint;
    longestStreakDays: bigint;
    lastActivityAt: bigint;
    principalId: string;
}
export interface WorshipStep {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    stepNumber: bigint;
    mantra: string;
    procedure: string;
}
export interface VerseCommentary {
    tilak: string;
    shankaracharya: string;
    verseId: string;
    ramanuja: string;
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
export interface GranthChapter {
    sanskritName: string;
    verseCount: bigint;
    name: string;
    chapterId: bigint;
    summary: string;
    granthId: string;
}
export interface DashaEntry {
    durationYears: number;
    endDate: bigint;
    lord: string;
    startDate: bigint;
}
export interface Badge {
    id: string;
    name: string;
    description: string;
    earnedAt: bigint;
    iconGlyph: string;
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
export type Value = {
    __kind__: "int";
    int: bigint;
} | {
    __kind__: "nat";
    nat: bigint;
} | {
    __kind__: "float";
    float: number;
} | {
    __kind__: "bool";
    bool: boolean;
} | {
    __kind__: "null";
    null: null;
} | {
    __kind__: "text";
    text: string;
};
export interface DonationInfo {
    qrCodeAssetId: string;
    ifscCode: string;
    bankName: string;
    updatedAt: bigint;
    accountName: string;
    upiId: string;
    accountNumber: string;
}
export interface NaamPledge {
    displayName: string;
    pledgedAt: bigint;
    completedCount: bigint;
    isActive: boolean;
    lastUpdatedAt: bigint;
    pledgedCount: bigint;
    mantraName: string;
    principalId: string;
}
export interface Granth {
    id: string;
    sanskritName: string;
    sourceCitation: string;
    name: string;
    granthType: GranthType;
    description: string;
    totalChapters: bigint;
}
export interface GalleryImageMeta {
    id: bigint;
    isApproved: boolean;
    asset: ExternalBlob;
    caption: string;
    category: string;
    uploader: Principal;
    uploadedAt: bigint;
}
export interface Verse {
    id: bigint;
    verseNumber: string;
    sanskritText: string;
    chapterId: bigint;
    transliteration: string;
    englishTranslation: string;
}
export interface DikshaVidhi {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    sanskritName: string;
    prerequisites: Array<string>;
    name: string;
    description: string;
    sourceVerse: string;
    mantra: string;
    procedure: Array<string>;
}
export interface ConcentrationSession {
    id: string;
    completedAt: bigint;
    sessionType: string;
    durationMinutes: bigint;
    principalId: string;
}
export interface SatsangMessage {
    circleId: string;
    authorName: string;
    message: string;
    timestamp: bigint;
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
export interface DevlokStage {
    id: string;
    sourceGranth: string;
    sourceChapter: string;
    sanskritName: string;
    stageNumber: bigint;
    name: string;
    description: string;
    sourceVerse: string;
    significance: string;
}
export interface MaunaPractice {
    id: string;
    sourceGranth: string;
    duration: string;
    sourceChapter: string;
    sanskritName: string;
    name: string;
    description: string;
    sourceVerse: string;
    benefits: Array<string>;
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
export enum MantraCategory {
    sharanam = "sharanam",
    protection = "protection",
    mahamantra = "mahamantra",
    general = "general"
}
export enum PuranaName {
    markandeya = "markandeya",
    brahma = "brahma",
    bhagavata = "bhagavata",
    narada = "narada",
    agni = "agni",
    vamana = "vamana",
    varaha = "varaha",
    garuda = "garuda",
    linga = "linga",
    shiva = "shiva",
    brahmanda = "brahmanda",
    bhavishya = "bhavishya",
    matsya = "matsya",
    padma = "padma",
    skanda = "skanda",
    kurma = "kurma",
    vishnu = "vishnu",
    brahmavaivarta = "brahmavaivarta"
}
export enum SiddhiCategory {
    kala = "kala",
    mahavidya = "mahavidya",
    nidhi = "nidhi",
    siddhi = "siddhi"
}
export enum UpanishadName {
    mundaka = "mundaka",
    aitareya = "aitareya",
    isha = "isha",
    kena = "kena",
    chandogya = "chandogya",
    taittiriya = "taittiriya",
    brihadaranyaka = "brihadaranyaka",
    katha = "katha",
    shvetashvatara = "shvetashvatara",
    prashna = "prashna",
    mandukya = "mandukya"
}
export enum VedaName {
    rig = "rig",
    atharva = "atharva",
    sama = "sama",
    yajur = "yajur"
}
export interface backendInterface {
    adminListAllGalleryImages(): Promise<Array<GalleryImageMeta>>;
    clearOldMessages(): Promise<void>;
    createJournalEntry(verseId: string, text: string, mood: string): Promise<JournalEntry>;
    deleteJournalEntry(id: string): Promise<boolean>;
    drawTarot(spreadType: string, question: string): Promise<TarotReading>;
    execute(qJson: string): Promise<Result>;
    getAdminConfig(): Promise<AdminConfig>;
    getAllGrahaRemedies(): Promise<Array<GrahaRemedyData>>;
    getChapter(chapterId: bigint): Promise<Chapter | null>;
    getCircleMessages(circleId: string): Promise<Array<SatsangMessage>>;
    getConcentrationHistory(limit: bigint): Promise<Array<ConcentrationSession>>;
    getDailyChallenge(dateKey: string): Promise<DailyChallenge | null>;
    getDailyDuty(id: string): Promise<DailyDuty | null>;
    getDailyQuiz(date: string): Promise<QuizQuestion | null>;
    getDevlokStage(id: string): Promise<DevlokStage | null>;
    getDharmaBodhStep(id: string): Promise<DharmaBodhStep | null>;
    getDharmaPillar(id: string): Promise<DharmaPillar | null>;
    getDikshaVidhi(id: string): Promise<DikshaVidhi | null>;
    getDonationInfo(): Promise<DonationInfo | null>;
    getFestivals(): Promise<Array<Festival>>;
    getGalleryUploads(): Promise<Array<GalleryImageMeta>>;
    getGrahaRemedy(graha: string): Promise<GrahaRemedyData | null>;
    getGranth(granthId: string): Promise<Granth | null>;
    getGranthChapter(granthId: string, chapterId: bigint): Promise<GranthChapter | null>;
    getGranthVerse(granthId: string, chapterId: bigint, verseId: bigint): Promise<GranthVerse | null>;
    getGuidanceByCategory(category: string): Promise<GuidanceResult | null>;
    getHeatmapData(days: bigint): Promise<Array<HeatmapEntry>>;
    getJournalEntries(): Promise<Array<JournalEntry>>;
    getKala(id: string): Promise<SiddhiEntry | null>;
    getKarmaType(id: string): Promise<KarmaType | null>;
    getKrishnaGuidance(keyword: string): Promise<GuidanceResult | null>;
    getKundliData(): Promise<KundliData | null>;
    getLastRiteStep(id: string): Promise<LastRiteStep | null>;
    getLeaderboard(limit: bigint): Promise<Array<LeaderboardEntry>>;
    getMahavidya(id: string): Promise<SiddhiEntry | null>;
    getMantras(): Promise<Array<MantraEntry>>;
    getMaunaPractice(id: string): Promise<MaunaPractice | null>;
    getMokshaTeaching(id: string): Promise<MokshaTeaching | null>;
    getNaamPledges(): Promise<Array<NaamPledge>>;
    getNidhi(id: string): Promise<SiddhiEntry | null>;
    getPanchaang(dateStr: string): Promise<PanchangData>;
    getPanchangToday(date: string): Promise<PanchangData>;
    getPitruRite(id: string): Promise<PitruRite | null>;
    getPregnancyWeek(weekNumber: bigint): Promise<PregnancyWeek | null>;
    getPunyaProfile(): Promise<PunyaProfile | null>;
    getReadingStreak(): Promise<bigint>;
    getRemedyReminder(): Promise<RemedyReminder | null>;
    getRitualExplanation(id: string): Promise<RitualExplanation | null>;
    getSampradaya(id: string): Promise<Sampradaya | null>;
    getSanskaar(id: string): Promise<Sanskaar | null>;
    getSatsangCircle(circleId: string): Promise<SatsangCircle | null>;
    getShauchaPractice(id: string): Promise<ShauchaPractice | null>;
    getSiddhi(id: string): Promise<SiddhiEntry | null>;
    getTarotCard(id: string): Promise<TarotCard | null>;
    getTransitCalendar(year: bigint): Promise<Array<TransitEvent>>;
    getUserProfile(): Promise<UserProfile | null>;
    getVerse(chapterId: bigint, verseId: bigint): Promise<Verse | null>;
    getVerseCommentary(verseId: string): Promise<VerseCommentary | null>;
    getWorshipStep(id: string): Promise<WorshipStep | null>;
    getYugCycle(id: string): Promise<YugCycle | null>;
    listChapters(): Promise<Array<Chapter>>;
    listDailyDuties(): Promise<Array<DailyDuty>>;
    listDevlokStages(): Promise<Array<DevlokStage>>;
    listDharmaBodhSteps(): Promise<Array<DharmaBodhStep>>;
    listDharmaPillars(): Promise<Array<DharmaPillar>>;
    listGranthChapters(granthId: string): Promise<Array<GranthChapter>>;
    listGranthVerses(granthId: string, chapterId: bigint): Promise<Array<GranthVerse>>;
    listGranths(): Promise<Array<Granth>>;
    listKalas(): Promise<Array<SiddhiEntry>>;
    listKarmaTypes(): Promise<Array<KarmaType>>;
    listLastRiteSteps(): Promise<Array<LastRiteStep>>;
    listMahavidyas(): Promise<Array<SiddhiEntry>>;
    listMaunaPractices(): Promise<Array<MaunaPractice>>;
    listMokshaTeachings(): Promise<Array<MokshaTeaching>>;
    listNewsletterSubscribers(): Promise<Array<EmailSubscriber>>;
    listNidhis(): Promise<Array<SiddhiEntry>>;
    listPitruRites(): Promise<Array<PitruRite>>;
    listPregnancyWeeks(): Promise<Array<PregnancyWeek>>;
    listRitualExplanations(): Promise<Array<RitualExplanation>>;
    listSampradayas(): Promise<Array<Sampradaya>>;
    listSanskaars(): Promise<Array<Sanskaar>>;
    listSatsangCircleMetadata(): Promise<Array<SatsangCircle>>;
    listSatsangCircles(): Promise<Array<string>>;
    listShauchaPractices(): Promise<Array<ShauchaPractice>>;
    listSiddhis(): Promise<Array<SiddhiEntry>>;
    listTarotCards(): Promise<Array<TarotCard>>;
    listVerses(chapterId: bigint): Promise<Array<Verse>>;
    listWorshipSteps(): Promise<Array<WorshipStep>>;
    listYugCycles(): Promise<Array<YugCycle>>;
    postCircleMessage(circleId: string, authorName: string, message: string): Promise<void>;
    recordConcentrationSession(durationMinutes: bigint, sessionType: string): Promise<ConcentrationSession>;
    recordDailyReading(date: string, versesRead: bigint, chaptersRead: bigint, allGoalsMet: boolean): Promise<HeatmapEntry>;
    saveKundliData(data: KundliData): Promise<boolean>;
    saveRemedyReminder(graha: string, time: string): Promise<boolean>;
    saveUserProfile(input: UserProfileInput): Promise<boolean>;
    schema(): Promise<string>;
    searchJournalEntries(searchText: string): Promise<Array<JournalEntry>>;
    setDonationInfo(input: DonationInfoInput): Promise<boolean>;
    setGalleryImageApproval(id: bigint, approved: boolean): Promise<boolean>;
    subscribeNewsletter(email: string, name: string): Promise<boolean>;
    unsubscribeNewsletter(email: string): Promise<boolean>;
    updateAdminConfig(config: AdminConfigInput): Promise<boolean>;
    updateJournalEntry(id: string, text: string, mood: string): Promise<JournalEntry | null>;
    uploadGalleryImage(input: GalleryImageInput): Promise<bigint>;
}
