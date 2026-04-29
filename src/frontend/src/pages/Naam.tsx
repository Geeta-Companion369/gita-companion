import { useNaamHistory } from "@/hooks/use-naam-history";
import { usePoints } from "@/hooks/use-points";
import { useStreak } from "@/hooks/use-streak";
import { useTTS } from "@/hooks/use-tts";
import type { NaamSession } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────
type SoundMode = "bell" | "silent" | "chant";
type Phase = "setup" | "active" | "complete";

interface MantraOption {
  id: string;
  label: string;
  text: string;
  devanagari: string;
  transliteration: string;
  meaning: string;
  purpose: string;
}

// ─── 18 Mantras + Custom (matching required list exactly) ─────────────────────
const MANTRA_OPTIONS: MantraOption[] = [
  {
    id: "om-namah-shivaya",
    label: "1. Om Namah Shivaya",
    text: "Om Namah Shivaya",
    devanagari: "ॐ नमः शिवाय",
    transliteration: "Om Namaḥ Śivāya",
    meaning:
      "I bow to Shiva — the five sacred syllables Na-Ma-Shi-Va-Ya represent the five elements of all creation.",
    purpose:
      "For inner peace, purification, and Shiva's grace — Krishna Yajurveda, Shri Rudram",
  },
  {
    id: "hare-krishna",
    label: "2. Hare Krishna Maha Mantra",
    text: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare",
    devanagari: "हरे कृष्ण हरे कृष्ण\nकृष्ण कृष्ण हरे हरे\nहरे राम हरे राम\nराम राम हरे हरे",
    transliteration:
      "Hare Krishna Hare Krishna\nKrishna Krishna Hare Hare\nHare Rama Hare Rama\nRama Rama Hare Hare",
    meaning:
      "O Hari, O Krishna, O Rama — I surrender to you completely, body, mind, and soul. This Maha Mantra is the supreme liberation mantra for the age of Kali.",
    purpose: "For liberation and devotion — Kali Santarana Upanishad",
  },
  {
    id: "vasudevaya",
    label: "3. Om Namo Bhagavate Vasudevaya",
    text: "Om Namo Bhagavate Vasudevaya",
    devanagari: "ॐ नमो भगवते वासुदेवाय",
    transliteration: "Om Namo Bhagavate Vāsudevāya",
    meaning:
      "I bow to the Supreme Lord Vasudeva — all-pervading Krishna, the source of all existence. The 12-syllable Dvadashakshara mantra.",
    purpose: "For Krishna's blessing and liberation — Bhagavata Purana",
  },
  {
    id: "gayatri",
    label: "4. Gayatri Mantra",
    text: "Om Bhur Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Pracodayāt",
    devanagari:
      "ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात्",
    transliteration:
      "Om Bhur Bhuvaḥ Svaḥ\nTat Savitur Vareṇyaṃ\nBhargo Devasya Dhīmahi\nDhiyo Yo Naḥ Pracodayāt",
    meaning:
      "We meditate on the divine radiance of Savitr, the cosmic sun. May that divine light illuminate and inspire our intellect.",
    purpose: "For divine wisdom, intellect, and success — Rigveda 3.62.10",
  },
  {
    id: "mahamrityunjaya",
    label: "5. Mahamrityunjaya Mantra",
    text: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat",
    devanagari:
      "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्",
    transliteration:
      "Om Tryambakam Yajāmahe Sugandhim Puṣṭivardhanam\nUrvārukamiva Bandhanān Mṛtyor Mukṣīya Māmṛtāt",
    meaning:
      "We worship the three-eyed Lord Shiva. May he liberate us from death as a ripe cucumber is freed from its vine — into immortality, not from immortality.",
    purpose: "For healing, overcoming death fear, liberation — Rigveda 7.59.12",
  },
  {
    id: "ganesha",
    label: "6. Om Gam Ganapataye Namah",
    text: "Om Gam Ganapataye Namah",
    devanagari: "ॐ गं गणपतये नमः",
    transliteration: "Om Gaṃ Gaṇapataye Namaḥ",
    meaning:
      "I bow to Lord Ganesha — the remover of all obstacles, granter of wisdom, lord of all beginnings. The bija Gam activates Ganesha's energy.",
    purpose:
      "For removing obstacles and new beginnings — Ganapati Atharvasirsha",
  },
  {
    id: "lakshmi",
    label: "7. Om Sri Maha Lakshmyai Namah",
    text: "Om Shree Maha Lakshmiyai Namah",
    devanagari: "ॐ श्री महालक्ष्म्यै नमः",
    transliteration: "Om Śrī Mahālakṣmyai Namaḥ",
    meaning:
      "I bow to Mahalakshmi — the goddess of wealth, prosperity, grace, and all divine abundance. Shri is her sacred seed syllable.",
    purpose: "For prosperity and abundance — Lakshmi Tantra",
  },
  {
    id: "saraswati",
    label: "8. Om Aim Saraswatyai Namah",
    text: "Om Aim Saraswatyai Namah",
    devanagari: "ॐ ऐं सरस्वत्यै नमः",
    transliteration: "Om Aim Sarasvatyai Namaḥ",
    meaning:
      "I bow to Saraswati — divine mother of learning, speech, art, and all knowledge. Aim is her sacred bija syllable of intelligence.",
    purpose: "For knowledge, learning, and arts — Devi Bhagavata Purana",
  },
  {
    id: "durga",
    label: "9. Om Dum Durgayai Namah",
    text: "Om Dum Durgayai Namah",
    devanagari: "ॐ दुं दुर्गायै नमः",
    transliteration: "Om Duṃ Durgāyai Namaḥ",
    meaning:
      "I bow to Durga — the fierce and protective mother. Dum is Durga's bija that activates divine protection from all negative forces.",
    purpose: "For protection from evil and divine courage — Durga Saptashati",
  },
  {
    id: "rama",
    label: "10. Sri Rama Jaya Rama",
    text: "Sri Rama Jaya Rama Jaya Jaya Rama",
    devanagari: "श्री राम जय राम जय जय राम",
    transliteration: "Śrī Rāma Jaya Rāma Jaya Jaya Rāma",
    meaning:
      "Victory to Sri Rama — this Tarak mantra contains the essence of the Vedas. It is said to be equal to reciting all 1000 names of Vishnu.",
    purpose:
      "For dharma, protection, and liberation — Sampoorna Ramayana tradition",
  },
  {
    id: "hanuman",
    label: "11. Om Shri Hanumate Namah",
    text: "Om Shree Hanumate Namah",
    devanagari: "ॐ श्री हनुमते नमः",
    transliteration: "Om Śrī Hanumate Namaḥ",
    meaning:
      "I bow to the great Hanuman — son of Anjana and Vayu, the mighty devotee of Rama, destroyer of all obstacles and fear.",
    purpose:
      "For strength, protection, and devotion — Hanuman Stotra tradition",
  },
  {
    id: "narayanaya",
    label: "12. Om Namo Narayanaya",
    text: "Om Namo Narayanaya",
    devanagari: "ॐ नमो नारायणाय",
    transliteration: "Om Namo Nārāyaṇāya",
    meaning:
      "I bow to Narayana — the all-pervading, all-sustaining Lord Vishnu who dwells in the hearts of all beings as pure consciousness.",
    purpose: "For Vishnu's grace and universal peace — Vishnu Purana",
  },
  {
    id: "om-sri-ramaya",
    label: "13. Om Sri Ramaya Namah",
    text: "Om Sri Ramaya Namah",
    devanagari: "ॐ श्री रामाय नमः",
    transliteration: "Om Śrī Rāmāya Namaḥ",
    meaning:
      "I bow to Sri Rama — the ideal man, the embodiment of dharma, compassion, and righteousness. Rama's name itself is a complete prayer.",
    purpose:
      "For righteous living and Rama's grace — Valmiki Ramayana tradition",
  },
  {
    id: "sarveshaam",
    label: "14. Sarveshaam Svastir Bhavatu (Universal Peace)",
    text: "Sarveshaam Svastir Bhavatu Sarveshaam Shantir Bhavatu Sarveshaam Purnam Bhavatu Sarveshaam Mangalam Bhavatu Om Shanti Shanti Shanti",
    devanagari:
      "सर्वेषां स्वस्तिर्भवतु\nसर्वेषां शान्तिर्भवतु\nसर्वेषां पूर्णं भवतु\nसर्वेषां मङ्गलं भवतु\nॐ शान्तिः शान्तिः शान्तिः",
    transliteration:
      "Sarveṣāṃ Svastir Bhavatu\nSarveṣāṃ Shāntir Bhavatu\nSarveṣāṃ Pūrṇaṃ Bhavatu\nSarveṣāṃ Maṅgalaṃ Bhavatu\nOm Shāntih Shāntih Shāntih",
    meaning:
      "May there be wellbeing for all. May there be peace for all. May there be fullness for all. May there be auspiciousness for all. Om peace, peace, peace.",
    purpose: "Universal wellbeing and peace — Upanishad tradition",
  },
  {
    id: "asato-ma",
    label: "15. Asatoma Sadgamaya (Complete)",
    text: "Asato Ma Sadgamaya Tamaso Ma Jyotirgamaya Mrityor Ma Amritam Gamaya Om Shanti Shanti Shantihi",
    devanagari:
      "असतो मा सद्गमय\nतमसो मा ज्योतिर्गमय\nमृत्योर्मा अमृतं गमय\nॐ शान्तिः शान्तिः शान्तिः",
    transliteration:
      "Asato Mā Sadgamaya\nTamaso Mā Jyotirgamaya\nMṛtyor Mā Amṛtaṃ Gamaya\nOm Śāntiḥ Śāntiḥ Śāntiḥ",
    meaning:
      "Lead me from the unreal to the Real. Lead me from darkness to Light. Lead me from death to Immortality. Om — triple peace.",
    purpose: "From darkness to light — Brihadaranyaka Upanishad 1.3.28",
  },
  {
    id: "lokah-samastah",
    label: "16. Lokah Samastah Sukhino Bhavantu",
    text: "Lokah Samastah Sukhino Bhavantu Om Shanti Shanti Shantihi",
    devanagari: "लोकाः समस्ताः सुखिनो भवन्तु\nॐ शान्तिः शान्तिः शान्तिः",
    transliteration: "Lokāḥ Samastāḥ Sukhino Bhavantu\nOm Śāntiḥ Śāntiḥ Śāntiḥ",
    meaning:
      "May all beings in all worlds be happy and free. This universal prayer of compassion removes suffering for all.",
    purpose:
      "For universal happiness and compassion — Yoga and Vedantic tradition",
  },
  {
    id: "om-tryambakam",
    label: "17. Om Tryambakam (Mahamrityunjaya full)",
    text: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat",
    devanagari:
      "ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम्\nउर्वारुकमिव बन्धनान्\nमृत्योर्मुक्षीय मामृतात्",
    transliteration:
      "Om Tryambakam Yajāmahe\nSugandhim Puṣṭivardhanam\nUrvārukamiva Bandhanān\nMṛtyor Mukṣīya Māmṛtāt",
    meaning:
      "We worship the three-eyed Shiva who is fragrant and who nourishes all — may he liberate us from death as a ripe cucumber is freed from its vine, but not from immortality.",
    purpose: "For healing, protection, and liberation — Rigveda 7.59.12",
  },
  {
    id: "om-tat-sat",
    label: "18. Om Tat Sat",
    text: "Om Tat Sat",
    devanagari: "ॐ तत् सत्",
    transliteration: "Om Tat Sat",
    meaning:
      "Om — That — Truth. The three great truths of existence: Brahman (Om), the Supreme Reality (Tat), and the eternal Truth (Sat). This Mahavakya is the essence of all Vedic wisdom.",
    purpose: "For supreme truth and liberation — Bhagavad Gita 17.23",
  },
  {
    id: "custom",
    label: "19. ✍ Write Your Own Sacred Mantra",
    text: "",
    devanagari: "",
    transliteration: "",
    meaning: "Your personal mantra — chosen from your heart for your practice.",
    purpose: "Your own sacred path",
  },
];

