import Types "../types/life-journey";
import Map "mo:core/Map";

/// Domain logic for Life Journey — Garbha Sanskar (40-week pregnancy),
/// 16 Sanskaaram, Antim Yatra (last rites), and Shodashopachara (16-step worship).
/// All functions are stateless — state is injected by main.mo via mixins.
module {

  // ═══════════════════════════════════════════════════════════════════════════
  // GARBHA SANSKAR (280-day week-by-week pregnancy guidance)
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return all 40 pregnancy weeks in ascending week order.
  public func listPregnancyWeeks(
    weeks : Map.Map<Nat, Types.PregnancyWeek>,
  ) : [Types.PregnancyWeek] {
    weeks.entries().map(func((_, w) : (Nat, Types.PregnancyWeek)) : Types.PregnancyWeek { w }).toArray()
  };

  /// Return a single pregnancy week by its number (1-40).
  public func getPregnancyWeek(
    weeks : Map.Map<Nat, Types.PregnancyWeek>,
    weekNumber : Nat,
  ) : ?Types.PregnancyWeek {
    weeks.get(weekNumber)
  };

  /// Seed all 40 weeks of Garbha Sanskar guidance, organized by trimester.
  /// Each week carries spiritual practice, mantra, diet, and teachings for
  /// the unborn child. Sources cited per week.
  public func initPregnancyWeeks(weeks : Map.Map<Nat, Types.PregnancyWeek>) : () {
    // ─── Trimester 1 (weeks 1-13): Foundation & Formation ─────────────────────
    weeks.add(1, {
      weekNumber = 1; trimester = 1;
      title = "Sankalpa — The Sacred Intention";
      development = "The fertilized egg (zygote) begins its journey through the fallopian tube, dividing into a blastocyst that will implant in the uterine wall. The divine spark of life is now lit.";
      saadhna = "Sit in silence each morning. Visualize the divine light entering your womb. Chant the Garbha Raksha Mantra. Read Srimad Bhagavatam 10.2 — Krishna's birth narrative. Maintain complete sattvic diet.";
      mantra = "ॐ गर्भ रक्षायै नमः — Om Garbha Rakshayai Namah";
      garbhaSanskarTip = "Your thoughts shape the child's samskaras. Begin each day with gratitude. Avoid anger, fear, and negative conversations — the unborn absorbs every vibration.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "10.2.18";
      sourceChapter = "Canto 10, Chapter 2";
    });
    weeks.add(2, {
      weekNumber = 2; trimester = 1;
      title = "Garbhadhana Samskara — Consecration of Conception";
      development = "The blastocyst implants in the uterine lining. The placenta begins to form. The foundation of physical life is now anchored.";
      saadhna = "Perform Garbhadhana Samskara mentally — offer this child to the Divine. Light a ghee lamp morning and evening. Chant the Purusha Sukta (Rig Veda 10.90). Eat warm, nourishing foods — milk, ghee, dates, almonds.";
      mantra = "ॐ पुरुषाय नमः — Om Purushaya Namah (Purusha Sukta)";
      garbhaSanskarTip = "The first two weeks set the child's constitutional foundation. Avoid travel, strenuous activity, and stress. Walk gently in nature. Listen to soft devotional music.";
      sourceGranth = "Rig Veda";
      sourceVerse = "10.90.1";
      sourceChapter = "Mandala 10, Sukta 90";
    });
    weeks.add(3, {
      weekNumber = 3; trimester = 1;
      title = "Pumsavana — Invoking the Divine Soul";
      development = "The embryo is now the size of a poppy seed. The neural tube — future brain and spinal cord — begins to form. The heart begins as a tiny tube.";
      saadhna = "Practice Pumsavana Samskara — visualize a radiant, healthy, dharmic soul entering the womb. Chant the Santana Gopala Mantra. Read Garbha Upanishad. Eat foods rich in folic acid — leafy greens, lentils, citrus.";
      mantra = "ॐ श्रीं ह्रीं क्लीं वाग्भवायै नमः — Santana Gopala Mantra";
      garbhaSanskarTip = "The soul's samskaras from past lives begin to interact with the new body. Pray for a virtuous soul to take birth. Keep the home filled with sacred sounds — Veda chanting, bhajans.";
      sourceGranth = "Garbha Upanishad";
      sourceVerse = "1.1";
      sourceChapter = "Chapter 1";
    });
    weeks.add(4, {
      weekNumber = 4; trimester = 1;
      title = "Simantonnayana — Parting the Hair of Joy";
      development = "The embryo is now an embryo proper. The heart begins to beat. Limb buds appear. The neural tube closes. The foundation of the nervous system is laid.";
      saadhna = "Perform Simantonnayana Samskara — the parting of the hair, symbolizing the mother's mind becoming calm and focused. Husband parts wife's hair with three stalks of kusha grass, chanting. Read Yoga Vasishta Sara for mental clarity.";
      mantra = "ॐ श्री गर्भ देवतायै नमः — Om Shri Garbha Devatayai Namah";
      garbhaSanskarTip = "The mother's emotional state directly shapes the child's nervous system. Practice mauna (silence) for one hour daily. Avoid arguments. The husband should be especially caring and supportive.";
      sourceGranth = "Ashvalayana Grihya Sutra";
      sourceVerse = "1.14.1";
      sourceChapter = "Book 1, Chapter 14";
    });
    weeks.add(5, {
      weekNumber = 5; trimester = 1;
      title = "Hridaya — The Heart Begins to Beat";
      development = "The heart now beats rhythmically. The brain forms into five regions. Facial features begin to appear. The embryo is the size of a sesame seed.";
      saadhna = "Place your hands on your womb and chant the Gayatri Mantra 108 times. The vibration reaches the child's forming heart. Read Bhagavad Gita Chapter 15 — Purushottama Yoga. Drink warm milk with saffron and cardamom.";
      mantra = "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् — Gayatri Mantra";
      garbhaSanskarTip = "The heart is the seat of emotion in Vedic tradition. Fill your heart with love, gratitude, and devotion. The child's emotional foundation is being laid now.";
      sourceGranth = "Rig Veda";
      sourceVerse = "3.62.10";
      sourceChapter = "Mandala 3, Sukta 62";
    });
    weeks.add(6, {
      weekNumber = 6; trimester = 1;
      title = "Indriya — The Senses Begin to Form";
      development = "Eyes, ears, nose, and mouth begin to form. The neural tube has closed. The embryo can now respond to stimuli. Limb buds become paddle-shaped.";
      saadhna = "Listen to Vedic chanting — especially Sama Veda, the science of sound and vibration. Avoid loud noises, harsh music, and negative speech. Read Chandogya Upanishad on the power of Om. Eat fresh fruits and cooked vegetables.";
      mantra = "ॐ ऐं ह्रीं श्रीं — Om Aim Hrim Shrim (Bija Mantras for the senses)";
      garbhaSanskarTip = "The five senses (jnanendriyas) are forming. Expose the child to pure sounds, beautiful sights, fragrant flowers, and sattvic tastes. Avoid horror films, gossip, and impure environments.";
      sourceGranth = "Chandogya Upanishad";
      sourceVerse = "1.1.1";
      sourceChapter = "Chapter 1, Section 1";
    });
    weeks.add(7, {
      weekNumber = 7; trimester = 1;
      title = "Prana — The Life Force Flows";
      development = "The embryo is now a fetus. All essential organs have begun to form. The umbilical cord is fully functional, carrying prana (life force) from mother to child.";
      saadhna = "Practice Pranayama — gentle alternate nostril breathing (Nadi Shodhana) for 10 minutes morning and evening. This calms the mind and oxygenates the blood. Read Prashna Upanishad on the five pranas. Eat iron-rich foods.";
      mantra = "ॐ प्राणाय नमः — Om Pranaya Namah";
      garbhaSanskarTip = "Your breath is the child's breath. Slow, deep, rhythmic breathing calms the fetal nervous system. Avoid holding breath or rapid breathing exercises. Walk in fresh air daily.";
      sourceGranth = "Prashna Upanishad";
      sourceVerse = "2.1";
      sourceChapter = "Question 2";
    });
    weeks.add(8, {
      weekNumber = 8; trimester = 1;
      title = "Vak — The Power of Speech";
      development = "The fetus is now the size of a kidney bean. Fingers and toes are webbed. The face is recognizably human. The vocal cords begin to form.";
      saadhna = "Speak only sweet, truthful, and uplifting words. Read aloud from the Ramayana or Bhagavata. The child hears the rhythm of your voice. Chant the Saraswati Mantra. Avoid criticism, complaints, and harsh language.";
      mantra = "ॐ ऐं सरस्वत्यै नमः — Om Aim Saraswatyai Namah";
      garbhaSanskarTip = "Vak (speech) is a divine power. The words you speak now become the child's inner voice. Read sacred texts aloud daily. Sing lullabies and bhajans. The fetus responds to sound vibration.";
      sourceGranth = "Rig Veda";
      sourceVerse = "10.71.1";
      sourceChapter = "Mandala 10, Sukta 71 (Vak Sukta)";
    });
    weeks.add(9, {
      weekNumber = 9; trimester = 1;
      title = "Smriti — Memory and Samskara";
      development = "The fetus can now move its limbs. The brain is growing rapidly. The first synapses form. The foundation of memory is being laid.";
      saadhna = "Read the same sacred passage daily at the same time — this creates a rhythmic samskara in the child's consciousness. Memorize one shloka per week. Read Yoga Vasishta on the nature of mind. Eat walnuts and ghee for brain development.";
      mantra = "ॐ श्री गुरुभ्यो नमः — Om Shri Gurubhyo Namah";
      garbhaSanskarTip = "Smriti (memory) is the bridge between past lives and present. The child carries samskaras from previous births. Reinforce positive samskaras through daily repetition of sacred practices.";
      sourceGranth = "Yoga Vasishta";
      sourceVerse = "2.3.1";
      sourceChapter = "Book 2, Chapter 3";
    });
    weeks.add(10, {
      weekNumber = 10; trimester = 1;
      title = "Vishwa — The Universe Within";
      development = "The fetus is the size of a strawberry. All vital organs are formed. The skeleton begins to ossify. The fetus can make facial expressions.";
      saadhna = "Meditate on the Vishwa Rupa — the cosmic form of the Divine (Bhagavad Gita Chapter 11). Visualize the entire universe within your womb. Read Ishavasya Upanishad. Eat a rainbow of vegetables.";
      mantra = "ॐ विश्वाय नमः — Om Vishvaya Namah";
      garbhaSanskarTip = "The child is a microcosm of the macrocosm. Treat the womb as a sacred universe. Avoid crowded, impure places. Maintain a clean, beautiful, and sacred home environment.";
      sourceGranth = "Isha Upanishad";
      sourceVerse = "1";
      sourceChapter = "Verse 1";
    });
    weeks.add(11, {
      weekNumber = 11; trimester = 1;
      title = "Tejas — Inner Radiance";
      development = "The fetus is now the size of a fig. Hair follicles form. Nail beds develop. The liver produces red blood cells. The fetus practices breathing movements.";
      saadhna = "Practice Trataka — gentle candle-gazing meditation for 5 minutes. This develops the child's tejas (inner radiance). Read Aditya Hridayam. Sunbathe gently in the morning. Eat orange and yellow foods — carrots, pumpkin, mango.";
      mantra = "ॐ आदित्याय नमः — Om Adityaya Namah";
      garbhaSanskarTip = "Tejas is the subtle fire of intelligence and digestion. Build it through sunlight, sattvic food, and pure thoughts. Avoid excessive sleep and lethargy. Stay active and engaged in creative pursuits.";
      sourceGranth = "Ramayana (Yuddha Kanda)";
      sourceVerse = "105";
      sourceChapter = "Aditya Hridayam";
    });
    weeks.add(12, {
      weekNumber = 12; trimester = 1;
      title = "Antahkarana — The Inner Instrument";
      development = "The fetus is the size of a lime. Reflexes develop. The fetus can open and close its fingers. The face has a distinct profile. The first trimester is complete.";
      saadhna = "Meditate on the Antahkarana — the inner instrument of mind (manas), intellect (buddhi), and ego (ahankara). Read Katha Upanishad on the chariot analogy. Practice self-inquiry. Eat cooked, warm, easily digestible foods.";
      mantra = "ॐ नमः शिवाय — Om Namah Shivaya";
      garbhaSanskarTip = "The antahkarana is being shaped. The child's future personality, intelligence, and self-awareness are being programmed. Fill your mind with noble thoughts. Read biographies of saints and sages.";
      sourceGranth = "Katha Upanishad";
      sourceVerse = "1.3.3";
      sourceChapter = "Chapter 1, Valli 3";
    });
    weeks.add(13, {
      weekNumber = 13; trimester = 1;
      title = "Srishti — The First Trimester Complete";
      development = "The fetus is the size of a lemon. Vocal cords form. The fetus can make sucking motions. The placenta is fully formed and functioning. The foundation is laid.";
      saadhna = "Celebrate the completion of the first trimester with a small puja. Offer gratitude to the Divine. Read Markandeya Purana — the story of how devotion protects the unborn. Begin the second trimester with renewed commitment.";
      mantra = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya";
      garbhaSanskarTip = "The most critical period is over. The child's physical foundation is set. Now begins the period of growth and refinement. Continue all practices with joy and devotion.";
      sourceGranth = "Markandeya Purana";
      sourceVerse = "Devi Mahatmya 1.1";
      sourceChapter = "Chapter 1";
    });

    // ─── Trimester 2 (weeks 14-26): Growth & Awakening ───────────────────────
    weeks.add(14, {
      weekNumber = 14; trimester = 2;
      title = "Sparsha — The Sense of Touch";
      development = "The fetus is the size of a peach. It can now feel touch on its face. The arms and legs are proportionate. The liver and spleen begin to function.";
      saadhna = "Gently massage your womb with warm sesame oil daily. The child feels your loving touch. Read Taittiriya Upanishad on the sheaths of existence. Practice loving-kindness meditation (Maitri Bhavana).";
      mantra = "ॐ मैत्रेयै नमः — Om Maitreyai Namah";
      garbhaSanskarTip = "Touch is the first sense to develop. Bond with your child through gentle touch. The father should also place his hands on the womb and speak to the child daily.";
      sourceGranth = "Taittiriya Upanishad";
      sourceVerse = "2.1.1";
      sourceChapter = "Chapter 2, Anuvaka 1";
    });
    weeks.add(15, {
      weekNumber = 15; trimester = 2;
      title = "Shruti — Hearing the Sacred Sounds";
      development = "The fetus is the size of an apple. The ears are developed enough to hear muffled sounds. The fetus can hear the mother's heartbeat, digestion, and voice.";
      saadhna = "Begin playing Vedic chanting softly near your womb — especially Yajur Veda. Read aloud from the Bhagavad Gita daily. The child is now a listener (shruti means 'that which is heard'). Avoid loud or harsh sounds.";
      mantra = "ॐ नमः शिवाय — Om Namah Shivaya (Panchakshara)";
      garbhaSanskarTip = "The child can now hear. This is the most powerful period for auditory samskaras. Play the same mantra or shloka daily. The child will recognize it after birth and be calmed by it.";
      sourceGranth = "Yajur Veda";
      sourceVerse = "Shri Rudram (Taittiriya Samhita 4.5)";
      sourceChapter = "Chapter 4, Anuvaka 5";
    });
    weeks.add(16, {
      weekNumber = 16; trimester = 2;
      title = "Nartana — The Divine Dance";
      development = "The fetus is the size of an avocado. You may feel the first fluttering movements (quickening). The fetus can now move its limbs, swallow, and hiccup.";
      saadhna = "Dance gently to devotional music — the child feels your joy. Read the story of Krishna's dance (Rasa Lila) from Srimad Bhagavatam 10.33. Practice gentle yoga asanas suitable for pregnancy. Eat protein-rich foods.";
      mantra = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya";
      garbhaSanskarTip = "Movement is life. The child's first movements are sacred. Respond to them with love. Place your hands on the womb when the child moves and chant softly.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "10.33.1";
      sourceChapter = "Canto 10, Chapter 33";
    });
    weeks.add(17, {
      weekNumber = 17; trimester = 2;
      title = "Medha — The Power of Intelligence";
      development = "The fetus is the size of a pear. The brain is growing rapidly. Neural connections form at an astonishing rate. The skeleton continues to harden.";
      saadhna = "Read challenging philosophical texts — Bhagavad Gita Chapter 4 (Jnana Yoga). Solve puzzles. Engage in intellectual discussions. The child's medha (intelligence) is shaped by your mental activity. Eat almonds and ghee.";
      mantra = "ॐ ऐं ह्रीं श्रीं वाग्भवायै नमः — Om Aim Hrim Shrim Vagbhavayai Namah";
      garbhaSanskarTip = "Medha is the power of comprehension and retention. Stimulate your own intellect and the child's will follow. Avoid mindless entertainment. Read, contemplate, and discuss sacred knowledge.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "4.34";
      sourceChapter = "Chapter 4, Verse 34";
    });
    weeks.add(18, {
      weekNumber = 18; trimester = 2;
      title = "Svapna — The World of Dreams";
      development = "The fetus is the size of a bell pepper. The fetus now sleeps and wakes. It may dream. The retinas can detect light through the closed eyelids.";
      saadhna = "Before sleep, visualize a beautiful, divine form — Krishna, Rama, Devi, or Shiva. The child dreams what you dream. Read Mandukya Upanishad on the four states of consciousness. Sleep on the left side. Avoid disturbing media before bed.";
      mantra = "ॐ शान्तिः शान्तिः शान्तिः — Om Shantih Shantih Shantih";
      garbhaSanskarTip = "The child's sleep patterns are forming. Maintain a regular sleep routine. Sleep early, wake early. The hour before sleep is sacred — fill it with peaceful thoughts and prayer.";
      sourceGranth = "Mandukya Upanishad";
      sourceVerse = "1";
      sourceChapter = "Verse 1";
    });
    weeks.add(19, {
      weekNumber = 19; trimester = 2;
      title = "Vernix — The Sacred Coating";
      development = "The fetus is the size of a mango. A protective coating called vernix covers the skin. The fetus is now covered in fine hair called lanugo.";
      saadhna = "Apply sandalwood paste to your forehead daily — the cooling, protective quality mirrors the vernix protecting the child. Read Atharva Veda for protective mantras. Practice self-massage with warm oil (Abhyanga).";
      mantra = "ॐ अप ज्योतिरसो अप ज्योतिरसः — Atharva Veda protection mantra";
      garbhaSanskarTip = "The body protects itself naturally. Trust the wisdom of the body. Avoid chemical products on your skin. Use natural, Ayurvedic products. The mother's body is the child's first temple.";
      sourceGranth = "Atharva Veda";
      sourceVerse = "19.34";
      sourceChapter = "Book 19, Sukta 34";
    });
    weeks.add(20, {
      weekNumber = 20; trimester = 2;
      title = "Madhya — The Midpoint of Pregnancy";
      development = "The fetus is the size of a banana. Halfway through the pregnancy. The fetus can now hear clearly. You can feel definite kicks. The eyebrows and eyelashes form.";
      saadhna = "Celebrate the midpoint. Perform a small Simantonnayana ceremony if not done earlier — parting the hair, symbolizing the mind's focus. Read the entire Bhagavad Gita this week. The child is now fully aware of sound.";
      mantra = "ॐ श्री गणेशाय नमः — Om Shri Ganeshaya Namah";
      garbhaSanskarTip = "Half the journey is complete. The child is now a conscious listener. Speak to the child directly — 'You are loved, you are divine, you are welcome.' The child understands the feeling.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "9.9";
      sourceChapter = "Chapter 9, Verse 9";
    });
    weeks.add(21, {
      weekNumber = 21; trimester = 2;
      title = "Rasa — The Essence of Taste";
      development = "The fetus is the size of a carrot. The taste buds are fully developed. The fetus can taste the amniotic fluid, which reflects the mother's diet.";
      saadhna = "Eat a variety of sattvic, flavorful foods — the child is learning to taste. Sweet, sour, salty, pungent, bitter, astringent — all six rasas should be experienced. Read Charaka Samhita on diet. Avoid excessively spicy, oily, or processed foods.";
      mantra = "ॐ अन्नपूर्णायै नमः — Om Annapurnayai Namah";
      garbhaSanskarTip = "The child's food preferences are being shaped now. Eat what you want the child to love — fruits, vegetables, grains, milk. The child remembers these tastes. Offer food to the Divine before eating.";
      sourceGranth = "Charaka Samhita";
      sourceVerse = "Sutrasthana 27.3";
      sourceChapter = "Sutrasthana, Chapter 27";
    });
    weeks.add(22, {
      weekNumber = 22; trimester = 2;
      title = "Gandha — The Sense of Smell";
      development = "The fetus is the size of a papaya. The olfactory system develops. The fetus can smell the amniotic fluid. The sense of smell is the most primitive and powerful sense.";
      saadhna = "Surround yourself with pure fragrances — sandalwood, rose, jasmine, tulsi. Avoid chemical perfumes and strong odors. Read about the role of fragrance in worship (Gandha in Shodashopachara). Light incense during puja.";
      mantra = "ॐ गन्धाय नमः — Om Gandhaya Namah";
      garbhaSanskarTip = "Smell is the sense most linked to memory. The fragrances you surround yourself with now will be the child's first memories. Keep fresh flowers in the home. Use natural essential oils.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "9.2";
      sourceChapter = "Chapter 9, Verse 2 (Raja Vidya Yoga)";
    });
    weeks.add(23, {
      weekNumber = 23; trimester = 2;
      title = "Lila — The Divine Play";
      development = "The fetus is the size of a grapefruit. It can now hear loud sounds from outside. The bones are hardening. The fetus practices breathing by inhaling amniotic fluid.";
      saadhna = "Read the stories of Krishna's childhood (Bala Lila) from Srimad Bhagavatam 10. The child is now a participant in your life. Take the child to temples, satsangs, and natural settings. The child absorbs the atmosphere.";
      mantra = "ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya";
      garbhaSanskarTip = "Lila is divine play. Approach pregnancy with joy, not anxiety. The child feels your emotional state. Laugh, sing, dance, and celebrate this sacred time. The child will inherit your joy.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "10.8.1";
      sourceChapter = "Canto 10, Chapter 8";
    });
    weeks.add(24, {
      weekNumber = 24; trimester = 2;
      title = "Jiva — The Individual Soul";
      development = "The fetus is the size of an ear of corn. It has reached the age of viability — if born now, with medical care, it could survive. The lungs are developing rapidly.";
      saadhna = "Meditate on the nature of the jiva (individual soul) — eternal, conscious, blissful. Read Bhagavad Gita 2.20 — the soul is never born, never dies. The child is not just a body; it is an eternal soul on a journey.";
      mantra = "ॐ न जायते म्रियते वा — from Bhagavad Gita 2.20";
      garbhaSanskarTip = "The child is a jiva — an eternal soul. Treat the child with the respect due to a soul, not just a body. The body is forming, but the soul is ancient. Pray for the soul's highest evolution.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "2.20";
      sourceChapter = "Chapter 2, Verse 20";
    });
    weeks.add(25, {
      weekNumber = 25; trimester = 2;
      title = "Prakriti — The Child's Constitution";
      development = "The fetus is the size of a cauliflower. The hair becomes thicker and has color. The child's prakriti (Ayurvedic constitution) is being finalized.";
      saadhna = "Consult an Ayurvedic practitioner about your dosha balance. Eat according to your constitution and the season. Read Charaka Samhita on prakriti. The child's lifelong constitution is being shaped now.";
      mantra = "ॐ प्रकृतये नमः — Om Prakrityai Namah";
      garbhaSanskarTip = "Prakriti (constitution) is determined by the parents' state at conception, the mother's diet and emotions during pregnancy, and the soul's samskaras. Balance your doshas through diet, routine, and meditation.";
      sourceGranth = "Charaka Samhita";
      sourceVerse = "Sharirasthana 8.17";
      sourceChapter = "Sharirasthana, Chapter 8";
    });
    weeks.add(26, {
      weekNumber = 26; trimester = 2;
      title = "Antardrishti — Inner Vision";
      development = "The fetus is the size of a lettuce head. The eyes can now open. The fetus can see dim light through the womb. Brain wave patterns show response to touch and sound.";
      saadhna = "Practice inner visualization — see the Divine in your mind's eye. Read Dhyana Bindu Upanishad on meditation. The child's inner vision is awakening. Visualize a beautiful, divine world for the child.";
      mantra = "ॐ चित्रगुप्ताय नमः — Om Chitraguptaya Namah";
      garbhaSanskarTip = "The child can now see. Visualize beautiful, sacred images — deities, nature, light. Avoid looking at disturbing or ugly images. The child's aesthetic sense is being formed.";
      sourceGranth = "Dhyana Bindu Upanishad";
      sourceVerse = "1";
      sourceChapter = "Verse 1";
    });

    // ─── Trimester 3 (weeks 27-40): Preparation & Arrival ───────────────────
    weeks.add(27, {
      weekNumber = 27; trimester = 3;
      title = "Sahaja — The Natural State";
      development = "The fetus is the size of a head of cabbage. The third trimester begins. The brain is rapidly forming grooves and folds. The lungs, liver, and immune system are maturing.";
      saadhna = "Return to simplicity. The third trimester is for consolidation. Practice being natural (sahaja) — no strain, no forcing. Read Avadhuta Gita on the natural state. Rest more. Eat easily digestible foods.";
      mantra = "ॐ सहजाय नमः — Om Sahajaya Namah";
      garbhaSanskarTip = "Sahaja is the natural state of the soul. The child is preparing for the greatest transition — from womb to world. Help by being calm, natural, and unforced. Trust the process of nature.";
      sourceGranth = "Avadhuta Gita";
      sourceVerse = "1.1";
      sourceChapter = "Chapter 1, Verse 1";
    });
    weeks.add(28, {
      weekNumber = 28; trimester = 3;
      title = "Buddhi — The Light of Intellect";
      development = "The fetus is the size of an eggplant. The eyes are open and can blink. The brain is forming billions of neurons. The child can now dream (REM sleep).";
      saadhna = "Read Bhagavad Gita Chapter 10 — Vibhuti Yoga, on the divine manifestations. The child's buddhi (intellect) is being shaped by what you contemplate. Engage in deep, meaningful conversations. Avoid trivial talk.";
      mantra = "ॐ बुद्धये नमः — Om Buddhaye Namah";
      garbhaSanskarTip = "Buddhi is the faculty of discernment. The child's ability to distinguish right from wrong, real from unreal, is being formed. Read sacred texts, contemplate their meaning, and live by their wisdom.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "10.34";
      sourceChapter = "Chapter 10, Verse 34";
    });
    weeks.add(29, {
      weekNumber = 29; trimester = 3;
      title = "Shakti — The Divine Power";
      development = "The fetus is the size of a butternut squash. The muscles and lungs are maturing. The head grows to accommodate the growing brain. The child gains weight rapidly.";
      saadhna = "Worship the Divine Mother — read Devi Mahatmya. The feminine Shakti that creates, sustains, and transforms is active within you. Chant Durga Saptashati. Eat nourishing, building foods — milk, ghee, dates, almonds.";
      mantra = "ॐ दुं दुर्गायै नमः — Om Dum Durgayai Namah";
      garbhaSanskarTip = "Shakti is the power of creation itself. You are embodying the Divine Mother. Honor this power. Rest, nourish yourself, and receive support. Do not overexert. The child is being filled with shakti.";
      sourceGranth = "Devi Mahatmya";
      sourceVerse = "1.1";
      sourceChapter = "Chapter 1";
    });
    weeks.add(30, {
      weekNumber = 30; trimester = 3;
      title = "Dhairya — Patience and Courage";
      development = "The fetus is the size of a large cabbage. The eyes can now focus. The brain continues to develop. The child can regulate its own body temperature.";
      saadhna = "Practice patience — the child will come when ready. Read Bhagavad Gita 2.47 — act without attachment to results. The child is learning dhairya (patience) from your state of mind. Avoid rushing and anxiety.";
      mantra = "ॐ धैर्याय नमः — Om Dhairyaya Namah";
      garbhaSanskarTip = "Dhairya is the courage to wait. The child is preparing for birth — a great ordeal. Your calm patience teaches the child courage. Trust the timing of the Divine.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "2.47";
      sourceChapter = "Chapter 2, Verse 47";
    });
    weeks.add(31, {
      weekNumber = 31; trimester = 3;
      title = "Vidya — The Knowledge Within";
      development = "The fetus is the size of a coconut. The brain is processing information rapidly. The child can remember sounds heard in the womb. The bones are hardening.";
      saadhna = "Read the Upanishads — the highest knowledge. The child's vidya (knowledge) is being shaped. Read Isha, Kena, Katha, and Mundaka Upanishads. The child will carry this knowledge as samskara.";
      mantra = "ॐ विद्यायै नमः — Om Vidyayai Namah";
      garbhaSanskarTip = "Vidya is spiritual knowledge — the knowledge of the Self. The child is a student even in the womb. Read sacred texts daily. The child absorbs the essence of what you study.";
      sourceGranth = "Mundaka Upanishad";
      sourceVerse = "1.1.1";
      sourceChapter = "Chapter 1, Section 1";
    });
    weeks.add(32, {
      weekNumber = 32; trimester = 3;
      title = "Sukha — The Joy of Being";
      development = "The fetus is the size of a jicama. The child practices breathing movements. The skin is no longer transparent. The child has grown significantly.";
      saadhna = "Cultivate sukha (joy) — not pleasure, but the deep joy of being. Read Bhagavad Gita 5.21 — the sage finds joy within. Listen to beautiful music. Spend time in nature. Laugh with loved ones.";
      mantra = "ॐ सुखाय नमः — Om Sukhaya Namah";
      garbhaSanskarTip = "Sukha is the natural joy of the soul. The child's capacity for happiness is being shaped. Fill your life with genuine joy — not stimulation, but contentment. The child will inherit this disposition.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "5.21";
      sourceChapter = "Chapter 5, Verse 21";
    });
    weeks.add(33, {
      weekNumber = 33; trimester = 3;
      title = "Samarpana — The Act of Surrender";
      development = "The fetus is the size of a pineapple. The bones of the skull are not yet fused — they will overlap during birth. The child is preparing for the journey.";
      saadhna = "Practice Samarpana — total surrender to the Divine. Read Bhagavad Gita 18.66 — 'Sarva dharman parityajya mam ekam sharanam vraja.' Surrender all anxiety about the birth. Trust the Divine completely.";
      mantra = "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज — Sarva Dharman Parityajya Mam Ekam Sharanam Vraja";
      garbhaSanskarTip = "Samarpana is the highest samskara — surrender of the ego. The child is preparing to surrender the safety of the womb for the unknown world. Teach the child surrender by your own example.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "18.66";
      sourceChapter = "Chapter 18, Verse 66";
    });
    weeks.add(34, {
      weekNumber = 34; trimester = 3;
      title = "Sajagata — The State of Wakefulness";
      development = "The fetus is the size of a cantaloupe. The lungs are nearly mature. The child's immune system is developing. The child sleeps most of the time but has periods of wakefulness.";
      saadhna = "Practice being fully awake and present — sajagata. Read Bhagavad Gita 2.69 — 'What is night for all beings is the time of awakening for the self-controlled.' The child is learning to be awake to life.";
      mantra = "ॐ जागृति जागृति — Om Jagriti Jagriti (Awaken, awaken)";
      garbhaSanskarTip = "Sajagata is spiritual wakefulness. The child is preparing to be conscious in the world. Practice mindfulness in all activities. The child learns presence from your presence.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "2.69";
      sourceChapter = "Chapter 2, Verse 69";
    });
    weeks.add(35, {
      weekNumber = 35; trimester = 3;
      title = "Sahaja Yoga — Natural Union";
      development = "The fetus is the size of a honeydew melon. The kidneys are fully developed. The liver can process some waste. The child is gaining weight rapidly — about half a pound per week.";
      saadhna = "Practice Sahaja Yoga — the natural union with the Divine. Read Yoga Vasishta on the natural state. The child is preparing for union with the world outside the womb. Maintain a calm, natural, meditative state.";
      mantra = "ॐ सहज योगाय नमः — Om Sahaja Yogaya Namah";
      garbhaSanskarTip = "The child is preparing for the ultimate yoga — the union of inner and outer worlds. Your yoga practice now is simply being — calm, present, and connected to the Divine. The child feels this union.";
      sourceGranth = "Yoga Vasishta";
      sourceVerse = "6.1.1";
      sourceChapter = "Book 6, Chapter 1";
    });
    weeks.add(36, {
      weekNumber = 36; trimester = 3;
      title = "Prapti — The Approaching Arrival";
      development = "The fetus is the size of a head of romaine lettuce. The child is now considered 'early term.' The lungs are nearly fully mature. The child may move down into the pelvis.";
      saadhna = "Prepare for the arrival. Read Bhagavad Gita 4.7-8 — 'Whenever there is decline of dharma, I incarnate.' The child is an incarnation. Prepare the home, the nursery, and your heart. Chant the Santana Gopala Mantra.";
      mantra = "ॐ श्रीं ह्रीं क्लीं गोपालाय नमः — Om Shrim Hrim Klim Gopalaya Namah";
      garbhaSanskarTip = "Prapti is the approaching fulfillment. The child is almost here. Prepare everything with love and devotion. The home should be clean, beautiful, and filled with sacred sounds. Welcome the child as a divine guest.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "4.7";
      sourceChapter = "Chapter 4, Verse 7";
    });
    weeks.add(37, {
      weekNumber = 37; trimester = 3;
      title = "Sajata — The Child is Ready";
      development = "The fetus is the size of a winter melon. The child is now 'early term.' All organs are functioning. The child practices breathing, sucking, and grasping.";
      saadhna = "The child is ready (sajata). Read the story of Krishna's birth — Srimad Bhagavatam 10.3. The child, like Krishna, is preparing for a divine arrival. Chant the birth mantras. Prepare your mind for the great moment.";
      mantra = "ॐ देवकी सुत गोविन्द नमो भगवते वासुदेवाय — Om Devaki Suta Govinda Namo Bhagavate Vasudevaya";
      garbhaSanskarTip = "The child is fully formed and ready. Now is the time for the deepest samskaras — fill the child's consciousness with the highest thoughts. Read sacred texts, chant mantras, and meditate on the Divine.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "10.3.1";
      sourceChapter = "Canto 10, Chapter 3";
    });
    weeks.add(38, {
      weekNumber = 38; trimester = 3;
      title = "Prarthana — The Prayer of Arrival";
      development = "The fetus is the size of a leek. The child is now 'full term.' The brain and lungs are fully mature. The child is ready to be born at any time.";
      saadhna = "Pray deeply — prarthana. Read Bhagavad Gita 7.7 — 'All is strung on Me like pearls on a thread.' Surrender the child to the Divine. Pray for a safe delivery, a healthy child, and a dharmic life.";
      mantra = "ॐ श्री गर्भ रक्षायै नमः — Om Shri Garbha Rakshayai Namah";
      garbhaSanskarTip = "Prayer is the most powerful samskara. Pray not just for the child's safety, but for the child's spiritual evolution. The child is a soul on a journey — pray that the child fulfills its dharma.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "7.7";
      sourceChapter = "Chapter 7, Verse 7";
    });
    weeks.add(39, {
      weekNumber = 39; trimester = 3;
      title = "Aagamana — Welcoming the Divine Guest";
      development = "The fetus is the size of a mini watermelon. The child is fully developed. The placenta continues to provide antibodies. The child is preparing for the journey through the birth canal.";
      saadhna = "Prepare to welcome the child — aagamana. Read the story of Rama's birth — Balakanda of Ramayana. Light a lamp. Sing the child's name (if chosen). The child is a divine guest about to arrive. Welcome with love.";
      mantra = "ॐ रामाय नमः — Om Ramaya Namah";
      garbhaSanskarTip = "Aagamana is the welcoming. The child is a divine guest. Prepare the home as you would for the most honored guest. The first sight, sound, and touch the child experiences should be sacred.";
      sourceGranth = "Valmiki Ramayana";
      sourceVerse = "Balakanda 18.8";
      sourceChapter = "Balakanda, Sarga 18";
    });
    weeks.add(40, {
      weekNumber = 40; trimester = 3;
      title = "Janma — The Sacred Birth";
      development = "The fetus is the size of a small pumpkin. The 280-day journey is complete. The child is ready to be born. The lungs are fully mature. The child is prepared for life outside the womb.";
      saadhna = "The 280-day saadhna is complete. Read Bhagavad Gita 18.66 one final time — surrender all. Chant the Jatakarma mantras for when the child arrives. The father should whisper 'Veda' in the child's right ear at birth. Welcome the eternal soul.";
      mantra = "ॐ तत्सत् — Om Tat Sat (The Eternal Truth). वेद वेद वेद — whispered in the newborn's ear";
      garbhaSanskarTip = "Janma is the most sacred transition. The soul takes a new body to fulfill its dharma. Perform Jatakarma Samskara — whisper sacred sounds in the child's ear, give honey and ghee, and welcome the soul with love. The 280-day saadhna bears fruit.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.23";
      sourceChapter = "Chapter 17, Verse 23 (Om Tat Sat)";
    });
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // 16 SANSKAARAM (16 rites of passage)
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return all 16 sanskaars in order of sanskaarNumber.
  public func listSanskaars(
    sanskaars : Map.Map<Text, Types.Sanskaar>,
  ) : [Types.Sanskaar] {
    sanskaars.values().toArray().sort(func(a : Types.Sanskaar, b : Types.Sanskaar) : { #less; #equal; #greater } {
      Nat.compare(a.sanskaarNumber, b.sanskaarNumber)
    })
  };

  /// Return a single sanskaar by its id.
  public func getSanskaar(
    sanskaars : Map.Map<Text, Types.Sanskaar>,
    id : Text,
  ) : ?Types.Sanskaar {
    sanskaars.get(id)
  };

  /// Seed all 16 sanskaars with purpose, procedure, timing, and mantras.
  public func initSanskaars(sanskaars : Map.Map<Text, Types.Sanskaar>) : () {
    sanskaars.add("garbhadhana", {
      id = "garbhadhana"; sanskaarNumber = 1;
      name = "Garbhadhana"; sanskritName = "गर्भाधान";
      description = "The first sanskara — the consecration of conception. Performed before physical union with the prayer for a virtuous, healthy, and dharmic child. It elevates the act of procreation from a biological function to a sacred yajna, invoking a noble soul to take birth.";
      timing = "Performed on an auspicious day after marriage, when the wife is in her fertile period, on a day ruled by a benefic nakshatra. Avoided on Amavasya, Purnima, eclipses, and the wife's menstrual period.";
      procedure = [
        "Both husband and wife bathe and wear clean clothes",
        "Light a ghee lamp and offer prayers to the family deity (Kula Devata)",
        "Chant the Garbhadhana mantra together with full faith",
        "The husband prays: 'May a noble, virtuous, and brilliant soul enter the womb'",
        "Visualize the desired qualities of the child — health, intelligence, devotion, dharma",
        "Perform the physical union with the awareness that this is a sacred act of co-creation with the Divine",
        "Afterward, both pray for the protection and well-being of the conceived child"
      ];
      mantra = "ॐ श्री गर्भ रक्षायै नमः — Om Shri Garbha Rakshayai Namah. रेतोऽसि रेतोधानं अस्मि — Retosi Retodhanam Asmi (Rig Veda 10.184)";
      significance = "Garbhadhana ensures that conception is a conscious, sacred act, not a random biological event. The samskara invokes a virtuous soul and sets the spiritual foundation for the child's entire life. It is the first step in shaping a child's samskaras — the impressions that guide a soul across lifetimes.";
      sourceGranth = "Rig Veda";
      sourceVerse = "10.184.1";
      sourceChapter = "Mandala 10, Sukta 184";
    });
    sanskaars.add("pumsavana", {
      id = "pumsavana"; sanskaarNumber = 2;
      name = "Pumsavana"; sanskritName = "पुंसवन";
      description = "The sanskara performed in the second or third month of pregnancy to invoke a virtuous soul and ensure the physical and spiritual well-being of the fetus. 'Pum' means 'soul' and 'savana' means 'to invoke' — invoking a noble soul into the womb.";
      timing = "Performed in the second or third month of pregnancy, on an auspicious day, ideally when the moon is in a benefic nakshatra (Pushya, Punarvasu, or Shravana).";
      procedure = [
        "The mother bathes and wears fresh clothes",
        "A priest or the husband performs a small puja to invoke the Divine",
        "The husband gives the mother a few drops of juice from a crushed herb (traditionally banyan leaf or sacred grass) with mantras",
        "The mother chants the Pumsavana mantra with the husband",
        "Both pray for a virtuous, healthy, and dharmic child",
        "The mother visualizes a radiant soul entering the womb",
        "The family offers food to Brahmins and the poor"
      ];
      mantra = "ॐ श्रीं ह्रीं क्लीं वाग्भवायै नमः — Santana Gopala Mantra. पुंसवनं कुर्महे — Pumsavanam Kurmahe (Ashvalayana Grihya Sutra 1.13)";
      significance = "Pumsavana invokes a noble soul and protects the fetus. It is believed that the soul enters the fetus at this stage, and the samskara ensures the right soul is attracted. The mother's mental state during this period shapes the child's consciousness.";
      sourceGranth = "Ashvalayana Grihya Sutra";
      sourceVerse = "1.13.1";
      sourceChapter = "Book 1, Chapter 13";
    });
    sanskaars.add("simantonnayana", {
      id = "simantonnayana"; sanskaarNumber = 3;
      name = "Simantonnayana"; sanskritName = "सीमन्तोन्नयन";
      description = "The 'parting of the hair' sanskara, performed in the fourth or sixth month of pregnancy. The husband parts the wife's hair with three stalks of kusha grass, symbolizing the calming of her mind and the protection of the fetus. 'Simanta' means the parting of the hair, and 'unnayana' means 'to uplift'.";
      timing = "Performed in the fourth or sixth month of pregnancy (some traditions say the seventh), on an auspicious day under a benefic nakshatra.";
      procedure = [
        "The wife bathes and wears fresh, beautiful clothes",
        "She sits facing east, with the husband beside her",
        "A ghee lamp is lit and prayers offered to the family deity",
        "The husband takes three stalks of kusha grass, ties them together with a red thread",
        "He parts the wife's hair from the front to the back, chanting the mantras",
        "Sweet-smelling flowers and sandalwood are placed in her hair",
        "Musicians play soft, auspicious music (veena, flute)",
        "Blessings are invoked from the elders and the Divine for the well-being of mother and child"
      ];
      mantra = "ॐ श्री गर्भ देवतायै नमः — Om Shri Garbha Devatayai Namah. सीमन्तोन्नयनं कुर्महे — Simantonnayanam Kurmahe (Ashvalayana Grihya Sutra 1.14)";
      significance = "Simantonnayana calms the mother's mind, which directly benefits the fetus. The parting of the hair symbolizes the uplifting of consciousness. The ceremony also marks the social recognition of pregnancy and the community's support for the mother.";
      sourceGranth = "Ashvalayana Grihya Sutra";
      sourceVerse = "1.14.1";
      sourceChapter = "Book 1, Chapter 14";
    });
    sanskaars.add("jatakarma", {
      id = "jatakarma"; sanskaarNumber = 4;
      name = "Jatakarma"; sanskritName = "जातकर्म";
      description = "The sanskara performed immediately after birth, welcoming the newborn soul into the world. The father whispers sacred mantras (Veda) into the child's right ear, gives a taste of honey and ghee, and prays for the child's long, virtuous, and dharmic life.";
      timing = "Performed immediately after birth, before the umbilical cord is cut (in some traditions) or shortly after. The first ceremony for the newborn.";
      procedure = [
        "The father washes and purifies himself",
        "He takes the newborn in his arms, facing east",
        "He whispers 'Veda, Veda, Veda' into the child's right ear",
        "He chants the Jatakarma mantras for long life, intelligence, and strength",
        "He places a drop of honey and ghee on the child's tongue (using a gold ring or spoon)",
        "He prays: 'May you live a hundred years, may you be brilliant, may you be strong'",
        "The mother is honored and the child is welcomed with joy",
        "The family offers prayers of gratitude to the Divine"
      ];
      mantra = "ॐ तत्सत् — Om Tat Sat. वेद वेद वेद — Veda Veda Veda (whispered in the ear). शतायुर्वर्चस्वी भव — Shatayurvarchasvi Bhava (May you live a hundred years, full of vitality)";
      significance = "Jatakarma is the child's first samskara after birth. The whispering of 'Veda' in the ear imprints the highest knowledge on the child's consciousness. The honey and ghee symbolize sweetness and illumination. The ceremony welcomes the soul as a divine guest in the world.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.29";
      sourceChapter = "Chapter 2, Verse 29";
    });
    sanskaars.add("namakarana", {
      id = "namakarana"; sanskaarNumber = 5;
      name = "Namakarana"; sanskritName = "नामकरण";
      description = "The naming ceremony, performed on the 10th, 11th, or 12th day after birth (some traditions say the 101st day). The child is given a sacred name that reflects the family's spiritual aspirations and invokes divine qualities.";
      timing = "Performed on the 10th, 11th, or 12th day after birth (according to different traditions), or on the 101st day. The day is chosen for auspicious nakshatra and tithi.";
      procedure = [
        "The parents bathe the child and dress them in new clothes",
        "A puja is performed to invoke the Divine and the family deity",
        "The priest calculates the nakshatra of the child's birth",
        "The name is chosen based on the nakshatra, family tradition, and the desired qualities",
        "The father whispers the chosen name into the child's right ear three times",
        "The name is announced to the family and community",
        "Blessings are invoked from elders, and prasad is distributed",
        "The name is recorded in the family register"
      ];
      mantra = "ॐ नाम ग्रहणं कुर्महे — Om Nama Grahanam Kurmahe. The name is chanted with 'Om' and the child's gotra";
      significance = "The name is not just a label — it is a vibration that shapes the child's identity and destiny. A sacred name invokes divine qualities and protects the child. The ceremony also formally welcomes the child into the family and community.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.30";
      sourceChapter = "Chapter 2, Verse 30";
    });
    sanskaars.add("nishkramana", {
      id = "nishkramana"; sanskaarNumber = 6;
      name = "Nishkramana"; sanskritName = "निष्क्रमण";
      description = "The sanskara of taking the child out of the house for the first time, performed in the third or fourth month. The child is shown the sun, the moon, and the divine forms in nature, symbolizing the soul's entry into the larger world.";
      timing = "Performed in the third or fourth month after birth, on an auspicious morning, ideally at sunrise.";
      procedure = [
        "The mother bathes and dresses the child in clean clothes",
        "The father or grandfather carries the child out of the house for the first time",
        "The child is shown the rising sun with the Surya mantra",
        "The child is shown the moon with the Chandra mantra",
        "The child is taken to a temple or sacred place",
        "Prayers are offered for the child's protection and well-being in the world",
        "The child is introduced to the natural world — trees, sky, animals",
        "Blessings are invoked from the directions and the Divine"
      ];
      mantra = "ॐ सूर्याय नमः — Om Suryaya Namah (when showing the sun). ॐ चन्द्राय नमः — Om Chandraya Namah (when showing the moon)";
      significance = "Nishkramana marks the child's first contact with the outer world. The sun and moon represent the cosmic forces that sustain life. The ceremony invokes the protection of the divine forces of nature as the child begins to explore the world.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.34";
      sourceChapter = "Chapter 2, Verse 34";
    });
    sanskaars.add("annaprashana", {
      id = "annaprashana"; sanskaarNumber = 7;
      name = "Annaprashana"; sanskritName = "अन्नप्राशन";
      description = "The first feeding ceremony, performed in the sixth month (some traditions say the seventh or eighth). The child is given solid food (usually kheer — sweet rice) for the first time, marking the transition from milk to food.";
      timing = "Performed in the sixth month after birth (some traditions say the seventh or eighth), on an auspicious day, ideally when the moon is in a benefic nakshatra.";
      procedure = [
        "The mother bathes and dresses the child in new clothes",
        "A puja is performed to invoke Annapurna Devi (the goddess of food)",
        "The child is seated on the mother's or grandfather's lap",
        "A gold or silver spoon is used to feed the child",
        "The first offering is kheer (sweet rice pudding) with ghee",
        "The food is offered with mantras for health, strength, and intelligence",
        "Family members take turns feeding the child small bites",
        "In some traditions, objects (book, pen, money, food) are placed before the child to choose — predicting their future inclinations",
        "Prasad is distributed to all present"
      ];
      mantra = "ॐ अन्नपूर्णायै नमः — Om Annapurnayai Namah. अन्नं न पर्चेत् — Annam Na Parchet (Do not despise food — Taittiriya Upanishad)";
      significance = "Annaprashana marks the child's transition from dependence on milk to solid food. Food is sacred — it is the Divine as nourishment. The ceremony teaches the child to receive food as prasad, with gratitude. The choice of objects (in some traditions) is a playful prediction of the child's future path.";
      sourceGranth = "Taittiriya Upanishad";
      sourceVerse = "1.7.1";
      sourceChapter = "Chapter 1, Anuvaka 7";
    });
    sanskaars.add("chudakarana", {
      id = "chudakarana"; sanskaarNumber = 8;
      name = "Chudakarana"; sanskritName = "चूडाकरण";
      description = "The first haircut ceremony, also called Mundan, performed in the first or third year. The child's head is shaved, symbolizing the removal of impurities from past lives and the beginning of a new life of growth and purity.";
      timing = "Performed in the first or third year (some traditions say the seventh), on an auspicious day, ideally at a sacred place like a temple or river bank.";
      procedure = [
        "The child is bathed and dressed in new clothes",
        "A puja is performed to invoke the Divine and the family deity",
        "The child is seated on the lap of the father or an elder",
        "The priest shaves a small portion of the child's hair with a razor, chanting mantras",
        "The rest of the head is shaved (in some traditions, a small tuft — shikha — is left)",
        "The shaved hair is offered to a sacred river or buried",
        "The child's head is washed and a tilak is applied",
        "Prasad is distributed and blessings are invoked for the child's long life and intelligence"
      ];
      mantra = "ॐ चूडाकरणं कुर्महे — Om Chudakaranam Kurmahe. मुण्डं कृणोमि — Mundam Krinomi (I perform the tonsure)";
      significance = "Chudakarana symbolizes the shedding of past-life samskaras and the beginning of a fresh, pure life. The hair that grew in the womb is considered to carry the impressions of past lives. Shaving it represents a new beginning. The shikha (tuft) left on the crown is the seat of consciousness and is preserved for spiritual purposes.";
      sourceGranth = "Sushruta Samhita";
      sourceVerse = "Sharirasthana 1.5";
      sourceChapter = "Sharirasthana, Chapter 1";
    });
    sanskaars.add("karnavedha", {
      id = "karnavedha"; sanskaarNumber = 9;
      name = "Karnavedha"; sanskritName = "कर्णवेध";
      description = "The ear-piercing ceremony, performed in the third or fifth year. The child's ears are pierced with a gold needle, symbolizing the opening of the inner ear to receive sacred knowledge and the awakening of inner hearing.";
      timing = "Performed in the third or fifth year (some traditions say the seventh), on an auspicious day, ideally at sunrise.";
      procedure = [
        "The child is bathed and dressed in new clothes",
        "A puja is performed to invoke the Divine",
        "The child is seated comfortably on the parent's lap",
        "The priest or a goldsmith pierces the earlobes with a gold needle",
        "Gold earrings are inserted (gold is considered pure and auspicious)",
        "Mantras are chanted for the child's health, intelligence, and protection",
        "The child is given sweets and gifts",
        "Prasad is distributed"
      ];
      mantra = "ॐ कर्णवेधं कुर्महे — Om Karnavedham Kurmahe. श्रोत्रं वर्चस्वी भव — Shrotram Varchasvi Bhava (May your hearing be filled with vitality)";
      significance = "Karnavedha is believed to open the inner ear for receiving sacred knowledge. Ayurveda holds that the earlobes have important nerve centers connected to the brain, and piercing them stimulates intellectual development. The ceremony also has a protective and health-giving purpose.";
      sourceGranth = "Sushruta Samhita";
      sourceVerse = "Sharirasthana 1.5";
      sourceChapter = "Sharirasthana, Chapter 1";
    });
    sanskaars.add("upanayana", {
      id = "upanayana"; sanskaarNumber = 10;
      name = "Upanayana"; sanskritName = "उपनयन";
      description = "The sacred thread ceremony, performed between ages 8 and 16 (traditionally for boys of certain varnas). The child is invested with the sacred thread (yajnopavita) and initiated into the study of the Vedas. 'Upanayana' means 'leading near' — leading the child to the Guru and the Divine.";
      timing = "Performed between ages 8 and 16 (according to family tradition), on an auspicious day, ideally at a sacred place or temple.";
      procedure = [
        "The child undergoes a period of purification and fasting",
        "A puja is performed to invoke the Divine and the Guru lineage",
        "The child is dressed in new clothes and given a staff (danda)",
        "The sacred thread (yajnopavita) is placed on the child's left shoulder, crossing to the right hip",
        "The Guru whispers the Gayatri Mantra into the child's right ear (Brahmopadesha)",
        "The child is given a new name (Brahmachari name) and a begging bowl",
        "The child performs the first fire sacrifice (Agnihotra)",
        "The child is now a 'twice-born' (dvija) — born into spiritual life",
        "The child vows to study the Vedas, practice celibacy (brahmacharya), and serve the Guru"
      ];
      mantra = "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् — Gayatri Mantra (whispered by the Guru)";
      significance = "Upanayana is the second birth — the spiritual birth. The child becomes a 'dvija' (twice-born), entering the path of Vedic study and spiritual discipline. The sacred thread represents the three debts (to the gods, the sages, and the ancestors) and the three Gunas. The Gayatri Mantra is the most sacred mantra, initiating the child into the highest knowledge.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.169";
      sourceChapter = "Chapter 2, Verse 169";
    });
    sanskaars.add("vedarambha", {
      id = "vedarambha"; sanskaarNumber = 11;
      name = "Vedarambha"; sanskritName = "वेदारम्भ";
      description = "The commencement of Vedic study, performed immediately after or as part of Upanayana. The child begins the formal study of the Vedas under a Guru. 'Veda' means 'knowledge' and 'arambha' means 'beginning'.";
      timing = "Performed immediately after Upanayana, or on an auspicious day soon after, at the Guru's ashram or home.";
      procedure = [
        "The child, now a brahmachari, approaches the Guru with reverence",
        "The Guru accepts the child as a student",
        "The child offers samidha (sacred fuel sticks) to the fire",
        "The Guru teaches the first Vedic verses (usually the Gayatri or the opening of the Rig Veda)",
        "The child repeats the verses with correct pronunciation",
        "The child vows to study diligently, serve the Guru, and observe brahmacharya",
        "The child begins the daily routine of study, service, and meditation",
        "The family offers dakshina (gifts) to the Guru"
      ];
      mantra = "ॐ वेदान् अधीमहि — Om Vedan Adhimahi (May we study the Vedas). गुरुर्ब्रह्मा गुरुर्विष्णुः — Gurur Brahma Gurur Vishnu (Guru Stotra)";
      significance = "Vedarambha marks the beginning of the child's formal spiritual education. The Vedas are not just books — they are the revealed wisdom of the sages, the eternal sound of the Divine. Studying them is a sacred duty. The Guru is the embodiment of knowledge, and serving the Guru is the path to wisdom.";
      sourceGranth = "Taittiriya Upanishad";
      sourceVerse = "1.1.1";
      sourceChapter = "Chapter 1, Anuvaka 1 (Shikshavalli)";
    });
    sanskaars.add("samavartana", {
      id = "samavartana"; sanskaarNumber = 12;
      name = "Samavartana"; sanskritName = "समावर्तन";
      description = "The completion of Vedic study, performed when the student returns home from the Guru's ashram. The child takes a ceremonial bath (snana), symbolizing the end of brahmacharya and the return to household life. Also called 'Snataka' — the graduate.";
      timing = "Performed at the completion of Vedic study (traditionally after 12 years or more), on an auspicious day, before the student returns home.";
      procedure = [
        "The student takes a ceremonial bath (snana) marking the end of brahmacharya",
        "The student offers gratitude and dakshina to the Guru",
        "The Guru gives final instructions and blessings",
        "The student cuts his hair, beard, and nails (symbolizing the end of austerity)",
        "The student receives new clothes and ornaments",
        "The student takes the vow of a 'snataka' — to live virtuously and share knowledge",
        "The student returns home and is welcomed by the family",
        "The student is now eligible to enter the householder stage (grihastha)"
      ];
      mantra = "ॐ स्नातकोऽस्मि — Om Snatako Asmi (I am a graduate). विद्या ददाति विनयं — Vidya Dadati Vinayam (Knowledge gives humility)";
      significance = "Samavartana marks the transition from student to householder. The bath symbolizes purification and the completion of one stage of life. The graduate vows to use knowledge for the welfare of all. The ceremony honors the Guru and the sacred tradition of learning.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.4";
      sourceChapter = "Chapter 3, Verse 4";
    });
    sanskaars.add("vivaha", {
      id = "vivaha"; sanskaarNumber = 13;
      name = "Vivaha"; sanskritName = "विवाह";
      description = "The marriage ceremony — the most important of all sanskaras. Two souls are united in a sacred bond for the performance of dharma, the continuation of the lineage, and mutual spiritual growth. Vivaha is not just a social contract but a sacred yajna performed in the presence of the Divine and the community.";
      timing = "Performed when the individual is ready for the householder stage (grihastha), on an auspicious day and time (muhurta) calculated by a priest, considering the nakshatras and planetary positions of both partners.";
      procedure = [
        "The ceremony begins with the Kanyadana — the father gives the bride to the groom",
        "The Panigrahana — the groom holds the bride's hand, vowing to protect and cherish her",
        "The Agni is lit — the sacred fire is invoked as the primary witness",
        "The Saptapadi — the couple takes seven steps around the fire, with seven vows",
        "The first step: for food and nourishment",
        "The second step: for strength and vitality",
        "The third step: for prosperity and wealth",
        "The fourth step: for happiness and joy",
        "The fifth step: for progeny and family",
        "The sixth step: for the changing seasons and rhythms of life",
        "The seventh step: for friendship and lifelong companionship",
        "The groom applies sindoor (vermilion) to the bride's forehead",
        "The couple is blessed by elders and the community",
        "The bride is welcomed into the groom's family"
      ];
      mantra = "ॐ इमं नारीम् अनुप्रभावयामि — Om Imam Narim Anuprabhavayami. सप्तपदी भव सखा — Saptapadi Bhava Sakha (Be my friend through seven steps)";
      significance = "Vivaha is the union of two souls, two families, and two lineages. The seven vows (Saptapadi) cover every aspect of life — physical, emotional, material, and spiritual. The fire (Agni) is the eternal witness, and the vows are irrevocable. Marriage is not just for personal happiness but for the performance of dharma and the continuation of the sacred tradition.";
      sourceGranth = "Rig Veda";
      sourceVerse = "10.85.36";
      sourceChapter = "Mandala 10, Sukta 85 (Marriage Hymn)";
    });
    sanskaars.add("vanaprastha", {
      id = "vanaprastha"; sanskaarNumber = 14;
      name = "Vanaprastha"; sanskritName = "वानप्रस्थ";
      description = "The transition to the forest-dweller stage, traditionally undertaken around age 50-60. The individual gradually withdraws from worldly duties and turns toward spiritual practice. 'Vana' means 'forest' and 'prastha' means 'going to' — going to the forest for contemplation.";
      timing = "Undertaken around age 50-60, when the children are grown and household duties are fulfilled. The transition is gradual, not abrupt.";
      procedure = [
        "The individual gradually transfers household responsibilities to the next generation",
        "A ceremony may be performed marking the transition, with prayers and offerings",
        "The individual begins to spend more time in spiritual practice — meditation, study, and pilgrimage",
        "The individual may move to a quieter place, a hermitage, or a sacred forest",
        "Diet becomes simpler, possessions are reduced",
        "The individual takes up the study of the Upanishads and other spiritual texts",
        "The individual begins teaching and guiding the younger generation",
        "The focus shifts from outward action to inward contemplation"
      ];
      mantra = "ॐ वानप्रस्थोऽहम् — Om Vanaprastho Aham (I am a forest dweller). ब्रह्मैवेदममृतं पुरात् — Brahmaivedam Amritam Purat (Brahman alone is immortal)";
      significance = "Vanaprastha is the beginning of the spiritual journey in earnest. The individual has fulfilled worldly duties and now turns inward. This stage prevents the stagnation that comes from clinging to worldly life. It prepares the individual for the final stages of life and the ultimate goal of moksha.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "6.1";
      sourceChapter = "Chapter 6, Verse 1";
    });
    sanskaars.add("sannyasa", {
      id = "sannyasa"; sanskaarNumber = 15;
      name = "Sannyasa"; sanskritName = "सन्न्यास";
      description = "The renunciation ceremony, the final initiation. The individual formally renounces all worldly attachments — family, possessions, name, and identity — and dedicates the remainder of life to the pursuit of moksha (liberation). 'Sannyasa' means 'complete surrender'.";
      timing = "Undertaken after Vanaprastha, when the individual is ready for complete renunciation. There is no fixed age — it depends on spiritual readiness.";
      procedure = [
        "The individual performs a final fire sacrifice, offering all attachments to the fire",
        "The sacred thread is cut or removed, symbolizing the end of all caste and ritual obligations",
        "The hair is shaved, symbolizing the renunciation of identity",
        "The individual receives ochre robes (gerua) — the color of fire and renunciation",
        "A new name is given, ending with 'Ananda' (bliss) — the new identity as a renunciate",
        "The individual takes the vow of ahimsa (non-violence), satya (truth), asteya (non-stealing), brahmacharya (celibacy), and aparigraha (non-possessiveness)",
        "The individual receives a danda (staff) and a begging bowl",
        "The individual vows to wander without attachment, depending on the Divine for sustenance",
        "The Guru gives the Mahavakya (great saying) — 'Tat Tvam Asi' (That Thou Art)"
      ];
      mantra = "ॐ तत्त्वमसि — Om Tat Tvam Asi (That Thou Art — Chandogya Upanishad). सन्न्यासोऽहम् — Sannyaso Aham (I am a renunciate)";
      significance = "Sannyasa is the highest of all sanskaras — the complete surrender of the ego to the Divine. The sannyasi has no caste, no family, no possessions, and no name. They belong to all and to none. Their only pursuit is the realization of the Self (Atman) and the attainment of moksha. The sannyasi is the living embodiment of the Upanishadic teaching — 'Brahman alone is real, the world is illusory, the soul is Brahman.'";
      sourceGranth = "Chandogya Upanishad";
      sourceVerse = "6.8.7";
      sourceChapter = "Chapter 6, Section 8 (Tat Tvam Asi)";
    });
    sanskaars.add("antyeshti", {
      id = "antyeshti"; sanskaarNumber = 16;
      name = "Antyeshti"; sanskritName = "अन्त्येष्टि";
      description = "The final sanskara — the last rites performed after death. The body is cremated and the soul is guided on its journey. 'Antya' means 'last' and 'ishti' means 'sacrifice' — the last sacrifice. This sanskara releases the soul from the body and the bonds of this life.";
      timing = "Performed as soon as possible after death, ideally within 24 hours. The cremation should be done during daylight, before sunset.";
      procedure = [
        "The body is bathed, dressed in clean clothes, and adorned with garlands",
        "The body is carried to the cremation ground (shamshan) by family members",
        "The chief mourner (usually the eldest son) leads the procession",
        "The body is placed on the funeral pyre",
        "The chief mourner circumambulates the pyre and lights it, usually at the head",
        "Mantras are chanted to guide the soul on its journey",
        "The mourners offer ghee and samidha to the fire",
        "After cremation, the ashes (asthi) are collected",
        "The ashes are immersed in a sacred river (preferably the Ganga) or the sea",
        "The mourners return home and purify themselves",
        "On the 10th, 11th, 12th, or 13th day, the Sapindikarana ceremony is performed — merging the departed soul with the ancestors (pitrs)",
        "Annual shraddha ceremonies are performed to honor the departed"
      ];
      mantra = "ॐ वैश्वानराय नमः — Om Vaishvanaraya Namah (to the universal fire). अग्निर्भव सर्वं जगत् — Agnir Bhava Sarvam Jagat (Fire, become the whole universe). ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya (for the soul's journey)";
      significance = "Antyeshti is the final sacrifice — the body itself is offered to the fire. The body is not the person; it is a temporary vehicle. The soul is eternal and continues its journey. Cremation releases the soul from attachment to the body. The immersion of ashes in a sacred river symbolizes the return of the elements to their source. The shraddha ceremonies ensure the soul's peaceful transition and the continuation of the lineage's blessings.";
      sourceGranth = "Rig Veda";
      sourceVerse = "10.16.1";
      sourceChapter = "Mandala 10, Sukta 16 (Funeral Hymn)";
    });
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // ANTIM YAATRA (Last rites procedure — detailed step-by-step)
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return all last rite steps in order of stepNumber.
  public func listLastRiteSteps(
    steps : Map.Map<Text, Types.LastRiteStep>,
  ) : [Types.LastRiteStep] {
    steps.values().toArray().sort(func(a : Types.LastRiteStep, b : Types.LastRiteStep) : { #less; #equal; #greater } {
      Nat.compare(a.stepNumber, b.stepNumber)
    })
  };

  /// Return a single last rite step by its id.
  public func getLastRiteStep(
    steps : Map.Map<Text, Types.LastRiteStep>,
    id : Text,
  ) : ?Types.LastRiteStep {
    steps.get(id)
  };

  /// Seed the step-by-step procedure for performing final rites (Antim Yatra).
  public func initLastRiteSteps(steps : Map.Map<Text, Types.LastRiteStep>) : () {
    steps.add("preparation", {
      id = "preparation"; stepNumber = 1;
      title = "Preparation of the Body"; sanskritName = "शवस्नान";
      description = "The first step after death is to prepare the body with reverence. The body is bathed, dressed in fresh clothes, and adorned. This honors the departed soul and prepares the body for its final journey.";
      procedure = "Close the eyes and mouth of the deceased gently. Place the body on the floor with the head facing north. Bathe the body with water, ideally from a sacred river or with water mixed with Ganga jal. Apply sandalwood paste and kumkum to the forehead. Dress the body in fresh, preferably white or new clothes. Adorn with garlands of flowers, especially tulsi and marigold. If the deceased is a married woman who predeceases her husband, she may be dressed in red or bridal colors. Place a tulsi leaf on the body or in the mouth.";
      mantra = "ॐ शान्तिः शान्तिः शान्तिः — Om Shantih Shantih Shantih (Peace, Peace, Peace). ॐ वैष्णवीं दिशं गच्छ — Om Vaishnavim Disham Gaccha (Go toward the abode of Vishnu)";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.10.1";
      sourceChapter = "Chapter 10, Verse 1 (Preta Kalpa)";
    });
    steps.add("procession", {
      id = "procession"; stepNumber = 2;
      title = "The Funeral Procession"; sanskritName = "शवयात्रा";
      description = "The body is carried to the cremation ground (shamshan ghat) by family members and friends. The procession is led by the chief mourner, usually the eldest son. The journey from home to the cremation ground is the soul's last journey on earth.";
      procedure = "The body is placed on a bier (bamboo stretcher or palanquin), covered with a cloth and flowers. The chief mourner (eldest son, or nearest male relative) leads the procession, carrying a clay pot of fire. The bier is carried on the shoulders of family members, who take turns. The procession walks in silence or chants 'Ram Naam Satya Hai' (The name of Ram is Truth). The body is carried feet-first. The procession should not stop on the way — it is a continuous journey. At the cremation ground, the body is placed with the head facing north.";
      mantra = "राम नाम सत्य है — Ram Nam Satya Hai (The name of Ram is Truth). ॐ नमः शिवाय — Om Namah Shivaya";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.10.5";
      sourceChapter = "Chapter 10, Verse 5";
    });
    steps.add("pyre-construction", {
      id = "pyre-construction"; stepNumber = 3;
      title = "Building the Funeral Pyre"; sanskritName = "चिता निर्माण";
      description = "The funeral pyre is constructed from wood, traditionally sandalwood, mango, or other sacred woods. The pyre is the final offering — the body itself becomes the sacrifice to the fire.";
      procedure = "Select a clean, flat spot at the cremation ground. Lay down a bed of dry wood logs, arranged in a rectangular shape. Place smaller wood and kindling between the logs. Traditionally, sandalwood chips and ghee are added for fragrance and to aid burning. The body is placed on the pyre with the head facing north. More wood is placed over the body. The chief mourner circumambulates the pyre three times clockwise. Ghee is poured over the body and wood. Dried cow dung cakes may be added as fuel.";
      mantra = "ॐ अग्नये नमः — Om Agnaye Namah (Salutations to Agni, the fire god). अग्निः प्रत्यक्षं देवता — Agnih Pratyaksham Devata (Agni is the visible deity)";
      sourceGranth = "Rig Veda";
      sourceVerse = "10.16.1";
      sourceChapter = "Mandala 10, Sukta 16 (Funeral Hymn)";
    });
    steps.add("lighting-pyre", {
      id = "lighting-pyre"; stepNumber = 4;
      title = "Lighting the Funeral Pyre"; sanskritName = "चितादाह";
      description = "The chief mourner lights the funeral pyre, usually at the head of the deceased. This is the most solemn moment — the body is offered to the fire, and the soul is released from its physical vessel.";
      procedure = "The chief mourner (eldest son) takes the clay pot of fire from the procession. He circumambulates the pyre three times. He lights the pyre at the head, chanting the mantras. In some traditions, he breaks the clay pot on the ground after lighting the fire. The family watches as the fire consumes the body. Mantras are chanted continuously. The mourners may offer ghee and samidha (sacred wood) to the fire. The fire is allowed to burn completely. The chief mourner remains until the body is fully consumed.";
      mantra = "ॐ वैश्वानराय नमः — Om Vaishvanaraya Namah (to the universal fire). अग्निर्भव सर्वं जगत् — Agnir Bhava Sarvam Jagat (Fire, become the whole universe). ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya";
      sourceGranth = "Yajur Veda";
      sourceVerse = "40.1";
      sourceChapter = "Chapter 40, Verse 1 (Isavasya Upanishad)";
    });
    steps.add("kapala-kriya", {
      id = "kapala-kriya"; stepNumber = 5;
      title = "Breaking the Skull (Kapala Kriya)"; sanskritName = "कपाल क्रिया";
      description = "After the body is mostly consumed by the fire, the chief mourner strikes the skull with a bamboo staff, symbolically releasing the soul from the body. This is a solemn and essential rite.";
      procedure = "Wait until the body is mostly consumed by the fire (usually 1-2 hours). The chief mourner takes a bamboo staff. He strikes the skull of the deceased with the staff, breaking it. This symbolizes the release of the soul from the body. In some traditions, a piece of the skull (kapala) is retrieved and later immersed in a sacred river. The chief mourner bathes after this rite. The family may pour milk or water over the ashes to cool them.";
      mantra = "ॐ कपालं भिनत्वा — Om Kapalam Bhinatva (Breaking the skull). ॐ पुरुष रूपं त्यज — Om Purusha Rupam Tyaja (Leave the human form)";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.10.10";
      sourceChapter = "Chapter 10, Verse 10";
    });
    steps.add("ash-collection", {
      id = "ash-collection"; stepNumber = 6;
      title = "Collection of Ashes (Asthi Sanchayana)"; sanskritName = "अस्थि संचयन";
      description = "After the pyre has cooled, the ashes and bone fragments (asthi) are collected. These will be immersed in a sacred river, completing the return of the physical elements to nature.";
      procedure = "Wait for the pyre to cool completely (usually the next morning). The chief mourner and family members collect the ashes and bone fragments (asthi) carefully. The ashes are placed in an earthen pot or a cloth bag. If a piece of the skull was kept, it is included. The ashes are then taken to a sacred river for immersion. Traditionally, the Ganga, Yamuna, Godavari, or the sea is preferred. The ashes are immersed with mantras, releasing the soul from earthly attachment. The mourners bathe after the immersion.";
      mantra = "ॐ अस्थि संचयनं कुर्महे — Om Asthi Sanchayanam Kurmahe. गङ्गे तु विसर्जय — Gange Tu Visarjaya (Immerse in the Ganga). ॐ जले तिष्ठ — Om Jale Tishtha (Remain in the water)";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.11.1";
      sourceChapter = "Chapter 11, Verse 1";
    });
    steps.add("immersion", {
      id = "immersion"; stepNumber = 7;
      title = "Immersion of Ashes (Asthi Visarjana)"; sanskritName = "अस्थि विसर्जन";
      description = "The ashes and bone fragments are immersed in a sacred river or the sea. This completes the return of the physical body to the five elements — earth, water, fire, air, and ether. The soul is now free to continue its journey.";
      procedure = "The family travels to a sacred river (Ganga, Yamuna, Godavari, Narmada, Kaveri, or the sea). The chief mourner carries the pot of ashes. At the river bank, the family bathes and purifies themselves. The chief mourner enters the water, holding the pot of ashes. Facing the appropriate direction, he immerses the ashes into the flowing water. Mantras are chanted to guide the soul. The pot is broken and also immersed. The family offers tarpana (water offerings) to the ancestors. The family returns home and purifies themselves.";
      mantra = "ॐ गङ्गायै नमः — Om Gangayai Namah (if immersing in the Ganga). ॐ यमुनायै नमः — Om Yamunayai Namah (if immersing in the Yamuna). ॐ वरुणाय नमः — Om Varunaya Namah (if immersing in the sea). ॐ गतोऽस्मि — Om Gato Asmi (I have gone)";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.11.5";
      sourceChapter = "Chapter 11, Verse 5";
    });
    steps.add("return-purification", {
      id = "return-purification"; stepNumber = 8;
      title = "Return and Purification"; sanskritName = "शुद्धि";
      description = "After the cremation and immersion, the family returns home and undergoes purification. The home is cleaned, and the mourners bathe. This marks the transition from the period of intense mourning to the period of ritual impurity (usually 10-13 days).";
      procedure = "The mourners bathe in the river or at home before re-entering the house. The home is cleaned thoroughly. Some traditions sprinkle Ganga water or cow dung water for purification. The chief mourner shaves his head (in some traditions). The family lights a lamp and offers prayers. The mourners observe a period of ritual impurity (asauca) — usually 10 days for a relative, 11-13 for parents. During this period, they avoid social functions, festive occasions, and certain foods. The family eats simple, sattvic food.";
      mantra = "ॐ शुद्धिम् आगच्छ — Om Shuddhim Agaccha (Come to purity). ॐ अपवित्रः पवित्रो वा — Om Apavitraha Pavitro Va (Whether impure or pure, all become pure by the Divine name)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "5.85";
      sourceChapter = "Chapter 5, Verse 85";
    });
    steps.add("pinda-dana", {
      id = "pinda-dana"; stepNumber = 9;
      title = "Offering of Pindas (Pinda Dana)"; sanskritName = "पिण्ड दान";
      description = "Rice balls (pindas) are offered to the departed soul on each day after death. These pindas nourish the soul on its journey and help it transition from a preta (ghost) to a pitr (ancestor). The offerings are made for 10-13 days.";
      procedure = "Each day after death, the chief mourner prepares rice balls (pindas) — cooked rice mixed with sesame seeds, ghee, and honey. The pindas are placed on a leaf or plate. They are offered to the departed soul with mantras. The number of pindas may increase each day. On the 10th, 11th, 12th, or 13th day (according to tradition), the final and most important pinda offering is made. The pindas are offered at a sacred place, ideally near a river or temple. Crows are sometimes fed, as they are considered messengers of the ancestors. Brahmins are fed and given dakshina.";
      mantra = "ॐ पिण्डं ददामि — Om Pindam Dadami (I offer the pinda). ॐ पितृभ्यः स्वधा नमः — Om Pitrubhyah Svadha Namah (Salutations to the ancestors with svadha). तिलैर्वा पिण्डं कुर्वीत — Tilairva Pindam Kurvita (Make pindas with sesame seeds)";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.12.1";
      sourceChapter = "Chapter 12, Verse 1 (Pinda Dana)";
    });
    steps.add("sapindikarana", {
      id = "sapindikarana"; stepNumber = 10;
      title = "Sapindikarana — Merging with the Ancestors"; sanskritName = "सपिण्डीकरण";
      description = "The final rite of the mourning period, performed on the 10th, 11th, 12th, or 13th day. The departed soul is merged with the ancestors (pitrs), completing the transition from preta to pitr. The soul joins the lineage of ancestors and receives annual shraddha offerings.";
      procedure = "Performed on the 10th, 11th, 12th, or 13th day (according to family tradition). The chief mourner prepares four pindas — one for the departed, three for the ancestors. A priest officiates. The pinda of the departed is placed with the three ancestral pindas, symbolizing the merger. Mantras are chanted to invoke the ancestors and request them to accept the new member. The pindas are then immersed in water or offered to crows. Brahmins are fed, representing the ancestors. Dakshina is given. The family is now released from the period of ritual impurity. The home is purified, and normal life resumes. The departed soul is now a pitr and will receive annual shraddha.";
      mantra = "ॐ सपिण्डीकरणं कुर्महे — Om Sapindikaranam Kurmahe. ॐ पितृलोकं गच्छ — Om Pitrlokam Gaccha (Go to the world of the ancestors). सपिण्डः सन् भव — Sapindah San Bhava (Become one with the ancestors)";
      sourceGranth = "Garuda Purana";
      sourceVerse = "1.13.1";
      sourceChapter = "Chapter 13, Verse 1 (Sapindikarana)";
    });
    steps.add("shraddha", {
      id = "shraddha"; stepNumber = 11;
      title = "Annual Shraddha — Honoring the Ancestors"; sanskritName = "श्राद्ध";
      description = "After Sapindikarana, the departed soul is honored annually with shraddha ceremonies. The most important is performed on the tithi (lunar day) of death each year. Shraddha means 'faith' — faith in the continued existence and well-being of the departed soul.";
      procedure = "Performed annually on the tithi (lunar day) of the death, during the Pitru Paksha (the dark fortnight of Bhadrapada, Sept-Oct). The chief mourner bathes and wears clean clothes. A priest is invited. Brahmins are invited to represent the ancestors. They are seated, honored, and fed with sattvic food (especially kheer, rice, and seasonal vegetables). Pindas are offered. Tarpana (water with sesame seeds) is offered to the ancestors. Dakshina is given to the Brahmins and priest. Food is also distributed to the poor and animals. The family prays for the soul's peace and continued spiritual evolution. The ceremony is performed with faith (shraddha) — this is the essence.";
      mantra = "ॐ श्राद्धं कुर्महे — Om Shraddham Kurmahe. ॐ पितृभ्यः स्वधा नमः — Om Pitrubhyah Svadha Namah. देवा ऋषयश्च पितरः — Deva Rishayashcha Pitarah (Gods, sages, and ancestors). तिल जलं ददामि — Tila Jalam Dadami (I offer water with sesame seeds)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.122";
      sourceChapter = "Chapter 3, Verse 122";
    });
    steps.add("tarpana", {
      id = "tarpana"; stepNumber = 12;
      title = "Tarpana — Water Offerings to the Ancestors"; sanskritName = "तर्पण";
      description = "Tarpana is the offering of water (mixed with sesame seeds and sometimes kusha grass) to the ancestors. It is performed daily during the mourning period, at shraddha, and at other sacred occasions. The water satisfies and honors the departed souls.";
      procedure = "The performer bathes and wears clean clothes (traditionally a sacred thread). He faces south (the direction of the ancestors). He takes water mixed with black sesame seeds in the right hand. He offers the water with the mantras, letting it flow through the fingers. The offering is made to three generations of ancestors on the father's side and three on the mother's side. The water is offered with devotion and faith. Tarpana is performed at sunrise, at shraddha ceremonies, at sacred rivers, and at the beginning of important undertakings. The performer prays for the ancestors' peace and their blessings on the family.";
      mantra = "ॐ पितृभ्यः स्वधा नमः — Om Pitrubhyah Svadha Namah (Salutations to the ancestors with svadha). ॐ मातृभ्यः स्वधा नमः — Om Matrubhyah Svadha Namah (to the maternal ancestors). ॐ तर्पयामि — Om Tarpayami (I offer satisfaction). तिल जलेन तर्पयामि — Tila Jalena Tarpayami (I offer satisfaction with sesame water)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.137";
      sourceChapter = "Chapter 3, Verse 137";
    });
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // SHODASHOPACHARA POOJAN (16-step worship with mantras)
  // ═══════════════════════════════════════════════════════════════════════════

  /// Return all 16 worship steps in order of stepNumber.
  public func listWorshipSteps(
    steps : Map.Map<Text, Types.WorshipStep>,
  ) : [Types.WorshipStep] {
    steps.values().toArray().sort(func(a : Types.WorshipStep, b : Types.WorshipStep) : { #less; #equal; #greater } {
      Nat.compare(a.stepNumber, b.stepNumber)
    })
  };

  /// Return a single worship step by its id.
  public func getWorshipStep(
    steps : Map.Map<Text, Types.WorshipStep>,
    id : Text,
  ) : ?Types.WorshipStep {
    steps.get(id)
  };

  /// Seed all 16 steps of Shodashopachara worship with mantras.
  public func initWorshipSteps(steps : Map.Map<Text, Types.WorshipStep>) : () {
    steps.add("aavahanam", {
      id = "aavahanam"; stepNumber = 1;
      name = "Aavahanam"; sanskritName = "आवाहनम्";
      description = "The first upachara — invoking the presence of the deity into the idol, image, or symbol. The worshipper invites the Divine to come and accept the worship. This is the awakening of the deity's presence.";
      procedure = "Sit facing the deity (idol, image, or symbol). Close your eyes and visualize the deity's form. With folded hands, chant the Aavahana mantra, inviting the deity to come. Imagine the deity descending from their abode and entering the idol or image. Open your eyes and see the deity as now present. Some traditions gesture with the hands, as if welcoming an honored guest. The deity is now considered to be physically present for the worship.";
      mantra = "ॐ आवाहयामि — Om Avahayami (I invoke). आगच्छ भगवन् — Agaccha Bhagavan (Come, O Lord). सुप्रीतो भव मम अतिथि — Suprito Bhava Mama Atithi (Be pleased, my guest). ॐ देव देवं आवाहयामि — Om Deva Devam Avahayami (I invoke the God of gods)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.80";
      sourceChapter = "Chapter 3, Verse 80";
    });
    steps.add("aasanam", {
      id = "aasanam"; stepNumber = 2;
      name = "Aasanam"; sanskritName = "आसनम्";
      description = "Offering a seat to the deity. Just as we would offer a seat to an honored guest, we offer a seat to the Divine. This symbolizes hospitality and reverence.";
      procedure = "Visualize a beautiful, jeweled seat (simhasana — lion throne) for the deity. Some traditions place a small cloth or flower on the altar as the seat. Chant the Aasana mantra, offering the seat to the deity. Imagine the deity sitting comfortably on the offered seat. The seat represents the foundation of the worship — the deity is now established and ready to receive the rest of the worship.";
      mantra = "ॐ आसनं समर्पयामि — Om Asanam Samarpayami (I offer the seat). रत्न सिंहासनं देव — Ratna Simhasanam Deva (O God, a jeweled lion throne). आसनं देव देवेश — Asanam Deva Devesha (A seat, O Lord of gods)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.81";
      sourceChapter = "Chapter 3, Verse 81";
    });
    steps.add("paadyam", {
      id = "paadyam"; stepNumber = 3;
      name = "Paadyam"; sanskritName = "पाद्यम्";
      description = "Washing the feet of the deity with water. Just as we would wash the feet of an honored guest who has traveled to our home, we wash the Divine's feet. This symbolizes humility and service.";
      procedure = "Take clean water (preferably from a copper vessel). Pour a small amount of water at the feet of the deity or on the altar. Some traditions use a spoon or a conch shell to pour the water. Chant the Paadya mantra. Imagine washing the divine feet with pure, fragrant water. The water should be at room temperature. After offering, the water is collected and may be used as charanamrita (holy water).";
      mantra = "ॐ पाद्यं समर्पयामि — Om Padyam Samarpayami (I offer water for the feet). पाद्यं गृह्णातु — Padyam Grinatu (May you accept the foot water). शुचि जलेन पाद्यं ददामि — Shuchi Jalena Padyam Dadami (I offer foot water with pure water)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.82";
      sourceChapter = "Chapter 3, Verse 82";
    });
    steps.add("arghyam", {
      id = "arghyam"; stepNumber = 4;
      name = "Arghyam"; sanskritName = "अर्घ्यम्";
      description = "Offering arghya — water mixed with flowers, sandalwood, and sometimes durva grass — to the deity. This is a respectful welcome offering, given to an honored guest upon arrival.";
      procedure = "Prepare arghya water — clean water mixed with sandalwood paste, flowers, and durva grass (in some traditions). Take the arghya in a copper vessel or conch. Pour a small amount before the deity. Chant the Arghya mantra. Imagine offering the most fragrant, pure water to the Divine. The arghya is a gesture of highest honor. Some traditions offer arghya three times.";
      mantra = "ॐ अर्घ्यं समर्पयामि — Om Arghyam Samarpayami (I offer arghya). अर्घ्यं गृह्णातु — Arghyam Grinatu (May you accept the arghya). देव देव जगन्नाथ — Deva Deva Jagannatha (O Lord of gods, Lord of the universe)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.83";
      sourceChapter = "Chapter 3, Verse 83";
    });
    steps.add("aachamanam", {
      id = "aachamanam"; stepNumber = 5;
      name = "Aachamanam"; sanskritName = "आचमनम्";
      description = "Offering water for the deity to sip (achamana). Just as a guest is offered water to drink after a journey, the deity is offered water for purification and refreshment. Achamana is also a purificatory act for the worshipper.";
      procedure = "Take a small amount of clean water in a spoon or the right palm. Offer it to the deity for sipping. Chant the Aachamana mantra. The water should be pure and at room temperature. Some traditions offer achamana three times. The worshipper may also perform achamana themselves — sipping water from the right palm while chanting the names of the Divine. This purifies the body and mind for worship.";
      mantra = "ॐ आचमनीयं समर्पयामि — Om Achamaniyam Samarpayami (I offer water for sipping). आचमनं गृह्णातु — Achamanam Grinatu (May you accept the achamana). ॐ केशवाय स्वाहा — Om Keshavaya Svaha (to Keshava). ॐ नारायणाय स्वाहा — Om Narayanaya Svaha (to Narayana). ॐ माधवाय स्वाहा — Om Madhavaya Svaha (to Madhava)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.84";
      sourceChapter = "Chapter 3, Verse 84";
    });
    steps.add("snaanam", {
      id = "snaanam"; stepNumber = 6;
      name = "Snaanam"; sanskritName = "स्नानम्";
      description = "The ceremonial bath of the deity. The idol or image is bathed with water, milk, yogurt, ghee, honey, and sugar (panchamrita), followed by pure water. This symbolizes purification and adornment.";
      procedure = "If worshipping an idol (murti), perform the abhisheka — bathe the deity with panchamrita (five nectars: milk, yogurt, ghee, honey, sugar). Pour each liquid over the deity while chanting. Then bathe the deity with pure water to remove the panchamrita. If worshipping an image or symbol, offer the panchamrita symbolically with a spoon. Chant the Snaana mantra. After the bath, dry the deity and prepare for clothing. The panchamrita that has bathed the deity becomes charanamrita — holy nectar that is distributed as prasad.";
      mantra = "ॐ स्नानं समर्पयामि — Om Snanam Samarpayami (I offer the bath). पञ्चामृत स्नानं कुर्महे — Panchamrita Snanam Kurmahe (We perform the panchamrita bath). गङ्गा जलेन स्नानं ददामि — Ganga Jalena Snanam Dadami (I offer a bath with Ganga water). ॐ देव स्नानं गृह्णातु — Om Deva Snanam Grinatu (May the God accept the bath)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.85";
      sourceChapter = "Chapter 3, Verse 85";
    });
    steps.add("vastram", {
      id = "vastram"; stepNumber = 7;
      name = "Vastram"; sanskritName = "वस्त्रम्";
      description = "Offering fresh, beautiful clothes to the deity. After the bath, the deity is dressed in fresh garments. This symbolizes adornment and honor, just as we would dress an honored guest in fine clothes.";
      procedure = "After the bath, offer fresh, clean clothes to the deity. Traditionally, silk or cotton in auspicious colors (yellow, red, white, or the deity's preferred color). If worshipping an idol, dress the idol in the new clothes. If worshipping an image, offer the clothes symbolically. Chant the Vastra mantra. Some traditions offer a sacred thread (yajnopavita) as well. The clothes should be fresh, never worn before. After dressing, the deity is ready for further adornment.";
      mantra = "ॐ वस्त्रं समर्पयामि — Om Vastram Samarpayami (I offer the garment). दिव्य वस्त्रं ददामि — Divya Vastram Dadami (I offer divine clothes). वस्त्रं गृह्णातु — Vastram Grinatu (May you accept the garment). ॐ पीत वस्त्रं — Om Pita Vastram (yellow garment). ॐ शुक्ल वस्त्रं — Om Shukla Vastram (white garment)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.86";
      sourceChapter = "Chapter 3, Verse 86";
    });
    steps.add("yagyopaveetam", {
      id = "yagyopaveetam"; stepNumber = 8;
      name = "Yagyopaveetam"; sanskritName = "यज्ञोपवीतम्";
      description = "Offering the sacred thread (yajnopavita) to the deity. The sacred thread is the symbol of spiritual initiation and the three debts (to the gods, sages, and ancestors). This step is especially for male deities and certain forms of worship.";
      procedure = "Take a sacred thread (yajnopavita) — a cotton thread with three strands. Offer it to the deity, placing it on the left shoulder and crossing to the right hip. If worshipping an idol, place the thread on the idol. If worshipping an image, offer it symbolically. Chant the Yagyopaveeta mantra. The three strands represent the three Gunas (sattva, rajas, tamas), the three debts, and the three times (morning, noon, evening). Some traditions offer a fresh thread at each worship.";
      mantra = "ॐ यज्ञोपवीतं समर्पयामि — Om Yajnopavitam Samarpayami (I offer the sacred thread). यज्ञोपवीतं परमं पवित्रं — Yajnopavitam Paramam Pavitram (The sacred thread is the highest purity). ब्रह्म सूत्रं ददामि — Brahma Sutram Dadami (I offer the thread of Brahman)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.169";
      sourceChapter = "Chapter 2, Verse 169";
    });
    steps.add("gandham", {
      id = "gandham"; stepNumber = 9;
      name = "Gandham"; sanskritName = "गन्धम्";
      description = "Applying sandalwood paste (chandana) to the deity. Sandalwood is cooling, fragrant, and sacred. The application symbolizes the offering of purity, fragrance, and the cooling of passions.";
      procedure = "Take sandalwood paste (chandana) — either prepared fresh by rubbing sandalwood on a stone with water, or from a prepared paste. Apply the paste to the deity — on the forehead, arms, chest, and other parts. If worshipping an image, apply the paste to the frame or offer it symbolically. Chant the Gandha mantra. Some traditions also offer kumkum (red powder), haldi (turmeric), or other fragrant pastes. The fragrance pleases the deity and purifies the atmosphere.";
      mantra = "ॐ गन्धं समर्पयामि — Om Gandham Samarpayami (I offer sandalwood). चन्दनं ददामि — Chandanam Dadami (I offer sandalwood). गन्धं गृह्णातु — Gandham Grinatu (May you accept the sandalwood). दिव्य गन्धं — Divya Gandham (Divine fragrance)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.87";
      sourceChapter = "Chapter 3, Verse 87";
    });
    steps.add("pushpam", {
      id = "pushpam"; stepNumber = 10;
      name = "Pushpam"; sanskritName = "पुष्पम्";
      description = "Offering flowers to the deity. Flowers symbolize beauty, fragrance, and the fleeting nature of life. Different flowers are sacred to different deities — lotus for Lakshmi, hibiscus for Kali, marigold for Ganesha, etc.";
      procedure = "Take fresh, fragrant flowers — never use wilted, fallen, or impure flowers. Different deities prefer different flowers: lotus for Lakshmi and Vishnu, hibiscus for Kali and Ganesh, marigold for Ganesh and Devi, jasmine for Hanuman, tulsi for Vishnu and Krishna. Place the flowers at the feet of the deity or on the idol. Chant the Pushpa mantra. Some traditions offer 108 flowers (or names of the deity). Offer flowers with devotion — the flower represents the heart offered to the Divine. After the worship, the flowers become prasad and may be taken by devotees.";
      mantra = "ॐ पुष्पं समर्पयामि — Om Pushpam Samarpayami (I offer flowers). पुष्पं गृह्णातु — Pushpam Grinatu (May you accept the flowers). दिव्य पुष्पं — Divya Pushpam (Divine flowers). ॐ नमः समर्पयामि — Om Namah Samarpayami (I offer with salutations)";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "9.26";
      sourceChapter = "Chapter 9, Verse 26 (Patram Pushpam Phalam Toyam)";
    });
    steps.add("dhoopam", {
      id = "dhoopam"; stepNumber = 11;
      name = "Dhoopam"; sanskritName = "धूपम्";
      description = "Offering incense (dhoop) to the deity. The fragrant smoke pleases the deity and purifies the atmosphere. Incense represents the element of air and the offering of fragrance.";
      procedure = "Light incense — either dhoop (a fragrant paste or stick) or agarbatti (incense stick). Use natural fragrances — sandalwood, loban (frankincense), guggul, or camphor. Wave the incense before the deity in a circular motion (clockwise), three times. Chant the Dhoopa mantra. The smoke should be gentle, not overwhelming. After offering, place the incense in a holder before the deity. The fragrance fills the space and creates a sacred atmosphere. Some traditions offer camphor (kapoor) as well.";
      mantra = "ॐ धूपं समर्पयामि — Om Dhoopam Samarpayami (I offer incense). धूपं गृह्णातु — Dhoopam Grinatu (May you accept the incense). दिव्य धूपं — Divya Dhoopam (Divine incense). गन्ध धूपं — Gandha Dhoopam (Fragrant incense)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.88";
      sourceChapter = "Chapter 3, Verse 88";
    });
    steps.add("deepam", {
      id = "deepam"; stepNumber = 12;
      name = "Deepam"; sanskritName = "दीपम्";
      description = "Offering a light (deepa) to the deity. A ghee or oil lamp is lit and waved before the deity. The light represents knowledge, purity, and the dispelling of darkness. This is one of the most important upacharas.";
      procedure = "Light a lamp — traditionally a ghee lamp (with cotton wick and clarified butter), but oil lamps (sesame, mustard, or coconut oil) are also used. Some traditions use camphor (kapoor) for the final aarti. Wave the lamp before the deity in a circular motion (clockwise), usually three times — once for the feet, once for the navel/heart, once for the head/face. Chant the Deepa mantra. The light should be steady and bright. After offering, place the lamp before the deity. The worshippers may cup their hands over the flame and then touch their eyes and head, receiving the divine light. This is called 'deepa darshana' or 'aarti'.";
      mantra = "ॐ दीपं समर्पयामि — Om Deepam Samarpayami (I offer the light). दीपं गृह्णातु — Deepam Grinatu (May you accept the light). दिव्य दीपं — Divya Deepam (Divine light). ज्ञान दीपं — Jnana Deepam (The light of knowledge). ॐ तमसो मा ज्योतिर्गमय — Om Tamaso Ma Jyotirgamaya (Lead me from darkness to light)";
      sourceGranth = "Brihadaranyaka Upanishad";
      sourceVerse = "1.3.28";
      sourceChapter = "Chapter 1, Section 3 (Asato Ma Sadgamaya)";
    });
    steps.add("naivedyam", {
      id = "naivedyam"; stepNumber = 13;
      name = "Naivedyam"; sanskritName = "नैवेद्यम्";
      description = "Offering food (naivedya) to the deity. Pure, sattvic food is prepared and offered to the Divine. After the offering, the food becomes prasad — sanctified food that is distributed to devotees. This is the offering of the fruits of one's labor and devotion.";
      procedure = "Prepare pure, sattvic food — fruits, sweets (especially modak for Ganesh, laddoo for Vishnu), cooked rice, milk, or other offerings. The food should be fresh, never tasted before offering. Place the food before the deity. Some traditions write 'Om' on the food or place a tulsi leaf on it. Chant the Naivedya mantra. Offer the food with devotion. After a few minutes, the food is considered accepted by the deity and becomes prasad. The food is then distributed to devotees. Some traditions offer a small amount to all directions, to animals, and to the earth before consuming.";
      mantra = "ॐ नैवेद्यं समर्पयामि — Om Naivedyam Samarpayami (I offer the food). नैवेद्यं गृह्णातु — Naivedyam Grinatu (May you accept the food). प्रसादं कुरु — Prasadam Kuru (Make it prasad). ॐ अन्नं ब्रह्म रसो विष्णुः — Om Annam Brahma Raso Vishnuh (Food is Brahman, the essence is Vishnu). ॐ पत्रं पुष्पं फलं तोयं — Om Patram Pushpam Phalam Toyam (Leaf, flower, fruit, water — Bhagavad Gita 9.26)";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "9.26";
      sourceChapter = "Chapter 9, Verse 26";
    });
    steps.add("taambulam", {
      id = "taambulam"; stepNumber = 14;
      name = "Taambulam"; sanskritName = "ताम्बूलम्";
      description = "Offering paan (tambula) — betel leaf with betel nut, spices, and sometimes camphor — to the deity. This is the final offering to refresh the deity after the meal. It symbolizes the offering of sweetness and fragrance.";
      procedure = "Prepare a paan — take a fresh betel leaf (paan ka patta). Place betel nut (supari), slaked lime (chuna), catechu (kattha), and spices (cardamom, clove, fennel) on the leaf. Fold the leaf into a small packet. Some traditions add a piece of camphor. Offer the paan to the deity. Chant the Taambula mantra. If worshipping an idol, place the paan before it. If worshipping an image, offer it symbolically. The paan is offered as a mouth freshener after the naivedya. After the worship, the paan may be taken as prasad or immersed.";
      mantra = "ॐ ताम्बूलं समर्पयामि — Om Tambulam Samarpayami (I offer the paan). ताम्बूलं गृह्णातु — Tambulam Grinatu (May you accept the paan). नागवल्ली दलं ददामि — Nagavalli Dalam Dadami (I offer the betel leaf). सुगन्ध ताम्बूलं — Sugandha Tambulam (Fragrant paan)";
      sourceGranth = "Manu Smriti";
      sourceVerse = "3.89";
      sourceChapter = "Chapter 3, Verse 89";
    });
    steps.add("stotram", {
      id = "stotram"; stepNumber = 15;
      name = "Stotram"; sanskritName = "स्तोत्रम्";
      description = "Chanting hymns of praise (stotra) in honor of the deity. After all the offerings, the worshipper sings or recites the glories of the Divine. This is the offering of speech and devotion.";
      procedure = "After all the physical offerings, chant or sing hymns (stotras) in praise of the deity. Choose a stotra appropriate to the deity: Vishnu Sahasranama (1000 names of Vishnu), Lalita Sahasranama (for Devi), Shiva Tandava Stotram, Hanuman Chalisa, Ganesh Atharvashirsha, etc. If you don't know a specific stotra, chant the 108 names (ashtottara shatanamavali) of the deity. Chant with devotion, understanding the meaning if possible. The stotra is the offering of the heart through speech. Some traditions also chant the deity's mantra 108 or 1008 times. The chanting should be clear, rhythmic, and heartfelt.";
      mantra = "ॐ स्तोत्रं समर्पयामि — Om Stotram Samarpayami (I offer the hymn). नमामि देवं — Namami Devam (I bow to the God). ॐ नमः शिवाय — Om Namah Shivaya (for Shiva). ॐ नमो भगवते वासुदेवाय — Om Namo Bhagavate Vasudevaya (for Vishnu). ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे — Om Aim Hrim Klim Chamundayai Vicche (for Devi). ॐ गं गणपतये नमः — Om Gam Ganapataye Namah (for Ganesh)";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "10.41";
      sourceChapter = "Chapter 10, Verse 41 (Yad Yad Vibhutimat Sattvam)";
    });
    steps.add("pradakshina-namaskaram", {
      id = "pradakshina-namaskaram"; stepNumber = 16;
      name = "Pradakshina Namaskaram"; sanskritName = "प्रदक्षिण नमस्कारम्";
      description = "The final upachara — circumambulating the deity (pradakshina) and offering prostrations (namaskara). This symbolizes surrender, devotion, and the completion of the worship. The worshipper offers themselves to the Divine.";
      procedure = "After all the offerings and chanting, perform pradakshina — circumambulate the deity or the altar clockwise (keeping the deity to your right). Traditionally, three circumambulations are performed. If the space is small, you may turn around three times in place. After pradakshina, offer namaskara — prostrate before the deity. Traditionally, a full prostration (ashtanga pranama — eight limbs touching the ground: feet, knees, hands, chest, forehead) or a simple bow with folded hands. Chant the Pradakshina Namaskara mantra. Offer yourself to the Divine with the words 'Om Tat Sat' or 'I am yours'. The worship concludes with the prayer for forgiveness of any errors in the worship (this is called 'mantra pushpa' or 'kshama prarthana').";
      mantra = "ॐ प्रदक्षिण नमस्कारं समर्पयामि — Om Pradakshina Namaskaram Samarpayami (I offer circumambulation and prostration). यानि कानि च पापानि — Yani Kani Cha Papani (Whatever sins may have been committed). अनया पूजया — Anaya Pujaya (Through this worship). क्षन्तव्यानि त्वया — Shantavyani Tvaya (May they be forgiven by you). ॐ तत्सत् — Om Tat Sat (That is Truth). ॐ शान्तिः शान्तिः शान्तिः — Om Shantih Shantih Shantih (Peace, Peace, Peace)";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.23";
      sourceChapter = "Chapter 17, Verse 23 (Om Tat Sat)";
    });
  };
};
