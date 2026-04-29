import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── QUESTIONS DATA ───────────────────────────────────────────────────────────

interface Question {
  id: number;
  text: string;
  hint: string;
  type: "text" | "choice";
  choices?: { value: string; label: string; emoji: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What moment in your life made you feel most alive?",
    hint: "Close your eyes. Let that memory rise. What were you doing?",
    type: "text",
  },
  {
    id: 2,
    text: "What injustice in the world breaks your heart the most?",
    hint: "Where you feel pain, there lies your calling.",
    type: "text",
  },
  {
    id: 3,
    text: "What would you do even if no one paid you for it?",
    hint: "This is the fingerprint of your dharma.",
    type: "text",
  },
  {
    id: 4,
    text: "What gift do you have that you take for granted, but others tell you is rare?",
    hint: "What others see clearly in you — that is your offering to the world.",
    type: "text",
  },
  {
    id: 5,
    text: "Who do you most want to help in the world?",
    hint: "Children, the elderly, the sick, the lost, the seeker — your heart knows.",
    type: "text",
  },
  {
    id: 6,
    text: "If you had unlimited time and resources, what problem would you solve?",
    hint: "Dream freely. Krishna put this vision in you for a reason.",
    type: "text",
  },
  {
    id: 7,
    text: "What would your 90-year-old self most regret NOT doing?",
    hint: "Standing at the end of your life — what would you wish you had tried?",
    type: "text",
  },
  {
    id: 8,
    text: "When do you lose track of time because you're so absorbed in what you're doing?",
    hint: "That absorption is called dharmic flow — your soul's natural state.",
    type: "text",
  },
  {
    id: 9,
    text: "What kind of world do you want your children to inherit?",
    hint: "Your vision for the next generation reveals your deepest values.",
    type: "text",
  },
  {
    id: 10,
    text: "What are you most afraid to try, but know deep down you should?",
    hint: "Fear is often a signpost — pointing directly at your dharma.",
    type: "text",
  },
  {
    id: 11,
    text: "What does your heart whisper to you at 3am when you can't sleep?",
    hint: "In the silence before dawn, truth is loudest. What does it say?",
    type: "text",
  },
  {
    id: 12,
    text: "What would you do if you knew you could not fail?",
    hint: "Strip away the fear. What remains is your truest calling.",
    type: "text",
  },
  {
    id: 13,
    text: "What legacy do you want to leave behind in this world?",
    hint: "In a hundred years, what do you want to have changed?",
    type: "text",
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
        emoji: "⚔️",
      },
      {
        value: "krishna",
        label: "Krishna — the divine guide who serves through wisdom",
        emoji: "🪷",
      },
      {
        value: "drona",
        label: "Dronacharya — the teacher who shapes future heroes",
        emoji: "📿",
      },
      {
        value: "karna",
        label: "Karna — the noble soul defined by loyalty and sacrifice",
        emoji: "☀️",
      },
      {
        value: "yudhishthira",
        label: "Yudhishthira — the dharmic leader who upholds truth",
        emoji: "⚖️",
      },
      {
        value: "draupadi",
        label: "Draupadi — the fierce spirit who demands justice",
        emoji: "🔥",
      },
    ],
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
        emoji: "🌱",
      },
      {
        value: "bhakti",
        label: "Bhakti Yoga — path of devotion and love for God",
        emoji: "❤️",
      },
      {
        value: "jnana",
        label: "Jnana Yoga — path of knowledge, inquiry, and wisdom",
        emoji: "📖",
      },
      {
        value: "raja",
        label: "Raja Yoga — path of meditation and inner mastery",
        emoji: "🧘",
      },
    ],
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
        emoji: "🌊",
      },
      {
        value: "ch3",
        label: "Chapter 3 — Karma Yoga: Struggling with duty and action",
        emoji: "⚡",
      },
      {
        value: "ch6",
        label: "Chapter 6 — Dhyana Yoga: Seeking inner peace and balance",
        emoji: "🧘",
      },
      {
        value: "ch9",
        label: "Chapter 9 — Raja Vidya: Searching for deeper devotion",
        emoji: "🙏",
      },
      {
        value: "ch12",
        label: "Chapter 12 — Bhakti Yoga: Wanting to deepen love for God",
        emoji: "❤️",
      },
      {
        value: "ch18",
        label: "Chapter 18 — Moksha Yoga: Seeking liberation and surrender",
        emoji: "✨",
      },
    ],
  },
  {
    id: 17,
    text: "What is the one promise you want to make to Krishna today?",
    hint: "Speak it from your heart. Krishna is listening right now.",
    type: "text",
  },
  {
    id: 18,
    text: "If Krishna asked you 'What did you do with the life I gave you?', what would you want to answer?",
    hint: "This is perhaps the most sacred question ever asked. Answer it slowly.",
    type: "text",
  },
];

