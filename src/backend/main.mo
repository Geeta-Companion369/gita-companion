import Types "types/gita";
import JHCTypes "types/journal-heatmap-commentary";
import SatsangTypes "types/satsang-chat";
import UPTypes "types/user-profile";
import MediaTypes "types/media";
import KGTypes "types/kundali-graha";
import AacharTypes "types/aachar-dharma";
import SaadhnaTypes "types/saadhna-practices";
import LifeJourneyTypes "types/life-journey";
import BhavishyaTypes "types/bhavishya";
import GitaLib "lib/gita";
import JHCLib "lib/journal-heatmap-commentary";
import SatsangLib "lib/satsang-chat";
import KGLib "lib/kundali-graha";
import AacharLib "lib/aachar-dharma";
import SaadhnaLib "lib/saadhna-practices";
import LifeJourneyLib "lib/life-journey";
import BhavishyaLib "lib/bhavishya";
import GitaMixin "mixins/gita-api";
import JHCMixin "mixins/journal-heatmap-commentary-api";
import SatsangMixin "mixins/satsang-chat-api";
import UserProfileMixin "mixins/user-profile-api";
import MediaMixin "mixins/media-api";
import KGMixin "mixins/kundali-graha-api";
import AacharMixin "mixins/aachar-dharma-api";
import SaadhnaMixin "mixins/saadhna-practices-api";
import LifeJourneyMixin "mixins/life-journey-api";
import BhavishyaMixin "mixins/bhavishya-api";
import Map "mo:core/Map";
import List "mo:core/List";
import Expose "mo:caffeineai-oql/Expose";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";

