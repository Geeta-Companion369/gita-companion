import Types "../types/saadhna-practices";
import SaadhnaLib "../lib/saadhna-practices";
import Map "mo:core/Map";

/// Public API surface for Saadhna Practices — Siddhis/Nidhis/Kalas/Mahavidyas,
/// Pitru rites, sampradayas, diksha vidhi, karma types, mauna, shaucha,
/// Moksha teachings, Dharma Bodh steps, and Devlok stages.
/// State slices are injected by main.mo.
mixin (
  siddhiEntries     : Map.Map<Text, Types.SiddhiEntry>,
  pitruRites        : Map.Map<Text, Types.PitruRite>,
  sampradayas       : Map.Map<Text, Types.Sampradaya>,
  dikshaVidhis      : Map.Map<Text, Types.DikshaVidhi>,
  karmaTypes        : Map.Map<Text, Types.KarmaType>,
  maunaPractices    : Map.Map<Text, Types.MaunaPractice>,
  shauchaPractices  : Map.Map<Text, Types.ShauchaPractice>,
  mokshaTeachings   : Map.Map<Text, Types.MokshaTeaching>,
  dharmaBodhSteps   : Map.Map<Text, Types.DharmaBodhStep>,
  devlokStages      : Map.Map<Text, Types.DevlokStage>,
) {
  // ─── Siddhi Saadhna (8 Siddhis, 9 Nidhis, 16 Kalas, 10 Mahavidyas) ──────────
  public query func listSiddhis() : async [Types.SiddhiEntry] {
    SaadhnaLib.listSiddhis(siddhiEntries);
  };

  public query func getSiddhi(id : Text) : async ?Types.SiddhiEntry {
    SaadhnaLib.getSiddhi(siddhiEntries, id);
  };

  public query func listNidhis() : async [Types.SiddhiEntry] {
    SaadhnaLib.listNidhis(siddhiEntries);
  };

  public query func getNidhi(id : Text) : async ?Types.SiddhiEntry {
    SaadhnaLib.getNidhi(siddhiEntries, id);
  };

  public query func listKalas() : async [Types.SiddhiEntry] {
    SaadhnaLib.listKalas(siddhiEntries);
  };

  public query func getKala(id : Text) : async ?Types.SiddhiEntry {
    SaadhnaLib.getKala(siddhiEntries, id);
  };

  public query func listMahavidyas() : async [Types.SiddhiEntry] {
    SaadhnaLib.listMahavidyas(siddhiEntries);
  };

  public query func getMahavidya(id : Text) : async ?Types.SiddhiEntry {
    SaadhnaLib.getMahavidya(siddhiEntries, id);
  };

  // ─── Pitru Saadhna (Tarpan, Shraddha, Amavasya) ────────────────────────────
  public query func listPitruRites() : async [Types.PitruRite] {
    SaadhnaLib.listPitruRites(pitruRites);
  };

  public query func getPitruRite(id : Text) : async ?Types.PitruRite {
    SaadhnaLib.getPitruRite(pitruRites, id);
  };

  // ─── Guru Parampara (4 sampradayas, diksha vidhi) ──────────────────────────
  public query func listSampradayas() : async [Types.Sampradaya] {
    SaadhnaLib.listSampradayas(sampradayas);
  };

  public query func getSampradaya(id : Text) : async ?Types.Sampradaya {
    SaadhnaLib.getSampradaya(sampradayas, id);
  };

  public query func getDikshaVidhi(id : Text) : async ?Types.DikshaVidhi {
    SaadhnaLib.getDikshaVidhi(dikshaVidhis, id);
  };

  // ─── Karma Yoga (karma types) ──────────────────────────────────────────────
  public query func listKarmaTypes() : async [Types.KarmaType] {
    SaadhnaLib.listKarmaTypes(karmaTypes);
  };

  public query func getKarmaType(id : Text) : async ?Types.KarmaType {
    SaadhnaLib.getKarmaType(karmaTypes, id);
  };

  // ─── Mauna Saadhna (silence practices) ─────────────────────────────────────
  public query func listMaunaPractices() : async [Types.MaunaPractice] {
    SaadhnaLib.listMaunaPractices(maunaPractices);
  };

  public query func getMaunaPractice(id : Text) : async ?Types.MaunaPractice {
    SaadhnaLib.getMaunaPractice(maunaPractices, id);
  };

  // ─── Shaucha Saadhna (inner / outer purity) ────────────────────────────────
  public query func listShauchaPractices() : async [Types.ShauchaPractice] {
    SaadhnaLib.listShauchaPractices(shauchaPractices);
  };

  public query func getShauchaPractice(id : Text) : async ?Types.ShauchaPractice {
    SaadhnaLib.getShauchaPractice(shauchaPractices, id);
  };

  // ─── Moksha Marg (Ashtavakra Gita teachings) ──────────────────────────────
  public query func listMokshaTeachings() : async [Types.MokshaTeaching] {
    SaadhnaLib.listMokshaTeachings(mokshaTeachings);
  };

  public query func getMokshaTeaching(id : Text) : async ?Types.MokshaTeaching {
    SaadhnaLib.getMokshaTeaching(mokshaTeachings, id);
  };

  // ─── Dharma Bodh (life purpose discovery) ──────────────────────────────────
  public query func listDharmaBodhSteps() : async [Types.DharmaBodhStep] {
    SaadhnaLib.listDharmaBodhSteps(dharmaBodhSteps);
  };

  public query func getDharmaBodhStep(id : Text) : async ?Types.DharmaBodhStep {
    SaadhnaLib.getDharmaBodhStep(dharmaBodhSteps, id);
  };

  // ─── Devlok Yaatra (21 stages) ─────────────────────────────────────────────
  public query func listDevlokStages() : async [Types.DevlokStage] {
    SaadhnaLib.listDevlokStages(devlokStages);
  };

  public query func getDevlokStage(id : Text) : async ?Types.DevlokStage {
    SaadhnaLib.getDevlokStage(devlokStages, id);
  };
};
