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

export const GITA_VERSES_CH1: GitaVerse[] = [
  {
    id: "1.1",
    chapter: 1,
    verse: 1,
    sanskrit:
      "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
    transliteration:
      "dhṛitarāśhtra uvācha | dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāśh chaiva kim akurvata sañjaya",
    english:
      "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the sacred plain of Kurukshetra, eager for battle?",
    hindi:
      "धृतराष्ट्र बोले: हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्रित हुए मेरे और पाण्डु के पुत्रों ने क्या किया?",
    meaning:
      "The blind king Dhritarashtra asks Sanjaya about the events on the battlefield of Kurukshetra. The use of 'dharma-kshetra' reveals his anxiety — he knows this is a field of righteousness where his unrighteous sons will face consequences.",
    keywords: ["kurukshetra", "dharma", "battle", "dhritarashtra", "sanjaya"],
    moodTags: ["anxiety", "conflict", "duty"],
  },
  {
    id: "1.2",
    chapter: 1,
    verse: 2,
    sanskrit:
      "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||",
    transliteration:
      "sañjaya uvācha | dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā | āchāryam upasaṅgamya rājā vachanam abravīt",
    english:
      "Sanjaya said: O King, having seen the army of the Pandavas arrayed in battle formation, King Duryodhana then approached his teacher Dronacharya and spoke these words.",
    hindi:
      "संजय बोले: उस समय राजा दुर्योधन ने पाण्डवों की सेना को व्यूहबद्ध देखकर अपने आचार्य द्रोण के पास जाकर यह वचन कहे।",
    meaning:
      "Sanjaya begins his narration. Duryodhana approaches Drona with apprehension upon seeing the well-arranged Pandava forces, indicating his inner fear despite outward bravado.",
    keywords: ["duryodhana", "drona", "army", "pandava", "formation"],
    moodTags: ["fear", "conflict", "pride"],
  },
  {
    id: "1.3",
    chapter: 1,
    verse: 3,
    sanskrit:
      "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||",
    transliteration:
      "paśhyaitāṁ pāṇḍu-putrāṇām āchārya mahatīṁ chamūm | vyūḍhāṁ drupada-putreṇa tava śhiṣhyeṇa dhīmatā",
    english:
      "Duryodhana said: O teacher, behold this great army of the sons of Pandu, so expertly arrayed in battle formation by your talented disciple, the son of Drupada.",
    hindi:
      "हे आचार्य! पाण्डु-पुत्रों की इस विशाल सेना को देखिए जो आपके बुद्धिमान शिष्य द्रुपद-पुत्र (धृष्टद्युम्न) ने व्यूहबद्ध की है।",
    meaning:
      "Duryodhana subtly taunts Drona by mentioning Dhrishtadyumna — Drona's own student — who is leading the enemy forces. He attempts to provoke Drona's loyalty by highlighting this irony.",
    keywords: ["duryodhana", "drona", "dhrishtadyumna", "army", "formation"],
    moodTags: ["conflict", "pride", "envy"],
  },
  {
    id: "1.4",
    chapter: 1,
    verse: 4,
    sanskrit:
      "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः ||",
    transliteration:
      "atra śhūrā maheṣhvāsā bhīmārjuna-samā yudhi | yuyudhāno virāṭaśh cha drupadaśh cha mahā-rathaḥ",
    english:
      "Here in this army are mighty archers equal to Bhima and Arjuna in battle — Yuyudhana, Virata, and the great chariot-warrior Drupada.",
    hindi:
      "इस सेना में युद्ध में भीम और अर्जुन के समान बड़े-बड़े धनुर्धर वीर हैं — युयुधान, विराट और महारथी द्रुपद।",
    meaning:
      "Duryodhana catalogues the great warriors of the Pandava side, comparing them to Bhima and Arjuna, revealing both his strategic assessment and his underlying anxiety about the coming battle.",
    keywords: ["warriors", "archers", "bhima", "arjuna", "drupada"],
    moodTags: ["conflict", "fear", "admiration"],
  },
  {
    id: "1.5",
    chapter: 1,
    verse: 5,
    sanskrit:
      "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ||",
    transliteration:
      "dhṛiṣhṭaketuśh chekitānaḥ kāśhirājaśh cha vīryavān | purujit kuntibhojaśh cha śhaibyaśh cha nara-puṅgavaḥ",
    english:
      "Also Dhrishtaketu, Chekitana, and the valiant King of Kashi; Purujit, Kuntibhoja, and Shaibya — the bull among men.",
    hindi:
      "धृष्टकेतु, चेकितान और पराक्रमी काशिराज; पुरुजित, कुन्तिभोज और मनुष्यों में श्रेष्ठ शैब्य भी हैं।",
    meaning:
      "Duryodhana continues his enumeration of the Pandava warriors, listing kings and heroes who have allied with the Pandavas. This catalogue shows the vast coalition arrayed against the Kauravas.",
    keywords: ["warriors", "kings", "allies", "pandava", "battle"],
    moodTags: ["conflict", "fear"],
  },
  {
    id: "1.6",
    chapter: 1,
    verse: 6,
    sanskrit:
      "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् | सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ||",
    transliteration:
      "yudhāmanyuśh cha vikrānta uttamaujāśh cha vīryavān | saubhadro draupadeyāśh cha sarva eva mahā-rathāḥ",
    english:
      "The mighty Yudhamanyu and the valiant Uttamauja; the son of Subhadra and the sons of Draupadi — all of them are great chariot-warriors.",
    hindi:
      "पराक्रमी युधामन्यु और वीर उत्तमौजा; सुभद्रा-पुत्र (अभिमन्यु) और द्रौपदी के पुत्र — ये सभी महारथी हैं।",
    meaning:
      "Duryodhana completes his survey of the Pandava side, noting Abhimanyu and Draupadi's sons among the great warriors. His detailed knowledge reveals how carefully he has studied the enemy.",
    keywords: ["abhimanyu", "subhadra", "draupadi", "warriors", "pandava"],
    moodTags: ["conflict", "anxiety"],
  },
  {
    id: "1.7",
    chapter: 1,
    verse: 7,
    sanskrit:
      "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम | नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ||",
    transliteration:
      "asmākaṁ tu viśhiṣhṭā ye tān nibodha dvijottama | nāyakā mama sainyasya sañjñārthaṁ tān bravīmi te",
    english:
      "O best among Brahmins, let me also tell you about the distinguished commanders on our side. I shall name them for your information.",
    hindi:
      "हे द्विजोत्तम! हमारी सेना के जो विशिष्ट सेनापति हैं, उन्हें भी जानिए। आपकी जानकारी के लिए मैं उन्हें बताता हूँ।",
    meaning:
      "Having catalogued the enemy's forces, Duryodhana now turns to enumerate his own commanders, seeking to reassure Drona and himself of their strength. The address 'dvijottama' (best of Brahmins) shows deference.",
    keywords: ["commanders", "kaurava", "army", "drona", "strategy"],
    moodTags: ["pride", "anxiety", "conflict"],
  },
  {
    id: "1.8",
    chapter: 1,
    verse: 8,
    sanskrit:
      "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः | अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ||",
    transliteration:
      "bhavān bhīṣhmaśh cha karṇaśh cha kṛipaśh cha samitiñjayaḥ | aśhvatthāmā vikarṇaśh cha saumadattis tathaiva cha",
    english:
      "Yourself, Bhishma, Karna, and Kripa who is ever victorious in battle; Ashvatthama, Vikarna, and also the son of Somadatta.",
    hindi:
      "आप स्वयं, भीष्म, कर्ण और युद्ध में सदा विजयी कृप; अश्वत्थामा, विकर्ण और सोमदत्त का पुत्र भी।",
    meaning:
      "Duryodhana names his greatest warriors — Bhishma, Karna, Drona, Kripa — the pillars of Kaurava strength. This list shows his confidence in these commanders even as anxiety about the Pandava side lingers.",
    keywords: ["bhishma", "karna", "drona", "kripa", "kaurava", "warriors"],
    moodTags: ["pride", "confidence", "conflict"],
  },
  {
    id: "1.9",
    chapter: 1,
    verse: 9,
    sanskrit:
      "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः | नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ||",
    transliteration:
      "anye cha bahavaḥ śhūrā mad-arthe tyakta-jīvitāḥ | nānā-śhastra-praharaṇāḥ sarve yuddha-viśhāradāḥ",
    english:
      "And many other heroes who are ready to give their lives for my sake, armed with various weapons, all skilled in warfare.",
    hindi:
      "और भी बहुत से शूरवीर हैं जो मेरे लिए अपने प्राण त्यागने के लिए तैयार हैं, विभिन्न शस्त्रों से सुसज्जित, सभी युद्ध में कुशल।",
    meaning:
      "Duryodhana notes the many other valiant warriors who are ready to die for his cause. Despite this confidence, the chapter ends in darkness — suggesting that no amount of strength can overcome adharma.",
    keywords: ["warriors", "sacrifice", "weapons", "battle", "kaurava"],
    moodTags: ["pride", "confidence", "conflict"],
  },
  {
    id: "1.10",
    chapter: 1,
    verse: 10,
    sanskrit:
      "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ||",
    transliteration:
      "aparyāptaṁ tad asmākaṁ balaṁ bhīṣhmābhirakṣhitam | paryāptaṁ tv idam eteṣhāṁ balaṁ bhīmābhirakṣhitam",
    english:
      "Our strength, guarded by Bhishma, is immeasurable and invincible; whereas their strength, guarded by Bhima, is limited and easy to conquer.",
    hindi:
      "भीष्म द्वारा रक्षित हमारी वह सेना सब प्रकार से असीमित है, और भीम द्वारा रक्षित इन पाण्डवों की सेना सीमित है।",
    meaning:
      "Duryodhana attempts to boost morale by comparing the two armies, yet scholars note that some interpret this verse as Duryodhana secretly doubting his own side. The comparison betrays an undercurrent of fear.",
    keywords: ["strength", "bhishma", "bhima", "army", "comparison"],
    moodTags: ["pride", "anxiety", "conflict"],
  },
  {
    id: "1.11",
    chapter: 1,
    verse: 11,
    sanskrit: "अयनेषु च सर्वेषु यथाभागमवस्थिताः | भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ||",
    transliteration:
      "ayaneṣhu cha sarveṣhu yathā-bhāgam avasthitāḥ | bhīṣhmam evābhirakṣhantu bhavantaḥ sarva eva hi",
    english:
      "Therefore, all of you, stationed in your respective positions at every opening in the battle formation, should protect Bhishma in particular.",
    hindi:
      "अतः सभी सैनिक अपने-अपने स्थानों पर खड़े होकर सभी मोर्चों पर सबसे पहले भीष्म की ही रक्षा करें।",
    meaning:
      "Duryodhana gives his strategic command — protect Bhishma above all else, for Bhishma is the cornerstone of Kaurava strength. This reveals his dependence on the grandsire and his recognition of Bhishma's supreme importance.",
    keywords: ["bhishma", "strategy", "protection", "battle", "formation"],
    moodTags: ["conflict", "leadership", "duty"],
  },
  {
    id: "1.12",
    chapter: 1,
    verse: 12,
    sanskrit:
      "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः | सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ||",
    transliteration:
      "tasya sañjanayan harṣhaṁ kuru-vṛiddhaḥ pitāmahaḥ | siṁha-nādaṁ vinadyochchaiḥ śhaṅkhaṁ dadhmau pratāpavān",
    english:
      "Then Bhishma, the great grandsire of the Kurus, the most valorous among them, blew his conch shell loudly like a lion's roar, gladdening Duryodhana's heart.",
    hindi:
      "तब कुरुवंश के वृद्ध पितामह महान् प्रतापी भीष्म ने दुर्योधन के हृदय में हर्ष उत्पन्न करते हुए ऊँची आवाज में सिंहनाद करके शंख बजाया।",
    meaning:
      "Bhishma's roaring conch responds to Duryodhana's anxiety, stirring the warrior spirit. The conch blowing marks the formal commencement of the battle, transforming the philosophical battlefield into a physical one.",
    keywords: ["bhishma", "conch", "battle-cry", "war", "courage"],
    moodTags: ["excitement", "courage", "conflict"],
  },
  {
    id: "1.13",
    chapter: 1,
    verse: 13,
    sanskrit: "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ||",
    transliteration:
      "tataḥ śhaṅkhāśh cha bheryaśh cha paṇavānaka-gomukhāḥ | sahasaivābhyahanyanta sa śhabdas tumulo'bhavat",
    english:
      "Thereupon, conch shells, kettledrums, tabors, drums, and cow-horns suddenly blared forth, and the sound was tumultuous.",
    hindi:
      "तत्पश्चात् शंख, नगारे, ढोल, मृदंग और नरसिंघे एकसाथ बजने लगे। वह शब्द बड़ा भयंकर हुआ।",
    meaning:
      "The Kaurava war drums and instruments respond in kind, creating a tremendous uproar. The cacophony of battle instruments sets the stage for the cosmic confrontation that is about to unfold.",
    keywords: ["conch", "drums", "battle", "sound", "war"],
    moodTags: ["excitement", "fear", "conflict"],
  },
  {
    id: "1.14",
    chapter: 1,
    verse: 14,
    sanskrit:
      "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ | माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ||",
    transliteration:
      "tataḥ śhvetair hayair yukte mahati syandane sthitau | mādhavaḥ pāṇḍavaśh chaiva divyau śhaṅkhau pradadhmatuḥ",
    english:
      "Then, Krishna and Arjuna, standing in their magnificent chariot yoked with white horses, blew their divine conch shells.",
    hindi:
      "तत्पश्चात् श्वेत घोड़ों से युक्त विशाल रथ पर बैठे श्रीकृष्ण और अर्जुन ने अपने दिव्य शंख बजाए।",
    meaning:
      "Krishna (Madhava) and Arjuna respond with their divine conches. The white horses and magnificent chariot symbolize the pure, dharmic side. The divine conches of Krishna and Arjuna carry a spiritual vibration that transcends ordinary battle sounds.",
    keywords: ["krishna", "arjuna", "chariot", "conch", "divine"],
    moodTags: ["divine", "courage", "duty"],
  },
  {
    id: "1.15",
    chapter: 1,
    verse: 15,
    sanskrit:
      "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः | पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ||",
    transliteration:
      "pāñchajanyaṁ hṛiṣhīkeśho devadattaṁ dhanañjayaḥ | pauṇḍraṁ dadhmau mahā-śhaṅkhaṁ bhīma-karmā vṛikodaraḥ",
    english:
      "Krishna blew His conch Panchajanya; Arjuna blew his, Devadatta; and Bhima, the doer of terrible deeds, blew his great conch Paundra.",
    hindi:
      "हृषीकेश (कृष्ण) ने पाञ्चजन्य शंख बजाया; धनञ्जय (अर्जुन) ने देवदत्त शंख बजाया; और भयंकर कर्म करने वाले भीमसेन ने पौण्ड्र नामक महाशंख फूँका।",
    meaning:
      "Each warrior's conch has a name and identity. Krishna's Panchajanya has divine origin; Arjuna's Devadatta was a gift from Agni; Bhima's Paundra roars like a wolf. The naming shows the sacred nature of these instruments.",
    keywords: [
      "krishna",
      "panchajanya",
      "arjuna",
      "devadatta",
      "bhima",
      "conch",
    ],
    moodTags: ["divine", "courage", "battle"],
  },
  {
    id: "1.16",
    chapter: 1,
    verse: 16,
    sanskrit: "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः | नकुलः सहदेवश्च सुघोषमणिपुष्पकौ ||",
    transliteration:
      "anantavijayaṁ rājā kuntī-putro yudhiṣhṭhiraḥ | nakulaḥ sahadevaśh cha sughoṣha-maṇipuṣhpakau",
    english:
      "King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the Sughosa and Manipushpaka.",
    hindi:
      "राजा युधिष्ठिर ने अनन्तविजय शंख बजाया; नकुल और सहदेव ने सुघोष और मणिपुष्पक शंख बजाए।",
    meaning:
      "Each Pandava brother has his divine conch, symbolizing his unique role and character. Yudhishthira's Anantavijaya (eternal victory) reveals his dharmic resolve, while the twins' conches sing in harmony.",
    keywords: ["yudhishthira", "nakula", "sahadeva", "conch", "pandava"],
    moodTags: ["courage", "duty", "harmony"],
  },
  {
    id: "1.17",
    chapter: 1,
    verse: 17,
    sanskrit:
      "काश्यश्च परमेष्वासः शिखण्डी च महारथः | धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः ||",
    transliteration:
      "kāśhyaśh cha parameṣhvāsaḥ śhikhaṇḍī cha mahā-rathaḥ | dhṛiṣhṭadyumno virāṭaśh cha sātyakiśh chāparājitaḥ",
    english:
      "The King of Kashi, an excellent archer; the great chariot-warrior Shikhandi; Dhrishtadyumna, Virata, and the unvanquished Satyaki.",
    hindi: "श्रेष्ठ धनुर्धारी काशीराज; महारथी शिखण्डी; धृष्टद्युम्न, विराट और अजेय सात्यकि।",
    meaning:
      "More Pandava allies blow their conches, each name resonating across the battlefield. Shikhandi's presence is especially significant — he is destined to bring down Bhishma.",
    keywords: ["kashi", "shikhandi", "dhrishtadyumna", "virata", "satyaki"],
    moodTags: ["courage", "battle", "destiny"],
  },
  {
    id: "1.18",
    chapter: 1,
    verse: 18,
    sanskrit:
      "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते | सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक् ||",
    transliteration:
      "drupado draupadeyāśh cha sarvaśhaḥ pṛithivī-pate | saubhadraśh cha mahā-bāhuḥ śhaṅkhān dadhmuḥ pṛithak pṛithak",
    english:
      "O Lord of the earth, Drupada, the sons of Draupadi, and the mighty-armed son of Subhadra all blew their respective conch shells.",
    hindi:
      "हे पृथ्वीपते! द्रुपद, द्रौपदी के पुत्रों ने और महाबाहु अभिमन्यु ने भी अपने-अपने शंख बजाए।",
    meaning:
      "The chorus of Pandava conches is complete. Drupada, Abhimanyu, and Draupadi's sons join the symphony. This collective sound represents the righteous side raising its voice — a divine proclamation that dharma will prevail.",
    keywords: ["drupada", "abhimanyu", "conch", "pandava", "battle"],
    moodTags: ["courage", "unity", "duty"],
  },
  {
    id: "1.19",
    chapter: 1,
    verse: 19,
    sanskrit:
      "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् | नभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् ||",
    transliteration:
      "sa ghoṣho dhārtarāṣhṭrāṇāṁ hṛidayāni vyadārayat | nabhaśh cha pṛithivīṁ chaiva tumulo'bhyanunādayan",
    english:
      "The tumultuous uproar, reverberating through earth and sky, rent the hearts of Dhritarashtra's sons.",
    hindi:
      "वह भयंकर शब्द आकाश और पृथ्वी में गूँजते हुए दुर्योधन के पक्ष के लोगों के हृदयों को विदीर्ण करने लगा।",
    meaning:
      "The powerful vibration of the Pandava conches shakes the very cosmos and tears at the hearts of the Kauravas. Spiritually, the sound of righteousness always disturbs the heart of adharma — truth cannot be silenced.",
    keywords: ["sound", "earth", "sky", "kaurava", "fear", "trembling"],
    moodTags: ["fear", "awe", "conflict"],
  },
  {
    id: "1.20",
    chapter: 1,
    verse: 20,
    sanskrit:
      "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान् कपिध्वजः | प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः ||",
    transliteration:
      "atha vyavasthitān dṛiṣhṭvā dhārtarāṣhṭrān kapi-dhvajaḥ | pravṛitte śhastra-sampāte dhanur udyamya pāṇḍavaḥ",
    english:
      "Then, O King, seeing Dhritarashtra's sons standing arrayed, as weapons were about to clash, Arjuna, whose flag bore the emblem of Hanuman, took up his bow.",
    hindi:
      "तत्पश्चात् कपि-ध्वज (हनुमान के चिह्न वाली ध्वजा वाले) अर्जुन ने शस्त्र-संचालन के आरम्भ होने पर धृतराष्ट्र के पुत्रों को व्यूहबद्ध देखकर धनुष उठाया।",
    meaning:
      "Arjuna raises his bow as the moment of battle arrives. His chariot flag bears Hanuman — symbolizing devotion, strength, and divine blessing. This verse is the pivot point where Arjuna's crisis begins.",
    keywords: ["arjuna", "hanuman", "bow", "battle", "kaurava"],
    moodTags: ["courage", "duty", "conflict"],
  },
  {
    id: "1.21",
    chapter: 1,
    verse: 21,
    sanskrit:
      "हृषीकेशं तदा वाक्यमिदमाह महीपते | अर्जुन उवाच | सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ||",
    transliteration:
      "hṛiṣhīkeśhaṁ tadā vākyam idam āha mahī-pate | arjuna uvācha | senayos ubhayor madhye rathaṁ sthāpaya me'chyuta",
    english:
      "Arjuna then spoke these words to Krishna: O Achyuta (infallible one), please place my chariot between the two armies.",
    hindi: "अर्जुन बोले: हे अच्युत! मेरे रथ को दोनों सेनाओं के बीच में खड़ा कीजिए।",
    meaning:
      "Arjuna asks Krishna to position the chariot between the two armies. Addressing Krishna as 'Achyuta' (the infallible one) is significant — Arjuna intuitively seeks support from the unchanging one even before he knows why.",
    keywords: ["arjuna", "krishna", "chariot", "battlefield", "survey"],
    moodTags: ["courage", "curiosity", "conflict"],
  },
  {
    id: "1.22",
    chapter: 1,
    verse: 22,
    sanskrit:
      "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् | कैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे ||",
    transliteration:
      "yāvad etān nirīkṣhe'haṁ yoddhu-kāmān avasthitān | kair mayā saha yoddhavyam asmin raṇa-samudyame",
    english:
      "So that I may observe those who have come here eager to fight, and see with whom I must do battle in this great combat.",
    hindi:
      "ताकि मैं यहाँ युद्ध के लिए उपस्थित उन लड़ाई-इच्छुक योद्धाओं को देख सकूँ और यह जान सकूँ कि इस युद्ध में मुझे किन-किन के साथ लड़ना है।",
    meaning:
      "Arjuna wants to survey the battlefield — a warrior's natural instinct. But what he will see will shatter his resolve. This verse shows Arjuna's leadership quality, yet also marks the beginning of his emotional crisis.",
    keywords: ["arjuna", "survey", "battle", "warriors", "conflict"],
    moodTags: ["courage", "curiosity", "duty"],
  },
  {
    id: "1.23",
    chapter: 1,
    verse: 23,
    sanskrit:
      "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः | धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ||",
    transliteration:
      "yotsyamānān avekṣhe'haṁ ya ete'tra samāgatāḥ | dhārtarāṣhṭrasya durbuddher yuddhe priya-chikīrṣhavaḥ",
    english:
      "I wish to see those who are assembled here, ready to fight, wishing to please the evil-minded son of Dhritarashtra.",
    hindi:
      "मैं उन लोगों को देखना चाहता हूँ जो यहाँ इकट्ठे हुए हैं और दुर्बुद्धि दुर्योधन को युद्ध में प्रसन्न करना चाहते हैं।",
    meaning:
      "Arjuna identifies Duryodhana as 'evil-minded' — revealing his moral clarity at this point. He wants to see who has chosen to serve adharma. This critical assessment is about to be complicated by what he observes.",
    keywords: ["arjuna", "duryodhana", "survey", "evil", "battle"],
    moodTags: ["anger", "conflict", "duty"],
  },
  {
    id: "1.24",
    chapter: 1,
    verse: 24,
    sanskrit:
      "सञ्जय उवाच | एवमुक्तो हृषीकेशो गुडाकेशेन भारत | सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ||",
    transliteration:
      "sañjaya uvācha | evam ukto hṛiṣhīkeśho guḍākeśhena bhārata | senayos ubhayor madhye sthāpayitvā rathottamam",
    english:
      "Sanjaya said: O Bharata (Dhritarashtra), thus addressed by Gudakesha (Arjuna, conqueror of sleep), Hrishikesha (Krishna) positioned the magnificent chariot between the two armies.",
    hindi:
      "संजय बोले: हे भरत! गुडाकेश (अर्जुन) के इस प्रकार कहने पर हृषीकेश (कृष्ण) ने दोनों सेनाओं के मध्य में उस उत्तम रथ को खड़ा किया।",
    meaning:
      "Sanjaya narrates how Krishna, as the divine charioteer, immediately obeys Arjuna's request. The epithet 'Gudakesha' (conqueror of sleep) for Arjuna and 'Hrishikesha' (lord of senses) for Krishna are deeply meaningful.",
    keywords: ["krishna", "arjuna", "chariot", "battlefield", "sanjaya"],
    moodTags: ["divine", "duty", "conflict"],
  },
  {
    id: "1.25",
    chapter: 1,
    verse: 25,
    sanskrit:
      "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् | उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ||",
    transliteration:
      "bhīṣhma-droṇa-pramukhataḥ sarveṣhāṁ cha mahī-kṣhitām | uvācha pārtha paśhyaitān samavetān kurūn iti",
    english:
      "In front of Bhishma, Drona, and all the rulers of the earth, He (Krishna) said: O Partha, behold all the Kurus assembled here.",
    hindi:
      "भीष्म, द्रोण और समस्त राजाओं के सामने श्रीकृष्ण बोले: हे पार्थ! इन समवेत कौरवों को देखो।",
    meaning:
      "Krishna positions the chariot strategically — directly before Bhishma and Drona, the two greatest warriors Arjuna most reveres. Then He invites Arjuna to 'behold' — the divine teacher setting the stage for the greatest spiritual teaching in history.",
    keywords: ["krishna", "arjuna", "bhishma", "drona", "battlefield"],
    moodTags: ["divine", "conflict", "grief"],
  },
  {
    id: "1.26",
    chapter: 1,
    verse: 26,
    sanskrit:
      "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान् | आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा ||",
    transliteration:
      "tatrāpaśhyat sthitān pārthaḥ pitṝin atha pitāmahān | āchāryān mātulān bhrātṝin putrān pautrān sakhīṁs tathā",
    english:
      "There, Arjuna saw stationed before him: fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends as well.",
    hindi:
      "वहाँ अर्जुन ने देखा कि उनके समक्ष दोनों सेनाओं में पिता, पितामह, आचार्य, मामा, भाई, पुत्र, पौत्र और मित्र खड़े हैं।",
    meaning:
      "This verse is the emotional heart of the chapter. Arjuna sees not enemies, but family. Every word — fathers, grandfathers, teachers — carries the weight of love, memory, and duty. The battlefield becomes a family gathering turned to war.",
    keywords: ["family", "arjuna", "kinsmen", "grief", "conflict"],
    moodTags: ["grief", "love", "conflict", "anxiety"],
  },
  {
    id: "1.27",
    chapter: 1,
    verse: 27,
    sanskrit:
      "श्वशुरान्सुहृदश्चैव सेनयोरुभयोर्अपि | तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् ||",
    transliteration:
      "śhvaśhurān suhṛidaśh chaiva senayos ubhayor api | tān samīkṣhya sa kaunteyaḥ sarvān bandhūn avasthitān",
    english:
      "Fathers-in-law, companions, and relatives in both armies — seeing all these kinsmen standing arrayed, Arjuna, the son of Kunti...",
    hindi:
      "दोनों सेनाओं में खड़े श्वसुरों और मित्रों को भी देखकर, कुंती-पुत्र अर्जुन ने उन सब संबंधियों को...",
    meaning:
      "Arjuna sees his loved ones on both sides — the tragedy is complete. No matter who wins, he loses. The verse trails off, preparing for the devastating emotional collapse that follows in verse 28.",
    keywords: ["arjuna", "kinsmen", "both sides", "grief", "conflict"],
    moodTags: ["grief", "confusion", "love"],
  },
  {
    id: "1.28",
    chapter: 1,
    verse: 28,
    sanskrit:
      "दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् | सीदन्ति मम गात्राणि मुखं च परिशुष्यति ||",
    transliteration:
      "dṛiṣhṭvemaṁ sva-janaṁ kṛiṣhṇa yuyutsuṁ samupasthitam | sīdanti mama gātrāṇi mukhaṁ cha pariśhuṣhyati",
    english:
      "Arjuna said: O Krishna, seeing my own kinsmen arrayed before me in such fighting spirit, my limbs fail and my mouth is parched.",
    hindi:
      "अर्जुन बोले: हे कृष्ण! युद्ध के लिए खड़े इन अपने स्वजनों को देखकर मेरे अंग शिथिल हो रहे हैं और मुँह सूख रहा है।",
    meaning:
      "The first symptoms of Arjuna's grief: physical collapse. His limbs fail, his mouth dries. This is the beginning of what the Gita calls 'vishada yoga' — the yoga of grief, which paradoxically becomes the gateway to the highest knowledge.",
    keywords: ["grief", "arjuna", "kinsmen", "weakness", "battle"],
    moodTags: ["grief", "fear", "confusion", "anxiety"],
  },
  {
    id: "1.29",
    chapter: 1,
    verse: 29,
    sanskrit: "वेपथुश्च शरीरे मे रोमहर्षश्च जायते | गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते ||",
    transliteration:
      "vepathuśh cha śharīre me roma-harṣhaśh cha jāyate | gāṇḍīvaṁ sraṁsate hastāt tvak chaiva paridahyate",
    english:
      "My body quivers, my hair stands on end, my bow slips from my hand, and my skin burns all over.",
    hindi:
      "मेरा शरीर काँप रहा है, रोंगटे खड़े हो रहे हैं, गाण्डीव धनुष मेरे हाथ से गिर रहा है और त्वचा जल रही है।",
    meaning:
      "The physical symptoms of Arjuna's despair intensify. The Gandiva bow slipping — the greatest warrior's weapon failing him — is profoundly symbolic. The warrior's identity is dissolving, making way for the seeker's emergence.",
    keywords: ["arjuna", "grief", "gandiva", "weakness", "despair"],
    moodTags: ["grief", "fear", "despair", "crisis"],
  },
  {
    id: "1.30",
    chapter: 1,
    verse: 30,
    sanskrit:
      "न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः | निमित्तानि च पश्यामि विपरीतानि केशव ||",
    transliteration:
      "na cha śhaknomy avasthātuṁ bhramatīva cha me manaḥ | nimittāni cha paśhyāmi viparītāni keśhava",
    english:
      "I am unable to stand here any longer; my mind seems to whirl and I foresee only evil omens, O Keshava (Krishna).",
    hindi:
      "हे केशव! मैं यहाँ खड़ा रहने में असमर्थ हूँ, मेरा मन भ्रमित-सा हो रहा है और मुझे विपरीत शकुन दिखाई दे रहे हैं।",
    meaning:
      "Arjuna's mental state collapses — he cannot stand, his mind spins, he sees evil omens. The greatest warrior is brought to his knees not by enemy arrows but by the arrows of love and attachment.",
    keywords: ["arjuna", "confusion", "omens", "weakness", "grief"],
    moodTags: ["grief", "fear", "despair", "confusion"],
  },
  {
    id: "1.31",
    chapter: 1,
    verse: 31,
    sanskrit:
      "न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे | न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ||",
    transliteration:
      "na cha śhreyo'nupaśhyāmi hatvā sva-janam āhave | na kāṅkṣhe vijayaṁ kṛiṣhṇa na cha rājyaṁ sukhāni cha",
    english:
      "I do not see how any good can come from killing my own kinsmen in battle. O Krishna, I desire neither victory, nor kingdom, nor pleasures.",
    hindi:
      "हे कृष्ण! मुझे इस युद्ध में अपने स्वजनों को मारकर कोई कल्याण नहीं दिखता। मुझे न विजय की इच्छा है, न राज्य की, न सुखों की।",
    meaning:
      "Arjuna's lament deepens into philosophy — what is the use of victory built on the blood of family? He renounces desire for victory, kingdom, and pleasure. Spiritually, this is a crucial moment of detachment — though confused, it is real.",
    keywords: ["arjuna", "renunciation", "family", "victory", "confusion"],
    moodTags: ["grief", "renunciation", "confusion", "despair"],
  },
  {
    id: "1.32",
    chapter: 1,
    verse: 32,
    sanskrit:
      "किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा | येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च ||",
    transliteration:
      "kiṁ no rājyena govinda kiṁ bhogair jīvitena vā | yeṣhām arthe kāṅkṣhitaṁ no rājyaṁ bhogāḥ sukhāni cha",
    english:
      "O Govinda, of what avail to us are kingdoms, enjoyment, or even life, when all those for whom we desire them are standing before us in this battle?",
    hindi:
      "हे गोविन्द! जिनके लिए हम राज्य, भोग और सुखों की इच्छा करते हैं, वे ही जब यहाँ युद्ध में खड़े हैं, तो राज्य और भोगों से हमें क्या लाभ?",
    meaning:
      "A profound question: what is the meaning of prosperity without those we love? Arjuna's grief here touches universal human experience — we achieve for our loved ones, yet here he must fight them. The question of meaning pierces through.",
    keywords: ["arjuna", "meaning", "family", "renunciation", "grief"],
    moodTags: ["grief", "love", "confusion", "despair"],
  },
  {
    id: "1.33",
    chapter: 1,
    verse: 33,
    sanskrit:
      "त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च | आचार्याः पितरः पुत्रास्तथैव च पितामहाः ||",
    transliteration:
      "ta ime'vasthitā yuddhe prāṇāṁs tyaktvā dhanāni cha | āchāryāḥ pitaraḥ putrās tathaiva cha pitāmahāḥ",
    english:
      "Teachers, fathers, sons, and also grandfathers are standing here, ready to give up their lives and riches.",
    hindi: "आचार्य, पिता, पुत्र और पितामह — ये सब यहाँ धन और प्राण छोड़कर युद्ध में खड़े हैं।",
    meaning:
      "Arjuna names the specific categories of loved ones: teachers (representing wisdom), fathers (authority), sons (the future), grandfathers (tradition). All the pillars of his world stand before him ready to die.",
    keywords: ["arjuna", "teachers", "fathers", "sons", "grief", "family"],
    moodTags: ["grief", "love", "despair"],
  },
  {
    id: "1.34",
    chapter: 1,
    verse: 34,
    sanskrit:
      "मातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा | एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन ||",
    transliteration:
      "mātulāḥ śhvaśhurāḥ pautrāḥ śhyālāḥ sambandhinas tathā | etān na hantum ichchhāmi ghnato'pi madhusūdana",
    english:
      "Maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives — I do not wish to kill these, O Madhusudana (Krishna), even though they might slay me.",
    hindi:
      "मामा, ससुर, पोते, साले और बंधु-बांधव — हे मधुसूदन! मैं इन्हें मारना नहीं चाहता, भले ही ये मुझे मार डालें।",
    meaning:
      "Arjuna's non-violence extends even to self-sacrifice: he would rather be killed than kill his loved ones. This noble impulse — though ultimately confused — shows a beautiful heart. Krishna will transform this attachment into true dharma.",
    keywords: ["arjuna", "non-violence", "family", "sacrifice", "grief"],
    moodTags: ["grief", "love", "non-violence", "despair"],
  },
  {
    id: "1.35",
    chapter: 1,
    verse: 35,
    sanskrit:
      "एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् | विसृज्य सशरं चापं शोकसंविग्नमानसः ||",
    transliteration:
      "evam uktvārjunaḥ saṅkhye rathopastha upāviśhat | visṛijya saśharaṁ chāpaṁ śhoka-saṁvigna-mānasaḥ",
    english:
      "Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sat down in the chariot, his mind overwhelmed with grief.",
    hindi:
      "इस प्रकार कहकर अर्जुन युद्धभूमि में रथ के मध्य भाग में बाण सहित धनुष को छोड़कर शोक से व्याकुल मन वाले बैठ गए।",
    meaning:
      "The famous collapse: Arjuna drops his Gandiva bow, sits down, and grieves. This is the ending of Chapter 1 and the beginning of the Gita. From this rock-bottom moment of human despair, the greatest spiritual dialogue in history will arise.",
    keywords: ["arjuna", "grief", "bow", "collapse", "despair", "surrender"],
    moodTags: ["grief", "despair", "surrender", "crisis"],
  },
  {
    id: "1.36",
    chapter: 1,
    verse: 36,
    sanskrit:
      "अपि त्रैलोक्यराज्यस्य हेतोः किन्नु महीकृते | निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन ||",
    transliteration:
      "api trailokya-rājyasya hetoḥ kinnu mahī-kṛite | nihatya dhārtarāṣhṭrān naḥ kā prītiḥ syāj janārdana",
    english:
      "O Janardana (Krishna), what pleasure shall we find in killing the sons of Dhritarashtra? Sin alone will accrue to us if we slay these felons.",
    hindi:
      "हे जनार्दन! तीनों लोकों के राज्य के लिए भी — पृथ्वी की तो बात ही क्या — धृतराष्ट्र के पुत्रों को मारकर हमें क्या प्रसन्नता होगी?",
    meaning:
      "Arjuna frames his argument morally: even if he could win all three worlds, killing his kinsmen would bring only sin, not joy. He uses the address 'Janardana' — the one who dispels afflictions — seeking relief from his torment.",
    keywords: ["arjuna", "sin", "grief", "family", "morality"],
    moodTags: ["grief", "morality", "despair", "confusion"],
  },
  {
    id: "1.37",
    chapter: 1,
    verse: 37,
    sanskrit:
      "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान् | स्वजनं हि कथं हत्वा सुखिनः स्याम माधव ||",
    transliteration:
      "tasmān nārhā vayaṁ hantuṁ dhārtarāṣhṭrān sva-bāndhavān | sva-janaṁ hi kathaṁ hatvā sukhinaḥ syāma mādhava",
    english:
      "Therefore we should not kill the sons of Dhritarashtra, our own kinsmen. O Madhava (Krishna), how can we be happy after slaying our own family?",
    hindi:
      "इसलिए धृतराष्ट्र के पुत्र अपने बंधु-बांधवों को मारना हमारे लिए उचित नहीं है। हे माधव! अपने लोगों को मारकर हम सुखी कैसे हो सकते हैं?",
    meaning:
      "Arjuna poses the central ethical question: how can killing family members lead to happiness? The address 'Madhava' (consort of Lakshmi, lord of prosperity) ironically underscores the theme — true prosperity cannot come through fratricide.",
    keywords: ["arjuna", "ethics", "family", "happiness", "kinsmen"],
    moodTags: ["grief", "morality", "confusion"],
  },
  {
    id: "1.38",
    chapter: 1,
    verse: 38,
    sanskrit: "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः | कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ||",
    transliteration:
      "yady apy ete na paśhyanti lobhopahata-chetasaḥ | kula-kṣhaya-kṛitaṁ doṣhaṁ mitra-drohe cha pātakam",
    english:
      "Although these, blinded by greed, see no evil in the destruction of family or the sin of betraying friends,",
    hindi: "यद्यपि लोभ से अंधे हुए ये लोग कुल के नाश में दोष और मित्र-द्रोह में पाप नहीं देखते,",
    meaning:
      "Arjuna acknowledges that the Kauravas, blinded by greed, cannot see the evil of their ways. But his clarity here is also double-edged — his own grief is a kind of blindness, seeing only attachment where Krishna will show him eternal truth.",
    keywords: ["greed", "blindness", "sin", "family", "betrayal"],
    moodTags: ["anger", "morality", "grief"],
  },
  {
    id: "1.39",
    chapter: 1,
    verse: 39,
    sanskrit:
      "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् | कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ||",
    transliteration:
      "kathaṁ na jñeyam asmābhiḥ pāpād asmān nivartitum | kula-kṣhaya-kṛitaṁ doṣhaṁ prapaśhyadbhir janārdana",
    english:
      "Why should we not have the wisdom to turn away from this sin, O Janardana, who can see the evil of destroying the family lineage?",
    hindi:
      "हे जनार्दन! कुलनाश से होने वाले दोष को जानने वाले हमें इस पाप से निवृत्त होना क्यों नहीं चाहिए?",
    meaning:
      "Arjuna argues that unlike the blind Kauravas, he and the Pandavas can see the evil. Therefore they have a greater responsibility to turn away. His argument is sincere but based on attachment, not pure dharmic discernment.",
    keywords: ["wisdom", "sin", "family", "dharma", "responsibility"],
    moodTags: ["morality", "grief", "confusion"],
  },
  {
    id: "1.40",
    chapter: 1,
    verse: 40,
    sanskrit:
      "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः | धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ||",
    transliteration:
      "kula-kṣhaye praṇaśhyanti kula-dharmāḥ sanātanāḥ | dharme naṣhṭe kulaṁ kṛitsnam adharmo'bhibhavaty uta",
    english:
      "When the family is destroyed, the eternal family traditions are lost, and with them, the whole family falls into irreligion.",
    hindi:
      "कुल के नाश से सनातन कुलधर्म नष्ट हो जाते हैं और धर्म के नष्ट होने पर सारे कुल को अधर्म दबा लेता है।",
    meaning:
      "Arjuna raises the concern of kula-dharma — the eternal traditions of the family. He fears that destroying the family lineage will destroy the dharmic traditions they carry. This is a valid concern, yet Krishna will show a higher dharma that transcends family.",
    keywords: ["family", "dharma", "tradition", "destruction", "adharma"],
    moodTags: ["grief", "morality", "duty", "anxiety"],
  },
  {
    id: "1.41",
    chapter: 1,
    verse: 41,
    sanskrit:
      "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः | स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ||",
    transliteration:
      "adharmābhibhavāt kṛiṣhṇa praduṣhyanti kula-striyaḥ | strīṣhu duṣhṭāsu vārṣhṇeya jāyate varṇa-saṅkaraḥ",
    english:
      "When irreligion prevails, O Krishna, the women of the family become polluted, and from the degradation of women, O descendant of Vrishni, comes unwanted progeny.",
    hindi:
      "हे कृष्ण! अधर्म के फैलने से कुल की स्त्रियाँ दूषित होती हैं और हे वार्ष्णेय! स्त्रियों के दूषित होने से वर्णसंकर उत्पन्न होता है।",
    meaning:
      "Arjuna continues his social argument about the consequences of war on societal structure. While framed in ancient terms, his core concern is social fabric — the breakdown of dharmic society when the protective structures collapse.",
    keywords: ["adharma", "society", "family", "consequences", "war"],
    moodTags: ["anxiety", "morality", "grief"],
  },
  {
    id: "1.42",
    chapter: 1,
    verse: 42,
    sanskrit:
      "सङ्करो नरकायैव कुलघ्नानां कुलस्य च | पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ||",
    transliteration:
      "saṅkaro narakāyaiva kula-ghnānāṁ kulasya cha | patanti pitaro hy eṣhāṁ lupta-piṇḍodaka-kriyāḥ",
    english:
      "Such irreligious confusion leads both the destroyers of the family and the family itself to hell. The ancestors of such families fall, being deprived of the ritual offerings.",
    hindi:
      "यह वर्णसंकर कुल-घातियों और कुल — दोनों को नर्क में ले जाता है। पिण्ड और जल की क्रियाओं के लुप्त हो जाने से इनके पितर भी नरक में गिर जाते हैं।",
    meaning:
      "Arjuna fears for his ancestors' afterlife — without descendants to perform the sacred rites, the ancestors will fall from their elevated realms. This reverence for ancestors reveals the deep interconnection Vedic culture sees between the living and the dead.",
    keywords: ["ancestors", "rites", "hell", "family", "consequences"],
    moodTags: ["grief", "fear", "morality", "anxiety"],
  },
  {
    id: "1.43",
    chapter: 1,
    verse: 43,
    sanskrit:
      "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः | उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ||",
    transliteration:
      "doṣhair etaiḥ kula-ghnānāṁ varṇa-saṅkara-kārakaiḥ | utsādyante jāti-dharmāḥ kula-dharmāśh cha śhāśhvatāḥ",
    english:
      "By these sins of the family destroyers, which bring about social confusion, the eternal dharmic rites of the family and community are destroyed.",
    hindi:
      "इन कुलघातियों के इन दोषों से, जो वर्णसंकर उत्पन्न करते हैं, जाति और कुल के सनातन धर्म नष्ट हो जाते हैं।",
    meaning:
      "The destruction of eternal dharmic traditions is Arjuna's deepest fear. He is not merely concerned with personal loss but with the collapse of the entire sacred order. This verse shows Arjuna's social consciousness and his deep reverence for tradition.",
    keywords: ["dharma", "tradition", "family", "destruction", "eternal"],
    moodTags: ["grief", "morality", "anxiety"],
  },
  {
    id: "1.44",
    chapter: 1,
    verse: 44,
    sanskrit: "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन | नरके नियतं वासो भवतीत्यनुशुश्रुम ||",
    transliteration:
      "utsanna-kula-dharmāṇāṁ manuṣhyāṇāṁ janārdana | narake niyataṁ vāso bhavatīty anuśhuśhruma",
    english:
      "O Janardana (Krishna), I have heard from tradition that those whose family dharma is destroyed inevitably dwell in hell.",
    hindi:
      "हे जनार्दन! जिनका कुलधर्म नष्ट हो जाता है, उन मनुष्यों का नरक में ही निवास होता है — ऐसा हमने सुना है।",
    meaning:
      "Arjuna appeals to traditional knowledge — 'I have heard' — showing that his concerns are rooted in scriptural tradition, not mere sentiment. He fears eternal consequences for this destructive act. Yet Krishna will reveal that his conclusions are based on incomplete understanding.",
    keywords: ["hell", "dharma", "tradition", "family", "scripture"],
    moodTags: ["fear", "morality", "grief"],
  },
  {
    id: "1.45",
    chapter: 1,
    verse: 45,
    sanskrit: "अहो बत महत्पापं कर्तुं व्यवसिता वयम् | यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ||",
    transliteration:
      "aho bata mahat pāpaṁ kartuṁ vyavasitā vayam | yad rājya-sukha-lobhena hantuṁ sva-janam udyatāḥ",
    english:
      "Alas, how strange it is that we have resolved to commit a great sin! Driven by the desire for royal pleasures, we are prepared to kill our own kinsmen.",
    hindi:
      "अहो! यह बड़े खेद की बात है कि हम महान पाप करने का निश्चय कर बैठे हैं। राज्य-सुख के लोभ से हम अपने ही स्वजनों को मारने पर उतारू हो गए हैं।",
    meaning:
      "A dramatic reversal — Arjuna now accuses himself and the Pandavas. 'We,' not just the Kauravas, are prepared to sin for the sake of kingdom and pleasure. This self-criticism shows Arjuna's depth of character, even as his conclusion remains mistaken.",
    keywords: ["sin", "greed", "self-criticism", "family", "grief"],
    moodTags: ["grief", "shame", "despair", "morality"],
  },
  {
    id: "1.46",
    chapter: 1,
    verse: 46,
    sanskrit:
      "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः | धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ||",
    transliteration:
      "yadi mām apratīkāram aśhastraṁ śhastra-pāṇayaḥ | dhārtarāṣhṭrā raṇe hanyus tan me kṣhemataraṁ bhavet",
    english:
      "It would be better for me if the sons of Dhritarashtra, armed with weapons, were to kill me in battle while I am unarmed and offer no resistance.",
    hindi:
      "यदि शस्त्र-धारक धृतराष्ट्र के पुत्र रण में निःशस्त्र और अप्रतिकार करने वाले मुझे मार दें, तो यह मेरे लिए अधिक कल्याणकर होगा।",
    meaning:
      "Arjuna reaches his most extreme conclusion: better to die unarmed than to fight. This is the full expression of his grief — he would rather embrace death than take action. Yet Krishna will show that this is not true renunciation but mere weakness dressed as virtue.",
    keywords: ["arjuna", "surrender", "death", "non-resistance", "grief"],
    moodTags: ["despair", "grief", "surrender", "crisis"],
  },
  {
    id: "1.47",
    chapter: 1,
    verse: 47,
    sanskrit:
      "एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् | विसृज्य सशरं चापं शोकसंविग्नमानसः ||",
    transliteration:
      "evam uktvārjunaḥ saṅkhye rathopastha upāviśhat | visṛijya saśharaṁ chāpaṁ śhoka-saṁvigna-mānasaḥ",
    english:
      "Having thus spoken on the battlefield, Arjuna cast aside his bow and arrows and sat down in the chariot, his mind overwhelmed with grief.",
    hindi:
      "युद्धभूमि में इस प्रकार कहकर, अर्जुन बाण सहित धनुष को छोड़कर, शोक से व्याकुल मन वाले रथ के मध्य भाग में बैठ गए।",
    meaning:
      "The chapter closes as it begins — Arjuna sits down, bow dropped, heart broken. This is 'Arjuna Vishada Yoga' — the yoga of Arjuna's grief. But grief is the great teacher. From this complete surrender, the greatest teaching in human history is about to begin. Hare Krishna.",
    keywords: ["arjuna", "grief", "surrender", "bow", "vishada yoga"],
    moodTags: ["grief", "despair", "surrender", "crisis", "beginning"],
  },
];
