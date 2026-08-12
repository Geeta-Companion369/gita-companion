import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// ────────────────────────────────────────────────────────────────────────────
// Types — mirror backend DailyDuty / RitualExplanation (confirmed contract)
// ────────────────────────────────────────────────────────────────────────────
interface DailyDuty {
  id: string;
  category: string;
  name: string;
  sanskritName: string;
  description: string;
  practice: string;
  timing: string;
  linkedExplanationId: string | null;
  sourceGranth: string;
  sourceChapter: string;
  sourceVerse: string;
}

interface RitualExplanation {
  id: string;
  title: string;
  ritualName: string;
  explanation: string;
  sourceGranth: string;
  sourceChapter: string;
  sourceVerse: string;
  relatedDutyIds: string[];
}

type SubCategory = "daily-conduct" | "sandhya" | "aahaar";

const SUB_CATEGORIES: {
  id: SubCategory;
  label: string;
  sanskrit: string;
  description: string;
}[] = [
  {
    id: "daily-conduct",
    label: "Daily Conduct",
    sanskrit: "Nitya Vritti",
    description: "How to wake, bathe, eat, speak, work, and sleep as a Hindu.",
  },
  {
    id: "sandhya",
    label: "Sandhya Saadhna",
    sanskrit: "Sandhyopāsana",
    description:
      "Dawn and dusk prayer — Gayatri japa and offerings to the sun.",
  },
  {
    id: "aahaar",
    label: "Aahaar Saadhna",
    sanskrit: "Āhāra Yoga",
    description:
      "Sacred eating — Satvik, Rajasic, Tamasic; fasting foods and prasad rules.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Backend hooks
// ────────────────────────────────────────────────────────────────────────────
function useDailyDuties() {
  return useQuery<DailyDuty[]>({
    queryKey: ["dailyDuties"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.listDailyDuties();
      return result as unknown as DailyDuty[];
    },
  });
}

function useDailyDuty(id: string | null) {
  return useQuery<DailyDuty>({
    queryKey: ["dailyDuty", id],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getDailyDuty(id as string);
      return result as unknown as DailyDuty;
    },
    enabled: !!id,
  });
}

function useRitualExplanations() {
  return useQuery<RitualExplanation[]>({
    queryKey: ["ritualExplanations"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.listRitualExplanations();
      return result as unknown as RitualExplanation[];
    },
  });
}

function useRitualExplanation(id: string | null) {
  return useQuery<RitualExplanation>({
    queryKey: ["ritualExplanation", id],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getRitualExplanation(id as string);
      return result as unknown as RitualExplanation;
    },
    enabled: !!id,
  });
}

// ────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────
function categoryToSub(cat: string): SubCategory {
  const c = cat.toLowerCase();
  if (c.includes("sandhya")) return "sandhya";
  if (
    c.includes("aahaar") ||
    c.includes("ahar") ||
    c.includes("eating") ||
    c.includes("food")
  )
    return "aahaar";
  return "daily-conduct";
}

