import { g as useTTS, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-CodWPqWB.js";
const FEARS = [
  {
    id: "death",
    label: "Fear of Death",
    sanskritName: "मृत्यु-भय",
    symbol: "🌒",
    nature: "This fear arises from identifying the self with the body. But your true nature, Arjun, is the soul — unborn, eternal, beyond all cutting, burning, or destruction.",
    verses: [
      {
        ref: "BG 2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः",
        translation: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being."
      },
      {
        ref: "BG 2.22",
        sanskrit: "वासांसि जीर्णानि यथा विहाय",
        translation: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones."
      },
      {
        ref: "BG 8.5",
        sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्",
        translation: "Whoever, at the end of life, quits the body remembering Me alone — reaches My nature. Of this there is no doubt."
      }
    ],
    questions: [
      "If the soul cannot die, what exactly are you afraid of losing?",
      "Can you name one thing about you that existed before your body and will exist after it?",
      "If Krishna promises he receives every soul that remembers him, what do you feel right now?"
    ],
    mantra: "Om Namo Narayanaya — I am eternal, I am the deathless soul, I am beyond all fear",
    krishnaClose: "BG 2.20 — You are not the body, Arjun. You never were. This 'death' you fear is just a change of garment for an eternal soul."
  },
  {
    id: "poverty",
    label: "Fear of Poverty",
    sanskritName: "दारिद्र्य-भय",
    symbol: "💰",
    nature: "This fear comes from believing you must provide everything through your own effort alone. But Krishna personally carries what you lack.",
    verses: [
      {
        ref: "BG 9.22",
        sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते",
        translation: "To those who worship Me with devotion, meditating on My transcendental form, I carry what they lack and preserve what they have."
      },
      {
        ref: "BG 3.9",
        sanskrit: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः",
        translation: "Work done for Krishna's sake is liberation; all other work is bondage. Act rightly and release the fruit."
      },
      {
        ref: "BG 18.57",
        sanskrit: "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः",
        translation: "Work always under My protection, and in My consciousness. Be fully aware of Me. Always depend on Me."
      }
    ],
    questions: [
      "Have you ever acted rightly and gone completely unprotected?",
      "What would you do differently today if you truly believed Krishna was personally carrying your needs?",
      "What is the difference between trusting your effort and trusting Krishna's promise?"
    ],
    mantra: "Hari Om — Krishna carries what I lack, I release fear and trust the divine provider",
    krishnaClose: "BG 9.22 — I carry what you lack. These are not comforting words, Arjun. This is my direct promise."
  },
  {
    id: "rejection",
    label: "Fear of Rejection",
    sanskritName: "अस्वीकृति-भय",
    symbol: "💔",
    nature: "You fear being unloved, unwanted, abandoned. But there is one who has never abandoned you — not once, not in this life, not in any life.",
    verses: [
      {
        ref: "BG 18.65",
        sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु",
        translation: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. You will come to Me without fail. I promise you this."
      },
      {
        ref: "BG 6.30",
        sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति",
        translation: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is that person ever lost to Me."
      },
      {
        ref: "BG 7.17",
        sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते",
        translation: "Of these, the wise one who is always engaged in pure devotional service is the best. For I am very dear to him, and he is very dear to Me."
      }
    ],
    questions: [
      "If Krishna says you are dear to him, whose rejection are you truly afraid of?",
      "Can human approval ever give what divine love already gives you?",
      "What would you do today if you knew Krishna found you perfectly acceptable, right now, exactly as you are?"
    ],
    mantra: "Hare Krishna — I am loved by the eternal, I need not fear the temporary",
    krishnaClose: "BG 6.30 — I am never lost to one who seeks me. You are never abandoned, Arjun. Not by me."
  },
  {
    id: "failure",
    label: "Fear of Failure",
    sanskritName: "विफलता-भय",
    symbol: "⚔️",
    nature: "This fear comes from attaching your identity to outcomes. But Krishna says: perform right action, release the result. Failure in dharma is impossible.",
    verses: [
      {
        ref: "BG 2.3",
        sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते",
        translation: "Do not yield to this weakness, O Arjun. It does not become you. Rise up and perform your sacred duty."
      },
      {
        ref: "BG 18.48",
        sanskrit: "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्",
        translation: "One should not abandon duties born of one's nature even if such duties have faults, just as fire is not abandoned despite being accompanied by smoke."
      },
      {
        ref: "BG 18.57",
        sanskrit: "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः",
        translation: "Perform every action for My sake. By My grace you will overcome all obstacles."
      }
    ],
    questions: [
      "If you offered this action to Krishna and acted with full effort, can it truly be called failure?",
      "What is the worst that can actually happen, and is that worse than not trying?",
      "Who defines failure — the world, or Krishna?"
    ],
    mantra: "Om Kleem Krishnaya — I act with full effort and offer all results to Krishna",
    krishnaClose: "BG 18.48 — Arise, Arjun. Act. I will carry the result. You are responsible only for the right effort."
  },
  {
    id: "loneliness",
    label: "Fear of Loneliness",
    sanskritName: "एकाकिता-भय",
    symbol: "🌑",
    nature: "You fear that no one is with you. But there is one who is in your heart at every moment — present before you breathe, present after you sleep.",
    verses: [
      {
        ref: "BG 6.30",
        sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति",
        translation: "For one who sees Me everywhere, I am never lost nor is that person ever lost to Me."
      },
      {
        ref: "BG 9.22",
        sanskrit: "तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्",
        translation: "For those who are constantly devoted and who always remember Me with love, I carry what they lack and I preserve what they have."
      },
      {
        ref: "BG 18.65",
        sanskrit: "मन्मना भव मद्भक्तो",
        translation: "Think of Me, become My devotee — you will come to Me without fail. This I promise you."
      }
    ],
    questions: [
      "Can you feel, right now, even the faintest sense that something is present with you?",
      "What would change if you treated Krishna as a companion walking beside you today?",
      "Has there ever been a single moment in your life when you were truly, completely alone?"
    ],
    mantra: "Hare Krishna Hare Krishna — I am never alone, Krishna is always present",
    krishnaClose: "BG 6.30 — I see you. I am here. You have never once been alone, Arjun."
  },
  {
    id: "pain",
    label: "Fear of Pain & Illness",
    sanskritName: "पीड़ा-भय",
    symbol: "🔥",
    nature: "Pain belongs to the body. The soul that you truly are cannot be touched by any illness or suffering in the world.",
    verses: [
      {
        ref: "BG 2.14",
        sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः",
        translation: "The sensations of heat and cold, pleasure and pain — these come and go like winter and summer. Endure them, for they are temporary."
      },
      {
        ref: "BG 9.22",
        sanskrit: "योगक्षेमं वहाम्यहम्",
        translation: "I personally carry what you lack — including the strength to endure."
      },
      {
        ref: "BG 2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्",
        translation: "The soul is never born, never dies — it cannot be hurt, wetted, burned, or dried."
      }
    ],
    questions: [
      "The pain you feel — is it happening to the real you or to your body?",
      "Has every painful thing in your past eventually passed?",
      "Can you find even a small part of yourself that is watching the pain rather than being the pain?"
    ],
    mantra: "Om Namah Shivaya — I am the witness, I am beyond pain, I am the eternal soul",
    krishnaClose: "BG 2.14 — This too shall pass, Arjun. Everything that has a beginning has an end. You, the soul, have no beginning and no end."
  },
  {
    id: "judgment",
    label: "Fear of Judgment",
    sanskritName: "निर्णय-भय",
    symbol: "👁️",
    nature: "You fear what others will think. But Krishna says he is unaffected by action and result — and you, as his devotee, need not be defined by any human opinion.",
    verses: [
      {
        ref: "BG 4.14",
        sanskrit: "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा",
        translation: "Action does not taint Me, nor do I desire the fruits of action. One who knows this truth is also not bound."
      },
      {
        ref: "BG 2.47",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
        translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
      },
      {
        ref: "BG 7.17",
        sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते",
        translation: "The wise one who worships Me with pure devotion is very dear to Me."
      }
    ],
    questions: [
      "Whose opinion matters more — a thousand humans who will be gone, or the eternal Krishna who is always present?",
      "If you acted with complete dharma, what judgment would truly matter?",
      "What would you do today if you were completely free from the fear of what others think?"
    ],
    mantra: "Om Krishnaya Namaha — I act for Krishna alone, I am free from human judgment",
    krishnaClose: "BG 2.47 — Act rightly, Arjun. The only judgment that matters is from the one who sees everything."
  },
  {
    id: "betrayal",
    label: "Fear of Betrayal",
    sanskritName: "विश्वासघात-भय",
    symbol: "🗡️",
    nature: "You have been hurt before. But there is one who will never betray you — who gave you his word on the Kurukshetra battlefield and has kept it ever since.",
    verses: [
      {
        ref: "BG 18.65",
        sanskrit: "मन्मना भव मद्भक्तो",
        translation: "Think of Me, become My devotee — you will come to Me without fail. I promise you this."
      },
      {
        ref: "BG 4.11",
        sanskrit: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्",
        translation: "As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects."
      },
      {
        ref: "BG 9.22",
        sanskrit: "तेषां नित्याभियुक्तानां",
        translation: "For those always devoted, I carry what they lack and preserve what they have."
      }
    ],
    questions: [
      "Can the betrayal of a temporary person destroy what an eternal being has promised you?",
      "What has Krishna never broken that you can hold onto right now?",
      "Is it possible to trust someone again — if they have never once failed you?"
    ],
    mantra: "Hare Krishna — I place my trust in the one who never betrays",
    krishnaClose: "BG 18.65 — I have never betrayed you, Arjun. I never will. My word is eternal."
  },
  {
    id: "suffering",
    label: "Fear of Suffering",
    sanskritName: "दुःख-भय",
    symbol: "🌊",
    nature: "Suffering feels endless from inside it. But Krishna shows us it is temporary, purposeful, and transformative — the forge that creates a dharmic soul.",
    verses: [
      {
        ref: "BG 2.14",
        sanskrit: "तांस्तितिक्षस्व भारत",
        translation: "Bear them patiently, O Arjuna — pleasure and pain come and go like seasons."
      },
      {
        ref: "BG 9.22",
        sanskrit: "योगक्षेमं वहाम्यहम्",
        translation: "I carry what you lack. Your burden is known to me."
      },
      {
        ref: "BG 4.36",
        sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः",
        translation: "Even if you are considered the most sinful of all sinners, you shall cross the ocean of miseries by the boat of knowledge."
      }
    ],
    questions: [
      "Has your deepest suffering ever led you toward something meaningful or toward Krishna?",
      "What strength or wisdom do you have today that came from past suffering?",
      "Can you find one small space of peace even inside this suffering?"
    ],
    mantra: "Om Shanti Shanti Shanti — peace that passes all understanding, now",
    krishnaClose: "BG 4.36 — Even across the ocean of the greatest suffering, my boat of grace will carry you. Trust the boat, Arjun."
  },
  {
    id: "loss",
    label: "Fear of Loss",
    sanskritName: "क्षति-भय",
    symbol: "🍂",
    nature: "We fear losing what we love. But the soul of every being you love is eternal — nothing real can ever be lost.",
    verses: [
      {
        ref: "BG 2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्",
        translation: "The soul is never born nor does it die. It is eternal, unborn, ever-existing, primeval."
      },
      {
        ref: "BG 8.5",
        sanskrit: "अन्तकाले च मामेव स्मरन्",
        translation: "Whoever, at the end of life, remembers Me alone — reaches Me."
      },
      {
        ref: "BG 9.22",
        sanskrit: "योगक्षेमं वहाम्यहम्",
        translation: "I preserve what you have."
      }
    ],
    questions: [
      "What is it that you are truly afraid of losing — the body or the soul?",
      "If every soul you love returns to Krishna, is anything truly lost?",
      "What do you still have right now that you have not yet fully appreciated?"
    ],
    mantra: "Om Namo Bhagavate Vasudevaya — every soul returns to Krishna, nothing is lost",
    krishnaClose: "BG 9.22 — I preserve what you have. Even what appears lost is preserved in me."
  },
  {
    id: "aging",
    label: "Fear of Aging & Disability",
    sanskritName: "वृद्धावस्था-भय",
    symbol: "🌅",
    nature: "The body changes. But you are not the body. You were never young and you will never be old — the soul is timeless.",
    verses: [
      {
        ref: "BG 2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्",
        translation: "The soul is birthless, eternal, ever-existing, undying, and primeval."
      },
      {
        ref: "BG 2.22",
        sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि",
        translation: "As a person puts on new garments, the soul accepts new material bodies — and the old ones are given up."
      },
      {
        ref: "BG 13.27",
        sanskrit: "समं पश्यन्हि सर्वत्र",
        translation: "One who sees the supreme Lord equally everywhere, in every body, does not degrade."
      }
    ],
    questions: [
      "If you are not the body, what exactly is aging?",
      "What has grown wiser, deeper, and more beautiful in you as the body has aged?",
      "Can you greet the changing body as a garment — and feel the steady presence of the soul beneath?"
    ],
    mantra: "Aham Brahmasmi — I am the eternal Brahman, not this changing form",
    krishnaClose: "BG 2.22 — The garment is old, Arjun. But the one wearing it is eternal and unchanging."
  },
  {
    id: "unknown",
    label: "Fear of the Unknown",
    sanskritName: "अज्ञात-भय",
    symbol: "🌌",
    nature: "The unknown is simply what Krishna knows and you do not yet. But he holds it — and he has promised to guide you through every step.",
    verses: [
      {
        ref: "BG 9.2",
        sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्",
        translation: "This knowledge is the king of all knowledge, the most sacred, the best. It grants direct experience and is eternal."
      },
      {
        ref: "BG 18.66",
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
        translation: "Abandon all varieties of dharmas and surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear."
      },
      {
        ref: "BG 6.30",
        sanskrit: "यो मां पश्यति सर्वत्र",
        translation: "One who sees Me everywhere — I am never lost to that person."
      }
    ],
    questions: [
      "Is there any unknown that Krishna does not already know?",
      "What is one time in your past when the unknown turned out to be exactly what you needed?",
      "Can you take one step forward, trusting that Krishna knows what is around the corner?"
    ],
    mantra: "Sarva Mangala Mangalye — may all that is unknown be known through Krishna's grace",
    krishnaClose: "BG 18.66 — Surrender to me, Arjun. I know everything ahead. You only need to know one thing: I am with you."
  },
  {
    id: "gods-absence",
    label: "Fear of God's Absence",
    sanskritName: "ईश्वर-विरह-भय",
    symbol: "🕯️",
    nature: "Sometimes it feels as if Krishna is silent, absent, or indifferent. This feeling is not reality — it is the cloud that hides the sun. The sun has not moved.",
    verses: [
      {
        ref: "BG 6.30",
        sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति",
        translation: "I am never lost to one who sees me everywhere — and that person is never lost to me."
      },
      {
        ref: "BG 9.22",
        sanskrit: "तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्",
        translation: "For those always devoted, I carry what they lack."
      },
      {
        ref: "BG 18.65",
        sanskrit: "मन्मना भव मद्भक्तो",
        translation: "Think of Me — you will come to Me without fail. I promise you."
      }
    ],
    questions: [
      "Is it possible that Krishna is present but the noise of fear is drowning out the presence?",
      "Have you ever, in a quiet moment, felt something that felt like divine love?",
      "What would you do right now if you were absolutely certain Krishna was watching — because he is?"
    ],
    mantra: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare — the name itself is the presence",
    krishnaClose: "BG 6.30 — I have not gone anywhere, Arjun. Open your eyes — I am here. I was always here."
  },
  {
    id: "purposelessness",
    label: "Fear of Purposelessness",
    sanskritName: "निरर्थकता-भय",
    symbol: "🧭",
    nature: "You fear your life has no meaning. But Krishna says every soul has a specific dharma — a purpose placed in them before they were born.",
    verses: [
      {
        ref: "BG 3.35",
        sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्",
        translation: "It is better to do one's own duty, though imperfectly, than to do another's duty, though perfectly."
      },
      {
        ref: "BG 18.45",
        sanskrit: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः",
        translation: "By devotion to one's natural work, a person can attain the highest perfection."
      },
      {
        ref: "BG 3.16",
        sanskrit: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः",
        translation: "One who does not follow this ordained duty lives in vain."
      }
    ],
    questions: [
      "If you had only one year to live, what would you do that would feel most true to who you are?",
      "What do you do naturally that seems to help, heal, or inspire others?",
      "What is one small action you could take today that aligns with your deepest sense of purpose?"
    ],
    mantra: "Om Krishnaya Dharmapataye Namaha — I walk my dharma, my purpose unfolds",
    krishnaClose: "BG 3.35 — Your dharma is inside you, Arjun. I placed it there. Find it, and live it fully."
  },
  {
    id: "karma",
    label: "Fear of Karma & Past Sins",
    sanskritName: "कर्म-भय",
    symbol: "⚖️",
    nature: "You fear your past has condemned you. But Krishna's grace is greater than any karma — one act of true surrender dissolves all past accumulations.",
    verses: [
      {
        ref: "BG 4.36",
        sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः",
        translation: "Even if you are the most sinful of all sinners, you shall cross the ocean of all sin with the boat of knowledge."
      },
      {
        ref: "BG 18.66",
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
        translation: "Surrender to Me alone — I shall deliver you from all sins. Do not grieve."
      },
      {
        ref: "BG 9.22",
        sanskrit: "तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्",
        translation: "For those always devoted, I carry what they lack."
      }
    ],
    questions: [
      "If Krishna can deliver the greatest sinners, can he not deliver you?",
      "What would you do differently from this moment if you truly believed your karma slate was clean?",
      "What is one act of goodness you can do today to begin the new karma?"
    ],
    mantra: "Hare Krishna — Krishna's grace dissolves all karma, I am free",
    krishnaClose: "BG 18.66 — Surrender to me, Arjun. All your sins. All your past. Give it to me. I shall deliver you. Do not grieve."
  },
  {
    id: "loved-ones-death",
    label: "Fear of Loved Ones Dying",
    sanskritName: "प्रियजन-वियोग-भय",
    symbol: "🌹",
    nature: "The grief of losing someone you love is real. But the soul of every being you love is eternal, protected, and held by Krishna himself.",
    verses: [
      {
        ref: "BG 2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्",
        translation: "The soul is never born nor does it die. It is eternal, undying, primeval."
      },
      {
        ref: "BG 2.22",
        sanskrit: "वासांसि जीर्णानि यथा विहाय",
        translation: "As a person puts on new garments, the soul similarly accepts new bodies."
      },
      {
        ref: "BG 8.5",
        sanskrit: "अन्तकाले च मामेव स्मरन्",
        translation: "Whoever remembers Me at the end of life reaches Me without doubt."
      }
    ],
    questions: [
      "The soul of those you love — where does it go when it leaves the body?",
      "If every soul returns to Krishna, is separation truly permanent?",
      "What would you want to say to them today, while you still can?"
    ],
    mantra: "Om Namo Narayanaya — every soul is held safely in Krishna's eternal embrace",
    krishnaClose: "BG 8.5 — Every soul that remembers me returns to me. Those you love are held in me. You will be reunited."
  },
  {
    id: "violence",
    label: "Fear of Violence & War",
    sanskritName: "हिंसा-भय",
    symbol: "🛡️",
    nature: "You fear violence, harm, the destruction of the world. But Arjun himself stood on the greatest battlefield and was carried through by Krishna's presence.",
    verses: [
      {
        ref: "BG 2.3",
        sanskrit: "क्लैब्यं मा स्म गमः पार्थ",
        translation: "Do not yield to weakness, Arjun. It does not become you. Rise up and perform your duty."
      },
      {
        ref: "BG 4.8",
        sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्",
        translation: "To deliver the pious and to annihilate the wicked, I appear in every age."
      },
      {
        ref: "BG 16.3",
        sanskrit: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः",
        translation: "Fearlessness, purification of one's existence, cultivation of spiritual knowledge — these are divine qualities."
      }
    ],
    questions: [
      "What protection have you already received in your life that you haven't fully acknowledged?",
      "If Krishna says he descends to protect the righteous in every age, does that change how you see this fear?",
      "What is one act of courage you could take today despite this fear?"
    ],
    mantra: "Om Dum Durgayai Namaha — the divine protection surrounds me in all directions",
    krishnaClose: "BG 4.8 — I appear whenever dharma falls. I protect those who turn to me. Turn to me, Arjun."
  },
  {
    id: "maya",
    label: "Fear of Maya & Illusion",
    sanskritName: "माया-भय",
    symbol: "🌀",
    nature: "You fear you are trapped in illusion and cannot find the real. But Krishna says: simply take refuge in him, and maya — which is his own energy — cannot touch you.",
    verses: [
      {
        ref: "BG 7.14",
        sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया",
        translation: "This divine energy of Mine — the three modes — is very difficult to overcome. But those who have surrendered unto Me can easily cross beyond it."
      },
      {
        ref: "BG 14.26",
        sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते",
        translation: "One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature."
      },
      {
        ref: "BG 18.66",
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
        translation: "Surrender unto Me alone — I shall deliver you from all sins. Do not fear."
      }
    ],
    questions: [
      "If maya is Krishna's energy, and Krishna has promised to deliver you — who is in control?",
      "Can you find one thing in your direct experience that does not change, ever?",
      "What would it feel like to simply let go of the need to escape illusion and trust Krishna to guide you through it?"
    ],
    mantra: "Om Namo Bhagavate Vasudevaya — I surrender to the reality beneath all illusion",
    krishnaClose: "BG 7.14 — Maya is mine, Arjun. And I am yours. Therefore maya cannot hold you. Simply come to me."
  }
];
function FearDissolutionPage() {
  const { speak, stop, isSpeaking } = useTTS();
  const [selectedFear, setSelectedFear] = reactExports.useState(null);
  const [step, setStep] = reactExports.useState("select");
  const [answers, setAnswers] = reactExports.useState(["", "", ""]);
  function startSession(fear) {
    setSelectedFear(fear);
    setStep("nature");
    setAnswers(["", "", ""]);
  }
  function nextStep() {
    const steps = [
      "select",
      "nature",
      "verses",
      "questions",
      "mantra",
      "closing"
    ];
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  }
  function speakText(text) {
    if (isSpeaking) {
      stop();
      return;
    }
    speak(text, "en", "male", 0.7);
  }
  const fearForSession = selectedFear;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", "data-ocid": "fear-dissolution.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornate-header mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "भय-मुक्ति" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "font-body text-base italic mt-3",
          style: { color: "oklch(0.45 0.12 46)" },
          children: "A 15-Minute Guided Session — Krishna Dissolves Your Fear"
        }
      )
    ] }),
    step === "select" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        "data-ocid": "fear-dissolution.select.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-5 mb-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-sm italic leading-relaxed",
                style: { color: "oklch(0.35 0.12 38)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display text-3xl block mb-2",
                      style: { color: "oklch(0.68 0.30 52)" },
                      children: "🙏"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"Tell me your fear, Arjun. Name it. I have been waiting to dissolve it."' })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic mt-2",
                style: { color: "oklch(0.50 0.12 46)" },
                children: "— Krishna, your charioteer"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm italic mb-5 text-center",
              style: { color: "oklch(0.45 0.12 46)" },
              children: "Select the fear you are carrying today — Krishna will guide you through a complete dissolution session"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: FEARS.map((fear, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              onClick: () => startSession(fear),
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.04 },
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              className: "manuscript-card p-4 text-left cursor-pointer transition-smooth",
              "data-ocid": `fear-dissolution.fear.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-2xl mb-2", children: fear.symbol }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "block font-display text-xs font-bold italic leading-tight",
                    style: { color: "oklch(0.22 0.10 32)" },
                    children: fear.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "block font-body text-[10px] italic mt-1",
                    style: { color: "oklch(0.52 0.14 46)" },
                    children: fear.sanskritName
                  }
                )
              ]
            },
            fear.id
          )) })
        ]
      }
    ),
    step !== "select" && fearForSession && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-6 overflow-x-auto pb-1", children: [
        "nature",
        "verses",
        "questions",
        "mantra",
        "closing"
      ].map((s, i) => {
        const steps = [
          "nature",
          "verses",
          "questions",
          "mantra",
          "closing"
        ];
        const currentIdx = steps.indexOf(step);
        const thisIdx = steps.indexOf(s);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-smooth",
              style: {
                background: thisIdx <= currentIdx ? "oklch(0.68 0.30 52)" : "oklch(0.80 0.10 58)",
                color: thisIdx <= currentIdx ? "white" : "oklch(0.48 0.10 46)"
              },
              children: i + 1
            }
          ),
          i < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-8 h-0.5 flex-shrink-0",
              style: {
                background: thisIdx < currentIdx ? "oklch(0.68 0.30 52)" : "oklch(0.80 0.10 58)"
              }
            }
          )
        ] }, s);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manuscript-card p-4 mb-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl flex-shrink-0", children: fearForSession.symbol }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-lg font-bold italic",
              style: { color: "oklch(0.22 0.10 32)" },
              children: fearForSession.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-body text-sm italic",
              style: { color: "oklch(0.52 0.14 46)" },
              children: fearForSession.sanskritName
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        step === "nature" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            className: "manuscript-card p-6",
            "data-ocid": "fear-dissolution.nature.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-4", children: "🔍 The True Nature of This Fear" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-sm font-bold italic mb-2",
                  style: { color: "oklch(0.48 0.22 52)" },
                  children: "Krishna says:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-base leading-relaxed mb-6",
                  style: { color: "oklch(0.22 0.10 32)", lineHeight: 2 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ornate-initial", children: '"' }),
                    fearForSession.nature
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => speakText(`Arjun, Krishna says: ${fearForSession.nature}`),
                    className: "wax-seal-btn-saffron wax-seal-btn text-sm flex-shrink-0",
                    "data-ocid": "fear-dissolution.nature.listen-button",
                    children: isSpeaking ? "⏸ Pause" : "🔊 Listen"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: nextStep,
                    className: "wax-seal-btn text-sm flex-1",
                    "data-ocid": "fear-dissolution.nature.next-button",
                    children: "Continue to Gita Verses →"
                  }
                )
              ] })
            ]
          },
          "nature"
        ),
        step === "verses" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            className: "space-y-4",
            "data-ocid": "fear-dissolution.verses.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: "📖 Three Verses That Dissolve This Fear" }),
              fearForSession.verses.map((verse, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "verse-display",
                  "data-ocid": `fear-dissolution.verse.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-2", children: verse.ref }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-sanskrit mb-3", children: verse.sanskrit }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "verse-translation italic", children: verse.translation }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => speakText(`${verse.ref}. ${verse.translation}`),
                        className: "mt-3 wax-seal-btn-saffron wax-seal-btn text-xs px-3 py-1.5",
                        "data-ocid": `fear-dissolution.verse.listen-button.${i + 1}`,
                        children: [
                          isSpeaking ? "⏸" : "🔊",
                          " ",
                          isSpeaking ? "Pause" : "Listen"
                        ]
                      }
                    )
                  ]
                },
                verse.ref
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: nextStep,
                  className: "wax-seal-btn w-full text-sm",
                  "data-ocid": "fear-dissolution.verses.next-button",
                  children: "Continue to Reflection Questions →"
                }
              )
            ]
          },
          "verses"
        ),
        step === "questions" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            "data-ocid": "fear-dissolution.questions.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-5", children: "💭 Reflection Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic mb-5 text-center",
                  style: { color: "oklch(0.45 0.12 46)" },
                  children: "Sit with each question. Let Krishna's words dissolve the fear's grip."
                }
              ),
              fearForSession.questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "manuscript-card p-5 mb-4",
                  "data-ocid": `fear-dissolution.question.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-display text-xs font-bold italic mb-3",
                        style: {
                          color: "oklch(0.58 0.24 52)",
                          letterSpacing: "0.06em"
                        },
                        children: [
                          "QUESTION ",
                          i + 1,
                          " OF ",
                          fearForSession.questions.length
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-base leading-relaxed mb-4 italic",
                        style: { color: "oklch(0.22 0.10 32)" },
                        children: q
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        className: "manuscript-input",
                        rows: 3,
                        placeholder: "Write your reflection here… (optional but powerful)",
                        value: answers[i],
                        onChange: (e) => setAnswers((prev) => {
                          const n = [...prev];
                          n[i] = e.target.value;
                          return n;
                        }),
                        "data-ocid": `fear-dissolution.question.textarea.${i + 1}`
                      }
                    )
                  ]
                },
                q
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: nextStep,
                  className: "wax-seal-btn w-full text-sm",
                  "data-ocid": "fear-dissolution.questions.next-button",
                  children: "Continue to Healing Mantra →"
                }
              )
            ]
          },
          "questions"
        ),
        step === "mantra" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            className: "manuscript-card p-7 text-center",
            "data-ocid": "fear-dissolution.mantra.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-6", children: "🕉️ Your Healing Mantra" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative mx-auto mb-6 p-6 rounded",
                  style: {
                    background: "radial-gradient(circle, oklch(0.92 0.08 68), oklch(0.86 0.10 62))",
                    border: "2px solid oklch(0.72 0.28 52 / 0.5)",
                    maxWidth: "420px"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display text-base font-bold italic leading-relaxed",
                      style: { color: "oklch(0.22 0.10 32)", lineHeight: 1.9 },
                      children: fearForSession.mantra
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm italic mb-6",
                  style: { color: "oklch(0.45 0.12 46)" },
                  children: "Repeat this mantra 18 times with full intention. Let each repetition dissolve the fear layer by layer."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => speakText(fearForSession.mantra),
                    className: "wax-seal-btn-saffron wax-seal-btn text-sm",
                    "data-ocid": "fear-dissolution.mantra.listen-button",
                    children: isSpeaking ? "⏸ Pause" : "🔊 Listen to Mantra"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: nextStep,
                    className: "wax-seal-btn text-sm",
                    "data-ocid": "fear-dissolution.mantra.next-button",
                    children: "Krishna's Closing Words →"
                  }
                )
              ] })
            ]
          },
          "mantra"
        ),
        step === "closing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            className: "manuscript-card p-7 text-center",
            "data-ocid": "fear-dissolution.closing.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display block text-5xl mb-4",
                  style: {
                    color: "oklch(0.68 0.30 52)",
                    textShadow: "0 0 30px oklch(0.76 0.32 54 / 0.4)"
                  },
                  children: "🙏"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mb-5", children: "Krishna's Closing Affirmation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative p-6 rounded mb-6",
                  style: {
                    background: "linear-gradient(160deg, oklch(0.94 0.06 68), oklch(0.91 0.08 64))",
                    border: "2px solid oklch(0.72 0.28 52 / 0.45)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-base italic leading-loose",
                      style: { color: "oklch(0.22 0.10 32)", lineHeight: 2.1 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { children: [
                        '"This fear is maya, Arjun. Your true self — as declared in',
                        " ",
                        fearForSession.krishnaClose,
                        ' — cannot be touched by this. You are eternal. You are mine. And I am always with you."'
                      ] })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => speakText(
                      `Hare Krishna, Arjun. ${fearForSession.krishnaClose}. This fear is maya. Your true self cannot be touched by this. You are eternal. You are mine. And I am always with you.`
                    ),
                    className: "wax-seal-btn-saffron wax-seal-btn text-sm",
                    "data-ocid": "fear-dissolution.closing.listen-button",
                    children: isSpeaking ? "⏸ Pause" : "🔊 Listen to Krishna"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setStep("select");
                      setSelectedFear(null);
                    },
                    className: "wax-seal-btn text-sm",
                    "data-ocid": "fear-dissolution.closing.restart-button",
                    children: "Dissolve Another Fear"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mt-6",
                  style: { color: "oklch(0.48 0.12 46)" },
                  children: "Hare Krishna, Arjun. The session is complete. Return whenever fear arises — Krishna is always here."
                }
              )
            ]
          },
          "closing"
        )
      ] })
    ] })
  ] });
}
export {
  FearDissolutionPage
};
