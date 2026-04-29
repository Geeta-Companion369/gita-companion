import { Skeleton } from "@/components/ui/skeleton";
import { GITA_CHAPTERS } from "@/data/gita-chapters";
import { useChapters } from "@/hooks/use-chapters";
import { useLastRead } from "@/hooks/use-last-read";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

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
  "XVIII",
];

// Each chapter's accent hue — cycles through gold, saffron, lapis
const CHAPTER_HUES = [
  52, 46, 38, 54, 32, 268, 52, 46, 54, 38, 268, 52, 46, 38, 54, 268, 52, 46,
];

export function GitaIndexPage() {
  const { data: chapters, isLoading } = useChapters();
  const { lastRead } = useLastRead();

  return (
    <div className="max-w-3xl mx-auto relative">
      <style>{`
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
      `}</style>

      {/* ── Back link ── */}
      <Link
        to="/"
        className="inline-block font-body text-xs italic mb-6 transition-all duration-200 border-b border-transparent pb-0.5"
        style={{ color: "oklch(0.72 0.22 52 / 0.85)" }}
        data-ocid="gita-index.back-home"
      >
        ← Return to Home
      </Link>

      {/* ── Sacred Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mb-8 text-center px-6 py-10"
        style={{
          background: "rgba(5, 3, 20, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "2px solid oklch(0.72 0.30 46 / 0.65)",
          borderRadius: "8px",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(218,165,32,0.22)",
        }}
        data-ocid="gita-index.header"
      >
        {/* Top gold bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[4px] rounded-t-[6px]"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.72 0.30 46), oklch(0.58 0.24 268), oklch(0.72 0.30 46), oklch(0.84 0.38 54))",
            boxShadow: "0 0 14px oklch(0.78 0.34 54 / 0.55)",
          }}
        />

        {/* Corner sparkles */}
        {[
          "top-3 left-4",
          "top-3 right-4",
          "bottom-3 left-4",
          "bottom-3 right-4",
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute ${pos} text-sm pointer-events-none select-none`}
            style={{
              color: "oklch(0.84 0.38 54 / 0.60)",
              animation: "sacred-glow-pulse 3s ease-in-out infinite",
            }}
            aria-hidden
          >
            ✦
          </span>
        ))}

        {/* OM Symbol */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="flex justify-center mb-5"
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 120,
              height: 120,
              background:
                "radial-gradient(circle at 38% 33%, oklch(0.30 0.18 268) 0%, oklch(0.18 0.12 32) 60%, oklch(0.12 0.08 30) 100%)",
              border: "4px solid oklch(0.80 0.36 54)",
              boxShadow:
                "0 0 0 2px oklch(0.70 0.28 46 / 0.55), 0 6px 40px oklch(0.72 0.32 52 / 0.50)",
            }}
          >
            <span
              aria-label="Om — the sacred primordial sound"
              style={{
                fontSize: "3.8rem",
                lineHeight: 1,
                fontFamily: "'Noto Serif Devanagari', serif",
                color: "oklch(0.88 0.40 54)",
                textShadow:
                  "0 0 18px oklch(0.84 0.38 54 / 0.95), 0 0 40px oklch(0.78 0.34 54 / 0.65)",
                animation: "sacred-glow-pulse 3.5s ease-in-out infinite",
                userSelect: "none",
              }}
            >
              ॐ
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="gita-index-title font-display font-bold italic leading-tight mb-2"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)" }}
        >
          Bhagavad Gita
        </motion.h1>

        <p
          className="font-body italic mb-5"
          style={{
            fontSize: "1.05rem",
            color: "oklch(0.88 0.24 52)",
          }}
        >
          भगवद्गीता — The Song of God
        </p>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mb-6">
          {(
            [
              ["18", "Adhyāyas", 54],
              ["700", "Shlokas", 46],
              ["18", "Pathways", 268],
            ] as [string, string, number][]
          ).map(([num, label, hue]) => (
            <div key={label} className="text-center">
              <p
                className="font-display font-bold italic leading-none"
                style={{
                  fontSize: "2.2rem",
                  color: `oklch(0.90 0.38 ${hue})`,
                  textShadow: `0 0 24px oklch(0.80 0.34 ${hue} / 0.70)`,
                }}
              >
                {num}
              </p>
              <p
                className="font-body text-[10px] tracking-widest uppercase mt-1"
                style={{ color: "oklch(0.80 0.14 58 / 0.85)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Sacred tagline */}
        <div
          className="mx-auto max-w-md px-5 py-3 rounded"
          style={{
            background: "oklch(0.10 0.08 32 / 0.72)",
            border: "1.5px solid oklch(0.78 0.34 50 / 0.55)",
          }}
        >
          <p
            className="font-display italic font-semibold text-sm leading-relaxed"
            style={{ color: "oklch(0.96 0.06 66)" }}
          >
            "These 18 chapters were waiting for you.
            <br />
            Krishna placed them here knowing you would come."
          </p>
        </div>

        {/* Resume reading CTA */}
        {lastRead && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6"
          >
            <Link
              to="/verse/$chapterId/$verseId"
              params={{
                chapterId: String(lastRead.chapterId),
                verseId: lastRead.verseId,
              }}
              className="inline-block px-6 py-3 rounded-full font-display font-bold italic text-sm transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                color: "oklch(0.10 0.06 28)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.40)",
                letterSpacing: "0.04em",
              }}
              data-ocid="gita-index.resume-reading"
            >
              ← Resume Chapter {lastRead.chapterId}
            </Link>
          </motion.div>
        )}
      </motion.div>

      {/* ── Section divider ── */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.75 0.34 52 / 0.65))",
          }}
        />
        <h2
          className="font-display text-xs font-bold italic tracking-[0.16em] uppercase whitespace-nowrap"
          style={{
            color: "oklch(0.86 0.30 52)",
            textShadow:
              "0 0 16px oklch(0.78 0.34 54 / 0.55), 0 1px 4px rgba(0,0,0,0.8)",
          }}
        >
          ✦ &nbsp;Select Your Adhyāya&nbsp; ✦
        </h2>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to left, transparent, oklch(0.75 0.34 52 / 0.65))",
          }}
        />
      </div>

      {/* ── 18 Chapter Cards Grid ── */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Array.from({ length: 18 }, (_, i) => `sk-ch-${i}`).map((k) => (
            <Skeleton key={k} className="h-28 rounded" />
          ))}
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          data-ocid="gita-index.chapters-grid"
        >
          {(
            chapters ??
            GITA_CHAPTERS.map((c) => ({
              id: c.number,
              name: c.nameEnglish,
              sanskritName: c.nameDevanagari,
              summary: c.summary,
            }))
          ).map((chapter, i) => {
            const meta = GITA_CHAPTERS[i];
            const hue = CHAPTER_HUES[i] ?? 52;
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035, duration: 0.4 }}
              >
                <Link
                  to="/chapter/$id"
                  params={{ id: String(chapter.id) }}
                  className="group flex gap-4 p-4 h-full transition-all duration-200"
                  style={{
                    background: "rgba(5, 3, 20, 0.82)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: `1.5px solid oklch(0.68 0.24 ${hue} / 0.50)`,
                    borderRadius: "8px",
                    boxShadow:
                      "0 4px 18px rgba(0,0,0,0.50), inset 0 1px 0 rgba(218,165,32,0.16)",
                  }}
                  data-ocid={`gita-index.chapter.${chapter.id}`}
                >
                  {/* Chapter number badge */}
                  <div
                    className="flex-shrink-0 flex flex-col items-center justify-center rounded-lg"
                    style={{
                      width: 52,
                      height: 52,
                      background: `radial-gradient(circle at 35% 28%, oklch(0.84 0.34 ${hue}) 0%, oklch(0.58 0.24 ${hue}) 100%)`,
                      border: `2px solid oklch(0.80 0.32 ${hue} / 0.70)`,
                      boxShadow: `0 4px 16px oklch(0.70 0.28 ${hue} / 0.45)`,
                    }}
                  >
                    <span
                      className="font-display font-bold italic leading-none"
                      style={{
                        fontSize: "0.75rem",
                        color: "oklch(0.12 0.06 30)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {ROMAN[chapter.id]}
                    </span>
                    <span
                      className="font-body leading-none mt-0.5"
                      style={{
                        fontSize: "0.6rem",
                        color: "oklch(0.14 0.06 30 / 0.80)",
                      }}
                    >
                      Ch. {chapter.id}
                    </span>
                  </div>

                  {/* Chapter details */}
                  <div className="flex-1 min-w-0">
                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-[6px]"
                      style={{
                        background: `linear-gradient(90deg, transparent, oklch(0.80 0.32 ${hue} / 0.75), transparent)`,
                      }}
                    />

                    <p
                      className="font-body text-xs italic leading-tight mb-0.5 transition-smooth"
                      style={{
                        color: `oklch(0.82 0.28 ${hue})`,
                      }}
                    >
                      {meta?.yogaName ?? chapter.sanskritName}
                    </p>

                    <p
                      className="font-display font-semibold italic text-sm leading-snug mb-1 group-hover:text-primary transition-smooth"
                      style={{ color: "oklch(0.96 0.06 68)" }}
                    >
                      {chapter.sanskritName}
                    </p>

                    <p
                      className="font-body text-xs italic leading-tight mb-2"
                      style={{ color: "oklch(0.80 0.14 52 / 0.80)" }}
                    >
                      {chapter.name}
                    </p>

                    <p
                      className="font-body leading-snug line-clamp-2"
                      style={{
                        fontSize: "0.7rem",
                        color: "oklch(0.72 0.10 52 / 0.75)",
                      }}
                    >
                      {meta?.keyTheme ?? ""}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span
                        className="font-body text-[9px] italic px-2 py-0.5 rounded-full"
                        style={{
                          background: `oklch(0.72 0.24 ${hue} / 0.15)`,
                          border: `1px solid oklch(0.72 0.24 ${hue} / 0.30)`,
                          color: `oklch(0.80 0.20 ${hue} / 0.85)`,
                        }}
                      >
                        {meta?.verseCount ?? "—"} verses
                      </span>
                      <span
                        className="font-body text-[10px] italic transition-smooth opacity-0 group-hover:opacity-100"
                        style={{ color: `oklch(0.80 0.28 ${hue})` }}
                      >
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ── Footer quote ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center pb-8"
        data-ocid="gita-index.footer-quote"
      >
        <div
          className="inline-block px-8 py-5 rounded-lg"
          style={{
            background: "rgba(5, 3, 20, 0.78)",
            border: "1.5px solid oklch(0.68 0.26 50 / 0.50)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p
            className="font-body text-xs tracking-[0.25em] uppercase mb-3"
            style={{ color: "oklch(0.72 0.22 52 / 0.80)" }}
          >
            ✦ Krishna's Promise ✦
          </p>
          <p
            className="font-display italic font-semibold leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              color: "oklch(0.96 0.08 66)",
            }}
          >
            "The charioteer does not win the battle.
            <br />
            Arjuna wins the battle.
            <br />
            <span style={{ color: "oklch(0.88 0.36 54)" }}>
              Krishna simply makes sure Arjuna never fights alone.
            </span>
            "
          </p>
          <p
            className="font-body text-xs italic mt-4"
            style={{ color: "oklch(0.72 0.14 50 / 0.75)" }}
          >
            — Hare Krishna, Arjun 🙏
          </p>
        </div>
      </motion.div>
    </div>
  );
}
