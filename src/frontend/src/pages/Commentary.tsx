import { VERSE_BY_ID } from "@/data/gita-index";
import type { GitaVerse } from "@/data/gita-verses-ch1";
import { usePoints } from "@/hooks/use-points";
import { useTTS } from "@/hooks/use-tts";
import type { VerseCommentary } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

// ─── 50 key verses ────────────────────────────────────────────────────────────
const KEY_VERSES = [
  "2.47",
  "2.20",
  "2.14",
  "2.19",
  "2.55",
  "2.62",
  "2.63",
  "3.8",
  "3.19",
  "3.35",
  "4.7",
  "4.8",
  "4.11",
  "4.18",
  "5.18",
  "6.5",
  "6.35",
  "6.47",
  "7.7",
  "8.5",
  "8.7",
  "9.22",
  "9.27",
  "9.34",
  "10.8",
  "10.20",
  "11.32",
  "11.55",
  "12.2",
  "12.13",
  "13.2",
  "13.12",
  "14.5",
  "15.7",
  "15.15",
  "16.2",
  "16.3",
  "17.3",
  "18.48",
  "18.65",
  "18.66",
  "18.58",
  "18.47",
  "3.16",
  "3.42",
  "2.48",
  "4.36",
  "6.5",
  "9.31",
  "4.24",
];

// ─── Static commentary data (shown if backend returns nothing) ────────────────
const STATIC_COMMENTARY: Record<string, VerseCommentary> = {
  "2.47": {
    verseId: "2.47",
    shankaracharya:
      "This verse is the cornerstone of Jnana Yoga. Shankara interprets 'your duty is to act' as the imperative of the discriminating intellect (Viveka). Action performed with equanimity of mind (Samatvam) and without desire for fruit purifies the inner instrument (antahkarana), preparing the seeker for the direct knowledge of Brahman. The three renunciations — of fruit, attachment, and inaction — dissolve the illusion of doership (Ahamkara).",
    ramanuja:
      "Ramanuja sees this verse as the supreme instruction in Karma Yoga as a means of worship. Every action offered to the Lord (Ishvara-Arpita) becomes an act of devotion. The Vishishtadvaita perspective holds that the jiva (individual soul), though distinct from Brahman, participates in divine activity. To act without grasping the fruit is to recognise that all results belong to the Lord who dwells within all beings as their inner controller (Antaryamin).",
    tilak:
      "Tilak reads this verse as a call to national and individual action. In Gita Rahasya, he argues that Karma Yoga is not passive renunciation but vigorous, selfless service. The activist must dedicate effort without anxiety about success or failure. This verse empowered India's independence movement — perform your duty with full strength, offer the outcome to dharma, and let no fear of defeat cause inaction.",
  },
  "18.66": {
    verseId: "18.66",
    shankaracharya:
      "This is the charama shloka — the final and supreme teaching. Shankara interprets 'sarva-dharman parityajya' as the abandonment of all prescribed duties once direct Self-knowledge has arisen. At the pinnacle of Advaita, the realised soul transcends even dharma, resting in the non-dual Brahman. 'Aham tvam sarvapapebhyo mokshayishyami' — 'I shall liberate you' — refers to the grace of the Self recognising itself.",
    ramanuja:
      "For Ramanuja, this verse is the essence of Prapatti — complete surrender to the Lord. Surrendering all dharmas means entrusting both action and result entirely to Vishnu. This is not nihilism but the highest form of devotion: placing oneself wholly in the hands of the compassionate Lord. 'Ma shuchah' — 'do not grieve' — is Krishna's personal assurance that surrender is not loss but liberation into divine protection.",
    tilak:
      "Tilak cautions against interpreting this verse as passive surrender. The abandonment of dharmas is not abandonment of action but of ego-based action. One must act on the highest dharma — the welfare of all beings — and trust that this selfless surrender to the cosmic order will bring liberation. This is the convergence of Karma, Jnana, and Bhakti in one supreme moment.",
  },
};

interface CommentaryCardProps {
  school: "shankaracharya" | "ramanuja" | "tilak";
  text: string;
  isLoading: boolean;
}

