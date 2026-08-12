import { r as reactExports, j as jsxRuntimeExports } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
import { u as useQuery } from "./useQuery-DTb8J6Ym.js";
async function fetchPitruRites() {
  const backend = await getBackend();
  const result = await backend.listPitruRites();
  return result;
}
async function fetchPitruRite(id) {
  const backend = await getBackend();
  const result = await backend.getPitruRite(id);
  return result;
}
function Pitru() {
  const [openId, setOpenId] = reactExports.useState(null);
  const listQuery = useQuery({
    queryKey: ["pitru-rites"],
    queryFn: fetchPitruRites
  });
  const detailQuery = useQuery({
    queryKey: ["pitru-rite", openId],
    queryFn: () => fetchPitruRite(openId),
    enabled: !!openId
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "pathway-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-primary/80 mb-4", children: "पितृ साधना" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold text-foreground mb-6", children: "Pitru Saadhna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "Honoring the ancestors — the sacred duty of remembrance, gratitude, and liberation of the departed souls." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation mt-8 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: '"The debt to the ancestors is paid through remembrance, offering, and righteous living."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 not-italic", children: "— Manusmriti 6.2" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-5xl mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display font-semibold text-foreground mb-4", children: "The Sacred Duty to the Pitrus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 mb-4", children: "In the Vedic tradition, three primary debts (रण) rest upon every human birth: to the gods through sacrifice, to the sages through study, and to the ancestors through progeny and ritual. Pitru Saadhna is the conscious practice of discharging the third debt — honoring those whose lives made ours possible." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90", children: "These rites are not mere ceremony; they are a bridge between the living and the departed, ensuring the soul's peaceful transition and the family's continued spiritual welfare." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-6 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center", children: "The Four Pitru Rites" }),
      listQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Loading the sacred rites..." }) }),
      listQuery.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "content-card--item p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-destructive", children: "Unable to load the rites at this time. Please try again." }) }),
      listQuery.data && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: listQuery.data.map((rite) => {
        const isOpen = openId === rite.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "content-card--item overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenId(isOpen ? null : rite.id),
                  className: "w-full text-left p-6 md:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg",
                  "aria-expanded": isOpen,
                  "aria-controls": `rite-detail-${rite.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-2", children: rite.sourceGranth }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-display font-semibold text-foreground mb-1", children: rite.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground font-display", children: rite.sanskritName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-foreground/80 mt-3 leading-relaxed", children: rite.description })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-2xl text-primary shrink-0 mt-1",
                        "aria-hidden": "true",
                        children: isOpen ? "−" : "+"
                      }
                    )
                  ] })
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  id: `rite-detail-${rite.id}`,
                  className: "px-6 md:px-8 pb-8 pt-2 border-t border-border/60",
                  children: [
                    detailQuery.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground py-6", children: "Loading details..." }),
                    detailQuery.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-destructive py-6", children: "Could not load the full procedure." }),
                    detailQuery.data && /* @__PURE__ */ jsxRuntimeExports.jsx(RiteDetail, { rite: detailQuery.data })
                  ]
                }
              )
            ]
          },
          rite.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-5xl mx-auto px-6 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display font-semibold text-foreground mb-6", children: "Performing Pitru Rites Alone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 mb-6", children: "Many today live far from family, in cities or countries where the traditional priest and gathered kin are not available. The scriptures are clear: the sincerity of the heart matters more than the perfection of the ritual. You may perform these rites alone, with whatever means you have." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mb-4 mt-8", children: "How to Begin Alone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "step-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Set a clear intention (Sankalpa)." }),
          " Sit quietly and speak aloud the name of the ancestor you wish to honor. State your relationship and your purpose. This binds the ritual to its recipient."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prepare a simple offering." }),
          " A small bowl of water with sesame seeds (til), a few grains of cooked rice, and a flower is sufficient. The Garuda Purana states that even water offered with devotion reaches the Pitrus."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Face south." }),
          " The direction of Yama, lord of the departed. If you cannot determine direction, intend it — the mind completes what the body cannot."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Offer with the right hand." }),
          ` Pour the water slowly while reciting the ancestor's name and the words "tarpayami" (I offer). Repeat three times.`
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Place the food offering." }),
          " Set the rice and flower on a clean leaf or plate. Do not taste it afterward — it is now given."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Close with gratitude." }),
          " Bow and ask that the ancestor be at peace. Promise to live in a way that honors their memory."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: '"Even a handful of water, offered with a pure heart at the proper time, reaches the ancestors and satisfies them for a month."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 not-italic", children: "— Garuda Purana, Preta Khanda, Chapter 11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "disclaimer-banner mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "If you carry grief that feels too heavy to hold alone, please consider speaking with a trusted counselor or spiritual guide. Ritual supports the heart — it does not replace care for it." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto px-6 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center", children: "The Karmic Significance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mb-3", children: "Why We Honor the Ancestors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 mb-4", children: "The Vedic understanding holds that the soul does not end with the body. The Pitrus reside in a subtle realm, and their well-being is influenced by the offerings of their living descendants. When we perform Tarpan and Shraddha, we are not merely remembering — we are actively nourishing souls who can no longer nourish themselves." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/90 mb-4", children: [
            "This is the law of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Rna" }),
            " — sacred debt. Just as we inherit name, body, and lineage, we inherit the obligation to sustain the chain of which we are a living link. To break the chain is to leave both the living and the dead incomplete."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: '"One who does not perform the Shraddha for the Pitrus, being able to do so, incurs the sin of neglecting the sacred debt and falls from his station."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 not-italic", children: "— Manusmriti 9.137" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mb-3", children: "The Three Debts (Trirna)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 mb-4", children: "Every human is born with three debts: to the gods (Dev Rna), repaid through prayer and sacrifice; to the sages (Rishi Rna), repaid through study and teaching; and to the ancestors (Pitru Rna), repaid through progeny and the rites of remembrance. Pitru Saadhna is the direct discharge of this third debt." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: '"Born is the debtor; of the gods by sacrifice, of the sages by Vedic study, of the ancestors by offspring — free from debt goes the wise."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 not-italic", children: "— Taittiriya Samhita 6.3.10.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mb-3", children: "The Blessing Flows Both Ways" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 mb-4", children: "The Pitrus, satisfied by sincere offering, are said to bestow blessings upon the household — health, harmony, prosperity, and the continuity of the lineage. The rite is therefore not a one-way gift but a sacred exchange that binds the generations in mutual care." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: '"Satisfied by the Shraddha, the ancestors bless the performer with long life, fame, strength, wealth, learning, and righteousness."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 not-italic", children: "— Garuda Purana, Preta Khanda, Chapter 14" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card--item p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display font-semibold text-foreground mb-3", children: "Liberation and the Unfinished Soul" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 mb-4", children: "Some souls, due to sudden death, unfulfilled desires, or incomplete rites, may not find peaceful passage. The offerings of Tarpan and Pind Daan are believed to provide the subtle body with what it needs to move forward — toward rebirth or, ultimately, liberation (Moksha). This is why the rite is performed not only for known ancestors but for all departed souls." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: '"By the offering of Pindas, the departed soul gains a subtle body and proceeds toward its next state; without these offerings, it wanders restless and unfed."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 not-italic", children: "— Garuda Purana, Preta Khanda, Chapter 2" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-5xl mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "disclaimer-banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg", children: "These rites are presented as a guide to understanding and practice. For formal ceremonies — especially Shraddha and Pind Daan — consulting a knowledgeable priest (Purohit) is traditional and recommended where possible. The heart's sincerity is the truest offering; the form follows what the heart can hold." }) }) })
  ] });
}
function RiteDetail({ rite }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-display font-semibold text-foreground mb-2", children: "Auspicious Timing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/90", children: rite.timing })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-display font-semibold text-foreground mb-2", children: "Purpose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/90", children: rite.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-display font-semibold text-foreground mb-3", children: "Procedure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/90 whitespace-pre-line", children: rite.procedure })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-display font-semibold text-foreground mb-3", children: "Items Required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "step-list", children: rite.offerings.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, `offering-${item}`)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-display font-semibold text-foreground mb-3", children: "Scriptural Source" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "scripture-citation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic", children: rite.sourceVerse }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-2 not-italic", children: [
          "— ",
          rite.sourceGranth,
          ", ",
          rite.sourceChapter
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-display font-semibold text-foreground mb-3", children: "Karmic Significance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed text-foreground/90", children: [
        rite.description,
        " This rite discharges a portion of the sacred debt (Rna) owed to the ancestors and sustains the soul in its onward journey. As taught in the ",
        rite.sourceGranth,
        ", the sincere offering reaches the Pitru and returns as blessing upon the household."
      ] })
    ] })
  ] });
}
export {
  Pitru as PitruPage,
  Pitru as default
};
