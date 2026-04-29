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

export const GITA_VERSES_CH12_13: GitaVerse[] = [
  // ============================================================
  // CHAPTER 12 — Bhakti Yoga (20 verses)
  // The Yoga of Devotion
  // ============================================================
  {
    id: "12.1",
    chapter: 12,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच | एवं सततयुक्ता ये भक्तास्त्वां पर्युपासते | ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः ||",
    transliteration:
      "arjuna uvācha | evaṁ satata-yuktā ye bhaktās tvāṁ paryupāsate | ye chāpy akṣharam avyaktaṁ teṣhāṁ ke yoga-vittamāḥ",
    english:
      "Arjuna said: Of those devotees who are ever steadfast and worship You with devotion, and those who worship the imperishable and the unmanifested — which of them are better versed in yoga?",
    hindi:
      "अर्जुन बोले: जो भक्त सदा आपकी भक्ति में लगे रहते हुए आपकी उपासना करते हैं और जो अक्षर अव्यक्त ब्रह्म की उपासना करते हैं — इन दोनों में से योग को अधिक जाननेवाले कौन हैं?",
    meaning:
      "Arjuna poses the fundamental question of spiritual paths: Is it better to worship the personal form of Krishna with devotion (bhakti), or to meditate on the formless, imperishable Brahman (jnana)? This sets the theme for the entire chapter.",
    keywords: ["devotion", "worship", "unmanifested", "yoga", "bhakti"],
    moodTags: ["curiosity", "guidance", "devotion"],
  },
  {
    id: "12.2",
    chapter: 12,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच | मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते | श्रद्धया परयोपेतास्ते मे युक्ततमा मताः ||",
    transliteration:
      "śhrī bhagavān uvācha | mayy āveśhya mano ye māṁ nitya-yuktā upāsate | śhraddhayā parayopetās te me yuktatamā matāḥ",
    english:
      "The Supreme Lord said: Those who fix their minds on Me and always engage in My devotion with supreme faith — I consider them to be the most perfect in yoga.",
    hindi:
      "श्रीभगवान बोले: जो अपना मन मुझमें लगाकर, नित्य मेरी भक्ति में लगे रहते हैं और श्रेष्ठ श्रद्धा से युक्त होकर मेरी उपासना करते हैं — वे मेरे मत में सर्वश्रेष्ठ योगी हैं।",
    meaning:
      "Krishna directly answers: personal devotion with supreme faith (parā śhraddhā) makes one the highest yogi. The mind fixed on Krishna is the pinnacle of all spiritual paths. Faith, love, and steady focus on the divine form is declared supreme.",
    keywords: ["devotion", "faith", "mind", "yoga", "supreme"],
    moodTags: ["devotion", "faith", "peace"],
  },
  {
    id: "12.3",
    chapter: 12,
    verse: 3,
    sanskrit: "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते | सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम् ||",
    transliteration:
      "ye tv akṣharam anirdeśhyam avyaktaṁ paryupāsate | sarvatra-gam achintyaṁ cha kūṭa-stham achalaṁ dhruvam",
    english:
      "But those who worship the imperishable, the indefinable, the unmanifested, the omnipresent, the unthinkable, the immovable, and the eternal —",
    hindi:
      "परंतु जो अक्षर अर्थात् नाशरहित, अनिर्देश्य, अव्यक्त, सर्वव्यापी, अचिन्त्य, कूटस्थ, अचल और ध्रुव की उपासना करते हैं —",
    meaning:
      "Krishna begins describing the path of formless worship. The imperishable Brahman has seven qualities: indefinable (anirdeśhya), unmanifested (avyakta), omnipresent, unthinkable, immovable, stable, and eternal. This path is valid but more difficult.",
    keywords: [
      "imperishable",
      "unmanifested",
      "eternal",
      "omnipresent",
      "formless",
    ],
    moodTags: ["contemplation", "wisdom", "peace"],
  },
  {
    id: "12.4",
    chapter: 12,
    verse: 4,
    sanskrit:
      "सन्नियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः | ते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः ||",
    transliteration:
      "sanniyamyendriya-grāmaṁ sarvatra sama-buddhayaḥ | te prāpnuvanti mām eva sarva-bhūta-hite ratāḥ",
    english:
      "Controlling all their senses, equal-minded everywhere, engaged in the welfare of all beings — they surely attain Me.",
    hindi:
      "सभी इन्द्रियों को वश में करके, सर्वत्र समान बुद्धि रखते हुए, सभी प्राणियों के हित में लगे रहकर — वे भी मुझे ही प्राप्त होते हैं।",
    meaning:
      "Even worshippers of the formless Brahman reach Krishna if they master their senses, maintain equanimity everywhere, and dedicate themselves to the welfare of all beings. The destination is the same; only the path differs.",
    keywords: ["senses", "equanimity", "welfare", "attainment", "control"],
    moodTags: ["peace", "service", "wisdom"],
  },
  {
    id: "12.5",
    chapter: 12,
    verse: 5,
    sanskrit:
      "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम् | अव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते ||",
    transliteration:
      "kleśho'dhika-taras teṣhām avyaktāsakta-chetasām | avyaktā hi gatir duḥkhaṁ dehavadbhir avāpyate",
    english:
      "The difficulty is greater for those whose minds are attached to the unmanifested, for the unmanifested goal is very hard to attain by embodied beings.",
    hindi:
      "जिनका मन अव्यक्त में आसक्त है, उनका कष्ट अधिक होता है; क्योंकि देहधारियों द्वारा अव्यक्त की प्राप्ति अत्यंत दुःखपूर्वक होती है।",
    meaning:
      "Krishna honestly acknowledges the challenge of the formless path for embodied beings. The mind, which works through the senses and perceives the manifested, struggles to focus on the completely formless and abstract. Embodiment itself is an obstacle to formless meditation.",
    keywords: ["difficulty", "unmanifested", "embodied", "challenge", "path"],
    moodTags: ["wisdom", "guidance", "challenge"],
  },
  {
    id: "12.6",
    chapter: 12,
    verse: 6,
    sanskrit:
      "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः | अनन्येनैव योगेन मां ध्यायन्त उपासते ||",
    transliteration:
      "ye tu sarvāṇi karmāṇi mayi sannyasya mat-parāḥ | ananyenaiva yogena māṁ dhyāyanta upāsate",
    english:
      "But those who worship Me with devotion, renouncing all actions in Me and making Me the supreme goal — meditating on Me with exclusive yoga —",
    hindi:
      "परंतु जो सभी कर्मों को मुझमें समर्पित करके, मुझे ही परम लक्ष्य मानते हुए, अनन्य योग से मेरा ध्यान करते हुए मेरी उपासना करते हैं —",
    meaning:
      "The personal devotees who offer all actions to Krishna, take Him as the supreme goal, and meditate on Him with exclusive (ananya) yoga — undivided, unwavering devotion — are described here. Ananya means 'not another' — no divided loyalty, only Krishna.",
    keywords: ["surrender", "devotion", "meditation", "exclusive", "actions"],
    moodTags: ["devotion", "surrender", "peace"],
  },
  {
    id: "12.7",
    chapter: 12,
    verse: 7,
    sanskrit: "तेषामहं समुद्धर्ता मृत्युसंसारसागरात् | भवामि नचिरात्पार्थ मय्यावेशितचेतसाम् ||",
    transliteration:
      "teṣhām ahaṁ samuddhartā mṛityu-saṁsāra-sāgarāt | bhavāmi na chirāt pārtha mayy āveśhita-chetasām",
    english:
      "For those whose minds are fixed on Me, O Partha, I am the swift deliverer from the ocean of birth and death.",
    hindi:
      "हे पार्थ! मुझमें चित्त लगाने वाले उन भक्तों का मैं शीघ्र ही मृत्यु और संसार रूपी सागर से उद्धार करनेवाला बन जाता हूँ।",
    meaning:
      "Krishna makes a powerful promise: for those whose minds are absorbed in Him, He personally becomes their deliverer (samuddhartā) from the ocean of saṁsāra — the cycle of birth, death, and suffering. The word 'na chirāt' (not long) emphasizes the swiftness of this liberation.",
    keywords: ["deliverer", "liberation", "ocean", "birth", "death"],
    moodTags: ["hope", "devotion", "surrender", "faith"],
  },
  {
    id: "12.8",
    chapter: 12,
    verse: 8,
    sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय | निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ||",
    transliteration:
      "mayy eva mana ādhatsva mayi buddhiṁ niveśhaya | nivasiṣhyasi mayy eva ata ūrdhvaṁ na sanśhayaḥ",
    english:
      "Fix your mind on Me alone and place your intellect in Me. You will then live in Me hereafter. Of this, there is no doubt.",
    hindi:
      "मुझमें ही मन को लगा और मुझमें ही बुद्धि को स्थापित कर। इसके बाद तू निश्चित रूप से मुझमें ही निवास करेगा — इसमें संदेह नहीं।",
    meaning:
      "The simplest and most direct instruction in the Gita: fix mind on Krishna, fix intellect on Krishna. The result is dwelling in Krishna — liberation itself. The phrase 'na sanśhayaḥ' (no doubt) is Krishna's absolute guarantee.",
    keywords: ["mind", "intellect", "fix", "liberation", "certainty"],
    moodTags: ["devotion", "guidance", "peace", "hope"],
  },
  {
    id: "12.9",
    chapter: 12,
    verse: 9,
    sanskrit:
      "अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम् | अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय ||",
    transliteration:
      "atha chittaṁ samādhātuṁ na śhaknoṣhi mayi sthiram | abhyāsa-yogena tato mām ichchhāptuṁ dhanañjaya",
    english:
      "If you cannot fix your mind steadily on Me, O Dhananjaya, then seek to reach Me through the practice of abhyasa yoga.",
    hindi:
      "हे धनंजय! यदि तू अपने चित्त को मुझमें स्थिरतापूर्वक नहीं लगा सकता, तो अभ्यास-योग के द्वारा मुझे प्राप्त करने की इच्छा कर।",
    meaning:
      "Krishna graciously offers a step-down path for those who cannot immediately fix their mind: abhyāsa yoga — the practice of repeatedly returning the mind to Krishna. Spiritual discipline built through consistent practice is the second-best path.",
    keywords: ["practice", "steady", "mind", "abhyasa", "discipline"],
    moodTags: ["guidance", "hope", "perseverance"],
  },
  {
    id: "12.10",
    chapter: 12,
    verse: 10,
    sanskrit:
      "अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव | मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि ||",
    transliteration:
      "abhyāse'py asamartho'si mat-karma-paramo bhava | mad-artham api karmāṇi kurvan siddhim avāpsyasi",
    english:
      "If you are unable to practice, then be intent on doing actions for My sake. By performing actions for Me, you will also achieve perfection.",
    hindi:
      "यदि तू अभ्यास में भी असमर्थ है, तो मेरे लिए कर्म करने में तत्पर हो जा। मेरे लिए कर्म करते हुए भी तू सिद्धि को प्राप्त करेगा।",
    meaning:
      "A further step-down path: if one cannot even practice meditation, they should dedicate all actions to Krishna. Karma yoga performed as an offering to God purifies the heart and eventually leads to perfection. Action as worship is a valid and powerful path.",
    keywords: ["action", "perfection", "service", "karma", "dedication"],
    moodTags: ["guidance", "service", "hope", "action"],
  },
  {
    id: "12.11",
    chapter: 12,
    verse: 11,
    sanskrit:
      "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः | सर्वकर्मफलत्यागं ततः कुरु यतात्मवान् ||",
    transliteration:
      "athaitad apy aśhakto'si kartuṁ mad-yogam āśhritaḥ | sarva-karma-phala-tyāgaṁ tataḥ kuru yatātmavān",
    english:
      "If you are unable to do even this, then taking refuge in My yoga with a controlled self, renounce the fruits of all actions.",
    hindi:
      "यदि यह भी करने में असमर्थ हो, तो मेरे योग का आश्रय लेकर, मन को वश में करके सभी कर्मों के फलों का त्याग कर।",
    meaning:
      "The most accessible path: simply renounce attachment to results. Even if one cannot meditate, practice, or dedicate actions consciously, the renunciation of fruits (karma-phala-tyāga) while taking refuge in Krishna liberates the heart. This is the foundation of nishkama karma.",
    keywords: ["renunciation", "fruits", "actions", "refuge", "control"],
    moodTags: ["surrender", "peace", "guidance", "detachment"],
  },
  {
    id: "12.12",
    chapter: 12,
    verse: 12,
    sanskrit:
      "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते | ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् ||",
    transliteration:
      "śhreyo hi jñānam abhyāsāj jñānād dhyānaṁ viśhiṣhyate | dhyānāt karma-phala-tyāgas tyāgāch chhāntir anantaram",
    english:
      "Knowledge is better than practice; meditation is better than knowledge; renunciation of the fruits of actions is better than meditation; and peace follows immediately from renunciation.",
    hindi:
      "अभ्यास से ज्ञान श्रेष्ठ है; ज्ञान से ध्यान श्रेष्ठ है; ध्यान से कर्मफल का त्याग श्रेष्ठ है; और त्याग से तुरंत ही शांति प्राप्त होती है।",
    meaning:
      "Krishna presents a hierarchy of spiritual practices: practice → knowledge → meditation → renunciation of fruits → peace. Each step is superior to the previous. The culmination is immediate peace (śhānti) through tyāga — surrender of attachment to outcomes.",
    keywords: ["knowledge", "meditation", "renunciation", "peace", "hierarchy"],
    moodTags: ["wisdom", "peace", "guidance"],
  },
  {
    id: "12.13",
    chapter: 12,
    verse: 13,
    sanskrit:
      "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||",
    transliteration:
      "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha | nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣhamī",
    english:
      "One who has no hatred toward any being, who is friendly and compassionate, free from possessiveness and ego, equal in pain and pleasure, and forgiving —",
    hindi:
      "जो समस्त प्राणियों से द्वेष नहीं रखता, मैत्री और करुणा से युक्त है, ममता और अहंकार से रहित है, सुख-दुःख में समान रहता है और क्षमाशील है —",
    meaning:
      "Krishna begins describing the qualities of the dear devotee. Six qualities here: non-hatred toward all beings, friendliness, compassion, freedom from possessiveness (nirmama), freedom from ego (nirahaṅkāra), and equanimity in sorrow and joy. These are the marks of a liberated soul.",
    keywords: ["compassion", "friendship", "ego", "equanimity", "forgiveness"],
    moodTags: ["compassion", "peace", "love", "devotion"],
  },
  {
    id: "12.14",
    chapter: 12,
    verse: 14,
    sanskrit:
      "सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः | मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ||",
    transliteration:
      "santuṣhṭaḥ satataṁ yogī yatātmā dṛiḍha-niśhchayaḥ | mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ",
    english:
      "Always content, the yogi who is self-controlled and of firm conviction, with mind and intellect offered to Me — that devotee of Mine is dear to Me.",
    hindi:
      "जो सदा संतुष्ट रहता है, योगी है, मन को वश में रखता है, दृढ़ निश्चयवाला है, और जिसने अपना मन और बुद्धि मुझे समर्पित कर दिए हैं — वह मेरा भक्त मुझे प्रिय है।",
    meaning:
      "Four more qualities of the dear devotee: contentment (santuṣhṭa), self-restraint (yatātmā), firm determination (dṛiḍha-niśhchaya), and mind-intellect offered to Krishna (mayy arpita). Contentment is inner peace regardless of external circumstances.",
    keywords: [
      "contentment",
      "self-control",
      "determination",
      "devotion",
      "dear",
    ],
    moodTags: ["peace", "devotion", "contentment"],
  },
  {
    id: "12.15",
    chapter: 12,
    verse: 15,
    sanskrit:
      "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः | हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ||",
    transliteration:
      "yasmān nodvijate loko lokān nodvijate cha yaḥ | harṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ",
    english:
      "One who does not agitate others and who is not agitated by others, who is free from joy, envy, fear, and anxiety — that person is dear to Me.",
    hindi:
      "जिससे संसार उद्विग्न नहीं होता और जो स्वयं संसार से उद्विग्न नहीं होता, जो हर्ष, अमर्ष, भय और उद्वेग से मुक्त है — वह मुझे प्रिय है।",
    meaning:
      "The spiritually advanced person causes no disturbance to others and is undisturbed by others. They are free from excessive joy, resentment, fear, and anxiety. This is the hallmark of equanimity — the world flows around them without creating turbulence within.",
    keywords: ["equanimity", "agitation", "fear", "anxiety", "dear"],
    moodTags: ["peace", "equanimity", "wisdom"],
  },
  {
    id: "12.16",
    chapter: 12,
    verse: 16,
    sanskrit:
      "अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः | सर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः ||",
    transliteration:
      "anapekṣhaḥ śhuchir dakṣha udāsīno gata-vyathaḥ | sarvārambha-parityāgī yo mad-bhaktaḥ sa me priyaḥ",
    english:
      "One who is free from expectation, pure, expert, impartial, free from distress, and who renounces all undertakings motivated by selfish desire — that devotee of Mine is dear to Me.",
    hindi:
      "जो निस्पृह, शुद्ध, दक्ष, निष्पक्ष, व्यथारहित और सभी स्वार्थी कार्यारम्भों का त्यागी है — वह मेरा भक्त मुझे प्रिय है।",
    meaning:
      "More qualities of the dear devotee: anapekṣha (no expectation), śhuchi (purity of heart and body), dakṣha (skillfulness), udāsīna (impartial, not taking sides), gata-vyatha (free from distress), and renunciation of all enterprises driven by ego or desire.",
    keywords: ["expectation", "purity", "impartial", "renunciation", "dear"],
    moodTags: ["detachment", "purity", "peace", "devotion"],
  },
  {
    id: "12.17",
    chapter: 12,
    verse: 17,
    sanskrit:
      "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति | शुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः ||",
    transliteration:
      "yo na hṛiṣhyati na dveṣhṭi na śhochati na kāṅkṣhati | śhubhāśhubha-parityāgī bhaktimān yaḥ sa me priyaḥ",
    english:
      "One who neither rejoices nor grieves, neither laments nor desires, and who renounces both auspicious and inauspicious outcomes — such a devoted person is dear to Me.",
    hindi:
      "जो न हर्षित होता है, न द्वेष करता है, न शोक करता है, न कामना करता है और जो शुभ-अशुभ सभी का त्यागी है — वह भक्तिमान मुझे प्रिय है।",
    meaning:
      "The equipoised devotee neither leaps in joy at good fortune nor sinks in grief at misfortune. They neither mourn what is lost nor crave what is absent. They abandon attachment to both auspicious and inauspicious results — complete inner freedom.",
    keywords: ["grief", "joy", "desire", "equanimity", "renunciation"],
    moodTags: ["equanimity", "detachment", "peace", "devotion"],
  },
  {
    id: "12.18",
    chapter: 12,
    verse: 18,
    sanskrit:
      "समः शत्रौ च मित्रे च तथा मानापमानयोः | शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः ||",
    transliteration:
      "samaḥ śhatrau cha mitre cha tathā mānāpamānayoḥ | śhītoṣhṇa-sukha-duḥkheṣhu samaḥ saṅga-vivarjitaḥ",
    english:
      "Equal toward enemy and friend, equal in honor and dishonor, equal in cold and heat, pleasure and pain, free from all attachments —",
    hindi:
      "जो शत्रु और मित्र में, मान और अपमान में, शीत और उष्ण में, सुख और दुःख में समान रहता है और आसक्ति से रहित है —",
    meaning:
      "True equanimity extends to all opposites: enemy and friend are treated the same, honor and insult receive equal response, extreme heat or cold doesn't disturb, pleasure and pain are equal. This is saṅga-vivarjita — completely freed from all attachments and clinging.",
    keywords: ["equanimity", "enemy", "friend", "honor", "attachment"],
    moodTags: ["equanimity", "peace", "wisdom", "detachment"],
  },
  {
    id: "12.19",
    chapter: 12,
    verse: 19,
    sanskrit:
      "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् | अनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः ||",
    transliteration:
      "tulya-nindā-stutir maunī santuṣhṭo yena kenachit | aniketaḥ sthira-matir bhaktimān me priyo naraḥ",
    english:
      "One who is equal in censure and praise, who is silent, content with whatever comes, without attachment to home, of steady mind, and full of devotion — that person is dear to Me.",
    hindi:
      "जो निंदा और स्तुति में समान है, मौनी है, जो मिले उससे संतुष्ट है, किसी स्थान में आसक्ति न रखनेवाला, स्थिर बुद्धि वाला और भक्तिमान है — वह पुरुष मुझे प्रिय है।",
    meaning:
      "Continuing the portrait of the dear devotee: praise and blame are equal, silence (maunam) is practiced, contentment in whatever comes (santuṣhṭa), no attachment to any particular dwelling (aniketa), steady intellect, and full of bhakti. This is a complete picture of spiritual maturity.",
    keywords: ["silence", "contentment", "steady", "detachment", "devotion"],
    moodTags: ["peace", "contentment", "devotion", "wisdom"],
  },
  {
    id: "12.20",
    chapter: 12,
    verse: 20,
    sanskrit:
      "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते | श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः ||",
    transliteration:
      "ye tu dharmyāmṛitam idaṁ yathoktaṁ paryupāsate | śhraddadhānā mat-paramā bhaktās te'tīva me priyāḥ",
    english:
      "But those who follow this immortal path of righteousness as declared above, endowed with faith, making Me the supreme goal — those devotees are exceedingly dear to Me.",
    hindi:
      "परंतु जो इस धर्मरूपी अमृत को मेरे कहे अनुसार श्रद्धापूर्वक सेवन करते हैं, जो मुझे परम लक्ष्य मानते हैं — वे भक्त मुझे अत्यंत प्रिय हैं।",
    meaning:
      "The glorious conclusion of Chapter 12: those who follow this entire teaching — this dharmic nectar (dharmyāmṛita) — with faith, treating Krishna as the supreme goal, are exceedingly dear (atīva priya) to Krishna. The chapter's closing seal is Krishna's love for such devotees.",
    keywords: ["immortal", "righteousness", "faith", "supreme", "dear"],
    moodTags: ["devotion", "faith", "love", "hope"],
  },

  // ============================================================
  // CHAPTER 13 — Kshetra-Kshetrajna Vibhaga Yoga (34 verses)
  // The Yoga of the Field and the Knower of the Field
  // ============================================================
  {
    id: "13.1",
    chapter: 13,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच | प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च | एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव ||",
    transliteration:
      "arjuna uvācha | prakṛitiṁ puruṣhaṁ chaiva kṣhetraṁ kṣhetra-jñam eva cha | etad veditum ichchhāmi jñānaṁ jñeyaṁ cha keśhava",
    english:
      "Arjuna said: O Keshava, I wish to know about Prakriti (Nature) and Purusha (Spirit), the field and the knower of the field, knowledge and the object of knowledge.",
    hindi:
      "अर्जुन बोले: हे केशव! मैं प्रकृति, पुरुष, क्षेत्र, क्षेत्रज्ञ, ज्ञान और ज्ञेय — इन सबको जानना चाहता हूँ।",
    meaning:
      "Arjuna asks about the six fundamental metaphysical concepts: Prakriti (nature/matter), Purusha (spirit/consciousness), kṣhetra (the field — body and mind), kṣhetra-jña (the knower of the field — the soul), jñāna (knowledge), and jñeya (what is to be known — the Supreme). This chapter is one of the most philosophically profound.",
    keywords: ["prakriti", "purusha", "field", "knower", "knowledge"],
    moodTags: ["wisdom", "curiosity", "philosophy"],
  },
  {
    id: "13.2",
    chapter: 13,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच | इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते | एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ||",
    transliteration:
      "śhrī bhagavān uvācha | idaṁ śharīraṁ kaunteya kṣhetram ity abhidhīyate | etad yo vetti taṁ prāhuḥ kṣhetra-jña iti tad-vidaḥ",
    english:
      "The Supreme Lord said: O son of Kunti, this body is called the field. Those who know it are called the knowers of the field by the wise.",
    hindi:
      "श्रीभगवान बोले: हे कौन्तेय! यह शरीर 'क्षेत्र' कहलाता है और जो इसे जानता है, उसे ज्ञाता लोग 'क्षेत्रज्ञ' कहते हैं।",
    meaning:
      "Krishna opens Chapter 13 with the foundational teaching: the body (including mind and senses) is the kṣhetra — the field. The soul that is aware of this field is the kṣhetra-jña. This distinction between the observer (soul) and the observed (body-mind) is the key to self-knowledge and liberation.",
    keywords: ["body", "field", "knower", "soul", "awareness"],
    moodTags: ["wisdom", "self-knowledge", "philosophy"],
  },
  {
    id: "13.3",
    chapter: 13,
    verse: 3,
    sanskrit:
      "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत | क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम ||",
    transliteration:
      "kṣhetra-jñaṁ chāpi māṁ viddhi sarva-kṣhetreṣhu bhārata | kṣhetra-kṣhetrajñayor jñānaṁ yat taj jñānaṁ mataṁ mama",
    english:
      "O descendent of Bharata, know Me also as the Knower in all fields. The knowledge of the field and the knower of the field — I declare that to be true knowledge.",
    hindi:
      "हे भारत! सभी क्षेत्रों में क्षेत्रज्ञ भी मुझे ही जान। क्षेत्र और क्षेत्रज्ञ का जो ज्ञान है — वही मेरे मत में सच्चा ज्ञान है।",
    meaning:
      "The supreme revelation: Krishna is the ultimate Kṣhetra-jña present in all fields (all bodies). The individual soul is the kṣhetra-jña at the individual level; Krishna is the kṣhetra-jña at the universal level. True knowledge (jñāna) is understanding both the field and its knower.",
    keywords: [
      "supreme knower",
      "all fields",
      "true knowledge",
      "universal soul",
    ],
    moodTags: ["wisdom", "divine", "self-knowledge"],
  },
  {
    id: "13.4",
    chapter: 13,
    verse: 4,
    sanskrit:
      "तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत् | स च यो यत्प्रभावश्च तत्समासेन मे शृणु ||",
    transliteration:
      "tat kṣhetraṁ yach cha yādṛik cha yad-vikāri yataśh cha yat | sa cha yo yat-prabhāvaśh cha tat samāsena me śhṛiṇu",
    english:
      "Hear from Me briefly what that field is, what its nature is, what its modifications are, whence it arises, who the knower of the field is, and what his powers are.",
    hindi:
      "वह क्षेत्र क्या है, कैसा है, इसके क्या विकार हैं, यह किससे उत्पन्न हुआ है, वह क्षेत्रज्ञ कौन है और उसकी क्या शक्ति है — यह सब संक्षेप में मुझसे सुन।",
    meaning:
      "Krishna offers a comprehensive overview of what will be taught: the nature of the field, its transformations (vikāra), its origin, who the knower is, and what the knower's powers are. This verse sets the agenda for the chapter's philosophical analysis.",
    keywords: ["field", "nature", "modifications", "origin", "knower"],
    moodTags: ["wisdom", "philosophy", "guidance"],
  },
  {
    id: "13.5",
    chapter: 13,
    verse: 5,
    sanskrit:
      "ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक् | ब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः ||",
    transliteration:
      "ṛiṣhibhir bahudhā gītaṁ chhandobhir vividhaiḥ pṛithak | brahma-sūtra-padaiśh chaiva hetumadbhir viniśhchitaiḥ",
    english:
      "This has been sung by sages in many ways, in various hymns, and in well-reasoned and definitive Brahma-sutra aphorisms.",
    hindi:
      "यह ऋषियों द्वारा अनेक प्रकार से गाया गया है, विभिन्न छंदों में अलग-अलग कहा गया है, और हेतुपूर्ण तथा निश्चयात्मक ब्रह्मसूत्र के पदों में भी स्थापित किया गया है।",
    meaning:
      "Krishna grounds this teaching in the Vedic tradition: it has been sung by rishis in the Vedas (through various meters), and established philosophically through the Brahmasūtras of Vyasa. This is not new knowledge but the timeless wisdom confirmed across all scriptural traditions.",
    keywords: ["sages", "Vedas", "Brahmasutras", "tradition", "knowledge"],
    moodTags: ["wisdom", "tradition", "scripture"],
  },
  {
    id: "13.6",
    chapter: 13,
    verse: 6,
    sanskrit:
      "महाभूतान्यहङ्कारो बुद्धिरव्यक्तमेव च | इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः ||",
    transliteration:
      "mahā-bhūtāny ahaṅkāro buddhir avyaktam eva cha | indriyāṇi daśhaika cha pañcha chendriya-gocharāḥ",
    english:
      "The great elements, ego, intellect, the unmanifested (prakriti), the ten senses, the one (mind), and the five objects of the senses —",
    hindi:
      "पाँच महाभूत, अहंकार, बुद्धि, अव्यक्त, दस इन्द्रियाँ, एक मन और पाँच इन्द्रिय विषय —",
    meaning:
      "Krishna lists the twenty-four components of the field (body-mind complex): the five great elements (earth, water, fire, air, space), ego (ahaṅkāra), intellect (buddhi), unmanifested prakriti, five sense organs, five action organs, mind, and five sense objects. This is the Sāṅkhya analysis of material existence.",
    keywords: ["elements", "ego", "intellect", "senses", "matter"],
    moodTags: ["wisdom", "philosophy", "knowledge"],
  },
  {
    id: "13.7",
    chapter: 13,
    verse: 7,
    sanskrit:
      "इच्छा द्वेषः सुखं दुःखं सङ्घातश्चेतना धृतिः | एतत्क्षेत्रं समासेन सविकारमुदाहृतम् ||",
    transliteration:
      "ichchhā dveṣhaḥ sukhaṁ duḥkhaṁ saṅghātaśh chetanā dhṛitiḥ | etat kṣhetraṁ samāsena sa-vikāram udāhṛitam",
    english:
      "Desire, hatred, pleasure, pain, the aggregate (body), consciousness, and fortitude — this, briefly stated, is the field along with its modifications.",
    hindi:
      "इच्छा, द्वेष, सुख, दुःख, संघात, चेतना और धृति — यह सविकार क्षेत्र का संक्षिप्त वर्णन किया गया है।",
    meaning:
      "The psychological aspects of the field: desire, hatred, pleasure, pain, the aggregate (saṅghāta — the combined body-mind), consciousness (chetanā), and fortitude (dhṛiti). These are the inner modifications of the field. The entire inner life of ordinary experience belongs to the field — not to the true Self.",
    keywords: ["desire", "hatred", "pleasure", "pain", "consciousness"],
    moodTags: ["wisdom", "philosophy", "self-knowledge"],
  },
  {
    id: "13.8",
    chapter: 13,
    verse: 8,
    sanskrit:
      "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् | आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः ||",
    transliteration:
      "amānitvam adambhitvam ahiṁsā kṣhāntir ārjavam | āchāryopāsanaṁ śhauchaṁ sthairyam ātma-vinigrahaḥ",
    english:
      "Humility, unpretentiousness, non-violence, tolerance, simplicity, serving the teacher, cleanliness, steadfastness, and self-restraint —",
    hindi:
      "अमानिता, अदम्भिता, अहिंसा, क्षमा, सरलता, गुरुसेवा, शुद्धता, स्थिरता और आत्म-संयम —",
    meaning:
      "Krishna begins listing the qualities of true jñāna (knowledge). Nine qualities here: humility (amānita), freedom from pride (adambhitva), non-violence (ahiṁsā), tolerance (kṣhānti), simplicity/straightforwardness (ārjava), service to the teacher (āchāryopāsana), purity (śhaucha), steadfastness (sthairya), and self-restraint (ātma-vinigraha).",
    keywords: ["humility", "non-violence", "tolerance", "purity", "teacher"],
    moodTags: ["wisdom", "discipline", "virtue"],
  },
  {
    id: "13.9",
    chapter: 13,
    verse: 9,
    sanskrit: "इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च | जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम् ||",
    transliteration:
      "indriyārtheṣhu vairāgyam anahaṅkāra eva cha | janma-mṛityu-jarā-vyādhi-duḥkha-doṣhānudarśhanam",
    english:
      "Dispassion toward sense objects, absence of ego, and seeing the evil in birth, death, old age, disease, and suffering —",
    hindi:
      "इन्द्रिय विषयों में वैराग्य, अहंकार का अभाव, जन्म, मृत्यु, वृद्धावस्था, रोग और दुःख में दोषदर्शन —",
    meaning:
      "More qualities of jñāna: vairāgya (dispassion toward sense pleasures), anahaṅkāra (absence of ego-identity), and the practice of seeing the inherent suffering (doṣha) in birth, death, old age, disease, and pain. This clear-seeing of suffering motivates the seeker to pursue liberation.",
    keywords: ["dispassion", "ego", "death", "suffering", "liberation"],
    moodTags: ["wisdom", "detachment", "philosophy"],
  },
  {
    id: "13.10",
    chapter: 13,
    verse: 10,
    sanskrit:
      "असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु | नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु ||",
    transliteration:
      "asaktiranabhiṣhvaṅgaḥ putra-dāra-gṛihādiṣhu | nityaṁ cha sama-chittatvam iṣhṭāniṣhṭopapattiṣhu",
    english:
      "Non-attachment and non-clinging to sons, wives, homes, and so on, and constant equanimity toward both pleasant and unpleasant events —",
    hindi:
      "पुत्र, पत्नी, घर आदि में आसक्ति और मोह का अभाव, तथा इष्ट और अनिष्ट की प्राप्ति में सदा समचित्तता —",
    meaning:
      "Continuing jñāna qualities: asakti (non-attachment) and anabhiṣhvaṅga (non-clinging) toward family, home, possessions. And sama-chittatva — equal-mindedness toward what is pleasant and unpleasant. This is not coldness but freedom from compulsive attachment that causes suffering.",
    keywords: ["non-attachment", "equanimity", "family", "detachment", "peace"],
    moodTags: ["detachment", "peace", "wisdom", "equanimity"],
  },
  {
    id: "13.11",
    chapter: 13,
    verse: 11,
    sanskrit: "मयि चानन्ययोगेन भक्तिरव्यभिचारिणी | विविक्तदेशसेवित्वमरतिर्जनसंसदि ||",
    transliteration:
      "mayi chānanya-yogena bhaktir avyabhichāriṇī | vivikta-deśha-sevitvam aratir jana-saṁsadi",
    english:
      "Exclusive devotion to Me through unswerving yoga, resorting to solitary places, and distaste for the company of ordinary people —",
    hindi:
      "अनन्य योग से मेरी अव्यभिचारिणी भक्ति, एकांत स्थान का सेवन और सांसारिक लोगों की संगति में अरुचि —",
    meaning:
      "Three more jñāna qualities: avyabhichāriṇī bhakti — exclusive, unswerving devotion to Krishna (not divided among worldly objects); vivikta-deśha-sevitva — preference for solitude for practice; and distaste for the company of worldly, distracted people. Solitude allows depth of practice.",
    keywords: ["devotion", "exclusive", "solitude", "yoga", "practice"],
    moodTags: ["devotion", "solitude", "wisdom"],
  },
  {
    id: "13.12",
    chapter: 13,
    verse: 12,
    sanskrit:
      "अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम् | एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा ||",
    transliteration:
      "adhyātma-jñāna-nityatvaṁ tattva-jñānārtha-darśhanam | etaj jñānam iti proktam ajñānaṁ yad ato'nyathā",
    english:
      "Steadfastness in self-knowledge and seeing the goal of knowledge of Truth — all this is declared to be knowledge. What is contrary to this is ignorance.",
    hindi:
      "आत्मज्ञान में नित्य स्थिति, और तत्त्वज्ञान के प्रयोजन में दृष्टि — यह सब ज्ञान कहा जाता है; इससे विपरीत जो है वह अज्ञान है।",
    meaning:
      "The culminating definition of jñāna: constant abidance in self-knowledge (adhyātma-jñāna-nityatva) and seeing the purpose of knowing Truth (tattvajñāna). Everything contrary to these twenty qualities of jñāna is ajñāna — ignorance. This is a complete map of wisdom vs. ignorance.",
    keywords: ["self-knowledge", "truth", "wisdom", "ignorance", "constant"],
    moodTags: ["wisdom", "self-knowledge", "philosophy"],
  },
  {
    id: "13.13",
    chapter: 13,
    verse: 13,
    sanskrit:
      "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते | अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते ||",
    transliteration:
      "jñeyaṁ yat tat pravakṣhyāmi yaj jñātvāmṛitam aśhnute | anādi mat-paraṁ brahma na sat tan nāsad uchyate",
    english:
      "I will now declare that which ought to be known, knowing which one attains immortality. The beginningless Supreme Brahman is said to be neither being nor non-being.",
    hindi:
      "जो जानने योग्य है, उसे मैं बताऊँगा, जिसे जानकर मनुष्य अमृत को प्राप्त होता है। वह अनादि परब्रह्म न सत् कहा जाता है, न असत्।",
    meaning:
      "The object of knowledge: the Supreme Brahman. It is anādi (beginningless), beyond all ordinary categories, and cannot be described as either existent (sat) or non-existent (asat) — it transcends both being and non-being. Knowing Brahman means attaining immortality (amṛita). This is one of the most profound verses on the nature of ultimate reality.",
    keywords: ["Brahman", "immortality", "beginningless", "beyond", "supreme"],
    moodTags: ["wisdom", "divine", "philosophy", "liberation"],
  },
  {
    id: "13.14",
    chapter: 13,
    verse: 14,
    sanskrit:
      "सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम् | सर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति ||",
    transliteration:
      "sarvataḥ pāṇi-pādaṁ tat sarvato'kṣhi-śhiro-mukham | sarvataḥ śhrutimal loke sarvam āvṛitya tiṣhṭhati",
    english:
      "It has hands and feet everywhere, eyes, heads, and faces everywhere, ears everywhere — it stands pervading everything in the world.",
    hindi:
      "उसके सर्वत्र हाथ और पाँव हैं, सर्वत्र आँखें, सिर और मुख हैं, सर्वत्र कान हैं — वह सब ओर से इस जगत् को व्याप्त करके स्थित है।",
    meaning:
      "Brahman's omnipresence is described poetically: having hands and feet in all directions means it is the source of all activity everywhere; having eyes, heads, and ears everywhere means it perceives through all creatures. Brahman pervades and envelops the entire universe — it is the cosmic consciousness underlying all existence.",
    keywords: ["omnipresent", "pervading", "Brahman", "cosmic", "everywhere"],
    moodTags: ["divine", "wonder", "philosophy"],
  },
  {
    id: "13.15",
    chapter: 13,
    verse: 15,
    sanskrit:
      "सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम् | असक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च ||",
    transliteration:
      "sarvendriya-guṇābhāsaṁ sarvendriya-vivarjitam | asaktaṁ sarva-bhṛich chaiva nirguṇaṁ guṇa-bhoktṛi cha",
    english:
      "It appears to function through all the senses yet is without any senses. It is unattached yet supports everything. It is without the gunas yet it is the experiencer of the gunas.",
    hindi:
      "यह सभी इन्द्रियों के गुणों का आभास देता है, फिर भी सभी इन्द्रियों से रहित है। आसक्ति से रहित होते हुए भी सबका धारण करता है। निर्गुण है फिर भी गुणों का भोक्ता है।",
    meaning:
      "Brahman's paradoxical nature: it appears to sense through all senses but has no senses; it sustains everything while remaining unattached; it is beyond the gunas (nirguṇa) yet it appears as the experiencer of gunas (guṇa-bhoktṛi). These apparent paradoxes point to the transcendent nature of ultimate reality.",
    keywords: ["senses", "gunas", "unattached", "paradox", "Brahman"],
    moodTags: ["philosophy", "wisdom", "wonder"],
  },
  {
    id: "13.16",
    chapter: 13,
    verse: 16,
    sanskrit: "बहिरन्तश्च भूतानामचरं चरमेव च | सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ||",
    transliteration:
      "bahir antaśh cha bhūtānām acharaṁ charam eva cha | sūkṣhmatvāt tad avijñeyaṁ dūra-sthaṁ chāntike cha tat",
    english:
      "It exists outside and inside all beings; it is both the moving and the non-moving. It is so subtle that it cannot be comprehended; it is far away, yet it is near.",
    hindi:
      "यह समस्त प्राणियों के बाहर और भीतर है; चर और अचर दोनों में है। अत्यंत सूक्ष्म होने के कारण यह अज्ञेय है; यह दूर भी है और निकट भी।",
    meaning:
      "Brahman is simultaneously inside and outside all beings, both the animate (chara) and inanimate (achara), both near and far. Its subtlety makes it incomprehensible to the ordinary mind. It is the closest reality — more intimate than one's own thoughts — yet the ignorant mind cannot perceive it.",
    keywords: ["inside", "outside", "subtle", "near", "far"],
    moodTags: ["philosophy", "wisdom", "divine"],
  },
  {
    id: "13.17",
    chapter: 13,
    verse: 17,
    sanskrit:
      "अविभक्तं च भूतेषु विभक्तमिव च स्थितम् | भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च ||",
    transliteration:
      "avibhaktaṁ cha bhūteṣhu vibhaktam iva cha sthitam | bhūta-bhartṛi cha taj jñeyaṁ grasiṣhṇu prabhaviṣhṇu cha",
    english:
      "Though undivided, it appears to exist divided among all beings. It is to be known as the sustainer of all beings, the devourer, and the creator.",
    hindi:
      "यह प्राणियों में अविभक्त होते हुए भी विभक्त-सा स्थित है। यह जानने योग्य सभी का पालनकर्ता, संहारकर्ता और उत्पत्तिकर्ता है।",
    meaning:
      "Though one undivided consciousness, Brahman appears divided as individual souls in countless bodies. It is the sustainer (bhūta-bhartṛi), the devourer/absorber (grasiṣhṇu), and the creator (prabhaviṣhṇu) — encompassing the entire cosmic cycle of creation, maintenance, and dissolution.",
    keywords: [
      "undivided",
      "sustainer",
      "creator",
      "devourer",
      "consciousness",
    ],
    moodTags: ["philosophy", "divine", "wonder"],
  },
  {
    id: "13.18",
    chapter: 13,
    verse: 18,
    sanskrit:
      "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते | ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम् ||",
    transliteration:
      "jyotiṣhām api taj jyotis tamasaḥ param uchyate | jñānaṁ jñeyaṁ jñāna-gamyaṁ hṛidi sarvasya viṣhṭhitam",
    english:
      "It is the light of all lights, said to be beyond darkness. It is knowledge, the object of knowledge, and the goal of knowledge. It is seated in the hearts of all.",
    hindi:
      "यह सभी प्रकाशों का भी प्रकाश है, अंधकार से परे कहा जाता है। यह ज्ञान है, ज्ञेय है, ज्ञान का लक्ष्य है और सबके हृदय में विराजमान है।",
    meaning:
      "One of the most luminous verses in the Gita: Brahman is jyotiṣhām jyoti — the light of all lights, beyond even the darkness of ignorance. It is simultaneously jñāna (knowledge), jñeya (what is to be known), and jñāna-gamya (the goal of knowledge). And it is seated in the heart of every being — already present, always accessible.",
    keywords: ["light", "knowledge", "heart", "beyond darkness", "Brahman"],
    moodTags: ["divine", "wisdom", "hope", "light"],
  },
  {
    id: "13.19",
    chapter: 13,
    verse: 19,
    sanskrit:
      "इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः | मद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते ||",
    transliteration:
      "iti kṣhetraṁ tathā jñānaṁ jñeyaṁ choktaṁ samāsataḥ | mad-bhakta etad vijñāya mad-bhāvāyopapadyate",
    english:
      "Thus the field, knowledge, and the object of knowledge have been briefly described. Understanding this, My devotee becomes qualified to attain My nature.",
    hindi:
      "इस प्रकार क्षेत्र, ज्ञान और ज्ञेय का संक्षेप में वर्णन किया गया। मेरा भक्त इसे जानकर मेरे स्वरूप को प्राप्त होने के योग्य हो जाता है।",
    meaning:
      "The summary: the field, the knowledge-qualities, and the object of knowledge (Brahman) have been described. Understanding these three, the devotee of Krishna becomes qualified to realize Krishna's own nature (mad-bhāva). This is the culmination of jñāna leading to liberation through bhakti.",
    keywords: ["field", "knowledge", "devotee", "attain", "nature"],
    moodTags: ["wisdom", "devotion", "liberation"],
  },
  {
    id: "13.20",
    chapter: 13,
    verse: 20,
    sanskrit:
      "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि | विकारांश्च गुणांश्चैव विद्धि प्रकृतिसम्भवान् ||",
    transliteration:
      "prakṛitiṁ puruṣhaṁ chaiva viddhy anādī ubhāv api | vikārāṁśh cha guṇāṁśh chaiva viddhi prakṛiti-sambhavān",
    english:
      "Know that both Prakriti and Purusha are beginningless. And know that all modifications and the three gunas are born of Prakriti.",
    hindi:
      "प्रकृति और पुरुष — दोनों अनादि हैं, ऐसा जान। तथा सभी विकार और गुण प्रकृति से उत्पन्न हैं, ऐसा जान।",
    meaning:
      "The Sāṅkhya metaphysics: both Prakriti (matter/nature) and Purusha (spirit/consciousness) are beginningless — neither was created. All modifications of the body-mind (vikāra) and the three gunas (sattva, rajas, tamas) arise from Prakriti, not from Purusha.",
    keywords: [
      "prakriti",
      "purusha",
      "beginningless",
      "gunas",
      "modifications",
    ],
    moodTags: ["philosophy", "wisdom", "knowledge"],
  },
  {
    id: "13.21",
    chapter: 13,
    verse: 21,
    sanskrit: "कार्यकारणकर्तृत्वे हेतुः प्रकृतिरुच्यते | पुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते ||",
    transliteration:
      "kārya-kāraṇa-kartṛitve hetuḥ prakṛitir uchyate | puruṣhaḥ sukha-duḥkhānāṁ bhoktṛitve hetur uchyate",
    english:
      "Prakriti is said to be the cause of action, instrument, and doership; Purusha is said to be the cause of experiencing pleasure and pain.",
    hindi:
      "कार्य और कारण की उत्पत्ति में हेतु प्रकृति कही जाती है; सुख और दुःख के भोग में हेतु पुरुष कहा जाता है।",
    meaning:
      "A critical distinction: Prakriti (with its gunas) is responsible for all doing — the body acts, the ego claims doership, everything happens through Prakriti. But the experiencing of pleasure and pain — that is attributed to Purusha. The soul (mistakenly) identifies with the body's joys and sorrows when it is actually the witness.",
    keywords: ["prakriti", "purusha", "doership", "pleasure", "pain"],
    moodTags: ["philosophy", "wisdom", "self-knowledge"],
  },
  {
    id: "13.22",
    chapter: 13,
    verse: 22,
    sanskrit:
      "पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान् | कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु ||",
    transliteration:
      "puruṣhaḥ prakṛiti-stho hi bhuṅkte prakṛiti-jān guṇān | kāraṇaṁ guṇa-saṅgo'sya sad-asad-yoni-janmasu",
    english:
      "The Purusha, dwelling in Prakriti, experiences the gunas born of Prakriti. Attachment to the gunas is the cause of its birth in good and evil wombs.",
    hindi:
      "प्रकृति में स्थित पुरुष प्रकृति से उत्पन्न गुणों का भोग करता है। गुणों में आसक्ति ही उसके अच्छी और बुरी योनियों में जन्म लेने का कारण है।",
    meaning:
      "The root of rebirth: Purusha, residing in Prakriti (in a body), experiences the play of the three gunas. Attachment to these gunas creates the karma that determines future births in higher or lower forms. Liberation requires dis-identification from the gunas.",
    keywords: ["rebirth", "gunas", "attachment", "liberation", "soul"],
    moodTags: ["philosophy", "wisdom", "karma"],
  },
  {
    id: "13.23",
    chapter: 13,
    verse: 23,
    sanskrit:
      "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः | परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः ||",
    transliteration:
      "upadraṣhṭānumantā cha bhartā bhoktā maheśhvaraḥ | paramātmeti chāpy ukto dehe'smin puruṣhaḥ paraḥ",
    english:
      "The Supreme Purusha in this body is also called the witness, the permitter, the supporter, the experiencer, the great Lord, and also the Supreme Soul.",
    hindi:
      "इस देह में परम पुरुष उपद्रष्टा, अनुमन्ता, भर्ता, भोक्ता, महेश्वर और परमात्मा भी कहा जाता है।",
    meaning:
      "The Supreme Purusha (Paramātmā) has six aspects in the body: upadraṣhṭā (witness), anumantā (permitter/sanctioner), bhartā (supporter), bhoktā (experiencer), maheśhvara (great Lord), and Paramātmā (Supreme Self). This is the indwelling divine presence — distinct from the individual soul (jīva) yet residing in the same body.",
    keywords: ["witness", "supreme soul", "permitter", "lord", "body"],
    moodTags: ["divine", "wisdom", "self-knowledge"],
  },
  {
    id: "13.24",
    chapter: 13,
    verse: 24,
    sanskrit:
      "य एवं वेत्ति पुरुषं प्रकृतिं च गुणैः सह | सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते ||",
    transliteration:
      "ya evaṁ vetti puruṣhaṁ prakṛitiṁ cha guṇaiḥ saha | sarvathā vartamāno'pi na sa bhūyo'bhijāyate",
    english:
      "One who knows the Purusha and Prakriti along with its gunas — regardless of how they live — is not born again.",
    hindi:
      "जो इस प्रकार पुरुष और गुणों सहित प्रकृति को जानता है, वह चाहे किसी भी अवस्था में हो — पुनः जन्म नहीं लेता।",
    meaning:
      "The liberating power of knowledge: one who truly understands the distinction between Purusha and Prakriti (with its gunas), regardless of their external life circumstances, is freed from rebirth. Jñāna — knowledge of this distinction — is itself the liberation.",
    keywords: ["knowledge", "liberation", "rebirth", "purusha", "prakriti"],
    moodTags: ["liberation", "wisdom", "hope"],
  },
  {
    id: "13.25",
    chapter: 13,
    verse: 25,
    sanskrit:
      "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना | अन्ये साङ्ख्येन योगेन कर्मयोगेन चापरे ||",
    transliteration:
      "dhyānena ātmani paśhyanti kechid ātmānam ātmanā | anye sāṅkhyena yogena karma-yogena chāpare",
    english:
      "Some perceive the Self within themselves through meditation; others through the yoga of knowledge (Sankhya); and others through the yoga of action.",
    hindi:
      "कुछ लोग ध्यान द्वारा आत्मा में आत्मा को देखते हैं; कुछ सांख्य-योग द्वारा; और अन्य कर्म-योग द्वारा।",
    meaning:
      "Three valid paths to Self-realization: dhyāna yoga (meditation), Sāṅkhya yoga (knowledge/discrimination of Purusha from Prakriti), and karma yoga (selfless action). Krishna acknowledges all three as genuine paths to the same destination — seeing the Self.",
    keywords: ["meditation", "knowledge", "action", "self", "paths"],
    moodTags: ["wisdom", "guidance", "paths"],
  },
  {
    id: "13.26",
    chapter: 13,
    verse: 26,
    sanskrit:
      "अन्ये त्वेवमजानन्तः श्रुत्वान्येभ्य उपासते | तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः ||",
    transliteration:
      "anye tv evam ajānantaḥ śhrutvānyebhya upāsate | te'pi chātitaranty eva mṛityuṁ śhruti-parāyaṇāḥ",
    english:
      "Yet others, not knowing this through their own inquiry, hear from others and worship accordingly. They also cross over death, dedicated to what they have heard.",
    hindi:
      "कुछ अन्य इस प्रकार नहीं जानते, परंतु दूसरों से सुनकर उपासना करते हैं। वे भी श्रुति-परायण होकर मृत्यु को पार कर जाते हैं।",
    meaning:
      "Even those who cannot directly know through meditation or analysis can cross death through śhravana — hearing from realized teachers and following with faith. This is the path of śhruti-parāyaṇa — being devoted to what is heard from the wise. Śravaṇa (hearing) is a valid path to liberation.",
    keywords: ["hearing", "faith", "liberation", "death", "teacher"],
    moodTags: ["hope", "faith", "guidance"],
  },
  {
    id: "13.27",
    chapter: 13,
    verse: 27,
    sanskrit:
      "यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम् | क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ ||",
    transliteration:
      "yāvat sañjāyate kiñchit sattvaṁ sthāvara-jaṅgamam | kṣhetra-kṣhetrajña-saṁyogāt tad viddhi bharatarṣhabha",
    english:
      "O best of the Bharatas, whatever being is born — movable or immovable — know that it arises from the union of the field and the knower of the field.",
    hindi:
      "हे भरतश्रेष्ठ! जो कुछ भी स्थावर या जंगम प्राणी उत्पन्न होते हैं, उन्हें क्षेत्र और क्षेत्रज्ञ के संयोग से उत्पन्न जानो।",
    meaning:
      "All existence — from the unmoving (plants, mountains) to the moving (animals, humans) — arises from the union of kṣhetra (the field of Prakriti) and kṣhetra-jña (the knower, consciousness/Purusha). Without this union of matter and consciousness, nothing manifests. This is the fundamental cosmology.",
    keywords: ["creation", "union", "field", "knower", "existence"],
    moodTags: ["philosophy", "wisdom", "creation"],
  },
  {
    id: "13.28",
    chapter: 13,
    verse: 28,
    sanskrit:
      "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम् | न हिनस्त्यात्मनात्मानं ततो याति परां गतिम् ||",
    transliteration:
      "samaṁ paśhyan hi sarvatra samavasthitam īśhvaram | na hinasty ātmanātmānaṁ tato yāti parāṁ gatim",
    english:
      "One who sees the Lord equally present everywhere does not destroy the self by the self, and thus attains the supreme destination.",
    hindi:
      "जो सर्वत्र समान रूप से स्थित ईश्वर को देखता है, वह अपने द्वारा अपने को नष्ट नहीं करता — और इससे वह परम गति को प्राप्त होता है।",
    meaning:
      "The vision of equality: seeing the same divine presence in all beings and all places. One who perceives this does not degrade oneself (na hinasty ātmanā ātmānam — does not destroy the self with the self) through ignorance and desires. This equal vision leads to parā gati — the supreme destination of liberation.",
    keywords: ["equality", "Lord", "everywhere", "liberation", "vision"],
    moodTags: ["wisdom", "liberation", "divine", "peace"],
  },
  {
    id: "13.29",
    chapter: 13,
    verse: 29,
    sanskrit:
      "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः | यः पश्यति तथात्मानमकर्तारं स पश्यति ||",
    transliteration:
      "prakṛityaiva cha karmāṇi kriyamāṇāni sarvaśhaḥ | yaḥ paśhyati tathātmānam akartāraṁ sa paśhyati",
    english:
      "One who sees all actions being performed by Prakriti alone, and that the Self is not the doer — that person truly sees.",
    hindi:
      "जो देखता है कि सभी कर्म प्रकृति द्वारा ही किए जाते हैं, और आत्मा अकर्ता है — वह सच्चा दृष्टि रखता है।",
    meaning:
      "The key insight of karma and liberation: all actions happen through Prakriti (body-mind-senses acting through gunas). The true Self (Purusha/Ātman) is akartā — not the doer. Seeing this clearly destroys the false sense of personal doership (ego) which is the root of all bondage and karma.",
    keywords: ["doership", "prakriti", "self", "action", "liberation"],
    moodTags: ["wisdom", "liberation", "detachment"],
  },
  {
    id: "13.30",
    chapter: 13,
    verse: 30,
    sanskrit: "यदा भूतपृथग्भावमेकस्थमनुपश्यति | तत एव च विस्तारं ब्रह्म सम्पद्यते तदा ||",
    transliteration:
      "yadā bhūta-pṛithag-bhāvam eka-stham anupaśhyati | tata eva cha vistāraṁ brahma sampadyate tadā",
    english:
      "When one perceives the diversity of all beings as resting in the One, and their expansion from that One alone — then one attains Brahman.",
    hindi:
      "जब व्यक्ति समस्त प्राणियों की पृथकता को एक में स्थित देखता है और उसी से उनका विस्तार देखता है — तब वह ब्रह्म को प्राप्त होता है।",
    meaning:
      "The unity vision: all apparent diversity of beings rests in the one Brahman, and expands from that one source alone. When a seeker perceives this non-dual reality — that multiplicity is rooted in unity — they attain Brahman. This is the advaita realization.",
    keywords: ["unity", "diversity", "Brahman", "One", "realization"],
    moodTags: ["wisdom", "liberation", "unity", "divine"],
  },
  {
    id: "13.31",
    chapter: 13,
    verse: 31,
    sanskrit:
      "अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः | शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते ||",
    transliteration:
      "anāditvān nirguṇatvāt paramātmāyam avyayaḥ | śharīra-stho'pi kaunteya na karoti na lipyate",
    english:
      "O son of Kunti, the imperishable Supreme Self, being beginningless and without the gunas, though dwelling in the body, neither acts nor is stained.",
    hindi:
      "हे कौन्तेय! अनादि और निर्गुण होने के कारण यह अव्यय परमात्मा शरीर में रहते हुए भी न करता है न लिप्त होता है।",
    meaning:
      "The Paramātmā's transcendence: although dwelling within every body, it is beginningless (anādī), beyond the gunas (nirguṇa), imperishable (avyaya), and does not act (na karoti) nor is ever stained by actions (na lipyate). Just as space contains everything without being tainted by anything within it.",
    keywords: [
      "supreme self",
      "unstained",
      "beginningless",
      "beyond gunas",
      "body",
    ],
    moodTags: ["philosophy", "divine", "wisdom"],
  },
  {
    id: "13.32",
    chapter: 13,
    verse: 32,
    sanskrit:
      "यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते | सर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते ||",
    transliteration:
      "yathā sarva-gataṁ saukṣhmyād ākāśhaṁ nopalipyate | sarvatrāvasthito dehe tathātmā nopalipyate",
    english:
      "Just as all-pervading space is not tainted due to its subtlety, so the Self dwelling everywhere in the body is not tainted.",
    hindi:
      "जैसे सर्वव्यापी आकाश सूक्ष्म होने के कारण लिप्त नहीं होता, उसी प्रकार देह में सर्वत्र व्याप्त आत्मा भी लिप्त नहीं होता।",
    meaning:
      "A beautiful analogy: space (ākāśha) pervades everything — even sewers and sacred temples — yet it is never stained by anything within it due to its subtle, non-physical nature. Similarly, the ātman pervades the entire body (with its passions, disease, and decay) yet is never stained or affected.",
    keywords: ["space", "ātman", "unstained", "analogy", "purity"],
    moodTags: ["wisdom", "philosophy", "purity"],
  },
  {
    id: "13.33",
    chapter: 13,
    verse: 33,
    sanskrit:
      "यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः | क्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत ||",
    transliteration:
      "yathā prakāśhayaty ekaḥ kṛitsnaṁ lokam imaṁ raviḥ | kṣhetraṁ kṣhetrī tathā kṛitsnaṁ prakāśhayati bhārata",
    english:
      "O descendant of Bharata, just as the one sun illumines the entire world, so the owner of the field (the Self) illumines the entire field.",
    hindi:
      "हे भारत! जैसे एक सूर्य इस सम्पूर्ण लोक को प्रकाशित करता है, उसी प्रकार क्षेत्री (आत्मा) सम्पूर्ण क्षेत्र को प्रकाशित करता है।",
    meaning:
      "The sun analogy: one sun illumines the entire world from a single location. Similarly, the one Self (kṣhetrī — owner of the field) illumines the entire body-mind complex with consciousness. There is only one light of awareness that makes all experience possible — and that is the ātman.",
    keywords: ["sun", "illumination", "self", "consciousness", "field"],
    moodTags: ["wisdom", "light", "philosophy", "divine"],
  },
  {
    id: "13.34",
    chapter: 13,
    verse: 34,
    sanskrit:
      "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा | भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम् ||",
    transliteration:
      "kṣhetra-kṣhetrajñayor evam antaraṁ jñāna-chakṣhuṣhā | bhūta-prakṛiti-mokṣhaṁ cha ye vidur yānti te param",
    english:
      "Those who, with the eye of knowledge, perceive the distinction between the field and the knower of the field, and the liberation from the nature of all beings — they attain the Supreme.",
    hindi:
      "जो ज्ञान-नेत्र से क्षेत्र और क्षेत्रज्ञ के अंतर को देखते हैं और भूतप्रकृति से मोक्ष को जानते हैं — वे परम को प्राप्त होते हैं।",
    meaning:
      "The glorious conclusion of Chapter 13: those who perceive with jñāna-chakṣhu (the eye of wisdom) the difference between the field (Prakriti/body-mind) and the knower (Purusha/Self), and know liberation from material nature — they attain the Supreme. This is the culminating teaching on self-knowledge leading to liberation.",
    keywords: [
      "eye of knowledge",
      "distinction",
      "liberation",
      "supreme",
      "wisdom",
    ],
    moodTags: ["liberation", "wisdom", "divine", "hope"],
  },
];
