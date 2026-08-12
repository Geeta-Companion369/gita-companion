// ─── Pustakaalaye · The Sacred Library Hub ────────────────────────────────────
// The central reading hub. Shows the Bhagavad Gita as the primary granth
// with all 18 chapters as clickable cards, and indicates the 4 Vedas,
// 18 Puranas, and Upanishads as additional granths available in the library.

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

// ─── Additional Granths (listed as sections; full verse data not yet populated) ──

interface GranthSection {
  id: string;
  symbol: string;
  title: string;
  sanskritTitle: string;
  description: string;
  count: string;
  hue: number;
  items: { name: string; sanskritName: string; note: string }[];
}

const VEDAS: GranthSection = {
  id: "vedas",
  symbol: "ऋग्वेद",
  title: "The Four Vedas",
  sanskritTitle: "चतुर्वेद",
  description:
    "The oldest sacred texts of Sanatan Dharma — Shruti, the eternal revealed wisdom. Each Veda has four layers: Samhita (hymns), Brahmana (ritual), Aranyaka (meditation), and Upanishad (philosophy).",
  count: "4 Vedas",
  hue: 268,
  items: [
    {
      name: "Rig Veda",
      sanskritName: "ऋग्वेद",
      note: "1,028 hymns · The oldest — hymns to Agni, Indra, Soma, and the cosmic order (Rita).",
    },
    {
      name: "Sama Veda",
      sanskritName: "सामवेद",
      note: "1,549 verses · The Veda of melody — chanted melodies for the Soma sacrifice.",
    },
    {
      name: "Yajur Veda",
      sanskritName: "यजुर्वेद",
      note: "1,975 verses · The Veda of ritual — formulas for the fire sacrifice (Yajna).",
    },
    {
      name: "Atharva Veda",
      sanskritName: "अथर्ववेद",
      note: "730 hymns · The Veda of daily life — healing, protection, marriage, and prosperity.",
    },
  ],
};

const PURANAS: GranthSection = {
  id: "puranas",
  symbol: "पुराण",
  title: "The Eighteen Maha Puranas",
  sanskritTitle: "अष्टादश महापुराण",
  description:
    "The eighteen great Puranas — Smriti texts that carry the eternal wisdom of the Vedas into stories, genealogies, and devotional teachings. Composed by Sage Vyasa, each Purana glorifies a particular form of the Divine.",
  count: "18 Puranas",
  hue: 32,
  items: [
    {
      name: "Brahma Purana",
      sanskritName: "ब्रह्म पुराण",
      note: "10,000 verses · The first Purana — creation, the solar dynasty, and the holy city of Puri.",
    },
    {
      name: "Padma Purana",
      sanskritName: "पद्म पुराण",
      note: "55,000 verses · The lotus Purana — the cosmic lotus, Rama's story, and the glory of Vishnu.",
    },
    {
      name: "Vishnu Purana",
      sanskritName: "विष्णु पुराण",
      note: "23,000 verses · The supreme Purana for Vaishnavas — the avatars of Vishnu and dharma.",
    },
    {
      name: "Shiva Purana",
      sanskritName: "शिव पुराण",
      note: "24,000 verses · The glory of Lord Shiva — his forms, lilas, and the path of liberation.",
    },
    {
      name: "Bhagavata Purana",
      sanskritName: "श्रीमद्भागवत पुराण",
      note: "18,000 verses · The crown jewel — the complete pastimes of Lord Krishna from birth to Goloka.",
    },
    {
      name: "Narada Purana",
      sanskritName: "नारद पुराण",
      note: "25,000 verses · Sage Narada's teachings — devotion, vows, and the sacred pilgrimage sites.",
    },
    {
      name: "Markandeya Purana",
      sanskritName: "मार्कण्डेय पुराण",
      note: "9,000 verses · Contains the Devi Mahatmyam (Durga Saptashati) — the glory of the Divine Mother.",
    },
    {
      name: "Agni Purana",
      sanskritName: "अग्नि पुराण",
      note: "15,400 verses · The fire Purana — a vast encyclopaedia of dharma, ritual, and knowledge.",
    },
    {
      name: "Bhavishya Purana",
      sanskritName: "भविष्य पुराण",
      note: "14,500 verses · The Purana of the future — prophecies, dharma in the Kali Yuga, and remedies.",
    },
    {
      name: "Brahma Vaivarta Purana",
      sanskritName: "ब्रह्म वैवर्त पुराण",
      note: "18,000 verses · The glory of Radha-Krishna and the Goloka lila — the eternal Vrindavan.",
    },
    {
      name: "Linga Purana",
      sanskritName: "लिङ्ग पुराण",
      note: "11,000 verses · The glory of the Shiva Linga — the formless Divine in symbolic form.",
    },
    {
      name: "Varaha Purana",
      sanskritName: "वराह पुराण",
      note: "24,000 verses · Lord Varaha's teachings — the boar avatar and the sacred geography of Bharat.",
    },
    {
      name: "Skanda Purana",
      sanskritName: "स्कन्द पुराण",
      note: "81,100 verses · The largest Purana — the glory of Lord Kartikeya (Skanda) and Shiva's tirthas.",
    },
    {
      name: "Vamana Purana",
      sanskritName: "वामन पुराण",
      note: "10,000 verses · The dwarf avatar Vamana and the story of Bali — humility over pride.",
    },
    {
      name: "Kurma Purana",
      sanskritName: "कूर्म पुराण",
      note: "17,000 verses · The tortoise avatar Kurma — the churning of the cosmic ocean (Samudra Manthan).",
    },
    {
      name: "Matsya Purana",
      sanskritName: "मत्स्य पुराण",
      note: "14,000 verses · The fish avatar Matsya — the great flood, Manu, and the preservation of knowledge.",
    },
    {
      name: "Garuda Purana",
      sanskritName: "गरुड़ पुराण",
      note: "19,000 verses · The eagle avatar Garuda — the soul's journey after death and the rites of passage.",
    },
    {
      name: "Brahmanda Purana",
      sanskritName: "ब्रह्माण्ड पुराण",
      note: "12,000 verses · The cosmic egg — the structure of the universe and the Lalita Sahasranama.",
    },
  ],
};

