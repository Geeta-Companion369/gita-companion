module {
  // ─── Satsang Message (expanded) ─────────────────────────────────────────────
  public type SatsangMessage = {
    circleId : Text;
    authorName : Text;
    message : Text;
    timestamp : Int;
  };

  // ─── 18 Chat Circles ────────────────────────────────────────────────────────
  /// Metadata for one of the 18 satsang chat circles.
  public type SatsangCircle = {
    id : Text;          // canonical circle id, e.g. "Gita Lovers"
    name : Text;        // display name
    description : Text; // one-line purpose of the circle
    memberCount : Nat;  // approximate / declared member count
    iconGlyph : Text;   // Devanagari / Sanskrit glyph for the circle
  };

  // ─── Daily Quiz ──────────────────────────────────────────────────────────────
  /// A single quiz question. A new quiz is published every day.
  public type QuizQuestion = {
    id : Text;          // quiz id, e.g. "quiz-2026-08-06"
    date : Text;        // YYYY-MM-DD
    question : Text;
    options : [Text];   // 4 options
    correctIndex : Nat; // index into options (0-3)
    explanation : Text; // why the answer is correct, with source citation
    sourceGranth : Text;
    sourceVerse : Text;
    points : Nat;       // points awarded for a correct answer
  };

  // ─── Donation Leaderboard ───────────────────────────────────────────────────
  /// One row of the donation leaderboard.
  public type LeaderboardEntry = {
    rank : Nat;
    donorName : Text;
    donorPrincipal : Text;  // Principal.toText() — kept as Text for Candid
    totalDonation : Nat;    // amount in smallest unit (e.g. paise)
    donationCount : Nat;
    lastDonationAt : Int;
  };

  // ─── Naam Pledge Counter ────────────────────────────────────────────────────
  /// A user's pledge to chant a certain number of naam (e.g. 108 Sharanam daily).
  public type NaamPledge = {
    principalId : Text;     // Principal.toText()
    displayName : Text;
    mantraName : Text;      // e.g. "Om Namo Narayanaya"
    pledgedCount : Nat;     // total count pledged
    completedCount : Nat;   // count completed so far
    pledgedAt : Int;
    lastUpdatedAt : Int;
    isActive : Bool;
  };

  // ─── Points / Badges / Streaks (absorbed Punya Path) ────────────────────────
  /// A user's accumulated points, badges, and streaks across all saadhna paths.
  public type PunyaProfile = {
    principalId : Text;
    totalPoints : Nat;
    currentStreakDays : Nat;
    longestStreakDays : Nat;
    badges : [Badge];
    lastActivityAt : Int;
  };

  /// A badge earned by a user.
  public type Badge = {
    id : Text;          // e.g. "first-japa", "streak-7"
    name : Text;
    description : Text;
    iconGlyph : Text;   // Devanagari / Sanskrit glyph
    earnedAt : Int;
  };
};
