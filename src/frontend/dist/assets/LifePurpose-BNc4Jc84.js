import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, a as Link } from "./index-CodWPqWB.js";
const QUESTIONS = [
  {
    id: 1,
    text: "What moment in your life made you feel most alive?",
    hint: "Close your eyes. Let that memory rise. What were you doing?",
    type: "text"
  },
  {
    id: 2,
    text: "What injustice in the world breaks your heart the most?",
    hint: "Where you feel pain, there lies your calling.",
    type: "text"
  },
  {
    id: 3,
    text: "What would you do even if no one paid you for it?",
    hint: "This is the fingerprint of your dharma.",
    type: "text"
  },
  {
    id: 4,
    text: "What gift do you have that you take for granted, but others tell you is rare?",
    hint: "What others see clearly in you — that is your offering to the world.",
    type: "text"
  },
  {
    id: 5,
    text: "Who do you most want to help in the world?",
    hint: "Children, the elderly, the sick, the lost, the seeker — your heart knows.",
    type: "text"
  },
  {
    id: 6,
    text: "If you had unlimited time and resources, what problem would you solve?",
    hint: "Dream freely. Krishna put this vision in you for a reason.",
    type: "text"
  },
  {
    id: 7,
    text: "What would your 90-year-old self most regret NOT doing?",
    hint: "Standing at the end of your life — what would you wish you had tried?",
    type: "text"
  },
  {
    id: 8,
    text: "When do you lose track of time because you're so absorbed in what you're doing?",
    hint: "That absorption is called dharmic flow — your soul's natural state.",
    type: "text"
  },
  {
    id: 9,
    text: "What kind of world do you want your children to inherit?",
    hint: "Your vision for the next generation reveals your deepest values.",
    type: "text"
  },
  {
    id: 10,
    text: "What are you most afraid to try, but know deep down you should?",
    hint: "Fear is often a signpost — pointing directly at your dharma.",
    type: "text"
  },
  {
    id: 11,
    text: "What does your heart whisper to you at 3am when you can't sleep?",
    hint: "In the silence before dawn, truth is loudest. What does it say?",
    type: "text"
  },
  {
    id: 12,
    text: "What would you do if you knew you could not fail?",
    hint: "Strip away the fear. What remains is your truest calling.",
    type: "text"
  },
  {
    id: 13,
    text: "What legacy do you want to leave behind in this world?",
    hint: "In a hundred years, what do you want to have changed?",
    type: "text"
  },
  {
    id: 14,
    text: "Which Gita character do you most identify with?",
    hint: "Each character embodies a different dharmic path.",
    type: "choice",
    choices: [
      {
        value: "arjuna",
        label: "Arjuna — the devoted warrior who must find courage",
        emoji: "⚔️"
      },
      {
        value: "krishna",
        label: "Krishna — the divine guide who serves through wisdom",
        emoji: "🪷"
      },
      {
        value: "drona",
        label: "Dronacharya — the teacher who shapes future heroes",
        emoji: "📿"
      },
      {
        value: "karna",
        label: "Karna — the noble soul defined by loyalty and sacrifice",
        emoji: "☀️"
      },
      {
        value: "yudhishthira",
        label: "Yudhishthira — the dharmic leader who upholds truth",
        emoji: "⚖️"
      },
      {
        value: "draupadi",
        label: "Draupadi — the fierce spirit who demands justice",
        emoji: "🔥"
      }
    ]
  },
  {
    id: 15,
    text: "In which of the 4 yogas do you feel most naturally drawn?",
    hint: "All paths lead to Krishna — which one calls to your soul?",
    type: "choice",
    choices: [
      {
        value: "karma",
        label: "Karma Yoga — path of selfless action and service",
        emoji: "🌱"
      },
      {
        value: "bhakti",
        label: "Bhakti Yoga — path of devotion and love for God",
        emoji: "❤️"
      },
      {
        value: "jnana",
        label: "Jnana Yoga — path of knowledge, inquiry, and wisdom",
        emoji: "📖"
      },
      {
        value: "raja",
        label: "Raja Yoga — path of meditation and inner mastery",
        emoji: "🧘"
      }
    ]
  },
  {
    id: 16,
    text: "Which of the 18 chapters of the Gita speaks most deeply to your situation right now?",
    hint: "Trust your instinct — the chapter that calls to you holds your answer.",
    type: "choice",
    choices: [
      {
        value: "ch2",
        label: "Chapter 2 — Sankhya Yoga: Facing overwhelming confusion",
        emoji: "🌊"
      },
      {
        value: "ch3",
        label: "Chapter 3 — Karma Yoga: Struggling with duty and action",
        emoji: "⚡"
      },
      {
        value: "ch6",
        label: "Chapter 6 — Dhyana Yoga: Seeking inner peace and balance",
        emoji: "🧘"
      },
      {
        value: "ch9",
        label: "Chapter 9 — Raja Vidya: Searching for deeper devotion",
        emoji: "🙏"
      },
      {
        value: "ch12",
        label: "Chapter 12 — Bhakti Yoga: Wanting to deepen love for God",
        emoji: "❤️"
      },
      {
        value: "ch18",
        label: "Chapter 18 — Moksha Yoga: Seeking liberation and surrender",
        emoji: "✨"
      }
    ]
  },
  {
    id: 17,
    text: "What is the one promise you want to make to Krishna today?",
    hint: "Speak it from your heart. Krishna is listening right now.",
    type: "text"
  },
  {
    id: 18,
    text: "If Krishna asked you 'What did you do with the life I gave you?', what would you want to answer?",
    hint: "This is perhaps the most sacred question ever asked. Answer it slowly.",
    type: "text"
  }
];
function generateDharma(answers) {
  const yogaPath = answers[15] ?? "karma";
  const character = answers[14] ?? "arjuna";
  const yogaMap = {
    karma: {
      title: "Karma Yogi",
      path: "Selfless Service",
      symbol: "🌱",
      chapter: "Chapter 3",
      chapterName: "Karma Yoga"
    },
    bhakti: {
      title: "Bhakta",
      path: "Devoted Love",
      symbol: "❤️",
      chapter: "Chapter 12",
      chapterName: "Bhakti Yoga"
    },
    jnana: {
      title: "Jnana Yogi",
      path: "Wisdom Seeker",
      symbol: "📖",
      chapter: "Chapter 2",
      chapterName: "Sankhya Yoga"
    },
    raja: {
      title: "Raja Yogi",
      path: "Inner Mastery",
      symbol: "🧘",
      chapter: "Chapter 6",
      chapterName: "Dhyana Yoga"
    }
  };
  const characterMap = {
    arjuna: "a spiritual warrior — brave, devoted, and willing to face your deepest fears in service of dharma",
    krishna: "a divine guide — your purpose is to serve others through wisdom, to be a light on someone else's path",
    drona: "a sacred teacher — your dharma is to shape, mentor, and give your knowledge to the next generation",
    karna: "a noble heart — your dharma shines through unwavering loyalty, sacrifice, and doing right against all odds",
    yudhishthira: "a dharmic leader — your purpose is to uphold truth and righteousness even when it costs everything",
    draupadi: "a fierce seeker of justice — your dharma calls you to stand for the helpless and demand what is right"
  };
  const yoga = yogaMap[yogaPath] ?? yogaMap.karma;
  const charDesc = characterMap[character] ?? characterMap.arjuna;
  const versesByYoga = {
    karma: [
      {
        ref: "BG 3.19",
        text: "Therefore, without attachment, perform always the work that has to be done; for it is by performing action without attachment that a person reaches the Supreme."
      },
      {
        ref: "BG 2.47",
        text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
      },
      {
        ref: "BG 12.10",
        text: "If you cannot practice the regulations of bhakti-yoga, then just try to work for Me, for by working for Me you will come to the perfect stage."
      }
    ],
    bhakti: [
      {
        ref: "BG 18.65",
        text: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail."
      },
      {
        ref: "BG 9.22",
        text: "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack, and I preserve what they have."
      },
      {
        ref: "BG 12.6-7",
        text: "But those who worship Me with devotion, meditating on My transcendental form, carrying the burden of their activities to Me — for them I am the swift deliverer from the ocean of birth and death."
      }
    ],
    jnana: [
      {
        ref: "BG 4.38",
        text: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism."
      },
      {
        ref: "BG 13.2",
        text: "O son of Kunti, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge."
      },
      {
        ref: "BG 7.19",
        text: "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is."
      }
    ],
    raja: [
      {
        ref: "BG 6.10",
        text: "A transcendentalist should always engage his body, mind and self in relationship with the Supreme; he should live alone in a secluded place and should always carefully control his mind."
      },
      {
        ref: "BG 6.19",
        text: "As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self."
      },
      {
        ref: "BG 6.47",
        text: "And of all yogis, the one with great faith who always abides in Me, thinks of Me within himself, and renders transcendental loving service to Me — he is the most intimately united with Me in yoga and is the highest of all."
      }
    ]
  };
  const promise = answers[17] ? `"${answers[17].slice(0, 80)}${answers[17].length > 80 ? "…" : ""}"` : "to walk on the path of dharma with Krishna by my side";
  return {
    dharmaTitle: yoga.title,
    dharmaStatement: `Arjun, you are ${charDesc}. Your path is ${yoga.path} — the way of the ${yoga.title}. Your promise to Krishna: ${promise}.`,
    chapterFocus: yoga.chapter,
    chapterName: yoga.chapterName,
    verses: versesByYoga[yogaPath] ?? versesByYoga.karma,
    path: yoga.path,
    pathSymbol: yoga.symbol
  };
}
function ManuscriptBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "absolute inset-0 pointer-events-none overflow-hidden",
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(160deg, oklch(0.95 0.05 72) 0%, oklch(0.90 0.07 66) 50%, oklch(0.88 0.08 62) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-4 left-4 w-20 h-20 opacity-20",
            style: {
              background: "radial-gradient(circle, oklch(0.76 0.32 54) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-4 right-4 w-20 h-20 opacity-20",
            style: {
              background: "radial-gradient(circle, oklch(0.76 0.32 54) 0%, transparent 70%)"
            }
          }
        )
      ]
    }
  );
}
function ProgressOrbs({ total, current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 flex-wrap justify-center", children: Array.from({ length: total }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-full transition-all duration-300",
      style: {
        width: i === current ? 16 : i < current ? 10 : 8,
        height: i < current ? 10 : 8,
        background: i < current ? "oklch(0.76 0.32 54)" : i === current ? "oklch(0.62 0.26 32)" : "oklch(0.70 0.10 60 / 0.35)",
        boxShadow: i === current ? "0 0 8px oklch(0.76 0.32 54 / 0.5)" : "none"
      }
    },
    `orb-${i}`
  )) });
}
function QuestionCard({
  question,
  value,
  onChange,
  onNext,
  onPrev,
  isLast,
  isFirst
}) {
  var _a;
  const canProceed = value.trim().length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 },
      transition: { duration: 0.45 },
      className: "manuscript-card p-6 relative",
      "data-ocid": `life-purpose.question.${question.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
              style: {
                background: "linear-gradient(135deg, oklch(0.76 0.32 54), oklch(0.62 0.26 32))",
                boxShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.4)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display font-bold text-sm",
                  style: { color: "oklch(0.12 0.08 28)" },
                  children: question.id
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-px flex-1",
              style: {
                background: "linear-gradient(to right, oklch(0.76 0.32 54 / 0.5), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-xs italic",
              style: { color: "oklch(0.62 0.26 32 / 0.7)" },
              children: "of 18"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display font-bold italic mb-2",
            style: {
              color: "oklch(0.18 0.08 32)",
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              lineHeight: 1.4
            },
            children: question.text
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs italic mb-5",
            style: { color: "oklch(0.52 0.14 46)" },
            children: question.hint
          }
        ),
        question.type === "text" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value,
            onChange: (e) => onChange(e.target.value),
            placeholder: "Speak from your heart, Arjun…",
            rows: 4,
            className: "manuscript-input mb-5",
            "data-ocid": `life-purpose.answer_input.${question.id}`
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid gap-2 mb-5",
            "data-ocid": `life-purpose.choices.${question.id}`,
            children: (_a = question.choices) == null ? void 0 : _a.map((choice) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => onChange(choice.value),
                className: "flex items-center gap-3 rounded-lg p-3 text-left transition-all duration-200",
                style: {
                  background: value === choice.value ? "oklch(0.76 0.32 54 / 0.15)" : "oklch(0.92 0.05 70 / 0.6)",
                  border: `1.5px solid ${value === choice.value ? "oklch(0.76 0.32 54 / 0.7)" : "oklch(0.72 0.12 58 / 0.3)"}`,
                  boxShadow: value === choice.value ? "0 0 12px oklch(0.76 0.32 54 / 0.2)" : "none"
                },
                "data-ocid": `life-purpose.choice_${choice.value}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, children: choice.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-sm",
                      style: {
                        color: value === choice.value ? "oklch(0.18 0.08 32)" : "oklch(0.38 0.12 42)"
                      },
                      children: choice.label
                    }
                  ),
                  value === choice.value && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "ml-auto font-display text-xs",
                      style: { color: "oklch(0.62 0.26 32)" },
                      children: "✓"
                    }
                  )
                ]
              },
              choice.value
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          !isFirst && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onPrev,
              className: "rounded-lg px-4 py-2.5 font-body text-sm transition-all",
              style: {
                background: "oklch(0.88 0.06 66)",
                border: "1px solid oklch(0.72 0.12 56 / 0.4)",
                color: "oklch(0.38 0.12 42)"
              },
              "data-ocid": "life-purpose.prev_button",
              children: "← Previous"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "button",
              onClick: onNext,
              disabled: !canProceed,
              whileTap: canProceed ? { scale: 0.96 } : {},
              className: "flex-1 rounded-lg py-2.5 font-display font-bold italic text-sm transition-all disabled:opacity-40",
              style: {
                background: canProceed ? "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))" : "oklch(0.80 0.08 62)",
                color: "oklch(0.12 0.08 28)",
                boxShadow: canProceed ? "0 4px 16px oklch(0.62 0.26 32 / 0.35)" : "none",
                letterSpacing: "0.04em"
              },
              "data-ocid": "life-purpose.next_button",
              children: isLast ? "✦ Reveal My Dharma ✦" : "Continue →"
            }
          )
        ] })
      ]
    },
    question.id
  );
}
function DharmaReveal({
  result,
  answers,
  onRestart
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.7 },
      "data-ocid": "life-purpose.revelation",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { scale: [1, 1.12, 1] },
              transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              },
              style: { fontSize: "3.5rem", marginBottom: "0.75rem" },
              children: result.pathSymbol
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs tracking-[0.35em] mb-1",
              style: { color: "oklch(0.62 0.26 32 / 0.85)" },
              children: "✦ YOUR DHARMA HAS BEEN REVEALED ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display font-bold italic",
              style: {
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "oklch(0.18 0.08 32)",
                textShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.25)"
              },
              children: result.dharmaTitle
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-sm italic mt-1",
              style: { color: "oklch(0.52 0.14 46)" },
              children: [
                "Path of ",
                result.path
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-6 mb-5 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-0.5",
              style: {
                background: "linear-gradient(90deg, transparent, oklch(0.76 0.32 54 / 0.7), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs tracking-[0.25em] mb-3",
              style: { color: "oklch(0.62 0.26 32 / 0.7)" },
              children: "✦ KRISHNA SPEAKS TO YOU ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body",
              style: {
                color: "oklch(0.22 0.08 34)",
                lineHeight: 1.85,
                fontSize: "1rem"
              },
              children: result.dharmaStatement
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 h-0.5",
              style: {
                background: "linear-gradient(90deg, transparent, oklch(0.76 0.32 54 / 0.7), transparent)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-4 mb-5 flex items-center gap-4",
            style: {
              background: "linear-gradient(135deg, oklch(0.76 0.32 54 / 0.12), oklch(0.62 0.26 32 / 0.08))",
              border: "1px solid oklch(0.76 0.32 54 / 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                  style: { background: "oklch(0.76 0.32 54 / 0.2)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-bold text-sm",
                      style: { color: "oklch(0.38 0.14 36)" },
                      children: "📖"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs mb-0.5",
                    style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                    children: "Your Guiding Chapter"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display font-bold italic",
                    style: { color: "oklch(0.18 0.08 32)", fontSize: "1.05rem" },
                    children: [
                      result.chapterFocus,
                      " — ",
                      result.chapterName
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs",
                    style: { color: "oklch(0.48 0.12 44)" },
                    children: "Read this chapter deeply. It is your roadmap."
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs text-center tracking-[0.2em] mb-3",
              style: { color: "oklch(0.62 0.26 32 / 0.7)" },
              children: "✦ THREE VERSES FOR YOUR PATH ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: result.verses.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xs mb-1.5",
                style: { color: "oklch(0.62 0.26 32 / 0.85)" },
                children: v.ref
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body italic text-sm",
                style: { color: "oklch(0.28 0.10 38)", lineHeight: 1.7 },
                children: [
                  '"',
                  v.text,
                  '"'
                ]
              }
            )
          ] }, v.ref)) })
        ] }),
        answers[17] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-5 mb-5 text-center",
            style: {
              background: "oklch(0.62 0.26 32 / 0.1)",
              border: "1px solid oklch(0.62 0.26 32 / 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs mb-2",
                  style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                  children: "Your Sacred Promise to Krishna"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display italic",
                  style: {
                    color: "oklch(0.22 0.08 34)",
                    fontSize: "1.05rem",
                    lineHeight: 1.65
                  },
                  children: [
                    '"',
                    answers[17],
                    '"'
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs mt-2",
                  style: { color: "oklch(0.52 0.10 44)" },
                  children: "Krishna heard this. He holds you to it. And He will help you keep it."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                localStorage.setItem(
                  "life-purpose-answers",
                  JSON.stringify(answers)
                );
              },
              className: "wax-seal-btn w-full justify-center",
              "data-ocid": "life-purpose.save_button",
              children: "💾 Save My Dharma Discovery"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/guidance",
              className: "wax-seal-btn wax-seal-btn-saffron w-full justify-center text-center",
              "data-ocid": "life-purpose.talk_krishna",
              children: "🙏 Discuss My Dharma with Krishna"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onRestart,
              className: "font-body text-sm italic text-center py-2 transition-all",
              style: { color: "oklch(0.52 0.14 46)" },
              "data-ocid": "life-purpose.restart_button",
              children: "↺ Begin Again (18 questions)"
            }
          )
        ] })
      ]
    }
  );
}
function LifePurposePage() {
  var _a;
  const [started, setStarted] = reactExports.useState(false);
  const [currentQ, setCurrentQ] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("life-purpose-answers") ?? "{}"
      );
    } catch {
      return {};
    }
  });
  const [completed, setCompleted] = reactExports.useState(false);
  const [dharmaResult, setDharmaResult] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (completed && !dharmaResult) {
      setDharmaResult(generateDharma(answers));
    }
  }, [completed, dharmaResult, answers]);
  const handleAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: value }));
  };
  const handleNext = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((c) => c + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCompleted(true);
    }
  };
  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ((c) => c - 1);
  };
  const handleRestart = () => {
    setAnswers({});
    setCurrentQ(0);
    setCompleted(false);
    setDharmaResult(null);
    localStorage.removeItem("life-purpose-answers");
    setStarted(false);
  };
  const currentAnswer = answers[(_a = QUESTIONS[currentQ]) == null ? void 0 : _a.id] ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative", "data-ocid": "life-purpose.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ManuscriptBackground, {}),
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
                children: "जीवन लक्ष्य खोज"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic",
                style: { color: "oklch(0.52 0.14 46)" },
                children: "Life Purpose Finder — Krishna reveals your dharma"
              }
            )
          ]
        }
      ),
      !started && !completed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-6 mb-6 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "🌟" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic font-bold mb-3",
                  style: {
                    color: "oklch(0.18 0.08 32)",
                    fontSize: "1.2rem",
                    lineHeight: 1.4
                  },
                  children: '"Your dharma is not an accident. Krishna placed it in you before you were born."'
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm mb-4",
                  style: { color: "oklch(0.42 0.12 44)", lineHeight: 1.75 },
                  children: "These 18 sacred questions — one for each chapter of the Gita — will help you discover it. Answer slowly. Answer honestly. Krishna is listening."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 flex-wrap mb-4", children: ["18 Questions", "10 Minutes", "Your Dharma Forever"].map(
                (badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full px-3 py-1 font-body text-xs",
                    style: {
                      background: "oklch(0.76 0.32 54 / 0.12)",
                      border: "1px solid oklch(0.76 0.32 54 / 0.3)",
                      color: "oklch(0.38 0.14 36)"
                    },
                    children: badge
                  },
                  badge
                )
              ) })
            ] }),
            Object.keys(answers).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4 mb-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.3rem" }, children: "↩" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: "oklch(0.32 0.10 38)" },
                    children: [
                      "You have ",
                      Object.keys(answers).length,
                      " saved answers"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.52 0.10 44)" },
                    children: "Continue from where you left off or start fresh"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setCurrentQ(
                      Math.min(
                        Object.keys(answers).length,
                        QUESTIONS.length - 1
                      )
                    );
                    setStarted(true);
                  },
                  className: "font-display text-xs italic font-bold",
                  style: { color: "oklch(0.62 0.26 32)" },
                  "data-ocid": "life-purpose.continue_button",
                  children: "Continue"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                onClick: () => setStarted(true),
                whileTap: { scale: 0.97 },
                className: "wax-seal-btn w-full justify-center",
                "data-ocid": "life-purpose.start_button",
                children: "✦ Begin the Sacred Journey ✦"
              }
            )
          ]
        }
      ),
      started && !completed && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-body text-xs italic",
                style: { color: "oklch(0.52 0.14 46)" },
                children: [
                  "Question ",
                  currentQ + 1,
                  " of 18"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-display text-xs",
                style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                children: [
                  Math.round((currentQ + 1) / 18 * 100),
                  "% complete"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-full overflow-hidden mb-3",
              style: { height: 3, background: "oklch(0.80 0.08 62 / 0.4)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    background: "linear-gradient(to right, oklch(0.62 0.26 32), oklch(0.76 0.32 54))"
                  },
                  animate: { width: `${(currentQ + 1) / 18 * 100}%` },
                  transition: { duration: 0.4 }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressOrbs, { total: 18, current: currentQ })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuestionCard,
          {
            question: QUESTIONS[currentQ],
            value: currentAnswer,
            onChange: handleAnswer,
            onNext: handleNext,
            onPrev: handlePrev,
            isLast: currentQ === QUESTIONS.length - 1,
            isFirst: currentQ === 0
          },
          currentQ
        ) })
      ] }),
      completed && dharmaResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
        DharmaReveal,
        {
          result: dharmaResult,
          answers,
          onRestart: handleRestart
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "font-body text-xs italic",
          style: { color: "oklch(0.52 0.14 46)" },
          "data-ocid": "life-purpose.back_home",
          children: "← Return to Home"
        }
      ) })
    ] })
  ] });
}
export {
  LifePurposePage
};
