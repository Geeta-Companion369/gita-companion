import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Compass,
  Eye,
  Flame,
  HandHeart,
  HeartHandshake,
  Link2,
  Moon,
  Sparkles,
  Sun,
  Volume2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type DharmaPillar = {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  practice: string;
  sourceGranth: string;
  sourceVerse: string;
  sourceChapter: string;
};

type YugCycle = {
  id: string;
  name: string;
  sanskritName: string;
  durationYears: bigint;
  characteristics: string;
  dharmaQuarter: bigint;
  description: string;
  sourceGranth: string;
  sourceVerse: string;
  sourceChapter: string;
};

type RitualExplanation = {
  id: string;
  title: string;
  ritualName: string;
  explanation: string;
  sourceGranth: string;
  sourceVerse: string;
  sourceChapter: string;
  relatedDutyIds: Array<string>;
};

// Icon map for ritual explanations — visual cue per "why"
const RITUAL_ICONS: Record<string, typeof Sun> = {
  "ritual-brahma-muhurta": Sun,
  "ritual-bath": Sparkles,
  "ritual-diya": Flame,
  "ritual-sandhya": Moon,
  "ritual-satvik": HeartHandshake,
  "ritual-chant-eat": Volume2,
  "ritual-sleep": Moon,
  "ritual-touch-feet": HandHeart,
  "ritual-nails-hair": Eye,
  "ritual-shivling-water": Compass,
};

function SourceCitation({
  granth,
  verse,
  chapter,
}: {
  granth: string;
  verse: string;
  chapter: string;
}) {
  return (
    <div
      className="mt-4 flex items-start gap-2 rounded-sm border-l-2 px-3 py-2"
      style={{
        borderColor: "oklch(var(--accent) / 0.6)",
        background: "oklch(var(--accent) / 0.06)",
      }}
    >
      <BookOpen
        className="mt-0.5 shrink-0"
        size={18}
        style={{ color: "oklch(var(--accent))" }}
        aria-hidden
      />
      <p
        className="font-body italic leading-relaxed"
        style={{
          fontSize: "var(--fs-label)",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        <span className="font-semibold not-italic">Source:</span> {granth}
        {chapter ? ` · Chapter ${chapter}` : ""}
        {verse ? ` · Verse ${verse}` : ""}
      </p>
    </div>
  );
}

function PillarCard({ pillar }: { pillar: DharmaPillar }) {
  return (
    <article
      className="manuscript-card p-6 sm:p-8"
      data-ocid={`dharma-stambh.pillar.${pillar.id}`}
    >
      <header className="mb-4 text-center">
        <p className="text-verse-number mb-2" style={{ fontSize: "0.95rem" }}>
          ✦ Pillar of Dharma ✦
        </p>
        <h3
          className="font-display italic font-bold leading-tight"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "oklch(var(--primary))",
          }}
        >
          {pillar.name}
        </h3>
        <p
          className="text-sanskrit mt-1"
          style={{ fontSize: "1.65rem", marginBottom: 0 }}
        >
          {pillar.sanskritName}
        </p>
      </header>

      <div className="divider-ornate" aria-hidden>
        ❀
      </div>

      <p
        className="font-body leading-relaxed"
        style={{
          fontSize: "var(--fs-body)",
          color: "oklch(var(--foreground))",
        }}
      >
        {pillar.description}
      </p>

      <div
        className="mt-5 rounded-sm p-4"
        style={{
          background: "oklch(var(--sacred) / 0.08)",
          border: "1px solid oklch(var(--sacred) / 0.25)",
        }}
      >
        <p
          className="font-display italic font-semibold mb-1"
          style={{
            fontSize: "1.05rem",
            color: "oklch(var(--sacred))",
          }}
        >
          Saadhna — how to practise
        </p>
        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: "var(--fs-body)",
            color: "oklch(var(--foreground))",
          }}
        >
          {pillar.practice}
        </p>
      </div>

      <SourceCitation
        granth={pillar.sourceGranth}
        verse={pillar.sourceVerse}
        chapter={pillar.sourceChapter}
      />
    </article>
  );
}