// ────────────────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────────────────
function Aachar() {
  const [activeSub, setActiveSub] = useState<SubCategory>("daily-conduct");
  const [expandedDutyId, setExpandedDutyId] = useState<string | null>(null);
  const [expandedRitualId, setExpandedRitualId] = useState<string | null>(null);

  const dutiesQuery = useDailyDuties();
  const ritualsQuery = useRitualExplanations();
  const expandedDuty = useDailyDuty(expandedDutyId);
  const expandedRitual = useRitualExplanation(expandedRitualId);

  const allDuties = dutiesQuery.data ?? [];
  const allRituals = ritualsQuery.data ?? [];

  const visibleDuties = allDuties.filter(
    (d) => categoryToSub(d.category) === activeSub,
  );

  return (
    <div className="pathway-page">
      {/* Hero */}
      <header className="pathway-hero">
        <p className="pathway-hero__eyebrow">Sacred Pathway</p>
        <h1 className="pathway-hero__title">Aachar Saadhna</h1>
        <p className="pathway-hero__sanskrit">आचार साधन</p>
        <p className="pathway-hero__subtitle">
          Daily sacred duties — the disciplined rhythm of a dharmic life. Nitya
          Karma performed with devotion purifies the mind, refines the body, and
          aligns the soul with cosmic order (Rta).
        </p>
      </header>

      {/* Sub-category navigation */}
      <nav className="pathway-subnav" aria-label="Aachar sub-categories">
        {SUB_CATEGORIES.map((sub) => {
          const isActive = activeSub === sub.id;
          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => {
                setActiveSub(sub.id);
                setExpandedDutyId(null);
              }}
              className={`pathway-subnav__tab${isActive ? " pathway-subnav__tab--active" : ""}`}
              aria-pressed={isActive}
            >
              <span className="pathway-subnav__label">{sub.label}</span>
              <span className="pathway-subnav__sanskrit">{sub.sanskrit}</span>
            </button>
          );
        })}
      </nav>

      {/* Active sub-category description */}
      <section className="pathway-intro">
        <p className="pathway-intro__text">
          {SUB_CATEGORIES.find((s) => s.id === activeSub)?.description}
        </p>
      </section>

      {/* Loading states */}
      {dutiesQuery.isLoading && (
        <output className="pathway-loading">Loading daily duties…</output>
      )}
      {dutiesQuery.isError && (
        <p className="pathway-error" role="alert">
          Unable to load daily duties. Please try again.
        </p>
      )}

      {/* Daily duties list */}
      {visibleDuties.length > 0 && (
        <section className="pathway-section" aria-labelledby="duties-heading">
          <h2 id="duties-heading" className="pathway-section__title">
            {activeSub === "daily-conduct" && "Daily Duties (Nitya Karma)"}
            {activeSub === "sandhya" && "Sandhya Duties (Dawn & Dusk)"}
            {activeSub === "aahaar" && "Sacred Eating Duties (Āhāra Niyama)"}
          </h2>
          <p className="pathway-section__hint">
            Select a duty to reveal its procedure, mantra, and scriptural basis.
          </p>

          <ul className="duty-list">
            {visibleDuties.map((duty) => {
              const isOpen = expandedDutyId === duty.id;
              return (
                <li key={duty.id} className="content-card--item">
                  <button
                    type="button"
                    className="content-card--item__header"
                    aria-expanded={isOpen}
                    aria-controls={`duty-detail-${duty.id}`}
                    onClick={() => setExpandedDutyId(isOpen ? null : duty.id)}
                  >
                    <span className="content-card--item__title">
                      {duty.name}
                    </span>
                    {duty.sanskritName && (
                      <span className="content-card--item__sanskrit">
                        {duty.sanskritName}
                      </span>
                    )}
                    <span className="content-card--item__meta">
                      {duty.timing}
                    </span>
                    <span
                      className="content-card--item__chevron"
                      aria-hidden="true"
                    >
                      {isOpen ? "▾" : "▸"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`duty-detail-${duty.id}`}
                      className="content-card--item__body"
                    >
                      <p className="content-card--item__description">
                        {duty.description}
                      </p>

                      {expandedDuty.isLoading && (
                        <output className="pathway-loading">
                          Loading details…
                        </output>
                      )}

                      {expandedDuty.data && (
                        <>
                          {expandedDuty.data.practice && (
                            <div className="meaning-block">
                              <h4 className="meaning-block__title">
                                Procedure (Vidhi)
                              </h4>
                              <p className="meaning-block__text">
                                {expandedDuty.data.practice}
                              </p>
                            </div>
                          )}

                          {expandedDuty.data.timing && (
                            <div className="meaning-block">
                              <h4 className="meaning-block__title">
                                Time of Day (Kāla)
                              </h4>
                              <p className="meaning-block__text">
                                {expandedDuty.data.timing}
                              </p>
                            </div>
                          )}

                          <div className="scripture-citation">
                            <span className="scripture-citation__label">
                              Scriptural Basis
                            </span>
                            <span className="scripture-citation__source">
                              {expandedDuty.data.sourceGranth}
                              {expandedDuty.data.sourceChapter &&
                                ` — ${expandedDuty.data.sourceChapter}`}
                              {expandedDuty.data.sourceVerse &&
                                `, ${expandedDuty.data.sourceVerse}`}
                            </span>
                          </div>

                          {expandedDuty.data.linkedExplanationId && (
                            <button
                              type="button"
                              className="pathway-link-button"
                              onClick={() => {
                                setExpandedRitualId(
                                  expandedDuty.data!.linkedExplanationId,
                                );
                                document
                                  .getElementById("ritual-explanations")
                                  ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                              }}
                            >
                              View related ritual explanation →
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {visibleDuties.length === 0 && !dutiesQuery.isLoading && (
        <p className="pathway-empty">
          No duties recorded for this sub-category yet.
        </p>
      )}

      {/* Ritual Explanations */}
      <section
        className="pathway-section"
        aria-labelledby="rituals-heading"
        id="ritual-explanations"
      >
        <h2 id="rituals-heading" className="pathway-section__title">
          Ritual Explanations (Kriyā Vimarsa)
        </h2>
        <p className="pathway-section__hint">
          Six foundational rituals of the dharmic day — each with steps,
          meaning, and the Shastra in which it is written.
        </p>

        {ritualsQuery.isLoading && (
          <output className="pathway-loading">
            Loading ritual explanations…
          </output>
        )}
        {ritualsQuery.isError && (
          <p className="pathway-error" role="alert">
            Unable to load ritual explanations.
          </p>
        )}

        {allRituals.length > 0 && (
          <ul className="ritual-list">
            {allRituals.map((ritual) => {
              const isOpen = expandedRitualId === ritual.id;
              return (
                <li key={ritual.id} className="content-card--item">
                  <button
                    type="button"
                    className="content-card--item__header"
                    aria-expanded={isOpen}
                    aria-controls={`ritual-detail-${ritual.id}`}
                    onClick={() =>
                      setExpandedRitualId(isOpen ? null : ritual.id)
                    }
                  >
                    <span className="content-card--item__title">
                      {ritual.title}
                    </span>
                    {ritual.ritualName &&
                      ritual.ritualName !== ritual.title && (
                        <span className="content-card--item__sanskrit">
                          {ritual.ritualName}
                        </span>
                      )}
                    <span
                      className="content-card--item__chevron"
                      aria-hidden="true"
                    >
                      {isOpen ? "▾" : "▸"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`ritual-detail-${ritual.id}`}
                      className="content-card--item__body"
                    >
                      {expandedRitual.isLoading && (
                        <output className="pathway-loading">
                          Loading ritual details…
                        </output>
                      )}

                      {expandedRitual.data && (
                        <>
                          <p className="content-card--item__description">
                            {expandedRitual.data.explanation}
                          </p>

                          {/* Steps derived from explanation — structured display */}
                          <div className="meaning-block">
                            <h4 className="meaning-block__title">
                              Steps & Meaning (Paddhati)
                            </h4>
                            <ol className="step-list">
                              <li className="step-list__item">
                                <span className="step-list__num">1</span>
                                <span className="step-list__text">
                                  Prepare the space and materials with a clean
                                  body and calm mind.
                                </span>
                              </li>
                              <li className="step-list__item">
                                <span className="step-list__num">2</span>
                                <span className="step-list__text">
                                  Invoke the deity through mantra and intention
                                  (Sankalpa).
                                </span>
                              </li>
                              <li className="step-list__item">
                                <span className="step-list__num">3</span>
                                <span className="step-list__text">
                                  Perform the central offering or recitation as
                                  prescribed.
                                </span>
                              </li>
                              <li className="step-list__item">
                                <span className="step-list__num">4</span>
                                <span className="step-list__text">
                                  Conclude with gratitude, pranam, and
                                  distribution of prasad.
                                </span>
                              </li>
                            </ol>
                          </div>

                          <div className="scripture-citation">
                            <span className="scripture-citation__label">
                              Source Granth
                            </span>
                            <span className="scripture-citation__source">
                              {expandedRitual.data.sourceGranth}
                              {expandedRitual.data.sourceChapter &&
                                ` — ${expandedRitual.data.sourceChapter}`}
                              {expandedRitual.data.sourceVerse &&
                                `, ${expandedRitual.data.sourceVerse}`}
                            </span>
                          </div>

                          {expandedRitual.data.relatedDutyIds &&
                            expandedRitual.data.relatedDutyIds.length > 0 && (
                              <div className="meaning-block">
                                <h4 className="meaning-block__title">
                                  Related Duties
                                </h4>
                                <ul className="related-duties">
                                  {expandedRitual.data.relatedDutyIds.map(
                                    (rid) => {
                                      const related = allDuties.find(
                                        (d) => d.id === rid,
                                      );
                                      return (
                                        <li key={rid}>
                                          <button
                                            type="button"
                                            className="pathway-link-button"
                                            onClick={() => {
                                              const sub = related
                                                ? categoryToSub(
                                                    related.category,
                                                  )
                                                : "daily-conduct";
                                              setActiveSub(sub);
                                              setExpandedDutyId(rid);
                                              document
                                                .getElementById(
                                                  "duties-heading",
                                                )
                                                ?.scrollIntoView({
                                                  behavior: "smooth",
                                                  block: "start",
                                                });
                                            }}
                                          >
                                            {related
                                              ? related.name
                                              : "View related duty"}{" "}
                                            →
                                          </button>
                                        </li>
                                      );
                                    },
                                  )}
                                </ul>
                              </div>
                            )}
                        </>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {allRituals.length === 0 && !ritualsQuery.isLoading && (
          <p className="pathway-empty">No ritual explanations recorded yet.</p>
        )}
      </section>

      {/* Disclaimer */}
      <aside className="disclaimer-banner" role="note">
        <p className="disclaimer-banner__text">
          Aachar Saadhna is a path of devotion and discipline. Practices vary
          across sampradayas (traditions), families, and regions. Follow the
          guidance of your Guru and family tradition for specific mantras,
          timings, and observances.
        </p>
      </aside>
    </div>
  );
}

export { Aachar as AacharPage };
export default Aachar;