const SCHOOL_DATA = {
  shankaracharya: {
    label: "आदि शंकराचार्य",
    sublabel: "Advaita Vedanta — Non-dualism",
    intro: "8th century CE · Founder of Advaita Vedanta",
    borderColor: "oklch(0.45 0.18 280 / 0.45)",
    bgColor: "oklch(0.45 0.18 280 / 0.05)",
    accentColor: "oklch(0.52 0.2 280)",
    icon: "🔵",
  },
  ramanuja: {
    label: "रामानुजाचार्य",
    sublabel: "Vishishtadvaita — Qualified Non-dualism",
    intro: "11th century CE · Founder of Sri Vaishnavism",
    borderColor: "oklch(0.58 0.22 28 / 0.45)",
    bgColor: "oklch(0.58 0.22 28 / 0.05)",
    accentColor: "oklch(0.58 0.22 28)",
    icon: "🟠",
  },
  tilak: {
    label: "बाल गंगाधर तिलक",
    sublabel: "Karma Yoga — Active renunciation",
    intro: "19th century CE · Author of Gita Rahasya",
    borderColor: "oklch(0.48 0.16 145 / 0.45)",
    bgColor: "oklch(0.48 0.16 145 / 0.05)",
    accentColor: "oklch(0.48 0.16 145)",
    icon: "🟢",
  },
};

function CommentaryCard({ school, text, isLoading }: CommentaryCardProps) {
  const data = SCHOOL_DATA[school];
  return (
    <div
      className="p-5 rounded-sm h-full"
      style={{
        border: `1px solid ${data.borderColor}`,
        background: data.bgColor,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span aria-hidden="true">{data.icon}</span>
        <div className="min-w-0">
          <p
            className="font-display font-bold italic"
            style={{ fontSize: "1rem", color: data.accentColor }}
          >
            {data.label}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            {data.sublabel}
          </p>
        </div>
      </div>
      <p
        className="font-body text-xs text-muted-foreground italic mb-3"
        style={{
          borderBottom: `1px solid ${data.borderColor}`,
          paddingBottom: "0.5rem",
        }}
      >
        {data.intro}
      </p>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-8 gap-3">
          <span
            className="text-3xl"
            style={{
              display: "inline-block",
              animation: "spin 2s linear infinite",
              color: data.accentColor,
            }}
            aria-hidden="true"
          >
            ॐ
          </span>
          <p className="font-body text-xs text-muted-foreground italic">
            Fetching sacred commentary…
          </p>
        </div>
      ) : (
        <p className="font-body text-sm leading-relaxed text-foreground">
          {text ||
            "Commentary available for key verses. Select one of the featured verses above."}
        </p>
      )}
    </div>
  );
}

