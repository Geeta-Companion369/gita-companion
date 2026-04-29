import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, a as Link } from "./index-vCKiyWhq.js";
const CLOSING_VERSES = [
  {
    ref: "BG 18.66",
    text: "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    why: "Krishna's ultimate promise — end with surrender"
  },
  {
    ref: "BG 2.20",
    text: "The soul is never born nor does it die at any time. It has not come into being and will not come into being. It is unborn, eternal, ever-existing and primordial.",
    why: "Assure them — you are eternal, and so are they"
  },
  {
    ref: "BG 6.30",
    text: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is such a person ever lost to Me.",
    why: "Your love and theirs — never truly separated"
  },
  {
    ref: "BG 9.22",
    text: "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack, and I preserve what they have.",
    why: "Krishna's promise to take care of those you love"
  },
  {
    ref: "BG 18.65",
    text: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this.",
    why: "Leave them with a path — come to Me"
  },
  {
    ref: "BG 2.47",
    text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities.",
    why: "Guide them to live with purpose without attachment"
  },
  {
    ref: "BG 4.7-8",
    text: "Whenever and wherever there is a decline in religious practice and a predominant rise of irreligion — at that time I descend Myself to deliver the pious and annihilate the miscreants.",
    why: "Krishna is always coming back — they are never alone"
  },
  {
    ref: "BG 9.31",
    text: "He quickly becomes righteous and attains lasting peace. O son of Kunti, declare it boldly that My devotee never perishes.",
    why: "For those who grieve — your devotee never perishes"
  },
  {
    ref: "BG 12.6-7",
    text: "But those who worship Me with devotion, meditating on My transcendental form — for them I am the swift deliverer from the ocean of birth and death.",
    why: "Krishna speeds their liberation — and yours"
  },
  {
    ref: "BG 15.6",
    text: "That supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.",
    why: "Where you are going — a place beyond all suffering"
  }
];
const LIFE_LESSON_PROMPTS = [
  "What did the Gita teach you about karma — about how every action shapes the soul?",
  "What did you learn about love — and how love never truly ends?",
  "What is the most important truth you discovered about God, about Krishna?",
  "What do you know now about death that you wish you had known earlier?",
  "What would you tell them about how to face their hardest days?"
];
const DHARMA_PROMPTS = [
  "What is the most sacred thing you have learned about living a good life?",
  "What does dharma mean to you, in your own words?",
  "What practice — a single daily act of devotion — would you urge them to never abandon?"
];
const SECTION_VERSE = {
  recipients: { ref: "BG 18.65", text: "You are My dear friend." },
  lifeLesson: {
    ref: "BG 4.38",
    text: "There is nothing so sublime and pure as transcendental knowledge."
  },
  dharmaMessage: {
    ref: "BG 3.35",
    text: "It is far better to discharge one's prescribed duties, even if they are imperfect, than another's duties."
  },
  promises: {
    ref: "BG 9.22",
    text: "I carry what you lack and preserve what you have."
  },
  blessings: {
    ref: "BG 18.66",
    text: "Surrender to Me alone. I shall deliver you from all sins. Do not grieve."
  },
  closingVerse: {
    ref: "BG 6.30",
    text: "I am never lost, nor is such a person ever lost to Me."
  }
};
const PRINT_STYLES = `
  @media print {
    body * { visibility: hidden !important; }
    #spiritual-will-print, #spiritual-will-print * { visibility: visible !important; }
    #spiritual-will-print {
      position: absolute; left: 0; top: 0; width: 100%;
      background: #f5ead8 !important;
      padding: 3cm !important;
      font-family: Georgia, serif;
      color: #2a1a0e !important;
    }
    .no-print { display: none !important; }
  }
`;
function SectionHeader({
  icon,
  title,
  hindi,
  verse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, oklch(0.76 0.32 54 / 0.2), oklch(0.62 0.26 32 / 0.15))",
          border: "1px solid oklch(0.76 0.32 54 / 0.4)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.3rem" }, children: icon })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-display font-bold italic",
          style: { color: "oklch(0.18 0.08 32)", fontSize: "1.1rem" },
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-xs italic mb-1",
          style: { color: "oklch(0.52 0.14 46)" },
          children: hindi
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: "font-body text-xs italic",
          style: { color: "oklch(0.58 0.18 48 / 0.8)" },
          children: [
            '"',
            verse.text.slice(0, 60),
            '…" — ',
            verse.ref
          ]
        }
      )
    ] })
  ] });
}
function RecipientInput({
  recipients,
  onChange
}) {
  const [newName, setNewName] = reactExports.useState("");
  const addRecipient = () => {
    if (newName.trim() && !recipients.includes(newName.trim())) {
      onChange([...recipients, newName.trim()]);
      setNewName("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: newName,
          onChange: (e) => setNewName(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addRecipient();
            }
          },
          placeholder: "Add a name (e.g. Priya, my daughter…)",
          className: "manuscript-input flex-1",
          style: { resize: "none" },
          "data-ocid": "spiritual-will.recipient_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: addRecipient,
          className: "rounded-lg px-4 py-2 font-display font-bold text-sm transition-all",
          style: {
            background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
            color: "oklch(0.12 0.08 28)",
            flexShrink: 0
          },
          "data-ocid": "spiritual-will.add_recipient",
          children: "Add"
        }
      )
    ] }),
    recipients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: recipients.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
        style: {
          background: "oklch(0.76 0.32 54 / 0.15)",
          border: "1px solid oklch(0.76 0.32 54 / 0.4)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body text-sm",
              style: { color: "oklch(0.28 0.10 36)" },
              children: name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onChange(recipients.filter((r) => r !== name)),
              "aria-label": `Remove ${name}`,
              className: "font-body text-xs leading-none transition-all",
              style: { color: "oklch(0.52 0.14 46 / 0.6)" },
              "data-ocid": `spiritual-will.remove_recipient_${name}`,
              children: "×"
            }
          )
        ]
      },
      name
    )) })
  ] });
}
function WillDocument({ will }) {
  const closingVerse = CLOSING_VERSES.find((v) => v.ref === will.closingVerseRef) ?? CLOSING_VERSES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "spiritual-will-print",
      className: "manuscript-page rounded-xl p-6 sm:p-8",
      style: { position: "relative" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-2 rounded-t-xl mb-6 -mt-6 -mx-6 sm:-mx-8",
            style: {
              background: "linear-gradient(90deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54), oklch(0.62 0.26 32))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs tracking-[0.4em] mb-2",
              style: { color: "oklch(0.62 0.26 32 / 0.8)" },
              children: "✦ ॐ ✦ ॐ ✦ ॐ ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display font-bold italic mb-1",
              style: {
                color: "oklch(0.18 0.08 32)",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)"
              },
              children: "आध्यात्मिक वसीयत"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic",
              style: { color: "oklch(0.52 0.14 46)" },
              children: "My Spiritual Will — A Sacred Letter"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-px mt-4 mb-2",
              style: {
                background: "linear-gradient(90deg, transparent, oklch(0.76 0.32 54 / 0.6), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs",
              style: { color: "oklch(0.52 0.14 46 / 0.7)" },
              children: will.lastSaved
            }
          )
        ] }),
        will.recipients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic font-bold mb-1",
              style: { color: "oklch(0.62 0.26 32)", fontSize: "0.95rem" },
              children: "This sacred letter is written with love, for —"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-lg",
              style: { color: "oklch(0.18 0.08 32)" },
              children: will.recipients.join(", ")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-px mb-6",
            style: { background: "oklch(0.76 0.32 54 / 0.3)" }
          }
        ),
        will.lifeLesson && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic font-bold mb-2",
              style: { color: "oklch(0.38 0.14 36)", fontSize: "1rem" },
              children: "What the Gita Taught Me About Life —"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body",
              style: {
                color: "oklch(0.22 0.08 34)",
                lineHeight: 1.9,
                fontSize: "1rem"
              },
              children: will.lifeLesson
            }
          )
        ] }),
        will.dharmaMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic font-bold mb-2",
              style: { color: "oklch(0.38 0.14 36)", fontSize: "1rem" },
              children: "My Dharma Message to You —"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body",
              style: {
                color: "oklch(0.22 0.08 34)",
                lineHeight: 1.9,
                fontSize: "1rem"
              },
              children: will.dharmaMessage
            }
          )
        ] }),
        will.promises && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic font-bold mb-2",
              style: { color: "oklch(0.38 0.14 36)", fontSize: "1rem" },
              children: "My Sacred Promises to You —"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body",
              style: {
                color: "oklch(0.22 0.08 34)",
                lineHeight: 1.9,
                fontSize: "1rem"
              },
              children: will.promises
            }
          )
        ] }),
        will.blessings && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic font-bold mb-2",
              style: { color: "oklch(0.38 0.14 36)", fontSize: "1rem" },
              children: "My Blessings for You —"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body",
              style: {
                color: "oklch(0.22 0.08 34)",
                lineHeight: 1.9,
                fontSize: "1rem",
                fontStyle: "italic"
              },
              children: will.blessings
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-px mb-6",
            style: { background: "oklch(0.76 0.32 54 / 0.3)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-4 rounded-lg px-4",
            style: {
              background: "oklch(0.76 0.32 54 / 0.08)",
              border: "1px solid oklch(0.76 0.32 54 / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body italic text-sm mb-2",
                  style: { color: "oklch(0.28 0.10 38)", lineHeight: 1.75 },
                  children: [
                    '"',
                    closingVerse.text,
                    '"'
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display text-xs",
                  style: { color: "oklch(0.62 0.26 32 / 0.8)" },
                  children: [
                    "— Bhagavad Gita ",
                    closingVerse.ref
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic",
              style: { color: "oklch(0.62 0.26 32 / 0.8)" },
              children: "॥ हरे कृष्ण ॥"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs mt-1",
              style: { color: "oklch(0.52 0.14 46 / 0.7)" },
              children: "Written in the presence of Krishna, who witnesses all."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-2 rounded-b-xl mt-6 -mb-6 -mx-6 sm:-mx-8",
            style: {
              background: "linear-gradient(90deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54), oklch(0.62 0.26 32))"
            }
          }
        )
      ]
    }
  );
}
const SECTIONS = [
  { id: "recipients", icon: "💌", title: "To Whom", hindi: "किनके लिए" },
  {
    id: "lifeLesson",
    icon: "📖",
    title: "What I Have Learned About Life",
    hindi: "जीवन की सीख"
  },
  {
    id: "dharmaMessage",
    icon: "🙏",
    title: "My Dharma Message",
    hindi: "धर्म का संदेश"
  },
  {
    id: "promises",
    icon: "🌿",
    title: "My Sacred Promises",
    hindi: "मेरी प्रतिज्ञाएं"
  },
  { id: "blessings", icon: "✨", title: "My Blessings", hindi: "मेरे आशीर्वाद" },
  {
    id: "closingVerse",
    icon: "ॐ",
    title: "Closing Verse",
    hindi: "समापन श्लोक"
  }
];
function SpiritualWillPage() {
  var _a, _b, _c;
  const [will, setWill] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("spiritual-will");
      if (stored) return JSON.parse(stored);
    } catch {
    }
    return {
      recipients: [],
      lifeLesson: "",
      dharmaMessage: "",
      promises: "",
      blessings: "",
      closingVerseRef: "BG 18.66",
      lastSaved: ""
    };
  });
  const [activeSection, setActiveSection] = reactExports.useState("recipients");
  const [viewMode, setViewMode] = reactExports.useState("edit");
  const [savedFlash, setSavedFlash] = reactExports.useState(false);
  const autoSaveRef = reactExports.useRef(null);
  const updateWill = (updates) => {
    setWill((prev) => {
      const next = { ...prev, ...updates };
      if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
      autoSaveRef.current = setTimeout(() => {
        localStorage.setItem(
          "spiritual-will",
          JSON.stringify({
            ...next,
            lastSaved: (/* @__PURE__ */ new Date()).toLocaleString("en-IN")
          })
        );
      }, 800);
      return next;
    });
  };
  const saveNow = () => {
    const saved = { ...will, lastSaved: (/* @__PURE__ */ new Date()).toLocaleString("en-IN") };
    localStorage.setItem("spiritual-will", JSON.stringify(saved));
    setWill(saved);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2500);
  };
  const printWill = () => window.print();
  reactExports.useEffect(() => {
    return () => {
      if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
    };
  }, []);
  const completedSections = [
    will.recipients.length > 0,
    will.lifeLesson.trim().length > 0,
    will.dharmaMessage.trim().length > 0,
    will.promises.trim().length > 0,
    will.blessings.trim().length > 0,
    !!will.closingVerseRef
  ].filter(Boolean).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative", "data-ocid": "spiritual-will.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: PRINT_STYLES }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        "aria-hidden": true,
        style: {
          background: "linear-gradient(160deg, oklch(0.93 0.05 70) 0%, oklch(0.90 0.07 66) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs tracking-[0.35em] mb-2",
                style: { color: "oklch(0.62 0.26 32 / 0.85)" },
                children: "॥ हरे कृष्ण ॥"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display font-bold italic mb-1",
                style: {
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  color: "oklch(0.18 0.08 32)",
                  textShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.2)"
                },
                children: "आध्यात्मिक वसीयत"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic",
                style: { color: "oklch(0.52 0.14 46)" },
                children: "Your Spiritual Will — The most sacred letter you will ever write"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "manuscript-card p-5 mb-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display italic font-bold mb-2",
                style: {
                  color: "oklch(0.18 0.08 32)",
                  fontSize: "1.05rem",
                  lineHeight: 1.5
                },
                children: '"This is perhaps the most sacred thing you will ever write, Arjun."'
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm",
                style: { color: "oklch(0.42 0.12 44)", lineHeight: 1.7 },
                children: "A letter not about possessions — but about wisdom, love, and the eternal truths you have learned. Guided at every step by Krishna."
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3 },
          className: "flex items-center justify-between mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-full px-3 py-1 font-body text-xs",
                style: {
                  background: "oklch(0.76 0.32 54 / 0.15)",
                  border: "1px solid oklch(0.76 0.32 54 / 0.4)",
                  color: "oklch(0.38 0.14 36)"
                },
                children: [
                  completedSections,
                  "/6 sections complete"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setViewMode((v) => v === "edit" ? "preview" : "edit"),
                className: "rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all",
                style: {
                  background: viewMode === "preview" ? "oklch(0.62 0.26 32 / 0.15)" : "transparent",
                  border: "1px solid oklch(0.72 0.12 56 / 0.5)",
                  color: "oklch(0.38 0.14 36)"
                },
                "data-ocid": "spiritual-will.toggle_preview",
                children: viewMode === "edit" ? "👁 Preview" : "✏ Edit"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: viewMode === "preview" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WillDocument, { will }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-4 no-print", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: saveNow,
                  className: "flex-1 rounded-lg py-3 font-display font-bold italic text-sm transition-all",
                  style: {
                    background: savedFlash ? "oklch(0.58 0.22 140)" : "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                    color: "oklch(0.12 0.08 28)"
                  },
                  "data-ocid": "spiritual-will.save_button",
                  children: savedFlash ? "✓ Saved" : "💾 Save Will"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: printWill,
                  className: "flex-1 rounded-lg py-3 font-display font-bold italic text-sm transition-all",
                  style: {
                    background: "oklch(0.88 0.06 66)",
                    border: "1px solid oklch(0.72 0.12 56 / 0.5)",
                    color: "oklch(0.28 0.10 38)"
                  },
                  "data-ocid": "spiritual-will.print_button",
                  children: "🖨 Print"
                }
              )
            ] })
          ]
        },
        "preview"
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex gap-1 overflow-x-auto pb-2 mb-5 scrollbar-hide",
                "data-ocid": "spiritual-will.sections",
                children: SECTIONS.map((s) => {
                  const isDone = s.id === "recipients" ? will.recipients.length > 0 : s.id === "closingVerse" ? !!will.closingVerseRef : will[s.id].trim().length > 0;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setActiveSection(s.id),
                      className: "flex-shrink-0 rounded-lg px-3 py-2 font-display text-xs font-bold italic transition-all",
                      style: {
                        background: activeSection === s.id ? "linear-gradient(135deg, oklch(0.62 0.26 32 / 0.2), oklch(0.76 0.32 54 / 0.12))" : "oklch(0.88 0.06 66 / 0.5)",
                        border: activeSection === s.id ? "1.5px solid oklch(0.76 0.32 54 / 0.5)" : "1px solid oklch(0.72 0.12 56 / 0.3)",
                        color: activeSection === s.id ? "oklch(0.18 0.08 32)" : "oklch(0.48 0.12 44)"
                      },
                      "data-ocid": `spiritual-will.section_${s.id}`,
                      children: [
                        isDone ? "✓ " : "",
                        s.icon,
                        " ",
                        s.title.split(" ").slice(0, 2).join(" ")
                      ]
                    },
                    s.id
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5 mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SectionHeader,
                      {
                        icon: ((_a = SECTIONS.find((s) => s.id === activeSection)) == null ? void 0 : _a.icon) ?? "📜",
                        title: ((_b = SECTIONS.find((s) => s.id === activeSection)) == null ? void 0 : _b.title) ?? "",
                        hindi: ((_c = SECTIONS.find((s) => s.id === activeSection)) == null ? void 0 : _c.hindi) ?? "",
                        verse: SECTION_VERSE[activeSection]
                      }
                    ),
                    activeSection === "recipients" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm italic mb-3",
                          style: { color: "oklch(0.48 0.12 44)" },
                          children: "Who is this sacred letter for? Add the names of those you love — children, spouse, parents, friends."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        RecipientInput,
                        {
                          recipients: will.recipients,
                          onChange: (r) => updateWill({ recipients: r })
                        }
                      )
                    ] }),
                    activeSection === "lifeLesson" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 space-y-1", children: LIFE_LESSON_PROMPTS.map((prompt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-xs italic",
                          style: { color: "oklch(0.52 0.14 46 / 0.8)" },
                          children: [
                            "• ",
                            prompt
                          ]
                        },
                        prompt
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          value: will.lifeLesson,
                          onChange: (e) => updateWill({ lifeLesson: e.target.value }),
                          placeholder: "Tell them what the Gita taught you about karma… about love… about God… about death…",
                          rows: 7,
                          className: "manuscript-input",
                          "data-ocid": "spiritual-will.life_lesson_input"
                        }
                      )
                    ] }),
                    activeSection === "dharmaMessage" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 space-y-1", children: DHARMA_PROMPTS.map((prompt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-body text-xs italic",
                          style: { color: "oklch(0.52 0.14 46 / 0.8)" },
                          children: [
                            "• ",
                            prompt
                          ]
                        },
                        prompt
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          value: will.dharmaMessage,
                          onChange: (e) => updateWill({ dharmaMessage: e.target.value }),
                          placeholder: "What is the one thing you most want them to know about living a dharmic life?",
                          rows: 6,
                          className: "manuscript-input",
                          "data-ocid": "spiritual-will.dharma_input"
                        }
                      )
                    ] }),
                    activeSection === "promises" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic mb-3",
                          style: { color: "oklch(0.52 0.14 46 / 0.8)" },
                          children: "What promises do you make to them — guided by Krishna's own promise to Arjuna in BG 18.66?"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          value: will.promises,
                          onChange: (e) => updateWill({ promises: e.target.value }),
                          placeholder: "I promise to always watch over you… I promise that my love for you is eternal… I promise to come to you in your dreams…",
                          rows: 6,
                          className: "manuscript-input",
                          "data-ocid": "spiritual-will.promises_input"
                        }
                      )
                    ] }),
                    activeSection === "blessings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic mb-3",
                          style: { color: "oklch(0.52 0.14 46 / 0.8)" },
                          children: "Write your blessings as Krishna blessed Arjuna — with the full authority of a soul who has loved completely."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          value: will.blessings,
                          onChange: (e) => updateWill({ blessings: e.target.value }),
                          placeholder: "May you always remember Krishna in every difficulty… May you never feel alone… May your life be filled with dharma and love…",
                          rows: 6,
                          className: "manuscript-input",
                          "data-ocid": "spiritual-will.blessings_input"
                        }
                      )
                    ] }),
                    activeSection === "closingVerse" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic mb-4",
                          style: { color: "oklch(0.52 0.14 46 / 0.8)" },
                          children: "Choose the Gita verse that will close your letter — the final words of Krishna that you leave for those you love."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "space-y-2",
                          "data-ocid": "spiritual-will.verse_choices",
                          children: CLOSING_VERSES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => updateWill({ closingVerseRef: v.ref }),
                              className: "w-full rounded-lg p-4 text-left transition-all duration-200",
                              style: {
                                background: will.closingVerseRef === v.ref ? "oklch(0.76 0.32 54 / 0.12)" : "oklch(0.90 0.06 68 / 0.6)",
                                border: `1.5px solid ${will.closingVerseRef === v.ref ? "oklch(0.76 0.32 54 / 0.6)" : "oklch(0.72 0.12 56 / 0.3)"}`
                              },
                              "data-ocid": `spiritual-will.verse_${v.ref.replace(/\./g, "_").replace(/\s+/g, "")}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "flex-shrink-0 font-display text-xs font-bold pt-0.5",
                                    style: { color: "oklch(0.62 0.26 32)" },
                                    children: v.ref
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "p",
                                    {
                                      className: "font-body italic text-sm mb-1",
                                      style: {
                                        color: "oklch(0.28 0.10 36)",
                                        lineHeight: 1.6
                                      },
                                      children: [
                                        '"',
                                        v.text.slice(0, 70),
                                        '…"'
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      className: "font-body text-xs",
                                      style: { color: "oklch(0.52 0.10 44)" },
                                      children: v.why
                                    }
                                  )
                                ] }),
                                will.closingVerseRef === v.ref && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "ml-auto font-display text-sm",
                                    style: { color: "oklch(0.62 0.26 32)" },
                                    children: "✓"
                                  }
                                )
                              ] })
                            },
                            v.ref
                          ))
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                    SECTIONS.findIndex((s) => s.id === activeSection) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setActiveSection(
                          SECTIONS[SECTIONS.findIndex(
                            (s) => s.id === activeSection
                          ) - 1].id
                        ),
                        className: "rounded-lg px-4 py-2.5 font-body text-sm transition-all",
                        style: {
                          background: "oklch(0.88 0.06 66)",
                          border: "1px solid oklch(0.72 0.12 56 / 0.4)",
                          color: "oklch(0.38 0.12 42)"
                        },
                        "data-ocid": "spiritual-will.prev_section",
                        children: "← Previous"
                      }
                    ),
                    SECTIONS.findIndex((s) => s.id === activeSection) < SECTIONS.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.button,
                      {
                        type: "button",
                        onClick: () => setActiveSection(
                          SECTIONS[SECTIONS.findIndex(
                            (s) => s.id === activeSection
                          ) + 1].id
                        ),
                        whileTap: { scale: 0.97 },
                        className: "flex-1 rounded-lg py-2.5 font-display font-bold italic text-sm transition-all",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                          color: "oklch(0.12 0.08 28)",
                          boxShadow: "0 4px 16px oklch(0.62 0.26 32 / 0.3)"
                        },
                        "data-ocid": "spiritual-will.next_section",
                        children: "Continue →"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.button,
                      {
                        type: "button",
                        onClick: () => {
                          saveNow();
                          setViewMode("preview");
                        },
                        whileTap: { scale: 0.97 },
                        className: "flex-1 rounded-lg py-2.5 font-display font-bold italic text-sm transition-all",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                          color: "oklch(0.12 0.08 28)",
                          boxShadow: "0 4px 16px oklch(0.62 0.26 32 / 0.35)"
                        },
                        "data-ocid": "spiritual-will.complete_button",
                        children: "✦ Complete My Spiritual Will ✦"
                      }
                    )
                  ] })
                ]
              },
              activeSection
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: savedFlash && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                className: "fixed bottom-24 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 font-body text-sm z-[200]",
                style: {
                  background: "oklch(0.58 0.22 140)",
                  color: "oklch(0.96 0.04 74)"
                },
                "data-ocid": "spiritual-will.saved_toast",
                children: "✓ Saved to your device"
              }
            ) })
          ]
        },
        "edit"
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "font-body text-xs italic",
          style: { color: "oklch(0.52 0.14 46)" },
          "data-ocid": "spiritual-will.back_home",
          children: "← Return to Home"
        }
      ) })
    ] })
  ] });
}
export {
  SpiritualWillPage
};