const TARGET_OPTIONS = [27, 54, 108];

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function playBellSound() {
  if (typeof window === "undefined" || !window.AudioContext) return;
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 1.2);
    gain.gain.setValueAtTime(0.6, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.5);
  } catch {
    // AudioContext not supported
  }
}

// ─── Tally marks ───────────────────────────────────────────────────────────────
function ManuscriptTally({ reps, target }: { reps: number; target: number }) {
  const capped = Math.min(reps, target);
  const groups = Math.floor(capped / 5);
  const remainder = capped % 5;

  return (
    <div>
      <p className="text-verse-number mb-2 text-center">Repetitions Counted</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {Array.from({ length: groups }, (__, gi) => gi + 1).map((groupNum) => (
          <svg
            key={`tally-group-${groupNum}`}
            viewBox="0 0 28 32"
            className="w-7 h-8"
            aria-hidden="true"
          >
            <title>5 repetitions</title>
            {[5, 11, 17, 23].map((x) => (
              <line
                key={x}
                x1={x}
                y1="2"
                x2={x}
                y2="30"
                stroke="oklch(0.28 0.08 36)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ))}
            <line
              x1="2"
              y1="28"
              x2="26"
              y2="4"
              stroke="oklch(0.48 0.18 44)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ))}
        {remainder > 0 && (
          <svg viewBox="0 0 28 32" className="w-7 h-8" aria-hidden="true">
            <title>{remainder} partial repetitions</title>
            {Array.from({ length: remainder }, (__, idx) => idx).map(
              (markPos) => (
                <line
                  key={`tally-rem-${markPos}`}
                  x1={5 + markPos * 6}
                  y1="2"
                  x2={5 + markPos * 6}
                  y2="30"
                  stroke="oklch(0.28 0.08 36)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ),
            )}
          </svg>
        )}
        {capped === 0 && (
          <p
            className="font-body text-xs italic"
            style={{ color: "oklch(0.58 0.06 52)" }}
          >
            marks appear as you write…
          </p>
        )}
      </div>
      <p
        className="text-center font-display text-3xl font-bold mt-3"
        style={{ color: "oklch(0.48 0.18 44)" }}
      >
        {reps}
        <span
          className="font-body text-base font-normal ml-1"
          style={{ color: "oklch(0.52 0.06 50)" }}
        >
          / {target}
        </span>
      </p>
    </div>
  );
}

function SessionEntry({ session }: { session: NaamSession }) {
  return (
    <div
      className="flex items-start justify-between py-3 border-b border-dashed"
      style={{ borderColor: "oklch(0.72 0.08 52 / 0.4)" }}
    >
      <div>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.22 0.04 42)" }}
        >
          {session.mantra}
        </p>
        <p
          className="font-body text-xs mt-0.5"
          style={{ color: "oklch(0.52 0.06 50)" }}
        >
          {formatDate(session.timestamp)}
        </p>
      </div>
      <span
        className="font-display text-sm font-bold shrink-0 ml-4"
        style={{ color: "oklch(0.48 0.18 44)" }}
      >
        {session.reps} reps
      </span>
    </div>
  );
}

function WeeklyRecord({ weeklyDays }: { weeklyDays: boolean[] }) {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return (
    <div className="flex items-end gap-2 justify-center">
      {days.map((d, i) => (
        <div key={d} className="flex flex-col items-center gap-1">
          <div
            className="w-7 h-7 flex items-center justify-center text-xs font-body transition-smooth"
            style={{
              background: weeklyDays[i]
                ? "radial-gradient(circle, oklch(0.65 0.20 48), oklch(0.50 0.18 42))"
                : "oklch(0.84 0.06 56)",
              border: weeklyDays[i]
                ? "1px solid oklch(0.45 0.16 42)"
                : "1px solid oklch(0.72 0.07 52 / 0.5)",
              borderRadius: "50%",
              color: weeklyDays[i]
                ? "oklch(0.94 0.05 58)"
                : "oklch(0.60 0.05 50)",
              boxShadow: weeklyDays[i]
                ? "0 1px 6px oklch(0.52 0.18 44 / 0.4)"
                : "none",
            }}
            aria-label={weeklyDays[i] ? `${d} — practiced` : `${d} — rest`}
          >
            {weeklyDays[i] ? "✓" : ""}
          </div>
          <span
            className="font-body text-[9px]"
            style={{ color: "oklch(0.55 0.05 50)" }}
          >
            {d}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Mantra Info Panel ─────────────────────────────────────────────────────────
function MantraInfoPanel({ mantra }: { mantra: MantraOption }) {
  if (!mantra.devanagari) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      className="mt-4 p-4 rounded"
      style={{
        background: "oklch(0.94 0.06 62 / 0.7)",
        border: "1px solid oklch(0.70 0.10 50 / 0.4)",
      }}
    >
      <p
        className="font-display font-semibold text-center whitespace-pre-line leading-loose mb-2"
        style={{
          fontSize: "clamp(0.95rem, 3vw, 1.15rem)",
          color: "oklch(0.18 0.10 32)",
          lineHeight: 2,
        }}
      >
        {mantra.devanagari}
      </p>
      <p
        className="font-body italic text-center text-xs mb-2 whitespace-pre-line"
        style={{ color: "oklch(0.42 0.10 46)", lineHeight: 1.7 }}
      >
        {mantra.transliteration}
      </p>
      <p
        className="font-body text-xs text-center italic"
        style={{ color: "oklch(0.38 0.08 46)" }}
      >
        <span style={{ color: "oklch(0.52 0.16 46)", fontWeight: 600 }}>
          Meaning:{" "}
        </span>
        {mantra.meaning}
      </p>
      <p
        className="font-body text-[10px] text-center mt-1"
        style={{ color: "oklch(0.58 0.06 50)" }}
      >
        {mantra.purpose}
      </p>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export function NaamPage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [selectedMantraId, setSelectedMantraId] = useState(
    MANTRA_OPTIONS[2].id,
  );
  const [customMantraText, setCustomMantraText] = useState("");
  const [targetReps, setTargetReps] = useState(108);
  const [soundMode, setSoundMode] = useState<SoundMode>("bell");
  const [reps, setReps] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [mistake, setMistake] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showMantraInfo, setShowMantraInfo] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chantIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { addSession, history, todaySessions, totalReps } = useNaamHistory();
  const { addPoints } = usePoints();
  const { recordPractice } = useStreak();
  const { speak, stop, isSpeaking } = useTTS();

  const selectedMantra =
    MANTRA_OPTIONS.find((m) => m.id === selectedMantraId) ?? MANTRA_OPTIONS[0];
  const activeMantraText =
    selectedMantra.id === "custom" ? customMantraText : selectedMantra.text;

  useEffect(() => {
    if (phase === "active") {
      timerRef.current = setInterval(
        () => setElapsedSeconds((s) => s + 1),
        1000,
      );
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "active" && soundMode === "chant" && activeMantraText) {
      const loop = () => {
        speak(activeMantraText, "en", "male", 0.7);
      };
      loop();
      chantIntervalRef.current = setInterval(loop, 8000);
    } else {
      stop();
      if (chantIntervalRef.current) clearInterval(chantIntervalRef.current);
    }
    return () => {
      stop();
      if (chantIntervalRef.current) clearInterval(chantIntervalRef.current);
    };
  }, [phase, soundMode, activeMantraText, speak, stop]);

  useEffect(() => {
    if (phase === "active") setTimeout(() => inputRef.current?.focus(), 100);
  }, [phase]);

  const handleStart = useCallback(() => {
    if (!activeMantraText.trim()) return;
    setPhase("active");
    setReps(0);
    setInputVal("");
    setMistake(false);
    setElapsedSeconds(0);
  }, [activeMantraText]);

  const handleSubmitEntry = useCallback(
    (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return;
      const isCorrect =
        trimmed.toLowerCase() === activeMantraText.toLowerCase();
      if (!isCorrect) {
        setMistake(true);
        setTimeout(() => setMistake(false), 2000);
      }
      const newReps = reps + 1;
      setReps(newReps);
      setInputVal("");
      if (soundMode === "bell") playBellSound();
      if (newReps >= targetReps) {
        setPhase("complete");
        addSession(activeMantraText, newReps);
        addPoints(
          "writing",
          newReps >= 108 ? 10 : Math.round((newReps / 108) * 10),
        );
        recordPractice();
      }
    },
    [
      reps,
      activeMantraText,
      targetReps,
      soundMode,
      addSession,
      addPoints,
      recordPractice,
    ],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputVal(e.target.value);
    },
    [],
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSubmitEntry(inputVal);
    },
    [inputVal, handleSubmitEntry],
  );

  const handleReset = useCallback(() => {
    setPhase("setup");
    setReps(0);
    setInputVal("");
    setMistake(false);
    setElapsedSeconds(0);
    stop();
  }, [stop]);

  const weeklyDays = (() => {
    const days: boolean[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      days.push(history.some((s) => s.date === dateStr));
    }
    return days;
  })();

  const todayReps = todaySessions.reduce((sum, s) => sum + s.reps, 0);

  const parchmentPanel = {
    background: "oklch(0.91 0.07 58 / 0.6)",
    border: "1px solid oklch(0.72 0.08 52 / 0.45)",
    borderRadius: "2px",
    boxShadow:
      "inset 0 1px 0 rgba(255,248,220,0.3), 0 2px 8px rgba(80,55,30,0.08)",
  };

  return (
    <div className="max-w-2xl mx-auto pb-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-2">Sacred Sadhana</p>
        <h1 className="chapter-header">Naam Writing Practice</h1>
        <p className="text-translation mt-2 mx-auto max-w-md">
          Write the sacred name with full devotion. Each repetition purifies the
          mind and draws the soul closer to the Divine.
        </p>
        <div className="divider-ornate mt-4">
          <span>ॐ</span>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
          {[
            { label: "Lifetime Reps", value: totalReps },
            { label: "Today's Reps", value: todayReps },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p
                className="font-display text-2xl font-bold"
                style={{ color: "oklch(0.48 0.18 44)" }}
              >
                {value}
              </p>
              <p
                className="font-body text-xs italic"
                style={{ color: "oklch(0.52 0.06 50)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weekly Practice Record */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mb-6"
      >
        <div className="p-4" style={parchmentPanel}>
          <p className="text-verse-number mb-3 text-center">
            This Week's Practice
          </p>
          <WeeklyRecord weeklyDays={weeklyDays} />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* ── SETUP PHASE ─────────────────────────────── */}
        {phase === "setup" && (
          <motion.div
            key="setup"
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 space-y-6" style={parchmentPanel}>
              {/* Mantra selection */}
              <div>
                <p
                  className="text-verse-number mb-3"
                  style={{
                    borderBottom: "1px solid oklch(0.70 0.10 50 / 0.3)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  I. Select the Sacred Name
                </p>
                <div className="space-y-1.5">
                  {MANTRA_OPTIONS.map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => {
                        setSelectedMantraId(m.id);
                        setShowMantraInfo(m.id !== "custom");
                      }}
                      className="w-full text-left transition-smooth"
                      style={{
                        padding: "0.6rem 1rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontStyle:
                          selectedMantraId === m.id ? "italic" : "normal",
                        fontWeight: selectedMantraId === m.id ? "600" : "400",
                        color:
                          selectedMantraId === m.id
                            ? "oklch(0.22 0.06 38)"
                            : "oklch(0.48 0.05 50)",
                        background:
                          selectedMantraId === m.id
                            ? "oklch(0.89 0.09 57)"
                            : "transparent",
                        border:
                          selectedMantraId === m.id
                            ? "1px solid oklch(0.62 0.12 48)"
                            : "1px solid transparent",
                        borderRadius: "2px",
                      }}
                      data-ocid={`naam-mantra-${m.id}`}
                    >
                      {selectedMantraId === m.id ? "❯ " : "  "}
                      {m.label}
                    </button>
                  ))}
                </div>

                {/* Mantra Info — Sanskrit + Meaning */}
                <AnimatePresence>
                  {showMantraInfo && selectedMantraId !== "custom" && (
                    <MantraInfoPanel mantra={selectedMantra} />
                  )}
                </AnimatePresence>

                {selectedMantraId === "custom" && (
                  <motion.input
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    type="text"
                    value={customMantraText}
                    onChange={(e) => setCustomMantraText(e.target.value)}
                    placeholder="Write your personal mantra here…"
                    className="mt-3 w-full focus:outline-none"
                    style={{
                      padding: "0.65rem 1rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      background: "oklch(0.93 0.07 60 / 0.8)",
                      border: "1px solid oklch(0.65 0.10 50)",
                      borderRadius: "2px",
                      color: "oklch(0.22 0.04 42)",
                    }}
                    data-ocid="naam-custom-mantra-input"
                  />
                )}

                {/* Toggle info */}
                {selectedMantraId !== "custom" && (
                  <button
                    type="button"
                    onClick={() => setShowMantraInfo((v) => !v)}
                    className="mt-2 font-body text-xs italic transition-smooth"
                    style={{ color: "oklch(0.48 0.12 46)" }}
                  >
                    {showMantraInfo
                      ? "▲ Hide Sanskrit"
                      : "▼ Show Sanskrit & Meaning"}
                  </button>
                )}
              </div>

              {/* Target selection */}
              <div>
                <p
                  className="text-verse-number mb-3"
                  style={{
                    borderBottom: "1px solid oklch(0.70 0.10 50 / 0.3)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  II. Set Daily Target
                </p>
                <div className="flex gap-3">
                  {TARGET_OPTIONS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTargetReps(t)}
                      className="flex-1 py-3 transition-smooth"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        fontStyle: "italic",
                        color:
                          targetReps === t
                            ? "oklch(0.92 0.07 58)"
                            : "oklch(0.42 0.06 50)",
                        background:
                          targetReps === t
                            ? "linear-gradient(135deg, oklch(0.42 0.14 38) 0%, oklch(0.54 0.20 46) 100%)"
                            : "oklch(0.88 0.06 56 / 0.6)",
                        border:
                          targetReps === t
                            ? "1px solid oklch(0.38 0.14 38)"
                            : "1px solid oklch(0.72 0.07 52 / 0.5)",
                        borderRadius: "2px",
                        boxShadow:
                          targetReps === t
                            ? "0 2px 10px rgba(80,55,30,0.2)"
                            : "none",
                      }}
                      data-ocid={`naam-target-${t}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p
                  className="font-body text-xs italic mt-2"
                  style={{ color: "oklch(0.52 0.06 50)" }}
                >
                  27 = trinitarian · 54 = half mala · 108 = full mala
                </p>
              </div>

              {/* Sound mode */}
              <div>
                <p
                  className="text-verse-number mb-3"
                  style={{
                    borderBottom: "1px solid oklch(0.70 0.10 50 / 0.3)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  III. Sound Accompaniment
                </p>
                <div className="flex gap-2">
                  {(
                    [
                      {
                        id: "bell",
                        label: "🔔 Bell",
                        desc: "ring after each rep",
                      },
                      {
                        id: "silent",
                        label: "🤫 Silent",
                        desc: "pure inner practice",
                      },
                      {
                        id: "chant",
                        label: "🎵 Background Chant",
                        desc: "mantra loops softly",
                      },
                    ] as const
                  ).map(({ id, label, desc }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setSoundMode(id)}
                      className="flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-smooth"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color:
                          soundMode === id
                            ? "oklch(0.28 0.08 36)"
                            : "oklch(0.52 0.06 50)",
                        background:
                          soundMode === id
                            ? "oklch(0.89 0.09 57)"
                            : "transparent",
                        border:
                          soundMode === id
                            ? "1px solid oklch(0.62 0.12 48)"
                            : "1px solid oklch(0.72 0.07 52 / 0.4)",
                        borderRadius: "2px",
                      }}
                      data-ocid={`naam-sound-${id}`}
                    >
                      <span>{label}</span>
                      <span className="text-[10px] italic opacity-70">
                        {desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleStart}
              disabled={!activeMantraText.trim()}
              className="w-full transition-smooth"
              style={{
                padding: "0.85rem 2rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                fontWeight: "600",
                color: !activeMantraText.trim()
                  ? "oklch(0.60 0.05 50)"
                  : "oklch(0.92 0.07 58)",
                background: !activeMantraText.trim()
                  ? "oklch(0.82 0.05 56)"
                  : "linear-gradient(135deg, oklch(0.38 0.12 36) 0%, oklch(0.54 0.20 46) 100%)",
                border: "1px solid oklch(0.42 0.14 40 / 0.8)",
                borderRadius: "2px",
                boxShadow: !activeMantraText.trim()
                  ? "none"
                  : "0 3px 16px rgba(80,55,30,0.25)",
                cursor: !activeMantraText.trim() ? "not-allowed" : "pointer",
              }}
              data-ocid="naam-start-btn"
            >
              ✦ Begin Writing Session ✦
            </button>
          </motion.div>
        )}

        {/* ── ACTIVE PHASE ─────────────────────────────── */}
        {phase === "active" && (
          <motion.div
            key="active"
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="relative p-6"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, oklch(0.94 0.07 62 / 0.9) 0%, oklch(0.89 0.09 56 / 0.7) 100%)",
                border: "1px solid oklch(0.70 0.09 52 / 0.5)",
                borderRadius: "2px",
                boxShadow:
                  "inset 0 2px 12px rgba(80,55,30,0.06), 0 2px 12px rgba(80,55,30,0.10)",
              }}
            >
              <div
                className="absolute top-12 left-5 right-5 h-px"
                style={{ background: "oklch(0.68 0.10 50 / 0.15)" }}
              />
              <div
                className="absolute top-16 left-5 right-5 h-px"
                style={{ background: "oklch(0.68 0.10 50 / 0.08)" }}
              />

              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-verse-number mb-1">
                    Write This Sacred Name
                  </p>
                  <p
                    className="font-display text-xl font-bold italic leading-tight"
                    style={{ color: "oklch(0.28 0.08 36)" }}
                  >
                    {activeMantraText}
                  </p>
                  <p
                    className="font-body text-xs italic mt-1"
                    style={{ color: "oklch(0.52 0.08 50)" }}
                  >
                    — {formatDuration(elapsedSeconds)} elapsed
                  </p>
                </div>
                {soundMode === "chant" && (
                  <button
                    type="button"
                    onClick={() =>
                      isSpeaking
                        ? stop()
                        : speak(activeMantraText, "en", "male")
                    }
                    className="font-body text-xs italic mb-2 block transition-smooth shrink-0"
                    style={{
                      color: isSpeaking
                        ? "oklch(0.48 0.18 44)"
                        : "oklch(0.58 0.06 52)",
                    }}
                    aria-label={isSpeaking ? "Pause chant" : "Resume chant"}
                  >
                    {isSpeaking ? "♪ chanting…" : "♪ paused"}
                  </button>
                )}
              </div>

              {/* Show Devanagari during active practice */}
              {selectedMantra.devanagari && (
                <div
                  className="mb-4 p-3 text-center"
                  style={{
                    background: "oklch(0.96 0.05 68 / 0.6)",
                    border: "1px solid oklch(0.72 0.10 52 / 0.35)",
                    borderRadius: "2px",
                  }}
                >
                  <p
                    className="font-display font-semibold whitespace-pre-line"
                    style={{
                      fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                      color: "oklch(0.18 0.10 32)",
                      lineHeight: 2,
                    }}
                  >
                    {selectedMantra.devanagari}
                  </p>
                </div>
              )}

              <div
                className="mb-6 py-4"
                style={{
                  borderTop: "1px dashed oklch(0.68 0.08 52 / 0.35)",
                  borderBottom: "1px dashed oklch(0.68 0.08 52 / 0.35)",
                }}
              >
                <ManuscriptTally reps={reps} target={targetReps} />
                {/* Progress bar toward 108 */}
                <div className="mt-4 px-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                      className="font-body text-[10px] italic"
                      style={{ color: "oklch(0.52 0.08 50)" }}
                    >
                      Progress toward {targetReps}
                    </span>
                    <span
                      className="font-display text-[10px] font-bold"
                      style={{ color: "oklch(0.48 0.18 44)" }}
                    >
                      {Math.round(
                        (Math.min(reps, targetReps) / targetReps) * 100,
                      )}
                      %
                    </span>
                  </div>
                  <div
                    className="h-2.5 rounded-full overflow-hidden"
                    style={{
                      background: "oklch(0.84 0.06 56)",
                      border: "1px solid oklch(0.70 0.08 52 / 0.3)",
                    }}
                    data-ocid="naam-progress-bar"
                    aria-label={`${Math.min(reps, targetReps)} of ${targetReps} repetitions completed`}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.62 0.22 46), oklch(0.72 0.28 52), oklch(0.78 0.30 54))",
                        boxShadow: "0 0 6px oklch(0.68 0.24 50 / 0.5)",
                      }}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.round((Math.min(reps, targetReps) / targetReps) * 100)}%`,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  {/* Milestone markers */}
                  <div className="flex justify-between mt-1">
                    {[27, 54, 108]
                      .filter((m) => m <= targetReps)
                      .map((milestone) => (
                        <div
                          key={milestone}
                          className="flex flex-col items-center"
                        >
                          <div
                            className="w-0.5 h-1.5 rounded-full"
                            style={{
                              background:
                                reps >= milestone
                                  ? "oklch(0.58 0.20 46)"
                                  : "oklch(0.72 0.06 52 / 0.4)",
                            }}
                          />
                          <span
                            className="font-body text-[8px] italic"
                            style={{
                              color:
                                reps >= milestone
                                  ? "oklch(0.48 0.18 44)"
                                  : "oklch(0.62 0.05 50)",
                            }}
                          >
                            {milestone}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <AnimatePresence>
                  {mistake && (
                    <motion.p
                      className="font-body text-sm italic"
                      style={{ color: "oklch(0.45 0.18 22)" }}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      ⚠ Check your spelling — write with full devotion
                    </motion.p>
                  )}
                </AnimatePresence>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  onPaste={(e) => e.preventDefault()}
                  onCopy={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                  onCut={(e) => e.preventDefault()}
                  placeholder={`Write "${activeMantraText}" and press Enter…`}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  className="w-full focus:outline-none"
                  style={{
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    background: "oklch(0.95 0.06 62 / 0.7)",
                    border: mistake
                      ? "1px solid oklch(0.45 0.18 22)"
                      : "1px solid oklch(0.65 0.10 50 / 0.6)",
                    borderBottom: mistake
                      ? "2px solid oklch(0.45 0.18 22)"
                      : "2px solid oklch(0.55 0.14 46 / 0.5)",
                    borderRadius: "1px",
                    color: "oklch(0.18 0.04 42)",
                    letterSpacing: "0.03em",
                  }}
                  data-ocid="naam-input"
                />
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.55 0.06 52)" }}
                >
                  Type the mantra exactly · press Enter to submit · copy/paste
                  disabled
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full transition-smooth"
              style={{
                padding: "0.6rem 1.5rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                fontStyle: "italic",
                color: "oklch(0.42 0.06 48)",
                background: "transparent",
                border: "1px solid oklch(0.70 0.07 52 / 0.5)",
                borderRadius: "2px",
              }}
              data-ocid="naam-abandon-btn"
            >
              — Abandon Session —
            </button>
          </motion.div>
        )}

        {/* ── COMPLETE PHASE ─────────────────────────────── */}
        {phase === "complete" && (
          <motion.div
            key="complete"
            className="space-y-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
          >
            <div
              className="relative text-center p-8"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 20%, oklch(0.94 0.07 62) 0%, oklch(0.89 0.09 56) 100%)",
                border: "2px solid oklch(0.62 0.12 48 / 0.6)",
                borderRadius: "2px",
                boxShadow:
                  "0 4px 24px rgba(80,55,30,0.2), inset 0 1px 0 rgba(255,248,220,0.4)",
              }}
            >
              {[
                "top-3 left-4",
                "top-3 right-4",
                "bottom-3 left-4",
                "bottom-3 right-4",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} font-display text-sm select-none pointer-events-none`}
                  style={{ color: "oklch(0.62 0.14 48 / 0.4)" }}
                  aria-hidden
                >
                  ✦
                </span>
              ))}

              <div className="divider-ornate">
                <span>✦ ✦ ✦</span>
              </div>
              <motion.p
                animate={{ rotate: [0, -8, 8, -8, 0] }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl leading-none my-4"
              >
                🙏
              </motion.p>
              <h2
                className="font-display text-2xl font-bold italic"
                style={{ color: "oklch(0.28 0.08 36)" }}
              >
                {reps >= 108
                  ? "108 Names Written!"
                  : `${reps} Sacred Names Written`}
              </h2>
              <p
                className="font-body text-sm italic mt-1"
                style={{ color: "oklch(0.52 0.10 46)" }}
              >
                ✨ Jai Shree Krishna ✨
              </p>
              <div className="divider-ornate my-4">
                <span>॥</span>
              </div>

              <div
                className="text-left space-y-2.5 text-sm font-body p-4 mb-6"
                style={{
                  background: "oklch(0.93 0.07 60 / 0.65)",
                  border: "1px solid oklch(0.70 0.10 50 / 0.4)",
                  borderRadius: "2px",
                }}
              >
                {[
                  { label: "Mantra", val: activeMantraText },
                  { label: "Repetitions", val: String(reps) },
                  { label: "Duration", val: formatDuration(elapsedSeconds) },
                  { label: "Sacred Points", val: "+10 ✦" },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="flex justify-between items-baseline gap-2"
                  >
                    <span
                      className="italic"
                      style={{ color: "oklch(0.52 0.06 50)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-medium text-right"
                      style={{
                        color:
                          label === "Sacred Points"
                            ? "oklch(0.48 0.18 44)"
                            : "oklch(0.28 0.08 36)",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 flex-col sm:flex-row">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 transition-smooth"
                  style={{
                    padding: "0.65rem 1.25rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                    fontWeight: "600",
                    color: "oklch(0.92 0.07 58)",
                    background:
                      "linear-gradient(135deg, oklch(0.38 0.12 36) 0%, oklch(0.52 0.18 44) 100%)",
                    border: "1px solid oklch(0.42 0.14 40)",
                    borderRadius: "2px",
                    boxShadow: "0 2px 12px rgba(80,55,30,0.25)",
                  }}
                  data-ocid="naam-new-session-btn"
                >
                  New Session
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPhase("active");
                    setReps(0);
                    setInputVal("");
                    setMistake(false);
                    setElapsedSeconds(0);
                  }}
                  className="flex-1 transition-smooth"
                  style={{
                    padding: "0.65rem 1.25rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                    color: "oklch(0.32 0.08 38)",
                    background: "transparent",
                    border: "1px solid oklch(0.62 0.12 48)",
                    borderRadius: "2px",
                  }}
                  data-ocid="naam-continue-btn"
                >
                  Same Mantra Again
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Session History */}
      {history.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="divider-ornate">
            <span>✦</span>
          </div>
          <div
            className="p-5"
            style={{
              background: "oklch(0.91 0.07 58 / 0.55)",
              border: "1px solid oklch(0.72 0.07 52 / 0.38)",
              borderRadius: "2px",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-verse-number">Naam Writing Record</p>
              <p
                className="font-body text-xs italic"
                style={{ color: "oklch(0.52 0.10 48)" }}
              >
                {history.length} sessions
              </p>
            </div>
            {history.slice(0, 10).map((s: NaamSession) => (
              <SessionEntry key={s.id} session={s} />
            ))}
          </div>
        </motion.div>
      )}

      {history.length === 0 && phase === "setup" && (
        <div
          className="mt-8 text-center py-10"
          data-ocid="naam-empty-state"
          style={{
            border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
            borderRadius: "2px",
            background: "oklch(0.91 0.07 58 / 0.3)",
          }}
        >
          <p
            className="font-display text-3xl mb-3"
            style={{ color: "oklch(0.58 0.18 48 / 0.6)" }}
          >
            ✍️
          </p>
          <p
            className="font-display text-base font-semibold italic"
            style={{ color: "oklch(0.28 0.08 36)" }}
          >
            Begin Your First Naam Session
          </p>
          <p
            className="font-body text-sm mt-2 italic"
            style={{ color: "oklch(0.52 0.06 50)" }}
          >
            Choose from 18 sacred mantras above and press Begin Session.
            <br />
            Your sessions will be recorded here.
          </p>
        </div>
      )}
    </div>
  );
}
