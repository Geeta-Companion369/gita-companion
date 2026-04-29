import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

// ─── Shared decorations ────────────────────────────────────────────────────────

function TempleCornersDecoration() {
  return (
    <>
      {(
        [
          "top-4 left-4",
          "top-4 right-4",
          "bottom-4 left-4",
          "bottom-4 right-4",
        ] as const
      ).map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} font-display text-2xl pointer-events-none select-none`}
          style={{ color: "oklch(0.72 0.30 54 / 0.55)" }}
          aria-hidden
        >
          ✦
        </span>
      ))}
    </>
  );
}

function TempleArchHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-3">
      <div
        className="inline-block px-8 py-3 relative"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.96 0.10 60 / 0.95) 0%, oklch(0.93 0.11 57 / 0.92) 100%)",
          border: "2px solid oklch(0.72 0.30 52 / 0.70)",
          borderRadius: "80% 80% 20% 20% / 60% 60% 20% 20%",
          boxShadow:
            "0 4px 24px oklch(0.76 0.34 54 / 0.30), inset 0 1px 0 rgba(255,248,220,0.80)",
        }}
      >
        <span
          className="font-display text-[0.55rem] tracking-[0.35em] uppercase block mb-0.5"
          style={{ color: "oklch(0.55 0.22 48 / 0.80)" }}
        >
          ✦ ॐ ✦
        </span>
        <h2
          className="font-display text-xl sm:text-2xl font-bold italic"
          style={{
            color: "oklch(0.28 0.12 32)",
            textShadow: "0 2px 10px oklch(0.78 0.34 54 / 0.25)",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function SacredPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative p-6 sm:p-8 overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(150deg, oklch(0.97 0.08 66 / 0.96) 0%, oklch(0.95 0.10 62 / 0.94) 100%)",
        border: "2px solid oklch(0.72 0.28 54 / 0.55)",
        borderRadius: "6px",
        boxShadow:
          "0 8px 40px rgba(190,140,45,0.22), inset 0 1px 0 rgba(255,248,210,0.70)",
      }}
    >
      <TempleCornersDecoration />
      {children}
    </div>
  );
}

function OrnateDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.60))",
        }}
      />
      <span
        className="font-display text-sm italic select-none"
        style={{ color: "oklch(0.58 0.24 50)" }}
      >
        {label ?? "✦"}
      </span>
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.72 0.28 52 / 0.60), transparent)",
        }}
      />
    </div>
  );
}

// ─── 21 Sacred Pathways data ───────────────────────────────────────────────────

const PATHWAYS_21 = [
  {
    num: 1,
    icon: "📖",
    name: "Bhagavad Gita Reader",
    desc: "All 700 verses, 18 chapters — fully tappable",
  },
  {
    num: 2,
    icon: "🦚",
    name: "Krishna AI Chatbot",
    desc: "Gita-based guidance for every life situation",
  },
  {
    num: 3,
    icon: "📿",
    name: "Digital Mala",
    desc: "Mala counter with sacred names & intentions",
  },
  {
    num: 4,
    icon: "🕉️",
    name: "Naam Jaap",
    desc: "Sacred name writing & Japa practice",
  },
  {
    num: 5,
    icon: "🔱",
    name: "Sacred Mantra Player",
    desc: "108 Vedic mantras with full guidance",
  },
  {
    num: 6,
    icon: "🌅",
    name: "Daily Dharmic Rituals",
    desc: "18 Ekadashis, daily practices, Vedic schedule",
  },
  {
    num: 7,
    icon: "🛕",
    name: "Virtual Temple",
    desc: "HD deities, animated offerings, Aarti",
  },
  {
    num: 8,
    icon: "🪷",
    name: "Krishna Gallery",
    desc: "18 style categories of sacred Krishna art",
  },
  {
    num: 9,
    icon: "🎬",
    name: "Video Section",
    desc: "Kurukshetra story, temple darshans, bhajans",
  },
  {
    num: 10,
    icon: "⚔️",
    name: "My Kurukshetra",
    desc: "Personal battles mapped to Gita wisdom",
  },
  {
    num: 11,
    icon: "🆘",
    name: "Emergency Mode",
    desc: "18 life-saving verses, 70+ helplines offline",
  },
  {
    num: 12,
    icon: "🌸",
    name: "Garbha Sanskar Pathway",
    desc: "280-day spiritual pregnancy journey",
  },
  {
    num: 13,
    icon: "🌱",
    name: "Youth Dharma Hub",
    desc: "Krishna's guidance for the young generation",
  },
  {
    num: 14,
    icon: "🎊",
    name: "16 Sanskaar Module",
    desc: "All Vedic life milestones — birth to death",
  },
  {
    num: 15,
    icon: "🤝",
    name: "Satsang Circles",
    desc: "Community spiritual circles with chat",
  },
  {
    num: 16,
    icon: "🙏",
    name: "Donation Module",
    desc: "Gau Seva, temple building, seva options",
  },
  {
    num: 17,
    icon: "🏆",
    name: "Achievements & Rewards",
    desc: "Points, badges, streaks, quiz, rewards store",
  },
  {
    num: 18,
    icon: "🕯️",
    name: "Antim Yaatra",
    desc: "Complete last rites, 13-day mourning guide",
  },
  {
    num: 19,
    icon: "📚",
    name: "Vedic Library",
    desc: "36+ fully embedded sacred books with reading",
  },
  {
    num: 20,
    icon: "🗺️",
    name: "Roadmap to Moksha",
    desc: "All 20 chapters of Ashtavakra Gita",
  },
  {
    num: 21,
    icon: "🌟",
    name: "Life Purpose Finder",
    desc: "Find your dharma — the app's sacred USP",
  },
];

// ─── About page ───────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <div
      className="max-w-2xl mx-auto pb-20"
      data-ocid="about.page"
      style={{ color: "oklch(0.22 0.08 32)" }}
    >
      {/* ── Page heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p
          className="font-display text-[0.65rem] tracking-[0.45em] uppercase mb-2"
          style={{ color: "oklch(0.58 0.22 48 / 0.80)" }}
        >
          ॐ नमो भगवते वासुदेवाय
        </p>
        <h1
          className="font-display text-3xl sm:text-4xl font-bold italic mb-1"
          style={{
            color: "oklch(0.24 0.12 34)",
            textShadow:
              "0 4px 20px rgba(180,130,45,0.30), 0 0 48px oklch(0.78 0.34 54 / 0.15)",
          }}
        >
          Gita Companion
        </h1>
        <p
          className="font-display text-base sm:text-lg italic mb-1"
          style={{ color: "oklch(0.44 0.18 46)" }}
        >
          Your Lifelong Divine Guide
        </p>
        <p
          className="font-body text-xs italic tracking-widest"
          style={{ color: "oklch(0.52 0.18 46 / 0.80)" }}
        >
          🙏 Hare Krishna — The Living Presence of the Gita 🙏
        </p>
        <div
          className="mx-auto mt-4 mb-1"
          style={{
            height: "2px",
            maxWidth: "340px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.76 0.34 52 / 0.80), transparent)",
            boxShadow: "0 0 12px oklch(0.76 0.34 52 / 0.40)",
          }}
        />
        {/* Version badge */}
        <div className="flex justify-center mt-3">
          <span
            className="font-body text-[10px] px-3 py-1 rounded-full"
            style={{
              background: "oklch(0.93 0.08 56 / 0.85)",
              border: "1px solid oklch(0.72 0.24 52 / 0.45)",
              color: "oklch(0.40 0.14 44)",
            }}
          >
            Version 1.0 · Built with Caffeine.ai · Internet Computer
          </span>
        </div>
      </motion.div>

      {/* ── Mission Banner — BOTH sacred lines ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mb-7"
        data-ocid="about.mission.section"
      >
        <SacredPanel>
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.70 0.28 46), oklch(0.72 0.22 268), oklch(0.70 0.28 46), oklch(0.84 0.38 54))",
              boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.50)",
            }}
          />

          <div className="text-center mb-5 mt-2">
            <span
              className="font-display text-5xl leading-none divine-glow-pulse select-none"
              style={{
                color: "oklch(0.78 0.38 54)",
                textShadow:
                  "0 0 28px oklch(0.78 0.38 54 / 0.65), 0 0 56px oklch(0.78 0.38 54 / 0.30)",
              }}
            >
              ॐ
            </span>
          </div>

          {/* Vision */}
          <p
            className="font-display text-[10px] tracking-[0.30em] uppercase text-center mb-3"
            style={{ color: "oklch(0.55 0.20 46 / 0.75)" }}
          >
            Our Vision
          </p>
          <p
            className="font-body text-sm italic text-center mb-4 leading-relaxed"
            style={{ color: "oklch(0.34 0.12 40)" }}
            data-ocid="about.vision-line"
          >
            "To restore dharma in the modern world, one soul at a time."
          </p>

          <OrnateDivider label="✦ ॐ ✦" />

          {/* Mission Line 1 — PROMINENT */}
          <p
            className="font-display text-[10px] tracking-[0.30em] uppercase text-center mb-3"
            style={{ color: "oklch(0.55 0.20 46 / 0.75)" }}
          >
            Our Mission
          </p>
          <blockquote
            className="font-display text-base sm:text-lg font-bold italic leading-relaxed text-center mb-5"
            style={{
              color: "oklch(0.26 0.12 34)",
              textShadow: "0 1px 6px oklch(0.78 0.34 54 / 0.18)",
            }}
            data-ocid="about.mission-line-1"
          >
            "The platform is a unified bridge between ancient wisdom and modern
            technology, designed to guide you on your journey from confusion to
            clarity, just as Krishna guided Arjuna."
          </blockquote>

          <OrnateDivider />

          {/* Mission Line 2 */}
          <p
            className="font-body text-sm sm:text-base italic leading-relaxed text-center"
            style={{ color: "oklch(0.34 0.12 40)" }}
            data-ocid="about.mission-line-2"
          >
            Just as Krishna guided Arjuna on the battlefield of Kurukshetra,
            this app guides you on the battlefield of life.
            <br />
            <strong style={{ color: "oklch(0.38 0.16 44)" }}>
              You are never alone. Krishna is always with you.
            </strong>
          </p>
        </SacredPanel>
      </motion.div>

      {/* ── Sacred Origin Story — The Railway Station ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.13 }}
        className="mb-7"
        data-ocid="about.origin-story.section"
      >
        <TempleArchHeader title="How This App Was Born — A True Story" />

        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            background:
              "linear-gradient(150deg, oklch(0.30 0.14 46 / 0.94) 0%, oklch(0.24 0.10 268 / 0.92) 60%, oklch(0.28 0.12 44 / 0.94) 100%)",
            border: "2.5px solid oklch(0.72 0.30 52 / 0.70)",
            boxShadow:
              "0 0 48px oklch(0.78 0.34 54 / 0.30), 0 8px 32px rgba(45,30,10,0.30)",
            padding: "2px",
          }}
        >
          <div
            className="rounded-md px-5 py-6"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.26 0.12 46 / 0.97) 0%, oklch(0.20 0.10 268 / 0.97) 100%)",
            }}
          >
            {/* OM header */}
            <div className="text-center mb-4">
              <span
                className="font-display text-3xl"
                style={{
                  color: "oklch(0.86 0.38 54)",
                  textShadow:
                    "0 0 24px oklch(0.82 0.36 54 / 0.65), 0 0 48px oklch(0.78 0.34 52 / 0.35)",
                }}
              >
                ॐ
              </span>
            </div>

            <p
              className="font-display text-[10px] tracking-[0.28em] uppercase text-center mb-5"
              style={{ color: "oklch(0.70 0.26 46 / 0.85)" }}
            >
              ✦ A True Story of How Krishna Found His Arjuna ✦
            </p>

            {/* Story body */}
            <div
              className="rounded-xl px-4 py-4 mb-4"
              style={{
                background: "oklch(0.16 0.08 268 / 0.60)",
                border: "1px solid oklch(0.78 0.32 54 / 0.18)",
              }}
            >
              <p
                className="font-body leading-relaxed mb-4"
                style={{
                  fontSize: "0.9rem",
                  color: "oklch(0.88 0.06 74 / 0.92)",
                  lineHeight: 1.85,
                }}
              >
                A man once sat alone at a railway station, in the darkest night
                of his soul. He had lost everything — hope, joy, the will to
                carry on. A stranger sat beside him and handed him a small book:
                the Bhagavad Gita.
              </p>
              <p
                className="font-body leading-relaxed mb-4"
                style={{
                  fontSize: "0.9rem",
                  color: "oklch(0.88 0.06 74 / 0.92)",
                  lineHeight: 1.85,
                }}
              >
                He read it. And Krishna spoke directly to him.
              </p>

              {/* Featured verse */}
              <div
                className="rounded-lg px-4 py-3 mb-4 text-center"
                style={{
                  background: "oklch(0.22 0.12 46 / 0.60)",
                  border: "1px solid oklch(0.82 0.32 54 / 0.25)",
                }}
              >
                <p
                  className="font-display italic font-semibold leading-relaxed"
                  style={{
                    fontSize: "0.92rem",
                    color: "oklch(0.90 0.28 54)",
                    textShadow: "0 0 16px oklch(0.82 0.32 54 / 0.30)",
                    lineHeight: 1.75,
                  }}
                >
                  "Never was there a time when I did not exist, nor you, nor all
                  these beings; nor in the future shall any of us cease to be."
                </p>
                <p
                  className="font-body text-xs italic mt-2"
                  style={{ color: "oklch(0.65 0.22 46 / 0.80)" }}
                >
                  — Chapter 2, Verse 12
                </p>
              </div>

              <p
                className="font-body leading-relaxed mb-4"
                style={{
                  fontSize: "0.9rem",
                  color: "oklch(0.88 0.06 74 / 0.92)",
                  lineHeight: 1.85,
                }}
              >
                That man built this app. For you. So that Krishna would find you
                the same way Krishna found him — through an unexpected moment of
                grace. That small book became a lifeline. A light in the darkest
                night. Not because it gave easy answers. But because it spoke
                the truth about the soul, about suffering, about the eternal.
                About surviving. About why we must not give up.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: "0.9rem",
                  color: "oklch(0.88 0.06 74 / 0.92)",
                  lineHeight: 1.85,
                }}
              >
                This app is our way of making sure that the next soul sitting
                alone in a dark hour, wondering if it's worth going on — finds
                Krishna. Finds the Gita. Finds that still, small voice saying:{" "}
                <em style={{ color: "oklch(0.82 0.30 54)" }}>
                  'I am here. I have always been here. I will never leave you.'
                </em>
              </p>
            </div>

            {/* Sacred closing lines — BOTH explicitly required */}
            <div
              className="rounded-xl px-4 py-4 text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.28 0.16 50 / 0.70), oklch(0.22 0.12 268 / 0.60))",
                border: "1.5px solid oklch(0.82 0.32 54 / 0.35)",
              }}
              data-ocid="about.sacred-closing-lines"
            >
              <p
                className="font-display italic font-bold leading-relaxed mb-3"
                style={{
                  fontSize: "clamp(0.92rem, 2.5vw, 1.08rem)",
                  color: "oklch(0.90 0.34 54)",
                  textShadow: "0 0 20px oklch(0.82 0.34 54 / 0.45)",
                  lineHeight: 1.75,
                }}
              >
                "Krishna came to this man through a stranger at a railway
                station. He came to you through this app. He never stops finding
                ways to reach his Arjuna. Never."
              </p>
              <div
                className="my-3 flex items-center justify-center gap-2"
                style={{ color: "oklch(0.72 0.26 52 / 0.55)" }}
              >
                <span>✦</span>
                <span className="font-display text-base">ॐ</span>
                <span>✦</span>
              </div>
              <p
                className="font-display text-sm italic font-semibold"
                style={{ color: "oklch(0.86 0.26 52)" }}
              >
                You are seen. You are loved. You are not alone.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 21 Sacred Pathways ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="mb-7"
        data-ocid="about.pathways.section"
      >
        <TempleArchHeader title="The 21 Sacred Pathways" />

        <SacredPanel>
          <p
            className="font-body text-xs italic text-center mb-5"
            style={{ color: "oklch(0.42 0.12 46)" }}
          >
            Every pathway is an invitation — a different door into Krishna's
            living presence
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PATHWAYS_21.map((p) => (
              <div
                key={p.num}
                className="flex items-start gap-3 p-3"
                style={{
                  background: "oklch(0.94 0.07 60 / 0.75)",
                  border: "1px solid oklch(0.76 0.20 52 / 0.38)",
                  borderRadius: "4px",
                }}
                data-ocid={`about.pathway.${p.num}`}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full font-display font-bold text-[11px]"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.76 0.30 52), oklch(0.65 0.26 46))",
                    color: "oklch(0.10 0.06 28)",
                    boxShadow: "0 2px 6px oklch(0.76 0.30 52 / 0.35)",
                  }}
                >
                  {p.num}
                </div>
                <div className="min-w-0">
                  <p
                    className="font-display text-xs font-bold italic leading-snug"
                    style={{ color: "oklch(0.26 0.10 32)" }}
                  >
                    {p.icon} {p.name}
                  </p>
                  <p
                    className="font-body text-[10px] leading-snug mt-0.5"
                    style={{ color: "oklch(0.42 0.10 44)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SacredPanel>
      </motion.div>

      {/* ── Digital Dharma Movement ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="mb-7"
        data-ocid="about.vision.section"
      >
        <TempleArchHeader title="The Digital Dharma Movement" />

        <SacredPanel>
          <p
            className="font-body text-sm sm:text-base leading-relaxed mb-5"
            style={{ color: "oklch(0.28 0.08 36)" }}
          >
            Gita Companion is the first sacred app of a civilisational movement
            — the{" "}
            <strong style={{ color: "oklch(0.36 0.16 44)" }}>
              Digital Dharma Initiative
            </strong>
            . We believe every great scripture deserves a living, breathing
            companion app that makes wisdom accessible for every generation.
          </p>

          <p
            className="font-display text-xs tracking-[0.22em] uppercase mb-3"
            style={{ color: "oklch(0.55 0.20 46 / 0.80)" }}
          >
            Future sacred companions being built:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {[
              { name: "Ramayana", icon: "🏹", status: "Coming soon" },
              { name: "Mahabharata", icon: "⚔️", status: "Coming soon" },
              { name: "The Vedas", icon: "📜", status: "Coming soon" },
              { name: "18 Puranas", icon: "🪷", status: "Coming soon" },
              { name: "Bible", icon: "✝️", status: "Coming soon" },
              { name: "Quran", icon: "☪️", status: "Coming soon" },
              { name: "Guru Granth Sahib", icon: "🕊️", status: "Coming soon" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center p-3 text-center"
                style={{
                  background: "oklch(0.93 0.07 58 / 0.65)",
                  border: "1px solid oklch(0.72 0.24 52 / 0.40)",
                  borderRadius: "4px",
                }}
              >
                <span className="text-2xl mb-1 leading-none">{item.icon}</span>
                <span
                  className="font-display text-xs font-bold italic"
                  style={{ color: "oklch(0.30 0.10 34)" }}
                >
                  {item.name}
                </span>
                <span
                  className="font-body text-[9px] italic mt-0.5"
                  style={{ color: "oklch(0.58 0.16 46 / 0.80)" }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <p
            className="font-body text-xs italic text-center"
            style={{ color: "oklch(0.40 0.12 42)" }}
          >
            One soul becomes ten. Ten become a hundred. A hundred become a
            generation. And dharma is restored.
          </p>
        </SacredPanel>
      </motion.div>

      {/* ── What's inside ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
        className="mb-7"
        data-ocid="about.features.section"
      >
        <TempleArchHeader title="What Lives Inside" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: "📖",
              title: "Complete Bhagavad Gita",
              desc: "All 700 verses, every word, 18 chapters — fully tappable with Sanskrit intelligence",
            },
            {
              icon: "🦚",
              title: "Krishna AI",
              desc: "Strictly Gita-based guidance for every life situation — mapped to exact verses",
            },
            {
              icon: "🪷",
              title: "21 Sacred Pathways",
              desc: "Virtual Temple, Emergency Mode, Garbha Sanskar, 16 Sanskaar, Youth Hub and more",
            },
            {
              icon: "📚",
              title: "Sacred Library",
              desc: "Full Vedas, 18 Puranas, Ramayana, Mahabharata — with Sanskrit and English translations",
            },
            {
              icon: "🕉️",
              title: "Digital Sadhana",
              desc: "Mala counter, Naam writing, mantra library, daily rituals — 108 Vedic mantras",
            },
            {
              icon: "🏥",
              title: "Emergency Mode",
              desc: "18 life-saving verses, 70+ Indian helplines, always available offline",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 p-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.97 0.07 66 / 0.90) 0%, oklch(0.94 0.09 62 / 0.88) 100%)",
                border: "1.5px solid oklch(0.70 0.26 52 / 0.45)",
                borderRadius: "4px",
              }}
            >
              <span className="text-2xl leading-none flex-shrink-0">
                {f.icon}
              </span>
              <div>
                <p
                  className="font-display text-sm font-bold italic mb-1"
                  style={{ color: "oklch(0.28 0.10 34)" }}
                >
                  {f.title}
                </p>
                <p
                  className="font-body text-xs leading-relaxed"
                  style={{ color: "oklch(0.42 0.08 42)" }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Subscription Info ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32 }}
        className="mb-7"
        data-ocid="about.subscription.section"
      >
        <TempleArchHeader title="Access & Subscription" />
        <SacredPanel>
          <div className="space-y-4">
            {[
              {
                icon: "🎁",
                title: "Free for 7 Days",
                desc: "Every new devotee gets full access to all 21 pathways, all features — no restriction for the first 7 days.",
                highlight: true,
              },
              {
                icon: "🙏",
                title: "₹108/month",
                desc: "After the free period, a sacred subscription of ₹108/month unlocks all pathways and future features. The number 108 is sacred in dharma — the number of sacred names, the number of beads on a mala.",
                highlight: false,
              },
              {
                icon: "📖",
                title: "Gita Reading — Always Free",
                desc: "The Bhagavad Gita reader is always free, for every soul, forever. Krishna's words can never be locked behind a paywall.",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{
                  background: item.highlight
                    ? "oklch(0.90 0.10 58 / 0.65)"
                    : "oklch(0.95 0.06 60 / 0.55)",
                  border: `1.5px solid ${item.highlight ? "oklch(0.72 0.28 52 / 0.55)" : "oklch(0.76 0.16 52 / 0.35)"}`,
                }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p
                    className="font-display text-sm font-bold italic mb-1"
                    style={{ color: "oklch(0.26 0.10 32)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-body text-xs leading-relaxed"
                    style={{ color: "oklch(0.38 0.10 42)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SacredPanel>
      </motion.div>

      {/* ── Sacred Closing ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
        className="mb-7"
        data-ocid="about.closing.section"
      >
        <div
          className="relative text-center p-8 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.96 0.10 60 / 0.97) 0%, oklch(0.93 0.12 55 / 0.95) 100%)",
            border: "2.5px solid oklch(0.72 0.30 52 / 0.65)",
            borderRadius: "8px",
            boxShadow:
              "0 10px 48px rgba(190,140,45,0.28), inset 0 1px 0 rgba(255,248,210,0.80)",
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span
              className="font-display font-bold leading-none"
              style={{
                fontSize: "14rem",
                color: "oklch(0.52 0.22 50 / 0.045)",
              }}
            >
              ॐ
            </span>
          </div>
          <TempleCornersDecoration />

          <p
            className="font-display text-lg sm:text-xl font-bold italic mb-2 relative z-10"
            style={{
              color: "oklch(0.40 0.18 44)",
              textShadow: "0 2px 12px oklch(0.78 0.34 54 / 0.30)",
            }}
          >
            हरे कृष्ण हरे कृष्ण
          </p>
          <p
            className="font-display text-lg sm:text-xl font-bold italic mb-4 relative z-10"
            style={{
              color: "oklch(0.40 0.18 44)",
              textShadow: "0 2px 12px oklch(0.78 0.34 54 / 0.30)",
            }}
          >
            कृष्ण कृष्ण हरे हरे
          </p>
          <p
            className="font-display text-lg sm:text-xl font-bold italic mb-2 relative z-10"
            style={{
              color: "oklch(0.38 0.16 42)",
              textShadow: "0 2px 12px oklch(0.78 0.34 54 / 0.25)",
            }}
          >
            हरे राम हरे राम
          </p>
          <p
            className="font-display text-lg sm:text-xl font-bold italic mb-6 relative z-10"
            style={{
              color: "oklch(0.38 0.16 42)",
              textShadow: "0 2px 12px oklch(0.78 0.34 54 / 0.25)",
            }}
          >
            राम राम हरे हरे
          </p>

          <OrnateDivider />

          <p
            className="font-body text-xs italic relative z-10"
            style={{ color: "oklch(0.48 0.12 46)" }}
          >
            In every battle of life, Krishna stands with you — as he stood with
            Arjuna on Kurukshetra.
            <br />
            You are never alone. 🙏
          </p>
        </div>
      </motion.div>

      {/* ── Navigation back ── */}
      <div className="flex justify-center gap-4" data-ocid="about.nav.section">
        <Link
          to="/profile"
          className="font-body text-sm italic px-5 py-2.5 transition-smooth"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.96 0.08 60), oklch(0.93 0.10 56))",
            border: "1.5px solid oklch(0.70 0.26 50 / 0.65)",
            borderRadius: "4px",
            color: "oklch(0.32 0.12 36)",
            boxShadow: "0 3px 12px rgba(190,140,45,0.18)",
          }}
          data-ocid="about.back-to-profile-link"
        >
          ← Back to Profile
        </Link>
        <Link
          to="/"
          className="wax-seal-btn py-2.5 text-sm"
          data-ocid="about.home-link"
        >
          🙏 Hare Krishna — Home
        </Link>
      </div>
    </div>
  );
}