// ─── DHARMA REVELATION ENGINE ────────────────────────────────────────────────

interface DharmaResult {
  dharmaTitle: string;
  dharmaStatement: string;
  chapterFocus: string;
  chapterName: string;
  verses: { ref: string; text: string }[];
  path: string;
  pathSymbol: string;
}

function generateDharma(answers: Record<number, string>): DharmaResult {
  const yogaPath = answers[15] ?? "karma";
  const character = answers[14] ?? "arjuna";

  const yogaMap: Record<
    string,
    {
      title: string;
      path: string;
      symbol: string;
      chapter: string;
      chapterName: string;
    }
  > = {
    karma: {
      title: "Karma Yogi",
      path: "Selfless Service",
      symbol: "🌱",
      chapter: "Chapter 3",
      chapterName: "Karma Yoga",
    },
    bhakti: {
      title: "Bhakta",
      path: "Devoted Love",
      symbol: "❤️",
      chapter: "Chapter 12",
      chapterName: "Bhakti Yoga",
    },
    jnana: {
      title: "Jnana Yogi",
      path: "Wisdom Seeker",
      symbol: "📖",
      chapter: "Chapter 2",
      chapterName: "Sankhya Yoga",
    },
    raja: {
      title: "Raja Yogi",
      path: "Inner Mastery",
      symbol: "🧘",
      chapter: "Chapter 6",
      chapterName: "Dhyana Yoga",
    },
  };

  const characterMap: Record<string, string> = {
    arjuna:
      "a spiritual warrior — brave, devoted, and willing to face your deepest fears in service of dharma",
    krishna:
      "a divine guide — your purpose is to serve others through wisdom, to be a light on someone else's path",
    drona:
      "a sacred teacher — your dharma is to shape, mentor, and give your knowledge to the next generation",
    karna:
      "a noble heart — your dharma shines through unwavering loyalty, sacrifice, and doing right against all odds",
    yudhishthira:
      "a dharmic leader — your purpose is to uphold truth and righteousness even when it costs everything",
    draupadi:
      "a fierce seeker of justice — your dharma calls you to stand for the helpless and demand what is right",
  };

  const yoga = yogaMap[yogaPath] ?? yogaMap.karma;
  const charDesc = characterMap[character] ?? characterMap.arjuna;

  const versesByYoga: Record<string, { ref: string; text: string }[]> = {
    karma: [
      {
        ref: "BG 3.19",
        text: "Therefore, without attachment, perform always the work that has to be done; for it is by performing action without attachment that a person reaches the Supreme.",
      },
      {
        ref: "BG 2.47",
        text: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
      },
      {
        ref: "BG 12.10",
        text: "If you cannot practice the regulations of bhakti-yoga, then just try to work for Me, for by working for Me you will come to the perfect stage.",
      },
    ],
    bhakti: [
      {
        ref: "BG 18.65",
        text: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail.",
      },
      {
        ref: "BG 9.22",
        text: "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack, and I preserve what they have.",
      },
      {
        ref: "BG 12.6-7",
        text: "But those who worship Me with devotion, meditating on My transcendental form, carrying the burden of their activities to Me — for them I am the swift deliverer from the ocean of birth and death.",
      },
    ],
    jnana: [
      {
        ref: "BG 4.38",
        text: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism.",
      },
      {
        ref: "BG 13.2",
        text: "O son of Kunti, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge.",
      },
      {
        ref: "BG 7.19",
        text: "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is.",
      },
    ],
    raja: [
      {
        ref: "BG 6.10",
        text: "A transcendentalist should always engage his body, mind and self in relationship with the Supreme; he should live alone in a secluded place and should always carefully control his mind.",
      },
      {
        ref: "BG 6.19",
        text: "As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self.",
      },
      {
        ref: "BG 6.47",
        text: "And of all yogis, the one with great faith who always abides in Me, thinks of Me within himself, and renders transcendental loving service to Me — he is the most intimately united with Me in yoga and is the highest of all.",
      },
    ],
  };

  const promise = answers[17]
    ? `"${answers[17].slice(0, 80)}${answers[17].length > 80 ? "…" : ""}"`
    : "to walk on the path of dharma with Krishna by my side";

  return {
    dharmaTitle: yoga.title,
    dharmaStatement: `Arjun, you are ${charDesc}. Your path is ${yoga.path} — the way of the ${yoga.title}. Your promise to Krishna: ${promise}.`,
    chapterFocus: yoga.chapter,
    chapterName: yoga.chapterName,
    verses: versesByYoga[yogaPath] ?? versesByYoga.karma,
    path: yoga.path,
    pathSymbol: yoga.symbol,
  };
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ManuscriptBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.95 0.05 72) 0%, oklch(0.90 0.07 66) 50%, oklch(0.88 0.08 62) 100%)",
        }}
      />
      {/* Sacred geometry corners */}
      <div
        className="absolute top-4 left-4 w-20 h-20 opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.76 0.32 54) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-4 right-4 w-20 h-20 opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.76 0.32 54) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function ProgressOrbs({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center">
      {Array.from({ length: total }, (_, i) => i).map((i) => (
        <div
          key={`orb-${i}`}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === current ? 16 : i < current ? 10 : 8,
            height: i < current ? 10 : 8,
            background:
              i < current
                ? "oklch(0.76 0.32 54)"
                : i === current
                  ? "oklch(0.62 0.26 32)"
                  : "oklch(0.70 0.10 60 / 0.35)",
            boxShadow:
              i === current ? "0 0 8px oklch(0.76 0.32 54 / 0.5)" : "none",
          }}
        />
      ))}
    </div>
  );
}

