import { r as reactExports, j as jsxRuntimeExports, m as motion, a as Link, A as AnimatePresence } from "./index-CodWPqWB.js";
const AFFILIATIONS = [
  {
    id: "student",
    icon: "📚",
    title: "Student",
    titleHindi: "विद्यार्थी",
    subtitle: "Struggling with studies or future",
    color: "oklch(0.55 0.22 220)",
    verse: "BG 4.38 — In this world there is nothing so purifying as knowledge. One who has become accomplished in yoga will enjoy this knowledge within himself in due time.",
    guidance: "Krishna was the greatest teacher who ever lived. He gave the entire Bhagavad Gita to a confused student facing the greatest exam of his life — and Arjuna passed. Your studies are not separate from your dharma. Every lesson learned is a step toward your svadharma. Ask yourself: what did I truly learn today?",
    practices: [
      "Begin each study session with Saraswati Vandana",
      "Write your goal clearly and offer it to Krishna",
      "Read BG Chapter 4 — the yoga of wisdom",
      "Take breaks to chant the Gayatri Mantra 3 times"
    ],
    verse2: "BG 3.35 — Better is one's own dharma, though imperfectly performed, than the dharma of another well performed. It is better to die in one's own dharma."
  },
  {
    id: "parent",
    icon: "👨‍👩‍👧",
    title: "Parent",
    titleHindi: "माता-पिता",
    subtitle: "Worrying about your child's future",
    color: "oklch(0.60 0.24 48)",
    verse: "BG 9.22 — For those who worship Me with devotion, meditating on My form, I carry what they lack and I preserve what they have.",
    guidance: "Every parent is a Devaki — you brought a soul of Krishna into the world. Your duty is not to own your child's destiny but to prepare the soil. Teach dharma through your own example. The best inheritance is not money — it is character, faith, and the name of Krishna.",
    practices: [
      "Chant the Santana Gopala Mantra for your child's protection",
      "Read them one Gita story before sleep",
      "Perform Satyanarayan Katha on auspicious days",
      "Write a letter to Krishna about your parental fears"
    ],
    verse2: "BG 10.10 — To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me."
  },
  {
    id: "spouse",
    icon: "❤️",
    title: "Spouse",
    titleHindi: "जीवनसाथी",
    subtitle: "Challenges in marriage and partnership",
    color: "oklch(0.60 0.26 340)",
    verse: "BG 12.13–14 — One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor, who is free from false ego, equal in both happiness and distress, always satisfied, self-controlled, engaged in devotional service with determination.",
    guidance: "A sacred marriage is a dharmic partnership — two souls walking the same path toward Krishna. The Saptapadi wedding vows ask you to be eternal friends, not temporary companions. When the marriage feels difficult, ask: Am I fulfilling my vow of friendship? Am I walking toward dharma together?",
    practices: [
      "Perform Satyanarayan Puja together on Purnima",
      "Read the Saptapadi mantras aloud together",
      "One act of service for your spouse today with zero expectation",
      "Read BG Chapter 12 together — the path of devotion"
    ],
    verse2: "BG 13.9 — Non-attachment, absence of clinging to sons, wives, home; constant equal-mindedness in desired and undesired events."
  },
  {
    id: "child",
    icon: "🌱",
    title: "Child / Youth",
    titleHindi: "संतान / युवा",
    subtitle: "Finding your way as a young person",
    color: "oklch(0.58 0.24 120)",
    verse: "BG 2.3 — Do not yield to unmanliness, O Partha. It does not become you. Shake off your faint-heartedness and arise, O conqueror of foes.",
    guidance: "Arjuna was young when Krishna spoke the Gita. This entire scripture was given to a young person in crisis. You are not too young to know God. In fact, the younger you begin, the freer your whole life becomes. Your generation will restore dharma — that is why you are here.",
    practices: [
      "Start each morning with the Mahamrityunjaya Mantra 21 times",
      "Read one chapter of the Gita each week",
      "Join the Youth Dharma Hub in this app",
      "Ask Krishna one real question and sit quietly for the answer"
    ],
    verse2: "BG 18.66 — Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
  },
  {
    id: "entrepreneur",
    icon: "🚀",
    title: "Entrepreneur",
    titleHindi: "उद्यमी",
    subtitle: "Building something and facing uncertainty",
    color: "oklch(0.62 0.26 46)",
    verse: "BG 2.47 — You have a right to perform your prescribed duties, but you are not entitled to the fruits of your action. Never consider yourself the cause of the results of your activities.",
    guidance: "The Gita is the greatest business philosophy ever written. Act fully. Strategize like Arjuna. Execute like a warrior. But surrender the result to Krishna completely. The greatest entrepreneurs in dharma built without attachment to outcome — they built because it was their svadharma.",
    practices: [
      "Begin new ventures with the Ganesha Atharvashirsha recitation",
      "Write your business purpose — is it serving others?",
      "Read BG Chapter 3 — karma yoga for builders",
      "Fast on Ekadashi and meditate on your business's higher purpose"
    ],
    verse2: "BG 3.19 — Therefore, always perform your duty efficiently and without attachment to the results, because by doing work without attachment one attains the Absolute."
  },
  {
    id: "employee",
    icon: "💼",
    title: "Employee / Worker",
    titleHindi: "कर्मचारी",
    subtitle: "Challenges at work or with a boss",
    color: "oklch(0.58 0.20 200)",
    verse: "BG 3.9 — Work done as a sacrifice for Vishnu has to be performed; otherwise work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction.",
    guidance: "Every workplace is a Kurukshetra. You will meet Duryodhanas and Dronas. The key is nishkama karma — give your best work without attachment to appreciation or reward. The work itself is your offering. Krishna sees everything.",
    practices: [
      "Dedicate your work today to Krishna before beginning",
      "Do one task with zero thought of credit or recognition",
      "Read BG 3.9 before going to a difficult meeting",
      "If mistreated unjustly, read BG 11.33 — your justice belongs to God"
    ],
    verse2: "BG 18.46 — By performing his own work, one worships the Creator who dwells in every creature. Such worship brings that person to fulfillment."
  },
  {
    id: "elderly",
    icon: "🕯️",
    title: "Elderly",
    titleHindi: "वृद्ध जन",
    subtitle: "Finding peace and purpose in later years",
    color: "oklch(0.56 0.16 230)",
    verse: "BG 8.5 — Anyone who, at the end of life, quits his body remembering Me alone at once attains My nature. Of this there is no doubt.",
    guidance: "Krishna says the final thought determines the next destination. Prepare your mind now — not in fear, but in love. The Antim Yaatra section guides you through this sacred passage. Your years of experience are a treasure. Teach what you know. Share your stories. Dharma is restored one generation at a time.",
    practices: [
      "Recite the Vishnu Sahasranama daily — all 1000 names",
      "Prepare your spiritual will in the Antim Yaatra section",
      "Chant Hare Krishna 108 times each morning",
      "Share one dharmic story from your life with a young person this week"
    ],
    verse2: "BG 2.20 — The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval."
  },
  {
    id: "grieving",
    icon: "💧",
    title: "Grieving",
    titleHindi: "शोक में",
    subtitle: "After loss of a loved one",
    color: "oklch(0.52 0.16 248)",
    verse: "BG 2.20 — The soul is never born nor dies. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.",
    guidance: "Your loved one is not gone — they have changed form. The Gita's deepest teaching is that the soul is eternal. Grieve — it is dharmic to grieve. But know this truth: what you loved never truly dies. Only the body returns to the five elements. The soul moves onward in Krishna's plan.",
    practices: [
      "Read BG Chapter 2 daily — the chapter of the eternal soul",
      "Perform Pind Daan or Shradh if applicable — visit Antim Yaatra",
      "Light a diya at dusk and speak to the departed",
      "Chant the Mahamrityunjaya Mantra 108 times for the soul"
    ],
    verse2: "BG 2.22 — As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones."
  },
  {
    id: "anxious",
    icon: "🌊",
    title: "Anxious",
    titleHindi: "चिंतित",
    subtitle: "When the mind won't rest",
    color: "oklch(0.58 0.22 210)",
    verse: "BG 6.5 — Let a man lift himself by his own self alone, and not let himself down; for the self alone is the friend of the self, and the self alone is the enemy of the self.",
    guidance: "Anxiety is the mind living in the future. Krishna's entire teaching is to return to the present action. Right now, in this moment, you are safe. Breathe. Chant one mantra. The mind given a mantra has something sacred to hold. You cannot be anxious and chanting at the same time.",
    practices: [
      "4-7-8 breathing — inhale 4 counts, hold 7, exhale 8",
      "Chant Hare Krishna 108 times on your digital mala",
      "Write one fear, fold the paper, and offer it to Krishna",
      "Nature walk at sunrise — no phone for 15 minutes"
    ],
    verse2: "BG 2.66 — There is no wisdom for the unsteady, and no meditation for the unsteady man. Without meditation there is no peace; without peace how can there be happiness?"
  },
  {
    id: "depressed",
    icon: "🌑",
    title: "Depressed",
    titleHindi: "अवसाद में",
    subtitle: "When darkness won't lift",
    color: "oklch(0.52 0.22 268)",
    verse: "BG 2.14 — Contact of senses with objects gives rise to cold and heat, pleasure and pain. They come and go; they are impermanent. Endure them, O Bharata.",
    guidance: "Arjuna too sat paralysed with grief at Kurukshetra. Krishna did not dismiss his pain — He sat beside him and spoke. Your darkness is not a weakness. It is the battlefield where your transformation begins. One step today: open the Gita to Chapter 2. Read just one verse.",
    practices: [
      "Daily 5-minute morning meditation — just sit and breathe",
      "Read BG Chapter 2 slowly — one verse per day",
      "One act of seva today — give something to someone",
      "Seek professional support alongside dharma practices"
    ],
    verse2: "BG 18.66 — Abandon all forms of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
  },
  {
    id: "seeker",
    icon: "🔍",
    title: "Seeker",
    titleHindi: "जिज्ञासु",
    subtitle: "Searching for truth and God",
    color: "oklch(0.62 0.22 54)",
    verse: "BG 4.40 — But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness. For the doubting soul there is happiness neither in this world nor in the next.",
    guidance: "Even Arjuna doubted. Doubt is the doorway to inquiry — and inquiry leads to knowledge. The seeker is the most beloved of God because they are not satisfied with surfaces. Krishna says: 'Come to me. Leave all other dharmas. I will make it clear.' The Library in this app holds 37 sacred texts — begin anywhere.",
    practices: [
      "Read Chapter 9 of the Gita — Raja Vidya, the king of all knowledge",
      "Spend one sunrise in complete silence and listen",
      "Ask the Krishna AI one sincere question",
      "Visit the Roadmap to Moksha — Ashtavakra Gita teachings"
    ],
    verse2: "BG 9.2 — This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion."
  },
  {
    id: "devotee",
    icon: "🙏",
    title: "Devotee",
    titleHindi: "भक्त",
    subtitle: "Deepening your relationship with Krishna",
    color: "oklch(0.60 0.26 32)",
    verse: "BG 12.8 — Fix your mind on Me alone. You will then live in Me always — of this there is no doubt. I am easily attained by the person who always remembers Me.",
    guidance: "Bhakti is not ritual — it is relationship. Krishna wants your love, not your performance. Talk to him like Meera did. Argue with him like Arjuna did. Surrender like Draupadi did when she called 'Govinda!' in her darkest moment. He always comes. He is here right now.",
    practices: [
      "Begin the Naam Jaap pathway — 108 names of Krishna daily",
      "Visit the Virtual Temple and offer a flower to Krishna",
      "Read the full Bhagavad Gita once every year",
      "Chant the Hare Krishna Maha Mantra 108 times each dawn"
    ],
    verse2: "BG 9.22 — For those who worship Me with devotion, meditating on My form, I carry what they lack and I preserve what they have."
  },
  {
    id: "warrior",
    icon: "⚔️",
    title: "Warrior",
    titleHindi: "योद्धा",
    subtitle: "Facing a great battle in life",
    color: "oklch(0.58 0.24 18)",
    verse: "BG 11.33 — Arise! Attain glory. Conquer your enemies and enjoy a flourishing kingdom. They have already been arranged to die by Me. You will simply be the instrument, O skilled archer.",
    guidance: "You are standing on your own Kurukshetra. Every great soul faced this moment — the moment when everything they loved seemed to be on the other side of what dharma demanded. Arjuna had to fight his own family. And he won because Krishna was in his chariot. Krishna is in yours too.",
    practices: [
      "Write your battle clearly — what is the exact challenge?",
      "Read My Kurukshetra section in this app and record your battle",
      "Chant the Hanuman Chalisa — all 40 chaupais — for strength",
      "Read BG Chapter 11 — Arjuna saw the cosmic form and feared nothing after"
    ],
    verse2: "BG 2.3 — Do not yield to unmanliness, O Partha. It does not become you. Shake off your faint-heartedness and arise, O conqueror of foes."
  },
  {
    id: "leader",
    icon: "🌟",
    title: "Leader",
    titleHindi: "नेता",
    subtitle: "Guiding others with responsibility",
    color: "oklch(0.65 0.28 52)",
    verse: "BG 3.21 — Whatever action a great man performs, common men follow in his footsteps. And whatever standards he sets by exemplary acts, all the world pursues.",
    guidance: "In the Gita, Krishna describes the ideal king and leader — one whose leadership creates wellbeing, not dependency. Who lifts people toward their own dharma, not toward the leader's ego. The world is desperate for dharmic leaders. You are being prepared. Lead by example, not by decree.",
    practices: [
      "Read BG Chapter 3 — the dharma of nishkama karma leadership",
      "Name three people you can lift toward their potential today",
      "Perform Dhanvantari puja for the health of those you lead",
      "Ask: Is my leadership creating strength or dependency in others?"
    ],
    verse2: "BG 4.11 — As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects, O son of Pritha."
  },
  {
    id: "healer",
    icon: "💚",
    title: "Healer",
    titleHindi: "उपचारक",
    subtitle: "Helping others while tending to yourself",
    color: "oklch(0.55 0.22 150)",
    verse: "BG 14.20 — The embodied being, having crossed over these three modes, is freed from birth, death, old age and their distresses and enjoys nectar even in this life.",
    guidance: "The Dhanvantari — the divine physician — is an avatar of Vishnu. Healing is not a profession, it is a form of seva. Every healer carries others' pain. Remember to give it to Krishna. Your capacity to heal comes directly from Brahman — you are the instrument, He is the source.",
    practices: [
      "Chant the Dhanvantari Mantra 108 times before any healing session",
      "Meditate on BG 2.17-24 — the eternal soul cannot truly be harmed",
      "Offer your healing work to Krishna — 'I am your instrument'",
      "Read BG Chapter 13 — body as field, soul as knower"
    ],
    verse2: "BG 6.17 — He who is regulated in his habits of eating, sleeping, recreation and work can mitigate all material pains by practicing the yoga system."
  },
  {
    id: "creator",
    icon: "🎨",
    title: "Creator / Artist",
    titleHindi: "कलाकार / सर्जक",
    subtitle: "Creating as an act of devotion",
    color: "oklch(0.60 0.24 290)",
    verse: "BG 10.41 — Whatever is magnificent, prosperous, or powerful — know that to be a manifestation of a fragment of My splendour.",
    guidance: "Krishna is the supreme artist. He created the entire universe as his leela — divine play. Every time you create something beautiful, true, or good — you participate in that leela. Art made as offering becomes sacred. Write, paint, sing, build, dance — not to be seen, but to say: 'This is my offering, Krishna.'",
    practices: [
      "Offer your creative work to Saraswati before beginning",
      "Chant Om Aim Saraswatyai Namah 108 times before creating",
      "Ask: Am I creating from ego or from genuine offering?",
      "Read BG Chapter 10 — Krishna's glory in all beautiful things"
    ],
    verse2: "BG 18.37 — That which is like poison at first but in the end is like nectar and which awakens one to self-realization is said to be happiness in the mode of goodness."
  },
  {
    id: "server",
    icon: "🤲",
    title: "Server / Seva Worker",
    titleHindi: "सेवक",
    subtitle: "Serving others as service to God",
    color: "oklch(0.56 0.20 172)",
    verse: "BG 18.46 — By performing his own work, one worships the Creator who dwells in every creature. Such worship brings that person to fulfillment.",
    guidance: "The greatest yoga is seva. When you serve a human being without expecting anything back, you are serving Krishna in that form. The Gita says God dwells in every creature. Every meal cooked with love for someone else is prasad. Every hand held in grief is darshan. You are touching God.",
    practices: [
      "Perform one anonymous act of service today — no one knows",
      "Chant Om Namo Bhagavate Vasudevaya 108 times in service",
      "Read BG Chapter 18 — the highest path of surrender and service",
      "Join a Satsang Circle to serve the dharma community"
    ],
    verse2: "BG 3.9 — Work done as a sacrifice for Vishnu has to be performed; otherwise work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction."
  },
  {
    id: "confused",
    icon: "🌀",
    title: "Confused",
    titleHindi: "असमंजस में",
    subtitle: "When right and wrong blur",
    color: "oklch(0.58 0.20 172)",
    verse: "BG 10.10 — To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me.",
    guidance: "The entire Bhagavad Gita was given in a moment of confusion. Arjuna could not see clearly. Krishna did not solve the problem for him — He illuminated the principle. When confused, return to the eternal question: What does my dharma demand of me here? Not what is convenient. What is right.",
    practices: [
      "Write both sides of the confusion clearly on paper",
      "Ask: What does dharma demand of me here — not what is easy?",
      "Fast on Ekadashi and meditate before deciding",
      "Read BG Chapter 18 — Krishna's final answers to Arjuna's confusion"
    ],
    verse2: "BG 4.42 — Therefore, with the sword of knowledge, cut asunder the doubt born of ignorance residing in your heart. Take refuge in yoga. Arise, O Bharata."
  }
];
function MannKiBaatPage() {
  const [selected, setSelected] = reactExports.useState(null);
  const [search, setSearch] = reactExports.useState("");
  const filtered = AFFILIATIONS.filter(
    (a) => search === "" || a.title.toLowerCase().includes(search.toLowerCase()) || a.subtitle.toLowerCase().includes(search.toLowerCase()) || a.titleHindi.toLowerCase().includes(search.toLowerCase())
  );
  const affiliation = selected !== null ? AFFILIATIONS[selected] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto pb-28", "data-ocid": "mann-ki-baat.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-center pt-6 pb-4 px-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-[10px] tracking-[0.35em] uppercase mb-1",
              style: { color: "oklch(0.68 0.26 210 / 0.88)" },
              children: "✦ मन की बात ✦"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display font-bold italic mb-1",
              style: {
                fontSize: "clamp(1.4rem, 5.5vw, 2rem)",
                color: "oklch(0.94 0.36 54)",
                textShadow: "0 0 28px oklch(0.82 0.34 54 / 0.6)"
              },
              children: "Mann Ki Baat"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs italic",
              style: { color: "oklch(0.75 0.18 54 / 0.85)" },
              children: "Krishna's guidance for 18 sacred life roles — select yours"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-[10px] italic mt-2",
              style: { color: "oklch(0.62 0.22 52 / 0.75)" },
              children: '"तस्मात्त्वमुत्तिष्ठ यशो लभस्व" — Therefore, arise and win glory — BG 11.33'
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 mx-3 rounded-xl px-4 py-3 flex flex-wrap items-center justify-center gap-3",
              style: {
                background: "oklch(0.15 0.06 38 / 0.75)",
                border: "1.5px solid oklch(0.72 0.28 52 / 0.38)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-[10px] italic",
                    style: { color: "oklch(0.72 0.16 54 / 0.80)" },
                    children: "✦ Continue your journey:"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/guidance",
                    "data-ocid": "mann-ki-baat.link-chatbot",
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-body font-semibold transition-all duration-200 active:scale-95",
                    style: {
                      background: "oklch(0.50 0.26 268 / 0.25)",
                      border: "1px solid oklch(0.55 0.24 268 / 0.45)",
                      color: "oklch(0.84 0.18 268)"
                    },
                    children: "💬 Talk to Krishna about this"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/mala",
                    "data-ocid": "mann-ki-baat.link-mala",
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-body font-semibold transition-all duration-200 active:scale-95",
                    style: {
                      background: "oklch(0.58 0.26 38 / 0.25)",
                      border: "1px solid oklch(0.62 0.24 38 / 0.45)",
                      color: "oklch(0.84 0.18 48)"
                    },
                    children: "📿 Begin your Mala Jaap"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/naam",
                    "data-ocid": "mann-ki-baat.link-naam",
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-body font-semibold transition-all duration-200 active:scale-95",
                    style: {
                      background: "oklch(0.62 0.28 52 / 0.25)",
                      border: "1px solid oklch(0.65 0.26 52 / 0.45)",
                      color: "oklch(0.84 0.18 54)"
                    },
                    children: "🕉️ Chant the Sacred Name"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: affiliation && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
        transition: { duration: 0.35 },
        className: "mx-3 mb-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl overflow-hidden",
            style: {
              background: "linear-gradient(160deg, oklch(0.18 0.08 46 / 0.96) 0%, oklch(0.14 0.06 38 / 0.96) 100%)",
              border: `2px solid ${affiliation.color}55`,
              boxShadow: `0 12px 40px ${affiliation.color}33`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-[3px]",
                  style: {
                    background: `linear-gradient(90deg, transparent, ${affiliation.color}, transparent)`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full",
                      style: {
                        background: `radial-gradient(circle, ${affiliation.color}33 0%, transparent 70%)`,
                        border: `1.5px solid ${affiliation.color}55`
                      },
                      children: affiliation.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-base font-bold italic",
                        style: { color: "oklch(0.95 0.30 54)" },
                        children: affiliation.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-[11px] italic",
                        style: { color: "oklch(0.72 0.18 54 / 0.80)" },
                        children: [
                          affiliation.titleHindi,
                          " · ",
                          affiliation.subtitle
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelected(null),
                      "data-ocid": "mann-ki-baat.close_button",
                      className: "w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-200",
                      style: {
                        background: "rgba(218,165,32,0.15)",
                        border: "1px solid oklch(0.72 0.28 52 / 0.40)",
                        color: "oklch(0.82 0.28 52)"
                      },
                      children: "✕"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-lg p-3 mb-3",
                    style: {
                      background: `${affiliation.color}15`,
                      border: `1px solid ${affiliation.color}33`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-[10px] italic leading-relaxed",
                        style: { color: "oklch(0.88 0.14 60 / 0.90)" },
                        children: [
                          "📖 ",
                          affiliation.verse
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[11px] italic leading-relaxed mb-4",
                    style: { color: "oklch(0.86 0.10 60 / 0.88)" },
                    children: affiliation.guidance
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-[11px] font-bold mb-2",
                      style: { color: affiliation.color },
                      children: "✦ Steps you can take today:"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: affiliation.practices.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "font-display text-[10px] font-bold flex-shrink-0 mt-0.5",
                            style: { color: affiliation.color },
                            children: [
                              i + 1,
                              "."
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-[11px] italic",
                            style: { color: "oklch(0.84 0.10 60 / 0.85)" },
                            children: p
                          }
                        )
                      ]
                    },
                    p.slice(0, 20)
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-lg p-3 text-center mb-4",
                    style: {
                      background: "rgba(218,165,32,0.08)",
                      border: "1px solid oklch(0.72 0.28 52 / 0.30)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-body text-[10px] italic leading-relaxed",
                        style: { color: "oklch(0.84 0.20 54 / 0.90)" },
                        children: [
                          "🙏 ",
                          affiliation.verse2
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/guidance",
                      "data-ocid": "mann-ki-baat.detail-chatbot-link",
                      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-body font-semibold transition-all duration-200 active:scale-95",
                      style: {
                        background: "oklch(0.50 0.26 268 / 0.20)",
                        border: "1px solid oklch(0.55 0.24 268 / 0.40)",
                        color: "oklch(0.80 0.16 268)"
                      },
                      children: "💬 Talk to Krishna about this"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/mala",
                      "data-ocid": "mann-ki-baat.detail-mala-link",
                      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-body font-semibold transition-all duration-200 active:scale-95",
                      style: {
                        background: "oklch(0.58 0.26 38 / 0.20)",
                        border: "1px solid oklch(0.62 0.24 38 / 0.40)",
                        color: "oklch(0.80 0.16 48)"
                      },
                      children: "📿 Begin Mala Jaap"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/naam",
                      "data-ocid": "mann-ki-baat.detail-naam-link",
                      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-body font-semibold transition-all duration-200 active:scale-95",
                      style: {
                        background: "oklch(0.62 0.28 52 / 0.20)",
                        border: "1px solid oklch(0.65 0.26 52 / 0.40)",
                        color: "oklch(0.80 0.16 54)"
                      },
                      children: "🕉️ Chant the Sacred Name"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      },
      `detail-${selected}`
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Search your role or situation...",
        "data-ocid": "mann-ki-baat.search_input",
        className: "w-full px-4 py-2.5 text-sm font-body italic rounded-xl outline-none transition-all duration-200",
        style: {
          background: "rgba(8,5,22,0.72)",
          border: "1.5px solid oklch(0.72 0.28 52 / 0.45)",
          color: "oklch(0.90 0.10 60)"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "px-3 grid grid-cols-3 gap-2",
        "data-ocid": "mann-ki-baat.list",
        children: filtered.map((item, i) => {
          const idx = AFFILIATIONS.indexOf(item);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.04, duration: 0.25 },
              onClick: () => {
                setSelected(idx);
                setSearch("");
              },
              "data-ocid": `mann-ki-baat.item.${i + 1}`,
              className: "relative text-center rounded-xl p-3 transition-all duration-200 active:scale-95",
              style: {
                background: selected === idx ? `linear-gradient(135deg, ${item.color}55 0%, ${item.color}33 100%)` : "rgba(8,5,22,0.70)",
                border: selected === idx ? `1.5px solid ${item.color}66` : "1.5px solid oklch(0.72 0.28 52 / 0.35)",
                boxShadow: selected === idx ? `0 4px 14px ${item.color}33` : "none",
                minHeight: "88px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-1", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-[9.5px] font-bold italic leading-tight",
                    style: { color: "oklch(0.94 0.24 54)" },
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-[8px] italic mt-0.5 leading-tight",
                    style: { color: "oklch(0.68 0.14 54 / 0.75)" },
                    children: item.titleHindi
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center",
                    style: {
                      background: `${item.color}22`,
                      border: `1px solid ${item.color}44`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body",
                        style: { fontSize: "6px", color: "oklch(0.85 0.10 60)" },
                        children: AFFILIATIONS.indexOf(item) + 1
                      }
                    )
                  }
                )
              ]
            },
            item.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.8 },
        className: "text-center font-body text-[10px] italic mt-6 px-6",
        style: { color: "oklch(0.62 0.16 54 / 0.70)" },
        children: '✦ "The charioteer does not win the battle. Arjuna wins the battle. Krishna simply makes sure Arjuna never fights alone." ✦'
      }
    )
  ] });
}
export {
  MannKiBaatPage
};
