import Types "../types/gita";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

module {
  // ─── Compare helpers for tuple keys ──────────────────────────────────────
  // Map.add/get/filter require a (K,K)->Order.Order compare for tuple keys.
  func compareNatNat(a : (Nat, Nat), b : (Nat, Nat)) : { #less; #equal; #greater } {
    let (a1, a2) = a;
    let (b1, b2) = b;
    switch (Nat.compare(a1, b1)) {
      case (#equal) { Nat.compare(a2, b2) };
      case other { other };
    };
  };

  func compareTextNat(a : (Text, Nat), b : (Text, Nat)) : { #less; #equal; #greater } {
    let (a1, a2) = a;
    let (b1, b2) = b;
    switch (Text.compare(a1, b1)) {
      case (#equal) { Nat.compare(a2, b2) };
      case other { other };
    };
  };

  func compareTextNatNat(a : (Text, Nat, Nat), b : (Text, Nat, Nat)) : { #less; #equal; #greater } {
    let (a1, a2, a3) = a;
    let (b1, b2, b3) = b;
    switch (Text.compare(a1, b1)) {
      case (#equal) {
        switch (Nat.compare(a2, b2)) {
          case (#equal) { Nat.compare(a3, b3) };
          case other { other };
        };
      };
      case other { other };
    };
  };

  // ─── Existing Gita reference-data accessors ────────────────────────────────
  public func getChapter(
    chapters : Map.Map<Nat, Types.Chapter>,
    chapterId : Nat,
  ) : ?Types.Chapter {
    chapters.get(chapterId);
  };

  public func listChapters(
    chapters : Map.Map<Nat, Types.Chapter>,
  ) : [Types.Chapter] {
    let pairs = chapters.toArray();
    pairs.map(func((_, ch)) { ch });
  };

  public func getVerse(
    verses : Map.Map<(Nat, Nat), Types.Verse>,
    chapterId : Nat,
    verseId : Nat,
  ) : ?Types.Verse {
    verses.get(compareNatNat, (chapterId, verseId));
  };

  public func listVerses(
    verses : Map.Map<(Nat, Nat), Types.Verse>,
    chapterId : Nat,
  ) : [Types.Verse] {
    let filtered = verses.filter(
      compareNatNat,
      func((cid, _vid) : (Nat, Nat), _verse : Types.Verse) : Bool { cid == chapterId },
    );
    let pairs = filtered.toArray();
    pairs.map(func((_, v)) { v });
  };

  public func getKrishnaGuidance(
    guidanceMap : Map.Map<Text, Types.GuidanceResult>,
    keyword : Text,
  ) : ?Types.GuidanceResult {
    guidanceMap.get(keyword);
  };

  public func getGuidanceByCategory(
    guidanceMap : Map.Map<Text, Types.GuidanceResult>,
    category : Text,
  ) : ?Types.GuidanceResult {
    guidanceMap.get(category);
  };

  public func getMantras(
    mantras : Map.Map<Text, Types.MantraEntry>,
  ) : [Types.MantraEntry] {
    let pairs = mantras.toArray();
    pairs.map(func((_, m)) { m });
  };

  public func getFestivals(
    festivals : Map.Map<Text, Types.Festival>,
  ) : [Types.Festival] {
    let pairs = festivals.toArray();
    pairs.map(func((_, f)) { f });
  };

  public func getDailyChallenge(
    challenges : Map.Map<Text, Types.DailyChallenge>,
    dateKey : Text,
  ) : ?Types.DailyChallenge {
    challenges.get(dateKey);
  };

  // ─── Digital Library (Pustakaalaye) — Granth accessors ──────────────────────
  public func listGranths(
    granths : Map.Map<Text, Types.Granth>,
  ) : [Types.Granth] {
    let pairs = granths.toArray();
    pairs.map(func((_, g)) { g });
  };

  public func getGranth(
    granths : Map.Map<Text, Types.Granth>,
    granthId : Text,
  ) : ?Types.Granth {
    granths.get(granthId);
  };

  public func listGranthChapters(
    granthChapters : Map.Map<(Text, Nat), Types.GranthChapter>,
    granthId : Text,
  ) : [Types.GranthChapter] {
    let filtered = granthChapters.filter(
      compareTextNat,
      func((gid, _cid) : (Text, Nat), _chapter : Types.GranthChapter) : Bool { gid == granthId },
    );
    let pairs = filtered.toArray();
    pairs.map(func((_, c)) { c });
  };

  public func getGranthChapter(
    granthChapters : Map.Map<(Text, Nat), Types.GranthChapter>,
    granthId : Text,
    chapterId : Nat,
  ) : ?Types.GranthChapter {
    granthChapters.get(compareTextNat, (granthId, chapterId));
  };

  public func getGranthVerse(
    granthVerses : Map.Map<(Text, Nat, Nat), Types.GranthVerse>,
    granthId : Text,
    chapterId : Nat,
    verseId : Nat,
  ) : ?Types.GranthVerse {
    granthVerses.get(compareTextNatNat, (granthId, chapterId, verseId));
  };

  public func listGranthVerses(
    granthVerses : Map.Map<(Text, Nat, Nat), Types.GranthVerse>,
    granthId : Text,
    chapterId : Nat,
  ) : [Types.GranthVerse] {
    let filtered = granthVerses.filter(
      compareTextNatNat,
      func((gid, cid, _vid) : (Text, Nat, Nat), _verse : Types.GranthVerse) : Bool { gid == granthId and cid == chapterId },
    );
    let pairs = filtered.toArray();
    pairs.map(func((_, v)) { v });
  };

  // ─── Initialization: Gita chapters (18 chapters, 700 verses total) ─────────
  public func initChapters(chapters : Map.Map<Nat, Types.Chapter>) : () {
    let seed : [Types.Chapter] = [
      { id = 1;  name = "Arjuna Vishada Yoga";        summary = "Arjuna's despondency and the dilemma of duty versus attachment."; verseCount = 47 },
      { id = 2;  name = "Sankhya Yoga";              summary = "The yoga of knowledge: the eternal soul, duty, and the path of wisdom."; verseCount = 72 },
      { id = 3;  name = "Karma Yoga";                summary = "The yoga of selfless action performed without attachment to fruits."; verseCount = 43 },
      { id = 4;  name = "Jnana Karma Sanyasa Yoga";  summary = "The yoga of knowledge and the discipline of action; avatars and surrender."; verseCount = 42 },
      { id = 5;  name = "Karma Sanyasa Yoga";        summary = "The yoga of renunciation: action as a path to the same goal as renunciation."; verseCount = 29 },
      { id = 6;  name = "Atma Samyama Yoga";         summary = "The yoga of meditation and self-discipline; the path of dhyana."; verseCount = 47 },
      { id = 7;  name = "Jnana Vijnana Yoga";        summary = "The yoga of knowledge and realization; the lower and higher nature of the Lord."; verseCount = 30 },
      { id = 8;  name = "Aksara Brahma Yoga";        summary = "The yoga of the imperishable Brahman; the moment of death and remembrance."; verseCount = 28 },
      { id = 9;  name = "Raja Vidya Yoga";           summary = "The yoga of sovereign knowledge and sovereign mystery; all-pervading presence."; verseCount = 34 },
      { id = 10; name = "Vibhuti Yoga";              summary = "The yoga of divine manifestations; the Lord's glories in all things."; verseCount = 42 },
      { id = 11; name = "Vishvarupa Darshana Yoga";  summary = "The yoga of the cosmic vision; Arjuna sees the universal form."; verseCount = 55 },
      { id = 12; name = "Bhakti Yoga";               summary = "The yoga of devotion; the qualities of a true devotee and the path of love."; verseCount = 20 },
      { id = 13; name = "Ksetra Ksetrajna Vibhaga Yoga"; summary = "The yoga of the field and the knower of the field; nature and the self."; verseCount = 35 },
      { id = 14; name = "Gunatraya Vibhaga Yoga";    summary = "The yoga of the three gunas: sattva, rajas, tamas and their effects."; verseCount = 27 },
      { id = 15; name = "Purushottama Yoga";         summary = "The yoga of the Supreme Person; the cosmic tree and the highest self."; verseCount = 20 },
      { id = 16; name = "Daivasura Sampad Vibhaga Yoga"; summary = "The yoga of the divine and demoniac natures; virtues and vices."; verseCount = 24 },
      { id = 17; name = "Sraddhatraya Vibhaga Yoga"; summary = "The yoga of the threefold faith; food, sacrifice, austerity and charity."; verseCount = 28 },
      { id = 18; name = "Moksha Sanyasa Yoga";       summary = "The yoga of liberation and renunciation; the final teaching and surrender."; verseCount = 78 },
    ];
    for (ch in seed.values()) {
      chapters.add(ch.id, ch);
    };
  };

  public func initVerses(verses : Map.Map<(Nat, Nat), Types.Verse>) : () {
    // Seed representative verses from key chapters to demonstrate the 3-layer
    // display (sanskritText, transliteration, englishTranslation). The full
    // 700-verse corpus is large; these verses anchor the most-taught passages.
    let seed : [Types.Verse] = [
      // Chapter 2 — Sankhya Yoga
      { id = 7;  chapterId = 2; verseNumber = "2.7";
        sanskritText = "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः।";
        transliteration = "kārpaṇyadoṣopahatasvabhāvaḥ pṛcchāmi tvāṃ dharmasammūḍacetāḥ";
        englishTranslation = "My nature is overcome by the flaw of faint-heartedness; my mind is confused about duty. I ask You: tell me what is truly good. I am Your disciple; teach me." },
      { id = 13; chapterId = 2; verseNumber = "2.13";
        sanskritText = "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।";
        transliteration = "dehino'smin yathā dehe kaumāraṃ yauvanaṃ jarā";
        englishTranslation = "Just as the embodied soul passes through childhood, youth, and old age in this body, so too does it pass to another body. The wise are not deluded by this." },
      { id = 20; chapterId = 2; verseNumber = "2.20";
        sanskritText = "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।";
        transliteration = "na jāyate mriyate vā kadācinnāyaṃ bhūtvā bhavitā vā na bhūyaḥ";
        englishTranslation = "The soul is never born and never dies. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain." },
      { id = 47; chapterId = 2; verseNumber = "2.47";
        sanskritText = "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।";
        transliteration = "karmaṇyevādhikāras te mā phaleṣu kadācana";
        englishTranslation = "You have a right to action alone, never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction." },
      // Chapter 3 — Karma Yoga
      { id = 19; chapterId = 3; verseNumber = "3.19";
        sanskritText = "तस्मादस्त्वं नियतं कुरु कर्म कर्म ज्यायो ह्यकर्मणः।";
        transliteration = "tasmād asyaṃ niyataṃ kuru karma karma jyāyo hy akarmaṇaḥ";
        englishTranslation = "Therefore, without attachment, always perform the duty that must be done; for by performing action without attachment, one attains the highest." },
      // Chapter 4 — Jnana Karma Sanyasa Yoga
      { id = 7;  chapterId = 4; verseNumber = "4.7";
        sanskritText = "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।";
        transliteration = "yadā yadā hi dharmasya glānir bhavati bhārata";
        englishTranslation = "Whenever there is a decline of dharma and a rise of adharma, O Arjuna, I manifest Myself." },
      { id = 8;  chapterId = 4; verseNumber = "4.8";
        sanskritText = "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।";
        transliteration = "paritrāṇāya sādhūnāṃ vināśāya ca duṣkṛtām";
        englishTranslation = "To protect the righteous, to destroy the wicked, and to re-establish dharma, I take birth age after age." },
      { id = 34; chapterId = 4; verseNumber = "4.34";
        sanskritText = "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।";
        transliteration = "tad viddhi praṇipātena paripraśnena sevayā";
        englishTranslation = "Know that by humble reverence, by inquiry, and by service. The wise who have seen the truth will instruct you in that knowledge." },
      // Chapter 9 — Raja Vidya Yoga
      { id = 22; chapterId = 9; verseNumber = "9.22";
        sanskritText = "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।";
        transliteration = "ananyāś cintayanto māṃ ye janāḥ paryupāsate";
        englishTranslation = "Those who worship Me, meditating on Me with exclusive devotion — to them I carry what they lack and preserve what they have." },
      { id = 26; chapterId = 9; verseNumber = "9.26";
        sanskritText = "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।";
        transliteration = "patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati";
        englishTranslation = "If one offers Me a leaf, a flower, a fruit, or water with devotion, I accept that loving offering from the pure-hearted." },
      // Chapter 11 — Vishvarupa Darshana
      { id = 32; chapterId = 11; verseNumber = "11.32";
        sanskritText = "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः।";
        transliteration = "kālo'smi lokakṣayakṛt pravṛddho lokān samāhartum iha pravṛttaḥ";
        englishTranslation = "I am time, the destroyer of worlds, grown mighty to annihilate. Even without you, all these warriors shall cease to be." },
      // Chapter 12 — Bhakti Yoga
      { id = 8;  chapterId = 12; verseNumber = "12.8";
        sanskritText = "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।";
        transliteration = "mayy eva mana ādhatsva mayi buddhiṃ niveśaya";
        englishTranslation = "Fix your mind on Me alone, rest your intellect in Me; in Me alone you shall live hereafter — of this there is no doubt." },
      // Chapter 15 — Purushottama
      { id = 7;  chapterId = 15; verseNumber = "15.7";
        sanskritText = "ममैवांशो जीवलोके जीवभूतः सनातनः।";
        transliteration = "mamaivāṃśo jīvaloke jīvabhūtaḥ sanātanaḥ";
        englishTranslation = "An eternal fragment of Myself, becoming the living soul in the world of life, draws the senses of which the mind is the sixth." },
      // Chapter 18 — Moksha Sanyasa
      { id = 65; chapterId = 18; verseNumber = "18.65";
        sanskritText = "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।";
        transliteration = "manmanā bhava madbhakto madyājī māṃ namaskuru";
        englishTranslation = "Fix your mind on Me, be devoted to Me, sacrifice to Me, bow down to Me. Thus you shall come to Me alone — this I truly promise." },
      { id = 66; chapterId = 18; verseNumber = "18.66";
        sanskritText = "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।";
        transliteration = "sarvadharmān parityajya mām ekaṃ śaraṇaṃ vraja";
        englishTranslation = "Abandoning all duties, take refuge in Me alone. I shall liberate you from all sins; do not grieve." },
    ];
    for (v in seed.values()) {
      verses.add(compareNatNat, (v.chapterId, v.id), v);
    };
  };

  public func initGuidanceMap(guidanceMap : Map.Map<Text, Types.GuidanceResult>) : () {
    let seed : [(Text, Types.GuidanceResult)] = [
      ("fear", { chapter = 2;  verse = 20; keyword = "fear";       guidanceText = "The soul is never born and never dies. Knowing this, fear of death loses its grip — act from your eternal nature." }),
      ("anger", { chapter = 2;  verse = 62; keyword = "anger";     guidanceText = "From attachment springs desire, from desire comes anger when thwarted. Break the chain by acting without attachment to results." }),
      ("doubt", { chapter = 4;  verse = 34; keyword = "doubt";     guidanceText = "Approach a wise teacher with humility and inquiry. Doubt dissolves in the light of knowledge received from one who has seen the truth." }),
      ("grief", { chapter = 2;  verse = 13; keyword = "grief";     guidanceText = "As the soul passes from body to body, grief over change is misplaced. The wise mourn neither the living nor the departed." }),
      ("duty",  { chapter = 2;  verse = 47; keyword = "duty";      guidanceText = "You have a right to action alone, never to its fruits. Perform your duty without attachment to outcomes — this is the path." }),
      ("confusion", { chapter = 18; verse = 66; keyword = "confusion"; guidanceText = "When duties conflict and the mind wavers, surrender all to the Lord. Take refuge and the path becomes clear." }),
      ("desire", { chapter = 3;  verse = 37; keyword = "desire";   guidanceText = "Desire is the enemy here, born of the guna of rajas. It veils knowledge like smoke veils fire. Subdue it through discipline." }),
      ("failure", { chapter = 6;  verse = 6; keyword = "failure";  guidanceText = "For the undisciplined mind, the self is like an enemy; for the disciplined, the self is a friend. Steady practice lifts you from failure." }),
      ("purpose", { chapter = 7;  verse = 7; keyword = "purpose";  guidanceText = "There is nothing higher than Me, O Arjuna. All this is strung on Me like pearls on a thread — find your purpose in that unity." }),
      ("devotion", { chapter = 9; verse = 26; keyword = "devotion"; guidanceText = "Whatever you offer with devotion — a leaf, a flower, a fruit, water — I accept from the pure heart. Devotion, not grandeur, reaches Me." }),
    ];
    for ((k, g) in seed.values()) {
      guidanceMap.add(k, g);
    };
  };

  // ─── Initialization: 18 Mahamantras + 18 Sharanam mantras ──────────────────
  public func initMantras(mantras : Map.Map<Text, Types.MantraEntry>) : () {
    let seed : [Types.MantraEntry] = [
      // ── 18 Mahamantras (Maala Jaap — pathway 3) ──────────────────────────
      { id = "maha-hare-krishna"; name = "Hare Krishna Maha Mantra";
        category = #mahamantra;
        meaning = "The supreme mantra for Kaliyug: a call to Radha and Krishna for deliverance from material bondage.";
        benefit = "Cleanses the heart, awakens love of God, and grants liberation in Kaliyug.";
        text = "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे";
        recommendedCount = 108 },
      { id = "maha-om-namah-shivaya"; name = "Om Namah Shivaya";
        category = #mahamantra;
        meaning = "The Panchakshari — five-syllable mantra saluting Shiva as the inner Self.";
        benefit = "Burns karma, grants inner stillness, and awakens awareness of the Self.";
        text = "ॐ नमः शिवाय";
        recommendedCount = 108 },
      { id = "maha-gayatri"; name = "Gayatri Mantra";
        category = #mahamantra;
        meaning = "The most ancient Vedic mantra invoking Savitr, the solar source of illumination.";
        benefit = "Bestows wisdom, purifies the intellect, and illuminates the mind with divine light.";
        text = "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्";
        recommendedCount = 108 },
      { id = "maha-om-namo-narayanaya"; name = "Om Namo Narayanaya";
        category = #mahamantra;
        meaning = "The Ashtakshari — eight-syllable mantra surrendering to Narayana, the all-pervading Lord.";
        benefit = "Grants refuge in the Supreme and dissolves the ego in devotion.";
        text = "ॐ नमो नारायणाय";
        recommendedCount = 108 },
      { id = "maha-om-namo-bhagavate"; name = "Om Namo Bhagavate Vasudevaya";
        category = #mahamantra;
        meaning = "Surrender to Bhagavan Vasudeva, the all-pervading Lord who dwells in all.";
        benefit = "Awakens devotion and grants the grace of the Supreme Lord.";
        text = "ॐ नमो भगवते वासुदेवाय";
        recommendedCount = 108 },
      { id = "maha-om-gan-ganapataye"; name = "Om Gam Ganapataye Namaha";
        category = #mahamantra;
        meaning = "Invokes Ganesha, the remover of obstacles, with the seed-sound Gam.";
        benefit = "Removes obstacles, grants success in undertakings, and steadies the mind.";
        text = "ॐ गं गणपतये नमः";
        recommendedCount = 108 },
      { id = "maha-om-dum-durgayei"; name = "Om Dum Durgayei Namaha";
        category = #mahamantra;
        meaning = "Salutes Durga, the invincible Mother who slays inner and outer demons.";
        benefit = "Grants courage, protection, and the strength to overcome fear and adversity.";
        text = "ॐ दुं दुर्गायै नमः";
        recommendedCount = 108 },
      { id = "maha-om-shreem-mahalakshmyai"; name = "Om Shreem Mahalakshmyai Namaha";
        category = #mahamantra;
        meaning = "Invokes Lakshmi, the goddess of abundance and inner prosperity, with the seed Shreem.";
        benefit = "Attracts prosperity, harmony, and the grace of the Divine Mother.";
        text = "ॐ श्रीं महालक्ष्म्यै नमः";
        recommendedCount = 108 },
      { id = "maha-om-aim-saraswatyai"; name = "Om Aim Saraswatyai Namaha";
        category = #mahamantra;
        meaning = "Invokes Saraswati, the goddess of knowledge, music, and wisdom, with the seed Aim.";
        benefit = "Sharpens intellect, grants eloquence, and awakens creative and spiritual knowledge.";
        text = "ॐ ऐं सरस्वत्यै नमः";
        recommendedCount = 108 },
      { id = "maha-om-namah-suryaya"; name = "Om Suryaya Namaha";
        category = #mahamantra;
        meaning = "Salutes Surya, the sun deity, source of light, health, and vitality.";
        benefit = "Grants health, vitality, clarity, and dispels darkness of mind and body.";
        text = "ॐ सूर्याय नमः";
        recommendedCount = 108 },
      { id = "maha-om-hanumate-namah"; name = "Om Hanumate Namaha";
        category = #mahamantra;
        meaning = "Salutes Hanuman, the embodiment of devotion, strength, and selfless service.";
        benefit = "Grants strength, devotion, courage, and protection from fear and harm.";
        text = "ॐ हनुमते नमः";
        recommendedCount = 108 },
      { id = "maha-om-ram-ramaya"; name = "Om Ram Ramaya Namaha";
        category = #mahamantra;
        meaning = "Salutes Rama, the embodiment of dharma, with the seed-sound Ram.";
        benefit = "Instills dharma, steadiness, and devotion; purifies the heart.";
        text = "ॐ रां रामाय नमः";
        recommendedCount = 108 },
      { id = "maha-om-kleem-krishnaya"; name = "Om Kleem Krishnaya Namaha";
        category = #mahamantra;
        meaning = "Invokes Krishna with the seed Kleem, the seed of attraction and divine love.";
        benefit = "Awakens divine love and draws the heart toward the Supreme.";
        text = "ॐ क्लीं कृष्णाय नमः";
        recommendedCount = 108 },
      { id = "maha-om-aim-hreem-shreem"; name = "Om Aim Hreem Shreem";
        category = #mahamantra;
        meaning = "The Bija-traya — three seed-sounds of knowledge (Aim), divine energy (Hreem), and abundance (Shreem).";
        benefit = "Unites wisdom, power, and prosperity; balances the three shaktis.";
        text = "ॐ ऐं ह्रीं श्रीं";
        recommendedCount = 108 },
      { id = "maha-mrityunjaya"; name = "Maha Mrityunjaya Mantra";
        category = #mahamantra;
        meaning = "The great death-conquering mantra to Shiva, seeking liberation from the cycle of rebirth.";
        benefit = "Grants healing, protection from untimely death, and liberation from fear of mortality.";
        text = "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्";
        recommendedCount = 108 },
      { id = "maha-om-namah-chandikayai"; name = "Om Namah Chandikayai";
        category = #mahamantra;
        meaning = "Salutes Chandi, the fierce form of the Divine Mother who destroys negativities.";
        benefit = "Grants protection, courage, and the removal of inner and outer obstacles.";
        text = "ॐ नमः चण्डिकायै";
        recommendedCount = 108 },
      { id = "maha-om-vishnave-namah"; name = "Om Vishnave Namaha";
        category = #mahamantra;
        meaning = "Salutes Vishnu, the preserver, the all-pervading sustainer of the cosmos.";
        benefit = "Grants preservation, harmony, and the grace of the sustaining Lord.";
        text = "ॐ विष्णवे नमः";
        recommendedCount = 108 },
      { id = "maha-om-namah-shanaischaraya"; name = "Om Namah Shanaischaraya";
        category = #mahamantra;
        meaning = "Salutes Shani (Saturn), the slow-moving lord of karma and justice.";
        benefit = "Eases karmic difficulties, grants patience, and harmonizes Saturn's influence.";
        text = "ॐ नमः शनैश्चराय";
        recommendedCount = 108 },

      // ── 18 Sharanam mantras (Naam Lekhan — pathway 4) ───────────────────
      { id = "sharanam-krishna"; name = "Krishna Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Krishna, the Supreme Lord of love and dharma.";
        benefit = "Awakens devotion and grants the shelter of the Lord's name.";
        text = "कृष्ण शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-rama"; name = "Rama Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Rama, the embodiment of dharma and truth.";
        benefit = "Instills dharma and grants the steady shelter of the Lord's name.";
        text = "राम शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-shiva"; name = "Shiva Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Shiva, the auspicious Lord of transformation.";
        benefit = "Grants inner stillness and the shelter of the auspicious Lord.";
        text = "शिव शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-vishnu"; name = "Vishnu Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Vishnu, the all-pervading preserver.";
        benefit = "Grants preservation and the shelter of the sustaining Lord.";
        text = "विष्णु शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-narayana"; name = "Narayana Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Narayana, the refuge of all beings.";
        benefit = "Grants the supreme refuge and dissolves the ego in surrender.";
        text = "नारायण शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-ganesha"; name = "Ganesha Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Ganesha, the remover of obstacles.";
        benefit = "Removes obstacles and grants the shelter of the Lord of beginnings.";
        text = "गणेश शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-durga"; name = "Durga Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Durga, the invincible Mother.";
        benefit = "Grants courage and the protective shelter of the Divine Mother.";
        text = "दुर्गा शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-lakshmi"; name = "Lakshmi Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Lakshmi, the goddess of abundance.";
        benefit = "Attracts prosperity and the shelter of the Mother of abundance.";
        text = "लक्ष्मी शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-saraswati"; name = "Saraswati Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Saraswati, the goddess of wisdom.";
        benefit = "Grants knowledge and the shelter of the Mother of wisdom.";
        text = "सरस्वती शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-hanuman"; name = "Hanuman Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Hanuman, the embodiment of devotion and strength.";
        benefit = "Grants strength, devotion, and the shelter of the servant of the Lord.";
        text = "हनुमान शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-surya"; name = "Surya Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Surya, the sun deity and source of light.";
        benefit = "Grants vitality and the shelter of the source of illumination.";
        text = "सूर्य शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-guru"; name = "Guru Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of the Guru, the dispeller of darkness.";
        benefit = "Grants guidance and the shelter of the teacher who reveals the truth.";
        text = "गुरु शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-radha"; name = "Radha Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Radha, the embodiment of supreme devotion.";
        benefit = "Awakens pure devotion and grants the shelter of the divine beloved.";
        text = "राधा शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-sita"; name = "Sita Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Sita, the embodiment of devotion and patience.";
        benefit = "Grants steadfast devotion and the shelter of the divine consort.";
        text = "सीता शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-venkatesha"; name = "Venkatesha Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Venkatesha, the Lord of the seven hills.";
        benefit = "Grants the shelter of the Lord who accepts all who surrender.";
        text = "वेङ्कटेश शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-panduranga"; name = "Panduranga Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Panduranga (Vitthala), the standing Lord of Pandharpur.";
        benefit = "Grants the shelter of the Lord who waits for His devotees.";
        text = "पाण्डुरङ्ग शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-murugan"; name = "Murugan Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Murugan (Kartikeya), the commander of the divine army.";
        benefit = "Grants protection and the shelter of the Lord of valor.";
        text = "मुरुगन् शरणम्";
        recommendedCount = 108 },
      { id = "sharanam-ayyappa"; name = "Ayyappa Sharanam";
        category = #sharanam;
        meaning = "Taking refuge in the name of Ayyappa, the Lord of Sabarimala and celibate discipline.";
        benefit = "Grants discipline and the shelter of the Lord of austerity.";
        text = "अय्यप्प शरणम्";
        recommendedCount = 108 },
    ];
    for (m in seed.values()) {
      mantras.add(m.id, m);
    };
  };

  // ─── Initialization: Festivals with trust-through-source citations ─────────
  public func initFestivals(festivals : Map.Map<Text, Types.Festival>) : () {
    let seed : [Types.Festival] = [
      { name = "Diwali"; dateStr = "Amavasya, Kartik month (Oct–Nov)";
        meaning = "The festival of lights celebrating the victory of light over darkness and dharma over adharma.";
        mantraName = "Om Namo Narayanaya"; recommendedVerse = "Light the lamp of knowledge within.";
        story = "Diwali marks the return of Lord Rama to Ayodhya after 14 years of exile and His victory over Ravana. The citizens illuminated the city with rows of lamps to welcome the divine king, symbolizing the triumph of dharma and the inner light of knowledge over the darkness of ignorance. It also honors Lakshmi, the goddess of prosperity, who is invoked for the year's abundance.";
        sourceGranth = "Ramayana (Valmiki)"; sourceVerse = "Yuddha Kanda — return to Ayodhya"; sourceChapter = "Yuddha Kanda, Canto 130-131" },
      { name = "Holi"; dateStr = "Phalguna Purnima (Feb–Mar)";
        meaning = "The festival of colors celebrating the triumph of devotion and the arrival of spring.";
        mantraName = "Om Namo Bhagavate Vasudevaya"; recommendedVerse = "Burn the Holika of ego in the fire of devotion.";
        story = "Holi commemorates the devotion of Prahlada, who remained steadfast in his worship of Lord Vishnu despite his father Hiranyakashipu's persecution. The demoness Holika, immune to fire, tried to burn Prahlada but was herself consumed while Prahlada emerged unharmed — protected by his unwavering devotion. The festival also celebrates the divine love of Radha and Krishna through the playful throwing of colors.";
        sourceGranth = "Bhagavata Purana"; sourceVerse = "Canto 7 — Prahlada Charitra"; sourceChapter = "Canto 7, Chapters 1-10" },
      { name = "Janmashtami"; dateStr = "Ashtami, Bhadrapada month (Aug–Sep)";
        meaning = "The appearance day of Lord Krishna, the Supreme Lord's descent to protect dharma.";
        mantraName = "Hare Krishna Maha Mantra"; recommendedVerse = "Chant the holy name at the hour of His appearance.";
        story = "Janmashtami celebrates the birth of Lord Krishna in the prison of Mathura to Devaki and Vasudeva, on the eighth day of the dark fortnight of Bhadrapada. At midnight, as the guards slept and the chains fell away, Vasudeva carried the infant across the Yamuna to Gokul, where He was placed in the care of Yashoda and Nanda. His birth fulfilled the prophecy that He would end the tyranny of His uncle Kamsa and restore dharma.";
        sourceGranth = "Bhagavata Purana"; sourceVerse = "Canto 10, Chapter 3 — birth of Krishna"; sourceChapter = "Canto 10, Chapter 3" },
      { name = "Navratri"; dateStr = "First nine days of Ashvin month (Sep–Oct)";
        meaning = "Nine nights of worship of the Divine Mother Durga, celebrating the victory of good over evil.";
        mantraName = "Om Dum Durgayei Namaha"; recommendedVerse = "Invoke the Mother through nine nights of devotion.";
        story = "Navratri honors the nine forms of the Divine Mother (Navadurga) and Her battle against the buffalo demon Mahishasura. After nine days and nights of fierce combat, the Mother slew Mahishasura, establishing the triumph of divine shakti over the forces of adharma. The festival culminates in Vijayadashami (Dussehra), the day of victory. Devotees observe fasting, prayer, and the recitation of the Devi Mahatmyam.";
        sourceGranth = "Devi Mahatmyam (Markandeya Purana)"; sourceVerse = "Chapter 2-13 — Mahishasura Vadha"; sourceChapter = "Markandeya Purana, Chapters 81-93" },
      { name = "Maha Shivratri"; dateStr = "Chaturdashi, Phalguna month (Feb–Mar)";
        meaning = "The great night of Lord Shiva, honoring the auspicious Lord of transformation.";
        mantraName = "Om Namah Shivaya"; recommendedVerse = "Chant the Panchakshari through the night of Shiva.";
        story = "Maha Shivratri is the night when Lord Shiva performed the cosmic dance of creation, preservation, and dissolution — the Tandava. It is also the night He married Parvati, uniting consciousness and energy. Devotees stay awake through the night, offering bilva leaves, water, and milk to the Shiva linga, and chanting the Panchakshari mantra. The night is considered especially auspicious for spiritual progress and the dissolving of karma.";
        sourceGranth = "Shiva Purana"; sourceVerse = "Rudra Samhita — marriage of Shiva and Parvati"; sourceChapter = "Shiva Purana, Rudra Samhita, Chapters 30-50" },
      { name = "Ganesh Chaturthi"; dateStr = "Shukla Chaturthi, Bhadrapada month (Aug–Sep)";
        meaning = "The birth festival of Lord Ganesha, the remover of obstacles and Lord of beginnings.";
        mantraName = "Om Gam Ganapataye Namaha"; recommendedVerse = "Invoke the Lord of beginnings before all undertakings.";
        story = "Ganesh Chaturthi celebrates the creation and birth of Lord Ganesha. Parvati created Ganesha from the sandalwood paste of Her body to guard Her chamber. When He barred Lord Shiva from entering, Shiva in anger severed His head. To console a grieving Parvati, Shiva replaced the head with that of an elephant and bestowed upon Ganesha the boon that He would be worshipped first among all gods and invoked at the beginning of every undertaking.";
        sourceGranth = "Shiva Purana"; sourceVerse = "Rudra Samhita — birth of Ganesha"; sourceChapter = "Shiva Purana, Rudra Samhita, Chapter 13" },
      { name = "Raksha Bandhan"; dateStr = "Shravana Purnima (Aug)";
        meaning = "The festival of the sacred bond between brother and sister, of protection and love.";
        mantraName = "Om Namo Narayanaya"; recommendedVerse = "Tie the thread of protection with prayer.";
        story = "Raksha Bandhan celebrates the sacred bond of protection between siblings. A sister ties a rakhi (sacred thread) on her brother's wrist, praying for his well-being, and the brother vows to protect her through all circumstances. The tradition traces to the Mahabharata, where Draupadi tied a strip of her sari on Krishna's wounded finger and He vowed to protect her — a vow He honored during the dice game in the royal court.";
        sourceGranth = "Mahabharata"; sourceVerse = "Sabha Parva — Draupadi vastraharana"; sourceChapter = "Mahabharata, Sabha Parva, Chapters 60-72" },
      { name = "Makar Sankranti"; dateStr = "January 14 (when sun enters Capricorn)";
        meaning = "The harvest festival marking the sun's northward journey and the triumph of light.";
        mantraName = "Om Suryaya Namaha"; recommendedVerse = "Offer the sun the first fruits of your harvest.";
        story = "Makar Sankranti marks the sun's transition into Capricorn (Makara) and the beginning of its northward journey (Uttarayana) — a period considered auspicious in the scriptures. Bhishma, the grandsire of the Kuru dynasty, lay on a bed of arrows awaiting this auspicious period to leave his body, choosing to depart during the sun's northward course. The festival is celebrated with harvest offerings, kite flying, and the worship of Surya.";
        sourceGranth = "Mahabharata"; sourceVerse = "Anushasana Parva — Bhishma's departure"; sourceChapter = "Mahabharata, Anushasana Parva, Chapters 167-168" },
      { name = "Ram Navami"; dateStr = "Chaitra Shukla Navami (Mar–Apr)";
        meaning = "The appearance day of Lord Rama, the embodiment of dharma and the maryada purushottam.";
        mantraName = "Om Ram Ramaya Namaha"; recommendedVerse = "Chant the name of Rama on His appearance day.";
        story = "Ram Navami celebrates the birth of Lord Rama to King Dasharatha and Queen Kausalya of Ayodhya, on the ninth day of the bright fortnight of Chaitra. Born as the seventh avatar of Vishnu, Rama came to establish dharma and to slay the demon Ravana. His life, recorded in the Ramayana, is the supreme example of dharma in action — as son, brother, husband, king, and servant of truth.";
        sourceGranth = "Ramayana (Valmiki)"; sourceVerse = "Bala Kanda — birth of Rama"; sourceChapter = "Ramayana, Bala Kanda, Canto 18" },
      { name = "Dussehra (Vijayadashami)"; dateStr = "Tenth day of Ashvin month (Sep–Oct)";
        meaning = "The festival celebrating the victory of Lord Rama over Ravana and the triumph of dharma.";
        mantraName = "Om Namo Bhagavate Vasudevaya"; recommendedVerse = "Burn the ten vices of Ravana within.";
        story = "Dussehra (Vijayadashami) marks the day Lord Rama slew the ten-headed demon Ravana, who had abducted Sita and embodied the ten vices of the uncontrolled mind. After a fierce battle, Rama, with the blessings of the gods and the aid of Hanuman and the vanara army, defeated Ravana and restored dharma. Effigies of Ravana are burned to symbolize the destruction of ego and adharma within. The festival also concludes the nine days of Navratri.";
        sourceGranth = "Ramayana (Valmiki)"; sourceVerse = "Yuddha Kanda — slaying of Ravana"; sourceChapter = "Ramayana, Yuddha Kanda, Canto 108" },
    ];
    for (f in seed.values()) {
      festivals.add(f.name, f);
    };
  };

  public func initDailyChallenges(challenges : Map.Map<Text, Types.DailyChallenge>) : () {
    let seed : [Types.DailyChallenge] = [
      { date = "mon"; task = "Read Chapter 2, verses 47-72 (Karma Yoga)"; points = 10; action = "read" },
      { date = "tue"; task = "Chant the Gayatri Mantra 108 times"; points = 10; action = "chant" },
      { date = "wed"; task = "Meditate for 15 minutes on the Self (Atma Samyama)"; points = 10; action = "meditate" },
      { date = "thu"; task = "Read Chapter 12 (Bhakti Yoga) and reflect on devotion"; points = 10; action = "read" },
      { date = "fri"; task = "Chant the Hare Krishna Maha Mantra one mala (108)"; points = 10; action = "chant" },
      { date = "sat"; task = "Read Chapter 11 (Vishvarupa) and contemplate the cosmic form"; points = 10; action = "read" },
      { date = "sun"; task = "Practice Karma Yoga: serve one person selflessly today"; points = 15; action = "serve" },
    ];
    for (c in seed.values()) {
      challenges.add(c.date, c);
    };
  };

  // ─── Initialization: Granth Library (Pustakaalaye) ─────────────────────────
  // Seeds the 4 Vedas, 18 Puranas, and 11 principal Upanishads.
  public func initGranths(granths : Map.Map<Text, Types.Granth>) : () {
    let seed : [Types.Granth] = [
      // ── 4 Vedas ──────────────────────────────────────────────────────────
      { id = "rig-veda"; granthType = #veda(#rig); name = "Rig Veda"; sanskritName = "ऋग्वेद";
        description = "The oldest of the four Vedas: 1,028 suktas (hymns) in 10 mandalas, addressed to the cosmic powers (Agni, Indra, Surya, Varuna, and others). The foundation of Vedic revelation (shruti).";
        totalChapters = 10; sourceCitation = "Rig Veda Samhita, 10 Mandalas" },
      { id = "yajur-veda"; granthType = #veda(#yajur); name = "Yajur Veda"; sanskritName = "यजुर्वेद";
        description = "The Veda of ritual formulas (yajus). Provides the prose mantras used in fire sacrifices. Has two recensions: Shukla (White) and Krishna (Black) Yajur Veda.";
        totalChapters = 40; sourceCitation = "Yajur Veda Samhita (Shukla & Krishna)" },
      { id = "sama-veda"; granthType = #veda(#sama); name = "Sama Veda"; sanskritName = "सामवेद";
        description = "The Veda of melodies (saman). Largely drawn from the Rig Veda but set to musical chants for the udgatri priest. The source of Indian classical music.";
        totalChapters = 2; sourceCitation = "Sama Veda Samhita, Archika (Purvarchika & Uttararchika)" },
      { id = "atharva-veda"; granthType = #veda(#atharva); name = "Atharva Veda"; sanskritName = "अथर्ववेद";
        description = "The Veda of everyday life: 730 hymns in 20 kandas covering healing, marriage, prosperity, protection, and the philosophical hymns including the Prashna, Mundaka, and Mandukya Upanishads.";
        totalChapters = 20; sourceCitation = "Atharva Veda Samhita, 20 Kandas" },

      // ── 18 Maha Puranas ───────────────────────────────────────────────────
      { id = "brahma-purana"; granthType = #purana(#brahma); name = "Brahma Purana"; sanskritName = "ब्रह्म पुराण";
        description = "The first of the 18 Maha Puranas. Describes the creation, the lineage of solar and lunar dynasties, and the glories of Purushottama Kshetra (Puri).";
        totalChapters = 245; sourceCitation = "Brahma Purana, 245 Adhyayas" },
      { id = "padma-purana"; granthType = #purana(#padma); name = "Padma Purana"; sanskritName = "पद्म पुराण";
        description = "Named after the lotus (padma) of creation. Contains sections on creation, geography, dharma, and the glories of Vishnu, Shiva, and the sacred places of India.";
        totalChapters = 55; sourceCitation = "Padma Purana, 5 Khandas" },
      { id = "vishnu-purana"; granthType = #purana(#vishnu); name = "Vishnu Purana"; sanskritName = "विष्णु पुराण";
        description = "A concise and authoritative Purana of six amshas covering creation, the ages of Manu, the dynasties, the deeds of Vishnu's avatars (especially Krishna), and the path of devotion.";
        totalChapters = 6; sourceCitation = "Vishnu Purana, 6 Amshas" },
      { id = "shiva-purana"; granthType = #purana(#shiva); name = "Shiva Purana"; sanskritName = "शिव पुराण";
        description = "The principal Purana of Lord Shiva. Contains the Rudra Samhita, the marriage of Shiva and Parvati, the birth of Ganesha and Kartikeya, and the glories of the Shiva linga.";
        totalChapters = 12; sourceCitation = "Shiva Purana, 12 Samhitas" },
      { id = "bhagavata-purana"; granthType = #purana(#bhagavata); name = "Bhagavata Purana"; sanskritName = "भागवत पुराण";
        description = "The crown of the Puranas: 18,000 verses in 12 skandhas. The supreme scripture of bhakti, centered on the lilas of Krishna — His birth, childhood in Gokul, the Rasalila, and the teachings of the Gita and Uddhava.";
        totalChapters = 12; sourceCitation = "Bhagavata Purana, 12 Skandhas, 18,000 shlokas" },
      { id = "narada-purana"; granthType = #purana(#narada); name = "Narada Purana"; sanskritName = "नारद पुराण";
        description = "A Purana spoken by the sage Narada. Contains the glories of Vishnu, the duties of the four ashramas, and many mantras and vows (vratas).";
        totalChapters = 2; sourceCitation = "Narada Purana, Purva & Uttara Khandas" },
      { id = "markandeya-purana"; granthType = #purana(#markandeya); name = "Markandeya Purana"; sanskritName = "मार्कण्डेय पुराण";
        description = "Spoken by the sage Markandeya. Contains the Devi Mahatmyam (Durga Saptashati), the supreme scripture of the Divine Mother, and the stories of Harishchandra and the birds.";
        totalChapters = 137; sourceCitation = "Markandeya Purana, 137 Adhyayas" },
      { id = "agni-purana"; granthType = #purana(#agni); name = "Agni Purana"; sanskritName = "अग्नि पुराण";
        description = "An encyclopedic Purana spoken by Agni to Vasishtha. Covers dharma, politics, medicine, astrology, temple architecture, and the worship of all major deities.";
        totalChapters = 383; sourceCitation = "Agni Purana, 383 Adhyayas" },
      { id = "bhavishya-purana"; granthType = #purana(#bhavishya); name = "Bhavishya Purana"; sanskritName = "भविष्य पुराण";
        description = "The Purana of what is to come (bhavishya). Contains prophecies, the duties of kings, vows, and the worship of Surya and other deities.";
        totalChapters = 4; sourceCitation = "Bhavishya Purana, 4 Parvas" },
      { id = "brahmavaivarta-purana"; granthType = #purana(#brahmavaivarta); name = "Brahmavaivarta Purana"; sanskritName = "ब्रह्मवैवर्त पुराण";
        description = "Centered on Krishna and Radha, and on the creation through the principle of Brahma. Contains the Goloka Khanda and the glories of the divine couple.";
        totalChapters = 4; sourceCitation = "Brahmavaivarta Purana, 4 Khandas" },
      { id = "linga-purana"; granthType = #purana(#linga); name = "Linga Purana"; sanskritName = "लिङ्ग पुराण";
        description = "A Purana devoted to Lord Shiva in His form as the linga. Contains the creation, the duties of the four ashramas, and the glories of Shiva worship.";
        totalChapters = 2; sourceCitation = "Linga Purana, Purva & Uttara Bhagas" },
      { id = "varaha-purana"; granthType = #purana(#varaha); name = "Varaha Purana"; sanskritName = "वराह पुराण";
        description = "Spoken by Lord Varaha (the boar avatar). Contains the glories of sacred places (tirthas), vows, and the worship of Vishnu and Shiva.";
        totalChapters = 217; sourceCitation = "Varaha Purana, 217 Adhyayas" },
      { id = "skanda-purana"; granthType = #purana(#skanda); name = "Skanda Purana"; sanskritName = "स्कन्द पुराण";
        description = "The largest of the Puranas, dedicated to Skanda (Kartikeya). Contains the glories of Shiva, the tirtha yatras, and the marriage of Shiva and Parvati (Kumarasambhava).";
        totalChapters = 7; sourceCitation = "Skanda Purana, 7 Khandas (largest Purana)" },
      { id = "vamana-purana"; granthType = #purana(#vamana); name = "Vamana Purana"; sanskritName = "वामन पुराण";
        description = "Centered on the Vamana (dwarf) avatar of Vishnu and the story of Bali. Contains the glories of sacred places and the worship of Vishnu.";
        totalChapters = 95; sourceCitation = "Vamana Purana, 95 Adhyayas" },
      { id = "kurma-purana"; granthType = #purana(#kurma); name = "Kurma Purana"; sanskritName = "कूर्म पुराण";
        description = "Spoken by Lord Kurma (the tortoise avatar). Contains the creation, the churning of the ocean, and the glories of Shiva and Vishnu.";
        totalChapters = 2; sourceCitation = "Kurma Purana, Purva & Uttara Bhagas" },
      { id = "matsya-purana"; granthType = #purana(#matsya); name = "Matsya Purana"; sanskritName = "मत्स्य पुराण";
        description = "Spoken by Lord Matsya (the fish avatar). Contains the creation, the genealogies, temple architecture, and the duties of the four varnas and ashramas.";
        totalChapters = 291; sourceCitation = "Matsya Purana, 291 Adhyayas" },
      { id = "garuda-purana"; granthType = #purana(#garuda); name = "Garuda Purana"; sanskritName = "गरुड पुराण";
        description = "Spoken by Lord Vishnu to Garuda. Contains the nature of the soul, the afterlife, funeral rites (shraddha), and the path of the departed soul — central to Hindu antyeshti rites.";
        totalChapters = 2; sourceCitation = "Garuda Purana, Purva & Uttara Khandas" },
      { id = "brahmanda-purana"; granthType = #purana(#brahmanda); name = "Brahmanda Purana"; sanskritName = "ब्रह्माण्ड पुराण";
        description = "The Purana of the cosmic egg (brahmanda). Contains the creation, the lineage of kings, and the Lalita Sahasranama (the thousand names of the Divine Mother).";
        totalChapters = 4; sourceCitation = "Brahmanda Purana, 4 Padas" },

      // ── 11 Principal Upanishads ──────────────────────────────────────────
      { id = "isha-upanishad"; granthType = #upanishad(#isha); name = "Isha Upanishad"; sanskritName = "ईशोपनिषद्";
        description = "The Isha (Isavasya) Upanishad, the final chapter (adhyaya 40) of the Shukla Yajur Veda. 18 verses on the all-pervading Self and the harmony of action and renunciation.";
        totalChapters = 1; sourceCitation = "Shukla Yajur Veda, Isha Upanishad (40th Adhyaya)" },
      { id = "kena-upanishad"; granthType = #upanishad(#kena); name = "Kena Upanishad"; sanskritName = "केनोपनिषद्";
        description = "The Kena Upanishad of the Sama Veda. 4 sections (khanda) on the power by which the mind and senses function — the Self that cannot be known by the mind.";
        totalChapters = 4; sourceCitation = "Sama Veda, Kena Upanishad (Talavakara)" },
      { id = "katha-upanishad"; granthType = #upanishad(#katha); name = "Katha Upanishad"; sanskritName = "कठोपनिषद्";
        description = "The Katha (Kathaka) Upanishad of the Krishna Yajur Veda. The dialogue of Nachiketa and Yama on the nature of the Self and the path to immortality (the chariot analogy).";
        totalChapters = 6; sourceCitation = "Krishna Yajur Veda, Katha Upanishad, 2 Adhyayas, 6 Vallis" },
      { id = "prashna-upanishad"; granthType = #upanishad(#prashna); name = "Prashna Upanishad"; sanskritName = "प्रश्नोपनिषद्";
        description = "The Prashna Upanishad of the Atharva Veda. Six questions posed by six disciples to the sage Pippalada on the origins of life, the vital breath (prana), and the Self.";
        totalChapters = 6; sourceCitation = "Atharva Veda, Prashna Upanishad, 6 Prashnas" },
      { id = "mundaka-upanishad"; granthType = #upanishad(#mundaka); name = "Mundaka Upanishad"; sanskritName = "मुण्डकोपनिषद्";
        description = "The Mundaka Upanishad of the Atharva Veda. 3 mundakas (parts) on the two kinds of knowledge (para and apara) and the way to Brahman through the symbol Om.";
        totalChapters = 3; sourceCitation = "Atharva Veda, Mundaka Upanishad, 3 Mundakas" },
      { id = "mandukya-upanishad"; granthType = #upanishad(#mandukya); name = "Mandukya Upanishad"; sanskritName = "माण्डूक्योपनिषद्";
        description = "The Mandukya Upanishad of the Atharva Veda. Just 12 verses on the syllable Om and the four states of consciousness (waking, dream, deep sleep, and turiya). The seed of Advaita Vedanta.";
        totalChapters = 1; sourceCitation = "Atharva Veda, Mandukya Upanishad, 12 Mantras" },
      { id = "taittiriya-upanishad"; granthType = #upanishad(#taittiriya); name = "Taittiriya Upanishad"; sanskritName = "तैत्तिरीयोपनिषद्";
        description = "The Taittiriya Upanishad of the Krishna Yajur Veda. 3 vallis (Shiksha, Brahmananda, Bhrigu) on the science of pronunciation, the sheaths of the Self, and the bliss of Brahman.";
        totalChapters = 3; sourceCitation = "Krishna Yajur Veda, Taittiriya Upanishad, 3 Vallis" },
      { id = "aitareya-upanishad"; granthType = #upanishad(#aitareya); name = "Aitareya Upanishad"; sanskritName = "ऐतरेयोपनिषद्";
        description = "The Aitareya Upanishad of the Rig Veda. 3 adhyayas on the creation of the world from the Self (Atman), the birth of the senses, and the identity of the Self with Brahman.";
        totalChapters = 3; sourceCitation = "Rig Veda, Aitareya Upanishad, 3 Adhyayas" },
      { id = "chandogya-upanishad"; granthType = #upanishad(#chandogya); name = "Chandogya Upanishad"; sanskritName = "छान्दोग्योपनिषद्";
        description = "The Chandogya Upanishad of the Sama Veda. 8 prapathakas — one of the largest and oldest Upanishads. Contains the Mahavakya 'Tat Tvam Asi' and the teachings on Om, the heart, and the Self.";
        totalChapters = 8; sourceCitation = "Sama Veda, Chandogya Upanishad, 8 Prapathakas" },
      { id = "brihadaranyaka-upanishad"; granthType = #upanishad(#brihadaranyaka); name = "Brihadaranyaka Upanishad"; sanskritName = "बृहदारण्यकोपनिषद्";
        description = "The Brihadaranyaka Upanishad of the Shukla Yajur Veda. 6 adhyayas — the largest Upanishad. Contains the Mahavakya 'Aham Brahmasmi', the dialogues of Yajnavalkya, and the Neti Neti path.";
        totalChapters = 6; sourceCitation = "Shukla Yajur Veda, Brihadaranyaka Upanishad, 6 Adhyayas" },
      { id = "shvetashvatara-upanishad"; granthType = #upanishad(#shvetashvatara); name = "Shvetashvatara Upanishad"; sanskritName = "श्वेताश्वतरोपनिषद्";
        description = "The Shvetashvatara Upanishad of the Krishna Yajur Veda. 6 adhyayas blending Vedanta and theism, on the unity of the Self and the Lord, and the path of devotion and meditation.";
        totalChapters = 6; sourceCitation = "Krishna Yajur Veda, Shvetashvatara Upanishad, 6 Adhyayas" },
    ];
    for (g in seed.values()) {
      granths.add(g.id, g);
    };
  };

  // ─── Initialization: Granth chapters (chapter metadata for each granth) ───
  public func initGranthChapters(granthChapters : Map.Map<(Text, Nat), Types.GranthChapter>) : () {
    let seed : [Types.GranthChapter] = [
      // ── Rig Veda — 10 Mandalas ───────────────────────────────────────────
      { granthId = "rig-veda"; chapterId = 1; name = "Mandala 1 — Agni & Indra"; sanskritName = "प्रथम मण्डल"; summary = "Hymns to Agni and Indra, the foremost deities of the Vedic pantheon, by the family of Atri and others."; verseCount = 191 },
      { granthId = "rig-veda"; chapterId = 2; name = "Mandala 2 — Gritsamada"; sanskritName = "द्वितीय मण्डल"; summary = "Hymns chiefly by the sage Gritsamada, devoted to Indra, Agni, and the All-Gods (Vishvedevas)."; verseCount = 43 },
      { granthId = "rig-veda"; chapterId = 3; name = "Mandala 3 — Vishvamitra"; sanskritName = "तृतीय मण्डल"; summary = "The Gayatri Mantra (RV 3.62.10) and hymns by the sage Vishvamitra to Savitr, Indra, and others."; verseCount = 62 },
      { granthId = "rig-veda"; chapterId = 10; name = "Mandala 10 — Purusha Sukta & Nasadiya"; sanskritName = "दशम मण्डल"; summary = "The Purusha Sukta (cosmic Person), the Nasadiya Sukta (hymn of creation), and the Vak Sukta — the philosophical summit of the Rig Veda."; verseCount = 191 },

      // ── Yajur Veda — chapters (kandas) ───────────────────────────────────
      { granthId = "yajur-veda"; chapterId = 1; name = "Adhyaya 1 — Agni offerings"; sanskritName = "प्रथम अध्याय"; summary = "Opening invocations and the mantras for the Agnihotra, the daily fire offering."; verseCount = 12 },
      { granthId = "yajur-veda"; chapterId = 25; name = "Adhyaya 25 — Rudra"; sanskritName = "पञ्चविंश अध्याय"; summary = "The Shatarudriya — the hundred-fold invocation of Rudra, the fierce and auspicious form of Shiva."; verseCount = 8 },
      { granthId = "yajur-veda"; chapterId = 40; name = "Adhyaya 40 — Isha Upanishad"; sanskritName = "चत्वारिंश अध्याय"; summary = "The Isha (Isavasya) Upanishad: 18 verses on the all-pervading Self and the harmony of action and renunciation."; verseCount = 18 },

      // ── Sama Veda — 2 Archikas ────────────────────────────────────────────
      { granthId = "sama-veda"; chapterId = 1; name = "Purvarchika — first collection"; sanskritName = "पूर्वार्चिक"; summary = "The first collection of Sama chants, organized by deity and priest, for the morning liturgy."; verseCount = 650 },
      { granthId = "sama-veda"; chapterId = 2; name = "Uttararchika — second collection"; sanskritName = "उत्तरार्चिक"; summary = "The second collection of Sama chants, used in the afternoon and evening liturgies."; verseCount = 1225 },

      // ── Atharva Veda — 20 Kandas ──────────────────────────────────────────
      { granthId = "atharva-veda"; chapterId = 1; name = "Kanda 1 — healing & protection"; sanskritName = "प्रथम काण्ड"; summary = "Hymns for healing illness, long life, and protection from demons and misfortune."; verseCount = 7 },
      { granthId = "atharva-veda"; chapterId = 10; name = "Kanda 10 — Prashna & Mundaka"; sanskritName = "दशम काण्ड"; summary = "Contains the Prashna and Mundaka Upanishads — philosophical teachings on the Self and the syllable Om."; verseCount = 9 },
      { granthId = "atharva-veda"; chapterId = 11; name = "Kanda 11 — Mandukya"; sanskritName = "एकादश काण्ड"; summary = "Contains the Mandukya Upanishad — 12 verses on Om and the four states of consciousness."; verseCount = 12 },

      // ── Bhagavata Purana — 12 Skandhas (representative) ──────────────────
      { granthId = "bhagavata-purana"; chapterId = 1; name = "Skandha 1 — Invocation & lineage"; sanskritName = "प्रथम स्कन्ध"; summary = "The invocation, the lineage of Parikshit, and the vow of fasting unto death by King Parikshit."; verseCount = 19 },
      { granthId = "bhagavata-purana"; chapterId = 10; name = "Skandha 10 — Krishna Lilas"; sanskritName = "दशम स्कन्ध"; summary = "The crown of the Bhagavata: the birth, childhood, Rasalila, and divine lilas of Lord Krishna in Vrindavan and Mathura."; verseCount = 90 },
      { granthId = "bhagavata-purana"; chapterId = 11; name = "Skandha 11 — Uddhava Gita"; sanskritName = "एकादश स्कन्ध"; summary = "The final teachings of Krishna to Uddhava before His departure — the Uddhava Gita, the summit of bhakti and jnana."; verseCount = 31 },
      { granthId = "bhagavata-purana"; chapterId = 12; name = "Skandha 12 — Dissolution"; sanskritName = "द्वादश स्कन्ध"; summary = "The departure of Krishna, the reign of Parikshit's successors, the coming of Kaliyug, and the final dissolution."; verseCount = 13 },

      // ── Vishnu Purana — 6 Amshas ─────────────────────────────────────────
      { granthId = "vishnu-purana"; chapterId = 1; name = "Amsha 1 — Creation"; sanskritName = "प्रथम अंश"; summary = "The creation of the universe, the ages of Manu, and the lineage of the solar and lunar dynasties."; verseCount = 15 },
      { granthId = "vishnu-purana"; chapterId = 5; name = "Amsha 5 — Krishna Avatar"; sanskritName = "पञ्चम अंश"; summary = "The deeds of Krishna: His birth, the slaying of Kamsa, the Kurukshetra war, and the departure of the Yadu clan."; verseCount = 38 },

      // ── Shiva Purana — Rudra Samhita (representative) ─────────────────────
      { granthId = "shiva-purana"; chapterId = 1; name = "Rudra Samhita — Srishti Khanda"; sanskritName = "सृष्टि खण्ड"; summary = "The creation through Shiva, the marriage of Shiva and Parvati, and the birth of Kartikeya."; verseCount = 20 },
      { granthId = "shiva-purana"; chapterId = 2; name = "Rudra Samhita — Sati Khanda"; sanskritName = "सती खण्ड"; summary = "The story of Sati, Her self-offering at Daksha's sacrifice, and Shiva's grief and dance of dissolution."; verseCount = 25 },

      // ── Markandeya Purana — Devi Mahatmyam ────────────────────────────────
      { granthId = "markandeya-purana"; chapterId = 1; name = "Prathama Charitra — Madhu-Kaitabha"; sanskritName = "प्रथम चरित्र"; summary = "The first charitra: the Mother slays the demons Madhu and Kaitabha, who arose from Vishnu's ear during cosmic sleep."; verseCount = 1 },
      { granthId = "markandeya-purana"; chapterId = 2; name = "Madhyama Charitra — Mahishasura"; sanskritName = "मध्यम चरित्र"; summary = "The central charitra: the Mother as Durga battles and slays the buffalo demon Mahishasura after nine days of combat."; verseCount = 12 },
      { granthId = "markandeya-purana"; chapterId = 3; name = "Uttama Charitra — Shumbha-Nishumbha"; sanskritName = "उत्तम चरित्र"; summary = "The final charitra: the Mother slays the demons Shumbha and Nishumbha, establishing the triumph of shakti."; verseCount = 13 },

      // ── Garuda Purana — funeral rites (representative) ────────────────────
      { granthId = "garuda-purana"; chapterId = 1; name = "Pretakhanda — the departed"; sanskritName = "प्रेतखण्ड"; summary = "The journey of the departed soul, the nature of the afterlife, and the funeral rites (shraddha) that aid the soul's passage."; verseCount = 35 },

      // ── Isha Upanishad ───────────────────────────────────────────────────
      { granthId = "isha-upanishad"; chapterId = 1; name = "Adhyaya 1 — the all-pervading Isha"; sanskritName = "ईशावास्यम्"; summary = "The 18 mantras on the Self that pervades all, the harmony of action and renunciation, and the path of vidya and avidya."; verseCount = 18 },

      // ── Kena Upanishad ───────────────────────────────────────────────────
      { granthId = "kena-upanishad"; chapterId = 1; name = "Khanda 1 — by what does the mind think?"; sanskritName = "केन"; summary = "The opening question: by what power does the mind think, the eye see, the ear hear? The Self that cannot be known by the mind."; verseCount = 4 },
      { granthId = "kena-upanishad"; chapterId = 4; name = "Khanda 4 — the parable of the gods"; sanskritName = "यक्ष"; summary = "Agni, Vayu, and Indra fail to comprehend the Yaksha (Brahman); only through the grace of the Self is It known."; verseCount = 4 },

      // ── Katha Upanishad ──────────────────────────────────────────────────
      { granthId = "katha-upanishad"; chapterId = 1; name = "Valli 1 — Nachiketa's three boons"; sanskritName = "नचिकेता"; summary = "Nachiketa is offered three boons by Yama; the third is the knowledge of what lies beyond death."; verseCount = 1 },
      { granthId = "katha-upanishad"; chapterId = 3; name = "Valli 3 — the chariot analogy"; sanskritName = "रथ"; summary = "The Self is the lord of the chariot, the body the chariot, the intellect the charioteer, the mind the reins, and the senses the horses."; verseCount = 1 },
      { granthId = "katha-upanishad"; chapterId = 6; name = "Valli 6 — the path of the wise"; sanskritName = "अहंता"; summary = "The path of the wise and the path of the foolish; the Self is to be realized through the subtle intellect."; verseCount = 1 },

      // ── Mundaka Upanishad ────────────────────────────────────────────────
      { granthId = "mundaka-upanishad"; chapterId = 1; name = "Mundaka 1 — para and apara vidya"; sanskritName = "परा अपरा"; summary = "The two kinds of knowledge: the lower (the Vedas and sciences) and the higher (that by which the imperishable is known)."; verseCount = 1 },
      { granthId = "mundaka-upanishad"; chapterId = 2; name = "Mundaka 2 — the bow of Om"; sanskritName = "ॐ धनुष"; summary = "The Self is to be struck with the bow of Om, the arrow of the Self, and the bowstring of steadfast meditation."; verseCount = 1 },

      // ── Mandukya Upanishad ───────────────────────────────────────────────
      { granthId = "mandukya-upanishad"; chapterId = 1; name = "Adhyaya 1 — Om and the four states"; sanskritName = "ॐ चतुष्पात्"; summary = "The 12 mantras on Om (A-U-M) and the four states: waking (jagrat), dream (svapna), deep sleep (sushupti), and turiya."; verseCount = 12 },

      // ── Chandogya Upanishad — Tat Tvam Asi ───────────────────────────────
      { granthId = "chandogya-upanishad"; chapterId = 6; name = "Prapathaka 6 — Tat Tvam Asi"; sanskritName = "तत् त्वम् असि"; summary = "Uddalaka Aruni teaches his son Shvetaketu the Mahavakya 'Tat Tvam Asi' — 'That thou art' — through nine analogies."; verseCount = 16 },

      // ── Brihadaranyaka Upanishad — Yajnavalkya ───────────────────────────
      { granthId = "brihadaranyaka-upanishad"; chapterId = 1; name = "Adhyaya 1 — Madhu Vidya"; sanskritName = "मधु विद्या"; summary = "The Madhu Vidya of Dadhyak Atharvana: all beings are connected like honeycombs in the Self that pervades all."; verseCount = 6 },
      { granthId = "brihadaranyaka-upanishad"; chapterId = 2; name = "Adhyaya 2 — Yajnavalkya & Maitreyi"; sanskritName = "मैत्रेयी"; summary = "Yajnavalkya's discourse to his wife Maitreyi: the Self is not loved for its sake but for the sake of the Self that one loves all."; verseCount = 6 },
      { granthId = "brihadaranyaka-upanishad"; chapterId = 4; name = "Adhyaya 4 — Neti Neti"; sanskritName = "नेति नेति"; summary = "Yajnavalkya teaches King Janaka the path of 'Neti Neti' — the Self is not this, not this — beyond all description."; verseCount = 6 },
    ];
    for (c in seed.values()) {
      granthChapters.add(compareTextNat, (c.granthId, c.chapterId), c);
    };
  };

  // ─── Initialization: Granth verses (representative, 3-layer display) ───────
  public func initGranthVerses(granthVerses : Map.Map<(Text, Nat, Nat), Types.GranthVerse>) : () {
    let seed : [Types.GranthVerse] = [
      // ── Rig Veda 1.1.1 — first verse, to Agni ─────────────────────────────
      { granthId = "rig-veda"; chapterId = 1; verseId = 1; verseNumber = "1.1.1";
        sanskritDevanagari = "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्। होतारं रत्नधातमम्॥";
        sanskritTransliteration = "agnim īḷe purohitaṃ yajñasya devam ṛtvijam | hotāraṃ ratnadhātamam ||";
        simpleMeaning = "I praise Agni, the priest of the sacrifice, the divine minister, the offerer of oblations, the bestower of wealth.";
        sourceGranth = "Rig Veda"; sourceChapter = 1; sourceVerse = "1.1.1" },

      // ── Rig Veda 3.62.10 — the Gayatri Mantra ─────────────────────────────
      { granthId = "rig-veda"; chapterId = 3; verseId = 10; verseNumber = "3.62.10";
        sanskritDevanagari = "तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥";
        sanskritTransliteration = "tat savitur vareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt ||";
        simpleMeaning = "May we meditate on the glorious splendor of the divine Savitr (the sun); may He illumine our intellects.";
        sourceGranth = "Rig Veda"; sourceChapter = 3; sourceVerse = "3.62.10" },

      // ── Rig Veda 10.90 — Purusha Sukta (opening) ──────────────────────────
      { granthId = "rig-veda"; chapterId = 10; verseId = 1; verseNumber = "10.90.1";
        sanskritDevanagari = "सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात्। स भूमिं विश्वतो वृत्वात्यतिष्ठत्दशाङ्गुलम्॥";
        sanskritTransliteration = "sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt | sa bhūmiṃ viśvato vṛtvātyatiṣṭhatdaśāṅgulam ||";
        simpleMeaning = "The cosmic Person (Purusha) has a thousand heads, a thousand eyes, and a thousand feet. He pervades the earth on all sides and stands beyond it by ten fingers' breadth.";
        sourceGranth = "Rig Veda"; sourceChapter = 10; sourceVerse = "10.90.1" },

      // ── Rig Veda 10.129 — Nasadiya Sukta (creation hymn) ──────────────────
      { granthId = "rig-veda"; chapterId = 10; verseId = 2; verseNumber = "10.129.1";
        sanskritDevanagari = "नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत्।";
        sanskritTransliteration = "nāsadāsīnno sadāsīttadānīṃ nāsīdrajo no vyomā paro yat";
        simpleMeaning = "There was neither non-existence nor existence then. There was neither the realm of space nor the sky beyond it.";
        sourceGranth = "Rig Veda"; sourceChapter = 10; sourceVerse = "10.129.1" },

      // ── Yajur Veda 40.1 — Isha Upanishad opening ──────────────────────────
      { granthId = "yajur-veda"; chapterId = 40; verseId = 1; verseNumber = "40.1";
        sanskritDevanagari = "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥";
        sanskritTransliteration = "īśāvāsyamidaṃ sarvaṃ yatkiñca jagatyāṃ jagat | tena tyaktena bhuñjīthā mā gṛdhaḥ kasyasviddhanam ||";
        simpleMeaning = "All this — whatever moves on the earth — is enveloped by the Lord. Enjoy with renunciation; do not covet anyone's wealth.";
        sourceGranth = "Yajur Veda (Isha Upanishad)"; sourceChapter = 40; sourceVerse = "40.1" },

      // ── Yajur Veda 40.5 — Isha Upanishad ──────────────────────────────────
      { granthId = "yajur-veda"; chapterId = 40; verseId = 5; verseNumber = "40.5";
        sanskritDevanagari = "तदेजति तन्नैजति तद्दूरे तद्वन्तिके। तदन्तरस्य सर्वस्य तदु सर्वस्यास्य बाह्यतः॥";
        sanskritTransliteration = "tadejati tannaijati taddūre tadvantike | tadantarasya sarvasya tadu sarvasyāsya bāhyataḥ ||";
        simpleMeaning = "It moves and moves not. It is far and near. It is within all this and also outside all this.";
        sourceGranth = "Yajur Veda (Isha Upanishad)"; sourceChapter = 40; sourceVerse = "40.5" },

      // ── Atharva Veda — Mandukya Upanishad verse 1 ─────────────────────────
      { granthId = "atharva-veda"; chapterId = 11; verseId = 1; verseNumber = "Mandukya 1";
        sanskritDevanagari = "ॐ इत्येतदक्षरमिदं सर्वम्।";
        sanskritTransliteration = "om ityetadakṣaramidaṃ sarvam";
        simpleMeaning = "Om — this syllable is all this. Its explanation: all that was, is, and will be is Om; and whatever is beyond these three times is also Om.";
        sourceGranth = "Atharva Veda (Mandukya Upanishad)"; sourceChapter = 11; sourceVerse = "Mandukya 1" },

      // ── Atharva Veda — Mandukya Upanishad verse 7 (turiya) ────────────────
      { granthId = "atharva-veda"; chapterId = 11; verseId = 7; verseNumber = "Mandukya 7";
        sanskritDevanagari = "नान्तःप्रज्ञं न बहिःप्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम्।";
        sanskritTransliteration = "nāntaḥprajñaṃ na bahiḥprajñaṃ nobhayataḥprajñaṃ na prajñānaghanaṃ na prajñaṃ nāprajñam";
        simpleMeaning = "Turiya (the fourth) is not the inward-facing consciousness, nor the outward, nor both; not a mass of cognition, not cognitive, not non-cognitive. It is unseen, beyond grasp, ungraspable — the peaceful, auspicious, non-dual Self.";
        sourceGranth = "Atharva Veda (Mandukya Upanishad)"; sourceChapter = 11; sourceVerse = "Mandukya 7" },

      // ── Bhagavata Purana 10.1 — invocation to Krishna's birth ─────────────
      { granthId = "bhagavata-purana"; chapterId = 10; verseId = 1; verseNumber = "10.1.4";
        sanskritDevanagari = "कृष्णं वन्दे जगद्गुरुम्।";
        sanskritTransliteration = "kṛṣṇaṃ vande jagadgurum";
        simpleMeaning = "I bow to Krishna, the teacher of the universe — the Supreme Lord who descends to protect dharma and bestow His grace.";
        sourceGranth = "Bhagavata Purana"; sourceChapter = 10; sourceVerse = "10.1.4" },

      // ── Bhagavata Purana 10.14 — Brahma's surrender to Krishna ────────────
      { granthId = "bhagavata-purana"; chapterId = 10; verseId = 2; verseNumber = "10.14.8";
        sanskritDevanagari = "नाथं नाथस्य नाथस्य नाथो नाथो न चापि ते।";
        sanskritTransliteration = "nāthaṃ nāthasya nāthasya nātho nātho na cāpi te";
        simpleMeaning = "O Lord of the lords of the universe, I bow to You. You are the source of all that exists — the creator, sustainer, and dissolver of all worlds.";
        sourceGranth = "Bhagavata Purana"; sourceChapter = 10; sourceVerse = "10.14.8" },

      // ── Vishnu Purana 1.1 — invocation ───────────────────────────────────
      { granthId = "vishnu-purana"; chapterId = 1; verseId = 1; verseNumber = "1.1.1";
        sanskritDevanagari = "ॐ नमो विष्णवे भगवते।";
        sanskritTransliteration = "om namo viṣṇave bhagavate";
        simpleMeaning = "Om. Salutations to Bhagavan Vishnu, the all-pervading Lord, the source and refuge of all beings.";
        sourceGranth = "Vishnu Purana"; sourceChapter = 1; sourceVerse = "1.1.1" },

      // ── Shiva Purana — Shiva's grace ──────────────────────────────────────
      { granthId = "shiva-purana"; chapterId = 1; verseId = 1; verseNumber = "Rudra Samhita 1.1";
        sanskritDevanagari = "ॐ नमः शिवाय शान्ताय शिवरूपाय वै नमः।";
        sanskritTransliteration = "om namaḥ śivāya śāntāya śivarūpāya vai namaḥ";
        simpleMeaning = "Om. Salutations to Shiva, the peaceful one, to the very form of auspiciousness — I bow again and again.";
        sourceGranth = "Shiva Purana"; sourceChapter = 1; sourceVerse = "Rudra Samhita 1.1" },

      // ── Markandeya Purana — Devi Mahatmyam 1.1 (opening) ─────────────────
      { granthId = "markandeya-purana"; chapterId = 2; verseId = 1; verseNumber = "DM 1.1";
        sanskritDevanagari = "ॐ देव्यै नमः। सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।";
        sanskritTransliteration = "om devyai namaḥ | sarvamaṅgalamāṅgalye śive sarvārthasādhike";
        simpleMeaning = "Om. Salutations to the Devi. O auspicious among the auspicious, O Shiva (the auspicious One), O fulfiller of all aims — I bow to You who are the refuge of all.";
        sourceGranth = "Markandeya Purana (Devi Mahatmyam)"; sourceChapter = 2; sourceVerse = "DM 1.1" },

      // ── Markandeya Purana — Devi Mahatmyam 11 (Durga's slaying of Mahisha) ─
      { granthId = "markandeya-purana"; chapterId = 2; verseId = 2; verseNumber = "DM 11.18";
        sanskritDevanagari = "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥";
        sanskritTransliteration = "yā devī sarvabhūteṣu śaktirūpeṇa saṃsthitā | namastasyai namastasyai namastasyai namo namaḥ ||";
        simpleMeaning = "Salutations again and again to the Devi who abides in all beings as power (shakti). Salutations, salutations, salutations to Her.";
        sourceGranth = "Markandeya Purana (Devi Mahatmyam)"; sourceChapter = 2; sourceVerse = "DM 11.18" },

      // ── Isha Upanishad verse 1 (cross-granth reference) ───────────────────
      { granthId = "isha-upanishad"; chapterId = 1; verseId = 1; verseNumber = "Isha 1";
        sanskritDevanagari = "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।";
        sanskritTransliteration = "īśāvāsyamidaṃ sarvaṃ yatkiñca jagatyāṃ jagat";
        simpleMeaning = "All this — whatever moves on the earth — is enveloped by the Lord. Renounce and enjoy; covet not anyone's wealth.";
        sourceGranth = "Isha Upanishad"; sourceChapter = 1; sourceVerse = "Isha 1" },

      // ── Isha Upanishad verse 15 (the face of truth) ───────────────────────
      { granthId = "isha-upanishad"; chapterId = 1; verseId = 15; verseNumber = "Isha 15";
        sanskritDevanagari = "हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम्। तत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये॥";
        sanskritTransliteration = "hiraṇmayena pātreṇa satyasyāpihitaṃ mukham | tattvaṃ pūṣannapāvṛṇu satyadharmāya dṛṣṭaye ||";
        simpleMeaning = "The face of truth is covered with a golden lid. O Pushan, uncover it, that I who am devoted to truth may behold it.";
        sourceGranth = "Isha Upanishad"; sourceChapter = 1; sourceVerse = "Isha 15" },

      // ── Kena Upanishad 1.1 ────────────────────────────────────────────────
      { granthId = "kena-upanishad"; chapterId = 1; verseId = 1; verseNumber = "Kena 1.1";
        sanskritDevanagari = "केनेषितं पतति प्रेषितं मनः केन प्राणः प्रथमः प्रैति युक्तः।";
        sanskritTransliteration = "keneṣitaṃ patati preṣitaṃ manaḥ kena prāṇaḥ prathamaḥ praiti yuktaḥ";
        simpleMeaning = "By what will (desire) does the mind fly forth? By what command does the first breath move? At whose will do we utter this speech? What god directs the eye and the ear?";
        sourceGranth = "Kena Upanishad"; sourceChapter = 1; sourceVerse = "Kena 1.1" },

      // ── Kena Upanishad 2.3 — the paradox of knowing Brahman ───────────────
      { granthId = "kena-upanishad"; chapterId = 4; verseId = 1; verseNumber = "Kena 2.3";
        sanskritDevanagari = "यन्मनसा न मनुते येनाहुर्मनो मतम्। तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते॥";
        sanskritTransliteration = "yanmanasā na manute yenāhurmano matam | tadeva brahma tvaṃ viddhi nedaṃ yadidamupāsate ||";
        simpleMeaning = "That which is not thought by the mind, but by which the mind thinks — know that alone as Brahman, not this which people worship here.";
        sourceGranth = "Kena Upanishad"; sourceChapter = 4; sourceVerse = "Kena 2.3" },

      // ── Katha Upanishad 1.3.3 — the chariot analogy ───────────────────────
      { granthId = "katha-upanishad"; chapterId = 3; verseId = 1; verseNumber = "Katha 1.3.3";
        sanskritDevanagari = "आत्मानं रथिनं विद्धि शरीरं रथमेव तु। बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च॥";
        sanskritTransliteration = "ātmānaṃ rathinaṃ viddhi śarīraṃ rathameva tu | buddhiṃ tu sārathiṃ viddhi manaḥ pragrahameva ca ||";
        simpleMeaning = "Know the Self as the lord of the chariot, the body as the chariot, the intellect as the charioteer, and the mind as the reins.";
        sourceGranth = "Katha Upanishad"; sourceChapter = 3; sourceVerse = "Katha 1.3.3" },

      // ── Katha Upanishad 2.3.14 — the path of the wise ──────────────────────
      { granthId = "katha-upanishad"; chapterId = 6; verseId = 1; verseNumber = "Katha 2.3.14";
        sanskritDevanagari = "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।";
        sanskritTransliteration = "uttiṣṭhata jāgrata prāpya varānnibodhata";
        simpleMeaning = "Arise! Awake! Approach the great teachers and learn. The path is sharp like a razor — difficult to traverse, the wise declare.";
        sourceGranth = "Katha Upanishad"; sourceChapter = 6; sourceVerse = "Katha 2.3.14" },

      // ── Mundaka Upanishad 1.1.5 — para and apara vidya ────────────────────
      { granthId = "mundaka-upanishad"; chapterId = 1; verseId = 1; verseNumber = "Mundaka 1.1.5";
        sanskritDevanagari = "धर्मं चार्थं च कामं च मोक्षं च चतुर्विधम्।";
        sanskritTransliteration = "dharmaṃ cārthaṃ ca kāmaṃ ca mokṣaṃ ca caturvidham";
        simpleMeaning = "The two kinds of knowledge: the lower (the Vedas, phonetics, rituals, grammar, etc.) and the higher — that by which the imperishable Brahman is attained.";
        sourceGranth = "Mundaka Upanishad"; sourceChapter = 1; sourceVerse = "Mundaka 1.1.5" },

      // ── Mundaka Upanishad 2.2.8 — the bow of Om ───────────────────────────
      { granthId = "mundaka-upanishad"; chapterId = 2; verseId = 1; verseNumber = "Mundaka 2.2.8";
        sanskritDevanagari = "ओमित्येतदक्षरमिद्गुर्वं धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते।";
        sanskritTransliteration = "omityetadakṣaramidgurvaṃ dhanuḥ śaro hyātmā brahma tallakṣyamucyate";
        simpleMeaning = "Take the great weapon of the Upanishad as the bow; place the arrow of the Self sharpened by meditation; draw it with the mind engaged in the thought of That (Brahman); and strike the target.";
        sourceGranth = "Mundaka Upanishad"; sourceChapter = 2; sourceVerse = "Mundaka 2.2.8" },

      // ── Mandukya Upanishad verse 12 — turiya ──────────────────────────────
      { granthId = "mandukya-upanishad"; chapterId = 1; verseId = 12; verseNumber = "Mandukya 12";
        sanskritDevanagari = "तुरीयं शान्तमद्वैतं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः।";
        sanskritTransliteration = "turīyaṃ śāntamadvaitaṃ caturthaṃ manyante sa ātmā sa vijñeyaḥ";
        simpleMeaning = "They call the fourth (turiya) the peaceful, the non-dual. This is the Self; this is to be known.";
        sourceGranth = "Mandukya Upanishad"; sourceChapter = 1; sourceVerse = "Mandukya 12" },

      // ── Chandogya Upanishad 6.8.7 — Tat Tvam Asi ──────────────────────────
      { granthId = "chandogya-upanishad"; chapterId = 6; verseId = 1; verseNumber = "Chandogya 6.8.7";
        sanskritDevanagari = "स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो।";
        sanskritTransliteration = "sa ya eṣo'ṇimaitadātmyamidaṃ sarvaṃ tatsatyaṃ sa ātmā tattvamasi śvetaketo";
        simpleMeaning = "That which is the subtle essence — in it all that exists has its Self. That is the truth. That is the Self. Thou art that, O Shvetaketu.";
        sourceGranth = "Chandogya Upanishad"; sourceChapter = 6; sourceVerse = "Chandogya 6.8.7" },

      // ── Brihadaranyaka Upanishad 1.4.10 — Aham Brahmasmi ──────────────────
      { granthId = "brihadaranyaka-upanishad"; chapterId = 1; verseId = 1; verseNumber = "Brihad 1.4.10";
        sanskritDevanagari = "ब्रह्म वा इदमग्र आसीत्। तदात्मानमेवावेत्। अहं ब्रह्मास्मीति।";
        sanskritTransliteration = "brahma vā idamagra āsīt | tadātmānamevāvet | ahaṃ brahmāsmīti";
        simpleMeaning = "In the beginning this was Brahman alone. It knew itself as 'I am Brahman' — therefore it became all. Whoever knows this becomes all.";
        sourceGranth = "Brihadaranyaka Upanishad"; sourceChapter = 1; sourceVerse = "Brihad 1.4.10" },

      // ── Brihadaranyaka Upanishad 2.4.14 — Neti Neti ───────────────────────
      { granthId = "brihadaranyaka-upanishad"; chapterId = 2; verseId = 1; verseNumber = "Brihad 2.4.14";
        sanskritDevanagari = "नेति नेति। अतः श्रुयते अनामयम्।";
        sanskritTransliteration = "neti neti | ataḥ śruyate anāmayam";
        simpleMeaning = "Not this, not this. By this (the Self) is not described. There is no other and no better description than 'Not this, not this.'";
        sourceGranth = "Brihadaranyaka Upanishad"; sourceChapter = 2; sourceVerse = "Brihad 2.4.14" },

      // ── Brihadaranyaka Upanishad 4.5.6 — for the sake of the Self ──────────
      { granthId = "brihadaranyaka-upanishad"; chapterId = 4; verseId = 1; verseNumber = "Brihad 4.5.6";
        sanskritDevanagari = "न प्रियं प्रियमर्थं प्रियं न प्रियाय प्रियमर्थम्। आत्मनस्तु कामाय सर्वं प्रियं भवति।";
        sanskritTransliteration = "na priyaṃ priyamarthaṃ priyaṃ na priyāya priyamartham | ātmanastu kāmāya sarvaṃ priyaṃ bhavati";
        simpleMeaning = "It is not for the sake of the husband that the husband is loved, but for the sake of the Self. It is not for the sake of all that all is loved, but for the sake of the Self that all is loved.";
        sourceGranth = "Brihadaranyaka Upanishad"; sourceChapter = 4; sourceVerse = "Brihad 4.5.6" },

      // ── Shvetashvatara Upanishad 6.11 — the one God ───────────────────────
      { granthId = "shvetashvatara-upanishad"; chapterId = 6; verseId = 1; verseNumber = "Shveta 6.11";
        sanskritDevanagari = "एको देवः सर्वभूतेषु गूढः सर्वव्यापी सर्वभूतान्तरात्मा।";
        sanskritTransliteration = "eko devaḥ sarvabhūteṣu gūḍhaḥ sarvavyāpī sarvabhūtāntarātmā";
        simpleMeaning = "The one God, hidden in all beings, all-pervading, the inner Self of all beings, the witness, the guide — the one beyond the qualities, yet the master of all qualities.";
        sourceGranth = "Shvetashvatara Upanishad"; sourceChapter = 6; sourceVerse = "Shveta 6.11" },

      // ── Garuda Purana — Pretakhanda on the departed ───────────────────────
      { granthId = "garuda-purana"; chapterId = 1; verseId = 1; verseNumber = "Pretakhanda 1.1";
        sanskritDevanagari = "गत्वा प्रेतगृहं घोरं यमस्य सदनं तथा।";
        sanskritTransliteration = "gatvā pretagṛhaṃ ghoraṃ yamasya sadanaṃ tathā";
        simpleMeaning = "The departed soul, leaving the body, journeys to the dread abode of Yama — there to receive its due according to its deeds.";
        sourceGranth = "Garuda Purana (Pretakhanda)"; sourceChapter = 1; sourceVerse = "Pretakhanda 1.1" },
    ];
    for (v in seed.values()) {
      granthVerses.add(compareTextNatNat, (v.granthId, v.chapterId, v.verseId), v);
    };
  };
};
