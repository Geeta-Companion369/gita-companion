import { j as jsxRuntimeExports, d as Link, m as motion } from "./index-DqMoqjqS.js";
import { S as Skeleton } from "./skeleton-C4XI8Hyc.js";
import { G as GITA_CHAPTERS } from "./gita-chapters-DaMiUPe9.js";
import { u as useChapters } from "./use-chapters-BoO0tWpD.js";
import { u as useLastRead } from "./use-last-read-B0FsH367.js";
import "./utils-2v2HxlWs.js";
import "./useQuery-DTb8J6Ym.js";
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
const CHAPTER_HUES = [
  52,
  46,
  38,
  54,
  32,
  268,
  52,
  46,
  54,
  38,
  268,
  52,
  46,
  38,
  54,
  268,
  52,
  46
];
function GitaIndexPage() {
  const { data: chapters, isLoading } = useChapters();
  const { lastRead } = useLastRead();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes sacred-glow-pulse { 0%,100%{opacity:0.7;transform:scale(1);} 50%{opacity:1;transform:scale(1.04);} }
        @keyframes golden-shimmer { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        .gita-index-title {
          background: linear-gradient(90deg, oklch(0.88 0.40 56), oklch(0.80 0.34 46), oklch(0.72 0.30 32), oklch(0.80 0.34 52), oklch(0.88 0.40 56));
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: golden-shimmer 5s ease infinite;
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block font-body text-xs italic mb-6 transition-all duration-200 border-b border-transparent pb-0.5",
        style: { color: "oklch(0.72 0.22 52 / 0.85)" },
        "data-ocid": "gita-index.back-home",
        children: "← Return to Home"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "relative overflow-hidden mb-8 text-center px-6 py-10",
        style: {
          background: "rgba(5, 3, 20, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "2px solid oklch(0.72 0.30 46 / 0.65)",
          borderRadius: "8px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(218,165,32,0.22)"
        },
        "data-ocid": "gita-index.header",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-[4px] rounded-t-[6px]",
              style: {
                background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.72 0.30 46), oklch(0.58 0.24 268), oklch(0.72 0.30 46), oklch(0.84 0.38 54))",
                boxShadow: "0 0 14px oklch(0.78 0.34 54 / 0.55)"
              }
            }
          ),
          [
            "top-3 left-4",
            "top-3 right-4",
            "bottom-3 left-4",
            "bottom-3 right-4"
          ].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute ${pos} text-sm pointer-events-none select-none`,
              style: {
                color: "oklch(0.84 0.38 54 / 0.60)",
                animation: "sacred-glow-pulse 3s ease-in-out infinite"
              },
              "aria-hidden": true,
              children: "✦"
            },
            pos
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1.2, delay: 0.15 },
              className: "flex justify-center mb-5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center rounded-full",
                  style: {
                    width: 120,
                    height: 120,
                    background: "radial-gradient(circle at 38% 33%, oklch(0.30 0.18 268) 0%, oklch(0.18 0.12 32) 60%, oklch(0.12 0.08 30) 100%)",
                    border: "4px solid oklch(0.80 0.36 54)",
                    boxShadow: "0 0 0 2px oklch(0.70 0.28 46 / 0.55), 0 6px 40px oklch(0.72 0.32 52 / 0.50)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "aria-label": "Om — the sacred primordial sound",
                      style: {
                        fontSize: "3.8rem",
                        lineHeight: 1,
                        fontFamily: "'Noto Serif Devanagari', serif",
                        color: "oklch(0.88 0.40 54)",
                        textShadow: "0 0 18px oklch(0.84 0.38 54 / 0.95), 0 0 40px oklch(0.78 0.34 54 / 0.65)",
                        animation: "sacred-glow-pulse 3.5s ease-in-out infinite",
                        userSelect: "none"
                      },
                      children: "ॐ"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.3 },
              className: "gita-index-title font-display font-bold italic leading-tight mb-2",
              style: { fontSize: "clamp(2.2rem, 6vw, 3.8rem)" },
              children: "Bhagavad Gita"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body italic mb-5",
              style: {
                fontSize: "1.05rem",
                color: "oklch(0.88 0.24 52)"
              },
              children: "भगवद्गीता — The Song of God"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-8 mb-6", children: [
            ["18", "Adhyāyas", 54],
            ["700", "Shlokas", 46],
            ["18", "Pathways", 268]
          ].map(([num, label, hue]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic leading-none",
                style: {
                  fontSize: "2.2rem",
                  color: `oklch(0.90 0.38 ${hue})`,
                  textShadow: `0 0 24px oklch(0.80 0.34 ${hue} / 0.70)`
                },
                children: num
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-[10px] tracking-widest uppercase mt-1",
                style: { color: "oklch(0.80 0.14 58 / 0.85)" },
                children: label
              }
            )
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mx-auto max-w-md px-5 py-3 rounded",
              style: {
                background: "oklch(0.10 0.08 32 / 0.72)",
                border: "1.5px solid oklch(0.78 0.34 50 / 0.55)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display italic font-semibold text-sm leading-relaxed",
                  style: { color: "oklch(0.96 0.06 66)" },
                  children: [
                    '"These 18 chapters were waiting for you.',
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    'Krishna placed them here knowing you would come."'
                  ]
                }
              )
            }
          ),
          lastRead && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              className: "mt-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/verse/$chapterId/$verseId",
                  params: {
                    chapterId: String(lastRead.chapterId),
                    verseId: lastRead.verseId
                  },
                  className: "inline-block px-6 py-3 rounded-full font-display font-bold italic text-sm transition-all duration-200",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                    color: "oklch(0.10 0.06 28)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.40)",
                    letterSpacing: "0.04em"
                  },
                  "data-ocid": "gita-index.resume-reading",
                  children: [
                    "← Resume Chapter ",
                    lastRead.chapterId
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex-1 h-px",
          style: {
            background: "linear-gradient(to right, transparent, oklch(0.75 0.34 52 / 0.65))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-display text-xs font-bold italic tracking-[0.16em] uppercase whitespace-nowrap",
          style: {
            color: "oklch(0.86 0.30 52)",
            textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.55), 0 1px 4px rgba(0,0,0,0.8)"
          },
          children: "✦  Select Your Adhyāya  ✦"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex-1 h-px",
          style: {
            background: "linear-gradient(to left, transparent, oklch(0.75 0.34 52 / 0.65))"
          }
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Array.from({ length: 18 }, (_, i) => `sk-ch-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 rounded" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10",
        "data-ocid": "gita-index.chapters-grid",
        children: (chapters ?? GITA_CHAPTERS.map((c) => ({
          id: c.number,
          name: c.nameEnglish,
          sanskritName: c.nameDevanagari,
          summary: c.summary
        }))).map((chapter, i) => {
          const meta = GITA_CHAPTERS[i];
          const hue = CHAPTER_HUES[i] ?? 52;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.035, duration: 0.4 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/chapter/$id",
                  params: { id: String(chapter.id) },
                  className: "group flex gap-4 p-4 h-full transition-all duration-200",
                  style: {
                    background: "rgba(5, 3, 20, 0.82)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: `1.5px solid oklch(0.68 0.24 ${hue} / 0.50)`,
                    borderRadius: "8px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.50), inset 0 1px 0 rgba(218,165,32,0.16)"
                  },
                  "data-ocid": `gita-index.chapter.${chapter.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex-shrink-0 flex flex-col items-center justify-center rounded-lg",
                        style: {
                          width: 52,
                          height: 52,
                          background: `radial-gradient(circle at 35% 28%, oklch(0.84 0.34 ${hue}) 0%, oklch(0.58 0.24 ${hue}) 100%)`,
                          border: `2px solid oklch(0.80 0.32 ${hue} / 0.70)`,
                          boxShadow: `0 4px 16px oklch(0.70 0.28 ${hue} / 0.45)`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-display font-bold italic leading-none",
                              style: {
                                fontSize: "0.75rem",
                                color: "oklch(0.12 0.06 30)",
                                letterSpacing: "0.04em"
                              },
                              children: ROMAN[chapter.id]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "font-body leading-none mt-0.5",
                              style: {
                                fontSize: "0.6rem",
                                color: "oklch(0.14 0.06 30 / 0.80)"
                              },
                              children: [
                                "Ch. ",
                                chapter.id
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-[6px]",
                          style: {
                            background: `linear-gradient(90deg, transparent, oklch(0.80 0.32 ${hue} / 0.75), transparent)`
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic leading-tight mb-0.5 transition-smooth",
                          style: {
                            color: `oklch(0.82 0.28 ${hue})`
                          },
                          children: (meta == null ? void 0 : meta.yogaName) ?? chapter.sanskritName
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-semibold italic text-sm leading-snug mb-1 group-hover:text-primary transition-smooth",
                          style: { color: "oklch(0.96 0.06 68)" },
                          children: chapter.sanskritName
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic leading-tight mb-2",
                          style: { color: "oklch(0.80 0.14 52 / 0.80)" },
                          children: chapter.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body leading-snug line-clamp-2",
                          style: {
                            fontSize: "0.7rem",
                            color: "oklch(0.72 0.10 52 / 0.75)"
                          },
                          children: (meta == null ? void 0 : meta.keyTheme) ?? ""
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-body text-[9px] italic px-2 py-0.5 rounded-full",
                            style: {
                              background: `oklch(0.72 0.24 ${hue} / 0.15)`,
                              border: `1px solid oklch(0.72 0.24 ${hue} / 0.30)`,
                              color: `oklch(0.80 0.20 ${hue} / 0.85)`
                            },
                            children: [
                              (meta == null ? void 0 : meta.verseCount) ?? "—",
                              " verses"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-body text-[10px] italic transition-smooth opacity-0 group-hover:opacity-100",
                            style: { color: `oklch(0.80 0.28 ${hue})` },
                            children: "Read →"
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              )
            },
            chapter.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "text-center pb-8",
        "data-ocid": "gita-index.footer-quote",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "inline-block px-8 py-5 rounded-lg",
            style: {
              background: "rgba(5, 3, 20, 0.78)",
              border: "1.5px solid oklch(0.68 0.26 50 / 0.50)",
              backdropFilter: "blur(10px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs tracking-[0.25em] uppercase mb-3",
                  style: { color: "oklch(0.72 0.22 52 / 0.80)" },
                  children: "✦ Krishna's Promise ✦"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display italic font-semibold leading-relaxed",
                  style: {
                    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                    color: "oklch(0.96 0.08 66)"
                  },
                  children: [
                    '"The charioteer does not win the battle.',
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Arjuna wins the battle.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.88 0.36 54)" }, children: "Krishna simply makes sure Arjuna never fights alone." }),
                    '"'
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mt-4",
                  style: { color: "oklch(0.72 0.14 50 / 0.75)" },
                  children: "— Hare Krishna, Arjun 🙏"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  GitaIndexPage
};
