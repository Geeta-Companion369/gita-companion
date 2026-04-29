import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePoints } from "@/hooks/use-points";
import type { GitaMood, JournalEntry } from "@/types/gita";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "gita-journal";

const MOOD_CONFIG: Record<
  GitaMood,
  { label: string; icon: string; color: string }
> = {
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
    color: "oklch(0.70 0.28 52)",
  },
  relationship_trouble: {
    label: "Relationship",
    icon: "💔",
    color: "oklch(0.58 0.18 20)",
  },
  career_confusion: {
    label: "Career",
    icon: "⚖️",
    color: "oklch(0.56 0.1  260)",
  },
  lack_of_focus: {
    label: "Unfocused",
    icon: "💭",
    color: "oklch(0.58 0.08 240)",
  },
  grief: { label: "Grief", icon: "🕯️", color: "oklch(0.44 0.1  260)" },
  doubt: { label: "Doubt", icon: "❓", color: "oklch(0.56 0.1  270)" },
  envy: { label: "Envy", icon: "🌿", color: "oklch(0.54 0.16 145)" },
  pride: { label: "Pride", icon: "👑", color: "oklch(0.70 0.22 50)" },
  excessive_desire: {
    label: "Desire",
    icon: "🌊",
    color: "oklch(0.56 0.18 220)",
  },
  need_courage: {
    label: "Need Courage",
    icon: "⚔️",
    color: "oklch(0.62 0.2  36)",
  },
};

const MOODS = Object.keys(MOOD_CONFIG) as GitaMood[];

function loadEntries(): JournalEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as JournalEntry[];
  } catch {
    return [];
  }
}

function saveEntries(entries: JournalEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    /**/
  }
}

type SortMode = "date_desc" | "date_asc" | "mood";

