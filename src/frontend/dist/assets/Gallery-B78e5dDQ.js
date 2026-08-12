import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, h as ue } from "./index-DqMoqjqS.js";
import { g as getBackend, E as ExternalBlob } from "./backend-client-C24_cpfN.js";
function metaToPhoto(meta) {
  const caption = meta.caption || "Krishna Darshan";
  return {
    id: `gallery-${meta.id.toString()}`,
    src: meta.asset.getDirectURL(),
    caption,
    captionHindi: caption
  };
}
const STORY_CARDS = [
  {
    chapter: 1,
    titleSanskrit: "अर्जुन विषाद योग",
    titleEnglish: "The Yoga of Arjuna's Grief",
    subtitle: "Chapter 1 · 47 Verses",
    summary: "On the battlefield of Kurukshetra, Arjuna surveys both armies and sees his beloved teachers, grandfathers, and kinsmen. Overwhelmed by grief and compassion, his Gandiva bow slips from his hands. He surrenders to Krishna — and the Bhagavad Gita begins.",
    keyVerse: {
      ref: "BG 2.7",
      sanskrit: "कार्पण्यदोषोपहतस्वभावः",
      english: "Overcome by weakness, I ask you — what is truly beneficial for me? I surrender to you, teach me."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.14 58) 0%, oklch(0.86 0.18 46) 100%)",
    accentHue: 46
  },
  {
    chapter: 2,
    titleSanskrit: "सांख्य योग",
    titleEnglish: "The Yoga of Knowledge",
    subtitle: "Chapter 2 · 72 Verses",
    summary: "Krishna reveals the immortal nature of the soul — it is never born, never dies. He teaches Nishkama Karma: act without attachment to results. The foundational wisdom of the entire Gita is laid in this chapter.",
    keyVerse: {
      ref: "BG 2.20",
      sanskrit: "न जायते म्रियते वा कदाचिन्",
      english: "The soul is never born nor dies at any time. It is unborn, eternal, ever-existing and primeval."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.16 340) 0%, oklch(0.84 0.14 320) 100%)",
    accentHue: 340
  },
  {
    chapter: 3,
    titleSanskrit: "कर्म योग",
    titleEnglish: "The Yoga of Action",
    subtitle: "Chapter 3 · 43 Verses",
    summary: "Inaction is not an option. Krishna teaches that every human being must act — but without selfish desire. Perform your duty as an offering to the Divine. The universe itself is sustained by sacrifice.",
    keyVerse: {
      ref: "BG 3.19",
      sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर",
      english: "Therefore, without being attached to results, one should act as a matter of duty."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.12 32) 0%, oklch(0.86 0.16 28) 100%)",
    accentHue: 32
  },
  {
    chapter: 4,
    titleSanskrit: "ज्ञान कर्म संन्यास योग",
    titleEnglish: "The Yoga of Wisdom",
    subtitle: "Chapter 4 · 42 Verses",
    summary: "Krishna reveals that the Gita is eternal wisdom, spoken first to the Sun God. He appears age after age to restore dharma. True wisdom burns all karma to ashes — the fire of knowledge is the greatest purifier.",
    keyVerse: {
      ref: "BG 4.7",
      sanskrit: "यदा यदा हि धर्मस्य",
      english: "Whenever dharma declines and adharma rises, I appear on earth."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.18 54) 0%, oklch(0.85 0.20 46) 100%)",
    accentHue: 54
  },
  {
    chapter: 5,
    titleSanskrit: "कर्म संन्यास योग",
    titleEnglish: "The Yoga of Renunciation",
    subtitle: "Chapter 5 · 29 Verses",
    summary: "Both the path of action and the path of renunciation lead to liberation. The wise see no difference between a learned sage and an ordinary worker who acts without ego. True renunciation is inner, not external.",
    keyVerse: {
      ref: "BG 5.10",
      sanskrit: "ब्रह्मण्याधाय कर्माणि",
      english: "One who performs duty without attachment is unaffected by sin — as a lotus leaf is untouched by water."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.14 148) 0%, oklch(0.84 0.16 160) 100%)",
    accentHue: 148
  },
  {
    chapter: 6,
    titleSanskrit: "ध्यान योग",
    titleEnglish: "The Yoga of Meditation",
    subtitle: "Chapter 6 · 47 Verses",
    summary: "The path of dhyana — stilling the restless mind through practice and detachment. A steady flame in a windless place is the symbol of the perfected yogi. Of all yogis, the greatest is the devotee who always thinks of Krishna.",
    keyVerse: {
      ref: "BG 6.47",
      sanskrit: "योगिनामपि सर्वेषाम्",
      english: "Of all yogis, the one who always abides in Me with great faith — is the most intimately united with Me."
    },
    gradient: "linear-gradient(135deg, oklch(0.88 0.18 268) 0%, oklch(0.82 0.16 280) 100%)",
    accentHue: 268
  },
  {
    chapter: 7,
    titleSanskrit: "ज्ञान विज्ञान योग",
    titleEnglish: "The Yoga of Knowledge and Wisdom",
    subtitle: "Chapter 7 · 30 Verses",
    summary: "Krishna reveals His two natures — the material (apara) and the spiritual (para). He is the taste of water, the light of the sun and moon, the Om in the Vedas. Everything that exists is a manifestation of His energy.",
    keyVerse: {
      ref: "BG 7.7",
      sanskrit: "मत्तः परतरं नान्यत्",
      english: "There is nothing higher than Me. Everything is strung on Me as gems on a string."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.16 220) 0%, oklch(0.84 0.14 240) 100%)",
    accentHue: 220
  },
  {
    chapter: 8,
    titleSanskrit: "अक्षर ब्रह्म योग",
    titleEnglish: "The Yoga of the Imperishable Brahman",
    subtitle: "Chapter 8 · 28 Verses",
    summary: "At the moment of death, whatever state of mind one remembers — that state one attains. One who remembers Krishna at the time of death reaches Krishna. The syllable Om is the Supreme Brahman.",
    keyVerse: {
      ref: "BG 8.5",
      sanskrit: "अन्तकाले च मामेव",
      english: "Whoever, at the time of death, remembers Me — reaches My state. Of this there is no doubt."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.14 46) 0%, oklch(0.85 0.18 36) 100%)",
    accentHue: 46
  },
  {
    chapter: 9,
    titleSanskrit: "राज विद्या योग",
    titleEnglish: "The Yoga of Royal Knowledge",
    subtitle: "Chapter 9 · 34 Verses",
    summary: "The most sacred of all secrets — pure, direct, and joyfully practised. Whoever offers Krishna a leaf, a flower, a fruit, or water with love and devotion — He accepts it. Pure devotion is the easiest and highest path.",
    keyVerse: {
      ref: "BG 9.26",
      sanskrit: "पत्रं पुष्पं फलं तोयम्",
      english: "If one offers Me with love a leaf, a flower, a fruit or water — I will accept it."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.18 52) 0%, oklch(0.86 0.22 46) 100%)",
    accentHue: 52
  },
  {
    chapter: 10,
    titleSanskrit: "विभूति योग",
    titleEnglish: "The Yoga of Divine Glories",
    subtitle: "Chapter 10 · 42 Verses",
    summary: "Krishna enumerates His divine manifestations. He is the best of everything — the brightest sun, the most majestic mountain, the wisest sage. All that is glorious, powerful, and beautiful in this world is but a spark of His splendour.",
    keyVerse: {
      ref: "BG 10.41",
      sanskrit: "यद्यद्विभूतिमत्सत्त्वम्",
      english: "Whatever is glorious, beautiful, or powerful — know that it springs from a fragment of My splendour."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.20 54) 0%, oklch(0.84 0.24 46) 100%)",
    accentHue: 54
  },
  {
    chapter: 11,
    titleSanskrit: "विश्वरूप दर्शन योग",
    titleEnglish: "The Yoga of the Cosmic Form",
    subtitle: "Chapter 11 · 55 Verses",
    summary: "Arjuna is granted divine vision. He sees the infinite Vishwaroopa of Krishna — countless arms, mouths, eyes, blazing like a thousand suns. Overwhelmed and trembling, he begs Krishna to return to His gentle two-armed form.",
    keyVerse: {
      ref: "BG 11.12",
      sanskrit: "दिवि सूर्यसहस्रस्य",
      english: "If thousands of suns rose at once, their combined radiance might resemble the Supreme's effulgence."
    },
    gradient: "linear-gradient(135deg, oklch(0.88 0.22 32) 0%, oklch(0.82 0.20 20) 100%)",
    accentHue: 32
  },
  {
    chapter: 12,
    titleSanskrit: "भक्ति योग",
    titleEnglish: "The Yoga of Devotion",
    subtitle: "Chapter 12 · 20 Verses",
    summary: "Krishna declares: the path of pure bhakti — loving devotion — is easier and more direct than the path of formless Brahman. He describes the qualities of the devotee most dear to Him: equal in joy and sorrow, free from ego and possessiveness.",
    keyVerse: {
      ref: "BG 12.14",
      sanskrit: "सन्तुष्टः सततं योगी",
      english: "The devotee who is pure, expert, impartial, and has renounced all undertakings — is most dear to Me."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.16 340) 0%, oklch(0.86 0.18 320) 100%)",
    accentHue: 340
  },
  {
    chapter: 13,
    titleSanskrit: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    titleEnglish: "The Yoga of the Field and Its Knower",
    subtitle: "Chapter 13 · 35 Verses",
    summary: "This body is the 'field' and the soul is the 'knower of the field'. Krishna is the Knower in all fields. True wisdom is to see the immortal soul in all living beings and to know that the body is temporary.",
    keyVerse: {
      ref: "BG 13.17",
      sanskrit: "ज्योतिषामपि तज्ज्योतिः",
      english: "That is the light of all lights, beyond all darkness — knowledge, the knowable, and the goal of knowledge."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.14 268) 0%, oklch(0.84 0.16 280) 100%)",
    accentHue: 268
  },
  {
    chapter: 14,
    titleSanskrit: "गुणत्रय विभाग योग",
    titleEnglish: "The Yoga of the Three Qualities",
    subtitle: "Chapter 14 · 27 Verses",
    summary: "All of nature is made of three gunas: Sattva (purity), Rajas (passion), and Tamas (inertia). These bind the soul to the body. One who transcends all three gunas attains liberation and merges in the Brahman.",
    keyVerse: {
      ref: "BG 14.19",
      sanskrit: "नान्यं गुणेभ्यः कर्तारम्",
      english: "When one knows the three gunas as the doers and knows the Self beyond them — they attain My divine nature."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.16 148) 0%, oklch(0.85 0.18 160) 100%)",
    accentHue: 148
  },
  {
    chapter: 15,
    titleSanskrit: "पुरुषोत्तम योग",
    titleEnglish: "The Yoga of the Supreme Person",
    subtitle: "Chapter 15 · 20 Verses",
    summary: "The cosmic Ashvattha tree has its roots above and branches below — it represents the world of maya. Only by cutting this tree with the axe of detachment can one reach the Supreme Person, Purushottama.",
    keyVerse: {
      ref: "BG 15.15",
      sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टः",
      english: "I am seated in the hearts of all. From Me come memory, knowledge and forgetfulness."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.18 46) 0%, oklch(0.84 0.20 36) 100%)",
    accentHue: 46
  },
  {
    chapter: 16,
    titleSanskrit: "दैवासुर सम्पद् विभाग योग",
    titleEnglish: "The Yoga of Divine and Demoniac Natures",
    subtitle: "Chapter 16 · 24 Verses",
    summary: "Krishna describes two types of human nature — divine (fearlessness, truthfulness, compassion, non-violence) and demoniac (arrogance, pride, cruelty). The divine leads to liberation; the demoniac leads to bondage.",
    keyVerse: {
      ref: "BG 16.3",
      sanskrit: "तेजः क्षमा धृतिः शौचम्",
      english: "Vigour, forgiveness, fortitude, purity, freedom from malice and pride — these are the divine endowments."
    },
    gradient: "linear-gradient(135deg, oklch(0.88 0.16 32) 0%, oklch(0.82 0.14 20) 100%)",
    accentHue: 32
  },
  {
    chapter: 17,
    titleSanskrit: "श्रद्धात्रय विभाग योग",
    titleEnglish: "The Yoga of the Threefold Faith",
    subtitle: "Chapter 17 · 28 Verses",
    summary: "Faith has three natures corresponding to the three gunas. Sattvic faith leads to worship of gods and sages; Rajasic to wealth and power; Tamasic to ghosts and the departed. Even food, penance, and charity have these three natures.",
    keyVerse: {
      ref: "BG 17.3",
      sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति",
      english: "The faith of every person corresponds to their nature. A person is what their faith is."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.14 220) 0%, oklch(0.85 0.16 240) 100%)",
    accentHue: 220
  },
  {
    chapter: 18,
    titleSanskrit: "मोक्ष संन्यास योग",
    titleEnglish: "The Yoga of Liberation",
    subtitle: "Chapter 18 · 78 Verses",
    summary: "The final and supreme teaching: abandon all varieties of dharma and surrender completely to Krishna. He alone will deliver you from all sin. This most confidential knowledge should be shared only with those who are devoted and will revere it.",
    keyVerse: {
      ref: "BG 18.66",
      sanskrit: "सर्वधर्मान्परित्यज्य",
      english: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.22 54) 0%, oklch(0.84 0.26 46) 100%)",
    accentHue: 54
  }
];
function PhotoModal({
  photo,
  allPhotos,
  onClose,
  onNavigate
}) {
  const [imgError, setImgError] = reactExports.useState(false);
  const idx = allPhotos.findIndex((p) => p.id === photo.id);
  const prev = idx > 0 ? allPhotos[idx - 1] : null;
  const next = idx < allPhotos.length - 1 ? allPhotos[idx + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      onKeyDown: (e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft" && prev) onNavigate(prev);
        if (e.key === "ArrowRight" && next) onNavigate(next);
      },
      role: "presentation",
      style: { background: "rgba(4,2,1,0.97)", backdropFilter: "blur(14px)" },
      "data-ocid": "gallery.modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center font-bold hover:opacity-70 transition-opacity",
            style: {
              background: "oklch(0.14 0.06 30 / 0.7)",
              borderRadius: "50%",
              color: "oklch(0.92 0.10 60)",
              border: "1px solid oklch(0.72 0.24 54 / 0.5)",
              fontSize: "1.1rem"
            },
            "aria-label": "Close photo",
            "data-ocid": "gallery.close_button",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full h-full flex items-center justify-center",
            onClick: (e) => e.stopPropagation(),
            onKeyDown: (e) => e.stopPropagation(),
            role: "presentation",
            children: [
              !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: photo.src,
                  alt: photo.caption,
                  className: "max-w-full max-h-full object-contain",
                  style: {
                    borderRadius: "8px",
                    border: "2.5px solid oklch(0.82 0.32 54 / 0.75)",
                    boxShadow: "0 0 0 5px oklch(0.78 0.28 54 / 0.20), 0 24px 80px oklch(0.10 0.06 46 / 0.8)"
                  },
                  onError: () => setImgError(true)
                },
                photo.id
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "w-full h-full flex flex-col items-center justify-center gap-4",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.90 0.12 54), oklch(0.84 0.18 46))",
                    borderRadius: "8px",
                    border: "2.5px solid oklch(0.82 0.32 54 / 0.75)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-7xl", children: "🕉️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xl font-bold",
                        style: { color: "oklch(0.38 0.20 46)" },
                        children: photo.captionHindi
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none px-4",
                  style: {
                    background: "oklch(0.08 0.06 30 / 0.72)",
                    borderRadius: "10px",
                    padding: "8px 18px",
                    border: "1px solid oklch(0.72 0.24 54 / 0.4)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-lg font-bold",
                        style: { color: "oklch(0.92 0.18 58)" },
                        children: photo.captionHindi
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-xs italic",
                        style: { color: "oklch(0.82 0.12 60 / 0.85)" },
                        children: photo.caption
                      }
                    )
                  ]
                }
              ),
              prev && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    onNavigate(prev);
                  },
                  className: "absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center font-bold hover:scale-110 transition-transform",
                  style: {
                    background: "oklch(0.10 0.06 30 / 0.72)",
                    borderRadius: "50%",
                    color: "oklch(0.90 0.10 60)",
                    border: "1px solid oklch(0.72 0.24 54 / 0.5)",
                    fontSize: "1.4rem"
                  },
                  "aria-label": "Previous",
                  "data-ocid": "gallery.pagination_prev",
                  children: "‹"
                }
              ),
              next && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    onNavigate(next);
                  },
                  className: "absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center font-bold hover:scale-110 transition-transform",
                  style: {
                    background: "oklch(0.10 0.06 30 / 0.72)",
                    borderRadius: "50%",
                    color: "oklch(0.90 0.10 60)",
                    border: "1px solid oklch(0.72 0.24 54 / 0.5)",
                    fontSize: "1.4rem"
                  },
                  "aria-label": "Next",
                  "data-ocid": "gallery.pagination_next",
                  children: "›"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function PhotoCard({
  photo,
  index,
  onClick
}) {
  const [loaded, setLoaded] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      initial: { opacity: 0, scale: 0.92 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.015, 0.35) },
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
      onClick,
      className: "relative group overflow-hidden cursor-pointer text-left",
      style: {
        borderRadius: "8px",
        border: "1.5px solid oklch(0.82 0.26 54 / 0.5)",
        boxShadow: "0 4px 18px oklch(0.18 0.08 46 / 0.30)",
        aspectRatio: "3/4",
        background: "oklch(0.94 0.07 58)"
      },
      "data-ocid": `gallery.photo.item.${index + 1}`,
      "aria-label": photo.captionHindi,
      children: [
        !loaded && !error && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 animate-pulse",
            style: {
              background: "linear-gradient(135deg, oklch(0.90 0.08 54), oklch(0.86 0.12 46))"
            }
          }
        ),
        !error ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: photo.src,
            alt: photo.caption,
            loading: "lazy",
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            style: { opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" },
            onLoad: () => setLoaded(true),
            onError: () => setError(true)
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full h-full flex flex-col items-center justify-center gap-2",
            style: {
              background: "linear-gradient(160deg, oklch(0.92 0.12 54) 0%, oklch(0.84 0.18 46) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🕉️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs text-center px-2 italic",
                  style: { color: "oklch(0.38 0.20 46)" },
                  children: photo.captionHindi
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-x-0 bottom-0 pointer-events-none",
            style: {
              background: "linear-gradient(to top, oklch(0.08 0.08 46 / 0.93) 0%, transparent 100%)",
              padding: "28px 8px 8px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body font-bold text-center leading-tight",
                  style: { fontSize: "0.70rem", color: "oklch(0.92 0.18 58)" },
                  children: photo.captionHindi
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-center tracking-wide",
                  style: {
                    fontSize: "0.55rem",
                    background: "linear-gradient(90deg, oklch(0.82 0.26 54), oklch(0.74 0.24 46))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.92,
                    letterSpacing: "0.08em",
                    marginTop: "2px"
                  },
                  children: "Sanatan Dharma ~ Krishna AI"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function StoryCardItem({
  card,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.06, 0.5), duration: 0.5 },
      className: "rounded-2xl overflow-hidden",
      style: {
        background: card.gradient,
        border: `2px solid oklch(0.82 0.24 ${card.accentHue} / 0.6)`,
        boxShadow: `0 6px 28px oklch(0.18 0.10 ${card.accentHue} / 0.30)`
      },
      "data-ocid": `gallery.story_card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: 4,
              background: `linear-gradient(90deg, oklch(0.68 0.28 ${card.accentHue}), oklch(0.82 0.32 ${card.accentHue}), oklch(0.68 0.28 ${card.accentHue}))`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg",
                style: {
                  background: `linear-gradient(135deg, oklch(0.78 0.30 ${card.accentHue}), oklch(0.66 0.26 ${card.accentHue}))`,
                  color: "oklch(0.12 0.06 30)",
                  boxShadow: `0 4px 16px oklch(0.58 0.24 ${card.accentHue} / 0.45)`,
                  border: `2px solid oklch(0.86 0.28 ${card.accentHue} / 0.6)`
                },
                children: card.chapter
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-body font-bold leading-tight",
                  style: {
                    fontSize: "1.15rem",
                    color: `oklch(0.25 0.14 ${card.accentHue})`
                  },
                  children: card.titleSanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic text-xs mt-0.5",
                  style: { color: `oklch(0.42 0.18 ${card.accentHue})` },
                  children: card.titleEnglish
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs mt-0.5",
                  style: { color: `oklch(0.50 0.14 ${card.accentHue} / 0.8)` },
                  children: card.subtitle
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mb-3",
              style: {
                height: 1,
                background: `linear-gradient(90deg, transparent, oklch(0.68 0.22 ${card.accentHue} / 0.5), transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body italic leading-relaxed mb-4",
              style: {
                fontSize: "0.72rem",
                color: `oklch(0.28 0.10 ${card.accentHue})`,
                lineHeight: 1.85
              },
              children: card.summary
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-3",
              style: {
                background: `oklch(0.98 0.04 ${card.accentHue} / 0.65)`,
                border: `1.5px solid oklch(0.72 0.22 ${card.accentHue} / 0.45)`,
                borderLeft: `4px solid oklch(0.68 0.28 ${card.accentHue})`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display text-xs font-bold tracking-wider uppercase mb-1",
                    style: { color: `oklch(0.45 0.22 ${card.accentHue})` },
                    children: [
                      "📖 ",
                      card.keyVerse.ref
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body font-bold mb-1",
                    style: {
                      fontSize: "0.78rem",
                      color: `oklch(0.32 0.16 ${card.accentHue})`
                    },
                    children: card.keyVerse.sanskrit
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body italic",
                    style: {
                      fontSize: "0.68rem",
                      color: `oklch(0.38 0.12 ${card.accentHue})`
                    },
                    children: [
                      '"',
                      card.keyVerse.english,
                      '"'
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: 3,
              background: `linear-gradient(90deg, transparent, oklch(0.72 0.26 ${card.accentHue} / 0.5), transparent)`
            }
          }
        )
      ]
    }
  );
}
function SectionHeader({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1.5px",
            background: "linear-gradient(to right, transparent, oklch(0.72 0.28 46 / 0.65))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🪷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1.5px",
            background: "linear-gradient(to left, transparent, oklch(0.72 0.28 46 / 0.65))"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "font-display font-bold",
        style: {
          fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
          color: "oklch(0.52 0.26 46)",
          textShadow: "0 0 20px oklch(0.80 0.30 54 / 0.30)"
        },
        children: title
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-body italic text-xs mt-1",
        style: { color: "oklch(0.52 0.18 46 / 0.75)" },
        children: subtitle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1px",
            background: "linear-gradient(to right, transparent, oklch(0.72 0.22 54 / 0.4))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "font-display text-xs tracking-widest",
          style: { color: "oklch(0.68 0.24 46 / 0.7)" },
          children: "✦ OM ✦"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1px",
            background: "linear-gradient(to left, transparent, oklch(0.72 0.22 54 / 0.4))"
          }
        }
      )
    ] })
  ] });
}
const PETAL_HUE = [340, 0, 32, 54, 320, 340, 280, 160, 340, 54, 32, 0];
const PETAL_CFG = PETAL_HUE.map((hue, i) => ({
  key: `fp${i}`,
  left: `${4 + i * 8}%`,
  size: 7 + i % 4 * 3,
  rot: i * 30 % 180,
  dur: `${1.8 + i % 4 * 0.3}s`,
  delay: `${(i * 0.14).toFixed(2)}s`,
  hue
}));
function FlowerPetalShower({ active }) {
  if (!active) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none z-50", "aria-hidden": true, children: PETAL_CFG.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "absolute",
        left: p.left,
        top: "-20px",
        width: p.size,
        height: p.size * 1.4,
        background: `oklch(0.86 0.26 ${p.hue} / 0.88)`,
        borderRadius: "50% 50% 30% 30%",
        animation: `petalRain ${p.dur} ease-in forwards`,
        animationDelay: p.delay,
        transform: `rotate(${p.rot}deg)`
      }
    },
    p.key
  )) });
}
function GalleryPage() {
  const [photos, setPhotos] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [uploading, setUploading] = reactExports.useState(false);
  const [uploadError, setUploadError] = reactExports.useState(null);
  const [openPhoto, setOpenPhoto] = reactExports.useState(null);
  const [petals, setPetals] = reactExports.useState(false);
  const [sheetModalSrc, setSheetModalSrc] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const refreshPhotos = reactExports.useCallback(async () => {
    try {
      const metas = await getBackend().getGalleryUploads();
      setPhotos(metas.map(metaToPhoto));
    } catch {
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    refreshPhotos();
  }, [refreshPhotos]);
  function handlePhotoOpen(photo) {
    setOpenPhoto(photo);
    setPetals(true);
    setTimeout(() => setPetals(false), 3e3);
  }
  async function handleFileSelect(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadError(null);
    try {
      for (const file of Array.from(files)) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const blob = ExternalBlob.fromBytes(bytes, file.type, file.name);
        await getBackend().uploadGalleryImage({
          asset: blob,
          category: "darshan",
          caption: file.name
        });
        const optimistic = {
          id: `local-${Date.now()}-${file.name}`,
          src: blob.getDirectURL(),
          caption: file.name,
          captionHindi: file.name
        };
        setPhotos((prev) => [optimistic, ...prev]);
      }
      ue.success("🪷 Your Krishna photo has been offered to the gallery.");
      refreshPhotos();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unable to upload your photo.";
      setUploadError(msg);
      ue.error(`Upload failed: ${msg}`);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen relative",
      style: {
        background: "linear-gradient(160deg, oklch(0.97 0.07 68) 0%, oklch(0.93 0.10 62) 40%, oklch(0.95 0.08 58) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rainbow-border-line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FlowerPetalShower, { active: petals }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 pt-6 pb-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs tracking-[0.32em] uppercase mb-1",
                    style: { color: "oklch(0.60 0.24 46 / 0.90)" },
                    children: "✦ कृष्ण दर्शन ✦"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display font-bold italic",
                    style: {
                      fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
                      color: "oklch(0.56 0.28 46)",
                      textShadow: "0 0 28px oklch(0.82 0.32 54 / 0.40)"
                    },
                    children: "ॐ Krishna Gallery"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1",
                    style: { color: "oklch(0.52 0.18 46 / 0.80)" },
                    children: "Sanatan Dharma · Krishna AI"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  flex: 1,
                  height: 2,
                  background: "linear-gradient(to right, transparent, oklch(0.80 0.30 54 / 0.6))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-sm font-bold",
                style: { color: "oklch(0.64 0.26 46)" },
                children: "✦ श्री हरि ✦"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  flex: 1,
                  height: 2,
                  background: "linear-gradient(to left, transparent, oklch(0.80 0.30 54 / 0.6))"
                }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "max-w-3xl mx-auto px-4 pb-4",
            id: "krishna-photos",
            "data-ocid": "gallery.photos_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  title: "Krishna Darshan",
                  subtitle: "Sacred Images of the Divine · Tap any image for full darshan"
                }
              ),
              loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-3 gap-2.5",
                  "data-ocid": "gallery.photos.loading_state",
                  children: [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "animate-pulse rounded-lg",
                      style: {
                        aspectRatio: "3/4",
                        background: "linear-gradient(135deg, oklch(0.90 0.08 54), oklch(0.86 0.12 46))",
                        border: "1.5px solid oklch(0.82 0.26 54 / 0.4)"
                      }
                    },
                    i
                  ))
                }
              ) : photos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2.5", children: photos.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                PhotoCard,
                {
                  photo,
                  index: i,
                  onClick: () => handlePhotoOpen(photo)
                },
                photo.id
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl",
                  style: {
                    background: "linear-gradient(160deg, oklch(0.96 0.06 62) 0%, oklch(0.92 0.10 54) 100%)",
                    border: "2px dashed oklch(0.72 0.24 54 / 0.45)",
                    boxShadow: "0 4px 24px oklch(0.18 0.08 46 / 0.18)"
                  },
                  "data-ocid": "gallery.photos.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🪷" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display font-bold italic mb-2",
                        style: {
                          fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
                          color: "oklch(0.56 0.26 46)",
                          textShadow: "0 0 20px oklch(0.82 0.30 54 / 0.25)"
                        },
                        children: "ॐ No images yet"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body italic",
                        style: {
                          fontSize: "0.85rem",
                          color: "oklch(0.52 0.18 46 / 0.85)",
                          maxWidth: "20rem",
                          lineHeight: 1.7
                        },
                        children: "Your divine photos will appear here. Add your own Krishna photos to begin your darshan journey."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "wax-seal-btn mt-6",
                        onClick: () => {
                          var _a;
                          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                        },
                        disabled: uploading,
                        "data-ocid": "gallery.upload_button",
                        children: uploading ? "Offering…" : "🪷 Add Krishna Photo"
                      }
                    ),
                    uploadError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body italic mt-3 text-center",
                        style: {
                          fontSize: "0.78rem",
                          color: "oklch(0.50 0.20 25 / 0.95)",
                          maxWidth: "20rem"
                        },
                        "data-ocid": "gallery.upload_error",
                        children: uploadError
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-5 w-full max-w-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            flex: 1,
                            height: "1px",
                            background: "linear-gradient(to right, transparent, oklch(0.72 0.22 54 / 0.5))"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-display text-xs tracking-widest",
                          style: { color: "oklch(0.68 0.24 46 / 0.7)" },
                          children: "✦ श्री कृष्ण ✦"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            flex: 1,
                            height: "1px",
                            background: "linear-gradient(to left, transparent, oklch(0.72 0.22 54 / 0.5))"
                          }
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "max-w-3xl mx-auto px-4 pb-10 mt-8",
            id: "story-cards",
            "data-ocid": "gallery.story_cards_section",
            style: {
              background: "linear-gradient(160deg, oklch(0.94 0.08 62 / 0.0) 0%, oklch(0.94 0.08 62 / 0.0) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mb-6",
                  style: {
                    height: 2,
                    background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 46 / 0.6), oklch(0.82 0.32 54 / 0.8), oklch(0.72 0.26 46 / 0.6), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  title: "Krishna Katha — Story Cards",
                  subtitle: "18 Chapters of the Bhagavad Gita · The Complete Sacred Story"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: STORY_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StoryCardItem, { card, index: i }, card.chapter)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openPhoto && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoModal,
          {
            photo: openPhoto,
            allPhotos: photos,
            onClose: () => setOpenPhoto(null),
            onNavigate: (p) => setOpenPhoto(p)
          }
        ) }),
        photos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "wax-seal-btn fixed bottom-6 right-6 z-40 shadow-lg",
            onClick: () => {
              var _a;
              return (_a = fileInputRef.current) == null ? void 0 : _a.click();
            },
            disabled: uploading,
            "aria-label": "Add Krishna photo",
            "data-ocid": "gallery.floating_upload_button",
            children: uploading ? "Offering…" : "＋ Add"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: "image/*",
            multiple: true,
            className: "hidden",
            onChange: handleFileSelect,
            "data-ocid": "gallery.file_input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rainbow-border-line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 mb-8 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "🪷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl font-bold mb-2",
                style: { color: "oklch(72% 0.18 54)" },
                children: "दिव्य कथा पट्टिकाएँ"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", style: { color: "oklch(62% 0.14 54)" }, children: "Divine Krishna Story Cards — Sacred Wisdom Collection" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
            {
              src: "/assets/story-cards-sheet-1.png",
              label: "Story Cards — Sheet 1",
              caption: "Cards 1–25 · Krishna Wisdom"
            },
            {
              src: "/assets/story-cards-sheet-2.png",
              label: "Story Cards — Sheet 2",
              caption: "Cards 26–50 · Sacred Teachings"
            }
          ].map((sheet) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSheetModalSrc(sheet.src),
              className: "relative rounded-2xl overflow-hidden cursor-pointer border-2 hover:scale-[1.02] transition-all duration-300 focus:outline-none w-full text-left",
              style: {
                borderColor: "oklch(72% 0.18 54 / 0.6)",
                background: "oklch(97% 0.02 54)",
                boxShadow: "0 4px 24px oklch(72% 0.18 54 / 0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: sheet.src,
                    alt: sheet.label,
                    className: "w-full h-auto block"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", style: { background: "oklch(97% 0.02 54)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-bold text-lg",
                      style: { color: "oklch(40% 0.10 54)" },
                      children: sheet.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm mt-1",
                      style: { color: "oklch(55% 0.08 54)" },
                      children: [
                        sheet.caption,
                        " · Tap to view full size"
                      ]
                    }
                  )
                ] })
              ]
            },
            sheet.src
          )) })
        ] }),
        sheetModalSrc && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
            style: { background: "rgba(10,6,2,0.96)" },
            onClick: () => setSheetModalSrc(null),
            onKeyDown: (e) => {
              if (e.key === "Escape") setSheetModalSrc(null);
            },
            role: "presentation",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative max-w-5xl max-h-[92vh] w-full",
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => e.stopPropagation(),
                role: "presentation",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSheetModalSrc(null),
                      className: "absolute -top-12 right-0 text-3xl font-bold hover:opacity-70 transition-opacity",
                      style: { color: "oklch(72% 0.18 54)" },
                      "aria-label": "Close",
                      children: "✕"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: sheetModalSrc,
                      alt: "Story Cards",
                      className: "w-full h-auto max-h-[88vh] object-contain rounded-2xl",
                      style: { border: "3px solid oklch(72% 0.18 54)" }
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
export {
  GalleryPage,
  GalleryPage as default
};
