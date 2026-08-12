import { r as reactExports, j as jsxRuntimeExports } from "./index-DqMoqjqS.js";
import { K as KARMA_TYPES } from "./karma-data-DOpaGxsU.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
const FRONTEND_SUPPLEMENT = [
  {
    id: "nishkama",
    sanskritName: "निष्काम कर्म",
    name: "Nishkama Karma",
    description: "Action performed without attachment to its fruits. You offer the result to the Divine and act solely because the action itself is your dharma. This is the highest teaching of Karma Yoga — work as worship, where the doer dissolves and only the offering remains.",
    gitaRef: "Bhagavad Gita 3.19",
    gitaVerse: "तस्मादसक्तः सततं कार्यं कर्म समाचर ।\nअसक्तश्चाचरन्कर्म परमाप्नोति पूरुषः ॥",
    examples: [
      "A doctor treats every patient with the same care, whether rich or poor, without counting fees.",
      "A teacher prepares each lesson thoroughly, unconcerned whether students praise or criticize.",
      "A parent raises a child with love, not expecting the child to repay them in old age."
    ],
    fruits: [
      "Inner freedom from anxiety about outcomes.",
      "The mind becomes steady and equanimous (sthitaprajna).",
      "Action itself becomes a meditation on the Divine."
    ],
    howToTransform: "Before beginning any work, silently offer the result to Krishna: 'I am the instrument; the result is Yours.' Perform the action with full skill and zero claim on the fruit. When the work ends, release the outcome completely — success and failure are both prasadam."
  },
  {
    id: "sakama",
    sanskritName: "सकाम कर्म",
    name: "Sakama Karma",
    description: "Action performed with desire for a specific result. Most worldly action is sakama — we work for salary, study for grades, pray for boons. Sakama karma binds the doer to the cycle of cause and effect, because attachment to the fruit creates new vasanas (impressions).",
    gitaRef: "Bhagavad Gita 2.47",
    gitaVerse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    examples: [
      "Working only for promotion, neglecting the quality of the work itself.",
      "Studying only to pass an exam, forgetting the knowledge.",
      "Donating to charity expecting public recognition in return."
    ],
    fruits: [
      "Temporary pleasure when the desired result comes.",
      "Bondage to the fruit — sorrow when results disappoint.",
      "Accumulation of vasanas that drive further desire-bound action."
    ],
    howToTransform: "Do not suppress desire — that is itself attachment. Instead, lift the same action toward nishkama by dedicating its fruit to the Divine. Keep working with full effort; only surrender the claim on the result. Sakama karma, offered to God, becomes the first step of karma yoga."
  },
  {
    id: "akarma",
    sanskritName: "अकर्म",
    name: "Akarma",
    description: "Inaction — the refusal or avoidance of action that is one's dharma to perform. Krishna warns against akarma: one cannot escape the consequences of duty by sitting still. True inaction in the Gita is not laziness but the inner stillness of a sage who acts without acting — outwardly engaged, inwardly unattached.",
    gitaRef: "Bhagavad Gita 4.18",
    gitaVerse: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ॥",
    examples: [
      "Avoiding a difficult conversation that is your responsibility to have.",
      "Refusing to earn a livelihood, calling it 'spiritual renunciation' while depending on others.",
      "Postponing a duty indefinitely, hoping it disappears."
    ],
    fruits: [
      "Unfinished duties accumulate as prarabdha in future lives.",
      "The mind becomes dull and tamasic through inertia.",
      "Others suffer the consequences of your unperformed dharma."
    ],
    howToTransform: "Distinguish akarma (avoidance) from the akarma of the sage (actionless action). Perform every duty that falls to you, but let the inner doer remain silent. The goal is not to stop acting but to act so transparently that no new bondage is created — this is the akarma Krishna praises."
  }
];
const MODERN_TEACHINGS = [
  {
    ref: "Bhagavad Gita 2.47",
    verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo'stv akarmaṇi ||",
    meaning: "You have a right to action alone, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.",
    application: "At your desk each morning, set the intention: 'I will do this work as an offering.' When the appraisal, the bonus, or the recognition arrives — or does not — your peace does not depend on it. The work itself is your worship."
  },
  {
    ref: "Bhagavad Gita 3.19",
    verse: "तस्मादसक्तः सततं कार्यं कर्म समाचर ।\nअसक्तश्चाचरन्कर्म परमाप्नोति पूरुषः ॥",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara |\nasaktaś cācaran karma param āpnoti pūruṣaḥ ||",
    meaning: "Therefore, without attachment, always perform the work that must be done. By performing action without attachment, one attains the Supreme.",
    application: "Treat every routine task — emails, meetings, reports, code reviews — as sacred duty. Do each with full attention and zero attachment. The same task done with attachment binds; done as offering, liberates."
  },
  {
    ref: "Bhagavad Gita 4.20",
    verse: "त्यक्त्वा कर्मफलासङ्गं निःस्पृहः निर्ममो भव ।\nयुद्ध्य स्व विगतज्वरः तदा त्वमात्मानमेव आप्स्यसि ॥",
    transliteration: "tyaktvā karma-phalāsaṅgaṁ niḥspṛhaḥ nirmamo bhava |\nyuddhya svā vigata-jvaraḥ tadā tvam ātmānam eva āpsyasi ||",
    meaning: "Having abandoned attachment to the fruits of action, become free from longing and the sense of 'mine.' Fight on, free from fever of the mind — then you shall attain the Self.",
    application: "When a project succeeds, do not say 'I did it.' When it fails, do not say 'I am ruined.' Both belong to the Divine. Work with full skill, free from the fever of ownership — this is the karma yogi at the office."
  }
];
const DAILY_PRACTICE_STEPS = [
  {
    step: "Dedicate the day",
    detail: "Before opening your laptop, place both palms on your desk and silently say: 'Whatever I do today, I offer to Krishna. I am the instrument; the result is Yours.' This single sentence transforms the entire day into sadhana."
  },
  {
    step: "Do your dharma fully",
    detail: "Identify your svadharma — the duty natural to your role and stage of life. Perform it with excellence, not half-heartedly. Krishna condemns neither work nor the worker, only the attachment to its fruit."
  },
  {
    step: "Release each result",
    detail: "After every task — a sent email, a closed ticket, a delivered feature — mentally hand the outcome back to the Divine. Do not carry it home. The karma yogi travels light."
  },
  {
    step: "Treat obstacles as prasadam",
    detail: "When a meeting runs long, a deployment fails, or a colleague is harsh, receive it as prasadam. Equanimity in success and failure is the mark of sthitaprajna — the sage of steady wisdom (Gita 2.48)."
  },
  {
    step: "Offer the day at night",
    detail: "Before sleep, review the day without judgment. Whatever was done well, offer it. Whatever was imperfect, offer it. Whatever was left undone, surrender it. Sleep as the unattached witness."
  }
];
function unifyBackend(backend, data) {
  return {
    id: backend.id,
    sanskritName: backend.sanskritName,
    name: backend.name,
    description: backend.description,
    gitaRef: (data == null ? void 0 : data.gitaRef) ?? `${backend.sourceGranth} ${backend.sourceChapter}.${backend.sourceVerse}`,
    gitaVerse: (data == null ? void 0 : data.gitaVerse) ?? "",
    examples: (data == null ? void 0 : data.whatToDo) ? [data.whatToDo] : [],
    fruits: [],
    howToTransform: (data == null ? void 0 : data.metaphor) ? `Metaphor: ${data.metaphor}. ${(data == null ? void 0 : data.story) ?? ""}`.trim() : backend.practice,
    source: "backend"
  };
}
function unifyFrontend(entry) {
  return { ...entry, source: "frontend" };
}
function KarmaYoga() {
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const listQuery = useQuery({
    queryKey: ["karma-types"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.listKarmaTypes();
      return result;
    },
    staleTime: 5 * 60 * 1e3
  });
  const detailQuery = useQuery({
    queryKey: ["karma-type", expandedId],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getKarmaType(expandedId);
      return result;
    },
    enabled: !!expandedId,
    staleTime: 5 * 60 * 1e3
  });
  const backendTypes = (listQuery.data ?? []).map((b) => {
    const dataMatch = KARMA_TYPES.find((k) => k.id === b.id);
    return unifyBackend(b, dataMatch);
  });
  const frontendTypes = FRONTEND_SUPPLEMENT.map(unifyFrontend);
  const allTypes = [...backendTypes, ...frontendTypes];
  const expandedDetail = expandedId && detailQuery.data && detailQuery.data.id === expandedId ? detailQuery.data : void 0;
  const toggle = (id) => {
    setExpandedId((current) => current === id ? null : id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pathway-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__eyebrow", children: "Saadhna Pathway · 01" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "pathway-hero__title", children: "Karma Yoga Saadhna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__sanskrit", children: "कर्म एव अधिकारस्ते" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pathway-hero__subtitle", children: "Work as Worship — the path of selfless action taught by Lord Krishna to Arjuna on the battlefield of Kurukshetra." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground mb-6", children: "What is Karma Yoga?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/80 mb-4", children: [
        "Karma Yoga is the yoga of action — the discipline of performing one's duty (",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "svadharma" }),
        ") without attachment to its results. Krishna reveals this teaching to Arjuna in the Bhagavad Gita, when Arjuna collapses in despair at the thought of fighting his own kinsmen."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/80 mb-4", children: [
        "The central insight: you cannot avoid action, and you cannot control its fruits. What you can control is the spirit in which you act. When every action is offered to the Divine as worship, the same work that once bound you now liberates you. This is the secret of",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "karma turned into yoga" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__ref", children: "Bhagavad Gita 2.47" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "scripture-citation__verse", children: [
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__meaning", children: '"You have a right to action alone, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction."' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground mb-2", children: "The Six Types of Karma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/70 mb-8", children: "Krishna distinguishes several modes of action. Tap each card to unfold its meaning, examples, fruits, and the way to transform it into yoga." }),
      listQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/60 italic", children: "Loading karma teachings from the backend…" }),
      listQuery.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/60 italic", children: "(Backend unavailable — showing frontend-supplemented teachings below.)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: allTypes.map((karma) => {
        const isOpen = expandedId === karma.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: `content-card--item ${isOpen ? "content-card--item--open" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => toggle(karma.id),
                  "aria-expanded": isOpen,
                  "aria-controls": `karma-detail-${karma.id}`,
                  className: "content-card--item__header w-full text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item__heading", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__sanskrit", children: karma.sanskritName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "content-card--item__name", children: karma.name })
                    ] }),
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
                  id: `karma-detail-${karma.id}`,
                  className: "content-card--item__body",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "content-card--item__description", children: karma.description }),
                    karma.gitaVerse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation mt-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__ref", children: karma.gitaRef }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__verse sanskrit-verse", children: karma.gitaVerse })
                    ] }),
                    karma.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-3", children: "Examples" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "step-list", children: karma.examples.map((ex, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "step-list__item",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__marker", children: i + 1 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: ex })
                          ]
                        },
                        `example-${ex}`
                      )) })
                    ] }),
                    karma.fruits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-3", children: "Fruits of this Karma" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "step-list", children: karma.fruits.map((fruit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "step-list__item",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__marker", children: "•" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__text", children: fruit })
                          ]
                        },
                        `fruit-${fruit}`
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-3", children: "How to Transform this Karma into Yoga" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/80", children: karma.howToTransform })
                    ] }),
                    (expandedDetail == null ? void 0 : expandedDetail.practice) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-lg border border-border bg-card/50 p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground/60 mb-1", children: "Practice from the Granth" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/80", children: expandedDetail.practice })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-foreground/50 italic", children: [
                      "Source:",
                      " ",
                      karma.source === "backend" ? "Backend API (listKarmaTypes / getKarmaType)" : "Frontend supplement (KarmaYoga.tsx)"
                    ] })
                  ]
                }
              )
            ]
          },
          karma.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground mb-2", children: "Krishna's Teachings for the Modern Worker" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/70 mb-8", children: "How to do your job as dharma — three foundational verses applied to the workplace of today." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: MODERN_TEACHINGS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "scripture-citation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__ref", children: t.ref }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "scripture-citation__verse sanskrit-verse", children: t.verse }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "transliteration-line", children: t.transliteration }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__label", children: "Meaning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__text", children: t.meaning })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meaning-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__label", children: "Application at Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "meaning-block__text", children: t.application })
        ] })
      ] }, t.ref)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold text-foreground mb-2", children: "A Daily Practice for the Karma Yogi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/70 mb-8", children: "Five steps to turn an ordinary workday into a saadhna of selfless action." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "step-list", children: DAILY_PRACTICE_STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "step-list__item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "step-list__marker", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step-list__text", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: s.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/80", children: s.detail })
        ] })
      ] }, `practice-step-${s.step}`)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-6 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "disclaimer-banner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "disclaimer-banner__title", children: "Saadhna Guidance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "disclaimer-banner__text", children: "This pathway presents the philosophical foundation of Karma Yoga as taught in the Bhagavad Gita. It is offered for reflection and spiritual practice, not as professional, legal, or career advice. For personal guidance on applying these teachings to your specific circumstances, consult a qualified spiritual teacher (guru) or acharya of your tradition." })
    ] }) })
  ] });
}
export {
  KarmaYoga as KarmaYogaPage,
  KarmaYoga as default
};
