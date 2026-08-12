import Types "../types/bhavishya";
import BhavishyaLib "../lib/bhavishya";
import Map "mo:core/Map";

/// Public API surface for Bhavishya Gathan — Western mode (Tarot reading).
/// Vedic astrology (Jyotish) is covered by the kundali-graha and user-profile
/// domains. State slices are injected by main.mo.
mixin (
  tarotCards    : Map.Map<Text, Types.TarotCard>,
  tarotReadings : Map.Map<Text, Types.TarotReading>,
) {
  // ─── Bhavishya Gathan — Western mode (Tarot reading) ───────────────────────
  public query func listTarotCards() : async [Types.TarotCard] {
    BhavishyaLib.listTarotCards(tarotCards);
  };

  public query func getTarotCard(id : Text) : async ?Types.TarotCard {
    BhavishyaLib.getTarotCard(tarotCards, id);
  };

  /// Draw a tarot reading for the calling user.
  /// spreadType: e.g. "three-card", "celtic-cross"
  /// question: the seeker's question (may be empty for a general reading)
  public shared ({ caller }) func drawTarot(
    spreadType : Text,
    question : Text,
  ) : async Types.TarotReading {
    ignore caller;
    BhavishyaLib.drawTarot(tarotCards, spreadType, question);
  };
};
