import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, d as Link, B as BookOpen } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
import { H as HandHeart, F as Flame } from "./hand-heart-Dg0iYEo0.js";
import { V as Volume2 } from "./volume-2-B206LZ87.js";
import { S as Sparkles } from "./sparkles-BZdeuEcm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Compass = createLucideIcon("compass", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "4oyue0"
    }
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }]
];
const HeartHandshake = createLucideIcon("heart-handshake", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = createLucideIcon("link-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("moon", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
const RITUAL_ICONS = {
  "ritual-brahma-muhurta": Sun,
  "ritual-bath": Sparkles,
  "ritual-diya": Flame,
  "ritual-sandhya": Moon,
  "ritual-satvik": HeartHandshake,
  "ritual-chant-eat": Volume2,
  "ritual-sleep": Moon,
  "ritual-touch-feet": HandHeart,
  "ritual-nails-hair": Eye,
  "ritual-shivling-water": Compass
};
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
function PillarCard({ pillar }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "manuscript-card p-6 sm:p-8",
      "data-ocid": `dharma-stambh.pillar.${pillar.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-2", style: { fontSize: "0.95rem" }, children: "✦ Pillar of Dharma ✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display italic font-bold leading-tight",
              style: {
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "oklch(var(--primary))"
              },
              children: pillar.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sanskrit mt-1",
              style: { fontSize: "1.65rem", marginBottom: 0 },
              children: pillar.sanskritName
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", "aria-hidden": true, children: "❀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body leading-relaxed",
            style: {
              fontSize: "var(--fs-body)",
              color: "oklch(var(--foreground))"
            },
            children: pillar.description
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-5 rounded-sm p-4",
            style: {
              background: "oklch(var(--sacred) / 0.08)",
              border: "1px solid oklch(var(--sacred) / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic font-semibold mb-1",
                  style: {
                    fontSize: "1.05rem",
                    color: "oklch(var(--sacred))"
                  },
                  children: "Saadhna — how to practise"
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
                  children: pillar.practice
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SourceCitation,
          {
            granth: pillar.sourceGranth,
            verse: pillar.sourceVerse,
            chapter: pillar.sourceChapter
          }
        )
      ]
    }
  );
}
function YugCard({ yug }) {
  const quarter = Number(yug.dharmaQuarter);
  const legs = [1, 2, 3, 4];
  const durationLakh = Math.round(Number(yug.durationYears) / 1e5) / 10;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "manuscript-card p-6 sm:p-7",
      "data-ocid": `dharma-stambh.yug.${yug.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display italic font-bold leading-tight",
              style: {
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                color: "oklch(var(--primary))"
              },
              children: yug.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sanskrit mt-1",
              style: { fontSize: "1.4rem", marginBottom: 0 },
              children: yug.sanskritName
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mb-4 flex items-center justify-center gap-2",
            "aria-label": `Dharma stands on ${quarter} of 4 legs`,
            children: [
              legs.map((leg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block rounded-full transition-smooth",
                  style: {
                    width: leg <= quarter ? "14px" : "14px",
                    height: leg <= quarter ? "14px" : "14px",
                    background: leg <= quarter ? "oklch(var(--accent))" : "oklch(var(--accent) / 0.18)",
                    boxShadow: leg <= quarter ? "0 0 10px oklch(var(--accent) / 0.6)" : "none",
                    border: "1px solid oklch(var(--accent) / 0.4)"
                  },
                  "aria-hidden": true
                },
                leg
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "ml-2 font-display italic font-bold",
                  style: {
                    fontSize: "1.1rem",
                    color: "oklch(var(--accent))"
                  },
                  children: [
                    quarter,
                    "/4"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body leading-relaxed text-center",
            style: {
              fontSize: "var(--fs-body)",
              color: "oklch(var(--foreground))"
            },
            children: yug.description
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "mt-3 font-body italic leading-relaxed text-center",
            style: {
              fontSize: "1rem",
              color: "oklch(var(--muted-foreground))"
            },
            children: yug.characteristics
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "mt-3 text-center font-mono",
            style: {
              fontSize: "0.95rem",
              color: "oklch(var(--muted-foreground))"
            },
            children: [
              "Duration: ",
              durationLakh > 0 ? `${durationLakh} lakh years` : "—"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SourceCitation,
          {
            granth: yug.sourceGranth,
            verse: yug.sourceVerse,
            chapter: yug.sourceChapter
          }
        )
      ]
    }
  );
}
function RitualExplanationCard({
  explanation,
  index
}) {
  const Icon = RITUAL_ICONS[explanation.id] ?? BookOpen;
  const hasLinks = explanation.relatedDutyIds.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "article",
    {
      className: "verse-block",
      "data-ocid": `dharma-stambh.explanation.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center rounded-full",
            style: {
              width: "52px",
              height: "52px",
              background: "oklch(var(--accent) / 0.15)",
              border: "1.5px solid oklch(var(--accent) / 0.45)"
            },
            "aria-hidden": true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, style: { color: "oklch(var(--accent))" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h4",
            {
              className: "font-display italic font-bold leading-tight",
              style: {
                fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
                color: "oklch(var(--primary))"
              },
              children: explanation.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mt-1", style: { fontSize: "0.9rem" }, children: explanation.ritualName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-3 font-body leading-relaxed",
              style: {
                fontSize: "var(--fs-body)",
                color: "oklch(var(--foreground))"
              },
              children: explanation.explanation
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SourceCitation,
            {
              granth: explanation.sourceGranth,
              verse: explanation.sourceVerse,
              chapter: explanation.sourceChapter
            }
          ),
          hasLinks && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 font-body italic",
                style: {
                  fontSize: "0.95rem",
                  color: "oklch(var(--muted-foreground))"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { size: 15, "aria-hidden": true }),
                  "Practise in Aachar:"
                ]
              }
            ),
            explanation.relatedDutyIds.map((dutyId) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/aachar",
                className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-smooth",
                style: {
                  background: "oklch(var(--accent) / 0.12)",
                  border: "1px solid oklch(var(--accent) / 0.4)",
                  fontSize: "0.9rem",
                  color: "oklch(var(--primary))"
                },
                "data-ocid": `dharma-stambh.explanation.${index + 1}.link.${dutyId}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HandHeart, { size: 14, "aria-hidden": true }),
                  dutyId.replace(/^duty-/, "").replace(/-/g, " ")
                ]
              },
              dutyId
            ))
          ] })
        ] })
      ] })
    }
  );
}
function LoadingState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 gap-5",
      "data-ocid": "dharma-stambh.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading", "aria-label": "Loading Dharma Stambh", children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display italic",
            style: {
              fontSize: "1.1rem",
              color: "oklch(var(--muted-foreground))"
            },
            children: "Revealing the pillars of dharma…"
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
      "data-ocid": "dharma-stambh.error_state",
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
            children: "The scriptures could not be opened just now."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onRetry,
            className: "wax-seal-btn",
            "data-ocid": "dharma-stambh.retry_button",
            children: "Try Again"
          }
        )
      ]
    }
  );
}
function DharmaStambhPage() {
  const [activeTab, setActiveTab] = reactExports.useState(
    "pillars"
  );
  const pillarsQuery = useQuery({
    queryKey: ["dharma-pillars"],
    queryFn: async () => {
      const result = await getBackend().listDharmaPillars();
      return result;
    }
  });
  const yugsQuery = useQuery({
    queryKey: ["yug-cycles"],
    queryFn: async () => {
      const result = await getBackend().listYugCycles();
      return result;
    }
  });
  const explanationsQuery = useQuery({
    queryKey: ["ritual-explanations"],
    queryFn: async () => {
      const result = await getBackend().listRitualExplanations();
      return result;
    }
  });
  const isLoading = pillarsQuery.isLoading || yugsQuery.isLoading || explanationsQuery.isLoading;
  const isError = pillarsQuery.isError || yugsQuery.isError || explanationsQuery.isError;
  const pillars = pillarsQuery.data ?? [];
  const yugs = yugsQuery.data ?? [];
  const explanations = explanationsQuery.data ?? [];
  const retry = () => {
    pillarsQuery.refetch();
    yugsQuery.refetch();
    explanationsQuery.refetch();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "manuscript-page min-h-screen px-4 py-8 sm:px-6 lg:px-10",
      "data-ocid": "dharma-stambh.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "ornate-header", "data-ocid": "dharma-stambh.header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Dharma Stambh" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sanskrit mt-2",
              style: { fontSize: "1.6rem", marginBottom: 0 },
              children: "धर्म स्तम्भ"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "mx-auto mt-4 max-w-2xl font-body italic leading-relaxed",
              style: {
                fontSize: "var(--fs-body)",
                color: "oklch(var(--muted-foreground))"
              },
              children: [
                "The soul of this app — the eternal",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "oklch(var(--accent))" }, children: "why" }),
                " ",
                "behind every ritual. Not blind faith, but trust grounded in source: each teaching cites its granth, chapter, and verse. Dharma stands on four pillars — Satya, Tapp, Daya, Daan — and diminishes across the four yugs, from Satyug's fullness to Kaliyug's single leg."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "nav",
          {
            className: "mb-8 flex flex-wrap justify-center gap-2",
            "aria-label": "Dharma Stambh sections",
            "data-ocid": "dharma-stambh.tabs",
            children: [
              { id: "pillars", label: "4 Pillars", sub: "चतुष्ठम्भ" },
              { id: "yugs", label: "Yug Cycle", sub: "युगचक्र" },
              { id: "whys", label: "The Why", sub: "किमर्थम्" }
            ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveTab(tab.id),
                className: "flex flex-col items-center rounded-md px-5 py-3 transition-smooth",
                style: {
                  background: activeTab === tab.id ? "linear-gradient(180deg, oklch(var(--accent) / 0.22) 0%, oklch(var(--accent) / 0.08) 100%)" : "transparent",
                  border: `2px solid ${activeTab === tab.id ? "oklch(var(--accent) / 0.7)" : "oklch(var(--border) / 0.5)"}`,
                  boxShadow: activeTab === tab.id ? "0 0 18px oklch(var(--accent) / 0.3)" : "none"
                },
                "data-ocid": `dharma-stambh.tab.${tab.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display italic font-bold",
                      style: {
                        fontSize: "1.1rem",
                        color: activeTab === tab.id ? "oklch(var(--primary))" : "oklch(var(--muted-foreground))"
                      },
                      children: tab.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body",
                      style: {
                        fontSize: "0.85rem",
                        color: "oklch(var(--accent) / 0.85)"
                      },
                      children: tab.sub
                    }
                  )
                ]
              },
              tab.id
            ))
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingState, {}) : isError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { onRetry: retry }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.3, ease: "easeOut" },
            children: [
              activeTab === "pillars" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "dharma-stambh.section.pillars", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ चतुष्ठम्भ ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mx-auto mb-8 max-w-2xl text-center font-body italic leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "Dharma rests on four eternal pillars. Together they form the foundation of a dharmic life — truth in speech, discipline in body, compassion in heart, and generosity in hand."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "parchment-grid sm:grid-cols-2", children: pillars.map((pillar) => /* @__PURE__ */ jsxRuntimeExports.jsx(PillarCard, { pillar }, pillar.id)) }),
                pillars.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "py-12 text-center font-body italic",
                    style: {
                      fontSize: "1.1rem",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "The pillars await revelation."
                  }
                )
              ] }),
              activeTab === "yugs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "dharma-stambh.section.yugs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ युगचक्र ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mx-auto mb-8 max-w-2xl text-center font-body italic leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "Dharma diminishes across the four yugs. In Satyug it stands on four legs; in Treta three; in Dwaapar two; in Kaliyug — the age we now inhabit — only one. Yet even one leg of dharma is enough to carry the sincere seeker home."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "parchment-grid sm:grid-cols-2 lg:grid-cols-4", children: yugs.map((yug) => /* @__PURE__ */ jsxRuntimeExports.jsx(YugCard, { yug }, yug.id)) }),
                yugs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "py-12 text-center font-body italic",
                    style: {
                      fontSize: "1.1rem",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "The cycle of yugs awaits revelation."
                  }
                )
              ] }),
              activeTab === "whys" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "dharma-stambh.section.whys", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ किमर्थम् — The Why ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mx-auto mb-8 max-w-2xl text-center font-body italic leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "Why wake at brahma muhurta? Why bathe before pooja? Why light a diya? Each practice has a reason, rooted in shastra. Here is the why behind every ritual — never blind faith, always trust through source."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-2 sm:p-4", children: [
                  explanations.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RitualExplanationCard,
                    {
                      explanation: exp,
                      index: i
                    },
                    exp.id
                  )),
                  explanations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "py-12 text-center font-body italic",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: "The explanations await revelation."
                    }
                  )
                ] })
              ] })
            ]
          },
          activeTab
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-6 rounded-md p-6 text-center",
            style: {
              background: "oklch(var(--sacred) / 0.06)",
              border: "1.5px solid oklch(var(--sacred) / 0.25)"
            },
            "data-ocid": "dharma-stambh.interlink",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic font-bold mb-2",
                  style: {
                    fontSize: "1.3rem",
                    color: "oklch(var(--sacred))"
                  },
                  children: "From the Why to the How"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mx-auto mb-4 max-w-xl font-body leading-relaxed",
                  style: {
                    fontSize: "var(--fs-body)",
                    color: "oklch(var(--muted-foreground))"
                  },
                  children: "Understanding the why is the beginning. Living it is the saadhna. Carry these teachings into your daily practice."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/aachar",
                  className: "wax-seal-btn inline-flex",
                  "data-ocid": "dharma-stambh.cta.aachar",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(HandHeart, { size: 18, "aria-hidden": true }),
                    "Open Aachar Saadhna"
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
export {
  DharmaStambhPage
};
