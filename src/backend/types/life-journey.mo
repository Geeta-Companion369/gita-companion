module {
  // ─── Garbha Sanskar (280-day week-by-week) ──────────────────────────────────
  /// One week of the 280-day (40-week) Garbha Sanskar journey.
  public type PregnancyWeek = {
    weekNumber : Nat;       // 1-40
    trimester : Nat;        // 1, 2, or 3
    title : Text;
    development : Text;     // what is developing in the baby this week
    saadhna : Text;         // recommended saadhna for the mother
    mantra : Text;          // mantra to chant this week
    garbhaSanskarTip : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── 16 Sanskaaram (16 rites of passage) ───────────────────────────────────
  public type Sanskaar = {
    id : Text;              // e.g. "garbhadhana", "namakarana", "upanayana", "vivaha", "antyeshti"
    sanskaarNumber : Nat;   // 1-16
    name : Text;
    sanskritName : Text;
    description : Text;
    timing : Text;          // when this sanskaar is performed
    procedure : [Text];     // steps of the rite
    mantra : Text;          // key mantra for this sanskaar
    significance : Text;    // spiritual significance
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Antim Yatra (last rites procedure) ────────────────────────────────────
  public type LastRiteStep = {
    id : Text;
    stepNumber : Nat;
    title : Text;
    sanskritName : Text;
    description : Text;
    procedure : Text;       // what to do at this step
    mantra : Text;          // mantra to recite
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Shodashopachara (16-step worship with mantras) ────────────────────────
  public type WorshipStep = {
    id : Text;
    stepNumber : Nat;       // 1-16
    name : Text;
    sanskritName : Text;
    description : Text;
    procedure : Text;       // how to perform this upachara
    mantra : Text;          // mantra for this step
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
};
