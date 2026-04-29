import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AHUTIS = [
  {
    num: 1,
    mantra: "ॐ अग्नये स्वाहा",
    transliteration: "Om Agnaye Swaha",
    deity: "Agni — Sacred Fire",
    purifies: "Purifies the body and home environment",
  },
  {
    num: 2,
    mantra: "ॐ वायवे स्वाहा",
    transliteration: "Om Vayave Swaha",
    deity: "Vayu — Wind",
    purifies: "Purifies the air and breath (prana)",
  },
  {
    num: 3,
    mantra: "ॐ सूर्याय स्वाहा",
    transliteration: "Om Suryaya Swaha",
    deity: "Surya — Sun",
    purifies: "Illuminates the mind and dispels darkness",
  },
  {
    num: 4,
    mantra: "ॐ विश्वावसे स्वाहा",
    transliteration: "Om Vishvavase Swaha",
    deity: "Vishvavasu — Universal Lord",
    purifies: "Purifies the cosmic intelligence",
  },
  {
    num: 5,
    mantra: "ॐ इन्द्राय स्वाहा",
    transliteration: "Om Indraya Swaha",
    deity: "Indra — King of Devas",
    purifies: "Bestows strength, protection, and victory",
  },
  {
    num: 6,
    mantra: "ॐ गणपतये स्वाहा",
    transliteration: "Om Ganapataye Swaha",
    deity: "Ganesh — Remover of Obstacles",
    purifies: "Removes all obstacles from the path",
  },
  {
    num: 7,
    mantra: "ॐ विष्णवे स्वाहा",
    transliteration: "Om Vishnavey Swaha",
    deity: "Vishnu — Preserver",
    purifies: "Sustains dharma and preserves what is good",
  },
  {
    num: 8,
    mantra: "ॐ रुद्राय स्वाहा",
    transliteration: "Om Rudraya Swaha",
    deity: "Rudra — Lord Shiva",
    purifies: "Destroys sins and negative karma",
  },
  {
    num: 9,
    mantra: "ॐ वरुणाय स्वाहा",
    transliteration: "Om Varunaya Swaha",
    deity: "Varuna — Waters",
    purifies: "Purifies emotions, relationships, and the heart",
  },
  {
    num: 10,
    mantra: "ॐ ब्रह्मणे स्वाहा",
    transliteration: "Om Brahmane Swaha",
    deity: "Brahma — Creator",
    purifies: "Awakens creative intelligence and wisdom",
  },
  {
    num: 11,
    mantra: "ॐ प्रजापतये स्वाहा",
    transliteration: "Om Prajapataye Swaha",
    deity: "Prajapati — Lord of Beings",
    purifies: "Protects all dependents and family",
  },
  {
    num: 12,
    mantra: "ॐ यमाय स्वाहा",
    transliteration: "Om Yamaya Swaha",
    deity: "Yama — Dharma",
    purifies: "Aligns actions with cosmic dharma and justice",
  },
  {
    num: 13,
    mantra: "ॐ कुबेराय स्वाहा",
    transliteration: "Om Kuberaya Swaha",
    deity: "Kubera — Wealth",
    purifies: "Invites prosperity aligned with righteous use",
  },
  {
    num: 14,
    mantra: "ॐ ईशानाय स्वाहा",
    transliteration: "Om Ishanaya Swaha",
    deity: "Ishan — Lord of Northeast",
    purifies: "Opens the direction of wisdom and knowledge",
  },
  {
    num: 15,
    mantra: "ॐ सोमाय स्वाहा",
    transliteration: "Om Somaya Swaha",
    deity: "Soma — Moon",
    purifies: "Calms the mind, cools emotions",
  },
  {
    num: 16,
    mantra: "ॐ मित्राय स्वाहा",
    transliteration: "Om Mitraya Swaha",
    deity: "Mitra — Divine Friendship",
    purifies: "Purifies relationships, bestows harmony",
  },
  {
    num: 17,
    mantra: "ॐ सवित्रे स्वाहा",
    transliteration: "Om Savitre Swaha",
    deity: "Savitri — Divine Inspiration",
    purifies: "Awakens intelligence and the Gayatri shakti",
  },
  {
    num: 18,
    mantra: "ॐ श्री कृष्णाय स्वाहा",
    transliteration: "Om Shri Krishnaya Swaha",
    deity: "Krishna — The Supreme",
    purifies: "Offers the entire ritual to the Supreme Lord",
  },
];

