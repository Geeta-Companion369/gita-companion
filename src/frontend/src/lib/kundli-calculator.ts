// Pure TypeScript Vedic astrology calculator — runs in browser
// Implements: Julian Day, Lahiri Ayanamsa, sidereal positions,
// Lagna, nakshatra, Vimshottari Dasha, Navamsa
//
// Accuracy: mean-motion approximations sufficient for horoscope display.

import type {
  DashaEntry,
  KundliData,
  PlanetPlacement,
} from "@/types/user-profile";

// ─── Constants ────────────────────────────────────────────────────────────────

const RASHI_NAMES = [
  "Mesha",
  "Vrishabha",
  "Mithuna",
  "Karka",
  "Simha",
  "Kanya",
  "Tula",
  "Vrishchika",
  "Dhanu",
  "Makara",
  "Kumbha",
  "Meena",
];

const NAKSHATRA_NAMES = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishtha",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

// Vimshottari dasha sequence (lord name, glyph, years)
const DASHA_SEQUENCE: Array<[string, string, number]> = [
  ["Ketu", "के", 7],
  ["Shukra", "शु", 20],
  ["Surya", "सू", 6],
  ["Chandra", "च", 10],
  ["Mangal", "म", 7],
  ["Rahu", "रा", 18],
  ["Guru", "गु", 16],
  ["Shani", "श", 19],
  ["Budha", "बु", 17],
];

// Nakshatra → dasha lord index (0-8 mapping into DASHA_SEQUENCE)
const NAKSHATRA_LORD_IDX = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8, // Ashwini=Ketu, Bharani=Shukra, ...
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];

// Rashi → ruling planet name + glyph
const RASHI_RULER: Array<[string, string]> = [
  ["Mangal", "म"], // Mesha
  ["Shukra", "शु"], // Vrishabha
  ["Budha", "बु"], // Mithuna
  ["Chandra", "च"], // Karka
  ["Surya", "सू"], // Simha
  ["Budha", "बु"], // Kanya
  ["Shukra", "शु"], // Tula
  ["Mangal", "म"], // Vrishchika
  ["Guru", "गु"], // Dhanu
  ["Shani", "श"], // Makara
  ["Shani", "श"], // Kumbha
  ["Guru", "गु"], // Meena
];

// Planet info: name, glyph, mean longitude at J2000.0 (degrees), daily motion (degrees/day)
interface PlanetElem {
  name: string;
  glyph: string;
  L0: number; // mean longitude at J2000.0
  dL: number; // mean daily motion deg/day
}

const PLANETS: PlanetElem[] = [
  { name: "Surya", glyph: "सू", L0: 280.46, dL: 0.9856474 },
  { name: "Chandra", glyph: "च", L0: 218.316, dL: 13.176396 },
  { name: "Mangal", glyph: "म", L0: 355.45, dL: 0.5240208 },
  { name: "Budha", glyph: "बु", L0: 252.251, dL: 4.0923344 },
  { name: "Guru", glyph: "गु", L0: 34.396, dL: 0.0830853 },
  { name: "Shukra", glyph: "शु", L0: 181.979, dL: 1.6021302 },
  { name: "Shani", glyph: "श", L0: 50.0774, dL: 0.0334442 },
  { name: "Rahu", glyph: "रा", L0: 125.045, dL: -0.052954 }, // retrograde
  { name: "Ketu", glyph: "के", L0: 305.045, dL: -0.052954 }, // 180° from Rahu
];

// ─── Julian Day ───────────────────────────────────────────────────────────────

function toJulianDay(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  utcOffset: number,
): number {
  const utH = hour - utcOffset + minute / 60;
  // Gregorian calendar JD formula
  const y = month <= 2 ? year - 1 : year;
  const m = month <= 2 ? month + 12 : month;
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return (
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    day +
    B -
    1524.5 +
    utH / 24.0
  );
}

// ─── Lahiri Ayanamsa ──────────────────────────────────────────────────────────

function lahiriAyanamsa(jd: number): number {
  // J2000.0 = JD 2451545.0
  const T = (jd - 2451545.0) / 36525.0; // Julian centuries
  return 23.85 + 0.0136 * T * 100; // per year → per century
}

// ─── Sidereal longitude ───────────────────────────────────────────────────────

