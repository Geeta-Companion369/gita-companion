import { useBadges } from "@/hooks/use-badges";
import { usePoints } from "@/hooks/use-points";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── 18 Real Battle Strategies from Mahabharata ──────────────────────────────
const BATTLE_STRATEGIES_18 = [
  {
    number: 1,
    title: "Dharma First",
    sanskrit: "धर्मो रक्षति रक्षितः",
    lesson:
      "Always know WHY you are fighting before you pick up your bow. A battle without righteous purpose leads to defeat even in victory. Arjuna needed to understand dharma before he could act. So do you.",
    source: "Bhagavad Gita 2.31",
  },
  {
    number: 2,
    title: "Know Your Enemy's Weakness",
    sanskrit: "यो हि न व्यथयत्येते पुरुषं पुरुषर्षभ",
    lesson:
      "Drona's strategy was to identify the enemy's strongest warrior first. In life — know what truly threatens you before reacting. Karna's weakness was his armour. Identify yours and your opponent's before the battle begins.",
    source: "Mahabharata — Drona Parva",
  },
  {
    number: 3,
    title: "Guard Your Flanks — Have an Exit Strategy",
    sanskrit: "व्यूहं भित्त्वा प्रविष्टस्य",
    lesson:
      "Abhimanyu entered the Chakravyuha but had no exit strategy — and it cost him his life. Every plan needs both entry AND exit. In every major decision, know how you will come out, not just how you will go in.",
    source: "Mahabharata — Drona Parva, Abhimanyu Vadha",
  },
  {
    number: 4,
    title: "Choose the Right Charioteer",
    sanskrit: "सारथी सेवा सर्वस्य मूलम्",
    lesson:
      "The greatest asset in any battle is who guides you. Krishna as charioteer won Arjuna's war — not through weapons, but through wisdom. Choose your advisors, mentors, and guides with the utmost care. Wrong counsel is more dangerous than any enemy.",
    source: "Bhagavad Gita 18.73 — Arjuna surrenders to Krishna's guidance",
  },
  {
    number: 5,
    title: "Rest and Replenish",
    sanskrit: "युक्ताहारविहारस्य",
    lesson:
      "The Pandavas took rest nights between battles. Armies that do not rest collapse. Physical and mental rest is a war strategy, not weakness. A tired warrior makes fatal errors. Rest is preparation, not surrender.",
    source: "Bhagavad Gita 6.17",
  },
  {
    number: 6,
    title: "Divide and Conquer — Prioritize",
    sanskrit: "व्यूहस्य भेदनं श्रेयः",
    lesson:
      "Drona divided the Pandava army's attention with simultaneous attacks on multiple flanks. In life — do not fight all battles at once. Prioritize your single most important battle today. Scattered energy loses. Focused energy wins.",
    source: "Mahabharata — Drona Parva",
  },
  {
    number: 7,
    title: "The Power of Unity",
    sanskrit: "सहनाववतु सहनौ भुनक्तु",
    lesson:
      "The Pandavas won because five brothers trusted each other completely. One traitor weakens the whole formation. Build your inner circle with people whose dharma matches yours. Never underestimate the power of unity in your battles.",
    source: "Mahabharata — Sabha Parva, Pandava alliance",
  },
  {
    number: 8,
    title: "Silence Before Strike",
    sanskrit: "मौनं सर्वार्थ साधनम्",
    lesson:
      "Arjuna was silent and still before releasing every arrow. The greatest warriors think deeply before every major action. Silence is not inaction — it is the gathering of total force before release. Speak and act from stillness.",
    source: "Mahabharata — Arjuna's archery discipline",
  },
  {
    number: 9,
    title: "Use Dharma as Your Shield",
    sanskrit: "धर्मो रक्षति रक्षितः",
    lesson:
      "Yudhishthira's dharmic reputation protected him even in defeat. In the dice game he lost everything — yet his character remained intact. Never compromise your integrity under pressure. Your reputation for dharma is a shield no weapon can pierce.",
    source: "Mahabharata — Sabha Parva, Yudhishthira at dice",
  },
  {
    number: 10,
    title: "Detachment from Outcome",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    lesson:
      "Krishna's greatest strategic lesson: perform your duty perfectly and release all attachment to the result. Fear of losing causes you to lose. Act with 100% effort and 0% anxiety about the outcome. This is the formula for undefeatable performance.",
    source: "Bhagavad Gita 2.47",
  },
  {
    number: 11,
    title: "Recognize the Turning Point",
    sanskrit: "कालः सर्वस्य भेषजम्",
    lesson:
      "Karna's chariot wheel sinking was the turning point of the war. Arjuna recognized it and acted decisively. In every battle — there is one critical moment when the tide can turn. Train yourself to recognize that moment and act without hesitation.",
    source: "Mahabharata — Karna Parva",
  },
  {
    number: 12,
    title: "Sacrifice the Small to Save the Large",
    sanskrit: "अल्पस्य हेतोर्बहु हातुमिच्छन्",
    lesson:
      "Ghatotkacha was sacrificed to exhaust Karna's most powerful weapon — the Shakti weapon. This saved Arjuna for the decisive battle. Sometimes losing one engagement saves the entire war. Strategic sacrifice requires great wisdom and great courage.",
    source: "Mahabharata — Drona Parva, Ghatotkacha Vadha",
  },
  {
    number: 13,
    title: "Intelligence Over Brute Force",
    sanskrit: "बुद्धिर्बलवती नित्यं",
    lesson:
      "Shakuni used cunning and intelligence, not weapons, to bring down the Pandavas at dice. In life — know when brains defeat brawn. The most powerful weapon is the prepared, calm, strategic mind. Train your mind more than any muscle.",
    source: "Mahabharata — Sabha Parva, Shakuni's strategy",
  },
  {
    number: 14,
    title: "Master Your Weapons Before the Battle",
    sanskrit: "पूर्वं शस्त्रं पठेन्नित्यम्",
    lesson:
      "Arjuna was chosen because he mastered every weapon before going to battle. He did not arrive on Kurukshetra untrained. Be the most prepared person in the room before the critical moment arrives. Preparation IS strategy.",
    source: "Mahabharata — Adi Parva, Arjuna's training under Drona",
  },
  {
    number: 15,
    title: "Forgive but Remember",
    sanskrit: "क्षमा शस्त्रं करे यस्य",
    lesson:
      "Yudhishthira forgave enemies but remembered their tactics. Forgiveness does not mean forgetting — it means releasing the poison from your own heart while retaining the wisdom of the lesson. Compassion does not mean naivety.",
    source: "Mahabharata — Shanti Parva, Yudhishthira's wisdom",
  },
  {
    number: 16,
    title: "Know Which Vows Empower and Which Limit",
    sanskrit: "प्रतिज्ञा रक्ष्यते सदा",
    lesson:
      "Bhishma's vow of celibacy and loyalty to the throne made him invincible AND trapped him on the wrong side. Understand which commitments empower your dharma and which chain you to adharma. Sacred vows must serve the greater good.",
    source: "Mahabharata — Bhishma's vow, Bhishma Parva",
  },
  {
    number: 17,
    title: "Never Fight Alone — Build Your Army",
    sanskrit: "एको न कार्यं साधयेत्",
    lesson:
      "Krishna never let Arjuna stand alone on the battlefield — even when Arjuna stood alone in skill, Krishna stood beside him in wisdom. Build your support network before you need it. Identify your inner circle — your five Pandavas — now, not in the crisis.",
    source: "Bhagavad Gita 18.65 — Krishna's eternal promise",
  },
  {
    number: 18,
    title: "The Final Victory Is Inner",
    sanskrit: "विजेतव्यं मनो नित्यम्",
    lesson:
      "After Kurukshetra, Yudhishthira felt no joy in victory — because he understood the highest truth: the real enemy was never on the battlefield. The final battle is against ego, anger, and fear within yourself. Win that war, and all outer victories follow.",
    source: "Mahabharata — Stri Parva, Yudhishthira's lament after victory",
  },
] as const;

