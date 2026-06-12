import type {
  UserProfileInput as BackendInput,
  UserProfile as BackendProfile,
} from "@/backend.d";
import { getBackend } from "@/lib/backend-client";
import type { Language, UserProfile } from "@/types/gita";
import type { UserProfileInput } from "@/types/user-profile";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "gita-user-profile";
const PROFILE_LOADED_KEY = "gita-profile-loaded";

// Legacy profile shape kept for backward compat with existing hooks
const DEFAULT_LEGACY: UserProfile = {
  name: "",
  arjunMode: false,
  language: "english",
  voiceGender: "male",
  joinDate: new Date().toISOString().split("T")[0],
};

function loadLegacy(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_LEGACY };
    return { ...DEFAULT_LEGACY, ...JSON.parse(raw) } as UserProfile;
  } catch {
    return { ...DEFAULT_LEGACY };
  }
}

function toBackendInput(input: UserProfileInput): BackendInput {
  return {
    fullName: input.fullName,
    dateOfBirth: {
      day: BigInt(input.dateOfBirth.day),
      month: BigInt(input.dateOfBirth.month),
      year: BigInt(input.dateOfBirth.year),
    },
    timeOfBirth: {
      hour: BigInt(input.timeOfBirth.hour),
      minute: BigInt(input.timeOfBirth.minute),
    },
    placeOfBirth: input.placeOfBirth,
    latitude: input.latitude,
    longitude: input.longitude,
    timezone: String(input.timezone),
    email: input.email,
    phone: input.phone,
    newsletterOptIn: input.newsletterOptIn,
  };
}

function toFrontendProfile(bp: BackendProfile): UserProfileInput {
  return {
    fullName: bp.fullName,
    dateOfBirth: {
      day: Number(bp.dateOfBirth.day),
      month: Number(bp.dateOfBirth.month),
      year: Number(bp.dateOfBirth.year),
    },
    timeOfBirth: {
      hour: Number(bp.timeOfBirth.hour),
      minute: Number(bp.timeOfBirth.minute),
    },
    placeOfBirth: bp.placeOfBirth,
    latitude: bp.latitude,
    longitude: bp.longitude,
    timezone: Number.parseFloat(bp.timezone) || 0,
    email: bp.email,
    phone: bp.phone,
    newsletterOptIn: bp.newsletterOptIn,
    createdAt: Number(bp.createdAt) / 1_000_000,
    updatedAt: Number(bp.updatedAt) / 1_000_000,
  };
}

export function useUserProfile() {
  const [profile, setProfileState] = useState<UserProfile>(loadLegacy);
  const [vedicProfile, setVedicProfileState] =
    useState<UserProfileInput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Persist legacy profile to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // silently fail
    }
  }, [profile]);

  // Load profile from backend on mount (once)
  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(PROFILE_LOADED_KEY);
    if (alreadyLoaded) return;
    sessionStorage.setItem(PROFILE_LOADED_KEY, "1");

    getBackend()
      .getUserProfile()
      .then((bp) => {
        if (bp) {
          const fp = toFrontendProfile(bp);
          setVedicProfileState(fp);
          setProfileState((prev) => ({ ...prev, name: bp.fullName }));
        } else {
          // Backend returned null — try autosave as fallback so Kundali form doesn't re-show
          try {
            const raw = localStorage.getItem("gita-kundali-form-autosave");
            if (raw) {
              const saved = JSON.parse(raw) as Record<string, string>;
              if (saved.name?.trim() && saved.dob) {
                const [year, month, day] = (saved.dob ?? "")
                  .split("-")
                  .map(Number);
                const [hour, minute] = (saved.tob ?? "00:00")
                  .split(":")
                  .map(Number);
                setVedicProfileState({
                  fullName: saved.name.trim(),
                  dateOfBirth: {
                    day: day ?? 1,
                    month: month ?? 1,
                    year: year ?? 2000,
                  },
                  timeOfBirth: { hour: hour ?? 0, minute: minute ?? 0 },
                  placeOfBirth: saved.place ?? "",
                  latitude: saved.lat ? Number.parseFloat(saved.lat) : 20.5937,
                  longitude: saved.lng ? Number.parseFloat(saved.lng) : 78.9629,
                  timezone: saved.tz ? Number.parseFloat(saved.tz) : 5.5,
                  email: "",
                  phone: "",
                  newsletterOptIn: false,
                  createdAt: Date.now(),
                  updatedAt: Date.now(),
                });
                setProfileState((prev) => ({
                  ...prev,
                  name: saved.name.trim(),
                }));
              }
            }
          } catch {
            /* silent */
          }
        }
      })
      .catch(() => {
        // Backend unavailable — try autosave as fallback so Kundali form doesn't re-show
        try {
          const raw = localStorage.getItem("gita-kundali-form-autosave");
          if (raw) {
            const saved = JSON.parse(raw) as Record<string, string>;
            if (saved.name?.trim() && saved.dob) {
              const [year, month, day] = (saved.dob ?? "")
                .split("-")
                .map(Number);
              const [hour, minute] = (saved.tob ?? "00:00")
                .split(":")
                .map(Number);
              setVedicProfileState({
                fullName: saved.name.trim(),
                dateOfBirth: {
                  day: day ?? 1,
                  month: month ?? 1,
                  year: year ?? 2000,
                },
                timeOfBirth: { hour: hour ?? 0, minute: minute ?? 0 },
                placeOfBirth: saved.place ?? "",
                latitude: saved.lat ? Number.parseFloat(saved.lat) : 20.5937,
                longitude: saved.lng ? Number.parseFloat(saved.lng) : 78.9629,
                timezone: saved.tz ? Number.parseFloat(saved.tz) : 5.5,
                email: "",
                phone: "",
                newsletterOptIn: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
              });
              setProfileState((prev) => ({ ...prev, name: saved.name.trim() }));
            }
          }
        } catch {
          /* silent */
        }
      });
  }, []);

  const setProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfileState((prev) => ({ ...prev, ...updates }));
  }, []);

  const saveProfile = useCallback(
    async (input: UserProfileInput): Promise<boolean> => {
      setIsLoading(true);
      setError(null);
      try {
        const backendInput = toBackendInput(input);
        const ok = await getBackend().saveUserProfile(backendInput);
        if (ok) {
          setVedicProfileState(input);
          setProfileState((prev) => ({ ...prev, name: input.fullName }));
        }
        return ok;
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to save profile");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const displayName =
    vedicProfile?.fullName ||
    profile.name ||
    (profile.arjunMode ? "Arjun" : "Seeker");

  const setLanguage = useCallback((language: Language) => {
    setProfileState((prev) => ({ ...prev, language }));
  }, []);

  // Welcome splash shown once on first visit — independent of Kundli data
  const hasCompletedOnboarding = (() => {
    try {
      return localStorage.getItem("gita-welcome-shown") === "1";
    } catch {
      return true;
    }
  })();

  return {
    profile,
    vedicProfile,
    setProfile,
    saveProfile,
    displayName,
    setLanguage,
    hasCompletedOnboarding,
    isLoading,
    error,
  };
}
