import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, L as LotusParticles, m as motion, a as Link, u as useNavigate } from "./index-CodWPqWB.js";
import { u as useLastRead } from "./use-last-read-oLlMwdh7.js";
import { u as usePoints } from "./use-points-BR8pxHqh.js";
import { u as useStreak } from "./use-streak-CqlB--5b.js";
import { u as useUserProfile } from "./use-user-profile-hnqGj4bF.js";
import "./backend-client-DOpXrffV.js";
const DAILY_VERSES = [
  {
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "Karmaṇy-evādhikāras te mā phaleṣhu kadāchana",
    translation: "You have a right to perform your duties, but never to the fruits of action. Never be motivated by the results, nor become attached to inaction.",
    ref: "BG 2.47"
  },
  {
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate",
    translation: "To those who worship Me with devotion, meditating on My transcendental form — I carry what they lack and preserve what they have.",
    ref: "BG 9.22"
  },
  {
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "Sarva-dharmān parityajya māṁ ekaṁ śaraṇam vraja",
    translation: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    ref: "BG 18.66"
  },
  {
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "Yadā yadā hi dharmasya glānir bhavati Bhārata",
    translation: "Whenever and wherever there is a decline in dharma and a rise of adharma — at that time I manifest Myself.",
    ref: "BG 4.7"
  },
  {
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "Uddhared ātmanātmānaṁ nātmānam avasādayet",
    translation: "Let a man lift himself by his own self; let him not degrade himself. For the self alone is the friend of the self, and the self alone is the enemy of the self.",
    ref: "BG 6.5"
  },
  {
    chapter: 2,
    verse: 20,
    sanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।",
    transliteration: "Na jāyate mriyate vā kadāchin",
    translation: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.",
    ref: "BG 2.20"
  },
  {
    chapter: 11,
    verse: 33,
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम्।",
    transliteration: "Tasmāt tvam uttiṣṭha yaśo labhasva",
    translation: "Therefore arise and attain glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement — you be just the instrument.",
    ref: "BG 11.33"
  }
];
const VEDIC_DAYS = [
  "रविवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार"
];
const VEDIC_MONTHS = [
  "मेष",
  "वृषभ",
  "मिथुन",
  "कर्क",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुम्भ",
  "मीन"
];
const NAKSHATRA_NAMES = [
  "अश्विनी",
  "भरणी",
  "कृत्तिका",
  "रोहिणी",
  "मृगशीर्ष",
  "आर्द्रा",
  "पुनर्वसु",
  "पुष्य",
  "आश्लेषा",
  "मघा",
  "पूर्व फाल्गुनी",
  "उत्तर फाल्गुनी",
  "हस्त",
  "चित्रा",
  "स्वाति",
  "विशाखा",
  "अनुराधा",
  "ज्येष्ठा",
  "मूल",
  "पूर्वाषाढा",
  "उत्तराषाढा",
  "श्रवण",
  "धनिष्ठा",
  "शतभिषा",
  "पूर्व भाद्रपद",
  "उत्तर भाद्रपद",
  "रेवती"
];
const TITHI_NAMES = [
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "अमावस्या",
  "प्रतिपदा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पंचमी",
  "षष्ठी",
  "सप्तमी",
  "अष्टमी",
  "नवमी",
  "दशमी",
  "एकादशी",
  "द्वादशी",
  "त्रयोदशी",
  "चतुर्दशी",
  "पूर्णिमा"
];
const DAY_BLESSINGS = {
  0: {
    deity: "सूर्य देव",
    color: "oklch(0.80 0.34 54)",
    blessing: "Offer water to Surya at sunrise. Ideal for new beginnings.",
    fast: "Optional Surya fast"
  },
  1: {
    deity: "शिव जी",
    color: "oklch(0.72 0.22 268)",
    blessing: "Chant Om Namah Shivaya 108 times. Abhishek with milk is auspicious.",
    fast: "Somvar Vrat"
  },
  2: {
    deity: "हनुमान जी",
    color: "oklch(0.70 0.30 32)",
    blessing: "Read Hanuman Chalisa. Offer sindoor and jasmine flowers.",
    fast: "Mangalvar Vrat"
  },
  3: {
    deity: "गणेश जी",
    color: "oklch(0.72 0.28 300)",
    blessing: "Begin new work today with Ganesh puja. Green colour is auspicious.",
    fast: "Budhvar fast for Ganesh"
  },
  4: {
    deity: "विष्णु जी / गुरु",
    color: "oklch(0.78 0.22 160)",
    blessing: "Honour your Guru. Yellow colour, banana offering. Most auspicious for learning.",
    fast: "Brihaspativar Vrat"
  },
  5: {
    deity: "लक्ष्मी माँ / दुर्गा माँ",
    color: "oklch(0.80 0.28 340)",
    blessing: "Perform Lakshmi puja in the evening. White flowers. Excellent for prosperity.",
    fast: "Shukravar Vrat"
  },
  6: {
    deity: "शनि देव",
    color: "oklch(0.62 0.16 268)",
    blessing: "Offer mustard oil to Shani dev. Black sesame. Feed crows for ancestral peace.",
    fast: "Shanivar Vrat"
  }
};
const FESTIVALS = [
  {
    month: 0,
    day: 14,
    name: "मकर संक्रान्ति",
    desc: "Sun enters Capricorn — holy dip in rivers, sesame offerings"
  },
  {
    month: 1,
    day: 26,
    name: "महाशिवरात्रि",
    desc: "Night-long Shiva worship, fasting, Abhishek"
  },
  {
    month: 2,
    day: 14,
    name: "होली",
    desc: "Festival of colours — Holika Dahan the night before"
  },
  {
    month: 3,
    day: 6,
    name: "रामनवमी",
    desc: "Birth of Lord Rama — reading Ramayana, fasting"
  },
  {
    month: 3,
    day: 14,
    name: "हनुमान जयन्ती",
    desc: "Birth of Lord Hanuman — Chalisa recitation, sindoor offering"
  },
  {
    month: 6,
    day: 7,
    name: "गुरु पूर्णिमा",
    desc: "Honour your Guru — full moon of devotion and gratitude"
  },
  {
    month: 7,
    day: 16,
    name: "जन्माष्टमी",
    desc: "Birth of Lord Krishna — midnight puja, Mathura celebrations"
  },
  {
    month: 7,
    day: 26,
    name: "गणेश चतुर्थी",
    desc: "10-day festival of Lord Ganesha"
  },
  {
    month: 9,
    day: 2,
    name: "नवरात्रि",
    desc: "9 nights worshipping Devi in all her forms"
  },
  {
    month: 9,
    day: 12,
    name: "दशहरा",
    desc: "Victory of good over evil — Rama's victory over Ravana"
  },
  {
    month: 10,
    day: 1,
    name: "धनतेरस",
    desc: "Purchase of gold/silver — Lakshmi and Dhanvantari puja"
  },
  {
    month: 10,
    day: 3,
    name: "दीपावली",
    desc: "Festival of lights — Lakshmi puja, fireworks, sweets"
  },
  {
    month: 10,
    day: 5,
    name: "भाई दूज",
    desc: "Brother-sister bond — apply tilak, pray for long life"
  },
  {
    month: 11,
    day: 11,
    name: "गीता जयन्ती",
    desc: "The sacred day Lord Krishna spoke the Bhagavad Gita to Arjuna"
  }
];
function getTodayPanchang() {
  const now = /* @__PURE__ */ new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const date = now.getDate();
  const tithiNum = (date - 1) % 30;
  const nakshatraIdx = Math.floor((month * 30 + date - 1) * 0.9125) % 27;
  const rahuKaalHours = {
    0: "4:30 PM – 6:00 PM",
    1: "7:30 AM – 9:00 AM",
    2: "3:00 PM – 4:30 PM",
    3: "12:00 PM – 1:30 PM",
    4: "1:30 PM – 3:00 PM",
    5: "10:30 AM – 12:00 PM",
    6: "9:00 AM – 10:30 AM"
  };
  const todayFestival = FESTIVALS.find(
    (f) => f.month === month && Math.abs(f.day - date) <= 1
  );
  return {
    tithi: TITHI_NAMES[tithiNum] ?? "प्रतिपदा",
    nakshatra: NAKSHATRA_NAMES[nakshatraIdx] ?? "अश्विनी",
    vaar: VEDIC_DAYS[day],
    month: VEDIC_MONTHS[month],
    rahuKaal: rahuKaalHours[day] ?? "Unknown",
    dayBlessing: DAY_BLESSINGS[day],
    festival: todayFestival ?? null
  };
}
const TICKER_VERSES = [
  "✦ कर्मण्येवाधिकारस्ते — You have a right to work, but never to the fruit thereof · BG 2.47 ✦",
  "✦ योगः कर्मसु कौशलम् — Yoga is skill in action · BG 2.50 ✦",
  "✦ सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज — Surrender unto Me alone · BG 18.66 ✦",
  "✦ अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि — I shall deliver you from all sin · BG 18.66 ✦",
  "✦ ददामि बुद्धियोगं तं — I give them the yoga of understanding · BG 10.10 ✦",
  "✦ नमस्ते नमस्ते नमस्तेऽस्तु — हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ✦",
  "✦ मन्मना भव मद्भक्तो — Fix your mind on Me, be my devotee · BG 18.65 ✦",
  "✦ ज्ञानं ज्ञेयं ज्ञानगम्यं — Knowledge, the known, and the goal of knowledge · BG 13.18 ✦"
];
function SplashScreen({ onDone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, scale: 1.03 },
      transition: { duration: 0.9 },
      className: "fixed inset-0 z-[9000] flex flex-col items-center justify-center overflow-hidden cursor-pointer",
      onClick: onDone,
      style: {
        background: "linear-gradient(180deg, oklch(0.32 0.14 268) 0%, oklch(0.42 0.18 32) 35%, oklch(0.52 0.22 36) 60%, oklch(0.38 0.16 268) 100%)"
      },
      "data-ocid": "home.splash",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at 50% 30%, oklch(0.82 0.38 54 / 0.65) 0%, oklch(0.62 0.28 32 / 0.45) 35%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at 50% 75%, oklch(0.46 0.18 32 / 0.7) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0",
            style: {
              height: "35%",
              background: "linear-gradient(0deg, oklch(0.36 0.16 32 / 0.95) 0%, oklch(0.50 0.20 36 / 0.6) 50%, transparent 100%)"
            }
          }
        ),
        [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { opacity: [0.08, 0.32, 0.08], scaleX: [1, 1.15, 1] },
            transition: {
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: angle * 5e-3
            },
            className: "absolute pointer-events-none",
            style: {
              top: "35%",
              left: "50%",
              width: "55vw",
              height: 2,
              background: "linear-gradient(90deg, oklch(0.88 0.38 54 / 0.7), transparent)",
              transformOrigin: "left center",
              transform: `rotate(${angle * 30}deg) translateY(-50%)`
            }
          },
          angle
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute",
            style: {
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(380px, 80vw)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between px-6 mb-[-8px]", children: [0, 1].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: "4px solid oklch(0.80 0.36 54 / 0.7)",
                    boxShadow: "0 0 20px oklch(0.78 0.34 54 / 0.5)",
                    background: "linear-gradient(135deg, oklch(0.58 0.22 46) 0%, oklch(0.44 0.18 36) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "oklch(0.92 0.42 54)"
                      }
                    }
                  )
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    height: 54,
                    borderRadius: "8px 8px 0 0",
                    background: "linear-gradient(180deg, oklch(0.62 0.24 46) 0%, oklch(0.50 0.20 36) 100%)",
                    border: "2px solid oklch(0.78 0.34 54 / 0.5)",
                    boxShadow: "0 0 30px oklch(0.72 0.30 52 / 0.35)",
                    position: "relative",
                    overflow: "hidden"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          background: "linear-gradient(90deg, transparent, oklch(0.88 0.40 54), transparent)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-center gap-4 h-full pb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: 14,
                              height: 26,
                              borderRadius: "6px 6px 0 0",
                              background: "linear-gradient(180deg, oklch(0.62 0.28 268) 0%, oklch(0.50 0.22 268) 100%)",
                              margin: "0 auto"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontSize: "6px",
                              color: "oklch(0.80 0.34 54)",
                              marginTop: 2
                            },
                            children: "कृष्ण"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: 12,
                              height: 22,
                              borderRadius: "6px 6px 0 0",
                              background: "linear-gradient(180deg, oklch(0.72 0.30 32) 0%, oklch(0.60 0.24 32) 100%)",
                              margin: "0 auto"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontSize: "6px",
                              color: "oklch(0.80 0.28 46)",
                              marginTop: 2
                            },
                            children: "अर्जुन"
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3 mt-0", children: ["horse-a", "horse-b", "horse-c", "horse-d"].map((horseId) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: 14,
                    height: 32,
                    background: "linear-gradient(180deg, oklch(0.94 0.04 70) 0%, oklch(0.80 0.06 68) 100%)",
                    borderRadius: "6px 6px 2px 2px",
                    boxShadow: "0 0 8px oklch(0.88 0.06 70 / 0.4)"
                  }
                },
                horseId
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              filter: [
                "drop-shadow(0 0 24px oklch(0.88 0.40 54 / 0.8)) drop-shadow(0 0 60px oklch(0.78 0.34 54 / 0.5))",
                "drop-shadow(0 0 56px oklch(0.94 0.44 54 / 1.0)) drop-shadow(0 0 120px oklch(0.84 0.38 54 / 0.7))",
                "drop-shadow(0 0 24px oklch(0.88 0.40 54 / 0.8)) drop-shadow(0 0 60px oklch(0.78 0.34 54 / 0.5))"
              ]
            },
            transition: { duration: 2.8, repeat: Number.POSITIVE_INFINITY },
            className: "relative z-10 mb-2",
            style: { marginTop: "-10vh" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  fontSize: "clamp(5rem, 22vw, 9.5rem)",
                  lineHeight: 1,
                  fontFamily: "'Noto Serif Devanagari', serif",
                  color: "oklch(0.94 0.42 54)",
                  userSelect: "none",
                  display: "block",
                  textAlign: "center"
                },
                children: "ॐ"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5 },
            className: "relative z-10 text-center px-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "'Noto Serif Devanagari', serif",
                    fontSize: "clamp(1rem, 4vw, 1.6rem)",
                    color: "oklch(0.96 0.10 68)",
                    textShadow: "0 0 24px oklch(0.82 0.36 54 / 0.6)",
                    letterSpacing: "0.08em",
                    marginBottom: "0.35rem"
                  },
                  children: "ॐ श्री कृष्णाय नमः"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "serif",
                    fontSize: "clamp(0.7rem, 2.8vw, 1rem)",
                    color: "oklch(0.92 0.14 54 / 0.95)",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase"
                  },
                  children: "Bhagavad Gita — The Song of God"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1.6 },
                  style: {
                    marginTop: "0.9rem",
                    fontSize: "0.72rem",
                    color: "oklch(0.90 0.22 54 / 0.85)",
                    letterSpacing: "0.15em",
                    fontStyle: "italic"
                  },
                  children: "✦ Tap to enter · हरे कृष्ण ✦"
                }
              )
            ]
          }
        ),
        [12, 28, 45, 62, 78, 90].map((left, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              y: ["-10vh", "110vh"],
              opacity: [0, 0.7, 0],
              rotate: [0, 540]
            },
            transition: {
              duration: 5 + i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.6,
              ease: "easeIn"
            },
            style: {
              position: "fixed",
              top: 0,
              left: `${left}%`,
              width: 10,
              height: 15,
              background: "oklch(0.85 0.24 340)",
              borderRadius: "50% 50% 40% 40%",
              pointerEvents: "none"
            }
          },
          left
        ))
      ]
    }
  );
}
function DailyVerseCarousel() {
  const [idx, setIdx] = reactExports.useState(
    () => (/* @__PURE__ */ new Date()).getDate() % DAILY_VERSES.length
  );
  const [playing, setPlaying] = reactExports.useState(false);
  const synthRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % DAILY_VERSES.length),
      9e3
    );
    return () => clearInterval(t);
  }, []);
  function speakVerse() {
    if (!("speechSynthesis" in window)) return;
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const verse2 = DAILY_VERSES[idx];
    const utt = new SpeechSynthesisUtterance((verse2 == null ? void 0 : verse2.translation) ?? "");
    utt.rate = 0.85;
    utt.pitch = 0.9;
    utt.onend = () => setPlaying(false);
    synthRef.current = utt;
    window.speechSynthesis.speak(utt);
    setPlaying(true);
  }
  const verse = DAILY_VERSES[idx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden rangoli-border",
      style: {
        background: "linear-gradient(160deg, oklch(0.96 0.08 68 / 0.97) 0%, oklch(0.93 0.10 62 / 0.96) 100%)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "2px solid oklch(0.74 0.30 52 / 0.55)",
        borderRadius: "10px",
        boxShadow: "0 8px 40px rgba(180,130,45,0.28), inset 0 1px 0 rgba(255,248,220,0.80)",
        padding: "1.5rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[6px]",
            style: {
              background: "linear-gradient(90deg, oklch(0.82 0.36 54), oklch(0.70 0.28 46), oklch(0.58 0.26 268), oklch(0.70 0.28 46), oklch(0.82 0.36 54))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "font-body text-[11px] italic tracking-widest",
              style: { color: "oklch(0.52 0.20 46)" },
              children: [
                verse == null ? void 0 : verse.ref,
                " — Chapter ",
                verse == null ? void 0 : verse.chapter,
                ", Verse ",
                verse == null ? void 0 : verse.verse
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: speakVerse,
              "aria-label": playing ? "Stop audio" : "Play verse audio",
              "data-ocid": "home.verse-audio-button",
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body italic transition-all duration-200",
              style: {
                background: playing ? "oklch(0.76 0.28 52 / 0.25)" : "oklch(0.80 0.28 52 / 0.15)",
                border: "1.5px solid oklch(0.72 0.30 50 / 0.50)",
                color: "oklch(0.30 0.18 42)"
              },
              children: playing ? "⏹ Stop" : "▶ Listen"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center font-body whitespace-pre-line mb-3 leading-loose",
                  lang: "sa",
                  style: {
                    fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                    color: "oklch(0.16 0.12 36)",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                    textShadow: "0 1px 4px rgba(180,130,45,0.22)"
                  },
                  children: verse == null ? void 0 : verse.sanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center font-body text-xs italic mb-3",
                  style: { color: "oklch(0.44 0.16 48)" },
                  children: verse == null ? void 0 : verse.transliteration
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-center text-2xl mb-3",
                  style: { color: "oklch(0.62 0.24 52 / 0.55)" },
                  "aria-hidden": true,
                  children: "॥"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-center font-body italic leading-relaxed",
                  style: { fontSize: "0.92rem", color: "oklch(0.28 0.12 40)" },
                  children: [
                    '"',
                    verse == null ? void 0 : verse.translation,
                    '"'
                  ]
                }
              )
            ]
          },
          idx
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-4", children: DAILY_VERSES.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIdx(i),
            "aria-label": `Verse ${i + 1}`,
            className: "transition-all duration-200",
            style: {
              width: i === idx ? 20 : 8,
              height: 8,
              borderRadius: i === idx ? 4 : "50%",
              background: i === idx ? "oklch(0.78 0.32 46)" : "oklch(0.60 0.16 50 / 0.4)"
            }
          },
          v.ref
        )) })
      ]
    }
  );
}
function TodaysBlessingCard() {
  var _a, _b, _c;
  const panchang = getTodayPanchang();
  const now = /* @__PURE__ */ new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/calendar", "data-ocid": "home.todays-blessing.link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden transition-all duration-200 hover:scale-[1.01]",
      style: {
        background: "linear-gradient(160deg, oklch(0.94 0.08 268 / 0.96) 0%, oklch(0.92 0.10 260 / 0.96) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1.5px solid oklch(0.64 0.26 268 / 0.50)",
        borderRadius: "10px",
        padding: "1.1rem 1.25rem",
        boxShadow: "0 6px 32px rgba(100,80,200,0.18), inset 0 1px 0 rgba(200,200,255,0.22)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-[2.5px]",
            style: {
              background: "linear-gradient(90deg, oklch(0.78 0.32 54), oklch(0.66 0.28 268), oklch(0.72 0.26 46), oklch(0.66 0.28 268), oklch(0.78 0.32 54))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, children: "🌅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-[10px] tracking-[0.22em] uppercase font-bold",
                  style: { color: "oklch(0.32 0.22 268 / 0.95)" },
                  children: "✦ Today's Sacred Blessing"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-[10px] italic",
                  style: { color: "oklch(0.38 0.12 52 / 0.85)" },
                  children: dateStr
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: { color: "oklch(0.40 0.22 268 / 0.75)", fontSize: "1rem" },
              children: "→"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 mb-3", children: [
          { icon: "🌙", label: "तिथि", value: panchang.tithi },
          { icon: "⭐", label: "नक्षत्र", value: panchang.nakshatra },
          { icon: "📅", label: "वार", value: panchang.vaar },
          { icon: "☀️", label: "मास", value: `${panchang.month} माह` }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 px-2.5 py-1.5 rounded",
            style: {
              background: "oklch(0.90 0.08 268 / 0.55)",
              border: "1px solid oklch(0.60 0.22 268 / 0.35)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[9px] tracking-widest uppercase",
                    style: { color: "oklch(0.36 0.14 268 / 0.80)" },
                    children: item.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[12px] font-bold",
                    style: { color: "oklch(0.18 0.16 42)" },
                    children: item.value
                  }
                )
              ] })
            ]
          },
          item.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 px-2.5 py-1.5 rounded mb-2.5",
            style: {
              background: "oklch(0.92 0.10 18 / 0.50)",
              border: "1px solid oklch(0.58 0.22 18 / 0.40)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "⚠️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-[11px] italic",
                  style: { color: "oklch(0.32 0.20 18)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "रहु काल:" }),
                    " ",
                    panchang.rahuKaal,
                    " — Avoid new auspicious work during this time"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 px-2.5 py-1.5 rounded",
            style: {
              background: "oklch(0.94 0.10 54 / 0.50)",
              border: "1px solid oklch(0.70 0.26 52 / 0.38)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "🙏" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-[10px]",
                  style: { color: "oklch(0.20 0.12 40)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-bold",
                        style: { color: (_a = panchang.dayBlessing) == null ? void 0 : _a.color },
                        children: (_b = panchang.dayBlessing) == null ? void 0 : _b.deity
                      }
                    ),
                    " — ",
                    (_c = panchang.dayBlessing) == null ? void 0 : _c.blessing
                  ]
                }
              ) })
            ]
          }
        ),
        panchang.festival && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-2 flex items-center gap-2 px-2.5 py-1.5 rounded",
            style: {
              background: "oklch(0.94 0.12 54 / 0.50)",
              border: "1px solid oklch(0.76 0.30 54 / 0.45)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: "🎉" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-[11px] italic font-bold",
                  style: { color: "oklch(0.22 0.14 40)" },
                  children: [
                    panchang.festival.name,
                    " — ",
                    panchang.festival.desc
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-[10px] italic text-center mt-2",
            style: { color: "oklch(0.40 0.14 52 / 0.75)" },
            children: "Tap to open full Panchang Calendar →"
          }
        )
      ]
    }
  ) });
}
function IntroModal({
  open,
  onClose,
  type,
  battlesWon
}) {
  const navigate = useNavigate();
  const isKurukshetra = type === "kurukshetra";
  function proceed() {
    onClose();
    navigate({ to: isKurukshetra ? "/kurukshetra" : "/emergency" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[500] flex items-center justify-center p-4",
      style: {
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)"
      },
      onClick: onClose,
      "data-ocid": `home.${type}-intro.dialog`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.88, y: 24 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.92, y: 12 },
          transition: { duration: 0.45, ease: "easeOut" },
          className: "relative max-w-md w-full rounded-xl p-8 text-center",
          style: {
            background: isKurukshetra ? "linear-gradient(160deg, oklch(0.44 0.16 268) 0%, oklch(0.50 0.18 32) 100%)" : "linear-gradient(160deg, oklch(0.50 0.18 18) 0%, oklch(0.44 0.16 268) 100%)",
            border: `2px solid ${isKurukshetra ? "oklch(0.78 0.30 52 / 0.65)" : "oklch(0.70 0.28 18 / 0.60)"}`,
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)"
          },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-xl",
                style: {
                  background: isKurukshetra ? "linear-gradient(90deg, oklch(0.78 0.32 54), oklch(0.68 0.26 46), oklch(0.78 0.32 54))" : "linear-gradient(90deg, oklch(0.72 0.28 18), oklch(0.62 0.24 22), oklch(0.72 0.28 18))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: isKurukshetra ? "⚔️" : "🛡️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-[0.3em] uppercase mb-3",
                style: { color: "oklch(0.62 0.24 32 / 0.8)" },
                children: isKurukshetra ? "॥ मेरा कुरुक्षेत्र ॥" : "॥ धर्म आपातकाल ॥"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display italic font-bold mb-4 leading-snug",
                style: {
                  fontSize: "clamp(1.1rem, 3.5vw, 1.35rem)",
                  color: "oklch(0.96 0.10 68)",
                  textShadow: "0 0 24px oklch(0.82 0.32 54 / 0.4)"
                },
                children: isKurukshetra ? '"The charioteer does not win the battle. Arjuna wins the battle. Krishna simply makes sure Arjuna never fights alone."' : '"Krishna is with you. Whatever battle you face — you are not alone."'
              }
            ),
            isKurukshetra && battlesWon > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-xs italic mb-3",
                style: { color: "oklch(0.94 0.12 56 / 0.90)" },
                children: [
                  "🏆 Battles Won: ",
                  battlesWon,
                  " — Your Kurukshetra continues"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm italic mb-6",
                style: { color: "oklch(0.95 0.06 68 / 0.90)", lineHeight: 1.7 },
                children: isKurukshetra ? "Bring your life's battle to Krishna. He has been waiting. You never face anything alone." : "18 life-saving verses. Helplines. Krishna's voice. All offline. I have set aside my flute. Right now, only you matter."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: proceed,
                "data-ocid": `home.${type}-intro.confirm_button`,
                className: "w-full rounded-full py-3.5 font-display font-bold tracking-wide mb-3 transition-all duration-200",
                style: {
                  background: isKurukshetra ? "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))" : "linear-gradient(135deg, oklch(0.52 0.22 18), oklch(0.68 0.28 32))",
                  color: "oklch(0.97 0.04 70)",
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
                },
                children: isKurukshetra ? "⚔️ Enter the Battlefield" : "🙏 I need Krishna now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                "data-ocid": `home.${type}-intro.cancel_button`,
                className: "font-body text-xs underline-offset-2 underline",
                style: { color: "oklch(0.55 0.06 60 / 0.7)" },
                children: "Return to home"
              }
            )
          ]
        }
      )
    }
  ) });
}
function HomePage() {
  useLastRead();
  const { streak } = useStreak();
  const { points } = usePoints();
  const { displayName } = useUserProfile();
  const [introModal, setIntroModal] = reactExports.useState(null);
  const [showSplash, setShowSplash] = reactExports.useState(() => {
    try {
      const last = localStorage.getItem("om-splash-shown");
      if (!last) return true;
      return Date.now() - Number(last) > 3 * 60 * 60 * 1e3;
    } catch {
      return true;
    }
  });
  reactExports.useEffect(() => {
    if (showSplash) {
      const t = setTimeout(() => {
        setShowSplash(false);
        try {
          localStorage.setItem("om-splash-shown", Date.now().toString());
        } catch {
        }
      }, 3200);
      return () => clearTimeout(t);
    }
  }, [showSplash]);
  const [battlesWon] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem("kurukshetra-battles");
      if (!raw) return 0;
      const battles = JSON.parse(raw);
      return battles.filter((b) => b.status === "won").length;
    } catch {
      return 0;
    }
  });
  const hour = (/* @__PURE__ */ new Date()).getHours();
  const greeting = hour < 5 ? "Om Namah Shivaya" : hour < 12 ? "Shubh Prabhat" : hour < 17 ? "Hari Om" : "Shubh Sandhya";
  function dismissSplash() {
    setShowSplash(false);
    try {
      localStorage.setItem("om-splash-shown", Date.now().toString());
    } catch {
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSplash && /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, { onDone: dismissSplash }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusParticles, { zIndex: 1, opacity: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 mt-2", "data-ocid": "home.om-symbol", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
              [280, 220, 160].map((size, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: {
                    opacity: [0.15 + i * 0.06, 0.45 + i * 0.06, 0.15 + i * 0.06]
                  },
                  transition: {
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  className: "absolute top-1/2 left-1/2 pointer-events-none",
                  style: {
                    width: size,
                    height: size,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, oklch(0.86 0.38 54 / ${0.12 - i * 0.03}) 0%, transparent 70%)`,
                    border: `1px solid oklch(0.78 0.34 54 / ${0.2 - i * 0.04})`
                  }
                },
                size
              )),
              [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute pointer-events-none select-none",
                  style: {
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateX(80px) translateY(-50%)`,
                    fontSize: "8px",
                    color: "oklch(0.82 0.36 54 / 0.6)"
                  },
                  children: "✦"
                },
                deg
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: {
                    textShadow: [
                      "0 0 24px oklch(0.86 0.40 54 / 0.8), 0 0 56px oklch(0.78 0.34 54 / 0.5)",
                      "0 0 56px oklch(0.94 0.44 54 / 1.0), 0 0 100px oklch(0.84 0.38 54 / 0.7), 0 0 140px oklch(0.78 0.34 54 / 0.35)",
                      "0 0 24px oklch(0.86 0.40 54 / 0.8), 0 0 56px oklch(0.78 0.34 54 / 0.5)"
                    ]
                  },
                  transition: { duration: 3.2, repeat: Number.POSITIVE_INFINITY },
                  "aria-label": "Om — the primordial sacred sound",
                  style: {
                    display: "block",
                    fontSize: "clamp(5.5rem, 20vw, 9rem)",
                    lineHeight: 1.05,
                    fontFamily: "'Noto Serif Devanagari', serif",
                    color: "oklch(0.94 0.42 54)",
                    userSelect: "none",
                    position: "relative",
                    zIndex: 2
                  },
                  children: "ॐ"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      animate: {
                        textShadow: [
                          "0 0 16px oklch(0.84 0.38 54 / 0.6), 0 0 32px oklch(0.76 0.32 52 / 0.30)",
                          "0 0 28px oklch(0.90 0.42 54 / 0.85), 0 0 56px oklch(0.80 0.36 52 / 0.45)",
                          "0 0 16px oklch(0.84 0.38 54 / 0.6), 0 0 32px oklch(0.76 0.32 52 / 0.30)"
                        ]
                      },
                      transition: { duration: 3.5, repeat: Number.POSITIVE_INFINITY },
                      className: "font-display italic font-bold mt-1",
                      style: {
                        fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                        color: "oklch(0.22 0.14 36)",
                        letterSpacing: "0.04em"
                      },
                      children: "🙏 हरे कृष्ण 🙏"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display italic text-sm mt-0.5",
                      style: { color: "oklch(0.35 0.16 42)" },
                      children: [
                        greeting,
                        displayName !== "Devotee" ? `, ${displayName}` : ", Arjun"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs tracking-widest mt-0.5",
                      style: { color: "oklch(0.45 0.16 48 / 0.80)" },
                      children: "❦ Hare Krishna · हरे कृष्ण · Hare Rama ❦"
                    }
                  ),
                  (streak.count > 0 || points.total > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-2", children: [
                    streak.count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.82 0.32 54)" },
                        children: [
                          "🔥 ",
                          streak.count,
                          " Day Streak"
                        ]
                      }
                    ),
                    points.total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.80 0.28 46)" },
                        children: [
                          "⭐ ",
                          points.total,
                          " Sacred Points"
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.2 },
              className: "mb-5",
              "data-ocid": "home.verse-of-day",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to right, transparent, oklch(0.75 0.32 52 / 0.60))"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase whitespace-nowrap",
                      style: {
                        color: "oklch(0.86 0.30 52)",
                        textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.55)"
                      },
                      children: "✦  Verse of the Day  ✦"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to left, transparent, oklch(0.75 0.32 52 / 0.60))"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DailyVerseCarousel, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.35 },
              className: "mb-6",
              "data-ocid": "home.todays-blessing",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to right, transparent, oklch(0.66 0.26 268 / 0.55))"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      className: "font-display text-xs font-bold italic tracking-[0.18em] uppercase whitespace-nowrap",
                      style: {
                        color: "oklch(0.78 0.26 268)",
                        textShadow: "0 0 14px oklch(0.68 0.28 268 / 0.5)"
                      },
                      children: "✦  Today's Sacred Blessing  ✦"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 h-px",
                      style: {
                        background: "linear-gradient(to left, transparent, oklch(0.66 0.26 268 / 0.55))"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TodaysBlessingCard, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "text-center mb-8 px-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display italic font-bold leading-relaxed",
                    style: {
                      fontSize: "clamp(0.82rem, 2.5vw, 1.0rem)",
                      color: "oklch(0.86 0.24 54 / 0.90)",
                      textShadow: "0 0 20px oklch(0.78 0.34 54 / 0.35)"
                    },
                    children: [
                      '"We are not building an app. Krishna is restoring dharma.',
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      'And he chose your hands to do it."'
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-2",
                    style: { color: "oklch(0.68 0.16 52 / 0.7)" },
                    children: "✦ Hare Krishna Hare Krishna Krishna Krishna Hare Hare ✦"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed bottom-[64px] left-0 right-0 z-40 overflow-hidden pointer-events-none",
        style: {
          borderTop: "1.5px solid oklch(0.72 0.30 52 / 0.45)",
          borderBottom: "1.5px solid oklch(0.72 0.28 50 / 0.35)",
          background: "linear-gradient(90deg, oklch(0.90 0.14 56 / 0.97), oklch(0.88 0.16 52 / 0.97))",
          backdropFilter: "blur(8px)",
          paddingTop: "5px",
          paddingBottom: "5px"
        },
        "data-ocid": "home.verse-ticker",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex whitespace-nowrap",
            style: { animation: "tickerScroll 90s linear infinite" },
            children: [...TICKER_VERSES, ...TICKER_VERSES].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body italic text-sm px-8",
                style: {
                  color: "oklch(0.28 0.16 42)",
                  textShadow: "0 0 10px oklch(0.76 0.30 52 / 0.30)"
                },
                children: v
              },
              `${v.slice(0, 12)}-${i}`
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IntroModal,
      {
        open: introModal === "kurukshetra",
        onClose: () => setIntroModal(null),
        type: "kurukshetra",
        battlesWon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IntroModal,
      {
        open: introModal === "emergency",
        onClose: () => setIntroModal(null),
        type: "emergency",
        battlesWon: 0
      }
    )
  ] });
}
export {
  HomePage
};
