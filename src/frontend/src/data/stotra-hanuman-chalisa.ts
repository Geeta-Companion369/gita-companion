/**
 * Hanuman Chalisa — COMPLETE
 * 2 Opening Dohas + 40 Chaupais + 1 Closing Doha (Soratha)
 * Composed by Goswami Tulsidas in Awadhi dialect, ~16th century CE
 */
import type { Stotram } from "./stotra-data";

export const HANUMAN_CHALISA: Stotram = {
  id: "hanuman-chalisa",
  name: "Hanuman Chalisa",
  nameHindi: "हनुमान चालीसा",
  deity: "Lord Hanuman",
  symbol: "🚩",
  category: "Bhakti",
  intro:
    "The Hanuman Chalisa — forty verses (chaupais) in praise of Hanuman — was composed by Goswami Tulsidas in the 16th century in Awadhi dialect. Tulsidas composed it during his imprisonment by Mughal Emperor Aurangzeb, and Hanuman is said to have appeared to free him. It is among the most widely recited devotional compositions in India.",
  benefits:
    "Protection from all evil and negative forces, removal of fear and anxiety, strength in adversity, granting of all desires, liberation from disease, debt, and bondage. Whoever recites this 100 times is freed from all bondage and attains great joy.",
  instructions:
    "Recite on Tuesday and Saturday especially. Begin with 'Shri Guru Charan Saroj Raj...'. Face south for maximum Hanuman connection. For protection, recite 7 or 108 times. Before sleep, recite once for peaceful rest.",
  language: "Hindi/Awadhi",
  relatedMantras: ["hanuman-mantra", "bajrang-baan"],
  sections: [
    {
      title: "दोहा १ — Opening Doha",
      content:
        "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥\n\n" +
        "SHRI GURU CHARAN SAROJ RAJ NIJ MANU MUKURU SUDHAARI\nBARNAUN RAGHUBAR BIMAL JASU JO DAAYAKU PHALA CHAARI\n\n" +
        "With the dust of the guru's lotus feet, I cleanse the mirror of my mind.\nI describe the pure fame of Raghuvara (Ram) which bestows the four fruits of life\n(dharma, artha, kama, moksha).",
    },
    {
      title: "दोहा २ — Opening Doha",
      content:
        "बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार।\nबल बुधि बिद्या देहु मोहि हरहु कलेस बिकार॥\n\n" +
        "BUDDHIHEEN TANU JAANIKE SUMIRON PAVAN-KUMAAR\nBALA BUDHI BIDDYAA DEHU MOHI HARAHU KALESA BIKAAR\n\n" +
        "Knowing my body is devoid of wisdom, I meditate on the son of the wind (Hanuman).\nGrant me strength, wisdom and knowledge; remove my afflictions and infirmities.",
    },
    {
      title: "चौपाई १–५ | Chaupai 1–5",
      content:
        "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥ १\n" +
        "JAY HANUMAAN GYAAN GUN SAAGAR. JAY KAPEES TIHUN LOK UJAAGAR.\n" +
        "Victory to Hanuman — ocean of wisdom and virtue! Victory to the lord of monkeys who illumines the three worlds.\n\n" +
        "राम दूत अतुलित बल धामा। अञ्जनि-पुत्र पवनसुत नामा॥ २\n" +
        "RAAM DOOT ATOLIT BAL DHAAMA. ANJANI-PUTRA PAVAN-SUT NAAMA.\n" +
        "O Messenger of Ram, abode of matchless strength, named Anjaniputra, son of the wind.\n\n" +
        "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥ ३\n" +
        "MAHAABEER BIKRAM BAJRANGI. KUMATI NIVAAR SUMATI KE SANGI.\n" +
        "O Great hero, mighty, with body of lightning — dispeller of evil thoughts, companion of good counsel.\n\n" +
        "कंचन बरन बिराज सुबेसा। कानन कुण्डल कुँचित केसा॥ ४\n" +
        "KANCHAN BARAN BIRAAJ SUBESA. KAANAN KUNDAL KUNCHIT KESA.\n" +
        "Of golden hue, beautifully dressed, with forest-flower earrings and curly locks.\n\n" +
        "हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥ ५\n" +
        "HAATH VAJRA AUN DHWAJA BIRAAJAY. KAANDHE MOONJ JANEAU SAAJAY.\n" +
        "Holding thunderbolt and flag in hand, the sacred thread of munja grass adorns his shoulder.",
    },
    {
      title: "चौपाई ६–१० | Chaupai 6–10",
      content:
        "शंकर सुवन केसरी नंदन। तेज प्रताप महा जग बंदन॥ ६\n" +
        "SHANKAR SUVAN KESARI NANDAN. TEJ PRATAAP MAHA JAG BANDAN.\n" +
        "Son of Shankar (Shiva), son of Kesari — your radiance and glory are worshipped throughout the world.\n\n" +
        "बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥ ७\n" +
        "BIDDYAAVAAN GUNI ATI CHAATUR. RAAM KAAJ KARIBE KO AAATUR.\n" +
        "Learned, virtuous, supremely clever — eager always to do Ram's work.\n\n" +
        "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥ ८\n" +
        "PRABHU CHARITRA SUNIBE KO RASIYA. RAAM LAKHAN SITA MAN BASIYA.\n" +
        "Delight in hearing the Lord's deeds — Ram, Lakshman and Sita dwell in your heart.\n\n" +
        "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥ ९\n" +
        "SOOKSHMA ROOP DHARI SIYAHIN DIKHAAVAA. BIKAT ROOP DHARI LANK JARAAVA.\n" +
        "Taking subtle form, you showed yourself to Sita; taking fearsome form, you burned Lanka.\n\n" +
        "भीम रूप धरि असुर सँहारे। रामचंद्र के काज सँवारे॥ १०\n" +
        "BHEEM ROOP DHARI ASUR SAMHARE. RAAMACHANDRA KE KAAJ SANVAARE.\n" +
        "Taking the form of a giant, you destroyed demons — you accomplished all of Ramachandra's work.",
    },
    {
      title: "चौपाई ११–१५ | Chaupai 11–15",
      content:
        "लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये॥ ११\n" +
        "LAAY SAJEEWAN LAKHAN JIYAAYE. SHRI RAGHUBEER HARASHI UR LAAYE.\n" +
        "Bringing the Sanjivani herb, you revived Lakshmana; the great Raghuvira embraced you with joy.\n\n" +
        "रघुपति कीन्हीं बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥ १२\n" +
        "RAGHUPATI KEENH BAHUT BADAAI. TUM MAM PRIYA BHARATAHI SAM BHAAI.\n" +
        "Raghupati (Ram) praised you greatly: 'You are as dear to me as my brother Bharata.'\n\n" +
        "सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं॥ १३\n" +
        "SAHAS BADAN TUMHARO JAS GAAVEN. AS KAHI SHRIPATI KANTH LAGAAVEN.\n" +
        "Thousands sing your glory — so saying, Shripati (Vishnu) embraced you.\n\n" +
        "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥ १४\n" +
        "SANAKAADIK BRAHMAADI MUNEESAA. NAARAD SAARAD SAHIT AHEESAA.\n" +
        "Sanaka and other sages, Brahma and other gods, Narada, Sarada and Shesha —\n\n" +
        "जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते॥ १५\n" +
        "JAM KUBER DIGPAAL JAHAAN TE. KABI KOBID KAHI SAKE KAHAAN TE.\n" +
        "Yama, Kubera, the guardians of the eight directions — no poet or scholar can fully describe your glory.",
    },
    {
      title: "चौपाई १६–२० | Chaupai 16–20",
      content:
        "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज-पद दीन्हा॥ १६\n" +
        "TUM UPKAAR SUGREEVHIN KEENHA. RAAM MILAAY RAAJ-PAD DEENHA.\n" +
        "You did great service to Sugriva — united him with Ram and gave him the throne.\n\n" +
        "तुम्हरो मंत्र बिभीषण माना। लंकेस्वर भए सब जग जाना॥ १७\n" +
        "TUMHARO MANTRA BIBHEESHAN MAANAA. LANKESHWAR BHAYE SAB JAG JAANAA.\n" +
        "Vibhishana heeded your counsel and became lord of Lanka — the whole world knows this.\n\n" +
        "जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥ १८\n" +
        "JUG SAHASTRA YOJAN PAR BHAANU. LEELYO TAAHI MADHUR PHAL JAANU.\n" +
        "The sun is thousands of yojanas away — you swallowed it thinking it was a sweet fruit.\n\n" +
        "प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गये अचरज नाहीं॥ १९\n" +
        "PRABHU MUDRIKA MELI MUKH MAAHIN. JALADHI LAANGHI GAYE ACHARAJ NAAHIN.\n" +
        "Holding the Lord's ring in your mouth, you leapt across the ocean — no wonder!\n\n" +
        "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥ २०\n" +
        "DURGAM KAAJ JAGAT KE JETE. SUGAM ANUGRAH TUMHARE TETE.\n" +
        "All the difficult tasks of the world become easy by your grace.",
    },
    {
      title: "चौपाई २१–२५ | Chaupai 21–25",
      content:
        "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥ २१\n" +
        "RAAM DUAARE TUM RAKHWAARE. HOT NA AAGYA BINU PAISAARE.\n" +
        "You are the guardian of Ram's door — none may enter without your permission.\n\n" +
        "सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥ २२\n" +
        "SAB SUKH LAHAI TUMHAARI SARNAA. TUM RAKSHAK KAAHU KO DAR NAA.\n" +
        "All happiness is found in your shelter — with you as protector, there is nothing to fear.\n\n" +
        "आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै॥ २३\n" +
        "AAPAN TEJ SAMHAARO AAPAY. TEENON LOK HAANK TE KAANPAY.\n" +
        "You yourself contain your own blazing power — at your roar, the three worlds tremble.\n\n" +
        "भूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥ २४\n" +
        "BHOOT PISHAACH NIKAT NAHI AAVAY. MAHAABEER JAB NAAM SUNAAVAY.\n" +
        "Ghosts and demons dare not come near — when the name of Mahavir is uttered.\n\n" +
        "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥ २५\n" +
        "NAASAY ROG HARAI SAB PEERAA. JAPAT NIRANTAR HANUMAT BEERAA.\n" +
        "Disease is destroyed and all pain is removed — for one who continuously chants Hanuman's name.",
    },
    {
      title: "चौपाई २६–३० | Chaupai 26–30",
      content:
        "संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥ २६\n" +
        "SANKAT TE HANUMAAN CHUDAAVAY. MAN KRAM BACHAN DHYAAN JO LAAVAY.\n" +
        "Hanuman delivers from all troubles — one who keeps him in mind, action and speech.\n\n" +
        "सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥ २७\n" +
        "SAB PAR RAAM TAPASVI RAAJAA. TIN KE KAAJ SAKAL TUM SAAJAA.\n" +
        "Ram is the ascetic king above all — you accomplish every task of his.\n\n" +
        "और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥ २८\n" +
        "AUR MANORATH JO KOI LAAVAY. SOI AMIT JEEVAN PHAL PAAVAY.\n" +
        "Whoever brings any other desire to you — they receive immeasurable fruit of life.\n\n" +
        "चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥ २९\n" +
        "CHAARON JUG PARTAAP TUMHAARAA. HAI PARSIDDHA JAGAT UJIYAARAA.\n" +
        "Your glory spans all four ages (yugas) — it illuminates the world, and is widely renowned.\n\n" +
        "साधु-संत के तुम रखवारे। असुर निकंदन राम दुलारे॥ ३०\n" +
        "SAADHU-SANT KE TUM RAKHWAARE. ASUR NIKANDAN RAAM DULAARE.\n" +
        "You are the guardian of saints and sages, destroyer of demons, and dear to Ram.",
    },
    {
      title: "चौपाई ३१–३५ | Chaupai 31–35",
      content:
        "अष्टसिद्धि नौ निधि के दाता। अस बर दीन्ह जानकी माता॥ ३१\n" +
        "ASHTA-SIDDHI NAU NIDHI KE DAATAA. AS BAR DEENH JAANAKI MAATAA.\n" +
        "You are the giver of the eight siddhis and nine nidhis — such boon was given by Mother Janaki (Sita).\n" +
        "The eight siddhis: Anima (becoming tiny), Mahima (becoming huge), Garima (weight), Laghima (lightness), Prapti (reach), Prakamya (will), Ishitva (mastery), Vashitva (control).\n" +
        "The nine nidhis: Padma, Mahapadma, Shankha, Makara, Kachchhapa, Mukunda, Kunda, Nila, Kharva.\n\n" +
        "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥ ३२\n" +
        "RAAM RASAAYAN TUMHARE PAASAA. SADAA RAHO RAGHUPATI KE DAASAA.\n" +
        "You hold the elixir of Ram's name — may you always remain Raghupati's devoted servant.\n\n" +
        "तुम्हरे भजन राम को पावै। जनम-जनम के दुख बिसरावै॥ ३३\n" +
        "TUMHARE BHAJAN RAAM KO PAAVAY. JANAM-JANAM KE DUKH BISRAAVAY.\n" +
        "Through your devotion, one attains Ram — the sorrows of countless births are forgotten.\n\n" +
        "अन्त काल रघुबर पुर जाई। जहाँ जन्म हरि-भक्त कहाई॥ ३४\n" +
        "ANT KAAL RAGHUBAR PUR JAAI. JAHAAN JANAM HARI-BHAKT KAHAAEE.\n" +
        "At the end of life, one goes to Raghuvara's abode — and is born as Hari's devotee in future births.\n\n" +
        "और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥ ३५\n" +
        "AUR DEVTAA CHITT NA DHARAI. HANUMAT SEI SARBA SUKH KARAI.\n" +
        "No need to keep other deities in mind — serve Hanuman and all joys are attained.",
    },
    {
      title: "चौपाई ३६–४० | Chaupai 36–40",
      content:
        "संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥ ३६\n" +
        "SANKAT KATAY MITAY SAB PEERAA. JO SUMIRAY HANUMAT BALBEERAA.\n" +
        "All troubles are cut, all pain removed — for one who remembers Hanuman the mighty hero.\n\n" +
        "जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥ ३७\n" +
        "JAI JAI JAI HANUMAAN GOSAAIN. KRIPA KARAHU GURUDEV KI NAAIN.\n" +
        "Victory! Victory! Victory to Hanuman, O Lord! Bestow your grace as a guru would.\n\n" +
        "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥ ३८\n" +
        "JO SAT BAAR PAATH KAR KOI. CHHUTAHI BANDI MAHAA SUKH HOI.\n" +
        "Whoever recites this a hundred times — is freed from all bondage and attains great joy.\n\n" +
        "जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥ ३९\n" +
        "JO YAH PADAI HANUMAAN CHAALEESAA. HOY SIDDHI SAAKHI GAURISAA.\n" +
        "Whoever reads this Hanuman Chalisa — attains siddhi (perfection), with Gaurishisa (Shiva) as witness.\n\n" +
        "तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय मँह डेरा॥ ४०\n" +
        "TULASIDAAS SADAA HARI CHERAA. KEEJAI NAATH HRIDAYA MAN DERAA.\n" +
        "Tulsidas is always Hari's servant — O Lord, make your abode in my heart.",
    },
    {
      title: "दोहा ३ — Closing Doha (Soratha)",
      content:
        "पवनतनय संकट हरन मंगल मूरति रूप।\nराम लखन सीता सहित हृदय बसहु सुर भूप॥\n\n" +
        "PAWANTANAYA SANKAT HARAN MANGAL MOORTI ROOP\nRAAM LAKHAN SEETAA SAHIT HRIDAYA BASAHU SUR BHOOP\n\n" +
        "O son of the wind (Pawantanaya), remover of all troubles, embodiment of auspiciousness —\nDwell in my heart along with Ram, Lakshmana and Sita, O king of gods.\n\n" +
        "॥ इति श्री हनुमान चालीसा सम्पूर्णम् ॥\nThus ends the complete Hanuman Chalisa — composed by Goswami Tulsidas.",
    },
  ],
};