export function CommentaryPage() {
  const { addPoints } = usePoints();
  const { speak, stop, isSpeaking } = useTTS();
  const [selectedVerseId, setSelectedVerseId] = useState("2.47");
  const [commentary, setCommentary] = useState<VerseCommentary | null>(
    STATIC_COMMENTARY["2.47"] ?? null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "shankaracharya" | "ramanuja" | "tilak"
  >("shankaracharya");

  const verse: GitaVerse | null = VERSE_BY_ID[selectedVerseId] ?? null;

  const fetchCommentary = useCallback(async (verseId: string) => {
    setIsLoading(true);
    setCommentary(null);
    // Simulate brief loading, then use static data
    await new Promise<void>((resolve) => setTimeout(resolve, 300));
    const staticData = STATIC_COMMENTARY[verseId];
    setCommentary(staticData ?? null);
    setIsLoading(false);
  }, []);

  const handleVerseChange = (verseId: string) => {
    setSelectedVerseId(verseId);
    fetchCommentary(verseId);
    addPoints("reading", 1);
  };

  const handleSpeak = () => {
    if (!verse) return;
    if (isSpeaking) stop();
    else
      speak(verse.sanskrit, "hi", "male", 0.7, () =>
        speak(verse.english, "en", "male", 0.8),
      );
  };

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ आचार्य दर्शनम् ॥</p>
        <h1 className="chapter-header">Acharya Darshanam</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm italic">
          Scholars' Vision — Three Great Commentators on the Gita
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </motion.div>

      {/* Verse selector */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="sacred-card p-5">
          <p
            className="font-display text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--accent) / 0.7)" }}
          >
            ✦ Select a Key Verse
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <select
              data-ocid="commentary.verse_select"
              value={selectedVerseId}
              onChange={(e) => handleVerseChange(e.target.value)}
              className="flex-1 min-w-0 rounded border bg-card/80 px-3 py-2.5 font-body text-sm text-foreground"
              style={{ borderColor: "oklch(var(--accent) / 0.35)" }}
            >
              {KEY_VERSES.map((id) => {
                const v = VERSE_BY_ID[id];
                return (
                  <option key={id} value={id}>
                    {id} {v ? `— ${v.english.slice(0, 45)}…` : ""}
                  </option>
                );
              })}
            </select>
            <button
              type="button"
              data-ocid="commentary.listen_button"
              onClick={handleSpeak}
              className="transition-smooth font-body italic text-sm"
              style={{
                padding: "0.6rem 1.2rem",
                border: "1px solid oklch(var(--accent) / 0.35)",
                borderRadius: "2px",
                background: isSpeaking
                  ? "oklch(var(--accent) / 0.1)"
                  : "transparent",
                color: "oklch(var(--foreground))",
                whiteSpace: "nowrap",
              }}
            >
              {isSpeaking ? "⏹ Stop" : "▶ Listen"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Verse display */}
      {verse && (
        <motion.div
          key={verse.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div
            className="p-6 text-center"
            style={{
              background:
                "radial-gradient(ellipse at top, oklch(0.95 0.08 72) 0%, oklch(0.91 0.07 68) 100%)",
              border: "1px solid oklch(var(--accent) / 0.35)",
              borderRadius: "3px",
            }}
          >
            <span className="text-verse-number block mb-3">
              Chapter {verse.chapter}, Verse {verse.verse}
            </span>
            <p
              className="text-sanskrit text-center"
              style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.3rem)" }}
            >
              {verse.sanskrit}
            </p>
            <p
              className="font-body italic text-muted-foreground text-sm mb-3"
              style={{ letterSpacing: "0.02em" }}
            >
              {verse.transliteration}
            </p>
            <div className="ornate-rule my-3">
              <span className="text-accent text-sm">❧</span>
            </div>
            <p className="text-translation text-center">{verse.english}</p>
            {verse.hindi && (
              <p className="font-body text-sm text-muted-foreground italic mt-2">
                {verse.hindi}
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Commentary section */}
      <div className="max-w-4xl mx-auto">
        {/* Mobile tabs */}
        <div className="flex gap-1 mb-4 sm:hidden">
          {(["shankaracharya", "ramanuja", "tilak"] as const).map((school) => {
            const d = SCHOOL_DATA[school];
            return (
              <button
                key={school}
                type="button"
                data-ocid={`commentary.${school}_tab`}
                onClick={() => setActiveTab(school)}
                className="flex-1 py-2 font-display italic text-xs font-semibold transition-smooth"
                style={{
                  border: `1px solid ${d.borderColor}`,
                  borderRadius: "2px",
                  background: activeTab === school ? d.bgColor : "transparent",
                  color:
                    activeTab === school
                      ? d.accentColor
                      : "oklch(var(--muted-foreground))",
                }}
              >
                {d.icon}{" "}
                {school === "shankaracharya"
                  ? "Shankara"
                  : school === "ramanuja"
                    ? "Ramanuja"
                    : "Tilak"}
              </button>
            );
          })}
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4">
          {(["shankaracharya", "ramanuja", "tilak"] as const).map((school) => (
            <motion.div
              key={`${school}-${selectedVerseId}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CommentaryCard
                school={school}
                text={commentary?.[school] ?? ""}
                isLoading={isLoading}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: active tab */}
        <div className="sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + selectedVerseId}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
            >
              <CommentaryCard
                school={activeTab}
                text={commentary?.[activeTab] ?? ""}
                isLoading={isLoading}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fallback note */}
        {!commentary && !isLoading && (
          <div
            className="text-center mt-6 p-4 sacred-card"
            data-ocid="commentary.empty_state"
          >
            <p className="font-body text-muted-foreground italic text-sm">
              Commentary available for key verses only. Select one of the
              featured verses above.
            </p>
          </div>
        )}
      </div>

      {/* Bottom tagline */}
      <div className="text-center mt-12 pb-4">
        <p
          className="font-display italic text-muted-foreground text-xs"
          style={{ letterSpacing: "0.2em" }}
        >
          ॥ यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः ॥
        </p>
      </div>
    </div>
  );
}
