/**
 * KundaliLiteContent.tsx
 * Three tab components for the Kundali Lite pathway:
 *  - AajKaGrahaTab    — daily Panchang + Graha meter + weekly remedy
 *  - GrahaShantTab    — 9 graha deep-dive cards with mantras
 *  - TransitCalendarTab — 12-month transit grid + upcoming events
 */

import type { TransitEvent } from "@/backend.d";
import { getBackend } from "@/lib/backend-client";
import type { KundliData } from "@/types/user-profile";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PanchangData {
  tithi: string;
  tithiNumber: bigint;
  nakshatra: string;
  yoga: string;
  karana: string;
  moonSign: string;
  vara: string;
  description: string;
}

// ─── Static Graha Content ─────────────────────────────────────────────────────

interface GrahaStaticData {
  name: string;
  sanskrit: string;
  glyph: string;
  color: string;
  bgGradient: string;
  role: string;
  strongGives: string[];
  weakCauses: string[];
  remedies: string[];
  avoidList: string[];
  mantraSanskrit: string;
  mantraTranslit: string;
  mantraCount: number;
  daan: string;
  gemstone: string;
  gemstoneWarning: string;
}

const GRAHA_DATA: GrahaStaticData[] = [
  {
    name: "Surya",
    sanskrit: "सूर्य",
    glyph: "☀",
    color: "oklch(0.72 0.30 52)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.95 0.06 72) 0%, oklch(0.90 0.10 58) 100%)",
    role: "Soul | Confidence | Leadership | Father",
    strongGives: [
      "Authority and political power",
      "High self-confidence and success",
      "Good eyesight and vitality",
      "Strong leadership qualities",
      "Positive relationship with father",
    ],
    weakCauses: [
      "Be careful with ego tendencies",
      "Eye and head health may need attention",
      "Period favors nurturing father relationships",
      "Self-confidence benefits from daily practice",
      "Authority figures may need extra patience",
    ],
    remedies: [
      "Offer wheat, jaggery, red flowers on Sunday",
      "Chant Surya Namaskar 12 rounds at sunrise",
      "Serve father figures and elders with love",
      "Wear copper or gold on Sunday",
      "Om Suryaya Namah 108x Sunday morning",
    ],
    avoidList: [
      "Disrespecting father or authority figures",
      "Excessive ego or arrogance",
      "Skipping morning prayers on Sunday",
    ],
    mantraSanskrit: "ॐ सूर्याय नमः",
    mantraTranslit: "Om Suryaya Namah",
    mantraCount: 108,
    daan: "Wheat, jaggery, red flowers, copper on Sunday",
    gemstone: "Ruby (Manik)",
    gemstoneWarning:
      "Manik can cause anger or arrogance if Surya is afflicted in your chart. Consult Daivagna before wearing.",
  },
  {
    name: "Chandra",
    sanskrit: "चन्द्र",
    glyph: "☽",
    color: "oklch(0.65 0.15 220)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.95 0.04 220) 0%, oklch(0.90 0.08 210) 100%)",
    role: "Mind | Emotions | Mother | Intuition",
    strongGives: [
      "Deep emotional balance and peace",
      "Loving nature and nurturing quality",
      "Creative and imaginative mind",
      "Strong relationship with mother",
      "Heightened intuition and psychic sensitivity",
    ],
    weakCauses: [
      "Be careful with emotional swings — grounding helps",
      "Relationship with mother may benefit from extra care",
      "Mental peace deepens with regular meditation",
      "Sleep patterns benefit from lunar rhythm awareness",
      "Social bonds strengthen when you listen more",
    ],
    remedies: [
      "Offer white rice, milk, white flowers on Monday",
      "Chant Om Somaya Namah 11x Monday evening",
      "Respect and serve mother with devotion",
      "Fast on Mondays or take milk-only diet",
      "Donate silver or white cloth on Monday",
    ],
    avoidList: [
      "Arguments with mother or female elders",
      "Eating non-vegetarian food on Monday",
      "Staying up very late on full moon nights",
    ],
    mantraSanskrit: "ॐ सोमाय नमः",
    mantraTranslit: "Om Somaya Namah",
    mantraCount: 11,
    daan: "White rice, milk, white flowers, silver on Monday",
    gemstone: "Pearl (Moti)",
    gemstoneWarning:
      "Moti may amplify emotional sensitivity if Chandra is afflicted in your chart. Consult Daivagna before wearing.",
  },
  {
    name: "Mangal",
    sanskrit: "मङ्गल",
    glyph: "♂",
    color: "oklch(0.58 0.28 28)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.95 0.05 30) 0%, oklch(0.90 0.12 26) 100%)",
    role: "Energy | Courage | Action | Mars Force",
    strongGives: [
      "Exceptional courage and determination",
      "Natural leadership and boldness",
      "Strong physical constitution",
      "Success in sports and physical pursuits",
      "Ability to initiate and complete projects",
    ],
    weakCauses: [
      "Be careful with hasty decisions — pause before acting",
      "Digestive health benefits from warm, calming foods",
      "Sibling relationships deepen with patience",
      "Channel energy into constructive action",
      "Fiery emotions cool with spiritual practice",
    ],
    remedies: [
      "Offer red lentils, red cloth, copper on Tuesday",
      "Chant Hanuman Chalisa on Tuesdays",
      "Om Angarakaya Namah 108x Tuesday morning",
      "Visit Hanuman temple on Tuesdays",
      "Feed dogs and serve the needy on Tuesday",
    ],
    avoidList: [
      "Aggression or heated arguments on Tuesday",
      "Buying sharp objects on Tuesday",
      "Ignoring sibling or family relationships",
    ],
    mantraSanskrit: "ॐ अङ्गारकाय नमः",
    mantraTranslit: "Om Angarakaya Namah",
    mantraCount: 108,
    daan: "Red lentils, red cloth, copper on Tuesday",
    gemstone: "Red Coral (Moonga)",
    gemstoneWarning:
      "Moonga can increase aggression if Mangal is afflicted in your chart. Consult Daivagna before wearing.",
  },
  {
    name: "Budh",
    sanskrit: "बुध",
    glyph: "☿",
    color: "oklch(0.60 0.22 148)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.95 0.05 150) 0%, oklch(0.90 0.10 145) 100%)",
    role: "Intellect | Communication | Commerce | Learning",
    strongGives: [
      "Sharp intellect and analytical mind",
      "Excellent communication and writing skills",
      "Business acumen and commercial success",
      "Mathematical and technical ability",
      "Strong memory and learning capacity",
    ],
    weakCauses: [
      "Be careful with communication clarity — review before sending",
      "Business decisions benefit from extra research",
      "Nervous system health improves with yoga and rest",
      "Speaking with care strengthens all relationships",
      "Documentation and planning add stability",
    ],
    remedies: [
      "Offer green moong dal, green cloth on Wednesday",
      "Om Budhaya Namah 17x Wednesday morning",
      "Read and study spiritual texts on Wednesdays",
      "Donate bronze or green items on Wednesday",
      "Practice clear, mindful communication daily",
    ],
    avoidList: [
      "Gossiping or speaking harshly on Wednesday",
      "Signing contracts without careful review",
      "Skipping learning or reading practices",
    ],
    mantraSanskrit: "ॐ बुधाय नमः",
    mantraTranslit: "Om Budhaya Namah",
    mantraCount: 17,
    daan: "Green moong dal, green cloth, bronze on Wednesday",
    gemstone: "Emerald (Panna)",
    gemstoneWarning:
      "Panna can cause confusion if Budh is afflicted or in Kendra. Never wear without expert Kundali analysis.",
  },
  {
    name: "Guru",
    sanskrit: "गुरु",
    glyph: "♃",
    color: "oklch(0.66 0.26 72)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.95 0.07 74) 0%, oklch(0.90 0.13 68) 100%)",
    role: "Wisdom | Dharma | Expansion | Teacher | Jupiter",
    strongGives: [
      "Deep spiritual wisdom and dharmic insight",
      "Ability to teach and inspire others",
      "Prosperity and abundance in life",
      "Blessings of good children",
      "Expansion and growth in all endeavors",
    ],
    weakCauses: [
      "Be careful with overconfidence — humility serves well",
      "Liver health benefits from sattvic diet",
      "Weight management improves with mindful eating",
      "Period favors study but not overindulgence",
      "Spiritual practice keeps expansion balanced",
    ],
    remedies: [
      "Offer yellow chana dal, turmeric on Thursday",
      "Om Brihaspataye Namah 16x Thursday morning",
      "Respect and serve your Guru or teacher",
      "Donate banana, yellow cloth on Thursday",
      "Read Vishnu Sahasranama on Thursdays",
    ],
    avoidList: [
      "Disrespecting teachers or Guru figures",
      "Overeating or indulgence on Thursday",
      "Skipping spiritual study or satsang",
    ],
    mantraSanskrit: "ॐ बृहस्पतये नमः",
    mantraTranslit: "Om Brihaspataye Namah",
    mantraCount: 16,
    daan: "Yellow chana dal, turmeric, banana, yellow cloth on Thursday",
    gemstone: "Yellow Sapphire (Pukhraj)",
    gemstoneWarning:
      "Pukhraj can cause imbalance if Guru is combust or debilitated. Consult Daivagna before wearing.",
  },
  {
    name: "Shukra",
    sanskrit: "शुक्र",
    glyph: "♀",
    color: "oklch(0.68 0.22 340)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.96 0.05 340) 0%, oklch(0.91 0.10 335) 100%)",
    role: "Love | Beauty | Luxury | Venus | Relationships",
    strongGives: [
      "Artistic and creative talent",
      "Beautiful love relationships",
      "Luxury, comfort and aesthetic sense",
      "Diplomatic and harmonious nature",
      "Success in creative expressions",
    ],
    weakCauses: [
      "Be careful with relationship harmony — communication is key",
      "Financial discipline brings lasting security",
      "Kidney health benefits from adequate hydration",
      "Overindulgence in sensory pleasures may tire the spirit",
      "Material desires balance beautifully with spiritual practice",
    ],
    remedies: [
      "Offer white sweets, white cloth, ghee on Friday",
      "Om Shukraya Namah 20x Friday evening",
      "Worship Goddess Lakshmi on Fridays",
      "Donate silver or white items on Friday",
      "Fast on Fridays or take only white-colored foods",
    ],
    avoidList: [
      "Relationship conflicts on Friday",
      "Excessive spending or indulgence",
      "Disrespecting women or feminine energy",
    ],
    mantraSanskrit: "ॐ शुक्राय नमः",
    mantraTranslit: "Om Shukraya Namah",
    mantraCount: 20,
    daan: "White sweet, white cloth, ghee, silver on Friday",
    gemstone: "Diamond / White Sapphire (Heera / Safed Pukhraj)",
    gemstoneWarning:
      "Heera may cause relationship complications if Shukra is in a malefic position. Consult Daivagna before wearing.",
  },
  {
    name: "Shani",
    sanskrit: "शनि",
    glyph: "♄",
    color: "oklch(0.40 0.12 270)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.94 0.04 270) 0%, oklch(0.88 0.09 265) 100%)",
    role: "Karma | Discipline | Longevity | Justice | Saturn",
    strongGives: [
      "Natural authority and leadership",
      "Disciplined focus and perseverance",
      "Long life and wisdom through experience",
      "Service-oriented mindset",
      "Deep insight through patience",
    ],
    weakCauses: [
      "Be careful with delays — trust divine timing",
      "Joint and bone health benefits from yoga and oil massage",
      "Relationships with workers and servants deepen with respect",
      "Taking shortcuts creates longer obstacles",
      "Steadiness and honesty always serve Shani well",
    ],
    remedies: [
      "Donate black urad and mustard oil on Saturday",
      "Feed dogs and crows daily — they are Shani's companions",
      "Serve parents, elderly, and the underprivileged",
      "Hanuman Chalisa every Tuesday and Saturday",
      "Om Sham Shanicharaya Namah 108x Saturday evening",
    ],
    avoidList: [
      "Ego, arrogance, or disrespecting workers",
      "Alcohol and intoxicants",
      "Buying iron or leather on Saturday",
      "Disrespecting elderly or service workers",
    ],
    mantraSanskrit: "ॐ शं शनिश्चराय नमः",
    mantraTranslit: "Om Sham Shanicharaya Namah",
    mantraCount: 108,
    daan: "Black urad, mustard oil on Saturday — feed dogs/crows daily, serve parents and elderly",
    gemstone: "Blue Sapphire (Neelam)",
    gemstoneWarning:
      "Neelam is powerful — can give opposite effect very quickly if Shani is malefic. Absolutely consult qualified Daivagna before wearing. This is the most sensitive gemstone.",
  },
  {
    name: "Rahu",
    sanskrit: "राहु",
    glyph: "☊",
    color: "oklch(0.45 0.18 300)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.94 0.05 300) 0%, oklch(0.88 0.10 295) 100%)",
    role: "Illusion | Foreign | Obsession | Transformation | Shadow Planet",
    strongGives: [
      "Favorable for foreign connections and travel",
      "Success in technology and unconventional fields",
      "Ability for research and deep investigation",
      "Transformative experiences that bring growth",
      "Unique approach that sets you apart",
    ],
    weakCauses: [
      "Be careful with obsessive thought patterns — awareness helps",
      "Grandparent health may benefit from extra attention",
      "Foreign travels reward careful preparation",
      "Confusion clears with meditation and grounding",
      "Material obsession balances through spiritual practice",
    ],
    remedies: [
      "Om Rahave Namah 18x Saturday at dusk",
      "Donate coconut, blue cloth, black sesame on Saturday",
      "Visit Bhairava temple on Saturdays",
      "Light a lamp of mustard oil on Saturday",
      "Meditate on Durga or Kali for clarity and transformation",
    ],
    avoidList: [
      "Obsessive or fearful thinking",
      "Irregular sleep patterns",
      "Overindulgence in material pursuits",
    ],
    mantraSanskrit: "ॐ राहवे नमः",
    mantraTranslit: "Om Rahave Namah",
    mantraCount: 18,
    daan: "Coconut, blue cloth, black sesame, mustard on Saturday",
    gemstone: "Hessonite (Gomed)",
    gemstoneWarning:
      "Gomed can amplify Rahu's confusion if placed wrongly in the chart. Never wear without expert Kundali analysis from a qualified astrologer.",
  },
  {
    name: "Ketu",
    sanskrit: "केतु",
    glyph: "☋",
    color: "oklch(0.50 0.16 180)",
    bgGradient:
      "linear-gradient(135deg, oklch(0.94 0.04 180) 0%, oklch(0.88 0.09 175) 100%)",
    role: "Liberation | Spiritual Insight | Past Karma | Moksha | Shadow Planet",
    strongGives: [
      "Deep spiritual insight and moksha inclination",
      "Access to past-life wisdom",
      "Occult and mystical knowledge",
      "Liberation from material bondage",
      "Unique spiritual gifts and abilities",
    ],
    weakCauses: [
      "Be careful with worldly direction — spiritual clarity is your compass",
      "Maternal grandfather health may deserve extra attention",
      "Confusion about life path clears through meditation",
      "Detachment from outcomes brings peace",
      "Practical matters benefit from earth-grounding practices",
    ],
    remedies: [
      "Om Ketave Namah 17x Tuesday or Saturday",
      "Donate brown/grey cloth and horsegram on Tuesday",
      "Visit Ganesha temple for clarity on Tuesdays",
      "Light sesame oil lamp on Saturdays",
      "Study Vedanta and liberation texts for inner guidance",
    ],
    avoidList: [
      "Excessive worldly attachment",
      "Ignoring spiritual practice",
      "Suppressing intuition or inner guidance",
    ],
    mantraSanskrit: "ॐ केतवे नमः",
    mantraTranslit: "Om Ketave Namah",
    mantraCount: 17,
    daan: "Brown/grey cloth, horsegram, iron on Tuesday",
    gemstone: "Cat's Eye (Lahsuniya)",
    gemstoneWarning:
      "Lahsuniya is highly sensitive — must only be worn after expert analysis of Ketu's full chart position and its role in your specific ascendant.",
  },
];

