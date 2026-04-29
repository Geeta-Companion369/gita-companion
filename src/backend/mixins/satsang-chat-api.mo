import Types "../types/satsang-chat";
import SatsangLib "../lib/satsang-chat";
import Map "mo:core/Map";
import List "mo:core/List";

mixin (
  circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
) {
  /// Post a message to a satsang circle.
  public func postCircleMessage(circleId : Text, authorName : Text, message : Text) : async () {
    SatsangLib.postMessage(circleMessages, circleId, authorName, message);
  };

  /// Retrieve all messages for a satsang circle (polling-based real-time updates).
  public query func getCircleMessages(circleId : Text) : async [Types.SatsangMessage] {
    SatsangLib.getMessages(circleMessages, circleId);
  };

  /// Trim each circle to the last 100 messages for memory management.
  public func clearOldMessages() : async () {
    SatsangLib.clearOldMessages(circleMessages);
  };

  /// List all 18 satsang circle IDs.
  public query func listSatsangCircles() : async [Text] {
    SatsangLib.listCircleIds();
  };
};
