module {
  // ─── Aachar Saadhna (daily conduct) ─────────────────────────────────────────
  /// A daily duty / practice in Aachar Saadhna (Sandhya Saadhna, Aahaar Saadhna,
  /// etc.). Each DailyDuty links to a RitualExplanation that gives the WHY with
  /// source citations.
  public type DailyDuty = {
    id : Text;                  // e.g. "sandhya-morning", "aahaar-sattvic"
    name : Text;
    sanskritName : Text;
    category : Text;            // "Sandhya" | "Aahaar" | "Conduct" | "Hygiene"
    description : Text;
    practice : Text;            // what to do
    timing : Text;              // when (e.g. "Sunrise", "Before meals")
    linkedExplanationId : Text; // id of the RitualExplanation that explains WHY
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Dharma Stambh (4 pillars) + Yug Cycle ──────────────────────────────────
  /// The 4 pillars of Dharma: truth, compassion, austerity, charity.
  public type DharmaPillar = {
    id : Text;          // e.g. "satya", "daya", "tap", "daan"
    name : Text;
    sanskritName : Text;
    description : Text;
    practice : Text;    // how to live this pillar
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  /// The 4 yugas of the cosmic cycle.
  public type YugCycle = {
    id : Text;          // "satya" | "treta" | "dvapara" | "kali"
    name : Text;
    sanskritName : Text;
    durationYears : Nat; // approximate duration in years
    characteristics : Text;
    dharmaQuarter : Nat; // fraction of dharma present (4,3,2,1)
    description : Text;
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
  };

  // ─── Ritual Explanation (the WHY, with source citations) ────────────────────
  /// Explains the rationale behind a ritual, rite, or daily duty, with a
  /// granth/shastra citation for trust-through-source.
  public type RitualExplanation = {
    id : Text;
    title : Text;
    ritualName : Text;
    explanation : Text;          // the WHY
    sourceGranth : Text;
    sourceVerse : Text;
    sourceChapter : Text;
    relatedDutyIds : [Text];    // DailyDuty ids this explanation illuminates
  };
};