function QuestionCard({
  question,
  value,
  onChange,
  onNext,
  onPrev,
  isLast,
  isFirst,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
  isFirst: boolean;
}) {
  const canProceed = value.trim().length > 0;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.45 }}
      className="manuscript-card p-6 relative"
      data-ocid={`life-purpose.question.${question.id}`}
    >
      {/* Question number */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.76 0.32 54), oklch(0.62 0.26 32))",
            boxShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.4)",
          }}
        >
          <span
            className="font-display font-bold text-sm"
            style={{ color: "oklch(0.12 0.08 28)" }}
          >
            {question.id}
          </span>
        </div>
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, oklch(0.76 0.32 54 / 0.5), transparent)",
          }}
        />
        <span
          className="font-display text-xs italic"
          style={{ color: "oklch(0.62 0.26 32 / 0.7)" }}
        >
          of 18
        </span>
      </div>

      {/* Question text */}
      <p
        className="font-display font-bold italic mb-2"
        style={{
          color: "oklch(0.18 0.08 32)",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
          lineHeight: 1.4,
        }}
      >
        {question.text}
      </p>
      <p
        className="font-body text-xs italic mb-5"
        style={{ color: "oklch(0.52 0.14 46)" }}
      >
        {question.hint}
      </p>

      {/* Input */}
      {question.type === "text" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Speak from your heart, Arjun…"
          rows={4}
          className="manuscript-input mb-5"
          data-ocid={`life-purpose.answer_input.${question.id}`}
        />
      ) : (
        <div
          className="grid gap-2 mb-5"
          data-ocid={`life-purpose.choices.${question.id}`}
        >
          {question.choices?.map((choice) => (
            <button
              key={choice.value}
              type="button"
              onClick={() => onChange(choice.value)}
              className="flex items-center gap-3 rounded-lg p-3 text-left transition-all duration-200"
              style={{
                background:
                  value === choice.value
                    ? "oklch(0.76 0.32 54 / 0.15)"
                    : "oklch(0.92 0.05 70 / 0.6)",
                border: `1.5px solid ${value === choice.value ? "oklch(0.76 0.32 54 / 0.7)" : "oklch(0.72 0.12 58 / 0.3)"}`,
                boxShadow:
                  value === choice.value
                    ? "0 0 12px oklch(0.76 0.32 54 / 0.2)"
                    : "none",
              }}
              data-ocid={`life-purpose.choice_${choice.value}`}
            >
              <span style={{ fontSize: "1.5rem" }}>{choice.emoji}</span>
              <span
                className="font-body text-sm"
                style={{
                  color:
                    value === choice.value
                      ? "oklch(0.18 0.08 32)"
                      : "oklch(0.38 0.12 42)",
                }}
              >
                {choice.label}
              </span>
              {value === choice.value && (
                <span
                  className="ml-auto font-display text-xs"
                  style={{ color: "oklch(0.62 0.26 32)" }}
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        {!isFirst && (
          <button
            type="button"
            onClick={onPrev}
            className="rounded-lg px-4 py-2.5 font-body text-sm transition-all"
            style={{
              background: "oklch(0.88 0.06 66)",
              border: "1px solid oklch(0.72 0.12 56 / 0.4)",
              color: "oklch(0.38 0.12 42)",
            }}
            data-ocid="life-purpose.prev_button"
          >
            ← Previous
          </button>
        )}
        <motion.button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          whileTap={canProceed ? { scale: 0.96 } : {}}
          className="flex-1 rounded-lg py-2.5 font-display font-bold italic text-sm transition-all disabled:opacity-40"
          style={{
            background: canProceed
              ? "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))"
              : "oklch(0.80 0.08 62)",
            color: "oklch(0.12 0.08 28)",
            boxShadow: canProceed
              ? "0 4px 16px oklch(0.62 0.26 32 / 0.35)"
              : "none",
            letterSpacing: "0.04em",
          }}
          data-ocid="life-purpose.next_button"
        >
          {isLast ? "✦ Reveal My Dharma ✦" : "Continue →"}
        </motion.button>
      </div>
    </motion.div>
  );
}

function DharmaReveal({
  result,
  answers,
  onRestart,
}: {
  result: DharmaResult;
  answers: Record<number, string>;
  onRestart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      data-ocid="life-purpose.revelation"
    >
      {/* Sacred header */}
      <div className="text-center mb-6">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ fontSize: "3.5rem", marginBottom: "0.75rem" }}
        >
          {result.pathSymbol}
        </motion.div>
        <p
          className="font-display text-xs tracking-[0.35em] mb-1"
          style={{ color: "oklch(0.62 0.26 32 / 0.85)" }}
        >
          ✦ YOUR DHARMA HAS BEEN REVEALED ✦
        </p>
        <h2
          className="font-display font-bold italic"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            color: "oklch(0.18 0.08 32)",
            textShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.25)",
          }}
        >
          {result.dharmaTitle}
        </h2>
        <p
          className="font-body text-sm italic mt-1"
          style={{ color: "oklch(0.52 0.14 46)" }}
        >
          Path of {result.path}
        </p>
      </div>

      {/* Dharma statement */}
      <div className="manuscript-card p-6 mb-5 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.76 0.32 54 / 0.7), transparent)",
          }}
        />
        <p
          className="font-display text-xs tracking-[0.25em] mb-3"
          style={{ color: "oklch(0.62 0.26 32 / 0.7)" }}
        >
          ✦ KRISHNA SPEAKS TO YOU ✦
        </p>
        <p
          className="font-body"
          style={{
            color: "oklch(0.22 0.08 34)",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >
          {result.dharmaStatement}
        </p>
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.76 0.32 54 / 0.7), transparent)",
          }}
        />
      </div>

      {/* Chapter focus */}
      <div
        className="rounded-xl p-4 mb-5 flex items-center gap-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.76 0.32 54 / 0.12), oklch(0.62 0.26 32 / 0.08))",
          border: "1px solid oklch(0.76 0.32 54 / 0.3)",
        }}
      >
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: "oklch(0.76 0.32 54 / 0.2)" }}
        >
          <span
            className="font-display font-bold text-sm"
            style={{ color: "oklch(0.38 0.14 36)" }}
          >
            📖
          </span>
        </div>
        <div>
          <p
            className="font-display text-xs mb-0.5"
            style={{ color: "oklch(0.62 0.26 32 / 0.7)" }}
          >
            Your Guiding Chapter
          </p>
          <p
            className="font-display font-bold italic"
            style={{ color: "oklch(0.18 0.08 32)", fontSize: "1.05rem" }}
          >
            {result.chapterFocus} — {result.chapterName}
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.48 0.12 44)" }}
          >
            Read this chapter deeply. It is your roadmap.
          </p>
        </div>
      </div>

      {/* Verses */}
      <div className="mb-5">
        <p
          className="font-display text-xs text-center tracking-[0.2em] mb-3"
          style={{ color: "oklch(0.62 0.26 32 / 0.7)" }}
        >
          ✦ THREE VERSES FOR YOUR PATH ✦
        </p>
        <div className="space-y-3">
          {result.verses.map((v) => (
            <div key={v.ref} className="manuscript-card p-4">
              <p
                className="font-display text-xs mb-1.5"
                style={{ color: "oklch(0.62 0.26 32 / 0.85)" }}
              >
                {v.ref}
              </p>
              <p
                className="font-body italic text-sm"
                style={{ color: "oklch(0.28 0.10 38)", lineHeight: 1.7 }}
              >
                "{v.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Promise */}
      {answers[17] && (
        <div
          className="rounded-xl p-5 mb-5 text-center"
          style={{
            background: "oklch(0.62 0.26 32 / 0.1)",
            border: "1px solid oklch(0.62 0.26 32 / 0.3)",
          }}
        >
          <p
            className="font-display text-xs mb-2"
            style={{ color: "oklch(0.62 0.26 32 / 0.7)" }}
          >
            Your Sacred Promise to Krishna
          </p>
          <p
            className="font-display italic"
            style={{
              color: "oklch(0.22 0.08 34)",
              fontSize: "1.05rem",
              lineHeight: 1.65,
            }}
          >
            "{answers[17]}"
          </p>
          <p
            className="font-body text-xs mt-2"
            style={{ color: "oklch(0.52 0.10 44)" }}
          >
            Krishna heard this. He holds you to it. And He will help you keep
            it.
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(
              "life-purpose-answers",
              JSON.stringify(answers),
            );
          }}
          className="wax-seal-btn w-full justify-center"
          data-ocid="life-purpose.save_button"
        >
          💾 Save My Dharma Discovery
        </button>
        <Link
          to="/guidance"
          className="wax-seal-btn wax-seal-btn-saffron w-full justify-center text-center"
          data-ocid="life-purpose.talk_krishna"
        >
          🙏 Discuss My Dharma with Krishna
        </Link>
        <button
          type="button"
          onClick={onRestart}
          className="font-body text-sm italic text-center py-2 transition-all"
          style={{ color: "oklch(0.52 0.14 46)" }}
          data-ocid="life-purpose.restart_button"
        >
          ↺ Begin Again (18 questions)
        </button>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export function LifePurposePage() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("life-purpose-answers") ?? "{}",
      ) as Record<number, string>;
    } catch {
      return {};
    }
  });
  const [completed, setCompleted] = useState(false);
  const [dharmaResult, setDharmaResult] = useState<DharmaResult | null>(null);

  useEffect(() => {
    if (completed && !dharmaResult) {
      setDharmaResult(generateDharma(answers));
    }
  }, [completed, dharmaResult, answers]);

  const handleAnswer = (value: string) => {
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

  const currentAnswer = answers[QUESTIONS[currentQ]?.id] ?? "";

  return (
    <div className="min-h-screen relative" data-ocid="life-purpose.page">
      <ManuscriptBackground />
      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p
            className="font-display text-xs tracking-[0.35em] mb-2"
            style={{ color: "oklch(0.62 0.26 32 / 0.85)" }}
          >
            ॥ हरे कृष्ण ॥
          </p>
          <h1
            className="font-display font-bold italic mb-1"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "oklch(0.18 0.08 32)",
              textShadow: "0 2px 12px oklch(0.76 0.32 54 / 0.2)",
            }}
          >
            जीवन लक्ष्य खोज
          </h1>
          <p
            className="font-body text-sm italic"
            style={{ color: "oklch(0.52 0.14 46)" }}
          >
            Life Purpose Finder — Krishna reveals your dharma
          </p>
        </motion.div>

        {/* Intro — before started */}
        {!started && !completed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="manuscript-card p-6 mb-6 text-center">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌟</div>
              <p
                className="font-display italic font-bold mb-3"
                style={{
                  color: "oklch(0.18 0.08 32)",
                  fontSize: "1.2rem",
                  lineHeight: 1.4,
                }}
              >
                "Your dharma is not an accident. Krishna placed it in you before
                you were born."
              </p>
              <p
                className="font-body text-sm mb-4"
                style={{ color: "oklch(0.42 0.12 44)", lineHeight: 1.75 }}
              >
                These 18 sacred questions — one for each chapter of the Gita —
                will help you discover it. Answer slowly. Answer honestly.
                Krishna is listening.
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
                {["18 Questions", "10 Minutes", "Your Dharma Forever"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full px-3 py-1 font-body text-xs"
                      style={{
                        background: "oklch(0.76 0.32 54 / 0.12)",
                        border: "1px solid oklch(0.76 0.32 54 / 0.3)",
                        color: "oklch(0.38 0.14 36)",
                      }}
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
            {Object.keys(answers).length > 0 && (
              <div className="manuscript-card p-4 mb-4 flex items-center gap-3">
                <span style={{ fontSize: "1.3rem" }}>↩</span>
                <div className="flex-1">
                  <p
                    className="font-body text-sm"
                    style={{ color: "oklch(0.32 0.10 38)" }}
                  >
                    You have {Object.keys(answers).length} saved answers
                  </p>
                  <p
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.52 0.10 44)" }}
                  >
                    Continue from where you left off or start fresh
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentQ(
                      Math.min(
                        Object.keys(answers).length,
                        QUESTIONS.length - 1,
                      ),
                    );
                    setStarted(true);
                  }}
                  className="font-display text-xs italic font-bold"
                  style={{ color: "oklch(0.62 0.26 32)" }}
                  data-ocid="life-purpose.continue_button"
                >
                  Continue
                </button>
              </div>
            )}
            <motion.button
              type="button"
              onClick={() => setStarted(true)}
              whileTap={{ scale: 0.97 }}
              className="wax-seal-btn w-full justify-center"
              data-ocid="life-purpose.start_button"
            >
              ✦ Begin the Sacred Journey ✦
            </motion.button>
          </motion.div>
        )}

        {/* Questions */}
        {started && !completed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Progress */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.14 46)" }}
                >
                  Question {currentQ + 1} of 18
                </span>
                <span
                  className="font-display text-xs"
                  style={{ color: "oklch(0.62 0.26 32 / 0.7)" }}
                >
                  {Math.round(((currentQ + 1) / 18) * 100)}% complete
                </span>
              </div>
              <div
                className="rounded-full overflow-hidden mb-3"
                style={{ height: 3, background: "oklch(0.80 0.08 62 / 0.4)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                  }}
                  animate={{ width: `${((currentQ + 1) / 18) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <ProgressOrbs total={18} current={currentQ} />
            </div>

            <AnimatePresence mode="wait">
              <QuestionCard
                key={currentQ}
                question={QUESTIONS[currentQ]}
                value={currentAnswer}
                onChange={handleAnswer}
                onNext={handleNext}
                onPrev={handlePrev}
                isLast={currentQ === QUESTIONS.length - 1}
                isFirst={currentQ === 0}
              />
            </AnimatePresence>
          </motion.div>
        )}

        {/* Revelation */}
        {completed && dharmaResult && (
          <DharmaReveal
            result={dharmaResult}
            answers={answers}
            onRestart={handleRestart}
          />
        )}

        <div className="text-center mt-8">
          <Link
            to="/"
            className="font-body text-xs italic"
            style={{ color: "oklch(0.52 0.14 46)" }}
            data-ocid="life-purpose.back_home"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