const STEPS = [
  {
    num: 1,
    title: "Purification — Achaman & Sankalpa",
    sanskrit: "आचमन, पवित्र, संकल्प",
    desc: "Sip water thrice saying 'Om Keshavaya Swaha'. Touch water to each sense organ. With pure intention, declare your Sankalpa (sacred intention) for this Havan.",
    duration: 5,
  },
  {
    num: 2,
    title: "Invocation — Ganesh Puja",
    sanskrit: "गणपति पूजन",
    desc: "Begin all sacred work with Ganesh. Light incense, offer flowers, recite: ॐ गं गणपतये नमः — Invite Lord Ganesh to remove all obstacles.",
    duration: 7,
  },
  {
    num: 3,
    title: "Kindling the Sacred Fire",
    sanskrit: "अग्नि प्रज्वलन",
    desc: "Place camphor in the Havan Kund with a small amount of ghee. Ignite with a match while chanting: ॐ भूर्भुवः स्वः — Breathe life into the fire with gentle breath.",
    duration: 5,
  },
  {
    num: 4,
    title: "The 18 Sacred Ahutis",
    sanskrit: "अष्टादश आहुति",
    desc: "With your copper spoon, offer sesame seeds + ghee mixture for each ahuti. Chant each mantra and pour the offering into the fire as you say 'Swaha'. Visualize each deity receiving your offering.",
    duration: 18,
  },
  {
    num: 5,
    title: "Main Recitation — Gita Verses",
    sanskrit: "गीता पाठ",
    desc: "Recite BG 4.24 (Brahmarpanam), BG 3.10, BG 4.30, BG 3.16 — the sacred fire verses of the Gita. After each verse, offer a spoonful of ghee into the fire.",
    duration: 15,
  },
  {
    num: 6,
    title: "Purnahuti — Complete Offering",
    sanskrit: "पूर्णाहुति",
    desc: "The final and most important offering. Place a whole coconut half-filled with ghee, sesame, and flowers into the fire. Chant: ॐ पूर्णमदः पूर्णमिदम् — The Purnahuti signifies complete surrender.",
    duration: 5,
  },
  {
    num: 7,
    title: "Closing — Aarti & Prasad",
    sanskrit: "आरती और प्रसाद",
    desc: "Perform Aarti with a ghee diya. Distribute the vibhuti (sacred ash) as prasad — apply a small amount to the forehead. Close with: ॐ शान्तिः शान्तिः शान्तिः",
    duration: 10,
  },
];

const GITA_VERSES = [
  {
    ref: "BG 4.24",
    sanskrit:
      "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",
    translation:
      "Brahman is the ritual, Brahman is the offering, Brahman pours the offering into the fire of Brahman. Brahman shall be reached by him who always sees Brahman in action.",
    when: "Recite at the beginning of each ahuti offering",
  },
  {
    ref: "BG 3.10",
    sanskrit:
      "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।\nअनेन प्रसविष्यध्वम् एष वोऽस्त्विष्टकामधुक्॥",
    translation:
      "In the beginning, the Creator created mankind together with yajna and said: 'By this you shall prosper; this shall be your wish-fulfilling cow.'",
    when: "Recite when kindling the fire",
  },
  {
    ref: "BG 4.30",
    sanskrit:
      "अपरे नियताहाराः प्राणान् प्राणेषु जुह्वति।\nसर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः॥",
    translation:
      "Others who perform yajna go to the eternal Brahman — all knowers of sacrifice have their impurities burnt away.",
    when: "Recite during the main offering phase",
  },
  {
    ref: "BG 3.16",
    sanskrit:
      "एवं प्रवर्तितं चक्रम् अनुवर्तयतीह यः।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥",
    translation:
      "He who does not follow the wheel of creation thus set in motion — living in sin, rejoicing in the senses — he lives in vain.",
    when: "Recite as reminder of sacred duty",
  },
];