const UPANISHADS: GranthSection = {
  id: "upanishads",
  symbol: "उपनिषद्",
  title: "The Principal Upanishads",
  sanskritTitle: "मुख्य उपनिषद्",
  description:
    "The philosophical crown of the Vedas — Vedanta, the end of knowledge. The Upanishads reveal the identity of the individual soul (Atman) with the universal consciousness (Brahman). Of the 108 known Upanishads, these ten are considered the principal (Mukhya) Upanishads, commented upon by Adi Shankaracharya.",
  count: "10 Mukhya Upanishads",
  hue: 280,
  items: [
    {
      name: "Isha Upanishad",
      sanskritName: "ईशावास्य उपनिषद्",
      note: "Shukla Yajur Veda · 18 verses · The Divine pervades all — renounce and enjoy.",
    },
    {
      name: "Kena Upanishad",
      sanskritName: "केन उपनिषद्",
      note: "Sama Veda · 4 sections · By whom does the mind think? The unknowable knower.",
    },
    {
      name: "Katha Upanishad",
      sanskritName: "कठ उपनिषद्",
      note: "Krishna Yajur Veda · 6 chapters · Nachiketa and Yama — the secret of immortality.",
    },
    {
      name: "Prashna Upanishad",
      sanskritName: "प्रश्न उपनिषद्",
      note: "Atharva Veda · 6 questions · The six questions of life, breath, and the Supreme.",
    },
    {
      name: "Mundaka Upanishad",
      sanskritName: "मुण्डक उपनिषद्",
      note: "Atharva Veda · 3 Mundakas · Two kinds of knowledge — the higher and the lower.",
    },
    {
      name: "Mandukya Upanishad",
      sanskritName: "माण्डूक्य उपनिषद्",
      note: "Atharva Veda · 12 verses · OM — the four states of consciousness (A, U, M, Turiya).",
    },
    {
      name: "Taittiriya Upanishad",
      sanskritName: "तैत्तिरीय उपनिषद्",
      note: "Krishna Yajur Veda · 7 chapters · The five sheaths (Koshas) of the Self.",
    },
    {
      name: "Aitareya Upanishad",
      sanskritName: "ऐतरेय उपनिषद्",
      note: "Rig Veda · 3 chapters · The Atman — who is this Self that sees, hears, and thinks?",
    },
    {
      name: "Chandogya Upanishad",
      sanskritName: "छान्दोग्य उपनिषद्",
      note: "Sama Veda · 8 chapters · Tat Tvam Asi — 'You are That' — the great Mahavakya.",
    },
    {
      name: "Brihadaranyaka Upanishad",
      sanskritName: "बृहदारण्यक उपनिषद्",
      note: "Shukla Yajur Veda · 6 chapters · The largest Upanishad — Aham Brahmasmi, 'I am Brahman'.",
    },
  ],
};

