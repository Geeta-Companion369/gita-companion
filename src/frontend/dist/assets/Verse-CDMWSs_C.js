import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, b as useParams, u as useNavigate, d as useLanguage, f as useBookmarks, g as useTTS, m as motion, a as Link, e as LANGUAGE_LABELS, S as Share2, B as BookOpen, A as AnimatePresence, h as ue } from "./index-CodWPqWB.js";
import { W as WordIntelligencePopup, a as WORD_INTELLIGENCE } from "./word-intelligence-KHXbxV6V.js";
import { S as Skeleton } from "./skeleton-COolhl56.js";
import { u as useChapters } from "./use-chapters-cZFeA1qb.js";
import { u as useLastRead } from "./use-last-read-oLlMwdh7.js";
import { u as usePoints } from "./use-points-BR8pxHqh.js";
import { a as useVerse, b as useAdjacentVerses } from "./use-verse-L5fLysPW.js";
import "./x-D4g62gr5.js";
import "./utils-2v2HxlWs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
];
const BookmarkCheck = createLucideIcon("bookmark-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
];
const Bookmark = createLucideIcon("bookmark", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
const Volume2 = createLucideIcon("volume-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
const VolumeX = createLucideIcon("volume-x", __iconNode);
const TRIGGER_THRESHOLD = 0.28;
const MIN_DRAG_PX = 10;
function PageCurl({
  children,
  onNextPage,
  onPrevPage,
  canGoNext,
  canGoPrev
}) {
  const containerRef = reactExports.useRef(null);
  const dragRef = reactExports.useRef({
    startX: 0,
    startY: 0,
    tracking: false,
    side: null
  });
  const [curlProgress, setCurlProgress] = reactExports.useState(0);
  const [curlSide, setCurlSide] = reactExports.useState(null);
  const [isSnapping, setIsSnapping] = reactExports.useState(false);
  const [isTurning, setIsTurning] = reactExports.useState(false);
  const resetCurl = reactExports.useCallback((animated) => {
    setIsSnapping(animated);
    setCurlProgress(0);
    setCurlSide(null);
    setTimeout(
      () => {
        setIsSnapping(false);
        dragRef.current.tracking = false;
        dragRef.current.side = null;
      },
      animated ? 320 : 0
    );
  }, []);
  const completeTurn = reactExports.useCallback(
    (side) => {
      setIsTurning(true);
      setIsSnapping(true);
      setCurlProgress(1);
      setTimeout(() => {
        setIsTurning(false);
        setCurlProgress(0);
        setCurlSide(null);
        setIsSnapping(false);
        dragRef.current.tracking = false;
        dragRef.current.side = null;
        if (side === "right" && canGoNext) onNextPage();
        else if (side === "left" && canGoPrev) onPrevPage();
      }, 350);
    },
    [canGoNext, canGoPrev, onNextPage, onPrevPage]
  );
  const handlePointerDown = reactExports.useCallback(
    (e) => {
      if (e.pointerType === "touch" && !e.isPrimary) return;
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        tracking: true,
        side: null
      };
    },
    []
  );
  const handlePointerMove = reactExports.useCallback(
    (e) => {
      var _a;
      if (!dragRef.current.tracking || isTurning) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      if (Math.abs(dy) > Math.abs(dx) * 1.8 && Math.abs(dx) < 30) {
        dragRef.current.tracking = false;
        resetCurl(false);
        return;
      }
      if (Math.abs(dx) < MIN_DRAG_PX) return;
      const containerWidth = ((_a = containerRef.current) == null ? void 0 : _a.offsetWidth) ?? 400;
      if (!dragRef.current.side) {
        if (dx < 0 && canGoNext) {
          dragRef.current.side = "right";
          setCurlSide("right");
        } else if (dx > 0 && canGoPrev) {
          dragRef.current.side = "left";
          setCurlSide("left");
        } else {
          return;
        }
      }
      e.preventDefault();
      const rawProgress = Math.abs(dx) / containerWidth;
      const progress = Math.min(rawProgress, 1);
      setCurlProgress(progress);
    },
    [isTurning, canGoNext, canGoPrev, resetCurl]
  );
  const handlePointerUp = reactExports.useCallback(
    (e) => {
      var _a;
      if (!dragRef.current.tracking || isTurning) return;
      const dx = e.clientX - dragRef.current.startX;
      const containerWidth = ((_a = containerRef.current) == null ? void 0 : _a.offsetWidth) ?? 400;
      const ratio = Math.abs(dx) / containerWidth;
      const side = dragRef.current.side;
      if (ratio >= TRIGGER_THRESHOLD && side) {
        completeTurn(side);
      } else {
        resetCurl(true);
      }
    },
    [isTurning, completeTurn, resetCurl]
  );
  const handlePointerCancel = reactExports.useCallback(() => {
    resetCurl(true);
  }, [resetCurl]);
  reactExports.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const opts = { passive: false };
    const noOp = () => {
    };
    el.addEventListener("touchstart", noOp, opts);
    return () => el.removeEventListener("touchstart", noOp);
  }, []);
  const curlSize = Math.min(80 + curlProgress * 120, 200);
  const opacity = Math.min(curlProgress * 2.5, 1);
  const shadowBlur = curlProgress * 28;
  const showNextHint = canGoNext && curlProgress === 0 && !curlSide;
  const showPrevHint = canGoPrev && curlProgress === 0 && !curlSide;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative select-none",
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
      style: { touchAction: curlSide ? "none" : "pan-y" },
      "data-ocid": "page-curl.canvas_target",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              transition: isTurning ? "opacity 0.28s ease" : void 0,
              opacity: isTurning ? 1 - curlProgress * 0.4 : 1
            },
            children
          }
        ),
        curlSide === "right" && curlProgress > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": true,
            style: {
              position: "absolute",
              bottom: 0,
              right: 0,
              width: curlSize,
              height: curlSize,
              pointerEvents: "none",
              zIndex: 20
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: curlSize,
                    height: curlSize,
                    background: `radial-gradient(ellipse at 100% 100%, oklch(0.18 0.06 44 / ${0.45 * curlProgress}) 0%, transparent 70%)`,
                    filter: `blur(${shadowBlur * 0.4}px)`,
                    transform: "translate(8px, 8px)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: curlSize,
                    height: curlSize,
                    background: "linear-gradient(225deg, oklch(0.98 0.06 78) 0%, oklch(0.94 0.09 68) 40%, oklch(0.88 0.11 60) 100%)",
                    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
                    boxShadow: `${-shadowBlur * 0.5}px ${-shadowBlur * 0.5}px ${shadowBlur}px oklch(0.18 0.06 44 / 0.4)`,
                    opacity,
                    transform: `perspective(400px) rotateX(${curlProgress * 6}deg) rotateY(${curlProgress * -8}deg)`,
                    transformOrigin: "right bottom",
                    transition: isSnapping ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='0.06'/%3E%3C/svg%3E")`,
                          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          left: 0,
                          height: 2,
                          background: "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.6), transparent)"
                        }
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        curlSide === "left" && curlProgress > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": true,
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: curlSize,
              height: curlSize,
              pointerEvents: "none",
              zIndex: 20
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: curlSize,
                    height: curlSize,
                    background: `radial-gradient(ellipse at 0% 100%, oklch(0.18 0.06 44 / ${0.4 * curlProgress}) 0%, transparent 70%)`,
                    filter: `blur(${shadowBlur * 0.4}px)`,
                    transform: "translate(-8px, 8px)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: curlSize,
                    height: curlSize,
                    background: "linear-gradient(315deg, oklch(0.98 0.06 78) 0%, oklch(0.94 0.09 68) 40%, oklch(0.88 0.11 60) 100%)",
                    clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
                    boxShadow: `${shadowBlur * 0.5}px ${-shadowBlur * 0.5}px ${shadowBlur}px oklch(0.18 0.06 44 / 0.35)`,
                    opacity,
                    transform: `perspective(400px) rotateX(${curlProgress * 6}deg) rotateY(${curlProgress * 8}deg)`,
                    transformOrigin: "left bottom",
                    transition: isSnapping ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
                  }
                }
              )
            ]
          }
        ),
        showPrevHint && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none",
            style: {
              width: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.22
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-accent",
                style: { fontSize: "1.2rem" },
                children: "‹"
              }
            )
          }
        ),
        showNextHint && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none",
            style: {
              width: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.22
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-accent",
                style: { fontSize: "1.2rem" },
                children: "›"
              }
            )
          }
        ),
        curlProgress > 0 && curlSide && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent ${curlSide === "right" ? "0%" : `${(1 - curlProgress) * 100}%`}, oklch(0.72 0.28 52 / ${opacity * 0.7}) ${curlSide === "right" ? `${curlProgress * 100}%` : "100%"}, transparent 100%)`,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  );
}
const KRISHNA_MESSAGES = {
  "2-47": "Act without attachment to results. Your duty is to act rightly — the outcome belongs to the Divine.",
  "2-20": "Fear not, dear one. That which you call 'self' was never born and shall never die.",
  "6-26": "The wandering mind is not your enemy — each gentle return is the very practice of yoga.",
  "9-22": "I am with you always. Surrender your worries to Me, and I shall provide what you need.",
  "18-66": "Let go of all striving. Simply come to Me. I shall free you from all that binds you.",
  "4-7": "When darkness seems to rise, remember — the Divine always comes to restore the light.",
  "6-5": "You carry within you the power of your own liberation. The mind is both the key and the lock.",
  "12-13": "Cultivate compassion for all beings. This is the highest devotion.",
  "3-27": "Release the ego's claim of 'I am the doer.' Watch, and let grace flow through you.",
  "9-26": "The simplest act of love — a leaf, a flower — received with devotion is the greatest offering."
};
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
const EMOTIONAL_KEYWORDS = [
  "karma",
  "dharma",
  "yoga",
  "brahman",
  "atman",
  "moksha",
  "bhakti",
  "shanti",
  "jnana",
  "satya",
  "ahimsa"
];
function isEmotionalWord(word) {
  const lower = word.toLowerCase();
  return EMOTIONAL_KEYWORDS.some((kw) => lower.includes(kw));
}
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
  shanti: "noun",
  sattva: "noun",
  rajas: "noun",
  tamas: "noun",
  prana: "noun",
  mantra: "noun"
};
function getGrammarLabel(word) {
  const lower = word.toLowerCase();
  for (const [key, label] of Object.entries(GRAMMAR_LABELS)) {
    if (lower.includes(key)) return label;
  }
  if (word.endsWith("ti") || word.endsWith("tu")) return "verb";
  if (word.endsWith("ḥ") || word.endsWith("m")) return "noun";
  if (word.length <= 3) return "particle";
  return "word";
}
function findWordIntelligence(iast) {
  const lower = iast.toLowerCase();
  for (const [key, entry] of Object.entries(WORD_INTELLIGENCE)) {
    if (lower.includes(key) || key.includes(lower.slice(0, 4))) {
      return entry;
    }
  }
  return null;
}
function splitToWords(transliteration) {
  return transliteration.split(/[\s|]+/).map((w) => w.replace(/[,;।॥]/g, "").trim()).filter((w) => w.length > 0);
}
function WordByWordSection({
  sanskritText,
  transliteration,
  onWordClick
}) {
  const iastWords = splitToWords(transliteration);
  const devanagariWords = sanskritText.split(/[\s|।॥]+/).filter((w) => w.trim().length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-body text-xs italic text-muted-foreground/55", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block w-2.5 h-2.5 rounded-sm border",
            style: {
              background: "oklch(0.72 0.28 52 / 0.1)",
              borderColor: "oklch(0.72 0.28 52 / 0.4)"
            }
          }
        ),
        "Spiritually significant"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-muted-foreground/40", children: "✦ tap = deep meaning" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: iastWords.map((word, idx) => {
      const devanagari = devanagariWords[idx] ?? word;
      const grammar = getGrammarLabel(word);
      const emotional = isEmotionalWord(word);
      const intel = findWordIntelligence(word);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "group flex flex-col items-center gap-0.5 px-2.5 py-2 rounded-sm transition-smooth",
          style: {
            background: emotional ? "oklch(0.72 0.28 52 / 0.09)" : "oklch(0.88 0.07 66 / 0.5)",
            border: emotional ? "1px solid oklch(0.72 0.28 52 / 0.35)" : "1px solid oklch(0.78 0.08 56 / 0.4)",
            minWidth: 52,
            cursor: intel ? "pointer" : "default"
          },
          onClick: (e) => {
            if (intel) {
              const rect = e.currentTarget.getBoundingClientRect();
              onWordClick(word, intel, rect);
            }
          },
          "aria-label": intel ? `${devanagari} — tap for word intelligence` : devanagari,
          "data-ocid": `verse-word.item.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body leading-none",
                lang: "sa",
                style: {
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: emotional ? "oklch(0.55 0.22 28)" : "oklch(0.68 0.26 52)"
                },
                children: devanagari
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body italic leading-none",
                style: { fontSize: "0.67rem", color: "oklch(0.50 0.12 46)" },
                children: word
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body leading-none tracking-wide",
                style: {
                  fontSize: "0.52rem",
                  color: "oklch(0.60 0.08 50)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase"
                },
                children: grammar
              }
            ),
            intel && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body italic leading-none",
                style: {
                  fontSize: "0.6rem",
                  color: "oklch(0.28 0.06 40)",
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
                className: "text-accent/40 group-hover:text-accent/75 transition-smooth",
                style: { fontSize: "0.5rem" },
                children: "✦"
              }
            )
          ]
        },
        `wbw-${word}-${word.length}-${devanagari}`
      );
    }) })
  ] });
}
function VersePage() {
  const { chapterId, verseId } = useParams({
    from: "/verse/$chapterId/$verseId"
  });
  const navigate = useNavigate();
  const { data: verse, isLoading } = useVerse(Number(chapterId), verseId);
  const { data: chapters } = useChapters();
  const { setPosition } = useLastRead();
  const { addPoints } = usePoints();
  const { language, setLanguage } = useLanguage();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const { speak, stop, isSpeaking, isSupported } = useTTS();
  const [wordRowOpen, setWordRowOpen] = reactExports.useState(false);
  const [wordPopup, setWordPopup] = reactExports.useState(null);
  const chapter = chapters == null ? void 0 : chapters.find((c) => c.id === Number(chapterId));
  const { prevVerse, nextVerse } = useAdjacentVerses(
    Number(chapterId),
    verseId
  );
  const bookmarked = verse ? isBookmarked(verse.chapterId, verse.verseNumber) : false;
  const krishnaMessage = KRISHNA_MESSAGES[verseId];
  const pointsAwarded = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (verse) {
      setPosition({ chapterId: verse.chapterId, verseId: verse.id });
      if (!pointsAwarded.current) {
        addPoints("reading", 5);
        pointsAwarded.current = true;
      }
    }
  }, [verse, setPosition, addPoints]);
  const displayTranslation = language === "hindi" && (verse == null ? void 0 : verse.hindiTranslation) ? verse.hindiTranslation : (verse == null ? void 0 : verse.englishTranslation) ?? "";
  async function handleShare() {
    if (!verse) return;
    const text = `${verse.sanskritText}

${verse.englishTranslation}

— Bhagavad Gita ${verse.chapterId}.${verse.verseNumber} ✨`;
    try {
      if (navigator.share) {
        await navigator.share({
          text,
          title: `Gita ${verse.chapterId}.${verse.verseNumber}`
        });
      } else {
        await navigator.clipboard.writeText(text);
        ue.success("Verse copied to clipboard ✨");
      }
    } catch {
    }
  }
  function handleBookmark() {
    if (!verse) return;
    if (bookmarked) {
      removeBookmark(verse.chapterId, verse.verseNumber);
      ue.info("Bookmark removed");
    } else {
      addBookmark(verse.chapterId, verse.verseNumber);
      ue.success("Verse bookmarked 🌸");
    }
  }
  function handleTTS() {
    if (!verse) return;
    if (isSpeaking) {
      stop();
    } else {
      const text = `${verse.sanskritText}. ${verse.englishTranslation}`;
      speak(text, "hi", "male");
      addPoints("listening", 2);
    }
  }
  function handleNextPage() {
    if (nextVerse) {
      void navigate({
        to: "/verse/$chapterId/$verseId",
        params: { chapterId, verseId: nextVerse.id }
      });
    } else if (Number(chapterId) < 18) {
      void navigate({
        to: "/chapter/$id",
        params: { id: String(Number(chapterId) + 1) }
      });
    }
  }
  function handlePrevPage() {
    if (prevVerse) {
      void navigate({
        to: "/verse/$chapterId/$verseId",
        params: { chapterId, verseId: prevVerse.id }
      });
    } else if (chapterId !== "1") {
      void navigate({
        to: "/chapter/$id",
        params: { id: String(Number(chapterId) - 1) }
      });
    }
  }
  const canGoNext = !!nextVerse || Number(chapterId) < 18;
  const canGoPrev = !!prevVerse || chapterId !== "1";
  const languages = [
    "english",
    "hindi",
    "sanskrit",
    "marathi",
    "gujarati"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4 },
        className: "flex items-center gap-2 font-body text-xs italic text-muted-foreground/70 mb-8 flex-wrap",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-accent transition-smooth", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/chapter/$id",
              params: { id: chapterId },
              className: "hover:text-accent transition-smooth",
              children: chapter ? chapter.name : `Chapter ${chapterId}`
            }
          ),
          verse && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent/80", children: [
              "Verse ",
              verse.verseNumber
            ] })
          ] })
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48 rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72 w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 w-full rounded-none" })
    ] }) : verse ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3, delay: 0.1 },
          className: "flex items-center justify-between mb-7 flex-wrap gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-body text-xs italic text-muted-foreground/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read in:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: language,
                  onChange: (e) => setLanguage(e.target.value),
                  className: "appearance-none bg-transparent font-body text-xs italic text-accent cursor-pointer focus:outline-none border-b border-accent/30 pb-0.5",
                  "aria-label": "Select translation language",
                  "data-ocid": "verse-language-picker",
                  children: languages.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: lang, children: LANGUAGE_LABELS[lang] }, lang))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              isSupported && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleTTS,
                  "aria-label": isSpeaking ? "Stop recitation" : "Listen to verse",
                  className: [
                    "w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
                    isSpeaking ? "text-accent bg-accent/15 border border-accent/40" : "text-muted-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25"
                  ].join(" "),
                  "data-ocid": "verse-tts-btn",
                  children: isSpeaking ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleBookmark,
                  "aria-label": bookmarked ? "Remove bookmark" : "Bookmark verse",
                  className: [
                    "w-8 h-8 rounded-full flex items-center justify-center transition-smooth",
                    bookmarked ? "text-accent bg-accent/15 border border-accent/40" : "text-muted-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25"
                  ].join(" "),
                  "data-ocid": "bookmark-verse",
                  children: bookmarked ? /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    void handleShare();
                  },
                  "aria-label": "Share verse",
                  className: "w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/25 transition-smooth",
                  "data-ocid": "share-verse",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PageCurl,
        {
          onNextPage: handleNextPage,
          onPrevPage: handlePrevPage,
          canGoNext,
          canGoPrev,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.article,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65 },
              className: "manuscript-page rounded-sm px-8 md:px-14 py-12 mb-8 relative",
              "aria-label": `Verse ${verse.chapterId}.${verse.verseNumber}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-20",
                    "aria-hidden": true,
                    style: {
                      background: "radial-gradient(ellipse at 0 0, oklch(0.18 0.02 48 / 0.35) 0%, transparent 70%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20",
                    "aria-hidden": true,
                    style: {
                      background: "radial-gradient(ellipse at 100% 0, oklch(0.18 0.02 48 / 0.35) 0%, transparent 70%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none",
                    "aria-hidden": true,
                    style: { opacity: 0.3 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs italic text-accent/60 tracking-wider", children: "‹ swipe to turn page ›" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground/60 italic tracking-widest uppercase mb-2", children: [
                    (chapter == null ? void 0 : chapter.name) ?? `Chapter ${chapterId}`,
                    " ·",
                    " ",
                    (chapter == null ? void 0 : chapter.sanskritName) ?? ""
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-symbol mb-3", "aria-hidden": true, children: "ॐ" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs italic text-accent/70 tracking-[0.2em] uppercase", children: [
                    "Verse  ",
                    verse.chapterId,
                    ".",
                    verse.verseNumber,
                    " ·",
                    " ",
                    ROMAN[verse.chapterId]
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-center font-body text-foreground whitespace-pre-line",
                    lang: "sa",
                    style: {
                      fontSize: "1.75rem",
                      lineHeight: 2.1,
                      letterSpacing: "0.05em",
                      fontWeight: 500
                    },
                    children: verse.sanskritText
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-center text-accent/45 text-2xl mb-7 select-none",
                    "aria-label": `Verse ${verse.verseNumber}`,
                    children: [
                      "॥ ",
                      verse.verseNumber,
                      " ॥"
                    ]
                  }
                ),
                verse.transliteration && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-center font-body italic text-accent/65 leading-relaxed whitespace-pre-line",
                    style: { fontSize: "0.95rem" },
                    children: verse.transliteration
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate my-8", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/45 text-xl select-none", children: "❦" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-muted-foreground/55 italic text-center uppercase tracking-[0.2em] mb-5", children: LANGUAGE_LABELS[language] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-foreground leading-loose text-center",
                      style: { fontSize: "1.12rem", fontStyle: "italic" },
                      children: displayTranslation
                    }
                  )
                ] })
              ]
            }
          )
        }
      ),
      verse.transliteration && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.15 },
          className: "manuscript-page rounded-sm px-8 md:px-12 py-6 mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setWordRowOpen((p) => !p),
                className: "flex items-center gap-2 w-full font-body text-sm italic text-muted-foreground/70 hover:text-accent/90 transition-smooth group",
                "aria-expanded": wordRowOpen,
                "data-ocid": "verse-word-by-word.toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-accent/50 group-hover:text-accent transition-smooth flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: "Word-by-Word Sanskrit Reading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "aria-hidden": true,
                      className: "text-accent/50 transition-smooth",
                      style: {
                        transform: wordRowOpen ? "rotate(180deg)" : "rotate(0deg)",
                        display: "inline-block"
                      },
                      children: "↓"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: wordRowOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.28 },
                style: { overflow: "hidden" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mt-5 pt-4",
                    style: {
                      borderTop: "1px solid oklch(var(--accent) / 0.18)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      WordByWordSection,
                      {
                        sanskritText: verse.sanskritText,
                        transliteration: verse.transliteration,
                        onWordClick: (word, intel, rect) => setWordPopup({ word, intel, rect })
                      }
                    )
                  }
                )
              },
              "word-row"
            ) })
          ]
        }
      ),
      verse.explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "manuscript-page rounded-sm px-8 md:px-12 py-8 mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground/60 tracking-widest uppercase mb-5 text-center", children: "— Commentary —" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-muted-foreground leading-loose pl-6 border-l-2",
                style: {
                  borderColor: "oklch(var(--accent) / 0.3)",
                  fontSize: "0.95rem",
                  fontStyle: "italic"
                },
                children: verse.explanation
              }
            )
          ]
        }
      ),
      krishnaMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          className: "mb-6",
          style: {
            background: "linear-gradient(135deg, oklch(var(--sacred) / 0.07) 0%, oklch(var(--accent) / 0.04) 100%)",
            border: "1px solid oklch(var(--sacred) / 0.18)",
            borderRadius: "0.25rem",
            padding: "1.75rem 2rem"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground/60 tracking-widest uppercase mb-4 text-center", children: "🦚   Krishna Speaks   🦚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-foreground/90 leading-relaxed text-center",
                style: { fontSize: "1rem", fontStyle: "italic" },
                children: [
                  '"',
                  krishnaMessage,
                  '"'
                ]
              }
            )
          ]
        }
      ),
      chapter && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.4 },
          className: "manuscript-page rounded-sm px-8 py-6 mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs italic text-muted-foreground/55 tracking-widest uppercase mb-3 text-center", children: "— Chapter Context —" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground leading-relaxed italic", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold text-foreground not-italic", children: [
                chapter.name,
                " (",
                chapter.sanskritName,
                ")"
              ] }),
              " — ",
              chapter.summary
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.45 },
          className: "border-t pt-8 mb-2",
          style: { borderColor: "oklch(var(--accent) / 0.2)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            prevVerse ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 text-left",
                onClick: () => void navigate({
                  to: "/verse/$chapterId/$verseId",
                  params: { chapterId, verseId: prevVerse.id }
                }),
                "data-ocid": "prev-verse",
                children: [
                  "← ",
                  chapterId,
                  ".",
                  prevVerse.verseNumber
                ]
              }
            ) : chapterId !== "1" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/chapter/$id",
                params: { id: String(Number(chapterId) - 1) },
                className: "font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5",
                "data-ocid": "prev-chapter-from-verse",
                children: [
                  "← Chapter ",
                  Number(chapterId) - 1
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-body italic text-muted-foreground/40 text-center select-none", children: [
              verse.chapterId,
              ".",
              verse.verseNumber
            ] }),
            nextVerse ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 text-right",
                onClick: () => void navigate({
                  to: "/verse/$chapterId/$verseId",
                  params: { chapterId, verseId: nextVerse.id }
                }),
                "data-ocid": "next-verse",
                children: [
                  chapterId,
                  ".",
                  nextVerse.verseNumber,
                  " →"
                ]
              }
            ) : Number(chapterId) < 18 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/chapter/$id",
                params: { id: String(Number(chapterId) + 1) },
                className: "font-body text-sm italic text-muted-foreground hover:text-accent transition-smooth border-b border-transparent hover:border-accent/40 pb-0.5 text-right",
                "data-ocid": "next-chapter-from-verse",
                children: [
                  "Chapter ",
                  Number(chapterId) + 1,
                  " →"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/chapter/$id",
          params: { id: chapterId },
          className: "font-body text-xs italic text-muted-foreground/60 hover:text-accent transition-smooth border-b border-transparent hover:border-accent/30 pb-0.5",
          children: [
            "← Return to ",
            chapter ? chapter.name : `Chapter ${chapterId}`
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "manuscript-page rounded-sm px-8 py-20 text-center",
        "data-ocid": "verse-not-found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "om-symbol mb-4", "aria-hidden": true, children: "ॐ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg italic text-muted-foreground mb-2", children: "Verse not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm italic text-muted-foreground/70 mb-6", children: "Navigate from the chapter page to explore verses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "font-body text-sm italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5",
              children: "Return to the sacred text →"
            }
          )
        ]
      }
    ),
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
  VersePage
};
