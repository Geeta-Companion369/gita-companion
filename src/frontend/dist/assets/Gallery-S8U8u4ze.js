import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-CodWPqWB.js";
const KRISHNA_PHOTOS = [
  // ─── Krishna Alone / Flute / Childhood ───────────────────────────────────────
  {
    id: "k1",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    caption: "Krishna & Arjuna",
    captionHindi: "श्री कृष्ण"
  },
  {
    id: "k2",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lord_Krishna_with_cow.jpg/640px-Lord_Krishna_with_cow.jpg",
    caption: "Krishna with Cow",
    captionHindi: "गोपाल"
  },
  {
    id: "k3",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    caption: "Radha Krishna",
    captionHindi: "राधे कृष्ण"
  },
  {
    id: "k4",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    caption: "Lakshmi Narayana",
    captionHindi: "लक्ष्मी नारायण"
  },
  {
    id: "k5",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    caption: "Narayana",
    captionHindi: "नारायण"
  },
  {
    id: "k6",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    caption: "Radha Krishna in the Grove",
    captionHindi: "वन विहार"
  },
  {
    id: "k7",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    caption: "Radha Krishna on Swing",
    captionHindi: "राधा कृष्ण झूला"
  },
  {
    id: "k8",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    caption: "Tanjore Radha Krishna",
    captionHindi: "तंजावुर कृष्ण"
  },
  {
    id: "k9",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    caption: "Pichwai Srinathji",
    captionHindi: "श्रीनाथजी"
  },
  {
    id: "k10",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg/640px-Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg",
    caption: "Divine Dance",
    captionHindi: "दिव्य नृत्य"
  },
  {
    id: "k11",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lakshmi_by_Raja_Ravi_Varma.jpg/640px-Lakshmi_by_Raja_Ravi_Varma.jpg",
    caption: "Goddess Lakshmi",
    captionHindi: "महालक्ष्मी"
  },
  {
    id: "k12",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saraswati_by_Raja_Ravi_Varma.jpg/640px-Saraswati_by_Raja_Ravi_Varma.jpg",
    caption: "Goddess Saraswati",
    captionHindi: "सरस्वती"
  },
  {
    id: "k13",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/640px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg",
    caption: "Lord Ganesha",
    captionHindi: "गणेश"
  },
  {
    id: "k14",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lord_Hanuman.jpg/640px-Lord_Hanuman.jpg",
    caption: "Hanuman Ji",
    captionHindi: "हनुमान"
  },
  {
    id: "k15",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maa_Durga_with_all_Weapons.jpg/640px-Maa_Durga_with_all_Weapons.jpg",
    caption: "Maa Durga",
    captionHindi: "दुर्गा माता"
  },
  {
    id: "k16",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Konarka_Surya_statue.jpg/640px-Konarka_Surya_statue.jpg",
    caption: "Surya Narayan",
    captionHindi: "सूर्य भगवान"
  },
  {
    id: "k17",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lord_Rama_with_arrow.jpg/640px-Lord_Rama_with_arrow.jpg",
    caption: "Lord Rama",
    captionHindi: "श्री राम"
  },
  {
    id: "k18",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Shani_graha.jpg/640px-Shani_graha.jpg",
    caption: "Shani Dev",
    captionHindi: "शनि देव"
  },
  {
    id: "k19",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Krishna_butter.jpg/640px-Krishna_butter.jpg",
    caption: "Venugopala",
    captionHindi: "वेणुगोपाल"
  },
  {
    id: "k20",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Krishna_Govardhan_Puja.jpg/640px-Krishna_Govardhan_Puja.jpg",
    caption: "Govardhandhari",
    captionHindi: "गोवर्धनधारी"
  },
  {
    id: "k21",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Krishna-and-Radha-1800.jpg/640px-Krishna-and-Radha-1800.jpg",
    caption: "Rasa Lila",
    captionHindi: "रास लीला"
  },
  {
    id: "k22",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Baby_Krishna.jpg/640px-Baby_Krishna.jpg",
    caption: "Bala Krishna",
    captionHindi: "बाल कृष्ण"
  },
  {
    id: "k23",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vishwaroopa.jpg/640px-Vishwaroopa.jpg",
    caption: "Vishwaroopa",
    captionHindi: "विश्वरूप"
  },
  {
    id: "k24",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dwarka_temple.jpg/640px-Dwarka_temple.jpg",
    caption: "Dwarkadhish",
    captionHindi: "द्वारकाधीश"
  },
  {
    id: "k25",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Madhubani_Painting.jpg/640px-Madhubani_Painting.jpg",
    caption: "Madhubani Art",
    captionHindi: "मधुबनी"
  },
  {
    id: "k26",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    caption: "Basohli Krishna",
    captionHindi: "बसोहली"
  },
  {
    id: "k27",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    caption: "Yashoda Maiya",
    captionHindi: "यशोदा मैया"
  },
  {
    id: "k28",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    caption: "Kaliya Mardan",
    captionHindi: "कालिया मर्दन"
  },
  {
    id: "k29",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    caption: "Putana Vadh",
    captionHindi: "पूतना वध"
  },
  {
    id: "k30",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    caption: "Krishna Sudama",
    captionHindi: "कृष्ण सुदामा"
  },
  {
    id: "k31",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    caption: "Kamsa Vadh",
    captionHindi: "कंस वध"
  },
  {
    id: "k32",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    caption: "Gita Upadesh",
    captionHindi: "गीता उपदेश"
  },
  {
    id: "k33",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    caption: "Mathura Krishna",
    captionHindi: "मथुरा कृष्ण"
  },
  {
    id: "k34",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg/640px-Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg",
    caption: "Vrindavan Dham",
    captionHindi: "वृन्दावन धाम"
  },
  {
    id: "k35",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lakshmi_by_Raja_Ravi_Varma.jpg/640px-Lakshmi_by_Raja_Ravi_Varma.jpg",
    caption: "Braj Lila",
    captionHindi: "ब्रज लीला"
  },
  {
    id: "k36",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saraswati_by_Raja_Ravi_Varma.jpg/640px-Saraswati_by_Raja_Ravi_Varma.jpg",
    caption: "Gopala Krishna",
    captionHindi: "गोपाल"
  },
  {
    id: "k37",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/640px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg",
    caption: "Makhan Chor",
    captionHindi: "माखन चोर"
  },
  {
    id: "k38",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lord_Hanuman.jpg/640px-Lord_Hanuman.jpg",
    caption: "Govinda Krishna",
    captionHindi: "गोविंद"
  },
  {
    id: "k39",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maa_Durga_with_all_Weapons.jpg/640px-Maa_Durga_with_all_Weapons.jpg",
    caption: "Murali Manohar",
    captionHindi: "मुरली मनोहर"
  },
  {
    id: "k40",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Konarka_Surya_statue.jpg/640px-Konarka_Surya_statue.jpg",
    caption: "Kanhaiya Lal",
    captionHindi: "कन्हैया लाल"
  },
  {
    id: "k41",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lord_Rama_with_arrow.jpg/640px-Lord_Rama_with_arrow.jpg",
    caption: "Nandalal Krishna",
    captionHindi: "नंदलाल"
  },
  {
    id: "k42",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Shani_graha.jpg/640px-Shani_graha.jpg",
    caption: "Bansuri Krishna",
    captionHindi: "बांसुरी कृष्ण"
  },
  {
    id: "k43",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    caption: "Kangra Radha Krishna",
    captionHindi: "कांगड़ा राधा कृष्ण"
  },
  {
    id: "k44",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    caption: "Basholi Radha Krishna",
    captionHindi: "बसोहली राधा कृष्ण"
  },
  {
    id: "k45",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    caption: "Pahari Radha Krishna",
    captionHindi: "पहाड़ी राधा कृष्ण"
  },
  {
    id: "k46",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    caption: "Rajasthani Art",
    captionHindi: "राजस्थानी कला"
  },
  {
    id: "k47",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    caption: "Mughal Style",
    captionHindi: "मुगल शैली"
  },
  {
    id: "k48",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    caption: "Mysore Painting",
    captionHindi: "मैसूर चित्र"
  },
  {
    id: "k49",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    caption: "Tanjore Painting",
    captionHindi: "तंजावुर चित्र"
  },
  {
    id: "k50",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    caption: "Pichwai Art",
    captionHindi: "पिछवाई कला"
  },
  {
    id: "k51",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lakshmi_by_Raja_Ravi_Varma.jpg/640px-Lakshmi_by_Raja_Ravi_Varma.jpg",
    caption: "Nathdwara Shrinathji",
    captionHindi: "नाथद्वारा श्रीनाथजी"
  },
  {
    id: "k52",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saraswati_by_Raja_Ravi_Varma.jpg/640px-Saraswati_by_Raja_Ravi_Varma.jpg",
    caption: "ISKCON Radha Krishna",
    captionHindi: "इस्कॉन राधा कृष्ण"
  },
  {
    id: "k53",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/640px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg",
    caption: "Vrindavan Radha Krishna",
    captionHindi: "वृन्दावन राधा कृष्ण"
  },
  {
    id: "k54",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lord_Hanuman.jpg/640px-Lord_Hanuman.jpg",
    caption: "Barsana Lila",
    captionHindi: "बरसाना लीला"
  },
  {
    id: "k55",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maa_Durga_with_all_Weapons.jpg/640px-Maa_Durga_with_all_Weapons.jpg",
    caption: "Gokul Lila",
    captionHindi: "गोकुल लीला"
  },
  {
    id: "k56",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Konarka_Surya_statue.jpg/640px-Konarka_Surya_statue.jpg",
    caption: "Nikunj Lila",
    captionHindi: "निकुञ्ज लीला"
  },
  {
    id: "k57",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lord_Rama_with_arrow.jpg/640px-Lord_Rama_with_arrow.jpg",
    caption: "Yamuna Tat",
    captionHindi: "यमुना तट"
  },
  {
    id: "k58",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Shani_graha.jpg/640px-Shani_graha.jpg",
    caption: "Jhoola Lila",
    captionHindi: "झूला लीला"
  },
  {
    id: "k59",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg/640px-Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg",
    caption: "Holi Lila",
    captionHindi: "होली लीला"
  },
  {
    id: "k60",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    caption: "Ras Lila",
    captionHindi: "रास लीला"
  },
  {
    id: "k61",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    caption: "Divine Milan",
    captionHindi: "दिव्य मिलन"
  },
  {
    id: "k62",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    caption: "Divine Prem",
    captionHindi: "दिव्य प्रेम"
  },
  {
    id: "k63",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    caption: "Sakhis with Radha Krishna",
    captionHindi: "सखियाँ"
  },
  {
    id: "k64",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    caption: "Gopi Krishna",
    captionHindi: "गोपी कृष्ण"
  },
  {
    id: "k65",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    caption: "Meera Krishna",
    captionHindi: "मीरा कृष्ण"
  },
  {
    id: "k66",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    caption: "Surdas Krishna",
    captionHindi: "सूरदास कृष्ण"
  },
  {
    id: "k67",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    caption: "Chaitanya Mahaprabhu",
    captionHindi: "चैतन्य महाप्रभु"
  },
  {
    id: "k68",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lakshmi_by_Raja_Ravi_Varma.jpg/640px-Lakshmi_by_Raja_Ravi_Varma.jpg",
    caption: "Vallabhacharya",
    captionHindi: "वल्लभाचार्य"
  },
  {
    id: "k69",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saraswati_by_Raja_Ravi_Varma.jpg/640px-Saraswati_by_Raja_Ravi_Varma.jpg",
    caption: "Nimbarka Sampradaya",
    captionHindi: "निंबार्क सम्प्रदाय"
  },
  {
    id: "k70",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lord_Hanuman.jpg/640px-Lord_Hanuman.jpg",
    caption: "Madhva Sampradaya",
    captionHindi: "माध्व सम्प्रदाय"
  },
  {
    id: "k71",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maa_Durga_with_all_Weapons.jpg/640px-Maa_Durga_with_all_Weapons.jpg",
    caption: "Ramanuja Sampradaya",
    captionHindi: "रामानुज सम्प्रदाय"
  },
  {
    id: "k72",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Konarka_Surya_statue.jpg/640px-Konarka_Surya_statue.jpg",
    caption: "Ramanandi Sampradaya",
    captionHindi: "रामानंदी सम्प्रदाय"
  },
  {
    id: "k73",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lord_Rama_with_arrow.jpg/640px-Lord_Rama_with_arrow.jpg",
    caption: "Kabir Krishna",
    captionHindi: "कबीर कृष्ण"
  },
  {
    id: "k74",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Shani_graha.jpg/640px-Shani_graha.jpg",
    caption: "Tulsidas Krishna",
    captionHindi: "तुलसीदास कृष्ण"
  },
  {
    id: "k75",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/640px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg",
    caption: "Mira Bai Krishna",
    captionHindi: "मीरा बाई कृष्ण"
  },
  {
    id: "k76",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg/640px-Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg",
    caption: "Surdas Bhakti",
    captionHindi: "सूरदास भक्ति"
  },
  {
    id: "k77",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    caption: "Tukaram Krishna",
    captionHindi: "तुकाराम कृष्ण"
  },
  {
    id: "k78",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    caption: "Namdev Krishna",
    captionHindi: "नामदेव कृष्ण"
  },
  {
    id: "k79",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    caption: "Eknath Krishna",
    captionHindi: "एकनाथ कृष्ण"
  },
  {
    id: "k80",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    caption: "Gyaneshwar Krishna",
    captionHindi: "ज्ञानेश्वर कृष्ण"
  },
  {
    id: "k81",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    caption: "Samarth Ramdas",
    captionHindi: "समर्थ रामदास"
  },
  {
    id: "k82",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    caption: "Tukaram Abhang",
    captionHindi: "तुकाराम अभंग"
  },
  {
    id: "k83",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    caption: "Namdev Abhang",
    captionHindi: "नामदेव अभंग"
  },
  {
    id: "k84",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pichwai_painting.jpg/640px-Pichwai_painting.jpg",
    caption: "Jnandev Krishna",
    captionHindi: "ज्ञानदेव कृष्ण"
  },
  {
    id: "k85",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lakshmi_by_Raja_Ravi_Varma.jpg/640px-Lakshmi_by_Raja_Ravi_Varma.jpg",
    caption: "Sopandev Krishna",
    captionHindi: "सोपानदेव कृष्ण"
  },
  {
    id: "k86",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saraswati_by_Raja_Ravi_Varma.jpg/640px-Saraswati_by_Raja_Ravi_Varma.jpg",
    caption: "Muktabai Krishna",
    captionHindi: "मुक्ताबाई कृष्ण"
  },
  {
    id: "k87",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lord_Hanuman.jpg/640px-Lord_Hanuman.jpg",
    caption: "Nivrutti Krishna",
    captionHindi: "निवृत्ति कृष्ण"
  },
  {
    id: "k88",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Maa_Durga_with_all_Weapons.jpg/640px-Maa_Durga_with_all_Weapons.jpg",
    caption: "Savitri Krishna",
    captionHindi: "सावित्री कृष्ण"
  },
  {
    id: "k89",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Konarka_Surya_statue.jpg/640px-Konarka_Surya_statue.jpg",
    caption: "Satyabhama Krishna",
    captionHindi: "सत्यभामा कृष्ण"
  },
  {
    id: "k90",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lord_Rama_with_arrow.jpg/640px-Lord_Rama_with_arrow.jpg",
    caption: "Rukmini Krishna",
    captionHindi: "रुक्मिणी कृष्ण"
  },
  {
    id: "k91",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Shani_graha.jpg/640px-Shani_graha.jpg",
    caption: "Jambavati Krishna",
    captionHindi: "जांबवती कृष्ण"
  },
  {
    id: "k92",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg/640px-Nataraja_Shiva_statue%2C_Dancing_Shiva_in_Chola_bronze_style_by_Indian_artist.jpg",
    caption: "Kalindi Krishna",
    captionHindi: "कालिंदी कृष्ण"
  },
  {
    id: "k93",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/640px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg",
    caption: "Mitravinda Krishna",
    captionHindi: "मित्रविंदा कृष्ण"
  },
  {
    id: "k94",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Krishna-Arjun.jpg/640px-Krishna-Arjun.jpg",
    caption: "Nagnajiti Krishna",
    captionHindi: "नाग्नजिति कृष्ण"
  },
  {
    id: "k95",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Radha_and_Krishna_in_the_Grove.jpg/640px-Radha_and_Krishna_in_the_Grove.jpg",
    caption: "Bhadra Krishna",
    captionHindi: "भद्रा कृष्ण"
  },
  {
    id: "k96",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Radha_krishna.jpg/640px-Radha_krishna.jpg",
    caption: "Lakshana Krishna",
    captionHindi: "लक्षणा कृष्ण"
  },
  {
    id: "k97",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Radha_Krishna_Tanjore_style.jpg/640px-Radha_Krishna_Tanjore_style.jpg",
    caption: "Susheela Krishna",
    captionHindi: "सुशीला कृष्ण"
  },
  {
    id: "k98",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg/640px-Krishna_and_Radha_playing_a_swing-_A_Kangra_Painting.jpg",
    caption: "Madhavi Krishna",
    captionHindi: "माधवी कृष्ण"
  },
  {
    id: "k99",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LakshmiNarayana.jpg/640px-LakshmiNarayana.jpg",
    caption: "Kirti Krishna",
    captionHindi: "कीर्ति कृष्ण"
  },
  {
    id: "k100",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayana.jpg/640px-Narayana.jpg",
    caption: "Saibya Krishna",
    captionHindi: "सैब्या कृष्ण"
  }
];
const STORY_CARDS = [
  {
    chapter: 1,
    titleSanskrit: "अर्जुन विषाद योग",
    titleEnglish: "The Yoga of Arjuna's Grief",
    subtitle: "Chapter 1 · 47 Verses",
    summary: "On the battlefield of Kurukshetra, Arjuna surveys both armies and sees his beloved teachers, grandfathers, and kinsmen. Overwhelmed by grief and compassion, his Gandiva bow slips from his hands. He surrenders to Krishna — and the Bhagavad Gita begins.",
    keyVerse: {
      ref: "BG 2.7",
      sanskrit: "कार्पण्यदोषोपहतस्वभावः",
      english: "Overcome by weakness, I ask you — what is truly beneficial for me? I surrender to you, teach me."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.14 58) 0%, oklch(0.86 0.18 46) 100%)",
    accentHue: 46
  },
  {
    chapter: 2,
    titleSanskrit: "सांख्य योग",
    titleEnglish: "The Yoga of Knowledge",
    subtitle: "Chapter 2 · 72 Verses",
    summary: "Krishna reveals the immortal nature of the soul — it is never born, never dies. He teaches Nishkama Karma: act without attachment to results. The foundational wisdom of the entire Gita is laid in this chapter.",
    keyVerse: {
      ref: "BG 2.20",
      sanskrit: "न जायते म्रियते वा कदाचिन्",
      english: "The soul is never born nor dies at any time. It is unborn, eternal, ever-existing and primeval."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.16 340) 0%, oklch(0.84 0.14 320) 100%)",
    accentHue: 340
  },
  {
    chapter: 3,
    titleSanskrit: "कर्म योग",
    titleEnglish: "The Yoga of Action",
    subtitle: "Chapter 3 · 43 Verses",
    summary: "Inaction is not an option. Krishna teaches that every human being must act — but without selfish desire. Perform your duty as an offering to the Divine. The universe itself is sustained by sacrifice.",
    keyVerse: {
      ref: "BG 3.19",
      sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर",
      english: "Therefore, without being attached to results, one should act as a matter of duty."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.12 32) 0%, oklch(0.86 0.16 28) 100%)",
    accentHue: 32
  },
  {
    chapter: 4,
    titleSanskrit: "ज्ञान कर्म संन्यास योग",
    titleEnglish: "The Yoga of Wisdom",
    subtitle: "Chapter 4 · 42 Verses",
    summary: "Krishna reveals that the Gita is eternal wisdom, spoken first to the Sun God. He appears age after age to restore dharma. True wisdom burns all karma to ashes — the fire of knowledge is the greatest purifier.",
    keyVerse: {
      ref: "BG 4.7",
      sanskrit: "यदा यदा हि धर्मस्य",
      english: "Whenever dharma declines and adharma rises, I appear on earth."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.18 54) 0%, oklch(0.85 0.20 46) 100%)",
    accentHue: 54
  },
  {
    chapter: 5,
    titleSanskrit: "कर्म संन्यास योग",
    titleEnglish: "The Yoga of Renunciation",
    subtitle: "Chapter 5 · 29 Verses",
    summary: "Both the path of action and the path of renunciation lead to liberation. The wise see no difference between a learned sage and an ordinary worker who acts without ego. True renunciation is inner, not external.",
    keyVerse: {
      ref: "BG 5.10",
      sanskrit: "ब्रह्मण्याधाय कर्माणि",
      english: "One who performs duty without attachment is unaffected by sin — as a lotus leaf is untouched by water."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.14 148) 0%, oklch(0.84 0.16 160) 100%)",
    accentHue: 148
  },
  {
    chapter: 6,
    titleSanskrit: "ध्यान योग",
    titleEnglish: "The Yoga of Meditation",
    subtitle: "Chapter 6 · 47 Verses",
    summary: "The path of dhyana — stilling the restless mind through practice and detachment. A steady flame in a windless place is the symbol of the perfected yogi. Of all yogis, the greatest is the devotee who always thinks of Krishna.",
    keyVerse: {
      ref: "BG 6.47",
      sanskrit: "योगिनामपि सर्वेषाम्",
      english: "Of all yogis, the one who always abides in Me with great faith — is the most intimately united with Me."
    },
    gradient: "linear-gradient(135deg, oklch(0.88 0.18 268) 0%, oklch(0.82 0.16 280) 100%)",
    accentHue: 268
  },
  {
    chapter: 7,
    titleSanskrit: "ज्ञान विज्ञान योग",
    titleEnglish: "The Yoga of Knowledge and Wisdom",
    subtitle: "Chapter 7 · 30 Verses",
    summary: "Krishna reveals His two natures — the material (apara) and the spiritual (para). He is the taste of water, the light of the sun and moon, the Om in the Vedas. Everything that exists is a manifestation of His energy.",
    keyVerse: {
      ref: "BG 7.7",
      sanskrit: "मत्तः परतरं नान्यत्",
      english: "There is nothing higher than Me. Everything is strung on Me as gems on a string."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.16 220) 0%, oklch(0.84 0.14 240) 100%)",
    accentHue: 220
  },
  {
    chapter: 8,
    titleSanskrit: "अक्षर ब्रह्म योग",
    titleEnglish: "The Yoga of the Imperishable Brahman",
    subtitle: "Chapter 8 · 28 Verses",
    summary: "At the moment of death, whatever state of mind one remembers — that state one attains. One who remembers Krishna at the time of death reaches Krishna. The syllable Om is the Supreme Brahman.",
    keyVerse: {
      ref: "BG 8.5",
      sanskrit: "अन्तकाले च मामेव",
      english: "Whoever, at the time of death, remembers Me — reaches My state. Of this there is no doubt."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.14 46) 0%, oklch(0.85 0.18 36) 100%)",
    accentHue: 46
  },
  {
    chapter: 9,
    titleSanskrit: "राज विद्या योग",
    titleEnglish: "The Yoga of Royal Knowledge",
    subtitle: "Chapter 9 · 34 Verses",
    summary: "The most sacred of all secrets — pure, direct, and joyfully practised. Whoever offers Krishna a leaf, a flower, a fruit, or water with love and devotion — He accepts it. Pure devotion is the easiest and highest path.",
    keyVerse: {
      ref: "BG 9.26",
      sanskrit: "पत्रं पुष्पं फलं तोयम्",
      english: "If one offers Me with love a leaf, a flower, a fruit or water — I will accept it."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.18 52) 0%, oklch(0.86 0.22 46) 100%)",
    accentHue: 52
  },
  {
    chapter: 10,
    titleSanskrit: "विभूति योग",
    titleEnglish: "The Yoga of Divine Glories",
    subtitle: "Chapter 10 · 42 Verses",
    summary: "Krishna enumerates His divine manifestations. He is the best of everything — the brightest sun, the most majestic mountain, the wisest sage. All that is glorious, powerful, and beautiful in this world is but a spark of His splendour.",
    keyVerse: {
      ref: "BG 10.41",
      sanskrit: "यद्यद्विभूतिमत्सत्त्वम्",
      english: "Whatever is glorious, beautiful, or powerful — know that it springs from a fragment of My splendour."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.20 54) 0%, oklch(0.84 0.24 46) 100%)",
    accentHue: 54
  },
  {
    chapter: 11,
    titleSanskrit: "विश्वरूप दर्शन योग",
    titleEnglish: "The Yoga of the Cosmic Form",
    subtitle: "Chapter 11 · 55 Verses",
    summary: "Arjuna is granted divine vision. He sees the infinite Vishwaroopa of Krishna — countless arms, mouths, eyes, blazing like a thousand suns. Overwhelmed and trembling, he begs Krishna to return to His gentle two-armed form.",
    keyVerse: {
      ref: "BG 11.12",
      sanskrit: "दिवि सूर्यसहस्रस्य",
      english: "If thousands of suns rose at once, their combined radiance might resemble the Supreme's effulgence."
    },
    gradient: "linear-gradient(135deg, oklch(0.88 0.22 32) 0%, oklch(0.82 0.20 20) 100%)",
    accentHue: 32
  },
  {
    chapter: 12,
    titleSanskrit: "भक्ति योग",
    titleEnglish: "The Yoga of Devotion",
    subtitle: "Chapter 12 · 20 Verses",
    summary: "Krishna declares: the path of pure bhakti — loving devotion — is easier and more direct than the path of formless Brahman. He describes the qualities of the devotee most dear to Him: equal in joy and sorrow, free from ego and possessiveness.",
    keyVerse: {
      ref: "BG 12.14",
      sanskrit: "सन्तुष्टः सततं योगी",
      english: "The devotee who is pure, expert, impartial, and has renounced all undertakings — is most dear to Me."
    },
    gradient: "linear-gradient(135deg, oklch(0.92 0.16 340) 0%, oklch(0.86 0.18 320) 100%)",
    accentHue: 340
  },
  {
    chapter: 13,
    titleSanskrit: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    titleEnglish: "The Yoga of the Field and Its Knower",
    subtitle: "Chapter 13 · 35 Verses",
    summary: "This body is the 'field' and the soul is the 'knower of the field'. Krishna is the Knower in all fields. True wisdom is to see the immortal soul in all living beings and to know that the body is temporary.",
    keyVerse: {
      ref: "BG 13.17",
      sanskrit: "ज्योतिषामपि तज्ज्योतिः",
      english: "That is the light of all lights, beyond all darkness — knowledge, the knowable, and the goal of knowledge."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.14 268) 0%, oklch(0.84 0.16 280) 100%)",
    accentHue: 268
  },
  {
    chapter: 14,
    titleSanskrit: "गुणत्रय विभाग योग",
    titleEnglish: "The Yoga of the Three Qualities",
    subtitle: "Chapter 14 · 27 Verses",
    summary: "All of nature is made of three gunas: Sattva (purity), Rajas (passion), and Tamas (inertia). These bind the soul to the body. One who transcends all three gunas attains liberation and merges in the Brahman.",
    keyVerse: {
      ref: "BG 14.19",
      sanskrit: "नान्यं गुणेभ्यः कर्तारम्",
      english: "When one knows the three gunas as the doers and knows the Self beyond them — they attain My divine nature."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.16 148) 0%, oklch(0.85 0.18 160) 100%)",
    accentHue: 148
  },
  {
    chapter: 15,
    titleSanskrit: "पुरुषोत्तम योग",
    titleEnglish: "The Yoga of the Supreme Person",
    subtitle: "Chapter 15 · 20 Verses",
    summary: "The cosmic Ashvattha tree has its roots above and branches below — it represents the world of maya. Only by cutting this tree with the axe of detachment can one reach the Supreme Person, Purushottama.",
    keyVerse: {
      ref: "BG 15.15",
      sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टः",
      english: "I am seated in the hearts of all. From Me come memory, knowledge and forgetfulness."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.18 46) 0%, oklch(0.84 0.20 36) 100%)",
    accentHue: 46
  },
  {
    chapter: 16,
    titleSanskrit: "दैवासुर सम्पद् विभाग योग",
    titleEnglish: "The Yoga of Divine and Demoniac Natures",
    subtitle: "Chapter 16 · 24 Verses",
    summary: "Krishna describes two types of human nature — divine (fearlessness, truthfulness, compassion, non-violence) and demoniac (arrogance, pride, cruelty). The divine leads to liberation; the demoniac leads to bondage.",
    keyVerse: {
      ref: "BG 16.3",
      sanskrit: "तेजः क्षमा धृतिः शौचम्",
      english: "Vigour, forgiveness, fortitude, purity, freedom from malice and pride — these are the divine endowments."
    },
    gradient: "linear-gradient(135deg, oklch(0.88 0.16 32) 0%, oklch(0.82 0.14 20) 100%)",
    accentHue: 32
  },
  {
    chapter: 17,
    titleSanskrit: "श्रद्धात्रय विभाग योग",
    titleEnglish: "The Yoga of the Threefold Faith",
    subtitle: "Chapter 17 · 28 Verses",
    summary: "Faith has three natures corresponding to the three gunas. Sattvic faith leads to worship of gods and sages; Rajasic to wealth and power; Tamasic to ghosts and the departed. Even food, penance, and charity have these three natures.",
    keyVerse: {
      ref: "BG 17.3",
      sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति",
      english: "The faith of every person corresponds to their nature. A person is what their faith is."
    },
    gradient: "linear-gradient(135deg, oklch(0.91 0.14 220) 0%, oklch(0.85 0.16 240) 100%)",
    accentHue: 220
  },
  {
    chapter: 18,
    titleSanskrit: "मोक्ष संन्यास योग",
    titleEnglish: "The Yoga of Liberation",
    subtitle: "Chapter 18 · 78 Verses",
    summary: "The final and supreme teaching: abandon all varieties of dharma and surrender completely to Krishna. He alone will deliver you from all sin. This most confidential knowledge should be shared only with those who are devoted and will revere it.",
    keyVerse: {
      ref: "BG 18.66",
      sanskrit: "सर्वधर्मान्परित्यज्य",
      english: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions."
    },
    gradient: "linear-gradient(135deg, oklch(0.90 0.22 54) 0%, oklch(0.84 0.26 46) 100%)",
    accentHue: 54
  }
];
function PhotoModal({
  photo,
  allPhotos,
  onClose,
  onNavigate
}) {
  const [imgError, setImgError] = reactExports.useState(false);
  const idx = allPhotos.findIndex((p) => p.id === photo.id);
  const prev = idx > 0 ? allPhotos[idx - 1] : null;
  const next = idx < allPhotos.length - 1 ? allPhotos[idx + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-3",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      style: { background: "rgba(4,2,1,0.96)", backdropFilter: "blur(14px)" },
      "data-ocid": "gallery.modal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "relative w-full max-w-sm overflow-hidden",
          initial: { scale: 0.85, opacity: 0, y: 24 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.88, opacity: 0 },
          transition: { type: "spring", damping: 22, stiffness: 300 },
          onClick: (e) => e.stopPropagation(),
          style: {
            borderRadius: "12px",
            border: "2.5px solid oklch(0.82 0.32 54 / 0.75)",
            boxShadow: "0 0 0 5px oklch(0.78 0.28 54 / 0.20), 0 24px 80px oklch(0.10 0.06 46 / 0.8)",
            background: "linear-gradient(160deg, oklch(0.97 0.07 68) 0%, oklch(0.93 0.09 60) 100%)",
            overflow: "hidden",
            maxHeight: "90vh",
            overflowY: "auto"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  height: 4,
                  background: "linear-gradient(90deg, oklch(0.72 0.28 32), oklch(0.86 0.38 54), oklch(0.72 0.28 32))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center font-bold hover:opacity-70 transition-opacity",
                style: {
                  background: "oklch(0.14 0.06 30 / 0.7)",
                  borderRadius: "50%",
                  color: "oklch(0.92 0.10 60)",
                  border: "1px solid oklch(0.72 0.24 54 / 0.4)",
                  fontSize: "0.9rem"
                },
                "aria-label": "Close photo",
                "data-ocid": "gallery.close_button",
                children: "✕"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden",
                style: { aspectRatio: "4/3" },
                children: [
                  !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: photo.src,
                      alt: photo.caption,
                      className: "w-full h-full object-cover",
                      onError: () => setImgError(true)
                    },
                    photo.id
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full h-full flex items-center justify-center",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.90 0.12 54), oklch(0.84 0.18 46))"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl", children: "🕉️" })
                    }
                  ),
                  prev && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onNavigate(prev),
                      className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center font-bold hover:scale-110 transition-transform",
                      style: {
                        background: "oklch(0.10 0.06 30 / 0.72)",
                        borderRadius: "50%",
                        color: "oklch(0.90 0.10 60)",
                        border: "1px solid oklch(0.72 0.24 54 / 0.4)",
                        fontSize: "1rem"
                      },
                      "aria-label": "Previous",
                      "data-ocid": "gallery.pagination_prev",
                      children: "‹"
                    }
                  ),
                  next && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onNavigate(next),
                      className: "absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center font-bold hover:scale-110 transition-transform",
                      style: {
                        background: "oklch(0.10 0.06 30 / 0.72)",
                        borderRadius: "50%",
                        color: "oklch(0.90 0.10 60)",
                        border: "1px solid oklch(0.72 0.24 54 / 0.4)",
                        fontSize: "1rem"
                      },
                      "aria-label": "Next",
                      "data-ocid": "gallery.pagination_next",
                      children: "›"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xl font-bold",
                  style: { color: "oklch(0.62 0.26 46)" },
                  children: photo.captionHindi
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs italic",
                  style: { color: "oklch(0.50 0.16 46 / 0.75)" },
                  children: photo.caption
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs mt-2 tracking-widest",
                  style: { color: "oklch(0.68 0.24 54 / 0.8)" },
                  children: "Sanatan Dharma ~ Krishna AI"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  height: 4,
                  background: "linear-gradient(90deg, oklch(0.72 0.28 32), oklch(0.86 0.38 54), oklch(0.72 0.28 32))"
                }
              }
            )
          ]
        }
      )
    }
  );
}
function PhotoCard({
  photo,
  index,
  onClick
}) {
  const [loaded, setLoaded] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      initial: { opacity: 0, scale: 0.92 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.015, 0.35) },
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
      onClick,
      className: "relative group overflow-hidden cursor-pointer text-left",
      style: {
        borderRadius: "8px",
        border: "1.5px solid oklch(0.82 0.26 54 / 0.5)",
        boxShadow: "0 4px 18px oklch(0.18 0.08 46 / 0.30)",
        aspectRatio: "3/4",
        background: "oklch(0.94 0.07 58)"
      },
      "data-ocid": `gallery.photo.item.${index + 1}`,
      "aria-label": photo.captionHindi,
      children: [
        !loaded && !error && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 animate-pulse",
            style: {
              background: "linear-gradient(135deg, oklch(0.90 0.08 54), oklch(0.86 0.12 46))"
            }
          }
        ),
        !error ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: photo.src,
            alt: photo.caption,
            loading: "lazy",
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            style: { opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" },
            onLoad: () => setLoaded(true),
            onError: () => setError(true)
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full h-full flex flex-col items-center justify-center gap-2",
            style: {
              background: "linear-gradient(160deg, oklch(0.92 0.12 54) 0%, oklch(0.84 0.18 46) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🕉️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs text-center px-2 italic",
                  style: { color: "oklch(0.38 0.20 46)" },
                  children: photo.captionHindi
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-x-0 bottom-0 pointer-events-none",
            style: {
              background: "linear-gradient(to top, oklch(0.08 0.08 46 / 0.93) 0%, transparent 100%)",
              padding: "28px 8px 8px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body font-bold text-center leading-tight",
                  style: { fontSize: "0.70rem", color: "oklch(0.92 0.18 58)" },
                  children: photo.captionHindi
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-center tracking-wide",
                  style: {
                    fontSize: "0.55rem",
                    background: "linear-gradient(90deg, oklch(0.82 0.26 54), oklch(0.74 0.24 46))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.92,
                    letterSpacing: "0.08em",
                    marginTop: "2px"
                  },
                  children: "Sanatan Dharma ~ Krishna AI"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function StoryCardItem({
  card,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.06, 0.5), duration: 0.5 },
      className: "rounded-2xl overflow-hidden",
      style: {
        background: card.gradient,
        border: `2px solid oklch(0.82 0.24 ${card.accentHue} / 0.6)`,
        boxShadow: `0 6px 28px oklch(0.18 0.10 ${card.accentHue} / 0.30)`
      },
      "data-ocid": `gallery.story_card.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: 4,
              background: `linear-gradient(90deg, oklch(0.68 0.28 ${card.accentHue}), oklch(0.82 0.32 ${card.accentHue}), oklch(0.68 0.28 ${card.accentHue}))`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg",
                style: {
                  background: `linear-gradient(135deg, oklch(0.78 0.30 ${card.accentHue}), oklch(0.66 0.26 ${card.accentHue}))`,
                  color: "oklch(0.12 0.06 30)",
                  boxShadow: `0 4px 16px oklch(0.58 0.24 ${card.accentHue} / 0.45)`,
                  border: `2px solid oklch(0.86 0.28 ${card.accentHue} / 0.6)`
                },
                children: card.chapter
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-body font-bold leading-tight",
                  style: {
                    fontSize: "1.15rem",
                    color: `oklch(0.25 0.14 ${card.accentHue})`
                  },
                  children: card.titleSanskrit
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display italic text-xs mt-0.5",
                  style: { color: `oklch(0.42 0.18 ${card.accentHue})` },
                  children: card.titleEnglish
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-xs mt-0.5",
                  style: { color: `oklch(0.50 0.14 ${card.accentHue} / 0.8)` },
                  children: card.subtitle
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mb-3",
              style: {
                height: 1,
                background: `linear-gradient(90deg, transparent, oklch(0.68 0.22 ${card.accentHue} / 0.5), transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body italic leading-relaxed mb-4",
              style: {
                fontSize: "0.72rem",
                color: `oklch(0.28 0.10 ${card.accentHue})`,
                lineHeight: 1.85
              },
              children: card.summary
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-3",
              style: {
                background: `oklch(0.98 0.04 ${card.accentHue} / 0.65)`,
                border: `1.5px solid oklch(0.72 0.22 ${card.accentHue} / 0.45)`,
                borderLeft: `4px solid oklch(0.68 0.28 ${card.accentHue})`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-display text-xs font-bold tracking-wider uppercase mb-1",
                    style: { color: `oklch(0.45 0.22 ${card.accentHue})` },
                    children: [
                      "📖 ",
                      card.keyVerse.ref
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body font-bold mb-1",
                    style: {
                      fontSize: "0.78rem",
                      color: `oklch(0.32 0.16 ${card.accentHue})`
                    },
                    children: card.keyVerse.sanskrit
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "font-body italic",
                    style: {
                      fontSize: "0.68rem",
                      color: `oklch(0.38 0.12 ${card.accentHue})`
                    },
                    children: [
                      '"',
                      card.keyVerse.english,
                      '"'
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: 3,
              background: `linear-gradient(90deg, transparent, oklch(0.72 0.26 ${card.accentHue} / 0.5), transparent)`
            }
          }
        )
      ]
    }
  );
}
function SectionHeader({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1.5px",
            background: "linear-gradient(to right, transparent, oklch(0.72 0.28 46 / 0.65))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🪷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1.5px",
            background: "linear-gradient(to left, transparent, oklch(0.72 0.28 46 / 0.65))"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "font-display font-bold",
        style: {
          fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
          color: "oklch(0.52 0.26 46)",
          textShadow: "0 0 20px oklch(0.80 0.30 54 / 0.30)"
        },
        children: title
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "font-body italic text-xs mt-1",
        style: { color: "oklch(0.52 0.18 46 / 0.75)" },
        children: subtitle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1px",
            background: "linear-gradient(to right, transparent, oklch(0.72 0.22 54 / 0.4))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "font-display text-xs tracking-widest",
          style: { color: "oklch(0.68 0.24 46 / 0.7)" },
          children: "✦ OM ✦"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            flex: 1,
            height: "1px",
            background: "linear-gradient(to left, transparent, oklch(0.72 0.22 54 / 0.4))"
          }
        }
      )
    ] })
  ] });
}
const PETAL_HUE = [340, 0, 32, 54, 320, 340, 280, 160, 340, 54, 32, 0];
const PETAL_CFG = PETAL_HUE.map((hue, i) => ({
  key: `fp${i}`,
  left: `${4 + i * 8}%`,
  size: 7 + i % 4 * 3,
  rot: i * 30 % 180,
  dur: `${1.8 + i % 4 * 0.3}s`,
  delay: `${(i * 0.14).toFixed(2)}s`,
  hue
}));
function FlowerPetalShower({ active }) {
  if (!active) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none z-50", "aria-hidden": true, children: PETAL_CFG.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "absolute",
        left: p.left,
        top: "-20px",
        width: p.size,
        height: p.size * 1.4,
        background: `oklch(0.86 0.26 ${p.hue} / 0.88)`,
        borderRadius: "50% 50% 30% 30%",
        animation: `petalRain ${p.dur} ease-in forwards`,
        animationDelay: p.delay,
        transform: `rotate(${p.rot}deg)`
      }
    },
    p.key
  )) });
}
function GalleryPage() {
  const [openPhoto, setOpenPhoto] = reactExports.useState(null);
  const [petals, setPetals] = reactExports.useState(false);
  const [sheetModalSrc, setSheetModalSrc] = reactExports.useState(null);
  function handlePhotoOpen(photo) {
    setOpenPhoto(photo);
    setPetals(true);
    setTimeout(() => setPetals(false), 3e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen relative",
      style: {
        background: "linear-gradient(160deg, oklch(0.97 0.07 68) 0%, oklch(0.93 0.10 62) 40%, oklch(0.95 0.08 58) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rainbow-border-line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FlowerPetalShower, { active: petals }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 pt-6 pb-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-xs tracking-[0.32em] uppercase mb-1",
                    style: { color: "oklch(0.60 0.24 46 / 0.90)" },
                    children: "✦ कृष्ण दर्शन ✦"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-display font-bold italic",
                    style: {
                      fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
                      color: "oklch(0.56 0.28 46)",
                      textShadow: "0 0 28px oklch(0.82 0.32 54 / 0.40)"
                    },
                    children: "ॐ Krishna Gallery"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic mt-1",
                    style: { color: "oklch(0.52 0.18 46 / 0.80)" },
                    children: "Sanatan Dharma · Krishna AI"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  flex: 1,
                  height: 2,
                  background: "linear-gradient(to right, transparent, oklch(0.80 0.30 54 / 0.6))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-sm font-bold",
                style: { color: "oklch(0.64 0.26 46)" },
                children: "✦ श्री हरि ✦"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  flex: 1,
                  height: 2,
                  background: "linear-gradient(to left, transparent, oklch(0.80 0.30 54 / 0.6))"
                }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "max-w-3xl mx-auto px-4 pb-4",
            id: "krishna-photos",
            "data-ocid": "gallery.photos_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  title: "Krishna Darshan",
                  subtitle: "100 Sacred Images of the Divine · Tap any image for full darshan"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2.5", children: KRISHNA_PHOTOS.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                PhotoCard,
                {
                  photo,
                  index: i,
                  onClick: () => handlePhotoOpen(photo)
                },
                photo.id
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "max-w-3xl mx-auto px-4 pb-10 mt-8",
            id: "story-cards",
            "data-ocid": "gallery.story_cards_section",
            style: {
              background: "linear-gradient(160deg, oklch(0.94 0.08 62 / 0.0) 0%, oklch(0.94 0.08 62 / 0.0) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mb-6",
                  style: {
                    height: 2,
                    background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 46 / 0.6), oklch(0.82 0.32 54 / 0.8), oklch(0.72 0.26 46 / 0.6), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  title: "Krishna Katha — Story Cards",
                  subtitle: "18 Chapters of the Bhagavad Gita · The Complete Sacred Story"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: STORY_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StoryCardItem, { card, index: i }, card.chapter)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openPhoto && /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoModal,
          {
            photo: openPhoto,
            allPhotos: KRISHNA_PHOTOS,
            onClose: () => setOpenPhoto(null),
            onNavigate: (p) => setOpenPhoto(p)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rainbow-border-line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 mb-8 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "🪷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl font-bold mb-2",
                style: { color: "oklch(72% 0.18 54)" },
                children: "दिव्य कथा पट्टिकाएँ"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", style: { color: "oklch(62% 0.14 54)" }, children: "Divine Krishna Story Cards — Sacred Wisdom Collection" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
            {
              src: "/assets/story-cards-sheet-1.png",
              label: "Story Cards — Sheet 1",
              caption: "Cards 1–25 · Krishna Wisdom"
            },
            {
              src: "/assets/story-cards-sheet-2.png",
              label: "Story Cards — Sheet 2",
              caption: "Cards 26–50 · Sacred Teachings"
            }
          ].map((sheet) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSheetModalSrc(sheet.src),
              className: "relative rounded-2xl overflow-hidden cursor-pointer border-2 hover:scale-[1.02] transition-all duration-300 focus:outline-none w-full text-left",
              style: {
                borderColor: "oklch(72% 0.18 54 / 0.6)",
                background: "oklch(97% 0.02 54)",
                boxShadow: "0 4px 24px oklch(72% 0.18 54 / 0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: sheet.src,
                    alt: sheet.label,
                    className: "w-full h-auto block"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", style: { background: "oklch(97% 0.02 54)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-bold text-lg",
                      style: { color: "oklch(40% 0.10 54)" },
                      children: sheet.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm mt-1",
                      style: { color: "oklch(55% 0.08 54)" },
                      children: [
                        sheet.caption,
                        " · Tap to view full size"
                      ]
                    }
                  )
                ] })
              ]
            },
            sheet.src
          )) })
        ] }),
        sheetModalSrc && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
            style: { background: "rgba(10,6,2,0.96)" },
            onClick: () => setSheetModalSrc(null),
            onKeyDown: (e) => {
              if (e.key === "Escape") setSheetModalSrc(null);
            },
            role: "presentation",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative max-w-5xl max-h-[92vh] w-full",
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => e.stopPropagation(),
                role: "presentation",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSheetModalSrc(null),
                      className: "absolute -top-12 right-0 text-3xl font-bold hover:opacity-70 transition-opacity",
                      style: { color: "oklch(72% 0.18 54)" },
                      "aria-label": "Close",
                      children: "✕"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: sheetModalSrc,
                      alt: "Story Cards",
                      className: "w-full h-auto max-h-[88vh] object-contain rounded-2xl",
                      style: { border: "3px solid oklch(72% 0.18 54)" }
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
export {
  GalleryPage,
  GalleryPage as default
};
