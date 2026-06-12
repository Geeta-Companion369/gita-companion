module {
  // ─── Graha (Planet) Remedy Data ────────────────────────────────────────────
  /// Complete remedy profile for one of the 9 Vedic grahas.
  public type GrahaRemedyData = {
    graha          : Text;          // "Surya" | "Chandra" | "Mangal" | "Budh" | "Guru" | "Shukra" | "Shani" | "Rahu" | "Ketu"
    role           : Text;          // One-line description of the graha's domain
    strongGives    : [Text];        // Boons when graha is well-placed
    weakCauses     : [Text];        // Issues when graha is afflicted/weak
    remedies       : [Text];        // Practical upay (daan, seva, behaviour)
    avoidList      : [Text];        // What to avoid on the graha's day
    mantraSanskrit : Text;          // Full Sanskrit mantra text
    mantraCount    : Nat;           // Recommended repetition count
    daan           : Text;          // Donation item + day
    gemstone       : Text;          // Recommended gemstone (with disclaimer)
    gemstoneWarning: Text;          // Mandatory warning for gemstone
  };

  // ─── Panchang (Hindu Calendar) ─────────────────────────────────────────────
  /// Daily Panchang data for a given date.
  public type PanchangData = {
    tithi       : Text;   // e.g. "Panchami", "Ekadashi"
    tithiNumber : Nat;    // 1-30 (lunar day)
    nakshatra   : Text;   // e.g. "Rohini", "Pushya"
    yoga        : Text;   // e.g. "Siddha", "Amrit"
    karana      : Text;   // e.g. "Bava", "Taitila"
    moonSign    : Text;   // Current moon sign, e.g. "Taurus"
    vara        : Text;   // Weekday in Sanskrit, e.g. "Somavar" (Monday)
    description : Text;   // Overall guidance note for the day
  };

  // ─── Transit Events ────────────────────────────────────────────────────────
  /// A single planetary transit / retrograde / eclipse event.
  public type TransitEvent = {
    planet      : Text;   // Planet name
    eventType   : Text;   // "Vakri" | "Gochar" | "Eclipse" | "DirectMotion"
    description : Text;   // Human-readable description of the event
    startDate   : Text;   // ISO date string, e.g. "2026-02-03"
    endDate     : Text;   // ISO date string (same as startDate for point events)
    remedy      : Text;   // Suggested upay during this period
    colorCode   : Text;   // "green" | "yellow" | "red"
  };

  // ─── Remedy Reminder Preference ────────────────────────────────────────────
  /// User's saved daily remedy reminder preference (stored per Principal).
  public type RemedyReminder = {
    graha        : Text;   // Which graha to remind about
    reminderTime : Text;   // HH:MM in 24-hour format, e.g. "07:00"
    isActive     : Bool;
  };
};
