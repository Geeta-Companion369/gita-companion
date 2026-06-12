/**
 * NewsletterEmailTemplate — Sacred HTML email design for festival newsletters.
 *
 * Can be used:
 *  1. As a React component for live preview in the admin UI.
 *  2. Via renderToStaticMarkup() to generate the HTML string sent by the backend.
 *
 * Design: gold header with OM, Fraunces serif, Devanagari festival name,
 * Vedic story, ritual steps, mantra, Gita quote, and sacred footer.
 */

export interface FestivalEmailData {
  festivalName: string;
  festivalNameDevanagari?: string;
  festivalDate: string;
  meaning: string;
  vedicStory: string;
  ritualSteps: string[];
  mantraSanskrit: string;
  mantraTransliteration: string;
  mantraMeaning: string;
  pujaVidhi: {
    timing: string;
    ingredients: string[];
    method: string;
  };
  gitaQuote: {
    verse: string;
    chapter: string;
    verseNumber: string;
    meaning: string;
  };
  unsubscribeUrl?: string;
}

// ─── Inline styles for email-safe CSS ─────────────────────────────────────────
const EMAIL_STYLES = {
  wrapper: {
    margin: "0 auto",
    maxWidth: "600px",
    fontFamily: "Georgia, 'Times New Roman', serif",
    background: "#fdf6e8",
  } as React.CSSProperties,

  header: {
    background:
      "linear-gradient(135deg, #8b5e1a 0%, #6b3f0e 50%, #8b5e1a 100%)",
    textAlign: "center" as const,
    padding: "36px 24px 28px",
    borderBottom: "4px solid #d4af37",
  },

  omSymbol: {
    fontSize: "52px",
    color: "#ffd700",
    display: "block",
    marginBottom: "12px",
    textShadow: "0 0 20px rgba(255,215,0,0.6)",
  },

  headerTitle: {
    fontSize: "13px",
    color: "#fde68a",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    marginBottom: "10px",
    fontFamily: "Georgia, serif",
  },

  festivalNameDevanagari: {
    fontSize: "36px",
    color: "#ffd700",
    fontWeight: "bold",
    display: "block",
    marginBottom: "4px",
    textShadow: "0 2px 8px rgba(0,0,0,0.4)",
  },

  festivalNameEnglish: {
    fontSize: "26px",
    color: "#fff8e7",
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px",
    fontFamily: "Georgia, serif",
    fontStyle: "italic",
  },

  festivalDate: {
    fontSize: "12px",
    color: "#fde68a",
    letterSpacing: "0.15em",
  },

  dividerGold: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)",
    margin: "20px 0",
    border: "none",
  },

  body: {
    padding: "32px 28px",
    background: "#fdf6e8",
  },

  sectionTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#6b3f0e",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "12px",
    borderLeft: "3px solid #d4af37",
    paddingLeft: "10px",
  },

  bodyText: {
    fontSize: "15px",
    lineHeight: "1.85",
    color: "#3d2200",
    marginBottom: "0",
  },

  ritualStep: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
    gap: "10px",
  },

  ritualNumber: {
    minWidth: "28px",
    height: "28px",
    background: "#8b5e1a",
    color: "#ffd700",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    flexShrink: 0,
  },

  mantraBox: {
    background: "linear-gradient(135deg, #fff8e7, #fef3c7)",
    border: "2px solid #d4af37",
    borderRadius: "8px",
    padding: "20px 24px",
    textAlign: "center" as const,
    margin: "0",
  },

  mantraSanskrit: {
    fontSize: "22px",
    color: "#6b3f0e",
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px",
    lineHeight: "1.5",
    textShadow: "0 1px 2px rgba(107,63,14,0.15)",
  },

  mantraTranslit: {
    fontSize: "14px",
    color: "#8b5e1a",
    fontStyle: "italic",
    display: "block",
    marginBottom: "8px",
    letterSpacing: "0.04em",
  },

  mantraMeaning: {
    fontSize: "13px",
    color: "#5c3a1a",
    fontStyle: "italic",
  },

  pujaBox: {
    background: "#fff8e7",
    border: "1.5px solid rgba(212,175,55,0.50)",
    borderRadius: "6px",
    padding: "16px 20px",
    margin: "0",
  },

  pujaField: {
    fontSize: "13px",
    color: "#5c3a1a",
    marginBottom: "8px",
    lineHeight: "1.7",
  },

  pujaLabel: {
    fontWeight: "bold",
    color: "#6b3f0e",
  },

  gitaBox: {
    background: "linear-gradient(135deg, #8b5e1a, #6b3f0e)",
    borderRadius: "8px",
    padding: "20px 24px",
    textAlign: "center" as const,
    margin: "0",
  },

  gitaVerse: {
    fontSize: "17px",
    color: "#ffd700",
    fontStyle: "italic",
    display: "block",
    marginBottom: "10px",
    lineHeight: "1.7",
    fontWeight: "bold",
  },

  gitaRef: {
    fontSize: "12px",
    color: "#fde68a",
    letterSpacing: "0.12em",
  },

  gitaMeaning: {
    fontSize: "13px",
    color: "#fff8e7",
    fontStyle: "italic",
    marginTop: "8px",
    display: "block",
    lineHeight: "1.6",
  },

  footer: {
    background: "#6b3f0e",
    padding: "24px 28px",
    textAlign: "center" as const,
    borderTop: "3px solid #d4af37",
  },

  footerLogo: {
    fontSize: "24px",
    color: "#ffd700",
    display: "block",
    marginBottom: "8px",
  },

  footerTitle: {
    fontSize: "14px",
    color: "#fde68a",
    fontWeight: "bold",
    letterSpacing: "0.12em",
    display: "block",
    marginBottom: "6px",
  },

  footerTagline: {
    fontSize: "12px",
    color: "rgba(253,230,138,0.75)",
    fontStyle: "italic",
    display: "block",
    marginBottom: "12px",
  },

  footerLinks: {
    fontSize: "11px",
    color: "rgba(253,230,138,0.60)",
  },

  footerLink: {
    color: "#fde68a",
    textDecoration: "underline",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function NewsletterEmailTemplate({ data }: { data: FestivalEmailData }) {
  return (
    <div style={EMAIL_STYLES.wrapper}>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={EMAIL_STYLES.header}>
        <span style={EMAIL_STYLES.omSymbol}>ॐ</span>
        <p style={EMAIL_STYLES.headerTitle}>Sacred Festival Newsletter</p>
        {data.festivalNameDevanagari && (
          <span style={EMAIL_STYLES.festivalNameDevanagari}>
            {data.festivalNameDevanagari}
          </span>
        )}
        <span style={EMAIL_STYLES.festivalNameEnglish}>
          {data.festivalName}
        </span>
        <p style={EMAIL_STYLES.festivalDate}>
          {data.festivalDate} ✦ Vedic Stories, Rituals &amp; Mantras
        </p>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div style={EMAIL_STYLES.body}>
        {/* Meaning */}
        <p
          style={{
            ...EMAIL_STYLES.bodyText,
            fontStyle: "italic",
            color: "#8b5e1a",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          ✦ {data.meaning} ✦
        </p>

        <hr style={EMAIL_STYLES.dividerGold} />

        {/* Vedic Story */}
        <p style={EMAIL_STYLES.sectionTitle}>The Vedic Story</p>
        <p style={{ ...EMAIL_STYLES.bodyText, marginBottom: "20px" }}>
          {data.vedicStory}
        </p>

        <hr style={EMAIL_STYLES.dividerGold} />

        {/* Sacred Rituals */}
        <p style={EMAIL_STYLES.sectionTitle}>Sacred Rituals to Perform</p>
        <div style={{ marginBottom: "20px" }}>
          {data.ritualSteps.map((step, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: stable ordered list
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
                gap: "12px",
              }}
            >
              <span
                style={{
                  ...EMAIL_STYLES.ritualNumber,
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                {i + 1}
              </span>
              <p
                style={{
                  ...EMAIL_STYLES.bodyText,
                  fontSize: "14px",
                  margin: "2px 0 0",
                }}
              >
                {step}
              </p>
            </div>
          ))}
        </div>

        <hr style={EMAIL_STYLES.dividerGold} />

        {/* Mantra */}
        <p style={EMAIL_STYLES.sectionTitle}>Sacred Mantra</p>
        <div style={{ ...EMAIL_STYLES.mantraBox, marginBottom: "20px" }}>
          <span style={EMAIL_STYLES.mantraSanskrit}>{data.mantraSanskrit}</span>
          <span style={EMAIL_STYLES.mantraTranslit}>
            {data.mantraTransliteration}
          </span>
          <span style={EMAIL_STYLES.mantraMeaning}>
            Meaning: {data.mantraMeaning}
          </span>
        </div>

        <hr style={EMAIL_STYLES.dividerGold} />

        {/* Puja Vidhi */}
        <p style={EMAIL_STYLES.sectionTitle}>Puja Vidhi</p>
        <div style={{ ...EMAIL_STYLES.pujaBox, marginBottom: "20px" }}>
          <p style={EMAIL_STYLES.pujaField}>
            <span style={EMAIL_STYLES.pujaLabel}>Best Time: </span>
            {data.pujaVidhi.timing}
          </p>
          <p style={EMAIL_STYLES.pujaField}>
            <span style={EMAIL_STYLES.pujaLabel}>Sacred Items: </span>
            {data.pujaVidhi.ingredients.join(", ")}
          </p>
          <p style={{ ...EMAIL_STYLES.pujaField, marginBottom: 0 }}>
            <span style={EMAIL_STYLES.pujaLabel}>Method: </span>
            {data.pujaVidhi.method}
          </p>
        </div>

        <hr style={EMAIL_STYLES.dividerGold} />

        {/* Gita Quote */}
        <p style={EMAIL_STYLES.sectionTitle}>Krishna's Words — Bhagavad Gita</p>
        <div style={{ ...EMAIL_STYLES.gitaBox, marginBottom: "28px" }}>
          <span style={EMAIL_STYLES.gitaVerse}>"{data.gitaQuote.verse}"</span>
          <span style={EMAIL_STYLES.gitaRef}>
            Bhagavad Gita · Chapter {data.gitaQuote.chapter} · Verse{" "}
            {data.gitaQuote.verseNumber}
          </span>
          <span style={EMAIL_STYLES.gitaMeaning}>{data.gitaQuote.meaning}</span>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <div style={EMAIL_STYLES.footer}>
        <span style={EMAIL_STYLES.footerLogo}>🪷</span>
        <span style={EMAIL_STYLES.footerTitle}>Gita Companion</span>
        <span style={EMAIL_STYLES.footerTagline}>
          This sacred newsletter is sent with love and dharma
        </span>
        <p style={EMAIL_STYLES.footerLinks}>
          © {new Date().getFullYear()} Gita Companion ·{" "}
          <a href="https://caffeine.ai" style={EMAIL_STYLES.footerLink}>
            Built with Caffeine
          </a>
          {data.unsubscribeUrl && (
            <>
              {" "}
              ·{" "}
              <a href={data.unsubscribeUrl} style={EMAIL_STYLES.footerLink}>
                Unsubscribe
              </a>
            </>
          )}
        </p>
        <p
          style={{
            ...EMAIL_STYLES.footerLinks,
            marginTop: "8px",
            fontSize: "10px",
            color: "rgba(253,230,138,0.45)",
            fontStyle: "italic",
          }}
        >
          ✦ Hare Krishna · Hare Rama · Om Shanti ✦
        </p>
      </div>
    </div>
  );
}

// ─── Helper: build email data from Festival backend type ─────────────────────
export function buildFestivalEmailData(
  festivalName: string,
  festivalDate: string,
  meaning: string,
  mantraName: string,
  recommendedVerse: string,
): FestivalEmailData {
  // Rich Vedic data mapped per festival
  const RICH: Record<string, Partial<FestivalEmailData>> = {
    Diwali: {
      festivalNameDevanagari: "दीपावली",
      vedicStory:
        "Diwali celebrates the triumphant return of Lord Rama to Ayodhya after 14 years of exile and the defeat of the demon king Ravana. The citizens lit oil lamps across the entire kingdom to welcome their dharmic sovereign. This day also marks Goddess Lakshmi's emergence from the Kshira Sagara during Samudra Manthan. The Skanda Purana declares: whoever keeps their home brilliantly lit on this night, Lakshmi Herself arrives as a guest. Simultaneously, Lord Mahavira attained Moksha on this day, and Guru Har Gobind Singh was released from Gwalior Fort, making Diwali a pan-dharmic celebration of divine light over darkness.",
      ritualSteps: [
        "Rise before sunrise, take a Ganga-snan (sacred bath) with sesame and turmeric.",
        "Clean and decorate your entire home with rangoli using natural colors.",
        "Install a copper Lakshmi-Ganesha idol on red cloth facing east.",
        "Light 108 pure ghee diyas starting at dusk, beginning at the main entrance.",
        "Offer Panchamrit (milk, curd, honey, ghee, sugar) on lotus flower petals.",
        "Chant Lakshmi Ashtottara (108 sacred names of Lakshmi) with sincerity.",
        "Distribute kheer, mishri, and lotus seeds as prasad to family and neighbors.",
      ],
      mantraSanskrit: "ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः",
      mantraTransliteration: "Om Shreem Hreem Kleem Mahalakshmyai Namah",
      mantraMeaning:
        "Salutations to Mahalakshmi — the cosmic force of abundance, grace, and divine prosperity.",
      pujaVidhi: {
        timing:
          "Pradosh Kaal (dusk to 2 hours after sunset) is most auspicious for Lakshmi Puja",
        ingredients: [
          "Lotus flowers",
          "Kheer",
          "Ghee diyas",
          "Red cloth",
          "Coins",
          "Panchamrit",
          "Kumkum",
          "Rice",
          "Betel leaves",
        ],
        method:
          "Face east, invoke Ganesha first, then Lakshmi. Offer flowers from right to left. Perform aarti with 5-wick camphor diya in clockwise circles.",
      },
      gitaQuote: {
        verse:
          "Sarvasya cāhaṁ hṛdi sanniviṣṭo — I am seated in the hearts of all beings.",
        chapter: "15",
        verseNumber: "15",
        meaning:
          "On Diwali, the light you ignite outside reflects the eternal divine light that Krishna says already dwells within every heart.",
      },
    },
    Holi: {
      festivalNameDevanagari: "होली",
      vedicStory:
        "The Bhagavata Purana narrates Prahlada — born to the demon king Hiranyakashipu — who refused to renounce his devotion to Vishnu. When Holika (fire-immune by boon) attempted to burn Prahlada in her lap, Vishnu's grace reversed the boon: Holika burned, Prahlada emerged radiant and unscathed. This is Holika Dahan — the burning of ego and adharma. The next morning (Phalguna Purnima), Vrindavan celebrates Krishna's own Holi — where He drenched Radha and the Gopis in gulal. The Padma Purana declares that playing Holi with pure joy and devotion purifies the karma of seven births.",
      ritualSteps: [
        "On Purnima evening, light the Holika bonfire after sunset.",
        "Circumambulate the fire 7 times carrying raw coconut and wheat sheaves.",
        "Offer water arghya (from copper vessel) to the full moon.",
        "Next morning, apply fresh abir (natural color) first on elders' feet — receive their blessings.",
        "Sing Phagua folk songs glorifying Radha-Krishna's divine play.",
        "Offer Panchamrit and fresh fruits to your home Krishna deity.",
        "Prepare Thandai with milk, cardamom, almonds, and rose petals for prasad.",
      ],
      mantraSanskrit: "ॐ नमो भगवते वासुदेवाय",
      mantraTransliteration: "Om Namo Bhagavate Vasudevaya",
      mantraMeaning:
        "I bow to Lord Vasudeva — the All-Pervading Supreme Being who is Krishna.",
      pujaVidhi: {
        timing:
          "Holika Dahan at Pradosh; Rang Panchami puja from sunrise to noon",
        ingredients: [
          "Natural gulal (abir)",
          "Raw coconut",
          "Wheat",
          "Thandai ingredients",
          "Rose petals",
          "Ghee lamp",
        ],
        method:
          "Invoke Agni Deva before lighting Holika. After the fire subsides, collect ash (vibhuti) as a sacred blessing. Apply it on forehead the next morning before playing Holi.",
      },
      gitaQuote: {
        verse:
          "Janma karma ca me divyam — My birth and actions are divine. One who knows this truly is not reborn.",
        chapter: "4",
        verseNumber: "9",
        meaning:
          "Holi reminds us that Krishna's every act — even playful color-throwing — is a divine Lila, not ordinary action. To witness it with this understanding is liberation itself.",
      },
    },
  };

  const rich = RICH[festivalName] ?? {};

  return {
    festivalName,
    festivalDate,
    meaning,
    vedicStory:
      rich.vedicStory ??
      `${festivalName} is a sacred festival of Sanatan Dharma, celebrated with devotion, prayer, and the remembrance of the divine. ${meaning} On this auspicious day, devotees across India and the world offer prayers, perform rituals, and seek divine blessings. The festival carries deep spiritual significance rooted in the Vedas and Puranas, connecting the seeker to the eternal rhythms of dharma.`,
    ritualSteps: rich.ritualSteps ?? [
      "Begin the day with a sacred bath and prayer.",
      "Light a ghee diya and offer flowers at your home temple.",
      `Chant the sacred mantra: ${mantraName} 108 times.`,
      `Read the recommended Gita verse: ${recommendedVerse}`,
      "Offer fruits and sweets as prasad to family.",
      "Perform an evening aarti with camphor.",
    ],
    mantraSanskrit: rich.mantraSanskrit ?? `ॐ ${mantraName}`,
    mantraTransliteration: rich.mantraTransliteration ?? `Om ${mantraName}`,
    mantraMeaning:
      rich.mantraMeaning ??
      `Sacred invocation for ${festivalName} — calling upon divine grace.`,
    pujaVidhi: rich.pujaVidhi ?? {
      timing: "Sunrise to noon is most auspicious",
      ingredients: [
        "Flowers",
        "Ghee lamp",
        "Incense",
        "Fruits",
        "Sacred water",
      ],
      method:
        "Face east, invoke Ganesha first, then perform puja with focused devotion.",
    },
    gitaQuote: rich.gitaQuote ?? {
      verse: recommendedVerse,
      chapter: "3",
      verseNumber: "19",
      meaning: `On ${festivalName}, perform all actions as sacred offerings — for Krishna's sake alone.`,
    },
    festivalNameDevanagari: rich.festivalNameDevanagari,
  };
}
