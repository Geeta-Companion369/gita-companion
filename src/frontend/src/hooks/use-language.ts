import type { Language } from "@/types/gita";
import { useCallback, useState } from "react";

const STORAGE_KEY = "gita-language";

const DEFAULT_LANGUAGE: Language = "english";

function loadLanguage(): Language {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return (raw as Language) ?? DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export const LANGUAGE_LABELS: Record<Language, string> = {
  sanskrit: "संस्कृत",
  english: "English",
  hindi: "हिन्दी",
  marathi: "मराठी",
  gujarati: "ગુજરાતી",
};

// ─── Translation Dictionaries ─────────────────────────────────────────────────
// Key = English label, Value = translation in target language

type TranslationKey =
  | "Home"
  | "Library"
  | "Profile"
  | "Settings"
  | "Menu"
  | "Chat AI"
  | "Mala"
  | "Verse of the Day"
  | "Today's Sacred Blessing"
  | "18 Sacred Pathways"
  | "Begin Sacred Journey"
  | "Talk to Krishna"
  | "Hare Krishna"
  | "Emergency"
  | "Back"
  | "Chapter"
  | "Verse"
  | "Next"
  | "Previous"
  | "Play"
  | "Stop"
  | "Share"
  | "Save"
  | "Search"
  | "Close"
  | "Open"
  | "Explore"
  | "Continue"
  | "Points"
  | "Streak"
  | "Daily Ritual"
  | "Mantra"
  | "Prayer"
  | "Blessing"
  | "Worship"
  | "Temple"
  | "Gallery"
  | "Community"
  | "Donate"
  | "Achievement"
  | "Quiz"
  | "Sacred Name Writing"
  | "Digital Mala"
  | "Stotram Library"
  | "Karma Mirror"
  | "Life Purpose"
  | "Daily Dharma"
  | "Virtual Temple"
  | "Final Journey"
  | "Garbha Sanskar"
  | "16 Sanskaars"
  | "Youth Hub"
  | "Global Community"
  | "Video"
  | "Language"
  | "Voice"
  | "Slow"
  | "Normal"
  | "Fast"
  | "Active"
  | "Locked"
  | "Unlocked"
  | "Free"
  | "Loading"
  | "Error"
  | "Success";

type Translations = Record<TranslationKey, string>;

const HINDI: Translations = {
  Home: "होम",
  Library: "पुस्तकालय",
  Profile: "प्रोफ़ाइल",
  Settings: "सेटिंग्स",
  Menu: "मेनू",
  "Chat AI": "कृष्ण वाणी",
  Mala: "जपमाला",
  "Verse of the Day": "आज का श्लोक",
  "Today's Sacred Blessing": "आज का आशीर्वाद",
  "18 Sacred Pathways": "अठारह धर्म मार्ग",
  "Begin Sacred Journey": "पवित्र यात्रा शुरू करें",
  "Talk to Krishna": "कृष्ण से बात करें",
  "Hare Krishna": "हरे कृष्ण",
  Emergency: "आपातकाल",
  Back: "वापस",
  Chapter: "अध्याय",
  Verse: "श्लोक",
  Next: "अगला",
  Previous: "पिछला",
  Play: "चलाएं",
  Stop: "रोकें",
  Share: "साझा करें",
  Save: "सहेजें",
  Search: "खोजें",
  Close: "बंद करें",
  Open: "खोलें",
  Explore: "अन्वेषण करें",
  Continue: "जारी रखें",
  Points: "अंक",
  Streak: "लकीर",
  "Daily Ritual": "दैनिक अनुष्ठान",
  Mantra: "मंत्र",
  Prayer: "प्रार्थना",
  Blessing: "आशीर्वाद",
  Worship: "पूजा",
  Temple: "मंदिर",
  Gallery: "गैलरी",
  Community: "समुदाय",
  Donate: "दान करें",
  Achievement: "उपलब्धि",
  Quiz: "प्रश्नोत्तरी",
  "Sacred Name Writing": "नाम लेखन",
  "Digital Mala": "डिजिटल माला",
  "Stotram Library": "स्तोत्र संग्रह",
  "Karma Mirror": "कर्म दर्पण",
  "Life Purpose": "जीवन लक्ष्य",
  "Daily Dharma": "दैनिक धर्म",
  "Virtual Temple": "वर्चुअल मंदिर",
  "Final Journey": "अंतिम यात्रा",
  "Garbha Sanskar": "गर्भ संस्कार",
  "16 Sanskaars": "षोडश संस्कार",
  "Youth Hub": "युवा धर्म हब",
  "Global Community": "वैश्विक सत्संग",
  Video: "वीडियो",
  Language: "भाषा",
  Voice: "आवाज़",
  Slow: "धीरे",
  Normal: "सामान्य",
  Fast: "तेज़",
  Active: "सक्रिय",
  Locked: "बंद",
  Unlocked: "खुला",
  Free: "मुफ़्त",
  Loading: "लोड हो रहा है",
  Error: "त्रुटि",
  Success: "सफलता",
};

const GUJARATI: Translations = {
  Home: "ઘર",
  Library: "પુસ્તકાલય",
  Profile: "પ્રોફાઇલ",
  Settings: "સેટિંગ્સ",
  Menu: "મેનૂ",
  "Chat AI": "કૃષ્ણ વાણી",
  Mala: "જપ માળા",
  "Verse of the Day": "આજનો શ્લોક",
  "Today's Sacred Blessing": "આજનો આશીર્વાદ",
  "18 Sacred Pathways": "અઢાર ધર્મ માર્ગ",
  "Begin Sacred Journey": "પવિત્ર યાત્રા શરૂ કરો",
  "Talk to Krishna": "કૃષ્ણ સાથે વાત કરો",
  "Hare Krishna": "હરે કૃષ્ણ",
  Emergency: "કટોકટી",
  Back: "પાછળ",
  Chapter: "અધ્યાય",
  Verse: "શ્લોક",
  Next: "આગળ",
  Previous: "પાછળ",
  Play: "ચલાવો",
  Stop: "અટકાવો",
  Share: "શેર કરો",
  Save: "સાચવો",
  Search: "શોધો",
  Close: "બંધ કરો",
  Open: "ખોલો",
  Explore: "અન્વેષણ",
  Continue: "ચાલુ રાખો",
  Points: "પોઇન્ટ",
  Streak: "સ્ટ્રીક",
  "Daily Ritual": "દૈનિક અનુષ્ઠાન",
  Mantra: "મંત્ર",
  Prayer: "પ્રાર્થના",
  Blessing: "આશીર્વાદ",
  Worship: "પૂજા",
  Temple: "મંદિર",
  Gallery: "ગૅલેરી",
  Community: "સમુદાય",
  Donate: "દાન કરો",
  Achievement: "સિદ્ધિ",
  Quiz: "ક્વિઝ",
  "Sacred Name Writing": "નામ લેખન",
  "Digital Mala": "ડિજિટલ માળા",
  "Stotram Library": "સ્તોત્ર સંગ્રહ",
  "Karma Mirror": "કર્મ દર્પણ",
  "Life Purpose": "જીવન ઉદ્દેશ",
  "Daily Dharma": "દૈનિક ધર્મ",
  "Virtual Temple": "વર્ચ્યુઅલ મંદિર",
  "Final Journey": "અંતિમ યાત્રા",
  "Garbha Sanskar": "ગર્ભ સંસ્કાર",
  "16 Sanskaars": "સોળ સંસ્કાર",
  "Youth Hub": "યુવા ધર્મ હબ",
  "Global Community": "વૈશ્વિક સત્સંગ",
  Video: "વીડિઓ",
  Language: "ભાષા",
  Voice: "અવાજ",
  Slow: "ધીમું",
  Normal: "સામાન્ય",
  Fast: "ઝડપી",
  Active: "સક્રિય",
  Locked: "બંધ",
  Unlocked: "ખુલ્લું",
  Free: "મફત",
  Loading: "લોડ થઈ રહ્યું છે",
  Error: "ભૂલ",
  Success: "સફળ",
};

const MARATHI: Translations = {
  Home: "मुख्यपृष्ठ",
  Library: "ग्रंथालय",
  Profile: "प्रोफाइल",
  Settings: "सेटिंग्ज",
  Menu: "मेनू",
  "Chat AI": "कृष्ण वाणी",
  Mala: "जपमाळ",
  "Verse of the Day": "आजचा श्लोक",
  "Today's Sacred Blessing": "आजचा आशीर्वाद",
  "18 Sacred Pathways": "अठरा धर्म मार्ग",
  "Begin Sacred Journey": "पवित्र यात्रा सुरू करा",
  "Talk to Krishna": "कृष्णाशी बोला",
  "Hare Krishna": "हरे कृष्ण",
  Emergency: "आणीबाणी",
  Back: "मागे",
  Chapter: "अध्याय",
  Verse: "श्लोक",
  Next: "पुढे",
  Previous: "मागे",
  Play: "वाजवा",
  Stop: "थांबवा",
  Share: "शेअर करा",
  Save: "जतन करा",
  Search: "शोधा",
  Close: "बंद करा",
  Open: "उघडा",
  Explore: "अन्वेषण करा",
  Continue: "सुरू ठेवा",
  Points: "गुण",
  Streak: "सलग दिवस",
  "Daily Ritual": "दैनिक अनुष्ठान",
  Mantra: "मंत्र",
  Prayer: "प्रार्थना",
  Blessing: "आशीर्वाद",
  Worship: "पूजा",
  Temple: "मंदिर",
  Gallery: "दालन",
  Community: "समुदाय",
  Donate: "देणगी द्या",
  Achievement: "उपलब्धी",
  Quiz: "प्रश्नमंजुषा",
  "Sacred Name Writing": "नाम लेखन",
  "Digital Mala": "डिजिटल माळ",
  "Stotram Library": "स्तोत्र संग्रह",
  "Karma Mirror": "कर्म दर्पण",
  "Life Purpose": "जीवन उद्देश",
  "Daily Dharma": "दैनिक धर्म",
  "Virtual Temple": "आभासी मंदिर",
  "Final Journey": "अंतिम यात्रा",
  "Garbha Sanskar": "गर्भ संस्कार",
  "16 Sanskaars": "षोडश संस्कार",
  "Youth Hub": "युवा धर्म हब",
  "Global Community": "जागतिक सत्संग",
  Video: "व्हिडिओ",
  Language: "भाषा",
  Voice: "आवाज",
  Slow: "हळू",
  Normal: "सामान्य",
  Fast: "जलद",
  Active: "सक्रिय",
  Locked: "बंद",
  Unlocked: "उघडे",
  Free: "मोफत",
  Loading: "लोड होत आहे",
  Error: "त्रुटी",
  Success: "यशस्वी",
};

const TRANSLATIONS: Partial<Record<Language, Translations>> = {
  hindi: HINDI,
  gujarati: GUJARATI,
  marathi: MARATHI,
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(loadLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // silently fail
    }
  }, []);

  /**
   * t() — translate a key to the current language.
   * Falls back to the English key if no translation found.
   */
  const t = useCallback(
    (key: TranslationKey): string => {
      if (language === "english" || language === "sanskrit") return key;
      return TRANSLATIONS[language]?.[key] ?? key;
    },
    [language],
  );

  return { language, setLanguage, label: LANGUAGE_LABELS[language], t };
}

export type { TranslationKey };
