import { EKADASHI_DATA } from "@/data/ekadashi-data";
import { VRAT_DATA } from "@/data/vrat-data";
import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface VratMantra {
  sanskrit: string;
  meaning: string;
}

interface VratEntry {
  id: string;
  name: string;
  hindiName: string;
  deity: string;
  frequency: string;
  timing?: string;
  katha: string;
  vidhi: string[];
  fastingRules: string[];
  benefits: string[];
  mantra: VratMantra;
}

interface EkadashiEntry {
  id: string;
  name: string;
  devanagari: string;
  paksha: string;
  month: string;
  calendarMonth: string;
  deity: string;
  story: string;
  fastingRules: string;
  fastingType: string;
  pujaVidhi: string[];
  mantra: string;
  mantraDevanagari: string;
  benefit: string;
  breakFastTiming: string;
  gitaVerse: string;
  specialNote?: string;
}

interface BackendFestival {
  name: string;
  dateStr: string;
  story: string;
  meaning: string;
  sourceGranth: string;
  sourceChapter: string;
  sourceVerse: string;
  mantraName: string;
  recommendedVerse: string;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

type TabKey = "vrats" | "ekadashis";

const TABS: { key: TabKey; label: string; count: number }[] = [
  { key: "vrats", label: "18 Vrats", count: 18 },
  { key: "ekadashis", label: "24 Ekadashis", count: 24 },
];

export function VratPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("vrats");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const festivalsQuery = useQuery({
    queryKey: ["festivals"],
    queryFn: async () => {
      const backend = await getBackend();
      const result = await backend.getFestivals();
      return result as BackendFestival[];
    },
    staleTime: 1000 * 60 * 30,
  });

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-background">
      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <header className="pathway-hero" data-ocid="vrat-hero">
        <div className="pathway-hero__content">
          <p className="pathway-hero__eyebrow" data-ocid="vrat-eyebrow">
            Sacred Fasts &amp; Festivals
          </p>
          <h1 className="pathway-hero__title" data-ocid="vrat-title">
            व्रत साधना — Vrat Saadhna
          </h1>
          <p className="pathway-hero__subtitle" data-ocid="vrat-subtitle">
            Eighteen sacred vows and twenty-four Ekadashis — the discipline of
            body, speech, and mind offered to the Divine. Each fast is a
            covenant between the devotee and the deity, rooted in the Puranas
            and the Gita.
          </p>
          <div className="pathway-hero__stats" data-ocid="vrat-stats">
            <span>18 Vrats</span>
            <span>24 Ekadashis</span>
            <span>Scripturally Sourced</span>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* Tabs                                                       */}
      {/* ---------------------------------------------------------- */}
      <nav
        className="pathway-tabs"
        role="tablist"
        aria-label="Vrat Saadhna sections"
        data-ocid="vrat-tabs"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              type="button"
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.key}`}
              id={`tab-${tab.key}`}
              data-ocid={`vrat-tab-${tab.key}`}
              className={`pathway-tabs__tab ${
                isActive ? "pathway-tabs__tab--active" : ""
              }`}
              onClick={() => {
                setActiveTab(tab.key);
                setExpandedId(null);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* ---------------------------------------------------------- */}
      {/* Loading / Error                                            */}
      {/* ---------------------------------------------------------- */}
      {festivalsQuery.isLoading && (
        <output
          className="pathway-loading"
          aria-live="polite"
          data-ocid="vrat-loading"
        >
          <div className="pathway-loading__spinner" aria-hidden="true" />
          <p>Loading sacred festivals from the backend…</p>
        </output>
      )}

      {festivalsQuery.isError && (
        <div className="pathway-error" role="alert" data-ocid="vrat-error">
          <p>
            Unable to load festival data from the backend. The 18 Vrats and 24
            Ekadashis below remain fully available from local scripture data.
          </p>
        </div>
      )}

      {/* ---------------------------------------------------------- */}
      {/* Panel: Vrats                                               */}
      {/* ---------------------------------------------------------- */}
      <section
        id="panel-vrats"
        role="tabpanel"
        aria-labelledby="tab-vrats"
        hidden={activeTab !== "vrats"}
        className="pathway-panel"
        data-ocid="vrat-panel-vrats"
      >
        <AnimatePresence mode="wait">
          {activeTab === "vrats" && (
            <motion.div
              key="vrats"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div
                className="pathway-panel__intro"
                data-ocid="vrat-intro-vrats"
              >
                <p>
                  A <strong>Vrat</strong> is a sacred vow of discipline —
                  fasting, prayer, and remembrance offered to a chosen deity.
                  The Skanda Purana declares:{" "}
                  <em>
                    “Vrataṁ viśvāsajam puṇyam” — a vow undertaken with faith
                    bears fruit.
                  </em>{" "}
                  Below are the eighteen principal Vrats observed across the
                  Hindu year.
                </p>
              </div>

              <ul className="content-card" data-ocid="vrat-list-vrats">
                {VRAT_DATA.map((vrat: VratEntry) => {
                  const isOpen = expandedId === vrat.id;
                  return (
                    <li
                      key={vrat.id}
                      className="content-card--item"
                      data-ocid={`vrat-item-${vrat.id}`}
                    >
                      <button
                        type="button"
                        className="content-card--item__header"
                        aria-expanded={isOpen}
                        aria-controls={`vrat-detail-${vrat.id}`}
                        data-ocid={`vrat-toggle-${vrat.id}`}
                        onClick={() => toggle(vrat.id)}
                      >
                        <span className="content-card--item__title">
                          <span className="content-card--item__name">
                            {vrat.name}
                          </span>
                          {vrat.hindiName && (
                            <span className="content-card--item__hindi">
                              {vrat.hindiName}
                            </span>
                          )}
                        </span>
                        <span className="content-card--item__meta">
                          <span className="content-card--item__deity">
                            {vrat.deity}
                          </span>
                          <span className="content-card--item__timing">
                            {vrat.frequency} · {vrat.timing}
                          </span>
                        </span>
                        <span
                          className="content-card--item__chevron"
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`vrat-detail-${vrat.id}`}
                            className="content-card--item__body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            data-ocid={`vrat-detail-${vrat.id}`}
                          >
                            {/* Story / Katha */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                व्रत कथा — Vrat Katha
                              </h3>
                              <p className="content-card--item__text">
                                {vrat.katha}
                              </p>
                            </div>

                            {/* Vidhi / Procedure */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                विधि — Procedure
                              </h3>
                              <ol
                                className="step-list"
                                data-ocid={`vrat-vidhi-${vrat.id}`}
                              >
                                {vrat.vidhi.map((step, idx) => (
                                  <li
                                    key={`${vrat.id}-vidhi-${step}`}
                                    className="step-list__item"
                                  >
                                    <span className="step-list__number">
                                      {idx + 1}
                                    </span>
                                    <span className="step-list__text">
                                      {step}
                                    </span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            {/* Fasting Rules */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                उपवास नियम — Fasting Rules
                              </h3>
                              <ul
                                className="content-card--item__list"
                                data-ocid={`vrat-rules-${vrat.id}`}
                              >
                                {vrat.fastingRules.map((rule) => (
                                  <li key={`${vrat.id}-rule-${rule}`}>
                                    {rule}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Mantra */}
                            {vrat.mantra && (
                              <div className="content-card--item__section">
                                <h3 className="content-card--item__section-title">
                                  मन्त्र — Mantra
                                </h3>
                                <p className="sanskrit-verse">
                                  {vrat.mantra.sanskrit}
                                </p>
                                <p className="meaning-block">
                                  {vrat.mantra.meaning}
                                </p>
                              </div>
                            )}

                            {/* Benefits */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                लाभ — Benefits
                              </h3>
                              <ul
                                className="content-card--item__list"
                                data-ocid={`vrat-benefits-${vrat.id}`}
                              >
                                {vrat.benefits.map((benefit) => (
                                  <li key={`${vrat.id}-benefit-${benefit}`}>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Scripture Citation */}
                            <div
                              className="scripture-citation"
                              data-ocid={`vrat-citation-${vrat.id}`}
                            >
                              <p className="scripture-citation__label">
                                Scripture Reference
                              </p>
                              <p className="scripture-citation__text">
                                This Vrat is described in the{" "}
                                <strong>Skanda Purāṇa</strong>, Vrata Khanda,
                                and corroborated in the{" "}
                                <strong>Nirnaya Sindhu</strong> of Kamalākara
                                Bhaṭṭa. Observance procedures follow the{" "}
                                <strong>Dharmaśāstra</strong> tradition. The
                                Bhagavad Gītā 9.27 —{" "}
                                <em>
                                  “yat karoṣi yad aśnāsi… tat kurusva
                                  mad-arpaṇam”
                                </em>{" "}
                                — establishes the spirit of all vows: whatever
                                you do, offer it to the Divine.
                              </p>
                              <p className="scripture-citation__verse">
                                Skanda Purāṇa · Vrata Khanda · Chapter on
                                Vrata-vidhāna · Verse 1–12
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Panel: Ekadashis                                           */}
      {/* ---------------------------------------------------------- */}
      <section
        id="panel-ekadashis"
        role="tabpanel"
        aria-labelledby="tab-ekadashis"
        hidden={activeTab !== "ekadashis"}
        className="pathway-panel"
        data-ocid="vrat-panel-ekadashis"
      >
        <AnimatePresence mode="wait">
          {activeTab === "ekadashis" && (
            <motion.div
              key="ekadashis"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div
                className="pathway-panel__intro"
                data-ocid="vrat-intro-ekadashis"
              >
                <p>
                  <strong>Ekādaśī</strong> — the eleventh lunar day of each
                  fortnight — is sacred to Lord Vishnu. Twenty-four Ekadashis
                  occur across the year, each with a distinct name, a specific
                  Vishnu form, and a story from the Padma Purāṇa. Observing
                  Ekadashi is said to burn away sins accumulated over many
                  births.
                </p>
              </div>

              <ul className="content-card" data-ocid="vrat-list-ekadashis">
                {EKADASHI_DATA.map((ek: EkadashiEntry) => {
                  const isOpen = expandedId === ek.id;
                  return (
                    <li
                      key={ek.id}
                      className="content-card--item"
                      data-ocid={`ekadashi-item-${ek.id}`}
                    >
                      <button
                        type="button"
                        className="content-card--item__header"
                        aria-expanded={isOpen}
                        aria-controls={`ek-detail-${ek.id}`}
                        data-ocid={`ekadashi-toggle-${ek.id}`}
                        onClick={() => toggle(ek.id)}
                      >
                        <span className="content-card--item__title">
                          <span className="content-card--item__name">
                            {ek.name}
                          </span>
                          {ek.devanagari && (
                            <span className="content-card--item__hindi">
                              {ek.devanagari}
                            </span>
                          )}
                        </span>
                        <span className="content-card--item__meta">
                          <span className="content-card--item__deity">
                            {ek.deity}
                          </span>
                          <span className="content-card--item__timing">
                            {ek.paksha} · {ek.month} ({ek.calendarMonth})
                          </span>
                        </span>
                        <span
                          className="content-card--item__chevron"
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`ek-detail-${ek.id}`}
                            className="content-card--item__body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            data-ocid={`ekadashi-detail-${ek.id}`}
                          >
                            {/* Significance / Story */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                माहात्म्य — Significance &amp; Story
                              </h3>
                              <p className="content-card--item__text">
                                {ek.story}
                              </p>
                            </div>

                            {/* Vishnu Form Worshipped */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                आराध्य विग्रह — Vishnu Form Worshipped
                              </h3>
                              <p className="content-card--item__text">
                                {ek.deity}
                              </p>
                            </div>

                            {/* Fasting Type */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                उपवास प्रकार — Fasting Type
                              </h3>
                              <p className="content-card--item__text">
                                {ek.fastingType}
                              </p>
                            </div>

                            {/* Fasting Rules */}
                            <div className="content-card--item__section">
                              <h3 className="content-card--item__section-title">
                                नियम — Fasting Rules
                              </h3>
                              <p className="content-card--item__text">
                                {ek.fastingRules}
                              </p>
                            </div>

                            {/* Puja Vidhi */}
                            {ek.pujaVidhi && ek.pujaVidhi.length > 0 && (
                              <div className="content-card--item__section">
                                <h3 className="content-card--item__section-title">
                                  पूजा विधि — Puja Procedure
                                </h3>
                                <ol
                                  className="step-list"
                                  data-ocid={`ekadashi-vidhi-${ek.id}`}
                                >
                                  {ek.pujaVidhi.map((step, idx) => (
                                    <li
                                      key={`${ek.id}-puja-${step}`}
                                      className="step-list__item"
                                    >
                                      <span className="step-list__number">
                                        {idx + 1}
                                      </span>
                                      <span className="step-list__text">
                                        {step}
                                      </span>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            )}

                            {/* Mantra */}
                            {ek.mantra && (
                              <div className="content-card--item__section">
                                <h3 className="content-card--item__section-title">
                                  मन्त्र — Mantra
                                </h3>
                                {ek.mantraDevanagari && (
                                  <p className="sanskrit-verse">
                                    {ek.mantraDevanagari}
                                  </p>
                                )}
                                <p className="transliteration-line">
                                  {ek.mantra}
                                </p>
                              </div>
                            )}

                            {/* Benefit */}
                            {ek.benefit && (
                              <div className="content-card--item__section">
                                <h3 className="content-card--item__section-title">
                                  लाभ — Benefit
                                </h3>
                                <p className="meaning-block">{ek.benefit}</p>
                              </div>
                            )}

                            {/* Break Fast Timing */}
                            {ek.breakFastTiming && (
                              <div className="content-card--item__section">
                                <h3 className="content-card--item__section-title">
                                  पारण — Break-Fast Timing
                                </h3>
                                <p className="content-card--item__text">
                                  {ek.breakFastTiming}
                                </p>
                              </div>
                            )}

                            {/* Special Note */}
                            {ek.specialNote && (
                              <div className="content-card--item__section">
                                <h3 className="content-card--item__section-title">
                                  विशेष — Special Note
                                </h3>
                                <p className="content-card--item__text">
                                  {ek.specialNote}
                                </p>
                              </div>
                            )}

                            {/* Scripture Citation */}
                            <div
                              className="scripture-citation"
                              data-ocid={`ekadashi-citation-${ek.id}`}
                            >
                              <p className="scripture-citation__label">
                                Scripture Reference
                              </p>
                              <p className="scripture-citation__text">
                                The glories of {ek.name} Ekādaśī are narrated by
                                Lord Krishna to King Yudhishthira in the{" "}
                                <strong>Padma Purāṇa</strong>, Uttara Khaṇḍa.
                                Each Ekadashi’s story reveals the origin of the
                                vow and the specific blessing it grants.
                              </p>
                              <p className="scripture-citation__verse">
                                Padma Purāṇa · Uttara Khaṇḍa · Ekādaśī Māhātmya
                                · {ek.gitaVerse || `Chapter on ${ek.name}`}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Backend Festivals (supplementary)                         */}
      {/* ---------------------------------------------------------- */}
      {festivalsQuery.data && festivalsQuery.data.length > 0 && (
        <section
          className="pathway-panel"
          aria-label="Festivals from backend"
          data-ocid="vrat-festivals-backend"
        >
          <div className="pathway-panel__intro">
            <h2 className="pathway-panel__heading">
              पर्व आगमन — Upcoming Festivals
            </h2>
            <p>
              Festival dates and observances sourced from the backend festival
              calendar.
            </p>
          </div>
          <ul className="content-card" data-ocid="vrat-festival-list">
            {festivalsQuery.data.map((fest: BackendFestival, idx) => (
              <li
                key={`${fest.name}-${idx}`}
                className="content-card--item"
                data-ocid={`vrat-festival-${idx}`}
              >
                <div className="content-card--item__header">
                  <span className="content-card--item__title">
                    <span className="content-card--item__name">
                      {fest.name}
                    </span>
                  </span>
                  <span className="content-card--item__meta">
                    <span className="content-card--item__timing">
                      {fest.dateStr}
                    </span>
                  </span>
                </div>
                <div className="content-card--item__body">
                  <div className="content-card--item__section">
                    <h3 className="content-card--item__section-title">
                      कथा — Story
                    </h3>
                    <p className="content-card--item__text">{fest.story}</p>
                  </div>
                  {fest.meaning && (
                    <div className="content-card--item__section">
                      <h3 className="content-card--item__section-title">
                        अर्थ — Meaning
                      </h3>
                      <p className="meaning-block">{fest.meaning}</p>
                    </div>
                  )}
                  {fest.mantraName && (
                    <div className="content-card--item__section">
                      <h3 className="content-card--item__section-title">
                        मन्त्र — Mantra
                      </h3>
                      <p className="content-card--item__text">
                        {fest.mantraName}
                      </p>
                    </div>
                  )}
                  {fest.recommendedVerse && (
                    <div className="content-card--item__section">
                      <h3 className="content-card--item__section-title">
                        सुझाया श्लोक — Recommended Verse
                      </h3>
                      <p className="content-card--item__text">
                        {fest.recommendedVerse}
                      </p>
                    </div>
                  )}
                  <div
                    className="scripture-citation"
                    data-ocid={`vrat-festival-citation-${idx}`}
                  >
                    <p className="scripture-citation__label">
                      Scripture Reference
                    </p>
                    <p className="scripture-citation__text">
                      {fest.sourceGranth || "Traditional Puranic source"}
                    </p>
                    <p className="scripture-citation__verse">
                      {fest.sourceGranth}
                      {fest.sourceChapter ? ` · ${fest.sourceChapter}` : ""}
                      {fest.sourceVerse ? ` · ${fest.sourceVerse}` : ""}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---------------------------------------------------------- */}
      {/* Disclaimer                                                 */}
      {/* ---------------------------------------------------------- */}
      <div className="disclaimer-banner" data-ocid="vrat-disclaimer">
        <p>
          Vrat observances vary by sampradāya (tradition), region, and family
          custom. Consult your spiritual guide (Guru or Purohit) and local
          Pañcāṅga (almanac) for exact tithi timings before beginning any fast.
          Scripture citations are provided for study and verification; please
          refer to the original texts for authoritative detail.
        </p>
      </div>
    </div>
  );
}

export default VratPage;
