// ─── Videos Page — Kurukshetra Sacred Story · Season 1 ───────────────────────
// Only Kurukshetra Season 1 Episodes 1 & 2 — available offline — inside app

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Petal Config ─────────────────────────────────────────────────────────────
const HUE_LIST = [340, 0, 32, 54, 320, 340];
const PETAL_CONFIG = Array.from({ length: 12 }, (_, i) => ({
  key: `p${i}`,
  left: `${3 + i * 8}%`,
  delay: `${(i * 0.15).toFixed(2)}s`,
  hue: HUE_LIST[i % 6],
  size: 9 + (i % 5) * 3,
  rot: (i * 22) % 180,
}));

function FlowerPetals({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-[60]" aria-hidden>
      {PETAL_CONFIG.map((p) => (
        <div
          key={p.key}
          style={{
            position: "absolute",
            left: p.left,
            top: "-20px",
            width: p.size,
            height: p.size * 1.5,
            background: `oklch(0.84 0.28 ${p.hue} / 0.88)`,
            borderRadius: "50% 50% 30% 30%",
            animation: "petalFall 2.6s ease-in forwards",
            animationDelay: p.delay,
            transform: `rotate(${p.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Video Modal — plays inside app ──────────────────────────────────────────

interface VideoModalProps {
  title: string;
  embedUrl: string;
  onClose: () => void;
}

function VideoModal({ title, embedUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: "oklch(0.06 0.06 280 / 0.97)",
        backdropFilter: "blur(16px)",
      }}
      onClick={onClose}
      data-ocid="videos.modal"
    >
      <motion.div
        className="w-full max-w-3xl"
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 12 }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "3px",
            borderRadius: "10px",
            background:
              "linear-gradient(135deg, oklch(0.88 0.40 54) 0%, oklch(0.70 0.28 46) 25%, oklch(0.52 0.26 268) 50%, oklch(0.80 0.36 54) 75%, oklch(0.88 0.40 54) 100%)",
            backgroundSize: "200% 200%",
            animation: "luxury-border-shift 4s linear infinite",
            boxShadow:
              "0 0 48px oklch(0.78 0.36 54 / 0.55), 0 0 96px oklch(0.60 0.28 268 / 0.30)",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              background: "oklch(0.09 0.07 280)",
              padding: "16px 16px 12px 16px",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="font-display text-[0.58rem] font-bold tracking-[0.2em] uppercase px-3 py-1"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.80 0.36 54), oklch(0.72 0.30 46))",
                  color: "oklch(0.12 0.08 32)",
                  borderRadius: "12px",
                }}
              >
                ▶ Playing Inside App · Sacred Theatre
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 font-bold transition-all duration-200 hover:scale-110"
                style={{
                  background: "oklch(0.18 0.08 280)",
                  border: "1.5px solid oklch(0.78 0.34 54 / 0.4)",
                  borderRadius: "6px",
                  color: "oklch(0.82 0.30 54)",
                  fontSize: "1rem",
                }}
                aria-label="Close video"
                data-ocid="videos.modal.close_button"
              >
                ✕
              </button>
            </div>

            <p
              className="font-display font-bold italic text-center mb-3 px-2"
              style={{
                fontSize: "0.82rem",
                color: "oklch(0.88 0.22 60)",
                textShadow: "0 0 20px oklch(0.78 0.34 54 / 0.5)",
              }}
            >
              {title}
            </p>
            <div
              className="mb-3"
              style={{
                height: "1.5px",
                background:
                  "linear-gradient(90deg, transparent, oklch(0.78 0.34 54 / 0.7), oklch(0.62 0.28 268 / 0.5), oklch(0.78 0.34 54 / 0.7), transparent)",
              }}
            />

            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1.5px solid oklch(0.78 0.34 54 / 0.35)",
                boxShadow: "0 8px 48px oklch(0.08 0.06 280 / 0.8)",
              }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, oklch(0.78 0.30 54 / 0.3))",
                }}
              />
              <span
                className="font-body text-[9px] italic"
                style={{ color: "oklch(0.50 0.10 268 / 0.7)" }}
              >
                ✦ Hare Krishna · Available Offline · Tap outside to close ✦
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(to left, transparent, oklch(0.78 0.30 54 / 0.3))",
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Episode data ─────────────────────────────────────────────────────────────

interface KurukshetraEpisode {
  episode: number;
  season: number;
  title: string;
  titleSanskrit: string;
  duration: string;
  description: string;
  highlights: string[];
  keyGitaVerse: { ref: string; text: string };
  embedUrl: string;
  hue: number;
  offlineAvailable: boolean;
}

const EPISODES: KurukshetraEpisode[] = [
  {
    episode: 1,
    season: 1,
    title: "Episode 1 — The Call of Dharma",
    titleSanskrit: "धर्म का आह्वान",
    duration: "42 min",
    description:
      "The great war is about to begin. On the sacred field of Kurukshetra — where Brahmins performed rituals for ages — two vast armies stand facing each other. Prince Arjuna asks Krishna to drive his chariot between the armies. What he sees breaks his heart. The Bhagavad Gita is about to be born from this moment of grief and divine surrender.",
    highlights: [
      "Two armies assemble on the battlefield of Kurukshetra",
      "Arjuna surveys his kinsmen on both sides — his teachers, grandfathers, brothers",
      "Arjuna's bow slips from his hands. He collapses in grief",
      "He declares he will not fight — 'What is a kingdom worth, if won by killing one's own?'",
      "Krishna prepares to speak the eternal wisdom of the Bhagavad Gita",
    ],
    keyGitaVerse: {
      ref: "BG 2.7",
      text: "I ask you — what is truly beneficial for me? I am your disciple. I surrender to you. Please teach me.",
    },
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1",
    hue: 28,
    offlineAvailable: true,
  },
  {
    episode: 2,
    season: 1,
    title: "Episode 2 — The Great War Begins",
    titleSanskrit: "महायुद्ध का आरम्भ",
    duration: "38 min",
    description:
      "Krishna speaks the eternal Bhagavad Gita — all 18 chapters of divine wisdom delivered on the battlefield. Arjuna rises transformed. The conch shells sound. The greatest war in human history begins. Bhishma Pitamaha, the invincible grandsire, commands the Kaurava forces. Day 1 through Day 3 of the 18-day battle unfolds.",
    highlights: [
      "Krishna reveals the nature of the immortal soul — 'It is never born nor does it die'",
      "The Bhagavad Gita is spoken — all 18 chapters, 700 sacred verses",
      "Arjuna's grief transforms to divine clarity and readiness",
      "Bhishma takes supreme command of the Kaurava forces",
      "The first three days of battle — dharma meets adharma",
    ],
    keyGitaVerse: {
      ref: "BG 2.20",
      text: "The soul is never born nor dies at any time. It is unborn, eternal, ever-existing and primeval. It is not slain when the body is slain.",
    },
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    hue: 46,
    offlineAvailable: true,
  },
];

// ─── Episode Card ─────────────────────────────────────────────────────────────

function EpisodeCard({
  ep,
  index,
  onPlay,
}: {
  ep: KurukshetraEpisode;
  index: number;
  onPlay: (ep: KurukshetraEpisode) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      data-ocid={`videos.kurukshetra_episode.${ep.episode}`}
    >
      <div
        style={{
          padding: "2px",
          borderRadius: "12px",
          background: `linear-gradient(135deg, oklch(0.84 0.34 ${ep.hue}), oklch(0.72 0.26 ${(ep.hue + 50) % 360}), oklch(0.82 0.30 ${ep.hue}))`,
          backgroundSize: "200% 200%",
          animation: "luxury-border-shift 5s linear infinite",
          boxShadow: `0 8px 40px oklch(0.62 0.28 ${ep.hue} / 0.28)`,
        }}
      >
        <div
          style={{
            borderRadius: "11px",
            overflow: "hidden",
            background: "oklch(0.96 0.07 68 / 0.99)",
          }}
        >
          {/* Golden top accent bar */}
          <div
            style={{
              height: 4,
              background: `linear-gradient(90deg, oklch(0.80 0.34 ${ep.hue}), oklch(0.72 0.28 ${(ep.hue + 60) % 360}), oklch(0.82 0.34 ${ep.hue}))`,
            }}
          />

          {/* Thumbnail / play area */}
          <button
            type="button"
            className="relative flex items-center justify-center cursor-pointer group w-full border-0 p-0"
            style={{
              height: 200,
              background: `linear-gradient(160deg, oklch(0.14 0.09 ${ep.hue} / 0.97) 0%, oklch(0.10 0.07 ${(ep.hue + 40) % 360} / 0.94) 100%)`,
            }}
            onClick={() => onPlay(ep)}
            aria-label={`Play ${ep.title}`}
          >
            {/* Sacred radial glow backdrop */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 35%, oklch(0.65 0.26 ${ep.hue} / 0.22) 0%, transparent 55%), radial-gradient(circle at 75% 65%, oklch(0.52 0.22 ${(ep.hue + 60) % 360} / 0.18) 0%, transparent 50%)`,
              }}
            />

            {/* Season / Episode badge */}
            <div
              className="absolute top-3 left-3 z-10 font-display text-[0.55rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1"
              style={{
                borderRadius: "4px",
                background: `linear-gradient(135deg, oklch(0.80 0.34 ${ep.hue}), oklch(0.72 0.28 ${ep.hue}))`,
                color: "oklch(0.14 0.08 32)",
              }}
            >
              Season {ep.season} · Episode {ep.episode}
            </div>

            {/* Offline badge */}
            {ep.offlineAvailable && (
              <div
                className="absolute top-3 right-3 z-10 font-display text-[0.50rem] font-bold tracking-wide uppercase px-2 py-0.5"
                style={{
                  borderRadius: "3px",
                  background: "oklch(0.60 0.22 148 / 0.9)",
                  color: "oklch(0.97 0.04 70)",
                  border: "1px solid oklch(0.72 0.24 148 / 0.5)",
                }}
              >
                📵 OFFLINE
              </div>
            )}

            {/* Play button */}
            <div
              className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: `linear-gradient(135deg, oklch(0.82 0.34 ${ep.hue}), oklch(0.70 0.28 ${ep.hue}))`,
                boxShadow: `0 0 0 3px oklch(0.88 0.38 ${ep.hue} / 0.3), 0 8px 32px oklch(0.65 0.28 ${ep.hue} / 0.55)`,
              }}
            >
              <span style={{ fontSize: "1.8rem", marginLeft: "4px" }}>▶</span>
            </div>

            {/* Sanskrit label */}
            <div
              className="absolute bottom-3 left-0 right-0 text-center font-body italic"
              style={{
                fontSize: "0.62rem",
                color: `oklch(0.80 0.20 ${ep.hue})`,
              }}
            >
              {ep.titleSanskrit}
            </div>
          </button>

          {/* Episode info */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3
                  className="font-display font-bold italic leading-tight mb-1"
                  style={{ fontSize: "1.05rem", color: "oklch(0.20 0.10 32)" }}
                >
                  {ep.title}
                </h3>
                <p
                  className="font-body italic text-[0.62rem]"
                  style={{ color: `oklch(0.48 0.20 ${ep.hue})` }}
                >
                  {ep.titleSanskrit}
                </p>
              </div>
              <div
                className="flex-shrink-0 font-display text-[0.58rem] font-bold tracking-wide uppercase px-2 py-1"
                style={{
                  borderRadius: "4px",
                  background: `oklch(0.88 0.14 ${ep.hue} / 0.25)`,
                  border: `1px solid oklch(0.74 0.24 ${ep.hue} / 0.4)`,
                  color: `oklch(0.40 0.20 ${ep.hue})`,
                }}
              >
                {ep.duration}
              </div>
            </div>

            <p
              className="font-body italic leading-relaxed mb-4"
              style={{
                fontSize: "0.72rem",
                color: "oklch(0.30 0.08 42)",
                lineHeight: 1.8,
              }}
            >
              {ep.description}
            </p>

            {/* Highlights */}
            <div className="mb-4">
              <p
                className="font-display text-[0.56rem] tracking-[0.18em] uppercase font-bold mb-2"
                style={{ color: `oklch(0.46 0.20 ${ep.hue})` }}
              >
                ✦ Episode Highlights
              </p>
              <ul className="space-y-1">
                {ep.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 font-body"
                    style={{
                      fontSize: "0.66rem",
                      color: "oklch(0.32 0.08 42)",
                    }}
                  >
                    <span
                      style={{
                        color: `oklch(0.68 0.26 ${ep.hue})`,
                        flexShrink: 0,
                      }}
                    >
                      ✦
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gita Verse */}
            <div
              className="rounded-lg p-3 mb-4"
              style={{
                background: `linear-gradient(135deg, oklch(0.92 0.08 ${ep.hue} / 0.22), oklch(0.96 0.04 62 / 0.18))`,
                border: `1.5px solid oklch(0.78 0.22 ${ep.hue} / 0.38)`,
                borderLeft: `4px solid oklch(0.70 0.26 ${ep.hue})`,
              }}
            >
              <p
                className="font-display text-[0.55rem] tracking-[0.18em] uppercase font-bold mb-1"
                style={{ color: `oklch(0.44 0.20 ${ep.hue})` }}
              >
                📖 {ep.keyGitaVerse.ref}
              </p>
              <p
                className="font-body italic leading-relaxed"
                style={{ fontSize: "0.68rem", color: "oklch(0.26 0.10 36)" }}
              >
                "{ep.keyGitaVerse.text}"
              </p>
            </div>

            {/* Play CTA */}
            <button
              type="button"
              onClick={() => onPlay(ep)}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 font-display font-bold italic tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{
                fontSize: "0.78rem",
                borderRadius: "6px",
                background: `linear-gradient(135deg, oklch(0.82 0.34 ${ep.hue}), oklch(0.72 0.28 ${ep.hue}))`,
                color: "oklch(0.12 0.08 32)",
                boxShadow: `0 4px 20px oklch(0.65 0.26 ${ep.hue} / 0.40)`,
                border: `1.5px solid oklch(0.88 0.36 ${ep.hue} / 0.5)`,
              }}
              data-ocid={`videos.episode_play.${ep.episode}`}
            >
              <span style={{ fontSize: "1rem" }}>▶</span>
              Watch Episode {ep.episode} — Inside App
            </button>
          </div>

          <div
            style={{
              height: 3,
              background: `linear-gradient(90deg, transparent, oklch(0.72 0.26 ${ep.hue} / 0.5), transparent)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export function VideosPage() {
  const [playing, setPlaying] = useState<KurukshetraEpisode | null>(null);
  const [petals, setPetals] = useState(false);

  function handlePlay(ep: KurukshetraEpisode) {
    setPlaying(ep);
    setPetals(true);
    setTimeout(() => setPetals(false), 3200);
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.94 0.10 58) 0%, oklch(0.90 0.12 52) 40%, oklch(0.88 0.10 60) 100%)",
      }}
    >
      <div className="rainbow-border-line" />
      <FlowerPetals active={petals} />

      {/* Page Header */}
      <div className="max-w-3xl mx-auto px-4 pt-6 pb-3 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="font-display text-[10px] tracking-[0.35em] uppercase mb-1"
            style={{ color: "oklch(0.58 0.24 32 / 0.9)" }}
          >
            ✦ कुरुक्षेत्र पवित्र कथा ✦
          </p>
          <h1
            className="font-display font-bold italic"
            style={{
              fontSize: "clamp(1.4rem, 5vw, 2rem)",
              color: "oklch(0.62 0.28 32)",
              textShadow: "0 0 28px oklch(0.82 0.34 32 / 0.4)",
            }}
          >
            Kurukshetra Sacred Story
          </h1>
          <p
            className="font-body text-xs italic mt-1"
            style={{ color: "oklch(0.50 0.18 36 / 0.80)" }}
          >
            Season 1 · Episodes 1 & 2 · Available Offline
          </p>
        </motion.div>

        {/* Battlefield hero banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="mt-5 rounded-2xl overflow-hidden relative"
          style={{
            height: 160,
            background:
              "linear-gradient(135deg, oklch(0.18 0.12 28) 0%, oklch(0.24 0.14 36) 40%, oklch(0.16 0.10 32) 100%)",
            border: "2px solid oklch(0.72 0.28 46 / 0.5)",
            boxShadow: "0 8px 40px oklch(0.48 0.22 32 / 0.35)",
          }}
        >
          {/* Sacred radial glow */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, oklch(0.70 0.28 50 / 0.20) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-2 px-4">
            <div className="text-4xl">⚔️</div>
            <p
              className="font-display font-bold italic text-center"
              style={{
                fontSize: "0.95rem",
                color: "oklch(0.90 0.16 62)",
                textShadow: "0 0 20px oklch(0.78 0.32 52 / 0.6)",
              }}
            >
              धर्मक्षेत्रे कुरुक्षेत्रे
            </p>
            <p
              className="font-body italic text-center"
              style={{
                fontSize: "0.68rem",
                color: "oklch(0.72 0.16 54 / 0.85)",
              }}
            >
              "On the sacred field of Kurukshetra, the field of dharma..."
            </p>
            <div
              className="px-3 py-1 rounded-full font-display text-[0.55rem] font-bold tracking-wider uppercase"
              style={{
                background: "oklch(0.62 0.26 148 / 0.9)",
                color: "oklch(0.97 0.04 70)",
                border: "1px solid oklch(0.72 0.24 148 / 0.5)",
              }}
            >
              📵 Fully Available Offline
            </div>
          </div>
        </motion.div>
      </div>

      {/* Episodes */}
      <div
        className="max-w-3xl mx-auto px-4 pb-10 space-y-6"
        data-ocid="videos.episodes_list"
      >
        {EPISODES.map((ep, i) => (
          <EpisodeCard key={ep.episode} ep={ep} index={i} onPlay={handlePlay} />
        ))}

        {/* Coming soon label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center py-6 px-4 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.92 0.08 54 / 0.35) 0%, oklch(0.96 0.05 62 / 0.25) 100%)",
            border: "1.5px dashed oklch(0.72 0.22 50 / 0.50)",
          }}
          data-ocid="videos.coming_soon"
        >
          <div className="text-3xl mb-2">🎬</div>
          <p
            className="font-display font-bold italic"
            style={{ fontSize: "0.88rem", color: "oklch(0.50 0.22 46)" }}
          >
            More episodes coming soon
          </p>
          <p
            className="font-body text-xs italic mt-1"
            style={{ color: "oklch(0.46 0.14 44 / 0.80)" }}
          >
            Season 1 in progress — 18 days, 18 episodes, the complete
            Kurukshetra story
          </p>
          <p
            className="font-body text-[10px] italic mt-2"
            style={{ color: "oklch(0.60 0.20 46 / 0.65)" }}
          >
            ✦ Each episode covers one day of the sacred battle ✦
          </p>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {playing && (
          <VideoModal
            title={playing.title}
            embedUrl={playing.embedUrl}
            onClose={() => setPlaying(null)}
          />
        )}
      </AnimatePresence>

      <div className="rainbow-border-line" />
    </div>
  );
}

export default VideosPage;

// ─── Re-export KURUKSHETRA_DAYS for Gallery story cards ──────────────────────

export interface KurukshetraDay {
  day: number;
  title: string;
  titleSanskrit: string;
  keyWarrior: string;
  warSymbol: string;
  story: string;
  gitaVerse: { ref: string; sanskrit: string; meaning: string };
  krishnaWisdom: string;
  characters: string[];
  hue: number;
}

export const KURUKSHETRA_DAYS: KurukshetraDay[] = [
  {
    day: 1,
    title: "The Armies Assemble — Arjuna's Grief",
    titleSanskrit: "सेना संग्रह — अर्जुन विषाद",
    keyWarrior: "Arjuna & Krishna",
    warSymbol: "⚔️",
    story:
      "On Kurukshetra — Dharma Kshetra — two vast armies gathered at dawn. Arjuna's chariot was driven by Lord Krishna to the battlefield centre. What Arjuna saw shattered him — grandfathers, teachers, beloved friends on both sides. He collapsed declaring he would not fight. The Bhagavad Gita was about to be born from this grief.",
    gitaVerse: {
      ref: "BG 2.7",
      sanskrit: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः।",
      meaning:
        "My nature is overcome with weakness and confusion. I ask you — what is truly beneficial for me? I surrender to you. Teach me.",
    },
    krishnaWisdom:
      "When Arjuna surrendered — truly surrendered — all his knowledge and pride, only then was he ready to receive the Gita.",
    characters: [
      "Arjuna",
      "Krishna",
      "Bhishma",
      "Dhrishtadyumna",
      "Duryodhana",
    ],
    hue: 28,
  },
  {
    day: 2,
    title: "Bhishma as Supreme Commander",
    titleSanskrit: "भीष्म सेनापति",
    keyWarrior: "Bhishma Pitamaha",
    warSymbol: "🏹",
    story:
      "Grandsire Bhishma took command of the Kaurava army. He arranged forces in the Makara Vyuha formation. His arrows flew like a river in full flood. Yet he restrained his fury out of love for the Pandavas.",
    gitaVerse: {
      ref: "BG 2.19",
      sanskrit: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।",
      meaning:
        "One who thinks the soul is the slayer and one who thinks it is slain — both fail to perceive the truth. The soul neither slays nor is it slain.",
    },
    krishnaWisdom:
      "Bhishma the warrior could be wounded, but Bhishma the soul was untouchable. Every arrow touched only the body. The eternal witness inside each warrior remained unhurt.",
    characters: ["Bhishma", "Arjuna", "Krishna", "Duryodhana"],
    hue: 46,
  },
  {
    day: 3,
    title: "Arjuna's Skill Against the Grandsire",
    titleSanskrit: "अर्जुन पराक्रम",
    keyWarrior: "Arjuna",
    warSymbol: "🌊",
    story:
      "Arjuna — now illumined by divine knowledge — fought not from anger but from dharmic duty. Krishna drove straight into Bhishma's forces. Abhimanyu, Arjuna's teenage son, showed extraordinary bravery that shocked even senior warriors.",
    gitaVerse: {
      ref: "BG 3.30",
      sanskrit: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।",
      meaning:
        "Surrender all actions to Me, with your mind on the Self. Fight free from desire and grief.",
    },
    krishnaWisdom:
      "Arjuna fought today not for himself but as My instrument. The warrior who fights without personal desire is truly invincible.",
    characters: ["Arjuna", "Krishna", "Bhishma", "Abhimanyu"],
    hue: 220,
  },
  {
    day: 4,
    title: "Bhishma Wounds the Pandavas",
    titleSanskrit: "भीष्म का कोप",
    keyWarrior: "Bhishma",
    warSymbol: "🔥",
    story:
      "Bhishma moved like a blazing fire through dry grass, cutting through Pandava formations with terrifying efficiency. Bhima charged forward and devastated the Kaurava elephant corps.",
    gitaVerse: {
      ref: "BG 11.33",
      sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व।",
      meaning:
        "Therefore arise, win glory. These warriors have already been killed by Me. You are merely the instrument.",
    },
    krishnaWisdom:
      "The outcome was already decided in the cosmic order. Those who fight for adharma were already slain in the eternal plan.",
    characters: ["Bhishma", "Bhima", "Yudhishthira", "Dronacharya"],
    hue: 20,
  },
  {
    day: 5,
    title: "Abhimanyu's Extraordinary Valor",
    titleSanskrit: "अभिमन्यु का शौर्य",
    keyWarrior: "Abhimanyu",
    warSymbol: "⭐",
    story:
      "Day five — Abhimanyu, sixteen years old, rose to prominence. Even Bhishma praised him openly. Warriors on both sides watched in astonishment as this teenager fought like a god descended from the heavens.",
    gitaVerse: {
      ref: "BG 4.7",
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
      meaning:
        "Whenever dharma declines and adharma rises — at that time I manifest Myself on earth.",
    },
    krishnaWisdom:
      "Abhimanyu was a manifestation of divine fire. Every generation produces such souls — young, fearless, full of divine purpose.",
    characters: ["Abhimanyu", "Arjuna", "Krishna", "Bhishma"],
    hue: 54,
  },
  {
    day: 6,
    title: "Shalya vs Yudhishthira",
    titleSanskrit: "शल्य बनाम युधिष्ठिर",
    keyWarrior: "Yudhishthira",
    warSymbol: "🌿",
    story:
      "Yudhishthira — Dharmaraja, the embodiment of righteousness — held his ground against Shalya with remarkable courage. The battle tested Pandava unity. Bhima continued his devastating attacks on the Kaurava formations.",
    gitaVerse: {
      ref: "BG 6.5",
      sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
      meaning:
        "One should elevate oneself by one's own efforts. For the self alone is the friend of the self.",
    },
    krishnaWisdom:
      "Yudhishthira's greatest battle was the internal war — between despair and courage. Your own mind is simultaneously your greatest ally and your greatest enemy.",
    characters: ["Yudhishthira", "Shalya", "Bhima", "Arjuna"],
    hue: 148,
  },
  {
    day: 7,
    title: "Drona Becomes Supreme Commander",
    titleSanskrit: "द्रोण सेनापति बने",
    keyWarrior: "Dronacharya",
    warSymbol: "🎯",
    story:
      "With Bhishma fallen on Day 10, Dronacharya took command. Given one mission: capture Yudhishthira alive. Drona deployed complex formations — Chakravyuha, Garuda Vyuha — that challenged even the finest Pandava strategists.",
    gitaVerse: {
      ref: "BG 18.47",
      sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।",
      meaning:
        "Better is one's own duty, even imperfectly performed, than the duty of another well performed.",
    },
    krishnaWisdom:
      "Drona's tragedy was fighting against his own conscience. When we perform duty mechanically without checking our deepest truth, we lose the internal battle.",
    characters: ["Dronacharya", "Duryodhana", "Arjuna", "Yudhishthira"],
    hue: 268,
  },
  {
    day: 8,
    title: "Iravan Slain — Arjuna's Son Falls",
    titleSanskrit: "इरावान वध",
    keyWarrior: "Iravan",
    warSymbol: "🌙",
    story:
      "Day eight — the death of Iravan, Arjuna's son born of the Naga princess Ulupi. He fought with fearless courage, killing many Kaurava warriors. News of his death reached Arjuna on the battlefield, yet the great archer continued fighting.",
    gitaVerse: {
      ref: "BG 2.20",
      sanskrit: "न जायते म्रियते वा कदाचिन्।",
      meaning:
        "The soul is never born nor dies at any time. It is unborn, eternal, ever-existing and primeval.",
    },
    krishnaWisdom:
      "When you lose someone you love, grieve yes. But beneath the grief is a truth: the soul is eternal. Grieve, then wipe your tears and fulfil your dharma.",
    characters: ["Iravan", "Arjuna", "Krishna", "Alambusha"],
    hue: 240,
  },
  {
    day: 9,
    title: "Bhishma's Fierce Final Battle",
    titleSanskrit: "भीष्म का अंतिम युद्ध",
    keyWarrior: "Bhishma",
    warSymbol: "💫",
    story:
      "Krishna made an unprecedented decision — he picked up a chariot wheel and advanced toward Bhishma, breaking his vow not to personally fight. Bhishma stood with folded hands: 'Come, Keshava. If killed by Your hand, I attain liberation.'",
    gitaVerse: {
      ref: "BG 9.22",
      sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।",
      meaning:
        "For those who worship Me with devotion, I carry what they lack and preserve what they have.",
    },
    krishnaWisdom:
      "Bhishma saw the Lord coming with a wheel and felt only joy. That is pure devotion. When we are completely surrendered, even the Lord's wrath becomes a blessing.",
    characters: ["Bhishma", "Krishna", "Arjuna"],
    hue: 54,
  },
  {
    day: 10,
    title: "Bhishma Falls — The Arrow Bed",
    titleSanskrit: "भीष्म पतन — शर शय्या",
    keyWarrior: "Bhishma & Shikhandi",
    warSymbol: "🌸",
    story:
      "Arjuna's arrows pierced the grandsire. Bhishma fell — held aloft by dozens of arrows, creating a divine bed. All fighting ceased. Warriors from both sides surrounded the fallen elder in grief and reverence.",
    gitaVerse: {
      ref: "BG 8.5",
      sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।",
      meaning:
        "Whoever, at the time of death, gives up the body remembering Me alone — reaches My state.",
    },
    krishnaWisdom:
      "Bhishma chose his own moment of death. His life teaches: how you die is determined by how you live. Die in full consciousness with His name on your lips.",
    characters: ["Bhishma", "Arjuna", "Shikhandi", "Krishna"],
    hue: 340,
  },
  {
    day: 11,
    title: "Karna Enters the Battle",
    titleSanskrit: "कर्ण का प्रवेश",
    keyWarrior: "Karna",
    warSymbol: "☀️",
    story:
      "With Bhishma fallen, Karna entered. Born of Kunti and the Sun God, raised as a charioteer's son, wronged by the world — loyal to Duryodhana who had given him dignity when all else called him baseborn. The most tragic hero of the Mahabharata.",
    gitaVerse: {
      ref: "BG 13.21",
      sanskrit: "पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान्।",
      meaning:
        "The living entity meets good and evil births based on attachment to the modes of material nature.",
    },
    krishnaWisdom:
      "Karna's story teaches: generosity, loyalty, and honour can exist even in a broken world. The circumstances of birth do not determine the greatness of the soul.",
    characters: ["Karna", "Duryodhana", "Arjuna", "Krishna"],
    hue: 46,
  },
  {
    day: 12,
    title: "Drona's Chakravyuha Formation",
    titleSanskrit: "चक्रव्यूह रचना",
    keyWarrior: "Dronacharya",
    warSymbol: "🌀",
    story:
      "Drona deployed the deadly Chakravyuha spiral formation. Only Arjuna and Abhimanyu knew how to enter it. With Arjuna occupied elsewhere, the young Abhimanyu volunteered to enter alone.",
    gitaVerse: {
      ref: "BG 16.1-3",
      sanskrit: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।",
      meaning:
        "Fearlessness, purity of heart, steadfastness in knowledge and yoga — these are the divine qualities.",
    },
    krishnaWisdom:
      "The Chakravyuha is a perfect metaphor for life: we enter many situations without fully knowing how to exit them. The courage to enter anyway — trusting dharma — is itself divine.",
    characters: ["Abhimanyu", "Dronacharya", "Duryodhana", "Jayadratha"],
    hue: 280,
  },
  {
    day: 13,
    title: "Abhimanyu Enters the Chakravyuha and Falls",
    titleSanskrit: "अभिमन्यु वध",
    keyWarrior: "Abhimanyu",
    warSymbol: "💔",
    story:
      "Abhimanyu entered the Chakravyuha alone. He defeated Drona, Karna, and many others. Six supreme warriors surrounded him simultaneously. The teenage hero fought with a chariot wheel until he was finally slain. A vow formed in Arjuna's heart.",
    gitaVerse: {
      ref: "BG 2.11",
      sanskrit: "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।",
      meaning:
        "You grieve for those who should not be grieved for. The wise grieve neither for the living nor the dead.",
    },
    krishnaWisdom:
      "Abhimanyu had all the divine qualities. 'I came, I fought, I gave everything. I did not die hiding. I died charging forward.' That is not tragedy — that is glory.",
    characters: ["Abhimanyu", "Arjuna", "Krishna", "Dronacharya", "Karna"],
    hue: 6,
  },
  {
    day: 14,
    title: "Arjuna's Terrible Vow — Jayadratha Falls",
    titleSanskrit: "अर्जुन की प्रतिज्ञा",
    keyWarrior: "Arjuna",
    warSymbol: "⚡",
    story:
      "Arjuna vowed: 'Before sunset tomorrow, I will kill Jayadratha — or I will enter fire.' Krishna used his cosmic power to cover the sun, exposing Jayadratha. In that moment, Arjuna's arrow flew. The great vow was fulfilled.",
    gitaVerse: {
      ref: "BG 4.42",
      sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः।",
      meaning:
        "Therefore, with the sword of knowledge cutting doubt born of ignorance — take refuge in yoga. Arise, O Arjuna.",
    },
    krishnaWisdom:
      "Sometimes what appears to be the end of your chance is actually the setup for your greatest shot. The warrior who stays focused when it seems all is lost — that warrior is My instrument.",
    characters: ["Arjuna", "Krishna", "Jayadratha", "Dronacharya"],
    hue: 32,
  },
  {
    day: 15,
    title: "Drona Slain by Dhrishtadyumna",
    titleSanskrit: "द्रोण वध",
    keyWarrior: "Dhrishtadyumna",
    warSymbol: "🌅",
    story:
      "To defeat Drona, the Pandavas spread news that his beloved son Ashwatthama had been killed. Drona set down his bow in grief. Dhrishtadyumna — born from fire to avenge an insult to his father — beheaded the master.",
    gitaVerse: {
      ref: "BG 4.17",
      sanskrit: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः।",
      meaning:
        "The intricacies of action are very hard to understand. One must know the nature of action and inaction.",
    },
    krishnaWisdom:
      "Drona had taught both sides but fought for adharma. The karma of his choices brought him to this moment. Every action has its fruit — this is the law I uphold in every age.",
    characters: ["Dronacharya", "Dhrishtadyumna", "Yudhishthira", "Bhima"],
    hue: 52,
  },
  {
    day: 16,
    title: "Karna as Supreme Commander",
    titleSanskrit: "कर्ण सेनापति",
    keyWarrior: "Karna",
    warSymbol: "🌟",
    story:
      "Karna accepted command with a king's dignity. He fought brilliantly, seeking Arjuna — the confrontation fate had built toward for eighteen years. But karma was gathering like storm clouds.",
    gitaVerse: {
      ref: "BG 2.3",
      sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।",
      meaning:
        "Do not yield to impotence, O Arjuna, for it does not befit you. Arise, O scorcher of enemies.",
    },
    krishnaWisdom:
      "Karna lived the Gita without being told it. Do your duty with full knowledge of the outcome, without fear, without clinging to results.",
    characters: ["Karna", "Duryodhana", "Arjuna", "Krishna"],
    hue: 46,
  },
  {
    day: 17,
    title: "Karna vs Arjuna — The Final Confrontation",
    titleSanskrit: "कर्ण अर्जुन युद्ध — अंतिम",
    keyWarrior: "Karna",
    warSymbol: "🌠",
    story:
      "The greatest archers of the age met in final battle. Parashurama's curse activated — Karna's chariot wheel sank into the earth. He called out: 'A warrior does not attack an unarmed man!' Krishna spoke: 'Where was your dharma when Draupadi was dishonoured?' Arjuna's arrow flew.",
    gitaVerse: {
      ref: "BG 16.21",
      sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।",
      meaning:
        "There are three gates to self-destructive hell: lust, anger, and greed. Abandon these three.",
    },
    krishnaWisdom:
      "I wept for Karna. His death was a liberation. A soul of his calibre could not remain bound to adharma. Karna will always live in My heart as the greatest example of grace under impossible circumstances.",
    characters: ["Karna", "Arjuna", "Krishna", "Shalya"],
    hue: 6,
  },
  {
    day: 18,
    title: "Duryodhana's Last Battle — War Ends",
    titleSanskrit: "दुर्योधन का अंत — महायुद्ध समाप्ति",
    keyWarrior: "Bhima & Duryodhana",
    warSymbol: "🕊️",
    story:
      "Duryodhana was alone. Yudhishthira challenged him. Bhima struck below the waist — fulfilling a sacred vow. Duryodhana fell. Eighteen days after it began, the war of Kurukshetra ended. Victory came to dharma.",
    gitaVerse: {
      ref: "BG 18.78",
      sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।",
      meaning:
        "Wherever there is Krishna and Arjuna the archer — there will surely be prosperity, victory, and righteousness.",
    },
    krishnaWisdom:
      "The war is over. The Gita born from this war will outlast every kingdom, every civilisation. You — reading this now — are Arjuna on your own Kurukshetra. I am still here, still driving your chariot.",
    characters: ["Duryodhana", "Bhima", "Yudhishthira", "Krishna"],
    hue: 160,
  },
];