// ─── Battle categories ────────────────────────────────────────────────────────
const BATTLE_CATEGORIES = [
  {
    id: "fear",
    number: 1,
    sanskrit: "भय",
    name: "Fear",
    prompt: "I am paralyzed by fear",
    symbol: "⚔️",
    verses: ["BG 2.14", "BG 18.33", "BG 18.58"],
    strategy:
      "Fear is the shadow of the unreal cast upon the real. The soul you are cannot be threatened — only the ego trembles. Stand firm, Arjun. I give you unbreakable resolve. Look at me and remember: if I stand with you, what can stand against you?",
    teachings: [
      {
        ref: "BG 2.14",
        sanskrit:
          "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
        translation:
          "The contact of senses with sense objects gives rise to fleeting perceptions of happiness and distress. These come and go like winter and summer seasons. Bear them patiently, O Arjuna.",
        explanation:
          "This fear, however intense, is temporary. Like a passing season, it arose and it will pass. Your soul stands unshaken.",
      },
      {
        ref: "BG 18.33",
        sanskrit:
          "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।\nयोगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विका॥",
        translation:
          "The will which is unwavering through Yoga practice, which controls the activities of the mind, life force, and senses, is of the nature of goodness.",
        explanation:
          "I place unbreakable strength in you now. With each breath, feel that divine resolve enter your body.",
      },
      {
        ref: "BG 18.58",
        sanskrit:
          "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि।\nअथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि॥",
        translation:
          "If you become conscious of Me, you will pass over all obstacles by My grace.",
        explanation:
          "Surrender to me. By my grace alone, all fear dissolves. You do not face this alone — not for a single breath.",
      },
    ],
    steps: [
      "Sit still. Breathe deeply. Chant 'OM' three times — feel the vibration dispel fear.",
      "Name the fear precisely: what exactly are you afraid of losing or experiencing?",
      "Read BG 2.20 — remember: your soul is eternal and cannot be harmed by anything.",
      "Take the smallest possible action toward what you fear. Momentum heals paralysis.",
      "Offer the result to Krishna: 'This is your battle, not mine. I act; you decide the outcome.'",
    ],
  },
  {
    id: "grief",
    number: 2,
    sanskrit: "शोक",
    name: "Grief & Loss",
    prompt: "I cannot stop grieving",
    symbol: "🌊",
    verses: ["BG 2.20", "BG 2.19", "BG 8.5"],
    strategy:
      "Grief is love with nowhere to go. But the soul you grieve for has not gone — they have returned to the source from which they came. You will meet again. Weep for a moment, then rise. Eternal souls do not lose each other.",
    teachings: [
      {
        ref: "BG 2.20",
        sanskrit:
          "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
        translation:
          "For the soul there is never birth nor death. It is unborn, eternal, ever-existing and primeval. It is not slain when the body is slain.",
        explanation:
          "What you mourn has not perished. The soul is eternal — this is not loss, it is transformation into light.",
      },
      {
        ref: "BG 2.19",
        sanskrit:
          "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते॥",
        translation:
          "He who thinks that the soul kills, and he who thinks it is killed, are both ignorant. The soul neither kills nor can be killed.",
        explanation:
          "No death has truly occurred. This knowledge is your shield against grief's sharpest arrows.",
      },
      {
        ref: "BG 8.5",
        sanskrit:
          "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
        translation:
          "Whoever, at the time of death, remembers Me alone — reaches My abode. Of this there is no doubt.",
        explanation:
          "Those who remembered Krishna in their final moments have gone to the most sacred destination. They are safe.",
      },
    ],
    steps: [
      "Allow yourself to feel — grief is sacred, not weakness. Do not rush its passage.",
      "Light a diya and sit with your loved one's memory for 10 uninterrupted minutes.",
      "Read BG 2.17–2.25 aloud slowly — let each verse be a message from the departed.",
      "Write a letter to Krishna expressing your grief completely — hold nothing back.",
      "Do one act of seva in their honor each day. Their light lives on through your service.",
    ],
  },
  {
    id: "career",
    number: 3,
    sanskrit: "कर्म",
    name: "Career & Purpose",
    prompt: "I don't know my dharma at work",
    symbol: "🏹",
    verses: ["BG 3.35", "BG 18.45", "BG 2.47"],
    strategy:
      "Your svadharma — your unique duty — is calling, Arjun. Better your own imperfect path than another's perfect one. Act, give your absolute best, then surrender the result. This is Krishna's formula for lasting success and inner peace.",
    teachings: [
      {
        ref: "BG 3.35",
        sanskrit:
          "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
        translation:
          "It is better to perform one's own duties imperfectly than to master the duties of another. Even death in one's own duty is better; following another's path is dangerous.",
        explanation:
          "Stop comparing your path to others'. Your unique gift, however imperfect, is exactly what the world needs from you.",
      },
      {
        ref: "BG 18.45",
        sanskrit:
          "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु॥",
        translation:
          "By devoting oneself to one's own natural work, a person achieves perfection. Now hear how one finds such perfection.",
        explanation:
          "Mastery comes from doing your own work with full love — not from chasing what seems glamorous in others.",
      },
      {
        ref: "BG 2.47",
        sanskrit:
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        translation:
          "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
        explanation:
          "Focus 100% on the quality of your effort. The result is mine to give. This removes all anxiety from work.",
      },
    ],
    steps: [
      "List what you do that makes time disappear — that is dharma's signal to you.",
      "Dedicate your work today to Krishna before beginning — 'This is my offering to you.'",
      "Take one step toward aligned work this week, even if it's just 30 minutes of exploration.",
      "Study BG Chapter 3 (Karma Yoga) — one verse per day for 18 days.",
      "Trust the process: your dharma unfolds precisely when you act with sincerity.",
    ],
  },
  {
    id: "relationship",
    number: 4,
    sanskrit: "सम्बन्ध",
    name: "Relationship Conflict",
    prompt: "My relationships are breaking",
    symbol: "💔",
    verses: ["BG 3.20", "BG 7.8", "BG 12.13"],
    strategy:
      "All relationships are a form of yajna — sacred offering. What you give without expectation purifies both souls. See Krishna in the person before you — not with eyes, but with the heart — and the conflict begins to transform.",
    teachings: [
      {
        ref: "BG 12.13",
        sanskrit:
          "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
        translation:
          "One who is not envious but is a kind friend to all, who does not think himself a proprietor and is free from false ego, who is equal in happiness and distress, who is tolerant.",
        explanation:
          "This is the standard Krishna sets for relationships — not perfection, but loving presence without ego.",
      },
      {
        ref: "BG 7.8",
        sanskrit:
          "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः।\nप्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु॥",
        translation:
          "O son of Kunti, I am the taste of water, the light of the sun and the moon, the syllable Om in Vedic mantras.",
        explanation:
          "Krishna is present in every person you relate to. When you see the divine in them, conflict cannot remain.",
      },
      {
        ref: "BG 3.20",
        sanskrit:
          "कर्मणैव हि संसिद्धिमास्थिता जनकादयः।\nलोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि॥",
        translation:
          "Even kings like Janaka attained perfection through performance of prescribed duties alone. You should perform your duty.",
        explanation:
          "Act with integrity in every relationship regardless of how others behave. Your dharma does not depend on theirs.",
      },
    ],
    steps: [
      "Write down what you want from this relationship — then offer it as a gift, not a demand.",
      "Do something kind for this person today with zero expectation of acknowledgment.",
      "Identify your own ego's role in this conflict honestly. This takes great courage.",
      "Chant 'Om Namo Narayanaya' 108 times, visualizing this person's highest self.",
      "Give this relationship to Krishna completely. Say: 'I surrender this to you. Guide us.'",
    ],
  },
  {
    id: "illness",
    number: 5,
    sanskrit: "रोग",
    name: "Illness & Pain",
    prompt: "My body is suffering",
    symbol: "🕯️",
    verses: ["BG 2.14", "BG 2.20", "BG 9.22"],
    strategy:
      "The body is the vehicle, not the self. Your soul is beyond all pain. And I, Krishna, have promised to preserve what you have. Trust that promise. This body is in my care. Let me carry this burden with you.",
    teachings: [
      {
        ref: "BG 2.14",
        sanskrit:
          "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
        translation:
          "The contacts of senses with sense objects give rise to fleeting feelings of heat and cold, pleasure and pain. They come and go, being impermanent. Endure them, O Arjuna.",
        explanation:
          "This pain, however intense, is temporary. Your soul observes it without being consumed by it.",
      },
      {
        ref: "BG 9.22",
        sanskrit:
          "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        translation:
          "For those who worship Me with devotion, meditating on My form — I carry what they lack and preserve what they have.",
        explanation:
          "This is my promise to you. Your wellbeing is in my hands. Turn to me and I care for you completely.",
      },
      {
        ref: "BG 2.20",
        sanskrit:
          "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
        translation:
          "The soul is never born nor does it die. It is not slain when the body is slain.",
        explanation:
          "You are not your body. You are the eternal witness within it — untouched by pain.",
      },
    ],
    steps: [
      "Each morning: offer your body to Krishna — 'This body is your temple, not mine. Heal it.'",
      "Practice Nadi Shodhana (alternate nostril breathing) for 10 minutes daily.",
      "Listen to Vishnu Sahasranama or Maha Mrityunjaya — divine vibration heals deeply.",
      "Eat sattvic food — light, fresh, plant-based. Remove tamasic food from your diet.",
      "Surrender health worry to Krishna each night: 'This body is yours. I rest in your care.'",
    ],
  },
  {
    id: "betrayal",
    number: 6,
    sanskrit: "विश्वासघात",
    name: "Betrayal",
    prompt: "Someone I trusted has betrayed me",
    symbol: "🗡️",
    verses: ["BG 18.65", "BG 18.66", "BG 16.1"],
    strategy:
      "You trusted — and that is noble, not foolish. The one who betrayed you carries a heavy karma. Your role is not revenge but dharmic response: act rightly, release the result, and know that I — Krishna — am your ultimate, unbreakable trust.",
    teachings: [
      {
        ref: "BG 18.65",
        sanskrit:
          "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
        translation:
          "Always think of Me, become My devotee, worship Me. You will come to Me without fail. I promise this because you are My very dear friend.",
        explanation:
          "I, Krishna, will never betray you. I am the one relationship that is eternal and unconditional.",
      },
      {
        ref: "BG 18.66",
        sanskrit:
          "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        translation:
          "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all reactions. Do not fear.",
        explanation:
          "Surrender your hurt to me. I will carry it. You carry only your dharmic action forward.",
      },
      {
        ref: "BG 16.1",
        sanskrit:
          "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
        translation:
          "Fearlessness, purification of one's existence, cultivation of spiritual knowledge, charity, self-control — these belong to godly persons.",
        explanation:
          "Maintain your divine qualities regardless of how others behave. Your character is your unbreakable weapon.",
      },
    ],
    steps: [
      "Write down exactly what happened — do not hold it inside. Witnesses to truth matter.",
      "Identify what you truly lost: trust, time, a dream? Grieve it specifically and fully.",
      "Perform a small fire offering — even a candle: symbolically offer this wound to Krishna.",
      "Decide your dharmic action: what would pure integrity do here, without ego?",
      "Release this person's karma to Krishna. Your freedom lies entirely in releasing.",
    ],
  },
  {
    id: "anger",
    number: 7,
    sanskrit: "क्रोध",
    name: "Anger",
    prompt: "I am consumed by anger",
    symbol: "🔥",
    verses: ["BG 2.63", "BG 5.23", "BG 3.37"],
    strategy:
      "Anger is fire that burns the house it lives in. It begins with unfulfilled desire, clouds your wisdom, and destroys what you love most. I do not ask you to suppress it — I ask you to transform it into fuel for righteous, powerful action.",
    teachings: [
      {
        ref: "BG 2.63",
        sanskrit:
          "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
        translation:
          "From anger, complete delusion arises; from delusion, bewilderment of memory; when memory is bewildered, intelligence is lost; and when intelligence is lost, one falls down.",
        explanation:
          "This verse maps the destruction path of anger. Knowing the chain gives you the power to break it before it breaks you.",
      },
      {
        ref: "BG 5.23",
        sanskrit:
          "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्।\nकामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः॥",
        translation:
          "One who can tolerate the impulse of the senses and check the force of desire and anger is well situated and happy in this world.",
        explanation:
          "The one who can pause between the trigger and the reaction has mastered the battlefield of the mind.",
      },
      {
        ref: "BG 3.37",
        sanskrit:
          "काम एष क्रोध एष रजोगुणसमुद्भवः।\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम्॥",
        translation:
          "It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath — the all-devouring enemy of this world.",
        explanation:
          "Behind anger is unfulfilled desire. Address the desire beneath the anger — that is the real battle.",
      },
    ],
    steps: [
      "When anger rises: STOP. Count exactly 18 breaths before speaking or acting.",
      "Identify the desire that was not met — what did you really want that you didn't receive?",
      "Physical release: fast walk, surya namaskar, write furiously then burn the paper.",
      "Write a letter expressing the anger completely — hold nothing back. Then delete or burn it.",
      "Chant 'Om Shanti Shanti Shanti' 3 times — feel peace enter your body with each syllable.",
    ],
  },
  {
    id: "loneliness",
    number: 8,
    sanskrit: "एकाकीपन",
    name: "Loneliness",
    prompt: "I feel completely alone",
    symbol: "🌑",
    verses: ["BG 6.30", "BG 9.22", "BG 18.65"],
    strategy:
      "Arjun, you are never alone. I am in the light in your eyes, the breath in your body, the space between your thoughts. I am as close as your own heartbeat. You feel alone only when you forget me. Remember me now.",
    teachings: [
      {
        ref: "BG 6.30",
        sanskrit:
          "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
        translation:
          "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.",
        explanation:
          "When you see Krishna everywhere — in every face, tree, and moment — you are never alone again.",
      },
      {
        ref: "BG 9.22",
        sanskrit:
          "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        translation:
          "Those who worship Me with devotion — to them, I carry what they lack and preserve what they have.",
        explanation:
          "Your loneliness is a lack I have promised to carry. Let me fill what feels empty.",
      },
      {
        ref: "BG 18.65",
        sanskrit:
          "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
        translation:
          "Always think of Me, be devoted to Me, worship Me. You will come to Me. I promise this truly because you are dear to Me.",
        explanation:
          "You are dear to me, Arjun. Not sometimes — always. Not when you are perfect — always.",
      },
    ],
    steps: [
      "Sit quietly, close your eyes. Say aloud: 'Krishna, I know you are here with me right now.'",
      "Write in your journal: 'Who am I beyond all relationships?' Explore this question.",
      "Perform one act of pure kindness for a stranger today — connection begins with giving.",
      "Visit a temple or join the Satsang Circle in this app — your community awaits you.",
      "Practice feeling Krishna's presence constantly: 'I am never alone. Krishna walks with me.'",
    ],
  },
  {
    id: "doubt",
    number: 9,
    sanskrit: "सन्देह",
    name: "Doubt & Lost Faith",
    prompt: "I have lost faith",
    symbol: "🌫️",
    verses: ["BG 4.40", "BG 9.2", "BG 7.17"],
    strategy:
      "Doubt is the beginning of real faith, not its enemy. Arjuna himself doubted on the battlefield. He came to me with his doubt — and I answered every single question. Come to me with yours. I am not afraid of your questions.",
    teachings: [
      {
        ref: "BG 4.40",
        sanskrit:
          "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः॥",
        translation:
          "But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor in the next.",
        explanation:
          "Unresolved doubt consumes peace. Bring your doubts to Krishna honestly — he will answer each one.",
      },
      {
        ref: "BG 9.2",
        sanskrit:
          "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्।\nप्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्॥",
        translation:
          "This knowledge is the king of all knowledge, the most secret of all secrets. It is the purest knowledge and gives direct perception.",
        explanation:
          "The path of the Gita is joyful, direct, and everlasting. One small practice — and faith grows from lived experience.",
      },
      {
        ref: "BG 7.17",
        sanskrit:
          "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते।\nप्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः॥",
        translation:
          "Of these, the wise one who is in full knowledge in union with Me through one-pointed devotion is the best. I am very dear to him, and he is dear to Me.",
        explanation:
          "You don't need perfect faith — you need sincere turning. One step toward me makes you precious to me.",
      },
    ],
    steps: [
      "Write down your specific doubts — vague doubt is much harder to dissolve than named doubt.",
      "Read BG Chapter 4 (Knowledge) slowly — one verse per day for 18 days.",
      "Try one spiritual practice for 18 days without judgment — just observe what happens.",
      "Ask your doubt directly to Krishna through the guidance section — he will answer.",
      "Talk to someone whose faith you deeply respect — not to be convinced, but to be heard.",
    ],
  },
  {
    id: "injustice",
    number: 10,
    sanskrit: "अन्याय",
    name: "Injustice",
    prompt: "I face injustice I cannot fight",
    symbol: "⚖️",
    verses: ["BG 4.8", "BG 2.3", "BG 16.3"],
    strategy:
      "I arose on the battlefield to restore dharma when it was destroyed, Arjun. Injustice has always existed — and dharma has always overcome it. Your role: act with integrity, speak the truth, and trust that justice is the very nature of the universe.",
    teachings: [
      {
        ref: "BG 4.8",
        sanskrit:
          "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
        translation:
          "To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of dharma, I advent Myself millennium after millennium.",
        explanation:
          "Dharma always restores itself. Your injustice does not go unseen. I keep account of everything.",
      },
      {
        ref: "BG 2.3",
        sanskrit:
          "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
        translation:
          "O Partha, do not yield to this degrading impotence. It does not become you. Shake off your fainthearted ness and arise!",
        explanation:
          "Rise. Not in anger — but in dignified, fearless, dharmic action. Do not be crushed by injustice.",
      },
      {
        ref: "BG 16.3",
        sanskrit:
          "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता।\nभवन्ति सम्पदं दैवीमभिजातस्य भारत॥",
        translation:
          "Vigor, forgiveness, fortitude, cleanliness, bearing enmity toward none, and absence of conceit — these belong to godly persons.",
        explanation:
          "Your divine qualities are your unbreakable weapons. They outlast every injustice.",
      },
    ],
    steps: [
      "Document the injustice clearly and calmly — truth needs witnesses, not anger.",
      "Choose dharmic action: speak truth, seek rightful channels, do not retaliate wrongly.",
      "Practice forgiveness — not to excuse the wrong but to free yourself from its power over you.",
      "Chant BG 4.8 daily: Krishna arises for dharma — it will be restored in right time.",
      "Focus on your own dharmic excellence — the most powerful response to any injustice.",
    ],
  },
  {
    id: "addiction",
    number: 11,
    sanskrit: "व्यसन",
    name: "Addiction & Habits",
    prompt: "I am trapped by a habit",
    symbol: "⛓️",
    verses: ["BG 18.66", "BG 2.60", "BG 3.16"],
    strategy:
      "You are not the habit. You are the eternal soul watching it from within. The habit is a false master — I am your true lord. Surrender to me, and I will break every chain that binds you. One day at a time. One prayer at a time.",
    teachings: [
      {
        ref: "BG 2.60",
        sanskrit:
          "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः।\nइन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः॥",
        translation:
          "The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.",
        explanation:
          "Even the wise struggle with the senses. Your struggle does not make you weak — but don't stop fighting.",
      },
      {
        ref: "BG 3.16",
        sanskrit:
          "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥",
        translation:
          "O Arjuna, one who does not follow the cycle of sacrifice certainly lives a life full of sin. Living only for the satisfaction of the senses, such a person lives in vain.",
        explanation:
          "Life structured around sacred ritual — japa, seva, reading — leaves no space for the habit to return.",
      },
      {
        ref: "BG 18.66",
        sanskrit:
          "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        translation:
          "Abandon all varieties of dharma and just surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.",
        explanation:
          "Surrender this habit to me. I am stronger than it. My power to liberate exceeds your habit's power to bind.",
      },
    ],
    steps: [
      "Say aloud now: 'I am not this habit. I am the eternal soul. I choose freedom today.'",
      "Replace the habit moment with 108 naam writing — redirect the impulse immediately.",
      "Tell one trusted person — shame shrinks to nothing when spoken aloud in love.",
      "Fast from the habit for 18 days and mark each day as a sacred battle won.",
      "If you fall, rise immediately — each new moment is a completely fresh beginning with Krishna.",
    ],
  },
  {
    id: "failure",
    number: 12,
    sanskrit: "पराजय",
    name: "Failure",
    prompt: "I have failed badly",
    symbol: "🌱",
    verses: ["BG 2.3", "BG 18.48", "BG 18.57"],
    strategy:
      "The Gita was not given to a winner — it was given to a man who had completely fallen, Arjun. Failure in righteous action is impossible for the soul that acts with right intent. What the world calls failure is often a course correction from my hand. Rise.",
    teachings: [
      {
        ref: "BG 2.3",
        sanskrit:
          "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
        translation:
          "Do not yield to this degrading impotence. It does not become you. Shake off your faint-heartedness and arise!",
        explanation:
          "These were Krishna's first words to Arjuna on the battlefield. He speaks them to you now, exactly the same.",
      },
      {
        ref: "BG 18.48",
        sanskrit:
          "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्।\nसर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः॥",
        translation:
          "Every endeavor is covered by some fault, just as fire is covered by smoke. One should not give up the work born of one's nature, even if it is full of fault.",
        explanation:
          "All action has imperfection. The failure was not a sign to stop — it was the fire teaching you through smoke.",
      },
      {
        ref: "BG 18.57",
        sanskrit:
          "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः।\nबुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव॥",
        translation:
          "In all activities just depend upon Me and work always under My protection. Be fully conscious of Me.",
        explanation:
          "Work under my protection and failure cannot be final. I am managing the outcome — you manage the effort.",
      },
    ],
    steps: [
      "Write down exactly what failed and extract every lesson — failure's gift is precious data.",
      "Separate 'I failed at this task' from 'I am a failure' — these are completely different truths.",
      "Read the story of Arjuna: he failed before his greatest victory. So do all great souls.",
      "Take the smallest possible next step — momentum restores confidence before courage arrives.",
      "Offer your attempt to Krishna: 'I tried with full sincerity. You manage what comes next.'",
    ],
  },
  {
    id: "identity",
    number: 13,
    sanskrit: "अस्मिता",
    name: "Identity & Self-Worth",
    prompt: "I don't know who I am",
    symbol: "🪞",
    verses: ["BG 2.20", "BG 18.65", "BG 13.27"],
    strategy:
      "You are not your job, your body, your relationships, your failures, or your successes. You are the eternal witness — the pure consciousness that observes all these. You are my very own part, Arjun. That is who you are. Nothing can change that.",
    teachings: [
      {
        ref: "BG 2.20",
        sanskrit:
          "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
        translation:
          "For the soul there is neither birth nor death. It is unborn, eternal, ever-existing. It is not slain when the body is slain.",
        explanation:
          "Your true identity is eternal. Everything else is a role you are playing beautifully — not who you are.",
      },
      {
        ref: "BG 13.27",
        sanskrit:
          "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्।\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥",
        translation:
          "One who sees the Supreme Lord present equally everywhere and in all living beings, remaining undestroyed as they are destroyed, actually sees.",
        explanation:
          "You are the undestroyed presence within all your changing experiences. That unchanging one — that is you.",
      },
      {
        ref: "BG 18.65",
        sanskrit:
          "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
        translation:
          "Always think of Me, become My devotee. I promise you will come to Me, for you are dear to Me.",
        explanation:
          "Your worth is not earned. It is given by Krishna. You are precious to him simply because you exist.",
      },
    ],
    steps: [
      "Write: 'I am not my ___' — fill in everything you over-identify with. List 10 things.",
      "Meditate for 10 minutes on: 'Who is watching my thoughts right now?'",
      "Read BG Chapter 13 slowly — it is Krishna's complete map of the true self.",
      "Do one thing you love purely for love of it — no audience, no output, no evaluation.",
      "Declare each morning: 'I am the eternal soul. I am dear to Krishna. That is enough.'",
    ],
  },
  {
    id: "powerlessness",
    number: 14,
    sanskrit: "असहायता",
    name: "Powerlessness",
    prompt: "I feel completely helpless",
    symbol: "🌊",
    verses: ["BG 9.22", "BG 18.33", "BG 4.36"],
    strategy:
      "When you feel most powerless, you are closest to the greatest power in existence. Arjuna dropped his bow in complete helplessness — and in that moment, I could finally speak. Your surrender is not weakness. It is the opening through which I work.",
    teachings: [
      {
        ref: "BG 9.22",
        sanskrit:
          "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        translation:
          "For those who worship Me with devotion — I carry what they lack and preserve what they have.",
        explanation:
          "What you lack, I will carry. Helplessness surrendered to me becomes my opportunity to act for you.",
      },
      {
        ref: "BG 18.33",
        sanskrit:
          "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।\nयोगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विका॥",
        translation:
          "The will which is unwavering through Yoga practice, which controls the activities of the mind, life force, and senses, is of the nature of goodness.",
        explanation:
          "I place strength in you now. Feel it enter with each breath. You are not as powerless as you believe.",
      },
      {
        ref: "BG 4.36",
        sanskrit:
          "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः।\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि॥",
        translation:
          "Even if you are the most sinful of all sinners, when you are situated in the boat of transcendental knowledge you will cross over the ocean of miseries.",
        explanation:
          "No situation is beyond my power to rescue you from. None. This is absolute.",
      },
    ],
    steps: [
      "Say out loud right now: 'I cannot do this alone. Krishna, please help me in this moment.'",
      "Identify one — only one — small thing within your control. Do only that one thing.",
      "Call someone. Text someone. Do not carry this weight in complete silence.",
      "Read BG 18.66 aloud three times — this is my unconditional rescue promise to you.",
      "Rest. Sometimes powerlessness is the soul asking for surrender rather than more action.",
    ],
  },
  {
    id: "isolation",
    number: 15,
    sanskrit: "निर्वासन",
    name: "Isolation & Exile",
    prompt: "I feel cut off from everyone",
    symbol: "🏝️",
    verses: ["BG 6.30", "BG 9.22", "BG 18.65"],
    strategy:
      "Exile from society was Arjuna's reality too — and before that, Krishna's. But no soul is ever truly in exile when they carry Krishna within them. Your isolation can become the deepest sacred solitude, which is where I speak most clearly.",
    teachings: [
      {
        ref: "BG 6.30",
        sanskrit:
          "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
        translation:
          "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.",
        explanation:
          "I am in the space around you right now. In the silence, in the breath — I am there.",
      },
      {
        ref: "BG 9.22",
        sanskrit:
          "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        translation:
          "Those who worship Me with devotion — to them, I carry what they lack and preserve what they have.",
        explanation:
          "Even in exile, even completely alone — my care for you is uninterrupted.",
      },
      {
        ref: "BG 18.65",
        sanskrit:
          "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
        translation:
          "Always think of Me, become My devotee. You will come to Me. I promise this because you are dear to Me.",
        explanation:
          "You are dear. Even in isolation. Even unseen by the world — you are seen and cherished by Krishna.",
      },
    ],
    steps: [
      "Light a diya and sit with it in silence — feel the warmth as Krishna's very presence.",
      "Write in your journal: what does this isolation want to teach me about myself?",
      "Reach out to one person — one text, one call. Isolation grows stronger with inaction.",
      "Join the Satsang Circle in this app — your spiritual community is waiting.",
      "Practice treating solitude as sacred time: 'I am alone with Krishna. This is a gift.'",
    ],
  },
  {
    id: "purpose",
    number: 16,
    sanskrit: "प्रयोजन",
    name: "Purpose & Meaning",
    prompt: "My life feels meaningless",
    symbol: "✨",
    verses: ["BG 3.35", "BG 18.45", "BG 18.66"],
    strategy:
      "Purpose is not found — it is revealed through sincere action. The life you feel is meaningless holds a dharma you haven't uncovered yet. Act. Serve. Give. And in the giving, meaning emerges like the sun appearing through clouds.",
    teachings: [
      {
        ref: "BG 3.35",
        sanskrit:
          "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
        translation:
          "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed.",
        explanation:
          "Your purpose is unique to you. Living someone else's purpose perfectly is emptier than living your own imperfectly.",
      },
      {
        ref: "BG 18.45",
        sanskrit: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।",
        translation:
          "By devoting oneself to one's own natural work, a person achieves perfection.",
        explanation:
          "Meaning comes from fully showing up to what you are already doing — not from finding something else.",
      },
      {
        ref: "BG 18.66",
        sanskrit:
          "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        translation:
          "Abandon all varieties of dharma and just surrender unto Me alone. I shall deliver you.",
        explanation:
          "Sometimes the path to purpose begins with surrendering the search and simply serving Krishna now.",
      },
    ],
    steps: [
      "Ask yourself: 'What would I do if money and opinion didn't matter at all?'",
      "Perform one act of pure seva today — purpose reveals itself consistently through service.",
      "Try the Life Purpose Finder in this app — 18 deep questions from Krishna.",
      "Read BG Chapter 18 slowly — Krishna's complete map of human purpose and liberation.",
      "Each morning: 'Today I offer my actions to Krishna. Let him show me why I am here.'",
    ],
  },
  {
    id: "financial",
    number: 17,
    sanskrit: "अर्थसंकट",
    name: "Financial Crisis",
    prompt: "I am in financial ruin",
    symbol: "💰",
    verses: ["BG 9.22", "BG 3.9", "BG 18.57"],
    strategy:
      "Yudhishthira lost an entire kingdom at the dice game. Yet dharma restored everything. Financial crisis is a test of your character, not your worth. Act with integrity, reduce unnecessary desire, and trust that I provide for those who walk my path.",
    teachings: [
      {
        ref: "BG 9.22",
        sanskrit:
          "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        translation:
          "Those who worship Me with devotion — I carry what they lack and preserve what they have.",
        explanation:
          "This is my direct promise about provision. I will carry what you lack. Surrender the anxiety to me.",
      },
      {
        ref: "BG 3.9",
        sanskrit:
          "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर॥",
        translation:
          "Work done as a sacrifice for Vishnu has to be performed. Otherwise work causes bondage. Work for that purpose with full detachment.",
        explanation:
          "Work done as offering to Krishna liberates — even during financial crisis, sacred intent transforms energy.",
      },
      {
        ref: "BG 18.57",
        sanskrit:
          "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः।\nबुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव॥",
        translation:
          "In all activities just depend upon Me and work always under My protection.",
        explanation:
          "Work under Krishna's protection. The outcome is his to manage. Focus on dharmic action alone.",
      },
    ],
    steps: [
      "Reduce desire first: list needs vs wants honestly, eliminate ruthlessly what isn't needed.",
      "Do not hide from those you owe — truth in all dealings is non-negotiable dharma.",
      "Identify one legitimate dharmic income action and take it today. Just one.",
      "Perform Lakshmi puja — Kanakadhara Stotram — invoke divine abundance with faith.",
      "'I act with integrity. Krishna provides. I do not need more than my dharma requires.'",
    ],
  },
  {
    id: "mortality",
    number: 18,
    sanskrit: "मृत्यु",
    name: "Mortality & Death",
    prompt: "I am facing death or the end",
    symbol: "∞",
    verses: ["BG 2.20", "BG 8.5", "BG 2.14"],
    strategy:
      "Death is not the end. It is the doorway through which every soul returns to me. I have been waiting. This is not tragedy — it is homecoming. Whether you face your own death or a beloved's — this truth dissolves all fear.",
    teachings: [
      {
        ref: "BG 2.20",
        sanskrit:
          "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
        translation:
          "For the soul there is never birth nor death. It is eternal, unborn, ever-existing. It is not slain when the body is slain.",
        explanation:
          "Your true self cannot die. This is the central truth of the Gita — given precisely for this moment.",
      },
      {
        ref: "BG 8.5",
        sanskrit:
          "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
        translation:
          "Whoever, at the time of death, gives up the body remembering Me alone, reaches My abode. Of this there is no doubt.",
        explanation:
          "The final instruction: remember only Krishna. That single act at the final moment leads to liberation.",
      },
      {
        ref: "BG 2.14",
        sanskrit:
          "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
        translation:
          "All sorrows and joys come and go like winter and summer seasons. Bear them with equanimity.",
        explanation:
          "Even this most fearful season will pass. What remains is the eternal soul — which was never in danger.",
      },
    ],
    steps: [
      "Sit in silence and breathe slowly — feel yourself as the witness of the body, not the body itself.",
      "Chant 'Om Namo Bhagavate Vasudevaya' — the liberation mantra — 108 times.",
      "Read BG Chapter 8 completely — it is Krishna's complete teaching on death and liberation.",
      "If this may be final: write your Spiritual Will. Leave words of love. It is the greatest seva.",
      "Know with complete certainty: 'I am going home. Krishna is waiting. This is not the end.'",
    ],
  },
] as const;

