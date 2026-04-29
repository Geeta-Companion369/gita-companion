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

export const GITA_VERSES_CH16_17: GitaVerse[] = [
  // ========== CHAPTER 16: DAIVASURA-SAMPAD-VIBHAGA YOGA ==========
  // The Yoga of the Division of Divine and Demoniacal Natures

  {
    id: "16.1",
    chapter: 16,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः | दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ||",
    transliteration:
      "śrī-bhagavān uvāca | abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ | dānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam ||",
    english:
      "The Blessed Lord said: Fearlessness, purity of mind, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scriptures, austerity and straightforwardness.",
    hindi:
      "श्री भगवान बोले — निर्भयता, अन्तःकरण की शुद्धि, ज्ञानयोग में दृढ़ स्थिति, दान, इन्द्रिय-दमन, यज्ञ, स्वाध्याय, तप और सरलता।",
    meaning:
      "Krishna begins enumerating the divine qualities — abhayam (fearlessness) heads the list, for all virtues flow from the courage to live rightly. These qualities elevate the soul toward liberation.",
    keywords: [
      "fearlessness",
      "purity",
      "yoga",
      "charity",
      "self-control",
      "scripture",
      "austerity",
      "divine qualities",
    ],
    moodTags: ["spiritual growth", "virtue", "discipline", "courage"],
  },
  {
    id: "16.2",
    chapter: 16,
    verse: 2,
    sanskrit:
      "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् | दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ||",
    transliteration:
      "ahiṁsā satyam akrodhas tyāgaḥ śāntir apaiśunam | dayā bhūteṣv aloluptvaṁ mārdavaṁ hrīr acāpalam ||",
    english:
      "Non-violence, truthfulness, freedom from anger, renunciation, peacefulness, aversion to fault-finding, compassion towards all beings, freedom from greed, gentleness, modesty and absence of fickleness.",
    hindi:
      "अहिंसा, सत्य, क्रोध का अभाव, त्याग, शांति, चुगली न करना, सभी प्राणियों पर दया, लोभ का अभाव, कोमलता, लज्जा और चंचलता का अभाव।",
    meaning:
      "The second set of divine virtues centers on relationships — ahimsa (non-violence) as the foundation. True compassion extends to all living beings without exception, reflecting Krishna's own nature.",
    keywords: [
      "non-violence",
      "truth",
      "compassion",
      "renunciation",
      "peace",
      "gentleness",
      "divine qualities",
    ],
    moodTags: ["compassion", "peace", "virtue", "relationships"],
  },
  {
    id: "16.3",
    chapter: 16,
    verse: 3,
    sanskrit:
      "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता | भवन्ति सम्पदं दैवीमभिजातस्य भारत ||",
    transliteration:
      "tejaḥ kṣamā dhṛtiḥ śaucam adroho nāti-mānitā | bhavanti sampadaṁ daivīm abhijātasya bhārata ||",
    english:
      "Vigor, forgiveness, fortitude, cleanliness, freedom from malice, and absence of excessive pride — these are the qualities of one born with divine nature, O Bharata.",
    hindi:
      "तेज, क्षमा, धैर्य, पवित्रता, द्रोह का अभाव और अभिमान का अभाव — ये सब उस पुरुष के लक्षण हैं जो दैवी सम्पदा के साथ उत्पन्न हुआ है, हे भारत।",
    meaning:
      "Krishna concludes the enumeration of twenty-six divine qualities. One born with these virtues is destined for liberation. These are not distant ideals but living qualities to cultivate daily.",
    keywords: [
      "vigor",
      "forgiveness",
      "fortitude",
      "purity",
      "divine birth",
      "liberation",
    ],
    moodTags: ["strength", "virtue", "spiritual growth", "discipline"],
  },
  {
    id: "16.4",
    chapter: 16,
    verse: 4,
    sanskrit:
      "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च | अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम् ||",
    transliteration:
      "dambho darpo 'bhimānaś ca krodhaḥ pāruṣyam eva ca | ajñānaṁ cābhijātasya pārtha sampadam āsurīm ||",
    english:
      "Hypocrisy, arrogance, pride, anger, harshness and ignorance — these are the marks of one born with demoniac nature, O Partha.",
    hindi:
      "पाखंड, घमंड, अभिमान, क्रोध, कठोरता और अज्ञान — ये आसुरी सम्पदा को लेकर उत्पन्न हुए पुरुष के लक्षण हैं, हे पार्थ।",
    meaning:
      "The demoniac nature begins with dambha (hypocrisy) — performing good outwardly while harboring evil within. This self-deception is the root of all subsequent vices that lead to bondage.",
    keywords: [
      "arrogance",
      "pride",
      "anger",
      "ignorance",
      "demoniac nature",
      "hypocrisy",
    ],
    moodTags: ["warning", "self-reflection", "awareness"],
  },
  {
    id: "16.5",
    chapter: 16,
    verse: 5,
    sanskrit:
      "दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता | मा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव ||",
    transliteration:
      "daivī sampad vimokṣāya nibandhāyāsurī matā | mā śucaḥ sampadaṁ daivīm abhijāto 'si pāṇḍava ||",
    english:
      "The divine nature leads to liberation, the demoniac to bondage. Do not grieve, O Pandava — you are born with divine qualities.",
    hindi:
      "दैवी सम्पदा मोक्ष के लिए और आसुरी सम्पदा बंधन के लिए मानी गई है। हे पांडव, तुम दैवी सम्पदा लेकर उत्पन्न हुए हो, इसलिए शोक मत करो।",
    meaning:
      "Krishna reassures Arjuna directly — 'You are born with divine qualities.' This personal assurance is Krishna's compassion in action, cutting through Arjuna's self-doubt before the battle of dharma.",
    keywords: [
      "divine nature",
      "liberation",
      "bondage",
      "reassurance",
      "Arjuna",
    ],
    moodTags: ["reassurance", "hope", "courage", "divine grace"],
  },
  {
    id: "16.6",
    chapter: 16,
    verse: 6,
    sanskrit:
      "द्वौ भूतसर्गौ लोकेऽस्मिन् दैव आसुर एव च | दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे श्रृणु ||",
    transliteration:
      "dvau bhūta-sargau loke 'smin daiva āsura eva ca | daivo vistaraśaḥ prokta āsuraṁ pārtha me śṛṇu ||",
    english:
      "There are two types of created beings in this world — the divine and the demoniac. The divine has been described at length; now hear from Me about the demoniac, O Partha.",
    hindi:
      "इस संसार में दो प्रकार के जीव-सृष्टि हैं — दैवी और आसुरी। दैवी का विस्तार से वर्णन किया जा चुका है, अब हे पार्थ, आसुरी को मुझसे सुनो।",
    meaning:
      "The entire creation is divided into two streams — those moving toward light and liberation, and those moving toward darkness and bondage. Understanding this division is the beginning of wisdom.",
    keywords: ["two natures", "creation", "divine", "demoniac", "division"],
    moodTags: ["wisdom", "discernment", "spiritual clarity"],
  },
  {
    id: "16.7",
    chapter: 16,
    verse: 7,
    sanskrit:
      "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः | न शौचं नापि चाचारो न सत्यं तेषु विद्यते ||",
    transliteration:
      "pravṛttiṁ ca nivṛttiṁ ca janā na vidur āsurāḥ | na śaucaṁ nāpi cācāro na satyaṁ teṣu vidyate ||",
    english:
      "Demoniac persons do not know what to do and what to refrain from. Neither purity, nor proper conduct, nor truth is found in them.",
    hindi:
      "आसुरी स्वभाव के लोग न प्रवृत्ति जानते हैं और न निवृत्ति। उनमें न शुद्धता है, न सदाचार और न सत्य।",
    meaning:
      "The fundamental confusion of the demoniac is not knowing what to do and what to avoid — dharma and adharma are indistinguishable to them, leading to a life of chaos and harm.",
    keywords: ["pravṛtti", "nivṛtti", "demoniac", "truth", "conduct", "purity"],
    moodTags: ["warning", "discernment", "dharma"],
  },
  {
    id: "16.8",
    chapter: 16,
    verse: 8,
    sanskrit: "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम् | अपरस्परसम्भूतं किमन्यत्कामहैतुकम् ||",
    transliteration:
      "asatyam apratiṣṭhaṁ te jagad āhur anīśvaram | aparaspara-sambhūtaṁ kim anyat kāma-haitukam ||",
    english:
      "They say the world is unreal, without foundation, without God, brought about by mutual union, caused by nothing but lust.",
    hindi:
      "वे कहते हैं कि यह जगत असत्य है, इसका कोई आधार नहीं, कोई ईश्वर नहीं, यह स्त्री-पुरुष के संयोग से उत्पन्न हुआ है और इसका एकमात्र कारण काम है।",
    meaning:
      "The demoniac worldview denies the divine order entirely — rejecting God, moral foundation, and cosmic purpose. This nihilism is the philosophical basis of all destructive behavior.",
    keywords: ["nihilism", "atheism", "lust", "creation", "demoniac view"],
    moodTags: ["warning", "philosophical inquiry", "truth seeking"],
  },
  {
    id: "16.9",
    chapter: 16,
    verse: 9,
    sanskrit:
      "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः | प्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः ||",
    transliteration:
      "etāṁ dṛṣṭim avaṣṭabhya naṣṭātmāno 'lpa-buddhayaḥ | prabhavanty ugra-karmāṇaḥ kṣayāya jagato 'hitāḥ ||",
    english:
      "Holding this view, these lost souls with small intelligence engage in fearful actions as enemies of the world, working for its destruction.",
    hindi:
      "इस दृष्टिकोण को पकड़कर ये नष्ट आत्माएं, थोड़ी बुद्धि वाले, भयंकर कर्म करते हुए जगत के शत्रु बनकर उसके विनाश के लिए उठ खड़े होते हैं।",
    meaning:
      "Nihilistic philosophy does not remain theoretical — it produces violent, destructive action. Those who deny the sacred order become enemies of creation itself, working against the divine design.",
    keywords: [
      "destruction",
      "enemies",
      "nihilism",
      "small intellect",
      "fearful actions",
    ],
    moodTags: ["warning", "consequence", "dharma protection"],
  },
  {
    id: "16.10",
    chapter: 16,
    verse: 10,
    sanskrit:
      "काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः | मोहाद्गृहीत्वासद्ग्राहान् प्रवर्तन्तेऽशुचिव्रताः ||",
    transliteration:
      "kāmam āśritya duṣpūraṁ dambha-māna-madānvitāḥ | mohād gṛhītvāsad-grāhān pravartante 'śuci-vratāḥ ||",
    english:
      "Resorting to insatiable lust, filled with pride, arrogance and intoxication, holding false values through illusion, they proceed with impure resolve.",
    hindi:
      "अतृप्त कामना का सहारा लेकर, दंभ, मान और मद से युक्त, मोह के कारण असत् आग्रहों को पकड़कर, वे अपवित्र व्रतों में प्रवृत्त रहते हैं।",
    meaning:
      "Insatiable desire is the engine of demoniac life — the more one feeds it, the greater it grows. Pride and intoxication follow naturally, creating a spiral that pulls the soul ever downward.",
    keywords: [
      "insatiable desire",
      "pride",
      "intoxication",
      "illusion",
      "impurity",
    ],
    moodTags: ["warning", "desire", "self-reflection"],
  },
  {
    id: "16.11",
    chapter: 16,
    verse: 11,
    sanskrit:
      "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः | कामोपभोगपरमा एतावदिति निश्चिताः ||",
    transliteration:
      "cintām aparimeyāṁ ca pralayāntām upāśritāḥ | kāmopabhoga-paramā etāvad iti niścitāḥ ||",
    english:
      "Bound by hundreds of hopes and desires, absorbed in lust and anger, they strive to accumulate wealth by unjust means for the satisfaction of sensual desires.",
    hindi:
      "मृत्यु तक अपरिमित चिंताओं में डूबे, कामभोग को ही सर्वोच्च मानते हुए, वे यह निश्चित कर लेते हैं कि बस इतना ही सब कुछ है।",
    meaning:
      "The tragedy of the demoniac: they reduce the vast universe to a playground of sensory pleasure, missing the eternal entirely. Their certainty — 'this is all there is' — is the deepest form of blindness.",
    keywords: [
      "anxiety",
      "sensual pleasure",
      "materialism",
      "hopeless worldview",
    ],
    moodTags: ["warning", "materialism", "emptiness"],
  },
  {
    id: "16.12",
    chapter: 16,
    verse: 12,
    sanskrit:
      "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः | ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान् ||",
    transliteration:
      "āśā-pāśa-śatair baddhāḥ kāma-krodha-parāyaṇāḥ | īhante kāma-bhogārtham anyāyenārtha-sañcayān ||",
    english:
      "Bound by hundreds of ropes of hope, addicted to lust and anger, they strive to accumulate wealth by unjust means for the satisfaction of sensual desires.",
    hindi:
      "आशा की सैकड़ों रस्सियों से बंधे, काम और क्रोध के परायण, वे कामभोगों की तृप्ति के लिए अन्यायपूर्ण तरीकों से धन संचय करने का प्रयत्न करते हैं।",
    meaning:
      "The image of 'hundreds of ropes of hope' is vivid — each desire creates a new bond. The demoniac are not free; they are the most enslaved, despite believing themselves liberated.",
    keywords: ["bondage", "hope", "unjust wealth", "desire", "anger"],
    moodTags: ["bondage", "warning", "desire", "freedom"],
  },
  {
    id: "16.13",
    chapter: 16,
    verse: 13,
    sanskrit: "इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम् | इदमस्तीदमपि मे भविष्यति पुनर्धनम् ||",
    transliteration:
      "idam adya mayā labdham imaṁ prāpsye manoratham | idam astīdam api me bhaviṣyati punar dhanam ||",
    english:
      "The demoniac person thinks: 'So much wealth do I have today, and I will gain more in future. This is mine today, and tomorrow it will be even more.'",
    hindi:
      "वह सोचता है — आज मैंने यह पाया, अब इस इच्छा को पूरा करूंगा; यह मेरे पास है और आगे और भी धन होगा।",
    meaning:
      "This verse renders the inner monologue of greed with perfect accuracy. The accumulating mind never rests — each gain spawns a new desire, creating a prison of perpetual wanting.",
    keywords: ["greed", "accumulation", "wealth", "desire", "delusion"],
    moodTags: ["greed", "materialism", "warning", "self-reflection"],
  },
  {
    id: "16.14",
    chapter: 16,
    verse: 14,
    sanskrit:
      "असौ मया हतः शत्रुर्हनिष्ये चापरानपि | ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान् सुखी ||",
    transliteration:
      "asau mayā hataḥ śatrur haniṣye cāparān api | īśvaro 'ham ahaṁ bhogī siddho 'haṁ balavān sukhī ||",
    english:
      "That enemy has been slain by me, and I will slay others too. I am the lord, I am the enjoyer, I am perfect, I am powerful and I am happy.",
    hindi:
      "मैंने उस शत्रु को मार दिया और दूसरों को भी मारूंगा; मैं ईश्वर हूं, मैं भोगी हूं, मैं सिद्ध हूं, मैं बलवान हूं, मैं सुखी हूं।",
    meaning:
      "The demoniac ego reaches its peak — 'I am God.' This self-deification is the ultimate delusion, separating the soul completely from the divine and from all compassion.",
    keywords: ["ego", "pride", "self-deification", "delusion", "enemy"],
    moodTags: ["ego", "warning", "pride", "self-reflection"],
  },
  {
    id: "16.15",
    chapter: 16,
    verse: 15,
    sanskrit:
      "आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया | यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः ||",
    transliteration:
      "āḍhyo 'bhijanavān asmi ko 'nyo 'sti sadṛśo mayā | yakṣye dāsyāmi modiṣya ity ajñāna-vimohitāḥ ||",
    english:
      "I am wealthy and well-born. Who else is equal to me? I will perform sacrifice, I will give charity, I will rejoice. Thus they are deluded by ignorance.",
    hindi:
      "मैं धनवान हूं, कुलीन हूं, मेरे समान दूसरा कौन है? मैं यज्ञ करूंगा, दान दूंगा, आनंद लूंगा। इस प्रकार वे अज्ञान से विमोहित हैं।",
    meaning:
      "Even ritual acts — sacrifice, charity — become vehicles of ego when performed by the demoniac. The intention poisons the act. Only when ego dissolves can these same actions become liberation.",
    keywords: ["wealthy", "ego", "ritual", "delusion", "ignorance", "charity"],
    moodTags: ["ego", "warning", "ritual", "intention"],
  },
  {
    id: "16.16",
    chapter: 16,
    verse: 16,
    sanskrit:
      "अनेकचित्तविभ्रान्ता मोहजालसमावृताः | प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ ||",
    transliteration:
      "aneka-citta-vibhrāntā moha-jāla-samāvṛtāḥ | prasaktāḥ kāma-bhogeṣu patanti narake 'śucau ||",
    english:
      "Bewildered by many thoughts, entangled in the net of illusion, attached to the enjoyment of sense pleasures, they fall into a foul hell.",
    hindi:
      "अनेक चिंताओं से व्याकुल, मोह के जाल में फंसे, कामभोगों में आसक्त, वे अपवित्र नरक में गिरते हैं।",
    meaning:
      "The scattered mind — pulled in countless directions by desire — is already a kind of hell. The verse shows how mental bondage precedes and creates external suffering.",
    keywords: [
      "scattered mind",
      "illusion",
      "attachment",
      "hell",
      "sensual pleasure",
    ],
    moodTags: ["warning", "mental clarity", "attachment", "consequence"],
  },
  {
    id: "16.17",
    chapter: 16,
    verse: 17,
    sanskrit:
      "आत्मसम्भाविताः स्तब्धा धनमानमदान्विताः | यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम् ||",
    transliteration:
      "ātma-sambhāvitāḥ stabdhā dhana-māna-madānvitāḥ | yajante nāma-yajñais te dambhenāvidhi-pūrvakam ||",
    english:
      "Self-conceited, stubborn, filled with the pride and intoxication of wealth, they perform sacrifices in name only, without following the prescribed rules, out of ostentation.",
    hindi:
      "अपने आप को श्रेष्ठ मानने वाले, हठी, धन, मान और मद से युक्त, वे केवल नाम के यज्ञ करते हैं — दंभ से, विधिपूर्वक नहीं।",
    meaning:
      "Religiosity without humility becomes its opposite — a tool of ego. The sacrifice that should dissolve the self becomes a performance for the self, the deepest form of spiritual hypocrisy.",
    keywords: ["hypocrisy", "pride", "ritual", "ostentation", "sacrifice"],
    moodTags: ["warning", "humility", "ritual", "sincerity"],
  },
  {
    id: "16.18",
    chapter: 16,
    verse: 18,
    sanskrit:
      "अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः | मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः ||",
    transliteration:
      "ahaṅkāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ ca saṁśritāḥ | mām ātma-para-deheṣu pradviṣanto 'bhyasūyakāḥ ||",
    english:
      "Clinging to egotism, power, arrogance, lust and anger, these malicious people hate Me dwelling in their own and others' bodies.",
    hindi:
      "अहंकार, बल, दर्प, काम और क्रोध का आश्रय लेकर, ये द्वेषी लोग अपने और दूसरों के शरीर में स्थित मुझसे द्वेष करते हैं।",
    meaning:
      "The ultimate crime of the demoniac: hating the divine in all beings. Since Krishna dwells in every heart, hatred of any being is hatred of the divine itself — the deepest spiritual error.",
    keywords: ["hatred", "ego", "divine in all", "anger", "envy"],
    moodTags: ["warning", "universal love", "divine presence"],
  },
  {
    id: "16.19",
    chapter: 16,
    verse: 19,
    sanskrit:
      "तानहं द्विषतः क्रूरान् संसारेषु नराधमान् | क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु ||",
    transliteration:
      "tān ahaṁ dviṣataḥ krūrān saṁsāreṣu narādhamān | kṣipāmy ajasram aśubhān āsurīṣv eva yoniṣu ||",
    english:
      "Those cruel and hateful, the lowest of men — I hurl them repeatedly into the ocean of material existence, into various demoniac species of life.",
    hindi:
      "उन द्वेषी, क्रूर और अधम मनुष्यों को मैं संसार में बार-बार आसुरी योनियों में डालता रहता हूं।",
    meaning:
      "Karma is not punishment but consequence — those who cultivate demoniac nature attract demoniac existence. The divine law is impartial; it responds to what we are, not what we profess.",
    keywords: [
      "karma",
      "rebirth",
      "demoniac birth",
      "consequence",
      "divine law",
    ],
    moodTags: ["karma", "consequence", "warning", "cosmic law"],
  },
  {
    id: "16.20",
    chapter: 16,
    verse: 20,
    sanskrit:
      "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि | मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम् ||",
    transliteration:
      "āsurīṁ yonim āpannā mūḍhā janmani janmani | mām aprāpyaiva kaunteya tato yānty adhamāṁ gatim ||",
    english:
      "Entering demoniac wombs birth after birth, O son of Kunti, deluded souls never attain Me, and gradually sink to the most abominable type of existence.",
    hindi:
      "हे कौन्तेय, मूढ़ जन बार-बार आसुरी योनियों में जन्म लेते हैं, मुझे न पाकर, और वे अधम से भी अधम गति को प्राप्त होते हैं।",
    meaning:
      "The downward spiral of demoniac nature across lives is described with compassion, not condemnation. Krishna shows this not to condemn but to warn — and the very warning is an act of grace, an invitation to turn.",
    keywords: ["rebirth", "demoniac cycle", "liberation lost", "Kunti's son"],
    moodTags: ["warning", "consequence", "grace", "compassion"],
  },
  {
    id: "16.21",
    chapter: 16,
    verse: 21,
    sanskrit:
      "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः | कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ||",
    transliteration:
      "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ | kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet ||",
    english:
      "There are three gates to this hell leading to the ruin of the soul — lust, anger and greed. Therefore one should abandon these three.",
    hindi:
      "नरक के तीन द्वार हैं जो आत्मा का नाश करते हैं — काम, क्रोध और लोभ। इसलिए इन तीनों को त्याग देना चाहिए।",
    meaning:
      "The three gates of hell: kama (lust), krodha (anger), lobha (greed). This verse is one of the most practical in the Gita — a direct instruction for every human being in every generation.",
    keywords: [
      "lust",
      "anger",
      "greed",
      "hell's gates",
      "abandon",
      "spiritual ruin",
    ],
    moodTags: [
      "warning",
      "liberation",
      "discipline",
      "self-control",
      "vital guidance",
    ],
  },
  {
    id: "16.22",
    chapter: 16,
    verse: 22,
    sanskrit:
      "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः | आचरत्यात्मनः श्रेयस्ततो याति परां गतिम् ||",
    transliteration:
      "etair vimuktaḥ kaunteya tamo-dvārais tribhir naraḥ | ācaraty ātmanaḥ śreyas tato yāti parāṁ gatim ||",
    english:
      "O son of Kunti, a man who is freed from these three gates of darkness performs acts that are good for the soul and thereby reaches the supreme destination.",
    hindi:
      "हे कौन्तेय, जो मनुष्य इन तीन अंधकार के द्वारों से मुक्त हो जाता है, वह अपनी आत्मा के कल्याण के कार्य करता है और परम गति को प्राप्त होता है।",
    meaning:
      "Liberation from lust, anger and greed is not an end but a beginning — it opens the path to supreme attainment. Freedom from these three is the foundation of all spiritual progress.",
    keywords: [
      "liberation",
      "three gates",
      "darkness",
      "supreme destination",
      "welfare",
    ],
    moodTags: ["liberation", "hope", "spiritual progress", "freedom"],
  },
  {
    id: "16.23",
    chapter: 16,
    verse: 23,
    sanskrit:
      "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः | न स सिद्धिमवाप्नोति न सुखं न परां गतिम् ||",
    transliteration:
      "yaḥ śāstra-vidhim utsṛjya vartate kāma-kārataḥ | na sa siddhim avāpnoti na sukhaṁ na parāṁ gatim ||",
    english:
      "One who discards scriptural injunctions and acts according to personal desires attains neither perfection, nor happiness, nor the supreme destination.",
    hindi:
      "जो शास्त्र-विधि को त्यागकर अपनी इच्छानुसार कार्य करता है, उसे न सिद्धि मिलती है, न सुख और न परम गति।",
    meaning:
      "Scripture is not arbitrary constraint but accumulated wisdom about how dharma operates. To discard it in favor of desire is to navigate by appetite rather than truth — a path that leads nowhere worth going.",
    keywords: [
      "scripture",
      "personal desire",
      "perfection",
      "happiness",
      "supreme goal",
    ],
    moodTags: ["scripture", "dharma", "guidance", "discipline"],
  },
  {
    id: "16.24",
    chapter: 16,
    verse: 24,
    sanskrit:
      "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ | ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि ||",
    transliteration:
      "tasmāc chāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau | jñātvā śāstra-vidhānoktaṁ karma kartum ihārhasi ||",
    english:
      "Therefore, let scripture be your authority in determining what should and should not be done. Knowing the scriptural rules and regulations, you should perform your duties here.",
    hindi:
      "इसलिए क्या करना चाहिए और क्या नहीं — इसमें शास्त्र ही तुम्हारा प्रमाण है। शास्त्र-विधानों को जानकर तुम्हें यहाँ कर्म करना चाहिए।",
    meaning:
      "Chapter 16 closes with this injunction: let scripture guide action. This is not blind obedience but trust in the collective wisdom of realized souls who mapped the path to liberation before us.",
    keywords: [
      "scripture",
      "authority",
      "duty",
      "dharma",
      "what to do",
      "final instruction",
    ],
    moodTags: ["guidance", "scripture", "dharma", "discipline", "wisdom"],
  },

  // ========== CHAPTER 17: SRADDHATRAYA-VIBHAGA YOGA ==========
  // The Yoga of the Division of the Threefold Faith

  {
    id: "17.1",
    chapter: 17,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच | ये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः | तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः ||",
    transliteration:
      "arjuna uvāca | ye śāstra-vidhim utsṛjya yajante śraddhayānvitāḥ | teṣāṁ niṣṭhā tu kā kṛṣṇa sattvam āho rajas tamaḥ ||",
    english:
      "Arjuna said: What is the situation of those who do not follow the principles of scripture but worship according to their own imagination? Is their position in goodness, passion or ignorance, O Krishna?",
    hindi:
      "अर्जुन बोले — हे कृष्ण, जो लोग शास्त्र-विधि को छोड़कर, श्रद्धा से युक्त होकर पूजा करते हैं, उनकी निष्ठा कौन सी है — सत्त्व, रज या तम?",
    meaning:
      "Arjuna raises a profound question: what about sincere faith without scriptural grounding? This opens Chapter 17's exploration of how the three gunas shape faith, worship, and practice.",
    keywords: ["faith", "scripture", "worship", "gunas", "Arjuna's question"],
    moodTags: ["curiosity", "spiritual inquiry", "seeking wisdom"],
  },
  {
    id: "17.2",
    chapter: 17,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच | त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा | सात्त्विकी राजसी चैव तामसी चेति तां श्रृणु ||",
    transliteration:
      "śrī-bhagavān uvāca | tri-vidhā bhavati śraddhā dehināṁ sā svabhāva-jā | sāttvikī rājasī caiva tāmasī ceti tāṁ śṛṇu ||",
    english:
      "The Blessed Lord said: According to the modes of nature acquired by the embodied being, one's faith can be of three kinds — in goodness, in passion, or in ignorance. Now hear about these.",
    hindi:
      "श्री भगवान बोले — देहधारियों की स्वभाव से उत्पन्न श्रद्धा तीन प्रकार की होती है — सात्त्विकी, राजसी और तामसी। इसे सुनो।",
    meaning:
      "Faith (shraddha) itself has three qualities — it is shaped by one's accumulated nature. This insight liberates the seeker from judging faith and invites examination of what quality of faith one cultivates.",
    keywords: ["faith", "three types", "sattva", "rajas", "tamas", "nature"],
    moodTags: ["wisdom", "faith", "spiritual clarity", "self-knowledge"],
  },
  {
    id: "17.3",
    chapter: 17,
    verse: 3,
    sanskrit:
      "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत | श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः ||",
    transliteration:
      "sattvānurūpā sarvasya śraddhā bhavati bhārata | śraddhā-mayo 'yaaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ ||",
    english:
      "O Bharata, the faith of every person is in accordance with their nature. A person is made of faith — as is one's faith, so is that person.",
    hindi:
      "हे भारत, प्रत्येक व्यक्ति की श्रद्धा उसके स्वभाव के अनुसार होती है। यह पुरुष श्रद्धामय है — जैसी जिसकी श्रद्धा होती है, वह वैसा ही है।",
    meaning:
      "One of the most powerful psychological truths in the Gita: 'You are your faith.' What you believe deeply, what you trust completely, that is what you become. Faith is not just religion — it is identity itself.",
    keywords: [
      "faith",
      "identity",
      "nature",
      "belief",
      "you are what you believe",
    ],
    moodTags: ["self-knowledge", "identity", "faith", "transformation"],
  },
  {
    id: "17.4",
    chapter: 17,
    verse: 4,
    sanskrit:
      "यजन्ते सात्त्विका देवान् यक्षरक्षांसि राजसाः | प्रेतान् भूतगणांश्चान्ये यजन्ते तामसा जनाः ||",
    transliteration:
      "yajante sāttvikā devān yakṣa-rakṣāṁsi rājasāḥ | pretān bhūta-gaṇāṁś cānye yajante tāmasā janāḥ ||",
    english:
      "Men in the mode of goodness worship the gods; those in passion worship demons and spirits; and those in ignorance worship ghosts and spirits of the dead.",
    hindi:
      "सात्त्विक लोग देवताओं की पूजा करते हैं, राजसी लोग यक्ष और राक्षसों की, और तामसी लोग प्रेत और भूत-गणों की।",
    meaning:
      "The quality of what we worship reflects and reinforces our inner state. This verse maps the correspondence between one's guna and the energies one naturally seeks out and reveres.",
    keywords: ["worship", "sattva", "rajas", "tamas", "devas", "spirits"],
    moodTags: ["wisdom", "discernment", "worship", "spiritual levels"],
  },
  {
    id: "17.5",
    chapter: 17,
    verse: 5,
    sanskrit:
      "अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः | दम्भाहंकारसंयुक्ताः कामरागबलान्विताः ||",
    transliteration:
      "aśāstra-vihitaṁ ghoraṁ tapyante ye tapo janāḥ | dambhāhaṅkāra-saṁyuktāḥ kāma-rāga-balānvitāḥ ||",
    english:
      "Those who perform severe austerities not recommended in the scriptures, motivated by pride and egotism, with attachment, lust and power —",
    hindi:
      "जो लोग शास्त्र-विरुद्ध, घोर तपस्या करते हैं — दंभ और अहंकार से युक्त, काम, राग और बल से प्रेरित होकर —",
    meaning:
      "Severe austerity driven by ego is not tapas — it is self-torture. The body, Krishna will say, is not one's enemy to be punished but the vehicle given by the divine for spiritual journey.",
    keywords: ["austerity", "ego", "pride", "attachment", "false tapas"],
    moodTags: ["warning", "ego", "austerity", "discernment"],
  },
  {
    id: "17.6",
    chapter: 17,
    verse: 6,
    sanskrit:
      "कर्शयन्तः शरीरस्थं भूतग्राममचेतसः | मां चैवान्तःशरीरस्थं तान् विद्ध्यासुरनिश्चयान् ||",
    transliteration:
      "karśayantaḥ śarīra-sthaṁ bhūta-grāmam acetasaḥ | māṁ caivāntaḥ śarīra-sthaṁ tān viddhy āsura-niścayān ||",
    english:
      "These senseless people torture the material elements of the body as well as the Supersoul dwelling within — know them to be of demoniac resolve.",
    hindi:
      "ये मूढ़ लोग शरीर में स्थित पञ्चभूत-समूह और मुझे — जो उनके अन्दर परमात्मा रूप में हूं — को कष्ट देते हैं। उन्हें आसुरी निश्चय वाला समझो।",
    meaning:
      "Krishna reveals that His presence is within every body — so to torture the body is to torture the divine. The body is not the enemy; it is the temple where the divine resides.",
    keywords: ["body", "Supersoul", "demoniac", "torture", "divine dwelling"],
    moodTags: ["reverence", "body as temple", "divine presence", "warning"],
  },
  {
    id: "17.7",
    chapter: 17,
    verse: 7,
    sanskrit:
      "आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः | यज्ञस्तपस्तथा दानं तेषां भेदमिमं श्रृणु ||",
    transliteration:
      "āhāras tv api sarvasya tri-vidho bhavati priyaḥ | yajñas tapas tathā dānaṁ teṣāṁ bhedam imaṁ śṛṇu ||",
    english:
      "The food which is dear to each person is also of three kinds, as are sacrifice, austerity and charity. Hear now the distinction of these.",
    hindi:
      "प्रत्येक मनुष्य को प्रिय भोजन भी तीन प्रकार का होता है, वैसे ही यज्ञ, तप और दान भी। इनका भेद अब सुनो।",
    meaning:
      "Every act — eating, sacrificing, fasting, giving — is colored by the guna that dominates the doer. Nothing is neutral; everything carries the quality of consciousness behind it.",
    keywords: [
      "food",
      "sacrifice",
      "austerity",
      "charity",
      "three types",
      "gunas",
    ],
    moodTags: ["wisdom", "daily life", "consciousness", "intention"],
  },
  {
    id: "17.8",
    chapter: 17,
    verse: 8,
    sanskrit:
      "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः | रस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः ||",
    transliteration:
      "āyuḥ-sattva-balārogya-sukha-prīti-vivardhanāḥ | rasyāḥ snigdhāḥ sthirā hṛdyā āhārāḥ sāttvika-priyāḥ ||",
    english:
      "Foods that increase the duration of life, purify one's existence and give strength, health, happiness and satisfaction — juicy, fatty, wholesome and pleasing — are dear to those in goodness.",
    hindi:
      "आयु, सत्त्व, बल, आरोग्य, सुख और प्रसन्नता को बढ़ाने वाले, रसयुक्त, चिकने, टिकाऊ और मनोरंजक आहार सात्त्विक पुरुषों को प्रिय होते हैं।",
    meaning:
      "Sattvic food nourishes life on every level — physical, mental, spiritual. The Gita's nutritional wisdom is holistic: food is not merely fuel but a carrier of consciousness that shapes the eater.",
    keywords: [
      "sattvic food",
      "health",
      "nourishment",
      "happiness",
      "life-giving",
    ],
    moodTags: ["health", "nourishment", "sattva", "daily life"],
  },
  {
    id: "17.9",
    chapter: 17,
    verse: 9,
    sanskrit:
      "कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः | आहारा राजसस्येष्टा दुःखशोकामयप्रदाः ||",
    transliteration:
      "kaṭv-amla-lavaṇāty-uṣṇa-tīkṣṇa-rūkṣa-vidāhinaḥ | āhārā rājasasyeṣṭā duḥkha-śokāmaya-pradāḥ ||",
    english:
      "Foods that are too bitter, too sour, salty, hot, pungent, dry and burning — these are dear to those in the mode of passion; they cause pain, grief and disease.",
    hindi:
      "अत्यंत कड़वे, खट्टे, नमकीन, बहुत गर्म, तीखे, रूखे और जलन पैदा करने वाले आहार राजसी पुरुषों को प्रिय होते हैं — ये दुख, शोक और रोग देने वाले हैं।",
    meaning:
      "Rajasic food stimulates and agitates — it feeds passion and restlessness. Notably, the Gita connects excessive stimulation in diet directly to suffering, grief and disease.",
    keywords: ["rajasic food", "stimulating", "pain", "passion", "disease"],
    moodTags: ["health", "warning", "passion", "daily life"],
  },
  {
    id: "17.10",
    chapter: 17,
    verse: 10,
    sanskrit: "यातयामं गतरसं पूति पर्युषितं च यत् | उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम् ||",
    transliteration:
      "yāta-yāmaṁ gata-rasaṁ pūti paryuṣitaṁ ca yat | ucchiṣṭam api cāmedhyaṁ bhojanaṁ tāmasa-priyam ||",
    english:
      "Food prepared more than three hours before being eaten, tasteless, decomposed, putrid, stale, leftover, and untouchable is dear to those in the mode of ignorance.",
    hindi:
      "तीन प्रहर से पहले बना, नीरस, सड़ा हुआ, बासी, जूठा और अपवित्र भोजन तामसी पुरुषों को प्रिय होता है।",
    meaning:
      "Tamasic food increases inertia, cloudiness and spiritual insensitivity. The quality of one's consciousness is literally shaped by what one consumes — this is the Gita's practical ecology of the soul.",
    keywords: ["tamasic food", "stale", "putrid", "ignorance", "inertia"],
    moodTags: ["health", "tamas", "warning", "consciousness"],
  },
  {
    id: "17.11",
    chapter: 17,
    verse: 11,
    sanskrit:
      "अफलाकाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते | यष्टव्यमेवेति मनः समाधाय स सात्त्विकः ||",
    transliteration:
      "aphalākāṅkṣibhir yajño vidhi-dṛṣṭo ya ijyate | yaṣṭavyam eveti manaḥ samādhāya sa sāttvikaḥ ||",
    english:
      "Of sacrifices, that performed as a matter of duty by those who desire no reward, and which is performed according to the directions of scripture, is sattvic.",
    hindi:
      "जो यज्ञ शास्त्र-विधि के अनुसार, फल की इच्छा न रखने वाले लोगों द्वारा, केवल 'यज्ञ करना चाहिए' यह मन में धारण करके किया जाता है, वह सात्त्विक है।",
    meaning:
      "Sattvic sacrifice is defined by the absence of personal desire for its fruits. When action is performed purely as a duty and offering to the divine, it purifies the doer and benefits all.",
    keywords: [
      "sattvic sacrifice",
      "desireless action",
      "duty",
      "scripture",
      "offering",
    ],
    moodTags: ["purity", "selfless action", "devotion", "duty"],
  },
  {
    id: "17.12",
    chapter: 17,
    verse: 12,
    sanskrit:
      "अभिसन्धाय तु फलं दम्भार्थमपि चैव यत् | इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम् ||",
    transliteration:
      "abhisandhāya tu phalaṁ dambhārtham api caiva yat | ijyate bharata-śreṣṭha taṁ yajñaṁ viddhi rājasam ||",
    english:
      "But that sacrifice performed for some material benefit, or for the sake of pride, O chief of the Bharatas — know that to be in the mode of passion.",
    hindi:
      "हे भरत-श्रेष्ठ, जो यज्ञ फल की इच्छा से अथवा दिखावे के लिए किया जाता है, उसे राजसी समझो।",
    meaning:
      "When the same external act of sacrifice is motivated by desire for gain or desire for recognition, its inner quality transforms entirely. Intention is the alchemy that transforms identical actions.",
    keywords: [
      "rajasic sacrifice",
      "desire",
      "pride",
      "ostentation",
      "intention",
    ],
    moodTags: ["intention", "purity", "warning", "passion"],
  },
  {
    id: "17.13",
    chapter: 17,
    verse: 13,
    sanskrit: "विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम् | श्रद्धाविरहितं यज्ञं तामसं परिचक्षते ||",
    transliteration:
      "vidhi-hīnam asṛṣṭānnaṁ mantra-hīnam adakṣiṇam | śraddhā-virahitaṁ yajñaṁ tāmasaṁ paricakṣate ||",
    english:
      "Any sacrifice performed without regard to the directions of scripture, without distribution of prasadam, without chanting of Vedic hymns, without remunerating the priests, and without faith — that sacrifice is considered tamasic.",
    hindi:
      "जो यज्ञ शास्त्र-विधि से रहित, अन्नदान से रहित, मन्त्र-रहित, दक्षिणा-रहित और श्रद्धा-रहित होता है, उसे तामसी कहते हैं।",
    meaning:
      "A sacrifice without faith, scripture, sharing, or proper ritual is hollow — it is the form without the spirit, an empty act that produces neither elevation nor benefit for anyone.",
    keywords: ["tamasic sacrifice", "faithless", "formless", "empty ritual"],
    moodTags: ["warning", "ritual", "faith", "tamas"],
  },
  {
    id: "17.14",
    chapter: 17,
    verse: 14,
    sanskrit: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् | ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते ||",
    transliteration:
      "deva-dvija-guru-prājña-pūjanaṁ śaucam ārjavam | brahmacaryam ahiṁsā ca śārīraṁ tapa ucyate ||",
    english:
      "Worship of the gods, the twice-born, the teachers and the wise; cleanliness, straightforwardness, celibacy, and non-violence — these are called the austerities of the body.",
    hindi:
      "देवताओं, द्विजों, गुरुओं और ज्ञानियों की पूजा, पवित्रता, सरलता, ब्रह्मचर्य और अहिंसा — इन्हें शरीर की तपस्या कहते हैं।",
    meaning:
      "The body's tapas centers on veneration, purity and non-violence. Every physical act can be consecrated as tapas when performed with awareness and dedication to the divine.",
    keywords: [
      "bodily austerity",
      "worship",
      "celibacy",
      "non-violence",
      "cleanliness",
    ],
    moodTags: ["discipline", "reverence", "purity", "austerity"],
  },
  {
    id: "17.15",
    chapter: 17,
    verse: 15,
    sanskrit:
      "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् | स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ||",
    transliteration:
      "anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ ca yat | svādhyāyābhyasanaṁ caiva vāṅ-mayaṁ tapa ucyate ||",
    english:
      "Austerity of speech consists in speaking words that are truthful, pleasing, beneficial, and not agitating to others, and also regularly reciting the Vedic literature.",
    hindi:
      "जो वाणी उद्वेग न करने वाली, सत्य, प्रिय और हितकारी हो, और स्वाध्याय का अभ्यास — इसे वाणी की तपस्या कहते हैं।",
    meaning:
      "The Gita's standard for speech: true, kind, helpful, and non-agitating. These four qualities together define right speech across all traditions. The practice of sacred recitation adds the element of consecration.",
    keywords: [
      "speech austerity",
      "truthful",
      "kind",
      "beneficial",
      "scripture recitation",
    ],
    moodTags: ["communication", "speech", "truth", "kindness", "discipline"],
  },
  {
    id: "17.16",
    chapter: 17,
    verse: 16,
    sanskrit:
      "मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः | भावसंशुद्धिरित्येतत्तपो मानसमुच्यते ||",
    transliteration:
      "manaḥ-prasādaḥ saumyatvaṁ maunam ātma-vinigrahaḥ | bhāva-saṁśuddhir ity etat tapo mānasam ucyate ||",
    english:
      "Serenity of mind, gentleness, silence, self-control and purity of thought — these together constitute the austerity of the mind.",
    hindi:
      "मन की प्रसन्नता, सौम्यता, मौन, आत्म-संयम और भावों की शुद्धि — इन्हें मन की तपस्या कहते हैं।",
    meaning:
      "Mental tapas is the deepest and most difficult. A serene, gentle, silent, self-controlled mind that harbors no impurity — this is the soil in which all spiritual realization grows.",
    keywords: [
      "mental austerity",
      "serenity",
      "silence",
      "self-control",
      "purity of mind",
    ],
    moodTags: [
      "mental peace",
      "meditation",
      "discipline",
      "purity",
      "inner stillness",
    ],
  },
  {
    id: "17.17",
    chapter: 17,
    verse: 17,
    sanskrit:
      "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः | अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते ||",
    transliteration:
      "śraddhayā parayā taptaṁ tapas tat tri-vidhaṁ naraiḥ | aphalākāṅkṣibhir yuktaiḥ sāttvikaṁ paricakṣate ||",
    english:
      "This threefold austerity practiced by men with supreme faith, desiring no material benefits, is called sattvic.",
    hindi:
      "परम श्रद्धा से, फल की इच्छा न रखते हुए, समाहित चित्त से किए गए उस तीन प्रकार के तप को सात्त्विक कहते हैं।",
    meaning:
      "The three forms of austerity — body, speech, mind — become sattvic when performed with supreme faith and no expectation of reward. The same practices without these qualities become rajasic or tamasic.",
    keywords: [
      "sattvic austerity",
      "supreme faith",
      "desireless",
      "all three tapas",
    ],
    moodTags: ["sattva", "faith", "purity", "discipline", "liberation"],
  },
  {
    id: "17.18",
    chapter: 17,
    verse: 18,
    sanskrit: "सत्कारमानपूजार्थं तपो दम्भेन चैव यत् | क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम् ||",
    transliteration:
      "satkāra-māna-pūjārthaṁ tapo dambhena caiva yat | kriyate tad iha proktaṁ rājasaṁ calam adhruvam ||",
    english:
      "Austerities performed out of pride, for the sake of gaining respect, honor and worship, are said to be in the mode of passion. Such austerity is unsteady and impermanent.",
    hindi:
      "जो तप सत्कार, मान और पूजा के लिए, दंभ से किया जाता है, उसे राजसी कहा गया है — वह अस्थिर और नाशवान है।",
    meaning:
      "The test of austerity is its motivation. When practiced for recognition, the spiritual practice becomes a transaction — giving discipline in exchange for social credit. It is inherently unstable and yields no lasting fruit.",
    keywords: [
      "rajasic austerity",
      "pride",
      "honor",
      "impermanent",
      "reputation",
    ],
    moodTags: ["warning", "intention", "ego", "passion"],
  },
  {
    id: "17.19",
    chapter: 17,
    verse: 19,
    sanskrit:
      "मूढग्राहेणात्मनो यत्पीडया क्रियते तपः | परस्योत्सादनार्थं वा तत्तामसमुदाहृतम् ||",
    transliteration:
      "mūḍha-grāheṇātmano yat pīḍayā kriyate tapaḥ | parasyotsādanārthaṁ vā tat tāmasam udāhṛtam ||",
    english:
      "Austerities performed out of foolishness, with self-torture or to destroy or injure others, are said to be in the mode of ignorance.",
    hindi:
      "जो तप मूढ़तापूर्वक हठ से, अपने को पीड़ा देकर या दूसरों का नाश करने के लिए किया जाता है, उसे तामसी कहते हैं।",
    meaning:
      "Tamasic austerity has a dark purpose — self-destruction or harm to others. This reveals how even spiritual practice can be perverted by tamas into an instrument of violence.",
    keywords: [
      "tamasic austerity",
      "self-torture",
      "harm to others",
      "foolishness",
    ],
    moodTags: ["warning", "tamas", "self-harm", "discernment"],
  },
  {
    id: "17.20",
    chapter: 17,
    verse: 20,
    sanskrit:
      "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे | देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ||",
    transliteration:
      "dātavyam iti yad dānaṁ dīyate 'nupakāriṇe | deśe kāle ca pātre ca tad dānaṁ sāttvikaṁ smṛtam ||",
    english:
      "Charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person, is considered sattvic.",
    hindi:
      "जो दान केवल 'देना चाहिए' इस भाव से, बिना उपकार की अपेक्षा के, उचित देश, काल और पात्र को दिया जाता है — वह सात्त्विक दान है।",
    meaning:
      "Sattvic charity: given because it is right, not for recognition; to the right person, at the right time, in the right place. This is seva in its highest form — pure giving as an expression of love.",
    keywords: ["sattvic charity", "giving", "duty", "worthiness", "right time"],
    moodTags: ["generosity", "selfless giving", "sattva", "seva"],
  },
  {
    id: "17.21",
    chapter: 17,
    verse: 21,
    sanskrit:
      "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः | दीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम् ||",
    transliteration:
      "yat tu pratyupakārārthaṁ phalam uddiśya vā punaḥ | dīyate ca parikliṣṭaṁ tad dānaṁ rājasaṁ smṛtam ||",
    english:
      "Charity performed with the expectation of some return, or with a desire for fruitive results, or in a grudging mood, is said to be in the mode of passion.",
    hindi:
      "जो दान प्रत्युपकार की आशा से, फल को लक्ष्य करके, अथवा पीड़ापूर्वक दिया जाता है — वह राजसी दान है।",
    meaning:
      "Giving with strings attached — expecting gratitude, recognition, or spiritual credit — is still giving, but it binds the giver. True generosity releases both giver and receiver.",
    keywords: [
      "rajasic charity",
      "expectation",
      "reluctant giving",
      "attachment",
    ],
    moodTags: ["warning", "intention", "generosity", "attachment"],
  },
  {
    id: "17.22",
    chapter: 17,
    verse: 22,
    sanskrit: "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते | असत्कृतमवज्ञातं तत्तामसमुदाहृतम् ||",
    transliteration:
      "adeśa-kāle yad dānam apātrebhyaś ca dīyate | asat-kṛtam avajñātaṁ tat tāmasam udāhṛtam ||",
    english:
      "Charity performed at an improper place and time, given to unworthy persons, without respect and with contempt, is said to be in the mode of ignorance.",
    hindi:
      "जो दान अनुचित देश और काल में, अयोग्य व्यक्ति को, सत्कार और सम्मान के बिना, तिरस्कारपूर्वक दिया जाता है — वह तामसी दान है।",
    meaning:
      "Tamasic charity is careless, disrespectful, and misdirected. Good intentions are not enough — wisdom about where, when, and to whom to give is also part of dharmic generosity.",
    keywords: [
      "tamasic charity",
      "improper",
      "disrespect",
      "contempt",
      "unwisdom",
    ],
    moodTags: ["warning", "tamas", "charity", "wisdom in giving"],
  },
  {
    id: "17.23",
    chapter: 17,
    verse: 23,
    sanskrit:
      "ओं तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः | ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा ||",
    transliteration:
      "oṁ tat sad iti nirdeśo brahmaṇas tri-vidhaḥ smṛtaḥ | brāhmaṇās tena vedāś ca yajñāś ca vihitāḥ purā ||",
    english:
      "From the beginning of creation, the three words Om Tat Sat were used to indicate the Supreme Absolute Truth. These three symbolic representations were used by Brahmanas while chanting Vedic hymns and during sacrifice.",
    hindi:
      "सृष्टि के आरंभ से ब्रह्म के तीन प्रकार के निर्देश — 'ॐ तत् सत्' — स्मृत हैं। इन्हीं से ब्राह्मणों, वेदों और यज्ञों की पूर्व में विधि की गई थी।",
    meaning:
      "Om Tat Sat — the three sacred syllables that name the Supreme. Om invokes the divine presence; Tat (That) points to the transcendent; Sat (Truth/Being) affirms eternal existence. All sacred acts begin with these.",
    keywords: [
      "Om Tat Sat",
      "Brahman",
      "creation",
      "Vedas",
      "sacred syllables",
    ],
    moodTags: ["sacred", "divine name", "creation", "cosmic truth"],
  },
  {
    id: "17.24",
    chapter: 17,
    verse: 24,
    sanskrit:
      "तस्मादोमित्युदाहृत्य यज्ञदानतपःक्रियाः | प्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम् ||",
    transliteration:
      "tasmād om ity udāhṛtya yajña-dāna-tapaḥ-kriyāḥ | pravartante vidhānoktāḥ satataṁ brahma-vādinām ||",
    english:
      "Therefore, transcendentalists undertaking performances of sacrifice, charity and penance in accordance with scriptural regulations always begin with Om to attain the Supreme.",
    hindi:
      "इसलिए ब्रह्मवादियों के शास्त्र-विधि से कहे हुए यज्ञ, दान और तप की क्रियाएं सदा 'ॐ' उच्चारण करके ही प्रवृत्त होती हैं।",
    meaning:
      "Every sacred act begins with Om — the primordial sound that connects the practitioner to the infinite. To begin with Om is to acknowledge that every action belongs to the divine, not to the self.",
    keywords: [
      "Om",
      "beginning of action",
      "sacrifice",
      "charity",
      "austerity",
    ],
    moodTags: ["sacred practice", "devotion", "invocation", "ritual"],
  },
  {
    id: "17.25",
    chapter: 17,
    verse: 25,
    sanskrit:
      "तदित्यनभिसन्धाय फलं यज्ञतपःक्रियाः | दानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षिभिः ||",
    transliteration:
      "tad ity anabhisandhāya phalaṁ yajña-tapaḥ-kriyāḥ | dāna-kriyāś ca vividhāḥ kriyante mokṣa-kāṅkṣibhiḥ ||",
    english:
      "Without desiring fruitive results, one should perform various kinds of sacrifice, penance and charity with the word Tat. The purpose of such transcendental activities is to get free from material entanglement.",
    hindi:
      "फल की अभिलाषा रहित होकर, 'तत्' के उच्चारण के साथ विविध यज्ञ, तप और दान के कार्य मोक्ष की इच्छा रखने वालों द्वारा किए जाते हैं।",
    meaning:
      "Tat — 'That' — is the liberating syllable. To perform action with Tat is to dedicate it entirely to the Absolute, releasing all attachment to outcome. This is nishkama karma in its sacred form.",
    keywords: ["Tat", "desireless action", "liberation", "sacrifice", "moksha"],
    moodTags: ["liberation", "detachment", "moksha", "sacred action"],
  },
  {
    id: "17.26",
    chapter: 17,
    verse: 26,
    sanskrit:
      "सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते | प्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते ||",
    transliteration:
      "sad-bhāve sādhu-bhāve ca sad ity etat prayujyate | praśaste karmaṇi tathā sac-chabdaḥ pārtha yujyate ||",
    english:
      "The word Sat is used in the sense of reality and goodness; and it is also used for auspicious activities, O Partha.",
    hindi:
      "हे पार्थ, 'सत्' शब्द का प्रयोग सत्यता और साधुता के अर्थ में होता है, तथा श्रेष्ठ कर्मों में भी 'सत्' का प्रयोग किया जाता है।",
    meaning:
      "Sat encompasses reality, goodness, and auspicious action simultaneously. When we act in truth and goodness, we participate in Sat — the eternal, unchanging ground of being.",
    keywords: ["Sat", "reality", "goodness", "auspicious action", "truth"],
    moodTags: ["truth", "goodness", "sacred action", "eternal"],
  },
  {
    id: "17.27",
    chapter: 17,
    verse: 27,
    sanskrit:
      "यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते | कर्म चैव तदर्थीयं सदित्येवाभिधीयते ||",
    transliteration:
      "yajñe tapasi dāne ca sthitiḥ sad iti cocyate | karma caiva tad-arthīyaṁ sad ity evābhidhīyate ||",
    english:
      "Steadfastness in sacrifice, austerity and charity is called Sat. And actions performed for the purpose of the Supreme are also called Sat.",
    hindi:
      "यज्ञ, तप और दान में स्थिरता 'सत्' कही जाती है, और उस परमात्मा के लिए किए गए कर्म को भी 'सत्' कहा जाता है।",
    meaning:
      "Constancy in sacred practice is Sat. Any act performed for the divine purpose — not for personal gain — is Sat. This elevates all work into worship when done with this consciousness.",
    keywords: [
      "Sat",
      "constancy",
      "sacred action",
      "divine purpose",
      "worship",
    ],
    moodTags: ["constancy", "devotion", "sacred practice", "divine offering"],
  },
  {
    id: "17.28",
    chapter: 17,
    verse: 28,
    sanskrit:
      "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत् | असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह ||",
    transliteration:
      "aśraddhayā hutaṁ dattaṁ tapas taptaṁ kṛtaṁ ca yat | asad ity ucyate pārtha na ca tat pretya no iha ||",
    english:
      "Whatever is offered, given or performed in austerity without faith in the Supreme, O Partha, is called Asat. It is useless both in this life and in the next.",
    hindi:
      "हे पार्थ, बिना श्रद्धा के किया गया हवन, दान, तप और जो भी कर्म है, वह 'असत्' कहा जाता है — वह न इस लोक में काम आता है, न परलोक में।",
    meaning:
      "Chapter 17 ends with this profound truth: faith is the essential ingredient in all spiritual practice. Without shraddha — sincere faith in the Supreme — all ritual, charity and austerity is Asat: unreal, fruitless, void.",
    keywords: [
      "faith",
      "asat",
      "faithless action",
      "useless",
      "final verse",
      "shraddha",
    ],
    moodTags: ["faith", "warning", "final teaching", "essentials of practice"],
  },
];
