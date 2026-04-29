import { Mantras108Section } from "@/components/mantra/Mantras108";
import { PraharPoojaSection } from "@/components/mantra/PraharPooja";
import { ShodashSection } from "@/components/mantra/Shodashopachara";
import { VarnaDharmaSection } from "@/components/mantra/VarnaDharma";
import { usePoints } from "@/hooks/use-points";
import { useStreak } from "@/hooks/use-streak";
import type { MantraEntry } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Direct TTS helper ────────────────────────────────────────────────────────

function directSpeak(
  text: string,
  onEnd?: () => void,
): SpeechSynthesisUtterance | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.72;
  u.pitch = 0.75;
  u.volume = 1.0;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    const deepVoice = voices.find((v) =>
      [
        "david",
        "alex",
        "daniel",
        "james",
        "george",
        "mark",
        "tom",
        "male",
      ].some((k) => v.name.toLowerCase().includes(k)),
    );
    if (deepVoice) u.voice = deepVoice;
    else u.voice = voices[0];
  }
  if (onEnd) u.onend = onEnd;
  u.onerror = (e) => {
    if (e.error !== "interrupted" && e.error !== "canceled") {
      console.warn("[Mantra TTS] error:", e.error);
    }
  };
  setTimeout(() => window.speechSynthesis.speak(u), 60);
  return u;
}

// ─── Mantra Data ──────────────────────────────────────────────────────────────

