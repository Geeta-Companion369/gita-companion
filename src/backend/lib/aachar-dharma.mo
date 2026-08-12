import Types "../types/aachar-dharma";
import Map "mo:core/Map";
import Array "mo:core/Array";

module {
  // ─── Daily Duties (Aachar Saadhna) ─────────────────────────────────────────
  public func listDailyDuties(
    duties : Map.Map<Text, Types.DailyDuty>,
  ) : [Types.DailyDuty] {
    let arr = duties.toArray().map(
      func((_, v) : (Text, Types.DailyDuty)) : Types.DailyDuty { v },
    );
    arr.sort(func(a : Types.DailyDuty, b : Types.DailyDuty) : { #less; #equal; #greater } {
      Text.compare(a.id, b.id);
    });
  };

  public func getDailyDuty(
    duties : Map.Map<Text, Types.DailyDuty>,
    id : Text,
  ) : ?Types.DailyDuty {
    duties.get(id);
  };

  public func initDailyDuties(duties : Map.Map<Text, Types.DailyDuty>) : () {
    // ─── Daily Conduct (with youth dharma woven in) ───────────────────────────
    duties.add("conduct-wake-brahma-muhurta", {
      id = "conduct-wake-brahma-muhurta";
      name = "Wake at Brahma Muhurta";
      sanskritName = "ब्रह्म मुहूर्त जागरण";
      category = "Conduct";
      description = "Rise in the last yama of the night (~96 minutes before sunrise), the sattvic window when the mind is clear and the devas are near. For youth, this is the time to build the discipline that shapes a dharmic life — early rising is the foundation of every other saadhna.";
      practice = "Wake before sunrise, ideally by 4:30am. Splash cool water on the face, sit quietly for a few breaths, and remember your ishta devata before speaking. Avoid reaching for the phone first — let the first thought of the day be a sacred one.";
      timing = "Brahma Muhurta (~96 min before sunrise)";
      linkedExplanationId = "why-brahma-muhurta";
      sourceGranth = "Ashtanga Hridaya";
      sourceVerse = "2.1";
      sourceChapter = "Dinacharya Adhyaya";
    });
    duties.add("conduct-bathe-before-pooja", {
      id = "conduct-bathe-before-pooja";
      name = "Bathe Before Pooja";
      sanskritName = "स्नान";
      category = "Hygiene";
      description = "A purifying bath cleanses the body and the subtle sheath, making one fit to stand before the deity. For youth, this teaches that approaching the sacred requires preparation — we do not bring the dust of the world into the sanctum.";
      practice = "Bathe with cool or lukewarm water. While bathing, chant the names of sacred rivers or a simple mantra. After bathing, wear clean clothes before entering the pooja room.";
      timing = "Before sunrise pooja";
      linkedExplanationId = "why-bathe-before-pooja";
      sourceGranth = "Manu Smriti";
      sourceVerse = "5.128";
      sourceChapter = "Chapter 5";
    });
    duties.add("conduct-eat-satvik", {
      id = "conduct-eat-satvik";
      name = "Eat Satvik Food";
      sanskritName = "सात्त्विक आहार";
      category = "Conduct";
      description = "Food shapes the mind as much as the body. Satvik food — fresh, light, freshly cooked — promotes clarity, devotion, and steadiness. For youth, choosing satvik food is the first act of self-mastery: what you eat, you become.";
      practice = "Prefer freshly cooked vegetables, grains, milk, fruits, and ghee. Avoid stale, overly spicy, fermented, or intoxicating food. Eat in moderation, sitting cross-legged, in silence or with mantra.";
      timing = "At regular meal times";
      linkedExplanationId = "why-eat-satvik";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.8-10";
      sourceChapter = "Chapter 17";
    });
    duties.add("conduct-chant-before-eating", {
      id = "conduct-chant-before-eating";
      name = "Chant Before Eating";
      sanskritName = "भोजन पूर्व मंत्र";
      category = "Conduct";
      description = "Offering food to the Divine before eating transforms eating into yajna. The food becomes prasad and no longer binds the eater. For youth, this turns an ordinary act into a moment of gratitude — the first lesson in seeing the Divine in daily life.";
      practice = "Before the first bite, chant: 'Brahmaarpanam Brahma Havih...' (Gita 4.24) or a simple 'Krishnaarpanamastu'. Eat in silence or with soft bhajan, not while watching screens.";
      timing = "Before every meal";
      linkedExplanationId = "why-chant-before-eating";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "4.24";
      sourceChapter = "Chapter 4";
    });
    duties.add("conduct-sleep-direction", {
      id = "conduct-sleep-direction";
      name = "Sleep in the Right Direction";
      sanskritName = "शयन दिशा";
      category = "Conduct";
      description = "Sleeping with the head to the east or south aligns the body with the earth's magnetic and pranic currents, promoting restful sleep and health. For youth, this is a small discipline that builds awareness of the body as part of a larger cosmic order.";
      practice = "Sleep with the head to the east (for knowledge) or south (for health). Never sleep with the head to the north. Avoid sleeping after sunrise or during sandhya times.";
      timing = "After sunset, before 10pm";
      linkedExplanationId = "why-sleep-direction";
      sourceGranth = "Ashtanga Hridaya";
      sourceVerse = "7.2";
      sourceChapter = "Swastha Vritta Adhyaya";
    });
    duties.add("conduct-speak-satya", {
      id = "conduct-speak-satya";
      name = "Speak Truthfully";
      sanskritName = "सत्य वाणी";
      category = "Conduct";
      description = "Speech is the first field where dharma is tested. Speak the truth, but speak it gently and at the right time. For youth, this is the daily practice of Satya — the pillar that holds up the whole of dharma. A young Hindu learns that a word once spoken cannot be taken back.";
      practice = "Before speaking, ask: Is it true? Is it kind? Is it necessary? Avoid gossip, harsh words, and lies. Speak less, and let speech be an offering.";
      timing = "Throughout the day";
      linkedExplanationId = "why-speak-satya";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.83";
      sourceChapter = "Chapter 2";
    });
    duties.add("conduct-work-as-yajna", {
      id = "conduct-work-as-yajna";
      name = "Work as Yajna";
      sanskritName = "यज्ञ भाव से कर्म";
      category = "Conduct";
      description = "Work done without attachment to the fruit, offered to the Divine, becomes yajna and purifies the doer. For youth, this is the heart of karma yoga — the path that lets a Hindu live fully in the world without being bound by it. Studies, jobs, and household duties all become saadhna when offered.";
      practice = "Before beginning any work, silently offer it to your ishta devata. Work with full attention, do the duty well, and surrender the result. Do not let success inflate the ego or failure crush it.";
      timing = "During work and study hours";
      linkedExplanationId = "why-work-as-yajna";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "3.9";
      sourceChapter = "Chapter 3";
    });
    duties.add("conduct-touch-feet-elders", {
      id = "conduct-touch-feet-elders";
      name = "Touch the Feet of Elders";
      sanskritName = "गुरु चरण स्पर्श";
      category = "Conduct";
      description = "Touching the feet of elders and gurus is a daily act of humility that draws their blessings and shrinks the ego. For youth, this is the visible sign of a Hindu household — the gesture that teaches reverence for lineage, knowledge, and age.";
      practice = "Each morning, touch the feet of parents and elders in the home. When meeting a guru or elder, bow and touch their feet with the right hand, then bring the hand to the eyes and heart.";
      timing = "Morning and on meeting elders";
      linkedExplanationId = "why-touch-feet-elders";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.120";
      sourceChapter = "Chapter 2";
    });
    duties.add("conduct-no-cut-nails-hair-days", {
      id = "conduct-no-cut-nails-hair-days";
      name = "Do Not Cut Nails or Hair on Certain Days";
      sanskritName = "नख लोम विधि";
      category = "Hygiene";
      description = "Certain days — Tuesdays, Fridays, Saturdays, and the new moon — are reserved for the devas and pitrus, and cutting nails or hair on these days is avoided. For youth, this teaches that even small acts of the body are woven into a sacred rhythm, not done at random.";
      practice = "Avoid cutting nails and hair on Tuesdays, Fridays, Saturdays, Amavasya, and during sandhya times. Cut them in the daytime on permitted days, after a bath.";
      timing = "Avoid on Tuesdays, Fridays, Saturdays, Amavasya";
      linkedExplanationId = "why-no-cut-nails-hair-days";
      sourceGranth = "Manu Smriti";
      sourceVerse = "5.135";
      sourceChapter = "Chapter 5";
    });
    duties.add("conduct-daan-reminder", {
      id = "conduct-daan-reminder";
      name = "Daily Daan Reminder";
      sanskritName = "दान स्मरण";
      category = "Conduct";
      description = "Each day, set aside a small portion for daan — of money, food, time, or knowledge. Daan is the one pillar that survives even Kaliyug. For youth, this daily reminder builds the habit that keeps dharma alive in the darkest age: give before you keep.";
      practice = "Each morning, decide what you will give today — a coin, a meal, a kind word, a moment of help. Set it aside mentally and give it before the day ends. Link this practice to the Dharma Stambh pillar of Daan.";
      timing = "Daily, morning resolve";
      linkedExplanationId = "why-daan-daily";
      sourceGranth = "Mahabharata";
      sourceVerse = "Anushasana Parva 13.12";
      sourceChapter = "Anushasana Parva";
    });

    // ─── Sandhya Saadhna (dawn & dusk prayer) ─────────────────────────────────
    duties.add("sandhya-morning", {
      id = "sandhya-morning";
      name = "Morning Sandhya Vandana";
      sanskritName = "प्रातः सन्ध्या वंदना";
      category = "Sandhya";
      description = "At dawn, the junction of night and day, the Gayatri mantra is offered to the rising sun — Savitr, the source of light and consciousness. For youth, this is the daily act that connects the individual jiva to the cosmic order, the saadhna that has been kept unbroken for millennia.";
      practice = "After bath, face east. Perform achamana, then chant the Gayatri mantra 108 times on a mala, or at least 10 times. Offer arghya (water) to the sun. End with a silent prayer for the day.";
      timing = "Sunrise";
      linkedExplanationId = "why-sandhya-vandana";
      sourceGranth = "Taittiriya Aranyaka";
      sourceVerse = "2.11.1";
      sourceChapter = "Aranyaka 2";
    });
    duties.add("sandhya-evening", {
      id = "sandhya-evening";
      name = "Evening Sandhya Vandana";
      sanskritName = "सायं सन्ध्या वंदना";
      category = "Sandhya";
      description = "At dusk, the junction of day and night, Sandhya is offered again to mark the closing of the day's outward activity and the turning inward. For youth, this is the saadhna that closes the day with gratitude and prepares the mind for rest and reflection.";
      practice = "At dusk, light a diya. Face west or north. Chant the Gayatri mantra and the evening sandhya prayers. Offer the day's actions to the Divine and seek forgiveness for any wrong done knowingly or unknowingly.";
      timing = "Sunset";
      linkedExplanationId = "why-sandhya-vandana";
      sourceGranth = "Taittiriya Aranyaka";
      sourceVerse = "2.11.1";
      sourceChapter = "Aranyaka 2";
    });
    duties.add("sandhya-gayatri-practice", {
      id = "sandhya-gayatri-practice";
      name = "Gayatri Mantra Practice";
      sanskritName = "गायत्री मंत्र जप";
      category = "Sandhya";
      description = "The Gayatri mantra is the essence of the Vedas, the supreme mantra of light and wisdom, given by Sage Vishwamitra. For youth, japa of Gayatri is the single most powerful daily practice — it purifies the mind, sharpens intellect, and opens the heart to the Divine.";
      practice = "Chant the Gayatri mantra: 'Om Bhur Bhuva Svaha, Tat Savitur Varenyam, Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat'. Use a tulsi or rudraksha mala. Ideal count: 108 times morning and evening. Maintain physical and mental purity during japa.";
      timing = "Twice daily — dawn and dusk";
      linkedExplanationId = "why-sandhya-vandana";
      sourceGranth = "Rig Veda";
      sourceVerse = "3.62.10";
      sourceChapter = "Mandala 3";
    });

    // ─── Aahaar Saadhna (sacred eating) ───────────────────────────────────────
    duties.add("aahaar-satvik-foods", {
      id = "aahaar-satvik-foods";
      name = "Satvik Foods";
      sanskritName = "सात्त्विक आहार";
      category = "Aahaar";
      description = "Satvik foods — fresh, light, mildly spiced, freshly cooked — promote clarity, devotion, and longevity. These are the foods of the seeker, the student, and the sadhak. For youth, satvik eating is the foundation of a steady mind and a body fit for saadhna.";
      practice = "Eat freshly cooked rice, wheat, dal, vegetables, milk, ghee, honey, fruits, and nuts. Avoid onion, garlic, mushroom, stale food, and over-spiced or over-salted dishes. Cook with a prayerful mind.";
      timing = "At all meals";
      linkedExplanationId = "why-eat-satvik";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.8";
      sourceChapter = "Chapter 17";
    });
    duties.add("aahaar-rajasic-foods", {
      id = "aahaar-rajasic-foods";
      name = "Rajasic Foods (to Limit)";
      sanskritName = "राजसिक आहार";
      category = "Aahaar";
      description = "Rajasic foods — bitter, sour, salty, hot, pungent, dry, and burning — cause pain, grief, and disease. They are not forbidden but should be limited, especially by those pursuing saadhna. For youth, knowing the gunas of food is the first step in conscious eating.";
      practice = "Limit coffee, tea, very spicy food, excessive salt, onion, garlic, and fermented foods. These are not banned, but a saadhak reduces them on festival days, fast days, and during intense japa or study.";
      timing = "Limit at all meals";
      linkedExplanationId = "why-eat-satvik";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.9";
      sourceChapter = "Chapter 17";
    });
    duties.add("aahaar-tamasic-foods", {
      id = "aahaar-tamasic-foods";
      name = "Tamasic Foods (to Avoid)";
      sanskritName = "तामसिक आहार";
      category = "Aahaar";
      description = "Tamasic foods — stale, overcooked, impure, intoxicating, or meat — dull the mind and bind the soul to inertia. A Hindu saadhak avoids them. For youth, this is the discipline that protects the inner light from being smothered by what is consumed.";
      practice = "Avoid meat, fish, eggs, alcohol, stale or rotten food, food cooked by impure hands, and food over-saturated with oil. Avoid eating food that has been kept overnight where possible.";
      timing = "Avoid at all meals";
      linkedExplanationId = "why-eat-satvik";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.10";
      sourceChapter = "Chapter 17";
    });
    duties.add("aahaar-when-to-eat", {
      id = "aahaar-when-to-eat";
      name = "When to Eat";
      sanskritName = "भोजन काल";
      category = "Aahaar";
      description = "Eat at fixed times, twice or thrice a day, after the previous meal is digested. Do not eat at sandhya times (dawn and dusk), at night, or when not hungry. For youth, regular eating times build the agni (digestive fire) and the discipline that supports every other saadhna.";
      practice = "Eat the main meal at midday when the sun (and agni) is strongest. Eat lightly at night, before 7pm if possible. Do not eat during sandhya, after sunset in excess, or while standing or walking.";
      timing = "Midday main meal; light early dinner";
      linkedExplanationId = "why-eat-satvik";
      sourceGranth = "Ashtanga Hridaya";
      sourceVerse = "8.1";
      sourceChapter = "Ritucharya Adhyaya";
    });
    duties.add("aahaar-fasting-foods", {
      id = "aahaar-fasting-foods";
      name = "Fasting Foods (Vrat Aahaar)";
      sanskritName = "व्रत आहार";
      category = "Aahaar";
      description = "On fast days (Ekadashi, Shivratri, Navratri), the diet is reduced to sattvic, light foods — fruits, milk, sabudana, kuttu, singhara — or to complete fasting. For youth, fasting is the saadhna of the body, a periodic reset that purifies body and mind and trains the will.";
      practice = "On Ekadashi, fast from grains and beans; take fruits, milk, and nuts. On Shivratri, fast through the night with water or milk. Break the fast the next morning after pooja, not before. Do not fast if unwell or if it harms studies or work — adjust the fast instead.";
      timing = "Ekadashi, Shivratri, Navratri, Janmashtami";
      linkedExplanationId = "why-eat-satvik";
      sourceGranth = "Padma Purana";
      sourceVerse = "Uttara Khanda 7.42";
      sourceChapter = "Uttara Khanda";
    });
    duties.add("aahaar-prasad-rules", {
      id = "aahaar-prasad-rules";
      name = "Prasad Rules";
      sanskritName = "प्रसाद विधि";
      category = "Aahaar";
      description = "Food offered to the deity with devotion becomes prasad — sanctified, free of karma, a vehicle of grace. Prasad is never refused, never wasted, and always received with reverence. For youth, this is the daily lesson that the Divine eats first and we receive what remains as mercy.";
      practice = "Offer food to the deity before eating. Receive prasad with the right hand. Do not waste prasad. Distribute prasad to family and guests. On festival days, prepare special prasad (panchamrit, chappan bhog) and distribute it.";
      timing = "After every pooja and meal";
      linkedExplanationId = "why-chant-before-eating";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "9.26";
      sourceChapter = "Chapter 9";
    });

    // ─── Additional ritual duties referenced by explanations ──────────────────
    duties.add("conduct-light-diya-incense", {
      id = "conduct-light-diya-incense";
      name = "Light Diya and Incense";
      sanskritName = "दीप धूप प्रज्वलन";
      category = "Conduct";
      description = "Lighting a diya (ghee lamp) and incense (dhoop) before the deity is the daily offering of light and fragrance, the visible sign of the inner light of knowledge. For youth, this is the first act of pooja — the gesture that turns a corner of the home into a sanctum.";
      practice = "Light a ghee or oil diya and incense before the deity each morning and evening. Wave the diya in a clockwise circle before the deity. Let the diya burn out naturally where possible.";
      timing = "Morning and evening pooja";
      linkedExplanationId = "why-light-diya-incense";
      sourceGranth = "Skanda Purana";
      sourceVerse = "2.7.20";
      sourceChapter = "Vaishnava Khanda";
    });
    duties.add("conduct-offer-water-shivling", {
      id = "conduct-offer-water-shivling";
      name = "Offer Water to Shivling";
      sanskritName = "शिवलिंग जलाभिषेक";
      category = "Conduct";
      description = "Offering water (jal) to the Shivling is the abhishek of Mahadev, the simplest and most beloved offering to Shiva. For youth, this is the saadhna that teaches that the simplest offering — water — given with devotion is greater than gold given without it.";
      practice = "On Mondays and Shravan month, offer water, milk, or bel leaves to the Shivling. Pour water slowly over the lingam while chanting 'Om Namah Shivaya'. After abhishek, perform aarti and circumambulate the temple.";
      timing = "Mondays, Shravan month, Mahashivratri";
      linkedExplanationId = "why-offer-water-shivling";
      sourceGranth = "Shiva Purana";
      sourceVerse = "Vidyesvara Samhita 5.41";
      sourceChapter = "Vidyesvara Samhita";
    });
  };

  // ─── Ritual Explanations (the WHY, with source citations) ──────────────────
  public func listRitualExplanations(
    explanations : Map.Map<Text, Types.RitualExplanation>,
  ) : [Types.RitualExplanation] {
    let arr = explanations.toArray().map(
      func((_, v) : (Text, Types.RitualExplanation)) : Types.RitualExplanation { v },
    );
    arr.sort(func(a : Types.RitualExplanation, b : Types.RitualExplanation) : { #less; #equal; #greater } {
      Text.compare(a.id, b.id);
    });
  };

  public func getRitualExplanation(
    explanations : Map.Map<Text, Types.RitualExplanation>,
    id : Text,
  ) : ?Types.RitualExplanation {
    explanations.get(id);
  };

  public func initRitualExplanations(explanations : Map.Map<Text, Types.RitualExplanation>) : () {
    explanations.add("why-brahma-muhurta", {
      id = "why-brahma-muhurta";
      title = "Why Wake at Brahma Muhurta";
      ritualName = "Brahma Muhurta Jagaran";
      explanation = "The last yama of the night (~96 minutes before sunrise) is called Brahma Muhurta — the time of Brahman. The atmosphere is charged with sattva, the air is pure, the mind is naturally calm, and the devas are said to be present. Waking then, one gains health, clarity, and the fruits of saadhna done in that hour are multiplied. The Ashtanga Hridaya declares it the best time for learning, japa, and study. For the youth, this is the discipline that builds the foundation of a dharmic life — the day begun in sattva shapes the whole day.";
      sourceGranth = "Ashtanga Hridaya";
      sourceVerse = "2.1";
      sourceChapter = "Dinacharya Adhyaya";
      relatedDutyIds = ["conduct-wake-brahma-muhurta"];
    });
    explanations.add("why-bathe-before-pooja", {
      id = "why-bathe-before-pooja";
      title = "Why Bathe Before Pooja";
      ritualName = "Snana Before Pooja";
      explanation = "A bath purifies not only the body but the subtle sheath (linga sharira), removing the rajas and tamas accumulated through the night and the previous day. The Manu Smriti prescribes that one should not approach the deity, fire, or guru without bathing. Water is itself a purifier — the sacred rivers are invoked in the bath — and the act of bathing becomes the first offering of the day. For the youth, this teaches that approaching the sacred requires preparation; we do not bring the dust of the world into the sanctum.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "5.128";
      sourceChapter = "Chapter 5";
      relatedDutyIds = ["conduct-bathe-before-pooja"];
    });
    explanations.add("why-light-diya-incense", {
      id = "why-light-diya-incense";
      title = "Why Light Diya and Incense";
      ritualName = "Deepa and Dhupa Offering";
      explanation = "The diya (ghee lamp) is the offering of light — the symbol of knowledge that dispels the darkness of ignorance, and the visible form of the inner light of the atman. Incense (dhoop) is the offering of fragrance, pleasing to the deity and purifying the space. The Skanda Purana states that wherever a ghee lamp is lit before the Lord, there Lakshmi resides. Lighting the diya is also the daily act of surrender — we offer the small flame of our devotion to the great flame of the Divine. For the youth, this is the first act of pooja, the gesture that turns a corner of the home into a sanctum.";
      sourceGranth = "Skanda Purana";
      sourceVerse = "2.7.20";
      sourceChapter = "Vaishnava Khanda";
      relatedDutyIds = ["conduct-light-diya-incense"];
    });
    explanations.add("why-sandhya-vandana", {
      id = "why-sandhya-vandana";
      title = "Why Do Sandhya Vandana";
      ritualName = "Sandhya Vandana at Dawn and Dusk";
      explanation = "Sandhya — the junction (sandhi) of night and day — is the most sacred time of the day, when the veil between the worlds is thin and the Gayatri mantra is offered to Savitr, the source of light and consciousness. The Taittiriya Aranyaka and the Rig Veda (3.62.10) give the Gayatri mantra itself, the supreme mantra of light. Sandhya Vandana is the daily duty of every dvija — the unbroken thread of Vedic practice that has been kept for millennia. To do it is to align the individual jiva with the cosmic order (rita). For the youth, this is the saadhna that connects the small self to the great Self, the practice that has been kept unbroken from guru to disciple since the dawn of the Vedas.";
      sourceGranth = "Taittiriya Aranyaka";
      sourceVerse = "2.11.1";
      sourceChapter = "Aranyaka 2";
      relatedDutyIds = ["sandhya-morning", "sandhya-evening", "sandhya-gayatri-practice"];
    });
    explanations.add("why-eat-satvik", {
      id = "why-eat-satvik";
      title = "Why Eat Satvik Food";
      ritualName = "Satvik Aahaar";
      explanation = "In the Bhagavad Gita (17.8-10), Sri Krishna classifies food by the three gunas. Satvik food — fresh, juicy, nourishing, pleasing to the heart — promotes longevity, intelligence, strength, health, and joy. Rajasic food — bitter, sour, salty, hot — causes pain and grief. Tamasic food — stale, impure, intoxicating — causes dullness and disease. Food shapes the mind as much as the body; the Chandogya Upanishad declares 'ahar shuddhau sattva shuddhi' — when the food is pure, the sattva is pure, and memory becomes steady. For the youth, choosing satvik food is the first act of self-mastery: what you eat, you become.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.8-10";
      sourceChapter = "Chapter 17";
      relatedDutyIds = ["conduct-eat-satvik", "aahaar-satvik-foods", "aahaar-rajasic-foods", "aahaar-tamasic-foods", "aahaar-when-to-eat", "aahaar-fasting-foods"];
    });
    explanations.add("why-chant-before-eating", {
      id = "why-chant-before-eating";
      title = "Why Chant Before Eating";
      ritualName = "Bhojana Mantra";
      explanation = "In the Bhagavad Gita (4.24), Sri Krishna declares that the act of offering, the offered, the offerer, and the goal are all Brahman — and that one who sees Brahman in the offering is freed from karma. Food offered to the Divine before eating becomes prasad; it no longer binds the eater. The Gita (9.26) says that a leaf, a flower, a fruit, or water offered with devotion is accepted by the Lord. Chanting before eating transforms eating into yajna — the ordinary act becomes sacred. For the youth, this is the first lesson in seeing the Divine in daily life, the moment of gratitude that turns a meal into an offering.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "4.24";
      sourceChapter = "Chapter 4";
      relatedDutyIds = ["conduct-chant-before-eating", "aahaar-prasad-rules"];
    });
    explanations.add("why-sleep-direction", {
      id = "why-sleep-direction";
      title = "Why Sleep Direction Matters";
      ritualName = "Shayana Vidhi";
      explanation = "The Ashtanga Hridaya (7.2) prescribes that one should sleep with the head to the east or south, never to the north. The east brings knowledge and spiritual growth; the south brings health and longevity. Sleeping with the head to the north is said to disturb the body's magnetic alignment with the earth and cause disturbed sleep and disease. The body is not separate from the cosmic order — its rest, like its rising, is part of a larger rhythm. For the youth, this small discipline builds awareness that the body is part of a cosmic order, not a machine to be used at random.";
      sourceGranth = "Ashtanga Hridaya";
      sourceVerse = "7.2";
      sourceChapter = "Swastha Vritta Adhyaya";
      relatedDutyIds = ["conduct-sleep-direction"];
    });
    explanations.add("why-touch-feet-elders", {
      id = "why-touch-feet-elders";
      title = "Why Touch the Feet of Elders";
      ritualName = "Guru Charana Sparsha";
      explanation = "The Manu Smriti (2.120) declares that the touch of an elder or guru transfers merit and blessings — the elder, having lived longer and walked further on the path of dharma, carries a store of punya and wisdom. Touching the feet is the act of humility that shrinks the ego and opens the heart to receive. The gesture is also a visible sign of a Hindu household — the daily acknowledgment that we stand on the shoulders of those who came before us. For the youth, this is the visible sign of reverence for lineage, knowledge, and age, the gesture that keeps the chain of dharma unbroken from generation to generation.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.120";
      sourceChapter = "Chapter 2";
      relatedDutyIds = ["conduct-touch-feet-elders"];
    });
    explanations.add("why-no-cut-nails-hair-days", {
      id = "why-no-cut-nails-hair-days";
      title = "Why Not Cut Nails or Hair on Certain Days";
      ritualName = "Nakha Loma Vidhi";
      explanation = "The Manu Smriti (5.135) and the broader body of smriti literature prescribe that certain days — Tuesdays, Fridays, Saturdays, Amavasya, and the sandhya times — are reserved for the devas and pitrus, and that acts of cutting (nails, hair) on these days disturb the subtle order and reduce one's vitality. These are not superstitions but disciplines that weave the small acts of the body into the sacred rhythm of the week and the lunar month. For the youth, this teaches that even the smallest acts of the body are part of a sacred rhythm, not done at random — the body, too, is a field of dharma.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "5.135";
      sourceChapter = "Chapter 5";
      relatedDutyIds = ["conduct-no-cut-nails-hair-days"];
    });
    explanations.add("why-offer-water-shivling", {
      id = "why-offer-water-shivling";
      title = "Why Offer Water to Shivling";
      ritualName = "Shivalinga Jalabhisheka";
      explanation = "The Shiva Purana (Vidyesvara Samhita 5.41) declares that offering even a single drop of water or a bel leaf to the Shivling with devotion grants the merit of all yajnas. The Shivling is the aniconic form of Mahadev — formless form, the linga of light — and water is the simplest, purest offering, the very substance of life. Sage Markandeya, Ravana, and countless devotees offered water and won the grace of Shiva. The offering teaches that the simplest gift, given with devotion, is greater than gold given without it. For the youth, this is the saadhna that teaches that devotion, not expense, is the measure of an offering.";
      sourceGranth = "Shiva Purana";
      sourceVerse = "Vidyesvara Samhita 5.41";
      sourceChapter = "Vidyesvara Samhita";
      relatedDutyIds = ["conduct-offer-water-shivling"];
    });
    explanations.add("why-speak-satya", {
      id = "why-speak-satya";
      title = "Why Speak Truthfully";
      ritualName = "Satya Vani";
      explanation = "The Manu Smriti (2.83) declares that truth is the highest tapas, the highest dharma. Speech is the first field where dharma is tested — a word once spoken cannot be taken back, and a lie, once told, ripples through the world. The Mahabharata says that truth sustains the earth and that when truth falls, dharma falls. Satya is the first of the four pillars of dharma — without it, the other three (tapa, daya, daan) cannot stand. For the youth, this is the daily practice of the pillar that holds up the whole of dharma — the discipline of the tongue that shapes the whole of life.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.83";
      sourceChapter = "Chapter 2";
      relatedDutyIds = ["conduct-speak-satya"];
    });
    explanations.add("why-work-as-yajna", {
      id = "why-work-as-yajna";
      title = "Why Work as Yajna";
      ritualName = "Yajna Bhava Karma";
      explanation = "In the Bhagavad Gita (3.9), Sri Krishna declares that work done without attachment, offered to the Divine, frees the doer — while work done for its fruit binds. This is the heart of karma yoga: the path that lets a Hindu live fully in the world without being bound by it. Studies, jobs, household duties, and service all become saadhna when offered. The doer becomes an instrument, the work becomes the offering, and the fruit is surrendered. For the youth, this is the path that lets a young Hindu live fully in the world — studying, working, building — without being bound by the results, the saadhna that turns every act into a step toward moksha.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "3.9";
      sourceChapter = "Chapter 3";
      relatedDutyIds = ["conduct-work-as-yajna"];
    });
    explanations.add("why-daan-daily", {
      id = "why-daan-daily";
      title = "Why Daily Daan";
      ritualName = "Daan Smarana";
      explanation = "The Mahabharata (Anushasana Parva 13.12) declares that daan — charity — is the one pillar of dharma that survives even Kaliyug, when the other three (satya, tapa, daya) have fallen away. The day people forget daan, even Kaliyug ends. To give daily, even a small amount, is to keep the lamp of dharma lit in the darkest age. Daan purifies the giver of attachment, opens the heart, and transfers punya to the receiver. For the youth, this daily reminder builds the habit that keeps dharma alive in the darkest age — give before you keep, and the chain of dharma does not break.";
      sourceGranth = "Mahabharata";
      sourceVerse = "Anushasana Parva 13.12";
      sourceChapter = "Anushasana Parva";
      relatedDutyIds = ["conduct-daan-reminder"];
    });
  };

  // ─── Dharma Stambh (4 pillars) ──────────────────────────────────────────────
  public func listDharmaPillars(
    pillars : Map.Map<Text, Types.DharmaPillar>,
  ) : [Types.DharmaPillar] {
    let arr = pillars.toArray().map(
      func((_, v) : (Text, Types.DharmaPillar)) : Types.DharmaPillar { v },
    );
    arr.sort(func(a : Types.DharmaPillar, b : Types.DharmaPillar) : { #less; #equal; #greater } {
      Text.compare(a.id, b.id);
    });
  };

  public func getDharmaPillar(
    pillars : Map.Map<Text, Types.DharmaPillar>,
    id : Text,
  ) : ?Types.DharmaPillar {
    pillars.get(id);
  };

  public func initDharmaPillars(pillars : Map.Map<Text, Types.DharmaPillar>) : () {
    pillars.add("daan", {
      id = "daan";
      name = "Daan";
      sanskritName = "दान";
      description = "Daan — charity, the act of giving — is the fourth pillar of dharma and the one that survives even Kaliyug. The Mahabharata (Anushasana Parva 13.12) declares that the day people forget daan, even Kaliyug ends. Daan is not merely the giving of money; it is the giving of food, knowledge, time, forgiveness, and fearlessness (abhaya daan). It purifies the giver of attachment, opens the heart, and transfers punya to the receiver. Of all the pillars, daan is the most accessible — even the poorest can give a kind word, a moment of help, a share of their meal. This is why daan alone upholds dharma in the darkest age.";
      practice = "Give a portion of your income, food, time, or knowledge each day. Give with respect, without expectation of return, and to a worthy recipient. The highest daan is given to one who cannot give back.";
      sourceGranth = "Mahabharata";
      sourceVerse = "Anushasana Parva 13.12";
      sourceChapter = "Anushasana Parva";
    });
    pillars.add("daya", {
      id = "daya";
      name = "Daya";
      sanskritName = "दया";
      description = "Daya — compassion — is the third pillar of dharma, the heart that feels the suffering of all beings as one's own. The Mahabharata (Anushasana Parva 113.10) declares that daya is the highest dharma, for it is the very nature of the Divine. Daya is not mere pity; it is the active will to relieve the suffering of others, expressed in kindness to humans, animals, and all living beings. Ahimsa — non-violence — is daya in action. A Hindu is taught from childhood to feed the cow before oneself, to give water to the thirsty, to spare the ant on the path. Where daya lives, dharma lives; where daya dies, dharma dies.";
      practice = "Practice kindness to all beings — humans, animals, insects. Do not cause unnecessary suffering. Feed animals and birds daily. Forgive those who wrong you. Help the sick, the poor, and the stranger.";
      sourceGranth = "Mahabharata";
      sourceVerse = "Anushasana Parva 113.10";
      sourceChapter = "Anushasana Parva";
    });
    pillars.add("satya", {
      id = "satya";
      name = "Satya";
      sanskritName = "सत्य";
      description = "Satya — truth — is the first pillar of dharma, the foundation on which the other three (tapa, daya, daan) stand. The Manu Smriti (2.83) declares that truth is the highest tapas and the highest dharma. The Mahabharata says that truth sustains the earth, that when truth falls, dharma falls. Satya is not merely the absence of lying; it is alignment of thought, word, and deed with what is real and right. To speak the truth, to live the truth, to be the truth — this is the first discipline of a Hindu. Without satya, the other pillars have no ground to stand on.";
      practice = "Speak the truth, but speak it gently and at the right time. Align thought, word, and deed. Keep your promises. Do not deceive yourself, others, or the Divine.";
      sourceGranth = "Manu Smriti";
      sourceVerse = "2.83";
      sourceChapter = "Chapter 2";
    });
    pillars.add("tap", {
      id = "tap";
      name = "Tapp";
      sanskritName = "तप";
      description = "Tapa — penance, austerity — is the second pillar of dharma, the discipline that purifies the body and mind and burns away the dross of desire. The Bhagavad Gita (17.14-16) describes threefold tapa: of the body (purity, chastity, non-violence, service), of speech (truthful, gentle, beneficial speech, study of scriptures), and of the mind (serenity, gentleness, silence, self-control). Tapa is not self-torture; it is the joyful discipline that turns the body and mind into instruments of the Divine. Fasting, japa, early rising, celibacy, silence — all are forms of tapa. Through tapa the seeker kindles the inner fire that consumes karma and opens the door to moksha.";
      practice = "Practice regular fasting, japa, early rising, and periods of silence. Observe chastity appropriate to your stage of life. Reduce comforts gradually. Study the scriptures daily. Serve the guru and elders.";
      sourceGranth = "Bhagavad Gita";
      sourceVerse = "17.14-16";
      sourceChapter = "Chapter 17";
    });
  };

  // ─── Yug Cycle ──────────────────────────────────────────────────────────────
  public func listYugCycles(
    yugs : Map.Map<Text, Types.YugCycle>,
  ) : [Types.YugCycle] {
    let arr = yugs.toArray().map(
      func((_, v) : (Text, Types.YugCycle)) : Types.YugCycle { v },
    );
    arr.sort(func(a : Types.YugCycle, b : Types.YugCycle) : { #less; #equal; #greater } {
      // Order: Satya, Treta, Dvapara, Kali (descending dharma)
      let order : { #less; #equal; #greater } = Text.compare(a.id, b.id);
      order;
    });
  };

  public func getYugCycle(
    yugs : Map.Map<Text, Types.YugCycle>,
    id : Text,
  ) : ?Types.YugCycle {
    yugs.get(id);
  };

  public func initYugCycles(yugs : Map.Map<Text, Types.YugCycle>) : () {
    yugs.add("satya", {
      id = "satya";
      name = "Satyug";
      sanskritName = "सत्य युग";
      durationYears = 1728000;
      characteristics = "All four pillars of dharma — Satya, Tapa, Daya, Daan — stand on all four legs. People are truthful, compassionate, austere, and generous by nature. There is no disease, no theft, no deceit. The earth yields food without cultivation. Meditation is the primary saadhna. The average human lifespan is vast.";
      dharmaQuarter = 4;
      description = "Satyug — the Golden Age — is the first and purest of the four yugas, when dharma stands on all four legs (Satya, Tapa, Daya, Daan) and humanity lives in harmony with the cosmic order. The Srimad Bhagavatam (12.2.18) describes it as the age when the Lord is worshipped through meditation and when virtue is unforced. There is no need for law, for the heart is naturally righteous. Satyug is the model of what dharma looks like when fully alive — the standard against which every later age is measured.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "12.2.18";
      sourceChapter = "Canto 12";
    });
    yugs.add("treta", {
      id = "treta";
      name = "Tretayug";
      sanskritName = "त्रेता युग";
      durationYears = 1296000;
      characteristics = "Three pillars of dharma stand — Satya, Tapa, Daya — while Daan begins to weaken. Truth, austerity, and compassion remain, but the natural impulse to give begins to fade. Yajna (sacrifice) becomes the primary saadhna. The Ramayana unfolds in this age.";
      dharmaQuarter = 3;
      description = "Tretayug — the Silver Age — is the second yuga, when dharma stands on three of its four legs. Satya, Tapa, and Daya remain strong, but Daan — the natural impulse to give — begins to weaken, and people must be taught to give. The Srimad Bhagavatam (12.2.20) describes yajna as the primary saadhna of this age. The Ramayana unfolds in Tretayug, the age of Sri Rama, the very embodiment of dharma. The age is still luminous, but the first crack has appeared — the natural virtue of Satyug must now be supported by ritual and teaching.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "12.2.20";
      sourceChapter = "Canto 12";
    });
    yugs.add("dvapara", {
      id = "dvapara";
      name = "Dwaapar Yug";
      sanskritName = "द्वापर युग";
      durationYears = 864000;
      characteristics = "Two pillars of dharma stand — Satya and Daya — while Tapa and Daan have weakened. Truth and compassion remain, but austerity and charity are in decline. Temple worship becomes the primary saadhna. The Mahabharata and the Bhagavad Gita unfold in this age.";
      dharmaQuarter = 2;
      description = "Dwaapar Yug — the Bronze Age — is the third yuga, when dharma stands on only two of its four legs. Satya and Daya remain, but Tapa and Daan have weakened, and the natural virtue of humanity is in visible decline. The Srimad Bhagavatam (12.2.30) describes temple worship (archana) as the primary saadhna of this age. The Mahabharata and the Bhagavad Gita unfold in Dwaapar Yug, the age of Sri Krishna, who descends to restore dharma when it has begun to wobble. The age is a warning — dharma is now balanced on a knife-edge, and the next step is the fall into Kaliyug.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "12.2.30";
      sourceChapter = "Canto 12";
    });
    yugs.add("kali", {
      id = "kali";
      name = "Kaliyug";
      sanskritName = "कलि युग";
      durationYears = 432000;
      characteristics = "Only one pillar of dharma stands — Daan — while Satya, Tapa, and Daya have fallen. Truth is rare, austerity is forgotten, compassion is diminished, but the act of giving remains. Naam sankirtan (chanting the names of the Lord) is the prescribed saadhna. The day people forget Daan, even Kaliyug ends.";
      dharmaQuarter = 1;
      description = "Kaliyug — the Iron Age, the age of darkness — is the fourth and present yuga, when dharma stands on only one of its four legs: Daan. Satya, Tapa, and Daya have fallen, and humanity is given to deceit, greed, and conflict. Yet the Mahabharata (Anushasana Parva 13.12) gives the great hope: even in Kaliyug, the act of giving — Daan — keeps dharma alive. The Srimad Bhagavatam (12.3.51) declares that in Kaliyug, the simple chanting of the names of the Lord (naam sankirtan) is the prescribed saadhna, more powerful than all the yajnas of the earlier ages. The day people forget Daan, even Kaliyug ends — and the cycle turns again toward Satyug. This is the soul of the app: in the darkest age, the simplest acts — giving, chanting, remembering — keep the lamp of dharma lit.";
      sourceGranth = "Srimad Bhagavatam";
      sourceVerse = "12.3.51";
      sourceChapter = "Canto 12";
    });
  };
};
