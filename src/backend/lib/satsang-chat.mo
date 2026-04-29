import Types "../types/satsang-chat";
import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";

module {
  // The 18 sacred satsang circles
  let CIRCLE_IDS : [Text] = [
    "Gita Lovers",
    "Morning Sadhana",
    "Bhakti Yoga",
    "Jnana Seekers",
    "Seva Warriors",
    "Youth Dharma",
    "Mothers of Dharma",
    "Kirtan Circle",
    "Vedanta Study",
    "Karma Yogis",
    "Dhyana Meditate",
    "Mantra Chanters",
    "Sanskrit Learners",
    "Vrindavan Devotees",
    "Shiva Bhaktas",
    "Hanuman Bhaktas",
    "Shakti Devotees",
    "Pilgrim Hearts",
  ];

  let MAX_MESSAGES_PER_CIRCLE : Nat = 100;

  /// Ensure all 18 circle message lists exist in the map.
  public func initCircles(circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>) : () {
    for (circleId in CIRCLE_IDS.vals()) {
      switch (circleMessages.get(circleId)) {
        case null { circleMessages.add(circleId, List.empty<Types.SatsangMessage>()) };
        case _ {};
      };
    };
  };

  /// Post a message to a circle.
  public func postMessage(
    circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
    circleId : Text,
    authorName : Text,
    message : Text,
  ) : () {
    let msgs = switch (circleMessages.get(circleId)) {
      case (?existing) existing;
      case null {
        let newList = List.empty<Types.SatsangMessage>();
        circleMessages.add(circleId, newList);
        newList;
      };
    };
    msgs.add({
      circleId;
      authorName;
      message;
      timestamp = Time.now();
    });
  };

  /// Get all messages for a circle (newest last).
  public func getMessages(
    circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
    circleId : Text,
  ) : [Types.SatsangMessage] {
    switch (circleMessages.get(circleId)) {
      case (?msgs) msgs.toArray();
      case null [];
    };
  };

  /// Trim each circle to the last MAX_MESSAGES_PER_CIRCLE messages.
  public func clearOldMessages(
    circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
  ) : () {
    for ((circleId, msgs) in circleMessages.entries()) {
      let size = msgs.size();
      if (size > MAX_MESSAGES_PER_CIRCLE) {
        let drop = size - MAX_MESSAGES_PER_CIRCLE;
        // Keep only the last MAX_MESSAGES_PER_CIRCLE entries
        let kept = msgs.sliceToArray(drop, size);
        msgs.clear();
        msgs.addAll(kept.vals());
      };
    };
  };

  /// List all known circle IDs.
  public func listCircleIds() : [Text] {
    CIRCLE_IDS;
  };
};
