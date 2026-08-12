import Types "../types/life-journey";
import LifeJourneyLib "../lib/life-journey";
import Map "mo:core/Map";

/// Public API surface for Life Journey — Garbha Sanskar (40-week pregnancy),
/// 16 Sanskaaram, Antim Yatra (last rites), and Shodashopachara (16-step worship).
/// State slices are injected by main.mo.
mixin (
  pregnancyWeeks : Map.Map<Nat, Types.PregnancyWeek>,
  sanskaars      : Map.Map<Text, Types.Sanskaar>,
  lastRiteSteps  : Map.Map<Text, Types.LastRiteStep>,
  worshipSteps   : Map.Map<Text, Types.WorshipStep>,
) {
  // ─── Garbha Sanskar (280-day week-by-week) ──────────────────────────────────
  public query func listPregnancyWeeks() : async [Types.PregnancyWeek] {
    LifeJourneyLib.listPregnancyWeeks(pregnancyWeeks);
  };

  public query func getPregnancyWeek(weekNumber : Nat) : async ?Types.PregnancyWeek {
    LifeJourneyLib.getPregnancyWeek(pregnancyWeeks, weekNumber);
  };

  // ─── 16 Sanskaaram (16 rites of passage) ───────────────────────────────────
  public query func listSanskaars() : async [Types.Sanskaar] {
    LifeJourneyLib.listSanskaars(sanskaars);
  };

  public query func getSanskaar(id : Text) : async ?Types.Sanskaar {
    LifeJourneyLib.getSanskaar(sanskaars, id);
  };

  // ─── Antim Yatra (last rites procedure) ────────────────────────────────────
  public query func listLastRiteSteps() : async [Types.LastRiteStep] {
    LifeJourneyLib.listLastRiteSteps(lastRiteSteps);
  };

  public query func getLastRiteStep(id : Text) : async ?Types.LastRiteStep {
    LifeJourneyLib.getLastRiteStep(lastRiteSteps, id);
  };

  // ─── Shodashopachara (16-step worship with mantras) ────────────────────────
  public query func listWorshipSteps() : async [Types.WorshipStep] {
    LifeJourneyLib.listWorshipSteps(worshipSteps);
  };

  public query func getWorshipStep(id : Text) : async ?Types.WorshipStep {
    LifeJourneyLib.getWorshipStep(worshipSteps, id);
  };
};
