import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, a as Link } from "./index-CodWPqWB.js";
const MAP_LOCATIONS = [
  {
    id: "arjuna-chariot",
    label: "Arjuna's Chariot",
    labelHindi: "अर्जुन का रथ",
    x: 48,
    y: 52,
    color: "oklch(0.48 0.24 268)",
    story: "Here Arjuna saw his relatives, teachers, and beloved elders arrayed against him. His bow Gandiva slipped from his fingers. His limbs trembled. This was the moment of the greatest spiritual crisis — and the moment the Bhagavad Gita began.",
    verse: "BG 1.28–30",
    verseText: "Seeing all these kinsmen arrayed, Arjuna was overwhelmed with grief. His bow slipped from his hands, his heart was on fire."
  },
  {
    id: "krishna-charioteer",
    label: "Krishna — Charioteer",
    labelHindi: "श्री कृष्ण — सारथी",
    x: 48,
    y: 44,
    color: "oklch(0.76 0.3 54)",
    story: "Krishna placed the chariot in the middle of both armies. As the charioteer of Arjuna's white horses, he represents the Supreme Self guiding the soul. The chariot is the body; Arjuna the soul; Krishna the Supreme within.",
    verse: "BG 1.24–25",
    verseText: "O Gudakesha, behold these Kurus assembled here. Hrishikesha drew up the finest chariot in the midst of the armies of both sides."
  },
  {
    id: "sacred-dialogue",
    label: "Sacred Dialogue",
    labelHindi: "गीता वचन स्थान",
    x: 48,
    y: 58,
    color: "oklch(0.82 0.34 54)",
    story: "Between both armies, on this sacred ground, Krishna spoke the 18 chapters of the Bhagavad Gita to Arjuna. In approximately 45 minutes on the morning of the first day, the most profound spiritual teaching in human history was delivered.",
    verse: "BG 18.78",
    verseText: "Wherever there is Krishna and wherever there is Arjuna — there will certainly be opulence, victory, extraordinary power, and morality."
  },
  {
    id: "pandava-vyuha",
    label: "Pandava Formation",
    labelHindi: "पाण्डव व्यूह",
    x: 24,
    y: 46,
    color: "oklch(0.48 0.24 268)",
    story: "Yudhishthira's army was arranged in the Vajra (thunderbolt) formation, under Dhrishtadyumna's command. Arjuna and Bhima were at the center. The Pandavas represented dharma, virtue, and righteous action.",
    verse: "BG 1.3–6",
    verseText: "O my teacher, behold this great army of the sons of Pandu, so expertly arranged by your disciple, the son of Drupada."
  },
  {
    id: "kaurava-vyuha",
    label: "Kaurava Formation",
    labelHindi: "कौरव व्यूह",
    x: 72,
    y: 46,
    color: "oklch(0.62 0.26 32)",
    story: "Duryodhana's 11-akshauhini army was formed into the invincible Garuda formation. Bhishma commanded as Supreme General. The Chakravyuha was their signature defensive formation — the same formation Abhimanyu entered alone on Day 13.",
    verse: "BG 1.11",
    verseText: "From your respective positions, all of you must give full support to Bhishma alone."
  },
  {
    id: "bhishma",
    label: "Bhishma's Conch",
    labelHindi: "भीष्म — शंख",
    x: 78,
    y: 34,
    color: "oklch(0.62 0.26 32)",
    story: "Bhishma, the grandfather of both Pandavas and Kauravas, was the greatest warrior on the battlefield. His conch Panchajanya roared like a lion. For 10 days he commanded the Kaurava forces before falling to Arjuna's arrows.",
    verse: "BG 1.12–13",
    verseText: "Then Bhishma blew his conch shell very loudly, making a sound like the roar of a lion, giving Duryodhana joy."
  },
  {
    id: "duryodhana",
    label: "Duryodhana's Position",
    labelHindi: "दुर्योधन स्थान",
    x: 65,
    y: 30,
    color: "oklch(0.58 0.22 30)",
    story: "Duryodhana approached Dronacharya and surveyed both armies before battle began. His speech to Drona in BG 1.2–11 describes the Kaurava lineup — the first words of the Gita text. He saw the strength of his army, yet was not at peace.",
    verse: "BG 1.2–4",
    verseText: "Duryodhana, after seeing the army of the Pandavas, approached Dronacharya and spoke: 'O my teacher, behold this great army...'"
  },
  {
    id: "day18",
    label: "Day 18 — Final Battle",
    labelHindi: "अठारहवाँ दिन",
    x: 54,
    y: 72,
    color: "oklch(0.52 0.22 280)",
    story: "On the 18th day, Duryodhana was the last warrior standing. His final mace duel with Bhima ended the great war. Krishna blew the Panchajanya conch 18 times. Dharma was restored. The sacred number 18 — Gita chapters, Puranas, days of war.",
    verse: "BG 18.73",
    verseText: "Arjuna said: My illusion is now gone. I have regained my memory by Your mercy. I am now firm and prepared to act according to Your instructions."
  }
];
const BATTLE_DAYS = [
  {
    day: 1,
    title: "The Gita Spoken",
    summary: "Battle begins. Arjuna's crisis. Krishna speaks the Bhagavad Gita. Bhishma commands Kaurava forces.",
    teaching: "BG 2.47: You have a right to perform your duty but not to the fruits of action."
  },
  {
    day: 2,
    title: "Arjuna vs Bhishma",
    summary: "Arjuna and Bhishma clash in thunderous combat. Bhima destroys divisions. Pandavas have the upper hand.",
    teaching: "BG 2.19: He who thinks this one kills, and he who thinks this one is killed — both do not know the truth."
  },
  {
    day: 3,
    title: "Pandava Devastation",
    summary: "Arjuna decimates Kaurava formations. Bhishma forms the Garuda vyuha.",
    teaching: "BG 3.19: Without attachment, perform the supreme duty — by unattached action one attains the Supreme."
  },
  {
    day: 4,
    title: "Elephant Attack",
    summary: "Kauravas use war elephants. Arjuna counters with celestial weapons. Dronacharya leads the assault.",
    teaching: "BG 4.7: Whenever dharma declines, I appear."
  },
  {
    day: 5,
    title: "Satyaki's Valor",
    summary: "Satyaki fights valiantly for the Pandavas. Bhishma injures several Pandava warriors.",
    teaching: "BG 3.35: It is better to perform one's own dharma, even imperfectly, than another's dharma perfectly."
  },
  {
    day: 6,
    title: "Drona's Formation",
    summary: "Dronacharya forms the Mandala formation. Intense combat on all fronts. Heavy losses on both sides.",
    teaching: "BG 5.3: One who neither hates nor desires is always free from duality."
  },
  {
    day: 7,
    title: "Karna's Entry",
    summary: "Karna enters battle for the first time. Arjuna and Karna clash for the first time.",
    teaching: "BG 6.5: Let a man lift himself by his own Self; let him not degrade himself."
  },
  {
    day: 8,
    title: "Abhimanyu's Dawn",
    summary: "Young Abhimanyu demonstrates celestial skill. Iravan, Arjuna's son, is slain by Shakuni.",
    teaching: "BG 2.20: The soul is never born nor dies — it is eternal, ancient, unslain when the body is slain."
  },
  {
    day: 9,
    title: "Bhishma's Arrows",
    summary: "Bhishma wounds Krishna himself. Krishna picks up a chariot wheel as weapon before Arjuna stops him.",
    teaching: "BG 11.33: Arise, obtain glory — the enemies are already slain by Me. Be the instrument."
  },
  {
    day: 10,
    title: "Bhishma Falls",
    summary: "Arjuna uses Shikhandi as shield. Bhishma, unable to fight a woman, lowers his weapons and falls on a bed of arrows.",
    teaching: "BG 2.22: As one puts on new garments, giving up old — the soul accepts new bodies."
  },
  {
    day: 11,
    title: "Karna Commands",
    summary: "Karna takes command of the Kaurava forces. Dronacharya leads the main army.",
    teaching: "BG 4.18: He who sees action in inaction and inaction in action is intelligent among men."
  },
  {
    day: 12,
    title: "Chakravyuha",
    summary: "Dronacharya forms the deadly Chakravyuha. Only Abhimanyu can enter but not exit — he enters alone.",
    teaching: "BG 7.14: My divine illusion is difficult to overcome. But those who surrender to Me can cross it easily."
  },
  {
    day: 13,
    title: "Abhimanyu's Sacrifice",
    summary: "Abhimanyu is surrounded and slain. Arjuna vows to kill Jayadratha before sunset or die.",
    teaching: "BG 2.22: As one puts on new garments giving up old ones — similarly the soul accepts new material bodies."
  },
  {
    day: 14,
    title: "Arjuna's Vow Fulfilled",
    summary: "Krishna obscures the sun with his Sudarshana Chakra. Jayadratha emerges — Arjuna slays him.",
    teaching: "BG 18.57: Surrender all actions to Me. Take refuge in Me. With the intelligence of yoga, keep your mind always on Me."
  },
  {
    day: 15,
    title: "Drona Falls",
    summary: "Drona puts down his weapons after hearing of Ashwatthama's false death. Dhrishtadyumna beheads him.",
    teaching: "BG 16.21: Three gateways to hell that destroy the self: lust, anger, greed. Abandon all three."
  },
  {
    day: 16,
    title: "Karna's Wheel",
    summary: "Karna's chariot wheel sinks into the earth. Arjuna slays him while his wheel is stuck.",
    teaching: "BG 11.34: You will kill Drona, Bhishma, Karna, and other great warriors who are already slain by Me."
  },
  {
    day: 17,
    title: "Shalya Commands",
    summary: "Shalya becomes the last Kaurava commander. Yudhishthira kills him. Duryodhana escapes and hides in a lake.",
    teaching: "BG 18.66: Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions."
  },
  {
    day: 18,
    title: "Dharma Restored",
    summary: "Final mace duel: Bhima slays Duryodhana with a blow to the thigh. The war ends. Dharma is restored.",
    teaching: "BG 18.73: My illusion is now gone. I have regained my memory by Your mercy. I am prepared to act according to Your instructions."
  }
];
function KurukshetraMapPage() {
  const [selectedLocation, setSelectedLocation] = reactExports.useState(
    null
  );
  const [activeTab, setActiveTab] = reactExports.useState("map");
  const [selectedDay, setSelectedDay] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: "0.5rem" }, "aria-hidden": true, children: "⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "font-display font-bold italic mb-2",
          style: {
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "oklch(0.18 0.08 32)"
          },
          children: "कुरुक्षेत्र मानचित्र"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-base italic",
          style: { color: "oklch(0.52 0.18 46)" },
          children: "The Sacred Battlefield Map & 18 Days"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-6", "data-ocid": "kurukshetra-map.tabs", children: [
      { id: "map", label: "🗺 Battlefield Map" },
      { id: "days", label: "📅 18 Days" }
    ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(t.id),
        className: "flex-1 font-body text-sm italic py-2 rounded transition-smooth",
        style: {
          background: activeTab === t.id ? "oklch(0.62 0.26 32)" : "oklch(0.92 0.05 70 / 0.5)",
          color: activeTab === t.id ? "oklch(0.96 0.04 72)" : "oklch(0.48 0.14 46)",
          border: activeTab === t.id ? "1px solid oklch(0.56 0.24 28)" : "1px solid oklch(0.76 0.12 60 / 0.4)",
          fontWeight: activeTab === t.id ? 700 : 400
        },
        "data-ocid": `kurukshetra-map.tab.${t.id}`,
        children: t.label
      },
      t.id
    )) }),
    activeTab === "map" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mb-4 justify-center", children: [
        { color: "oklch(0.48 0.24 268)", label: "Pandava Side" },
        { color: "oklch(0.62 0.26 32)", label: "Kaurava Side" },
        { color: "oklch(0.76 0.3 54)", label: "Divine Presence" },
        { color: "oklch(0.52 0.22 280)", label: "Sacred Points" }
      ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-2.5 h-2.5 rounded-full",
            style: { background: l.color }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-[10px] italic",
            style: { color: "oklch(0.42 0.12 44)" },
            children: l.label
          }
        )
      ] }, l.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative w-full rounded overflow-hidden mb-4",
          style: {
            paddingBottom: "68%",
            background: "linear-gradient(160deg, oklch(0.88 0.08 72), oklch(0.84 0.10 66))",
            border: "2px solid oklch(0.76 0.3 54 / 0.5)",
            boxShadow: "0 4px 20px rgba(180, 140, 40, 0.3), inset 0 0 60px rgba(230, 190, 100, 0.08)"
          },
          "data-ocid": "kurukshetra-map.battlefield",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "absolute inset-0 w-full h-full",
                style: { opacity: 0.06 },
                xmlns: "http://www.w3.org/2000/svg",
                role: "img",
                "aria-label": "Grid background",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "pattern",
                    {
                      id: "kurGrid",
                      width: "10%",
                      height: "10%",
                      patternUnits: "objectBoundingBox",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M 0 0 L 0 100% M 0 0 L 100% 0",
                          stroke: "oklch(0.32 0.10 40)",
                          strokeWidth: "0.8",
                          fill: "none"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#kurGrid)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute",
                style: {
                  left: 0,
                  top: "18%",
                  width: "36%",
                  height: "62%",
                  background: "oklch(0.48 0.24 268 / 0.1)",
                  border: "1px dashed oklch(0.48 0.24 268 / 0.4)",
                  borderRadius: "0 4px 4px 0"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "absolute bottom-2 left-2 font-display text-[8px] font-bold italic",
                    style: { color: "oklch(0.48 0.24 268 / 0.7)" },
                    children: "PANDAVA FORCES"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute",
                style: {
                  right: 0,
                  top: "18%",
                  width: "36%",
                  height: "62%",
                  background: "oklch(0.62 0.26 32 / 0.1)",
                  border: "1px dashed oklch(0.62 0.26 32 / 0.4)",
                  borderRadius: "4px 0 0 4px"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "absolute bottom-2 right-2 font-display text-[8px] font-bold italic",
                    style: { color: "oklch(0.62 0.26 32 / 0.7)" },
                    children: "KAURAVA FORCES"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute rounded-full",
                style: {
                  left: "37%",
                  top: "28%",
                  width: "26%",
                  paddingBottom: "26%",
                  background: "radial-gradient(oklch(0.82 0.34 54 / 0.18), transparent 70%)",
                  border: "1px solid oklch(0.76 0.3 54 / 0.3)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 text-center opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-[10px] font-bold italic",
                style: { color: "oklch(0.52 0.18 46)" },
                children: "N↑"
              }
            ) }),
            MAP_LOCATIONS.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setSelectedLocation(
                  (selectedLocation == null ? void 0 : selectedLocation.id) === loc.id ? null : loc
                ),
                className: "absolute transform -translate-x-1/2 -translate-y-1/2 group z-10",
                style: { left: `${loc.x}%`, top: `${loc.y}%` },
                "aria-label": loc.label,
                "data-ocid": `kurukshetra-map.location.${loc.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-full transition-all duration-200 group-hover:scale-150",
                      style: {
                        background: loc.color,
                        border: "2px solid oklch(0.92 0.04 72)",
                        boxShadow: `0 0 8px ${loc.color}`,
                        transform: (selectedLocation == null ? void 0 : selectedLocation.id) === loc.id ? "scale(1.6)" : void 0
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap font-display text-[8px] font-bold italic px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                      style: {
                        bottom: "130%",
                        background: "oklch(0.18 0.08 32 / 0.9)",
                        color: loc.color,
                        border: `1px solid ${loc.color}50`,
                        zIndex: 20
                      },
                      children: loc.labelHindi
                    }
                  )
                ]
              },
              loc.id
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "absolute bottom-2 left-3 font-body text-[8px] italic opacity-40",
                style: { color: "oklch(0.28 0.10 36)" },
                children: "कुरुक्षेत्र — Sacred Battlefield"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-[10px] italic text-center mb-4",
          style: { color: "oklch(0.52 0.14 46)" },
          children: "Tap any marker to reveal the sacred story and verse"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedLocation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
          className: "manuscript-card p-5 mb-4",
          style: { borderColor: `${selectedLocation.color}60` },
          "data-ocid": "kurukshetra-map.location_detail",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-sm font-bold italic",
                    style: { color: "oklch(0.18 0.08 32)" },
                    children: selectedLocation.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: selectedLocation.color },
                    children: selectedLocation.labelHindi
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedLocation(null),
                  className: "font-body text-xs italic",
                  style: { color: "oklch(0.52 0.14 46)" },
                  "data-ocid": "kurukshetra-map.location_close",
                  "aria-label": "Close location detail",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic leading-relaxed mb-3",
                style: { color: "oklch(0.32 0.10 36)" },
                children: selectedLocation.story
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold italic mb-1",
                  style: { color: selectedLocation.color },
                  children: selectedLocation.verse
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation text-xs", children: selectedLocation.verseText })
            ] })
          ]
        },
        selectedLocation.id
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "kurukshetra-map.locations_list", children: MAP_LOCATIONS.map((loc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSelectedLocation(
            (selectedLocation == null ? void 0 : selectedLocation.id) === loc.id ? null : loc
          ),
          className: "w-full text-left manuscript-card p-3 flex items-center gap-3 transition-smooth",
          style: {
            borderColor: (selectedLocation == null ? void 0 : selectedLocation.id) === loc.id ? `${loc.color}80` : void 0
          },
          "data-ocid": `kurukshetra-map.location_list.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full flex-shrink-0",
                style: { background: loc.color }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold italic",
                  style: { color: "oklch(0.22 0.09 34)" },
                  children: loc.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-[10px] italic",
                  style: { color: "oklch(0.52 0.14 46)" },
                  children: loc.verse
                }
              )
            ] })
          ]
        },
        loc.id
      )) })
    ] }),
    activeTab === "days" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-card p-4 mb-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.42 0.12 44)" },
              children: "Sacred number 18 — 18 days of war, 18 chapters of Gita, 18 Puranas"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 mb-4", children: BATTLE_DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedDay(selectedDay === d.day ? null : d.day),
              className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold italic transition-smooth",
              style: {
                background: selectedDay === d.day ? "oklch(0.62 0.26 32)" : "oklch(0.76 0.3 54 / 0.15)",
                border: `2px solid ${selectedDay === d.day ? "oklch(0.56 0.24 28)" : "oklch(0.76 0.3 54 / 0.4)"}`,
                color: selectedDay === d.day ? "oklch(0.96 0.04 72)" : "oklch(0.72 0.28 50)"
              },
              "data-ocid": `kurukshetra-map.day.${d.day}`,
              "aria-label": `Day ${d.day}: ${d.title}`,
              children: d.day
            },
            d.day
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedDay !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 8 },
              className: "manuscript-card p-5 mb-4",
              "data-ocid": "kurukshetra-map.day_detail",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-full flex items-center justify-center font-display text-lg font-bold italic flex-shrink-0",
                      style: {
                        background: "oklch(0.62 0.26 32 / 0.15)",
                        border: "2px solid oklch(0.62 0.26 32)",
                        color: "oklch(0.52 0.22 30)"
                      },
                      children: selectedDay
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic",
                      style: { color: "oklch(0.18 0.08 32)" },
                      children: [
                        "Day ",
                        selectedDay,
                        ": ",
                        BATTLE_DAYS[selectedDay - 1].title
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic leading-relaxed mb-3",
                    style: { color: "oklch(0.32 0.10 36)" },
                    children: BATTLE_DAYS[selectedDay - 1].summary
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-3 rounded",
                    style: {
                      background: "oklch(0.48 0.24 268 / 0.08)",
                      border: "1px solid oklch(0.48 0.24 268 / 0.3)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "font-display text-[10px] font-bold italic mb-1",
                          style: { color: "oklch(0.48 0.24 268)" },
                          children: [
                            "Krishna's Teaching for Day ",
                            selectedDay
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs italic",
                          style: { color: "oklch(0.38 0.12 40)" },
                          children: BATTLE_DAYS[selectedDay - 1].teaching
                        }
                      )
                    ]
                  }
                )
              ]
            },
            selectedDay
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "kurukshetra-map.days_list", children: BATTLE_DAYS.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              initial: { opacity: 0, x: -6 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.04 },
              onClick: () => setSelectedDay(selectedDay === d.day ? null : d.day),
              className: "w-full text-left manuscript-card p-3 flex items-center gap-3 transition-smooth",
              style: {
                borderColor: selectedDay === d.day ? "oklch(0.62 0.26 32 / 0.6)" : void 0
              },
              "data-ocid": `kurukshetra-map.day_list.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full flex items-center justify-center font-display text-xs font-bold italic flex-shrink-0",
                    style: {
                      background: d.day === 18 ? "oklch(0.76 0.3 54 / 0.2)" : "oklch(0.62 0.26 32 / 0.12)",
                      border: `1.5px solid ${d.day === 18 ? "oklch(0.76 0.3 54)" : "oklch(0.62 0.26 32 / 0.4)"}`,
                      color: d.day === 18 ? "oklch(0.72 0.28 50)" : "oklch(0.52 0.22 30)"
                    },
                    children: d.day
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display text-xs font-bold italic",
                      style: { color: "oklch(0.22 0.09 34)" },
                      children: [
                        "Day ",
                        d.day,
                        ": ",
                        d.title
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-[10px] italic truncate",
                      style: { color: "oklch(0.52 0.14 46)" },
                      children: d.summary
                    }
                  )
                ] })
              ]
            },
            d.day
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "font-body text-xs italic",
        style: { color: "oklch(0.58 0.20 48)" },
        "data-ocid": "kurukshetra-map.back-home",
        children: "← Return to Temple"
      }
    ) })
  ] });
}
export {
  KurukshetraMapPage
};
