import Types     "../types/kundali-graha";
import KGLib    "../lib/kundali-graha";
import Map      "mo:core/Map";
import List     "mo:core/List";
import Principal "mo:core/Principal";

/// Public API surface for Kundali Lite — graha remedies, Panchang, transit calendar,
/// and daily remedy reminders.  State slices are injected by main.mo.
mixin (
  grahaRemedies  : Map.Map<Text, Types.GrahaRemedyData>,
  transitEvents  : List.List<Types.TransitEvent>,
  remedyReminders: Map.Map<Text, Types.RemedyReminder>,
) {

  // ─── Graha Remedy ──────────────────────────────────────────────────────────

  /// Return full remedy data for a named graha.
  /// Valid values: Surya | Chandra | Mangal | Budh | Guru | Shukra | Shani | Rahu | Ketu
  public shared query func getGrahaRemedy(graha : Text) : async ?Types.GrahaRemedyData {
    KGLib.getGrahaRemedy(grahaRemedies, graha)
  };

  /// Return all 9 graha remedy records at once (for the full Graha Shanti screen).
  public shared query func getAllGrahaRemedies() : async [Types.GrahaRemedyData] {
    grahaRemedies.values().toArray()
  };

  // ─── Panchang ──────────────────────────────────────────────────────────────

  /// Return Panchang data for a given date string in YYYY-MM-DD format.
  /// Calculated server-side from Vedic lunar calendar formulas.
  public shared query func getPanchangToday(date : Text) : async Types.PanchangData {
    KGLib.getPanchang(date)
  };

  // ─── Transit Calendar ──────────────────────────────────────────────────────

  /// Return all transit events for a given year (e.g. 2026).
  /// Data is pre-computed and static for the current year.
  public shared query func getTransitCalendar(year : Nat) : async [Types.TransitEvent] {
    KGLib.getTransitCalendar(transitEvents, year)
  };

  // ─── Remedy Reminder ───────────────────────────────────────────────────────

  /// Save or update the calling user's daily remedy reminder preference.
  public shared ({ caller }) func saveRemedyReminder(
    graha : Text,
    time  : Text,
  ) : async Bool {
    KGLib.saveReminder(remedyReminders, caller.toText(), graha, time);
    true
  };

  /// Return the calling user's saved remedy reminder, or null if not set.
  public shared query ({ caller }) func getRemedyReminder() : async ?Types.RemedyReminder {
    KGLib.getReminder(remedyReminders, caller.toText())
  };

};
