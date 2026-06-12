import type { KundliData as BackendKundli } from "@/backend.d";
import { getBackend } from "@/lib/backend-client";
import type { KundliData } from "@/types/user-profile";
import { useCallback, useEffect, useState } from "react";

const KUNDLI_LOADED_KEY = "gita-kundli-loaded";

/** Devanagari glyph lookup by planet name (Sanskrit or English variants). */
const PLANET_GLYPH: Record<string, string> = {
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
  Ketu: "के",
};

function planetGlyph(name: string): string {
  return PLANET_GLYPH[name] ?? name;
}

/** Convert backend KundliData (bigint fields) to frontend KundliData (number fields). */
function toFrontendKundli(bk: BackendKundli): KundliData {
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
      nakshatra: p.nakshatra,
    })),
    mahadasha: {
      lord: bk.mahadasha.lord,
      lordGlyph: bk.mahadasha.lord,
      startDate: Number(bk.mahadasha.startDate),
      endDate: Number(bk.mahadasha.endDate),
      durationYears: bk.mahadasha.durationYears,
    },
    antardasha: {
      lord: bk.antardasha.lord,
      lordGlyph: bk.antardasha.lord,
      startDate: Number(bk.antardasha.startDate),
      endDate: Number(bk.antardasha.endDate),
      durationYears: bk.antardasha.durationYears,
    },
    pratyantarDasha: {
      lord: bk.pratyantarDasha.lord,
      lordGlyph: bk.pratyantarDasha.lord,
      startDate: Number(bk.pratyantarDasha.startDate),
      endDate: Number(bk.pratyantarDasha.endDate),
      durationYears: bk.pratyantarDasha.durationYears,
    },
    nextDashas: bk.nextDashas.map((d) => ({
      lord: d.lord,
      lordGlyph: d.lord,
      startDate: Number(d.startDate),
      endDate: Number(d.endDate),
      durationYears: d.durationYears,
    })),
    navamsaLagnaSign: Number(bk.navamsaLagnaSign),
    navamsaLagnaRashi:
      [
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
      ][Number(bk.navamsaLagnaSign)] ?? bk.lagnaRashi,
    navamsaPlanets: bk.navamsaPlanets.map((p) => ({
      planet: p.planet,
      glyph: planetGlyph(p.planet),
      sign: Number(p.sign),
      signName: String(Number(p.sign)),
      degree: p.degree,
      house: Number(p.house),
      isRetrograde: p.retrograde,
      nakshatra: p.nakshatra,
    })),
    moonNakshatra: bk.planets.find((p) => p.planet === "Moon")?.nakshatra ?? "",
    moonNakshatraLord:
      bk.planets.find((p) => p.planet === "Moon")?.nakshatraLord ?? "",
    calculatedAt: Number(bk.calculatedAt) / 1_000_000,
  };
}

export function useKundli() {
  const [kundli, setKundliState] = useState<KundliData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load kundli from backend on mount (once per session)
  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(KUNDLI_LOADED_KEY);
    if (alreadyLoaded) return;
    sessionStorage.setItem(KUNDLI_LOADED_KEY, "1");

    getBackend()
      .getKundliData()
      .then((bk) => {
        if (bk) {
          setKundliState(toFrontendKundli(bk));
        }
      })
      .catch(() => {
        // Backend unavailable — silently skip
      });
  }, []);

  const saveKundli = useCallback(async (data: KundliData): Promise<boolean> => {
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

  const clearKundli = useCallback(() => {
    setKundliState(null);
  }, []);

  return { kundli, saveKundli, clearKundli, isLoading, error };
}
