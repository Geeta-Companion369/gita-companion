import Types "../types/gita";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Text "mo:core/Text";

module {
  // Compare two (Nat, Nat) tuples lexicographically
  func comparePair(a : (Nat, Nat), b : (Nat, Nat)) : Order.Order {
    let c1 = Nat.compare(a.0, b.0);
    if (not c1.isEqual()) { c1 } else { Nat.compare(a.1, b.1) };
  };

  public func getChapter(
    chapters : Map.Map<Nat, Types.Chapter>,
    chapterId : Nat,
  ) : ?Types.Chapter {
    chapters.get(chapterId);
  };

  public func listChapters(
    chapters : Map.Map<Nat, Types.Chapter>,
  ) : [Types.Chapter] {
    let iter = chapters.values();
    let arr = iter.toArray();
    // Sort by id
    arr.sort(func(a, b) = Nat.compare(a.id, b.id));
  };

  public func getVerse(
    verses : Map.Map<(Nat, Nat), Types.Verse>,
    chapterId : Nat,
    verseId : Nat,
  ) : ?Types.Verse {
    verses.get(comparePair, (chapterId, verseId));
  };

  public func getKrishnaGuidance(
    guidanceMap : Map.Map<Text, Types.GuidanceResult>,
    keyword : Text,
  ) : ?Types.GuidanceResult {
    guidanceMap.get(keyword.toLower());
  };

  public func listVerses(
    verses : Map.Map<(Nat, Nat), Types.Verse>,
    chapterId : Nat,
  ) : [Types.Verse] {
    let iter = verses.values();
    let all = iter.toArray();
    let filtered = all.filter(func(v : Types.Verse) : Bool { v.chapterId == chapterId });
    filtered.sort(func(a, b) = Nat.compare(a.id, b.id));
  };

  public func getMantras(
    mantras : Map.Map<Text, Types.MantraEntry>,
  ) : [Types.MantraEntry] {
    mantras.values().toArray();
  };

  public func getFestivals(
    festivals : Map.Map<Text, Types.Festival>,
  ) : [Types.Festival] {
    festivals.values().toArray();
  };

  public func getDailyChallenge(
    challenges : Map.Map<Text, Types.DailyChallenge>,
    dateKey : Text,
  ) : ?Types.DailyChallenge {
    // Try exact date key first, fall back to last-character rotation key
    switch (challenges.get(dateKey)) {
      case (?c) { ?c };
      case null {
        // Derive a 0-7 rotation key from the last character of dateKey
        let rotKey = if (dateKey.size() > 0) {
          let charArr = dateKey.toArray();
          Text.fromChar(charArr[charArr.size() - 1]);
        } else { "1" };
        challenges.get(rotKey);
      };
    };
  };

  public func getGuidanceByCategory(
    guidanceMap : Map.Map<Text, Types.GuidanceResult>,
    category : Text,
  ) : ?Types.GuidanceResult {
    guidanceMap.get(category.toLower());
  };

  public func initChapters(chapters : Map.Map<Nat, Types.Chapter>) : () {
    let data : [(Nat, Types.Chapter)] = [
      (1, { id = 1; name = "Arjuna Vishada Yoga"; verseCount = 47; summary = "Arjuna, overcome with grief and moral confusion on the battlefield of Kurukshetra, sees his kinsmen arrayed against him. Unable to fight, he collapses in despair and surrenders to Krishna for guidance. This chapter sets the stage for the Gita's profound dialogue." }),
      (2, { id = 2; name = "Sankhya Yoga"; verseCount = 72; summary = "Krishna begins his teaching by revealing the immortal nature of the soul (Atman). He introduces Sankhya philosophy and the path of Karma Yoga — performing duty without attachment to results. This foundational chapter contains the essence of the Gita's wisdom." }),
      (3, { id = 3; name = "Karma Yoga"; verseCount = 43; summary = "Krishna elaborates on the path of selfless action (Karma Yoga). He explains that no one can abstain from action, and that prescribed duties performed without desire for results lead to liberation. He also reveals how desire and anger are humanity's greatest enemies." }),
      (4, { id = 4; name = "Jnana Karma Sanyasa Yoga"; verseCount = 42; summary = "Krishna reveals the divine mystery of his periodic descension (avatara) to restore righteousness. He explains how knowledge (Jnana) purifies all karma and how renunciation through wisdom is the highest path. The ancient tradition of this yoga is disclosed." }),
      (5, { id = 5; name = "Karma Vairagya Yoga"; verseCount = 29; summary = "Krishna reconciles the paths of renunciation and selfless action, showing they lead to the same goal. The sage who acts without ego or attachment is truly renounced. Inner peace comes from realizing Brahman as the real enjoyer of all sacrifices." }),
      (6, { id = 6; name = "Abhyasa Yoga"; verseCount = 47; summary = "Krishna gives detailed instruction on the practice of meditation (Dhyana Yoga). He describes the proper posture, diet, and mental discipline for the yogi. He assures Arjuna that even a fallen yogi is not lost — they continue from where they left off in future lives." }),
      (7, { id = 7; name = "Paramahamsa Vijnana Yoga"; verseCount = 30; summary = "Krishna reveals his divine eight-fold nature (Prakriti) and declares himself the ultimate reality underlying all existence. He explains how the deluded worship other deities while the wise recognize him as the supreme source of all. Few among thousands truly know him." }),
      (8, { id = 8; name = "Aksara Parabrahma Yoga"; verseCount = 28; summary = "Krishna explains the nature of Brahman, karma, and the cosmic cycles of creation and dissolution. He describes how one who remembers him at the moment of death attains him. The path of light (Devayana) versus the path of darkness (Pitriyana) is explained." }),
      (9, { id = 9; name = "Raja Vidya Raja Guhya Yoga"; verseCount = 34; summary = "Krishna reveals the king of all knowledge — the most confidential wisdom of devotional service (Bhakti). He declares that all beings rest in him yet he is not in them. With pure devotion, even those of lower birth can attain the supreme abode." }),
      (10, { id = 10; name = "Vibhuti Yoga"; verseCount = 42; summary = "Krishna enumerates his divine manifestations and opulences throughout the universe. He is the radiance in the sun, the life in all beings, the intelligence of the intelligent. Knowing these vibhutis, Arjuna's devotion intensifies and he requests to see the cosmic form." }),
      (11, { id = 11; name = "Viswarupa Darsana Yoga"; verseCount = 55; summary = "Krishna grants Arjuna divine vision to behold his Universal Form (Vishwarupa) — infinite, awe-inspiring, containing all creation. Arjuna sees armies being consumed in Krishna's mouth and is overwhelmed with terror and wonder. Krishna then reveals his gentle four-armed form, accessible only through devotion." }),
      (12, { id = 12; name = "Bhakti Yoga"; verseCount = 20; summary = "Krishna declares that devotional worship of his personal form is the highest and most direct path. He describes the qualities of the ideal devotee — compassionate, free from ego, equal in pleasure and pain, and surrendered. This chapter is considered the heart of the Gita." }),
      (13, { id = 13; name = "Ksetra Ksetrajna Vibhaga Yoga"; verseCount = 34; summary = "Krishna explains the distinction between the field (Kshetra — the body and nature) and the knower of the field (Kshetrajna — the soul). True knowledge is recognizing the imperishable Self within the perishable body. Liberation comes from understanding this distinction." }),
      (14, { id = 14; name = "Gunatraya Vibhaga Yoga"; verseCount = 27; summary = "Krishna explains the three modes of material nature (Gunas) — Sattva (goodness), Rajas (passion), and Tamas (ignorance). These gunas bind the soul to the body. The one who transcends the three gunas through devotion to Krishna attains liberation." }),
      (15, { id = 15; name = "Purushottama Yoga"; verseCount = 20; summary = "Krishna describes the cosmic Ashvattha tree of material existence with roots upward and branches downward, representing the inverted reflection of spiritual reality. He then reveals himself as Purushottama — the Supreme Person beyond both the perishable and imperishable." }),
      (16, { id = 16; name = "Daivasura Sampad Vibhaga Yoga"; verseCount = 24; summary = "Krishna distinguishes between divine (Daivi) and demoniac (Asuri) natures. The divine qualities lead to liberation; the demoniac to bondage. He warns against lust, anger, and greed as the three gates to hell. One should be guided by scriptures, not whim." }),
      (17, { id = 17; name = "Shraddhatraya Vibhaga Yoga"; verseCount = 28; summary = "Krishna classifies faith (Shraddha), food, sacrifice, austerity, and charity according to the three modes of nature. Sattvic faith leads to wisdom; Rajasic to passion; Tamasic to ignorance. Actions performed without scriptural guidance or faith yield no lasting benefit." }),
      (18, { id = 18; name = "Moksha Sanyasa Yoga"; verseCount = 78; summary = "In this concluding chapter, Krishna summarizes all the Gita's teachings. He explains true renunciation (Sanyasa) and concludes with the highest secret: abandon all forms of dharma and surrender completely to Krishna alone. He promises liberation to the surrendered devotee. Arjuna resolves to fight." }),
    ];
    for ((k, v) in data.vals()) {
      chapters.add(k, v);
    };
  };

  public func initVerses(verses : Map.Map<(Nat, Nat), Types.Verse>) : () {
    // Helper to add a verse
    let add = func(chId : Nat, vId : Nat, vNum : Text, sk : Text, tr : Text, en : Text) {
      verses.add(comparePair, (chId, vId), {
        id = vId;
        chapterId = chId;
        verseNumber = vNum;
        sanskritText = sk;
        transliteration = tr;
        englishTranslation = en;
      });
    };

    // Chapter 1 — key verses
    add(1, 1, "1.1",
      "धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
      "dhṛtarāṣṭra uvāca | dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya",
      "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy plain of Kurukshetra, eager for battle?"
    );
    add(1, 28, "1.28",
      "अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्। सीदन्ति मम गात्राणि मुखं च परिशुष्यति॥",
      "arjuna uvāca | dṛṣṭvemaṁ sva-janaṁ kṛṣṇa yuyutsuṁ samupasthitam | sīdanti mama gātrāṇi mukhaṁ ca pariśuṣyati",
      "Arjuna said: O Krishna, seeing my own kinsmen arrayed before me with desire to fight, my limbs fail and my mouth is parched. My body quivers and my hair stands on end."
    );
    add(1, 47, "1.47",
      "सञ्जय उवाच। एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः॥",
      "sañjaya uvāca | evam uktvārjunaḥ saṅkhye rathopastha upāviśat | visṛjya sa-śaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ",
      "Sanjaya said: Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sank down on his chariot seat, his mind overwhelmed with grief."
    );

    // Chapter 2 — key verses including guidance verses
    add(2, 11, "2.11",
      "श्रीभगवानुवाच। अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥",
      "śrī-bhagavān uvāca | aśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase | gatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ",
      "The Supreme Lord said: While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor for the dead."
    );
    add(2, 20, "2.20",
      "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
      "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ | ajo nityaḥ śāśvato'yaṁ purāṇo na hanyate hanyamāne śarīre",
      "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."
    );
    add(2, 47, "2.47",
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo'stv akarmaṇi",
      "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
    );
    add(2, 62, "2.62",
      "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
      "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate | saṅgāt sañjāyate kāmaḥ kāmāt krodho'bhijāyate",
      "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises. This is the chain of bondage."
    );
    add(2, 63, "2.63",
      "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
      "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ | smṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati",
      "From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again into the material pool."
    );
    add(2, 72, "2.72",
      "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति। स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति॥",
      "eṣā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati | sthitvāsyām anta-kāle'pi brahma-nirvāṇam ṛcchati",
      "That is the way of the spiritual and godly life, after attaining which a man is not bewildered. If one is thus situated even at the hour of death, one can enter into the kingdom of God."
    );

    // Chapter 3 — key verses including guidance verses
    add(3, 8, "3.8",
      "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
      "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ | śarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ",
      "Perform your prescribed duty, for action is better than inaction. A man cannot even maintain his physical body without work. Do your duty as it is obligatory; do not abandon it."
    );
    add(3, 19, "3.19",
      "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
      "tasmād asaktaḥ satataṁ kāryaṁ karma samācara | asakto hy ācaran karma param āpnoti pūruṣaḥ",
      "Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme."
    );
    add(3, 27, "3.27",
      "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥",
      "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ | ahaṅkāra-vimūḍhātmā kartāham iti manyate",
      "The bewildered spirit soul, under the influence of the three modes of material nature, thinks himself to be the doer of activities, which are in actuality carried out by nature."
    );
    add(3, 43, "3.43",
      "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना। जहि शत्रुं महाबाहो कामरूपं दुरासदम्॥",
      "evaṁ buddheḥ paraṁ buddhvā saṁstabhyātmānam ātmanā | jahi śatruṁ mahā-bāho kāma-rūpaṁ durāsadam",
      "Thus knowing oneself to be transcendental to the material senses, mind and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence and thus — by spiritual strength — conquer this insatiable enemy known as lust."
    );

    // Chapter 4 — key verses including guidance verse 4.7
    add(4, 7, "4.7",
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
      "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion — at that time I descend Myself."
    );
    add(4, 8, "4.8",
      "परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
      "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām | dharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
      "To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I Myself appear, millennium after millennium."
    );
    add(4, 38, "4.38",
      "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
      "na hi jñānena sadṛśaṁ pavitram iha vidyate | tat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",
      "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has achieved this enjoys the self within himself in due course of time."
    );

    // Chapter 5 — key verses including guidance verses
    add(5, 3, "5.3",
      "ज्ञेयः स नित्यसन्न्यासी यो न द्वेष्टि न काङ्क्षति। निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते॥",
      "jñeyaḥ sa nitya-sannyāsī yo na dveṣṭi na kāṅkṣati | nirdvandvo hi mahā-bāho sukhaṁ bandhāt pramucyate",
      "One who neither hates nor desires the fruits of his activities is known to be always renounced. Such a person, free from all dualities, easily overcomes material bondage and is completely liberated, O mighty-armed Arjuna."
    );
    add(5, 29, "5.29",
      "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्। सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति॥",
      "bhoktāraṁ yajña-tapasāṁ sarva-loka-maheśvaram | suhṛdaṁ sarva-bhūtānāṁ jñātvā māṁ śāntim ṛcchati",
      "A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries."
    );

    // Chapter 6 — key verses including guidance verses
    add(6, 5, "6.5",
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
      "uddhared ātmanātmānaṁ nātmānam avasādayet | ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
      "One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well."
    );
    add(6, 10, "6.10",
      "योगी युञ्जीत सततमात्मानं रहसि स्थितः। एकाकी यतचित्तात्मा निराशीरपरिग्रहः॥",
      "yogī yuñjīta satatam ātmānaṁ rahasi sthitaḥ | ekākī yata-cittātmā nirāśīr aparigrahaḥ",
      "A transcendentalist should always engage his body, mind and self in relationship with the Supreme; he should live alone in a secluded place and should always carefully control his mind. He should be free from desires and feelings of possessiveness."
    );
    add(6, 26, "6.26",
      "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्। ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
      "yato yato niścarati manaś cañcalam asthiram | tatas tato niyamyaitad ātmany eva vaśaṁ nayet",
      "From wherever the mind wanders due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the Self."
    );
    add(6, 47, "6.47",
      "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना। श्रद्धावान्भजते यो मां स मे युक्ततमो मतः॥",
      "yoginām api sarveṣāṁ mad-gatenāntar-ātmanā | śraddhāvān bhajate yo māṁ sa me yuktatamo mataḥ",
      "And of all yogis, the one with great faith who always abides in Me, thinks of Me within himself, and renders transcendental loving service to Me — he is the most intimately united with Me in yoga and is the highest of all. That is My opinion."
    );

    // Chapter 7 — key verses including guidance verse 7.4
    add(7, 4, "7.4",
      "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च। अहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा॥",
      "bhūmir āpo'nalo vāyuḥ khaṁ mano buddhir eva ca | ahaṅkāra itīyaṁ me bhinnā prakṛtir aṣṭadhā",
      "Earth, water, fire, air, ether, mind, intelligence and false ego — all together these eight constitute My separated material energies."
    );
    add(7, 7, "7.7",
      "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
      "mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya | mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",
      "O conqueror of wealth, there is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread."
    );
    add(7, 19, "7.19",
      "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥",
      "bahūnāṁ janmanām ante jñānavān māṁ prapadyate | vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",
      "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare."
    );

    // Chapter 8 — key verses
    add(8, 5, "8.5",
      "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्। यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
      "anta-kāle ca mām eva smaran muktvā kalevaram | yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśayaḥ",
      "Whoever, at the time of death, gives up the body remembering Me alone, reaches My state. Of this there is no doubt."
    );
    add(8, 15, "8.15",
      "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम्। नाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः॥",
      "mām upetya punar janma duḥkhālayam aśāśvatam | nāpnuvanti mahātmānaḥ saṁsiddhiṁ paramāṁ gatāḥ",
      "After attaining Me, the great souls, who are yogis in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection."
    );

    // Chapter 9 — key verses including guidance verse 9.22
    add(9, 22, "9.22",
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
      "ananyāś cintayanto māṁ ye janāḥ paryupāsate | teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
      "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack, and I preserve what they have."
    );
    add(9, 26, "9.26",
      "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
      "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati | tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
      "If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it."
    );
    add(9, 34, "9.34",
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः॥",
      "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru | mām evaiṣyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ",
      "Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me and worship Me. Being completely absorbed in Me, surely you will come to Me."
    );

    // Chapter 10 — key verses
    add(10, 20, "10.20",
      "अहमात्मा गुडाकेश सर्वभूताशयस्थितः। अहमादिश्च मध्यं च भूतानामन्त एव च॥",
      "aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ | aham ādiś ca madhyaṁ ca bhūtānām anta eva ca",
      "I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle and the end of all beings."
    );
    add(10, 42, "10.42",
      "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन। विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत्॥",
      "atha vā bahunaitena kiṁ jñātena tavārjuna | viṣṭabhyāham idaṁ kṛtsnam ekāṁśena sthito jagat",
      "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe."
    );

    // Chapter 11 — key verses
    add(11, 33, "11.33",
      "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्। मयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन्॥",
      "tasmāt tvam uttiṣṭha yaśo labhasva jitvā śatrūn bhuṅkṣva rājyaṁ samṛddham | mayaivaite nihitāḥ pūrvam eva nimitta-mātraṁ bhava savyasācin",
      "Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement, and you, O Savyasachin, can be but an instrument in the fight."
    );
    add(11, 55, "11.55",
      "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः। निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव॥",
      "mat-karma-kṛn mat-paramo mad-bhaktaḥ saṅga-varjitaḥ | nirvairaḥ sarva-bhūteṣu yaḥ sa mām eti pāṇḍava",
      "My dear Arjuna, he who engages in My pure devotional service, free from the contaminations of fruitive activities and mental speculation, he who works for Me, who makes Me the supreme goal of his life, and who is friendly to every living being — he certainly comes to Me."
    );

    // Chapter 12 — key verses including guidance verse 12.13
    add(12, 13, "12.13",
      "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
      "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca | nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī",
      "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant — such a devotee of Mine is very dear to Me."
    );
    add(12, 15, "12.15",
      "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
      "yasmān nodvijate loko lokān nodvijate ca yaḥ | harṣāmarṣa-bhayodvegair mukto yaḥ sa ca me priyaḥ",
      "He by whom no one is put into difficulty and who is not disturbed by anyone, who is equipoised in happiness and distress, fear and anxiety, is very dear to Me."
    );
    add(12, 20, "12.20",
      "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते। श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः॥",
      "ye tu dharmyāmṛtam idaṁ yathoktaṁ paryupāsate | śraddadhānā mat-paramā bhaktās te'tīva me priyāḥ",
      "Those who follow this imperishable path of devotional service and who completely engage themselves with faith, making Me the supreme goal, are very, very dear to Me."
    );

    // Chapter 13 — key verses
    add(13, 2, "13.2",
      "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत। क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम॥",
      "kṣetra-jñaṁ cāpi māṁ viddhi sarva-kṣetreṣu bhārata | kṣetra-kṣetrajñayor jñānaṁ yat taj jñānaṁ mataṁ mama",
      "O scion of Bharata, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge. That is My opinion."
    );
    add(13, 28, "13.28",
      "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्। न हिनस्त्यात्मनात्मानं ततो याति परां गतिम्॥",
      "samaṁ paśyan hi sarvatra samavasthitam īśvaram | na hinasty ātmanātmānaṁ tato yāti parāṁ gatim",
      "One who sees the Supersoul equally present everywhere, in every living being, does not degrade himself by his mind. Thus he approaches the transcendental destination."
    );

    // Chapter 14 — key verses including guidance verse 14.5
    add(14, 5, "14.5",
      "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः। निबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥",
      "sattvaṁ rajas tama iti guṇāḥ prakṛti-sambhavāḥ | nibadhnanti mahā-bāho dehe dehinam avyayam",
      "Material nature consists of three modes — goodness, passion and ignorance. When the eternal living entity comes in contact with nature, O mighty-armed Arjuna, he becomes conditioned by these modes."
    );
    add(14, 26, "14.26",
      "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥",
      "māṁ ca yo'vyabhicāreṇa bhakti-yogena sevate | sa guṇān samatītyaitān brahma-bhūyāya kalpate",
      "One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman."
    );

    // Chapter 15 — key verses
    add(15, 7, "15.7",
      "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
      "mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ | manaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati",
      "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind."
    );
    add(15, 15, "15.15",
      "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
      "sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca | vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham",
      "I am seated in everyone's heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas."
    );

    // Chapter 16 — key verses including guidance verse 16.21
    add(16, 21, "16.21",
      "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
      "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ | kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
      "There are three gates leading to hell — lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul."
    );
    add(16, 24, "16.24",
      "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ। ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि॥",
      "tasmāc chāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau | jñātvā śāstra-vidhānoktaṁ karma kartum ihārhasi",
      "One should therefore understand what is duty and what is not duty by the regulations of the scriptures. Knowing such rules and regulations, one should act so that one may gradually be elevated."
    );

    // Chapter 17 — key verses including guidance verse 17.3
    add(17, 3, "17.3",
      "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत। श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
      "sattvānurūpā sarvasya śraddhā bhavati bhārata | śraddhā-mayo'yaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ",
      "O son of Bharata, according to one's existence under the various modes of nature, one evolves a particular kind of faith. The living being is said to be of a particular faith according to the modes he has acquired."
    );
    add(17, 20, "17.20",
      "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥",
      "dātavyam iti yad dānaṁ dīyate'nupakāriṇe | deśe kāle ca pātre ca tad dānaṁ sāttvikaṁ smṛtam",
      "That gift which is given out of duty, at the proper time and place, to a worthy person, and without expectation of return, is considered to be charity in the mode of goodness."
    );

    // Chapter 18 — key verses including guidance verse 18.58, 18.66
    add(18, 58, "18.58",
      "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि। अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि॥",
      "mac-cittaḥ sarva-durgāṇi mat-prasādāt tariṣyasi | atha cet tvam ahaṅkārān na śroṣyasi vinaṅkṣyasi",
      "If you become conscious of Me, you will pass over all the obstacles of conditioned life by My grace. If, however, you do not work in such consciousness but act through false ego, not hearing Me, you will be lost."
    );
    add(18, 63, "18.63",
      "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया। विमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥",
      "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā | vimṛśyaitad aśeṣeṇa yathecchasi tathā kuru",
      "Thus I have explained to you knowledge still more confidential. Deliberate on this fully, and then do what you wish to do."
    );
    add(18, 66, "18.66",
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja | ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
      "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
    );
    add(18, 73, "18.73",
      "अर्जुन उवाच। नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत। स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव॥",
      "arjuna uvāca | naṣṭo mohaḥ smṛtir labdhā tvat-prasādān mayācyuta | sthito'smi gata-sandehaḥ kariṣye vacanaṁ tava",
      "Arjuna said: My dear Krishna, O infallible one, my illusion is now gone. I have regained my memory by Your mercy. I am now firm and free from doubt and am prepared to act according to Your instructions."
    );
    add(18, 78, "18.78",
      "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
      "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ | tatra śrīr vijayo bhūtir dhruvā nītir matir mama",
      "Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion."
    );
  };

  public func initGuidanceMap(guidanceMap : Map.Map<Text, Types.GuidanceResult>) : () {
    let data : [(Text, Types.GuidanceResult)] = [
      // Original entries
      ("confusion",    { chapter = 2; verse = 47; keyword = "confusion";    guidanceText = "Act without anxiety over results. Confusion dissolves when you focus on your duty and surrender the outcome to the Divine." }),
      ("fear",         { chapter = 4; verse = 7;  keyword = "fear";         guidanceText = "Know that I am always present, descending whenever righteousness needs to be restored. Fear nothing — the Lord walks with you." }),
      ("anger",        { chapter = 16; verse = 21; keyword = "anger";       guidanceText = "Lust, anger, and greed are the three gates to self-destruction. Release anger; it clouds your judgment and harms your spirit." }),
      ("sad",          { chapter = 12; verse = 13; keyword = "sad";         guidanceText = "Cultivate compassion and equanimity. The beloved devotee grieves not, for they see the Lord equally in joy and sorrow." }),
      ("sadness",      { chapter = 12; verse = 13; keyword = "sadness";     guidanceText = "True peace comes when you neither hate nor cling. In sadness, turn your heart to the Divine — there you will find comfort." }),
      ("stress",       { chapter = 6; verse = 26; keyword = "stress";       guidanceText = "Whenever the restless mind wanders under stress, bring it gently back to the Self. Steady practice leads to inner stillness." }),
      ("ego",          { chapter = 18; verse = 58; keyword = "ego";         guidanceText = "When you surrender ego and act with God-consciousness, His grace carries you over every obstacle. Let go of the false self." }),
      ("attachment",   { chapter = 2; verse = 62; keyword = "attachment";   guidanceText = "Attachment breeds craving, then anger, then delusion. Observe your attachments calmly and gently release them." }),
      ("mind",         { chapter = 6; verse = 5;  keyword = "mind";         guidanceText = "The mind is your best friend or your worst enemy — it all depends on whether you rule it or it rules you." }),
      ("karma",        { chapter = 3; verse = 19; keyword = "karma";        guidanceText = "Perform every action as an offering, without attachment to reward. This is the secret of karma yoga — action that liberates." }),
      ("duty",         { chapter = 3; verse = 8;  keyword = "duty";         guidanceText = "Perform your prescribed duty. Action is always better than inaction. Your body itself cannot be sustained without righteous work." }),
      ("devotion",     { chapter = 9; verse = 22; keyword = "devotion";     guidanceText = "To those who worship Me with unwavering devotion, I personally carry what they need and preserve what they have." }),
      ("faith",        { chapter = 17; verse = 3; keyword = "faith";        guidanceText = "Faith shapes your very nature. Align your faith with sattva — with goodness, clarity, and the divine — and you shall be elevated." }),
      ("peace",        { chapter = 5; verse = 29; keyword = "peace";        guidanceText = "Know Me as the ultimate enjoyer, the Lord of all worlds, and the sincere friend of all beings — and attain lasting peace." }),
      ("death",        { chapter = 2; verse = 20; keyword = "death";        guidanceText = "The soul is never born nor does it die. It is eternal and undying. Grieve not for the body — the true Self is immortal." }),
      ("soul",         { chapter = 2; verse = 20; keyword = "soul";         guidanceText = "The soul is ancient, unborn, and imperishable. When the body is slain the soul is not slain — it is eternal." }),
      ("meditation",   { chapter = 6; verse = 10; keyword = "meditation";   guidanceText = "Practice meditation in solitude with a controlled mind, free from desire. Regular practice leads the yogi to the Supreme." }),
      ("renunciation", { chapter = 5; verse = 3;  keyword = "renunciation"; guidanceText = "True renunciation is neither hating nor desiring. Rise above dualities and you will be free from the bonds of action." }),
      ("nature",       { chapter = 7; verse = 4;  keyword = "nature";       guidanceText = "All of material nature — earth, water, fire, air, ether, mind, intelligence, and ego — flows from Me. Know Me as the source." }),
      ("guna",         { chapter = 14; verse = 5; keyword = "guna";         guidanceText = "The three gunas bind the soul to the body. Through devotion to Me, transcend all three and attain liberation." }),
      ("surrender",    { chapter = 18; verse = 66; keyword = "surrender";   guidanceText = "Surrender all dharmas and take refuge in Me alone. I will liberate you from all sins. Do not fear." }),
      // New entries
      ("grief",        { chapter = 2; verse = 11; keyword = "grief";        guidanceText = "The wise mourn neither the living nor the dead. The soul is eternal — what you grieve for was never truly lost." }),
      ("despair",      { chapter = 18; verse = 66; keyword = "despair";     guidanceText = "When all paths seem closed, surrender completely to the Divine. My grace will carry you through every darkness." }),
      ("jealousy",     { chapter = 12; verse = 13; keyword = "jealousy";    guidanceText = "A true devotee harbors no envy toward any being. Practice seeing the Divine equally in all — jealousy then fades." }),
      ("pride",        { chapter = 3; verse = 27; keyword = "pride";        guidanceText = "All actions are performed by the forces of nature. The ego that claims 'I am the doer' is the root of pride — release it." }),
      ("anxiety",      { chapter = 18; verse = 58; keyword = "anxiety";     guidanceText = "Fixing your mind on Me dissolves anxiety. By My grace, you shall overcome every obstacle on your path." }),
      ("loneliness",   { chapter = 10; verse = 20; keyword = "loneliness";  guidanceText = "I dwell in the heart of every being. You are never truly alone — the Divine Self resides within you always." }),
      ("doubt",        { chapter = 4; verse = 38; keyword = "doubt";        guidanceText = "Transcendental knowledge dispels all doubts. Seek wisdom sincerely — in time, the light of truth will shine within you." }),
      ("career",       { chapter = 3; verse = 8;  keyword = "career";       guidanceText = "Fulfill your prescribed duties with excellence and without attachment to praise or reward. That is the true path of achievement." }),
      ("money",        { chapter = 17; verse = 20; keyword = "money";       guidanceText = "Give in the right place, at the right time, to worthy causes. Wealth used in goodness creates merit and peace of mind." }),
      ("purpose",      { chapter = 4; verse = 7;  keyword = "purpose";      guidanceText = "You are here to uphold righteousness. Align your life with dharma and the universe itself will support your journey." }),
      ("dharma",       { chapter = 4; verse = 7;  keyword = "dharma";       guidanceText = "Whenever dharma declines I descend to restore it. Follow righteousness fearlessly — it is the highest purpose of life." }),
      ("detachment",   { chapter = 5; verse = 3;  keyword = "detachment";   guidanceText = "One who neither hates nor craves is in a state of eternal renunciation. Cultivate detachment and enjoy lasting freedom." }),
      ("wisdom",       { chapter = 4; verse = 38; keyword = "wisdom";       guidanceText = "There is nothing more purifying than wisdom. Through sincere practice it dawns naturally — illuminating all of life." }),
      ("discipline",   { chapter = 6; verse = 10; keyword = "discipline";   guidanceText = "The yogi disciplines body, mind, and breath in solitude. Regular, steady practice is the foundation of all spiritual growth." }),
      ("perseverance", { chapter = 11; verse = 33; keyword = "perseverance"; guidanceText = "Rise, be brave, and strive for glory. The outcome is already determined by the Divine — be the instrument, not the doubter." }),
      ("patience",     { chapter = 12; verse = 15; keyword = "patience";    guidanceText = "One who is undisturbed in happiness or distress, and who is patient and tolerant, is very dear to Me." }),
      ("gratitude",    { chapter = 9; verse = 26; keyword = "gratitude";    guidanceText = "Offer Me even a leaf, a flower, or a drop of water with love — and I accept it gladly. Gratitude opens the heart to grace." }),
      ("relationship", { chapter = 12; verse = 13; keyword = "relationship"; guidanceText = "Be a kind friend to all, free from possessiveness and ego. Relationships built on compassion and truth bring true joy." }),
      ("focus",        { chapter = 6; verse = 26; keyword = "focus";        guidanceText = "Each time the restless mind wanders, bring it gently back to the Self. Sustained focus is the hallmark of the true yogi." }),
    ];
    for ((k, v) in data.vals()) {
      guidanceMap.add(k, v);
    };
  };

  public func initMantras(mantras : Map.Map<Text, Types.MantraEntry>) : () {
    let data : [(Text, Types.MantraEntry)] = [
      // Protection
      ("maha-mrityunjaya", {
        id = "maha-mrityunjaya";
        name = "Maha Mrityunjaya Mantra";
        category = "Protection";
        text = "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥";
        meaning = "We worship the three-eyed Lord Shiva who is fragrant and nourishes all beings; may He liberate us from death for the sake of immortality, even as the cucumber is severed from its bondage.";
        benefit = "Bestows protection from death, disease, and all dangers; grants fearlessness and divine blessings of Lord Shiva.";
      }),
      ("durga-mantra", {
        id = "durga-mantra";
        name = "Durga Mantra";
        category = "Protection";
        text = "ॐ दुं दुर्गायै नमः";
        meaning = "I bow to Goddess Durga, the remover of all difficulties and protector of devotees.";
        benefit = "Invokes the protective power of Goddess Durga to remove obstacles, ward off negativity, and bestow courage.";
      }),
      ("sudarshana-mantra", {
        id = "sudarshana-mantra";
        name = "Sudarshana Mantra";
        category = "Protection";
        text = "ॐ सुदर्शनाय विद्महे महाज्वालाय धीमहि तन्नो चक्रः प्रचोदयात्";
        meaning = "We meditate upon the Sudarshana Chakra of Vishnu, the radiant discus of great brilliance; may it inspire and guide us.";
        benefit = "Provides divine protection, removes evil, and creates a shield of spiritual light around the devotee.";
      }),
      // Education
      ("saraswati-vandana", {
        id = "saraswati-vandana";
        name = "Saraswati Vandana";
        category = "Education";
        text = "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता। या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥ या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता। सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥";
        meaning = "She who is white as jasmine, moon, snow and pearl, draped in white, holding the veena, seated on a white lotus — worshipped by Brahma, Vishnu and Shiva — may that Goddess Saraswati protect me and remove all ignorance.";
        benefit = "Blesses the devotee with intelligence, wisdom, eloquence, creativity, and mastery in arts, music, and learning.";
      }),
      ("gayatri-mantra", {
        id = "gayatri-mantra";
        name = "Gayatri Mantra";
        category = "Education";
        text = "ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥";
        meaning = "We meditate on the glory of the Creator who created the universe, who is fit to be worshipped as the source of all knowledge; may He inspire and enlighten our intellect.";
        benefit = "The most powerful Vedic mantra — purifies the mind, awakens spiritual intelligence, and removes ignorance and sin.";
      }),
      ("medha-mantra", {
        id = "medha-mantra";
        name = "Medha Mantra";
        category = "Education";
        text = "ॐ मेधा देवी जुषमाणा न आगाद्विश्वाची भद्रा सुमनस्यमाना। त्वया जुष्टा नुदमाना दुरुक्तान् बृहद्वदेम विदथे सुवीराः॥";
        meaning = "May the Goddess of Intelligence come to us from all directions, bestowing blessings; purified by Her, may we speak great wisdom and be heroic in the assembly of the wise.";
        benefit = "Sharpens memory, concentration, and mental clarity; helps students excel in studies and learning.";
      }),
      // Prosperity
      ("lakshmi-mantra", {
        id = "lakshmi-mantra";
        name = "Mahalakshmi Mantra";
        category = "Prosperity";
        text = "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद। ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥";
        meaning = "Om, I bow to Goddess Mahalakshmi who dwells in the lotus, who is the embodiment of beauty, abundance and grace. Please bestow your blessings.";
        benefit = "Attracts wealth, prosperity, abundance, and good fortune; removes financial obstacles and fills life with grace.";
      }),
      ("kubera-mantra", {
        id = "kubera-mantra";
        name = "Kubera Mantra";
        category = "Prosperity";
        text = "ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा।";
        meaning = "Om, to Kubera, lord of wealth and guardian of treasures — please grant me abundance of wealth and grain.";
        benefit = "Brings material wealth, financial stability, and abundance; invokes blessings of the divine treasurer Kubera.";
      }),
      // Stress Relief
      ("om-shanti-mantra", {
        id = "om-shanti-mantra";
        name = "Om Shanti Mantra";
        category = "Stress Relief";
        text = "ॐ शान्तिः शान्तिः शान्तिः। ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु। मा कश्चिद्दुःखभाग्भवेत्॥";
        meaning = "Om peace, peace, peace. May all beings be happy; may all beings be free from illness; may all beings see auspiciousness; may no one suffer.";
        benefit = "Instantly calms the mind and nervous system; dissolves anxiety, mental stress, and emotional turbulence.";
      }),
      ("shiva-mantra", {
        id = "shiva-mantra";
        name = "Om Namah Shivaya";
        category = "Stress Relief";
        text = "ॐ नमः शिवाय";
        meaning = "I bow to Lord Shiva — the auspicious one, the destroyer of ignorance, the pure consciousness within all beings.";
        benefit = "Purifies the mind, destroys ego and negativity, brings deep inner peace, and connects the devotee with universal consciousness.";
      }),
      ("hanuman-mantra", {
        id = "hanuman-mantra";
        name = "Hanuman Mantra";
        category = "Stress Relief";
        text = "ॐ हं हनुमते रुद्रात्मकाय हुं फट्";
        meaning = "Om, salutations to Hanuman, the embodiment of Rudra's power — remove all obstacles and grant strength.";
        benefit = "Gives tremendous courage, strength, and willpower; removes fear, obstacles, and all forms of stress and negativity.";
      }),
      ("vishnu-mantra", {
        id = "vishnu-mantra";
        name = "Vishnu Mantra";
        category = "Stress Relief";
        text = "ॐ नमो भगवते वासुदेवाय";
        meaning = "Om, I bow to Lord Vasudeva (Krishna/Vishnu), the indwelling Supreme Being.";
        benefit = "Brings peace, clarity, and divine protection; dissolves mental restlessness and aligns the devotee with universal harmony.";
      }),
      // Additional
      ("ganesh-mantra", {
        id = "ganesh-mantra";
        name = "Ganesha Mantra";
        category = "Protection";
        text = "ॐ गं गणपतये नमः";
        meaning = "Om, I bow to Lord Ganesha, the remover of obstacles and lord of all beginnings.";
        benefit = "Removes obstacles from all endeavors, brings success, wisdom, and auspiciousness to new beginnings.";
      }),
      ("krishna-mantra", {
        id = "krishna-mantra";
        name = "Krishna Mantra";
        category = "Stress Relief";
        text = "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥";
        meaning = "O Lord Krishna, O Lord Rama — I offer myself to You; please remove the veil of illusion and fill my heart with divine love.";
        benefit = "Purifies the heart and mind, cultivates deep devotion, removes all anxieties, and fills the devotee with divine bliss.";
      }),
      ("ram-mantra", {
        id = "ram-mantra";
        name = "Ram Naam";
        category = "Protection";
        text = "श्री राम जय राम जय जय राम";
        meaning = "Victory to Lord Rama, the embodiment of dharma, righteousness, and divine compassion.";
        benefit = "Bestows courage, righteousness, and divine blessings; purifies the soul and removes accumulated karma.";
      }),
      // Sacred 18 — three additional mantras to reach the sacred count of 18
      ("saraswati-beej", {
        id = "saraswati-beej";
        name = "Saraswati Beej Mantra";
        category = "Education";
        text = "ॐ ऐं सरस्वत्यै नमः";
        meaning = "Om, I bow to the seed syllable of Goddess Saraswati — Aim — the primordial sound of creative intelligence and divine wisdom.";
        benefit = "Activates the intellectual faculty, enhances memory and learning speed, removes mental blocks, and bestows the power of eloquent speech.";
      }),
      ("prana-pratishtha", {
        id = "prana-pratishtha";
        name = "Prana Pratishtha Mantra";
        category = "Stress Relief";
        text = "ॐ असुनीते पुनरस्मासु चक्षुः पुनः प्राणमिह नो धेहि भोगम्। ज्योक् पश्येम सूर्यमुच्चरन्तमनुमते मृडयानस्वस्ति॥";
        meaning = "O Asuneeti (divine power of life), return our sight, restore the vital breath to us here; may we long behold the rising sun. O gracious one, grant us well-being and bliss.";
        benefit = "Restores prana (vital life force), heals the nervous system, removes deep fatigue and emotional depletion, and revives the spirit with divine energy.";
      }),
      ("vishnu-sahasra-beej", {
        id = "vishnu-sahasra-beej";
        name = "Vishnu Sahasranama Beej";
        category = "Prosperity";
        text = "ॐ नमो भगवते श्री वासुदेवाय। सर्वं विष्णुमयं जगत्॥";
        meaning = "Om, I bow to Lord Vasudeva, the divine Bhagavan. The entire universe is pervaded by Vishnu — there is nothing that is not He.";
        benefit = "Draws divine abundance, removes obstacles to success, bestows clarity of purpose, and aligns all material and spiritual pursuits with the supreme cosmic will.";
      }),
    ];
    for ((k, v) in data.vals()) {
      mantras.add(k, v);
    };
  };

  public func initFestivals(festivals : Map.Map<Text, Types.Festival>) : () {
    let data : [(Text, Types.Festival)] = [
      ("janmashtami", {
        name = "Janmashtami";
        dateStr = "08/16/2025";
        meaning = "The divine birthday of Lord Krishna, celebrated with fasting, midnight worship, and devotional singing as the Supreme Being descends to restore dharma.";
        mantraName = "Krishna Mantra";
        recommendedVerse = "4.7";
      }),
      ("diwali", {
        name = "Diwali";
        dateStr = "10/20/2025";
        meaning = "The festival of lights symbolizing the victory of light over darkness, knowledge over ignorance, and the return of Lord Rama after defeating evil.";
        mantraName = "Mahalakshmi Mantra";
        recommendedVerse = "16.21";
      }),
      ("holi", {
        name = "Holi";
        dateStr = "03/14/2026";
        meaning = "The festival of colors celebrating the triumph of devotion over arrogance, the victory of Prahlada's bhakti, and the arrival of spring with renewed life.";
        mantraName = "Om Namah Shivaya";
        recommendedVerse = "9.26";
      }),
      ("navratri", {
        name = "Navratri";
        dateStr = "09/22/2025";
        meaning = "Nine sacred nights worshipping the nine forms of Goddess Durga — a time of fasting, prayer, and invoking the divine feminine energy to cleanse and empower.";
        mantraName = "Durga Mantra";
        recommendedVerse = "7.19";
      }),
      ("ram-navami", {
        name = "Ram Navami";
        dateStr = "04/06/2026";
        meaning = "The auspicious birthday of Lord Rama, the ideal king and embodiment of dharma, celebrated with recitation of the Ramayana and devotional worship.";
        mantraName = "Ram Naam";
        recommendedVerse = "4.8";
      }),
      ("mahashivratri", {
        name = "Mahashivratri";
        dateStr = "02/26/2026";
        meaning = "The great night of Lord Shiva — a night of intense worship, fasting, and meditation when Shiva's blessings are most accessible to earnest seekers.";
        mantraName = "Om Namah Shivaya";
        recommendedVerse = "8.5";
      }),
      ("ganesh-chaturthi", {
        name = "Ganesh Chaturthi";
        dateStr = "08/27/2025";
        meaning = "The birthday of Lord Ganesha, the remover of obstacles — celebrated with grand installations of clay idols, devotional offerings, and festive singing.";
        mantraName = "Ganesha Mantra";
        recommendedVerse = "3.8";
      }),
      ("hanuman-jayanti", {
        name = "Hanuman Jayanti";
        dateStr = "04/12/2026";
        meaning = "The birthday of Lord Hanuman, the supreme devotee and embodiment of strength, courage, and selfless service to Lord Rama.";
        mantraName = "Hanuman Mantra";
        recommendedVerse = "11.55";
      }),
      ("ekadashi", {
        name = "Ekadashi";
        dateStr = "01/10/2026";
        meaning = "The sacred eleventh day of each lunar fortnight, observed with fasting and prayer dedicated to Lord Vishnu — a powerful day for spiritual purification.";
        mantraName = "Vishnu Mantra";
        recommendedVerse = "9.22";
      }),
      ("gita-jayanti", {
        name = "Gita Jayanti";
        dateStr = "12/01/2025";
        meaning = "The sacred day commemorating Lord Krishna's divine discourse to Arjuna on the Kurukshetra battlefield — the birth of the eternal Bhagavad Gita.";
        mantraName = "Krishna Mantra";
        recommendedVerse = "18.66";
      }),
      ("guru-purnima", {
        name = "Guru Purnima";
        dateStr = "07/10/2025";
        meaning = "The full moon of reverence — dedicated to honoring one's spiritual teacher and the lineage of gurus who have transmitted wisdom since time immemorial.";
        mantraName = "Gayatri Mantra";
        recommendedVerse = "4.38";
      }),
      ("karthigai", {
        name = "Karthigai Deepam";
        dateStr = "11/27/2025";
        meaning = "The festival of sacred lamps dedicated to Lord Murugan and Lord Shiva — symbolizing the column of infinite light and the removal of spiritual darkness.";
        mantraName = "Om Namah Shivaya";
        recommendedVerse = "10.20";
      }),
    ];
    for ((k, v) in data.vals()) {
      festivals.add(k, v);
    };
  };

  public func initDailyChallenges(challenges : Map.Map<Text, Types.DailyChallenge>) : () {
    // 7-day rotating challenges keyed by last character of date string or day code
    let data : [(Text, Types.DailyChallenge)] = [
      ("1", { date = "Day 1"; task = "Read 3 verses from Chapter 2 and reflect on the nature of the eternal soul."; points = 30; action = "read" }),
      ("2", { date = "Day 2"; task = "Write 27 repetitions of 'Hare Krishna' or any mantra of your choice mindfully."; points = 50; action = "write" }),
      ("3", { date = "Day 3"; task = "Listen to the Gayatri Mantra 11 times with full attention and devotion."; points = 20; action = "listen" }),
      ("4", { date = "Day 4"; task = "Read Chapter 12 (Bhakti Yoga) completely and contemplate on the qualities of a true devotee."; points = 40; action = "read" }),
      ("5", { date = "Day 5"; task = "Complete one full mala (108 beads) of japa with the Om Namah Shivaya mantra."; points = 80; action = "japa" }),
      ("6", { date = "Day 6"; task = "Ask Krishna a question about something troubling you and meditate on the verse given."; points = 25; action = "guidance" }),
      ("7", { date = "Day 7"; task = "Write the verse 2.47 in Sanskrit 3 times and memorize its meaning."; points = 60; action = "write" }),
      ("0", { date = "Day 7"; task = "Reflect on one quality of a devotee from Chapter 12 and practice it throughout today."; points = 35; action = "read" }),
    ];
    for ((k, v) in data.vals()) {
      challenges.add(k, v);
    };
  };
};
