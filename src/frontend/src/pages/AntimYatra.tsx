import {
  ANTYESTI_PHASES,
  ANTYESTI_SAMAGRI,
  type AntyestiPhase,
  GARUDA_TEACHINGS,
  type GarudaTeaching,
  MOURNING_RULES,
  type MourningRule,
  PIND_DAAN_STEPS,
  PITRU_PAKSHA_INFO,
  type PindDaanStep,
  type PitruPakshaInfo,
  SACRED_RIVERS,
  SHRADHA_DAYS,
  SOUL_VERSES,
  type SacredRiverInfo,
  type ShraddhaDay,
  type SoulVerse,
  VARSHIK_SHRADH_INFO,
  type VarshikShradhInfo,
} from "@/data/antim-yatra-data";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── DESIGN TOKENS (warm cream/gold — compassionate palette) ─────────────────
const C = {
  // Backgrounds
  pageBg: "oklch(0.97 0.018 55)",
  cardBg: "oklch(0.96 0.022 58)",
  cardBgDeep: "oklch(0.94 0.030 54)",
  headerBg: "oklch(0.92 0.042 52)",
  goldBg: "oklch(0.88 0.072 56)",
  creamBg: "oklch(0.98 0.012 60)",
  // Borders
  borderLight: "oklch(0.82 0.048 54 / 0.55)",
  borderGold: "oklch(0.72 0.12 52 / 0.55)",
  borderSoft: "oklch(0.86 0.036 56 / 0.6)",
  // Text
  textDark: "oklch(0.24 0.06 38)",
  textMid: "oklch(0.40 0.06 42)",
  textLight: "oklch(0.56 0.058 46)",
  textGold: "oklch(0.52 0.14 48)",
  textGoldBright: "oklch(0.42 0.16 44)",
  // Accent
  gold: "oklch(0.68 0.18 52)",
  goldLight: "oklch(0.78 0.14 54)",
  amber: "oklch(0.74 0.14 56)",
  roseSoft: "oklch(0.90 0.042 10)",
};

// ─── AUDIO HELPER ────────────────────────────────────────────────────────────

function playHarmoniumTone(freq = 220) {
  try {
    const ctx = new (
      window.AudioContext ||
      (window as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext!
    )();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 2.5);
  } catch {
    /* Audio unavailable */
  }
}

// ─── IMMEDIATE STEPS DATA ────────────────────────────────────────────────────

const IMMEDIATE_STEPS = [
  {
    step: 1,
    icon: "🕯️",
    title: "Close the Eyes Gently",
    guidance:
      "The very first act — close the eyes of the departed gently with your right hand. Say softly: 'Go in peace, beloved. Your journey was sacred. Krishna is waiting for you.' This is an act of profound love. The body is now a sacred vessel — treat it with utmost reverence.",
    mantra: "ॐ शान्तिः शान्तिः शान्तिः",
    mantraTranslit: "Om Śāntiḥ Śāntiḥ Śāntiḥ — Peace, Peace, Peace",
  },
  {
    step: 2,
    icon: "🌿",
    title: "Place Tulsi Leaves and Gangajal",
    guidance:
      "Place fresh Tulsi (holy basil) leaves in the mouth of the departed and add a few drops of Gangajal on the lips. If Gangajal is unavailable, use pure water sanctified by chanting 'Om Namo Narayanaya' three times over it. Place a soaked cotton ball gently near the nostrils. Tulsi is Vishnu's beloved — her presence opens the path to liberation.",
    mantra: "ॐ नमो भगवते वासुदेवाय",
    mantraTranslit: "Om Namo Bhagavate Vāsudevāya — I bow to Lord Vasudeva",
  },
  {
    step: 3,
    icon: "🙏",
    title: "Chant Krishna's Name into Their Ear",
    guidance:
      "Begin chanting softly and lovingly close to the ear. The Garuda Purana confirms: the soul lingers near the body for some time after death. It can hear you. These divine names are the greatest gift you can give right now. Chant with love, not with ritual formality.",
    mantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे\nहरे राम हरे राम राम राम हरे हरे",
    mantraTranslit:
      "Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare\nHare Rāma Hare Rāma Rāma Rāma Hare Hare",
  },
  {
    step: 4,
    icon: "🔥",
    title: "Light the Sacred Ghee Diya",
    guidance:
      "Light a clay diya filled with cow ghee (or pure sesame oil) immediately near the head of the departed. This flame must burn continuously for 13 full days. It guides the departing soul and protects the sacred space. Do not let it go out — if it does, relight it immediately with a prayer. This is the single most important ritual light of the entire mourning period.",
    mantra: null,
    mantraTranslit: null,
  },
  {
    step: 5,
    icon: "🌍",
    title: "Position the Body on the Earth",
    guidance:
      "Place the body on the floor on a clean mat or cloth (never on a raised bed after death). Head facing North (toward the divine realm) or East. The earth receives what it gave. Place a clean white cloth over the entire body. Do not leave the body unattended at any time.",
    mantra: null,
    mantraTranslit: null,
  },
  {
    step: 6,
    icon: "📖",
    title: "Recite Bhagavad Gita 2.20",
    guidance:
      "Read aloud from the Bhagavad Gita, beginning with Chapter 2, Verse 20. This verse is the greatest truth about the soul and brings immense peace to both the departing soul and the family. Continue reading Chapter 2 in full if possible.",
    mantra:
      "न जायते म्रियते वा कदाचित् नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    mantraTranslit:
      "Na jāyate mriyate vā kadācin, nāyaṁ bhūtvā bhavitā vā na bhūyaḥ.\nAjo nityaḥ śāśvato 'yaṁ purāṇo, na hanyate hanyamāne śarīre.\n— The soul is never born nor does it die. It is eternal, unslayable.",
  },
  {
    step: 7,
    icon: "👨‍👩‍👧‍👦",
    title: "Inform Family and Contact a Pandit",
    guidance:
      "Inform all family members — especially the eldest son or nearest male relative (the karta). Contact a qualified Vedic pandit as soon as possible. The body should not remain beyond 24 hours without beginning preparation. The pandit will guide the entire ceremony with accuracy and sanctity.",
    mantra: null,
    mantraTranslit: null,
  },
  {
    step: 8,
    icon: "🌸",
    title: "Offer Fresh Flowers",
    guidance:
      "Place fresh flowers around the body — marigolds, jasmine, white roses. The fragrance purifies the space and is an offering of love to both the soul and to God. Let the space become beautiful — a celebration of a completed life, not merely a place of grief.",
    mantra: null,
    mantraTranslit: null,
  },
  {
    step: 9,
    icon: "💙",
    title: "Speak Gently — Do Not Wail",
    guidance:
      "This is a gentle but important guidance from the Garuda Purana: do not wail loudly near the body. The soul can sense the emotional environment. Loud grief creates distress for the departing soul. Instead, speak softly and lovingly: 'We love you. We are grateful. Go in peace. Krishna is waiting.' Your love is felt beyond the boundary of life.",
    mantra: null,
    mantraTranslit: null,
  },
  {
    step: 10,
    icon: "🌅",
    title: "Offer Fresh Flowers and Place Sacred Items",
    guidance:
      "Place sacred items near the body: a copper vessel with Gangajal, the Bhagavad Gita or a Vishnu image, incense stick, and a fresh flower. These items create a sacred environment and guide the soul. Now you have done everything love can do. Krishna receives the rest.",
    mantra: "ॐ तत् सत्",
    mantraTranslit: "Om Tat Sat — That which is, is God. All returns to Him.",
  },
];

