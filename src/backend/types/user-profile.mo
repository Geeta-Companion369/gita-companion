module {
  // ─── Date / Time primitives ────────────────────────────────────────────────
  public type DateOfBirth = {
    day   : Nat;
    month : Nat;
    year  : Nat;
  };

  public type TimeOfBirth = {
    hour   : Nat;
    minute : Nat;
  };

  // ─── User Profile ──────────────────────────────────────────────────────────
  /// Full profile stored in canister state — Principal-keyed.
  /// All sensitive fields (email, phone, birth data) stay in backend only.
  public type UserProfile = {
    id             : Principal;
    fullName       : Text;
    dateOfBirth    : DateOfBirth;
    timeOfBirth    : TimeOfBirth;
    placeOfBirth   : Text;
    latitude       : Float;
    longitude      : Float;
    timezone       : Text;          // e.g. "Asia/Kolkata"
    email          : Text;
    phone          : Text;
    newsletterOptIn : Bool;
    createdAt      : Int;           // Time.now() nanoseconds
    updatedAt      : Int;
  };

  /// Input shape accepted from the frontend (no id/timestamps — filled by backend).
  public type UserProfileInput = {
    fullName        : Text;
    dateOfBirth     : DateOfBirth;
    timeOfBirth     : TimeOfBirth;
    placeOfBirth    : Text;
    latitude        : Float;
    longitude       : Float;
    timezone        : Text;
    email           : Text;
    phone           : Text;
    newsletterOptIn : Bool;
  };

  // ─── Kundli / Vedic Astrology ──────────────────────────────────────────────
  public type PlanetPlacement = {
    planet        : Text;   // "Sun" | "Moon" | "Mars" | "Mercury" | "Jupiter" | "Venus" | "Saturn" | "Rahu" | "Ketu"
    sign          : Nat;    // 1-12, Aries = 1
    house         : Nat;    // 1-12
    nakshatra     : Text;
    nakshatraLord : Text;
    degree        : Float;
    retrograde    : Bool;
  };

  public type DashaEntry = {
    lord          : Text;   // planet name
    startDate     : Int;    // epoch milliseconds
    endDate       : Int;
    durationYears : Float;
  };

  public type KundliData = {
    profileId         : Principal;
    lagnaSign         : Nat;    // 1-12
    lagnaRashi        : Text;   // Sanskrit rashi name
    rulingPlanet      : Text;
    rulingPlanetGlyph : Text;   // Devanagari / Sanskrit symbol
    planets           : [PlanetPlacement];
    mahadasha         : DashaEntry;
    antardasha        : DashaEntry;
    pratyantarDasha   : DashaEntry;
    nextDashas        : [DashaEntry];   // next 3 major dashas
    navamsaLagnaSign  : Nat;
    navamsaPlanets    : [PlanetPlacement];
    calculatedAt      : Int;
  };

  // ─── Newsletter ────────────────────────────────────────────────────────────
  public type EmailSubscriber = {
    email        : Text;
    name         : Text;
    subscribedAt : Int;
    active       : Bool;
  };

  // ─── Admin Configuration ───────────────────────────────────────────────────
  public type AdminConfig = {
    senderEmail       : Text;   // placeholder — admin fills later
    senderName        : Text;   // default: "Gita Companion"
    newsletterEnabled : Bool;   // false by default — admin activates
    appVersion        : Text;
  };

  public type AdminConfigInput = {
    senderEmail       : Text;
    senderName        : Text;
    newsletterEnabled : Bool;
    appVersion        : Text;
  };
};