const ADDITIONAL_GRANTHS: GranthSection[] = [VEDAS, PURANAS, UPANISHADS];

// ─── Granth Section Component ─────────────────────────────────────────────────

function GranthSectionBlock({
  section,
  index,
}: {
  section: GranthSection;
  index: number;
}) {
  const hue = section.hue;
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="mb-12"
      data-ocid={`library.granth-section.${section.id}`}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-lg"
          style={{
            width: 56,
            height: 56,
            background: `radial-gradient(circle at 35% 28%, oklch(0.84 0.34 ${hue}) 0%, oklch(0.58 0.24 ${hue}) 100%)`,
            border: `2px solid oklch(0.80 0.32 ${hue} / 0.70)`,
            boxShadow: `0 4px 16px oklch(0.70 0.28 ${hue} / 0.45)`,
          }}
          aria-hidden
        >
          <span
            className="font-display font-bold italic leading-none"
            style={{
              fontSize: "0.7rem",
              color: "oklch(0.12 0.06 30)",
              letterSpacing: "0.02em",
            }}
          >
            {section.symbol}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-display font-bold italic leading-tight"
            style={{
              fontSize: "var(--fs-heading-sm)",
              color: "oklch(var(--primary))",
              textShadow: "0 2px 8px oklch(var(--accent) / 0.18)",
            }}
          >
            {section.title}
          </h3>
          <p
            className="font-body italic leading-tight"
            style={{
              fontSize: "var(--fs-verse)",
              color: `oklch(0.72 0.22 ${hue})`,
            }}
          >
            {section.sanskritTitle}
          </p>
        </div>
        <span
          className="scripture-citation flex-shrink-0"
          style={{
            color: `oklch(0.72 0.24 ${hue})`,
            background: `oklch(0.72 0.24 ${hue} / 0.14)`,
            borderColor: `oklch(0.72 0.24 ${hue} / 0.40)`,
          }}
        >
          {section.count}
        </span>
      </div>

      {/* Description */}
      <p
        className="font-body leading-relaxed mb-5"
        style={{
          fontSize: "var(--fs-body)",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        {section.description}
      </p>

      {/* Items grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        data-ocid={`library.granth-section.${section.id}.list`}
      >
        {section.items.map((item, i) => (
          <div
            key={item.name}
            className="content-card--item"
            data-ocid={`library.granth-section.${section.id}.item.${i + 1}`}
            style={{
              padding: "1.1rem 1.35rem",
              marginBottom: 0,
              borderLeftColor: `oklch(0.72 0.24 ${hue} / 0.65)`,
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <h4
                className="font-display font-bold italic leading-tight"
                style={{
                  fontSize: "var(--fs-body)",
                  color: "oklch(var(--primary))",
                }}
              >
                {item.name}
              </h4>
              <span
                className="font-body italic flex-shrink-0"
                lang="sa"
                style={{
                  fontSize: "var(--fs-label)",
                  color: `oklch(0.68 0.22 ${hue})`,
                }}
              >
                {item.sanskritName}
              </span>
            </div>
            <p
              className="font-body leading-snug"
              style={{
                fontSize: "var(--fs-label)",
                color: "oklch(var(--muted-foreground))",
              }}
            >
              {item.note}
            </p>
          </div>
        ))}
      </div>

      {/* Coming-soon notice for granths without full verse data */}
      <div
        className="disclaimer-banner mt-5"
        style={{ padding: "1rem 1.25rem 1rem 3.25rem" }}
      >
        <span className="disclaimer-banner__title">
          Full text coming to the Library
        </span>
        <span>
          The Bhagavad Gita is fully available now with all 700 verses. The
          complete texts of the {section.title.toLowerCase()} will be added to
          the Pustakaalaye in forthcoming releases. Until then, Krishna's AI
          guidance can answer questions drawn from these sacred texts.
        </span>
      </div>
    </motion.section>
  );
}

// ─── Main Library Page ────────────────────────────────────────────────────────

export function LibraryPage() {
  const { data: chapters, isLoading } = useChapters();
  const { lastRead } = useLastRead();

  return (
    <div className="max-w-3xl mx-auto relative">
      {/* ── Back link ── */}
      <Link
        to="/"
        className="inline-block font-body italic mb-6 transition-all duration-200 border-b border-transparent pb-0.5"
        style={{
          fontSize: "var(--fs-label)",
          color: "oklch(0.72 0.22 52 / 0.85)",
        }}
        data-ocid="library.back-home"
      >
        ← Return to Home
      </Link>

      {/* ── Pathway Hero ── */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pathway-hero"
        data-ocid="library.hero"
      >
        <h1 className="pathway-hero__title">Pustakaalaye</h1>
        <p className="pathway-hero__subtitle">पुस्तकालय · The Sacred Library</p>
        <p className="pathway-hero__description">
          The central reading hub of Sanatan Dharma. Here rests the Bhagavad
          Gita — the Song of God — in its complete form of 700 verses across 18
          chapters, alongside the four eternal Vedas, the eighteen Maha Puranas,
          and the principal Upanishads. Begin with Krishna's words to Arjuna on
          the battlefield of Kurukshetra; they are the heart of this library and
          the doorway to all the rest.
        </p>
      </motion.header>

      {/* ── Primary Granth: Bhagavad Gita ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mb-12"
        data-ocid="library.primary-granth"
      >
        {/* Granth header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{
              width: 72,
              height: 72,
              background:
                "radial-gradient(circle at 38% 33%, oklch(0.30 0.18 268) 0%, oklch(0.18 0.12 32) 60%, oklch(0.12 0.08 30) 100%)",
              border: "3px solid oklch(0.80 0.36 54)",
              boxShadow:
                "0 0 0 2px oklch(0.70 0.28 46 / 0.55), 0 6px 40px oklch(0.72 0.32 52 / 0.50)",
            }}
            aria-hidden
          >
            <span
              style={{
                fontSize: "2.2rem",
                lineHeight: 1,
                fontFamily: "'Noto Serif Devanagari', serif",
                color: "oklch(0.88 0.40 54)",
                textShadow:
                  "0 0 18px oklch(0.84 0.38 54 / 0.95), 0 0 40px oklch(0.78 0.34 54 / 0.65)",
                userSelect: "none",
              }}
            >
              ॐ
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-body italic tracking-widest uppercase mb-1"
              style={{
                fontSize: "var(--fs-label)",
                color: "oklch(0.72 0.22 52 / 0.85)",
              }}
            >
              ✦ Primary Granth · मुख्य ग्रंथ ✦
            </p>
            <h2
              className="font-display font-bold italic leading-tight mb-1"
              style={{
                fontSize: "var(--fs-heading-md)",
                color: "oklch(var(--primary))",
                textShadow: "0 4px 14px rgba(150, 108, 44, 0.28)",
              }}
            >
              Bhagavad Gita
            </h2>
            <p
              className="font-body italic"
              style={{
                fontSize: "var(--fs-verse)",
                color: "oklch(var(--accent))",
              }}
            >
              भगवद्गीता — The Song of God
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-center gap-8 mb-6 py-4 rounded"
          style={{
            background: "oklch(var(--accent) / 0.08)",
            border: "1.5px solid oklch(var(--accent) / 0.30)",
          }}
        >
          {(
            [
              ["18", "Adhyāyas", 54],
              ["700", "Shlokas", 46],
              ["1", "Granth", 268],
            ] as [string, string, number][]
          ).map(([num, label, hue]) => (
            <div key={label} className="text-center">
              <p
                className="font-display font-bold italic leading-none"
                style={{
                  fontSize: "var(--fs-heading-md)",
                  color: `oklch(0.62 0.26 ${hue})`,
                  textShadow: `0 0 24px oklch(0.80 0.34 ${hue} / 0.50)`,
                }}
              >
                {num}
              </p>
              <p
                className="font-body tracking-widest uppercase mt-1"
                style={{
                  fontSize: "var(--fs-label)",
                  color: "oklch(0.62 0.14 52 / 0.85)",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Resume reading CTA */}
        {lastRead && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center"
          >
            <Link
              to="/verse/$chapterId/$verseId"
              params={{
                chapterId: String(lastRead.chapterId),
                verseId: lastRead.verseId,
              }}
              className="inline-block px-6 py-3 rounded-full font-display font-bold italic transition-all duration-200"
              style={{
                fontSize: "var(--fs-label)",
                background:
                  "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                color: "oklch(0.10 0.06 28)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.40)",
                letterSpacing: "0.04em",
              }}
              data-ocid="library.resume-reading"
            >
              ← Resume Chapter {lastRead.chapterId}
            </Link>
          </motion.div>
        )}

        {/* Section divider */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.75 0.34 52 / 0.65))",
            }}
          />
          <h3
            className="font-display font-bold italic tracking-[0.16em] uppercase whitespace-nowrap"
            style={{
              fontSize: "var(--fs-label)",
              color: "oklch(0.62 0.26 52)",
              textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.45)",
            }}
          >
            ✦ &nbsp;18 Adhyāyas&nbsp; ✦
          </h3>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, oklch(0.75 0.34 52 / 0.65))",
            }}
          />
        </div>

        {/* 18 Chapter Cards Grid */}
        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            data-ocid="library.chapters-loading"
          >
            {Array.from({ length: 18 }, (_, i) => `sk-lib-ch-${i}`).map((k) => (
              <div
                key={k}
                className="h-28 rounded animate-pulse"
                style={{ background: "oklch(var(--muted) / 0.30)" }}
              />
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            data-ocid="library.chapters-grid"
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
                  transition={{
                    delay: Math.min(i * 0.035, 0.4),
                    duration: 0.4,
                  }}
                >
                  <Link
                    to="/chapter/$id"
                    params={{ id: String(chapter.id) }}
                    className="group flex gap-4 p-4 h-full transition-all duration-200"
                    style={{
                      background: "oklch(0.96 0.07 68 / 0.92)",
                      border: `1.5px solid oklch(0.68 0.24 ${hue} / 0.45)`,
                      borderRadius: "8px",
                      boxShadow:
                        "0 4px 18px rgba(180,130,45,0.18), inset 0 1px 0 rgba(255,248,210,0.55)",
                    }}
                    data-ocid={`library.chapter.${chapter.id}`}
                  >
                    {/* Chapter number badge */}
                    <div
                      className="flex-shrink-0 flex flex-col items-center justify-center rounded-lg"
                      style={{
                        width: 52,
                        height: 52,
                        background: `radial-gradient(circle at 35% 28%, oklch(0.84 0.34 ${hue}) 0%, oklch(0.58 0.24 ${hue}) 100%)`,
                        border: `2px solid oklch(0.80 0.32 ${hue} / 0.70)`,
                        boxShadow: `0 4px 16px oklch(0.70 0.28 ${hue} / 0.40)`,
                      }}
                    >
                      <span
                        className="font-display font-bold italic leading-none"
                        style={{
                          fontSize: "var(--fs-label)",
                          color: "oklch(0.12 0.06 30)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {ROMAN[chapter.id]}
                      </span>
                      <span
                        className="font-body leading-none mt-0.5"
                        style={{
                          fontSize: "0.7rem",
                          color: "oklch(0.14 0.06 30 / 0.80)",
                        }}
                      >
                        Ch. {chapter.id}
                      </span>
                    </div>

                    {/* Chapter details */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-body italic leading-tight mb-0.5 transition-smooth"
                        style={{
                          fontSize: "var(--fs-label)",
                          color: `oklch(0.62 0.22 ${hue})`,
                        }}
                      >
                        {meta?.yogaName ?? chapter.sanskritName}
                      </p>

                      <p
                        className="font-display font-semibold italic leading-snug mb-1 group-hover:text-primary transition-smooth"
                        style={{
                          fontSize: "var(--fs-body)",
                          color: "oklch(var(--primary))",
                        }}
                        lang="sa"
                      >
                        {chapter.sanskritName}
                      </p>

                      <p
                        className="font-body italic leading-tight mb-2"
                        style={{
                          fontSize: "var(--fs-label)",
                          color: "oklch(0.50 0.14 52 / 0.85)",
                        }}
                      >
                        {chapter.name}
                      </p>

                      <p
                        className="font-body leading-snug line-clamp-2"
                        style={{
                          fontSize: "var(--fs-label)",
                          color: "oklch(var(--muted-foreground))",
                        }}
                      >
                        {meta?.keyTheme ?? ""}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <span
                          className="font-body italic px-2 py-0.5 rounded-full"
                          style={{
                            fontSize: "0.75rem",
                            background: `oklch(0.72 0.24 ${hue} / 0.15)`,
                            border: `1px solid oklch(0.72 0.24 ${hue} / 0.30)`,
                            color: `oklch(0.55 0.20 ${hue})`,
                          }}
                        >
                          {meta?.verseCount ?? "—"} verses
                        </span>
                        <span
                          className="font-body italic transition-smooth opacity-0 group-hover:opacity-100"
                          style={{
                            fontSize: "var(--fs-label)",
                            color: `oklch(0.62 0.22 ${hue})`,
                          }}
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

        {/* Link to full Gita index */}
        <div className="text-center mt-6">
          <Link
            to="/gita"
            className="inline-block font-display font-bold italic transition-all duration-200 border-b pb-0.5"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--accent))",
              borderColor: "oklch(var(--accent) / 0.40)",
            }}
            data-ocid="library.goto-gita-index"
          >
            Open the full Bhagavad Gita index →
          </Link>
        </div>
      </motion.section>

      {/* ── Section divider between primary and additional granths ── */}
      <div className="flex items-center gap-4 my-10">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(var(--accent) / 0.55))",
          }}
        />
        <span
          className="font-display italic select-none"
          style={{
            fontSize: "var(--fs-heading-sm)",
            color: "oklch(var(--accent) / 0.75)",
          }}
          aria-hidden
        >
          ❦
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to left, transparent, oklch(var(--accent) / 0.55))",
          }}
        />
      </div>

      {/* ── Additional Granths heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2
          className="font-display font-bold italic mb-2"
          style={{
            fontSize: "var(--fs-heading-md)",
            color: "oklch(var(--primary))",
            textShadow: "0 4px 14px rgba(150, 108, 44, 0.28)",
          }}
        >
          Additional Sacred Granths
        </h2>
        <p
          className="font-body italic"
          style={{
            fontSize: "var(--fs-verse)",
            color: "oklch(var(--accent))",
          }}
        >
          अन्य पवित्र ग्रंथ
        </p>
        <p
          className="font-body mx-auto mt-3 leading-relaxed"
          style={{
            fontSize: "var(--fs-body)",
            color: "oklch(var(--muted-foreground))",
            maxWidth: "60ch",
          }}
        >
          The eternal library of Sanatan Dharma extends far beyond the Gita.
          These sacred texts — the Vedas, Puranas, and Upanishads — form the
          complete foundation of Vedic wisdom. Listed here as sections of the
          Pustakaalaye; their full verse texts will be populated in forthcoming
          releases.
        </p>
      </motion.div>

      {/* ── Additional Granths Sections ── */}
      {ADDITIONAL_GRANTHS.map((section, i) => (
        <GranthSectionBlock key={section.id} section={section} index={i} />
      ))}

      {/* ── Footer quote ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center pb-8 mt-8"
        data-ocid="library.footer-quote"
      >
        <div
          className="inline-block px-8 py-5 rounded-lg"
          style={{
            background: "oklch(var(--accent) / 0.08)",
            border: "1.5px solid oklch(var(--accent) / 0.40)",
          }}
        >
          <p
            className="font-body tracking-[0.25em] uppercase mb-3"
            style={{
              fontSize: "var(--fs-label)",
              color: "oklch(0.62 0.22 52 / 0.85)",
            }}
          >
            ✦ Krishna's Promise ✦
          </p>
          <p
            className="font-display italic font-semibold leading-relaxed"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--primary))",
            }}
          >
            "All this knowledge has been imparted to you by Me. Reflect on it
            fully, and then do as you choose."
          </p>
          <p
            className="font-body italic mt-3"
            style={{
              fontSize: "var(--fs-label)",
              color: "oklch(var(--accent))",
            }}
          >
            <span className="scripture-citation">Bhagavad Gita 18.63</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
