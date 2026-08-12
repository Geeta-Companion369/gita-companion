import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion } from "./index-DqMoqjqS.js";
const STORAGE_KEY = "gita_donation_info";
function loadDonationInfo() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveDonationInfo(info) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}
const SEVA_OPTIONS = [
  {
    key: "gau",
    icon: "🐄",
    title: "Gau Seva",
    titleHindi: "गौ सेवा",
    desc: "Support holy cows and gaushalas"
  },
  {
    key: "mandir",
    icon: "🛕",
    title: "Mandir Seva",
    titleHindi: "मंदिर निर्माण",
    desc: "Help build Krishna's abode"
  },
  {
    key: "app",
    icon: "📱",
    title: "App Seva",
    titleHindi: "डिजिटल धर्म",
    desc: "Keep Gita Companion free for all"
  }
];
const SLIDE_TITLES = [
  "Scan & Donate",
  "Sacred Bank Transfer",
  "Choose Your Seva",
  "धन्यवाद — Dhanyavaad"
];
const SLIDE_COUNT = 4;
function AdminPanel({ onSaved, existing }) {
  const [open, setOpen] = reactExports.useState(false);
  const [qrPreview, setQrPreview] = reactExports.useState((existing == null ? void 0 : existing.qrDataUrl) ?? "");
  const [form, setForm] = reactExports.useState({
    accountName: (existing == null ? void 0 : existing.accountName) ?? "",
    accountNumber: (existing == null ? void 0 : existing.accountNumber) ?? "",
    ifscCode: (existing == null ? void 0 : existing.ifscCode) ?? "",
    bankName: (existing == null ? void 0 : existing.bankName) ?? "",
    upiId: (existing == null ? void 0 : existing.upiId) ?? ""
  });
  const [saving, setSaving] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  function handleQrFile(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      const url = (_a2 = ev.target) == null ? void 0 : _a2.result;
      setQrPreview(url);
    };
    reader.readAsDataURL(file);
  }
  function handleField(key, val) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }
  async function handleSave() {
    setSaving(true);
    const info = {
      qrDataUrl: qrPreview,
      ...form
    };
    saveDonationInfo(info);
    onSaved(info);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 4e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-4 rounded-xl overflow-hidden",
      style: {
        border: "1.5px solid oklch(0.78 0.34 54 / 0.35)",
        background: "oklch(0.97 0.06 70 / 0.90)"
      },
      "data-ocid": "donate.admin.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between px-4 py-3 transition-smooth",
            style: { color: "oklch(0.38 0.18 46)" },
            "aria-expanded": open,
            "data-ocid": "donate.admin.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs font-bold italic tracking-widest uppercase", children: "⚙ Update Donation Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display text-base transition-smooth",
                  style: {
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    display: "inline-block"
                  },
                  "aria-hidden": "true",
                  children: "▾"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 space-y-3", "data-ocid": "donate.admin.form", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs font-bold italic mb-2",
                    style: { color: "oklch(0.42 0.18 46)" },
                    children: "QR Code Image"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  qrPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: qrPreview,
                      alt: "QR Code preview",
                      className: "w-16 h-16 rounded-lg object-contain",
                      style: { border: "2px solid oklch(0.78 0.34 54 / 0.5)" }
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-16 h-16 rounded-lg flex items-center justify-center text-2xl",
                      style: {
                        border: "2px dashed oklch(0.78 0.34 54 / 0.45)",
                        background: "oklch(0.95 0.07 68 / 0.7)"
                      },
                      "aria-hidden": "true",
                      children: "📷"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          var _a;
                          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                        },
                        className: "px-4 py-2 rounded-lg font-display text-xs font-bold italic transition-smooth hover:scale-105",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.78 0.34 54 / 0.22), oklch(0.72 0.28 46 / 0.18))",
                          border: "1.5px solid oklch(0.78 0.34 54 / 0.55)",
                          color: "oklch(0.32 0.16 40)"
                        },
                        "data-ocid": "donate.admin.upload_button",
                        children: "📤 Choose QR Image"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic mt-1",
                        style: { color: "oklch(0.55 0.12 48)" },
                        children: "PNG, JPG or WEBP"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: fileInputRef,
                    type: "file",
                    accept: "image/*",
                    className: "sr-only",
                    onChange: handleQrFile,
                    "aria-label": "Upload QR code image",
                    "data-ocid": "donate.admin.qr_input"
                  }
                )
              ] }),
              [
                {
                  key: "accountName",
                  label: "Account Name",
                  placeholder: "e.g. Gita Companion Trust"
                },
                {
                  key: "bankName",
                  label: "Bank Name",
                  placeholder: "e.g. State Bank of India"
                },
                {
                  key: "accountNumber",
                  label: "Account Number",
                  placeholder: "e.g. 12345678901234"
                },
                {
                  key: "ifscCode",
                  label: "IFSC Code",
                  placeholder: "e.g. SBIN0001234"
                },
                {
                  key: "upiId",
                  label: "UPI ID",
                  placeholder: "e.g. dharma@upi"
                }
              ].map(({ key, label, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: `donate-admin-${key}`,
                    className: "font-display text-xs font-bold italic block mb-1",
                    style: { color: "oklch(0.42 0.18 46)" },
                    children: label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: `donate-admin-${key}`,
                    type: "text",
                    value: form[key],
                    onChange: (e) => handleField(key, e.target.value),
                    placeholder,
                    className: "manuscript-input",
                    style: { fontSize: "0.875rem", padding: "0.55rem 0.85rem" },
                    "data-ocid": `donate.admin.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleSave,
                  disabled: saving,
                  className: "w-full py-2.5 rounded-xl font-display text-sm font-bold italic transition-smooth hover:scale-105 disabled:opacity-60",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.70 0.28 46))",
                    border: "2px solid oklch(0.68 0.28 46)",
                    color: "oklch(0.12 0.06 30)",
                    boxShadow: "0 4px 20px oklch(0.78 0.34 54 / 0.35)"
                  },
                  "data-ocid": "donate.admin.save_button",
                  children: saving ? "Saving..." : "✦ Save Donation Details ✦"
                }
              ),
              saved && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  className: "text-center py-2 rounded-lg font-body text-xs italic",
                  style: {
                    background: "oklch(0.92 0.12 148 / 0.25)",
                    border: "1px solid oklch(0.62 0.20 148 / 0.45)",
                    color: "oklch(0.30 0.14 148)"
                  },
                  "data-ocid": "donate.admin.success_state",
                  children: "🙏 Sacred donation details updated. Krishna's blessings to you."
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function QRSlide({ info, onInfoSaved }) {
  const [copied, setCopied] = reactExports.useState(false);
  function copyUpi() {
    if (!(info == null ? void 0 : info.upiId)) return;
    navigator.clipboard.writeText(info.upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "payment-gratitude-text", style: { fontSize: "1.5rem" }, children: "Scan & Donate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-sm italic mt-1",
          style: { color: "oklch(0.42 0.16 46)" },
          children: "Sacred Offering — Every rupee is a flower at His feet"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "payment-qr-border", "data-ocid": "donate.qr.frame", children: (info == null ? void 0 : info.qrDataUrl) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: info.qrDataUrl,
        alt: "Donation QR Code — Scan to donate",
        className: "w-44 h-44 object-contain rounded-lg",
        style: {
          border: "3px solid oklch(0.78 0.34 54 / 0.55)",
          background: "oklch(0.99 0.02 74)",
          padding: "8px",
          boxShadow: "0 0 24px oklch(0.78 0.34 54 / 0.25)"
        }
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "w-44 h-44 flex flex-col items-center justify-center rounded-lg gap-2",
        style: {
          background: "linear-gradient(135deg, oklch(0.97 0.05 74), oklch(0.94 0.08 68))",
          border: "2px dashed oklch(0.78 0.34 54 / 0.45)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", "aria-hidden": "true", children: "🪷" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic text-center px-3",
              style: { color: "oklch(0.42 0.18 46)" },
              children: "Sacred QR Code"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[10px] italic text-center px-3",
              style: { color: "oklch(0.55 0.12 48)" },
              children: "Coming Soon"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-xs", children: [
      (info == null ? void 0 : info.qrDataUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-sm italic leading-relaxed mb-2",
          style: { color: "oklch(0.40 0.14 46)" },
          children: "Point your camera at this sacred QR to donate"
        }
      ),
      (info == null ? void 0 : info.upiId) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-4 py-2 rounded-lg inline-flex items-center gap-2",
            style: {
              background: "oklch(0.78 0.34 54 / 0.10)",
              border: "1px solid oklch(0.78 0.34 54 / 0.35)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", "aria-hidden": "true", children: "📱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-display text-sm font-bold italic",
                  style: { color: "oklch(0.42 0.20 48)" },
                  children: [
                    "UPI: ",
                    info.upiId
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: copyUpi,
            className: "px-2 py-1 rounded-full font-display text-[10px] font-bold italic transition-smooth hover:scale-105",
            style: {
              background: copied ? "oklch(0.62 0.18 148 / 0.20)" : "oklch(0.78 0.34 54 / 0.18)",
              border: `1px solid ${copied ? "oklch(0.62 0.18 148 / 0.5)" : "oklch(0.78 0.34 54 / 0.45)"}`,
              color: copied ? "oklch(0.30 0.14 148)" : "oklch(0.38 0.18 46)"
            },
            "data-ocid": "donate.qr.copy_upi",
            children: copied ? "✓ Copied" : "Copy"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "px-4 py-2 rounded-lg inline-flex items-center gap-2",
          style: {
            background: "oklch(0.78 0.34 54 / 0.08)",
            border: "1px solid oklch(0.78 0.34 54 / 0.28)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", "aria-hidden": "true", children: "📱" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-sm italic",
                style: { color: "oklch(0.55 0.14 46)" },
                children: "UPI details coming soon"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-xs italic mt-2",
          style: { color: "oklch(0.55 0.10 48)" },
          children: "PhonePe · Google Pay · Paytm · BHIM UPI"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminPanel, { onSaved: onInfoSaved, existing: info }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 mt-2", "aria-hidden": "true", children: ["🌸", "🪷", "🌸"].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-lg opacity-60",
        style: {
          animation: `sacred-float ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`
        },
        children: f
      },
      i
    )) })
  ] });
}
function BankSlide({ info }) {
  const [selected, setSelected] = reactExports.useState(108);
  const [copiedField, setCopiedField] = reactExports.useState(null);
  function copyField(label, value) {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2e3);
    });
  }
  const bankRows = info ? [
    {
      label: "Account Name",
      value: info.accountName,
      canCopy: false,
      icon: "👤"
    },
    {
      label: "Bank Name",
      value: info.bankName,
      canCopy: false,
      icon: "🏦"
    },
    {
      label: "Account Number",
      value: info.accountNumber,
      canCopy: true,
      icon: "🔢"
    },
    { label: "IFSC Code", value: info.ifscCode, canCopy: true, icon: "📋" },
    { label: "UPI ID", value: info.upiId, canCopy: true, icon: "📱" }
  ] : [
    {
      label: "Account Name",
      value: "Details Coming Soon",
      canCopy: false,
      icon: "👤"
    },
    {
      label: "Bank Name",
      value: "Details Coming Soon",
      canCopy: false,
      icon: "🏦"
    },
    { label: "Account Number", value: "—", canCopy: false, icon: "🔢" },
    { label: "IFSC Code", value: "—", canCopy: false, icon: "📋" },
    { label: "UPI ID", value: "—", canCopy: false, icon: "📱" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full overflow-y-auto py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "payment-gratitude-text", style: { fontSize: "1.5rem" }, children: "Sacred Bank Transfer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-sm italic mt-1",
          style: { color: "oklch(0.42 0.16 46)" },
          children: "NEFT · RTGS · IMPS — Direct to Krishna's treasury"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 mb-4", children: [
      { amt: 108, label: "₹108", sub: "Spiritual" },
      { amt: 1008, label: "₹1,008", sub: "Auspicious" }
    ].map(({ amt, label, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setSelected(amt),
        className: "px-5 py-2.5 rounded-xl transition-smooth text-center",
        style: {
          background: selected === amt ? "linear-gradient(135deg, oklch(0.78 0.34 54 / 0.25), oklch(0.72 0.28 46 / 0.20))" : "oklch(0.97 0.05 74 / 0.85)",
          border: selected === amt ? "2px solid oklch(0.78 0.34 54 / 0.75)" : "2px solid oklch(0.78 0.28 54 / 0.25)",
          boxShadow: selected === amt ? "0 0 18px oklch(0.78 0.34 54 / 0.30)" : "none"
        },
        "data-ocid": `donate.bank.amount.${amt}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-lg font-bold italic",
              style: {
                color: selected === amt ? "oklch(0.52 0.26 48)" : "oklch(0.32 0.12 40)"
              },
              children: label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.55 0.14 46)" },
              children: sub
            }
          )
        ]
      },
      amt
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl p-4 mx-auto max-w-sm",
        style: {
          background: "linear-gradient(160deg, oklch(0.98 0.05 74 / 0.95), oklch(0.95 0.08 68 / 0.92))",
          border: "2px solid oklch(0.78 0.34 54 / 0.40)",
          boxShadow: "0 4px 24px oklch(0.78 0.34 54 / 0.18), inset 0 1px 0 oklch(1 0 0 / 0.5)"
        },
        "data-ocid": "donate.bank.details",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic text-center mb-3 tracking-widest uppercase",
              style: { color: "oklch(0.55 0.24 48 / 0.80)" },
              children: "✦ Bank Details ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: bankRows.map(({ label, value, canCopy, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 px-3 py-2 rounded-lg",
              style: {
                background: "oklch(0.97 0.06 72 / 0.80)",
                border: "1px solid oklch(0.78 0.28 54 / 0.20)"
              },
              "data-ocid": `donate.bank.field.${label.toLowerCase().replace(/\s/g, "-")}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", "aria-hidden": "true", children: icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-[10px] font-bold italic uppercase tracking-wider",
                      style: { color: "oklch(0.55 0.16 48 / 0.75)" },
                      children: label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm font-semibold truncate",
                      style: {
                        color: value.includes("Soon") ? "oklch(0.60 0.12 48)" : "oklch(0.20 0.10 32)"
                      },
                      children: value
                    }
                  )
                ] }),
                canCopy && info && value !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => copyField(label, value),
                    className: "shrink-0 px-2 py-0.5 rounded-full font-display text-[10px] font-bold italic transition-smooth hover:scale-105",
                    style: {
                      background: copiedField === label ? "oklch(0.62 0.18 148 / 0.22)" : "oklch(0.78 0.34 54 / 0.18)",
                      border: `1px solid ${copiedField === label ? "oklch(0.62 0.18 148 / 0.5)" : "oklch(0.78 0.34 54 / 0.45)"}`,
                      color: copiedField === label ? "oklch(0.30 0.14 148)" : "oklch(0.38 0.18 46)"
                    },
                    "data-ocid": `donate.bank.copy.${label.toLowerCase().replace(/\s/g, "-")}`,
                    children: copiedField === label ? "✓" : "Copy"
                  }
                )
              ]
            },
            label
          )) })
        ]
      }
    ),
    !info && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-body text-xs italic text-center mt-3",
        style: { color: "oklch(0.50 0.14 46)" },
        children: "Admin can update bank details from the QR Slide"
      }
    )
  ] });
}
function SevaSlide() {
  const [selected, setSelected] = reactExports.useState("gau");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "payment-gratitude-text", style: { fontSize: "1.5rem" }, children: "Choose Your Seva" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-sm italic mt-1",
          style: { color: "oklch(0.42 0.16 46)" },
          children: "Where shall your offering flow today?"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "payment-purpose-options flex-1 justify-center px-2", children: SEVA_OPTIONS.map(({ key, icon, title, titleHindi, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        className: `payment-radio-option${selected === key ? " active" : ""}`,
        style: { cursor: "pointer" },
        "data-ocid": `donate.seva.option.${key}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              name: "seva",
              value: key,
              checked: selected === key,
              onChange: () => setSelected(key),
              className: "sr-only"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "payment-radio-button", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-hidden": "true", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-display text-sm font-bold italic",
                style: {
                  color: selected === key ? "oklch(0.42 0.22 48)" : "oklch(0.28 0.10 36)"
                },
                children: [
                  title,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body not-italic text-xs",
                      style: { color: "oklch(0.55 0.14 46)" },
                      children: [
                        "— ",
                        titleHindi
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "payment-radio-label text-xs",
                style: { color: "oklch(0.50 0.12 44)" },
                children: desc
              }
            )
          ] }),
          selected === key && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-sm font-display font-bold",
              style: { color: "oklch(0.62 0.28 52)" },
              "aria-hidden": "true",
              children: "🌸"
            }
          )
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mt-6 p-3 rounded-lg text-center mx-2",
        style: {
          background: "oklch(0.78 0.34 54 / 0.08)",
          border: "1px solid oklch(0.78 0.34 54 / 0.22)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs italic",
            style: { color: "oklch(0.42 0.14 44)" },
            children: '"Whatever you do, whatever you eat, whatever you offer — do it as an offering to Me." — BG 9.27'
          }
        )
      }
    )
  ] });
}
function GratitudeSlide() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "payment-gratitude h-full overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "payment-gratitude-icon", "aria-hidden": "true", children: "ॐ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "payment-gratitude-text", children: "धन्यवाद" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-display text-base italic mt-1",
          style: { color: "oklch(0.55 0.22 48)" },
          children: "Dhanyavaad — Thank You"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "font-body text-base italic leading-relaxed max-w-xs",
        style: { color: "oklch(0.32 0.12 38)" },
        children: [
          "Every rupee you offer is an act of Seva.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Krishna sees your heart. 🙏"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-sm w-full rounded-xl p-5",
        style: {
          background: "linear-gradient(135deg, oklch(0.97 0.06 72 / 0.95), oklch(0.94 0.09 68 / 0.92))",
          border: "2px solid oklch(0.78 0.34 54 / 0.40)",
          boxShadow: "0 4px 24px oklch(0.78 0.34 54 / 0.18)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic leading-relaxed text-center",
              style: { color: "oklch(0.28 0.10 36)" },
              children: '"Whoever offers Me with love a leaf, a flower, a fruit or water, I will accept that devotion."'
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-xs font-bold italic text-center mt-2",
              style: { color: "oklch(0.62 0.26 50)" },
              children: "— Bhagavad Gita, Chapter 9, Verse 26"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 px-5 py-3 rounded-full",
        style: {
          background: "oklch(0.78 0.34 54 / 0.12)",
          border: "1.5px solid oklch(0.78 0.34 54 / 0.35)"
        },
        "data-ocid": "donate.gratitude.counter",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", "aria-hidden": "true", children: "🪔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-display text-sm font-bold italic",
              style: { color: "oklch(0.42 0.20 48)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      fontSize: "1.4rem",
                      color: "oklch(0.52 0.26 48)",
                      marginRight: "0.3rem"
                    },
                    children: "108"
                  }
                ),
                "devotees have donated this month"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3 mt-1", "aria-hidden": "true", children: ["🌸", "🌺", "🪷", "🌺", "🌸"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-base opacity-70",
        style: {
          animation: `sacred-float ${2.5 + i * 0.3}s ease-in-out infinite`,
          animationDelay: `${i * 0.35}s`
        },
        children: p
      },
      i
    )) })
  ] });
}
function DonatePage() {
  const navigate = useNavigate();
  const [current, setCurrent] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const touchStartX = reactExports.useRef(null);
  const [isAnimating, setIsAnimating] = reactExports.useState(false);
  const [donationInfo, setDonationInfo] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setDonationInfo(loadDonationInfo());
  }, []);
  const goTo = reactExports.useCallback(
    (idx) => {
      if (isAnimating || idx === current) return;
      setDir(idx > current ? 1 : -1);
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [current, isAnimating]
  );
  const prev = reactExports.useCallback(
    () => goTo(Math.max(0, current - 1)),
    [goTo, current]
  );
  const next = reactExports.useCallback(
    () => goTo(Math.min(SLIDE_COUNT - 1, current + 1)),
    [goTo, current]
  );
  reactExports.useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
  }
  const slides = [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QRSlide, { info: donationInfo, onInfoSaved: setDonationInfo }, "qr"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BankSlide, { info: donationInfo }, "bank"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SevaSlide, {}, "seva"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GratitudeSlide, {}, "gratitude")
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-40 flex flex-col",
      style: {
        background: "linear-gradient(160deg, oklch(0.92 0.08 64 / 0.97) 0%, oklch(0.88 0.12 56 / 0.97) 50%, oklch(0.90 0.10 60 / 0.97) 100%)"
      },
      "data-ocid": "donate.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            "aria-hidden": "true",
            style: {
              background: "radial-gradient(ellipse 80% 50% at 50% 40%, oklch(0.78 0.34 54 / 0.15) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative z-10 flex items-center gap-4 px-4 pt-4 pb-2",
            style: { borderBottom: "1px solid oklch(0.78 0.28 54 / 0.20)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: "/menu" }),
                  className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-smooth hover:scale-105",
                  style: {
                    background: "oklch(0.78 0.34 54 / 0.12)",
                    border: "1.5px solid oklch(0.78 0.34 54 / 0.35)",
                    color: "oklch(0.32 0.14 40)"
                  },
                  "aria-label": "Go back",
                  "data-ocid": "donate.back_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", "aria-hidden": "true", children: "←" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm italic", children: "Back" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display text-base font-bold italic truncate",
                    style: { color: "oklch(0.28 0.14 38)" },
                    children: "🙏 दान सेवा — Sacred Seva"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.52 0.18 46)" },
                    children: SLIDE_TITLES[current]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex-shrink-0 px-2.5 py-1 rounded-full font-body text-xs italic",
                  style: {
                    background: "oklch(0.78 0.34 54 / 0.12)",
                    color: "oklch(0.45 0.18 46)",
                    border: "1px solid oklch(0.78 0.28 54 / 0.25)"
                  },
                  "aria-label": `Slide ${current + 1} of ${SLIDE_COUNT}`,
                  children: [
                    current + 1,
                    " / ",
                    SLIDE_COUNT
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative flex-1 px-4 py-4 min-h-0",
            onTouchStart,
            onTouchEnd,
            "data-ocid": "donate.slide_area",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-4 rounded-xl pointer-events-none z-0",
                  "aria-hidden": "true",
                  style: {
                    border: "2px solid oklch(0.78 0.34 54 / 0.45)",
                    boxShadow: "0 0 0 1px oklch(0.78 0.34 54 / 0.18), inset 0 0 0 1px oklch(0.78 0.34 54 / 0.12)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: dir * 80 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -dir * 80 },
                  transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
                  className: "absolute inset-4 rounded-xl overflow-hidden z-10",
                  style: {
                    background: "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.96) 0%, oklch(0.95 0.09 64 / 0.94) 100%)",
                    border: "2px solid oklch(0.78 0.34 54 / 0.55)",
                    boxShadow: "0 10px 48px rgba(0,0,0,0.18), inset 0 1px 0 oklch(1 0 0 / 0.5)"
                  },
                  "data-ocid": `donate.slide.${current + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full overflow-y-auto px-5 py-4 flex flex-col items-center gap-3", children: slides[current] })
                },
                current
              ) }),
              current > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "button",
                  initial: { opacity: 0, scale: 0.85 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.85 },
                  onClick: prev,
                  className: "absolute left-6 top-1/2 z-20 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.95 0.09 68), oklch(0.92 0.13 62))",
                    border: "2px solid oklch(0.78 0.34 54 / 0.55)",
                    boxShadow: "0 4px 16px oklch(0.78 0.34 54 / 0.30)",
                    color: "oklch(0.38 0.20 48)"
                  },
                  "aria-label": "Previous slide",
                  "data-ocid": "donate.prev_button",
                  children: "←"
                }
              ),
              current < SLIDE_COUNT - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "button",
                  initial: { opacity: 0, scale: 0.85 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.85 },
                  onClick: next,
                  className: "absolute right-6 top-1/2 z-20 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.95 0.09 68), oklch(0.92 0.13 62))",
                    border: "2px solid oklch(0.78 0.34 54 / 0.55)",
                    boxShadow: "0 4px 16px oklch(0.78 0.34 54 / 0.30)",
                    color: "oklch(0.38 0.20 48)"
                  },
                  "aria-label": "Next slide",
                  "data-ocid": "donate.next_button",
                  children: "→"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "payment-slides-nav pb-4 relative z-10",
            "data-ocid": "donate.dots",
            children: Array.from({ length: SLIDE_COUNT }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `payment-dot${current === i ? " active" : ""}`,
                onClick: () => goTo(i),
                "aria-label": `Go to slide ${i + 1}: ${SLIDE_TITLES[i]}`,
                "aria-current": current === i ? "true" : void 0,
                "data-ocid": `donate.dot.${i + 1}`
              },
              i
            ))
          }
        )
      ]
    }
  );
}
export {
  DonatePage
};
