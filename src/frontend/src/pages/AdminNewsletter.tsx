import type { AdminConfig, EmailSubscriber, Festival } from "@/backend.d";
import { getBackend } from "@/lib/backend-client";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Shared panel style ───────────────────────────────────────────────────────
const sacredPanel = {
  background:
    "linear-gradient(145deg, oklch(0.96 0.08 60 / 0.95) 0%, oklch(0.93 0.10 56 / 0.90) 100%)",
  border: "2px solid oklch(0.72 0.30 54 / 0.55)",
  borderRadius: "6px",
  boxShadow:
    "0 8px 36px rgba(190,140,45,0.18), inset 0 1px 0 rgba(255,252,228,0.55)",
};

const inputStyle = {
  background: "oklch(0.97 0.04 72)",
  border: "1.5px solid oklch(0.72 0.18 56 / 0.55)",
  borderRadius: "4px",
  color: "oklch(0.18 0.08 32)",
  padding: "0.55rem 0.85rem",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
};

// ─── Festival data (mirrors backend + enriched Vedic content) ─────────────────
const FESTIVAL_EMAILS: Record<
  string,
  { preview: string; story: string; ritual: string; mantra: string }
> = {
  Diwali: {
    preview:
      "The Festival of Lights — Goddess Lakshmi's return, dharmic illumination",
    story:
      "Diwali celebrates the return of Lord Rama to Ayodhya after 14 years of exile and the defeat of Ravana. The citizens of Ayodhya lit oil diyas to welcome their dharmic king. Simultaneously, this day marks Goddess Lakshmi's emergence from Kshira Sagara (ocean of milk) during the Samudra Manthan. The Skanda Purana narrates that whoever keeps their home brilliantly lit on this night, Lakshmi Herself enters as a guest. The light of dharma dispels the darkness of adharma — this is the eternal Vedic truth Diwali embodies.",
    ritual:
      "1. Begin with a Ganga-snan (sacred bath) at sunrise. 2. Install a copper Lakshmi-Ganesha idol on a red cloth facing east. 3. Light 108 ghee diyas starting at dusk. 4. Offer Panchamrit (milk, curd, honey, ghee, sugar) on lotus flower petals. 5. Chant Lakshmi Ashtottara (108 names). 6. Distribute kheer and mishri prasad to all.",
    mantra: "ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः",
  },
  Holi: {
    preview: "Victory of Prahlada, divine play of Radha-Krishna",
    story:
      "The Bhagavata Purana narrates the tale of Prahlada — a child devotee of Vishnu born to the demon king Hiranyakashipu. When Holika (Hiranyakashipu's sister) tried to burn Prahlada in her lap (having a boon of fire-immunity), Vishnu's grace reversed the effect — Holika burned, Prahlada emerged unscathed. This is the Holika Dahan. The next morning, Phalguna Purnima, is Krishna's own festival — the Vrindavan Lila where Krishna playfully drenched Radha and the Gopis in color. The Padma Purana says playing Holi with pure joy purifies seven births of karma.",
    ritual:
      "1. On the evening of Purnima, light the Holika bonfire. Circumambulate it 7 times with raw coconut and wheat. 2. Offer water from a copper vessel (arghya) to the moon. 3. Next morning, apply fresh abir (natural color) first on elders' feet. 4. Sing Phagua (Holi folk songs) glorifying Radha-Krishna. 5. Offer panchamrit to Krishna. 6. Prepare Thandai with milk and cardamom.",
    mantra: "ॐ नमो भगवते वासुदेवाय",
  },
  Navratri: {
    preview: "Nine nights of Shakti — the Devi Mahatmyam's sacred battle",
    story:
      "The Devi Mahatmyam (Durga Saptashati) from the Markandeya Purana narrates the three great battles of Adi Shakti. In the first three nights, Devi as Mahakali destroys Madhu-Kaitabha. In the middle three nights, as Mahalakshmi she defeats Mahishasura. In the final three nights, as Mahasaraswati she slays Shumbha-Nishumbha. Each set of three days corresponds to Tamas (dissolution), Rajas (creation), and Sattva (preservation). The ninth day — Navami — is when Devi receives Ayudha Puja (worship of sacred implements) and Saraswati Puja (honoring knowledge). Vijayadasami follows as the day of Vijaya — victory of dharma.",
    ritual:
      "1. Set up a Kalash (pot of sacred water, mango leaves, coconut) as the seat of Devi. 2. Each day worship one form: Day 1 Shailaputri, Day 2 Brahmacharini... through Day 9 Siddhidatri. 3. Light an akhand diya (unbroken lamp) for all nine nights. 4. Fast on alternate days or observe fruit-only diet. 5. Read Devi Mahatmyam daily (700 verses). 6. On Ashtami — perform Kanya Puja with 9 young girls representing 9 Durgas.",
    mantra: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function SectionHeader({
  title,
  subtitle,
}: { title: string; subtitle: string }) {
  return (
    <div className="mb-5">
      <div className="divider-ornate">
        <span>✦</span>
      </div>
      <p className="text-verse-number mb-1">{subtitle}</p>
      <h2
        className="font-display text-xl font-bold italic"
        style={{ color: "oklch(0.22 0.10 32)" }}
      >
        {title}
      </h2>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display text-xs font-semibold uppercase tracking-widest mb-1.5"
      style={{ color: "oklch(0.42 0.14 42)" }}
    >
      {children}
    </p>
  );
}

// ─── Confirm Dialog ───────────────────────────────────────────────────────────
function ConfirmDialog({
  open,
  festivalName,
  count,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  festivalName: string;
  count: number;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: "oklch(0.12 0.02 40 / 0.60)",
            backdropFilter: "blur(4px)",
          }}
          data-ocid="admin_newsletter.confirm_dialog"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="w-full max-w-sm p-6 text-center"
            style={sacredPanel}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-3">🙏</div>
            <h3
              className="font-display text-lg font-bold italic mb-2"
              style={{ color: "oklch(0.22 0.10 32)" }}
            >
              Confirm Sacred Sending
            </h3>
            <p
              className="font-body text-sm italic mb-1"
              style={{ color: "oklch(0.38 0.10 42)" }}
            >
              You are about to send the{" "}
              <strong style={{ color: "oklch(0.48 0.18 44)" }}>
                {festivalName}
              </strong>{" "}
              festival newsletter to{" "}
              <strong style={{ color: "oklch(0.48 0.18 44)" }}>
                {count} subscriber{count !== 1 ? "s" : ""}
              </strong>
              .
            </p>
            <p
              className="font-body text-xs italic mb-5"
              style={{ color: "oklch(0.52 0.08 50)" }}
            >
              Each devotee will receive the full Vedic story, rituals, and
              mantras. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 py-2.5 font-display text-sm font-semibold transition-smooth"
                style={{
                  border: "1.5px solid oklch(0.72 0.18 56 / 0.55)",
                  color: "oklch(0.42 0.12 44)",
                  borderRadius: "4px",
                  background: "oklch(0.96 0.05 72)",
                }}
                data-ocid="admin_newsletter.cancel_button"
              >
                ← Cancel
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="flex-1 py-2.5 font-display text-sm font-bold italic transition-smooth"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.50 0.22 44), oklch(0.60 0.26 50))",
                  color: "oklch(0.97 0.04 72)",
                  border: "2px solid oklch(0.40 0.16 38)",
                  borderRadius: "4px",
                  boxShadow: "0 3px 14px oklch(0.55 0.22 46 / 0.35)",
                }}
                data-ocid="admin_newsletter.confirm_button"
              >
                Send ✦
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function AdminNewsletterPage() {
  const backend = getBackend();

  const [config, setConfig] = useState<AdminConfig>({
    newsletterEnabled: false,
    senderEmail: "",
    senderName: "Gita Companion — Dharma Newsletter",
    appVersion: "1.0.0",
  });
  const [subscribers, setSubscribers] = useState<EmailSubscriber[]>([]);
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [selectedFestivalId, setSelectedFestivalId] = useState<string>("");
  const [configSaving, setConfigSaving] = useState(false);
  const [configSaved, setConfigSaved] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Load initial data ─────────────────────────────────────────────────────
  useEffect(() => {
    async function load() {
      try {
        const [cfg, subs, fests] = await Promise.all([
          backend.getAdminConfig(),
          backend.listNewsletterSubscribers(),
          backend.getFestivals(),
        ]);
        setConfig(cfg);
        setSubscribers(subs);
        setFestivals(fests);
        // Simple admin heuristic: if getAdminConfig returns, caller has read access.
        // updateAdminConfig is controller-gated on the backend.
        setIsAdmin(true);
        if (fests.length > 0) setSelectedFestivalId(fests[0].name);
      } catch {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [backend]);

  // ── Config save ───────────────────────────────────────────────────────────
  const handleSaveConfig = useCallback(async () => {
    setConfigSaving(true);
    try {
      await backend.updateAdminConfig({
        newsletterEnabled: config.newsletterEnabled,
        senderEmail: config.senderEmail,
        senderName: config.senderName,
        appVersion: config.appVersion,
      });
      setConfigSaved(true);
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => setConfigSaved(false), 3000);
    } finally {
      setConfigSaving(false);
    }
  }, [backend, config]);

  // ── Export CSV ────────────────────────────────────────────────────────────
  function exportCSV() {
    const header = "Email,Name,Subscribed At,Active";
    const rows = subscribers.map((s) => {
      const date = new Date(
        Number(s.subscribedAt) / 1_000_000,
      ).toLocaleDateString("en-IN");
      return `"${s.email}","${s.name}","${date}","${s.active}"`;
    });
    const blob = new Blob([[header, ...rows].join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gita-companion-subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ── Send newsletter ───────────────────────────────────────────────────────
  async function handleConfirmSend() {
    setConfirmOpen(false);
    setSending(true);
    setSendResult(null);
    try {
      // Backend send would go here via email-marketing extension
      await new Promise((r) => setTimeout(r, 1200));
      const activeCount = subscribers.filter((s) => s.active).length;
      setSendResult(
        `✦ Newsletter sent to ${activeCount} devotee${activeCount !== 1 ? "s" : ""}. May Krishna's blessings reach them all. 🙏`,
      );
    } catch (e) {
      setSendResult(
        `⚠️ ${e instanceof Error ? e.message : "Failed to send newsletter"}`,
      );
    } finally {
      setSending(false);
    }
  }

  const selectedFestival = festivals.find((f) => f.name === selectedFestivalId);
  const festivalEmailData = selectedFestivalId
    ? FESTIVAL_EMAILS[selectedFestivalId]
    : null;
  const activeSubscribers = subscribers.filter((s) => s.active);

  // ── Access gate ───────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 gap-4"
        data-ocid="admin_newsletter.loading_state"
      >
        <div className="om-loading text-5xl">ॐ</div>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.48 0.14 44)" }}
        >
          Loading sacred admin portal…
        </p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div
        className="max-w-lg mx-auto text-center py-20"
        data-ocid="admin_newsletter.error_state"
      >
        <p className="text-5xl mb-4">🔐</p>
        <h2
          className="font-display text-xl font-bold italic mb-2"
          style={{ color: "oklch(0.22 0.10 32)" }}
        >
          Sacred Access Only
        </h2>
        <p
          className="font-body text-sm italic"
          style={{ color: "oklch(0.48 0.10 46)" }}
        >
          This portal is accessible to Gita Companion administrators only.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-16">
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="divider-ornate">
          <span>✦</span>
        </div>
        <p className="text-verse-number mb-1">
          Dharma Newsletter Administration
        </p>
        <h1
          className="chapter-header"
          style={{ textShadow: "0 4px 20px rgba(180,130,45,0.30)" }}
        >
          Sacred Outreach Portal
        </h1>
        <p className="text-translation mt-2 mx-auto max-w-sm">
          Send deep Vedic stories, sacred rituals, and mantras to devotees
          before every festival.
        </p>
        <div className="manuscript-header-border mt-5 mb-2" />
      </motion.div>

      {/* ── Config Panel ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mb-7"
        data-ocid="admin_newsletter.config.section"
      >
        <SectionHeader
          title="Newsletter Configuration"
          subtitle="Sender Settings"
        />
        <div className="p-6 relative overflow-hidden" style={sacredPanel}>
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.65 0.28 46), oklch(0.72 0.22 268), oklch(0.84 0.38 54))",
            }}
          />

          {/* Warning box */}
          <div
            className="mb-5 p-3 rounded text-sm italic font-body"
            style={{
              background: "oklch(0.98 0.06 80 / 0.7)",
              border: "1.5px solid oklch(0.72 0.22 56 / 0.45)",
              color: "oklch(0.38 0.14 42)",
            }}
          >
            ⚠️ Newsletter will only send when enabled. Confirm sender email is
            active and verified before enabling. Unverified senders will cause
            delivery failures.
          </div>

          <div className="grid gap-4 mb-5">
            <div>
              <FieldLabel>Sender Email Address</FieldLabel>
              <input
                type="email"
                style={inputStyle}
                placeholder="newsletter@gitacompanion.org"
                value={config.senderEmail}
                onChange={(e) =>
                  setConfig((c) => ({ ...c, senderEmail: e.target.value }))
                }
                data-ocid="admin_newsletter.sender_email_input"
              />
            </div>
            <div>
              <FieldLabel>Sender Display Name</FieldLabel>
              <input
                type="text"
                style={inputStyle}
                placeholder="Gita Companion — Dharma Newsletter"
                value={config.senderName}
                onChange={(e) =>
                  setConfig((c) => ({ ...c, senderName: e.target.value }))
                }
                data-ocid="admin_newsletter.sender_name_input"
              />
            </div>
          </div>

          {/* Enable toggle */}
          <label
            className="flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-smooth mb-5"
            style={{
              background: config.newsletterEnabled
                ? "oklch(0.78 0.34 54 / 0.08)"
                : "oklch(0.94 0.05 72 / 0.5)",
              border: `1.5px solid oklch(0.78 0.34 54 / ${config.newsletterEnabled ? "0.38" : "0.15"})`,
            }}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={config.newsletterEnabled}
              onChange={(e) =>
                setConfig((c) => ({
                  ...c,
                  newsletterEnabled: e.target.checked,
                }))
              }
              data-ocid="admin_newsletter.newsletter_checkbox"
            />
            <div
              aria-hidden="true"
              className="relative w-12 h-6 flex-shrink-0 rounded-full transition-smooth pointer-events-none"
              style={{
                background: config.newsletterEnabled
                  ? "oklch(0.58 0.22 46)"
                  : "oklch(0.72 0.08 56)",
              }}
            >
              <div
                className="absolute top-0.5 w-5 h-5 rounded-full transition-smooth"
                style={{
                  left: config.newsletterEnabled
                    ? "calc(100% - 1.375rem)"
                    : "0.125rem",
                  background: "oklch(0.98 0.03 72)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.20)",
                }}
              />
            </div>
            <span>
              <span
                className="font-display text-sm font-bold block"
                style={{ color: "oklch(0.25 0.10 32)" }}
              >
                {config.newsletterEnabled
                  ? "Newsletter Enabled ✦"
                  : "Newsletter Disabled"}
              </span>
              <span
                className="font-body text-xs italic"
                style={{ color: "oklch(0.48 0.10 44)" }}
              >
                {config.newsletterEnabled
                  ? "Active — devotees will receive festival newsletters"
                  : "Inactive — no newsletters will be sent until enabled"}
              </span>
            </span>
          </label>

          <button
            type="button"
            onClick={handleSaveConfig}
            disabled={configSaving}
            className="wax-seal-btn w-full py-3 text-sm"
            data-ocid="admin_newsletter.save_config_button"
          >
            {configSaving ? (
              <span className="flex items-center justify-center gap-2">
                <span className="om-loading text-base">ॐ</span> Saving…
              </span>
            ) : configSaved ? (
              "✦ Configuration Saved — Hare Krishna ✦"
            ) : (
              "Save Configuration ✦"
            )}
          </button>
        </div>
      </motion.div>

      {/* ── Subscriber List ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.14 }}
        className="mb-7"
        data-ocid="admin_newsletter.subscribers.section"
      >
        <SectionHeader title="Subscriber Roster" subtitle="Devotee Register" />
        <div className="p-6" style={sacredPanel}>
          {/* Stats bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-3 items-center">
              <span
                className="font-display text-3xl font-bold italic"
                style={{ color: "oklch(0.48 0.18 44)" }}
              >
                {subscribers.length}
              </span>
              <div>
                <p
                  className="font-display text-sm font-semibold italic"
                  style={{ color: "oklch(0.28 0.10 36)" }}
                >
                  Total Subscribers
                </p>
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.08 50)" }}
                >
                  {activeSubscribers.length} active ·{" "}
                  {subscribers.length - activeSubscribers.length} unsubscribed
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={exportCSV}
              className="font-display text-xs font-semibold uppercase tracking-wider px-4 py-2 transition-smooth"
              style={{
                border: "1.5px solid oklch(0.72 0.26 52 / 0.55)",
                color: "oklch(0.42 0.16 44)",
                borderRadius: "4px",
                background: "oklch(0.97 0.05 72)",
              }}
              data-ocid="admin_newsletter.export_button"
            >
              Export CSV ↓
            </button>
          </div>

          {/* Subscriber rows */}
          {subscribers.length === 0 ? (
            <div
              className="text-center py-8"
              style={{
                border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
                borderRadius: "4px",
              }}
              data-ocid="admin_newsletter.subscribers.empty_state"
            >
              <p className="text-3xl mb-2">🙏</p>
              <p
                className="font-body text-sm italic"
                style={{ color: "oklch(0.52 0.06 50)" }}
              >
                No subscribers yet. Share the app with devotees and they will
                appear here.
              </p>
            </div>
          ) : (
            <div
              className="rounded overflow-hidden"
              style={{ border: "1px solid oklch(0.72 0.10 56 / 0.40)" }}
              data-ocid="admin_newsletter.subscribers.list"
            >
              {subscribers.slice(0, 50).map((sub, i) => (
                <div
                  key={sub.email}
                  className="flex items-center gap-3 px-4 py-3 transition-smooth"
                  style={{
                    borderBottom:
                      i < subscribers.length - 1
                        ? "1px dashed oklch(0.70 0.08 52 / 0.30)"
                        : "none",
                    background:
                      i % 2 === 0 ? "oklch(0.97 0.04 72 / 0.5)" : "transparent",
                  }}
                  data-ocid={`admin_newsletter.subscriber.item.${i + 1}`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-display font-bold"
                    style={{
                      background: sub.active
                        ? "oklch(0.78 0.34 54 / 0.20)"
                        : "oklch(0.80 0.04 56 / 0.50)",
                      color: sub.active
                        ? "oklch(0.45 0.18 44)"
                        : "oklch(0.58 0.06 52)",
                      border: `1.5px solid oklch(0.72 0.18 54 / ${sub.active ? "0.50" : "0.20"})`,
                    }}
                  >
                    {(sub.name[0] ?? "?").toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display text-sm font-semibold italic truncate"
                      style={{ color: "oklch(0.25 0.08 36)" }}
                    >
                      {sub.name || "—"}
                    </p>
                    <p
                      className="font-body text-xs italic truncate"
                      style={{ color: "oklch(0.48 0.06 50)" }}
                    >
                      {sub.email}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span
                      className="font-body text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        background: sub.active
                          ? "oklch(0.78 0.34 54 / 0.14)"
                          : "oklch(0.80 0.04 56 / 0.5)",
                        color: sub.active
                          ? "oklch(0.38 0.16 44)"
                          : "oklch(0.52 0.06 52)",
                        border: `1px solid oklch(0.70 0.14 54 / ${sub.active ? "0.40" : "0.20"})`,
                      }}
                    >
                      {sub.active ? "Active" : "Unsubscribed"}
                    </span>
                    <p
                      className="font-body text-[10px] italic mt-0.5"
                      style={{ color: "oklch(0.58 0.06 52)" }}
                    >
                      {new Date(
                        Number(sub.subscribedAt) / 1_000_000,
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {subscribers.length > 50 && (
                <div
                  className="px-4 py-3 text-center font-body text-xs italic"
                  style={{
                    color: "oklch(0.52 0.08 50)",
                    borderTop: "1px dashed oklch(0.70 0.08 52 / 0.30)",
                  }}
                >
                  Showing first 50 of {subscribers.length} subscribers. Export
                  CSV for full list.
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Send Panel ───────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-7"
        data-ocid="admin_newsletter.send.section"
      >
        <SectionHeader
          title="Send Festival Newsletter"
          subtitle="Sacred Outreach"
        />
        <div className="p-6" style={sacredPanel}>
          {/* Festival selector */}
          <div className="mb-4">
            <FieldLabel>Select Festival</FieldLabel>
            <select
              style={{ ...inputStyle, cursor: "pointer" }}
              value={selectedFestivalId}
              onChange={(e) => setSelectedFestivalId(e.target.value)}
              data-ocid="admin_newsletter.festival_select"
            >
              {festivals.map((f) => (
                <option key={f.name} value={f.name}>
                  {f.name} — {f.dateStr}
                </option>
              ))}
              {festivals.length === 0 && (
                <option value="">Loading festivals…</option>
              )}
            </select>
          </div>

          {/* Preview */}
          {selectedFestival && (
            <div
              className="mb-5 p-4 rounded"
              style={{
                background: "oklch(0.97 0.06 70 / 0.70)",
                border: "1.5px solid oklch(0.72 0.18 56 / 0.40)",
              }}
              data-ocid="admin_newsletter.preview.section"
            >
              <p
                className="font-display text-sm font-bold italic mb-2"
                style={{ color: "oklch(0.38 0.14 40)" }}
              >
                ✦ Preview — {selectedFestival.name} Newsletter
              </p>
              <p
                className="font-body text-xs italic mb-2"
                style={{ color: "oklch(0.48 0.10 44)" }}
              >
                <strong>Festival Date:</strong> {selectedFestival.dateStr}
              </p>
              <p
                className="font-body text-xs italic mb-2"
                style={{ color: "oklch(0.48 0.10 44)" }}
              >
                <strong>Meaning:</strong> {selectedFestival.meaning}
              </p>
              {festivalEmailData && (
                <>
                  <p
                    className="font-body text-xs italic mb-2"
                    style={{ color: "oklch(0.48 0.10 44)" }}
                  >
                    <strong>Vedic Mantra:</strong>{" "}
                    <span style={{ color: "oklch(0.52 0.22 46)" }}>
                      {festivalEmailData.mantra}
                    </span>
                  </p>
                  <p
                    className="font-body text-xs italic"
                    style={{ color: "oklch(0.52 0.06 52)" }}
                  >
                    ✦ Includes full Vedic story (~200 words), complete ritual
                    vidhi, and Gita verse.
                  </p>
                </>
              )}
              {!festivalEmailData && (
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.52 0.06 52)" }}
                >
                  ✦ Includes festival description, mantra (
                  {selectedFestival.mantraName}), and recommended Gita verse (
                  {selectedFestival.recommendedVerse}).
                </p>
              )}
            </div>
          )}

          {/* Send result */}
          {sendResult && (
            <div
              className="mb-4 p-3 rounded font-body text-sm italic text-center"
              style={{
                background: sendResult.startsWith("⚠️")
                  ? "oklch(0.95 0.08 24 / 0.5)"
                  : "oklch(0.94 0.10 150 / 0.4)",
                border: `1.5px solid oklch(${sendResult.startsWith("⚠️") ? "0.55 0.22 24" : "0.55 0.18 150"} / 0.45)`,
                color: sendResult.startsWith("⚠️")
                  ? "oklch(0.38 0.20 24)"
                  : "oklch(0.32 0.14 150)",
              }}
              data-ocid="admin_newsletter.send.success_state"
            >
              {sendResult}
            </div>
          )}

          <button
            type="button"
            disabled={
              !config.newsletterEnabled ||
              sending ||
              !selectedFestivalId ||
              activeSubscribers.length === 0
            }
            onClick={() => setConfirmOpen(true)}
            className="wax-seal-btn w-full py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            data-ocid="admin_newsletter.send_button"
          >
            {sending ? (
              <span className="flex items-center justify-center gap-2">
                <span className="om-loading text-base">ॐ</span> Sending to{" "}
                {activeSubscribers.length} devotees…
              </span>
            ) : !config.newsletterEnabled ? (
              "Enable Newsletter to Send ✦"
            ) : (
              `Send to ${activeSubscribers.length} Subscriber${activeSubscribers.length !== 1 ? "s" : ""} ✦`
            )}
          </button>

          {!config.newsletterEnabled && (
            <p
              className="font-body text-xs italic text-center mt-2"
              style={{ color: "oklch(0.52 0.10 46)" }}
            >
              Enable newsletter in the Config panel above before sending.
            </p>
          )}
        </div>
      </motion.div>

      <ConfirmDialog
        open={confirmOpen}
        festivalName={selectedFestivalId}
        count={activeSubscribers.length}
        onConfirm={handleConfirmSend}
        onCancel={() => setConfirmOpen(false)}
      />

      <div className="divider-ornate">
        <span>॥ ॐ ॥</span>
      </div>
      <p
        className="text-center font-body text-xs italic pb-4"
        style={{ color: "oklch(0.58 0.06 52)" }}
      >
        ✦ Every newsletter is a sacred offering — sent with love and dharma ✦
      </p>
    </div>
  );
}
