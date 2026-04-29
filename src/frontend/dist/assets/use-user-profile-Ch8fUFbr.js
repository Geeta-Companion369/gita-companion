import { r as reactExports } from "./index-vCKiyWhq.js";
const STORAGE_KEY = "gita-user-profile";
const DEFAULT_PROFILE = {
  name: "",
  arjunMode: false,
  language: "english",
  voiceGender: "male",
  joinDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
};
function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROFILE };
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}
function useUserProfile() {
  const [profile, setProfileState] = reactExports.useState(loadProfile);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
    }
  }, [profile]);
  const setProfile = reactExports.useCallback((updates) => {
    setProfileState((prev) => ({ ...prev, ...updates }));
  }, []);
  const displayName = profile.name || (profile.arjunMode ? "Arjun" : "Seeker");
  const setLanguage = reactExports.useCallback((language) => {
    setProfileState((prev) => ({ ...prev, language }));
  }, []);
  return { profile, setProfile, displayName, setLanguage };
}
export {
  useUserProfile as u
};
