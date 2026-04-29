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

export const GITA_VERSES_CH18: GitaVerse[] = [
  {
    id: "18.1",
    chapter: 18,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच | सन्न्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम् | त्यागस्य च हृषीकेश पृथक्केशिनिषूदन ||",
    transliteration:
      "arjuna uvācha | sannyāsasya mahā-bāho tattvam ichchhāmi veditum | tyāgasya cha hṛiṣhīkeśha pṛithak keśhi-niṣhūdana",
    english:
      "Arjuna said: O mighty-armed Krishna, I wish to know the truth about renunciation (sannyasa) and relinquishment (tyaga), O Hrishikesha, O slayer of Keshi.",
    hindi:
      "अर्जुन बोले: हे महाबाहो! हे हृषीकेश! हे केशिनिषूदन! मैं सन्न्यास और त्याग के तत्त्व को अलग-अलग जानना चाहता हूँ।",
    meaning:
      "Arjuna opens the final chapter by asking Krishna to clarify the difference between sannyasa (complete renunciation of actions) and tyaga (renunciation of the fruits of actions). This distinction is crucial for understanding the chapter's central theme.",
    keywords: ["sannyasa", "tyaga", "renunciation", "arjuna", "question"],
    moodTags: ["curiosity", "seeking", "clarity"],
  },
  {
    id: "18.2",
    chapter: 18,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच | काम्यानां कर्मणां न्यासं सन्न्यासं कवयो विदुः | सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः ||",
    transliteration:
      "śhrī bhagavān uvācha | kāmyānāṁ karmaṇāṁ nyāsaṁ sannyāsaṁ kavayo viduḥ | sarva-karma-phala-tyāgaṁ prāhus tyāgaṁ vichakṣhaṇāḥ",
    english:
      "The Blessed Lord said: The wise understand sannyasa as the renunciation of actions motivated by desire. The discerning declare tyaga as the relinquishment of all fruits of action.",
    hindi:
      "श्रीभगवान् बोले: कामना से प्रेरित कर्मों के त्याग को विद्वान् सन्न्यास कहते हैं और सभी कर्मों के फल के त्याग को विचक्षण पुरुष त्याग कहते हैं।",
    meaning:
      "Krishna begins His final teaching by distinguishing sannyasa (giving up desire-driven actions) from tyaga (giving up attachment to results). The wise do not give up action but give up the longing for reward — this is the key to liberation.",
    keywords: ["sannyasa", "tyaga", "karma-phala", "wisdom", "renunciation"],
    moodTags: ["wisdom", "clarity", "guidance"],
  },
  {
    id: "18.3",
    chapter: 18,
    verse: 3,
    sanskrit:
      "त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः | यज्ञदानतपःकर्म न त्याज्यमिति चापरे ||",
    transliteration:
      "tyājyaṁ doṣha-vad ity eke karma prāhur manīṣhiṇaḥ | yajña-dāna-tapaḥ-karma na tyājyam iti chāpare",
    english:
      "Some wise men declare that all action should be abandoned as evil. Others say that acts of sacrifice, charity, and austerity should never be abandoned.",
    hindi:
      "कुछ विद्वान् कहते हैं कि सभी कर्म दोषयुक्त होने से त्यागने योग्य हैं, परन्तु अन्य विद्वान् कहते हैं कि यज्ञ, दान और तप के कर्म त्यागने योग्य नहीं हैं।",
    meaning:
      "Krishna acknowledges the debate among scholars about whether all action should be abandoned. He then guides Arjuna toward the correct understanding by presenting both views before giving His own definitive answer.",
    keywords: ["karma", "yajna", "dana", "tapas", "debate"],
    moodTags: ["discernment", "philosophy", "guidance"],
  },
  {
    id: "18.4",
    chapter: 18,
    verse: 4,
    sanskrit:
      "निश्चयं शृणु मे तत्र त्यागे भरतसत्तम | त्यागो हि पुरुषव्याघ्र त्रिविधः सम्प्रकीर्तितः ||",
    transliteration:
      "niśhchayaṁ śhṛiṇu me tatra tyāge bharata-sattama | tyāgo hi puruṣha-vyāghra tri-vidhaḥ samprakīrtitaḥ",
    english:
      "O best of the Bharatas, O tiger among men, hear My definitive conclusion on renunciation. Renunciation is declared to be of three kinds.",
    hindi:
      "हे भरतश्रेष्ठ! हे पुरुषव्याघ्र! त्याग के विषय में मेरा निश्चित मत सुनो। त्याग तीन प्रकार का कहा गया है।",
    meaning:
      "Krishna promises a definitive teaching and categorizes tyaga into three types based on the three gunas. This threefold classification will guide Arjuna to understand which kind of tyaga leads to liberation.",
    keywords: ["tyaga", "three-kinds", "gunas", "definitive", "teaching"],
    moodTags: ["clarity", "guidance", "discernment"],
  },
  {
    id: "18.5",
    chapter: 18,
    verse: 5,
    sanskrit:
      "यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत् | यज्ञो दानं तपश्चैव पावनानि मनीषिणाम् ||",
    transliteration:
      "yajña-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat | yajño dānaṁ tapaśh chaiva pāvanāni manīṣhiṇām",
    english:
      "Acts of sacrifice, charity, and austerity should never be abandoned; they must be performed. Sacrifice, charity, and austerity indeed purify the wise.",
    hindi:
      "यज्ञ, दान और तप के कर्म त्यागने योग्य नहीं हैं, बल्कि ये तो अवश्य करने चाहिए। यज्ञ, दान और तप — ये तीनों विद्वानों को पवित्र करने वाले हैं।",
    meaning:
      "Krishna firmly states that rituals, charity, and austerity must not be abandoned — they are purifying. The true tyaga is not abandoning these sacred duties but releasing attachment to their results.",
    keywords: ["yajna", "dana", "tapas", "purification", "duty"],
    moodTags: ["duty", "purity", "devotion"],
  },
  {
    id: "18.6",
    chapter: 18,
    verse: 6,
    sanskrit:
      "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च | कर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम् ||",
    transliteration:
      "etāny api tu karmāṇi saṅgaṁ tyaktvā phalāni cha | kartavyānīti me pārtha niśhchitaṁ matam uttamam",
    english:
      "But even these actions should be performed, O Partha, abandoning attachment and desire for results. This is My definitive and highest conclusion.",
    hindi:
      "हे पार्थ! परन्तु ये कर्म भी आसक्ति और फल की इच्छा छोड़कर करने चाहिए — यही मेरा निश्चित और उत्तम मत है।",
    meaning:
      "Krishna delivers the heart of His teaching on karma yoga: perform all duties but release attachment to outcomes. This detachment is the highest form of tyaga and the direct path to liberation.",
    keywords: ["karma", "attachment", "fruits", "duty", "liberation"],
    moodTags: ["liberation", "detachment", "wisdom"],
  },
  {
    id: "18.7",
    chapter: 18,
    verse: 7,
    sanskrit:
      "नियतस्य तु सन्न्यासः कर्मणो नोपपद्यते | मोहात्तस्य परित्यागस्तामसः परिकीर्तितः ||",
    transliteration:
      "niyatasya tu sannyāsaḥ karmaṇo nopapadyate | mohāt tasya parityāgas tāmasaḥ parikīrtitaḥ",
    english:
      "The renunciation of prescribed duty is improper. The abandonment of such duty through delusion is declared to be tamasic (in the mode of ignorance).",
    hindi: "नियत कर्म का त्याग उचित नहीं है। मोह से उसका त्याग तामसिक कहा गया है।",
    meaning:
      "Krishna introduces the three types of tyaga. Abandoning one's prescribed duties out of delusion or laziness is tamasic — it leads to spiritual regression rather than liberation.",
    keywords: ["tamasic", "delusion", "prescribed-duty", "ignorance"],
    moodTags: ["warning", "duty", "ignorance"],
  },
  {
    id: "18.8",
    chapter: 18,
    verse: 8,
    sanskrit:
      "दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत् | स कृत्वा राजसं त्यागं नैव त्यागफलं लभेत् ||",
    transliteration:
      "duḥkham ity eva yat karma kāya-kleśha-bhayāt tyajet | sa kṛitvā rājasaṁ tyāgaṁ naiva tyāga-phalaṁ labhet",
    english:
      "One who abandons duty because it is troublesome or out of fear of physical discomfort, performs rajasic renunciation and does not gain the fruit of renunciation.",
    hindi:
      "जो कर्म को दुःखरूप समझकर शरीर क्लेश के भय से त्याग करता है, वह राजसिक त्याग करता है और त्याग के फल को नहीं पाता।",
    meaning:
      "Rajasic renunciation is driven by ego — avoiding duty because it seems hard or painful. This selfish motive contaminates the act of giving up, so no spiritual fruit results.",
    keywords: ["rajasic", "ego", "discomfort", "impure-renunciation"],
    moodTags: ["ego", "warning", "selfishness"],
  },
  {
    id: "18.9",
    chapter: 18,
    verse: 9,
    sanskrit:
      "कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन | सङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः ||",
    transliteration:
      "kāryam ity eva yat karma niyataṁ kriyate 'rjuna | saṅgaṁ tyaktvā phalaṁ chaiva sa tyāgaḥ sāttviko mataḥ",
    english:
      "But when prescribed duty is performed, O Arjuna, as something that must be done, abandoning attachment and desire for fruits — that renunciation is considered sattvic.",
    hindi:
      "हे अर्जुन! जो नियत कर्म 'यह करना ही है' ऐसा समझकर आसक्ति और फल को छोड़कर किया जाता है, वह त्याग सात्त्विक माना गया है।",
    meaning:
      "Sattvic renunciation is performing duty purely because it is right, without craving for rewards or attachment to results. This is the highest form of tyaga — pure, clear, liberating.",
    keywords: [
      "sattvic",
      "duty",
      "pure-renunciation",
      "detachment",
      "liberation",
    ],
    moodTags: ["purity", "liberation", "righteousness"],
  },
  {
    id: "18.10",
    chapter: 18,
    verse: 10,
    sanskrit:
      "न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते | त्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः ||",
    transliteration:
      "na dveṣhṭy akuśhalaṁ karma kuśhale nānuṣhajjate | tyāgī sattva-samāviṣhṭo medhāvī chhinna-saṁśhayaḥ",
    english:
      "The one established in sattva, who neither hates unpleasant action nor is attached to pleasant action — such a wise renunciant has cut away all doubts.",
    hindi:
      "जो अशुभ कर्म से द्वेष नहीं करता और शुभ कर्म में आसक्त नहीं होता, वह सत्त्व में स्थित बुद्धिमान त्यागी सभी संशयों को काट देता है।",
    meaning:
      "A true sattvic renunciant is neither repelled by difficult duty nor attracted to pleasant work. Such a person is truly wise — free from the push and pull of likes and dislikes, with all doubts resolved.",
    keywords: ["sattvic", "equanimity", "wisdom", "doubt-free", "renunciation"],
    moodTags: ["equanimity", "wisdom", "peace"],
  },
  {
    id: "18.11",
    chapter: 18,
    verse: 11,
    sanskrit:
      "न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः | यस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते ||",
    transliteration:
      "na hi deha-bhṛitā śhakyaṁ tyaktuṁ karmāṇy aśheṣhataḥ | yas tu karma-phala-tyāgī sa tyāgīty abhidhīyate",
    english:
      "It is indeed impossible for an embodied being to abandon all actions. But one who renounces the fruits of action is truly called a renunciant.",
    hindi:
      "शरीरधारी मनुष्य के लिए सम्पूर्ण रूप से कर्मों को त्यागना संभव नहीं है, परन्तु जो कर्मों के फल का त्यागी है, वही वास्तव में त्यागी कहलाता है।",
    meaning:
      "As long as one lives in a body, action is unavoidable. True renunciation is not physical withdrawal from the world but the inner release of attachment to outcomes — this is the only true freedom.",
    keywords: [
      "embodied",
      "karma-phala-tyaga",
      "true-renunciation",
      "inner-freedom",
    ],
    moodTags: ["wisdom", "freedom", "inner-peace"],
  },
  {
    id: "18.12",
    chapter: 18,
    verse: 12,
    sanskrit:
      "अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम् | भवत्यत्यागिनां प्रेत्य न तु सन्न्यासिनां क्वचित् ||",
    transliteration:
      "aniṣhṭam iṣhṭaṁ miśhraṁ cha tri-vidhaṁ karmaṇaḥ phalam | bhavaty atyāgināṁ pretya na tu sannyāsināṁ kvachit",
    english:
      "After death, the three kinds of results — undesirable, desirable, and mixed — accrue to those who do not practice renunciation. But for true renunciants, there are none.",
    hindi:
      "अत्यागियों को मृत्यु के बाद कर्मों के अनिष्ट, इष्ट और मिश्र — तीन प्रकार के फल मिलते हैं, परन्तु सन्न्यासियों को कहीं भी कोई फल नहीं मिलता।",
    meaning:
      "Those who act with attachment accumulate karma — good, bad, or mixed — and must reincarnate to experience the results. True renunciants, acting without attachment, accumulate no such binding karma.",
    keywords: ["karma", "rebirth", "attachment", "liberation", "sannyasa"],
    moodTags: ["liberation", "karma", "freedom"],
  },
  {
    id: "18.13",
    chapter: 18,
    verse: 13,
    sanskrit:
      "पञ्चैतानि महाबाहो कारणानि निबोध मे | साङ्ख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम् ||",
    transliteration:
      "pañcha-etāni mahā-bāho kāraṇāni nibodha me | sāṅkhye kṛitānte proktāni siddhaye sarva-karmaṇām",
    english:
      "O mighty-armed, learn from Me the five causes declared in Sankhya for the accomplishment of all actions.",
    hindi:
      "हे महाबाहो! सांख्यदर्शन में सभी कर्मों की सिद्धि के लिए जो पाँच कारण बताए गए हैं, उन्हें मुझसे जानो।",
    meaning:
      "Krishna now introduces the Sankhya analysis of action, listing five factors that contribute to every act. Understanding these liberates one from false ego-ownership of actions.",
    keywords: ["sankhya", "five-causes", "action", "philosophy", "knowledge"],
    moodTags: ["wisdom", "philosophy", "knowledge"],
  },
  {
    id: "18.14",
    chapter: 18,
    verse: 14,
    sanskrit:
      "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम् | विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम् ||",
    transliteration:
      "adhiṣhṭhānaṁ tathā kartā karaṇaṁ cha pṛithag-vidham | vividhāśh cha pṛithak cheṣhṭā daivaṁ chaivātra pañchamam",
    english:
      "The body, the doer, the various senses, the many kinds of endeavours, and divine fate — these are the five factors of all action.",
    hindi:
      "शरीर, कर्ता, विभिन्न प्रकार के करण (इन्द्रियाँ), विविध अलग-अलग चेष्टाएँ और पाँचवाँ दैव — ये सभी कर्मों के पाँच कारण हैं।",
    meaning:
      "The five causes of action are: the physical body (adhishthana), the ego-self (karta), the instruments/senses (karana), the various efforts (cheshta), and divine grace/fate (daiva). Understanding these dismantles false ownership of action.",
    keywords: [
      "body",
      "ego",
      "senses",
      "effort",
      "divine-fate",
      "five-factors",
    ],
    moodTags: ["wisdom", "philosophy", "self-knowledge"],
  },
  {
    id: "18.15",
    chapter: 18,
    verse: 15,
    sanskrit:
      "शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नरः | न्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः ||",
    transliteration:
      "śharīra-vāṅ-manobhir yat karma prārabhate naraḥ | nyāyyaṁ vā viparītaṁ vā pañchaite tasya hetavaḥ",
    english:
      "Whatever action a person performs — right or wrong — with body, speech, or mind, these five are its causes.",
    hindi:
      "मनुष्य शरीर, वाणी और मन से जो भी कर्म आरम्भ करता है — उचित हो या अनुचित — ये पाँचों उसके कारण हैं।",
    meaning:
      "Every human action — whether virtuous or sinful — in thought, word, or deed is produced by these five factors. No single factor, especially the ego-self, can claim sole authorship of any action.",
    keywords: ["body", "speech", "mind", "action", "causes", "responsibility"],
    moodTags: ["responsibility", "wisdom", "self-knowledge"],
  },
  {
    id: "18.16",
    chapter: 18,
    verse: 16,
    sanskrit:
      "तत्रैवं सति कर्तारमात्मानं केवलं तु यः | पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः ||",
    transliteration:
      "tatraivam sati kartāram ātmānaṁ kevalaṁ tu yaḥ | paśhyaty akṛita-buddhitvān na sa paśhyati durmatiḥ",
    english:
      "But one who, owing to impure intellect, sees himself as the sole doer, does not truly see — such a foolish person is of poor understanding.",
    hindi:
      "इस सत्य के होते हुए भी जो अज्ञानी बुद्धि के कारण केवल आत्मा को ही कर्ता देखता है, वह दुर्बुद्धि मनुष्य वास्तव में नहीं देखता।",
    meaning:
      "The greatest spiritual error is ego-ownership: believing 'I am the sole doer.' This false view binds one to the cycle of karma and rebirth. True wisdom recognizes the five-fold causation of all action.",
    keywords: ["ego", "false-doer", "ignorance", "wisdom", "liberation"],
    moodTags: ["ego", "ignorance", "warning"],
  },
  {
    id: "18.17",
    chapter: 18,
    verse: 17,
    sanskrit:
      "यस्य नाहङ्कृतो भावो बुद्धिर्यस्य न लिप्यते | हत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते ||",
    transliteration:
      "yasya nāhaṅkṛito bhāvo buddhir yasya na lipyate | hatvā 'pi sa imāṁl lokān na hanti na nibadhyate",
    english:
      "One who is free from ego-sense and whose intellect is uncontaminated — even if he kills all these beings, he does not kill, nor is he bound.",
    hindi:
      "जिसका अहंकार का भाव नहीं है और जिसकी बुद्धि लिप्त नहीं होती, वह इन सभी प्राणियों को मारकर भी न मारता है और न बन्धन में पड़ता है।",
    meaning:
      "This verse resolves one of the Gita's most challenging questions: how can Arjuna fight and kill without sin? One who acts without ego, without claiming doership, incurs no karma — the action passes through without binding the soul.",
    keywords: ["ego-free", "no-doership", "liberation", "karma", "action"],
    moodTags: ["liberation", "wisdom", "inner-freedom"],
  },
  {
    id: "18.18",
    chapter: 18,
    verse: 18,
    sanskrit:
      "ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना | करणं कर्म कर्तेति त्रिविधः कर्मसङ्ग्रहः ||",
    transliteration:
      "jñānaṁ jñeyaṁ parijñātā tri-vidhā karma-codanā | karaṇaṁ karma karteti tri-vidhaḥ karma-saṅgrahaḥ",
    english:
      "Knowledge, the object of knowledge, and the knower — these three are the threefold impetus of action. The senses, the act, and the doer — these three are the threefold basis of action.",
    hindi:
      "ज्ञान, ज्ञेय और ज्ञाता — ये तीन कर्म की प्रेरणा हैं। करण, कर्म और कर्ता — ये तीन कर्म के संग्रह हैं।",
    meaning:
      "Krishna provides the threefold philosophical structure of action: the motivation (knowledge, its object, and the knower) and the mechanism (instruments, the action itself, and the doer). This framework deepens understanding of how action arises.",
    keywords: ["knowledge", "action", "doer", "structure", "philosophy"],
    moodTags: ["philosophy", "wisdom", "knowledge"],
  },
  {
    id: "18.19",
    chapter: 18,
    verse: 19,
    sanskrit:
      "ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः | प्रोच्यते गुणसङ्ख्याने यथावच्छृणु तान्यपि ||",
    transliteration:
      "jñānaṁ karma cha kartā cha tridhaiva guṇa-bhedataḥ | prochyate guṇa-saṅkhyāne yathāvach chhṛiṇu tāny api",
    english:
      "Knowledge, action, and the doer are each declared to be of three kinds, based on the three modes of nature, in the analysis of the gunas. Hear them also as I describe them duly.",
    hindi:
      "ज्ञान, कर्म और कर्ता — ये तीनों भी गुणों के भेद से तीन-तीन प्रकार के कहे गए हैं। इन्हें भी गुणसंख्यान में यथावत् सुनो।",
    meaning:
      "Krishna now classifies knowledge, action, and the doer according to the three gunas. This classification helps Arjuna understand what is sattvic, rajasic, and tamasic in each of these three domains.",
    keywords: ["gunas", "knowledge", "action", "doer", "classification"],
    moodTags: ["wisdom", "philosophy", "discernment"],
  },
  {
    id: "18.20",
    chapter: 18,
    verse: 20,
    sanskrit:
      "सर्वभूतेषु येनैकं भावमव्ययमीक्षते | अविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम् ||",
    transliteration:
      "sarva-bhūteṣhu yenaikaṁ bhāvam avyayam īkṣhate | avibhaktaṁ vibhakteṣhu taj jñānaṁ viddhi sāttvikam",
    english:
      "That knowledge by which one sees the one imperishable reality in all beings — undivided in the divided — know that knowledge to be sattvic.",
    hindi:
      "जिस ज्ञान से मनुष्य सभी प्राणियों में एक अविभाजित अव्यय भाव देखता है, उस ज्ञान को सात्त्विक जानो।",
    meaning:
      "Sattvic knowledge perceives the one divine essence in all beings — the infinite within the finite, the undivided within the divided. This is the highest knowledge, the knowledge of unity.",
    keywords: ["sattvic-knowledge", "unity", "Brahman", "one-in-all", "divine"],
    moodTags: ["unity", "wisdom", "divine-vision"],
  },
  {
    id: "18.21",
    chapter: 18,
    verse: 21,
    sanskrit:
      "पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान् | वेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम् ||",
    transliteration:
      "pṛithaktvena tu yaj jñānaṁ nānā-bhāvān pṛithag-vidhān | vetti sarveṣhu bhūteṣhu taj jñānaṁ viddhi rājasam",
    english:
      "That knowledge which sees multiplicity of beings as separate entities of various kinds — know that knowledge to be rajasic.",
    hindi:
      "जो ज्ञान सभी प्राणियों में अलग-अलग प्रकार के अनेक भावों को पृथक्-पृथक् देखता है, उस ज्ञान को राजसिक जानो।",
    meaning:
      "Rajasic knowledge sees only differences — it perceives beings as fundamentally separate, emphasizing distinctions rather than unity. This fragmented vision drives competition and conflict.",
    keywords: [
      "rajasic-knowledge",
      "separation",
      "diversity",
      "ego",
      "duality",
    ],
    moodTags: ["ego", "separation", "warning"],
  },
  {
    id: "18.22",
    chapter: 18,
    verse: 22,
    sanskrit: "यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम् | अतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम् ||",
    transliteration:
      "yat tu kṛitsna-vad ekasmin kārye saktam ahaitukam | atattvārtha-vad alpaṁ cha tat tāmasam udāhṛitam",
    english:
      "That knowledge which is attached to one petty thing as if it were everything, which is irrational, without basis in truth, and trivial — that is declared to be tamasic.",
    hindi:
      "जो ज्ञान बिना किसी कारण के एक कार्य में ही सम्पूर्णतः आसक्त है, जो अतत्त्वार्थवत् और तुच्छ है, वह तामसिक कहा गया है।",
    meaning:
      "Tamasic knowledge is narrow, irrational, and stubborn — fixated on one small aspect as the whole truth. It lacks understanding of the deeper reality and is driven by ignorance rather than inquiry.",
    keywords: ["tamasic-knowledge", "ignorance", "narrow", "irrational"],
    moodTags: ["ignorance", "warning", "tamasic"],
  },
  {
    id: "18.23",
    chapter: 18,
    verse: 23,
    sanskrit: "नियतं सङ्गरहितमरागद्वेषतः कृतम् | अफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते ||",
    transliteration:
      "niyataṁ saṅga-rahitam arāga-dveṣhataḥ kṛitam | aphala-prepsunā karma yat tat sāttvikam uchyate",
    english:
      "Action which is prescribed, performed without attachment, without love or hatred, without desire for fruit — such action is called sattvic.",
    hindi:
      "जो कर्म नियत है, आसक्तिरहित है, राग-द्वेष के बिना किया गया है और फल की इच्छा के बिना है — वह सात्त्विक कहलाता है।",
    meaning:
      "Sattvic action is the ideal described throughout the Gita — duty done purely, without personal agenda, without emotional bias, without craving for reward. This is karma yoga in its purest form.",
    keywords: [
      "sattvic-action",
      "duty",
      "detachment",
      "no-desire",
      "karma-yoga",
    ],
    moodTags: ["purity", "duty", "liberation"],
  },
  {
    id: "18.24",
    chapter: 18,
    verse: 24,
    sanskrit: "यत्तु कामेप्सुना कर्म साहङ्कारेण वा पुनः | क्रियते बहुलायासं तद्राजसमुदाहृतम् ||",
    transliteration:
      "yat tu kāmepsunā karma sāhaṅkāreṇa vā punaḥ | kriyate bahulāyāsaṁ tad rājasam udāhṛitam",
    english:
      "Action performed with great effort by one who seeks to gratify desires, or impelled by ego — that is declared to be rajasic.",
    hindi:
      "जो कर्म भोग की इच्छा वाले द्वारा या अहंकार से अत्यन्त परिश्रम के साथ किया जाता है, वह राजसिक कहा गया है।",
    meaning:
      "Rajasic action is ego-driven and desire-fueled. Even if it involves enormous effort, it remains bound because its motivation is personal gain or pride. This kind of action builds karma and prolongs the cycle of rebirth.",
    keywords: ["rajasic-action", "ego", "desire", "effort", "karma"],
    moodTags: ["ego", "desire", "warning"],
  },
  {
    id: "18.25",
    chapter: 18,
    verse: 25,
    sanskrit: "अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम् | मोहादारभ्यते कर्म यत्तत्तामसमुच्यते ||",
    transliteration:
      "anubandhaṁ kṣhayaṁ hiṁsām anapekṣhya cha pauruṣham | mohād ārabhyate karma yat tat tāmasam uchyate",
    english:
      "Action undertaken out of delusion, without considering consequences, loss, harm to others, or one's own capacity — that is declared to be tamasic.",
    hindi:
      "जो कर्म परिणाम, हानि, हिंसा और अपनी शक्ति की अपेक्षा किए बिना मोह से आरम्भ किया जाता है, वह तामसिक कहा जाता है।",
    meaning:
      "Tamasic action is reckless and deluded — undertaken without thinking of consequences, harm, or one's own ability. It is driven by ignorance and often causes harm to self and others.",
    keywords: [
      "tamasic-action",
      "delusion",
      "harm",
      "recklessness",
      "ignorance",
    ],
    moodTags: ["ignorance", "harm", "warning"],
  },
  {
    id: "18.26",
    chapter: 18,
    verse: 26,
    sanskrit:
      "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः | सिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते ||",
    transliteration:
      "mukta-saṅgo 'nahaṁ-vādī dhṛity-utsāha-samanvitaḥ | siddhy-asiddhyor nirvikāraḥ kartā sāttvika uchyate",
    english:
      "The doer who is free from attachment, non-egotistic, endowed with steadiness and enthusiasm, and unaffected by success or failure — such a doer is called sattvic.",
    hindi:
      "जो कर्ता आसक्तिमुक्त, अहंकाररहित, धैर्य और उत्साह से युक्त तथा सिद्धि-असिद्धि में निर्विकार है, वह सात्त्विक कहलाता है।",
    meaning:
      "The sattvic doer acts with dedication but without ego, with enthusiasm but without craving, and with equanimity toward both success and failure. This describes the ideal servant of God.",
    keywords: [
      "sattvic-doer",
      "ego-free",
      "equanimity",
      "steadiness",
      "enthusiasm",
    ],
    moodTags: ["purity", "equanimity", "ideal"],
  },
  {
    id: "18.27",
    chapter: 18,
    verse: 27,
    sanskrit:
      "रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः | हर्षशोकान्वितः कर्ता राजसः परिकीर्तितः ||",
    transliteration:
      "rāgī karma-phala-prepsur lubdho hiṁsātmako 'śhuchiḥ | harṣha-śhokānvitaḥ kartā rājasaḥ parikīrtitaḥ",
    english:
      "The doer who is passionate, desiring the fruits of action, greedy, violent in nature, impure, and affected by joy and grief — such a doer is declared to be rajasic.",
    hindi:
      "जो कर्ता रागयुक्त, कर्मफल का इच्छुक, लोभी, हिंसक स्वभाव वाला, अशुद्ध और हर्ष-शोक से ग्रसित है, वह राजसिक कहा गया है।",
    meaning:
      "The rajasic doer is driven by passion, greed, and violence — emotionally swinging between joy and grief based on outcomes. Such a person is bound tightly to the wheel of karma.",
    keywords: ["rajasic-doer", "passion", "greed", "emotion", "impurity"],
    moodTags: ["ego", "passion", "warning"],
  },
  {
    id: "18.28",
    chapter: 18,
    verse: 28,
    sanskrit:
      "अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः | विषादी दीर्घसूत्री च कर्ता तामस उच्यते ||",
    transliteration:
      "ayuktaḥ prākṛitaḥ stabdhaḥ śhaṭho naiṣhkṛitiko 'lasaḥ | viṣhādī dīrgha-sūtrī cha kartā tāmasa uchyate",
    english:
      "The doer who is undisciplined, vulgar, stubborn, deceitful, lazy, given to despondency, and who procrastinates — such a doer is called tamasic.",
    hindi:
      "जो कर्ता अयुक्त, अशिक्षित, उद्दंड, धूर्त, दूसरों का जीविका छीनने वाला, आलसी, विषादी और दीर्घसूत्री है, वह तामसिक कहा जाता है।",
    meaning:
      "The tamasic doer is characterized by laziness, dishonesty, stubbornness, and despair. Such a person lacks discipline and always delays — they represent the lowest mode of human activity.",
    keywords: [
      "tamasic-doer",
      "laziness",
      "delusion",
      "procrastination",
      "ignorance",
    ],
    moodTags: ["ignorance", "laziness", "warning"],
  },
  {
    id: "18.29",
    chapter: 18,
    verse: 29,
    sanskrit: "बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं शृणु | प्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय ||",
    transliteration:
      "buddher bhedaṁ dhṛiteśh chaiva guṇatas tri-vidhaṁ śhṛiṇu | prochyamānam aśheṣheṇa pṛithaktvena dhanañjaya",
    english:
      "O Dhananjaya, now hear the threefold distinction of intellect (buddhi) and firmness (dhriti) based on the gunas, as I describe them fully and separately.",
    hindi:
      "हे धनञ्जय! अब बुद्धि और धृति के गुणों के अनुसार तीन-तीन भेद को मुझसे पूरी तरह सुनो।",
    meaning:
      "Krishna now transitions to explaining how intellect and firmness also vary according to the three gunas. This classification helps one identify and elevate one's own nature.",
    keywords: ["buddhi", "dhriti", "intellect", "firmness", "gunas"],
    moodTags: ["wisdom", "self-knowledge", "discernment"],
  },
  {
    id: "18.30",
    chapter: 18,
    verse: 30,
    sanskrit:
      "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये | बन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी ||",
    transliteration:
      "pravṛittiṁ cha nivṛittiṁ cha kāryākārye bhayābhaye | bandhaṁ mokṣhaṁ cha yā vetti buddhiḥ sā pārtha sāttvikī",
    english:
      "O Partha, the intellect which correctly understands what to do and what not to do, what is to be feared and what is not, what binds and what liberates — that intellect is sattvic.",
    hindi:
      "हे पार्थ! जो बुद्धि प्रवृत्ति और निवृत्ति, कार्य और अकार्य, भय और अभय, बन्धन और मोक्ष को सही जानती है, वह सात्त्विकी बुद्धि है।",
    meaning:
      "Sattvic intellect has clear discernment — it knows what leads toward liberation and what leads toward bondage, what is righteous and what is not. This discrimination (viveka) is essential for the spiritual path.",
    keywords: [
      "sattvic-intellect",
      "discrimination",
      "liberation",
      "bondage",
      "viveka",
    ],
    moodTags: ["wisdom", "discernment", "liberation"],
  },
  {
    id: "18.31",
    chapter: 18,
    verse: 31,
    sanskrit:
      "यया धर्ममधर्मं च कार्यं चाकार्यमेव च | अयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी ||",
    transliteration:
      "yayā dharmam adharmaṁ cha kāryaṁ chākāryam eva cha | ayathāvat prajānāti buddhiḥ sā pārtha rājasī",
    english:
      "O Partha, that intellect which incorrectly perceives dharma and adharma, and what should be done and what should not be done — that intellect is rajasic.",
    hindi:
      "हे पार्थ! जो बुद्धि धर्म-अधर्म और कार्य-अकार्य को यथावत् नहीं जानती, वह राजसिक बुद्धि है।",
    meaning:
      "Rajasic intellect is distorted by passion and self-interest — it confuses right and wrong, often justifying harmful actions as righteous when they serve personal gain.",
    keywords: [
      "rajasic-intellect",
      "distorted",
      "dharma",
      "adharma",
      "confusion",
    ],
    moodTags: ["confusion", "ego", "warning"],
  },
  {
    id: "18.32",
    chapter: 18,
    verse: 32,
    sanskrit:
      "अधर्मं धर्ममिति या मन्यते तमसावृता | सर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी ||",
    transliteration:
      "adharmaṁ dharmam iti yā manyate tamasāvṛitā | sarvārthān viparītāṁśh cha buddhiḥ sā pārtha tāmasī",
    english:
      "O Partha, that intellect which, shrouded in darkness, mistakes adharma for dharma and sees all things perverted — that intellect is tamasic.",
    hindi:
      "हे पार्थ! तमस से ढकी हुई जो बुद्धि अधर्म को धर्म समझती है और सभी अर्थों को उल्टा देखती है, वह तामसिक बुद्धि है।",
    meaning:
      "Tamasic intellect is completely inverted by darkness — it calls evil good and good evil, seeing the world upside down. This is the most dangerous state of mind, as it actively chooses the wrong path thinking it is right.",
    keywords: [
      "tamasic-intellect",
      "darkness",
      "inversion",
      "delusion",
      "adharma",
    ],
    moodTags: ["ignorance", "darkness", "warning"],
  },
  {
    id: "18.33",
    chapter: 18,
    verse: 33,
    sanskrit:
      "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः | योगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी ||",
    transliteration:
      "dhṛityā yayā dhārayate manaḥ-prāṇendriya-kriyāḥ | yogenāvyabhichāriṇyā dhṛitiḥ sā pārtha sāttvikī",
    english:
      "The firmness (dhriti) by which one steadfastly maintains the functions of mind, life-breath, and senses through unwavering yoga — O Partha, that firmness is sattvic.",
    hindi:
      "हे पार्थ! अव्यभिचारिणी योग से जो धृति मन, प्राण और इन्द्रियों की क्रियाओं को धारण करती है, वह सात्त्विकी धृति है।",
    meaning:
      "Sattvic firmness is the inner strength that holds the mind, breath, and senses steady in unbroken yoga practice. This is the courage of the spiritual warrior — unwavering, persistent, devoted.",
    keywords: [
      "sattvic-firmness",
      "yoga",
      "steady-mind",
      "self-control",
      "courage",
    ],
    moodTags: ["courage", "steadiness", "inner-strength"],
  },
  {
    id: "18.34",
    chapter: 18,
    verse: 34,
    sanskrit:
      "यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन | प्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी ||",
    transliteration:
      "yayā tu dharma-kāmārthān dhṛityā dhārayate 'rjuna | prasaṅgena phalākāṅkṣhī dhṛitiḥ sā pārtha rājasī",
    english:
      "But the firmness by which one, with attachment and desire for results, holds onto dharma, pleasure, and wealth — O Partha, that firmness is rajasic.",
    hindi:
      "हे अर्जुन! जिस धृति से मनुष्य धर्म, काम और अर्थ को फल की आसक्ति से धारण करता है, वह राजसिक धृति है।",
    meaning:
      "Rajasic firmness is the determination to achieve worldly goals — including dharma, pleasure, and prosperity — but motivated by personal benefit. It is mixed with attachment and thus ultimately binding.",
    keywords: ["rajasic-firmness", "attachment", "desire", "worldly-goals"],
    moodTags: ["attachment", "desire", "ego"],
  },
  {
    id: "18.35",
    chapter: 18,
    verse: 35,
    sanskrit:
      "यया स्वप्नं भयं शोकं विषादं मदमेव च | न विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी ||",
    transliteration:
      "yayā svapnaṁ bhayaṁ śhokaṁ viṣhādaṁ madam eva cha | na vimuñchati durmedhā dhṛitiḥ sā pārtha tāmasī",
    english:
      "O Partha, the firmness by which a foolish person does not give up sleep, fear, grief, despondency, and arrogance — that firmness is tamasic.",
    hindi:
      "हे पार्थ! जिस धृति से दुर्बुद्धि मनुष्य निद्रा, भय, शोक, विषाद और मद को नहीं छोड़ता, वह तामसिक धृति है।",
    meaning:
      "Tamasic firmness is stubbornness in negative states — clinging to sleep, fear, despair, and pride. It is not real strength but the resistance of ignorance to positive change.",
    keywords: [
      "tamasic-firmness",
      "stubbornness",
      "fear",
      "sloth",
      "ignorance",
    ],
    moodTags: ["ignorance", "darkness", "warning"],
  },
  {
    id: "18.36",
    chapter: 18,
    verse: 36,
    sanskrit:
      "सुखं त्विदानीं त्रिविधं शृणु मे भरतर्षभ | अभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति ||",
    transliteration:
      "sukhaṁ tv idānīṁ tri-vidhaṁ śhṛiṇu me bharatarṣhabha | abhyāsād ramate yatra duḥkhāntaṁ cha nigachchhati",
    english:
      "Now hear from Me, O best of the Bharatas, the three kinds of happiness. That happiness in which one rejoices through practice and which brings suffering to an end —",
    hindi:
      "हे भरतर्षभ! अब तीन प्रकार के सुख को मुझसे सुनो। जिस सुख में मनुष्य अभ्यास से रमण करता है और दुःख का अन्त पाता है —",
    meaning:
      "Krishna begins His description of the three types of happiness, again classified by the gunas. He distinguishes between the pleasure that is initially bitter but becomes sweet (sattvic), and the false pleasures that bind the soul.",
    keywords: ["happiness", "three-kinds", "practice", "liberation", "gunas"],
    moodTags: ["wisdom", "happiness", "discernment"],
  },
  {
    id: "18.37",
    chapter: 18,
    verse: 37,
    sanskrit:
      "यत्तदग्रे विषमिव परिणामेऽमृतोपमम् | तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम् ||",
    transliteration:
      "yat tad agre viṣham iva pariṇāme 'mṛitopamam | tat sukhaṁ sāttvikaṁ proktam ātma-buddhi-prasāda-jam",
    english:
      "That happiness which appears like poison at first but in the end is like nectar — born from the clarity of one's self-understanding — that happiness is declared sattvic.",
    hindi:
      "जो सुख पहले विष के समान प्रतीत होता है परन्तु परिणाम में अमृत के समान है, वह आत्मबुद्धि की प्रसन्नता से उत्पन्न सात्त्विक सुख कहा गया है।",
    meaning:
      "Sattvic happiness requires discipline and self-inquiry — it seems difficult or bitter at first (early morning meditation, self-restraint, spiritual study) but ultimately produces pure, lasting bliss.",
    keywords: [
      "sattvic-happiness",
      "discipline",
      "self-knowledge",
      "lasting-bliss",
      "nectar",
    ],
    moodTags: ["bliss", "wisdom", "spiritual-joy"],
  },
  {
    id: "18.38",
    chapter: 18,
    verse: 38,
    sanskrit: "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम् | परिणामे विषमिव तत्सुखं राजसं स्मृतम् ||",
    transliteration:
      "viṣhayendriya-saṁyogād yat tad agre 'mṛitopamam | pariṇāme viṣham iva tat sukhaṁ rājasaṁ smṛitam",
    english:
      "The happiness arising from contact between the senses and their objects, which appears like nectar at first but becomes like poison in the end — that happiness is remembered as rajasic.",
    hindi:
      "जो सुख विषय और इन्द्रियों के संयोग से उत्पन्न होता है, जो पहले अमृत जैसा लगता है परन्तु परिणाम में विष के समान होता है, वह राजसिक सुख कहा गया है।",
    meaning:
      "Rajasic happiness is the pleasure of sensory indulgence — initially intoxicating but leaving emptiness, craving, and suffering. This is the trap of worldly pleasure that keeps souls bound in samsara.",
    keywords: [
      "rajasic-happiness",
      "sensory-pleasure",
      "attachment",
      "suffering",
      "illusion",
    ],
    moodTags: ["pleasure", "attachment", "warning"],
  },
  {
    id: "18.39",
    chapter: 18,
    verse: 39,
    sanskrit: "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः | निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम् ||",
    transliteration:
      "yad agre chānubandhe cha sukhaṁ mohanam ātmanaḥ | nidrā-lasya-pramādotthaṁ tat tāmasam udāhṛitam",
    english:
      "That happiness which is deluding to the self both in the beginning and at the end, arising from sleep, laziness, and negligence — that is declared tamasic.",
    hindi:
      "जो सुख आरम्भ में और परिणाम में भी आत्मा को मोहित करने वाला है और निद्रा, आलस्य और प्रमाद से उत्पन्न होता है, वह तामसिक कहा गया है।",
    meaning:
      "Tamasic happiness is the pleasure of delusion — the comfort of sleep, laziness, and negligence. It does not even seem pleasant in retrospect; it simply numbs and deceives the soul throughout.",
    keywords: [
      "tamasic-happiness",
      "delusion",
      "laziness",
      "sleep",
      "negligence",
    ],
    moodTags: ["delusion", "laziness", "ignorance"],
  },
  {
    id: "18.40",
    chapter: 18,
    verse: 40,
    sanskrit:
      "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः | सत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः ||",
    transliteration:
      "na tad asti pṛithivyāṁ vā divi deveṣhu vā punaḥ | sattvaṁ prakṛiti-jair muktaṁ yad ebhiḥ syāt tribhir guṇaiḥ",
    english:
      "There is no being on earth, in heaven, or among the gods that is free from the three qualities born of material nature.",
    hindi:
      "पृथ्वी पर, या स्वर्ग में देवताओं में भी ऐसा कोई प्राणी नहीं है जो प्रकृति से उत्पन्न इन तीन गुणों से मुक्त हो।",
    meaning:
      "The three gunas pervade all of existence — even gods are not free from them. This shows the universality of the guna framework and the rarity and greatness of complete liberation (moksha).",
    keywords: [
      "gunas",
      "all-beings",
      "material-nature",
      "universality",
      "liberation",
    ],
    moodTags: ["wisdom", "philosophy", "universal-truth"],
  },
  {
    id: "18.41",
    chapter: 18,
    verse: 41,
    sanskrit:
      "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप | कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः ||",
    transliteration:
      "brāhmaṇa-kṣhatriya-viśhāṁ śhūdrāṇāṁ cha parantapa | karmāṇi pravibhaktāni svabhāva-prabhavair guṇaiḥ",
    english:
      "O scorcher of enemies, the duties of Brahmanas, Kshatriyas, Vaishyas, and Shudras are distributed according to the qualities born of their own nature.",
    hindi:
      "हे परन्तप! ब्राह्मण, क्षत्रिय, वैश्य और शूद्रों के कर्म उनके स्वभाव से उत्पन्न गुणों के अनुसार विभाजित किए गए हैं।",
    meaning:
      "The four varnas (social orders) are not based on birth alone but on svabhava — one's inherent nature shaped by the gunas. Each person's natural qualities determine their role and duty in society.",
    keywords: ["varna", "svabhava", "duties", "society", "gunas"],
    moodTags: ["duty", "social-order", "nature"],
  },
  {
    id: "18.42",
    chapter: 18,
    verse: 42,
    sanskrit:
      "शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च | ज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम् ||",
    transliteration:
      "śhamo damas tapaḥ śhauchaṁ kṣhāntir ārjavam eva cha | jñānaṁ vijñānam āstikyaṁ brahma-karma svabhāva-jam",
    english:
      "Peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom, and faith in God — these are the natural duties of those in the Brahmana order.",
    hindi:
      "शम, दम, तप, शौच, क्षान्ति, आर्जव, ज्ञान, विज्ञान और आस्तिक्य — ये ब्राह्मणों के स्वभाव से उत्पन्न कर्म हैं।",
    meaning:
      "The sattvic qualities — inner peace, self-discipline, purity, patience, honesty, knowledge, and devotion — are the natural gifts and duties of those with a brahmanic temperament, whose role is to seek and share wisdom.",
    keywords: [
      "brahmin-duties",
      "sattvic",
      "knowledge",
      "purity",
      "self-control",
    ],
    moodTags: ["wisdom", "purity", "devotion"],
  },
  {
    id: "18.43",
    chapter: 18,
    verse: 43,
    sanskrit:
      "शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम् | दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम् ||",
    transliteration:
      "śhauryaṁ tejo dhṛitir dākṣhyaṁ yuddhe chāpy apalāyanam | dānam īśhvara-bhāvaśh cha kṣhātraṁ karma svabhāva-jam",
    english:
      "Heroism, vigour, steadiness, dexterity, not fleeing in battle, generosity, and lordliness — these are the natural duties of those in the Kshatriya order.",
    hindi:
      "शौर्य, तेज, धैर्य, कुशलता, युद्ध में न भागना, दान और शासन करने का स्वभाव — ये क्षत्रियों के स्वभावज कर्म हैं।",
    meaning:
      "The kshatriya's natural duties — courage, strength, steadfastness, skill, sacrifice, and leadership — are rajasic-sattvic in nature, oriented toward protecting society and upholding dharma through action.",
    keywords: ["kshatriya-duties", "courage", "strength", "leadership", "duty"],
    moodTags: ["courage", "duty", "strength"],
  },
  {
    id: "18.44",
    chapter: 18,
    verse: 44,
    sanskrit:
      "कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम् | परिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम् ||",
    transliteration:
      "kṛiṣhi-gaurakṣhya-vāṇijyaṁ vaiśhya-karma svabhāva-jam | paricharyātmakaṁ karma śhūdrasyāpi svabhāva-jam",
    english:
      "Farming, cow-herding, and trade are the natural duties of the Vaishyas. Service is the natural duty of the Shudras.",
    hindi:
      "कृषि, गोपालन और व्यापार — ये वैश्यों के स्वभावज कर्म हैं। सेवा करना शूद्रों का स्वभावज कर्म है।",
    meaning:
      "The vaishya's role is to sustain the community through agriculture, animal husbandry, and commerce. The shudra's role is service to society. Each role is honorable when performed with devotion and skill.",
    keywords: [
      "vaishya-duties",
      "shudra-duties",
      "agriculture",
      "service",
      "community",
    ],
    moodTags: ["duty", "service", "society"],
  },
  {
    id: "18.45",
    chapter: 18,
    verse: 45,
    sanskrit:
      "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः | स्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु ||",
    transliteration:
      "sve sve karmaṇy abhirataḥ saṁsiddhiṁ labhate naraḥ | sva-karma-nirataḥ siddhiṁ yathā vindati tach chhṛiṇu",
    english:
      "By being devoted to one's own duty, each person attains perfection. Hear how one who is devoted to one's own work finds perfection.",
    hindi:
      "अपने-अपने कर्म में रत रहने से मनुष्य संसिद्धि को प्राप्त होता है। स्वकर्म में निरत मनुष्य जिस प्रकार सिद्धि प्राप्त करता है, वह सुनो।",
    meaning:
      "Each person can attain perfection by faithfully performing their own duty. Spiritual achievement is not reserved for monks — every role in society, done with devotion, is a path to God.",
    keywords: ["svadharma", "perfection", "duty", "devotion", "any-path"],
    moodTags: ["duty", "perfection", "hope"],
  },
  {
    id: "18.46",
    chapter: 18,
    verse: 46,
    sanskrit:
      "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् | स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः ||",
    transliteration:
      "yataḥ pravṛittir bhūtānāṁ yena sarvam idaṁ tatam | sva-karmaṇā tam abhyarchya siddhiṁ vindati mānavaḥ",
    english:
      "By worshiping through one's own duty the One from whom all beings arise and by whom all this universe is pervaded, a person attains perfection.",
    hindi:
      "जिससे सभी प्राणियों की उत्पत्ति हुई है और जिससे यह सम्पूर्ण जगत् व्याप्त है, उसकी अपने कर्म से पूजा करके मनुष्य सिद्धि प्राप्त करता है।",
    meaning:
      "Every action becomes worship when offered to the Divine. The farmer worships God through farming, the soldier through fighting righteously, the teacher through teaching truth. All paths lead to God through authentic devotion.",
    keywords: ["worship", "divine", "duty", "pervade", "perfection"],
    moodTags: ["devotion", "worship", "divine-presence"],
  },
  {
    id: "18.47",
    chapter: 18,
    verse: 47,
    sanskrit:
      "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् | स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ||",
    transliteration:
      "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt | svabhāva-niyataṁ karma kurvan nāpnoti kilbiṣham",
    english:
      "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed. By performing action prescribed by one's own nature, one does not incur sin.",
    hindi:
      "अच्छी तरह अनुष्ठित परधर्म से गुणहीन स्वधर्म श्रेष्ठ है। स्वभाव से नियत कर्म करने वाला मनुष्य पाप को नहीं प्राप्त होता।",
    meaning:
      "Authenticity in one's own path is more powerful than imitation of another's — even if one's own path seems less glorious. This verse echoes 3.35 and is the Gita's core message about self-realization through one's unique dharma.",
    keywords: ["svadharma", "authenticity", "own-path", "sin-free", "nature"],
    moodTags: ["authenticity", "duty", "self-realization"],
  },
  {
    id: "18.48",
    chapter: 18,
    verse: 48,
    sanskrit:
      "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् | सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः ||",
    transliteration:
      "saha-jaṁ karma kaunteya sa-doṣham api na tyajet | sarvārambhā hi doṣheṇa dhūmenāgnir ivāvṛitāḥ",
    english:
      "One should not abandon one's innate duty, O son of Kunti, even if it is defective. All undertakings are enveloped by imperfection, as fire is enveloped by smoke.",
    hindi:
      "हे कौन्तेय! सहज कर्म यदि दोषयुक्त भी हो तो उसे त्यागना नहीं चाहिए, क्योंकि जैसे अग्नि धुएँ से आवृत्त रहती है, वैसे ही सभी कर्म दोष से आवृत्त रहते हैं।",
    meaning:
      "No human action is perfectly pure — all are mixed with some imperfection, just as fire always has smoke. The wise do not abandon their innate duty for this reason but persevere with faith and devotion.",
    keywords: [
      "innate-duty",
      "imperfection",
      "persevere",
      "fire-smoke",
      "authenticity",
    ],
    moodTags: ["courage", "perseverance", "wisdom"],
  },
  {
    id: "18.49",
    chapter: 18,
    verse: 49,
    sanskrit:
      "असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः | नैष्कर्म्यसिद्धिं परमां सन्न्यासेनाधिगच्छति ||",
    transliteration:
      "asakta-buddhiḥ sarvatra jitātmā vigata-spṛihaḥ | naiṣhkarmya-siddhiṁ paramāṁ sannyāsenādhigachchhati",
    english:
      "One whose intellect is unattached everywhere, whose self is mastered, who is free from desire — through renunciation, such a person attains the highest perfection of freedom from action.",
    hindi:
      "जिसकी बुद्धि सर्वत्र अनासक्त है, जिसने आत्मा को जीत लिया है और जो स्पृहारहित है — वह सन्न्यास से कर्म-रहितता की परम सिद्धि को प्राप्त होता है।",
    meaning:
      "The highest perfection — nishkarmya (freedom from karma's binding force) — is achieved by one who has mastered the mind, detached from all objects, and renounced desire. This is the pinnacle of sannyasa.",
    keywords: [
      "nishkarmya",
      "detachment",
      "mastery",
      "desire-free",
      "perfection",
    ],
    moodTags: ["liberation", "inner-freedom", "perfection"],
  },
  {
    id: "18.50",
    chapter: 18,
    verse: 50,
    sanskrit:
      "सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे | समासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा ||",
    transliteration:
      "siddhiṁ prāpto yathā brahma tathāpnoti nibodha me | samāsenaiva kaunteya niṣhṭhā jñānasya yā parā",
    english:
      "Hear from Me briefly, O son of Kunti, how one who has attained perfection also attains Brahman — the highest culmination of knowledge.",
    hindi:
      "हे कौन्तेय! सिद्धि को प्राप्त हुआ मनुष्य जिस प्रकार ब्रह्म को प्राप्त होता है, जो ज्ञान की परा निष्ठा है — वह मुझसे संक्षेप में जानो।",
    meaning:
      "Krishna now describes the final steps to Brahman-realization. Having attained perfection through duty and renunciation, the seeker moves toward the ultimate — direct knowledge of the Absolute.",
    keywords: [
      "brahman",
      "perfection",
      "knowledge",
      "culmination",
      "realization",
    ],
    moodTags: ["enlightenment", "wisdom", "liberation"],
  },
  {
    id: "18.51",
    chapter: 18,
    verse: 51,
    sanskrit:
      "बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च | शब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च ||",
    transliteration:
      "buddhyā viśhuddhayā yukto dhṛityātmānaṁ niyamya cha | śhabdādīn viṣhayāṁs tyaktvā rāga-dveṣhau vyudasya cha",
    english:
      "Endowed with a purified intellect, controlling oneself with firmness, having abandoned sound and other sense objects, renouncing attraction and aversion —",
    hindi:
      "विशुद्ध बुद्धि से युक्त, धृति से आत्मा को नियमित करके, शब्द आदि विषयों को त्यागकर, राग-द्वेष को दूर करके —",
    meaning:
      "The path to Brahman begins with purification of intellect, self-discipline, withdrawal from sense objects, and release of attraction and aversion. This is the first stage of the final ascent.",
    keywords: [
      "pure-intellect",
      "self-control",
      "sense-withdrawal",
      "liberation-path",
    ],
    moodTags: ["discipline", "purity", "liberation"],
  },
  {
    id: "18.52",
    chapter: 18,
    verse: 52,
    sanskrit:
      "विविक्तसेवी लघ्वाशी यतवाक्कायमानसः | ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः ||",
    transliteration:
      "vivikta-sevī laghv-āśhī yata-vāk-kāya-mānasaḥ | dhyāna-yoga-paro nityaṁ vairāgyaṁ samupāśhritaḥ",
    english:
      "Living in solitude, eating lightly, controlling speech, body, and mind, always devoted to the yoga of meditation, taking refuge in dispassion —",
    hindi:
      "एकान्तसेवी, हल्का भोजन करने वाला, वाणी, शरीर और मन को नियंत्रित रखने वाला, नित्य ध्यानयोग में लगा हुआ और वैराग्य का आश्रय लेने वाला —",
    meaning:
      "The practices of the ascending seeker: solitude, light eating, control of speech, body, and mind, constant meditation, and dispassion. These disciplines progressively purify the seeker and remove obstacles.",
    keywords: [
      "meditation",
      "solitude",
      "dispassion",
      "self-control",
      "ascent",
    ],
    moodTags: ["meditation", "discipline", "inner-peace"],
  },
  {
    id: "18.53",
    chapter: 18,
    verse: 53,
    sanskrit:
      "अहङ्कारं बलं दर्पं कामं क्रोधं परिग्रहम् | विमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते ||",
    transliteration:
      "ahaṅkāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ parigraham | vimuchya nirmamaḥ śhānto brahma-bhūyāya kalpate",
    english:
      "Freed from ego, false strength, arrogance, lust, anger, and possessiveness — tranquil, egoless — one becomes fit for becoming Brahman.",
    hindi:
      "अहंकार, बल, दर्प, काम, क्रोध और परिग्रह से मुक्त होकर, ममतारहित और शान्त — वह ब्रह्मभाव के योग्य हो जाता है।",
    meaning:
      "The final obstacles to Brahman-realization are ego, false pride, arrogance, desire, anger, and possessiveness. When these are released, the seeker becomes 'fit for Brahman' — serene, selfless, and united with the Divine.",
    keywords: [
      "ego-free",
      "brahman",
      "tranquil",
      "possessiveness-free",
      "liberation",
    ],
    moodTags: ["liberation", "peace", "enlightenment"],
  },
  {
    id: "18.54",
    chapter: 18,
    verse: 54,
    sanskrit:
      "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति | समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम् ||",
    transliteration:
      "brahma-bhūtaḥ prasannātmā na śhochati na kāṅkṣhati | samaḥ sarveṣhu bhūteṣhu mad-bhaktiṁ labhate parām",
    english:
      "Thus established in Brahman, with a serene self, one neither grieves nor desires. Equal to all beings, one attains supreme devotion to Me.",
    hindi:
      "ब्रह्मभूत होकर, प्रसन्न आत्मा वाला मनुष्य न शोक करता है न इच्छा करता है। सभी प्राणियों में समभाव रखने वाला वह मुझमें परा भक्ति पाता है।",
    meaning:
      "The brahman-realized soul is joyful, grief-free, desire-free, and equal-minded toward all beings. Remarkably, Krishna says this is when one attains SUPREME devotion — jnana culminates in bhakti.",
    keywords: [
      "brahman-state",
      "equal-minded",
      "supreme-devotion",
      "joy",
      "liberation",
    ],
    moodTags: ["enlightenment", "devotion", "joy"],
  },
  {
    id: "18.55",
    chapter: 18,
    verse: 55,
    sanskrit:
      "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः | ततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम् ||",
    transliteration:
      "bhaktyā mām abhijānāti yāvān yaśh chāsmi tattvataḥ | tato māṁ tattvato jñātvā viśhate tad-anantaram",
    english:
      "Through devotion, one truly knows Me — who and what I am. And then, having truly known Me, one enters into Me.",
    hindi:
      "भक्ति से मुझे तत्त्व से जानता है कि मैं कितना हूँ और जो हूँ। तत्पश्चात् मुझे तत्त्व से जानकर वह मुझमें प्रवेश करता है।",
    meaning:
      "Bhakti (devotion) is the supreme path to knowing Krishna's true nature. Not through logic or ritual alone but through love does the devotee pierce the veil of maya and merge into the Divine. This is the mystery of union.",
    keywords: ["bhakti", "devotion", "divine-knowledge", "merge", "liberation"],
    moodTags: ["devotion", "love", "liberation"],
  },
  {
    id: "18.56",
    chapter: 18,
    verse: 56,
    sanskrit:
      "सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः | मत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम् ||",
    transliteration:
      "sarva-karmāṇy api sadā kurvāṇo mad-vyapāśhrayaḥ | mat-prasādād avāpnoti śhāśhvataṁ padam avyayam",
    english:
      "Even while always performing all actions, one who takes shelter in Me attains, by My grace, the eternal and imperishable state.",
    hindi:
      "सदा सभी कर्म करते हुए भी जो मेरे शरण में रहता है, वह मेरी कृपा से शाश्वत अव्यय पद को प्राप्त होता है।",
    meaning:
      "Even while engaged in all worldly activities, one who takes refuge in Krishna receives His grace and attains the eternal state. This is the miracle of bhakti — liberation is possible in active life, not just in renunciation.",
    keywords: [
      "grace",
      "shelter",
      "eternal-state",
      "active-life",
      "liberation",
    ],
    moodTags: ["grace", "devotion", "liberation"],
  },
  {
    id: "18.57",
    chapter: 18,
    verse: 57,
    sanskrit:
      "चेतसा सर्वकर्माणि मयि सन्न्यस्य मत्परः | बुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव ||",
    transliteration:
      "chetasā sarva-karmāṇi mayi sannyasya mat-paraḥ | buddhi-yogam upāśhritya mach-chittaḥ satataṁ bhava",
    english:
      "Surrendering all actions to Me with your mind, taking refuge in Me and in buddhi yoga, always keep your mind on Me.",
    hindi:
      "सभी कर्मों को मन से मुझमें समर्पित करके, मुझ परम को लक्ष्य बनाकर, बुद्धियोग का आश्रय लेकर, सदा मच्चित्त रहो।",
    meaning:
      "Krishna's instruction is clear: surrender all actions mentally to God, focus on Him as the supreme goal, and keep consciousness fixed on Krishna. This is the practice of total surrender (sarvakarma sannyasa).",
    keywords: [
      "surrender",
      "total-offering",
      "buddhi-yoga",
      "God-consciousness",
      "devotion",
    ],
    moodTags: ["surrender", "devotion", "guidance"],
  },
  {
    id: "18.58",
    chapter: 18,
    verse: 58,
    sanskrit:
      "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि | अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि ||",
    transliteration:
      "mach-chittaḥ sarva-durgāṇi mat-prasādāt tariṣhyasi | atha chet tvam ahaṅkārān na śhroṣhyasi vinaṅkṣhyasi",
    english:
      "By becoming conscious of Me, you will pass over all obstacles by My grace. But if, out of ego, you do not listen — you will perish.",
    hindi:
      "मुझमें चित्त लगाने से मेरी कृपा से सभी बाधाओं को पार कर जाओगे। परन्तु यदि तुम अहंकार के कारण नहीं सुनोगे, तो नष्ट हो जाओगे।",
    meaning:
      "This verse contains both promise and warning: fix the mind on Krishna and His grace carries you over every obstacle. But let ego prevail and refuse to listen — and destruction follows. The choice is always before us.",
    keywords: ["grace", "obstacles", "ego", "warning", "surrender"],
    moodTags: ["promise", "warning", "grace"],
  },
  {
    id: "18.59",
    chapter: 18,
    verse: 59,
    sanskrit:
      "यदहङ्कारमाश्रित्य न योत्स्य इति मन्यसे | मिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति ||",
    transliteration:
      "yad ahaṅkāram āśhritya na yotsya iti manyase | mithyaiṣha vyavasāyas te prakṛitis tvāṁ niyokṣhyati",
    english:
      "If, relying on ego, you think 'I will not fight' — your resolution is vain. Your own nature will compel you.",
    hindi:
      "यदि तुम अहंकार का आश्रय लेकर यह सोचते हो कि 'मैं युद्ध नहीं करूँगा', तो यह तुम्हारा निश्चय व्यर्थ है। तुम्हारी प्रकृति तुम्हें नियुक्त करेगी।",
    meaning:
      "Krishna cuts through Arjuna's false resolution — his nature as a kshatriya warrior will compel him to fight regardless. This verse teaches that denying one's svabhava is impossible; working with it consciously is liberation.",
    keywords: ["nature", "svabhava", "ego", "compulsion", "kshatriya"],
    moodTags: ["wisdom", "nature", "reality"],
  },
  {
    id: "18.60",
    chapter: 18,
    verse: 60,
    sanskrit:
      "स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा | कर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत् ||",
    transliteration:
      "svabhāva-jena kaunteya nibaddhaḥ svena karmaṇā | kartuṁ nechchhasi yan mohāt kariṣhyasy avaśho 'pi tat",
    english:
      "O son of Kunti, bound by your own action born of your nature, that which you do not wish to do out of delusion — you will do even against your will.",
    hindi:
      "हे कौन्तेय! स्वभाव से उत्पन्न अपने कर्म से बँधे हुए, मोह से जो तुम करना नहीं चाहते, उसे भी तुम विवश होकर करोगे।",
    meaning:
      "The unconscious person is driven by their nature without choice. The conscious person aligns their actions with their nature and with God's will — turning compulsion into devotion. This is the difference between a slave to nature and a devotee of God.",
    keywords: ["nature", "compulsion", "delusion", "svabhava", "free-will"],
    moodTags: ["reality", "wisdom", "self-knowledge"],
  },
  {
    id: "18.61",
    chapter: 18,
    verse: 61,
    sanskrit:
      "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति | भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ||",
    transliteration:
      "īśhvaraḥ sarva-bhūtānāṁ hṛid-deśhe 'rjuna tiṣhṭhati | bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā",
    english:
      "O Arjuna, the Supreme Lord dwells in the hearts of all beings, causing all beings to revolve — as if mounted on a machine — by the power of His maya.",
    hindi:
      "हे अर्जुन! ईश्वर सभी प्राणियों के हृदय में स्थित है और अपनी माया से यन्त्र पर आरूढ़ की तरह सभी प्राणियों को घुमाता रहता है।",
    meaning:
      "God dwells in every heart as the inner controller, and through maya causes all beings to move according to their karma. This profound verse reveals the immanence of God and invites us to surrender to the Divine within.",
    keywords: [
      "God-in-heart",
      "maya",
      "inner-controller",
      "divine-immanence",
      "ishvara",
    ],
    moodTags: ["divine-presence", "mystery", "surrender"],
  },
  {
    id: "18.62",
    chapter: 18,
    verse: 62,
    sanskrit:
      "तमेव शरणं गच्छ सर्वभावेन भारत | तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम् ||",
    transliteration:
      "tam eva śharaṇaṁ gachchha sarva-bhāvena bhārata | tat-prasādāt parāṁ śhāntiṁ sthānaṁ prāpsyasi śhāśhvatam",
    english:
      "Take refuge in Him alone with your whole being, O Bharata. By His grace, you will attain supreme peace and the eternal abode.",
    hindi:
      "हे भारत! उसी की शरण में सर्वभाव से जाओ। उसकी कृपा से परम शान्ति और शाश्वत स्थान को प्राप्त होगे।",
    meaning:
      "The practical instruction following the cosmic vision of verse 61: surrender completely to the God who dwells within you. His grace will grant supreme peace and the eternal state — moksha itself.",
    keywords: [
      "surrender",
      "grace",
      "supreme-peace",
      "eternal-abode",
      "moksha",
    ],
    moodTags: ["surrender", "peace", "liberation"],
  },
  {
    id: "18.63",
    chapter: 18,
    verse: 63,
    sanskrit: "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया | विमृश्यैतदशेषेण यथेच्छसि तथा कुरु ||",
    transliteration:
      "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā | vimṛiśhyaitad aśheṣheṇa yechhasi tathā kuru",
    english:
      "Thus has this knowledge, more secret than all secrets, been declared to you by Me. Reflect on it fully, and then do as you wish.",
    hindi:
      "इस प्रकार यह ज्ञान जो गुह्य से भी गुह्यतर है, मेरे द्वारा तुम्हें कहा गया है। इसे पूर्णतः विचार कर, जैसी इच्छा हो वैसा करो।",
    meaning:
      "Krishna respects Arjuna's free will completely — after sharing the deepest knowledge, He does not command but invites reflection and free choice. This is the hallmark of divine love: truth offered without coercion.",
    keywords: [
      "free-will",
      "deep-knowledge",
      "reflection",
      "choice",
      "divine-respect",
    ],
    moodTags: ["free-will", "wisdom", "divine-love"],
  },
  {
    id: "18.64",
    chapter: 18,
    verse: 64,
    sanskrit:
      "सर्वगुह्यतमं भूयः शृणु मे परमं वचः | इष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम् ||",
    transliteration:
      "sarva-guhyatamaṁ bhūyaḥ śhṛiṇu me paramaṁ vachaḥ | iṣhṭo 'si me dṛiḍham iti tato vakṣhyāmi te hitam",
    english:
      "Hear again My supreme word, the most secret of all. Because you are My dear friend, I will tell you what is for your benefit.",
    hindi:
      "सब गुह्य से अति गुह्य मेरे परम वचन को फिर से सुनो। तुम मुझे अत्यन्त प्रिय हो, इसलिए तुम्हारे हित की बात कहूँगा।",
    meaning:
      "Krishna's love for Arjuna overflows — He calls him 'dridham ishta' (deeply beloved) and promises to share the most secret teaching. This intimacy reveals that the highest knowledge is given not to the scholar but to the beloved friend.",
    keywords: [
      "most-secret",
      "beloved",
      "supreme-word",
      "divine-love",
      "friendship",
    ],
    moodTags: ["love", "divine-friendship", "intimacy"],
  },
  {
    id: "18.65",
    chapter: 18,
    verse: 65,
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु | मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ||",
    transliteration:
      "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru | mām evaiṣhyasi satyaṁ te pratijāne priyo 'si me",
    english:
      "Always think of Me, be devoted to Me, worship Me, bow to Me. You will surely come to Me alone. I truthfully promise you — you are dear to Me.",
    hindi:
      "मुझमें मन लगाओ, मेरे भक्त बनो, मेरी पूजा करो, मुझे नमस्कार करो। तुम मुझे ही प्राप्त होगे — सत्य है, तुम मुझे प्रिय हो।",
    meaning:
      "The four practices of bhakti: fill the mind with Krishna, be His devotee, worship Him, and bow to Him. Then comes Krishna's personal promise — 'You will come to Me. I swear this is true. You are dear to Me.' This is the most intimate declaration of divine love in all of scripture.",
    keywords: [
      "bhakti",
      "devotion",
      "divine-promise",
      "dear-to-Krishna",
      "liberation",
    ],
    moodTags: ["devotion", "divine-love", "promise"],
  },
  {
    id: "18.66",
    chapter: 18,
    verse: 66,
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
    transliteration:
      "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja | ahaṁ tvā sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
    english:
      "Abandon all varieties of dharma and take refuge in Me alone. I shall deliver you from all sins. Do not grieve.",
    hindi:
      "सभी धर्मों को छोड़कर मेरी एकमात्र शरण में आओ। मैं तुम्हें सभी पापों से मुक्त कर दूँगा। शोक मत करो।",
    meaning:
      "The supreme verse of the Bhagavad Gita — the charama shloka. After all teachings, Krishna's ultimate message is simple: surrender fully to Me alone, and I will free you from all sin. 'Do not grieve' — these three words dissolve Arjuna's final burden. This is Krishna's unconditional promise to every soul.",
    keywords: ["surrender", "moksha", "sin-free", "grace", "supreme-verse"],
    moodTags: ["surrender", "liberation", "grace"],
  },
  {
    id: "18.67",
    chapter: 18,
    verse: 67,
    sanskrit:
      "इदं ते नातपस्काय नाभक्ताय कदाचन | न चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति ||",
    transliteration:
      "idaṁ te nātapaskāya nābhaktāya kadāchana | na chāśhuśhrūṣhave vāchyaṁ na cha māṁ yo 'bhyasūyati",
    english:
      "This should never be spoken to one who lacks austerity, to one who is not devoted, to one who does not wish to hear, and to one who envies Me.",
    hindi:
      "यह ज्ञान तपरहित, अभक्त, सुनने के अनिच्छुक और मुझसे ईर्ष्या करने वाले को कभी नहीं कहना चाहिए।",
    meaning:
      "Krishna guards the sanctity of the Gita's teaching — it should only be shared with those who have spiritual readiness: discipline, devotion, willingness to hear, and respect for the Divine. The teaching is not withheld to be exclusive but to be protected.",
    keywords: [
      "sacred-knowledge",
      "worthy-receiver",
      "devotion",
      "protection",
      "teaching",
    ],
    moodTags: ["wisdom", "sacred", "guidance"],
  },
  {
    id: "18.68",
    chapter: 18,
    verse: 68,
    sanskrit:
      "य इमं परमं गुह्यं मद्भक्तेष्वभिधास्यति | भक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशयः ||",
    transliteration:
      "ya imaṁ paramaṁ guhyaṁ mad-bhakteṣhv abhidhāsyati | bhaktiṁ mayi parāṁ kṛitvā mām evaiṣhyaty asaṁśhayaḥ",
    english:
      "One who teaches this supreme secret to My devotees, performing the highest act of devotion to Me, will without doubt come to Me.",
    hindi:
      "जो इस परम गुह्य को मेरे भक्तों में कहेगा, वह मुझमें परा भक्ति करके निःसंदेह मुझे ही प्राप्त होगा।",
    meaning:
      "Sharing the Gita's wisdom with devoted seekers is itself the highest act of bhakti — it brings liberation to the teacher as well. This verse blesses all who spread the Gita's teachings.",
    keywords: [
      "sharing-wisdom",
      "devotion",
      "liberation",
      "teacher",
      "highest-seva",
    ],
    moodTags: ["devotion", "seva", "liberation"],
  },
  {
    id: "18.69",
    chapter: 18,
    verse: 69,
    sanskrit:
      "न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तमः | भविता न च मे तस्मादन्यः प्रियतरो भुवि ||",
    transliteration:
      "na cha tasmān manuṣhyeṣhu kaśhchin me priya-kṛittamaḥ | bhavitā na cha me tasmād anyaḥ priyataro bhuvi",
    english:
      "There is no one among men who is more dear to Me than such a person, and there will never be another more beloved on earth.",
    hindi: "मनुष्यों में उससे अधिक मेरा प्रिय कोई नहीं है, और न होगा।",
    meaning:
      "Krishna declares that the one who spreads His teachings to devotees is the most beloved person on earth — more dear to Him than anyone else. This is the highest honor Krishna bestows in the entire Gita.",
    keywords: ["most-beloved", "Gita-teacher", "divine-love", "highest-honor"],
    moodTags: ["love", "divine-love", "honor"],
  },
  {
    id: "18.70",
    chapter: 18,
    verse: 70,
    sanskrit:
      "अध्येष्यते च य इमं धर्म्यं संवादमावयोः | ज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः ||",
    transliteration:
      "adhyeṣhyate cha ya imaṁ dharmyaṁ saṁvādam āvayoḥ | jñāna-yajñena tenāham iṣhṭaḥ syām iti me matiḥ",
    english:
      "And one who studies this sacred dialogue between us — I regard that person as having worshiped Me with the sacrifice of knowledge. Such is My conviction.",
    hindi:
      "जो हमारे इस धर्मयुक्त संवाद का अध्ययन करेगा, उसके द्वारा मैं ज्ञानयज्ञ से पूजित हूँगा — ऐसी मेरी मति है।",
    meaning:
      "Studying the Bhagavad Gita is itself a form of worship — a yajna (sacrifice) of knowledge. Every reading of the Gita is an offering to Krishna. This blessing covers all readers across time.",
    keywords: [
      "Gita-study",
      "knowledge-sacrifice",
      "worship",
      "blessing",
      "reading",
    ],
    moodTags: ["devotion", "blessing", "wisdom"],
  },
  {
    id: "18.71",
    chapter: 18,
    verse: 71,
    sanskrit:
      "श्रद्धावाननसूयश्च शृणुयादपि यो नरः | सोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम् ||",
    transliteration:
      "śhraddhāvān anasūyaśh cha śhṛiṇuyād api yo naraḥ | so 'pi muktaḥ śhubhāṁl lokān prāpnuyāt puṇya-karmaṇām",
    english:
      "Even the person who merely listens to this with faith and without envy — liberated, they will attain the auspicious worlds of the pious.",
    hindi:
      "जो श्रद्धावान और ईर्ष्यारहित मनुष्य इसे सुनता भी है, वह मुक्त होकर पुण्यकर्मियों के शुभ लोकों को प्राप्त होता है।",
    meaning:
      "Even simply hearing the Gita with faith and without jealousy brings liberation and access to the highest realms. The Gita's power is not reserved for scholars — faith is the only requirement.",
    keywords: [
      "hearing",
      "faith",
      "liberation",
      "auspicious-worlds",
      "blessing",
    ],
    moodTags: ["faith", "grace", "liberation"],
  },
  {
    id: "18.72",
    chapter: 18,
    verse: 72,
    sanskrit:
      "कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा | कच्चिदज्ञानसम्मोहः प्रनष्टस्ते धनञ्जय ||",
    transliteration:
      "kachchid etach chhrutaṁ pārtha tvayaikāgreṇa chetasā | kachchid ajñāna-sammohaḥ pranaṣhṭas te dhanañjaya",
    english:
      "O Partha, have you heard this with single-pointed mind? O Dhananjaya, has your delusion born of ignorance been destroyed?",
    hindi:
      "हे पार्थ! क्या तुमने इसे एकाग्र चित्त से सुना? हे धनञ्जय! क्या तुम्हारा अज्ञानजनित मोह नष्ट हो गया?",
    meaning:
      "Krishna, the eternal teacher, ends with a question of care — 'Did you truly hear? Has your confusion gone?' This is the mark of a true guru: not delivering information but ensuring transformation.",
    keywords: [
      "teacher",
      "care",
      "delusion-destroyed",
      "single-minded",
      "transformation",
    ],
    moodTags: ["care", "teacher", "clarity"],
  },
  {
    id: "18.73",
    chapter: 18,
    verse: 73,
    sanskrit:
      "अर्जुन उवाच | नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत | स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ||",
    transliteration:
      "arjuna uvācha | naṣhṭo mohaḥ smṛitir labdhā tvat-prasādān mayāchyuta | sthito 'smi gata-sandehaḥ kariṣhye vachaṁ tava",
    english:
      "Arjuna said: O Achyuta (Krishna), my delusion is destroyed and memory is regained by Your grace. I am steady, my doubts are gone. I shall act according to Your word.",
    hindi:
      "अर्जुन बोले: हे अच्युत! आपकी कृपा से मेरा मोह नष्ट हो गया और स्मृति प्राप्त हो गई। मैं संशयरहित होकर स्थिर हूँ। आपका वचन करूँगा।",
    meaning:
      "Arjuna's transformation is complete. From confused and grieving at chapter 1, he now stands in clarity — moha (delusion) destroyed, smriti (memory/consciousness) restored by Krishna's grace. His final words: 'I shall do as You say.' This is the surrender the whole Gita has been building toward.",
    keywords: [
      "transformation",
      "clarity",
      "surrender",
      "delusion-destroyed",
      "Arjuna",
    ],
    moodTags: ["clarity", "surrender", "transformation"],
  },
  {
    id: "18.74",
    chapter: 18,
    verse: 74,
    sanskrit:
      "सञ्जय उवाच | इत्यहं वासुदेवस्य पार्थस्य च महात्मनः | संवादमिममश्रौषमद्भुतं रोमहर्षणम् ||",
    transliteration:
      "sañjaya uvācha | ity ahaṁ vāsudevasya pārthasya cha mahātmanaḥ | saṁvādam imam aśhrauṣham adbhutaṁ roma-harṣhaṇam",
    english:
      "Sanjaya said: Thus I have heard this wonderful dialogue between Vasudeva (Krishna) and the great-souled Partha (Arjuna), which causes the hair to stand on end.",
    hindi:
      "संजय बोले: इस प्रकार मैंने वासुदेव और महात्मा पार्थ के इस अद्भुत रोमांचकारी संवाद को सुना।",
    meaning:
      "Sanjaya, the divine narrator, is overwhelmed by the sacred dialogue he has witnessed. The Gita causes his hair to stand on end — he is a model of the reverence with which this teaching should be received.",
    keywords: ["sanjaya", "sacred-dialogue", "awe", "reverence", "narrator"],
    moodTags: ["reverence", "awe", "sacred"],
  },
  {
    id: "18.75",
    chapter: 18,
    verse: 75,
    sanskrit:
      "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम् | योगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम् ||",
    transliteration:
      "vyāsa-prasādāch chhruta-vān etad guhyam ahaṁ param | yogaṁ yogeśhvarāt kṛiṣhṇāt sākṣhāt kathayataḥ svayam",
    english:
      "By the grace of Vyasa, I have heard this supreme and most secret yoga directly as Krishna himself declared it to the Lord of Yoga.",
    hindi:
      "व्यास की कृपा से मैंने इस परम गुह्य योग को योगेश्वर कृष्ण से स्वयं कहते हुए प्रत्यक्ष सुना।",
    meaning:
      "Sanjaya acknowledges the grace of Vyasa (who gave him divine vision) and the privilege of hearing the Gita directly from Krishna himself. This verse establishes the authentic lineage of the teaching.",
    keywords: ["vyasa", "divine-vision", "lineage", "grace", "authentic"],
    moodTags: ["gratitude", "reverence", "grace"],
  },
  {
    id: "18.76",
    chapter: 18,
    verse: 76,
    sanskrit:
      "राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम् | केशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः ||",
    transliteration:
      "rājan saṁsmṛitya saṁsmṛitya saṁvādam imam adbhutam | keśhavārjunayoḥ puṇyaṁ hṛiṣhyāmi cha muhur muhuḥ",
    english:
      "O King, recalling again and again this wonderful and sacred dialogue between Keshava and Arjuna, I rejoice repeatedly.",
    hindi:
      "हे राजन! केशव और अर्जुन के इस पवित्र और अद्भुत संवाद को बार-बार स्मरण करके मैं बार-बार हर्षित होता हूँ।",
    meaning:
      "Sanjaya cannot stop returning to the memory of the Gita — each remembrance fills him with joy. This is the experience of all who truly hear or read the Gita: every repetition deepens the bliss.",
    keywords: ["remembrance", "joy", "sacred-dialogue", "Keshava", "Arjuna"],
    moodTags: ["joy", "devotion", "sacred"],
  },
  {
    id: "18.77",
    chapter: 18,
    verse: 77,
    sanskrit:
      "तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः | विस्मयो मे महान्राजन्हृष्यामि च पुनः पुनः ||",
    transliteration:
      "tach cha saṁsmṛitya saṁsmṛitya rūpam aty-adbhutaṁ hareḥ | vismayo me mahān rājan hṛiṣhyāmi cha punaḥ punaḥ",
    english:
      "And recalling again and again that most wonderful form of Hari (Krishna), great is my wonder, O King, and I rejoice again and again.",
    hindi:
      "हे राजन! हरि के उस अत्यद्भुत रूप को बार-बार स्मरण करके मुझे महान् आश्चर्य हो रहा है और बार-बार हर्षित होता हूँ।",
    meaning:
      "Sanjaya is still filled with wonder at Krishna's cosmic form revealed in Chapter 11. The joy of divine vision never fades — each remembrance is as fresh and overwhelming as the first experience.",
    keywords: ["divine-form", "wonder", "Hari", "vision", "joy"],
    moodTags: ["wonder", "joy", "divine-vision"],
  },
  {
    id: "18.78",
    chapter: 18,
    verse: 78,
    sanskrit:
      "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः | तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ||",
    transliteration:
      "yatra yogeśhvaraḥ kṛiṣhṇo yatra pārtho dhanur-dharaḥ | tatra śhrīr vijayo bhūtir dhruvā nītir matir mama",
    english:
      "Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna the archer — there will surely be prosperity, victory, abundance, and righteousness. This is my conviction.",
    hindi:
      "जहाँ योगेश्वर कृष्ण हैं और जहाँ धनुर्धर पार्थ हैं, वहाँ श्री, विजय, विभूति और ध्रुव नीति है — ऐसा मेरा मत है।",
    meaning:
      "The final verse of the Bhagavad Gita. Sanjaya's concluding testimony: where God (Krishna) and devotion (Arjuna) are united, there prosperity, victory, abundance, and righteousness are certain. This is the eternal promise — when the human soul (Arjuna) surrenders to the divine (Krishna), every battle is won.",
    keywords: ["final-verse", "Krishna", "Arjuna", "victory", "righteousness"],
    moodTags: ["victory", "divine-union", "promise"],
  },
];
