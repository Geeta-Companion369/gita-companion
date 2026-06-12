import { g as getBackend } from "./backend-client-DOpXrffV.js";
import { r as reactExports } from "./index-CodWPqWB.js";
const STORAGE_KEY = "gita-user-profile";
const PROFILE_LOADED_KEY = "gita-profile-loaded";
const DEFAULT_LEGACY = {
  name: "",
  arjunMode: false,
  language: "english",
  voiceGender: "male",
  joinDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
};
function loadLegacy() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_LEGACY };
    return { ...DEFAULT_LEGACY, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_LEGACY };
  }
}
function toBackendInput(input) {
  return {
    fullName: input.fullName,
    dateOfBirth: {
      day: BigInt(input.dateOfBirth.day),
      month: BigInt(input.dateOfBirth.month),
      year: BigInt(input.dateOfBirth.year)
    },
    timeOfBirth: {
      hour: BigInt(input.timeOfBirth.hour),
      minute: BigInt(input.timeOfBirth.minute)
    },
    placeOfBirth: input.placeOfBirth,
    latitude: input.latitude,
    longitude: input.longitude,
    timezone: String(input.timezone),
    email: input.email,
    phone: input.phone,
    newsletterOptIn: input.newsletterOptIn
  };
}
function toFrontendProfile(bp) {
  return {
    fullName: bp.fullName,
    dateOfBirth: {
      day: Number(bp.dateOfBirth.day),
      month: Number(bp.dateOfBirth.month),
      year: Number(bp.dateOfBirth.year)
    },
    timeOfBirth: {
      hour: Number(bp.timeOfBirth.hour),
      minute: Number(bp.timeOfBirth.minute)
    },
    placeOfBirth: bp.placeOfBirth,
    latitude: bp.latitude,
    longitude: bp.longitude,
    timezone: Number.parseFloat(bp.timezone) || 0,
    email: bp.email,
    phone: bp.phone,
    newsletterOptIn: bp.newsletterOptIn,
    createdAt: Number(bp.createdAt) / 1e6,
    updatedAt: Number(bp.updatedAt) / 1e6
  };
}
function useUserProfile() {
  const [profile, setProfileState] = reactExports.useState(loadLegacy);
  const [vedicProfile, setVedicProfileState] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
    }
  }, [profile]);
  reactExports.useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(PROFILE_LOADED_KEY);
    if (alreadyLoaded) return;
    sessionStorage.setItem(PROFILE_LOADED_KEY, "1");
    getBackend().getUserProfile().then((bp) => {
      var _a;
      if (bp) {
        const fp = toFrontendProfile(bp);
        setVedicProfileState(fp);
        setProfileState((prev) => ({ ...prev, name: bp.fullName }));
      } else {
        try {
          const raw = localStorage.getItem("gita-kundali-form-autosave");
          if (raw) {
            const saved = JSON.parse(raw);
            if (((_a = saved.name) == null ? void 0 : _a.trim()) && saved.dob) {
              const [year, month, day] = (saved.dob ?? "").split("-").map(Number);
              const [hour, minute] = (saved.tob ?? "00:00").split(":").map(Number);
              setVedicProfileState({
                fullName: saved.name.trim(),
                dateOfBirth: {
                  day: day ?? 1,
                  month: month ?? 1,
                  year: year ?? 2e3
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
                updatedAt: Date.now()
              });
              setProfileState((prev) => ({
                ...prev,
                name: saved.name.trim()
              }));
            }
          }
        } catch {
        }
      }
    }).catch(() => {
      var _a;
      try {
        const raw = localStorage.getItem("gita-kundali-form-autosave");
        if (raw) {
          const saved = JSON.parse(raw);
          if (((_a = saved.name) == null ? void 0 : _a.trim()) && saved.dob) {
            const [year, month, day] = (saved.dob ?? "").split("-").map(Number);
            const [hour, minute] = (saved.tob ?? "00:00").split(":").map(Number);
            setVedicProfileState({
              fullName: saved.name.trim(),
              dateOfBirth: {
                day: day ?? 1,
                month: month ?? 1,
                year: year ?? 2e3
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
              updatedAt: Date.now()
            });
            setProfileState((prev) => ({ ...prev, name: saved.name.trim() }));
          }
        }
      } catch {
      }
    });
  }, []);
  const setProfile = reactExports.useCallback((updates) => {
    setProfileState((prev) => ({ ...prev, ...updates }));
  }, []);
  const saveProfile = reactExports.useCallback(
    async (input) => {
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
    []
  );
  const displayName = (vedicProfile == null ? void 0 : vedicProfile.fullName) || profile.name || (profile.arjunMode ? "Arjun" : "Seeker");
  const setLanguage = reactExports.useCallback((language) => {
    setProfileState((prev) => ({ ...prev, language }));
  }, []);
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
    error
  };
}
export {
  useUserProfile as u
};
