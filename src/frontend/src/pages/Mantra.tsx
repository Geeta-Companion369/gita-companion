import {
  MANTRAS_108,
  VEDIC_CATEGORIES,
  type VedicCategory,
  type VedicMantra,
} from "@/data/mantra-108";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

// ─── Prescribed count by category ────────────────────────────────────────────
// Traditional japa counts per Vedic tradition. Each mantra inherits its
// category's prescribed count; rare/long mantras use 11, short bijas use 108.
const CATEGORY_COUNT: Record<VedicCategory, number> = {
  "raksha-kavach": 108,
  samriddhi: 108,
  arogya: 108,
  "jnana-moksha": 108,
  navagraha: 11,
  "pancha-bhuta": 11,
  "ashta-deva": 11,
  "special-rare": 11,
};

// ─── Method guidance by category ─────────────────────────────────────────────
const CATEGORY_METHOD: Record<VedicCategory, string> = {
  "raksha-kavach":
    "Chant at dawn facing east. Visualise the deity's protective aura surrounding you. Best done after a morning bath and lighting a ghee lamp.",
  samriddhi:
    "Recite on Fridays or during the bright half of the lunar month. Offer flowers and a small lamp to Lakshmi or Ganesha. Maintain a clear intention of right livelihood.",
  arogya:
    "Chant 108 times before sunrise on an empty stomach. Hold a copper vessel of water; sip a few drops after completion. Combine with sun-gazing at dawn for Surya mantras.",
  "jnana-moksha":
    "Sit in a steady meditative posture at dawn or dusk. Reflect on the meaning after each recitation. Best practised in silence after the final round.",
  navagraha:
    "Chant each planet's mantra on its ruling weekday at the prescribed hour. Light a mustard-oil lamp for Shani, ghee for Guru, and so on per planetary tradition.",
  "pancha-bhuta":
    "Honour the five elements in sequence — earth, water, fire, air, space. Touch the element (or its symbol) while reciting. Best performed outdoors or near an open window.",
  "ashta-deva":
    "Invoke each guardian deity facing its assigned direction. Begin east (Indra) and proceed clockwise. Used to consecrate a space before deeper sādhana.",
  "special-rare":
    "Receive these from a qualified guru when possible. Chant with full devotion and a pure heart. Many of these are avatar mantras — recite on the avatar's sacred day.",
};

// ─── Mantra Card ─────────────────────────────────────────────────────────────

interface MantraCardProps {
  mantra: VedicMantra;
  index: number;
  prescribedCount: number;
  method: string;
  isOpen: boolean;
  onToggle: () => void;
}

