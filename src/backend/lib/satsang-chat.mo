import Types "../types/satsang-chat";
import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

module {
  // ─── Existing circle chat ───────────────────────────────────────────────────
  /// Seed the 18 satsang circle message buckets (each starts empty).
  /// Idempotent: only creates a bucket when the circle id is not yet present,
  /// so existing messages survive a re-init.
  public func initCircles(circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>) : () {
    let circleIds = circleIdList();
    for (id in circleIds.values()) {
      if (not circleMessages.containsKey(id)) {
        circleMessages.add(id, List.empty<Types.SatsangMessage>());
      };
    };
  };

  /// Append a message to a circle's history. Creates the bucket on first post.
  public func postMessage(
    circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
    circleId : Text,
    authorName : Text,
    message : Text,
  ) : () {
    let bucket = switch (circleMessages.get(circleId)) {
      case (?existing) existing;
      case null {
        let fresh = List.empty<Types.SatsangMessage>();
        circleMessages.add(circleId, fresh);
        fresh;
      };
    };
    bucket.add({
      circleId;
      authorName;
      message;
      timestamp = Time.now();
    });
  };

  /// Return all messages for a circle (oldest first), or [] if the circle
  /// has no bucket yet.
  public func getMessages(
    circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
    circleId : Text,
  ) : [Types.SatsangMessage] {
    switch (circleMessages.get(circleId)) {
      case (?bucket) bucket.toArray();
      case null [];
    };
  };

  /// Trim each circle to its most recent 100 messages for memory management.
  public func clearOldMessages(
    circleMessages : Map.Map<Text, List.List<Types.SatsangMessage>>,
  ) : () {
    for ((id, bucket) in circleMessages.entries()) {
      let all = bucket.toArray();
      let size = all.size();
      if (size > 100) {
        bucket.clear();
        // Keep the last 100 (most recent). `all` is oldest-first, so the
        // tail of the array holds the newest messages.
        let keepFrom = size - 100;
        var i = keepFrom;
        while (i < size) {
          bucket.add(all[i]);
          i += 1;
        };
      };
    };
  };

  /// Return the canonical ids of all 18 satsang circles.
  public func listCircleIds() : [Text] {
    circleIdList();
  };

  // ─── 18 Chat Circles metadata ───────────────────────────────────────────────
  /// Return metadata for every satsang circle, ordered by canonical id list.
  public func listSatsangCircles(
    circles : Map.Map<Text, Types.SatsangCircle>,
  ) : [Types.SatsangCircle] {
    let ids = circleIdList();
    Array.tabulate(ids.size(), func(i : Nat) : Types.SatsangCircle {
      switch (circles.get(ids[i])) {
        case (?c) c;
        case null {
          // Should not happen after initSatsangCircles; fall back to a blank.
          { id = ""; name = ""; description = ""; memberCount = 0; iconGlyph = "" };
        };
      };
    });
  };

  /// Return metadata for a single circle by id.
  public func getSatsangCircle(
    circles : Map.Map<Text, Types.SatsangCircle>,
    circleId : Text,
  ) : ?Types.SatsangCircle {
    circles.get(circleId);
  };

  /// Seed all 18 satsang circle metadata entries. Idempotent: only inserts
  /// when the circle id is not yet present.
  public func initSatsangCircles(circles : Map.Map<Text, Types.SatsangCircle>) : () {
    let seed = circleSeedData();
    for (c in seed.values()) {
      if (not circles.containsKey(c.id)) {
        circles.add(c.id, c);
      };
    };
  };

  // ─── Daily Quiz ─────────────────────────────────────────────────────────────
  /// Return today's quiz. Selection is deterministic from the date string so
  /// every user sees the same quiz on a given day. The returned question is
  /// stamped with `id = "quiz-" # date` and `date = date` so callers can
  /// deduplicate submissions per day.
  public func getDailyQuiz(
    quizzes : Map.Map<Text, Types.QuizQuestion>,
    date : Text,
  ) : ?Types.QuizQuestion {
    let pool = quizPoolIds();
    let poolSize = pool.size();
    if (poolSize == 0) { return null };
    let idx = dateToIndex(date, poolSize);
    let poolId = pool[idx];
    switch (quizzes.get(poolId)) {
      case (?q) {
        ?{
          id = "quiz-" # date;
          date;
          question = q.question;
          options = q.options;
          correctIndex = q.correctIndex;
          explanation = q.explanation;
          sourceGranth = q.sourceGranth;
          sourceVerse = q.sourceVerse;
          points = q.points;
        };
      };
      case null null;
    };
  };

  /// Grade a quiz submission and award points to the caller's punya profile.
  /// Creates the profile on first interaction. Returns the updated profile,
  /// or null if the quiz pool entry could not be found.
  public func submitQuizAnswer(
    punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
    quizzes : Map.Map<Text, Types.QuizQuestion>,
    caller : Text,
    quizId : Text,
    selectedIndex : Nat,
  ) : ?Types.PunyaProfile {
    let poolId = quizIdToPoolId(quizId);
    let question = switch (quizzes.get(poolId)) {
      case (?q) q;
      case null { return null };
    };
    let correct = selectedIndex == question.correctIndex;
    let profile = ensureProfile(punyaProfiles, caller);
    let awardedPoints = if correct { question.points } else { 0 };
    let newStreak = if correct { profile.currentStreakDays + 1 } else { 0 };
    let updated : Types.PunyaProfile = {
      principalId = profile.principalId;
      totalPoints = profile.totalPoints + awardedPoints;
      currentStreakDays = newStreak;
      longestStreakDays = if (newStreak > profile.longestStreakDays) {
        newStreak;
      } else {
        profile.longestStreakDays;
      };
      badges = if correct {
        awardQuizBadges(profile.badges, newStreak, Time.now());
      } else {
        profile.badges;
      };
      lastActivityAt = Time.now();
    };
    punyaProfiles.add(caller, updated);
    ?updated;
  };

  /// Seed the quiz question pool (32 questions covering Gita, Vedas,
  /// Puranas, festivals, mantras). Idempotent: only inserts when the pool id
  /// is not yet present.
  public func initQuizzes(quizzes : Map.Map<Text, Types.QuizQuestion>) : () {
    let seed = quizSeedData();
    for (q in seed.values()) {
      if (not quizzes.containsKey(q.id)) {
        quizzes.add(q.id, q);
      };
    };
  };

  // ─── Donation Leaderboard ──────────────────────────────────────────────────
  /// Return the top `limit` donation leaderboard entries, sorted by total
  /// donation descending. Ranks are recomputed (1-based) on the fly.
  public func getDonationLeaderboard(
    leaderboard : List.List<Types.LeaderboardEntry>,
    limit : Nat,
  ) : [Types.LeaderboardEntry] {
    let all = leaderboard.toArray();
    let sorted = all.sort(func(a : Types.LeaderboardEntry, b : Types.LeaderboardEntry) : { #less; #equal; #greater } {
      if (a.totalDonation > b.totalDonation) { #less }
      else if (a.totalDonation < b.totalDonation) { #greater }
      else { #equal };
    });
    let count = if (sorted.size() < limit) { sorted.size() } else { limit };
    Array.tabulate(count, func(i : Nat) : Types.LeaderboardEntry {
      { sorted[i] with rank = i + 1 };
    });
  };

  /// Record (or accumulate) a donation for a donor. Updates the donor's
  /// existing entry in place, or appends a new one.
  public func recordDonation(
    leaderboard : List.List<Types.LeaderboardEntry>,
    donorName : Text,
    donorPrincipal : Text,
    amount : Nat,
  ) : () {
    let now = Time.now();
    switch (leaderboard.find(func(e : Types.LeaderboardEntry) : Bool { e.donorPrincipal == donorPrincipal })) {
      case (?existing) {
        let updated : Types.LeaderboardEntry = {
          rank = existing.rank;
          donorName;
          donorPrincipal;
          totalDonation = existing.totalDonation + amount;
          donationCount = existing.donationCount + 1;
          lastDonationAt = now;
        };
        let snapshot = leaderboard.toArray();
        leaderboard.clear();
        for (e in snapshot.values()) {
          if (e.donorPrincipal == donorPrincipal) {
            leaderboard.add(updated);
          } else {
            leaderboard.add(e);
          };
        };
      };
      case null {
        leaderboard.add({
          rank = 0;
          donorName;
          donorPrincipal;
          totalDonation = amount;
          donationCount = 1;
          lastDonationAt = now;
        });
      };
    };
  };

  // ─── Naam Pledge Counter ────────────────────────────────────────────────────
  /// Create a new (or replace an existing) naam pledge for a caller.
  public func createNaamPledge(
    pledges : Map.Map<Text, Types.NaamPledge>,
    caller : Text,
    displayName : Text,
    mantraName : Text,
    pledgedCount : Nat,
  ) : Types.NaamPledge {
    let now = Time.now();
    let pledge : Types.NaamPledge = {
      principalId = caller;
      displayName;
      mantraName;
      pledgedCount;
      completedCount = 0;
      pledgedAt = now;
      lastUpdatedAt = now;
      isActive = true;
    };
    pledges.add(caller, pledge);
    pledge;
  };

  /// Add to a caller's completed naam count. Returns the updated pledge, or
  /// null if the caller has no pledge.
  public func updateNaamPledgeProgress(
    pledges : Map.Map<Text, Types.NaamPledge>,
    caller : Text,
    additionalCount : Nat,
  ) : ?Types.NaamPledge {
    switch (pledges.get(caller)) {
      case (?existing) {
        let updated : Types.NaamPledge = {
          principalId = existing.principalId;
          displayName = existing.displayName;
          mantraName = existing.mantraName;
          pledgedCount = existing.pledgedCount;
          completedCount = existing.completedCount + additionalCount;
          pledgedAt = existing.pledgedAt;
          lastUpdatedAt = Time.now();
          isActive = existing.isActive;
        };
        pledges.add(caller, updated);
        ?updated;
      };
      case null null;
    };
  };

  /// Return a caller's naam pledge, if any.
  public func getNaamPledge(
    pledges : Map.Map<Text, Types.NaamPledge>,
    caller : Text,
  ) : ?Types.NaamPledge {
    pledges.get(caller);
  };

  /// Return all community naam pledges.
  public func listNaamPledges(
    pledges : Map.Map<Text, Types.NaamPledge>,
  ) : [Types.NaamPledge] {
    let entries = pledges.toArray();
    Array.tabulate(entries.size(), func(i : Nat) : Types.NaamPledge {
      entries[i].1;
    });
  };

  // ─── Punya Profile (points / badges / streaks) ─────────────────────────────
  /// Return a caller's punya profile, if any.
  public func getPunyaProfile(
    punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
    caller : Text,
  ) : ?Types.PunyaProfile {
    punyaProfiles.get(caller);
  };

  /// Add points to a caller's punya profile, creating it on first use.
  public func addPoints(
    punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
    caller : Text,
    points : Nat,
  ) : ?Types.PunyaProfile {
    let profile = ensureProfile(punyaProfiles, caller);
    let updated : Types.PunyaProfile = {
      principalId = profile.principalId;
      totalPoints = profile.totalPoints + points;
      currentStreakDays = profile.currentStreakDays;
      longestStreakDays = profile.longestStreakDays;
      badges = profile.badges;
      lastActivityAt = Time.now();
    };
    punyaProfiles.add(caller, updated);
    ?updated;
  };

  /// Award a badge to a caller's punya profile. Idempotent: a badge with the
  /// same id is not added twice.
  public func awardBadge(
    punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
    caller : Text,
    badge : Types.Badge,
  ) : ?Types.PunyaProfile {
    let profile = ensureProfile(punyaProfiles, caller);
    let alreadyHas = profile.badges.any(func(b : Types.Badge) : Bool { b.id == badge.id });
    let updated : Types.PunyaProfile = {
      principalId = profile.principalId;
      totalPoints = profile.totalPoints;
      currentStreakDays = profile.currentStreakDays;
      longestStreakDays = profile.longestStreakDays;
      badges = if alreadyHas { profile.badges } else {
        profile.badges.concat([badge]);
      };
      lastActivityAt = Time.now();
    };
    punyaProfiles.add(caller, updated);
    ?updated;
  };

  /// Initialize (or reset to empty) a caller's punya profile.
  public func initPunyaProfile(
    punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
    caller : Text,
  ) : Types.PunyaProfile {
    let profile : Types.PunyaProfile = {
      principalId = caller;
      totalPoints = 0;
      currentStreakDays = 0;
      longestStreakDays = 0;
      badges = [];
      lastActivityAt = Time.now();
    };
    punyaProfiles.add(caller, profile);
    profile;
  };

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  /// Get a caller's profile, creating an empty one on first access.
  func ensureProfile(
    punyaProfiles : Map.Map<Text, Types.PunyaProfile>,
    caller : Text,
  ) : Types.PunyaProfile {
    switch (punyaProfiles.get(caller)) {
      case (?p) p;
      case null {
        let fresh : Types.PunyaProfile = {
          principalId = caller;
          totalPoints = 0;
          currentStreakDays = 0;
          longestStreakDays = 0;
          badges = [];
          lastActivityAt = Time.now();
        };
        punyaProfiles.add(caller, fresh);
        fresh;
      };
    };
  };

  /// Award streak-based quiz badges. Only adds badges the user does not
  /// already hold.
  func awardQuizBadges(existing : [Types.Badge], newStreak : Nat, now : Int) : [Types.Badge] {
    let toAward = badgeDefinitionsForStreak(newStreak);
    let newOnes = toAward.filter(func(b : Types.Badge) : Bool {
      not existing.any(func(e : Types.Badge) : Bool { e.id == b.id });
    });
    if (newOnes.size() == 0) { return existing };
    // Stamp earnedAt on the newly awarded badges.
    let stamped = newOnes.map(func(b : Types.Badge) : Types.Badge {
      { b with earnedAt = now };
    });
    existing.concat(stamped);
  };

  /// Deterministic date → pool index. Sums the character codes of the date
  /// text and reduces mod poolSize, so the same date always maps to the same
  /// quiz across all callers.
  func dateToIndex(date : Text, poolSize : Nat) : Nat {
    var sum : Nat = 0;
    for (ch in date.toIter()) {
      sum += charCode(ch);
    };
    Nat.rem(sum, poolSize);
  };

  /// Approximate char → Nat code (folded to a non-negative Nat). Uses the
  /// Char's Nat representation via Text round-trip is avoided; we use the
  /// built-in `Char.toNat32`-free path: compare against a small table is
  /// overkill, so we rely on the numeric value of the character through
  /// `Text.encodeUtf8` would be heavy. Instead, we use the simple fact that
  /// Motoko `Char` values can be compared to a known set; here we just sum a
  /// stable per-character weight derived from the char's position in a fixed
  /// alphabet. For ASCII dates (digits and `-`) this is exact and stable.
  func charCode(ch : Char) : Nat {
    // ASCII digit / dash mapping — dates are YYYY-MM-DD so only these chars
    // appear. This keeps the hash stable and implementation-independent.
    switch (ch) {
      case '0' 0;
      case '1' 1;
      case '2' 2;
      case '3' 3;
      case '4' 4;
      case '5' 5;
      case '6' 6;
      case '7' 7;
      case '8' 8;
      case '9' 9;
      case '-' 10;
      case _ 11;
    };
  };

  /// Strip the `quiz-YYYY-MM-DD` prefix to recover the pool id. If the id is
  /// already a pool id, return it unchanged.
  func quizIdToPoolId(quizId : Text) : Text {
    let pool = quizPoolIds();
    // Direct pool-id match
    if (pool.any(func(p : Text) : Bool { p == quizId })) { return quizId };
    // Otherwise treat as a daily id and re-derive from its date suffix
    let date = extractDateFromQuizId(quizId);
    let poolSize = pool.size();
    if (poolSize == 0) { return quizId };
    let idx = dateToIndex(date, poolSize);
    pool[idx];
  };

  /// Extract the YYYY-MM-DD suffix from a `quiz-YYYY-MM-DD` id. Falls back to
  /// the whole id if the shape is unexpected.
  func extractDateFromQuizId(quizId : Text) : Text {
    switch (quizId.stripStart(#text "quiz-")) {
      case (?rest) rest;
      case null quizId;
    };
  };

  // ─── Static seed data ───────────────────────────────────────────────────────
  /// Canonical ids of the 18 satsang circles. Order is significant: it is the
  /// display order used by `listSatsangCircles` and `listCircleIds`.
  func circleIdList() : [Text] {
    [
      "gita-study",
      "mantra-japa",
      "festival-prep",
      "newcomers-dharma",
      "bhagavata-katha",
      "veda-study",
      "upanishad-reflection",
      "purana-circle",
      "naam-sankirtan",
      "sanskrit-learning",
      "yoga-meditation",
      "karma-yoga",
      "bhakti-marg",
      "jnana-marg",
      "pitru-tarpana",
      "temple-seva",
      "vrata-upavasa",
      "shastra-discussion",
    ];
  };

  /// Metadata for the 18 satsang circles. Order matches `circleIdList`.
  func circleSeedData() : [Types.SatsangCircle] {
    [
      { id = "gita-study"; name = "Bhagavad Gita Study"; description = "Verse-by-verse study and reflection on the Bhagavad Gita"; memberCount = 0; iconGlyph = "ॐ" },
      { id = "mantra-japa"; name = "Mantra Japa Circle"; description = "Daily mantra japa practice, counts, and encouragement"; memberCount = 0; iconGlyph = "🕉" },
      { id = "festival-prep"; name = "Festival Preparations"; description = "Plan and learn about upcoming Hindu festivals together"; memberCount = 0; iconGlyph = "🪔" },
      { id = "newcomers-dharma"; name = "Newcomers to Dharma"; description = "A welcoming space for those new to Hindu practice"; memberCount = 0; iconGlyph = "🌱" },
      { id = "bhagavata-katha"; name = "Bhagavata Katha"; description = "Stories and teachings from the Srimad Bhagavatam"; memberCount = 0; iconGlyph = "📖" },
      { id = "veda-study"; name = "Veda Study"; description = "Exploring the four Vedas and their hymns"; memberCount = 0; iconGlyph = "📜" },
      { id = "upanishad-reflection"; name = "Upanishad Reflection"; description = "Contemplating the wisdom of the Upanishads"; memberCount = 0; iconGlyph = "🪷" },
      { id = "purana-circle"; name = "Purana Circle"; description = "Discussions on the 18 Maha Puranas"; memberCount = 0; iconGlyph = "📚" },
      { id = "naam-sankirtan"; name = "Naam Sankirtan"; description = "Collective chanting and kirtan of the holy name"; memberCount = 0; iconGlyph = "🎵" },
      { id = "sanskrit-learning"; name = "Sanskrit Learning"; description = "Learn Devanagari and Sanskrit for shastra reading"; memberCount = 0; iconGlyph = "✍️" },
      { id = "yoga-meditation"; name = "Yoga & Meditation"; description = "Asana, pranayama, and dhyana practice circle"; memberCount = 0; iconGlyph = "🧘" },
      { id = "karma-yoga"; name = "Karma Yoga"; description = "The path of selfless action and seva"; memberCount = 0; iconGlyph = "🤲" },
      { id = "bhakti-marg"; name = "Bhakti Marg"; description = "The path of devotion and love for the Divine"; memberCount = 0; iconGlyph = "❤️" },
      { id = "jnana-marg"; name = "Jnana Marg"; description = "The path of knowledge and self-inquiry"; memberCount = 0; iconGlyph = "💡" },
      { id = "pitru-tarpana"; name = "Pitru Tarpana"; description = "Ancestral rites, tarpana, and shraddha discussions"; memberCount = 0; iconGlyph = "🕯️" },
      { id = "temple-seva"; name = "Temple Seva"; description = "Coordinating temple service and community seva"; memberCount = 0; iconGlyph = "🛕" },
      { id = "vrata-upavasa"; name = "Vrata & Upavasa"; description = "Vows, fasting days, and their observance"; memberCount = 0; iconGlyph = "🌕" },
      { id = "shastra-discussion"; name = "Shastra Discussion"; description = "Open discussion across all Hindu scriptures"; memberCount = 0; iconGlyph = "⚖️" },
    ];
  };

  /// Pool ids for the 32 quiz questions. Order is significant: it is the
  /// rotation order used by `dateToIndex`.
  func quizPoolIds() : [Text] {
    [
      "quiz-pool-01", "quiz-pool-02", "quiz-pool-03", "quiz-pool-04", "quiz-pool-05",
      "quiz-pool-06", "quiz-pool-07", "quiz-pool-08", "quiz-pool-09", "quiz-pool-10",
      "quiz-pool-11", "quiz-pool-12", "quiz-pool-13", "quiz-pool-14", "quiz-pool-15",
      "quiz-pool-16", "quiz-pool-17", "quiz-pool-18", "quiz-pool-19", "quiz-pool-20",
      "quiz-pool-21", "quiz-pool-22", "quiz-pool-23", "quiz-pool-24", "quiz-pool-25",
      "quiz-pool-26", "quiz-pool-27", "quiz-pool-28", "quiz-pool-29", "quiz-pool-30",
      "quiz-pool-31", "quiz-pool-32",
    ];
  };

  /// 32 quiz questions covering Gita, Vedas, Puranas, festivals, and mantras.
  /// Each cites its source granth and verse per the trust-through-source rule.
  func quizSeedData() : [Types.QuizQuestion] {
    [
      { id = "quiz-pool-01"; date = ""; question = "In the Bhagavad Gita, what does Lord Krishna urge Arjuna to do without attachment to the fruits?"; options = ["Bhakti Yoga", "Karma Yoga", "Jnana Yoga", "Raja Yoga"]; correctIndex = 1; explanation = "Karmanye vadhikaraste Ma Phaleshu Kadachana — act without attachment to results."; sourceGranth = "Bhagavad Gita"; sourceVerse = "2.47"; points = 10 },
      { id = "quiz-pool-02"; date = ""; question = "How many chapters are in the Bhagavad Gita?"; options = ["12", "15", "18", "21"]; correctIndex = 2; explanation = "The Gita has 18 chapters, narrated across the Kurukshetra battlefield."; sourceGranth = "Bhagavad Gita"; sourceVerse = "Overview"; points = 5 },
      { id = "quiz-pool-03"; date = ""; question = "Which chapter of the Gita is also called the 'Yoga of the Field and the Knower of the Field'?"; options = ["Chapter 11", "Chapter 13", "Chapter 15", "Chapter 17"]; correctIndex = 1; explanation = "Chapter 13 discusses Kshetra (the field, the body) and Kshetrajna (the knower, the soul)."; sourceGranth = "Bhagavad Gita"; sourceVerse = "13.1"; points = 10 },
      { id = "quiz-pool-04"; date = ""; question = "What is the opening word of the Bhagavad Gita?"; options = ["Om", "Dharmakshetre", "Arjuna", "Krishna"]; correctIndex = 1; explanation = "The Gita begins with 'Dharmakshetre Kurukshetre' — in the field of dharma, Kurukshetra."; sourceGranth = "Bhagavad Gita"; sourceVerse = "1.1"; points = 5 },
      { id = "quiz-pool-05"; date = ""; question = "Which form of yoga does Krishna call the 'most confidential knowledge' in Chapter 9?"; options = ["Karma Yoga", "Raja Yoga", "Bhakti Yoga", "Jnana Yoga"]; correctIndex = 2; explanation = "Chapter 9, Raja Vidya Yoga, presents Bhakti as the king of knowledge."; sourceGranth = "Bhagavad Gita"; sourceVerse = "9.1"; points = 10 },
      { id = "quiz-pool-06"; date = ""; question = "How many Vedas are there in the traditional Hindu canon?"; options = ["Two", "Three", "Four", "Five"]; correctIndex = 2; explanation = "The four Vedas are Rig, Yajur, Sama, and Atharva."; sourceGranth = "Rig Veda"; sourceVerse = "Traditional canon"; points = 5 },
      { id = "quiz-pool-07"; date = ""; question = "Which Veda is composed primarily of melodies meant to be sung?"; options = ["Rig Veda", "Yajur Veda", "Sama Veda", "Atharva Veda"]; correctIndex = 2; explanation = "The Sama Veda is the Veda of song and melody, much of it drawn from the Rig."; sourceGranth = "Sama Veda"; sourceVerse = "Overview"; points = 10 },
      { id = "quiz-pool-08"; date = ""; question = "The Gayatri Mantra is addressed to which deity?"; options = ["Agni", "Savitr (the Sun)", "Indra", "Varuna"]; correctIndex = 1; explanation = "Gayatri invokes Savitr, the radiant aspect of the Sun, for illumination of the intellect."; sourceGranth = "Rig Veda"; sourceVerse = "3.62.10"; points = 10 },
      { id = "quiz-pool-09"; date = ""; question = "Which Upanishad begins with the invocation 'Om! That (Brahman) is whole, this (universe) is whole...'?"; options = ["Isha Upanishad", "Katha Upanishad", "Mandukya Upanishad", "Chandogya Upanishad"]; correctIndex = 0; explanation = "The Isha Upanishad opens with the famous purnamidam mantra on wholeness."; sourceGranth = "Isha Upanishad"; sourceVerse = "Invocation (Shanti mantra)"; points = 10 },
      { id = "quiz-pool-10"; date = ""; question = "In the Katha Upanishad, who teaches the boy Nachiketa about the nature of the Self?"; options = ["Yama", "Indra", "Agni", "Varuna"]; correctIndex = 0; explanation = "Nachiketa descends to Yama, lord of death, who instructs him on the Self (Atman)."; sourceGranth = "Katha Upanishad"; sourceVerse = "1.1"; points = 10 },
      { id = "quiz-pool-11"; date = ""; question = "How many Maha Puranas are traditionally counted?"; options = ["12", "18", "24", "108"]; correctIndex = 1; explanation = "There are 18 Maha Puranas, including Bhagavata, Vishnu, Shiva, and Garuda."; sourceGranth = "Bhagavata Purana"; sourceVerse = "Traditional canon"; points = 5 },
      { id = "quiz-pool-12"; date = ""; question = "The Srimad Bhagavatam is primarily dedicated to which avatara?"; options = ["Rama", "Krishna", "Narasimha", "Vamana"]; correctIndex = 1; explanation = "The Bhagavatam glorifies the lilas of Lord Krishna, especially in Canto 10."; sourceGranth = "Bhagavata Purana"; sourceVerse = "Canto 1.1"; points = 10 },
      { id = "quiz-pool-13"; date = ""; question = "Which festival marks the birth of Lord Rama?"; options = ["Janmashtami", "Rama Navami", "Diwali", "Holi"]; correctIndex = 1; explanation = "Rama Navami celebrates the appearance of Lord Rama on Chaitra Shukla Navami."; sourceGranth = "Ramayana"; sourceVerse = "Balakanda"; points = 5 },
      { id = "quiz-pool-14"; date = ""; question = "Diwali commemorates, among other events, the return of which duo to Ayodhya?"; options = ["Rama and Sita", "Krishna and Rukmini", "Pandavas", "Harishchandra"]; correctIndex = 0; explanation = "Diwali celebrates Rama and Sita's return to Ayodhya after 14 years of exile."; sourceGranth = "Ramayana"; sourceVerse = "Yuddhakanda"; points = 5 },
      { id = "quiz-pool-15"; date = ""; question = "Holi is most associated with the divine play of which deity?"; options = ["Rama", "Krishna", "Shiva", "Ganesha"]; correctIndex = 1; explanation = "Holi recalls Krishna's raas and the colours of Vrindavan's spring festival."; sourceGranth = "Bhagavata Purana"; sourceVerse = "Canto 10"; points = 5 },
      { id = "quiz-pool-16"; date = ""; question = "Which festival observes a single-night vigil and worship of Lord Shiva?"; options = ["Maha Shivaratri", "Krishna Janmashtami", "Navaratri", "Ganesh Chaturthi"]; correctIndex = 0; explanation = "Maha Shivaratri is the great night of Shiva, observed with fasting and jagran."; sourceGranth = "Shiva Purana"; sourceVerse = "Traditional observance"; points = 5 },
      { id = "quiz-pool-17"; date = ""; question = "Navaratri is dedicated to the worship of which form of the Divine?"; options = ["Vishnu", "Shiva", "Devi (Durga)", "Ganesha"]; correctIndex = 2; explanation = "Navaratri worships Devi in her nine forms over nine nights."; sourceGranth = "Devi Mahatmya"; sourceVerse = "Markandeya Purana, chapters 81-93"; points = 10 },
      { id = "quiz-pool-18"; date = ""; question = "The mantra 'Om Namah Shivaya' is a salutation to which deity?"; options = ["Vishnu", "Shiva", "Ganesha", "Surya"]; correctIndex = 1; explanation = "The Panchakshari mantra 'Om Namah Shivaya' honours Lord Shiva."; sourceGranth = "Yajur Veda"; sourceVerse = "Sri Rudram (Taittiriya Samhita 4.5)"; points = 10 },
      { id = "quiz-pool-19"; date = ""; question = "The mantra 'Om Namo Narayanaya' is dedicated to which deity?"; options = ["Shiva", "Vishnu", "Surya", "Agni"]; correctIndex = 1; explanation = "The Ashtakshari mantra 'Om Namo Narayanaya' is the principal mantra of Vishnu worship."; sourceGranth = "Vishnu Purana"; sourceVerse = "Traditional mantra"; points = 10 },
      { id = "quiz-pool-20"; date = ""; question = "How many times is the Gayatri mantra traditionally chanted per session?"; options = ["11", "27", "108", "1008"]; correctIndex = 2; explanation = "A standard japa of Gayatri uses a 108-bead mala, completing one round."; sourceGranth = "Rig Veda"; sourceVerse = "3.62.10"; points = 5 },
      { id = "quiz-pool-21"; date = ""; question = "Which of these is the Mahamantra chanted in sankirtan?"; options = ["Om Namah Shivaya", "Hare Krishna Maha Mantra", "Om Namo Narayanaya", "Gayatri Mantra"]; correctIndex = 1; explanation = "The Hare Krishna Maha Mantra: Hare Krishna Hare Krishna, Krishna Krishna Hare Hare..."; sourceGranth = "Kali Santarana Upanishad"; sourceVerse = "Traditional mantra"; points = 10 },
      { id = "quiz-pool-22"; date = ""; question = "In the Gita, who is called the 'Supreme Person' (Purushottama) beyond both perishable and imperishable?"; options = ["Arjuna", "Krishna", "Brahma", "Shiva"]; correctIndex = 1; explanation = "In Chapter 15, Krishna declares himself Purushottama, the Supreme Person."; sourceGranth = "Bhagavad Gita"; sourceVerse = "15.18"; points = 10 },
      { id = "quiz-pool-23"; date = ""; question = "The word 'Yoga' in the Gita primarily means what?"; options = ["Physical postures only", "Union with the Divine", "Breath control", "Renunciation"]; correctIndex = 1; explanation = "Yoga in the Gita means union — linking the individual soul with the Supreme."; sourceGranth = "Bhagavad Gita"; sourceVerse = "2.48"; points = 10 },
      { id = "quiz-pool-24"; date = ""; question = "Which of the four varnas is described in the Gita as the role of teachers and priests?"; options = ["Kshatriya", "Vaishya", "Brahmana", "Shudra"]; correctIndex = 2; explanation = "Brahmanas are the teachers and priests; the Gita describes the four varnas by qualities (guna) and actions (karma)."; sourceGranth = "Bhagavad Gita"; sourceVerse = "4.13"; points = 10 },
      { id = "quiz-pool-25"; date = ""; question = "The Mahabharata is traditionally attributed to which sage?"; options = ["Valmiki", "Vyasa", "Vashishtha", "Vishwamitra"]; correctIndex = 1; explanation = "Sage Vyasa (Krishna Dvaipayana) is credited with compiling the Mahabharata, of which the Gita is a part."; sourceGranth = "Mahabharata"; sourceVerse = "Adi Parva"; points = 5 },
      { id = "quiz-pool-26"; date = ""; question = "Which river is considered most sacred in Hindu tradition?"; options = ["Yamuna", "Saraswati", "Ganga", "Godavari"]; correctIndex = 2; explanation = "The Ganga (Ganges) is revered as the most sacred river, descended through Shiva's locks."; sourceGranth = "Ramayana"; sourceVerse = "Balakanda (Ganga's descent)"; points = 5 },
      { id = "quiz-pool-27"; date = ""; question = "The syllable 'Om' is described in which Upanishad as having four parts?"; options = ["Mandukya Upanishad", "Isha Upanishad", "Kena Upanishad", "Prashna Upanishad"]; correctIndex = 0; explanation = "The Mandukya Upanishad analyses Om as four quarters: waking, dream, deep sleep, and turiya."; sourceGranth = "Mandukya Upanishad"; sourceVerse = "1-12"; points = 10 },
      { id = "quiz-pool-28"; date = ""; question = "Which of these is one of the four ashramas (stages of life)?"; options = ["Brahmacharya", "Karma", "Bhakti", "Jnana"]; correctIndex = 0; explanation = "The four ashramas are Brahmacharya (student), Grihastha (householder), Vanaprastha, and Sannyasa."; sourceGranth = "Manusmriti"; sourceVerse = "Traditional framework"; points = 10 },
      { id = "quiz-pool-29"; date = ""; question = "What is the central teaching of the Bhagavad Gita's Chapter 16 on Daivasura Sampad?"; options = ["The path of devotion", "Divine vs demoniac natures", "The field and knower", "Cosmic vision"]; correctIndex = 1; explanation = "Chapter 16 contrasts divine qualities (daivi sampad) with demoniac ones (asuri sampad)."; sourceGranth = "Bhagavad Gita"; sourceVerse = "16.1-3"; points = 10 },
      { id = "quiz-pool-30"; date = ""; question = "Which festival celebrates the bond between brothers and sisters?"; options = ["Raksha Bandhan", "Bhai Dooj", "Both of these", "Neither"]; correctIndex = 2; explanation = "Both Raksha Bandhan (tying the rakhi) and Bhai Dooj celebrate the sibling bond."; sourceGranth = "Traditional observance"; sourceVerse = "Folk tradition"; points = 5 },
      { id = "quiz-pool-31"; date = ""; question = "The 'Neti Neti' (not this, not this) method of negation appears in which texts?"; options = ["The Puranas", "The Upanishads", "The Ramayana", "The Mahabharata"]; correctIndex = 1; explanation = "Neti Neti is the apophatic method of the Upanishads to approach Brahman by negation."; sourceGranth = "Brihadaranyaka Upanishad"; sourceVerse = "3.9.26 & 4.5.15"; points = 10 },
      { id = "quiz-pool-32"; date = ""; question = "Which of these is the first of the four purusharthas (goals of life)?"; options = ["Artha", "Kama", "Dharma", "Moksha"]; correctIndex = 2; explanation = "Dharma is the foundational purushartha; artha and kama are pursued within dharma, leading to moksha."; sourceGranth = "Traditional framework"; sourceVerse = "Purushartha doctrine"; points = 10 },
    ];
  };

  /// Streak-based badge definitions. Returns the badges a user becomes
  /// eligible for at the given streak length.
  func badgeDefinitionsForStreak(streak : Nat) : [Types.Badge] {
    let defs : [Types.Badge] = [
      { id = "first-quiz"; name = "First Step"; description = "Answered your first daily quiz"; iconGlyph = "🌟"; earnedAt = 0 },
      { id = "streak-7"; name = "Saptah Sādhak"; description = "Maintained a 7-day quiz streak"; iconGlyph = "🔥"; earnedAt = 0 },
      { id = "streak-30"; name = "Maas Sādhak"; description = "Maintained a 30-day quiz streak"; iconGlyph = "🏆"; earnedAt = 0 },
      { id = "streak-100"; name = "Shata Sādhak"; description = "Maintained a 100-day quiz streak"; iconGlyph = "👑"; earnedAt = 0 },
    ];
    defs.filter(func(b : Types.Badge) : Bool {
      if (b.id == "first-quiz") { true }
      else if (b.id == "streak-7") { streak >= 7 }
      else if (b.id == "streak-30") { streak >= 30 }
      else if (b.id == "streak-100") { streak >= 100 }
      else { false };
    });
  };
};
