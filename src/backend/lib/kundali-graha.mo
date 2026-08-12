import Types "../types/kundali-graha";
import Map "mo:core/Map";
import List "mo:core/List";
import Float "mo:core/Float";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Array "mo:core/Array";

/// Domain logic for Kundali Lite — graha remedies, Panchang (full Hindu calendar),
/// transit calendar, and remedy reminders. All functions are stateless — state is
/// injected by main.mo via mixins.
module {

  // ═══════════════════════════════════════════════════════════════════════════
  // INTERNAL HELPERS — Vedic calendar calculations
  // ═══════════════════════════════════════════════════════════════════════════

  let PI : Float = 3.14159265358979323846;

  /// Convert Int to Float without using the deprecated Float.fromInt (M0235).
  func intToF(x : Int) : Float { Float.fromInt64(x.toInt64()) };

  func degToRad(d : Float) : Float { d * PI / 180.0 };
  func radToDeg(r : Float) : Float { r * 180.0 / PI };

  /// Positive modulo — keeps result in [0, m)
  func fmod(x : Float, m : Float) : Float {
    let r = x - Float.floor(x / m) * m;
    if (r < 0.0) { r + m } else { r }
  };

  /// Compute Julian Day Number from Gregorian date (noon-based).
  func julianDay(year : Int, month : Int, day : Int) : Float {
    let y = if (month <= 2) { year - 1 } else { year };
    let m = if (month <= 2) { month + 12 } else { month };
    let a = Float.floor(intToF(y) / 100.0);
    let b = 2.0 - a + Float.floor(a / 4.0);
    Float.floor(365.25 * (intToF(y) + 4716.0))
      + Float.floor(30.6001 * (intToF(m) + 1.0))
      + intToF(day) + b - 1524.5
  };

  /// Lahiri Ayanamsa for a given Julian Day.
  func ayanamsa(jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let years = (jd - j2000) / 365.25;
    23.85 + years * 0.0136
  };

  /// Sun's approximate ecliptic longitude (degrees) at a JD.
  func sunLongitude(jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    let L = fmod(280.460 + 0.9856474 * n, 360.0);
    let g = degToRad(fmod(357.528 + 0.9856003 * n, 360.0));
    let lambda = L + 1.915 * Float.sin(g) + 0.020 * Float.sin(2.0 * g);
    fmod(lambda, 360.0)
  };

  /// Moon's approximate ecliptic longitude (degrees) at a JD.
  func moonLongitude(jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    let lp = fmod(218.316 + 13.176396 * n, 360.0);
    let m = degToRad(fmod(134.963 + 13.064993 * n, 360.0));
    let f = degToRad(fmod(93.272 + 13.229350 * n, 360.0));
    let lambda = lp + 6.289 * Float.sin(m) - 1.274 * Float.sin(2.0 * f - m)
                    + 0.658 * Float.sin(2.0 * f) - 0.186 * Float.sin(degToRad(fmod(357.528 + 0.9856003 * n, 360.0)))
                    - 0.059 * Float.sin(2.0 * m) - 0.057 * Float.sin(2.0 * f - 2.0 * m);
    fmod(lambda, 360.0)
  };

  /// Convert tropical longitude to sidereal (subtract ayanamsa).
  func siderealLong(tropical : Float, ayan : Float) : Float {
    fmod(tropical - ayan + 360.0, 360.0)
  };

  // ─── Panchaang name tables ──────────────────────────────────────────────────

  // 30 Tithi names (1-indexed). Tithi 1 = Shukla Pratipada, Tithi 16 = Krishna Pratipada.
  let tithiNames : [Text] = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
    "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
    "Trayodashi", "Chaturdashi", "Purnima",
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
    "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
    "Trayodashi", "Chaturdashi", "Amavasya"
  ];

  // 27 Nakshatra names (0-indexed, Ashwini = 0)
  let nakshatraNames : [Text] = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ];

  // 27 Yoga names (0-indexed). Yoga is the sum of Sun and Moon longitudes.
  let yogaNames : [Text] = [
    "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
    "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
    "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana",
    "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
    "Brahma", "Indra", "Vaidhriti"
  ];

  // 11 Karana names (the 11 movable + fixed karanas). There are 60 karanas in a lunar month.
  // The 7 movable karanas cycle 8 times (56), plus 4 fixed karanas = 60.
  let movableKaranaNames : [Text] = [
    "Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti"
  ];
  // The 4 fixed karanas occur once each per lunar month:
  //   Shakuni (after Krishna Chaturdashi), Naga (before Amavasya),
  //   Kimstughna (first karana of Shukla Pratipada), Chatushpada (before Amavasya in some traditions).
  // Standard order: 7 movable repeat 8 times = 56, then Shakuni, Chatushpada, Naga, Kimstughna = 60.
  let fixedKaranaNames : [Text] = ["Shakuni", "Chatushpada", "Naga", "Kimstughna"];

  // 12 Rashi (zodiac sign) names — used for moonSign.
  let rashiNames : [Text] = [
    "Aries (Mesha)", "Taurus (Vrishabha)", "Gemini (Mithuna)", "Cancer (Karka)",
    "Leo (Simha)", "Virgo (Kanya)", "Libra (Tula)", "Scorpio (Vrishchika)",
    "Sagittarius (Dhanu)", "Capricorn (Makara)", "Aquarius (Kumbha)", "Pisces (Meena)"
  ];

  // 12 Lunar month (Masa) names — Chaitra is the first month (starts around March/April).
  // The lunar month is determined by the nakshatra of the full moon.
  let masaNames : [Text] = [
    "Chaitra", "Vaishakha", "Jyeshtha", "Ashadha", "Shravana", "Bhadrapada",
    "Ashwin", "Kartika", "Margashirsha", "Pausha", "Magha", "Phalguna"
  ];

  // 6 Ritu (season) names — each ritu spans 2 lunar months.
  // Vasanta (Chaitra-Vaishakha), Grishma (Jyeshtha-Ashadha), Varsha (Shravana-Bhadrapada),
  // Sharad (Ashwin-Kartika), Hemanta (Margashirsha-Pausha), Shishira (Magha-Phalguna)
  let rituNames : [Text] = [
    "Vasanta", "Grishma", "Varsha", "Sharad", "Hemanta", "Shishira"
  ];

  // 7 Vaar (weekday) names in Sanskrit — indexed by day of week (0=Sunday).
  let vaarNames : [Text] = [
    "Ravivar (Sunday)", "Somavar (Monday)", "Mangalvar (Tuesday)",
    "Budhvar (Wednesday)", "Guruvar (Thursday)", "Shukravar (Friday)", "Shanivar (Saturday)"
  ];

  /// Parse a YYYY-MM-DD date string into (year, month, day).
  /// Returns (0, 0, 0) on parse failure.
  func parseDate(dateStr : Text) : (Int, Int, Int) {
    let parts = dateStr.split(#char '-');
    let arr = parts.toArray();
    if (arr.size() < 3) { return (0, 0, 0) };
    let year = switch (Nat.fromText(arr[0])) { case (?n) { n.toInt() }; case null { 0 } };
    let month = switch (Nat.fromText(arr[1])) { case (?n) { n.toInt() }; case null { 0 } };
    let day = switch (Nat.fromText(arr[2])) { case (?n) { n.toInt() }; case null { 0 } };
    (year, month, day)
  };

  /// Compute the day of the week (0 = Sunday, 6 = Saturday) from a Gregorian date.
  /// Uses Zeller's congruence variant.
  func dayOfWeek(year : Int, month : Int, day : Int) : Nat {
    // Adjust January and February to be months 13 and 14 of the previous year.
    let (y, m) = if (month < 3) { (year - 1, month + 12) } else { (year, month) };
    // Zeller's congruence (Gregorian): h = (q + floor(13(m+1)/5) + K + floor(K/4) + floor(J/4) - 2J) mod 7
    // where h: 0=Saturday, 1=Sunday, ..., 6=Friday. We convert to 0=Sunday.
    let q = day;
    let k = y % 100;
    let j = y / 100;
    let h = (q + (13 * (m + 1)) / 5 + k + k / 4 + j / 4 - 2 * j) % 7;
    // h: 0=Saturday, 1=Sunday, 2=Monday, ..., 6=Friday
    // Convert to: 0=Sunday, 1=Monday, ..., 6=Saturday
    let dow = (h + 6) % 7;
    Int.abs(dow)
  };

  /// Get nakshatra index (0-26) from sidereal longitude.
  func nakshatraIdx(lon : Float) : Nat {
    let sidereal = fmod(lon, 360.0);
    let nIdx = Float.floor(sidereal / (360.0 / 27.0)).toInt();
    Int.abs(nIdx) % 27
  };

  /// Get sign index (0-11) from sidereal longitude.
  func signIdx(lon : Float) : Nat {
    let s = Float.floor(fmod(lon, 360.0) / 30.0).toInt();
    Int.abs(s) % 12
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // GRAHA REMEDY
  // ═══════════════════════════════════════════════════════════════════════════

  /// Seed all 9 graha remedy records (Surya through Ketu).
  public func initGrahaRemedies(
    remedies : Map.Map<Text, Types.GrahaRemedyData>,
  ) : () {
    remedies.add("Surya", {
      graha = "Surya";
      role = "Soul, vitality, father, authority, health, willpower";
      strongGives = ["Confidence", "Leadership", "Good health", "Strong will", "Father's blessings", "Fame"];
      weakCauses = ["Low confidence", "Health issues", "Eye problems", "Conflict with father", "Lack of recognition"];
      remedies = ["Chant Aditya Hridayam daily at sunrise", "Offer water to Sun (Arghya) at dawn", "Recite Gayatri Mantra 108 times", "Wear red/orange on Sundays", "Donate wheat, jaggery, copper"];
      avoidList = ["Avoid ego and arrogance", "Avoid disrespecting father figures", "Avoid staying indoors at sunrise"];
      mantraSanskrit = "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः";
      mantraCount = 6000;
      daan = "Donate wheat, jaggery, copper, red flowers on Sundays";
      gemstone = "Ruby (Manikya)";
      gemstoneWarning = "Consult an astrologer before wearing. Ruby can increase aggression if worn by an unfavorable chart.";
    });
    remedies.add("Chandra", {
      graha = "Chandra";
      role = "Mind, emotions, mother, intuition, memory, fertility";
      strongGives = ["Emotional stability", "Strong intuition", "Good memory", "Mother's blessings", "Calm mind", "Creativity"];
      weakCauses = ["Emotional instability", "Mood swings", "Anxiety", "Conflict with mother", "Sleep disorders"];
      remedies = ["Chant Chandra Beej Mantra on Mondays", "Keep a fast on Mondays", "Offer milk to Shivalinga", "Wear white on Mondays", "Meditate by water bodies"];
      avoidList = ["Avoid harsh speech", "Avoid emotional decisions", "Avoid neglecting mother"];
      mantraSanskrit = "ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः";
      mantraCount = 11000;
      daan = "Donate rice, milk, silver, white flowers on Mondays";
      gemstone = "Pearl (Moti)";
      gemstoneWarning = "Pearl should not be worn with red coral or ruby without consultation. May cause lethargy if unsuitable.";
    });
    remedies.add("Mangal", {
      graha = "Mangal";
      role = "Energy, courage, action, brothers, property, anger";
      strongGives = ["Courage", "Energy", "Determination", "Property", "Brother's support", "Victory"];
      weakCauses = ["Anger issues", "Accidents", "Conflict with brothers", "Property disputes", "Laziness", "Blood disorders"];
      remedies = ["Chant Mangal Beej Mantra on Tuesdays", "Worship Hanuman on Tuesdays", "Recite Hanuman Chalisa", "Offer red flowers to Hanuman", "Donate red lentils (masoor dal)"];
      avoidList = ["Avoid anger and aggression", "Avoid arguments with brothers", "Avoid non-vegetarian food on Tuesdays"];
      mantraSanskrit = "ॐ क्रां क्रीं क्रौं सः भौमाय नमः";
      mantraCount = 10000;
      daan = "Donate red lentils, red cloth, copper, jaggery on Tuesdays";
      gemstone = "Red Coral (Moonga)";
      gemstoneWarning = "Coral should not be worn with emerald or pearl without consultation. May increase anger if unsuitable.";
    });
    remedies.add("Budh", {
      graha = "Budh";
      role = "Intelligence, communication, business, education, nervous system";
      strongGives = ["Intelligence", "Good communication", "Business success", "Education", "Wit", "Analytical ability"];
      weakCauses = ["Poor communication", "Speech defects", "Nervous disorders", "Learning difficulties", "Business losses"];
      remedies = ["Chant Budh Beej Mantra on Wednesdays", "Worship Vishnu on Wednesdays", "Recite Vishnu Sahasranama", "Wear green on Wednesdays", "Donate green gram (moong)"];
      avoidList = ["Avoid lying and deceit", "Avoid harsh criticism", "Avoid alcohol and tobacco"];
      mantraSanskrit = "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः";
      mantraCount = 9000;
      daan = "Donate green gram, green cloth, bronze, emerald-green items on Wednesdays";
      gemstone = "Emerald (Panna)";
      gemstoneWarning = "Emerald should not be worn with red coral or pearl without consultation. May cause nervousness if unsuitable.";
    });
    remedies.add("Guru", {
      graha = "Guru";
      role = "Wisdom, knowledge, spirituality, children, wealth, dharma, teacher";
      strongGives = ["Wisdom", "Knowledge", "Wealth", "Children", "Spiritual growth", "Teacher's grace", "Dharmic living"];
      weakCauses = ["Lack of wisdom", "Financial problems", "Child-related issues", "Loss of faith", "Disrespect to teachers"];
      remedies = ["Chant Guru Beej Mantra on Thursdays", "Worship Vishnu or Shiva on Thursdays", "Recite Guru Stotra", "Wear yellow on Thursdays", "Donate yellow items (chana dal, turmeric)"];
      avoidList = ["Avoid disrespecting teachers and elders", "Avoid meat and alcohol on Thursdays", "Avoid leather items"];
      mantraSanskrit = "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः";
      mantraCount = 16000;
      daan = "Donate chana dal, turmeric, yellow cloth, gold, yellow flowers on Thursdays";
      gemstone = "Yellow Sapphire (Pukhraj)";
      gemstoneWarning = "Yellow sapphire is generally beneficial but should be worn in gold on the index finger. Consult an astrologer for suitability.";
    });
    remedies.add("Shukra", {
      graha = "Shukra";
      role = "Love, beauty, luxury, marriage, art, pleasure, vehicles";
      strongGives = ["Love and romance", "Marital happiness", "Beauty", "Luxury", "Artistic talent", "Vehicles and comforts"];
      weakCauses = ["Marital discord", "Lack of luxury", "Relationship problems", "Loss of beauty", "Kidney issues"];
      remedies = ["Chant Shukra Beej Mantra on Fridays", "Worship Lakshmi on Fridays", "Recite Sri Sukta", "Wear white or pink on Fridays", "Donate white items (rice, milk, curd)"];
      avoidList = ["Avoid disrespecting women", "Avoid excessive luxury-seeking", "Avoid impure food on Fridays"];
      mantraSanskrit = "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः";
      mantraCount = 16000;
      daan = "Donate rice, milk, curd, white cloth, silver, white flowers on Fridays";
      gemstone = "Diamond (Heera) or White Sapphire";
      gemstoneWarning = "Diamond is a powerful stone. Should be worn only after astrological consultation. May cause relationship issues if unsuitable.";
    });
    remedies.add("Shani", {
      graha = "Shani";
      role = "Discipline, karma, justice, longevity, hard work, sorrow, delay";
      strongGives = ["Discipline", "Hard work", "Justice", "Longevity", "Spiritual wisdom through suffering", "Karmic balance"];
      weakCauses = ["Delays and obstacles", "Suffering", "Poverty", "Depression", "Joint pains", "Legal problems"];
      remedies = ["Chant Shani Beej Mantra on Saturdays", "Worship Hanuman on Saturdays", "Recite Hanuman Chalisa and Shani Chalisa", "Light a mustard oil lamp under a peepal tree on Saturday", "Donate black items (sesame seeds, black cloth, iron)"];
      avoidList = ["Avoid alcohol and non-veg on Saturdays", "Avoid disrespecting elders and workers", "Avoid buying black items on Saturdays"];
      mantraSanskrit = "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः";
      mantraCount = 23000;
      daan = "Donate sesame seeds, black cloth, iron, mustard oil, black gram on Saturdays";
      gemstone = "Blue Sapphire (Neelam)";
      gemstoneWarning = "Blue sapphire is the most powerful and potentially dangerous gemstone. Test for 3 days before wearing. Consult an expert astrologer. Can cause severe harm if unsuitable.";
    });
    remedies.add("Rahu", {
      graha = "Rahu";
      role = "Desire, ambition, foreign things, illusion, sudden gains/losses, obsession";
      strongGives = ["Ambition", "Foreign travel", "Sudden wealth", "Material success", "Innovation", "Political power"];
      weakCauses = ["Confusion", "Illusion", "Addiction", "Sudden losses", "Deception", "Mental unrest"];
      remedies = ["Chant Rahu Beej Mantra 18000 times", "Worship Goddess Durga or Kali", "Recite Durga Saptashati", "Donate blue/black items on Saturdays", "Feed birds and animals"];
      avoidList = ["Avoid deceit and manipulation", "Avoid intoxicants", "Avoid gambling and speculation"];
      mantraSanskrit = "ॐ रां रीं रौं सः राहवे नमः";
      mantraCount = 18000;
      daan = "Donate blue cloth, sesame seeds, iron, coconut, black gram on Saturdays";
      gemstone = "Hessonite (Gomed)";
      gemstoneWarning = "Hessonite should be worn in silver on Saturday. Consult an astrologer. May cause mental unrest if unsuitable.";
    });
    remedies.add("Ketu", {
      graha = "Ketu";
      role = "Spirituality, liberation (moksha), detachment, past life karma, intuition";
      strongGives = ["Spiritual wisdom", "Intuition", "Detachment", "Moksha", "Past-life knowledge", "Healing abilities"];
      weakCauses = ["Confusion", "Aimlessness", "Skin problems", "Unexplained fears", "Lack of direction"];
      remedies = ["Chant Ketu Beej Mantra 17000 times", "Worship Ganesha", "Recite Ganesh Atharvashirsha", "Donate multi-colored items on Tuesdays or Saturdays", "Feed dogs and cats"];
      avoidList = ["Avoid isolation and excessive detachment", "Avoid neglecting spiritual practice", "Avoid meat on Tuesdays"];
      mantraSanskrit = "ॐ कें केतवे नमः";
      mantraCount = 17000;
      daan = "Donate multi-colored cloth, sesame seeds, iron, lentils on Tuesdays or Saturdays";
      gemstone = "Cat's Eye (Lehsunia)";
      gemstoneWarning = "Cat's eye is a powerful karmic stone. Should be worn only after astrological consultation. May cause confusion if unsuitable.";
    });
  };

  /// Return full remedy data for a named graha.
  public func getGrahaRemedy(
    remedies : Map.Map<Text, Types.GrahaRemedyData>,
    graha : Text,
  ) : ?Types.GrahaRemedyData {
    remedies.get(graha)
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // PANCHAANG (full Hindu Calendar — 9 limbs)
  // ═══════════════════════════════════════════════════════════════════════════

  /// Returns the full Panchaang (9 limbs) for the requested date.
  /// dateStr: YYYY-MM-DD format. Calculates tithi, paksha, masa, ritu, vaar,
  /// nakshatra, yoga, karana, and moonSign using Vedic lunar calendar formulas.
  public func getPanchaang(dateStr : Text) : Types.PanchangData {
    let (year, month, day) = parseDate(dateStr);

    // Compute Julian Day for noon of the requested date.
    let jd = julianDay(year, month, day);
    let ayan = ayanamsa(jd);

    // Sidereal longitudes of Sun and Moon.
    let sunTrop = sunLongitude(jd);
    let moonTrop = moonLongitude(jd);
    let sunS = siderealLong(sunTrop, ayan);
    let moonS = siderealLong(moonTrop, ayan);

    // ─── Tithi & Paksha ──────────────────────────────────────────────────────
    // Tithi = (Moon longitude - Sun longitude) / 12 degrees.
    // 30 tithis in a lunar month: 15 Shukla (waxing) + 15 Krishna (waning).
    let diff = fmod(moonS - sunS + 360.0, 360.0);
    let tithiFloat = diff / 12.0; // 0..30
    let tithiNumberRaw = Float.floor(tithiFloat).toInt(); // 0..29
    let tithiNumber = Int.abs(tithiNumberRaw) + 1; // 1..30
    let tithiIdx = (tithiNumberRaw + 30) % 30; // 0..29 index into tithiNames
    let tithiName = tithiNames[Int.abs(tithiIdx)];
    let paksha = if (tithiNumber <= 15) { "Shukla" } else { "Krishna" };

    // ─── Nakshatra ───────────────────────────────────────────────────────────
    let nIdx = nakshatraIdx(moonS);
    let nakshatra = nakshatraNames[nIdx];

    // ─── Yoga ────────────────────────────────────────────────────────────────
    // Yoga = (Sun longitude + Moon longitude) / (360/27) = (Sun + Moon) / 13.333
    let yogaSum = fmod(sunS + moonS, 360.0);
    let yogaIdxRaw = Float.floor(yogaSum / (360.0 / 27.0)).toInt();
    let yogaIdx = Int.abs(yogaIdxRaw) % 27;
    let yoga = yogaNames[yogaIdx];

    // ─── Karana ──────────────────────────────────────────────────────────────
    // Each tithi is divided into 2 karanas. There are 60 karanas in a lunar month.
    // 7 movable karanas repeat 8 times (56), plus 4 fixed = 60.
    let karanaIdxRaw = Float.floor(tithiFloat * 2.0).toInt(); // 0..59
    let karanaIdx = Int.abs(karanaIdxRaw) % 60;
    let karana = if (karanaIdx < 56) {
      movableKaranaNames[karanaIdx % 7]
    } else {
      fixedKaranaNames[karanaIdx - 56]
    };

    // ─── Vaar (weekday) ──────────────────────────────────────────────────────
    let dow = dayOfWeek(year, month, day);
    let vaar = vaarNames[dow];

    // ─── Masa (lunar month) ──────────────────────────────────────────────────
    // The lunar month is named after the nakshatra of the full moon (Purnima).
    // Approximate: the masa is determined by the Sun's position.
    // When the Sun enters Aries (sidereal), the month is Chaitra.
    // The lunar month starts on the Shukla Pratipada following the new moon
    // that occurs while the Sun is in a given sign.
    // Approximation: masa index = sign of Sun at the time of the last new moon
    // before this date. We approximate by using the Sun's sign directly.
    // Sun sign 0 (Aries) → Chaitra (index 0), sign 1 (Taurus) → Vaishakha, etc.
    let sunSignIdx = signIdx(sunS);
    // Adjust: Chaitra starts when Sun is in Aries (Meena→Mesha transition).
    // The lunar month is named by the nakshatra of the full moon, which is
    // roughly opposite the Sun's position at full moon.
    // Approximate masa = (sunSignIdx + 6) % 12, mapping Aries→Chaitra.
    let masaIdx = (sunSignIdx + 6) % 12;
    let masa = masaNames[masaIdx];

    // ─── Ritu (season) ───────────────────────────────────────────────────────
    // Each ritu spans 2 lunar months. Vasanta = Chaitra + Vaishakha (masa 0,1).
    let rituIdx = masaIdx / 2;
    let ritu = rituNames[rituIdx];

    // ─── Moon Sign ───────────────────────────────────────────────────────────
    let mSignIdx = signIdx(moonS);
    let moonSign = rashiNames[mSignIdx];

    // ─── Description (guidance note) ─────────────────────────────────────────
    let description = "Tithi: " # tithiName # " (" # paksha # " Paksha), " #
      nakshatra # " Nakshatra, " # yoga # " Yoga, " # karana # " Karana. " #
      masa # " Masa, " # ritu # " Ritu, " # vaar # ". " #
      "Moon is in " # moonSign # ". " #
      "This day carries the combined energies of these Panchaang limbs. " #
      "Perform your daily saadhna, japa, and dharmic duties with awareness of these cosmic rhythms.";

    {
      date = dateStr;
      tithi = tithiName;
      tithiNumber = tithiNumber;
      paksha = paksha;
      masa = masa;
      ritu = ritu;
      vaar = vaar;
      nakshatra = nakshatra;
      yoga = yoga;
      karana = karana;
      moonSign = moonSign;
      description = description;
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSIT CALENDAR
  // ═══════════════════════════════════════════════════════════════════════════

  /// Seed pre-computed transit events for the current year.
  /// Events are static and pre-computed for the year 2026.
  public func initTransitEvents(
    events : List.List<Types.TransitEvent>,
  ) : () {
    events.add({
      planet = "Shani (Saturn)";
      eventType = "Transit";
      description = "Saturn transits into Pisces (Meena Rashi). A major transit affecting all moon signs. Brings discipline, hard work, and karmic lessons related to spirituality and detachment.";
      startDate = "2026-03-29";
      endDate = "2029-06-03";
      remedy = "Chant Shani Beej Mantra on Saturdays. Worship Hanuman. Donate sesame seeds and black cloth. Light a mustard oil lamp under a peepal tree.";
      colorCode = "#1a237e";
    });
    events.add({
      planet = "Guru (Jupiter)";
      eventType = "Transit";
      description = "Jupiter transits into Gemini (Mithuna Rashi). Brings expansion in communication, education, and business. Favorable for learning, teaching, and intellectual pursuits.";
      startDate = "2026-05-14";
      endDate = "2027-05-21";
      remedy = "Chant Guru Beej Mantra on Thursdays. Worship Vishnu. Donate chana dal and yellow items. Recite Vishnu Sahasranama.";
      colorCode = "#fbc02d";
    });
    events.add({
      planet = "Rahu";
      eventType = "Transit";
      description = "Rahu transits into Aquarius (Kumbha Rashi). Brings ambition, innovation, and foreign connections. May cause illusion and confusion in social matters.";
      startDate = "2026-11-08";
      endDate = "2028-05-26";
      remedy = "Chant Rahu Beej Mantra. Worship Goddess Durga. Donate blue items and coconut. Feed birds and animals.";
      colorCode = "#37474f";
    });
    events.add({
      planet = "Ketu";
      eventType = "Transit";
      description = "Ketu transits into Leo (Simha Rashi). Brings spiritual detachment, intuition, and past-life karma to the surface. May cause confusion in leadership matters.";
      startDate = "2026-11-08";
      endDate = "2028-05-26";
      remedy = "Chant Ketu Beej Mantra. Worship Ganesha. Donate multi-colored items. Feed dogs and cats.";
      colorCode = "#6d4c41";
    });
    events.add({
      planet = "Mangal (Mars)";
      eventType = "Retrograde";
      description = "Mars retrograde in Cancer (Karka Rashi). Energy turns inward. Avoid new ventures, conflicts, and impulsive actions. Reflect on past actions and redirect energy.";
      startDate = "2026-12-20";
      endDate = "2027-02-23";
      remedy = "Chant Mangal Beej Mantra on Tuesdays. Worship Hanuman. Recite Hanuman Chalisa. Avoid anger and aggression.";
      colorCode = "#c62828";
    });
    events.add({
      planet = "Shukra (Venus)";
      eventType = "Retrograde";
      description = "Venus retrograde in Capricorn (Makara Rashi). Relationships and finances come under review. Reconnect with loved ones and review financial plans. Avoid major purchases.";
      startDate = "2026-03-02";
      endDate = "2026-04-13";
      remedy = "Chant Shukra Beej Mantra on Fridays. Worship Lakshmi. Recite Sri Sukta. Donate white items.";
      colorCode = "#e91e63";
    });
    events.add({
      planet = "Surya (Sun)";
      eventType = "Sankranti";
      description = "Sun enters Capricorn (Makara Sankranti). Marks the beginning of Uttarayan — the northward journey of the Sun. Highly auspicious. Celebrated as Makar Sankranti across India.";
      startDate = "2026-01-14";
      endDate = "2026-01-14";
      remedy = "Take holy dip at sunrise. Offer water to Sun (Arghya). Chant Aditya Hridayam. Donate sesame (til) and jaggery (gud).";
      colorCode = "#ff6f00";
    });
    events.add({
      planet = "Surya (Sun)";
      eventType = "Sankranti";
      description = "Sun enters Aries (Mesha Sankranti). Marks the Vedic New Year in many traditions. The beginning of the solar year and the month of Vaishakha.";
      startDate = "2026-04-14";
      endDate = "2026-04-14";
      remedy = "Offer water to Sun at sunrise. Chant Gayatri Mantra 108 times. Begin new ventures. Donate wheat and jaggery.";
      colorCode = "#ff6f00";
    });
    events.add({
      planet = "Chandra (Moon)";
      eventType = "Eclipse";
      description = "Lunar Eclipse (Chandra Grahan). Visible in parts of Asia and Australia. Avoid eating during the eclipse. Take a bath after the eclipse. Chant mantras throughout.";
      startDate = "2026-03-03";
      endDate = "2026-03-03";
      remedy = "Chant Om Namah Shivaya during the eclipse. Take a bath before and after. Avoid eating during the eclipse. Donate food after the eclipse.";
      colorCode = "#5e35b1";
    });
    events.add({
      planet = "Surya (Sun)";
      eventType = "Eclipse";
      description = "Solar Eclipse (Surya Grahan). Annular eclipse visible in parts of Africa and South America. Follow eclipse protocols — avoid eating, chant mantras, bathe after.";
      startDate = "2026-02-17";
      endDate = "2026-02-17";
      remedy = "Chant Gayatri Mantra during the eclipse. Take a bath before and after. Avoid eating during the eclipse. Donate food and clothing after.";
      colorCode = "#ff6f00";
    });
  };

  /// Return all transit events for a given year (e.g. 2026).
  /// Filters events whose startDate year matches the requested year.
  public func getTransitCalendar(
    events : List.List<Types.TransitEvent>,
    year : Nat,
  ) : [Types.TransitEvent] {
    let yearStr = year.toText();
    events.filter(func(e : Types.TransitEvent) : Bool {
      // Check if the startDate begins with the year string.
      e.startDate.startsWith(#text yearStr)
    }).toArray()
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // REMEDY REMINDER
  // ═══════════════════════════════════════════════════════════════════════════

  /// Save or update a user's daily remedy reminder preference.
  public func saveReminder(
    reminders : Map.Map<Text, Types.RemedyReminder>,
    userId : Text,
    graha : Text,
    time : Text,
  ) : () {
    reminders.add(userId, {
      graha = graha;
      reminderTime = time;
      isActive = true;
    })
  };

  /// Return the user's saved remedy reminder, or null if not set.
  public func getReminder(
    reminders : Map.Map<Text, Types.RemedyReminder>,
    userId : Text,
  ) : ?Types.RemedyReminder {
    reminders.get(userId)
  };
};