function normalise(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

function tropicalToSidereal(tropical: number, jd: number): number {
  return normalise(tropical - lahiriAyanamsa(jd));
}

function planetSidereal(planet: PlanetElem, jd: number): number {
  const daysSinceJ2000 = jd - 2451545.0;
  const tropical = normalise(planet.L0 + planet.dL * daysSinceJ2000);
  // Ketu is exactly 180° from Rahu
  if (planet.name === "Ketu") {
    const rahuTropical = normalise(
      PLANETS[7].L0 + PLANETS[7].dL * daysSinceJ2000,
    );
    return tropicalToSidereal(normalise(rahuTropical + 180), jd);
  }
  return tropicalToSidereal(tropical, jd);
}

// ─── Lagna (Ascendant) ────────────────────────────────────────────────────────

function calcLagna(jd: number, lat: number, lng: number): number {
  const T = (jd - 2451545.0) / 36525.0;
  // RAMC: Greenwich Sidereal Time → Local Sidereal Time
  const GMST =
    280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T;
  const LMST = normalise(GMST + lng);
  const eps = ((23.439291111 - 0.013004167 * T) * Math.PI) / 180; // obliquity radians
  const ramcRad = (LMST * Math.PI) / 180;
  const latRad = (lat * Math.PI) / 180;
  // Ascendant formula
  const y = -Math.cos(ramcRad);
  const x =
    Math.sin(ramcRad) * Math.cos(eps) + Math.tan(latRad) * Math.sin(eps);
  let asc = (Math.atan2(y, x) * 180) / Math.PI;
  asc = normalise(asc);
  return tropicalToSidereal(asc, jd);
}

// ─── Nakshatra ────────────────────────────────────────────────────────────────

function getNakshatra(sidDeg: number): {
  name: string;
  index: number;
  pada: number;
} {
  const idx = Math.floor(sidDeg / (360 / 27));
  const pada = Math.floor((sidDeg % (360 / 27)) / (360 / 108)) + 1;
  return { name: NAKSHATRA_NAMES[idx], index: idx, pada };
}

// ─── House placement (Equal House from Lagna) ─────────────────────────────────

function getHouse(planetDeg: number, lagnaDeg: number): number {
  const diff = normalise(planetDeg - lagnaDeg);
  return Math.floor(diff / 30) + 1;
}

// ─── Navamsa position ─────────────────────────────────────────────────────────

function navamsaSign(sidDeg: number): { sign: number; signName: string } {
  const sign = Math.floor((sidDeg * 9) / 30) % 12;
  return { sign, signName: RASHI_NAMES[sign] };
}

// ─── Vimshottari Dasha ────────────────────────────────────────────────────────

const TOTAL_DASHA_YEARS = 120;
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function calcDashas(
  moonSidDeg: number,
  birthTimestampMs: number,
): {
  mahadasha: DashaEntry;
  antardasha: DashaEntry;
  pratyantarDasha: DashaEntry;
  nextDashas: DashaEntry[];
} {
  const nk = getNakshatra(moonSidDeg);
  const lordIdx = NAKSHATRA_LORD_IDX[nk.index];

  // Elapsed fraction within nakshatra
  const nkSpan = 360 / 27;
  const nkStart = nk.index * nkSpan;
  const elapsed = moonSidDeg - nkStart; // 0..nkSpan
  const fraction = elapsed / nkSpan; // 0..1 (elapsed of nakshatra)

  const [, , lordYears] = DASHA_SEQUENCE[lordIdx];
  const elapsedMahaDashaYears = fraction * lordYears;
  const mahaDashaStart = birthTimestampMs - elapsedMahaDashaYears * MS_PER_YEAR;

  // Build full dasha list starting from birth mahadasha
  const dashas: DashaEntry[] = [];
  let current = mahaDashaStart;
  let seqIdx = lordIdx;

  for (let i = 0; i < 9 + 3; i++) {
    const [lord, glyph, years] = DASHA_SEQUENCE[seqIdx % 9];
    const end = current + years * MS_PER_YEAR;
    dashas.push({
      lord,
      lordGlyph: glyph,
      startDate: current,
      endDate: end,
      durationYears: years,
    });
    current = end;
    seqIdx++;
  }

  const now = Date.now();
  let mahaDashaIdx = dashas.findIndex(
    (d) => d.startDate <= now && d.endDate > now,
  );
  if (mahaDashaIdx < 0) mahaDashaIdx = 0;

  const mahadasha = dashas[mahaDashaIdx];
  const nextDashas = dashas.slice(mahaDashaIdx + 1, mahaDashaIdx + 4);

  // Antardasha within current mahadasha
  const mdDuration = mahadasha.endDate - mahadasha.startDate;
  const antarDashas: DashaEntry[] = [];
  let aStart = mahadasha.startDate;
  let aSeqIdx = (lordIdx + mahaDashaIdx) % 9;
  for (let i = 0; i < 9; i++) {
    const [lord, glyph, years] = DASHA_SEQUENCE[aSeqIdx % 9];
    const proportion = years / TOTAL_DASHA_YEARS;
    const aDuration = mdDuration * proportion;
    antarDashas.push({
      lord,
      lordGlyph: glyph,
      startDate: aStart,
      endDate: aStart + aDuration,
      durationYears: years,
    });
    aStart += aDuration;
    aSeqIdx++;
  }
  let antarIdx = antarDashas.findIndex(
    (d) => d.startDate <= now && d.endDate > now,
  );
  if (antarIdx < 0) antarIdx = 0;
  const antardasha = antarDashas[antarIdx];

  // Pratyantar within antardasha
  const adDuration = antardasha.endDate - antardasha.startDate;
  const pratyDashas: DashaEntry[] = [];
  let pStart = antardasha.startDate;
  const pSeqStart = (aSeqIdx + antarIdx) % 9;
  for (let i = 0; i < 9; i++) {
    const [lord, glyph, years] = DASHA_SEQUENCE[(pSeqStart + i) % 9];
    const proportion = years / TOTAL_DASHA_YEARS;
    const pDuration = adDuration * proportion;
    pratyDashas.push({
      lord,
      lordGlyph: glyph,
      startDate: pStart,
      endDate: pStart + pDuration,
      durationYears: years,
    });
    pStart += pDuration;
  }
  let pratyIdx = pratyDashas.findIndex(
    (d) => d.startDate <= now && d.endDate > now,
  );
  if (pratyIdx < 0) pratyIdx = 0;

  return {
    mahadasha,
    antardasha,
    pratyantarDasha: pratyDashas[pratyIdx],
    nextDashas,
  };
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function calculateKundli(
  profileId: string,
  fullName: string,
  dob: { day: number; month: number; year: number },
  tob: { hour: number; minute: number },
  lat: number,
  lng: number,
  timezone: number,
): KundliData {
  void fullName; // reserved for future use

  const jd = toJulianDay(
    dob.year,
    dob.month,
    dob.day,
    tob.hour,
    tob.minute,
    timezone,
  );
  const birthMs =
    new Date(dob.year, dob.month - 1, dob.day, tob.hour, tob.minute).getTime() -
    timezone * 60 * 60 * 1000;

  // Lagna
  const lagnaDeg = calcLagna(jd, lat, lng);
  const lagnaSign = Math.floor(lagnaDeg / 30);
  const lagnaRashi = RASHI_NAMES[lagnaSign];
  const [rulingPlanet, rulingPlanetGlyph] = RASHI_RULER[lagnaSign];

  // All planets
  const planets: PlanetPlacement[] = PLANETS.map((p) => {
    const sidDeg = planetSidereal(p, jd);
    const sign = Math.floor(sidDeg / 30);
    const nk = getNakshatra(sidDeg);
    return {
      planet: p.name,
      glyph: p.glyph,
      sign,
      signName: RASHI_NAMES[sign],
      degree: sidDeg % 30,
      house: getHouse(sidDeg, lagnaDeg),
      isRetrograde: p.name === "Rahu" || p.name === "Ketu",
      nakshatra: nk.name,
    };
  });

  // Moon nakshatra for dasha
  const moonPlanet = planets.find((p) => p.planet === "Chandra")!;
  const moonSidDeg = moonPlanet.sign * 30 + moonPlanet.degree;
  const moonNk = getNakshatra(moonSidDeg);

  const { mahadasha, antardasha, pratyantarDasha, nextDashas } = calcDashas(
    moonSidDeg,
    birthMs,
  );

  // Navamsa
  const navLagna = navamsaSign(lagnaDeg);
  const navamsaPlanets: PlanetPlacement[] = planets.map((p) => {
    const sidDeg = p.sign * 30 + p.degree;
    const nav = navamsaSign(sidDeg);
    const nk = getNakshatra(sidDeg);
    return {
      ...p,
      sign: nav.sign,
      signName: nav.signName,
      house: getHouse(nav.sign * 30, navLagna.sign * 30),
      nakshatra: nk.name,
    };
  });

  return {
    profileId,
    lagnaSign,
    lagnaRashi,
    rulingPlanet,
    rulingPlanetGlyph,
    planets,
    mahadasha,
    antardasha,
    pratyantarDasha,
    nextDashas,
    navamsaLagnaSign: navLagna.sign,
    navamsaLagnaRashi: navLagna.signName,
    navamsaPlanets,
    moonNakshatra: moonNk.name,
    moonNakshatraLord: DASHA_SEQUENCE[NAKSHATRA_LORD_IDX[moonNk.index]][0],
    calculatedAt: Date.now(),
  };
}
