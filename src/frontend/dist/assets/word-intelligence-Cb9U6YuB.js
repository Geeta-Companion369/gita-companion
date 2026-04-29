import { r as reactExports, j as jsxRuntimeExports, a as Link } from "./index-vCKiyWhq.js";
import { X } from "./x-V-GgIE-w.js";
function WordIntelligencePopup({
  word,
  intelligence,
  onClose,
  relatedVerses,
  anchorRect
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);
  reactExports.useEffect(() => {
    function handle(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);
  const style = { position: "fixed", zIndex: 9999 };
  if (anchorRect) {
    const top = Math.min(anchorRect.bottom + 8, window.innerHeight - 320);
    const left = Math.min(
      Math.max(anchorRect.left, 12),
      window.innerWidth - 320
    );
    style.top = top;
    style.left = left;
  } else {
    style.top = "50%";
    style.left = "50%";
    style.transform = "translate(-50%, -50%)";
  }
  const displayRelated = relatedVerses.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      style: {
        ...style,
        width: 300,
        background: "linear-gradient(160deg, oklch(0.95 0.07 74) 0%, oklch(0.92 0.08 68) 55%, oklch(0.89 0.09 63) 100%)",
        border: "1.5px solid oklch(0.72 0.28 52 / 0.55)",
        borderRadius: "0.25rem",
        boxShadow: "0 8px 32px oklch(0.18 0.06 44 / 0.35), inset 0 1px 0 oklch(0.96 0.08 74 / 0.7)"
      },
      "aria-label": `Word intelligence for ${word}`,
      "aria-modal": "true",
      tabIndex: -1,
      "data-ocid": "word-intelligence.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            style: {
              height: 3,
              background: "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.6), oklch(0.72 0.28 52 / 0.9), oklch(0.72 0.28 52 / 0.6), transparent)",
              borderRadius: "0.25rem 0.25rem 0 0"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              "aria-label": "Close word intelligence",
              className: "absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth",
              "data-ocid": "word-intelligence.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-accent leading-none mb-0.5",
              lang: "sa",
              style: { fontSize: "2.2rem", fontWeight: 600 },
              children: intelligence.word
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body italic text-sm text-accent/70 mb-3 leading-none", children: intelligence.iast }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "mb-3",
              style: {
                height: 1,
                background: "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.45), transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground leading-snug mb-3 text-sm", children: intelligence.meaning }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-body text-xs italic px-2 py-0.5 rounded-sm",
                style: {
                  background: "oklch(0.72 0.28 52 / 0.12)",
                  border: "1px solid oklch(0.72 0.28 52 / 0.3)",
                  color: "oklch(0.35 0.12 44)"
                },
                children: intelligence.grammar
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-body text-xs italic px-2 py-0.5 rounded-sm",
                style: {
                  background: "oklch(0.45 0.18 280 / 0.08)",
                  border: "1px solid oklch(0.45 0.18 280 / 0.22)",
                  color: "oklch(0.35 0.12 270)"
                },
                children: [
                  "×",
                  intelligence.frequency,
                  " in Gita"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs italic text-muted-foreground/80 leading-snug mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "not-italic font-semibold text-accent/70", children: [
              "Etymology:",
              " "
            ] }),
            intelligence.etymology
          ] }),
          displayRelated.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-1.5", children: "Related Verses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: displayRelated.map((rv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/verse/$chapterId/$verseId",
                params: { chapterId: String(rv.chapter), verseId: rv.id },
                onClick: onClose,
                className: "font-body text-xs italic text-accent hover:text-primary transition-smooth border-b border-accent/30 hover:border-primary/50 pb-0.5",
                "data-ocid": `word-intelligence.related_verse.${rv.id}`,
                children: [
                  rv.chapter,
                  ".",
                  rv.verse
                ]
              },
              rv.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute bottom-3 right-4 text-accent/20 select-none font-display",
              style: { fontSize: "1.1rem" },
              children: "✦"
            }
          )
        ] })
      ]
    }
  );
}
const WORD_INTELLIGENCE = {
  karma: {
    word: "कर्म",
    iast: "karma",
    meaning: "Action; deed; the law of cause and effect; one's duty in action",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √kṛ (to do, to make) + suffix -man",
    frequency: 75,
    relatedVerses: ["2.47", "3.8", "4.17"]
  },
  dharma: {
    word: "धर्म",
    iast: "dharma",
    meaning: "Righteousness; duty; cosmic order; the moral law governing the universe",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √dhṛ (to hold, to sustain) — that which sustains",
    frequency: 63,
    relatedVerses: ["1.1", "3.35", "4.7"]
  },
  yoga: {
    word: "योग",
    iast: "yoga",
    meaning: "Union; spiritual discipline; the path of connecting the individual soul with the Divine",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √yuj (to yoke, to join, to unite)",
    frequency: 80,
    relatedVerses: ["2.48", "2.50", "6.23"]
  },
  atman: {
    word: "आत्मन्",
    iast: "ātman",
    meaning: "The individual Self; the eternal soul; the indwelling spirit that is identical with Brahman",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √an (to breathe) — the breathing self",
    frequency: 45,
    relatedVerses: ["2.20", "6.5", "13.31"]
  },
  brahman: {
    word: "ब्रह्मन्",
    iast: "brahman",
    meaning: "The Absolute; the infinite, formless, all-pervading supreme consciousness",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √bṛh (to grow, to expand) — the ever-expanding absolute",
    frequency: 38,
    relatedVerses: ["4.24", "5.19", "14.27"]
  },
  moksha: {
    word: "मोक्ष",
    iast: "mokṣa",
    meaning: "Liberation; release from the cycle of birth and death; the ultimate goal of human life",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √muc (to release, to liberate) + suffix -sha",
    frequency: 18,
    relatedVerses: ["2.51", "5.28", "18.66"]
  },
  bhakti: {
    word: "भक्ति",
    iast: "bhakti",
    meaning: "Devotion; loving surrender to the Divine; the path of the heart",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √bhaj (to share, to worship) + suffix -ti",
    frequency: 22,
    relatedVerses: ["9.26", "12.2", "18.65"]
  },
  jnana: {
    word: "ज्ञान",
    iast: "jñāna",
    meaning: "Knowledge; spiritual wisdom; the direct realization of truth — the path of the intellect",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √jñā (to know) + suffix -ana",
    frequency: 40,
    relatedVerses: ["4.33", "4.38", "7.2"]
  },
  buddhi: {
    word: "बुद्धि",
    iast: "buddhi",
    meaning: "Intellect; discriminating intelligence; the faculty that distinguishes real from unreal",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √budh (to be awake, to understand) + suffix -i",
    frequency: 35,
    relatedVerses: ["2.41", "2.65", "3.42"]
  },
  manas: {
    word: "मनस्",
    iast: "manas",
    meaning: "Mind; the thinking faculty; the seat of emotions, desires, and mental fluctuations",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √man (to think) + suffix -as",
    frequency: 28,
    relatedVerses: ["6.34", "8.7", "15.7"]
  },
  ahamkara: {
    word: "अहङ्कार",
    iast: "ahaṅkāra",
    meaning: "Ego; the sense of 'I-ness'; false identification with the body and mind",
    grammar: "noun, masculine, nominative singular",
    etymology: "aham (I) + kāra (maker) — the maker of the 'I' thought; the creator of the separate self",
    frequency: 12,
    relatedVerses: ["3.27", "13.5", "16.18"]
  },
  prakriti: {
    word: "प्रकृति",
    iast: "prakṛiti",
    meaning: "Nature; the material world; the primordial matter from which all creation emerges",
    grammar: "noun, feminine, nominative singular",
    etymology: "pra (forward, primary) + kṛiti (making) — the primary maker of creation",
    frequency: 32,
    relatedVerses: ["3.5", "7.4", "13.29"]
  },
  purusha: {
    word: "पुरुष",
    iast: "puruṣa",
    meaning: "The eternal Witness; pure consciousness; the divine Person beyond all material nature",
    grammar: "noun, masculine, nominative singular",
    etymology: "pura (city/body) + uṣa (dweller) — the one who dwells in the city of the body",
    frequency: 24,
    relatedVerses: ["13.19", "15.16", "15.17"]
  },
  sattva: {
    word: "सत्त्व",
    iast: "sattva",
    meaning: "The quality of purity, clarity, and goodness; the highest of the three gunas",
    grammar: "noun, neuter, nominative singular",
    etymology: "From sat (being, truth) + -tva (suffix of quality) — the essence of being",
    frequency: 30,
    relatedVerses: ["14.6", "17.2", "18.37"]
  },
  rajas: {
    word: "रजस्",
    iast: "rajas",
    meaning: "The quality of passion, activity, and restlessness; the middle of the three gunas",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √raj (to color, to excite) — that which colors and agitates",
    frequency: 28,
    relatedVerses: ["14.7", "17.2", "18.24"]
  },
  tamas: {
    word: "तमस्",
    iast: "tamas",
    meaning: "The quality of inertia, darkness, and delusion; the lowest of the three gunas",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √tam (to be dark, to suffocate) — darkness, inertia",
    frequency: 26,
    relatedVerses: ["14.8", "17.2", "18.25"]
  },
  ahimsa: {
    word: "अहिंसा",
    iast: "ahiṁsā",
    meaning: "Non-violence; non-harming; the principle of causing no harm to any living being",
    grammar: "noun, feminine, nominative singular",
    etymology: "a (not) + hiṁsā (injury/harm) — absence of violence",
    frequency: 8,
    relatedVerses: ["10.5", "13.7", "16.2"]
  },
  satya: {
    word: "सत्य",
    iast: "satya",
    meaning: "Truth; truthfulness; alignment with the eternal reality that never changes",
    grammar: "noun/adjective, neuter, nominative singular",
    etymology: "From sat (being, that which exists) — that which accords with being",
    frequency: 10,
    relatedVerses: ["10.4", "13.7", "17.15"]
  },
  tapas: {
    word: "तपस्",
    iast: "tapas",
    meaning: "Austerity; spiritual discipline; the burning of impurities through sustained practice",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √tap (to burn, to heat) — the burning away of impurities",
    frequency: 20,
    relatedVerses: ["4.28", "17.14", "17.17"]
  },
  yajna: {
    word: "यज्ञ",
    iast: "yajña",
    meaning: "Sacrifice; sacred offering; any act performed as worship dedicated to the Divine",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √yaj (to worship, to offer) + suffix -na",
    frequency: 32,
    relatedVerses: ["3.9", "3.14", "4.24"]
  },
  seva: {
    word: "सेवा",
    iast: "sevā",
    meaning: "Service; selfless service offered without expectation of reward",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √sev (to serve, to attend to) + suffix -ā",
    frequency: 6,
    relatedVerses: ["4.34", "9.2", "18.46"]
  },
  guna: {
    word: "गुण",
    iast: "guṇa",
    meaning: "Quality; attribute; one of the three fundamental forces of nature (sattva, rajas, tamas)",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √guṇ (to multiply, to thread) — a strand of nature's rope",
    frequency: 45,
    relatedVerses: ["3.5", "3.27", "14.5"]
  },
  vairagya: {
    word: "वैराग्य",
    iast: "vairāgya",
    meaning: "Dispassion; non-attachment; the absence of craving for sensory pleasures",
    grammar: "noun, neuter, nominative singular",
    etymology: "vi (without) + rāga (color, passion) — colorless, without passionate attachment",
    frequency: 7,
    relatedVerses: ["2.52", "6.35", "13.8"]
  },
  viveka: {
    word: "विवेक",
    iast: "viveka",
    meaning: "Discrimination; the ability to discern the real from the unreal, eternal from temporary",
    grammar: "noun, masculine, nominative singular",
    etymology: "vi (apart) + veka (from root √vic, to sift) — the sifting of reality",
    frequency: 5,
    relatedVerses: ["2.11", "2.18", "4.18"]
  },
  samadhi: {
    word: "समाधि",
    iast: "samādhi",
    meaning: "The highest state of meditation; complete absorption in the Divine; the pinnacle of yoga",
    grammar: "noun, masculine, nominative singular",
    etymology: "sam (together, completely) + ā (towards) + dhā (to place) — complete placement of mind",
    frequency: 9,
    relatedVerses: ["2.44", "6.10", "6.14"]
  },
  dhyana: {
    word: "ध्यान",
    iast: "dhyāna",
    meaning: "Meditation; sustained concentration on the Divine; the seventh limb of yoga",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √dhyai (to think upon, to meditate) + suffix -ana",
    frequency: 15,
    relatedVerses: ["6.12", "12.12", "18.52"]
  },
  mukti: {
    word: "मुक्ति",
    iast: "mukti",
    meaning: "Liberation; freedom from the cycle of birth and death; synonym of moksha",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √muc (to release) + suffix -ti",
    frequency: 8,
    relatedVerses: ["5.29", "14.20", "18.66"]
  },
  maya: {
    word: "माया",
    iast: "māyā",
    meaning: "Illusion; the Divine power that projects the apparent multiplicity of the world",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √mā (to measure, to create) — that which is measured out",
    frequency: 12,
    relatedVerses: ["4.6", "7.14", "7.25"]
  },
  shakti: {
    word: "शक्ति",
    iast: "śakti",
    meaning: "Power; divine energy; the dynamic creative force of the cosmos",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √śak (to be able, to be capable) + suffix -ti",
    frequency: 8,
    relatedVerses: ["7.8", "10.39", "11.19"]
  },
  deva: {
    word: "देव",
    iast: "deva",
    meaning: "Divine being; celestial deity; one who shines or bestows gifts",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √div (to shine, to play) — the shining one",
    frequency: 20,
    relatedVerses: ["3.11", "9.25", "11.15"]
  },
  guru: {
    word: "गुरु",
    iast: "guru",
    meaning: "Spiritual teacher; the weighty one who dispels darkness with the light of wisdom",
    grammar: "noun, masculine, nominative singular",
    etymology: "gu (darkness) + ru (remover) — one who removes spiritual darkness",
    frequency: 7,
    relatedVerses: ["4.34", "17.14", "18.75"]
  },
  mantra: {
    word: "मन्त्र",
    iast: "mantra",
    meaning: "Sacred sound formula; a syllable or phrase that protects the mind when meditated upon",
    grammar: "noun, masculine, nominative singular",
    etymology: "manas (mind) + tra (protector) — that which protects the mind",
    frequency: 6,
    relatedVerses: ["7.8", "8.13", "17.14"]
  },
  japa: {
    word: "जप",
    iast: "japa",
    meaning: "Repetition of a name or mantra; the practice of quietly repeating a sacred name",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √jap (to utter in a low voice, to whisper)",
    frequency: 4,
    relatedVerses: ["10.25", "17.14", "18.70"]
  },
  mala: {
    word: "माला",
    iast: "mālā",
    meaning: "Garland; a string of 108 beads used to count mantra repetitions during japa",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √mal (to hold, to adorn) — that which adorns",
    frequency: 3,
    relatedVerses: ["7.7", "10.28", "11.17"]
  },
  puja: {
    word: "पूजा",
    iast: "pūjā",
    meaning: "Worship; ritual veneration offered to a deity with devotion",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √pūj (to honor, to worship) + suffix -ā",
    frequency: 5,
    relatedVerses: ["9.26", "17.11", "18.46"]
  },
  prasad: {
    word: "प्रसाद",
    iast: "prasāda",
    meaning: "Grace; clarity; food blessed by the Divine; the gift of divine benevolence",
    grammar: "noun, masculine, nominative singular",
    etymology: "pra (thoroughly) + sāda (from √sad, to settle) — complete settling of the mind",
    frequency: 8,
    relatedVerses: ["2.64", "2.65", "18.37"]
  },
  lila: {
    word: "लीला",
    iast: "līlā",
    meaning: "Divine play; the spontaneous, effortless, joyful activity of the Divine",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √lī (to merge, to dissolve) — that which absorbs everything in joy",
    frequency: 3,
    relatedVerses: ["4.9", "9.11", "11.8"]
  },
  kirtan: {
    word: "कीर्तन",
    iast: "kīrtana",
    meaning: "Devotional singing; the practice of glorifying the Divine through song and chant",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √kīrt (to mention, to praise) + suffix -ana",
    frequency: 3,
    relatedVerses: ["10.9", "18.68", "18.70"]
  },
  satsang: {
    word: "सत्सङ्ग",
    iast: "satsaṅga",
    meaning: "Company of the truth; gathering with spiritual seekers; association with the holy",
    grammar: "compound noun, masculine",
    etymology: "sat (truth, good) + saṅga (company, association) — company of truth",
    frequency: 2,
    relatedVerses: ["2.60", "4.34", "10.9"]
  },
  arjuna: {
    word: "अर्जुन",
    iast: "arjuna",
    meaning: "The third Pandava; meaning 'bright, shining, pure white'; the supreme archer and primary student of the Gita",
    grammar: "proper noun, masculine, nominative singular",
    etymology: "From root √arj (to earn, to acquire) — the shining one who earns glory",
    frequency: 85,
    relatedVerses: ["1.1", "2.1", "18.73"]
  },
  krishna: {
    word: "कृष्ण",
    iast: "kṛṣṇa",
    meaning: "The dark one; the all-attractive; the Supreme Being who spoke the Bhagavad Gita to Arjuna",
    grammar: "proper noun, masculine, nominative singular",
    etymology: "From root √kṛṣ (to drag, to attract) — the all-attractive one",
    frequency: 95,
    relatedVerses: ["1.24", "10.37", "18.78"]
  },
  kurukshetra: {
    word: "कुरुक्षेत्र",
    iast: "kurukṣetra",
    meaning: "The sacred battlefield where the Mahabharata war took place; literally 'the field of the Kurus'",
    grammar: "proper noun compound, neuter",
    etymology: "kuru (the Kuru dynasty) + kṣetra (field, sacred place)",
    frequency: 6,
    relatedVerses: ["1.1", "1.2", "8.17"]
  },
  pandava: {
    word: "पाण्डव",
    iast: "pāṇḍava",
    meaning: "Son of Pandu; referring to the five sons of King Pandu — Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva",
    grammar: "noun, masculine, nominative singular",
    etymology: "pāṇḍu (pale, white) + ava (descendant) — descendant of Pandu",
    frequency: 18,
    relatedVerses: ["1.3", "1.14", "11.14"]
  },
  kaurava: {
    word: "कौरव",
    iast: "kaurava",
    meaning: "Descendant of Kuru; the hundred sons of Dhritarashtra led by Duryodhana",
    grammar: "noun, masculine, nominative singular",
    etymology: "kuru (the Kuru dynasty) + ava (descendant) — descendant of Kuru",
    frequency: 10,
    relatedVerses: ["1.1", "1.36", "11.26"]
  },
  sanjaya: {
    word: "सञ्जय",
    iast: "sañjaya",
    meaning: "The charioteer-minister of Dhritarashtra who narrates the Gita; meaning 'completely victorious'",
    grammar: "proper noun, masculine, nominative singular",
    etymology: "sam (completely) + jaya (victory) — the completely victorious one",
    frequency: 40,
    relatedVerses: ["1.1", "1.2", "18.74"]
  },
  dhritarashtra: {
    word: "धृतराष्ट्र",
    iast: "dhṛitarāṣṭra",
    meaning: "The blind king of Hastinapura; father of the Kauravas; his name means 'he who holds the kingdom'",
    grammar: "proper noun, masculine, nominative singular",
    etymology: "dhṛita (held, maintained) + rāṣṭra (kingdom) — he who holds the kingdom",
    frequency: 12,
    relatedVerses: ["1.1", "1.20", "18.74"]
  },
  duryodhana: {
    word: "दुर्योधन",
    iast: "duryodhana",
    meaning: "The eldest son of Dhritarashtra; the primary antagonist of the Mahabharata; 'one who is difficult to fight'",
    grammar: "proper noun, masculine, nominative singular",
    etymology: "dur (difficult) + yodhana (fighting) — difficult to fight against",
    frequency: 8,
    relatedVerses: ["1.2", "1.3", "1.23"]
  },
  vyasa: {
    word: "व्यास",
    iast: "vyāsa",
    meaning: "The sage who compiled the Mahabharata and the Bhagavad Gita; meaning 'arranger, compiler'",
    grammar: "proper noun, masculine, nominative singular",
    etymology: "From root √vi+as (to arrange, to compile) — the great arranger",
    frequency: 4,
    relatedVerses: ["10.37", "18.75", "18.78"]
  },
  shankha: {
    word: "शङ्ख",
    iast: "śaṅkha",
    meaning: "Conch shell; a sacred instrument blown at the start of battle and worship; symbol of victory and dharma",
    grammar: "noun, masculine, nominative singular",
    etymology: "From Sanskrit root related to the curling shell — the sacred spiral",
    frequency: 10,
    relatedVerses: ["1.12", "1.14", "1.15"]
  },
  chakra: {
    word: "चक्र",
    iast: "cakra",
    meaning: "The discus weapon of Vishnu/Krishna; wheel; also the energy centers in the subtle body",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √car (to move) — the ever-moving wheel",
    frequency: 5,
    relatedVerses: ["11.17", "11.24", "17.8"]
  },
  padma: {
    word: "पद्म",
    iast: "padma",
    meaning: "Lotus; the most sacred flower in Vedic tradition, symbolizing purity rising from mud",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √pad (to go, to purify) — the purifying one",
    frequency: 6,
    relatedVerses: ["5.10", "11.17", "12.6"]
  },
  om: {
    word: "ॐ",
    iast: "oṃ",
    meaning: "The primordial sound of creation; the syllable that contains the entire universe; the name of Brahman",
    grammar: "indeclinable sacred syllable",
    etymology: "A-U-M: A (waking state, Brahma), U (dream state, Vishnu), M (deep sleep, Shiva) — the three states of consciousness united",
    frequency: 18,
    relatedVerses: ["7.8", "8.13", "9.17"]
  },
  // ─── Extended Word Set ──────────────────────────────────────────────────────
  svadharma: {
    word: "स्वधर्म",
    iast: "svadharma",
    meaning: "One's own duty; the unique righteous path determined by one's nature, stage of life, and role in the cosmic order",
    grammar: "compound noun, masculine",
    etymology: "sva (own, self) + dharma (duty, righteousness) — one's own righteous duty",
    frequency: 5,
    relatedVerses: ["3.35", "18.41", "18.47"]
  },
  nishkama: {
    word: "निष्काम",
    iast: "niṣkāma",
    meaning: "Desireless; without selfish motive; performing action without craving for its fruits",
    grammar: "adjective, masculine, nominative singular",
    etymology: "niṣ (without, away from) + kāma (desire) — free from desire",
    frequency: 4,
    relatedVerses: ["2.47", "3.9", "5.12"]
  },
  kama: {
    word: "काम",
    iast: "kāma",
    meaning: "Desire; sensory craving; the force of wanting — identified by Krishna as the great enemy",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √kam (to desire, to love) — the desiring principle",
    frequency: 22,
    relatedVerses: ["2.62", "3.37", "7.11"]
  },
  krodha: {
    word: "क्रोध",
    iast: "krodha",
    meaning: "Anger; wrath; born of frustrated desire — Krishna identifies it as one of the three gates to hell",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √krudhh (to be wrathful) + suffix -a",
    frequency: 16,
    relatedVerses: ["2.63", "3.37", "16.21"]
  },
  lobha: {
    word: "लोभ",
    iast: "lobha",
    meaning: "Greed; covetousness; excessive desire for accumulation — the third gate to self-destruction",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √lubh (to covet, to desire excessively) + suffix -a",
    frequency: 8,
    relatedVerses: ["16.21", "17.25", "18.27"]
  },
  moha: {
    word: "मोह",
    iast: "moha",
    meaning: "Delusion; infatuation; the fundamental confusion that mistakes the unreal for real",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √muh (to be bewildered, to be confused) + suffix -a",
    frequency: 14,
    relatedVerses: ["2.11", "4.35", "18.73"]
  },
  ahara: {
    word: "आहार",
    iast: "āhāra",
    meaning: "Food; diet; what one takes in — the Gita teaches that sattvic food purifies the mind",
    grammar: "noun, masculine, nominative singular",
    etymology: "ā (towards) + hāra (from √hṛ, to take) — what is taken in",
    frequency: 6,
    relatedVerses: ["6.17", "17.7", "17.8"]
  },
  sannyasa: {
    word: "संन्यास",
    iast: "saṃnyāsa",
    meaning: "Renunciation; the fourth stage of life; complete surrender of all worldly activities to the Divine",
    grammar: "noun, masculine, nominative singular",
    etymology: "sam (completely) + ni (down) + asa (from √as, to throw) — complete throwing down",
    frequency: 14,
    relatedVerses: ["5.1", "18.1", "18.2"]
  },
  tyaga: {
    word: "त्याग",
    iast: "tyāga",
    meaning: "Relinquishment; the giving up of the fruits of action while continuing to act",
    grammar: "noun, masculine, nominative singular",
    etymology: "From root √tyaj (to abandon, to give up) + suffix -a",
    frequency: 12,
    relatedVerses: ["18.2", "18.4", "18.6"]
  },
  shraddha: {
    word: "श्रद्धा",
    iast: "śraddhā",
    meaning: "Faith; heartfelt conviction; the sincere belief that enables spiritual practice to bear fruit",
    grammar: "noun, feminine, nominative singular",
    etymology: "śrat (truth, heart) + dhā (to place) — placing the heart in truth",
    frequency: 15,
    relatedVerses: ["4.39", "17.2", "17.3"]
  },
  shanti: {
    word: "शान्ति",
    iast: "śānti",
    meaning: "Peace; tranquility; the deep, unshakeable stillness that transcends all circumstances",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √śam (to be calm, to cease) + suffix -ti",
    frequency: 12,
    relatedVerses: ["2.66", "4.39", "9.31"]
  },
  sukha: {
    word: "सुख",
    iast: "sukha",
    meaning: "Happiness; pleasure; well-being — the Gita distinguishes three types based on the three gunas",
    grammar: "noun, neuter, nominative singular",
    etymology: "su (good) + kha (axle-hole, space) — good space in the axle — ease of movement",
    frequency: 18,
    relatedVerses: ["2.38", "5.21", "18.36"]
  },
  dukha: {
    word: "दुःख",
    iast: "duḥkha",
    meaning: "Suffering; pain; the unsatisfactoriness of conditioned existence",
    grammar: "noun, neuter, nominative singular",
    etymology: "duḥ (bad, difficult) + kha (axle-hole) — bad axle-hole — difficult movement, friction",
    frequency: 16,
    relatedVerses: ["2.14", "5.22", "6.23"]
  },
  sadhana: {
    word: "साधना",
    iast: "sādhanā",
    meaning: "Spiritual practice; disciplined effort toward realization; any consistent practice for awakening",
    grammar: "noun, feminine, nominative singular",
    etymology: "From root √sādh (to accomplish, to complete) + suffix -anā",
    frequency: 4,
    relatedVerses: ["6.35", "12.9", "17.14"]
  },
  jivatman: {
    word: "जीवात्मन्",
    iast: "jīvātman",
    meaning: "The individual living soul; the embodied Atman experiencing the cycle of birth and death",
    grammar: "compound noun, masculine",
    etymology: "jīva (life, living being) + ātman (self) — the living self",
    frequency: 5,
    relatedVerses: ["2.20", "15.7", "15.9"]
  },
  paramatman: {
    word: "परमात्मन्",
    iast: "paramātman",
    meaning: "The Supreme Self; the Divine indwelling all hearts as the inner witness",
    grammar: "compound noun, masculine",
    etymology: "parama (supreme, highest) + ātman (self) — the supreme self",
    frequency: 6,
    relatedVerses: ["6.31", "13.22", "15.17"]
  },
  kshetra: {
    word: "क्षेत्र",
    iast: "kṣetra",
    meaning: "Field; the body and all of material nature as the field of experience and action",
    grammar: "noun, neuter, nominative singular",
    etymology: "From root √kṣi (to dwell, to settle) — the dwelling place",
    frequency: 18,
    relatedVerses: ["1.1", "13.1", "13.2"]
  },
  kshetrajna: {
    word: "क्षेत्रज्ञ",
    iast: "kṣetrajña",
    meaning: "The knower of the field; pure consciousness that witnesses the body-mind without identification",
    grammar: "compound noun, masculine",
    etymology: "kṣetra (field) + jña (knower) — the one who knows the field",
    frequency: 8,
    relatedVerses: ["13.1", "13.2", "13.26"]
  },
  vivekachudamani: {
    word: "विवेक",
    iast: "viveka",
    meaning: "Discrimination; discernment; the capacity to distinguish the permanent Self from the impermanent world",
    grammar: "noun, masculine, nominative singular",
    etymology: "vi (apart) + √vic (to sift, to discern) — the act of sifting truth from illusion",
    frequency: 5,
    relatedVerses: ["2.16", "2.18", "13.34"]
  },
  prana: {
    word: "प्राण",
    iast: "prāṇa",
    meaning: "Life-force; vital energy; the breath of life that animates all living beings",
    grammar: "noun, masculine, nominative singular",
    etymology: "pra (forward) + āna (from √an, to breathe) — forward breathing, life",
    frequency: 10,
    relatedVerses: ["4.29", "8.10", "15.14"]
  },
  nitya: {
    word: "नित्य",
    iast: "nitya",
    meaning: "Eternal; permanent; that which does not change — used to describe the Atman and Brahman",
    grammar: "adjective, masculine, nominative singular",
    etymology: "From ni (down, completely) + tya (belonging to) — always belonging, permanent",
    frequency: 12,
    relatedVerses: ["2.20", "2.24", "5.19"]
  },
  avyakta: {
    word: "अव्यक्त",
    iast: "avyakta",
    meaning: "The unmanifest; the formless, imperceptible substratum of all creation",
    grammar: "adjective/noun, neuter",
    etymology: "a (not) + vyakta (manifest, visible) — the not-manifest, invisible source",
    frequency: 8,
    relatedVerses: ["2.25", "8.18", "12.1"]
  },
  vyakta: {
    word: "व्यक्त",
    iast: "vyakta",
    meaning: "The manifest; the visible, perceptible creation that emerges from the unmanifest",
    grammar: "adjective/noun, neuter",
    etymology: "vi (distinctly) + akta (from √añj, to make clear) — made clearly visible",
    frequency: 5,
    relatedVerses: ["2.28", "8.18", "12.3"]
  },
  ananda: {
    word: "आनन्द",
    iast: "ānanda",
    meaning: "Bliss; pure joy that arises from the nature of the Self — not pleasure dependent on objects",
    grammar: "noun, masculine, nominative singular",
    etymology: "ā (completely) + nanda (from √nand, to rejoice) — complete rejoicing",
    frequency: 6,
    relatedVerses: ["5.21", "6.20", "10.36"]
  },
  mahatma: {
    word: "महात्मन्",
    iast: "mahātman",
    meaning: "Great soul; a being of expanded consciousness; one who sees the Divine everywhere",
    grammar: "compound noun, masculine",
    etymology: "mahā (great) + ātman (self) — great self, expanded soul",
    frequency: 5,
    relatedVerses: ["9.13", "11.37", "15.19"]
  },
  sthitaprajna: {
    word: "स्थितप्रज्ञ",
    iast: "sthitaprajña",
    meaning: "One of steady wisdom; a sage whose mind is immovable in equanimity, undisturbed by joy or sorrow",
    grammar: "compound adjective, masculine",
    etymology: "sthita (steady, established) + prajñā (wisdom) — one established in wisdom",
    frequency: 4,
    relatedVerses: ["2.55", "2.56", "2.57"]
  },
  nishtha: {
    word: "निष्ठा",
    iast: "niṣṭhā",
    meaning: "Steadfastness; firm dedication; unswerving commitment to one's path",
    grammar: "noun, feminine, nominative singular",
    etymology: "niṣ (completely) + sthā (standing, from √sthā) — completely established",
    frequency: 4,
    relatedVerses: ["3.3", "17.1", "18.50"]
  },
  prasanna: {
    word: "प्रसन्न",
    iast: "prasanna",
    meaning: "Serene; clear; gracious — the state of mental clarity and cheerful equanimity",
    grammar: "adjective, masculine, nominative singular",
    etymology: "pra (thoroughly) + sanna (from √sad, to settle down) — thoroughly settled and clear",
    frequency: 5,
    relatedVerses: ["2.64", "2.65", "18.37"]
  }
};
export {
  WordIntelligencePopup as W,
  WORD_INTELLIGENCE as a
};
