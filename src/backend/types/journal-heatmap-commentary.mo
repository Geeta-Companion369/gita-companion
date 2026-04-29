module {
  public type JournalEntry = {
    id : Text;
    verseId : Text;
    text : Text;
    mood : Text;
    createdAt : Int;
    updatedAt : Int;
    principalId : Text;
  };

  public type HeatmapEntry = {
    date : Text;
    versesRead : Nat;
    chaptersRead : Nat;
    allGoalsMet : Bool;
    principalId : Text;
  };

  public type VerseCommentary = {
    verseId : Text;
    shankaracharya : Text;
    ramanuja : Text;
    tilak : Text;
  };

  public type ConcentrationSession = {
    id : Text;
    durationMinutes : Nat;
    completedAt : Int;
    sessionType : Text;
    principalId : Text;
  };
};
