import { r as reactExports, j as jsxRuntimeExports, m as motion, d as Link, A as AnimatePresence } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
const SPREAD_OPTIONS = [
  {
    id: "single",
    label: "Single Card — Daily Guidance",
    positions: ["Today's Reflection"]
  },
  {
    id: "three-card",
    label: "Three Card — Past, Present, Future",
    positions: ["Past", "Present", "Future"]
  },
  {
    id: "mind-heart",
    label: "Mind & Heart — Inner Dialogue",
    positions: ["Mind", "Heart", "Synthesis"]
  }
];
const VEDIC_FEATURES = [
  {
    glyph: "🪐",
    title: "My Kundali",
    sanskrit: "जन्म कुण्डली",
    description: "Your Vedic birth chart — Lagna, Navamsa, Vimshottari Dasha. The sacred map of your soul's journey, calculated from your birth details.",
    href: "/kundali-lite",
    cta: "Open My Kundali"
  },
  {
    glyph: "🌞",
    title: "Aaj Ka Graha",
    sanskrit: "आज का ग्रह",
    description: "Today's Panchang (Tithi, Nakshatra, Yoga, Karana) and the daily position of Chandra from your Rashi — with mantra and remedy.",
    href: "/kundali-lite",
    cta: "See Today's Graha"
  },
  {
    glyph: "🔱",
    title: "Graha Shanti",
    sanskrit: "ग्रह शान्ति",
    description: "The nine grahas — Surya, Chandra, Mangal, Budh, Guru, Shukra, Shani, Rahu, Ketu. Their mantras, remedies, daan, and gemstone guidance.",
    href: "/kundali-lite",
    cta: "Open Graha Shanti"
  },
  {
    glyph: "📅",
    title: "Transit Calendar",
    sanskrit: "गोचर पञ्जिका",
    description: "Twelve months of graha gochar, vakri (retrograde), and eclipse events — with remedies for each transit and downloadable calendar entries.",
    href: "/kundali-lite",
    cta: "View Transits"
  }
];
function ModeSelector({
  mode,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mx-3 mt-4 mb-2 grid grid-cols-2 gap-2",
      "data-ocid": "bhavishya.mode_selector",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onChange("vedic"),
            "data-ocid": "bhavishya.mode.vedic",
            className: "flex flex-col items-center gap-1 py-3 px-3 rounded-xl transition-smooth",
            style: {
              background: mode === "vedic" ? "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.65 0.28 46))" : "oklch(0.95 0.06 70)",
              border: mode === "vedic" ? "2px solid oklch(0.62 0.26 32)" : "1.5px solid oklch(0.72 0.22 54 / 0.35)",
              boxShadow: mode === "vedic" ? "0 6px 22px oklch(0.72 0.30 52 / 0.35)" : "none",
              color: mode === "vedic" ? "oklch(0.12 0.06 28)" : "oklch(0.32 0.12 40)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.6rem" }, "aria-hidden": true, children: "🪐" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display font-bold italic",
                  style: { fontSize: "1.05rem" },
                  children: "Vedic Jyotish"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body italic",
                  style: { fontSize: "0.78rem", opacity: 0.85 },
                  children: "Kundali · Graha · Panchang"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onChange("western"),
            "data-ocid": "bhavishya.mode.western",
            className: "flex flex-col items-center gap-1 py-3 px-3 rounded-xl transition-smooth",
            style: {
              background: mode === "western" ? "linear-gradient(135deg, oklch(0.54 0.26 268), oklch(0.46 0.24 280))" : "oklch(0.95 0.06 70)",
              border: mode === "western" ? "2px solid oklch(0.40 0.22 268)" : "1.5px solid oklch(0.72 0.22 54 / 0.35)",
              boxShadow: mode === "western" ? "0 6px 22px oklch(0.50 0.24 268 / 0.35)" : "none",
              color: mode === "western" ? "oklch(0.96 0.04 70)" : "oklch(0.32 0.12 40)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.6rem" }, "aria-hidden": true, children: "🃏" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display font-bold italic",
                  style: { fontSize: "1.05rem" },
                  children: "Western Tarot"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body italic",
                  style: { fontSize: "0.78rem", opacity: 0.85 },
                  children: "Draw · Reflect · Guidance"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function VedicMode() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-6", "data-ocid": "bhavishya.vedic.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "mx-1 mt-3 p-4 rounded-xl",
        style: {
          background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
          border: "1.5px solid oklch(0.76 0.24 54 / 0.40)",
          boxShadow: "0 4px 20px rgba(180,130,45,0.14)"
        },
        "data-ocid": "bhavishya.vedic.intro",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.6rem" }, "aria-hidden": true, children: "🪐" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic mb-1",
                style: { color: "oklch(0.22 0.10 32)", fontSize: "1.05rem" },
                children: "Vedic Jyotish — The Eye of the Vedas"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body leading-relaxed",
                style: { color: "oklch(0.30 0.09 34)", fontSize: "0.95rem" },
                children: "Jyotish is the science of light — the Vedic understanding that the grahas (planets) reflect your karmic patterns. Your Kundali is a sacred map; remedies (upay) are spiritual support, never a substitute for dharma and right action."
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4", children: VEDIC_FEATURES.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: idx * 0.06 },
        className: "rounded-xl p-4 flex flex-col gap-2",
        style: {
          background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
          border: "1.5px solid oklch(0.76 0.24 54 / 0.40)",
          boxShadow: "0 4px 18px rgba(180,130,45,0.12)"
        },
        "data-ocid": `bhavishya.vedic.feature.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, "aria-hidden": true, children: f.glyph }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-bold italic",
                  style: { color: "oklch(0.22 0.10 32)", fontSize: "1.05rem" },
                  children: f.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body",
                  style: {
                    color: "oklch(0.55 0.20 46)",
                    fontSize: "0.85rem",
                    fontStyle: "italic"
                  },
                  lang: "sa",
                  children: f.sanskrit
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body leading-relaxed",
              style: { color: "oklch(0.32 0.10 38)", fontSize: "0.92rem" },
              children: f.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: f.href,
              className: "wax-seal-btn mt-1 self-start",
              style: { fontSize: "0.85rem", padding: "0.55rem 1.1rem" },
              "data-ocid": `bhavishya.vedic.feature.${idx + 1}.open_button`,
              children: [
                f.cta,
                " →"
              ]
            }
          )
        ]
      },
      f.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mt-4 p-3 rounded-xl text-center",
        style: {
          background: "oklch(0.94 0.08 60 / 0.6)",
          border: "1px solid oklch(0.72 0.24 54 / 0.30)"
        },
        "data-ocid": "bhavishya.vedic.disclaimer",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body italic",
            style: { color: "oklch(0.45 0.14 46)", fontSize: "0.85rem" },
            children: "✦ Jyotish is the eye of the Vedas. Karma + Dharma are above all Grahas. Use this as guidance, not final truth. ✦"
          }
        )
      }
    )
  ] });
}
function TarotCardFace({
  card,
  isReversed,
  positionName
}) {
  if (!card) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-xl p-4 flex flex-col items-center justify-center min-h-[180px]",
        style: {
          background: "oklch(0.94 0.06 60 / 0.5)",
          border: "1.5px dashed oklch(0.72 0.22 54 / 0.4)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display italic",
            style: { color: "oklch(0.55 0.14 46)", fontSize: "0.95rem" },
            children: "…"
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
      transition: { duration: 0.5 },
      className: "rounded-xl overflow-hidden",
      style: {
        background: "linear-gradient(160deg, oklch(0.30 0.10 268) 0%, oklch(0.22 0.12 280) 100%)",
        border: "2px solid oklch(0.78 0.34 54 / 0.55)",
        boxShadow: "0 8px 28px oklch(0.30 0.18 268 / 0.45)"
      },
      "data-ocid": "bhavishya.tarot.card_face",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-1.5 font-display font-bold tracking-widest uppercase",
            style: {
              background: "oklch(0.78 0.34 54 / 0.25)",
              color: "oklch(0.94 0.06 70)",
              fontSize: "0.72rem",
              borderBottom: "1px solid oklch(0.78 0.34 54 / 0.35)"
            },
            children: positionName
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 flex flex-col items-center gap-2",
            style: {
              transform: isReversed ? "rotate(180deg)" : "none"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center rounded-full",
                  style: {
                    width: "64px",
                    height: "64px",
                    background: "radial-gradient(circle, oklch(0.78 0.34 54 / 0.35) 0%, oklch(0.40 0.20 268 / 0.4) 100%)",
                    border: "1.5px solid oklch(0.78 0.34 54 / 0.55)",
                    boxShadow: "0 0 18px oklch(0.78 0.34 54 / 0.45)"
                  },
                  "aria-hidden": true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.6rem" }, children: "🃏" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-bold italic text-center",
                  style: { color: "oklch(0.94 0.06 70)", fontSize: "1.05rem" },
                  children: card.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body",
                  style: {
                    color: "oklch(0.78 0.22 54)",
                    fontSize: "0.78rem",
                    fontStyle: "italic"
                  },
                  children: [
                    card.arcana,
                    " Arcana · ",
                    card.suit,
                    " · No. ",
                    card.number.toString()
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-4 pb-3",
            style: { borderTop: "1px solid oklch(0.78 0.34 54 / 0.25)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-center",
                  style: {
                    color: isReversed ? "oklch(0.86 0.20 24)" : "oklch(0.86 0.20 148)",
                    fontSize: "0.85rem",
                    fontWeight: 600
                  },
                  children: isReversed ? "⟲ Reversed" : "↑ Upright"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body mt-1 leading-relaxed",
                  style: {
                    color: "oklch(0.92 0.06 70)",
                    fontSize: "0.88rem"
                  },
                  children: isReversed ? card.reversedMeaning : card.uprightMeaning
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function WesternMode() {
  const [cards, setCards] = reactExports.useState([]);
  const [cardsLoading, setCardsLoading] = reactExports.useState(true);
  const [cardsError, setCardsError] = reactExports.useState(null);
  const [spreadType, setSpreadType] = reactExports.useState("three-card");
  const [question, setQuestion] = reactExports.useState("");
  const [reading, setReading] = reactExports.useState(null);
  const [drawing, setDrawing] = reactExports.useState(false);
  const [drawError, setDrawError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let active = true;
    setCardsLoading(true);
    getBackend().listTarotCards().then((c) => {
      if (active) {
        setCards(c);
        setCardsError(null);
      }
    }).catch(() => {
      if (active)
        setCardsError("Could not load the tarot deck. Please try again.");
    }).finally(() => {
      if (active) setCardsLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);
  const cardById = reactExports.useCallback(
    (id) => cards.find((c) => c.id === id),
    [cards]
  );
  const handleDraw = reactExports.useCallback(async () => {
    setDrawing(true);
    setDrawError(null);
    try {
      const r = await getBackend().drawTarot(spreadType, question.trim());
      setReading(r);
    } catch {
      setDrawError("The cards could not be drawn at this moment. Try again.");
    } finally {
      setDrawing(false);
    }
  }, [spreadType, question]);
  SPREAD_OPTIONS.find((s) => s.id === spreadType) ?? SPREAD_OPTIONS[1];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-6", "data-ocid": "bhavishya.western.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "mx-1 mt-3 p-4 rounded-xl",
        style: {
          background: "linear-gradient(160deg, oklch(0.30 0.10 268 / 0.92) 0%, oklch(0.24 0.12 280 / 0.92) 100%)",
          border: "1.5px solid oklch(0.78 0.34 54 / 0.45)",
          boxShadow: "0 6px 24px oklch(0.30 0.18 268 / 0.30)"
        },
        "data-ocid": "bhavishya.western.intro",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.6rem" }, "aria-hidden": true, children: "🃏" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic mb-1",
                style: { color: "oklch(0.94 0.06 70)", fontSize: "1.05rem" },
                children: "Western Tarot — Mirror of the Subconscious"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body leading-relaxed",
                style: {
                  color: "oklch(0.86 0.10 70)",
                  fontSize: "0.92rem"
                },
                children: "The tarot does not predict a fixed future — it reflects the inner landscape of the questioner. Sit quietly, hold your question with sincerity, then draw. The cards reveal what your own subconscious already knows."
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-display font-bold italic mb-2",
          style: { color: "oklch(0.22 0.10 32)", fontSize: "1rem" },
          children: "Choose a Spread"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2", children: SPREAD_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSpreadType(s.id),
          "data-ocid": `bhavishya.western.spread.${s.id}`,
          className: "text-left rounded-xl p-3 transition-smooth",
          style: {
            background: spreadType === s.id ? "linear-gradient(135deg, oklch(0.54 0.26 268), oklch(0.46 0.24 280))" : "oklch(0.95 0.06 70)",
            border: spreadType === s.id ? "2px solid oklch(0.40 0.22 268)" : "1.5px solid oklch(0.72 0.22 54 / 0.35)",
            color: spreadType === s.id ? "oklch(0.96 0.04 70)" : "oklch(0.32 0.12 40)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic",
                style: { fontSize: "0.95rem" },
                children: s.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body italic",
                style: { fontSize: "0.82rem", opacity: 0.85 },
                children: s.positions.join(" · ")
              }
            )
          ]
        },
        s.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: "bhavishya-tarot-question",
          className: "font-display font-bold italic block mb-2",
          style: { color: "oklch(0.22 0.10 32)", fontSize: "1rem" },
          children: "Your Question (optional)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "bhavishya-tarot-question",
          value: question,
          onChange: (e) => setQuestion(e.target.value),
          placeholder: "Hold your question in your heart, then write it here…",
          rows: 3,
          className: "manuscript-input",
          "data-ocid": "bhavishya.western.question_input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: handleDraw,
        disabled: drawing || cardsLoading,
        className: "wax-seal-btn w-full mt-2 justify-center",
        style: { fontSize: "1rem", padding: "0.85rem 1.5rem" },
        "data-ocid": "bhavishya.western.draw_button",
        children: drawing ? "✦ Drawing the cards… ✦" : cardsLoading ? "Loading deck…" : "✦ Draw the Cards ✦"
      }
    ),
    drawError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mt-3 p-3 rounded-xl text-center",
        style: {
          background: "oklch(0.94 0.08 24 / 0.3)",
          border: "1px solid oklch(0.65 0.22 24 / 0.45)"
        },
        "data-ocid": "bhavishya.western.error_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body italic",
            style: { color: "oklch(0.42 0.18 24)", fontSize: "0.9rem" },
            children: drawError
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: reading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
        className: "mt-5",
        "data-ocid": "bhavishya.western.reading",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold italic text-center mb-3",
              style: { color: "oklch(0.22 0.10 32)", fontSize: "1.1rem" },
              children: "✦ Your Reading ✦"
            }
          ),
          reading.question && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body italic text-center mb-3",
              style: {
                color: "oklch(0.45 0.14 46)",
                fontSize: "0.92rem"
              },
              children: [
                '"',
                reading.question,
                '"'
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid gap-3",
              style: {
                gridTemplateColumns: `repeat(${Math.min(reading.draws.length, 3)}, minmax(0, 1fr))`
              },
              "data-ocid": "bhavishya.western.draws",
              children: reading.draws.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TarotCardFace,
                {
                  card: cardById(d.cardId),
                  isReversed: d.isReversed,
                  positionName: d.positionName
                },
                `${d.cardId}-${i}`
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 p-4 rounded-xl",
              style: {
                background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
                border: "1.5px solid oklch(0.76 0.24 54 / 0.45)",
                boxShadow: "0 4px 18px rgba(180,130,45,0.14)"
              },
              "data-ocid": "bhavishya.western.interpretation",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold italic mb-2",
                    style: { color: "oklch(0.22 0.10 32)", fontSize: "1rem" },
                    children: "Interpretation"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body leading-relaxed mb-3",
                    style: { color: "oklch(0.28 0.10 36)", fontSize: "0.95rem" },
                    children: reading.interpretation
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold italic mb-1",
                    style: { color: "oklch(0.45 0.20 46)", fontSize: "0.95rem" },
                    children: "Guidance"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body italic leading-relaxed",
                    style: { color: "oklch(0.32 0.10 38)", fontSize: "0.95rem" },
                    children: reading.guidance
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-display font-bold italic text-center mb-3",
          style: { color: "oklch(0.22 0.10 32)", fontSize: "1.05rem" },
          children: "✦ The Tarot Deck ✦"
        }
      ),
      cardsError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-3 rounded-xl text-center",
          style: {
            background: "oklch(0.94 0.08 24 / 0.3)",
            border: "1px solid oklch(0.65 0.22 24 / 0.45)"
          },
          "data-ocid": "bhavishya.western.deck_error",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body italic",
              style: { color: "oklch(0.42 0.18 24)", fontSize: "0.9rem" },
              children: cardsError
            }
          )
        }
      ) : cardsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center py-6",
          "data-ocid": "bhavishya.western.deck_loading",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading", "aria-label": "Loading tarot deck", children: "ॐ" })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
          "data-ocid": "bhavishya.western.deck",
          children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-3",
              style: {
                background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.97) 0%, oklch(0.94 0.09 64 / 0.96) 100%)",
                border: "1px solid oklch(0.72 0.22 54 / 0.30)"
              },
              "data-ocid": `bhavishya.western.deck.card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem" }, "aria-hidden": true, children: "🃏" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display font-bold italic truncate",
                        style: {
                          color: "oklch(0.22 0.10 32)",
                          fontSize: "0.95rem"
                        },
                        children: c.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body italic",
                        style: {
                          color: "oklch(0.55 0.18 46)",
                          fontSize: "0.78rem"
                        },
                        children: [
                          c.arcana,
                          " · ",
                          c.suit,
                          " · No. ",
                          c.number.toString()
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body leading-relaxed",
                    style: {
                      color: "oklch(0.32 0.10 38)",
                      fontSize: "0.85rem"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: "↑ Upright:" }),
                      " ",
                      c.uprightMeaning
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body leading-relaxed mt-1",
                    style: {
                      color: "oklch(0.38 0.14 44)",
                      fontSize: "0.85rem"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: "⟲ Reversed:" }),
                      " ",
                      c.reversedMeaning
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body italic mt-1",
                    style: {
                      color: "oklch(0.50 0.14 46)",
                      fontSize: "0.8rem"
                    },
                    children: c.symbolism
                  }
                )
              ]
            },
            c.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mt-4 p-3 rounded-xl text-center",
        style: {
          background: "oklch(0.94 0.08 60 / 0.6)",
          border: "1px solid oklch(0.72 0.24 54 / 0.30)"
        },
        "data-ocid": "bhavishya.western.disclaimer",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body italic",
            style: { color: "oklch(0.45 0.14 46)", fontSize: "0.85rem" },
            children: "✦ The cards reflect your inner state — they do not bind your karma. Act with dharma; the future is shaped by your actions. ✦"
          }
        )
      }
    )
  ] });
}
function BhavishyaPage() {
  const [mode, setMode] = reactExports.useState("vedic");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "manuscript-page min-h-screen pb-28 relative",
      "data-ocid": "bhavishya.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -14 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "relative text-center pt-6 pb-4 px-4",
            style: {
              background: "linear-gradient(160deg, oklch(0.88 0.18 54 / 0.55) 0%, oklch(0.82 0.20 268 / 0.45) 50%, oklch(0.86 0.16 54 / 0.50) 100%)",
              borderRadius: "0 0 24px 24px",
              borderBottom: "2px solid oklch(0.78 0.30 54 / 0.45)"
            },
            "data-ocid": "bhavishya.hero",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-5xl mb-2 sacred-float divine-glow-pulse",
                  style: { lineHeight: 1 },
                  "aria-hidden": true,
                  children: "✦"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display tracking-[0.35em] uppercase mb-1",
                  style: { color: "oklch(0.40 0.18 46)", fontSize: "0.85rem" },
                  children: "✦ भविष्य गाथन ✦"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display font-bold italic mb-1",
                  style: {
                    fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                    color: "oklch(0.18 0.09 32)",
                    textShadow: "0 2px 12px oklch(0.78 0.34 54 / 0.30)",
                    lineHeight: 1.15
                  },
                  children: "Bhavishya Gathan"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body italic",
                  style: {
                    color: "oklch(0.32 0.12 38)",
                    fontSize: "0.95rem"
                  },
                  children: "Future Knowledge — two paths of seeing: Vedic Jyotish and Western Tarot"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModeSelector, { mode, onChange: setMode }),
        mode === "vedic" ? /* @__PURE__ */ jsxRuntimeExports.jsx(VedicMode, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(WesternMode, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-6 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            className: "font-body italic",
            style: { color: "oklch(0.52 0.14 46)", fontSize: "0.9rem" },
            "data-ocid": "bhavishya.back_home",
            children: "← Return to Home"
          }
        ) })
      ] })
    }
  );
}
export {
  BhavishyaPage
};
