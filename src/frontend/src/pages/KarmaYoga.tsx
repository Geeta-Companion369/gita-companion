import { KARMA_TYPES, type KarmaType } from "@/data/karma-data";
import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

/**
 * Karma Yoga Saadhna — Work as Worship
 *
 * Teaches all six karma types (Nishkama, Sakama, Akarma, Sanchita,
 * Prarabdha, Kriyamana) with description, Gita reference, examples,
 * fruits, and the transformation of karma into yoga.
 *
 * Backend supplies 3 types (Sanchita, Prarabdha, Kriyamana) via
 * listKarmaTypes / getKarmaType. Frontend supplements the remaining
 * 3 types (Nishkama, Sakama, Akarma) so the full teaching is present.
 */

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

/** Shape returned by the backend KarmaType candid type. */
interface BackendKarmaType {
  id: string;
  sourceGranth: string;
  sourceChapter: number;
  sanskritName: string;
  name: string;
  description: string;
  sourceVerse: string;
  practice: string;
}

/** Unified karma type used for rendering. */
interface UnifiedKarmaType {
  id: string;
  sanskritName: string;
  name: string;
  description: string;
  gitaRef: string;
  gitaVerse: string;
  examples: string[];
  fruits: string[];
  howToTransform: string;
  source: "backend" | "frontend";
}

/* ------------------------------------------------------------------ */
/* Frontend-supplemented karma types (not in backend / karma-data)    */
/* ------------------------------------------------------------------ */

const FRONTEND_SUPPLEMENT: Omit<UnifiedKarmaType, "source">[] = [
  {
    id: "nishkama",
    sanskritName: "निष्काम कर्म",
    name: "Nishkama Karma",
    description:
      "Action performed without attachment to its fruits. You offer the result to the Divine and act solely because the action itself is your dharma. This is the highest teaching of Karma Yoga — work as worship, where the doer dissolves and only the offering remains.",
    gitaRef: "Bhagavad Gita 3.19",
    gitaVerse: "तस्मादसक्तः सततं कार्यं कर्म समाचर ।\nअसक्तश्चाचरन्कर्म परमाप्नोति पूरुषः ॥",
    examples: [
      "A doctor treats every patient with the same care, whether rich or poor, without counting fees.",
      "A teacher prepares each lesson thoroughly, unconcerned whether students praise or criticize.",
      "A parent raises a child with love, not expecting the child to repay them in old age.",
    ],
    fruits: [
      "Inner freedom from anxiety about outcomes.",
      "The mind becomes steady and equanimous (sthitaprajna).",
      "Action itself becomes a meditation on the Divine.",
    ],
    howToTransform:
      "Before beginning any work, silently offer the result to Krishna: 'I am the instrument; the result is Yours.' Perform the action with full skill and zero claim on the fruit. When the work ends, release the outcome completely — success and failure are both prasadam.",
  },
  {
    id: "sakama",
    sanskritName: "सकाम कर्म",
    name: "Sakama Karma",
    description:
      "Action performed with desire for a specific result. Most worldly action is sakama — we work for salary, study for grades, pray for boons. Sakama karma binds the doer to the cycle of cause and effect, because attachment to the fruit creates new vasanas (impressions).",
    gitaRef: "Bhagavad Gita 2.47",
    gitaVerse:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    examples: [
      "Working only for promotion, neglecting the quality of the work itself.",
      "Studying only to pass an exam, forgetting the knowledge.",
      "Donating to charity expecting public recognition in return.",
    ],
    fruits: [
      "Temporary pleasure when the desired result comes.",
      "Bondage to the fruit — sorrow when results disappoint.",
      "Accumulation of vasanas that drive further desire-bound action.",
    ],
    howToTransform:
      "Do not suppress desire — that is itself attachment. Instead, lift the same action toward nishkama by dedicating its fruit to the Divine. Keep working with full effort; only surrender the claim on the result. Sakama karma, offered to God, becomes the first step of karma yoga.",
  },
  {
    id: "akarma",
    sanskritName: "अकर्म",
    name: "Akarma",
    description:
      "Inaction — the refusal or avoidance of action that is one's dharma to perform. Krishna warns against akarma: one cannot escape the consequences of duty by sitting still. True inaction in the Gita is not laziness but the inner stillness of a sage who acts without acting — outwardly engaged, inwardly unattached.",
    gitaRef: "Bhagavad Gita 4.18",
    gitaVerse:
      "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ॥",
    examples: [
      "Avoiding a difficult conversation that is your responsibility to have.",
      "Refusing to earn a livelihood, calling it 'spiritual renunciation' while depending on others.",
      "Postponing a duty indefinitely, hoping it disappears.",
    ],
    fruits: [
      "Unfinished duties accumulate as prarabdha in future lives.",
      "The mind becomes dull and tamasic through inertia.",
      "Others suffer the consequences of your unperformed dharma.",
    ],
    howToTransform:
      "Distinguish akarma (avoidance) from the akarma of the sage (actionless action). Perform every duty that falls to you, but let the inner doer remain silent. The goal is not to stop acting but to act so transparently that no new bondage is created — this is the akarma Krishna praises.",
  },
];

