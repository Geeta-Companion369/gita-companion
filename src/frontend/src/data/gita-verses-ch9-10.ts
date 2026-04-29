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

export const GITA_VERSES_CH9_10: GitaVerse[] = [
  // ============================================================
  // CHAPTER 9 — Raja-Vidya-Raja-Guhya Yoga (34 verses)
  // The Yoga of Royal Knowledge and Royal Secret
  // ============================================================
  {
    id: "9.1",
    chapter: 9,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे | ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||",
    transliteration:
      "śhrī bhagavān uvācha | idaṁ tu te guhyatamaṁ pravakṣhyāmyanasūyave | jñānaṁ vijñāna-sahitaṁ yaj jñātvā mokṣhyase'śhubhāt",
    english:
      "The Supreme Lord said: Because you are not envious of Me, I shall impart to you this most confidential knowledge combined with realization, knowing which you shall be freed from all inauspiciousness.",
    hindi:
      "श्रीभगवान बोले: तू मुझसे ईर्ष्या नहीं रखता, इसलिए मैं तुझे यह परम गुह्य ज्ञान विज्ञान सहित बताऊँगा, जिसे जानकर तू सब अशुभों से मुक्त हो जाएगा।",
    meaning:
      "Krishna opens this royal chapter by assuring Arjuna that because he is free from envy, he is fit to receive the supreme secret — knowledge combined with direct experience (vijñāna) that liberates from all evil.",
    keywords: [
      "secret",
      "knowledge",
      "liberation",
      "inauspicious",
      "realization",
    ],
    moodTags: ["guidance", "devotion", "hope"],
  },
  {
    id: "9.2",
    chapter: 9,
    verse: 2,
    sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम् | प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम् ||",
    transliteration:
      "rāja-vidyā rāja-guhyaṁ pavitram idam uttamam | pratyakṣhāvagamaṁ dharmyaṁ su-sukhaṁ kartum avyayam",
    english:
      "This knowledge is the king of all knowledge, the most secret of all secrets. It is the purest, the supreme, directly perceived, righteous, very easy to practice, and imperishable.",
    hindi:
      "यह ज्ञान सभी विद्याओं का राजा, सभी रहस्यों में सर्वोत्तम, परम पवित्र, प्रत्यक्ष फलदायी, धर्मयुक्त, अत्यंत सुखकर और अव्यय है।",
    meaning:
      "Krishna glorifies this teaching as rāja-vidyā — the king of knowledge. It is directly experienceable (not merely intellectual), the most purifying, and effortless to practice once understood.",
    keywords: ["royal knowledge", "secret", "pure", "eternal", "dharma"],
    moodTags: ["devotion", "wisdom", "peace"],
  },
  {
    id: "9.3",
    chapter: 9,
    verse: 3,
    sanskrit:
      "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप | अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि ||",
    transliteration:
      "aśhraddadhānāḥ puruṣhā dharmasyāsya parantapa | aprāpya māṁ nivartante mṛityu-saṁsāra-vartmani",
    english:
      "O scorcher of enemies, those persons who have no faith in this dharma do not attain Me. They return to the path of this mortal world of repeated births and deaths.",
    hindi:
      "हे परंतप! इस धर्म में श्रद्धा न रखने वाले पुरुष मुझे प्राप्त न होकर मृत्युरूप संसार-मार्ग में लौट जाते हैं।",
    meaning:
      "Faith (śhraddhā) is the gateway to liberation. Without it, souls remain trapped in the cycle of birth and death. This warns against intellectual arrogance that dismisses the devotional path.",
    keywords: ["faith", "doubt", "rebirth", "liberation", "dharma"],
    moodTags: ["warning", "guidance", "fear"],
  },
  {
    id: "9.4",
    chapter: 9,
    verse: 4,
    sanskrit:
      "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना | मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः ||",
    transliteration:
      "mayā tatam idaṁ sarvaṁ jagad avyakta-mūrtinā | mat-sthāni sarva-bhūtāni na chāhaṁ teṣhvavasthitaḥ",
    english:
      "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them.",
    hindi:
      "मेरे अव्यक्त स्वरूप से यह सारा जगत व्याप्त है। सभी प्राणी मुझमें स्थित हैं, परंतु मैं उनमें नहीं हूँ।",
    meaning:
      "Krishna reveals the paradox of divine immanence: the entire creation exists within Him, yet He is not limited or contained by it. His unmanifest nature pervades everything without being bound by anything.",
    keywords: [
      "pervades",
      "universe",
      "unmanifested",
      "transcendent",
      "immanent",
    ],
    moodTags: ["awe", "wisdom", "peace"],
  },
  {
    id: "9.5",
    chapter: 9,
    verse: 5,
    sanskrit:
      "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम् | भूतभृन्न च भूतस्थो ममात्मा भूतभावनः ||",
    transliteration:
      "na cha mat-sthāni bhūtāni paśhya me yogam aiśhvaram | bhūta-bhṛin na cha bhūta-stho mamātmā bhūta-bhāvanaḥ",
    english:
      "And yet the beings do not dwell in Me — behold My divine mystery! My Self is the source and sustainer of all beings, yet it does not dwell in them.",
    hindi:
      "और वास्तव में वे प्राणी मुझमें स्थित नहीं हैं — मेरी इस दिव्य योग शक्ति को देख! मेरी आत्मा समस्त प्राणियों को उत्पन्न और पालन करती है, फिर भी उनमें स्थित नहीं है।",
    meaning:
      "This deepens the paradox: beings are not truly 'in' Krishna either. His yogic power (yoga māyā) creates, sustains, and holds all without attachment or limitation — the mark of true transcendence.",
    keywords: [
      "divine mystery",
      "sustainer",
      "transcendence",
      "yoga",
      "creation",
    ],
    moodTags: ["awe", "wonder", "wisdom"],
  },
  {
    id: "9.6",
    chapter: 9,
    verse: 6,
    sanskrit:
      "यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान् | तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय ||",
    transliteration:
      "yathākāśha-sthito nityaṁ vāyuḥ sarvatra-go mahān | tathā sarvāṇi bhūtāni mat-sthānītyupadhāraya",
    english:
      "Understand that just as the mighty wind, blowing everywhere, always rests in the sky, so all created beings rest in Me.",
    hindi:
      "जैसे सर्वत्र विचरण करने वाली महान वायु सदा आकाश में स्थित रहती है, वैसे ही सभी प्राणी मुझमें स्थित हैं — ऐसा समझो।",
    meaning:
      "Krishna uses the metaphor of wind in space: wind moves through space but doesn't contain it; space holds wind but isn't affected by it. Similarly, all beings exist within the infinite Krishna without limiting Him.",
    keywords: ["wind", "sky", "metaphor", "creation", "dwelling"],
    moodTags: ["peace", "wisdom", "clarity"],
  },
  {
    id: "9.7",
    chapter: 9,
    verse: 7,
    sanskrit:
      "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् | कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् ||",
    transliteration:
      "sarva-bhūtāni kaunteya prakṛitiṁ yānti māmikām | kalpa-kṣhaye punas tāni kalpādau visṛijāmyaham",
    english:
      "O son of Kunti, at the end of a cycle (kalpa), all beings merge into My primordial nature; and at the beginning of the next cycle, I send them forth again.",
    hindi:
      "हे कुन्तीपुत्र! कल्प के अंत में सभी प्राणी मेरी प्रकृति को प्राप्त होते हैं, और कल्प के आरंभ में मैं उन्हें पुनः उत्पन्न करता हूँ।",
    meaning:
      "Creation is cyclic. At the end of each cosmic cycle, all dissolves back into divine nature; at the start of the next, they are projected forth again. Krishna is both the source and the return of all existence.",
    keywords: ["cosmic cycle", "creation", "dissolution", "rebirth", "nature"],
    moodTags: ["awe", "wisdom", "eternity"],
  },
  {
    id: "9.8",
    chapter: 9,
    verse: 8,
    sanskrit:
      "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः | भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात् ||",
    transliteration:
      "prakṛitiṁ svām avaṣhṭabhya visṛijāmi punaḥ punaḥ | bhūta-grāmam imaṁ kṛitsnam avaśhaṁ prakṛiter vaśhāt",
    english:
      "Controlling My own primordial nature, I send forth again and again this entire multitude of beings, who are helpless under the sway of material nature.",
    hindi:
      "अपनी प्रकृति को वश में करके, मैं प्रकृति के अधीन इस अवश प्राणी-समुदाय को बार-बार उत्पन्न करता हूँ।",
    meaning:
      "Creation is not random — Krishna governs His own nature (prakṛiti) as He creates. Beings are 'helpless' under material forces, but Krishna stands above them as the transcendent controller.",
    keywords: ["creation", "nature", "control", "cosmic power", "material"],
    moodTags: ["awe", "surrender", "wisdom"],
  },
  {
    id: "9.9",
    chapter: 9,
    verse: 9,
    sanskrit: "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय | उदासीनवदासीनमसक्तं तेषु कर्मसु ||",
    transliteration:
      "na cha māṁ tāni karmāṇi nibadhnanti dhanañjaya | udāsīna-vad āsīnam asaktaṁ teṣhu karmasu",
    english:
      "O Dhananjaya, these actions do not bind Me. I remain like one who is indifferent, unattached to these actions.",
    hindi:
      "हे धनंजय! वे कर्म मुझे नहीं बाँधते, क्योंकि मैं उन कर्मों में आसक्ति-रहित और उदासीन की भाँति स्थित हूँ।",
    meaning:
      "Even while acting as creator of the universe, Krishna is not bound by action. He remains the perfect exemplar of nishkāma karma — action without attachment. His detachment is the model for all seekers.",
    keywords: ["karma", "detachment", "indifference", "action", "binding"],
    moodTags: ["peace", "wisdom", "detachment"],
  },
  {
    id: "9.10",
    chapter: 9,
    verse: 10,
    sanskrit: "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् | हेतुनानेन कौन्तेय जगद्विपरिवर्तते ||",
    transliteration:
      "mayādhyakṣheṇa prakṛitiḥ sūyate sa-charācharam | hetunānena kaunteya jagad viparivartate",
    english:
      "O son of Kunti, under My supervision, nature gives birth to all moving and non-moving beings. By this cause, the world revolves.",
    hindi:
      "हे कुन्तीपुत्र! मेरी अध्यक्षता में प्रकृति चर और अचर सब प्राणियों को उत्पन्न करती है। इसी कारण यह जगत चक्र चलता रहता है।",
    meaning:
      "Nature is not autonomous — it operates under divine supervision. The material world is purposeful, not random. Krishna as the supreme overseer gives the cosmic process its order and direction.",
    keywords: ["nature", "supervision", "creation", "world", "movement"],
    moodTags: ["awe", "wisdom", "purpose"],
  },
  {
    id: "9.11",
    chapter: 9,
    verse: 11,
    sanskrit: "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम् | परं भावमजानन्तो मम भूतमहेश्वरम् ||",
    transliteration:
      "avajānanti māṁ mūḍhā mānuṣhīṁ tanum āśhritam | paraṁ bhāvam ajānanto mama bhūta-maheśhvaram",
    english:
      "Fools disregard Me when I appear in human form; they do not know My transcendental nature as the Supreme Lord of all beings.",
    hindi:
      "मूढ़ लोग मनुष्य शरीर धारण किए हुए मुझे तुच्छ समझते हैं। वे समस्त प्राणियों के महेश्वर मेरे परम भाव को नहीं जानते।",
    meaning:
      "Krishna's incarnation in human form leads the unwise to dismiss His divinity. They see the body and miss the transcendence. True devotion requires looking beyond the form to the infinite consciousness within.",
    keywords: [
      "incarnation",
      "foolishness",
      "divine nature",
      "maya",
      "recognition",
    ],
    moodTags: ["warning", "wisdom", "humility"],
  },
  {
    id: "9.12",
    chapter: 9,
    verse: 12,
    sanskrit:
      "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः | राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः ||",
    transliteration:
      "moghāśhā mogha-karmāṇo mogha-jñānā vichetasaḥ | rākṣhasīm āsurīṁ chaiva prakṛitiṁ mohinīṁ śhritāḥ",
    english:
      "Those who are bewildered dwell in a demonic and deluding nature. Their hopes, their actions, and their knowledge are all in vain.",
    hindi:
      "ऐसे व्यर्थ आशाओं वाले, व्यर्थ कर्म करने वाले, व्यर्थ ज्ञान वाले और विवेकहीन लोग राक्षसी और आसुरी प्रकृति को ग्रहण किए रहते हैं।",
    meaning:
      "Those who reject the divine reality exhaust themselves in futile hopes and deluded actions. Without knowledge of the Supreme, all worldly effort is ultimately wasted — a stark warning about misplaced priorities.",
    keywords: ["futile", "demonic", "deluded", "vain", "ignorance"],
    moodTags: ["warning", "clarity", "guidance"],
  },
  {
    id: "9.13",
    chapter: 9,
    verse: 13,
    sanskrit:
      "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः | भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ||",
    transliteration:
      "mahātmānas tu māṁ pārtha daivīṁ prakṛitim āśhritāḥ | bhajanty ananya-manaso jñātvā bhūtādim avyayam",
    english:
      "But the great souls, O Partha, who dwell in the divine nature, worship Me with undivided minds, knowing Me as the imperishable origin of all beings.",
    hindi:
      "हे पार्थ! दैवी प्रकृति को प्राप्त महात्मा लोग मुझे समस्त प्राणियों का अव्यय आदि कारण जानकर अनन्य मन से भजते हैं।",
    meaning:
      "In contrast to the deluded, the great souls (mahātmās) surrender to the divine nature and worship with undivided focus. They recognize Krishna as the eternal source of all — and their devotion flows naturally from this knowing.",
    keywords: [
      "great soul",
      "divine nature",
      "undivided",
      "worship",
      "eternal",
    ],
    moodTags: ["devotion", "wisdom", "peace"],
  },
  {
    id: "9.14",
    chapter: 9,
    verse: 14,
    sanskrit:
      "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः | नमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते ||",
    transliteration:
      "satataṁ kīrtayanto māṁ yatantaśh cha dṛiḍha-vratāḥ | namasyantaśh cha māṁ bhaktyā nitya-yuktā upāsate",
    english:
      "Always glorifying Me, striving with firm vows, bowing down before Me in devotion, always engaged, they worship Me.",
    hindi:
      "वे दृढ़ व्रत वाले लोग सदा मेरा कीर्तन करते हुए, प्रयत्नशील होकर, मुझे भक्तिपूर्वक प्रणाम करते हुए नित्य मेरी उपासना करते हैं।",
    meaning:
      "The great souls' worship is constant and multifaceted — through song (kīrtana), effort, firm resolve, and prostration. All these are expressions of the same undivided bhakti. Continuity of practice is the key.",
    keywords: ["glorifying", "kirtana", "firm vows", "worship", "constant"],
    moodTags: ["devotion", "joy", "dedication"],
  },
  {
    id: "9.15",
    chapter: 9,
    verse: 15,
    sanskrit: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते | एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम् ||",
    transliteration:
      "jñāna-yajñena chāpy anye yajanto mām upāsate | ekatvena pṛithaktvena bahudhā viśhvato-mukham",
    english:
      "Others worship Me through the sacrifice of knowledge — some seeing unity in diversity, others seeing diversity, and still others seeing Me in all forms facing everywhere.",
    hindi:
      "अन्य लोग ज्ञानयज्ञ द्वारा भी मेरी उपासना करते हैं — कुछ एकत्व से, कुछ पृथक्त्व से, और कुछ बहुत प्रकार से विश्वमुख मुझे।",
    meaning:
      "Divine worship takes many forms — monotheistic, pantheistic, or through philosophical enquiry. Krishna embraces all paths. The sacrifice of knowledge (jñāna-yajña) is equally valid as devotional service.",
    keywords: ["knowledge sacrifice", "unity", "diversity", "worship", "forms"],
    moodTags: ["wisdom", "tolerance", "devotion"],
  },
  {
    id: "9.16",
    chapter: 9,
    verse: 16,
    sanskrit: "अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम् | मन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम् ||",
    transliteration:
      "ahaṁ kratur ahaṁ yajñaḥ svadhāham aham auṣhadham | mantro'ham aham evājyam aham agnir ahaṁ hutam",
    english:
      "I am the ritual, I am the sacrifice, I am the oblation to the ancestors, I am the healing herb, I am the sacred chant, I am the clarified butter, I am the fire, and I am the offering.",
    hindi:
      "मैं क्रतु हूँ, मैं यज्ञ हूँ, मैं स्वधा हूँ, मैं औषध हूँ, मैं मंत्र हूँ, मैं ही घृत हूँ, मैं अग्नि हूँ और मैं ही हवन-क्रिया हूँ।",
    meaning:
      "In a magnificent declaration, Krishna reveals He is every element of sacred ritual — the fire, the offering, the mantra, the priest, and the result. All worship ultimately reaches the one Supreme regardless of form.",
    keywords: ["ritual", "sacrifice", "mantra", "fire", "offering"],
    moodTags: ["awe", "devotion", "unity"],
  },
  {
    id: "9.17",
    chapter: 9,
    verse: 17,
    sanskrit:
      "पिताहमस्य जगतो माता धाता पितामहः | वेद्यं पवित्रमोङ्कार ऋक्साम यजुरेव च ||",
    transliteration:
      "pitāham asya jagato mātā dhātā pitāmahaḥ | vedyaṁ pavitram oṁkāra ṛik sāma yajur eva cha",
    english:
      "I am the father of this universe, the mother, the support, the grandfather; I am the object of knowledge, the purifier, the sacred syllable Om; I am the Rig Veda, the Sama Veda, and the Yajur Veda.",
    hindi:
      "मैं इस जगत का पिता, माता, धाता और पितामह हूँ। मैं जानने योग्य, पवित्र करने वाला, ॐकार, ऋग्वेद, सामवेद और यजुर्वेद हूँ।",
    meaning:
      "Krishna is every relationship and every scripture. He is simultaneously father, mother, grandfather, and the Vedas themselves. The Om syllable — the sound of the Absolute — is Krishna. All sacred knowledge points to Him.",
    keywords: ["father", "mother", "om", "vedas", "family"],
    moodTags: ["awe", "devotion", "love"],
  },
  {
    id: "9.18",
    chapter: 9,
    verse: 18,
    sanskrit:
      "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत् | प्रभवः प्रलयः स्थानं निधानं बीजमव्ययम् ||",
    transliteration:
      "gatir bhartā prabhuḥ sākṣhī nivāsaḥ śharaṇaṁ suhṛit | prabhavaḥ pralayaḥ sthānaṁ nidhānaṁ bījam avyayam",
    english:
      "I am the goal, the sustainer, the master, the witness, the abode, the refuge, the friend; the origin, the dissolution, the foundation, the repository, and the eternal seed.",
    hindi:
      "मैं गति, भर्ता, प्रभु, साक्षी, निवास, शरण, सुहृद, प्रभव, प्रलय, स्थान, निधान और अव्यय बीज हूँ।",
    meaning:
      "This verse lists 12 attributes of Krishna encompassing all of existence — beginning, end, sustenance, witness, shelter, and the eternal seed. Every aspect of reality finds its source and completion in the Supreme.",
    keywords: ["goal", "refuge", "witness", "shelter", "eternal seed"],
    moodTags: ["surrender", "devotion", "peace"],
  },
  {
    id: "9.19",
    chapter: 9,
    verse: 19,
    sanskrit: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च | अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन ||",
    transliteration:
      "tapāmy aham ahaṁ varṣhaṁ nigṛihṇāmy utsṛijāmi cha | amṛitaṁ chaiva mṛityuśh cha sad asach chāham arjuna",
    english:
      "O Arjuna, I give heat; I withhold and send forth rain. I am immortality and also death. I am being and non-being.",
    hindi:
      "हे अर्जुन! मैं ही सूर्य के रूप में तप देता हूँ, वर्षा रोकता और बरसाता हूँ। मैं ही अमृत और मृत्यु हूँ। मैं ही सत् और असत् हूँ।",
    meaning:
      "Krishna encompasses all opposites — heat and rain, life and death, existence and non-existence. The divine transcends all dualities. Understanding this dissolves the fear of opposites and anchors one in eternal truth.",
    keywords: ["duality", "rain", "immortality", "death", "being"],
    moodTags: ["awe", "wisdom", "transcendence"],
  },
  {
    id: "9.20",
    chapter: 9,
    verse: 20,
    sanskrit:
      "त्रैविद्या मां सोमपाः पूतपापा यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते | ते पुण्यमासाद्य सुरेन्द्रलोक मश्नन्ति दिव्यान्दिवि देवभोगान् ||",
    transliteration:
      "trai-vidyā māṁ soma-pāḥ pūta-pāpā yajñair iṣhṭvā svar-gatiṁ prārthayante | te puṇyam āsādya surendra-lokam aśhnanti divyān divi deva-bhogān",
    english:
      "Those who study the Vedas and drink the soma juice, seeking the heavenly planets, worship Me indirectly through rituals. They go to the heavenly realm of Indra and enjoy divine pleasures.",
    hindi:
      "तीनों वेदों के ज्ञाता, सोमपान करने वाले, पापमुक्त लोग यज्ञों से मेरी पूजा करके स्वर्ग की प्रार्थना करते हैं। वे पुण्य से इंद्रलोक में दिव्य भोगों को प्राप्त होते हैं।",
    meaning:
      "Vedic ritualists who worship for heavenly rewards do attain those rewards — but only temporarily. They still address Krishna, though indirectly, and receive the fruits they desire. The limitation is the smallness of the desire.",
    keywords: ["vedas", "ritual", "heaven", "temporary", "worship"],
    moodTags: ["wisdom", "guidance", "desire"],
  },
  {
    id: "9.21",
    chapter: 9,
    verse: 21,
    sanskrit:
      "ते तं भुक्त्वा स्वर्गलोकं विशालं क्षीणे पुण्ये मर्त्यलोकं विशन्ति | एवं त्रयीधर्ममनुप्रपन्ना गतागतं कामकामा लभन्ते ||",
    transliteration:
      "te taṁ bhuktvā swarga-lokaṁ viśhālaṁ kṣhīṇe puṇye martya-lokaṁ viśhanti | evaṁ trayī-dharmam anuprapannā gatāgataṁ kāma-kāmā labhante",
    english:
      "Having enjoyed the vast heavenly realm, when their merit is exhausted, they return to the mortal world. Thus, those who seek sense gratification through the three Vedas gain only the cycle of coming and going.",
    hindi:
      "वे उस विशाल स्वर्गलोक को भोगकर पुण्य क्षीण होने पर मृत्युलोक में लौट आते हैं। इस प्रकार तीनों वेदों के धर्म का अनुसरण करने वाले काम-कामी लोग आवागमन को प्राप्त होते हैं।",
    meaning:
      "Heaven is temporary. When the merit that earned it is exhausted, the soul returns to earth. Desire-driven worship leads to the exhausting cycle of going up and coming back. Only Krishna himself, not His gifts, grants liberation.",
    keywords: ["temporary heaven", "rebirth", "cycle", "merit", "desire"],
    moodTags: ["warning", "clarity", "wisdom"],
  },
  {
    id: "9.22",
    chapter: 9,
    verse: 22,
    sanskrit:
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
    transliteration:
      "ananyāśh chintayanto māṁ ye janāḥ paryupāsate | teṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham",
    english:
      "For those who worship Me with exclusive devotion, meditating on My transcendental form, I personally carry what they lack and preserve what they have.",
    hindi:
      "जो अनन्य भक्त मुझे निरन्तर चिंतन करते हुए उपासते हैं, उन नित्य युक्त भक्तों का योगक्षेम मैं स्वयं वहन करता हूँ।",
    meaning:
      "One of the most beloved promises in the Gita. Krishna personally guarantees the welfare of those who worship Him exclusively. 'Yoga' = what they lack He provides; 'kṣhema' = what they have He protects. Complete divine assurance.",
    keywords: ["promise", "protection", "devotion", "exclusive", "welfare"],
    moodTags: ["hope", "devotion", "surrender", "love"],
  },
  {
    id: "9.23",
    chapter: 9,
    verse: 23,
    sanskrit:
      "येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयान्विताः | तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम् ||",
    transliteration:
      "ye'py anya-devatā-bhaktā yajante śhraddhayānvitāḥ | te'pi māmeva kaunteya yajanty avidhi-pūrvakam",
    english:
      "O son of Kunti, even those devotees who worship other gods with faith, they also worship Me alone, though not according to proper rules.",
    hindi:
      "हे कुन्तीपुत्र! जो भक्तजन श्रद्धापूर्वक अन्य देवताओं की पूजा करते हैं, वे भी अविधिपूर्वक मुझे ही पूजते हैं।",
    meaning:
      "All sincere worship reaches Krishna, even when directed at other deities. But without knowledge of the Supreme, such worship is indirect and cannot grant the highest liberation. Love of any deity is love of the One.",
    keywords: ["other gods", "worship", "faith", "indirectly", "inclusivity"],
    moodTags: ["wisdom", "tolerance", "unity"],
  },
  {
    id: "9.24",
    chapter: 9,
    verse: 24,
    sanskrit:
      "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च | न तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते ||",
    transliteration:
      "ahaṁ hi sarva-yajñānāṁ bhoktā cha prabhur eva cha | na tu mām abhijānanti tattvenātaśh chyavanti te",
    english:
      "I am the enjoyer and the Lord of all sacrifices. But those who do not know My true nature fall down.",
    hindi:
      "मैं ही समस्त यज्ञों का भोक्ता और स्वामी हूँ, परन्तु वे लोग मुझे तत्त्व से नहीं जानते, इसलिए वे नीचे गिर जाते हैं।",
    meaning:
      "All sacrifices and worship ultimately flow to Krishna. But those who do not know this truth — who mistake the intermediary deity for the final destination — miss liberation and fall back into the cycle.",
    keywords: ["sacrifice", "enjoyer", "truth", "fall", "knowledge"],
    moodTags: ["wisdom", "warning", "clarity"],
  },
  {
    id: "9.25",
    chapter: 9,
    verse: 25,
    sanskrit:
      "यान्ति देवव्रता देवान्पितृन्यान्ति पितृव्रताः | भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम् ||",
    transliteration:
      "yānti deva-vratā devān pitṝin yānti pitṛi-vratāḥ | bhūtāni yānti bhūtejyā yānti mad-yājino'pi mām",
    english:
      "Those who worship the demigods go to the demigods; those who worship the ancestors go to the ancestors; those who worship ghosts go to the ghosts; and those who worship Me come to Me.",
    hindi:
      "देवव्रती देवताओं को, पितृव्रती पितरों को, भूतों की पूजा करने वाले भूतों को प्राप्त होते हैं, और मेरे भक्त मुझे ही प्राप्त होते हैं।",
    meaning:
      "You reach what you worship. The destination mirrors the devotion. Worshipping the finite leads to the finite; worshipping the Infinite leads to the Infinite. The path to Krishna is the only path that leads beyond all cycles.",
    keywords: ["destination", "worship", "demigods", "ancestors", "liberation"],
    moodTags: ["wisdom", "guidance", "devotion"],
  },
  {
    id: "9.26",
    chapter: 9,
    verse: 26,
    sanskrit:
      "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति | तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||",
    transliteration:
      "patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati | tad ahaṁ bhaktyupahṛitam aśhnāmi prayatātmanaḥ",
    english:
      "If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it.",
    hindi:
      "जो कोई भक्तिपूर्वक मुझे पत्र, पुष्प, फल या जल अर्पण करता है, उस शुद्ध-बुद्धि भक्त का वह प्रेमोपहार मैं स्वीकार करता हूँ।",
    meaning:
      "Perhaps the most tender verse in the Gita. Krishna asks for nothing expensive — only love. A leaf, a flower, water — anything offered with a pure heart is accepted joyfully. Devotion transforms the ordinary into the divine.",
    keywords: ["offering", "love", "devotion", "leaf", "flower"],
    moodTags: ["love", "devotion", "hope", "tenderness"],
  },
  {
    id: "9.27",
    chapter: 9,
    verse: 27,
    sanskrit:
      "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् | यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ||",
    transliteration:
      "yat karoṣhi yad aśhnāsi yaj juhoṣhi dadāsi yat | yat tapasyasi kaunteya tat kuruṣhva mad-arpaṇam",
    english:
      "O son of Kunti, whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform — do that as an offering to Me.",
    hindi:
      "हे कुन्तीपुत्र! तू जो कुछ करता है, जो कुछ खाता है, जो हवन करता है, जो दान देता है और जो तप करता है — वह सब मुझे अर्पण कर।",
    meaning:
      "The complete formula for transforming all of life into worship. Every action, every meal, every gift, every discipline becomes sacred when offered to Krishna. This is the universal practice of karma yoga at its simplest.",
    keywords: ["offering", "action", "eating", "austerity", "dedication"],
    moodTags: ["devotion", "guidance", "purpose", "peace"],
  },
  {
    id: "9.28",
    chapter: 9,
    verse: 28,
    sanskrit: "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः | संन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि ||",
    transliteration:
      "śhubhāśhubha-phalair evaṁ mokṣhyase karma-bandhanaiḥ | sannyāsa-yoga-yuktātmā vimukto mām upaiṣhyasi",
    english:
      "Thus you shall be freed from the bondage of action, from good and bad results alike. With your mind absorbed in the yoga of renunciation, you will be liberated and come to Me.",
    hindi:
      "इस प्रकार तू शुभ-अशुभ फलों के बंधन से मुक्त हो जाएगा। संन्यासयोग से युक्त मन से मुक्त होकर तू मुझे प्राप्त होगा।",
    meaning:
      "Dedicating all actions to Krishna dissolves both good and bad karmic bonds. The result is renunciation-in-action (sannyāsa-yoga) — inner freedom while living fully in the world. This is the royal path to liberation.",
    keywords: ["liberation", "karma", "renunciation", "freedom", "come to me"],
    moodTags: ["hope", "devotion", "peace", "liberation"],
  },
  {
    id: "9.29",
    chapter: 9,
    verse: 29,
    sanskrit:
      "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः | ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् ||",
    transliteration:
      "samo'haṁ sarva-bhūteṣhu na me dveṣhyo'sti na priyaḥ | ye bhajanti tu māṁ bhaktyā mayi te teṣhu chāpyaham",
    english:
      "I am equally disposed toward all beings; none is hateful or dear to Me. But those who worship Me with devotion are in Me, and I am in them.",
    hindi:
      "मैं सभी प्राणियों में समान रूप से स्थित हूँ — न कोई मुझे प्रिय है, न अप्रिय। जो भक्त मुझे भक्तिपूर्वक भजते हैं, वे मुझमें हैं और मैं उनमें हूँ।",
    meaning:
      "Divine love is unconditional — Krishna neither favors nor discriminates against anyone by nature. Yet devotion creates a special reciprocal intimacy: the devotee is 'in' Krishna and Krishna is 'in' them. Love responds to love.",
    keywords: ["equality", "impartiality", "devotee", "in me", "reciprocal"],
    moodTags: ["love", "devotion", "peace", "equality"],
  },
  {
    id: "9.30",
    chapter: 9,
    verse: 30,
    sanskrit:
      "अपि चेत्सुदुराचारो भजते मामनन्यभाक् | साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः ||",
    transliteration:
      "api chet su-durāchāro bhajate mām ananya-bhāk | sādhur eva sa mantavyaḥ samyag vyavasito hi saḥ",
    english:
      "Even if the most sinful worships Me with exclusive devotion, he should be considered righteous, for he has rightly resolved.",
    hindi:
      "यदि अत्यंत दुराचारी भी मुझे अनन्य भाव से भजे, तो उसे साधु ही मानना चाहिए, क्योंकि उसने सम्यक् संकल्प कर लिया है।",
    meaning:
      "Perhaps the most radical promise in the Gita. No one is beyond redemption. The moment a person turns to Krishna with exclusive devotion — regardless of past sins — they have made the right resolution and become worthy of being called virtuous.",
    keywords: ["sinner", "redemption", "devotion", "righteous", "resolve"],
    moodTags: ["hope", "forgiveness", "love", "redemption"],
  },
  {
    id: "9.31",
    chapter: 9,
    verse: 31,
    sanskrit:
      "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति | कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति ||",
    transliteration:
      "kṣhipraṁ bhavati dharmātmā śhaśhvach-chhāntiṁ nigachchhati | kaunteya pratijānīhi na me bhaktaḥ praṇaśhyati",
    english:
      "He soon becomes righteous and attains lasting peace. O son of Kunti, declare it boldly that My devotee never perishes.",
    hindi:
      "वह शीघ्र ही धर्मात्मा हो जाता है और शाश्वत शांति को प्राप्त करता है। हे कुन्तीपुत्र! तू निश्चयपूर्वक घोषणा कर — मेरा भक्त कभी नष्ट नहीं होता।",
    meaning:
      "Krishna asks Arjuna to be His witness and declare this truth to the world: My devotee never perishes. This solemn oath is among Krishna's most powerful promises — the divine guarantee of unfailing protection for the sincere devotee.",
    keywords: [
      "promise",
      "devotee",
      "perishes never",
      "righteousness",
      "peace",
    ],
    moodTags: ["hope", "devotion", "strength", "assurance"],
  },
  {
    id: "9.32",
    chapter: 9,
    verse: 32,
    sanskrit:
      "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः | स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् ||",
    transliteration:
      "māṁ hi pārtha vyapāśhritya ye'pi syuḥ pāpa-yonayaḥ | striyo vaiśhyās tathā śhūdrās te'pi yānti parāṁ gatim",
    english:
      "O son of Pritha, those who take refuge in Me, even those of low birth — women, merchants, and laborers — they too attain the supreme destination.",
    hindi:
      "हे पार्थ! मेरे शरण में आने वाले पाप योनि वाले लोग — स्त्रियाँ, वैश्य और शूद्र — वे भी परमगति को प्राप्त होते हैं।",
    meaning:
      "Krishna's liberation has no social barriers. In a deeply hierarchical society, this was revolutionary — all human beings, regardless of birth, gender, or social class, can reach the highest state through sincere devotion.",
    keywords: ["equality", "liberation", "refuge", "all classes", "supreme"],
    moodTags: ["hope", "equality", "devotion", "compassion"],
  },
  {
    id: "9.33",
    chapter: 9,
    verse: 33,
    sanskrit:
      "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा | अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम् ||",
    transliteration:
      "kiṁ punar brāhmaṇāḥ puṇyā bhaktā rājarṣhayas tathā | anityam asukhaṁ lokam imaṁ prāpya bhajasva mām",
    english:
      "How much more then the pure Brahmanas and devoted royal sages! Having come to this temporary and joyless world, engage in devotion to Me.",
    hindi:
      "फिर पुण्यशाली ब्राह्मण और भक्त राजर्षि तो और भी सहज ही मुझे प्राप्त होंगे। इस अनित्य और दुखपूर्ण संसार को प्राप्त करके मुझे भज।",
    meaning:
      "If even those considered spiritually disadvantaged can reach the Supreme, surely those born in spiritual traditions can attain it even more easily. The human birth is rare and precious — use it for devotion, not temporary pleasures.",
    keywords: ["brahmin", "sage", "temporary world", "devotion", "rare birth"],
    moodTags: ["guidance", "urgency", "devotion", "wisdom"],
  },
  {
    id: "9.34",
    chapter: 9,
    verse: 34,
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु | मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः ||",
    transliteration:
      "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru | mām evaiṣhyasi yuktvaivaṁ ātmānaṁ mat-parāyaṇaḥ",
    english:
      "Fix your mind on Me, be devoted to Me, worship Me, bow down to Me. So shall you come to Me. I promise you truly, for you are dear to Me.",
    hindi:
      "मुझमें मन लगा, मेरा भक्त बन, मेरा यजन कर, मुझे नमस्कार कर। इस प्रकार मुझमें आत्मा को समर्पित करके तू मुझे ही प्राप्त होगा।",
    meaning:
      "The crown jewel of chapter 9. Four simple practices: fix your mind on Me, be My devotee, worship Me, bow to Me. Then you will come to Me. Krishna gives His personal guarantee with the tender words 'you are dear to Me.' This is the highest promise.",
    keywords: ["fix mind", "devotion", "worship", "surrender", "come to me"],
    moodTags: ["love", "devotion", "surrender", "hope", "promise"],
  },

  // ============================================================
  // CHAPTER 10 — Vibhuti Yoga (42 verses)
  // The Yoga of Divine Manifestations
  // ============================================================
  {
    id: "10.1",
    chapter: 10,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच | भूय एव महाबाहो शृणु मे परमं वचः | यत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया ||",
    transliteration:
      "śhrī bhagavān uvācha | bhūya eva mahā-bāho śhṛiṇu me paramaṁ vachaḥ | yat te'haṁ prīyamāṇāya vakṣhyāmi hita-kāmyayā",
    english:
      "The Blessed Lord said: O mighty-armed one, hear again My supreme word, which I shall declare to you who are beloved to Me, for your highest benefit.",
    hindi:
      "श्रीभगवान बोले: हे महाबाहो! अब फिर से मेरा परम वचन सुन, जिसे मैं तेरे हित की इच्छा से तुझ प्रिय के लिए कहूँगा।",
    meaning:
      "Krishna opens chapter 10 by reemphasizing intimacy — Arjuna is 'beloved' (prīyamāṇāya) and this teaching comes from the desire for his highest good. Divine teaching flows from love, not obligation.",
    keywords: ["supreme word", "beloved", "benefit", "teaching", "love"],
    moodTags: ["love", "guidance", "devotion"],
  },
  {
    id: "10.2",
    chapter: 10,
    verse: 2,
    sanskrit:
      "न मे विदुः सुरगणाः प्रभवं न महर्षयः | अहमादिर्हि देवानां महर्षीणां च सर्वशः ||",
    transliteration:
      "na me viduḥ sura-gaṇāḥ prabhavaṁ na maharṣhayaḥ | aham ādir hi devānāṁ maharṣhīṇāṁ cha sarvaśhaḥ",
    english:
      "Neither the hosts of celestial beings nor the great sages know My origin, for I am the source of them all in every way.",
    hindi:
      "न देवताओं के समूह, न महर्षि ही मेरी उत्पत्ति को जानते हैं, क्योंकि मैं सब प्रकार से देवताओं और महर्षियों का भी आदि हूँ।",
    meaning:
      "Even the gods and great sages cannot know Krishna's origin, for He is their origin. This establishes the ultimate transcendence — the cause of all causation cannot itself be caused by something else.",
    keywords: ["origin", "gods", "sages", "source", "transcendent"],
    moodTags: ["awe", "wisdom", "mystery"],
  },
  {
    id: "10.3",
    chapter: 10,
    verse: 3,
    sanskrit:
      "यो मामजमनादिं च वेत्ति लोकमहेश्वरम् | असम्मूढः स मर्त्येषु सर्वपापैः प्रमुच्यते ||",
    transliteration:
      "yo mām ajam anādiṁ cha vetti loka-maheśhvaram | asammūḍhaḥ sa martyeṣhu sarva-pāpaiḥ pramuchyate",
    english:
      "He among mortals who knows Me as the unborn, the beginningless, and the Supreme Lord of all worlds — he is undeluded and is freed from all sins.",
    hindi:
      "जो मनुष्यों में मुझे अजन्मा, अनादि और समस्त लोकों का महेश्वर जानता है, वह ज्ञानवान् है और सभी पापों से मुक्त होता है।",
    meaning:
      "True knowledge of Krishna's nature — unborn, beginningless, supreme — is itself liberating. This knowledge dissolves sin not through ritual but through the transformation of understanding. To truly know is to be freed.",
    keywords: [
      "unborn",
      "beginningless",
      "supreme lord",
      "liberation",
      "knowledge",
    ],
    moodTags: ["wisdom", "liberation", "clarity"],
  },
  {
    id: "10.4",
    chapter: 10,
    verse: 4,
    sanskrit:
      "बुद्धिर्ज्ञानमसम्मोहः क्षमा सत्यं दमः शमः | सुखं दुःखं भवोऽभावो भयं चाभयमेव च ||",
    transliteration:
      "buddhir jñānam asammohaḥ kṣhamā satyaṁ damaḥ śhamaḥ | sukhaṁ duḥkhaṁ bhavo'bhāvo bhayaṁ chābhayam eva cha",
    english:
      "Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, self-control, calmness, happiness, distress, birth, death, fear, and fearlessness —",
    hindi:
      "बुद्धि, ज्ञान, असम्मोह, क्षमा, सत्य, दम, शम, सुख, दुख, जन्म, मृत्यु, भय और अभय —",
    meaning:
      "This verse begins a two-verse declaration listing all qualities of living beings — both virtuous and challenging. All of them originate from Krishna. This is the first half of one complete thought continued in 10.5.",
    keywords: [
      "intelligence",
      "knowledge",
      "forgiveness",
      "fearlessness",
      "qualities",
    ],
    moodTags: ["wisdom", "guidance", "clarity"],
  },
  {
    id: "10.5",
    chapter: 10,
    verse: 5,
    sanskrit:
      "अहिंसा समता तुष्टिस्तपो दानं यशोऽयशः | भवन्ति भावा भूतानां मत्त एव पृथग्विधाः ||",
    transliteration:
      "ahiṁsā samatā tuṣhṭis tapo dānaṁ yaśho'yaśhaḥ | bhavanti bhāvā bhūtānāṁ matta eva pṛithag-vidhāḥ",
    english:
      "Non-violence, equanimity, contentment, austerity, charity, fame, and infamy — all these diverse qualities of living beings arise from Me alone.",
    hindi:
      "अहिंसा, समता, संतोष, तप, दान, यश और अपयश — ये सब प्राणियों के विविध भाव मुझसे ही उत्पन्न होते हैं।",
    meaning:
      "Concluding the list begun in 10.4: all qualities — noble and base, joyful and painful — arise from Krishna alone. Understanding this removes judgment and cultivates equanimity toward all of life's experiences.",
    keywords: ["non-violence", "equanimity", "fame", "all qualities", "source"],
    moodTags: ["wisdom", "peace", "equanimity"],
  },
  {
    id: "10.6",
    chapter: 10,
    verse: 6,
    sanskrit:
      "महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा | मद्भावा मानसा जाता येषां लोक इमाः प्रजाः ||",
    transliteration:
      "maharṣhayaḥ sapta pūrve chatvāro manavas tathā | mad-bhāvā mānasā jātā yeṣhāṁ loka imāḥ prajāḥ",
    english:
      "The seven great sages, the four Manus of earlier ages — born of My mind and endued with My power — from them arose all the people in this world.",
    hindi:
      "सात महर्षि और उससे पहले चार मनु — ये सब मेरे मनोभाव से उत्पन्न हुए हैं, जिनसे इस संसार में सभी प्रजाएं हुई हैं।",
    meaning:
      "The great sages and Manus (progenitors of humanity) were born from Krishna's mind — not as ordinary beings but as divine thoughts made manifest. All human lineage ultimately traces back to divine consciousness.",
    keywords: ["sages", "manus", "creation", "divine mind", "lineage"],
    moodTags: ["awe", "wisdom", "heritage"],
  },
  {
    id: "10.7",
    chapter: 10,
    verse: 7,
    sanskrit:
      "एतां विभूतिं योगं च मम यो वेत्ति तत्त्वतः | सोऽविकम्पेन योगेन युज्यते नात्र संशयः ||",
    transliteration:
      "etāṁ vibhūtiṁ yogaṁ cha mama yo vetti tattvataḥ | so'vikampena yogena yujyate nātra sanśhayaḥ",
    english:
      "He who in truth knows My glories and My divine powers — he is united with Me through unwavering yoga. Of this there is no doubt.",
    hindi:
      "जो मेरी इस विभूति और योगशक्ति को तत्त्वतः जानता है, वह अविकम्प योग से युक्त हो जाता है — इसमें कोई संशय नहीं।",
    meaning:
      "True knowledge of Krishna's manifestations and power leads to unshakeable yoga — union with the divine. This chapter is not merely philosophy; it is a path to unwavering practice and connection.",
    keywords: ["vibhuti", "divine power", "unwavering", "yoga", "knowledge"],
    moodTags: ["devotion", "clarity", "strength"],
  },
  {
    id: "10.8",
    chapter: 10,
    verse: 8,
    sanskrit:
      "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते | इति मत्वा भजन्ते मां बुधा भावसमन्विताः ||",
    transliteration:
      "ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate | iti matvā bhajante māṁ budhā bhāva-samanvitāḥ",
    english:
      "I am the origin of all things; from Me all things proceed. Knowing this, the wise worship Me with all their heart.",
    hindi:
      "मैं ही सब का उद्गम हूँ, मुझसे ही सब कुछ प्रवर्तित होता है — इस प्रकार जानकर बुद्धिमान लोग भावपूर्वक मेरी उपासना करते हैं।",
    meaning:
      "The master declaration of chapter 10: I am the source of all existence. Everything that moves and does not move originates from Me. The wise who understand this worship with full emotion (bhāva), not mere ritual.",
    keywords: ["origin", "source", "all things", "wise", "devotion"],
    moodTags: ["awe", "devotion", "wisdom", "love"],
  },
  {
    id: "10.9",
    chapter: 10,
    verse: 9,
    sanskrit:
      "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम् | कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च ||",
    transliteration:
      "mach-chittā mad-gata-prāṇā bodhayantaḥ parasparam | kathayantaśh cha māṁ nityaṁ tuṣhyanti cha ramanti cha",
    english:
      "With their minds fixed on Me, with their lives given to Me, enlightening each other and always speaking of Me, they are satisfied and delighted.",
    hindi:
      "मुझमें चित्त लगाए हुए, मुझमें प्राण अर्पण किए हुए, परस्पर मेरी बोध देते हुए और सदा मेरी कथाएं कहते हुए वे संतुष्ट और आनंदित होते हैं।",
    meaning:
      "This beautiful verse describes the life of true devotees: their minds fixed on Krishna, their very life-breath offered to Him. They joyfully share this wisdom with each other and live in constant bliss. This is satsang.",
    keywords: ["satsang", "devotion", "sharing", "joy", "community"],
    moodTags: ["joy", "devotion", "love", "community"],
  },
  {
    id: "10.10",
    chapter: 10,
    verse: 10,
    sanskrit:
      "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् | ददामि बुद्धियोगं तं येन मामुपयान्ति ते ||",
    transliteration:
      "teṣhāṁ satata-yuktānāṁ bhajatāṁ prīti-pūrvakam | dadāmi buddhi-yogaṁ taṁ yena mām upayānti te",
    english:
      "To those who are constantly devoted and who worship Me with love, I give the yoga of wisdom by which they come to Me.",
    hindi:
      "उन नित्य युक्त और प्रेमपूर्वक भजन करने वालों को मैं वह बुद्धियोग देता हूँ जिससे वे मुझे प्राप्त होते हैं।",
    meaning:
      "Krishna personally bestows the yoga of discernment (buddhi-yoga) upon devoted seekers. The divine intelligence needed for liberation is not earned — it is given as grace to those who love with consistency and devotion.",
    keywords: ["buddhi yoga", "wisdom", "grace", "constant devotion", "gift"],
    moodTags: ["grace", "devotion", "guidance", "hope"],
  },
  {
    id: "10.11",
    chapter: 10,
    verse: 11,
    sanskrit: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः | नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ||",
    transliteration:
      "teṣhām evānukampārtham aham ajñāna-jaṁ tamaḥ | nāśhayāmyātma-bhāva-stho jñāna-dīpena bhāsvatā",
    english:
      "Out of compassion for them, I, dwelling in their hearts, destroy the darkness born of ignorance with the shining lamp of knowledge.",
    hindi:
      "उनके प्रति अनुकंपावश मैं उनके अन्तःकरण में स्थित होकर ज्ञानरूपी प्रकाशमय दीपक से अज्ञान से उत्पन्न अंधकार का नाश करता हूँ।",
    meaning:
      "Krishna dwells in the heart of every devotee and personally destroys the darkness of ignorance with the lamp of knowledge. Liberation is not self-achieved — it is gifted by the divine presence already living within us.",
    keywords: ["compassion", "heart", "darkness", "knowledge", "lamp"],
    moodTags: ["grace", "love", "hope", "compassion"],
  },
  {
    id: "10.12",
    chapter: 10,
    verse: 12,
    sanskrit:
      "अर्जुन उवाच | परं ब्रह्म परं धाम पवित्रं परमं भवान् | पुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम् ||",
    transliteration:
      "arjuna uvācha | paraṁ brahma paraṁ dhāma pavitraṁ paramaṁ bhavān | puruṣhaṁ śhāśhvataṁ divyam ādi-devam ajaṁ vibhum",
    english:
      "Arjuna said: You are the Supreme Brahman, the Supreme Abode, the Supreme Purifier. You are the eternal, divine Person, the Primeval Lord, the unborn, the all-pervading.",
    hindi:
      "अर्जुन बोले: आप परब्रह्म, परमधाम और परम पवित्र हैं। आप शाश्वत, दिव्य पुरुष, आदिदेव, अजन्मा और विभु हैं।",
    meaning:
      "Arjuna's heart overflows in this magnificent recognition of Krishna's supreme nature. Having heard the teachings, he now speaks from direct understanding — not intellectual agreement but living realization. This is the flowering of the teaching.",
    keywords: ["supreme brahman", "recognition", "divine", "eternal", "arjuna"],
    moodTags: ["awe", "devotion", "recognition", "love"],
  },
  {
    id: "10.13",
    chapter: 10,
    verse: 13,
    sanskrit:
      "आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा | असितो देवलो व्यासः स्वयं चैव ब्रवीषि मे ||",
    transliteration:
      "āhus tvām ṛiṣhayaḥ sarve devarṣhir nāradas tathā | asito devalo vyāsaḥ svayaṁ chaiva bravīṣhi me",
    english:
      "All the sages declare this about You — the divine sage Narada, as well as Asita, Devala, Vyasa, and You Yourself are now telling me.",
    hindi:
      "सभी ऋषि आपके बारे में यही कहते हैं — देवर्षि नारद, असित, देवल, व्यास — और आप स्वयं भी मुझसे यही कह रहे हैं।",
    meaning:
      "Arjuna corroborates Krishna's self-revelation with the testimony of the great sages — Narada, Asita, Devala, Vyasa. The teaching is not new; it is the perennial wisdom confirmed by all who have truly seen. This gives Arjuna deep confidence.",
    keywords: ["sages", "narada", "vyasa", "confirmation", "testimony"],
    moodTags: ["confidence", "devotion", "wisdom"],
  },
  {
    id: "10.14",
    chapter: 10,
    verse: 14,
    sanskrit:
      "सर्वमेतदृतं मन्ये यन्मां वदसि केशव | न हि ते भगवन्व्यक्तिं विदुर्देवा न दानवाः ||",
    transliteration:
      "sarvam etad ṛitaṁ manye yan māṁ vadasi keśhava | na hi te bhagavan vyaktiṁ vidur devā na dānavāḥ",
    english:
      "O Keshava, I accept as true all that You have told me. Neither the gods nor the demons, O Lord, know Your manifestation.",
    hindi:
      "हे केशव! आप मुझसे जो कुछ कह रहे हैं, उसे मैं सत्य मानता हूँ। हे भगवन! न देवता और न दानव आपके स्वरूप को जानते हैं।",
    meaning:
      "Arjuna surrenders to the truth of Krishna's teaching. His acceptance is complete — 'I believe it all.' The incomprehensibility of the divine is not a weakness of the divine but the limitation of finite minds, even divine ones.",
    keywords: ["acceptance", "truth", "incomprehensible", "gods", "demons"],
    moodTags: ["surrender", "faith", "devotion"],
  },
  {
    id: "10.15",
    chapter: 10,
    verse: 15,
    sanskrit: "स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम | भूतभावन भूतेश देवदेव जगत्पते ||",
    transliteration:
      "svayam evātmanātmānaṁ vettha tvaṁ puruṣhottama | bhūta-bhāvana bhūteśha deva-deva jagat-pate",
    english:
      "O Supreme Person, O Creator of beings, O Lord of all beings, O God of gods, O Lord of the universe — You alone know Yourself by Yourself.",
    hindi:
      "हे पुरुषोत्तम! हे भूतभावन! हे भूतेश! हे देवदेव! हे जगत्पते! आप अपने द्वारा अपने आपको जानते हैं।",
    meaning:
      "Arjuna acknowledges the ultimate truth: only the Self can know the Self. Krishna knows Himself through Himself — this is the nature of absolute consciousness. The finite cannot fully contain the infinite; only the infinite knows itself.",
    keywords: [
      "self-knowing",
      "supreme person",
      "absolute",
      "consciousness",
      "lord",
    ],
    moodTags: ["awe", "humility", "devotion"],
  },
  {
    id: "10.16",
    chapter: 10,
    verse: 16,
    sanskrit:
      "वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः | याभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि ||",
    transliteration:
      "vaktum arhasy aśheṣheṇa divyā hyātma-vibhūtayaḥ | yābhir vibhūtibhir lokān imāṁs tvaṁ vyāpya tiṣhṭhasi",
    english:
      "Please tell me fully of Your divine glories by which You pervade and sustain all these worlds.",
    hindi:
      "कृपया उन अपनी दिव्य विभूतियों को पूर्णतया बताइए जिनसे आप इन सभी लोकों में व्याप्त होकर स्थित हैं।",
    meaning:
      "Arjuna's beautiful request — tell me your glories fully. This tender eagerness for divine knowledge reflects the ideal student: not satisfied with partial understanding, longing for the complete vision of the sacred.",
    keywords: ["request", "divine glories", "vibhuti", "pervades", "curiosity"],
    moodTags: ["curiosity", "devotion", "longing", "wonder"],
  },
  {
    id: "10.17",
    chapter: 10,
    verse: 17,
    sanskrit:
      "कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् | केषु केषु च भावेषु चिन्त्योऽसि भगवन्मया ||",
    transliteration:
      "kathaṁ vidyām ahaṁ yogiṁs tvāṁ sadā parichintayan | keṣhu keṣhu cha bhāveṣhu chintyo'si bhagavan mayā",
    english:
      "O mystic Lord, how shall I always know You while meditating on You? And in which forms should I meditate upon You, O Blessed Lord?",
    hindi:
      "हे योगेश्वर! मैं सदा ध्यान करते हुए आपको किस प्रकार जानूँ? हे भगवन! आप किन-किन भावों में मेरे द्वारा ध्यान किए जाने योग्य हैं?",
    meaning:
      "A practical question from a sincere seeker: how do I meditate on You? This is the question of every devotee — not 'is God real?' but 'how do I find You in daily life?' Chapter 10 is the answer to this profound question.",
    keywords: ["meditation", "how to know", "forms", "practice", "seeker"],
    moodTags: ["seeking", "devotion", "practice", "curiosity"],
  },
  {
    id: "10.18",
    chapter: 10,
    verse: 18,
    sanskrit:
      "विस्तरेणात्मनो योगं विभूतिं च जनार्दन | भूयः कथय तृप्तिर्हि शृण्वतो नास्ति मेऽमृतम् ||",
    transliteration:
      "vistareṇātmano yogaṁ vibhūtiṁ cha janārdana | bhūyaḥ kathaya tṛiptir hi śhṛiṇvato nāsti me'mṛitam",
    english:
      "Tell me again at length, O Janardana, of Your divine powers and glories, for I am not yet satisfied hearing Your nectarine words.",
    hindi:
      "हे जनार्दन! अपने योग और विभूति को फिर विस्तारपूर्वक कहिए, क्योंकि आपके अमृत वचन सुनते हुए मुझे तृप्ति नहीं होती।",
    meaning:
      "Arjuna cannot get enough of Krishna's words — they are 'amrita' (nectar/immortality). This is the mark of the true lover of wisdom: divine teaching never becomes stale. Every repetition reveals deeper layers of meaning.",
    keywords: [
      "nectar",
      "more teaching",
      "insatiable",
      "divine words",
      "longing",
    ],
    moodTags: ["love", "longing", "devotion", "joy"],
  },
  {
    id: "10.19",
    chapter: 10,
    verse: 19,
    sanskrit:
      "श्रीभगवानुवाच | हन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः | प्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे ||",
    transliteration:
      "śhrī bhagavān uvācha | hanta te kathayiṣhyāmi divyā hyātma-vibhūtayaḥ | prādhānyataḥ kuru-śhreṣhṭha nāstyanto vistarasya me",
    english:
      "The Blessed Lord said: Yes, I will tell you of My divine glories — but only the prominent ones, O best of the Kurus, for My manifestations are endless.",
    hindi:
      "श्रीभगवान बोले: हे कुरुश्रेष्ठ! अब मैं तुझे अपनी दिव्य विभूतियाँ प्रधानतः बताऊँगा, क्योंकि मेरे विस्तार का कोई अंत नहीं।",
    meaning:
      "Krishna graciously agrees but adds a humbling caveat: even describing only the prominent manifestations is necessary, because His glories are literally endless. This acknowledges the infinite nature of the divine while making it accessible.",
    keywords: [
      "endless",
      "prominent",
      "divine glories",
      "infinite",
      "beginning",
    ],
    moodTags: ["awe", "humility", "wonder"],
  },
  {
    id: "10.20",
    chapter: 10,
    verse: 20,
    sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः | अहमादिश्च मध्यं च भूतानामन्त एव च ||",
    transliteration:
      "aham ātmā guḍākeśha sarva-bhūtāśhaya-sthitaḥ | aham ādiśh cha madhyaṁ cha bhūtānām anta eva cha",
    english:
      "O Gudakesha, I am the Self dwelling in the heart of all beings. I am the beginning, the middle, and the end of all beings.",
    hindi:
      "हे गुडाकेश! मैं सभी प्राणियों के हृदय में स्थित आत्मा हूँ। मैं ही सभी प्राणियों का आदि, मध्य और अंत हूँ।",
    meaning:
      "The supreme declaration: I am the Self — the Ātman — in every being. Not merely external; Krishna is the deepest inner reality of all. He is also the alpha and omega of every being. This makes all of creation sacred.",
    keywords: ["atman", "self", "heart", "beginning middle end", "all beings"],
    moodTags: ["awe", "devotion", "unity", "sacred"],
  },
  {
    id: "10.21",
    chapter: 10,
    verse: 21,
    sanskrit:
      "आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान् | मरीचिर्मरुतामस्मि नक्षत्राणामहं शशी ||",
    transliteration:
      "ādityānām ahaṁ viṣhṇur jyotiṣhāṁ ravir aṁśhumān | marīchir marutām asmi nakṣhatrāṇām ahaṁ śhaśhī",
    english:
      "Among the Adityas I am Vishnu; among luminaries I am the radiant sun; among the Maruts I am Marichi; among the stars of night I am the moon.",
    hindi:
      "मैं आदित्यों में विष्णु हूँ, प्रकाशमान वस्तुओं में किरणों वाला सूर्य हूँ, मरुतों में मरीचि हूँ और नक्षत्रों में चंद्रमा हूँ।",
    meaning:
      "Krishna begins His glorious catalogue of divine manifestations — in every domain of existence, He is the supreme exemplar of that category. Not all things equally, but the highest expression of each. The universe is a display of His excellence.",
    keywords: ["vishnu", "sun", "moon", "stars", "manifestations"],
    moodTags: ["awe", "wonder", "devotion"],
  },
  {
    id: "10.22",
    chapter: 10,
    verse: 22,
    sanskrit:
      "वेदानां सामवेदोऽस्मि देवानामस्मि वासवः | इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ||",
    transliteration:
      "vedānāṁ sāma-vedo'smi devānām asmi vāsavaḥ | indriyāṇāṁ manaśh chāsmi bhūtānām asmi chetanā",
    english:
      "Among the Vedas I am the Sama Veda; among the gods I am Vasava (Indra); among the senses I am the mind; and in living beings I am consciousness.",
    hindi:
      "मैं वेदों में सामवेद हूँ, देवताओं में इंद्र हूँ, इन्द्रियों में मन हूँ और प्राणियों में चेतना हूँ।",
    meaning:
      "Among sacred scriptures — the musical, devotional Sama Veda. Among gods — Indra, king of heaven. Among senses — the mind, their controller. Among all beings — pure consciousness itself. Krishna is always the highest.",
    keywords: ["sama veda", "indra", "mind", "consciousness", "highest"],
    moodTags: ["awe", "wonder", "wisdom"],
  },
  {
    id: "10.23",
    chapter: 10,
    verse: 23,
    sanskrit:
      "रुद्राणां शङ्करश्चास्मि वित्तेशो यक्षरक्षसाम् | वसूनां पावकश्चास्मि मेरुः शिखरिणामहम् ||",
    transliteration:
      "rudrāṇāṁ śhaṅkaraśh chāsmi vitteśho yakṣha-rakṣhasām | vasūnāṁ pāvakaśh chāsmi meruḥ śhikhariṇām aham",
    english:
      "Among the Rudras I am Shankara (Shiva); among the Yakshas and Rakshasas I am Kubera (the lord of wealth); among the Vasus I am fire; and among the mountains I am Meru.",
    hindi:
      "मैं रुद्रों में शंकर हूँ, यक्षों और राक्षसों में कुबेर हूँ, वसुओं में अग्नि हूँ और पर्वतों में मेरु हूँ।",
    meaning:
      "Among the divine forces — Shiva, the greatest Rudra. Among guardians of wealth — Kubera. Among the Vasus — fire, the purifier and carrier of offerings. Among mountains — Meru, the cosmic axis. Krishna embodies every supreme form.",
    keywords: ["shiva", "kubera", "fire", "meru", "divine forces"],
    moodTags: ["awe", "devotion", "grandeur"],
  },
  {
    id: "10.24",
    chapter: 10,
    verse: 24,
    sanskrit:
      "पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् | सेनानीनामहं स्कन्दः सरसामस्मि सागरः ||",
    transliteration:
      "purodhasāṁ cha mukhyaṁ māṁ viddhi pārtha bṛihaspatim | senānīnām ahaṁ skandaḥ sarasām asmi sāgaraḥ",
    english:
      "O Partha, among priests know Me to be the chief, Brihaspati. Among generals I am Skanda; among bodies of water I am the ocean.",
    hindi:
      "हे पार्थ! पुरोहितों में मुखिया बृहस्पति को मैं ही जानो। सेनापतियों में मैं स्कन्द हूँ और जलाशयों में समुद्र हूँ।",
    meaning:
      "Among divine priests — Brihaspati, guru of the gods. Among generals — Skanda (Kartikeya), the divine warrior. Among water bodies — the boundless ocean. Each domain has its supreme, and that supreme is Krishna.",
    keywords: ["brihaspati", "skanda", "ocean", "priest", "general"],
    moodTags: ["awe", "wonder", "devotion"],
  },
  {
    id: "10.25",
    chapter: 10,
    verse: 25,
    sanskrit:
      "महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम् | यज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः ||",
    transliteration:
      "maharṣhīṇāṁ bhṛigur ahaṁ girām asmy ekam akṣharam | yajñānāṁ japa-yajño'smi sthāvarāṇāṁ himālayaḥ",
    english:
      "Among the great sages I am Bhrigu; among words I am the single syllable Om; among sacrifices I am japa (silent repetition); among immovable things I am the Himalayas.",
    hindi:
      "मैं महर्षियों में भृगु हूँ, वाणी में एकाक्षर ॐ हूँ, यज्ञों में जपयज्ञ हूँ और स्थावरों में हिमालय हूँ।",
    meaning:
      "Among all forms of practice, japa — silent repetition of the divine name — is the greatest sacrifice. Among sacred sounds — the primordial Om. Among the great sages — Bhrigu. Among all that stands firm — the eternal Himalayas.",
    keywords: ["om", "japa", "himalaya", "bhrigu", "sacrifice"],
    moodTags: ["devotion", "practice", "awe", "sacred"],
  },
  {
    id: "10.26",
    chapter: 10,
    verse: 26,
    sanskrit:
      "अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः | गन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः ||",
    transliteration:
      "aśhvatthaḥ sarva-vṛikṣhāṇāṁ devarṣhīṇāṁ cha nāradaḥ | gandharvāṇāṁ chitrarathaḥ siddhānāṁ kapilo muniḥ",
    english:
      "Among all trees I am the Ashvattha (sacred fig); among divine sages I am Narada; among Gandharvas I am Chitraratha; among the Siddhas I am Kapila.",
    hindi:
      "मैं सभी वृक्षों में अश्वत्थ हूँ, देवर्षियों में नारद हूँ, गंधर्वों में चित्ररथ हूँ और सिद्धों में कपिल मुनि हूँ।",
    meaning:
      "The sacred fig tree (peepal/Ashvattha) is where Buddhas realize enlightenment — Krishna declares Himself as this tree of wisdom. Narada the divine sage who spreads devotion everywhere represents Krishna among divine sages.",
    keywords: ["ashvattha", "narada", "kapila", "sacred fig", "siddhas"],
    moodTags: ["wonder", "devotion", "sacred", "nature"],
  },
  {
    id: "10.27",
    chapter: 10,
    verse: 27,
    sanskrit:
      "उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम् | ऐरावतं गजेन्द्राणां नराणां च नराधिपम् ||",
    transliteration:
      "uchchaiḥ-śhravasam aśhvānāṁ viddhi mām amṛitodbhavam | airāvataṁ gajendrāṇāṁ narāṇāṁ cha narādhipam",
    english:
      "Know Me among horses as Ucchaishravas, born from the churning of nectar; among lordly elephants as Airavata; and among men as the monarch.",
    hindi:
      "मुझे घोड़ों में अमृत से उत्पन्न उच्चैःश्रवस जानो। मैं गजराजों में ऐरावत हूँ और मनुष्यों में राजा हूँ।",
    meaning:
      "Among the divine horses — Ucchaishravas, the celestial steed born from the churning of the cosmic ocean. Among elephants — Airavata, Indra's majestic mount. Even in the human world — the king, the embodiment of dharmic governance.",
    keywords: ["ucchaishravas", "airavata", "king", "celestial", "horse"],
    moodTags: ["awe", "majesty", "wonder"],
  },
  {
    id: "10.28",
    chapter: 10,
    verse: 28,
    sanskrit:
      "आयुधानामहं वज्रं धेनूनामस्मि कामधुक् | प्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः ||",
    transliteration:
      "āyudhānām ahaṁ vajraṁ dhenūnām asmi kāmadhuk | prajanaśh chāsmi kandarpaḥ sarpāṇām asmi vāsukiḥ",
    english:
      "Among weapons I am the thunderbolt; among cows I am the Kamadhenu (wish-fulfilling cow); among the causes of procreation I am Kandarpa (the god of love); among serpents I am Vasuki.",
    hindi:
      "मैं अस्त्रों में वज्र हूँ, गायों में कामधेनु हूँ, उत्पत्ति के कारणों में कन्दर्प हूँ और सर्पों में वासुकि हूँ।",
    meaning:
      "Among weapons — the mighty thunderbolt of Indra. Among sacred animals — the wish-fulfilling Kamadhenu. Among creative forces — Kandarpa (Kamadeva), the divine power of love and creation. Among serpents — Vasuki, adorner of Shiva.",
    keywords: ["thunderbolt", "kamadhenu", "kandarpa", "vasuki", "love"],
    moodTags: ["awe", "wonder", "power"],
  },
  {
    id: "10.29",
    chapter: 10,
    verse: 29,
    sanskrit:
      "अनन्तश्चास्मि नागानां वरुणो यादसामहम् | पितृ‍णामर्यमा चास्मि यमः संयमतामहम् ||",
    transliteration:
      "anantaśh chāsmi nāgānāṁ varuṇo yādasām aham | pitṝiṇām aryamā chāsmi yamaḥ saṁyamatām aham",
    english:
      "Among the Nagas I am Ananta; among aquatic beings I am Varuna; among the ancestors I am Aryama; among those who restrain I am Yama, the lord of death.",
    hindi:
      "मैं नागों में अनन्त हूँ, जल-देवताओं में वरुण हूँ, पितरों में अर्यमा हूँ और नियंत्रण करने वालों में यम हूँ।",
    meaning:
      "Among the cosmic serpents — Ananta (Shesha), the infinite one on whom Vishnu rests. Among ocean deities — Varuna. Among ancestral forces — Aryama. Among those who enforce cosmic order — Yama, the lord of dharmic justice.",
    keywords: ["ananta", "varuna", "yama", "cosmic order", "infinite"],
    moodTags: ["awe", "cosmic", "wonder"],
  },
  {
    id: "10.30",
    chapter: 10,
    verse: 30,
    sanskrit:
      "प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम् | मृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् ||",
    transliteration:
      "prahlādaśh chāsmi daityānāṁ kālaḥ kalayatām aham | mṛigāṇāṁ cha mṛigendro'haṁ vainateyaśh cha pakṣhiṇām",
    english:
      "Among the Daityas I am Prahlada; among reckoners I am Time; among beasts I am the lion; among birds I am Garuda.",
    hindi:
      "मैं दैत्यों में प्रह्लाद हूँ, गणना करने वालों में काल हूँ, पशुओं में सिंह हूँ और पक्षियों में गरुड़ हूँ।",
    meaning:
      "Among demons — Prahlada, who chose devotion over demonic nature. Among measures — Time, the great equalizer. Among animals — the lion, king of beasts. Among birds — Garuda, Vishnu's divine eagle. Krishna manifests in every kingdom of life.",
    keywords: ["prahlada", "time", "lion", "garuda", "devotion"],
    moodTags: ["awe", "devotion", "wonder", "power"],
  },
  {
    id: "10.31",
    chapter: 10,
    verse: 31,
    sanskrit:
      "पवनः पवतामस्मि रामः शस्त्रभृतामहम् | झषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ||",
    transliteration:
      "pavanaḥ pavatām asmi rāmaḥ śhastra-bhṛitām aham | jhaṣhāṇāṁ makaraśh chāsmi srotasām asmi jāhnavī",
    english:
      "Among purifiers I am the wind; among wielders of weapons I am Rama; among fish I am the shark; and among rivers I am the Ganga.",
    hindi:
      "मैं पवित्र करने वालों में वायु हूँ, शस्त्रधारियों में राम हूँ, मछलियों में मकर हूँ और नदियों में गंगा हूँ।",
    meaning:
      "Among purifiers — wind, which purifies air itself. Among warriors — Rama, the ideal king and avatar of righteousness. Among sea creatures — the mighty makara. Among rivers — the Ganga, holiest of rivers, considered to flow from Vishnu's feet.",
    keywords: ["wind", "rama", "ganga", "purifier", "sacred river"],
    moodTags: ["awe", "devotion", "sacred", "purity"],
  },
  {
    id: "10.32",
    chapter: 10,
    verse: 32,
    sanskrit:
      "सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन | अध्यात्मविद्या विद्यानां वादः प्रवदतामहम् ||",
    transliteration:
      "sargāṇām ādir antaśh cha madhyaṁ chaivāham arjuna | adhyātma-vidyā vidyānāṁ vādaḥ pravadatām aham",
    english:
      "Among creations I am the beginning, the end, and the middle also, O Arjuna. Among all sciences I am the spiritual science of the Self; and in argument I am the conclusive truth.",
    hindi:
      "हे अर्जुन! मैं सृष्टियों में आदि, मध्य और अंत हूँ। विद्याओं में अध्यात्मविद्या हूँ और प्रवचनकर्ताओं में वाद हूँ।",
    meaning:
      "Among all knowledge — the science of the Self (adhyātma-vidyā) is supreme. Among all discourse — the conclusive argument that leads to truth. Krishna is both the beginning and end of all enquiry, the first and last word in all matters.",
    keywords: [
      "beginning end",
      "spiritual science",
      "self knowledge",
      "argument",
      "truth",
    ],
    moodTags: ["wisdom", "awe", "clarity"],
  },
  {
    id: "10.33",
    chapter: 10,
    verse: 33,
    sanskrit:
      "अक्षराणामकारोऽस्मि द्वन्द्वः सामासिकस्य च | अहमेवाक्षयः कालो धाताहं विश्वतोमुखः ||",
    transliteration:
      "akṣharāṇām akāro'smi dvandvaḥ sāmāsikasya cha | aham evākṣhayaḥ kālo dhātāhaṁ viśhvato-mukhaḥ",
    english:
      "Among letters I am the letter A; among compounds I am the dual compound; I am also inexhaustible Time and the Creator facing all directions.",
    hindi: "मैं अक्षरों में अकार हूँ, समासों में द्वंद्व हूँ, अक्षय काल हूँ और विश्वमुख धाता हूँ।",
    meaning:
      "The first letter 'A' (अ) — the basis of all Sanskrit — is Krishna. In the alphabetic order of creation, He is the beginning. He is also inexhaustible Time itself and Brahma the creator who faces all directions simultaneously.",
    keywords: ["letter A", "time", "creator", "compound", "inexhaustible"],
    moodTags: ["awe", "wisdom", "language", "creation"],
  },
  {
    id: "10.34",
    chapter: 10,
    verse: 34,
    sanskrit:
      "मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम् | कीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा ||",
    transliteration:
      "mṛityuḥ sarva-haraśh chāham udbhavaśh cha bhaviṣhyatām | kīrtiḥ śhrīr vāk cha nārīṇāṁ smṛitir medhā dhṛitiḥ kṣhamā",
    english:
      "I am also death — the all-devouring — and the origin of future beings. Among feminine qualities I am fame, prosperity, speech, memory, intelligence, constancy, and patience.",
    hindi:
      "मैं सबको हर लेने वाला मृत्यु हूँ और भविष्य में होने वालों का उद्गम भी हूँ। स्त्रियों में कीर्ति, श्री, वाक्, स्मृति, मेधा, धृति और क्षमा हूँ।",
    meaning:
      "Krishna is also death — He takes everything back into Himself. He is also the origin of all future births. Among feminine divine qualities — fame, beauty, speech, memory, wisdom, constancy, and forgiveness — all are expressions of the divine feminine as Krishna.",
    keywords: ["death", "fame", "speech", "memory", "patience"],
    moodTags: ["awe", "wisdom", "feminine", "divine"],
  },
  {
    id: "10.35",
    chapter: 10,
    verse: 35,
    sanskrit:
      "बृहत्साम तथा साम्नां गायत्री छन्दसामहम् | मासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः ||",
    transliteration:
      "bṛihat-sāma tathā sāmnāṁ gāyatrī chhandasām aham | māsānāṁ mārgaśhīrṣho'ham ṛitūnāṁ kusumākaraḥ",
    english:
      "Among the hymns of the Sama Veda I am the Brihatsama; among poetic meters I am the Gayatri; among months I am November-December (Margashirsha); and among seasons I am the flower-bearing spring.",
    hindi:
      "मैं सामों में बृहत्साम हूँ, छन्दों में गायत्री हूँ, मासों में मार्गशीर्ष हूँ और ऋतुओं में कुसुमाकर वसन्त हूँ।",
    meaning:
      "The Gayatri — the most sacred Vedic verse chanted daily at dawn — is Krishna. Among months — Margashirsha (November-December), considered most auspicious. Among seasons — spring, when all of creation blossoms and celebrates the divine.",
    keywords: ["gayatri", "spring", "Margashirsha", "sama veda", "seasons"],
    moodTags: ["beauty", "devotion", "sacred", "awe"],
  },
  {
    id: "10.36",
    chapter: 10,
    verse: 36,
    sanskrit:
      "द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम् | जयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम् ||",
    transliteration:
      "dyūtaṁ chhalayatām asmi tejas tejasvinām aham | jayo'smi vyavasāyo'smi sattvaṁ sattvavatām aham",
    english:
      "Among fraudulent activities I am gambling; among the splendid I am the splendor; I am victory; I am adventure; I am the strength of the strong.",
    hindi:
      "मैं छल करने वालों में जुआ हूँ, तेजस्वियों में तेज हूँ, जय हूँ, व्यवसाय हूँ और सत्त्ववानों में सत्त्व हूँ।",
    meaning:
      "Even in seemingly negative forces — gambling — the element of divine fortune operates. In the strong — their inner sattva (purity) is Krishna. In all victories — the divine power behind success. Everything, even imperfection, reveals the divine at its center.",
    keywords: ["gambling", "splendor", "victory", "strength", "sattva"],
    moodTags: ["awe", "paradox", "wisdom"],
  },
  {
    id: "10.37",
    chapter: 10,
    verse: 37,
    sanskrit:
      "वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जयः | मुनीनामप्यहं व्यासः कवीनामुशना कविः ||",
    transliteration:
      "vṛiṣhṇīnāṁ vāsudevo'smi pāṇḍavānāṁ dhanañjayaḥ | munīnām apy ahaṁ vyāsaḥ kavīnām uśhanā kaviḥ",
    english:
      "Among the Vrishnis I am Vasudeva (Krishna Himself); among the Pandavas I am Arjuna (Dhananjaya); among the sages I am Vyasa; and among the great thinkers I am Ushana (Shukracharya).",
    hindi:
      "मैं वृष्णियों में वासुदेव हूँ, पाण्डवों में धनञ्जय हूँ, मुनियों में व्यास हूँ और कवियों में शुक्राचार्य हूँ।",
    meaning:
      "A deeply personal declaration: among the Vrishnis, Krishna says He is Himself — Vasudeva. Among the Pandavas — Arjuna, who is hearing this teaching. Among sages — Vyasa, who compiled the Mahabharata. The teacher and student are both manifestations of the divine.",
    keywords: ["vasudeva", "arjuna", "vyasa", "personal", "manifestation"],
    moodTags: ["love", "intimacy", "devotion", "awe"],
  },
  {
    id: "10.38",
    chapter: 10,
    verse: 38,
    sanskrit:
      "दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् | मौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम् ||",
    transliteration:
      "daṇḍo damayatām asmi nītir asmi jigīṣhatām | maunaṁ chaivāsmi guhyānāṁ jñānaṁ jñānavatām aham",
    english:
      "Among means of restraint I am punishment; among those who seek victory I am ethics; among secrets I am silence; and among the wise I am wisdom.",
    hindi:
      "मैं दमन करने वालों में दण्ड हूँ, जीतने की इच्छा रखने वालों में नीति हूँ, रहस्यों में मौन हूँ और ज्ञानवानों में ज्ञान हूँ।",
    meaning:
      "Among disciplinary forces — righteous punishment. Among those who seek victory — ethical means. Among hidden things — silence, the deepest mystery. Among the knowers of truth — knowledge itself. The divine is found even in governance and restraint.",
    keywords: ["discipline", "ethics", "silence", "wisdom", "restraint"],
    moodTags: ["wisdom", "clarity", "peace"],
  },
  {
    id: "10.39",
    chapter: 10,
    verse: 39,
    sanskrit:
      "यच्चापि सर्वभूतानां बीजं तदहमर्जुन | न तदस्ति विना यत्स्यान्मया भूतं चराचरम् ||",
    transliteration:
      "yach chāpi sarva-bhūtānāṁ bījaṁ tad aham arjuna | na tad asti vinā yat syān mayā bhūtaṁ charācharam",
    english:
      "And whatever is the seed of all beings, I am that, O Arjuna. There is no being, moving or unmoving, that can exist without Me.",
    hindi:
      "हे अर्जुन! सभी प्राणियों का जो बीज है, वह मैं हूँ। ऐसा कोई चर या अचर प्राणी नहीं जो मेरे बिना रह सके।",
    meaning:
      "The supreme conclusion: I am the seed — the primordial originating cause — of every single being. Nothing, moving or still, can exist without Krishna. This is not metaphor; it is the direct statement of ultimate ontology.",
    keywords: [
      "seed",
      "origin",
      "all beings",
      "cannot exist without",
      "universal",
    ],
    moodTags: ["awe", "devotion", "unity", "sacred"],
  },
  {
    id: "10.40",
    chapter: 10,
    verse: 40,
    sanskrit:
      "नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप | एष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया ||",
    transliteration:
      "nānto'sti mama divyānāṁ vibhūtīnāṁ parantapa | eṣha tūddeśhataḥ prokto vibhūter vistaro mayā",
    english:
      "O Parantapa, there is no end to My divine manifestations. What I have spoken is only a representative description of My infinite glories.",
    hindi:
      "हे परन्तप! मेरी दिव्य विभूतियों का कोई अंत नहीं है। यह तो मैंने अपनी विभूतियों का विस्तार संक्षेप में कहा है।",
    meaning:
      "Krishna humbly acknowledges that everything He has described is just a small sample. His glories are literally infinite — what has been shared is a pointer, not the totality. The honest teacher admits the limits of language before the unlimited.",
    keywords: ["infinite", "manifestations", "sample", "endless", "divine"],
    moodTags: ["humility", "awe", "wonder"],
  },
  {
    id: "10.41",
    chapter: 10,
    verse: 41,
    sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा | तत्तदेवावगच्छ त्वं मम तेजोंशसम्भवम् ||",
    transliteration:
      "yad yad vibhūtimat sattvaṁ śhrīmad ūrjitam eva vā | tat tad evāvagachchha tvaṁ mama tejo'ṁśha-sambhavam",
    english:
      "Know that whatever being is glorious, prosperous, or powerful — that indeed springs from only a spark of My splendor.",
    hindi:
      "जो भी विभूतिमान, श्रीयुक्त या ऊर्जायुक्त सत्त्व है, उसे मेरे तेज के एक अंश से उत्पन्न समझो।",
    meaning:
      "The practical key to seeing Krishna everywhere: wherever you perceive excellence, beauty, power, or abundance — recognize it as a fragment of divine splendor. The world becomes a living scripture when read this way.",
    keywords: ["excellence", "splendor", "spark", "divine", "recognition"],
    moodTags: ["wisdom", "devotion", "wonder", "practice"],
  },
  {
    id: "10.42",
    chapter: 10,
    verse: 42,
    sanskrit: "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन | विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ||",
    transliteration:
      "atha vā bahunaitena kiṁ jñātena tavārjuna | viṣhṭabhyāham idaṁ kṛitsnam ekāṁśhena sthito jagat",
    english:
      "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe.",
    hindi:
      "अथवा हे अर्जुन! इस बहुत-से ज्ञान से तुझे क्या? मैं इस समस्त जगत को अपने एक अंश से व्याप्त करके स्थित हूँ।",
    meaning:
      "The magnificent final verse of chapter 10. After listing all His manifestations, Krishna cuts through it all with one ultimate truth: with just ONE fraction of Myself, I sustain the entire universe. The vastness of creation is a single fragment of the Infinite.",
    keywords: ["one fragment", "universe", "sustains", "infinite", "single"],
    moodTags: ["awe", "wonder", "devotion", "transcendence"],
  },
];
