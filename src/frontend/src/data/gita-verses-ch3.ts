// ─── Bhagavad Gita Chapter 3: Karma Yoga ─────────────────────────────────────
// All 43 verses with authentic Sanskrit, transliteration, English, Hindi,
// meaning, keywords, and mood tags.

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

export const GITA_VERSES_CH3: GitaVerse[] = [
  {
    id: "3.1",
    chapter: 3,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच | ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन | तत्किं कर्मणि घोरे मां नियोजयसि केशव ||",
    transliteration:
      "arjuna uvāca | jyāyasī cet karmaṇas te matā buddhir janārdana | tat kiṃ karmaṇi ghore māṃ niyojayasi keśava ||",
    english:
      "Arjuna said: O Janardana, O Keshava, if You think that intelligence is better than fruitive work, then why do You engage me in this horrible warlike action?",
    hindi:
      "अर्जुन बोले: हे जनार्दन! हे केशव! यदि आपको कर्म की अपेक्षा ज्ञान श्रेष्ठ लगता है, तो फिर मुझे इस भयंकर युद्ध-कर्म में क्यों लगा रहे हैं?",
    meaning:
      "Arjuna is confused by Krishna's teaching — if knowledge is superior, why urge him toward battle? He questions the apparent contradiction in Krishna's instruction.",
    keywords: ["knowledge", "action", "war", "confusion", "duty"],
    moodTags: ["confused", "questioning", "seeking guidance"],
  },
  {
    id: "3.2",
    chapter: 3,
    verse: 2,
    sanskrit:
      "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे | तदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् ||",
    transliteration:
      "vyāmiśreṇeva vākyena buddhiṃ mohayasīva me | tad ekaṃ vada niścitya yena śreyo 'ham āpnuyām ||",
    english:
      "My intelligence is bewildered by Your equivocal instructions. Therefore, please tell me decisively which will be most beneficial for me.",
    hindi:
      "आपके मिले-जुले वचनों से मेरी बुद्धि भ्रमित हो रही है। अतः निश्चित रूप से एक बात बताइए, जिससे मैं कल्याण को प्राप्त हो सकूँ।",
    meaning:
      "Arjuna feels intellectually paralyzed by seemingly contradictory teachings about knowledge and action. He begs for one clear, decisive answer.",
    keywords: [
      "bewilderment",
      "clarity",
      "decisiveness",
      "welfare",
      "instruction",
    ],
    moodTags: ["frustrated", "confused", "desperate for clarity"],
  },
  {
    id: "3.3",
    chapter: 3,
    verse: 3,
    sanskrit:
      "श्रीभगवानुवाच | लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ | ज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् ||",
    transliteration:
      "śrī bhagavān uvāca | loke 'smin dvividhā niṣṭhā purā proktā mayānagha | jñāna-yogena sāṅkhyānāṃ karma-yogena yoginām ||",
    english:
      "The Supreme Personality of Godhead said: O sinless Arjuna, I have already explained that there are two classes of men who realize the self. Some are inclined to understand it by empirical philosophical speculation, and others by devotional service.",
    hindi:
      "श्रीभगवान बोले: हे निष्पाप अर्जुन! इस लोक में दो प्रकार की निष्ठा मैंने पहले कही है — सांख्ययोगियों के लिए ज्ञानयोग और योगियों के लिए कर्मयोग।",
    meaning:
      "Krishna reveals that two paths exist for self-realization: the path of knowledge (jnana yoga) for philosophers, and the path of action (karma yoga) for active practitioners. Neither is wrong — both lead to the same goal.",
    keywords: [
      "jnana yoga",
      "karma yoga",
      "two paths",
      "self-realization",
      "knowledge",
      "action",
    ],
    moodTags: ["teaching", "clarity", "guidance"],
  },
  {
    id: "3.4",
    chapter: 3,
    verse: 4,
    sanskrit:
      "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते | न च सन्न्यसनादेव सिद्धिं समधिगच्छति ||",
    transliteration:
      "na karmaṇām anārambhān naiṣkarmyaṃ puruṣo 'śnute | na ca sannyasanād eva siddhiṃ samadhigacchati ||",
    english:
      "Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection.",
    hindi:
      "कर्मों का आरम्भ न करने से मनुष्य नैष्कर्म्य को नहीं प्राप्त होता और न केवल संन्यास से सिद्धि को प्राप्त होता है।",
    meaning:
      "Mere inaction is not the path to liberation. Nor is simply giving up all duties in the name of renunciation. True freedom comes through right action, not its absence.",
    keywords: [
      "inaction",
      "renunciation",
      "freedom",
      "perfection",
      "naiskarma",
    ],
    moodTags: ["correcting misconception", "teaching", "practical wisdom"],
  },
  {
    id: "3.5",
    chapter: 3,
    verse: 5,
    sanskrit:
      "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् | कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ||",
    transliteration:
      "na hi kaścit kṣaṇam api jātu tiṣṭhaty akarma-kṛt | kāryate hy avaśaḥ karma sarvaḥ prakṛti-jair guṇaiḥ ||",
    english:
      "Everyone is forced to act helplessly according to the qualities he has acquired from the modes of material nature; therefore no one can refrain from doing something, not even for a moment.",
    hindi:
      "निस्संदेह कोई भी मनुष्य किसी भी समय क्षण भर भी कर्म किए बिना नहीं रह सकता। सभी प्राणी प्रकृति से उत्पन्न गुणों द्वारा विवश होकर कर्म करते हैं।",
    meaning:
      "Action is unavoidable — every being is compelled to act by the three gunas (qualities of nature). The idea of complete inaction is an illusion. The question is not whether to act, but how.",
    keywords: [
      "gunas",
      "prakriti",
      "compelled action",
      "nature",
      "inescapable",
    ],
    moodTags: ["fundamental truth", "awakening", "realization"],
  },
  {
    id: "3.6",
    chapter: 3,
    verse: 6,
    sanskrit:
      "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् | इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ||",
    transliteration:
      "karmendriyāṇi saṃyamya ya āste manasā smaran | indriyārthān vimūḍhātmā mithyācāraḥ sa ucyate ||",
    english:
      "One who restrains the senses of action but whose mind dwells on sense objects certainly deludes himself and is called a pretender.",
    hindi:
      "जो व्यक्ति कर्मेन्द्रियों को रोककर मन से विषयों का स्मरण करता रहता है, वह मूढ़ात्मा मिथ्याचारी कहलाता है।",
    meaning:
      "Outward renunciation while inwardly craving sense objects is hypocrisy. True renunciation begins in the mind, not merely in external behavior.",
    keywords: [
      "hypocrisy",
      "sense control",
      "mind",
      "self-delusion",
      "pretender",
    ],
    moodTags: ["warning", "discernment", "caution"],
  },
  {
    id: "3.7",
    chapter: 3,
    verse: 7,
    sanskrit:
      "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन | कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ||",
    transliteration:
      "yas tv indriyāṇi manasā niyamyārabhate 'rjuna | karmendriyaiḥ karma-yogam asaktaḥ sa viśiṣyate ||",
    english:
      "O Arjuna, one who controls the senses by the mind and without attachment engages the organs of action in the path of karma yoga, is far superior.",
    hindi:
      "हे अर्जुन! जो व्यक्ति मन से इन्द्रियों को वश में करके, अनासक्त होकर कर्मेन्द्रियों द्वारा कर्मयोग का आचरण करता है, वह श्रेष्ठ है।",
    meaning:
      "The truly superior person controls the senses from within — through mental discipline — and acts in the world without attachment. This is the essence of karma yoga.",
    keywords: ["karma yoga", "detachment", "sense control", "mind", "superior"],
    moodTags: ["inspired", "encouraged", "aspiring"],
  },
  {
    id: "3.8",
    chapter: 3,
    verse: 8,
    sanskrit:
      "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः | शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ||",
    transliteration:
      "niyataṃ kuru karma tvaṃ karma jyāyo hy akarmaṇaḥ | śarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ ||",
    english:
      "Perform your prescribed duty, for doing so is better than not working. One cannot even maintain one's physical body without work.",
    hindi:
      "तू नियत कर्म कर, क्योंकि कर्म न करने से कर्म करना श्रेष्ठ है। कर्म न करने पर तेरे शरीर का निर्वाह भी नहीं होगा।",
    meaning:
      "Even for the most basic survival, action is necessary. Prescribed duty (niyata karma) must be performed — inaction is not only inferior but impossible to sustain.",
    keywords: [
      "prescribed duty",
      "action vs inaction",
      "sustenance",
      "necessity",
      "niyata karma",
    ],
    moodTags: ["motivating", "practical", "urgent"],
  },
  {
    id: "3.9",
    chapter: 3,
    verse: 9,
    sanskrit:
      "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः | तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ||",
    transliteration:
      "yajñārthāt karmaṇo 'nyatra loko 'yaṃ karma-bandhanaḥ | tad-arthaṃ karma kaunteya mukta-saṅgaḥ samācara ||",
    english:
      "Work done as a sacrifice for Vishnu has to be performed, otherwise work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and in that way you will always remain unattached and free from bondage.",
    hindi:
      "यज्ञ (ईश्वर-अर्पण) के लिए किए जाने वाले कर्म को छोड़कर अन्य कर्म इस लोक में बन्धनकारक हैं। हे कौन्तेय! अतः आसक्ति छोड़कर यज्ञ के लिए कर्म कर।",
    meaning:
      "All actions create karmic bondage — except those performed as a sacrifice (yajna) to the divine. Offer your actions to God and you remain free. This is the secret of karma yoga.",
    keywords: ["yajna", "sacrifice", "bondage", "freedom", "dedication to God"],
    moodTags: ["liberation", "purposeful action", "divine offering"],
  },
  {
    id: "3.10",
    chapter: 3,
    verse: 10,
    sanskrit:
      "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः | अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ||",
    transliteration:
      "saha-yajñāḥ prajāḥ sṛṣṭvā puro vāca prajāpatiḥ | anena prasaviṣyadhvam eṣa vo 'stv iṣṭa-kāma-dhuk ||",
    english:
      "In the beginning of creation, the Lord of all creatures sent forth generations of men and demigods, along with sacrifices for Vishnu, and blessed them by saying, 'Be thou happy by this yajna [sacrifice], for its performance will bestow upon you everything desirable for living happily and achieving liberation.'",
    hindi:
      "प्रजापति ने सृष्टि के आरम्भ में यज्ञ के साथ प्रजा की रचना करके कहा — इस यज्ञ के द्वारा वृद्धि प्राप्त करो, यही तुम्हारी इच्छाओं को पूर्ण करने वाला हो।",
    meaning:
      "Creation itself began with yajna. The Creator ordained that beings thrive through mutual sacrifice and offering. This cosmic reciprocity is the foundation of existence.",
    keywords: ["creation", "yajna", "prajapati", "cosmic order", "prosperity"],
    moodTags: ["wonder", "cosmic perspective", "reverence"],
  },
  {
    id: "3.11",
    chapter: 3,
    verse: 11,
    sanskrit: "देवान्भावयतानेन ते देवा भावयन्तु वः | परस्परं भावयन्तः श्रेयः परमवाप्स्यथ ||",
    transliteration:
      "devān bhāvayatānena te devā bhāvayantu vaḥ | parasparaṃ bhāvayantaḥ śreyaḥ param avāpsyatha ||",
    english:
      "The demigods, being pleased by sacrifices, will also please you; thus nourishing one another, there will reign general prosperity for all.",
    hindi:
      "इस यज्ञ से देवताओं को प्रसन्न करो और वे देवता तुम्हें प्रसन्न करें। इस प्रकार परस्पर एक-दूसरे का पोषण करते हुए तुम परम कल्याण को प्राप्त होगे।",
    meaning:
      "The principle of mutual nourishment: humans offer yajna to the devas, who in turn bestow abundance. This cycle of giving sustains all life. Selfless action upholds the cosmic order.",
    keywords: [
      "devas",
      "mutual nourishment",
      "yajna cycle",
      "prosperity",
      "cosmic order",
    ],
    moodTags: ["harmony", "abundance", "interconnectedness"],
  },
  {
    id: "3.12",
    chapter: 3,
    verse: 12,
    sanskrit:
      "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः | तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः ||",
    transliteration:
      "iṣṭān bhogān hi vo devā dāsyante yajña-bhāvitāḥ | tair dattān apradāyaibhyo yo bhuṅkte stena eva saḥ ||",
    english:
      "In charge of the various necessities of life, the demigods, being satisfied by the performance of yajna, will supply all necessities to you. But he who enjoys such gifts without offering them to the demigods in return is certainly a thief.",
    hindi:
      "यज्ञ से प्रसन्न देवता तुम्हें इच्छित भोग देंगे। उनके दिए हुए भोगों को बिना उन्हें दिए जो भोगता है, वह निश्चय ही चोर है।",
    meaning:
      "All abundance comes from the cosmic cycle of giving and receiving. One who takes without offering back — who consumes without contributing — is like a thief stealing from the universe.",
    keywords: ["reciprocity", "giving", "thief", "consumption", "cosmic debt"],
    moodTags: ["moral clarity", "responsibility", "accountability"],
  },
  {
    id: "3.13",
    chapter: 3,
    verse: 13,
    sanskrit:
      "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः | भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ||",
    transliteration:
      "yajña-śiṣṭāśinaḥ santo mucyante sarva-kilbiṣaiḥ | bhuñjate te tv aghaṃ pāpā ye pacanty ātma-kāraṇāt ||",
    english:
      "The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal sense enjoyment, verily eat only sin.",
    hindi:
      "यज्ञ से बचे हुए अन्न को खाने वाले सज्जन सभी पापों से मुक्त हो जाते हैं, किन्तु जो केवल अपने लिए पकाते हैं, वे पाप ही खाते हैं।",
    meaning:
      "Those who offer their actions and food to God before consuming are purified. Selfish consumption without offering — eating only for oneself — accumulates sin and ignorance.",
    keywords: ["prasad", "offering", "sin", "purification", "selfishness"],
    moodTags: ["purification", "spiritual discipline", "gratitude"],
  },
  {
    id: "3.14",
    chapter: 3,
    verse: 14,
    sanskrit:
      "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः | यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः ||",
    transliteration:
      "annād bhavanti bhūtāni parjanyād anna-sambhavaḥ | yajñād bhavati parjanyo yajñaḥ karma-samudbhavaḥ ||",
    english:
      "All living bodies subsist on food grains, which are produced from rains. Rains are produced by performance of yajna [sacrifice], and yajna is born of prescribed duties.",
    hindi:
      "समस्त प्राणी अन्न से उत्पन्न होते हैं, अन्न वर्षा से होता है, वर्षा यज्ञ से होती है और यज्ञ कर्म से उत्पन्न होता है।",
    meaning:
      "Krishna traces the great chain of life: food nourishes beings, rain produces food, yajna brings rain, and yajna comes from right action. Dharmic action sustains all of creation.",
    keywords: ["food", "rain", "yajna", "chain of life", "ecology", "duty"],
    moodTags: ["wonder", "ecological wisdom", "gratitude"],
  },
  {
    id: "3.15",
    chapter: 3,
    verse: 15,
    sanskrit:
      "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम् | तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् ||",
    transliteration:
      "karma brahmodbhavaṃ viddhi brahmākṣara-samudbhavam | tasmāt sarva-gataṃ brahma nityaṃ yajñe pratiṣṭhitam ||",
    english:
      "Regulated activities are prescribed in the Vedas, and the Vedas are directly manifested from the Supreme Personality of Godhead. Consequently, the all-pervading Transcendence is eternally situated in acts of sacrifice.",
    hindi:
      "कर्म वेद से उत्पन्न है और वेद अक्षर ब्रह्म से। इसलिए सर्वव्यापी ब्रह्म सदा यज्ञ में प्रतिष्ठित है।",
    meaning:
      "All prescribed action originates in the Vedas, which emanate from the eternal Brahman. Thus the imperishable divine is always present within righteous action. Duty is sacred.",
    keywords: ["Vedas", "Brahman", "action", "sacred", "eternal", "yajna"],
    moodTags: ["reverence", "cosmic understanding", "sacred duty"],
  },
  {
    id: "3.16",
    chapter: 3,
    verse: 16,
    sanskrit:
      "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः | अघायुरिन्द्रियारामो मोघं पार्थ स जीवति ||",
    transliteration:
      "evaṃ pravartitaṃ cakraṃ nānuvartayatīha yaḥ | aghāyur indriyārāmo moghaṃ pārtha sa jīvati ||",
    english:
      "My dear Arjuna, one who does not follow in human life the cycle of sacrifice thus established by the Vedas certainly leads a life full of sin. Living only for the satisfaction of the senses, such a person lives in vain.",
    hindi:
      "हे पार्थ! जो इस लोक में इस प्रकार चलाए हुए चक्र का अनुसरण नहीं करता, वह पापायु, इन्द्रियों में रमण करने वाला मनुष्य व्यर्थ जीता है।",
    meaning:
      "One who breaks the sacred cycle of yajna — who only consumes without offering — lives a sinful and wasted life, enslaved to the senses. Life has meaning only in contribution.",
    keywords: ["wheel of creation", "sin", "senses", "wasted life", "purpose"],
    moodTags: ["warning", "purpose-seeking", "urgent"],
  },
  {
    id: "3.17",
    chapter: 3,
    verse: 17,
    sanskrit:
      "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः | आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते ||",
    transliteration:
      "yas tv ātma-ratir eva syād ātma-tṛptaś ca māṇavaḥ | ātmany eva ca santuṣṭas tasya kāryaṃ na vidyate ||",
    english:
      "But for one who takes pleasure in the self, who is illuminated in the self, who rejoices in and is satisfied with the self only, fully satiated — for him there is no duty.",
    hindi:
      "परन्तु जो मनुष्य आत्मा में ही रमण करने वाला, आत्मा से ही तृप्त और आत्मा में ही सन्तुष्ट हो, उसके लिए कोई कर्तव्य नहीं है।",
    meaning:
      "The fully self-realized soul, completely content in the Atman, transcends all prescribed duties — not because they abandon action, but because they are free from the need it fulfills.",
    keywords: [
      "self-realized",
      "contentment",
      "atman",
      "no duty",
      "liberation",
    ],
    moodTags: ["aspiration", "highest state", "freedom"],
  },
  {
    id: "3.18",
    chapter: 3,
    verse: 18,
    sanskrit: "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन | न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः ||",
    transliteration:
      "naiva tasya kṛtenārtho nākṛteneha kaścana | na cāsya sarva-bhūteṣu kaścid artha-vyapāśrayaḥ ||",
    english:
      "A self-realized man has no purpose to fulfill in the discharge of his prescribed duties, nor has he any reason not to perform such work. Nor has he any need to depend on any other living being.",
    hindi:
      "उस (आत्मज्ञानी) के लिए न कर्म करने में कोई प्रयोजन है, न कर्म न करने में। और न ही किसी प्राणी पर उसकी कोई निर्भरता है।",
    meaning:
      "For the truly self-realized, doing or not doing has no personal gain at stake. They act without being bound by results — neither hoping for reward nor fearing loss.",
    keywords: [
      "self-realization",
      "independence",
      "no obligation",
      "freedom",
      "transcendence",
    ],
    moodTags: ["freedom", "detachment", "highest wisdom"],
  },
  {
    id: "3.19",
    chapter: 3,
    verse: 19,
    sanskrit:
      "तस्मादसक्तः सततं कार्यं कर्म समाचर | असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||",
    transliteration:
      "tasmād asaktaḥ satataṃ kāryaṃ karma samācara | asakto hy ācaran karma param āpnoti pūruṣaḥ ||",
    english:
      "Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment, one attains the Supreme.",
    hindi:
      "इसलिए तू सदा आसक्तिरहित होकर कर्तव्य-कर्म का भलीभाँति आचरण कर। आसक्तिरहित होकर कर्म करने वाला मनुष्य परमात्मा को प्राप्त होता है।",
    meaning:
      "The supreme instruction of karma yoga: act always, act dutifully, but act without attachment to outcomes. Detached action is the direct path to the Supreme.",
    keywords: [
      "detachment",
      "duty",
      "supreme attainment",
      "karma yoga",
      "continuous action",
    ],
    moodTags: ["motivating", "liberating", "essential teaching"],
  },
  {
    id: "3.20",
    chapter: 3,
    verse: 20,
    sanskrit: "कर्मणैव हि संसिद्धिमास्थिता जनकादयः | लोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि ||",
    transliteration:
      "karmaṇaiva hi saṃsiddhim āsthitā janakādayaḥ | loka-saṃgraham evāpi sampaśyan kartum arhasi ||",
    english:
      "Kings such as Janaka attained perfection solely by performance of prescribed duties. Therefore, just for the sake of educating the people in general, you should perform your work.",
    hindi:
      "जनक आदि ने केवल कर्म के द्वारा ही सिद्धि प्राप्त की। इसलिए लोकसंग्रह को देखते हुए भी तुझे कर्म करना उचित है।",
    meaning:
      "Great kings like Janaka achieved self-realization through righteous action, not renunciation. Krishna urges Arjuna to act for the welfare of all people (loka-sangraha) as well.",
    keywords: [
      "Janaka",
      "perfection",
      "loka-sangraha",
      "society welfare",
      "example",
    ],
    moodTags: ["inspired", "social responsibility", "role model"],
  },
  {
    id: "3.21",
    chapter: 3,
    verse: 21,
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः | स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ||",
    transliteration:
      "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ | sa yat pramāṇaṃ kurute lokas tad anuvartate ||",
    english:
      "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.",
    hindi:
      "श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य लोग भी वही-वही करते हैं। वह जो प्रमाण स्थापित करता है, समस्त संसार उसी का अनुसरण करता है।",
    meaning:
      "Leaders shape society by example. The masses follow what the great do — not just what they say. This is why the wise must act rightly: their conduct becomes the world's standard.",
    keywords: ["leadership", "example", "influence", "society", "standards"],
    moodTags: ["responsibility", "leadership", "social awareness"],
  },
  {
    id: "3.22",
    chapter: 3,
    verse: 22,
    sanskrit:
      "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन | नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि ||",
    transliteration:
      "na me pārthāsti kartavyaṃ triṣu lokeṣu kiñcana | nānavāptam avāptavyaṃ varta eva ca karmaṇi ||",
    english:
      "O son of Pritha, there is no work prescribed for Me within all the three planetary systems. Nor am I in want of anything, nor have I a need to obtain anything — and yet I am engaged in prescribed duties.",
    hindi:
      "हे पार्थ! तीनों लोकों में मेरे लिए कोई कर्तव्य नहीं है, न कुछ अप्राप्त है जिसे प्राप्त करना हो। फिर भी मैं कर्म में ही संलग्न रहता हूँ।",
    meaning:
      "Krishna, the Supreme, has nothing to gain from action — yet He acts ceaselessly. This is the model: do your duty not for personal benefit but because right action sustains the world.",
    keywords: [
      "divine example",
      "duty without need",
      "Krishna acting",
      "no personal gain",
    ],
    moodTags: ["divine perspective", "humble teaching", "inspiring"],
  },
  {
    id: "3.23",
    chapter: 3,
    verse: 23,
    sanskrit:
      "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः | मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ||",
    transliteration:
      "yadi hy ahaṃ na varteyaṃ jātu karmaṇy atandritaḥ | mama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ ||",
    english:
      "For if I ever failed to engage in carefully performing prescribed duties, O Partha, certainly all men would follow My path.",
    hindi:
      "हे पार्थ! यदि मैं कभी सावधानी से कर्म न करूँ, तो मेरे मार्ग का अनुसरण करते हुए सभी मनुष्य भटक जाएँगे।",
    meaning:
      "Even God acts with diligence, because all beings emulate the great. If Krishna ceased to act, chaos would follow. This is the weight of true leadership.",
    keywords: [
      "divine responsibility",
      "leading by example",
      "Krishna's role",
      "cosmic order",
    ],
    moodTags: ["responsibility", "cosmic awareness", "seriousness"],
  },
  {
    id: "3.24",
    chapter: 3,
    verse: 24,
    sanskrit:
      "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् | सङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः ||",
    transliteration:
      "utsīdeyur ime lokā na kuryāṃ karma ced aham | saṅkarasya ca kartā syām upahanyām imāḥ prajāḥ ||",
    english:
      "If I did not perform prescribed duties, all these worlds would be put to ruination. I would be the cause of creating unwanted population, and I would thereby destroy the peace of all living beings.",
    hindi:
      "यदि मैं कर्म न करूँ, तो ये सभी लोक नष्ट हो जाएँगे। मैं वर्णसंकर का कर्ता होऊँगा और इन सब प्रजाओं को नष्ट करने वाला बनूँगा।",
    meaning:
      "Divine action upholds the world. Inaction from those who are powerful and exemplary — like God Himself — leads to social and cosmic collapse. Duty is sustaining.",
    keywords: [
      "cosmic duty",
      "world order",
      "consequences of inaction",
      "chaos",
    ],
    moodTags: ["gravity", "responsibility", "consequence"],
  },
  {
    id: "3.25",
    chapter: 3,
    verse: 25,
    sanskrit:
      "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत | कुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम् ||",
    transliteration:
      "saktāḥ karmaṇy avidvāṃso yathā kurvanti bhārata | kuryād vidvāṃs tathāsaktaś cikīrṣur loka-saṃgraham ||",
    english:
      "As the ignorant perform their duties with attachment to results, the learned may similarly act, but without attachment, for the sake of leading people on the right path.",
    hindi:
      "हे भारत! जैसे अज्ञानी लोग आसक्ति के साथ कर्म करते हैं, वैसे ही विद्वान को लोकसंग्रह की इच्छा से आसक्तिरहित होकर कर्म करना चाहिए।",
    meaning:
      "The wise act as the ignorant do — both perform their duties — but the crucial difference is inner detachment. The wise act for the world's good, not their own.",
    keywords: [
      "wise vs ignorant",
      "detachment",
      "loka-sangraha",
      "action",
      "comparison",
    ],
    moodTags: ["wisdom", "distinction", "role model"],
  },
  {
    id: "3.26",
    chapter: 3,
    verse: 26,
    sanskrit:
      "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् | जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् ||",
    transliteration:
      "na buddhi-bhedaṃ janayed ajñānāṃ karma-saṅginām | joṣayet sarva-karmāṇi vidvān yuktaḥ samācaran ||",
    english:
      "So as not to disrupt the minds of ignorant men attached to the fruitive results of prescribed duties, a learned person should not induce them to stop work. Rather, by acting in the spirit of devotion, he should engage them in all sorts of activities.",
    hindi:
      "ज्ञानी पुरुष को कर्मों में आसक्त अज्ञानियों की बुद्धि में भ्रम नहीं उत्पन्न करना चाहिए, बल्कि स्वयं भली प्रकार कर्म करते हुए उन्हें सभी कर्मों में लगाना चाहिए।",
    meaning:
      "The wise should not disrupt others by preaching abrupt renunciation. Lead by example, not by unsettling the minds of those still attached to results. Gradual guidance is wiser.",
    keywords: [
      "guidance",
      "gradual teaching",
      "not disrupting",
      "wisdom",
      "compassion",
    ],
    moodTags: ["compassionate teaching", "gentle guidance", "wisdom"],
  },
  {
    id: "3.27",
    chapter: 3,
    verse: 27,
    sanskrit:
      "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||",
    transliteration:
      "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ | ahaṅkāra-vimūḍhātmā kartāham iti manyate ||",
    english:
      "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature.",
    hindi:
      "वास्तव में सभी कर्म प्रकृति के गुणों द्वारा होते हैं, किन्तु अहंकार से मोहित आत्मा 'मैं कर्ता हूँ' ऐसा मान लेता है।",
    meaning:
      "It is the ego — not the true self — that claims 'I am the doer.' In reality, the gunas of prakriti perform all actions. Self-knowledge dissolves this illusion of doership.",
    keywords: [
      "ego",
      "false doership",
      "prakriti",
      "gunas",
      "illusion",
      "ahamkara",
    ],
    moodTags: ["awakening", "self-inquiry", "profound insight"],
  },
  {
    id: "3.28",
    chapter: 3,
    verse: 28,
    sanskrit:
      "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः | गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते ||",
    transliteration:
      "tattva-vit tu mahā-bāho guṇa-karma-vibhāgayoḥ | guṇā guṇeṣu vartanta iti matvā na sajjate ||",
    english:
      "One who is in knowledge of the Absolute Truth, O mighty-armed, does not engage himself in the senses and sense gratification, knowing well the differences between work in devotion and work for fruitive results.",
    hindi:
      "हे महाबाहो! गुण और कर्म के विभाग को जानने वाला तत्त्वज्ञानी 'गुण ही गुणों में वर्तते हैं' ऐसा समझकर आसक्त नहीं होता।",
    meaning:
      "The knower of truth understands that it is only the gunas acting upon gunas. Recognizing this, the wise person remains unattached — seeing the play of nature without being swept away by it.",
    keywords: [
      "tattva-jnana",
      "gunas",
      "non-attachment",
      "discernment",
      "wisdom",
    ],
    moodTags: ["equanimity", "wisdom", "liberation"],
  },
  {
    id: "3.29",
    chapter: 3,
    verse: 29,
    sanskrit:
      "प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु | तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् ||",
    transliteration:
      "prakṛter guṇa-sammūḍhāḥ sajjante guṇa-karmasu | tān akṛtsna-vido mandān kṛtsna-vin na vicālayet ||",
    english:
      "Bewildered by the modes of material nature, the ignorant fully engage themselves in material activities and become attached. But the wise should not unsettle them, although these duties are inferior due to the performers' lack of knowledge.",
    hindi:
      "प्रकृति के गुणों से मोहित हुए अज्ञानी लोग गुण-कर्मों में आसक्त रहते हैं। उन अल्पज्ञ मंद लोगों को ज्ञानवान पुरुष विचलित न करे।",
    meaning:
      "The ignorant are absorbed in material activity due to delusion. The wise should not abruptly disrupt their path — spiritual growth is gradual, and forcing awakening can harm more than help.",
    keywords: [
      "ignorance",
      "delusion",
      "gradual awakening",
      "compassion",
      "gunas",
    ],
    moodTags: ["compassion", "patience", "wisdom"],
  },
  {
    id: "3.30",
    chapter: 3,
    verse: 30,
    sanskrit:
      "मयि सर्वाणि कर्माणि सन्न्यस्याध्यात्मचेतसा | निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ||",
    transliteration:
      "mayi sarvāṇi karmāṇi sannyasyādhyātma-cetasā | nirāśīr nirmamo bhūtvā yudhyasva vigata-jvaraḥ ||",
    english:
      "Therefore, O Arjuna, surrendering all your works unto Me, with full knowledge of Me, without desires for profit, with no claims to proprietorship, and free from lethargy, fight.",
    hindi:
      "इसलिए हे अर्जुन! सम्पूर्ण कर्मों को मुझमें अर्पण करके, अध्यात्म-ज्ञान के साथ, आशाहीन, निर्मम और निर्विकार होकर युद्ध कर।",
    meaning:
      "Surrender all action to Krishna. Act without personal craving, without possessiveness, and without anxiety. This is the perfect attitude for karma yoga — engaged but free.",
    keywords: [
      "surrender",
      "dedicate to God",
      "no attachment",
      "fight",
      "freedom",
    ],
    moodTags: ["surrender", "courage", "divine action"],
  },
  {
    id: "3.31",
    chapter: 3,
    verse: 31,
    sanskrit:
      "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः | श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः ||",
    transliteration:
      "ye me matam idaṃ nityam anutiṣṭhanti mānavāḥ | śraddhāvanto 'nasūyanto mucyante te 'pi karmabhiḥ ||",
    english:
      "Those persons who execute their duties according to My injunctions and who follow this teaching faithfully, without envy, become free from the bondage of fruitive actions.",
    hindi:
      "जो मनुष्य श्रद्धापूर्वक और ईर्ष्यारहित होकर मेरी इस मत का सदा पालन करते हैं, वे कर्मबन्धन से मुक्त हो जाते हैं।",
    meaning:
      "Those who sincerely follow this teaching with faith and without envy will be freed from karmic bondage. The key ingredients: sraddha (faith) and absence of envy.",
    keywords: [
      "faith",
      "following teaching",
      "freedom from karma",
      "sincerity",
      "devotion",
    ],
    moodTags: ["promise", "encouragement", "hope"],
  },
  {
    id: "3.32",
    chapter: 3,
    verse: 32,
    sanskrit:
      "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् | सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः ||",
    transliteration:
      "ye tv etad abhyasūyanto nānutiṣṭhanti me matam | sarva-jñāna-vimūḍhāṃs tān viddhi naṣṭān acetasaḥ ||",
    english:
      "But those who, out of envy, disregard these teachings and do not follow them are to be considered bereft of all knowledge, befooled, and ruined in their endeavors for perfection.",
    hindi:
      "किन्तु जो लोग ईर्ष्यावश मेरी इस शिक्षा का पालन नहीं करते, उन्हें सम्पूर्ण ज्ञान से मोहित, विवेकशून्य और नष्ट हुआ जानो।",
    meaning:
      "Rejecting divine teaching out of ego or envy leads to the destruction of wisdom. Those who resist with pride lose discernment and ultimately lose themselves.",
    keywords: ["envy", "rejection", "ignorance", "destruction", "arrogance"],
    moodTags: ["warning", "consequence", "danger of ego"],
  },
  {
    id: "3.33",
    chapter: 3,
    verse: 33,
    sanskrit:
      "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि | प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति ||",
    transliteration:
      "sadṛśaṃ ceṣṭate svasyāḥ prakṛter jñānavān api | prakṛtiṃ yānti bhūtāni nigrahaḥ kiṃ kariṣyati ||",
    english:
      "Even a man of knowledge acts according to his own nature, for everyone follows the nature he has acquired from the three modes. What can repression accomplish?",
    hindi:
      "ज्ञानी पुरुष भी अपनी प्रकृति के अनुसार ही कर्म करता है। सभी प्राणी अपनी प्रकृति का अनुसरण करते हैं। दमन से क्या होगा?",
    meaning:
      "Even the wise act according to their nature. Suppression alone cannot change character — transformation requires wisdom and practice, not mere willpower or force.",
    keywords: [
      "nature",
      "prakriti",
      "suppression",
      "limitation",
      "transformation",
    ],
    moodTags: ["realism", "acceptance", "honest teaching"],
  },
  {
    id: "3.34",
    chapter: 3,
    verse: 34,
    sanskrit:
      "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ | तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ ||",
    transliteration:
      "indriyasyendriyasyārthe rāga-dveṣau vyavasthitau | tayor na vaśam āgacchet tau hy asya paripanthinau ||",
    english:
      "There are principles to regulate attachment and aversion pertaining to the senses and their objects. One should not come under the control of such attachment and aversion, because they are stumbling blocks on the path of self-realization.",
    hindi:
      "इन्द्रियों और विषयों के सम्पर्क में राग और द्वेष स्थित रहते हैं। मनुष्य को उनके वश में नहीं होना चाहिए, क्योंकि वे दोनों इसके विरोधी हैं।",
    meaning:
      "Likes (raga) and dislikes (dvesha) are always present in our sense experience. But we must not be controlled by them — they are obstacles on the spiritual path.",
    keywords: [
      "raga",
      "dvesha",
      "attachment",
      "aversion",
      "obstacles",
      "senses",
    ],
    moodTags: ["watchfulness", "spiritual discipline", "caution"],
  },
  {
    id: "3.35",
    chapter: 3,
    verse: 35,
    sanskrit:
      "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् | स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||",
    transliteration:
      "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt | sva-dharme nidhanaṃ śreyaḥ para-dharmo bhayāvahaḥ ||",
    english:
      "It is far better to discharge one's prescribed duties, even though faultily, than another's duties perfectly. Destruction in the course of performing one's own duty is better, and to perform the duty of another is dangerous.",
    hindi:
      "भलीभाँति आचरण किए गए दूसरे के धर्म से गुणरहित अपना धर्म श्रेष्ठ है। अपने धर्म में मरना भी कल्याणकारक है, दूसरे का धर्म भय देने वाला है।",
    meaning:
      "One's own imperfect duty is better than perfectly performing another's. Authentic action — even flawed — aligns with one's soul. Imitating another's path is spiritually dangerous.",
    keywords: [
      "svadharma",
      "own duty",
      "authenticity",
      "para-dharma",
      "danger",
    ],
    moodTags: ["identity", "authentic living", "courage"],
  },
  {
    id: "3.36",
    chapter: 3,
    verse: 36,
    sanskrit:
      "अर्जुन उवाच | अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः | अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः ||",
    transliteration:
      "arjuna uvāca | atha kena prayukto 'yaṃ pāpaṃ carati pūruṣaḥ | anicchann api vārṣṇeya balād iva niyojitaḥ ||",
    english:
      "Arjuna said: O descendant of Vrishni, by what is one impelled to sinful acts, even unwillingly, as if engaged by force?",
    hindi:
      "अर्जुन बोले: हे वार्ष्णेय! तो फिर यह मनुष्य न चाहते हुए भी किस प्रेरणा से पाप कर्म करता है, मानो बलपूर्वक नियोजित हो?",
    meaning:
      "Arjuna raises a profound question: what force compels people to sin against their own better nature? He has observed this contradiction in himself and in others.",
    keywords: ["sin", "compulsion", "desire", "enemy", "question"],
    moodTags: ["perplexed", "self-inquiry", "seeking truth"],
  },
  {
    id: "3.37",
    chapter: 3,
    verse: 37,
    sanskrit:
      "श्रीभगवानुवाच | काम एष क्रोध एष रजोगुणसमुद्भवः | महाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ||",
    transliteration:
      "śrī bhagavān uvāca | kāma eṣa krodha eṣa rajo-guṇa-samudbhavaḥ | mahāśano mahā-pāpmā viddhy enam iha vairiṇam ||",
    english:
      "The Supreme Personality of Godhead said: It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world.",
    hindi:
      "श्रीभगवान बोले: रजोगुण से उत्पन्न यह काम ही है, यही क्रोध है। यह महाभक्षक, महापापी है — इसे ही इस लोक में वैरी जानो।",
    meaning:
      "Krishna names the ultimate enemy: kama (desire born of passion). When frustrated, desire becomes anger (krodha). This insatiable force is the great devourer of wisdom and the source of all sin.",
    keywords: ["kama", "desire", "anger", "rajas", "enemy", "sin"],
    moodTags: ["revelation", "warning", "identifying the enemy"],
  },
  {
    id: "3.38",
    chapter: 3,
    verse: 38,
    sanskrit: "धूमेनाव्रियते वह्निर्यथादर्शो मलेन च | यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम् ||",
    transliteration:
      "dhūmenāvriyate vahnir yathādarśo malena ca | yatholbenāvṛto garbhas tathā tenedam āvṛtam ||",
    english:
      "As fire is covered by smoke, as a mirror is covered by dust, or as the embryo is covered by the womb, the living entity is similarly covered by different degrees of this lust.",
    hindi:
      "जैसे धुएँ से अग्नि, मैल से दर्पण और जेर से भ्रूण ढका रहता है, उसी प्रकार काम से ज्ञान आच्छादित रहता है।",
    meaning:
      "Desire obscures wisdom in three degrees — as smoke partially covers fire (mildly), as dust completely hides a mirror (moderately), as a womb totally envelops an embryo (completely).",
    keywords: [
      "covering",
      "desire",
      "wisdom",
      "three degrees",
      "smoke fire mirror",
    ],
    moodTags: ["illuminating analogy", "understanding", "clarity"],
  },
  {
    id: "3.39",
    chapter: 3,
    verse: 39,
    sanskrit: "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा | कामरूपेण कौन्तेय दुष्पूरेणानलेन च ||",
    transliteration:
      "āvṛtaṃ jñānam etena jñānino nitya-vairiṇā | kāma-rūpeṇa kaunteya duṣpūreṇānalena ca ||",
    english:
      "Thus the wise living entity's pure consciousness becomes covered by his eternal enemy in the form of lust, which is never satisfied and which burns like fire.",
    hindi:
      "हे कौन्तेय! ज्ञानी के ज्ञान को उसके इस नित्य-शत्रु काम ने ढक रखा है, जो अग्नि की भाँति कभी तृप्त नहीं होता।",
    meaning:
      "Desire is the eternal enemy of wisdom — it can never be satiated, like fire that grows with fuel. No matter how much one indulges, desire only intensifies. Only transcendence can end it.",
    keywords: [
      "desire",
      "insatiable",
      "fire",
      "enemy of wisdom",
      "eternal foe",
    ],
    moodTags: ["warning", "urgency", "spiritual battle"],
  },
  {
    id: "3.40",
    chapter: 3,
    verse: 40,
    sanskrit:
      "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते | एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् ||",
    transliteration:
      "indriyāṇi mano buddhir asyādhiṣṭhānam ucyate | etair vimohayaty eṣa jñānam āvṛtya dehinam ||",
    english:
      "The senses, the mind and the intelligence are the sitting places of this lust. Through them lust covers the real knowledge of the living entity and bewilders him.",
    hindi:
      "इन्द्रियाँ, मन और बुद्धि इसके निवास-स्थान कहे जाते हैं। इन्हीं के द्वारा यह ज्ञान को ढककर देही को मोहित करता है।",
    meaning:
      "Desire operates through three levels: the senses (physical), the mind (emotional), and the intellect (rational). It corrupts all three, making comprehensive self-deception possible.",
    keywords: ["senses", "mind", "intellect", "desire's seat", "delusion"],
    moodTags: ["analysis", "understanding the enemy", "clarity"],
  },
  {
    id: "3.41",
    chapter: 3,
    verse: 41,
    sanskrit:
      "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ | पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् ||",
    transliteration:
      "tasmāt tvam indriyāṇy ādau niyamya bharatarṣabha | pāpmānaṃ prajahi hy enaṃ jñāna-vijñāna-nāśanam ||",
    english:
      "Therefore, O Arjuna, best of the Bharatas, in the very beginning curb this great symbol of sin [lust] by regulating the senses, and slay this destroyer of knowledge and self-realization.",
    hindi:
      "इसलिए हे भरतश्रेष्ठ! तू पहले इन्द्रियों को वश में करके इस ज्ञान और विज्ञान के नाशक महापापी काम को अवश्य मार दे।",
    meaning:
      "The first step in the battle against desire is sense regulation. Control the senses — which are desire's entry points — and you can slay this destroyer of knowledge before it takes hold.",
    keywords: [
      "sense control",
      "first step",
      "slay desire",
      "knowledge protection",
      "discipline",
    ],
    moodTags: ["battle cry", "urgency", "spiritual warrior"],
  },
  {
    id: "3.42",
    chapter: 3,
    verse: 42,
    sanskrit:
      "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः | मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ||",
    transliteration:
      "indriyāṇi parāṇy āhur indriyebhyaḥ paraṃ manaḥ | manasas tu parā buddhir yo buddheḥ paratas tu saḥ ||",
    english:
      "The working senses are superior to dull matter; mind is higher than the senses; intelligence is still higher than the mind; and he [the soul] is even higher than the intelligence.",
    hindi:
      "इन्द्रियों को (शरीर से) श्रेष्ठ कहते हैं, इन्द्रियों से श्रेष्ठ मन है, मन से श्रेष्ठ बुद्धि है और जो बुद्धि से भी श्रेष्ठ है, वह (आत्मा) है।",
    meaning:
      "A hierarchy exists: body < senses < mind < intellect < soul. The soul is the highest authority. To conquer desire, operate from the highest level — from pure soul-consciousness.",
    keywords: [
      "hierarchy",
      "senses mind intellect soul",
      "self above all",
      "spiritual order",
    ],
    moodTags: ["understanding hierarchy", "empowerment", "clear teaching"],
  },
  {
    id: "3.43",
    chapter: 3,
    verse: 43,
    sanskrit:
      "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना | जहि शत्रुं महाबाहो कामरूपं दुरासदम् ||",
    transliteration:
      "evaṃ buddheḥ paraṃ buddhvā saṃstabhyātmānam ātmanā | jahi śatruṃ mahā-bāho kāma-rūpaṃ durāsadam ||",
    english:
      "Thus knowing oneself to be transcendental to the material senses, mind and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence and thus — by spiritual strength — conquer this insatiable enemy known as lust.",
    hindi:
      "इस प्रकार बुद्धि से परे (आत्मा) को जानकर, हे महाबाहो! बुद्धि के द्वारा मन को स्थिर करके, काम के रूप में इस दुर्जेय शत्रु को जीत।",
    meaning:
      "The final instruction of the chapter: know yourself as the soul — transcendent to all senses, mind, and intellect. Grounded in this supreme identity, use the intellect to steady the mind and conquer desire. You are greater than your enemy.",
    keywords: [
      "soul identity",
      "conquer desire",
      "intellect",
      "steady mind",
      "final instruction",
    ],
    moodTags: [
      "empowerment",
      "victory",
      "spiritual warrior",
      "final call to action",
    ],
  },
];
