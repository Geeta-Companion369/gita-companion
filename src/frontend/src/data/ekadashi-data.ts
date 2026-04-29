// ─── All 24 Ekadashis of the Vedic Year ─────────────────────────────────────
// Ordered by month/paksha cycle starting from Margashirsha

export interface Ekadashi {
  id: string;
  name: string;
  devanagari: string;
  paksha: "Shukla" | "Krishna"; // waxing or waning moon
  month: string; // Vedic month
  calendarMonth: string; // Gregorian approximate
  deity: string;
  story: string;
  fastingRules: string;
  fastingType: "nirjala" | "phalahar" | "upvas"; // no-water / fruits-only / standard
  pujaVidhi: string[];
  mantra: string;
  mantraDevanagari: string;
  benefit: string;
  breakFastTiming: string;
  gitaVerse: string;
  specialNote?: string;
}

export const EKADASHI_DATA: Ekadashi[] = [
  {
    id: "utpanna",
    name: "Utpanna Ekadashi",
    devanagari: "उत्पन्ना एकादशी",
    paksha: "Krishna",
    month: "Margashirsha",
    calendarMonth: "Nov / Dec",
    deity: "Lord Vishnu",
    story:
      "This is the very first Ekadashi to ever manifest in creation. In ancient times, a terrible demon named Mura rose to power and terrorised the three worlds. He defeated the demigods and conquered the heavens, driving the gods from their abodes. In desperation, all the demigods led by Lord Indra went to Lord Vishnu for protection. Vishnu agreed to battle Mura on their behalf. An epic war ensued in the celestial realm called Badrivan. Lord Vishnu fought with his divine weapons and mace for thousands of divine years, yet the demon proved extraordinarily resilient. Exhausted from this prolonged cosmic battle, Vishnu withdrew to a mountain cave in Hemavati to rest. As he slept deeply in this cave, a supremely beautiful divine energy — a dazzling young woman — emerged from his own body, born of his concentrated spiritual power. When the demon Mura crept into the cave to kill the sleeping Lord, this divine energy confronted him. She challenged Mura and defeated him in battle, burning him to ashes with her spiritual fire. When Lord Vishnu awoke and saw the slain demon, he was overjoyed. He asked who had performed this great act. The divine energy said, 'I am born of your body, O Lord.' Vishnu was deeply pleased and said: 'You are born on the eleventh day of the lunar fortnight — you shall be known as Ekadashi, my own daughter. Whoever observes a fast on this day and worships you shall be freed from all sins and shall attain liberation. You are as dear to me as my own life.' From that day, Ekadashi became the most sacred fasting day of the Vedic calendar, observed by all devotees of Vishnu across the three worlds.",
    fastingRules:
      "Avoid all grains, lentils, beans, and non-vegetarian food. Phalahar (fruits, milk, nuts, sendha namak) is permitted. The spiritually advanced observe nirjala. No eating at all other than phalahar items. No sleeping in daytime. Night vigil with kirtan is essential.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Wake before sunrise, preferably at Brahma Muhurta (4:24–5:12 AM). Begin in complete silence and gratitude.",
      "Bathe with clean water, chanting 'Om Namo Bhagavate Vasudevaya' continuously. Apply sandal tilak on forehead.",
      "Set up a Vishnu idol or framed image on a clean altar. Place yellow flowers, fresh tulsi leaves, and light a pure ghee diya.",
      "Perform sankalpa — hold water in cupped hands and announce your vow: 'I observe Utpanna Ekadashi fast for Lord Vishnu's grace and liberation.'",
      "Recite the Utpanna Ekadashi Katha from the Brahma-Vaivarta Purana aloud or listen to it.",
      "Chant 'Om Namo Bhagavate Vasudevaya' 108 times using a tulsi or rudraksha mala.",
      "Offer naivedya (fruits, coconut, sugar) to Vishnu with full devotion — do not eat before offering.",
      "Perform aarti at sunrise, noon, and sunset — three times during the Ekadashi day.",
      "Stay awake as long as possible through the night in prayer, kirtan, or reading the Bhagavata Purana.",
      "On Dvadashi morning, offer puja first, then break fast after sunrise with light sattvic food.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Removes all sins accumulated over many lifetimes. Grants liberation (moksha). Equal in merit to performing a thousand Ashwamedha yagnas. As Vishnu named Ekadashi his own daughter, worshipping on this day invites his most direct and personal grace.",
    breakFastTiming:
      "On Dvadashi (12th lunar day) morning after sunrise. Offer puja first, then eat light sattvic food — rice and daal preferred. Do not break fast before sunrise under any circumstances.",
    gitaVerse: "BG 9.22",
    specialNote: "The very first Ekadashi — origin of all Ekadashi worship.",
  },
  {
    id: "mokshada",
    name: "Mokshada Ekadashi",
    devanagari: "मोक्षदा एकादशी",
    paksha: "Shukla",
    month: "Margashirsha",
    calendarMonth: "Nov / Dec",
    deity: "Lord Vishnu — Damodara form",
    story:
      "This Ekadashi holds a double glory: it is both the day of ancestor liberation and the day the Bhagavad Gita itself was spoken. On Gita Jayanti, when Krishna addressed Arjuna on the Kurukshetra battlefield and revealed the eternal wisdom of the Gita, it was the Margashirsha Shukla Ekadashi — this very day. The sacred story of Mokshada Ekadashi tells of King Vaikhanasa who ruled the ancient city of Champaka-nagara. This king was deeply devoted to dharma and the welfare of his subjects. One night he had a terrifying dream — he saw his deceased father suffering horribly in Yamaloka, the realm of the dead, tormented by the messengers of Yama for past sins. The king awoke in great distress. His father's anguished face haunted him day and night. He could not eat or sleep. Seeking relief, he went to the hermitage of the great sage Parvata Muni and described his dream. The sage meditated deeply and then said: 'Your father committed certain grave sins in his past life and is indeed suffering in a lower realm. There is one way to liberate him: observe Mokshada Ekadashi in Margashirsha Shukla Paksha with full devotion and dedicate all its merit entirely to your father. The power of this fast can liberate souls from Yamaloka.' The king returned, observed the fast with complete devotion, performed the prescribed Vishnu puja, and at the conclusion of Dvadashi, he transferred all the accumulated merit to his father with a formal sankalpa. At that moment, his father appeared in a vision — freed from his chains, dressed in divine garments, ascending to Vaikuntha in a divine chariot. He said to his son: 'By your devotion and this Ekadashi's power, I am freed.' This Ekadashi grants liberation not only to the observer but can also liberate ancestors trapped in lower worlds.",
    fastingRules:
      "Full Ekadashi fast. No grains, no beans, no non-veg. Phalahar permitted. Reading the complete Bhagavad Gita aloud on this day multiplies merit beyond measure. This is Gita Jayanti — the birthday of the Gita. Donating a copy of the Gita on this day is among the greatest acts of dharma.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Wake at Brahma Muhurta. Bathe with sesame-infused water — sesame removes impurity and protects the body.",
      "Light 5 ghee diyas before Vishnu's image. Offer tulsi, yellow flowers, and fresh fruits as naivedya.",
      "Perform sankalpa: 'I observe Mokshada Ekadashi and dedicate its merit for the liberation of my ancestors.'",
      "Read or listen to the complete Bhagavad Gita — this is Gita Jayanti, the holiest day for the Gita.",
      "Recite the Vishnu Sahasranama once — all 1000 names of Vishnu bring special blessings today.",
      "In the afternoon, donate a copy of the Gita to someone who will read and study it.",
      "Offer water (tarpan) for ancestors after the evening puja, calling their names and praying for their liberation.",
      "Keep a night vigil with bhajans and japa — stay awake as long as possible.",
      "At dawn on Dvadashi, offer final puja and formally transfer all merit to ancestors.",
      "Break fast after sunrise with light sattvic food.",
    ],
    mantra: "Om Sri Krishnaya Namah",
    mantraDevanagari: "ॐ श्री कृष्णाय नमः",
    benefit:
      "Grants moksha (liberation) to the observer and can liberate ancestors suffering in lower realms. The gates of Vaikuntha open for this devotee. As the Gita was spoken on this day, the merit of reading it is multiplied enormously on Mokshada Ekadashi.",
    breakFastTiming:
      "Dvadashi morning after sunrise and morning puja. Light food only — avoid heavy meals on this most sacred day.",
    gitaVerse: "BG 18.70",
    specialNote:
      "Gita Jayanti — the birthday of the Bhagavad Gita. Reading the full Gita is the highest act on this day.",
  },
  {
    id: "saphala",
    name: "Saphala Ekadashi",
    devanagari: "सफला एकादशी",
    paksha: "Krishna",
    month: "Pausha",
    calendarMonth: "Dec / Jan",
    deity: "Lord Vishnu — Narayana form",
    story:
      "This Ekadashi carries the power to make all endeavors fruitful — its very name means 'successful' or 'fruitful.' The story comes from the Brahma-Vaivarta Purana and was narrated by Brahma to the sage Narada. King Mahishmat of the solar dynasty ruled from the great city of Champaka. He had four sons, the eldest of whom, named Lumpaka, was thoroughly depraved. He consumed meat and wine, visited disreputable women, squandered his father's treasury, and mocked the gods and brahmanas. His sins grew so great that his father, unable to bear the disgrace, banished him from the kingdom. Lumpaka took to living in a dense forest, surviving by theft and hunting. He killed animals and birds daily, committing sin upon sin without remorse. One winter, on the Pausha Krishna Ekadashi, the forest was bitter cold. Having found nothing to eat and nowhere to shelter from the freezing wind, Lumpaka lay under a tree shivering through the night. In his misery, he could not sleep, and so he lay awake all night — accidentally completing the Ekadashi night vigil. At dawn on Dvadashi, weak and hollow-bellied, he ate fruits that had fallen from the tree — accidentally breaking his accidental fast with permitted phalahar food. The merit of even this completely unintentional Ekadashi fast and vigil began to purify him. Gradually his mind cleared. A divine voice said: 'Your past sins are being destroyed by the Saphala Ekadashi you have observed.' His heart was transformed. He went to his father, confessed and repented, and was restored to the kingdom. He became a great and righteous king. The message is powerful: even an accidental fast observed without any intention is accepted by Lord Vishnu, because the Ekadashi energy itself purifies whoever comes in its presence.",
    fastingRules:
      "Avoid all grains, lentils, and beans. Fruits, coconut, milk, nuts, and sendha namak are permitted. Since this Ekadashi falls in the cold Pausha month, warm phalahar (dates, sesame sweets, milk) is also permitted. No sleeping in daytime.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Bathe before sunrise and wear saffron or white clean clothing.",
      "Offer coconut, fresh seasonal fruits, supari (betel nut), and fragrant incense to Vishnu.",
      "Light a lamp with pure ghee and offer fragrant white or yellow flowers.",
      "Perform sankalpa and state your specific intention or desired fruit for this Ekadashi.",
      "Recite Vishnu Sahasranama with full concentration — all 1000 names.",
      "Read the Saphala Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "In the afternoon, donate food and warm clothing to the poor — winter charity is especially meritorious.",
      "Stay awake in bhajan through the night.",
      "At Dvadashi morning, break fast after puja.",
    ],
    mantra: "Om Namo Narayanaya",
    mantraDevanagari: "ॐ नमो नारायणाय",
    benefit:
      "Makes all endeavors successful. Destroys great sins. Grants prosperity, fame, and liberation. Named 'Saphala' meaning 'fruitful' — all righteous desires become fruitful. Even accidental observance brings merit.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Offer puja and then take prasad of fruits and light sattvic food.",
    gitaVerse: "BG 18.45",
  },
  {
    id: "putrada-pausha",
    name: "Putrada Ekadashi (Pausha)",
    devanagari: "पुत्रदा एकादशी (पौष)",
    paksha: "Shukla",
    month: "Pausha",
    calendarMonth: "Jan",
    deity: "Lord Vishnu",
    story:
      "King Suketuman ruled the righteous kingdom of Bhadravati. He was loved by his subjects, devoted in dharma, and blessed with a beautiful and faithful queen named Shaibya. Yet despite their many virtues and abundant blessings, they had no child. The palace was empty of the laughter of children. The king's heart was hollow with grief. His lineage would end with him. His ancestors would have no one to perform their Shraddha rites. Night after night, the royal couple prayed with tears. One day they renounced the comforts of the palace and went together into the deep forest to perform austerities. There they met a group of great sages — Vishwamitra, Asita, Kandu, and others — performing their own tapasya. The king bowed before them and tearfully explained his one great sorrow. The sages meditated and then the great Vishwamitra said: 'O King, the Pausha Shukla Ekadashi — called Putrada Ekadashi, the giver of sons — is approaching. Observe this fast with your queen with complete devotion, performing all the prescribed rituals. Lord Vishnu, who is the protector of all families and lineages, will hear your prayer.' The king and queen returned and observed the Putrada Ekadashi with impeccable devotion — they fasted, performed Vishnu puja, donated, and spent the night in prayer. Within one year, the queen conceived, and a noble son was born to them. This son grew up to become a great and dharmic king who continued the family lineage with honor. This Ekadashi is also known as Vaikunta Ekadashi in South India — on this day the gates of Vaikunta are said to be specially open.",
    fastingRules:
      "Strict fast — no grains, no beans, no tamasic food. The nirjala fast on this day is especially meritorious for those seeking children. Even a simple phalahar fast is powerful. Couples should observe this together. Brahmacharya throughout the day is essential.",
    fastingType: "nirjala",
    pujaVidhi: [
      "Rise before 4 AM. Sit in meditation on Lord Vishnu as the protector of families and giver of noble children.",
      "Bathe with panchagavya (five products of the cow) if possible — this purifies completely.",
      "Decorate the Vishnu altar with fresh lotuses and yellow garlands — yellow is the color of Vishnu's blessings.",
      "Offer cooked kheer (sweet rice pudding) as naivedya — Vishnu is especially pleased with this offering.",
      "Both husband and wife should perform puja together, standing side by side.",
      "Read the Bhagavata Purana stories of Vishnu's compassion for devotees who desired children.",
      "Perform sankalpa specifically for the welfare of children and the continuation of righteous lineage.",
      "Those desiring children should fast nirjala and stay awake all night in prayer.",
      "Donate children's clothing, food, and toys to underprivileged children on this day.",
      "On Dvadashi morning, break fast with kheer prasad after puja.",
    ],
    mantra: "Om Vishnave Namah",
    mantraDevanagari: "ॐ विष्णवे नमः",
    benefit:
      "Grants the gift of noble children to those who desire them. Destroys sins of many births. Grants entry to Vaikuntha. The most powerful Ekadashi for liberation — the gates of Vaikuntha are open on this day.",
    breakFastTiming:
      "Dvadashi morning after sunrise and morning prayer. Very auspicious to break with Pancharatna daal or sweet kheer.",
    gitaVerse: "BG 9.20",
    specialNote:
      "Also known as Vaikunta Ekadashi — the gates of Vaikuntha are open on this day.",
  },
  {
    id: "sat-tila",
    name: "Sat-tila Ekadashi",
    devanagari: "षट्तिला एकादशी",
    paksha: "Krishna",
    month: "Magha",
    calendarMonth: "Jan / Feb",
    deity: "Lord Vishnu",
    story:
      "The name 'Sat-tila' means six uses of sesame (til). Sage Dalbhya asked the great sage Pulastya: 'What is the way to atone for the sin of not giving charity, especially not giving food to the needy?' Pulastya replied with this story: There was a woman devotee who was extremely pious in her personal practice — she bathed before sunrise, fasted regularly, and prayed every day without fail. But she had one fatal flaw: she never gave food in charity to anyone. She never fed a Brahmin, never gave grain to the poor, never offered food to any living being. When she died, all her spiritual merit took her to a beautiful, opulent realm — but her house was completely empty of food because she had never given food while alive. She was beautiful and wealthy in the afterlife but perpetually hungry and suffering. Lord Vishnu appeared to her in this state. She begged him for relief. He gave her a pot of sesame seeds, saying: 'In your next birth, observe Sat-tila Ekadashi. Use sesame in six ways. Give sesame in charity to Brahmins. Your past sin of hoarding food will be erased.' The six uses of til (sesame) prescribed on this day are: 1) Bathe with sesame-mixed water. 2) Rub sesame on the body before bathing. 3) Offer sesame in a havan or fire sacrifice. 4) Eat sesame-based foods as your fast-permitted meal. 5) Donate sesame to worthy persons. 6) Pour sesame-mixed water as tarpan for ancestors. All six uses together complete the Sat-tila observance.",
    fastingRules:
      "Avoid grains and beans. Fast with sesame-based phalahar. The six uses of til (sesame) are all prescribed: 1) bathe with til 2) rub til on body 3) offer til in havan 4) eat til 5) donate til 6) pour til water for ancestors. Do not omit the charity aspect — giving sesame to the needy is central to this Ekadashi.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Bathe with sesame seeds mixed in water — this removes all physical and spiritual impurities.",
      "Rub white sesame seeds on the body gently before bathing — this purifies the skin and energy body.",
      "Offer sesame seeds (til) mixed with raw sugar to Vishnu's image with full devotion.",
      "Perform a small havan (fire offering) with sesame seeds and ghee — even a candle flame works symbolically.",
      "Pour sesame-infused water for ancestor tarpan, calling the names of deceased family members.",
      "Donate sesame seeds and sesame-based sweets to Brahmanas and the poor — this is the core action of this Ekadashi.",
      "Eat til-pitha (sesame sweet) or sesame ladoo as your only permitted food.",
      "Recite the Sat-tila Ekadashi Katha from the Skanda Purana.",
      "Spend the evening in Vishnu bhajans and prayers.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Destroys great sins. Removes the sin of speaking falsehood. Grants liberation to ancestors. Bestows great merit of charity. Specifically removes the karmic debt of not giving food and resources to those in need.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Begin with sesame ladoo as prasad, then take regular sattvic food.",
    gitaVerse: "BG 17.20",
  },
  {
    id: "jaya",
    name: "Jaya Ekadashi",
    devanagari: "जया एकादशी",
    paksha: "Shukla",
    month: "Magha",
    calendarMonth: "Feb",
    deity: "Lord Vishnu",
    story:
      "In the celestial paradise of Indra, the heavenly realm called Nandana, there lived two extraordinarily beautiful and talented celestial beings — a gandharva named Malyavan and his wife Pushpavan. They were renowned throughout the three worlds for their exquisite musical abilities and physical beauty. Both were deeply in love, and this passionate attachment — though arising in heaven — was tinged with the mode of passion (rajas) and the desire for physical pleasure that is ultimately binding even in higher realms. One day during a celestial concert before the gods, Malyavan and Pushpavan were so consumed by their infatuation for each other that they sang off-key, missed their timing, and created musical chaos in the celestial performance. This was a grave offense in heaven, where perfection in sacred arts is expected. Indra, the king of the gods, was furious at the disruption of the divine concert. He rose in anger and pronounced a powerful curse: 'You are consumed by passion and delusion! May you descend to the mortal world as terrible, tormented beings — pisachas (flesh-eating spirits) — suffering in a horrible ghostly form until your passion is exhausted.' The two gandharvas fell immediately from their celestial state and found themselves wandering the cold Himalayan forests as hideous, miserable spirits, unable to eat or find comfort, shivering and suffering terribly. Years passed in this wretched existence. Then one winter night — the Jaya Ekadashi, the Shukla Paksha eleventh day of Magha month — the two spirits, utterly exhausted, lay huddled together under a pipal tree all night without food. Cold and sleepless, they accidentally observed the Ekadashi fast and night vigil. As dawn broke on Dvadashi, a divine radiance suddenly surrounded them. Their hideous ghostly forms dissolved. They stood before each other in their original celestial glory — shining, beautiful, free. A divine voice spoke: 'The power of Jaya Ekadashi has burned your karmic bondage. Return to heaven.' They ascended to Indra's paradise, and ever after Malyavan told all celestial beings about the miraculous power of Jaya Ekadashi — the destroyer of the deepest sins of passion and attachment.",
    fastingRules:
      "Full Ekadashi fast. No grains, rice, lentils, or beans. Fruits and milk only. The fast destroys all sins committed in passion and ignorance. Night vigil with satsang, kirtan, and bhajans is especially prescribed. Even accidental observance brings full liberation.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Bathe at sunrise facing east while chanting Vishnu's names — the morning sun direction on this Ekadashi is especially sacred.",
      "Offer white flowers and white clothing or white silk to Vishnu on this day — white represents purity and liberation.",
      "Perform sankalpa (vow) to observe the fast from sunrise to next day sunrise.",
      "Recite the Jaya Ekadashi Katha from the Bhavishya Purana — the story of Malyavan and Pushpavan.",
      "Spend time in satsang — chanting bhajans removes tamasic and rajasic energy from the atmosphere.",
      "Perform complete Vishnu puja with all 16 upacharas in the evening.",
      "Stay awake at night in prayer and devotional songs — night vigil is central to this Ekadashi.",
      "Chant the Hare Krishna Mahamantra continuously throughout the night.",
      "On Dvadashi morning, break fast with Vishnu's prasad after sunrise puja.",
    ],
    mantra: "Om Jai Jagadish Hare",
    mantraDevanagari: "ॐ जय जगदीश हरे",
    benefit:
      "Destroys all sins committed in the mode of passion and ignorance. Frees from ghostly existence. Purifies completely. Even accidental observation brings liberation — as it liberated Malyavan and Pushpavan who observed it unknowingly.",
    breakFastTiming:
      "Dvadashi morning after the Brahma Muhurta prayer. Take prasad of fruits first.",
    gitaVerse: "BG 14.5",
  },
  {
    id: "vijaya",
    name: "Vijaya Ekadashi",
    devanagari: "विजया एकादशी",
    paksha: "Krishna",
    month: "Phalguna",
    calendarMonth: "Feb / Mar",
    deity: "Lord Vishnu — Trivikrama form",
    story:
      "When Lord Rama was about to wage war against the demon king Ravana to rescue his beloved Sita from Lanka, he camped at the ocean shore with his vast army of Vanaras (divine monkey warriors). The crossing of the ocean itself seemed an impossible challenge. The ocean was immeasurably wide, inhabited by terrible sea monsters, and the enemy Lanka sat beyond it fully fortified. The weight of this impossible task pressed on Rama. The renowned sage Bakadalbhya appeared in the camp and approached Lord Rama. Rama bowed with full respect and said: 'O great sage, I am about to wage war against a powerful demon to restore dharma and rescue my wife. Please bless me with the knowledge of how I may secure victory.' The sage smiled gently and said: 'O Rama, the Phalguna Krishna Ekadashi — called Vijaya Ekadashi, the Ekadashi of Victory — is approaching. Observe this fast with Lakshmana, your army, and all the Vanaras. Fill a golden pot with water from the ocean, place five mango leaves, a coconut, and yellow cloth on it, and worship it as Lord Vishnu. Fast completely from grains. Keep vigil through the night. By the power of this Ekadashi, victory is guaranteed.' Lord Rama, Lakshmana, Sugriva, Hanuman, and the entire Vanara army observed the Vijaya Ekadashi fast with complete devotion. The very next day, the construction of the stone bridge across the ocean began, the crossing was completed, and the war commenced. The result is the entire Ramayana — complete and triumphant victory of dharma over adharma. To this day, those who face great life battles observe Vijaya Ekadashi before their most important challenges.",
    fastingRules:
      "Full fast. No grains or beans. Lord Rama himself observed this — how can we be less devoted? Fruits and water only is the ideal. Before any major challenge, undertaking, or battle in life — observe this Ekadashi.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Install a copper or silver pot filled with water — symbolising the cosmic ocean. Place 5 mango leaves and a coconut on the pot.",
      "Offer 5 varieties of leaves, 5 varieties of flowers, and 5 varieties of fruits to Vishnu on this day.",
      "Recite the story of Rama observing this fast from the Brahma-Vaivarta Purana.",
      "Chant 'Ram Ram' or 'Om Ram Ramaya Namah' throughout the day — Rama observed this fast himself.",
      "Perform aarti at both sunrise and sunset with full devotion.",
      "Make a vow of victory for your current 'battle' or major life challenge — state it clearly before Vishnu.",
      "Observe complete night vigil with recitation of the Ramayana.",
      "On Dvadashi morning, make a declaration of victory as you break the fast.",
    ],
    mantra: "Om Ram Ramaya Namah",
    mantraDevanagari: "ॐ राम रामाय नमः",
    benefit:
      "Grants complete victory in all endeavors, battles, and life challenges. What Rama achieved by this fast — crossing the ocean and winning Lanka — this is what awaits the observer. Before any major undertaking in life, this is the most powerful Ekadashi to observe.",
    breakFastTiming:
      "Dvadashi morning. Make a declaration of victory as you break the fast.",
    gitaVerse: "BG 11.33",
    specialNote: "Lord Rama himself observed this fast before the Lanka war.",
  },
  {
    id: "amalaki",
    name: "Amalaki Ekadashi",
    devanagari: "आमलकी एकादशी",
    paksha: "Shukla",
    month: "Phalguna",
    calendarMonth: "Mar",
    deity: "Lord Vishnu with the Amalaki (Amla) tree",
    story:
      "Lord Brahma narrated this story to his son Narada: In the ancient city of Vaidisha, the entire population was deeply devoted to Vishnu. Every year on the Phalguna Shukla Ekadashi, all citizens — from the king to the poorest farmer — would gather together under a magnificent ancient Amla (Indian gooseberry) tree in the royal garden. They would worship Lord Vishnu there, fast together, sing bhajans, and observe the night vigil communally. The Amla tree was considered Vishnu's own sacred abode on earth — it is the most sacred tree among all fruit-bearing trees, having emerged from Vishnu's own tears during creation. One day a forest hunter who had never offered any prayer or worship came to the city to sell game. Hearing the sound of bhajans from the royal garden, he sat under the Amla tree out of curiosity. He did not eat anything that evening because he had sold nothing and had no money. As the night deepened and the citizens sang, prayed, and worshipped, the hunter sat among them in silence. By sunrise, he had accidentally fasted the entire Ekadashi and spent the entire night in the company of devotees and the sound of Vishnu's names. This single night, though completely unintentional, purified him utterly. When he died, Vishnu's own messengers came to take him to the divine realm. He had been liberated by the proximity of devotion, the sacred Amla tree, and the accidental Ekadashi observance. The Amla tree holds Vishnu's presence in a special way — it is sacred to him in all seasons, but especially on this Ekadashi.",
    fastingRules:
      "Fast with amla (Indian gooseberry) as the primary permitted food — it is Vishnu's most sacred fruit. No grains or beans. Amla juice, amla powder, or whole amla fruit is the prescribed fasting food today. Bathe with amla if possible.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Visit or meditate deeply on an Amla (Indian gooseberry) tree — Vishnu dwells specially within it.",
      "Worship the Amla tree with water, kumkum, and flowers — circumambulate it 3 or 7 times.",
      "Offer amla fruit to Vishnu's image — this is his most beloved offering on this specific Ekadashi.",
      "Recite the Amalaki Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "Eat only amla on this day — raw, juiced, or as chutney — this is Vishnu's own prescribed fasting food.",
      "Donate amla trees, amla plants, or amla fruit to others — trees given in donation multiply merit.",
      "Perform Vishnu Sahasranama recitation seated near the Amla tree or its image.",
      "Light a ghee diya under the Amla tree at sunset.",
      "Break fast on Dvadashi morning with amla prasad first.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Completely purifies the observer. Equal to donating 10,000 cows in charity. The Amla tree is Vishnu's dwelling — worshipping it on this day grants his full and direct grace. The merit is said to be greater than performing all pilgrimages combined.",
    breakFastTiming:
      "Dvadashi morning. Break fast with amla prasad first, then regular sattvic food.",
    gitaVerse: "BG 17.14",
  },
  {
    id: "papamochani",
    name: "Papamochani Ekadashi",
    devanagari: "पापमोचनी एकादशी",
    paksha: "Krishna",
    month: "Chaitra",
    calendarMonth: "Mar / Apr",
    deity: "Lord Vishnu — Chitra-ratha form",
    story:
      "In the beautiful divine forest of Chaitraratha — the celestial garden of the gods — the great sage Medhavi was engaged in deep, powerful austerities. He had practiced tapasya for many years and had accumulated enormous spiritual merit. His purity was renowned throughout the three worlds. Kamadeva, the god of love, observed this sage's growing power with alarm, for he knew that extreme spiritual power could threaten his own influence in the world. Kamadeva sent his most beautiful, skilled, and irresistible apsara (celestial dancer) named Manorama to disturb the sage's austerities. Manorama was extraordinarily beautiful and talented. She danced near the sage's hermitage, sang celestial songs, and used all her arts to distract him. Despite his years of practice, Medhavi was not yet fully liberated from the subtlest desire seeds. Gradually, over months, his mind began to waver. Finally, he succumbed to attraction and broke his celibacy. When he returned to his senses after some time and realized what had happened — that his years of accumulated tapasya had been squandered — he was overcome with burning rage and shame. He cursed Manorama: 'You used your beauty as a weapon against my dharma. May you become a hideous yakshini — a malevolent spirit — wandering the world in an ugly form.' Manorama was instantly transformed and fell to earth as a terrible yakshini. She wandered in misery, cursing her fate, until she encountered the great sage Chyavana. He told her: 'The only way to be freed from this curse is to observe Papamochani Ekadashi — the liberator from all sins — with complete devotion and repentance.' She observed the fast with sincere remorse, and was freed from the curse and restored to her divine celestial form. This Ekadashi teaches that no sin — not even the fall of a great sage — is too great for Vishnu to forgive.",
    fastingRules:
      "Full fast. No grains, no beans. Fruits, milk, and nuts permitted. This Ekadashi specifically removes the sins of sexual misconduct, breaking sacred vows, and the sin of causing someone else to fall from dharma. Sincere repentance combined with this fast is extraordinarily powerful.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Bathe in a sacred river or add Ganga water to your bath — physical purification accompanies spiritual purification today.",
      "Offer lotus flowers and red flowers to Vishnu — red represents the burning away of sin.",
      "Recite the Papamochani Ekadashi Katha from the Brahma-Vaivarta Purana with sincere heart.",
      "Confess your most deeply held sins in prayer — speak them aloud or write them. Vishnu hears and releases.",
      "Observe complete silence (mauna) for as long as possible during the fast — silence conserves spiritual energy.",
      "Donate red cloth and sweet foods to Brahmanas — red cloth symbolizes the burning of sinful tendencies.",
      "Recite Vishnu Sahasranama focusing especially on names meaning 'Purifier' and 'Destroyer of Sins.'",
      "Perform a final aarti at night with deep gratitude for being freed from the burden of past sins.",
      "Break fast on Dvadashi morning with a prayer of gratitude and freshness.",
    ],
    mantra: "Om Papamochanaye Namah Vishnavey",
    mantraDevanagari: "ॐ पापमोचनाय नमः विष्णवे",
    benefit:
      "Destroys the greatest sins — even brahmahatya (killing a brahmin), breaking sacred vows, and sins of passion. Named 'Papamochani' — the liberator from sin. The sincerest repentance combined with this fast wipes clean even the heaviest karmic slate.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Start with a simple prayer of gratitude for the liberation from the past.",
    gitaVerse: "BG 18.66",
  },
  {
    id: "kamada",
    name: "Kamada Ekadashi",
    devanagari: "कामदा एकादशी",
    paksha: "Shukla",
    month: "Chaitra",
    calendarMonth: "Apr",
    deity: "Lord Vishnu — Kamanaprasad form",
    story:
      "In the beautiful city of Ratnapura, there lived two gandharvas — Lalit and his devoted wife Lalita. They were deeply and purely in love, faithful and inseparable. Unlike many celestial beings caught in superficial infatuation, their love was deep and genuine. One day Lalit was summoned to perform music before the king of the gandharvas. But so great was his longing for his wife Lalita that his mind wandered during the performance. He missed notes, lost rhythm, and his music became discordant. The gandharva king, a powerful being named Punnaka, was infuriated by this failure during a royal performance. He rose in fury and declared: 'Your mind is enslaved by desire for your wife. May you become a serpent and crawl the earth as a symbol of what desire does to the mind and heart.' Lalit was instantly transformed into a massive, fearsome serpent and fell to earth. Lalita, devastated, followed him to earth. She searched desperately for a way to free her husband, wandering from sage to sage, from pilgrimage site to pilgrimage site. Finally she came to the sage Vishwamitra, who told her: 'Chaitra Shukla Ekadashi — called Kamada Ekadashi, the fulfiller of desires — is approaching. Observe this fast with complete devotion for Lord Vishnu. Perform all prescribed rituals. Then, before Vishnu's altar, formally transfer all the accumulated spiritual merit of your fast to your husband Lalit. The power of this single Ekadashi, combined with the purity of your love, will free him.' Lalita observed the fast with unwavering devotion. She worshipped Vishnu all day and night. At the conclusion of Dvadashi, she formally transferred the merit to her serpent husband with a prayer. At that moment, with a flash of light, the serpent form dissolved. Lalit stood before her, free and whole, dressed in divine garments. Both ascended to their celestial realm. The story teaches that genuine love combined with divine grace has the power to reverse even a powerful curse.",
    fastingRules:
      "Full fast. No grains or beans. Fruits, milk, and ghee permitted. Observe this fast with a specific righteous desire you wish to offer to Vishnu — the 'kama' (desire) should be for dharmic fulfillment, not mere material enjoyment.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Clearly state your specific desire (kama / wish) to Vishnu at the start of the fast — be specific and honest.",
      "Offer yellow flowers, mango leaves, and seasonal fruits to Vishnu with devotion.",
      "Recite the Kamada Ekadashi Katha from the Varaha Purana.",
      "Chant 'Om Kamanaprasaday Namah' 108 times with full concentration.",
      "Write your desire on paper and place it at Vishnu's feet during puja — let Vishnu hold it.",
      "Perform full Vishnu puja with all 16 upacharas in the evening.",
      "Observe night vigil with bhajans and mantra chanting.",
      "On Dvadashi morning, express deep gratitude — Vishnu already knows your heart and has acted.",
    ],
    mantra: "Om Kamanaprasaday Namah",
    mantraDevanagari: "ॐ कामनाप्रसादाय नमः",
    benefit:
      "Fulfills all righteous desires. Named 'Kamada' — the fulfiller of desires. Removes even the sin of brahmahatya. Grants what is best and most dharmic for the devotee's life journey.",
    breakFastTiming: "Dvadashi morning after sunrise and morning puja.",
    gitaVerse: "BG 7.22",
  },
  {
    id: "varuthini",
    name: "Varuthini Ekadashi",
    devanagari: "वरूथिनी एकादशी",
    paksha: "Krishna",
    month: "Vaishakha",
    calendarMonth: "Apr / May",
    deity: "Lord Vishnu — Trivikrama / Vamana form",
    story:
      "King Mandhata was one of the greatest kings of the solar dynasty — renowned for his extraordinary valor, wisdom, and devotion to dharma. His kingdom was prosperous, his subjects happy, and dharma flourished in all directions of his realm. Yet despite all his achievements, King Mandhata felt a deep spiritual longing — he knew that all worldly attainments are temporary and that only liberation (moksha) is permanent. He approached the great sage Vasishtha and asked: 'O great sage, of all the vows and fasts that a man can observe, which gives the most merit for liberation?' Vasishtha thought for a moment and then said: 'O King, I will tell you about Varuthini Ekadashi — the Ekadashi that is the protector of all devotees. The merit of donating ten thousand cows equals the merit of observing this single Ekadashi fast. The merit of donating one million cows equals observing it with full nirjala. The merit of performing ten horse sacrifices (Ashwamedha yagnas) is less than the merit of staying awake the entire Ekadashi night. Whoever observes this fast is freed from the cycle of birth and death and attains liberation. Even if a man has been sinful his entire life, this one Ekadashi, observed in old age, can grant him moksha.' King Mandhata was astonished by this immense power. He observed Varuthini Ekadashi with perfect devotion — fasting, staying awake, performing puja, and giving in charity. At the end of his life, he attained complete liberation and ascended to Vishnu's eternal abode. The name 'Varuthini' means 'the protector' — this Ekadashi protects the observer from all material suffering.",
    fastingRules:
      "Full fast. Strictly no eating of any grains on this day under any circumstances. No gambling, no unnecessary speech, no tamasic activities whatsoever. Brahmacharya must be strictly observed. Avoid all material entertainment. Maximize prayer time.",
    fastingType: "upvas",
    pujaVidhi: [
      "Rise before sunrise and bathe in cold water while meditating continuously on Vishnu.",
      "Do not eat grains under any circumstances on this day — this is absolute.",
      "Offer a pure ghee lamp to Vishnu in the morning and keep it burning throughout the day and night.",
      "Recite the Mandhata story from the Bhavishya Purana with full concentration.",
      "In the afternoon, donate gold, sesame, or food to a worthy brahmana or sadhu.",
      "Perform complete Vishnu Sahasranama recitation in the evening.",
      "Attempt nirjala for maximum merit — even partial nirjala brings immense benefit.",
      "Stay awake the entire night in prayer, japa, and listening to Vishnu's glories.",
      "On Dvadashi morning, perform puja, then break fast. Rice may be eaten today.",
    ],
    mantra: "Om Trivikramaay Namah",
    mantraDevanagari: "ॐ त्रिविक्रमाय नमः",
    benefit:
      "Grants liberation. Equal to donating ten thousand cows in charity. Protects from all material sufferings. Named 'Varuthini' — the protector of all who observe her.",
    breakFastTiming:
      "Dvadashi morning after sunrise and Vishnu puja. Rice may be eaten as the first grain.",
    gitaVerse: "BG 4.11",
  },
  {
    id: "mohini",
    name: "Mohini Ekadashi",
    devanagari: "मोहिनी एकादशी",
    paksha: "Shukla",
    month: "Vaishakha",
    calendarMonth: "May",
    deity: "Lord Vishnu — Mohini form",
    story:
      "In the city of Bhadravati, there lived a rich merchant named Dhanpala who was devoted to Vishnu and generous to Brahmins and the poor. He had five sons, four of whom were noble and virtuous. But the youngest son, Dhanpal junior, was completely corrupted by bad company. He spent his father's money on drink, gambling, and vice. He disrespected elders, avoided religious duties, and dragged the family name through dishonor. The father, his heart broken, tried everything — gentle counsel, stern rebuke, threats of disinheritance — nothing worked. In desperation, the elderly merchant prayed to Vishnu in tears. A vision came: Vishnu appeared and said, 'Take your son to observe Mohini Ekadashi. This fast destroys the deepest delusion (moha) — the confusion created by maya that makes the destructive seem attractive and the sacred seem dull.' The merchant somehow persuaded his wayward son to observe the fast, even half-heartedly. But the power of the Ekadashi itself began to work. As the young man sat in the silence of the fast, without his usual distractions, a clarity began to arise. He felt, for the first time, the hollowness of his lifestyle. The delusion (moha) that had made vice seem attractive and family and dharma seem tiresome — began to dissolve. By the end of the Ekadashi, he was a transformed man. The confusion in his mind had cleared like morning fog burned away by the sun. He went to his father, prostrated, and began a completely reformed life. The story teaches that Mohini Ekadashi dissolves moha — the most fundamental form of delusion created by maya — the spell that makes us see the unreal as real and the real as unreal.",
    fastingRules:
      "Full fast. No grains or beans. This Ekadashi specifically addresses the confusion, bad habits, and delusion created by maya. Mental clarity and contemplation are the focus. Avoid all forms of entertainment and distraction.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Meditate at dawn on Vishnu's Mohini form — supremely beautiful, serene, and all-knowing.",
      "Offer fragrant jasmine flowers, which represent clarity of mind and pure devotion.",
      "Recite the Mohini Ekadashi Katha from the Skanda Purana.",
      "Contemplate deeply: 'What illusions am I holding? What wrong habits bind me? What do I mistake for real?'",
      "Chant the Hare Krishna Mahamantra 3 rounds — it directly destroys maya from the roots.",
      "Write one habit or delusion you wish to release on paper. Offer it before Vishnu. Let it go.",
      "Perform complete Vishnu puja with incense, flowers, fruits, and aarti.",
      "Spend the night in silence and self-inquiry — let the clarity deepen.",
      "On Dvadashi morning, break fast with a glass of fresh water and a moment of renewed clarity.",
    ],
    mantra: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
    mantraDevanagari:
      "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
    benefit:
      "Destroys all confusion, delusion, and wrong habits created by maya. Grants mental clarity, spiritual focus, and liberation from addictive tendencies. Frees from the fundamental delusion (moha) that is the root of all suffering.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Start with a glass of fresh water and a moment of clarity — the delusion has been burned away.",
    gitaVerse: "BG 7.14",
  },
  {
    id: "apara",
    name: "Apara Ekadashi",
    devanagari: "अपरा एकादशी",
    paksha: "Krishna",
    month: "Jyeshtha",
    calendarMonth: "May / Jun",
    deity: "Lord Vishnu — Trivikrama form",
    story:
      "King Mahidhwaja was a noble and righteous king who had a younger brother named Vajradhwaja — greedy, selfish, and evil at heart. Consumed by envy of his brother's good name and virtue, Vajradhwaja secretly murdered King Mahidhwaja in the forest and buried his body under a pipal tree. The king's tormented ghost haunted the pipal tree, unable to pass to the next realm because of the violent, unjust death. The ghost was wrathful and terrified all who came near the tree. The area around the tree became desolate and frightening. The holy sage Dhaumya came to that forest on his wandering pilgrimage. He saw the restless ghost hovering near the tree and approached it with compassion. With his spiritual vision, Dhaumya understood the king's unjust death. He said to the ghost: 'O King, your suffering arises from an unjust death at a traitor's hands. You are trapped between worlds. But Lord Vishnu is the liberator of all — even those killed by treachery. Observe Apara Ekadashi with me. Transfer the merit of the fast to your own soul for liberation.' The ghost agreed, and with Dhaumya's guidance, performed the Ekadashi fast — fasting completely, praying, and performing the prescribed rituals. The accumulated merit freed the king's soul from the pipal tree. He was freed from his ghostly existence and ascended to the realm of merit. The name 'Apara' means inexhaustible — the merit of this Ekadashi never diminishes, no matter how many receive it.",
    fastingRules:
      "Full fast. No grains or beans. This Ekadashi removes the sin of false testimony — making false statements about holy people, sacred texts, or God. Those who have spoken falsely about the divine should observe this fast with special repentance.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Bathe and wear clean white or yellow clothing — purity of dress matches purity of intention.",
      "Offer fresh mango fruit, mango leaves, and yellow flowers to Vishnu.",
      "Recite the Apara Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "If you have spoken falsely about sacred things or holy persons, pray specifically for forgiveness.",
      "Donate books of sacred knowledge to libraries, temples, or individuals who will read them.",
      "Chant 'Om Namo Bhagavate Vasudevaya' throughout the day with each breath.",
      "Perform tarpan for any departed souls in your family who died under difficult circumstances.",
      "Spend the evening in satsang or reading the Bhagavata Purana.",
      "Break fast on Dvadashi morning after sunrise and morning prayer.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Destroys the sin of speaking falsely about sacred subjects, sages, and holy places. Frees from ghostly existence. Named 'Apara' — inexhaustible, limitless merit. Liberates souls trapped between worlds.",
    breakFastTiming: "Dvadashi morning after sunrise and morning prayer.",
    gitaVerse: "BG 16.24",
  },
  {
    id: "nirjala",
    name: "Nirjala Ekadashi",
    devanagari: "निर्जला एकादशी",
    paksha: "Shukla",
    month: "Jyeshtha",
    calendarMonth: "Jun",
    deity: "Lord Vishnu — Most powerful of all days",
    story:
      "Bhima, the second of the five Pandava brothers, was legendary for two things above all others: his immense physical strength and his insatiable appetite. He could consume more food than a thousand men. His stomach, it was said, was inhabited by the deity of fire (Vrikodara), which required constant feeding. While his brothers Yudhishthira, Arjuna, Nakula, and Sahadeva, and their wife Draupadi, all observed every Ekadashi throughout the year — twenty-four fasts — Bhima simply could not. His hunger was overwhelming. He tried once or twice but felt he would die from the starvation. He went to the great sage Vyasa, who was also his grandfather, and placed his problem honestly: 'O Grandfather, I know the importance of Ekadashi fasting. I know that those who do not fast accumulate sin and miss liberation. But I have the fire god in my belly — I cannot survive without eating. I have tried and failed. Is there any solution? Is there any single fast I can observe that will give me the merit of all twenty-four Ekadashis combined?' Vyasa looked at this powerful warrior with deep compassion and smiled. 'Bhima, you are fortunate to ask this question honestly. Yes, there is one such fast. It is Jyeshtha Shukla Ekadashi. On this day, in the summer month of Jyeshtha when the sun is hottest and water is most precious, observe a complete nirjala fast — not a drop of water, not a grain of food, for the full twenty-four hours of Ekadashi. Not even for medicine unless absolutely necessary. The merit of this single nirjala fast is equal to observing all twenty-four Ekadashis of the year combined. I swear this to you by the Vedas.' Bhima was struck. He steeled himself and observed this single fast with iron determination. He fasted completely nirjala through the entire day and night. And from that day, the Jyeshtha Shukla Ekadashi came to be called Bhima Ekadashi or Pandava Nirjala Ekadashi — the mightiest fast of the Vedic year.",
    fastingRules:
      "NIRJALA — absolutely no water, no food for the entire 24 hours of Ekadashi. Not even a drop of water. Only water taken accidentally for medicine is permitted. This is the one Ekadashi where the nirjala rule is absolute and non-negotiable. If you cannot do full nirjala due to health — observe with water only, strictly no food. No sleeping in daytime. Night vigil is mandatory.",
    fastingType: "nirjala",
    pujaVidhi: [
      "Wake before 4 AM. Do achaman (ritual sipping of three drops of water) before the nirjala fast begins — this is permitted before the fast starts.",
      "Resolve clearly and aloud before Vishnu's image: 'I will not take water or food for the next 24 hours for Lord Vishnu's grace and the merit of all 24 Ekadashis.'",
      "Offer water, fresh fruits, and cool drinks to Vishnu — though you cannot drink, offer the cooling freshness to him symbolically.",
      "Donate pitchers of water, fruit juices, sherbat, and food to others throughout the day while you fast — feeding others while you fast multiplies merit.",
      "Recite the full Vishnu Sahasranama — all 1,000 names — at least once, ideally three times.",
      "Perform complete Vishnu puja with all 16 upacharas in the morning and evening.",
      "Stay awake the entire night in Vishnu bhajans — Vishnu specially blesses those who stay awake the entire night.",
      "Read the Bhagavata Purana chapters describing Vishnu's glories throughout the night.",
      "At dawn on Dvadashi, perform morning puja before breaking the fast.",
      "Break fast with water ONLY after sunrise — not before sunrise under any circumstances.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Equal to observing ALL 24 Ekadashis of the year combined. The most meritorious Ekadashi fast in the entire Vedic calendar. Grants liberation, all desires, and Vishnu's complete and direct grace. Even Bhima, the mightiest Pandava, could not eat on this day.",
    breakFastTiming:
      "Dvadashi morning STRICTLY after sunrise. Do not break fast before sunrise under any circumstances. Drink water first, then take light sattvic prasad. Avoid heavy meals immediately.",
    gitaVerse: "BG 2.14",
    specialNote:
      "The most powerful Ekadashi. One nirjala fast = merit of all 24 Ekadashis combined. Even Bhima, the mightiest Pandava, observed this. Also called Bhima Ekadashi.",
  },
  {
    id: "yogini",
    name: "Yogini Ekadashi",
    devanagari: "योगिनी एकादशी",
    paksha: "Krishna",
    month: "Ashadha",
    calendarMonth: "Jun / Jul",
    deity: "Lord Vishnu",
    story:
      "In the glorious heavenly realm, there lived a devoted servant of the god of wealth, Kubera. This servant's name was Hemamali, and his duty was sacred and beloved — every morning he was to gather fresh divine lotus flowers from the divine pond and bring them to Kubera for the daily puja of Lord Shiva. This was not an ordinary duty but a sacred one — the flower offerings were for the great God Shiva himself. For many years Hemamali performed this duty faithfully, waking early, gathering flowers with love, and bringing them to Kubera before the puja time. But one morning, Hemamali lingered too long with his beautiful wife Vishala. He was so enchanted by her that time slipped away. He arrived late to bring the flowers. Meanwhile Kubera waited at the puja altar. Shiva's puja time was passing. The flowers were not there. Kubera was furious at this irresponsible breach of sacred duty. Hemamali finally arrived, disheveled and late, carrying the flowers. Kubera pointed at him in rage: 'You have failed your sacred duty because you were consorting with your wife during puja time. You are unworthy of the heavens. May you descend to earth as a diseased, suffering man, your body covered with painful leprosy, wandering in misery until you understand the importance of sacred duties.' Hemamali fell to earth immediately, his divine body replaced with one ravaged by the terrible disease of leprosy. He wandered in great pain through forests and roads, shunned by all. After years of this suffering, he reached the hermitage of the great sage Markandeya — the sage who had conquered death itself. Markandeya looked at the wretched figure before him with divine compassion. He said: 'You suffer because of negligence in sacred duty. But Lord Vishnu is infinitely compassionate. Observe Yogini Ekadashi — the Ashadha Krishna Ekadashi — with complete devotion and prayer for healing. The merit of this fast equals feeding 88,000 Brahmanas. It will cure your disease and free you from this curse.' Hemamali observed the fast with unwavering faith. The leprosy healed. His divine form was restored. He ascended back to the heavens. This Ekadashi has special healing power for physical disease and suffering.",
    fastingRules:
      "Full fast. No grains or beans. This Ekadashi has specific healing power for physical disease and suffering. Those who are ill should observe this fast with special prayer for healing. Donate medicine and medical care on this day.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Bathe with clean water and pray specifically for health and healing — both for yourself and others who are ill.",
      "Offer white and yellow flowers to Vishnu — white for purity, yellow for healing energy.",
      "Recite the Yogini Ekadashi Katha from the Skanda Purana with full faith in healing.",
      "If you are suffering from any illness, make this fast specifically a prayer for healing.",
      "Chant Vishnu Sahasranama focusing on the names that mean 'Healer,' 'Protector,' and 'Remover of Disease.'",
      "Donate medicine, medical aid, or funds for healthcare to those who cannot afford it.",
      "Perform aarti in the evening with camphor flame — camphor is associated with purification of disease.",
      "Observe complete celibacy and fast from all grains.",
      "Break fast with healing prasad — turmeric milk or amla juice — on Dvadashi morning.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Heals disease and physical suffering. Frees from curses. Grants the merit of feeding 88,000 Brahmanas. Removes karma of negligence in devotional duties. Has specific power for physical healing and restoration.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Take healing prasad — turmeric milk or amla juice — as the first item.",
    gitaVerse: "BG 2.45",
  },
  {
    id: "devshayani",
    name: "Devshayani / Harishayani Ekadashi",
    devanagari: "देवशयनी / हरिशयनी एकादशी",
    paksha: "Shukla",
    month: "Ashadha",
    calendarMonth: "Jul",
    deity: "Lord Vishnu — entering yogic sleep (Yoga Nidra)",
    story:
      "On this most significant Ekadashi, Lord Vishnu enters his divine Yoga Nidra — the cosmic yogic sleep — on the great serpent Ananta Shesha in the ocean of milk (Kshira Sagara). He will remain in this divine rest for four months — the sacred period called Chaturmas, literally 'four months.' This is one of the most significant events in the Vedic cosmic calendar. The Skanda Purana explains this cosmic event: when the monsoon rains come and the earth is soaked, when all paths become muddy and impassable, when insects and small creatures swarm everywhere, Lord Vishnu enters his rest. During Chaturmas, no auspicious events — marriages, thread ceremonies (Upanayana), house-warmings, or other celebrations — should be conducted. The Brahma-Vaivarta Purana describes that during these four months, the entire creative power of Vishnu recedes into a subtle state. The world continues to run by the momentum already given, but the direct sustaining presence of Vishnu shifts inward. For devotees, this is the most spiritually concentrated period of the year — when the world's pace slows and inner practice deepens. The king of Saurashtradesh, Mandalika, once asked the sage Kaundinya about Chaturmas. The sage explained: 'When Vishnu sleeps, the creative power rests. This is not absence — it is the deepest concentration. Like a great yogi who withdraws his senses in samadhi still maintains complete inner awareness, so Vishnu maintains cosmic order in his sleep. For devotees, this is the time to intensify their own inner practice, for the whole world's spiritual atmosphere turns inward.' On this Ekadashi, devotees take Chaturmas vows — commitments for the four months — such as giving up certain foods, waking earlier, reading the Bhagavata Purana, increasing japa, or serving in temples.",
    fastingRules:
      "Full Ekadashi fast. Chaturmas begins after this day. Devotees take special vows for the four months ahead: some resolve to eat only once a day, some give up specific foods (eggplant, certain vegetables, sweets), some intensify their spiritual practice significantly.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Perform the Devshayani puja — place Vishnu's idol in a decorated bed of fresh flowers, symbolizing his divine sleep.",
      "Recite the Vishnu Yoga Nidra mantra: 'As you rest, Lord, may the world remain in dharma. Protect us with your sleeping grace.'",
      "Take a formal Chaturmas vow before Vishnu's altar — choose a specific spiritual practice or renunciation for 4 months.",
      "Offer white flowers and fragrant incense — white jasmine and sandalwood are especially appropriate for Vishnu's rest.",
      "Begin reading the Bhagavata Purana from this day — four months of systematic reading completes by Devutthana Ekadashi.",
      "Ring the temple bell clearly and respectfully — to honor Vishnu's transition into divine rest.",
      "Donate food and resources generously at the start of Chaturmas.",
      "Observe night vigil with gentle, meditative bhajans.",
      "On Dvadashi, complete your Chaturmas vow formally and begin its practice.",
    ],
    mantra: "Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Begins the most spiritually potent four months of the year. Grants immense merit. All worship done during Chaturmas is multiplied manifold. The Chaturmas vow taken on this day is especially powerful and accelerates spiritual progress.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Your four-month Chaturmas journey begins from this day.",
    gitaVerse: "BG 3.16",
    specialNote:
      "Chaturmas begins today. No auspicious events for 4 months. Intensify spiritual practice. Begin reading Bhagavata Purana.",
  },
  {
    id: "kamika",
    name: "Kamika Ekadashi",
    devanagari: "कामिका एकादशी",
    paksha: "Krishna",
    month: "Shravana",
    calendarMonth: "Aug",
    deity: "Lord Vishnu with Tulsi Devi",
    story:
      "The great creator god Brahma narrated this Ekadashi story to his beloved son Narada: Once, a man accidentally killed a Brahmin in a moment of uncontrolled anger — the gravest sin in Vedic dharma, called Brahmahatya. The weight of this sin crushed him. He was overcome with guilt so heavy he could barely breathe. He wandered from sage to sage seeking atonement, but none could prescribe a remedy sufficient for this sin. Even the greatest penances seemed inadequate. Finally, a compassionate sage told him: 'There is one Ekadashi whose merit can destroy even Brahmahatya. It is Kamika Ekadashi in the Krishna Paksha of Shravana month. On this day, Lord Vishnu is especially pleased by Tulsi leaf offerings — more pleased than by any other offering on any other day of the year. Even a single Tulsi leaf placed on Vishnu's feet on Kamika Ekadashi earns greater merit than a thousand gold coins, a hundred cows, or a thousand pilgrimages. The Brahma-Vaivarta Purana says: the man who offers Tulsi to Vishnu on Kamika Ekadashi is never touched by Brahmahatya, cow slaughter, gold theft, or any other grave sin.' The man observed the fast, offered Tulsi devotedly throughout the day, and was completely freed from the sin of Brahmahatya. His burden lifted. His soul was clean. Tulsi Devi, the most sacred plant in Sanatan Dharma, is Vishnu's most beloved plant — she was herself a great devotee of Vishnu who was transformed into a sacred plant. Worshipping and offering Tulsi on this day is therefore a double worship — of Vishnu and of this sacred devotee simultaneously.",
    fastingRules:
      "Full fast during Shravana month. Special emphasis on Tulsi leaf offering — Tulsi is considered more dear to Vishnu than any other offering on this day. Offering even a single Tulsi leaf with devotion equals enormous merit.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Gather fresh Tulsi leaves from a Tulsi plant with reverence and the Tulsi picking mantra. Never pluck Tulsi on Ekadashi itself — pluck the evening before.",
      "Offer Tulsi leaves to Vishnu's feet throughout the day — even one leaf with full devotion is more powerful than great wealth on this day.",
      "Recite the Tulsi Stotram and the Tulsi Ashtottara (108 names of Tulsi Devi).",
      "Water the Tulsi plant in the morning and perform Tulsi Puja — circumambulate it 3 times.",
      "Light a diya near the Tulsi plant and keep it burning all day.",
      "Read the Kamika Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "Donate Tulsi plants or seeds to temples, gardens, or neighbors.",
      "Perform full Vishnu puja in the evening with Tulsi garland as the primary offering.",
      "On Dvadashi morning, offer fresh Tulsi to Vishnu before breaking the fast.",
    ],
    mantra: "Om Tulsi Devyai Namah — Om Namo Bhagavate Vasudevaya",
    mantraDevanagari: "ॐ तुलसी देव्यै नमः — ॐ नमो भगवते वासुदेवाय",
    benefit:
      "Removes even Brahmahatya (the gravest sin). The Tulsi offering on this day is more powerful than all other offerings. Grants complete purification from all past sins of any magnitude.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Offer fresh Tulsi to Vishnu before breaking the fast.",
    gitaVerse: "BG 9.26",
    specialNote:
      "Tulsi Devi is especially worshipped. Offer Tulsi to Vishnu — one leaf equals enormous sacrifice on this day.",
  },
  {
    id: "putrada-shravana",
    name: "Putrada Ekadashi (Shravana)",
    devanagari: "पुत्रदा एकादशी (श्रावण)",
    paksha: "Shukla",
    month: "Shravana",
    calendarMonth: "Aug",
    deity: "Lord Vishnu",
    story:
      "Also known as Pavitra Ekadashi, this second Putrada Ekadashi occurs in the holy Shravana month — considered the most spiritually charged month of the Hindu calendar, especially during Chaturmas when all spiritual merit is multiplied. The Bhavishya Purana contains this story: King Suketuman and his queen Shaibya of Bhadravati had been blessed with great kingdom, health, and each other's devoted love. But one thing was missing — children. The couple had tried everything: vows, pilgrimages, donations, prayers. Nothing had resulted in a child. One day during Shravana month, a group of sages led by the sage Shandilya arrived at the court. The king welcomed them with great hospitality and then presented his grief. Shandilya said: 'O King, the Shravana Shukla Ekadashi is approaching. This is also called Putrada Ekadashi — the granter of noble sons. This is distinct from the Pausha Putrada Ekadashi, though both carry the same blessing of noble progeny. Observe this fast together with your queen. Vishnu, the protector of all family lineages, will bless you.' The king and queen fasted together, performed all the prescribed rituals, and within a year a noble son was born. He grew to be a great king, devoted to dharma, and continued the family lineage with honor. During Shravana, all spiritual activity is especially meritorious, making this Ekadashi doubly powerful for granting the gift of noble children.",
    fastingRules:
      "Full fast during sacred Shravana month. No grains or beans. Especially observed by couples desiring children or the welfare of existing children. Brahmacharya throughout the day is essential. The Shravana month multiplies all merit.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Couples should observe this Ekadashi together — joint prayer and fasting multiplies the boon.",
      "Offer fresh lotus flowers and pure cow's milk to Vishnu's image.",
      "Recite the Putrada Ekadashi Katha and the Vishnu Purana sections on Vishnu as protector of families.",
      "Pray specifically for the welfare, health, dharmic character, and long life of children.",
      "Donate children's clothing, books, food, and educational materials to underprivileged children.",
      "Observe brahmacharya (celibacy) throughout the Ekadashi day.",
      "Chant 'Om Vishnave Namah — Putrapraday Namah' 108 times with full concentration.",
      "Observe night vigil with joint family prayers.",
      "On Dvadashi morning, break fast together with sweet kheer prasad.",
    ],
    mantra: "Om Vishnave Namah — Putrapraday Namah",
    mantraDevanagari: "ॐ विष्णवे नमः — पुत्रप्रदाय नमः",
    benefit:
      "Grants the gift of noble children. Brings prosperity and dharma to the family lineage. Grants liberation to ancestors. During the sacred Shravana month, this blessing is especially potent.",
    breakFastTiming:
      "Dvadashi morning. Break fast with sweet rice (kheer) as auspicious prasad.",
    gitaVerse: "BG 10.10",
  },
  {
    id: "aja",
    name: "Aja Ekadashi",
    devanagari: "अजा एकादशी",
    paksha: "Krishna",
    month: "Bhadrapada",
    calendarMonth: "Sep",
    deity: "Lord Vishnu — Hrishikesha form",
    story:
      "King Harishchandra — renowned throughout all the three worlds as the most truthful king who ever lived, the very embodiment of satya (truth) — underwent a series of catastrophic trials engineered by the sage Vishwamitra to test the absolute limits of his truthfulness. Vishwamitra had heard of Harishchandra's reputation and wished to see if any circumstance could make him abandon truth. First, Vishwamitra demanded the king's entire kingdom as dakshina — Harishchandra gave it all without hesitation. Then Vishwamitra demanded more. To pay the debt, Harishchandra was forced to sell his wife Shaibya and his son Rohitas into servitude. Then he himself was sold to become a worker in a cremation ground, collecting fees from grieving families to burn their dead. His life became almost unbearably painful. His son Rohitas died from a snakebite. His wife came to the cremation ground to burn the child, not recognizing her own husband in the dark. Harishchandra, following his duty strictly, was about to demand the cremation fee from this grief-stricken woman when they recognized each other. Even in this final devastating moment, Harishchandra was about to perform his duty. At that moment, the gods descended from heaven, the sage Vishwamitra appeared smiling, and Vishnu himself declared: 'This man is the truest soul in all of creation.' His son was revived, his wife was restored, his kingdom returned. All this suffering came from past sins committed unknowingly — ajnaat paap (unknown sins). The sage Goutama later told him: this Ekadashi — Aja Ekadashi, meaning 'without sin from unknown origins' — is specifically the fast that removes sins we do not even know we have committed, from this life and all past lives.",
    fastingRules:
      "Full fast. No grains or beans. This Ekadashi is especially powerful for removing karmic burdens from past lives and sins we have forgotten or do not know about. Make a specific intention to release all unknown karmic burdens.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Offer white sandalwood paste (chandan) to Vishnu — white symbolizes the purity of truth.",
      "Recite the Harishchandra story from the Markandeya Purana as the Ekadashi Katha.",
      "Make a resolution to speak only truth for the entire Dvadashi day following the fast.",
      "Perform japa of 'Om Hrishikesha Namah' — the name Hrishikesha is specifically associated with this Ekadashi.",
      "Donate generously to a food bank, annadanam, or feed the poor — representing Harishchandra's spirit of giving.",
      "Pray specifically for the removal of unknown sins from all past lives: 'O Vishnu, I release all that I do not know, all karmic weight I carry without understanding.'",
      "Recite the Aja Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "Observe complete truth in all speech throughout this day.",
      "Break fast on Dvadashi morning after sunrise. Observe truth and right speech all day.",
    ],
    mantra: "Om Hrishikeshaay Namah",
    mantraDevanagari: "ॐ हृषीकेशाय नमः",
    benefit:
      "Removes sins committed unknowingly in this and all past lives. Restores what has been lost through dharmic failures. Even as Harishchandra's entire family was restored from calamity — so too the observer is restored to wholeness.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Observe truth and right speech throughout the entire Dvadashi day.",
    gitaVerse: "BG 4.36",
  },
  {
    id: "parivartini",
    name: "Parivartini / Parsva Ekadashi",
    devanagari: "परिवर्तिनी / पार्श्व एकादशी",
    paksha: "Shukla",
    month: "Bhadrapada",
    calendarMonth: "Sep",
    deity: "Lord Vishnu — turning in cosmic sleep",
    story:
      "The great Brahma narrated this story to Narada: During Lord Vishnu's Chaturmas Yoga Nidra, on this Ekadashi — the Bhadrapada Shukla Ekadashi — Vishnu turns from one side to the other in his divine sleep. 'Parivartini' means 'the one who turns.' This symbolic turning has deep cosmic significance: even in his deepest rest, Vishnu remains aware of his devotees, and this turning is his way of looking upon them, checking on the world, renewing his protective awareness. This Ekadashi is also deeply connected to the Vamana avatar story. When the great King Bali performed a hundred horse sacrifices (Ashwamedha yagnas), his spiritual power became so immense that he threatened to conquer even the heavens. The demigods prayed to Vishnu. Vishnu appeared as Vamana — a tiny dwarf Brahmin boy — and went to King Bali's sacrifice. Bali, famous for his generosity, said: 'Ask any boon of me.' Vamana asked for three steps of land. Bali laughed at the small request and agreed. Vamana then expanded to cosmic proportions and covered the entire earth with one step, the entire heavens with the second step, and for the third step, Bali offered his own head — the ultimate act of surrender. Vishnu, infinitely pleased with this surrender, made Bali king of the underworld and himself became Bali's personal doorkeeper. On this Ekadashi, the symbolic 'turning' of Vishnu in his sleep is connected to both these stories — his care for devotees continues even in rest, and his acceptance of complete surrender (as demonstrated by Bali) is celebrated.",
    fastingRules:
      "Full fast during Chaturmas. This is the mid-Chaturmas Ekadashi — renew your Chaturmas vow on this day if you have been inconsistent. Vishnu turns to look at you — make sure you are engaged in practice when he does.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Renew your Chaturmas vow with fresh, strong determination — if you have slipped, this is the day to reset.",
      "Offer the Vamana Puja — a miniature image or picture of the Vamana avatar with flowers and fruits.",
      "Read the Vamana avatar story from the Bhagavata Purana (Canto 8) — this is its special katha.",
      "Perform the symbolic gesture of Vishnu turning — gently turn the Vishnu image from facing one direction to another.",
      "Pray: 'Lord, even in your rest you see me. I am devoted. I am here. Please look upon me with grace.'",
      "Review your Chaturmas vow progress honestly and correct any failures without guilt.",
      "Donate generously — mid-Chaturmas charity is especially meritorious.",
      "Observe night vigil with Vishnu bhajans.",
      "Break fast on Dvadashi after sunrise puja to Vamana.",
    ],
    mantra: "Om Vamanay Namah",
    mantraDevanagari: "ॐ वामनाय नमः",
    benefit:
      "Renews spiritual energy mid-Chaturmas. Purifies those who have lapsed in their vows. Vishnu's 'turning' is a blessing to all his devotees — he looks upon them even in his rest.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Offer puja to Vamana first, then break fast.",
    gitaVerse: "BG 8.14",
    specialNote:
      "Vishnu turns in his cosmic sleep mid-Chaturmas. Renew your spiritual vows. Connected to the Vamana avatar story.",
  },
  {
    id: "indira",
    name: "Indira Ekadashi",
    devanagari: "इंदिरा एकादशी",
    paksha: "Krishna",
    month: "Ashwin",
    calendarMonth: "Oct",
    deity: "Lord Vishnu during Pitru Paksha",
    story:
      "King Indrasena was a great and righteous king who ruled from the city of Mahishmati. He was deeply devoted to Vishnu and spent much of his time in spiritual practice. One night during the auspicious Pitru Paksha — the sacred fortnight dedicated to ancestors — King Indrasena had a vivid and disturbing dream. In his dream, his deceased father appeared in a dark realm, bound in chains, suffering under Yama's domain due to some sin committed unknowingly in his past life. The father looked at his son with desperate, pleading eyes. The king awoke in tears. He spent the rest of the night in prayer. The next morning he went to the great sage Narada, who happened to be visiting the kingdom. Narada looked at the king kindly and said: 'O King, I have just come from Yamaloka. I saw your father there. He is indeed suffering for a past transgression — though it was committed unknowingly. There is a remedy. The Ashwin Krishna Ekadashi falls during Pitru Paksha itself — making it uniquely powerful for ancestor liberation. It is called Indira Ekadashi. Observe this fast with complete devotion. Perform Pitru Tarpan. Offer sesame and food to Brahmanas in your father's name. Then formally transfer all the merit of the Ekadashi to your father. The combined power of the Ekadashi fast and the Pitru Paksha ancestor rituals will liberate your father from Yama's domain and send him directly to Vishnu's realm.' The king followed these instructions precisely. On Dvadashi morning, as he transferred the accumulated merit to his father, the chains in Yamaloka dissolved. His father ascended to Vaikuntha in a divine chariot. This is the only Ekadashi that falls during Pitru Paksha, making it the most powerful ancestor-liberation fast in the Vedic calendar.",
    fastingRules:
      "Full fast during Pitru Paksha. Combine the Ekadashi fast with ancestor rituals (Pitru Tarpan). This is the only Ekadashi that falls during Pitru Paksha — making it extraordinarily powerful for ancestor liberation. No grains or beans.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Perform Pitru Tarpan in the morning — offer water mixed with sesame seeds to deceased ancestors, calling their names.",
      "Recite the names of all known deceased family members and pray specifically for their liberation.",
      "Observe the Ekadashi fast with special focus on ancestor welfare — this is the central intention today.",
      "Donate food, white clothing, and sesame to Brahmanas in the names of deceased ancestors.",
      "Recite the Indira Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "Offer a ghee lamp for the ancestors at sunset — this lights their path in whatever realm they inhabit.",
      "Formally transfer all accumulated merit of the fast to your ancestors with a sankalpa prayer.",
      "Observe night vigil with ancestor prayers and Vishnu bhajans.",
      "Break fast on Dvadashi after sunrise. Offer water to ancestors one final time before eating.",
    ],
    mantra: "Om Pitru Devaya Namah — Om Vishnave Namah",
    mantraDevanagari: "ॐ पितृ देवाय नमः — ॐ विष्णवे नमः",
    benefit:
      "Liberates deceased ancestors from suffering realms. The only Ekadashi during Pitru Paksha — combining it with ancestor rituals creates extraordinary merit for the entire family lineage across generations.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Offer water to ancestors before eating. Give food to Brahmanas on Dvadashi day as well.",
    gitaVerse: "BG 9.25",
    specialNote:
      "Occurs during Pitru Paksha. Uniquely powerful for ancestor liberation. Always combine with Pitru Tarpan (ancestor water offering).",
  },
  {
    id: "papankusha",
    name: "Papankusha Ekadashi",
    devanagari: "पापांकुशा एकादशी",
    paksha: "Shukla",
    month: "Ashwin",
    calendarMonth: "Oct",
    deity: "Lord Vishnu — Padmanabha form",
    story:
      "The king of dharma, Yudhishthira, once asked Lord Krishna himself about the Ekadashi that destroys all accumulated sins without exception. Krishna answered with a rare seriousness: 'This Ekadashi is called Papankusha — the iron hook (ankusha) that seizes and destroys all sins (paap). Just as an elephant driver uses an iron hook to control even the mightiest elephant, this Ekadashi hooks and destroys even the most powerful, deep-rooted sins. O Yudhishthira, hear me well: I swear by truth itself — even the sins of killing a Brahmin, killing a cow, stealing gold, betraying a friend, breaking sacred vows, abandoning one's wife, speaking false accusations, and all other great sins accumulated over a lifetime — all of them are completely burned by this one Ekadashi fast. Even if a man has been sinful his entire life, even if he has done nothing good, even if he has avoided all dharmic duties — if he observes this one Papankusha Ekadashi in old age with full faith, he will attain liberation. Such is the immeasurable grace of Lord Vishnu.' Yudhishthira was astonished: 'Lord, are there no conditions? No minimum level of sincerity?' Krishna smiled: 'No, Yudhishthira. This is Vishnu's unconditional mercy. The only requirement is sincerity in observing the fast and genuineness in calling upon him.' This Ekadashi falls in the beautiful Ashwin Shukla Paksha — the same bright fortnight as Navratri — making the spiritual atmosphere already charged with divine energy. It is one of the most powerful Ekadashis of the entire year.",
    fastingRules:
      "Full fast. No grains or beans. Even water-only fast if health permits. This Ekadashi is the great spiritual cleanser at the end of the auspicious Ashwin month. Sincere confession and repentance combined with the fast creates maximum effect.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Perform complete Vishnu puja with all 16 upacharas (service items) — this Ekadashi deserves the most complete puja of the year.",
      "Offer red lotus flowers — these are among Vishnu's most beloved offerings.",
      "Recite the Papankusha Ekadashi Katha from the Brahma-Vaivarta Purana as told by Krishna to Yudhishthira.",
      "Confess all known sins mentally before Vishnu — speak them clearly in prayer. He hears and accepts.",
      "Donate gold, cows, or land to worthy persons if possible — great charity amplifies this Ekadashi's power.",
      "Observe complete celibacy and silence (mauna) for as much of the day as possible.",
      "Perform Vishnu Sahasranama recitation focusing on names meaning 'Forgiver,' 'Liberator,' and 'Destroyer of Sin.'",
      "Keep a full night vigil with continuous japa.",
      "On Dvadashi morning, break fast with gratitude — the hook of sin has been removed.",
    ],
    mantra: "Om Padmanabhaay Namah",
    mantraDevanagari: "ॐ पद्मनाभाय नमः",
    benefit:
      "Destroys all accumulated sins — even the greatest sins accumulated over an entire lifetime. Named 'Papankusha' — the destroyer of all paap. Grants liberation even to lifelong sinners who call upon Vishnu with genuine faith.",
    breakFastTiming:
      "Dvadashi morning after sunrise. The act of breaking this fast is itself considered an auspicious and sacred moment.",
    gitaVerse: "BG 4.36",
  },
  {
    id: "rama",
    name: "Rama Ekadashi",
    devanagari: "रमा एकादशी",
    paksha: "Krishna",
    month: "Kartika",
    calendarMonth: "Oct / Nov",
    deity: "Lord Vishnu — Hrishikesha form with Lakshmi",
    story:
      "The name 'Rama' in this Ekadashi refers not to Lord Rama but to Lakshmi Devi — Rama is one of her most sacred names, meaning 'she who delights' or 'she who is beautiful and auspicious.' This Ekadashi falls in the Krishna Paksha of Kartika — the most sacred month in the Vedic calendar. The Brahma-Vaivarta Purana tells the story: King Muchukunda was a great Vishnu devotee of the Treta Yuga who observed Rama Ekadashi with complete devotion. The story also mentions a devoted woman named Shyamala who had a husband named Chanchal — an unstable, wayward man who gambled, drank, and kept bad company. Despite his behavior, Shyamala remained devoted to dharma. She observed Rama Ekadashi with such purity and intensity that not only was she liberated but her wayward husband, by the merit she had accumulated and transferred to him, was also purified and eventually attained Vishnu's grace. During Kartika month — which is especially sacred because it falls in Chaturmas when all merit is multiplied — every act of worship, every lamp lit, every fast observed, every donation given is multiplied a thousand times in spiritual value. Observing Ekadashi in Kartika thus carries an extraordinary multiplication of merit. The simultaneous worship of both Vishnu and Lakshmi (Rama) on this day is said to bring both liberation and worldly abundance together.",
    fastingRules:
      "Full fast during the sacred Kartika month — which multiplies all Ekadashi merit a thousandfold. No grains, no beans. Lighting extra diyas is prescribed in Kartika. The combined worship of Vishnu and Lakshmi on this day is especially powerful.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Light extra ghee diyas throughout the house — Kartika diya-daan is among the most meritorious acts of the entire year.",
      "Offer lotus flowers and yellow flowers together to Vishnu and Lakshmi — worship both together today.",
      "Recite the Lakshmi Stotram and Vishnu Sahasranama together in the same puja session.",
      "Read the Rama Ekadashi Katha from the Brahma-Vaivarta Purana.",
      "Donate food, clothing, and resources generously to the poor during Kartika month.",
      "Observe brahmacharya throughout the Kartika month.",
      "Offer Tulsi garland to Vishnu and red flowers to Lakshmi simultaneously.",
      "Observe night vigil with Vishnu-Lakshmi bhajans.",
      "On Dvadashi morning, offer a ghee diya to both Vishnu and Lakshmi before breaking fast.",
    ],
    mantra: "Om Lakshmi-Narayanaya Namah",
    mantraDevanagari: "ॐ लक्ष्मी-नारायणाय नमः",
    benefit:
      "Grants the simultaneous blessings of both Vishnu and Lakshmi — liberation and abundance together. Destroys Brahmahatya and all great sins. In Kartika month, this fast's merit is multiplied a thousandfold beyond the normal Ekadashi merit.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Offer a ghee diya to Vishnu and Lakshmi before breaking fast.",
    gitaVerse: "BG 9.22",
    specialNote:
      "Kartika month multiplies all merit a thousandfold. Rama here refers to Lakshmi Devi. Light extra diyas.",
  },
  {
    id: "devutthana",
    name: "Devutthana / Prabodhini Ekadashi",
    devanagari: "देवउत्थान / प्रबोधिनी एकादशी",
    paksha: "Shukla",
    month: "Kartika",
    calendarMonth: "Nov",
    deity: "Lord Vishnu awakening from Yoga Nidra",
    story:
      "After four months of Chaturmas, the most joyous day of the Vedic calendar arrives — the day Lord Vishnu awakens from his divine Yoga Nidra! 'Prabodhini' means 'the awakening.' 'Devutthana' means 'the rising of God.' The entire universe rejoices. The four months of inwardness, of rain and retreat and intensified practice, come to a triumphant conclusion. The marriage season opens once more. Thread ceremonies, house-warmings, and all auspicious ceremonies may resume. The Tulsi Vivah is performed on this day — the sacred marriage of Tulsi Devi to Lord Vishnu (represented by the Shalagrama stone) — signifying the renewal of all creation's sacred union with the divine. The story of Tulsi Vivah: Vrinda was an extraordinarily devoted wife of the demon king Jalandhar. Her purity and unwavering devotion to her husband was a force field of spiritual protection around Jalandhar — as long as she maintained her chastity and devotion, he could not be defeated in battle. Lord Vishnu, in order to protect the three worlds from Jalandhar's growing tyranny, took the form of Jalandhar and approached Vrinda. Vrinda, deceived, treated this form as her husband, and her chastity was thus broken. This weakened the protective field. The gods then defeated and killed the real Jalandhar. When Vrinda realized what had happened, she was devastated — her husband was dead and she had been deceived. She cursed Vishnu. But then, understanding the higher cosmic necessity, she surrendered and transformed herself into the sacred Tulsi plant. Vishnu, moved by her devotion and accepting her curse, promised to marry her every year on this day — the Devutthana Ekadashi. This is why Tulsi Vivah is performed on this most joyous day each year, and why Tulsi is forever after Vishnu's most beloved plant.",
    fastingRules:
      "Full Ekadashi fast. Chaturmas ends today — this is the most joyous Ekadashi of the year! All Chaturmas vows are concluded. Celebrate with full devotion and gratitude. Perform Tulsi Vivah — the sacred annual marriage ceremony.",
    fastingType: "phalahar",
    pujaVidhi: [
      "Perform the complete Tulsi Vivah puja — dress the Tulsi plant as a bride with ornaments, sindoor, and red dupatta. Place Shalagrama beside it.",
      "Decorate the Tulsi plant beautifully with flowers, garlands, new cloth, and red sindoor — she is the bride of Vishnu.",
      "Recite the complete Tulsi Vivah Katha with joy and devotion — this is a celebratory festival.",
      "Light 108 ghee diyas around the Tulsi plant at sunset — 108 is Vishnu's sacred number.",
      "Ring temple bells enthusiastically and continuously — Vishnu has awakened, the world rejoices!",
      "Perform aarti for Vishnu with great celebration — this is the happiest puja of the year.",
      "Celebrate the conclusion of Chaturmas — your four-month vow is complete. Acknowledge your accomplishment.",
      "Donate generously — Kartika Ekadashi Dvadashi charity multiplies manifold.",
      "On Dvadashi, break your Chaturmas fast with great joy and celebratory sattvic food.",
    ],
    mantra: "Om Tulsi Vivah Namah — Om Prabodhinyai Namah",
    mantraDevanagari: "ॐ तुलसी विवाह नमः — ॐ प्रबोधिन्यै नमः",
    benefit:
      "Vishnu's awakening is the greatest cosmic event of the annual cycle. All auspicious events resume. Tulsi Vivah performed on this day earns the merit of giving away ten million cows in charity. The entire four months of Chaturmas practice reaches its peak here.",
    breakFastTiming:
      "Dvadashi morning after sunrise. Celebrate and eat well — Chaturmas has ended! Great joy is appropriate today.",
    gitaVerse: "BG 10.20",
    specialNote:
      "Vishnu awakens from Chaturmas sleep. Tulsi Vivah is performed. All auspicious events resume. The most joyous Ekadashi of the year.",
  },
];

