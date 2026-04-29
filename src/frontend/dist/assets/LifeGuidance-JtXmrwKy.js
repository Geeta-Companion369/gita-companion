import { r as reactExports, j as jsxRuntimeExports, m as motion, a as Link, A as AnimatePresence, g as useTTS } from "./index-vCKiyWhq.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
const LIFE_CATEGORIES = [
  {
    id: "stress",
    icon: "🌊",
    label: "Stress & Anxiety",
    labelSanskrit: "चिन्ता",
    description: "Find stillness when the mind is restless",
    cards: [
      {
        chapterId: 6,
        message: "When the mind is caught in the current of anxiety, Krishna teaches: do not fight it, simply redirect it. Each time it wanders, gently bring it back. This is not weakness — it is the deepest practice of yoga.",
        verse: {
          id: "6-26",
          chapterId: 6,
          verseNumber: 26,
          sanskritText: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ||",
          transliteration: "yato yato niśhcharati manaśh chañchalam asthiram\ntatas tato niyamyaitad ātmany eva vaśhaṁ nayet",
          englishTranslation: "Whenever the restless and unsteady mind wanders away, bring it back and continually keep directing it towards God."
        }
      },
      {
        chapterId: 6,
        message: "Balance is the antidote to stress. Too much food, too little sleep, too much work — these disturb the body and cloud the mind. Krishna's prescription: moderation in all things transforms sorrow into steadiness.",
        verse: {
          id: "6-17",
          chapterId: 6,
          verseNumber: 17,
          sanskritText: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु |\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा ||",
          transliteration: "yuktāhāra-vihārasya yukta-cheṣhṭasya karmasu\nyukta-svapnāvabodhasya yogo bhavati duḥkha-hā",
          englishTranslation: "For one who is moderate in eating and recreation, who performs work in a balanced manner, who sleeps and wakes in regulation — the practice of yoga destroys all sorrow."
        }
      }
    ]
  },
  {
    id: "fear",
    icon: "🕯️",
    label: "Fear & Doubt",
    labelSanskrit: "भय",
    description: "Illuminate the darkness within with Krishna's light",
    cards: [
      {
        chapterId: 2,
        message: "What are you afraid of losing? The soul — your deepest self — can never be harmed. This body, these circumstances — they are temporary garments. Beneath all of it, you are eternal. Knowing this, what is there left to fear?",
        verse: {
          id: "2-20",
          chapterId: 2,
          verseNumber: 20,
          sanskritText: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ||",
          transliteration: "na jāyate mriyate vā kadāchin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śhāśhvato 'yaṁ purāṇo\nna hanyate hanyamāne śharīre",
          englishTranslation: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval."
        }
      },
      {
        chapterId: 4,
        message: "Doubt cuts the very root of your action and progress. When you find yourself paralysed by indecision, Krishna gives a clear command: arise. Take up the sword of knowledge — understanding of your own nature — and cut doubt at its source.",
        verse: {
          id: "4-42",
          chapterId: 4,
          verseNumber: 42,
          sanskritText: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः |\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ||",
          transliteration: "tasmād ajñāna-sambhūtaṁ hṛit-sthaṁ jñānāsinātmanaḥ\nchittvainaṁ sanśhayaṁ yogam ātiṣhṭhottiṣhṭha bhārata",
          englishTranslation: "Therefore, with the sword of knowledge, cut asunder the doubt about the self, born of ignorance, residing in your heart. Be established in Yoga; arise, O Arjuna!"
        }
      }
    ]
  },
  {
    id: "career",
    icon: "⚡",
    label: "Career & Purpose",
    labelSanskrit: "धर्म",
    description: "Find your dharma and walk it with courage",
    cards: [
      {
        chapterId: 2,
        message: "The greatest mistake in your career is measuring success only by outcomes. Your right is to act with full excellence and dedication — whether recognition comes or not. When your work becomes an offering, it ceases to be a burden.",
        verse: {
          id: "2-47",
          chapterId: 2,
          verseNumber: 47,
          sanskritText: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
          transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo 'stvakarmaṇi",
          englishTranslation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction."
        }
      },
      {
        chapterId: 18,
        message: "Your purpose is already written into your nature. The sign of dharma is that when you do it, even difficulty feels meaningful. Seek this alignment between who you are and what you do — and no career setback will shake you.",
        verse: {
          id: "18-45",
          chapterId: 18,
          verseNumber: 45,
          sanskritText: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः |\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु ||",
          transliteration: "sve sve karmaṇy abhirataḥ sansiddhiṁ labhate naraḥ\nsva-karma-nirataḥ siddhiṁ yathā vindati tac chṛiṇu",
          englishTranslation: "By performing one's natural duty, every human being can attain perfection. Listen from me how one can attain perfection by performing their natural duty."
        }
      }
    ]
  },
  {
    id: "anger",
    icon: "🔥",
    label: "Anger & Frustration",
    labelSanskrit: "क्रोध",
    description: "Transform the fire within into wisdom",
    cards: [
      {
        chapterId: 2,
        message: "Anger is a chain reaction: it clouds judgment, distorts memory, and eventually destroys your capacity for wise action. The Gita does not ask you to suppress anger — it asks you to understand its root. What desire was frustrated? That is where the real work begins.",
        verse: {
          id: "2-63",
          chapterId: 2,
          verseNumber: 63,
          sanskritText: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः |\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||",
          transliteration: "krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ\nsmṛiti-bhranśhād buddhi-nāśho buddhi-nāśhāt praṇaśhyati",
          englishTranslation: "Anger leads to clouding of judgment, which results in bewilderment of memory. When memory is bewildered, the intellect gets destroyed; and when the intellect is destroyed, one is ruined."
        }
      },
      {
        chapterId: 3,
        message: "Even a wise person acts according to their conditioning. When you feel the heat of frustration, pause and observe: this feeling arises from prakriti — nature — not from your deepest self. You are the witness. You do not have to be swept away.",
        verse: {
          id: "3-27",
          chapterId: 3,
          verseNumber: 27,
          sanskritText: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः |\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||",
          transliteration: "prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśhaḥ\nahaṅkāra-vimūḍhātmā kartāham iti manyate",
          englishTranslation: "All actions are being done by the modes of material nature, but due to delusion of ego, the fool thinks: 'I am the doer.'"
        }
      }
    ]
  },
  {
    id: "relationships",
    icon: "💞",
    label: "Relationships",
    labelSanskrit: "प्रेम",
    description: "Love without possession, give without expectation",
    cards: [
      {
        chapterId: 12,
        message: "The highest love is love without ownership. Krishna's vision of an ideal soul is one who neither disturbs others nor is disturbed by them — free from attachment, free from fear. Can you bring this quality of freedom to your relationships?",
        verse: {
          id: "12-15",
          chapterId: 12,
          verseNumber: 15,
          sanskritText: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः |\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ||",
          transliteration: "yasmān nodvijate loko lokān nodvijate cha yaḥ\nharṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ",
          englishTranslation: "One who does not disturb others and is not disturbed by others, who is free from joy, envy, fear, and anxiety — such a person is very dear to me."
        }
      },
      {
        chapterId: 12,
        message: "Compassion, friendliness, equanimity — these are not weaknesses but the marks of a deeply evolved soul. When we bring these qualities to our relationships, conflict dissolves and genuine connection becomes possible.",
        verse: {
          id: "12-13",
          chapterId: 12,
          verseNumber: 13,
          sanskritText: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च |\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||",
          transliteration: "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha\nnirmamo nirahṅkāraḥ sama-duḥkha-sukhaḥ kṣhamī",
          englishTranslation: "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress — such a person is very dear to me."
        }
      }
    ]
  },
  {
    id: "health",
    icon: "🌿",
    label: "Health & Energy",
    labelSanskrit: "स्वास्थ्य",
    description: "The body is the temple — honour it with balance",
    cards: [
      {
        chapterId: 6,
        message: "Your body is the vehicle of your spiritual journey. Krishna does not teach asceticism or indulgence — he teaches the middle path: balanced food, balanced movement, balanced rest. When the body is honoured with wisdom, it becomes a friend on the path.",
        verse: {
          id: "6-17b",
          chapterId: 6,
          verseNumber: 17,
          sanskritText: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु |\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा ||",
          transliteration: "yuktāhāra-vihārasya yukta-cheṣhṭasya karmasu\nyukta-svapnāvabodhasya yogo bhavati duḥkha-hā",
          englishTranslation: "For one who is moderate in eating and recreation, who performs work in a balanced manner, who sleeps and wakes in regulation — the practice of yoga destroys all sorrow."
        }
      },
      {
        chapterId: 17,
        message: "The food we eat becomes the mind we inhabit. Sattvic food — pure, fresh, nourishing — creates clarity and vitality. When we choose our food consciously, we are not merely feeding the body; we are cultivating the quality of our inner life.",
        verse: {
          id: "17-8",
          chapterId: 17,
          verseNumber: 8,
          sanskritText: "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः |\nरस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः ||",
          transliteration: "āyuḥ-sattva-balārogya-sukha-prīti-vivardhanāḥ\nrasyāḥ snigdhāḥ sthirā hṛidyā āhārāḥ sāttvika-priyāḥ",
          englishTranslation: "Foods that promote longevity, purity of mind, strength, health, happiness, and cheerfulness — those that are juicy, smooth, firm, and pleasant to the stomach — are liked by people in the mode of goodness."
        }
      }
    ]
  },
  {
    id: "surrender",
    icon: "🙏",
    label: "Surrender & Peace",
    labelSanskrit: "शरण",
    description: "Release the burden of control — rest in Divine grace",
    cards: [
      {
        chapterId: 18,
        message: "The final verse of Krishna's teaching to Arjuna is the most intimate: abandon everything else and come to me. This is not defeat — it is the supreme courage. To release the grip of the ego and rest in the arms of the infinite is the highest spiritual act.",
        verse: {
          id: "18-66",
          chapterId: 18,
          verseNumber: 66,
          sanskritText: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
          transliteration: "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
          englishTranslation: "Abandon all varieties of dharmas and simply surrender unto me alone. I shall liberate you from all sinful reactions; do not fear."
        }
      },
      {
        chapterId: 2,
        message: "Peace is not something you find outside — it is what remains when you stop grasping. The sage of steady wisdom is unshaken in sorrow, unmoved in pleasure, free from attachment. This is not indifference — it is a love so vast it holds everything equally.",
        verse: {
          id: "2-70",
          chapterId: 2,
          verseNumber: 70,
          sanskritText: "आपूर्यमाणमचलप्रतिष्ठं\nसमुद्रमापः प्रविशन्ति यद्वत् |\nतद्वत्कामा यं प्रविशन्ति सर्वे\nस शान्तिमाप्नोति न कामकामी ||",
          transliteration: "āpūryamāṇam achala-pratiṣhṭhaṁ\nsamudram āpaḥ praviśhanti yadvat\ntadvat kāmā yaṁ praviśhanti sarve\nsa śhāntim āpnoti na kāma-kāmī",
          englishTranslation: "Just as a vast lake remains undisturbed when rivers flow into it, so the person who is not disturbed by the constant flow of desires — that person alone attains peace, not the one who strives to satisfy desires."
        }
      }
    ]
  },
  {
    id: "focus",
    icon: "🎯",
    label: "Focus & Discipline",
    labelSanskrit: "साधना",
    description: "Sharpen the mind — conquer the inner opponent",
    cards: [
      {
        chapterId: 6,
        message: "The undisciplined mind is your greatest enemy; the disciplined mind is your greatest ally. This is not a metaphor — it is the practical reality of spiritual and worldly life. Every day you choose which one grows stronger through your habits and attention.",
        verse: {
          id: "6-5",
          chapterId: 6,
          verseNumber: 5,
          sanskritText: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् |\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
          transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hyātmano bandhur ātmaiva ripur ātmanaḥ",
          englishTranslation: "Elevate yourself through the power of your mind, and not degrade yourself, for the mind can be the friend and also the enemy of the self."
        }
      },
      {
        chapterId: 6,
        message: "For the yogi who has conquered their mind, the inner world is like a lamp in a windless place — perfectly still, unwavering. This is the goal of all practice: not suppression, but such mastery that external turbulence can no longer disturb the inner flame.",
        verse: {
          id: "6-19",
          chapterId: 6,
          verseNumber: 19,
          sanskritText: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता |\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः ||",
          transliteration: "yathā dīpo nivāta-stho neṅgate sopamā smṛitā\nyogino yata-chittasya yuñjato yogam ātmanaḥ",
          englishTranslation: "Just as a lamp in a windless place does not flicker — this is the analogy given for the controlled mind of a yogi practicing meditation on the self."
        }
      }
    ]
  }
];
function GuidanceCardItem({
  card,
  index
}) {
  const { speak, stop, isSpeaking } = useTTS();
  const handleSpeak = () => {
    if (isSpeaking) {
      stop();
      return;
    }
    speak(`${card.message}. ${card.verse.englishTranslation}`, "en-US", "male");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: index % 2 === 0 ? -16 : 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.15 },
      className: "verse-block",
      style: {
        background: "oklch(var(--card) / 0.7)",
        borderRadius: "2px",
        border: "1px solid oklch(var(--border) / 0.6)",
        borderLeft: "3px solid oklch(var(--accent) / 0.4)",
        marginBottom: 0,
        padding: "1.5rem 1.75rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "font-display text-xs font-bold tracking-[0.18em] uppercase",
              style: { color: "oklch(var(--accent))" },
              children: [
                "॥ Adhyāya ",
                card.chapterId,
                " · Śloka ",
                card.verse.verseNumber,
                " ॥"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSpeak,
              className: "inline-flex items-center gap-1.5 font-display text-xs tracking-widest uppercase transition-smooth hover:opacity-75",
              style: { color: "oklch(var(--accent) / 0.7)" },
              "aria-label": isSpeaking ? "Stop" : "Listen",
              "data-ocid": `tts-card-${card.verse.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSpeaking ? "◼" : "▶" }),
                isSpeaking ? "Stop" : "Hear"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-0.5 shrink-0 rounded-full",
              style: {
                background: "linear-gradient(180deg, oklch(var(--accent)), oklch(var(--accent) / 0.1))",
                minHeight: "3rem"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-base font-semibold leading-relaxed",
              style: { color: "oklch(var(--foreground))", lineHeight: "1.75" },
              children: card.message
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4 mb-4 text-center",
            style: {
              background: "oklch(var(--muted) / 0.5)",
              border: "1px solid oklch(var(--border) / 0.5)",
              borderRadius: "1px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "whitespace-pre-line text-center leading-loose mb-3",
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "oklch(var(--foreground))",
                    lineHeight: 2.1
                  },
                  children: card.verse.sanskritText
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic text-center leading-relaxed whitespace-pre-line",
                  style: { color: "oklch(var(--accent) / 0.75)" },
                  children: card.verse.transliteration
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body text-sm italic leading-relaxed",
            style: {
              color: "oklch(var(--muted-foreground))",
              borderTop: "1px dotted oklch(var(--border) / 0.5)",
              paddingTop: "0.75rem"
            },
            children: [
              '"',
              card.verse.englishTranslation,
              '"'
            ]
          }
        )
      ]
    }
  );
}
function LifeGuidancePage() {
  const [selectedCategory, setSelectedCategory] = reactExports.useState(
    null
  );
  const { addPoints } = usePoints();
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    addPoints("reading", 3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "text-center py-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-3xl font-bold italic mb-2",
              style: { color: "oklch(var(--accent))" },
              children: "🦚✨️ Raaadhe Raaadhe ✨️🦚"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold tracking-[0.22em] uppercase mb-2",
              style: { color: "oklch(var(--accent) / 0.65)" },
              children: "॥ मन की बात ॥"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display text-3xl md:text-4xl font-bold mb-1",
              style: { color: "oklch(var(--primary))" },
              children: "Mann Ki Baat"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-lg italic mb-4",
              style: { color: "oklch(var(--accent))" },
              children: "Krishna's Sacred Counsel for Every Affliction of Life"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: "॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm leading-relaxed max-w-md mx-auto italic mt-3",
              style: { color: "oklch(var(--muted-foreground))" },
              children: "As a devoted reader turns to a sacred text in times of need, choose the affliction that weighs upon your heart. Lord Krishna shall speak to you through the eternal Gita."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/guidance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "px-5 py-2 font-display text-xs tracking-widest uppercase border border-border transition-smooth hover:border-accent/50 hover:shadow-sacred",
              style: {
                background: "oklch(var(--primary) / 0.1)",
                color: "oklch(var(--primary))",
                borderRadius: "2px"
              },
              "data-ocid": "back-to-chatbot",
              children: "← Consult Krishna Directly"
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mb-8",
        style: {
          background: "oklch(var(--card) / 0.85)",
          border: "1px solid oklch(var(--border))",
          borderRadius: "2px",
          boxShadow: "0 2px 12px oklch(0.18 0.04 44 / 0.08)"
        },
        "data-ocid": "category-grid",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "px-5 py-3 border-b",
              style: { borderColor: "oklch(var(--border) / 0.5)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold tracking-[0.2em] uppercase text-center",
                  style: { color: "oklch(var(--accent) / 0.7)" },
                  children: "— Choose Your Affliction — विषय —"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2", children: LIFE_CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              initial: { opacity: 0, x: -8 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.05 },
              onClick: () => handleSelectCategory(cat),
              className: `toc-item w-full text-left transition-smooth ${(selectedCategory == null ? void 0 : selectedCategory.id) === cat.id ? "active" : ""}`,
              style: (selectedCategory == null ? void 0 : selectedCategory.id) === cat.id ? {
                background: "oklch(var(--accent) / 0.08)",
                borderLeft: "3px solid oklch(var(--accent) / 0.6)",
                paddingLeft: "0.5rem"
              } : {},
              "data-ocid": `category-${cat.id}`,
              "aria-label": cat.label,
              "aria-pressed": (selectedCategory == null ? void 0 : selectedCategory.id) === cat.id,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: cat.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-sm font-semibold",
                      style: { color: "oklch(var(--foreground))" },
                      children: cat.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "ml-2 font-display text-xs italic",
                      style: { color: "oklch(var(--accent) / 0.65)" },
                      children: [
                        "— ",
                        cat.labelSanskrit
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-body italic shrink-0 hidden sm:block",
                    style: { color: "oklch(var(--muted-foreground) / 0.6)" },
                    children: cat.description
                  }
                )
              ]
            },
            cat.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: selectedCategory ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.5 },
        className: "space-y-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "px-6 py-5 mb-0",
              style: {
                background: "oklch(var(--card) / 0.9)",
                border: "1px solid oklch(var(--border))",
                borderBottom: "none",
                borderRadius: "2px 2px 0 0"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: selectedCategory.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-xs tracking-[0.18em] uppercase mb-0.5",
                      style: { color: "oklch(var(--accent) / 0.65)" },
                      children: "✦ Mann Ki Baat ✦"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h2",
                    {
                      className: "font-display text-2xl font-bold",
                      style: { color: "oklch(var(--primary))" },
                      children: [
                        selectedCategory.label,
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "ml-2 text-base italic font-normal",
                            style: { color: "oklch(var(--accent))" },
                            children: [
                              "— ",
                              selectedCategory.labelSanskrit
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm italic mt-1",
                      style: { color: "oklch(var(--muted-foreground))" },
                      children: selectedCategory.description
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: selectedCategory.cards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GuidanceCardItem, { card, index: i }, card.verse.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-6 py-5 text-center space-y-4",
              style: {
                background: "oklch(var(--card) / 0.7)",
                border: "1px solid oklch(var(--border))",
                borderTop: "none",
                borderRadius: "0 0 2px 2px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xl font-bold italic",
                    style: { color: "oklch(var(--accent))" },
                    children: "✨️Jai Shree Krishna✨️"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/chapter/$id",
                      params: { id: String(selectedCategory.cards[0].chapterId) },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "px-5 py-2 font-display text-xs tracking-widest uppercase border border-border transition-smooth hover:border-accent/50 hover:shadow-sacred",
                          style: {
                            background: "oklch(var(--primary) / 0.1)",
                            color: "oklch(var(--primary))",
                            borderRadius: "2px"
                          },
                          "data-ocid": "explore-chapter-life",
                          children: [
                            "Read Adhyāya ",
                            selectedCategory.cards[0].chapterId,
                            " →"
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/guidance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "px-5 py-2 font-display text-xs tracking-widest uppercase border border-border/50 transition-smooth hover:border-border",
                      style: {
                        color: "oklch(var(--muted-foreground))",
                        borderRadius: "2px"
                      },
                      "data-ocid": "ask-krishna-more",
                      children: "Ask Krishna More →"
                    }
                  ) })
                ] })
              ]
            }
          )
        ]
      },
      selectedCategory.id
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "text-center py-12 space-y-3",
        "data-ocid": "life-guidance-empty",
        style: {
          background: "oklch(var(--card) / 0.6)",
          border: "1px solid oklch(var(--border) / 0.5)",
          borderRadius: "2px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl", children: "🦚" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xl font-semibold italic",
              style: { color: "oklch(var(--foreground))" },
              children: "Choose a chapter above"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic max-w-xs mx-auto",
              style: { color: "oklch(var(--muted-foreground))" },
              children: "Select the affliction weighing upon your heart, and Krishna shall speak to you through the eternal Gita."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator mt-4", children: "॥" })
        ]
      },
      "empty"
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mt-12" })
  ] });
}
export {
  LifeGuidancePage
};
