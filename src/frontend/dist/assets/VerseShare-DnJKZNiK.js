import { r as reactExports, V as VERSE_BY_ID, h as ue, j as jsxRuntimeExports, m as motion, o as ALL_VERSES } from "./index-CodWPqWB.js";
const STYLE_OPTIONS = [
  {
    id: "parchment",
    label: "Aged Parchment",
    bg: "#f5e8c7",
    textColor: "#2a1a0a",
    borderColor: "#c8a050",
    subColor: "#8b5e2a"
  },
  {
    id: "gold",
    label: "Deep Gold",
    bg: "#7a4f10",
    textColor: "#fdf0c0",
    borderColor: "#e8b830",
    subColor: "#f0d070"
  },
  {
    id: "saffron",
    label: "Sacred Saffron",
    bg: "#8b3a0a",
    textColor: "#fef0d0",
    borderColor: "#f07820",
    subColor: "#f8b860"
  },
  {
    id: "night",
    label: "Candlelit Night",
    bg: "#1a1208",
    textColor: "#f5e0a0",
    borderColor: "#c89030",
    subColor: "#a07030"
  }
];
function drawOmSymbol(ctx, x, y, size, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.font = `${size}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("ॐ", x, y);
  ctx.restore();
}
function drawLotusCorner(ctx, cx, cy, size, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.65;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    const angle = i * Math.PI / 2;
    ctx.arc(
      cx + Math.cos(angle) * size * 0.4,
      cy + Math.sin(angle) * size * 0.4,
      size * 0.4,
      angle + Math.PI * 0.6,
      angle + Math.PI * 1.4
    );
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function wrapText(ctx, text, x, maxWidth, lineHeight, startY) {
  const words = text.split(" ");
  let line = "";
  let y = startY;
  for (const word of words) {
    const testLine = `${line}${word} `;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line !== "") {
      ctx.fillText(line.trim(), x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
  return y;
}
function useCanvasDraw({
  verse,
  styleId,
  langMode,
  canvasRef
}) {
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = 800;
    const H = 500;
    canvas.width = W;
    canvas.height = H;
    const style = STYLE_OPTIONS.find((s) => s.id === styleId) ?? STYLE_OPTIONS[0];
    ctx.fillStyle = style.bg;
    ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 4e3; i++) {
      const px = Math.random() * W;
      const py = Math.random() * H;
      ctx.globalAlpha = Math.random() * 0.03;
      ctx.fillStyle = styleId === "parchment" ? "#8b6030" : "#ffffff";
      ctx.fillRect(px, py, 1, 1);
    }
    ctx.globalAlpha = 1;
    drawOmSymbol(ctx, W / 2, H / 2, 320, style.borderColor, 0.06);
    ctx.strokeStyle = style.borderColor;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.7;
    ctx.strokeRect(16, 16, W - 32, H - 32);
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.4;
    ctx.strokeRect(24, 24, W - 48, H - 48);
    ctx.globalAlpha = 1;
    const cornerSize = 18;
    const positions = [
      [40, 40],
      [W - 40, 40],
      [40, H - 40],
      [W - 40, H - 40]
    ];
    for (const [cx, cy] of positions) {
      drawLotusCorner(ctx, cx, cy, cornerSize, style.borderColor);
    }
    const lineY = 55;
    const gradient = ctx.createLinearGradient(60, lineY, W - 60, lineY);
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(0.3, style.borderColor);
    gradient.addColorStop(0.5, style.borderColor);
    gradient.addColorStop(0.7, style.borderColor);
    gradient.addColorStop(1, "transparent");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.moveTo(60, lineY);
    ctx.lineTo(W - 60, lineY);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = style.borderColor;
    ctx.globalAlpha = 0.8;
    ctx.font = "11px serif";
    ctx.textAlign = "center";
    ctx.fillText(
      `BHAGAVAD GITA · CHAPTER ${verse.chapter}, VERSE ${verse.verse}`,
      W / 2,
      74
    );
    ctx.globalAlpha = 1;
    let yPos = 115;
    if (langMode !== "english_only") {
      ctx.fillStyle = style.textColor;
      ctx.font = "bold 19px serif";
      ctx.textAlign = "center";
      yPos = wrapText(ctx, verse.sanskrit, W / 2, W - 120, 32, yPos) + 36;
    }
    const sepY = langMode === "english_only" ? 130 : yPos;
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = style.borderColor;
    ctx.font = "14px serif";
    ctx.textAlign = "center";
    ctx.fillText("❧  ✦  ❧", W / 2, sepY);
    ctx.globalAlpha = 1;
    const engStartY = sepY + 30;
    if (langMode !== "sanskrit_only") {
      ctx.fillStyle = style.subColor;
      ctx.font = "italic 15px serif";
      ctx.textAlign = "center";
      wrapText(ctx, verse.english, W / 2, W - 140, 24, engStartY);
    }
    const bottomY = H - 50;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.45;
    ctx.beginPath();
    ctx.moveTo(60, bottomY - 10);
    ctx.lineTo(W - 60, bottomY - 10);
    ctx.stroke();
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = style.borderColor;
    ctx.font = "10px serif";
    ctx.textAlign = "center";
    ctx.fillText("॥ हरे कृष्ण ॥  ·  Bhagavad Gita Companion", W / 2, bottomY + 8);
    ctx.globalAlpha = 1;
  }, [verse, styleId, langMode, canvasRef]);
}
function CanvasCard(props) {
  useCanvasDraw(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: props.canvasRef,
      className: "w-full rounded-sm shadow-elevated",
      style: { maxWidth: "100%", imageRendering: "crisp-edges" },
      "aria-label": `Verse card for ${props.verse.id}`
    }
  );
}
function VerseSharePage() {
  const [selectedVerseId, setSelectedVerseId] = reactExports.useState("2.47");
  const [styleId, setStyleId] = reactExports.useState("parchment");
  const [langMode, setLangMode] = reactExports.useState("both");
  const canvasRef = reactExports.useRef(null);
  const verse = VERSE_BY_ID[selectedVerseId] ?? VERSE_BY_ID["2.47"];
  const handleDownload = reactExports.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `gita-${verse.id.replace(".", "-")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    ue.success("✦ Verse card saved to your device. Hare Krishna 🙏");
  }, [verse.id]);
  const handleCopy = reactExports.useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob })
          ]);
          ue.success("Verse card copied to clipboard!");
        } catch {
          ue.error(
            "Copy to clipboard not supported in this browser. Use Download instead."
          );
        }
      });
    } catch {
      ue.error("Could not copy. Please use the Download button.");
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ श्लोक-पत्रम् ॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Verse Card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm italic", children: "Create beautiful manuscript cards to share Krishna's wisdom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "sacred-card p-5 mb-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold uppercase tracking-widest mb-2",
                  style: { color: "oklch(var(--accent) / 0.7)" },
                  children: "Select Verse"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  "data-ocid": "verse-share.verse_select",
                  value: selectedVerseId,
                  onChange: (e) => setSelectedVerseId(e.target.value),
                  className: "w-full rounded border bg-card/80 px-3 py-2 font-body text-sm text-foreground",
                  style: { borderColor: "oklch(var(--accent) / 0.35)" },
                  children: ALL_VERSES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: v.id, children: [
                    v.id,
                    " — ",
                    v.english.slice(0, 40),
                    "…"
                  ] }, v.id))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold uppercase tracking-widest mb-2",
                  style: { color: "oklch(var(--accent) / 0.7)" },
                  children: "Background Style"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: STYLE_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `verse-share.style_${s.id}`,
                  onClick: () => setStyleId(s.id),
                  className: "py-1.5 px-2 text-xs font-body italic transition-smooth",
                  style: {
                    borderRadius: "2px",
                    border: styleId === s.id ? "1px solid oklch(var(--accent) / 0.6)" : "1px solid oklch(var(--border) / 0.5)",
                    background: styleId === s.id ? "oklch(var(--accent) / 0.1)" : `${s.bg}33`,
                    color: styleId === s.id ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))"
                  },
                  children: s.label
                },
                s.id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs font-bold uppercase tracking-widest mb-2",
                  style: { color: "oklch(var(--accent) / 0.7)" },
                  children: "Language"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", children: ["both", "sanskrit_only", "english_only"].map(
                (mode) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `verse-share.lang_${mode}`,
                    onClick: () => setLangMode(mode),
                    className: "py-2 px-3 text-xs font-body italic text-left transition-smooth",
                    style: {
                      borderRadius: "2px",
                      border: langMode === mode ? "1px solid oklch(var(--accent) / 0.5)" : "1px solid oklch(var(--border) / 0.45)",
                      background: langMode === mode ? "oklch(var(--accent) / 0.09)" : "transparent",
                      color: langMode === mode ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))"
                    },
                    children: mode === "both" ? "Sanskrit + English" : mode === "sanskrit_only" ? "Sanskrit Only" : "English Only"
                  },
                  mode
                )
              ) })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.98 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.4 },
          className: "mb-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CanvasCard,
            {
              verse,
              styleId,
              langMode,
              canvasRef
            }
          )
        },
        `${selectedVerseId}-${styleId}-${langMode}`
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "flex gap-3 flex-wrap justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "verse-share.download_button",
                onClick: handleDownload,
                className: "transition-smooth font-display font-bold italic shadow-warm-glow",
                style: {
                  padding: "0.75rem 2rem",
                  background: "linear-gradient(135deg, oklch(0.44 0.16 38), oklch(0.56 0.22 46))",
                  color: "oklch(0.94 0.06 60)",
                  border: "1px solid oklch(0.40 0.14 36)",
                  borderRadius: "2px",
                  fontSize: "0.9rem"
                },
                children: "↓ Download PNG"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "verse-share.copy_button",
                onClick: handleCopy,
                className: "transition-smooth font-body italic",
                style: {
                  padding: "0.75rem 2rem",
                  background: "transparent",
                  color: "oklch(var(--foreground))",
                  border: "1px solid oklch(var(--accent) / 0.4)",
                  borderRadius: "2px",
                  fontSize: "0.9rem"
                },
                children: "⎘ Copy to Clipboard"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center font-body text-xs italic text-muted-foreground mt-4", children: "Share this sacred verse card on WhatsApp, Instagram, or anywhere you spread dharma 🙏" })
    ] })
  ] });
}
export {
  VerseSharePage
};
