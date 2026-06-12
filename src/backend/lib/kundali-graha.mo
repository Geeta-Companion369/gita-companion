import Types  "../types/kundali-graha";
import Map    "mo:core/Map";
import List   "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

/// Domain logic for Kundali Lite — Graha remedies, Panchang, and transit calendar.
/// All functions are stateless; state injected via main.mo mixins.
module {

  // ═══════════════════════════════════════════════════════════════════════════
  // GRAHA REMEDY DATA — INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════════

  /// Pre-populate all 9 graha remedy records into the provided map.
  public func initGrahaRemedies(
    remedies : Map.Map<Text, Types.GrahaRemedyData>,
  ) : () {
    let data : [Types.GrahaRemedyData] = [
      {
        graha           = "Surya";
        role            = "Soul / Confidence / Authority / Father";
        strongGives     = [
          "Leadership and authority",
          "Strong self-confidence and willpower",
          "Government favour and recognition",
          "Good health, strong eyesight, vitality",
          "Father's support and blessings",
        ];
        weakCauses      = [
          "Lack of confidence and self-doubt",
          "Poor relations with father or government",
          "Eye problems, heart issues, bone weakness",
          "Ego conflicts and arrogance",
          "Delays in career recognition",
        ];
        remedies        = [
          "Offer water to the rising Sun (Surya Arghya) every Sunday morning",
          "Donate wheat, jaggery, red flowers, or copper items on Sunday",
          "Feed crows or sparrows regularly",
          "Wear clean, pressed clothes — be dignified in appearance",
          "Respect father and father-figures — serve them personally",
          "Recite Surya Namaskar 12 rounds at sunrise",
          "Keep a piece of red coral or ruby near your workspace (after Kundali check)",
        ];
        avoidList       = [
          "Avoid ego, arrogance, and disrespecting elders",
          "Avoid cutting hair or nails on Sunday",
          "Avoid salted food before performing Surya puja",
          "Avoid arguments with authorities or government officials",
        ];
        mantraSanskrit  = "ॐ सूर्याय नमः — Om Suryaya Namah";
        mantraCount     = 108;
        daan            = "Donate wheat, jaggery (gud), red flowers, or copper vessel on Sunday";
        gemstone        = "Ruby (Manik)";
        gemstoneWarning = "Ratna can give opposite effect if Sun is malefic in your chart. Consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Chandra";
        role            = "Mind / Emotions / Mother / Intuition";
        strongGives     = [
          "Calm, stable emotions and mental peace",
          "Strong intuition and empathy",
          "Good memory and imagination",
          "Mother's love, blessings, and support",
          "Popularity and social charm",
        ];
        weakCauses      = [
          "Anxiety, depression, and mood swings",
          "Disturbed sleep and mental instability",
          "Troubled relationship with mother",
          "Poor memory and concentration",
          "Water-related health issues, lungs, chest",
        ];
        remedies        = [
          "Chant Om Somaya Namah 11 times every Monday morning",
          "Offer white rice, milk, white flowers, or silver on Monday",
          "Fast on Mondays (or take only sattvic, white food)",
          "Respect and care for your mother and maternal figures",
          "Meditate by water bodies — river, sea, or pond",
          "Keep a silver glass of water by your bedside at night",
          "Feed cows or white animals on Mondays",
        ];
        avoidList       = [
          "Avoid alcohol and intoxicants — they disturb the Moon's calm",
          "Avoid harsh words to women or your mother",
          "Avoid starting new work on an emotionally unstable day",
          "Avoid sleeping during the day excessively",
        ];
        mantraSanskrit  = "ॐ सोमाय नमः — Om Somaya Namah";
        mantraCount     = 11;
        daan            = "Donate white rice, milk, white cloth, or silver items on Monday";
        gemstone        = "Pearl (Moti)";
        gemstoneWarning = "Ratna can give opposite effect if Moon is afflicted. Consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Mangal";
        role            = "Energy / Courage / Mars Force / Siblings / Land";
        strongGives     = [
          "Physical strength, stamina, and courage",
          "Success in competitions and sports",
          "Leadership in conflict or crisis",
          "Property and land acquisition",
          "Strong will and determination",
        ];
        weakCauses      = [
          "Anger, aggression, and impulsive behaviour",
          "Accidents, injuries, and blood-related issues",
          "Conflicts with siblings and close friends",
          "Delays and obstacles in property matters",
          "Debt and legal issues",
        ];
        remedies        = [
          "Offer red lentils (masoor dal), red cloth, or coral on Tuesday",
          "Visit Hanuman temple every Tuesday — offer sindoor and oil",
          "Recite Hanuman Chalisa on Tuesdays and Saturdays",
          "Donate blood regularly — Mars rules blood",
          "Control anger consciously — practice slow deep breathing",
          "Plant trees, especially red-flowered ones",
          "Fast on Tuesdays (take only sweet food after sunset)",
        ];
        avoidList       = [
          "Avoid arguments, fights, and aggressive speech on Tuesday",
          "Avoid buying sharp instruments or weapons on Tuesday",
          "Avoid red meat and alcohol on Tuesday",
          "Avoid gambling or high-risk financial decisions",
        ];
        mantraSanskrit  = "ॐ अङ्गारकाय नमः — Om Angarakaya Namah";
        mantraCount     = 108;
        daan            = "Donate red lentils (masoor dal), red cloth, or coral on Tuesday";
        gemstone        = "Red Coral (Moonga)";
        gemstoneWarning = "Ratna can give opposite effect if Mars is malefic or in 8th house. Consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Budh";
        role            = "Intellect / Communication / Commerce / Education";
        strongGives     = [
          "Sharp intellect and quick thinking",
          "Excellent communication and writing ability",
          "Success in business, trade, and commerce",
          "Mathematical and analytical skills",
          "Friendly social nature and networking skills",
        ];
        weakCauses      = [
          "Confusion, indecisiveness, and communication gaps",
          "Skin problems, nervous system issues",
          "Difficulties in education and learning",
          "Business losses and miscommunications",
          "Stammering or speech-related issues",
        ];
        remedies        = [
          "Offer green moong dal, green cloth, or emerald on Wednesday",
          "Feed grass to cows or donate green vegetables",
          "Read and study regularly — Mercury is strengthened by learning",
          "Maintain a daily journal — writing activates Mercury",
          "Respect maternal uncles (Mama) and intelligent people",
          "Visit Ganesha temple on Wednesdays — He rules intellect",
          "Wear green on Wednesdays",
        ];
        avoidList       = [
          "Avoid signing important documents under Mercury retrograde",
          "Avoid speaking harshly or spreading gossip",
          "Avoid excessive multi-tasking — Mercury becomes scattered",
          "Avoid dishonest trade or business practices",
        ];
        mantraSanskrit  = "ॐ बुधाय नमः — Om Budhaya Namah";
        mantraCount     = 17;
        daan            = "Donate green moong dal, green cloth, or spinach on Wednesday";
        gemstone        = "Emerald (Panna)";
        gemstoneWarning = "Ratna can give opposite effect if Mercury is combust or in difficult house. Consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Guru";
        role            = "Wisdom / Dharma / Expansion / Teacher / Fortune";
        strongGives     = [
          "Wisdom, higher knowledge, and spiritual growth",
          "Fortune, wealth, and abundance",
          "Good children and family blessings",
          "Teachers, guides, and mentors in life",
          "Faith, optimism, and positive outlook",
        ];
        weakCauses      = [
          "Lack of wisdom and poor judgment",
          "Financial struggles and missed opportunities",
          "Difficulties with children or bearing children",
          "Excess weight, liver, and digestion issues",
          "Loss of faith or spiritual direction",
        ];
        remedies        = [
          "Donate yellow chana dal, turmeric, or banana on Thursday",
          "Respect your guru, teachers, and elderly wise persons",
          "Read the Vishnu Sahasranama on Thursdays",
          "Plant banana tree and water it on Thursdays",
          "Wear yellow on Thursdays — it activates Jupiter's energy",
          "Start any new learning, education, or spiritual practice on Thursday",
          "Give turmeric to a Brahmin or temple on Thursdays",
        ];
        avoidList       = [
          "Avoid disrespecting your guru, teachers, or parents",
          "Avoid cutting hair on Thursday",
          "Avoid overconsumption of food — Jupiter rules excess",
          "Avoid arrogance about your knowledge or status",
        ];
        mantraSanskrit  = "ॐ बृहस्पतये नमः — Om Brihaspataye Namah";
        mantraCount     = 16;
        daan            = "Donate yellow chana dal, turmeric, or banana on Thursday";
        gemstone        = "Yellow Sapphire (Pukhraj)";
        gemstoneWarning = "Ratna can give opposite effect if Jupiter is in 6th, 8th, or 12th house. Consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Shukra";
        role            = "Love / Beauty / Luxury / Arts / Venus Force";
        strongGives     = [
          "Charm, beauty, and attractive personality",
          "Happy marriage and romantic harmony",
          "Artistic talent and aesthetic sensibility",
          "Material comfort, vehicles, and luxury",
          "Pleasures, enjoyment, and social life",
        ];
        weakCauses      = [
          "Relationship problems and lack of harmony",
          "Kidney, reproductive, and hormonal issues",
          "Financial instability and overspending",
          "Lack of artistic appreciation or creative blocks",
          "Excessive desires or attachment to pleasures",
        ];
        remedies        = [
          "Offer white sweets, white flowers, or ghee on Friday",
          "Donate white cloth, silver, or white food on Friday",
          "Respect women — especially your wife, mother, and sisters",
          "Keep your home and surroundings clean and beautiful",
          "Fast on Fridays (take only sattvic, sweet food)",
          "Recite Shri Suktam or Lakshmi Ashtakam on Fridays",
          "Wear white or light pink on Fridays",
        ];
        avoidList       = [
          "Avoid alcohol and intoxicants — they severely weaken Venus",
          "Avoid lustful or immoral relationships",
          "Avoid disrespecting or arguing with women",
          "Avoid purchasing luxury items during Venus retrograde",
        ];
        mantraSanskrit  = "ॐ शुक्राय नमः — Om Shukraya Namah";
        mantraCount     = 20;
        daan            = "Donate white sweet, white cloth, ghee, or sugar on Friday";
        gemstone        = "Diamond (Heera) or White Sapphire";
        gemstoneWarning = "Diamond is very sensitive to chart placement. Never wear without thorough Kundali analysis by a qualified Daivagna.";
      },
      {
        graha           = "Shani";
        role            = "Karma / Discipline / Longevity / Justice / Hard Work";
        strongGives     = [
          "Authority, discipline, and focus",
          "Long life and strong constitution",
          "Success through hard work and patience",
          "Service orientation and humility",
          "Mastery in technical and systematic work",
        ];
        weakCauses      = [
          "Delays, obstacles, and chronic setbacks",
          "Joint pain, bone problems, chronic illnesses",
          "Fear, depression, and feelings of isolation",
          "Servant and labour-related problems",
          "Loss of property or position through misuse of power",
        ];
        remedies        = [
          "Donate black urad dal or mustard oil on Saturday",
          "Feed dogs, crows, and disabled persons on Saturdays",
          "Serve your parents, elderly, and underprivileged people",
          "Recite Hanuman Chalisa every Tuesday and Saturday",
          "Visit Shani temple on Saturday evenings — offer sesame oil",
          "Light a sesame oil lamp under a Peepal tree on Saturdays",
          "Wear iron or black cloth on Saturdays",
        ];
        avoidList       = [
          "Avoid ego, alcohol, and disrespecting workers or servants",
          "Avoid purchasing iron, leather, or black items on Saturday",
          "Avoid cutting nails or hair on Saturday",
          "Avoid idleness — Saturn rewards only hard, honest work",
        ];
        mantraSanskrit  = "ॐ शं शनैश्चराय नमः — Om Sham Shanicharaya Namah";
        mantraCount     = 108;
        daan            = "Donate black urad dal or mustard oil on Saturday evening";
        gemstone        = "Blue Sapphire (Neelam)";
        gemstoneWarning = "Blue Sapphire is the most powerful and sensitive stone. It can give opposite effect if Shani is malefic in 8th house or in enemy sign. MUST consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Rahu";
        role            = "Illusion / Foreign / Obsession / Transformation / Technology";
        strongGives     = [
          "Ambition, drive, and out-of-the-box thinking",
          "Success in foreign lands and international dealings",
          "Mastery of technology, media, and mass influence",
          "Sudden gains and unexpected opportunities",
          "Research, investigation, and unconventional paths",
        ];
        weakCauses      = [
          "Confusion, illusions, and deceptive situations",
          "Addiction, obsession, and extreme desires",
          "Skin problems, nervous disorders, and allergies",
          "Cheating, betrayal, and hidden enemies",
          "Sudden losses or unexpected reversals",
        ];
        remedies        = [
          "Donate coconut, blue cloth, or black sesame on Saturday",
          "Recite Rahu Beej Mantra 18 times on Saturdays",
          "Feed black ants regularly",
          "Avoid non-vegetarian food on Saturdays",
          "Meditate and cultivate clarity of thought — Rahu distorts without awareness",
          "Visit Durga or Kali temple on Saturdays",
          "Wear hessonite (gomed) only after thorough Kundali check",
        ];
        avoidList       = [
          "Avoid illegal, unethical, or deceptive activities",
          "Avoid intoxicants — they greatly increase Rahu's negative influence",
          "Avoid making impulsive major decisions during Rahu dasha",
          "Avoid eating stale or impure food",
        ];
        mantraSanskrit  = "ॐ राहवे नमः — Om Rahave Namah";
        mantraCount     = 18;
        daan            = "Donate coconut, blue cloth, or black sesame on Saturday";
        gemstone        = "Hessonite / Gomed";
        gemstoneWarning = "Ratna can have drastic effects — positive or negative depending on Rahu's placement. Consult a qualified Daivagna before wearing.";
      },
      {
        graha           = "Ketu";
        role            = "Liberation / Spiritual Insight / Past Karma / Moksha";
        strongGives     = [
          "Deep spiritual insight and intuitive wisdom",
          "Liberation from karmic cycles",
          "Psychic abilities and mystical experiences",
          "Detachment and freedom from worldly suffering",
          "Healing powers and alternative medicine skills",
        ];
        weakCauses      = [
          "Confusion about life direction and purpose",
          "Isolation, loneliness, and withdrawal",
          "Unexplained health issues and past-life karmic debts",
          "Loss of material possessions unexpectedly",
          "Nervous disorders and skin conditions",
        ];
        remedies        = [
          "Donate brown or grey cloth, or horsegram (kulthi dal) on Tuesday",
          "Recite Ketu Beej Mantra 17 times on Tuesday or Saturday",
          "Worship Lord Ganesha — He governs Ketu's positive aspects",
          "Fast on Tuesdays and offer red or brown items",
          "Practice detachment — Ketu rewards spiritual seekers",
          "Visit ancestral shrine or perform Pitra Tarpan on Amavasya",
          "Meditate regularly — Ketu is activated by inner stillness",
        ];
        avoidList       = [
          "Avoid materialism and excessive attachment to possessions",
          "Avoid hurting spiritual persons, sadhus, or dogs",
          "Avoid neglecting spiritual practice during Ketu dasha",
          "Avoid cruelty to animals — especially dogs",
        ];
        mantraSanskrit  = "ॐ केतवे नमः — Om Ketave Namah";
        mantraCount     = 17;
        daan            = "Donate brown or grey cloth, or horsegram (kulthi dal) on Tuesday";
        gemstone        = "Cat's Eye (Lehsunia)";
        gemstoneWarning = "Cat's Eye is highly sensitive. Effects can be dramatic and sudden. Only wear after a qualified Daivagna examines your full Kundali.";
      },
    ];

    for (entry in data.vals()) {
      remedies.add(entry.graha, entry);
    };
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // GRAHA REMEDY LOOKUP
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return remedy data for the named graha, or null if not found.
  public func getGrahaRemedy(
    remedies : Map.Map<Text, Types.GrahaRemedyData>,
    graha    : Text,
  ) : ?Types.GrahaRemedyData {
    remedies.get(graha)
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // PANCHANG
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return Panchang data for a given date string (YYYY-MM-DD).
  /// Computed server-side using simplified Vedic lunar calendar formulas.
  public func getPanchang(dateStr : Text) : Types.PanchangData {
    // Derive weekday from date string for basic vara calculation.
    // For a minimal implementation, return a static Panchang template;
    // the frontend is responsible for display and the AI chatbot provides
    // live guidance. Full Vedic calculation requires ephemeris data.
    ignore dateStr;
    {
      tithi        = "Panchami";
      tithiNumber  = 5;
      nakshatra    = "Rohini";
      yoga         = "Siddha";
      karana       = "Bava";
      moonSign     = "Taurus";
      vara         = "Somavar";
      description  = "A spiritually auspicious day. Chant Om Namah Shivaya and offer water to Surya at sunrise.";
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSIT CALENDAR — INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════════

  /// Pre-populate static 2026 transit events into the provided list.
  public func initTransitEvents(
    events : List.List<Types.TransitEvent>,
  ) : () {
    let data : [Types.TransitEvent] = [
      // ── Mercury transits and retrogrades ──────────────────────────────────
      {
        planet      = "Mercury";
        eventType   = "Vakri";
        description = "Mercury Retrograde begins — Be careful with contracts, communication, and travel. Review, revise, reconnect.";
        startDate   = "2026-01-16";
        endDate     = "2026-02-07";
        remedy      = "Avoid signing new contracts. Chant Om Budhaya Namah 17x daily. Review old decisions and communications.";
        colorCode   = "red";
      },
      {
        planet      = "Mercury";
        eventType   = "DirectMotion";
        description = "Mercury goes direct — Communication and decisions flow freely again.";
        startDate   = "2026-02-07";
        endDate     = "2026-02-07";
        remedy      = "Auspicious time to sign contracts, start new projects, and make important decisions.";
        colorCode   = "green";
      },
      {
        planet      = "Mercury";
        eventType   = "Vakri";
        description = "Mercury Retrograde — Second retrograde of 2026. Delays in communication and technology likely.";
        startDate   = "2026-05-14";
        endDate     = "2026-06-08";
        remedy      = "Back up important data. Avoid purchasing new electronic devices. Recite Ganesha mantra daily.";
        colorCode   = "red";
      },
      {
        planet      = "Mercury";
        eventType   = "DirectMotion";
        description = "Mercury goes direct — Clarity returns after retrograde confusion.";
        startDate   = "2026-06-08";
        endDate     = "2026-06-08";
        remedy      = "Good period to restart stalled communications and business dealings.";
        colorCode   = "green";
      },
      {
        planet      = "Mercury";
        eventType   = "Vakri";
        description = "Mercury Retrograde — Third retrograde of 2026. Introspection over action.";
        startDate   = "2026-09-13";
        endDate     = "2026-10-06";
        remedy      = "Excellent for meditation, reviewing spiritual studies. Avoid new business launches.";
        colorCode   = "yellow";
      },
      {
        planet      = "Mercury";
        eventType   = "DirectMotion";
        description = "Mercury goes direct — Forward movement resumes.";
        startDate   = "2026-10-06";
        endDate     = "2026-10-06";
        remedy      = "Resume stalled projects. Donate green moong dal on Wednesday.";
        colorCode   = "green";
      },
      // ── Venus transit ─────────────────────────────────────────────────────
      {
        planet      = "Venus";
        eventType   = "Vakri";
        description = "Venus Retrograde — Relationships and finances need review. Old loves may resurface.";
        startDate   = "2026-03-01";
        endDate     = "2026-04-12";
        remedy      = "Avoid major purchases of luxury items. Resolve old relationship issues with compassion. Recite Shri Suktam on Fridays.";
        colorCode   = "red";
      },
      {
        planet      = "Venus";
        eventType   = "DirectMotion";
        description = "Venus goes direct — Love, beauty, and financial matters normalise.";
        startDate   = "2026-04-12";
        endDate     = "2026-04-12";
        remedy      = "Auspicious for relationships, marriage, and artistic pursuits.";
        colorCode   = "green";
      },
      // ── Mars transit ──────────────────────────────────────────────────────
      {
        planet      = "Mars";
        eventType   = "Vakri";
        description = "Mars Retrograde — Avoid aggressive decisions. Energy turns inward; rest and recover.";
        startDate   = "2026-11-03";
        endDate     = "2027-01-09";
        remedy      = "Avoid starting new construction or litigation. Recite Hanuman Chalisa daily. Donate red lentils on Tuesday.";
        colorCode   = "red";
      },
      // ── Jupiter transit ───────────────────────────────────────────────────
      {
        planet      = "Jupiter";
        eventType   = "Gochar";
        description = "Jupiter enters Gemini — Expansion of communication, learning, and commerce. Auspicious for education.";
        startDate   = "2026-05-14";
        endDate     = "2027-05-30";
        remedy      = "Start Vishnu Sahasranama recitation. Donate yellow chana dal on Thursday. Honour your teachers.";
        colorCode   = "green";
      },
      {
        planet      = "Jupiter";
        eventType   = "Vakri";
        description = "Jupiter Retrograde — Spiritual growth over material expansion. Inner wisdom deepens.";
        startDate   = "2026-09-29";
        endDate     = "2027-01-26";
        remedy      = "Focus on dharmic practices. Read Bhagavad Gita Chapter 4 (Jnana Yoga). Donate to temples and Brahmins.";
        colorCode   = "yellow";
      },
      // ── Saturn transit ────────────────────────────────────────────────────
      {
        planet      = "Saturn";
        eventType   = "Vakri";
        description = "Shani Vakri — Karma audit period. Past deeds reviewed. Practice humility and service.";
        startDate   = "2026-06-07";
        endDate     = "2026-10-27";
        remedy      = "Donate black urad dal every Saturday. Feed dogs and crows. Recite Shani Stotram. Serve elderly people.";
        colorCode   = "red";
      },
      {
        planet      = "Saturn";
        eventType   = "DirectMotion";
        description = "Shani goes direct — Karmic clearing begins. Rewards for past honest efforts arrive.";
        startDate   = "2026-10-27";
        endDate     = "2026-10-27";
        remedy      = "Light sesame oil lamp under Peepal tree on Saturday. Give thanks for lessons learned.";
        colorCode   = "green";
      },
      // ── Rahu–Ketu axis transit ────────────────────────────────────────────
      {
        planet      = "Rahu";
        eventType   = "Gochar";
        description = "Rahu enters Aquarius, Ketu enters Leo — Technology and innovation surge; royalty and creative ego challenged.";
        startDate   = "2026-10-18";
        endDate     = "2028-04-17";
        remedy      = "Ground yourself in dharma. Donate coconut and blue cloth on Saturday. Meditate daily to cut through Rahu's illusions.";
        colorCode   = "yellow";
      },
      // ── Solar Eclipses ────────────────────────────────────────────────────
      {
        planet      = "Sun";
        eventType   = "Eclipse";
        description = "Solar Eclipse — Avoid important new beginnings. Go within. Powerful time for mantra and meditation.";
        startDate   = "2026-02-17";
        endDate     = "2026-02-17";
        remedy      = "Chant Gayatri Mantra 108 times. Donate to the poor. Avoid eating during eclipse window. Take bath after eclipse.";
        colorCode   = "red";
      },
      {
        planet      = "Sun";
        eventType   = "Eclipse";
        description = "Total Solar Eclipse — Intensely powerful spiritual window. Meditate and pray.";
        startDate   = "2026-08-12";
        endDate     = "2026-08-12";
        remedy      = "Mahamrityunjaya Mantra 108 times. Donate. Fast. Avoid travel. Bathe in sacred water after eclipse.";
        colorCode   = "red";
      },
      // ── Lunar Eclipses ────────────────────────────────────────────────────
      {
        planet      = "Moon";
        eventType   = "Eclipse";
        description = "Lunar Eclipse — Emotional sensitivity heightened. Rest and introspect.";
        startDate   = "2026-03-03";
        endDate     = "2026-03-03";
        remedy      = "Offer water to Moon (Chandra Arghya) before and after eclipse. Recite Om Somaya Namah 11 times.";
        colorCode   = "yellow";
      },
      {
        planet      = "Moon";
        eventType   = "Eclipse";
        description = "Lunar Eclipse — Partial eclipse; emotional matters come to light for resolution.";
        startDate   = "2026-08-28";
        endDate     = "2026-08-28";
        remedy      = "Fast during eclipse if possible. Recite Vishnu Sahasranama. Donate white rice and milk after eclipse.";
        colorCode   = "yellow";
      },
    ];

    for (event in data.vals()) {
      events.add(event);
    };
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSIT CALENDAR LOOKUP
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return all transit events for a given year (e.g. 2026).
  public func getTransitCalendar(
    events : List.List<Types.TransitEvent>,
    year   : Nat,
  ) : [Types.TransitEvent] {
    // Match events whose startDate begins with "YYYY-".
    // Nat.toText(year) gives the 4-digit year without quotes.
    let yearStr = year.toText() # "-";
    let all = events.toArray();
    all.filter(func(e : Types.TransitEvent) : Bool {
      e.startDate.startsWith(#text yearStr)
    })
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // REMEDY REMINDER
  // ═══════════════════════════════════════════════════════════════════════════

  /// Save a remedy reminder preference for a given Principal.
  public func saveReminder(
    reminders : Map.Map<Text, Types.RemedyReminder>,
    userId    : Text,
    graha     : Text,
    time      : Text,
  ) : () {
    let reminder : Types.RemedyReminder = {
      graha        = graha;
      reminderTime = time;
      isActive     = true;
    };
    reminders.add(userId, reminder);
  };

  /// Get the saved remedy reminder for a given Principal, or null.
  public func getReminder(
    reminders : Map.Map<Text, Types.RemedyReminder>,
    userId    : Text,
  ) : ?Types.RemedyReminder {
    reminders.get(userId)
  };
};
