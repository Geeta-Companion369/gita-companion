import { r as reactExports, j as jsxRuntimeExports, a as Link, m as motion, A as AnimatePresence } from "./index-CodWPqWB.js";
function PinkLotusPetals() {
  const [petals, setPetals] = reactExports.useState([]);
  const counter = reactExports.useRef(0);
  const PINK_COLORS = [
    "#FFB6C1",
    "#FF91A4",
    "#FFB7C5",
    "#FFC0CB",
    "#FF85A1",
    "#FFD1DC",
    "#F4A7B9"
  ];
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      const id = counter.current++;
      setPetals((prev) => [
        ...prev.slice(-16),
        {
          id,
          left: 3 + Math.random() * 94,
          duration: 8 + Math.random() * 5,
          size: 9 + Math.random() * 11,
          color: PINK_COLORS[id % PINK_COLORS.length],
          swayX: (Math.random() - 0.5) * 60
        }
      ]);
    }, 700);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "pointer-events-none fixed inset-0 z-10 overflow-hidden",
      "aria-hidden": true,
      children: petals.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: {
            opacity: 0,
            y: -24,
            x: `${p.left}vw`,
            rotate: 0
          },
          animate: {
            opacity: [0, 0.85, 0.6, 0],
            y: "115vh",
            x: [
              `${p.left}vw`,
              `${p.left + p.swayX * 0.4}vw`,
              `${p.left + p.swayX * 0.8}vw`,
              `${p.left + p.swayX}vw`
            ],
            rotate: [0, 120, 240, 360]
          },
          transition: { duration: p.duration, ease: "easeIn" },
          onAnimationComplete: () => setPetals((prev) => prev.filter((x) => x.id !== p.id)),
          style: {
            position: "absolute",
            top: -24,
            width: p.size,
            height: p.size * 1.6,
            background: `radial-gradient(ellipse at 40% 30%, white 0%, ${p.color} 60%, ${p.color}aa 100%)`,
            borderRadius: "50% 50% 40% 40%",
            filter: `drop-shadow(0 1px 3px ${p.color}80)`
          }
        },
        p.id
      ))
    }
  );
}
function LotusDivider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-5", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 h-px",
        style: {
          background: "linear-gradient(90deg, transparent, #F4A7B9, transparent)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        style: {
          color: "#E91E8C",
          fontSize: "1.2rem",
          filter: "drop-shadow(0 0 6px #FFB6C180)"
        },
        children: "🪷"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 h-px",
        style: {
          background: "linear-gradient(90deg, transparent, #F4A7B9, transparent)"
        }
      }
    )
  ] });
}
const EMPTY_PASSPORT = {
  babyName: "",
  dob: "",
  timeOfBirth: "",
  placeOfBirth: "",
  motherName: "",
  fatherName: "",
  gotra: "",
  nakshatra: "",
  rashi: "",
  lagna: "",
  tithi: "",
  rulingDeity: "",
  firstVerse: "",
  namkaranDate: "",
  firstMantra: "",
  sankalpa: ""
};
function loadPassport() {
  try {
    return {
      ...EMPTY_PASSPORT,
      ...JSON.parse(localStorage.getItem("baby-passport-v2") || "{}")
    };
  } catch {
    return EMPTY_PASSPORT;
  }
}
const JOURNEY_MONTHS = [
  {
    month: 1,
    weeks: "Weeks 1–4",
    title: "Soul Welcoming — Garbhadhana Samskara",
    icon: "🌱",
    mantraSanskrit: "ॐ नमो नारायणाय नमः",
    mantraTranslit: "Om Namo Narayanaya Namah",
    ayurveda: "This is Garbhadhana — the sacred conception ceremony. Light a diya of pure ghee before sleep. Consume warm milk with saffron and ashwagandha to prepare the body as a divine vessel.",
    modern: "Week 1–2: Fertilisation and implantation. Week 3–4: The neural tube that forms the brain and spinal cord is already developing.",
    mantraGuidance: "Chant 'Om Namo Narayanaya' 108 times every morning. The vibration enters the body at a cellular level. The soul choosing this womb can hear the welcome prayer.",
    gitaVerse: 'BG 10.20 — "I am the Self seated in the heart of all beings. I am the beginning, the middle and the end of all creatures." The soul entering is divine — greet it with this awareness.',
    story: "In the Puranas, before Prahlad was conceived, his mother performed sacred chanting for 40 days. Prahlad was born already knowing the name of Vishnu. Your intention shapes the soul before conception.",
    weekGuide: [
      "Week 1: Perform Garbhadhana prayer with diya and flowers. Chant 108 times.",
      "Week 2: Begin a daily journal — write one sacred thought each morning to the incoming soul.",
      "Week 3: Eat only sattvic food. No onion, garlic, or stimulants during this sacred window.",
      "Week 4: Play Vishnu Sahasranama softly each evening. Let the sound fill every corner of your home."
    ]
  },
  {
    month: 2,
    weeks: "Weeks 5–8",
    title: "Filling with Krishna — Divine Consciousness",
    icon: "🦚",
    mantraSanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
    mantraTranslit: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
    ayurveda: "Take saffron-milk daily (a pinch of saffron in warm cow's milk). According to Charaka Samhita, saffron in the second month promotes a calm temperament and divine complexion in the child.",
    modern: "Week 5–6: Baby's heart begins beating at around 21 days from conception. Week 7–8: Eyes, ears, and tiny limb buds are forming. The embryo is now 12mm long — the size of a raspberry.",
    mantraGuidance: "Recite the Mahamantra 108 times daily, placing your hands gently over your heart. The sound of Krishna's name is not ordinary — it is the highest vibration in creation. What the baby absorbs now becomes their permanent nature.",
    gitaVerse: 'BG 9.22 — "To those who worship Me with devotion, meditating on My transcendental form, I carry what they lack and preserve what they have." You are already protected.',
    story: "When Subhadra was pregnant with Abhimanyu, she would listen to Arjuna describe complex battle formations. Abhimanyu absorbed the Chakravyuh formation while still in the womb. Every word a mother hears is the child's first education.",
    weekGuide: [
      "Week 5: Begin morning chanting sessions — 20 minutes of Hare Krishna. The heartbeat is synchronising with sound.",
      "Week 6: Read any chapter of the Gita aloud — even if you don't understand every word, the Sanskrit vibration is medicine.",
      "Week 7: Write baby's first letter. Date it and seal it. Open it on their 16th birthday.",
      "Week 8: Light a diya each evening and sit quietly for 10 minutes, hand on womb, breathing deeply."
    ]
  },
  {
    month: 3,
    weeks: "Weeks 9–12",
    title: "First Conversations — Mother as First Guru",
    icon: "🗣️",
    mantraSanskrit: "ॐ श्री कृष्णाय नमः",
    mantraTranslit: "Om Sri Krishnaya Namah",
    ayurveda: "Increase ghee intake — one tablespoon of pure cow ghee in warm milk each morning. Ayurveda states ghee in Month 3 develops intelligence and emotional stability in the child.",
    modern: "Week 9–10: All vital organs are forming. Week 11–12: The baby is now called a fetus. Fingers are visible. The baby can make small movements though you cannot feel them yet.",
    mantraGuidance: "Speak to the baby every single morning. Tell them about Krishna — about Vrindavan, about the flute, about the divine childhood. Your voice is their entire universe right now.",
    gitaVerse: 'BG 7.9 — "I am the pure fragrance of the earth and the brightness in fire." Tell your baby: the fragrance of flowers, the warmth of the sun — these are all Krishna reaching out to you.',
    story: "Ancient texts describe how Valmiki composed the Ramayana while a pregnant woman sat in his ashram listening. Her son Lava was born already knowing the verses by heart. The mother's learning IS the child's inheritance.",
    weekGuide: [
      "Week 9: Begin reading the Bhagavad Gita aloud — one chapter each morning as you sit quietly.",
      "Week 10: Sing one bhajan daily. Even a simple 'Hare Krishna' sung with love is sufficient.",
      "Week 11: Walk barefoot on grass or earth each morning — connect the baby to Prithvi (earth energy).",
      "Week 12: Perform a small puja with flowers and incense — introduce the baby to the concept of offering."
    ]
  },
  {
    month: 4,
    weeks: "Weeks 13–17",
    title: "Baby's Ears Open — Sacred Sounds Enter",
    icon: "👂",
    mantraSanskrit: "ॐ गं गणपतये नमः",
    mantraTranslit: "Om Gam Ganapataye Namah",
    ayurveda: "Begin playing classical ragas. Raga Bhairav at dawn removes obstacles. Raga Yaman in evening promotes creativity and emotional depth. Charaka prescribes specific ragas for each trimester.",
    modern: "Week 14–15: Baby's ears are fully formed and hearing begins. Week 16–17: Baby can now hear your voice clearly and may turn toward familiar sounds. This is the most critical window for sound programming.",
    mantraGuidance: "Play Vishnu Sahasranama continuously in the background during the day. Recite Ganesha mantra 21 times each morning — the Vighnaharta removes all obstacles from this sacred journey.",
    gitaVerse: 'BG 13.14 — "Everywhere are His hands and legs, His eyes, heads and faces and He has ears everywhere. In this way the Supersoul exists, pervading everything." The divine hears what you chant to your baby.',
    story: "Krishna's own birth was preceded by prophecies, prayers, and sacred chanting by Devaki. Even in prison, she sang to him. He emerged knowing his divine mission. Sound carries the seeds of destiny.",
    weekGuide: [
      "Week 13: Place a small speaker near your womb — play Gita Chapter 15 Purushottama Yoga every morning.",
      "Week 14: The baby hears your heartbeat like a drum. Speak clearly and calmly — they associate your voice with safety.",
      "Week 15: Begin reading sacred stories aloud — Prahlad, Dhruva, Abhimanyu. These become the child's first mythology.",
      "Week 16–17: Sing to your baby in the bath, while cooking, while walking — normalise the practice of sacred song."
    ]
  },
  {
    month: 5,
    weeks: "Weeks 18–22",
    title: "Punsavana Samskara — Sacred Ceremony",
    icon: "🙏",
    mantraSanskrit: "ॐ महालक्ष्म्यै नमः",
    mantraTranslit: "Om Mahalakshmyai Namah",
    ayurveda: "In Month 5, Ayurveda prescribes Punsavana Samskara performed by a learned priest. Consume barleycorn mixed with honey. Avoid all tamasic environments — loud, violent, or distressing spaces harm the child's psyche.",
    modern: "Week 18–20: Baby's movements can now be felt for the first time (quickening). Week 21–22: The baby is about 27cm long. A sleep-wake cycle is established. Baby reacts to sounds with movement.",
    mantraGuidance: "Perform Punsavana with your family — light 108 diyas, offer flowers, chant Lakshmi mantra. Write your Sankalpa — the sacred promise you make to this soul. This ceremony programs the baby's subconscious with divine energy.",
    gitaVerse: `BG 3.11 — "By your sacrifice the devas will be pleased and by co-operation between men and devas, prosperity will reign for all." Your devotion and the divine's grace work together in this ceremony.`,
    story: "In Dvapara Yuga, Punsavana was performed on the third or fourth month and involved the whole village. Every well-wisher's prayers added to the child's spiritual protection. Even today, collective love creates a shield around the unborn soul.",
    weekGuide: [
      "Week 18: Feel your baby's first kick — place both hands over your womb, close your eyes, and thank Krishna.",
      "Week 19: Perform Punsavana Samskara if possible with a Vedic priest, or do a personal ceremony at home.",
      "Week 20: Write your Sankalpa (sacred promise) in a notebook. Date it. Read it to your baby aloud.",
      "Week 21–22: Begin a daily blessing ritual: 'May you be wise, kind, courageous, and always close to Krishna.'"
    ]
  },
  {
    month: 6,
    weeks: "Weeks 23–27",
    title: "Sattvic Living — Conscious Nourishment",
    icon: "🍃",
    mantraSanskrit: "ॐ नमः शिवाय",
    mantraTranslit: "Om Namah Shivaya",
    ayurveda: "Maximum sattvic diet now: organic cow's milk twice daily, pure ghee with every meal, fresh fruits only, soaked almonds each morning (promotes brain development), no processed food. Charaka: the 6th month governs the baby's emotional temperament.",
    modern: "Week 23–24: Baby's brain is rapidly developing. Week 25–26: Baby opens eyes for the first time. Week 27: Baby can now dream. The patterns of sleep and emotional mood are being set permanently this month.",
    mantraGuidance: "Shiva mantra grounds the energy — it provides stability, dissolves fear, and creates stillness. Chant especially when anxious. Place your hands over your heart and feel stillness as you chant.",
    gitaVerse: 'BG 17.8 — "Foods that are juicy, fatty, wholesome, and pleasing to the heart are dear to those in the mode of goodness." Eat only what you would offer to Krishna first.',
    story: "Kunti fasted and prayed before each pregnancy, eating only fruit and sattvic food. Each son emerged with the qualities of his conception period — Yudhishthira with righteousness, Arjuna with divine skill, Bhima with strength.",
    weekGuide: [
      "Week 23: Remove all rajasic/tamasic food from the home — this month programs the child's nervous system.",
      "Week 24: Play Ragas in the evening: Yaman at 6pm, Bhairavi before sleep.",
      "Week 25–26: Baby can see light through the womb. Hold a gentle lamp near your belly for a few minutes each day.",
      "Week 27: Baby may dream now. Send conscious, loving thoughts before sleep: they are received."
    ]
  },
  {
    month: 7,
    weeks: "Weeks 28–32",
    title: "Deepening Devotion — Simantonnayana",
    icon: "🕯️",
    mantraSanskrit: "ॐ दुं दुर्गायै नमः",
    mantraTranslit: "Om Dum Durgayai Namah",
    ayurveda: "Simantonnayana ceremony performed in Month 7 or 8. In Ayurveda, the baby is now receiving prana directly through the mother's spiritual practice. Increase meditation time. Oil massage with brahmi oil stimulates the baby's neural development.",
    modern: "Week 28–30: Baby is fully viable and can survive outside the womb. Week 31–32: All five senses are now active. The baby can taste amniotic fluid influenced by what mother eats and experiences.",
    mantraGuidance: "Durga mantra is the ultimate protection mantra. Chanting now covers the baby in a divine shield before the journey into the world. 108 repetitions daily in Month 7–8.",
    gitaVerse: 'BG 2.20 — "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval." Your baby is an eternal soul. Have no fear.',
    story: "When Uttara was pregnant during the Kurukshetra war and the Brahmastra weapon threatened her womb, Krishna himself entered the womb to protect Parikshit. Divine protection is real and always available. Ask for it.",
    weekGuide: [
      "Week 28: Perform Simantonnayana ceremony if possible. This is the 'parting of hair' ceremony — a celebration and blessing.",
      "Week 29–30: Increase Gita reading to full chapters. Baby is listening with developed hearing.",
      "Week 31: Begin preparing the baby's sacred space — decorate the room with peaceful images of deities.",
      "Week 32: Rest more. Every minute of deep rest translates into the baby's nervous system being calm and regulated."
    ]
  },
  {
    month: 8,
    weeks: "Weeks 33–36",
    title: "Preparing the Sacred Arrival",
    icon: "🏠",
    mantraSanskrit: "ॐ श्री रामाय नमः",
    mantraTranslit: "Om Sri Ramaya Namah",
    ayurveda: "In Month 8, the vital essence (ojas) moves between mother and baby. Ayurveda cautions that stress and grief in this month can transfer directly to the baby's constitution. Deep rest, light food, warm spiced milk, and constant devotion.",
    modern: "Week 33–34: Baby gains 200–250 grams per week. Week 35–36: Baby is in head-down position preparing for birth. The lungs are almost fully mature. Baby recognises the mother's voice as the most comforting sound.",
    mantraGuidance: "Rama mantra — the name that dissolves all karma. As the birth approaches, chanting Rama protects the passage. Mothers in Ayurveda were traditionally surrounded by women chanting when labor began.",
    gitaVerse: 'BG 18.66 — "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear." The Lord will deliver this soul safely. Do not fear the birth.',
    story: "Devaki sang sacred songs in a prison cell with chains on her wrists. She had no midwives, no luxuries, no support. Yet the most divine being in all of creation emerged from that sacred womb — because her heart was pure.",
    weekGuide: [
      "Week 33: Prepare a sacred birth altar — photos of your deity, fresh flowers, diya. Light it daily.",
      "Week 34: Practice birth breathing: inhale for 4 counts, hold, exhale for 8. This is pranayama for labor.",
      "Week 35: Place a Bhagavad Gita in the baby's room. It will radiate protective energy even before the child can read.",
      "Week 36: Write a letter to the baby describing who you were before they arrived, and who you have become."
    ]
  },
  {
    month: 9,
    weeks: "Weeks 37–40",
    title: "Jatakarma — The Sacred Arrival",
    icon: "🌸",
    mantraSanskrit: "हरे कृष्ण हरे राम",
    mantraTranslit: "Hare Krishna Hare Rama",
    ayurveda: "The moment of birth is itself a sacred ceremony in Vedic tradition. Immediately after birth: the father whispers 'Hare Krishna' and OM into the baby's right ear. A drop of honey mixed with ghee is placed on the tongue — this is Jatakarma. This programs the child's first experience of taste as sweetness.",
    modern: "Week 37–38: Baby is considered full-term. Week 39–40: Baby descends into the birth canal. The first breath expands the lungs and activates the independent nervous system for the first time.",
    mantraGuidance: "The Mahamantra is the most complete protection for the moment of birth. Ensure it is playing softly in the birth room. Whisper it yourself if possible. The child's first hearing experience should be the name of God.",
    gitaVerse: 'BG 2.13 — "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change." This birth is one chapter in an eternal story.',
    story: "At Krishna's own birth, the prison doors flew open, the guards slept, and Vasudeva carried him across the Yamuna at midnight in a storm. A divine serpent shielded them. The universe itself reorganised to ensure his safe arrival. So too will the universe protect this sacred birth.",
    weekGuide: [
      "Week 37: Pack the Jatakarma essentials: honey, ghee, a small diya, a Gita, sacred thread for the baby.",
      "Week 38: Write down the first three things you will say to the baby when they arrive.",
      "Week 39: Ask your family to gather the morning after birth for a short prayer of gratitude.",
      "Week 40: At the moment of birth — before the first weighing, before the photos — whisper 'Hare Krishna' into the right ear. This is the most important thing."
    ]
  }
];
const SATTVIC_FOODS = [
  {
    name: "Saffron Milk",
    sanskrit: "केसर दुग्ध",
    benefit: "Divine complexion, spiritual mood, calms the womb",
    month: "All Months"
  },
  {
    name: "Pure Cow Ghee",
    sanskrit: "शुद्ध गाय का घृत",
    benefit: "Brain development, intelligence, emotional balance",
    month: "Month 1–9"
  },
  {
    name: "Soaked Almonds",
    sanskrit: "भिगोये बादाम",
    benefit: "Brain development, memory, visual development",
    month: "Month 2–9"
  },
  {
    name: "Pomegranate Juice",
    sanskrit: "अनार रस",
    benefit: "Blood building, iron, protects baby's brain",
    month: "Month 3–9"
  },
  {
    name: "Sesame with Jaggery",
    sanskrit: "तिल गुड़",
    benefit: "Calcium, bone formation, dharmic energy",
    month: "Month 4–7"
  },
  {
    name: "Coconut Water",
    sanskrit: "नारियल जल",
    benefit: "Electrolytes, cooling, digestive comfort",
    month: "All Months"
  },
  {
    name: "Banana with Honey",
    sanskrit: "केला मधु",
    benefit: "Energy, potassium, emotional sweetness",
    month: "All Months"
  },
  {
    name: "Moong Dal Khichdi",
    sanskrit: "मूंग दाल खिचड़ी",
    benefit: "Easily digestible, sattvic sustenance, peace",
    month: "All Months"
  },
  {
    name: "Fresh Figs & Dates",
    sanskrit: "अंजीर एवं खजूर",
    benefit: "Iron, strength, warmth for easy labor",
    month: "Month 7–9"
  },
  {
    name: "Brahmi Leaves",
    sanskrit: "ब्राह्मी",
    benefit: "Memory, intelligence, calms the nervous system",
    month: "Month 2–8"
  }
];
const DAILY_VERSES_PREGNANCY = [
  {
    ref: "BG 10.20",
    text: "I am the Self, O Arjuna, dwelling in the heart of all beings. I am the beginning, middle and end of all creatures.",
    hindi: "मैं समस्त प्राणियों के हृदय में आत्मा हूँ।"
  },
  {
    ref: "BG 9.22",
    text: "For those who worship Me with devotion — I carry what they lack and preserve what they have.",
    hindi: "मैं अपने भक्तों का जो उनके पास नहीं है वह देता हूँ।"
  },
  {
    ref: "BG 7.9",
    text: "I am the pure fragrance of earth and the brightness in fire. I am the life in all existence.",
    hindi: "मैं पृथ्वी की सुगन्ध और अग्नि का तेज हूँ।"
  },
  {
    ref: "BG 2.20",
    text: "The soul is never born nor dies. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
    hindi: "आत्मा न कभी जन्म लेती है, न मरती है।"
  },
  {
    ref: "BG 18.66",
    text: "Surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.",
    hindi: "मेरी शरण में आ जा, मैं तुझे सभी पापों से मुक्त कर दूँगा।"
  },
  {
    ref: "BG 13.28",
    text: "One who sees the Supreme Lord equally present everywhere does not degrade the self — thus attains the highest goal.",
    hindi: "जो सर्वत्र परमात्मा को देखता है, वह परम गति पाता है।"
  },
  {
    ref: "BG 3.11",
    text: "By your sacrifice the devas will be pleased — nourish each other — and thus you shall attain the highest prosperity.",
    hindi: "यज्ञ द्वारा देवताओं को प्रसन्न करते हुए परस्पर समृद्ध हों।"
  }
];
function PassportField({
  label,
  fieldKey,
  placeholder,
  data,
  onUpdate
}) {
  const inputId = `passport-${fieldKey}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: inputId,
        className: "block text-[0.58rem] tracking-[0.18em] uppercase mb-1 font-body font-semibold",
        style: { color: "#C2185B" },
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: inputId,
        type: "text",
        value: data[fieldKey],
        onChange: (e) => onUpdate({ ...data, [fieldKey]: e.target.value }),
        placeholder,
        "aria-label": label,
        className: "w-full px-3 py-2 text-sm font-body rounded-lg outline-none transition-all duration-200",
        style: {
          background: "rgba(255,182,193,0.18)",
          border: "1.5px solid rgba(233,30,140,0.28)",
          color: "#880E4F"
        }
      }
    )
  ] });
}
function SpiritualPassport({
  data,
  onUpdate
}) {
  const [page, setPage] = reactExports.useState("cover");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", style: { perspective: "1200px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
    page === "cover" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, rotateY: -20 },
        animate: { opacity: 1, rotateY: 0 },
        exit: { opacity: 0, rotateY: 20 },
        transition: { duration: 0.45 },
        className: "rounded-2xl overflow-hidden",
        style: {
          background: "linear-gradient(160deg, #1A237E 0%, #0D1B6E 40%, #0a1260 100%)",
          border: "3px solid rgba(255,195,77,0.55)",
          boxShadow: "0 16px 56px rgba(0,0,0,0.45), 0 0 40px rgba(233,30,140,0.08)",
          minHeight: 360
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-[5px]",
              style: {
                background: "linear-gradient(90deg, #FFB300, #FFD740, #FFC107, #FFD740, #FFB300)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center py-8 px-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                  backgroundImage: "repeating-linear-gradient(45deg, #FFD740 0px, #FFD740 1px, transparent 1px, transparent 9px)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "relative z-10 mb-2",
                style: {
                  fontSize: "2.2rem",
                  filter: "drop-shadow(0 0 12px rgba(255,215,0,0.7))"
                },
                children: "🪷"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-[0.62rem] tracking-[0.3em] uppercase mb-1 relative z-10",
                style: { color: "rgba(255,215,0,0.7)" },
                children: "SPIRITUAL PASSPORT"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xl font-bold italic mb-1 relative z-10",
                style: {
                  color: "#FFD740",
                  textShadow: "0 0 20px rgba(255,215,0,0.5)"
                },
                children: "Baby's Spiritual Passport"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm mb-3 relative z-10",
                style: { color: "rgba(255,215,0,0.75)" },
                children: "भारतीय आध्यात्मिक पासपोर्ट"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-3xl mb-4 relative z-10",
                style: {
                  color: "#FFD740",
                  textShadow: "0 0 24px rgba(255,215,0,0.8)"
                },
                children: "ॐ"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "w-28 h-28 rounded-full flex flex-col items-center justify-center mb-4 relative z-10",
                style: {
                  background: "rgba(255,182,193,0.15)",
                  border: "2.5px solid rgba(255,215,0,0.5)",
                  boxShadow: "0 0 20px rgba(255,182,193,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2rem" }, children: "👶" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[0.52rem] text-center mt-1",
                      style: { color: "rgba(255,215,0,0.65)" },
                      children: "Baby's Sacred Photo"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic text-lg relative z-10 min-h-[1.5rem]",
                style: { color: "#FFD740" },
                children: data.babyName || "Sacred Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("personal"),
                "data-ocid": "passport.open_button",
                className: "mt-5 px-7 py-2.5 rounded-xl font-display text-sm font-bold italic relative z-10 transition-all duration-200 hover:scale-105 active:scale-95",
                style: {
                  background: "linear-gradient(135deg, #FFD740, #FFB300)",
                  color: "#1A237E"
                },
                children: "Open Passport →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-[5px]",
              style: {
                background: "linear-gradient(90deg, #FFB300, #FFD740, #FFC107, #FFD740, #FFB300)"
              }
            }
          )
        ]
      },
      "cover"
    ),
    page === "personal" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "rounded-2xl p-5",
        style: {
          background: "linear-gradient(160deg, rgba(255,240,245,0.98) 0%, rgba(255,228,235,0.98) 100%)",
          border: "2px solid rgba(233,30,140,0.25)",
          boxShadow: "0 8px 32px rgba(233,30,140,0.12)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E91E8C" }, children: "🪷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-sm font-bold italic",
                style: { color: "#C2185B" },
                children: "Page 1 — Personal Details"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "ml-auto font-body text-[0.55rem]",
                style: { color: "#F48FB1" },
                children: "INDIA"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Baby's Sacred Name",
              fieldKey: "babyName",
              placeholder: "e.g., Arjun, Priya, Kavya",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Date of Birth",
              fieldKey: "dob",
              placeholder: "DD / MM / YYYY",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Time of Birth",
              fieldKey: "timeOfBirth",
              placeholder: "HH:MM AM/PM",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Place of Birth",
              fieldKey: "placeOfBirth",
              placeholder: "City, Hospital Name",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Mother's Name",
              fieldKey: "motherName",
              placeholder: "Mother's full sacred name",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Father's Name",
              fieldKey: "fatherName",
              placeholder: "Father's full sacred name",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Gotra (Family Lineage)",
              fieldKey: "gotra",
              placeholder: "e.g., Kashyap, Bharadwaj",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("cover"),
                "data-ocid": "passport.prev_button",
                className: "flex-1 py-2.5 rounded-xl text-xs font-body italic transition-all hover:scale-105",
                style: {
                  background: "rgba(244,167,185,0.22)",
                  color: "#C2185B",
                  border: "1px solid rgba(233,30,140,0.2)"
                },
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("celestial"),
                "data-ocid": "passport.next_button",
                className: "flex-1 py-2.5 rounded-xl text-xs font-display font-bold italic transition-all hover:scale-105",
                style: {
                  background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                  color: "white"
                },
                children: "Celestial Details →"
              }
            )
          ] })
        ]
      },
      "personal"
    ),
    page === "celestial" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "rounded-2xl p-5",
        style: {
          background: "linear-gradient(160deg, rgba(255,240,245,0.98) 0%, rgba(255,228,235,0.98) 100%)",
          border: "2px solid rgba(233,30,140,0.25)",
          boxShadow: "0 8px 32px rgba(233,30,140,0.12)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E91E8C" }, children: "⭐" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-sm font-bold italic",
                style: { color: "#C2185B" },
                children: "Page 2 — Celestial Details"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Birth Nakshatra (Birth Star)",
              fieldKey: "nakshatra",
              placeholder: "e.g., Rohini, Pushya, Ashwini",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Birth Rashi (Moon Sign)",
              fieldKey: "rashi",
              placeholder: "e.g., Vrishabha, Mithuna, Karka",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Ascendant — Lagna",
              fieldKey: "lagna",
              placeholder: "e.g., Simha, Kanya, Tula",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Birth Tithi (Lunar Date)",
              fieldKey: "tithi",
              placeholder: "e.g., Panchami, Ekadashi, Purnima",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Ruling Deity of Nakshatra",
              fieldKey: "rulingDeity",
              placeholder: "e.g., Chandra, Surya, Brihaspati",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "First Gita Verse Recited at Birth",
              fieldKey: "firstVerse",
              placeholder: "e.g., BG 2.20 — The soul is eternal...",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("personal"),
                "data-ocid": "passport.prev_button",
                className: "flex-1 py-2.5 rounded-xl text-xs font-body italic transition-all hover:scale-105",
                style: {
                  background: "rgba(244,167,185,0.22)",
                  color: "#C2185B",
                  border: "1px solid rgba(233,30,140,0.2)"
                },
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("blessings"),
                "data-ocid": "passport.next_button",
                className: "flex-1 py-2.5 rounded-xl text-xs font-display font-bold italic transition-all hover:scale-105",
                style: {
                  background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                  color: "white"
                },
                children: "Sacred Blessings →"
              }
            )
          ] })
        ]
      },
      "celestial"
    ),
    page === "blessings" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "rounded-2xl p-5",
        style: {
          background: "linear-gradient(160deg, rgba(255,240,245,0.98) 0%, rgba(255,228,235,0.98) 100%)",
          border: "2px solid rgba(233,30,140,0.25)",
          boxShadow: "0 8px 32px rgba(233,30,140,0.12)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E91E8C" }, children: "🌸" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-sm font-bold italic",
                style: { color: "#C2185B" },
                children: "Page 3 — Sacred Blessings"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "Naming Ceremony Date (Namkaran)",
              fieldKey: "namkaranDate",
              placeholder: "11th day ceremony — DD/MM/YYYY",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PassportField,
            {
              label: "First Mantra Given at Birth",
              fieldKey: "firstMantra",
              placeholder: "e.g., OM, Hare Krishna, Om Namo Narayanaya",
              data,
              onUpdate
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-3 rounded-xl mb-3",
              style: {
                background: "rgba(233,30,140,0.07)",
                border: "1.5px solid rgba(233,30,140,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[0.62rem] font-bold mb-1",
                    style: { color: "#E91E8C" },
                    children: "✦ Blessings from Krishna — BG 2.20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic leading-relaxed",
                    style: { color: "#880E4F", lineHeight: 1.85 },
                    children: '"The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."'
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[0.58rem] mt-1.5 font-semibold",
                    style: { color: "#E91E8C" },
                    children: "— Bhagavad Gita, Chapter 2, Verse 20"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "sankalpa-textarea",
              className: "block font-body text-[0.58rem] tracking-[0.18em] uppercase mb-1 font-semibold",
              style: { color: "#C2185B" },
              children: "Sacred Sankalpa — Parent's Promise to This Soul"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "sankalpa-textarea",
              value: data.sankalpa,
              onChange: (e) => onUpdate({ ...data, sankalpa: e.target.value }),
              placeholder: "Write your sacred promise to this eternal soul that has chosen you as its guide...",
              rows: 4,
              "aria-label": "Sacred Sankalpa",
              className: "w-full px-3 py-2 text-sm font-body rounded-xl resize-none outline-none mb-3 transition-all",
              style: {
                background: "rgba(255,182,193,0.18)",
                border: "1.5px solid rgba(233,30,140,0.25)",
                color: "#880E4F"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("celestial"),
                "data-ocid": "passport.prev_button",
                className: "flex-1 py-2.5 rounded-xl text-xs font-body italic transition-all hover:scale-105",
                style: {
                  background: "rgba(244,167,185,0.22)",
                  color: "#C2185B",
                  border: "1px solid rgba(233,30,140,0.2)"
                },
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage("cover"),
                "data-ocid": "passport.done_button",
                className: "flex-1 py-2.5 rounded-xl text-xs font-display font-bold italic transition-all hover:scale-105",
                style: {
                  background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                  color: "white"
                },
                children: "Save & Return ✓"
              }
            )
          ] })
        ]
      },
      "blessings"
    )
  ] }) });
}
function GarbhaSanskarPage() {
  const [tab, setTab] = reactExports.useState("journey");
  const [passportData, setPassportData] = reactExports.useState(loadPassport);
  const [peacefulMode, setPeacefulMode] = reactExports.useState(false);
  const [expandedMonth, setExpandedMonth] = reactExports.useState(1);
  const todayVerse = DAILY_VERSES_PREGNANCY[(/* @__PURE__ */ new Date()).getDate() % DAILY_VERSES_PREGNANCY.length];
  function updatePassport(d) {
    setPassportData(d);
    try {
      localStorage.setItem("baby-passport-v2", JSON.stringify(d));
    } catch {
    }
  }
  const TABS = [
    { key: "journey", label: "280-Day Journey", icon: "🌸" },
    { key: "passport", label: "Baby's Passport", icon: "📘" },
    { key: "milestones", label: "Milestones", icon: "🌟" },
    { key: "food", label: "Sattvic Foods", icon: "🍃" },
    { key: "music", label: "Sacred Music", icon: "🎵" }
  ];
  const pageStyle = {
    background: "linear-gradient(160deg, #FFF0F5 0%, #FFE4EC 30%, #FFF5F8 65%, #FFEBF3 100%)",
    minHeight: "100vh"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: pageStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PinkLotusPetals, {}),
    peacefulMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        style: {
          background: "rgba(255,240,248,0.96)",
          backdropFilter: "blur(18px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg w-full px-8 py-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-5xl mb-4",
              style: { filter: "drop-shadow(0 0 12px #FFB6C1)" },
              children: "🪷"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-2xl font-bold italic mb-3",
              style: { color: "#C2185B" },
              children: "Peaceful Reading Mode"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-base italic leading-relaxed mb-2",
              style: { color: "#880E4F", lineHeight: 2 },
              children: todayVerse.text
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm mb-1", style: { color: "#F48FB1" }, children: todayVerse.hindi }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-display text-xs font-bold mb-6",
              style: { color: "#E91E8C" },
              children: [
                "— ",
                todayVerse.ref
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPeacefulMode(false),
              "data-ocid": "garbha.peaceful_mode_close",
              className: "px-6 py-2.5 rounded-xl font-display text-sm font-bold italic transition-all hover:scale-105",
              style: {
                background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                color: "white"
              },
              children: "Return to Journey"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative z-20 px-4 py-3 sticky top-0",
        style: {
          background: "rgba(255,228,236,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1.5px solid rgba(233,30,140,0.2)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "text-xs font-body italic",
              style: { color: "#E91E8C" },
              children: "← Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-[0.58rem] tracking-[0.28em] uppercase font-bold",
                style: { color: "rgba(194,24,91,0.85)" },
                children: "🪷 Garbha Sanskar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-base font-bold italic",
                style: {
                  color: "#880E4F",
                  textShadow: "0 0 16px rgba(233,30,140,0.3)"
                },
                children: "Sacred Womb Pathway"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPeacefulMode(true),
              "data-ocid": "garbha.peaceful_mode_toggle",
              className: "text-[0.6rem] px-2.5 py-1 rounded-full font-body transition-all hover:scale-105",
              style: {
                background: "rgba(233,30,140,0.12)",
                color: "#C2185B",
                border: "1px solid rgba(233,30,140,0.25)"
              },
              children: "🌸 Peace"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-5 relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          className: "mb-4 p-4 rounded-2xl",
          style: {
            background: "rgba(233,30,140,0.07)",
            border: "1.5px solid rgba(233,30,140,0.2)",
            boxShadow: "0 4px 20px rgba(233,30,140,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E91E8C" }, children: "✦" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-[0.58rem] tracking-[0.22em] uppercase font-bold",
                  style: { color: "#E91E8C" },
                  children: "Daily Verse for Your Baby"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic leading-relaxed",
                style: { color: "#880E4F", lineHeight: 1.95 },
                children: todayVerse.text
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-1", style: { color: "#F48FB1" }, children: todayVerse.hindi }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-display text-[0.6rem] font-bold mt-1",
                style: { color: "#E91E8C" },
                children: [
                  "— ",
                  todayVerse.ref
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-2 mb-4 overflow-x-auto pb-1",
          style: { scrollbarWidth: "none" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/16-sanskaar",
                "data-ocid": "garbha.link_sanskaar",
                className: "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.65rem] font-body italic transition-all hover:scale-105",
                style: {
                  background: "rgba(233,30,140,0.1)",
                  border: "1px solid rgba(233,30,140,0.25)",
                  color: "#C2185B"
                },
                children: "🙏 16 Sanskaar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/mala",
                "data-ocid": "garbha.link_mantra",
                className: "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.65rem] font-body italic transition-all hover:scale-105",
                style: {
                  background: "rgba(233,30,140,0.1)",
                  border: "1px solid rgba(233,30,140,0.25)",
                  color: "#C2185B"
                },
                children: "📿 Santan Gopal Mantra"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/guidance",
                "data-ocid": "garbha.link_krishna",
                className: "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.65rem] font-body italic transition-all hover:scale-105",
                style: {
                  background: "rgba(233,30,140,0.1)",
                  border: "1px solid rgba(233,30,140,0.25)",
                  color: "#C2185B"
                },
                children: "💬 Ask Krishna"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex gap-1.5 mb-5 overflow-x-auto pb-1",
          style: { scrollbarWidth: "none" },
          children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setTab(t.key),
              "data-ocid": `garbha.tab.${t.key}`,
              className: "flex-shrink-0 flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-body italic transition-all duration-200",
              style: tab === t.key ? {
                background: "linear-gradient(135deg, #E91E8C, #C2185B)",
                color: "white",
                border: "none"
              } : {
                background: "rgba(255,182,193,0.3)",
                border: "1.5px solid rgba(233,30,140,0.2)",
                color: "#C2185B"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.icon }),
                t.label
              ]
            },
            t.key
          ))
        }
      ),
      tab === "journey" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-2xl mb-1",
            style: {
              background: "rgba(255,182,193,0.25)",
              border: "1.5px solid rgba(233,30,140,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-base font-bold italic mb-2",
                  style: { color: "#880E4F" },
                  children: "280-Day Sacred Journey"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic leading-relaxed",
                  style: { color: "#C2185B", lineHeight: 1.9 },
                  children: "Every day of pregnancy is a sacred gift. The Gita teaches: the soul choosing your womb is divine. Fill these 280 days with mantra, love, and Krishna's presence. What the mother thinks, hears, and feels — the child receives forever."
                }
              )
            ]
          }
        ),
        JOURNEY_MONTHS.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: idx * 0.04 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setExpandedMonth(expandedMonth === m.month ? null : m.month),
                  "data-ocid": `garbha.month.${m.month}`,
                  className: "w-full text-left p-4 rounded-2xl transition-all duration-200",
                  style: {
                    background: expandedMonth === m.month ? "rgba(233,30,140,0.12)" : "rgba(255,182,193,0.25)",
                    border: expandedMonth === m.month ? "1.5px solid rgba(233,30,140,0.35)" : "1.5px solid rgba(244,167,185,0.35)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl flex-shrink-0", children: m.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-display text-sm font-bold italic",
                            style: { color: "#880E4F" },
                            children: [
                              "Month ",
                              m.month,
                              " — ",
                              m.title
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-[0.6rem]",
                            style: { color: "#F48FB1" },
                            children: m.weeks
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display text-xs font-bold italic mt-1",
                          style: { color: "#E91E8C" },
                          children: m.mantraSanskrit
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-[0.6rem] italic",
                          style: { color: "#F48FB1" },
                          children: m.mantraTranslit
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs flex-shrink-0",
                        style: { color: "#E91E8C" },
                        children: expandedMonth === m.month ? "▲" : "▼"
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expandedMonth === m.month && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.3 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 pb-2 pt-1 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl",
                        style: {
                          background: "rgba(255,255,255,0.7)",
                          border: "1px solid rgba(244,167,185,0.4)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-[0.62rem] font-bold tracking-wider uppercase mb-1.5",
                              style: { color: "#E91E8C" },
                              children: "🔬 Baby's Development"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-xs leading-relaxed",
                              style: { color: "#880E4F", lineHeight: 1.85 },
                              children: m.modern
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl",
                        style: {
                          background: "rgba(255,182,193,0.2)",
                          border: "1px solid rgba(233,30,140,0.2)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-[0.62rem] font-bold tracking-wider uppercase mb-1.5",
                              style: { color: "#C2185B" },
                              children: "🌿 Ayurvedic Guidance"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-xs leading-relaxed",
                              style: { color: "#880E4F", lineHeight: 1.85 },
                              children: m.ayurveda
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl",
                        style: {
                          background: "rgba(255,240,248,0.8)",
                          border: "1px solid rgba(244,167,185,0.45)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-[0.62rem] font-bold tracking-wider uppercase mb-1.5",
                              style: { color: "#E91E8C" },
                              children: "📿 Mantra Guidance"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-xs leading-relaxed",
                              style: { color: "#880E4F", lineHeight: 1.85 },
                              children: m.mantraGuidance
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "p-3 rounded-xl",
                        style: {
                          background: "rgba(233,30,140,0.07)",
                          border: "1.5px solid rgba(233,30,140,0.18)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-body text-xs italic leading-relaxed",
                            style: { color: "#880E4F", lineHeight: 1.9 },
                            children: [
                              "✦ ",
                              m.gitaVerse
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl",
                        style: {
                          background: "rgba(255,255,255,0.65)",
                          border: "1px solid rgba(244,167,185,0.3)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-[0.62rem] font-bold tracking-wider uppercase mb-2",
                              style: { color: "#C2185B" },
                              children: "📅 Week-by-Week Practice"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: m.weekGuide.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "flex-shrink-0 text-[0.6rem] font-bold mt-0.5",
                                style: { color: "#E91E8C" },
                                children: "🪷"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-body text-xs",
                                style: { color: "#880E4F", lineHeight: 1.8 },
                                children: w
                              }
                            )
                          ] }, w.slice(0, 30))) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl",
                        style: {
                          background: "rgba(255,228,235,0.6)",
                          border: "1px solid rgba(233,30,140,0.15)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-[0.62rem] font-bold tracking-wider uppercase mb-1.5",
                              style: { color: "#E91E8C" },
                              children: "📖 Sacred Story"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-[0.65rem] italic leading-relaxed",
                              style: { color: "#C2185B", lineHeight: 1.85 },
                              children: m.story
                            }
                          )
                        ]
                      }
                    )
                  ] })
                }
              ) }),
              idx < JOURNEY_MONTHS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(LotusDivider, {})
            ]
          },
          m.month
        ))
      ] }),
      tab === "passport" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs italic text-center mb-4",
            style: { color: "#E91E8C" },
            children: "Fill in your baby's sacred details — all saved privately on this device 🪷"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpiritualPassport, { data: passportData, onUpdate: updatePassport }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusDivider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-2xl",
            style: {
              background: "rgba(233,30,140,0.07)",
              border: "1.5px solid rgba(233,30,140,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-[0.62rem] tracking-[0.2em] uppercase font-bold mb-2",
                  style: { color: "#E91E8C" },
                  children: "✦ Blessings from Krishna — Complete Verse"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-2",
                  style: { color: "#880E4F" },
                  children: "न जायते म्रियते वा कदाचित् नायं भूत्वा भविता वा न भूयः।"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-3",
                  style: { color: "#880E4F" },
                  children: "अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic leading-relaxed",
                  style: { color: "#C2185B", lineHeight: 1.9 },
                  children: '"The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."'
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-[0.6rem] font-bold mt-2",
                  style: { color: "#E91E8C" },
                  children: "— Bhagavad Gita 2.20"
                }
              )
            ]
          }
        )
      ] }),
      tab === "milestones" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-2xl mb-1",
            style: {
              background: "rgba(255,182,193,0.25)",
              border: "1.5px solid rgba(233,30,140,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-1",
                  style: { color: "#880E4F" },
                  children: "Sacred Milestones"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic",
                  style: { color: "#C2185B", lineHeight: 1.85 },
                  children: "Nine sacred milestones — each a threshold where the divine is especially close. Mark these in your Baby's Passport."
                }
              )
            ]
          }
        ),
        [
          {
            week: 4,
            title: "Soul Enters the Womb",
            icon: "🌟",
            text: "The Atman chooses this womb for its sacred mission. Garbhadhana Samskara is the ancient ceremony that honours this moment with prayer, diya, and mantra.",
            mantra: "ॐ नमो नारायणाय"
          },
          {
            week: 8,
            title: "First Heartbeat",
            icon: "❤️",
            text: "At week 8, the tiny heart begins beating. This is the Jiva (life force) fully anchored in the physical form. Chant Hare Krishna near the womb — the baby can feel vibration before sound.",
            mantra: "ॐ नमो भगवते वासुदेवाय"
          },
          {
            week: 12,
            title: "Complete Physical Form",
            icon: "🌱",
            text: "All organs are formed. The baby is now anatomically complete — a miniature divine being. Begin reading Gita aloud daily from this week. Each chapter is the baby's first scripture.",
            mantra: "ॐ श्री कृष्णाय नमः"
          },
          {
            week: 16,
            title: "Ears Open — Baby Hears",
            icon: "👂",
            text: "Week 16 is the most sacred — the baby's ears open for the first time. What they hear now becomes their deepest imprint. Ensure the first sounds are sacred sounds.",
            mantra: "हरे कृष्ण हरे कृष्ण"
          },
          {
            week: 20,
            title: "First Movement — Quickening",
            icon: "🦋",
            text: "The baby's first kick is the soul saying: I am here. I feel you. I love you. Place your hands on your womb and whisper: 'I see you, I love you, Krishna blesses you.'",
            mantra: "ॐ गं गणपतये नमः"
          },
          {
            week: 24,
            title: "Responds to Voice",
            icon: "🗣️",
            text: "The baby turns toward the mother's voice. Your voice is their entire world. Every word of kindness, every bhajan, every Gita verse is creating their permanent emotional foundation.",
            mantra: "ॐ नमः शिवाय"
          },
          {
            week: 28,
            title: "Punsavana / Simantonnayana",
            icon: "🙏",
            text: "The Simantonnayana ceremony in Month 7–8 is one of the 16 Samskaras. Prayers are offered for the baby's safety, wisdom, and dharmic life. The village collectively blesses the mother.",
            mantra: "ॐ महालक्ष्म्यै नमः"
          },
          {
            week: 36,
            title: "Fully Ready — Preparing for Birth",
            icon: "🌸",
            text: "The baby is fully developed. The soul is ready to enter the world. These final weeks are for rest, prayer, and preparing the home as a sacred space for the most divine guest.",
            mantra: "ॐ श्री रामाय नमः"
          },
          {
            week: 40,
            title: "Jatakarma — Sacred Birth",
            icon: "🕯️",
            text: "At the moment of birth, the father whispers 'Hare Krishna' and OM into the baby's right ear. A drop of honey and ghee is placed on the tongue. This is Jatakarma — the child's first Samskara.",
            mantra: "हरे कृष्ण हरे राम"
          }
        ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -12 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            className: "flex gap-3 p-4 rounded-2xl",
            style: {
              background: "rgba(255,240,248,0.7)",
              border: "1px solid rgba(244,167,185,0.4)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl flex-shrink-0", children: m.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "#880E4F" },
                      children: m.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-[0.6rem] px-2 py-0.5 rounded-full",
                      style: {
                        background: "rgba(233,30,140,0.12)",
                        color: "#E91E8C"
                      },
                      children: [
                        "Week ",
                        m.week
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs leading-relaxed mb-1.5",
                    style: { color: "#C2185B", lineHeight: 1.85 },
                    children: m.text
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic",
                    style: { color: "#E91E8C" },
                    children: m.mantra
                  }
                )
              ] })
            ]
          },
          m.week
        ))
      ] }),
      tab === "food" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-2xl mb-1",
            style: {
              background: "rgba(255,182,193,0.25)",
              border: "1.5px solid rgba(233,30,140,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-1",
                  style: { color: "#880E4F" },
                  children: "Sattvic Diet — Sacred Nourishment"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic",
                  style: { color: "#C2185B", lineHeight: 1.85 },
                  children: "According to the Charaka Samhita and Bhagavad Gita Chapter 17, what you eat becomes the child's first prasad. Only sattvic food — pure, natural, full of prana, offered mentally to Krishna before eating."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "p-3 rounded-2xl mb-2",
            style: {
              background: "rgba(233,30,140,0.07)",
              border: "1.5px solid rgba(233,30,140,0.18)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic",
                style: { color: "#880E4F", lineHeight: 1.85 },
                children: `✦ BG 17.8 — "Foods that are juicy, fatty, wholesome, and pleasing to the heart are dear to those in the mode of goodness and increase the duration of life, purify one's existence and give strength, health, happiness and satisfaction."`
              }
            )
          }
        ),
        SATTVIC_FOODS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.04 },
            className: "flex gap-3 p-4 rounded-2xl",
            style: {
              background: "rgba(255,240,248,0.7)",
              border: "1px solid rgba(244,167,185,0.35)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl flex-shrink-0", children: "🍃" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-2 flex-wrap mb-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "#880E4F" },
                      children: f.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[0.58rem] px-2 py-0.5 rounded-full flex-shrink-0",
                      style: {
                        background: "rgba(233,30,140,0.1)",
                        color: "#E91E8C"
                      },
                      children: f.month
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[0.62rem] mb-1",
                    style: { color: "#F48FB1" },
                    children: f.sanskrit
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "#C2185B" },
                    children: f.benefit
                  }
                )
              ] })
            ]
          },
          f.name
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusDivider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-2xl",
            style: {
              background: "rgba(255,228,235,0.6)",
              border: "1.5px solid rgba(233,30,140,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-2",
                  style: { color: "#880E4F" },
                  children: "🚫 Avoid During Pregnancy"
                }
              ),
              [
                "Onion, garlic, and pungent vegetables (rajasic — overstimulates)",
                "Stale, processed, or frozen food (tamasic — dulls consciousness)",
                "Alcohol, caffeine, tobacco — severely harmful to fetal development",
                "All non-vegetarian food — increases aggression and karmic burden",
                "Watching violent, disturbing, or distressing content — directly affects baby's psyche",
                "Loud, aggressive environments — the baby's nervous system is forming"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs flex-shrink-0",
                    style: { color: "#E91E8C" },
                    children: "✗"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs",
                    style: { color: "#880E4F", lineHeight: 1.8 },
                    children: item
                  }
                )
              ] }, item.slice(0, 30)))
            ]
          }
        )
      ] }),
      tab === "music" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 rounded-2xl mb-1",
            style: {
              background: "rgba(255,182,193,0.25)",
              border: "1.5px solid rgba(233,30,140,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-1",
                  style: { color: "#880E4F" },
                  children: "Sacred Music for the Womb"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic",
                  style: { color: "#C2185B", lineHeight: 1.85 },
                  children: "Music is the first language of the soul. Ancient Vedic texts prescribe specific sounds for each trimester. What the baby hears in the womb becomes their deepest nature — not just preference, but personality itself."
                }
              )
            ]
          }
        ),
        [
          {
            title: "Hare Krishna Mahamantra",
            sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
            timing: "Morning — 108 repetitions daily",
            benefit: "The highest vibrational sound in creation. Programs the baby's soul with divine consciousness from birth. Ancient scriptures call this the Maha-mantra — the great mantra that liberates.",
            icon: "🙏"
          },
          {
            title: "Vishnu Sahasranama",
            sanskrit: "ॐ विश्वं विष्णुर्वषट्कारो भूत-भव्य-भवत्-प्रभुः।",
            timing: "Morning — full recitation once daily",
            benefit: "1000 names of Vishnu fills the baby's consciousness with divine attributes. Children raised with Sahasranama are reported to have exceptional memory and calm temperament.",
            icon: "🌺"
          },
          {
            title: "Gita Chapter 15 — Purushottama Yoga",
            sanskrit: "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च।",
            timing: "Evening — once daily",
            benefit: "The yoga of the Supreme Person. Plants the seed of discrimination (viveka) and wisdom in the forming mind. Abhimanyu learned battle formations this way — what the child hears, they permanently retain.",
            icon: "📖"
          },
          {
            title: "Gayatri Mantra",
            sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं। भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥",
            timing: "Sunrise and sunset",
            benefit: "The prayer for illuminated intellect. The Gayatri mantra activates the Ajna chakra — the center of intuition and intelligence. Given at sunrise and sunset for maximum cosmic alignment.",
            icon: "☀️"
          },
          {
            title: "Raga Bhairav",
            sanskrit: "रागः भैरव",
            timing: "4 AM – 7 AM (Brahma Muhurta)",
            benefit: "The most sacred morning raga. Clears the mental atmosphere. According to classical music texts, Bhairav awakens spiritual consciousness and fills the environment with divine calmness.",
            icon: "🎵"
          },
          {
            title: "Raga Yaman",
            sanskrit: "रागः यमन",
            timing: "6 PM – 9 PM (evening)",
            benefit: "Evening raga of creativity, emotional depth, and peace. The baby absorbs musical patterns even in the womb — this raga helps develop musical sensitivity and emotional intelligence.",
            icon: "🌙"
          },
          {
            title: "Santan Gopal Mantra",
            sanskrit: "ॐ श्रीं ह्रीं क्लीं ग्लौं देवकीसुत गोविन्द वासुदेव जगत्पते। देहि मे तनयं कृष्ण त्वामहं शरणं गतः॥",
            timing: "Any time, especially before sleep",
            benefit: "The sacred mantra for child blessing. Directly invokes Krishna's grace for the protection and divine nature of the incoming soul. Mothers who chant this report deep peace and confidence.",
            icon: "🪷"
          },
          {
            title: "Om Namah Shivaya",
            sanskrit: "ॐ नमः शिवाय",
            timing: "Evening — 108 repetitions",
            benefit: "The Panchakshara mantra of Shiva. Each syllable corresponds to one of the five elements — Na (earth), Ma (water), Shi (fire), Va (air), Ya (space). Balances all five elements in the forming body.",
            icon: "🕉️"
          }
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.04 },
            className: "p-4 rounded-2xl",
            style: {
              background: "rgba(255,240,248,0.75)",
              border: "1px solid rgba(244,167,185,0.4)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex-shrink-0", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic mb-0.5",
                      style: { color: "#880E4F" },
                      children: item.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-xs font-bold italic",
                      style: { color: "#E91E8C" },
                      children: item.sanskrit
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-body text-[0.6rem] px-2 py-0.5 rounded-full",
                  style: {
                    background: "rgba(233,30,140,0.1)",
                    color: "#C2185B"
                  },
                  children: [
                    "🕐 ",
                    item.timing
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs",
                  style: { color: "#C2185B", lineHeight: 1.85 },
                  children: item.benefit
                }
              )
            ]
          },
          item.title
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-[0.62rem] italic",
            style: { color: "#E91E8C" },
            children: `🪷 "This soul has chosen you as its earthly guide. You have been entrusted with the most sacred responsibility — to nurture a divine spark into a dharmic human being. May this child walk in Krishna's light always."`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-[0.6rem] font-bold mt-1",
            style: { color: "#F48FB1" },
            children: "— Bhagavad Gita 10.20"
          }
        )
      ] })
    ] })
  ] });
}
export {
  GarbhaSanskarPage
};