/* ------------------------------------------------------------------ */
/* Krishna's karma yoga teachings for the modern worker               */
/* ------------------------------------------------------------------ */

interface Teaching {
  ref: string;
  verse: string;
  transliteration: string;
  meaning: string;
  application: string;
}

const MODERN_TEACHINGS: Teaching[] = [
  {
    ref: "Bhagavad Gita 2.47",
    verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration:
      "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo'stv akarmaṇi ||",
    meaning:
      "You have a right to action alone, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.",
    application:
      "At your desk each morning, set the intention: 'I will do this work as an offering.' When the appraisal, the bonus, or the recognition arrives — or does not — your peace does not depend on it. The work itself is your worship.",
  },
  {
    ref: "Bhagavad Gita 3.19",
    verse: "तस्मादसक्तः सततं कार्यं कर्म समाचर ।\nअसक्तश्चाचरन्कर्म परमाप्नोति पूरुषः ॥",
    transliteration:
      "tasmād asaktaḥ satataṁ kāryaṁ karma samācara |\nasaktaś cācaran karma param āpnoti pūruṣaḥ ||",
    meaning:
      "Therefore, without attachment, always perform the work that must be done. By performing action without attachment, one attains the Supreme.",
    application:
      "Treat every routine task — emails, meetings, reports, code reviews — as sacred duty. Do each with full attention and zero attachment. The same task done with attachment binds; done as offering, liberates.",
  },
  {
    ref: "Bhagavad Gita 4.20",
    verse:
      "त्यक्त्वा कर्मफलासङ्गं निःस्पृहः निर्ममो भव ।\nयुद्ध्य स्व विगतज्वरः तदा त्वमात्मानमेव आप्स्यसि ॥",
    transliteration:
      "tyaktvā karma-phalāsaṅgaṁ niḥspṛhaḥ nirmamo bhava |\nyuddhya svā vigata-jvaraḥ tadā tvam ātmānam eva āpsyasi ||",
    meaning:
      "Having abandoned attachment to the fruits of action, become free from longing and the sense of 'mine.' Fight on, free from fever of the mind — then you shall attain the Self.",
    application:
      "When a project succeeds, do not say 'I did it.' When it fails, do not say 'I am ruined.' Both belong to the Divine. Work with full skill, free from the fever of ownership — this is the karma yogi at the office.",
  },
];

/* ------------------------------------------------------------------ */
/* Step-by-step practice for the modern worker                        */
/* ------------------------------------------------------------------ */

