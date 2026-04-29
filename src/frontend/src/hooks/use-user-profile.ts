import type { Language, UserProfile } from "@/types/gita";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "gita-user-profile";

const DEFAULT_PROFILE: UserProfile = {
  name: "",
  arjunMode: false,
  language: "english",
  voiceGender: "male",
  joinDate: new Date().toISOString().split("T")[0],
};

function loadProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROFILE };
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) } as UserProfile;
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

export function useUserProfile() {
  const [profile, setProfileState] = useState<UserProfile>(loadProfile);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // silently fail
    }
  }, [profile]);

  const setProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfileState((prev) => ({ ...prev, ...updates }));
  }, []);

  const displayName = profile.name || (profile.arjunMode ? "Arjun" : "Seeker");

  const setLanguage = useCallback((language: Language) => {
    setProfileState((prev) => ({ ...prev, language }));
  }, []);

  return { profile, setProfile, displayName, setLanguage };
}
