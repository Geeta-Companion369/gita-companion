import Types "../types/satsang-chat";
import SatsangLib "../lib/satsang-chat";
import Map "mo:core/Map";
import List "mo:core/List";

mixin (
  circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
  satsangCircles : Map.Map<Text, Types.SatsangCircle>,
  quizzes : Map.Map<Text, Types.QuizQuestion>,
  leaderboard : List.List<Types.LeaderboardEntry>,
  pledges : Map.Map<Text, Types.NaamPledge>,
  punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
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

  // ─── 18 Chat Circles metadata ───────────────────────────────────────────────
  public query func listSatsangCircleMetadata() : async [Types.SatsangCircle] {
    SatsangLib.listSatsangCircles(satsangCircles);
  };

  public query func getSatsangCircle(circleId : Text) : async ?Types.SatsangCircle {
    SatsangLib.getSatsangCircle(satsangCircles, circleId);
  };

  // ─── Daily Quiz ──────────────────────────────────────────────────────────────
  public query func getDailyQuiz(date : Text) : async ?Types.QuizQuestion {
    SatsangLib.getDailyQuiz(quizzes, date);
  };

  // ─── Donation Leaderboard ───────────────────────────────────────────────────
  public query func getLeaderboard(limit : Nat) : async [Types.LeaderboardEntry] {
    SatsangLib.getDonationLeaderboard(leaderboard, limit);
  };

  // ─── Naam Pledge Counter ────────────────────────────────────────────────────
  public query func getNaamPledges() : async [Types.NaamPledge] {
    SatsangLib.listNaamPledges(pledges);
  };

  // ─── Punya Profile (points / badges / streaks) ─────────────────────────────
  public shared ({ caller }) func getPunyaProfile() : async ?Types.PunyaProfile {
    SatsangLib.getPunyaProfile(punyaProfiles, caller.toText());
  };
};
