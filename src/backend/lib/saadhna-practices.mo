import Types "../types/saadhna-practices";
import Map "mo:core/Map";
import Array "mo:core/Array";

module {
  // ─── Siddhi Saadhna (8 Siddhis, 9 Nidhis, 16 Kalas, 10 Mahavidyas) ──────────
  public func listSiddhis(
    entries : Map.Map<Text, Types.SiddhiEntry>,
  ) : [Types.SiddhiEntry] {
    entries.values()
      .filter(func(e : Types.SiddhiEntry) : Bool { e.category == #siddhi })
      .toArray();
  };

  public func getSiddhi(
    entries : Map.Map<Text, Types.SiddhiEntry>,
    id : Text,
  ) : ?Types.SiddhiEntry {
    switch (entries.get(id)) {
      case (?e) {
        if (e.category == #siddhi) { ?e } else { null };
      };
      case null { null };
    };
  };

  public func listNidhis(
    entries : Map.Map<Text, Types.SiddhiEntry>,
  ) : [Types.SiddhiEntry] {
    entries.values()
      .filter(func(e : Types.SiddhiEntry) : Bool { e.category == #nidhi })
      .toArray();
  };

  public func getNidhi(
    entries : Map.Map<Text, Types.SiddhiEntry>,
    id : Text,
  ) : ?Types.SiddhiEntry {
    switch (entries.get(id)) {
      case (?e) {
        if (e.category == #nidhi) { ?e } else { null };
      };
      case null { null };
    };
  };

  public func listKalas(
    entries : Map.Map<Text, Types.SiddhiEntry>,
  ) : [Types.SiddhiEntry] {
    entries.values()
      .filter(func(e : Types.SiddhiEntry) : Bool { e.category == #kala })
      .toArray();
  };

  public func getKala(
    entries : Map.Map<Text, Types.SiddhiEntry>,
    id : Text,
  ) : ?Types.SiddhiEntry {
    switch (entries.get(id)) {
      case (?e) {
        if (e.category == #kala) { ?e } else { null };
      };
      case null { null };
    };
  };

  public func listMahavidyas(
    entries : Map.Map<Text, Types.SiddhiEntry>,
  ) : [Types.SiddhiEntry] {
    entries.values()
      .filter(func(e : Types.SiddhiEntry) : Bool { e.category == #mahavidya })
      .toArray();
  };

  public func getMahavidya(
    entries : Map.Map<Text, Types.SiddhiEntry>,
    id : Text,
  ) : ?Types.SiddhiEntry {
    switch (entries.get(id)) {
      case (?e) {
        if (e.category == #mahavidya) { ?e } else { null };
      };
      case null { null };
    };
  };

  public func initSiddhiEntries(entries : Map.Map<Text, Types.SiddhiEntry>) : () {
    let disclaimer = "These practices can be performed only under Guru guidance.";

    // ─── 8 Siddhis ────────────────────────────────────────────────────────────
    let siddhis : [Types.SiddhiEntry] = [
      {
        id = "siddhi-anima";
        name = "Anima";
        sanskritName = "अणिमा";
        category = #siddhi;
        description = "The power to become as small as an atom, allowing the yogi to perceive the subtlest elements of creation and enter the smallest spaces.";
        significance = "Anima reveals the atomic subtlety of existence, dissolving the ego's identification with the gross body and awakening awareness of the infinite within the infinitesimal.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-mahima";
        name = "Mahima";
        sanskritName = "महिमा";
        category = #siddhi;
        description = "The power to become infinitely large, expanding one's presence to encompass the entire cosmos.";
        significance = "Mahima reveals the boundless nature of the Self, showing that consciousness is vaster than any universe.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-garima";
        name = "Garima";
        sanskritName = "गरिमा";
        category = #siddhi;
        description = "The power to become infinitely heavy, immovable and grounded like a mountain, unshaken by any force.";
        significance = "Garima grants unshakable steadiness of mind and body, the foundation for all higher meditation.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-laghima";
        name = "Laghima";
        sanskritName = "लघिमा";
        category = #siddhi;
        description = "The power to become practically weightless, light as a feather, enabling levitation and effortless movement.";
        significance = "Laghima lightens the burden of ego and attachment, freeing the yogi to rise above worldly gravity.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-prapti";
        name = "Prapti";
        sanskritName = "प्राप्ति";
        category = #siddhi;
        description = "The power to obtain anything desired — to reach or acquire any object anywhere in creation, even across vast distances.";
        significance = "Prapti dissolves the illusion of separation between the seeker and the sought, revealing all as Self.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-prakamya";
        name = "Prakamya";
        sanskritName = "प्रकाम्य";
        category = #siddhi;
        description = "The power to fulfill any desire, to manifest whatever one wills without obstruction — including seemingly impossible wishes.";
        significance = "Prakamya shows the will-aligned-with-dharma as a creative force; the yogi becomes a conscious co-creator.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-ishitva";
        name = "Ishitva";
        sanskritName = "ईशित्व";
        category = #siddhi;
        description = "The power of lordship and mastery over all creation — the yogi wields sovereign command over nature and the elements.";
        significance = "Ishitva reveals the Self as the inner ruler of all, the silent sovereign behind every appearance.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "siddhi-vashitva";
        name = "Vashitva";
        sanskritName = "वशित्व";
        category = #siddhi;
        description = "The power to control and subjugate all beings and elements — every creature and force comes under the yogi's benevolent command.";
        significance = "Vashitva is mastery born of self-mastery; he who has conquered himself commands all else effortlessly.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.45";
        sourceChapter = "Vibhuti Pada";
      },
    ];

    // ─── 9 Nidhis (treasures of Kubera) ───────────────────────────────────────
    let nidhis : [Types.SiddhiEntry] = [
      {
        id = "nidhi-mahapadma";
        name = "Mahapadma";
        sanskritName = "महापद्म";
        category = #nidhi;
        description = "The great lotus treasure — a divine reservoir of inexhaustible wealth, symbolizing the thousand-petaled cosmic lotus from which all abundance springs.";
        significance = "Mahapadma represents the infinite potential of consciousness, the source from which all prosperity unfolds.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-padma";
        name = "Padma";
        sanskritName = "पद्म";
        category = #nidhi;
        description = "The lotus treasure — a sacred store of wealth associated with purity and spiritual unfoldment, the awakening of the heart-lotus.";
        significance = "Padma teaches that true wealth blossoms from purity of heart, untainted by the mud of worldly attachment.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-shankha";
        name = "Shankha";
        sanskritName = "शङ्ख";
        category = #nidhi;
        description = "The conch treasure — wealth that resonates with the primordial sound, the cosmic vibration from which creation arose.";
        significance = "Shankha reminds the seeker that all prosperity is sustained by the cosmic sound OM, the vibratory ground of being.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-makara";
        name = "Makara";
        sanskritName = "मकर";
        category = #nidhi;
        description = "The crocodile treasure — wealth guarded by the celestial sea-creature, symbolizing the depths of the subconscious and the treasures hidden therein.";
        significance = "Makara represents the dive into the depths of the psyche to recover the pearls of self-knowledge.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-kachhapa";
        name = "Kachhapa";
        sanskritName = "कच्छप";
        category = #nidhi;
        description = "The tortoise treasure — wealth of steadfast endurance, like Kurma supporting Mount Mandara in the churning of the ocean.";
        significance = "Kachhapa teaches that spiritual wealth rests on patient endurance, the unshakable foundation of practice.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-mukunda";
        name = "Mukunda";
        sanskritName = "मुकुन्द";
        category = #nidhi;
        description = "The liberating treasure — wealth that grants freedom (mukti), the supreme treasure that liberates the soul from all bondage.";
        significance = "Mukunda is the treasure of liberation itself, the only wealth that is never lost and never fades.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-kunda";
        name = "Kunda";
        sanskritName = "कुन्द";
        category = #nidhi;
        description = "The jasmine treasure — wealth of purity and fragrance, the blossoming of inner virtue that perfumes all of life.";
        significance = "Kunda symbolizes the white purity of the awakened heart, whose fragrance draws the divine near.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-nila";
        name = "Nila";
        sanskritName = "नील";
        category = #nidhi;
        description = "The blue-sapphire treasure — wealth of depth and infinity, the vast blue of the infinite sky reflected in consciousness.";
        significance = "Nila represents the boundless expanse of the Self, blue as the cloudless sky of pure awareness.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
      {
        id = "nidhi-kharva";
        name = "Kharva";
        sanskritName = "खर्व";
        category = #nidhi;
        description = "The dwarf treasure — wealth of the subtle and small, the recognition that the infinite dwells within the smallest atom.";
        significance = "Kharva teaches that the greatest treasure is often hidden in the humblest form, the divine in the diminutive.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahabharata";
        sourceVerse = "2.8";
        sourceChapter = "Sabha Parva";
      },
    ];

    // ─── 16 Kalas of Krishna ──────────────────────────────────────────────────
    let kalaNames : [(Text, Text, Text, Text)] = [
      ("Daya", "दया", "Compassion — boundless mercy toward all beings, the heart that weeps at another's sorrow and rejoices at another's joy.", "Daya is the first kala: the softening of the heart that sees all beings as one's own Self."),
      ("Kshama", "क्षमा", "Forgiveness — patient endurance of all wrongs, the strength to absorb injury without returning it.", "Kshama is the fire that consumes the fuel of resentment, leaving only peace."),
      ("Anasuya", "अनसूया", "Freedom from envy — the grace of rejoicing in another's good fortune without a trace of jealousy.", "Anasuya is the eye that sees only beauty, the heart that knows only abundance."),
      ("Nirbhayatva", "निर्भयत्व", "Fearlessness — the courage that arises from knowing the Self to be unborn and undying.", "Nirbhayatva is the lion's heart of the realized, who fears nothing in any world."),
      ("Sama", "सम", "Equanimity — even-mindedness in pleasure and pain, gain and loss, honor and insult.", "Sama is the still center of the wheel, unmoved by the turning of fortune."),
      ("Satya-sandhatva", "सत्यसन्धत्व", "Truthfulness — steadfast adherence to truth in thought, word, and deed, without compromise.", "Satya-sandhatva is the alignment of inner and outer, the life that is one seamless truth."),
      ("Dama", "दम", "Self-control — mastery over the senses and the mind, the reins that guide the chariot of the body.", "Dama is the gentle but firm hand that turns the wild horses of sense inward."),
      ("Saranga", "सारङ्ग", "One-pointed focus — the mind fixed like an arrow on the Self, undistracted by the world.", "Saranga is the unblinking gaze of the archer, the mind that pierces to the heart of reality."),
      ("Apara-kshama", "अपरक्षम", "Infinite patience — the capacity to wait upon the divine timing without agitation.", "Apara-kshama is the patience of the earth, which bears all and hurries nothing."),
      ("Sthirata", "स्थिरता", "Steadfastness — unwavering resolve in dharma, the mountain that no storm can move.", "Sthirata is the resolve that outlasts every temptation to turn aside."),
      ("Daksha", "दक्ष", "Skillful action — competence and dexterity in all undertakings, the art of doing all things well.", "Daksha is the divine craftsman, whose every act is a perfect offering."),
      ("Kritajnata", "कृतज्ञता", "Gratitude — the constant remembrance of every gift received, the heart that never forgets a kindness.", "Kritajnata is the offering of thanks before the offering of work, the recognition that all is given."),
      ("Dhriti", "धृति", "Fortitude — the inner strength to bear all burdens and continue on the path without faltering.", "Dhriti is the spine of the seeker, the strength that holds the heart upright under any weight."),
      ("Vidyut-vidyut", "विद्युत्विद्युत", "Lightning-flash awareness — the sudden, brilliant clarity that illuminates the Self in a single instant.", "Vidyut-vidyut is the thunderbolt of insight that splits the dark of ignorance in one stroke."),
      ("Aishvarya", "ऐश्वर्य", "Divine sovereignty — the lordship that rules the inner kingdom, mastery over the entire field of consciousness.", "Aishvarya is the throne of the Self, from which all is seen and all is ordered."),
      ("Sarva-kara-sahishnuta", "सर्वकारसहिष्णुता", "Tolerance of all actions — the capacity to bear the actions of others without judgment, the vast sky that holds all clouds.", "Sarva-kara-sahishnuta is the ocean that receives every river without becoming any of them."),
    ];

    let kalas : [Types.SiddhiEntry] = kalaNames.map<(Text, Text, Text, Text), Types.SiddhiEntry>(
      func((name, sanskrit, desc, sig)) {
        {
          id = "kala-" # name;
          name = name;
          sanskritName = sanskrit;
          category = #kala;
          description = desc;
          significance = sig;
          guruDisclaimer = disclaimer;
          sourceGranth = "Bhagavata Purana";
          sourceVerse = "1.3.28";
          sourceChapter = "Skandha 1";
        };
      },
    );

    // ─── 10 Mahavidyas ────────────────────────────────────────────────────────
    let mahavidyas : [Types.SiddhiEntry] = [
      {
        id = "mahavidya-kali";
        name = "Kali";
        sanskritName = "काली";
        category = #mahavidya;
        description = "The primordial Mother of Time — dark, fierce, dissolving all form back into the formless. She stands upon Shiva, the changeless witness, and wears a garland of severed heads representing the dissolved ego.";
        significance = "Kali is the first Mahavidya: the power of time that consumes all things, the liberating force that severs attachment and reveals the deathless Self.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Devi Mahatmya";
        sourceVerse = "12.37";
        sourceChapter = "Chapter 12";
      },
      {
        id = "mahavidya-tara";
        name = "Tara";
        sanskritName = "तारा";
        category = #mahavidya;
        description = "The Savior who ferries the soul across the ocean of samsara — blue as the infinite sky, she stands upon a corpse (the dissolved ego) and offers refuge to all who call upon her.";
        significance = "Tara is the second Mahavidya: the guiding star who leads the seeker across the dark waters of ignorance to the far shore of liberation.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Tantraraja Tantra";
        sourceVerse = "1.5";
        sourceChapter = "Chapter 1";
      },
      {
        id = "mahavidya-tripura-sundari";
        name = "Tripura Sundari";
        sanskritName = "त्रिपुरा सुन्दरी";
        category = #mahavidya;
        description = "The Beautiful One of the Three Worlds — sixteen years old, seated on the throne of the four great gods (Brahma, Vishnu, Shiva, Rudra), she is the supreme beauty that pervades all creation.";
        significance = "Tripura Sundari is the third Mahavidya: the beauty of pure consciousness that shines in all three states (waking, dream, deep sleep) and beyond.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Saundarya Lahari";
        sourceVerse = "1";
        sourceChapter = "Verse 1";
      },
      {
        id = "mahavidya-bhuvaneshwari";
        name = "Bhuvaneshwari";
        sanskritName = "भुवनेश्वरी";
        category = #mahavidya;
        description = "The Queen of the Universe — the cosmic Mother whose body is the entire creation, who holds the noose of attachment and the goad of love, and whose four faces gaze upon all directions.";
        significance = "Bhuvaneshwari is the fourth Mahavidya: the space in which all worlds arise and dissolve, the divine matrix of all manifestation.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Devi Mahatmya";
        sourceVerse = "1.55";
        sourceChapter = "Chapter 1";
      },
      {
        id = "mahavidya-bhairavi";
        name = "Bhairavi";
        sanskritName = "भैरवी";
        category = #mahavidya;
        description = "The Fierce One — the terrifying yet benevolent Mother who burns away all impurities in the fire of tapas, the consort of Bhairava, the awakened consciousness.";
        significance = "Bhairavi is the fifth Mahavidya: the purifying fire of spiritual discipline that consumes the ego and reveals the radiant Self.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Bhairava Tantra";
        sourceVerse = "3.12";
        sourceChapter = "Chapter 3";
      },
      {
        id = "mahavidya-chhinnamasta";
        name = "Chhinnamasta";
        sanskritName = "छिन्नमस्ता";
        category = #mahavidya;
        description = "The Self-Decapitated One — she holds her own severed head in her hand, three streams of blood feeding her two attendants (Dakini and Varnini), symbolizing the awakened kundalini that pierces the crown chakra.";
        significance = "Chhinnamasta is the sixth Mahavidya: the awakened kundalini that sacrifices the limited self to feed the infinite, the supreme offering of the ego to the divine.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Tantraraja Tantra";
        sourceVerse = "5.7";
        sourceChapter = "Chapter 5";
      },
      {
        id = "mahavidya-dhumavati";
        name = "Dhumavati";
        sanskritName = "धूमावती";
        category = #mahavidya;
        description = "The Smoky One — the widow, the eternal void, the cosmic grandmother who appears as famine, death, and dissolution, riding a crowless chariot, embodying the inauspicious as the gateway to the supreme.";
        significance = "Dhumavati is the seventh Mahavidya: the void that precedes all creation, the wisdom that finds the divine even in sorrow, loss, and the inauspicious.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Pranatoshini Tantra";
        sourceVerse = "6.1";
        sourceChapter = "Chapter 6";
      },
      {
        id = "mahavidya-bagalamukhi";
        name = "Bagalamukhi";
        sanskritName = "बगलामुखी";
        category = #mahavidya;
        description = "The Crane-Headed One — the power that paralyzes and silences all opposition, who pulls the tongue of the demon Madan, stopping all speech and action against dharma.";
        significance = "Bagalamukhi is the eighth Mahavidya: the stilling power that silences the inner and outer enemies, the grace that arrests all negativity in its tracks.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Tantraraja Tantra";
        sourceVerse = "7.4";
        sourceChapter = "Chapter 7";
      },
      {
        id = "mahavidya-matangi";
        name = "Matangi";
        sanskritName = "मातङ्गी";
        category = #mahavidya;
        description = "The Elephant-Power — the outcast goddess who accepts the polluted and the impure, the dark-green embodiment of divine knowledge that transcends all social divisions.";
        significance = "Matangi is the ninth Mahavidya: the wisdom that finds the sacred in the profane, the divine that embraces all that society rejects.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Tantraraja Tantra";
        sourceVerse = "8.2";
        sourceChapter = "Chapter 8";
      },
      {
        id = "mahavidya-kamala";
        name = "Kamala";
        sanskritName = "कमला";
        category = #mahavidya;
        description = "The Lotus One — the tantric form of Lakshmi, seated on a lotus in the cosmic ocean, flanked by two elephants pouring nectar, the bestower of spiritual and material prosperity.";
        significance = "Kamala is the tenth Mahavidya: the full flowering of consciousness, the lotus of the heart that opens to receive the nectar of the divine.";
        guruDisclaimer = disclaimer;
        sourceGranth = "Mahalakshmi Stotra";
        sourceVerse = "1.1";
        sourceChapter = "Chapter 1";
      },
    ];

    for (e in siddhis.values()) { entries.add(e.id, e) };
    for (e in nidhis.values()) { entries.add(e.id, e) };
    for (e in kalas.values()) { entries.add(e.id, e) };
    for (e in mahavidyas.values()) { entries.add(e.id, e) };
  };

  // ─── Pitru Saadhna (Tarpan, Shraddha, Amavasya) ────────────────────────────
  public func listPitruRites(
    rites : Map.Map<Text, Types.PitruRite>,
  ) : [Types.PitruRite] {
    rites.values().toArray();
  };

  public func getPitruRite(
    rites : Map.Map<Text, Types.PitruRite>,
    id : Text,
  ) : ?Types.PitruRite {
    rites.get(id);
  };

  public func initPitruRites(rites : Map.Map<Text, Types.PitruRite>) : () {
    let ritesData : [Types.PitruRite] = [
      {
        id = "pitru-tarpan";
        name = "Tarpan";
        sanskritName = "तर्पण";
        description = "The offering of water to one's ancestors (pitrs), performed to express gratitude and to nourish the departed souls on their journey. Tarpan is the daily act of remembrance that maintains the sacred bond between the living and the dead.";
        procedure = "1. After bathing and wearing clean clothes, face south (the direction of the ancestors). 2. Take water (preferably mixed with black sesame seeds — tila) in the cupped right hand. 3. Recite the sankalpa: 'I offer this tarpan to my ancestors of three generations (father, grandfather, great-grandfather) and to all pitrs.' 4. Chant: 'Om Namo Bhagavate Vasudevaya' or the Pitru Suktam. 5. Let the water flow through the gaps between the thumb and index finger of the right hand (the pitru tirtha). 6. Offer three handfuls for the three generations of paternal ancestors, three for maternal ancestors. 7. Conclude with: 'Pitrbhyo namah' — salutations to the ancestors.";
        timing = "Daily at sunrise, especially during Pitru Paksha (the dark fortnight of Ashwin), on Amavasya (new moon), and on the death anniversary (tithi) of the departed.";
        offerings = ["Water (Jala)", "Black sesame seeds (Tila)", "Kusha grass", "Rice grains", "Flowers"];
        sourceGranth = "Manu Smriti";
        sourceVerse = "3.203";
        sourceChapter = "Chapter 3";
      },
      {
        id = "pitru-shraddha";
        name = "Shraddha";
        sanskritName = "श्राद्ध";
        description = "The ritual of faith (shraddha) performed for the peace and upliftment of the departed ancestors. Shraddha is the supreme act of filial duty, performed with full devotion to ensure the ancestors' well-being in the afterlife and to receive their blessings in return.";
        procedure = "1. Begin with sankalpa — declare the name, gotra, and tithi of the ancestor being honored. 2. Invite a qualified Brahmin (or, if alone, perform self-puja to the ancestors). 3. Perform achamana (sipping water with mantras). 4. Offer pinda — balls of cooked rice mixed with sesame, ghee, and honey — one for each generation (father, grandfather, great-grandfather). 5. Chant the Pitru Suktam from Rig Veda (10.154) and the Tarpan mantras. 6. Offer food to the Brahmin (or set aside a portion if alone) and donate dakshina. 7. Conclude with: 'Pitrbhyo namah, svadha' — the sacred offering to the ancestors.";
        timing = "On the death anniversary (tithi) of the departed, during Pitru Paksha (Ashwin Krishna Paksha), and on Amavasya. The Mahalaya Amavasya is the most auspicious day for shraddha.";
        offerings = ["Cooked rice (Pinda)", "Sesame seeds (Tila)", "Ghee", "Honey", "Kusha grass", "Flowers", "Food for Brahmins", "Dakshina (donation)"];
        sourceGranth = "Garuda Purana";
        sourceVerse = "11.4";
        sourceChapter = "Preta Khanda";
      },
      {
        id = "pitru-amavasya";
        name = "Amavasya Pitru Ritual";
        sanskritName = "अमावस्या पितृ कर्म";
        description = "The new-moon ritual for the ancestors, performed on every Amavasya (new moon) — the night when the veil between worlds is thinnest and the ancestors are most receptive to offerings. This is the monthly remembrance that keeps the lineage alive.";
        procedure = "1. On the morning of Amavasya, after sunrise, bathe and wear clean clothes. 2. Set up a small sacred space facing south, with a photo or name of the departed. 3. Light a lamp (diya) and incense. 4. Offer water with sesame seeds: 'Om, this water I offer to my ancestors — father, grandfather, great-grandfather, and all pitrs. May they be satisfied. Svadha.' 5. Offer a portion of food (rice, sweet, fruit) on a leaf or plate, dedicated to the ancestors. 6. Chant: 'Om Pitrubhyo namah, svadha' three times. 7. After the offering, the food may be given to a cow, a crow, or left in nature. 8. Conclude with a prayer for the ancestors' peace and their blessings upon the family.";
        timing = "Every Amavasya (new moon), especially the Mahalaya Amavasya (the new moon of Pitru Paksha).";
        offerings = ["Water with sesame seeds", "Cooked rice", "Sweet (kheer or fruit)", "Flowers", "Lamp and incense"];
        sourceGranth = "Vishnu Smriti";
        sourceVerse = "19.7";
        sourceChapter = "Chapter 19";
      },
      {
        id = "pitru-alone";
        name = "Performing Pitru Rites Alone";
        sanskritName = "एकाकी पितृ कर्म";
        description = "Guidance for those who must perform pitru rites without family or a priest — for Hindus living far from home, disconnected from tradition. The shastras affirm that sincere intention and correct procedure matter more than the presence of others; the ancestors receive the offering made with a pure heart.";
        procedure = "1. Choose a clean, quiet space — your home, a temple, or any natural setting. 2. Bathe and wear clean clothes; sit facing south. 3. Place a small bowl of water with black sesame seeds before you. 4. Light a lamp and incense if available. 5. Take water in your right hand and recite: 'Om, I offer this to my father [name], grandfather [name], great-grandfather [name], and to all my ancestors. May they be satisfied. Svadha.' 6. Let the water flow through the right hand. 7. Offer a small portion of food (rice, fruit, or sweet) on a leaf or plate: 'This food I offer with love to my ancestors. May they accept it. Svadha.' 8. Sit in silence for a few minutes, remembering the departed with gratitude. 9. Conclude: 'Om Shanti, Shanti, Shanti.' The food may then be given to a cow, a crow, or left in nature. The shastras say: even a single sesame seed offered with devotion reaches the ancestors.";
        timing = "On Amavasya, on the death anniversary, or whenever the heart calls. Sincerity, not the calendar, is the true offering.";
        offerings = ["Water with sesame seeds", "A portion of food (rice, fruit, or sweet)", "A lamp and incense (if available)", "Your sincere remembrance"];
        sourceGranth = "Agni Purana";
        sourceVerse = "155.3";
        sourceChapter = "Chapter 155";
      },
    ];

    for (r in ritesData.values()) { rites.add(r.id, r) };
  };

  // ─── Guru Parampara (4 sampradayas, diksha vidhi) ──────────────────────────
  public func listSampradayas(
    sampradayas : Map.Map<Text, Types.Sampradaya>,
  ) : [Types.Sampradaya] {
    sampradayas.values().toArray();
  };

  public func getSampradaya(
    sampradayas : Map.Map<Text, Types.Sampradaya>,
    id : Text,
  ) : ?Types.Sampradaya {
    sampradayas.get(id);
  };

  public func initSampradayas(sampradayas : Map.Map<Text, Types.Sampradaya>) : () {
    let sampradayaData : [Types.Sampradaya] = [
      {
        id = "sampradaya-shri";
        name = "Shri Sampradaya";
        sanskritName = "श्री सम्प्रदाय";
        founder = "Ramanujacharya";
        philosophy = "Vishishtadvaita — qualified non-dualism. The soul (jiva), matter (prakriti), and God (Vishnu) are real yet inseparable, like body and soul. Liberation comes through prapatti — complete self-surrender to the Lord's grace.";
        lineage = ["Nathamuni", "Yamunacharya", "Ramanujacharya", "Vedanta Desika", "Manavala Mamunigal"];
        sourceGranth = "Sri Bhashya";
        sourceVerse = "1.1.1";
        sourceChapter = "Adhyaya 1";
      },
      {
        id = "sampradaya-brahma";
        name = "Brahma Sampradaya";
        sanskritName = "ब्रह्म सम्प्रदाय";
        founder = "Madhvacharya";
        philosophy = "Dvaita — strict dualism. God (Vishnu) and the soul are eternally distinct. The soul is dependent (paratantra) while God is independent (svatantra). Liberation is the soul's eternal service to God, attained through devotion (bhakti) and divine grace.";
        lineage = ["Brahma", "Narada", "Madhvacharya", "Jayatirtha", "Vyasatirtha"];
        sourceGranth = "Brahma Sutra Bhashya";
        sourceVerse = "2.2.1";
        sourceChapter = "Adhyaya 2";
      },
      {
        id = "sampradaya-rudra";
        name = "Rudra Sampradaya";
        sanskritName = "रुद्र सम्प्रदाय";
        founder = "Vallabhacharya";
        philosophy = "Shuddhadvaita — pure non-dualism. The soul and the world are real manifestations of Krishna, like sparks and the fire. Liberation comes through pushti — divine grace — and seva (loving service) to Krishna, especially in the form of Srinathji.";
        lineage = ["Rudra (Shiva)", "Vallabhacharya", "Vitthalanatha", "Gokulanatha"];
        sourceGranth = "Anu Bhashya";
        sourceVerse = "1.1";
        sourceChapter = "Adhyaya 1";
      },
      {
        id = "sampradaya-sanak";
        name = "Sanak Sampradaya";
        sanskritName = "सनक सम्प्रदाय";
        founder = "Chaitanya Mahaprabhu";
        philosophy = "Achintya Bheda-Abheda — inconceivable simultaneous oneness and difference. The soul is both one with and different from Krishna, beyond logical comprehension. Liberation comes through sankirtana — the congregational chanting of the holy names: 'Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare.'";
        lineage = ["Sanaka Kumara", "Nimbarkacharya", "Chaitanya Mahaprabhu", "Six Goswamis of Vrindavan"];
        sourceGranth = "Chaitanya Charitamrita";
        sourceVerse = "1.1.4";
        sourceChapter = "Adi-lila 1";
      },
    ];

    for (s in sampradayaData.values()) { sampradayas.add(s.id, s) };
  };

  public func getDikshaVidhi(
    dikshaVidhis : Map.Map<Text, Types.DikshaVidhi>,
    id : Text,
  ) : ?Types.DikshaVidhi {
    dikshaVidhis.get(id);
  };

  public func initDikshaVidhis(dikshaVidhis : Map.Map<Text, Types.DikshaVidhi>) : () {
    let dikshaData : [Types.DikshaVidhi] = [
      {
        id = "diksha-mantra-diksha";
        name = "Mantra Diksha";
        sanskritName = "मन्त्र दीक्षा";
        description = "The initiation in which the Guru whispers a sacred mantra into the disciple's ear, awakening the dormant spiritual energy (kundalini) and establishing the disciple on the path. The mantra becomes the disciple's lifelong companion, the bridge between the individual soul and the divine. Diksha means 'to give (di) and to destroy (ksha)' — the Guru gives knowledge and destroys ignorance. The true Guru is one who has realized the Self and lives in that realization; a false Guru is one who teaches from book-knowledge alone, who seeks wealth or followers, or whose conduct contradicts the teachings. The disciple must test the Guru through observation, scripture, and the inner voice of conscience before surrendering.";
        mantra = "The Guru mantra is received in silence — it cannot be written or spoken aloud by the uninitiated. The disciple receives it personally from the Guru, often beginning with the Gayatri mantra or the Guru's lineage mantra. Example form: 'Om [sacred syllable] namah' — but the actual mantra is given only at the moment of diksha.";
        prerequisites = [
          "Sincere longing for liberation (mumukshutva)",
          "Stable mind and disciplined life (yama-niyama)",
          "Trust in the Guru after careful examination",
          "Willingness to follow the Guru's instructions (guru-ajna)",
          "Vegetarian diet and purity of conduct",
          "Renunciation of harmful actions",
        ];
        procedure = [
          "1. The disciple approaches the Guru with humility, offering flowers, fruit, and dakshina as a token of surrender.",
          "2. The Guru performs achamana (purification with water) and applies tilaka (sacred mark) on the disciple.",
          "3. The disciple takes a vow (sankalpa) to follow the path and the Guru's guidance.",
          "4. The Guru whispers the mantra into the disciple's right ear in silence — this is the heart of diksha.",
          "5. The Guru explains the meaning, method, and number of repetitions (japa) of the mantra.",
          "6. The disciple receives instructions on daily practice (sadhana), diet, and conduct.",
          "7. The Guru blesses the disciple and accepts them into the lineage (parampara).",
          "8. The disciple begins the prescribed japa (mantra repetition), typically 108 beads per mala, a fixed number daily.",
        ];
        sourceGranth = "Guru Gita";
        sourceVerse = "13";
        sourceChapter = "Verse 13";
      },
      {
        id = "diksha-shiva-diksha";
        name = "Shiva Diksha";
        sanskritName = "शिव दीक्षा";
        description = "The initiation into the worship of Lord Shiva, the auspicious One. The disciple receives the Panchakshari mantra ('Om Namah Shivaya') and is taught the method of Shiva worship (Shiva puja). The Guru explains that Shiva is the inner Self — the silent witness — and that the worship of the linga is the worship of the formless through form. The disciple is warned against false Gurus who claim supernatural powers without Self-realization, who demand excessive wealth, or who lack compassion. The true Guru is recognized by: (1) direct realization of the Self, (2) compassion for all beings, (3) freedom from craving, (4) alignment with scripture, and (5) the power to awaken the same realization in the disciple.";
        mantra = "Om Namah Shivaya — the five-syllable (Panchakshari) mantra of Lord Shiva. 'Om' is the cosmic sound, 'Namah' is salutation, 'Shivaya' is to Shiva, the auspicious One. This mantra purifies the five elements of the body and awakens the kundalini.";
        prerequisites = [
          "Devotion to Lord Shiva",
          "Purity of body, speech, and mind",
          "Observance of Shiva's vows (Shiva-vrata)",
          "Surrender to the Guru of the lineage",
          "Willingness to perform daily abhisheka (bathing of the linga)",
        ];
        procedure = [
          "1. The disciple bathes and wears clean clothes, ideally white or saffron.",
          "2. The disciple approaches the Guru with offerings of bilva leaves, flowers, and water.",
          "3. The Guru purifies the disciple with mantras and water (prokshana).",
          "4. The Guru whispers 'Om Namah Shivaya' into the disciple's right ear.",
          "5. The Guru teaches the method of Shiva puja: abhisheka (bathing the linga with water, milk, curd, ghee, honey), archana (offering flowers and bilva), and japa (repetition of the mantra).",
          "6. The disciple receives instructions on the Maha Shivaratri vigil and the monthly Shiva fasts.",
          "7. The Guru blesses the disciple and accepts them into the Shaiva parampara.",
          "8. The disciple begins daily japa of 'Om Namah Shivaya' — at least one mala (108 repetitions) morning and evening.",
        ];
        sourceGranth = "Shiva Purana";
        sourceVerse = "Vidyesvara Samhita 13.14";
        sourceChapter = "Vidyesvara Samhita 13";
      },
    ];

    for (d in dikshaData.values()) { dikshaVidhis.add(d.id, d) };
  };

  // ─── Karma Yoga (karma types) ──────────────────────────────────────────────
  public func listKarmaTypes(
    karmaTypes : Map.Map<Text, Types.KarmaType>,
  ) : [Types.KarmaType] {
    karmaTypes.values().toArray();
  };

  public func getKarmaType(
    karmaTypes : Map.Map<Text, Types.KarmaType>,
    id : Text,
  ) : ?Types.KarmaType {
    karmaTypes.get(id);
  };

  public func initKarmaTypes(karmaTypes : Map.Map<Text, Types.KarmaType>) : () {
    let karmaData : [Types.KarmaType] = [
      {
        id = "karma-nishkama";
        name = "Nishkama Karma";
        sanskritName = "निष्काम कर्म";
        description = "Action performed without attachment to the fruits (results) — the supreme teaching of the Bhagavad Gita. The nishkama karma yogi acts because the action itself is dharma, not for reward, recognition, or fear of failure. Krishna says: 'You have a right to action alone, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.' (Gita 2.47)";
        practice = "Perform your daily work — your job, your duties, your service — as an offering to the divine, without anxiety about success or failure. Before each significant action, silently dedicate it: 'I offer this action and its fruits to the Lord.' Work with full effort and full surrender. When the result comes — whether success or failure — receive it as prasad, the divine's gift, and move on. This is karma yoga for the modern worker: do your job as dharma, not for the paycheck alone, but as your contribution to the cosmic order (rita). The salary comes as a by-product; the liberation comes from the attitude.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "2.47";
        sourceChapter = "Chapter 2";
      },
      {
        id = "karma-sakama";
        name = "Sakama Karma";
        sanskritName = "सकाम कर्म";
        description = "Action performed with desire for specific results — the ordinary karma of most human beings. Sakama karma binds the doer to the cycle of birth and death, because every desire creates a seed (samskara) that must fructify in a future life. Krishna acknowledges that most people act from desire, but teaches that even sakama karma, when offered to the divine, begins to purify.";
        practice = "Recognize when you are acting from desire — for wealth, recognition, comfort, or relationship. Do not condemn yourself; this is the human condition. Instead, begin to offer even your desires to the divine: 'Lord, I desire this, but I surrender the desire to you. May your will, not mine, be done.' Gradually, as you practice this surrender, the desires weaken and the actions become more nishkama. The transition from sakama to nishkama is the journey of karma yoga itself.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "2.45";
        sourceChapter = "Chapter 2";
      },
      {
        id = "karma-prarabdha";
        name = "Prarabdha Karma";
        sanskritName = "प्रारब्ध कर्म";
        description = "The portion of past karma that has already begun to fructify in this present life — the karma that has 'sprouted' and is now being lived out. Prarabdha cannot be avoided or changed; it manifests as one's body, family, circumstances, and the major events of this life. Even a jnani (realized sage) must exhaust prarabdha, though they are no longer bound by it.";
        practice = "Accept the circumstances of your life — your body, your family, your situation — as the ripening of your own past actions. Do not resent them, for resentment only creates new karma. Instead, meet each circumstance with equanimity and right action. As Krishna teaches: even the wise act according to their nature (Gita 3.33). Your prarabdha is the field in which you now practice karma yoga. Accept the field, but act with freedom in how you respond to it.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "18.61";
        sourceChapter = "Chapter 18";
      },
      {
        id = "karma-sanchita";
        name = "Sanchita Karma";
        sanskritName = "सञ्चित कर्म";
        description = "The accumulated store of all past karma from all previous lives — the vast reservoir of unfructified actions and desires. Sanchita karma is like a granary of seeds, most of which have not yet sprouted. Through Self-knowledge (jnana) or divine grace, the entire sanchita can be burned, like a mountain of gunpowder ignited by a single spark of realization.";
        practice = "Do not dwell on the vastness of your past karma — it cannot be counted or undone by effort alone. Instead, focus on the present: act with awareness, surrender the fruits, and seek Self-knowledge. The fire of jnana (knowledge of the Self) burns the entire sanchita in an instant, as the Gita declares (4.37). The practice is: 'I am not the doer; the Self is the silent witness. Actions happen through the gunas (qualities of nature). I rest as the witness.' This insight, lived, dissolves the store of karma.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "4.37";
        sourceChapter = "Chapter 4";
      },
      {
        id = "karma-agami";
        name = "Agami Karma";
        sanskritName = "आगामी कर्म";
        description = "The karma being created right now, in this present life, by your current actions — the future karma that is being sown with every thought, word, and deed. Agami karma will fructify in this life or in future lives. The karma yogi, by acting without attachment, ceases to create new binding agami karma.";
        practice = "Be aware that every action you take now is a seed for the future. This is the urgency and the freedom of karma yoga: you cannot change the past (prarabdha, sanchita), but you can change the future (agami) by how you act today. Act with dharma, with compassion, without attachment to results. When you act in this spirit, the agami karma is 'burned' at the moment of action — it leaves no seed. This is the secret Krishna reveals: action done in yoga does not bind (Gita 4.21).";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "4.21";
        sourceChapter = "Chapter 4";
      },
      {
        id = "karma-dharma-as-job";
        name = "Your Job as Dharma";
        sanskritName = "कर्म धर्मः";
        description = "The teaching that one's daily work, performed in the right spirit, is itself the highest dharma and the path to liberation. Krishna says: 'Better is one's own dharma though imperfectly performed than the dharma of another well performed. Better is death in one's own dharma; the dharma of another is fraught with fear.' (Gita 3.35) Your svadharma — your own nature-determined duty — is your path, not someone else's.";
        practice = "See your daily work — whatever it is — as your svadharma, your unique contribution to the cosmic order. Do not compare your path to another's. The clerk, the doctor, the mother, the farmer, the programmer — each has their svadharma. Perform your work with full attention, with excellence, with compassion for those it serves, and with surrender of the fruits. This is karma yoga for the modern worker: your office is your ashram, your desk is your altar, your work is your worship. Krishna says: even the great Janaka attained liberation through action alone (Gita 3.20). So can you.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "3.35";
        sourceChapter = "Chapter 3";
      },
    ];

    for (k in karmaData.values()) { karmaTypes.add(k.id, k) };
  };

  // ─── Mauna Saadhna (silence practices) ─────────────────────────────────────
  public func listMaunaPractices(
    practices : Map.Map<Text, Types.MaunaPractice>,
  ) : [Types.MaunaPractice] {
    practices.values().toArray();
  };

  public func getMaunaPractice(
    practices : Map.Map<Text, Types.MaunaPractice>,
    id : Text,
  ) : ?Types.MaunaPractice {
    practices.get(id);
  };

  public func initMaunaPractices(practices : Map.Map<Text, Types.MaunaPractice>) : () {
    let maunaData : [Types.MaunaPractice] = [
      {
        id = "mauna-hourly";
        name = "Hourly Silence";
        sanskritName = "घण्टिका मौन";
        description = "The practice of observing one hour of silence each day, ideally at a fixed time — usually dawn or dusk. This is the entry-level mauna, suitable for householders and beginners. In this hour, no speech, no phone, no messages — only the silence of the tongue and, as much as possible, the silence of the mind.";
        duration = "1 hour daily, ideally at sunrise or sunset.";
        benefits = [
          "Calms the restless mind",
          "Builds the habit of inner stillness",
          "Improves concentration for meditation",
          "Reduces the compulsion to speak and react",
          "Creates a daily sanctuary of peace",
        ];
        sourceGranth = "Dakshinamurti Stotra";
        sourceVerse = "1";
        sourceChapter = "Verse 1";
      },
      {
        id = "mauna-half-day";
        name = "Half-Day Silence";
        sanskritName = "अर्धदिवस मौन";
        description = "The practice of observing half a day (about 4-6 hours) in silence, typically on a weekend or a day off. This deeper mauna allows the mind to settle into layers of stillness that an hourly practice cannot reach. The half-day of silence becomes a mini-retreat, a withdrawal from the world's noise into the inner sanctuary.";
        duration = "Half a day (4-6 hours), weekly, ideally on a day off.";
        benefits = [
          "Deepens the silence beyond the surface mind",
          "Reveals the subtle thought-patterns (vrittis) that hourly silence may miss",
          "Restores nervous-system balance",
          "Prepares the practitioner for full-day silence",
          "Cultivates the witness-consciousness (sakshin)",
        ];
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.51";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "mauna-full-day";
        name = "Full-Day Silence";
        sanskritName = "दिवस मौन";
        description = "The practice of observing a full day (from sunrise to sunrise, or 24 hours) in complete silence. This is the traditional mauna vrata, observed by sadhus and serious householders. A full day of silence allows the mind to pass through restlessness, boredom, and resistance into a profound stillness where the Self begins to reveal itself. The full-day mauna is best observed on a day free of obligations, ideally in nature or a quiet setting.";
        duration = "One full day (24 hours), monthly or on auspicious days (Ekadashi, Amavasya, festivals).";
        benefits = [
          "Penetrates to the deepest layers of mental silence",
          "Reveals the Self as the silent witness beneath all thought",
          "Purifies speech and the desire to speak",
          "Consecrates the day to the divine",
          "Builds the capacity for longer retreats (3-day, 7-day mauna)",
          "Opens the heart to the inner voice of the Self",
        ];
        sourceGranth = "Maitri Upanishad";
        sourceVerse = "6.20";
        sourceChapter = "Chapter 6";
      },
    ];

    for (m in maunaData.values()) { practices.add(m.id, m) };
  };

  // ─── Shaucha Saadhna (inner / outer purity) ────────────────────────────────
  public func listShauchaPractices(
    practices : Map.Map<Text, Types.ShauchaPractice>,
  ) : [Types.ShauchaPractice] {
    practices.values().toArray();
  };

  public func getShauchaPractice(
    practices : Map.Map<Text, Types.ShauchaPractice>,
    id : Text,
  ) : ?Types.ShauchaPractice {
    practices.get(id);
  };

  public func initShauchaPractices(practices : Map.Map<Text, Types.ShauchaPractice>) : () {
    let shauchaData : [Types.ShauchaPractice] = [
      {
        id = "shaucha-mind";
        name = "Purity of Mind";
        sanskritName = "मानसिक शौच";
        kind = "inner";
        description = "The purification of the mind from negative, impure, and agitating thoughts — anger, lust, greed, jealousy, fear, and the constant chatter of the ego. Mental purity (manas-shaucha) is the foundation of all spiritual practice, for a mind clouded by impurity cannot reflect the Self, just as a muddy mirror cannot reflect the sun.";
        practice = "Each day, observe the thoughts that arise in the mind. Do not fight them; simply witness them without identification. When an impure thought arises — anger, lust, greed — say inwardly: 'This is a movement of the mind, not the Self. I am the witness.' Then gently turn the mind to a pure thought: a mantra, the name of the divine, an image of a deity or saint, or the feeling of gratitude. Over time, the impure thoughts weaken and the pure thoughts strengthen. This is the daily practice of mental shaucha.";
        benefits = [
          "Clarifies the mind for meditation",
          "Reduces the grip of negative emotions",
          "Cultivates the witness-consciousness",
          "Purifies the samskaras (mental impressions)",
          "Prepares the mind for Self-inquiry",
        ];
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.40";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "shaucha-speech";
        name = "Purity of Speech";
        sanskritName = "वाचिक शौच";
        kind = "inner";
        description = "The purification of speech — speaking only truth (satya), speaking only what is beneficial (hitam), speaking only what is pleasant (priyam), and observing silence (mauna) when speech would be harmful. The Gita calls this 'the austerity of speech' (17.15). Impure speech — gossip, lies, harsh words, idle chatter — pollutes both the speaker and the listener.";
        practice = "Before speaking, ask three questions: Is it true? Is it kind? Is it necessary? Speak only when all three are yes. Avoid gossip, criticism, and idle chatter. Practice mauna (silence) for a set period each day to purify the organ of speech. When you must speak, let your words be few, true, and gentle. The practice of satya — truthfulness — is the heart of speech-purity: align your words with reality, and your words with your heart.";
        benefits = [
          "Purifies the organ of speech (vak)",
          "Builds trust and harmony in relationships",
          "Conserves the energy (prana) wasted in idle speech",
          "Strengthens truthfulness (satya)",
          "Makes the speech powerful and effective",
        ];
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "17.15";
        sourceChapter = "Chapter 17";
      },
      {
        id = "shaucha-body";
        name = "Purity of Body";
        sanskritName = "शारीरिक शौच";
        kind = "outer";
        description = "The purification of the physical body through daily bathing, clean clothing, and the observance of cleanliness in eating and elimination. The body is the temple of the Self; keeping it pure is an act of reverence. The shastras prescribe bathing before worship, before meditation, and after any impurity.";
        practice = "Bathe daily, ideally at sunrise, with cold or lukewarm water. Wear clean clothes, preferably of natural fibers (cotton, silk). Eat pure, sattvic food — freshly cooked, vegetarian, offered to the divine first. Avoid stale, fermented, or rajasic food. Keep the body clean after elimination. Before worship or meditation, wash the hands, feet, and face (achamana). The body is the instrument of sadhana; keep it pure and it will serve the Self well.";
        benefits = [
          "Purifies the physical instrument of sadhana",
          "Promotes health and vitality",
          "Prepares the body for worship and meditation",
          "Cultivates the attitude of reverence for the body as the divine's temple",
          "Supports sattvic (pure) consciousness",
        ];
        sourceGranth = "Manu Smriti";
        sourceVerse = "5.106";
        sourceChapter = "Chapter 5";
      },
      {
        id = "shaucha-home";
        name = "Purity of Home and Space";
        sanskritName = "स्थान शौच";
        kind = "outer";
        description = "The purification of one's living space — the home, the room of worship, and the immediate environment. A clean, orderly, sattvic space supports a clean, orderly, sattvic mind. The home is the field of daily sadhana; keeping it pure is the outer expression of inner purity.";
        practice = "Keep your home clean and orderly. Sweep and mop regularly. Keep the worship space (puja-room or corner) especially pure — clean the images, change the flowers, light the lamp daily. Burn incense or camphor to purify the air. Avoid clutter, for clutter reflects and reinforces a cluttered mind. Let in fresh air and sunlight. Keep the kitchen pure — it is the heart of the home. A clean home is a sacred home; the divine dwells where there is order and purity.";
        benefits = [
          "Creates a sattvic environment for sadhana",
          "Supports mental clarity and peace",
          "Invites the divine presence into the home",
          "Reduces distraction and restlessness",
          "Cultivates the discipline of order",
        ];
        sourceGranth = "Grihya Sutra";
        sourceVerse = "1.4";
        sourceChapter = "Adhyaya 1";
      },
    ];

    for (s in shauchaData.values()) { practices.add(s.id, s) };
  };

  // ─── Moksha Marg (Ashtavakra Gita teachings) ──────────────────────────────
  public func listMokshaTeachings(
    teachings : Map.Map<Text, Types.MokshaTeaching>,
  ) : [Types.MokshaTeaching] {
    teachings.values().toArray();
  };

  public func getMokshaTeaching(
    teachings : Map.Map<Text, Types.MokshaTeaching>,
    id : Text,
  ) : ?Types.MokshaTeaching {
    teachings.get(id);
  };

  public func initMokshaTeachings(teachings : Map.Map<Text, Types.MokshaTeaching>) : () {
    let teachingData : [Types.MokshaTeaching] = [
      {
        id = "moksha-ag-1.1";
        chapter = 1;
        verse = "1.1";
        sanskritDevanagari = "अहो निर्मानमोहस्य मुक्तिः कथमिहोदिता";
        sanskritTransliteration = "Aho nirmana-mohasya muktih katham iha udita";
        simpleMeaning = "How can liberation be attained by one who is free from the delusion of 'I am the body' and 'I am the mind'? Liberation is already present for such a one.";
        commentary = "Ashtavakra opens with the radical teaching that liberation is not attained but recognized. The moment the delusion of identification with body and mind ceases, the Self stands revealed as it always was. This is not a path of becoming, but of un-becoming — of dropping the false identification. The seeker is not asked to achieve liberation but to cease obscuring it.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 1;
        sourceVerse = "1.1";
      },
      {
        id = "moksha-ag-1.2";
        chapter = 1;
        verse = "1.2";
        sanskritDevanagari = "वेदशास्त्राणि यज्ञाश्च न ददन्ति मुक्तिम्";
        sanskritTransliteration = "Veda-shastrani yajnashcha na dadanti muktim";
        simpleMeaning = "The Vedas, the scriptures, and the rituals do not grant liberation. Liberation comes from Self-knowledge alone.";
        commentary = "Ashtavakra strips away all external supports. The scriptures point to the truth but cannot bestow it; the rituals purify the mind but cannot reveal the Self. Only the direct recognition of one's true nature liberates. This is the essence of the Ashtavakra teaching: do not seek liberation in books or rites, but in the silent recognition of what you already are.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 1;
        sourceVerse = "1.2";
      },
      {
        id = "moksha-ag-1.3";
        chapter = 1;
        verse = "1.3";
        sanskritDevanagari = "त्वं न किञ्चिद् भवाभावि विमृश्य विमृश्य";
        sanskritTransliteration = "Tvam na kinchid bhava-abhavi vimrishya vimrishya";
        simpleMeaning = "You are not anything that appears or disappears. Reflect on this again and again.";
        commentary = "The method of Ashtavakra is relentless self-inquiry: 'Who am I?' Whatever can be perceived — body, thought, feeling, experience — is not the Self, for the Self is the perceiver, never the perceived. By repeatedly examining each appearance and finding 'this is not me,' the seeker arrives at the silent witness, the awareness that remains when all objects are negated.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 1;
        sourceVerse = "1.3";
      },
      {
        id = "moksha-ag-1.4";
        chapter = 1;
        verse = "1.4";
        sanskritDevanagari = "शुद्धबोधस्वरूपस्य निःसङ्गस्यास्य किञ्चन";
        sanskritTransliteration = "Shuddha-bodha-svarupasya nih-sangasya asya kinchana";
        simpleMeaning = "You are of the nature of pure awareness, free from all attachment. What is there to do or to know?";
        commentary = "The Self is pure awareness (shuddha bodha), unattached to any object. The seeker asks: 'If I am already this, what practice is needed?' Ashtavakra's answer: none, except the dropping of the false notion that you are something else. The practice is not to become the Self but to cease being the not-Self.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 1;
        sourceVerse = "1.4";
      },
      {
        id = "moksha-ag-2.1";
        chapter = 2;
        verse = "2.1";
        sanskritDevanagari = "मुक्तिमिच्छसि चेत्तात मुक्तिः तव न दूरतः";
        sanskritTransliteration = "Muktim ichchhasi chet tata muktih tava na duratah";
        simpleMeaning = "If you desire liberation, my son, liberation is not far from you. It is your very nature.";
        commentary = "Ashtavakra addresses the seeker directly: liberation is not a distant goal but the very nature of the seeker. The desire for liberation is itself the first stirring of the Self recognizing itself. The path is short — only the dropping of the false notion of bondage stands between the seeker and the recognition of freedom that is already here.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 2;
        sourceVerse = "2.1";
      },
      {
        id = "moksha-ag-2.2";
        chapter = 2;
        verse = "2.2";
        sanskritDevanagari = "बन्धमुक्तिपदं चैव न विद्ये न हि किञ्चन";
        sanskritTransliteration = "Bandham mukti-padam chaiva na vidye na hi kinchana";
        simpleMeaning = "Bondage and liberation are mere words; in reality, neither exists. The Self is ever free.";
        commentary = "The most radical teaching of Ashtavakra: bondage and liberation are concepts of the mind, not realities of the Self. The Self was never bound, so it needs no liberation. The seeker who truly grasps this ceases to seek and abides as the ever-free Self. This is the culmination of the path of knowledge (jnana).";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 2;
        sourceVerse = "2.2";
      },
      {
        id = "moksha-ag-15.1";
        chapter = 15;
        verse = "15.1";
        sanskritDevanagari = "यदा न लोभमोहौ त्वं तदा त्वमेव शेषितः";
        sanskritTransliteration = "Yada na lobha-mohau tvam tada tvam eva sheshitah";
        simpleMeaning = "When you are free from greed and delusion, then you alone remain — the Self, the residue of all negation.";
        commentary = "Ashtavakra teaches the method of neti-neti (not this, not this): when all that is not-Self is negated — body, mind, desire, aversion — what remains is the Self. This residue is not a void but the fullness of pure awareness. The seeker practices by letting go of each identification until only the witness remains.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 15;
        sourceVerse = "15.1";
      },
      {
        id = "moksha-ag-18.1";
        chapter = 18;
        verse = "18.1";
        sanskritDevanagari = "यदा ते शान्तिसम्पन्नं तदा त्वमेव शेषितः";
        sanskritTransliteration = "Yada te shanti-sampannam tada tvam eva sheshitah";
        simpleMeaning = "When your mind is filled with peace, then you alone remain — the Self, ever peaceful, ever free.";
        commentary = "The culmination of the Ashtavakra Gita: the mind at peace reveals the Self that was always there. Peace is not an achievement but a recognition — the natural condition of the Self when the agitations of the mind subside. The seeker rests in this peace, which is the Self itself, and the path is complete.";
        sourceGranth = "Ashtavakra Gita";
        sourceChapter = 18;
        sourceVerse = "18.1";
      },
    ];

    for (t in teachingData.values()) { teachings.add(t.id, t) };
  };

  // ─── Dharma Bodh (life purpose discovery) ──────────────────────────────────
  public func listDharmaBodhSteps(
    steps : Map.Map<Text, Types.DharmaBodhStep>,
  ) : [Types.DharmaBodhStep] {
    steps.values().toArray();
  };

  public func getDharmaBodhStep(
    steps : Map.Map<Text, Types.DharmaBodhStep>,
    id : Text,
  ) : ?Types.DharmaBodhStep {
    steps.get(id);
  };

  public func initDharmaBodhSteps(steps : Map.Map<Text, Types.DharmaBodhStep>) : () {
    let stepData : [Types.DharmaBodhStep] = [
      {
        id = "dharma-step-1";
        stepNumber = 1;
        title = "Recognize the Call";
        sanskritName = "आह्वान ज्ञान";
        question = "What is the deep longing of your heart — the one thing that, if you did it, would make you feel your life was truly lived?";
        guidance = "Dharma begins with a call — a deep longing that surfaces from the soul. This is not a passing desire but a persistent pull that returns again and again, often from childhood. Sit quietly and ask: 'If I had no fear, no need for approval, and only one life to live, what would I devote it to?' The answer that arises, when you are honest, is the first whisper of your dharma. Do not dismiss it because it seems impractical or unworthy. The soul's longing is the compass of dharma.";
        practice = "Sit in silence for 15 minutes daily for one week. At the end of each session, write one sentence: 'My heart longs to ___.' Do not edit or judge. At the end of the week, read what you have written and notice the pattern. The recurring longing is the call of your dharma.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "3.35";
        sourceChapter = "Chapter 3";
      },
      {
        id = "dharma-step-2";
        stepNumber = 2;
        title = "Examine Your Svabhava";
        sanskritName = "स्वभाव परीक्षण";
        question = "What are the natural qualities and tendencies you were born with — the things that come easily to you, that you do well without effort, that give you joy in the doing?";
        guidance = "Krishna teaches that dharma is determined by svabhava — your inborn nature. Your svabhava is not chosen; it is given. Some are born with the nature of a teacher, others a healer, others a builder, others a protector. Examine your life: what have you always done well, even as a child? What do others seek you out for? What activity makes you lose track of time? These are the fingerprints of your svabhava. Your dharma lies at the intersection of your svabhava and the world's need.";
        practice = "Make a list of: (1) the things you do well without effort, (2) the activities that give you joy in the doing, (3) the qualities others recognize in you. Look for the overlap. Your svabhava lives in the intersection of these three lists.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "18.47";
        sourceChapter = "Chapter 18";
      },
      {
        id = "dharma-step-3";
        stepNumber = 3;
        title = "Identify Your Svadharma";
        sanskritName = "स्वधर्म निरूपण";
        question = "What is the unique contribution that only you can make — the work that fits your nature and serves the world's need at the same time?";
        guidance = "Svadharma is your personal dharma — the unique duty that arises from your svabhava in your specific circumstances. It is not the universal dharma (which all must follow — truth, non-violence, compassion) but the particular dharma that is yours alone. A doctor's svadharma is to heal; a mother's is to nurture; a teacher's is to teach. Ask: 'Given my nature and my circumstances, what is the work that is mine to do?' Svadharma is found where your deepest joy meets the world's deepest need.";
        practice = "Write the sentence: 'Given who I am and where I am, my svadharma is to ___.' Fill in the blank. Then ask three people who know you well: 'What do you see as my unique contribution?' Compare their answers with your own. The convergence is your svadharma.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "2.31";
        sourceChapter = "Chapter 2";
      },
      {
        id = "dharma-step-4";
        stepNumber = 4;
        title = "Distinguish Dharma from Desire";
        sanskritName = "धर्म काम विवेक";
        question = "Is this calling from the soul (dharma) or from the ego (kama)? Does it serve others, or only yourself?";
        guidance = "The ego often disguises its desires as dharma. The test is: does this calling serve others, or only myself? Dharma always serves the whole; kama serves the separate self. A calling to wealth for its own sake is kama; a calling to wealth as a means to serve is dharma. A calling to fame for its own sake is kama; a calling to influence as a means to uplift is dharma. Examine your calling honestly: if it serves only you, it is desire; if it serves the whole through you, it is dharma.";
        practice = "Take your identified svadharma and ask: 'If I succeed in this, who benefits?' If the answer is only you, examine further. If the answer includes others — your family, your community, the world — then it is likely dharma. Refine your calling until it serves more than yourself.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "3.19";
        sourceChapter = "Chapter 3";
      },
      {
        id = "dharma-step-5";
        stepNumber = 5;
        title = "Surrender the Fruits";
        sanskritName = "फल त्याग";
        question = "Can you do this work without attachment to success, recognition, or reward — for the sake of the work itself?";
        guidance = "The final test of dharma is the willingness to do it without attachment to the fruits. Krishna's supreme teaching: 'You have a right to action alone, never to its fruits.' (Gita 2.47) If your calling depends on success, it is still entangled with the ego. True svadharma is done because it is right, because it is yours to do, regardless of outcome. This does not mean you do not care about results — you work with full effort — but you are not bound by them. When you can do your dharma in this spirit, it becomes the path to liberation itself.";
        practice = "For one month, perform your identified svadharma with this dedication before each action: 'I offer this action and its fruits to the divine. May it serve the whole.' Notice when attachment to results arises, and gently release it. The work itself becomes the worship; the liberation is in the doing, not the result.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "2.47";
        sourceChapter = "Chapter 2";
      },
    ];

    for (s in stepData.values()) { steps.add(s.id, s) };
  };

  // ─── Devlok Yaatra (21 stages) ─────────────────────────────────────────────
  public func listDevlokStages(
    stages : Map.Map<Text, Types.DevlokStage>,
  ) : [Types.DevlokStage] {
    stages.values().toArray();
  };

  public func getDevlokStage(
    stages : Map.Map<Text, Types.DevlokStage>,
    id : Text,
  ) : ?Types.DevlokStage {
    stages.get(id);
  };

  public func initDevlokStages(stages : Map.Map<Text, Types.DevlokStage>) : () {
    let stageData : [Types.DevlokStage] = [
      {
        id = "devlok-stage-1";
        stageNumber = 1;
        name = "Sankalpa — The Vow";
        sanskritName = "सङ्कल्प";
        description = "The first stage of the Devlok Yaatra: the firm resolve to undertake the journey to Paramadhama, the supreme abode. Sankalpa is the seed from which the entire journey grows; without it, no path begins. The seeker declares: 'I will walk this path, whatever it costs.'";
        significance = "Sankalpa is the alignment of will with the divine. Without a firm resolve, the journey falters at the first obstacle. With it, even the longest path is walked step by step.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "6.1";
        sourceChapter = "Chapter 6";
      },
      {
        id = "devlok-stage-2";
        stageNumber = 2;
        name = "Shraddha — Faith";
        sanskritName = "श्रद्धा";
        description = "The second stage: the awakening of faith (shraddha) in the teachings, the Guru, and the goal. Krishna says: 'He who has faith, who is devoted, and who has subdued his senses, attains knowledge.' (Gita 4.39) Without shraddha, the path remains closed.";
        significance = "Shraddha is not blind belief but the heart's recognition of truth. It opens the door through which the divine enters.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "4.39";
        sourceChapter = "Chapter 4";
      },
      {
        id = "devlok-stage-3";
        stageNumber = 3;
        name = "Shaucha — Purification";
        sanskritName = "शौच";
        description = "The third stage: the purification of body, speech, and mind. The seeker cleanses the instrument of the journey — the body and mind — so that the divine may be reflected in it. Outer purity (bathing, clean food, clean space) and inner purity (truth, compassion, freedom from greed) are practiced together.";
        significance = "A pure instrument reflects the pure Self. Impurity clouds the mirror; purification polishes it until the divine shines through.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.40";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "devlok-stage-4";
        stageNumber = 4;
        name = "Yama — Self-Restraint";
        sanskritName = "यम";
        description = "The fourth stage: the practice of the five yamas — ahimsa (non-violence), satya (truth), asteya (non-stealing), brahmacharya (continence), and aparigraha (non-possessiveness). These are the ethical foundations without which no spiritual progress is possible.";
        significance = "Yama is the boundary that protects the seeker from the actions that would scatter the mind. Without it, the journey cannot begin in earnest.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.30";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "devlok-stage-5";
        stageNumber = 5;
        name = "Niyama — Observances";
        sanskritName = "नियम";
        description = "The fifth stage: the practice of the five niyamas — shaucha (purity), santosha (contentment), tapas (austerity), svadhyaya (self-study), and ishvara-pranidhana (surrender to the divine). These are the positive disciplines that build the inner strength for the journey.";
        significance = "Niyama is the cultivation of the qualities that draw the divine near. As the seeker practices, the inner light grows steadily brighter.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.32";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "devlok-stage-6";
        stageNumber = 6;
        name = "Asana — Steady Seat";
        sanskritName = "आसन";
        description = "The sixth stage: the cultivation of a steady, comfortable seat for meditation — both the physical posture and the inner steadiness of mind. Asana is the foundation upon which all higher practice rests.";
        significance = "A steady body supports a steady mind. Without this foundation, the higher stages cannot be sustained.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.46";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "devlok-stage-7";
        stageNumber = 7;
        name = "Pranayama — Breath Mastery";
        sanskritName = "प्राणायाम";
        description = "The seventh stage: the regulation of the breath (prana), which calms the mind and awakens the inner energy. The seeker learns to make the breath subtle and steady, which stills the thought-waves of the mind.";
        significance = "Where the breath is steady, the mind is steady. Pranayama is the bridge between the body and the mind, the gateway to the subtle realms.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.49";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "devlok-stage-8";
        stageNumber = 8;
        name = "Pratyahara — Withdrawal";
        sanskritName = "प्रत्याहार";
        description = "The eighth stage: the withdrawal of the senses from their objects, turning the awareness inward. The seeker, like a turtle withdrawing its limbs into its shell, gathers the scattered senses back to their source.";
        significance = "Pratyahara is the threshold between the outer and the inner. Once crossed, the seeker enters the realm where the divine can be directly encountered.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "2.54";
        sourceChapter = "Sadhana Pada";
      },
      {
        id = "devlok-stage-9";
        stageNumber = 9;
        name = "Dharana — Concentration";
        sanskritName = "धारणा";
        description = "The ninth stage: the concentration of the mind on a single object — a mantra, an image of the divine, the breath, or the Self. The seeker holds the mind steady, like a flame in a windless place.";
        significance = "Dharana is the first of the inner limbs (antaranga). It begins the direct encounter with the divine that culminates in samadhi.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.1";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "devlok-stage-10";
        stageNumber = 10;
        name = "Dhyana — Meditation";
        sanskritName = "ध्यान";
        description = "The tenth stage: the unbroken flow of awareness toward the object of concentration. The mind, no longer struggling to hold, flows effortlessly like oil poured from one vessel to another. This is true meditation.";
        significance = "Dhyana is the natural fruit of dharana. In it, the seeker begins to dissolve into the object of meditation, the first taste of union.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.2";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "devlok-stage-11";
        stageNumber = 11;
        name = "Samadhi — Absorption";
        sanskritName = "समाधि";
        description = "The eleventh stage: the state in which the mind becomes one with the object of meditation, the distinction between meditator and meditated dissolving. This is the culmination of the eightfold path, the first taste of liberation.";
        significance = "Samadhi is the gate to the divine. Once entered, the seeker is no longer the same; the world is never again seen as before.";
        sourceGranth = "Yoga Sutra of Patanjali";
        sourceVerse = "3.3";
        sourceChapter = "Vibhuti Pada";
      },
      {
        id = "devlok-stage-12";
        stageNumber = 12;
        name = "Viveka — Discrimination";
        sanskritName = "विवेक";
        description = "The twelfth stage: the awakening of the power to discriminate between the real (the Self) and the unreal (all appearances). The seeker, having tasted samadhi, now sees clearly what is eternal and what is passing.";
        significance = "Viveka is the sword that cuts the bonds of attachment. With it, the seeker no longer mistakes the transient for the eternal.";
        sourceGranth = "Vivekachudamani";
        sourceVerse = "1";
        sourceChapter = "Verse 1";
      },
      {
        id = "devlok-stage-13";
        stageNumber = 13;
        name = "Vairagya — Dispassion";
        sanskritName = "वैराग्य";
        description = "The thirteenth stage: the natural dispassion that arises from viveka. The seeker, having seen the impermanence of all things, no longer clings. This is not forced renunciation but the spontaneous letting-go of one who has seen the truth.";
        significance = "Vairagya is the freedom of one who has seen through the mirage. Without it, the seeker is still bound to the world.";
        sourceGranth = "Vivekachudamani";
        sourceVerse = "6";
        sourceChapter = "Verse 6";
      },
      {
        id = "devlok-stage-14";
        stageNumber = 14;
        name = "Mumukshutva — Longing for Liberation";
        sanskritName = "मुमुक्षुत्व";
        description = "The fourteenth stage: the intense longing for liberation that consumes all other desires. The seeker, having tasted the divine and seen the impermanence of the world, yearns only for the eternal. This longing is the fire that carries the seeker through the final stages.";
        significance = "Mumukshutva is the consummation of all earthly longing in the one longing for the divine. It is the engine of the final ascent.";
        sourceGranth = "Vivekachudamani";
        sourceVerse = "27";
        sourceChapter = "Verse 27";
      },
      {
        id = "devlok-stage-15";
        stageNumber = 15;
        name = "Shravana — Hearing the Truth";
        sanskritName = "श्रवण";
        description = "The fifteenth stage: the hearing of the truth of the Self from the Guru and the scriptures. The seeker, now qualified by viveka, vairagya, and mumukshutva, receives the teaching: 'Tat Tvam Asi — That Thou Art.'";
        significance = "Shravana plants the seed of Self-knowledge in the prepared soil of the seeker's heart. Without it, the truth remains unheard.";
        sourceGranth = "Brihadaranyaka Upanishad";
        sourceVerse = "2.3.6";
        sourceChapter = "Chapter 2";
      },
      {
        id = "devlok-stage-16";
        stageNumber = 16;
        name = "Manana — Reflection";
        sanskritName = "मनन";
        description = "The sixteenth stage: the constant reflection on the truth heard, until all doubts are resolved. The seeker turns the teaching over and over in the mind, examining it from every angle, until it becomes not a belief but a living conviction.";
        significance = "Manana converts hearing into understanding. Without it, the teaching remains a borrowed idea, not one's own realization.";
        sourceGranth = "Brihadaranyaka Upanishad";
        sourceVerse = "2.4.5";
        sourceChapter = "Chapter 2";
      },
      {
        id = "devlok-stage-17";
        stageNumber = 17;
        name = "Nididhyasana — Meditation on the Self";
        sanskritName = "निदिध्यासन";
        description = "The seventeenth stage: the uninterrupted meditation on the Self, abiding as the awareness that one is. The seeker, having heard and reflected, now dwells in the truth directly, not as a thought but as the living reality.";
        significance = "Nididhyasana is the dissolution of the meditator into the meditation. Here, the seeker and the truth become one.";
        sourceGranth = "Brihadaranyaka Upanishad";
        sourceVerse = "4.5.6";
        sourceChapter = "Chapter 4";
      },
      {
        id = "devlok-stage-18";
        stageNumber = 18;
        name = "Sakshatkara — Direct Realization";
        sanskritName = "साक्षात्कार";
        description = "The eighteenth stage: the direct realization of the Self — not as an idea, not as an experience, but as the very ground of being. The seeker becomes the Self, has always been the Self, and knows it now without doubt.";
        significance = "Sakshatkara is the dawn after the long night. The seeker is no more; only the Self remains, shining as it always has.";
        sourceGranth = "Mandukya Upanishad";
        sourceVerse = "7";
        sourceChapter = "Verse 7";
      },
      {
        id = "devlok-stage-19";
        stageNumber = 19;
        name = "Bhava-Samadhi — Absorption in Being";
        sanskritName = "भाव समाधि";
        description = "The nineteenth stage: the natural, effortless absorption in the Self that continues even in the midst of activity. The realized one walks, talks, and works, yet never leaves the samadhi, for the Self is all.";
        significance = "Bhava-samadhi is the integration of realization into daily life. The divine is no longer a state to enter but the ground on which one always stands.";
        sourceGranth = "Ashtavakra Gita";
        sourceVerse = "18.20";
        sourceChapter = "Chapter 18";
      },
      {
        id = "devlok-stage-20";
        stageNumber = 20;
        name = "Jivanmukti — Liberation While Living";
        sanskritName = "जीवन्मुक्ति";
        description = "The twentieth stage: liberation while still in the body. The jivanmukta lives in the world but is not of it; the body continues its prarabdha, but the Self is free, untouched by pleasure or pain, life or death.";
        significance = "Jivanmukti is the fulfillment of the human birth. The one who reaches here has completed the journey that all beings are destined to complete.";
        sourceGranth = "Ashtavakra Gita";
        sourceVerse = "18.1";
        sourceChapter = "Chapter 18";
      },
      {
        id = "devlok-stage-21";
        stageNumber = 21;
        name = "Paramadhama — The Supreme Abode";
        sanskritName = "परमधाम";
        description = "The twenty-first and final stage: the supreme abode, the state beyond all states. When the body falls, the jivanmukta merges into the infinite, never to return. This is videha-mukti — bodiless liberation — the final destination of the Devlok Yaatra.";
        significance = "Paramadhama is not a place but the recognition that the Self was never bound, never journeyed, never arrived. The journey ends where it began — in the eternal, infinite, ever-free Self.";
        sourceGranth = "Bhagavad Gita";
        sourceVerse = "15.6";
        sourceChapter = "Chapter 15";
      },
    ];

    for (s in stageData.values()) { stages.add(s.id, s) };
  };
};
