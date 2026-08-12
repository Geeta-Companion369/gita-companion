import { c as createLucideIcon, a as useParams, u as useNavigate, b as useLanguage, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, d as Link, e as LANGUAGE_LABELS, B as BookOpen } from "./index-DqMoqjqS.js";
import { W as WordIntelligencePopup, a as WORD_INTELLIGENCE } from "./word-intelligence-vVTliKi4.js";
import { S as Skeleton } from "./skeleton-C4XI8Hyc.js";
import { u as useChapters } from "./use-chapters-BoO0tWpD.js";
import { u as useLastRead } from "./use-last-read-B0FsH367.js";
import { u as useVersesByChapter } from "./use-verse-Dwfjyjfx.js";
import "./x-Caryl2xQ.js";
import "./utils-2v2HxlWs.js";
import "./useQuery-DTb8J6Ym.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
];
const Languages = createLucideIcon("languages", __iconNode);
const ROMAN = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII"
];
const GRAMMAR_LABELS = {
  karma: "noun",
  dharma: "noun",
  yoga: "noun",
  atman: "noun",
  brahman: "noun",
  moksha: "noun",
  arjuna: "name",
  krishna: "name",
  bhakti: "noun",
  jnana: "noun",
  sadhana: "noun",
  sattva: "noun",
  rajas: "noun",
  tamas: "noun",
  ahimsa: "noun",
  manas: "noun",
  buddhi: "noun",
  ahamkara: "noun",
  prana: "noun",
  mantra: "noun",
  tapas: "noun",
  seva: "noun",
  sankalpa: "noun",
  vairagya: "noun",
  sukha: "adj",
  duhkha: "adj",
  nitya: "adj",
  anitya: "adj",
  shanti: "noun"
};
function getGrammarLabel(word) {
  const lower = word.toLowerCase().replace(/[āīūṛṝḷṃḥṭḍṇśṣ]/g, (c) => c);
  for (const [key, label] of Object.entries(GRAMMAR_LABELS)) {
    if (lower.includes(key)) return label;
  }
  if (word.endsWith("ti") || word.endsWith("tu")) return "verb";
  if (word.endsWith("ḥ") || word.endsWith("m")) return "noun";
  if (word.length <= 3) return "particle";
  return "word";
}
const EMOTIONAL_KEYWORDS = [
  "karma",
  "dharma",
  "yoga",
  "brahman",
  "ātman",
  "atman",
  "moksha",
  "bhakti",
  "śānti",
  "shanti",
  "jñāna",
  "jnana",
  "satya",
  "ahiṃsā",
  "ahimsa"
];
function isEmotionalWord(word) {
  const lower = word.toLowerCase();
  return EMOTIONAL_KEYWORDS.some((kw) => lower.includes(kw));
}
function splitSanskritWords(transliteration) {
  return transliteration.split(/[\s|]+/).map((w) => w.replace(/[,;।॥]/g, "").trim()).filter((w) => w.length > 0);
}
function findWordIntelligence(iast) {
  const lower = iast.toLowerCase().replace(/[āīūṛṝḷṃḥṭḍṇśṣ]/g, (c) => c);
  for (const [key, entry] of Object.entries(WORD_INTELLIGENCE)) {
    if (lower.includes(key) || key.includes(lower.slice(0, 4))) {
      return entry;
    }
  }
  return null;
}
function WordByWordRow({ verse, onWordClick }) {
  const words = splitSanskritWords(verse.transliteration);
  const devanagariWords = verse.sanskritText.split(/[\s|।॥]+/).filter((w) => w.trim().length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 pt-3 pb-1", children: words.map((word, idx) => {
    const devanagari = devanagariWords[idx] ?? word;
    const grammarLabel = getGrammarLabel(word);
    const emotional = isEmotionalWord(word);
    const intel = findWordIntelligence(word);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "group flex flex-col items-center gap-0.5 px-2.5 py-2 rounded-sm transition-smooth cursor-pointer text-center",
        style: {
          background: emotional ? "oklch(0.72 0.28 52 / 0.08)" : "oklch(0.88 0.07 66 / 0.5)",
          border: emotional ? "1px solid oklch(0.72 0.28 52 / 0.35)" : "1px solid oklch(0.78 0.08 56 / 0.4)",
          minWidth: 52
        },
        onClick: (e) => {
          if (intel) {
            const rect = e.currentTarget.getBoundingClientRect();
            onWordClick(word, intel, rect);
          }
        },
        "aria-label": intel ? `${devanagari} — tap for word intelligence` : devanagari,
        "data-ocid": `word-row.item.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body leading-none",
              lang: "sa",
              style: {
                fontSize: "1.15rem",
                fontWeight: 600,
                color: emotional ? "oklch(0.58 0.22 28)" : "oklch(0.72 0.28 52)"
              },
              children: devanagari
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body italic leading-none",
              style: { fontSize: "0.65rem", color: "oklch(0.52 0.12 46)" },
              children: word
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body uppercase leading-none tracking-wide",
              style: {
                fontSize: "0.52rem",
                color: "oklch(0.62 0.08 50)",
                letterSpacing: "0.08em"
              },
              children: grammarLabel
            }
          ),
          intel && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body italic leading-none",
              style: {
                fontSize: "0.6rem",
                color: "oklch(0.30 0.06 40)",
                maxWidth: 80,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: intel.meaning.split(";")[0].split(",")[0].trim()
            }
          ),
          intel && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-accent/40 group-hover:text-accent/70 transition-smooth",
              style: { fontSize: "0.5rem" },
              children: "✦"
            }
          )
        ]
      },
      `${verse.id}-w-${idx}`
    );
  }) });
}
const CHAPTER_THEMES = [
  "Arjuna's grief and confusion on the battlefield",
  "Krishna's teaching on the eternal soul and duty",
  "The path of selfless action (Karma Yoga)",
  "The path of divine knowledge (Jnana Yoga)",
  "Renunciation of action in knowledge",
  "The path of meditation (Dhyana Yoga)",
  "Knowledge of the Absolute",
  "Attaining the Supreme",
  "The most confidential knowledge",
  "The opulences of the Absolute",
  "The universal form of Krishna",
  "Devotional service (Bhakti Yoga)",
  "Nature, the enjoyer, and consciousness",
  "The three modes of material nature",
  "The Supreme Person (Purushottama Yoga)",
  "The divine and demoniac natures",
  "The divisions of faith",
  "Conclusion — the perfection of renunciation"
];
const CHAPTER_VERSE_COUNTS = [
  47,
  72,
  43,
  42,
  29,
  47,
  30,
  28,
  34,
  42,
  55,
  20,
  35,
  27,
  20,
  24,
  28,
  78
];
function ChapterIndex({
  chapters,
  currentChapterId,
  isLoading,
  lastRead
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        "data-ocid": "chapter-index.toggle",
        className: "w-full flex items-center justify-between px-5 py-4 rounded-sm mb-1 transition-smooth group",
        style: {
          background: "oklch(0.92 0.06 56 / 0.45)",
          border: "1px solid oklch(var(--accent)/0.25)"
        },
        "aria-expanded": open,
        "aria-controls": "chapter-index-panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm italic text-accent font-bold", children: "📖 18 Adhyāyas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-muted-foreground hidden sm:block", children: "Select any chapter" }),
            lastRead && !open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/verse/$chapterId/$verseId",
                params: {
                  chapterId: String(lastRead.chapterId),
                  verseId: lastRead.verseId
                },
                className: "font-body text-xs italic text-accent/70 hover:text-accent underline-offset-2 underline transition-smooth ml-2",
                onClick: (e) => e.stopPropagation(),
                "data-ocid": "chapter-index.continue-reading",
                children: [
                  "← Resume Ch. ",
                  lastRead.chapterId
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs italic text-muted-foreground/60", children: [
              "Chapter ",
              currentChapterId,
              " / 18"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body text-sm text-accent/60 group-hover:text-accent transition-smooth",
                style: {
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-block",
                  transition: "transform 0.25s"
                },
                "aria-hidden": true,
                children: "↓"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        id: "chapter-index-panel",
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3 },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-sm px-4 py-5",
            style: {
              background: "oklch(0.92 0.06 56 / 0.35)",
              border: "1px solid oklch(var(--accent)/0.18)"
            },
            "data-ocid": "chapter-index.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-center text-muted-foreground tracking-widest uppercase mb-5", children: "✦ Select an Adhyāya to begin reading ✦" }),
              isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Array.from({ length: 18 }, (_, i) => `chi-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-20 bg-muted/30 rounded animate-pulse"
                },
                k
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                  "data-ocid": "chapter-index.grid",
                  children: (chapters ?? []).map((ch, i) => {
                    const isCurrent = ch.id === currentChapterId;
                    const verseCount = CHAPTER_VERSE_COUNTS[i] ?? 0;
                    const theme = CHAPTER_THEMES[i] ?? "";
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: i * 0.02, duration: 0.3 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/chapter/$id",
                            params: { id: String(ch.id) },
                            onClick: () => setOpen(false),
                            "data-ocid": `chapter-index.item.${ch.id}`,
                            className: "group flex flex-col p-3 rounded-sm transition-smooth hover:shadow-warm-glow",
                            style: {
                              background: isCurrent ? "oklch(var(--accent)/0.12)" : "oklch(0.92 0.06 56 / 0.4)",
                              border: isCurrent ? "1.5px solid oklch(var(--accent)/0.55)" : "1px solid oklch(var(--accent)/0.15)"
                            },
                            "aria-current": isCurrent ? "page" : void 0,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "font-display text-xs italic font-bold",
                                    style: {
                                      color: isCurrent ? "oklch(var(--accent))" : "oklch(var(--accent)/0.65)"
                                    },
                                    children: ROMAN[ch.id]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[10px] text-muted-foreground/60 italic", children: [
                                  "Ch. ",
                                  ch.id
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-body text-[11px] italic font-semibold mb-0.5 group-hover:text-accent transition-smooth leading-tight",
                                  style: {
                                    color: isCurrent ? "oklch(var(--foreground))" : "oklch(var(--foreground)/0.85)"
                                  },
                                  children: ch.sanskritName ?? ch.name
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-muted-foreground leading-tight mb-1", children: ch.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[9px] italic text-muted-foreground/55 leading-tight line-clamp-2 mb-1", children: theme }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-[9px] text-accent/60", children: [
                                verseCount,
                                " verses"
                              ] })
                            ]
                          }
                        )
                      },
                      ch.id
                    );
                  })
                }
              )
            ]
          }
        )
      },
      "chapter-index"
    ) })
  ] });
}
function ChapterPage() {
  const { id } = useParams({ from: "/chapter/$id" });
  const navigate = useNavigate();
  const chapterId = Number(id);
  const { data: chapters } = useChapters();
  const { data: verses, isLoading } = useVersesByChapter(chapterId);
  const { language, setLanguage } = useLanguage();
  const { lastRead } = useLastRead();
  const [jumpValue, setJumpValue] = reactExports.useState("");
  const [jumpError, setJumpError] = reactExports.useState(false);
  const [stickyVisible, setStickyVisible] = reactExports.useState(false);
  const [expandedWords, setExpandedWords] = reactExports.useState(
    {}
  );
  const [wordPopup, setWordPopup] = reactExports.useState(null);
  const headerRef = reactExports.useRef(null);
  const verseRefs = reactExports.useRef({});
  const chapter = chapters == null ? void 0 : chapters.find((c) => c.id === chapterId);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      setStickyVisible(headerRef.current.getBoundingClientRect().bottom < 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleJump(e) {
    e.preventDefault();
    const num = Number(jumpValue.trim());
    if (!num || !verses) {
      setJumpError(true);
      return;
    }
    const target = verses.find((v) => v.verseNumber === num);
    if (!target) {
      setJumpError(true);
      return;
    }
    setJumpError(false);
    const el = verseRefs.current[target.id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      void navigate({
        to: "/verse/$chapterId/$verseId",
        params: { chapterId: id, verseId: target.id }
      });
    }
    setJumpValue("");
  }
  function toggleWordRow(verseId) {
    setExpandedWords((prev) => ({ ...prev, [verseId]: !prev[verseId] }));
  }
  function handleWordClick(word, intel, rect) {
    setWordPopup({ word, intel, rect });
  }
  function verseToRowShape(v) {
    return {
      id: v.id,
      transliteration: v.transliteration,
      sanskritText: v.sanskritText,
      moodTags: []
    };
  }
  const languages = [
    "english",
    "hindi",
    "sanskrit",
    "marathi",
    "gujarati"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: stickyVisible && chapter && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { y: -56, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -56, opacity: 0 },
        transition: { duration: 0.25 },
        className: "fixed top-0 left-0 right-0 z-50 border-b border-border/60 shadow-sacred px-5 py-2.5 flex items-center justify-between gap-4",
        style: {
          background: "oklch(0.91 0.08 57 / 0.97)",
          backdropFilter: "blur(12px)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm italic text-accent/70 flex-shrink-0", children: ROMAN[chapterId] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground italic truncate leading-tight", children: chapter.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body italic text-accent/70 truncate leading-tight", children: chapter.sanskritName })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
            chapterId > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/chapter/$id",
                params: { id: String(chapterId - 1) },
                className: "font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth",
                "aria-label": "Previous chapter",
                children: [
                  "← Ch. ",
                  chapterId - 1
                ]
              }
            ),
            chapterId < 18 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/chapter/$id",
                params: { id: String(chapterId + 1) },
                className: "font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth",
                "aria-label": "Next chapter",
                children: [
                  "Ch. ",
                  chapterId + 1,
                  " →"
                ]
              }
            )
          ] })
        ]
      },
      "sticky-header"
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block font-body text-xs italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 mb-6",
        children: "← Return to Home"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChapterIndex,
      {
        chapters,
        currentChapterId: chapterId,
        isLoading: !chapters,
        lastRead
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref: headerRef,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "manuscript-page rounded-sm px-8 md:px-14 py-12 mb-8 relative text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-25",
              "aria-hidden": true,
              style: {
                background: "radial-gradient(ellipse at 0 0, oklch(0.18 0.02 48 / 0.3) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-25",
              "aria-hidden": true,
              style: {
                background: "radial-gradient(ellipse at 100% 100%, oklch(0.18 0.02 48 / 0.3) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground uppercase tracking-[0.35em] mb-3", children: "Adhyāya · Chapter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-primary/20 font-bold leading-none select-none mb-2",
              style: { fontSize: "7rem", fontStyle: "italic" },
              "aria-hidden": true,
              children: ROMAN[chapterId]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xl italic text-accent mb-2 leading-snug", children: (chapter == null ? void 0 : chapter.sanskritName) ?? "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header mb-0", style: { marginBottom: 0 }, children: (chapter == null ? void 0 : chapter.name) ?? `Chapter ${chapterId}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mt-6 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-accent/50 text-xl select-none", children: "✦ ✦ ✦" }) }),
          (chapter == null ? void 0 : chapter.summary) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-muted-foreground leading-loose text-[1.05rem] max-w-xl mx-auto text-left",
              style: { textAlign: "justify" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ornate-initial", children: chapter.summary[0] }),
                chapter.summary.slice(1)
              ]
            }
          ),
          verses && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs italic text-muted-foreground/60 mt-5 tracking-widest", children: [
            "— Contains ",
            verses.length,
            " sacred verses"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-8 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-body text-xs italic text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "w-3.5 h-3.5 text-accent/60 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/70", children: "Translation:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: language,
            onChange: (e) => setLanguage(e.target.value),
            className: "appearance-none bg-transparent font-body text-xs italic text-accent cursor-pointer focus:outline-none border-b border-accent/30 pb-0.5",
            "aria-label": "Select language",
            "data-ocid": "language-picker",
            children: languages.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: lang, children: LANGUAGE_LABELS[lang] }, lang))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleJump, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-muted-foreground/70", children: "See verse:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: 1,
            value: jumpValue,
            onChange: (e) => {
              setJumpValue(e.target.value);
              setJumpError(false);
            },
            placeholder: "no.",
            className: [
              "w-14 bg-transparent font-body text-xs italic text-foreground border-b pb-0.5 focus:outline-none transition-smooth",
              jumpError ? "border-destructive text-destructive" : "border-accent/30 focus:border-accent/70"
            ].join(" "),
            "aria-label": "Jump to verse number",
            "data-ocid": "verse-jump-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "font-body text-xs italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5",
            "data-ocid": "verse-jump-btn",
            children: "Go →"
          }
        )
      ] })
    ] }),
    jumpError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body italic text-destructive -mt-5 mb-5", children: "That verse is not found in this chapter." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: Array.from({ length: 4 }, (_, i) => `skel-v-${i}`).map((skid) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-none" }, skid)) }) : verses && verses.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page rounded-sm px-6 md:px-10 py-10 space-y-0", children: [
      verses.map((verse, i) => {
        const wordRowOpen = expandedWords[verse.id] ?? false;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ref: (el) => {
              verseRefs.current[verse.id] = el;
            },
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true, margin: "-40px" },
            transition: { delay: Math.min(0.05 * i, 0.3), duration: 0.5 },
            className: "relative group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/verse/$chapterId/$verseId",
                  params: {
                    chapterId: String(verse.chapterId),
                    verseId: verse.id
                  },
                  className: "block py-8",
                  "data-ocid": `verse-row-${verse.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 md:gap-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 text-right pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-display text-xs text-accent/50 group-hover:text-accent/80 transition-smooth",
                        style: {
                          fontStyle: "italic",
                          letterSpacing: "0.05em"
                        },
                        children: [
                          verse.chapterId,
                          ".",
                          verse.verseNumber
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-foreground whitespace-pre-line leading-loose mb-4",
                          lang: "sa",
                          style: {
                            fontSize: "1.35rem",
                            letterSpacing: "0.04em",
                            fontWeight: 500
                          },
                          children: verse.sanskritText
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-accent/40 text-lg mb-3 select-none",
                          "aria-label": `Verse ${verse.verseNumber}`,
                          children: [
                            "॥ ",
                            verse.verseNumber,
                            " ॥"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body italic text-sm text-accent/65 leading-relaxed whitespace-pre-line mb-4", children: verse.transliteration }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-muted-foreground group-hover:text-foreground/80 transition-smooth leading-loose",
                          style: { fontSize: "0.97rem" },
                          children: language === "hindi" && verse.hindiTranslation ? verse.hindiTranslation : verse.englishTranslation
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground/40 group-hover:text-accent/50 transition-smooth mt-3", children: "— Open for full commentary" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-[3.75rem] md:ml-[4.5rem] pb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleWordRow(verse.id),
                    className: "flex items-center gap-1.5 font-body text-xs italic text-muted-foreground/55 hover:text-accent/80 transition-smooth",
                    "aria-expanded": wordRowOpen,
                    "aria-controls": `word-row-${verse.id}`,
                    "data-ocid": `word-by-word.toggle.${verse.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        wordRowOpen ? "Hide" : "Word-by-Word",
                        " Sanskrit"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "transition-smooth",
                          style: {
                            transform: wordRowOpen ? "rotate(180deg)" : "rotate(0deg)",
                            display: "inline-block"
                          },
                          "aria-hidden": true,
                          children: "↓"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: wordRowOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    id: `word-row-${verse.id}`,
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.28 },
                    style: { overflow: "hidden" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 mb-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-body text-xs italic text-muted-foreground/50", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "inline-block w-2.5 h-2.5 rounded-sm border",
                              style: {
                                background: "oklch(0.72 0.28 52 / 0.08)",
                                borderColor: "oklch(0.72 0.28 52 / 0.35)"
                              }
                            }
                          ),
                          "Spiritually significant"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-muted-foreground/40", children: "✦ = tap for deep meaning" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        WordByWordRow,
                        {
                          verse: verseToRowShape(verse),
                          onWordClick: handleWordClick
                        }
                      )
                    ]
                  },
                  `wr-${verse.id}`
                ) })
              ] }),
              i < verses.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 py-1", "aria-hidden": true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 h-px",
                    style: {
                      background: "linear-gradient(to right, transparent, oklch(var(--accent) / 0.20), transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/30 text-sm select-none", children: "❦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 h-px",
                    style: {
                      background: "linear-gradient(to left, transparent, oklch(var(--accent) / 0.20), transparent)"
                    }
                  }
                )
              ] })
            ]
          },
          verse.id
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-8 pb-2 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent/40 text-2xl select-none", "aria-hidden": true, children: "❦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs italic text-muted-foreground/50 tracking-widest", children: [
          "iti śrīmad bhagavad-gītāsu — adhyāya ",
          ROMAN[chapterId]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground/40 uppercase tracking-[0.2em]", children: [
          "End of Chapter ",
          chapterId
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "manuscript-page rounded-sm px-8 py-16 text-center",
        "data-ocid": "empty-chapter-verses",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "om-symbol mb-4", "aria-hidden": true, children: "ॐ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg italic text-muted-foreground mb-2", children: "More verses coming soon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground/70 mb-6 max-w-xs mx-auto", children: "Explore other chapters or seek Krishna's guidance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/guidance",
              className: "font-body text-sm italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5",
              children: "Ask Krishna →"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-10 pb-2", children: [
      chapterId > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/chapter/$id",
          params: { id: String(chapterId - 1) },
          className: "font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5",
          "data-ocid": "prev-chapter",
          children: [
            "← Chapter ",
            chapterId - 1,
            " · ",
            ROMAN[chapterId - 1]
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      chapterId < 18 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/chapter/$id",
          params: { id: String(chapterId + 1) },
          className: "font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5",
          "data-ocid": "next-chapter",
          children: [
            "Chapter ",
            chapterId + 1,
            " · ",
            ROMAN[chapterId + 1],
            " →"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: wordPopup && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.92 },
        transition: { duration: 0.18 },
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { pointerEvents: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          WordIntelligencePopup,
          {
            word: wordPopup.word,
            intelligence: wordPopup.intel,
            relatedVerses: [],
            anchorRect: wordPopup.rect,
            onClose: () => setWordPopup(null)
          }
        ) })
      },
      "word-popup"
    ) })
  ] });
}
export {
  ChapterPage
};