function MantraCard({
  mantra,
  index,
  prescribedCount,
  method,
  isOpen,
  onToggle,
}: MantraCardProps) {
  return (
    <div className="content-card--item" data-ocid={`mantra.item.${index + 1}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`mantra-detail-${mantra.id}`}
        className="w-full text-left"
        data-ocid={`mantra.toggle.${index + 1}`}
      >
        {/* Header row: number, sanskrit snippet, count */}
        <div className="flex items-start gap-4">
          <span
            className="shrink-0 font-mono text-sm tracking-widest text-muted-foreground mt-1"
            aria-label={`Mantra number ${mantra.id}`}
          >
            {String(mantra.id).padStart(3, "0")}
          </span>
          <div className="flex-1 min-w-0">
            <p className="sanskrit-verse line-clamp-2">{mantra.sanskrit}</p>
            <p className="transliteration-line line-clamp-1 mt-1">
              {mantra.transliteration}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="font-mono text-sm tracking-widest text-accent">
              {prescribedCount}×
            </span>
            <span
              className="block text-xs text-muted-foreground mt-1"
              aria-hidden="true"
            >
              {isOpen ? "▲" : "▼"}
            </span>
          </div>
        </div>
        {/* Meaning preview when collapsed */}
        {!isOpen && (
          <p className="meaning-block line-clamp-2 mt-3">{mantra.meaning}</p>
        )}
      </button>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`mantra-detail-${mantra.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-5 border-t border-border/40 space-y-5">
              {/* Full Sanskrit */}
              <div>
                <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  मूल मन्त्र · Sacred Text
                </p>
                <p className="sanskrit-verse">{mantra.sanskrit}</p>
              </div>

              {/* Transliteration */}
              <div>
                <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  उच्चारण · Transliteration
                </p>
                <p className="transliteration-line">{mantra.transliteration}</p>
              </div>

              {/* Meaning */}
              <div>
                <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  अर्थ · Meaning
                </p>
                <p className="meaning-block">{mantra.meaning}</p>
              </div>

              {/* Prescribed count */}
              <div>
                <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  जप संख्या · Prescribed Count
                </p>
                <p className="font-body text-base text-foreground">
                  <span className="font-mono text-lg text-accent">
                    {prescribedCount}
                  </span>{" "}
                  repetitions per sitting
                </p>
              </div>

              {/* Method */}
              <div>
                <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  विधि · Method
                </p>
                <p className="font-body text-base text-foreground leading-relaxed">
                  {method}
                </p>
              </div>

              {/* Source citation */}
              <p className="scripture-citation">{mantra.source}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Category Section ────────────────────────────────────────────────────────

interface CategorySectionProps {
  categoryId: VedicCategory;
  mantras: VedicMantra[];
}

function CategorySection({ categoryId, mantras }: CategorySectionProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const meta = VEDIC_CATEGORIES.find((c) => c.id === categoryId);
  if (!meta) return null;

  const prescribedCount = CATEGORY_COUNT[categoryId];
  const method = CATEGORY_METHOD[categoryId];

  return (
    <section
      className="scroll-mt-24"
      id={`category-${categoryId}`}
      data-ocid={`mantra.section.${categoryId}`}
    >
      {/* Section header */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-3xl" aria-hidden="true">
          {meta.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            {meta.label}
          </h2>
          <p className="font-display text-lg italic text-accent mt-1">
            {meta.labelSanskrit}
          </p>
        </div>
        <span className="shrink-0 font-mono text-sm tracking-widest text-muted-foreground">
          {mantras.length} mantras
        </span>
      </div>

      <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {meta.description}
      </p>

      {/* Mantra list */}
      <div className="space-y-4">
        {mantras.map((mantra, idx) => (
          <MantraCard
            key={mantra.id}
            mantra={mantra}
            index={idx}
            prescribedCount={prescribedCount}
            method={method}
            isOpen={openId === mantra.id}
            onToggle={() =>
              setOpenId((prev) => (prev === mantra.id ? null : mantra.id))
            }
          />
        ))}
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function MantraPage() {
  const [activeCategory, setActiveCategory] =
    useState<VedicCategory>("raksha-kavach");

  // Group mantras by category, preserving data order
  const mantrasByCategory = useMemo(() => {
    const map = new Map<VedicCategory, VedicMantra[]>();
    for (const cat of VEDIC_CATEGORIES) {
      map.set(
        cat.id,
        MANTRAS_108.filter((m) => m.category === cat.id),
      );
    }
    return map;
  }, []);

  const activeMantras = mantrasByCategory.get(activeCategory) ?? [];

  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="pathway-hero text-center"
        data-ocid="mantra.page.hero"
      >
        <p className="text-sm font-display tracking-[0.25em] text-accent mb-3">
          ॥ अष्टोत्तरशतनाम ॥
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold italic text-primary mb-2">
          108 Sacred Mantras
        </h1>
        <p className="font-display text-lg italic text-accent mb-4">
          — अष्ट धाम, एक साधना · Eight Streams, One Path
        </p>
        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          One hundred and eight Vedic mantras across eight sacred categories —
          protection, prosperity, health, wisdom, the nine planets, the five
          elements, the eight guardian deities, and rare avatar invocations.
          Each mantra carries its full Sanskrit text, transliteration, meaning,
          prescribed count, and traditional method. Tap any mantra to reveal its
          complete form.
        </p>
      </motion.header>

      {/* Category navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="sticky top-0 z-10 -mx-4 px-4 py-3 mb-8 bg-background/95 backdrop-blur border-b border-border"
        aria-label="Mantra categories"
        data-ocid="mantra.category.nav"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {VEDIC_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-body border transition-smooth ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-accent/50 hover:bg-accent/5"
              }`}
              data-ocid={`mantra.cat.${cat.id}`}
            >
              <span aria-hidden="true">{cat.icon}</span>
              <span className="font-semibold">{cat.label}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Active category content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <CategorySection
            categoryId={activeCategory}
            mantras={activeMantras}
          />
        </motion.div>
      </AnimatePresence>

      {/* Disclaimer */}
      <div className="disclaimer-banner mt-12" data-ocid="mantra.disclaimer">
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">
            शास्त्रीय सूचना · Scriptural Note:
          </span>{" "}
          These mantras are drawn from the Rigveda, Yajurveda, Atharva Veda,
          Upanishads, Puranas, and Tantric traditions. Counts and methods follow
          traditional sādhana guidance; consult a qualified guru for personal
          initiation. Mantras of certain deities are most effective when
          received through proper transmission.
        </p>
      </div>

      {/* Footer attribution */}
      <footer className="mt-12 pt-8 border-t border-border text-center">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-smooth"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default MantraPage;
