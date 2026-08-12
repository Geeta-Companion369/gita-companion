import { c as createLucideIcon, r as reactExports, g as useTTS, j as jsxRuntimeExports, m as motion, A as AnimatePresence, d as Link, B as BookOpen } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
import { F as Flame, H as HandHeart } from "./hand-heart-Dg0iYEo0.js";
import { V as Volume2 } from "./volume-2-B206LZ87.js";
import { V as VolumeX } from "./volume-x-D2tX12BP.js";
import { C as ChevronLeft } from "./chevron-left-Did6TZD4.js";
import { C as ChevronRight } from "./chevron-right-DpWvcAOP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
];
const ListOrdered = createLucideIcon("list-ordered", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
];
const Pause = createLucideIcon("pause", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
function SourceCitation({
  granth,
  verse,
  chapter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-4 flex items-start gap-2 rounded-sm border-l-2 px-3 py-2",
      style: {
        borderColor: "oklch(var(--accent) / 0.6)",
        background: "oklch(var(--accent) / 0.06)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BookOpen,
          {
            className: "mt-0.5 shrink-0",
            size: 18,
            style: { color: "oklch(var(--accent))" },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body italic leading-relaxed",
            style: {
              fontSize: "var(--fs-label)",
              color: "oklch(var(--muted-foreground))"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold not-italic", children: "Source:" }),
              " ",
              granth,
              chapter ? ` · Chapter ${chapter}` : "",
              verse ? ` · Verse ${verse}` : ""
            ]
          }
        )
      ]
    }
  );
}
function LoadingState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 gap-5",
      "data-ocid": "shodashopachara.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading", "aria-label": "Loading Shodashopachara", children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display italic",
            style: {
              fontSize: "1.1rem",
              color: "oklch(var(--muted-foreground))"
            },
            children: "Preparing the sixteen offerings…"
          }
        )
      ]
    }
  );
}
function ErrorState({ onRetry }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-20 gap-5 text-center",
      "data-ocid": "shodashopachara.error_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "om-symbol", style: { fontSize: "4rem" }, "aria-hidden": true, children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display italic",
            style: {
              fontSize: "1.15rem",
              color: "oklch(var(--destructive))"
            },
            children: "The worship steps could not be opened just now."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onRetry,
            className: "wax-seal-btn",
            "data-ocid": "shodashopachara.retry_button",
            children: "Try Again"
          }
        )
      ]
    }
  );
}
function StepProgress({
  total,
  current,
  completed,
  onJump
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      className: "flex flex-wrap justify-center gap-2",
      "aria-label": "Worship step progress",
      "data-ocid": "shodashopachara.progress",
      children: Array.from({ length: total }, (_, i) => {
        const isCurrent = i === current;
        const isDone = completed.has(i);
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: progress dots are positional by design
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onJump(i),
              className: "flex items-center justify-center rounded-full transition-smooth",
              style: {
                width: "40px",
                height: "40px",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                background: isCurrent ? "oklch(var(--accent))" : isDone ? "oklch(var(--accent) / 0.25)" : "oklch(var(--muted) / 0.5)",
                color: isCurrent ? "oklch(var(--accent-foreground))" : "oklch(var(--muted-foreground))",
                border: `2px solid ${isCurrent ? "oklch(var(--accent))" : isDone ? "oklch(var(--accent) / 0.6)" : "oklch(var(--border) / 0.5)"}`,
                boxShadow: isCurrent ? "0 0 14px oklch(var(--accent) / 0.5)" : "none"
              },
              "aria-label": `Go to step ${i + 1}${isDone ? " (completed)" : ""}`,
              "aria-current": isCurrent ? "step" : void 0,
              "data-ocid": `shodashopachara.progress.${i + 1}`,
              children: isDone && !isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, "aria-hidden": true }) : i + 1
            }
          ) }, `step-${i}`)
        );
      })
    }
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
  isLast
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "manuscript-card p-6 sm:p-10",
      "data-ocid": `shodashopachara.step.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-verse-number mb-2", style: { fontSize: "0.95rem" }, children: [
            "✦ Step ",
            index + 1,
            " of ",
            total,
            " ✦"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display italic font-bold leading-tight",
              style: {
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "oklch(var(--primary))"
              },
              children: step.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sanskrit mt-2",
              style: { fontSize: "1.75rem", marginBottom: 0 },
              children: step.sanskritName
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", "aria-hidden": true, children: "❀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display italic font-semibold mb-2",
              style: {
                fontSize: "1.3rem",
                color: "oklch(var(--accent))"
              },
              children: "Meaning"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body leading-relaxed",
              style: {
                fontSize: "var(--fs-body)",
                color: "oklch(var(--foreground))"
              },
              children: step.description
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "mb-6 rounded-sm p-5",
            style: {
              background: "oklch(var(--sacred) / 0.06)",
              border: "1px solid oklch(var(--sacred) / 0.22)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display italic font-semibold mb-2",
                  style: {
                    fontSize: "1.3rem",
                    color: "oklch(var(--sacred))"
                  },
                  children: "Vidhi — How to Perform"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body leading-relaxed",
                  style: {
                    fontSize: "var(--fs-body)",
                    color: "oklch(var(--foreground))"
                  },
                  children: step.procedure
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "mb-6 rounded-sm p-5",
            style: {
              background: "linear-gradient(160deg, oklch(var(--accent) / 0.1) 0%, oklch(var(--accent) / 0.04) 100%)",
              border: "1.5px solid oklch(var(--accent) / 0.4)",
              borderLeft: "4px solid oklch(var(--accent) / 0.75)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display italic font-semibold",
                    style: {
                      fontSize: "1.3rem",
                      color: "oklch(var(--accent))"
                    },
                    children: "Mantra"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: isSpeaking ? onStopMantra : onPlayMantra,
                    className: "inline-flex items-center gap-2 rounded-full px-4 py-2 transition-smooth",
                    style: {
                      background: isSpeaking ? "oklch(var(--destructive) / 0.15)" : "oklch(var(--accent) / 0.2)",
                      border: `1.5px solid ${isSpeaking ? "oklch(var(--destructive) / 0.5)" : "oklch(var(--accent) / 0.55)"}`,
                      color: isSpeaking ? "oklch(var(--destructive))" : "oklch(var(--primary))",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)"
                    },
                    "aria-label": isSpeaking ? "Stop mantra recitation" : "Play mantra recitation",
                    "data-ocid": `shodashopachara.step.${index + 1}.mantra_button`,
                    children: isSpeaking ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { size: 16, "aria-hidden": true }),
                      "Stop"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, "aria-hidden": true }),
                      "Recite"
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sanskrit",
                  style: {
                    fontSize: "1.6rem",
                    lineHeight: 2.2,
                    marginBottom: 0
                  },
                  children: step.mantra
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SourceCitation,
          {
            granth: step.sourceGranth,
            verse: step.sourceVerse,
            chapter: step.sourceChapter
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onPrev,
              disabled: isFirst,
              className: "inline-flex items-center gap-2 rounded-md px-4 py-2.5 transition-smooth disabled:opacity-40",
              style: {
                background: "oklch(var(--muted) / 0.4)",
                border: "1px solid oklch(var(--border) / 0.5)",
                color: "oklch(var(--foreground))",
                fontSize: "1rem",
                fontFamily: "var(--font-body)"
              },
              "aria-label": "Previous step",
              "data-ocid": `shodashopachara.step.${index + 1}.prev_button`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18, "aria-hidden": true }),
                "Previous"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onMarkComplete,
              className: "inline-flex items-center gap-2 rounded-md px-5 py-2.5 transition-smooth",
              style: {
                background: isCompleted ? "oklch(var(--accent) / 0.25)" : "linear-gradient(145deg, oklch(0.86 0.4 54) 0%, oklch(0.78 0.34 52) 100%)",
                border: `2px solid ${isCompleted ? "oklch(var(--accent) / 0.6)" : "oklch(0.72 0.32 50)"}`,
                color: isCompleted ? "oklch(var(--accent))" : "oklch(0.1 0.09 28)",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                fontStyle: "italic"
              },
              "data-ocid": `shodashopachara.step.${index + 1}.complete_button`,
              children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, "aria-hidden": true }),
                "Completed"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HandHeart, { size: 18, "aria-hidden": true }),
                "Mark Complete"
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onNext,
              disabled: isLast,
              className: "inline-flex items-center gap-2 rounded-md px-4 py-2.5 transition-smooth disabled:opacity-40",
              style: {
                background: "oklch(var(--muted) / 0.4)",
                border: "1px solid oklch(var(--border) / 0.5)",
                color: "oklch(var(--foreground))",
                fontSize: "1rem",
                fontFamily: "var(--font-body)"
              },
              "aria-label": "Next step",
              "data-ocid": `shodashopachara.step.${index + 1}.next_button`,
              children: [
                "Next",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18, "aria-hidden": true })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function CompletionBanner({
  total,
  onRestart
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, ease: "easeOut" },
      className: "manuscript-card p-8 text-center sm:p-12",
      "data-ocid": "shodashopachara.completion",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "om-symbol mb-4", style: { fontSize: "5rem" }, "aria-hidden": true, children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display italic font-bold mb-3",
            style: {
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "oklch(var(--primary))"
            },
            children: "Pooja Sampanna"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sanskrit mb-4",
            style: { fontSize: "1.6rem", marginBottom: "1rem" },
            children: "पूजा सम्पन्न"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "mx-auto mb-6 max-w-xl font-body leading-relaxed",
            style: {
              fontSize: "var(--fs-body)",
              color: "oklch(var(--muted-foreground))"
            },
            children: [
              "You have completed all ",
              total,
              " steps of Shodashopachara Poojan. The deity has been honoured with each of the sixteen offerings. May this saadhna bring peace to your heart and grace to your home."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onRestart,
              className: "wax-seal-btn inline-flex",
              "data-ocid": "shodashopachara.restart_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 18, "aria-hidden": true }),
                "Begin Again"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/dharma-stambh",
              className: "inline-flex items-center gap-2 rounded-md px-5 py-2.5 transition-smooth",
              style: {
                background: "oklch(var(--sacred) / 0.1)",
                border: "1.5px solid oklch(var(--sacred) / 0.4)",
                color: "oklch(var(--sacred))",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                fontStyle: "italic"
              },
              "data-ocid": "shodashopachara.cta.dharma_stambh",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, "aria-hidden": true }),
                "Understand the Why"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ShodashopacharaPage() {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [completed, setCompleted] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showOverview, setShowOverview] = reactExports.useState(true);
  const tts = useTTS();
  const stepsQuery = useQuery({
    queryKey: ["worship-steps"],
    queryFn: async () => {
      const result = await getBackend().listWorshipSteps();
      return result;
    }
  });
  const steps = stepsQuery.data ?? [];
  const sortedSteps = [...steps].sort(
    (a, b) => Number(a.stepNumber) - Number(b.stepNumber)
  );
  const total = sortedSteps.length;
  const currentStep = sortedSteps[currentIndex];
  const allCompleted = total > 0 && completed.size === total;
  reactExports.useEffect(() => {
    return () => {
      tts.stop();
    };
  }, [tts]);
  reactExports.useEffect(() => {
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
  function handleJump(i) {
    tts.stop();
    setCurrentIndex(i);
    setShowOverview(false);
  }
  function handleRestart() {
    tts.stop();
    setCompleted(/* @__PURE__ */ new Set());
    setCurrentIndex(0);
    setShowOverview(true);
  }
  const isLoading = stepsQuery.isLoading;
  const isError = stepsQuery.isError;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "manuscript-page min-h-screen px-4 py-8 sm:px-6 lg:px-10",
      "data-ocid": "shodashopachara.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "ornate-header", "data-ocid": "shodashopachara.header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Shodashopachara Poojan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sanskrit mt-2",
              style: { fontSize: "1.6rem", marginBottom: 0 },
              children: "षोडशोपचार पूजन"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mx-auto mt-4 max-w-2xl font-body italic leading-relaxed",
              style: {
                fontSize: "var(--fs-body)",
                color: "oklch(var(--muted-foreground))"
              },
              children: "The sixteen-step sacred worship — the complete pooja vidhi for solo worship at home. Each upachara (offering) honours the deity with a specific mantra, procedure, and source. Move step by step, recite each mantra aloud, and complete the pooja in your own sacred space."
            }
          )
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingState, {}) : isError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { onRetry: () => stepsQuery.refetch() }) : total === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "py-16 text-center font-body italic",
            style: {
              fontSize: "1.15rem",
              color: "oklch(var(--muted-foreground))"
            },
            "data-ocid": "shodashopachara.empty_state",
            children: "The sixteen steps await revelation."
          }
        ) : allCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CompletionBanner, { total, onRestart: handleRestart }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mb-8 rounded-md p-4",
              style: {
                background: "oklch(var(--card) / 0.6)",
                border: "1px solid oklch(var(--border) / 0.4)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display italic font-semibold",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--primary))"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { size: 18, className: "mr-2 inline", "aria-hidden": true }),
                        "Sixteen Offerings"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-mono",
                      style: {
                        fontSize: "0.95rem",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: [
                        completed.size,
                        " / ",
                        total,
                        " complete"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StepProgress,
                  {
                    total,
                    current: currentIndex,
                    completed,
                    onJump: handleJump
                  }
                )
              ]
            }
          ),
          showOverview ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              "data-ocid": "shodashopachara.overview",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ षोडशोपचार ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "parchment-grid sm:grid-cols-2 lg:grid-cols-4", children: sortedSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleJump(i),
                    className: "manuscript-card p-5 text-left transition-smooth",
                    style: { cursor: "pointer" },
                    "data-ocid": `shodashopachara.overview.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-verse-number mb-1",
                          style: { fontSize: "0.85rem" },
                          children: [
                            "Step ",
                            i + 1
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display italic font-bold leading-tight",
                          style: {
                            fontSize: "1.25rem",
                            color: "oklch(var(--primary))"
                          },
                          children: step.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sanskrit mt-1",
                          style: {
                            fontSize: "1.15rem",
                            marginBottom: 0,
                            lineHeight: 1.6
                          },
                          children: step.sanskritName
                        }
                      ),
                      completed.has(i) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "mt-2 inline-flex items-center gap-1 font-body italic",
                          style: {
                            fontSize: "0.85rem",
                            color: "oklch(var(--accent))"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, "aria-hidden": true }),
                            "Completed"
                          ]
                        }
                      )
                    ]
                  },
                  step.id
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setCurrentIndex(0);
                      setShowOverview(false);
                    },
                    className: "wax-seal-btn inline-flex",
                    "data-ocid": "shodashopachara.begin_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 18, "aria-hidden": true }),
                      "Begin the Pooja"
                    ]
                  }
                ) })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              transition: { duration: 0.3, ease: "easeOut" },
              children: currentStep && /* @__PURE__ */ jsxRuntimeExports.jsx(
                StepCard,
                {
                  step: currentStep,
                  index: currentIndex,
                  total,
                  isSpeaking: tts.isSpeaking,
                  onPlayMantra: handlePlayMantra,
                  onStopMantra: handleStopMantra,
                  isCompleted: completed.has(currentIndex),
                  onMarkComplete: handleMarkComplete,
                  onPrev: handlePrev,
                  onNext: handleNext,
                  isFirst: currentIndex === 0,
                  isLast: currentIndex === total - 1
                }
              )
            },
            currentIndex
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-8 rounded-md p-5",
              style: {
                background: "oklch(var(--sacred) / 0.06)",
                border: "1.5px solid oklch(var(--sacred) / 0.25)"
              },
              "data-ocid": "shodashopachara.audio_note",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                tts.isSpeaking ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Volume2,
                  {
                    size: 22,
                    className: "mt-0.5 shrink-0",
                    style: { color: "oklch(var(--accent))" },
                    "aria-hidden": true
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  VolumeX,
                  {
                    size: 22,
                    className: "mt-0.5 shrink-0",
                    style: { color: "oklch(var(--muted-foreground))" },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display italic font-semibold mb-1",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--sacred))"
                      },
                      children: "Audio Support"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body leading-relaxed",
                      style: {
                        fontSize: "var(--fs-body)",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: [
                        "Tap the",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-semibold",
                            style: { color: "oklch(var(--accent))" },
                            children: "Recite"
                          }
                        ),
                        " ",
                        "button on any step to hear the mantra spoken aloud. Recite along with the voice, or listen first and then chant from your heart. For solo worship at home, let the sound guide your pronunciation and devotion."
                      ]
                    }
                  )
                ] })
              ] })
            }
          )
        ] })
      ] })
    }
  );
}
export {
  ShodashopacharaPage
};