const URBAN_MANTRAS = [
  {
    mantra: "ॐ गं गणपतये नमः",
    meaning: "Salutation to Ganesh, remover of obstacles",
  },
  {
    mantra: "गायत्री मंत्र",
    meaning: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
  },
  {
    mantra: "ॐ श्री कृष्णाय नमः",
    meaning: "Salutation to Lord Krishna — the Supreme",
  },
];

const AHUTI_COLORS = [
  "oklch(0.72 0.28 48)",
  "oklch(0.62 0.26 32)",
  "oklch(0.76 0.3 54)",
  "oklch(0.48 0.24 268)",
  "oklch(0.68 0.28 50)",
  "oklch(0.52 0.22 280)",
  "oklch(0.62 0.26 32)",
  "oklch(0.72 0.28 48)",
  "oklch(0.48 0.24 268)",
  "oklch(0.76 0.3 54)",
  "oklch(0.62 0.26 32)",
  "oklch(0.52 0.22 280)",
  "oklch(0.68 0.28 50)",
  "oklch(0.72 0.28 48)",
  "oklch(0.48 0.24 268)",
  "oklch(0.62 0.26 32)",
  "oklch(0.76 0.3 54)",
  "oklch(0.82 0.34 54)",
];

const LOCAL_KEY = "gita-havan-count";
type TabId = "intro" | "steps" | "ahutis" | "verses" | "urban";

