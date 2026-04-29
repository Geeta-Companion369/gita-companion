import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Varna Dharma Data ────────────────────────────────────────────────────────

interface VarnaDuty {
  number: number;
  title: string;
  description: string;
  source: string;
}

interface VarnaInfo {
  id: string;
  name: string;
  nameSanskrit: string;
  icon: string;
  color: string;
  nature: string;
  gitaVerse: string;
  duties: VarnaDuty[];
  dailySchedule: { time: string; activity: string }[];
  importance: string;
}

const VARNAS: VarnaInfo[] = [
  {
    id: "brahmin",
    name: "Brahmin",
    nameSanskrit: "ब्राह्मण",
    icon: "📿",
    color: "from-amber-900/30 to-yellow-900/20",
    nature: "Tamas purified to pure Sattva — the custodians of Vedic knowledge",
    gitaVerse:
      "Gita 18.42: Shama (mental calm), Dama (self-control), Tapas (austerity), Shaucha (purity), Kshama (forgiveness), Arjava (honesty), Jnana (knowledge), Vijnana (wisdom), Astikya (faith) — these are the natural duties of a Brahmin",
    duties: [
      {
        number: 1,
        title: "Brahma Muhurta Rising",
        description:
          "Rise before sunrise (at least 96 minutes before), bathe, perform Sandhyavandana. The Brahmin's day begins with the universe, not with personal comfort. This cannot be skipped.",
        source: "Apastamba Dharmasutra, Manusmriti 4.92",
      },
      {
        number: 2,
        title: "Sandhyavandana (Three Times)",
        description:
          "Perform Sandhyavandana at three junctions: Brahma Muhurta (dawn), Madhyanha (noon), and Sayam (sunset). The Gayatri Mantra recitation within Sandhyavandana is the supreme daily duty.",
        source: "Manusmriti 2.101, Yajnavalkya Smriti 1.25",
      },
      {
        number: 3,
        title: "Adhyayana — Vedic Study",
        description:
          "Daily minimum of one hour of Veda recitation and study. A Brahmin who does not recite Vedas daily loses his spiritual qualification (Brahminhood) according to the Dharmasutras.",
        source: "Apastamba Dharmasutra 1.4.1, Manusmriti 4.147",
      },
      {
        number: 4,
        title: "Adhyapana — Teaching",
        description:
          "Teaching others is equally sacred as personal study. A Brahmin who has knowledge and does not teach is not fulfilling dharma. The teacher's duty is the transmission of knowledge.",
        source: "Manusmriti 1.103, Parasara Smriti",
      },
      {
        number: 5,
        title: "Agnihotra — Sacred Fire",
        description:
          "A Brahmin householder must maintain the sacred Agni (fire). Daily Agnihotra at sunrise and sunset is prescribed. In modern contexts, a daily deepam with Vedic mantra is the minimum.",
        source: "Taittiriya Samhita 2.5.1, Apastamba Shrauta Sutra",
      },
      {
        number: 6,
        title: "Pancha Mahayajnas",
        description:
          "The five great daily sacrifices: Brahma Yajna (recite Vedas), Deva Yajna (fire offering), Pitru Yajna (water libations to ancestors), Manushya Yajna (hospitality/Atithi Devo Bhava), Bhuta Yajna (feeding all creatures including animals).",
        source: "Taittiriya Aranyaka 2.10, Manusmriti 3.67-71",
      },
      {
        number: 7,
        title: "Dana — Sacred Charity",
        description:
          "Give a minimum of one-tenth of income as Dana. Brahmin Dana must be to the genuinely deserving — scholars, the needy, and sacred causes. Giving for social status is not Dana.",
        source: "Manusmriti 4.226, Parasara Smriti 1.62",
      },
      {
        number: 8,
        title: "Yajna — Fire Ritual",
        description:
          "Perform or attend Yajnas regularly. At minimum: Agnihotra daily, Darsha-Purnimasa monthly. Support larger community Yajnas financially or through priestly service.",
        source: "Shatapatha Brahmana, Apastamba Shrauta Sutra",
      },
      {
        number: 9,
        title: "Tarpana — Ancestral Rites",
        description:
          "Daily water offerings (Tarpana) to gods, sages, and ancestors. This maintains the sacred debt to Pitrus (ancestors). On auspicious days, perform Shradha with appropriate Brahmins.",
        source: "Manusmriti 3.74, Apastamba Dharmasutra 2.7.16",
      },
      {
        number: 10,
        title: "Ahimsa and Satya",
        description:
          "Non-violence and absolute truth are the foundation. A Brahmin's word must be as reliable as the Vedas. Untruth spoken by a Brahmin causes immediate spiritual degradation according to all Smritis.",
        source: "Manusmriti 4.138, Yajnavalkya Smriti 1.122",
      },
    ],
    dailySchedule: [
      {
        time: "3:30 AM",
        activity: "Rise — Brahma Muhurta. Quick bath. Sandhyavandana begins",
      },
      {
        time: "4:30 AM",
        activity: "Sandhyavandana complete. Veda recitation (minimum 1 hour)",
      },
      { time: "5:30 AM", activity: "Agnihotra (sunrise fire ritual)" },
      { time: "6:00 AM", activity: "Study, teaching, or contemplation" },
      {
        time: "12:00 PM",
        activity: "Madhyanha Sandhyavandana. Pancha Mahayajnas. Bhojana (meal)",
      },
      { time: "3:00 PM", activity: "Teaching, counseling, community service" },
      {
        time: "6:00 PM",
        activity: "Sayam Sandhyavandana (sunset prayers). Agnihotra",
      },
      {
        time: "7:00 PM",
        activity: "Evening Veda recitation or spiritual discourse",
      },
      { time: "9:00 PM", activity: "Light meal, contemplation" },
      { time: "10:00 PM", activity: "Sleep (bed before 10 PM is prescribed)" },
    ],
    importance:
      "The Brahmin is the spiritual backbone of society — the keeper of cosmic order (Rita) through Vedic knowledge. Without Brahmins performing their dharma, the Vedic tradition itself is at risk.",
  },
  {
    id: "kshatriya",
    name: "Kshatriya",
    nameSanskrit: "क्षत्रिय",
    icon: "⚔️",
    color: "from-red-900/30 to-orange-900/20",
    nature:
      "Rajas channeled through Dharma — the protectors and upholders of cosmic order",
    gitaVerse:
      "Gita 18.43: Shaurya (heroism), Tejas (power), Dhriti (fortitude), Daksha (skill), never fleeing battle, Dana (generosity), Ishvara-bhava (lordliness) — these are the natural duties of a Kshatriya",
    duties: [
      {
        number: 1,
        title: "Sandhyavandana",
        description:
          "Morning and evening Sandhyavandana — minimum Gayatri Mantra 108 times. The Kshatriya warrior begins every day with divine alignment, for only a dharma-aligned warrior serves justice.",
        source: "Manusmriti 2.101, Bhagavad Gita 3.35",
      },
      {
        number: 2,
        title: "Shastra Abhyasa — Physical Training",
        description:
          "Daily weapons training and physical discipline. The Kshatriya's body is an instrument of dharma. Neglecting physical training is equivalent to a Brahmin neglecting Vedic study.",
        source: "Mahabharata Shanti Parva, Arthashastra 2.33",
      },
      {
        number: 3,
        title: "Praja Palana — People Protection",
        description:
          "Every daily decision must protect the people under care. A Kshatriya's primary duty is Praja Palana — the welfare of subjects. Public service is not optional: it is the core dharma.",
        source: "Manusmriti 7.1-37, Mahabharata Shanti Parva",
      },
      {
        number: 4,
        title: "Dharma Palana — Dharma Upholding",
        description:
          "Uphold dharma in all decisions — justice over personal gain, truth over convenience. The Kshatriya who compromises dharma for personal benefit becomes a Rakshas, not a protector.",
        source: "Bhagavad Gita 2.31-37, Mahabharata Udyoga Parva",
      },
      {
        number: 5,
        title: "Shiksha — Continuous Learning",
        description:
          "Daily learning of statecraft, ethics, law, and warfare. A Kshatriya must be more educated than those he protects — in both knowledge and dharmic discernment.",
        source: "Arthashastra 1.5, Manusmriti 7.97",
      },
      {
        number: 6,
        title: "Ahimsa to Own Subjects",
        description:
          "While a warrior uses force against enemies of dharma, violence against one's own subjects is the gravest sin for a Kshatriya. Protection and non-harm to the governed is absolute.",
        source: "Mahabharata Shanti Parva 58.17, Manusmriti 7.101",
      },
      {
        number: 7,
        title: "Dana — Brahmin and Community Support",
        description:
          "Support Brahmins, temples, and scholars generously. The Kshatriya-Brahmin relationship is the sacred governance axis of Vedic civilization — the king supports the priest and the priest guides the king.",
        source: "Manusmriti 7.37, Arthashastra 1.3",
      },
      {
        number: 8,
        title: "Yajna Support",
        description:
          "Fund and attend Yajnas. The great kings of the Mahabharata and Ramayana — Yudhishthira, Dasharatha — were known for magnificent Yajnas. This redistributes wealth spiritually.",
        source: "Mahabharata Ashvamedhika Parva, Ramayana 1.10",
      },
      {
        number: 9,
        title: "Vedic Recitation Minimum",
        description:
          "Minimum daily duty: Gayatri Mantra 108 times. A Kshatriya is not primarily a Vedic scholar, but Gayatri is the universal minimum for all twice-born Hindus.",
        source: "Manusmriti 2.101, Yajnavalkya Smriti",
      },
      {
        number: 10,
        title: "Shatrau Mardana — Against Adharma",
        description:
          "A Kshatriya's duty includes actively confronting injustice and adharma. Non-action in the face of adharma is itself adharma — this is Krishna's core teaching to Arjuna in Gita Chapter 2.",
        source: "Bhagavad Gita 2.31-33, Mahabharata",
      },
    ],
    dailySchedule: [
      {
        time: "5:00 AM",
        activity: "Rise. Bath. Sandhyavandana and Gayatri Mantra 108 times",
      },
      {
        time: "5:45 AM",
        activity: "Physical training — weapons, warfare discipline, yoga",
      },
      {
        time: "7:00 AM",
        activity: "Administrative duties — review of state/community welfare",
      },
      {
        time: "8:00 AM",
        activity: "Learning — statecraft, ethics, law (one hour minimum)",
      },
      {
        time: "12:00 PM",
        activity:
          "Madhyanha Sandhyavandana. Affairs of justice. Counsel with advisors",
      },
      {
        time: "2:00 PM",
        activity: "Public audience — hearing grievances and dispensing justice",
      },
      {
        time: "6:00 PM",
        activity: "Evening Sandhyavandana. Reflection on the day's dharma",
      },
      { time: "7:00 PM", activity: "Military review or strategic planning" },
      { time: "10:00 PM", activity: "Study or rest" },
    ],
    importance:
      "The Kshatriya is the shield of civilization — without righteous protection, neither learning nor trade nor spiritual life can flourish. Arjuna's moment of doubt on Kurukshetra was a Kshatriya abandoning his dharma.",
  },
  {
    id: "vaishya",
    name: "Vaishya",
    nameSanskrit: "वैश्य",
    icon: "🐄",
    color: "from-green-900/30 to-teal-900/20",
    nature:
      "Rajas directed toward sustenance — the providers and sustainers of society",
    gitaVerse:
      "Gita 18.44: Krishi (agriculture), Gau Raksha (cow protection), Vanijya (trade) — these are the natural duties of a Vaishya",
    duties: [
      {
        number: 1,
        title: "Sandhyavandana — Morning Prayer",
        description:
          "Begin every business day with Sandhyavandana. The Vaishya's trade and prosperity are only dharmic when conducted under divine oversight. No business begins without prayer.",
        source: "Manusmriti 1.90, Arthashastra",
      },
      {
        number: 2,
        title: "Krishi / Vanijya — Honest Trade",
        description:
          "Agriculture or trade conducted with absolute honesty. Every transaction is a yajna — an offering to society. Adulteration, deception, or exploitation negates all the merit of trade.",
        source: "Manusmriti 9.326, Arthashastra 2.22",
      },
      {
        number: 3,
        title: "Gau Seva — Cow Protection",
        description:
          "Cow protection is a primary Vaishya duty. Support Gaushalas, maintain cattle with care. The cow represents the entire economy and ecology of Vedic civilization.",
        source: "Mahabharata Anushasana Parva, Manusmriti 11.50",
      },
      {
        number: 4,
        title: "Satya Vakyam — Honesty in Trade",
        description:
          "Complete honesty in weights, measures, and quality. False weights are among the gravest sins for a Vaishya — equivalent to murder according to Manusmriti.",
        source: "Manusmriti 9.291, Arthashastra 4.2",
      },
      {
        number: 5,
        title: "Dana — Annadanam Supreme",
        description:
          "Vaishya Dana is most sacred when it feeds the hungry. Annadanam (food donation) removes all sins according to all Puranas. Support community kitchens, temple prasad, and the poor.",
        source: "Manusmriti 3.116, Mahabharata",
      },
      {
        number: 6,
        title: "Yajna Financial Support",
        description:
          "Fund community Yajnas financially. The Vaishya's wealth is meant to flow through the community via Dana and Yajna. Hoarding without community support violates Vaishya dharma.",
        source: "Manusmriti 1.90, Shatapatha Brahmana",
      },
      {
        number: 7,
        title: "Vedic Learning — Basic Education",
        description:
          "Basic Vedic education — at minimum Gayatri Mantra and knowledge of one's ancestral tradition. A Vaishya needs less Vedic scholarship than a Brahmin but cannot be spiritually illiterate.",
        source: "Manusmriti 2.168, Apastamba Dharmasutra",
      },
      {
        number: 8,
        title: "Fair Trade Ethics",
        description:
          "No adulteration, no cheating in weights/measures, no monopolistic exploitation. The Vaishya's code of ethics is essentially a sacred trust — the community's economy depends on Vaishya integrity.",
        source: "Arthashastra 4.2.3, Manusmriti 9.291",
      },
      {
        number: 9,
        title: "Community Wealth",
        description:
          "Use wealth for community benefit — build wells, roads, ghats, dharmashalas. The Vaishya who accumulates only for himself violates the purpose of Vaishya dharma.",
        source: "Manusmriti 4.236, Mahabharata Shanti Parva",
      },
      {
        number: 10,
        title: "Goseva — Sacred Cattle Care",
        description:
          "Beyond just protection — the Vaishya must actively serve cattle. Milk offering to temples, care for sick animals, and maintaining pastures are all dharmic duties.",
        source: "Mahabharata Anushasana Parva 81",
      },
    ],
    dailySchedule: [
      {
        time: "5:30 AM",
        activity: "Rise. Bath. Sandhyavandana and morning prayer",
      },
      { time: "6:30 AM", activity: "Gau Seva — feeding and caring for cattle" },
      {
        time: "7:30 AM",
        activity: "Commence business activities after prayer",
      },
      { time: "12:00 PM", activity: "Madhyanha prayer. Meal with family" },
      { time: "1:00 PM", activity: "Continue trade/agriculture" },
      {
        time: "5:00 PM",
        activity: "Close accounts. Check measures and weights for next day",
      },
      { time: "6:30 PM", activity: "Evening prayer. Annadana (if applicable)" },
      { time: "8:00 PM", activity: "Community matters or Dana activities" },
    ],
    importance:
      "The Vaishya sustains the material life of society through honest trade and agriculture. Without the Vaishya's dharmic trade, the food and goods that support all other varnas in their sacred duties would not exist.",
  },
  {
    id: "shudra",
    name: "Shudra",
    nameSanskrit: "शूद्र",
    icon: "🙏",
    color: "from-purple-900/30 to-violet-900/20",
    nature:
      "Tamas transformed into devoted service — the foundation of society through skilled work",
    gitaVerse:
      "Gita 18.44: Seva (service to the three varnas) — the natural duty of a Shudra. Note: Gita 9.32 — even those of Shudra birth, O Partha, attain the supreme goal through devotion",
    duties: [
      {
        number: 1,
        title: "Seva — Devoted Service",
        description:
          "Honest, devoted service to one's work and community. All service performed with devotion is a form of worship. The Vedic principle: Seva is Yajna — service is sacrifice.",
        source: "Manusmriti 1.91, Bhagavata Purana 11.17",
      },
      {
        number: 2,
        title: "Nitya Karma — Daily Prayers",
        description:
          "Basic daily prayers accessible to all: Surya Namaskar (12 rounds), Gayatri (accessible to all by Smriti provisions), and local deity worship. Bhagavata Purana explicitly grants Shudras full devotional rights.",
        source: "Bhagavata Purana 11.17, Gita 9.32",
      },
      {
        number: 3,
        title: "Ghar ki Pooja — Home Worship",
        description:
          "Complete home puja. Keeping the home as a temple — clean, lit with deepam, decorated with flowers, with daily worship at the home altar.",
        source: "Griha Sutras, Bhagavata Purana tradition",
      },
      {
        number: 4,
        title: "Shuchi — Cleanliness",
        description:
          "Absolute cleanliness of body, home, work, and tools. The Shudra's dharma in keeping the environment clean is a sacred duty — physical cleanliness is spiritual purity in manifestation.",
        source: "Manusmriti 1.91, Bhagavata Purana",
      },
      {
        number: 5,
        title: "Satya — Integrity in Work",
        description:
          "Complete honesty and integrity in all service. A craftsperson who does poor work, a servant who steals time — these violate Shudra dharma as surely as a Brahmin speaking falsehood.",
        source: "Manusmriti 10.123, Arthashastra tradition",
      },
      {
        number: 6,
        title: "Guru Bhakti — Reverence",
        description:
          "Deep reverence for teachers, elders, and those with knowledge. This is the Shudra's primary spiritual access — through the grace of a guru, all paths open.",
        source: "Bhagavata Purana 11.17.27",
      },
      {
        number: 7,
        title: "Bhakti — Devotional Worship",
        description:
          "The Bhagavata Purana's supreme gift to all varnas: pure devotion bypasses all ritual and caste restrictions. Bhakta saints like Kannappa, Vidura, and Sabari show that a Shudra devotee surpasses Brahmin ritual.",
        source: "Bhagavata Purana 11.14-15, Gita 9.32",
      },
      {
        number: 8,
        title: "Bhagavad Gita Study",
        description:
          "The Gita (9.32) explicitly states that even those of Shudra birth attain the supreme. The Gita is the universal scripture — study and chanting grants liberation regardless of varna.",
        source: "Bhagavad Gita 9.32, 18.70",
      },
      {
        number: 9,
        title: "Dana — Give What One Can",
        description:
          "Even small Dana (giving) purifies. Giving food, water, shelter, or simple services to those in need generates enormous merit. Dana is available to all regardless of wealth or varna.",
        source: "Mahabharata Anushasana Parva 58",
      },
      {
        number: 10,
        title: "Community Service",
        description:
          "Maintaining sacred spaces, community infrastructure, and the environment. The Shudra's service sustains the physical world in which dharma can be lived by all.",
        source: "Manusmriti 10.123, Bhagavata Purana tradition",
      },
    ],
    dailySchedule: [
      {
        time: "6:00 AM",
        activity: "Rise. Bath. Surya Namaskar or basic morning prayer",
      },
      {
        time: "7:00 AM",
        activity: "Home puja. Light deepam. Offer flowers to home deity",
      },
      {
        time: "8:00 AM",
        activity: "Begin work with dedication — work as a form of puja",
      },
      { time: "12:00 PM", activity: "Midday prayer. Meal" },
      { time: "1:00 PM", activity: "Afternoon service/work" },
      { time: "6:00 PM", activity: "Evening puja at home. Deepam lighting" },
      { time: "8:00 PM", activity: "Bhagavad Gita reading or kirtan" },
    ],
    importance:
      "In Sanatana Dharma, every varna is equally sacred and necessary. The Shudra's service sustains the physical foundation on which Brahmin knowledge, Kshatriya protection, and Vaishya trade all depend.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function VarnaDharmaSection() {
  const [selectedVarna, setSelectedVarna] = useState(VARNAS[0].id);
  const [activeTab, setActiveTab] = useState<"duties" | "schedule">("duties");

  const varna = VARNAS.find((v) => v.id === selectedVarna)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <p className="text-verse-number tracking-widest mb-1">॥ वर्ण धर्म ॥</p>
        <h2 className="font-display text-2xl font-bold italic text-primary mb-2">
          Varna Dharma
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
          Daily duties according to Varna, as prescribed in Vedic and Dharmic
          literature.
        </p>

        {/* Critical Gita Quote */}
        <div
          className="mt-4 p-4 border border-accent/30 max-w-lg mx-auto"
          style={{
            background: "oklch(var(--accent) / 0.05)",
            borderRadius: "2px",
          }}
        >
          <p className="font-body text-sm text-foreground leading-relaxed">
            <span className="font-display italic text-accent">
              Bhagavad Gita 18.41:
            </span>{" "}
            <em>
              "Brahmins, Kshatriyas, Vaishyas and Shudras are distinguished by
              qualities born of their own nature — svabhava-jam karma."
            </em>
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2 italic">
            Varna is defined by QUALITIES (gunas) and ACTIONS (karma), not birth
            alone. One who has a Brahmin's qualities performs a Brahmin's
            dharma, regardless of birth.
          </p>
        </div>
      </div>

      {/* Varna Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {VARNAS.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setSelectedVarna(v.id)}
            data-ocid={`varna-tab-${v.id}`}
            className={`p-4 border text-center transition-smooth ${
              selectedVarna === v.id
                ? "border-accent/60 bg-accent/10"
                : "border-border hover:border-accent/30 hover:bg-accent/5"
            }`}
            style={{ borderRadius: "2px" }}
          >
            <div className="text-2xl mb-1">{v.icon}</div>
            <p className="font-display text-sm font-semibold text-foreground">
              {v.name}
            </p>
            <p className="font-body text-xs text-muted-foreground italic">
              {v.nameSanskrit}
            </p>
          </button>
        ))}
      </div>

      {/* Varna Overview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedVarna}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`p-5 border border-border/50 bg-gradient-to-r ${varna.color}`}
          style={{ borderRadius: "2px" }}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl shrink-0">{varna.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-display text-lg font-bold text-foreground">
                {varna.name} ({varna.nameSanskrit})
              </p>
              <p className="font-body text-xs text-accent italic mt-0.5">
                {varna.nature}
              </p>
            </div>
          </div>
          <div
            className="p-3 border-l-2 mb-3"
            style={{
              borderColor: "oklch(var(--accent) / 0.5)",
              background: "oklch(var(--muted) / 0.2)",
            }}
          >
            <p className="font-body text-xs italic text-foreground leading-relaxed">
              {varna.gitaVerse}
            </p>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            {varna.importance}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Sub Tabs */}
      <div
        className="flex border border-border"
        style={{ background: "oklch(var(--card) / 0.7)" }}
      >
        {(["duties", "schedule"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            data-ocid={`varna-subtab-${tab}`}
            className={`flex-1 py-3 text-sm font-body border-b-2 transition-smooth ${
              activeTab === tab
                ? "text-primary border-b-accent/70"
                : "text-muted-foreground border-b-transparent hover:text-foreground"
            }`}
          >
            {tab === "duties" ? "📿 10 Sacred Duties" : "⏰ Daily Schedule"}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedVarna}-${activeTab}`}
          initial={{ opacity: 0, x: activeTab === "duties" ? -8 : 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "duties" ? (
            <div className="space-y-3">
              {varna.duties.map((duty) => (
                <motion.div
                  key={duty.number}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: duty.number * 0.04 }}
                  className="border border-border p-4"
                  style={{
                    background: "oklch(var(--card) / 0.65)",
                    borderRadius: "2px",
                  }}
                  data-ocid={`varna-duty-${varna.id}-${duty.number}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-7 h-7 flex items-center justify-center text-xs font-display font-bold border"
                      style={{
                        background: "oklch(var(--accent) / 0.15)",
                        borderColor: "oklch(var(--accent) / 0.4)",
                        color: "oklch(var(--accent))",
                        borderRadius: "1px",
                      }}
                    >
                      {duty.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-semibold text-foreground mb-1">
                        {duty.title}
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {duty.description}
                      </p>
                      <p
                        className="font-body text-xs italic mt-1.5"
                        style={{ color: "oklch(var(--accent) / 0.7)" }}
                      >
                        Source: {duty.source}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div
              className="border border-border"
              style={{
                background: "oklch(var(--card) / 0.65)",
                borderRadius: "2px",
              }}
            >
              <div
                className="px-4 py-3 border-b border-border/40"
                style={{ background: "oklch(var(--muted) / 0.4)" }}
              >
                <p className="font-display text-sm font-semibold text-foreground">
                  {varna.icon} Ideal Daily Schedule — {varna.name}
                </p>
              </div>
              <div className="divide-y divide-border/30">
                {varna.dailySchedule.map((item) => (
                  <div key={item.time} className="flex gap-4 px-4 py-3">
                    <p
                      className="shrink-0 font-display text-xs font-semibold w-16"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      {item.time}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
