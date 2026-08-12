import Types    "../types/user-profile";
import Map      "mo:core/Map";
import Time     "mo:core/Time";
import Array    "mo:core/Array";
import Float    "mo:core/Float";
import Int      "mo:core/Int";
import Nat      "mo:core/Nat";

/// Domain logic for user profiles, kundli calculation, and newsletter subscriptions.
/// All functions are stateless — state is injected by main.mo via mixins.
module {

  // ═══════════════════════════════════════════════════════════════════════════
  // INTERNAL HELPERS
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

  // 27 Nakshatra names (0-indexed, Ashwini = 0)
  let nakshatraNames : [Text] = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ];

  // 12 Rashi names (1-indexed, Aries = 1)
  let rashiNames : [Text] = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  // Nakshatra lords in Vimshottari order (0 = Ashwini/Ketu, repeating cycle of 9)
  let nakshatraLords : [Text] = [
    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu",
    "Jupiter", "Saturn", "Mercury"
  ];

  // Vimshottari dasha durations in years (matches nakshatra lord cycle)
  let dashaDurations : [Float] = [
    7.0,  // Ketu
    20.0, // Venus
    6.0,  // Sun
    10.0, // Moon
    7.0,  // Mars
    18.0, // Rahu
    16.0, // Jupiter
    19.0, // Saturn
    17.0  // Mercury
  ];

  // Total Vimshottari cycle = 120 years
  let totalDashaCycle : Float = 120.0;

  // Ruling planet of each sign (1-indexed, sign 1 = Aries, lord = Mars)
  let signRulers : [Text] = [
    "Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury",
    "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"
  ];

  /// Get sign (1-12) from ecliptic longitude in degrees
  func signFromLong(lon : Float) : Nat {
    let s = Float.floor(fmod(lon, 360.0) / 30.0).toInt();
    let n : Int = s + 1;
    n.toNat()
  };

  /// Get nakshatra index (0-26) from sidereal longitude
  func nakshatraIdx(lon : Float) : Nat {
    let sidereal = fmod(lon, 360.0);
    // each nakshatra = 360/27 = 13.333... degrees
    let nIdx = Float.floor(sidereal / (360.0 / 27.0)).toInt();
    nIdx.toNat()
  };

  /// Get nakshatra lord from nakshatra index
  func nakshatraLordFromIdx(idx : Nat) : Text {
    nakshatraLords[idx % 9]
  };

  /// Compute Julian Day Number from Gregorian date + time
  func julianDay(year : Int, month : Int, day : Int, hour : Float) : Float {
    let y = if (month <= 2) { year - 1 } else { year };
    let m = if (month <= 2) { month + 12 } else { month };
    let a = Float.floor(intToF(y) / 100.0);
    let b = 2.0 - a + Float.floor(a / 4.0);
    let jd = Float.floor(365.25 * (intToF(y) + 4716.0))
           + Float.floor(30.6001 * (intToF(m) + 1.0))
           + intToF(day) + hour / 24.0 + b - 1524.5;
    jd
  };

  /// Lahiri Ayanamsa for a given Julian Day
  /// Approximate: 23.85° + (JD - J2000) * 0.0136 / 365.25
  func ayanamsa(jd : Float) : Float {
    let j2000 : Float = 2451545.0; // JD for Jan 1.5, 2000
    let years = (jd - j2000) / 365.25;
    23.85 + years * 0.0136
  };

  /// Sun's approximate ecliptic longitude (degrees) at a JD
  func sunLongitude(jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    let L = fmod(280.460 + 0.9856474 * n, 360.0);
    let g = degToRad(fmod(357.528 + 0.9856003 * n, 360.0));
    let lambda = L + 1.915 * Float.sin(g) + 0.020 * Float.sin(2.0 * g);
    fmod(lambda, 360.0)
  };

  /// Moon's approximate ecliptic longitude (degrees) at a JD
  func moonLongitude(jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    // Mean longitude
    let lp = fmod(218.316 + 13.176396 * n, 360.0);
    // Mean anomaly
    let m = degToRad(fmod(134.963 + 13.064993 * n, 360.0));
    // Mean argument of latitude
    let f = degToRad(fmod(93.272 + 13.229350 * n, 360.0));
    let lambda = lp + 6.289 * Float.sin(m) - 1.274 * Float.sin(2.0 * f - m)
                    + 0.658 * Float.sin(2.0 * f) - 0.186 * Float.sin(degToRad(fmod(357.528 + 0.9856003 * n, 360.0)))
                    - 0.059 * Float.sin(2.0 * m) - 0.057 * Float.sin(2.0 * f - 2.0 * m);
    fmod(lambda, 360.0)
  };

  /// Approximate planet longitudes using mean motion (degrees/day from J2000)
  /// Returns tropical longitude; call siderealLong() to convert
  func planetLongitude(planet : Text, jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    // Mean longitude L0 and daily motion in degrees
    // Source: simplified VSOP87 mean elements
    let (l0, dm) : (Float, Float) = switch (planet) {
      case "Mars"    (355.45, 0.5240207);
      case "Mercury" (252.25, 4.0923344);
      case "Jupiter" ( 34.40, 0.0830853);
      case "Venus"   (181.98, 1.6021303);
      case "Saturn"  ( 50.07, 0.0334442);
      case _         (  0.0,  0.0);
    };
    fmod(l0 + dm * n, 360.0)
  };

  /// Rahu's mean longitude (lunar ascending node)
  func rahuLongitude(jd : Float) : Float {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    // Rahu moves retrograde; mean motion ≈ −0.05295°/day
    fmod(125.045 - 0.0529538 * n, 360.0)
  };

  /// Convert tropical longitude to sidereal (subtract ayanamsa)
  func siderealLong(tropical : Float, ayan : Float) : Float {
    fmod(tropical - ayan + 360.0, 360.0)
  };

  /// Compute Navamsa (D9) sign from sidereal longitude
  /// Multiply by 9 and find the sign
  func navamsaSign(siderealLon : Float) : Nat {
    let raw = fmod(siderealLon * 9.0, 360.0);
    signFromLong(raw)
  };

  /// Lagna (Ascendant) calculation using RAMC + latitude
  /// Uses a simplified formula: RAMC = GMST + longitude_east
  /// Ascendant ≈ RAMC + correction(latitude)
  func lagnaSign(jd : Float, latitude : Float, longitude : Float, ayan : Float) : (Nat, Float) {
    let j2000 : Float = 2451545.0;
    let n = jd - j2000;
    // Greenwich Mean Sidereal Time in degrees
    let gmst = fmod(280.46061837 + 360.98564736629 * n, 360.0);
    // Local Sidereal Time
    let lst = fmod(gmst + longitude, 360.0);
    // Obliquity of ecliptic (approx)
    let eps = degToRad(23.439 - 0.0000004 * n);
    let lstRad = degToRad(lst);
    let latRad = degToRad(latitude);
    // Ascendant formula: tan(Asc) = -cos(RAMC) / (sin(eps)*tan(lat) + cos(eps)*sin(RAMC))
    let ascRad = Float.arctan2(
      -1.0 * Float.cos(lstRad),
      (Float.sin(eps) * Float.tan(latRad) + Float.cos(eps) * Float.sin(lstRad))
    );
    var ascDeg = radToDeg(ascRad);
    // Adjust to correct quadrant
    if (Float.cos(lstRad) < 0.0) {
      ascDeg := ascDeg + 180.0
    } else {
      if (Float.sin(eps) * Float.tan(latRad) + Float.cos(eps) * Float.sin(lstRad) < 0.0) {
        ascDeg := ascDeg + 360.0
      }
    };
    // Convert to sidereal
    let siderealAsc = siderealLong(fmod(ascDeg + 360.0, 360.0), ayan);
    (signFromLong(siderealAsc), siderealAsc)
  };

  /// House from lagna using equal-house system (each house = 30°)
  func houseFromLagna(planetSiderealLon : Float, lagnaSiderealLon : Float) : Nat {
    let diff = fmod(planetSiderealLon - lagnaSiderealLon + 360.0, 360.0);
    let h = Float.floor(diff / 30.0).toInt() + 1;
    h.toNat()
  };

  /// Build a PlanetPlacement record
  func makePlacement(
    name       : Text,
    siderLon   : Float,
    lagnaSider : Float,
    retro      : Bool,
  ) : Types.PlanetPlacement {
    let sign    = signFromLong(siderLon);
    let house   = houseFromLagna(siderLon, lagnaSider);
    let nIdx    = nakshatraIdx(siderLon);
    let nakName = nakshatraNames[nIdx];
    let nLord   = nakshatraLordFromIdx(nIdx);
    let degInSign = fmod(siderLon, 30.0);
    {
      planet        = name;
      sign          = sign;
      house         = house;
      nakshatra     = nakName;
      nakshatraLord = nLord;
      degree        = degInSign;
      retrograde    = retro;
    }
  };

  /// Nanoseconds → integer seconds
  func nsToSec(ns : Int) : Int { ns / 1_000_000_000 };

  /// Int seconds → Float days since J2000 (to get JD: add 2451545.0 + offset)
  /// Unix epoch (Jan 1, 1970) as JD = 2440587.5
  func unixSecToJD(sec : Int) : Float {
    intToF(sec) / 86400.0 + 2440587.5
  };

  /// Compute Vimshottari Dasha starting from birth JD using Moon nakshatra
  /// Returns (mahadasha, antardasha, pratyantardasha, nextDashas[3])
  func computeDashas(
    moonSiderLon : Float,
    birthJD      : Float,
    nowNs        : Int,
  ) : (Types.DashaEntry, Types.DashaEntry, Types.DashaEntry, [Types.DashaEntry]) {

    // Fraction elapsed within current nakshatra
    let nIdx     = nakshatraIdx(moonSiderLon);
    let naksLen  = 360.0 / 27.0; // degrees per nakshatra = 13.3333°
    let degInNak = fmod(moonSiderLon, naksLen);
    let fracDone = degInNak / naksLen; // 0..1

    // Lord index in the 9-lord cycle
    let lordIdx  = nIdx % 9;
    let birthMs  = (birthJD - 2440587.5) * 86400.0 * 1000.0; // birth in epoch ms
    let nowMs    = intToF(nsToSec(nowNs)) * 1000.0;

    // First dasha lord and remaining duration
    let firstDurYr  = dashaDurations[lordIdx];
    let elapsed     = fracDone * firstDurYr; // years elapsed in first dasha at birth
    let remaining   = firstDurYr - elapsed;  // remaining years of first dasha

    // Build sequence of dashas: start from the first dasha (partially elapsed)
    // We generate enough dashas to find current maha+antar+pratyantar
    var dashaSeq : [var (Text, Float, Float)] = Array.tabulate(
      20,
      func(i) {
        let idx = (lordIdx + i) % 9;
        let dur = dashaDurations[idx];
        let actualDur = if (i == 0) { remaining } else { dur };
        (nakshatraLords[idx], actualDur, 0.0)
      }
    ).toVarArray();

    // Compute absolute start/end times (in ms since epoch)
    var cursor = birthMs - elapsed * 365.25 * 86400.0 * 1000.0;
    for (i in Nat.range(0, 20)) {
      let (lord, dur, _) = dashaSeq[i];
      let startMs = cursor;
      let endMs   = cursor + dur * 365.25 * 86400.0 * 1000.0;
      dashaSeq[i] := (lord, dur, startMs);
      cursor := endMs;
    };

    // Find current mahadasha index (where nowMs falls)
    var mahaIdx = 0;
    label findMaha for (i in Nat.range(0, 20)) {
      let (_, dur, startMs) = dashaSeq[i];
      let endMs = startMs + dur * 365.25 * 86400.0 * 1000.0;
      if (nowMs >= startMs and nowMs < endMs) {
        mahaIdx := i;
        break findMaha;
      };
    };

    // Build DashaEntry from (lord, dur, startMs)
    func makeDasha(lord : Text, dur : Float, startMs : Float) : Types.DashaEntry {
      {
        lord          = lord;
        startDate     = startMs.toInt();
        endDate       = (startMs + dur * 365.25 * 86400.0 * 1000.0).toInt();
        durationYears = dur;
      }
    };

    let (mahaLord, mahaDur, mahaStart) = dashaSeq[mahaIdx];
    let mahadasha = makeDasha(mahaLord, mahaDur, mahaStart);

    // Antardasha within mahadasha: cycle of 9 lords, each proportional share
    let antarCursorStart = mahaStart;
    var antarSeq : [var (Text, Float, Float)] = Array.tabulate(
      9,
      func(j) {
        let lordI = (mahaIdx + j) % 9; // start antar from mahadasha lord
        let antarDur = (dashaDurations[lordI] / totalDashaCycle) * mahaDur;
        (nakshatraLords[lordI], antarDur, 0.0)
      }
    ).toVarArray();

    var antarCursor = antarCursorStart;
    for (j in Nat.range(0, 9)) {
      let (l, d, _) = antarSeq[j];
      antarSeq[j] := (l, d, antarCursor);
      antarCursor := antarCursor + d * 365.25 * 86400.0 * 1000.0;
    };

    var antarIdx = 0;
    label findAntar for (j in Nat.range(0, 9)) {
      let (_, d, s) = antarSeq[j];
      let e = s + d * 365.25 * 86400.0 * 1000.0;
      if (nowMs >= s and nowMs < e) {
        antarIdx := j;
        break findAntar;
      };
    };

    let (antarLord, antarDur, antarStart) = antarSeq[antarIdx];
    let antardasha = makeDasha(antarLord, antarDur, antarStart);

    // Pratyantardasha within antardasha
    var pratySeq : [var (Text, Float, Float)] = Array.tabulate(
      9,
      func(k) {
        let lordI = (antarIdx + k) % 9;
        let pratyDur = (dashaDurations[lordI] / totalDashaCycle) * antarDur;
        (nakshatraLords[lordI], pratyDur, 0.0)
      }
    ).toVarArray();

    var pratyCursor = antarStart;
    for (k in Nat.range(0, 9)) {
      let (l, d, _) = pratySeq[k];
      pratySeq[k] := (l, d, pratyCursor);
      pratyCursor := pratyCursor + d * 365.25 * 86400.0 * 1000.0;
    };

    var pratyIdx = 0;
    label findPraty for (k in Nat.range(0, 9)) {
      let (_, d, s) = pratySeq[k];
      let e = s + d * 365.25 * 86400.0 * 1000.0;
      if (nowMs >= s and nowMs < e) {
        pratyIdx := k;
        break findPraty;
      };
    };

    let (pratyLord, pratyDur, pratyStart) = pratySeq[pratyIdx];
    let pratyantarDasha = makeDasha(pratyLord, pratyDur, pratyStart);

    // Next 3 major dashas after current mahadasha
    let nextDashas = Array.tabulate(
      3,
      func(i) {
        let nextI = mahaIdx + 1 + i;
        if (nextI >= 20) {
          { lord = ""; startDate = 0; endDate = 0; durationYears = 0.0 }
        } else {
          let (l, d, s) = dashaSeq[nextI];
          makeDasha(l, d, s)
        }
      }
    );

    (mahadasha, antardasha, pratyantarDasha, nextDashas)
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // KUNDLI CALCULATION (public)
  // ═══════════════════════════════════════════════════════════════════════════

  /// Calculate complete Vedic kundli from a user profile.
  /// Pure algorithmic — no external calls, no randomness.
  public func calculateKundli(
    profile   : Types.UserProfile,
    profileId : Principal,
  ) : Types.KundliData {
    let dob  = profile.dateOfBirth;
    let tob  = profile.timeOfBirth;
    let lat  = profile.latitude;
    let lon  = profile.longitude;

    // ── Build JD ───────────────────────────────────────────────────────────
    let hourDecimal = tob.hour.toFloat() + tob.minute.toFloat() / 60.0;
    // Adjust hour for UTC: approximate IST = UTC+5:30 for default; use lon-based offset
    let utcHour = hourDecimal - lon / 15.0; // rough local-to-UTC
    let jd = julianDay(
      dob.year.toInt(),
      dob.month.toInt(),
      dob.day.toInt(),
      utcHour
    );

    let ayan = ayanamsa(jd);

    // ── Tropical longitudes ────────────────────────────────────────────────
    let sunTrop  = sunLongitude(jd);
    let moonTrop = moonLongitude(jd);
    let marsTrop = planetLongitude("Mars", jd);
    let mercTrop = planetLongitude("Mercury", jd);
    let jupTrop  = planetLongitude("Jupiter", jd);
    let venTrop  = planetLongitude("Venus", jd);
    let satTrop  = planetLongitude("Saturn", jd);
    let rahuTrop = rahuLongitude(jd);
    let ketuTrop = fmod(rahuTrop + 180.0, 360.0);

    // ── Sidereal longitudes ────────────────────────────────────────────────
    let sunS  = siderealLong(sunTrop,  ayan);
    let moonS = siderealLong(moonTrop, ayan);
    let marsS = siderealLong(marsTrop, ayan);
    let mercS = siderealLong(mercTrop, ayan);
    let jupS  = siderealLong(jupTrop,  ayan);
    let venS  = siderealLong(venTrop,  ayan);
    let satS  = siderealLong(satTrop,  ayan);
    let rahuS = siderealLong(rahuTrop, ayan);
    let ketuS = siderealLong(ketuTrop, ayan);

    // ── Lagna ──────────────────────────────────────────────────────────────
    let (lagnaSignNum, lagnaLon) = lagnaSign(jd, lat, lon, ayan);
    let lagnaSignIdx = if (lagnaSignNum == 0) { 0 } else { lagnaSignNum - 1 };
    let lagnaRashiName = rashiNames[lagnaSignIdx];
    let rulingPlanet   = signRulers[lagnaSignIdx];

    // Find ruling planet glyph
    let rpGlyph = switch (rulingPlanet) {
      case "Sun"     "☀";
      case "Moon"    "☽";
      case "Mars"    "♂";
      case "Mercury" "☿";
      case "Jupiter" "♃";
      case "Venus"   "♀";
      case "Saturn"  "♄";
      case _         "✦"
    };

    // ── Planet placements ──────────────────────────────────────────────────
    let planets : [Types.PlanetPlacement] = [
      makePlacement("Sun",     sunS,  lagnaLon, false),
      makePlacement("Moon",    moonS, lagnaLon, false),
      makePlacement("Mars",    marsS, lagnaLon, false),
      makePlacement("Mercury", mercS, lagnaLon, false),
      makePlacement("Jupiter", jupS,  lagnaLon, false),
      makePlacement("Venus",   venS,  lagnaLon, false),
      makePlacement("Saturn",  satS,  lagnaLon, false),
      makePlacement("Rahu",    rahuS, lagnaLon, true),
      makePlacement("Ketu",    ketuS, lagnaLon, true),
    ];

    // ── Navamsa (D9) ───────────────────────────────────────────────────────
    let navamsaLagna = navamsaSign(lagnaLon);
    let navamsaLagnaLon = (lagnaSignNum - 1).toFloat() * 40.0; // approx D9 lagna lon
    let navamsaPlanets : [Types.PlanetPlacement] = [
      makePlacement("Sun",     (navamsaSign(sunS)  - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Moon",    (navamsaSign(moonS) - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Mars",    (navamsaSign(marsS) - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Mercury", (navamsaSign(mercS) - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Jupiter", (navamsaSign(jupS)  - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Venus",   (navamsaSign(venS)  - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Saturn",  (navamsaSign(satS)  - 1).toFloat() * 30.0, navamsaLagnaLon, false),
      makePlacement("Rahu",    (navamsaSign(rahuS) - 1).toFloat() * 30.0, navamsaLagnaLon, true),
      makePlacement("Ketu",    (navamsaSign(ketuS) - 1).toFloat() * 30.0, navamsaLagnaLon, true),
    ];

    // ── Dashas ─────────────────────────────────────────────────────────────
    let nowNs = Time.now();
    let (mahadasha, antardasha, pratyantarDasha, nextDashas) =
      computeDashas(moonS, jd, nowNs);

    {
      profileId         = profileId;
      lagnaSign         = lagnaSignNum;
      lagnaRashi        = lagnaRashiName;
      rulingPlanet      = rulingPlanet;
      rulingPlanetGlyph = rpGlyph;
      planets           = planets;
      mahadasha         = mahadasha;
      antardasha        = antardasha;
      pratyantarDasha   = pratyantarDasha;
      nextDashas        = nextDashas;
      navamsaLagnaSign  = navamsaLagna;
      navamsaPlanets    = navamsaPlanets;
      calculatedAt      = nowNs;
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // USER PROFILE
  // ═══════════════════════════════════════════════════════════════════════════

  /// Save (insert or update) a user profile keyed by Principal.
  public func saveProfile(
    profiles : Map.Map<Principal, Types.UserProfile>,
    caller   : Principal,
    input    : Types.UserProfileInput,
  ) : () {
    let now = Time.now();
    let existing = profiles.get(caller);
    let createdAt = switch (existing) {
      case (?p) { p.createdAt };
      case null { now };
    };
    let profile : Types.UserProfile = {
      id              = caller;
      fullName        = input.fullName;
      dateOfBirth     = input.dateOfBirth;
      timeOfBirth     = input.timeOfBirth;
      placeOfBirth    = input.placeOfBirth;
      latitude        = input.latitude;
      longitude       = input.longitude;
      timezone        = input.timezone;
      email           = input.email;
      phone           = input.phone;
      newsletterOptIn = input.newsletterOptIn;
      createdAt       = createdAt;
      updatedAt       = now;
    };
    profiles.add(caller, profile);
  };

  /// Retrieve the profile for a given caller. Returns null if not found.
  public func getProfile(
    profiles : Map.Map<Principal, Types.UserProfile>,
    caller   : Principal,
  ) : ?Types.UserProfile {
    profiles.get(caller)
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // KUNDLI DATA
  // ═══════════════════════════════════════════════════════════════════════════

  /// Persist computed kundli data for a user.
  public func saveKundli(
    kundlis : Map.Map<Principal, Types.KundliData>,
    caller  : Principal,
    data    : Types.KundliData,
  ) : () {
    kundlis.add(caller, data);
  };

  /// Retrieve stored kundli for a given caller. Returns null if not yet computed.
  public func getKundli(
    kundlis : Map.Map<Principal, Types.KundliData>,
    caller  : Principal,
  ) : ?Types.KundliData {
    kundlis.get(caller)
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // NEWSLETTER SUBSCRIPTIONS
  // ═══════════════════════════════════════════════════════════════════════════

  /// Add or reactivate a subscriber entry keyed by email.
  public func subscribe(
    subscribers : Map.Map<Text, Types.EmailSubscriber>,
    email       : Text,
    name        : Text,
  ) : () {
    let now = Time.now();
    let existing = subscribers.get(email);
    let subscribedAt = switch (existing) {
      case (?s) { s.subscribedAt };
      case null { now };
    };
    subscribers.add(email, {
      email        = email;
      name         = name;
      subscribedAt = subscribedAt;
      active       = true;
    });
  };

  /// Deactivate a subscriber (soft unsubscribe — keeps record).
  public func unsubscribe(
    subscribers : Map.Map<Text, Types.EmailSubscriber>,
    email       : Text,
  ) : () {
    switch (subscribers.get(email)) {
      case (?s) {
        subscribers.add(email, { s with active = false });
      };
      case null {};
    };
  };

  /// Return all subscriber records as an immutable array.
  public func listSubscribers(
    subscribers : Map.Map<Text, Types.EmailSubscriber>,
  ) : [Types.EmailSubscriber] {
    subscribers.values().toArray()
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // ADMIN CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return the current admin config.
  public func getConfig(
    config : Types.AdminConfig,
  ) : Types.AdminConfig {
    config
  };

  /// Replace admin config with new values.
  public func updateConfig(
    configRef : { var value : Types.AdminConfig },
    input     : Types.AdminConfigInput,
  ) : () {
    configRef.value := {
      senderEmail       = input.senderEmail;
      senderName        = input.senderName;
      newsletterEnabled = input.newsletterEnabled;
      appVersion        = input.appVersion;
    };
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // FESTIVAL DATA
  // ═══════════════════════════════════════════════════════════════════════════

  /// Major Hindu festivals with approximate Gregorian month/day and Vedic info.
  public type FestivalInfo = {
    name         : Text;
    approxMonth  : Nat;   // 1-12
    approxDay    : Nat;
    deity        : Text;
    vedaRef      : Text;
    rituals      : Text;
    mantra       : Text;
    story        : Text;
  };

  public let festivals : [FestivalInfo] = [
    {
      name        = "Makar Sankranti";
      approxMonth = 1; approxDay = 14;
      deity       = "Surya Dev";
      vedaRef     = "Rig Veda 1.50 — Hymn to Surya";
      rituals     = "Take holy dip at sunrise. Offer sesame (til) and jaggery (gud) to Surya with water in copper vessel. Chant Surya Namaskar 12 times. Donate sesame laddoos to Brahmins and poor. Fly kites symbolizing the soul's journey towards light.";
      mantra      = "ॐ सूर्याय नमः — Om Suryaya Namah (108 times at sunrise)";
      story       = "When the Sun enters Makar (Capricorn), it begins its Uttarayan journey northward. Bhishma Pitamah waited for this sacred Uttarayan period to leave his body, as souls departing during Uttarayan attain liberation per the Bhagavad Gita Chapter 8 Verse 24. This marks the harvest of Pongal in South India, Lohri in Punjab, and Bihu in Assam — the same cosmic event celebrated under many names across Bharatvarsha.";
    },
    {
      name        = "Vasant Panchami";
      approxMonth = 2; approxDay = 5;
      deity       = "Goddess Saraswati";
      vedaRef     = "Sama Veda — Saraswati Suktam";
      rituals     = "Wear yellow clothes. Place books and instruments before Saraswati's image. Offer yellow flowers, yellow sweets (kesar halwa). Children write their first letters (Vidyarambha). Artists dedicate their tools to the goddess. Avoid reading and writing in the morning — offer them to the goddess first.";
      mantra      = "ॐ ऐं सरस्वत्यै नमः — Om Aim Saraswatyai Namah";
      story       = "Saraswati emerged from Brahma's divine thought on this day — the goddess of speech, wisdom, music, and the arts. Yellow, the color of mustard in bloom, represents the flowering of intellect. Lord Krishna declared in the Gita (10.34) — 'Among feminine qualities I am fame, prosperity, speech, memory, intelligence, steadfastness, and forgiveness.'";
    },
    {
      name        = "Maha Shivaratri";
      approxMonth = 2; approxDay = 21;
      deity       = "Lord Shiva";
      vedaRef     = "Shiva Purana — Shri Rudram (Yajur Veda)";
      rituals     = "Full night vigil (jaagaran). Fast entire day and night. Perform abhishek of Shivling with milk, honey, yogurt, ghee, and water every 3 hours — 4 prahar pujas. Offer Bel Patra, Datura, white flowers. Chant Maha Mrityunjaya Mantra 108 times. Breaking fast next morning after sunrise puja.";
      mantra      = "ॐ नमः शिवाय — Om Namah Shivaya (throughout the night). ॐ त्र्यम्बकं यजामहे — Maha Mrityunjaya Mantra";
      story       = "On this night, Shiva performed the Tandava — the cosmic dance of creation, preservation, and destruction. The ocean of milk was churned on this night (Samudra Manthan) and Shiva drank the Halahala poison that emerged, holding it in his throat, saving all creation. His throat turned blue, giving him the name Neelkantha. Devotees who stay awake this night receive the same boon as performing all pilgrimages.";
    },
    {
      name        = "Holi";
      approxMonth = 3; approxDay = 18;
      deity       = "Lord Krishna & Radha, Lord Vishnu";
      vedaRef     = "Bhavishya Purana — Holika Katha; Atharva Veda";
      rituals     = "Holika Dahan on Phalguna Purnima evening — light the bonfire facing east, circumambulate it 7 times with raw coconut and neem leaves. Next day: apply natural colors made from flowers (gulal, palash). Offer colored powders to Krishna and Radha first. Drink thandai (without bhang for dharmic celebration). Visit temple and apply color to deity's feet.";
      mantra      = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya";
      story       = "Hiranyakashipu commanded all to worship only him. His son Prahlad refused — a devotee of Vishnu since birth. Hiranyakashipu's sister Holika, immune to fire, carried Prahlad into flames to burn him. But Prahlad's devotion protected him — Holika burned, Prahlad emerged unharmed. Then Vishnu appeared as Narasimha and destroyed Hiranyakashipu. Holi celebrates that devotion is indestructible. In Vrindavan, Krishna playfully colored Radha's face, inaugurating the tradition of colors as love.";
    },
    {
      name        = "Ram Navami";
      approxMonth = 4; approxDay = 6;
      deity       = "Lord Ram";
      vedaRef     = "Valmiki Ramayana; Adhyatma Ramayana";
      rituals     = "Complete fast or one-meal fast. Read Sundar Kand or Ramayana path. Cradle ceremony (Jhula) for baby Ram at noon (birth time). Offer panchamrit abhishek to Ram Lalla. Chant Ram naam 108, 1008 times. Distribute prasad of panchamrit and fruits.";
      mantra      = "ॐ श्री राम जय राम जय जय राम — Om Shri Ram Jay Ram Jay Jay Ram";
      story       = "Lord Vishnu descended as Ram in Treta Yuga on Navami tithi of Chaitra month, to restore dharma. Born to Kaushalya and Dasharatha in Ayodhya, Ram's life is the greatest teaching of dharmic kingship, filial duty, spousal devotion, and friendship. The Gita's essence is lived in Ram's life — duty (dharma) above comfort, truth above convenience, compassion without weakness.";
    },
    {
      name        = "Hanuman Jayanti";
      approxMonth = 4; approxDay = 17;
      deity       = "Lord Hanuman";
      vedaRef     = "Skanda Purana — Hanuman Katha; Parasara Samhita";
      rituals     = "Wake before sunrise. Offer sindoor (vermilion) mixed in oil to Hanuman. Recite Hanuman Chalisa 7 or 11 times. Offer boondi, jaggery, banana, tulsi. Visit Hanuman temple at sunrise and sunset. Read Sundar Kand. Feed monkeys as manifestation of Hanuman.";
      mantra      = "ॐ हनुमते नमः — Om Hanumate Namah. ॐ श्री हनुमान् चालीसा — recite Chalisa";
      story       = "Hanuman was born to Anjana and Kesari on Chaitra Purnima as an avatar of Rudra (Shiva). As a child he leaped toward the Sun thinking it a fruit — Indra struck him with a thunderbolt but Shiva and Vayu restored him to life, granting multiple boons. Hanuman is the supreme example of bhakti-yoga from the Gita — he had the greatest strength, yet offered every action to Ram. He carried the Sanjeevani mountain because he could not identify the herb — never letting ego stand between duty and devotion.";
    },
    {
      name        = "Buddha Purnima";
      approxMonth = 5; approxDay = 12;
      deity       = "Lord Vishnu (Buddha Avatar), Gautama Buddha";
      vedaRef     = "Bhagavata Purana — Dashavatar; Dashavatara Stotra";
      rituals     = "Meditate at dawn. Light white candles or diyas. Offer white flowers and milk. Practice silence (mauna) for part of the day. Feed the poor, donate to sanghas. Read Dhammapada or Gita Chapter 2 (Sankhya Yoga — the teaching on the eternal soul, which Buddha also taught as anatta from a different angle).";
      mantra      = "ॐ नमो भगवते बुद्धाय — Om Namo Bhagavate Buddhaya";
      story       = "Siddhartha Gautama — born, enlightened, and finally departed (Mahaparinirvana) all on Vaishakha Purnima. In the Puranic tradition, Buddha is the 9th avatar of Vishnu who came to teach compassion and non-violence. His birth in Lumbini, enlightenment under the Bodhi tree in Bodh Gaya, and first sermon at Sarnath all happened on Purnima days. The full moon of Vaishakha is thus the most sacred day in both Dharmic and Buddhist traditions.";
    },
    {
      name        = "Rath Yatra";
      approxMonth = 7; approxDay = 7;
      deity       = "Lord Jagannath (Krishna)";
      vedaRef     = "Skanda Purana — Utkala Khanda; Brahma Purana";
      rituals     = "Pull the sacred Rath (chariot) with the golden rope. Offer Mahaprasad (56 bhog / Chhappan Bhog) to Jagannath. Chant Jagannath Ashtakam. Bathing with 108 pots of water (Snana Purnima precedes by 15 days). Ekadashi fast on the 11th day of the yatra. Whoever pulls the Rath rope receives the merit of 100 Ashwamedha Yagnas.";
      mantra      = "जय जगन्नाथ — Jay Jagannath. ॐ नमो भगवते वासुदेवाय";
      story       = "King Indradyumna of Malwa had a vision of Lord Vishnu and searched for His form. Vishnu appeared as a divine log (Daru Brahma) that washed ashore at Puri. The divine carpenter Vishwakarma (in disguise) carved the three deities — Jagannath, Balabhadra, and Subhadra — from the sacred log. Each year they leave the temple in their celestial chariots — symbolizing the soul's journey beyond the temple walls, teaching that God cannot be contained in any single place.";
    },
    {
      name        = "Nag Panchami";
      approxMonth = 8; approxDay = 2;
      deity       = "Nag Devatas (Ananta, Vasuki, Takshaka, Shesha)";
      vedaRef     = "Atharva Veda — Sarpa Sukta; Skanda Purana";
      rituals     = "Offer milk to snake holes (do NOT harm any snake). Draw Nag images with turmeric/sandalwood paste on walls. Offer flowers, kusha grass, and milk to Nag idols. Women tie protective threads for brothers' safety. Avoid digging earth, cooking on fire (some communities), and cutting vegetables with sharp tools.";
      mantra      = "ॐ नागाय नमः — Om Nagaya Namah. अनन्तं वासुकिं शेषं — Ananta Vasuki Shesha (Navagraha Stotram)";
      story       = "Janmejaya, son of Parikshit, performed Sarpa Satra — a grand snake sacrifice to destroy all serpents in revenge for his father's death. The sage Astika stopped the sacrifice, saving the Nagas. Krishna danced on Kaliya's hood on Shukla Panchami, subduing the poisonous serpent and declaring that nature's forces must be respected, not destroyed. Vishnu rests on Shesha Nag — the eternal serpent who represents time itself.";
    },
    {
      name        = "Raksha Bandhan";
      approxMonth = 8; approxDay = 19;
      deity       = "Lord Vishnu, Goddess Lakshmi";
      vedaRef     = "Bhavishya Purana — Indrani tying raksha to Indra";
      rituals     = "Sister ties sacred thread (rakhi) on brother's right wrist after aarti, tilak, and feeding sweets. Brother gives gifts and promises protection. Brahmin ties rakhi to patron (yajamana). On the same day — Avani Avittam (sacred thread renewal for Brahmins) and Upakarmam ceremonies.";
      mantra      = "येन बद्धो बलिः राजा दानवेन्द्रो महाबलः — Ye Nabaddho Bali Raja (Raksha Mantra during tying)";
      story       = "When the Devas were losing to Asuras, Goddess Indrani tied a protective thread around Indra's wrist on Shravana Purnima — the Devas won. Lakshmi tied a rakhi on the demon king Bali who had imprisoned Vishnu in his palace — as a sister to a brother, which compelled Bali to release Vishnu. This festival celebrates the sacred bond of protection across all relationships — sibling, guru-disciple, and devotee-deity.";
    },
    {
      name        = "Krishna Janmashtami";
      approxMonth = 8; approxDay = 26;
      deity       = "Lord Krishna";
      vedaRef     = "Bhagavata Purana — Tenth Skandha (Dashama Skandha); Vishnu Purana";
      rituals     = "Fast until midnight. Perform abhishek of Krishna with panchamrit at midnight (birth time). Rock the cradle. Dahi Handi — breaking the pot of yogurt (curd) symbolizing Krishna stealing butter. Read Bhagavata Dashama Skandha or Gita. Sing Bhajans all night. Break fast after midnight puja with panchamrit prasad.";
      mantra      = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya (108 times at midnight)";
      story       = "On Ashtami tithi of Shravana Krishna Paksha, in the prison cell of Kamsa in Mathura, Devaki gave birth at midnight. All guards fell asleep. The divine child told Vasudeva to carry him across the Yamuna. Though the river was in flood, the waters parted at Krishna's touch. Nanda and Yashoda received Him in Gokul. This night marks the descent of the Supreme Brahman into human form — the very event that made the Bhagavad Gita possible eighteen years later.";
    },
    {
      name        = "Ganesh Chaturthi";
      approxMonth = 9; approxDay = 7;
      deity       = "Lord Ganesha";
      vedaRef     = "Mudgala Purana — Ganesha Chaturthi Katha; Ganapati Atharva Shirsha";
      rituals     = "Install Ganesha idol facing north or east. 16-step Shodashopachara puja. Offer 21 modaks (especially ukadiche modak). Chant Ganapati Atharva Shirsha 11 times. Daily aarti morning and evening for 10 days. On 10th day (Anant Chaturdashi) — immerse in flowing water with procession. Circumambulate 21 times before immersion.";
      mantra      = "ॐ गं गणपतये नमः — Om Gam Ganapataye Namah. वक्रतुण्ड महाकाय — Vakratunda Mahakaya (morning prayer)";
      story       = "Parvati created Ganesha from the turmeric paste of her own body and breathed life into him, placing him as guardian of her door. When Shiva returned and was stopped by this unknown child, a misunderstanding arose and Shiva severed the child's head. Parvati's grief shook the cosmos. Shiva, realizing his error, sent Brahma to fetch the head of the first being facing north — an elephant. The elephant head was placed and Ganesha came back to life, declared the first-born of the gods and remover of all obstacles.";
    },
    {
      name        = "Navratri";
      approxMonth = 10; approxDay = 3;
      deity       = "Goddess Durga (9 forms: Shailputri to Siddhidatri)";
      vedaRef     = "Devi Mahatmya (Durga Saptashati) — Markandeya Purana; Devi Bhagavata";
      rituals     = "9 days of fasting (sattvic food only — no onion/garlic). Recite Durga Saptashati — 700 shlokas over 9 days. Worship specific Devi form each day with her color. Kanya Puja on Ashtami — feed 9 young girls. Garba and Dandiya dance as devotional offering. Light akhand jyot (uninterrupted flame) for 9 days.";
      mantra      = "ॐ दुं दुर्गायै नमः — Om Dum Durgayai Namah. या देवी सर्वभूतेषु — Ya Devi Sarva Bhuteshu (Devi Suktam)";
      story       = "The demon Mahishasura had obtained a boon that no man could kill him. He defeated the Devas and occupied Swarga. The collective divine energy of all gods merged into a single blazing light that took the form of Goddess Durga, adorned with all divine weapons. For 9 nights she fought Mahishasura's armies and on the 10th day (Vijayadashami/Dussehra) she slew him. Each of the 9 nights represents one battle, one divine form, one step closer to the final victory of dharma over adharma.";
    },
    {
      name        = "Dussehra";
      approxMonth = 10; approxDay = 12;
      deity       = "Lord Ram, Goddess Durga";
      vedaRef     = "Valmiki Ramayana — Lanka Kanda; Devi Mahatmya";
      rituals     = "Celebrate Ram's victory over Ravana. Burn effigies of Ravana, Meghanada, and Kumbhakarna at sunset. Ramlila performances. Shastra Puja (worship of tools, vehicles, and instruments of work). Crossing the boundary (Seemolanghan) — symbolically going out to achieve goals. Apti (Shami) leaf exchange as gift of gold — a tradition since Pandavas' incognito period.";
      mantra      = "ॐ श्री राम जय राम जय जय राम — Om Shri Ram Jay Ram Jay Jay Ram";
      story       = "Ram, Lakshman, and the Vanara Sena crossed the ocean to Lanka. After an epic battle spanning many days, Ram finally slew Ravana on Dashami tithi of Ashwin Shukla Paksha. The burning of Ravana symbolizes the destruction of the 10 heads of ego — kama, krodha, lobha, moha, mada, matsarya, swartha, anyaya, amanavata, and ahankara — the ten vices. Durga also slew Mahishasura on this same day. Vijayadashami is thus the most auspicious day for beginning any new dharmic endeavor.";
    },
    {
      name        = "Karva Chauth";
      approxMonth = 10; approxDay = 20;
      deity       = "Lord Shiva, Goddess Parvati, Lord Kartikeya";
      vedaRef     = "Bhavishya Purana — Veervati Katha; Skanda Purana";
      rituals     = "Wife fasts nirjal (without water) from sunrise. Evening — worship Moon through sieve (chalni). First look at Moon's reflection in water, then husband's face. Husband gives water and food to break fast. Community gathering of women (puja in groups). Listen to Karva Chauth Katha. Wear red and apply mehendi.";
      mantra      = "ॐ नमः शिवाय — Om Namah Shivaya (for husband's longevity)";
      story       = "Queen Veervati fasted for her husband but broke the fast seeing a false moon (a lamp behind a sieve by her brothers). Her husband died. Devastated, she kept strict Karva Chauth puja. Yama (god of death) returned her husband's soul. This fast embodies the Sati-Savitri ideal — the strength of a wife's devotion that can override even death. In the Mahabharata, Savitri argued with Yama and won back Satyavan's life by her virtue alone.";
    },
    {
      name        = "Diwali";
      approxMonth = 11; approxDay = 1;
      deity       = "Goddess Lakshmi, Lord Ganesha, Lord Ram";
      vedaRef     = "Padma Purana — Lakshmi Puja Vidhi; Valmiki Ramayana — Ayodhya Kanda";
      rituals     = "Clean and decorate home with rangoli and diyas. Lakshmi-Ganesha puja at sunset (Pradosh Kaal). Light 101 oil lamps in and around home. Offer kheer, lotus flowers, coins. Crackers symbolize Narakasura's defeat. Give sweets to neighbors. Distribute alms to the poor. Business community: worship account books (Chopda Pujan).";
      mantra      = "ॐ श्रीं महालक्ष्म्यै नमः — Om Shrim Mahalakshmyai Namah. ॐ गं गणपतये नमः — Om Gam Ganapataye Namah";
      story       = "Lord Ram returned to Ayodhya after 14 years of exile and 10 days after slaying Ravana, on the night of Kartik Amavasya. The people of Ayodhya lit thousands of diyas to welcome him — the first Diwali. In South India, it commemorates Krishna's defeat of Narakasura — the demon who had imprisoned 16,000 women. Lakshmi emerged from the cosmic ocean on this Amavasya and chose Vishnu as her eternal consort. Three events converge: homecoming, liberation, and divine union — making Diwali the festival of light in every sense.";
    },
    {
      name        = "Tulsi Vivah";
      approxMonth = 11; approxDay = 13;
      deity       = "Lord Vishnu (Shaligram), Tulsi Mata";
      vedaRef     = "Skanda Purana — Tulsi Mahatmya; Padma Purana";
      rituals     = "Decorate Tulsi plant with red chunari and flowers. Perform full vivah (wedding) ceremony between Tulsi and Shaligram. Read Vishnu Sahasranama. Offer 108 Tulsi leaves to Vishnu. Place sugarcane and amla near Tulsi. After ceremony — mangalsutra and sindoor offered. Wedding songs sung. Marks the beginning of Hindu wedding season.";
      mantra      = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya. तुलसी श्रीसखि नमो — Tulsi Sri Sakhi Namo";
      story       = "Tulsi (Vrinda) was a devotee of Vishnu married to the demon Jalandhar. Her pativrata dharma (wifely devotion) gave Jalandhar a protective shield that no god could pierce. To save the universe, Vishnu took Jalandhar's form and broke her devotion — a divine deception that haunted Vishnu himself. In expiation, He promised Tulsi she would reside with Him eternally as Lakshmi. This marriage ceremony honors that divine promise and marks Tulsi as the most sacred plant in dharma.";
    },
    {
      name        = "Chhath Puja";
      approxMonth = 11; approxDay = 8;
      deity       = "Surya Dev, Chhath Maiya (Usha/Pratyusha)";
      vedaRef     = "Rig Veda — Surya Mandala Sukta; Atharva Veda Surya Stotram";
      rituals     = "4-day festival: Day 1 Nahay-Khay (holy bath and pure food). Day 2 Kharna (fast, break at sunset with kheer-roti). Day 3 Sandhya Arghya (standing in water at sunset, offering fruits to setting Sun). Day 4 Usha Arghya (standing in water at sunrise, offering to rising Sun). Bamboo baskets with fruits, thekua, sugarcane. The vrat-i (devotee) stands in water during offering.";
      mantra      = "ॐ सूर्याय नमः — Om Suryaya Namah. ॐ भास्कराय नमः — Om Bhaskaraya Namah";
      story       = "Draupadi performed this puja during the Pandavas' exile to gain strength and ensure their welfare. Karna, son of Surya, maintained Chhath Puja throughout his life — the rigorous purity of the Chhath vrat is considered the highest test of devotion and purity. The vrat-i stands in water representing the soul's transition between the visible (sunrise/sunset) and the divine world, with offerings creating a bridge between human and cosmic consciousness.";
    },
    {
      name        = "Kartik Purnima";
      approxMonth = 11; approxDay = 27;
      deity       = "Lord Vishnu, Lord Shiva (Tripurantaka)";
      vedaRef     = "Skanda Purana — Kartik Mahatmya; Shiva Purana — Tripura Samhara";
      rituals     = "Holy dip in sacred rivers before sunrise (Dev Deepawali in Varanasi). Float 1000 diyas on the Ganga. Visit Kashi Vishwanath. Light lamps in tulsi garden. Satyanarayana Puja. Release diyas on river symbolizing departed souls. In Varanasi — Dev Deepawali: the entire ghats illuminated with millions of lamps.";
      mantra      = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya. ॐ त्र्यम्बकं यजामहे — Om Tryambakam (for Shiva's Tripura victory)";
      story       = "On this Purnima, Shiva destroyed the triple cities (Tripura) of the demon Tripurasura with a single divine arrow after ages of preparation. The gods lit lamps in celebration — the first Dev Deepawali. Also on this day, Vishnu ended his Chaturmas sleep. Guru Nanak Dev Ji was born on this Purnima. The Sikh holy day of Gurpurab coincides with the ancient Kartik Purnima — both traditions celebrate the arrival of divine light into the world on the same sacred night.";
    },
    {
      name        = "Vivah Panchami";
      approxMonth = 12; approxDay = 6;
      deity       = "Lord Ram and Goddess Sita";
      vedaRef     = "Valmiki Ramayana — Bala Kanda (Sita Svayamvara)";
      rituals     = "Celebrate the divine wedding of Ram and Sita. Dress Ram-Sita idols in bridal attire. Read Bala Kanda's vivah section. Conduct symbolic wedding ceremony in temple. Sing wedding songs (vivah songs of Ramcharitmanas). Offer flowers, fruits, and sweets. Grand procession (Baraat) in many temples.";
      mantra      = "ॐ श्री सीता राम चन्द्राभ्यां नमः — Om Shri Sita Ramachandrabhyam Namah";
      story       = "In Janakpur (Mithila), King Janaka's condition for Sita's marriage was the stringing of Lord Shiva's Pinaka bow — a bow so heavy that 5000 men could not lift it. All kings failed. Young Ram, at Vishwamitra's word, walked to the bow, lifted it effortlessly, and strung it until it broke. The celestial sound shook the three worlds. Sita garlanded Ram. This marriage is the archetype of all dharmic unions — the perfect meeting of divine courage and divine grace.";
    },
    {
      name        = "Gita Jayanti";
      approxMonth = 12; approxDay = 14;
      deity       = "Lord Krishna, Arjuna";
      vedaRef     = "Bhagavad Gita — All 18 Chapters; Mahabharata — Bhishma Parva";
      rituals     = "Read entire Bhagavad Gita (all 700 verses) or recite selected chapters. Deep contemplation on Chapter 2 (Sankhya Yoga) — the foundational teaching. Write favorite verse by hand. Offer Gita to Krishna and seek blessing before beginning daily study. Visit Krishna temples. Conduct Gita path in groups. Distribute Gita copies as prasad.";
      mantra      = "ॐ श्री भगवद्गीतायै नमः — Om Shri Bhagavad Gitayai Namah. सर्वधर्मान्परित्यज्य — Sarva Dharman Parityajya (Chapter 18.66)";
      story       = "On Margashirsha Shukla Ekadashi, on the Kurukshetra battlefield between the two armies of the Mahabharata war, Lord Krishna spoke the Bhagavad Gita to Arjuna. It took less than one hour. In those 700 verses, Krishna compressed the entire essence of the Vedas, Upanishads, and all dharmic philosophy. Every question a human soul can ask — about death, duty, love, fear, God, and liberation — was answered. This is not merely a scripture. This is the conversation that saved Arjuna. It is the conversation that can save every soul in every age.";
    }
  ];

};