export function HavanGuidePage() {
  const [activeTab, setActiveTab] = useState<TabId>("intro");
  const [guidedMode, setGuidedMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [havanCount, setHavanCount] = useState(0);
  const [expandedAhuti, setExpandedAhuti] = useState<number | null>(null);
  const [stepTimer, setStepTimer] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) setHavanCount(Number.parseInt(saved, 10));
  }, []);

  useEffect(() => {
    if (guidedMode) {
      const mins = STEPS[currentStep]?.duration ?? 5;
      setStepTimer(mins * 60);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setStepTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [guidedMode, currentStep]);

  function speakMantra(text: string) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "hi-IN";
    u.rate = 0.6;
    u.pitch = 0.85;
    window.speechSynthesis.speak(u);
  }

  function markStepDone(idx: number) {
    setCompletedSteps((prev) => new Set([...prev, idx]));
    if (idx === STEPS.length - 1) {
      const next = havanCount + 1;
      setHavanCount(next);
      localStorage.setItem(LOCAL_KEY, String(next));
      setGuidedMode(false);
    } else {
      setCurrentStep(idx + 1);
    }
  }

  const fmtTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  const TABS: { id: TabId; label: string }[] = [
    { id: "intro", label: "Introduction" },
    { id: "steps", label: "7 Steps" },
    { id: "ahutis", label: "18 Ahutis" },
    { id: "verses", label: "Gita Verses" },
    { id: "urban", label: "Urban Havan" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence>
        {guidedMode && (
          <motion.div
            key="guided"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
            style={{ background: "oklch(0.12 0.08 36 / 0.97)" }}
            data-ocid="havan.guided_mode"
          >
            <div className="text-center max-w-sm px-6">
              <div
                style={{
                  fontSize: "3rem",
                  color: "oklch(0.82 0.36 54)",
                  marginBottom: "1rem",
                }}
              >
                🔥
              </div>
              <p
                className="font-body text-xs tracking-widest mb-2"
                style={{ color: "oklch(0.82 0.36 54 / 0.7)" }}
              >
                STEP {currentStep + 1} OF {STEPS.length}
              </p>
              <h2
                className="font-display text-2xl font-bold italic mb-1"
                style={{ color: "oklch(0.92 0.04 72)" }}
              >
                {STEPS[currentStep].title}
              </h2>
              <p
                className="font-body text-sm italic mb-1"
                style={{ color: "oklch(0.72 0.28 48)" }}
              >
                {STEPS[currentStep].sanskrit}
              </p>
              <div
                className="my-4 p-4 rounded"
                style={{
                  background: "oklch(0.18 0.06 36 / 0.7)",
                  border: "1px solid oklch(0.82 0.36 54 / 0.3)",
                }}
              >
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.88 0.04 72)" }}
                >
                  {STEPS[currentStep].desc}
                </p>
              </div>
              <p
                className="font-display text-3xl font-bold italic mb-6"
                style={{ color: "oklch(0.76 0.3 54)" }}
              >
                {fmtTime(stepTimer)}
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  type="button"
                  onClick={() => markStepDone(currentStep)}
                  className="wax-seal-btn"
                  data-ocid="havan.guided_step_done"
                >
                  ✓ Done — Next Step
                </button>
                <button
                  type="button"
                  onClick={() => setGuidedMode(false)}
                  className="font-body text-xs italic"
                  style={{
                    color: "oklch(0.62 0.16 52)",
                    padding: "0.75rem 1rem",
                  }}
                  data-ocid="havan.guided_exit"
                >
                  Exit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="ornate-header mb-6">
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }} aria-hidden>
          🔥
        </div>
        <h1
          className="font-display font-bold italic mb-2"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "oklch(0.18 0.08 32)",
          }}
        >
          यज्ञ मार्गदर्शन
        </h1>
        <p
          className="font-body text-base italic"
          style={{ color: "oklch(0.52 0.18 46)" }}
        >
          Sacred Havan Guide — Complete Fire Ritual
        </p>
        <p
          className="font-body text-xs italic mt-2"
          style={{ color: "oklch(0.62 0.20 48)" }}
        >
          "In fire I offer all actions" — BG 4.24
        </p>
      </div>

      <div className="manuscript-card p-4 mb-6 flex items-center justify-between gap-4">
        <div>
          <p
            className="font-display text-xs italic font-bold"
            style={{ color: "oklch(0.52 0.18 46)" }}
          >
            Havans Performed
          </p>
          <p
            className="font-display text-3xl font-bold italic"
            style={{ color: "oklch(0.76 0.3 54)" }}
          >
            {havanCount}
          </p>
        </div>
        <button
          type="button"
          className="wax-seal-btn"
          onClick={() => {
            setGuidedMode(true);
            setCurrentStep(0);
            setCompletedSteps(new Set());
          }}
          data-ocid="havan.start_button"
        >
          🔥 Start Havan
        </button>
      </div>

      <div
        className="flex gap-1 mb-6 overflow-x-auto pb-1"
        data-ocid="havan.tabs"
      >
        {TABS.map((t) => (
          <button
            type="button"
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className="font-body text-xs italic whitespace-nowrap px-3 py-1.5 rounded transition-smooth"
            style={{
              background:
                activeTab === t.id
                  ? "oklch(0.76 0.3 54)"
                  : "oklch(0.92 0.05 70 / 0.5)",
              color:
                activeTab === t.id
                  ? "oklch(0.12 0.08 28)"
                  : "oklch(0.48 0.14 46)",
              border:
                activeTab === t.id
                  ? "1px solid oklch(0.68 0.28 50)"
                  : "1px solid oklch(0.76 0.12 60 / 0.4)",
              fontWeight: activeTab === t.id ? 700 : 400,
            }}
            data-ocid={`havan.tab.${t.id}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "intro" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="manuscript-card p-5">
            <p
              className="font-display text-sm font-bold italic mb-3"
              style={{ color: "oklch(0.18 0.08 32)" }}
            >
              What is a Havan?
            </p>
            <p
              className="font-body text-sm leading-relaxed italic"
              style={{ color: "oklch(0.32 0.10 36)" }}
            >
              A Havan (यज्ञ, Yagya) is the ancient Vedic fire ritual connecting
              earth to the divine. Sacred offerings placed into fire are
              transformed and carried to the cosmic realm. The fire (Agni) acts
              as the messenger between humans and the divine, purifying the
              environment, the mind, and the soul.
            </p>
          </div>
          <div className="manuscript-card p-5">
            <p
              className="font-display text-sm font-bold italic mb-3"
              style={{ color: "oklch(0.18 0.08 32)" }}
            >
              Three Types of Havan
            </p>
            <div className="space-y-2">
              {[
                {
                  type: "नित्य हवन — Nitya",
                  desc: "Daily fire ritual — the most sacred practice for maintaining cosmic order",
                },
                {
                  type: "नैमित्तिक — Naimittika",
                  desc: "Occasion-based — for festivals, births, marriages, and sacred events",
                },
                {
                  type: "काम्य — Kamya",
                  desc: "Wish-fulfillment ritual — specific intentions offered to the divine fire",
                },
              ].map((t) => (
                <div key={t.type} className="flex gap-3 items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "oklch(0.76 0.3 54)" }}
                  />
                  <div>
                    <p
                      className="font-display text-xs font-bold italic"
                      style={{ color: "oklch(0.28 0.10 36)" }}
                    >
                      {t.type}
                    </p>
                    <p
                      className="font-body text-xs italic"
                      style={{ color: "oklch(0.48 0.12 46)" }}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="manuscript-card p-5">
            <p
              className="font-display text-sm font-bold italic mb-3"
              style={{ color: "oklch(0.18 0.08 32)" }}
            >
              What You Need
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { item: "Havan Kund", note: "Clay or copper vessel" },
                { item: "Ghee", note: "Pure cow's ghee" },
                { item: "Sesame seeds", note: "Til — main offering" },
                { item: "Camphor", note: "Kapoor — for kindling" },
                { item: "Mango wood", note: "Or Peepal — preferred" },
                { item: "Copper spoon", note: "Sacred ladle" },
                { item: "Havan Samagri", note: "Sacred herb mixture" },
                { item: "Dry coconut", note: "Purnahuti offering" },
              ].map((m) => (
                <div
                  key={m.item}
                  className="p-2 rounded"
                  style={{
                    background: "oklch(0.92 0.06 68 / 0.5)",
                    border: "1px solid oklch(0.76 0.12 60 / 0.3)",
                  }}
                >
                  <p
                    className="font-display text-xs font-bold italic"
                    style={{ color: "oklch(0.28 0.10 36)" }}
                  >
                    {m.item}
                  </p>
                  <p
                    className="font-body text-[10px] italic"
                    style={{ color: "oklch(0.52 0.14 46)" }}
                  >
                    {m.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="manuscript-card p-4"
            style={{
              background: "oklch(0.62 0.26 32 / 0.08)",
              borderColor: "oklch(0.62 0.26 32 / 0.4)",
            }}
          >
            <p
              className="font-display text-xs font-bold italic mb-1"
              style={{ color: "oklch(0.52 0.22 30)" }}
            >
              ⚠ Safety Guidance
            </p>
            <p
              className="font-body text-xs italic leading-relaxed"
              style={{ color: "oklch(0.38 0.12 32)" }}
            >
              Ensure adequate ventilation. Keep children at a safe distance.
              Never leave fire unattended. Keep water nearby. In apartments, use
              the Urban Havan method with a camphor lamp only.
            </p>
          </div>
        </motion.div>
      )}

      {activeTab === "steps" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
          data-ocid="havan.steps_list"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="manuscript-card p-4"
              data-ocid={`havan.step.${i + 1}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold italic"
                  style={{
                    background: completedSteps.has(i)
                      ? "oklch(0.52 0.20 150)"
                      : "oklch(0.76 0.3 54 / 0.15)",
                    border: `2px solid ${completedSteps.has(i) ? "oklch(0.52 0.20 150)" : "oklch(0.76 0.3 54 / 0.5)"}`,
                    color: completedSteps.has(i)
                      ? "white"
                      : "oklch(0.72 0.28 50)",
                  }}
                >
                  {completedSteps.has(i) ? "✓" : step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-display text-sm font-bold italic"
                    style={{ color: "oklch(0.18 0.08 32)" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="font-body text-xs italic mb-2"
                    style={{ color: "oklch(0.62 0.22 48)" }}
                  >
                    {step.sanskrit} · {step.duration} min
                  </p>
                  <p
                    className="font-body text-xs italic leading-relaxed"
                    style={{ color: "oklch(0.38 0.10 38)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "ahutis" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p
            className="font-body text-xs italic text-center mb-4"
            style={{ color: "oklch(0.52 0.14 46)" }}
          >
            Tap any ahuti to expand details · Tap 🔊 to hear the mantra
          </p>
          <div className="space-y-2" data-ocid="havan.ahutis_list">
            {AHUTIS.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                data-ocid={`havan.ahuti.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full text-left manuscript-card p-3 transition-smooth"
                  onClick={() =>
                    setExpandedAhuti(expandedAhuti === i ? null : i)
                  }
                  aria-expanded={expandedAhuti === i}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xs font-bold"
                      style={{
                        background: `${AHUTI_COLORS[i]}22`,
                        border: `1.5px solid ${AHUTI_COLORS[i]}`,
                        color: AHUTI_COLORS[i],
                      }}
                    >
                      {a.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-body text-sm font-semibold italic"
                        style={{ color: "oklch(0.22 0.09 34)" }}
                      >
                        {a.mantra}
                      </p>
                      <p
                        className="font-body text-[10px] italic"
                        style={{ color: "oklch(0.52 0.14 46)" }}
                      >
                        {a.deity}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakMantra(a.mantra);
                      }}
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs"
                      style={{
                        background: "oklch(0.76 0.3 54 / 0.15)",
                        border: "1px solid oklch(0.76 0.3 54 / 0.4)",
                      }}
                      aria-label={`Speak mantra ${a.num}`}
                      data-ocid={`havan.ahuti_speak.${i + 1}`}
                    >
                      🔊
                    </button>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedAhuti === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-4 pb-3 pt-2"
                        style={{
                          background: "oklch(0.92 0.06 68 / 0.4)",
                          borderBottom: `1.5px solid ${AHUTI_COLORS[i]}40`,
                        }}
                      >
                        <p
                          className="font-body text-xs italic mb-1"
                          style={{ color: "oklch(0.48 0.16 46)" }}
                        >
                          <span className="font-bold">Transliteration:</span>{" "}
                          {a.transliteration}
                        </p>
                        <p
                          className="font-body text-xs italic"
                          style={{ color: "oklch(0.42 0.12 44)" }}
                        >
                          <span className="font-bold">Purifies:</span>{" "}
                          {a.purifies}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === "verses" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {GITA_VERSES.map((v, i) => (
            <motion.div
              key={v.ref}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="manuscript-card p-5"
              data-ocid={`havan.verse.${i + 1}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="font-display text-xs font-bold italic tracking-widest"
                  style={{ color: "oklch(0.76 0.3 54)" }}
                >
                  {v.ref}
                </span>
                <button
                  type="button"
                  onClick={() => speakMantra(v.sanskrit)}
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    background: "oklch(0.76 0.3 54 / 0.12)",
                    border: "1px solid oklch(0.76 0.3 54 / 0.4)",
                    color: "oklch(0.62 0.24 50)",
                  }}
                  data-ocid={`havan.verse_speak.${i + 1}`}
                >
                  🔊 Recite
                </button>
              </div>
              <p
                className="font-body text-sm leading-loose mb-3 whitespace-pre-line"
                style={{ color: "oklch(0.22 0.09 34)" }}
              >
                {v.sanskrit}
              </p>
              <p
                className="font-body text-xs italic leading-relaxed mb-2"
                style={{
                  color: "oklch(0.42 0.12 44)",
                  borderLeft: "2px solid oklch(0.76 0.3 54 / 0.5)",
                  paddingLeft: "0.75rem",
                }}
              >
                {v.translation}
              </p>
              <p
                className="font-body text-[10px] italic"
                style={{ color: "oklch(0.62 0.20 48 / 0.8)" }}
              >
                📍 {v.when}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "urban" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="manuscript-card p-5">
            <p
              className="font-display text-sm font-bold italic mb-2"
              style={{ color: "oklch(0.18 0.08 32)" }}
            >
              15-Minute Urban Havan
            </p>
            <p
              className="font-body text-xs italic leading-relaxed mb-4"
              style={{ color: "oklch(0.42 0.12 44)" }}
            >
              If you live in an apartment or cannot perform a full fire ritual,
              this simplified version using only a camphor lamp is fully
              accepted by Krishna. As BG 9.26 says: "Even a small sincere
              offering is received by me with love."
            </p>
            {[
              "Light a ghee diya or camphor lamp",
              "Sit facing East or North",
              "Recite each mantra 3 times with full focus",
              "After each mantra, pass your right hand over the flame (do not touch)",
              "Close with Gayatri Mantra 18 times",
              "Distribute water as prasad",
            ].map((step, idx) => (
              <div key={step} className="flex gap-2 mb-2">
                <span
                  className="font-display text-xs font-bold italic flex-shrink-0"
                  style={{ color: "oklch(0.76 0.3 54)", minWidth: "1.2rem" }}
                >
                  {idx + 1}.
                </span>
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.38 0.10 38)" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="manuscript-card p-5">
            <p
              className="font-display text-sm font-bold italic mb-3"
              style={{ color: "oklch(0.18 0.08 32)" }}
            >
              Key Urban Mantras
            </p>
            <div className="space-y-3">
              {URBAN_MANTRAS.map((m) => (
                <div
                  key={m.mantra}
                  className="p-3 rounded"
                  style={{
                    background: "oklch(0.92 0.06 68 / 0.4)",
                    border: "1px solid oklch(0.76 0.12 60 / 0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p
                      className="font-body text-sm font-semibold italic"
                      style={{ color: "oklch(0.22 0.09 34)" }}
                    >
                      {m.mantra}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        speakMantra(
                          m.meaning.includes("ॐ") ? m.meaning : m.mantra,
                        )
                      }
                      className="text-xs"
                      style={{ color: "oklch(0.62 0.22 48)" }}
                      data-ocid="havan.urban_speak"
                    >
                      🔊
                    </button>
                  </div>
                  <p
                    className="font-body text-[10px] italic"
                    style={{ color: "oklch(0.52 0.14 46)" }}
                  >
                    {m.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="verse-display">
            <p className="verse-sanskrit">
              ॐ पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।
            </p>
            <p className="verse-translation">
              "Whoever offers Me with devotion a leaf, a flower, a fruit, or
              water — that I accept." — BG 9.26
            </p>
          </div>
        </motion.div>
      )}

      <div className="text-center mt-8">
        <Link
          to="/"
          className="font-body text-xs italic"
          style={{ color: "oklch(0.58 0.20 48)" }}
          data-ocid="havan.back-home"
        >
          ← Return to Temple
        </Link>
      </div>
    </div>
  );
}
