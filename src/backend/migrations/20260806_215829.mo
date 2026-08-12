// Enhanced-migration entry: converts the previously deployed stable shape
// (21 fields, legacy `(with migration = ...)` persistence) into the expanded
// enhanced-migration shape (48 fields).
//
// What changed:
//   - 21 original stable fields are preserved unchanged (the gallery image
//     `asset : Blob` shape was already deployed — no transformation needed).
//   - 28 new domain-collection stable fields are introduced and initialized
//     to empty Maps / Lists. Their initial values come from this migration
//     (no inline initializers are permitted under enhanced migration).
//
// This file is self-contained: only `mo:core/...` imports, with every old
// and new type inlined. The chain replays forever, so a frozen migration
// that imported project types would break the moment those types changed.
import Map "mo:core/Map";
import List "mo:core/List";

module {
  // ─── Inlined shared types (used by both OldActor and NewActor) ──────────────
  // These mirror the current `src/backend/types/*.mo` definitions exactly.
  // Inlining is mandatory: a frozen migration must not import project modules.

  // ── gita ──
  type VedaName = {
    #rig; #yajur; #sama; #atharva;
  };
  type PuranaName = {
    #brahma; #padma; #vishnu; #shiva; #bhagavata; #narada; #markandeya;
    #agni; #bhavishya; #brahmavaivarta; #linga; #varaha; #skanda; #vamana;
    #kurma; #matsya; #garuda; #brahmanda;
  };
  type UpanishadName = {
    #isha; #kena; #katha; #prashna; #mundaka; #mandukya; #taittiriya;
    #aitareya; #chandogya; #brihadaranyaka; #shvetashvatara;
  };
  type GranthType = {
    #veda : VedaName;
    #purana : PuranaName;
    #upanishad : UpanishadName;
    #gita;
  };
  type Granth = {
    id : Text;
    granthType : GranthType;
    name : Text;
    sanskritName : Text;
    description : Text;
    totalChapters : Nat;
    sourceCitation : Text;
  };
  type GranthChapter = {
    granthId : Text;
    chapterId : Nat;
    name : Text;
    sanskritName : Text;
    summary : Text;
    verseCount : Nat;
  };
  type GranthVerse = {
    granthId : Text;
    chapterId : Nat;
    verseId : Nat;
    verseNumber : Text;
    sanskritDevanagari : Text;
    sanskritTransliteration : Text;
    simpleMeaning : Text;
    sourceGranth : Text;
    sourceChapter : Nat;
    sourceVerse : Text;
  };
  // NEW Festival shape (expanded with source citation + story fields).
  type NewFestival = {
    name : Text;
    dateStr : Text;
    meaning : Text;
    mantraName : Text;
    recommendedVerse : Text;
    story : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  // OLD Festival shape (pre-expansion: 5 fields, no source citation).
  type OldFestival = {
    name : Text;
    dateStr : Text;
    meaning : Text;
    mantraName : Text;
    recommendedVerse : Text;
  };
  type MantraCategory = {
    #mahamantra;
    #sharanam;
    #protection;
    #general;
  };
  // NEW MantraEntry shape: category is the MantraCategory variant.
  type NewMantraEntry = {
    id : Text;
    name : Text;
    category : MantraCategory;
    meaning : Text;
    benefit : Text;
    text : Text;
    recommendedCount : Nat;
  };
  // OLD MantraEntry shape: category was a free-form Text, no recommendedCount.
  type OldMantraEntry = {
    id : Text;
    name : Text;
    category : Text;
    meaning : Text;
    benefit : Text;
    text : Text;
  };
  type Chapter = {
    id : Nat;
    name : Text;
    summary : Text;
    verseCount : Nat;
  };
  type Verse = {
    id : Nat;
    chapterId : Nat;
    verseNumber : Text;
    sanskritText : Text;
    transliteration : Text;
    englishTranslation : Text;
  };
  type GuidanceResult = {
    chapter : Nat;
    verse : Nat;
    keyword : Text;
    guidanceText : Text;
  };
  type DailyChallenge = {
    date : Text;
    task : Text;
    points : Nat;
    action : Text;
  };

  // ── journal-heatmap-commentary ──
  type JournalEntry = {
    id : Text;
    verseId : Text;
    text : Text;
    mood : Text;
    createdAt : Int;
    updatedAt : Int;
    principalId : Text;
  };
  type HeatmapEntry = {
    date : Text;
    versesRead : Nat;
    chaptersRead : Nat;
    allGoalsMet : Bool;
    principalId : Text;
  };
  type VerseCommentary = {
    verseId : Text;
    shankaracharya : Text;
    ramanuja : Text;
    tilak : Text;
  };
  type ConcentrationSession = {
    id : Text;
    durationMinutes : Nat;
    completedAt : Int;
    sessionType : Text;
    principalId : Text;
  };

  // ── satsang-chat ──
  type SatsangMessage = {
    circleId : Text;
    authorName : Text;
    message : Text;
    timestamp : Int;
  };
  type SatsangCircle = {
    id : Text;
    name : Text;
    description : Text;
    memberCount : Nat;
    iconGlyph : Text;
  };
  type QuizQuestion = {
    id : Text;
    date : Text;
    question : Text;
    options : [Text];
    correctIndex : Nat;
    explanation : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    points : Nat;
  };
  type LeaderboardEntry = {
    rank : Nat;
    donorName : Text;
    donorPrincipal : Text;
    totalDonation : Nat;
    donationCount : Nat;
    lastDonationAt : Int;
  };
  type NaamPledge = {
    principalId : Text;
    displayName : Text;
    mantraName : Text;
    pledgedCount : Nat;
    completedCount : Nat;
    pledgedAt : Int;
    lastUpdatedAt : Int;
    isActive : Bool;
  };
  type Badge = {
    id : Text;
    name : Text;
    description : Text;
    iconGlyph : Text;
    earnedAt : Int;
  };
  type PunyaProfile = {
    principalId : Text;
    totalPoints : Nat;
    currentStreakDays : Nat;
    longestStreakDays : Nat;
    badges : [Badge];
    lastActivityAt : Int;
  };

  // ── user-profile ──
  type DateOfBirth = { day : Nat; month : Nat; year : Nat };
  type TimeOfBirth = { hour : Nat; minute : Nat };
  type UserProfile = {
    id : Principal;
    fullName : Text;
    dateOfBirth : DateOfBirth;
    timeOfBirth : TimeOfBirth;
    placeOfBirth : Text;
    latitude : Float;
    longitude : Float;
    timezone : Text;
    email : Text;
    phone : Text;
    newsletterOptIn : Bool;
    createdAt : Int;
    updatedAt : Int;
  };
  type PlanetPlacement = {
    planet : Text;
    sign : Nat;
    house : Nat;
    nakshatra : Text;
    nakshatraLord : Text;
    degree : Float;
    retrograde : Bool;
  };
  type DashaEntry = {
    lord : Text;
    startDate : Int;
    endDate : Int;
    durationYears : Float;
  };
  type KundliData = {
    profileId : Principal;
    lagnaSign : Nat;
    lagnaRashi : Text;
    rulingPlanet : Text;
    rulingPlanetGlyph : Text;
    planets : [PlanetPlacement];
    mahadasha : DashaEntry;
    antardasha : DashaEntry;
    pratyantarDasha : DashaEntry;
    nextDashas : [DashaEntry];
    navamsaLagnaSign : Nat;
    navamsaPlanets : [PlanetPlacement];
    calculatedAt : Int;
  };
  type EmailSubscriber = {
    email : Text;
    name : Text;
    subscribedAt : Int;
    active : Bool;
  };
  type AdminConfig = {
    senderEmail : Text;
    senderName : Text;
    newsletterEnabled : Bool;
    appVersion : Text;
  };

  // ── media ──
  // `asset : Blob` inlines `Storage.ExternalBlob` (which is a `Blob` type
  // alias in the object-storage component). The deployed `.old` shape already
  // used this `asset : Blob` form, so gallery images pass through unchanged.
  type GalleryImageMeta = {
    id : Nat;
    asset : Blob;
    uploader : Principal;
    category : Text;
    caption : Text;
    isApproved : Bool;
    uploadedAt : Int;
  };
  type DonationInfo = {
    qrCodeAssetId : Text;
    accountName : Text;
    accountNumber : Text;
    ifscCode : Text;
    bankName : Text;
    upiId : Text;
    updatedAt : Int;
  };

  // ── kundali-graha ──
  type GrahaRemedyData = {
    graha : Text;
    role : Text;
    strongGives : [Text];
    weakCauses : [Text];
    remedies : [Text];
    avoidList : [Text];
    mantraSanskrit : Text;
    mantraCount : Nat;
    daan : Text;
    gemstone : Text;
    gemstoneWarning : Text;
  };
  type TransitEvent = {
    planet : Text;
    eventType : Text;
    description : Text;
    startDate : Text;
    endDate : Text;
    remedy : Text;
    colorCode : Text;
  };
  type RemedyReminder = {
    graha : Text;
    reminderTime : Text;
    isActive : Bool;
  };

  // ── aachar-dharma ──
  type DailyDuty = {
    id : Text;
    name : Text;
    sanskritName : Text;
    category : Text;
    description : Text;
    practice : Text;
    timing : Text;
    linkedExplanationId : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type DharmaPillar = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    practice : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type YugCycle = {
    id : Text;
    name : Text;
    sanskritName : Text;
    durationYears : Nat;
    characteristics : Text;
    dharmaQuarter : Nat;
    description : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type RitualExplanation = {
    id : Text;
    title : Text;
    ritualName : Text;
    explanation : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
    relatedDutyIds : [Text];
  };

  // ── saadhna-practices ──
  type SiddhiCategory = {
    #siddhi;
    #nidhi;
    #kala;
    #mahavidya;
  };
  type SiddhiEntry = {
    id : Text;
    name : Text;
    sanskritName : Text;
    category : SiddhiCategory;
    description : Text;
    significance : Text;
    guruDisclaimer : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type PitruRite = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    procedure : Text;
    timing : Text;
    offerings : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type Sampradaya = {
    id : Text;
    name : Text;
    sanskritName : Text;
    founder : Text;
    philosophy : Text;
    lineage : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type DikshaVidhi = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    mantra : Text;
    prerequisites : [Text];
    procedure : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type KarmaType = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    practice : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type MaunaPractice = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    duration : Text;
    benefits : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type ShauchaPractice = {
    id : Text;
    name : Text;
    sanskritName : Text;
    kind : Text;
    description : Text;
    practice : Text;
    benefits : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type MokshaTeaching = {
    id : Text;
    chapter : Nat;
    verse : Text;
    sanskritDevanagari : Text;
    sanskritTransliteration : Text;
    simpleMeaning : Text;
    commentary : Text;
    sourceGranth : Text;
    sourceChapter : Nat;
    sourceVerse : Text;
  };
  type DharmaBodhStep = {
    id : Text;
    stepNumber : Nat;
    title : Text;
    sanskritName : Text;
    question : Text;
    guidance : Text;
    practice : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type DevlokStage = {
    id : Text;
    stageNumber : Nat;
    name : Text;
    sanskritName : Text;
    description : Text;
    significance : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ── life-journey ──
  type PregnancyWeek = {
    weekNumber : Nat;
    trimester : Nat;
    title : Text;
    development : Text;
    saadhna : Text;
    mantra : Text;
    garbhaSanskarTip : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type Sanskaar = {
    id : Text;
    sanskaarNumber : Nat;
    name : Text;
    sanskritName : Text;
    description : Text;
    timing : Text;
    procedure : [Text];
    mantra : Text;
    significance : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type LastRiteStep = {
    id : Text;
    stepNumber : Nat;
    title : Text;
    sanskritName : Text;
    description : Text;
    procedure : Text;
    mantra : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
  type WorshipStep = {
    id : Text;
    stepNumber : Nat;
    name : Text;
    sanskritName : Text;
    description : Text;
    procedure : Text;
    mantra : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ── bhavishya ──
  type TarotCard = {
    id : Text;
    name : Text;
    arcana : Text;
    suit : Text;
    number : Nat;
    uprightMeaning : Text;
    reversedMeaning : Text;
    symbolism : Text;
    imagery : Text;
  };
  type TarotDraw = {
    cardId : Text;
    position : Nat;
    positionName : Text;
    isReversed : Bool;
  };
  type TarotReading = {
    id : Text;
    principalId : Text;
    spreadType : Text;
    question : Text;
    draws : [TarotDraw];
    interpretation : Text;
    guidance : Text;
    readAt : Int;
  };

  // ─── OldActor: previously deployed stable shape (21 fields) ────────────────
  // Matches the `.old` baseline. The gallery image `asset : Blob` shape was
  // already deployed, so no gallery transformation is needed.
  public type OldActor = {
    chapters        : Map.Map<Nat, Chapter>;
    verses          : Map.Map<(Nat, Nat), Verse>;
    guidanceMap     : Map.Map<Text, GuidanceResult>;
    mantras         : Map.Map<Text, OldMantraEntry>;
    festivals       : Map.Map<Text, OldFestival>;
    challenges      : Map.Map<Text, DailyChallenge>;
    journal         : Map.Map<Text, JournalEntry>;
    heatmap         : Map.Map<Text, HeatmapEntry>;
    commentaries    : Map.Map<Text, VerseCommentary>;
    sessions        : List.List<ConcentrationSession>;
    circleMessages  : Map.Map<Text, List.List<SatsangMessage>>;
    profiles        : Map.Map<Principal, UserProfile>;
    kundlis         : Map.Map<Principal, KundliData>;
    subscribers     : Map.Map<Text, EmailSubscriber>;
    adminConfig     : { var value : AdminConfig };
    galleryImages   : List.List<GalleryImageMeta>;
    nextImageId     : { var value : Nat };
    donationInfo    : { var value : ?DonationInfo };
    grahaRemedies   : Map.Map<Text, GrahaRemedyData>;
    transitEvents   : List.List<TransitEvent>;
    remedyReminders : Map.Map<Text, RemedyReminder>;
  };

  // ─── NewActor: expanded stable shape (48 fields) ───────────────────────────
  // All 21 original fields plus 28 new domain-collection fields. Field
  // mutability matches the actor body (`let` bindings → non-`var` fields;
  // the three `{ var value : ... }` wrapper records keep their inner `var`).
  public type NewActor = {
    chapters        : Map.Map<Nat, Chapter>;
    verses          : Map.Map<(Nat, Nat), Verse>;
    guidanceMap     : Map.Map<Text, GuidanceResult>;
    mantras         : Map.Map<Text, NewMantraEntry>;
    festivals       : Map.Map<Text, NewFestival>;
    challenges      : Map.Map<Text, DailyChallenge>;
    journal         : Map.Map<Text, JournalEntry>;
    heatmap         : Map.Map<Text, HeatmapEntry>;
    commentaries    : Map.Map<Text, VerseCommentary>;
    sessions        : List.List<ConcentrationSession>;
    circleMessages  : Map.Map<Text, List.List<SatsangMessage>>;
    profiles        : Map.Map<Principal, UserProfile>;
    kundlis         : Map.Map<Principal, KundliData>;
    subscribers     : Map.Map<Text, EmailSubscriber>;
    adminConfig     : { var value : AdminConfig };
    galleryImages   : List.List<GalleryImageMeta>;
    nextImageId     : { var value : Nat };
    donationInfo    : { var value : ?DonationInfo };
    grahaRemedies   : Map.Map<Text, GrahaRemedyData>;
    transitEvents   : List.List<TransitEvent>;
    remedyReminders : Map.Map<Text, RemedyReminder>;
    // ─── Digital Library (Pustakaalaye) ──────────────────────────────────────
    granths         : Map.Map<Text, Granth>;
    granthChapters  : Map.Map<(Text, Nat), GranthChapter>;
    granthVerses    : Map.Map<(Text, Nat, Nat), GranthVerse>;
    // ─── Satsang: circles metadata, quizzes, leaderboard, pledges, punya ────
    satsangCircles  : Map.Map<Text, SatsangCircle>;
    quizzes         : Map.Map<Text, QuizQuestion>;
    leaderboard     : List.List<LeaderboardEntry>;
    pledges         : Map.Map<Text, NaamPledge>;
    punyaProfiles   : Map.Map<Text, PunyaProfile>;
    // ─── Aachar Saadhna + Dharma ────────────────────────────────────────────
    dailyDuties       : Map.Map<Text, DailyDuty>;
    ritualExplanations : Map.Map<Text, RitualExplanation>;
    dharmaPillars     : Map.Map<Text, DharmaPillar>;
    yugCycles         : Map.Map<Text, YugCycle>;
    // ─── Saadhna Practices ──────────────────────────────────────────────────
    siddhiEntries     : Map.Map<Text, SiddhiEntry>;
    pitruRites        : Map.Map<Text, PitruRite>;
    sampradayas       : Map.Map<Text, Sampradaya>;
    dikshaVidhis      : Map.Map<Text, DikshaVidhi>;
    karmaTypes        : Map.Map<Text, KarmaType>;
    maunaPractices    : Map.Map<Text, MaunaPractice>;
    shauchaPractices  : Map.Map<Text, ShauchaPractice>;
    mokshaTeachings   : Map.Map<Text, MokshaTeaching>;
    dharmaBodhSteps   : Map.Map<Text, DharmaBodhStep>;
    devlokStages      : Map.Map<Text, DevlokStage>;
    // ─── Life Journey ───────────────────────────────────────────────────────
    pregnancyWeeks : Map.Map<Nat, PregnancyWeek>;
    sanskaars      : Map.Map<Text, Sanskaar>;
    lastRiteSteps  : Map.Map<Text, LastRiteStep>;
    worshipSteps   : Map.Map<Text, WorshipStep>;
    // ─── Bhavishya (Tarot) ─────────────────────────────────────────────────
    tarotCards    : Map.Map<Text, TarotCard>;
    tarotReadings : Map.Map<Text, TarotReading>;
  };

  // ─── Migration: preserve 21 original fields, initialize 28 new to empty ──
  // Festivals and mantras are rebuilt field-by-field because their shapes
  // changed: festivals gained source-citation/story fields, and mantras'
  // `category` field changed from free-form Text to the MantraCategory
  // variant. Old Text categories are mapped to #general when unrecognized.
  public func migration(old : OldActor) : NewActor {
    let newFestivals = Map.empty<Text, NewFestival>();
    for ((key, f) in old.festivals.entries()) {
      newFestivals.add(key, {
        name = f.name;
        dateStr = f.dateStr;
        meaning = f.meaning;
        mantraName = f.mantraName;
        recommendedVerse = f.recommendedVerse;
        story = "";
        sourceGranth = "";
        sourceVerse = "";
        sourceChapter = "";
      });
    };
    let newMantras = Map.empty<Text, NewMantraEntry>();
    for ((key, m) in old.mantras.entries()) {
      let cat : MantraCategory = switch (m.category) {
        case "mahamantra" #mahamantra;
        case "sharanam" #sharanam;
        case "protection" #protection;
        case "general" #general;
        case _ #general;
      };
      newMantras.add(key, {
        id = m.id;
        name = m.name;
        category = cat;
        meaning = m.meaning;
        benefit = m.benefit;
        text = m.text;
        recommendedCount = 0;
      });
    };
    {
      chapters        = old.chapters;
      verses          = old.verses;
      guidanceMap     = old.guidanceMap;
      mantras         = newMantras;
      festivals       = newFestivals;
      challenges      = old.challenges;
      journal         = old.journal;
      heatmap         = old.heatmap;
      commentaries    = old.commentaries;
      sessions        = old.sessions;
      circleMessages  = old.circleMessages;
      profiles        = old.profiles;
      kundlis         = old.kundlis;
      subscribers     = old.subscribers;
      adminConfig     = old.adminConfig;
      galleryImages   = old.galleryImages;
      nextImageId     = old.nextImageId;
      donationInfo    = old.donationInfo;
      grahaRemedies   = old.grahaRemedies;
      transitEvents   = old.transitEvents;
      remedyReminders = old.remedyReminders;
      // ─── New domain collections: initialized empty ───────────────────────
      granths         = Map.empty();
      granthChapters  = Map.empty();
      granthVerses    = Map.empty();
      satsangCircles  = Map.empty();
      quizzes         = Map.empty();
      leaderboard     = List.empty();
      pledges         = Map.empty();
      punyaProfiles   = Map.empty();
      dailyDuties       = Map.empty();
      ritualExplanations = Map.empty();
      dharmaPillars     = Map.empty();
      yugCycles         = Map.empty();
      siddhiEntries     = Map.empty();
      pitruRites        = Map.empty();
      sampradayas       = Map.empty();
      dikshaVidhis      = Map.empty();
      karmaTypes        = Map.empty();
      maunaPractices    = Map.empty();
      shauchaPractices  = Map.empty();
      mokshaTeachings   = Map.empty();
      dharmaBodhSteps   = Map.empty();
      devlokStages      = Map.empty();
      pregnancyWeeks = Map.empty();
      sanskaars      = Map.empty();
      lastRiteSteps  = Map.empty();
      worshipSteps   = Map.empty();
      tarotCards    = Map.empty();
      tarotReadings = Map.empty();
    };
  };
};
