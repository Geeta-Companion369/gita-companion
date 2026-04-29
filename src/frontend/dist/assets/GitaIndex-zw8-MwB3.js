import { j as jsxRuntimeExports, a as Link, m as motion } from "./index-vCKiyWhq.js";
import { S as Skeleton } from "./skeleton-BD4lHY4n.js";
import { u as useChapters } from "./use-chapters-D_J-KDRV.js";
import { u as useLastRead } from "./use-last-read-BZ0epLUu.js";
import "./utils-2v2HxlWs.js";
const GITA_CHAPTERS = [
  {
    number: 1,
    nameDevanagari: "अर्जुन विषाद योग",
    nameEnglish: "Arjuna's Grief",
    yogaName: "Arjuna Vishada Yoga",
    verseCount: 47,
    summary: "On the battlefield of Kurukshetra, Arjuna surveys both armies and is overcome by grief and delusion at the sight of beloved teachers, kinsmen, and friends arrayed for battle. He loses his resolve, his bow slips from his hands, and he collapses in his chariot, overwhelmed by compassion and confusion about his duty. This chapter sets the stage for Krishna's divine instruction — it is the human cry that invites cosmic wisdom.",
    keyVerse: "1.28",
    keyTheme: "The crisis of conscience that opens the door to divine wisdom"
  },
  {
    number: 2,
    nameDevanagari: "सांख्य योग",
    nameEnglish: "The Yoga of Knowledge",
    yogaName: "Sankhya Yoga",
    verseCount: 72,
    summary: "Krishna begins his eternal teaching by revealing the immortality of the Self — the Atman that is never born and never dies. He instructs Arjuna on the distinction between the eternal soul and the perishable body. He introduces the concept of Nishkama Karma — performing one's duty without attachment to results — and describes the qualities of the Sthitaprajna, the person of steady wisdom who remains unshaken by pleasure and pain alike.",
    keyVerse: "2.47",
    keyTheme: "Act without attachment; the soul is eternal and imperishable"
  },
  {
    number: 3,
    nameDevanagari: "कर्म योग",
    nameEnglish: "The Yoga of Action",
    yogaName: "Karma Yoga",
    verseCount: 43,
    summary: "Krishna explains that no one can remain without action even for a moment. He teaches that action performed as duty, dedicated to the Divine and free from selfish desire, is the path of Karma Yoga. He reveals the cycle of sacrifice that sustains creation and warns against desire and anger as humanity's greatest enemies. One must act for the welfare of the world, following the example of great souls.",
    keyVerse: "3.19",
    keyTheme: "Perform your duty selflessly; action is inevitable and sacred"
  },
  {
    number: 4,
    nameDevanagari: "ज्ञान कर्म संन्यास योग",
    nameEnglish: "The Yoga of Wisdom and Renunciation",
    yogaName: "Jnana Karma Sannyas Yoga",
    verseCount: 42,
    summary: "Krishna reveals his divine birth and cosmic purpose — that whenever Dharma declines and Adharma rises, He manifests in the world to restore righteousness. He expounds the science of sacrifice in its many forms and declares that all paths of purification lead to the Supreme. The chapter culminates with the boat of knowledge that carries one across the ocean of all sin and confusion.",
    keyVerse: "4.7",
    keyTheme: "Divine incarnation restores Dharma; knowledge destroys all karmas"
  },
  {
    number: 5,
    nameDevanagari: "कर्म संन्यास योग",
    nameEnglish: "The Yoga of Renunciation of Action",
    yogaName: "Karma Sannyas Yoga",
    verseCount: 29,
    summary: "Krishna reconciles the apparent conflict between the path of renunciation and the path of action, declaring that both lead to liberation but Karma Yoga is superior for most seekers. The true renunciant acts without the sense of doership, having surrendered all actions to the Divine. Such a sage sees the Self equally in all beings — a Brahmin, a cow, an elephant, a dog — and remains ever blissful.",
    keyVerse: "5.10",
    keyTheme: "Act without ego; true renunciation is inner detachment, not outer withdrawal"
  },
  {
    number: 6,
    nameDevanagari: "आत्म संयम योग",
    nameEnglish: "The Yoga of Self-Mastery",
    yogaName: "Atma Sanyam Yoga",
    verseCount: 47,
    summary: "Krishna teaches the practical science of meditation — proper posture, controlled breathing, fixed gaze, and one-pointed concentration. He describes the mind as the greatest friend when controlled and the greatest enemy when uncontrolled. He reveals the highest yogi as one who sees all beings in the Self and the Self in all beings, abiding in perfect equanimity. The chapter ends with the assurance that no sincere spiritual effort is ever wasted.",
    keyVerse: "6.5",
    keyTheme: "The mind is your greatest friend or foe; master it through meditation"
  },
  {
    number: 7,
    nameDevanagari: "ज्ञान विज्ञान योग",
    nameEnglish: "The Yoga of Knowledge and Realization",
    yogaName: "Jnana Vijnana Yoga",
    verseCount: 30,
    summary: "Krishna reveals his dual nature — the lower material nature of eight elements and the higher spiritual nature that sustains all life. He describes the four types of devotees who approach him and the seven types who do not. He declares that out of thousands of humans, only a rare soul truly knows Him. This chapter bridges theoretical knowledge with direct experiential realization of the Supreme.",
    keyVerse: "7.14",
    keyTheme: "Know the two natures of the Divine; transcend Maya through devotion"
  },
  {
    number: 8,
    nameDevanagari: "अक्षर ब्रह्म योग",
    nameEnglish: "The Yoga of the Imperishable Absolute",
    yogaName: "Akshar Brahma Yoga",
    verseCount: 28,
    summary: "Krishna explains the nature of Brahman, the cosmic spirit, and the mystery of death and rebirth. He teaches that whatever one remembers at the moment of death determines their next birth. He reveals the two eternal paths — the bright northern path of liberation and the dark southern path of return. Through constant practice and devotion, one transcends both paths and reaches the Supreme Abode beyond all cycles of creation.",
    keyVerse: "8.5",
    keyTheme: "Remembrance of the Divine at life's end determines liberation"
  },
  {
    number: 9,
    nameDevanagari: "राज विद्या राज गुह्य योग",
    nameEnglish: "The Royal Knowledge and Royal Secret",
    yogaName: "Raja Vidya Raja Guhya Yoga",
    verseCount: 34,
    summary: "Krishna reveals the most secret of all knowledge — the royal science of devotion. He pervades the entire universe yet remains transcendent. All beings exist in Him, yet He is not contained in them. He accepts the simplest offering — a leaf, a flower, a fruit, some water — when given with pure love. He assures that His devotees never perish and that He personally carries what they lack and preserves what they have.",
    keyVerse: "9.22",
    keyTheme: "The royal secret: pure devotion reaches the Supreme directly"
  },
  {
    number: 10,
    nameDevanagari: "विभूति योग",
    nameEnglish: "The Yoga of Divine Manifestations",
    yogaName: "Vibhuti Yoga",
    verseCount: 42,
    summary: "Krishna reveals his divine glories — he is the beginning, middle, and end of all existence. Among the Vedas he is Sama Veda; among gods he is Indra; among rivers, the Ganga; among seasons, spring; among the wise, wisdom itself. Every magnificent, glorious, and powerful being in creation is a spark of his splendor. By knowing these manifestations, devotees recognize the Divine in all of creation.",
    keyVerse: "10.8",
    keyTheme: "Every excellence in creation is a fragment of Divine glory"
  },
  {
    number: 11,
    nameDevanagari: "विश्वरूप दर्शन योग",
    nameEnglish: "The Vision of the Cosmic Form",
    yogaName: "Vishwarupa Darshana Yoga",
    verseCount: 55,
    summary: "At Arjuna's request, Krishna reveals his awe-inspiring Vishwarupa — the Cosmic Form containing all the universe. Arjuna beholds innumerable mouths, eyes, and divine adornments simultaneously. Warriors and kings are already consumed in the fiery mouths of Time. Trembling with fear and wonder, Arjuna prays to be shown again the gentle four-armed form. Krishna assures him that this vision is rarely granted and is only accessible through pure, undivided devotion.",
    keyVerse: "11.32",
    keyTheme: "The Cosmic Form reveals that Time is the ultimate reality"
  },
  {
    number: 12,
    nameDevanagari: "भक्ति योग",
    nameEnglish: "The Yoga of Devotion",
    yogaName: "Bhakti Yoga",
    verseCount: 20,
    summary: "Krishna declares Bhakti — pure devotional love — as the supreme and most direct path to the Divine. He describes the qualities of the ideal devotee: one who hates none, is friendly and compassionate to all, free from possessiveness and ego, equal in pain and pleasure, forgiving, ever-content, with mind and intellect fixed on God. Such a devotee is supremely dear to Krishna. This is the shortest and most beautiful chapter, a garland of divine qualities.",
    keyVerse: "12.13",
    keyTheme: "Pure devotion is the most direct and supreme path to the Divine"
  },
  {
    number: 13,
    nameDevanagari: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    nameEnglish: "The Field and Its Knower",
    yogaName: "Kshetra Kshetrajña Vibhaga Yoga",
    verseCount: 34,
    summary: "Krishna explains the profound distinction between the Field (Kshetra) — the body, senses, and mind — and the Knower of the Field (Kshetrajña) — the immortal consciousness that witnesses all experience. He enumerates the twenty qualities of a true knower: humility, non-violence, forgiveness, cleanliness, steadiness. One who sees the Supreme Self dwelling equally in all perishable bodies achieves true vision and attains liberation.",
    keyVerse: "13.27",
    keyTheme: "Know the difference between the body and the eternal witnessing soul"
  },
  {
    number: 14,
    nameDevanagari: "गुण त्रय विभाग योग",
    nameEnglish: "The Three Qualities of Nature",
    yogaName: "Gunatraya Vibhaga Yoga",
    verseCount: 27,
    summary: "Krishna reveals the three fundamental qualities (Gunas) of material nature that bind every soul: Tamas (inertia, darkness, delusion), Rajas (passion, restlessness, desire), and Sattva (purity, clarity, harmony). All actions, states, and conditions arise from their interplay. One who transcends all three Gunas — equanimous toward pleasure and pain, gold and stone, praise and blame — is said to have crossed beyond nature and reached the Divine.",
    keyVerse: "14.19",
    keyTheme: "Transcend the three Gunas to attain eternal freedom"
  },
  {
    number: 15,
    nameDevanagari: "पुरुषोत्तम योग",
    nameEnglish: "The Supreme Person",
    yogaName: "Purushottama Yoga",
    verseCount: 20,
    summary: "Krishna describes the eternal Ashvattha tree of cosmic existence with its roots above and branches below. One who cuts this tree with the sword of detachment and takes refuge in the Primeval Person attains the Supreme. He distinguishes between the perishable (Kshara), the imperishable (Akshara), and the Supreme Being (Purushottama) — the Highest Self who transcends both and sustains all three worlds. One who knows this secret truly knows the Gita.",
    keyVerse: "15.15",
    keyTheme: "The Supreme Person transcends both perishable and imperishable"
  },
  {
    number: 16,
    nameDevanagari: "दैव असुर सम्पद् विभाग योग",
    nameEnglish: "Divine and Demonic Natures",
    yogaName: "Daivasura Sampad Vibhaga Yoga",
    verseCount: 24,
    summary: "Krishna enumerates the twenty-six divine qualities that lead toward liberation — fearlessness, purity of heart, steadfastness in knowledge, charity, self-restraint, sacrifice, and compassion — and contrasts them with the demonic qualities of pride, arrogance, lust, anger, cruelty, and delusion. He declares lust, anger, and greed as the triple gates of hell that destroy the soul. One should follow the injunctions of scripture as the guide for right action.",
    keyVerse: "16.21",
    keyTheme: "Divine qualities lead to liberation; demonic qualities bind the soul"
  },
  {
    number: 17,
    nameDevanagari: "श्रद्धात्रय विभाग योग",
    nameEnglish: "The Three Divisions of Faith",
    yogaName: "Shraddhatraya Vibhaga Yoga",
    verseCount: 28,
    summary: "Krishna reveals that every person's faith, food, sacrifice, austerity, and charity reflect their predominant Guna. Sattvic faith nourishes virtue and leads to wisdom; Rajasic faith seeks power and pleasure; Tamasic faith deludes and destroys. He explains the sacred significance of the three-syllable mantra 'Om Tat Sat' — the eternal affirmation that sanctifies all acts of sacrifice, charity, and austerity when performed without desire for reward.",
    keyVerse: "17.3",
    keyTheme: "Your faith shapes your nature; align faith with Sattva to reach the Divine"
  },
  {
    number: 18,
    nameDevanagari: "मोक्ष संन्यास योग",
    nameEnglish: "The Yoga of Liberation through Renunciation",
    yogaName: "Moksha Sannyas Yoga",
    verseCount: 78,
    summary: "The final and longest chapter summarizes the entire teaching of the Gita. Krishna distinguishes true renunciation (Sannyasa) from mere abandonment of action and teaches the five causes of all action. He describes the three types of knowledge, action, doer, intellect, and fortitude according to the Gunas. He reveals the pinnacle of devotion — surrender all actions and duties to the Divine and take complete refuge in Him alone. Verse 18.66 is the Gita's ultimate promise: surrender completely and Krishna personally liberates the devotee from all sins.",
    keyVerse: "18.66",
    keyTheme: "Surrender completely to the Divine; this is the highest teaching of the Gita"
  }
];
const ROMAN = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII"
];
const CHAPTER_HUES = [
  52,
  46,
  38,
  54,
  32,
  268,
  52,
  46,
  54,
  38,
  268,
  52,
  46,
  38,
  54,
  268,
  52,
  46
];
function GitaIndexPage() {
  const { data: chapters, isLoading } = useChapters();
  const { lastRead } = useLastRead();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes sacred-glow-pulse { 0%,100%{opacity:0.7;transform:scale(1);} 50%{opacity:1;transform:scale(1.04);} }
        @keyframes golden-shimmer { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        .gita-index-title {
          background: linear-gradient(90deg, oklch(0.88 0.40 56), oklch(0.80 0.34 46), oklch(0.72 0.30 32), oklch(0.80 0.34 52), oklch(0.88 0.40 56));
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: golden-shimmer 5s ease infinite;
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block font-body text-xs italic mb-6 transition-all duration-200 border-b border-transparent pb-0.5",
        style: { color: "oklch(0.72 0.22 52 / 0.85)" },
        "data-ocid": "gita-index.back-home",
        children: "← Return to Home"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "relative overflow-hidden mb-8 text-center px-6 py-10",
        style: {
          background: "rgba(5, 3, 20, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "2px solid oklch(0.72 0.30 46 / 0.65)",
          borderRadius: "8px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(218,165,32,0.22)"
        },
        "data-ocid": "gita-index.header",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-[4px] rounded-t-[6px]",
              style: {
                background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.72 0.30 46), oklch(0.58 0.24 268), oklch(0.72 0.30 46), oklch(0.84 0.38 54))",
                boxShadow: "0 0 14px oklch(0.78 0.34 54 / 0.55)"
              }
            }
          ),
          [
            "top-3 left-4",
            "top-3 right-4",
            "bottom-3 left-4",
            "bottom-3 right-4"
          ].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute ${pos} text-sm pointer-events-none select-none`,
              style: {
                color: "oklch(0.84 0.38 54 / 0.60)",
                animation: "sacred-glow-pulse 3s ease-in-out infinite"
              },
              "aria-hidden": true,
              children: "✦"
            },
            pos
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1.2, delay: 0.15 },
              className: "flex justify-center mb-5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center justify-center rounded-full",
                  style: {
                    width: 120,
                    height: 120,
                    background: "radial-gradient(circle at 38% 33%, oklch(0.30 0.18 268) 0%, oklch(0.18 0.12 32) 60%, oklch(0.12 0.08 30) 100%)",
                    border: "4px solid oklch(0.80 0.36 54)",
                    boxShadow: "0 0 0 2px oklch(0.70 0.28 46 / 0.55), 0 6px 40px oklch(0.72 0.32 52 / 0.50)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "aria-label": "Om — the sacred primordial sound",
                      style: {
                        fontSize: "3.8rem",
                        lineHeight: 1,
                        fontFamily: "'Noto Serif Devanagari', serif",
                        color: "oklch(0.88 0.40 54)",
                        textShadow: "0 0 18px oklch(0.84 0.38 54 / 0.95), 0 0 40px oklch(0.78 0.34 54 / 0.65)",
                        animation: "sacred-glow-pulse 3.5s ease-in-out infinite",
                        userSelect: "none"
                      },
                      children: "ॐ"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.3 },
              className: "gita-index-title font-display font-bold italic leading-tight mb-2",
              style: { fontSize: "clamp(2.2rem, 6vw, 3.8rem)" },
              children: "Bhagavad Gita"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body italic mb-5",
              style: {
                fontSize: "1.05rem",
                color: "oklch(0.88 0.24 52)"
              },
              children: "भगवद्गीता — The Song of God"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-8 mb-6", children: [
            ["18", "Adhyāyas", 54],
            ["700", "Shlokas", 46],
            ["18", "Pathways", 268]
          ].map(([num, label, hue]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-bold italic leading-none",
                style: {
                  fontSize: "2.2rem",
                  color: `oklch(0.90 0.38 ${hue})`,
                  textShadow: `0 0 24px oklch(0.80 0.34 ${hue} / 0.70)`
                },
                children: num
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-[10px] tracking-widest uppercase mt-1",
                style: { color: "oklch(0.80 0.14 58 / 0.85)" },
                children: label
              }
            )
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mx-auto max-w-md px-5 py-3 rounded",
              style: {
                background: "oklch(0.10 0.08 32 / 0.72)",
                border: "1.5px solid oklch(0.78 0.34 50 / 0.55)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display italic font-semibold text-sm leading-relaxed",
                  style: { color: "oklch(0.96 0.06 66)" },
                  children: [
                    '"These 18 chapters were waiting for you.',
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    'Krishna placed them here knowing you would come."'
                  ]
                }
              )
            }
          ),
          lastRead && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              className: "mt-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/verse/$chapterId/$verseId",
                  params: {
                    chapterId: String(lastRead.chapterId),
                    verseId: lastRead.verseId
                  },
                  className: "inline-block px-6 py-3 rounded-full font-display font-bold italic text-sm transition-all duration-200",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.62 0.26 32), oklch(0.76 0.32 54))",
                    color: "oklch(0.10 0.06 28)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.40)",
                    letterSpacing: "0.04em"
                  },
                  "data-ocid": "gita-index.resume-reading",
                  children: [
                    "← Resume Chapter ",
                    lastRead.chapterId
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex-1 h-px",
          style: {
            background: "linear-gradient(to right, transparent, oklch(0.75 0.34 52 / 0.65))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-display text-xs font-bold italic tracking-[0.16em] uppercase whitespace-nowrap",
          style: {
            color: "oklch(0.86 0.30 52)",
            textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.55), 0 1px 4px rgba(0,0,0,0.8)"
          },
          children: "✦  Select Your Adhyāya  ✦"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex-1 h-px",
          style: {
            background: "linear-gradient(to left, transparent, oklch(0.75 0.34 52 / 0.65))"
          }
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Array.from({ length: 18 }, (_, i) => `sk-ch-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 rounded" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10",
        "data-ocid": "gita-index.chapters-grid",
        children: (chapters ?? GITA_CHAPTERS.map((c) => ({
          id: c.number,
          name: c.nameEnglish,
          sanskritName: c.nameDevanagari,
          summary: c.summary
        }))).map((chapter, i) => {
          const meta = GITA_CHAPTERS[i];
          const hue = CHAPTER_HUES[i] ?? 52;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.035, duration: 0.4 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/chapter/$id",
                  params: { id: String(chapter.id) },
                  className: "group flex gap-4 p-4 h-full transition-all duration-200",
                  style: {
                    background: "rgba(5, 3, 20, 0.82)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: `1.5px solid oklch(0.68 0.24 ${hue} / 0.50)`,
                    borderRadius: "8px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.50), inset 0 1px 0 rgba(218,165,32,0.16)"
                  },
                  "data-ocid": `gita-index.chapter.${chapter.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex-shrink-0 flex flex-col items-center justify-center rounded-lg",
                        style: {
                          width: 52,
                          height: 52,
                          background: `radial-gradient(circle at 35% 28%, oklch(0.84 0.34 ${hue}) 0%, oklch(0.58 0.24 ${hue}) 100%)`,
                          border: `2px solid oklch(0.80 0.32 ${hue} / 0.70)`,
                          boxShadow: `0 4px 16px oklch(0.70 0.28 ${hue} / 0.45)`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-display font-bold italic leading-none",
                              style: {
                                fontSize: "0.75rem",
                                color: "oklch(0.12 0.06 30)",
                                letterSpacing: "0.04em"
                              },
                              children: ROMAN[chapter.id]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "font-body leading-none mt-0.5",
                              style: {
                                fontSize: "0.6rem",
                                color: "oklch(0.14 0.06 30 / 0.80)"
                              },
                              children: [
                                "Ch. ",
                                chapter.id
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-[6px]",
                          style: {
                            background: `linear-gradient(90deg, transparent, oklch(0.80 0.32 ${hue} / 0.75), transparent)`
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic leading-tight mb-0.5 transition-smooth",
                          style: {
                            color: `oklch(0.82 0.28 ${hue})`
                          },
                          children: (meta == null ? void 0 : meta.yogaName) ?? chapter.sanskritName
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-semibold italic text-sm leading-snug mb-1 group-hover:text-primary transition-smooth",
                          style: { color: "oklch(0.96 0.06 68)" },
                          children: chapter.sanskritName
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic leading-tight mb-2",
                          style: { color: "oklch(0.80 0.14 52 / 0.80)" },
                          children: chapter.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body leading-snug line-clamp-2",
                          style: {
                            fontSize: "0.7rem",
                            color: "oklch(0.72 0.10 52 / 0.75)"
                          },
                          children: (meta == null ? void 0 : meta.keyTheme) ?? ""
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-body text-[9px] italic px-2 py-0.5 rounded-full",
                            style: {
                              background: `oklch(0.72 0.24 ${hue} / 0.15)`,
                              border: `1px solid oklch(0.72 0.24 ${hue} / 0.30)`,
                              color: `oklch(0.80 0.20 ${hue} / 0.85)`
                            },
                            children: [
                              (meta == null ? void 0 : meta.verseCount) ?? "—",
                              " verses"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-body text-[10px] italic transition-smooth opacity-0 group-hover:opacity-100",
                            style: { color: `oklch(0.80 0.28 ${hue})` },
                            children: "Read →"
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              )
            },
            chapter.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "text-center pb-8",
        "data-ocid": "gita-index.footer-quote",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "inline-block px-8 py-5 rounded-lg",
            style: {
              background: "rgba(5, 3, 20, 0.78)",
              border: "1.5px solid oklch(0.68 0.26 50 / 0.50)",
              backdropFilter: "blur(10px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs tracking-[0.25em] uppercase mb-3",
                  style: { color: "oklch(0.72 0.22 52 / 0.80)" },
                  children: "✦ Krishna's Promise ✦"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-display italic font-semibold leading-relaxed",
                  style: {
                    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                    color: "oklch(0.96 0.08 66)"
                  },
                  children: [
                    '"The charioteer does not win the battle.',
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Arjuna wins the battle.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.88 0.36 54)" }, children: "Krishna simply makes sure Arjuna never fights alone." }),
                    '"'
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mt-4",
                  style: { color: "oklch(0.72 0.14 50 / 0.75)" },
                  children: "— Hare Krishna, Arjun 🙏"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  GitaIndexPage
};
