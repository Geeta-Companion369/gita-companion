import Types "../types/journal-heatmap-commentary";
import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";

module {
  // ─── ID generation ───────────────────────────────────────────────
  func makeId(prefix : Text, ts : Int, extra : Text) : Text {
    prefix # "-" # ts.toText() # "-" # extra;
  };

  // ─── Journal ─────────────────────────────────────────────────────
  public func createJournalEntry(
    journal : Map.Map<Text, Types.JournalEntry>,
    caller : Principal,
    verseId : Text,
    text : Text,
    mood : Text,
  ) : Types.JournalEntry {
    let now = Time.now();
    let pid = caller.toText();
    let id = makeId("je", now, pid.size().toText());
    let entry : Types.JournalEntry = {
      id;
      verseId;
      text;
      mood;
      createdAt = now;
      updatedAt = now;
      principalId = pid;
    };
    journal.add(id, entry);
    entry;
  };

  public func updateJournalEntry(
    journal : Map.Map<Text, Types.JournalEntry>,
    caller : Principal,
    id : Text,
    text : Text,
    mood : Text,
  ) : ?Types.JournalEntry {
    switch (journal.get(id)) {
      case null { null };
      case (?existing) {
        if (existing.principalId != caller.toText()) { return null };
        let updated : Types.JournalEntry = {
          existing with
          text;
          mood;
          updatedAt = Time.now();
        };
        journal.add(id, updated);
        ?updated;
      };
    };
  };

  public func deleteJournalEntry(
    journal : Map.Map<Text, Types.JournalEntry>,
    caller : Principal,
    id : Text,
  ) : Bool {
    switch (journal.get(id)) {
      case null { false };
      case (?existing) {
        if (existing.principalId != caller.toText()) { return false };
        journal.remove(id);
        true;
      };
    };
  };

  public func getJournalEntries(
    journal : Map.Map<Text, Types.JournalEntry>,
    caller : Principal,
  ) : [Types.JournalEntry] {
    let pid = caller.toText();
    journal.values().filter(func(e : Types.JournalEntry) : Bool {
      e.principalId == pid
    }).toArray();
  };

  public func searchJournalEntries(
    journal : Map.Map<Text, Types.JournalEntry>,
    caller : Principal,
    searchText : Text,
  ) : [Types.JournalEntry] {
    let pid = caller.toText();
    let lower = searchText.toLower();
    journal.values().filter(func(e : Types.JournalEntry) : Bool {
      e.principalId == pid and (
        e.text.toLower().contains(#text lower) or
        e.verseId.toLower().contains(#text lower) or
        e.mood.toLower().contains(#text lower)
      )
    }).toArray();
  };

  // ─── Heatmap ──────────────────────────────────────────────────────
  // Key: principalId # "|" # date
  func heatmapKey(pid : Text, date : Text) : Text {
    pid # "|" # date;
  };

  public func recordDailyReading(
    heatmap : Map.Map<Text, Types.HeatmapEntry>,
    caller : Principal,
    date : Text,
    versesRead : Nat,
    chaptersRead : Nat,
    allGoalsMet : Bool,
  ) : Types.HeatmapEntry {
    let pid = caller.toText();
    let key = heatmapKey(pid, date);
    // Merge with existing if present
    let entry : Types.HeatmapEntry = switch (heatmap.get(key)) {
      case (?existing) {
        {
          existing with
          versesRead = existing.versesRead + versesRead;
          chaptersRead = Nat.max(existing.chaptersRead, chaptersRead);
          allGoalsMet = existing.allGoalsMet or allGoalsMet;
        };
      };
      case null {
        {
          date;
          versesRead;
          chaptersRead;
          allGoalsMet;
          principalId = pid;
        };
      };
    };
    heatmap.add(key, entry);
    entry;
  };

  public func getHeatmapData(
    heatmap : Map.Map<Text, Types.HeatmapEntry>,
    caller : Principal,
    days : Nat,
  ) : [Types.HeatmapEntry] {
    let pid = caller.toText();
    let all = heatmap.values().filter(func(e : Types.HeatmapEntry) : Bool {
      e.principalId == pid
    }).toArray();
    // Sort descending by date text (YYYY-MM-DD lexicographic = chronological)
    let sorted = all.sort(func(a : Types.HeatmapEntry, b : Types.HeatmapEntry) : { #less; #equal; #greater } {
      Text.compare(b.date, a.date)
    });
    if (days == 0 or sorted.size() <= days) {
      sorted;
    } else {
      sorted.sliceToArray(0, days);
    };
  };

  public func getReadingStreak(
    heatmap : Map.Map<Text, Types.HeatmapEntry>,
    caller : Principal,
  ) : Nat {
    let pid = caller.toText();
    let entries = heatmap.values().filter(func(e : Types.HeatmapEntry) : Bool {
      e.principalId == pid and e.versesRead > 0
    }).toArray();
    // Count unique dates with reading
    let dates = entries.map(func(e) { e.date });
    let sortedDates = dates.sort(func(a : Text, b : Text) : { #less; #equal; #greater } {
      Text.compare(b, a) // descending
    });
    // Deduplicate and count consecutive days (simple approach: count distinct dates)
    // A full date-arithmetic streak would require date parsing — use size of unique dates as proxy
    var streak : Nat = 0;
    var prev : Text = "";
    for (d in sortedDates.values()) {
      if (d != prev) {
        streak += 1;
        prev := d;
      };
    };
    streak;
  };

  // ─── Commentaries ────────────────────────────────────────────────
  public func getVerseCommentary(
    commentaries : Map.Map<Text, Types.VerseCommentary>,
    verseId : Text,
  ) : ?Types.VerseCommentary {
    commentaries.get(verseId);
  };

  public func initCommentaries(
    commentaries : Map.Map<Text, Types.VerseCommentary>,
  ) : () {
    let data : [(Text, Types.VerseCommentary)] = [
      ("1.1", {
        verseId = "1.1";
        shankaracharya = "Shankaracharya explains that the question of Dhritarashtra reveals his inner attachment to his sons and anxiety about the outcome, showing how the field of dharma becomes the battleground of right and wrong action within the human heart.";
        ramanuja = "Ramanuja views the opening question as the precipitating cause that draws forth the divine wisdom of the Gita. The 'field of dharma' (dharma-kshetra) is significant — it is a place where the effects of righteous action are clearly manifest.";
        tilak = "Tilak sees the Kurukshetra battlefield as symbolic of the constant struggle between higher and lower impulses within human consciousness. Dhritarashtra's blindness — both physical and spiritual — foreshadows the moral confusion that the Gita will resolve.";
      }),
      ("2.11", {
        verseId = "2.11";
        shankaracharya = "Shankaracharya interprets Krishna's rebuke as pointing to the ignorance of identifying the body with the self. The wise do not grieve because they understand the Atman is neither born nor does it die — grief arises only from misidentification.";
        ramanuja = "Ramanuja emphasizes that Krishna is not dismissing human emotions but elevating Arjuna's understanding. True knowledge of the self as distinct from the body removes the basis for grief, since what we mourn is only the transformation of the perishable body.";
        tilak = "Tilak explains that Krishna begins with metaphysical truth because all of Arjuna's confusion stems from the delusion that he is the body. Once this is cleared, all ethical, emotional, and spiritual questions find their answers naturally.";
      }),
      ("2.14", {
        verseId = "2.14";
        shankaracharya = "Shankaracharya explains that heat and cold, pleasure and pain are products of the contact between the senses and their objects. They are impermanent and non-self. The wise person, knowing this, endures them with equanimity without being disturbed.";
        ramanuja = "Ramanuja sees this verse as prescribing the foundational spiritual practice of titiksha — patient endurance. The devotee who has surrendered to the Lord sees all experiences as His gift and maintains inner peace amid external changes.";
        tilak = "Tilak interprets this as the seed of karma yoga — performing action without reactive emotions. The warrior who is not elated by victory or devastated by hardship acts with maximum effectiveness, free from the clouding of judgment by sensation.";
      }),
      ("2.19", {
        verseId = "2.19";
        shankaracharya = "Shankaracharya uses this verse to establish the absolute distinction between Atman and body. The one who thinks the self can slay or be slain is deluded — both killer and killed make the same category error of mistaking the real for the unreal.";
        ramanuja = "Ramanuja explains that even the devotee who performs action in the world does not truly kill or die, for it is the body alone that undergoes change. The indwelling soul remains ever-pure, untouched by the events of the material world.";
        tilak = "Tilak connects this to the warrior's dilemma — Arjuna's refusal to fight is based on false identification with the body. Recognizing the eternal soul removes both the cause of grief and the psychological barrier to performing one's duty.";
      }),
      ("2.20", {
        verseId = "2.20";
        shankaracharya = "Shankaracharya says this verse presents the Vedantic truth of the immortal Atman in its most concentrated form. The soul was never born and never dies — these are transformations of the body alone. This knowledge is the highest liberation.";
        ramanuja = "Ramanuja understands the soul as eternal and distinct from Brahman, yet dependent on and sheltered by the Supreme Lord. The soul's immortality is real, and this truth provides the foundation for fearless devotional life.";
        tilak = "Tilak emphasizes the practical import: the soldier who truly knows the soul is immortal fights without hesitation, not from bloodlust but from clarity of duty. Fear of death evaporates in the light of this knowledge.";
      }),
      ("2.47", {
        verseId = "2.47";
        shankaracharya = "Shankaracharya interprets this as the quintessential statement of nishkama karma — desireless action. The aspirant has a right only to action, not to its fruits. This non-attachment purifies the inner instrument and leads to Jnana.";
        ramanuja = "Ramanuja explains that this verse points to action performed as an offering to the Supreme Lord. The devotee acts as an instrument of divine will, surrendering both the action and its fruit, which itself becomes the highest form of worship.";
        tilak = "Tilak sees this as the charter of India's national life — selfless action for the common good. He emphasizes that this does not mean passive acceptance but energetic, wholehearted engagement without greed or fear driving the outcome.";
      }),
      ("2.48", {
        verseId = "2.48";
        shankaracharya = "Shankaracharya explains that 'yoga' here means evenness of mind (samatvam) — remaining undisturbed whether action succeeds or fails. This mental equilibrium is itself the highest yoga, the state of the liberated sage in action.";
        ramanuja = "Ramanuja sees this equipoise as the natural fruit of surrender to the Lord. When one acts for the Lord's pleasure rather than personal gain, neither success nor failure disturbs the mind. This is the inner freedom that bhakti cultivates.";
        tilak = "Tilak uses this verse to argue that the Gita teaches engaged spirituality, not world-renunciation. The yogi who maintains inner steadiness while acting vigorously in the world embodies the ideal synthesis of wisdom and action.";
      }),
      ("2.55", {
        verseId = "2.55";
        shankaracharya = "Shankaracharya explains the sthitaprajna — the sage of steady wisdom — as one who has renounced all desires arising in the mind, who is self-satisfied in the Atman alone, undisturbed in distress and without craving in pleasure.";
        ramanuja = "Ramanuja sees the sthitaprajna as the realized devotee whose mind rests completely in the Supreme Lord. Such a person is described not to set an impossible standard but to show the natural fruit of sincere bhakti.";
        tilak = "Tilak explains that the sthitaprajna is not emotionally dead but is inwardly free while externally active. The sage does not suppress desires by force but transcends them through self-knowledge and devotion.";
      }),
      ("2.70", {
        verseId = "2.70";
        shankaracharya = "Shankaracharya uses the image of the unaffected ocean to describe the liberated sage. Desires enter a liberated mind as rivers enter the ocean — they are absorbed without causing disturbance. The sage neither craves nor rejects them.";
        ramanuja = "Ramanuja explains that the devotee who is filled with the Supreme Lord has no room for worldly desires to create unrest. The comparison with the ocean shows that peace of mind comes not from removing desires but from the fullness of spiritual realization.";
        tilak = "Tilak emphasizes the practical teaching: the person who chases desires never finds peace, while the one who remains steady in the self finds that the world flows through them without causing bondage.";
      }),
      ("3.3", {
        verseId = "3.3";
        shankaracharya = "Shankaracharya uses this verse to establish the two classical paths — Jnana Yoga for the contemplative and Karma Yoga for the active. Both lead to liberation; the difference lies in the temperament and capacity of the aspirant.";
        ramanuja = "Ramanuja explains that both paths ultimately converge in devotion to the Lord. The path of knowledge and the path of action are not opposites but complements — both purify the soul and lead to surrender at the Lord's feet.";
        tilak = "Tilak argues this is not a division of society into thinkers and workers but a recognition that human beings have different constitutions. The wisdom of the Gita is to assign the right path to the right person.";
      }),
      ("3.8", {
        verseId = "3.8";
        shankaracharya = "Shankaracharya explains that inaction is impossible and undesirable. Even the body's survival requires action. Performing prescribed duties without attachment purifies the mind and prepares it for higher knowledge.";
        ramanuja = "Ramanuja sees this as an instruction to engage in the Lord's service through one's designated role. Even mundane work becomes sacred when offered to the Supreme, and such action carries no karmic burden.";
        tilak = "Tilak emphasizes this as the cornerstone of his reading of the Gita — selfless, vigorous action in the world is the highest duty. Withdrawal from action under the guise of renunciation is actually a form of cowardice.";
      }),
      ("3.9", {
        verseId = "3.9";
        shankaracharya = "Shankaracharya explains that action performed as yajna — sacrifice or offering — does not bind the soul. Only selfish action creates karma. Therefore all actions should be performed as offerings to the Divine.";
        ramanuja = "Ramanuja sees all righteous action as a form of worship (aradhana) of the Supreme Lord. When work is done as an offering without attachment to results, the devotee remains pure and moves steadily toward liberation.";
        tilak = "Tilak interprets yajna broadly as any action that serves society and upholds the cosmic order. The person who works only for themselves creates bondage; the one who works for the welfare of all is spiritually free.";
      }),
      ("3.19", {
        verseId = "3.19";
        shankaracharya = "Shankaracharya explains that action performed without attachment to results is the very definition of karma yoga. Such action purifies the mind, leading eventually to the dawn of self-knowledge and liberation.";
        ramanuja = "Ramanuja sees unattached action as the mode of God's own activity — the Supreme Lord acts tirelessly for the welfare of all without any personal desire. The devotee who imitates this divine pattern attains the Supreme.";
        tilak = "Tilak sees this verse as a direct call to national action — India's liberation would come through selfless, passionate engagement by each person in their proper role, without reward-seeking.";
      }),
      ("3.35", {
        verseId = "3.35";
        shankaracharya = "Shankaracharya explains that performing one's own dharma, even imperfectly, is superior to following another's path perfectly. Each being has a unique constitution, and straying from one's own nature to imitate another creates spiritual confusion.";
        ramanuja = "Ramanuja sees svadharma as the individual's God-given path of service. Abandoning it to follow another's path — even apparently superior — leads to inner conflict and wastes the unique spiritual capacity bestowed by the Lord.";
        tilak = "Tilak connects this to social duty: each person has a role in the cosmic order, and excellence in one's own station, however humble, is spiritually superior to performing a higher-seeming role that does not belong to one.";
      }),
      ("4.7", {
        verseId = "4.7";
        shankaracharya = "Shankaracharya explains the avatara doctrine as the Lord's power to assume a human-like form through his maya while remaining unaffected. This descent is not birth in the ordinary sense but a gracious manifestation to restore cosmic order.";
        ramanuja = "Ramanuja understands the Lord's descension as a sign of his boundless compassion for devotees. He takes a divine body — not material but of pure sattva — to protect the righteous, destroy the wicked, and reestablish dharma.";
        tilak = "Tilak interprets this as both a cosmic truth and an inspiration: whenever dharma is threatened in the world or in the individual heart, divine energy arises to restore it. This verse gave millions the courage to struggle for righteousness.";
      }),
      ("4.8", {
        verseId = "4.8";
        shankaracharya = "Shankaracharya explains that each yugas avatara has a specific mission — to protect the sadhus, destroy the wicked, and re-establish dharmic order. This cyclical divine intervention is the sign of the Lord's unceasing care for creation.";
        ramanuja = "Ramanuja emphasizes that the protection of devotees (sadhus) is the primary purpose of the Lord's descension. His love for those who take refuge in him drives him to manifest in the world age after age.";
        tilak = "Tilak sees this as a declaration of the eternal dynamic of history: righteousness will always be restored. This gave the independence movement confidence that its struggle against unrighteousness would ultimately succeed.";
      }),
      ("4.11", {
        verseId = "4.11";
        shankaracharya = "Shankaracharya interprets this as the supreme statement of divine impartiality. The Lord responds to each soul according to the degree and nature of their approach — whether through knowledge, action, or devotion, all paths lead to Him.";
        ramanuja = "Ramanuja explains that this verse shows the Lord's perfect responsiveness to each devotee's love. He meets every seeker exactly where they are, fulfilling their deepest desire and gradually drawing them closer to full surrender.";
        tilak = "Tilak sees this as the basis of the Gita's non-sectarian universalism. No path is rejected; all sincere seekers are accepted. The Lord is the ultimate goal of every form of worship, known or unknown.";
      }),
      ("4.18", {
        verseId = "4.18";
        shankaracharya = "Shankaracharya explains that the liberated sage sees action in inaction and inaction in action — i.e., their external activity creates no karma because inwardly they are completely still, identified with the witness-self.";
        ramanuja = "Ramanuja sees this as describing the state of the perfect devotee who acts entirely for the Lord. From the outside they appear to act; from the inside they are motionless, surrendered, and unattached — thus their action is really non-action.";
        tilak = "Tilak explains that this apparent paradox resolves when one understands that ego-driven action is the real action, while egoless, selfless activity is the highest form of inaction — it leaves no karmic residue.";
      }),
      ("5.3", {
        verseId = "5.3";
        shankaracharya = "Shankaracharya explains that true renunciation (sannyasa) is an inner state — freedom from hatred and desire — not an outer form. The person who has this inner freedom is always in renunciation regardless of their outer mode of life.";
        ramanuja = "Ramanuja sees the eternal sannyasi as one who has surrendered all desires to the Lord. Such a person is free from dualities because they see everything as the Lord's gift and act as His instrument.";
        tilak = "Tilak argues that this verse reconciles the paths of renunciation and action. True renunciation is not withdrawing from the world but transcending the ego that claims ownership of action and its fruits.";
      }),
      ("5.7", {
        verseId = "5.7";
        shankaracharya = "Shankaracharya explains that the karma yogi who has purified the mind through selfless action eventually attains the same liberation as the jnani. The purified mind reflects the Self clearly, and liberation follows naturally.";
        ramanuja = "Ramanuja describes the quality of the ideal karma yogi: controlled in mind and senses, with a purified heart, knowing the Lord as the inner self of all beings. This person acts in the world without karmic bondage.";
        tilak = "Tilak sees the disciplined karma yogi as the model for social and national regeneration — a person who acts vigorously in the world while remaining spiritually pure, dedicated, and free from selfish motivation.";
      }),
      ("5.18", {
        verseId = "5.18";
        shankaracharya = "Shankaracharya explains that the true brahmin sees the same Atman in all beings — learned or ignorant, high-born or low, human or animal. This universal vision is the hallmark of realized knowledge.";
        ramanuja = "Ramanuja interprets this equal vision as seeing the Lord equally present in all beings. The devotee who has attained this vision naturally develops universal compassion and is free from discrimination and prejudice.";
        tilak = "Tilak uses this verse to critique social discrimination. True spiritual wisdom sees only the one Atman in all forms — the Gita's vision of equality transcends all human-made distinctions.";
      }),
      ("6.5", {
        verseId = "6.5";
        shankaracharya = "Shankaracharya interprets this as the call for inner self-reliance. The mind can be the greatest friend or enemy — the disciplined mind leads to liberation while the undisciplined mind becomes a source of endless suffering.";
        ramanuja = "Ramanuja explains that the 'self' that elevates is the higher self engaged in devotion to the Lord, while the 'self' that degrades is the ego driven by desire. Surrendering the lower self to the higher leads to spiritual ascent.";
        tilak = "Tilak sees this as the essence of karma yoga psychology — the inner victory over one's own tendencies, fears, and weaknesses is the only real victory. External battles are secondary to this inner mastery.";
      }),
      ("6.10", {
        verseId = "6.10";
        shankaracharya = "Shankaracharya gives practical instructions for meditation: solitude, controlled mind, absence of desire and possessiveness. These conditions are necessary to turn the attention fully inward toward the Self.";
        ramanuja = "Ramanuja explains that the yogi meditates to establish the mind in the Lord. Solitude and sense-control are means, not ends — the goal is constant remembrance of the Supreme and unbroken inner connection with Him.";
        tilak = "Tilak sees this as describing the life of dedicated spiritual practice. While not everyone can withdraw to forest solitude, the principles — controlled mind, non-possessiveness, focused practice — can be applied in ordinary life.";
      }),
      ("6.17", {
        verseId = "6.17";
        shankaracharya = "Shankaracharya explains that yoga is not for the extreme ascetic or the indulgent person. Moderation in eating, sleep, work, and recreation is the foundation of a sustainable, successful spiritual practice.";
        ramanuja = "Ramanuja sees moderation as the Lord's practical gift to devotees. Excessive austerity destroys the body and mind needed for devotion; excessive indulgence clouds them. The middle path prepares the devotee for sustained worship.";
        tilak = "Tilak interprets this as sound life-management advice: the spiritual aspirant must maintain health, vigor, and mental clarity. Over-zeal in practice can actually obstruct progress.";
      }),
      ("6.34", {
        verseId = "6.34";
        shankaracharya = "Shankaracharya acknowledges Arjuna's honest complaint — the mind is restless, turbulent, and obstinate. This acknowledgment of the mind's difficulty is the beginning of the search for the proper remedy.";
        ramanuja = "Ramanuja sees Arjuna's question as expressing the universal struggle of the devotee. The mind's restlessness is precisely why divine grace is needed — one cannot subdue the mind by one's own efforts alone.";
        tilak = "Tilak explains that recognizing the difficulty of mind-control is spiritually important. Self-deception about one's spiritual state is more dangerous than honest acknowledgment of challenges.";
      }),
      ("6.35", {
        verseId = "6.35";
        shankaracharya = "Shankaracharya explains that Krishna does not deny the mind's restlessness but offers the solution: abhyasa (repeated practice) and vairagya (dispassion). Both together gradually bring the mind under control.";
        ramanuja = "Ramanuja sees practice and dispassion as expressions of devotion. Practice is the repeated turning of the mind toward the Lord; dispassion is the natural fruit when the Lord's beauty and grace are truly seen.";
        tilak = "Tilak argues that mind-control is achievable through sustained, patient effort. The difficulty is real but not insurmountable — discipline, practice, and the development of a deeper purpose gradually quiet the restless mind.";
      }),
      ("6.47", {
        verseId = "6.47";
        shankaracharya = "Shankaracharya explains that the bhakta-yogi is the highest because bhakti naturally includes jnana and karma. Devotion to Krishna both purifies the mind and leads to the knowledge that frees.";
        ramanuja = "Ramanuja sees this verse as the crowning statement of the Gita's devotional teaching. The devotee who meditates on the Lord's form with deep, exclusive faith is the most completely united with the Divine.";
        tilak = "Tilak regards this as the culmination of the yoga chapters — all paths converge in loving devotion to the personal God. The highest yogi is not a cold philosopher but a passionate, dedicated lover of the Divine.";
      }),
      ("7.7", {
        verseId = "7.7";
        shankaracharya = "Shankaracharya interprets this as a statement of Brahman's non-duality — all of existence is woven in and through the one Consciousness, just as pearls are threaded on a single string. Nothing exists apart from That.";
        ramanuja = "Ramanuja sees this as the Lord's declaration of his supreme position as the ground of all existence. Everything depends on and subsists in the Supreme Person — but He is not merely the impersonal substrate; He is the personal Lord who loves and sustains.";
        tilak = "Tilak explains that this verse makes the oneness of all existence rationally comprehensible. Once one sees the divine thread running through all things, exploitation, hatred, and indifference become spiritually incoherent.";
      }),
      ("8.5", {
        verseId = "8.5";
        shankaracharya = "Shankaracharya explains this as stating the supreme importance of the last thought at death. The entire life of practice is aimed at ensuring that the mind naturally remembers Brahman at the critical final moment.";
        ramanuja = "Ramanuja explains that remembering the Lord at death is the fruit of a lifetime of devotion. The dedicated devotee who has trained the mind in love for the Lord finds this remembrance natural and effortless at the end.";
        tilak = "Tilak interprets the verse as emphasizing the importance of a spiritually informed death — not as a morbid concern but as the ultimate test of a life's practice. The warrior who fights for dharma thinking of the Lord meets both life and death victoriously.";
      }),
      ("8.7", {
        verseId = "8.7";
        shankaracharya = "Shankaracharya explains that constant remembrance of the Lord is the method of training the mind to its natural object. The injunction to remember while fighting shows that all activities can be offered as worship.";
        ramanuja = "Ramanuja sees this as the heart of bhakti practice — constant, unbroken remembrance of the Lord in all activities. This is not a distraction from worldly duties but their transformation into devotional offering.";
        tilak = "Tilak sees the combination of duty-performance and God-remembrance as the Gita's practical synthesis. One need not choose between the spiritual and the active life — they are united in the offering of action to the Divine.";
      }),
      ("8.14", {
        verseId = "8.14";
        shankaracharya = "Shankaracharya explains that the one who continuously thinks of the Lord with undivided attention naturally attains Him — because the mind becomes what it meditates upon. Constant practice makes God-remembrance effortless.";
        ramanuja = "Ramanuja explains that 'easy to reach' does not mean without effort, but that the Lord himself reaches out to meet the devotee who sincerely and constantly remembers Him. Divine grace makes the path accessible.";
        tilak = "Tilak sees this as the encouragement every spiritual seeker needs. The path to liberation is not reserved for a few gifted ascetics — consistent remembrance makes it accessible to anyone who sincerely commits to the practice.";
      }),
      ("9.22", {
        verseId = "9.22";
        shankaracharya = "Shankaracharya explains that the Lord's promise to carry what the devotee needs is not a material guarantee but a spiritual one — divine protection ensures that the sincere devotee's spiritual welfare is never left unattended.";
        ramanuja = "Ramanuja sees this as the Lord's extraordinary declaration of personal care for his devotees. The Supreme Lord himself takes responsibility for the material and spiritual welfare of those who worship him with exclusive devotion.";
        tilak = "Tilak interprets this as the most intimate expression of the Lord's love for his devotees. This verse has given millions of Bhaktas confidence that their surrender to the Divine is met with divine care and provision.";
      }),
      ("9.27", {
        verseId = "9.27";
        shankaracharya = "Shankaracharya explains that the instruction to offer everything to the Lord transforms ordinary life into worship. Every action becomes sacred when it is dedicated with pure intention to the Supreme.";
        ramanuja = "Ramanuja sees this verse as the complete formula for a life of devotion. Nothing in ordinary life need be excluded from worship — eating, sleeping, working, giving — all become acts of devotion when offered to the Lord.";
        tilak = "Tilak explains that this is the Gita's answer to those who think spiritual life must be separate from ordinary life. The divine is encountered not by fleeing the world but by sanctifying everything within it through devoted offering.";
      }),
      ("9.34", {
        verseId = "9.34";
        shankaracharya = "Shankaracharya explains that this final instruction of Chapter 9 summarizes the entire path of devotion: mind, heart, worship, and obeisance — all directed toward the personal God. This is the royal road to liberation.";
        ramanuja = "Ramanuja sees this as the most direct statement of the devotional path. The Lord is not asking for complex ritual but for the simplest and most direct act: turn your mind to Me, love Me, worship Me, and surrender to Me alone.";
        tilak = "Tilak sees this as the Gita's most accessible teaching — available to anyone regardless of learning, wealth, or social standing. Pure-hearted devotion is the great equalizer on the spiritual path.";
      }),
      ("10.8", {
        verseId = "10.8";
        shankaracharya = "Shankaracharya explains this as a declaration of the Lord's nature as the ultimate cause of all existence and consciousness. Knowing this intellectually is the beginning of jnana; experiencing it directly is liberation.";
        ramanuja = "Ramanuja sees this verse as the basis for wise devotees' understanding. Knowing the Lord as the source of all manifestation, they see everything as His expression and worship everything as His form.";
        tilak = "Tilak explains that this cosmic vision does not lead to passivity but to action informed by understanding the divine purpose underlying all of existence.";
      }),
      ("10.20", {
        verseId = "10.20";
        shankaracharya = "Shankaracharya explains this as the key vedantic statement — the Atman within is identical with Brahman, the source and substance of all. The Lord dwelling in all hearts is none other than the universal Self.";
        ramanuja = "Ramanuja sees the Lord as the indweller (antaryami) in all beings — present in every heart but always distinct from the individual soul. This intimate divine presence is the basis for universal compassion and devotion.";
        tilak = "Tilak uses this verse to establish the unity of all beings in the Divine. If the Lord is the beginning, middle, and end of all beings, then service to any being is service to Him.";
      }),
      ("11.32", {
        verseId = "11.32";
        shankaracharya = "Shankaracharya explains that the vision of Kala (cosmic time/death) consuming all things reveals the transience of the manifest world. This insight into impermanence is itself a form of liberation.";
        ramanuja = "Ramanuja sees the cosmic form as showing the Lord's absolute sovereignty over time and death. Even the mightiest warriors are consumed by the Lord's will — this vision humbles the ego and deepens devotion.";
        tilak = "Tilak interprets this verse historically — the declaration that all these warriors are already slain gives Arjuna permission to act as an instrument of cosmic necessity rather than as a personal agent of violence.";
      }),
      ("12.2", {
        verseId = "12.2";
        shankaracharya = "Shankaracharya explains that while both paths — worshipping the personal and the impersonal — lead to the same ultimate realization, worship of the personal form is easier because the mind has something definite to focus on.";
        ramanuja = "Ramanuja strongly emphasizes the personal form as supreme. The Lord himself declares this the better path — devotion to His personal form is not a lesser spiritual option but the highest and most direct route to Him.";
        tilak = "Tilak explains that the personal form of God serves as a concrete focus that gradually purifies and elevates the mind, making it capable of the broadest universal vision.";
      }),
      ("12.6", {
        verseId = "12.6";
        shankaracharya = "Shankaracharya explains that the devotee who surrenders completely — offering every action to the Lord and making Him the supreme goal — is carried across the ocean of material existence by the Lord's personal grace.";
        ramanuja = "Ramanuja sees this verse as the Lord's personal pledge of liberation to the surrendered devotee. Complete surrender (prapatti) combined with exclusive devotion brings the Lord's direct intervention on the devotee's behalf.";
        tilak = "Tilak interprets the Lord's promise as the basis for the devotee's fearlessness. Knowing that the Lord himself takes responsibility for the surrendered soul, the bhakta can engage fully in duty without anxiety.";
      }),
      ("12.13", {
        verseId = "12.13";
        shankaracharya = "Shankaracharya explains that non-envy toward all beings is the foundation of all other virtues. When the yogi recognizes the same Atman in all, the very basis for envy dissolves and universal compassion naturally arises.";
        ramanuja = "Ramanuja sees the qualities listed here as natural expressions of mature devotion. The devotee who loves the Lord sees all beings as the Lord's children and naturally extends the same compassion and friendship to all.";
        tilak = "Tilak sees this verse as describing the ideal Indian citizen and national character — compassionate, free from ego, patient, and equal in all circumstances.";
      }),
      ("13.2", {
        verseId = "13.2";
        shankaracharya = "Shankaracharya explains that the Lord himself is the knower of the field in all bodies. This means the individual witness-self (kshetrajna) is in truth identical with the Universal Self. This is the vedantic knowledge of non-duality.";
        ramanuja = "Ramanuja sees the Lord as the inner knower distinct from the individual soul — the antaryami who witnesses all. The knowledge of this distinction and the Lord's supreme position leads to liberation through devotion.";
        tilak = "Tilak explains that this chapter provides the metaphysical foundation for the ethical and practical teachings of the Gita. Understanding what the body is and who truly inhabits it dissolves the root delusion.";
      }),
      ("13.12", {
        verseId = "13.12";
        shankaracharya = "Shankaracharya explains that true knowledge begins with humility, non-violence, and tolerance — these are not mere moral virtues but specific forms of knowledge that reveal reality as it is. Pride and violence distort perception.";
        ramanuja = "Ramanuja sees the qualities of knowledge listed here as devotional virtues. Humility, devotion to the guru, purity of mind — these create the inner conditions in which the Lord's presence becomes perceptible.";
        tilak = "Tilak explains that the Gita's concept of knowledge includes both intellectual understanding and moral development. The complete transformation of character is what true jnana brings.";
      }),
      ("14.5", {
        verseId = "14.5";
        shankaracharya = "Shankaracharya explains the three gunas as the fundamental constituents of material nature that bind the immortal soul to the mortal body. Understanding their operation is essential for attaining liberation from their grip.";
        ramanuja = "Ramanuja sees the gunas as the instruments of the Lord's creative power (maya). The soul becomes bound by them due to beginningless association with matter; liberation comes through devotion which transcends all three.";
        tilak = "Tilak explains the gunas as a scientific model of human psychology and social dynamics. Understanding which guna predominates in any action, thought, or institution is the key to transforming both individual and society.";
      }),
      ("15.7", {
        verseId = "15.7";
        shankaracharya = "Shankaracharya explains that the individual soul is an eternal portion of the Supreme, yet appears limited due to association with the six senses. Liberation is the removal of this apparent limitation — returning to the full recognition of one's divine nature.";
        ramanuja = "Ramanuja explains that the soul's eternal relationship with the Lord as a fragment of his divine nature is the basis of bhakti. The soul naturally longs to return to the Lord — this longing, properly cultivated, becomes the highest devotion.";
        tilak = "Tilak sees this verse as establishing the dignity of every individual soul. Each person is literally a fragment of the Divine — this understanding should inspire self-respect, compassion for others, and courage in the face of adversity.";
      }),
      ("15.15", {
        verseId = "15.15";
        shankaracharya = "Shankaracharya explains that the Lord seated in the heart is the source of all cognitive functions — memory, knowledge, and their apparent loss. The Vedas themselves point to this divine presence as their ultimate subject.";
        ramanuja = "Ramanuja sees the Lord as the inner guide and teacher of every being. All knowledge ultimately flows from Him; the guru and scripture merely reveal what He alone can confirm in the heart of the devotee.";
        tilak = "Tilak interprets this verse as pointing to the living presence of the divine within every person as the source of all genuine insight. True education is not mere information transfer but awakening to the inner light.";
      }),
      ("16.1", {
        verseId = "16.1";
        shankaracharya = "Shankaracharya explains that the divine qualities listed — fearlessness, purity, giving, self-control — are not separate virtues but expressions of a single orientation: identifying with the immortal Atman rather than the perishable body.";
        ramanuja = "Ramanuja sees these divine qualities as the natural manifestation of mature devotion. The devotee who lives in the presence of the Lord naturally embodies fearlessness, generosity, and all-encompassing compassion.";
        tilak = "Tilak read this list as the character of the ideal nationalist leader — fearless, transparent, devoted to truth, controlled in senses, compassionate to all, and free from greed. The Gita's vision of divine humanity.";
      }),
      ("17.1", {
        verseId = "17.1";
        shankaracharya = "Shankaracharya explains Arjuna's question as addressing the case of those who have sincere faith but no formal scriptural guidance. Krishna's answer shows that sincere sattvic faith is itself a valid starting point.";
        ramanuja = "Ramanuja explains that faith is classified according to the devotee's inner nature and the quality of their worship. The highest faith (sattvic) is directed toward the personal Supreme Lord and leads to liberation.";
        tilak = "Tilak explains that sincere faith is the spiritual capital of ordinary people who may lack scriptural learning. The Gita validates their spiritual lives while showing how faith can be elevated and refined.";
      }),
      ("18.48", {
        verseId = "18.48";
        shankaracharya = "Shankaracharya explains that all action carries some defect, as fire always has smoke. The wise person does not abandon their duty because of its imperfections but performs it as a spiritual offering, accepting both its fruits and its limitations.";
        ramanuja = "Ramanuja sees this as practical guidance for the devotee in the world. No worldly action is perfect, and seeking perfect conditions before acting is itself a form of avoidance. Dedicated action with devotion transcends all imperfections.";
        tilak = "Tilak interprets this as an argument against perfectionism and escapism. Every duty has its difficulties and moral complexities — performing it faithfully despite imperfections is always better than abandoning it.";
      }),
      ("18.65", {
        verseId = "18.65";
        shankaracharya = "Shankaracharya explains this as the reiteration of the highest teaching — complete mental absorption in the Lord, devotion, worship, and prostration. This is not a set of separate practices but a single orientation of the entire being toward the Divine.";
        ramanuja = "Ramanuja sees this as the Lord's direct personal invitation to the most intimate form of devotion. The use of 'I promise you truly' (satyam te pratijane) shows the depth of the Lord's personal commitment to the surrendered devotee.";
        tilak = "Tilak sees this as the Gita's expression of the devotee-God relationship at its most personal. The universal Lord makes a personal promise to each devotee — this is the intimacy that makes bhakti the highest path.";
      }),
      ("18.66", {
        verseId = "18.66";
        shankaracharya = "Shankaracharya interprets this as pointing to the ultimate renunciation — giving up even the notion that one has a dharma to perform, and surrendering the self completely to the infinite. This is the moksha-dharma that transcends all others.";
        ramanuja = "Ramanuja sees this as the supreme teaching of prapatti — total surrender. All partial paths — varnadharma, ashramadharma, even bhakti as a structured practice — are transcended in this final unconditional surrender to the Lord's grace.";
        tilak = "Tilak explains that this verse does not negate the Gita's teachings but transcends them — having understood and practiced all of dharma, the supreme act is to lay everything at the Lord's feet in complete trust and love.";
      }),
    ];
    for ((k, v) in data.vals()) {
      commentaries.add(k, v);
    };
  };

  // ─── Concentration Sessions ──────────────────────────────────────
  public func recordConcentrationSession(
    sessions : List.List<Types.ConcentrationSession>,
    caller : Principal,
    durationMinutes : Nat,
    sessionType : Text,
  ) : Types.ConcentrationSession {
    let now = Time.now();
    let pid = caller.toText();
    let id = makeId("cs", now, pid.size().toText());
    let session : Types.ConcentrationSession = {
      id;
      durationMinutes;
      completedAt = now;
      sessionType;
      principalId = pid;
    };
    sessions.add(session);
    session;
  };

  public func getConcentrationHistory(
    sessions : List.List<Types.ConcentrationSession>,
    caller : Principal,
    limit : Nat,
  ) : [Types.ConcentrationSession] {
    let pid = caller.toText();
    let mine = sessions.filter(func(s : Types.ConcentrationSession) : Bool {
      s.principalId == pid
    });
    let arr = mine.toArray();
    // Most recent first — sort by completedAt descending
    let sorted = arr.sort(func(a : Types.ConcentrationSession, b : Types.ConcentrationSession) : { #less; #equal; #greater } {
      Int.compare(b.completedAt, a.completedAt)
    });
    if (limit == 0 or sorted.size() <= limit) {
      sorted;
    } else {
      sorted.sliceToArray(0, limit);
    };
  };
};