const MANTRAS: MantraEntry[] = [
  {
    id: "maha-mrityunjaya",
    name: "Mahamrityunjaya Mantra",
    category: "protection",
    text: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् |\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ||",
    meaning:
      "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam | Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat",
    benefit:
      "Liberates from fear of death, grants healing, protection and divine grace.",
    repetitions: 108,
  },
  {
    id: "durga-kavach",
    name: "Durga Kavach",
    category: "protection",
    text: "ॐ दुं दुर्गायै नमः |\nसर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके |\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तुते ||",
    meaning:
      "Om Dum Durgayei Namaha | Sarva Mangala Mangalye, Shive Sarvartha Sadhike, Sharanye Tryambake Gauri Narayani Namostute",
    benefit:
      "Divine shield against negative forces, bestows courage and fearlessness.",
    repetitions: 11,
  },
  {
    id: "hanuman",
    name: "Hanuman Vandana",
    category: "protection",
    text: "मनोजवं मारुततुल्यवेगं |\nजितेन्द्रियं बुद्धिमतां वरिष्ठम् |\nवातात्मजं वानरयूथमुख्यं |\nश्रीरामदूतं शरणं प्रपद्ये ||",
    meaning:
      "Manojavam Marut Tulya Vegam, Jitendriyam Buddhimatam Varishtham, Vatatmajam Vanara Yutha Mukhyam, Shri Rama Dutam Sharanam Prapadye",
    benefit:
      "Removes obstacles, grants immense strength and steadfast devotion.",
    repetitions: 11,
  },
  {
    id: "gayatri",
    name: "Gayatri Mantra",
    category: "education",
    text: "ॐ भूर्भुवः स्वः |\nतत्सवितुर्वरेण्यं |\nभर्गो देवस्य धीमहि |\nधियो यो नः प्रचोदयात् ||",
    meaning:
      "Om Bhur Bhuvah Svah | Tat Savitur Varenyam | Bhargo Devasya Dhimahi | Dhiyo Yo Nah Prachodayat",
    benefit:
      "Illuminates the intellect, purifies the mind, awakens higher wisdom.",
    repetitions: 108,
  },
  {
    id: "saraswati-vandana",
    name: "Saraswati Vandana",
    category: "education",
    text: "या देवी सर्वभूतेषु विद्यारूपेण संस्थिता |\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ||",
    meaning:
      "Ya Devi Sarva Bhuteshu Vidyarupena Samsthita | Namastasyai Namastasyai Namastasyai Namo Namah",
    benefit:
      "Invokes Saraswati for learning, eloquence, arts, and academic excellence.",
    repetitions: 11,
  },
  {
    id: "ganesha",
    name: "Ganesha Vandana",
    category: "education",
    text: "ॐ गं गणपतये नमः |\nवक्रतुण्ड महाकाय सूर्यकोटि समप्रभ |\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ||",
    meaning:
      "Om Gam Ganapataye Namaha | Vakratunda Mahakaya Surya Koti Samaprabha | Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada",
    benefit:
      "Removes obstacles before study and new beginnings, blesses all endeavours.",
    repetitions: 11,
  },
  {
    id: "lakshmi-ashtakam",
    name: "Lakshmi Ashtakam",
    category: "prosperity",
    text: "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते |\nशङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तुते ||",
    meaning:
      "Namaste Astu Maha Maye Shri Pithe Sura Pujite | Shankha Chakra Gada Haste Maha Lakshmi Namostute",
    benefit:
      "Invokes divine abundance, removes poverty, and blesses with material and spiritual wealth.",
    repetitions: 11,
  },
  {
    id: "om-shreem",
    name: "Om Shreem Maha Lakshmiyei",
    category: "prosperity",
    text: "ॐ श्रीं महालक्ष्म्यै नमः |\nॐ श्रीं ह्रीं श्रीं कमले कमलालये |\nप्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः ||",
    meaning:
      "Om Shreem Maha Lakshmiyei Namaha | Om Shreem Hreem Shreem Kamale Kamalalaye | Prasida Prasida Om Maha Lakshmiyei Namaha",
    benefit:
      "Opens gateways of prosperity, clears financial obstacles, attracts divine grace.",
    repetitions: 108,
  },
  {
    id: "kuber",
    name: "Kuber Mantra",
    category: "prosperity",
    text: "ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये |\nधनधान्यसमृद्धिं मे देहि दापय स्वाहा ||",
    meaning:
      "Om Yakshaya Kuberaya Vaishravanaya Dhana Dhanyam Adhipataye | Dhana Dhanya Samriddhim Me Dehi Dapaya Svaha",
    benefit:
      "Blesses with wealth, treasures, and material abundance through divine grace.",
    repetitions: 11,
  },
  {
    id: "om-shanti",
    name: "Om Shanti",
    category: "stress-relief",
    text: "ॐ शान्तिः शान्तिः शान्तिः |\nसर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः |\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ||",
    meaning:
      "Om Shanti Shanti Shanti | Sarve Bhavantu Sukhinah Sarve Santu Niramayah | Sarve Bhadrani Pashyantu Ma Kashchid Duhkhabhag Bhavet",
    benefit:
      "Dissolves anxiety and tension, brings deep inner calm and universal peace.",
    repetitions: 11,
  },
  {
    id: "shiva-dhyan",
    name: "Shiva Dhyan Mantra",
    category: "stress-relief",
    text: "करचरणकृतं वाक्कायजं कर्मजं वा |\nश्रवणनयनजं वा मानसं वापराधम् |\nविहितमविहितं वा सर्वमेतत्क्षमस्व |\nजय जय करुणाब्धे श्री महादेव शम्भो ||",
    meaning:
      "Kara Charana Kritam Vak Kayajam Karma Jam Va | Shravana Nayana Jam Va Manasam Va Paradham | Vihitam Avihitam Va Sarvam Etat Kshamasva | Jaya Jaya Karunaabdhe Shri Mahadeva Shambho",
    benefit:
      "Releases guilt and mental burden, invokes Shiva's infinite compassion and forgiveness.",
    repetitions: 11,
  },
  {
    id: "om-namah-shivaya",
    name: "Om Namah Shivaya",
    category: "stress-relief",
    text: "ॐ नमः शिवाय |\nनमः शिवाय नमः शिवाय |\nनमः शिवाय नमः शिवाय |\nनमः शिवाय नमः शिवाय ||",
    meaning:
      "Om Namah Shivaya | Na Ma Shi Va Ya | I bow to the auspicious Shiva within",
    benefit:
      "Purifies mind and body, brings stillness, destroys negativity and mental restlessness.",
    repetitions: 108,
  },
];

