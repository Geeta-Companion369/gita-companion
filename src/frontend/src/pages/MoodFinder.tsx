import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Mood-to-verse database ───────────────────────────────────────────────────
const MOOD_DATA: Record<
  string,
  {
    label: string;
    icon: string;
    verses: {
      id: string;
      sanskrit: string;
      english: string;
      reasoning: string;
    }[];
  }
> = {
  anxious: {
    label: "Anxious",
    icon: "😰",
    verses: [
      {
        id: "6.26",
        sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |",
        english:
          "From wherever the restless and unsteady mind wanders, one should bring it back under the control of the Self alone.",
        reasoning:
          "Your mind is restless — but it is trainable. Each time anxiety pulls you away, lovingly return to your center. The mind is a disciple, not an enemy.",
      },
      {
        id: "2.14",
        sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |",
        english:
          "The contacts of the senses with objects give rise to feelings — they come and go. Endure them, O Arjuna.",
        reasoning:
          "Your anxiety is temporary — like a season. This verse assures you: all distress passes. Witness the feeling; don't become it.",
      },
      {
        id: "18.66",
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |",
        english:
          "Abandon all varieties of dharma and surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.",
        reasoning:
          "When anxiety overwhelms, Krishna's ultimate answer is surrender. You don't need to solve everything — just give it to Krishna.",
      },
    ],
  },
  lost: {
    label: "Lost",
    icon: "🌫️",
    verses: [
      {
        id: "3.35",
        sanskrit: "श्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात् |",
        english:
          "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed.",
        reasoning:
          "You feel lost because you may be walking someone else's path. Even an imperfect version of your true calling will serve you better.",
      },
      {
        id: "4.38",
        sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते |",
        english:
          "Nothing in this world is as pure and sanctifying as knowledge. In time, this knowledge is found in the self.",
        reasoning:
          "The direction you seek is found within — self-knowledge is the compass. When lost, go inward.",
      },
    ],
  },
  angry: {
    label: "Angry",
    icon: "🔥",
    verses: [
      {
        id: "2.63",
        sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः |",
        english:
          "From anger arises delusion; from delusion, loss of memory; from loss of memory, destruction of intelligence.",
        reasoning:
          "Krishna shows anger's chain — it begins as fire and ends in ruin. Seeing this clearly can dissolve the anger before it consumes you.",
      },
      {
        id: "5.23",
        sanskrit: "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात् |",
        english:
          "He who withstands the force of desire and anger before his death — he is a yogi, he is a happy person.",
        reasoning:
          "The reward for holding steady in anger is immense. This verse offers you the victory on the other side of patience.",
      },
    ],
  },
  grieving: {
    label: "Grieving",
    icon: "🌧️",
    verses: [
      {
        id: "2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः |",
        english:
          "The soul is never born nor does it die at any time. It is unborn, eternal, ever-existing, and primeval.",
        reasoning:
          "Those you grieve are eternal. The soul you mourn never died — it simply changed forms. This truth is the deepest comfort Krishna offers.",
      },
      {
        id: "2.27",
        sanskrit: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च |",
        english:
          "Death is certain for the born; birth is certain for the dead. Do not grieve the inevitable.",
        reasoning:
          "Grief is the price of love in a temporary world. But Krishna reveals the bigger truth: death is a door, not a wall.",
      },
      {
        id: "9.22",
        sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते |",
        english:
          "I carry what they lack and preserve what they have — for those who worship Me with devotion.",
        reasoning:
          "You are not alone in your grief. Krishna himself promises to carry your burdens. Let him hold what is too heavy for you.",
      },
    ],
  },
  confused: {
    label: "Confused",
    icon: "🌀",
    verses: [
      {
        id: "18.61",
        sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति |",
        english:
          "The Supreme Lord is situated in everyone's heart, O Arjuna, directing the wanderings of all living entities.",
        reasoning:
          "When confused, look inward. The answer you seek is already present — Krishna sits in your heart, ready to illuminate the right path.",
      },
      {
        id: "10.10",
        sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् |",
        english:
          "To those constantly devoted who worship Me with love, I give the understanding by which they can come to Me.",
        reasoning:
          "Turn your confusion into prayer. Ask Krishna directly and he promises to illuminate your intelligence with the exact wisdom you need.",
      },
    ],
  },
  fearful: {
    label: "Fearful",
    icon: "😨",
    verses: [
      {
        id: "6.30",
        sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति |",
        english:
          "For one who sees Me everywhere and everything in Me — I am never lost, and that person is never lost to Me.",
        reasoning:
          "Fear disappears when you see Krishna everywhere. You are never alone, never unprotected — he is in every atom of your reality.",
      },
      {
        id: "18.58",
        sanskrit: "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि |",
        english:
          "If you become conscious of Me, you will pass over all obstacles of conditioned life by My grace.",
        reasoning:
          "Fear is an obstacle, and Krishna is the bridge over every obstacle. His grace makes the impossible passage possible.",
      },
    ],
  },
  grateful: {
    label: "Grateful",
    icon: "🙏",
    verses: [
      {
        id: "9.26",
        sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति |",
        english:
          "If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it.",
        reasoning:
          "Your gratitude is the most precious offering. Krishna accepts everything you give with love — no gift is too small when offered from the heart.",
      },
      {
        id: "3.19",
        sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर |",
        english:
          "Without attachment, perform always the work that has to be done — by action without attachment one attains the Supreme.",
        reasoning:
          "Gratitude deepens when you dedicate every action to Krishna. Your whole life becomes an offering, every moment sacred.",
      },
    ],
  },
  joyful: {
    label: "Joyful",
    icon: "✨",
    verses: [
      {
        id: "5.21",
        sanskrit: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत् सुखम् |",
        english:
          "He whose happiness is within, who is active within, who rejoices within — that yogi attains eternal happiness.",
        reasoning:
          "Your joy points to the divine within. Today, go deeper — this surface happiness is a taste of the eternal bliss that is your true nature.",
      },
    ],
  },
  seeking_purpose: {
    label: "Seeking Purpose",
    icon: "🌟",
    verses: [
      {
        id: "3.35",
        sanskrit: "श्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात् |",
        english:
          "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed.",
        reasoning:
          "Your purpose is uniquely yours. Even a slightly imperfect version of your true calling will serve you better than a perfect imitation of someone else's.",
      },
      {
        id: "4.7",
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |",
        english:
          "Whenever there is a decline in righteousness, at that time I manifest Myself.",
        reasoning:
          "You are here in this age for a reason — Kalyug needs dharmic souls. Your presence itself is purposeful.",
      },
    ],
  },
  relationship_trouble: {
    label: "Relationships",
    icon: "💔",
    verses: [
      {
        id: "16.2",
        sanskrit: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् |",
        english:
          "Non-violence, truth, freedom from anger, renunciation, tranquility, absence of malice — these are divine qualities.",
        reasoning:
          "Every difficult relationship is a laboratory for these divine qualities. The person who tests you most is your greatest teacher.",
      },
      {
        id: "12.13",
        sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च |",
        english:
          "One who is not envious but is a kind friend to all — such a devotee is very dear to Me.",
        reasoning:
          "In troubled relationships, return to this — be a kind friend, free from ego. Not because the other deserves it, but because this is your dharma.",
      },
    ],
  },
  career_confusion: {
    label: "Career",
    icon: "⚖️",
    verses: [
      {
        id: "2.47",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |",
        english:
          "You have a right to perform your duties, but never to the fruits of your actions.",
        reasoning:
          "Career anxiety is often attachment to outcomes. When you focus purely on excellent work without obsessing over results, clarity follows naturally.",
      },
      {
        id: "3.8",
        sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः |",
        english: "Do your prescribed duty, for action is better than inaction.",
        reasoning:
          "The first step in career confusion is to act. Stop waiting for the perfect path to appear. Begin where you are, with what you have.",
      },
    ],
  },
  lack_of_focus: {
    label: "Distracted",
    icon: "💭",
    verses: [
      {
        id: "6.26",
        sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |",
        english:
          "From wherever the restless mind wanders, bring it back under the control of the Self.",
        reasoning:
          "Distraction is the mind's habit. This verse gives you the solution: notice the wandering, return. Again and again. Each return is a victory.",
      },
      {
        id: "6.35",
        sanskrit:
          "असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||",
        english:
          "The mind is difficult to control — but it can be conquered through practice and detachment.",
        reasoning:
          "Focus is a skill, not a gift. Krishna confirms: the restless mind can be trained. Practice and gentle detachment are your tools.",
      },
    ],
  },
  grief: {
    label: "Deep Grief",
    icon: "🕯️",
    verses: [
      {
        id: "2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्",
        english:
          "The soul is never born nor dies at any time. Eternal and ancient, it is not slain when the body is slain.",
        reasoning:
          "The one you grieve is eternal. Their soul continues — transformed, not destroyed. Your love did not lose them forever.",
      },
    ],
  },
  doubt: {
    label: "Doubt",
    icon: "❓",
    verses: [
      {
        id: "4.39",
        sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः |",
        english:
          "A faithful person, devoted to divine knowledge, with senses controlled — quickly attains knowledge and supreme peace.",
        reasoning:
          "Doubt dissolves in sincere seeking. Begin with faith — even faith the size of a mustard seed. It grows.",
      },
    ],
  },
  envy: {
    label: "Envy",
    icon: "🐍",
    verses: [
      {
        id: "12.13",
        sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च |",
        english:
          "One who is not envious but is a kind friend to all — such a devotee is very dear to Me.",
        reasoning:
          "The antidote to envy is celebration of others. When you genuinely celebrate another's success, you open the same door for yourself.",
      },
    ],
  },
  pride: {
    label: "Pride",
    icon: "👑",
    verses: [
      {
        id: "3.27",
        sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः |",
        english:
          "All actions are performed by the modes of material nature. The fool, deluded by ego, thinks 'I am the doer.'",
        reasoning:
          "Pride arises from thinking the gifts and achievements are yours alone. You are the instrument. All gifts flow through you from the divine.",
      },
    ],
  },
  excessive_desire: {
    label: "Excess Desire",
    icon: "🌊",
    verses: [
      {
        id: "2.62",
        sanskrit: "ध्यायतो विषयान् पुंसः सङ्गस्तेषूपजायते |",
        english:
          "While contemplating sense objects, a person develops attachment. From attachment arises desire, and from desire arises anger.",
        reasoning:
          "Desire begets desire. This verse shows its chain clearly — so you can step off before it consumes you. The exit is always back to the Self.",
      },
    ],
  },
  need_courage: {
    label: "Need Courage",
    icon: "⚔️",
    verses: [
      {
        id: "2.3",
        sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते |",
        english:
          "Do not yield to this unmanliness, O Arjuna. It does not befit you. Give up such petty weakness of heart and arise.",
        reasoning:
          "Krishna speaks directly to the coward in all of us — and refuses to accept it as your identity. 'This is not you,' he says. 'Arise.'",
      },
      {
        id: "18.33",
        sanskrit: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः |",
        english:
          "The unbreakable determination by which the mind, life force, and senses are controlled — that determination is sattvic, O Arjuna.",
        reasoning:
          "Courage is a practice, not a feeling. Steady, unshakeable determination is the highest form of strength.",
      },
    ],
  },
};