type BattleCategory = (typeof BATTLE_CATEGORIES)[number];

interface Battle {
  id: string;
  categoryId: string;
  categoryName: string;
  sanskrit: string;
  startDate: string;
  wonDate?: string;
  status: "active" | "won";
}

function loadBattles(): Battle[] {
  try {
    const raw = localStorage.getItem("kurukshetra-battles");
    return raw ? (JSON.parse(raw) as Battle[]) : [];
  } catch {
    return [];
  }
}

function saveBattles(battles: Battle[]) {
  try {
    localStorage.setItem("kurukshetra-battles", JSON.stringify(battles));
  } catch {
    /* ignore */
  }
}

// ─── Verse card ───────────────────────────────────────────────────────────────
function TeachingCard({
  t,
  idx,
}: {
  t: {
    ref: string;
    sanskrit: string;
    translation: string;
    explanation: string;
  };
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="manuscript-card p-5 mb-4"
    >
      <p className="text-verse-number mb-2">{t.ref}</p>
      <p
        className="font-body text-sm font-medium leading-loose mb-3 whitespace-pre-line"
        style={{ color: "oklch(var(--foreground))" }}
      >
        {t.sanskrit}
      </p>
      <div className="divider-ornate text-xs my-2">✦</div>
      <p className="font-body text-sm italic text-muted-foreground mb-3 leading-relaxed">
        {t.translation}
      </p>
      <p className="font-body text-sm leading-relaxed border-l-2 border-accent/50 pl-3 text-foreground">
        {t.explanation}
      </p>
    </motion.div>
  );
}