// ─── House-based guidance for Chandra (non-fear) ─────────────────────────────

const CHANDRA_HOUSE_GUIDANCE: Record<
  number,
  { text: string; mantra: string; color: "green" | "yellow" | "red" }
> = {
  1: {
    text: "Chandra illuminates your Lagna — a day for emotional renewal and self-care.",
    mantra: "Om Somaya Namah",
    color: "green",
  },
  2: {
    text: "Chandra blesses your resources — period favors family harmony and financial clarity.",
    mantra: "Om Somaya Namah",
    color: "green",
  },
  3: {
    text: "Chandra activates courage — good for communication and short travels.",
    mantra: "Om Somaya Namah",
    color: "yellow",
  },
  4: {
    text: "Chandra graces your home — a beautiful day for family, mother, and inner peace.",
    mantra: "Om Chandraya Namah",
    color: "green",
  },
  5: {
    text: "Chandra blesses creativity and children — wonderful day for art, study, and joy.",
    mantra: "Om Somaya Namah",
    color: "green",
  },
  6: {
    text: "Chandra supports service — your health and daily discipline benefit from attention.",
    mantra: "Om Somaya Namah",
    color: "yellow",
  },
  7: {
    text: "Chandra illuminates partnerships — a nurturing day for relationships and collaboration.",
    mantra: "Om Chandraya Namah",
    color: "green",
  },
  8: {
    text: "Chandra passes through the deep — a good day for introspection, meditation, and rest.",
    mantra: "Om Somaya Namah",
    color: "red",
  },
  9: {
    text: "Chandra blesses dharma and fortune — an auspicious day for spiritual practice.",
    mantra: "Om Chandraya Namah",
    color: "green",
  },
  10: {
    text: "Chandra activates your karma zone — professional matters receive lunar attention.",
    mantra: "Om Somaya Namah",
    color: "yellow",
  },
  11: {
    text: "Chandra illuminates gains and friendships — social connections are especially warm today.",
    mantra: "Om Chandraya Namah",
    color: "green",
  },
  12: {
    text: "Chandra invites contemplation — rest, spiritual practice, and inner retreat are especially beneficial.",
    mantra: "Om Somaya Namah",
    color: "red",
  },
};

