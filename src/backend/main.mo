import Types "types/gita";
import JHCTypes "types/journal-heatmap-commentary";
import SatsangTypes "types/satsang-chat";
import UPTypes "types/user-profile";
import MediaTypes "types/media";
import KGTypes "types/kundali-graha";
import GitaLib "lib/gita";
import JHCLib "lib/journal-heatmap-commentary";
import SatsangLib "lib/satsang-chat";
import KGLib "lib/kundali-graha";
import GitaMixin "mixins/gita-api";
import JHCMixin "mixins/journal-heatmap-commentary-api";
import SatsangMixin "mixins/satsang-chat-api";
import UserProfileMixin "mixins/user-profile-api";
import MediaMixin "mixins/media-api";
import KGMixin "mixins/kundali-graha-api";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

actor {
  // ─── Gita reference data ────────────────────────────────────────
  let chapters = Map.empty<Nat, Types.Chapter>();
  let verses = Map.empty<(Nat, Nat), Types.Verse>();
  let guidanceMap = Map.empty<Text, Types.GuidanceResult>();
  let mantras = Map.empty<Text, Types.MantraEntry>();
  let festivals = Map.empty<Text, Types.Festival>();
  let challenges = Map.empty<Text, Types.DailyChallenge>();

  GitaLib.initChapters(chapters);
  GitaLib.initVerses(verses);
  GitaLib.initGuidanceMap(guidanceMap);
  GitaLib.initMantras(mantras);
  GitaLib.initFestivals(festivals);
  GitaLib.initDailyChallenges(challenges);

  // ─── Journal, heatmap, commentary, sessions state ───────────────
  let journal = Map.empty<Text, JHCTypes.JournalEntry>();
  let heatmap = Map.empty<Text, JHCTypes.HeatmapEntry>();
  let commentaries = Map.empty<Text, JHCTypes.VerseCommentary>();
  let sessions = List.empty<JHCTypes.ConcentrationSession>();

  JHCLib.initCommentaries(commentaries);

  // ─── Satsang circle chat state ──────────────────────────────────
  let circleMessages = Map.empty<Text, List.List<SatsangTypes.SatsangMessage>>();

  SatsangLib.initCircles(circleMessages);

  // ─── User Profile, Kundli, Newsletter state ─────────────────────
  let profiles    = Map.empty<Principal, UPTypes.UserProfile>();
  let kundlis     = Map.empty<Principal, UPTypes.KundliData>();
  let subscribers = Map.empty<Text, UPTypes.EmailSubscriber>();
  let adminConfig = {
    var value : UPTypes.AdminConfig = {
      senderEmail       = "";
      senderName        = "Gita Companion";
      newsletterEnabled = false;
      appVersion        = "1.0.0";
    };
  };

  // ─── Media: Gallery + Donation QR ───────────────────────────────
  let galleryImages = List.empty<MediaTypes.GalleryImageMeta>();
  let nextImageId   = { var value : Nat = 0 };
  let donationInfo  = { var value : ?MediaTypes.DonationInfo = null };

  // ─── Kundali Lite + Graha Remedies ──────────────────────────────
  let grahaRemedies   = Map.empty<Text, KGTypes.GrahaRemedyData>();
  let transitEvents   = List.empty<KGTypes.TransitEvent>();
  let remedyReminders = Map.empty<Text, KGTypes.RemedyReminder>();

  KGLib.initGrahaRemedies(grahaRemedies);
  KGLib.initTransitEvents(transitEvents);

  // ─── Mixins ─────────────────────────────────────────────────────
  include GitaMixin(chapters, verses, guidanceMap, mantras, festivals, challenges);
  include JHCMixin(journal, heatmap, commentaries, sessions);
  include SatsangMixin(circleMessages);
  include UserProfileMixin(profiles, kundlis, subscribers, adminConfig);
  include MediaMixin(galleryImages, nextImageId, donationInfo);
  include KGMixin(grahaRemedies, transitEvents, remedyReminders);
};
