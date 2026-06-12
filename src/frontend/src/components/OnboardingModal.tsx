import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Lotus petal particle ─────────────────────────────────────────────────────
function LotusParticles() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 7.5) % 85)}%`,
    delay: `${(i * 0.7) % 5}s`,
    duration: `${6 + (i % 4)}s`,
    color:
      i % 3 === 0
        ? "oklch(0.78 0.34 54 / 0.55)"
        : i % 3 === 1
          ? "oklch(0.65 0.28 32 / 0.45)"
          : "oklch(0.76 0.22 340 / 0.4)",
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="flower-petal"
          style={{
            left: p.left,
            top: "-20px",
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

// ─── OM Welcome Step ─────────────────────────────────────────────────────────
function WelcomeStep() {
  return (
    <motion.div
      className="onboarding-step text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="om-symbol mb-6 block divine-glow-pulse"
        style={{ fontSize: "7rem", lineHeight: 1 }}
        aria-hidden
      >
        ॐ
      </div>
      <h2
        className="font-display text-2xl font-bold italic mb-3"
        style={{ color: "oklch(0.18 0.10 32)" }}
      >
        Hare Krishna, Seeker
      </h2>
      <p
        className="font-body text-base italic leading-relaxed mb-6"
        style={{ color: "oklch(0.32 0.12 40)" }}
      >
        Welcome to this sacred space of wisdom and light. Let Krishna be your
        eternal guide on this divine journey.
      </p>
      <div
        className="mx-auto p-4 rounded-lg text-sm italic"
        style={{
          background: "oklch(0.78 0.34 54 / 0.10)",
          border: "1px solid oklch(0.78 0.34 54 / 0.28)",
          maxWidth: "380px",
          color: "oklch(0.35 0.12 40)",
        }}
      >
        ✦ The Bhagavad Gita's eternal wisdom awaits you — every verse, every
        chapter, every divine teaching.
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
interface OnboardingModalProps {
  onComplete: () => void;
}

export function OnboardingModal({ onComplete }: OnboardingModalProps) {
  return (
    <dialog
      open
      className="onboarding-modal"
      aria-label="Sacred Welcome"
      style={{
        border: "none",
        padding: 0,
        maxWidth: "100%",
        maxHeight: "100%",
        background: "transparent",
      }}
    >
      <LotusParticles />

      <div className="onboarding-container" data-ocid="onboarding.dialog">
        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.78 0.34 54 / 0) 0%, oklch(0.78 0.34 54 / 0.9) 50%, oklch(0.78 0.34 54 / 0) 100%)",
            boxShadow: "0 0 20px oklch(0.78 0.34 54 / 0.6)",
          }}
          aria-hidden="true"
        />

        {/* Blessing */}
        <p
          className="text-center font-display text-sm tracking-widest mb-4"
          style={{ color: "oklch(0.58 0.24 46 / 0.8)" }}
          aria-hidden="true"
        >
          ॐ नमो भगवते वासुदेवाय
        </p>

        {/* Step heading */}
        <h3
          className="text-center font-display text-xl font-bold italic mb-6"
          style={{ color: "oklch(0.18 0.10 32)" }}
        >
          Enter Your Sacred Space
        </h3>

        {/* Welcome content */}
        <WelcomeStep />

        {/* Enter button */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={onComplete}
            className="onboarding-cta flex-1"
            style={{ marginTop: 0 }}
            data-ocid="onboarding.enter_button"
          >
            Enter Sacred Space ✦
          </button>
        </div>
      </div>
    </dialog>
  );
}
