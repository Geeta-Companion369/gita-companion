import { getBackend } from "@/lib/backend-client";
import { useQuery } from "@tanstack/react-query";
import {
  AlertTriangle,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Flame,
  Flower2,
  GraduationCap,
  HandHeart,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Types — mirror backend.d.ts (Sampradaya, DikshaVidhi) without importing
// generated internals. The backend may seed only 1 of each, so we supplement
// with frontend-defined content for the 4 required Sampradayas.
// ---------------------------------------------------------------------------

interface Sampradaya {
  id: string;
  sourceGranth: string;
  sourceChapter: string;
  lineage: string[];
  sanskritName: string;
  name: string;
  sourceVerse: string;
  founder: string;
  philosophy: string;
}

interface DikshaVidhi {
  id: string;
  sourceGranth: string;
  sourceChapter: string;
  sanskritName: string;
  prerequisites: string[];
  name: string;
  description: string;
  sourceVerse: string;
  mantra: string;
  procedure: string[];
}

// ---------------------------------------------------------------------------
// Frontend-defined supplementary content for the 4 required Sampradayas.
// The backend may only seed 1; we merge backend data with these defaults so
// the page always shows real populated content (per user instruction).
// ---------------------------------------------------------------------------

const SAMPRADAYA_DEFAULTS: Record<string, Partial<Sampradaya>> = {
  brahma: {
    id: "brahma",
    sanskritName: "ब्रह्म सम्प्रदाय",
    name: "Brahma Sampradaya",
    founder:
      "Sri Madhvacharya (1238–1317 CE), established the Dvaita (dualism) school of Vedanta in Udupi, Karnataka.",
    lineage: [
      "Sri Hari (Vishnu) — the original source",
      "Sri Brahma — the first recipient of the Vedic knowledge",
      "Sri Madhvacharya (Purnaprajna) — founder of the Dvaita school",
      "Sri Padmanabha Tirtha — direct disciple and first successor",
      "Sri Narahari Tirtha",
      "Sri Madhava Tirtha",
      "Sri Akshobya Tirtha",
      "Sri Jaya Tirtha (author of Nyaya Sudha)",
      "Sri Vyasatirtha (author of Nyayamruta)",
      "Sri Raghavendra Tirtha (Rayaru) of Mantralaya",
    ],
    philosophy:
      "Dvaita-vada (strict dualism): Sri Hari (Vishnu) is the Supreme, eternally distinct from individual souls (jivas) and inert matter (prakriti). The soul's liberation (moksha) is attained through bhakti (devotion) powered by the Lord's grace (prasada). The five fundamental differences are: jiva–Ishvara, jiva–jiva, jiva–jada, jada–Ishvara, and jada–jada.",
    sourceGranth: "Padma Purana",
    sourceChapter: "Uttara Khanda",
    sourceVerse:
      "sampradāyaḥ sa vai jñeyo brahma-rudra-sanakajaiḥ — 'The disciplic succession is to be known through Brahma, Rudra, and the four Sanakadi Kumaras.'",
  },
  shri: {
    id: "shri",
    sanskritName: "श्री सम्प्रदाय",
    name: "Shri Sampradaya",
    founder:
      "Sri Ramanujacharya (1017–1137 CE), the principal exponent of Vishishtadvaita (qualified non-dualism), who systematized Sri Vaishnava theology in his Sri Bhashya commentary on the Brahma Sutras.",
    lineage: [
      "Sri Lakshmi — the eternal consort of the Lord",
      "Sri Vishnu (Sriman Narayana) — the Supreme Lord",
      "Sri Lakshmi (again, as the first teacher of the soul's path)",
      "Sri Vishvaksena — the commander of the Lord's attendants",
      "Sri Parasara (author of Vishnu Purana)",
      "Sri Vyasa (compiler of the Vedas and Puranas)",
      "Sri Bodhayana",
      "Sri Nathamuni (compiler of the 4000 Divya Prabandham)",
      "Sri Yamunacharya (Alavandar)",
      "Sri Ramanujacharya — systematizer of Vishishtadvaita",
      "The 74 Simhasanadhipatis established by Ramanuja",
    ],
    philosophy:
      "Vishishtadvaita (qualified non-dualism): The Ultimate Reality is Sriman Narayana, who possesses the universe of sentient souls (chit) and inert matter (achit) as His inseparable body (aprithak-siddhi). Liberation (moksha) is reached through prapatti (complete self-surrender) and bhakti performed with the Lord's grace. The soul retains individuality even in liberation, eternally serving the Lord in Vaikuntha.",
    sourceGranth: "Padma Purana",
    sourceChapter: "Uttara Khanda",
    sourceVerse:
      "sampradāyaḥ sa vai jñeyo brahma-rudra-sanakajaiḥ — 'The disciplic succession is to be known through Brahma, Rudra, and the four Sanakadi Kumaras.'",
  },
  rudra: {
    id: "rudra",
    sanskritName: "रुद्र सम्प्रदाय",
    name: "Rudra Sampradaya",
    founder:
      "Sri Vishnuswami (13th century CE), the founder of Shuddhadvaita (pure non-dualism), later systematized by Sri Vallabhacharya (1479–1531 CE) into the Pushti Marg (the path of grace).",
    lineage: [
      "Sri Shiva (Rudra) — the original teacher",
      "Sri Vishnuswami — founder of the Rudra Sampradaya",
      "Sri Sridhara Swami",
      "Sri Vallabhacharya — systematizer of Shuddhadvaita and Pushti Marg",
      "Sri Vitthalanatha (Gusainji) — son and successor of Vallabha",
      "The seven sons of Vitthalanatha, who established the seven seats (havelis) of Pushti Marg",
    ],
    philosophy:
      "Shuddhadvaita (pure non-dualism): Sri Krishna is the only Reality; the world and souls are real manifestations of the Lord, not illusory. Liberation is attained through Pushti (grace) — the Lord's unconditional compassion. The path of Pushti Marg emphasizes seva (loving service) to Sri Krishna in His svarupa (true form), especially through the worship of Srinathji. There are three paths: pravaha (worldly), maryada (rule-bound), and pushti (grace-filled).",
    sourceGranth: "Padma Purana",
    sourceChapter: "Uttara Khanda",
    sourceVerse:
      "sampradāyaḥ sa vai jñeyo brahma-rudra-sanakajaiḥ — 'The disciplic succession is to be known through Brahma, Rudra, and the four Sanakadi Kumaras.'",
  },
  sanakadi: {
    id: "sanakadi",
    sanskritName: "सनकादि सम्प्रदाय",
    name: "Sanakadi Sampradaya (Kumara Sampradaya)",
    founder:
      "The four Kumaras — Sanaka, Sanandana, Sanatana, and Sanatkumara — the eternally childlike mind-born sons of Sri Brahma. The school was systematized by Sri Nimbarkacharya (12th–13th century CE), the exponent of Dvaitadvaita (duality-non-duality).",
    lineage: [
      "Sri Hari (Vishnu) — the original source",
      "The four Kumaras — Sanaka, Sanandana, Sanatana, Sanatkumara",
      "Sri Narada Muni — the divine sage who received the knowledge",
      "Sri Nimbarkacharya — systematizer of Dvaitadvaita (Bhedabheda)",
      "Sri Srinivasa (Nimbarka's disciple)",
      "Sri Purushottama",
      "Sri Harivyasa Devacharya",
      "The successive acharyas of the Nimbarka Sampradaya",
    ],
    philosophy:
      "Dvaitadvaita (Bhedabheda — simultaneous difference and non-difference): The soul, the world, and the Lord are simultaneously one and different. The Lord is the efficient and material cause of the universe. The soul is part of the Lord yet maintains individuality. Liberation is attained through bhakti (devotion) and prapatti (surrender), with the soul eternally serving Sri Radha-Krishna in the spiritual realm. The worship of the divine couple Sri Radha-Krishna is central.",
    sourceGranth: "Padma Purana",
    sourceChapter: "Uttara Khanda",
    sourceVerse:
      "sampradāyaḥ sa vai jñeyo brahma-rudra-sanakajaiḥ — 'The disciplic succession is to be known through Brahma, Rudra, and the four Sanakadi Kumaras.'",
  },
};

const SAMPRADAYA_ORDER = ["brahma", "shri", "rudra", "sanakadi"];

// ---------------------------------------------------------------------------
// Diksha Vidhi — frontend-defined complete content. The backend may seed 1;
// we merge so the page always shows the full step-by-step process with mantras.
// ---------------------------------------------------------------------------

const DIKSHA_VIDHI_DEFAULT: DikshaVidhi = {
  id: "pancha-samskara-diksha",
  sanskritName: "पञ्च-संस्कार दीक्षा",
  name: "Pancha-Samskara Diksha (Five-fold Initiation)",
  sourceGranth: "Pancharatra Agama & Sri Vaishnava Rahasyas",
  sourceChapter: "Pancha Samskara Vidhi",
  sourceVerse:
    "tāpa-puṇḍra-nāma-mantra-yāga-ātma-samarpaṇa — 'The five samskaras are: branding, marking, naming, worship, and self-surrender.'",
  mantra:
    "oṁ namo nārāyaṇāya — 'Om, salutations to Sri Narayana.' (The eight-syllable Ashtakshara Maha Mantra, the principal mantra of the Sri Vaishnava tradition.)",
  prerequisites: [
    "Sincere desire for spiritual progress and surrender to the Lord (bhakti-prāpti-icchā)",
    "Acceptance of a qualified spiritual master (sad-guru) belonging to an authorized Sampradaya",
    "Study of the foundational scriptures (Bhagavad Gita, Upanishads, Vishnu Purana) under the guru's guidance",
    "Renunciation of prohibited conduct (meat-eating, intoxication, gambling, illicit relations)",
    "Performance of the five daily duties (pañca-kāla) as far as possible, beginning with abhigamana (approach)",
    "Willingness to accept the discipline of the Sampradaya and serve the guru and Vaishnavas",
  ],
  description:
    "Diksha is the sacred process by which the guru transmits spiritual knowledge, mantra, and the Lord's grace to the disciple, severing the bonds of karma and initiating the soul's journey toward liberation. The word 'diksha' comes from the root 'di' (to give) and 'ksha' (to destroy) — the guru gives spiritual knowledge and destroys the disciple's sins. The Pancharatra Agamas prescribe the Pancha-Samskara (five-fold purification) as the standard Vaishnava initiation, performed by an authorized acharya of one of the four Sampradayas.",
  procedure: [
    {
      step: "Tapa (Branding / Heat-mark)",
      detail:
        "The acharya heats five Shankha (conch), Chakra (disc), Gada (mace), and Padma (lotus) symbols on the disciple's right and left shoulders using heated metal stamps. This marks the body as the eternal property of the Lord (Sriman Narayana) and burns away a portion of accumulated karma.",
      mantra:
        "aṅka-cakra-gadā-śaṅkha-padma-śrī-vatsa-lāñchana — 'Marked with the disc, conch, mace, lotus, and Srivatsa — the insignia of the Lord.'",
    },
    {
      step: "Pundra (Tilaka Marking)",
      detail:
        "The guru applies the Urdhva-Pundra (vertical tilaka) on twelve places of the disciple's body — forehead, throat, both arms, chest, both sides of the torso, both shoulders, and back — using white clay (gopi-chandana) with a central red or yellow line of Sri Lakshmi. This identifies the body as a temple of the Lord.",
      mantra:
        "ūrdhva-puṇḍra-dharaḥ śrīmān viṣṇu-pādāmbuja-arcakaḥ — 'Bearing the upward tilaka, the fortunate worshipper of the lotus feet of Vishnu.'",
    },
    {
      step: "Nama (Receiving the Holy Name)",
      detail:
        "The guru whispers the disciple's initiated name (ending in 'Dasa' or 'Devi' for women) into the right ear, signifying that the disciple is now the eternal servant of the Lord. The disciple is given a name such as 'Ramanuja Dasa' or 'Sri Krishna Dasa', renouncing all worldly designations of caste, family, and status.",
      mantra:
        "dāso'haṁ kṛṣṇasya — 'I am the servant of Sri Krishna.' (The disciple's eternal identity as the Lord's dasa.)",
    },
    {
      step: "Mantra (Receiving the Sacred Mantra)",
      detail:
        "The acharya whispers the Ashtakshara Maha Mantra (or the appropriate Sampradaya mantra) into the disciple's right ear, along with its meaning, the Lord's form, and the method of chanting. The mantra is to be chanted daily with devotion, never disclosed to the uninitiated, and meditated upon as the Lord's very presence.",
      mantra:
        "oṁ namo nārāyaṇāya — 'Om, salutations to Sri Narayana.' (The eight-syllable Maha Mantra, chanted with the breath and meditated upon as the Lord's svarupa.)",
    },
    {
      step: "Yaga (Daily Worship & Atma-samarpana / Self-surrender)",
      detail:
        "The guru instructs the disciple in the daily worship of the Lord (Tiruvaradhanam / puja) and the practice of Atma-samarpana — complete surrender of the self to the Lord (prapatti). The disciple vows to perform the five daily duties (pañca-kāla): abhigamana (approach), upadana (collection of materials), ijya (worship), svadhyaya (study of scriptures), and yoga (meditation). This is the culmination of diksha — the disciple's lifelong commitment to bhakti and service.",
      mantra:
        "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja — 'Abandoning all dharmas, surrender to Me alone.' (Bhagavad Gita 18.66 — the Charama Shloka, the final word on prapatti.)",
    },
  ].map((p) => `${p.step} — ${p.detail} Mantra: ${p.mantra}`),
};

// ---------------------------------------------------------------------------
// Guru — the base of everything. Detailed content per requirement.
// ---------------------------------------------------------------------------

const GURU_SECTION = {
  title: "Guru — The Foundation of Spiritual Life",
  sanskritTitle: "गुरुः सर्वस्य प्राणः",
  intro:
    "In the Vedic tradition, the Guru is not merely a teacher but the very gateway to the Divine. The word 'Guru' is composed of two syllables: 'gu' (darkness, ignorance) and 'ru' (light, dispeller) — the one who dispels the darkness of ignorance with the light of spiritual knowledge. Without a Guru, no spiritual progress is possible; the scriptures declare that the Supreme Lord cannot be reached by independent study, by intelligence, or by much learning — only by surrender to a realized soul.",
  significance: [
    {
      heading: "Guru as the Manifestation of the Lord",
      body: "The Guru is considered the visible representative of the Supreme Lord on earth. In the Sri Sampradaya, the Guru is revered as the embodiment of Sri Lakshmi's compassion, mediating between the fallen soul and the Lord. The Padma Purana states: 'gurur viṣṇuḥ' — the Guru is Vishnu Himself, appearing in a human form to guide the disciple. The Guru carries the Lord's grace (prasada) and transmits it through diksha.",
      citation: "Padma Purana, Uttara Khanda 6.23",
    },
    {
      heading: "The Threefold Function of the Guru",
      body: "The Guru performs three essential functions: (1) Jnana-dana — imparting spiritual knowledge of the scriptures and the Lord's nature; (2) Mantra-dana — transmitting the sacred mantra that links the soul to the Divine; (3) Prasada-dana — bestowing the Lord's grace that burns away karma and grants liberation. Without all three, diksha is incomplete.",
      citation: "Guru Gita (from Skanda Purana, Uttara Khanda)",
    },
    {
      heading: "Guru as the Source of All Knowledge",
      body: "The Vedic knowledge flows through the disciplic succession (guru-parampara) beginning with the Lord Himself, passing through Brahma, Narada, Vyasa, and the successive acharyas. This unbroken chain ensures the purity and potency of the teachings. The Bhagavad Gita (4.1–2) describes how this knowledge was transmitted from the Lord to the solar dynasty and then lost over time, requiring re-establishment through the Guru.",
      citation: "Bhagavad Gita 4.1–2",
    },
    {
      heading: "The Disciple's Duty to the Guru",
      body: "The disciple owes the Guru threefold devotion: (1) Service (seva) — physical, mental, and financial service according to capacity; (2) Surrender (pranipat) — approaching the Guru with complete submission, free from pride and personal agenda; (3) Inquiry (pariprashna) — asking relevant questions with a sincere desire to learn, not to challenge. The Bhagavad Gita (4.34) gives the complete formula for receiving transcendental knowledge.",
      citation: "Bhagavad Gita 4.34",
    },
  ],
};

// ---------------------------------------------------------------------------
// True Guru vs False Guru — identification criteria.
// ---------------------------------------------------------------------------

const TRUE_GURU_QUALITIES = [
  "Belongs to an authorized Sampradaya (Brahma, Shri, Rudra, or Sanakadi) — never self-appointed or claiming a new revelation outside the disciplic succession.",
  "Has received proper diksha from his own Guru and maintains an unbroken guru-shishya parampara traceable to the Lord.",
  "Is well-versed in the scriptures (Vedas, Upanishads, Bhagavad Gita, Puranas) and teaches their true meaning, not personal invention.",
  "Is himself a practitioner of what he teaches — he chants the mantra, worships the Lord, and lives by the principles he prescribes.",
  "Is free from material motives — he does not accept disciples for money, fame, or followers; his only desire is the spiritual welfare of the disciple.",
  "Is detached from sense enjoyment, free from the six enemies (lust, anger, greed, illusion, madness, envy), and established in pure devotion (shuddha-bhakti).",
  "Sees all living beings with equal vision (sama-darshi), without discrimination based on caste, wealth, gender, or social status.",
  "Is compassionate (karuna) toward the fallen souls and patiently guides them through their difficulties without harshness or exploitation.",
  "Worships the Supreme Lord (Sri Hari) as the only ultimate goal, never substituting himself or any demigod as the object of the disciple's surrender.",
  "His teachings are consistent with the acharyas of his Sampradaya and the revealed scriptures — he never contradicts the guru-parampara.",
];

const FALSE_GURU_WARNING_SIGNS = [
  "Claims to be God, an avatar, or a new revelation outside the four authorized Sampradayas — the scriptures warn that such persons are impostors.",
  "Belongs to no disciplic succession (apa-sampradaya) or has broken the parampara by rejecting his own Guru.",
  "Demands money, property, or sexual favors in exchange for 'initiation' or 'blessings' — a true Guru gives freely what he received freely.",
  "Teaches that the Supreme Lord is formless, impersonal, or attainable by one's own effort without the Lord's grace — this contradicts the Vedanta Sutras and the Bhagavad Gita.",
  "Is addicted to sense enjoyment, accumulates wealth and luxury, or lives in contradiction to the principles of renunciation and devotion he preaches.",
  "Exploits disciples emotionally, financially, or physically, threatening them with curses or 'spiritual downfall' if they question him.",
  "Claims miraculous powers (siddhis) as proof of divinity — the scriptures state that siddhis are obstacles on the path of bhakti and are also possessed by demons.",
  "Changes the teachings of his Sampradaya to suit popular opinion, modern trends, or his own convenience.",
  "Is envious of other Vaishnavas, acharyas, or the Lord's devotees — envy is the hallmark of a conditioned soul, not a liberated Guru.",
  "Cannot answer scriptural questions with references and instead demands blind faith without explanation.",
];

// ---------------------------------------------------------------------------
// Backend queries — listSampradayas, getSampradaya, getDikshaVidhi.
// The backend may only seed 1 of each; we merge with frontend defaults.
// ---------------------------------------------------------------------------

function useSampradayas() {
  return useQuery({
    queryKey: ["sampradayas"],
    queryFn: async () => {
      const backend = await getBackend();
      const list = (await backend.listSampradayas()) as Sampradaya[];
      // Merge backend data with frontend defaults so all 4 always appear.
      const byId = new Map<string, Sampradaya>();
      for (const id of SAMPRADAYA_ORDER) {
        const def = SAMPRADAYA_DEFAULTS[id];
        if (def) byId.set(id, def as Sampradaya);
      }
      for (const item of list ?? []) {
        const existing = byId.get(item.id) ?? ({} as Sampradaya);
        byId.set(item.id, { ...existing, ...item });
      }
      return SAMPRADAYA_ORDER.map((id) => byId.get(id)).filter(
        (s): s is Sampradaya => Boolean(s),
      );
    },
  });
}

function useDikshaVidhi() {
  return useQuery({
    queryKey: ["diksha-vidhi"],
    queryFn: async () => {
      const backend = await getBackend();
      const data = (await backend.getDikshaVidhi(
        "pancha-samskara",
      )) as DikshaVidhi | null;
      if (!data) return DIKSHA_VIDHI_DEFAULT;
      // Merge: backend data wins, but fall back to defaults for missing fields.
      return { ...DIKSHA_VIDHI_DEFAULT, ...data };
    },
  });
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

function GuruParampara() {
  const sampradayasQuery = useSampradayas();
  const dikshaQuery = useDikshaVidhi();

  const sampradayas = sampradayasQuery.data ?? [];
  const diksha = dikshaQuery.data ?? DIKSHA_VIDHI_DEFAULT;

  const [expandedSampradaya, setExpandedSampradaya] = useState<string | null>(
    "brahma",
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pathway-hero">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
            <GraduationCap
              className="h-10 w-10 text-primary"
              aria-hidden="true"
            />
          </div>
          <p className="sanskrit-verse mb-4" lang="sa">
            गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः ।
            <br />
            गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः ॥
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Guru Parampara
          </h1>
          <p className="transliteration-line mb-6">
            gurur-brahmā gurur-viṣṇur-gurur-devo maheśvaraḥ | guruḥ sākṣāt
            parabrahma tasmai śrī-gurave namaḥ ||
          </p>
          <p className="meaning-block mx-auto max-w-3xl">
            "The Guru is Brahma, the Guru is Vishnu, the Guru is Lord Shiva; the
            Guru is the Supreme Brahman Himself. Salutations to that revered
            Guru."
          </p>
          <p className="scripture-citation mt-4">
            — Guru Gita (Skanda Purana, Uttara Khanda)
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Guru — the base of everything */}
        <section
          data-ocid="guru-section"
          className="mb-16"
          aria-labelledby="guru-heading"
        >
          <div className="mb-8 flex items-center gap-3">
            <Flower2 className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2
              id="guru-heading"
              className="font-display text-3xl font-bold text-foreground md:text-4xl"
            >
              {GURU_SECTION.title}
            </h2>
          </div>
          <p className="sanskrit-verse mb-6 text-center" lang="sa">
            {GURU_SECTION.sanskritTitle}
          </p>
          <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
            {GURU_SECTION.intro}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {GURU_SECTION.significance.map((item, idx) => (
              <article
                key={`guru-significance-${item.heading}`}
                data-ocid={`guru-significance.item.${idx}`}
                className="content-card--item rounded-lg border border-border bg-card p-6 shadow-subtle"
              >
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {item.heading}
                </h3>
                <p className="mb-3 text-base leading-relaxed text-foreground md:text-lg">
                  {item.body}
                </p>
                <p className="scripture-citation">{item.citation}</p>
              </article>
            ))}
          </div>

          {/* Bhagavad Gita 4.34 — the central verse on Guru */}
          <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <p className="sanskrit-verse mb-4 text-center" lang="sa">
              तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया ।
              <br />
              उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिस्तत्त्वदर्शिनः ॥
            </p>
            <p className="transliteration-line mb-3 text-center">
              tad-viddhi praṇipātena paripraśnena sevayā | upadekṣyanti te
              jñānaṁ jñāninas tattva-darśinaḥ ||
            </p>
            <p className="meaning-block mx-auto max-w-3xl">
              "Just try to learn the truth by approaching a spiritual master.
              Inquire from him submissively and render service unto him. The
              self-realized soul can impart knowledge unto you because he has
              seen the truth."
            </p>
            <p className="scripture-citation mt-3 text-center">
              — Bhagavad Gita 4.34
            </p>
          </div>
        </section>

        {/* True Guru vs False Guru */}
        <section
          data-ocid="true-vs-false-guru-section"
          className="mb-16"
          aria-labelledby="true-false-heading"
        >
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2
              id="true-false-heading"
              className="font-display text-3xl font-bold text-foreground md:text-4xl"
            >
              How to Identify a True Guru vs a False One
            </h2>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
            The scriptures warn that in the age of Kali, false Gurus will
            proliferate, exploiting the sincere for material gain. The disciple
            must carefully examine a prospective Guru using the criteria below
            before accepting initiation. A mistake in choosing a Guru can derail
            spiritual progress for lifetimes.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* True Guru qualities */}
            <div
              data-ocid="true-guru-qualities"
              className="rounded-lg border border-primary/30 bg-card p-6 shadow-subtle"
            >
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck
                  className="h-7 w-7 text-primary"
                  aria-hidden="true"
                />
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Signs of a True Guru (Sad-Guru)
                </h3>
              </div>
              <ol className="step-list space-y-4">
                {TRUE_GURU_QUALITIES.map((quality, idx) => (
                  <li
                    key={`true-guru-quality-${quality}`}
                    data-ocid={`true-guru-quality.item.${idx}`}
                    className="flex gap-3"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-bold text-primary">
                      {idx + 1}
                    </span>
                    <span className="text-base leading-relaxed text-foreground md:text-lg">
                      {quality}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* False Guru warning signs */}
            <div
              data-ocid="false-guru-warnings"
              className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 shadow-subtle"
            >
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle
                  className="h-7 w-7 text-destructive"
                  aria-hidden="true"
                />
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Warning Signs of a False Guru (Ku-Guru)
                </h3>
              </div>
              <ol className="step-list space-y-4">
                {FALSE_GURU_WARNING_SIGNS.map((sign, idx) => (
                  <li
                    key={`false-guru-warning-${sign}`}
                    data-ocid={`false-guru-warning.item.${idx}`}
                    className="flex gap-3"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-destructive/15 font-mono text-sm font-bold text-destructive">
                      {idx + 1}
                    </span>
                    <span className="text-base leading-relaxed text-foreground md:text-lg">
                      {sign}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="disclaimer-banner mt-6 rounded-lg border border-border bg-muted p-5">
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              <strong className="font-semibold">Scriptural warning:</strong> The
              Padma Purana declares that one who accepts diksha from a Guru
              outside the four authorized Sampradayas (Brahma, Shri, Rudra,
              Sanakadi) attains only darkness. The disciple must verify the
              Guru's parampara, conduct, and teachings before surrender.
            </p>
            <p className="scripture-citation mt-2">
              — Padma Purana, Uttara Khanda; Sri Chaitanya-charitamrita,
              Adi-lila 1.47
            </p>
          </div>
        </section>

        {/* The Four Sampradayas */}
        <section
          data-ocid="sampradayas-section"
          className="mb-16"
          aria-labelledby="sampradayas-heading"
        >
          <div className="mb-8 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2
              id="sampradayas-heading"
              className="font-display text-3xl font-bold text-foreground md:text-4xl"
            >
              The Four Authorized Sampradayas
            </h2>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
            The Padma Purana establishes that transcendental knowledge descends
            through four authorized disciplic successions, each originating from
            the Lord through His direct associates. A bona-fide Guru must belong
            to one of these four Sampradayas. Each has its own founder, unbroken
            lineage, and core philosophical teaching.
          </p>

          {sampradayasQuery.isLoading && (
            <div
              data-ocid="sampradayas.loading_state"
              className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground"
            >
              Loading the four Sampradayas...
            </div>
          )}

          {sampradayasQuery.error && (
            <div
              data-ocid="sampradayas.error_state"
              className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center"
            >
              <p className="mb-2 text-lg font-semibold text-foreground">
                Unable to load Sampradayas from the backend.
              </p>
              <p className="text-base text-muted-foreground">
                Showing the complete scriptural content below.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {sampradayas.map((sampradaya, idx) => {
              const isOpen = expandedSampradaya === sampradaya.id;
              return (
                <article
                  key={sampradaya.id}
                  data-ocid={`sampradaya.item.${idx}`}
                  className="content-card--item rounded-lg border border-border bg-card shadow-subtle"
                >
                  <button
                    type="button"
                    data-ocid={`sampradaya.toggle.${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`sampradaya-detail-${sampradaya.id}`}
                    onClick={() =>
                      setExpandedSampradaya(isOpen ? null : sampradaya.id)
                    }
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="sanskrit-verse mb-1" lang="sa">
                        {sampradaya.sanskritName}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {sampradaya.name}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronDown
                        className="h-6 w-6 flex-shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronRight
                        className="h-6 w-6 flex-shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      id={`sampradaya-detail-${sampradaya.id}`}
                      className="border-t border-border p-6"
                    >
                      {/* Founder */}
                      <div className="mb-6">
                        <h4 className="mb-2 flex items-center gap-2 font-display text-xl font-semibold text-primary">
                          <Sparkles className="h-5 w-5" aria-hidden="true" />
                          Founder
                        </h4>
                        <p className="text-base leading-relaxed text-foreground md:text-lg">
                          {sampradaya.founder}
                        </p>
                      </div>

                      {/* Lineage */}
                      <div className="mb-6">
                        <h4 className="mb-3 flex items-center gap-2 font-display text-xl font-semibold text-primary">
                          <ScrollText className="h-5 w-5" aria-hidden="true" />
                          Disciplic Lineage (Guru-Parampara)
                        </h4>
                        <ol className="step-list space-y-2">
                          {sampradaya.lineage.map((member, lIdx) => (
                            <li
                              key={`sampradaya-${sampradaya.id}-lineage-${member}`}
                              data-ocid={`sampradaya.${sampradaya.id}.lineage.item.${lIdx}`}
                              className="flex gap-3"
                            >
                              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-bold text-primary">
                                {lIdx + 1}
                              </span>
                              <span className="text-base leading-relaxed text-foreground md:text-lg">
                                {member}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Core teaching */}
                      <div className="mb-6">
                        <h4 className="mb-2 flex items-center gap-2 font-display text-xl font-semibold text-primary">
                          <BookOpen className="h-5 w-5" aria-hidden="true" />
                          Core Teaching
                        </h4>
                        <p className="text-base leading-relaxed text-foreground md:text-lg">
                          {sampradaya.philosophy}
                        </p>
                      </div>

                      {/* Scriptural basis */}
                      <div className="rounded-lg border border-border bg-muted/50 p-4">
                        <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                          Scriptural Basis
                        </h4>
                        <p className="text-base leading-relaxed text-foreground md:text-lg">
                          {sampradaya.sourceGranth} — {sampradaya.sourceChapter}
                        </p>
                        <p className="scripture-citation mt-2">
                          {sampradaya.sourceVerse}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Diksha Vidhi — meaning and step-by-step process */}
        <section
          data-ocid="diksha-vidhi-section"
          className="mb-16"
          aria-labelledby="diksha-heading"
        >
          <div className="mb-8 flex items-center gap-3">
            <HandHeart className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2
              id="diksha-heading"
              className="font-display text-3xl font-bold text-foreground md:text-4xl"
            >
              Diksha Vidhi — The Process of Initiation
            </h2>
          </div>

          {/* Meaning of Diksha */}
          <div className="mb-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <p className="sanskrit-verse mb-4 text-center" lang="sa">
              दीक्षा दीयते यस्मात् क्षीयते चाशु पातकम् ।
              <br />
              तस्माद् दीक्षेति सा प्रोक्ता सर्वस्यागमसाधनम् ॥
            </p>
            <p className="transliteration-line mb-3 text-center">
              dīkṣā dīyate yasmāt kṣīyate cāśu pātakam | tasmād dīkṣeti sā
              proktā sarvasyāgama-sādhanam ||
            </p>
            <p className="meaning-block mx-auto max-w-3xl">
              "Because diksha bestows spiritual knowledge (di) and destroys all
              sins (ksha), it is called 'Diksha' — the means of all Vedic
              attainment."
            </p>
            <p className="scripture-citation mt-3 text-center">
              — Vishnu Yamala, cited in Hari-bhakti-vilasa 1.32
            </p>
          </div>

          <p className="mb-6 text-lg leading-relaxed text-foreground md:text-xl">
            <span className="font-semibold text-primary">
              {diksha.sanskritName}
            </span>{" "}
            — {diksha.name}
          </p>
          <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
            {diksha.description}
          </p>

          {/* Source verse */}
          <div className="mb-8 rounded-lg border border-border bg-muted/50 p-5">
            <p className="scripture-citation">
              <span className="font-semibold">Source:</span>{" "}
              {diksha.sourceGranth} — {diksha.sourceChapter}
            </p>
            <p className="sanskrit-verse mt-3" lang="sa">
              {diksha.sourceVerse}
            </p>
          </div>

          {/* Prerequisites */}
          <div className="mb-10">
            <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-foreground">
              <Flame className="h-6 w-6 text-primary" aria-hidden="true" />
              Prerequisites (Adhikara)
            </h3>
            <p className="mb-4 text-base leading-relaxed text-foreground md:text-lg">
              Before receiving diksha, the aspiring disciple must fulfill the
              following qualifications:
            </p>
            <ol className="step-list space-y-3">
              {diksha.prerequisites.map((prereq, idx) => (
                <li
                  key={`diksha-prerequisite-${prereq}`}
                  data-ocid={`diksha-prerequisite.item.${idx}`}
                  className="flex gap-3"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-bold text-primary">
                    {idx + 1}
                  </span>
                  <span className="text-base leading-relaxed text-foreground md:text-lg">
                    {prereq}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Principal Mantra */}
          <div className="mb-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="mb-3 font-display text-2xl font-semibold text-primary">
              The Principal Mantra
            </h3>
            <p className="sanskrit-verse mb-3 text-center" lang="sa">
              {diksha.mantra.split(" — ")[0]}
            </p>
            <p className="meaning-block mx-auto max-w-3xl">
              {diksha.mantra.split(" — ")[1] ?? diksha.mantra}
            </p>
          </div>

          {/* Step-by-step procedure */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-foreground">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
              The Five-fold Initiation Process (Pancha-Samskara)
            </h3>
            <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">
              The diksha is performed in five sequential samskaras, each with
              its own mantra and significance. The acharya performs them in
              order, transforming the disciple into a fit vessel for the Lord's
              grace.
            </p>
            <ol className="step-list space-y-6">
              {diksha.procedure.map((step, idx) => {
                const [stepName, ...rest] = step.split(" — ");
                const remainder = rest.join(" — ");
                const [detail, mantraPart] = remainder.split(" Mantra: ");
                return (
                  <li
                    key={`diksha-step-${stepName}`}
                    data-ocid={`diksha-step.item.${idx}`}
                    className="rounded-lg border border-border bg-card p-5 shadow-subtle"
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-mono text-base font-bold text-primary-foreground">
                        {idx + 1}
                      </span>
                      <h4 className="pt-1.5 font-display text-xl font-bold text-foreground">
                        {stepName}
                      </h4>
                    </div>
                    {detail && (
                      <p className="mb-3 pl-13 text-base leading-relaxed text-foreground md:text-lg">
                        {detail}
                      </p>
                    )}
                    {mantraPart && (
                      <div className="ml-13 rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                          Mantra
                        </p>
                        <p className="sanskrit-verse" lang="sa">
                          {mantraPart.split(" — ")[0]}
                        </p>
                        {mantraPart.includes(" — ") && (
                          <p className="meaning-block mt-2">
                            {mantraPart.split(" — ").slice(1).join(" — ")}
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Closing scripture */}
        <section
          data-ocid="closing-section"
          className="rounded-lg border border-border bg-card p-8 text-center shadow-subtle"
        >
          <p className="sanskrit-verse mb-4" lang="sa">
            अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया ।
            <br />
            चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः ॥
          </p>
          <p className="transliteration-line mb-3">
            ajñāna-timirāndhasya jñānāñjana-śalākayā | cakṣur-unmīlitaṁ yena
            tasmai śrī-gurave namaḥ ||
          </p>
          <p className="meaning-block mx-auto max-w-3xl">
            "I offer my respectful obeisances to my spiritual master, who with
            the torchlight of knowledge has opened my eyes which were blinded by
            the darkness of ignorance."
          </p>
          <p className="scripture-citation mt-3">
            — Sri Gurvashtakam, Verse 1 (by Sri Vyasatirtha)
          </p>
        </section>
      </div>
    </div>
  );
}

export { GuruParampara as GuruParamparaPage };
export default GuruParampara;