const MOOD_KEYS = Object.keys(MOOD_DATA);

export function MoodFinderPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [savedVerses, setSavedVerses] = useState<Set<string>>(new Set());

  const moodData = selectedMood ? MOOD_DATA[selectedMood] : null;

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "en-IN";
      utt.rate = 0.85;
      window.speechSynthesis.speak(utt);
    }
  };

  const saveToJournal = (verseId: string) => {
    setSavedVerses((prev) => new Set([...prev, verseId]));
    toast.success(
      `Verse ${verseId} saved — open your Journal to write a reflection! 🙏`,
      { duration: 4000 },
    );
  };

  return (
    <div className="manuscript-page min-h-screen px-4 py-8 sm:px-8">
      <div className="text-center mb-8">
        <div className="manuscript-header-border mb-4" />
        <p className="text-verse-number mb-1">॥ भाव-दर्पण ॥</p>
        <h1 className="chapter-header">Mood Verse Finder</h1>
        <p className="font-body text-muted-foreground mt-2 text-sm italic">
          "In every battle of life, Krishna stands with you — as he stood with
          Arjuna on Kurukshetra"
        </p>
        <div className="chapter-separator">
          <span className="text-accent">❧ ✦ ❧</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedMood ? (
          <motion.div
            key="moods"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className="sacred-card inline-block px-8 py-5">
                <div className="text-4xl mb-2">🦚</div>
                <p className="font-display text-xl italic text-foreground">
                  How are you feeling today, Arjun?
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Choose your inner state — Krishna will speak directly to it
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {MOOD_KEYS.map((key, i) => {
                const m = MOOD_DATA[key];
                return (
                  <motion.button
                    key={key}
                    type="button"
                    data-ocid={`mood.card.${i + 1}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setSelectedMood(key)}
                    className="flex flex-col items-center gap-2 p-4 rounded border border-border transition-smooth hover:shadow-warm-glow hover:border-accent/50 group bg-card/70"
                    aria-label={`I am feeling ${m.label}`}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-smooth">
                      {m.icon}
                    </span>
                    <span className="font-body text-sm text-foreground font-medium leading-tight text-center">
                      {m.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="verses"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-2xl mx-auto">
              <Button
                data-ocid="mood.back_button"
                variant="ghost"
                onClick={() => setSelectedMood(null)}
                className="mb-4 text-muted-foreground font-body text-sm"
              >
                ← Choose Another Mood
              </Button>

              <div className="text-center mb-6">
                <span className="text-5xl block mb-2">{moodData?.icon}</span>
                <h2 className="font-display text-2xl italic text-foreground">
                  Feeling {moodData?.label}
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Krishna speaks directly to this feeling through these sacred
                  verses
                </p>
              </div>

              <div className="space-y-6">
                {moodData?.verses.map((verse, i) => (
                  <motion.div
                    key={verse.id}
                    data-ocid={`mood.verse.${i + 1}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="sacred-card p-5 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 gradient-manuscript-border" />
                    <div className="pl-3">
                      <p className="text-verse-number mb-3">
                        BHAGAVAD GITA ॥ {verse.id} ॥
                      </p>
                      <p
                        className="font-body leading-loose mb-3"
                        style={{
                          fontSize: "1.1rem",
                          color: "oklch(var(--foreground))",
                        }}
                      >
                        {verse.sanskrit}
                      </p>
                      <p className="font-body text-sm italic text-muted-foreground mb-4 leading-relaxed">
                        "{verse.english}"
                      </p>
                      <div className="divider-ornate">
                        <span className="text-accent text-xs">✦</span>
                      </div>
                      <div className="mt-3 p-3 rounded font-body text-sm leading-relaxed bg-muted/40">
                        <span className="font-semibold text-accent">
                          Why this verse helps:{" "}
                        </span>
                        {verse.reasoning}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          data-ocid={`mood.play_button.${i + 1}`}
                          variant="outline"
                          size="sm"
                          onClick={() => speak(verse.english)}
                          className="border-accent/40 text-accent font-body text-xs"
                          aria-label="Listen to verse translation"
                        >
                          🔊 Listen
                        </Button>
                        <Button
                          data-ocid={`mood.save_button.${i + 1}`}
                          variant="outline"
                          size="sm"
                          onClick={() => saveToJournal(verse.id)}
                          className="font-body text-xs"
                          style={{
                            borderColor: savedVerses.has(verse.id)
                              ? "oklch(var(--accent))"
                              : "oklch(var(--border))",
                            background: savedVerses.has(verse.id)
                              ? "oklch(var(--accent)/0.1)"
                              : undefined,
                          }}
                          aria-label="Save verse to journal"
                        >
                          {savedVerses.has(verse.id)
                            ? "✓ Saved"
                            : "📖 Save to Journal"}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center font-body text-sm text-muted-foreground italic">
                "Hare Krishna — you are never alone on your Kurukshetra" 🦚
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
