/**
 * Stotra Sangraha — Complete Sacred Text Data
 * All texts are complete and untruncated.
 * Each section is a self-contained unit for display.
 */

export interface StotramSection {
  title: string;
  content: string;
}

export interface Stotram {
  id: string;
  name: string;
  nameHindi: string;
  deity: string;
  symbol: string;
  category: StotramCategory;
  intro: string;
  benefits: string;
  instructions: string;
  sections: StotramSection[];
  language: string;
  relatedMantras?: string[];
}

export type StotramCategory =
  | "Vedic"
  | "Bhakti"
  | "Vaishnava"
  | "Shiva"
  | "Shakta"
  | "Kavach"
  | "Guru";

export const STOTRAM_CATEGORIES: Record<
  StotramCategory,
  { label: string; icon: string; color: string }
> = {
  Vedic: { label: "Vedic Mantras", icon: "☀️", color: "oklch(0.72 0.3 52)" },
  Bhakti: { label: "Bhakti Stotras", icon: "🙏", color: "oklch(0.62 0.28 32)" },
  Vaishnava: {
    label: "Krishna / Vaishnava",
    icon: "🔱",
    color: "oklch(0.52 0.26 268)",
  },
  Shiva: { label: "Shiva / Shakta", icon: "🌙", color: "oklch(0.48 0.22 280)" },
  Shakta: { label: "Devi Stotras", icon: "🌺", color: "oklch(0.65 0.28 340)" },
  Kavach: {
    label: "Protective Kavach",
    icon: "🛡️",
    color: "oklch(0.55 0.24 220)",
  },
  Guru: { label: "Guru Stotras", icon: "🪔", color: "oklch(0.68 0.26 46)" },
};

export { HANUMAN_CHALISA } from "./stotra-hanuman-chalisa";
export { VISHNU_SAHASRANAMA } from "./stotra-vishnu-sahasranama";
export {
  GAYATRI_MANTRA,
  MAHA_MRITYUNJAYA,
  SHIVA_PANCHAKSHARA,
  SHIVA_TANDAVA,
  DURGA_STUTI,
  GURU_STOTRAM,
  SURYA_KAVACHAM,
  SRI_SUKTAM,
  ADITYA_HRIDAYAM,
  PURUSHA_SUKTA,
  KANAKADHARA_STOTRAM,
  NARAYANA_SUKTAM,
  RUDRASHTAKAM,
  SHRI_RAMA_STUTI,
  KRISHNA_ASHTAKAM,
  GANESH_ATHARVASHIRSHA,
  NAVAGRAHA_STOTRAM,
  SARASWATI_STOTRAM,
  SOUNDARYA_LAHARI,
} from "./stotra-library";

import { HANUMAN_CHALISA } from "./stotra-hanuman-chalisa";
import {
  ADITYA_HRIDAYAM,
  DURGA_STUTI,
  GANESH_ATHARVASHIRSHA,
  GAYATRI_MANTRA,
  GURU_STOTRAM,
  KANAKADHARA_STOTRAM,
  KRISHNA_ASHTAKAM,
  MAHA_MRITYUNJAYA,
  NARAYANA_SUKTAM,
  NAVAGRAHA_STOTRAM,
  PURUSHA_SUKTA,
  RUDRASHTAKAM,
  SARASWATI_STOTRAM,
  SHIVA_PANCHAKSHARA,
  SHIVA_TANDAVA,
  SHRI_RAMA_STUTI,
  SOUNDARYA_LAHARI,
  SRI_SUKTAM,
  SURYA_KAVACHAM,
} from "./stotra-library";
import { VISHNU_SAHASRANAMA } from "./stotra-vishnu-sahasranama";

export const ALL_STOTRAMS: Stotram[] = [
  HANUMAN_CHALISA,
  VISHNU_SAHASRANAMA,
  GAYATRI_MANTRA,
  MAHA_MRITYUNJAYA,
  SHIVA_TANDAVA,
  ADITYA_HRIDAYAM,
  PURUSHA_SUKTA,
  SRI_SUKTAM,
  DURGA_STUTI,
  KANAKADHARA_STOTRAM,
  SOUNDARYA_LAHARI,
  NARAYANA_SUKTAM,
  RUDRASHTAKAM,
  SHRI_RAMA_STUTI,
  KRISHNA_ASHTAKAM,
  GANESH_ATHARVASHIRSHA,
  NAVAGRAHA_STOTRAM,
  SHIVA_PANCHAKSHARA,
  SARASWATI_STOTRAM,
  GURU_STOTRAM,
  SURYA_KAVACHAM,
];

export const STOTRAM_BY_ID: Record<string, Stotram> = Object.fromEntries(
  ALL_STOTRAMS.map((s) => [s.id, s]),
);