// ─── Shared Disclaimer Component ─────────────────────────────────────────────

function JyotishDisclaimer() {
  return (
    <div
      className="kundli-disclaimer mt-4 rounded-lg p-3 text-center"
      style={{ fontSize: "0.72rem" }}
    >
      <p className="font-body italic" style={{ color: "oklch(0.45 0.14 46)" }}>
        ✦ Jyotish is the eye of the Vedas. Karma + Dharma are above all Grahas.
        Use this as guidance, not final truth. ✦
      </p>
    </div>
  );
}

// ─── Graha Meter Card ─────────────────────────────────────────────────────────

function GraMeterCard({
  color,
  title,
  subtitle,
  mantra,
  count,
}: {
  color: "green" | "yellow" | "red";
  title: string;
  subtitle: string;
  mantra: string;
  count: number;
}) {
  const colorMap = {
    green: {
      bg: "oklch(0.92 0.10 148)",
      border: "oklch(0.60 0.20 148)",
      label: "🌿 Shubh",
      text: "oklch(0.30 0.18 148)",
    },
    yellow: {
      bg: "oklch(0.94 0.10 80)",
      border: "oklch(0.68 0.22 72)",
      label: "🌀 Neutral",
      text: "oklch(0.38 0.14 60)",
    },
    red: {
      bg: "oklch(0.94 0.08 28)",
      border: "oklch(0.58 0.22 28)",
      label: "⚡ Savdhaan",
      text: "oklch(0.38 0.18 28)",
    },
  };
  const c = colorMap[color];
  return (
    <div
      className="graha-meter rounded-xl p-4 mb-3"
      style={{ background: c.bg, border: `1.5px solid ${c.border}` }}
      data-ocid="kundali.graha_meter.card"
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-display font-bold text-sm"
          style={{ color: c.text }}
        >
          {title}
        </span>
        <span
          className="text-xs font-body font-semibold px-2 py-0.5 rounded-full"
          style={{ background: `${c.border}33`, color: c.text }}
        >
          {c.label}
        </span>
      </div>
      <p
        className="font-body text-sm mb-2"
        style={{ color: "oklch(0.30 0.10 46)", lineHeight: 1.6 }}
      >
        {subtitle}
      </p>
      <p
        className="font-body text-xs italic"
        style={{ color: "oklch(0.42 0.14 46)" }}
      >
        Mantra: <span className="font-semibold">{mantra}</span> × {count}
      </p>
    </div>
  );
}