// ─── SHARED STYLED COMPONENTS ────────────────────────────────────────────────

function WarmCard({
  children,
  className = "",
  elevated = false,
}: {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${className}`}
      style={{
        background: elevated ? C.headerBg : C.cardBg,
        border: `1px solid ${C.borderLight}`,
        boxShadow: elevated
          ? "0 4px 20px oklch(0.68 0.12 52 / 0.12)"
          : "0 1px 6px oklch(0.60 0.08 50 / 0.06)",
      }}
    >
      {children}
    </div>
  );
}

function GoldDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-5">
      <div
        style={{
          height: 1,
          flex: 1,
          background: `linear-gradient(to right, transparent, ${C.borderGold})`,
        }}
      />
      {label && (
        <span
          className="font-display text-xs italic"
          style={{ color: C.textGold }}
        >
          {label}
        </span>
      )}
      <div
        style={{
          height: 1,
          flex: 1,
          background: `linear-gradient(to left, transparent, ${C.borderGold})`,
        }}
      />
    </div>
  );
}

function MantraBox({
  mantra,
  translit,
}: {
  mantra: string;
  translit?: string;
}) {
  return (
    <div
      className="rounded-xl p-4 mt-3"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.94 0.05 58 / 0.9), oklch(0.91 0.065 54 / 0.85))",
        border: `1px solid ${C.borderGold}`,
        boxShadow: "inset 0 1px 0 oklch(0.98 0.02 60 / 0.8)",
      }}
    >
      <p
        className="font-display font-semibold text-center whitespace-pre-line"
        lang="sa"
        style={{
          color: C.textDark,
          fontSize: "0.97rem",
          lineHeight: 2.1,
        }}
      >
        {mantra}
      </p>
      {translit && (
        <p
          className="font-body italic text-center text-xs mt-2"
          style={{ color: C.textGold, lineHeight: 1.7 }}
        >
          {translit}
        </p>
      )}
    </div>
  );
}

function SectionHeader({
  sanskrit,
  english,
  subtitle,
}: {
  sanskrit: string;
  english: string;
  subtitle?: string;
}) {
  return (
    <WarmCard elevated className="mb-5 text-center">
      <p
        className="font-display font-bold mb-1"
        style={{
          color: C.textGoldBright,
          fontSize: "1.25rem",
          lineHeight: 1.4,
        }}
      >
        {sanskrit}
      </p>
      <p
        className="font-display font-bold italic mb-2"
        style={{ color: C.textDark, fontSize: "1.05rem" }}
      >
        {english}
      </p>
      {subtitle && (
        <p
          className="font-body text-sm"
          style={{ color: C.textMid, lineHeight: 1.7 }}
        >
          {subtitle}
        </p>
      )}
    </WarmCard>
  );
}

function AccordionItem({
  isOpen,
  onToggle,
  header,
  children,
  ocid,
}: {
  isOpen: boolean;
  onToggle: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  ocid?: string;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${isOpen ? C.borderGold : C.borderSoft}`,
        boxShadow: isOpen ? "0 4px 16px oklch(0.65 0.12 52 / 0.10)" : "none",
      }}
      data-ocid={ocid}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left transition-all"
        style={{
          background: isOpen
            ? `linear-gradient(135deg, ${C.goldBg}, oklch(0.86 0.062 52 / 0.95))`
            : C.cardBg,
        }}
        aria-expanded={isOpen}
      >
        {header}
        <span
          className="shrink-0 ml-auto"
          style={{ color: C.textGold, fontSize: "0.75rem" }}
        >
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
            style={{ background: C.creamBg }}
          >
            <div className="p-5 pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── IMMEDIATE GUIDANCE VIEW ─────────────────────────────────────────────────

function ImmediateGuidanceView({ onBack }: { onBack: () => void }) {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      data-ocid="antim-yatra.immediate_guidance"
    >
      {/* Compassionate header */}
      <div
        className="rounded-2xl p-6 mb-5 text-center"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.94 0.05 45 / 0.97), oklch(0.91 0.07 52 / 0.95))",
          border: `1px solid ${C.borderGold}`,
          boxShadow: "0 4px 24px oklch(0.65 0.14 48 / 0.12)",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ fontSize: "2.8rem", marginBottom: "0.75rem" }}
          aria-hidden
        >
          🙏
        </motion.div>
        <p
          className="font-display font-bold italic mb-2"
          style={{ color: C.textDark, fontSize: "1.15rem" }}
        >
          Krishna is with you in this moment
        </p>
        <p
          className="font-body text-sm"
          style={{ color: C.textMid, lineHeight: 1.8 }}
        >
          Follow each step slowly, with love. The departed soul can feel your
          presence and your prayers. You are not alone — Krishna stands beside
          you and your loved one right now.
        </p>
        <div
          className="rounded-xl p-3 mt-4"
          style={{
            background: "oklch(0.96 0.04 58 / 0.8)",
            border: `1px solid ${C.borderGold}`,
          }}
        >
          <p
            className="font-display italic text-sm"
            style={{ color: C.textGoldBright, lineHeight: 1.7 }}
          >
            "My devotee never perishes. Never." — Bhagavad Gita 9.31
          </p>
          <p className="font-body text-xs mt-1" style={{ color: C.textLight }}>
            Speak Krishna's name into their ear. Hare Krishna.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3" data-ocid="antim-yatra.immediate_steps">
        {IMMEDIATE_STEPS.map((item, i) => {
          const open = expandedStep === i;
          return (
            <AccordionItem
              key={item.step}
              isOpen={open}
              onToggle={() => setExpandedStep(open ? null : i)}
              ocid={`antim-yatra.immediate_step.${i + 1}`}
              header={
                <>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: open
                        ? "oklch(0.78 0.14 52 / 0.25)"
                        : C.goldBg,
                      border: `1px solid ${C.borderGold}`,
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="font-body text-[10px] font-bold block mb-0.5"
                      style={{ color: C.textGold }}
                    >
                      Step {item.step}
                    </span>
                    <p
                      className="font-display font-bold italic text-sm"
                      style={{ color: C.textDark }}
                    >
                      {item.title}
                    </p>
                    {!open && (
                      <p
                        className="font-body text-xs mt-0.5 truncate"
                        style={{ color: C.textLight }}
                      >
                        {item.guidance.slice(0, 60)}…
                      </p>
                    )}
                  </div>
                </>
              }
            >
              <p
                className="font-body text-sm mb-3"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {item.guidance}
              </p>
              {item.mantra && (
                <MantraBox
                  mantra={item.mantra}
                  translit={item.mantraTranslit ?? undefined}
                />
              )}
            </AccordionItem>
          );
        })}
      </div>

      {/* Closing assurance */}
      <div
        className="rounded-2xl p-6 mt-6 text-center"
        style={{
          background: `linear-gradient(160deg, ${C.headerBg}, ${C.goldBg})`,
          border: `1px solid ${C.borderGold}`,
          boxShadow: "0 4px 20px oklch(0.65 0.12 52 / 0.10)",
        }}
      >
        <p
          className="font-display italic"
          style={{
            color: C.textGoldBright,
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          "Whoever at the time of death remembers Me alone, reaches My abode. Of
          this there is no doubt." — Bhagavad Gita 8.5
        </p>
        <p className="font-body text-xs mt-3" style={{ color: C.textLight }}>
          You have done everything a loving soul can do. Krishna receives the
          rest.
        </p>
      </div>

      <div className="text-center mt-5">
        <button
          type="button"
          onClick={onBack}
          className="font-body text-xs italic underline"
          style={{ color: C.textGold }}
          data-ocid="antim-yatra.immediate_back"
        >
          ← Return to options
        </button>
      </div>
    </motion.div>
  );
}

