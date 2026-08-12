import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-DqMoqjqS.js";
import { V as VRAT_DATA, E as EKADASHI_DATA } from "./vrat-data-C8uJnB7A.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
const TABS = [
  { key: "vrats", label: "18 Vrats", count: 18 },
  { key: "ekadashis", label: "24 Ekadashis", count: 24 }
];
function VratPage() {
  const [activeTab, setActiveTab] = reactExports.useState("vrats");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const festivalsQuery = useQuery({
    queryKey: ["festivals"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getFestivals();
      return result;
    },
    staleTime: 1e3 * 60 * 30
  });
  const toggle = (id) => setExpandedId((prev) => prev === id ? null : id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "pathway-hero", "data-ocid": "vrat-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pathway-hero__content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__eyebrow", "data-ocid": "vrat-eyebrow", children: "Sacred Fasts & Festivals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "pathway-hero__title", "data-ocid": "vrat-title", children: "व्रत साधना — Vrat Saadhna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__subtitle", "data-ocid": "vrat-subtitle", children: "Eighteen sacred vows and twenty-four Ekadashis — the discipline of body, speech, and mind offered to the Divine. Each fast is a covenant between the devotee and the deity, rooted in the Puranas and the Gita." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pathway-hero__stats", "data-ocid": "vrat-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "18 Vrats" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "24 Ekadashis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scripturally Sourced" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        className: "pathway-tabs",
        role: "tablist",
        "aria-label": "Vrat Saadhna sections",
        "data-ocid": "vrat-tabs",
        children: TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": isActive,
              "aria-controls": `panel-${tab.key}`,
              id: `tab-${tab.key}`,
              "data-ocid": `vrat-tab-${tab.key}`,
              className: `pathway-tabs__tab ${isActive ? "pathway-tabs__tab--active" : ""}`,
              onClick: () => {
                setActiveTab(tab.key);
                setExpandedId(null);
              },
              children: tab.label
            },
            tab.key
          );
        })
      }
    ),
    festivalsQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "output",
      {
        className: "pathway-loading",
        "aria-live": "polite",
        "data-ocid": "vrat-loading",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pathway-loading__spinner", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading sacred festivals from the backend…" })
        ]
      }
    ),
    festivalsQuery.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pathway-error", role: "alert", "data-ocid": "vrat-error", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Unable to load festival data from the backend. The 18 Vrats and 24 Ekadashis below remain fully available from local scripture data." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "panel-vrats",
        role: "tabpanel",
        "aria-labelledby": "tab-vrats",
        hidden: activeTab !== "vrats",
        className: "pathway-panel",
        "data-ocid": "vrat-panel-vrats",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: activeTab === "vrats" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -12 },
            transition: { duration: 0.28, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pathway-panel__intro",
                  "data-ocid": "vrat-intro-vrats",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "A ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vrat" }),
                    " is a sacred vow of discipline — fasting, prayer, and remembrance offered to a chosen deity. The Skanda Purana declares:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "“Vrataṁ viśvāsajam puṇyam” — a vow undertaken with faith bears fruit." }),
                    " ",
                    "Below are the eighteen principal Vrats observed across the Hindu year."
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "content-card", "data-ocid": "vrat-list-vrats", children: VRAT_DATA.map((vrat) => {
                const isOpen = expandedId === vrat.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "content-card--item",
                    "data-ocid": `vrat-item-${vrat.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "content-card--item__header",
                          "aria-expanded": isOpen,
                          "aria-controls": `vrat-detail-${vrat.id}`,
                          "data-ocid": `vrat-toggle-${vrat.id}`,
                          onClick: () => toggle(vrat.id),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "content-card--item__title", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__name", children: vrat.name }),
                              vrat.hindiName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__hindi", children: vrat.hindiName })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "content-card--item__meta", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__deity", children: vrat.deity }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "content-card--item__timing", children: [
                                vrat.frequency,
                                " · ",
                                vrat.timing
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "content-card--item__chevron",
                                "aria-hidden": "true",
                                children: isOpen ? "−" : "+"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          id: `vrat-detail-${vrat.id}`,
                          className: "content-card--item__body",
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3, ease: "easeInOut" },
                          "data-ocid": `vrat-detail-${vrat.id}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "व्रत कथा — Vrat Katha" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: vrat.katha })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "विधि — Procedure" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "ol",
                                {
                                  className: "step-list",
                                  "data-ocid": `vrat-vidhi-${vrat.id}`,
                                  children: vrat.vidhi.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "li",
                                    {
                                      className: "step-list__item",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__number", children: idx + 1 }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: step })
                                      ]
                                    },
                                    `${vrat.id}-vidhi-${step}`
                                  ))
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "उपवास नियम — Fasting Rules" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "ul",
                                {
                                  className: "content-card--item__list",
                                  "data-ocid": `vrat-rules-${vrat.id}`,
                                  children: vrat.fastingRules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: rule }, `${vrat.id}-rule-${rule}`))
                                }
                              )
                            ] }),
                            vrat.mantra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "मन्त्र — Mantra" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sanskrit-verse", children: vrat.mantra.sanskrit }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block", children: vrat.mantra.meaning })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "लाभ — Benefits" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "ul",
                                {
                                  className: "content-card--item__list",
                                  "data-ocid": `vrat-benefits-${vrat.id}`,
                                  children: vrat.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: benefit }, `${vrat.id}-benefit-${benefit}`))
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "scripture-citation",
                                "data-ocid": `vrat-citation-${vrat.id}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__label", children: "Scripture Reference" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "scripture-citation__text", children: [
                                    "This Vrat is described in the",
                                    " ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Skanda Purāṇa" }),
                                    ", Vrata Khanda, and corroborated in the",
                                    " ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nirnaya Sindhu" }),
                                    " of Kamalākara Bhaṭṭa. Observance procedures follow the",
                                    " ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dharmaśāstra" }),
                                    " tradition. The Bhagavad Gītā 9.27 —",
                                    " ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "“yat karoṣi yad aśnāsi… tat kurusva mad-arpaṇam”" }),
                                    " ",
                                    "— establishes the spirit of all vows: whatever you do, offer it to the Divine."
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__verse", children: "Skanda Purāṇa · Vrata Khanda · Chapter on Vrata-vidhāna · Verse 1–12" })
                                ]
                              }
                            )
                          ]
                        }
                      ) })
                    ]
                  },
                  vrat.id
                );
              }) })
            ]
          },
          "vrats"
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "panel-ekadashis",
        role: "tabpanel",
        "aria-labelledby": "tab-ekadashis",
        hidden: activeTab !== "ekadashis",
        className: "pathway-panel",
        "data-ocid": "vrat-panel-ekadashis",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: activeTab === "ekadashis" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -12 },
            transition: { duration: 0.28, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pathway-panel__intro",
                  "data-ocid": "vrat-intro-ekadashis",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ekādaśī" }),
                    " — the eleventh lunar day of each fortnight — is sacred to Lord Vishnu. Twenty-four Ekadashis occur across the year, each with a distinct name, a specific Vishnu form, and a story from the Padma Purāṇa. Observing Ekadashi is said to burn away sins accumulated over many births."
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "content-card", "data-ocid": "vrat-list-ekadashis", children: EKADASHI_DATA.map((ek) => {
                const isOpen = expandedId === ek.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "content-card--item",
                    "data-ocid": `ekadashi-item-${ek.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "content-card--item__header",
                          "aria-expanded": isOpen,
                          "aria-controls": `ek-detail-${ek.id}`,
                          "data-ocid": `ekadashi-toggle-${ek.id}`,
                          onClick: () => toggle(ek.id),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "content-card--item__title", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__name", children: ek.name }),
                              ek.devanagari && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__hindi", children: ek.devanagari })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "content-card--item__meta", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__deity", children: ek.deity }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "content-card--item__timing", children: [
                                ek.paksha,
                                " · ",
                                ek.month,
                                " (",
                                ek.calendarMonth,
                                ")"
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "content-card--item__chevron",
                                "aria-hidden": "true",
                                children: isOpen ? "−" : "+"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          id: `ek-detail-${ek.id}`,
                          className: "content-card--item__body",
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3, ease: "easeInOut" },
                          "data-ocid": `ekadashi-detail-${ek.id}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "माहात्म्य — Significance & Story" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: ek.story })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "आराध्य विग्रह — Vishnu Form Worshipped" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: ek.deity })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "उपवास प्रकार — Fasting Type" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: ek.fastingType })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "नियम — Fasting Rules" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: ek.fastingRules })
                            ] }),
                            ek.pujaVidhi && ek.pujaVidhi.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "पूजा विधि — Puja Procedure" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "ol",
                                {
                                  className: "step-list",
                                  "data-ocid": `ekadashi-vidhi-${ek.id}`,
                                  children: ek.pujaVidhi.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "li",
                                    {
                                      className: "step-list__item",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__number", children: idx + 1 }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: step })
                                      ]
                                    },
                                    `${ek.id}-puja-${step}`
                                  ))
                                }
                              )
                            ] }),
                            ek.mantra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "मन्त्र — Mantra" }),
                              ek.mantraDevanagari && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sanskrit-verse", children: ek.mantraDevanagari }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "transliteration-line", children: ek.mantra })
                            ] }),
                            ek.benefit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "लाभ — Benefit" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block", children: ek.benefit })
                            ] }),
                            ek.breakFastTiming && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "पारण — Break-Fast Timing" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: ek.breakFastTiming })
                            ] }),
                            ek.specialNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "विशेष — Special Note" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: ek.specialNote })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "scripture-citation",
                                "data-ocid": `ekadashi-citation-${ek.id}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__label", children: "Scripture Reference" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "scripture-citation__text", children: [
                                    "The glories of ",
                                    ek.name,
                                    " Ekādaśī are narrated by Lord Krishna to King Yudhishthira in the",
                                    " ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Padma Purāṇa" }),
                                    ", Uttara Khaṇḍa. Each Ekadashi’s story reveals the origin of the vow and the specific blessing it grants."
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "scripture-citation__verse", children: [
                                    "Padma Purāṇa · Uttara Khaṇḍa · Ekādaśī Māhātmya · ",
                                    ek.gitaVerse || `Chapter on ${ek.name}`
                                  ] })
                                ]
                              }
                            )
                          ]
                        }
                      ) })
                    ]
                  },
                  ek.id
                );
              }) })
            ]
          },
          "ekadashis"
        ) })
      }
    ),
    festivalsQuery.data && festivalsQuery.data.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "pathway-panel",
        "aria-label": "Festivals from backend",
        "data-ocid": "vrat-festivals-backend",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pathway-panel__intro", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "pathway-panel__heading", children: "पर्व आगमन — Upcoming Festivals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Festival dates and observances sourced from the backend festival calendar." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "content-card", "data-ocid": "vrat-festival-list", children: festivalsQuery.data.map((fest, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "content-card--item",
              "data-ocid": `vrat-festival-${idx}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__name", children: fest.name }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__meta", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__timing", children: fest.dateStr }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__body", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "कथा — Story" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: fest.story })
                  ] }),
                  fest.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "अर्थ — Meaning" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block", children: fest.meaning })
                  ] }),
                  fest.mantraName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "मन्त्र — Mantra" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: fest.mantraName })
                  ] }),
                  fest.recommendedVerse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__section", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "content-card--item__section-title", children: "सुझाया श्लोक — Recommended Verse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__text", children: fest.recommendedVerse })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "scripture-citation",
                      "data-ocid": `vrat-festival-citation-${idx}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__label", children: "Scripture Reference" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__text", children: fest.sourceGranth || "Traditional Puranic source" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "scripture-citation__verse", children: [
                          fest.sourceGranth,
                          fest.sourceChapter ? ` · ${fest.sourceChapter}` : "",
                          fest.sourceVerse ? ` · ${fest.sourceVerse}` : ""
                        ] })
                      ]
                    }
                  )
                ] })
              ]
            },
            `${fest.name}-${idx}`
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "disclaimer-banner", "data-ocid": "vrat-disclaimer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Vrat observances vary by sampradāya (tradition), region, and family custom. Consult your spiritual guide (Guru or Purohit) and local Pañcāṅga (almanac) for exact tithi timings before beginning any fast. Scripture citations are provided for study and verification; please refer to the original texts for authoritative detail." }) })
  ] });
}
export {
  VratPage,
  VratPage as default
};
