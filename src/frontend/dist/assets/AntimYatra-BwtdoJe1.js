import { r as reactExports, j as jsxRuntimeExports, m as motion, a as Link, A as AnimatePresence } from "./index-CodWPqWB.js";
const ANTYESTI_SAMAGRI = [
  {
    item: "Gangajal",
    hindiName: "गंगाजल",
    purpose: "Holy Ganga water — for sprinkling on the body and mixing into the pyre. Considered the most purifying substance in Sanatan Dharma. Even a few drops in the dying person's mouth at the final moment is a liberation-granting blessing. Ganga jal mixed with tulsi water is placed in the nostrils and ears of the deceased.",
    quantity: "1–2 copper lota (vessels)"
  },
  {
    item: "Tulsi Leaves",
    hindiName: "तुलसी पत्ते",
    purpose: "Placed in the mouth of the deceased at the moment of death. Tulsi is the most sacred plant — Vishnu's beloved. Her presence at the final moment opens the path to liberation. A garland of tulsi is also placed around the body during the final rites.",
    quantity: "A generous handful + one garland"
  },
  {
    item: "Sesame Seeds — Black (Kala Til)",
    hindiName: "काले तिल",
    purpose: "Black sesame seeds are among the most essential items. They are used for libation (tarpana), scattered over the body on the pyre, offered in pind daan, and mixed into water during shradh rituals. They ward off negative energies, purify the atmosphere, and are deeply nourishing to the departing soul. Vedic texts state that offering til to departed souls provides them immense spiritual sustenance.",
    quantity: "500g – 1 kg (needed for all 13 days too)"
  },
  {
    item: "Ghee — Pure Cow (Shudh Ghee)",
    hindiName: "शुद्ध गाय का घी",
    purpose: "Pure cow ghee offered into the sacred fire (havan) and the pyre with each mantra recitation. Each ghee offering (called 'ahuti') sends nourishment directly to the departing soul. Ghee is also used to anoint the body and is mixed with the pinda rice for pind daan.",
    quantity: "1–2 litres (pyre + 13-day rituals)"
  },
  {
    item: "Sandalwood — Paste and Sticks (Chandan)",
    hindiName: "चंदन",
    purpose: "Sandalwood paste applied on the forehead (tilak), chest, and hands of the deceased. Sandalwood pieces are placed on the pyre. Vishnu is particularly pleased by sandalwood — its use at this rite ensures divine favour for the departing soul. The fragrance purifies the entire space.",
    quantity: "Paste (100g) + 2–4 sandalwood sticks/pieces"
  },
  {
    item: "Sandalwood Logs",
    hindiName: "चंदन की लकड़ी",
    purpose: "Considered the most auspicious wood for the pyre. Its fragrant fire is purifying and beloved by Vishnu. When complete sandalwood is unaffordable, at minimum a few sandalwood pieces should be placed over the body on the pyre.",
    quantity: "As much as possible — even 4–5 pieces suffice symbolically"
  },
  {
    item: "Mango Wood (Aam ki Lakdi)",
    hindiName: "आम की लकड़ी",
    purpose: "The primary structural wood of the funeral pyre — the most traditional and widely used. Mango wood burns well and is considered sacred in Vedic tradition. It forms the main structure of the Chita (pyre).",
    quantity: "200–400 kg (full pyre) — coordinate with cremation ground"
  },
  {
    item: "Peepal Wood",
    hindiName: "पीपल की लकड़ी",
    purpose: "Peepal (sacred fig) wood is used in the inner layer of the pyre nearest the body. Peepal is the tree of Vishnu — using its wood is auspicious and liberating for the soul.",
    quantity: "20–40 kg for the inner layer"
  },
  {
    item: "White Cloth (Safed Kapda)",
    hindiName: "सफेद कपड़ा",
    purpose: "New, clean white cloth to wrap the body fully. White represents purity and the soul's return to divine light. For a woman whose husband is living (suhagan), red or yellow cloth is traditional — she goes as a bride to the divine. For widows: white only. The cloth must never have been previously worn.",
    quantity: "5–7 metres (one full wrap plus shroud)"
  },
  {
    item: "Darbha / Kusha Grass",
    hindiName: "दर्भ / कुश घास",
    purpose: "Used for the ritual seat (karta sits on kusha grass for purity), as a ritual instrument for tarpana, for making the pind daan surface, and mixed into the tarpana water. Kusha is the most sacred grass in Vedic tradition — mentioned in the Gita itself (6.11) as the seat of meditation.",
    quantity: "One bundle (sufficient for 13-day shradh period)"
  },
  {
    item: "Earthen Pots (Mati ke Ghade)",
    hindiName: "मिट्टी के घड़े",
    purpose: "The karta carries water in an earthen pot on his shoulder around the pyre during circumambulation. A hole is bored into the pot so water trickles — symbolising the life leaving the body. At the end of the third circumambulation, the pot is dropped and broken behind him without looking back — severing earthly bonds. These pots are never reused.",
    quantity: "3 pots (one broken per circumambulation)"
  },
  {
    item: "Pancha Phala — Five Fruits",
    hindiName: "पंच फल",
    purpose: "Coconut (representing the skull), banana, mango, guava, and one seasonal fruit — offered during the rites as sustenance for the soul's journey. The coconut is given special importance and is placed on the body.",
    quantity: "One of each fruit + whole coconut"
  },
  {
    item: "Rice (Akshata — whole unbroken)",
    hindiName: "अक्षत (साबुत चावल)",
    purpose: "Unbroken rice mixed with turmeric and kumkum for puja offerings. Also cooked plain rice (no salt, no oil) is essential for making the pindas (rice balls) for the 13-day pind daan.",
    quantity: "1 kg unbroken (akshata) + 2 kg plain for pindas"
  },
  {
    item: "Barley (Jau)",
    hindiName: "जौ",
    purpose: "Barley flour is mixed with rice to make the pindas. According to the Garuda Purana, barley has special power to nourish the subtle body of the departing soul during the 13-day journey.",
    quantity: "500g barley flour"
  },
  {
    item: "Honey (Shahad)",
    hindiName: "शहद",
    purpose: "Pure honey is mixed into the pindas (rice balls). Honey represents the sweetness of life and is one of the five traditional ingredients in pindas alongside rice, til, barley, and ghee.",
    quantity: "200ml — 300ml"
  },
  {
    item: "Copper Vessel — Lota",
    hindiName: "तांबे का लोटा",
    purpose: "Copper is the most sacred metal in Vedic tradition — purifying, spiritually conductive, and free from impurity. All water offerings (tarpana) must be made from a copper vessel. Never use steel or plastic for sacred water offerings.",
    quantity: "2 copper vessels"
  },
  {
    item: "Incense (Agarbatti) — Sandalwood and Camphor",
    hindiName: "चंदन अगरबत्ती और कपूर",
    purpose: "Sandalwood incense is lit throughout the rites, purifying the space and creating a sacred atmosphere. Camphor (kapoor) is lit for the aarti and waved near the body. Incense should burn continuously for 13 days at the photo of the deceased.",
    quantity: "2–3 packets of incense + 50g camphor"
  },
  {
    item: "Clay Diya — Ghee Lamp",
    hindiName: "मिट्टी का घी दीया",
    purpose: "A clay diya filled with cow ghee (or sesame oil) is lit at the head of the deceased at the moment of death and must burn continuously for 13 days. This sacred flame guides the departing soul and is the single most important ritual light of the entire mourning period. Never let it go out.",
    quantity: "Multiple clay diyas + ghee for 13 days (approximately 1 litre)"
  },
  {
    item: "Flowers — Marigold, Jasmine, White Rose",
    hindiName: "फूल — गेंदा, चमेली, सफेद गुलाब",
    purpose: "Flowers adorn the body and the bier (arthi). Marigold garlands are traditional. White flowers (jasmine, white roses) symbolise purity of the departing soul. Flowers are the language of love when words cannot reach.",
    quantity: "Several garlands + loose flowers for the bier"
  },
  {
    item: "Turmeric (Haldi) and Kumkum",
    hindiName: "हल्दी और कुमकुम",
    purpose: "Mixed with akshata (rice) for all ritual offerings. Also applied with sandalwood paste to the body as a final purification. Turmeric is antiseptic and sacred — its yellow colour symbolises the auspiciousness of the soul's journey.",
    quantity: "100g each"
  },
  {
    item: "Til Oil (Sesame Oil)",
    hindiName: "तिल का तेल",
    purpose: "Used for the continuous diya (lamp) during the 13-day period. Also used for body massage during preparation. Sesame oil is connected to the ancestors in Vedic tradition.",
    quantity: "500ml"
  },
  {
    item: "Sacred Thread (Janeu / Yagnopavita)",
    hindiName: "जनेऊ",
    purpose: "For those who wear the sacred thread (Brahmins, Kshatriyas, Vaishyas) — a new janeu is placed on the body. The karta also wears a fresh janeu for the ceremony. Symbolises the soul's sacred identity and Vedic status.",
    quantity: "2 janeus (one for deceased, one for karta)"
  },
  {
    item: "Sacred Ash (Vibhuti / Bhasma)",
    hindiName: "विभूति / भस्म",
    purpose: "Applied to the forehead of the deceased with a final tilak — three horizontal lines for Shaiva tradition, 'U' mark for Vaishnava. Vibhuti is the symbol of Shiva and represents the ultimate truth: all becomes ash, and from ash comes rebirth.",
    quantity: "One packet"
  },
  {
    item: "Bamboo Bier — Arthi",
    hindiName: "बाँस की अर्थी",
    purpose: "The funeral bier made of bamboo on which the body is carried to the cremation ground. Bamboo is used because it is considered pure — it grows from a single node (like the soul's continuity). The body must never touch the ground during the procession.",
    quantity: "One arthi — arranged by family or cremation ground"
  },
  {
    item: "Five Sacred Grains (Panch Dhanya)",
    hindiName: "पंच धान्य",
    purpose: "Wheat, rice, chickpeas, urad dal, and lentils — representing the five elements of creation. A small amount is placed with the body and offered in pind daan. The five grains sustain the soul's journey as they sustained the body's life.",
    quantity: "100g of each grain"
  },
  {
    item: "Cow Dung Cakes (Upale/Kanda)",
    hindiName: "उपले / कंडे",
    purpose: "Dry cow dung cakes are used as additional fuel in the pyre — especially around the outer edges. Cow dung is considered supremely purifying in Vedic tradition. Burning it alongside the body purifies the space and is deeply auspicious.",
    quantity: "10–20 cakes"
  }
];
const ANTYESTI_PHASES = [
  {
    phase: "At the Moment of Death",
    icon: "🕯️",
    steps: [
      {
        step: 1,
        title: "Close the Eyes Gently",
        details: "The very first act after the soul departs is to close the eyes of the deceased gently with the right hand. Say softly: 'Go in peace, beloved. Your journey was sacred. Krishna is waiting.' This is an act of profound love. The body is now a sacred vessel that housed an eternal soul — treat it with utmost reverence.",
        mantra: "ॐ शान्तिः शान्तिः शान्तिः",
        mantraTranslit: "Om Śāntiḥ Śāntiḥ Śāntiḥ — Peace, Peace, Peace"
      },
      {
        step: 2,
        title: "Chant Krishna's Name into Their Ear",
        details: "Immediately recite the Maha Mantra softly and repeatedly close to the ear of the deceased. The Garuda Purana confirms that the soul lingers near the body for some time after death — it can hear. These divine names are the greatest gift you can give right now. Chant with love, not with ritual formality.",
        mantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
        mantraTranslit: "Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare. Hare Rāma Hare Rāma Rāma Rāma Hare Hare."
      },
      {
        step: 3,
        title: "Place Tulsi and Gangajal",
        details: "Place fresh Tulsi (holy basil) leaves in the mouth and on the lips of the departed. Add a few drops of Gangajal (Ganga water) on the lips, tongue, and in the nostrils. Soak a small cotton ball in Gangajal and place it gently. If Gangajal is unavailable, use any pure water that has been sanctified by chanting 'Om Namo Narayanaya' three times over it. This is one of the most sacred acts of the entire ceremony.",
        mantra: "ॐ नमो भगवते वासुदेवाय",
        mantraTranslit: "Om Namo Bhagavate Vāsudevāya — I bow to Lord Vasudeva"
      },
      {
        step: 4,
        title: "Light the Sacred Ghee Diya",
        details: "Light a clay diya filled with cow ghee or pure sesame oil immediately near the head of the departed. This flame must be kept burning continuously for 13 full days. It guides the departing soul through the transition and protects the sacred space. Do not let it go out — if it does, relight it immediately with a prayer. This is the single most important ritual flame of the entire mourning period."
      },
      {
        step: 5,
        title: "Position the Body on the Earth",
        details: "Place the body on the floor (on a clean mat or cloth — never on a bed after death). Place with the head facing North (Uttarayana — toward the divine realm) or East (toward the rising sun). The floor symbolises the body's return to the earth which gave it birth. This positioning is important for the subtle body's transition. Do not leave the body unattended at any time."
      },
      {
        step: 6,
        title: "Cover with White Cloth",
        details: "Cover the body from head to toe with fresh, clean white cloth. White represents purity, completion, and the soul's return to light. If the deceased is a married woman whose husband is living (suhagan), yellow or red cloth is traditional in many regions — she goes as a bride to meet her divine husband. For widows and all men: white only."
      },
      {
        step: 7,
        title: "Recite Bhagavad Gita 2.20",
        details: "Read aloud from the Bhagavad Gita, beginning with Chapter 2, Verse 20. This verse is the greatest truth about the soul's eternal nature and brings immense peace to both the departing soul and the family present. Continue reading Chapter 2 in full if possible — this is considered a supremely auspicious act.",
        mantra: "न जायते म्रियते वा कदाचित् नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
        mantraTranslit: "Na jāyate mriyate vā kadācin, nāyaṁ bhūtvā bhavitā vā na bhūyaḥ. Ajo nityaḥ śāśvato 'yaṁ purāṇo, na hanyate hanyamāne śarīre."
      },
      {
        step: 8,
        title: "Inform Family and Contact a Pandit",
        details: "Inform all family members immediately — especially the eldest son or nearest male relative (the karta who will perform the last rites). Contact a qualified Vedic pandit as soon as possible. Per Vedic tradition, the body should not remain for more than 24 hours without beginning the preparation process. In summer, preparations should begin as soon as possible. The pandit will guide the entire sequence with accuracy."
      },
      {
        step: 9,
        title: "Do Not Weep Loudly Near the Body",
        details: "This is a gentle but important guidance from the Garuda Purana: do not wail or weep loudly near the body. The soul can sense the emotional environment and loud grief creates distress for the departing soul, making it harder to release. Speak softly and lovingly. Say: 'We love you. We are grateful for your time with us. Go in peace. Krishna is waiting for you.' Your love is felt beyond the boundary of life."
      }
    ]
  },
  {
    phase: "Preparation of the Body (Mruta Samskaara)",
    icon: "🪷",
    steps: [
      {
        step: 1,
        title: "Sacred Bath with Gangajal",
        details: "The body is bathed by close family members of the same gender. Use Gangajal mixed with clean water in a copper vessel. If possible, add tulsi leaves, sandalwood powder, and a pinch of black sesame to the bath water. The bathing is done from head to toe, moving downward — symbolising the release of earthly energies. Recite Om Namo Narayanaya continuously during the bath.",
        mantra: "ॐ नमो नारायणाय",
        mantraTranslit: "Om Namo Nārāyaṇāya — I surrender to Narayana"
      },
      {
        step: 2,
        title: "Apply Chandan, Turmeric, and Vibhuti",
        details: "Apply sandalwood (chandan) paste mixed with turmeric to the body — especially the forehead, chest, throat, and palms. Write 'OM' or 'RAM' on the forehead with sandalwood. For Vaishnavas, the traditional 'U' Tilak (Urdhva Pundra) is applied. For Shaivas, three horizontal lines of vibhuti (sacred ash). This sacred marking blesses the body in its final form and declares the soul's identity before God."
      },
      {
        step: 3,
        title: "Dress in Sacred Cloth",
        details: "Dress the body in clean, new, uncut sacred cloth. For men: white dhoti and uttariya (upper garment). For married women with living husband: yellow or red sari with sindoor applied — she goes as a bride to the divine. For widows and elders: plain white. The cloth should be fresh from the market, never previously worn. Place a tulsi garland around the neck."
      },
      {
        step: 4,
        title: "Apply the Sacred Tilak and Janeu",
        details: "Apply a final tilak on the forehead according to the family tradition. For those who wear the sacred thread (janeu), place a fresh janeu on the body. Place a small sacred rudraksha bead or a Shaligrama stone (Vishnu's form) on the chest if available. These sacred items accompany the soul into the afterlife as divine blessings."
      },
      {
        step: 5,
        title: "Adorn with Flowers",
        details: "Place garlands of marigolds, white roses, jasmine, and other fresh flowers on and around the body. Scatter loose flower petals generously. The fragrance is an offering to both the departing soul and to God. This transforms the space from grief into beauty — a celebration of a completed life."
      },
      {
        step: 6,
        title: "Place Tulsi, Coins, and Grains",
        details: "Place a small bundle of fresh Tulsi leaves on the chest. Place a few copper coins near the body — symbolically providing the soul with resources for its journey. Place a small amount of the five sacred grains (panch dhanya) beside the body. In some traditions, a small amount of gold is placed near the mouth (even a tiny piece of gold jewellery) — gold is purifying."
      },
      {
        step: 7,
        title: "Transfer to the Bier (Arthi)",
        details: "Transfer the body carefully to the bamboo bier (arthi) which has been prepared and decorated with flowers. Marigold garlands are draped over the arthi. The body is tied gently to the bier with fresh white cloth to keep it secure during the procession. An incense stick is lit near the head. The diya is placed nearby."
      }
    ]
  },
  {
    phase: "The Procession — Smashaan Yatra",
    icon: "🚶",
    steps: [
      {
        step: 1,
        title: "Who Leads — The Karta",
        details: "The eldest son (or nearest male relative — the karta) leads the procession barefoot. The karta carries a clay pot with burning coal or a coconut with burning camphor on his shoulder — this is the 'mukhagni fire' which will light the pyre. He walks barefoot as a sign of humility and sacred duty. It is the greatest act of a son — guiding his parent's soul to liberation."
      },
      {
        step: 2,
        title: "Carrying the Bier",
        details: "The body is carried on the shoulders of male relatives and close friends, taking turns, heads to the right. The bier must never touch the ground during the entire procession. It is an honour to carry the bier — those who do so perform an act of great merit (punya). The eldest son walks ahead; other sons and relatives walk alongside."
      },
      {
        step: 3,
        title: "Chanting Throughout the Procession",
        details: "The entire procession chants continuously and aloud: 'Ram Naam Satya Hai' — the name of Ram is the only truth. This chanting creates a sacred sound corridor for the departing soul. Passersby who hear this chanting are also blessed. The procession moves with dignity, not haste. Women traditionally walk behind.",
        mantra: "राम नाम सत्य है। राम नाम सत्य है॥",
        mantraTranslit: "Rāma Nāma Satya Hai. Rāma Nāma Satya Hai. — The name of Ram is the only Truth."
      },
      {
        step: 4,
        title: "Timing of Cremation",
        details: "Vedic tradition generally recommends cremation during daylight hours — ideally before sunset. Day cremation is considered more auspicious. If death occurs at night, cremation may be performed at night in cases of necessity, but day cremation is preferred. The body should not remain uncremated for more than 24–36 hours. In cases of sudden death, untimely death, or the death of a child, the pandit should be consulted for the appropriate timing."
      }
    ]
  },
  {
    phase: "Building the Pyre — Chita Nirmaan",
    icon: "🪵",
    steps: [
      {
        step: 1,
        title: "The Sacred Arrangement of Wood",
        details: "At the cremation ground (smashan), the pyre is built with great care and intentionality. First layer: large logs of mango wood (primary structural layer), laid horizontally from north to south. Second layer: peepal or bilva wood logs, laid perpendicularly (east to west). Third layer: smaller pieces and sandalwood. The total height should be approximately chest height when completed. The priest or senior family member supervises this."
      },
      {
        step: 2,
        title: "Purifying the Pyre",
        details: "Before placing the body, the entire pyre is sprinkled with Gangajal and a few drops of ghee while reciting mantras. A layer of kusha grass and black sesame seeds is scattered on the pyre. Cow dung cakes are placed around the outer perimeter. This purification transforms the physical wood into a sacred altar of liberation.",
        mantra: "ॐ भूः पवित्रस्य पवित्रम्। ॐ भुवः पवित्रम्। ॐ स्वः पवित्रम्॥",
        mantraTranslit: "Om Bhūḥ Pavitrasya Pavitram. Om Bhuvaḥ Pavitram. Om Svaḥ Pavitram."
      },
      {
        step: 3,
        title: "Placing the Body on the Pyre",
        details: "The body is placed on the pyre with the head facing North (toward the divine realm). The body lies face up. Gangajal is sprinkled over the body and the pyre once more. Black sesame seeds and unbroken rice are scattered over the body while the assembled family and priest recite mantras. Flowers are placed around and over the body."
      },
      {
        step: 4,
        title: "Final Offerings on the Pyre",
        details: "Before lighting, the following are placed directly on or around the body on the pyre: a coconut on the chest, five fruits, a small amount of each of the five grains, and a few coins. Sandalwood pieces are placed over the heart region. Ghee is poured over the body in the four cardinal directions. This is the final earthly gift from the family to the soul."
      }
    ]
  },
  {
    phase: "Mukhagni — Lighting the Pyre",
    icon: "🔥",
    steps: [
      {
        step: 1,
        title: "The Karta's Preparation",
        details: "The eldest son (karta) takes a purifying bath (or is purified with water poured over him). He wears a single white dhoti, applied tilak, and ties kusha (darbha) grass around his right ring finger. He is now the sacred instrument of his parent's liberation. The weight of this moment is immense — and the privilege is equal to it."
      },
      {
        step: 2,
        title: "Circumambulation with the Sacred Fire Pot",
        details: "The karta carries the earthen pot with burning fire (or burning camphor in a coconut half) on his left shoulder. He holds a small hole-bored water pot that drips water as he walks. He circumambulates the pyre three times in the counter-clockwise (apradakshina — against the usual clockwise direction). This counter-clockwise movement symbolises the reversal of life's direction, the departure from the normal cycle.",
        mantra: "ॐ यमाय नमः। ॐ धर्मराजाय नमः। ॐ मृत्यवे नमः॥",
        mantraTranslit: "Om Yamāya Namaḥ. Om Dharmarājāya Namaḥ. Om Mṛtyave Namaḥ."
      },
      {
        step: 3,
        title: "Breaking the Water Pot",
        details: "At the end of the third circumambulation, the karta drops the water pot behind him so it breaks. He does not look back. This act of 'not looking back' is profoundly symbolic — the living must not cling to the dead; the dead must not cling to the living. The breaking of the pot is the final severing of earthly bonds. After this moment, the soul is fully released to continue its journey."
      },
      {
        step: 4,
        title: "Lighting the Pyre — Mukhagni",
        details: "The karta touches the sacred flame to the pyre, beginning at the mouth region (mukha = mouth — hence Mukhagni). He recites the final mantra as the fire takes hold. In the Kapal Kriya tradition (performed in certain communities), the eldest son touches the skull region with a bamboo staff at the appointed moment to release the soul from the body — this is done only when and if the priest indicates. This act, though difficult, is considered the highest act of filial devotion.",
        mantra: "ॐ अग्ने नय सुपथा राये अस्मान् विश्वानि देव वयुनानि विद्वान्॥",
        mantraTranslit: "Om Agne Naya Supathā Rāye Asmān Viśvāni Deva Vayunāni Vidvān — O Agni, lead us to the good path toward prosperity, O God who knows all our deeds."
      },
      {
        step: 5,
        title: "Ghee and Sesame Oblations",
        details: "As the fire takes hold, the karta pours ghee into the flames using a ladle (sruk or spoon), followed by offerings of black sesame seeds. Each offering is accompanied by a mantra ending in 'Svāhā' — the Vedic equivalent of 'This is offered to you.' These oblations are spiritual nourishment sent directly to the departing soul.",
        mantra: "ॐ भूः स्वाहा। इदम् अग्नये इदं न मम॥\nॐ भुवः स्वाहा। इदम् वायवे इदं न मम॥\nॐ स्वः स्वाहा। इदम् सूर्याय इदं न मम॥",
        mantraTranslit: "Om Bhūḥ Svāhā. Idam Agnaye Idaṁ Na Mama.\nOm Bhuvaḥ Svāhā. Idam Vāyave Idaṁ Na Mama.\nOm Svaḥ Svāhā. Idam Sūryāya Idaṁ Na Mama."
      },
      {
        step: 6,
        title: "Sacred Recitation During the Fire",
        details: "While the fire burns, the assembled family and priest recite Bhagavad Gita Chapter 2 continuously — the verses on the eternal nature of the soul. Chapter 15 (Purushottama Yoga) is also recited. Continuous chanting of 'Hare Krishna' or 'Ram Naam Satya Hai' is maintained. The family remains at the cremation ground until the fire has fully consumed the body — this is an act of devotion and a final act of love.",
        mantra: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥",
        mantraTranslit: "Vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi.\nTathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī."
      }
    ]
  },
  {
    phase: "After Cremation — Asthi Sanchaya and Visarjan",
    icon: "🌊",
    steps: [
      {
        step: 1,
        title: "Asthi Sanchaya — Collecting the Sacred Ashes",
        details: "After the pyre has fully cooled — typically the next morning — the karta and close male relatives return to collect the ashes and bone fragments (asthi / bones). They collect with clean bare hands or copper/brass instruments into a copper or brass vessel. This is done with full reverence, prayer, and mantras. The ash and bone fragments together are called 'Asthi' and are treated as sacred — they are the physical remains of a beloved soul.",
        mantra: "ॐ गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः।",
        mantraTranslit: "Om Gatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ — The wise grieve neither for the living nor for the dead."
      },
      {
        step: 2,
        title: "Asthi Visarjan — Immersion of Ashes",
        details: "The ashes and bone fragments are immersed in a sacred river — the most sacred act after cremation. The ideal places in order of highest sanctity: (1) Ganga at Varanasi/Kashi — highest liberation, (2) Prayagraj Triveni Sangam, (3) Haridwar Har ki Pauri, (4) Mathura, (5) Vrindavan, (6) Nashik (Godavari), (7) Rameshwaram, (8) Pushkar. Ocean immersion is also deeply sacred. The asthi should be immersed within 3–10 days of death, though some families wait up to one year.",
        mantra: "ॐ त्वं वायुश्च आपश्च ज्योतिश्च पृथिवी च।",
        mantraTranslit: "Om tvaṁ vāyuśca āpaśca jyotiśca pṛthivī ca — You are air, water, fire, and earth."
      },
      {
        step: 3,
        title: "Tarpana at the Sacred River",
        details: "After immersing the ashes, the karta stands in the river (or at its bank) and offers three handfuls of water (tarpana) mixed with black sesame seeds and kusha grass. He recites the departed's name, gotra (lineage), and the tarpana mantra. This is offered three times — once for the soul, once for their father's soul, once for their grandfather's soul. This nourishes three generations of ancestors simultaneously.",
        mantra: "ॐ [नाम] [गोत्र] पितृभ्यः स्वधा नमः, तृप्यध्वम्। स्वधा नमः। स्वधा नमः॥",
        mantraTranslit: "Om [Name] [Gotra] Pitṛbhyaḥ Svadhā Namaḥ, Tṛpyadhvam. Svadhā Namaḥ. Svadhā Namaḥ."
      },
      {
        step: 4,
        title: "Return Home — Purification",
        details: "Upon returning home after cremation, all family members must bathe immediately and change into clean clothes. The house where the death occurred is sprinkled thoroughly with Gangajal in every room. The main door is washed. No cooking is done by the immediate family on the day of cremation — community members, neighbors, and friends provide food. This community support is one of the most beautiful expressions of dharmic life."
      }
    ]
  }
];
const SHRADHA_DAYS = [
  {
    day: "Day 1",
    name: "Mrityu Din — The Sacred First Day",
    icon: "🕯️",
    ritual: "Vigil, Prayer, and Community Support",
    details: "No food is cooked in the immediate family's home on this day — the community brings food, which is a profound expression of dharmic compassion. Only fruits and light food are consumed by the family. A diya must be lit and kept burning continuously near where the body lay (or near the photograph of the deceased if the body has been taken). The family observes relative silence, prayer, and the continuous recitation of the Gita or Krishna's names. This day is for grief, surrender, and allowing Krishna to carry the weight. If possible, the Garuda Purana is read aloud in the home during this period — its teachings help the departing soul understand its journey.",
    verse: "BG 2.27 — For one who is born, death is certain. For one who dies, birth is certain. Therefore grieve not for what is unavoidable."
  },
  {
    day: "Day 2–3",
    name: "Asthi Sangrah and First Pind Offering",
    icon: "🌊",
    ritual: "Ashes collected, first Pind Daan performed",
    details: "If cremation occurred on Day 1, the ashes (asthi) are collected on Day 2 or 3 — after the pyre has fully cooled. The first pind daan (sacred rice ball offering) is performed as the body of ashes is received. Pindas are made from cooked plain rice (no salt, no oil) mixed with black sesame seeds, ghee, and honey, formed into balls the size of a lemon. Three pindas are offered with water and mantras — one for the departed soul, one for their father's soul, one for their grandfather's soul. This provides a subtle spiritual body for the soul to begin its journey. The karta offers water (tarpana) mixed with black sesame seeds facing South.",
    mantra: "ॐ सोमाय पितृमते स्वाहा। स्वधा नमः।",
    verse: "Three separate pindas nourish three generations of ancestors simultaneously — the act of one family member blesses an entire lineage."
  },
  {
    day: "Day 3",
    name: "Sapindikarana Rites Begin",
    icon: "🙏",
    ritual: "Pind offering, prayers, Brahmin feeding",
    details: "Daily pind daan and tarpana continue. On this day, a qualified Brahmin or priest is fed a complete meal in the name of the departed — this act of feeding is considered to directly nourish the soul. A donation (dakshina) is given to the Brahmin equal to one's means. The deceased's favourite foods (or symbolic items) may be offered alongside the formal pinda. The family should recite Bhagavad Gita Chapter 15 today — it directly speaks of the soul's journey.",
    mantra: "ॐ पितृभ्यो नमः। स्वधा नमः। पितरः तृप्यन्ताम्॥"
  },
  {
    day: "Day 4",
    name: "Prathama Shradh — First Complete Shradh",
    icon: "🏺",
    ritual: "Full Shradh ceremony with all elements",
    details: "The first complete formal shradh ceremony is performed today with all elements: pind daan (rice ball offering), tarpana (water offering), Brahmin bhojan (complete meal served to a Brahmin), and dana (charitable donation). The photograph of the deceased is placed on a clean white cloth with a fresh flower, lit diya, and incense. The karta faces South during tarpana. After the Brahmin is fed, he blesses the soul and the family, confirming that the offerings have been received.",
    mantra: "ॐ पितृभ्यो देवेभ्यो महायोगिभ्य एव च। नमः स्वाहायै स्वधायै नित्यमेव नमो नमः॥"
  },
  {
    day: "Day 5–9",
    name: "Nava Dina — Daily Sacred Observance",
    icon: "💧",
    ritual: "Daily tarpana, puja, Gita recitation",
    details: "Each of these five days: The karta performs tarpana (water offering with black sesame and kusha grass) facing South. The deceased's photo is honoured with a fresh flower, fresh diya, and fresh incense each morning. Bhagavad Gita Chapter 2 is recited aloud — this daily recitation is described in the Garuda Purana as providing the greatest nourishment to the soul during its 13-day transition. No celebrations, music, auspicious events, or festivals are observed in the home during this period. The family eats simply — one meal a day ideally, vegetarian, no non-veg, no alcohol. On Day 7, an additional tarpana is offered for all ancestors going back seven generations.",
    mantra: "ॐ [नाम] [गोत्र] पितृभ्यः स्वधा नमः, तृप्यध्वम्। स्वधा स्वधा स्वधा॥",
    verse: "Garuda Purana: The family's sincere daily prayers sustain the soul's journey — each tarpana creates spiritual nourishment for the ascending soul."
  },
  {
    day: "Day 10",
    name: "Dashaham Shradh — The Tenth Day",
    icon: "✨",
    ritual: "Ten pindas, ten charitable donations",
    details: "An important pind daan day. On this day, ten pindas are offered simultaneously — one for each of the ten vital energies (dasha prana) that animated the body during life: prana, apana, vyana, udana, samana, naga, kurma, krikara, devadatta, and dhananjaya. Offering ten pindas symbolises the complete release of the subtle body's connection to the physical body. The karta also donates ten items that the deceased used regularly (clothes, food items, utensils, toiletries) in their name — these donations create merit that travels with the soul.",
    mantra: "ॐ दशाहे पित्रे स्वधा नमः। दश प्राणाः स्वधा नमः॥"
  },
  {
    day: "Day 11",
    name: "Ekadasha — Ekodishta Shradh",
    icon: "🌟",
    ritual: "The most significant ritual day",
    details: "The 11th day is the most important ritual day of the entire 13-day period. The 'Ekodishta Shradh' is performed — a complete shradh dedicated solely and exclusively to the newly departed soul. A complete meal is served to Brahmins. Nagbali and Narayan Bali (special purificatory rituals for untimely death, accidental death, or death without sacred rites) should be performed by a qualified pandit if required. On this day, major donations are made in the name of the deceased — Vastra Daan (clothing), Anna Daan (food), Sayyaa Daan (bed and bedding), Taila Daan (oil/ghee), and any cherished personal items of the deceased. The Vishnu Sahasranama is recited.",
    mantra: "ॐ एकोद्दिष्ट श्राद्धं सम्पन्नं भवतु। पितृ आत्मा तृप्यतां स्वधा॥",
    verse: "On this day the soul receives its full spiritual sustenance for the remaining journey — every act of charity done today sends merit directly to the ascending soul."
  },
  {
    day: "Day 12",
    name: "Sapindi Karana — Soul Joins the Ancestors",
    icon: "🌌",
    ritual: "Soul formally joins the Pitru Loka",
    details: "The 'Sapindana' ceremony is the most spiritually profound of all 13 days. Four pindas are prepared: three representing the three previous generations of paternal ancestors, and one for the newly departed soul. These four pindas are brought together and mixed — symbolising the formal union of the newly departed soul with the realm of its ancestors (Pitru Loka). After this Sapindi ceremony, the soul is officially a 'Pitru' — an ancestor — and will be worshipped in all future Pitru Paksha ceremonies. From this day forward, the soul has a permanent place in the family's ancestral prayers. A complete Brahmin feast (Shraddha Bhojan) is mandatory on this day. Cow donation (go-daan) on this day is considered one of the greatest acts of liberation for the soul.",
    mantra: "ॐ सपिण्डीकरण श्राद्धं सम्पादितं भवतु। पितरः तृप्यन्ताम्। प्रेत मोक्ष प्राप्तु भवतु॥",
    verse: "After Sapindana, the soul is no longer 'preta' (a soul in transition) but a 'pitru' (honoured ancestor) — this transformation is the purpose of the entire 12-day ceremony."
  },
  {
    day: "Day 13",
    name: "Terahvin — Mourning Ends, Community Feast",
    icon: "🌅",
    ritual: "Community feast, purification, and renewal",
    details: "The 13th and final day marks the official end of the acute mourning period. The entire community, extended family, friends, and neighbors are invited to a feast (bhandara) which the bereaved family serves — feeding others in the name of the departed is considered one of the greatest acts of merit. The house is thoroughly cleaned, all rooms purified with Gangajal, and fresh flowers are placed throughout. A new diya is lit at the photo of the departed. If asthi (ashes) have not yet been immersed in a sacred river, they are immersed on this day. After Terahvin, the family gradually returns to normal activities — cooking resumes, restrictions on celebrations begin to lift. However, a diya is lit at the photo on all full moon days (Purnima) and new moon days (Amavasya) for one full year.",
    mantra: "ॐ पितरः प्रीयन्ताम्। ॐ मातृभ्यः नमः। ॐ सर्वेभ्यः पितृभ्यो नमः॥",
    verse: "BG 9.25 — Those who worship the ancestors go to the ancestors. Through this feast, the family's love travels to the soul in its new realm."
  }
];
const PIND_DAAN_STEPS = [
  {
    step: 1,
    title: "What Are Pindas and Why They Matter",
    details: "A pinda is a sacred rice ball offered to the soul of a departed ancestor. The word 'pinda' comes from the Sanskrit root meaning 'body' — it is a subtle spiritual body offered by the family to provide sustenance to the soul during its transition. The Garuda Purana states that without pind daan, the soul wanders in a state of hunger and disorientation during its post-death journey. With pind daan, the soul is provided spiritual nourishment, receives a subtle body, and continues its journey with grace. Pind daan is one of the most important acts a child can perform for a departed parent."
  },
  {
    step: 2,
    title: "Preparing the Pindas — Sacred Ingredients",
    details: "The pindas are made from five sacred ingredients: (1) Cooked plain rice — boiled without salt, oil, or spices; (2) Black sesame seeds (kala til) — the most essential ingredient, deeply purifying; (3) Barley flour (jau atta) — mixed with rice for the pinda body; (4) Pure cow ghee — for richness and auspiciousness; (5) Pure honey — representing the sweetness of the life offered. Mix these together while still warm into a consistent dough. Form into balls the size of a lemon (approximately). The number of pindas varies by day: 3 on Day 2, 1–3 daily during the 13-day period, 10 on Day 10, and 4 on Day 12 (Sapindi).",
    mantra: "ॐ पिण्डं दास्यामि पितृभ्यो देवेभ्यश्च महात्मभ्यः।",
    mantraTranslit: "Om Piṇḍaṁ Dāsyāmi Pitṛbhyo Devebhyaśca Mahātmabhyaḥ — I offer this pinda to the ancestors, the gods, and the great souls."
  },
  {
    step: 3,
    title: "The Offering to the Crow",
    details: "One of the most profound practices of pind daan is the offering of a pinda to a crow. In Vedic tradition, crows are considered messengers to the ancestral realm — Pitru Loka. When a crow accepts the pinda offering, it is considered the greatest sign that the ancestor has received the offering and is satisfied. Offer the pinda on kusha grass outside your home or near water. If a crow comes and eats it — rejoice. Your offering has been received. If a crow does not come immediately, leave the pinda out — it will come. Crows rarely reject these offerings when made with pure intention.",
    mantra: "ॐ काक यदि त्वया पिण्डः स्वीकृतः तदा पितरः तृप्ताः भवन्ताम्॥",
    mantraTranslit: "Om Kāka — O Crow, if you accept this pinda, may the ancestors be satisfied."
  },
  {
    step: 4,
    title: "The Tarpana — Water Offering with Pind Daan",
    details: "Tarpana (water libation) accompanies every pind daan. The karta stands facing South (the direction of the ancestors), holds a copper vessel of water mixed with black sesame seeds and kusha grass, and offers three handfuls of water while chanting the departed's name and lineage. The water is poured from the right palm, flowing in a thin stream. This is done three times per ancestor. The word 'tarpana' means 'satisfying' or 'refreshing' — it is the act of satisfying the thirst of the ancestral soul.",
    mantra: "ॐ [नाम] [गोत्र] शर्मन् / वर्मन् / गुप्त पितृभ्यः स्वधा नमः, तृप्यध्वम्। स्वधा नमः। स्वधा नमः॥",
    mantraTranslit: "Om [Name] [Lineage] Pitṛbhyaḥ Svadhā Namaḥ, Tṛpyadhvam. May the ancestors be satisfied."
  },
  {
    step: 5,
    title: "The Pinda Immersion — Final Offering",
    details: "After the pindas have been offered and prayers recited, the pindas are immersed in flowing water — a river, stream, or the ocean. If living near a sacred river, the immersion is performed directly. The immersion releases the offering into the natural world, completing the circuit between the earthly and the ancestral realms. Some families offer the pindas to cows (who are considered divine) as an alternative. Never simply discard pindas — they must be offered respectfully to nature."
  }
];
const SACRED_RIVERS = [
  {
    name: "Varanasi (Kashi) — River Ganga",
    hindiName: "वाराणसी / काशी — गंगा",
    location: "Uttar Pradesh",
    significance: "Varanasi is considered the greatest place for Asthi Visarjan and Pind Daan in all of Sanatan Dharma. The Ganga at Varanasi is Shiva's own city — it is said that Shiva himself whispers the Taraka mantra into the ear of every soul that departs from Kashi, granting instant liberation. The Garuda Purana states that performing Antyesti rites here removes the karma of seven previous births. Manikarnika Ghat has been the sacred cremation ground since time immemorial. A special Pind Daan ceremony at Gaya in Bihar paired with Kashi Visarjan is considered the complete liberation package.",
    bestTime: "Any time — cremation continues around the clock at Manikarnika Ghat. Pitru Paksha is the most powerful time.",
    icon: "🌊"
  },
  {
    name: "Prayagraj — Triveni Sangam",
    hindiName: "प्रयागराज — त्रिवेणी संगम",
    location: "Uttar Pradesh",
    significance: "The sacred confluence (Triveni Sangam) of three rivers — Ganga (visible), Yamuna (visible), and the mystical Saraswati (invisible, subterranean). Immersing ashes at the Triveni Sangam is considered three times as powerful as immersion in a single river — three divine energies receive the departed soul simultaneously. The Kumbh Mela is held here. Prayagraj Pind Daan performed at the sangam is one of the most powerful liberation rituals in all of Sanatan Dharma.",
    bestTime: "Makar Sankranti, Kumbh Mela period, and Pitru Paksha.",
    icon: "🏛️"
  },
  {
    name: "Gaya — River Falgu",
    hindiName: "गया — फल्गु नदी",
    location: "Bihar",
    significance: "Gaya is THE dedicated city for Pind Daan — it exists for this purpose alone. The Vishnupada Temple at Gaya marks the exact footprint of Lord Vishnu on earth. Performing Pind Daan at Gaya is described in the Puranas as liberating 21 generations of ancestors from all karma — both paternal and maternal lineages. Lord Rama himself performed Pind Daan here for King Dasharatha after returning from Lanka. This is the most powerful place for Pind Daan in existence.",
    bestTime: "Pitru Paksha (September-October) is when millions perform Pind Daan here. Also Amavasya of each month.",
    icon: "🦶"
  },
  {
    name: "Haridwar — River Ganga",
    hindiName: "हरिद्वार — गंगा",
    location: "Uttarakhand",
    significance: "Haridwar means 'Gateway to Hari (Vishnu)' — where the Ganga descends from the Himalayas to the plains. Asthi Visarjan at Har ki Pauri Ghat during the evening Ganga Aarti is one of the most spiritually charged acts in Sanatan Dharma. The Ganga at Haridwar carries the highest divine energy from its mountain source. The Kankhal area of Haridwar has a dedicated facility for Asthi Visarjan.",
    bestTime: "Ganga Dussehra, Kumbh Mela, Pitru Paksha, and any Amavasya evening.",
    icon: "🏔️"
  },
  {
    name: "Nashik — River Godavari",
    hindiName: "नासिक — गोदावरी",
    location: "Maharashtra",
    significance: "The Godavari is called 'the Ganga of the South' — equally sacred in Southern and Central India. Ram Kund at Nashik is where Lord Rama bathed during his forest exile. Pind Daan performed at Ram Kund is believed to liberate ancestors through Lord Rama's divine grace. For families of Central, Western, and Southern India, Nashik is the most accessible sacred site for these rites.",
    bestTime: "Kumbh Mela (Nashik, every 12 years), Pitru Paksha.",
    icon: "🌺"
  },
  {
    name: "Rameshwaram — Agni Tirtham",
    hindiName: "रामेश्वरम् — अग्नि तीर्थम्",
    location: "Tamil Nadu",
    significance: "Rameshwaram is where Lord Rama himself performed the Pind Daan of his father King Dasharatha and offered sacred water from all the tirthas of India. The Agni Tirtham (sacred seashore) at Rameshwaram is the southernmost sacred site for ancestor rites. For families of South India, this is the most powerful and accessible sacred site. The Ramanathaswamy Temple presides over all ancestor rites here.",
    bestTime: "Any Amavasya, Pitru Paksha, and especially on Rama Navami.",
    icon: "🌴"
  },
  {
    name: "Mathura and Vrindavan — River Yamuna",
    hindiName: "मथुरा - वृन्दावन — यमुना",
    location: "Uttar Pradesh",
    significance: "The Yamuna at Mathura and Vrindavan is Krishna's own river — he played on her banks, bathed in her waters, and loved her eternally. Immersing ashes in the Yamuna at Krishna's birthplace sends the soul directly into Krishna's energetic field. For devotees of Krishna, this is the most personally meaningful place for Asthi Visarjan. The soul enters into the very waters where Krishna played — what greater embrace could there be?",
    bestTime: "Janmashtami, Radhashtami, Holi in Vrindavan, and all Ekadashis.",
    icon: "🦚"
  }
];
const MOURNING_RULES = [
  {
    category: "Food and Fasting",
    icon: "🍚",
    duration: "13 days",
    rules: [
      "No cooking by the immediate family on the day of death — community provides food.",
      "Eat simple, pure vegetarian food only — no non-vegetarian food throughout the 13-day period.",
      "No onion, garlic, or rajasic foods during the mourning period.",
      "Ideally, one meal per day — practiced as a form of tapas (austerity) in solidarity with the departing soul.",
      "No alcohol throughout the 13-day period.",
      "The karta (son performing rites) may observe more strict fasting on important days (Day 1, 10, 11, 12)."
    ]
  },
  {
    category: "Celebrations and Auspicious Events",
    icon: "🚫",
    duration: "13 days",
    rules: [
      "No weddings, engagements, or betrothal ceremonies in the family.",
      "No birthday celebrations.",
      "No religious festivals celebrated at home with festivity (personal prayer and recitation is allowed and encouraged).",
      "No buying of new clothes, jewellery, or expensive items.",
      "No music — devotional music and bhajans are the exception.",
      "No auspicious puja at home (such as griha pravesh, navagraha puja) — all such ceremonies are postponed."
    ]
  },
  {
    category: "Physical Practices",
    icon: "🧘",
    duration: "Varies",
    rules: [
      "The karta should not shave or cut hair for 13 days.",
      "Sleeping on the floor (not bed) is traditionally observed by the karta.",
      "No use of perfumes, scented oils, or cosmetics during the 13-day period.",
      "Wearing of white or simple plain clothes only by the immediate family.",
      "Bathing daily is encouraged — physical purification supports spiritual ritual.",
      "Sexual relations are abstained from during the 13-day mourning period."
    ]
  },
  {
    category: "Social and Temple",
    icon: "🛕",
    duration: "Varies",
    rules: [
      "The immediate family does not enter a temple during the 13-day period — this is considered ritually impure (sutak). The soul is in transition and the household is in a state of spiritual transition.",
      "After Day 13 (Terahvin), the sutak (ritual impurity) is lifted and temple visits resume.",
      "Visiting others' homes is avoided during the 13-day period, especially for religious functions.",
      "Brahmins who perform the rites also observe partial restrictions during this period.",
      "Community members who visit to pay respects should ideally bathe after returning home."
    ]
  },
  {
    category: "When Restrictions Lift",
    icon: "✅",
    duration: "After Day 13",
    rules: [
      "After the Terahvin (13th day), the acute restrictions of sutak are lifted.",
      "Cooking resumes in the home.",
      "Temple visits resume after the completion of Terahvin purification.",
      "Social activities may gradually resume.",
      "For significant events (weddings etc.) within the family, the traditional waiting period is one year — consult a family pandit.",
      "Monthly observances (tarpana on Amavasya, lighting diya on Purnima) continue for one full year.",
      "After one year, the Varshik Shradh (annual ceremony) marks the completion of the primary mourning period."
    ]
  }
];
const GARUDA_TEACHINGS = [
  {
    title: "The Moment of Soul's Departure",
    icon: "🌬️",
    description: "According to the Garuda Purana, at the moment of death, the soul (jiva) departs from the body through one of the nine openings (navadvara) of the body. The gate of exit is significant: souls who have practiced yoga, meditation, and lived in sattvic devotion exit through the crown of the skull (brahmarandhra or sahasrara) — the highest exit, leading directly toward liberation. Souls who lived with material attachments exit through the lower openings. The body grows cold from the feet upward — as long as the area near the heart remains warm, the soul has not fully departed. This is why the head and heart are the last areas that grow cold, and why chanting into the ear continues even after breathing stops."
  },
  {
    title: "Yamadoots and Vishnudoots",
    icon: "⚡",
    description: "Immediately after death, Yama's messengers (yamadoots) arrive. The Garuda Purana describes them vividly — dark in form, carrying nooses of time (pasha), their eyes like fire. They bind the subtle body and begin leading it toward Yamapuri (the realm of Yama for the accounting of karma). However — and this is the great grace of bhakti — for a soul that has chanted Vishnu's or Krishna's name at or near the moment of death, Vishnu's own messengers (Vishnudoots) arrive first. The Vishnudoots are described as brilliant, golden, gentle, and filled with joy. They intercept the yamadoots and take the soul directly toward liberation, bypassing the entire karma-accounting process. This is why chanting 'Hare Krishna' into the ear of the dying is so vital — it determines who receives the soul at the threshold.",
    gitaRef: "BG 8.5",
    gitaSanskrit: "अन्तकाले च मामेव स्मरन् मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
    gitaMeaning: "Whoever, at the time of death, gives up the body while remembering Me alone, reaches My nature. Of this there is no doubt."
  },
  {
    title: "The 13-Day Transition Journey",
    icon: "🛤️",
    description: "The Garuda Purana teaches that after death, the soul enters a state of transition called 'Preta Avastha' — a liminal state between the earthly realm and the ancestral realm. This transition period lasts approximately 11–13 months for an average soul (one that has not achieved liberation). The soul is in a subtle astral form, fully conscious but unable to physically interact with the world. It can see and hear its family. It experiences the emotional environment of its home acutely. During this period, the pind daan and tarpana performed by the family literally sustains the soul — each pinda creates a subtle 'body' for the soul to inhabit as it transitions. The 13 days of shradh are specifically timed to provide the soul with 13 subtle 'energy bodies' for the 13 stages of its journey to Yamapuri. This is why these 13 days are non-negotiable in Vedic tradition."
  },
  {
    title: "Chitragupta — The Cosmic Record Keeper",
    icon: "📜",
    description: "The soul arrives before Chitragupta, the divine scribe who maintains a perfect, unalterable record of every thought, word, deed, and intention performed across all lifetimes. This record is called the 'Karma Darpan' (Mirror of Karma). Chitragupta reads this record aloud before Dharmaraja (Yama). Every act of compassion, every recitation of God's name, every honest deed, every moment of love shines in this record like gold. Every harmful act, every moment of cruelty, every lie is equally recorded. The soul stands before this mirror and sees its own life with perfect clarity — not as accusation, but as truth. There is no arguing with Chitragupta's record, no escaping it. This is why the Gita teaches: live every moment as if God is watching — because Chitragupta is.",
    gitaRef: "BG 4.17",
    gitaSanskrit: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः।\nअकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः॥",
    gitaMeaning: "One must understand what action is, what forbidden action is, and what inaction is. The ways of karma are mysterious."
  },
  {
    title: "The 84 Lakh Yonis — Birth Cycles",
    icon: "🔄",
    description: "The Garuda Purana and Bhagavata Purana describe 84 lakh (8.4 million) species of life through which the soul cycles. Of these, only a small fraction are human births. The soul cycles through plant life (30 lakh species), insect life (27 lakh species), aquatic life (9 lakh species), bird life (10 lakh species), animal life (3 lakh species), and human life (4 lakh species). After each death, the soul's karma determines its next birth. A life lived in devotion, dharma, and service moves the soul upward toward liberation (moksha). A life lived in adharma, cruelty, or ignorance moves the soul downward or sideways in the cycle. The human birth is the rarest and most precious — it is the only birth from which liberation is possible. The Gita is given to humans precisely because they alone can understand and practice it.",
    gitaRef: "BG 2.13",
    gitaSanskrit: "देहिनोऽस्मिन् यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥",
    gitaMeaning: "As the soul continuously passes from childhood to youth to old age in this body, it also passes into another body at death. The sober soul is not bewildered."
  },
  {
    title: "The Importance of Complete Antyesti",
    icon: "⚠️",
    description: "The Garuda Purana is very explicit about the consequences of incomplete or improperly performed Antyesti rites. A soul whose rites are incomplete, or for whom no pind daan or tarpana is performed, remains in the Preta state for extended periods — unable to transition forward and in a state of spiritual hunger and confusion. The Garuda Purana specifically mentions that incomplete rites can cause the soul to linger near its former home, affecting the living family members with unease. This is why a qualified Vedic pandit's guidance is essential. However — the Gita also teaches that sincere intention matters more than perfect ritual. If one cannot afford elaborate rites, sincere prayer, tarpana with water and sesame, and the recitation of the Gita and Krishna's name are sufficient. God receives what is offered with a pure heart.",
    gitaRef: "BG 9.26",
    gitaSanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    gitaMeaning: "If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it."
  },
  {
    title: "What Helps the Soul Most",
    icon: "🌟",
    description: "The Garuda Purana gives a precise hierarchy of what helps a soul most on its post-death journey, in order of power: (1) The chanting of Vishnu/Krishna's name at the moment of death — this single act can override a lifetime of karma. (2) A sincere bhakta dying while in meditation on Krishna — direct liberation, no further journey needed. (3) The family's complete and sincere 13-day shradh — provides full spiritual sustenance. (4) The family's charitable donations in the departed's name — these donations travel with the soul as merit. (5) Pind daan at Gaya — liberates 21 generations. (6) The recitation of the Bhagavad Gita and Vishnu Sahasranama during the mourning period. (7) Having lived a life of dharma, compassion, and devotion. Even one of these factors provides significant benefit — all seven together ensure the soul's liberation.",
    gitaRef: "BG 8.6",
    gitaSanskrit: "यं यं वापि स्मरन् भावं त्यजत्यन्ते कलेवरम्।\nतं तमेवैति कौन्तेय सदा तद्भावभावितः॥",
    gitaMeaning: "Whatever state of being one remembers when he quits his body, that state he will attain without fail."
  },
  {
    title: "The Garuda Purana's Great Promise",
    icon: "🙏",
    description: "The Garuda Purana concludes its teachings on death rites with a great promise: A family that performs all 13 days of shradh with sincerity, feeds Brahmins and the poor in the departed's name, immerses the ashes in a sacred river, and recites the Gita — that family's ancestor does not suffer on the journey. The soul is given a divine vehicle (spiritual body), sustained by the family's offerings, guided by the Vishnudoots, and proceeds toward liberation with grace. Furthermore, a family that honours its ancestors through Pitru Paksha every year is itself protected and blessed — 'Pitaro rakshanti' — the ancestors protect those who remember them. This is the great covenant between the living and the departed in Sanatan Dharma.",
    gitaRef: "BG 9.31",
    gitaSanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति।\nकौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति॥",
    gitaMeaning: "He quickly becomes righteous and attains lasting peace. Declare it boldly, O son of Kunti — My devotee never perishes."
  }
];
const PITRU_PAKSHA_INFO = [
  {
    title: "What is Pitru Paksha?",
    icon: "🌑",
    content: "Pitru Paksha is a sacred 15-day period dedicated to honoring all departed ancestors. It falls during the Krishna Paksha (dark fortnight) of the Ashwin month (Bhadrapada in some regional calendars), typically in September–October. During these 15 days, the veil between the living realm and the ancestral realm (Pitru Loka) is at its thinnest, and the departed ancestors are said to descend close to the earthly realm, waiting to receive the love and offerings of their descendants. The Mahabharata describes Pitru Paksha as a gift from Brahma — a period specifically created so that every descendant can fulfill their sacred debt to those who gave them life."
  },
  {
    title: "Who Should Perform It?",
    icon: "👨‍👩‍👧‍👦",
    content: "Every son, daughter, and descendant in the dharmic tradition is expected to perform shradh during Pitru Paksha for all departed ancestors — parents, grandparents, great-grandparents, and even ancestors whose names have been forgotten. Daughters may perform Pitru Paksha shradh if there is no son. According to the Vedas and Puranas, a person is born with three primary debts: Deva Rin (debt to gods), Rishi Rin (debt to sages), and Pitru Rin (debt to ancestors). Pitru Paksha is the primary means of fulfilling the Pitru Rin. A person who never performs shradh for their ancestors is said to carry this debt across births."
  },
  {
    title: "Daily Tarpana — The Core Practice",
    icon: "💧",
    content: "Each of the 15 days of Pitru Paksha, the karta performs tarpana (water libation). Stand facing South (the direction of the ancestors), hold a copper vessel of water mixed with black sesame seeds (kala til) and kusha grass. Offer three handfuls of water for each ancestor while reciting their name and lineage. The tarpana is best performed at a sacred river, but can be done at any flowing water source or at home in a clean copper vessel. Ideally performed in the morning before eating."
  },
  {
    title: "Tarpana Mantra for Ancestors",
    icon: "📿",
    content: "For each ancestor: 'Om [Name] [Gotra] Pitribhyah Svadha Namah, Tripyadhvam' — I offer this water to [name] of the [lineage] clan, may they be satisfied. For ancestors whose names are unknown: 'Om Sarvebhyah Pitribhyah Svadha Namah, Tripyadhvam' — I offer this to all ancestors, may they be satisfied. For the maternal lineage: 'Om Matru-pitamaha-matamaha-aadibhyah Svadha Namah.' Offer three times per ancestor. The vibration of their name in the tarpana mantra reaches their soul regardless of where they are in their journey."
  },
  {
    title: "Pind Daan During Pitru Paksha",
    icon: "🍚",
    content: "Pind daan — offering rice balls made from cooked rice mixed with black sesame, barley flour, honey, and ghee — is performed for each generation of ancestors during Pitru Paksha. The pindas are placed on kusha grass (sacred darbha grass), offered with water, and then offered to crows (who are considered messengers to the ancestral realm) or immersed in flowing water. The most powerful pind daan is performed at Gaya (Bihar), where performing it is believed to liberate 21 generations simultaneously."
  },
  {
    title: "Which Tithi to Perform Shradh",
    icon: "📅",
    content: "Each day of Pitru Paksha corresponds to a specific lunar tithi (date). The shradh for a departed ancestor is traditionally performed on the same tithi of Pitru Paksha as the tithi on which they died. For example: if someone died on Panchami tithi, their shradh is performed on the Panchami tithi of Pitru Paksha. For those who don't know the exact tithi of death, or who died on Amavasya: perform shradh on Sarvapitru Amavasya (the final day). Fathers' shradh on Ashtami. Mothers' shradh on Navami (Matri Navami). Untimely deaths (accidents, children): perform on Chaturdashi."
  },
  {
    title: "Sarvapitru Amavasya — The Most Sacred Day",
    icon: "🌑",
    content: "The 15th and final day of Pitru Paksha — Sarvapitru Amavasya (also called Mahalaya Amavasya) — is the single most important day. On this day, shradh is performed for ALL ancestors simultaneously — including those whose exact date of death is unknown, ancestors who died unnaturally without ceremony, ancestors from the most distant generations, and ancestors one has never known. Even if a family can only perform shradh on one day of the entire year, it must be Sarvapitru Amavasya. On this day, the ancestral realm is believed to be closest to our world, and every offering is received with the greatest power."
  },
  {
    title: "What to Offer — Complete Samagri",
    icon: "🌾",
    content: "Essential items for Pitru Paksha rituals: (1) Black sesame seeds (kala til) — the most important item, deeply purifying; (2) Kusha (darbha) grass — sacred ritual grass; (3) Cooked plain rice, barley flour, honey, and ghee for pindas; (4) Gangajal for mixing in tarpana water; (5) White flowers (jasmine, white roses, white chrysanthemum); (6) Milk — poured on pindas as nourishment; (7) Copper vessel for tarpana water; (8) Incense and a diya; (9) Food for Brahmins and the poor (anna daan is essential); (10) Fruits — especially banana, which is Vishnu's beloved fruit. All items should be obtained fresh on the day of the ceremony."
  },
  {
    title: "The Deeper Meaning — Why We Do This",
    icon: "✨",
    content: "The Bhagavad Gita (9.25) says: 'Those who worship the ancestors go to the ancestors.' Pitru Paksha is not superstition — it is a conscious, loving, scientifically-structured acknowledgment of the unbreakable bonds between generations. It is gratitude in action. It is the living honoring the eternal. When we perform tarpana, we are saying across the boundary of worlds: 'I remember you. I am grateful. Your life made my life possible. Your sacrifices, your love, your struggles — I honor them all. May you be at peace.' That love is real. It travels. It is received. The Garuda Purana confirms: the ancestors who are remembered during Pitru Paksha are nourished, uplifted, and fill the home of the rememberer with blessings."
  }
];
const VARSHIK_SHRADH_INFO = [
  {
    title: "What is Varshik Shradh?",
    icon: "🌸",
    content: "Varshik Shradh (also called Pratham Varshik or first annual shradh) is the ceremony performed exactly one year after the death of a loved one, on the same tithi (lunar date) of the same month as the day of death. This marks the completion of the first year of grief and the transition from the acute mourning period to the regular annual remembrance. After the Varshik Shradh, the full monthly and annual rhythm of ancestor worship is established."
  },
  {
    title: "How to Perform — Step by Step",
    icon: "📋",
    content: "Step 1: On the one-year death anniversary tithi, the karta performs a complete bath and wears white or simple clean clothes. Step 2: The pandit is called to perform the Varshik Shradh puja. Step 3: A complete pind daan is performed with all five ingredients (rice, sesame, barley, ghee, honey). Step 4: Tarpana is offered at a sacred river or at home. Step 5: A complete Brahmin bhojan (Brahmin feast) is served. Step 6: Major charitable donations (daan) are made — clothes, food, household items — in the departed's name. Step 7: The family gathers to share memories and express gratitude for the life of the departed. Step 8: If not yet done, this is the time for Gaya Pind Daan or sacred river Asthi Visarjan."
  },
  {
    title: "The Shaiva Tradition Shraddha Rites",
    icon: "🕉️",
    content: "In Shaiva traditions (devotees of Shiva), the Varshik Shradh includes recitation of the Shiva Mahimna Stotram and offering bilva (bael) leaves at the photo of the deceased. Rudra Abhishek performed in the name of the deceased is also highly auspicious. In Vaishnava traditions, the Vishnu Sahasranama is recited and tulsi leaves are offered. In both traditions, the Bhagavad Gita Chapter 2 is the universal sacred recitation for departed souls."
  },
  {
    title: "Monthly Observances for the First Year",
    icon: "🌙",
    content: "During the first year after death, the family observes monthly shradh on the same tithi each month as the death tithi — this is called Masik Shradh. Additionally: On every Amavasya (new moon day), tarpana is offered with black sesame. On every Purnima (full moon day), a diya is lit at the photo of the deceased. These monthly observances ensure the soul receives regular spiritual nourishment during the 11-month transition period described in the Garuda Purana. After one year, the monthly shradh concludes and only the annual Varshik Shradh and Pitru Paksha continue."
  },
  {
    title: "Mantras for Varshik Shradh",
    icon: "📿",
    content: "Main Varshik Shradh mantra: 'Om [Name] [Gotra] Pitribhyah Svadha Namah, Tarpayami — Tarpayami — Tarpayami.' For the Brahmin feast blessing: 'Om Pitaro Priyantam. Om Pitaro Dhriyantam.' The Mahamrityunjaya Mantra (OM Trayambakam Yajamahe) chanted 108 times on the death anniversary is considered deeply liberating for the departed soul, regardless of how long ago they passed."
  }
];
const SOUL_VERSES = [
  {
    ref: "BG 2.13",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "देहिनोऽस्मिन् यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥",
    transliteration: "Dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā. Tathā dehāntara-prāptir dhīras tatra na muhyati.",
    meaning: "Just as the embodied soul continuously passes, in this body, from childhood to youth to old age, similarly the soul passes into another body at death. A sober person is not bewildered by such a change.",
    forFamilyMeaning: "Death is simply another passage — like the passing from childhood to adulthood. The soul has made this passage many times. There is nothing to fear in this transition. The grief you feel is love — and that love has no end.",
    krishnaSpeak: "The one you love has made this journey before, Arjun. Many times. Each time returning, each time growing. Now they step into the next passage. Be steady. Be loving. Be at peace."
  },
  {
    ref: "BG 2.19",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्। उभौ तौ न विजानीतो नायं हन्ति न हन्यते॥",
    transliteration: "Ya enaṁ vetti hantāraṁ yaś cainaṁ manyate hatam. Ubhau tau na vijānīto nāyaṁ hanti na hanyate.",
    meaning: "He who thinks the living entity is the slayer, and he who thinks it is slain, are both without knowledge, for the self slays not, nor is it slain.",
    forFamilyMeaning: "No one truly dies. No one truly takes life. The soul exists beyond all action, beyond all harm. What appears as death is simply the soul stepping beyond the reach of the body — into a wider, freer existence.",
    krishnaSpeak: "Arjun, you did not lose them. The universe did not take them. The soul simply moved beyond the reach of what you could see. They are still. They are complete. They are free."
  },
  {
    ref: "BG 2.20",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "न जायते म्रियते वा कदाचित् नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    transliteration: "Na jāyate mriyate vā kadācin, nāyaṁ bhūtvā bhavitā vā na bhūyaḥ. Ajo nityaḥ śāśvato 'yaṁ purāṇo, na hanyate hanyamāne śarīre.",
    meaning: "The soul is never born nor does it die at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primordial. It is not slain when the body is slain.",
    forFamilyMeaning: "There is no death. There is no end. The soul that lived in the person you love — that soul is permanent, unslayable, and eternal. It existed before their birth. It exists after their death. It cannot die.",
    krishnaSpeak: "Right now, in this moment of grief, I tell you — there is no death. There is only a doorway. The one you love has not gone. They have simply stepped through a doorway into a wider room."
  },
  {
    ref: "BG 2.22",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥",
    transliteration: "Vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi. Tathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī.",
    meaning: "As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.",
    forFamilyMeaning: "The body that you see is only a garment. The beloved soul that lived within it — that eternal presence — has simply moved forward into a new and freer existence. The garment is set down. The soul walks forward, lighter.",
    krishnaSpeak: "The body you see resting is only a garment. The soul that loved you — that soul — has simply moved forward. They are free from the weight of the body. Free from pain. Free from limitation. They are free."
  },
  {
    ref: "BG 2.23",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। न चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥",
    transliteration: "Naināṁ chindanti śastrāṇi naināṁ dahati pāvakaḥ. Na cainaṁ kledayanty āpo na śoṣayati mārutaḥ.",
    meaning: "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.",
    forFamilyMeaning: "Even as the body is committed to fire in the sacred Antyesti rites — the soul is completely untouched. The fire of the pyre does not hurt the soul. It liberates it. The soul that lived in the body you loved is indestructible.",
    krishnaSpeak: "Nothing — not fire, not time, not distance — can ever touch the soul that you love. That soul is indestructible. Your love for them is also indestructible. Love does not die with the body."
  },
  {
    ref: "BG 2.24",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च। नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः॥",
    transliteration: "Acchedyo 'yam adāhyo 'yam akledyo 'śoṣya eva ca. Nityaḥ sarva-gataḥ sthāṇur acalo 'yaṁ sanātanaḥ.",
    meaning: "This individual soul is unbreakable and insoluble, and can be neither burned nor dried. It is everlasting, present everywhere, unchangeable, immovable, and eternally the same.",
    forFamilyMeaning: "The soul is present everywhere — not confined to one place, one body, one form. The one you love is not gone to a distant place. They are present everywhere that love is present. In this room. In your heart.",
    krishnaSpeak: "They are not far, Arjun. The soul has no distance. Feel them in the morning light. In the smell of their favourite flower. In the name of Krishna. In the silence between your heartbeats."
  },
  {
    ref: "BG 2.27",
    chapter: "Chapter 2 — Sankhya Yoga",
    sanskrit: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च। तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥",
    transliteration: "Jātasya hi dhruvo mṛtyur dhruvaṁ janma mṛtasya ca. Tasmād aparihārye 'rthe na tvaṁ śocitum arhasi.",
    meaning: "For one who has taken his birth, death is certain; and for one who is dead, birth is certain. Therefore, in the unavoidable discharge of your duty, you should not lament.",
    forFamilyMeaning: "Birth and death are as certain as sunrise and sunset. They are the sacred rhythm of existence. Grief is natural, human, and sacred — let it flow. But know that in the great rhythm, all things return. Nothing is truly lost.",
    krishnaSpeak: "Grieve, Arjun. Grief is love. But do not drown in it. Your beloved's soul has moved into the great cycle — and in that cycle, all things return. All love is preserved."
  },
  {
    ref: "BG 4.9",
    chapter: "Chapter 4 — Jnana Karma Yoga",
    sanskrit: "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः। त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन॥",
    transliteration: "Janma karma ca me divyam evaṁ yo vetti tattvataḥ. Tyaktvā dehaṁ punarjanma naiti mām eti so 'rjuna.",
    meaning: "One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode.",
    forFamilyMeaning: "A soul that lived in devotion to God — a soul that loved Krishna, chanted His name, served His creation — goes to Krishna. Not to suffering. Not to darkness. Not to another painful birth. To Krishna.",
    krishnaSpeak: "One who loved Me, who took My name — comes to Me. Not to suffering. Not to darkness. To Me, Arjun. That is where your beloved is going. To Me."
  },
  {
    ref: "BG 8.5",
    chapter: "Chapter 8 — Akshara Brahma Yoga",
    sanskrit: "अन्तकाले च मामेव स्मरन् मुक्त्वा कलेवरम्। यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
    transliteration: "Anta-kāle ca mām eva smaran muktvā kalevaram. Yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśayaḥ.",
    meaning: "Whoever, at the time of death, gives up the body while remembering Me alone, reaches My nature. Of this there is no doubt.",
    forFamilyMeaning: "This is why chanting Krishna's name in the ear of the dying is so powerfully important. Those two words — Hare Krishna — are a lantern lighting the path directly to God. If you did this for your loved one, know that it reached them.",
    krishnaSpeak: "Speak My name softly into their ear. 'Hare Krishna.' Those two words are a lantern lighting their path home to Me. Even now, even after — keep chanting. The sound travels beyond what you can see."
  },
  {
    ref: "BG 8.6",
    chapter: "Chapter 8 — Akshara Brahma Yoga",
    sanskrit: "यं यं वापि स्मरन् भावं त्यजत्यन्ते कलेवरम्। तं तमेवैति कौन्तेय सदा तद्भावभावितः॥",
    transliteration: "Yaṁ yaṁ vāpi smaran bhāvaṁ tyajaty ante kalevaram. Taṁ tam evaiti kaunteya sadā tad-bhāva-bhāvitaḥ.",
    meaning: "Whatever state of being one remembers when he quits his body, O son of Kunti, that state he will attain without fail.",
    forFamilyMeaning: "This is the most important verse for the moment of death. Whatever the dying person is thinking of in their final moment — that is where they go. Fill that moment with Krishna. Fill the room with His name. Fill the air with His presence.",
    krishnaSpeak: "Fill their final moments with My name. Their last thought becomes their destination. Give them Me, Arjun. That is the greatest gift you can give anyone."
  },
  {
    ref: "BG 9.22",
    chapter: "Chapter 9 — Raja Vidya Yoga",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate. Teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham.",
    meaning: "But those who always worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack, and I preserve what they have.",
    forFamilyMeaning: "Those who loved and worshipped God — Krishna personally takes care of them. In life and beyond life. Their welfare in their ongoing journey is Krishna's personal responsibility. You can trust this completely.",
    krishnaSpeak: "A soul that came to Me — I carried them in life and I carry them beyond. Their welfare is My personal responsibility. I am with them now. Trust Me."
  },
  {
    ref: "BG 9.31",
    chapter: "Chapter 9 — Raja Vidya Yoga",
    sanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति। कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति॥",
    transliteration: "Kṣipraṁ bhavati dharmātmā śaśvac-chāntiṁ nigacchati. Kaunteya pratijānīhi na me bhaktaḥ praṇaśyati.",
    meaning: "He quickly becomes righteous and attains lasting peace. Declare it boldly, O son of Kunti — My devotee never perishes.",
    forFamilyMeaning: "Krishna's greatest promise: A devotee — a soul that remembered God — never perishes. Never. Not ever. Not in death, not in the afterlife, not in any journey of the soul. This is Krishna's personal guarantee.",
    krishnaSpeak: "My devotee never perishes. Never. I have declared this before all creation. I declare it again to you, right now, in this moment of your grief. Believe Me."
  },
  {
    ref: "BG 15.6",
    chapter: "Chapter 15 — Purushottama Yoga",
    sanskrit: "न तद्भासयते सूर्यो न शशाङ्को न पावकः। यद्गत्वा न निवर्तन्ते तद्धाम परमं मम॥",
    transliteration: "Na tad bhāsayate sūryo na śaśāṅko na pāvakaḥ. Yad gatvā na nivartante tad dhāma paramaṁ mama.",
    meaning: "That supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.",
    forFamilyMeaning: "There is a place of pure light — beyond this world of birth and death — where the soul that loved God can go. A place so luminous it needs no sun, no moon, no fire. That is Krishna's abode. That is where your beloved may be journeying.",
    krishnaSpeak: "My abode needs no sun, no moon, no fire. It is light itself — pure, eternal, joyful light. That is where I am taking them. Do not grieve. Rejoice. They are coming home."
  },
  {
    ref: "BG 18.65",
    chapter: "Chapter 18 — Moksha Sannyasa Yoga",
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
    transliteration: "Man-manā bhava mad-bhakto mad-yājī māṁ namaskuru. Mām evaiṣyasi satyaṁ te pratijāne priyo 'si me.",
    meaning: "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend.",
    forFamilyMeaning: "'You will come to Me' — this is Krishna's personal, unconditional promise to every soul that loves Him. Not a possibility, not a hope, not a maybe. A promise from God to every devoted soul.",
    krishnaSpeak: "You will come to Me. This I promise you. You are My dear friend. And so is every soul that ever remembered Me with love. Your beloved is remembered. They are dear to Me. They will come to Me."
  },
  {
    ref: "BG 18.66",
    chapter: "Chapter 18 — Moksha Sannyasa Yoga",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja. Ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ.",
    meaning: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    forFamilyMeaning: "The final, ultimate promise of the Gita — surrender to Me, and I will free you from everything. Fear nothing. The soul you love is in God's hands. And you, who grieve for them, are also in God's hands. Do not fear.",
    krishnaSpeak: "Do not grieve. Do not fear. I have promised. The soul you love is eternal. They are in My hands. And so are you. Hare Krishna."
  },
  {
    ref: "BG 6.30",
    chapter: "Chapter 6 — Dhyana Yoga",
    sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति। तस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
    transliteration: "Yo māṁ paśyati sarvatra sarvaṁ ca mayi paśyati. Tasyāhaṁ na praṇaśyāmi sa ca me na praṇaśyati.",
    meaning: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is that person ever lost to Me.",
    forFamilyMeaning: "A soul who saw God everywhere — in the dawn, in others' faces, in acts of kindness — that soul is never lost to Krishna. And Krishna is never lost to them. They are in each other's sight, forever.",
    krishnaSpeak: "A soul who saw Me in the world — in kindness, in beauty, in devotion — I see them. I have always seen them. They are not lost from My sight. Not now. Not ever."
  }
];
const C = {
  // Backgrounds
  pageBg: "oklch(0.97 0.018 55)",
  cardBg: "oklch(0.96 0.022 58)",
  cardBgDeep: "oklch(0.94 0.030 54)",
  headerBg: "oklch(0.92 0.042 52)",
  goldBg: "oklch(0.88 0.072 56)",
  creamBg: "oklch(0.98 0.012 60)",
  // Borders
  borderLight: "oklch(0.82 0.048 54 / 0.55)",
  borderGold: "oklch(0.72 0.12 52 / 0.55)",
  borderSoft: "oklch(0.86 0.036 56 / 0.6)",
  // Text
  textDark: "oklch(0.24 0.06 38)",
  textMid: "oklch(0.40 0.06 42)",
  textLight: "oklch(0.56 0.058 46)",
  textGold: "oklch(0.52 0.14 48)",
  textGoldBright: "oklch(0.42 0.16 44)",
  // Accent
  gold: "oklch(0.68 0.18 52)"
};
function playHarmoniumTone(freq = 220) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 2.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 2.5);
  } catch {
  }
}
const IMMEDIATE_STEPS = [
  {
    step: 1,
    icon: "🕯️",
    title: "Close the Eyes Gently",
    guidance: "The very first act — close the eyes of the departed gently with your right hand. Say softly: 'Go in peace, beloved. Your journey was sacred. Krishna is waiting for you.' This is an act of profound love. The body is now a sacred vessel — treat it with utmost reverence.",
    mantra: "ॐ शान्तिः शान्तिः शान्तिः",
    mantraTranslit: "Om Śāntiḥ Śāntiḥ Śāntiḥ — Peace, Peace, Peace"
  },
  {
    step: 2,
    icon: "🌿",
    title: "Place Tulsi Leaves and Gangajal",
    guidance: "Place fresh Tulsi (holy basil) leaves in the mouth of the departed and add a few drops of Gangajal on the lips. If Gangajal is unavailable, use pure water sanctified by chanting 'Om Namo Narayanaya' three times over it. Place a soaked cotton ball gently near the nostrils. Tulsi is Vishnu's beloved — her presence opens the path to liberation.",
    mantra: "ॐ नमो भगवते वासुदेवाय",
    mantraTranslit: "Om Namo Bhagavate Vāsudevāya — I bow to Lord Vasudeva"
  },
  {
    step: 3,
    icon: "🙏",
    title: "Chant Krishna's Name into Their Ear",
    guidance: "Begin chanting softly and lovingly close to the ear. The Garuda Purana confirms: the soul lingers near the body for some time after death. It can hear you. These divine names are the greatest gift you can give right now. Chant with love, not with ritual formality.",
    mantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे\nहरे राम हरे राम राम राम हरे हरे",
    mantraTranslit: "Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare\nHare Rāma Hare Rāma Rāma Rāma Hare Hare"
  },
  {
    step: 4,
    icon: "🔥",
    title: "Light the Sacred Ghee Diya",
    guidance: "Light a clay diya filled with cow ghee (or pure sesame oil) immediately near the head of the departed. This flame must burn continuously for 13 full days. It guides the departing soul and protects the sacred space. Do not let it go out — if it does, relight it immediately with a prayer. This is the single most important ritual light of the entire mourning period.",
    mantra: null,
    mantraTranslit: null
  },
  {
    step: 5,
    icon: "🌍",
    title: "Position the Body on the Earth",
    guidance: "Place the body on the floor on a clean mat or cloth (never on a raised bed after death). Head facing North (toward the divine realm) or East. The earth receives what it gave. Place a clean white cloth over the entire body. Do not leave the body unattended at any time.",
    mantra: null,
    mantraTranslit: null
  },
  {
    step: 6,
    icon: "📖",
    title: "Recite Bhagavad Gita 2.20",
    guidance: "Read aloud from the Bhagavad Gita, beginning with Chapter 2, Verse 20. This verse is the greatest truth about the soul and brings immense peace to both the departing soul and the family. Continue reading Chapter 2 in full if possible.",
    mantra: "न जायते म्रियते वा कदाचित् नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    mantraTranslit: "Na jāyate mriyate vā kadācin, nāyaṁ bhūtvā bhavitā vā na bhūyaḥ.\nAjo nityaḥ śāśvato 'yaṁ purāṇo, na hanyate hanyamāne śarīre.\n— The soul is never born nor does it die. It is eternal, unslayable."
  },
  {
    step: 7,
    icon: "👨‍👩‍👧‍👦",
    title: "Inform Family and Contact a Pandit",
    guidance: "Inform all family members — especially the eldest son or nearest male relative (the karta). Contact a qualified Vedic pandit as soon as possible. The body should not remain beyond 24 hours without beginning preparation. The pandit will guide the entire ceremony with accuracy and sanctity.",
    mantra: null,
    mantraTranslit: null
  },
  {
    step: 8,
    icon: "🌸",
    title: "Offer Fresh Flowers",
    guidance: "Place fresh flowers around the body — marigolds, jasmine, white roses. The fragrance purifies the space and is an offering of love to both the soul and to God. Let the space become beautiful — a celebration of a completed life, not merely a place of grief.",
    mantra: null,
    mantraTranslit: null
  },
  {
    step: 9,
    icon: "💙",
    title: "Speak Gently — Do Not Wail",
    guidance: "This is a gentle but important guidance from the Garuda Purana: do not wail loudly near the body. The soul can sense the emotional environment. Loud grief creates distress for the departing soul. Instead, speak softly and lovingly: 'We love you. We are grateful. Go in peace. Krishna is waiting.' Your love is felt beyond the boundary of life.",
    mantra: null,
    mantraTranslit: null
  },
  {
    step: 10,
    icon: "🌅",
    title: "Offer Fresh Flowers and Place Sacred Items",
    guidance: "Place sacred items near the body: a copper vessel with Gangajal, the Bhagavad Gita or a Vishnu image, incense stick, and a fresh flower. These items create a sacred environment and guide the soul. Now you have done everything love can do. Krishna receives the rest.",
    mantra: "ॐ तत् सत्",
    mantraTranslit: "Om Tat Sat — That which is, is God. All returns to Him."
  }
];
function WarmCard({
  children,
  className = "",
  elevated = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `rounded-2xl p-5 ${className}`,
      style: {
        background: elevated ? C.headerBg : C.cardBg,
        border: `1px solid ${C.borderLight}`,
        boxShadow: elevated ? "0 4px 20px oklch(0.68 0.12 52 / 0.12)" : "0 1px 6px oklch(0.60 0.08 50 / 0.06)"
      },
      children
    }
  );
}
function GoldDivider({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          height: 1,
          flex: 1,
          background: `linear-gradient(to right, transparent, ${C.borderGold})`
        }
      }
    ),
    label && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "font-display text-xs italic",
        style: { color: C.textGold },
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          height: 1,
          flex: 1,
          background: `linear-gradient(to left, transparent, ${C.borderGold})`
        }
      }
    )
  ] });
}
function MantraBox({
  mantra,
  translit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl p-4 mt-3",
      style: {
        background: "linear-gradient(135deg, oklch(0.94 0.05 58 / 0.9), oklch(0.91 0.065 54 / 0.85))",
        border: `1px solid ${C.borderGold}`,
        boxShadow: "inset 0 1px 0 oklch(0.98 0.02 60 / 0.8)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display font-semibold text-center whitespace-pre-line",
            lang: "sa",
            style: {
              color: C.textDark,
              fontSize: "0.97rem",
              lineHeight: 2.1
            },
            children: mantra
          }
        ),
        translit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body italic text-center text-xs mt-2",
            style: { color: C.textGold, lineHeight: 1.7 },
            children: translit
          }
        )
      ]
    }
  );
}
function SectionHeader({
  sanskrit,
  english,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(WarmCard, { elevated: true, className: "mb-5 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-display font-bold mb-1",
        style: {
          color: C.textGoldBright,
          fontSize: "1.25rem",
          lineHeight: 1.4
        },
        children: sanskrit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-display font-bold italic mb-2",
        style: { color: C.textDark, fontSize: "1.05rem" },
        children: english
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-body text-sm",
        style: { color: C.textMid, lineHeight: 1.7 },
        children: subtitle
      }
    )
  ] });
}
function AccordionItem({
  isOpen,
  onToggle,
  header,
  children,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden",
      style: {
        border: `1px solid ${isOpen ? C.borderGold : C.borderSoft}`,
        boxShadow: isOpen ? "0 4px 16px oklch(0.65 0.12 52 / 0.10)" : "none"
      },
      "data-ocid": ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onToggle,
            className: "w-full flex items-center gap-3 p-4 text-left transition-all",
            style: {
              background: isOpen ? `linear-gradient(135deg, ${C.goldBg}, oklch(0.86 0.062 52 / 0.95))` : C.cardBg
            },
            "aria-expanded": isOpen,
            children: [
              header,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "shrink-0 ml-auto",
                  style: { color: C.textGold, fontSize: "0.75rem" },
                  children: isOpen ? "▲" : "▼"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.35, ease: "easeInOut" },
            className: "overflow-hidden",
            style: { background: C.creamBg },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 pt-3", children })
          }
        ) })
      ]
    }
  );
}
function ImmediateGuidanceView({ onBack }) {
  const [expandedStep, setExpandedStep] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      "data-ocid": "antim-yatra.immediate_guidance",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6 mb-5 text-center",
            style: {
              background: "linear-gradient(160deg, oklch(0.94 0.05 45 / 0.97), oklch(0.91 0.07 52 / 0.95))",
              border: `1px solid ${C.borderGold}`,
              boxShadow: "0 4px 24px oklch(0.65 0.14 48 / 0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { scale: [1, 1.06, 1] },
                  transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  style: { fontSize: "2.8rem", marginBottom: "0.75rem" },
                  "aria-hidden": true,
                  children: "🙏"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-bold italic mb-2",
                  style: { color: C.textDark, fontSize: "1.15rem" },
                  children: "Krishna is with you in this moment"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm",
                  style: { color: C.textMid, lineHeight: 1.8 },
                  children: "Follow each step slowly, with love. The departed soul can feel your presence and your prayers. You are not alone — Krishna stands beside you and your loved one right now."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-3 mt-4",
                  style: {
                    background: "oklch(0.96 0.04 58 / 0.8)",
                    border: `1px solid ${C.borderGold}`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display italic text-sm",
                        style: { color: C.textGoldBright, lineHeight: 1.7 },
                        children: '"My devotee never perishes. Never." — Bhagavad Gita 9.31'
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-1", style: { color: C.textLight }, children: "Speak Krishna's name into their ear. Hare Krishna." })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "antim-yatra.immediate_steps", children: IMMEDIATE_STEPS.map((item, i) => {
          const open = expandedStep === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpandedStep(open ? null : i),
              ocid: `antim-yatra.immediate_step.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                    style: {
                      background: open ? "oklch(0.78 0.14 52 / 0.25)" : C.goldBg,
                      border: `1px solid ${C.borderGold}`,
                      fontSize: "1.3rem"
                    },
                    children: item.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body text-[10px] font-bold block mb-0.5",
                      style: { color: C.textGold },
                      children: [
                        "Step ",
                        item.step
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold italic text-sm",
                      style: { color: C.textDark },
                      children: item.title
                    }
                  ),
                  !open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs mt-0.5 truncate",
                      style: { color: C.textLight },
                      children: [
                        item.guidance.slice(0, 60),
                        "…"
                      ]
                    }
                  )
                ] })
              ] }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-3",
                    style: { color: C.textMid, lineHeight: 1.85 },
                    children: item.guidance
                  }
                ),
                item.mantra && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MantraBox,
                  {
                    mantra: item.mantra,
                    translit: item.mantraTranslit ?? void 0
                  }
                )
              ]
            },
            item.step
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6 mt-6 text-center",
            style: {
              background: `linear-gradient(160deg, ${C.headerBg}, ${C.goldBg})`,
              border: `1px solid ${C.borderGold}`,
              boxShadow: "0 4px 20px oklch(0.65 0.12 52 / 0.10)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic",
                  style: {
                    color: C.textGoldBright,
                    fontSize: "1.05rem",
                    lineHeight: 1.7
                  },
                  children: '"Whoever at the time of death remembers Me alone, reaches My abode. Of this there is no doubt." — Bhagavad Gita 8.5'
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-3", style: { color: C.textLight }, children: "You have done everything a loving soul can do. Krishna receives the rest." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onBack,
            className: "font-body text-xs italic underline",
            style: { color: C.textGold },
            "data-ocid": "antim-yatra.immediate_back",
            children: "← Return to options"
          }
        ) })
      ]
    }
  );
}
function AntyestiTab() {
  const [samagriExpanded, setSamagriExpanded] = reactExports.useState(false);
  const [activePhase, setActivePhase] = reactExports.useState(0);
  const [expandedSteps, setExpandedSteps] = reactExports.useState(
    {}
  );
  function toggleStep(key) {
    setExpandedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.antyesti_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "अन्त्येष्टि संस्कार",
            english: "Antyesti Sanskar — The Final Rite",
            subtitle: "The 16th and most sacred of all 16 Samskaras — the last act of love. Performed with full devotion, these rites are not merely ritual — they are a final gift to the departing soul and the act of a family honoring the eternal."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSamagriExpanded((v) => !v),
            className: "w-full rounded-2xl p-4 text-left mb-4 transition-all",
            style: {
              background: samagriExpanded ? C.headerBg : C.cardBg,
              border: `1px solid ${samagriExpanded ? C.borderGold : C.borderLight}`,
              boxShadow: samagriExpanded ? "0 3px 14px oklch(0.65 0.12 52 / 0.10)" : "none"
            },
            "data-ocid": "antim-yatra.samagri_toggle",
            "aria-expanded": samagriExpanded,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, children: "🏺" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold italic",
                      style: { color: C.textDark, fontSize: "1rem" },
                      children: "Complete Samagri — All Materials Required"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs", style: { color: C.textLight }, children: [
                    ANTYESTI_SAMAGRI.length,
                    " sacred items with purpose and significance"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: C.textGold, fontSize: "0.8rem" }, children: samagriExpanded ? "▲" : "▼" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: samagriExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.4 },
            className: "overflow-hidden mb-5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "antim-yatra.samagri_list", children: ANTYESTI_SAMAGRI.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: i % 2 === 0 ? C.cardBg : C.creamBg,
                  border: `1px solid ${C.borderSoft}`
                },
                "data-ocid": `antim-yatra.samagri_item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-bold italic text-sm",
                          style: { color: C.textDark },
                          children: item.item
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs",
                          lang: "hi",
                          style: { color: C.textGoldBright },
                          children: item.hindiName
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-xs rounded-full px-2 py-0.5 shrink-0",
                        style: {
                          background: C.goldBg,
                          color: C.textGoldBright,
                          border: `1px solid ${C.borderGold}`
                        },
                        children: item.quantity
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs",
                      style: { color: C.textMid, lineHeight: 1.7 },
                      children: item.purpose
                    }
                  )
                ]
              },
              item.item
            )) })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { label: "✦ Step-by-Step Antyesti Process ✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mb-4 overflow-x-auto pb-1", role: "tablist", children: ANTYESTI_PHASES.map((phase, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActivePhase(i),
            className: "shrink-0 rounded-xl px-3 py-2 font-body text-xs font-semibold transition-all",
            style: {
              background: activePhase === i ? C.goldBg : C.cardBg,
              color: activePhase === i ? C.textGoldBright : C.textLight,
              border: `1px solid ${activePhase === i ? C.borderGold : C.borderSoft}`,
              boxShadow: activePhase === i ? "0 2px 8px oklch(0.65 0.12 52 / 0.12)" : "none"
            },
            role: "tab",
            "aria-selected": activePhase === i,
            "data-ocid": `antim-yatra.phase_tab.${i + 1}`,
            children: [
              phase.icon,
              " ",
              i + 1
            ]
          },
          phase.phase
        )) }),
        ANTYESTI_PHASES.map(
          (phase, pi) => activePhase === pi ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3 },
              "data-ocid": `antim-yatra.phase_content.${pi + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-xl p-4 mb-4",
                    style: {
                      background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                      border: `1px solid ${C.borderGold}`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-display font-bold italic text-center",
                        style: { color: C.textDark, fontSize: "1.05rem" },
                        children: [
                          phase.icon,
                          " ",
                          phase.phase
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: phase.steps.map((step) => {
                  const key = `${pi}-${step.step}`;
                  const open = expandedSteps[key];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    AccordionItem,
                    {
                      isOpen: !!open,
                      onToggle: () => toggleStep(key),
                      ocid: `antim-yatra.step.${pi + 1}.${step.step}`,
                      header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                            style: {
                              background: C.goldBg,
                              border: `1px solid ${C.borderGold}`
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "font-display text-xs font-bold",
                                style: { color: C.textGoldBright },
                                children: step.step
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display font-bold italic text-sm",
                              style: { color: C.textDark },
                              children: step.title
                            }
                          ),
                          !open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "font-body text-xs mt-0.5 truncate",
                              style: { color: C.textLight },
                              children: [
                                step.details.slice(0, 65),
                                "…"
                              ]
                            }
                          )
                        ] })
                      ] }),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-body text-sm",
                            style: { color: C.textMid, lineHeight: 1.85 },
                            children: step.details
                          }
                        ),
                        step.mantra && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          MantraBox,
                          {
                            mantra: step.mantra,
                            translit: step.mantraTranslit
                          }
                        )
                      ]
                    },
                    step.step
                  );
                }) })
              ]
            },
            phase.phase
          ) : null
        )
      ]
    }
  );
}
function ShraddhaTab() {
  const [expandedDay, setExpandedDay] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.shradha_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "श्राद्ध — 13-दिवसीय पवित्र अनुष्ठान",
            english: "13-Day Shradh — Day by Day Guide",
            subtitle: "Every day of the 13-day period serves a specific sacred purpose in the soul's journey. These rites are an act of love performed across the boundary of worlds. The Garuda Purana confirms: the family's sincere prayers sustain the soul throughout its transition."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-xs text-center tracking-widest mb-4",
            style: { color: C.textGold },
            children: "✦ Tap each day for complete guidance ✦"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "antim-yatra.shradha_days_list", children: SHRADHA_DAYS.map((day, i) => {
          const open = expandedDay === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpandedDay(open ? null : i),
              ocid: `antim-yatra.shradha_day.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "shrink-0 w-11 h-11 rounded-full flex items-center justify-center",
                    style: {
                      background: open ? C.goldBg : C.headerBg,
                      border: `1px solid ${C.borderGold}`,
                      fontSize: "1.3rem"
                    },
                    children: day.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-display font-bold italic text-sm",
                      style: { color: C.textDark },
                      children: [
                        day.day,
                        " — ",
                        day.name
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs mt-0.5",
                      style: { color: C.textLight },
                      children: day.ritual
                    }
                  )
                ] })
              ] }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-4",
                    style: { color: C.textMid, lineHeight: 1.85 },
                    children: day.details
                  }
                ),
                day.mantra && /* @__PURE__ */ jsxRuntimeExports.jsx(MantraBox, { mantra: day.mantra }),
                day.verse && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-xl p-3 mt-3",
                    style: {
                      background: C.goldBg,
                      border: `1px solid ${C.borderGold}`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "font-display italic text-xs",
                        style: { color: C.textGoldBright, lineHeight: 1.7 },
                        children: [
                          "✦ ",
                          day.verse
                        ]
                      }
                    )
                  }
                )
              ]
            },
            day.day
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { label: "Annual Remembrance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(WarmCard, { elevated: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold italic mb-2 text-center",
              style: { color: C.textDark },
              children: "Pitru Paksha — Annual Ancestor Worship"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm mb-3 text-center",
              style: { color: C.textMid, lineHeight: 1.7 },
              children: "15 sacred days every year in Ashwin month for honouring all ancestors. See full guide in the Pitru Paksha tab."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/calendar",
              className: "block text-center font-display text-xs italic",
              style: { color: C.textGold },
              "data-ocid": "antim-yatra.calendar_link",
              children: "View Festival Calendar →"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { label: "✦ Complete Samagri for 13 Days ✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5",
            style: {
              background: C.cardBg,
              border: `1px solid ${C.borderGold}`
            },
            "data-ocid": "antim-yatra.shradh_samagri",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-bold italic mb-3 text-center",
                  style: { color: C.textDark },
                  children: "🏺 Sacred Samagri — Keep Ready for All 13 Days"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                {
                  item: "Kala Til (Black Sesame)",
                  use: "Essential for all Pind Daan — offered with every pinda"
                },
                {
                  item: "Darbha Grass (Kusha)",
                  use: "Sacred grass woven into mat and ring for the ritual priest"
                },
                {
                  item: "Copper Vessel (Tamra Patra)",
                  use: "Water offerings and tarpan — poured toward south"
                },
                {
                  item: "Pinda Rice (Boiled Plain)",
                  use: "Cooked fresh each day — no salt, no spice, no oil"
                },
                {
                  item: "Cow Ghee",
                  use: "Mixed into pindas and offered in diya throughout 13 days"
                },
                {
                  item: "Pure Honey (Madhu)",
                  use: "Mixed into pindas — one of the five sacred ingredients"
                },
                {
                  item: "Barley Flour (Jau Atta)",
                  use: "Mixed with rice for pinda dough — purifying and sattvic"
                },
                {
                  item: "Gangajal",
                  use: "Mixed into all water offerings — sanctifies completely"
                },
                {
                  item: "Tulsi Leaves",
                  use: "Placed in water offerings and near the ritual space daily"
                },
                {
                  item: "White Flowers",
                  use: "Lotus or jasmine — offered each day with the pindas"
                },
                {
                  item: "Ghee Lamp (Clay Diya)",
                  use: "Burns continuously for all 13 days near the main space"
                },
                {
                  item: "Sacred Thread (Yajnopavita)",
                  use: "Worn by the karta (performing son/family member)"
                },
                {
                  item: "Panchangam / Calendar",
                  use: "To determine the correct lunar tithis for each ritual day"
                }
              ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex gap-3 items-start py-1.5 border-b last:border-0",
                  style: { borderColor: `${C.borderSoft}` },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "font-display text-xs font-bold shrink-0 w-6 mt-0.5",
                        style: { color: C.textGold },
                        children: [
                          i + 1,
                          "."
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-semibold text-xs italic",
                          style: { color: C.textDark },
                          children: s.item
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs",
                          style: { color: C.textMid, lineHeight: 1.6 },
                          children: s.use
                        }
                      )
                    ] })
                  ]
                },
                s.item
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AskKrishnaCTA, { context: "Krishna, what happens to the soul after death?" })
      ]
    }
  );
}
function PindDaanTab() {
  const [expandedStep, setExpandedStep] = reactExports.useState(0);
  const [expandedRiver, setExpandedRiver] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.pind_daan_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "पिण्ड दान — पितृ तर्पण",
            english: "Pind Daan — Complete Sacred Guide",
            subtitle: "Pind Daan (offering of sacred rice balls) is one of the most important acts a child can perform for a departed parent. The Garuda Purana states that without pind daan, the soul wanders in spiritual hunger during its transition. With pind daan, the soul is nourished, sustained, and guided."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display text-xs text-center tracking-widest mb-4",
            style: { color: C.textGold },
            children: "✦ The Complete Process ✦"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-6", "data-ocid": "antim-yatra.pind_daan_steps", children: PIND_DAAN_STEPS.map((step, i) => {
          const open = expandedStep === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpandedStep(open ? null : i),
              ocid: `antim-yatra.pind_daan_step.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "shrink-0 w-9 h-9 rounded-full flex items-center justify-center",
                    style: {
                      background: C.goldBg,
                      border: `1px solid ${C.borderGold}`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display text-sm font-bold",
                        style: { color: C.textGoldBright },
                        children: step.step
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold italic text-sm flex-1 min-w-0",
                    style: { color: C.textDark },
                    children: step.title
                  }
                )
              ] }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: C.textMid, lineHeight: 1.85 },
                    children: step.details
                  }
                ),
                step.mantra && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MantraBox,
                  {
                    mantra: step.mantra,
                    translit: step.mantraTranslit
                  }
                )
              ]
            },
            step.step
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { label: "✦ Sacred Rivers for Asthi Visarjan ✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WarmCard, { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-sm text-center",
            style: { color: C.textMid, lineHeight: 1.75 },
            children: "The ashes of the departed soul (Asthi) should be immersed in a sacred river. The Garuda Purana specifies these rivers as most powerful for the soul's liberation — in order of sanctity."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "antim-yatra.sacred_rivers", children: SACRED_RIVERS.map((river, i) => {
          const open = expandedRiver === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpandedRiver(open ? null : i),
              ocid: `antim-yatra.sacred_river.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, className: "shrink-0", children: river.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body text-[10px] rounded-full px-2 py-0.5",
                      style: {
                        background: C.goldBg,
                        color: C.textGoldBright,
                        border: `1px solid ${C.borderGold}`
                      },
                      children: [
                        "#",
                        i + 1,
                        " Most Sacred"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold italic text-sm mt-0.5",
                      style: { color: C.textDark },
                      children: river.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs",
                      style: { color: C.textLight },
                      children: river.location
                    }
                  )
                ] })
              ] }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-3",
                    style: { color: C.textMid, lineHeight: 1.85 },
                    children: river.significance
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-3",
                    style: {
                      background: C.goldBg,
                      border: `1px solid ${C.borderGold}`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs font-semibold mb-0.5",
                          style: { color: C.textGoldBright },
                          children: "Best time:"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs", style: { color: C.textMid }, children: river.bestTime })
                    ]
                  }
                )
              ]
            },
            river.name
          );
        }) })
      ]
    }
  );
}
function AskKrishnaCTA({ context }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-5 mt-5 text-center",
      style: {
        background: `linear-gradient(160deg, ${C.headerBg}, ${C.goldBg})`,
        border: `1px solid ${C.borderGold}`,
        boxShadow: "0 4px 16px oklch(0.65 0.12 52 / 0.10)"
      },
      "data-ocid": "antim-yatra.ask_krishna_cta",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem", marginBottom: "0.5rem" }, children: "🪷" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display font-bold italic mb-2",
            style: { color: C.textDark, fontSize: "1rem" },
            children: context
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs mb-4",
            style: { color: C.textLight, lineHeight: 1.7 },
            children: "Krishna knows every answer. He was there at the beginning and he will be there at the end. Ask him anything — about the soul, afterlife, or what happens to your loved one now."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/guidance",
            className: "inline-block rounded-full px-6 py-2.5 font-display font-bold text-sm transition-all",
            style: {
              background: `linear-gradient(135deg, ${C.gold}, oklch(0.58 0.20 50))`,
              color: "oklch(0.98 0.01 60)",
              boxShadow: "0 3px 12px oklch(0.58 0.18 50 / 0.28)"
            },
            "data-ocid": "antim-yatra.ask_krishna_button",
            children: "🦚 Ask Krishna About the Afterlife"
          }
        )
      ]
    }
  );
}
function GarudaTab() {
  const [expanded, setExpanded] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.garuda_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "गरुड पुराण",
            english: "The Soul's Journey After Death",
            subtitle: "The Garuda Purana is traditionally recited in the home during the 13-day mourning period. Its teachings help the departing soul understand its journey and surrender to God with knowledge rather than fear. What follows is accurate guidance from this sacred text."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: GARUDA_TEACHINGS.map((teaching, i) => {
          const open = expanded === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpanded(open ? null : i),
              ocid: `antim-yatra.garuda_teaching.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0", children: teaching.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold italic text-sm",
                      style: { color: C.textDark },
                      children: teaching.title
                    }
                  ),
                  !open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs mt-0.5 truncate",
                      style: { color: C.textLight },
                      children: [
                        teaching.description.slice(0, 70),
                        "…"
                      ]
                    }
                  )
                ] })
              ] }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-4",
                    style: { color: C.textMid, lineHeight: 1.85 },
                    children: teaching.description
                  }
                ),
                teaching.gitaRef && teaching.gitaSanskrit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-4",
                    style: {
                      background: `linear-gradient(135deg, ${C.goldBg}, ${C.headerBg})`,
                      border: `1px solid ${C.borderGold}`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs tracking-widest mb-2",
                          style: { color: C.textGold },
                          children: teaching.gitaRef
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-semibold text-center mb-2",
                          lang: "sa",
                          style: {
                            color: C.textDark,
                            fontSize: "0.95rem",
                            lineHeight: 2
                          },
                          children: teaching.gitaSanskrit
                        }
                      ),
                      teaching.gitaMeaning && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm italic",
                          style: { color: C.textMid, lineHeight: 1.7 },
                          children: teaching.gitaMeaning
                        }
                      )
                    ]
                  }
                )
              ]
            },
            teaching.title
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AskKrishnaCTA, { context: "Questions about the soul's journey after death?" })
      ]
    }
  );
}
function MourningTab() {
  const [expanded, setExpanded] = reactExports.useState(0);
  const [varshikExpanded, setVarshikExpanded] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.mourning_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "शोक काल — नियम और परंपरा",
            english: "Mourning Period Rules",
            subtitle: "The 13-day mourning period has specific guidelines from Vedic tradition to support the departing soul's journey and the family's healing. These are not burdens — they are acts of love and solidarity with the soul in transition."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-6", "data-ocid": "antim-yatra.mourning_rules", children: MOURNING_RULES.map((rule, i) => {
          const open = expanded === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpanded(open ? null : i),
              ocid: `antim-yatra.mourning_rule.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: rule.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold italic text-sm",
                      style: { color: C.textDark },
                      children: rule.category
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] rounded-full px-2 py-0.5",
                      style: {
                        background: C.goldBg,
                        color: C.textGoldBright,
                        border: `1px solid ${C.borderGold}`
                      },
                      children: rule.duration
                    }
                  )
                ] })
              ] }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: rule.rules.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "font-body text-sm flex items-start gap-2",
                  style: { color: C.textMid, lineHeight: 1.75 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: C.textGold, marginTop: "0.25rem" }, children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
                  ]
                },
                r.slice(0, 30)
              )) })
            },
            rule.category
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { label: "✦ Varshik Shradh — Annual Ceremony ✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(WarmCard, { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-bold italic text-center mb-2",
              style: { color: C.textDark },
              children: "वार्षिक श्राद्ध — Annual Death Anniversary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm text-center",
              style: { color: C.textMid, lineHeight: 1.7 },
              children: "Performed exactly one year after death, on the same lunar tithi. Marks the completion of the first year of grief and establishes the rhythm of annual remembrance."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "antim-yatra.varshik_shradh", children: VARSHIK_SHRADH_INFO.map((info, i) => {
          const open = varshikExpanded === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setVarshikExpanded(open ? null : i),
              ocid: `antim-yatra.varshik_shradh.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: info.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold italic text-sm flex-1 min-w-0",
                    style: { color: C.textDark },
                    children: info.title
                  }
                )
              ] }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm",
                  style: { color: C.textMid, lineHeight: 1.85 },
                  children: info.content
                }
              )
            },
            info.title
          );
        }) })
      ]
    }
  );
}
function PitruPakshaTab() {
  const [expanded, setExpanded] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.pitru_paksha_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "पितृ पक्ष",
            english: "15 Days for All Ancestors — Annual Sacred Observance"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(WarmCard, { elevated: true, className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic text-sm text-center mb-1",
              style: { color: C.textGoldBright, lineHeight: 1.7 },
              children: '"Bhadrapada month, Krishna Paksha — Ashwin Krishna Amavasya"'
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs text-center",
              style: { color: C.textLight },
              children: "Typically falls in September–October each year"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: PITRU_PAKSHA_INFO.map((info, i) => {
          const open = expanded === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            AccordionItem,
            {
              isOpen: open,
              onToggle: () => setExpanded(open ? null : i),
              ocid: `antim-yatra.pitru_paksha.${i + 1}`,
              header: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: info.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold italic text-sm",
                      style: { color: C.textDark },
                      children: info.title
                    }
                  ),
                  !open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs mt-0.5 truncate",
                      style: { color: C.textLight },
                      children: [
                        info.content.slice(0, 65),
                        "…"
                      ]
                    }
                  )
                ] })
              ] }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm",
                  style: { color: C.textMid, lineHeight: 1.85 },
                  children: info.content
                }
              )
            },
            info.title
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(WarmCard, { elevated: true, className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display italic",
              style: {
                color: C.textGoldBright,
                fontSize: "1rem",
                lineHeight: 1.65
              },
              children: '"Those who worship the ancestors go to the ancestors."'
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-1", style: { color: C.textLight }, children: "— Bhagavad Gita 9.25" })
        ] })
      ]
    }
  );
}
function KrishnaAssuranceTab() {
  const [playingIdx, setPlayingIdx] = reactExports.useState(null);
  const [autoPlaying, setAutoPlaying] = reactExports.useState(false);
  const autoPlayRef = reactExports.useRef(null);
  const [expandedIdx, setExpandedIdx] = reactExports.useState(null);
  const startAutoPlay = () => {
    setAutoPlaying(true);
    setPlayingIdx(0);
    playHarmoniumTone(220);
    let idx = 0;
    autoPlayRef.current = setInterval(() => {
      idx++;
      if (idx >= SOUL_VERSES.length) {
        setAutoPlaying(false);
        setPlayingIdx(null);
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      } else {
        setPlayingIdx(idx);
        playHarmoniumTone(220 + idx * 8);
      }
    }, 6e3);
  };
  reactExports.useEffect(() => {
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "data-ocid": "antim-yatra.verses_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            sanskrit: "कृष्ण का वचन",
            english: "Krishna's Assurance — 16 Verses on the Eternal Soul",
            subtitle: "These verses are for the grieving family — words of comfort spoken directly by Krishna in the Bhagavad Gita. Read them slowly. Let them reach your heart. They are true."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WarmCard, { className: "mb-5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-display italic",
            style: {
              color: C.textGoldBright,
              fontSize: "1.05rem",
              lineHeight: 1.7
            },
            children: '"There is no death, Arjun. Only transformation. Krishna is waiting."'
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-display text-xs italic",
              style: { color: C.textGold },
              children: [
                SOUL_VERSES.length,
                " verses on the soul's eternal nature"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: autoPlaying ? () => {
                setAutoPlaying(false);
                setPlayingIdx(null);
                if (autoPlayRef.current) clearInterval(autoPlayRef.current);
              } : startAutoPlay,
              className: "rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all",
              style: {
                background: autoPlaying ? C.headerBg : C.goldBg,
                color: C.textGoldBright,
                border: `1px solid ${C.borderGold}`
              },
              "data-ocid": "antim-yatra.autoplay_button",
              children: autoPlaying ? "⬛ Stop" : "▶ Play All"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "antim-yatra.verses_list", children: SOUL_VERSES.map((verse, i) => {
          const isPlaying = playingIdx === i;
          const open = expandedIdx === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: Math.min(i * 0.04, 0.5) },
              className: "rounded-2xl overflow-hidden",
              style: {
                border: `1px solid ${isPlaying ? C.borderGold : C.borderSoft}`,
                boxShadow: isPlaying ? "0 0 20px oklch(0.65 0.14 52 / 0.14)" : "none"
              },
              "data-ocid": `antim-yatra.verse.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setExpandedIdx(open ? null : i),
                    className: "w-full flex items-center gap-3 p-4 text-left transition-all",
                    style: {
                      background: isPlaying ? `linear-gradient(135deg, ${C.goldBg}, ${C.headerBg})` : C.cardBg
                    },
                    "aria-expanded": open,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                          style: {
                            background: C.goldBg,
                            border: `1px solid ${C.borderGold}`
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-display text-xs font-bold",
                              style: { color: C.textGoldBright },
                              children: i + 1
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display text-xs mb-0.5",
                            style: { color: C.textGold },
                            children: verse.ref
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            className: "font-body text-sm leading-snug truncate",
                            style: { color: C.textDark },
                            children: [
                              verse.meaning.slice(0, 60),
                              "…"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (e) => {
                              e.stopPropagation();
                              setPlayingIdx(i === playingIdx ? null : i);
                              if (i !== playingIdx) playHarmoniumTone(220 + i * 8);
                            },
                            "aria-label": `Play verse ${i + 1}`,
                            className: "rounded-full w-8 h-8 flex items-center justify-center transition-all",
                            style: {
                              background: isPlaying ? C.goldBg : C.headerBg,
                              border: `1px solid ${C.borderGold}`,
                              color: C.textGoldBright
                            },
                            "data-ocid": `antim-yatra.play_verse.${i + 1}`,
                            children: isPlaying ? "■" : "▶"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: C.textGold, fontSize: "0.8rem" }, children: open ? "▲" : "▼" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.4 },
                    className: "overflow-hidden",
                    style: { background: C.creamBg },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs mb-3",
                          style: { color: C.textGold },
                          children: verse.chapter
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display font-semibold text-center mb-3",
                          lang: "sa",
                          style: {
                            color: C.textDark,
                            fontSize: "1.05rem",
                            lineHeight: 2
                          },
                          children: verse.sanskrit
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body italic text-sm text-center mb-4",
                          style: { color: C.textGold, lineHeight: 1.7 },
                          children: verse.transliteration
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GoldDivider, { label: "🪷" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm mb-4",
                          style: { color: C.textMid, lineHeight: 1.8 },
                          children: verse.meaning
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl p-3 mb-4",
                          style: {
                            background: C.goldBg,
                            border: `1px solid ${C.borderGold}`
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-body text-xs uppercase tracking-widest mb-1.5",
                                style: { color: C.textGold },
                                children: "For those who grieve —"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-body text-sm",
                                style: { color: C.textMid, lineHeight: 1.7 },
                                children: verse.forFamilyMeaning
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl p-4",
                          style: {
                            background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                            border: `1px solid ${C.borderGold}`,
                            boxShadow: "0 2px 10px oklch(0.65 0.12 52 / 0.08)"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-body text-xs uppercase tracking-widest mb-2",
                                style: { color: C.textGold },
                                children: "Krishna speaks to you, Arjun —"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "p",
                              {
                                className: "font-display italic",
                                style: {
                                  color: C.textGoldBright,
                                  lineHeight: 1.72,
                                  fontSize: "1rem"
                                },
                                children: [
                                  "“",
                                  verse.krishnaSpeak,
                                  "”"
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ] })
                  }
                ) })
              ]
            },
            verse.ref
          );
        }) })
      ]
    }
  );
}
const TABS = [
  { id: "antyesti", label: "Last Rites", icon: "🔥" },
  { id: "shradha", label: "13 Days", icon: "🕯️" },
  { id: "pind", label: "Pind Daan", icon: "🍚" },
  { id: "garuda", label: "Soul's Journey", icon: "📜" },
  { id: "mourning", label: "Mourning & Varshik", icon: "🌸" },
  { id: "pitru", label: "Pitru Paksha", icon: "🌑" },
  { id: "krishna", label: "Krishna's Promise", icon: "🪷" }
];
function AntimYatraPage() {
  const [path, setPath] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("antyesti");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen relative overflow-x-hidden",
      style: { background: C.pageBg },
      "data-ocid": "antim-yatra.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.88 0.060 58 / 0.18) 0%, transparent 70%)",
              zIndex: 0
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto px-4 pt-6 pb-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              className: "text-center mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs tracking-[0.35em] mb-2",
                    style: { color: C.textGold },
                    children: "॥ हरे कृष्ण ॥"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { scale: [1, 1.06, 1] },
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    },
                    style: { fontSize: "3rem", marginBottom: "0.75rem" },
                    "aria-hidden": true,
                    children: "🪷"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display font-bold italic mb-1",
                    style: {
                      fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                      color: C.textDark
                    },
                    children: "अन्तिम यात्रा"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm italic mb-4",
                    style: { color: C.textGold },
                    children: "The Final Journey — Complete Sacred Guide"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl p-4 max-w-lg mx-auto",
                    style: {
                      background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                      border: `1px solid ${C.borderGold}`,
                      boxShadow: "0 4px 20px oklch(0.65 0.12 52 / 0.12)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display italic",
                          style: {
                            color: C.textGoldBright,
                            fontSize: "1.02rem",
                            lineHeight: 1.68
                          },
                          children: '"My devotee never perishes. Never." — Bhagavad Gita 9.31'
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs mt-2",
                          style: { color: C.textLight },
                          children: "These rituals are an act of love. Krishna guides every soul."
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          !path && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              className: "mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-center text-sm mb-4",
                    style: { color: C.textMid },
                    children: "How can Krishna guide you today?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      type: "button",
                      onClick: () => setPath("rituals"),
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.99 },
                      className: "rounded-2xl p-5 text-center transition-all",
                      style: {
                        background: `linear-gradient(160deg, ${C.cardBg}, ${C.headerBg})`,
                        border: `1px solid ${C.borderGold}`,
                        boxShadow: "0 4px 16px oklch(0.65 0.12 52 / 0.10)"
                      },
                      "data-ocid": "antim-yatra.path_rituals",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: "0.5rem" }, children: "🕯️" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display font-bold italic mb-1",
                            style: { color: C.textDark, fontSize: "1rem" },
                            children: "I Want to Understand the Rituals"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs", style: { color: C.textLight }, children: "Learn the complete Antyesti Sanskar — the sacred Vedic rites for honouring a departed soul" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      type: "button",
                      onClick: () => setPath("immediate"),
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.99 },
                      className: "rounded-2xl p-5 text-center transition-all",
                      style: {
                        background: "linear-gradient(160deg, oklch(0.96 0.045 42 / 0.97), oklch(0.92 0.062 48 / 0.95))",
                        border: `1px solid ${C.borderGold}`,
                        boxShadow: "0 4px 16px oklch(0.65 0.14 48 / 0.12)"
                      },
                      "data-ocid": "antim-yatra.path_immediate",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: "0.5rem" }, children: "🙏" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-display font-bold italic mb-1",
                            style: { color: C.textDark, fontSize: "1rem" },
                            children: "I Am Sitting Next to a Departed Soul"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs", style: { color: C.textLight }, children: "Immediate step-by-step guidance — what to do right now, in this sacred moment" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          path === "immediate" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImmediateGuidanceView, { onBack: () => setPath(null) }),
          path === "rituals" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.2 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl p-4 mb-5 text-center",
                    style: {
                      background: `linear-gradient(135deg, ${C.headerBg}, ${C.goldBg})`,
                      border: `1px solid ${C.borderGold}`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display italic",
                          style: {
                            color: C.textGoldBright,
                            fontSize: "0.97rem",
                            lineHeight: 1.65
                          },
                          children: '"My devotee never perishes. Never." — BG 9.31. These rituals are a sacred act of love.'
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setPath(null),
                          className: "font-body text-xs mt-3 underline",
                          style: { color: C.textLight },
                          "data-ocid": "antim-yatra.change_path_button",
                          children: "← Change path"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-2xl p-1 mb-5 overflow-x-auto",
                    style: {
                      background: C.cardBgDeep,
                      border: `1px solid ${C.borderLight}`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 min-w-max", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setActiveTab(tab.id),
                        className: "shrink-0 min-w-[85px] py-2 px-2.5 rounded-xl font-display text-xs font-bold italic transition-all",
                        style: {
                          background: activeTab === tab.id ? `linear-gradient(135deg, ${C.goldBg}, ${C.headerBg})` : "transparent",
                          color: activeTab === tab.id ? C.textGoldBright : C.textLight,
                          border: activeTab === tab.id ? `1px solid ${C.borderGold}` : "1px solid transparent",
                          boxShadow: activeTab === tab.id ? "0 2px 8px oklch(0.65 0.12 52 / 0.10)" : "none"
                        },
                        role: "tab",
                        "aria-selected": activeTab === tab.id,
                        "data-ocid": `antim-yatra.tab_${tab.id}`,
                        children: [
                          tab.icon,
                          " ",
                          tab.label
                        ]
                      },
                      tab.id
                    )) })
                  }
                ),
                activeTab === "antyesti" && /* @__PURE__ */ jsxRuntimeExports.jsx(AntyestiTab, {}),
                activeTab === "shradha" && /* @__PURE__ */ jsxRuntimeExports.jsx(ShraddhaTab, {}),
                activeTab === "pind" && /* @__PURE__ */ jsxRuntimeExports.jsx(PindDaanTab, {}),
                activeTab === "garuda" && /* @__PURE__ */ jsxRuntimeExports.jsx(GarudaTab, {}),
                activeTab === "mourning" && /* @__PURE__ */ jsxRuntimeExports.jsx(MourningTab, {}),
                activeTab === "pitru" && /* @__PURE__ */ jsxRuntimeExports.jsx(PitruPakshaTab, {}),
                activeTab === "krishna" && /* @__PURE__ */ jsxRuntimeExports.jsx(KrishnaAssuranceTab, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    className: "mt-8 rounded-2xl p-5 text-center",
                    style: {
                      background: `linear-gradient(160deg, ${C.headerBg}, ${C.goldBg})`,
                      border: `1px solid ${C.borderGold}`,
                      boxShadow: "0 4px 20px oklch(0.65 0.12 52 / 0.10)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display italic mb-2",
                          style: { color: C.textGoldBright, fontSize: "1rem" },
                          children: '"Leave a sacred message for those you love"'
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs mb-4",
                          style: { color: C.textLight },
                          children: "Write your Spiritual Will — guided by Krishna's wisdom"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/spiritual-will",
                          className: "inline-block rounded-full px-6 py-2.5 font-display font-bold text-sm transition-all",
                          style: {
                            background: `linear-gradient(135deg, ${C.gold}, oklch(0.58 0.20 50))`,
                            color: "oklch(0.98 0.01 60)",
                            boxShadow: "0 3px 12px oklch(0.58 0.18 50 / 0.28)"
                          },
                          "data-ocid": "antim-yatra.spiritual_will_link",
                          children: "✍ Write Your Spiritual Will"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "font-body text-xs italic",
              style: { color: C.textGold },
              "data-ocid": "antim-yatra.back_home",
              children: "← Return to Home"
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  AntimYatraPage
};
