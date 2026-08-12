module {
  // ─── Bhavishya Gathan — Western mode (Tarot reading) ───────────────────────
  /// Vedic astrology (Jyotish) is already covered by the kundali-graha and
  /// user-profile domains. This domain adds the Western mode: tarot reading.

  /// A single tarot card definition (one of the 78 cards).
  public type TarotCard = {
    id : Text;              // e.g. "major-0-fool", "minor-cups-ace"
    name : Text;
    arcana : Text;          // "Major" | "Minor"
    suit : Text;             // "Major" | "Wands" | "Cups" | "Swords" | "Pentacles"
    number : Nat;            // 0-21 for Major; 1-14 for Minor
    uprightMeaning : Text;
    reversedMeaning : Text;
    symbolism : Text;
    imagery : Text;          // description of the card's imagery
  };

  /// A drawn card within a reading, with orientation.
  public type TarotDraw = {
    cardId : Text;
    position : Nat;          // position in the spread (1, 2, 3, ...)
    positionName : Text;     // e.g. "Past", "Present", "Future"
    isReversed : Bool;
  };

  /// A complete tarot reading for a user.
  public type TarotReading = {
    id : Text;
    principalId : Text;      // Principal.toText() of the seeker
    spreadType : Text;       // e.g. "three-card", "celtic-cross"
    question : Text;         // the question asked (may be empty for general)
    draws : [TarotDraw];
    interpretation : Text;   // synthesized interpretation
    guidance : Text;         // actionable guidance
    readAt : Int;
  };
};
