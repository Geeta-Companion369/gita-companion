export interface GitaVerse {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  english: string;
  hindi: string;
  meaning: string;
  keywords: string[];
  moodTags: string[];
}

export const GITA_VERSES_CH14_15: GitaVerse[] = [
  // ========== CHAPTER 14: GUNATRAYA-VIBHAGA YOGA ==========
  // The Yoga of the Division of Three Gunas

  {
    id: "14.1",
    chapter: 14,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | परं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम् | यज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः ||",
    transliteration:
      "śrī-bhagavān uvāca | paraṁ bhūyaḥ pravakṣyāmi jñānānāṁ jñānam uttamam | yaj jñātvā munayaḥ sarve parāṁ siddhim ito gatāḥ ||",
    english:
      "The Blessed Lord said: I shall again declare that supreme knowledge, the best of all knowledge, knowing which all the sages have attained the highest perfection after this life.",
    hindi:
      "श्री भगवान बोले — मैं फिर से उस परम ज्ञान को कहूँगा जो सभी ज्ञानों में श्रेष्ठ है, जिसे जानकर सभी मुनिजनों ने इस लोक से उच्चतम सिद्धि प्राप्त की है।",
    meaning:
      "Krishna begins Chapter 14 by promising to reveal the highest of all knowledge — the understanding of the three Gunas — which when known, liberates souls from the cycle of rebirth.",
    keywords: [
      "knowledge",
      "supreme wisdom",
      "perfection",
      "liberation",
      "sages",
    ],
    moodTags: ["seeking wisdom", "spiritual growth", "enlightenment"],
  },
  {
    id: "14.2",
    chapter: 14,
    verse: 2,
    sanskrit:
      "इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः | सर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च ||",
    transliteration:
      "idaṁ jñānam upāśritya mama sādharmyam āgatāḥ | sarge'pi nopajāyante pralaye na vyathanti ca ||",
    english:
      "By taking refuge in this knowledge and attaining oneness with Me, they are not born at the time of creation, nor are they disturbed at the time of dissolution.",
    hindi:
      "इस ज्ञान का आश्रय लेकर और मेरे स्वरूप को प्राप्त होकर वे सृष्टि के समय भी उत्पन्न नहीं होते और प्रलय के समय भी व्यथित नहीं होते।",
    meaning:
      "Those who understand the Gunas and attain oneness with the Divine transcend the cycle of creation and dissolution — they are beyond birth and death.",
    keywords: ["oneness", "liberation", "creation", "dissolution", "rebirth"],
    moodTags: ["seeking freedom", "transcendence", "peace"],
  },
  {
    id: "14.3",
    chapter: 14,
    verse: 3,
    sanskrit:
      "मम योनिर्महद्ब्रह्म तस्मिन्गर्भं दधाम्यहम् | सम्भवः सर्वभूतानां ततो भवति भारत ||",
    transliteration:
      "mama yonir mahad brahma tasmin garbhaṁ dadhāmy aham | sambhavaḥ sarva-bhūtānāṁ tato bhavati bhārata ||",
    english:
      "The great Brahman (Prakriti) is My womb; in that I place the embryo. From that, O Bharata, is the birth of all beings.",
    hindi:
      "हे भारत! महत् ब्रह्म (प्रकृति) मेरी योनि है; उसमें मैं गर्भ स्थापित करता हूँ। उससे ही सभी प्राणियों का जन्म होता है।",
    meaning:
      "Krishna reveals the metaphysics of creation — Prakriti is the womb, and He is the father-seed. All living beings emerge from this divine union of Spirit and Nature.",
    keywords: ["creation", "Prakriti", "Brahman", "birth", "cosmic origin"],
    moodTags: ["curiosity", "cosmic wonder", "understanding"],
  },
  {
    id: "14.4",
    chapter: 14,
    verse: 4,
    sanskrit:
      "सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः | तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता ||",
    transliteration:
      "sarva-yoniṣu kaunteya mūrtayaḥ sambhavanti yāḥ | tāsāṁ brahma mahad yonir ahaṁ bīja-pradaḥ pitā ||",
    english:
      "Whatever forms are produced in all the wombs, O son of Kunti, Brahman (Prakriti) is their great womb, and I am the seed-giving Father.",
    hindi:
      "हे कुन्तीपुत्र! सभी योनियों में जो भी मूर्तियाँ (शरीर) उत्पन्न होती हैं, महत् ब्रह्म उन सबकी योनि है और मैं बीज प्रदान करने वाला पिता हूँ।",
    meaning:
      "In all species and forms of life, Prakriti is the mother-womb and Krishna is the divine father. This reveals the unity behind all diversity in creation.",
    keywords: ["all species", "divine father", "Prakriti", "unity", "creation"],
    moodTags: ["cosmic wonder", "understanding oneness", "devotion"],
  },
  {
    id: "14.5",
    chapter: 14,
    verse: 5,
    sanskrit:
      "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः | निबध्नन्ति महाबाहो देहे देहिनमव्ययम् ||",
    transliteration:
      "sattvaṁ rajas tama iti guṇāḥ prakṛti-sambhavāḥ | nibadhnanti mahā-bāho dehe dehinam avyayam ||",
    english:
      "Sattva, Rajas, and Tamas — these three Gunas born of Prakriti bind the imperishable soul to the body, O mighty-armed one.",
    hindi:
      "हे महाबाहु! सत्त्व, रज और तम — ये तीन गुण प्रकृति से उत्पन्न हैं। ये अव्यय आत्मा को देह में बाँधते हैं।",
    meaning:
      "The three fundamental qualities of Nature — Sattva (purity), Rajas (activity), and Tamas (inertia) — bind the eternal soul to the physical body. Liberation requires transcending all three.",
    keywords: [
      "sattva",
      "rajas",
      "tamas",
      "three gunas",
      "binding",
      "Prakriti",
    ],
    moodTags: [
      "seeking understanding",
      "spiritual inquiry",
      "confusion about life",
    ],
  },
  {
    id: "14.6",
    chapter: 14,
    verse: 6,
    sanskrit: "तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम् | सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ ||",
    transliteration:
      "tatra sattvaṁ nirmalatvāt prakāśakam anāmayam | sukha-saṅgena badhnāti jñāna-saṅgena cānagha ||",
    english:
      "Of these, Sattva, being pure, is illuminating and free from sickness. It binds through attachment to happiness and through attachment to knowledge, O sinless one.",
    hindi:
      "हे निष्पाप! उनमें सत्त्व निर्मल होने के कारण प्रकाशक और निर्विकार है; यह सुख की आसक्ति और ज्ञान की आसक्ति से बाँधता है।",
    meaning:
      "Sattva guna, though the purest and most illuminating of the three, still binds the soul — through attachment to happiness and knowledge. Even virtue becomes a chain when clung to.",
    keywords: [
      "sattva",
      "purity",
      "illumination",
      "attachment to happiness",
      "knowledge",
    ],
    moodTags: ["seeking clarity", "spiritual growth", "detachment"],
  },
  {
    id: "14.7",
    chapter: 14,
    verse: 7,
    sanskrit:
      "रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम् | तन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम् ||",
    transliteration:
      "rajo rāgātmakaṁ viddhi tṛṣṇā-saṅga-samudbhavam | tan nibadhnāti kaunteya karma-saṅgena dehinam ||",
    english:
      "Know Rajas to be of the nature of passion, born of craving and attachment. It binds the embodied soul, O son of Kunti, through attachment to action.",
    hindi:
      "हे कुन्तीपुत्र! रज को राग स्वभाव वाला जानो, जो तृष्णा और आसक्ति से उत्पन्न होता है। यह देहधारी को कर्म की आसक्ति से बाँधता है।",
    meaning:
      "Rajas — the quality of passion and restless activity — arises from desire and attachment. It binds the soul to endless action and the pursuit of results.",
    keywords: ["rajas", "passion", "desire", "attachment", "action", "craving"],
    moodTags: ["restlessness", "desire", "ambition", "seeking peace"],
  },
  {
    id: "14.8",
    chapter: 14,
    verse: 8,
    sanskrit:
      "तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम् | प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत ||",
    transliteration:
      "tamas tv ajñāna-jaṁ viddhi mohanaṁ sarva-dehinām | pramādālasya-nidrābhis tan nibadhnāti bhārata ||",
    english:
      "Know Tamas to be born of ignorance, deluding all embodied beings. It binds through negligence, laziness, and sleep, O Bharata.",
    hindi:
      "हे भारत! तम को अज्ञान से उत्पन्न और सभी देहधारियों को मोहित करने वाला जानो। यह प्रमाद, आलस्य और निद्रा से बाँधता है।",
    meaning:
      "Tamas — the guna of ignorance and darkness — deludes all beings and binds through laziness, negligence, and excessive sleep. It is the force that prevents spiritual awakening.",
    keywords: [
      "tamas",
      "ignorance",
      "delusion",
      "laziness",
      "sleep",
      "darkness",
    ],
    moodTags: ["depression", "lethargy", "confusion", "needing motivation"],
  },
  {
    id: "14.9",
    chapter: 14,
    verse: 9,
    sanskrit:
      "सत्त्वं सुखे सञ्जयति रजः कर्मणि भारत | ज्ञानमावृत्य तु तमः प्रमादे सञ्जयत्युत ||",
    transliteration:
      "sattvaṁ sukhe sañjayati rajaḥ karmaṇi bhārata | jñānam āvṛtya tu tamaḥ pramāde sañjayaty uta ||",
    english:
      "Sattva attaches to happiness, Rajas to action, O Bharata; while Tamas, veiling knowledge, attaches to negligence.",
    hindi:
      "हे भारत! सत्त्व सुख में आसक्ति उत्पन्न करता है, रज कर्म में; और तम ज्ञान को ढककर प्रमाद में आसक्ति उत्पन्न करता है।",
    meaning:
      "Each guna creates a different form of bondage: Sattva through pleasure, Rajas through compulsive action, and Tamas through dulling knowledge with negligence.",
    keywords: ["sattva", "rajas", "tamas", "happiness", "action", "negligence"],
    moodTags: ["self-reflection", "seeking understanding", "spiritual study"],
  },
  {
    id: "14.10",
    chapter: 14,
    verse: 10,
    sanskrit: "रजस्तमश्चाभिभूय सत्त्वं भवति भारत | रजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा ||",
    transliteration:
      "rajas tamaś cābhibhūya sattvaṁ bhavati bhārata | rajaḥ sattvaṁ tamaś caiva tamaḥ sattvaṁ rajas tathā ||",
    english:
      "Sattva prevails, having overpowered Rajas and Tamas, O Bharata. Rajas prevails, having overcome Sattva and Tamas; and Tamas prevails, having overpowered Sattva and Rajas.",
    hindi:
      "हे भारत! रज और तम को दबाकर सत्त्व उत्पन्न होता है; सत्त्व और तम को दबाकर रज; तथा सत्त्व और रज को दबाकर तम उत्पन्न होता है।",
    meaning:
      "The three Gunas are in constant dynamic interplay — each one dominating at different times, suppressing the others. This flux determines our moods, actions, and states of mind.",
    keywords: [
      "interplay of gunas",
      "dynamic balance",
      "mind states",
      "fluctuation",
    ],
    moodTags: ["mood swings", "understanding behavior", "self-awareness"],
  },
  {
    id: "14.11",
    chapter: 14,
    verse: 11,
    sanskrit:
      "सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते | ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत ||",
    transliteration:
      "sarva-dvāreṣu dehe'smin prakāśa upajāyate | jñānaṁ yadā tadā vidyād vivṛddhaṁ sattvam ity uta ||",
    english:
      "When the light of knowledge shines through all the gates of this body, then it should be known that Sattva is predominant.",
    hindi:
      "जब इस देह के सभी द्वारों में प्रकाश और ज्ञान उत्पन्न होता है, तब समझना चाहिए कि सत्त्व गुण बढ़ा हुआ है।",
    meaning:
      "The signs of Sattva are clear: illumination through all the senses, clarity of mind, alertness, wisdom shining through every faculty of perception.",
    keywords: [
      "sattva signs",
      "illumination",
      "clarity",
      "wisdom",
      "knowledge",
    ],
    moodTags: ["clarity", "peace", "wisdom", "spiritual alertness"],
  },
  {
    id: "14.12",
    chapter: 14,
    verse: 12,
    sanskrit:
      "लोभः प्रवृत्तिरारम्भः कर्मणामशमः स्पृहा | रजस्येतानि जायन्ते विवृद्धे भरतर्षभ ||",
    transliteration:
      "lobhaḥ pravṛttir ārambhaḥ karmaṇām aśamaḥ spṛhā | rajasy etāni jāyante vivṛddhe bharatarṣabha ||",
    english:
      "Greed, activity, undertaking of actions, restlessness, craving — these arise when Rajas is predominant, O best of the Bharatas.",
    hindi:
      "हे भरतश्रेष्ठ! रज गुण के बढ़ने पर लोभ, प्रवृत्ति (गतिशीलता), कर्मों का आरम्भ, अशान्ति और स्पृहा (तीव्र इच्छा) उत्पन्न होती है।",
    meaning:
      "When Rajas dominates, it manifests as greed, compulsive activity, constant starting of new projects, restlessness, and intense craving for more.",
    keywords: ["rajas signs", "greed", "restlessness", "craving", "ambition"],
    moodTags: ["restlessness", "greed", "ambition", "anxiety"],
  },
  {
    id: "14.13",
    chapter: 14,
    verse: 13,
    sanskrit:
      "अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च | तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन ||",
    transliteration:
      "aprakāśo'pravṛttiś ca pramādo moha eva ca | tamasy etāni jāyante vivṛddhe kuru-nandana ||",
    english:
      "Darkness, inactivity, negligence, and delusion — these arise when Tamas is predominant, O joy of the Kurus.",
    hindi:
      "हे कुरुनन्दन! तम गुण के बढ़ने पर अप्रकाश (अज्ञान का अन्धकार), अप्रवृत्ति, प्रमाद और मोह उत्पन्न होते हैं।",
    meaning:
      "When Tamas prevails, it manifests as mental darkness, inability to act, carelessness, confusion, and delusion. These are the signs to recognize and overcome through sattva.",
    keywords: [
      "tamas signs",
      "darkness",
      "inactivity",
      "delusion",
      "confusion",
    ],
    moodTags: ["depression", "confusion", "inertia", "darkness"],
  },
  {
    id: "14.14",
    chapter: 14,
    verse: 14,
    sanskrit:
      "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत् | तदोत्तमविदां लोकानमलान्प्रतिपद्यते ||",
    transliteration:
      "yadā sattve pravṛddhe tu pralayaṁ yāti deha-bhṛt | tadottama-vidāṁ lokān amalān pratipadyate ||",
    english:
      "When one departs from this body while Sattva predominates, they attain the pure worlds of those who know the Highest.",
    hindi:
      "जब देहधारी सत्त्व के प्रधान रहने पर शरीर छोड़ता है, तो वह उत्तम ज्ञानियों के निर्मल लोकों को प्राप्त होता है।",
    meaning:
      "Death in a sattvic state leads to the highest realms — the pure worlds inhabited by the wise and enlightened. The state at death determines the next destination.",
    keywords: [
      "death in sattva",
      "pure worlds",
      "after death",
      "enlightened beings",
    ],
    moodTags: ["fear of death", "spiritual aspiration", "afterlife"],
  },
  {
    id: "14.15",
    chapter: 14,
    verse: 15,
    sanskrit: "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते | तथा प्रलीनस्तमसि मूढयोनिषु जायते ||",
    transliteration:
      "rajasi pralayaṁ gatvā karma-saṅgiṣu jāyate | tathā pralīnas tamasi mūḍha-yoniṣu jāyate ||",
    english:
      "Having departed in Rajas, one is born among those attached to action. Dying in Tamas, one is born in the wombs of the deluded.",
    hindi:
      "रज में मरने पर कर्मासक्त प्राणियों में जन्म होता है। तम में मरने पर मूढ योनियों (पशु आदि) में जन्म होता है।",
    meaning:
      "Death in the rajasic state leads to rebirth among action-obsessed beings. Death in tamas leads to lower births in deluded or animal forms — reinforcing the importance of cultivating sattva.",
    keywords: ["rebirth", "rajas death", "tamas death", "karma", "next life"],
    moodTags: ["fear of death", "concern about future", "karma awareness"],
  },
  {
    id: "14.16",
    chapter: 14,
    verse: 16,
    sanskrit:
      "कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम् | रजसस्तु फलं दुःखमज्ञानं तमसः फलम् ||",
    transliteration:
      "karmaṇaḥ sukṛtasyāhuḥ sāttvikaṁ nirmalaṁ phalam | rajasas tu phalaṁ duḥkham ajñānaṁ tamasaḥ phalam ||",
    english:
      "They say the fruit of good action is pure (sattvic). The fruit of Rajas is pain; the fruit of Tamas is ignorance.",
    hindi:
      "शुभ कर्म का फल सात्त्विक और निर्मल कहा जाता है। राजसिक कर्म का फल दुःख है; और तामसिक कर्म का फल अज्ञान है।",
    meaning:
      "Every action bears a fruit matching its guna: sattvic actions yield purity and joy; rajasic yield pain and frustration; tamasic yield deeper ignorance and confusion.",
    keywords: [
      "fruits of action",
      "karma results",
      "sattva fruit",
      "rajas pain",
      "tamas ignorance",
    ],
    moodTags: [
      "understanding consequences",
      "cause and effect",
      "seeking better results",
    ],
  },
  {
    id: "14.17",
    chapter: 14,
    verse: 17,
    sanskrit:
      "सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च | प्रमादमोहौ तमसो भवतोऽज्ञानमेव च ||",
    transliteration:
      "sattvāt sañjāyate jñānaṁ rajaso lobha eva ca | pramāda-mohau tamaso bhavato'jñānam eva ca ||",
    english:
      "From Sattva arises knowledge; from Rajas arises greed; from Tamas arise negligence and delusion and also ignorance.",
    hindi:
      "सत्त्व से ज्ञान उत्पन्न होता है; रज से लोभ उत्पन्न होता है; और तम से प्रमाद, मोह और अज्ञान उत्पन्न होते हैं।",
    meaning:
      "The three gunas generate distinctly different qualities of mind: sattva produces wisdom, rajas produces greed, and tamas produces delusion and ignorance.",
    keywords: [
      "knowledge from sattva",
      "greed from rajas",
      "ignorance from tamas",
    ],
    moodTags: ["self-inquiry", "understanding mind", "spiritual diagnosis"],
  },
  {
    id: "14.18",
    chapter: 14,
    verse: 18,
    sanskrit:
      "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः | जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः ||",
    transliteration:
      "ūrdhvaṁ gacchanti sattva-sthā madhye tiṣṭhanti rājasāḥ | jaghanya-guṇa-vṛtti-sthā adho gacchanti tāmasāḥ ||",
    english:
      "Those established in Sattva rise upward; the rajasic remain in the middle; the tamasic, abiding in the lowest Guna, go downward.",
    hindi:
      "सत्त्व में स्थित ऊपर जाते हैं; राजसिक बीच में रहते हैं; और जो तम की नीच वृत्तियों में रहते हैं, वे नीचे जाते हैं।",
    meaning:
      "The three gunas determine spiritual trajectory: sattva elevates, rajas keeps one in cycles of activity and rebirth in the middle realms, and tamas pulls consciousness downward.",
    keywords: [
      "spiritual ascent",
      "sattva rises",
      "rajas middle",
      "tamas descends",
    ],
    moodTags: [
      "spiritual aspiration",
      "self-improvement",
      "concern about direction",
    ],
  },
  {
    id: "14.19",
    chapter: 14,
    verse: 19,
    sanskrit:
      "नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति | गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति ||",
    transliteration:
      "nānyaṁ guṇebhyaḥ kartāraṁ yadā draṣṭānupaśyati | guṇebhyaś ca paraṁ vetti mad-bhāvaṁ so'dhigacchati ||",
    english:
      "When the seer perceives no agent other than the Gunas, and knows that which is beyond the Gunas, he attains My Being.",
    hindi:
      "जब द्रष्टा गुणों के अतिरिक्त किसी अन्य कर्ता को नहीं देखता और गुणों से परे जो है उसे जानता है, तब वह मेरे भाव को प्राप्त होता है।",
    meaning:
      "The moment of liberation arrives when the soul perceives that all action belongs to the three Gunas, not to the Self, and recognizes the transcendent Self beyond all Gunas — this is union with Krishna.",
    keywords: [
      "non-doer",
      "beyond gunas",
      "liberation",
      "divine nature",
      "witnessing",
    ],
    moodTags: ["spiritual breakthrough", "ego dissolution", "awakening"],
  },
  {
    id: "14.20",
    chapter: 14,
    verse: 20,
    sanskrit: "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान् | जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते ||",
    transliteration:
      "guṇān etān atītya trīn dehī deha-samudbhavān | janma-mṛtyu-jarā-duḥkhair vimukto'mṛtam aśnute ||",
    english:
      "Having transcended these three Gunas which are the origin of the body, the embodied soul is freed from birth, death, old age, and sorrow, and attains immortality.",
    hindi:
      "इन तीनों गुणों को, जो देह के उद्भव के कारण हैं, पार कर जाने पर देहधारी जन्म, मृत्यु, वृद्धावस्था और दुःखों से मुक्त होकर अमृत का अनुभव करता है।",
    meaning:
      "The ultimate liberation: transcending all three gunas frees the soul from the suffering cycle of birth, death, aging, and sorrow — and grants immortality.",
    keywords: [
      "transcending gunas",
      "liberation",
      "immortality",
      "freedom from birth and death",
    ],
    moodTags: ["liberation", "hope", "transcendence", "freedom"],
  },
  {
    id: "14.21",
    chapter: 14,
    verse: 21,
    sanskrit:
      "अर्जुन उवाच | कैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो | किमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते ||",
    transliteration:
      "arjuna uvāca | kair liṅgais trīn guṇān etān atīto bhavati prabho | kim ācāraḥ kathaṁ caitāṁs trīn guṇān ativartate ||",
    english:
      "Arjuna said: O Lord, by what marks is the one who has transcended the three Gunas known? What is their conduct? How do they pass beyond these three Gunas?",
    hindi:
      "अर्जुन ने कहा — हे प्रभु! इन तीन गुणों को पार करने वाले के क्या लक्षण हैं? उनका आचरण कैसा होता है? और वे इन तीन गुणों को कैसे पार करते हैं?",
    meaning:
      "Arjuna asks a profound practical question: What does a Guna-transcendent person look like in daily life? How do they behave? And how does one actually achieve this transcendence?",
    keywords: [
      "marks of transcendence",
      "gunatita",
      "Arjuna's question",
      "practical spirituality",
    ],
    moodTags: ["curiosity", "seeking guidance", "practical spirituality"],
  },
  {
    id: "14.22",
    chapter: 14,
    verse: 22,
    sanskrit:
      "श्रीभगवानुवाच | प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव | न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति ||",
    transliteration:
      "śrī-bhagavān uvāca | prakāśaṁ ca pravṛttiṁ ca moham eva ca pāṇḍava | na dveṣṭi sampravṛttāni na nivṛttāni kāṅkṣati ||",
    english:
      "The Blessed Lord said: O Pandava, the one who does not hate illumination, activity, and delusion when they arise, nor craves for them when they cease —",
    hindi:
      "श्री भगवान बोले — हे पाण्डव! जो प्रकाश, प्रवृत्ति और मोह के उत्पन्न होने पर उनसे द्वेष नहीं करता और निवृत्त होने पर उनकी इच्छा नहीं करता —",
    meaning:
      "Krishna begins describing the transcendent person: they observe the arising and passing of sattvic, rajasic, and tamasic states without hatred or craving — perfect equanimity.",
    keywords: [
      "equanimity",
      "transcendent person",
      "no hatred",
      "no craving",
      "witness",
    ],
    moodTags: ["equanimity", "peace", "non-attachment", "wisdom"],
  },
  {
    id: "14.23",
    chapter: 14,
    verse: 23,
    sanskrit:
      "उदासीनवदासीनो गुणैर्यो न विचाल्यते | गुणा वर्तन्त इत्येवं योऽवतिष्ठति नेङ्गते ||",
    transliteration:
      "udāsīnavad āsīno guṇair yo na vicālyate | guṇā vartanta ity evaṁ yo'vatiṣṭhati neṅgate ||",
    english:
      "One who sits as if unconcerned, who is not shaken by the Gunas, who knows that 'the Gunas are operating' and remains firm without wavering —",
    hindi:
      "जो उदासीन की तरह बैठे हुए गुणों से विचलित नहीं होता और जो 'गुण ही क्रिया कर रहे हैं' — यह जानकर स्थिर और अचल रहता है —",
    meaning:
      "The gunatita person sits as a neutral witness — unmoved by the play of gunas, knowing that it is Prakriti's qualities that act, not the Self. They are the unshaken witness.",
    keywords: ["witness", "unshaken", "gunas operate", "equanimity", "firm"],
    moodTags: ["steadiness", "inner peace", "non-attachment", "witnessing"],
  },
  {
    id: "14.24",
    chapter: 14,
    verse: 24,
    sanskrit:
      "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः | तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः ||",
    transliteration:
      "sama-duḥkha-sukhaḥ svasthaḥ sama-loṣṭāśma-kāñcanaḥ | tulya-priyāpriyo dhīras tulya-nindātma-saṁstutiḥ ||",
    english:
      "Equal in pleasure and pain, self-contained, viewing a clod of dirt, a stone, and gold as the same; equal toward the pleasant and unpleasant, firm; equal in censure and praise of oneself —",
    hindi:
      "जो सुख-दुःख में समान, स्वस्थ (आत्मस्थित), मिट्टी-पत्थर-सोने को समान मानने वाला, प्रिय-अप्रिय में समान, धैर्यशाली, और निन्दा-स्तुति में समान हो —",
    meaning:
      "The transcendent person is completely equal in all dualities — pleasure and pain, dirt and gold, praise and blame. This perfect equanimity is the outward sign of inner freedom.",
    keywords: [
      "equanimity",
      "same in all",
      "gold and mud",
      "praise and blame",
      "inner freedom",
    ],
    moodTags: [
      "equanimity",
      "inner peace",
      "non-attachment",
      "wisdom in adversity",
    ],
  },
  {
    id: "14.25",
    chapter: 14,
    verse: 25,
    sanskrit:
      "मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः | सर्वारम्भपरित्यागी गुणातीतः स उच्यते ||",
    transliteration:
      "mānāpamānayos tulyas tulyo mitrāri-pakṣayoḥ | sarvārambha-parityāgī guṇātītaḥ sa ucyate ||",
    english:
      "Equal in honor and dishonor, equal toward the side of friend and foe, having renounced all undertakings — such a one is said to have transcended the Gunas.",
    hindi:
      "जो मान और अपमान में समान हो, मित्र और शत्रु पक्ष में समान हो, और जिसने सभी आरम्भों (कामना-प्रेरित कर्मों) का त्याग कर दिया हो — वह गुणातीत कहलाता है।",
    meaning:
      "The final mark of the Guna-transcendent: equal toward friends and enemies, honored and dishonored, having abandoned all desire-driven undertakings. This is the definition of gunatita.",
    keywords: [
      "gunatita",
      "equal toward all",
      "friend and enemy",
      "renunciation",
      "transcendence",
    ],
    moodTags: [
      "liberation",
      "equanimity",
      "transcendence",
      "spiritual mastery",
    ],
  },
  {
    id: "14.26",
    chapter: 14,
    verse: 26,
    sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते | स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ||",
    transliteration:
      "māṁ ca yo'vyabhicāreṇa bhakti-yogena sevate | sa guṇān samatītyaitān brahma-bhūyāya kalpate ||",
    english:
      "And one who serves Me with unswerving devotion through Bhakti Yoga transcends these Gunas and becomes fit for Brahman.",
    hindi:
      "जो अव्यभिचारी भक्तियोग से मेरी सेवा करता है, वह इन गुणों को पार करके ब्रह्मभाव के लिए योग्य हो जाता है।",
    meaning:
      "The supreme path to transcending all three Gunas is unwavering devotion to Krishna — Bhakti Yoga. Pure, undivided love for God is the direct and effortless path to liberation.",
    keywords: [
      "bhakti yoga",
      "unwavering devotion",
      "transcending gunas",
      "Brahman",
      "liberation",
    ],
    moodTags: ["devotion", "love for God", "liberation path", "bhakti"],
  },
  {
    id: "14.27",
    chapter: 14,
    verse: 27,
    sanskrit:
      "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च | शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च ||",
    transliteration:
      "brahmaṇo hi pratiṣṭhāham amṛtasyāvyayasya ca | śāśvatasya ca dharmasya sukhasyaikāntikasya ca ||",
    english:
      "For I am the abode of Brahman — the immortal and imperishable — of eternal Dharma, and of absolute bliss.",
    hindi:
      "क्योंकि मैं ही अमृत, अव्यय ब्रह्म का, शाश्वत धर्म का और एकान्तिक सुख का आधार हूँ।",
    meaning:
      "Krishna closes Chapter 14 with the supreme declaration: He is the very foundation of Brahman, the basis of immortality, eternal Dharma, and absolute unending bliss. All liberation rests in Him.",
    keywords: [
      "Brahman",
      "immortality",
      "eternal dharma",
      "absolute bliss",
      "foundation of all",
    ],
    moodTags: ["devotion", "surrender", "peace", "final liberation"],
  },

  // ========== CHAPTER 15: PURUSHOTTAMA YOGA ==========
  // The Yoga of the Supreme Person

  {
    id: "15.1",
    chapter: 15,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम् | छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् ||",
    transliteration:
      "śrī-bhagavān uvāca | ūrdhva-mūlam adhaḥ-śākham aśvatthaṁ prāhur avyayam | chandāṁsi yasya parṇāni yas taṁ veda sa veda-vit ||",
    english:
      "The Blessed Lord said: They speak of an imperishable Ashvattha tree with its roots above and branches below, whose leaves are the Vedic hymns. One who knows this tree knows the Vedas.",
    hindi:
      "श्री भगवान बोले — ऊपर जड़ें और नीचे शाखाओं वाले अश्वत्थ वृक्ष को अव्यय (अविनाशी) कहा जाता है। उसकी पत्तियाँ वैदिक छन्द हैं। जो इस वृक्ष को जानता है, वह वेदों का ज्ञाता है।",
    meaning:
      "Chapter 15 opens with the cosmic metaphor of the inverted Ashvattha tree — roots above in the divine, branches spreading into the material world. This tree of existence is described in the Vedas and must be understood and cut to attain liberation.",
    keywords: [
      "Ashvattha tree",
      "cosmic tree",
      "Vedas",
      "inverted tree",
      "samsara",
    ],
    moodTags: ["cosmic wonder", "seeking wisdom", "understanding existence"],
  },
  {
    id: "15.2",
    chapter: 15,
    verse: 2,
    sanskrit:
      "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा गुणप्रवृद्धा विषयप्रवालाः | अधश्च मूलान्यनुसन्ततानि कर्मानुबन्धीनि मनुष्यलोके ||",
    transliteration:
      "adhaś cordhvaṁ prasṛtās tasya śākhā guṇa-pravṛddhā viṣaya-pravālāḥ | adhaś ca mūlāny anusantatāni karmānubandhīni manuṣya-loke ||",
    english:
      "Its branches spread below and above, nourished by the Gunas, with sense objects as its sprouts. Below, its roots extend into the human world, binding through karma.",
    hindi:
      "उस वृक्ष की शाखाएँ गुणों से पोषित होकर नीचे और ऊपर फैली हैं, विषय उसके अंकुर हैं। नीचे की ओर मानव लोक में कर्म से बँधी हुई जड़ें फैली हैं।",
    meaning:
      "The cosmic tree's branches represent all living beings nourished by the gunas, with sensory pleasures as tender shoots. Its roots extend downward too, binding souls through karma in the human realm.",
    keywords: [
      "cosmic tree",
      "sense objects",
      "karma binding",
      "gunas nourish",
      "human world",
    ],
    moodTags: ["understanding bondage", "seeking freedom", "spiritual inquiry"],
  },
  {
    id: "15.3",
    chapter: 15,
    verse: 3,
    sanskrit:
      "न रूपमस्येह तथोपलभ्यते नान्तो न चादिर्न च सम्प्रतिष्ठा | अश्वत्थमेनं सुविरूढमूलमसङ्गशस्त्रेण दृढेन छित्त्वा ||",
    transliteration:
      "na rūpam asyeha tathopalabhyate nānto na cādir na ca sampratiṣṭhā | aśvattham enaṁ su-virūḍha-mūlam asaṅga-śastreṇa dṛḍhena chittvā ||",
    english:
      "Its form is not perceived here as such; neither its end, nor its origin, nor its foundation. Having cut down this deeply rooted Ashvattha tree with the strong axe of non-attachment —",
    hindi:
      "इस संसार में इसका वास्तविक रूप न वैसा दिखता है, न इसका अन्त है, न आदि, न आधार। इस अत्यन्त दृढ़मूल वाले अश्वत्थ को असंग (वैराग्य) के दृढ़ शस्त्र से काटकर —",
    meaning:
      "The tree of worldly existence has no visible true form — it has no clear beginning, end, or foundation. To escape it, one must wield the sharp axe of non-attachment and cut through all worldly bonds.",
    keywords: [
      "non-attachment",
      "cutting the tree",
      "vairagya",
      "liberation path",
      "illusion",
    ],
    moodTags: ["detachment", "renunciation", "liberation path", "courage"],
  },
  {
    id: "15.4",
    chapter: 15,
    verse: 4,
    sanskrit:
      "ततः पदं तत्परिमार्गितव्यं यस्मिन्गता न निवर्तन्ति भूयः | तमेव चाद्यं पुरुषं प्रपद्ये यतः प्रवृत्तिः प्रसृता पुरणी ||",
    transliteration:
      "tataḥ padaṁ tat parimārgitavyaṁ yasmin gatā na nivartanti bhūyaḥ | tam eva cādyaṁ puruṣaṁ prapadye yataḥ pravṛttiḥ prasṛtā purāṇī ||",
    english:
      "Then that goal must be sought from which, having gone, one does not return again. One should surrender to that Primal Person from whom this ancient flow of creation has come forth.",
    hindi:
      "तब उस परम पद को खोजना चाहिए जहाँ जाने के बाद पुनः वापस नहीं लौटना पड़ता। उस आदि पुरुष की शरण लेनी चाहिए जिससे यह प्राचीन प्रवृत्ति (सृष्टि) बही है।",
    meaning:
      "After cutting the tree of attachment, one must seek the Supreme Abode — that state of no return. The path is surrender to the Primal Being from whom all creation flows.",
    keywords: [
      "supreme abode",
      "no return",
      "surrender",
      "primal person",
      "final liberation",
    ],
    moodTags: ["surrender", "liberation", "devotion", "seeking ultimate"],
  },
  {
    id: "15.5",
    chapter: 15,
    verse: 5,
    sanskrit:
      "निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामाः | द्वन्द्वैर्विमुक्ताः सुखदुःखसञ्ज्ञैर्गच्छन्त्यमूढाः पदमव्ययम् तत् ||",
    transliteration:
      "nirmāna-mohā jita-saṅga-doṣā adhyātma-nityā vinivṛtta-kāmāḥ | dvandvair vimuktāḥ sukha-duḥkha-saṁjñair gacchanty amūḍhāḥ padam avyayam tat ||",
    english:
      "Free from pride and delusion, having conquered the evil of attachment, constantly dwelling in the Self, with desires turned away, liberated from the pairs of opposites (pleasure-pain) — the undeluded reach that imperishable abode.",
    hindi:
      "जो मान-मोह से मुक्त हैं, आसक्ति के दोष को जीत चुके हैं, नित्य आत्मज्ञान में रहते हैं, कामनाएँ शान्त हो गई हैं, और सुख-दुःख के द्वन्द्वों से मुक्त हैं — वे अमूढ़ जन उस अव्यय पद को प्राप्त होते हैं।",
    meaning:
      "The qualities required to reach the Imperishable Abode: freedom from pride and delusion, conquest of attachment, constant self-awareness, extinguished desires, and liberation from the pairs of opposites.",
    keywords: [
      "free from pride",
      "no attachment",
      "imperishable abode",
      "liberation",
      "beyond opposites",
    ],
    moodTags: [
      "liberation",
      "detachment",
      "spiritual mastery",
      "inner freedom",
    ],
  },
  {
    id: "15.6",
    chapter: 15,
    verse: 6,
    sanskrit:
      "न तद्भासयते सूर्यो न शशाङ्को न पावकः | यद्गत्वा न निवर्तन्ते तद्धाम परमं मम ||",
    transliteration:
      "na tad bhāsayate sūryo na śaśāṅko na pāvakaḥ | yad gatvā na nivartante tad dhāma paramaṁ mama ||",
    english:
      "That which is not illuminated by the sun, nor the moon, nor fire — that is My Supreme Abode. Having gone there, they do not return.",
    hindi:
      "वह स्थान न सूर्य से प्रकाशित होता है, न चन्द्रमा से, न अग्नि से। जहाँ जाने के बाद वापस नहीं लौटना पड़ता — वह मेरा परम धाम है।",
    meaning:
      "Krishna reveals His Supreme Abode — it needs no external light, for it IS light itself. No sun, moon, or fire can illuminate it. It is the unconditioned, eternal realm beyond all material existence.",
    keywords: [
      "supreme abode",
      "no return",
      "self-luminous",
      "beyond sun and moon",
      "eternal realm",
    ],
    moodTags: ["devotion", "cosmic wonder", "liberation", "seeking divine"],
  },
  {
    id: "15.7",
    chapter: 15,
    verse: 7,
    sanskrit:
      "ममैवांशो जीवलोके जीवभूतः सनातनः | मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ||",
    transliteration:
      "mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ | manaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati ||",
    english:
      "An eternal portion of Me alone, becoming the living soul in the world of life, draws to itself the senses, of which the mind is the sixth, abiding in Prakriti.",
    hindi:
      "जीव-जगत में जीव बनकर रहने वाला जीव मेरा ही सनातन अंश है। वह प्रकृति में स्थित मन सहित छह इन्द्रियों को आकर्षित करता है।",
    meaning:
      "Every individual soul is an eternal fragment of Krishna Himself. The Self within is divine, pulling the five senses and the mind into experience within the material realm.",
    keywords: [
      "soul is divine fragment",
      "eternal part of Krishna",
      "six senses",
      "individual soul",
    ],
    moodTags: ["identity", "divine nature", "self-realization", "comfort"],
  },
  {
    id: "15.8",
    chapter: 15,
    verse: 8,
    sanskrit:
      "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः | गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात् ||",
    transliteration:
      "śarīraṁ yad avāpnoti yac cāpy utkrāmatīśvaraḥ | gṛhītvaitāni saṁyāti vāyur gandhān ivāśayāt ||",
    english:
      "When the Lord (the individual soul) takes on a body, and when He leaves it, He carries these (senses and mind) with Him, just as the wind carries fragrance from its source.",
    hindi:
      "जब ईश्वर (जीवात्मा) शरीर धारण करता है और जब उसे छोड़ता है, तो वह इन (इन्द्रियों और मन) को साथ ले जाता है — जैसे वायु गन्ध को आशय से ले जाती है।",
    meaning:
      "The soul carries its mind and senses from life to life, just as wind carries fragrance. This explains the continuity of personality, tendencies, and karma across incarnations.",
    keywords: [
      "transmigration",
      "soul carries senses",
      "rebirth",
      "continuity",
      "wind and fragrance",
    ],
    moodTags: [
      "understanding rebirth",
      "karma awareness",
      "continuity of soul",
    ],
  },
  {
    id: "15.9",
    chapter: 15,
    verse: 9,
    sanskrit: "श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च | अधिष्ठाय मनश्चायं विषयानुपसेवते ||",
    transliteration:
      "śrotraṁ cakṣuḥ sparśanaṁ ca rasanaṁ ghrāṇam eva ca | adhiṣṭhāya manaś cāyaṁ viṣayān upasevate ||",
    english:
      "Presiding over the ear, the eye, touch, taste, and smell — and also the mind — this soul experiences the objects of the senses.",
    hindi:
      "श्रोत्र, चक्षु, स्पर्श, रसना और घ्राण — इन सभी को और मन को भी अधिष्ठित करके यह (जीवात्मा) विषयों का अनुभव करती है।",
    meaning:
      "The individual soul, the living presence within, is the one that experiences through all five senses plus the mind. All experience ultimately rests in the soul.",
    keywords: [
      "five senses",
      "mind",
      "soul experiences",
      "sense objects",
      "subjective experience",
    ],
    moodTags: [
      "self-awareness",
      "understanding consciousness",
      "inner inquiry",
    ],
  },
  {
    id: "15.10",
    chapter: 15,
    verse: 10,
    sanskrit:
      "उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम् | विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः ||",
    transliteration:
      "utkrāmantaṁ sthitaṁ vāpi bhuñjānaṁ vā guṇānvitam | vimūḍhā nānupaśyanti paśyanti jñāna-cakṣuṣaḥ ||",
    english:
      "The deluded do not perceive it when departing, staying, or enjoying, colored by the Gunas. Only those with the eye of knowledge perceive it.",
    hindi:
      "जाते हुए, रहते हुए या गुणों से युक्त होकर भोग करते हुए भी — मूढ़ लोग इसे नहीं देखते। ज्ञान-चक्षु वाले ही इसे देखते हैं।",
    meaning:
      "The deluded cannot perceive the soul's presence even as it lives, moves, and experiences through the body. Only those with the eye of spiritual wisdom can see the soul's transcendent reality.",
    keywords: [
      "eye of wisdom",
      "soul invisible to deluded",
      "knowledge vision",
      "spiritual sight",
    ],
    moodTags: ["seeking wisdom", "spiritual vision", "understanding reality"],
  },
  {
    id: "15.11",
    chapter: 15,
    verse: 11,
    sanskrit:
      "यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम् | यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः ||",
    transliteration:
      "yatanto yoginaś cainaṁ paśyanty ātmany avasthitam | yatanto'py akṛtātmāno nainaṁ paśyanty acetasaḥ ||",
    english:
      "Striving yogis perceive this dwelling in the Self. But the unintelligent who have not purified themselves do not perceive this, even though striving.",
    hindi:
      "प्रयत्नशील योगी इसे आत्मा में स्थित देखते हैं। किन्तु जो अशुद्ध (अकृतात्मा) हैं और अचेतन हैं, वे प्रयत्न करने पर भी इसे नहीं देख पाते।",
    meaning:
      "Spiritual effort alone is not sufficient — one must also purify the mind. Striving yogis who have refined their consciousness see the Self; unpurified strivers cannot.",
    keywords: [
      "yoga",
      "purification",
      "spiritual striving",
      "self-realization",
      "seeing the soul",
    ],
    moodTags: [
      "spiritual effort",
      "purification",
      "perseverance",
      "yoga practice",
    ],
  },
  {
    id: "15.12",
    chapter: 15,
    verse: 12,
    sanskrit:
      "यदादित्यगतं तेजो जगद्भासयतेऽखिलम् | यच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम् ||",
    transliteration:
      "yad āditya-gataṁ tejo jagad bhāsayate'khilam | yac candramasi yac cāgnau tat tejo viddhi māmakam ||",
    english:
      "The light in the sun that illuminates the entire world, the light in the moon and in fire — know that light to be Mine.",
    hindi:
      "सूर्य में जो प्रकाश है जो समस्त जगत को प्रकाशित करता है, जो चन्द्रमा में है और अग्नि में है — उस प्रकाश को मेरा जानो।",
    meaning:
      "Krishna reveals His presence in all light. The light of the sun, moon, and fire are all manifestations of the divine luminosity. When you see light, you are perceiving Krishna's glory.",
    keywords: [
      "light of sun",
      "light of moon",
      "divine light",
      "Krishna in light",
      "cosmic presence",
    ],
    moodTags: ["cosmic wonder", "devotion", "seeing Krishna everywhere"],
  },
  {
    id: "15.13",
    chapter: 15,
    verse: 13,
    sanskrit:
      "गामाविश्य च भूतानि धारयाम्यहमोजसा | पुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः ||",
    transliteration:
      "gām āviśya ca bhūtāni dhārayāmy aham ojasā | puṣṇāmi cauṣadhīḥ sarvāḥ somo bhūtvā rasātmakaḥ ||",
    english:
      "And entering the earth, I support all beings with My energy. Becoming the nourishing moon, I nourish all plants.",
    hindi:
      "और पृथ्वी में प्रविष्ट होकर मैं अपनी ऊर्जा से सभी प्राणियों को धारण करता हूँ। रसात्मक चन्द्रमा बनकर मैं सभी औषधियों (वनस्पतियों) का पोषण करता हूँ।",
    meaning:
      "Krishna sustains all beings by entering the earth as its gravitational and vital energy, and nourishes all plant life by becoming the moon's moisture. The Divine is the force behind all natural sustenance.",
    keywords: [
      "earth energy",
      "sustaining life",
      "moon nourishes plants",
      "Krishna in nature",
    ],
    moodTags: [
      "gratitude",
      "cosmic wonder",
      "devotion",
      "seeing divine in nature",
    ],
  },
  {
    id: "15.14",
    chapter: 15,
    verse: 14,
    sanskrit:
      "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः | प्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् ||",
    transliteration:
      "ahaṁ vaiśvānaro bhūtvā prāṇināṁ deham āśritaḥ | prāṇāpāna-samāyuktaḥ pacāmy annaṁ catur-vidham ||",
    english:
      "Becoming the digestive fire Vaishvanara, I dwell in the body of all living beings. Joined with the Prana and Apana breaths, I digest the four kinds of food.",
    hindi:
      "मैं वैश्वानर (जठराग्नि) बनकर प्राणियों के देह में वास करता हूँ। प्राण और अपान से युक्त होकर मैं चार प्रकार के अन्न को पचाता हूँ।",
    meaning:
      "Krishna reveals Himself as the digestive fire within every being — the very force that transforms food into life. He sustains life from within, operating as the body's metabolic energy.",
    keywords: [
      "digestive fire",
      "Vaishvanara",
      "Prana",
      "Apana",
      "food digestion",
      "life sustaining",
    ],
    moodTags: ["gratitude", "body awareness", "divine in everyday life"],
  },
  {
    id: "15.15",
    chapter: 15,
    verse: 15,
    sanskrit:
      "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च | वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ||",
    transliteration:
      "sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca | vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham ||",
    english:
      "And I am seated in the hearts of all. From Me come memory, knowledge, and their removal. I alone am to be known by all the Vedas; I am the author of Vedanta and the knower of the Vedas.",
    hindi:
      "मैं सभी के हृदय में विराजमान हूँ। मुझसे ही स्मृति, ज्ञान और उनका अपोहन (विस्मरण) होता है। समस्त वेदों द्वारा मैं ही जानने योग्य हूँ; मैं ही वेदान्त का रचयिता और वेदों का ज्ञाता हूँ।",
    meaning:
      "One of the most profound verses in the Gita: Krishna dwells in the heart of every being. All memory, knowledge, and even forgetting come from Him. All scriptures ultimately point to Him alone.",
    keywords: [
      "Krishna in heart",
      "memory from God",
      "knowledge from God",
      "Vedas point to Krishna",
      "Vedanta",
    ],
    moodTags: [
      "devotion",
      "inner presence",
      "divine knowledge",
      "scripture study",
    ],
  },
  {
    id: "15.16",
    chapter: 15,
    verse: 16,
    sanskrit:
      "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च | क्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते ||",
    transliteration:
      "dvāv imau puruṣau loke kṣaraś cākṣara eva ca | kṣaraḥ sarvāṇi bhūtāni kūṭa-stho'kṣara ucyate ||",
    english:
      "There are two Purushas in this world: the perishable and the imperishable. All beings are perishable; the one who stands unchanging at the summit is called the imperishable.",
    hindi:
      "इस लोक में दो पुरुष हैं — क्षर (नाशवान) और अक्षर (अविनाशी)। सभी प्राणी क्षर हैं; जो कूटस्थ (शिखर पर अटल) है, वह अक्षर कहलाता है।",
    meaning:
      "Krishna introduces the cosmic framework: all material beings are perishable (Kshara); the unmanifested, unchanging Cosmic Soul is imperishable (Akshara). Beyond both stands the Supreme Person.",
    keywords: [
      "perishable",
      "imperishable",
      "Kshara",
      "Akshara",
      "two Purushas",
      "cosmic framework",
    ],
    moodTags: [
      "philosophical inquiry",
      "understanding reality",
      "eternal vs temporal",
    ],
  },
  {
    id: "15.17",
    chapter: 15,
    verse: 17,
    sanskrit:
      "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः | यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ||",
    transliteration:
      "uttamaḥ puruṣas tv anyaḥ paramātmety udāhṛtaḥ | yo loka-trayam āviśya bibharty avyaya īśvaraḥ ||",
    english:
      "But there is another — the Supreme Person — called Paramatman, the eternal Lord, who pervades the three worlds and sustains them.",
    hindi:
      "किन्तु इन दोनों से परे एक और ही है — उत्तम पुरुष — जिसे परमात्मा कहते हैं। वह अव्यय ईश्वर तीनों लोकों में प्रविष्ट होकर उन्हें धारण करता है।",
    meaning:
      "Beyond both the perishable and imperishable stands the Supreme Person — the Paramatman — the ultimate Godhead who pervades and sustains all three worlds. This is the highest reality.",
    keywords: [
      "Paramatman",
      "Supreme Person",
      "three worlds",
      "ultimate reality",
      "beyond Kshara-Akshara",
    ],
    moodTags: ["awe", "devotion", "supreme reality", "cosmic understanding"],
  },
  {
    id: "15.18",
    chapter: 15,
    verse: 18,
    sanskrit:
      "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः | अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः ||",
    transliteration:
      "yasmāt kṣaram atīto'ham akṣarād api cottamaḥ | ato'smi loke vede ca prathitaḥ puruṣottamaḥ ||",
    english:
      "Because I transcend the perishable and am even higher than the imperishable, therefore I am celebrated in the world and in the Vedas as the Purushottama — the Supreme Person.",
    hindi:
      "क्योंकि मैं क्षर से परे और अक्षर से भी उत्तम हूँ, इसलिए लोक में और वेदों में मैं पुरुषोत्तम के नाम से प्रसिद्ध हूँ।",
    meaning:
      "The supreme declaration: Krishna transcends both the perishable material realm and the imperishable unmanifest. He is the Purushottama — the Highest Person — celebrated in all Vedas and throughout creation.",
    keywords: [
      "Purushottama",
      "Supreme Person",
      "beyond perishable",
      "beyond imperishable",
      "highest",
    ],
    moodTags: ["devotion", "awe", "surrender", "supreme identity of Krishna"],
  },
  {
    id: "15.19",
    chapter: 15,
    verse: 19,
    sanskrit: "यो मामेवमसम्मूढो जानाति पुरुषोत्तमम् | स सर्वविद्भजति मां सर्वभावेन भारत ||",
    transliteration:
      "yo mām evam asammūḍho jānāti puruṣottamam | sa sarva-vid bhajati māṁ sarva-bhāvena bhārata ||",
    english:
      "Whoever, undeluded, thus knows Me as the Supreme Person — that one, knowing all, worships Me with their whole being, O Bharata.",
    hindi:
      "हे भारत! जो इस प्रकार अमूढ़ (ज्ञानी) होकर मुझे पुरुषोत्तम जानता है, वह सर्वज्ञ होकर सम्पूर्ण भाव से मेरी भक्ति करता है।",
    meaning:
      "The fruit of knowing Krishna as Purushottama: such a person becomes omniscient — knowing the full truth of existence — and naturally worships Krishna with their entire being, completely and without division.",
    keywords: [
      "knowing Krishna",
      "omniscient devotee",
      "whole-being devotion",
      "Purushottama knowledge",
    ],
    moodTags: [
      "devotion",
      "complete surrender",
      "whole-being love",
      "liberation through knowledge",
    ],
  },
  {
    id: "15.20",
    chapter: 15,
    verse: 20,
    sanskrit:
      "इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ | एतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत ||",
    transliteration:
      "iti guhyatamaṁ śāstram idam uktaṁ mayānagha | etad buddhvā buddhimān syāt kṛta-kṛtyaś ca bhārata ||",
    english:
      "Thus, O sinless one, this most secret scripture has been declared by Me. Understanding this, one becomes truly wise and all one's duties are fulfilled, O Bharata.",
    hindi:
      "हे निष्पाप भारत! इस प्रकार यह गुह्यतम शास्त्र मैंने कहा है। इसे जानकर व्यक्ति बुद्धिमान हो जाता है और उसके सभी कर्तव्य पूर्ण हो जाते हैं।",
    meaning:
      "Chapter 15 closes with Krishna declaring this teaching to be the most secret of all scriptures. Understanding the nature of Purushottama fulfills all dharmic duties and perfects wisdom — nothing more remains to be done.",
    keywords: [
      "most secret",
      "scripture complete",
      "wisdom fulfilled",
      "duties accomplished",
      "Purushottama",
    ],
    moodTags: [
      "completion",
      "fulfillment",
      "wisdom",
      "gratitude",
      "liberation",
    ],
  },
];
