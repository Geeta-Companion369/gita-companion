import Types "../types/gita";
import GitaLib "../lib/gita";
import Map "mo:core/Map";

mixin (
  chapters : Map.Map<Nat, Types.Chapter>,
  verses : Map.Map<(Nat, Nat), Types.Verse>,
  guidanceMap : Map.Map<Text, Types.GuidanceResult>,
  mantras : Map.Map<Text, Types.MantraEntry>,
  festivals : Map.Map<Text, Types.Festival>,
  challenges : Map.Map<Text, Types.DailyChallenge>,
) {
  public query func listChapters() : async [Types.Chapter] {
    GitaLib.listChapters(chapters);
  };

  public query func getChapter(chapterId : Nat) : async ?Types.Chapter {
    GitaLib.getChapter(chapters, chapterId);
  };

  public query func getVerse(chapterId : Nat, verseId : Nat) : async ?Types.Verse {
    GitaLib.getVerse(verses, chapterId, verseId);
  };

  public query func listVerses(chapterId : Nat) : async [Types.Verse] {
    GitaLib.listVerses(verses, chapterId);
  };

  public query func getKrishnaGuidance(keyword : Text) : async ?Types.GuidanceResult {
    GitaLib.getKrishnaGuidance(guidanceMap, keyword);
  };

  public query func getMantras() : async [Types.MantraEntry] {
    GitaLib.getMantras(mantras);
  };

  public query func getFestivals() : async [Types.Festival] {
    GitaLib.getFestivals(festivals);
  };

  public query func getDailyChallenge(dateKey : Text) : async ?Types.DailyChallenge {
    GitaLib.getDailyChallenge(challenges, dateKey);
  };

  public query func getGuidanceByCategory(category : Text) : async ?Types.GuidanceResult {
    GitaLib.getGuidanceByCategory(guidanceMap, category);
  };
};
