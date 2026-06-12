import { useNavigate } from "@tanstack/react-router";
// ─── Donate Page — Gallery-Style 4-Slide Donation Carousel ─────────────────
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SevaOption = "gau" | "mandir" | "app";

interface DonationInfo {
  qrDataUrl: string;
  accountName: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  upiId: string;
}

const STORAGE_KEY = "gita_donation_info";

function loadDonationInfo(): DonationInfo | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DonationInfo) : null;
  } catch {
    return null;
  }
}

function saveDonationInfo(info: DonationInfo): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

// ─── Shared Data ──────────────────────────────────────────────────────────────

const SEVA_OPTIONS: {
  key: SevaOption;
  icon: string;
  title: string;
  titleHindi: string;
  desc: string;
}[] = [
  {
    key: "gau",
    icon: "🐄",
    title: "Gau Seva",
    titleHindi: "गौ सेवा",
    desc: "Support holy cows and gaushalas",
  },
  {
    key: "mandir",
    icon: "🛕",
    title: "Mandir Seva",
    titleHindi: "मंदिर निर्माण",
    desc: "Help build Krishna's abode",
  },
  {
    key: "app",
    icon: "📱",
    title: "App Seva",
    titleHindi: "डिजिटल धर्म",
    desc: "Keep Gita Companion free for all",
  },
];

const SLIDE_TITLES = [
  "Scan & Donate",
  "Sacred Bank Transfer",
  "Choose Your Seva",
  "धन्यवाद — Dhanyavaad",
];

const SLIDE_COUNT = 4;

// ─── Admin Upload Panel ───────────────────────────────────────────────────────

interface AdminPanelProps {
  onSaved: (info: DonationInfo) => void;
  existing: DonationInfo | null;
}