export function JournalPage() {
  const { addPoints } = usePoints();
  const [entries, setEntries] = useState<JournalEntry[]>(loadEntries);
  const [view, setView] = useState<"list" | "create" | "detail">("list");
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [editMode, setEditMode] = useState(false);

  // Form state
  const [verseId, setVerseId] = useState("");
  const [reflectionText, setReflectionText] = useState("");
  const [selectedMood, setSelectedMood] = useState<GitaMood>("grateful");

  // List controls
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("date_desc");
  const [filterMood, setFilterMood] = useState<GitaMood | "all">("all");

  const filteredEntries = useMemo(() => {
    let result = [...entries];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.text.toLowerCase().includes(q) ||
          e.verseId.toLowerCase().includes(q),
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

  const saveEntry = useCallback(() => {
    if (reflectionText.trim().length < 10) {
      toast.error("Please write at least 10 characters of reflection.");
      return;
    }
    if (editMode && selectedEntry) {
      const updated = entries.map((e) =>
        e.id === selectedEntry.id
          ? {
              ...e,
              text: reflectionText,
              verseId,
              mood: selectedMood,
              updatedAt: Date.now(),
            }
          : e,
      );
      setEntries(updated);
      saveEntries(updated);
      toast.success("✦ Reflection updated — Hare Krishna");
      setView("detail");
      setSelectedEntry({
        ...selectedEntry,
        text: reflectionText,
        verseId,
        mood: selectedMood,
      });
    } else {
      const entry: JournalEntry = {
        id: `j-${Date.now()}`,
        verseId: verseId.trim() || "—",
        text: reflectionText.trim(),
        mood: selectedMood,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      const updated = [entry, ...entries];
      setEntries(updated);
      saveEntries(updated);
      addPoints("writing", 5);
      toast.success(
        "✦ +5 points — Your reflection has been inscribed. Hare Krishna 🙏",
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
    addPoints,
  ]);

  const deleteEntry = useCallback(
    (id: string) => {
      const updated = entries.filter((e) => e.id !== id);
      setEntries(updated);
      saveEntries(updated);
      toast("Entry removed from your sacred journal.");
      setView("list");
    },
    [entries],
  );

  const resetForm = () => {
    setVerseId("");
    setReflectionText("");
    setSelectedMood("grateful");
    setEditMode(false);
  };

  const openDetail = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setView("detail");
  };

  const openEdit = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setVerseId(entry.verseId === "—" ? "" : entry.verseId);
    setReflectionText(entry.text);
    setSelectedMood(entry.mood as GitaMood);
    setEditMode(true);
    setView("create");
  };

  const exportEntries = () => {
    const text = entries
      .map((e) => {
        const d = new Date(e.createdAt).toLocaleDateString("en-IN", {
          dateStyle: "long",
        });
        const moodLabel = MOOD_CONFIG[e.mood as GitaMood]?.label ?? e.mood;
        return `━━━━━━━━━━━━━━━━━━━━━━━━━\n${d}\nVerse: ${e.verseId}  |  Mood: ${moodLabel}\n\n${e.text}\n`;
      })
      .join("\n");
    const blob = new Blob(
      [`॥ श्रीमद्भगवद्गीता — Spiritual Journal ॥\n\n${text}`],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gita-journal.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Journal exported. Hare Krishna 🙏");
  };

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      {/* Ornate Header */}
      <div className="text-center mb-8">
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ आत्म-चिन्तन ॥</p>
        <h1 className="chapter-header">Spiritual Journal</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm">
          Inscribe your reflections on Krishna's divine wisdom
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </div>

      {/* Top Actions */}
      {view === "list" && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Button
            data-ocid="journal.open_modal_button"
            onClick={() => {
              resetForm();
              setView("create");
            }}
            className="wax-seal-btn font-display font-bold text-primary-foreground shadow-warm-glow"
            style={{
              background: "oklch(var(--accent))",
              border: "2px solid oklch(var(--gold-deep))",
            }}
          >
            ✦ New Reflection
          </Button>
          <Button
            variant="outline"
            data-ocid="journal.export_button"
            onClick={exportEntries}
            className="border-accent/50 text-muted-foreground font-body text-sm"
            disabled={entries.length === 0}
          >
            ⬇ Export Journal
          </Button>
        </div>
      )}

      {/* ── LIST VIEW ── */}
      <AnimatePresence mode="wait">
        {view === "list" && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Search + filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Input
                data-ocid="journal.search_input"
                placeholder="🔍 Search reflections…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 min-w-[200px] bg-card/70 border-accent/30 font-body"
              />
              <select
                data-ocid="journal.sort_select"
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="rounded border border-accent/30 bg-card/70 px-3 py-2 font-body text-sm text-foreground"
              >
                <option value="date_desc">Newest First</option>
                <option value="date_asc">Oldest First</option>
                <option value="mood">By Mood</option>
              </select>
              <select
                data-ocid="journal.mood_filter"
                value={filterMood}
                onChange={(e) =>
                  setFilterMood(e.target.value as GitaMood | "all")
                }
                className="rounded border border-accent/30 bg-card/70 px-3 py-2 font-body text-sm text-foreground"
              >
                <option value="all">All Moods</option>
                {MOODS.map((m) => (
                  <option key={m} value={m}>
                    {MOOD_CONFIG[m].icon} {MOOD_CONFIG[m].label}
                  </option>
                ))}
              </select>
            </div>

            {/* Empty state */}
            {filteredEntries.length === 0 && (
              <motion.div
                data-ocid="journal.empty_state"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="sacred-card text-center py-16 mt-4"
              >
                <p className="text-5xl mb-4">📜</p>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Your Journal Awaits
                </h3>
                <p className="font-body text-muted-foreground max-w-xs mx-auto">
                  Write your first reflection on a Gita verse — let the sacred
                  wisdom flow through your pen.
                </p>
                <Button
                  data-ocid="journal.empty_create_button"
                  onClick={() => {
                    resetForm();
                    setView("create");
                  }}
                  className="mt-6"
                  style={{
                    background: "oklch(var(--accent))",
                    color: "oklch(var(--accent-foreground))",
                  }}
                >
                  ✦ Begin Writing
                </Button>
              </motion.div>
            )}

            {/* Entry list */}
            <div className="space-y-4">
              {filteredEntries.map((entry, idx) => {
                const moodCfg = MOOD_CONFIG[entry.mood as GitaMood];
                const date = new Date(entry.createdAt).toLocaleDateString(
                  "en-IN",
                  { dateStyle: "medium" },
                );
                return (
                  <motion.div
                    key={entry.id}
                    data-ocid={`journal.item.${idx + 1}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="sacred-card-hover p-5 cursor-pointer"
                    onClick={() => openDetail(entry)}
                  >
                    <div className="flex items-start justify-between gap-3 min-w-0">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          {entry.verseId && entry.verseId !== "—" && (
                            <span className="text-verse-number">
                              {entry.verseId}
                            </span>
                          )}
                          <span className="font-body text-xs text-muted-foreground">
                            {date}
                          </span>
                        </div>
                        <p className="font-body text-foreground line-clamp-2 leading-relaxed">
                          {entry.text}
                        </p>
                      </div>
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sacred border border-accent/30"
                        style={{
                          background: `${moodCfg?.color ?? "oklch(var(--muted))"}22`,
                        }}
                        title={moodCfg?.label}
                      >
                        {moodCfg?.icon ?? "🙏"}
                      </div>
                    </div>
                    {moodCfg && (
                      <div className="mt-3">
                        <Badge
                          variant="outline"
                          className="border-accent/40 text-xs font-body"
                          style={{ color: moodCfg.color }}
                        >
                          {moodCfg.icon} {moodCfg.label}
                        </Badge>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── CREATE / EDIT VIEW ── */}
        {view === "create" && (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="sacred-card p-6 max-w-2xl mx-auto">
              <div className="divider-ornate mb-6">
                <span className="font-display font-bold text-accent text-lg">
                  {editMode ? "✦ Edit Reflection" : "✦ New Reflection"}
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="journal-verse"
                    className="text-verse-number block mb-1"
                  >
                    Verse (e.g. 2.47)
                  </label>
                  <Input
                    id="journal-verse"
                    data-ocid="journal.verse_input"
                    value={verseId}
                    onChange={(e) => setVerseId(e.target.value)}
                    placeholder="2.47, 18.66, …"
                    className="bg-card/80 border-accent/30 font-body"
                  />
                </div>

                <div>
                  <p className="text-verse-number block mb-1">Your Mood</p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {MOODS.map((m) => {
                      const cfg = MOOD_CONFIG[m];
                      const active = selectedMood === m;
                      return (
                        <button
                          key={m}
                          type="button"
                          data-ocid={`journal.mood.${m}`}
                          onClick={() => setSelectedMood(m)}
                          className="flex flex-col items-center justify-center rounded p-2 text-xs font-body transition-smooth border"
                          style={{
                            borderColor: active
                              ? cfg.color
                              : "oklch(var(--border))",
                            background: active
                              ? `${cfg.color}22`
                              : "oklch(var(--card)/0.5)",
                            color: active
                              ? cfg.color
                              : "oklch(var(--muted-foreground))",
                          }}
                        >
                          <span className="text-base mb-0.5">{cfg.icon}</span>
                          <span className="leading-tight text-center">
                            {cfg.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="journal-reflection"
                    className="text-verse-number block mb-1"
                  >
                    Your Reflection
                    <span className="ml-2 font-body normal-case text-muted-foreground text-xs">
                      ({reflectionText.length}/2000 chars)
                    </span>
                  </label>
                  <Textarea
                    id="journal-reflection"
                    data-ocid="journal.reflection_textarea"
                    value={reflectionText}
                    onChange={(e) =>
                      setReflectionText(e.target.value.slice(0, 2000))
                    }
                    placeholder="How does this verse speak to your heart today, Arjun? Write freely…"
                    rows={8}
                    className="bg-card/80 border-accent/30 font-body text-foreground resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    data-ocid="journal.submit_button"
                    onClick={saveEntry}
                    style={{
                      background: "oklch(var(--accent))",
                      color: "oklch(var(--accent-foreground))",
                    }}
                    className="font-display font-bold shadow-warm-glow"
                  >
                    {editMode
                      ? "✦ Update Entry"
                      : "✦ Inscribe Reflection (+5 pts)"}
                  </Button>
                  <Button
                    data-ocid="journal.cancel_button"
                    variant="outline"
                    onClick={() => {
                      resetForm();
                      setView(editMode && selectedEntry ? "detail" : "list");
                    }}
                    className="border-accent/40 font-body"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── DETAIL VIEW ── */}
        {view === "detail" && selectedEntry && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Button
              data-ocid="journal.back_button"
              variant="ghost"
              onClick={() => setView("list")}
              className="mb-4 text-muted-foreground font-body text-sm"
            >
              ← Back to Journal
            </Button>
            <div className="sacred-card p-6 max-w-2xl mx-auto">
              {(() => {
                const moodCfg = MOOD_CONFIG[selectedEntry.mood as GitaMood];
                const date = new Date(
                  selectedEntry.createdAt,
                ).toLocaleDateString("en-IN", { dateStyle: "long" });
                return (
                  <>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                      <div>
                        {selectedEntry.verseId &&
                          selectedEntry.verseId !== "—" && (
                            <span className="text-verse-number block">
                              {selectedEntry.verseId}
                            </span>
                          )}
                        <span className="font-body text-xs text-muted-foreground">
                          {date}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          data-ocid="journal.edit_button"
                          size="sm"
                          variant="outline"
                          onClick={() => openEdit(selectedEntry)}
                          className="border-accent/40 text-sm font-body"
                        >
                          ✏ Edit
                        </Button>
                        <Button
                          data-ocid="journal.delete_button"
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteEntry(selectedEntry.id)}
                          className="text-sm font-body"
                        >
                          ✕ Delete
                        </Button>
                      </div>
                    </div>

                    {moodCfg && (
                      <Badge
                        variant="outline"
                        className="mb-4 border-accent/40 font-body"
                        style={{ color: moodCfg.color }}
                      >
                        {moodCfg.icon} {moodCfg.label}
                      </Badge>
                    )}

                    <div className="ornate-rule">
                      <span className="text-accent text-sm">✦</span>
                    </div>

                    <p className="font-body text-foreground leading-relaxed whitespace-pre-wrap">
                      {selectedEntry.text}
                    </p>
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
