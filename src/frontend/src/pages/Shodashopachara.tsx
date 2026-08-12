import { useTTS } from "@/hooks/use-tts";
import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
  HandHeart,
  ListOrdered,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type WorshipStep = {
  id: string;
  stepNumber: bigint;
  name: string;
  sanskritName: string;
  description: string;
  procedure: string;
  mantra: string;
  sourceGranth: string;
  sourceVerse: string;
  sourceChapter: string;
};

function SourceCitation({
  granth,
  verse,
  chapter,
}: {
  granth: string;
  verse: string;
  chapter: string;
}) {
  return (
    <div
      className="mt-4 flex items-start gap-2 rounded-sm border-l-2 px-3 py-2"
      style={{
        borderColor: "oklch(var(--accent) / 0.6)",
        background: "oklch(var(--accent) / 0.06)",
      }}
    >
      <BookOpen
        className="mt-0.5 shrink-0"
        size={18}
        style={{ color: "oklch(var(--accent))" }}
        aria-hidden
      />
      <p
        className="font-body italic leading-relaxed"
        style={{
          fontSize: "var(--fs-label)",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        <span className="font-semibold not-italic">Source:</span> {granth}
        {chapter ? ` · Chapter ${chapter}` : ""}
        {verse ? ` · Verse ${verse}` : ""}
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 gap-5"
      data-ocid="shodashopachara.loading_state"
    >
      <div className="om-loading" aria-label="Loading Shodashopachara">
        ॐ
      </div>
      <p
        className="font-display italic"
        style={{
          fontSize: "1.1rem",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        Preparing the sixteen offerings…
      </p>
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-5 text-center"
      data-ocid="shodashopachara.error_state"
    >
      <p className="om-symbol" style={{ fontSize: "4rem" }} aria-hidden>
        ॐ
      </p>
      <p
        className="font-display italic"
        style={{
          fontSize: "1.15rem",
          color: "oklch(var(--destructive))",
        }}
      >
        The worship steps could not be opened just now.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="wax-seal-btn"
        data-ocid="shodashopachara.retry_button"
      >
        Try Again
      </button>
    </div>
  );
}

function StepProgress({
  total,
  current,
  completed,
  onJump,
}: {
  total: number;
  current: number;
  completed: Set<number>;
  onJump: (i: number) => void;
}) {
  return (
    <ol
      className="flex flex-wrap justify-center gap-2"
      aria-label="Worship step progress"
      data-ocid="shodashopachara.progress"
    >
      {Array.from({ length: total }, (_, i) => {
        const isCurrent = i === current;
        const isDone = completed.has(i);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: progress dots are positional by design
          <li key={`step-${i}`}>
            <button
              type="button"
              onClick={() => onJump(i)}
              className="flex items-center justify-center rounded-full transition-smooth"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                background: isCurrent
                  ? "oklch(var(--accent))"
                  : isDone
                    ? "oklch(var(--accent) / 0.25)"
                    : "oklch(var(--muted) / 0.5)",
                color: isCurrent
                  ? "oklch(var(--accent-foreground))"
                  : "oklch(var(--muted-foreground))",
                border: `2px solid ${
                  isCurrent
                    ? "oklch(var(--accent))"
                    : isDone
                      ? "oklch(var(--accent) / 0.6)"
                      : "oklch(var(--border) / 0.5)"
                }`,
                boxShadow: isCurrent
                  ? "0 0 14px oklch(var(--accent) / 0.5)"
                  : "none",
              }}
              aria-label={`Go to step ${i + 1}${isDone ? " (completed)" : ""}`}
              aria-current={isCurrent ? "step" : undefined}
              data-ocid={`shodashopachara.progress.${i + 1}`}
            >
              {isDone && !isCurrent ? (
                <CheckCircle2 size={20} aria-hidden />
              ) : (
                i + 1
              )}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function StepCard({
  step,
  index,
  total,
  isSpeaking,
  onPlayMantra,
  onStopMantra,
  isCompleted,
  onMarkComplete,
  onPrev,
  onNext,
  isFirst,
  isLast,
}: {
  step: WorshipStep;
  index: number;
  total: number;
  isSpeaking: boolean;
  onPlayMantra: () => void;
  onStopMantra: () => void;
  isCompleted: boolean;
  onMarkComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <article
      className="manuscript-card p-6 sm:p-10"
      data-ocid={`shodashopachara.step.${index + 1}`}
    >
      {/* Step number badge */}
      <header className="mb-6 text-center">
        <p className="text-verse-number mb-2" style={{ fontSize: "0.95rem" }}>
          ✦ Step {index + 1} of {total} ✦
        </p>
        <h2
          className="font-display italic font-bold leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            color: "oklch(var(--primary))",
          }}
        >
          {step.name}
        </h2>
        <p
          className="text-sanskrit mt-2"
          style={{ fontSize: "1.75rem", marginBottom: 0 }}
        >
          {step.sanskritName}
        </p>
      </header>

      <div className="divider-ornate" aria-hidden>
        ❀
      </div>

      {/* Description */}
      <section className="mb-6">
        <h3
          className="font-display italic font-semibold mb-2"
          style={{
            fontSize: "1.3rem",
            color: "oklch(var(--accent))",
          }}
        >
          Meaning
        </h3>
        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: "var(--fs-body)",
            color: "oklch(var(--foreground))",
          }}
        >
          {step.description}
        </p>
      </section>

      {/* Procedure */}
      <section
        className="mb-6 rounded-sm p-5"
        style={{
          background: "oklch(var(--sacred) / 0.06)",
          border: "1px solid oklch(var(--sacred) / 0.22)",
        }}
      >
        <h3
          className="font-display italic font-semibold mb-2"
          style={{
            fontSize: "1.3rem",
            color: "oklch(var(--sacred))",
          }}
        >
          Vidhi — How to Perform
        </h3>
        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: "var(--fs-body)",
            color: "oklch(var(--foreground))",
          }}
        >
          {step.procedure}
        </p>
      </section>

      {/* Mantra with audio */}
      <section
        className="mb-6 rounded-sm p-5"
        style={{
          background:
            "linear-gradient(160deg, oklch(var(--accent) / 0.1) 0%, oklch(var(--accent) / 0.04) 100%)",
          border: "1.5px solid oklch(var(--accent) / 0.4)",
          borderLeft: "4px solid oklch(var(--accent) / 0.75)",
        }}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3
            className="font-display italic font-semibold"
            style={{
              fontSize: "1.3rem",
              color: "oklch(var(--accent))",
            }}
          >
            Mantra
          </h3>
          <button
            type="button"
            onClick={isSpeaking ? onStopMantra : onPlayMantra}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 transition-smooth"
            style={{
              background: isSpeaking
                ? "oklch(var(--destructive) / 0.15)"
                : "oklch(var(--accent) / 0.2)",
              border: `1.5px solid ${
                isSpeaking
                  ? "oklch(var(--destructive) / 0.5)"
                  : "oklch(var(--accent) / 0.55)"
              }`,
              color: isSpeaking
                ? "oklch(var(--destructive))"
                : "oklch(var(--primary))",
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
            }}
            aria-label={
              isSpeaking ? "Stop mantra recitation" : "Play mantra recitation"
            }
            data-ocid={`shodashopachara.step.${index + 1}.mantra_button`}
          >
            {isSpeaking ? (
              <>
                <Pause size={16} aria-hidden />
                Stop
              </>
            ) : (
              <>
                <Play size={16} aria-hidden />
                Recite
              </>
            )}
          </button>
        </div>
        <p
          className="text-sanskrit"
          style={{
            fontSize: "1.6rem",
            lineHeight: 2.2,
            marginBottom: 0,
          }}
        >
          {step.mantra}
        </p>
      </section>

      <SourceCitation
        granth={step.sourceGranth}
        verse={step.sourceVerse}
        chapter={step.sourceChapter}
      />

      {/* Navigation */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 transition-smooth disabled:opacity-40"
          style={{
            background: "oklch(var(--muted) / 0.4)",
            border: "1px solid oklch(var(--border) / 0.5)",
            color: "oklch(var(--foreground))",
            fontSize: "1rem",
            fontFamily: "var(--font-body)",
          }}
          aria-label="Previous step"
          data-ocid={`shodashopachara.step.${index + 1}.prev_button`}
        >
          <ChevronLeft size={18} aria-hidden />
          Previous
        </button>

        <button
          type="button"
          onClick={onMarkComplete}
          className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 transition-smooth"
          style={{
            background: isCompleted
              ? "oklch(var(--accent) / 0.25)"
              : "linear-gradient(145deg, oklch(0.86 0.4 54) 0%, oklch(0.78 0.34 52) 100%)",
            border: `2px solid ${
              isCompleted ? "oklch(var(--accent) / 0.6)" : "oklch(0.72 0.32 50)"
            }`,
            color: isCompleted ? "oklch(var(--accent))" : "oklch(0.1 0.09 28)",
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
          }}
          data-ocid={`shodashopachara.step.${index + 1}.complete_button`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 size={18} aria-hidden />
              Completed
            </>
          ) : (
            <>
              <HandHeart size={18} aria-hidden />
              Mark Complete
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 transition-smooth disabled:opacity-40"
          style={{
            background: "oklch(var(--muted) / 0.4)",
            border: "1px solid oklch(var(--border) / 0.5)",
            color: "oklch(var(--foreground))",
            fontSize: "1rem",
            fontFamily: "var(--font-body)",
          }}
          aria-label="Next step"
          data-ocid={`shodashopachara.step.${index + 1}.next_button`}
        >
          Next
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </article>
  );
}

function CompletionBanner({
  total,
  onRestart,
}: {
  total: number;
  onRestart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="manuscript-card p-8 text-center sm:p-12"
      data-ocid="shodashopachara.completion"
    >
      <p className="om-symbol mb-4" style={{ fontSize: "5rem" }} aria-hidden>
        ॐ
      </p>
      <h2
        className="font-display italic font-bold mb-3"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "oklch(var(--primary))",
        }}
      >
        Pooja Sampanna
      </h2>
      <p
        className="text-sanskrit mb-4"
        style={{ fontSize: "1.6rem", marginBottom: "1rem" }}
      >
        पूजा सम्पन्न
      </p>
      <p
        className="mx-auto mb-6 max-w-xl font-body leading-relaxed"
        style={{
          fontSize: "var(--fs-body)",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        You have completed all {total} steps of Shodashopachara Poojan. The
        deity has been honoured with each of the sixteen offerings. May this
        saadhna bring peace to your heart and grace to your home.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="wax-seal-btn inline-flex"
          data-ocid="shodashopachara.restart_button"
        >
          <RotateCcw size={18} aria-hidden />
          Begin Again
        </button>
        <Link
          to="/dharma-stambh"
          className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 transition-smooth"
          style={{
            background: "oklch(var(--sacred) / 0.1)",
            border: "1.5px solid oklch(var(--sacred) / 0.4)",
            color: "oklch(var(--sacred))",
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
          }}
          data-ocid="shodashopachara.cta.dharma_stambh"
        >
          <BookOpen size={18} aria-hidden />
          Understand the Why
        </Link>
      </div>
    </motion.div>
  );
}

export function ShodashopacharaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [showOverview, setShowOverview] = useState(true);

  const tts = useTTS();

  const stepsQuery = useQuery({
    queryKey: ["worship-steps"],
    queryFn: async () => {
      const result = await getBackend().listWorshipSteps();
      return result as WorshipStep[];
    },
  });

  const steps = stepsQuery.data ?? [];
  const sortedSteps = [...steps].sort(
    (a, b) => Number(a.stepNumber) - Number(b.stepNumber),
  );
  const total = sortedSteps.length;
  const currentStep = sortedSteps[currentIndex];
  const allCompleted = total > 0 && completed.size === total;

  // Stop TTS when navigating between steps
  useEffect(() => {
    return () => {
      tts.stop();
    };
  }, [tts]);

  // Stop TTS if component unmounts
  useEffect(() => {
    return () => tts.stop();
  }, [tts]);

  function handlePlayMantra() {
    if (!currentStep) return;
    tts.unlockAudio();
    tts.speak(currentStep.mantra, "sa", "male");
  }

  function handleStopMantra() {
    tts.stop();
  }

  function handleMarkComplete() {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(currentIndex);
      return next;
    });
    // Auto-advance to next step if not last
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handlePrev() {
    tts.stop();
    setCurrentIndex((i) => Math.max(0, i - 1));
  }

  function handleNext() {
    tts.stop();
    setCurrentIndex((i) => Math.min(total - 1, i + 1));
  }

  function handleJump(i: number) {
    tts.stop();
    setCurrentIndex(i);
    setShowOverview(false);
  }

  function handleRestart() {
    tts.stop();
    setCompleted(new Set());
    setCurrentIndex(0);
    setShowOverview(true);
  }

  const isLoading = stepsQuery.isLoading;
  const isError = stepsQuery.isError;

  return (
    <div
      className="manuscript-page min-h-screen px-4 py-8 sm:px-6 lg:px-10"
      data-ocid="shodashopachara.page"
    >
      <div className="mx-auto max-w-4xl">
        {/* === HEADER === */}
        <header className="ornate-header" data-ocid="shodashopachara.header">
          <h1>Shodashopachara Poojan</h1>
          <p
            className="text-sanskrit mt-2"
            style={{ fontSize: "1.6rem", marginBottom: 0 }}
          >
            षोडशोपचार पूजन
          </p>
          <p
            className="mx-auto mt-4 max-w-2xl font-body italic leading-relaxed"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--muted-foreground))",
            }}
          >
            The sixteen-step sacred worship — the complete pooja vidhi for solo
            worship at home. Each upachara (offering) honours the deity with a
            specific mantra, procedure, and source. Move step by step, recite
            each mantra aloud, and complete the pooja in your own sacred space.
          </p>
        </header>

        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState onRetry={() => stepsQuery.refetch()} />
        ) : total === 0 ? (
          <p
            className="py-16 text-center font-body italic"
            style={{
              fontSize: "1.15rem",
              color: "oklch(var(--muted-foreground))",
            }}
            data-ocid="shodashopachara.empty_state"
          >
            The sixteen steps await revelation.
          </p>
        ) : allCompleted ? (
          <CompletionBanner total={total} onRestart={handleRestart} />
        ) : (
          <>
            {/* === PROGRESS === */}
            <div
              className="mb-8 rounded-md p-4"
              style={{
                background: "oklch(var(--card) / 0.6)",
                border: "1px solid oklch(var(--border) / 0.4)",
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p
                  className="font-display italic font-semibold"
                  style={{
                    fontSize: "1.1rem",
                    color: "oklch(var(--primary))",
                  }}
                >
                  <ListOrdered size={18} className="mr-2 inline" aria-hidden />
                  Sixteen Offerings
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.95rem",
                    color: "oklch(var(--muted-foreground))",
                  }}
                >
                  {completed.size} / {total} complete
                </p>
              </div>
              <StepProgress
                total={total}
                current={currentIndex}
                completed={completed}
                onJump={handleJump}
              />
            </div>

            {/* === OVERVIEW / DETAIL TOGGLE === */}
            {showOverview ? (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                data-ocid="shodashopachara.overview"
              >
                <div className="chapter-separator" aria-hidden>
                  ✦ षोडशोपचार ✦
                </div>
                <div className="parchment-grid sm:grid-cols-2 lg:grid-cols-4">
                  {sortedSteps.map((step, i) => (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => handleJump(i)}
                      className="manuscript-card p-5 text-left transition-smooth"
                      style={{ cursor: "pointer" }}
                      data-ocid={`shodashopachara.overview.item.${i + 1}`}
                    >
                      <p
                        className="text-verse-number mb-1"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Step {i + 1}
                      </p>
                      <h3
                        className="font-display italic font-bold leading-tight"
                        style={{
                          fontSize: "1.25rem",
                          color: "oklch(var(--primary))",
                        }}
                      >
                        {step.name}
                      </h3>
                      <p
                        className="text-sanskrit mt-1"
                        style={{
                          fontSize: "1.15rem",
                          marginBottom: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {step.sanskritName}
                      </p>
                      {completed.has(i) && (
                        <p
                          className="mt-2 inline-flex items-center gap-1 font-body italic"
                          style={{
                            fontSize: "0.85rem",
                            color: "oklch(var(--accent))",
                          }}
                        >
                          <CheckCircle2 size={14} aria-hidden />
                          Completed
                        </p>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentIndex(0);
                      setShowOverview(false);
                    }}
                    className="wax-seal-btn inline-flex"
                    data-ocid="shodashopachara.begin_button"
                  >
                    <Flame size={18} aria-hidden />
                    Begin the Pooja
                  </button>
                </div>
              </motion.section>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {currentStep && (
                    <StepCard
                      step={currentStep}
                      index={currentIndex}
                      total={total}
                      isSpeaking={tts.isSpeaking}
                      onPlayMantra={handlePlayMantra}
                      onStopMantra={handleStopMantra}
                      isCompleted={completed.has(currentIndex)}
                      onMarkComplete={handleMarkComplete}
                      onPrev={handlePrev}
                      onNext={handleNext}
                      isFirst={currentIndex === 0}
                      isLast={currentIndex === total - 1}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            )}

            {/* === AUDIO SUPPORT NOTE === */}
            <div
              className="mt-8 rounded-md p-5"
              style={{
                background: "oklch(var(--sacred) / 0.06)",
                border: "1.5px solid oklch(var(--sacred) / 0.25)",
              }}
              data-ocid="shodashopachara.audio_note"
            >
              <div className="flex items-start gap-3">
                {tts.isSpeaking ? (
                  <Volume2
                    size={22}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(var(--accent))" }}
                    aria-hidden
                  />
                ) : (
                  <VolumeX
                    size={22}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                    aria-hidden
                  />
                )}
                <div>
                  <p
                    className="font-display italic font-semibold mb-1"
                    style={{
                      fontSize: "1.1rem",
                      color: "oklch(var(--sacred))",
                    }}
                  >
                    Audio Support
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    Tap the{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      Recite
                    </span>{" "}
                    button on any step to hear the mantra spoken aloud. Recite
                    along with the voice, or listen first and then chant from
                    your heart. For solo worship at home, let the sound guide
                    your pronunciation and devotion.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
