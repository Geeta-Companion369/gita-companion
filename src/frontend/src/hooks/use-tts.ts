import { useCallback, useEffect, useRef, useState } from "react";

type VoiceGender = "male" | "female";

// Score voices — Indian/devotional voices get highest priority
function scoreVoice(v: SpeechSynthesisVoice): number {
  const n = v.name.toLowerCase();
  const l = v.lang.toLowerCase();

  // Prioritize Indian English and Hindi voices for Krishna's voice
  if (l.startsWith("hi-in") || l === "hi") return 150;
  if (n.includes("ravi") || n.includes("vikram") || n.includes("aditi"))
    return 140;
  if (n.includes("lekha") || n.includes("priya") || n.includes("neerja"))
    return 135;
  if (l.startsWith("en-in")) return 125;

  // Google high-quality voices
  if (n.includes("google")) return 100;
  if (n.includes("premium") || n.includes("enhanced")) return 90;
  if (n.includes("natural")) return 80;

  // Common high-quality English voices
  if (n.includes("samantha") || n.includes("daniel")) return 70;
  if (n.includes("alex") || n.includes("aria") || n.includes("zira")) return 65;
  if (n.includes("karen") || n.includes("moira") || n.includes("serena"))
    return 60;
  if (n.includes("david") || n.includes("mark") || n.includes("james"))
    return 55;
  if (n.includes("susan") || n.includes("victoria")) return 52;

  // Default — prefer en-US over others for fallback
  if (l.startsWith("en-us")) return 40;
  if (l.startsWith("en")) return 30;

  return 10;
}

function pickDevotionalVoice(
  voices: SpeechSynthesisVoice[],
  lang: string,
  gender: VoiceGender,
): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;

  const langPrefix = lang.startsWith("hi")
    ? "hi"
    : lang.startsWith("sa")
      ? "hi"
      : lang.startsWith("mr")
        ? "mr"
        : lang.startsWith("gu")
          ? "gu"
          : "en";

  // For Sanskrit/Hindi content try Hindi voices first
  let pool = voices.filter((v) => v.lang.toLowerCase().startsWith(langPrefix));
  // Fall back to Indian English
  if (pool.length === 0)
    pool = voices.filter((v) => v.lang.toLowerCase().startsWith("en-in"));
  // Fall back to any English
  if (pool.length === 0)
    pool = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  // Final fallback — any available voice
  if (pool.length === 0) pool = voices;

  const maleKeywords = [
    "male",
    "david",
    "alex",
    "daniel",
    "james",
    "deep",
    "george",
    "mark",
    "tom",
    "bruce",
    "ravi",
    "vikram",
  ];
  const femaleKeywords = [
    "female",
    "zira",
    "aria",
    "victoria",
    "karen",
    "susan",
    "samantha",
    "serena",
    "moira",
    "lekha",
    "aditi",
    "priya",
    "neerja",
  ];
  const keywords = gender === "male" ? maleKeywords : femaleKeywords;

  // Sort pool by quality score descending
  const sorted = [...pool].sort((a, b) => scoreVoice(b) - scoreVoice(a));

  // Prefer a voice matching gender keywords at highest quality tier
  const gendered = sorted.find((v) =>
    keywords.some((k) => v.name.toLowerCase().includes(k)),
  );
  // Fallback to highest quality in pool
  return gendered ?? sorted[0] ?? null;
}

/** Speed presets for mantra/verse recitation — pick the one that feels right */
export const TTS_SPEED_PRESETS = [
  { label: "🐢 Slow", emoji: "🐢", value: 0.6 },
  { label: "🕉️ Normal", emoji: "🕉️", value: 0.8 },
  { label: "⚡ Fast", emoji: "⚡", value: 1.0 },
] as const;

export type TtsSpeedPreset = (typeof TTS_SPEED_PRESETS)[number]["value"];

const TTS_SPEED_KEY = "gita-tts-speed";

function loadTtsSpeed(): number {
  try {
    const raw = localStorage.getItem(TTS_SPEED_KEY);
    return raw ? Number(raw) : 0.7;
  } catch {
    return 0.7;
  }
}

