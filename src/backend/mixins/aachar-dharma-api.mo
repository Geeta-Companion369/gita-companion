import Types "../types/aachar-dharma";
import AacharDharmaLib "../lib/aachar-dharma";
import Map "mo:core/Map";

/// Public API surface for Aachar Saadhna — daily duties, ritual explanations,
/// the 4 Dharma pillars, and the Yug cycle. State slices are injected by main.mo.
mixin (
  duties       : Map.Map<Text, Types.DailyDuty>,
  explanations : Map.Map<Text, Types.RitualExplanation>,
  pillars      : Map.Map<Text, Types.DharmaPillar>,
  yugs         : Map.Map<Text, Types.YugCycle>,
) {
  // ─── Daily Duties (Aachar Saadhna) ─────────────────────────────────────────
  public query func listDailyDuties() : async [Types.DailyDuty] {
    AacharDharmaLib.listDailyDuties(duties);
  };

  public query func getDailyDuty(id : Text) : async ?Types.DailyDuty {
    AacharDharmaLib.getDailyDuty(duties, id);
  };

  // ─── Ritual Explanations (the WHY, with source citations) ──────────────────
  public query func listRitualExplanations() : async [Types.RitualExplanation] {
    AacharDharmaLib.listRitualExplanations(explanations);
  };

  public query func getRitualExplanation(id : Text) : async ?Types.RitualExplanation {
    AacharDharmaLib.getRitualExplanation(explanations, id);
  };

  // ─── Dharma Stambh (4 pillars) ──────────────────────────────────────────────
  public query func listDharmaPillars() : async [Types.DharmaPillar] {
    AacharDharmaLib.listDharmaPillars(pillars);
  };

  public query func getDharmaPillar(id : Text) : async ?Types.DharmaPillar {
    AacharDharmaLib.getDharmaPillar(pillars, id);
  };

  // ─── Yug Cycle ──────────────────────────────────────────────────────────────
  public query func listYugCycles() : async [Types.YugCycle] {
    AacharDharmaLib.listYugCycles(yugs);
  };

  public query func getYugCycle(id : Text) : async ?Types.YugCycle {
    AacharDharmaLib.getYugCycle(yugs, id);
  };
};
