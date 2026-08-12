import type { SiddhiEntry } from "@/backend";
import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type SubCategory = "siddhis" | "kalas" | "mahavidyas";

const GURU_DISCLAIMER_TEXT =
  "These practices can be performed only under Guru guidance.";

const TABS: Array<{
  id: SubCategory;
  label: string;
  sub: string;
  description: string;
}> = [
  {
    id: "siddhis",
    label: "Siddhis & Nidhis",
    sub: "सिद्धि निधि",
    description:
      "The eight primary Siddhis and the nine Nidhis — divine powers and treasures that manifest as signs of deep saadhna. They are never the goal; they arise as byproducts of union with the Divine.",
  },
  {
    id: "kalas",
    label: "16 Kalas",
    sub: "षोडश कला",
    description:
      "The sixteen Kalas — the divine arts and graces that Sri Krishna embodies in full. To contemplate each Kala is to contemplate a facet of the Lord's perfection.",
  },
  {
    id: "mahavidyas",
    label: "10 Mahavidyas",
    sub: "दश महाविद्या",
    description:
      "The ten Mahavidyas — the great wisdom forms of the Divine Mother. Each is a complete path of the Goddess, revealing a distinct face of cosmic truth.",
  },
];

function SourceCitation({
  granth,
  chapter,
  verse,
}: {
  granth: string;
  chapter: string;
  verse: string;
}) {
  return (
    <span
      className="scripture-citation"
      aria-label={`Source: ${granth}, chapter ${chapter}, verse ${verse}`}
    >
      {granth}
      {chapter ? ` · Ch. ${chapter}` : ""}
      {verse ? ` · ${verse}` : ""}
    </span>
  );
}

function SiddhiCard({ entry, index }: { entry: SiddhiEntry; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="content-card--item"
      data-expanded={expanded}
      data-ocid={`siddhi.item.${index + 1}`}
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="content-card__title">{entry.name}</h3>
        <p
          className="text-sanskrit"
          style={{ fontSize: "1.5rem", marginBottom: 0, lineHeight: 1.4 }}
        >
          {entry.sanskritName}
        </p>
      </header>

      <p className="content-card__description">{entry.description}</p>

      <div className="flex flex-wrap items-center gap-2">
        <SourceCitation
          granth={entry.sourceGranth}
          chapter={entry.sourceChapter}
          verse={entry.sourceVerse}
        />
      </div>

      <button
        type="button"
        className="content-card__toggle"
        aria-expanded={expanded}
        aria-controls={`siddhi-detail-${entry.id}`}
        onClick={() => setExpanded((v) => !v)}
        data-ocid={`siddhi.item.${index + 1}.toggle`}
      >
        {expanded ? "Hide practice" : "Reveal practice"}
        <span className="content-card__toggle-icon" aria-hidden>
          ▾
        </span>
      </button>

      <div
        id={`siddhi-detail-${entry.id}`}
        className="content-card__detail"
        hidden={!expanded}
      >
        <p className="meaning-block__label">Saadhna — the practice</p>
        <p style={{ marginBottom: "1rem" }}>{entry.significance}</p>

        <div className="meaning-block">
          <span className="meaning-block__label">Guru's caution</span>
          <p style={{ marginBottom: 0 }}>{entry.guruDisclaimer}</p>
        </div>
      </div>
    </article>
  );
}

