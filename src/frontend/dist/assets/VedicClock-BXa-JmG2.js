import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-DqMoqjqS.js";
const MUHURTAS = [
  "Rudra",
  "Ahi",
  "Mitra",
  "Pitru",
  "Vasu",
  "Vara",
  "Vishvedeva",
  "Vidhi",
  "Satamukhi",
  "Puruhuta",
  "Vahini",
  "Naktanakara",
  "Varuna",
  "Aryama",
  "Bhaga",
  "Girisa",
  "Ajapada",
  "Ahirbudhnya",
  "Pushya",
  "Ashwini",
  "Yama",
  "Agni",
  "Vidhata",
  "Kanda",
  "Aditi",
  "Jiva",
  "Vishnu",
  "Dyumadgadyuti",
  "Brahma",
  "Samudrama",
  "Purnayu"
];
const VARAS = [
  "Ravi-vara",
  "Soma-vara",
  "Mangala-vara",
  "Budha-vara",
  "Guru-vara",
  "Shukra-vara",
  "Shani-vara"
];
const VARA_DEITY = [
  "Surya (Sun)",
  "Chandra (Moon)",
  "Mangala (Mars)",
  "Budha (Mercury)",
  "Brihaspati (Jupiter)",
  "Shukra (Venus)",
  "Shani (Saturn)"
];
const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishtha",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati"
];
const RAHU_KAAL_HOURS = [
  [7.5, 9],
  // Sunday: 7:30–9:00
  [7.5, 9],
  // Monday: 7:30–9:00 (adjusted to start)
  [15, 16.5],
  // Tuesday: 3:00–4:30 PM
  [12, 13.5],
  // Wednesday: 12:00–1:30 PM
  [13.5, 15],
  // Thursday: 1:30–3:00 PM
  [10.5, 12],
  // Friday: 10:30–12:00 PM
  [9, 10.5]
  // Saturday: 9:00–10:30 AM
];
const RAHU_KAAL_TIMES = [
  "7:30–9:00 AM",
  "7:30–9:00 AM",
  "3:00–4:30 PM",
  "12:00–1:30 PM",
  "1:30–3:00 PM",
  "10:30 AM–12:00 PM",
  "9:00–10:30 AM"
];
function getVedicData(now) {
  const h = now.getHours() + now.getMinutes() / 60;
  const totalMins = now.getHours() * 60 + now.getMinutes();
  const dayFraction = totalMins / 1440;
  const muhurtaIdx = Math.floor(totalMins / 48) % 30;
  const praharaIdx = Math.floor(totalMins / 180) % 8;
  const praharaNames = [
    "Pratah (Dawn)",
    "Sangava (Morning)",
    "Madhyahna (Midday)",
    "Aparahna (Afternoon)",
    "Sayahna (Evening)",
    "Pradosha (Dusk)",
    "Nishi (Night)",
    "Ardha-Ratra (Midnight)"
  ];
  const ghati = Math.floor(totalMins / 24);
  const pala = Math.floor(totalMins % 24 * 2.5);
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 864e5
  );
  const lunarDay = dayOfYear * 12.37 / 365 % 30;
  const tithiNum = Math.floor(lunarDay) + 1;
  const paksha = lunarDay < 15 ? "Shukla Paksha" : "Krishna Paksha";
  const tithiNames = [
    "Pratipada",
    "Dwitiya",
    "Tritiya",
    "Chaturthi",
    "Panchami",
    "Shashthi",
    "Saptami",
    "Ashtami",
    "Navami",
    "Dashami",
    "Ekadashi",
    "Dwadashi",
    "Trayodashi",
    "Chaturdashi",
    "Purnima/Amavasya"
  ];
  const tithi = tithiNames[Math.min(tithiNum - 1, 14)];
  const nakshatraIdx = Math.floor(dayOfYear * 27.32 / 365) % 27;
  const bramhaMuhurta = "4:24 AM – 5:12 AM";
  const isBrahmaMuhurta = h >= 4.4 && h < 5.2;
  const dayOfWeek = now.getDay();
  const rahuKaal = RAHU_KAAL_TIMES[dayOfWeek];
  const [rahuStart, rahuEnd] = RAHU_KAAL_HOURS[dayOfWeek];
  const isRahuKaal = h >= rahuStart && h < rahuEnd;
  const auspiciousTimes = h >= 6 && h < 7.5 ? "Now — Pratah Kala is auspicious!" : h >= 9 && h < 10.5 ? "Sangava Kala — auspicious for business and decisions" : "Check Panchang for today's specific muhurta";
  return {
    muhurta: MUHURTAS[muhurtaIdx],
    muhurtaIdx,
    prahara: praharaNames[praharaIdx],
    praharaIdx,
    ghati,
    pala,
    tithi,
    paksha,
    vara: VARAS[dayOfWeek],
    varaDeity: VARA_DEITY[dayOfWeek],
    nakshatra: NAKSHATRAS[nakshatraIdx],
    bramhaMuhurta,
    isBrahmaMuhurta,
    rahuKaal,
    isRahuKaal,
    auspiciousTimes,
    dayFraction
  };
}
function pad(n, len = 2) {
  return String(n).padStart(len, "0");
}
function ClockHand({
  angle,
  length,
  width,
  color
}) {
  const cx = 50;
  const cy = 50;
  const rad = (angle - 90) * (Math.PI / 180);
  const x2 = cx + length * Math.cos(rad);
  const y2 = cy + length * Math.sin(rad);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "line",
    {
      x1: cx,
      y1: cy,
      x2,
      y2,
      stroke: color,
      strokeWidth: width,
      strokeLinecap: "round"
    }
  );
}
function VedicClockPage() {
  const [now, setNow] = reactExports.useState(/* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(id);
  }, []);
  const data = getVedicData(now);
  const hourAngle = now.getHours() % 12 * 30 + now.getMinutes() * 0.5;
  const minuteAngle = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const secondAngle = now.getSeconds() * 6;
  const muhurtaAngle = data.muhurtaIdx / 30 * 360;
  const ghatiAngle = data.ghati / 60 * 360;
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const dateStr = now.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", "data-ocid": "vedic-clock.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "वैदिक काल" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-base italic mt-3",
          style: { color: "oklch(0.45 0.12 46)" },
          children: "Sacred Time — The Vedic Way of Knowing the Present Moment"
        }
      )
    ] }),
    data.isBrahmaMuhurta && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "manuscript-card p-4 mb-5 text-center",
        style: { borderLeft: "4px solid oklch(0.48 0.24 268)" },
        "data-ocid": "vedic-clock.brahma-muhurta-alert",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-sm font-bold italic",
              style: { color: "oklch(0.48 0.20 268)" },
              children: "🌅 Brahma Muhurta is NOW"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic mt-1",
              style: { color: "oklch(0.35 0.12 38)" },
              children: "This is the most sacred hour — ideal for meditation, Gita reading, and naam japa. Seize it, Arjun!"
            }
          )
        ]
      }
    ),
    data.isRahuKaal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "manuscript-card p-4 mb-5 text-center",
        style: { borderLeft: "4px solid oklch(0.55 0.24 26)" },
        "data-ocid": "vedic-clock.rahu-kaal-alert",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-sm font-bold italic",
              style: { color: "oklch(0.55 0.24 26)" },
              children: "⚠️ Rahu Kaal is Active"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic mt-1",
              style: { color: "oklch(0.35 0.12 38)" },
              children: "Avoid beginning important new activities during Rahu Kaal. Continue ongoing work with Krishna's name."
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8 },
          className: "manuscript-card p-4 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              viewBox: "0 0 100 100",
              className: "w-full max-w-[280px]",
              "aria-label": "Vedic clock showing current time",
              role: "img",
              style: {
                filter: "drop-shadow(0 4px 24px oklch(0.72 0.32 52 / 0.3))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "48",
                    fill: "none",
                    stroke: "oklch(0.72 0.28 52)",
                    strokeWidth: "0.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "46", fill: "oklch(0.94 0.06 68)" }),
                Array.from({ length: 12 }, (_, i) => {
                  const a = i / 12 * 360 - 90;
                  const rad = a * (Math.PI / 180);
                  const x1 = 50 + 42 * Math.cos(rad);
                  const y1 = 50 + 42 * Math.sin(rad);
                  const x2 = 50 + 44 * Math.cos(rad);
                  const y2 = 50 + 44 * Math.sin(rad);
                  const angles = [
                    0,
                    30,
                    60,
                    90,
                    120,
                    150,
                    180,
                    210,
                    240,
                    270,
                    300,
                    330
                  ];
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "line",
                    {
                      x1,
                      y1,
                      x2,
                      y2,
                      stroke: "oklch(0.68 0.28 52)",
                      strokeWidth: "1.5"
                    },
                    angles[i]
                  );
                }),
                Array.from({ length: 30 }, (_, i) => {
                  const a = i / 30 * 360 - 90;
                  const rad = a * (Math.PI / 180);
                  const x1 = 50 + 36 * Math.cos(rad);
                  const y1 = 50 + 36 * Math.sin(rad);
                  const x2 = 50 + 38 * Math.cos(rad);
                  const y2 = 50 + 38 * Math.sin(rad);
                  const deg = Math.round(i * 12);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "line",
                    {
                      x1,
                      y1,
                      x2,
                      y2,
                      stroke: "oklch(0.62 0.24 48 / 0.6)",
                      strokeWidth: "0.5"
                    },
                    deg
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "37",
                    fill: "none",
                    stroke: "oklch(0.72 0.32 52 / 0.25)",
                    strokeWidth: "3",
                    strokeDasharray: `${muhurtaAngle / 360 * 232.3} 232.3`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 50 50)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "30",
                    fill: "none",
                    stroke: "oklch(0.48 0.22 268 / 0.2)",
                    strokeWidth: "2",
                    strokeDasharray: `${ghatiAngle / 360 * 188.5} 188.5`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 50 50)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "28", fill: "oklch(0.92 0.07 66)" }),
                [0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
                  const rad = (a - 90) * (Math.PI / 180);
                  const x = 50 + 24 * Math.cos(rad);
                  const y = 50 + 24 * Math.sin(rad);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: x,
                      cy: y,
                      r: "1.5",
                      fill: "oklch(0.72 0.28 52 / 0.4)"
                    },
                    a
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ClockHand,
                  {
                    angle: hourAngle,
                    length: 14,
                    width: 1.8,
                    color: "oklch(0.22 0.10 32)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ClockHand,
                  {
                    angle: minuteAngle,
                    length: 19,
                    width: 1.2,
                    color: "oklch(0.42 0.18 44)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ClockHand,
                  {
                    angle: secondAngle,
                    length: 22,
                    width: 0.7,
                    color: "oklch(0.62 0.26 32)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "2", fill: "oklch(0.72 0.32 52)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: "50",
                    y: "18",
                    textAnchor: "middle",
                    fontSize: "5",
                    fontFamily: "serif",
                    fill: "oklch(0.68 0.28 52)",
                    fontWeight: "bold",
                    "aria-label": "OM",
                    children: "ॐ"
                  }
                )
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "manuscript-card p-5",
            "data-ocid": "vedic-clock.modern-time",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold italic mb-1",
                  style: { color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" },
                  children: "MODERN TIME"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-bold",
                  style: {
                    fontSize: "clamp(2rem, 6vw, 3.2rem)",
                    color: "oklch(0.22 0.10 32)",
                    letterSpacing: "0.05em"
                  },
                  children: timeStr
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mt-1",
                  style: { color: "oklch(0.48 0.12 46)" },
                  children: dateStr
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4", "data-ocid": "vedic-clock.vara", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic mb-1",
              style: { color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" },
              children: "VARA · WEEKDAY"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xl font-bold italic",
              style: { color: "oklch(0.42 0.20 46)" },
              children: data.vara
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.52 0.12 46)" },
              children: [
                "Ruled by ",
                data.varaDeity
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4", "data-ocid": "vedic-clock.muhurta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic mb-1",
              style: { color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" },
              children: "CURRENT MUHURTA"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xl font-bold italic",
              style: { color: "oklch(0.42 0.20 46)" },
              children: data.muhurta
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.52 0.12 46)" },
              children: [
                "Muhurta ",
                data.muhurtaIdx + 1,
                " of 30 · ~48 min each"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6", children: [
      {
        label: "PRAHARA",
        value: data.prahara,
        sub: `Prahara ${data.praharaIdx + 1} of 8`,
        icon: "🌅",
        ocid: "prahara"
      },
      {
        label: "GHATI · PALA",
        value: `${data.ghati} Gh · ${data.pala} Pa`,
        sub: "60 ghatis per day",
        icon: "⏱️",
        ocid: "ghati"
      },
      {
        label: "TITHI",
        value: data.tithi,
        sub: `Lunar day ${data.tithi}`,
        icon: "🌙",
        ocid: "tithi"
      },
      {
        label: "PAKSHA",
        value: data.paksha,
        sub: data.paksha === "Shukla Paksha" ? "Waxing Moon fortnight" : "Waning Moon fortnight",
        icon: "🌓",
        ocid: "paksha"
      },
      {
        label: "NAKSHATRA",
        value: data.nakshatra,
        sub: "Lunar mansion of the day",
        icon: "⭐",
        ocid: "nakshatra"
      },
      {
        label: "RAHU KAAL",
        value: data.rahuKaal,
        sub: "Avoid new beginnings",
        icon: "⚠️",
        ocid: "rahu-kaal"
      }
    ].map(({ label, value, sub, icon, ocid }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "manuscript-card p-4",
        "data-ocid": `vedic-clock.${ocid}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xl mb-2", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic mb-1",
              style: { color: "oklch(0.55 0.18 46)", letterSpacing: "0.08em" },
              children: label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-base font-bold italic leading-tight",
              style: { color: "oklch(0.28 0.12 34)" },
              children: value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[10px] italic mt-0.5",
              style: { color: "oklch(0.52 0.12 46)" },
              children: sub
            }
          )
        ]
      },
      ocid
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "manuscript-card p-6",
        "data-ocid": "vedic-clock.guidance.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-5", children: "🌸 Today's Sacred Time Guidance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "BRAHMA MUHURTA TODAY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "verse-translation", children: [
                "Brahma Muhurta is at ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: data.bramhaMuhurta }),
                " today — the most powerful time for meditation, Gita reading, and naam japa. This is when the world is still and Krishna is most easily heard."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "verse-display", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "AUSPICIOUS TIME NOW" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation", children: data.auspiciousTimes })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "verse-display",
                style: { borderLeftColor: "oklch(0.55 0.24 26 / 0.65)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-verse-number mb-1",
                      style: { color: "oklch(0.55 0.24 26)" },
                      children: "RAHU KAAL — AVOID"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "verse-translation", children: [
                    "Today's Rahu Kaal: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: data.rahuKaal }),
                    ". Avoid beginning new ventures, journeys, or important decisions. Chant Krishna's name continuously during this period for protection."
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "verse-display",
                style: { borderLeftColor: "oklch(0.48 0.22 268 / 0.65)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-verse-number mb-1",
                      style: { color: "oklch(0.48 0.22 268)" },
                      children: "GITA CONNECTION — BG 8.17"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "verse-translation", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: `"By human calculation, a thousand ages taken together form the duration of Brahma's one day."` }),
                    "— The Vedic understanding of time humbles the ego and expands the soul."
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  VedicClockPage
};