// ─── AajKaGrahaTab ────────────────────────────────────────────────────────────

export function AajKaGrahaTab({ kundli }: { kundli: KundliData | null }) {
  const [panchang, setPanchang] = useState<PanchangData | null>(null);
  const [reminderTime, setReminderTime] = useState("07:00");
  const [reminderSaved, setReminderSaved] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    getBackend()
      .getPanchangToday(today)
      .then((p) => setPanchang(p as unknown as PanchangData))
      .catch(() => {});
  }, []);

  // Determine moon's house from kundli
  const moonHouse = kundli
    ? (kundli.planets.find((p) => p.planet === "Chandra")?.house ?? 1)
    : 1;
  const guidance =
    CHANDRA_HOUSE_GUIDANCE[moonHouse] ?? CHANDRA_HOUSE_GUIDANCE[1];

  // Weakest graha from kundali (planet in 8th or 12th house, else Shani as default)
  const weakestGraha = kundli
    ? (kundli.planets.find((p) => p.house === 8 || p.house === 12)?.planet ??
      "Shani")
    : "Shani";
  const weeklyRemedy = `This week ${weakestGraha} invites your attention. ${
    GRAHA_DATA.find((g) => g.name === weakestGraha)?.remedies[0] ??
    "Light a lamp and chant the planet's mantra with devotion."
  }`;

  const handleSaveReminder = useCallback(async () => {
    await getBackend()
      .saveRemedyReminder("Chandra", reminderTime)
      .catch(() => {});
    setReminderSaved(true);
    setShowTimePicker(false);
    setTimeout(() => setReminderSaved(false), 3000);
  }, [reminderTime]);

  return (
    <div className="pb-6 px-4 pt-2" data-ocid="kundali.aaj_ka_graha.section">
      {/* Panchang Banner */}
      <div
        className="rounded-xl mb-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.92 0.10 58) 0%, oklch(0.88 0.14 52) 100%)",
          border: "1.5px solid oklch(0.72 0.26 54 / 0.5)",
          boxShadow: "0 4px 18px oklch(0.72 0.26 54 / 0.15)",
        }}
      >
        <div
          className="text-center py-2 font-display text-sm font-bold tracking-wider"
          style={{
            background: "oklch(0.72 0.28 52 / 0.25)",
            color: "oklch(0.22 0.10 40)",
            borderBottom: "1px solid oklch(0.72 0.26 54 / 0.30)",
          }}
        >
          ☸ Aaj Ka Panchang ☸
        </div>
        {panchang ? (
          <div className="grid grid-cols-2 gap-3 p-4">
            {[
              { label: "Tithi", value: panchang.tithi },
              { label: "Nakshatra", value: panchang.nakshatra },
              { label: "Yoga", value: panchang.yoga },
              { label: "Karana", value: panchang.karana },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p
                  className="font-body text-xs"
                  style={{ color: "oklch(0.48 0.14 46)" }}
                >
                  {label}
                </p>
                <p
                  className="font-display font-bold text-sm"
                  style={{ color: "oklch(0.25 0.12 38)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center">
            <div className="om-loading text-2xl" />
          </div>
        )}
      </div>

      {/* Daily Graha Meter Card */}
      <h3
        className="font-display text-base font-bold mb-2"
        style={{ color: "oklch(0.30 0.14 42)" }}
      >
        Today's Chandra Position
      </h3>
      <GraMeterCard
        color={guidance.color}
        title={`Chandra in house ${moonHouse} from your Rashi`}
        subtitle={guidance.text}
        mantra={guidance.mantra}
        count={11}
      />

      {/* Remedy Reminder */}
      <div className="mb-4">
        <button
          type="button"
          className="wax-seal-btn w-full py-2.5 text-sm"
          onClick={() => setShowTimePicker((s) => !s)}
          data-ocid="kundali.set_reminder.button"
        >
          🔔 Set Remedy Reminder
        </button>
        <AnimatePresence>
          {showTimePicker && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div
                className="rounded-xl mt-2 p-4 flex gap-3 items-center"
                style={{
                  background: "oklch(0.93 0.07 60)",
                  border: "1px solid oklch(0.72 0.24 54 / 0.3)",
                }}
              >
                <label
                  htmlFor="reminder-time-input"
                  className="font-body text-sm"
                  style={{ color: "oklch(0.30 0.12 42)" }}
                >
                  Reminder time:
                </label>
                <input
                  id="reminder-time-input"
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="rounded-lg px-2 py-1 font-body text-sm border"
                  style={{
                    background: "oklch(0.97 0.04 70)",
                    borderColor: "oklch(0.72 0.24 54 / 0.4)",
                    color: "oklch(0.22 0.10 38)",
                  }}
                  data-ocid="kundali.reminder_time.input"
                />
                <button
                  type="button"
                  className="wax-seal-btn px-4 py-1.5 text-xs"
                  onClick={handleSaveReminder}
                  data-ocid="kundali.save_reminder.button"
                >
                  Save
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {reminderSaved && (
          <p
            className="text-center font-body text-xs mt-2"
            style={{ color: "oklch(0.40 0.20 148)" }}
          >
            ✓ Reminder saved — Krishna will remind you 🙏
          </p>
        )}
      </div>

      {/* Weekly Remedy */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.94 0.07 72) 0%, oklch(0.90 0.10 66) 100%)",
          border: "1.5px solid oklch(0.72 0.26 54 / 0.35)",
        }}
      >
        <h4
          className="font-display text-sm font-bold mb-2"
          style={{ color: "oklch(0.28 0.12 42)" }}
        >
          🌟 This Week's Graha Guidance
        </h4>
        <p
          className="font-body text-sm"
          style={{ color: "oklch(0.35 0.12 44)", lineHeight: 1.7 }}
        >
          {weeklyRemedy}
        </p>
        <p
          className="font-body text-xs italic mt-2"
          style={{ color: "oklch(0.52 0.12 46)" }}
        >
          Remedies are spiritual support. Consult a doctor for health issues.
        </p>
      </div>

      <JyotishDisclaimer />
    </div>
  );
}

