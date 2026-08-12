module {
  // ─── Graha (Planet) Remedy Data ────────────────────────────────────────────
  /// Complete remedy profile for one of the 9 Vedic grahas.
  public type GrahaRemedyData = {
    graha          : Text;
    role           : Text;
    strongGives    : [Text];
    weakCauses      : [Text];
    remedies       : [Text];
    avoidList      : [Text];
    mantraSanskrit : Text;
    mantraCount    : Nat;
    daan           : Text;
    gemstone       : Text;
    gemstoneWarning: Text;
  };

  // ─── Panchaang (full Hindu Calendar) ───────────────────────────────────────
  /// Full Panchaang for a given date — 9 limbs: tithi, paksha, masa, ritu,
  /// vaar, nakshatra, yoga, karana, plus a guidance note.
  /// Date-parameterized: getPanchaang(date) returns this for the requested date.
  public type PanchangData = {
    date        : Text;   // YYYY-MM-DD the panchaang is for
    tithi       : Text;   // e.g. "Panchami", "Ekadashi"
    tithiNumber : Nat;    // 1-30 (lunar day)
    paksha      : Text;   // "Shukla" | "Krishna"
    masa        : Text;   // lunar month, e.g. "Chaitra", "Vaishakha"
    ritu        : Text;   // season, e.g. "Vasant", "Sharad"
    vaar        : Text;   // weekday in Sanskrit, e.g. "Somavar" (Monday)
    nakshatra   : Text;   // e.g. "Rohini", "Pushya"
    yoga        : Text;   // e.g. "Siddha", "Amrit"
    karana      : Text;   // e.g. "Bava", "Taitila"
    moonSign    : Text;   // current moon sign, e.g. "Taurus"
    description : Text;   // overall guidance note for the day
  };

  // ─── Transit Events ────────────────────────────────────────────────────────
  /// A single planetary transit / retrograde / eclipse event.
  public type TransitEvent = {
    planet      : Text;
    eventType   : Text;
    description : Text;
    startDate   : Text;
    endDate     : Text;
    remedy      : Text;
    colorCode   : Text;
  };

  // ─── Remedy Reminder Preference ────────────────────────────────────────────
  public type RemedyReminder = {
    graha        : Text;
    reminderTime : Text;
    isActive     : Bool;
  };
};
