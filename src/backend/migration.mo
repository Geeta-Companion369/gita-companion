// Migration from the previous actor shape (gallery image `assetId : Text`)
// to the new shape (gallery image `asset : Storage.ExternalBlob = Blob`).
//
// The old `assetId` was a transient blob: URL that did not survive page
// reloads — that was the bug being fixed. Old gallery entries are mapped
// to an empty Blob so the stable signature becomes compatible; those
// legacy images were already broken and new uploads going forward use
// proper ExternalBlob storage that round-trips through durable object
// storage.
import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";

import GitaTypes "types/gita";
import JHCTypes "types/journal-heatmap-commentary";
import SatsangTypes "types/satsang-chat";
import UPTypes "types/user-profile";
import MediaTypes "types/media";
import KGTypes "types/kundali-graha";
import AacharTypes "types/aachar-dharma";
import SaadhnaTypes "types/saadhna-practices";
import LifeJourneyTypes "types/life-journey";
import BhavishyaTypes "types/bhavishya";

module {
  // ─── Old types (inline, copied from .old/src/backend/types/media.mo) ───────
  // Only the gallery image meta changed shape; define its old form inline.
  public type OldGalleryImageMeta = {
    id          : Nat;
    assetId     : Text;          // old: transient blob: URL (broken across reloads)
    uploader    : Principal;
    category    : Text;
    caption     : Text;
    isApproved  : Bool;
    uploadedAt  : Int;
  };

  // ─── Old / New actor stable signatures ─────────────────────────────────────
  // Fields that did not change shape are typed with the (new) imported types,
  // which are stable-compatible with the previously deployed signatures.
  public type OldActor = {
    chapters        : Map.Map<Nat, GitaTypes.Chapter>;
    verses          : Map.Map<(Nat, Nat), GitaTypes.Verse>;
    guidanceMap     : Map.Map<Text, GitaTypes.GuidanceResult>;
    mantras         : Map.Map<Text, GitaTypes.MantraEntry>;
    festivals       : Map.Map<Text, GitaTypes.Festival>;
    challenges      : Map.Map<Text, GitaTypes.DailyChallenge>;
    journal         : Map.Map<Text, JHCTypes.JournalEntry>;
    heatmap         : Map.Map<Text, JHCTypes.HeatmapEntry>;
    commentaries    : Map.Map<Text, JHCTypes.VerseCommentary>;
    sessions        : List.List<JHCTypes.ConcentrationSession>;
    circleMessages  : Map.Map<Text, List.List<SatsangTypes.SatsangMessage>>;
    profiles        : Map.Map<Principal, UPTypes.UserProfile>;
    kundlis         : Map.Map<Principal, UPTypes.KundliData>;
    subscribers     : Map.Map<Text, UPTypes.EmailSubscriber>;
    adminConfig     : { var value : UPTypes.AdminConfig };
    galleryImages   : List.List<OldGalleryImageMeta>;   // old shape
    nextImageId     : { var value : Nat };
    donationInfo    : { var value : ?MediaTypes.DonationInfo };
    grahaRemedies   : Map.Map<Text, KGTypes.GrahaRemedyData>;
    transitEvents   : List.List<KGTypes.TransitEvent>;
    remedyReminders : Map.Map<Text, KGTypes.RemedyReminder>;
  };

  public type NewActor = {
    chapters        : Map.Map<Nat, GitaTypes.Chapter>;
    verses          : Map.Map<(Nat, Nat), GitaTypes.Verse>;
    guidanceMap     : Map.Map<Text, GitaTypes.GuidanceResult>;
    mantras         : Map.Map<Text, GitaTypes.MantraEntry>;
    festivals       : Map.Map<Text, GitaTypes.Festival>;
    challenges      : Map.Map<Text, GitaTypes.DailyChallenge>;
    journal         : Map.Map<Text, JHCTypes.JournalEntry>;
    heatmap         : Map.Map<Text, JHCTypes.HeatmapEntry>;
    commentaries    : Map.Map<Text, JHCTypes.VerseCommentary>;
    sessions        : List.List<JHCTypes.ConcentrationSession>;
    circleMessages  : Map.Map<Text, List.List<SatsangTypes.SatsangMessage>>;
    profiles        : Map.Map<Principal, UPTypes.UserProfile>;
    kundlis         : Map.Map<Principal, UPTypes.KundliData>;
    subscribers     : Map.Map<Text, UPTypes.EmailSubscriber>;
    adminConfig     : { var value : UPTypes.AdminConfig };
    galleryImages   : List.List<MediaTypes.GalleryImageMeta>;  // new shape
    nextImageId     : { var value : Nat };
    donationInfo    : { var value : ?MediaTypes.DonationInfo };
    grahaRemedies   : Map.Map<Text, KGTypes.GrahaRemedyData>;
    transitEvents   : List.List<KGTypes.TransitEvent>;
    remedyReminders : Map.Map<Text, KGTypes.RemedyReminder>;
    // ─── Digital Library (Pustakaalaye) ──────────────────────────────────────
    granths         : Map.Map<Text, GitaTypes.Granth>;
    granthChapters  : Map.Map<(Text, Nat), GitaTypes.GranthChapter>;
    granthVerses    : Map.Map<(Text, Nat, Nat), GitaTypes.GranthVerse>;
    // ─── Satsang: circles metadata, quizzes, leaderboard, pledges, punya ────
    satsangCircles  : Map.Map<Text, SatsangTypes.SatsangCircle>;
    quizzes         : Map.Map<Text, SatsangTypes.QuizQuestion>;
    leaderboard     : List.List<SatsangTypes.LeaderboardEntry>;
    pledges         : Map.Map<Text, SatsangTypes.NaamPledge>;
    punyaProfiles   : Map.Map<Text, SatsangTypes.PunyaProfile>;
    // ─── Aachar Saadhna + Dharma ────────────────────────────────────────────
    dailyDuties       : Map.Map<Text, AacharTypes.DailyDuty>;
    ritualExplanations : Map.Map<Text, AacharTypes.RitualExplanation>;
    dharmaPillars     : Map.Map<Text, AacharTypes.DharmaPillar>;
    yugCycles         : Map.Map<Text, AacharTypes.YugCycle>;
    // ─── Saadhna Practices ──────────────────────────────────────────────────
    siddhiEntries     : Map.Map<Text, SaadhnaTypes.SiddhiEntry>;
    pitruRites        : Map.Map<Text, SaadhnaTypes.PitruRite>;
    sampradayas       : Map.Map<Text, SaadhnaTypes.Sampradaya>;
    dikshaVidhis      : Map.Map<Text, SaadhnaTypes.DikshaVidhi>;
    karmaTypes        : Map.Map<Text, SaadhnaTypes.KarmaType>;
    maunaPractices    : Map.Map<Text, SaadhnaTypes.MaunaPractice>;
    shauchaPractices  : Map.Map<Text, SaadhnaTypes.ShauchaPractice>;
    mokshaTeachings   : Map.Map<Text, SaadhnaTypes.MokshaTeaching>;
    dharmaBodhSteps   : Map.Map<Text, SaadhnaTypes.DharmaBodhStep>;
    devlokStages      : Map.Map<Text, SaadhnaTypes.DevlokStage>;
    // ─── Life Journey ───────────────────────────────────────────────────────
    pregnancyWeeks : Map.Map<Nat, LifeJourneyTypes.PregnancyWeek>;
    sanskaars      : Map.Map<Text, LifeJourneyTypes.Sanskaar>;
    lastRiteSteps   : Map.Map<Text, LifeJourneyTypes.LastRiteStep>;
    worshipSteps    : Map.Map<Text, LifeJourneyTypes.WorshipStep>;
    // ─── Bhavishya (Tarot) ─────────────────────────────────────────────────
    tarotCards    : Map.Map<Text, BhavishyaTypes.TarotCard>;
    tarotReadings : Map.Map<Text, BhavishyaTypes.TarotReading>;
  };

  /// Map each old gallery image meta to the new shape.
  /// Old `assetId : Text` (transient blob: URL) → new `asset : Blob` (empty,
  /// since the old URLs were already broken). All other fields pass through.
  func migrateImage(old : OldGalleryImageMeta) : MediaTypes.GalleryImageMeta {
    {
      id          = old.id;
      asset       = Array.toBlob([]);   // empty blob; legacy images were broken
      uploader    = old.uploader;
      category    = old.category;
      caption     = old.caption;
      isApproved  = old.isApproved;
      uploadedAt  = old.uploadedAt;
    };
  };

  public func run(old : OldActor) : NewActor {
    let galleryImages = old.galleryImages.map<OldGalleryImageMeta, MediaTypes.GalleryImageMeta>(
      func(img) { migrateImage(img) }
    );

    {
      chapters        = old.chapters;
      verses          = old.verses;
      guidanceMap     = old.guidanceMap;
      mantras         = old.mantras;
      festivals       = old.festivals;
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
      galleryImages;
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
      lastRiteSteps   = Map.empty();
      worshipSteps    = Map.empty();
      tarotCards    = Map.empty();
      tarotReadings = Map.empty();
    };
  };
};
