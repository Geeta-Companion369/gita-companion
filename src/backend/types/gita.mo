module {
  // ─── Granth (Sacred Text) Library — Pustakaalaye ───────────────────────────
  /// Enumerates the categories of sacred texts in the Digital Library.
  /// #veda : 4 Vedas (Rig, Yajur, Sama, Atharva)
  /// #purana : 18 Maha Puranas
  /// #upanishad : principal Upanishads
  /// #gita : Bhagavad Gita (already covered by gita domain chapters/verses)
  public type GranthType = {
    #veda : VedaName;
    #purana : PuranaName;
    #upanishad : UpanishadName;
    #gita;
  };

  /// The 4 Vedas.
  public type VedaName = {
    #rig;
    #yajur;
    #sama;
    #atharva;
  };

  /// The 18 Maha Puranas (named by canonical short identifier).
  public type PuranaName = {
    #brahma;
    #padma;
    #vishnu;
    #shiva;
    #bhagavata;
    #narada;
    #markandeya;
    #agni;
    #bhavishya;
    #brahmavaivarta;
    #linga;
    #varaha;
    #skanda;
    #vamana;
    #kurma;
    #matsya;
    #garuda;
    #brahmanda;
  };

  /// Principal Upanishads (named by canonical short identifier).
  public type UpanishadName = {
    #isha;
    #kena;
    #katha;
    #prashna;
    #mundaka;
    #mandukya;
    #taittiriya;
    #aitareya;
    #chandogya;
    #brihadaranyaka;
    #shvetashvatara;
  };

  /// A single sacred text (granth) in the Digital Library.
  public type Granth = {
    id : Text;            // canonical id, e.g. "rig-veda", "bhagavata-purana"
    granthType : GranthType;
    name : Text;          // display name, e.g. "Rig Veda"
    sanskritName : Text;  // Devanagari name, e.g. "ऋग्वेद"
    description : Text;
    totalChapters : Nat;
    sourceCitation : Text; // granth/shastra citation for trust-through-source
  };

  /// A chapter within a granth.
  public type GranthChapter = {
    granthId : Text;
    chapterId : Nat;
    name : Text;
    sanskritName : Text;
    summary : Text;
    verseCount : Nat;
  };

  /// A verse within a granth chapter, with 3 Sanskrit layers + simple meaning.
  /// 5-language support is delivered via the `language` field on the API boundary;
  /// the stored verse carries the canonical Sanskrit + simple English meaning.
  public type GranthVerse = {
    granthId : Text;
    chapterId : Nat;
    verseId : Nat;
    verseNumber : Text;             // display number, e.g. "1.1.1"
    sanskritDevanagari : Text;      // layer 1: Devanagari script
    sanskritTransliteration : Text;  // layer 2: IAST transliteration
    simpleMeaning : Text;           // layer 3: plain-language meaning
    sourceGranth : Text;            // granth citation for trust-through-source
    sourceChapter : Nat;
    sourceVerse : Text;
  };

  // ─── Festival (expanded for Vrat Saadhna trust-through-source) ──────────────
  /// Replaces the original Festival type with source-citation fields.
  public type Festival = {
    name : Text;
    dateStr : Text;
    meaning : Text;
    mantraName : Text;
    recommendedVerse : Text;
    story : Text;            // narrative of the festival
    sourceGranth : Text;     // granth/shastra citation
    sourceVerse : Text;      // verse reference within the granth
    sourceChapter : Text;    // chapter reference within the granth
  };

  // ─── Mantra (expanded for 18 Mahamantras + 108 Sharanam) ────────────────────
  /// Replaces the original MantraEntry with a category discriminator that
  /// distinguishes Maala Jaap (18 Mahamantras) from Naam Lekhan (108 Sharanam).
  public type MantraCategory = {
    #mahamantra;   // 18 Mahamantras — Maala Jaap
    #sharanam;     // 108 Sharanam mantras — Naam Lekhan
    #protection;   // legacy protection category
    #general;
  };

  public type MantraEntry = {
    id : Text;
    name : Text;
    category : MantraCategory;
    meaning : Text;
    benefit : Text;
    text : Text;
    recommendedCount : Nat;  // recommended repetition count (e.g. 108, 1008)
  };

  // ─── Existing Gita types (unchanged) ───────────────────────────────────────
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

  public type DailyChallenge = {
    date : Text;
    task : Text;
    points : Nat;
    action : Text;
  };
};
