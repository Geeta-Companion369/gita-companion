// ─── Birth Date / Time ───────────────────────────────────────────────────────

export interface DateOfBirth {
  day: number;
  month: number;
  year: number;
}

export interface TimeOfBirth {
  hour: number;
  minute: number;
}

// ─── User Profile ─────────────────────────────────────────────────────────────

export interface UserProfileInput {
  fullName: string;
  dateOfBirth: DateOfBirth;
  timeOfBirth: TimeOfBirth;
  placeOfBirth: string;
  latitude: number;
  longitude: number;
  timezone: number; // UTC offset in hours (e.g., 5.5 for IST)
  email: string;
  phone: string;
  newsletterOptIn: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface StoredUserProfile extends UserProfileInput {
  id: string;
}

// ─── Planet Placement ─────────────────────────────────────────────────────────

export interface PlanetPlacement {
  planet: string; // Sanskrit name, e.g. "Surya"
  glyph: string; // Devanagari glyph, e.g. "सू"
  sign: number; // 0-11 (Mesha=0 ... Meena=11)
  signName: string; // Sanskrit rashi name
  degree: number; // 0-29.99
  house: number; // 1-12
  isRetrograde: boolean;
  nakshatra: string; // Sanskrit nakshatra name
}

// ─── Dasha Entry ──────────────────────────────────────────────────────────────

export interface DashaEntry {
  lord: string; // Sanskrit name of dasha lord
  lordGlyph: string; // Devanagari glyph
  startDate: number; // Unix timestamp ms
  endDate: number;
  durationYears: number;
}

// ─── Kundli Data ──────────────────────────────────────────────────────────────

export interface KundliData {
  profileId: string;
  lagnaSign: number; // 0-11
  lagnaRashi: string; // Sanskrit rashi name
  rulingPlanet: string; // Sanskrit name
  rulingPlanetGlyph: string; // Devanagari glyph
  planets: PlanetPlacement[];
  mahadasha: DashaEntry;
  antardasha: DashaEntry;
  pratyantarDasha: DashaEntry;
  nextDashas: DashaEntry[];
  navamsaLagnaSign: number;
  navamsaLagnaRashi: string;
  navamsaPlanets: PlanetPlacement[];
  moonNakshatra: string;
  moonNakshatraLord: string;
  calculatedAt: number;
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

export interface EmailSubscriber {
  email: string;
  name: string;
  subscribedAt: number;
  active: boolean;
}

// ─── Admin Config ─────────────────────────────────────────────────────────────

export interface AdminConfig {
  emailSenderAddress: string;
  emailEnabled: boolean;
  newsletterEnabled: boolean;
  subscriptionPriceMonthly: number;
}
