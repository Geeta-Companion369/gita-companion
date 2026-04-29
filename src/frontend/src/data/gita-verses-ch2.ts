// ─── Bhagavad Gita Chapter 2: Sankhya Yoga ───────────────────────────────────
// All 72 verses with Sanskrit, transliteration, English, Hindi, meaning,
// keywords, and mood tags. The crown jewel chapter of the entire Gita.

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

export const GITA_VERSES_CH2: GitaVerse[] = [
  // ==================== CHAPTER 2: Sankhya Yoga ====================
  {
    id: "2.1",
    chapter: 2,
    verse: 1,
    sanskrit:
      "सञ्जय उवाच | तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् | विषीदन्तमिदं वाक्यमुवाच मधुसूदनः ||",
    transliteration:
      "sañjaya uvāca | taṃ tathā kṛpayāviṣṭam aśru-pūrṇākulekṣaṇam | viṣīdantam idaṃ vākyam uvāca madhusūdanaḥ ||",
    english:
      "Sanjaya said: To him who was thus overcome with pity, whose eyes were filled with tears and agitation, and who was overwhelmed with grief, Madhusudana (Krishna) spoke these words.",
    hindi:
      "संजय बोले: उस प्रकार दया से व्याकुल, आँसुओं से भरी और व्याकुल दृष्टि वाले तथा विषाद में डूबे अर्जुन से मधुसूदन श्रीकृष्ण ने ये वचन कहे।",
    meaning:
      "Sanjaya narrates to King Dhritarashtra how Krishna begins to address the grieving Arjuna, whose eyes are full of tears. This sets the stage for the entire Bhagavad Gita.",
    keywords: ["grief", "compassion", "Krishna", "Arjuna", "Sanjaya"],
    moodTags: ["grief", "compassion", "beginning"],
  },
  {
    id: "2.2",
    chapter: 2,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच | कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् | अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन ||",
    transliteration:
      "śrī bhagavān uvāca | kutas tvā kaśmalam idaṃ viṣame samupasthitam | anārya-juṣṭam asvargyam akīrti-karam arjuna ||",
    english:
      "The Supreme Lord said: From where has this despondency come upon you in this crisis, O Arjuna? It does not befit a noble man. It leads neither to heaven nor to fame.",
    hindi:
      "श्रीभगवान बोले: हे अर्जुन! इस संकट के समय तुझे यह मोह कहाँ से प्राप्त हुआ? यह श्रेष्ठ पुरुषों के स्वभाव के विरुद्ध है, न स्वर्ग देने वाला है और न कीर्ति देने वाला।",
    meaning:
      "Krishna challenges Arjuna's cowardice, calling his despondency unworthy of a noble warrior. This is Krishna's first rebuke — gentle but firm.",
    keywords: ["despondency", "noble", "duty", "rebuke", "courage"],
    moodTags: ["challenged", "awakening", "duty"],
  },
  {
    id: "2.3",
    chapter: 2,
    verse: 3,
    sanskrit:
      "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते | क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ||",
    transliteration:
      "klaibyaṃ mā sma gamaḥ pārtha naitat tvayy upapadyate | kṣudraṃ hṛdaya-daurbalyaṃ tyaktvottiṣṭha parantapa ||",
    english:
      "O Partha, do not yield to impotence. It does not befit you. Shake off this faint-heartedness and arise, O scorcher of enemies.",
    hindi:
      "हे पार्थ! नपुंसकता को प्राप्त मत हो, तुझे यह शोभा नहीं देता। हे परंतप! हृदय की क्षुद्र दुर्बलता को छोड़कर उठो।",
    meaning:
      "Krishna firmly commands Arjuna to arise and cast away weakness of heart. This call to rise is one of the most powerful verses in the Gita — applicable to every crisis in life.",
    keywords: ["arise", "courage", "weakness", "warrior", "duty"],
    moodTags: ["empowered", "determined", "crisis"],
  },
  {
    id: "2.4",
    chapter: 2,
    verse: 4,
    sanskrit:
      "अर्जुन उवाच | कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन | इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ||",
    transliteration:
      "arjuna uvāca | kathaṃ bhīṣmam ahaṃ saṃkhye droṇaṃ ca madhusūdana | iṣubhiḥ pratiyotsyāmi pūjārhāv ari-sūdana ||",
    english:
      "Arjuna said: How can I fight with arrows against Bhishma and Drona, who are worthy of worship, O Madhusudana, O slayer of enemies?",
    hindi:
      "अर्जुन बोले: हे मधुसूदन! मैं रणभूमि में भीष्म और द्रोण के विरुद्ध बाणों से कैसे लड़ूँगा? वे दोनों पूजनीय हैं, हे अरिसूदन!",
    meaning:
      "Arjuna articulates his central dilemma — how can he raise weapons against his revered teachers and elders? This is the human heart of the Gita's conflict.",
    keywords: ["Bhishma", "Drona", "reverence", "dilemma", "elders"],
    moodTags: ["confused", "reverence", "moral dilemma"],
  },
  {
    id: "2.5",
    chapter: 2,
    verse: 5,
    sanskrit:
      "गुरूनहत्वा हि महानुभावान् श्रेयो भोक्तुं भैक्ष्यमपीह लोके | हत्वार्थकामांस्तु गुरूनिहैव भुञ्जीय भोगान् रुधिरप्रदिग्धान् ||",
    transliteration:
      "gurūn ahatvā hi mahānubhāvān śreyo bhoktuṃ bhaikṣyam apīha loke | hatvārtha-kāmāṃs tu gurūn ihaiva bhuñjīya bhogān rudhira-pradigdhān ||",
    english:
      "It is better to live in this world by begging than to slay these great noble souls who are my teachers. If I kill them, even though they desire worldly gain, everything I enjoy will be stained with blood.",
    hindi:
      "इन महानुभाव गुरुओं को मारने की अपेक्षा इस लोक में भिक्षा का अन्न खाना भी श्रेष्ठ है। यदि मैं इन्हें मार भी दूँ तो उनके रक्त से रंगे हुए भोगों को ही भोगूँगा।",
    meaning:
      "Arjuna would rather beg for food than slay his teachers. He sees no victory in wealth or pleasure gained by killing those he loves and respects.",
    keywords: ["teachers", "begging", "blood", "sacrifice", "guilt"],
    moodTags: ["grief", "moral conflict", "helplessness"],
  },
  {
    id: "2.6",
    chapter: 2,
    verse: 6,
    sanskrit:
      "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेम यदि वा नो जयेयुः | यानेव हत्वा न जिजीविषामस्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ||",
    transliteration:
      "na caitad vidmaḥ kataran no garīyo yad vā jayema yadi vā no jayeyuḥ | yān eva hatvā na jijīviṣāmas te 'vasthitāḥ pramukhe dhārtarāṣṭrāḥ ||",
    english:
      "We do not know which is better — whether we should conquer them or they should conquer us. The sons of Dhritarashtra stand before us — if we killed them we would not wish to live.",
    hindi:
      "हम यह भी नहीं जानते कि हमारे लिए जीतना अच्छा है या हारना। जिन्हें मारकर हम जीना नहीं चाहते वे ही धृतराष्ट्र के पुत्र हमारे सामने खड़े हैं।",
    meaning:
      "Arjuna confesses his complete confusion — he cannot see which outcome is better. He has lost the capacity to reason clearly under grief.",
    keywords: ["uncertainty", "confusion", "battle", "kinsmen", "dharma"],
    moodTags: ["confused", "lost", "helplessness"],
  },
  {
    id: "2.7",
    chapter: 2,
    verse: 7,
    sanskrit:
      "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः | यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ||",
    transliteration:
      "kārpaṇya-doṣopahata-svabhāvaḥ pṛcchāmi tvāṃ dharma-sammūḍha-cetāḥ | yac chreyaḥ syān niścitaṃ brūhi tan me śiṣyas te 'haṃ śādhi māṃ tvāṃ prapannam ||",
    english:
      "My nature is overcome by the flaw of pity, my mind is confused about duty. I ask you: tell me with certainty what is good for me. I am your disciple. Instruct me who has surrendered to you.",
    hindi:
      "दीनता के दोष से मेरा स्वभाव नष्ट हो रहा है और धर्म के विषय में मेरी बुद्धि मोहित हो गई है। मैं आपका शिष्य हूँ, आपकी शरण आया हूँ — मुझे निश्चित रूप से बताइए कि मेरे लिए क्या श्रेयस्कर है।",
    meaning:
      "This is the pivotal verse — Arjuna formally surrenders to Krishna as his guru, the moment that makes the entire Bhagavad Gita possible. Surrender to the divine teacher is the first step to liberation.",
    keywords: ["surrender", "disciple", "guru", "dharma", "guidance"],
    moodTags: ["surrender", "seeking guidance", "humility"],
  },
  {
    id: "2.8",
    chapter: 2,
    verse: 8,
    sanskrit:
      "न हि प्रपश्यामि ममापनुद्याद्यच्छोकमुच्छोषणमिन्द्रियाणाम् | अवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम् ||",
    transliteration:
      "na hi prapaśyāmi mamāpanudyād yac chokam ucchoṣaṇam indriyāṇām | avāpya bhūmāv asapatnam ṛddhaṃ rājyaṃ surāṇām api cādhipatyam ||",
    english:
      "I do not see what will remove this grief that parches my senses, even if I were to obtain an unrivalled prosperous kingdom on earth or even sovereignty over the gods.",
    hindi:
      "मुझे ऐसा कोई उपाय नहीं दिखता जो मेरी इंद्रियों को सुखाने वाले इस शोक को दूर कर सके, चाहे मुझे पृथ्वी पर निर्विरोध समृद्ध राज्य मिल जाए या देवताओं का भी स्वामित्व मिल जाए।",
    meaning:
      "No worldly success — not even heavenly sovereignty — can cure Arjuna's grief. This verse reveals that material achievement alone cannot bring peace to a tormented soul.",
    keywords: ["grief", "sorrow", "kingdom", "peace", "soul"],
    moodTags: ["grief", "hopelessness", "seeking peace"],
  },
  {
    id: "2.9",
    chapter: 2,
    verse: 9,
    sanskrit:
      "सञ्जय उवाच | एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप | न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह ||",
    transliteration:
      "sañjaya uvāca | evam uktvā hṛṣīkeśaṃ guḍākeśaḥ parantapa | na yotsya iti govindaṃ uktvā tūṣṇīṃ babhūva ha ||",
    english:
      "Sanjaya said: Having spoken thus to Hrishikesha (Krishna), Gudakesha (Arjuna), the conqueror of sleep, said to Govinda, 'I will not fight,' and became silent.",
    hindi:
      "संजय बोले: इस प्रकार हृषीकेश से कहकर गुडाकेश अर्जुन ने गोविन्द से 'मैं युद्ध नहीं करूँगा' कहकर चुप हो गए।",
    meaning:
      "Arjuna states his final decision — he will not fight — and falls silent. The crisis is complete. Krishna must now speak. This silence is the darkness before the dawn of wisdom.",
    keywords: ["silence", "refusal", "Arjuna", "Govinda", "despair"],
    moodTags: ["despair", "silence", "crisis"],
  },
  {
    id: "2.10",
    chapter: 2,
    verse: 10,
    sanskrit: "तमुवाच हृषीकेशः प्रहसन्निव भारत | सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः ||",
    transliteration:
      "tam uvāca hṛṣīkeśaḥ prahasann iva bhārata | senayor ubhayor madhye viṣīdantam idaṃ vacaḥ ||",
    english:
      "O Bharata, Hrishikesha (Krishna), as if smiling, spoke these words to the grief-stricken Arjuna, in the midst of both armies.",
    hindi:
      "हे भरतवंशी! तब हृषीकेश श्रीकृष्ण ने दोनों सेनाओं के बीच में विषाद करते हुए उस अर्जुन को मुस्कुराते हुए से यह वचन कहे।",
    meaning:
      "Krishna smiles — a divine, compassionate smile — before delivering the most profound spiritual wisdom the world has ever heard. His smile signals: this grief is based on illusion.",
    keywords: ["smile", "compassion", "wisdom", "battlefield", "teaching"],
    moodTags: ["compassion", "divine wisdom", "beginning"],
  },
  {
    id: "2.11",
    chapter: 2,
    verse: 11,
    sanskrit:
      "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे | गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||",
    transliteration:
      "aśocyān anvaśocas tvaṃ prajñā-vādāṃś ca bhāṣase | gatāsūn agatāsūṃś ca nānuśocanti paṇḍitāḥ ||",
    english:
      "You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise grieve neither for the living nor for the dead.",
    hindi:
      "तू उन लोगों के लिए शोक करता है जो शोक के योग्य नहीं हैं, और फिर भी ज्ञान की बातें करता है। जो ज्ञानी हैं वे न जीवित के लिए शोक करते हैं और न मृत के लिए।",
    meaning:
      "Krishna begins his teaching by exposing the root of Arjuna's error: grief for the soul is ignorance. The wise know the soul is eternal — neither born nor destroyed.",
    keywords: ["grief", "wisdom", "soul", "eternal", "knowledge"],
    moodTags: ["enlightenment", "grief", "eternal soul"],
  },
  {
    id: "2.12",
    chapter: 2,
    verse: 12,
    sanskrit:
      "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः | न चैव न भविष्यामः सर्वे वयमतः परम् ||",
    transliteration:
      "na tv evāhaṃ jātu nāsaṃ na tvaṃ neme janādhipāḥ | na caiva na bhaviṣyāmaḥ sarve vayam ataḥ param ||",
    english:
      "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.",
    hindi:
      "ऐसा कभी नहीं था कि मैं नहीं था, तू नहीं था या ये राजा नहीं थे। और ऐसा भी नहीं होगा कि इससे आगे हम सब नहीं रहेंगे।",
    meaning:
      "Krishna reveals the eternal nature of all souls — past, present, and future. We have always existed and will always exist. This is the foundation of all fearlessness.",
    keywords: ["eternity", "soul", "existence", "past", "future"],
    moodTags: ["eternal", "fearlessness", "truth"],
  },
  {
    id: "2.13",
    chapter: 2,
    verse: 13,
    sanskrit:
      "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||",
    transliteration:
      "dehino 'smin yathā dehe kaumāraṃ yauvanaṃ jarā | tathā dehāntara-prāptir dhīras tatra na muhyati ||",
    english:
      "Just as the embodied soul passes through childhood, youth, and old age in this body, similarly it passes into another body. The wise are not deluded by this.",
    hindi:
      "जैसे इस शरीर में आत्मा को बचपन, जवानी और वृद्धावस्था प्राप्त होती है, वैसे ही मृत्यु के बाद दूसरा शरीर मिलता है। धीर पुरुष इससे मोहित नहीं होते।",
    meaning:
      "Death is merely the soul moving from one body to another, just as we transition from childhood to old age. The wise do not grieve at what is merely a natural transition.",
    keywords: ["rebirth", "soul", "body", "transition", "wisdom"],
    moodTags: ["acceptance", "wisdom", "rebirth"],
  },
  {
    id: "2.14",
    chapter: 2,
    verse: 14,
    sanskrit:
      "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः | आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||",
    transliteration:
      "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ | āgamāpāyino 'nityās tāṃs titikṣasva bhārata ||",
    english:
      "O son of Kunti, the non-permanent appearances of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, and one must learn to tolerate them without being disturbed.",
    hindi:
      "हे कुन्तीपुत्र! सर्दी-गर्मी और सुख-दुःख देने वाले इंद्रियों के विषयों का संपर्क अनित्य है, वे आते-जाते रहते हैं। हे भारत! उन्हें सहन करो।",
    meaning:
      "Pain and pleasure are temporary, like changing seasons. The key to peace is not eliminating them but learning to tolerate them without being disturbed — the practice of equanimity.",
    keywords: ["impermanence", "equanimity", "tolerance", "senses", "seasons"],
    moodTags: ["equanimity", "endurance", "acceptance"],
  },
  {
    id: "2.15",
    chapter: 2,
    verse: 15,
    sanskrit: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ | समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ||",
    transliteration:
      "yaṃ hi na vyathayanty ete puruṣaṃ puruṣarṣabha | sama-duḥkha-sukhaṃ dhīraṃ so 'mṛtatvāya kalpate ||",
    english:
      "O best among men, the person who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation.",
    hindi:
      "हे पुरुषश्रेष्ठ! जिस धीर पुरुष को ये दुःख और सुख विचलित नहीं कर सकते और जो सुख-दुःख में समान रहता है, वह मोक्ष के योग्य होता है।",
    meaning:
      "The person who remains equanimous in both joy and sorrow becomes eligible for liberation. Steadiness of mind is the hallmark of a true spiritual aspirant.",
    keywords: ["equanimity", "liberation", "steadiness", "joy", "sorrow"],
    moodTags: ["liberation", "steadiness", "aspiration"],
  },
  {
    id: "2.16",
    chapter: 2,
    verse: 16,
    sanskrit:
      "नासतो विद्यते भावो नाभावो विद्यते सतः | उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ||",
    transliteration:
      "nāsato vidyate bhāvo nābhāvo vidyate sataḥ | ubhayor api dṛṣṭo 'ntas tv anayos tattva-darśibhiḥ ||",
    english:
      "The unreal has no existence, and the real never ceases to be. The seers of truth have concluded this, observing the nature of both.",
    hindi:
      "असत् का अस्तित्व नहीं है और सत् का अभाव नहीं है। इन दोनों का तत्त्व तत्त्वज्ञानियों ने देखा है।",
    meaning:
      "The soul (Sat — the real) always exists; the body (Asat — the unreal) will perish. This is the fundamental Vedantic truth: Brahma Satyam, Jagat Mithya.",
    keywords: ["real", "unreal", "existence", "truth", "Vedanta"],
    moodTags: ["truth", "philosophy", "wisdom"],
  },
  {
    id: "2.17",
    chapter: 2,
    verse: 17,
    sanskrit:
      "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् | विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ||",
    transliteration:
      "avināśi tu tad viddhi yena sarvam idaṃ tatam | vināśam avyayasyāsya na kaścit kartum arhati ||",
    english:
      "Know that which pervades the entire body is indestructible. No one is able to destroy the imperishable soul.",
    hindi:
      "उसे अविनाशी जानो जिससे यह सारा जगत व्याप्त है। इस अव्यय का विनाश करने में कोई भी समर्थ नहीं है।",
    meaning:
      "The soul pervades the entire body and is completely indestructible. No weapon, no force, nothing in existence can destroy it. This knowledge removes all fear of death.",
    keywords: [
      "indestructible",
      "soul",
      "pervades",
      "imperishable",
      "fearless",
    ],
    moodTags: ["fearlessness", "eternal soul", "protection"],
  },
  {
    id: "2.18",
    chapter: 2,
    verse: 18,
    sanskrit:
      "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः | अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ||",
    transliteration:
      "antavanta ime dehā nityasyoktāḥ śarīriṇaḥ | anāśino 'prameyasya tasmād yudhyasva bhārata ||",
    english:
      "The material body of the indestructible, immeasurable and eternal living entity is sure to come to an end; therefore, fight, O descendant of Bharata.",
    hindi:
      "नित्य, अनाशी और अप्रमेय आत्मा के ये सब शरीर नाशवान कहे गए हैं। इसलिए हे भारत! तू युद्ध कर।",
    meaning:
      "Bodies are perishable; souls are not. Since the soul cannot be destroyed, Arjuna should fight without fear. Duty must be performed regardless of bodily consequences.",
    keywords: ["body", "perishable", "soul", "duty", "battle"],
    moodTags: ["duty", "courage", "truth"],
  },
  {
    id: "2.19",
    chapter: 2,
    verse: 19,
    sanskrit:
      "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् | उभौ तौ न विजानीतो नायं हन्ति न हन्यते ||",
    transliteration:
      "ya enaṃ vetti hantāraṃ yaś cainaṃ manyate hatam | ubhau tau na vijānīto nāyaṃ hanti na hanyate ||",
    english:
      "He who thinks that this soul is a slayer, and he who thinks that it is slain, both of them fail to perceive the truth. This soul neither slays nor is slain.",
    hindi:
      "जो इस आत्मा को मारने वाला समझता है और जो इसे मरा हुआ मानता है, वे दोनों ही नहीं जानते। यह आत्मा न मारती है, न मारी जाती है।",
    meaning:
      "The soul is beyond the duality of killer and killed. To think one can kill or be killed is spiritual ignorance. True knowledge sees the soul as eternal witness.",
    keywords: ["slayer", "slain", "ignorance", "soul", "eternal"],
    moodTags: ["truth", "eternal soul", "liberation"],
  },
  {
    id: "2.20",
    chapter: 2,
    verse: 20,
    sanskrit:
      "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः | अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ||",
    transliteration:
      "na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ | ajo nityaḥ śāśvato 'yaṃ purāṇo na hanyate hanyamāne śarīre ||",
    english:
      "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
    hindi:
      "यह आत्मा न कभी जन्म लेती है और न मरती है। यह पहले थी, अब है और आगे भी रहेगी। यह अजन्मा, नित्य, शाश्वत और पुरातन है। शरीर के मारे जाने पर भी यह नहीं मारी जाती।",
    meaning:
      "This is one of the most profound verses of the Gita — the complete description of the eternal soul. Unborn, undying, ever-existing, primeval. Death of the body means nothing to the soul.",
    keywords: ["unborn", "eternal", "soul", "immortal", "primeval"],
    moodTags: ["eternal soul", "fearlessness", "liberation", "emergency"],
  },
  {
    id: "2.21",
    chapter: 2,
    verse: 21,
    sanskrit:
      "वेदाविनाशिनं नित्यं य एनमजमव्ययम् | कथं स पुरुषः पार्थ कं घातयति हन्ति कम् ||",
    transliteration:
      "vedāvināśinaṃ nityaṃ ya enam ajam avyayam | kathaṃ sa puruṣaḥ pārtha kaṃ ghātayati hanti kam ||",
    english:
      "O Partha, how can a person who knows that the soul is indestructible, eternal, unborn, and immutable kill anyone or cause anyone to kill?",
    hindi:
      "हे पार्थ! जो पुरुष इस आत्मा को अविनाशी, नित्य, अजन्मा और अव्यय जानता है, वह पुरुष किसे मारता है और किसे मरवाता है?",
    meaning:
      "With true knowledge of the soul, the concepts of killing and being killed dissolve. This knowledge liberates from the burden of violent action.",
    keywords: ["knowledge", "kill", "indestructible", "action", "liberation"],
    moodTags: ["truth", "liberation", "fearlessness"],
  },
  {
    id: "2.22",
    chapter: 2,
    verse: 22,
    sanskrit:
      "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि | तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ||",
    transliteration:
      "vāsāṃsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi | tathā śarīrāṇi vihāya jīrṇāny anyāni saṃyāti navāni dehī ||",
    english:
      "Just as a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.",
    hindi:
      "जैसे मनुष्य पुराने वस्त्रों को त्यागकर नए वस्त्र धारण करता है, उसी प्रकार आत्मा पुराने शरीरों को त्यागकर नए शरीर धारण करती है।",
    meaning:
      "The most beautiful metaphor for reincarnation in all scripture — the soul changes bodies as easily as we change clothes. Death is not an ending but a wardrobe change.",
    keywords: ["reincarnation", "garment", "body", "soul", "rebirth"],
    moodTags: ["acceptance", "rebirth", "hope"],
  },
  {
    id: "2.23",
    chapter: 2,
    verse: 23,
    sanskrit:
      "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः | न चैनं क्लेदयन्त्यापो न शोषयति मारुतः ||",
    transliteration:
      "nainaṃ chindanti śastrāṇi nainaṃ dahati pāvakaḥ | na cainaṃ kledayanty āpo na śoṣayati mārutaḥ ||",
    english:
      "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.",
    hindi:
      "इस आत्मा को शस्त्र नहीं काट सकते, अग्नि नहीं जला सकती, जल नहीं भिगो सकता और वायु नहीं सुखा सकती।",
    meaning:
      "The soul is beyond all physical elements. No weapon, fire, water, or wind can touch it. This verse declares the complete invincibility of the soul — the basis of all fearlessness.",
    keywords: ["invincible", "weapon", "fire", "water", "wind"],
    moodTags: ["fearlessness", "protection", "eternal soul", "emergency"],
  },
  {
    id: "2.24",
    chapter: 2,
    verse: 24,
    sanskrit:
      "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च | नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ||",
    transliteration:
      "acchedyo 'yam adāhyo 'yam akledyo 'śoṣya eva ca | nityaḥ sarva-gataḥ sthāṇur acalo 'yaṃ sanātanaḥ ||",
    english:
      "This individual soul is unbreakable and insoluble, and can be neither burned nor dried. It is everlasting, present everywhere, unchangeable, immovable and eternally the same.",
    hindi:
      "यह आत्मा अभेद्य है, अदाह्य है, अक्लेद्य है और निःसंदेह अशोष्य है। यह नित्य, सर्वव्यापी, अचल, स्थिर और सनातन है।",
    meaning:
      "An elaboration of 2.23 — the soul has six qualities: indestructible, insoluble, unburnable, un-drainable, eternal, and all-pervading. The soul is Sanatana Dharma itself.",
    keywords: ["eternal", "all-pervading", "immovable", "Sanatana", "soul"],
    moodTags: ["eternal soul", "truth", "Sanatana Dharma"],
  },
  {
    id: "2.25",
    chapter: 2,
    verse: 25,
    sanskrit:
      "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते | तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ||",
    transliteration:
      "avyakto 'yam acintyo 'yam avikāryo 'yam ucyate | tasmād evaṃ viditvainaṃ nānuśocitum arhasi ||",
    english:
      "It is said that the soul is invisible, inconceivable and immutable. Knowing this, you should not grieve for the body.",
    hindi:
      "यह आत्मा अव्यक्त, अचिन्त्य और अविकारी कही जाती है। इसलिए इसे इस प्रकार जानकर तुझे शोक नहीं करना चाहिए।",
    meaning:
      "The soul cannot be seen, cannot be fully comprehended by the mind, and never changes. With this understanding, grief for any soul — one's own or another's — is simply unfounded.",
    keywords: ["invisible", "inconceivable", "immutable", "grief", "knowledge"],
    moodTags: ["wisdom", "acceptance", "beyond grief"],
  },
  {
    id: "2.26",
    chapter: 2,
    verse: 26,
    sanskrit:
      "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् | तथापि त्वं महाबाहो नैवं शोचितुमर्हसि ||",
    transliteration:
      "atha cainaṃ nitya-jātaṃ nityaṃ vā manyase mṛtam | tathāpi tvaṃ mahābāho naivaṃ śocitum arhasi ||",
    english:
      "If, however, you think that the soul is perpetually born and perpetually dies, still you have no reason to lament, O mighty-armed.",
    hindi:
      "यदि तू इस आत्मा को सदा जन्म लेने वाला और सदा मरने वाला मानता है, तो भी हे महाबाहो! तुझे इस प्रकार शोक करना उचित नहीं।",
    meaning:
      "Even if one doesn't believe in the eternal soul, grief is still illogical — because birth and death are inevitable natural cycles. Either way, there is no reason to mourn.",
    keywords: ["birth", "death", "cycle", "grief", "logic"],
    moodTags: ["logical", "acceptance", "beyond grief"],
  },
  {
    id: "2.27",
    chapter: 2,
    verse: 27,
    sanskrit:
      "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च | तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ||",
    transliteration:
      "jātasya hi dhruvo mṛtyur dhruvaṃ janma mṛtasya ca | tasmād aparihārye 'rthe na tvaṃ śocitum arhasi ||",
    english:
      "One who has taken his birth is sure to die, and after death one is sure to take birth again. Therefore, in the unavoidable discharge of your duty, you should not lament.",
    hindi:
      "जन्म लेने वाले की मृत्यु निश्चित है और मरने वाले का जन्म निश्चित है। इसलिए इस अटल सत्य के विषय में तुझे शोक नहीं करना चाहिए।",
    meaning:
      "Birth leads to death, death leads to birth — this is the wheel of samsara. Krishna presents this as irrefutable logic: grief over something inevitable is pointless.",
    keywords: ["birth", "death", "inevitable", "samsara", "acceptance"],
    moodTags: ["acceptance", "logic", "cycles of life"],
  },
  {
    id: "2.28",
    chapter: 2,
    verse: 28,
    sanskrit:
      "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत | अव्यक्तनिधनान्येव तत्र का परिदेवना ||",
    transliteration:
      "avyaktādīni bhūtāni vyakta-madhyāni bhārata | avyakta-nidhanāny eva tatra kā paridevanā ||",
    english:
      "All created beings are unmanifest in their beginning, manifest in their interim state, and unmanifest again when annihilated. So what need is there for lamentation?",
    hindi:
      "हे भारत! सब प्राणी जन्म से पहले अव्यक्त थे, बीच में व्यक्त हैं और मृत्यु के बाद फिर अव्यक्त हो जाएँगे। तो फिर शोक किस बात का?",
    meaning:
      "Before birth and after death, all beings exist in an unmanifest state. Only the middle phase — life — is visible. Grief over this natural cycle is born from limited vision.",
    keywords: ["manifest", "unmanifest", "creation", "dissolution", "grief"],
    moodTags: ["wisdom", "acceptance", "cosmic perspective"],
  },
  {
    id: "2.29",
    chapter: 2,
    verse: 29,
    sanskrit:
      "आश्चर्यवत्पश्यति कश्चिदेनमाश्चर्यवद्वदति तथैव चान्यः | आश्चर्यवच्चैनमन्यः शृणोति श्रुत्वाप्येनं वेद न चैव कश्चित् ||",
    transliteration:
      "āścaryavat paśyati kaścid enam āścaryavad vadati tathaiva cānyaḥ | āścaryavac cainam anyaḥ śṛṇoti śrutvāpy enaṃ veda na caiva kaścit ||",
    english:
      "Some look on the soul as amazing, some describe it as amazing, and some hear of it as amazing, while others, even after hearing about it, cannot understand it at all.",
    hindi:
      "कोई इस आत्मा को आश्चर्यवत् देखता है, कोई इसे आश्चर्यवत् कहता है, कोई इसे आश्चर्यवत् सुनता है और कोई सुनकर भी इसे नहीं समझता।",
    meaning:
      "The mystery of the soul is beyond ordinary comprehension. Even when taught, few truly understand it. This points to the rarity and preciousness of genuine spiritual knowledge.",
    keywords: ["mystery", "soul", "wonder", "knowledge", "understanding"],
    moodTags: ["wonder", "mystery", "spiritual seeking"],
  },
  {
    id: "2.30",
    chapter: 2,
    verse: 30,
    sanskrit:
      "देही नित्यमवध्योऽयं देहे सर्वस्य भारत | तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि ||",
    transliteration:
      "dehī nityam avadhyo 'yaṃ dehe sarvasya bhārata | tasmāt sarvāṇi bhūtāni na tvaṃ śocitum arhasi ||",
    english:
      "O descendant of Bharata, he who dwells in the body can never be slain. Therefore you need not grieve for any creature.",
    hindi:
      "हे भारत! इस शरीर में स्थित यह आत्मा सदा अवध्य है। इसलिए तुझे किसी भी प्राणी के लिए शोक नहीं करना चाहिए।",
    meaning:
      "The soul dwelling in every body is indestructible. Since no one's soul can truly be harmed, grief for any being is based on ignorance.",
    keywords: ["indestructible", "grief", "soul", "body", "creature"],
    moodTags: ["liberation", "grief", "eternal soul"],
  },
  {
    id: "2.31",
    chapter: 2,
    verse: 31,
    sanskrit:
      "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि | धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ||",
    transliteration:
      "svadharmam api cāvekṣya na vikampitum arhasi | dharmyād dhi yuddhāc chreyo 'nyat kṣatriyasya na vidyate ||",
    english:
      "Considering your specific duty as a warrior, you should know that there is no better engagement for you than fighting on religious principles; and so there is no need for hesitation.",
    hindi:
      "अपने धर्म को देखते हुए भी तुझे कंपित नहीं होना चाहिए क्योंकि धर्मयुद्ध से बढ़कर क्षत्रिय के लिए कोई कल्याणकारी कार्य नहीं है।",
    meaning:
      "A warrior's svadharma is to fight when justice demands it. Abandoning one's dharma out of sentiment is itself adharma. Every person must fulfil their sacred duty.",
    keywords: ["svadharma", "warrior", "duty", "righteousness", "dharma"],
    moodTags: ["duty", "dharma", "courage"],
  },
  {
    id: "2.32",
    chapter: 2,
    verse: 32,
    sanskrit:
      "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् | सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् ||",
    transliteration:
      "yadṛcchayā copapannaṃ svarga-dvāram apāvṛtam | sukhinaḥ kṣatriyāḥ pārtha labhante yuddham īdṛśam ||",
    english:
      "O Partha, happy are the warriors who get such opportunities for an unsought engagement that opens the doors of the heavenly planets.",
    hindi:
      "हे पार्थ! भाग्यशाली हैं वे क्षत्रिय जिन्हें ऐसा युद्ध अपने आप ही प्राप्त होता है जो स्वर्ग का खुला द्वार है।",
    meaning:
      "A righteous battle that comes unsought is a divine opportunity for a warrior — the gate to heaven. Arjuna should see this battlefield not as a curse but as a sacred blessing.",
    keywords: [
      "heaven",
      "warrior",
      "opportunity",
      "righteous battle",
      "blessing",
    ],
    moodTags: ["duty", "opportunity", "dharma"],
  },
  {
    id: "2.33",
    chapter: 2,
    verse: 33,
    sanskrit:
      "अथ चेत्त्वमिमं धर्म्यं संग्रामं न करिष्यसि | ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि ||",
    transliteration:
      "atha cet tvam imaṃ dharmyaṃ saṃgrāmaṃ na kariṣyasi | tataḥ svadharmam kīrtiṃ ca hitvā pāpam avāpsyasi ||",
    english:
      "If, however, you do not perform your religious duty of fighting, then you will certainly incur sins for neglecting your duties and thus lose your reputation as a fighter.",
    hindi:
      "यदि तू इस धर्मयुद्ध को नहीं करेगा तो स्वधर्म और कीर्ति को खोकर पाप को प्राप्त होगा।",
    meaning:
      "Abandoning one's duty does not earn purity — it earns sin. Inaction in the face of dharma is itself adharma. Every person faces this choice in their life.",
    keywords: ["sin", "duty", "reputation", "adharma", "consequence"],
    moodTags: ["warning", "duty", "consequence"],
  },
  {
    id: "2.34",
    chapter: 2,
    verse: 34,
    sanskrit:
      "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् | सम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते ||",
    transliteration:
      "akīrtiṃ cāpi bhūtāni kathayiṣyanti te 'vyayām | sambhāvitasya cākīrtir maraṇād atiricyate ||",
    english:
      "People will always speak of your infamy, and for a respectable person, dishonor is worse than death.",
    hindi:
      "लोग तेरी सदा अकीर्ति का वर्णन करेंगे। सम्मानित पुरुष के लिए अकीर्ति मृत्यु से भी अधिक बुरी होती है।",
    meaning:
      "For a person of honor, infamy is a fate worse than death. Arjuna's cowardice will be remembered forever as a stain on his glorious name.",
    keywords: ["infamy", "honor", "reputation", "death", "shame"],
    moodTags: ["shame", "honor", "duty"],
  },
  {
    id: "2.35",
    chapter: 2,
    verse: 35,
    sanskrit:
      "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः | येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् ||",
    transliteration:
      "bhayād raṇād uparataṃ maṃsyante tvāṃ mahārathāḥ | yeṣāṃ ca tvaṃ bahumato bhūtvā yāsyasi lāghavam ||",
    english:
      "The great generals who have highly esteemed your name and fame will think that you have left the battlefield out of fear only, and thus they will consider you insignificant.",
    hindi:
      "जिन महारथियों में तू अत्यंत सम्मानित था, वे सब तुझे भय से युद्ध छोड़ने वाला समझेंगे और तू उनकी दृष्टि में तुच्छ हो जाएगा।",
    meaning:
      "The great warriors who respected Arjuna will interpret his withdrawal as cowardice, not compassion. A reputation built over a lifetime can be destroyed in one moment.",
    keywords: ["reputation", "cowardice", "warriors", "respect", "honor"],
    moodTags: ["shame", "reputation", "duty"],
  },
  {
    id: "2.36",
    chapter: 2,
    verse: 36,
    sanskrit:
      "अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः | निन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम् ||",
    transliteration:
      "avācya-vādāṃś ca bahūn vadiṣyanti tavāhitāḥ | nindantas tava sāmarthyaṃ tato duḥkhataraṃ nu kim ||",
    english:
      "Your enemies will describe you in many unkind words and scorn your ability. What could be more painful for you?",
    hindi:
      "तेरे शत्रु तेरी सामर्थ्य की निंदा करते हुए बहुत सी न कहने योग्य बातें कहेंगे। इससे अधिक दुःखदायी और क्या होगा?",
    meaning:
      "Beyond personal shame, Arjuna's enemies will mock him. For a warrior whose identity is built on courage and strength, this is the ultimate humiliation.",
    keywords: ["scorn", "enemies", "insult", "shame", "warrior"],
    moodTags: ["shame", "pain", "motivation"],
  },
  {
    id: "2.37",
    chapter: 2,
    verse: 37,
    sanskrit:
      "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम् | तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः ||",
    transliteration:
      "hato vā prāpsyasi svargaṃ jitvā vā bhokṣyase mahīm | tasmād uttiṣṭha kaunteya yuddhāya kṛta-niścayaḥ ||",
    english:
      "O son of Kunti, either you will be killed on the battlefield and attain the heavenly planets, or you will conquer and enjoy the earthly kingdom. Therefore, get up with determination and fight.",
    hindi:
      "हे कुन्तीपुत्र! या तो तू युद्ध में मारा जाएगा और स्वर्ग को प्राप्त होगा, या जीतकर पृथ्वी का राज्य भोगेगा। इसलिए उठ और युद्ध करने का निश्चय कर।",
    meaning:
      "Krishna presents a win-win logic: death in battle means heaven; victory means kingdom. There is no losing scenario when one fights righteously. This is the basis of fearless action.",
    keywords: ["heaven", "victory", "battle", "courage", "determination"],
    moodTags: ["courage", "determination", "fearlessness"],
  },
  {
    id: "2.38",
    chapter: 2,
    verse: 38,
    sanskrit:
      "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ | ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ||",
    transliteration:
      "sukha-duḥkhe same kṛtvā lābhālābhau jayājayau | tato yuddhāya yujyasva naivaṃ pāpam avāpsyasi ||",
    english:
      "Do thou fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat — and by so doing you shall never incur sin.",
    hindi:
      "सुख-दुःख, लाभ-हानि और जय-पराजय को समान समझकर युद्ध के लिए तैयार हो जा। इस प्रकार युद्ध करने से तुझे पाप नहीं लगेगा।",
    meaning:
      "The introduction of equanimity in action — the seed of Karma Yoga. Act without caring for outcomes. When victory and defeat are equal, action becomes pure.",
    keywords: ["equanimity", "karma yoga", "victory", "defeat", "pure action"],
    moodTags: ["equanimity", "karma yoga", "fearlessness"],
  },
  {
    id: "2.39",
    chapter: 2,
    verse: 39,
    sanskrit:
      "एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां शृणु | बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि ||",
    transliteration:
      "eṣā te 'bhihitā sāṃkhye buddhir yoge tv imāṃ śṛṇu | buddhyā yukto yayā pārtha karma-bandhaṃ prahāsyasi ||",
    english:
      "Thus far I have described this knowledge to you through analytical study (Sankhya). Now listen as I explain it in terms of working without fruitive results. O son of Pritha, when you act in such knowledge you can free yourself from the bondage of works.",
    hindi:
      "यह बुद्धि तुझे सांख्ययोग के संदर्भ में बताई गई है। अब योग के संदर्भ में सुन जिससे युक्त होकर हे पार्थ! तू कर्मबंधन को तोड़ देगा।",
    meaning:
      "Krishna transitions from Sankhya (theoretical knowledge of the soul) to Yoga (practical wisdom). The shift marks the beginning of Karma Yoga teaching.",
    keywords: ["Sankhya", "yoga", "karma bondage", "freedom", "wisdom"],
    moodTags: ["teaching", "karma yoga", "liberation"],
  },
  {
    id: "2.40",
    chapter: 2,
    verse: 40,
    sanskrit:
      "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते | स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ||",
    transliteration:
      "nehābhikrama-nāśo 'sti pratyavāyo na vidyate | svalpam apy asya dharmasya trāyate mahato bhayāt ||",
    english:
      "In this endeavor there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear.",
    hindi:
      "इस कर्मयोग में प्रयास का नाश नहीं होता और न ही कोई विपरीत फल होता है। इस धर्म का थोड़ा सा आचरण भी महान भय से रक्षा करता है।",
    meaning:
      "Not a single step on the spiritual path is ever wasted. Even a small amount of practice on this path protects from the greatest of fears. This gives immense courage to beginners.",
    keywords: ["spiritual progress", "no waste", "protection", "fear", "path"],
    moodTags: ["hope", "encouragement", "beginners"],
  },
  {
    id: "2.41",
    chapter: 2,
    verse: 41,
    sanskrit:
      "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन | बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ||",
    transliteration:
      "vyavasāyātmikā buddhir ekeha kuru-nandana | bahu-śākhā hy anantāś ca buddhayo 'vyavasāyinām ||",
    english:
      "Those who are on this path are resolute in purpose, and their aim is one. O beloved child of the Kurus, the intelligence of those who are irresolute is many-branched.",
    hindi:
      "हे कुरुनंदन! इस मार्ग पर चलने वालों की बुद्धि निश्चयात्मक और एकाग्र होती है। अनिश्चित पुरुषों की बुद्धि अनेक शाखाओं में और अनन्त में बँटी होती है।",
    meaning:
      "Single-pointed resolution is the hallmark of spiritual intelligence. The wavering mind scatters its energy in countless directions and achieves nothing.",
    keywords: ["resolution", "focus", "purpose", "intelligence", "wavering"],
    moodTags: ["focus", "determination", "wisdom"],
  },
  {
    id: "2.42",
    chapter: 2,
    verse: 42,
    sanskrit:
      "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः | वेदवादरताः पार्थ नान्यदस्तीति वादिनः ||",
    transliteration:
      "yām imāṃ puṣpitāṃ vācaṃ pravadanty avipaścitaḥ | veda-vāda-ratāḥ pārtha nānyad astīti vādinaḥ ||",
    english:
      "Men of small knowledge are very much attached to the flowery words of the Vedas, which recommend various fruitive activities for elevation to heavenly planets, resultant good birth, power, and so forth.",
    hindi:
      "हे पार्थ! अज्ञानी पुरुष वेद की उन अलंकारिक बातों में ही अनुराग रखते हैं जो स्वर्ग, सुखद जन्म, शक्ति आदि फलों को देने वाली हैं और इनके सिवा कुछ और है ही नहीं — ऐसा कहते हैं।",
    meaning:
      "Krishna cautions against those who are attached only to the ritualistic, reward-oriented parts of scripture without understanding the deeper truth. Real spirituality transcends the desire for heavenly rewards.",
    keywords: ["Vedas", "ritualism", "attachment", "heaven", "knowledge"],
    moodTags: ["caution", "wisdom", "spiritual maturity"],
  },
  {
    id: "2.43",
    chapter: 2,
    verse: 43,
    sanskrit:
      "कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् | क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति ||",
    transliteration:
      "kāmātmānaḥ svarga-parā janma-karma-phala-pradām | kriyā-viśeṣa-bahulāṃ bhogaiśvarya-gatiṃ prati ||",
    english:
      "Being followers of sensual pleasures and being desirous of heavenly life, they say that there is nothing more than this. Their aim is enjoyment and prosperity.",
    hindi:
      "भोगों में लिप्त और स्वर्ग को ही श्रेष्ठ मानने वाले, जन्म और कर्मफल देने वाले, भोग और ऐश्वर्य की प्राप्ति के लिए अनेक क्रियाओं का वर्णन करते हैं।",
    meaning:
      "Those oriented toward sensual enjoyment and heavenly reward remain trapped in the cycle of birth and rebirth. The highest good is not more pleasure but liberation from the cycle itself.",
    keywords: ["sensual pleasure", "heaven", "rebirth", "cycle", "attachment"],
    moodTags: ["caution", "detachment", "liberation"],
  },
  {
    id: "2.44",
    chapter: 2,
    verse: 44,
    sanskrit:
      "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् | व्यवसायात्मिका बुद्धिः समाधौ न विधीयते ||",
    transliteration:
      "bhogaiśvarya-prasaktānāṃ tayāpahṛta-cetasām | vyavasāyātmikā buddhiḥ samādhau na vidhīyate ||",
    english:
      "In the minds of those who are too attached to sense enjoyment and material opulence, and who are bewildered by such things, the resolute determination for devotional service to the Supreme Lord does not take place.",
    hindi:
      "जिनका चित्त भोग और ऐश्वर्य में लगा हुआ है, वे समाधि की निश्चयात्मक बुद्धि को प्राप्त नहीं कर सकते।",
    meaning:
      "A mind entangled in the pursuit of luxury and sensual pleasure cannot achieve the single-pointed focus needed for spiritual realization. Material attachment is the greatest obstacle to wisdom.",
    keywords: ["attachment", "luxury", "focus", "samadhi", "obstacle"],
    moodTags: ["caution", "detachment", "spiritual focus"],
  },
  {
    id: "2.45",
    chapter: 2,
    verse: 45,
    sanskrit:
      "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन | निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ||",
    transliteration:
      "trai-guṇya-viṣayā vedā nistrai-guṇyo bhavārjuna | nirdvandvo nitya-sattva-stho niryoga-kṣema ātmavān ||",
    english:
      "The Vedas mainly deal with the subject of the three modes of material nature. Rise above these modes, O Arjuna. Be transcendental to all of them. Be free from all dualities and from all anxieties for gain and safety, and be established in the Self.",
    hindi:
      "हे अर्जुन! वेद तीन गुणों से संबंधित विषयों को बताते हैं। तू तीनों गुणों से ऊपर उठ, द्वन्द्वों से मुक्त हो, नित्य सत्त्वगुण में स्थित रह, योगक्षेम की चिंता मत कर और आत्मा में स्थित हो।",
    meaning:
      "Rise beyond the three gunas (sattva, rajas, tamas). Live in pure awareness, free from duality, free from anxiety about acquisition and preservation. This is the call to transcend all conditioning.",
    keywords: [
      "three gunas",
      "transcendence",
      "duality",
      "awareness",
      "freedom",
    ],
    moodTags: ["transcendence", "freedom", "wisdom"],
  },
  {
    id: "2.46",
    chapter: 2,
    verse: 46,
    sanskrit:
      "यावानर्थ उदपाने सर्वतः सम्प्लुतोदके | तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः ||",
    transliteration:
      "yāvān artha udapāne sarvataḥ samplutodake | tāvān sarveṣu vedeṣu brāhmaṇasya vijānataḥ ||",
    english:
      "All purposes that are served by the small pond can at once be served by the great reservoirs of water. Similarly, all the purposes of the Vedas can be served to one who knows the purpose behind them.",
    hindi:
      "जितना प्रयोजन एक छोटे कुएँ से होता है, वह सब एक बड़े जलाशय से हो जाता है। उसी तरह सम्पूर्ण वेदों में वह सब कुछ है जो एक ब्राह्मण (जिज्ञासु) को जानना चाहिए।",
    meaning:
      "When one knows the Supreme, all scriptural purposes are automatically fulfilled, just as a great reservoir makes small wells unnecessary. Real knowledge encompasses all partial knowledge.",
    keywords: ["Vedas", "knowledge", "reservoir", "well", "wisdom"],
    moodTags: ["wisdom", "completeness", "knowledge"],
  },
  {
    id: "2.47",
    chapter: 2,
    verse: 47,
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
    transliteration:
      "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
    english:
      "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
    hindi:
      "तेरा कर्म करने में ही अधिकार है, फलों में कभी नहीं। इसलिए न तो कर्मफल की कामना से कर्म कर और न ही अकर्म में आसक्ति रख।",
    meaning:
      "The most famous verse of the Bhagavad Gita — the essence of Karma Yoga. Do your duty without attachment to results. This single principle can transform every aspect of life.",
    keywords: ["karma yoga", "duty", "detachment", "action", "fruits"],
    moodTags: ["karma yoga", "duty", "liberation", "peace"],
  },
  {
    id: "2.48",
    chapter: 2,
    verse: 48,
    sanskrit:
      "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय | सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ||",
    transliteration:
      "yoga-sthaḥ kuru karmāṇi saṅgaṃ tyaktvā dhanañjaya | siddhy-asiddhyoḥ samo bhūtvā samatvaṃ yoga ucyate ||",
    english:
      "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.",
    hindi:
      "हे धनंजय! आसक्ति को छोड़कर और सिद्धि-असिद्धि में समान रहकर योगस्थ होकर कर्म कर। यह समता ही योग है।",
    meaning:
      "Yoga is defined here in its purest sense — equanimity in action, performing one's duty with complete even-mindedness toward success and failure. This is the practical definition of yoga.",
    keywords: ["yoga", "equanimity", "action", "success", "failure"],
    moodTags: ["equanimity", "yoga", "peace"],
  },
  {
    id: "2.49",
    chapter: 2,
    verse: 49,
    sanskrit: "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय | बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ||",
    transliteration:
      "dūreṇa hy avaraṃ karma buddhi-yogād dhanañjaya | buddhau śaraṇam anviccha kṛpaṇāḥ phala-hetavaḥ ||",
    english:
      "O Dhananjaya, keep all abominable activities far distant by devotional service, and in that consciousness surrender unto the Lord. Those who want to enjoy the fruits of their work are misers.",
    hindi:
      "हे धनंजय! बुद्धियोग से सकाम कर्म अत्यंत निकृष्ट है। बुद्धि की शरण ले। फल के इच्छुक तो दीन हैं।",
    meaning:
      "Work motivated by desire for rewards is inferior and degrading. True intelligence seeks shelter in the yoga of wisdom. Those who act only for results are spiritually impoverished.",
    keywords: ["fruitive work", "wisdom", "surrender", "yoga", "miserly"],
    moodTags: ["wisdom", "detachment", "spiritual elevation"],
  },
  {
    id: "2.50",
    chapter: 2,
    verse: 50,
    sanskrit:
      "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते | तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ||",
    transliteration:
      "buddhi-yukto jahātīha ubhe sukṛta-duṣkṛte | tasmād yogāya yujyasva yogaḥ karmasu kauśalam ||",
    english:
      "A man engaged in devotional service rids himself of both good and bad reactions even in this life. Therefore strive for yoga, which is the art of all work.",
    hindi:
      "बुद्धियुक्त मनुष्य इस जीवन में पाप और पुण्य दोनों को त्याग देता है। इसलिए योग के लिए प्रयत्न कर। योग कर्मों में कुशलता है।",
    meaning:
      "The yogi transcends both good and bad karma. Yoga is defined magnificently as 'skill in action' — doing everything with mastery, presence, and wisdom.",
    keywords: ["skill", "yoga", "karma", "good", "evil"],
    moodTags: ["mastery", "yoga", "liberation"],
  },
  {
    id: "2.51",
    chapter: 2,
    verse: 51,
    sanskrit:
      "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः | जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ||",
    transliteration:
      "karma-jaṃ buddhi-yuktā hi phalaṃ tyaktvā manīṣiṇaḥ | janma-bandha-vinirmuktāḥ padaṃ gacchanty anāmayam ||",
    english:
      "By thus engaging in devotional service to the Lord, great sages or devotees free themselves from the results of work in the material world. In this way they become free from the cycle of birth and death and attain the state beyond all miseries.",
    hindi:
      "बुद्धियुक्त ज्ञानी पुरुष कर्मों के फल को त्यागकर जन्म के बंधन से मुक्त होकर निर्विकार पद को प्राप्त होते हैं।",
    meaning:
      "By surrendering the fruits of all action, the wise break free from the cycle of birth and death and reach the supreme state of peace and freedom.",
    keywords: ["liberation", "birth", "death", "karma", "wisdom"],
    moodTags: ["liberation", "freedom", "moksha"],
  },
  {
    id: "2.52",
    chapter: 2,
    verse: 52,
    sanskrit:
      "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति | तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ||",
    transliteration:
      "yadā te moha-kalilaṃ buddhir vyatitariṣyati | tadā gantāsi nirvedaṃ śrotavyasya śrutasya ca ||",
    english:
      "When your intelligence has passed out of the dense forest of delusion, you shall become indifferent to all that has been heard and all that is to be heard.",
    hindi:
      "जब तेरी बुद्धि मोहरूपी दलदल को पार कर लेगी, तब तुझे जो सुना है और जो सुनना है उसके प्रति वैराग्य हो जाएगा।",
    meaning:
      "When the mind clears of delusion, all worldly knowledge and arguments become irrelevant. The one who has crossed beyond confusion is no longer pulled by words, opinions, or doctrines.",
    keywords: ["delusion", "clarity", "indifference", "wisdom", "liberation"],
    moodTags: ["clarity", "beyond delusion", "wisdom"],
  },
  {
    id: "2.53",
    chapter: 2,
    verse: 53,
    sanskrit:
      "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला | समाधावचला बुद्धिस्तदा योगमवाप्स्यसि ||",
    transliteration:
      "śruti-vipratipannā te yadā sthāsyati niścalā | samādhāv acalā buddhis tadā yogam avāpsyasi ||",
    english:
      "When your mind is no longer disturbed by the flowery language of the Vedas, and when it remains fixed in the trance of self-realization, then you will have attained the divine consciousness.",
    hindi:
      "जब श्रुतियों के कारण विचलित हुई तेरी बुद्धि समाधि में अचल और स्थिर हो जाएगी, तब तू योग को प्राप्त होगा।",
    meaning:
      "True yoga is attained when the mind becomes perfectly still in self-realization, no longer disturbed by any external teachings or doctrines. Stillness is the sign of attainment.",
    keywords: ["samadhi", "stillness", "yoga", "realization", "mind"],
    moodTags: ["samadhi", "stillness", "attainment"],
  },
  {
    id: "2.54",
    chapter: 2,
    verse: 54,
    sanskrit:
      "अर्जुन उवाच | स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव | स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ||",
    transliteration:
      "arjuna uvāca | sthita-prajñasya kā bhāṣā samādhi-sthasya keśava | sthita-dhīḥ kiṃ prabhāṣeta kim āsīta vrajeta kim ||",
    english:
      "Arjuna said: O Krishna, what are the symptoms of one whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does he walk?",
    hindi:
      "अर्जुन बोले: हे केशव! जो समाधि में स्थित है उस स्थितप्रज्ञ पुरुष के क्या लक्षण हैं? वह कैसे बोलता है, कैसे बैठता है, कैसे चलता है?",
    meaning:
      "Arjuna's question opens the famous 'Sthitaprajna' section — the portrait of the ideal enlightened human being. This is one of the most practical and inspiring descriptions in all of world literature.",
    keywords: ["Sthitaprajna", "enlightenment", "samadhi", "qualities", "wise"],
    moodTags: ["wisdom", "aspiration", "ideal human"],
  },
  {
    id: "2.55",
    chapter: 2,
    verse: 55,
    sanskrit:
      "प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् | आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ||",
    transliteration:
      "prajahāti yadā kāmān sarvān pārtha mano-gatān | ātmany evātmanā tuṣṭaḥ sthita-prajñas tadocyate ||",
    english:
      "O Partha, when a man gives up all varieties of desire for sense gratification, which arise from mental concoction, and when his mind, thus purified, finds satisfaction in the self alone, then he is said to be in pure transcendental consciousness.",
    hindi:
      "हे पार्थ! जिस समय यह मनुष्य मन में आई हुई समस्त कामनाओं को त्याग देता है और आत्मा से ही आत्मा में संतुष्ट रहता है, उस समय वह स्थितप्रज्ञ कहा जाता है।",
    meaning:
      "The first definition of the Sthitaprajna — one of steady wisdom. He has given up all mental desires and finds complete satisfaction in the self alone. True contentment is internal, never external.",
    keywords: [
      "Sthitaprajna",
      "desire",
      "self-satisfaction",
      "contentment",
      "pure mind",
    ],
    moodTags: ["contentment", "enlightenment", "desire-free"],
  },
  {
    id: "2.56",
    chapter: 2,
    verse: 56,
    sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः | वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ||",
    transliteration:
      "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ | vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate ||",
    english:
      "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.",
    hindi:
      "जो दुःखों में उद्विग्न नहीं होता, सुखों की इच्छा नहीं करता, राग, भय और क्रोध से मुक्त है, वह स्थिर बुद्धि मुनि कहलाता है।",
    meaning:
      "The second quality of the Sthitaprajna: unshaken by sorrow, unattracted by joy, free from attachment, fear, and anger. These three — attachment, fear, anger — are the three root causes of human suffering.",
    keywords: ["steady mind", "suffering", "joy", "attachment", "anger"],
    moodTags: ["equanimity", "peace", "freedom"],
  },
  {
    id: "2.57",
    chapter: 2,
    verse: 57,
    sanskrit:
      "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम् | नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ||",
    transliteration:
      "yaḥ sarvatrānabhisnehas tat tat prāpya śubhāśubham | nābhinandati na dveṣṭi tasya prajñā pratiṣṭhitā ||",
    english:
      "In the material world, one who is unaffected by whatever good or evil he may obtain, neither praising it nor despising it, is firmly fixed in perfect knowledge.",
    hindi:
      "जो पुरुष सर्वत्र आसक्ति रहित है, वह शुभ या अशुभ प्राप्त करके न प्रसन्न होता है और न द्वेष करता है — उसकी प्रज्ञा प्रतिष्ठित है।",
    meaning:
      "The enlightened person is equally unmoved by pleasant and unpleasant events. This non-reactive awareness is the mark of wisdom — not emotional deadness, but transcendent equanimity.",
    keywords: ["non-attachment", "equanimity", "good", "evil", "wisdom"],
    moodTags: ["equanimity", "non-attachment", "wisdom"],
  },
  {
    id: "2.58",
    chapter: 2,
    verse: 58,
    sanskrit:
      "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः | इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ||",
    transliteration:
      "yadā saṃharate cāyaṃ kūrmo 'ṅgānīva sarvaśaḥ | indriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā ||",
    english:
      "One who is able to withdraw his senses from sense objects, as the tortoise draws its limbs within the shell, is firmly fixed in perfect consciousness.",
    hindi:
      "जिस प्रकार कछुआ अपने अंगों को समेट लेता है, उसी प्रकार जो अपनी इंद्रियों को विषयों से समेट लेता है, उसकी प्रज्ञा प्रतिष्ठित होती है।",
    meaning:
      "The tortoise metaphor — the wise person can withdraw their senses from sense objects at will, just as a tortoise retracts into its shell. This mastery over the senses is the prerequisite for meditation.",
    keywords: ["senses", "withdrawal", "tortoise", "control", "wisdom"],
    moodTags: ["sense control", "meditation", "wisdom"],
  },
  {
    id: "2.59",
    chapter: 2,
    verse: 59,
    sanskrit:
      "विषया विनिवर्तन्ते निराहारस्य देहिनः | रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ||",
    transliteration:
      "viṣayā vinivartante nirāhārasya dehinaḥ | rasa-varjaṃ raso 'py asya paraṃ dṛṣṭvā nivartate ||",
    english:
      "The embodied soul may be restricted from sense enjoyment, though the taste for sense objects remains. But, ceasing such engagements by experiencing a higher taste, he is fixed in consciousness.",
    hindi:
      "निराहारी के लिए विषय तो हट जाते हैं परन्तु रस (आसक्ति) नहीं हटती। परन्तु परमतत्त्व को देखने पर रस भी हट जाती है।",
    meaning:
      "Mere fasting or abstinence does not remove desire — only the taste for something higher does. When one experiences the divine, all lesser pleasures lose their pull automatically.",
    keywords: [
      "desire",
      "taste",
      "higher experience",
      "sense control",
      "divine",
    ],
    moodTags: ["higher experience", "transcendence", "desire"],
  },
  {
    id: "2.60",
    chapter: 2,
    verse: 60,
    sanskrit:
      "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः | इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ||",
    transliteration:
      "yatato hy api kaunteya puruṣasya vipaścitaḥ | indriyāṇi pramāthīni haranti prasabhaṃ manaḥ ||",
    english:
      "The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.",
    hindi:
      "हे कुन्तीपुत्र! प्रयत्नशील विवेकी पुरुष के मन को भी ये प्रमाथी इंद्रियाँ बलपूर्वक हर लेती हैं।",
    meaning:
      "Even a wise person practicing self-control can be overwhelmed by the senses. This honest acknowledgment of the mind's power makes Krishna's teaching practical and compassionate.",
    keywords: ["senses", "mind", "control", "strength", "practice"],
    moodTags: ["caution", "practice", "awareness"],
  },
  {
    id: "2.61",
    chapter: 2,
    verse: 61,
    sanskrit:
      "तानि सर्वाणि संयम्य युक्त आसीत मत्परः | वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ||",
    transliteration:
      "tāni sarvāṇi saṃyamya yukta āsīta mat-paraḥ | vaśe hi yasyendriyāṇi tasya prajñā pratiṣṭhitā ||",
    english:
      "One who restrains his senses, keeping them under full control, and fixes his consciousness upon Me, is known as a man of steady intelligence.",
    hindi:
      "उन सब इंद्रियों को वश में करके, मुझ में समाया हुआ बैठे। जिसकी इंद्रियाँ वश में हैं उसकी बुद्धि प्रतिष्ठित है।",
    meaning:
      "The secret of sense control is not suppression but elevation — fixing the mind in Krishna (the Supreme). When the mind is truly absorbed in the divine, the senses naturally come under control.",
    keywords: [
      "sense control",
      "devotion",
      "Krishna",
      "steady mind",
      "meditation",
    ],
    moodTags: ["devotion", "sense control", "steadiness"],
  },
  {
    id: "2.62",
    chapter: 2,
    verse: 62,
    sanskrit:
      "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते | सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ||",
    transliteration:
      "dhyāyato viṣayān puṃsaḥ saṅgas teṣūpajāyate | saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate ||",
    english:
      "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
    hindi:
      "विषयों का चिंतन करने वाले पुरुष की उनमें आसक्ति हो जाती है, आसक्ति से काम उत्पन्न होता है और काम से क्रोध उत्पन्न होता है।",
    meaning:
      "The beginning of the famous chain of destruction: contemplation → attachment → desire → anger. This cascade explains how every human failure begins with simply dwelling on sense objects.",
    keywords: ["contemplation", "attachment", "desire", "anger", "chain"],
    moodTags: ["warning", "psychology", "downfall"],
  },
  {
    id: "2.63",
    chapter: 2,
    verse: 63,
    sanskrit:
      "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः | स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||",
    transliteration:
      "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ | smṛti-bhraṃśād buddhi-nāśo buddhi-nāśāt praṇaśyati ||",
    english:
      "From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again into the material pool.",
    hindi:
      "क्रोध से सम्मोह होता है, सम्मोह से स्मृतिभ्रंश होता है, स्मृतिभ्रंश से बुद्धिनाश होता है, और बुद्धिनाश से व्यक्ति का पतन हो जाता है।",
    meaning:
      "The continuation and conclusion of the chain: anger → delusion → memory loss → intelligence destruction → total downfall. This is the complete anatomy of spiritual and worldly ruin.",
    keywords: ["anger", "delusion", "memory", "intelligence", "downfall"],
    moodTags: ["warning", "anger", "downfall"],
  },
  {
    id: "2.64",
    chapter: 2,
    verse: 64,
    sanskrit:
      "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् | आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ||",
    transliteration:
      "rāga-dveṣa-viyuktais tu viṣayān indriyaiś caran | ātma-vaśyair vidheyātmā prasādam adhigacchati ||",
    english:
      "But a person free from all attachment and aversion and able to control his senses through regulative principles of freedom can obtain the complete mercy of the Lord.",
    hindi:
      "परन्तु राग और द्वेष से मुक्त, अपने वश में की हुई इंद्रियों से विषयों में विचरने वाला स्वाधीन पुरुष प्रसाद (शांति) को प्राप्त होता है।",
    meaning:
      "The path back from the chain of ruin: freedom from attachment and aversion allows the senses to be used wisely. The self-mastered person attains divine grace and peace.",
    keywords: ["attachment", "aversion", "grace", "peace", "self-mastery"],
    moodTags: ["peace", "grace", "freedom"],
  },
  {
    id: "2.65",
    chapter: 2,
    verse: 65,
    sanskrit:
      "प्रसादे सर्वदुःखानां हानिरस्योपजायते | प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते ||",
    transliteration:
      "prasāde sarva-duḥkhānāṃ hānir asyopajāyate | prasanna-cetaso hy āśu buddhiḥ paryavatiṣṭhate ||",
    english:
      "For one who is so situated with peace of mind, the threefold misery of material existence exists no longer; in such peaceful consciousness, one's intelligence is soon well established.",
    hindi:
      "प्रसाद (शांति) प्राप्त होने पर सब दुःख नष्ट हो जाते हैं और प्रसन्न चित्त वाले की बुद्धि शीघ्र ही स्थिर हो जाती है।",
    meaning:
      "Divine grace brings an end to all suffering, and the peaceful mind swiftly achieves stable intelligence. Peace is not merely comfort — it is the condition that makes wisdom possible.",
    keywords: ["peace", "suffering", "intelligence", "grace", "stability"],
    moodTags: ["peace", "grace", "wisdom"],
  },
  {
    id: "2.66",
    chapter: 2,
    verse: 66,
    sanskrit:
      "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना | न चाभावयतः शान्तिरशान्तस्य कुतः सुखम् ||",
    transliteration:
      "nāsti buddhir ayuktasya na cāyuktasya bhāvanā | na cābhāvayataḥ śāntir aśāntasya kutaḥ sukham ||",
    english:
      "One who is not connected with the Supreme can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace. And how can there be any happiness without peace?",
    hindi:
      "अयुक्त (असंयमी) के लिए न बुद्धि है, न भावना। भावना रहित को शांति नहीं और शांति रहित को सुख कहाँ?",
    meaning:
      "Without spiritual practice, no wisdom; without wisdom, no meditation; without meditation, no peace; without peace, no happiness. This verse maps the entire path from inner chaos to inner joy.",
    keywords: ["wisdom", "peace", "happiness", "practice", "mind"],
    moodTags: ["peace", "happiness", "practice"],
  },
  {
    id: "2.67",
    chapter: 2,
    verse: 67,
    sanskrit:
      "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते | तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ||",
    transliteration:
      "indriyāṇāṃ hi caratāṃ yan mano 'nuvidhīyate | tad asya harati prajñāṃ vāyur nāvam ivāmbhasi ||",
    english:
      "Just as a strong wind sweeps away a boat on the water, even one of the roaming senses on which the mind focuses can carry away a man's intelligence.",
    hindi:
      "जैसे वायु जल में नाव को बहा ले जाती है, वैसे ही इधर-उधर भटकती इंद्रियों में से जिस एक के पीछे मन चला जाता है, वह उसकी बुद्धि को हर लेती है।",
    meaning:
      "Even one uncontrolled sense — just one — is enough to destroy a person's intelligence. Like a single strong wind capsizing a boat, one wayward sense can sink the whole mind.",
    keywords: ["senses", "wind", "boat", "intelligence", "control"],
    moodTags: ["caution", "sense control", "warning"],
  },
  {
    id: "2.68",
    chapter: 2,
    verse: 68,
    sanskrit:
      "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः | इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ||",
    transliteration:
      "tasmād yasya mahā-bāho nigṛhītāni sarvaśaḥ | indriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā ||",
    english:
      "Therefore, O mighty-armed, one whose senses are restrained from their objects is certainly of steady intelligence.",
    hindi:
      "इसलिए हे महाबाहो! जिसकी इंद्रियाँ विषयों से सर्वथा रोकी हुई हैं, उसकी प्रज्ञा प्रतिष्ठित होती है।",
    meaning:
      "The logical conclusion: complete mastery over the senses in all circumstances leads to the steady wisdom of the Sthitaprajna. This is achievable through practice and devotion.",
    keywords: [
      "sense restraint",
      "steady wisdom",
      "mastery",
      "Sthitaprajna",
      "practice",
    ],
    moodTags: ["mastery", "steadiness", "wisdom"],
  },
  {
    id: "2.69",
    chapter: 2,
    verse: 69,
    sanskrit:
      "या निशा सर्वभूतानां तस्यां जागर्ति संयमी | यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः ||",
    transliteration:
      "yā niśā sarva-bhūtānāṃ tasyāṃ jāgarti saṃyamī | yasyāṃ jāgrati bhūtāni sā niśā paśyato muneḥ ||",
    english:
      "What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.",
    hindi:
      "जो सब प्राणियों की रात है, उसमें संयमी पुरुष जागता है। जिसमें प्राणी जागते हैं, वह तत्त्वदर्शी मुनि की रात है।",
    meaning:
      "The most poetic verse of Chapter 2 — when the world is awake in pursuit of pleasure, the wise person is awake in spirit. When the world sleeps in unconsciousness of the divine, the yogi is fully aware.",
    keywords: ["night", "awakening", "sage", "worldly", "spiritual"],
    moodTags: ["wisdom", "awareness", "spiritual awakening"],
  },
  {
    id: "2.70",
    chapter: 2,
    verse: 70,
    sanskrit:
      "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् | तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी ||",
    transliteration:
      "āpūryamāṇam acala-pratiṣṭhaṃ samudram āpaḥ praviśanti yadvat | tadvat kāmā yaṃ praviśanti sarve sa śāntim āpnoti na kāma-kāmī ||",
    english:
      "A person who is not disturbed in mind, even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind. A person who is not disturbed by the incessant flow of desires — that enter like rivers into the ocean, which is ever being filled but is always still — can alone achieve peace, and not the man who strives to satisfy such desires.",
    hindi:
      "जैसे जल नदियाँ समुद्र में मिलती हैं पर समुद्र अचल रहता है, वैसे ही जिसमें सब कामनाएँ प्रवेश करके लुप्त हो जाती हैं, वही पुरुष शांति को प्राप्त होता है, न कि कामनाओं की इच्छा करने वाला।",
    meaning:
      "The ocean metaphor — the enlightened person absorbs all desires as the ocean receives rivers, yet remains undisturbed. True peace belongs to the ocean, not to the river that flows restlessly seeking.",
    keywords: ["ocean", "desires", "peace", "stability", "enlightened"],
    moodTags: ["peace", "equanimity", "enlightenment"],
  },
  {
    id: "2.71",
    chapter: 2,
    verse: 71,
    sanskrit:
      "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः | निर्ममो निरहंकारः स शान्तिमधिगच्छति ||",
    transliteration:
      "vihāya kāmān yaḥ sarvān pumāṃś carati niḥspṛhaḥ | nirmamo nirahaṅkāraḥ sa śāntim adhigacchati ||",
    english:
      "A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego — he alone can attain real peace.",
    hindi:
      "जो पुरुष सब कामनाओं को त्यागकर, ममता और अहंकार से रहित होकर विचरता है, वही शांति को प्राप्त होता है।",
    meaning:
      "The final portrait of the Sthitaprajna: no desire, no sense of 'mine,' no ego. These three — desire, ownership, ego — are the three pillars of the false self. When they fall, true peace arises.",
    keywords: ["desire", "ego", "ownership", "peace", "liberation"],
    moodTags: ["peace", "liberation", "ego-free"],
  },
  {
    id: "2.72",
    chapter: 2,
    verse: 72,
    sanskrit:
      "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति | स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ||",
    transliteration:
      "eṣā brāhmī sthitiḥ pārtha naināṃ prāpya vimuhyati | sthitvāsyām anta-kāle 'pi brahma-nirvāṇam ṛcchati ||",
    english:
      "That is the way of the spiritual and godly life, after attaining which a man is not bewildered. If one is thus situated even at the hour of death, one can enter into the kingdom of God.",
    hindi:
      "हे पार्थ! यह ब्राह्मी स्थिति है। इसे प्राप्त करके मनुष्य मोहित नहीं होता। अंतकाल में भी इसमें स्थित होकर मनुष्य ब्रह्मनिर्वाण को प्राप्त होता है।",
    meaning:
      "The magnificent conclusion of Chapter 2 — the Brahmi state is the state of complete union with the divine. Even at the moment of death, one who is established here attains Brahma Nirvana — liberation. The chapter ends with the ultimate promise of moksha.",
    keywords: [
      "Brahmi sthiti",
      "moksha",
      "death",
      "liberation",
      "brahma nirvana",
    ],
    moodTags: ["liberation", "moksha", "final peace", "death"],
  },
];
