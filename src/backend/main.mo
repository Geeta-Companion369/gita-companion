import Types "types/gita";
import JHCTypes "types/journal-heatmap-commentary";
import SatsangTypes "types/satsang-chat";
import GitaLib "lib/gita";
import JHCLib "lib/journal-heatmap-commentary";
import SatsangLib "lib/satsang-chat";
import GitaMixin "mixins/gita-api";
import JHCMixin "mixins/journal-heatmap-commentary-api";
import SatsangMixin "mixins/satsang-chat-api";
import Map "mo:core/Map";
import List "mo:core/List";

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

  // ─── Mixins ─────────────────────────────────────────────────────
  include GitaMixin(chapters, verses, guidanceMap, mantras, festivals, challenges);
  include JHCMixin(journal, heatmap, commentaries, sessions);
  include SatsangMixin(circleMessages);
};
