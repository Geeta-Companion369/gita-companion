import { j as jsxRuntimeExports, r as reactExports, h as ue, A as AnimatePresence, m as motion } from "./index-vCKiyWhq.js";
import { B as Badge } from "./badge-DTri8Ot3.js";
import { B as Button } from "./button-S7Tmk-Xe.js";
import { I as Input } from "./input-6Gh_LKu9.js";
import { c as cn } from "./utils-2v2HxlWs.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
import "./index-Di4-AdbR.js";
import "./index-BknLay4C.js";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const STORAGE_KEY = "gita-journal";
const MOOD_CONFIG = {
  anxious: { label: "Anxious", icon: "😰", color: "oklch(0.62 0.16 28)" },
  lost: { label: "Lost", icon: "🌫️", color: "oklch(0.52 0.08 250)" },
  angry: { label: "Angry", icon: "🔥", color: "oklch(0.55 0.22 22)" },
  grieving: { label: "Grieving", icon: "💧", color: "oklch(0.48 0.12 240)" },
  confused: { label: "Confused", icon: "🌀", color: "oklch(0.56 0.12 280)" },
  fearful: { label: "Fearful", icon: "😨", color: "oklch(0.54 0.14 30)" },
  grateful: { label: "Grateful", icon: "🙏", color: "oklch(0.68 0.24 52)" },
  joyful: { label: "Joyful", icon: "🌸", color: "oklch(0.72 0.2  60)" },
  seeking_purpose: {
    label: "Seeking Purpose",
    icon: "🌟",
    color: "oklch(0.70 0.28 52)"
  },
  relationship_trouble: {
    label: "Relationship",
    icon: "💔",
    color: "oklch(0.58 0.18 20)"
  },
  career_confusion: {
    label: "Career",
    icon: "⚖️",
    color: "oklch(0.56 0.1  260)"
  },
  lack_of_focus: {
    label: "Unfocused",
    icon: "💭",
    color: "oklch(0.58 0.08 240)"
  },
  grief: { label: "Grief", icon: "🕯️", color: "oklch(0.44 0.1  260)" },
  doubt: { label: "Doubt", icon: "❓", color: "oklch(0.56 0.1  270)" },
  envy: { label: "Envy", icon: "🌿", color: "oklch(0.54 0.16 145)" },
  pride: { label: "Pride", icon: "👑", color: "oklch(0.70 0.22 50)" },
  excessive_desire: {
    label: "Desire",
    icon: "🌊",
    color: "oklch(0.56 0.18 220)"
  },
  need_courage: {
    label: "Need Courage",
    icon: "⚔️",
    color: "oklch(0.62 0.2  36)"
  }
};
const MOODS = Object.keys(MOOD_CONFIG);
function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function saveEntries(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
  }
}
function JournalPage() {
  const { addPoints } = usePoints();
  const [entries, setEntries] = reactExports.useState(loadEntries);
  const [view, setView] = reactExports.useState("list");
  const [selectedEntry, setSelectedEntry] = reactExports.useState(null);
  const [editMode, setEditMode] = reactExports.useState(false);
  const [verseId, setVerseId] = reactExports.useState("");
  const [reflectionText, setReflectionText] = reactExports.useState("");
  const [selectedMood, setSelectedMood] = reactExports.useState("grateful");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [sortMode, setSortMode] = reactExports.useState("date_desc");
  const [filterMood, setFilterMood] = reactExports.useState("all");
  const filteredEntries = reactExports.useMemo(() => {
    let result = [...entries];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (e) => e.text.toLowerCase().includes(q) || e.verseId.toLowerCase().includes(q)
      );
    }
    if (filterMood !== "all")
      result = result.filter((e) => e.mood === filterMood);
    if (sortMode === "date_desc")
      result.sort((a, b) => b.createdAt - a.createdAt);
    else if (sortMode === "date_asc")
      result.sort((a, b) => a.createdAt - b.createdAt);
    else result.sort((a, b) => a.mood.localeCompare(b.mood));
    return result;
  }, [entries, searchQuery, sortMode, filterMood]);
  const saveEntry = reactExports.useCallback(() => {
    if (reflectionText.trim().length < 10) {
      ue.error("Please write at least 10 characters of reflection.");
      return;
    }
    if (editMode && selectedEntry) {
      const updated = entries.map(
        (e) => e.id === selectedEntry.id ? {
          ...e,
          text: reflectionText,
          verseId,
          mood: selectedMood,
          updatedAt: Date.now()
        } : e
      );
      setEntries(updated);
      saveEntries(updated);
      ue.success("✦ Reflection updated — Hare Krishna");
      setView("detail");
      setSelectedEntry({
        ...selectedEntry,
        text: reflectionText,
        verseId,
        mood: selectedMood
      });
    } else {
      const entry = {
        id: `j-${Date.now()}`,
        verseId: verseId.trim() || "—",
        text: reflectionText.trim(),
        mood: selectedMood,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      const updated = [entry, ...entries];
      setEntries(updated);
      saveEntries(updated);
      addPoints("writing", 5);
      ue.success(
        "✦ +5 points — Your reflection has been inscribed. Hare Krishna 🙏"
      );
      setView("list");
      resetForm();
    }
  }, [
    reflectionText,
    verseId,
    selectedMood,
    editMode,
    selectedEntry,
    entries,
    addPoints
  ]);
  const deleteEntry = reactExports.useCallback(
    (id) => {
      const updated = entries.filter((e) => e.id !== id);
      setEntries(updated);
      saveEntries(updated);
      ue("Entry removed from your sacred journal.");
      setView("list");
    },
    [entries]
  );
  const resetForm = () => {
    setVerseId("");
    setReflectionText("");
    setSelectedMood("grateful");
    setEditMode(false);
  };
  const openDetail = (entry) => {
    setSelectedEntry(entry);
    setView("detail");
  };
  const openEdit = (entry) => {
    setSelectedEntry(entry);
    setVerseId(entry.verseId === "—" ? "" : entry.verseId);
    setReflectionText(entry.text);
    setSelectedMood(entry.mood);
    setEditMode(true);
    setView("create");
  };
  const exportEntries = () => {
    const text = entries.map((e) => {
      var _a;
      const d = new Date(e.createdAt).toLocaleDateString("en-IN", {
        dateStyle: "long"
      });
      const moodLabel = ((_a = MOOD_CONFIG[e.mood]) == null ? void 0 : _a.label) ?? e.mood;
      return `━━━━━━━━━━━━━━━━━━━━━━━━━
${d}
Verse: ${e.verseId}  |  Mood: ${moodLabel}

${e.text}
`;
    }).join("\n");
    const blob = new Blob(
      [`॥ श्रीमद्भगवद्गीता — Spiritual Journal ॥

${text}`],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gita-journal.txt";
    a.click();
    URL.revokeObjectURL(url);
    ue.success("Journal exported. Hare Krishna 🙏");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-page min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manuscript-header-border mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: "॥ आत्म-चिन्तन ॥" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Spiritual Journal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mt-2 text-sm", children: "Inscribe your reflections on Krishna's divine wisdom" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chapter-separator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "❧ ✦ ❧" }) })
    ] }),
    view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "journal.open_modal_button",
          onClick: () => {
            resetForm();
            setView("create");
          },
          className: "wax-seal-btn font-display font-bold text-primary-foreground shadow-warm-glow",
          style: {
            background: "oklch(var(--accent))",
            border: "2px solid oklch(var(--gold-deep))"
          },
          children: "✦ New Reflection"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          "data-ocid": "journal.export_button",
          onClick: exportEntries,
          className: "border-accent/50 text-muted-foreground font-body text-sm",
          disabled: entries.length === 0,
          children: "⬇ Export Journal"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "journal.search_input",
                  placeholder: "🔍 Search reflections…",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "flex-1 min-w-[200px] bg-card/70 border-accent/30 font-body"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  "data-ocid": "journal.sort_select",
                  value: sortMode,
                  onChange: (e) => setSortMode(e.target.value),
                  className: "rounded border border-accent/30 bg-card/70 px-3 py-2 font-body text-sm text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date_desc", children: "Newest First" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date_asc", children: "Oldest First" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mood", children: "By Mood" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  "data-ocid": "journal.mood_filter",
                  value: filterMood,
                  onChange: (e) => setFilterMood(e.target.value),
                  className: "rounded border border-accent/30 bg-card/70 px-3 py-2 font-body text-sm text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Moods" }),
                    MOODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: m, children: [
                      MOOD_CONFIG[m].icon,
                      " ",
                      MOOD_CONFIG[m].label
                    ] }, m))
                  ]
                }
              )
            ] }),
            filteredEntries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": "journal.empty_state",
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                className: "sacred-card text-center py-16 mt-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-4", children: "📜" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Your Journal Awaits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xs mx-auto", children: "Write your first reflection on a Gita verse — let the sacred wisdom flow through your pen." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "journal.empty_create_button",
                      onClick: () => {
                        resetForm();
                        setView("create");
                      },
                      className: "mt-6",
                      style: {
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))"
                      },
                      children: "✦ Begin Writing"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredEntries.map((entry, idx) => {
              const moodCfg = MOOD_CONFIG[entry.mood];
              const date = new Date(entry.createdAt).toLocaleDateString(
                "en-IN",
                { dateStyle: "medium" }
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `journal.item.${idx + 1}`,
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: idx * 0.05 },
                  className: "sacred-card-hover p-5 cursor-pointer",
                  onClick: () => openDetail(entry),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [
                          entry.verseId && entry.verseId !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-verse-number", children: entry.verseId }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: date })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground line-clamp-2 leading-relaxed", children: entry.text })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sacred border border-accent/30",
                          style: {
                            background: `${(moodCfg == null ? void 0 : moodCfg.color) ?? "oklch(var(--muted))"}22`
                          },
                          title: moodCfg == null ? void 0 : moodCfg.label,
                          children: (moodCfg == null ? void 0 : moodCfg.icon) ?? "🙏"
                        }
                      )
                    ] }),
                    moodCfg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: "border-accent/40 text-xs font-body",
                        style: { color: moodCfg.color },
                        children: [
                          moodCfg.icon,
                          " ",
                          moodCfg.label
                        ]
                      }
                    ) })
                  ]
                },
                entry.id
              );
            }) })
          ]
        },
        "list"
      ),
      view === "create" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sacred-card p-6 max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-accent text-lg", children: editMode ? "✦ Edit Reflection" : "✦ New Reflection" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "journal-verse",
                    className: "text-verse-number block mb-1",
                    children: "Verse (e.g. 2.47)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "journal-verse",
                    "data-ocid": "journal.verse_input",
                    value: verseId,
                    onChange: (e) => setVerseId(e.target.value),
                    placeholder: "2.47, 18.66, …",
                    className: "bg-card/80 border-accent/30 font-body"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number block mb-1", children: "Your Mood" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-2", children: MOODS.map((m) => {
                  const cfg = MOOD_CONFIG[m];
                  const active = selectedMood === m;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `journal.mood.${m}`,
                      onClick: () => setSelectedMood(m),
                      className: "flex flex-col items-center justify-center rounded p-2 text-xs font-body transition-smooth border",
                      style: {
                        borderColor: active ? cfg.color : "oklch(var(--border))",
                        background: active ? `${cfg.color}22` : "oklch(var(--card)/0.5)",
                        color: active ? cfg.color : "oklch(var(--muted-foreground))"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base mb-0.5", children: cfg.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-tight text-center", children: cfg.label })
                      ]
                    },
                    m
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "journal-reflection",
                    className: "text-verse-number block mb-1",
                    children: [
                      "Your Reflection",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 font-body normal-case text-muted-foreground text-xs", children: [
                        "(",
                        reflectionText.length,
                        "/2000 chars)"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "journal-reflection",
                    "data-ocid": "journal.reflection_textarea",
                    value: reflectionText,
                    onChange: (e) => setReflectionText(e.target.value.slice(0, 2e3)),
                    placeholder: "How does this verse speak to your heart today, Arjun? Write freely…",
                    rows: 8,
                    className: "bg-card/80 border-accent/30 font-body text-foreground resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "journal.submit_button",
                    onClick: saveEntry,
                    style: {
                      background: "oklch(var(--accent))",
                      color: "oklch(var(--accent-foreground))"
                    },
                    className: "font-display font-bold shadow-warm-glow",
                    children: editMode ? "✦ Update Entry" : "✦ Inscribe Reflection (+5 pts)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "journal.cancel_button",
                    variant: "outline",
                    onClick: () => {
                      resetForm();
                      setView(editMode && selectedEntry ? "detail" : "list");
                    },
                    className: "border-accent/40 font-body",
                    children: "Cancel"
                  }
                )
              ] })
            ] })
          ] })
        },
        "create"
      ),
      view === "detail" && selectedEntry && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "journal.back_button",
                variant: "ghost",
                onClick: () => setView("list"),
                className: "mb-4 text-muted-foreground font-body text-sm",
                children: "← Back to Journal"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sacred-card p-6 max-w-2xl mx-auto", children: (() => {
              const moodCfg = MOOD_CONFIG[selectedEntry.mood];
              const date = new Date(
                selectedEntry.createdAt
              ).toLocaleDateString("en-IN", { dateStyle: "long" });
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    selectedEntry.verseId && selectedEntry.verseId !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-verse-number block", children: selectedEntry.verseId }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: date })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "journal.edit_button",
                        size: "sm",
                        variant: "outline",
                        onClick: () => openEdit(selectedEntry),
                        className: "border-accent/40 text-sm font-body",
                        children: "✏ Edit"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "journal.delete_button",
                        size: "sm",
                        variant: "destructive",
                        onClick: () => deleteEntry(selectedEntry.id),
                        className: "text-sm font-body",
                        children: "✕ Delete"
                      }
                    )
                  ] })
                ] }),
                moodCfg && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-4 border-accent/40 font-body",
                    style: { color: moodCfg.color },
                    children: [
                      moodCfg.icon,
                      " ",
                      moodCfg.label
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ornate-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-sm", children: "✦" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground leading-relaxed whitespace-pre-wrap", children: selectedEntry.text })
              ] });
            })() })
          ]
        },
        "detail"
      )
    ] })
  ] });
}
export {
  JournalPage
};
