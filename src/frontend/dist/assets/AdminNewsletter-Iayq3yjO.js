import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-DqMoqjqS.js";
import { g as getBackend } from "./backend-client-C24_cpfN.js";
const sacredPanel = {
  background: "linear-gradient(145deg, oklch(0.96 0.08 60 / 0.95) 0%, oklch(0.93 0.10 56 / 0.90) 100%)",
  border: "2px solid oklch(0.72 0.30 54 / 0.55)",
  borderRadius: "6px",
  boxShadow: "0 8px 36px rgba(190,140,45,0.18), inset 0 1px 0 rgba(255,252,228,0.55)"
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
  outline: "none"
};
const FESTIVAL_EMAILS = {
  Diwali: {
    preview: "The Festival of Lights — Goddess Lakshmi's return, dharmic illumination",
    story: "Diwali celebrates the return of Lord Rama to Ayodhya after 14 years of exile and the defeat of Ravana. The citizens of Ayodhya lit oil diyas to welcome their dharmic king. Simultaneously, this day marks Goddess Lakshmi's emergence from Kshira Sagara (ocean of milk) during the Samudra Manthan. The Skanda Purana narrates that whoever keeps their home brilliantly lit on this night, Lakshmi Herself enters as a guest. The light of dharma dispels the darkness of adharma — this is the eternal Vedic truth Diwali embodies.",
    ritual: "1. Begin with a Ganga-snan (sacred bath) at sunrise. 2. Install a copper Lakshmi-Ganesha idol on a red cloth facing east. 3. Light 108 ghee diyas starting at dusk. 4. Offer Panchamrit (milk, curd, honey, ghee, sugar) on lotus flower petals. 5. Chant Lakshmi Ashtottara (108 names). 6. Distribute kheer and mishri prasad to all.",
    mantra: "ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः"
  },
  Holi: {
    preview: "Victory of Prahlada, divine play of Radha-Krishna",
    story: "The Bhagavata Purana narrates the tale of Prahlada — a child devotee of Vishnu born to the demon king Hiranyakashipu. When Holika (Hiranyakashipu's sister) tried to burn Prahlada in her lap (having a boon of fire-immunity), Vishnu's grace reversed the effect — Holika burned, Prahlada emerged unscathed. This is the Holika Dahan. The next morning, Phalguna Purnima, is Krishna's own festival — the Vrindavan Lila where Krishna playfully drenched Radha and the Gopis in color. The Padma Purana says playing Holi with pure joy purifies seven births of karma.",
    ritual: "1. On the evening of Purnima, light the Holika bonfire. Circumambulate it 7 times with raw coconut and wheat. 2. Offer water from a copper vessel (arghya) to the moon. 3. Next morning, apply fresh abir (natural color) first on elders' feet. 4. Sing Phagua (Holi folk songs) glorifying Radha-Krishna. 5. Offer panchamrit to Krishna. 6. Prepare Thandai with milk and cardamom.",
    mantra: "ॐ नमो भगवते वासुदेवाय"
  },
  Navratri: {
    preview: "Nine nights of Shakti — the Devi Mahatmyam's sacred battle",
    story: "The Devi Mahatmyam (Durga Saptashati) from the Markandeya Purana narrates the three great battles of Adi Shakti. In the first three nights, Devi as Mahakali destroys Madhu-Kaitabha. In the middle three nights, as Mahalakshmi she defeats Mahishasura. In the final three nights, as Mahasaraswati she slays Shumbha-Nishumbha. Each set of three days corresponds to Tamas (dissolution), Rajas (creation), and Sattva (preservation). The ninth day — Navami — is when Devi receives Ayudha Puja (worship of sacred implements) and Saraswati Puja (honoring knowledge). Vijayadasami follows as the day of Vijaya — victory of dharma.",
    ritual: "1. Set up a Kalash (pot of sacred water, mango leaves, coconut) as the seat of Devi. 2. Each day worship one form: Day 1 Shailaputri, Day 2 Brahmacharini... through Day 9 Siddhidatri. 3. Light an akhand diya (unbroken lamp) for all nine nights. 4. Fast on alternate days or observe fruit-only diet. 5. Read Devi Mahatmyam daily (700 verses). 6. On Ashtami — perform Kanya Puja with 9 young girls representing 9 Durgas.",
    mantra: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे"
  }
};
function SectionHeader({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "font-display text-xl font-bold italic",
        style: { color: "oklch(0.22 0.10 32)" },
        children: title
      }
    )
  ] });
}
function FieldLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "font-display text-xs font-semibold uppercase tracking-widest mb-1.5",
      style: { color: "oklch(0.42 0.14 42)" },
      children
    }
  );
}
function ConfirmDialog({
  open,
  festivalName,
  count,
  onConfirm,
  onCancel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: {
        background: "oklch(0.12 0.02 40 / 0.60)",
        backdropFilter: "blur(4px)"
      },
      "data-ocid": "admin_newsletter.confirm_dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.92, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.92, opacity: 0 },
          transition: { type: "spring", damping: 22, stiffness: 300 },
          className: "w-full max-w-sm p-6 text-center",
          style: sacredPanel,
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "🙏" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display text-lg font-bold italic mb-2",
                style: { color: "oklch(0.22 0.10 32)" },
                children: "Confirm Sacred Sending"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-sm italic mb-1",
                style: { color: "oklch(0.38 0.10 42)" },
                children: [
                  "You are about to send the",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "oklch(0.48 0.18 44)" }, children: festivalName }),
                  " ",
                  "festival newsletter to",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "oklch(0.48 0.18 44)" }, children: [
                    count,
                    " subscriber",
                    count !== 1 ? "s" : ""
                  ] }),
                  "."
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic mb-5",
                style: { color: "oklch(0.52 0.08 50)" },
                children: "Each devotee will receive the full Vedic story, rituals, and mantras. This action cannot be undone."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onCancel,
                  className: "flex-1 py-2.5 font-display text-sm font-semibold transition-smooth",
                  style: {
                    border: "1.5px solid oklch(0.72 0.18 56 / 0.55)",
                    color: "oklch(0.42 0.12 44)",
                    borderRadius: "4px",
                    background: "oklch(0.96 0.05 72)"
                  },
                  "data-ocid": "admin_newsletter.cancel_button",
                  children: "← Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onConfirm,
                  className: "flex-1 py-2.5 font-display text-sm font-bold italic transition-smooth",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.50 0.22 44), oklch(0.60 0.26 50))",
                    color: "oklch(0.97 0.04 72)",
                    border: "2px solid oklch(0.40 0.16 38)",
                    borderRadius: "4px",
                    boxShadow: "0 3px 14px oklch(0.55 0.22 46 / 0.35)"
                  },
                  "data-ocid": "admin_newsletter.confirm_button",
                  children: "Send ✦"
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}
function AdminNewsletterPage() {
  const backend = getBackend();
  const [config, setConfig] = reactExports.useState({
    newsletterEnabled: false,
    senderEmail: "",
    senderName: "Gita Companion — Dharma Newsletter",
    appVersion: "1.0.0"
  });
  const [subscribers, setSubscribers] = reactExports.useState([]);
  const [festivals, setFestivals] = reactExports.useState([]);
  const [selectedFestivalId, setSelectedFestivalId] = reactExports.useState("");
  const [configSaving, setConfigSaving] = reactExports.useState(false);
  const [configSaved, setConfigSaved] = reactExports.useState(false);
  const [sending, setSending] = reactExports.useState(false);
  const [sendResult, setSendResult] = reactExports.useState(null);
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const saveTimer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    async function load() {
      try {
        const [cfg, subs, fests] = await Promise.all([
          backend.getAdminConfig(),
          backend.listNewsletterSubscribers(),
          backend.getFestivals()
        ]);
        setConfig(cfg);
        setSubscribers(subs);
        setFestivals(fests);
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
  const handleSaveConfig = reactExports.useCallback(async () => {
    setConfigSaving(true);
    try {
      await backend.updateAdminConfig({
        newsletterEnabled: config.newsletterEnabled,
        senderEmail: config.senderEmail,
        senderName: config.senderName,
        appVersion: config.appVersion
      });
      setConfigSaved(true);
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => setConfigSaved(false), 3e3);
    } finally {
      setConfigSaving(false);
    }
  }, [backend, config]);
  function exportCSV() {
    const header = "Email,Name,Subscribed At,Active";
    const rows = subscribers.map((s) => {
      const date = new Date(
        Number(s.subscribedAt) / 1e6
      ).toLocaleDateString("en-IN");
      return `"${s.email}","${s.name}","${date}","${s.active}"`;
    });
    const blob = new Blob([[header, ...rows].join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gita-companion-subscribers-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  async function handleConfirmSend() {
    setConfirmOpen(false);
    setSending(true);
    setSendResult(null);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      const activeCount = subscribers.filter((s) => s.active).length;
      setSendResult(
        `✦ Newsletter sent to ${activeCount} devotee${activeCount !== 1 ? "s" : ""}. May Krishna's blessings reach them all. 🙏`
      );
    } catch (e) {
      setSendResult(
        `⚠️ ${e instanceof Error ? e.message : "Failed to send newsletter"}`
      );
    } finally {
      setSending(false);
    }
  }
  const selectedFestival = festivals.find((f) => f.name === selectedFestivalId);
  const festivalEmailData = selectedFestivalId ? FESTIVAL_EMAILS[selectedFestivalId] : null;
  const activeSubscribers = subscribers.filter((s) => s.active);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 gap-4",
        "data-ocid": "admin_newsletter.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "om-loading text-5xl", children: "ॐ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic",
              style: { color: "oklch(0.48 0.14 44)" },
              children: "Loading sacred admin portal…"
            }
          )
        ]
      }
    );
  }
  if (!isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-lg mx-auto text-center py-20",
        "data-ocid": "admin_newsletter.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-4", children: "🔐" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-xl font-bold italic mb-2",
              style: { color: "oklch(0.22 0.10 32)" },
              children: "Sacred Access Only"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic",
              style: { color: "oklch(0.48 0.10 46)" },
              children: "This portal is accessible to Gita Companion administrators only."
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "Dharma Newsletter Administration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "chapter-header",
              style: { textShadow: "0 4px 20px rgba(180,130,45,0.30)" },
              children: "Sacred Outreach Portal"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-translation mt-2 mx-auto max-w-sm", children: "Send deep Vedic stories, sacred rituals, and mantras to devotees before every festival." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mt-5 mb-2" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.08 },
        className: "mb-7",
        "data-ocid": "admin_newsletter.config.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              title: "Newsletter Configuration",
              subtitle: "Sender Settings"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 relative overflow-hidden", style: sacredPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-[5px]",
                style: {
                  background: "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.65 0.28 46), oklch(0.72 0.22 268), oklch(0.84 0.38 54))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mb-5 p-3 rounded text-sm italic font-body",
                style: {
                  background: "oklch(0.98 0.06 80 / 0.7)",
                  border: "1.5px solid oklch(0.72 0.22 56 / 0.45)",
                  color: "oklch(0.38 0.14 42)"
                },
                children: "⚠️ Newsletter will only send when enabled. Confirm sender email is active and verified before enabling. Unverified senders will cause delivery failures."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Sender Email Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    style: inputStyle,
                    placeholder: "newsletter@gitacompanion.org",
                    value: config.senderEmail,
                    onChange: (e) => setConfig((c) => ({ ...c, senderEmail: e.target.value })),
                    "data-ocid": "admin_newsletter.sender_email_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Sender Display Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    style: inputStyle,
                    placeholder: "Gita Companion — Dharma Newsletter",
                    value: config.senderName,
                    onChange: (e) => setConfig((c) => ({ ...c, senderName: e.target.value })),
                    "data-ocid": "admin_newsletter.sender_name_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-smooth mb-5",
                style: {
                  background: config.newsletterEnabled ? "oklch(0.78 0.34 54 / 0.08)" : "oklch(0.94 0.05 72 / 0.5)",
                  border: `1.5px solid oklch(0.78 0.34 54 / ${config.newsletterEnabled ? "0.38" : "0.15"})`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      className: "sr-only",
                      checked: config.newsletterEnabled,
                      onChange: (e) => setConfig((c) => ({
                        ...c,
                        newsletterEnabled: e.target.checked
                      })),
                      "data-ocid": "admin_newsletter.newsletter_checkbox"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "relative w-12 h-6 flex-shrink-0 rounded-full transition-smooth pointer-events-none",
                      style: {
                        background: config.newsletterEnabled ? "oklch(0.58 0.22 46)" : "oklch(0.72 0.08 56)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute top-0.5 w-5 h-5 rounded-full transition-smooth",
                          style: {
                            left: config.newsletterEnabled ? "calc(100% - 1.375rem)" : "0.125rem",
                            background: "oklch(0.98 0.03 72)",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.20)"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display text-sm font-bold block",
                        style: { color: "oklch(0.25 0.10 32)" },
                        children: config.newsletterEnabled ? "Newsletter Enabled ✦" : "Newsletter Disabled"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.48 0.10 44)" },
                        children: config.newsletterEnabled ? "Active — devotees will receive festival newsletters" : "Inactive — no newsletters will be sent until enabled"
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleSaveConfig,
                disabled: configSaving,
                className: "wax-seal-btn w-full py-3 text-sm",
                "data-ocid": "admin_newsletter.save_config_button",
                children: configSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "om-loading text-base", children: "ॐ" }),
                  " Saving…"
                ] }) : configSaved ? "✦ Configuration Saved — Hare Krishna ✦" : "Save Configuration ✦"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.14 },
        className: "mb-7",
        "data-ocid": "admin_newsletter.subscribers.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Subscriber Roster", subtitle: "Devotee Register" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", style: sacredPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-display text-3xl font-bold italic",
                    style: { color: "oklch(0.48 0.18 44)" },
                    children: subscribers.length
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-sm font-semibold italic",
                      style: { color: "oklch(0.28 0.10 36)" },
                      children: "Total Subscribers"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs italic",
                      style: { color: "oklch(0.52 0.08 50)" },
                      children: [
                        activeSubscribers.length,
                        " active ·",
                        " ",
                        subscribers.length - activeSubscribers.length,
                        " unsubscribed"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: exportCSV,
                  className: "font-display text-xs font-semibold uppercase tracking-wider px-4 py-2 transition-smooth",
                  style: {
                    border: "1.5px solid oklch(0.72 0.26 52 / 0.55)",
                    color: "oklch(0.42 0.16 44)",
                    borderRadius: "4px",
                    background: "oklch(0.97 0.05 72)"
                  },
                  "data-ocid": "admin_newsletter.export_button",
                  children: "Export CSV ↓"
                }
              )
            ] }),
            subscribers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8",
                style: {
                  border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
                  borderRadius: "4px"
                },
                "data-ocid": "admin_newsletter.subscribers.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-2", children: "🙏" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm italic",
                      style: { color: "oklch(0.52 0.06 50)" },
                      children: "No subscribers yet. Share the app with devotees and they will appear here."
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded overflow-hidden",
                style: { border: "1px solid oklch(0.72 0.10 56 / 0.40)" },
                "data-ocid": "admin_newsletter.subscribers.list",
                children: [
                  subscribers.slice(0, 50).map((sub, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3 px-4 py-3 transition-smooth",
                      style: {
                        borderBottom: i < subscribers.length - 1 ? "1px dashed oklch(0.70 0.08 52 / 0.30)" : "none",
                        background: i % 2 === 0 ? "oklch(0.97 0.04 72 / 0.5)" : "transparent"
                      },
                      "data-ocid": `admin_newsletter.subscriber.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-display font-bold",
                            style: {
                              background: sub.active ? "oklch(0.78 0.34 54 / 0.20)" : "oklch(0.80 0.04 56 / 0.50)",
                              color: sub.active ? "oklch(0.45 0.18 44)" : "oklch(0.58 0.06 52)",
                              border: `1.5px solid oklch(0.72 0.18 54 / ${sub.active ? "0.50" : "0.20"})`
                            },
                            children: (sub.name[0] ?? "?").toUpperCase()
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display text-sm font-semibold italic truncate",
                              style: { color: "oklch(0.25 0.08 36)" },
                              children: sub.name || "—"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-xs italic truncate",
                              style: { color: "oklch(0.48 0.06 50)" },
                              children: sub.email
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-body text-[10px] px-2 py-0.5 rounded-full",
                              style: {
                                background: sub.active ? "oklch(0.78 0.34 54 / 0.14)" : "oklch(0.80 0.04 56 / 0.5)",
                                color: sub.active ? "oklch(0.38 0.16 44)" : "oklch(0.52 0.06 52)",
                                border: `1px solid oklch(0.70 0.14 54 / ${sub.active ? "0.40" : "0.20"})`
                              },
                              children: sub.active ? "Active" : "Unsubscribed"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-[10px] italic mt-0.5",
                              style: { color: "oklch(0.58 0.06 52)" },
                              children: new Date(
                                Number(sub.subscribedAt) / 1e6
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                              })
                            }
                          )
                        ] })
                      ]
                    },
                    sub.email
                  )),
                  subscribers.length > 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-4 py-3 text-center font-body text-xs italic",
                      style: {
                        color: "oklch(0.52 0.08 50)",
                        borderTop: "1px dashed oklch(0.70 0.08 52 / 0.30)"
                      },
                      children: [
                        "Showing first 50 of ",
                        subscribers.length,
                        " subscribers. Export CSV for full list."
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "mb-7",
        "data-ocid": "admin_newsletter.send.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              title: "Send Festival Newsletter",
              subtitle: "Sacred Outreach"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", style: sacredPanel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldLabel, { children: "Select Festival" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  style: { ...inputStyle, cursor: "pointer" },
                  value: selectedFestivalId,
                  onChange: (e) => setSelectedFestivalId(e.target.value),
                  "data-ocid": "admin_newsletter.festival_select",
                  children: [
                    festivals.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: f.name, children: [
                      f.name,
                      " — ",
                      f.dateStr
                    ] }, f.name)),
                    festivals.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Loading festivals…" })
                  ]
                }
              )
            ] }),
            selectedFestival && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mb-5 p-4 rounded",
                style: {
                  background: "oklch(0.97 0.06 70 / 0.70)",
                  border: "1.5px solid oklch(0.72 0.18 56 / 0.40)"
                },
                "data-ocid": "admin_newsletter.preview.section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display text-sm font-bold italic mb-2",
                      style: { color: "oklch(0.38 0.14 40)" },
                      children: [
                        "✦ Preview — ",
                        selectedFestival.name,
                        " Newsletter"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs italic mb-2",
                      style: { color: "oklch(0.48 0.10 44)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Festival Date:" }),
                        " ",
                        selectedFestival.dateStr
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs italic mb-2",
                      style: { color: "oklch(0.48 0.10 44)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Meaning:" }),
                        " ",
                        selectedFestival.meaning
                      ]
                    }
                  ),
                  festivalEmailData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-xs italic mb-2",
                        style: { color: "oklch(0.48 0.10 44)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vedic Mantra:" }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.52 0.22 46)" }, children: festivalEmailData.mantra })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs italic",
                        style: { color: "oklch(0.52 0.06 52)" },
                        children: "✦ Includes full Vedic story (~200 words), complete ritual vidhi, and Gita verse."
                      }
                    )
                  ] }),
                  !festivalEmailData && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs italic",
                      style: { color: "oklch(0.52 0.06 52)" },
                      children: [
                        "✦ Includes festival description, mantra (",
                        selectedFestival.mantraName,
                        "), and recommended Gita verse (",
                        selectedFestival.recommendedVerse,
                        ")."
                      ]
                    }
                  )
                ]
              }
            ),
            sendResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mb-4 p-3 rounded font-body text-sm italic text-center",
                style: {
                  background: sendResult.startsWith("⚠️") ? "oklch(0.95 0.08 24 / 0.5)" : "oklch(0.94 0.10 150 / 0.4)",
                  border: `1.5px solid oklch(${sendResult.startsWith("⚠️") ? "0.55 0.22 24" : "0.55 0.18 150"} / 0.45)`,
                  color: sendResult.startsWith("⚠️") ? "oklch(0.38 0.20 24)" : "oklch(0.32 0.14 150)"
                },
                "data-ocid": "admin_newsletter.send.success_state",
                children: sendResult
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                disabled: !config.newsletterEnabled || sending || !selectedFestivalId || activeSubscribers.length === 0,
                onClick: () => setConfirmOpen(true),
                className: "wax-seal-btn w-full py-3 text-sm disabled:opacity-40 disabled:cursor-not-allowed",
                "data-ocid": "admin_newsletter.send_button",
                children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "om-loading text-base", children: "ॐ" }),
                  " Sending to",
                  " ",
                  activeSubscribers.length,
                  " devotees…"
                ] }) : !config.newsletterEnabled ? "Enable Newsletter to Send ✦" : `Send to ${activeSubscribers.length} Subscriber${activeSubscribers.length !== 1 ? "s" : ""} ✦`
              }
            ),
            !config.newsletterEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic text-center mt-2",
                style: { color: "oklch(0.52 0.10 46)" },
                children: "Enable newsletter in the Config panel above before sending."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConfirmDialog,
      {
        open: confirmOpen,
        festivalName: selectedFestivalId,
        count: activeSubscribers.length,
        onConfirm: handleConfirmSend,
        onCancel: () => setConfirmOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "॥ ॐ ॥" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-center font-body text-xs italic pb-4",
        style: { color: "oklch(0.58 0.06 52)" },
        children: "✦ Every newsletter is a sacred offering — sent with love and dharma ✦"
      }
    )
  ] });
}
export {
  AdminNewsletterPage
};
