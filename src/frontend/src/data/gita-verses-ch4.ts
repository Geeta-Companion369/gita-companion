// ─── Bhagavad Gita Chapter 4: Jnana-Karma-Sanyasa Yoga ──────────────────────
// All 42 verses with authentic Sanskrit, transliteration, English, Hindi,
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

export const GITA_VERSES_CH4: GitaVerse[] = [
  {
    id: "4.1",
    chapter: 4,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | इमं विवस्वते योगं प्रोक्तवानहमव्ययम् | विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ||",
    transliteration:
      "śrī-bhagavān uvāca | imaṁ vivasvate yogaṁ proktavān aham avyayam | vivasvān manave prāha manur ikṣvākave 'bravīt ||",
    english:
      "The Blessed Lord said: I instructed this imperishable science of yoga to the sun-god Vivasvan, and Vivasvan instructed it to Manu, the father of mankind, and Manu in turn instructed it to Ikshvaku.",
    hindi:
      "श्रीभगवान् बोले: मैंने इस अविनाशी योग को सूर्यदेव विवस्वान् को उपदेश दिया, विवस्वान् ने मनु को और मनु ने इक्ष्वाकु को बताया।",
    meaning:
      "Krishna reveals the ancient lineage of this yoga — passed from the divine sun-god Vivasvan to Manu (progenitor of humanity) to King Ikshvaku. This yoga is eternal, not newly invented, and was once widely known.",
    keywords: [
      "tradition",
      "yoga",
      "sun-god",
      "lineage",
      "eternal",
      "knowledge",
    ],
    moodTags: ["reverent", "curious", "seeking truth"],
  },
  {
    id: "4.2",
    chapter: 4,
    verse: 2,
    sanskrit:
      "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः | स कालेनेह महता योगो नष्टः परन्तप ||",
    transliteration:
      "evaṁ paramparā-prāptam imaṁ rājarṣayo viduḥ | sa kāleneha mahatā yogo naṣṭaḥ parantapa ||",
    english:
      "This supreme science was thus received through the chain of disciplic succession, and the saintly kings understood it in that way. But in course of time the succession was broken, and therefore the science as it is appears to be lost.",
    hindi:
      "इस प्रकार परम्परा से प्राप्त इस योग को राजर्षियों ने जाना। परन्तु हे परन्तप! बहुत काल बीतने से वह योग इस पृथ्वी पर लुप्तप्राय हो गया।",
    meaning:
      "The sacred knowledge passed down through royal sages, but over vast stretches of time the disciplic succession was broken. The yoga became lost or distorted, necessitating its re-revelation.",
    keywords: [
      "parampara",
      "tradition",
      "lost knowledge",
      "succession",
      "time",
    ],
    moodTags: ["contemplative", "seeking restoration", "reverent"],
  },
  {
    id: "4.3",
    chapter: 4,
    verse: 3,
    sanskrit:
      "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः | भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् ||",
    transliteration:
      "sa evāyaṁ mayā te 'dya yogaḥ proktaḥ purātanaḥ | bhakto 'si me sakhā ceti rahasyaṁ hy etad uttamam ||",
    english:
      "That very ancient science of the relationship with the Supreme is today told by Me to you because you are My devotee as well as My friend and can therefore understand the transcendental mystery of this science.",
    hindi:
      "वही यह पुरातन योग आज मैंने तुम्हें बताया; क्योंकि तुम मेरे भक्त और प्रिय सखा हो, इसलिए यह उत्तम रहस्य तुमने जाना।",
    meaning:
      "Krishna tells Arjuna this ancient secret yoga is being imparted to him specifically because of his devotion and friendship — not to everyone, but to one who is qualified by love and trust.",
    keywords: ["devotion", "friendship", "secret", "yoga", "ancient", "trust"],
    moodTags: ["loved", "chosen", "devoted", "intimate"],
  },
  {
    id: "4.4",
    chapter: 4,
    verse: 4,
    sanskrit:
      "अर्जुन उवाच | अपरं भवतो जन्म परं जन्म विवस्वतः | कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति ||",
    transliteration:
      "arjuna uvāca | aparaṁ bhavato janma paraṁ janma vivasvataḥ | katham etad vijānīyāṁ tvam ādau proktavān iti ||",
    english:
      "Arjuna said: The sun-god Vivasvan is senior by birth to You. How am I to understand that in the beginning You instructed this science to him?",
    hindi:
      "अर्जुन बोले: विवस्वान् का जन्म तो बहुत पहले हुआ था और आपका जन्म अभी हाल में हुआ है — तो मैं यह कैसे समझूँ कि आपने ही इसे आरम्भ में उपदेश दिया था?",
    meaning:
      "Arjuna raises a logical question — Vivasvan (the sun-god) is far older than Krishna's current birth. How could Krishna have taught him? This sets up Krishna's revelation of His eternal nature.",
    keywords: ["birth", "time", "questioning", "eternal", "sun-god"],
    moodTags: ["questioning", "curious", "confused"],
  },
  {
    id: "4.5",
    chapter: 4,
    verse: 5,
    sanskrit:
      "श्रीभगवानुवाच | बहूनि मे व्यतीतानि जन्मानि तव चार्जुन | तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप ||",
    transliteration:
      "śrī-bhagavān uvāca | bahūni me vyatītāni janmāni tava cārjuna | tāny ahaṁ veda sarvāṇi na tvaṁ vettha parantapa ||",
    english:
      "The Blessed Lord said: Many, many births both you and I have passed. I can remember all of them, but you cannot, O subduer of the enemy!",
    hindi:
      "श्रीभगवान् बोले: हे परन्तप अर्जुन! मेरे और तुम्हारे बहुत-से जन्म हो चुके हैं। मैं उन सबको जानता हूँ, परन्तु तुम नहीं जानते।",
    meaning:
      "Krishna reveals His omniscience — He remembers all past births of both Himself and Arjuna, while Arjuna's memory is limited by embodiment. This is the fundamental difference between the divine and the conditioned soul.",
    keywords: [
      "past lives",
      "memory",
      "omniscience",
      "rebirth",
      "divine nature",
    ],
    moodTags: ["awe", "humility", "reverence", "spiritual awakening"],
  },
  {
    id: "4.6",
    chapter: 4,
    verse: 6,
    sanskrit:
      "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् | प्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया ||",
    transliteration:
      "ajo 'pi sann avyayātmā bhūtānām īśvaro 'pi san | prakṛtiṁ svām adhiṣṭhāya sambhavāmy ātma-māyayā ||",
    english:
      "Although I am unborn and My transcendental body never deteriorates, and although I am the Lord of all living entities, I still appear in every millennium in My original transcendental form.",
    hindi:
      "यद्यपि मैं अजन्मा, अव्यय स्वरूप और सब प्राणियों का ईश्वर हूँ, तथापि अपनी प्रकृति को अधीन करके अपनी योगमाया से प्रकट होता हूँ।",
    meaning:
      "Krishna declares His transcendental paradox — He is unborn, imperishable, and the Supreme Lord, yet He appears through His own divine power (yoga-maya), not through material compulsion like ordinary beings.",
    keywords: ["unborn", "eternal", "divine", "incarnation", "maya", "lord"],
    moodTags: ["awe", "devotion", "wonder", "reverence"],
  },
  {
    id: "4.7",
    chapter: 4,
    verse: 7,
    sanskrit:
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
    transliteration:
      "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||",
    english:
      "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion — at that time I descend Myself.",
    hindi:
      "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं को प्रकट करता हूँ।",
    meaning:
      "One of the most famous verses in the Gita — Krishna declares the divine law of His incarnation. Whenever dharma declines and adharma rises, the Supreme Lord descends to restore cosmic and moral order.",
    keywords: [
      "dharma",
      "adharma",
      "incarnation",
      "descent",
      "protection",
      "divine law",
    ],
    moodTags: ["reassured", "protected", "faith", "hope", "devoted"],
  },
  {
    id: "4.8",
    chapter: 4,
    verse: 8,
    sanskrit:
      "परित्राणाय साधूनां विनाशाय च दुष्कृताम् | धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ||",
    transliteration:
      "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām | dharma-saṁsthāpanārthāya sambhavāmi yuge yuge ||",
    english:
      "To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I Myself appear, millennium after millennium.",
    hindi:
      "साधुओं की रक्षा करने के लिए, दुष्टों का विनाश करने के लिए और धर्म की स्थापना के लिए मैं युग-युग में जन्म लेता हूँ।",
    meaning:
      "The sequel to 4.7 — Krishna declares the threefold purpose of His divine descents: protect the righteous, destroy the wicked, and reestablish righteousness (dharma). This verse resonates across all ages and is a promise of divine protection.",
    keywords: [
      "protection",
      "righteous",
      "dharma",
      "incarnation",
      "yugas",
      "divine purpose",
    ],
    moodTags: ["protected", "faithful", "devoted", "reassured", "joyful"],
  },
  {
    id: "4.9",
    chapter: 4,
    verse: 9,
    sanskrit:
      "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः | त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन ||",
    transliteration:
      "janma karma ca me divyam evaṁ yo vetti tattvataḥ | tyaktvā dehaṁ punar janma naiti mām eti so 'rjuna ||",
    english:
      "One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna.",
    hindi:
      "हे अर्जुन! जो मनुष्य मेरे जन्म और कर्म को इस प्रकार तत्त्वतः जान लेता है, वह शरीर त्यागने पर पुनर्जन्म नहीं लेता, बल्कि मुझे प्राप्त होता है।",
    meaning:
      "True knowledge of Krishna's divine birth and activities — not merely intellectual understanding, but tattvatah (in truth/essence) — liberates a soul from the cycle of birth and death. Such a soul attains Krishna's eternal abode.",
    keywords: [
      "liberation",
      "divine knowledge",
      "rebirth",
      "moksha",
      "Krishna's nature",
    ],
    moodTags: [
      "liberation",
      "peace",
      "devoted",
      "hopeful",
      "spiritual longing",
    ],
  },
  {
    id: "4.10",
    chapter: 4,
    verse: 10,
    sanskrit:
      "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः | बहवो ज्ञानतपसा पूता मद्भावमागताः ||",
    transliteration:
      "vīta-rāga-bhaya-krodhā man-mayā mām upāśritāḥ | bahavo jñāna-tapasā pūtā mad-bhāvam āgatāḥ ||",
    english:
      "Being freed from attachment, fear and anger, being fully absorbed in Me and taking refuge in Me, many, many persons in the past became purified by knowledge of Me — and thus they all attained transcendental love for Me.",
    hindi:
      "राग, भय और क्रोध से रहित होकर, मुझमें तन्मय और मेरे आश्रित होकर, ज्ञान और तपस्या से पवित्र हुए बहुत-से भक्त मेरे स्वरूप को प्राप्त हो चुके हैं।",
    meaning:
      "Many devotees throughout history have attained Krishna by purifying themselves of attachment, fear, and anger, and by becoming fully absorbed in Him. This is the path — surrender and purification.",
    keywords: [
      "attachment",
      "fear",
      "anger",
      "purification",
      "devotion",
      "knowledge",
    ],
    moodTags: ["inspired", "hopeful", "devoted", "striving", "peaceful"],
  },
  {
    id: "4.11",
    chapter: 4,
    verse: 11,
    sanskrit:
      "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् | मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ||",
    transliteration:
      "ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham | mama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ ||",
    english:
      "All of them — as they surrender unto Me — I reward accordingly. Everyone follows My path in all respects, O son of Pritha.",
    hindi:
      "हे पार्थ! जो भक्त जिस प्रकार मुझे भजते हैं, मैं भी उन्हें उसी प्रकार भजता हूँ। मनुष्य सब प्रकार से मेरे ही मार्ग का अनुसरण करते हैं।",
    meaning:
      "A profound declaration of divine impartiality — Krishna responds to each soul according to their mode of approach. All paths ultimately lead to and reflect Krishna. He meets every soul where they are.",
    keywords: [
      "surrender",
      "paths",
      "devotion",
      "divine grace",
      "impartiality",
    ],
    moodTags: ["accepted", "loved", "reassured", "devoted", "faithful"],
  },
  {
    id: "4.12",
    chapter: 4,
    verse: 12,
    sanskrit:
      "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः | क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा ||",
    transliteration:
      "kāṅkṣantaḥ karmaṇāṁ siddhiṁ yajanta iha devatāḥ | kṣipraṁ hi mānuṣe loke siddhir bhavati karmajā ||",
    english:
      "Men in this world desire success in fruitive activities, and therefore they worship the demigods. Quickly, of course, men get results from fruitive work in this world.",
    hindi:
      "इस मनुष्यलोक में कर्मों की सिद्धि चाहने वाले लोग देवताओं की पूजा करते हैं, क्योंकि कर्मजन्य सिद्धि शीघ्र होती है।",
    meaning:
      "People who desire quick worldly results worship the demigods, who can grant them swiftly. This is not condemned, but it is contrasted with the higher worship of the Supreme, which leads to eternal liberation.",
    keywords: ["worship", "demigods", "results", "fruitive", "desire", "quick"],
    moodTags: ["worldly", "striving", "seeking results", "curious"],
  },
  {
    id: "4.13",
    chapter: 4,
    verse: 13,
    sanskrit:
      "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः | तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ||",
    transliteration:
      "cātur-varṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ | tasya kartāram api māṁ viddhy akartāram avyayam ||",
    english:
      "According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me. And although I am the creator of this system, you should know that I am yet the nondoer, being unchangeable.",
    hindi:
      "गुण और कर्म के विभाग से मेरे द्वारा चारों वर्णों की सृष्टि की गयी है। यद्यपि मैं उसका कर्ता हूँ, फिर भी मुझे अव्यय और अकर्ता जानो।",
    meaning:
      "Krishna created the four-fold social order (varna) based on qualities (gunas) and actions (karma) — not by birth. Yet being transcendental, He is both creator and non-doer, unaffected by creation.",
    keywords: ["varna", "caste", "guna", "karma", "creation", "non-doer"],
    moodTags: ["contemplative", "philosophical", "seeking understanding"],
  },
  {
    id: "4.14",
    chapter: 4,
    verse: 14,
    sanskrit:
      "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा | इति मां योऽभिजानाति कर्मभिर्न स बध्यते ||",
    transliteration:
      "na māṁ karmāṇi limpanti na me karma-phale spṛhā | iti māṁ yo 'bhijānāti karmabhir na sa badhyate ||",
    english:
      "There is no work that affects Me; nor do I aspire for the fruits of action. One who understands this truth about Me also does not become entangled in the fruitive reactions of work.",
    hindi:
      "कर्म मुझे लिप्त नहीं करते और मुझे कर्मफल की इच्छा भी नहीं है। जो मुझे इस प्रकार जान लेता है, वह भी कर्मों से नहीं बँधता।",
    meaning:
      "Krishna is untouched by karma because He has no desire for results. One who understands this principle and applies it — acting without attachment to fruits — similarly transcends karmic bondage.",
    keywords: [
      "karma",
      "action",
      "non-attachment",
      "freedom",
      "results",
      "bondage",
    ],
    moodTags: ["liberated", "calm", "philosophical", "seeking freedom"],
  },
  {
    id: "4.15",
    chapter: 4,
    verse: 15,
    sanskrit:
      "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः | कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् ||",
    transliteration:
      "evaṁ jñātvā kṛtaṁ karma pūrvair api mumukṣubhiḥ | kuru karmaiva tasmāt tvaṁ pūrvaiḥ pūrvataraṁ kṛtam ||",
    english:
      "All the liberated souls in ancient times acted with this understanding of My transcendental nature. Therefore, as the ancients, you should perform your duty in this divine consciousness.",
    hindi:
      "पूर्वकाल में मुमुक्षुओं ने भी यह जानकर कर्म किए थे। अतः तुम भी पूर्वजों द्वारा सदा किए जाते हुए कर्मों को ही करो।",
    meaning:
      "The ancient seekers of liberation acted with this understanding of Krishna's transcendental nature. Arjuna should follow their example — act, but act with divine consciousness, not in ignorance.",
    keywords: [
      "ancient sages",
      "action",
      "liberation",
      "divine consciousness",
      "example",
    ],
    moodTags: ["inspired", "dutiful", "motivated", "reverent"],
  },
  {
    id: "4.16",
    chapter: 4,
    verse: 16,
    sanskrit:
      "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः | तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||",
    transliteration:
      "kiṁ karma kim akarmeti kavayo 'py atra mohitāḥ | tat te karma pravakṣyāmi yaj jñātvā mokṣyase 'śubhāt ||",
    english:
      "Even the intelligent are bewildered in determining what is action and what is inaction. Now I shall explain to you what action is, knowing which you shall be liberated from all misfortune.",
    hindi:
      "कर्म क्या है और अकर्म क्या है — इस विषय में बड़े-बड़े विद्वान भी मोहित हैं। अतः मैं तुम्हें कर्म का स्वरूप बताऊँगा, जिसे जानकर तुम अशुभ से मुक्त हो जाओगे।",
    meaning:
      "Even wise men are confused about the nature of action and inaction. Krishna promises to clarify this mystery because correct understanding of action is itself liberating.",
    keywords: [
      "action",
      "inaction",
      "confusion",
      "wisdom",
      "liberation",
      "knowledge",
    ],
    moodTags: ["curious", "confused", "seeking clarity", "attentive"],
  },
  {
    id: "4.17",
    chapter: 4,
    verse: 17,
    sanskrit:
      "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः | अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः ||",
    transliteration:
      "karmaṇo hy api boddhavyaṁ boddhavyaṁ ca vikarmaṇaḥ | akarmaṇaś ca boddhavyaṁ gahanā karmaṇo gatiḥ ||",
    english:
      "The intricacies of action are very hard to understand. Therefore one should know properly what action is, what forbidden action is, and what inaction is.",
    hindi:
      "कर्म का भी स्वरूप जानना चाहिए, विकर्म का भी स्वरूप जानना चाहिए और अकर्म का भी स्वरूप जानना चाहिए; कर्म की गति बड़ी गहन है।",
    meaning:
      "Three categories must be understood: karma (prescribed duty), vikarma (forbidden action), and akarma (inaction/non-action). The way of karma is profound and subtle — not to be understood superficially.",
    keywords: [
      "karma",
      "vikarma",
      "akarma",
      "depth",
      "understanding",
      "subtlety",
    ],
    moodTags: ["contemplative", "studious", "seeking wisdom", "philosophical"],
  },
  {
    id: "4.18",
    chapter: 4,
    verse: 18,
    sanskrit:
      "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः | स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ||",
    transliteration:
      "karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ | sa buddhimān manuṣyeṣu sa yuktaḥ kṛtsna-karma-kṛt ||",
    english:
      "One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.",
    hindi:
      "जो कर्म में अकर्म देखता है और अकर्म में कर्म देखता है, वह मनुष्यों में बुद्धिमान है और वह योगी सम्पूर्ण कर्मों को करने वाला है।",
    meaning:
      "The highest insight: a truly wise person sees the absence of ego-binding action even while acting, and sees the karmic implications even in apparent inaction. This paradoxical understanding distinguishes the true yogi.",
    keywords: [
      "inaction in action",
      "wisdom",
      "yogi",
      "paradox",
      "transcendence",
      "intelligence",
    ],
    moodTags: [
      "enlightened",
      "philosophical",
      "contemplative",
      "seeking wisdom",
    ],
  },
  {
    id: "4.19",
    chapter: 4,
    verse: 19,
    sanskrit:
      "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः | ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः ||",
    transliteration:
      "yasya sarve samārambhāḥ kāma-saṅkalpa-varjitāḥ | jñānāgni-dagdha-karmāṇaṁ tam āhuḥ paṇḍitaṁ budhāḥ ||",
    english:
      "One is understood to be in full knowledge whose every endeavor is devoid of desire for sense gratification. He is said by sages to be a worker for whom the reactions of work have been burned up by the fire of perfect knowledge.",
    hindi:
      "जिसके सभी कार्य कामना और संकल्प से रहित हैं और जिसके कर्म ज्ञानाग्नि से भस्म हो गए हैं, उसे ज्ञानीजन पण्डित कहते हैं।",
    meaning:
      "The fire of knowledge burns all karmas. A truly wise person acts without desire or ego-motivation; their actions leave no karmic residue. Wise sages call such a one a true scholar (pandita).",
    keywords: [
      "knowledge",
      "fire",
      "desire",
      "karma",
      "pandita",
      "purification",
    ],
    moodTags: ["inspired", "striving", "purified", "devoted"],
  },
  {
    id: "4.20",
    chapter: 4,
    verse: 20,
    sanskrit:
      "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः | कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः ||",
    transliteration:
      "tyaktvā karma-phalāsaṅgaṁ nitya-tṛpto nirāśrayaḥ | karmaṇy abhipravṛtto 'pi naiva kiñcit karoti saḥ ||",
    english:
      "Abandoning all attachment to the results of his activities, ever satisfied and independent, he performs no fruitive action, although engaged in all kinds of undertakings.",
    hindi:
      "कर्मफल में आसक्ति त्यागकर, सदा संतुष्ट और निरपेक्ष रहकर, कर्म में प्रवृत्त होने पर भी वह वास्तव में कुछ भी नहीं करता।",
    meaning:
      "True renunciation means releasing attachment to outcomes, not abandoning action. Such a person is always content, needing nothing external — though fully engaged in work, they accumulate no karma.",
    keywords: [
      "renunciation",
      "contentment",
      "non-attachment",
      "action",
      "independence",
    ],
    moodTags: ["content", "peaceful", "liberated", "serene"],
  },
  {
    id: "4.21",
    chapter: 4,
    verse: 21,
    sanskrit:
      "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः | शारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम् ||",
    transliteration:
      "nirāśīr yata-cittātmā tyakta-sarva-parigrahaḥ | śārīraṁ kevalaṁ karma kurvan nāpnoti kilbiṣam ||",
    english:
      "Such a man of understanding acts with mind and intelligence perfectly controlled, gives up all sense of proprietorship over his possessions, and acts only for the bare necessities of life. Thus working, he is not affected by sinful reactions.",
    hindi:
      "जो आशारहित है, मन और इन्द्रियों को वश में किए हुए है, सब प्रकार के परिग्रह का त्याग कर चुका है — वह केवल शरीर-सम्बन्धी कर्म करता हुआ पाप को प्राप्त नहीं होता।",
    meaning:
      "Acting only for bare necessities, with controlled mind and senses, without possessiveness — such a person is completely free from sinful reactions. Minimalism and self-control lead to spiritual freedom.",
    keywords: [
      "control",
      "possessiveness",
      "minimalism",
      "purity",
      "sin-free",
      "bare necessities",
    ],
    moodTags: ["disciplined", "pure", "simple", "serene"],
  },
  {
    id: "4.22",
    chapter: 4,
    verse: 22,
    sanskrit:
      "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः | समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते ||",
    transliteration:
      "yadṛcchā-lābha-santuṣṭo dvandvātīto vimatsaraḥ | samaḥ siddhāv asiddhau ca kṛtvāpi na nibadhyate ||",
    english:
      "He who is satisfied with gain which comes of its own accord, who is free from duality and does not envy, who is steady in both success and failure, is never entangled, even though he performs actions.",
    hindi:
      "जो स्वयं आई हुई वस्तु से संतुष्ट है, जो द्वन्द्व से रहित और ईर्ष्या से मुक्त है, जो सिद्धि और असिद्धि में समान है, वह कर्म करके भी नहीं बँधता।",
    meaning:
      "Contentment with whatever comes naturally, equanimity in success and failure, absence of envy — these traits characterize the yogi who acts without being bound by karma.",
    keywords: [
      "contentment",
      "equanimity",
      "envy",
      "success",
      "failure",
      "freedom",
    ],
    moodTags: ["equanimous", "content", "balanced", "peaceful"],
  },
  {
    id: "4.23",
    chapter: 4,
    verse: 23,
    sanskrit: "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः | यज्ञायाचरतः कर्म समग्रं प्रविलीयते ||",
    transliteration:
      "gata-saṅgasya muktasya jñānāvasthita-cetasaḥ | yajñāyācarataḥ karma sagraṁ pravilīyate ||",
    english:
      "The work of a man who is unattached to the modes of material nature and who is fully situated in transcendental knowledge merges entirely into transcendence.",
    hindi:
      "जो आसक्ति से रहित है, जो मुक्त है, जिसका चित्त ज्ञान में स्थित है और जो यज्ञ के लिए कर्म करता है — उसके सब कर्म विलीन हो जाते हैं।",
    meaning:
      "When action is performed as yajna (sacrifice/offering), by one who is detached and situated in knowledge, all karma dissolves. The purpose of work transforms from personal gain to divine offering.",
    keywords: [
      "yajna",
      "sacrifice",
      "knowledge",
      "detachment",
      "liberation",
      "dissolution",
    ],
    moodTags: ["devoted", "liberated", "pure", "offering"],
  },
  {
    id: "4.24",
    chapter: 4,
    verse: 24,
    sanskrit:
      "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् | ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ||",
    transliteration:
      "brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam | brahmaiva tena gantavyaṁ brahma-karma-samādhinā ||",
    english:
      "A person who is fully absorbed in Krishna-consciousness is sure to attain the spiritual kingdom because of his full contribution to spiritual activities, in which the consummation is absolute and that which is offered is of the same spiritual nature.",
    hindi:
      "यज्ञ में अर्पण भी ब्रह्म है, हवि भी ब्रह्म है, ब्रह्मरूप अग्नि में ब्रह्म द्वारा हवन किया जाता है। ब्रह्मकर्म में स्थित उस योगी का गन्तव्य भी ब्रह्म ही है।",
    meaning:
      "The Brahman-vision: in the highest realization, the offering, the fire, the offerer, and the act of offering are all Brahman (the Absolute). Everything is permeated by the divine — this is the ultimate yajna.",
    keywords: ["Brahman", "yajna", "offering", "fire", "absolute", "unity"],
    moodTags: ["mystical", "devoted", "unified", "transcendent", "awe"],
  },
  {
    id: "4.25",
    chapter: 4,
    verse: 25,
    sanskrit: "दैवमेवापरे यज्ञं योगिनः पर्युपासते | ब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति ||",
    transliteration:
      "daivam evāpare yajñaṁ yoginaḥ paryupāsate | brahmāgnāv apare yajñaṁ yajñenaivopajuhvati ||",
    english:
      "Some yogis perfectly worship the demigods by offering different sacrifices to them, and some of them offer sacrifices in the fire of the Supreme Brahman.",
    hindi:
      "कुछ योगी देवताओं की पूजा के रूप में यज्ञ करते हैं और कुछ ब्रह्माग्नि में यज्ञ द्वारा ही यज्ञ की आहुति देते हैं।",
    meaning:
      "Different spiritual practitioners worship through different forms of yajna — some offer to the demigods, others offer everything into the fire of Brahman itself. All are paths of sacrifice.",
    keywords: ["yajna", "worship", "demigods", "Brahman", "paths", "sacrifice"],
    moodTags: ["reverential", "contemplative", "devoted"],
  },
  {
    id: "4.26",
    chapter: 4,
    verse: 26,
    sanskrit:
      "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति | शब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति ||",
    transliteration:
      "śrotrādīnīndriyāṇy anye saṁyamāgniṣu juhvati | śabdādīn viṣayān anya indriyāgniṣu juhvati ||",
    english:
      "Some [who are interested in achieving self-realization through control of the mind and senses] offer the hearing process and other senses as sacrifice, while others offer sound and other sense objects as sacrifice.",
    hindi:
      "कुछ लोग श्रवण आदि इन्द्रियों का संयमरूपी अग्नि में हवन करते हैं और कुछ शब्द आदि विषयों को इन्द्रियरूपी अग्नि में हवन करते हैं।",
    meaning:
      "Two approaches to sense-yajna: some offer the senses themselves (restrain them completely), others offer sense objects into the fire of the senses (experience them without attachment). Both are valid paths.",
    keywords: ["senses", "sense control", "sacrifice", "yajna", "restraint"],
    moodTags: ["disciplined", "contemplative", "practicing"],
  },
  {
    id: "4.27",
    chapter: 4,
    verse: 27,
    sanskrit:
      "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे | आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते ||",
    transliteration:
      "sarvāṇīndriya-karmāṇi prāṇa-karmāṇi cāpare | ātma-saṁyama-yogāgnau juhvati jñāna-dīpite ||",
    english:
      "Others, who are interested in achieving self-realization through control of the mind and senses, offer the functions of all the senses and of the life breath as oblations into the controlled-mind fire, kindled by knowledge.",
    hindi:
      "दूसरे लोग समस्त इन्द्रियों के कर्म और प्राणों के कर्म को ज्ञान से प्रकाशित आत्मसंयमरूपी योगाग्नि में हवन कर देते हैं।",
    meaning:
      "Some yogis offer all sense activities and even the life-force (prana) into the fire of self-control illumined by knowledge. This represents the complete internalization of the yajna — the highest form of sacrifice.",
    keywords: [
      "sense control",
      "prana",
      "self-control",
      "knowledge",
      "fire",
      "yoga",
    ],
    moodTags: [
      "disciplined",
      "advanced",
      "contemplative",
      "devoted to practice",
    ],
  },
  {
    id: "4.28",
    chapter: 4,
    verse: 28,
    sanskrit:
      "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे | स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ||",
    transliteration:
      "dravya-yajñās tapo-yajñā yoga-yajñās tathāpare | svādhyāya-jñāna-yajñāś ca yatayaḥ saṁśita-vratāḥ ||",
    english:
      "Having accepted strict vows, some become enlightened by sacrificing their possessions, and others by performing severe austerities, by practicing the yoga of eightfold mysticism, or by studying the Vedas to advance in transcendental knowledge.",
    hindi:
      "कड़े व्रतों वाले कुछ साधक द्रव्ययज्ञ करते हैं, कुछ तपोयज्ञ, कुछ योगयज्ञ और कुछ स्वाध्याय तथा ज्ञानयज्ञ करते हैं।",
    meaning:
      "Four types of yajna are listed: offering of wealth (dravya), austerity (tapas), yoga practice, and study with knowledge (svādhyāya/jñāna). All sincere seekers with firm vows walk their path toward the divine.",
    keywords: [
      "austerity",
      "wealth",
      "yoga",
      "study",
      "knowledge",
      "sacrifice",
      "vows",
    ],
    moodTags: ["dedicated", "disciplined", "aspiring", "sincere"],
  },
  {
    id: "4.29",
    chapter: 4,
    verse: 29,
    sanskrit:
      "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे | प्राणापानगती रुद्ध्वा प्राणायामपरायणाः ||",
    transliteration:
      "apāne juhvati prāṇaṁ prāṇe 'pānaṁ tathāpare | prāṇāpāna-gatī ruddhvā prāṇāyāma-parāyaṇāḥ ||",
    english:
      "And there are even others who are inclined to the process of breath restraint to remain in trance, and they practice stopping the movement of the outgoing breath into the incoming, and incoming breath into the outgoing, and thus at last remain in trance, stopping all breathing. Some of them, curtailing the eating process, offer the outgoing breath into itself as a sacrifice.",
    hindi:
      "कुछ लोग अपान में प्राण का और प्राण में अपान का हवन करते हैं और प्राण-अपान की गति रोककर प्राणायाम में परायण रहते हैं।",
    meaning:
      "This verse describes pranayama — the yoga of breath control. By offering the outgoing breath (prana) into the incoming (apana) and vice versa, the yogi gains mastery over the life force and stills the mind.",
    keywords: [
      "pranayama",
      "breath control",
      "prana",
      "apana",
      "yoga",
      "trance",
    ],
    moodTags: ["meditative", "disciplined", "yogic practice"],
  },
  {
    id: "4.30",
    chapter: 4,
    verse: 30,
    sanskrit:
      "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति | सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः ||",
    transliteration:
      "apare niyatāhārāḥ prāṇān prāṇeṣu juhvati | sarve 'py ete yajña-vido yajña-kṣapita-kalmaṣāḥ ||",
    english:
      "Others, who engage in yoga by restricting their diet, offer the life breath into the life breath. All these performers who know the meaning of sacrifice become cleansed of sinful reactions, and, having tasted the nectar of the results of sacrifices, they advance toward the supreme eternal atmosphere.",
    hindi:
      "कुछ लोग नियमित आहार करके प्राणों का प्राणों में हवन करते हैं। ये सभी यज्ञों को जानने वाले और यज्ञ से पापों का नाश करने वाले हैं।",
    meaning:
      "Those who practice regulated eating also perform a form of yajna. All these diverse practitioners — because they understand the principle of sacrifice — are purified and progress toward the Supreme.",
    keywords: [
      "diet",
      "purification",
      "yajna",
      "prana",
      "sacrifice",
      "progress",
    ],
    moodTags: ["disciplined", "purified", "progressing", "devoted"],
  },
  {
    id: "4.31",
    chapter: 4,
    verse: 31,
    sanskrit:
      "यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् | नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम ||",
    transliteration:
      "yajña-śiṣṭāmṛta-bhujo yānti brahma sanātanam | nāyaṁ loko 'sty ayajñasya kuto 'nyaḥ kuru-sattama ||",
    english:
      "O best of the Kuru dynasty, without sacrifice one can never live happily on this planet or in this life; what then of the next?",
    hindi:
      "हे कुरुश्रेष्ठ! यज्ञशेष अमृत का भोग करने वाले सनातन ब्रह्म को प्राप्त होते हैं। यज्ञ न करने वाले के लिए यह लोक भी सुखकर नहीं, फिर परलोक की तो बात ही क्या?",
    meaning:
      "Those who enjoy the remnants of sacrifice (prasad) attain eternal Brahman. Without sacrifice — without giving, offering, serving — one cannot even prosper in this world, let alone attain the next.",
    keywords: [
      "sacrifice",
      "prasad",
      "Brahman",
      "this world",
      "next world",
      "duty",
    ],
    moodTags: ["motivated", "reflective", "dutiful", "devotional"],
  },
  {
    id: "4.32",
    chapter: 4,
    verse: 32,
    sanskrit:
      "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे | कर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे ||",
    transliteration:
      "evaṁ bahu-vidhā yajñā vitatā brahmaṇo mukhe | karma-jān viddhi tān sarvān evaṁ jñātvā vimokṣyase ||",
    english:
      "All these different types of sacrifice are approved by the Vedas, and all of them are born of different types of work. Knowing them as such, you will become liberated.",
    hindi:
      "इस प्रकार बहुविध यज्ञ वेद के मुख में विस्तृत हैं। उन सबको कर्म से उत्पन्न जानो। ऐसा जानकर तुम मुक्त हो जाओगे।",
    meaning:
      "The multitude of sacrifices described are all Vedic, all emerging from action (karma). Knowing them correctly — understanding the principle behind them all — leads to liberation.",
    keywords: [
      "Vedas",
      "variety",
      "sacrifice",
      "knowledge",
      "liberation",
      "karma",
    ],
    moodTags: ["enlightened", "knowledgeable", "liberated", "studious"],
  },
  {
    id: "4.33",
    chapter: 4,
    verse: 33,
    sanskrit:
      "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप | सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते ||",
    transliteration:
      "śreyān dravya-mayād yajñāj jñāna-yajñaḥ parantapa | sarvaṁ karmākhilaṁ pārtha jñāne parisamāpyate ||",
    english:
      "O subduer of the enemy, the sacrifice performed in knowledge is better than the mere sacrifice of material possessions. After all, O son of Pritha, all sacrifices of work culminate in transcendental knowledge.",
    hindi:
      "हे परन्तप! द्रव्यमय यज्ञ की अपेक्षा ज्ञानयज्ञ श्रेष्ठ है; हे पार्थ! समस्त कर्म ज्ञान में समाप्त हो जाते हैं।",
    meaning:
      "Knowledge-sacrifice is superior to material sacrifice. All karma ultimately resolves in knowledge — the purpose of all action is eventually to arrive at wisdom. This is a pivotal teaching of the chapter.",
    keywords: [
      "knowledge",
      "sacrifice",
      "wisdom",
      "superior",
      "culmination",
      "karma",
    ],
    moodTags: ["inspired", "seeking wisdom", "devoted", "enlightened"],
  },
  {
    id: "4.34",
    chapter: 4,
    verse: 34,
    sanskrit:
      "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया | उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ||",
    transliteration:
      "tad viddhi praṇipātena paripraśnena sevayā | upadekṣyanti te jñānaṁ jñāninas tattva-darśinaḥ ||",
    english:
      "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.",
    hindi:
      "उस ज्ञान को प्रणिपात, परिप्रश्न और सेवा से जानो। ज्ञानी और तत्त्वदर्शी महात्मा तुम्हें ज्ञान का उपदेश देंगे।",
    meaning:
      "One of the most important verses on the Guru-disciple relationship. True knowledge comes through three means: surrender (pranipata), sincere inquiry (pariprasna), and service (seva) to a self-realized teacher who has seen the truth.",
    keywords: [
      "guru",
      "surrender",
      "inquiry",
      "service",
      "knowledge",
      "self-realized",
    ],
    moodTags: ["humble", "seeking", "devoted", "grateful", "student"],
  },
  {
    id: "4.35",
    chapter: 4,
    verse: 35,
    sanskrit:
      "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव | येन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि ||",
    transliteration:
      "yaj jñātvā na punar moham evaṁ yāsyasi pāṇḍava | yena bhūtāny aśeṣāṇi drakṣyasy ātmany atho mayi ||",
    english:
      "Having obtained real knowledge from a self-realized soul, you will never fall again into such illusion, for by this knowledge you will see that all living beings are but part of the Supreme, or, in other words, that they are Mine.",
    hindi:
      "जिसे जानकर तुम पुनः इस प्रकार मोह को नहीं प्राप्त होगे और जिससे तुम सब प्राणियों को अपने में और मुझमें देखोगे।",
    meaning:
      "True knowledge received from a guru removes all illusion permanently. The seeker sees all beings within the Self, and all beings within Krishna — the experience of unity consciousness that liberates forever.",
    keywords: [
      "knowledge",
      "illusion",
      "unity",
      "all beings",
      "liberation",
      "self",
    ],
    moodTags: ["liberated", "unified", "awe", "devoted", "enlightened"],
  },
  {
    id: "4.36",
    chapter: 4,
    verse: 36,
    sanskrit:
      "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः | सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि ||",
    transliteration:
      "api ced asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛttamaḥ | sarvaṁ jñāna-plavenaiva vṛjinaṁ santariṣyasi ||",
    english:
      "Even if you are considered to be the most sinful of all sinners, you will be able to cross over the ocean of miseries by the boat of transcendental knowledge alone.",
    hindi:
      "यदि तुम सब पापियों से भी अधिक पाप करने वाले हो, तो भी ज्ञानरूपी नाव से ही सम्पूर्ण पापसमुद्र को तर जाओगे।",
    meaning:
      "No sin is too great for the power of divine knowledge to dissolve. The boat of jnana (knowledge) can carry even the most sinful across the ocean of misery. This is a verse of supreme hope and forgiveness.",
    keywords: [
      "sin",
      "knowledge",
      "forgiveness",
      "ocean",
      "liberation",
      "hope",
    ],
    moodTags: ["hopeful", "forgiven", "reassured", "grace", "emergency"],
  },
  {
    id: "4.37",
    chapter: 4,
    verse: 37,
    sanskrit:
      "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुते'र्जुन | ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ||",
    transliteration:
      "yathaidhāṁsi samiddho 'gnir bhasma-sāt kurute 'rjuna | jñānāgniḥ sarva-karmāṇi bhasma-sāt kurute tathā ||",
    english:
      "As a blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge burn to ashes all reactions to material activities.",
    hindi:
      "हे अर्जुन! जिस प्रकार प्रज्वलित अग्नि ईंधन को भस्म कर देती है, उसी प्रकार ज्ञानरूपी अग्नि सब कर्मों को भस्म कर देती है।",
    meaning:
      "A vivid and powerful metaphor: just as fire reduces fuel to ash, the fire of knowledge burns all karma to nothing. No trace remains. This is the transformative power of true jnana.",
    keywords: [
      "fire",
      "knowledge",
      "karma",
      "ash",
      "transformation",
      "purification",
    ],
    moodTags: ["inspired", "transformed", "purified", "hopeful"],
  },
  {
    id: "4.38",
    chapter: 4,
    verse: 38,
    sanskrit:
      "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते | तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ||",
    transliteration:
      "na hi jñānena sadṛśaṁ pavitram iha vidyate | tat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati ||",
    english:
      "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has become accomplished in the practice of devotional service enjoys this knowledge within himself in due course of time.",
    hindi:
      "इस संसार में ज्ञान के समान पवित्र करने वाला निश्चय ही कुछ भी नहीं है। उसे योग में सिद्ध पुरुष कालान्तर में स्वयं अपने आप में पाता है।",
    meaning:
      "Nothing in all creation is as purifying as transcendental knowledge. It is not found externally but discovered within oneself by one who has matured through yoga practice over time.",
    keywords: ["knowledge", "purity", "yoga", "within", "maturity", "sublime"],
    moodTags: ["reverent", "inspired", "seeking wisdom", "peaceful", "devoted"],
  },
  {
    id: "4.39",
    chapter: 4,
    verse: 39,
    sanskrit:
      "श्रद्धावान्लभते ज्ञानं तत्परः संयतेन्द्रियः | ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ||",
    transliteration:
      "śraddhāvān labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ | jñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati ||",
    english:
      "A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace.",
    hindi:
      "श्रद्धावान्, तत्पर और जितेन्द्रिय मनुष्य ज्ञान को प्राप्त करता है और ज्ञान प्राप्त करके शीघ्र ही परम शान्ति को प्राप्त होता है।",
    meaning:
      "Three qualities qualify one for knowledge: shraddha (faith/trust), dedication (tat-parah), and sense control (samyatendriyah). With these, knowledge comes swiftly — and with knowledge, supreme peace.",
    keywords: [
      "faith",
      "dedication",
      "sense control",
      "knowledge",
      "peace",
      "shraddha",
    ],
    moodTags: ["faithful", "dedicated", "peaceful", "hopeful", "aspiring"],
  },
  {
    id: "4.40",
    chapter: 4,
    verse: 40,
    sanskrit:
      "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति | नायं लोकोऽस्ति न परो न सुखं संशयात्मनः ||",
    transliteration:
      "ajñaś cāśraddadhānaś ca saṁśayātmā vinaśyati | nāyaṁ loko 'sti na paro na sukhaṁ saṁśayātmanaḥ ||",
    english:
      "But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor in the next.",
    hindi:
      "अज्ञानी, श्रद्धारहित और संशयात्मा का विनाश हो जाता है। संशयात्मा के लिए न यह लोक है, न परलोक है और न सुख है।",
    meaning:
      "The doubting, faithless, and ignorant soul perishes spiritually. Doubt without resolution is the greatest obstacle — it prevents progress in both this life and the next. Faith is the doorway to knowledge.",
    keywords: [
      "doubt",
      "faith",
      "ignorance",
      "destruction",
      "suffering",
      "both worlds",
    ],
    moodTags: ["cautioned", "seeking faith", "reflective", "urgent"],
  },
  {
    id: "4.41",
    chapter: 4,
    verse: 41,
    sanskrit:
      "योगसन्न्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम् | आत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय ||",
    transliteration:
      "yoga-sannyasta-karmāṇaṁ jñāna-sañchinna-saṁśayam | ātmavantaṁ na karmāṇi nibadhnanti dhanañjaya ||",
    english:
      "One who acts in devotional service, renouncing the fruits of his actions, and whose doubts have been destroyed by transcendental knowledge, is situated factually in the self. Thus he is not bound by the reactions of work, O conqueror of riches.",
    hindi:
      "हे धनंजय! जिसने योग से कर्म को सन्न्यस्त कर दिया है, ज्ञान से संशय को काट दिया है और जो आत्मवान् है, उसे कर्म नहीं बाँधते।",
    meaning:
      "The triple qualification for freedom from karmic bondage: renunciation of work's fruits through yoga, cutting doubt through knowledge, and being established in the Self (atman). Such a person is free.",
    keywords: [
      "renunciation",
      "yoga",
      "doubt",
      "knowledge",
      "self",
      "freedom",
      "karma",
    ],
    moodTags: ["liberated", "resolved", "established", "peaceful"],
  },
  {
    id: "4.42",
    chapter: 4,
    verse: 42,
    sanskrit:
      "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः | छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ||",
    transliteration:
      "tasmād ajñāna-sambhūtaṁ hṛt-sthaṁ jñānāsinātmanaḥ | chittvainaṁ saṁśayaṁ yogam ātiṣṭhottṣṭha bhārata ||",
    english:
      "Therefore the doubts which have arisen in your heart out of ignorance should be slashed by the weapon of knowledge. Armed with yoga, O Bharata, stand and fight.",
    hindi:
      "इसलिए हे भारत! हृदय में स्थित इस अज्ञानजनित संशय को ज्ञानरूपी तलवार से काटकर योग में स्थित हो जाओ और युद्ध के लिए उठ खड़े हो।",
    meaning:
      "The closing command of Chapter 4 — cut the doubt in your heart with the sword of knowledge! Then stand in yoga and fight. This unites the entire chapter: knowledge is the weapon, action is the duty, and yoga is the foundation.",
    keywords: [
      "doubt",
      "knowledge",
      "sword",
      "action",
      "fight",
      "arise",
      "yoga",
    ],
    moodTags: ["empowered", "determined", "arising", "resolved", "warrior"],
  },
];
