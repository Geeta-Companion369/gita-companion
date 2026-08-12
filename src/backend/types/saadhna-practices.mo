module {
  // ─── Siddhi Saadhna (8 Siddhis, 9 Nidhis, 16 Kalas, 10 Mahavidyas) ──────────
  /// A single siddhi / nidhi / kala / mahavidya entry, with a Guru disclaimer.
  /// The Guru disclaimer is mandatory: these are taught for understanding and
  /// reverence, never to be attempted without a living Guru's guidance.
  public type SiddhiCategory = {
    #siddhi;     // 8 Siddhis
    #nidhi;      // 9 Nidhis
    #kala;       // 16 Kalas
    #mahavidya;  // 10 Mahavidyas
  };

  public type SiddhiEntry = {
    id : Text;
    name : Text;
    sanskritName : Text;
    category : SiddhiCategory;
    description : Text;
    significance : Text;
    guruDisclaimer : Text;  // mandatory warning — never attempt without Guru
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Pitru Saadhna (Tarpan, Shraddha, Amavasya) ────────────────────────────
  public type PitruRite = {
    id : Text;            // e.g. "tarpan", "shraddha", "amavasya-pitru"
    name : Text;
    sanskritName : Text;
    description : Text;
    procedure : Text;     // step-by-step procedure
    timing : Text;        // when to perform (e.g. "Amavasya", "Pitru Paksha")
    offerings : [Text];  // items to offer (sesame, water, rice, etc.)
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Guru Parampara (4 sampradayas, diksha vidhi) ──────────────────────────
  public type Sampradaya = {
    id : Text;            // e.g. "shankara", "ramanuja", "madhva", "vallabha"
    name : Text;
    sanskritName : Text;
    founder : Text;
    philosophy : Text;   // one-line summary of the sampradaya's teaching
    lineage : [Text];    // key teachers in the lineage
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  public type DikshaVidhi = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    mantra : Text;        // mantra received at diksha
    prerequisites : [Text];
    procedure : [Text];   // steps of the diksha vidhi
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Karma Yoga (karma types) ──────────────────────────────────────────────
  public type KarmaType = {
    id : Text;            // e.g. "nishkama", "sakama", "prarabdha", "sanchita", "agami"
    name : Text;
    sanskritName : Text;
    description : Text;
    practice : Text;      // how to apply this understanding
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Mauna Saadhna (silence practices) ─────────────────────────────────────
  public type MaunaPractice = {
    id : Text;
    name : Text;
    sanskritName : Text;
    description : Text;
    duration : Text;      // suggested duration (e.g. "1 hour daily", "1 day weekly")
    benefits : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Shaucha Saadhna (inner / outer purity) ────────────────────────────────
  public type ShauchaPractice = {
    id : Text;
    name : Text;
    sanskritName : Text;
    kind : Text;          // "inner" | "outer"
    description : Text;
    practice : Text;
    benefits : [Text];
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Moksha Marg (Ashtavakra Gita teachings) ──────────────────────────────
  public type MokshaTeaching = {
    id : Text;
    chapter : Nat;
    verse : Text;
    sanskritDevanagari : Text;
    sanskritTransliteration : Text;
    simpleMeaning : Text;
    commentary : Text;
    sourceGranth : Text;   // "Ashtavakra Gita"
    sourceChapter : Nat;
    sourceVerse : Text;
  };

  // ─── Dharma Bodh (life purpose discovery) ──────────────────────────────────
  public type DharmaBodhStep = {
    id : Text;
    stepNumber : Nat;
    title : Text;
    sanskritName : Text;
    question : Text;       // reflective question for the seeker
    guidance : Text;       // guidance to help discover life purpose
    practice : Text;       // suggested practice / reflection
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Devlok Yaatra (21 stages) ─────────────────────────────────────────────
  public type DevlokStage = {
    id : Text;
    stageNumber : Nat;     // 1-21
    name : Text;
    sanskritName : Text;
    description : Text;
    significance : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };
};