const DAILY_PRACTICE_STEPS: { step: string; detail: string }[] = [
  {
    step: "Dedicate the day",
    detail:
      "Before opening your laptop, place both palms on your desk and silently say: 'Whatever I do today, I offer to Krishna. I am the instrument; the result is Yours.' This single sentence transforms the entire day into sadhana.",
  },
  {
    step: "Do your dharma fully",
    detail:
      "Identify your svadharma — the duty natural to your role and stage of life. Perform it with excellence, not half-heartedly. Krishna condemns neither work nor the worker, only the attachment to its fruit.",
  },
  {
    step: "Release each result",
    detail:
      "After every task — a sent email, a closed ticket, a delivered feature — mentally hand the outcome back to the Divine. Do not carry it home. The karma yogi travels light.",
  },
  {
    step: "Treat obstacles as prasadam",
    detail:
      "When a meeting runs long, a deployment fails, or a colleague is harsh, receive it as prasadam. Equanimity in success and failure is the mark of sthitaprajna — the sage of steady wisdom (Gita 2.48).",
  },
  {
    step: "Offer the day at night",
    detail:
      "Before sleep, review the day without judgment. Whatever was done well, offer it. Whatever was imperfect, offer it. Whatever was left undone, surrender it. Sleep as the unattached witness.",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Map a backend KarmaType + frontend data into the unified shape. */
function unifyBackend(
  backend: BackendKarmaType,
  data: KarmaType | undefined,
): UnifiedKarmaType {
  return {
    id: backend.id,
    sanskritName: backend.sanskritName,
    name: backend.name,
    description: backend.description,
    gitaRef:
      data?.gitaRef ??
      `${backend.sourceGranth} ${backend.sourceChapter}.${backend.sourceVerse}`,
    gitaVerse: data?.gitaVerse ?? "",
    examples: data?.whatToDo ? [data.whatToDo] : [],
    fruits: [],
    howToTransform: data?.metaphor
      ? `Metaphor: ${data.metaphor}. ${data?.story ?? ""}`.trim()
      : backend.practice,
    source: "backend",
  };
}

/** Map a frontend-only supplement entry into the unified shape. */
function unifyFrontend(
  entry: Omit<UnifiedKarmaType, "source">,
): UnifiedKarmaType {
  return { ...entry, source: "frontend" };
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

function KarmaYoga() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Fetch the list of karma types from the backend.
  const listQuery = useQuery({
    queryKey: ["karma-types"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.listKarmaTypes();
      return result as unknown as BackendKarmaType[];
    },
    staleTime: 5 * 60 * 1000,
  });

  // Fetch the detail of a single karma type when expanded (backend types only).
  const detailQuery = useQuery({
    queryKey: ["karma-type", expandedId],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getKarmaType(expandedId as string);
      return result as BackendKarmaType | null;
    },
    enabled: !!expandedId,
    staleTime: 5 * 60 * 1000,
  });

  // Build the unified list: backend types first, then frontend supplements.
  const backendTypes: UnifiedKarmaType[] = (listQuery.data ?? []).map((b) => {
    const dataMatch = KARMA_TYPES.find((k) => k.id === b.id);
    return unifyBackend(b, dataMatch);
  });

  const frontendTypes: UnifiedKarmaType[] =
    FRONTEND_SUPPLEMENT.map(unifyFrontend);

  const allTypes: UnifiedKarmaType[] = [...backendTypes, ...frontendTypes];

  // When a backend type is expanded, prefer the freshly-fetched detail.
  const expandedDetail: BackendKarmaType | undefined =
    expandedId && detailQuery.data && detailQuery.data.id === expandedId
      ? (detailQuery.data as BackendKarmaType)
      : undefined;

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ----------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ----------------------------------------------------------- */}
      <section className="pathway-hero">
        <p className="pathway-hero__eyebrow">Saadhna Pathway · 01</p>
        <h1 className="pathway-hero__title">Karma Yoga Saadhna</h1>
        <p className="pathway-hero__sanskrit">कर्म एव अधिकारस्ते</p>
        <p className="pathway-hero__subtitle">
          Work as Worship — the path of selfless action taught by Lord Krishna
          to Arjuna on the battlefield of Kurukshetra.
        </p>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Introduction                                                */}
      {/* ----------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          What is Karma Yoga?
        </h2>
        <p className="text-lg leading-relaxed text-foreground/80 mb-4">
          Karma Yoga is the yoga of action — the discipline of performing one's
          duty (<span className="italic">svadharma</span>) without attachment to
          its results. Krishna reveals this teaching to Arjuna in the Bhagavad
          Gita, when Arjuna collapses in despair at the thought of fighting his
          own kinsmen.
        </p>
        <p className="text-lg leading-relaxed text-foreground/80 mb-4">
          The central insight: you cannot avoid action, and you cannot control
          its fruits. What you can control is the spirit in which you act. When
          every action is offered to the Divine as worship, the same work that
          once bound you now liberates you. This is the secret of{" "}
          <span className="font-semibold">karma turned into yoga</span>.
        </p>
        <div className="scripture-citation mt-8">
          <p className="scripture-citation__ref">Bhagavad Gita 2.47</p>
          <p className="scripture-citation__verse">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
            <br />
            मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
          </p>
          <p className="scripture-citation__meaning">
            "You have a right to action alone, never to its fruits. Let not the
            fruit of action be your motive, nor let your attachment be to
            inaction."
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* The Six Karma Types                                         */}
      {/* ----------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          The Six Types of Karma
        </h2>
        <p className="text-lg text-foreground/70 mb-8">
          Krishna distinguishes several modes of action. Tap each card to unfold
          its meaning, examples, fruits, and the way to transform it into yoga.
        </p>

        {listQuery.isLoading && (
          <p className="text-lg text-foreground/60 italic">
            Loading karma teachings from the backend…
          </p>
        )}
        {listQuery.isError && (
          <p className="text-lg text-foreground/60 italic">
            (Backend unavailable — showing frontend-supplemented teachings
            below.)
          </p>
        )}

        <div className="space-y-4">
          {allTypes.map((karma) => {
            const isOpen = expandedId === karma.id;
            return (
              <article
                key={karma.id}
                className={`content-card--item ${isOpen ? "content-card--item--open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(karma.id)}
                  aria-expanded={isOpen}
                  aria-controls={`karma-detail-${karma.id}`}
                  className="content-card--item__header w-full text-left"
                >
                  <div className="content-card--item__heading">
                    <span className="content-card--item__sanskrit">
                      {karma.sanskritName}
                    </span>
                    <span className="content-card--item__name">
                      {karma.name}
                    </span>
                  </div>
                  <span
                    className="content-card--item__chevron"
                    aria-hidden="true"
                  >
                    {isOpen ? "▾" : "▸"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`karma-detail-${karma.id}`}
                    className="content-card--item__body"
                  >
                    <p className="content-card--item__description">
                      {karma.description}
                    </p>

                    {/* Gita reference */}
                    {karma.gitaVerse && (
                      <div className="scripture-citation mt-6">
                        <p className="scripture-citation__ref">
                          {karma.gitaRef}
                        </p>
                        <p className="scripture-citation__verse sanskrit-verse">
                          {karma.gitaVerse}
                        </p>
                      </div>
                    )}

                    {/* Examples */}
                    {karma.examples.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          Examples
                        </h3>
                        <ul className="step-list">
                          {karma.examples.map((ex, i) => (
                            <li
                              key={`example-${ex}`}
                              className="step-list__item"
                            >
                              <span className="step-list__marker">{i + 1}</span>
                              <span className="step-list__text">{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Fruits */}
                    {karma.fruits.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          Fruits of this Karma
                        </h3>
                        <ul className="step-list">
                          {karma.fruits.map((fruit) => (
                            <li
                              key={`fruit-${fruit}`}
                              className="step-list__item"
                            >
                              <span className="step-list__marker">•</span>
                              <span className="step-list__text">{fruit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* How to transform into yoga */}
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        How to Transform this Karma into Yoga
                      </h3>
                      <p className="text-lg leading-relaxed text-foreground/80">
                        {karma.howToTransform}
                      </p>
                    </div>

                    {/* Backend practice note, if available */}
                    {expandedDetail?.practice && (
                      <div className="mt-6 rounded-lg border border-border bg-card/50 p-4">
                        <p className="text-sm font-semibold text-foreground/60 mb-1">
                          Practice from the Granth
                        </p>
                        <p className="text-lg leading-relaxed text-foreground/80">
                          {expandedDetail.practice}
                        </p>
                      </div>
                    )}

                    {/* Source badge */}
                    <p className="mt-6 text-sm text-foreground/50 italic">
                      Source:{" "}
                      {karma.source === "backend"
                        ? "Backend API (listKarmaTypes / getKarmaType)"
                        : "Frontend supplement (KarmaYoga.tsx)"}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Krishna's Teachings for the Modern Worker                   */}
      {/* ----------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          Krishna's Teachings for the Modern Worker
        </h2>
        <p className="text-lg text-foreground/70 mb-8">
          How to do your job as dharma — three foundational verses applied to
          the workplace of today.
        </p>

        <div className="space-y-8">
          {MODERN_TEACHINGS.map((t) => (
            <article key={t.ref} className="scripture-citation">
              <p className="scripture-citation__ref">{t.ref}</p>
              <p className="scripture-citation__verse sanskrit-verse">
                {t.verse}
              </p>
              <p className="transliteration-line">{t.transliteration}</p>
              <div className="meaning-block">
                <p className="meaning-block__label">Meaning</p>
                <p className="meaning-block__text">{t.meaning}</p>
              </div>
              <div className="meaning-block">
                <p className="meaning-block__label">Application at Work</p>
                <p className="meaning-block__text">{t.application}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Daily Practice Steps                                        */}
      {/* ----------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          A Daily Practice for the Karma Yogi
        </h2>
        <p className="text-lg text-foreground/70 mb-8">
          Five steps to turn an ordinary workday into a saadhna of selfless
          action.
        </p>

        <ol className="step-list">
          {DAILY_PRACTICE_STEPS.map((s, i) => (
            <li key={`practice-step-${s.step}`} className="step-list__item">
              <span className="step-list__marker">{i + 1}</span>
              <div className="step-list__text">
                <p className="font-semibold text-foreground mb-1">{s.step}</p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {s.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Disclaimer                                                  */}
      {/* ----------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="disclaimer-banner">
          <p className="disclaimer-banner__title">Saadhna Guidance</p>
          <p className="disclaimer-banner__text">
            This pathway presents the philosophical foundation of Karma Yoga as
            taught in the Bhagavad Gita. It is offered for reflection and
            spiritual practice, not as professional, legal, or career advice.
            For personal guidance on applying these teachings to your specific
            circumstances, consult a qualified spiritual teacher (guru) or
            acharya of your tradition.
          </p>
        </div>
      </section>
    </div>
  );
}

export { KarmaYoga as KarmaYogaPage };
export default KarmaYoga;