function AdminPanel({ onSaved, existing }: AdminPanelProps) {
  const [open, setOpen] = useState(false);
  const [qrPreview, setQrPreview] = useState<string>(existing?.qrDataUrl ?? "");
  const [form, setForm] = useState({
    accountName: existing?.accountName ?? "",
    accountNumber: existing?.accountNumber ?? "",
    ifscCode: existing?.ifscCode ?? "",
    bankName: existing?.bankName ?? "",
    upiId: existing?.upiId ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleQrFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target?.result as string;
      setQrPreview(url);
    };
    reader.readAsDataURL(file);
  }

  function handleField(key: keyof typeof form, val: string) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  async function handleSave() {
    setSaving(true);
    const info: DonationInfo = {
      qrDataUrl: qrPreview,
      ...form,
    };
    saveDonationInfo(info);
    onSaved(info);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  }

  return (
    <div
      className="mt-4 rounded-xl overflow-hidden"
      style={{
        border: "1.5px solid oklch(0.78 0.34 54 / 0.35)",
        background: "oklch(0.97 0.06 70 / 0.90)",
      }}
      data-ocid="donate.admin.panel"
    >
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 transition-smooth"
        style={{ color: "oklch(0.38 0.18 46)" }}
        aria-expanded={open}
        data-ocid="donate.admin.toggle"
      >
        <span className="font-display text-xs font-bold italic tracking-widest uppercase">
          ⚙ Update Donation Details
        </span>
        <span
          className="font-display text-base transition-smooth"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3" data-ocid="donate.admin.form">
              {/* QR Upload */}
              <div>
                <p
                  className="font-display text-xs font-bold italic mb-2"
                  style={{ color: "oklch(0.42 0.18 46)" }}
                >
                  QR Code Image
                </p>
                <div className="flex items-center gap-3">
                  {qrPreview ? (
                    <img
                      src={qrPreview}
                      alt="QR Code preview"
                      className="w-16 h-16 rounded-lg object-contain"
                      style={{ border: "2px solid oklch(0.78 0.34 54 / 0.5)" }}
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl"
                      style={{
                        border: "2px dashed oklch(0.78 0.34 54 / 0.45)",
                        background: "oklch(0.95 0.07 68 / 0.7)",
                      }}
                      aria-hidden="true"
                    >
                      📷
                    </div>
                  )}
                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-lg font-display text-xs font-bold italic transition-smooth hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.78 0.34 54 / 0.22), oklch(0.72 0.28 46 / 0.18))",
                        border: "1.5px solid oklch(0.78 0.34 54 / 0.55)",
                        color: "oklch(0.32 0.16 40)",
                      }}
                      data-ocid="donate.admin.upload_button"
                    >
                      📤 Choose QR Image
                    </button>
                    <p
                      className="font-body text-xs italic mt-1"
                      style={{ color: "oklch(0.55 0.12 48)" }}
                    >
                      PNG, JPG or WEBP
                    </p>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleQrFile}
                  aria-label="Upload QR code image"
                  data-ocid="donate.admin.qr_input"
                />
              </div>

              {/* Bank details fields */}
              {(
                [
                  {
                    key: "accountName",
                    label: "Account Name",
                    placeholder: "e.g. Gita Companion Trust",
                  },
                  {
                    key: "bankName",
                    label: "Bank Name",
                    placeholder: "e.g. State Bank of India",
                  },
                  {
                    key: "accountNumber",
                    label: "Account Number",
                    placeholder: "e.g. 12345678901234",
                  },
                  {
                    key: "ifscCode",
                    label: "IFSC Code",
                    placeholder: "e.g. SBIN0001234",
                  },
                  {
                    key: "upiId",
                    label: "UPI ID",
                    placeholder: "e.g. dharma@upi",
                  },
                ] as const
              ).map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label
                    htmlFor={`donate-admin-${key}`}
                    className="font-display text-xs font-bold italic block mb-1"
                    style={{ color: "oklch(0.42 0.18 46)" }}
                  >
                    {label}
                  </label>
                  <input
                    id={`donate-admin-${key}`}
                    type="text"
                    value={form[key]}
                    onChange={(e) => handleField(key, e.target.value)}
                    placeholder={placeholder}
                    className="manuscript-input"
                    style={{ fontSize: "0.875rem", padding: "0.55rem 0.85rem" }}
                    data-ocid={`donate.admin.${key}_input`}
                  />
                </div>
              ))}

              {/* Save button */}
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="w-full py-2.5 rounded-xl font-display text-sm font-bold italic transition-smooth hover:scale-105 disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.70 0.28 46))",
                  border: "2px solid oklch(0.68 0.28 46)",
                  color: "oklch(0.12 0.06 30)",
                  boxShadow: "0 4px 20px oklch(0.78 0.34 54 / 0.35)",
                }}
                data-ocid="donate.admin.save_button"
              >
                {saving ? "Saving..." : "✦ Save Donation Details ✦"}
              </button>

              {saved && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-2 rounded-lg font-body text-xs italic"
                  style={{
                    background: "oklch(0.92 0.12 148 / 0.25)",
                    border: "1px solid oklch(0.62 0.20 148 / 0.45)",
                    color: "oklch(0.30 0.14 148)",
                  }}
                  data-ocid="donate.admin.success_state"
                >
                  🙏 Sacred donation details updated. Krishna's blessings to
                  you.
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Slide 1 — QR Code ────────────────────────────────────────────────────────

interface QRSlideProps {
  info: DonationInfo | null;
  onInfoSaved: (info: DonationInfo) => void;
}

function QRSlide({ info, onInfoSaved }: QRSlideProps) {
  const [copied, setCopied] = useState(false);

  function copyUpi() {
    if (!info?.upiId) return;
    navigator.clipboard.writeText(info.upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="text-center mb-3">
        <h2 className="payment-gratitude-text" style={{ fontSize: "1.5rem" }}>
          Scan &amp; Donate
        </h2>
        <p
          className="font-body text-sm italic mt-1"
          style={{ color: "oklch(0.42 0.16 46)" }}
        >
          Sacred Offering — Every rupee is a flower at His feet
        </p>
      </div>

      {/* QR Frame */}
      <div className="payment-qr-border" data-ocid="donate.qr.frame">
        {info?.qrDataUrl ? (
          <img
            src={info.qrDataUrl}
            alt="Donation QR Code — Scan to donate"
            className="w-44 h-44 object-contain rounded-lg"
            style={{
              border: "3px solid oklch(0.78 0.34 54 / 0.55)",
              background: "oklch(0.99 0.02 74)",
              padding: "8px",
              boxShadow: "0 0 24px oklch(0.78 0.34 54 / 0.25)",
            }}
          />
        ) : (
          <div
            className="w-44 h-44 flex flex-col items-center justify-center rounded-lg gap-2"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.97 0.05 74), oklch(0.94 0.08 68))",
              border: "2px dashed oklch(0.78 0.34 54 / 0.45)",
            }}
          >
            <span className="text-4xl" aria-hidden="true">
              🪷
            </span>
            <p
              className="font-display text-xs font-bold italic text-center px-3"
              style={{ color: "oklch(0.42 0.18 46)" }}
            >
              Sacred QR Code
            </p>
            <p
              className="font-body text-[10px] italic text-center px-3"
              style={{ color: "oklch(0.55 0.12 48)" }}
            >
              Coming Soon
            </p>
          </div>
        )}
      </div>

      {/* UPI & instruction */}
      <div className="text-center max-w-xs">
        {info?.qrDataUrl && (
          <p
            className="font-body text-sm italic leading-relaxed mb-2"
            style={{ color: "oklch(0.40 0.14 46)" }}
          >
            Point your camera at this sacred QR to donate
          </p>
        )}
        {info?.upiId ? (
          <div className="flex items-center justify-center gap-2">
            <div
              className="px-4 py-2 rounded-lg inline-flex items-center gap-2"
              style={{
                background: "oklch(0.78 0.34 54 / 0.10)",
                border: "1px solid oklch(0.78 0.34 54 / 0.35)",
              }}
            >
              <span className="text-base" aria-hidden="true">
                📱
              </span>
              <span
                className="font-display text-sm font-bold italic"
                style={{ color: "oklch(0.42 0.20 48)" }}
              >
                UPI: {info.upiId}
              </span>
            </div>
            <button
              type="button"
              onClick={copyUpi}
              className="px-2 py-1 rounded-full font-display text-[10px] font-bold italic transition-smooth hover:scale-105"
              style={{
                background: copied
                  ? "oklch(0.62 0.18 148 / 0.20)"
                  : "oklch(0.78 0.34 54 / 0.18)",
                border: `1px solid ${copied ? "oklch(0.62 0.18 148 / 0.5)" : "oklch(0.78 0.34 54 / 0.45)"}`,
                color: copied ? "oklch(0.30 0.14 148)" : "oklch(0.38 0.18 46)",
              }}
              data-ocid="donate.qr.copy_upi"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        ) : (
          <div
            className="px-4 py-2 rounded-lg inline-flex items-center gap-2"
            style={{
              background: "oklch(0.78 0.34 54 / 0.08)",
              border: "1px solid oklch(0.78 0.34 54 / 0.28)",
            }}
          >
            <span className="text-base" aria-hidden="true">
              📱
            </span>
            <span
              className="font-display text-sm italic"
              style={{ color: "oklch(0.55 0.14 46)" }}
            >
              UPI details coming soon
            </span>
          </div>
        )}
        <p
          className="font-body text-xs italic mt-2"
          style={{ color: "oklch(0.55 0.10 48)" }}
        >
          PhonePe · Google Pay · Paytm · BHIM UPI
        </p>
      </div>

      {/* Admin panel */}
      <div className="w-full max-w-xs">
        <AdminPanel onSaved={onInfoSaved} existing={info} />
      </div>

      {/* Lotus corner decor */}
      <div className="flex justify-center gap-4 mt-2" aria-hidden="true">
        {["🌸", "🪷", "🌸"].map((f, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: decorative
            key={i}
            className="text-lg opacity-60"
            style={{
              animation: `sacred-float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 2 — Bank Transfer ─────────────────────────────────────────────────

interface BankSlideProps {
  info: DonationInfo | null;
}

function BankSlide({ info }: BankSlideProps) {
  const [selected, setSelected] = useState<108 | 1008>(108);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  function copyField(label: string, value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    });
  }

  const bankRows = info
    ? [
        {
          label: "Account Name",
          value: info.accountName,
          canCopy: false,
          icon: "👤",
        },
        {
          label: "Bank Name",
          value: info.bankName,
          canCopy: false,
          icon: "🏦",
        },
        {
          label: "Account Number",
          value: info.accountNumber,
          canCopy: true,
          icon: "🔢",
        },
        { label: "IFSC Code", value: info.ifscCode, canCopy: true, icon: "📋" },
        { label: "UPI ID", value: info.upiId, canCopy: true, icon: "📱" },
      ]
    : [
        {
          label: "Account Name",
          value: "Details Coming Soon",
          canCopy: false,
          icon: "👤",
        },
        {
          label: "Bank Name",
          value: "Details Coming Soon",
          canCopy: false,
          icon: "🏦",
        },
        { label: "Account Number", value: "—", canCopy: false, icon: "🔢" },
        { label: "IFSC Code", value: "—", canCopy: false, icon: "📋" },
        { label: "UPI ID", value: "—", canCopy: false, icon: "📱" },
      ];

  return (
    <div className="h-full overflow-y-auto py-2">
      <div className="text-center mb-3">
        <h2 className="payment-gratitude-text" style={{ fontSize: "1.5rem" }}>
          Sacred Bank Transfer
        </h2>
        <p
          className="font-body text-sm italic mt-1"
          style={{ color: "oklch(0.42 0.16 46)" }}
        >
          NEFT · RTGS · IMPS — Direct to Krishna's treasury
        </p>
      </div>

      {/* Suggested amounts */}
      <div className="flex justify-center gap-4 mb-4">
        {(
          [
            { amt: 108, label: "₹108", sub: "Spiritual" },
            { amt: 1008, label: "₹1,008", sub: "Auspicious" },
          ] as const
        ).map(({ amt, label, sub }) => (
          <button
            key={amt}
            type="button"
            onClick={() => setSelected(amt)}
            className="px-5 py-2.5 rounded-xl transition-smooth text-center"
            style={{
              background:
                selected === amt
                  ? "linear-gradient(135deg, oklch(0.78 0.34 54 / 0.25), oklch(0.72 0.28 46 / 0.20))"
                  : "oklch(0.97 0.05 74 / 0.85)",
              border:
                selected === amt
                  ? "2px solid oklch(0.78 0.34 54 / 0.75)"
                  : "2px solid oklch(0.78 0.28 54 / 0.25)",
              boxShadow:
                selected === amt
                  ? "0 0 18px oklch(0.78 0.34 54 / 0.30)"
                  : "none",
            }}
            data-ocid={`donate.bank.amount.${amt}`}
          >
            <p
              className="font-display text-lg font-bold italic"
              style={{
                color:
                  selected === amt
                    ? "oklch(0.52 0.26 48)"
                    : "oklch(0.32 0.12 40)",
              }}
            >
              {label}
            </p>
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.55 0.14 46)" }}
            >
              {sub}
            </p>
          </button>
        ))}
      </div>

      {/* Bank details card */}
      <div
        className="rounded-xl p-4 mx-auto max-w-sm"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.98 0.05 74 / 0.95), oklch(0.95 0.08 68 / 0.92))",
          border: "2px solid oklch(0.78 0.34 54 / 0.40)",
          boxShadow:
            "0 4px 24px oklch(0.78 0.34 54 / 0.18), inset 0 1px 0 oklch(1 0 0 / 0.5)",
        }}
        data-ocid="donate.bank.details"
      >
        <p
          className="font-display text-xs font-bold italic text-center mb-3 tracking-widest uppercase"
          style={{ color: "oklch(0.55 0.24 48 / 0.80)" }}
        >
          ✦ Bank Details ✦
        </p>
        <div className="space-y-2">
          {bankRows.map(({ label, value, canCopy, icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{
                background: "oklch(0.97 0.06 72 / 0.80)",
                border: "1px solid oklch(0.78 0.28 54 / 0.20)",
              }}
              data-ocid={`donate.bank.field.${label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <span className="text-base shrink-0" aria-hidden="true">
                {icon}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="font-display text-[10px] font-bold italic uppercase tracking-wider"
                  style={{ color: "oklch(0.55 0.16 48 / 0.75)" }}
                >
                  {label}
                </p>
                <p
                  className="font-body text-sm font-semibold truncate"
                  style={{
                    color: value.includes("Soon")
                      ? "oklch(0.60 0.12 48)"
                      : "oklch(0.20 0.10 32)",
                  }}
                >
                  {value}
                </p>
              </div>
              {canCopy && info && value !== "—" && (
                <button
                  type="button"
                  onClick={() => copyField(label, value)}
                  className="shrink-0 px-2 py-0.5 rounded-full font-display text-[10px] font-bold italic transition-smooth hover:scale-105"
                  style={{
                    background:
                      copiedField === label
                        ? "oklch(0.62 0.18 148 / 0.22)"
                        : "oklch(0.78 0.34 54 / 0.18)",
                    border: `1px solid ${copiedField === label ? "oklch(0.62 0.18 148 / 0.5)" : "oklch(0.78 0.34 54 / 0.45)"}`,
                    color:
                      copiedField === label
                        ? "oklch(0.30 0.14 148)"
                        : "oklch(0.38 0.18 46)",
                  }}
                  data-ocid={`donate.bank.copy.${label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {copiedField === label ? "✓" : "Copy"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {!info && (
        <p
          className="font-body text-xs italic text-center mt-3"
          style={{ color: "oklch(0.50 0.14 46)" }}
        >
          Admin can update bank details from the QR Slide
        </p>
      )}
    </div>
  );
}

// ─── Slide 3 — Choose Your Seva ──────────────────────────────────────────────

function SevaSlide() {
  const [selected, setSelected] = useState<SevaOption>("gau");

  return (
    <div className="h-full flex flex-col py-2">
      <div className="text-center mb-6">
        <h2 className="payment-gratitude-text" style={{ fontSize: "1.5rem" }}>
          Choose Your Seva
        </h2>
        <p
          className="font-body text-sm italic mt-1"
          style={{ color: "oklch(0.42 0.16 46)" }}
        >
          Where shall your offering flow today?
        </p>
      </div>

      <div className="payment-purpose-options flex-1 justify-center px-2">
        {SEVA_OPTIONS.map(({ key, icon, title, titleHindi, desc }) => (
          <label
            key={key}
            className={`payment-radio-option${selected === key ? " active" : ""}`}
            style={{ cursor: "pointer" }}
            data-ocid={`donate.seva.option.${key}`}
          >
            <input
              type="radio"
              name="seva"
              value={key}
              checked={selected === key}
              onChange={() => setSelected(key)}
              className="sr-only"
            />
            <div className="payment-radio-button" aria-hidden="true" />
            <span className="text-2xl" aria-hidden="true">
              {icon}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className="font-display text-sm font-bold italic"
                style={{
                  color:
                    selected === key
                      ? "oklch(0.42 0.22 48)"
                      : "oklch(0.28 0.10 36)",
                }}
              >
                {title}{" "}
                <span
                  className="font-body not-italic text-xs"
                  style={{ color: "oklch(0.55 0.14 46)" }}
                >
                  — {titleHindi}
                </span>
              </p>
              <p
                className="payment-radio-label text-xs"
                style={{ color: "oklch(0.50 0.12 44)" }}
              >
                {desc}
              </p>
            </div>
            {selected === key && (
              <span
                className="text-sm font-display font-bold"
                style={{ color: "oklch(0.62 0.28 52)" }}
                aria-hidden="true"
              >
                🌸
              </span>
            )}
          </label>
        ))}
      </div>

      <div
        className="mt-6 p-3 rounded-lg text-center mx-2"
        style={{
          background: "oklch(0.78 0.34 54 / 0.08)",
          border: "1px solid oklch(0.78 0.34 54 / 0.22)",
        }}
      >
        <p
          className="font-body text-xs italic"
          style={{ color: "oklch(0.42 0.14 44)" }}
        >
          "Whatever you do, whatever you eat, whatever you offer — do it as an
          offering to Me." — BG 9.27
        </p>
      </div>
    </div>
  );
}

// ─── Slide 4 — Gratitude ─────────────────────────────────────────────────────

function GratitudeSlide() {
  return (
    <div className="payment-gratitude h-full overflow-y-auto">
      <div className="payment-gratitude-icon" aria-hidden="true">
        ॐ
      </div>

      <div>
        <h2 className="payment-gratitude-text">धन्यवाद</h2>
        <p
          className="font-display text-base italic mt-1"
          style={{ color: "oklch(0.55 0.22 48)" }}
        >
          Dhanyavaad — Thank You
        </p>
      </div>

      <p
        className="font-body text-base italic leading-relaxed max-w-xs"
        style={{ color: "oklch(0.32 0.12 38)" }}
      >
        Every rupee you offer is an act of Seva.
        <br />
        Krishna sees your heart. 🙏
      </p>

      {/* Gita verse */}
      <div
        className="max-w-sm w-full rounded-xl p-5"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.06 72 / 0.95), oklch(0.94 0.09 68 / 0.92))",
          border: "2px solid oklch(0.78 0.34 54 / 0.40)",
          boxShadow: "0 4px 24px oklch(0.78 0.34 54 / 0.18)",
        }}
      >
        <p
          className="font-body text-sm italic leading-relaxed text-center"
          style={{ color: "oklch(0.28 0.10 36)" }}
        >
          "Whoever offers Me with love a leaf, a flower, a fruit or water, I
          will accept that devotion."
        </p>
        <p
          className="font-display text-xs font-bold italic text-center mt-2"
          style={{ color: "oklch(0.62 0.26 50)" }}
        >
          — Bhagavad Gita, Chapter 9, Verse 26
        </p>
      </div>

      {/* Devotee counter */}
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-full"
        style={{
          background: "oklch(0.78 0.34 54 / 0.12)",
          border: "1.5px solid oklch(0.78 0.34 54 / 0.35)",
        }}
        data-ocid="donate.gratitude.counter"
      >
        <span className="text-xl" aria-hidden="true">
          🪔
        </span>
        <p
          className="font-display text-sm font-bold italic"
          style={{ color: "oklch(0.42 0.20 48)" }}
        >
          <span
            style={{
              fontSize: "1.4rem",
              color: "oklch(0.52 0.26 48)",
              marginRight: "0.3rem",
            }}
          >
            108
          </span>
          devotees have donated this month
        </p>
      </div>

      {/* Floating petals */}
      <div className="flex justify-center gap-3 mt-1" aria-hidden="true">
        {["🌸", "🌺", "🪷", "🌺", "🌸"].map((p, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: decorative
            key={i}
            className="text-base opacity-70"
            style={{
              animation: `sacred-float ${2.5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.35}s`,
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Donate Page ─────────────────────────────────────────────────────────

export function DonatePage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [donationInfo, setDonationInfo] = useState<DonationInfo | null>(null);

  // Load saved donation info from localStorage on mount
  useEffect(() => {
    setDonationInfo(loadDonationInfo());
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating || idx === current) return;
      setDir(idx > current ? 1 : -1);
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [current, isAnimating],
  );

  const prev = useCallback(
    () => goTo(Math.max(0, current - 1)),
    [goTo, current],
  );
  const next = useCallback(
    () => goTo(Math.min(SLIDE_COUNT - 1, current + 1)),
    [goTo, current],
  );

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch / swipe
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
  }

  const slides = [
    <QRSlide key="qr" info={donationInfo} onInfoSaved={setDonationInfo} />,
    <BankSlide key="bank" info={donationInfo} />,
    <SevaSlide key="seva" />,
    <GratitudeSlide key="gratitude" />,
  ];

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.92 0.08 64 / 0.97) 0%, oklch(0.88 0.12 56 / 0.97) 50%, oklch(0.90 0.10 60 / 0.97) 100%)",
      }}
      data-ocid="donate.page"
    >
      {/* Saffron glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, oklch(0.78 0.34 54 / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Header Bar */}
      <div
        className="relative z-10 flex items-center gap-4 px-4 pt-4 pb-2"
        style={{ borderBottom: "1px solid oklch(0.78 0.28 54 / 0.20)" }}
      >
        <button
          type="button"
          onClick={() => navigate({ to: "/menu" })}
          className="flex items-center gap-2 px-3 py-2 rounded-lg transition-smooth hover:scale-105"
          style={{
            background: "oklch(0.78 0.34 54 / 0.12)",
            border: "1.5px solid oklch(0.78 0.34 54 / 0.35)",
            color: "oklch(0.32 0.14 40)",
          }}
          aria-label="Go back"
          data-ocid="donate.back_button"
        >
          <span className="text-base" aria-hidden="true">
            ←
          </span>
          <span className="font-body text-sm italic">Back</span>
        </button>

        <div className="flex-1 text-center min-w-0">
          <h1
            className="font-display text-base font-bold italic truncate"
            style={{ color: "oklch(0.28 0.14 38)" }}
          >
            🙏 दान सेवा — Sacred Seva
          </h1>
          <p
            className="font-body text-xs italic"
            style={{ color: "oklch(0.52 0.18 46)" }}
          >
            {SLIDE_TITLES[current]}
          </p>
        </div>

        {/* Slide count */}
        <div
          className="flex-shrink-0 px-2.5 py-1 rounded-full font-body text-xs italic"
          style={{
            background: "oklch(0.78 0.34 54 / 0.12)",
            color: "oklch(0.45 0.18 46)",
            border: "1px solid oklch(0.78 0.28 54 / 0.25)",
          }}
          aria-label={`Slide ${current + 1} of ${SLIDE_COUNT}`}
        >
          {current + 1} / {SLIDE_COUNT}
        </div>
      </div>

      {/* Slide Area */}
      <div
        className="relative flex-1 px-4 py-4 min-h-0"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        data-ocid="donate.slide_area"
      >
        {/* Ornate gold frame border */}
        <div
          className="absolute inset-4 rounded-xl pointer-events-none z-0"
          aria-hidden="true"
          style={{
            border: "2px solid oklch(0.78 0.34 54 / 0.45)",
            boxShadow:
              "0 0 0 1px oklch(0.78 0.34 54 / 0.18), inset 0 0 0 1px oklch(0.78 0.34 54 / 0.12)",
          }}
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 80 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-4 rounded-xl overflow-hidden z-10"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.96) 0%, oklch(0.95 0.09 64 / 0.94) 100%)",
              border: "2px solid oklch(0.78 0.34 54 / 0.55)",
              boxShadow:
                "0 10px 48px rgba(0,0,0,0.18), inset 0 1px 0 oklch(1 0 0 / 0.5)",
            }}
            data-ocid={`donate.slide.${current + 1}`}
          >
            <div className="w-full h-full overflow-y-auto px-5 py-4 flex flex-col items-center gap-3">
              {slides[current]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow nav — prev */}
        {current > 0 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            onClick={prev}
            className="absolute left-6 top-1/2 z-20 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.95 0.09 68), oklch(0.92 0.13 62))",
              border: "2px solid oklch(0.78 0.34 54 / 0.55)",
              boxShadow: "0 4px 16px oklch(0.78 0.34 54 / 0.30)",
              color: "oklch(0.38 0.20 48)",
            }}
            aria-label="Previous slide"
            data-ocid="donate.prev_button"
          >
            ←
          </motion.button>
        )}

        {/* Arrow nav — next */}
        {current < SLIDE_COUNT - 1 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            onClick={next}
            className="absolute right-6 top-1/2 z-20 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.95 0.09 68), oklch(0.92 0.13 62))",
              border: "2px solid oklch(0.78 0.34 54 / 0.55)",
              boxShadow: "0 4px 16px oklch(0.78 0.34 54 / 0.30)",
              color: "oklch(0.38 0.20 48)",
            }}
            aria-label="Next slide"
            data-ocid="donate.next_button"
          >
            →
          </motion.button>
        )}
      </div>

      {/* Dot navigation */}
      <div
        className="payment-slides-nav pb-4 relative z-10"
        data-ocid="donate.dots"
      >
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: slide dots — positional
            key={i}
            type="button"
            className={`payment-dot${current === i ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${SLIDE_TITLES[i]}`}
            aria-current={current === i ? "true" : undefined}
            data-ocid={`donate.dot.${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
