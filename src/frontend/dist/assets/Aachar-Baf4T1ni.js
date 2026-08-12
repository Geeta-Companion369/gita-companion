import { r as reactExports, j as jsxRuntimeExports } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
const SUB_CATEGORIES = [
  {
    id: "daily-conduct",
    label: "Daily Conduct",
    sanskrit: "Nitya Vritti",
    description: "How to wake, bathe, eat, speak, work, and sleep as a Hindu."
  },
  {
    id: "sandhya",
    label: "Sandhya Saadhna",
    sanskrit: "Sandhyopāsana",
    description: "Dawn and dusk prayer — Gayatri japa and offerings to the sun."
  },
  {
    id: "aahaar",
    label: "Aahaar Saadhna",
    sanskrit: "Āhāra Yoga",
    description: "Sacred eating — Satvik, Rajasic, Tamasic; fasting foods and prasad rules."
  }
];
function useDailyDuties() {
  return useQuery({
    queryKey: ["dailyDuties"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.listDailyDuties();
      return result;
    }
  });
}
function useDailyDuty(id) {
  return useQuery({
    queryKey: ["dailyDuty", id],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getDailyDuty(id);
      return result;
    },
    enabled: !!id
  });
}
function useRitualExplanations() {
  return useQuery({
    queryKey: ["ritualExplanations"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.listRitualExplanations();
      return result;
    }
  });
}
function useRitualExplanation(id) {
  return useQuery({
    queryKey: ["ritualExplanation", id],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getRitualExplanation(id);
      return result;
    },
    enabled: !!id
  });
}
function categoryToSub(cat) {
  const c = cat.toLowerCase();
  if (c.includes("sandhya")) return "sandhya";
  if (c.includes("aahaar") || c.includes("ahar") || c.includes("eating") || c.includes("food"))
    return "aahaar";
  return "daily-conduct";
}
function Aachar() {
  var _a;
  const [activeSub, setActiveSub] = reactExports.useState("daily-conduct");
  const [expandedDutyId, setExpandedDutyId] = reactExports.useState(null);
  const [expandedRitualId, setExpandedRitualId] = reactExports.useState(null);
  const dutiesQuery = useDailyDuties();
  const ritualsQuery = useRitualExplanations();
  const expandedDuty = useDailyDuty(expandedDutyId);
  const expandedRitual = useRitualExplanation(expandedRitualId);
  const allDuties = dutiesQuery.data ?? [];
  const allRituals = ritualsQuery.data ?? [];
  const visibleDuties = allDuties.filter(
    (d) => categoryToSub(d.category) === activeSub
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pathway-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "pathway-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__eyebrow", children: "Sacred Pathway" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "pathway-hero__title", children: "Aachar Saadhna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__sanskrit", children: "आचार साधन" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__subtitle", children: "Daily sacred duties — the disciplined rhythm of a dharmic life. Nitya Karma performed with devotion purifies the mind, refines the body, and aligns the soul with cosmic order (Rta)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "pathway-subnav", "aria-label": "Aachar sub-categories", children: SUB_CATEGORIES.map((sub) => {
      const isActive = activeSub === sub.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setActiveSub(sub.id);
            setExpandedDutyId(null);
          },
          className: `pathway-subnav__tab${isActive ? " pathway-subnav__tab--active" : ""}`,
          "aria-pressed": isActive,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pathway-subnav__label", children: sub.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pathway-subnav__sanskrit", children: sub.sanskrit })
          ]
        },
        sub.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pathway-intro", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-intro__text", children: (_a = SUB_CATEGORIES.find((s) => s.id === activeSub)) == null ? void 0 : _a.description }) }),
    dutiesQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("output", { className: "pathway-loading", children: "Loading daily duties…" }),
    dutiesQuery.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-error", role: "alert", children: "Unable to load daily duties. Please try again." }),
    visibleDuties.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pathway-section", "aria-labelledby": "duties-heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "duties-heading", className: "pathway-section__title", children: [
        activeSub === "daily-conduct" && "Daily Duties (Nitya Karma)",
        activeSub === "sandhya" && "Sandhya Duties (Dawn & Dusk)",
        activeSub === "aahaar" && "Sacred Eating Duties (Āhāra Niyama)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-section__hint", children: "Select a duty to reveal its procedure, mantra, and scriptural basis." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "duty-list", children: visibleDuties.map((duty) => {
        const isOpen = expandedDutyId === duty.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "content-card--item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "content-card--item__header",
              "aria-expanded": isOpen,
              "aria-controls": `duty-detail-${duty.id}`,
              onClick: () => setExpandedDutyId(isOpen ? null : duty.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__title", children: duty.name }),
                duty.sanskritName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__sanskrit", children: duty.sanskritName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__meta", children: duty.timing }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "content-card--item__chevron",
                    "aria-hidden": "true",
                    children: isOpen ? "▾" : "▸"
                  }
                )
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: `duty-detail-${duty.id}`,
              className: "content-card--item__body",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__description", children: duty.description }),
                expandedDuty.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("output", { className: "pathway-loading", children: "Loading details…" }),
                expandedDuty.data && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  expandedDuty.data.practice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "meaning-block__title", children: "Procedure (Vidhi)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__text", children: expandedDuty.data.practice })
                  ] }),
                  expandedDuty.data.timing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "meaning-block__title", children: "Time of Day (Kāla)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__text", children: expandedDuty.data.timing })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "scripture-citation__label", children: "Scriptural Basis" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "scripture-citation__source", children: [
                      expandedDuty.data.sourceGranth,
                      expandedDuty.data.sourceChapter && ` — ${expandedDuty.data.sourceChapter}`,
                      expandedDuty.data.sourceVerse && `, ${expandedDuty.data.sourceVerse}`
                    ] })
                  ] }),
                  expandedDuty.data.linkedExplanationId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "pathway-link-button",
                      onClick: () => {
                        var _a2;
                        setExpandedRitualId(
                          expandedDuty.data.linkedExplanationId
                        );
                        (_a2 = document.getElementById("ritual-explanations")) == null ? void 0 : _a2.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      },
                      children: "View related ritual explanation →"
                    }
                  )
                ] })
              ]
            }
          )
        ] }, duty.id);
      }) })
    ] }),
    visibleDuties.length === 0 && !dutiesQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-empty", children: "No duties recorded for this sub-category yet." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "pathway-section",
        "aria-labelledby": "rituals-heading",
        id: "ritual-explanations",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "rituals-heading", className: "pathway-section__title", children: "Ritual Explanations (Kriyā Vimarsa)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-section__hint", children: "Six foundational rituals of the dharmic day — each with steps, meaning, and the Shastra in which it is written." }),
          ritualsQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("output", { className: "pathway-loading", children: "Loading ritual explanations…" }),
          ritualsQuery.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-error", role: "alert", children: "Unable to load ritual explanations." }),
          allRituals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "ritual-list", children: allRituals.map((ritual) => {
            const isOpen = expandedRitualId === ritual.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "content-card--item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "content-card--item__header",
                  "aria-expanded": isOpen,
                  "aria-controls": `ritual-detail-${ritual.id}`,
                  onClick: () => setExpandedRitualId(isOpen ? null : ritual.id),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__title", children: ritual.title }),
                    ritual.ritualName && ritual.ritualName !== ritual.title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__sanskrit", children: ritual.ritualName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "content-card--item__chevron",
                        "aria-hidden": "true",
                        children: isOpen ? "▾" : "▸"
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  id: `ritual-detail-${ritual.id}`,
                  className: "content-card--item__body",
                  children: [
                    expandedRitual.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("output", { className: "pathway-loading", children: "Loading ritual details…" }),
                    expandedRitual.data && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__description", children: expandedRitual.data.explanation }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "meaning-block__title", children: "Steps & Meaning (Paddhati)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "step-list", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "step-list__item", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__num", children: "1" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: "Prepare the space and materials with a clean body and calm mind." })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "step-list__item", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__num", children: "2" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: "Invoke the deity through mantra and intention (Sankalpa)." })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "step-list__item", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__num", children: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: "Perform the central offering or recitation as prescribed." })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "step-list__item", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__num", children: "4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: "Conclude with gratitude, pranam, and distribution of prasad." })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "scripture-citation__label", children: "Source Granth" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "scripture-citation__source", children: [
                          expandedRitual.data.sourceGranth,
                          expandedRitual.data.sourceChapter && ` — ${expandedRitual.data.sourceChapter}`,
                          expandedRitual.data.sourceVerse && `, ${expandedRitual.data.sourceVerse}`
                        ] })
                      ] }),
                      expandedRitual.data.relatedDutyIds && expandedRitual.data.relatedDutyIds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "meaning-block__title", children: "Related Duties" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "related-duties", children: expandedRitual.data.relatedDutyIds.map(
                          (rid) => {
                            const related = allDuties.find(
                              (d) => d.id === rid
                            );
                            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "pathway-link-button",
                                onClick: () => {
                                  var _a2;
                                  const sub = related ? categoryToSub(
                                    related.category
                                  ) : "daily-conduct";
                                  setActiveSub(sub);
                                  setExpandedDutyId(rid);
                                  (_a2 = document.getElementById(
                                    "duties-heading"
                                  )) == null ? void 0 : _a2.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  });
                                },
                                children: [
                                  related ? related.name : "View related duty",
                                  " ",
                                  "→"
                                ]
                              }
                            ) }, rid);
                          }
                        ) })
                      ] })
                    ] })
                  ]
                }
              )
            ] }, ritual.id);
          }) }),
          allRituals.length === 0 && !ritualsQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-empty", children: "No ritual explanations recorded yet." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "disclaimer-banner", role: "note", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "disclaimer-banner__text", children: "Aachar Saadhna is a path of devotion and discipline. Practices vary across sampradayas (traditions), families, and regions. Follow the guidance of your Guru and family tradition for specific mantras, timings, and observances." }) })
  ] });
}
export {
  Aachar as AacharPage,
  Aachar as default
};
