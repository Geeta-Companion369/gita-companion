import Types "../types/journal-heatmap-commentary";
import JHCLib "../lib/journal-heatmap-commentary";
import Map "mo:core/Map";
import List "mo:core/List";

mixin (
  journal : Map.Map<Text, Types.JournalEntry>,
  heatmap : Map.Map<Text, Types.HeatmapEntry>,
  commentaries : Map.Map<Text, Types.VerseCommentary>,
  sessions : List.List<Types.ConcentrationSession>,
) {
  // ─── Journal ───────────────────────────────────────────────────
  public shared ({ caller }) func createJournalEntry(
    verseId : Text,
    text : Text,
    mood : Text,
  ) : async Types.JournalEntry {
    JHCLib.createJournalEntry(journal, caller, verseId, text, mood);
  };

  public shared ({ caller }) func updateJournalEntry(
    id : Text,
    text : Text,
    mood : Text,
  ) : async ?Types.JournalEntry {
    JHCLib.updateJournalEntry(journal, caller, id, text, mood);
  };

  public shared ({ caller }) func deleteJournalEntry(id : Text) : async Bool {
    JHCLib.deleteJournalEntry(journal, caller, id);
  };

  public shared query ({ caller }) func getJournalEntries() : async [Types.JournalEntry] {
    JHCLib.getJournalEntries(journal, caller);
  };

  public shared query ({ caller }) func searchJournalEntries(searchText : Text) : async [Types.JournalEntry] {
    JHCLib.searchJournalEntries(journal, caller, searchText);
  };

  // ─── Heatmap ──────────────────────────────────────────────────
  public shared ({ caller }) func recordDailyReading(
    date : Text,
    versesRead : Nat,
    chaptersRead : Nat,
    allGoalsMet : Bool,
  ) : async Types.HeatmapEntry {
    JHCLib.recordDailyReading(heatmap, caller, date, versesRead, chaptersRead, allGoalsMet);
  };

  public shared query ({ caller }) func getHeatmapData(days : Nat) : async [Types.HeatmapEntry] {
    JHCLib.getHeatmapData(heatmap, caller, days);
  };

  public shared query ({ caller }) func getReadingStreak() : async Nat {
    JHCLib.getReadingStreak(heatmap, caller);
  };

  // ─── Commentaries ────────────────────────────────────────────
  public query func getVerseCommentary(verseId : Text) : async ?Types.VerseCommentary {
    JHCLib.getVerseCommentary(commentaries, verseId);
  };

  // ─── Concentration Sessions ──────────────────────────────────
  public shared ({ caller }) func recordConcentrationSession(
    durationMinutes : Nat,
    sessionType : Text,
  ) : async Types.ConcentrationSession {
    JHCLib.recordConcentrationSession(sessions, caller, durationMinutes, sessionType);
  };

  public shared query ({ caller }) func getConcentrationHistory(limit : Nat) : async [Types.ConcentrationSession] {
    JHCLib.getConcentrationHistory(sessions, caller, limit);
  };
};