actor {
  // ─── Gita reference data ────────────────────────────────────────
  let chapters : Map.Map<Nat, Types.Chapter>;
  let verses : Map.Map<(Nat, Nat), Types.Verse>;
  let guidanceMap : Map.Map<Text, Types.GuidanceResult>;
  let mantras : Map.Map<Text, Types.MantraEntry>;
  let festivals : Map.Map<Text, Types.Festival>;
  let challenges : Map.Map<Text, Types.DailyChallenge>;

  GitaLib.initChapters(chapters);
  GitaLib.initVerses(verses);
  GitaLib.initGuidanceMap(guidanceMap);
  GitaLib.initMantras(mantras);
  GitaLib.initFestivals(festivals);
  GitaLib.initDailyChallenges(challenges);

  // ─── Digital Library (Pustakaalaye) — Granth data ───────────────
  let granths : Map.Map<Text, Types.Granth>;
  let granthChapters : Map.Map<(Text, Nat), Types.GranthChapter>;
  let granthVerses : Map.Map<(Text, Nat, Nat), Types.GranthVerse>;

  GitaLib.initGranths(granths);
  GitaLib.initGranthChapters(granthChapters);
  GitaLib.initGranthVerses(granthVerses);

  // ─── Journal, heatmap, commentary, sessions state ───────────────
  let journal : Map.Map<Text, JHCTypes.JournalEntry>;
  let heatmap : Map.Map<Text, JHCTypes.HeatmapEntry>;
  let commentaries : Map.Map<Text, JHCTypes.VerseCommentary>;
  let sessions : List.List<JHCTypes.ConcentrationSession>;

  JHCLib.initCommentaries(commentaries);

  // ─── Satsang circle chat state ──────────────────────────────────
  let circleMessages : Map.Map<Text, List.List<SatsangTypes.SatsangMessage>>;
  let satsangCircles : Map.Map<Text, SatsangTypes.SatsangCircle>;
  let quizzes : Map.Map<Text, SatsangTypes.QuizQuestion>;
  let leaderboard : List.List<SatsangTypes.LeaderboardEntry>;
  let pledges : Map.Map<Text, SatsangTypes.NaamPledge>;
  let punyaProfiles : Map.Map<Text, SatsangTypes.PunyaProfile>;

  SatsangLib.initCircles(circleMessages);
  SatsangLib.initSatsangCircles(satsangCircles);
  SatsangLib.initQuizzes(quizzes);

  // ─── User Profile, Kundli, Newsletter state ─────────────────────
  let profiles    : Map.Map<Principal, UPTypes.UserProfile>;
  let kundlis     : Map.Map<Principal, UPTypes.KundliData>;
  let subscribers : Map.Map<Text, UPTypes.EmailSubscriber>;
  let adminConfig : { var value : UPTypes.AdminConfig };

  // ─── Media: Gallery + Donation QR ───────────────────────────────
  let galleryImages : List.List<MediaTypes.GalleryImageMeta>;
  let nextImageId   : { var value : Nat };
  let donationInfo  : { var value : ?MediaTypes.DonationInfo };

  // ─── Kundali Lite + Graha Remedies ──────────────────────────────
  let grahaRemedies   : Map.Map<Text, KGTypes.GrahaRemedyData>;
  let transitEvents   : List.List<KGTypes.TransitEvent>;
  let remedyReminders : Map.Map<Text, KGTypes.RemedyReminder>;

  KGLib.initGrahaRemedies(grahaRemedies);
  KGLib.initTransitEvents(transitEvents);

  // ─── Aachar Saadhna + Dharma ────────────────────────────────────
  let dailyDuties       : Map.Map<Text, AacharTypes.DailyDuty>;
  let ritualExplanations : Map.Map<Text, AacharTypes.RitualExplanation>;
  let dharmaPillars     : Map.Map<Text, AacharTypes.DharmaPillar>;
  let yugCycles         : Map.Map<Text, AacharTypes.YugCycle>;

  AacharLib.initDailyDuties(dailyDuties);
  AacharLib.initRitualExplanations(ritualExplanations);
  AacharLib.initDharmaPillars(dharmaPillars);
  AacharLib.initYugCycles(yugCycles);

  // ─── Saadhna Practices ──────────────────────────────────────────
  let siddhiEntries    : Map.Map<Text, SaadhnaTypes.SiddhiEntry>;
  let pitruRites       : Map.Map<Text, SaadhnaTypes.PitruRite>;
  let sampradayas      : Map.Map<Text, SaadhnaTypes.Sampradaya>;
  let dikshaVidhis     : Map.Map<Text, SaadhnaTypes.DikshaVidhi>;
  let karmaTypes       : Map.Map<Text, SaadhnaTypes.KarmaType>;
  let maunaPractices   : Map.Map<Text, SaadhnaTypes.MaunaPractice>;
  let shauchaPractices : Map.Map<Text, SaadhnaTypes.ShauchaPractice>;
  let mokshaTeachings  : Map.Map<Text, SaadhnaTypes.MokshaTeaching>;
  let dharmaBodhSteps  : Map.Map<Text, SaadhnaTypes.DharmaBodhStep>;
  let devlokStages     : Map.Map<Text, SaadhnaTypes.DevlokStage>;

  SaadhnaLib.initSiddhiEntries(siddhiEntries);
  SaadhnaLib.initPitruRites(pitruRites);
  SaadhnaLib.initSampradayas(sampradayas);
  SaadhnaLib.initDikshaVidhis(dikshaVidhis);
  SaadhnaLib.initKarmaTypes(karmaTypes);
  SaadhnaLib.initMaunaPractices(maunaPractices);
  SaadhnaLib.initShauchaPractices(shauchaPractices);
  SaadhnaLib.initMokshaTeachings(mokshaTeachings);
  SaadhnaLib.initDharmaBodhSteps(dharmaBodhSteps);
  SaadhnaLib.initDevlokStages(devlokStages);

  // ─── Life Journey ───────────────────────────────────────────────
  let pregnancyWeeks : Map.Map<Nat, LifeJourneyTypes.PregnancyWeek>;
  let sanskaars      : Map.Map<Text, LifeJourneyTypes.Sanskaar>;
  let lastRiteSteps   : Map.Map<Text, LifeJourneyTypes.LastRiteStep>;
  let worshipSteps   : Map.Map<Text, LifeJourneyTypes.WorshipStep>;

  LifeJourneyLib.initPregnancyWeeks(pregnancyWeeks);
  LifeJourneyLib.initSanskaars(sanskaars);
  LifeJourneyLib.initLastRiteSteps(lastRiteSteps);
  LifeJourneyLib.initWorshipSteps(worshipSteps);

  // ─── Bhavishya (Tarot) ──────────────────────────────────────────
  let tarotCards    : Map.Map<Text, BhavishyaTypes.TarotCard>;
  let tarotReadings : Map.Map<Text, BhavishyaTypes.TarotReading>;

  BhavishyaLib.initTarotCards(tarotCards);

  // ─── Mixins ─────────────────────────────────────────────────────
  include GitaMixin(chapters, verses, guidanceMap, mantras, festivals, challenges, granths, granthChapters, granthVerses);
  include JHCMixin(journal, heatmap, commentaries, sessions);
  include SatsangMixin(circleMessages, satsangCircles, quizzes, leaderboard, pledges, punyaProfiles);
  include UserProfileMixin(profiles, kundlis, subscribers, adminConfig);
  include MediaMixin(galleryImages, nextImageId, donationInfo);
  include KGMixin(grahaRemedies, transitEvents, remedyReminders);
  include AacharMixin(dailyDuties, ritualExplanations, dharmaPillars, yugCycles);
  include SaadhnaMixin(siddhiEntries, pitruRites, sampradayas, dikshaVidhis, karmaTypes, maunaPractices, shauchaPractices, mokshaTeachings, dharmaBodhSteps, devlokStages);
  include LifeJourneyMixin(pregnancyWeeks, sanskaars, lastRiteSteps, worshipSteps);
  include BhavishyaMixin(tarotCards, tarotReadings);

  // ─── Object Storage ─────────────────────────────────────────────
  // Registers the uploadFile/downloadFile callback surface so that
  // ExternalBlob fields (e.g. gallery image `asset`) round-trip through
  // durable object storage and survive page reloads.
  include MixinObjectStorage();

  // ─── OQL (Data Intelligence) ─────────────────────────────────────
  // Exposes persisted collections as queryable entities for the
  // Caffeine Data Intelligence agent. Adds schema() and execute() query
  // methods to the canister's public interface without touching existing
  // business logic, endpoints, or types.
  //
  // Entity declarations are intentionally empty for now: the prior
  // builder-based declarations did not compile (M0230 implicit `_toRow`
  // and M0072 `public_` field errors). OQL queries can be re-added later
  // once the entity builder API is reconciled with the stored types.
  include Expose({
    entities = [];
  });
};
