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

export const GITA_VERSES_CH5_6: GitaVerse[] = [
  // ==================== CHAPTER 5: Karma-Sannyasa Yoga ====================
  {
    id: "5.1",
    chapter: 5,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच | सन्न्यासं कर्मणां कृष्ण पुनर्योगं च शंससि | यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् ||",
    transliteration:
      "arjuna uvāca | sannyāsaṃ karmaṇāṃ kṛṣṇa punar yogaṃ ca śaṃsasi | yac chreya etayor ekaṃ tan me brūhi suniścitam ||",
    english:
      "Arjuna said: O Krishna, you praise renunciation of actions and also yoga of action. Tell me with certainty which one of these two is better.",
    hindi:
      "अर्जुन बोले: हे कृष्ण! आप कर्मों के संन्यास की और फिर कर्मयोग की प्रशंसा करते हैं। इन दोनों में जो निश्चित रूप से श्रेयस्कर हो, वह मुझे बताइए।",
    meaning:
      "Arjuna seeks clarity from Krishna about whether renunciation or action is the superior path, expressing genuine confusion about two seemingly contradictory teachings.",
    keywords: ["renunciation", "karma yoga", "action", "sannyasa", "clarity"],
    moodTags: ["confused", "seeking guidance", "curious"],
  },
  {
    id: "5.2",
    chapter: 5,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच | सन्न्यासः कर्मयोगश्च निःश्रेयसकरावुभौ | तयोस्तु कर्मसन्न्यासात्कर्मयोगो विशिष्यते ||",
    transliteration:
      "śrī bhagavān uvāca | sannyāsaḥ karma-yogaś ca niḥśreyasa-karāv ubhau | tayos tu karma-sannyāsāt karma-yogo viśiṣyate ||",
    english:
      "The Supreme Lord said: Both renunciation and karma yoga lead to the highest good. But of the two, karma yoga is superior to renunciation of action.",
    hindi:
      "श्रीभगवान बोले: संन्यास और कर्मयोग दोनों ही परम श्रेय को देने वाले हैं। परन्तु दोनों में कर्म-संन्यास से कर्मयोग श्रेष्ठ है।",
    meaning:
      "Krishna clarifies that both paths lead to liberation, but active karma yoga — doing one's duty without attachment — is superior to mere renunciation for most people.",
    keywords: [
      "karma yoga",
      "renunciation",
      "superiority",
      "liberation",
      "action",
    ],
    moodTags: ["guidance", "clarity", "teaching"],
  },
  {
    id: "5.3",
    chapter: 5,
    verse: 3,
    sanskrit:
      "सन्न्यासस्तु महाबाहो दुःखमाप्तुमयोगतः | योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति ||",
    transliteration:
      "sannyāsas tu mahā-bāho duḥkham āptum ayogataḥ | yoga-yukto munir brahma na cireṇādhigacchati ||",
    english:
      "O mighty-armed Arjuna, renunciation without yoga is painful to achieve. But the sage devoted to yoga reaches Brahman quickly.",
    hindi:
      "हे महाबाहो! योग के बिना संन्यास प्राप्त करना कठिन है। परन्तु योग में स्थित मुनि शीघ्र ही ब्रह्म को प्राप्त हो जाता है।",
    meaning:
      "True renunciation is impossible without the discipline of yoga. The yogi who acts without attachment swiftly attains the Absolute.",
    keywords: ["yoga", "brahman", "renunciation", "sage", "swift attainment"],
    moodTags: ["hopeful", "determined", "spiritual aspiration"],
  },
  {
    id: "5.4",
    chapter: 5,
    verse: 4,
    sanskrit:
      "सांख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः | एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम् ||",
    transliteration:
      "sāṅkhya-yogau pṛthag bālāḥ pravadanti na paṇḍitāḥ | ekam apy āsthitaḥ samyag ubhayor vindate phalam ||",
    english:
      "Only the ignorant speak of Sankhya (knowledge) and yoga as different. The wise know that one who is properly established in either obtains the fruit of both.",
    hindi:
      "सांख्य और योग को पृथक मानने वाले अज्ञानी हैं, न कि पण्डित। दोनों में से किसी एक में भी भली-भाँति स्थित होने पर दोनों का फल मिलता है।",
    meaning:
      "The distinction between the path of knowledge and the path of action is made only by the uninformed. True wisdom unifies both paths.",
    keywords: ["sankhya", "yoga", "wisdom", "unity", "knowledge"],
    moodTags: ["intellectual", "wisdom", "understanding"],
  },
  {
    id: "5.5",
    chapter: 5,
    verse: 5,
    sanskrit:
      "यत्सांख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते | एकं सांख्यं च योगं च यः पश्यति स पश्यति ||",
    transliteration:
      "yat sāṅkhyaiḥ prāpyate sthānaṃ tad yogair api gamyate | ekaṃ sāṅkhyaṃ ca yogaṃ ca yaḥ paśyati sa paśyati ||",
    english:
      "The state reached by followers of Sankhya is also reached by followers of yoga. One who sees Sankhya and yoga as one truly sees.",
    hindi:
      "सांख्य योग से जो स्थान प्राप्त होता है, वही कर्मयोग से भी प्राप्त होता है। जो सांख्य और योग को एक देखता है, वही सच्चा द्रष्टा है।",
    meaning:
      "The ultimate destination is the same whether one follows the path of knowledge or the path of action. True vision perceives their unity.",
    keywords: ["unity", "vision", "sankhya", "yoga", "destination"],
    moodTags: ["enlightened", "wise", "peaceful"],
  },
  {
    id: "5.6",
    chapter: 5,
    verse: 6,
    sanskrit:
      "सन्न्यासस्तु महाबाहो दुःखमाप्तुमयोगतः | योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति ||",
    transliteration:
      "sannyāsas tu mahā-bāho duḥkham āptum ayogataḥ | yoga-yukto munir brahma na cireṇādhigacchati ||",
    english:
      "But renunciation, O mighty-armed Arjuna, is difficult to attain without yoga. A sage endowed with yoga quickly attains Brahman.",
    hindi:
      "हे महाबाहो! योग के बिना संन्यास कठिन है। परन्तु योगयुक्त मुनि शीघ्र ही ब्रह्म को प्राप्त होता है।",
    meaning:
      "Without the practice of yoga, mere renunciation remains painful and fruitless. The yogi reaches the supreme state swiftly through dedicated practice.",
    keywords: ["yoga", "renunciation", "brahman", "swift", "practice"],
    moodTags: ["determined", "focused", "spiritual"],
  },
  {
    id: "5.7",
    chapter: 5,
    verse: 7,
    sanskrit:
      "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः | सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते ||",
    transliteration:
      "yoga-yukto viśuddhātmā vijitātmā jitendriyaḥ | sarva-bhūtātma-bhūtātmā kurvann api na lipyate ||",
    english:
      "One who is devoted to yoga, who is pure-souled, who has mastered the self and senses, who sees the Self in all beings — though acting, is not tainted.",
    hindi:
      "योगयुक्त, शुद्ध आत्मा, विजितात्मा, जितेन्द्रिय और समस्त प्राणियों की आत्मा को अपनी आत्मा रूप समझने वाला, कर्म करते हुए भी लिप्त नहीं होता।",
    meaning:
      "The true yogi who has purified the soul, conquered the senses, and sees the divine Self in all beings remains untouched by karma even while acting.",
    keywords: [
      "purity",
      "self-mastery",
      "non-attachment",
      "unity",
      "liberation",
    ],
    moodTags: ["pure", "liberated", "equanimous"],
  },
  {
    id: "5.8",
    chapter: 5,
    verse: 8,
    sanskrit:
      "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् | पश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन् ||",
    transliteration:
      "naiva kiñcit karomīti yukto manyeta tattva-vit | paśyañ śṛṇvan spṛśañ jighrann aśnan gacchañ svapañ śvasan ||",
    english:
      "One who knows the truth thinks 'I do nothing at all' — while seeing, hearing, touching, smelling, eating, walking, sleeping, breathing...",
    hindi:
      "तत्त्व को जानने वाला योगी देखते, सुनते, स्पर्श करते, सूँघते, खाते, चलते, सोते, श्वास लेते हुए भी यही मानता है कि मैं कुछ भी नहीं करता।",
    meaning:
      "The enlightened one understands that all actions are performed by the senses and body, not by the eternal Self. This is the vision of non-doership.",
    keywords: ["non-doership", "truth", "senses", "action", "self-knowledge"],
    moodTags: ["enlightened", "detached", "witnessing"],
  },
  {
    id: "5.9",
    chapter: 5,
    verse: 9,
    sanskrit:
      "प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि | इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् ||",
    transliteration:
      "pralapan visṛjan gṛhṇann unmiṣan nimiṣann api | indriyāṇīndriyārtheṣu vartanta iti dhārayan ||",
    english:
      "...speaking, letting go, grasping, opening and closing the eyes — always knowing that the senses are engaged with their objects.",
    hindi:
      "बोलते, त्यागते, ग्रहण करते, आँखें खोलते-बंद करते हुए भी यही समझता है कि इन्द्रियाँ अपने विषयों में लगी हैं।",
    meaning:
      "Even in all activities of daily life, the wise person maintains the awareness that only the senses interact with their objects — the Self remains untouched.",
    keywords: ["senses", "awareness", "detachment", "witness", "daily life"],
    moodTags: ["mindful", "detached", "aware"],
  },
  {
    id: "5.10",
    chapter: 5,
    verse: 10,
    sanskrit:
      "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः | लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ||",
    transliteration:
      "brahmaṇy ādhāya karmāṇi saṅgaṃ tyaktvā karoti yaḥ | lipyate na sa pāpena padma-patram ivāmbhasā ||",
    english:
      "One who performs actions by offering them to Brahman, abandoning attachment, is not tainted by sin — like a lotus leaf untouched by water.",
    hindi:
      "जो ब्रह्म में आसक्ति त्याग कर कर्म करता है, वह पाप से वैसे ही नहीं लिप्त होता जैसे जल से कमल का पत्ता।",
    meaning:
      "The lotus leaf metaphor beautifully illustrates how the karma yogi remains pure and unaffected by sin, acting fully in the world while offering all to the Divine.",
    keywords: ["lotus", "detachment", "purity", "offering", "brahman"],
    moodTags: ["pure", "inspired", "devoted"],
  },
  {
    id: "5.11",
    chapter: 5,
    verse: 11,
    sanskrit:
      "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि | योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये ||",
    transliteration:
      "kāyena manasā buddhyā kevalair indriyair api | yoginaḥ karma kurvanti saṅgaṃ tyaktvātma-śuddhaye ||",
    english:
      "Yogis perform action with body, mind, intellect, and even the senses — abandoning attachment — for the purification of the self.",
    hindi:
      "योगी लोग आसक्ति त्याग कर, आत्म-शुद्धि के लिए शरीर, मन, बुद्धि और इन्द्रियों से भी कर्म करते हैं।",
    meaning:
      "The yogi uses all instruments — body, mind, intellect, senses — as tools for action, but without attachment, making every action a means of purification.",
    keywords: ["purification", "yoga", "action", "detachment", "self"],
    moodTags: ["disciplined", "purifying", "focused"],
  },
  {
    id: "5.12",
    chapter: 5,
    verse: 12,
    sanskrit:
      "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम् | अयुक्तः कामकारेण फले सक्तो निबध्यते ||",
    transliteration:
      "yuktaḥ karma-phalaṃ tyaktvā śāntim āpnoti naiṣṭhikīm | ayuktaḥ kāma-kāreṇa phale sakto nibadhyate ||",
    english:
      "The disciplined yogi, abandoning the fruits of action, attains abiding peace. The undisciplined one, driven by desire and attached to results, is bound.",
    hindi:
      "योगी कर्मफल त्याग कर शाश्वत शान्ति प्राप्त करता है। परन्तु अयोगी, काम से प्रेरित होकर फल में आसक्त, बंध जाता है।",
    meaning:
      "The key distinction between liberation and bondage lies in attachment to results. Surrender the fruit of action and you find lasting peace.",
    keywords: ["peace", "fruit of action", "bondage", "desire", "liberation"],
    moodTags: ["peaceful", "liberated", "content"],
  },
  {
    id: "5.13",
    chapter: 5,
    verse: 13,
    sanskrit:
      "सर्वकर्माणि मनसा सन्न्यस्यास्ते सुखं वशी | नवद्वारे पुरे देही नैव कुर्वन्न कारयन् ||",
    transliteration:
      "sarva-karmāṇi manasā sannyasyāste sukhaṃ vaśī | nava-dvāre pure dehī naiva kurvan na kārayan ||",
    english:
      "The one who has self-control, mentally renouncing all actions, dwells happily in the city of nine gates — neither acting nor causing action.",
    hindi:
      "संयमी पुरुष सब कर्मों को मन से त्याग कर, नौ द्वार वाली इस देह-नगरी में सुखपूर्वक रहता है — न कर्म करता है, न कराता है।",
    meaning:
      "The body is described as a city of nine gates (two eyes, two ears, two nostrils, mouth, and two lower openings). The self-realized soul dwells peacefully within, untouched by actions.",
    keywords: ["nine gates", "body", "renunciation", "self-control", "peace"],
    moodTags: ["peaceful", "withdrawn", "contemplative"],
  },
  {
    id: "5.14",
    chapter: 5,
    verse: 14,
    sanskrit:
      "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः | न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते ||",
    transliteration:
      "na kartṛtvaṃ na karmāṇi lokasya sṛjati prabhuḥ | na karma-phala-saṃyogaṃ svabhāvas tu pravartate ||",
    english:
      "The Lord neither creates the sense of doership nor actions for people, nor the union with the fruits of action — it is nature that acts.",
    hindi:
      "परमेश्वर न तो मनुष्यों के लिए कर्तृत्व की भावना उत्पन्न करता है, न कर्म, और न ही कर्मफल के साथ संयोग — स्वभाव ही इसे करता है।",
    meaning:
      "God does not impose agency or karma upon beings — it is the natural disposition (svabhava) of the individual that creates the illusion of doership.",
    keywords: ["doership", "god", "nature", "svabhava", "free will"],
    moodTags: ["philosophical", "contemplative", "surrender"],
  },
  {
    id: "5.15",
    chapter: 5,
    verse: 15,
    sanskrit:
      "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः | अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः ||",
    transliteration:
      "nādatte kasyacit pāpaṃ na caiva sukṛtaṃ vibhuḥ | ajñānenāvṛtaṃ jñānaṃ tena muhyanti jantavaḥ ||",
    english:
      "The all-pervading Lord takes neither the sin nor the merit of anyone. Knowledge is enveloped by ignorance — that is why beings are deluded.",
    hindi:
      "सर्वव्यापी परमात्मा न किसी का पाप ग्रहण करता है, न पुण्य। अज्ञान से ज्ञान आवृत रहता है, इसलिए जीव मोहित होते हैं।",
    meaning:
      "The Divine is beyond sin and merit. Human suffering arises from ignorance (avidya) which covers the light of true knowledge, causing delusion.",
    keywords: ["ignorance", "knowledge", "delusion", "god", "liberation"],
    moodTags: ["confused", "seeking", "philosophical"],
  },
  {
    id: "5.16",
    chapter: 5,
    verse: 16,
    sanskrit:
      "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः | तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् ||",
    transliteration:
      "jñānena tu tad ajñānaṃ yeṣāṃ nāśitam ātmanaḥ | teṣām āditya-vaj jñānaṃ prakāśayati tat param ||",
    english:
      "But for those whose ignorance has been destroyed by Self-knowledge, that knowledge illumines the Supreme like the sun.",
    hindi:
      "परन्तु जिनका अज्ञान आत्मज्ञान से नष्ट हो गया है, उनका ज्ञान सूर्य की भाँति उस परम तत्त्व को प्रकाशित करता है।",
    meaning:
      "Self-knowledge acts like the sun, dispelling the darkness of ignorance and revealing the Supreme Truth in its full radiance.",
    keywords: [
      "knowledge",
      "sun",
      "illumination",
      "supreme",
      "self-realization",
    ],
    moodTags: ["enlightened", "illumined", "joyful"],
  },
  {
    id: "5.17",
    chapter: 5,
    verse: 17,
    sanskrit:
      "तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः | गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः ||",
    transliteration:
      "tad-buddhayas tad-ātmānas tan-niṣṭhās tat-parāyaṇāḥ | gacchanty apunar-āvṛttiṃ jñāna-nirdhūta-kalmaṣāḥ ||",
    english:
      "Those whose intellect is absorbed in That, whose self is that, who are established in That, who are devoted to That — they go to the state of no return, their impurities cleansed by knowledge.",
    hindi:
      "जिनकी बुद्धि उसी में लगी है, जिनकी आत्मा वही है, जो उसी में निष्ठावान और उसी के परायण हैं — ज्ञान से अपने पापों को नष्ट करके वे पुनरावृत्ति रहित स्थान को प्राप्त होते हैं।",
    meaning:
      "Those completely absorbed in the Supreme — in intellect, soul, and devotion — attain final liberation, never to return to the cycle of birth and death.",
    keywords: [
      "liberation",
      "absorption",
      "intellect",
      "devotion",
      "no return",
    ],
    moodTags: ["devoted", "liberated", "focused"],
  },
  {
    id: "5.18",
    chapter: 5,
    verse: 18,
    sanskrit:
      "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि | शुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||",
    transliteration:
      "vidyā-vinaya-sampanne brāhmaṇe gavi hastini | śuni caiva śvapāke ca paṇḍitāḥ sama-darśinaḥ ||",
    english:
      "The wise see with equal vision a learned and humble Brahmin, a cow, an elephant, a dog, and even an outcaste.",
    hindi:
      "पण्डितजन विद्या और विनय से युक्त ब्राह्मण में, गाय में, हाथी में, कुत्ते में और चाण्डाल में भी समान दृष्टि रखते हैं।",
    meaning:
      "True wisdom transcends all social distinctions. The enlightened seer perceives the same divine essence in all beings, regardless of birth, species, or status.",
    keywords: ["equal vision", "wisdom", "equality", "brahman", "all beings"],
    moodTags: ["compassionate", "wise", "equanimous"],
  },
  {
    id: "5.19",
    chapter: 5,
    verse: 19,
    sanskrit:
      "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः | निर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः ||",
    transliteration:
      "ihaiva tair jitaḥ sargo yeṣāṃ sāmye sthitaṃ manaḥ | nirdoṣaṃ hi samaṃ brahma tasmād brahmaṇi te sthitāḥ ||",
    english:
      "Even here in this world, creation is conquered by those whose mind is established in equanimity. Brahman is flawless and equal — therefore they are established in Brahman.",
    hindi:
      "जिनका मन समभाव में स्थित है, उन्होंने यहीं सृष्टि को जीत लिया है। ब्रह्म निर्दोष और समान है, इसलिए वे ब्रह्म में स्थित हैं।",
    meaning:
      "Equanimity is the key to liberation even in this lifetime. Those who see all with equal eyes are already established in Brahman — the flawless, equal Absolute.",
    keywords: ["equanimity", "brahman", "liberation", "mind", "victory"],
    moodTags: ["equanimous", "liberated", "peaceful"],
  },
  {
    id: "5.20",
    chapter: 5,
    verse: 20,
    sanskrit:
      "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् | स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः ||",
    transliteration:
      "na prahṛṣyet priyaṃ prāpya nodvijet prāpya cāpriyam | sthira-buddhir asammūḍho brahma-vid brahmaṇi sthitaḥ ||",
    english:
      "One who neither rejoices upon receiving something pleasant nor grieves upon receiving something unpleasant — with steady intellect, undeluded, knowing Brahman, is established in Brahman.",
    hindi:
      "जो प्रिय पाकर हर्षित नहीं होता और अप्रिय पाकर उद्विग्न नहीं होता, वह स्थिरबुद्धि, अमूढ़, ब्रह्म को जानने वाला ब्रह्म में स्थित है।",
    meaning:
      "The hallmark of Brahman-realization is complete equanimity — neither elated by pleasure nor distressed by pain. This steady, undeluded state is Brahman itself.",
    keywords: ["equanimity", "pleasure", "pain", "steady intellect", "brahman"],
    moodTags: ["stable", "unaffected", "wise"],
  },
  {
    id: "5.21",
    chapter: 5,
    verse: 21,
    sanskrit:
      "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम् | स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते ||",
    transliteration:
      "bāhya-sparśeṣv asaktātmā vindaty ātmani yat sukham | sa brahma-yoga-yuktātmā sukham akṣayam aśnute ||",
    english:
      "With the self unattached to external contacts, one finds the joy that is in the Self. Being united with Brahman through yoga, one enjoys imperishable bliss.",
    hindi:
      "बाहरी विषयों में अनासक्त आत्मा, आत्मा में ही जो सुख है उसे पाती है। ब्रह्मयोग से युक्त वह अविनाशी सुख भोगती है।",
    meaning:
      "True happiness is not found in external objects but within the Self. When the soul is united with Brahman, it experiences an imperishable bliss that no external circumstance can disturb.",
    keywords: ["inner joy", "detachment", "brahman", "bliss", "imperishable"],
    moodTags: ["blissful", "content", "inward"],
  },
  {
    id: "5.22",
    chapter: 5,
    verse: 22,
    sanskrit:
      "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते | आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः ||",
    transliteration:
      "ye hi saṃsparśa-jā bhogā duḥkha-yonaya eva te | ādy-antavantaḥ kaunteya na teṣu ramate budhaḥ ||",
    english:
      "O Arjuna, the pleasures that arise from sensory contact are verily sources of suffering. They have a beginning and an end — the wise do not delight in them.",
    hindi:
      "हे कौन्तेय! जो भोग स्पर्श से उत्पन्न होते हैं, वे दुःख के ही कारण हैं। उनका आदि और अन्त है — बुद्धिमान उनमें रमण नहीं करता।",
    meaning:
      "Sensory pleasures are transient and ultimately lead to sorrow. The wise person recognizes this impermanence and does not become attached to fleeting experiences.",
    keywords: [
      "sensory pleasure",
      "suffering",
      "impermanence",
      "wisdom",
      "detachment",
    ],
    moodTags: ["wise", "renouncing", "discerning"],
  },
  {
    id: "5.23",
    chapter: 5,
    verse: 23,
    sanskrit:
      "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात् | कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः ||",
    transliteration:
      "śaknotīhaiva yaḥ soḍhuṃ prāk śarīra-vimokṣaṇāt | kāma-krodhodbhavaṃ vegaṃ sa yuktaḥ sa sukhī naraḥ ||",
    english:
      "One who is able to endure, even before leaving the body, the impulse born of desire and anger — such a person is a yogi and is happy.",
    hindi:
      "जो इस शरीर को छोड़ने से पहले ही काम और क्रोध से उत्पन्न वेग को सहन कर सकता है — वही योगी है, वही सुखी है।",
    meaning:
      "True spiritual mastery is demonstrated by the ability to withstand the powerful impulses of desire and anger — and not be swept away by them.",
    keywords: ["desire", "anger", "endurance", "yoga", "happiness"],
    moodTags: ["patient", "disciplined", "victorious"],
  },
  {
    id: "5.24",
    chapter: 5,
    verse: 24,
    sanskrit:
      "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः | स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति ||",
    transliteration:
      "yo 'ntaḥ-sukho 'ntar-ārāmas tathāntar-jyotir eva yaḥ | sa yogī brahma-nirvāṇaṃ brahma-bhūto 'dhigacchati ||",
    english:
      "One whose happiness is within, whose recreation is within, whose light is within — that yogi, having become Brahman, attains the nirvana of Brahman.",
    hindi:
      "जिसका सुख अंतर में है, जिसका विनोद अंतर में है और जिसका प्रकाश अंतर में है — वह योगी ब्रह्मभूत होकर ब्रह्म-निर्वाण को प्राप्त होता है।",
    meaning:
      "The highest yogi finds all fulfillment within — happiness, recreation, and illumination all spring from the inner Self. Such a one has already become Brahman.",
    keywords: [
      "inner happiness",
      "brahman",
      "nirvana",
      "inner light",
      "self-sufficiency",
    ],
    moodTags: ["blissful", "self-sufficient", "illumined"],
  },
  {
    id: "5.25",
    chapter: 5,
    verse: 25,
    sanskrit:
      "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः | छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः ||",
    transliteration:
      "labhante brahma-nirvāṇam ṛṣayaḥ kṣīṇa-kalmaṣāḥ | chinna-dvaidhā yatātmānaḥ sarva-bhūta-hite ratāḥ ||",
    english:
      "The seers who are free from sin, whose doubts are dispelled, who are self-controlled, and who rejoice in the welfare of all beings — attain the nirvana of Brahman.",
    hindi:
      "जिनके पाप नष्ट हो गए हैं, जिनके द्वन्द्व छिन्न हो गए हैं, जो आत्मसंयमी हैं और सब प्राणियों के हित में रत हैं — वे ऋषि ब्रह्म-निर्वाण पाते हैं।",
    meaning:
      "Liberation is attained by those purified of sin, free from doubt, self-controlled, and dedicated to the welfare of all beings — compassion and self-mastery together open the door.",
    keywords: ["liberation", "compassion", "self-control", "brahman", "seers"],
    moodTags: ["compassionate", "purified", "liberated"],
  },
  {
    id: "5.26",
    chapter: 5,
    verse: 26,
    sanskrit:
      "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् | अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् ||",
    transliteration:
      "kāma-krodha-viyuktānāṃ yatīnāṃ yata-cetasām | abhito brahma-nirvāṇaṃ vartate viditātmanām ||",
    english:
      "For the ascetics who are free from desire and anger, who have controlled the mind, and who have known the Self — Brahman-nirvana exists on all sides.",
    hindi:
      "काम और क्रोध से मुक्त, मन को संयमित करने वाले और आत्मा को जानने वाले यतियों के लिए ब्रह्म-निर्वाण सब ओर विद्यमान है।",
    meaning:
      "For those who have conquered desire and anger and know the Self, Brahman-nirvana is not a distant goal — it surrounds them on all sides, always present.",
    keywords: ["freedom", "desire", "anger", "self-knowledge", "nirvana"],
    moodTags: ["free", "peaceful", "enlightened"],
  },
  {
    id: "5.27",
    chapter: 5,
    verse: 27,
    sanskrit:
      "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः | प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ ||",
    transliteration:
      "sparśān kṛtvā bahir bāhyāṃś cakṣuś caivāntare bhruvoḥ | prāṇāpānau samau kṛtvā nāsābhyantara-cāriṇau ||",
    english:
      "Shutting out external objects, fixing the gaze between the eyebrows, equalizing the outgoing and incoming breaths moving within the nostrils...",
    hindi:
      "बाहरी विषयों को बाहर करके, दृष्टि को भृकुटियों के बीच स्थिर करके, नासिका के भीतर चलने वाले प्राण और अपान को सम करके...",
    meaning:
      "Krishna describes the meditative technique of pratyahara and pranayama — withdrawing from outer objects, fixing the gaze at the ajna chakra, and balancing the breath as preparation for deep meditation.",
    keywords: [
      "meditation",
      "pranayama",
      "pratyahara",
      "breath",
      "yoga technique",
    ],
    moodTags: ["meditative", "focused", "inward"],
  },
  {
    id: "5.28",
    chapter: 5,
    verse: 28,
    sanskrit:
      "यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः | विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः ||",
    transliteration:
      "yatendriya-mano-buddhir munir mokṣa-parāyaṇaḥ | vigatecchā-bhaya-krodho yaḥ sadā mukta eva saḥ ||",
    english:
      "The sage who has controlled the senses, mind, and intellect, who is devoted to liberation, who is free from desire, fear, and anger — such a one is ever liberated.",
    hindi:
      "जिसकी इन्द्रियाँ, मन और बुद्धि संयमित हैं, जो मोक्ष में परायण है, जो इच्छा, भय और क्रोध से रहित है — वह मुनि सदा मुक्त ही है।",
    meaning:
      "Liberation is not just a future goal — the sage who has conquered the senses and freed the mind from desire, fear, and anger is liberated here and now, in this very life.",
    keywords: ["liberation", "senses", "mind", "freedom", "fear"],
    moodTags: ["liberated", "fearless", "peaceful"],
  },
  {
    id: "5.29",
    chapter: 5,
    verse: 29,
    sanskrit:
      "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् | सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति ||",
    transliteration:
      "bhoktāraṃ yajña-tapasāṃ sarva-loka-maheśvaram | suhṛdaṃ sarva-bhūtānāṃ jñātvā māṃ śāntim ṛcchati ||",
    english:
      "Knowing Me as the enjoyer of sacrifices and austerities, the great Lord of all worlds, and the dear friend of all beings — one attains peace.",
    hindi:
      "मुझे यज्ञ और तप का भोक्ता, समस्त लोकों का महेश्वर और समस्त प्राणियों का सुहृद जानकर, मनुष्य शान्ति को प्राप्त होता है।",
    meaning:
      "The culmination of Chapter 5: true peace comes from knowing Krishna as the Supreme Lord — the enjoyer of all sacrifices, the ruler of all worlds, and the loving friend of every soul.",
    keywords: ["peace", "krishna", "lord", "friend", "sacrifice"],
    moodTags: ["peaceful", "devoted", "surrendered"],
  },

  // ==================== CHAPTER 6: Dhyana Yoga (Meditation) ====================
  {
    id: "6.1",
    chapter: 6,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | अनाश्रितः कर्मफलं कार्यं कर्म करोति यः | स सन्न्यासी च योगी च न निरग्निर्न चाक्रियः ||",
    transliteration:
      "śrī bhagavān uvāca | anāśritaḥ karma-phalaṃ kāryaṃ karma karoti yaḥ | sa sannyāsī ca yogī ca na niragnir na cākriyaḥ ||",
    english:
      "The Supreme Lord said: One who performs prescribed duties without depending on the fruits of action is both a sannyasi and a yogi — not one who maintains no fire, nor one who does no action.",
    hindi:
      "श्रीभगवान बोले: जो कर्मफल का आश्रय लिए बिना कर्तव्य कर्म करता है — वही संन्यासी और योगी है। अग्निरहित या क्रियारहित नहीं।",
    meaning:
      "True sannyasa and yoga are defined not by external renunciation (no fire, no action) but by the inner attitude of acting without attachment to results.",
    keywords: ["sannyasa", "yoga", "action", "detachment", "definition"],
    moodTags: ["clarifying", "teaching", "practical"],
  },
  {
    id: "6.2",
    chapter: 6,
    verse: 2,
    sanskrit:
      "यं सन्न्यासमिति प्राहुर्योगं तं विद्धि पाण्डव | न ह्यसन्न्यस्तसंकल्पो योगी भवति कश्चन ||",
    transliteration:
      "yaṃ sannyāsam iti prāhur yogaṃ taṃ viddhi pāṇḍava | na hy asannyasta-saṃkalpo yogī bhavati kaścana ||",
    english:
      "O Arjuna, know that what is called renunciation is also yoga — for no one becomes a yogi without renouncing selfish motives.",
    hindi:
      "हे पाण्डव! जिसे संन्यास कहते हैं, उसे ही योग जानो। संकल्प का त्याग किए बिना कोई योगी नहीं बन सकता।",
    meaning:
      "Sannyasa and yoga are two names for the same truth — both require the renunciation of selfish motives (sankalpa). Inner renunciation is the real qualification for yoga.",
    keywords: ["sannyasa", "yoga", "selfish motives", "renunciation", "unity"],
    moodTags: ["clarifying", "insightful", "teaching"],
  },
  {
    id: "6.3",
    chapter: 6,
    verse: 3,
    sanskrit: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते | योगारूढस्य तस्यैव शमः कारणमुच्यते ||",
    transliteration:
      "ārurukṣor muner yogaṃ karma kāraṇam ucyate | yogārūḍhasya tasyaiva śamaḥ kāraṇam ucyate ||",
    english:
      "For the sage who wishes to ascend to yoga, action is said to be the means. For the same sage who has already ascended to yoga, stillness is said to be the means.",
    hindi:
      "योग पर चढ़ने की इच्छा करने वाले मुनि के लिए कर्म साधन है। योगारूढ़ होने पर उसी के लिए शम (शान्ति) साधन है।",
    meaning:
      "The spiritual path has two distinct stages: the ascending stage where action is the means, and the established stage where inner stillness (shama) becomes the primary practice.",
    keywords: [
      "stages of yoga",
      "action",
      "stillness",
      "ascent",
      "progression",
    ],
    moodTags: ["progressive", "methodical", "teaching"],
  },
  {
    id: "6.4",
    chapter: 6,
    verse: 4,
    sanskrit:
      "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते | सर्वसंकल्पसन्न्यासी योगारूढस्तदोच्यते ||",
    transliteration:
      "yadā hi nendriyārtheṣu na karmasv anuṣajjate | sarva-saṃkalpa-sannyāsī yogārūḍhas tadocyate ||",
    english:
      "When one is neither attached to sense objects nor to actions, and has renounced all selfish intentions — that person is said to have ascended to yoga.",
    hindi:
      "जब वह न इन्द्रिय विषयों में और न कर्मों में आसक्त होता है, और सब संकल्पों का संन्यासी हो जाता है — तब वह योगारूढ़ कहलाता है।",
    meaning:
      "The definition of one established in yoga: no attachment to sense pleasures, no clinging to actions, and complete renunciation of all selfish intentions.",
    keywords: [
      "yoga establishment",
      "non-attachment",
      "renunciation",
      "intentions",
      "senses",
    ],
    moodTags: ["established", "free", "advanced"],
  },
  {
    id: "6.5",
    chapter: 6,
    verse: 5,
    sanskrit:
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् | आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
    transliteration:
      "uddhared ātmanātmānaṃ nātmānam avasādayet | ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
    english:
      "One should lift oneself by one's own self and not degrade oneself. For the self alone is the friend of the self, and the self alone is the enemy of the self.",
    hindi:
      "अपने आप से अपना उद्धार करो, अपने आप को नीचे मत गिराओ। आत्मा ही आत्मा का बन्धु है और आत्मा ही आत्मा का शत्रु है।",
    meaning:
      "One of the most empowering verses in the Gita — you are your own savior and your own destroyer. The choice to rise or fall rests entirely within you.",
    keywords: [
      "self-help",
      "self-enemy",
      "self-friend",
      "upliftment",
      "responsibility",
    ],
    moodTags: ["empowered", "self-reliant", "motivated"],
  },
  {
    id: "6.6",
    chapter: 6,
    verse: 6,
    sanskrit:
      "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः | अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ||",
    transliteration:
      "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ | anātmanas tu śatrutve vartetātmaiva śatru-vat ||",
    english:
      "For one who has conquered the self by the self, the self is a friend. But for one who has not conquered the self, the self acts as an enemy.",
    hindi:
      "जिसने अपने आप को अपने आप से जीत लिया है, उसके लिए आत्मा बन्धु है। परन्तु जो खुद को नहीं जीत पाया, उसके लिए आत्मा शत्रु की भाँति वर्तती है।",
    meaning:
      "The self-conquered person finds the Self as a supportive friend on the spiritual path. The uncontrolled person is sabotaged by their own untamed impulses and tendencies.",
    keywords: ["self-conquest", "friend", "enemy", "inner victory", "control"],
    moodTags: ["victorious", "determined", "self-aware"],
  },
  {
    id: "6.7",
    chapter: 6,
    verse: 7,
    sanskrit:
      "जितात्मनः प्रशान्तस्य परमात्मा समाहितः | शीतोष्णसुखदुःखेषु तथा मानापमानयोः ||",
    transliteration:
      "jitātmanaḥ praśāntasya paramātmā samāhitaḥ | śītoṣṇa-sukha-duḥkheṣu tathā māna-apamānayoḥ ||",
    english:
      "For one who has conquered the self and is peaceful, the Supreme Self is steadfast — in cold and heat, pleasure and pain, honor and dishonor.",
    hindi:
      "जिसने आत्मा को जीत लिया है और जो शान्त है, उसकी परमात्मा में समाधि है — सर्दी-गर्मी, सुख-दुःख और मान-अपमान में।",
    meaning:
      "The self-mastered, peaceful soul finds the Supreme Self constant and unshakeable through all dualities of life — temperature extremes, pleasure-pain, praise-insult.",
    keywords: [
      "equanimity",
      "supreme self",
      "dualities",
      "peace",
      "self-mastery",
    ],
    moodTags: ["peaceful", "equanimous", "unshakeable"],
  },
  {
    id: "6.8",
    chapter: 6,
    verse: 8,
    sanskrit:
      "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः | युक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः ||",
    transliteration:
      "jñāna-vijñāna-tṛptātmā kūṭa-stho vijitendriyaḥ | yukta ity ucyate yogī sama-loṣṭāśma-kāñcanaḥ ||",
    english:
      "A yogi who is satisfied with knowledge and wisdom, who is immovable, who has conquered the senses, and who regards a clod, a stone, and gold as equal — is said to be united (in yoga).",
    hindi:
      "जो ज्ञान-विज्ञान से तृप्त है, जो कूटस्थ है, जिसने इन्द्रियाँ जीत ली हैं और जो मिट्टी, पत्थर और सोने को समान देखता है — वह योगी युक्त कहलाता है।",
    meaning:
      "The true yogi is satisfied with inner spiritual knowledge, remains immovable as a mountain, has mastered the senses, and perceives equal value in dirt, stone, and gold — a sign of perfect non-attachment.",
    keywords: [
      "knowledge",
      "wisdom",
      "immovable",
      "equal vision",
      "non-attachment",
    ],
    moodTags: ["content", "equanimous", "stable"],
  },
  {
    id: "6.9",
    chapter: 6,
    verse: 9,
    sanskrit: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु | साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ||",
    transliteration:
      "suhṛn-mitrāry-udāsīna-madhyastha-dveṣya-bandhuṣu | sādhuṣv api ca pāpeṣu sama-buddhir viśiṣyate ||",
    english:
      "One who regards with equal eye — well-wishers, friends, enemies, the indifferent, the mediators, the hateful, relatives, the virtuous, and the sinful — is distinguished.",
    hindi:
      "जो सुहृद, मित्र, शत्रु, उदासीन, मध्यस्थ, द्वेष्य और बन्धुओं में, साधुओं में और पापियों में भी समबुद्धि रखता है — वह विशिष्ट है।",
    meaning:
      "Supreme spiritual maturity is demonstrated when one can look upon all categories of people — friends, enemies, neutrals, virtuous, sinful — with the same equanimous wisdom.",
    keywords: ["equal vision", "friends", "enemies", "equanimity", "wisdom"],
    moodTags: ["wise", "compassionate", "beyond judgment"],
  },
  {
    id: "6.10",
    chapter: 6,
    verse: 10,
    sanskrit:
      "योगी युञ्जीत सततमात्मानं रहसि स्थितः | एकाकी यतचित्तात्मा निराशीरपरिग्रहः ||",
    transliteration:
      "yogī yuñjīta satatam ātmānaṃ rahasi sthitaḥ | ekākī yata-cittātmā nirāśīr aparigrahaḥ ||",
    english:
      "Let the yogi constantly engage the self in yoga, staying in a secluded place, alone, with controlled mind and self, free from desire and possessiveness.",
    hindi:
      "योगी सदा एकान्त में रहकर, अकेला, मन और आत्मा को संयमित करके, इच्छा और परिग्रह से रहित होकर अपने आप को योग में लगाए।",
    meaning:
      "Krishna gives practical advice for meditation: seek solitude, practice alone, master the mind and body, and renounce desire and possessiveness as preconditions for deep yoga.",
    keywords: [
      "solitude",
      "meditation",
      "non-possessiveness",
      "controlled mind",
      "practice",
    ],
    moodTags: ["disciplined", "solitary", "focused"],
  },
  {
    id: "6.11",
    chapter: 6,
    verse: 11,
    sanskrit:
      "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः | नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् ||",
    transliteration:
      "śucau deśe pratiṣṭhāpya sthiram āsanam ātmanaḥ | nāty-ucchritaṃ nāti-nīcaṃ cailājina-kuśottaram ||",
    english:
      "In a clean place, establish a firm seat — neither too high nor too low — covered with cloth, deer skin, and kusha grass.",
    hindi:
      "शुद्ध स्थान में अपना स्थिर आसन स्थापित करे — न बहुत ऊँचा, न बहुत नीचा — जो कपड़े, मृगचर्म और कुश घास से ढका हो।",
    meaning:
      "Krishna gives specific instructions for setting up a meditation seat — clean environment, proper height, and specific natural materials that create a grounded and sacred atmosphere.",
    keywords: [
      "meditation seat",
      "asana",
      "clean place",
      "preparation",
      "kusha",
    ],
    moodTags: ["preparatory", "practical", "ritualistic"],
  },
  {
    id: "6.12",
    chapter: 6,
    verse: 12,
    sanskrit:
      "तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः | उपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये ||",
    transliteration:
      "tatraikāgraṃ manaḥ kṛtvā yata-cittendiriya-kriyaḥ | upaviśyāsane yuñjyād yogam ātma-viśuddhaye ||",
    english:
      "Sitting there on that seat, with mind focused on a single point, controlling the activities of mind and senses, let one practice yoga for the purification of the self.",
    hindi:
      "वहाँ उस आसन पर बैठकर, मन को एकाग्र करके, मन और इन्द्रियों की क्रियाओं को संयमित करते हुए, आत्मशुद्धि के लिए योग का अभ्यास करे।",
    meaning:
      "With the seat properly established, the yogi focuses the mind on a single point, controls the senses, and practices yoga with the pure goal of self-purification.",
    keywords: [
      "concentration",
      "single-pointed",
      "purification",
      "self",
      "practice",
    ],
    moodTags: ["focused", "disciplined", "purifying"],
  },
  {
    id: "6.13",
    chapter: 6,
    verse: 13,
    sanskrit:
      "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः | सम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् ||",
    transliteration:
      "samaṃ kāya-śiro-grīvaṃ dhārayan acalaṃ sthiraḥ | samprekṣya nāsikāgraṃ svaṃ diśaś cānvalokayan ||",
    english:
      "Holding the body, head, and neck erect and still, gazing at the tip of the nose without looking in any direction...",
    hindi:
      "शरीर, सिर और गर्दन को सीधा, स्थिर और अचल रखते हुए, दिशाओं में न देखते हुए, अपनी नासिका के अग्रभाग को देखते हुए...",
    meaning:
      "The physical posture of meditation: spine erect, head and neck aligned, gaze fixed inward at the nose tip — creating the physical stillness that supports mental stillness.",
    keywords: ["posture", "spine", "gaze", "stillness", "meditation technique"],
    moodTags: ["meditative", "disciplined", "still"],
  },
  {
    id: "6.14",
    chapter: 6,
    verse: 14,
    sanskrit:
      "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः | मनः संयम्य मच्चित्तो युक्त आसीत मत्परः ||",
    transliteration:
      "praśāntātmā vigata-bhīr brahmacāri-vrate sthitaḥ | manaḥ saṃyamya mac-citto yukta āsīta mat-paraḥ ||",
    english:
      "...with peaceful self, fearless, firm in the vow of brahmacharya, controlling the mind, fixing thoughts on Me, one should sit in yoga with Me as the supreme goal.",
    hindi:
      "...शान्त आत्मा, भयरहित, ब्रह्मचर्य व्रत में स्थित, मन को संयमित करके, मुझमें चित्त लगाकर, मुझे ही परम लक्ष्य मानकर युक्त होकर बैठे।",
    meaning:
      "The mental qualities of the meditator: peaceful, fearless, celibate in spirit, mind controlled, and focused on Krishna as the supreme goal. This completes the instruction on meditation posture and attitude.",
    keywords: ["peace", "fearless", "brahmacharya", "krishna", "supreme goal"],
    moodTags: ["devoted", "peaceful", "focused"],
  },
  {
    id: "6.15",
    chapter: 6,
    verse: 15,
    sanskrit:
      "युञ्जन्नेवं सदात्मानं योगी नियतमानसः | शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति ||",
    transliteration:
      "yuñjann evaṃ sadātmānaṃ yogī niyata-mānasaḥ | śāntiṃ nirvāṇa-paramāṃ mat-saṃsthām adhigacchati ||",
    english:
      "Thus, always engaging the self in yoga, with disciplined mind, the yogi attains the peace that culminates in nirvana — dwelling in Me.",
    hindi:
      "इस प्रकार सदा आत्मा को योग में लगाते हुए, नियत मन वाला योगी, मुझमें निवास करने वाली निर्वाण की परम शान्ति को प्राप्त होता है।",
    meaning:
      "The fruit of sustained yoga practice: the yogi attains the supreme peace of nirvana — and this ultimate liberation is described as dwelling in Krishna himself.",
    keywords: ["nirvana", "peace", "yoga", "krishna", "liberation"],
    moodTags: ["peaceful", "liberated", "devoted"],
  },
  {
    id: "6.16",
    chapter: 6,
    verse: 16,
    sanskrit:
      "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः | न चाति स्वप्नशीलस्य जाग्रतो नैव चार्जुन ||",
    transliteration:
      "nāty-aśnatas tu yogo 'sti na caikāntam anaśnataḥ | na cāti-svapna-śīlasya jāgrato naiva cārjuna ||",
    english:
      "O Arjuna, yoga is not for one who eats too much or not at all, nor for one who sleeps too much or is always awake.",
    hindi:
      "हे अर्जुन! न अधिक खाने वाले के लिए, न बिल्कुल न खाने वाले के लिए, न अधिक सोने वाले के लिए, और न सदा जागने वाले के लिए योग सिद्ध होता है।",
    meaning:
      "Krishna emphasizes the middle path — yoga is impossible at either extreme of eating or sleeping. Balance and moderation are prerequisites for successful practice.",
    keywords: ["moderation", "eating", "sleeping", "balance", "middle path"],
    moodTags: ["practical", "balanced", "grounded"],
  },
  {
    id: "6.17",
    chapter: 6,
    verse: 17,
    sanskrit:
      "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु | युक्तस्वप्नावबोधस्य योगो भवति दुःखहा ||",
    transliteration:
      "yuktāhāra-vihārasya yukta-ceṣṭasya karmasu | yukta-svapnāvabodhasya yogo bhavati duḥkha-hā ||",
    english:
      "For one who is regulated in eating and recreation, regulated in activities, regulated in sleep and wakefulness — yoga becomes the destroyer of suffering.",
    hindi:
      "जो आहार-विहार में, कर्मों में और निद्रा-जागरण में युक्त (संतुलित) है — उसके लिए योग दुःखनाशक हो जाता है।",
    meaning:
      "The secret formula for effective yoga: balance in eating, recreation, work, sleep, and wakefulness. This balanced lifestyle makes yoga the ultimate destroyer of suffering.",
    keywords: [
      "balanced life",
      "regulation",
      "suffering",
      "yoga",
      "moderation",
    ],
    moodTags: ["balanced", "healthy", "joyful"],
  },
  {
    id: "6.18",
    chapter: 6,
    verse: 18,
    sanskrit:
      "यदा विनियतं चित्तमात्मन्येवावतिष्ठते | निःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा ||",
    transliteration:
      "yadā viniyataṃ cittam ātmany evāvatiṣṭhate | niḥspṛhaḥ sarva-kāmebhyo yukta ity ucyate tadā ||",
    english:
      "When the disciplined mind rests in the Self alone, free from longing for all desires — then one is said to be in yoga.",
    hindi:
      "जब संयमित चित्त केवल आत्मा में ही स्थित होता है, और समस्त कामनाओं से निःस्पृह होता है — तब वह युक्त (योगी) कहलाता है।",
    meaning:
      "The definition of being established in yoga: the mind rests serenely in the pure Self, undisturbed by any desire. This is the state of yoga.",
    keywords: ["mind", "self", "desireless", "yoga", "established"],
    moodTags: ["still", "desireless", "established"],
  },
  {
    id: "6.19",
    chapter: 6,
    verse: 19,
    sanskrit:
      "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता | योगिनो यतचित्तस्य युञ्जतो योगमात्मनः ||",
    transliteration:
      "yathā dīpo nivāta-stho neṅgate sopamā smṛtā | yogino yata-cittasya yuñjato yogam ātmanaḥ ||",
    english:
      "As a lamp in a windless place does not flicker — this simile is recalled for the yogi of controlled mind who practices yoga of the self.",
    hindi:
      "जैसे वायुरहित स्थान में दीपक नहीं काँपता — यह उपमा है योग का अभ्यास करने वाले उस योगी की, जिसका चित्त संयमित है।",
    meaning:
      "The lamp in a windless place is one of the most beautiful images in the Gita — the steady, unwavering flame represents the perfectly controlled mind of an accomplished yogi.",
    keywords: ["lamp", "steady", "windless", "controlled mind", "metaphor"],
    moodTags: ["still", "peaceful", "illumined"],
  },
  {
    id: "6.20",
    chapter: 6,
    verse: 20,
    sanskrit:
      "यत्रोपरमते चित्तं निरुद्धं योगसेवया | यत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति ||",
    transliteration:
      "yatroparamate cittaṃ niruddhaṃ yoga-sevayā | yatra caivātmanātmānaṃ paśyann ātmani tuṣyati ||",
    english:
      "Where the mind comes to rest, restrained by the practice of yoga, and where, seeing the Self by the Self, one is content in the Self...",
    hindi:
      "जहाँ योग के अभ्यास से निरुद्ध चित्त विराम पाता है, और जहाँ आत्मा से आत्मा को देखकर आत्मा में ही संतुष्ट होता है...",
    meaning:
      "This verse describes the experience of samadhi — where the controlled mind rests completely, and the Self beholds the Self, experiencing perfect contentment within itself.",
    keywords: ["samadhi", "rest", "self-beholding", "contentment", "yoga"],
    moodTags: ["blissful", "still", "self-absorbed"],
  },
  {
    id: "6.21",
    chapter: 6,
    verse: 21,
    sanskrit:
      "सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम् | वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः ||",
    transliteration:
      "sukham ātyantikaṃ yat tad buddhi-grāhyam atīndriyam | vetti yatra na caivāyaṃ sthitaś calati tattvataḥ ||",
    english:
      "...where one knows the boundless bliss that is grasped by the intellect and is beyond the senses, and established there, one does not stray from the truth...",
    hindi:
      "...जहाँ बुद्धि से ग्राह्य, इन्द्रियों से परे अत्यन्तिक सुख का अनुभव होता है, और जहाँ स्थित होने पर वह तत्त्व से विचलित नहीं होता...",
    meaning:
      "In samadhi, one experiences a boundless bliss that transcends the senses — it is known not through feeling but through pure intelligence. Established in this state, one never deviates from truth.",
    keywords: [
      "infinite bliss",
      "beyond senses",
      "truth",
      "samadhi",
      "intellect",
    ],
    moodTags: ["blissful", "transcendent", "stable"],
  },
  {
    id: "6.22",
    chapter: 6,
    verse: 22,
    sanskrit:
      "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः | यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते ||",
    transliteration:
      "yaṃ labdhvā cāparaṃ lābhaṃ manyate nādhikaṃ tataḥ | yasmin sthito na duḥkhena guruṇāpi vicālyate ||",
    english:
      "Having obtained which, one considers no other gain superior, and established in which, one is not shaken even by the greatest sorrow...",
    hindi:
      "जिसे पाकर उससे अधिक कोई लाभ नहीं मानता, और जिसमें स्थित होने पर बड़े से बड़े दुःख से भी नहीं डिगता...",
    meaning:
      "The fruit of yoga is incomparable — once tasted, no other achievement seems greater. Established in this state, not even the heaviest sorrow can disturb the yogi.",
    keywords: [
      "ultimate gain",
      "sorrow",
      "unshakeable",
      "yoga fruit",
      "contentment",
    ],
    moodTags: ["content", "unshakeable", "supreme"],
  },
  {
    id: "6.23",
    chapter: 6,
    verse: 23,
    sanskrit:
      "तं विद्याद्दुःखसंयोगवियोगं योगसञ्ज्ञितम् | स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा ||",
    transliteration:
      "taṃ vidyād duḥkha-saṃyoga-viyogaṃ yoga-sañjñitam | sa niścayena yoktavyo yogo 'nirviṇṇa-cetasā ||",
    english:
      "Know that state which is the disconnection from union with sorrow as yoga. This yoga should be practiced with determination and unwavering mind.",
    hindi:
      "जो दुःख के संयोग से वियोग है, उसे ही योग जानो। इस योग का अभ्यास निश्चय के साथ, अनिर्विण्ण (निराश न होने वाले) चित्त से करना चाहिए।",
    meaning:
      "Yoga is beautifully defined here as the complete disconnection from all sorrow. And the key to achieving it: determined, persistent practice without discouragement.",
    keywords: [
      "yoga definition",
      "sorrow",
      "determination",
      "practice",
      "perseverance",
    ],
    moodTags: ["determined", "hopeful", "persevering"],
  },
  {
    id: "6.24",
    chapter: 6,
    verse: 24,
    sanskrit:
      "संकल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः | मनसैवेन्द्रियग्रामं विनियम्य समन्ततः ||",
    transliteration:
      "saṃkalpa-prabhavān kāmāṃs tyaktvā sarvān aśeṣataḥ | manasaivendriya-grāmaṃ viniyamya samantataḥ ||",
    english:
      "Completely abandoning all desires born of imagination, fully restraining all senses by the mind from all sides...",
    hindi:
      "संकल्प से उत्पन्न सब कामनाओं को पूर्णतः त्याग कर, मन से ही समस्त इन्द्रियों को सब ओर से भली-भाँति वश में करके...",
    meaning:
      "The active practice of meditation begins with completely abandoning all fantasized desires and using the power of the mind to restrain every sense organ.",
    keywords: ["desires", "imagination", "senses", "restraint", "mind"],
    moodTags: ["disciplined", "renouncing", "controlled"],
  },
  {
    id: "6.25",
    chapter: 6,
    verse: 25,
    sanskrit:
      "शनैः शनैरुपरमेद्बुद्ध्या धृतिगृहीतया | आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत् ||",
    transliteration:
      "śanaiḥ śanair uparamed buddhyā dhṛti-gṛhītayā | ātma-saṃsthaṃ manaḥ kṛtvā na kiñcid api cintayet ||",
    english:
      "Gradually, step by step, one should become established in trance — with conviction-driven intellect, having made the mind rest in the Self, one should think of nothing.",
    hindi:
      "धैर्य से धारण की गई बुद्धि के द्वारा धीरे-धीरे शान्त हो जाए। मन को आत्मा में स्थित करके, किसी विषय के बारे में न सोचे।",
    meaning:
      "The method of meditation: gradually, with patient perseverance and a conviction-anchored intellect, settle the mind into the Self until no thought remains — this is samadhi.",
    keywords: [
      "gradual",
      "patience",
      "intellect",
      "samadhi",
      "thoughtlessness",
    ],
    moodTags: ["patient", "gradual", "meditative"],
  },
  {
    id: "6.26",
    chapter: 6,
    verse: 26,
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् | ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ||",
    transliteration:
      "yato yato niścarati manaś cañcalam asthiram | tatas tato niyamyaitad ātmany eva vaśaṃ nayet ||",
    english:
      "Whenever the restless, unsteady mind wanders away, bring it back from there, again and again, under the control of the Self.",
    hindi:
      "जहाँ-जहाँ चञ्चल और अस्थिर मन भटकता है, वहाँ-वहाँ से उसे रोककर, बार-बार आत्मा में ही वश में लाए।",
    meaning:
      "The practical instruction for meditation: when the mind inevitably wanders (it always does), simply and patiently return it to the Self — without frustration, again and again.",
    keywords: ["restless mind", "return", "practice", "patience", "meditation"],
    moodTags: ["patient", "persistent", "gentle"],
  },
  {
    id: "6.27",
    chapter: 6,
    verse: 27,
    sanskrit: "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् | उपैति शान्तरजसं ब्रह्मभूतमकल्मषम् ||",
    transliteration:
      "praśānta-manasaṃ hy enaṃ yoginaṃ sukham uttamam | upaiti śānta-rajasaṃ brahma-bhūtam akalmaṣam ||",
    english:
      "Supreme happiness comes to this yogi of peaceful mind, whose passion has subsided, who has become Brahman, and who is without sin.",
    hindi:
      "जिस योगी का मन शान्त है, जिसकी रजोगुण की तरंगें शान्त हो गई हैं, जो ब्रह्मभूत और निष्पाप है — उसे उत्तम सुख प्राप्त होता है।",
    meaning:
      "Supreme happiness is the natural reward of the yogi who has stilled the mind, pacified the rajasic impulses, and become pure as Brahman itself.",
    keywords: [
      "supreme happiness",
      "peaceful mind",
      "brahman",
      "purity",
      "yoga",
    ],
    moodTags: ["blissful", "purified", "peaceful"],
  },
  {
    id: "6.28",
    chapter: 6,
    verse: 28,
    sanskrit: "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः | सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते ||",
    transliteration:
      "yuñjann evaṃ sadātmānaṃ yogī vigata-kalmaṣaḥ | sukhena brahma-saṃsparśam atyantaṃ sukham aśnute ||",
    english:
      "Thus constantly engaging in yoga, the yogi who is freed from sin easily experiences the boundless happiness of contact with Brahman.",
    hindi:
      "इस प्रकार सदा आत्मा को योग में लगाने वाला, पापमुक्त योगी, सुखपूर्वक ब्रह्म-स्पर्श का अत्यन्त सुख भोगता है।",
    meaning:
      "The result of constant yoga practice and freedom from sin: effortless, boundless joy that comes from direct contact (sparsha) with Brahman — the touch of the Divine.",
    keywords: [
      "brahman contact",
      "boundless happiness",
      "freedom from sin",
      "yoga",
      "touch",
    ],
    moodTags: ["joyful", "liberated", "divine contact"],
  },
  {
    id: "6.29",
    chapter: 6,
    verse: 29,
    sanskrit:
      "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि | ईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः ||",
    transliteration:
      "sarva-bhūta-stham ātmānaṃ sarva-bhūtāni cātmani | īkṣate yoga-yuktātmā sarvatra sama-darśanaḥ ||",
    english:
      "With the self united through yoga, the yogi sees the Self in all beings and all beings in the Self — seeing equally everywhere.",
    hindi:
      "योगयुक्त आत्मा वाला योगी, समस्त प्राणियों में आत्मा को और आत्मा में समस्त प्राणियों को देखता है — सर्वत्र समान दृष्टि से।",
    meaning:
      "The pinnacle of yogic vision: seeing the Self in all beings and all beings in the Self — the experience of cosmic unity that erases the illusion of separation.",
    keywords: [
      "cosmic unity",
      "equal vision",
      "self in all",
      "yoga",
      "all in self",
    ],
    moodTags: ["universal", "compassionate", "illumined"],
  },
  {
    id: "6.30",
    chapter: 6,
    verse: 30,
    sanskrit:
      "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति | तस्याहं न प्रणश्यामि स च मे न प्रणश्यति ||",
    transliteration:
      "yo māṃ paśyati sarvatra sarvaṃ ca mayi paśyati | tasyāhaṃ na praṇaśyāmi sa ca me na praṇaśyati ||",
    english:
      "One who sees Me everywhere and sees everything in Me — I am not lost to such a one, and that one is not lost to Me.",
    hindi:
      "जो मुझे सर्वत्र देखता है और सब कुछ मुझमें देखता है — मैं उससे अदृश्य नहीं होता और वह मुझसे अदृश्य नहीं होता।",
    meaning:
      "Krishna's most intimate promise: the devotee who sees Krishna everywhere and everything in Krishna is never separated from Krishna — a bond that transcends death and time.",
    keywords: [
      "krishna vision",
      "omnipresence",
      "divine bond",
      "unity",
      "never lost",
    ],
    moodTags: ["devoted", "intimate", "beloved"],
  },
  {
    id: "6.31",
    chapter: 6,
    verse: 31,
    sanskrit:
      "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः | सर्वथा वर्तमानोऽपि स योगी मयि वर्तते ||",
    transliteration:
      "sarva-bhūta-sthitaṃ yo māṃ bhajaty ekatvam āsthitaḥ | sarvathā vartamāno 'pi sa yogī mayi vartate ||",
    english:
      "The yogi who, established in oneness, worships Me dwelling in all beings — that yogi abides in Me in all circumstances.",
    hindi:
      "जो एकत्व में स्थित होकर समस्त प्राणियों में स्थित मुझे भजता है — वह योगी सभी अवस्थाओं में मुझमें ही रहता है।",
    meaning:
      "The yogi who worships the One Self dwelling in all beings is always with Krishna — regardless of external circumstances. This is the yoga of universal love.",
    keywords: ["oneness", "worship", "all beings", "abiding", "krishna"],
    moodTags: ["devoted", "unified", "always with krishna"],
  },
  {
    id: "6.32",
    chapter: 6,
    verse: 32,
    sanskrit:
      "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन | सुखं वा यदि वा दुःखं स योगी परमो मतः ||",
    transliteration:
      "ātmaupamyena sarvatra samaṃ paśyati yo 'rjuna | sukhaṃ vā yadi vā duḥkhaṃ sa yogī paramo mataḥ ||",
    english:
      "O Arjuna, one who sees equally everywhere — through the analogy of the Self — both pleasure and pain — is considered a supreme yogi.",
    hindi:
      "हे अर्जुन! जो आत्मा की उपमा से सर्वत्र समान देखता है — चाहे सुख हो या दुःख — वह परम योगी माना जाता है।",
    meaning:
      "The supreme yogi measures others' experience by their own — knowing how joy and sorrow feel, they extend equal empathy to all. This compassionate universality is the peak of yoga.",
    keywords: ["empathy", "equal vision", "pleasure", "pain", "supreme yogi"],
    moodTags: ["empathetic", "compassionate", "supreme"],
  },
  {
    id: "6.33",
    chapter: 6,
    verse: 33,
    sanskrit:
      "अर्जुन उवाच | योऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन | एतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् ||",
    transliteration:
      "arjuna uvāca | yo 'yaṃ yogas tvayā proktaḥ sāmyena madhusūdana | etasyāhaṃ na paśyāmi cañcalatvāt sthitiṃ sthirām ||",
    english:
      "Arjuna said: O Madhusudana, this yoga of equanimity which you have described — I do not see its steady foundation, because of the restlessness of the mind.",
    hindi:
      "अर्जुन बोले: हे मधुसूदन! आपने जो यह साम्ययोग बताया है, मन की चञ्चलता के कारण मैं इसकी स्थिर अवस्था नहीं देख पाता।",
    meaning:
      "Arjuna honestly admits his limitation — the restless mind makes the yoga of equanimity seem impossibly difficult. This is the universal human experience of the spiritual seeker.",
    keywords: [
      "restless mind",
      "difficulty",
      "honest doubt",
      "equanimity",
      "challenge",
    ],
    moodTags: ["honest", "struggling", "doubting"],
  },
  {
    id: "6.34",
    chapter: 6,
    verse: 34,
    sanskrit:
      "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम् | तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् ||",
    transliteration:
      "cañcalaṃ hi manaḥ kṛṣṇa pramāthi balavad dṛḍham | tasyāhaṃ nigrahaṃ manye vāyor iva suduṣkaram ||",
    english:
      "The mind is indeed restless, turbulent, powerful, and obstinate, O Krishna. I think its control is as difficult as controlling the wind.",
    hindi:
      "हे कृष्ण! मन निश्चित रूप से चञ्चल, प्रमथन करने वाला, बलवान और दृढ़ है। मैं समझता हूँ इसका निग्रह वायु को रोकने जैसा सुदुष्कर है।",
    meaning:
      "One of the most relatable verses — Arjuna's confession that controlling the mind is as hard as stopping the wind. This universal experience of all practitioners resonates across millennia.",
    keywords: [
      "restless mind",
      "wind",
      "control",
      "difficulty",
      "universal struggle",
    ],
    moodTags: ["struggling", "honest", "frustrated"],
  },
  {
    id: "6.35",
    chapter: 6,
    verse: 35,
    sanskrit:
      "श्रीभगवानुवाच | असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||",
    transliteration:
      "śrī bhagavān uvāca | asaṃśayaṃ mahā-bāho mano durnigrahaṃ calam | abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate ||",
    english:
      "The Supreme Lord said: Undoubtedly, O mighty-armed, the mind is restless and difficult to control. But, O Arjuna, it can be controlled through practice and detachment.",
    hindi:
      "श्रीभगवान बोले: हे महाबाहो! निःसंदेह मन चञ्चल और दुर्निग्रह है। परन्तु हे कौन्तेय! अभ्यास और वैराग्य से इसे वश में किया जा सकता है।",
    meaning:
      "Krishna confirms Arjuna's assessment — yes, the mind is extremely difficult to control. But the solution is two-fold: abhyasa (consistent practice) and vairagya (detachment). Both are needed.",
    keywords: ["practice", "detachment", "mind control", "abhyasa", "vairagya"],
    moodTags: ["hopeful", "practical", "encouraging"],
  },
  {
    id: "6.36",
    chapter: 6,
    verse: 36,
    sanskrit:
      "असंयतात्मना योगो दुष्प्राप एव मे मतिः | वश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः ||",
    transliteration:
      "asaṃyatātmanā yogo duṣprāpa iti me matiḥ | vaśyātmanā tu yatatā śakyo 'vāptum upāyataḥ ||",
    english:
      "Yoga is difficult to attain for one with uncontrolled self — this is My view. But for one who strives with a controlled self, it is attainable through right means.",
    hindi:
      "असंयमी के लिए योग दुष्प्राप्य है — यह मेरा मत है। परन्तु वश में किए गए आत्मा से प्रयत्न करने वाले के लिए उचित साधन से प्राप्त करना संभव है।",
    meaning:
      "Krishna is direct: without self-mastery, yoga is hard to achieve. But for those who strive with a subdued self and right methods, yoga is absolutely attainable. Hope is always there.",
    keywords: [
      "self-control",
      "attainment",
      "right means",
      "effort",
      "possibility",
    ],
    moodTags: ["realistic", "hopeful", "encouraging"],
  },
  {
    id: "6.37",
    chapter: 6,
    verse: 37,
    sanskrit:
      "अर्जुन उवाच | अयतिः श्रद्धयोपेतो योगाच्चलितमानसः | अप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति ||",
    transliteration:
      "arjuna uvāca | ayatiḥ śraddhayopeto yogāc calita-mānasaḥ | aprāpya yoga-saṃsiddhiṃ kāṃ gatiṃ kṛṣṇa gacchati ||",
    english:
      "Arjuna said: O Krishna, what is the fate of one who has faith but does not strive sufficiently, whose mind wanders from yoga, and who fails to attain yogic perfection?",
    hindi:
      "अर्जुन बोले: हे कृष्ण! जो श्रद्धा से युक्त होते हुए भी प्रयत्नहीन है, जिसका मन योग से विचलित हो जाता है और योग-सिद्धि नहीं पाता — उसकी क्या गति होती है?",
    meaning:
      "Arjuna asks one of the most universally relevant questions — what happens to the sincere but imperfect spiritual aspirant who begins the path but does not complete it?",
    keywords: [
      "partial yogi",
      "incomplete practice",
      "fate",
      "sincere but weak",
      "question",
    ],
    moodTags: ["anxious", "concerned", "seeking reassurance"],
  },
  {
    id: "6.38",
    chapter: 6,
    verse: 38,
    sanskrit:
      "कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति | अप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि ||",
    transliteration:
      "kaccin nobhaya-vibhraṣṭaś chinnābhram iva naśyati | apratiṣṭho mahā-bāho vimūḍho brahmaṇaḥ pathi ||",
    english:
      "O mighty-armed Krishna, does one who has fallen from both paths, confused on the path to Brahman — perish like a torn cloud, without any support?",
    hindi:
      "हे महाबाहो! क्या वह दोनों से भ्रष्ट होकर, ब्रह्म के मार्ग में मूढ़ होकर, बिना किसी आधार के छिन्न मेघ की तरह नष्ट हो जाता है?",
    meaning:
      "Arjuna's deepest fear — that the spiritual aspirant who falls between two worlds (worldly life and liberation) might be lost like a torn cloud, belonging nowhere. This is a profound human anxiety.",
    keywords: [
      "torn cloud",
      "fallen",
      "both paths",
      "fear",
      "spiritual anxiety",
    ],
    moodTags: ["fearful", "anxious", "desperate"],
  },
  {
    id: "6.39",
    chapter: 6,
    verse: 39,
    sanskrit: "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः | त्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते ||",
    transliteration:
      "etan me saṃśayaṃ kṛṣṇa chettum arhasy aśeṣataḥ | tvad anyaḥ saṃśayasyāsya chettā na hy upapadyate ||",
    english:
      "O Krishna, please dispel this doubt of mine completely — for no one other than You is capable of removing this doubt.",
    hindi:
      "हे कृष्ण! आप मेरे इस संशय को पूर्णतः छेद दें — क्योंकि आपके सिवा इस संशय को छेदने वाला कोई नहीं मिलता।",
    meaning:
      "Arjuna's complete surrender of his doubt to Krishna — acknowledging that only the Divine Guru can truly dissolve the deepest existential uncertainties of the spiritual seeker.",
    keywords: ["doubt", "krishna", "only refuge", "surrender", "guru"],
    moodTags: ["surrendered", "trusting", "humble"],
  },
  {
    id: "6.40",
    chapter: 6,
    verse: 40,
    sanskrit:
      "श्रीभगवानुवाच | पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते | न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति ||",
    transliteration:
      "śrī bhagavān uvāca | pārtha naiveha nāmutra vināśas tasya vidyate | na hi kalyāṇa-kṛt kaścid durgatiṃ tāta gacchati ||",
    english:
      "The Supreme Lord said: O Partha, neither in this world nor in the next is there any destruction for that soul. For one who does good, dear child, does not come to grief.",
    hindi:
      "श्रीभगवान बोले: हे पार्थ! न इस लोक में और न परलोक में उसका विनाश होता है। क्योंकि हे तात! कल्याण कार्य करने वाला कोई भी दुर्गति को प्राप्त नहीं होता।",
    meaning:
      "Krishna's reassuring answer to Arjuna's deepest fear: no good action is ever wasted. The sincere spiritual aspirant who falls short is never destroyed — this is one of the Gita's great consolations.",
    keywords: [
      "no destruction",
      "good deeds",
      "hope",
      "consolation",
      "divine reassurance",
    ],
    moodTags: ["reassured", "hopeful", "comforted"],
  },
  {
    id: "6.41",
    chapter: 6,
    verse: 41,
    sanskrit:
      "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः | शुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते ||",
    transliteration:
      "prāpya puṇya-kṛtāṃ lokān uṣitvā śāśvatīḥ samāḥ | śucīnāṃ śrīmatāṃ gehe yoga-bhraṣṭo 'bhijāyate ||",
    english:
      "Having attained the worlds of the righteous and dwelling there for many years, the one who has fallen from yoga is reborn in the home of the pure and prosperous.",
    hindi:
      "पुण्यात्माओं के लोकों को प्राप्त करके, अनेक वर्षों तक वहाँ निवास करके, योगभ्रष्ट, पवित्र और श्रीमान के घर में जन्म लेता है।",
    meaning:
      "The imperfect yogi first enjoys the fruits of accumulated spiritual merit in higher realms, then takes birth in a pure, prosperous family — an environment conducive to continuing the spiritual journey.",
    keywords: [
      "rebirth",
      "pure family",
      "heavenly realms",
      "spiritual continuity",
      "fallen yogi",
    ],
    moodTags: ["hopeful", "reassured", "progressive"],
  },
  {
    id: "6.42",
    chapter: 6,
    verse: 42,
    sanskrit: "अथवा योगिनामेव कुले भवति धीमताम् | एतद्धि दुर्लभतरं लोके जन्म यदीदृशम् ||",
    transliteration:
      "athavā yoginām eva kule bhavati dhīmatām | etad dhi durlabha-taraṃ loke janma yad īdṛśam ||",
    english:
      "Or, the fallen yogi may be born in the family of wise yogis. Verily, such a birth is very difficult to attain in this world.",
    hindi:
      "अथवा वह बुद्धिमान योगियों के कुल में जन्म लेता है। ऐसा जन्म संसार में अत्यन्त दुर्लभ है।",
    meaning:
      "The highest and rarest rebirth for the fallen yogi: to be born in a family of enlightened yogis — where the spiritual environment itself becomes the greatest teacher and support.",
    keywords: [
      "yogic family",
      "rare birth",
      "spiritual environment",
      "rebirth",
      "blessing",
    ],
    moodTags: ["grateful", "blessed", "rare"],
  },
  {
    id: "6.43",
    chapter: 6,
    verse: 43,
    sanskrit: "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम् | यतते च ततो भूयः संसिद्धौ कुरुनन्दन ||",
    transliteration:
      "tatra taṃ buddhi-saṃyogaṃ labhate paurva-dehikam | yatate ca tato bhūyaḥ saṃsiddhau kuru-nandana ||",
    english:
      "There, that person regains the wisdom accumulated from the previous life and again strives harder toward perfection, O Arjuna.",
    hindi:
      "वहाँ उसे पूर्व शरीर के बुद्धि-संयोग का लाभ मिलता है और हे कुरुनन्दन! वह पुनः सिद्धि के लिए और अधिक प्रयत्न करता है।",
    meaning:
      "The spiritual progress is never lost — the yogi automatically reconnects with their accumulated wisdom from past lives and naturally strive more intensely toward liberation.",
    keywords: [
      "past life wisdom",
      "spiritual continuity",
      "reconnection",
      "effort",
      "evolution",
    ],
    moodTags: ["inspired", "continuous", "evolutionary"],
  },
  {
    id: "6.44",
    chapter: 6,
    verse: 44,
    sanskrit:
      "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः | जिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते ||",
    transliteration:
      "pūrvābhyāsena tenaiva hriyate hy avaśo 'pi saḥ | jijñāsur api yogasya śabda-brahmātivartate ||",
    english:
      "By the force of previous practice, one is naturally drawn toward yoga even involuntarily. Even one who merely desires to know about yoga transcends the scriptural rituals.",
    hindi:
      "पूर्व अभ्यास से ही वह अवश होने पर भी आकृष्ट होता है। योग का जिज्ञासु भी शब्द-ब्रह्म से परे हो जाता है।",
    meaning:
      "The power of past spiritual practice: it naturally draws the soul back to yoga in the next life, without conscious effort. Even merely asking 'What is yoga?' puts one beyond ritualistic religion.",
    keywords: [
      "past practice",
      "natural draw",
      "transcendence",
      "desire for yoga",
      "momentum",
    ],
    moodTags: ["naturally drawn", "evolutionary", "transcendent"],
  },
  {
    id: "6.45",
    chapter: 6,
    verse: 45,
    sanskrit:
      "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः | अनेकजन्मसंसिद्धस्ततो याति परां गतिम् ||",
    transliteration:
      "prayatnād yatamānas tu yogī saṃśuddha-kilbiṣaḥ | aneka-janma-saṃsiddhas tato yāti parāṃ gatim ||",
    english:
      "But the yogi who strives with great effort, purified of sins, attaining perfection through many births — then reaches the Supreme Goal.",
    hindi:
      "परन्तु प्रयत्नपूर्वक यत्न करने वाला योगी, पापमुक्त होकर, अनेक जन्मों में सिद्धि प्राप्त करके, फिर परम गति को प्राप्त होता है।",
    meaning:
      "Spiritual evolution unfolds across many lifetimes. The persistent yogi, progressively purifying themselves through multiple births, ultimately reaches the Supreme Goal — liberation.",
    keywords: [
      "many lifetimes",
      "evolution",
      "purification",
      "supreme goal",
      "persistence",
    ],
    moodTags: ["persevering", "hopeful", "long-term"],
  },
  {
    id: "6.46",
    chapter: 6,
    verse: 46,
    sanskrit:
      "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः | कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन ||",
    transliteration:
      "tapasvibhyo 'dhiko yogī jñānibhyo 'pi mato 'dhikaḥ | karmibhyaś cādhiko yogī tasmād yogī bhavārjuna ||",
    english:
      "The yogi is greater than the ascetics, greater than even the learned scholars, and greater than the ritualistic performers. Therefore, O Arjuna, be a yogi.",
    hindi:
      "योगी तपस्वियों से श्रेष्ठ है, ज्ञानियों से भी श्रेष्ठ माना जाता है और कर्मकाण्डियों से भी श्रेष्ठ है। इसलिए हे अर्जुन! तुम योगी बनो।",
    meaning:
      "Krishna's direct declaration: the yogi excels the ascetic, the scholar, and the ritualist. The synthesis of love, knowledge, and action through yoga is the highest spiritual path — Arjuna, be a yogi!",
    keywords: [
      "yogi supreme",
      "ascetics",
      "scholars",
      "ritualists",
      "be a yogi",
    ],
    moodTags: ["inspired", "motivated", "clear direction"],
  },
  {
    id: "6.47",
    chapter: 6,
    verse: 47,
    sanskrit:
      "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना | श्रद्धावान्भजते यो मां स मे युक्ततमो मतः ||",
    transliteration:
      "yoginām api sarveṣāṃ mad-gatenāntar-ātmanā | śraddhāvān bhajate yo māṃ sa me yuktatamo mataḥ ||",
    english:
      "And of all yogis, one who worships Me with faith, with inner self absorbed in Me — that one is considered by Me to be the most united with Me in yoga.",
    hindi:
      "और समस्त योगियों में भी जो श्रद्धावान् होकर अपने अन्तरात्मा को मुझमें लगाकर मुझे भजता है — वह मुझे सर्वाधिक युक्त (उत्तम योगी) मान्य है।",
    meaning:
      "The final, climactic verse of Chapter 6: the greatest of all yogis is the devotee who worships Krishna with unwavering faith and inner absorption. Bhakti crowns all yoga — this is the supreme path.",
    keywords: [
      "supreme yogi",
      "bhakti",
      "faith",
      "absorption in krishna",
      "greatest",
    ],
    moodTags: ["devoted", "beloved", "supreme love"],
  },
];