// ─── TAB 1: ANTYESTI ─────────────────────────────────────────────────────────

function AntyestiTab() {
  const [samagriExpanded, setSamagriExpanded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>(
    {},
  );

  function toggleStep(key: string) {
    setExpandedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.antyesti_section"
    >
      <SectionHeader
        sanskrit="अन्त्येष्टि संस्कार"
        english="Antyesti Sanskar — The Final Rite"
        subtitle="The 16th and most sacred of all 16 Samskaras — the last act of love. Performed with full devotion, these rites are not merely ritual — they are a final gift to the departing soul and the act of a family honoring the eternal."
      />

      {/* Samagri */}
      <button
        type="button"
        onClick={() => setSamagriExpanded((v) => !v)}
        className="w-full rounded-2xl p-4 text-left mb-4 transition-all"
        style={{
          background: samagriExpanded ? C.headerBg : C.cardBg,
          border: `1px solid ${samagriExpanded ? C.borderGold : C.borderLight}`,
          boxShadow: samagriExpanded
            ? "0 3px 14px oklch(0.65 0.12 52 / 0.10)"
            : "none",
        }}
        data-ocid="antim-yatra.samagri_toggle"
        aria-expanded={samagriExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span style={{ fontSize: "1.5rem" }}>🏺</span>
            <div>
              <p
                className="font-display font-bold italic"
                style={{ color: C.textDark, fontSize: "1rem" }}
              >
                Complete Samagri — All Materials Required
              </p>
              <p className="font-body text-xs" style={{ color: C.textLight }}>
                {ANTYESTI_SAMAGRI.length} sacred items with purpose and
                significance
              </p>
            </div>
          </div>
          <span style={{ color: C.textGold, fontSize: "0.8rem" }}>
            {samagriExpanded ? "▲" : "▼"}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {samagriExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mb-5"
          >
            <div className="space-y-2" data-ocid="antim-yatra.samagri_list">
              {ANTYESTI_SAMAGRI.map((item, i) => (
                <div
                  key={item.item}
                  className="rounded-xl p-4"
                  style={{
                    background: i % 2 === 0 ? C.cardBg : C.creamBg,
                    border: `1px solid ${C.borderSoft}`,
                  }}
                  data-ocid={`antim-yatra.samagri_item.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p
                        className="font-display font-bold italic text-sm"
                        style={{ color: C.textDark }}
                      >
                        {item.item}
                      </p>
                      <p
                        className="font-body text-xs"
                        lang="hi"
                        style={{ color: C.textGoldBright }}
                      >
                        {item.hindiName}
                      </p>
                    </div>
                    <span
                      className="font-body text-xs rounded-full px-2 py-0.5 shrink-0"
                      style={{
                        background: C.goldBg,
                        color: C.textGoldBright,
                        border: `1px solid ${C.borderGold}`,
                      }}
                    >
                      {item.quantity}
                    </span>
                  </div>
                  <p
                    className="font-body text-xs"
                    style={{ color: C.textMid, lineHeight: 1.7 }}
                  >
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <GoldDivider label="✦ Step-by-Step Antyesti Process ✦" />

      {/* Phase tabs */}
      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1" role="tablist">
        {ANTYESTI_PHASES.map((phase, i) => (
          <button
            key={phase.phase}
            type="button"
            onClick={() => setActivePhase(i)}
            className="shrink-0 rounded-xl px-3 py-2 font-body text-xs font-semibold transition-all"
            style={{
              background: activePhase === i ? C.goldBg : C.cardBg,
              color: activePhase === i ? C.textGoldBright : C.textLight,
              border: `1px solid ${activePhase === i ? C.borderGold : C.borderSoft}`,
              boxShadow:
                activePhase === i
                  ? "0 2px 8px oklch(0.65 0.12 52 / 0.12)"
                  : "none",
            }}
            role="tab"
            aria-selected={activePhase === i}
            data-ocid={`antim-yatra.phase_tab.${i + 1}`}
          >
            {phase.icon} {i + 1}
          </button>
        ))}
      </div>

      {ANTYESTI_PHASES.map((phase, pi) =>
        activePhase === pi ? (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            data-ocid={`antim-yatra.phase_content.${pi + 1}`}
          >
            <div
              className="rounded-xl p-4 mb-4"
              style={{
                background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                border: `1px solid ${C.borderGold}`,
              }}
            >
              <p
                className="font-display font-bold italic text-center"
                style={{ color: C.textDark, fontSize: "1.05rem" }}
              >
                {phase.icon} {phase.phase}
              </p>
            </div>

            <div className="space-y-3">
              {phase.steps.map((step) => {
                const key = `${pi}-${step.step}`;
                const open = expandedSteps[key];
                return (
                  <AccordionItem
                    key={step.step}
                    isOpen={!!open}
                    onToggle={() => toggleStep(key)}
                    ocid={`antim-yatra.step.${pi + 1}.${step.step}`}
                    header={
                      <>
                        <div
                          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            background: C.goldBg,
                            border: `1px solid ${C.borderGold}`,
                          }}
                        >
                          <span
                            className="font-display text-xs font-bold"
                            style={{ color: C.textGoldBright }}
                          >
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-display font-bold italic text-sm"
                            style={{ color: C.textDark }}
                          >
                            {step.title}
                          </p>
                          {!open && (
                            <p
                              className="font-body text-xs mt-0.5 truncate"
                              style={{ color: C.textLight }}
                            >
                              {step.details.slice(0, 65)}…
                            </p>
                          )}
                        </div>
                      </>
                    }
                  >
                    <p
                      className="font-body text-sm"
                      style={{ color: C.textMid, lineHeight: 1.85 }}
                    >
                      {step.details}
                    </p>
                    {step.mantra && (
                      <MantraBox
                        mantra={step.mantra}
                        translit={step.mantraTranslit}
                      />
                    )}
                  </AccordionItem>
                );
              })}
            </div>
          </motion.div>
        ) : null,
      )}
    </motion.div>
  );
}

// ─── TAB 2: 13-DAY SHRADH ────────────────────────────────────────────────────

function ShraddhaTab() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.shradha_section"
    >
      <SectionHeader
        sanskrit="श्राद्ध — 13-दिवसीय पवित्र अनुष्ठान"
        english="13-Day Shradh — Day by Day Guide"
        subtitle="Every day of the 13-day period serves a specific sacred purpose in the soul's journey. These rites are an act of love performed across the boundary of worlds. The Garuda Purana confirms: the family's sincere prayers sustain the soul throughout its transition."
      />

      <p
        className="font-display text-xs text-center tracking-widest mb-4"
        style={{ color: C.textGold }}
      >
        ✦ Tap each day for complete guidance ✦
      </p>

      <div className="space-y-2" data-ocid="antim-yatra.shradha_days_list">
        {SHRADHA_DAYS.map((day, i) => {
          const open = expandedDay === i;
          return (
            <AccordionItem
              key={day.day}
              isOpen={open}
              onToggle={() => setExpandedDay(open ? null : i)}
              ocid={`antim-yatra.shradha_day.${i + 1}`}
              header={
                <>
                  <div
                    className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: open ? C.goldBg : C.headerBg,
                      border: `1px solid ${C.borderGold}`,
                      fontSize: "1.3rem",
                    }}
                  >
                    {day.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-bold italic text-sm"
                      style={{ color: C.textDark }}
                    >
                      {day.day} — {day.name}
                    </p>
                    <p
                      className="font-body text-xs mt-0.5"
                      style={{ color: C.textLight }}
                    >
                      {day.ritual}
                    </p>
                  </div>
                </>
              }
            >
              <p
                className="font-body text-sm mb-4"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {day.details}
              </p>
              {day.mantra && <MantraBox mantra={day.mantra} />}
              {day.verse && (
                <div
                  className="rounded-xl p-3 mt-3"
                  style={{
                    background: C.goldBg,
                    border: `1px solid ${C.borderGold}`,
                  }}
                >
                  <p
                    className="font-display italic text-xs"
                    style={{ color: C.textGoldBright, lineHeight: 1.7 }}
                  >
                    ✦ {day.verse}
                  </p>
                </div>
              )}
            </AccordionItem>
          );
        })}
      </div>

      <GoldDivider label="Annual Remembrance" />

      <WarmCard elevated>
        <p
          className="font-display font-bold italic mb-2 text-center"
          style={{ color: C.textDark }}
        >
          Pitru Paksha — Annual Ancestor Worship
        </p>
        <p
          className="font-body text-sm mb-3 text-center"
          style={{ color: C.textMid, lineHeight: 1.7 }}
        >
          15 sacred days every year in Ashwin month for honouring all ancestors.
          See full guide in the Pitru Paksha tab.
        </p>
        <Link
          to="/calendar"
          className="block text-center font-display text-xs italic"
          style={{ color: C.textGold }}
          data-ocid="antim-yatra.calendar_link"
        >
          View Festival Calendar →
        </Link>
      </WarmCard>

      {/* Required Samagri for the 13-Day Period */}
      <GoldDivider label="✦ Complete Samagri for 13 Days ✦" />
      <div
        className="rounded-2xl p-5"
        style={{
          background: C.cardBg,
          border: `1px solid ${C.borderGold}`,
        }}
        data-ocid="antim-yatra.shradh_samagri"
      >
        <p
          className="font-display font-bold italic mb-3 text-center"
          style={{ color: C.textDark }}
        >
          🏺 Sacred Samagri — Keep Ready for All 13 Days
        </p>
        <div className="space-y-2">
          {[
            {
              item: "Kala Til (Black Sesame)",
              use: "Essential for all Pind Daan — offered with every pinda",
            },
            {
              item: "Darbha Grass (Kusha)",
              use: "Sacred grass woven into mat and ring for the ritual priest",
            },
            {
              item: "Copper Vessel (Tamra Patra)",
              use: "Water offerings and tarpan — poured toward south",
            },
            {
              item: "Pinda Rice (Boiled Plain)",
              use: "Cooked fresh each day — no salt, no spice, no oil",
            },
            {
              item: "Cow Ghee",
              use: "Mixed into pindas and offered in diya throughout 13 days",
            },
            {
              item: "Pure Honey (Madhu)",
              use: "Mixed into pindas — one of the five sacred ingredients",
            },
            {
              item: "Barley Flour (Jau Atta)",
              use: "Mixed with rice for pinda dough — purifying and sattvic",
            },
            {
              item: "Gangajal",
              use: "Mixed into all water offerings — sanctifies completely",
            },
            {
              item: "Tulsi Leaves",
              use: "Placed in water offerings and near the ritual space daily",
            },
            {
              item: "White Flowers",
              use: "Lotus or jasmine — offered each day with the pindas",
            },
            {
              item: "Ghee Lamp (Clay Diya)",
              use: "Burns continuously for all 13 days near the main space",
            },
            {
              item: "Sacred Thread (Yajnopavita)",
              use: "Worn by the karta (performing son/family member)",
            },
            {
              item: "Panchangam / Calendar",
              use: "To determine the correct lunar tithis for each ritual day",
            },
          ].map((s, i) => (
            <div
              key={s.item}
              className="flex gap-3 items-start py-1.5 border-b last:border-0"
              style={{ borderColor: `${C.borderSoft}` }}
            >
              <span
                className="font-display text-xs font-bold shrink-0 w-6 mt-0.5"
                style={{ color: C.textGold }}
              >
                {i + 1}.
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="font-display font-semibold text-xs italic"
                  style={{ color: C.textDark }}
                >
                  {s.item}
                </p>
                <p
                  className="font-body text-xs"
                  style={{ color: C.textMid, lineHeight: 1.6 }}
                >
                  {s.use}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AskKrishnaCTA context="Krishna, what happens to the soul after death?" />
    </motion.div>
  );
}

// ─── TAB 3: PIND DAAN ────────────────────────────────────────────────────────

function PindDaanTab() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [expandedRiver, setExpandedRiver] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.pind_daan_section"
    >
      <SectionHeader
        sanskrit="पिण्ड दान — पितृ तर्पण"
        english="Pind Daan — Complete Sacred Guide"
        subtitle="Pind Daan (offering of sacred rice balls) is one of the most important acts a child can perform for a departed parent. The Garuda Purana states that without pind daan, the soul wanders in spiritual hunger during its transition. With pind daan, the soul is nourished, sustained, and guided."
      />

      <p
        className="font-display text-xs text-center tracking-widest mb-4"
        style={{ color: C.textGold }}
      >
        ✦ The Complete Process ✦
      </p>

      <div className="space-y-3 mb-6" data-ocid="antim-yatra.pind_daan_steps">
        {PIND_DAAN_STEPS.map((step: PindDaanStep, i) => {
          const open = expandedStep === i;
          return (
            <AccordionItem
              key={step.step}
              isOpen={open}
              onToggle={() => setExpandedStep(open ? null : i)}
              ocid={`antim-yatra.pind_daan_step.${i + 1}`}
              header={
                <>
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: C.goldBg,
                      border: `1px solid ${C.borderGold}`,
                    }}
                  >
                    <span
                      className="font-display text-sm font-bold"
                      style={{ color: C.textGoldBright }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <p
                    className="font-display font-bold italic text-sm flex-1 min-w-0"
                    style={{ color: C.textDark }}
                  >
                    {step.title}
                  </p>
                </>
              }
            >
              <p
                className="font-body text-sm"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {step.details}
              </p>
              {step.mantra && (
                <MantraBox
                  mantra={step.mantra}
                  translit={step.mantraTranslit}
                />
              )}
            </AccordionItem>
          );
        })}
      </div>

      <GoldDivider label="✦ Sacred Rivers for Asthi Visarjan ✦" />

      <WarmCard className="mb-4">
        <p
          className="font-body text-sm text-center"
          style={{ color: C.textMid, lineHeight: 1.75 }}
        >
          The ashes of the departed soul (Asthi) should be immersed in a sacred
          river. The Garuda Purana specifies these rivers as most powerful for
          the soul's liberation — in order of sanctity.
        </p>
      </WarmCard>

      <div className="space-y-3" data-ocid="antim-yatra.sacred_rivers">
        {SACRED_RIVERS.map((river: SacredRiverInfo, i) => {
          const open = expandedRiver === i;
          return (
            <AccordionItem
              key={river.name}
              isOpen={open}
              onToggle={() => setExpandedRiver(open ? null : i)}
              ocid={`antim-yatra.sacred_river.${i + 1}`}
              header={
                <>
                  <span style={{ fontSize: "1.5rem" }} className="shrink-0">
                    {river.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="font-body text-[10px] rounded-full px-2 py-0.5"
                        style={{
                          background: C.goldBg,
                          color: C.textGoldBright,
                          border: `1px solid ${C.borderGold}`,
                        }}
                      >
                        #{i + 1} Most Sacred
                      </span>
                    </div>
                    <p
                      className="font-display font-bold italic text-sm mt-0.5"
                      style={{ color: C.textDark }}
                    >
                      {river.name}
                    </p>
                    <p
                      className="font-body text-xs"
                      style={{ color: C.textLight }}
                    >
                      {river.location}
                    </p>
                  </div>
                </>
              }
            >
              <p
                className="font-body text-sm mb-3"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {river.significance}
              </p>
              <div
                className="rounded-xl p-3"
                style={{
                  background: C.goldBg,
                  border: `1px solid ${C.borderGold}`,
                }}
              >
                <p
                  className="font-body text-xs font-semibold mb-0.5"
                  style={{ color: C.textGoldBright }}
                >
                  Best time:
                </p>
                <p className="font-body text-xs" style={{ color: C.textMid }}>
                  {river.bestTime}
                </p>
              </div>
            </AccordionItem>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── ASK KRISHNA CTA ─────────────────────────────────────────────────────────

function AskKrishnaCTA({ context }: { context: string }) {
  return (
    <div
      className="rounded-2xl p-5 mt-5 text-center"
      style={{
        background: `linear-gradient(160deg, ${C.headerBg}, ${C.goldBg})`,
        border: `1px solid ${C.borderGold}`,
        boxShadow: "0 4px 16px oklch(0.65 0.12 52 / 0.10)",
      }}
      data-ocid="antim-yatra.ask_krishna_cta"
    >
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🪷</div>
      <p
        className="font-display font-bold italic mb-2"
        style={{ color: C.textDark, fontSize: "1rem" }}
      >
        {context}
      </p>
      <p
        className="font-body text-xs mb-4"
        style={{ color: C.textLight, lineHeight: 1.7 }}
      >
        Krishna knows every answer. He was there at the beginning and he will be
        there at the end. Ask him anything — about the soul, afterlife, or what
        happens to your loved one now.
      </p>
      <Link
        to="/guidance"
        className="inline-block rounded-full px-6 py-2.5 font-display font-bold text-sm transition-all"
        style={{
          background: `linear-gradient(135deg, ${C.gold}, oklch(0.58 0.20 50))`,
          color: "oklch(0.98 0.01 60)",
          boxShadow: "0 3px 12px oklch(0.58 0.18 50 / 0.28)",
        }}
        data-ocid="antim-yatra.ask_krishna_button"
      >
        🦚 Ask Krishna About the Afterlife
      </Link>
    </div>
  );
}

// ─── TAB 4: GARUDA PURANA ────────────────────────────────────────────────────

function GarudaTab() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.garuda_section"
    >
      <SectionHeader
        sanskrit="गरुड पुराण"
        english="The Soul's Journey After Death"
        subtitle="The Garuda Purana is traditionally recited in the home during the 13-day mourning period. Its teachings help the departing soul understand its journey and surrender to God with knowledge rather than fear. What follows is accurate guidance from this sacred text."
      />

      <div className="space-y-3">
        {GARUDA_TEACHINGS.map((teaching: GarudaTeaching, i) => {
          const open = expanded === i;
          return (
            <AccordionItem
              key={teaching.title}
              isOpen={open}
              onToggle={() => setExpanded(open ? null : i)}
              ocid={`antim-yatra.garuda_teaching.${i + 1}`}
              header={
                <>
                  <span className="text-2xl shrink-0">{teaching.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-bold italic text-sm"
                      style={{ color: C.textDark }}
                    >
                      {teaching.title}
                    </p>
                    {!open && (
                      <p
                        className="font-body text-xs mt-0.5 truncate"
                        style={{ color: C.textLight }}
                      >
                        {teaching.description.slice(0, 70)}…
                      </p>
                    )}
                  </div>
                </>
              }
            >
              <p
                className="font-body text-sm mb-4"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {teaching.description}
              </p>
              {teaching.gitaRef && teaching.gitaSanskrit && (
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: `linear-gradient(135deg, ${C.goldBg}, ${C.headerBg})`,
                    border: `1px solid ${C.borderGold}`,
                  }}
                >
                  <p
                    className="font-body text-xs tracking-widest mb-2"
                    style={{ color: C.textGold }}
                  >
                    {teaching.gitaRef}
                  </p>
                  <p
                    className="font-display font-semibold text-center mb-2"
                    lang="sa"
                    style={{
                      color: C.textDark,
                      fontSize: "0.95rem",
                      lineHeight: 2,
                    }}
                  >
                    {teaching.gitaSanskrit}
                  </p>
                  {teaching.gitaMeaning && (
                    <p
                      className="font-body text-sm italic"
                      style={{ color: C.textMid, lineHeight: 1.7 }}
                    >
                      {teaching.gitaMeaning}
                    </p>
                  )}
                </div>
              )}
            </AccordionItem>
          );
        })}
      </div>

      <AskKrishnaCTA context="Questions about the soul's journey after death?" />
    </motion.div>
  );
}

// ─── TAB 5: MOURNING RULES ───────────────────────────────────────────────────

function MourningTab() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [varshikExpanded, setVarshikExpanded] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.mourning_section"
    >
      <SectionHeader
        sanskrit="शोक काल — नियम और परंपरा"
        english="Mourning Period Rules"
        subtitle="The 13-day mourning period has specific guidelines from Vedic tradition to support the departing soul's journey and the family's healing. These are not burdens — they are acts of love and solidarity with the soul in transition."
      />

      <div className="space-y-3 mb-6" data-ocid="antim-yatra.mourning_rules">
        {MOURNING_RULES.map((rule: MourningRule, i) => {
          const open = expanded === i;
          return (
            <AccordionItem
              key={rule.category}
              isOpen={open}
              onToggle={() => setExpanded(open ? null : i)}
              ocid={`antim-yatra.mourning_rule.${i + 1}`}
              header={
                <>
                  <span className="text-xl shrink-0">{rule.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-bold italic text-sm"
                      style={{ color: C.textDark }}
                    >
                      {rule.category}
                    </p>
                    <span
                      className="font-body text-[10px] rounded-full px-2 py-0.5"
                      style={{
                        background: C.goldBg,
                        color: C.textGoldBright,
                        border: `1px solid ${C.borderGold}`,
                      }}
                    >
                      {rule.duration}
                    </span>
                  </div>
                </>
              }
            >
              <ul className="space-y-2">
                {rule.rules.map((r) => (
                  <li
                    key={r.slice(0, 30)}
                    className="font-body text-sm flex items-start gap-2"
                    style={{ color: C.textMid, lineHeight: 1.75 }}
                  >
                    <span style={{ color: C.textGold, marginTop: "0.25rem" }}>
                      •
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          );
        })}
      </div>

      <GoldDivider label="✦ Varshik Shradh — Annual Ceremony ✦" />

      <WarmCard className="mb-4">
        <p
          className="font-display font-bold italic text-center mb-2"
          style={{ color: C.textDark }}
        >
          वार्षिक श्राद्ध — Annual Death Anniversary
        </p>
        <p
          className="font-body text-sm text-center"
          style={{ color: C.textMid, lineHeight: 1.7 }}
        >
          Performed exactly one year after death, on the same lunar tithi. Marks
          the completion of the first year of grief and establishes the rhythm
          of annual remembrance.
        </p>
      </WarmCard>

      <div className="space-y-3" data-ocid="antim-yatra.varshik_shradh">
        {VARSHIK_SHRADH_INFO.map((info: VarshikShradhInfo, i) => {
          const open = varshikExpanded === i;
          return (
            <AccordionItem
              key={info.title}
              isOpen={open}
              onToggle={() => setVarshikExpanded(open ? null : i)}
              ocid={`antim-yatra.varshik_shradh.${i + 1}`}
              header={
                <>
                  <span className="text-xl shrink-0">{info.icon}</span>
                  <p
                    className="font-display font-bold italic text-sm flex-1 min-w-0"
                    style={{ color: C.textDark }}
                  >
                    {info.title}
                  </p>
                </>
              }
            >
              <p
                className="font-body text-sm"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {info.content}
              </p>
            </AccordionItem>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── TAB 6: PITRU PAKSHA ─────────────────────────────────────────────────────

function PitruPakshaTab() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.pitru_paksha_section"
    >
      <SectionHeader
        sanskrit="पितृ पक्ष"
        english="15 Days for All Ancestors — Annual Sacred Observance"
      />

      <WarmCard elevated className="mb-5">
        <p
          className="font-display italic text-sm text-center mb-1"
          style={{ color: C.textGoldBright, lineHeight: 1.7 }}
        >
          "Bhadrapada month, Krishna Paksha — Ashwin Krishna Amavasya"
        </p>
        <p
          className="font-body text-xs text-center"
          style={{ color: C.textLight }}
        >
          Typically falls in September–October each year
        </p>
      </WarmCard>

      <div className="space-y-3">
        {PITRU_PAKSHA_INFO.map((info: PitruPakshaInfo, i) => {
          const open = expanded === i;
          return (
            <AccordionItem
              key={info.title}
              isOpen={open}
              onToggle={() => setExpanded(open ? null : i)}
              ocid={`antim-yatra.pitru_paksha.${i + 1}`}
              header={
                <>
                  <span className="text-xl shrink-0">{info.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-bold italic text-sm"
                      style={{ color: C.textDark }}
                    >
                      {info.title}
                    </p>
                    {!open && (
                      <p
                        className="font-body text-xs mt-0.5 truncate"
                        style={{ color: C.textLight }}
                      >
                        {info.content.slice(0, 65)}…
                      </p>
                    )}
                  </div>
                </>
              }
            >
              <p
                className="font-body text-sm"
                style={{ color: C.textMid, lineHeight: 1.85 }}
              >
                {info.content}
              </p>
            </AccordionItem>
          );
        })}
      </div>

      <GoldDivider />
      <WarmCard elevated className="text-center">
        <p
          className="font-display italic"
          style={{
            color: C.textGoldBright,
            fontSize: "1rem",
            lineHeight: 1.65,
          }}
        >
          "Those who worship the ancestors go to the ancestors."
        </p>
        <p className="font-body text-xs mt-1" style={{ color: C.textLight }}>
          — Bhagavad Gita 9.25
        </p>
      </WarmCard>
    </motion.div>
  );
}

// ─── TAB 7: KRISHNA'S ASSURANCE ──────────────────────────────────────────────

function KrishnaAssuranceTab() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [autoPlaying, setAutoPlaying] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const startAutoPlay = () => {
    setAutoPlaying(true);
    setPlayingIdx(0);
    playHarmoniumTone(220);
    let idx = 0;
    autoPlayRef.current = setInterval(() => {
      idx++;
      if (idx >= SOUL_VERSES.length) {
        setAutoPlaying(false);
        setPlayingIdx(null);
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      } else {
        setPlayingIdx(idx);
        playHarmoniumTone(220 + idx * 8);
      }
    }, 6000);
  };

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-ocid="antim-yatra.verses_section"
    >
      <SectionHeader
        sanskrit="कृष्ण का वचन"
        english="Krishna's Assurance — 16 Verses on the Eternal Soul"
        subtitle="These verses are for the grieving family — words of comfort spoken directly by Krishna in the Bhagavad Gita. Read them slowly. Let them reach your heart. They are true."
      />

      <WarmCard className="mb-5 text-center">
        <p
          className="font-display italic"
          style={{
            color: C.textGoldBright,
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          "There is no death, Arjun. Only transformation. Krishna is waiting."
        </p>
      </WarmCard>

      <div className="flex items-center justify-between mb-4">
        <p
          className="font-display text-xs italic"
          style={{ color: C.textGold }}
        >
          {SOUL_VERSES.length} verses on the soul's eternal nature
        </p>
        <button
          type="button"
          onClick={
            autoPlaying
              ? () => {
                  setAutoPlaying(false);
                  setPlayingIdx(null);
                  if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                }
              : startAutoPlay
          }
          className="rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all"
          style={{
            background: autoPlaying ? C.headerBg : C.goldBg,
            color: C.textGoldBright,
            border: `1px solid ${C.borderGold}`,
          }}
          data-ocid="antim-yatra.autoplay_button"
        >
          {autoPlaying ? "⬛ Stop" : "▶ Play All"}
        </button>
      </div>

      <div className="space-y-3" data-ocid="antim-yatra.verses_list">
        {SOUL_VERSES.map((verse: SoulVerse, i) => {
          const isPlaying = playingIdx === i;
          const open = expandedIdx === i;
          return (
            <motion.div
              key={verse.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.5) }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${isPlaying ? C.borderGold : C.borderSoft}`,
                boxShadow: isPlaying
                  ? "0 0 20px oklch(0.65 0.14 52 / 0.14)"
                  : "none",
              }}
              data-ocid={`antim-yatra.verse.${i + 1}`}
            >
              <button
                type="button"
                onClick={() => setExpandedIdx(open ? null : i)}
                className="w-full flex items-center gap-3 p-4 text-left transition-all"
                style={{
                  background: isPlaying
                    ? `linear-gradient(135deg, ${C.goldBg}, ${C.headerBg})`
                    : C.cardBg,
                }}
                aria-expanded={open}
              >
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: C.goldBg,
                    border: `1px solid ${C.borderGold}`,
                  }}
                >
                  <span
                    className="font-display text-xs font-bold"
                    style={{ color: C.textGoldBright }}
                  >
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-display text-xs mb-0.5"
                    style={{ color: C.textGold }}
                  >
                    {verse.ref}
                  </p>
                  <p
                    className="font-body text-sm leading-snug truncate"
                    style={{ color: C.textDark }}
                  >
                    {verse.meaning.slice(0, 60)}…
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingIdx(i === playingIdx ? null : i);
                      if (i !== playingIdx) playHarmoniumTone(220 + i * 8);
                    }}
                    aria-label={`Play verse ${i + 1}`}
                    className="rounded-full w-8 h-8 flex items-center justify-center transition-all"
                    style={{
                      background: isPlaying ? C.goldBg : C.headerBg,
                      border: `1px solid ${C.borderGold}`,
                      color: C.textGoldBright,
                    }}
                    data-ocid={`antim-yatra.play_verse.${i + 1}`}
                  >
                    {isPlaying ? "■" : "▶"}
                  </button>
                  <span style={{ color: C.textGold, fontSize: "0.8rem" }}>
                    {open ? "▲" : "▼"}
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                    style={{ background: C.creamBg }}
                  >
                    <div className="p-5">
                      <p
                        className="font-body text-xs mb-3"
                        style={{ color: C.textGold }}
                      >
                        {verse.chapter}
                      </p>
                      <p
                        className="font-display font-semibold text-center mb-3"
                        lang="sa"
                        style={{
                          color: C.textDark,
                          fontSize: "1.05rem",
                          lineHeight: 2,
                        }}
                      >
                        {verse.sanskrit}
                      </p>
                      <p
                        className="font-body italic text-sm text-center mb-4"
                        style={{ color: C.textGold, lineHeight: 1.7 }}
                      >
                        {verse.transliteration}
                      </p>
                      <GoldDivider label="🪷" />
                      <p
                        className="font-body text-sm mb-4"
                        style={{ color: C.textMid, lineHeight: 1.8 }}
                      >
                        {verse.meaning}
                      </p>
                      <div
                        className="rounded-xl p-3 mb-4"
                        style={{
                          background: C.goldBg,
                          border: `1px solid ${C.borderGold}`,
                        }}
                      >
                        <p
                          className="font-body text-xs uppercase tracking-widest mb-1.5"
                          style={{ color: C.textGold }}
                        >
                          For those who grieve —
                        </p>
                        <p
                          className="font-body text-sm"
                          style={{ color: C.textMid, lineHeight: 1.7 }}
                        >
                          {verse.forFamilyMeaning}
                        </p>
                      </div>
                      <div
                        className="rounded-xl p-4"
                        style={{
                          background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                          border: `1px solid ${C.borderGold}`,
                          boxShadow: "0 2px 10px oklch(0.65 0.12 52 / 0.08)",
                        }}
                      >
                        <p
                          className="font-body text-xs uppercase tracking-widest mb-2"
                          style={{ color: C.textGold }}
                        >
                          Krishna speaks to you, Arjun —
                        </p>
                        <p
                          className="font-display italic"
                          style={{
                            color: C.textGoldBright,
                            lineHeight: 1.72,
                            fontSize: "1rem",
                          }}
                        >
                          &ldquo;{verse.krishnaSpeak}&rdquo;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

type TabType =
  | "antyesti"
  | "shradha"
  | "pind"
  | "garuda"
  | "mourning"
  | "pitru"
  | "krishna";

const TABS: { id: TabType; label: string; icon: string }[] = [
  { id: "antyesti", label: "Last Rites", icon: "🔥" },
  { id: "shradha", label: "13 Days", icon: "🕯️" },
  { id: "pind", label: "Pind Daan", icon: "🍚" },
  { id: "garuda", label: "Soul's Journey", icon: "📜" },
  { id: "mourning", label: "Mourning & Varshik", icon: "🌸" },
  { id: "pitru", label: "Pitru Paksha", icon: "🌑" },
  { id: "krishna", label: "Krishna's Promise", icon: "🪷" },
];

export function AntimYatraPage() {
  const [path, setPath] = useState<"rituals" | "immediate" | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("antyesti");

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: C.pageBg }}
      data-ocid="antim-yatra.page"
    >
      {/* Subtle warm texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.88 0.060 58 / 0.18) 0%, transparent 70%)",
          zIndex: 0,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p
            className="font-display text-xs tracking-[0.35em] mb-2"
            style={{ color: C.textGold }}
          >
            ॥ हरे कृष्ण ॥
          </p>
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ fontSize: "3rem", marginBottom: "0.75rem" }}
            aria-hidden
          >
            🪷
          </motion.div>
          <h1
            className="font-display font-bold italic mb-1"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              color: C.textDark,
            }}
          >
            अन्तिम यात्रा
          </h1>
          <p
            className="font-body text-sm italic mb-4"
            style={{ color: C.textGold }}
          >
            The Final Journey — Complete Sacred Guide
          </p>
          <div
            className="rounded-2xl p-4 max-w-lg mx-auto"
            style={{
              background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
              border: `1px solid ${C.borderGold}`,
              boxShadow: "0 4px 20px oklch(0.65 0.12 52 / 0.12)",
            }}
          >
            <p
              className="font-display italic"
              style={{
                color: C.textGoldBright,
                fontSize: "1.02rem",
                lineHeight: 1.68,
              }}
            >
              "My devotee never perishes. Never." — Bhagavad Gita 9.31
            </p>
            <p
              className="font-body text-xs mt-2"
              style={{ color: C.textLight }}
            >
              These rituals are an act of love. Krishna guides every soul.
            </p>
          </div>
        </motion.div>

        {/* Path selection */}
        {!path && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <p
              className="font-body text-center text-sm mb-4"
              style={{ color: C.textMid }}
            >
              How can Krishna guide you today?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button
                type="button"
                onClick={() => setPath("rituals")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-2xl p-5 text-center transition-all"
                style={{
                  background: `linear-gradient(160deg, ${C.cardBg}, ${C.headerBg})`,
                  border: `1px solid ${C.borderGold}`,
                  boxShadow: "0 4px 16px oklch(0.65 0.12 52 / 0.10)",
                }}
                data-ocid="antim-yatra.path_rituals"
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                  🕯️
                </div>
                <p
                  className="font-display font-bold italic mb-1"
                  style={{ color: C.textDark, fontSize: "1rem" }}
                >
                  I Want to Understand the Rituals
                </p>
                <p className="font-body text-xs" style={{ color: C.textLight }}>
                  Learn the complete Antyesti Sanskar — the sacred Vedic rites
                  for honouring a departed soul
                </p>
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setPath("immediate")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-2xl p-5 text-center transition-all"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.96 0.045 42 / 0.97), oklch(0.92 0.062 48 / 0.95))",
                  border: `1px solid ${C.borderGold}`,
                  boxShadow: "0 4px 16px oklch(0.65 0.14 48 / 0.12)",
                }}
                data-ocid="antim-yatra.path_immediate"
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                  🙏
                </div>
                <p
                  className="font-display font-bold italic mb-1"
                  style={{ color: C.textDark, fontSize: "1rem" }}
                >
                  I Am Sitting Next to a Departed Soul
                </p>
                <p className="font-body text-xs" style={{ color: C.textLight }}>
                  Immediate step-by-step guidance — what to do right now, in
                  this sacred moment
                </p>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Immediate guidance */}
        {path === "immediate" && (
          <ImmediateGuidanceView onBack={() => setPath(null)} />
        )}

        {/* Full rituals content */}
        {path === "rituals" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Path message */}
            <div
              className="rounded-2xl p-4 mb-5 text-center"
              style={{
                background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                border: `1px solid ${C.borderGold}`,
              }}
            >
              <p
                className="font-display italic"
                style={{
                  color: C.textGoldBright,
                  fontSize: "0.97rem",
                  lineHeight: 1.65,
                }}
              >
                "My devotee never perishes. Never." — BG 9.31. These rituals are
                a sacred act of love.
              </p>
              <button
                type="button"
                onClick={() => setPath(null)}
                className="font-body text-xs mt-3 underline"
                style={{ color: C.textLight }}
                data-ocid="antim-yatra.change_path_button"
              >
                ← Change path
              </button>
            </div>

            {/* Tab Navigation */}
            <div
              className="rounded-2xl p-1 mb-5 overflow-x-auto"
              style={{
                background: C.cardBgDeep,
                border: `1px solid ${C.borderLight}`,
              }}
            >
              <div className="flex gap-1 min-w-max">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className="shrink-0 min-w-[85px] py-2 px-2.5 rounded-xl font-display text-xs font-bold italic transition-all"
                    style={{
                      background:
                        activeTab === tab.id
                          ? `linear-gradient(135deg, ${C.goldBg}, ${C.headerBg})`
                          : "transparent",
                      color:
                        activeTab === tab.id ? C.textGoldBright : C.textLight,
                      border:
                        activeTab === tab.id
                          ? `1px solid ${C.borderGold}`
                          : "1px solid transparent",
                      boxShadow:
                        activeTab === tab.id
                          ? "0 2px 8px oklch(0.65 0.12 52 / 0.10)"
                          : "none",
                    }}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    data-ocid={`antim-yatra.tab_${tab.id}`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "antyesti" && <AntyestiTab />}
            {activeTab === "shradha" && <ShraddhaTab />}
            {activeTab === "pind" && <PindDaanTab />}
            {activeTab === "garuda" && <GarudaTab />}
            {activeTab === "mourning" && <MourningTab />}
            {activeTab === "pitru" && <PitruPakshaTab />}
            {activeTab === "krishna" && <KrishnaAssuranceTab />}

            {/* Spiritual Will CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 rounded-2xl p-5 text-center"
              style={{
                background: `linear-gradient(160deg, ${C.headerBg}, ${C.goldBg})`,
                border: `1px solid ${C.borderGold}`,
                boxShadow: "0 4px 20px oklch(0.65 0.12 52 / 0.10)",
              }}
            >
              <p
                className="font-display italic mb-2"
                style={{ color: C.textGoldBright, fontSize: "1rem" }}
              >
                "Leave a sacred message for those you love"
              </p>
              <p
                className="font-body text-xs mb-4"
                style={{ color: C.textLight }}
              >
                Write your Spiritual Will — guided by Krishna's wisdom
              </p>
              <Link
                to="/spiritual-will"
                className="inline-block rounded-full px-6 py-2.5 font-display font-bold text-sm transition-all"
                style={{
                  background: `linear-gradient(135deg, ${C.gold}, oklch(0.58 0.20 50))`,
                  color: "oklch(0.98 0.01 60)",
                  boxShadow: "0 3px 12px oklch(0.58 0.18 50 / 0.28)",
                }}
                data-ocid="antim-yatra.spiritual_will_link"
              >
                ✍ Write Your Spiritual Will
              </Link>
            </motion.div>
          </motion.div>
        )}

        <div className="text-center mt-8">
          <Link
            to="/"
            className="font-body text-xs italic"
            style={{ color: C.textGold }}
            data-ocid="antim-yatra.back_home"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