function DisclaimerBanner() {
  return (
    <div
      className="disclaimer-banner"
      role="note"
      data-ocid="siddhi.disclaimer"
    >
      <span className="disclaimer-banner__title">Guru Shishya Parampara</span>
      <p style={{ marginBottom: 0 }}>
        <strong>{GURU_DISCLAIMER_TEXT}</strong> These are subtle sciences of
        consciousness. Without a living guru's initiation and oversight,
        attempting them may disturb the mind and body. Approach only through
        proper parampara.
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 gap-5"
      data-ocid="siddhi.loading_state"
    >
      <div className="om-loading" aria-label="Loading Siddhi Saadhna">
        ॐ
      </div>
      <p
        className="font-display italic"
        style={{
          fontSize: "1.1rem",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        Revealing the divine powers…
      </p>
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-5 text-center"
      data-ocid="siddhi.error_state"
    >
      <p className="om-symbol" style={{ fontSize: "4rem" }} aria-hidden>
        ॐ
      </p>
      <p
        className="font-display italic"
        style={{
          fontSize: "1.15rem",
          color: "oklch(var(--destructive))",
        }}
      >
        The scriptures could not be opened just now.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="wax-seal-btn"
        data-ocid="siddhi.retry_button"
      >
        Try Again
      </button>
    </div>
  );
}

export function SiddhiPage() {
  const [activeTab, setActiveTab] = useState<SubCategory>("siddhis");

  const siddhisQuery = useQuery({
    queryKey: ["siddhis"],
    queryFn: async () => {
      const result = await getBackend().listSiddhis();
      return result as SiddhiEntry[];
    },
  });

  const nidhisQuery = useQuery({
    queryKey: ["nidhis"],
    queryFn: async () => {
      const result = await getBackend().listNidhis();
      return result as SiddhiEntry[];
    },
  });

  const kalasQuery = useQuery({
    queryKey: ["kalas"],
    queryFn: async () => {
      const result = await getBackend().listKalas();
      return result as SiddhiEntry[];
    },
  });

  const mahavidyasQuery = useQuery({
    queryKey: ["mahavidyas"],
    queryFn: async () => {
      const result = await getBackend().listMahavidyas();
      return result as SiddhiEntry[];
    },
  });

  const isLoading =
    siddhisQuery.isLoading ||
    nidhisQuery.isLoading ||
    kalasQuery.isLoading ||
    mahavidyasQuery.isLoading;
  const isError =
    siddhisQuery.isError ||
    nidhisQuery.isError ||
    kalasQuery.isError ||
    mahavidyasQuery.isError;

  const siddhis = siddhisQuery.data ?? [];
  const nidhis = nidhisQuery.data ?? [];
  const kalas = kalasQuery.data ?? [];
  const mahavidyas = mahavidyasQuery.data ?? [];

  const retry = () => {
    siddhisQuery.refetch();
    nidhisQuery.refetch();
    kalasQuery.refetch();
    mahavidyasQuery.refetch();
  };

  const activeTabMeta = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div
      className="manuscript-page min-h-screen px-4 py-8 sm:px-6 lg:px-10"
      data-ocid="siddhi.page"
    >
      <div className="mx-auto max-w-5xl">
        {/* === HERO === */}
        <header className="pathway-hero" data-ocid="siddhi.hero">
          <h1 className="pathway-hero__title">Siddhi Saadhna</h1>
          <p className="pathway-hero__subtitle">सिद्धि साधन</p>
          <p className="pathway-hero__description">
            Divine powers and the practices that awaken them. The eight Siddhis,
            nine Nidhis, sixteen Kalas of Sri Krishna, and the ten Mahavidyas of
            the Divine Mother — each a sign of grace, each a responsibility to
            be carried with humility under a guru's guidance.
          </p>
        </header>

        {/* === TABS === */}
        <nav
          className="mb-8 flex flex-wrap justify-center gap-2"
          aria-label="Siddhi Saadhna sections"
          data-ocid="siddhi.tabs"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center rounded-md px-5 py-3 transition-smooth"
              style={{
                background:
                  activeTab === tab.id
                    ? "linear-gradient(180deg, oklch(var(--accent) / 0.22) 0%, oklch(var(--accent) / 0.08) 100%)"
                    : "transparent",
                border: `2px solid ${
                  activeTab === tab.id
                    ? "oklch(var(--accent) / 0.7)"
                    : "oklch(var(--border) / 0.5)"
                }`,
                boxShadow:
                  activeTab === tab.id
                    ? "0 0 18px oklch(var(--accent) / 0.3)"
                    : "none",
              }}
              data-ocid={`siddhi.tab.${tab.id}`}
            >
              <span
                className="font-display italic font-bold"
                style={{
                  fontSize: "1.1rem",
                  color:
                    activeTab === tab.id
                      ? "oklch(var(--primary))"
                      : "oklch(var(--muted-foreground))",
                }}
              >
                {tab.label}
              </span>
              <span
                className="font-body"
                style={{
                  fontSize: "0.85rem",
                  color: "oklch(var(--accent) / 0.85)",
                }}
              >
                {tab.sub}
              </span>
            </button>
          ))}
        </nav>

        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState onRetry={retry} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.section
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* === SIDDHIS & NIDHIS TAB === */}
              {activeTab === "siddhis" && (
                <div data-ocid="siddhi.section.siddhis">
                  <div className="chapter-separator" aria-hidden>
                    ✦ अष्टसिद्धि नवनिधि ✦
                  </div>
                  <p
                    className="mx-auto mb-6 max-w-2xl text-center font-body italic leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    {activeTabMeta.description}
                  </p>

                  <DisclaimerBanner />

                  <h2
                    className="font-display italic font-bold mt-8 mb-4 text-center"
                    style={{
                      fontSize: "var(--fs-heading-md)",
                      color: "oklch(var(--primary))",
                    }}
                  >
                    The Eight Siddhis
                  </h2>
                  <p
                    className="mx-auto mb-6 max-w-2xl text-center font-body leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    Ashtasiddhi — the eight perfections described in the
                    Patanjala Yoga Sutra and the Bhagavata. Hanuman ji carries
                    them all; the yogi who masters the elements may glimpse
                    each.
                  </p>
                  <div data-ocid="siddhi.list.siddhis">
                    {siddhis.map((entry, i) => (
                      <SiddhiCard key={entry.id} entry={entry} index={i} />
                    ))}
                    {siddhis.length === 0 && (
                      <p
                        className="py-12 text-center font-body italic"
                        style={{
                          fontSize: "1.1rem",
                          color: "oklch(var(--muted-foreground))",
                        }}
                      >
                        The Siddhis await revelation.
                      </p>
                    )}
                  </div>

                  <h2
                    className="font-display italic font-bold mt-10 mb-4 text-center"
                    style={{
                      fontSize: "var(--fs-heading-md)",
                      color: "oklch(var(--primary))",
                    }}
                  >
                    The Nine Nidhis
                  </h2>
                  <p
                    className="mx-auto mb-6 max-w-2xl text-center font-body leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    Navanidhi — the nine divine treasures guarded by Kubera, the
                    lord of wealth. Each is a trust granted to the dharmic,
                    never a possession to be hoarded.
                  </p>
                  <div data-ocid="siddhi.list.nidhis">
                    {nidhis.map((entry, i) => (
                      <SiddhiCard key={entry.id} entry={entry} index={i} />
                    ))}
                    {nidhis.length === 0 && (
                      <p
                        className="py-12 text-center font-body italic"
                        style={{
                          fontSize: "1.1rem",
                          color: "oklch(var(--muted-foreground))",
                        }}
                      >
                        The Nidhis await revelation.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* === 16 KALAS TAB === */}
              {activeTab === "kalas" && (
                <div data-ocid="siddhi.section.kalas">
                  <div className="chapter-separator" aria-hidden>
                    ✦ षोडश कला ✦
                  </div>
                  <p
                    className="mx-auto mb-6 max-w-2xl text-center font-body italic leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    {activeTabMeta.description} Sri Krishna is called{" "}
                    <em>Kala-vidhamana</em> — the master of all sixteen arts.
                    From these flow music, dance, wisdom, and the grace that
                    charmed all of Vrindavan.
                  </p>

                  <DisclaimerBanner />

                  <div className="mt-8" data-ocid="siddhi.list.kalas">
                    {kalas.map((entry, i) => (
                      <SiddhiCard key={entry.id} entry={entry} index={i} />
                    ))}
                    {kalas.length === 0 && (
                      <p
                        className="py-12 text-center font-body italic"
                        style={{
                          fontSize: "1.1rem",
                          color: "oklch(var(--muted-foreground))",
                        }}
                      >
                        The Kalas await revelation.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* === 10 MAHAVIDYAS TAB === */}
              {activeTab === "mahavidyas" && (
                <div data-ocid="siddhi.section.mahavidyas">
                  <div className="chapter-separator" aria-hidden>
                    ✦ दश महाविद्या ✦
                  </div>
                  <p
                    className="mx-auto mb-6 max-w-2xl text-center font-body italic leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    {activeTabMeta.description} Kali, Tara, Tripura Sundari,
                    Bhuvaneshwari, Bhairavi, Chhinnamasta, Dhumavati,
                    Bagalamukhi, Matangi, and Kamala — the ten faces of the
                    Mother, each a complete path of wisdom.
                  </p>

                  <DisclaimerBanner />

                  <div className="mt-8" data-ocid="siddhi.list.mahavidyas">
                    {mahavidyas.map((entry, i) => (
                      <SiddhiCard key={entry.id} entry={entry} index={i} />
                    ))}
                    {mahavidyas.length === 0 && (
                      <p
                        className="py-12 text-center font-body italic"
                        style={{
                          fontSize: "1.1rem",
                          color: "oklch(var(--muted-foreground))",
                        }}
                      >
                        The Mahavidyas await revelation.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.section>
          </AnimatePresence>
        )}

        {/* === CLOSING NOTE === */}
        <div className="chapter-separator" aria-hidden>
          ✦
        </div>
        <div
          className="mt-6 rounded-md p-6 text-center"
          style={{
            background: "oklch(var(--sacred) / 0.06)",
            border: "1.5px solid oklch(var(--sacred) / 0.25)",
          }}
          data-ocid="siddhi.closing"
        >
          <p
            className="font-display italic font-bold mb-2"
            style={{
              fontSize: "1.3rem",
              color: "oklch(var(--sacred))",
            }}
          >
            Siddhis are the shadow, not the sun
          </p>
          <p
            className="mx-auto max-w-xl font-body leading-relaxed"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--muted-foreground))",
            }}
          >
            Patanjali warns that powers arising in saadhna are obstacles to
            liberation if grasped. Let them come unbidden; let the heart remain
            fixed on the Lord alone. The true fruit of saadhna is love, not
            power.
          </p>
        </div>
      </div>
    </div>
  );
}
