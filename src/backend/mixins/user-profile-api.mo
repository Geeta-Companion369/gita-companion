import Types     "../types/user-profile";
import UserLib   "../lib/user-profile";
import Map       "mo:core/Map";
import Principal "mo:core/Principal";

/// Public API surface for user profiles, kundli, and newsletter management.
/// State slices are injected by main.mo — no business logic lives here.
mixin (
  profiles    : Map.Map<Principal, Types.UserProfile>,
  kundlis     : Map.Map<Principal, Types.KundliData>,
  subscribers : Map.Map<Text, Types.EmailSubscriber>,
  adminConfig : { var value : Types.AdminConfig },
) {

  // ─── User Profile ──────────────────────────────────────────────────────────

  /// Save or update the calling user's profile.
  /// All sensitive data (birth data, email, phone) stays in backend canister state.
  public shared ({ caller }) func saveUserProfile(
    input : Types.UserProfileInput,
  ) : async Bool {
    if (caller.isAnonymous()) { return false };
    UserLib.saveProfile(profiles, caller, input);
    // Auto-calculate and cache kundli whenever profile is saved
    let savedProfile = switch (UserLib.getProfile(profiles, caller)) {
      case (?p) p;
      case null { return true }; // profile saved but can't retrieve yet
    };
    let kundliData = UserLib.calculateKundli(savedProfile, caller);
    UserLib.saveKundli(kundlis, caller, kundliData);
    // Auto-subscribe to newsletter if opted in
    if (input.newsletterOptIn and input.email != "") {
      UserLib.subscribe(subscribers, input.email, input.fullName);
    };
    true
  };

  /// Return the calling user's profile. Caller-scoped — no cross-user access.
  public shared query ({ caller }) func getUserProfile() : async ?Types.UserProfile {
    if (caller.isAnonymous()) { return null };
    UserLib.getProfile(profiles, caller)
  };

  // ─── Kundli Data ───────────────────────────────────────────────────────────

  /// Persist Vedic kundli data for the caller (e.g. for client-side override/correction).
  public shared ({ caller }) func saveKundliData(
    data : Types.KundliData,
  ) : async Bool {
    if (caller.isAnonymous()) { return false };
    UserLib.saveKundli(kundlis, caller, data);
    true
  };

  /// Return the calling user's stored kundli data.
  /// If not yet stored, automatically calculates from their profile.
  public shared query ({ caller }) func getKundliData() : async ?Types.KundliData {
    if (caller.isAnonymous()) { return null };
    UserLib.getKundli(kundlis, caller)
  };

  // ─── Newsletter ────────────────────────────────────────────────────────────

  /// Opt-in to the Gita Companion newsletter.
  public shared func subscribeNewsletter(
    email : Text,
    name  : Text,
  ) : async Bool {
    if (email == "") { return false };
    UserLib.subscribe(subscribers, email, name);
    true
  };

  /// Opt-out / unsubscribe from the newsletter (soft delete).
  public shared func unsubscribeNewsletter(
    email : Text,
  ) : async Bool {
    if (email == "") { return false };
    UserLib.unsubscribe(subscribers, email);
    true
  };

  // ─── Admin ─────────────────────────────────────────────────────────────────

  /// Return the public admin config (newsletter status, sender name).
  public shared query func getAdminConfig() : async Types.AdminConfig {
    UserLib.getConfig(adminConfig.value)
  };

  /// Update admin configuration — controller-only.
  public shared ({ caller }) func updateAdminConfig(
    config : Types.AdminConfigInput,
  ) : async Bool {
    if (not caller.isController()) { return false };
    UserLib.updateConfig(adminConfig, config);
    true
  };

  /// List all newsletter subscribers — controller-only.
  public shared ({ caller }) func listNewsletterSubscribers() : async [Types.EmailSubscriber] {
    if (not caller.isController()) { return [] };
    UserLib.listSubscribers(subscribers)
  };

};