export function useTTS() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [ttsSpeed, setTtsSpeedState] = useState<number>(loadTtsSpeed);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const onEndCallbackRef = useRef<(() => void) | null>(null);
  const pendingSpeakRef = useRef<(() => void) | null>(null);

  const setTtsSpeed = useCallback((speed: number) => {
    setTtsSpeedState(speed);
    try {
      localStorage.setItem(TTS_SPEED_KEY, String(speed));
    } catch {
      /* silent */
    }
  }, []);

  // Load voices — handles async loading on Chrome (voiceschanged) and Safari (timeout)
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) {
        setVoices(v);
        // Fire any pending speak that was queued before voices loaded
        if (pendingSpeakRef.current) {
          const fn = pendingSpeakRef.current;
          pendingSpeakRef.current = null;
          setTimeout(fn, 80);
        }
      }
    };

    loadVoices();

    // Standard listener — Chrome / Firefox
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    // Legacy Safari property
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // iOS Safari requires a brief timeout
    const t1 = setTimeout(loadVoices, 300);
    const t2 = setTimeout(loadVoices, 1000);
    const t3 = setTimeout(loadVoices, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  /**
   * unlockAudio — call on first user gesture to unblock the Web Speech API
   * pipeline on mobile browsers that require interaction before speech can play.
   */
  const unlockAudio = useCallback(() => {
    if (isUnlocked) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Create a near-silent utterance to unlock the pipeline
    const silent = new SpeechSynthesisUtterance("\u00a0"); // non-breaking space
    silent.volume = 0.001;
    silent.rate = 16;
    silent.onend = () => setIsUnlocked(true);
    silent.onerror = () => setIsUnlocked(true); // still mark unlocked on error
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(silent);
    } catch {
      setIsUnlocked(true);
    }
  }, [isUnlocked]);

  const _doSpeak = useCallback(
    (
      text: string,
      lang: string,
      gender: VoiceGender,
      rate: number,
      onEnd?: () => void,
    ) => {
      if (typeof window === "undefined" || !window.speechSynthesis) {
        console.warn("[TTS] speechSynthesis not available in this browser.");
        return;
      }

      // Cancel any current speech
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      onEndCallbackRef.current = onEnd ?? null;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = gender === "male" ? 0.82 : 1.1;
      utterance.volume = 1.0;

      // Map language codes to BCP-47 tags
      utterance.lang = lang.startsWith("hi")
        ? "hi-IN"
        : lang.startsWith("mr")
          ? "mr-IN"
          : lang.startsWith("gu")
            ? "gu-IN"
            : lang.startsWith("sa")
              ? "hi-IN" // Sanskrit uses Hindi voice
              : "en-IN"; // Prefer Indian English for devotional content

      const voice = pickDevotionalVoice(voices, lang, gender);
      if (voice) utterance.voice = voice;

      utterance.onstart = () => setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
        if (onEndCallbackRef.current) {
          onEndCallbackRef.current();
          onEndCallbackRef.current = null;
        }
      };

      utterance.onerror = (e) => {
        // "interrupted" and "canceled" are normal — user stopped or new speech queued
        if (e.error !== "interrupted" && e.error !== "canceled") {
          console.warn("[TTS] speech error:", e.error);
        }
        setIsSpeaking(false);
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
      // Small delay ensures cancel() propagates before speak()
      setTimeout(() => {
        try {
          window.speechSynthesis.speak(utterance);
        } catch (err) {
          console.warn("[TTS] speak failed:", err);
          setIsSpeaking(false);
        }
      }, 60);
    },
    [voices],
  );

  const speak = useCallback(
    (
      text: string,
      lang = "en",
      gender: VoiceGender = "male",
      rate?: number,
      onEnd?: () => void,
    ) => {
      if (!text?.trim()) return;
      const effectiveRate = rate ?? ttsSpeed;

      if (voices.length === 0) {
        // Queue speak for when voices load
        pendingSpeakRef.current = () =>
          _doSpeak(text, lang, gender, effectiveRate, onEnd);
        // Try one more time to pull voices synchronously
        if (typeof window !== "undefined" && window.speechSynthesis) {
          const v = window.speechSynthesis.getVoices();
          if (v.length > 0) {
            setVoices(v);
            pendingSpeakRef.current = null;
            _doSpeak(text, lang, gender, effectiveRate, onEnd);
          }
        }
        return;
      }
      _doSpeak(text, lang, gender, effectiveRate, onEnd);
    },
    [voices, _doSpeak, ttsSpeed],
  );

  /** simpleSpeak — quick play with defaults (English, male, ttsSpeed) */
  const simpleSpeak = useCallback(
    (text: string) => {
      speak(text, "en", "male", ttsSpeed);
    },
    [speak, ttsSpeed],
  );

  const stop = useCallback(() => {
    onEndCallbackRef.current = null;
    pendingSpeakRef.current = null;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    utteranceRef.current = null;
  }, []);

  const toggle = useCallback(
    (text: string, lang = "en", gender: VoiceGender = "male") => {
      if (isSpeaking) {
        stop();
      } else {
        speak(text, lang, gender);
      }
    },
    [isSpeaking, speak, stop],
  );

  return {
    speak,
    simpleSpeak,
    stop,
    toggle,
    unlockAudio,
    isSpeaking,
    isUnlocked,
    voicesLoaded: voices.length > 0,
    isSupported: typeof window !== "undefined" && "speechSynthesis" in window,
    ttsSpeed,
    setTtsSpeed,
  };
}