type Category = "protection" | "education" | "prosperity" | "stress-relief";

interface CategoryEntry {
  id: Category;
  label: string;
  labelSanskrit: string;
  icon: string;
  description: string;
}

const CATEGORIES: CategoryEntry[] = [
  {
    id: "protection",
    label: "Protection",
    labelSanskrit: "रक्षा",
    icon: "🛡",
    description: "Shield against harm, fear, and negative forces",
  },
  {
    id: "education",
    label: "Wisdom",
    labelSanskrit: "विद्या",
    icon: "🪔",
    description: "Learning, clarity, intellect, and truth",
  },
  {
    id: "prosperity",
    label: "Prosperity",
    labelSanskrit: "समृद्धि",
    icon: "🌼",
    description: "Abundance, wealth, and divine blessings",
  },
  {
    id: "stress-relief",
    label: "Peace",
    labelSanskrit: "शांति",
    icon: "☮",
    description: "Calm, healing, and deep inner release",
  },
];

const REPS_OPTIONS = [11, 108] as const;
type RepOption = (typeof REPS_OPTIONS)[number];

// ─── Top-level tabs ───────────────────────────────────────────────────────────

type MainTab =
  | "mala"
  | "108-mantras"
  | "prahar-pooja"
  | "shodashopachara"
  | "varna-dharma";

const MAIN_TABS: {
  id: MainTab;
  label: string;
  labelSanskrit: string;
  icon: string;
}[] = [
  { id: "mala", label: "Mantra Mala", labelSanskrit: "मन्त्र माला", icon: "📿" },
  {
    id: "108-mantras",
    label: "108 Mantras",
    labelSanskrit: "अष्टोत्तरशत",
    icon: "🕉",
  },
  {
    id: "prahar-pooja",
    label: "4 Prahar Pooja",
    labelSanskrit: "प्रहर पूजा",
    icon: "🪔",
  },
  {
    id: "shodashopachara",
    label: "Shodashopachara",
    labelSanskrit: "षोडशोपचार",
    icon: "✦",
  },
  {
    id: "varna-dharma",
    label: "Varna Dharma",
    labelSanskrit: "वर्ण धर्म",
    icon: "📜",
  },
];

