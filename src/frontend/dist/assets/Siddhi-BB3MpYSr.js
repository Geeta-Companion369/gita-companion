import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
const GURU_DISCLAIMER_TEXT = "These practices can be performed only under Guru guidance.";
const TABS = [
  {
    id: "siddhis",
    label: "Siddhis & Nidhis",
    sub: "सिद्धि निधि",
    description: "The eight primary Siddhis and the nine Nidhis — divine powers and treasures that manifest as signs of deep saadhna. They are never the goal; they arise as byproducts of union with the Divine."
  },
  {
    id: "kalas",
    label: "16 Kalas",
    sub: "षोडश कला",
    description: "The sixteen Kalas — the divine arts and graces that Sri Krishna embodies in full. To contemplate each Kala is to contemplate a facet of the Lord's perfection."
  },
  {
    id: "mahavidyas",
    label: "10 Mahavidyas",
    sub: "दश महाविद्या",
    description: "The ten Mahavidyas — the great wisdom forms of the Divine Mother. Each is a complete path of the Goddess, revealing a distinct face of cosmic truth."
  }
];
function SourceCitation({
  granth,
  chapter,
  verse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "scripture-citation",
      "aria-label": `Source: ${granth}, chapter ${chapter}, verse ${verse}`,
      children: [
        granth,
        chapter ? ` · Ch. ${chapter}` : "",
        verse ? ` · ${verse}` : ""
      ]
    }
  );
}
function SiddhiCard({ entry, index }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "content-card--item",
      "data-expanded": expanded,
      "data-ocid": `siddhi.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card__title", children: entry.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sanskrit",
              style: { fontSize: "1.5rem", marginBottom: 0, lineHeight: 1.4 },
              children: entry.sanskritName
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card__description", children: entry.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SourceCitation,
          {
            granth: entry.sourceGranth,
            chapter: entry.sourceChapter,
            verse: entry.sourceVerse
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "content-card__toggle",
            "aria-expanded": expanded,
            "aria-controls": `siddhi-detail-${entry.id}`,
            onClick: () => setExpanded((v) => !v),
            "data-ocid": `siddhi.item.${index + 1}.toggle`,
            children: [
              expanded ? "Hide practice" : "Reveal practice",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card__toggle-icon", "aria-hidden": true, children: "▾" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: `siddhi-detail-${entry.id}`,
            className: "content-card__detail",
            hidden: !expanded,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__label", children: "Saadhna — the practice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginBottom: "1rem" }, children: entry.significance }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "meaning-block__label", children: "Guru's caution" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginBottom: 0 }, children: entry.guruDisclaimer })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function DisclaimerBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "disclaimer-banner",
      role: "note",
      "data-ocid": "siddhi.disclaimer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "disclaimer-banner__title", children: "Guru Shishya Parampara" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginBottom: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: GURU_DISCLAIMER_TEXT }),
          " These are subtle sciences of consciousness. Without a living guru's initiation and oversight, attempting them may disturb the mind and body. Approach only through proper parampara."
        ] })
      ]
    }
  );
}
function LoadingState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 gap-5",
      "data-ocid": "siddhi.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading", "aria-label": "Loading Siddhi Saadhna", children: "ॐ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display italic",
            style: {
              fontSize: "1.1rem",
              color: "oklch(var(--muted-foreground))"
            },
            children: "Revealing the divine powers…"
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
      "data-ocid": "siddhi.error_state",
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
            "data-ocid": "siddhi.retry_button",
            children: "Try Again"
          }
        )
      ]
    }
  );
}
function SiddhiPage() {
  const [activeTab, setActiveTab] = reactExports.useState("siddhis");
  const siddhisQuery = useQuery({
    queryKey: ["siddhis"],
    queryFn: async () => {
      const result = await getBackend().listSiddhis();
      return result;
    }
  });
  const nidhisQuery = useQuery({
    queryKey: ["nidhis"],
    queryFn: async () => {
      const result = await getBackend().listNidhis();
      return result;
    }
  });
  const kalasQuery = useQuery({
    queryKey: ["kalas"],
    queryFn: async () => {
      const result = await getBackend().listKalas();
      return result;
    }
  });
  const mahavidyasQuery = useQuery({
    queryKey: ["mahavidyas"],
    queryFn: async () => {
      const result = await getBackend().listMahavidyas();
      return result;
    }
  });
  const isLoading = siddhisQuery.isLoading || nidhisQuery.isLoading || kalasQuery.isLoading || mahavidyasQuery.isLoading;
  const isError = siddhisQuery.isError || nidhisQuery.isError || kalasQuery.isError || mahavidyasQuery.isError;
  const siddhis = siddhisQuery.data ?? [];
  const nidhis = nidhisQuery.data ?? [];
  const kalas = kalasQuery.data ?? [];
  const mahavidyas = mahavidyasQuery.data ?? [];
  const retry = () => {
    siddhisQuery.refetch();
    nidhisQuery.refetch();
    kalasQuery.refetch();
    mahavidyasQuery.refetch();
  };
  const activeTabMeta = TABS.find((t) => t.id === activeTab) ?? TABS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "manuscript-page min-h-screen px-4 py-8 sm:px-6 lg:px-10",
      "data-ocid": "siddhi.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "pathway-hero", "data-ocid": "siddhi.hero", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "pathway-hero__title", children: "Siddhi Saadhna" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__subtitle", children: "सिद्धि साधन" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__description", children: "Divine powers and the practices that awaken them. The eight Siddhis, nine Nidhis, sixteen Kalas of Sri Krishna, and the ten Mahavidyas of the Divine Mother — each a sign of grace, each a responsibility to be carried with humility under a guru's guidance." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "nav",
          {
            className: "mb-8 flex flex-wrap justify-center gap-2",
            "aria-label": "Siddhi Saadhna sections",
            "data-ocid": "siddhi.tabs",
            children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                "data-ocid": `siddhi.tab.${tab.id}`,
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
              activeTab === "siddhis" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "siddhi.section.siddhis", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ अष्टसिद्धि नवनिधि ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mx-auto mb-6 max-w-2xl text-center font-body italic leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: activeTabMeta.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DisclaimerBanner, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display italic font-bold mt-8 mb-4 text-center",
                    style: {
                      fontSize: "var(--fs-heading-md)",
                      color: "oklch(var(--primary))"
                    },
                    children: "The Eight Siddhis"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mx-auto mb-6 max-w-2xl text-center font-body leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "Ashtasiddhi — the eight perfections described in the Patanjala Yoga Sutra and the Bhagavata. Hanuman ji carries them all; the yogi who masters the elements may glimpse each."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "siddhi.list.siddhis", children: [
                  siddhis.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SiddhiCard, { entry, index: i }, entry.id)),
                  siddhis.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "py-12 text-center font-body italic",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: "The Siddhis await revelation."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display italic font-bold mt-10 mb-4 text-center",
                    style: {
                      fontSize: "var(--fs-heading-md)",
                      color: "oklch(var(--primary))"
                    },
                    children: "The Nine Nidhis"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mx-auto mb-6 max-w-2xl text-center font-body leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: "Navanidhi — the nine divine treasures guarded by Kubera, the lord of wealth. Each is a trust granted to the dharmic, never a possession to be hoarded."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "siddhi.list.nidhis", children: [
                  nidhis.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SiddhiCard, { entry, index: i }, entry.id)),
                  nidhis.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "py-12 text-center font-body italic",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: "The Nidhis await revelation."
                    }
                  )
                ] })
              ] }),
              activeTab === "kalas" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "siddhi.section.kalas", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ षोडश कला ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "mx-auto mb-6 max-w-2xl text-center font-body italic leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: [
                      activeTabMeta.description,
                      " Sri Krishna is called",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Kala-vidhamana" }),
                      " — the master of all sixteen arts. From these flow music, dance, wisdom, and the grace that charmed all of Vrindavan."
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DisclaimerBanner, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", "data-ocid": "siddhi.list.kalas", children: [
                  kalas.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SiddhiCard, { entry, index: i }, entry.id)),
                  kalas.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "py-12 text-center font-body italic",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: "The Kalas await revelation."
                    }
                  )
                ] })
              ] }),
              activeTab === "mahavidyas" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "siddhi.section.mahavidyas", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", "aria-hidden": true, children: "✦ दश महाविद्या ✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "mx-auto mb-6 max-w-2xl text-center font-body italic leading-relaxed",
                    style: {
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))"
                    },
                    children: [
                      activeTabMeta.description,
                      " Kali, Tara, Tripura Sundari, Bhuvaneshwari, Bhairavi, Chhinnamasta, Dhumavati, Bagalamukhi, Matangi, and Kamala — the ten faces of the Mother, each a complete path of wisdom."
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DisclaimerBanner, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", "data-ocid": "siddhi.list.mahavidyas", children: [
                  mahavidyas.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SiddhiCard, { entry, index: i }, entry.id)),
                  mahavidyas.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "py-12 text-center font-body italic",
                      style: {
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))"
                      },
                      children: "The Mahavidyas await revelation."
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
            "data-ocid": "siddhi.closing",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic font-bold mb-2",
                  style: {
                    fontSize: "1.3rem",
                    color: "oklch(var(--sacred))"
                  },
                  children: "Siddhis are the shadow, not the sun"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mx-auto max-w-xl font-body leading-relaxed",
                  style: {
                    fontSize: "var(--fs-body)",
                    color: "oklch(var(--muted-foreground))"
                  },
                  children: "Patanjali warns that powers arising in saadhna are obstacles to liberation if grasped. Let them come unbidden; let the heart remain fixed on the Lord alone. The true fruit of saadhna is love, not power."
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
  SiddhiPage
};
