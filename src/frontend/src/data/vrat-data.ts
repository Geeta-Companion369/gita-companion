// ─── 18 Major Hindu Fasts — Vrat Throughout the Year ─────────────────────────

export interface VratEntry {
  id: string;
  name: string;
  hindiName: string;
  deity: string;
  frequency: "weekly" | "monthly" | "bi-monthly" | "annual";
  timing?: string;
  katha: string;
  vidhi: string[];
  fastingRules: string[];
  benefits: string[];
  mantra: { sanskrit: string; meaning: string };
}

export const VRAT_DATA: VratEntry[] = [
  {
    id: "somvar-vrat",
    name: "Somvar Vrat",
    hindiName: "सोमवार व्रत",
    deity: "Lord Shiva",
    frequency: "weekly",
    timing: "Every Monday",
    katha:
      "Somvar Vrat is dedicated to Lord Shiva and Parvati. The story goes that a very wealthy merchant had lost his entire fortune and family happiness due to past karma. He observed 16 consecutive Mondays with complete devotion, fasting and praying at Shiva's temple, reciting the Shiva Chalisa, and offering Bel leaves. Lord Shiva, pleased by his sincere devotion, appeared in a dream and restored all his prosperity. From that day, Somvar Vrat became one of the most widely observed fasts in the Hindu tradition. Unmarried women observe it to attain a good husband like Lord Shiva — who is the ideal husband, devoted entirely to Parvati. Married women observe it for the long life, health, and prosperity of their husbands. Lord Shiva is Bholenath — the easily pleased one — and even a sincere Monday fast offered with Bel leaves, water, and milk is enough to earn his grace. The 16 Somvar Vrat (Solah Somvar Vrat) is a special observance of 16 consecutive Mondays that grants exceptional blessings.",
    vidhi: [
      "Wake before sunrise and bathe with clean water. Wear white or light-coloured clothes.",
      "Prepare a clean altar with a Shiva Lingam or image of Shiva-Parvati. Light a ghee diya.",
      "Offer Panchamrit (milk, curd, honey, ghee, sugar) to the Shiva Lingam with full devotion.",
      "Offer fresh Bel (Bilva) leaves, white flowers, white rice, sandalwood paste, and Dhatura to Shiva.",
      "Recite the Shiva Chalisa or Maha Mrityunjaya Mantra 108 times using a rudraksha mala.",
      "Fast throughout the day — break fast only after sunset or after the evening puja with sattvic food.",
      "Listen to or recite the Somvar Vrat Katha (story) as part of the puja.",
    ],
    fastingRules: [
      "No grains — only fruits, milk, sabudana (tapioca), and sendha namak during the fast.",
      "No non-vegetarian food, no alcohol on this day.",
      "Observe complete celibacy (Brahmacharya) throughout Monday.",
      "No eating of any food until after the evening puja is complete.",
      "Avoid speaking falsehood, anger, or harsh words throughout the fasting day.",
      "If observing 16 Somvar Vrat, follow every Monday consecutively without missing.",
    ],
    benefits: [
      "Fulfills desire for a good life partner — especially for unmarried women.",
      "Grants health, long life, and prosperity to the husband for married women.",
      "Removes malefic effects of the Moon (Chandra) in the horoscope.",
      "Purifies the mind and brings peace — Shiva governs the mind (Manas).",
      "Grants liberation (Moksha) for those who observe sincerely over time.",
      "Removes past sins and negative karma accumulated over many lifetimes.",
    ],
    mantra: {
      sanskrit: "ॐ नमः शिवाय",
      meaning:
        "Om Namah Shivaya — I bow to Shiva, the auspicious one, the liberator.",
    },
  },
  {
    id: "mangalvar-vrat",
    name: "Mangalvar Vrat",
    hindiName: "मंगलवार व्रत",
    deity: "Lord Hanuman & Mangal Dev",
    frequency: "weekly",
    timing: "Every Tuesday",
    katha:
      "Mangalvar (Tuesday) is dedicated to both Lord Hanuman and Mangal Graha (Mars). The Mangalvar Vrat story tells of a childless couple who observed 21 consecutive Tuesdays with total devotion — fasting, chanting the Hanuman Chalisa, and offering sindoor and jasmine oil to Hanuman. Lord Hanuman, moved by their sincere prayerfulness, blessed them with a son who grew up to be a great scholar and devotee. Tuesday is the day Hanuman is said to be most actively present among his devotees, accepting their prayers with special warmth. This vrat is especially powerful for removing the malefic effects of Mars in one's horoscope, for protection from enemies and legal troubles, for removing the fear of death, and for granting courage to face life's battles. Hanuman is the embodiment of devotion, strength, and fearlessness — qualities that flow to his devotees through this vrat.",
    vidhi: [
      "Rise early, bathe, and wear red clothing — red is sacred to Hanuman and Mars.",
      "Prepare the Hanuman altar with sindoor (vermillion), jasmine oil lamp, and red flowers.",
      "Offer sindoor mixed with jasmine oil to Hanuman's image — this is his most beloved offering.",
      "Recite the Hanuman Chalisa completely — all 40 Chaupais — with full concentration.",
      "Read the Mangalvar Vrat Katha (story) with sincerity.",
      "Fast throughout the day, breaking only after sunset with permitted items.",
      "Donate red lentils (masoor daal), jaggery, or red cloth to the needy.",
    ],
    fastingRules: [
      "No grains or cereals — fruits, milk, sabudana, and sendha namak permitted.",
      "No non-vegetarian food, no eggs, no alcohol — strictly vegetarian.",
      "Wear red clothes and avoid wearing black on this day.",
      "No cutting of hair, nails, or shaving on Mangalvar fast.",
      "Do not eat food prepared by someone else — cook your own sattvic food only.",
    ],
    benefits: [
      "Removes malefic effects of Mars (Mangal dosha) in the birth horoscope.",
      "Grants fearlessness, courage, strength, and protection from enemies.",
      "Protects from accidents, court cases, and legal disputes.",
      "Blesses devotees with determination and success in difficult endeavors.",
      "Removes the fear of premature death and grants longevity.",
      "Especially beneficial for those experiencing Mangal dosha in marriage prospects.",
    ],
    mantra: {
      sanskrit: "ॐ हनुमते नमः",
      meaning:
        "Om Hanumate Namah — I bow to Hanuman, the mighty one, son of the Wind god.",
    },
  },
  {
    id: "guruvar-vrat",
    name: "Guruvar (Brihaspativar) Vrat",
    hindiName: "गुरुवार व्रत",
    deity: "Lord Vishnu & Brihaspati Dev",
    frequency: "weekly",
    timing: "Every Thursday",
    katha:
      "Guruvar Vrat is dedicated to Lord Vishnu and Brihaspati (Jupiter), the guru of all the gods. The sacred story of this vrat tells of a prosperous king who became arrogant and stopped performing all religious duties. He mocked his queen's Thursday fasts and ordered the palace to stop all religious observances. Gradually, everything fell apart — wealth vanished, children fell ill, and misery replaced prosperity. The queen, who had never stopped her secret Thursday devotion, prayed tearfully to Lord Vishnu. Vishnu appeared in the form of a wandering sadhu and explained the cause of the ruin. The king repented deeply and resumed the Thursday vrat with the entire family. By the 21st Thursday, all prosperity returned multiplied many times over. Thursday is considered the most auspicious day for receiving the grace of a guru — the word 'Guru' literally means the remover of darkness. Jupiter, the planet of wisdom and expansion, governs this day.",
    vidhi: [
      "Wake before sunrise and bathe. Wear yellow clothing — yellow is sacred to Vishnu and Jupiter.",
      "Prepare a Vishnu altar with yellow flowers, yellow fruits (banana, mango), and a ghee lamp.",
      "Offer chana daal (split yellow lentils) mixed with jaggery to Vishnu as naivedya — this is specially prescribed.",
      "Read or listen to the Brihaspati Vrat Katha (story) of the king and queen.",
      "Recite the Vishnu Sahasranama or chant 'Om Namo Bhagavate Vasudevaya' 108 times.",
      "Donate yellow items — yellow cloth, turmeric, chana daal, bananas — to Brahmins or the poor.",
      "Break fast after sunset with yellow-coloured sattvic food — use turmeric in cooking.",
    ],
    fastingRules: [
      "No grains or rice — fruits, yellow lentils, and bananas are specially permitted.",
      "No non-vegetarian food or alcohol on this day.",
      "Do not wash clothes or shave on Thursdays during the vrat period.",
      "Avoid cutting trees or removing grass from the ground on this day.",
      "Do not eat salty food — observe upvas with only sweet permitted items.",
    ],
    benefits: [
      "Strengthens Jupiter (Brihaspati) in the horoscope — grants wisdom, prosperity, and higher education.",
      "Removes obstacles in marriage, childbirth, and family happiness.",
      "Improves financial condition and removes debt.",
      "Grants guru's grace and spiritual wisdom to sincere observers.",
      "Protects the husband's life, health, and prosperity for married women.",
      "Brings promotion, recognition, and success in career and academics.",
    ],
    mantra: {
      sanskrit: "ॐ नमो भगवते वासुदेवाय",
      meaning:
        "Om Namo Bhagavate Vasudevaya — Salutations to Lord Vasudeva who dwells in all beings.",
    },
  },
  {
    id: "shukravar-vrat",
    name: "Shukravar / Santoshi Mata Vrat",
    hindiName: "शुक्रवार / संतोषी माता व्रत",
    deity: "Goddess Lakshmi & Santoshi Mata",
    frequency: "weekly",
    timing: "Every Friday",
    katha:
      "Shukravar Vrat is dedicated to Goddess Lakshmi and Santoshi Mata — the mother of contentment. The famous story of Santoshi Mata's origin tells that she was born from the combined devotion of Ganesha's two sons, Shubh and Labh, who desired a sister. Santoshi Mata, born of divine joy and contentment, became the goddess of satisfaction and material-spiritual fulfillment. One humble woman observed 16 consecutive Fridays with complete devotion — fasting on just jaggery and chana on Fridays, never eating sour food on that day. Despite severe harassment from her in-laws and an absent husband, she persevered in her Friday devotion. Santoshi Mata, moved by her steadfastness, returned her husband home, destroyed her enemies' influence, and filled her life with peace and joy. This story from the film 'Jai Santoshi Maa' became one of the most beloved vrat traditions across India. Shukravar also honours Goddess Lakshmi — the goddess of wealth and beauty — who is especially pleased by Friday worship.",
    vidhi: [
      "Bathe before sunrise and wear white or pink clothing — colours of Lakshmi's grace.",
      "Set up an altar for Santoshi Mata or Lakshmi with white and pink flowers.",
      "Offer jaggery and roasted chana to Santoshi Mata — these are her prescribed offerings.",
      "Light a ghee lamp and incense sticks before the goddess with full devotion.",
      "Read or listen to the Santoshi Mata Vrat Katha (story) in full.",
      "Fast throughout the day — consume only jaggery and chana after the puja.",
      "Do NOT eat any sour food on this day — sourness displeases Santoshi Mata.",
    ],
    fastingRules: [
      "No sour food of any kind on Fridays — no tamarind, lemon, amla, or sour items.",
      "No non-vegetarian food or eggs.",
      "Fast throughout the day — break only after evening puja.",
      "Those in the family must also avoid sour food on the observer's fast day.",
      "Observe 16 consecutive Fridays without missing a single one for the full vrat.",
    ],
    benefits: [
      "Grants contentment, peace, and satisfaction — removes restlessness and dissatisfaction.",
      "Improves marital happiness and harmony between spouses.",
      "Brings financial prosperity, abundance, and removes poverty.",
      "Grants victory over enemies and those who cause trouble.",
      "Protects home and family from evil influences and disturbances.",
      "Blesses with beauty, grace, and social respect.",
    ],
    mantra: {
      sanskrit: "ॐ श्री संतोषी माता नमः",
      meaning:
        "Om Shri Santoshi Mata Namah — Salutations to Santoshi Mata, the mother of contentment.",
    },
  },
  {
    id: "shanivar-vrat",
    name: "Shanivar Vrat",
    hindiName: "शनिवार व्रत",
    deity: "Lord Shani Dev & Hanuman",
    frequency: "weekly",
    timing: "Every Saturday",
    katha:
      "Shanivar Vrat is observed to please Shani Dev — the planet Saturn, son of Surya (Sun) and Chhaya (Shadow). Shani is considered the most powerful and strict karmic judge among all the Navagrahas. His period (Shani Sade Sati — 7.5 years) is feared by many. The story tells that once all the Navagrahas (nine planetary deities) met to debate who among them was the most powerful. Shani Dev said calmly: 'I am the greatest because I gave Rama 12 years of forest exile, I made Ravana lose his entire empire, and I gave Krishna sorrow in his later years.' All the other planets were humbled. The way to mitigate Shani's karmic impact is through this vrat — by worshipping Shani Dev with black sesame, mustard oil, and blue-black flowers, and by worshipping Hanuman with sindoor and oil. Hanuman is the only deity considered more powerful than Shani — he is said to protect his devotees from Shani's severe effects.",
    vidhi: [
      "Bathe before sunrise and wear black, dark blue, or dark grey clothing.",
      "Light a mustard oil lamp before Shani Dev's image or idol in the temple.",
      "Offer black sesame seeds (kala til), iron nails, mustard oil, and blue-black flowers.",
      "Feed oil to a Peepal tree on Saturday — pour mustard oil at the base of the tree.",
      "Visit a Hanuman temple and offer sindoor, jasmine oil, and offer Hanuman Chalisa.",
      "Donate black sesame, black urad daal, iron items, and dark blue cloth to the needy.",
      "Fast throughout the day or eat only black gram (urad) and sesame-based food.",
    ],
    fastingRules: [
      "Fast throughout the day — break only after evening puja with urad daal or sesame-based food.",
      "No non-vegetarian food or alcohol.",
      "Donate to the poor and serve the underprivileged — Shani rewards service to the marginalized.",
      "Do not buy or use iron or steel items for personal purpose on this day.",
      "Avoid cutting hair or nails on Saturday during the vrat period.",
    ],
    benefits: [
      "Reduces the malefic effects of Saturn (Shani) in the birth chart.",
      "Provides relief during Shani Sade Sati (7.5 year Saturn transit).",
      "Grants protection from accidents, misfortune, and sudden calamities.",
      "Accelerates karmic resolution and helps complete karmic debts faster.",
      "Brings stability, discipline, and steady progress in life.",
      "Blesses with justice, truth, and the rewards of past good karma.",
    ],
    mantra: {
      sanskrit: "ॐ शं शनैश्चराय नमः",
      meaning:
        "Om Sham Shanaishcharaya Namah — Salutations to Shani, who moves slowly but with perfect justice.",
    },
  },
  {
    id: "navratri-chaitra",
    name: "Chaitra Navratri",
    hindiName: "चैत्र नवरात्रि",
    deity: "Goddess Durga — all 9 forms",
    frequency: "annual",
    timing: "Chaitra Shukla Pratipada — March/April (9 days)",
    katha:
      "Navratri — meaning nine nights — is the most sacred festival dedicated to Goddess Durga, the divine mother who destroys evil and protects her devotees with fierce love. Chaitra Navratri, which falls in spring (March-April), marks the Hindu New Year and the birthday of Lord Rama. The sacred story comes from the Devi Mahatmya (Durga Saptashati): When the demon king Mahishasura had conquered the three worlds and dethroned the gods, all the devas were helpless. In their despair they pooled their divine energies together. From their combined divine fire emerged a radiant goddess of incomparable beauty and power — Goddess Durga. Armed with divine weapons given by each of the gods, Durga fought the buffalo-demon Mahishasura in a cosmic battle lasting nine days. On the tenth day (Dashami), she slew him. The nine days of Navratri commemorate this cosmic victory and the worship of Durga's nine forms: Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Each form addresses a specific aspect of divine energy and grants specific blessings.",
    vidhi: [
      "Set up Kalash (sacred pot) with water, mango leaves, and coconut on Pratipada (Day 1) — this is the Ghatasthapana.",
      "Light an akhand jyoti (continuous flame) for all nine days that must not be extinguished.",
      "Worship the specific form of Durga prescribed for each of the nine days with the appropriate colour offering.",
      "Recite or listen to the Durga Saptashati (700 verses glorifying Durga) over the nine days.",
      "On Ashtami or Navami (Day 8 or 9), perform Kanya Puja — invite nine young girls representing the nine Devis and offer them food, gifts, and respect.",
      "Chant Durga Chalisa, Jai Ambe Gauri aarti, and the specific beej mantra of each Devi daily.",
      "Observe the fast for all nine days or at minimum Days 1 and 8/9.",
      "On Dashami (Day 10), immerse the Durga image in water and take sankalpa for the year ahead.",
    ],
    fastingRules: [
      "Full fast for nine days — fruits, milk, sabudana, kuttu atta (buckwheat), singhara atta (water chestnut), and sendha namak only.",
      "No grains, no regular salt (only sendha namak / rock salt).",
      "No non-vegetarian food, no eggs, no onion, no garlic during Navratri.",
      "No alcohol during the entire nine days.",
      "Maintain inner purity — brahmacharya, sattvic thoughts, truthful speech.",
      "Avoid all leather items during these nine days.",
    ],
    benefits: [
      "Destroys enemies, obstacles, and negative forces in one's life — the power of Mahishasura's defeat.",
      "Fulfills all desires — Durga is the fulfiller of the heart's deepest wishes.",
      "Brings strength, courage, and fearlessness to face life's challenges.",
      "Grants the blessings of all nine forms of the Divine Mother.",
      "Removes malefic effects of Rahu, Ketu, and other planetary afflictions.",
      "Purifies the home, family, and all relationships over the nine days.",
    ],
    mantra: {
      sanskrit: "ॐ दुं दुर्गायै नमः",
      meaning:
        "Om Dum Durgayai Namah — Salutations to Durga, the invincible divine mother.",
    },
  },
  {
    id: "navratri-sharada",
    name: "Sharada Navratri",
    hindiName: "शारदा नवरात्रि",
    deity: "Goddess Durga — all 9 forms (most powerful Navratri)",
    frequency: "annual",
    timing:
      "Ashwin Shukla Pratipada — September/October (9 days). The most auspicious Navratri.",
    katha:
      "Sharada Navratri — the autumn Navratri — is the most celebrated and spiritually powerful of all four Navratris. It falls after the monsoon when nature is at its most vibrant, and it culminates in Vijayadashami (Dussehra) — the day Rama defeated Ravana and the day Durga slew Mahishasura. The story of Lord Rama observing this Navratri is particularly beautiful: before crossing the ocean to attack Lanka, Rama was advised by Brahma to worship Goddess Durga to ensure victory. Rama performed a grand worship of Durga for nine days in Ashwin month. As an offering, he was to present 108 blue lotuses to Durga. But when he counted, he found only 107 lotuses. Without hesitation, Rama offered his own eye — he would offer a lotus-like eye. As he was about to do so, Durga appeared immediately, deeply moved by his devotion, and blessed him with guaranteed victory over Ravana. The power of this Navratri, where Rama received divine blessing before his greatest battle, flows to all who observe it. During these nine days, the divine feminine energy (Shakti) is most accessible to devotees on earth.",
    vidhi: [
      "Perform Ghatasthapana on Pratipada with full vidhi — establish the sacred water pot, akhand jyot, and Durga image.",
      "Worship each of the nine Durga forms on the nine days: Day 1 — Shailputri, Day 2 — Brahmacharini, Day 3 — Chandraghanta, Day 4 — Kushmanda, Day 5 — Skandamata, Day 6 — Katyayani, Day 7 — Kalaratri, Day 8 — Mahagauri, Day 9 — Siddhidatri.",
      "Recite Durga Saptashati (Chandi Path) over the nine days — this is mandatory for maximum benefit.",
      "Conduct Havan (fire sacrifice) on Ashtami or Navami with the Navarna Mantra.",
      "Perform Kanya Puja on Day 8 or 9 — invite 9 girls, wash their feet, offer them puri-chana-halwa, gifts, and respect.",
      "On Vijayadashami (Day 10), offer shami leaves and perform the Aparajita Puja for victory.",
      "Keep the akhand jyoti burning day and night for all nine days — never let it extinguish.",
    ],
    fastingRules: [
      "Nine-day fast: only fruits, milk, sabudana, kuttu, singhara flour, and sendha namak.",
      "No regular grains, no onion, no garlic, no non-vegetarian food.",
      "Observe brahmacharya throughout the nine days.",
      "The evening aarti and full puja must be performed daily without fail.",
      "Do not leave the house overnight during the Navratri fast period.",
    ],
    benefits: [
      "Grants the supreme blessings of Shakti — the divine feminine power of the universe.",
      "Destroys all enemies, evil forces, and negative energies in your life.",
      "Fulfills the deepest desires of the heart — financial, familial, and spiritual.",
      "Grants victory in all life battles — as Durga granted Rama victory over Ravana.",
      "Accelerates spiritual progress dramatically — the Shakti energy is most accessible during Navratri.",
      "Transforms the observer with courage, clarity, and divine feminine grace.",
    ],
    mantra: {
      sanskrit: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      meaning:
        "Salutations, salutations, and salutations to that Goddess who abides in all beings as Shakti — as power.",
    },
  },
  {
    id: "mahashivratri",
    name: "Mahashivratri",
    hindiName: "महाशिवरात्रि",
    deity: "Lord Shiva — the supreme night of Shiva",
    frequency: "annual",
    timing:
      "Phalguna Krishna Chaturdashi — February/March. The most sacred night of Shiva.",
    katha:
      "Mahashivratri — the great night of Shiva — is the most sacred day in Shiva's yearly calendar. Multiple sacred stories explain its significance. The cosmic story: Mahashivratri is the night Lord Shiva performed the Tandava — the cosmic dance of creation, preservation, and destruction — before the assembled gods. On this night Shiva is said to be most active and most accessible. The wedding story: This is the anniversary of Shiva and Parvati's divine marriage — the union of consciousness (Shiva) and energy (Shakti). The hunter story: A poor hunter spent a cold Shivratri night hungry in a forest, sheltering in a Bel tree above a Shiva Lingam. Through the night he accidentally dropped Bel leaves onto the Lingam, unknowingly fasting and offering all night. Shiva was so pleased by his unintentional worship that he granted him liberation. Even the most sinful person who fasts and stays awake on Mahashivratri attains liberation. On this night, the divine Shivalinga appears spontaneously — the Jyotirlinga — as a pillar of light connecting heaven and earth, showing Shiva's infinite nature.",
    vidhi: [
      "Fast completely on Mahashivratri day. No food at all — only water or milk if needed for health.",
      "Visit Shiva temple at midnight — midnight Abhishek (bathing of Shivalinga) is the central ritual.",
      "Perform Rudrabhishek — bathe the Shiva Lingam in sequence: water, milk, curd, honey, ghee, sugar, Panchamrit.",
      "Offer Bel leaves in groups of three — the three leaves represent Brahma, Vishnu, and Mahesh (Shiva).",
      "Stay awake the entire night (jagran) — four praharas (3-hour segments) each with a different offering.",
      "Recite the Shiva Panchakshara Mantra 'Om Namah Shivaya' 108 times in each prahara.",
      "Listen to or recite the Shiva Mahapurana stories through the night.",
      "Break the fast on Chaturdashi day after sunrise with Panchamrit prasad.",
    ],
    fastingRules: [
      "Complete fast — no food for the entire day and night. Water and milk are permitted for health.",
      "No grains, no vegetables cooked in regular salt — only rock salt (sendha namak) permitted.",
      "Absolute brahmacharya throughout the day and night.",
      "No sleep throughout the night — staying awake is the most essential observance.",
      "No non-vegetarian food, no alcohol, no onion, no garlic on this sacred day.",
      "Do not consume bhang (cannabis) — this is a folk practice, not prescribed in the Vedas.",
    ],
    benefits: [
      "Grants liberation (moksha) — even unintentional Shivratri observance grants this, per the hunter's story.",
      "Burns the karma of an entire lifetime in a single night of sincere devotion.",
      "The union of Shiva-Shakti energy on this night blesses couples with harmony and love.",
      "Grants fearlessness, wisdom, and spiritual awakening.",
      "Removes all sins of seven generations past.",
      "Connects the devotee to the infinite consciousness that Shiva represents.",
    ],
    mantra: {
      sanskrit: "ॐ नमः शिवाय",
      meaning:
        "Om Namah Shivaya — I bow to Shiva, the auspicious, the pure, the liberator.",
    },
  },
  {
    id: "janmashtami",
    name: "Janmashtami",
    hindiName: "जन्माष्टमी",
    deity: "Lord Krishna — his sacred birth",
    frequency: "annual",
    timing:
      "Bhadrapada Krishna Ashtami — August. The midnight birth of Lord Krishna.",
    katha:
      "Janmashtami celebrates the birth of Lord Krishna — the eighth avatar of Vishnu and the speaker of the Bhagavad Gita. The sacred story: Devaki and Vasudeva were imprisoned by Devaki's evil brother Kamsa, who had received a prophecy that Devaki's eighth child would kill him. Kamsa killed each of Devaki's first seven children at birth. As the eighth child, Krishna, was about to be born on the dark midnight of Bhadrapada Krishna Ashtami, divine wonders surrounded the event. Despite being in prison, the couple's chains fell away. The prison doors opened. Vasudeva, guided by divine inspiration, carried the newborn Krishna in a basket across the flooded Yamuna River (which parted to let him pass) to the safety of Nanda and Yashoda's home in Gokul, exchanging him for Yashoda's newborn daughter. Krishna grew up safely in Vrindavan, played his divine Leelas, and ultimately returned to kill Kamsa and fulfill his cosmic mission. The birth of Krishna at midnight represents the birth of divine consciousness in the deepest darkness of worldly existence — the promise that dharma is reborn whenever adharma grows too strong.",
    vidhi: [
      "Fast throughout Ashtami day — complete fast or fruits/milk only.",
      "Decorate a Krishna cradle or image beautifully. Prepare for the midnight celebration.",
      "At midnight (12:00 AM), perform the Janmashtami Puja: bathe the Krishna idol with Panchamrit.",
      "Offer tulsi leaves, butter, curd, and sweets to baby Krishna — these are his beloved foods.",
      "Rock the cradle 108 times while singing the birth song: 'Nand Gher Anand Bhayo, Jai Kanhaiya Lal Ki!'",
      "Recite Vishnu Sahasranama and Krishna Ashtakam or Bhagavata Purana Chapter 10.",
      "Stay awake the entire night in kirtan and devotion until sunrise.",
      "Break fast after sunrise on Navami with sweets and prasad.",
    ],
    fastingRules: [
      "Full fast on Ashtami day — no grains, beans, or regular food.",
      "Fruits, milk, butter, curd, and sabudana permitted.",
      "No non-vegetarian food on this day.",
      "Stay awake until after midnight puja — sleeping before the midnight birth is not ideal.",
      "If health does not permit full fast, fruit-milk fast is fully accepted by Krishna.",
    ],
    benefits: [
      "Directly connects the devotee to Krishna's divine presence and protection.",
      "Grants the joy of Krishna's birth — the greatest joy in all of creation.",
      "Purifies the observer's soul and accelerates their journey toward devotion.",
      "Removes sins of past and present and grants liberation.",
      "Blesses children who observe this fast with intelligence, devotion, and virtue.",
      "Krishna personally guarantees: 'My devotee shall never perish.' — BG 9.31.",
    ],
    mantra: {
      sanskrit: "ॐ श्री कृष्णाय नमः",
      meaning:
        "Om Shri Krishnaya Namah — Salutations to Lord Krishna, the all-attractive, the supreme being.",
    },
  },
  {
    id: "ram-navami",
    name: "Ram Navami",
    hindiName: "राम नवमी",
    deity: "Lord Rama — the ideal king and avatar of Vishnu",
    frequency: "annual",
    timing:
      "Chaitra Shukla Navami — March/April. The birth of Lord Rama at noon.",
    katha:
      "Ram Navami celebrates the birth of Lord Rama — the seventh avatar of Vishnu, the embodiment of dharma, the ideal son, husband, king, and devotee. Lord Rama was born in Ayodhya to King Dasharatha and Queen Kaushalya on the ninth day of Chaitra month at noon, under the most auspicious planetary alignment. The Ramacharitmanas of Tulsidas describes the joy at Rama's birth: all of creation celebrated. The gods showered flowers from heaven. Celestial music played. Sages arrived to bless the divine child. Rama was born with the purpose of destroying the demon king Ravana who had become a menace to dharma. But more than as a warrior, Rama is celebrated as the perfect being — Maryada Purushottam — the one who never deviates from the boundaries of dharma even when dharma demands personal sacrifice. His life is the supreme model for how a human being should live. Ram Navami falls during Chaitra Navratri — making this the most spiritually charged period of the year, with both Navratri and Ram Navami overlapping.",
    vidhi: [
      "Fast from sunrise to noon on Ram Navami — the fast lasts until Rama's birth time at noon.",
      "Bathe and wear clean yellow or saffron clothing.",
      "Prepare a cradle for baby Rama's image, decorated with flowers.",
      "At noon (the birth time), perform the Janma Puja with Panchamrit abhishek of Rama's image.",
      "Recite the Ramcharitmanas or Valmiki Ramayana verses describing Rama's birth and qualities.",
      "Chant 'Shri Ram Jai Ram Jai Jai Ram' 108 times as the core mantra of this day.",
      "Perform aarti of Rama-Sita-Lakshmana and Hanuman together — they are inseparable.",
      "After noon puja, break fast with prasad of fruits and light sattvic food.",
    ],
    fastingRules: [
      "Fast from sunrise until noon — break after the noon puja that marks Rama's birth.",
      "No non-vegetarian food — Rama was a sattvic, vegetarian devotee.",
      "No grains during the fasting period — fruits, milk, and sweets after the puja.",
      "Avoid speaking falsehood — Rama was the embodiment of satya (truth).",
      "Maintain complete brahmacharya throughout this sacred day.",
    ],
    benefits: [
      "Receives the direct blessings of Lord Rama — protection, strength, and righteousness.",
      "Strengthens dharmic resolve and the power to do what is right even when difficult.",
      "Grants liberation — Rama's name is equal to the complete Vishnu Sahasranama.",
      "Protects from adharma, deception, and injustice.",
      "Blesses the family with the qualities of Rama — loyalty, righteousness, and strength.",
      "Strengthens marital bonds — Rama-Sita is the supreme model of married love.",
    ],
    mantra: {
      sanskrit: "श्री राम जय राम जय जय राम",
      meaning:
        "Shri Ram Jai Ram Jai Jai Ram — Victory to Rama, glory to Rama, victory victory to Rama.",
    },
  },
  {
    id: "pradosh-vrat",
    name: "Pradosh Vrat",
    hindiName: "प्रदोष व्रत",
    deity: "Lord Shiva & Parvati — observed at twilight",
    frequency: "bi-monthly",
    timing:
      "Trayodashi (13th day of both Krishna and Shukla Paksha) — twice monthly. The twilight hour is sacred to Shiva.",
    katha:
      "Pradosh Vrat is observed on the 13th day (Trayodashi) of both the waxing (Shukla Paksha) and waning (Krishna Paksha) lunar fortnight — making it a bi-monthly observance. The story of Pradosh Vrat comes from the Shiva Purana: In a past age, all the gods were afflicted by a terrible curse from the sage Durvasa. Their divine energy (ojas) drained away, and they became weak and dim. Seeking renewal, they approached Lord Brahma, who directed them to churn the cosmic ocean (Samudra Manthan) to obtain amrit (divine nectar) of immortality. The churning produced many things — including the deadly poison Halahala, which threatened to destroy all creation. No god could hold it. Lord Shiva, seeing the emergency, drank the poison and held it in his throat (which turned blue, giving him the name Nilakantha). Parvati grabbed his throat to prevent the poison from descending. At twilight on Trayodashi, while Shiva held this poison for the world's welfare, all the gods came and danced before him in gratitude. Shiva, moved and pleased, danced himself — the cosmic Tandava. This twilight hour became the Pradosh time — the most auspicious time to worship Shiva when he is supremely pleased.",
    vidhi: [
      "Fast throughout the day on Trayodashi — no food until after the Pradosh puja.",
      "The Pradosh puja must be performed during the Pradosh Kaal — 1.5 hours after sunset.",
      "Bathe, wear clean clothes, and set up the Shiva Lingam altar with fresh Bel leaves and flowers.",
      "Perform Rudrabhishek during the Pradosh Kaal — bathe the Lingam with milk, water, curd, honey.",
      "Offer Bel leaves, white flowers, Dhatura, and camphor to Shiva with complete devotion.",
      "Recite the Pradosh Vrat Katha and the Shiva Panchakshara Mantra 108 times.",
      "Perform Shiva aarti with camphor after the puja.",
      "Break fast after the Pradosh Kaal puja with light sattvic food.",
    ],
    fastingRules: [
      "Fast from sunrise until after the Pradosh Kaal puja (after sunset).",
      "No grains during the fasting period — fruits and milk permitted.",
      "No non-vegetarian food, no alcohol on this day.",
      "Brahmacharya is essential on Pradosh Vrat.",
      "Avoid using salt on this day if possible.",
    ],
    benefits: [
      "Lord Shiva and Parvati together bless the observer — twice the divine grace.",
      "Grants all desires — Shiva is Bholenath, the easily pleased one.",
      "Removes the effects of Shani (Saturn) and all planetary afflictions.",
      "Cures illness and removes suffering — Shiva held Halahala for the world's benefit.",
      "Grants liberation and removes the fear of death.",
      "Brings harmony between husband and wife — mirrors Shiva-Parvati's perfect union.",
    ],
    mantra: {
      sanskrit: "ॐ नमः शिवाय",
      meaning:
        "Om Namah Shivaya — I bow to Shiva. This is the Panchakshara — the five-syllable mantra of liberation.",
    },
  },
  {
    id: "purnima-vrat",
    name: "Purnima / Satyanarayan Vrat",
    hindiName: "पूर्णिमा / सत्यनारायण व्रत",
    deity: "Lord Vishnu — Satyanarayan form",
    frequency: "monthly",
    timing: "Every Purnima (full moon day) — every month.",
    katha:
      "The Satyanarayan Puja is one of the most beloved and widely performed pujas in Hindu tradition, observed on every Purnima (full moon) or on special occasions. The story comes from the Skanda Purana's Revakhand: One day Narada Muni came to Lord Vishnu deeply distressed by the suffering he had observed across the three worlds. He asked Vishnu: 'What can the common person do to free themselves from all suffering quickly and easily?' Vishnu smiled and said: 'The simplest, most effective, and most beloved of all my rituals is the Satyanarayan Vrat. Whoever performs it with faith and devotion — regardless of their social status, learning, or wealth — receives my direct grace.' The Katha then tells five stories of people who performed the puja: a poor Brahmin who received great wealth, a woodcutter, a king, a merchant on a sea voyage, and a foolish man who disrespected the prasad. Each story teaches a lesson: those who perform it with sincere faith are blessed; those who disrespect it or break their promise to observe it face troubles until they repent. Satyanarayan means 'Lord of Truth' — this puja is fundamentally about truth, gratitude, and fulfilling one's promises to God.",
    vidhi: [
      "Prepare panchamrit, banana flowers, wheat, and sugar for the prasad (Sheera/Halwa).",
      "Set up the Vishnu altar with his image, fresh flowers, tulsi leaves, and yellow cloth.",
      "Begin with Ganesh puja (Ganesha is invoked first in all Hindu rituals).",
      "Perform Vishnu puja with Panchamrit abhishek, sandalwood, yellow flowers, and tulsi.",
      "Read or listen to all five Satyanarayan Kathas from the Skanda Purana.",
      "Distribute prasad (Sheera/Halwa) to all present — everyone must receive prasad.",
      "No one should disrespect or waste the prasad — this is central to the observance.",
      "The fast can be from morning to after puja, or just an upvas (no grains) for the day.",
    ],
    fastingRules: [
      "Upvas on Purnima — no grains until after the Satyanarayan puja.",
      "Strictly no non-vegetarian food, no alcohol, no onion, no garlic on Purnima.",
      "The prasad of Satyanarayan puja must NEVER be disrespected, wasted, or refused.",
      "If you take a sankalpa (vow) to perform the puja, fulfill it without fail.",
      "Maintain a truthful, pure conduct throughout the day.",
    ],
    benefits: [
      "Grants all desires — Vishnu is Satyanarayan, the fulfiller of truth-based prayers.",
      "Removes financial difficulties and grants prosperity and abundance.",
      "Blesses families with harmony, happiness, and resolution of disputes.",
      "Protects from enemies, legal troubles, and sudden misfortunes.",
      "Grants children, long life, good health, and success to family members.",
      "Fulfills all promises made to God — Vishnu ensures vows made to Satyanarayan are honored.",
    ],
    mantra: {
      sanskrit: "ॐ नमो भगवते वासुदेवाय",
      meaning:
        "Om Namo Bhagavate Vasudevaya — Salutations to Vasudeva, the all-pervading truth.",
    },
  },
  {
    id: "amavasya-pitru",
    name: "Amavasya / Pitru Tarpan",
    hindiName: "अमावस्या / पितृ तर्पण",
    deity: "Pitru Devatas (Ancestors) & Yama",
    frequency: "monthly",
    timing:
      "Every Amavasya (new moon day) — every month. Pitru Paksha Amavasya is the most powerful.",
    katha:
      "Amavasya — the new moon day — is the most sacred day for performing rituals for departed ancestors. The sacred teaching from the Mahabharata: Once a great king was confused about why certain difficult karma kept returning to his family despite all their prayers and good deeds. The sage Narada explained: 'Your ancestors are restless because their Shraddha (ancestor memorial) rituals have not been performed on Amavasya. They send their unfulfilled hunger downward to their descendants through subtle karmic threads. When ancestors are not satisfied, their descendants cannot prosper fully.' The Garuda Purana extensively describes the journey of the soul after death — how it passes through different realms depending on karma — and how the Tarpan (water offering) and Pind Daan (rice ball offering) given on Amavasya nourish the ancestors in their respective realms. When we offer water (Tarpan) to ancestors on Amavasya, calling their names, the water reaches them transformed into divine nourishment. This is not superstition but a cosmic system described in Vedic scripture for maintaining the sacred bond between the living and the departed.",
    vidhi: [
      "Bathe before sunrise on Amavasya. Wear white or black as appropriate.",
      "Go to a river, tank, or use water at home for the Tarpan ritual.",
      "Face south (the direction of Yama, lord of ancestors) and pour water from cupped hands three times for each ancestor.",
      "Call each ancestor by name: 'To [Name], may this water reach you. May you be satisfied. May you bless our family.'",
      "Offer black sesame seeds, barley (jau), and kush grass mixed in the Tarpan water.",
      "Offer pind daan — rice or wheat flour balls mixed with sesame and milk — for ancestors.",
      "Donate food, clothing, and charity to Brahmins or the poor in the name of ancestors.",
      "Avoid eating non-vegetarian food and fast or eat only sattvic food on Amavasya.",
    ],
    fastingRules: [
      "Full fast or fruit fast on Amavasya — perform Tarpan before eating anything.",
      "Strictly no non-vegetarian food on Amavasya — this disrespects the ancestors.",
      "No alcohol or tamasic items on this day.",
      "Do not cut hair or nails on Amavasya.",
      "Avoid auspicious events (weddings, house-warming) on Amavasya.",
    ],
    benefits: [
      "Satisfies departed ancestors and frees them from unfulfilled desires.",
      "Removes ancestral curses (Pitru Dosha) from the family line.",
      "Clears karmic blockages passed down through ancestral lineage.",
      "Brings peace, prosperity, and harmony to the entire family.",
      "The devotee accumulates immense merit (punya) from honoring the ancestors.",
      "Ensures the devotee's own soul will be remembered and honored after death.",
    ],
    mantra: {
      sanskrit: "ॐ पितृभ्यो नमः",
      meaning:
        "Om Pitribhyo Namah — Salutations to the ancestors. May they be satisfied, liberated, and at peace.",
    },
  },
  {
    id: "karva-chauth",
    name: "Karva Chauth",
    hindiName: "करवा चौथ",
    deity: "Lord Shiva, Parvati, Kartikeya & the Moon",
    frequency: "annual",
    timing:
      "Kartik Krishna Chaturthi — October/November. Observed by married women for their husbands' long life.",
    katha:
      "Karva Chauth is observed by married Hindu women — a fast from sunrise to moonrise on the fourth day (Chaturthi) of the dark fortnight of Kartik month. The story of Veeravati: On her first Karva Chauth after marriage, Veeravati was observing the strict fast at her parents' home. By evening she was faint with hunger and thirst. Her seven loving brothers, unable to bear her condition, tricked her by creating a false 'moon' with a lamp behind a sieve in a tree. Veeravati broke her fast looking at the false moon. Immediately, terrible news came: her husband had died. She wept and prayed intensely. Goddess Parvati appeared to her and explained that she had broken her fast prematurely because of the trick. Parvati told her: 'Observe Karva Chauth again next year with complete adherence — do not break the fast until you see the real moon.' Veeravati, through her sincere devotion, revived her husband. The story teaches that the power of a wife's devoted prayer and fast for her husband is real and powerful in the cosmic order. Parvati herself, who fasted intensely (as Brahmacharini) to win Shiva as her husband, is the presiding goddess of this vrat.",
    vidhi: [
      "Begin the fast before sunrise with Sargi — a meal prepared by the mother-in-law before dawn.",
      "The fast is nirjala (no water, no food) from sunrise until the moonrise.",
      "Dress in bridal finery — red, maroon, or pink saree, full jewelry, mehndi, and bangles.",
      "In the evening, gather with other women for the Karva Chauth Puja — listen to the Karva Chauth Katha.",
      "Hold the Karva (earthen pot with water) and puja items while the katha is recited.",
      "When the moon rises, first view it through a sieve, then view your husband through the same sieve.",
      "Your husband offers you the first sip of water and first bite of food — breaking the fast.",
      "The earthen Karva (pot) is gifted to the mother-in-law as the concluding act.",
    ],
    fastingRules: [
      "Nirjala fast — no water, no food from sunrise until the moonrise.",
      "The Sargi meal before sunrise is the only food before the fast begins.",
      "Do not break the fast before seeing the moon — this is the core rule.",
      "Wear full bridal makeup and traditional attire throughout the day.",
      "The fast must not be broken until the husband offers the first water and food.",
    ],
    benefits: [
      "The power of a wife's love and prayer is directly channeled for her husband's long life.",
      "Strengthens the marital bond and renews love between husband and wife.",
      "The fast mirrors Parvati's austerities for Shiva — connects to the divine Shiva-Parvati love.",
      "Protects the husband from untimely death and serious illness.",
      "Brings harmony, stability, and deep mutual respect to the marriage.",
      "The husband who receives this devoted love and prayer is deeply blessed.",
    ],
    mantra: {
      sanskrit: "ॐ शिवायै नमः",
      meaning:
        "Om Shivayai Namah — Salutations to Goddess Parvati, the devoted wife, the embodiment of love and strength.",
    },
  },
  {
    id: "hartalika-teej",
    name: "Hartalika Teej",
    hindiName: "हरतालिका तीज",
    deity: "Goddess Parvati & Lord Shiva",
    frequency: "annual",
    timing:
      "Bhadrapada Shukla Tritiya — August/September. The most auspicious fast for women.",
    katha:
      "Hartalika Teej is the most rigorous of all the women's fasts — more demanding even than Karva Chauth. 'Hartalika' literally means 'she who was abducted by a friend.' The story: Parvati, in her previous birth as Himavati (daughter of the Himalayas), had performed extraordinary austerities since childhood to win Shiva as her husband. Her devoted practice included fasting without water and food for months, sleeping on rocks, and withstanding extreme cold and heat. But her father Himavan had already promised her in marriage to Lord Vishnu. Parvati's friend, seeing her anguish, 'abducted' her (Hartalika) and hid her in a dense forest so her father could not complete the marriage arrangements. Hidden in the forest, Parvati made a clay Shiva Lingam with her own hands and worshipped it through the night of Bhadrapada Shukla Tritiya with intense devotion and rigorous fast. Lord Shiva, moved by this extraordinary devotion, appeared to her and promised to marry her. This is why Parvati became Hartalika — the one who was hidden so she could fulfill her dharma. The fast of Hartalika Teej is observed by women in the same spirit of unwavering love and devotion that Parvati showed.",
    vidhi: [
      "The fast begins the evening before (Dwitiya) — take no food after sunset the previous night.",
      "Wake before sunrise on Tritiya, bathe, and wear green or red clothing and full bridal jewelry.",
      "Make clay images of Shiva and Parvati or place their idols on a decorated altar with sand or clay.",
      "Perform 16 rounds of Shodashopachar Puja (16 offerings) to Shiva-Parvati through the day.",
      "Listen to or recite the complete Hartalika Teej Katha from the Shiva Purana.",
      "Observe complete nirjala fast — no food, no water throughout the day and night.",
      "Stay awake the entire night in prayer, bhajans, and singing of Teej songs (special to this day).",
      "Break the fast the next morning (Chaturthi) after puja — offer food to Brahmins first.",
    ],
    fastingRules: [
      "Nirjala fast — absolutely no food or water from the previous evening until the next morning.",
      "Stay awake the entire night — sleeping is not permitted during Hartalika Teej.",
      "Wear full bridal attire, mehndi, sindoor, and all 16 signs of married women (Solah Shringar).",
      "No physical contact with the ground during the fast — sit on a wooden plank or mat.",
      "All puja rituals must be completed in full — no shortcuts permitted.",
    ],
    benefits: [
      "The most powerful fast for a happy, long, and dharmic marriage.",
      "Grants the blessing of Parvati — the supreme model of devoted wifehood.",
      "Protects the husband's life, health, and welfare with the force of Parvati's own austerity.",
      "Fulfills the deepest desires of married women and blesses with children.",
      "Unmarried women who observe this fast receive a husband like Lord Shiva — ideal and devoted.",
      "Parvati herself grants her personal grace to all women who fast with devotion on this day.",
    ],
    mantra: {
      sanskrit: "ॐ उमायै नमः",
      meaning:
        "Om Umayai Namah — Salutations to Uma (Parvati), the divine mother, the devoted wife.",
    },
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    hindiName: "गणेश चतुर्थी",
    deity: "Lord Ganesha — the remover of obstacles",
    frequency: "annual",
    timing:
      "Bhadrapada Shukla Chaturthi — August/September. Ganesha's birthday. 10 days of celebration.",
    katha:
      "Ganesh Chaturthi celebrates the birth of Lord Ganesha — the elephant-headed son of Shiva and Parvati, the remover of obstacles, the lord of beginnings, and the deity who must be worshipped before any auspicious undertaking. The beautiful story of Ganesha's birth: Goddess Parvati, wanting privacy for her bath, created a boy from the turmeric paste from her own body. She breathed life into him and instructed him to guard the entrance — not to let anyone in. Shiva, unaware of this, returned home and found a strange boy blocking his way. The boy, following his mother's instructions faithfully, refused to let Shiva pass. Shiva, not recognizing his own son, beheaded the boy. Parvati was devastated. Shiva, seeing her grief, sent his ganas (divine attendants) to find the first living being they encountered — they found an elephant. Shiva attached the elephant's head to the boy's body and restored his life, declaring him his own son. He also decreed: 'Let this be — all the gods and all people in all the three worlds must worship Ganesha first before any auspicious activity. He who does not worship Ganesha first will have all his ventures fail.' Ganesha became the lord of all beginnings, the remover of obstacles, and the leader of Shiva's ganas.",
    vidhi: [
      "Install a beautiful clay (eco-friendly, not plaster-of-Paris) Ganesha murti at home or in the community.",
      "On Day 1: perform Pranapratishtha (invocation of divine life into the idol) with Vedic mantras.",
      "Daily puja for 1.5, 5, 7, or 10 days: offer modak (his most beloved sweet), durva grass, red flowers, and coconut.",
      "Recite Ganesha Atharvashirsha — the most sacred Ganesha mantra — daily during the celebration.",
      "Listen to Ganesha Katha from the Ganesha Purana and the Mudgala Purana.",
      "Observe fast on Chaturthi day — no grains, only modak and fruits as permitted food.",
      "Perform aarti morning and evening with full family participation — Jai Ganesh Deva.",
      "On the final day, perform Visarjan (immersion) of the idol in water with 'Ganpati Bappa Morya!' celebration.",
    ],
    fastingRules: [
      "Fast on Chaturthi day — no regular grains, only modak, fruits, and sattvic food.",
      "No non-vegetarian food for the entire duration of the Ganesha celebration.",
      "Do NOT look at the moon on Ganesh Chaturthi — according to tradition this causes false accusations.",
      "Avoid non-sattvic activities — maintain purity and devotion throughout the celebration.",
      "Use eco-friendly clay Ganesha idols — plaster-of-Paris pollutes sacred water bodies.",
    ],
    benefits: [
      "Ganesha removes all obstacles from the devotee's life and path.",
      "Grants success in new beginnings — business, education, marriage, and all new ventures.",
      "Bestows intelligence, wisdom, and excellence in studies and creative work.",
      "Brings prosperity and abundance to the household.",
      "The 10-day celebration purifies the entire home with Ganesha's divine presence.",
      "Ganesha's grace is especially powerful for removing bureaucratic and legal obstacles.",
    ],
    mantra: {
      sanskrit: "ॐ गं गणपतये नमः",
      meaning:
        "Om Gam Ganapataye Namah — Salutations to Ganapati, the lord of all ganas, the remover of obstacles.",
    },
  },
  {
    id: "chhath-puja",
    name: "Chhath Puja",
    hindiName: "छठ पूजा",
    deity: "Surya Dev (the Sun God) & Chhathi Maiya",
    frequency: "annual",
    timing:
      "Kartik Shukla Shashthi — October/November. Four days. Worshipping the setting and rising sun.",
    katha:
      "Chhath Puja is one of the most ancient and rigorous of all Hindu observances — a four-day festival dedicated to Surya Dev (the Sun God) and Chhathi Maiya, the sixth form of Durga. The story comes from the Brahma Vaivarta Purana: Once a great king named Priyavrat lost his infant son at birth. In his grief, he went to the banks of a great river. A divine woman appeared — radiant and beautiful — and said: 'I am the sixth manifestation of Durga, the daughter of the Sun. Worship me with the Chhath Vrat. Worship Surya Dev who is the source of all life. Your son will be restored.' The king and queen observed the Chhath Puja with complete sincerity. Their son was restored to life. The four days of Chhath are: 1) Nahay-Khay (bathing and eating), 2) Kharna (fasting and eating prasad in evening), 3) Sandhya Arghya (evening offering to the setting sun), 4) Usha Arghya (morning offering to the rising sun). The offering to the setting sun is unique to Chhath — acknowledging that the sun going down still deserves worship, just as we honor elders even in their declining years.",
    vidhi: [
      "Day 1 — Nahay-Khay: Bathe in a river or sacred water body. Eat only sattvic food prepared with sendha namak.",
      "Day 2 — Kharna: Fast completely throughout the day. In the evening, prepare Kheer (rice pudding with jaggery) and offer it to Surya. Eat this prasad after sunset — this is the last food before the 36-hour nirjala fast.",
      "Day 3 — Sandhya Arghya: Begin the 36-hour nirjala fast. At sunset, go to the river/water body. Offer Arghya (water offering) to the setting sun. Offer thekua (special wheat cookies), sugar cane, seasonal fruits, and coconut.",
      "Day 4 — Usha Arghya: Break the fast at sunrise. Offer Arghya to the rising sun at dawn. Break fast with ginger and jaggery water, then take the blessed prasad.",
      "Throughout: the fasting woman (Vrati) does not sit on a chair but only on the ground or on a mat.",
      "The bamboo baskets (Soop) filled with offering items are carried on the head to the ghat.",
      "The entire family participates in preparing the offerings together — it is a deeply communal festival.",
    ],
    fastingRules: [
      "36-hour nirjala fast from Day 2 evening (Kharna) to Day 4 sunrise — no water, no food.",
      "No non-vegetarian food for all four days.",
      "Only sendha namak (rock salt) throughout the four days.",
      "No garlic, onion, or tamasic food.",
      "The fasting woman (Vrati) maintains absolute physical and mental purity throughout.",
      "No sleeping on a bed — sleep on a single mat on the ground throughout the four days.",
    ],
    benefits: [
      "The Sun is the direct source of all life energy — his worship grants health, vitality, and longevity.",
      "Cures serious illnesses and restores health to sick family members.",
      "Blesses children with health, intelligence, and long life.",
      "Grants prosperity, career success, and social respect.",
      "Purifies the entire family — generations before and after — through the Vrati's sincere observance.",
      "The 36-hour nirjala fast combined with water worship is one of the most powerful purifications in all of Hindu tradition.",
    ],
    mantra: {
      sanskrit: "ॐ सूर्याय नमः",
      meaning:
        "Om Suryaya Namah — Salutations to Surya, the sun god, the source of all light and life.",
    },
  },
  {
    id: "anant-chaturdashi",
    name: "Anant Chaturdashi",
    hindiName: "अनन्त चतुर्दशी",
    deity: "Lord Vishnu — the Ananta (infinite) form",
    frequency: "annual",
    timing:
      "Bhadrapada Shukla Chaturdashi — August/September. The day of Ganesha Visarjan and the conclusion of Ganesh Chaturthi.",
    katha:
      "Anant Chaturdashi is dedicated to Lord Vishnu in his Ananta form — infinite, beginningless, endless. The story is told by Krishna himself to Yudhishthira in the Mahabharata: Once the Pandavas were suffering greatly after losing their kingdom in the dice game. Krishna came to comfort them. Yudhishthira asked: 'O Krishna, how do we overcome this terrible suffering? We have lost everything — kingdom, wealth, honor.' Krishna narrated the story of the Anant Vrat: King Sumanta had observed the Anant Vrat but after acquiring wealth, he stopped. Gradually all his wealth vanished, his daughter was widowed, and misery descended on the family. A wise saint appeared and asked: 'Where is your Ananta thread? You abandoned Ananta who never abandons his devotees.' The king wept in repentance and resumed the vrat with sincerity. Lord Vishnu in the form of an old Brahmin appeared and restored all that was lost. Krishna advised Yudhishthira: 'Observe the Anant Vrat — the worship of the Infinite One — and your kingdom will be restored.' The Pandavas observed it. After 14 years, their kingdom was indeed restored and dharma prevailed.",
    vidhi: [
      "Fast on Chaturdashi day — no grains, no regular food until the puja is complete.",
      "Prepare the sacred Ananta thread (Dorak): a thread of 14 knots, coloured yellow or red, represents the 14 worlds Vishnu pervades.",
      "Perform complete Vishnu Chaturdashi Puja with full offerings — yellow flowers, tulsi, fruits, and sweets.",
      "Worship the Ananta thread before tying it — recite the Ananta Shloka: 'Anantam Brahmanam Padam...'",
      "Men tie the Ananta thread on the right wrist; women on the left wrist.",
      "Recite or listen to the Anant Chaturdashi Katha as Krishna narrated it to Yudhishthira.",
      "After the puja, feed Brahmins and the poor with the prasad.",
      "This is also Ganesha Visarjan day — bid farewell to Ganesha with great celebration.",
    ],
    fastingRules: [
      "Fast on Chaturdashi — no grains, only fruits and milk until after the Vishnu puja.",
      "No non-vegetarian food on this day.",
      "Observe brahmacharya throughout the day.",
      "The Ananta thread once tied must be worn for 14 years — one thread tied each year.",
      "After 14 years of tying, the thread is immersed in water in a special concluding ceremony.",
    ],
    benefits: [
      "Lord Vishnu as Ananta — the infinite, eternal one — personally protects the observer.",
      "Grants freedom from debt, poverty, and financial difficulties.",
      "Restores lost prosperity, status, and honor — as it restored the Pandavas' kingdom.",
      "The 14 knots represent 14 years of continuous Vishnu protection.",
      "Grants long life, health, and divine protection to the entire family.",
      "Removes all obstacles from the path of dharma, especially for those in difficult times.",
    ],
    mantra: {
      sanskrit: "ॐ अनन्तं ब्रह्मणे नमः",
      meaning:
        "Om Anantam Brahmaney Namah — Salutations to the Infinite One, to Brahman without end or beginning.",
    },
  },
];