function loadRecentlyPlayed(): string[] {
  try {
    const raw = localStorage.getItem("gita-mantra-recent");
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveRecentlyPlayed(ids: string[]): void {
  try {
    localStorage.setItem("gita-mantra-recent", JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

// ─── Mantra List Item ─────────────────────────────────────────────────────────

function MantraListItem({
  mantra,
  isActive,
  isPlaying,
  onSelect,
}: {
  mantra: MantraEntry;
  isActive: boolean;
  isPlaying: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ x: 3 }}
      className="w-full text-left transition-smooth"
      data-ocid={`mantra-card-${mantra.id}`}
    >
      <div
        className="flex items-start gap-3 px-5 py-4 border-b border-border/40 hover:bg-accent/5 transition-smooth"
        style={
          isActive
            ? {
                background: "oklch(var(--accent) / 0.08)",
                borderLeft: "3px solid oklch(var(--accent) / 0.6)",
              }
            : { borderLeft: "3px solid transparent" }
        }
      >
        <div className="shrink-0 mt-1 w-5 text-center">
          {isPlaying && isActive ? (
            <span className="text-accent text-base animate-pulse">♪</span>
          ) : (
            <span className="text-muted-foreground/40 text-sm">✦</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display text-sm font-semibold text-foreground leading-snug">
            {mantra.name}
          </p>
          <p className="font-body text-xs text-muted-foreground italic mt-0.5 line-clamp-2 leading-relaxed">
            {mantra.benefit}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-verse-number tracking-widest">
            {mantra.repetitions}×
          </p>
        </div>
      </div>
    </motion.button>
  );
}

// ─── Mantra Mala Section ──────────────────────────────────────────────────────

function MantaMalaSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("protection");
  const [activeMantra, setActiveMantra] = useState<MantraEntry>(MANTRAS[0]);
  const [reps, setReps] = useState<RepOption>(11);
  const [currentRep, setCurrentRep] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] =
    useState<string[]>(loadRecentlyPlayed);
  const { addPoints } = usePoints();
  const { recordPractice } = useStreak();
  const repRef = useRef(0);
  const activeRef = useRef(false);
  const activeMantraRef = useRef(activeMantra);
  const repsRef = useRef(reps);

  useEffect(() => {
    activeMantraRef.current = activeMantra;
  }, [activeMantra]);
  useEffect(() => {
    repsRef.current = reps;
  }, [reps]);

  const filteredMantras = MANTRAS.filter((m) => m.category === activeCategory);

  const addToRecent = (mantraId: string) => {
    setRecentlyPlayed((prev) => {
      const updated = [mantraId, ...prev.filter((id) => id !== mantraId)].slice(
        0,
        3,
      );
      saveRecentlyPlayed(updated);
      return updated;
    });
  };

  const playNextRep = useCallback(() => {
    if (!activeRef.current) return;
    const mantra = activeMantraRef.current;
    const targetReps = repsRef.current;
    const next = repRef.current + 1;
    if (next > targetReps) {
      setIsSessionActive(false);
      setCurrentRep(0);
      repRef.current = 0;
      activeRef.current = false;
      addPoints("listening", 3);
      recordPractice();
      return;
    }
    setCurrentRep(next);
    repRef.current = next;
    directSpeak(mantra.meaning, () => {
      if (activeRef.current) setTimeout(() => playNextRepRef.current(), 1000);
    });
  }, [addPoints, recordPractice]);

  const playNextRepRef = useRef(playNextRep);
  useEffect(() => {
    playNextRepRef.current = playNextRep;
  }, [playNextRep]);

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const handlePlay = () => {
    stopSpeech();
    repRef.current = 0;
    setCurrentRep(0);
    activeRef.current = true;
    setIsSessionActive(true);
    setIsPaused(false);
    addToRecent(activeMantra.id);
    setTimeout(() => playNextRepRef.current(), 150);
  };

  const handleStop = () => {
    activeRef.current = false;
    stopSpeech();
    setIsSessionActive(false);
    setIsPaused(false);
    setCurrentRep(0);
    repRef.current = 0;
  };

  const handlePause = () => {
    activeRef.current = false;
    stopSpeech();
    setIsPaused(true);
  };

  const handleResume = () => {
    activeRef.current = true;
    setIsPaused(false);
    playNextRepRef.current();
  };

  const handleSelectMantra = (m: MantraEntry) => {
    handleStop();
    setActiveMantra(m);
  };

  const recentMantras = recentlyPlayed
    .map((id) => MANTRAS.find((m) => m.id === id))
    .filter((m): m is MantraEntry => m !== undefined);

  const progress = reps > 0 ? (currentRep / reps) * 100 : 0;

  return (
    <div>
      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-0 mb-6 border border-border"
        style={{ background: "oklch(var(--card) / 0.8)" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              const first = MANTRAS.find((m) => m.category === cat.id);
              if (first) handleSelectMantra(first);
            }}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-body border-r border-border transition-smooth flex-1 justify-center ${
              activeCategory === cat.id
                ? "bg-primary/10 text-primary border-b-2 border-b-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
            }`}
            data-ocid={`mantra-cat-${cat.id}`}
          >
            <span>{cat.icon}</span>
            <span className="hidden sm:block">{cat.label}</span>
            <span
              className="hidden md:block font-display text-xs italic"
              style={{ color: "oklch(var(--accent) / 0.65)" }}
            >
              {cat.labelSanskrit}
            </span>
          </button>
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Mantra List */}
        <div>
          <p className="text-verse-number tracking-[0.18em] mb-3 px-1">
            ✦ {CATEGORIES.find((c) => c.id === activeCategory)?.description}
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="border border-border"
              style={{ background: "oklch(var(--card) / 0.7)" }}
            >
              {filteredMantras.map((m) => (
                <MantraListItem
                  key={m.id}
                  mantra={m}
                  isActive={activeMantra.id === m.id}
                  isPlaying={isSessionActive && !isPaused}
                  onSelect={() => handleSelectMantra(m)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {recentMantras.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <div className="divider-ornate text-xs font-display uppercase tracking-widest">
                पूर्व पाठ · Recently Chanted
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {recentMantras.map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => handleSelectMantra(m)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-body text-muted-foreground hover:text-foreground border border-border hover:border-accent/40 transition-smooth shadow-sacred"
                    style={{
                      background: "oklch(var(--card) / 0.6)",
                      borderRadius: "1px",
                    }}
                    data-ocid={`mantra-recent-${m.id}`}
                  >
                    ♪ {m.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Player Panel */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="h-fit sticky top-4 space-y-0 border border-border shadow-elevated"
          style={{ background: "oklch(var(--card) / 0.9)" }}
        >
          <div
            className="px-6 py-4 border-b"
            style={{
              borderColor: "oklch(var(--accent) / 0.25)",
              background: "oklch(var(--muted) / 0.5)",
            }}
          >
            <p className="text-verse-number tracking-[0.2em] text-center">
              ॥ अभी बज रहा है · Now Playing ॥
            </p>
          </div>

          <div className="px-6 py-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMantra.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-3"
              >
                <div>
                  <p className="font-display text-xl font-semibold italic text-foreground leading-snug">
                    {activeMantra.name}
                  </p>
                  <p
                    className="font-display text-xs tracking-widest uppercase mt-0.5"
                    style={{ color: "oklch(var(--accent) / 0.7)" }}
                  >
                    {activeMantra.category.replace("-", " ")} ·{" "}
                    {activeMantra.repetitions}× suggested
                  </p>
                </div>

                <div
                  className="p-4 text-center border border-border/40"
                  style={{
                    background: "oklch(var(--muted) / 0.45)",
                    borderRadius: "1px",
                  }}
                >
                  <p
                    className="whitespace-pre-line text-center leading-loose"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      color: "oklch(var(--foreground))",
                      lineHeight: 2.1,
                    }}
                  >
                    {activeMantra.text}
                  </p>
                </div>

                <p className="font-body text-xs italic text-center text-muted-foreground leading-relaxed">
                  {activeMantra.meaning}
                </p>

                <p
                  className="font-body text-xs italic leading-relaxed border-l-2 pl-3"
                  style={{
                    color: "oklch(var(--muted-foreground))",
                    borderColor: "oklch(var(--accent) / 0.4)",
                  }}
                >
                  {activeMantra.benefit}
                </p>
              </motion.div>
            </AnimatePresence>

            {isSessionActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <p className="text-verse-number tracking-widest">
                    {isPaused ? "विराम · Paused" : "जप · Chanting"}
                  </p>
                  <p
                    className="font-display text-2xl font-bold"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    {currentRep}
                    <span className="text-sm font-normal text-muted-foreground">
                      {" "}
                      / {reps}
                    </span>
                  </p>
                </div>
                <div
                  className="h-3 w-full border border-border"
                  style={{ background: "oklch(var(--muted) / 0.6)" }}
                >
                  <motion.div
                    className="h-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(var(--accent) / 0.6), oklch(var(--accent)))",
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Reps */}
            <div className="space-y-2">
              <p className="text-verse-number tracking-widest">
                जप संख्या · Repetitions
              </p>
              <div className="flex gap-2">
                {REPS_OPTIONS.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => {
                      if (!isSessionActive) setReps(r);
                    }}
                    disabled={isSessionActive}
                    className={`flex-1 py-2 text-sm font-body border transition-smooth ${reps === r ? "bg-primary text-primary-foreground border-primary shadow-sacred" : "border-border text-muted-foreground hover:border-accent/40 disabled:opacity-50"}`}
                    style={{ borderRadius: "1px" }}
                  >
                    {r === 11 ? "११ · 11" : "१०८ · 108"}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-2 pt-1">
              {!isSessionActive ? (
                <button
                  type="button"
                  onClick={handlePlay}
                  className="w-full py-3 font-display text-sm font-semibold tracking-widest uppercase border border-accent/40 transition-smooth hover:shadow-warm-glow"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--primary) / 0.15), oklch(var(--accent) / 0.1))",
                    color: "oklch(var(--primary))",
                    borderRadius: "1px",
                  }}
                  data-ocid="mantra-play-btn"
                >
                  ▶ आरंभ करें · Begin {reps}× Recitation
                </button>
              ) : (
                <div className="flex gap-2">
                  {isPaused ? (
                    <button
                      type="button"
                      onClick={handleResume}
                      className="flex-1 py-3 font-display text-sm font-semibold tracking-widest border border-accent/40 transition-smooth"
                      style={{
                        background: "oklch(var(--primary) / 0.12)",
                        color: "oklch(var(--primary))",
                        borderRadius: "1px",
                      }}
                      data-ocid="mantra-resume-btn"
                    >
                      ▶ चालू · Resume
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handlePause}
                      className="flex-1 py-3 font-display text-sm font-semibold tracking-widest border border-border transition-smooth"
                      style={{
                        color: "oklch(var(--muted-foreground))",
                        borderRadius: "1px",
                        background: "oklch(var(--muted) / 0.4)",
                      }}
                      data-ocid="mantra-pause-btn"
                    >
                      ⏸ विराम · Pause
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleStop}
                    className="px-5 py-3 font-display text-sm font-semibold tracking-widest border border-border transition-smooth"
                    style={{
                      color: "oklch(var(--muted-foreground))",
                      borderRadius: "1px",
                    }}
                    data-ocid="mantra-stop-btn"
                  >
                    ◼
                  </button>
                </div>
              )}
            </div>

            <p className="font-body text-xs text-center italic text-muted-foreground pt-1">
              Deep devotional voice · Ancient saints' recitation style
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function MantraPage() {
  const [activeTab, setActiveTab] = useState<MainTab>("mala");

  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="manuscript-header-border mb-6" />
        <p className="text-verse-number tracking-[0.25em] mb-2">॥ मन्त्र पाठ ॥</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold italic text-primary mb-1">
          Sacred Mantras
        </h1>
        <p className="font-display text-base italic text-accent mb-3">
          — ancient chants for daily sādhana
        </p>
        <div className="ornate-rule text-sm">✦ ॐ ✦</div>
        <p className="font-body text-sm text-muted-foreground italic max-w-sm mx-auto mt-2">
          These sacred syllables have been chanted by saints and sages across
          millennia. With sincere repetition, they purify the mind and awaken
          the divine within.
        </p>
      </motion.div>

      {/* Main Tab Bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 border border-border overflow-x-auto"
        style={{ background: "oklch(var(--card) / 0.9)" }}
      >
        <div className="flex min-w-max">
          {MAIN_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              data-ocid={`mantra-main-tab-${tab.id}`}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-body border-r border-border/50 transition-smooth whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary/10 text-primary border-b-2"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
              }`}
              style={
                activeTab === tab.id
                  ? {
                      borderBottomColor: "oklch(var(--accent))",
                      borderBottomWidth: "2px",
                    }
                  : {}
              }
            >
              <span className="text-base">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
              <span className="hidden md:inline font-display text-xs italic opacity-60">
                {tab.labelSanskrit}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === "mala" && <MantaMalaSection />}
          {activeTab === "108-mantras" && <Mantras108Section />}
          {activeTab === "prahar-pooja" && <PraharPoojaSection />}
          {activeTab === "shodashopachara" && <ShodashSection />}
          {activeTab === "varna-dharma" && <VarnaDharmaSection />}
        </motion.div>
      </AnimatePresence>

      <div className="manuscript-header-border mt-12" />
    </div>
  );
}