function YugCard({ yug }: { yug: YugCycle }) {
  const quarter = Number(yug.dharmaQuarter);
  const legs = [1, 2, 3, 4];
  const durationLakh = Math.round(Number(yug.durationYears) / 100000) / 10;

  return (
    <article
      className="manuscript-card p-6 sm:p-7"
      data-ocid={`dharma-stambh.yug.${yug.id}`}
    >
      <header className="mb-3 text-center">
        <h3
          className="font-display italic font-bold leading-tight"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
            color: "oklch(var(--primary))",
          }}
        >
          {yug.name}
        </h3>
        <p
          className="text-sanskrit mt-1"
          style={{ fontSize: "1.4rem", marginBottom: 0 }}
        >
          {yug.sanskritName}
        </p>
      </header>

      {/* Dharma legs indicator — 4 legs in Satyug down to 1 in Kaliyug */}
      <div
        className="mb-4 flex items-center justify-center gap-2"
        aria-label={`Dharma stands on ${quarter} of 4 legs`}
      >
        {legs.map((leg) => (
          <span
            key={leg}
            className="inline-block rounded-full transition-smooth"
            style={{
              width: leg <= quarter ? "14px" : "14px",
              height: leg <= quarter ? "14px" : "14px",
              background:
                leg <= quarter
                  ? "oklch(var(--accent))"
                  : "oklch(var(--accent) / 0.18)",
              boxShadow:
                leg <= quarter ? "0 0 10px oklch(var(--accent) / 0.6)" : "none",
              border: "1px solid oklch(var(--accent) / 0.4)",
            }}
            aria-hidden
          />
        ))}
        <span
          className="ml-2 font-display italic font-bold"
          style={{
            fontSize: "1.1rem",
            color: "oklch(var(--accent))",
          }}
        >
          {quarter}/4
        </span>
      </div>

      <p
        className="font-body leading-relaxed text-center"
        style={{
          fontSize: "var(--fs-body)",
          color: "oklch(var(--foreground))",
        }}
      >
        {yug.description}
      </p>

      <p
        className="mt-3 font-body italic leading-relaxed text-center"
        style={{
          fontSize: "1rem",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        {yug.characteristics}
      </p>

      <p
        className="mt-3 text-center font-mono"
        style={{
          fontSize: "0.95rem",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        Duration: {durationLakh > 0 ? `${durationLakh} lakh years` : "—"}
      </p>

      <SourceCitation
        granth={yug.sourceGranth}
        verse={yug.sourceVerse}
        chapter={yug.sourceChapter}
      />
    </article>
  );
}

function RitualExplanationCard({
  explanation,
  index,
}: {
  explanation: RitualExplanation;
  index: number;
}) {
  const Icon = RITUAL_ICONS[explanation.id] ?? BookOpen;
  const hasLinks = explanation.relatedDutyIds.length > 0;

  return (
    <article
      className="verse-block"
      data-ocid={`dharma-stambh.explanation.${index + 1}`}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex shrink-0 items-center justify-center rounded-full"
          style={{
            width: "52px",
            height: "52px",
            background: "oklch(var(--accent) / 0.15)",
            border: "1.5px solid oklch(var(--accent) / 0.45)",
          }}
          aria-hidden
        >
          <Icon size={26} style={{ color: "oklch(var(--accent))" }} />
        </div>

        <div className="min-w-0 flex-1">
          <h4
            className="font-display italic font-bold leading-tight"
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
              color: "oklch(var(--primary))",
            }}
          >
            {explanation.title}
          </h4>
          <p className="text-verse-number mt-1" style={{ fontSize: "0.9rem" }}>
            {explanation.ritualName}
          </p>

          <p
            className="mt-3 font-body leading-relaxed"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--foreground))",
            }}
          >
            {explanation.explanation}
          </p>

          <SourceCitation
            granth={explanation.sourceGranth}
            verse={explanation.sourceVerse}
            chapter={explanation.sourceChapter}
          />

          {hasLinks && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 font-body italic"
                style={{
                  fontSize: "0.95rem",
                  color: "oklch(var(--muted-foreground))",
                }}
              >
                <Link2 size={15} aria-hidden />
                Practise in Aachar:
              </span>
              {explanation.relatedDutyIds.map((dutyId) => (
                <Link
                  key={dutyId}
                  to="/aachar"
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-smooth"
                  style={{
                    background: "oklch(var(--accent) / 0.12)",
                    border: "1px solid oklch(var(--accent) / 0.4)",
                    fontSize: "0.9rem",
                    color: "oklch(var(--primary))",
                  }}
                  data-ocid={`dharma-stambh.explanation.${index + 1}.link.${dutyId}`}
                >
                  <HandHeart size={14} aria-hidden />
                  {dutyId.replace(/^duty-/, "").replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function LoadingState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 gap-5"
      data-ocid="dharma-stambh.loading_state"
    >
      <div className="om-loading" aria-label="Loading Dharma Stambh">
        ॐ
      </div>
      <p
        className="font-display italic"
        style={{
          fontSize: "1.1rem",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        Revealing the pillars of dharma…
      </p>
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-5 text-center"
      data-ocid="dharma-stambh.error_state"
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
        data-ocid="dharma-stambh.retry_button"
      >
        Try Again
      </button>
    </div>
  );
}

export function DharmaStambhPage() {
  const [activeTab, setActiveTab] = useState<"pillars" | "yugs" | "whys">(
    "pillars",
  );

  const pillarsQuery = useQuery({
    queryKey: ["dharma-pillars"],
    queryFn: async () => {
      const result = await getBackend().listDharmaPillars();
      return result as DharmaPillar[];
    },
  });

  const yugsQuery = useQuery({
    queryKey: ["yug-cycles"],
    queryFn: async () => {
      const result = await getBackend().listYugCycles();
      return result as YugCycle[];
    },
  });

  const explanationsQuery = useQuery({
    queryKey: ["ritual-explanations"],
    queryFn: async () => {
      const result = await getBackend().listRitualExplanations();
      return result as RitualExplanation[];
    },
  });

  const isLoading =
    pillarsQuery.isLoading ||
    yugsQuery.isLoading ||
    explanationsQuery.isLoading;
  const isError =
    pillarsQuery.isError || yugsQuery.isError || explanationsQuery.isError;

  const pillars = pillarsQuery.data ?? [];
  const yugs = yugsQuery.data ?? [];
  const explanations = explanationsQuery.data ?? [];

  const retry = () => {
    pillarsQuery.refetch();
    yugsQuery.refetch();
    explanationsQuery.refetch();
  };

  return (
    <div
      className="manuscript-page min-h-screen px-4 py-8 sm:px-6 lg:px-10"
      data-ocid="dharma-stambh.page"
    >
      <div className="mx-auto max-w-5xl">
        {/* === HEADER === */}
        <header className="ornate-header" data-ocid="dharma-stambh.header">
          <h1>Dharma Stambh</h1>
          <p
            className="text-sanskrit mt-2"
            style={{ fontSize: "1.6rem", marginBottom: 0 }}
          >
            धर्म स्तम्भ
          </p>
          <p
            className="mx-auto mt-4 max-w-2xl font-body italic leading-relaxed"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--muted-foreground))",
            }}
          >
            The soul of this app — the eternal{" "}
            <strong style={{ color: "oklch(var(--accent))" }}>why</strong>{" "}
            behind every ritual. Not blind faith, but trust grounded in source:
            each teaching cites its granth, chapter, and verse. Dharma stands on
            four pillars — Satya, Tapp, Daya, Daan — and diminishes across the
            four yugs, from Satyug's fullness to Kaliyug's single leg.
          </p>
        </header>

        {/* === TABS === */}
        <nav
          className="mb-8 flex flex-wrap justify-center gap-2"
          aria-label="Dharma Stambh sections"
          data-ocid="dharma-stambh.tabs"
        >
          {(
            [
              { id: "pillars", label: "4 Pillars", sub: "चतुष्ठम्भ" },
              { id: "yugs", label: "Yug Cycle", sub: "युगचक्र" },
              { id: "whys", label: "The Why", sub: "किमर्थम्" },
            ] as const
          ).map((tab) => (
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
              data-ocid={`dharma-stambh.tab.${tab.id}`}
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
              {/* === PILLARS TAB === */}
              {activeTab === "pillars" && (
                <div data-ocid="dharma-stambh.section.pillars">
                  <div className="chapter-separator" aria-hidden>
                    ✦ चतुष्ठम्भ ✦
                  </div>
                  <p
                    className="mx-auto mb-8 max-w-2xl text-center font-body italic leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    Dharma rests on four eternal pillars. Together they form the
                    foundation of a dharmic life — truth in speech, discipline
                    in body, compassion in heart, and generosity in hand.
                  </p>
                  <div className="parchment-grid sm:grid-cols-2">
                    {pillars.map((pillar) => (
                      <PillarCard key={pillar.id} pillar={pillar} />
                    ))}
                  </div>
                  {pillars.length === 0 && (
                    <p
                      className="py-12 text-center font-body italic"
                      style={{
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))",
                      }}
                    >
                      The pillars await revelation.
                    </p>
                  )}
                </div>
              )}

              {/* === YUGS TAB === */}
              {activeTab === "yugs" && (
                <div data-ocid="dharma-stambh.section.yugs">
                  <div className="chapter-separator" aria-hidden>
                    ✦ युगचक्र ✦
                  </div>
                  <p
                    className="mx-auto mb-8 max-w-2xl text-center font-body italic leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    Dharma diminishes across the four yugs. In Satyug it stands
                    on four legs; in Treta three; in Dwaapar two; in Kaliyug —
                    the age we now inhabit — only one. Yet even one leg of
                    dharma is enough to carry the sincere seeker home.
                  </p>
                  <div className="parchment-grid sm:grid-cols-2 lg:grid-cols-4">
                    {yugs.map((yug) => (
                      <YugCard key={yug.id} yug={yug} />
                    ))}
                  </div>
                  {yugs.length === 0 && (
                    <p
                      className="py-12 text-center font-body italic"
                      style={{
                        fontSize: "1.1rem",
                        color: "oklch(var(--muted-foreground))",
                      }}
                    >
                      The cycle of yugs awaits revelation.
                    </p>
                  )}
                </div>
              )}

              {/* === WHYS TAB === */}
              {activeTab === "whys" && (
                <div data-ocid="dharma-stambh.section.whys">
                  <div className="chapter-separator" aria-hidden>
                    ✦ किमर्थम् — The Why ✦
                  </div>
                  <p
                    className="mx-auto mb-8 max-w-2xl text-center font-body italic leading-relaxed"
                    style={{
                      fontSize: "var(--fs-body)",
                      color: "oklch(var(--muted-foreground))",
                    }}
                  >
                    Why wake at brahma muhurta? Why bathe before pooja? Why
                    light a diya? Each practice has a reason, rooted in shastra.
                    Here is the why behind every ritual — never blind faith,
                    always trust through source.
                  </p>
                  <div className="manuscript-card p-2 sm:p-4">
                    {explanations.map((exp, i) => (
                      <RitualExplanationCard
                        key={exp.id}
                        explanation={exp}
                        index={i}
                      />
                    ))}
                    {explanations.length === 0 && (
                      <p
                        className="py-12 text-center font-body italic"
                        style={{
                          fontSize: "1.1rem",
                          color: "oklch(var(--muted-foreground))",
                        }}
                      >
                        The explanations await revelation.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.section>
          </AnimatePresence>
        )}

        {/* === INTERLINK FOOTER === */}
        <div className="chapter-separator" aria-hidden>
          ✦
        </div>
        <div
          className="mt-6 rounded-md p-6 text-center"
          style={{
            background: "oklch(var(--sacred) / 0.06)",
            border: "1.5px solid oklch(var(--sacred) / 0.25)",
          }}
          data-ocid="dharma-stambh.interlink"
        >
          <p
            className="font-display italic font-bold mb-2"
            style={{
              fontSize: "1.3rem",
              color: "oklch(var(--sacred))",
            }}
          >
            From the Why to the How
          </p>
          <p
            className="mx-auto mb-4 max-w-xl font-body leading-relaxed"
            style={{
              fontSize: "var(--fs-body)",
              color: "oklch(var(--muted-foreground))",
            }}
          >
            Understanding the why is the beginning. Living it is the saadhna.
            Carry these teachings into your daily practice.
          </p>
          <Link
            to="/aachar"
            className="wax-seal-btn inline-flex"
            data-ocid="dharma-stambh.cta.aachar"
          >
            <HandHeart size={18} aria-hidden />
            Open Aachar Saadhna
          </Link>
        </div>
      </div>
    </div>
  );
}
