module {
  public type Chapter = {
    id : Nat;
    name : Text;
    summary : Text;
    verseCount : Nat;
  };

  public type Verse = {
    id : Nat;
    chapterId : Nat;
    verseNumber : Text;
    sanskritText : Text;
    transliteration : Text;
    englishTranslation : Text;
  };

  public type GuidanceResult = {
    chapter : Nat;
    verse : Nat;
    keyword : Text;
    guidanceText : Text;
  };

  public type MantraEntry = {
    id : Text;
    name : Text;
    category : Text;
    meaning : Text;
    benefit : Text;
    text : Text;
  };

  public type DailyChallenge = {
    date : Text;
    task : Text;
    points : Nat;
    action : Text;
  };

  public type Festival = {
    name : Text;
    dateStr : Text;
    meaning : Text;
    mantraName : Text;
    recommendedVerse : Text;
  };
};