// ─── Helper: Get approximate next Ekadashi ───────────────────────────────────
export function getDaysToNextEkadashi(): number {
  const today = new Date();
  const seedEkadashi = new Date(2025, 0, 10); // Jan 10 2025
  const daysSinceSeed = Math.floor(
    (today.getTime() - seedEkadashi.getTime()) / (1000 * 60 * 60 * 24),
  );
  const lunarCycleHalf = 14.765;
  const daysIntoHalfCycle = daysSinceSeed % lunarCycleHalf;
  const daysUntilNext = Math.ceil(lunarCycleHalf - daysIntoHalfCycle);
  return daysUntilNext <= 0 ? 1 : daysUntilNext;
}

// ─── Helper: Get approximate upcoming Ekadashi name ──────────────────────────
export function getUpcomingEkadashiName(): string {
  const today = new Date();
  const month = today.getMonth();
  const monthMap: Record<number, string> = {
    0: "Putrada Ekadashi (Pausha)",
    1: "Jaya Ekadashi",
    2: "Amalaki Ekadashi",
    3: "Kamada Ekadashi",
    4: "Mohini Ekadashi",
    5: "Nirjala Ekadashi",
    6: "Devshayani Ekadashi",
    7: "Kamika Ekadashi",
    8: "Aja Ekadashi",
    9: "Indira Ekadashi",
    10: "Devutthana Ekadashi",
    11: "Mokshada Ekadashi",
  };
  return monthMap[month] ?? "Ekadashi";
}

// ─── localStorage keys ────────────────────────────────────────────────────────
export const EKADASHI_OBSERVED_KEY = "ekadashi-observed";

export function loadObservedEkadashis(): Record<string, boolean> {
  try {
    const r = localStorage.getItem(EKADASHI_OBSERVED_KEY);
    return r ? (JSON.parse(r) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function saveObservedEkadashis(observed: Record<string, boolean>): void {
  try {
    localStorage.setItem(EKADASHI_OBSERVED_KEY, JSON.stringify(observed));
  } catch {
    /* ignore */
  }
}