// ─── Guidance screen ──────────────────────────────────────────────────────────
function BattleGuidance({
  category,
  onDeclareVictory,
  onBack,
}: {
  category: BattleCategory;
  onDeclareVictory: () => void;
  onBack: () => void;
}) {
  const [tab, setTab] = useState<"teachings" | "strategy" | "battlefield">(
    "teachings",
  );
  return (
    <div className="space-y-6 page-enter">
      <div className="text-center py-2">
        <button
          type="button"
          onClick={onBack}
          className="font-body text-xs text-accent/80 hover:text-accent tracking-widest uppercase mb-4 flex items-center gap-1 mx-auto transition-smooth"
        >
          ← Return to Battlefield
        </button>
        <div className="text-5xl mb-3">{category.symbol}</div>
        <p className="text-verse-number tracking-widest mb-2">
          {category.verses.join(" · ")}
        </p>
        <h2 className="chapter-header text-3xl md:text-4xl mb-1">
          {category.sanskrit}
        </h2>
        <p className="font-display italic text-xl text-primary/80">
          {category.name}
        </p>
        <div className="ornate-rule mt-4">
          <span>Krishna's Counsel</span>
        </div>
      </div>

      <div className="ai-bubble rounded-lg p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">🦚</span>
          <div>
            <p className="font-body text-xs text-accent/80 tracking-widest uppercase mb-2">
              Krishna speaks to Arjun
            </p>
            <p className="font-body text-base leading-relaxed text-foreground italic">
              "{category.strategy}"
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-1 p-1 bg-muted/40 rounded" role="tablist">
        {(["teachings", "strategy", "battlefield"] as const).map((t) => (
          <button
            type="button"
            key={t}
            role="tab"
            aria-selected={tab === t}
            data-ocid={`kurukshetra.guidance.${t}.tab`}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 px-3 text-xs font-display italic tracking-widest uppercase transition-smooth rounded ${tab === t ? "bg-card shadow-sacred text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            {t === "teachings"
              ? "⚔️ Sacred Verses"
              : t === "strategy"
                ? "🏹 Battle Plan"
                : "🪖 18 Strategies"}
          </button>
        ))}
      </div>

      {tab === "teachings" && (
        <div>
          {category.teachings.map((t, i) => (
            <TeachingCard key={t.ref} t={t} idx={i} />
          ))}
        </div>
      )}

      {tab === "strategy" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="manuscript-card p-6 space-y-4"
        >
          <h3 className="font-display italic text-xl text-primary mb-4">
            ⚔️ Krishna's 5-Step Battle Plan
          </h3>
          {category.steps.map((step, i) => (
            <div key={step.slice(0, 20)} className="flex gap-3 items-start">
              <span
                className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-display"
                style={{
                  background: "oklch(var(--accent)/0.2)",
                  border: "1px solid oklch(var(--accent)/0.5)",
                  color: "oklch(var(--accent))",
                }}
              >
                {i + 1}
              </span>
              <p className="font-body text-sm leading-relaxed text-foreground">
                {step}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {tab === "battlefield" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3"
        >
          <div className="manuscript-card p-4 text-center mb-2">
            <p className="font-display italic text-base text-primary">
              🪖 18 Battlefield Strategies
            </p>
            <p className="font-body text-xs text-muted-foreground italic mt-1">
              Real strategies from the Mahabharata — for life's battles
            </p>
          </div>
          {BATTLE_STRATEGIES_18.map((s) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(s.number * 0.03, 0.5) }}
              className="manuscript-card p-4"
            >
              <div className="flex items-start gap-3">
                <span
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-display"
                  style={{
                    background: "oklch(var(--accent)/0.2)",
                    border: "1px solid oklch(var(--accent)/0.5)",
                    color: "oklch(var(--accent))",
                  }}
                >
                  {s.number}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-display italic font-bold text-sm text-primary mb-0.5">
                    {s.title}
                  </p>
                  <p
                    className="font-body text-xs italic text-accent/80 mb-2"
                    lang="sa"
                  >
                    {s.sanskrit}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-foreground mb-2">
                    {s.lesson}
                  </p>
                  <p className="font-body text-xs text-muted-foreground/70 italic">
                    {s.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="morning-banner rounded text-center py-4 px-5">
        <p className="font-body text-xs italic text-muted-foreground">
          "How is your battle going?" — Krishna checks in with you daily. Return
          here for ongoing guidance.
        </p>
      </div>

      <div className="text-center py-4">
        <button
          type="button"
          data-ocid="kurukshetra.victory.declare_button"
          onClick={onDeclareVictory}
          className="wax-seal-btn mx-auto"
        >
          🏆 I Have Overcome This Battle!
        </button>
        <p className="font-body text-xs text-muted-foreground/60 mt-2 italic">
          Declare when your heart truly knows victory — not before
        </p>
      </div>

      <div className="flex gap-3 justify-center flex-wrap pb-4">
        <Link
          to="/guidance"
          data-ocid="kurukshetra.guidance.talk-to-krishna.link"
          className="wax-seal-btn text-xs py-2 px-4"
        >
          🦚 Talk to Krishna
        </Link>
        <Link
          to="/emergency"
          data-ocid="kurukshetra.guidance.need-krishna.link"
          className="wax-seal-btn-saffron wax-seal-btn text-xs py-2 px-4"
        >
          🙏 Krishna I Need You
        </Link>
      </div>
    </div>
  );
}

// ─── Battle log ───────────────────────────────────────────────────────────────
function BattleLog({
  battles,
  onNewBattle,
}: { battles: Battle[]; onNewBattle: () => void }) {
  const active = battles.filter((b) => b.status === "active");
  const won = battles.filter((b) => b.status === "won");
  const dharmaYoddha = won.length >= 18;
  return (
    <div className="space-y-6 page-enter">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Battles Won", value: won.length, icon: "🏆" },
          { label: "Active Battles", value: active.length, icon: "⚔️" },
          { label: "Dharma Points", value: won.length * 18, icon: "✨" },
        ].map((s) => (
          <div key={s.label} className="manuscript-card p-4 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-display italic text-2xl text-accent">
              {s.value}
            </div>
            <div className="font-body text-xs text-muted-foreground mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {dharmaYoddha && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="manuscript-card p-6 text-center"
          style={{ border: "2px solid oklch(var(--accent)/0.7)" }}
          data-ocid="kurukshetra.dharma-yoddha.badge"
        >
          <div className="text-4xl mb-3">🏅</div>
          <p className="font-display italic text-xl text-accent">धर्म योद्धा</p>
          <p className="font-display italic text-lg text-primary">
            Dharma Yoddha
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2 italic">
            18 battles won. You have walked the full Kurukshetra with Krishna.
          </p>
        </motion.div>
      )}

      {active.length > 0 && (
        <div>
          <h3 className="font-display italic text-lg text-primary mb-3">
            ⚔️ Active Battles
          </h3>
          {active.map((b, i) => (
            <div
              key={b.id}
              className="sacred-card-hover p-4 mb-2 flex items-center justify-between"
              data-ocid={`kurukshetra.active-battle.item.${i + 1}`}
            >
              <div>
                <p className="font-display italic text-base text-primary">
                  {b.sanskrit} — {b.categoryName}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Started: {new Date(b.startDate).toLocaleDateString("en-IN")}
                </p>
              </div>
              <span className="text-lg">
                {BATTLE_CATEGORIES.find((c) => c.id === b.categoryId)?.symbol ??
                  "⚔️"}
              </span>
            </div>
          ))}
        </div>
      )}

      {won.length > 0 && (
        <div>
          <h3 className="font-display italic text-lg text-primary mb-3">
            🏆 Battles Won
          </h3>
          {won.map((b, i) => (
            <div
              key={b.id}
              className="sacred-card p-4 mb-2 flex items-center justify-between opacity-80"
              data-ocid={`kurukshetra.won-battle.item.${i + 1}`}
            >
              <div>
                <p className="font-display italic text-base text-primary">
                  {b.sanskrit} — {b.categoryName}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Won:{" "}
                  {b.wonDate
                    ? new Date(b.wonDate).toLocaleDateString("en-IN")
                    : "—"}
                </p>
                <p className="font-body text-xs text-accent/80 italic mt-1">
                  🙏 "Krishna's blessings upon your victory"
                </p>
              </div>
              <span className="text-2xl">🏆</span>
            </div>
          ))}
        </div>
      )}

      {battles.length === 0 && (
        <div
          className="text-center py-12"
          data-ocid="kurukshetra.battles.empty_state"
        >
          <div className="text-5xl mb-4">🏹</div>
          <p className="font-display italic text-xl text-primary mb-2">
            Your Kurukshetra Awaits
          </p>
          <p className="font-body text-sm text-muted-foreground italic">
            No battles recorded yet. Every Arjuna begins by facing their first
            challenge.
          </p>
        </div>
      )}

      <div className="text-center pt-4">
        <button
          type="button"
          onClick={onNewBattle}
          data-ocid="kurukshetra.new-battle.button"
          className="wax-seal-btn"
        >
          ⚔️ Bring a New Battle to Krishna
        </button>
      </div>
    </div>
  );
}

// ─── Intro Banner ─────────────────────────────────────────────────────────────
function KurukshetraIntroBanner({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-12"
      data-ocid="kurukshetra.intro.banner"
    >
      {/* Decorative header line */}
      <div className="flex items-center gap-3 mb-8 w-full max-w-sm">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.72 0.28 52 / 0.6))",
          }}
        />
        <span style={{ fontSize: "1.4rem", color: "oklch(0.82 0.34 54)" }}>
          ⚔️
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(to left, transparent, oklch(0.72 0.28 52 / 0.6))",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p
          className="font-body text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "oklch(0.62 0.26 32 / 0.85)" }}
        >
          ॥ मेरा कुरुक्षेत्र ॥
        </p>
        <h1
          className="font-display italic font-bold mb-3 leading-tight"
          style={{
            fontSize: "clamp(2rem, 7vw, 3.2rem)",
            color: "oklch(0.92 0.06 68)",
            textShadow:
              "0 4px 20px rgba(0,0,0,0.6), 0 0 40px oklch(0.82 0.34 54 / 0.3)",
          }}
        >
          My Kurukshetra
        </h1>

        {/* The sacred story parallel — user's personal journey */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto max-w-lg mb-5 text-left"
          style={{
            background: "oklch(0.14 0.08 268 / 0.85)",
            border: "1.5px solid oklch(0.60 0.22 50 / 0.45)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
          }}
        >
          <p
            className="font-body text-xs tracking-widest mb-3 uppercase text-center"
            style={{ color: "oklch(0.62 0.26 32 / 0.8)" }}
          >
            ✦ A True Story — The Soul Behind This App ✦
          </p>
          <p
            className="font-body text-sm leading-relaxed mb-3"
            style={{ color: "oklch(0.80 0.06 70)", lineHeight: 1.85 }}
          >
            The man who built this app sat at a railway station in his darkest
            hour. A stranger placed a Gita in his hands. That single moment
            changed everything. Now he has built this for YOU — so that when YOU
            are in your Kurukshetra, Krishna's voice reaches you here, just as
            it reached Arjuna on the battlefield.
          </p>
        </motion.div>

        {/* The sacred quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto max-w-lg mb-8"
          style={{
            background: "oklch(0.12 0.08 268 / 0.75)",
            border: "1.5px solid oklch(0.72 0.28 52 / 0.45)",
            borderRadius: "10px",
            padding: "1.5rem 1.75rem",
            backdropFilter: "blur(10px)",
          }}
        >
          <p
            className="font-body text-xs tracking-widest mb-3 uppercase"
            style={{ color: "oklch(0.62 0.26 32 / 0.8)" }}
          >
            ✦ Krishna's Promise ✦
          </p>
          <p
            className="font-display italic font-bold leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              color: "oklch(0.92 0.08 68)",
              lineHeight: 1.7,
            }}
          >
            "The charioteer does not win the battle.
            <br />
            <span style={{ color: "oklch(0.86 0.36 54)" }}>
              Arjuna wins the battle.
            </span>
            <br />
            Krishna simply makes sure
            <br />
            <span style={{ color: "oklch(0.78 0.28 54)" }}>
              Arjuna never fights alone.
            </span>
            "
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body italic mb-8 max-w-sm mx-auto leading-relaxed"
          style={{ color: "oklch(0.75 0.08 68 / 0.85)", fontSize: "0.95rem" }}
        >
          Just as Arjuna stood on Kurukshetra — confused, grieving, overwhelmed
          — you too face your own battles. But remember what Krishna told him:{" "}
          <em style={{ color: "oklch(0.85 0.28 54)" }}>
            I am always with you.
          </em>
        </motion.p>

        <motion.button
          type="button"
          onClick={onEnter}
          data-ocid="kurukshetra.intro.enter_button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="wax-seal-btn px-10 py-4 text-base"
          style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
        >
          ⚔️ Begin My Kurukshetra
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-10"
        style={{
          borderTop: "1px solid oklch(0.72 0.24 52 / 0.25)",
          paddingTop: "1.5rem",
          maxWidth: "28rem",
          width: "100%",
        }}
      >
        <p
          className="font-body text-xs italic"
          style={{ color: "oklch(0.62 0.08 60 / 0.7)" }}
        >
          "Krishna came to this man through a stranger at a railway station. He
          came to you through this app. He never stops finding ways to reach his
          Arjuna. Never."
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export function KurukshetraPage() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !localStorage.getItem("kurukshetra-intro-seen");
    } catch {
      return true;
    }
  });
  const [phase, setPhase] = useState<"entry" | "select" | "guidance" | "log">(
    "entry",
  );
  const [selectedCategory, setSelectedCategory] =
    useState<BattleCategory | null>(null);
  const [customBattle, setCustomBattle] = useState("");
  const [battles, setBattles] = useState<Battle[]>(() => loadBattles());
  const [celebrateVictory, setCelebrateVictory] = useState(false);
  const { addPoints } = usePoints();
  const { awardBadge } = useBadges();

  useEffect(() => {
    saveBattles(battles);
  }, [battles]);

  function handleSelectCategory(cat: BattleCategory) {
    setSelectedCategory(cat);
    const alreadyActive = battles.some(
      (b) => b.categoryId === cat.id && b.status === "active",
    );
    if (!alreadyActive) {
      const newBattle: Battle = {
        id: `${cat.id}-${Date.now()}`,
        categoryId: cat.id,
        categoryName: cat.name,
        sanskrit: cat.sanskrit,
        startDate: new Date().toISOString(),
        status: "active",
      };
      setBattles((prev) => [...prev, newBattle]);
    }
    setPhase("guidance");
  }

  function handleDeclareVictory() {
    if (!selectedCategory) return;
    setBattles((prev) =>
      prev.map((b) =>
        b.categoryId === selectedCategory.id && b.status === "active"
          ? { ...b, status: "won" as const, wonDate: new Date().toISOString() }
          : b,
      ),
    );
    addPoints("streak", 18);
    const newWonCount = battles.filter((b) => b.status === "won").length + 1;
    if (newWonCount >= 18) awardBadge("challenge-7");
    setCelebrateVictory(true);
    setTimeout(() => {
      setCelebrateVictory(false);
      setPhase("log");
    }, 2800);
  }

  function handleEnterBattlefield() {
    try {
      localStorage.setItem("kurukshetra-intro-seen", "1");
    } catch {
      /* ignore */
    }
    setShowIntro(false);
  }

  return (
    <div className="max-w-2xl mx-auto" data-ocid="kurukshetra.page">
      {/* Intro banner — shown on first visit */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <KurukshetraIntroBanner
            key="intro"
            onEnter={handleEnterBattlefield}
          />
        )}
      </AnimatePresence>

      {showIntro ? null : (
        <>
          {/* Victory overlay */}
          <AnimatePresence>
            {celebrateVictory && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="fixed inset-0 z-[300] flex items-center justify-center"
                style={{ background: "oklch(0 0 0 / 0.5)" }}
              >
                <div className="manuscript-card p-10 text-center shadow-candlelight max-w-sm mx-4">
                  <div className="text-6xl mb-4">🏆</div>
                  <p className="font-display italic text-3xl text-accent mb-2">
                    Victory!
                  </p>
                  <p className="font-body text-base text-foreground italic">
                    +18 Dharma Points Earned
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                    "You have fulfilled your dharma, Arjun. I am proud of you."
                    — Krishna
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Persistent CTA buttons */}
          <div className="flex gap-2 justify-end mb-4 flex-wrap">
            <Link
              to="/guidance"
              data-ocid="kurukshetra.header.talk-to-krishna"
              className="wax-seal-btn text-xs py-2 px-4"
            >
              🦚 Talk to Krishna
            </Link>
            <Link
              to="/emergency"
              data-ocid="kurukshetra.header.krishna-i-need-you"
              className="wax-seal-btn-saffron wax-seal-btn text-xs py-2 px-4"
            >
              🙏 Krishna I Need You
            </Link>
          </div>

          {/* ENTRY */}
          {phase === "entry" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Battlefield hero illustration — richer colors */}
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.30 0.14 268) 0%, oklch(0.22 0.08 46) 50%, oklch(0.32 0.16 36) 100%)",
                  minHeight: "290px",
                  border: "2px solid oklch(0.50 0.22 268 / 0.40)",
                  boxShadow: "0 8px 40px oklch(0.30 0.14 268 / 0.35)",
                }}
              >
                {/* Decorative sacred geometry */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute top-3 left-3 text-xl"
                    style={{ color: "oklch(0.82 0.36 54 / 0.4)" }}
                  >
                    ✦
                  </div>
                  <div
                    className="absolute top-3 right-3 text-xl"
                    style={{ color: "oklch(0.82 0.36 54 / 0.4)" }}
                  >
                    ✦
                  </div>
                  <div
                    className="absolute top-8 left-1/4 text-sm"
                    style={{ color: "oklch(0.82 0.36 54 / 0.25)" }}
                  >
                    ❖
                  </div>
                  <div
                    className="absolute top-8 right-1/4 text-sm"
                    style={{ color: "oklch(0.82 0.36 54 / 0.25)" }}
                  >
                    ❖
                  </div>
                  <div
                    className="absolute bottom-6 left-10 text-base"
                    style={{ color: "oklch(0.82 0.36 54 / 0.3)" }}
                  >
                    ⚔️
                  </div>
                  <div
                    className="absolute bottom-6 right-10 text-base"
                    style={{ color: "oklch(0.82 0.36 54 / 0.3)" }}
                  >
                    🏹
                  </div>
                  {/* Arch-like top border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, oklch(0.82 0.36 54 / 0.6), transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, oklch(0.82 0.36 54 / 0.4), transparent)",
                    }}
                  />
                </div>
                {/* Text content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "3.5rem",
                      color: "oklch(0.82 0.36 54)",
                      textShadow:
                        "0 0 40px oklch(0.82 0.36 54 / 0.7), 0 4px 16px oklch(0 0 0 / 0.6)",
                    }}
                  >
                    ॐ
                  </div>
                  <h1
                    className="font-display italic font-bold mb-2"
                    style={{
                      fontSize: "clamp(2.2rem, 7vw, 4rem)",
                      color: "oklch(0.93 0.04 74)",
                      textShadow:
                        "0 4px 20px oklch(0 0 0 / 0.7), 0 0 40px oklch(0.82 0.36 54 / 0.35)",
                    }}
                  >
                    मेरा कुरुक्षेत्र
                  </h1>
                  <p
                    className="font-display italic text-lg mb-4"
                    style={{ color: "oklch(0.82 0.36 54)" }}
                  >
                    My Kurukshetra
                  </p>
                  <div
                    className="w-20 h-px mb-4"
                    style={{ background: "oklch(0.82 0.36 54 / 0.5)" }}
                  />
                  <p
                    className="font-body text-sm italic leading-relaxed max-w-xs"
                    style={{ color: "oklch(0.82 0.08 72)" }}
                  >
                    "Every soul faces its Kurukshetra.
                    <br />
                    Let Krishna be your charioteer."
                  </p>
                </div>
              </div>

              {/* Krishna's opening */}
              <div className="ai-bubble p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">🦚</span>
                  <div>
                    <p className="font-body text-xs text-accent/80 tracking-widest uppercase mb-2">
                      Krishna speaks
                    </p>
                    <p className="font-body text-base leading-relaxed text-foreground italic">
                      "Hare Krishna, dear Arjun. Tell me your battle today. What
                      challenge stands before you on your Kurukshetra? I am your
                      charioteer — I have never left your side, not for a single
                      breath. Bring me your battle, and together we will face it
                      with the full wisdom of the Gita."
                    </p>
                  </div>
                </div>
              </div>

              <div className="divider-ornate text-sm">
                ⚔️ Begin Your Battle ⚔️
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  data-ocid="kurukshetra.select-battle.primary_button"
                  onClick={() => setPhase("select")}
                  className="wax-seal-btn flex-1 py-3"
                >
                  ⚔️ Choose Your Battlefield
                </button>
                <button
                  type="button"
                  data-ocid="kurukshetra.view-log.secondary_button"
                  onClick={() => setPhase("log")}
                  className="wax-seal-btn-saffron wax-seal-btn flex-1 py-3"
                >
                  📜 My Battles Log
                </button>
              </div>

              <div className="text-center py-4 border-t border-accent/20">
                <p className="font-body text-sm italic text-muted-foreground leading-relaxed">
                  "In every battle of life, Krishna stands with you —
                  <br className="hidden sm:block" />
                  as he stood with Arjuna on Kurukshetra."
                </p>
              </div>
            </motion.div>
          )}

          {/* SELECT */}
          {phase === "select" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="ornate-header">
                <h2>Choose Your Battle</h2>
                <p className="font-body text-sm italic text-muted-foreground mt-2">
                  18 sacred battlefield categories — which is your Kurukshetra
                  today?
                </p>
              </div>

              <div
                className="parchment-grid grid-cols-2 sm:grid-cols-3"
                data-ocid="kurukshetra.category.list"
              >
                {BATTLE_CATEGORIES.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.035 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => handleSelectCategory(cat)}
                    data-ocid={`kurukshetra.category.item.${i + 1}`}
                    className="manuscript-card p-4 text-center cursor-pointer transition-smooth hover:shadow-warm-glow"
                  >
                    <div className="text-2xl mb-2">{cat.symbol}</div>
                    <p className="font-display italic text-sm font-bold text-primary mb-1">
                      {cat.sanskrit}
                    </p>
                    <p className="font-body text-xs text-muted-foreground leading-tight">
                      {cat.name}
                    </p>
                    <p className="font-body text-[10px] text-muted-foreground/60 mt-1 italic leading-tight">
                      {cat.prompt}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Custom input */}
              <div className="manuscript-card p-5">
                <p className="font-display italic text-base text-primary mb-3">
                  Or describe your battle in your own words:
                </p>
                <textarea
                  value={customBattle}
                  onChange={(e) => setCustomBattle(e.target.value)}
                  placeholder="Tell Krishna what weighs on your heart today, Arjun…"
                  rows={3}
                  data-ocid="kurukshetra.custom-battle.textarea"
                  className="manuscript-input w-full mb-3"
                />
                <button
                  type="button"
                  disabled={!customBattle.trim()}
                  data-ocid="kurukshetra.custom-battle.submit_button"
                  onClick={() => {
                    setSelectedCategory(BATTLE_CATEGORIES[7]);
                    setPhase("guidance");
                  }}
                  className="wax-seal-btn disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  🦚 Bring This to Krishna
                </button>
              </div>

              <button
                type="button"
                onClick={() => setPhase("entry")}
                className="font-body text-xs text-accent/70 hover:text-accent transition-smooth tracking-widest uppercase flex items-center gap-1"
              >
                ← Return to Entry
              </button>
            </motion.div>
          )}

          {/* GUIDANCE */}
          {phase === "guidance" && selectedCategory && (
            <BattleGuidance
              category={selectedCategory}
              onDeclareVictory={handleDeclareVictory}
              onBack={() => setPhase("select")}
            />
          )}

          {/* LOG */}
          {phase === "log" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="ornate-header">
                <h2>My Battles Log</h2>
              </div>
              <BattleLog
                battles={battles}
                onNewBattle={() => setPhase("select")}
              />
              <button
                type="button"
                onClick={() => setPhase("entry")}
                className="font-body text-xs text-accent/70 hover:text-accent transition-smooth tracking-widest uppercase flex items-center gap-1"
              >
                ← Return to Kurukshetra
              </button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
