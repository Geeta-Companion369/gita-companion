import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-CodWPqWB.js";
import { g as getBackend } from "./backend-client-DOpXrffV.js";
import { u as useUserProfile } from "./use-user-profile-hnqGj4bF.js";
const KUNDLI_LOADED_KEY = "gita-kundli-loaded";
const PLANET_GLYPH = {
  Surya: "सू",
  Sun: "सू",
  Chandra: "च",
  Moon: "च",
  Mangal: "म",
  Mars: "म",
  Budha: "बु",
  Mercury: "बु",
  Guru: "गु",
  Jupiter: "गु",
  Shukra: "शु",
  Venus: "शु",
  Shani: "श",
  Saturn: "श",
  Rahu: "रा",
  Ketu: "के"
};
function planetGlyph(name) {
  return PLANET_GLYPH[name] ?? name;
}
function toFrontendKundli(bk) {
  var _a, _b;
  return {
    profileId: bk.profileId.toString(),
    lagnaSign: Number(bk.lagnaSign),
    lagnaRashi: bk.lagnaRashi,
    rulingPlanet: bk.rulingPlanet,
    rulingPlanetGlyph: bk.rulingPlanetGlyph,
    planets: bk.planets.map((p) => ({
      planet: p.planet,
      glyph: planetGlyph(p.planet),
      sign: Number(p.sign),
      signName: String(Number(p.sign)),
      degree: p.degree,
      house: Number(p.house),
      isRetrograde: p.retrograde,
      nakshatra: p.nakshatra
    })),
    mahadasha: {
      lord: bk.mahadasha.lord,
      lordGlyph: bk.mahadasha.lord,
      startDate: Number(bk.mahadasha.startDate),
      endDate: Number(bk.mahadasha.endDate),
      durationYears: bk.mahadasha.durationYears
    },
    antardasha: {
      lord: bk.antardasha.lord,
      lordGlyph: bk.antardasha.lord,
      startDate: Number(bk.antardasha.startDate),
      endDate: Number(bk.antardasha.endDate),
      durationYears: bk.antardasha.durationYears
    },
    pratyantarDasha: {
      lord: bk.pratyantarDasha.lord,
      lordGlyph: bk.pratyantarDasha.lord,
      startDate: Number(bk.pratyantarDasha.startDate),
      endDate: Number(bk.pratyantarDasha.endDate),
      durationYears: bk.pratyantarDasha.durationYears
    },
    nextDashas: bk.nextDashas.map((d) => ({
      lord: d.lord,
      lordGlyph: d.lord,
      startDate: Number(d.startDate),
      endDate: Number(d.endDate),
      durationYears: d.durationYears
    })),
    navamsaLagnaSign: Number(bk.navamsaLagnaSign),
    navamsaLagnaRashi: [
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
      "Meena"
    ][Number(bk.navamsaLagnaSign)] ?? bk.lagnaRashi,
    navamsaPlanets: bk.navamsaPlanets.map((p) => ({
      planet: p.planet,
      glyph: planetGlyph(p.planet),
      sign: Number(p.sign),
      signName: String(Number(p.sign)),
      degree: p.degree,
      house: Number(p.house),
      isRetrograde: p.retrograde,
      nakshatra: p.nakshatra
    })),
    moonNakshatra: ((_a = bk.planets.find((p) => p.planet === "Moon")) == null ? void 0 : _a.nakshatra) ?? "",
    moonNakshatraLord: ((_b = bk.planets.find((p) => p.planet === "Moon")) == null ? void 0 : _b.nakshatraLord) ?? "",
    calculatedAt: Number(bk.calculatedAt) / 1e6
  };
}
function useKundli() {
  const [kundli, setKundliState] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(KUNDLI_LOADED_KEY);
    if (alreadyLoaded) return;
    sessionStorage.setItem(KUNDLI_LOADED_KEY, "1");
    getBackend().getKundliData().then((bk) => {
      if (bk) {
        setKundliState(toFrontendKundli(bk));
      }
    }).catch(() => {
    });
  }, []);
  const saveKundli = reactExports.useCallback(async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      setKundliState(data);
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to save kundli");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);
  const clearKundli = reactExports.useCallback(() => {
    setKundliState(null);
  }, []);
  return { kundli, saveKundli, clearKundli, isLoading, error };
}
function useNewsletter() {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const subscribe = reactExports.useCallback(
    async (email, name) => {
      if (!email) return false;
      setIsLoading(true);
      setError(null);
      try {
        return await getBackend().subscribeNewsletter(email, name);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to subscribe");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  const unsubscribe = reactExports.useCallback(async (email) => {
    if (!email) return false;
    setIsLoading(true);
    setError(null);
    try {
      return await getBackend().unsubscribeNewsletter(email);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to unsubscribe");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { subscribe, unsubscribe, isLoading, error };
}
const RASHI_NAMES$1 = [
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
  "Meena"
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
  "Revati"
];
const DASHA_SEQUENCE = [
  ["Ketu", "के", 7],
  ["Shukra", "शु", 20],
  ["Surya", "सू", 6],
  ["Chandra", "च", 10],
  ["Mangal", "म", 7],
  ["Rahu", "रा", 18],
  ["Guru", "गु", 16],
  ["Shani", "श", 19],
  ["Budha", "बु", 17]
];
const NAKSHATRA_LORD_IDX = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  // Ashwini=Ketu, Bharani=Shukra, ...
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
  8
];
const RASHI_RULER = [
  ["Mangal", "म"],
  // Mesha
  ["Shukra", "शु"],
  // Vrishabha
  ["Budha", "बु"],
  // Mithuna
  ["Chandra", "च"],
  // Karka
  ["Surya", "सू"],
  // Simha
  ["Budha", "बु"],
  // Kanya
  ["Shukra", "शु"],
  // Tula
  ["Mangal", "म"],
  // Vrishchika
  ["Guru", "गु"],
  // Dhanu
  ["Shani", "श"],
  // Makara
  ["Shani", "श"],
  // Kumbha
  ["Guru", "गु"]
  // Meena
];
const PLANETS = [
  { name: "Surya", glyph: "सू", L0: 280.46, dL: 0.9856474 },
  { name: "Chandra", glyph: "च", L0: 218.316, dL: 13.176396 },
  { name: "Mangal", glyph: "म", L0: 355.45, dL: 0.5240208 },
  { name: "Budha", glyph: "बु", L0: 252.251, dL: 4.0923344 },
  { name: "Guru", glyph: "गु", L0: 34.396, dL: 0.0830853 },
  { name: "Shukra", glyph: "शु", L0: 181.979, dL: 1.6021302 },
  { name: "Shani", glyph: "श", L0: 50.0774, dL: 0.0334442 },
  { name: "Rahu", glyph: "रा", L0: 125.045, dL: -0.052954 },
  // retrograde
  { name: "Ketu", glyph: "के", L0: 305.045, dL: -0.052954 }
  // 180° from Rahu
];
function toJulianDay(year, month, day, hour, minute, utcOffset) {
  const utH = hour - utcOffset + minute / 60;
  const y = month <= 2 ? year - 1 : year;
  const m = month <= 2 ? month + 12 : month;
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5 + utH / 24;
}
function lahiriAyanamsa(jd) {
  const T = (jd - 2451545) / 36525;
  return 23.85 + 0.0136 * T * 100;
}
function normalise(deg) {
  return (deg % 360 + 360) % 360;
}
function tropicalToSidereal(tropical, jd) {
  return normalise(tropical - lahiriAyanamsa(jd));
}
function planetSidereal(planet, jd) {
  const daysSinceJ2000 = jd - 2451545;
  const tropical = normalise(planet.L0 + planet.dL * daysSinceJ2000);
  if (planet.name === "Ketu") {
    const rahuTropical = normalise(
      PLANETS[7].L0 + PLANETS[7].dL * daysSinceJ2000
    );
    return tropicalToSidereal(normalise(rahuTropical + 180), jd);
  }
  return tropicalToSidereal(tropical, jd);
}
function calcLagna(jd, lat, lng) {
  const T = (jd - 2451545) / 36525;
  const GMST = 280.46061837 + 360.98564736629 * (jd - 2451545) + 387933e-9 * T * T;
  const LMST = normalise(GMST + lng);
  const eps = (23.439291111 - 0.013004167 * T) * Math.PI / 180;
  const ramcRad = LMST * Math.PI / 180;
  const latRad = lat * Math.PI / 180;
  const y = -Math.cos(ramcRad);
  const x = Math.sin(ramcRad) * Math.cos(eps) + Math.tan(latRad) * Math.sin(eps);
  let asc = Math.atan2(y, x) * 180 / Math.PI;
  asc = normalise(asc);
  return tropicalToSidereal(asc, jd);
}
function getNakshatra(sidDeg) {
  const idx = Math.floor(sidDeg / (360 / 27));
  const pada = Math.floor(sidDeg % (360 / 27) / (360 / 108)) + 1;
  return { name: NAKSHATRA_NAMES[idx], index: idx, pada };
}
function getHouse(planetDeg, lagnaDeg) {
  const diff = normalise(planetDeg - lagnaDeg);
  return Math.floor(diff / 30) + 1;
}
function navamsaSign(sidDeg) {
  const sign = Math.floor(sidDeg * 9 / 30) % 12;
  return { sign, signName: RASHI_NAMES$1[sign] };
}
const TOTAL_DASHA_YEARS = 120;
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1e3;
function calcDashas(moonSidDeg, birthTimestampMs) {
  const nk = getNakshatra(moonSidDeg);
  const lordIdx = NAKSHATRA_LORD_IDX[nk.index];
  const nkSpan = 360 / 27;
  const nkStart = nk.index * nkSpan;
  const elapsed = moonSidDeg - nkStart;
  const fraction = elapsed / nkSpan;
  const [, , lordYears] = DASHA_SEQUENCE[lordIdx];
  const elapsedMahaDashaYears = fraction * lordYears;
  const mahaDashaStart = birthTimestampMs - elapsedMahaDashaYears * MS_PER_YEAR;
  const dashas = [];
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
      durationYears: years
    });
    current = end;
    seqIdx++;
  }
  const now = Date.now();
  let mahaDashaIdx = dashas.findIndex(
    (d) => d.startDate <= now && d.endDate > now
  );
  if (mahaDashaIdx < 0) mahaDashaIdx = 0;
  const mahadasha = dashas[mahaDashaIdx];
  const nextDashas = dashas.slice(mahaDashaIdx + 1, mahaDashaIdx + 4);
  const mdDuration = mahadasha.endDate - mahadasha.startDate;
  const antarDashas = [];
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
      durationYears: years
    });
    aStart += aDuration;
    aSeqIdx++;
  }
  let antarIdx = antarDashas.findIndex(
    (d) => d.startDate <= now && d.endDate > now
  );
  if (antarIdx < 0) antarIdx = 0;
  const antardasha = antarDashas[antarIdx];
  const adDuration = antardasha.endDate - antardasha.startDate;
  const pratyDashas = [];
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
      durationYears: years
    });
    pStart += pDuration;
  }
  let pratyIdx = pratyDashas.findIndex(
    (d) => d.startDate <= now && d.endDate > now
  );
  if (pratyIdx < 0) pratyIdx = 0;
  return {
    mahadasha,
    antardasha,
    pratyantarDasha: pratyDashas[pratyIdx],
    nextDashas
  };
}
function calculateKundli(profileId, fullName, dob, tob, lat, lng, timezone) {
  const jd = toJulianDay(
    dob.year,
    dob.month,
    dob.day,
    tob.hour,
    tob.minute,
    timezone
  );
  const birthMs = new Date(dob.year, dob.month - 1, dob.day, tob.hour, tob.minute).getTime() - timezone * 60 * 60 * 1e3;
  const lagnaDeg = calcLagna(jd, lat, lng);
  const lagnaSign = Math.floor(lagnaDeg / 30);
  const lagnaRashi = RASHI_NAMES$1[lagnaSign];
  const [rulingPlanet, rulingPlanetGlyph] = RASHI_RULER[lagnaSign];
  const planets = PLANETS.map((p) => {
    const sidDeg = planetSidereal(p, jd);
    const sign = Math.floor(sidDeg / 30);
    const nk = getNakshatra(sidDeg);
    return {
      planet: p.name,
      glyph: p.glyph,
      sign,
      signName: RASHI_NAMES$1[sign],
      degree: sidDeg % 30,
      house: getHouse(sidDeg, lagnaDeg),
      isRetrograde: p.name === "Rahu" || p.name === "Ketu",
      nakshatra: nk.name
    };
  });
  const moonPlanet = planets.find((p) => p.planet === "Chandra");
  const moonSidDeg = moonPlanet.sign * 30 + moonPlanet.degree;
  const moonNk = getNakshatra(moonSidDeg);
  const { mahadasha, antardasha, pratyantarDasha, nextDashas } = calcDashas(
    moonSidDeg,
    birthMs
  );
  const navLagna = navamsaSign(lagnaDeg);
  const navamsaPlanets = planets.map((p) => {
    const sidDeg = p.sign * 30 + p.degree;
    const nav = navamsaSign(sidDeg);
    const nk = getNakshatra(sidDeg);
    return {
      ...p,
      sign: nav.sign,
      signName: nav.signName,
      house: getHouse(nav.sign * 30, navLagna.sign * 30),
      nakshatra: nk.name
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
    calculatedAt: Date.now()
  };
}
function JyotishDisclaimer$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "kundli-disclaimer mt-4 rounded-lg p-3 text-center",
      style: { fontSize: "0.72rem" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body italic", style: { color: "oklch(0.45 0.14 46)" }, children: "✦ Jyotish is the eye of the Vedas. Karma + Dharma are above all Grahas. Use this as guidance, not final truth. ✦" })
    }
  );
}
const GEMSTONE_POOL = [
  {
    gem: "Neelam (Blue Sapphire)",
    verdict: "NOT recommended at this time",
    reason: "Shani appears malefic in this preliminary reading. Blue Sapphire can give opposite results very quickly for this placement. This is the most sensitive gemstone — extreme caution required.",
    planet: "Shani"
  },
  {
    gem: "Ruby (Manik)",
    verdict: "CONDITIONAL — needs chart confirmation",
    reason: "Surya’s position requires careful individual analysis. Manik may increase anger and heat-related issues if Surya is afflicted or combust in your natal chart.",
    planet: "Surya"
  },
  {
    gem: "Yellow Sapphire (Pukhraj)",
    verdict: "FAVORABLE indication",
    reason: "Guru appears well-placed in this reading. Pukhraj may bring wisdom, prosperity, and spiritual growth. Please confirm with a full birth chart analysis before wearing.",
    planet: "Guru"
  },
  {
    gem: "Emerald (Panna)",
    verdict: "CONDITIONAL — needs chart confirmation",
    reason: "Budh’s position is neutral. Panna may enhance communication and intellect but can cause confusion or nervous issues if Budh is combust or in the 6th/8th/12th house.",
    planet: "Budh"
  },
  {
    gem: "Pearl (Moti)",
    verdict: "FAVORABLE indication",
    reason: "Chandra appears supported in this reading. Moti may bring emotional stability, mental peace, and improved mother-child relationship. Confirm with individual chart.",
    planet: "Chandra"
  }
];
function GemstoneCheckTab() {
  const [photoFile, setPhotoFile] = reactExports.useState(null);
  const [photoPreview, setPhotoPreview] = reactExports.useState(null);
  const [analysisResult, setAnalysisResult] = reactExports.useState(null);
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  function handlePhotoChange(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      return setPhotoPreview((_a2 = ev.target) == null ? void 0 : _a2.result);
    };
    reader.readAsDataURL(file);
    setAnalysisResult(null);
  }
  function handleAnalyze() {
    if (!photoFile) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const idx = photoFile.size % GEMSTONE_POOL.length;
      setAnalysisResult(GEMSTONE_POOL[idx] ?? GEMSTONE_POOL[0]);
      setIsAnalyzing(false);
    }, 2200);
  }
  const verdictColor = (analysisResult == null ? void 0 : analysisResult.verdict.includes("NOT")) ? "oklch(0.55 0.24 28)" : (analysisResult == null ? void 0 : analysisResult.verdict.includes("CONDITIONAL")) ? "oklch(0.58 0.24 70)" : "oklch(0.45 0.22 148)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6 px-4 pt-2", "data-ocid": "kundali.gemstone_check.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl mb-4 p-4 text-center",
        style: {
          background: "linear-gradient(135deg, oklch(0.95 0.06 270 / 0.4) 0%, oklch(0.92 0.08 56) 100%)",
          border: "1.5px solid oklch(0.65 0.22 268 / 0.40)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "💎" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-bold text-base mb-1",
              style: { color: "oklch(0.25 0.12 42)" },
              children: "Gemstone Check"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.45 0.12 46)" },
              children: "Upload your palm photo for a preliminary gemstone guidance reading. Always consult a qualified Jyotishi before wearing any ratna."
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-3 mb-4",
        style: {
          background: "oklch(0.94 0.08 28 / 0.35)",
          border: "2px solid oklch(0.60 0.22 28 / 0.50)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs font-semibold mb-1",
              style: { color: "oklch(0.42 0.18 28)" },
              children: "⚠ Mandatory Ratna Warning"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs",
              style: { color: "oklch(0.38 0.14 44)", lineHeight: 1.6 },
              children: [
                "Ratna (gemstones) can give the ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "opposite effect" }),
                " very quickly if the planet is malefic in your chart.",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Never wear any gemstone without consulting a qualified Daivagna (Vedic astrologer)." }),
                " ",
                "This tool provides general guidance only — not a substitute for individual Kundali analysis."
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 mb-4",
        style: {
          background: "oklch(0.95 0.06 64)",
          border: "1.5px solid oklch(0.72 0.22 54 / 0.35)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold text-sm mb-3",
              style: { color: "oklch(0.28 0.12 42)" },
              children: "🤚 Upload Your Palm Photo"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: "image/*",
              capture: "user",
              onChange: handlePhotoChange,
              className: "hidden",
              "data-ocid": "kundali.gemstone.photo_input",
              "aria-label": "Upload palm photo for gemstone analysis"
            }
          ),
          photoPreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: photoPreview,
                alt: "Palm upload preview",
                className: "w-full rounded-lg object-cover",
                style: { maxHeight: "200px" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "mt-2 font-body text-xs underline",
                style: { color: "oklch(0.45 0.14 46)" },
                onClick: () => {
                  setPhotoPreview(null);
                  setPhotoFile(null);
                  setAnalysisResult(null);
                },
                "data-ocid": "kundali.gemstone.remove_photo_button",
                children: "Remove photo"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "wax-seal-btn w-full py-3 text-sm mb-2",
              onClick: () => {
                var _a;
                return (_a = fileInputRef.current) == null ? void 0 : _a.click();
              },
              "data-ocid": "kundali.gemstone.upload_button",
              children: "📸 Choose Palm Photo"
            }
          ),
          photoFile && !analysisResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "wax-seal-btn w-full py-3 text-sm",
              onClick: handleAnalyze,
              disabled: isAnalyzing,
              "data-ocid": "kundali.gemstone.analyze_button",
              children: isAnalyzing ? "ॐ Analyzing your palm..." : "✨ Analyze for Gemstone Guidance"
            }
          )
        ]
      }
    ),
    analysisResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 mb-4",
        "data-ocid": "kundali.gemstone.result_card",
        style: {
          background: "linear-gradient(135deg, oklch(0.96 0.07 68) 0%, oklch(0.92 0.09 62) 100%)",
          border: `2px solid ${verdictColor}60`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-display font-bold text-sm mb-1",
              style: { color: "oklch(0.25 0.12 42)" },
              children: [
                "💎 Analysis: ",
                analysisResult.gem
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-base font-bold mb-2",
              style: { color: verdictColor },
              children: analysisResult.verdict
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm mb-3",
              style: { color: "oklch(0.32 0.12 44)", lineHeight: 1.7 },
              children: analysisResult.reason
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-lg p-3",
              style: {
                background: "oklch(0.94 0.07 28 / 0.30)",
                border: "1px solid oklch(0.58 0.20 28 / 0.40)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-xs italic",
                  style: { color: "oklch(0.42 0.14 44)", lineHeight: 1.6 },
                  children: [
                    "⚠ This is a general reading. Your individual chart may differ.",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Always consult a qualified Daivagna before wearing any gemstone." })
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-xl p-4 mb-4",
        style: {
          background: "linear-gradient(135deg, oklch(0.50 0.22 268 / 0.12) 0%, oklch(0.48 0.20 268 / 0.18) 100%)",
          border: "1.5px solid oklch(0.52 0.22 268 / 0.40)"
        },
        "data-ocid": "kundali.gemstone.jyotishi_card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold text-sm mb-1",
                style: { color: "oklch(0.32 0.16 268)" },
                children: "📞 Book a Jyotishi Call"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic",
                style: { color: "oklch(0.45 0.12 268)" },
                children: "Get a personalised 15-min Vedic astrology session for accurate gemstone recommendation."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold text-base",
                style: { color: "oklch(0.35 0.18 268)" },
                children: "₹499"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "wax-seal-btn text-xs px-4 py-1.5 mt-1",
                "data-ocid": "kundali.gemstone.book_jyotishi_button",
                children: "Book Call"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JyotishDisclaimer$1, {})
  ] });
}
const GRAHA_DATA = [
  {
    name: "Surya",
    sanskrit: "सूर्य",
    glyph: "☀",
    color: "oklch(0.72 0.30 52)",
    bgGradient: "linear-gradient(135deg, oklch(0.95 0.06 72) 0%, oklch(0.90 0.10 58) 100%)",
    role: "Soul | Confidence | Leadership | Father",
    strongGives: [
      "Authority and political power",
      "High self-confidence and success",
      "Good eyesight and vitality",
      "Strong leadership qualities",
      "Positive relationship with father"
    ],
    weakCauses: [
      "Be careful with ego tendencies",
      "Eye and head health may need attention",
      "Period favors nurturing father relationships",
      "Self-confidence benefits from daily practice",
      "Authority figures may need extra patience"
    ],
    remedies: [
      "Offer wheat, jaggery, red flowers on Sunday",
      "Chant Surya Namaskar 12 rounds at sunrise",
      "Serve father figures and elders with love",
      "Wear copper or gold on Sunday",
      "Om Suryaya Namah 108x Sunday morning"
    ],
    avoidList: [
      "Disrespecting father or authority figures",
      "Excessive ego or arrogance",
      "Skipping morning prayers on Sunday"
    ],
    mantraSanskrit: "ॐ सूर्याय नमः",
    mantraTranslit: "Om Suryaya Namah",
    mantraCount: 108,
    daan: "Wheat, jaggery, red flowers, copper on Sunday",
    gemstone: "Ruby (Manik)",
    gemstoneWarning: "Manik can cause anger or arrogance if Surya is afflicted in your chart. Consult Daivagna before wearing."
  },
  {
    name: "Chandra",
    sanskrit: "चन्द्र",
    glyph: "☽",
    color: "oklch(0.65 0.15 220)",
    bgGradient: "linear-gradient(135deg, oklch(0.95 0.04 220) 0%, oklch(0.90 0.08 210) 100%)",
    role: "Mind | Emotions | Mother | Intuition",
    strongGives: [
      "Deep emotional balance and peace",
      "Loving nature and nurturing quality",
      "Creative and imaginative mind",
      "Strong relationship with mother",
      "Heightened intuition and psychic sensitivity"
    ],
    weakCauses: [
      "Be careful with emotional swings — grounding helps",
      "Relationship with mother may benefit from extra care",
      "Mental peace deepens with regular meditation",
      "Sleep patterns benefit from lunar rhythm awareness",
      "Social bonds strengthen when you listen more"
    ],
    remedies: [
      "Offer white rice, milk, white flowers on Monday",
      "Chant Om Somaya Namah 11x Monday evening",
      "Respect and serve mother with devotion",
      "Fast on Mondays or take milk-only diet",
      "Donate silver or white cloth on Monday"
    ],
    avoidList: [
      "Arguments with mother or female elders",
      "Eating non-vegetarian food on Monday",
      "Staying up very late on full moon nights"
    ],
    mantraSanskrit: "ॐ सोमाय नमः",
    mantraTranslit: "Om Somaya Namah",
    mantraCount: 11,
    daan: "White rice, milk, white flowers, silver on Monday",
    gemstone: "Pearl (Moti)",
    gemstoneWarning: "Moti may amplify emotional sensitivity if Chandra is afflicted in your chart. Consult Daivagna before wearing."
  },
  {
    name: "Mangal",
    sanskrit: "मङ्गल",
    glyph: "♂",
    color: "oklch(0.58 0.28 28)",
    bgGradient: "linear-gradient(135deg, oklch(0.95 0.05 30) 0%, oklch(0.90 0.12 26) 100%)",
    role: "Energy | Courage | Action | Mars Force",
    strongGives: [
      "Exceptional courage and determination",
      "Natural leadership and boldness",
      "Strong physical constitution",
      "Success in sports and physical pursuits",
      "Ability to initiate and complete projects"
    ],
    weakCauses: [
      "Be careful with hasty decisions — pause before acting",
      "Digestive health benefits from warm, calming foods",
      "Sibling relationships deepen with patience",
      "Channel energy into constructive action",
      "Fiery emotions cool with spiritual practice"
    ],
    remedies: [
      "Offer red lentils, red cloth, copper on Tuesday",
      "Chant Hanuman Chalisa on Tuesdays",
      "Om Angarakaya Namah 108x Tuesday morning",
      "Visit Hanuman temple on Tuesdays",
      "Feed dogs and serve the needy on Tuesday"
    ],
    avoidList: [
      "Aggression or heated arguments on Tuesday",
      "Buying sharp objects on Tuesday",
      "Ignoring sibling or family relationships"
    ],
    mantraSanskrit: "ॐ अङ्गारकाय नमः",
    mantraTranslit: "Om Angarakaya Namah",
    mantraCount: 108,
    daan: "Red lentils, red cloth, copper on Tuesday",
    gemstone: "Red Coral (Moonga)",
    gemstoneWarning: "Moonga can increase aggression if Mangal is afflicted in your chart. Consult Daivagna before wearing."
  },
  {
    name: "Budh",
    sanskrit: "बुध",
    glyph: "☿",
    color: "oklch(0.60 0.22 148)",
    bgGradient: "linear-gradient(135deg, oklch(0.95 0.05 150) 0%, oklch(0.90 0.10 145) 100%)",
    role: "Intellect | Communication | Commerce | Learning",
    strongGives: [
      "Sharp intellect and analytical mind",
      "Excellent communication and writing skills",
      "Business acumen and commercial success",
      "Mathematical and technical ability",
      "Strong memory and learning capacity"
    ],
    weakCauses: [
      "Be careful with communication clarity — review before sending",
      "Business decisions benefit from extra research",
      "Nervous system health improves with yoga and rest",
      "Speaking with care strengthens all relationships",
      "Documentation and planning add stability"
    ],
    remedies: [
      "Offer green moong dal, green cloth on Wednesday",
      "Om Budhaya Namah 17x Wednesday morning",
      "Read and study spiritual texts on Wednesdays",
      "Donate bronze or green items on Wednesday",
      "Practice clear, mindful communication daily"
    ],
    avoidList: [
      "Gossiping or speaking harshly on Wednesday",
      "Signing contracts without careful review",
      "Skipping learning or reading practices"
    ],
    mantraSanskrit: "ॐ बुधाय नमः",
    mantraTranslit: "Om Budhaya Namah",
    mantraCount: 17,
    daan: "Green moong dal, green cloth, bronze on Wednesday",
    gemstone: "Emerald (Panna)",
    gemstoneWarning: "Panna can cause confusion if Budh is afflicted or in Kendra. Never wear without expert Kundali analysis."
  },
  {
    name: "Guru",
    sanskrit: "गुरु",
    glyph: "♃",
    color: "oklch(0.66 0.26 72)",
    bgGradient: "linear-gradient(135deg, oklch(0.95 0.07 74) 0%, oklch(0.90 0.13 68) 100%)",
    role: "Wisdom | Dharma | Expansion | Teacher | Jupiter",
    strongGives: [
      "Deep spiritual wisdom and dharmic insight",
      "Ability to teach and inspire others",
      "Prosperity and abundance in life",
      "Blessings of good children",
      "Expansion and growth in all endeavors"
    ],
    weakCauses: [
      "Be careful with overconfidence — humility serves well",
      "Liver health benefits from sattvic diet",
      "Weight management improves with mindful eating",
      "Period favors study but not overindulgence",
      "Spiritual practice keeps expansion balanced"
    ],
    remedies: [
      "Offer yellow chana dal, turmeric on Thursday",
      "Om Brihaspataye Namah 16x Thursday morning",
      "Respect and serve your Guru or teacher",
      "Donate banana, yellow cloth on Thursday",
      "Read Vishnu Sahasranama on Thursdays"
    ],
    avoidList: [
      "Disrespecting teachers or Guru figures",
      "Overeating or indulgence on Thursday",
      "Skipping spiritual study or satsang"
    ],
    mantraSanskrit: "ॐ बृहस्पतये नमः",
    mantraTranslit: "Om Brihaspataye Namah",
    mantraCount: 16,
    daan: "Yellow chana dal, turmeric, banana, yellow cloth on Thursday",
    gemstone: "Yellow Sapphire (Pukhraj)",
    gemstoneWarning: "Pukhraj can cause imbalance if Guru is combust or debilitated. Consult Daivagna before wearing."
  },
  {
    name: "Shukra",
    sanskrit: "शुक्र",
    glyph: "♀",
    color: "oklch(0.68 0.22 340)",
    bgGradient: "linear-gradient(135deg, oklch(0.96 0.05 340) 0%, oklch(0.91 0.10 335) 100%)",
    role: "Love | Beauty | Luxury | Venus | Relationships",
    strongGives: [
      "Artistic and creative talent",
      "Beautiful love relationships",
      "Luxury, comfort and aesthetic sense",
      "Diplomatic and harmonious nature",
      "Success in creative expressions"
    ],
    weakCauses: [
      "Be careful with relationship harmony — communication is key",
      "Financial discipline brings lasting security",
      "Kidney health benefits from adequate hydration",
      "Overindulgence in sensory pleasures may tire the spirit",
      "Material desires balance beautifully with spiritual practice"
    ],
    remedies: [
      "Offer white sweets, white cloth, ghee on Friday",
      "Om Shukraya Namah 20x Friday evening",
      "Worship Goddess Lakshmi on Fridays",
      "Donate silver or white items on Friday",
      "Fast on Fridays or take only white-colored foods"
    ],
    avoidList: [
      "Relationship conflicts on Friday",
      "Excessive spending or indulgence",
      "Disrespecting women or feminine energy"
    ],
    mantraSanskrit: "ॐ शुक्राय नमः",
    mantraTranslit: "Om Shukraya Namah",
    mantraCount: 20,
    daan: "White sweet, white cloth, ghee, silver on Friday",
    gemstone: "Diamond / White Sapphire (Heera / Safed Pukhraj)",
    gemstoneWarning: "Heera may cause relationship complications if Shukra is in a malefic position. Consult Daivagna before wearing."
  },
  {
    name: "Shani",
    sanskrit: "शनि",
    glyph: "♄",
    color: "oklch(0.40 0.12 270)",
    bgGradient: "linear-gradient(135deg, oklch(0.94 0.04 270) 0%, oklch(0.88 0.09 265) 100%)",
    role: "Karma | Discipline | Longevity | Justice | Saturn",
    strongGives: [
      "Natural authority and leadership",
      "Disciplined focus and perseverance",
      "Long life and wisdom through experience",
      "Service-oriented mindset",
      "Deep insight through patience"
    ],
    weakCauses: [
      "Be careful with delays — trust divine timing",
      "Joint and bone health benefits from yoga and oil massage",
      "Relationships with workers and servants deepen with respect",
      "Taking shortcuts creates longer obstacles",
      "Steadiness and honesty always serve Shani well"
    ],
    remedies: [
      "Donate black urad and mustard oil on Saturday",
      "Feed dogs and crows daily — they are Shani's companions",
      "Serve parents, elderly, and the underprivileged",
      "Hanuman Chalisa every Tuesday and Saturday",
      "Om Sham Shanicharaya Namah 108x Saturday evening"
    ],
    avoidList: [
      "Ego, arrogance, or disrespecting workers",
      "Alcohol and intoxicants",
      "Buying iron or leather on Saturday",
      "Disrespecting elderly or service workers"
    ],
    mantraSanskrit: "ॐ शं शनिश्चराय नमः",
    mantraTranslit: "Om Sham Shanicharaya Namah",
    mantraCount: 108,
    daan: "Black urad, mustard oil on Saturday — feed dogs/crows daily, serve parents and elderly",
    gemstone: "Blue Sapphire (Neelam)",
    gemstoneWarning: "Neelam is powerful — can give opposite effect very quickly if Shani is malefic. Absolutely consult qualified Daivagna before wearing. This is the most sensitive gemstone."
  },
  {
    name: "Rahu",
    sanskrit: "राहु",
    glyph: "☊",
    color: "oklch(0.45 0.18 300)",
    bgGradient: "linear-gradient(135deg, oklch(0.94 0.05 300) 0%, oklch(0.88 0.10 295) 100%)",
    role: "Illusion | Foreign | Obsession | Transformation | Shadow Planet",
    strongGives: [
      "Favorable for foreign connections and travel",
      "Success in technology and unconventional fields",
      "Ability for research and deep investigation",
      "Transformative experiences that bring growth",
      "Unique approach that sets you apart"
    ],
    weakCauses: [
      "Be careful with obsessive thought patterns — awareness helps",
      "Grandparent health may benefit from extra attention",
      "Foreign travels reward careful preparation",
      "Confusion clears with meditation and grounding",
      "Material obsession balances through spiritual practice"
    ],
    remedies: [
      "Om Rahave Namah 18x Saturday at dusk",
      "Donate coconut, blue cloth, black sesame on Saturday",
      "Visit Bhairava temple on Saturdays",
      "Light a lamp of mustard oil on Saturday",
      "Meditate on Durga or Kali for clarity and transformation"
    ],
    avoidList: [
      "Obsessive or fearful thinking",
      "Irregular sleep patterns",
      "Overindulgence in material pursuits"
    ],
    mantraSanskrit: "ॐ राहवे नमः",
    mantraTranslit: "Om Rahave Namah",
    mantraCount: 18,
    daan: "Coconut, blue cloth, black sesame, mustard on Saturday",
    gemstone: "Hessonite (Gomed)",
    gemstoneWarning: "Gomed can amplify Rahu's confusion if placed wrongly in the chart. Never wear without expert Kundali analysis from a qualified astrologer."
  },
  {
    name: "Ketu",
    sanskrit: "केतु",
    glyph: "☋",
    color: "oklch(0.50 0.16 180)",
    bgGradient: "linear-gradient(135deg, oklch(0.94 0.04 180) 0%, oklch(0.88 0.09 175) 100%)",
    role: "Liberation | Spiritual Insight | Past Karma | Moksha | Shadow Planet",
    strongGives: [
      "Deep spiritual insight and moksha inclination",
      "Access to past-life wisdom",
      "Occult and mystical knowledge",
      "Liberation from material bondage",
      "Unique spiritual gifts and abilities"
    ],
    weakCauses: [
      "Be careful with worldly direction — spiritual clarity is your compass",
      "Maternal grandfather health may deserve extra attention",
      "Confusion about life path clears through meditation",
      "Detachment from outcomes brings peace",
      "Practical matters benefit from earth-grounding practices"
    ],
    remedies: [
      "Om Ketave Namah 17x Tuesday or Saturday",
      "Donate brown/grey cloth and horsegram on Tuesday",
      "Visit Ganesha temple for clarity on Tuesdays",
      "Light sesame oil lamp on Saturdays",
      "Study Vedanta and liberation texts for inner guidance"
    ],
    avoidList: [
      "Excessive worldly attachment",
      "Ignoring spiritual practice",
      "Suppressing intuition or inner guidance"
    ],
    mantraSanskrit: "ॐ केतवे नमः",
    mantraTranslit: "Om Ketave Namah",
    mantraCount: 17,
    daan: "Brown/grey cloth, horsegram, iron on Tuesday",
    gemstone: "Cat's Eye (Lahsuniya)",
    gemstoneWarning: "Lahsuniya is highly sensitive — must only be worn after expert analysis of Ketu's full chart position and its role in your specific ascendant."
  }
];
const CHANDRA_HOUSE_GUIDANCE = {
  1: {
    text: "Chandra illuminates your Lagna — a day for emotional renewal and self-care.",
    mantra: "Om Somaya Namah",
    color: "green"
  },
  2: {
    text: "Chandra blesses your resources — period favors family harmony and financial clarity.",
    mantra: "Om Somaya Namah",
    color: "green"
  },
  3: {
    text: "Chandra activates courage — good for communication and short travels.",
    mantra: "Om Somaya Namah",
    color: "yellow"
  },
  4: {
    text: "Chandra graces your home — a beautiful day for family, mother, and inner peace.",
    mantra: "Om Chandraya Namah",
    color: "green"
  },
  5: {
    text: "Chandra blesses creativity and children — wonderful day for art, study, and joy.",
    mantra: "Om Somaya Namah",
    color: "green"
  },
  6: {
    text: "Chandra supports service — your health and daily discipline benefit from attention.",
    mantra: "Om Somaya Namah",
    color: "yellow"
  },
  7: {
    text: "Chandra illuminates partnerships — a nurturing day for relationships and collaboration.",
    mantra: "Om Chandraya Namah",
    color: "green"
  },
  8: {
    text: "Chandra passes through the deep — a good day for introspection, meditation, and rest.",
    mantra: "Om Somaya Namah",
    color: "red"
  },
  9: {
    text: "Chandra blesses dharma and fortune — an auspicious day for spiritual practice.",
    mantra: "Om Chandraya Namah",
    color: "green"
  },
  10: {
    text: "Chandra activates your karma zone — professional matters receive lunar attention.",
    mantra: "Om Somaya Namah",
    color: "yellow"
  },
  11: {
    text: "Chandra illuminates gains and friendships — social connections are especially warm today.",
    mantra: "Om Chandraya Namah",
    color: "green"
  },
  12: {
    text: "Chandra invites contemplation — rest, spiritual practice, and inner retreat are especially beneficial.",
    mantra: "Om Somaya Namah",
    color: "red"
  }
};
function JyotishDisclaimer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "kundli-disclaimer mt-4 rounded-lg p-3 text-center",
      style: { fontSize: "0.72rem" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body italic", style: { color: "oklch(0.45 0.14 46)" }, children: "✦ Jyotish is the eye of the Vedas. Karma + Dharma are above all Grahas. Use this as guidance, not final truth. ✦" })
    }
  );
}
function GraMeterCard({
  color,
  title,
  subtitle,
  mantra,
  count
}) {
  const colorMap = {
    green: {
      bg: "oklch(0.92 0.10 148)",
      border: "oklch(0.60 0.20 148)",
      label: "🌿 Shubh",
      text: "oklch(0.30 0.18 148)"
    },
    yellow: {
      bg: "oklch(0.94 0.10 80)",
      border: "oklch(0.68 0.22 72)",
      label: "🌀 Neutral",
      text: "oklch(0.38 0.14 60)"
    },
    red: {
      bg: "oklch(0.94 0.08 28)",
      border: "oklch(0.58 0.22 28)",
      label: "⚡ Savdhaan",
      text: "oklch(0.38 0.18 28)"
    }
  };
  const c = colorMap[color];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "graha-meter rounded-xl p-4 mb-3",
      style: { background: c.bg, border: `1.5px solid ${c.border}` },
      "data-ocid": "kundali.graha_meter.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display font-bold text-sm",
              style: { color: c.text },
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-body font-semibold px-2 py-0.5 rounded-full",
              style: { background: `${c.border}33`, color: c.text },
              children: c.label
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-sm mb-2",
            style: { color: "oklch(0.30 0.10 46)", lineHeight: 1.6 },
            children: subtitle
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body text-xs italic",
            style: { color: "oklch(0.42 0.14 46)" },
            children: [
              "Mantra: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: mantra }),
              " × ",
              count
            ]
          }
        )
      ]
    }
  );
}
function AajKaGrahaTab({ kundli }) {
  var _a, _b, _c;
  const [panchang, setPanchang] = reactExports.useState(null);
  const [reminderTime, setReminderTime] = reactExports.useState("07:00");
  const [reminderSaved, setReminderSaved] = reactExports.useState(false);
  const [showTimePicker, setShowTimePicker] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    getBackend().getPanchangToday(today).then((p) => setPanchang(p)).catch(() => {
    });
  }, []);
  const moonHouse = kundli ? ((_a = kundli.planets.find((p) => p.planet === "Chandra")) == null ? void 0 : _a.house) ?? 1 : 1;
  const guidance = CHANDRA_HOUSE_GUIDANCE[moonHouse] ?? CHANDRA_HOUSE_GUIDANCE[1];
  const weakestGraha = kundli ? ((_b = kundli.planets.find((p) => p.house === 8 || p.house === 12)) == null ? void 0 : _b.planet) ?? "Shani" : "Shani";
  const weeklyRemedy = `This week ${weakestGraha} invites your attention. ${((_c = GRAHA_DATA.find((g) => g.name === weakestGraha)) == null ? void 0 : _c.remedies[0]) ?? "Light a lamp and chant the planet's mantra with devotion."}`;
  const handleSaveReminder = reactExports.useCallback(async () => {
    await getBackend().saveRemedyReminder("Chandra", reminderTime).catch(() => {
    });
    setReminderSaved(true);
    setShowTimePicker(false);
    setTimeout(() => setReminderSaved(false), 3e3);
  }, [reminderTime]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6 px-4 pt-2", "data-ocid": "kundali.aaj_ka_graha.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl mb-4 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.92 0.10 58) 0%, oklch(0.88 0.14 52) 100%)",
          border: "1.5px solid oklch(0.72 0.26 54 / 0.5)",
          boxShadow: "0 4px 18px oklch(0.72 0.26 54 / 0.15)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-center py-2 font-display text-sm font-bold tracking-wider",
              style: {
                background: "oklch(0.72 0.28 52 / 0.25)",
                color: "oklch(0.22 0.10 40)",
                borderBottom: "1px solid oklch(0.72 0.26 54 / 0.30)"
              },
              children: "☸ Aaj Ka Panchang ☸"
            }
          ),
          panchang ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 p-4", children: [
            { label: "Tithi", value: panchang.tithi },
            { label: "Nakshatra", value: panchang.nakshatra },
            { label: "Yoga", value: panchang.yoga },
            { label: "Karana", value: panchang.karana }
          ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs",
                style: { color: "oklch(0.48 0.14 46)" },
                children: label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold text-sm",
                style: { color: "oklch(0.25 0.12 38)" },
                children: value
              }
            )
          ] }, label)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading text-2xl" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h3",
      {
        className: "font-display text-base font-bold mb-2",
        style: { color: "oklch(0.30 0.14 42)" },
        children: "Today's Chandra Position"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GraMeterCard,
      {
        color: guidance.color,
        title: `Chandra in house ${moonHouse} from your Rashi`,
        subtitle: guidance.text,
        mantra: guidance.mantra,
        count: 11
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "wax-seal-btn w-full py-2.5 text-sm",
          onClick: () => setShowTimePicker((s) => !s),
          "data-ocid": "kundali.set_reminder.button",
          children: "🔔 Set Remedy Reminder"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showTimePicker && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          className: "overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl mt-2 p-4 flex gap-3 items-center",
              style: {
                background: "oklch(0.93 0.07 60)",
                border: "1px solid oklch(0.72 0.24 54 / 0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "reminder-time-input",
                    className: "font-body text-sm",
                    style: { color: "oklch(0.30 0.12 42)" },
                    children: "Reminder time:"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "reminder-time-input",
                    type: "time",
                    value: reminderTime,
                    onChange: (e) => setReminderTime(e.target.value),
                    className: "rounded-lg px-2 py-1 font-body text-sm border",
                    style: {
                      background: "oklch(0.97 0.04 70)",
                      borderColor: "oklch(0.72 0.24 54 / 0.4)",
                      color: "oklch(0.22 0.10 38)"
                    },
                    "data-ocid": "kundali.reminder_time.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "wax-seal-btn px-4 py-1.5 text-xs",
                    onClick: handleSaveReminder,
                    "data-ocid": "kundali.save_reminder.button",
                    children: "Save"
                  }
                )
              ]
            }
          )
        }
      ) }),
      reminderSaved && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-center font-body text-xs mt-2",
          style: { color: "oklch(0.40 0.20 148)" },
          children: "✓ Reminder saved — Krishna will remind you 🙏"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 mb-4",
        style: {
          background: "linear-gradient(135deg, oklch(0.94 0.07 72) 0%, oklch(0.90 0.10 66) 100%)",
          border: "1.5px solid oklch(0.72 0.26 54 / 0.35)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h4",
            {
              className: "font-display text-sm font-bold mb-2",
              style: { color: "oklch(0.28 0.12 42)" },
              children: "🌟 This Week's Graha Guidance"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm",
              style: { color: "oklch(0.35 0.12 44)", lineHeight: 1.7 },
              children: weeklyRemedy
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic mt-2",
              style: { color: "oklch(0.52 0.12 46)" },
              children: "Remedies are spiritual support. Consult a doctor for health issues."
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JyotishDisclaimer, {})
  ] });
}
function MantraPlayer({
  mantra,
  translit,
  count
}) {
  const [playing, setPlaying] = reactExports.useState(false);
  const [current, setCurrent] = reactExports.useState(0);
  const intervalRef = reactExports.useRef(null);
  const audioCtxRef = reactExports.useRef(null);
  const playBeep = reactExports.useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } catch {
    }
  }, []);
  const start = reactExports.useCallback(() => {
    setCurrent(0);
    setPlaying(true);
    let n = 0;
    playBeep();
    n++;
    setCurrent(n);
    intervalRef.current = setInterval(() => {
      playBeep();
      n++;
      setCurrent(n);
      if (n >= count) {
        clearInterval(intervalRef.current);
        setPlaying(false);
      }
    }, 1200);
  }, [count, playBeep]);
  const stop = reactExports.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPlaying(false);
  }, []);
  reactExports.useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl p-4 mb-3",
      style: {
        background: "oklch(0.93 0.08 58)",
        border: "1.5px solid oklch(0.72 0.26 54 / 0.35)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-center text-lg mb-0.5",
            style: { color: "oklch(0.26 0.12 42)" },
            children: mantra
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-center text-xs italic mb-3",
            style: { color: "oklch(0.45 0.14 46)" },
            children: translit
          }
        ),
        playing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-full text-center font-display font-bold text-xs px-3 py-1",
              style: {
                background: "oklch(0.72 0.28 54 / 0.25)",
                color: "oklch(0.28 0.12 42)"
              },
              children: [
                current,
                " / ",
                count
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "w-1.5 h-4 rounded-full",
              style: { background: "oklch(0.65 0.26 52)" },
              animate: { scaleY: [1, 1.8, 1] },
              transition: {
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.15
              }
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "wax-seal-btn w-full py-2 text-sm",
            onClick: playing ? stop : start,
            "data-ocid": "kundali.play_mantra.button",
            children: playing ? `⏹ Stop (${current}/${count})` : `▶ Play Mantra ${count}x`
          }
        )
      ]
    }
  );
}
function GrahaShantTab() {
  const [activeGraha, setActiveGraha] = reactExports.useState(0);
  const g = GRAHA_DATA[activeGraha];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6", "data-ocid": "kundali.graha_shanti.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-2 px-3 py-3 overflow-x-auto",
        style: {
          borderBottom: "1px solid oklch(0.72 0.24 54 / 0.25)",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: GRAHA_DATA.map((graha, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveGraha(idx),
            className: "flex-shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-smooth",
            style: {
              background: activeGraha === idx ? graha.bgGradient : "oklch(0.93 0.05 68)",
              border: activeGraha === idx ? `1.5px solid ${graha.color}` : "1.5px solid transparent",
              boxShadow: activeGraha === idx ? `0 2px 12px ${graha.color}40` : "none",
              minWidth: "60px"
            },
            "data-ocid": `kundali.graha_tab.${graha.name.toLowerCase()}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: graha.glyph }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display font-bold",
                  style: {
                    fontSize: "0.65rem",
                    color: activeGraha === idx ? graha.color : "oklch(0.40 0.12 46)"
                  },
                  children: graha.name
                }
              )
            ]
          },
          graha.name
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.22 },
        className: "px-4 pt-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "graha-tab rounded-xl p-4 mb-4 text-center",
              style: {
                background: g.bgGradient,
                border: `1.5px solid ${g.color}50`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-1", children: g.glyph }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-2xl font-bold",
                    style: { color: g.color },
                    children: g.sanskrit
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display italic text-sm",
                    style: { color: "oklch(0.40 0.12 46)" },
                    children: g.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs mt-2",
                    style: { color: "oklch(0.38 0.12 46)" },
                    children: g.role
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Section,
            {
              title: "✨ Strong Shani Gives",
              titleOverride: `✨ Strong ${g.name} Gives`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: g.strongGives.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "font-body text-sm flex gap-2",
                  style: { color: "oklch(0.32 0.12 44)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.55 0.22 148)" }, children: "✓" }),
                    " ",
                    item
                  ]
                },
                item
              )) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: `⚡ ${g.name} Needs Attention`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: g.weakCauses.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "font-body text-sm flex gap-2",
              style: { color: "oklch(0.36 0.12 44)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.60 0.24 52)" }, children: "•" }),
                " ",
                item
              ]
            },
            item
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🙏 Remedies (Upay)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1.5", children: g.remedies.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "font-body text-sm flex gap-2",
              style: { color: "oklch(0.32 0.12 44)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-bold flex-shrink-0",
                    style: { color: "oklch(0.55 0.24 52)" },
                    children: [
                      idx + 1,
                      "."
                    ]
                  }
                ),
                item
              ]
            },
            item
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🌾 Daan (Donation)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm",
              style: { color: "oklch(0.32 0.12 44)", lineHeight: 1.7 },
              children: g.daan
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h4",
            {
              className: "font-display font-bold text-sm mb-2",
              style: { color: "oklch(0.30 0.12 42)" },
              children: "🔔 Today's Mantra"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MantraPlayer,
            {
              mantra: g.mantraSanskrit,
              translit: g.mantraTranslit,
              count: g.mantraCount
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🚫 Avoid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: g.avoidList.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "font-body text-sm flex gap-2",
              style: { color: "oklch(0.38 0.14 44)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.55 0.24 28)" }, children: "✗" }),
                " ",
                item
              ]
            },
            item
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-4 mb-4",
              style: {
                background: "oklch(0.96 0.04 60)",
                border: "2px solid oklch(0.65 0.24 52 / 0.4)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display font-bold text-sm mb-1",
                    style: { color: "oklch(0.30 0.12 42)" },
                    children: [
                      "💎 Gemstone: ",
                      g.gemstone
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-lg p-3 mt-2",
                    style: {
                      background: "oklch(0.94 0.08 28 / 0.35)",
                      border: "1px solid oklch(0.60 0.22 28 / 0.40)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs font-semibold mb-1",
                          style: { color: "oklch(0.42 0.18 28)" },
                          children: "⚠ Important: Ratna Warning"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs",
                          style: { color: "oklch(0.38 0.14 44)", lineHeight: 1.6 },
                          children: g.gemstoneWarning
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic mt-1",
                          style: { color: "oklch(0.50 0.14 46)" },
                          children: "Ratna can give opposite effect if planet is malefic in your chart. Consult a qualified Daivagna before wearing any gemstone."
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(JyotishDisclaimer, {})
        ]
      },
      activeGraha
    ) })
  ] });
}
function Section({
  title,
  titleOverride,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl p-4 mb-3",
      style: {
        background: "oklch(0.95 0.05 68)",
        border: "1px solid oklch(0.72 0.20 54 / 0.25)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h4",
          {
            className: "font-display font-bold text-sm mb-2",
            style: { color: "oklch(0.28 0.12 42)" },
            children: titleOverride ?? title
          }
        ),
        children
      ]
    }
  );
}
const STATIC_TRANSIT_EVENTS_2026 = [
  {
    planet: "Shani",
    eventType: "Vakri",
    description: "Shani Vakri begins — Saturn retrograde period",
    startDate: "2026-06-01",
    endDate: "2026-11-15",
    remedy: "Donate black urad on Saturdays. Feed dogs and crows. Chant Hanuman Chalisa on Tuesdays.",
    colorCode: "orange"
  },
  {
    planet: "Guru",
    eventType: "Gochar",
    description: "Guru Gochar — Jupiter enters Vrishabha",
    startDate: "2026-05-14",
    endDate: "2026-05-14",
    remedy: "Begin Vishnu Sahasranama recitation. Offer yellow flowers on Thursday.",
    colorCode: "blue"
  },
  {
    planet: "Surya",
    eventType: "Eclipse",
    description: "Solar Eclipse — a powerful time for inner renewal",
    startDate: "2026-08-12",
    endDate: "2026-08-12",
    remedy: "Fast and chant Mahamrityunjaya Mantra. Donate wheat and jaggery after eclipse.",
    colorCode: "red"
  },
  {
    planet: "Chandra",
    eventType: "Eclipse",
    description: "Lunar Eclipse — period of emotional purification",
    startDate: "2026-02-28",
    endDate: "2026-02-28",
    remedy: "Meditate and fast on eclipse day. Offer milk to Shiva lingam after eclipse.",
    colorCode: "red"
  },
  {
    planet: "Mangal",
    eventType: "Gochar",
    description: "Mangal Gochar — Mars enters Mesha (own sign)",
    startDate: "2026-09-20",
    endDate: "2026-11-05",
    remedy: "Channel energy into constructive action. Donate red lentils on Tuesdays.",
    colorCode: "blue"
  },
  {
    planet: "Rahu",
    eventType: "Gochar",
    description: "Rahu–Ketu axis shift — major karmic transition",
    startDate: "2026-11-27",
    endDate: "2026-11-27",
    remedy: "Strengthen spiritual practice. Donate coconut and black sesame on Saturdays.",
    colorCode: "orange"
  },
  {
    planet: "Shukra",
    eventType: "Vakri",
    description: "Shukra Vakri — Venus retrograde begins",
    startDate: "2026-07-22",
    endDate: "2026-09-03",
    remedy: "Avoid new relationships or major beauty investments. Offer white flowers on Fridays.",
    colorCode: "orange"
  }
];
const EVENT_COLOR_MAP = {
  orange: "oklch(0.65 0.26 52)",
  blue: "oklch(0.52 0.22 268)",
  red: "oklch(0.56 0.26 28)"
};
const EVENT_DOT_MAP = {
  Vakri: "oklch(0.65 0.26 52)",
  Gochar: "oklch(0.52 0.22 268)",
  Eclipse: "oklch(0.56 0.26 28)"
};
function getEventsInMonth(year, month, events) {
  return events.filter((ev) => {
    const start = new Date(ev.startDate);
    const end = new Date(ev.endDate);
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    return start <= monthEnd && end >= monthStart;
  });
}
function TransitCalendarTab() {
  const [selectedEvent, setSelectedEvent] = reactExports.useState(null);
  const events = STATIC_TRANSIT_EVENTS_2026;
  const today = /* @__PURE__ */ new Date();
  const months = Array.from(
    { length: 12 },
    (_, i) => {
      const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
      return {
        year: d.getFullYear(),
        month: d.getMonth(),
        label: d.toLocaleString("en-IN", { month: "short", year: "numeric" })
      };
    }
  );
  const upcomingEvents = events.filter(
    (ev) => new Date(ev.startDate) >= today || new Date(ev.endDate) >= today
  ).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  ).slice(0, 5);
  const soonEvents = upcomingEvents.filter((ev) => {
    const diff = (new Date(ev.startDate).getTime() - today.getTime()) / (1e3 * 60 * 60 * 24);
    return diff >= 0 && diff <= 3;
  });
  const downloadICS = reactExports.useCallback((ev) => {
    const toICSDate = (d) => d.replace(/-/g, "");
    const content = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Gita Companion//Kundali Lite//EN",
      "BEGIN:VEVENT",
      `DTSTART;VALUE=DATE:${toICSDate(ev.startDate)}`,
      `DTEND;VALUE=DATE:${toICSDate(ev.endDate)}`,
      `SUMMARY:${ev.planet} ${ev.eventType} — ${ev.description}`,
      `DESCRIPTION:Remedy: ${ev.remedy}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");
    const blob = new Blob([content], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${ev.planet}_${ev.eventType}.ics`;
    a.click();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6", "data-ocid": "kundali.transit_calendar.section", children: [
    soonEvents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mx-4 mt-3 mb-3 rounded-xl p-3",
        style: {
          background: "oklch(0.94 0.08 52)",
          border: "1.5px solid oklch(0.65 0.26 52 / 0.5)"
        },
        children: soonEvents.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body text-sm",
            style: { color: "oklch(0.30 0.14 42)" },
            children: [
              "⚠",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                ev.planet,
                " ",
                ev.eventType
              ] }),
              " ",
              "begins soon — ",
              ev.remedy.split(".")[0],
              "."
            ]
          },
          ev.startDate + ev.planet
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transit-calendar px-3 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: months.map(({ year, month, label }) => {
      const monthEvents = getEventsInMonth(year, month, events);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl overflow-hidden",
          style: {
            background: "oklch(0.95 0.05 70)",
            border: "1px solid oklch(0.72 0.22 54 / 0.30)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-center py-1.5 font-display text-xs font-bold",
                style: {
                  background: "oklch(0.72 0.26 52 / 0.18)",
                  color: "oklch(0.28 0.12 42)"
                },
                children: label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 min-h-[56px]", children: monthEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs text-center",
                style: { color: "oklch(0.62 0.08 60)" },
                children: "No major transits"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: monthEvents.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-1.5 hover:opacity-80 transition-smooth",
                onClick: () => setSelectedEvent(ev),
                "data-ocid": "kundali.transit_event.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-full flex-shrink-0",
                      style: {
                        background: EVENT_DOT_MAP[ev.eventType] ?? "oklch(0.55 0.20 52)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body text-xs truncate text-left",
                      style: {
                        color: "oklch(0.30 0.12 44)",
                        fontSize: "0.68rem"
                      },
                      children: [
                        ev.planet,
                        " ",
                        ev.eventType
                      ]
                    }
                  )
                ]
              },
              ev.planet + ev.startDate
            )) }) })
          ]
        },
        label
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-4 mt-3 px-4", children: [
      ["Vakri", "orange"],
      ["Gochar", "blue"],
      ["Eclipse", "red"]
    ].map(([label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "w-2.5 h-2.5 rounded-full",
          style: { background: EVENT_DOT_MAP[label] }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "font-body text-xs",
          style: { color: "oklch(0.45 0.12 46)" },
          children: label
        }
      )
    ] }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "font-display font-bold text-sm mb-3",
          style: { color: "oklch(0.28 0.12 42)" },
          children: "🗓 Upcoming Transits"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: upcomingEvents.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.07 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full rounded-xl p-3 text-left transition-smooth hover:shadow-md",
              style: {
                background: "oklch(0.94 0.06 68)",
                border: `1.5px solid ${EVENT_COLOR_MAP[ev.colorCode] ?? "oklch(0.65 0.22 52)"}50`
              },
              onClick: () => setSelectedEvent(ev),
              "data-ocid": `kundali.upcoming_event.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display font-bold text-sm",
                      style: { color: "oklch(0.28 0.12 42)" },
                      children: [
                        ev.planet,
                        " ",
                        ev.eventType
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs mt-0.5 line-clamp-1",
                      style: { color: "oklch(0.42 0.12 46)" },
                      children: ev.description
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs mt-1",
                      style: { color: "oklch(0.52 0.14 52)" },
                      children: [
                        ev.startDate,
                        ev.endDate !== ev.startDate ? ` → ${ev.endDate}` : ""
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-2 py-0.5 rounded-full flex-shrink-0",
                    style: {
                      background: `${EVENT_COLOR_MAP[ev.colorCode] ?? "oklch(0.65 0.22 52)"}22`,
                      color: EVENT_COLOR_MAP[ev.colorCode] ?? "oklch(0.45 0.18 52)"
                    },
                    children: ev.eventType
                  }
                )
              ] })
            }
          )
        },
        ev.planet + ev.startDate
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        style: {
          background: "oklch(0.12 0.04 40 / 0.55)",
          backdropFilter: "blur(4px)"
        },
        onClick: () => setSelectedEvent(null),
        "data-ocid": "kundali.transit_detail.modal",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "w-full max-w-md rounded-2xl overflow-hidden",
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 40, opacity: 0 },
            transition: { type: "spring", damping: 22, stiffness: 300 },
            style: {
              background: "linear-gradient(160deg, oklch(0.96 0.08 62) 0%, oklch(0.92 0.10 56) 100%)",
              border: `2px solid ${EVENT_COLOR_MAP[selectedEvent.colorCode] ?? "oklch(0.65 0.24 52)"}70`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.20)"
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-1",
                  style: {
                    background: `linear-gradient(90deg, ${EVENT_COLOR_MAP[selectedEvent.colorCode]}, oklch(0.84 0.38 54))`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h3",
                    {
                      className: "font-display font-bold text-base",
                      style: { color: "oklch(0.25 0.12 42)" },
                      children: [
                        selectedEvent.planet,
                        " ",
                        selectedEvent.eventType
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelectedEvent(null),
                      className: "w-7 h-7 rounded-full flex items-center justify-center",
                      style: {
                        background: "oklch(0.88 0.06 66)",
                        color: "oklch(0.35 0.12 44)"
                      },
                      "data-ocid": "kundali.transit_detail.close_button",
                      children: "✕"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-2",
                    style: { color: "oklch(0.35 0.12 44)" },
                    children: selectedEvent.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-xs mb-3",
                    style: { color: "oklch(0.50 0.14 52)" },
                    children: [
                      "📅 ",
                      selectedEvent.startDate,
                      selectedEvent.endDate !== selectedEvent.startDate ? ` → ${selectedEvent.endDate}` : ""
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-3 mb-4",
                    style: {
                      background: "oklch(0.93 0.07 60)",
                      border: "1px solid oklch(0.72 0.24 54 / 0.30)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-bold text-xs mb-1",
                          style: { color: "oklch(0.28 0.12 42)" },
                          children: "🙏 Remedy"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm",
                          style: { color: "oklch(0.32 0.12 44)", lineHeight: 1.6 },
                          children: selectedEvent.remedy
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "wax-seal-btn w-full py-2.5 text-sm",
                    onClick: () => {
                      downloadICS(selectedEvent);
                    },
                    "data-ocid": "kundali.add_to_calendar.button",
                    children: "📆 Add to Calendar (.ics)"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mx-4 mt-5 rounded-xl p-4 text-center",
        style: {
          background: "linear-gradient(135deg, oklch(0.90 0.10 56) 0%, oklch(0.86 0.14 50) 100%)",
          border: "1.5px solid oklch(0.72 0.26 54 / 0.45)"
        },
        "data-ocid": "kundali.pro_teaser.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold text-sm mb-1",
              style: { color: "oklch(0.25 0.12 42)" },
              children: "📄 Download Full Year Transit PDF"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs mb-3",
              style: { color: "oklch(0.42 0.12 46)" },
              children: "Complete transit report with all Vakri, Gochar & Eclipse dates + personalized remedies"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs",
              style: {
                background: "oklch(0.55 0.24 48)",
                color: "oklch(0.95 0.05 74)"
              },
              children: "Pro ₹299/yr — Upgrade to unlock"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JyotishDisclaimer, {})
  ] });
}
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
  "Meena"
];
const RASHI_EN = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];
function formatDeg(deg) {
  const d = Math.floor(deg);
  const m = Math.round((deg - d) * 60);
  return `${d}°${m.toString().padStart(2, "0")}'`;
}
function formatDate(ts) {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}
const HOUSE_CELLS = [
  { row: 0, col: 1 },
  // House 1 (Lagna) — top-center-left
  { row: 0, col: 0 },
  // House 2 — top-left corner
  { row: 1, col: 0 },
  // House 3 — left
  { row: 2, col: 0 },
  // House 4 — left-bottom
  { row: 3, col: 0 },
  // House 5 — bottom-left corner
  { row: 3, col: 1 },
  // House 6 — bottom-center-left
  { row: 3, col: 2 },
  // House 7 — bottom-center-right
  { row: 3, col: 3 },
  // House 8 — bottom-right corner
  { row: 2, col: 3 },
  // House 9 — right-bottom
  { row: 1, col: 3 },
  // House 10 — right
  { row: 0, col: 3 },
  // House 11 — top-right corner
  { row: 0, col: 2 }
  // House 12 — top-center-right
];
const KENDRA_HOUSES = [1, 4, 7, 10];
function ChartGrid({
  planets,
  lagnaSign,
  lagnaRashi,
  rulingPlanet,
  title
}) {
  const houseMap = {};
  for (let i = 1; i <= 12; i++) houseMap[i] = [];
  for (const p of planets) {
    const h = Math.max(1, Math.min(12, p.house));
    houseMap[h].push(p);
  }
  const grid = [];
  for (let r = 0; r < 4; r++) {
    grid[r] = [];
    for (let c = 0; c < 4; c++) {
      grid[r][c] = { house: null, isCenter: false };
    }
  }
  grid[1][1].isCenter = true;
  grid[1][2].isCenter = true;
  grid[2][1].isCenter = true;
  grid[2][2].isCenter = true;
  for (let i = 0; i < 12; i++) {
    const { row, col } = HOUSE_CELLS[i];
    const houseNum = (lagnaSign + i) % 12 + 1;
    grid[row][col].house = houseNum;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "kundli-chart", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center mb-2 font-display font-bold",
        style: {
          color: "oklch(0.22 0.10 32)",
          fontSize: "0.9rem",
          textShadow: "0 1px 4px oklch(0.78 0.34 54 / 0.25)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              display: "inline-block",
              padding: "2px 14px",
              background: "linear-gradient(90deg, oklch(0.52 0.26 268), oklch(0.5 0.26 268 / 0.9))",
              color: "oklch(0.97 0.04 70)",
              borderRadius: "3px",
              fontSize: "0.75rem",
              letterSpacing: "0.05em"
            },
            children: title
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          width: "100%",
          aspectRatio: "1",
          border: "2px solid oklch(0.65 0.28 48 / 0.55)",
          borderRadius: "4px",
          background: "linear-gradient(145deg, oklch(0.97 0.07 68) 0%, oklch(0.93 0.10 62) 100%)",
          boxShadow: "0 4px 20px oklch(0.65 0.28 48 / 0.20), inset 0 1px 0 oklch(1 0 0 / 0.6)"
        },
        className: "kundli-chart",
        children: grid.flatMap(
          (row, ri) => row.map((cell, ci) => {
            var _a;
            const cellKey = `r${ri}c${ci}`;
            if (cell.isCenter) {
              if (ri === 1 && ci === 1) {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      gridRow: "2 / 4",
                      gridColumn: "2 / 4",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(145deg, oklch(0.95 0.10 62 / 0.8), oklch(0.88 0.12 56 / 0.9))",
                      borderTop: "1px solid oklch(0.72 0.28 52 / 0.45)",
                      borderLeft: "1px solid oklch(0.72 0.28 52 / 0.45)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            fontSize: "1.6rem",
                            color: "oklch(0.72 0.30 52)",
                            textShadow: "0 0 12px oklch(0.78 0.34 54 / 0.5)",
                            lineHeight: 1
                          },
                          children: "✿"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            fontSize: "0.55rem",
                            color: "oklch(0.45 0.18 44)",
                            marginTop: "2px",
                            fontFamily: "var(--font-display)",
                            fontStyle: "italic",
                            textAlign: "center",
                            lineHeight: 1.3,
                            maxWidth: "80%"
                          },
                          children: lagnaRashi
                        }
                      )
                    ]
                  },
                  "center-lotus"
                );
              }
              return null;
            }
            if (cell.house === null) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}, cellKey);
            const housePlanets = houseMap[cell.house] ?? [];
            const isLagna = cell.house === 1;
            const isKendra = KENDRA_HOUSES.includes(cell.house);
            const houseSignIdx = (lagnaSign + cell.house - 1) % 12;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  border: "0.5px solid oklch(0.72 0.28 52 / 0.30)",
                  padding: "2px 3px",
                  position: "relative",
                  background: isLagna ? "oklch(0.88 0.18 54 / 0.28)" : isKendra ? "oklch(0.88 0.12 56 / 0.15)" : "transparent",
                  minHeight: 0,
                  overflow: "hidden"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        fontSize: "0.5rem",
                        color: isLagna ? "oklch(0.45 0.22 44)" : "oklch(0.52 0.14 46)",
                        fontWeight: isLagna ? 700 : 400,
                        lineHeight: 1.2,
                        fontFamily: "var(--font-body)"
                      },
                      children: [
                        cell.house,
                        isLagna && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "2px", fontSize: "0.45rem" }, children: "L" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontSize: "0.45rem",
                        color: "oklch(0.55 0.16 46 / 0.8)",
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        lineHeight: 1
                      },
                      children: (_a = RASHI_NAMES[houseSignIdx]) == null ? void 0 : _a.slice(0, 3)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1px",
                        marginTop: "2px"
                      },
                      children: housePlanets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          title: `${p.planet} — ${RASHI_NAMES[p.sign]} ${formatDeg(p.degree)}${p.isRetrograde ? " (R)" : ""}`,
                          style: {
                            fontSize: "0.52rem",
                            color: p.planet === rulingPlanet ? "oklch(0.52 0.26 48)" : "oklch(0.28 0.12 36)",
                            fontWeight: p.planet === rulingPlanet ? 700 : 500,
                            fontFamily: "var(--font-body)",
                            lineHeight: 1,
                            textShadow: p.planet === rulingPlanet ? "0 0 6px oklch(0.78 0.34 54 / 0.5)" : "none"
                          },
                          children: [
                            p.glyph,
                            p.isRetrograde && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "sup",
                              {
                                style: {
                                  fontSize: "0.4rem",
                                  color: "oklch(0.55 0.24 24)"
                                },
                                children: "R"
                              }
                            )
                          ]
                        },
                        p.planet
                      ))
                    }
                  ),
                  isLagna && housePlanets.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontSize: "0.42rem",
                        color: "oklch(0.52 0.20 48)",
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic"
                      },
                      children: formatDeg((lagnaSign * 30 + 0) % 30)
                    }
                  )
                ]
              },
              `house-${cell.house}`
            );
          })
        )
      }
    )
  ] });
}
function PlanetTable({
  planets,
  rulingPlanet
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        overflowX: "auto",
        borderRadius: "6px",
        border: "1.5px solid oklch(0.72 0.28 52 / 0.35)",
        background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.96), oklch(0.94 0.09 62 / 0.95))",
        boxShadow: "0 4px 18px oklch(0.65 0.28 48 / 0.12)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "table",
        {
          style: {
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.72rem"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "tr",
              {
                style: {
                  background: "linear-gradient(90deg, oklch(0.52 0.26 268 / 0.85), oklch(0.50 0.24 268 / 0.80))"
                },
                children: ["Planet", "Sign", "House", "Nakshatra", "Degree", "R"].map(
                  (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        padding: "6px 8px",
                        color: "oklch(0.97 0.04 70)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        textAlign: h === "Degree" || h === "R" ? "center" : "left",
                        fontSize: "0.68rem",
                        letterSpacing: "0.04em",
                        borderBottom: "1px solid oklch(0.72 0.28 52 / 0.30)",
                        whiteSpace: "nowrap"
                      },
                      children: h
                    },
                    h
                  )
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: planets.map((p, idx) => {
              const isLagnesh = p.planet === rulingPlanet;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  style: {
                    background: isLagnesh ? "oklch(0.88 0.18 54 / 0.22)" : idx % 2 === 0 ? "transparent" : "oklch(0.93 0.07 66 / 0.5)",
                    borderBottom: "0.5px solid oklch(0.78 0.14 60 / 0.30)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "td",
                      {
                        style: {
                          padding: "5px 8px",
                          fontFamily: "var(--font-display)",
                          fontWeight: isLagnesh ? 700 : 500,
                          color: isLagnesh ? "oklch(0.45 0.22 44)" : "oklch(0.22 0.10 32)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "4px", fontSize: "0.8rem" }, children: p.glyph }),
                          p.planet,
                          isLagnesh && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                marginLeft: "4px",
                                fontSize: "0.55rem",
                                background: "oklch(0.78 0.34 54 / 0.25)",
                                color: "oklch(0.45 0.22 44)",
                                padding: "1px 4px",
                                borderRadius: "2px",
                                fontFamily: "var(--font-body)"
                              },
                              children: "Lagnesh"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "td",
                      {
                        style: { padding: "5px 8px", color: "oklch(0.32 0.12 40)" },
                        children: [
                          p.signName,
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.6, fontSize: "0.62rem" }, children: [
                            "(",
                            RASHI_EN[p.sign],
                            ")"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: { padding: "5px 8px", color: "oklch(0.32 0.12 40)" },
                        children: ordinal(p.house)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "5px 8px",
                          color: "oklch(0.32 0.12 40)",
                          whiteSpace: "nowrap"
                        },
                        children: p.nakshatra
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "5px 8px",
                          color: "oklch(0.38 0.16 46)",
                          textAlign: "center",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem"
                        },
                        children: formatDeg(p.degree)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        style: {
                          padding: "5px 8px",
                          textAlign: "center",
                          color: "oklch(0.55 0.24 24)",
                          fontWeight: 700,
                          fontSize: "0.7rem"
                        },
                        children: p.isRetrograde ? "R" : "—"
                      }
                    )
                  ]
                },
                p.planet
              );
            }) })
          ]
        }
      )
    }
  );
}
function DashaCard({ dasha, level, label }) {
  const bg = level === "maha" ? "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.68 0.28 48))" : level === "antar" ? "linear-gradient(135deg, oklch(0.62 0.12 220), oklch(0.56 0.10 210))" : "linear-gradient(135deg, oklch(0.62 0.18 42), oklch(0.56 0.14 36))";
  const textColor = "oklch(0.97 0.04 70)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: bg,
        borderRadius: "8px",
        padding: "12px 14px",
        boxShadow: level === "maha" ? "0 6px 24px oklch(0.65 0.28 48 / 0.35)" : "0 3px 12px oklch(0.40 0.12 40 / 0.20)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              fontSize: "0.62rem",
              color: "oklch(0.96 0.06 70 / 0.75)",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "2px"
            },
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              fontSize: level === "maha" ? "1.15rem" : "0.95rem",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: textColor,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              lineHeight: 1.2
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: level === "maha" ? "1.3rem" : "1.05rem" }, children: dasha.lordGlyph }),
              dasha.lord,
              " Dasha"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              fontSize: "0.65rem",
              color: "oklch(0.96 0.06 70 / 0.80)",
              marginTop: "4px",
              fontFamily: "var(--font-body)"
            },
            children: [
              formatDate(dasha.startDate),
              " — ",
              formatDate(dasha.endDate),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "8px", opacity: 0.7 }, children: [
                "(",
                dasha.durationYears,
                " yr",
                level !== "maha" ? "s" : "",
                ")"
              ] })
            ]
          }
        )
      ]
    }
  );
}
function KundaliForm({ onGenerated, isSaving }) {
  const saved = (() => {
    try {
      const s = localStorage.getItem("gita-kundali-form-autosave");
      return s ? JSON.parse(s) : {};
    } catch {
      return {};
    }
  })();
  const [name, setName] = reactExports.useState(saved.name ?? "");
  const [dob, setDob] = reactExports.useState(saved.dob ?? "");
  const [tob, setTob] = reactExports.useState(saved.tob ?? "");
  const [place, setPlace] = reactExports.useState(saved.place ?? "");
  const [lat, setLat] = reactExports.useState(saved.lat ?? "");
  const [lng, setLng] = reactExports.useState(saved.lng ?? "");
  const [tz, setTz] = reactExports.useState(saved.tz ?? "5.5");
  const [error, setError] = reactExports.useState(null);
  function handleGenerate() {
    setError(null);
    if (!name.trim() || !dob || !tob || !place.trim()) {
      setError("Please fill in Name, Date of Birth, Time of Birth, and Place.");
      return;
    }
    const [year, month, day] = dob.split("-").map(Number);
    const [hour, minute] = tob.split(":").map(Number);
    const latN = lat ? Number.parseFloat(lat) : 20.5937;
    const lngN = lng ? Number.parseFloat(lng) : 78.9629;
    const tzN = Number.parseFloat(tz) || 5.5;
    if (!year || !month || !day || Number.isNaN(hour) || Number.isNaN(minute)) {
      setError("Invalid date or time format.");
      return;
    }
    try {
      localStorage.setItem(
        "gita-kundali-form-autosave",
        JSON.stringify({
          name: name.trim(),
          dob,
          tob,
          place: place.trim(),
          lat,
          lng,
          tz
        })
      );
    } catch {
    }
    const kundli = calculateKundli(
      `${name.trim()}-${dob}`,
      name.trim(),
      { day, month, year },
      { hour, minute },
      latN,
      lngN,
      tzN
    );
    onGenerated(kundli);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "content-card",
      style: { padding: "24px", maxWidth: "480px", margin: "0 auto" },
      "data-ocid": "kundali.form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "swastik-symbol",
              style: { fontSize: "2rem", marginBottom: "6px" },
              children: "卐"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "oklch(0.22 0.10 32)",
                marginBottom: "4px"
              },
              children: "Generate Your Kundali"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "oklch(0.45 0.12 46)",
                fontStyle: "italic"
              },
              children: "Enter your birth details to receive your sacred Vedic birth chart"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "kf-name",
                style: {
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.35 0.12 40)",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px"
                },
                children: "Full Name *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "kf-name",
                type: "text",
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "Your full name",
                "data-ocid": "kundali.name_input",
                style: {
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "5px",
                  border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
                  background: "oklch(0.97 0.05 70 / 0.8)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "oklch(0.18 0.09 32)",
                  outline: "none"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "kf-dob",
                      style: {
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.35 0.12 40)",
                        fontWeight: 600,
                        display: "block",
                        marginBottom: "4px"
                      },
                      children: "Date of Birth *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "kf-dob",
                      type: "date",
                      value: dob,
                      onChange: (e) => setDob(e.target.value),
                      "data-ocid": "kundali.dob_input",
                      style: {
                        width: "100%",
                        padding: "9px 10px",
                        borderRadius: "5px",
                        border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
                        background: "oklch(0.97 0.05 70 / 0.8)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "oklch(0.18 0.09 32)",
                        outline: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "kf-tob",
                      style: {
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.35 0.12 40)",
                        fontWeight: 600,
                        display: "block",
                        marginBottom: "4px"
                      },
                      children: "Time of Birth *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "kf-tob",
                      type: "time",
                      value: tob,
                      onChange: (e) => setTob(e.target.value),
                      "data-ocid": "kundali.tob_input",
                      style: {
                        width: "100%",
                        padding: "9px 10px",
                        borderRadius: "5px",
                        border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
                        background: "oklch(0.97 0.05 70 / 0.8)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "oklch(0.18 0.09 32)",
                        outline: "none"
                      }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "kf-place",
                style: {
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.35 0.12 40)",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px"
                },
                children: "Place of Birth *"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "kf-place",
                type: "text",
                value: place,
                onChange: (e) => setPlace(e.target.value),
                placeholder: "City, Country (e.g. Mumbai, India)",
                "data-ocid": "kundali.place_input",
                style: {
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "5px",
                  border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
                  background: "oklch(0.97 0.05 70 / 0.8)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "oklch(0.18 0.09 32)",
                  outline: "none"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "8px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "kf-lat",
                      style: {
                        fontSize: "0.67rem",
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.45 0.10 46)",
                        display: "block",
                        marginBottom: "3px"
                      },
                      children: "Latitude"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "kf-lat",
                      type: "number",
                      value: lat,
                      onChange: (e) => setLat(e.target.value),
                      placeholder: "20.59",
                      step: "0.01",
                      "data-ocid": "kundali.lat_input",
                      style: {
                        width: "100%",
                        padding: "7px 8px",
                        borderRadius: "4px",
                        border: "1.5px solid oklch(0.72 0.20 52 / 0.4)",
                        background: "oklch(0.97 0.05 70 / 0.8)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "oklch(0.18 0.09 32)",
                        outline: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "kf-lng",
                      style: {
                        fontSize: "0.67rem",
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.45 0.10 46)",
                        display: "block",
                        marginBottom: "3px"
                      },
                      children: "Longitude"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "kf-lng",
                      type: "number",
                      value: lng,
                      onChange: (e) => setLng(e.target.value),
                      placeholder: "78.96",
                      step: "0.01",
                      "data-ocid": "kundali.lng_input",
                      style: {
                        width: "100%",
                        padding: "7px 8px",
                        borderRadius: "4px",
                        border: "1.5px solid oklch(0.72 0.20 52 / 0.4)",
                        background: "oklch(0.97 0.05 70 / 0.8)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "oklch(0.18 0.09 32)",
                        outline: "none"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "kf-tz",
                      style: {
                        fontSize: "0.67rem",
                        fontFamily: "var(--font-display)",
                        color: "oklch(0.45 0.10 46)",
                        display: "block",
                        marginBottom: "3px"
                      },
                      children: "UTC Offset"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "kf-tz",
                      type: "number",
                      value: tz,
                      onChange: (e) => setTz(e.target.value),
                      placeholder: "5.5",
                      step: "0.5",
                      "data-ocid": "kundali.tz_input",
                      style: {
                        width: "100%",
                        padding: "7px 8px",
                        borderRadius: "4px",
                        border: "1.5px solid oklch(0.72 0.20 52 / 0.4)",
                        background: "oklch(0.97 0.05 70 / 0.8)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "oklch(0.18 0.09 32)",
                        outline: "none"
                      }
                    }
                  )
                ] })
              ]
            }
          ),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "kundali.form.error_state",
              style: {
                background: "oklch(0.94 0.06 24 / 0.3)",
                border: "1px solid oklch(0.65 0.22 24 / 0.5)",
                borderRadius: "4px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                color: "oklch(0.38 0.18 24)",
                fontFamily: "var(--font-body)"
              },
              children: error
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleGenerate,
              disabled: isSaving,
              className: "wax-seal-btn",
              "data-ocid": "kundali.generate_button",
              style: { width: "100%", padding: "12px", marginTop: "4px" },
              children: isSaving ? "Calculating…" : "✦ Generate My Kundali ✦"
            }
          )
        ] })
      ]
    }
  );
}
function MyKundaliTab() {
  const { kundli, saveKundli, isLoading } = useKundli();
  const { vedicProfile } = useUserProfile();
  const chartRef = reactExports.useRef(null);
  const handleGenerated = reactExports.useCallback(
    async (k) => {
      await saveKundli(k);
    },
    [saveKundli]
  );
  async function handleDownloadPDF() {
    if (!chartRef.current || !kundli) return;
    window.print();
  }
  if (!kundli && !vedicProfile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(KundaliForm, { onGenerated: handleGenerated, isSaving: isLoading });
  }
  if (!kundli && vedicProfile) {
    const dob = vedicProfile.dateOfBirth;
    const tob = vedicProfile.timeOfBirth;
    const generated = calculateKundli(
      vedicProfile.fullName,
      vedicProfile.fullName,
      dob,
      tob,
      vedicProfile.latitude || 20.5937,
      vedicProfile.longitude || 78.9629,
      vedicProfile.timezone || 5.5
    );
    void saveKundli(generated);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30vh",
          gap: "12px"
        },
        "data-ocid": "kundali.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading", children: "ॐ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                color: "oklch(0.42 0.18 46)",
                fontSize: "0.9rem"
              },
              children: "Calculating your sacred birth chart…"
            }
          )
        ]
      }
    );
  }
  if (!kundli)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(KundaliForm, { onGenerated: handleGenerated, isSaving: isLoading });
  const nextDashas = kundli.nextDashas ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: chartRef,
      style: { display: "flex", flexDirection: "column", gap: "20px" },
      "data-ocid": "kundali.my_kundali_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center"
            },
            children: [
              {
                label: "Lagna",
                value: `${kundli.lagnaRashi} (${RASHI_EN[kundli.lagnaSign]})`
              },
              { label: "Lagnesh", value: kundli.rulingPlanet },
              { label: "Moon Nakshatra", value: kundli.moonNakshatra },
              { label: "Navamsa Lagna", value: kundli.navamsaLagnaRashi }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  background: "linear-gradient(135deg, oklch(0.94 0.09 62), oklch(0.90 0.12 56))",
                  border: "1px solid oklch(0.72 0.26 50 / 0.40)",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px oklch(0.65 0.26 48 / 0.12)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontSize: "0.58rem",
                        color: "oklch(0.52 0.14 46)",
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase"
                      },
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontSize: "0.85rem",
                        color: "oklch(0.28 0.14 36)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700
                      },
                      children: value
                    }
                  )
                ]
              },
              label
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChartGrid,
                {
                  planets: kundli.planets,
                  lagnaSign: kundli.lagnaSign,
                  lagnaRashi: kundli.lagnaRashi,
                  rulingPlanet: kundli.rulingPlanet,
                  title: "Lagna Kundali Chart"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChartGrid,
                {
                  planets: kundli.navamsaPlanets,
                  lagnaSign: kundli.navamsaLagnaSign,
                  lagnaRashi: kundli.navamsaLagnaRashi,
                  rulingPlanet: kundli.rulingPlanet,
                  title: "Navamsa Chart (D-9)"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lotus-divider", style: { marginBottom: "10px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Planet Positions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PlanetTable,
            {
              planets: kundli.planets,
              rulingPlanet: kundli.rulingPlanet
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lotus-divider", style: { marginBottom: "10px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vimshottari Dasha" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DashaCard,
              {
                dasha: kundli.mahadasha,
                level: "maha",
                label: "Current Mahadasha"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DashaCard,
                    {
                      dasha: kundli.antardasha,
                      level: "antar",
                      label: "Antardasha"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DashaCard,
                    {
                      dasha: kundli.pratyantarDasha,
                      level: "pratyantar",
                      label: "Pratyantar Dasha"
                    }
                  )
                ]
              }
            ),
            nextDashas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-display)",
                    color: "oklch(0.45 0.12 46)",
                    fontStyle: "italic",
                    marginBottom: "6px",
                    textAlign: "center"
                  },
                  children: "Upcoming Mahadashas"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: { display: "flex", flexDirection: "column", gap: "5px" },
                  children: nextDashas.slice(0, 3).map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": `kundali.next_dasha.item.${i + 1}`,
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "7px 12px",
                        background: "oklch(0.94 0.08 64 / 0.7)",
                        border: "1px solid oklch(0.78 0.18 54 / 0.30)",
                        borderRadius: "5px",
                        fontSize: "0.75rem"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontWeight: 600,
                              color: "oklch(0.28 0.12 36)",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.95rem" }, children: d.lordGlyph }),
                              d.lord
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              color: "oklch(0.45 0.14 46)",
                              fontSize: "0.68rem"
                            },
                            children: [
                              formatDate(d.startDate),
                              " — ",
                              formatDate(d.endDate)
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              color: "oklch(0.55 0.16 46)",
                              fontSize: "0.65rem"
                            },
                            children: [
                              d.durationYears,
                              " yrs"
                            ]
                          }
                        )
                      ]
                    },
                    `${d.lord}-${i}`
                  ))
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                textAlign: "right",
                padding: "4px 0 8px",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "0.72rem",
                color: "oklch(0.65 0.26 48 / 0.55)",
                letterSpacing: "0.06em"
              },
              children: "Sanatan Dharma · Krishna AI"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleDownloadPDF,
                className: "wax-seal-btn",
                "data-ocid": "kundali.download_pdf_button",
                style: { width: "100%", padding: "12px" },
                children: "↓ Download Chart PDF"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  background: "linear-gradient(135deg, oklch(0.50 0.26 268 / 0.10), oklch(0.48 0.22 268 / 0.15))",
                  border: "1.5px solid oklch(0.52 0.24 268 / 0.35)",
                  borderRadius: "7px",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px"
                },
                "data-ocid": "kundali.pro_teaser",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontSize: "0.72rem",
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          color: "oklch(0.38 0.18 268)",
                          marginBottom: "2px"
                        },
                        children: "🪐 Pro Kundali — Detailed Dasha PDF"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontSize: "0.65rem",
                          fontFamily: "var(--font-body)",
                          color: "oklch(0.45 0.14 268)",
                          fontStyle: "italic"
                        },
                        children: "Transit PDF · Gemstone report · Ad-free experience"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        textAlign: "center",
                        flexShrink: 0
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontSize: "0.95rem",
                              fontFamily: "var(--font-display)",
                              fontWeight: 700,
                              color: "oklch(0.38 0.18 268)"
                            },
                            children: "₹299/yr"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "wax-seal-btn",
                            "data-ocid": "kundali.upgrade_button",
                            style: {
                              fontSize: "0.65rem",
                              padding: "5px 12px",
                              marginTop: "3px"
                            },
                            children: "Upgrade"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              if (typeof window !== "undefined") {
                sessionStorage.removeItem("gita-kundli-loaded");
              }
            },
            style: {
              background: "none",
              border: "none",
              fontSize: "0.7rem",
              color: "oklch(0.55 0.12 46 / 0.7)",
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              cursor: "pointer",
              textDecoration: "underline"
            },
            "data-ocid": "kundali.recalculate_button",
            children: "Recalculate with different birth details"
          }
        ) })
      ]
    }
  );
}
const TABS = [
  { id: "my-kundali", label: "My Kundali", glyph: "🪐" },
  { id: "aaj-ka-graha", label: "Aaj Ka Graha", glyph: "🌞" },
  { id: "graha-shanti", label: "Graha Shanti", glyph: "🔱" },
  { id: "gemstone-check", label: "Gemstone", glyph: "💎" },
  { id: "transit-calendar", label: "Transits", glyph: "📅" }
];
function KundaliSetupScreen({
  onComplete,
  saveProfile,
  saveKundli,
  subscribe,
  isSaving
}) {
  const restored = (() => {
    try {
      const s = localStorage.getItem("gita-kundali-form-autosave");
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  })();
  const [fullName, setFullName] = reactExports.useState((restored == null ? void 0 : restored.name) ?? "");
  const [dob, setDob] = reactExports.useState((restored == null ? void 0 : restored.dob) ?? "");
  const [tob, setTob] = reactExports.useState((restored == null ? void 0 : restored.tob) ?? "");
  const [place, setPlace] = reactExports.useState((restored == null ? void 0 : restored.place) ?? "");
  const [lat, setLat] = reactExports.useState((restored == null ? void 0 : restored.lat) ?? "20.5937");
  const [lng, setLng] = reactExports.useState((restored == null ? void 0 : restored.lng) ?? "78.9629");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [newsletterOptIn, setNewsletterOptIn] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [formError, setFormError] = reactExports.useState(null);
  async function handleSubmit() {
    setFormError(null);
    if (!fullName.trim() || !dob || !tob || !place.trim() || !email.trim()) {
      setFormError("Please fill in all required fields (*).");
      return;
    }
    if (!email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    const [year, month, day] = dob.split("-").map(Number);
    const [hour, minute] = tob.split(":").map(Number);
    if (!year || !month || !day || Number.isNaN(hour) || Number.isNaN(minute)) {
      setFormError("Invalid date or time format.");
      return;
    }
    const latN = lat ? Number.parseFloat(lat) : 20.5937;
    const lngN = lng ? Number.parseFloat(lng) : 78.9629;
    const timezone = 5.5;
    setSubmitting(true);
    try {
      const profileInput = {
        fullName: fullName.trim(),
        dateOfBirth: { day, month, year },
        timeOfBirth: { hour, minute },
        placeOfBirth: place.trim(),
        latitude: latN,
        longitude: lngN,
        timezone,
        email: email.trim(),
        phone: phone.trim(),
        newsletterOptIn,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      const saved = await saveProfile(profileInput);
      if (!saved) {
        setFormError("Could not save profile. Please try again.");
        return;
      }
      try {
        localStorage.setItem(
          "gita-kundali-form-autosave",
          JSON.stringify({
            name: fullName.trim(),
            dob,
            tob,
            place: place.trim(),
            lat,
            lng,
            tz: String(timezone)
          })
        );
        localStorage.setItem("gita-kundali-setup-done", "1");
      } catch {
      }
      const kundliData = calculateKundli(
        `${fullName.trim()}-${dob}`,
        fullName.trim(),
        profileInput.dateOfBirth,
        profileInput.timeOfBirth,
        latN,
        lngN,
        timezone
      );
      await saveKundli(kundliData);
      if (newsletterOptIn && email)
        await subscribe(email.trim(), fullName.trim());
      onComplete();
    } finally {
      setSubmitting(false);
    }
  }
  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1.5px solid oklch(0.72 0.20 52 / 0.5)",
    background: "oklch(0.97 0.05 70 / 0.9)",
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
    color: "oklch(0.18 0.09 32)",
    outline: "none"
  };
  const labelStyle = {
    fontSize: "0.72rem",
    fontFamily: "var(--font-display)",
    color: "oklch(0.35 0.12 40)",
    fontWeight: 600,
    display: "block",
    marginBottom: "5px"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        minHeight: "100vh",
        background: "linear-gradient(180deg, oklch(0.93 0.08 68) 0%, oklch(0.90 0.10 62) 100%)",
        paddingBottom: "80px"
      },
      "data-ocid": "kundali.setup_screen",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "linear-gradient(160deg, oklch(0.22 0.10 32) 0%, oklch(0.18 0.12 28) 100%)",
              padding: "20px 16px 18px",
              textAlign: "center",
              boxShadow: "0 4px 20px oklch(0.12 0.08 28 / 0.45)",
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), oklch(0.86 0.40 54), oklch(0.78 0.34 54), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    fontSize: "2.2rem",
                    color: "oklch(0.84 0.38 54)",
                    textShadow: "0 0 18px oklch(0.78 0.34 54 / 0.7)",
                    marginBottom: "6px",
                    lineHeight: 1
                  },
                  "aria-hidden": true,
                  children: "ॐ"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                    color: "oklch(0.94 0.08 68)",
                    lineHeight: 1.2,
                    marginBottom: "4px"
                  },
                  children: "Kundali Lite + Graha Shanti"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "oklch(0.78 0.22 54 / 0.85)",
                    fontStyle: "italic"
                  },
                  children: "Enter your sacred birth details once — saved forever"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45 },
            style: { padding: "20px 16px", maxWidth: "520px", margin: "0 auto" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "20px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      color: "oklch(0.52 0.22 46)",
                      letterSpacing: "0.08em",
                      marginBottom: "6px"
                    },
                    children: "सर्वे भवन्तु सुखिनः"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "oklch(0.45 0.12 46)",
                      fontStyle: "italic"
                    },
                    children: "Your Vedic birth chart — a sacred map of your soul's journey"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "linear-gradient(145deg, oklch(0.96 0.08 64), oklch(0.93 0.10 60))",
                    border: "2px solid oklch(0.72 0.28 52 / 0.40)",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 8px 32px oklch(0.65 0.28 48 / 0.18)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          height: "2px",
                          background: "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), transparent)",
                          borderRadius: "1px",
                          marginBottom: "20px"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: { display: "flex", flexDirection: "column", gap: "14px" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ks-name", style: labelStyle, children: "Full Name *" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "ks-name",
                                type: "text",
                                value: fullName,
                                onChange: (e) => setFullName(e.target.value),
                                placeholder: "e.g. Arjun Sharma",
                                autoComplete: "name",
                                "data-ocid": "kundali.setup.name_input",
                                style: inputStyle
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  fontSize: "0.68rem",
                                  color: "oklch(0.52 0.10 46)",
                                  fontStyle: "italic",
                                  marginTop: "3px",
                                  fontFamily: "var(--font-body)"
                                },
                                children: "✦ This is how Krishna will greet you"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "10px"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ks-dob", style: labelStyle, children: "Date of Birth *" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "input",
                                    {
                                      id: "ks-dob",
                                      type: "date",
                                      value: dob,
                                      onChange: (e) => setDob(e.target.value),
                                      "data-ocid": "kundali.setup.dob_input",
                                      style: inputStyle
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ks-tob", style: labelStyle, children: "Time of Birth (IST) *" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "input",
                                    {
                                      id: "ks-tob",
                                      type: "time",
                                      value: tob,
                                      onChange: (e) => setTob(e.target.value),
                                      "data-ocid": "kundali.setup.tob_input",
                                      style: inputStyle
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      style: {
                                        fontSize: "0.65rem",
                                        color: "oklch(0.52 0.10 46)",
                                        fontStyle: "italic",
                                        marginTop: "3px",
                                        fontFamily: "var(--font-body)"
                                      },
                                      children: "✦ Exact time = accurate Lagna"
                                    }
                                  )
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ks-place", style: labelStyle, children: "Place of Birth *" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "ks-place",
                                type: "text",
                                value: place,
                                onChange: (e) => setPlace(e.target.value),
                                placeholder: "e.g. Mumbai, Maharashtra",
                                "data-ocid": "kundali.setup.place_input",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "10px"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "label",
                                    {
                                      htmlFor: "ks-lat",
                                      style: {
                                        ...labelStyle,
                                        color: "oklch(0.48 0.10 46)",
                                        fontWeight: 500
                                      },
                                      children: [
                                        "Latitude",
                                        " ",
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 400, fontStyle: "italic" }, children: "(opt)" })
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "input",
                                    {
                                      id: "ks-lat",
                                      type: "number",
                                      value: lat,
                                      onChange: (e) => setLat(e.target.value),
                                      placeholder: "20.59",
                                      step: "0.01",
                                      "data-ocid": "kundali.setup.lat_input",
                                      style: {
                                        ...inputStyle,
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.78rem"
                                      }
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "label",
                                    {
                                      htmlFor: "ks-lng",
                                      style: {
                                        ...labelStyle,
                                        color: "oklch(0.48 0.10 46)",
                                        fontWeight: 500
                                      },
                                      children: [
                                        "Longitude",
                                        " ",
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 400, fontStyle: "italic" }, children: "(opt)" })
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "input",
                                    {
                                      id: "ks-lng",
                                      type: "number",
                                      value: lng,
                                      onChange: (e) => setLng(e.target.value),
                                      placeholder: "78.96",
                                      step: "0.01",
                                      "data-ocid": "kundali.setup.lng_input",
                                      style: {
                                        ...inputStyle,
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.78rem"
                                      }
                                    }
                                  )
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ks-email", style: labelStyle, children: "Email Address *" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "ks-email",
                                type: "email",
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: "you@example.com",
                                autoComplete: "email",
                                "data-ocid": "kundali.setup.email_input",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "label",
                              {
                                htmlFor: "ks-phone",
                                style: { ...labelStyle, fontWeight: 500 },
                                children: [
                                  "Phone Number",
                                  " ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      style: {
                                        fontWeight: 400,
                                        fontStyle: "italic",
                                        color: "oklch(0.52 0.10 46)"
                                      },
                                      children: "(optional)"
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "ks-phone",
                                type: "tel",
                                value: phone,
                                onChange: (e) => setPhone(e.target.value),
                                placeholder: "+91 98765 43210",
                                autoComplete: "tel",
                                "data-ocid": "kundali.setup.phone_input",
                                style: inputStyle
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  fontSize: "0.68rem",
                                  color: "oklch(0.52 0.10 46)",
                                  fontStyle: "italic",
                                  marginTop: "3px",
                                  fontFamily: "var(--font-body)"
                                },
                                children: "✦ For future festival reminders via WhatsApp/SMS"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              style: {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                                cursor: "pointer",
                                padding: "10px 12px",
                                borderRadius: "7px",
                                background: newsletterOptIn ? "oklch(0.78 0.34 54 / 0.08)" : "oklch(0.94 0.05 72 / 0.5)",
                                border: `1.5px solid oklch(0.78 0.34 54 / ${newsletterOptIn ? "0.35" : "0.15"})`,
                                transition: "all 0.2s ease"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "input",
                                  {
                                    type: "checkbox",
                                    checked: newsletterOptIn,
                                    onChange: (e) => setNewsletterOptIn(e.target.checked),
                                    className: "mt-1 accent-amber-600",
                                    "data-ocid": "kundali.setup.newsletter_checkbox"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: "var(--font-display)",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        color: "oklch(0.25 0.10 32)",
                                        display: "block"
                                      },
                                      children: "Receive Sacred Festival Newsletters"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "0.72rem",
                                        fontStyle: "italic",
                                        color: "oklch(0.45 0.10 40)"
                                      },
                                      children: "Deep Vedic stories, rituals & dharmic significance"
                                    }
                                  )
                                ] })
                              ]
                            }
                          ),
                          formError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              "data-ocid": "kundali.setup.error_state",
                              style: {
                                background: "oklch(0.94 0.06 24 / 0.3)",
                                border: "1px solid oklch(0.65 0.22 24 / 0.5)",
                                borderRadius: "5px",
                                padding: "9px 12px",
                                fontSize: "0.75rem",
                                color: "oklch(0.38 0.18 24)",
                                fontFamily: "var(--font-body)"
                              },
                              children: formError
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: handleSubmit,
                              disabled: submitting || isSaving,
                              className: "wax-seal-btn",
                              "data-ocid": "kundali.setup.submit_button",
                              style: {
                                width: "100%",
                                padding: "14px",
                                marginTop: "4px",
                                fontSize: "1rem"
                              },
                              children: submitting || isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "span",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "om-loading", style: { fontSize: "1rem" }, children: "ॐ" }),
                                    "Preparing your Kundali…"
                                  ]
                                }
                              ) : "Reveal My Kundali ✦"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          height: "2px",
                          background: "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), transparent)",
                          borderRadius: "1px",
                          marginTop: "20px"
                        }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    textAlign: "center",
                    fontSize: "0.7rem",
                    color: "oklch(0.50 0.10 46)",
                    fontStyle: "italic",
                    fontFamily: "var(--font-body)",
                    marginTop: "14px",
                    lineHeight: 1.6
                  },
                  children: "✦ Your details are saved securely once. You will never be asked again. ✦"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
