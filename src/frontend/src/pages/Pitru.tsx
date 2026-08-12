import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// ---- Types (mirrors backend PitruRite) ----
interface PitruRite {
  id: string;
  sanskritName: string;
  name: string;
  sourceGranth: string;
  sourceChapter: string;
  sourceVerse: string;
  timing: string;
  offerings: string[];
  description: string;
  procedure: string;
}

// ---- Backend helpers ----
async function fetchPitruRites(): Promise<PitruRite[]> {
  const backend = await getBackend();
  const result = await backend.listPitruRites();
  return result as unknown as PitruRite[];
}

async function fetchPitruRite(id: string): Promise<PitruRite> {
  const backend = await getBackend();
  const result = await backend.getPitruRite(id);
  return result as unknown as PitruRite;
}

// ---- Component ----
function Pitru() {
  const [openId, setOpenId] = useState<string | null>(null);

  const listQuery = useQuery({
    queryKey: ["pitru-rites"],
    queryFn: fetchPitruRites,
  });

  const detailQuery = useQuery({
    queryKey: ["pitru-rite", openId],
    queryFn: () => fetchPitruRite(openId!),
    enabled: !!openId,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="pathway-hero">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-4">
            पितृ साधना
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Pitru Saadhna
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Honoring the ancestors — the sacred duty of remembrance, gratitude,
            and liberation of the departed souls.
          </p>
          <div className="scripture-citation mt-8 max-w-2xl mx-auto">
            <p className="text-base italic">
              "The debt to the ancestors is paid through remembrance, offering,
              and righteous living."
            </p>
            <p className="text-sm mt-2 not-italic">— Manusmriti 6.2</p>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="content-card--item p-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
            The Sacred Duty to the Pitrus
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            In the Vedic tradition, three primary debts (रण) rest upon every
            human birth: to the gods through sacrifice, to the sages through
            study, and to the ancestors through progeny and ritual. Pitru
            Saadhna is the conscious practice of discharging the third debt —
            honoring those whose lives made ours possible.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            These rites are not mere ceremony; they are a bridge between the
            living and the departed, ensuring the soul's peaceful transition and
            the family's continued spiritual welfare.
          </p>
        </div>
      </section>

      {/* RITES LIST */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
          The Four Pitru Rites
        </h2>

        {listQuery.isLoading && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Loading the sacred rites...
            </p>
          </div>
        )}

        {listQuery.isError && (
          <div className="content-card--item p-6 text-center">
            <p className="text-lg text-destructive">
              Unable to load the rites at this time. Please try again.
            </p>
          </div>
        )}

        {listQuery.data && (
          <div className="space-y-6">
            {listQuery.data.map((rite) => {
              const isOpen = openId === rite.id;
              return (
                <article
                  key={rite.id}
                  className="content-card--item overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : rite.id)}
                    className="w-full text-left p-6 md:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                    aria-expanded={isOpen}
                    aria-controls={`rite-detail-${rite.id}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-widest text-primary mb-2">
                          {rite.sourceGranth}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-1">
                          {rite.name}
                        </h3>
                        <p className="text-xl text-muted-foreground font-display">
                          {rite.sanskritName}
                        </p>
                        <p className="text-base md:text-lg text-foreground/80 mt-3 leading-relaxed">
                          {rite.description}
                        </p>
                      </div>
                      <span
                        className="text-2xl text-primary shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`rite-detail-${rite.id}`}
                      className="px-6 md:px-8 pb-8 pt-2 border-t border-border/60"
                    >
                      {detailQuery.isLoading && (
                        <p className="text-base text-muted-foreground py-6">
                          Loading details...
                        </p>
                      )}
                      {detailQuery.isError && (
                        <p className="text-base text-destructive py-6">
                          Could not load the full procedure.
                        </p>
                      )}
                      {detailQuery.data && (
                        <RiteDetail rite={detailQuery.data} />
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* GUIDANCE FOR SOLO PRACTICE */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="content-card--item p-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Performing Pitru Rites Alone
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            Many today live far from family, in cities or countries where the
            traditional priest and gathered kin are not available. The
            scriptures are clear: the sincerity of the heart matters more than
            the perfection of the ritual. You may perform these rites alone,
            with whatever means you have.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4 mt-8">
            How to Begin Alone
          </h3>
          <ol className="step-list">
            <li>
              <strong>Set a clear intention (Sankalpa).</strong> Sit quietly and
              speak aloud the name of the ancestor you wish to honor. State your
              relationship and your purpose. This binds the ritual to its
              recipient.
            </li>
            <li>
              <strong>Prepare a simple offering.</strong> A small bowl of water
              with sesame seeds (til), a few grains of cooked rice, and a flower
              is sufficient. The Garuda Purana states that even water offered
              with devotion reaches the Pitrus.
            </li>
            <li>
              <strong>Face south.</strong> The direction of Yama, lord of the
              departed. If you cannot determine direction, intend it — the mind
              completes what the body cannot.
            </li>
            <li>
              <strong>Offer with the right hand.</strong> Pour the water slowly
              while reciting the ancestor's name and the words "tarpayami" (I
              offer). Repeat three times.
            </li>
            <li>
              <strong>Place the food offering.</strong> Set the rice and flower
              on a clean leaf or plate. Do not taste it afterward — it is now
              given.
            </li>
            <li>
              <strong>Close with gratitude.</strong> Bow and ask that the
              ancestor be at peace. Promise to live in a way that honors their
              memory.
            </li>
          </ol>

          <div className="scripture-citation mt-8">
            <p className="text-base italic">
              "Even a handful of water, offered with a pure heart at the proper
              time, reaches the ancestors and satisfies them for a month."
            </p>
            <p className="text-sm mt-2 not-italic">
              — Garuda Purana, Preta Khanda, Chapter 11
            </p>
          </div>

          <div className="disclaimer-banner mt-6">
            <p className="text-base">
              If you carry grief that feels too heavy to hold alone, please
              consider speaking with a trusted counselor or spiritual guide.
              Ritual supports the heart — it does not replace care for it.
            </p>
          </div>
        </div>
      </section>

      {/* KARMIC SIGNIFICANCE */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
          The Karmic Significance
        </h2>

        <div className="space-y-6">
          <div className="content-card--item p-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
              Why We Honor the Ancestors
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              The Vedic understanding holds that the soul does not end with the
              body. The Pitrus reside in a subtle realm, and their well-being is
              influenced by the offerings of their living descendants. When we
              perform Tarpan and Shraddha, we are not merely remembering — we
              are actively nourishing souls who can no longer nourish
              themselves.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              This is the law of <em>Rna</em> — sacred debt. Just as we inherit
              name, body, and lineage, we inherit the obligation to sustain the
              chain of which we are a living link. To break the chain is to
              leave both the living and the dead incomplete.
            </p>
            <div className="scripture-citation">
              <p className="text-base italic">
                "One who does not perform the Shraddha for the Pitrus, being
                able to do so, incurs the sin of neglecting the sacred debt and
                falls from his station."
              </p>
              <p className="text-sm mt-2 not-italic">— Manusmriti 9.137</p>
            </div>
          </div>

          <div className="content-card--item p-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
              The Three Debts (Trirna)
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              Every human is born with three debts: to the gods (Dev Rna),
              repaid through prayer and sacrifice; to the sages (Rishi Rna),
              repaid through study and teaching; and to the ancestors (Pitru
              Rna), repaid through progeny and the rites of remembrance. Pitru
              Saadhna is the direct discharge of this third debt.
            </p>
            <div className="scripture-citation">
              <p className="text-base italic">
                "Born is the debtor; of the gods by sacrifice, of the sages by
                Vedic study, of the ancestors by offspring — free from debt goes
                the wise."
              </p>
              <p className="text-sm mt-2 not-italic">
                — Taittiriya Samhita 6.3.10.5
              </p>
            </div>
          </div>

          <div className="content-card--item p-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
              The Blessing Flows Both Ways
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              The Pitrus, satisfied by sincere offering, are said to bestow
              blessings upon the household — health, harmony, prosperity, and
              the continuity of the lineage. The rite is therefore not a one-way
              gift but a sacred exchange that binds the generations in mutual
              care.
            </p>
            <div className="scripture-citation">
              <p className="text-base italic">
                "Satisfied by the Shraddha, the ancestors bless the performer
                with long life, fame, strength, wealth, learning, and
                righteousness."
              </p>
              <p className="text-sm mt-2 not-italic">
                — Garuda Purana, Preta Khanda, Chapter 14
              </p>
            </div>
          </div>

          <div className="content-card--item p-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
              Liberation and the Unfinished Soul
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              Some souls, due to sudden death, unfulfilled desires, or
              incomplete rites, may not find peaceful passage. The offerings of
              Tarpan and Pind Daan are believed to provide the subtle body with
              what it needs to move forward — toward rebirth or, ultimately,
              liberation (Moksha). This is why the rite is performed not only
              for known ancestors but for all departed souls.
            </p>
            <div className="scripture-citation">
              <p className="text-base italic">
                "By the offering of Pindas, the departed soul gains a subtle
                body and proceeds toward its next state; without these
                offerings, it wanders restless and unfed."
              </p>
              <p className="text-sm mt-2 not-italic">
                — Garuda Purana, Preta Khanda, Chapter 2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING DISCLAIMER */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="disclaimer-banner">
          <p className="text-base md:text-lg">
            These rites are presented as a guide to understanding and practice.
            For formal ceremonies — especially Shraddha and Pind Daan —
            consulting a knowledgeable priest (Purohit) is traditional and
            recommended where possible. The heart's sincerity is the truest
            offering; the form follows what the heart can hold.
          </p>
        </div>
      </section>
    </div>
  );
}

// ---- Sub-component: expanded rite detail ----
function RiteDetail({ rite }: { rite: PitruRite }) {
  return (
    <div className="pt-6 space-y-8">
      {/* Occasion / Timing */}
      <div>
        <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
          Auspicious Timing
        </h4>
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          {rite.timing}
        </p>
      </div>

      {/* Purpose */}
      <div>
        <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
          Purpose
        </h4>
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          {rite.description}
        </p>
      </div>

      {/* Procedure */}
      <div>
        <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
          Procedure
        </h4>
        <p className="text-base md:text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
          {rite.procedure}
        </p>
      </div>

      {/* Items Required */}
      <div>
        <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
          Items Required
        </h4>
        <ul className="step-list">
          {rite.offerings.map((item) => (
            <li key={`offering-${item}`}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Scriptural Source */}
      <div>
        <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
          Scriptural Source
        </h4>
        <div className="scripture-citation">
          <p className="text-base italic">{rite.sourceVerse}</p>
          <p className="text-sm mt-2 not-italic">
            — {rite.sourceGranth}, {rite.sourceChapter}
          </p>
        </div>
      </div>

      {/* Significance */}
      <div>
        <h4 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
          Karmic Significance
        </h4>
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          {rite.description} This rite discharges a portion of the sacred debt
          (Rna) owed to the ancestors and sustains the soul in its onward
          journey. As taught in the {rite.sourceGranth}, the sincere offering
          reaches the Pitru and returns as blessing upon the household.
        </p>
      </div>
    </div>
  );
}

export { Pitru as PitruPage };
export default Pitru;
