import { g as useTTS, r as reactExports, V as VERSE_BY_ID, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-vCKiyWhq.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
const KEY_VERSES = [
  "2.47",
  "2.20",
  "2.14",
  "2.19",
  "2.55",
  "2.62",
  "2.63",
  "3.8",
  "3.19",
  "3.35",
  "4.7",
  "4.8",
  "4.11",
  "4.18",
  "5.18",
  "6.5",
  "6.35",
  "6.47",
  "7.7",
  "8.5",
  "8.7",
  "9.22",
  "9.27",
  "9.34",
  "10.8",
  "10.20",
  "11.32",
  "11.55",
  "12.2",
  "12.13",
  "13.2",
  "13.12",
  "14.5",
  "15.7",
  "15.15",
  "16.2",
  "16.3",
  "17.3",
  "18.48",
  "18.65",
  "18.66",
  "18.58",
  "18.47",
  "3.16",
  "3.42",
  "2.48",
  "4.36",
  "6.5",
  "9.31",
  "4.24"
];
const STATIC_COMMENTARY = {
  "2.47": {
    verseId: "2.47",
    shankaracharya: "This verse is the cornerstone of Jnana Yoga. Shankara interprets 'your duty is to act' as the imperative of the discriminating intellect (Viveka). Action performed with equanimity of mind (Samatvam) and without desire for fruit purifies the inner instrument (antahkarana), preparing the seeker for the direct knowledge of Brahman. The three renunciations — of fruit, attachment, and inaction — dissolve the illusion of doership (Ahamkara).",
    ramanuja: "Ramanuja sees this verse as the supreme instruction in Karma Yoga as a means of worship. Every action offered to the Lord (Ishvara-Arpita) becomes an act of devotion. The Vishishtadvaita perspective holds that the jiva (individual soul), though distinct from Brahman, participates in divine activity. To act without grasping the fruit is to recognise that all results belong to the Lord who dwells within all beings as their inner controller (Antaryamin).",
    tilak: "Tilak reads this verse as a call to national and individual action. In Gita Rahasya, he argues that Karma Yoga is not passive renunciation but vigorous, selfless service. The activist must dedicate effort without anxiety about success or failure. This verse empowered India's independence movement — perform your duty with full strength, offer the outcome to dharma, and let no fear of defeat cause inaction."
  },
  "18.66": {
    verseId: "18.66",
    shankaracharya: "This is the charama shloka — the final and supreme teaching. Shankara interprets 'sarva-dharman parityajya' as the abandonment of all prescribed duties once direct Self-knowledge has arisen. At the pinnacle of Advaita, the realised soul transcends even dharma, resting in the non-dual Brahman. 'Aham tvam sarvapapebhyo mokshayishyami' — 'I shall liberate you' — refers to the grace of the Self recognising itself.",
    ramanuja: "For Ramanuja, this verse is the essence of Prapatti — complete surrender to the Lord. Surrendering all dharmas means entrusting both action and result entirely to Vishnu. This is not nihilism but the highest form of devotion: placing oneself wholly in the hands of the compassionate Lord. 'Ma shuchah' — 'do not grieve' — is Krishna's personal assurance that surrender is not loss but liberation into divine protection.",
    tilak: "Tilak cautions against interpreting this verse as passive surrender. The abandonment of dharmas is not abandonment of action but of ego-based action. One must act on the highest dharma — the welfare of all beings — and trust that this selfless surrender to the cosmic order will bring liberation. This is the convergence of Karma, Jnana, and Bhakti in one supreme moment."
  }
};
const SCHOOL_DATA = {
  shankaracharya: {
    label: "आदि शंकराचार्य",
    sublabel: "Advaita Vedanta — Non-dualism",
    intro: "8th century CE · Founder of Advaita Vedanta",
    borderColor: "oklch(0.45 0.18 280 / 0.45)",
    bgColor: "oklch(0.45 0.18 280 / 0.05)",
    accentColor: "oklch(0.52 0.2 280)",
    icon: "🔵"
  },
  ramanuja: {
    label: "रामानुजाचार्य",
    sublabel: "Vishishtadvaita — Qualified Non-dualism",
    intro: "11th century CE · Founder of Sri Vaishnavism",
    borderColor: "oklch(0.58 0.22 28 / 0.45)",
    bgColor: "oklch(0.58 0.22 28 / 0.05)",
    accentColor: "oklch(0.58 0.22 28)",
    icon: "🟠"
  },
  tilak: {
    label: "बाल गंगाधर तिलक",
    sublabel: "Karma Yoga — Active renunciation",
    intro: "19th century CE · Author of Gita Rahasya",
    borderColor: "oklch(0.48 0.16 145 / 0.45)",
    bgColor: "oklch(0.48 0.16 145 / 0.05)",
    accentColor: "oklch(0.48 0.16 145)",
    icon: "🟢"
  }
};
function CommentaryCard({ school, text, isLoading }) {
  const data = SCHOOL_DATA[school];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-5 rounded-sm h-full",
      style: {
        border: `1px solid ${data.borderColor}`,
        background: data.bgColor
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: data.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic",
                style: { fontSize: "1rem", color: data.accentColor },
                children: data.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: data.sublabel })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs text-muted-foreground italic mb-3",
            style: {
              borderBottom: `1px solid ${data.borderColor}`,
              paddingBottom: "0.5rem"
            },
            children: data.intro
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-3xl",
              style: {
                display: "inline-block",
                animation: "spin 2s linear infinite",
                color: data.accentColor
              },
              "aria-hidden": "true",
              children: "ॐ"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground italic", children: "Fetching sacred commentary…" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm leading-relaxed text-foreground", children: text || "Commentary available for key verses. Select one of the featured verses above." })
      ]
    }
  );
}
function CommentaryPage() {
  const { addPoints } = usePoints();
  const { speak, stop, isSpeaking } = useTTS();
  const [selectedVerseId, setSelectedVerseId] = reactExports.useState("2.47");
  const [commentary, setCommentary] = reactExports.useState(
    STATIC_COMMENTARY["2.47"] ?? null
  );
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("shankaracharya");
  const verse = VERSE_BY_ID[selectedVerseId] ?? null;
  const fetchCommentary = reactExports.useCallback(async (verseId) => {
    setIsLoading(true);
    setCommentary(null);
    await new Promise((resolve) => setTimeout(resolve, 300));
    const staticData = STATIC_COMMENTARY[verseId];
    setCommentary(staticData ?? null);
    setIsLoading(false);
  }, []);
  const handleVerseChange = (verseId) => {
    setSelectedVerseId(verseId);
    fetchCommentary(verseId);
    addPoints("reading", 1);
  };
  const handleSpeak = () => {
    if (!verse) return;
    if (isSpeaking) stop();
    else
      speak(
        verse.sanskrit,
        "hi",
        "male",
        0.7,
        () => speak(verse.english, "en", "male", 0.8)
      );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ आचार्य दर्शनम् ॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Acharya Darshanam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm italic", children: "Scholars' Vision — Three Great Commentators on the Gita" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "max-w-2xl mx-auto mb-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold uppercase tracking-widest mb-3",
              style: { color: "oklch(var(--accent) / 0.7)" },
              children: "✦ Select a Key Verse"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                "data-ocid": "commentary.verse_select",
                value: selectedVerseId,
                onChange: (e) => handleVerseChange(e.target.value),
                className: "flex-1 min-w-0 rounded border bg-card/80 px-3 py-2.5 font-body text-sm text-foreground",
                style: { borderColor: "oklch(var(--accent) / 0.35)" },
                children: KEY_VERSES.map((id) => {
                  const v = VERSE_BY_ID[id];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: id, children: [
                    id,
                    " ",
                    v ? `— ${v.english.slice(0, 45)}…` : ""
                  ] }, id);
                })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "commentary.listen_button",
                onClick: handleSpeak,
                className: "transition-smooth font-body italic text-sm",
                style: {
                  padding: "0.6rem 1.2rem",
                  border: "1px solid oklch(var(--accent) / 0.35)",
                  borderRadius: "2px",
                  background: isSpeaking ? "oklch(var(--accent) / 0.1)" : "transparent",
                  color: "oklch(var(--foreground))",
                  whiteSpace: "nowrap"
                },
                children: isSpeaking ? "⏹ Stop" : "▶ Listen"
              }
            )
          ] })
        ] })
      }
    ),
    verse && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 },
        className: "max-w-2xl mx-auto mb-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 text-center",
            style: {
              background: "radial-gradient(ellipse at top, oklch(0.95 0.08 72) 0%, oklch(0.91 0.07 68) 100%)",
              border: "1px solid oklch(var(--accent) / 0.35)",
              borderRadius: "3px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-verse-number block mb-3", children: [
                "Chapter ",
                verse.chapter,
                ", Verse ",
                verse.verse
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sanskrit text-center",
                  style: { fontSize: "clamp(0.95rem, 2.5vw, 1.3rem)" },
                  children: verse.sanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body italic text-muted-foreground text-sm mb-3",
                  style: { letterSpacing: "0.02em" },
                  children: verse.transliteration
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornate-rule my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-sm", children: "❧" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-translation text-center", children: verse.english }),
              verse.hindi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground italic mt-2", children: verse.hindi })
            ]
          }
        )
      },
      verse.id
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4 sm:hidden", children: ["shankaracharya", "ramanuja", "tilak"].map((school) => {
        const d = SCHOOL_DATA[school];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `commentary.${school}_tab`,
            onClick: () => setActiveTab(school),
            className: "flex-1 py-2 font-display italic text-xs font-semibold transition-smooth",
            style: {
              border: `1px solid ${d.borderColor}`,
              borderRadius: "2px",
              background: activeTab === school ? d.bgColor : "transparent",
              color: activeTab === school ? d.accentColor : "oklch(var(--muted-foreground))"
            },
            children: [
              d.icon,
              " ",
              school === "shankaracharya" ? "Shankara" : school === "ramanuja" ? "Ramanuja" : "Tilak"
            ]
          },
          school
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:grid sm:grid-cols-3 gap-4", children: ["shankaracharya", "ramanuja", "tilak"].map((school) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommentaryCard,
            {
              school,
              text: (commentary == null ? void 0 : commentary[school]) ?? "",
              isLoading
            }
          )
        },
        `${school}-${selectedVerseId}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 12 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -12 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommentaryCard,
            {
              school: activeTab,
              text: (commentary == null ? void 0 : commentary[activeTab]) ?? "",
              isLoading
            }
          )
        },
        activeTab + selectedVerseId
      ) }) }),
      !commentary && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center mt-6 p-4 sacred-card",
          "data-ocid": "commentary.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground italic text-sm", children: "Commentary available for key verses only. Select one of the featured verses above." })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-display italic text-muted-foreground text-xs",
        style: { letterSpacing: "0.2em" },
        children: "॥ यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः ॥"
      }
    ) })
  ] });
}
export {
  CommentaryPage
};