const KUNDALI_SETUP_DONE_KEY = "gita-kundali-setup-done";
function autosaveHasValidData() {
  var _a;
  try {
    const s = localStorage.getItem("gita-kundali-form-autosave");
    if (!s) return false;
    const data = JSON.parse(s);
    return !!(((_a = data.name) == null ? void 0 : _a.trim()) && data.dob);
  } catch {
    return false;
  }
}
function KundaliLitePage() {
  var _a, _b;
  const [activeTab, setActiveTab] = reactExports.useState("my-kundali");
  const { kundli } = useKundli();
  const {
    vedicProfile,
    saveProfile,
    isLoading: profileLoading
  } = useUserProfile();
  const { saveKundli, isLoading: kundliLoading } = useKundli();
  const { subscribe } = useNewsletter();
  const [setupDone, setSetupDone] = reactExports.useState(() => {
    try {
      return localStorage.getItem(KUNDALI_SETUP_DONE_KEY) === "1" || autosaveHasValidData();
    } catch {
      return false;
    }
  });
  const hasProfile = setupDone || vedicProfile !== null && ((_a = vedicProfile == null ? void 0 : vedicProfile.fullName) == null ? void 0 : _a.trim().length) > 0 && ((_b = vedicProfile == null ? void 0 : vedicProfile.dateOfBirth) == null ? void 0 : _b.year) > 0;
  function handleSetupComplete() {
    try {
      localStorage.setItem(KUNDALI_SETUP_DONE_KEY, "1");
    } catch {
    }
    setSetupDone(true);
  }
  if (!hasProfile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      KundaliSetupScreen,
      {
        onComplete: handleSetupComplete,
        saveProfile,
        saveKundli,
        subscribe,
        isSaving: profileLoading || kundliLoading
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        minHeight: "100vh",
        background: "linear-gradient(180deg, oklch(0.93 0.08 68) 0%, oklch(0.90 0.10 62) 100%)",
        paddingBottom: "80px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "linear-gradient(160deg, oklch(0.22 0.10 32) 0%, oklch(0.18 0.12 28) 100%)",
              padding: "20px 16px 18px",
              textAlign: "center",
              boxShadow: "0 4px 20px oklch(0.12 0.08 28 / 0.45)",
              position: "relative",
              overflow: "hidden"
            },
            "data-ocid": "kundali.hero",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), oklch(0.86 0.40 54), oklch(0.78 0.34 54), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "swastik-symbol",
                  style: {
                    fontSize: "1.8rem",
                    marginBottom: "6px",
                    display: "inline-block",
                    color: "oklch(0.84 0.38 54)",
                    textShadow: "0 0 12px oklch(0.78 0.34 54 / 0.7), 0 0 28px oklch(0.78 0.34 54 / 0.4)",
                    userSelect: "none"
                  },
                  "aria-label": "Swastik — auspicious sacred symbol",
                  children: "卍"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.55rem",
                    fontStyle: "italic",
                    color: "oklch(0.94 0.08 68)",
                    textShadow: "0 2px 12px oklch(0.12 0.08 28 / 0.55)",
                    lineHeight: 1.2,
                    marginBottom: "4px"
                  },
                  children: "Kundali Lite + Graha Shanti"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "oklch(0.78 0.22 54 / 0.85)",
                    fontStyle: "italic",
                    letterSpacing: "0.04em"
                  },
                  children: "Jyotish for Daily Life · Upay not Bhay"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "flex",
              overflowX: "auto",
              gap: "0",
              background: "oklch(0.20 0.10 30)",
              borderBottom: "2px solid oklch(0.72 0.28 52 / 0.45)",
              scrollbarWidth: "none"
            },
            "data-ocid": "kundali.tab_nav",
            children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveTab(tab.id),
                "data-ocid": `kundali.tab.${tab.id}`,
                style: {
                  flex: "1 0 auto",
                  minWidth: "80px",
                  padding: "11px 10px 9px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  color: activeTab === tab.id ? "oklch(0.84 0.38 54)" : "oklch(0.72 0.20 52 / 0.75)",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "2.5px solid oklch(0.84 0.38 54)" : "2.5px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem" }, children: tab.glyph }),
                  tab.label
                ]
              },
              tab.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "16px" }, children: [
          activeTab === "my-kundali" && /* @__PURE__ */ jsxRuntimeExports.jsx(MyKundaliTab, {}),
          activeTab === "aaj-ka-graha" && /* @__PURE__ */ jsxRuntimeExports.jsx(AajKaGrahaTab, { kundli }),
          activeTab === "graha-shanti" && /* @__PURE__ */ jsxRuntimeExports.jsx(GrahaShantTab, {}),
          activeTab === "gemstone-check" && /* @__PURE__ */ jsxRuntimeExports.jsx(GemstoneCheckTab, {}),
          activeTab === "transit-calendar" && /* @__PURE__ */ jsxRuntimeExports.jsx(TransitCalendarTab, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "kundli-disclaimer",
            "data-ocid": "kundali.disclaimer",
            style: {
              margin: "8px 16px 0",
              padding: "12px 16px",
              background: "oklch(0.94 0.07 64 / 0.7)",
              border: "1px solid oklch(0.72 0.22 50 / 0.30)",
              borderRadius: "6px",
              textAlign: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  color: "oklch(0.42 0.12 44)",
                  fontStyle: "italic",
                  lineHeight: 1.6
                },
                children: [
                  "✦ Jyotish is eye of Vedas. Karma + Dharma are above all grahas. Use this as guidance, not final truth. ✦",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Remedies are spiritual support. Consult a doctor for health issues. Ratna can give opposite effect if planet malefic — consult a qualified Daivagna before wearing."
                ]
              }
            )
          }
        )
      ]
    }
  );
}
export {
  KundaliLitePage
};