// ─── GrahaShantTab ────────────────────────────────────────────────────────────

function MantraPlayer({
  mantra,
  translit,
  count,
}: { mantra: string; translit: string; count: number }) {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playBeep = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      /* AudioContext unavailable */
    }
  }, []);

  const start = useCallback(() => {
    setCurrent(0);
    setPlaying(true);
    let n = 0;
    playBeep();
    n++;
    setCurrent(n);
    intervalRef.current = setInterval(() => {
      playBeep();
      n++;
      setCurrent(n);
      if (n >= count) {
        clearInterval(intervalRef.current!);
        setPlaying(false);
      }
    }, 1200);
  }, [count, playBeep]);

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPlaying(false);
  }, []);

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{
        background: "oklch(0.93 0.08 58)",
        border: "1.5px solid oklch(0.72 0.26 54 / 0.35)",
      }}
    >
      <p
        className="font-display text-center text-lg mb-0.5"
        style={{ color: "oklch(0.26 0.12 42)" }}
      >
        {mantra}
      </p>
      <p
        className="font-body text-center text-xs italic mb-3"
        style={{ color: "oklch(0.45 0.14 46)" }}
      >
        {translit}
      </p>
      {playing && (
        <div className="flex items-center justify-center gap-2 mb-3">
          <div
            className="rounded-full text-center font-display font-bold text-xs px-3 py-1"
            style={{
              background: "oklch(0.72 0.28 54 / 0.25)",
              color: "oklch(0.28 0.12 42)",
            }}
          >
            {current} / {count}
          </div>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-4 rounded-full"
                style={{ background: "oklch(0.65 0.26 52)" }}
                animate={{ scaleY: [1, 1.8, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        className="wax-seal-btn w-full py-2 text-sm"
        onClick={playing ? stop : start}
        data-ocid="kundali.play_mantra.button"
      >
        {playing ? `⏹ Stop (${current}/${count})` : `▶ Play Mantra ${count}x`}
      </button>
    </div>
  );
}

export function GrahaShantTab() {
  const [activeGraha, setActiveGraha] = useState(0);
  const g = GRAHA_DATA[activeGraha];

  return (
    <div className="pb-6" data-ocid="kundali.graha_shanti.section">
      {/* Horizontal scrolling tab bar */}
      <div
        className="flex gap-2 px-3 py-3 overflow-x-auto"
        style={{
          borderBottom: "1px solid oklch(0.72 0.24 54 / 0.25)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {GRAHA_DATA.map((graha, idx) => (
          <button
            key={graha.name}
            type="button"
            onClick={() => setActiveGraha(idx)}
            className="flex-shrink-0 flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-smooth"
            style={{
              background:
                activeGraha === idx ? graha.bgGradient : "oklch(0.93 0.05 68)",
              border:
                activeGraha === idx
                  ? `1.5px solid ${graha.color}`
                  : "1.5px solid transparent",
              boxShadow:
                activeGraha === idx ? `0 2px 12px ${graha.color}40` : "none",
              minWidth: "60px",
            }}
            data-ocid={`kundali.graha_tab.${graha.name.toLowerCase()}`}
          >
            <span className="text-xl">{graha.glyph}</span>
            <span
              className="font-display font-bold"
              style={{
                fontSize: "0.65rem",
                color:
                  activeGraha === idx ? graha.color : "oklch(0.40 0.12 46)",
              }}
            >
              {graha.name}
            </span>
          </button>
        ))}
      </div>

      {/* Graha Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGraha}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22 }}
          className="px-4 pt-4"
        >
          {/* Header */}
          <div
            className="graha-tab rounded-xl p-4 mb-4 text-center"
            style={{
              background: g.bgGradient,
              border: `1.5px solid ${g.color}50`,
            }}
          >
            <div className="text-4xl mb-1">{g.glyph}</div>
            <p
              className="font-display text-2xl font-bold"
              style={{ color: g.color }}
            >
              {g.sanskrit}
            </p>
            <p
              className="font-display italic text-sm"
              style={{ color: "oklch(0.40 0.12 46)" }}
            >
              {g.name}
            </p>
            <p
              className="font-body text-xs mt-2"
              style={{ color: "oklch(0.38 0.12 46)" }}
            >
              {g.role}
            </p>
          </div>

          {/* Strong Gives */}
          <Section
            title="✨ Strong Shani Gives"
            titleOverride={`✨ Strong ${g.name} Gives`}
          >
            <ul className="space-y-1">
              {g.strongGives.map((item) => (
                <li
                  key={item}
                  className="font-body text-sm flex gap-2"
                  style={{ color: "oklch(0.32 0.12 44)" }}
                >
                  <span style={{ color: "oklch(0.55 0.22 148)" }}>✓</span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Weak Causes */}
          <Section title={`⚡ ${g.name} Needs Attention`}>
            <ul className="space-y-1">
              {g.weakCauses.map((item) => (
                <li
                  key={item}
                  className="font-body text-sm flex gap-2"
                  style={{ color: "oklch(0.36 0.12 44)" }}
                >
                  <span style={{ color: "oklch(0.60 0.24 52)" }}>•</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Remedies */}
          <Section title="🙏 Remedies (Upay)">
            <ol className="space-y-1.5">
              {g.remedies.map((item, idx) => (
                <li
                  key={item}
                  className="font-body text-sm flex gap-2"
                  style={{ color: "oklch(0.32 0.12 44)" }}
                >
                  <span
                    className="font-bold flex-shrink-0"
                    style={{ color: "oklch(0.55 0.24 52)" }}
                  >
                    {idx + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </Section>

          {/* Daan */}
          <Section title="🌾 Daan (Donation)">
            <p
              className="font-body text-sm"
              style={{ color: "oklch(0.32 0.12 44)", lineHeight: 1.7 }}
            >
              {g.daan}
            </p>
          </Section>

          {/* Mantra Player */}
          <h4
            className="font-display font-bold text-sm mb-2"
            style={{ color: "oklch(0.30 0.12 42)" }}
          >
            🔔 Today's Mantra
          </h4>
          <MantraPlayer
            mantra={g.mantraSanskrit}
            translit={g.mantraTranslit}
            count={g.mantraCount}
          />

          {/* Avoid */}
          <Section title="🚫 Avoid">
            <ol className="space-y-1">
              {g.avoidList.map((item) => (
                <li
                  key={item}
                  className="font-body text-sm flex gap-2"
                  style={{ color: "oklch(0.38 0.14 44)" }}
                >
                  <span style={{ color: "oklch(0.55 0.24 28)" }}>✗</span> {item}
                </li>
              ))}
            </ol>
          </Section>

          {/* Gemstone — always visible warning */}
          <div
            className="rounded-xl p-4 mb-4"
            style={{
              background: "oklch(0.96 0.04 60)",
              border: "2px solid oklch(0.65 0.24 52 / 0.4)",
            }}
          >
            <p
              className="font-display font-bold text-sm mb-1"
              style={{ color: "oklch(0.30 0.12 42)" }}
            >
              💎 Gemstone: {g.gemstone}
            </p>
            <div
              className="rounded-lg p-3 mt-2"
              style={{
                background: "oklch(0.94 0.08 28 / 0.35)",
                border: "1px solid oklch(0.60 0.22 28 / 0.40)",
              }}
            >
              <p
                className="font-body text-xs font-semibold mb-1"
                style={{ color: "oklch(0.42 0.18 28)" }}
              >
                ⚠ Important: Ratna Warning
              </p>
              <p
                className="font-body text-xs"
                style={{ color: "oklch(0.38 0.14 44)", lineHeight: 1.6 }}
              >
                {g.gemstoneWarning}
              </p>
              <p
                className="font-body text-xs italic mt-1"
                style={{ color: "oklch(0.50 0.14 46)" }}
              >
                Ratna can give opposite effect if planet is malefic in your
                chart. Consult a qualified Daivagna before wearing any gemstone.
              </p>
            </div>
          </div>

          <JyotishDisclaimer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Section({
  title,
  titleOverride,
  children,
}: { title: string; titleOverride?: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{
        background: "oklch(0.95 0.05 68)",
        border: "1px solid oklch(0.72 0.20 54 / 0.25)",
      }}
    >
      <h4
        className="font-display font-bold text-sm mb-2"
        style={{ color: "oklch(0.28 0.12 42)" }}
      >
        {titleOverride ?? title}
      </h4>
      {children}
    </div>
  );
}

// ─── TransitCalendarTab ───────────────────────────────────────────────────────

const STATIC_TRANSIT_EVENTS_2026: TransitEvent[] = [
  {
    planet: "Shani",
    eventType: "Vakri",
    description: "Shani Vakri begins — Saturn retrograde period",
    startDate: "2026-06-01",
    endDate: "2026-11-15",
    remedy:
      "Donate black urad on Saturdays. Feed dogs and crows. Chant Hanuman Chalisa on Tuesdays.",
    colorCode: "orange",
  },
  {
    planet: "Guru",
    eventType: "Gochar",
    description: "Guru Gochar — Jupiter enters Vrishabha",
    startDate: "2026-05-14",
    endDate: "2026-05-14",
    remedy:
      "Begin Vishnu Sahasranama recitation. Offer yellow flowers on Thursday.",
    colorCode: "blue",
  },
  {
    planet: "Surya",
    eventType: "Eclipse",
    description: "Solar Eclipse — a powerful time for inner renewal",
    startDate: "2026-08-12",
    endDate: "2026-08-12",
    remedy:
      "Fast and chant Mahamrityunjaya Mantra. Donate wheat and jaggery after eclipse.",
    colorCode: "red",
  },
  {
    planet: "Chandra",
    eventType: "Eclipse",
    description: "Lunar Eclipse — period of emotional purification",
    startDate: "2026-02-28",
    endDate: "2026-02-28",
    remedy:
      "Meditate and fast on eclipse day. Offer milk to Shiva lingam after eclipse.",
    colorCode: "red",
  },
  {
    planet: "Mangal",
    eventType: "Gochar",
    description: "Mangal Gochar — Mars enters Mesha (own sign)",
    startDate: "2026-09-20",
    endDate: "2026-11-05",
    remedy:
      "Channel energy into constructive action. Donate red lentils on Tuesdays.",
    colorCode: "blue",
  },
  {
    planet: "Rahu",
    eventType: "Gochar",
    description: "Rahu–Ketu axis shift — major karmic transition",
    startDate: "2026-11-27",
    endDate: "2026-11-27",
    remedy:
      "Strengthen spiritual practice. Donate coconut and black sesame on Saturdays.",
    colorCode: "orange",
  },
  {
    planet: "Shukra",
    eventType: "Vakri",
    description: "Shukra Vakri — Venus retrograde begins",
    startDate: "2026-07-22",
    endDate: "2026-09-03",
    remedy:
      "Avoid new relationships or major beauty investments. Offer white flowers on Fridays.",
    colorCode: "orange",
  },
];

const EVENT_COLOR_MAP: Record<string, string> = {
  orange: "oklch(0.65 0.26 52)",
  blue: "oklch(0.52 0.22 268)",
  red: "oklch(0.56 0.26 28)",
};

const EVENT_DOT_MAP: Record<string, string> = {
  Vakri: "oklch(0.65 0.26 52)",
  Gochar: "oklch(0.52 0.22 268)",
  Eclipse: "oklch(0.56 0.26 28)",
};

function getEventsInMonth(year: number, month: number, events: TransitEvent[]) {
  return events.filter((ev) => {
    const start = new Date(ev.startDate);
    const end = new Date(ev.endDate);
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    return start <= monthEnd && end >= monthStart;
  });
}

export function TransitCalendarTab() {
  const [selectedEvent, setSelectedEvent] = useState<TransitEvent | null>(null);
  const events = STATIC_TRANSIT_EVENTS_2026;

  const today = new Date();
  const months: { year: number; month: number; label: string }[] = Array.from(
    { length: 12 },
    (_, i) => {
      const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
      return {
        year: d.getFullYear(),
        month: d.getMonth(),
        label: d.toLocaleString("en-IN", { month: "short", year: "numeric" }),
      };
    },
  );

  // Upcoming 5 events from today
  const upcomingEvents = events
    .filter(
      (ev) => new Date(ev.startDate) >= today || new Date(ev.endDate) >= today,
    )
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )
    .slice(0, 5);

  // Events within 3 days
  const soonEvents = upcomingEvents.filter((ev) => {
    const diff =
      (new Date(ev.startDate).getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 3;
  });

  const downloadICS = useCallback((ev: TransitEvent) => {
    const toICSDate = (d: string) => d.replace(/-/g, "");
    const content = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Gita Companion//Kundali Lite//EN",
      "BEGIN:VEVENT",
      `DTSTART;VALUE=DATE:${toICSDate(ev.startDate)}`,
      `DTEND;VALUE=DATE:${toICSDate(ev.endDate)}`,
      `SUMMARY:${ev.planet} ${ev.eventType} — ${ev.description}`,
      `DESCRIPTION:Remedy: ${ev.remedy}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([content], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${ev.planet}_${ev.eventType}.ics`;
    a.click();
  }, []);

  return (
    <div className="pb-6" data-ocid="kundali.transit_calendar.section">
      {/* Alert Banner */}
      {soonEvents.length > 0 && (
        <div
          className="mx-4 mt-3 mb-3 rounded-xl p-3"
          style={{
            background: "oklch(0.94 0.08 52)",
            border: "1.5px solid oklch(0.65 0.26 52 / 0.5)",
          }}
        >
          {soonEvents.map((ev) => (
            <p
              key={ev.startDate + ev.planet}
              className="font-body text-sm"
              style={{ color: "oklch(0.30 0.14 42)" }}
            >
              ⚠{" "}
              <strong>
                {ev.planet} {ev.eventType}
              </strong>{" "}
              begins soon — {ev.remedy.split(".")[0]}.
            </p>
          ))}
        </div>
      )}

      {/* 12-month grid */}
      <div className="transit-calendar px-3 pt-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {months.map(({ year, month, label }) => {
            const monthEvents = getEventsInMonth(year, month, events);
            return (
              <div
                key={label}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "oklch(0.95 0.05 70)",
                  border: "1px solid oklch(0.72 0.22 54 / 0.30)",
                }}
              >
                <div
                  className="text-center py-1.5 font-display text-xs font-bold"
                  style={{
                    background: "oklch(0.72 0.26 52 / 0.18)",
                    color: "oklch(0.28 0.12 42)",
                  }}
                >
                  {label}
                </div>
                <div className="p-2 min-h-[56px]">
                  {monthEvents.length === 0 ? (
                    <p
                      className="font-body text-xs text-center"
                      style={{ color: "oklch(0.62 0.08 60)" }}
                    >
                      No major transits
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {monthEvents.map((ev) => (
                        <button
                          key={ev.planet + ev.startDate}
                          type="button"
                          className="w-full flex items-center gap-1.5 hover:opacity-80 transition-smooth"
                          onClick={() => setSelectedEvent(ev)}
                          data-ocid="kundali.transit_event.button"
                        >
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              background:
                                EVENT_DOT_MAP[ev.eventType] ??
                                "oklch(0.55 0.20 52)",
                            }}
                          />
                          <span
                            className="font-body text-xs truncate text-left"
                            style={{
                              color: "oklch(0.30 0.12 44)",
                              fontSize: "0.68rem",
                            }}
                          >
                            {ev.planet} {ev.eventType}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-3 px-4">
        {[
          ["Vakri", "orange"],
          ["Gochar", "blue"],
          ["Eclipse", "red"],
        ].map(([label]) => (
          <div key={label} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: EVENT_DOT_MAP[label] }}
            />
            <span
              className="font-body text-xs"
              style={{ color: "oklch(0.45 0.12 46)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Upcoming Events List */}
      <div className="px-4 mt-4">
        <h3
          className="font-display font-bold text-sm mb-3"
          style={{ color: "oklch(0.28 0.12 42)" }}
        >
          🗓 Upcoming Transits
        </h3>
        <div className="space-y-2">
          {upcomingEvents.map((ev, i) => (
            <motion.div
              key={ev.planet + ev.startDate}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <button
                type="button"
                className="w-full rounded-xl p-3 text-left transition-smooth hover:shadow-md"
                style={{
                  background: "oklch(0.94 0.06 68)",
                  border: `1.5px solid ${EVENT_COLOR_MAP[ev.colorCode] ?? "oklch(0.65 0.22 52)"}50`,
                }}
                onClick={() => setSelectedEvent(ev)}
                data-ocid={`kundali.upcoming_event.item.${i + 1}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display font-bold text-sm"
                      style={{ color: "oklch(0.28 0.12 42)" }}
                    >
                      {ev.planet} {ev.eventType}
                    </p>
                    <p
                      className="font-body text-xs mt-0.5 line-clamp-1"
                      style={{ color: "oklch(0.42 0.12 46)" }}
                    >
                      {ev.description}
                    </p>
                    <p
                      className="font-body text-xs mt-1"
                      style={{ color: "oklch(0.52 0.14 52)" }}
                    >
                      {ev.startDate}
                      {ev.endDate !== ev.startDate ? ` → ${ev.endDate}` : ""}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background: `${EVENT_COLOR_MAP[ev.colorCode] ?? "oklch(0.65 0.22 52)"}22`,
                      color:
                        EVENT_COLOR_MAP[ev.colorCode] ?? "oklch(0.45 0.18 52)",
                    }}
                  >
                    {ev.eventType}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "oklch(0.12 0.04 40 / 0.55)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setSelectedEvent(null)}
            data-ocid="kundali.transit_detail.modal"
          >
            <motion.div
              className="w-full max-w-md rounded-2xl overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.96 0.08 62) 0%, oklch(0.92 0.10 56) 100%)",
                border: `2px solid ${EVENT_COLOR_MAP[selectedEvent.colorCode] ?? "oklch(0.65 0.24 52)"}70`,
                boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${EVENT_COLOR_MAP[selectedEvent.colorCode]}, oklch(0.84 0.38 54))`,
                }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="font-display font-bold text-base"
                    style={{ color: "oklch(0.25 0.12 42)" }}
                  >
                    {selectedEvent.planet} {selectedEvent.eventType}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.88 0.06 66)",
                      color: "oklch(0.35 0.12 44)",
                    }}
                    data-ocid="kundali.transit_detail.close_button"
                  >
                    ✕
                  </button>
                </div>
                <p
                  className="font-body text-sm mb-2"
                  style={{ color: "oklch(0.35 0.12 44)" }}
                >
                  {selectedEvent.description}
                </p>
                <p
                  className="font-body text-xs mb-3"
                  style={{ color: "oklch(0.50 0.14 52)" }}
                >
                  📅 {selectedEvent.startDate}
                  {selectedEvent.endDate !== selectedEvent.startDate
                    ? ` → ${selectedEvent.endDate}`
                    : ""}
                </p>
                <div
                  className="rounded-xl p-3 mb-4"
                  style={{
                    background: "oklch(0.93 0.07 60)",
                    border: "1px solid oklch(0.72 0.24 54 / 0.30)",
                  }}
                >
                  <p
                    className="font-display font-bold text-xs mb-1"
                    style={{ color: "oklch(0.28 0.12 42)" }}
                  >
                    🙏 Remedy
                  </p>
                  <p
                    className="font-body text-sm"
                    style={{ color: "oklch(0.32 0.12 44)", lineHeight: 1.6 }}
                  >
                    {selectedEvent.remedy}
                  </p>
                </div>
                <button
                  type="button"
                  className="wax-seal-btn w-full py-2.5 text-sm"
                  onClick={() => {
                    downloadICS(selectedEvent);
                  }}
                  data-ocid="kundali.add_to_calendar.button"
                >
                  📆 Add to Calendar (.ics)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pro Teaser */}
      <div
        className="mx-4 mt-5 rounded-xl p-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.90 0.10 56) 0%, oklch(0.86 0.14 50) 100%)",
          border: "1.5px solid oklch(0.72 0.26 54 / 0.45)",
        }}
        data-ocid="kundali.pro_teaser.card"
      >
        <p
          className="font-display font-bold text-sm mb-1"
          style={{ color: "oklch(0.25 0.12 42)" }}
        >
          📄 Download Full Year Transit PDF
        </p>
        <p
          className="font-body text-xs mb-3"
          style={{ color: "oklch(0.42 0.12 46)" }}
        >
          Complete transit report with all Vakri, Gochar & Eclipse dates +
          personalized remedies
        </p>
        <span
          className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-xs"
          style={{
            background: "oklch(0.55 0.24 48)",
            color: "oklch(0.95 0.05 74)",
          }}
        >
          Pro ₹299/yr — Upgrade to unlock
        </span>
      </div>

      <JyotishDisclaimer />
    </div>
  );
}
