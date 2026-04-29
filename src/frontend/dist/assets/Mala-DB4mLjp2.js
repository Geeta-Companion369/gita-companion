import { j as jsxRuntimeExports, r as reactExports, g as useTTS, m as motion, A as AnimatePresence } from "./index-vCKiyWhq.js";
import { R as Root, C as Content, a as Close, P as Portal, O as Overlay } from "./index-CS8xaTxz.js";
import { c as cn } from "./utils-2v2HxlWs.js";
import { X } from "./x-V-GgIE-w.js";
import { u as useMalaHistory } from "./use-mala-history-B9nT2ChS.js";
import { u as usePoints } from "./use-points-CeJloQ-E.js";
import { u as useStreak } from "./use-streak-IRvcBEqu.js";
import "./index-BknLay4C.js";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const MANTRAS_18 = [
  {
    id: "peace-of-mind",
    situation: "Peace of Mind",
    situationHindi: "मन की शांति",
    emoji: "🕊️",
    name: "Shanti Patha — Complete",
    deity: "Universal — Rigveda",
    deityColor: "oklch(0.48 0.26 268)",
    sanskrit: "ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः\nपृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः\nसर्वं शान्तिः शान्तिरेव शान्तिः\nसा मा शान्तिरेधि।\nॐ शान्तिः शान्तिः शान्तिः॥\n\nसर्वेषां स्वस्तिर्भवतु\nसर्वेषां शान्तिर्भवतु\nसर्वेषां पूर्णं भवतु\nसर्वेषां मङ्गलं भवतु\nॐ शान्तिः शान्तिः शान्तिः॥",
    transliteration: "Om Dyauh Shantir Antarikssam Shantih\nPrithvi Shantir Apah Shantir Oushadhayah Shantih\nVanaspatayah Shantir Vishvedeva Shantir Brahma Shantih\nSarvam Shantih Shantirevah Shantih\nSa Ma Shantir Edhi\nOm Shantih Shantih Shantih\n\nSarveṣāṃ Svastir Bhavatu\nSarveṣāṃ Shāntir Bhavatu\nSarveṣāṃ Pūrṇaṃ Bhavatu\nSarveṣāṃ Maṅgalaṃ Bhavatu\nOm Shāntih Shāntih Shāntih",
    meaning: "Peace in the sky, peace in space, peace on earth, peace in waters, peace in herbs, peace in forests, peace in all gods, peace in Brahman — all is peace, only peace. May that peace come to me. May all beings be well, peaceful, fulfilled, and auspicious.",
    benefit: "Deep inner peace, dissolves anxiety and restlessness, universal harmony",
    source: "Rigveda / Upanishad Shanti Patha",
    ttsText: "Om Dyauh Shantir Antarikssam Shantih Prithvi Shantir Apah Shantir Oushadhayah Shantih Vanaspatayah Shantir Vishvedeva Shantir Brahma Shantih Sarvam Shantih Shantirevah Shantih Sa Ma Shantir Edhi Om Shantih Shantih Shantih Sarvesham Svastir Bhavatu Sarvesham Shantir Bhavatu Sarvesham Purnam Bhavatu Sarvesham Mangalam Bhavatu Om Shantih Shantih Shantih"
  },
  {
    id: "loss-of-loved-one",
    situation: "After Loss of Loved One",
    situationHindi: "प्रियजन की मृत्यु के बाद",
    emoji: "🙏",
    name: "Mahamrityunjaya — Complete",
    deity: "Shiva",
    deityColor: "oklch(0.48 0.26 268)",
    sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥\n\nॐ हौं जूं सः ॐ भूर्भुवः स्वः\nॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्\nॐ स्वः भुवः भूः ॐ सः जूं हौं ॐ॥\n\nॐ शान्तिः शान्तिः शान्तिः॥",
    transliteration: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam\nUrvarukamiva Bandhanan Mrityor Mukshiya Maamritat\n\nOm Haum Jum Sah Om Bhurbhuvah Svah\nOm Tryambakam Yajamahe Sugandhim Pushtivardhanam\nUrvarukamiva Bandhanan Mrityor Mukshiya Maamritat\nOm Svah Bhuvah Bhuh Om Sah Jum Haum Om\n\nOm Shantih Shantih Shantih",
    meaning: "We worship the three-eyed Shiva who nourishes and purifies all. May he liberate us from death as the cucumber is freed from its vine — into immortality. The full Maha-Mrityunjaya with Vyahritis grants liberation to the departed soul and peace to the grieving.",
    benefit: "Grants liberation to the departed soul, heals grief, brings divine comfort and strength",
    source: "Rigveda 7.59.12 — complete Maha Mrityunjaya with Vyahritis",
    ttsText: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat Om Shantih Shantih Shantih"
  },
  {
    id: "court-justice",
    situation: "Court Cases & Justice",
    situationHindi: "न्याय और अदालत",
    emoji: "⚖️",
    name: "Varuna-Narasimha Justice Mantra",
    deity: "Varuna & Narasimha",
    deityColor: "oklch(0.55 0.26 32)",
    sanskrit: "ॐ क्ष्रौं नृसिंहाय नमः।\nॐ उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्।\nनृसिंहं भीषणं भद्रं मृत्युर्मृत्युं नमाम्यहम्॥\nॐ नमो भगवते नरसिंहाय\nज्वल ज्वल प्रज्वल प्रज्वल\nह्रीं ह्रीं फट् फट् स्वाहा॥\n\nॐ वरुणाय नमः।\nतत्त्वा यामि ब्रह्मणा वन्दमानः\nतदा शास्ते यजमानो हविर्भिः।\nअहेडमानो वरुणेह बोध्युरुशंस\nमा न आयुः प्र मोषीः॥\nॐ वरुणाय नमः स्वाहा॥",
    transliteration: "Om Kshraum Narasimhaya Namah\nOm Ugram Viram Mahavishnum Jvalantam Sarvatomukham\nNrisimham Bhishanam Bhadram Mrityurmrityum Namamyaham\nOm Namo Bhagavate Narasimhaya\nJvala Jvala Prajvala Prajvala\nHrim Hrim Phat Phat Svaha\n\nOm Varunaya Namah\nTat Tva Yami Brahmanaa Vandamanah\nTada Shaste Yajamano Havirbhih\nAhedamano Varuneha Bodhyurushamsa\nMa Na Ayuh Pra Moshih\nOm Varunaya Namah Svaha",
    meaning: "I bow to Narasimha — the fierce and righteous protector who destroys all injustice. I bow to Varuna, Lord of Justice — I come to you with prayer and offerings, do not be angry, O Varuna, hear my plea — do not shorten my life. Grant me victory in righteous cause.",
    benefit: "Divine protection in court and legal matters, victory in righteous cause, justice prevails",
    source: "Narasimha Kavacham + Rigveda 7.86 — Varuna prayer for justice",
    ttsText: "Om Kshraum Narasimhaya Namah Om Ugram Viram Mahavishnum Jvalantam Sarvatomukham Nrisimham Bhishanam Bhadram Mrityurmrityum Namamyaham Om Namo Bhagavate Narasimhaya Jvala Jvala Prajvala Prajvala Hrim Hrim Phat Phat Svaha"
  },
  {
    id: "pregnancy-child",
    situation: "Pregnancy & Child Blessing",
    situationHindi: "गर्भावस्था और संतान",
    emoji: "🌸",
    name: "Santana Gopala Mantra — All 8 Verses",
    deity: "Krishna / Govinda",
    deityColor: "oklch(0.50 0.26 268)",
    sanskrit: "ॐ श्रीं ह्रीं क्लीं ग्लौं देवकीसुत गोविन्द\nवासुदेव जगत्पते देहि मे तनयं कृष्ण\nत्वामहं शरणं गतः॥ १॥\n\nॐ नमो भगवते वासुदेवाय\nपुत्रां देहि श्रियं देहि\nआयुष्यं देहि यशो देहि॥ २॥\n\nक्लीं कृष्णाय गोविन्दाय\nगोपीजनवल्लभाय स्वाहा॥ ३॥\n\nॐ देवकीनन्दन गोविन्द\nवासुदेव जगत्पते\nपुत्रं देहि नमस्तेऽस्तु\nदेहि मे कुलदीपकम्॥ ४॥\n\nॐ नमो भगवते जगन्नाथाय\nसंतानं देहि देहि स्वाहा॥ ५॥\n\nबालग्रहविनाशाय\nगर्भसंरक्षणाय च\nपुत्रसौभाग्यदायिने\nकृष्णाय ते नमो नमः॥ ६॥\n\nॐ ह्रीं श्रीं क्लीं\nसुप्रजाः भव भव स्वाहा॥ ७॥\n\nगोपाल गोपाल गोपाल\nदेवकीनन्दन गोपाल\nजय जय श्रीकृष्ण गोपाल\nपाहि पाहि मां गोपाल॥ ८॥",
    transliteration: "Om Shreem Hreem Kleem Glaum Devakisuta Govinda\nVasudeva Jagatpate Dehi Me Tanayam Krishna\nTvaamaham Sharanam Gatah\n\nOm Namo Bhagavate Vasudevaya\nPutraam Dehi Shriyam Dehi\nAayushyam Dehi Yasho Dehi\n\nKleem Krishnaya Govindaya\nGopijana Vallabhaya Svaha\n\nOm Devakiinandana Govinda\nVaasudeva Jagatpate\nPutram Dehi Namaste'stu\nDehi Me Kuladipakam\n\nOm Namo Bhagavate Jagannathaaya\nSantanam Dehi Dehi Svaha\n\nBalagraha Vinashaaya\nGarbha Samrakshanaaya Cha\nPutra Saubhaagya Daayine\nKrishnaya Te Namo Namah\n\nOm Hreem Shreem Kleem\nSuprajah Bhava Bhava Svaha\n\nGopala Gopala Gopala\nDevakiinandana Gopala\nJaya Jaya Shrikrishna Gopala\nPaahi Paahi Maam Gopala",
    meaning: "O Krishna, son of Devaki, Govinda — grant me a child, I take refuge in you. Grant progeny, prosperity, long life, and fame. Protect from all evil influences, protect the womb, grant the blessing of a son of good fortune — I bow to you Krishna. Let me be blessed with children. O Gopala, protect me always.",
    benefit: "Blesses couples seeking children, protects pregnancy and womb, ensures safe delivery and healthy child",
    source: "Santana Gopala Mantra — complete 8 verses — Bhagavata Purana tradition",
    ttsText: "Om Shreem Hreem Kleem Glaum Devakisuta Govinda Vasudeva Jagatpate Dehi Me Tanayam Krishna Tvaamaham Sharanam Gatah Om Namo Bhagavate Vasudevaya Putraam Dehi Shriyam Dehi Aayushyam Dehi Yasho Dehi Kleem Krishnaya Govindaya Gopijana Vallabhaya Svaha"
  },
  {
    id: "career-success",
    situation: "Career & Success",
    situationHindi: "सफलता और करियर",
    emoji: "🌟",
    name: "Gayatri Mantra — Complete",
    deity: "Savitar — Solar Brahman",
    deityColor: "oklch(0.70 0.32 54)",
    sanskrit: "ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात्॥\n\nॐ आपो ज्योति रसोऽमृतं\nब्रह्म भूर्भुवः स्वरोम्॥",
    transliteration: "Om Bhur Bhuvaḥ Svaḥ\nTat Savitur Vareṇyam\nBhargo Devasya Dhīmahi\nDhiyo Yo Naḥ Pracodayāt\n\nOm Apo Jyoti Raso'mritam\nBrahma Bhurbhuvah Svarom",
    meaning: "Om — the three realms. We meditate on the divine radiance of Savitr, the sun and cosmic source. May that divine light illuminate and inspire our intellect. Om — waters, light, essence, immortality, Brahman — all three worlds.",
    benefit: "Illuminates intellect, opens doors of success, divine clarity for career and decisions",
    source: "Rigveda 3.62.10 — Gayatri Mantra with Vyahriti",
    ttsText: "Om Bhur Bhuvah Svah Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat Om Apo Jyoti Rasoamritam Brahma Bhurbhuvah Svarom"
  },
  {
    id: "debt-financial",
    situation: "Debt & Financial Troubles",
    situationHindi: "ऋण और धन संकट",
    emoji: "💰",
    name: "Shri Suktam — Full 15 Verses",
    deity: "Lakshmi / Shri",
    deityColor: "oklch(0.62 0.28 50)",
    sanskrit: "हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम्।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह॥ १॥\n\nतां म आवह जातवेदो लक्ष्मीमनपगामिनीम्।\nयस्यां हिरण्यं विन्देयं गामश्वं पुरुषानहम्॥ २॥\n\nअश्वपूर्वां रथमध्यां हस्तिनादप्रबोधिनीम्।\nश्रियं देवीमुपह्वये श्रीर्मा देवी जुषताम्॥ ३॥\n\nकांसोस्मितां हिरण्यप्राकारामार्द्रां ज्वलन्तीं तृप्तां तर्पयन्तीम्।\nपद्मे स्थितां पद्मवर्णां तामिहोपह्वये श्रियम्॥ ४॥\n\nचन्द्रां प्रभासां यशसा ज्वलन्तीं श्रियं लोके देवजुष्टामुदाराम्।\nतां पद्मिनीमीं शरणमहं प्रपद्ये अलक्ष्मीर्मे नश्यतां त्वां वृणे॥ ५॥\n\nआदित्यवर्णे तपसोऽधिजातो वनस्पतिस्तव वृक्षोऽथ बिल्वः।\nतस्य फलानि तपसानुदन्तु मायान्तरायाश्च बाह्या अलक्ष्मीः॥ ६॥\n\nउपैतु मां देवसखः कीर्तिश्च मणिना सह।\nप्रादुर्भूतोऽस्मि राष्ट्रेऽस्मिन् कीर्तिमृद्धिं ददातु मे॥ ७॥\n\nक्षुत्पिपासामलां ज्येष्ठामलक्ष्मीं नाशयाम्यहम्।\nअभूतिमसमृद्धिं च सर्वां निर्णुद मे गृहात्॥ ८॥\n\nगन्धद्वारां दुराधर्षां नित्यपुष्टां करीषिणीम्।\nईश्वरींग् सर्वभूतानां तामिहोपह्वये श्रियम्॥ ९॥\n\nमनसः काममाकूतिं वाचः सत्यमशीमहि।\nपशूनां रूपमन्नस्य मयि श्रीः श्रयतां यशः॥ १०॥\n\nकर्दमेन प्रजाभूता मयि सम्भव कर्दम।\nश्रियं वासय मे कुले मातरं पद्ममालिनीम्॥ ११॥\n\nआपः सृजन्तु स्निग्धानि चिक्लीत वस मे गृहे।\nनि च देवीं मातरं श्रियं वासय मे कुले॥ १२॥\n\nआर्द्रां पुष्करिणीं पुष्टिं पिङ्गलां पद्ममालिनीम्।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह॥ १३॥\n\nआर्द्रां यः करिणीं यष्टिं सुवर्णां हेममालिनीम्।\nसूर्यां हिरण्मयीं लक्ष्मीं जातवेदो म आवह॥ १४॥\n\nतां म आवह जातवेदो लक्ष्मीमनपगामिनीम्।\nयस्यां हिरण्यं प्रभूतं गावो दास्योऽश्वान् विन्देयं पुरुषानहम्॥ १५॥",
    transliteration: "Hiranya Varnam Harinim Suvarna Rajata Srajam\nChandram Hiranmayim Lakshmim Jatavedo Ma Avaha (1)\n\nTam Ma Avaha Jatavedo Lakshmim Anapagaminim\nYasyam Hiranyam Vindeya Gam Ashvam Purushan Aham (2)\n\nAshvapurvam Rathamadhyam Hastinadaprabodhinim\nShriyam Devim Upahvaye Shr Ma Devi Jushatam (3)\n\nKam Sosmitam Hiranyaprakaram Ardram Jvalantim Triptam Tarpayantim\nPadme Sthitam Padmavarnaam Tami Hopahvaye Shriyam (4)\n\nChandram Prabhasam Yashasa Jvalantim Shriyam Loke Devajushtam Udaram\nTam Padminim Im Sharanam Prapadye Alakshmirme Nashyatam Tvam Vrune (5)\n\nAdityavarne Tapasoadhijato Vanaspatistava Vrukshoatha Bilvah\nTasya Phalani Tapasanudantu Mayantarayashcha Bahya Alakshmih (6)\n\nUpetu Mam Devasakha Kirttishcha Manina Saha\nPradurbhutoasmi Rashtreosmin Kirtimriddhim Dadatu Me (7)\n\nKshutpipasalamalam Jyeshtham Alakshmim Nashayamyaham\nAbhutim Asamriddhim Cha Sarvam Nirnuda Me Grihat (8)\n\nGandhadvaaram Duraadharshaam Nityapushtam Kariishinim\nEeshvarim Sarvabhutaanaam Taam Ihopahvaye Shriyam (9)\n\nManasah Kaamaakutim Vachah Satyamashimahi\nPashunam Rupamannasya Mayi Shrih Shrayatam Yashah (10)\n\nKardamena Prajabhuta Mayi Sambhava Kardama\nShriyam Vasaya Me Kule Mataram Padmaalinim (11)\n\nAapah Srijyantu Snigdhani Chiklita Vasa Me Grihe\nNi Cha Devim Mataram Shriyam Vasaya Me Kule (12)\n\nAardram Pushkarinim Pushtim Pingalam Padmaalinim\nChandram Hiranmayim Lakshmim Jatavedo Ma Avaha (13)\n\nAardram Yah Karinim Yashtim Suvarnam Hemamalinim\nSuryam Hiranmayim Lakshmim Jatavedo Ma Avaha (14)\n\nTam Ma Avaha Jatavedo Lakshmim Anapagaminim\nYasyam Hiranyam Prabhutam Gaavo Dasyo Ashvan Vindeya Purushan Aham (15)",
    meaning: "O Jatavedas (Fire), bring me Lakshmi — golden-complexioned, beautiful as the moon, wearing gold and silver garlands. Bring that Lakshmi who never departs — through whom I shall obtain gold, cows, horses, and people. Remove all poverty, all misfortune, all lack from my home. Establish Lakshmi permanently in my lineage.",
    benefit: "Removes all debt and poverty at its root, establishes permanent prosperity and abundance",
    source: "Rigveda Khila — Shri Suktam, all 15 verses",
    ttsText: "Hiranya Varnam Harinim Suvarna Rajata Srajam Chandram Hiranmayim Lakshmim Jatavedo Ma Avaha Tam Ma Avaha Jatavedo Lakshmim Anapagaminim Yasyam Hiranyam Vindeya Gam Ashvam Purushan Aham"
  },
  {
    id: "fear-anxiety",
    situation: "Fear & Anxiety",
    situationHindi: "भय और चिंता",
    emoji: "🛡️",
    name: "Panchakshara — Complete with Explanation",
    deity: "Shiva",
    deityColor: "oklch(0.52 0.26 268)",
    sanskrit: "ॐ नमः शिवाय॥\n\nन = पृथ्वी तत्व — भूमि और स्थिरता\nम = जल तत्व — भावनाएं और प्रवाह\nशि = अग्नि तत्व — ऊर्जा और परिवर्तन\nव = वायु तत्व — प्राण और स्वतंत्रता\nय = आकाश तत्व — चेतना और असीमता\n\nॐ नमः शिवाय नमः शिवाय\nशिवाय नमः ॐ नमः शिवाय\nशिवाय शिवाय शिवाय नमः॥\n\nशिवं शिवकरं शान्तं शिवात्मानं शिवोत्तमम्।\nशिवमार्गप्रणेतारं प्रणतोऽस्मि सदाशिवम्॥",
    transliteration: "Om Namah Shivaya\n\nNa = Prithvi (Earth) — stability and ground\nMa = Jala (Water) — emotions and flow\nShi = Agni (Fire) — energy and transformation\nVa = Vayu (Air) — breath and freedom\nYa = Akasha (Space) — consciousness, infinite\n\nOm Namah Shivaya Namah Shivaya\nShivaya Namah Om Namah Shivaya\nShivaya Shivaya Shivaya Namah\n\nShivam Shivakaram Shantam Shivatmanam Shivottamam\nShivamarga Pranetaram Pranato'smi Sadasivam",
    meaning: "I bow to the auspicious Shiva — the five syllables represent the five sacred elements of all creation. By chanting Na-Ma-Shi-Va-Ya, one purifies all five elements within. I bow to the eternally auspicious Shiva who leads on the path of auspiciousness.",
    benefit: "Purifies the five elements, removes deep fear and anxiety, brings inner stillness and courage",
    source: "Krishna Yajurveda — Shri Rudram 8.13, Shiva Mahapurana",
    ttsText: "Om Namah Shivaya Namah Shivaya Shivaya Namah Om Namah Shivaya Shivam Shivakaram Shantam Shivatmanam Shivottamam Shivamarga Pranetaram Pranato Asmi Sadasivam"
  },
  {
    id: "marriage-relationship",
    situation: "Marriage & Relationships",
    situationHindi: "विवाह और संबंध",
    emoji: "❤️",
    name: "Vivaha Saptapadi Mantras",
    deity: "Agni / Vishnu / Universal",
    deityColor: "oklch(0.62 0.22 48)",
    sanskrit: "ॐ इषे एकपदी भव — सा मामनुव्रता भव॥ १॥\nॐ ऊर्जे द्विपदी भव — सा मामनुव्रता भव॥ २॥\nॐ रायस्पोषाय त्रिपदी भव — सा मामनुव्रता भव॥ ३॥\nॐ मायो भवाय चतुष्पदी भव — सा मामनुव्रता भव॥ ४॥\nॐ प्रजाभ्यः पञ्चपदी भव — सा मामनुव्रता भव॥ ५॥\nॐ ऋतुभ्यः षट्पदी भव — सा मामनुव्रता भव॥ ६॥\nॐ सखा सप्तपदी भव — सखायौ स्याव॥ ७॥\n\nसप्तपदी मन्त्र:\nॐ सखे सप्तपदा भव\nत्वया सख्यं करोम्यहम्\nसख्यान्मे पाहि\nसख्यान्मे माऽयोस्थाः॥",
    transliteration: "Om Ishe Ekapadi Bhava — Sa Mam Anuvrata Bhava (Step 1: for food)\nOm Urje Dvipadi Bhava — Sa Mam Anuvrata Bhava (Step 2: for strength)\nOm Rayasposhaaya Tripadi Bhava (Step 3: for prosperity)\nOm Mayo Bhavaaya Chatushpadi Bhava (Step 4: for happiness)\nOm Prajabhyah Pancapadi Bhava (Step 5: for children)\nOm Ritubhyah Shatpadi Bhava (Step 6: for all seasons)\nOm Sakha Saptapadi Bhava — Sakhayau Syava (Step 7: friendship, eternal)\n\nOm Sakhe Saptapada Bhava\nTvaya Sakhyam Karomy Aham\nSakhyan Me Pahi\nSakhyan Me Ma Ayosthah",
    meaning: "The Seven Steps of the sacred Hindu wedding: for food, for strength, for prosperity, for happiness, for children, for the seasons, and finally — become my eternal friend. With these seven steps, we are united. Be my companion, protect our friendship, never let our bond break.",
    benefit: "Sacred union and bond, harmonious marriage, eternal friendship and love",
    source: "Rigveda / Grihya Sutras — Vivaha Saptapadi, the seven wedding steps",
    ttsText: "Om Ishe Ekapadi Bhava Om Urje Dvipadi Bhava Om Rayasposhaaya Tripadi Bhava Om Mayo Bhavaaya Chatushpadi Bhava Om Prajabhyah Pancapadi Bhava Om Ritubhyah Shatpadi Bhava Om Sakha Saptapadi Bhava Sakhayau Syava"
  },
  {
    id: "health-healing",
    situation: "Health & Healing",
    situationHindi: "स्वास्थ्य और उपचार",
    emoji: "💚",
    name: "Dhanvantari Mantra — Complete",
    deity: "Dhanvantari — Vishnu avatar",
    deityColor: "oklch(0.50 0.26 268)",
    sanskrit: "ॐ नमो भगवते वासुदेवाय\nधन्वन्तरये अमृतकलश हस्ताय\nसर्वामयविनाशनाय\nत्रैलोक्यनाथाय\nश्री महाविष्णवे नमः॥\n\nधन्वन्तरिं आदिदेवं\nदेवानाञ्च भिषग्वरम्।\nआयुर्वेदस्य प्रणेतारं\nनमामि सिद्धिदायकम्॥\n\nनमामि धन्वन्तरिं आदिदेवं\nसुरासुरैः वन्दित पादपद्मम्।\nलोकेऽर्तिनाशं निखिलामयघ्नं\nधातारमीशं विविधौषधीनाम्॥",
    transliteration: "Om Namo Bhagavate Vasudevaya\nDhanvantaraye Amritakalasha Hastaya\nSarvamaya Vinashanaya\nTrilokanathaya\nShri Mahavishnave Namah\n\nDhanvantarim Adideuvam\nDevananca Bhishagvaram\nAyurvedasya Pranetaram\nNamami Siddhidayakam\n\nNamami Dhanvantarim Adideuvam\nSurasuaraih Vandita Padapadmam\nLokaartinasham Nikhilamayaghnam\nDhataram Isham Vividhaushadhinam",
    meaning: "I bow to Lord Dhanvantari — avatar of Vasudeva, holding the pot of immortality in his hands, destroyer of all diseases, lord of the three worlds, great Vishnu. I bow to Dhanvantari — the first god, best physician of gods and demons, propounder of Ayurveda, granter of all powers. Whose lotus feet are worshipped by gods and demons, destroyer of all suffering, healer of all diseases, lord of diverse medicines.",
    benefit: "Heals all diseases, restores health, brings divine medicine and healing energy",
    source: "Ayurveda tradition — complete Dhanvantari Mantra from Bhagavata Purana",
    ttsText: "Om Namo Bhagavate Vasudevaya Dhanvantaraye Amritakalasha Hastaya Sarvamaya Vinashanaya Trailokyaathaya Shri Mahavishnave Namah Dhanvantarim Adideuvam Devananca Bhishagvaram Ayurvedasya Pranetaram Namami Siddhidayakam"
  },
  {
    id: "protection-evil",
    situation: "Protection from Evil",
    situationHindi: "बुरी शक्तियों से सुरक्षा",
    emoji: "⚡",
    name: "Hanuman Kavach — Complete",
    deity: "Hanuman",
    deityColor: "oklch(0.58 0.26 38)",
    sanskrit: "ॐ नमो भगवते आञ्जनेयाय महाबलाय स्वाहा॥\n\nमनोजवं मारुततुल्यवेगं\nजितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं\nश्रीरामदूतं शरणं प्रपद्ये॥\n\nॐ हं हनुमते नमः।\nॐ हं हनुमते रुद्रात्मकाय हुं फट्॥\n\nपूर्वे हनुमान् पातु दक्षिणे च महाबलः।\nपश्चिमे तु महावीरः उत्तरे पवनात्मजः॥\nशिरसि श्रीरामदूतः कण्ठे रक्तु कपीश्वरः।\nहृदये च महाशूरो नाभौ पातु महाबलः॥",
    transliteration: "Om Namo Bhagavate Anjaneyaya Mahabalaya Svaha\n\nManojavam Marutatulyavegam\nJitendriyam Buddhimatam Varishtham\nVatatmajam Vanarayuthamukhyam\nShriramadutam Sharanam Prapadye\n\nOm Ham Hanumate Namah\nOm Ham Hanumate Rudratmakaya Hum Phat\n\nPurve Hanuman Patu Dakshine Cha Mahabalah\nPashchime Tu Mahaveerah Uttare Pavanatmajah\nSirasi Shriramadutah Kanthe Raktu Kapishvarah\nHridaye Cha Mahashuro Nabhau Patu Mahabalah",
    meaning: "I bow to mighty Hanuman, son of the wind — swift as thought, equal to the wind, master of the senses, foremost of the wise, chief of vanaras — I take refuge in this messenger of Rama. Let Hanuman guard me from the East, the mighty one from the South, the great warrior from the West, Son of the Wind from the North — may he protect my head, throat, heart, and navel.",
    benefit: "Complete divine protection from all evil, negative entities, and harm; Hanuman's armour around the body",
    source: "Hanuman Kavach — Tantric Samhita, Hanuman Stotra tradition, Ramcharitmanas",
    ttsText: "Om Namo Bhagavate Anjaneyaya Mahabalaya Svaha Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtham Vatatmajam Vanarayuthamukhyam Shriramadutam Sharanam Prapadye Om Ham Hanumate Namah Om Ham Hanumate Rudratmakaya Hum Phat"
  },
  {
    id: "education-knowledge",
    situation: "Education & Knowledge",
    situationHindi: "शिक्षा और ज्ञान",
    emoji: "📚",
    name: "Saraswati Vandana — Complete",
    deity: "Saraswati",
    deityColor: "oklch(0.55 0.22 220)",
    sanskrit: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता\nया वीणावरदण्डमण्डितकरा या श्वेतपद्मासना।\nया ब्रह्माच्युत शङ्करप्रभृतिभिर्देवैः सदा वन्दिता\nसा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥\n\nशुक्लां ब्रह्मविचारसारपरमामाद्यां जगद्व्यापिनीं\nवीणापुस्तकधारिणीमभयदां जाड्यान्धकारापहाम्।\nहस्ते स्फटिकमालिकां विदधतीं पद्मासने संस्थितां\nवन्दे तां परमेश्वरीं भगवतीं बुद्धिप्रदां शारदाम्॥\n\nॐ ऐं महासरस्वत्यै नमः।\nसरस्वत्यै नमो नित्यं भद्रकाल्यै नमो नमः।\nवेद-वेदान्त-वेदाङ्ग-विद्यास्थानेभ्य एव च॥",
    transliteration: "Ya Kundendu Tushara Hara Dhavala Ya Shubhravastravrita\nYa Veenavara Dandamanditakara Ya Shvetapadmasana\nYa Brahma Achyuta Shankara Prabhritibhir Devaih Sada Vandita\nSa Mam Patu Sarasvati Bhagavati Nihsheshajadyapaha\n\nShuklaambara Brahma Vichara Saraparamam Adyam Jagadvyapinem\nVeenapustaka Dharinimabhyadam Jadyandhakaarapham\nHaste Sphatikamalikaum Vidadhatim Padmasane Samsthitam\nVande Tam Parameshvarim Bhagavatim Buddhipradam Sharadam\n\nOm Aim Mahasarasvatyai Namah\nSarasvatyai Namo Nityam Bhadrakalyai Namo Namah\nVeda-Vedanta-Vedanga-Vidyasthanebhya Eva Cha",
    meaning: "She who is white as the kunda flower, moon, and snow garland, clothed in pure white, adorned with the vina in her blessed hand, seated on a white lotus — ever worshipped by Brahma, Vishnu, and Shankara — may that Saraswati remove all my dullness. I bow to her who spreads the pure essence of Brahma-vidya throughout the world, who holds vina and books, grants fearlessness, dispels the darkness of ignorance.",
    benefit: "Sharpens intellect and memory, removes ignorance, blesses students and scholars with divine wisdom",
    source: "Saraswati Vandana — traditional prayer; Devi Bhagavata Purana",
    ttsText: "Ya Kundendu Tushara Hara Dhavala Ya Shubhravastravrita Ya Veenavara Dandamanditakara Ya Shvetapadmasana Ya Brahma Achyuta Shankara Prabhritibhir Devaih Sada Vandita Sa Mam Patu Sarasvati Bhagavati Nihsheshajadyapaha Om Aim Mahasarasvatyai Namah"
  },
  {
    id: "new-venture",
    situation: "Starting New Venture",
    situationHindi: "नया काम शुरू करना",
    emoji: "🚀",
    name: "Ganesha Atharvashirsha — Key Verses",
    deity: "Ganesha",
    deityColor: "oklch(0.58 0.22 48)",
    sanskrit: "ॐ नमस्ते गणपतये॥\nत्वमेव प्रत्यक्षं तत्त्वमसि॥\nत्वमेव केवलं कर्ताऽसि॥\nत्वमेव केवलं धर्ताऽसि॥\nत्वमेव केवलं हर्ताऽसि॥\nत्वमेव सर्वं खल्विदं ब्रह्माऽसि॥\nत्वं साक्षादात्माऽसि नित्यम्॥\n\nऋतं वच्मि। सत्यं वच्मि॥\n\nअव त्वं माम्। अव वक्तारम्। अव श्रोतारम्।\nअव दातारम्। अव धातारम्।\nअवानूचानमव शिष्यम्।\nअव पश्चातात्। अव पुरस्तात्।\nअव उत्तरातात्। अव दक्षिणातात्।\nअव चोर्ध्वात्। अव अधरात्।\nसर्वतो मां पाहि पाहि समन्तात्॥\n\nत्वं वाङ्मयस्त्वं चिन्मयः।\nत्वमानन्दमयस्त्वं ब्रह्ममयः।\nत्वं सच्चिदानन्दाऽद्वितीयोऽसि।\nत्वं प्रत्यक्षं ब्रह्माऽसि।\nत्वं ज्ञानमयो विज्ञानमयोऽसि॥\n\nॐ गं गणपतये नमः॥",
    transliteration: "Om Namaste Ganapataye\nTvameva Pratyaksham Tattvamasi\nTvameva Kevalam Karta'si\nTvameva Kevalam Dharta'si\nTvameva Kevalam Harta'si\nTvameva Sarvam Khalvidam Brahma'si\nTvam Sakshadatma'si Nityam\n\nRitam Vacmi Satyam Vacmi\n\nAva Tvam Maam. Ava Vaktaram. Ava Shrotaram\nAva Dataram. Ava Dhataram\nAvanuchanam Ava Shishyam\nAva Pashchatat. Ava Purashat\nAva Uttarat. Ava Dakshinatat\nAva Chordhvat. Ava Adharat\nSarvato Mam Pahi Pahi Samantat\n\nTvam Vanmayastvam Chinmayah\nTvamanandamayastvam Brahmmayah\nTvam Sachchidananda Advitiyosi\nTvam Pratyaksham Brahma'si\nTvam Jnanamayo Vijnana Mayo'si\n\nOm Gam Ganapataye Namah",
    meaning: "I bow to Ganapati. You alone are the direct Brahman. You alone are the creator, sustainer, and dissolver. You are all this — verily you are Brahman. You are eternal consciousness. Protect me from all sides — front, back, north, south, above, below. You are made of speech, of consciousness, of bliss, of Brahman. You are sat-chit-ananda, non-dual. I bow to Ganesha.",
    benefit: "Removes all obstacles from new beginnings, brings divine success and auspiciousness to new ventures",
    source: "Ganapati Atharvashirsha Upanishad — Atharva Veda tradition, key verses",
    ttsText: "Om Namaste Ganapataye Tvameva Pratyaksham Tattvamasi Ritam Vacmi Satyam Vacmi Ava Tvam Maam Sarvato Mam Pahi Pahi Samantat Tvam Vanmayastvam Chinmayah Tvamanandamayastvam Brahmmayah Om Gam Ganapataye Namah"
  },
  {
    id: "grief-depression",
    situation: "Grief & Depression",
    situationHindi: "दुःख और अवसाद",
    emoji: "🌈",
    name: "Bhagavad Gita — Chapter 2, Verses 20–23",
    deity: "Krishna — Supreme",
    deityColor: "oklch(0.50 0.26 268)",
    sanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥ २.२०॥\n\nवेदाविनाशिनं नित्यं य एनमजमव्ययम्।\nकथं स पुरुषः पार्थ कं घातयति हन्ति कम्॥ २.२१॥\n\nवासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही॥ २.२२॥\n\nनैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥ २.२३॥",
    transliteration: "Na Jayate Mriyate Va Kadachin\nNayam Bhutva Bhavita Va Na Bhuyah\nAjo Nityah Shashvato'yam Purano\nNa Hanyate Hanyamane Sharire (2.20)\n\nVedavinashinam Nityam Ya Enam Ajam Avyayam\nKatham Sa Purushah Partha Kam Ghatayati Hanti Kam (2.21)\n\nVasansi Jirnani Yatha Vihaya\nNavani Grihnati Naro'parani\nTatha Sharirani Vihaya Jirna\nNyanyani Samyati Navani Dehi (2.22)\n\nNainam Chhindanti Shastrani Nainam Dahati Pavakah\nNa Chainam Kledayantyapo Na Shoshayati Marutah (2.23)",
    meaning: "The soul is never born nor dies — it has not come into being and will not cease to be. It is eternal, unborn, ever-existing, undying, and primeval. When the body is slain the soul is not slain. As a person puts on new garments, so the soul takes on new bodies. Weapons cannot cut it, fire cannot burn it, water cannot wet it, wind cannot dry it. The soul is eternal.",
    benefit: "Removes grief at its root with Krishna's eternal wisdom, brings peace about life, death, and loss",
    source: "Bhagavad Gita Chapter 2, Verses 20–23 — Krishna to Arjuna",
    ttsText: "Na Jayate Mriyate Va Kadachin Nayam Bhutva Bhavita Va Na Bhuyah Ajo Nityah Shashvato Ayam Purano Na Hanyate Hanyamane Sharire Nainam Chhindanti Shastrani Nainam Dahati Pavakah Na Chainam Kledayanti Apo Na Shoshayati Marutah"
  },
  {
    id: "forgiveness",
    situation: "Seeking Forgiveness",
    situationHindi: "क्षमा और पश्चाताप",
    emoji: "🌺",
    name: "Kshamapana Stotra — Complete",
    deity: "Universal / Shiva",
    deityColor: "oklch(0.52 0.26 268)",
    sanskrit: "कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वानुसृतस्वभावात्।\nकरोमि यद्यत् सकलं परस्मै\nनारायणायेति समर्पयामि॥\n\nकरचरणकृतं वाक् कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम्।\nविहितमविहितं वा सर्वमेतत् क्षमस्व\nजय जय करुणाब्धे श्री महादेव शम्भो॥\n\nअपराध सहस्राणि क्रियन्तेऽहर्निशं मया।\nदासोऽयमिति मां मत्वा क्षमस्व परमेश्वर॥\n\nआवाहनं न जानामि न जानामि विसर्जनम्।\nपूजां चैव न जानामि क्षम्यतां परमेश्वर॥",
    transliteration: "Kayena Vacha Manasendriyair Va\nBuddhyatmana Vanuriitasvabhavat\nKaromi Yad Yat Sakalam Parasmai\nNarayanayeti Samarpayami\n\nKara Charana Kritam Vak Kayajam Karma Jam Va\nShravana Nayana Jam Va Manasam Va Paradham\nVihitam Avihitam Va Sarvametat Kshamasva\nJaya Jaya Karunaabdhe Shri Mahadeva Shambho\n\nAparadha Sahasrani Kriyante'harnishah Maya\nDaso'yam Iti Mam Matva Kshamasva Parameshvara\n\nAvahana Na Janami Na Janami Visarjanam\nPujam Caiva Na Janami Kshamyatam Parameshvara",
    meaning: "Whatever I do with body, speech, mind, senses, intellect, or soul — I offer it all to Narayana. Forgive me for all sins done by hands, feet, speech, body, karma, hearing, sight, or mind — whether prescribed or not — O ocean of compassion, O Mahadeva Shambho. I commit thousands of transgressions every day and night. Knowing I am your servant, please forgive me, O Supreme Lord. I do not know how to invoke you, dismiss you, or worship you properly — please forgive me, O Lord.",
    benefit: "Releases all guilt and past karma, brings lightness, peace and divine forgiveness",
    source: "Kshamapana Stotra — traditional Hindu prayer of forgiveness",
    ttsText: "Kara Charana Kritam Vak Kayajam Karma Jam Va Shravana Nayana Jam Va Manasam Va Paradham Vihitam Avihitam Va Sarvametat Kshamasva Jaya Jaya Karunaabdhe Shri Mahadeva Shambho Apaadha Sahasrani Kriyante Harnishah Maya Daso Ayam Iti Mam Matva Kshamasva Parameshvara"
  },
  {
    id: "loneliness",
    situation: "Loneliness & Isolation",
    situationHindi: "एकाकीपन और अकेलापन",
    emoji: "🤝",
    name: "108 Names of Krishna — Select",
    deity: "Krishna",
    deityColor: "oklch(0.50 0.26 268)",
    sanskrit: "ॐ कृष्णाय नमः। ॐ विष्णवे नमः। ॐ वासुदेवाय नमः।\nॐ प्रभवे नमः। ॐ भानवे नमः। ॐ श्रीनिवासाय नमः।\nॐ रणाग्रणये नमः। ॐ पुण्याय नमः। ॐ विश्वात्मने नमः।\nॐ अनन्ताय नमः। ॐ सर्वात्मने नमः। ॐ अच्युताय नमः।\nॐ गोविन्दाय नमः। ॐ मधुसूदनाय नमः। ॐ त्रिविक्रमाय नमः।\nॐ जनार्दनाय नमः। ॐ श्रीधराय नमः। ॐ हृषीकेशाय नमः।\nॐ पद्मनाभाय नमः। ॐ दामोदराय नमः। ॐ सङ्कर्षणाय नमः।\nॐ शङ्खभृते नमः। ॐ चक्रभृते नमः। ॐ शार्ङ्गधन्वने नमः।\nॐ गदाभृते नमः। ॐ रथाङ्गपाणये नमः। ॐ अक्षोभ्याय नमः।\nॐ सर्वप्रहरणायुधाय नमः। ॐ श्रीपतये नमः। ॐ पुरुषोत्तमाय नमः।\nॐ विश्वरूपाय नमः। ॐ सर्वेश्वराय नमः। ॐ नारायणाय नमः।\nॐ हरये नमः। ॐ माधवाय नमः। ॐ देवकीनन्दनाय नमः।\nॐ यदुनन्दनाय नमः। ॐ गोपालाय नमः। ॐ केशवाय नमः।\nॐ मुरारये नमः। ॐ मुकुन्दाय नमः। ॐ नन्दकुमाराय नमः।\nॐ वृन्दावनचराय नमः। ॐ कालियनाशनाय नमः।\nॐ गिरिधाराय नमः। ॐ यशोदानन्दनाय नमः।\nॐ राधाप्रियाय नमः। ॐ द्वारकाधीशाय नमः।\nॐ भक्तप्रियाय नमः। ॐ जगन्नाथाय नमः।\n\nहरे कृष्ण हरे कृष्ण\nकृष्ण कृष्ण हरे हरे\nहरे राम हरे राम\nराम राम हरे हरे॥\n\nॐ नमो भगवते वासुदेवाय।\nकृष्णस्तु भगवान् स्वयम्॥",
    transliteration: "Om Krishnaya Namah. Om Vishnave Namah. Om Vasudevaya Namah\nOm Prabhave Namah. Om Bhanave Namah. Om Shrinivasaya Namah\nOm Ranaagranaye Namah. Om Punyaya Namah. Om Vishvatmane Namah\nOm Anantaya Namah. Om Sarvatmane Namah. Om Achyutaya Namah\nOm Govindaya Namah. Om Madhusudanaya Namah. Om Trivikramaya Namah\nOm Janardanaya Namah. Om Shridharaya Namah. Om Hrishikeshaya Namah\nOm Padmanabhaya Namah. Om Damodaraya Namah. Om Sankarshanaya Namah\nOm Shankhabhrite Namah. Om Chakrabhrite Namah. Om Sharngadhanvane Namah\nOm Gadabhrite Namah. Om Rathaangapaanaye Namah. Om Akshobhyaya Namah\nOm Sarvagraharanayudhaya Namah. Om Shripataye Namah. Om Purushottamaya Namah\nOm Vishvarupaya Namah. Om Sarveshvaraya Namah. Om Narayanaya Namah\nOm Haraye Namah. Om Madhavaya Namah. Om Devakinandanaya Namah\nOm Yadunandanaya Namah. Om Gopalaya Namah. Om Keshavaya Namah\nOm Muraraye Namah. Om Mukundaya Namah. Om Nandakumaraya Namah\nOm Vrindavanachaaraya Namah. Om Kaliyanaashanaya Namah\nOm Giridharaya Namah. Om Yashodanandanaya Namah\nOm Raadhapriyaya Namah. Om Dvarakaadhishaya Namah\nOm Bhaktapriyaya Namah. Om Jagannathaya Namah\n\nHare Krishna Hare Krishna Krishna Krishna Hare Hare\nHare Rama Hare Rama Rama Rama Hare Hare\n\nOm Namo Bhagavate Vasudevaya\nKrishnastu Bhagavan Svayam",
    meaning: "108 divine names of Lord Krishna — each name a sacred form of the Lord. By chanting these names one is never truly alone — Krishna is present in every one of his names. The Maha Mantra: O Hari, O Krishna, O Rama — I am yours completely. Krishna himself is the Supreme Personality of Godhead.",
    benefit: "Destroys loneliness at its root, brings divine companionship, fills the heart with Krishna's eternal presence",
    source: "Krishna Sahasranama — Mahabharata; Bhagavata Purana; Kali Santarana Upanishad",
    ttsText: "Om Krishnaya Namah Om Vishnave Namah Om Vasudevaya Namah Om Govindaya Namah Om Madhusudanaya Namah Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare Om Namo Bhagavate Vasudevaya"
  },
  {
    id: "anger-management",
    situation: "Anger Management",
    situationHindi: "क्रोध पर नियंत्रण",
    emoji: "🌊",
    name: "Shama Mantra — Vedic",
    deity: "Universal / Indra / Mitra-Varuna",
    deityColor: "oklch(0.52 0.22 220)",
    sanskrit: "ॐ शं न मित्रः शं वरुणः शं न भवत्वर्यमा।\nशं न इन्द्रो बृहस्पतिः शं नो विष्णुरुरुक्रमः॥\n\nनमो ब्रह्मणे नमस्ते वायो त्वमेव प्रत्यक्षं ब्रह्मासि।\nत्वामेव प्रत्यक्षं ब्रह्म वदिष्यामि। ऋतं वदिष्यामि। सत्यं वदिष्यामि।\nतन्मामवतु। तद्वक्तारमवतु। अवतु माम्। अवतु वक्तारम्॥\n\nॐ शान्तिः शान्तिः शान्तिः॥\n\nक्रोधो मूलमनर्थानां क्रोधः संसारबन्धनम्।\nधर्मार्थकाममोक्षाणां क्रोध एव महद्भयम्॥\n\nॐ सर्वे भवन्तु सुखिनः\nसर्वे सन्तु निरामयाः\nसर्वे भद्राणि पश्यन्तु\nमा कश्चिद् दुःखभाग्भवेत्\nॐ शान्तिः शान्तिः शान्तिः॥",
    transliteration: "Om Sham Na Mitrah Sham Varunah Sham Na Bhavatu Aryama\nSham Na Indro Brihaspatih Sham No Vishnurukramah\n\nNamo Brahmane Namaste Vayo Tvameva Pratyaksham Brahmassi\nTvameva Pratyaksham Brahma Vadishyami Ritam Vadishyami Satyam Vadishyami\nTanmamavatu Tadvaktaramavatu Avatu Mam Avatu Vaktaram\n\nOm Shantih Shantih Shantih\n\nKrodho Mulamanarthanam Krodhah Samsarabandhanam\nDharmartha Kamamokshanam Krodha Eva Mahadbhayam\n\nOm Sarve Bhavantu Sukhinah Sarve Santu Niramayah\nSarve Bhadrani Pashyantu Ma Kashchid Duhkhabhag Bhavet",
    meaning: "May Mitra, Varuna, Aryama, Indra, Brihaspati, and Vishnu all grant us peace. I honour Brahman, Vayu is directly Brahman — I will speak truth, I will speak the sacred. Anger is the root of all misfortune, the bond of samsara — it is the greatest enemy of dharma, prosperity, love, and liberation. May all beings be happy, free from disease, see only good, and may none suffer.",
    benefit: "Dissolves anger at its root with Vedic wisdom, brings universal peace and emotional balance",
    source: "Taittiriya Upanishad 1.1 + Rigveda 1.90 + Mahabharata Shanti Parva on Krodha",
    ttsText: "Om Sham Na Mitrah Sham Varunah Sham Na Bhavatu Aryama Sham Na Indro Brihaspatih Sham No Vishnurukramah Om Shantih Shantih Shantih Om Sarve Bhavantu Sukhinah Sarve Santu Niramayah Sarve Bhadrani Pashyantu Ma Kashchid Duhkhabhag Bhavet Om Shantih Shantih Shantih"
  },
  {
    id: "addiction-recovery",
    situation: "Addiction Recovery",
    situationHindi: "लत से मुक्ति",
    deity: "Krishna — Gita",
    deityColor: "oklch(0.50 0.26 268)",
    emoji: "🔓",
    name: "Bhagavad Gita — Chapter 6, Verses 5–6",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥ ६.५॥\n\nबन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥ ६.६॥\n\nयोगी युञ्जीत सततमात्मानं रहसि स्थितः।\nएकाकी यतचित्तात्मा निराशीरपरिग्रहः॥ ६.१०॥\n\nॐ नमः शिवाय।\nसर्वे भवन्तु सुखिनः।\nमुञ्चामि त्वां हविषा जातवेदः॥",
    transliteration: "Uddharedatmana'tmanam Natmanam Avasadayet\nAtmaiva Hyatmano Bandhur Atmaiva Ripur Atmanah (6.5)\n\nBandhur Atmatmanas Tasya Yenatmaiva Atmana Jitah\nAnatmanas Tu Shatritve Varteta Atmaiva Shatruvat (6.6)\n\nYogi Yunjita Satatam Atmanam Rahasi Sthitah\nEkaki Yatachittatma Nirashir Aparigraha (6.10)\n\nOm Namah Shivaya\nSarve Bhavantu Sukhinah\nMuncami Tvam Havisha Jatavedah",
    meaning: "Lift yourself up — do not let yourself fall. The self is the self's own friend and the self is the self's own enemy. For one who has conquered the self through the self, the self is a friend; but for one who has not, the self remains an enemy. The yogi should constantly practice while sitting alone, having conquered mind and body, free from desire and possessiveness.",
    benefit: "Empowers self-mastery over addiction, builds inner strength and resolve, reveals the self as its own liberator",
    source: "Bhagavad Gita 6.5–6 — Krishna's teaching on self-discipline and liberation",
    ttsText: "Uddharedatmana Atmanam Natmanam Avasadayet Atmaiva Hyatmano Bandhur Atmaiva Ripur Atmanah Bandhur Atmatmanas Tasya Yenatmaiva Atmana Jitah Anatmanas Tu Shatritve Varteta Atmaiva Shatruvat Om Namah Shivaya"
  },
  {
    id: "spiritual-progress",
    situation: "Spiritual Progress",
    situationHindi: "आध्यात्मिक उन्नति",
    emoji: "🌅",
    name: "Gayatri with Brahma Mantra — Combined",
    deity: "Brahman — Supreme",
    deityColor: "oklch(0.62 0.22 54)",
    sanskrit: "ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात्॥\n\nॐ तत् सत्।\nॐ अहं ब्रह्मास्मि।\nॐ तत् त्वम् असि।\nॐ अयम् आत्मा ब्रह्म।\nॐ प्रज्ञानं ब्रह्म।\n\nपूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते।\nॐ शान्तिः शान्तिः शान्तिः॥\n\nसहनाववतु सहनौ भुनक्तु\nसहवीर्यं करवावहै।\nतेजस्विनावधीतमस्तु मा विद्विषावहै।\nॐ शान्तिः शान्तिः शान्तिः॥",
    transliteration: "Om Bhurbhuvah Svah\nTat Savitur Varenyam\nBhargo Devasya Dhimahi\nDhiyo Yo Nah Prachodayat\n\nOm Tat Sat\nOm Aham Brahmasmi\nOm Tat Tvam Asi\nOm Ayam Atma Brahma\nOm Prajnanam Brahma\n\nPurnamadah Purnamidam Purnat Purnamudacyate\nPurnasya Purnamadaya Purnamevavashishyate\nOm Shantih Shantih Shantih\n\nSa Nau Avatu Sa Nau Bhunaktu\nSa Viryam Karavavahai\nTejasvi Naav Adhitam Astu Ma Vidvishavahai\nOm Shantih Shantih Shantih",
    meaning: "We meditate on the divine radiance — may it illuminate our intellect. Om is That. I am Brahman. That thou art. This Self is Brahman. Consciousness is Brahman — the four Mahavakyas. That is complete, this is complete — completeness from completeness, and completeness alone remains. May teacher and student be protected together, nourished together, work with great energy together — may our studies be brilliant, may there be no enmity.",
    benefit: "Accelerates spiritual evolution, awakens the highest wisdom, connects to the ultimate reality",
    source: "Rigveda 3.62.10 + Four Mahavakyas + Isha Upanishad + Taittiriya Upanishad",
    ttsText: "Om Bhurbhuvah Svah Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat Om Tat Sat Om Aham Brahmasmi Om Tat Tvam Asi Om Ayam Atma Brahma Purnamadah Purnamidam Purnat Purnamudacyate Purnasya Purnamadaya Purnamevavashishyate Om Shantih Shantih Shantih"
  }
];
const TOTAL_BEADS = 108;
const GRID_COLS = 12;
const BEADS = Array.from({ length: TOTAL_BEADS }, (_, i) => ({
  id: `bead-${i}`,
  index: i
}));
function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
function formatDate(ts) {
  return new Date(ts).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function MalaDiagram({ count }) {
  const cx = 160;
  const cy = 160;
  const r = 120;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 320 320",
      className: "w-full max-w-[280px] mx-auto",
      "aria-label": `${count} of 108 beads completed`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
          "Sacred mala — ",
          count,
          " of 108 beads counted"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r: r + 18,
            fill: "none",
            stroke: "oklch(0.58 0.18 48 / 0.18)",
            strokeWidth: "1",
            strokeDasharray: "3 5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r: r + 24,
            fill: "none",
            stroke: "oklch(0.58 0.18 48 / 0.10)",
            strokeWidth: "1",
            strokeDasharray: "1 7"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r,
            fill: "none",
            stroke: "oklch(0.58 0.18 48 / 0.22)",
            strokeWidth: "0.75"
          }
        ),
        BEADS.map(({ id, index }) => {
          const angle = index / TOTAL_BEADS * 2 * Math.PI - Math.PI / 2;
          const bx = cx + r * Math.cos(angle);
          const by = cy + r * Math.sin(angle);
          const done = index < count;
          const isSumeru = index === 0;
          const beadR = isSumeru ? 8 : 5.5;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx: bx,
              cy: by,
              r: beadR,
              fill: done ? isSumeru ? "oklch(0.52 0.22 44)" : "oklch(0.58 0.20 46)" : "oklch(0.82 0.06 56)",
              stroke: done ? "oklch(0.42 0.18 40)" : "oklch(0.72 0.08 52)",
              strokeWidth: done ? 0.8 : 0.5,
              initial: false,
              animate: done ? { opacity: 1, scale: 1 } : { opacity: 0.45, scale: 0.88 },
              transition: { duration: 0.25 },
              style: {
                filter: done ? "drop-shadow(0 0 3px oklch(0.62 0.18 48 / 0.5))" : "none"
              }
            },
            id
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: cx,
            y: cy - 14,
            textAnchor: "middle",
            fontFamily: "var(--font-display)",
            fontSize: "38",
            fontWeight: "700",
            fontStyle: "italic",
            fill: "oklch(0.28 0.08 36)",
            children: count
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "text",
          {
            x: cx,
            y: cy + 8,
            textAnchor: "middle",
            fontFamily: "var(--font-body)",
            fontSize: "10",
            fill: "oklch(0.42 0.04 52)",
            children: [
              "of ",
              TOTAL_BEADS,
              " beads"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: cx,
            y: cy + 24,
            textAnchor: "middle",
            fontFamily: "var(--font-body)",
            fontSize: "9",
            fill: "oklch(0.52 0.10 46)",
            fontStyle: "italic",
            children: count >= TOTAL_BEADS ? "Mala Complete" : "Tap to count"
          }
        )
      ]
    }
  );
}
function GridVisualization({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-3 text-center", children: "Bead Record" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-1.5 mx-auto",
        style: {
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          maxWidth: 300
        },
        "aria-label": `${count} of 108 beads completed`,
        children: BEADS.map(({ id, index }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "aspect-square rounded-full",
            style: {
              background: index < count ? "radial-gradient(circle at 35% 35%, oklch(0.72 0.22 50), oklch(0.48 0.18 40))" : "oklch(0.80 0.05 54)",
              border: index < count ? "1px solid oklch(0.42 0.16 40)" : "1px solid oklch(0.70 0.06 52)",
              boxShadow: index < count ? "0 1px 4px oklch(0.48 0.18 44 / 0.4), inset 0 1px 0 oklch(0.82 0.10 52 / 0.4)" : "none"
            },
            initial: false,
            animate: index < count ? { scale: 1, opacity: 1 } : { scale: 0.82, opacity: 0.4 },
            transition: { duration: 0.2 }
          },
          id
        ))
      }
    )
  ] });
}
function SessionEntry({ session }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-start justify-between py-3 border-b border-dashed",
      style: { borderColor: "oklch(0.72 0.08 52 / 0.4)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm",
              style: { color: "oklch(0.22 0.04 42)" },
              children: session.mantra ?? "General Japa"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs mt-0.5 italic",
              style: { color: "oklch(0.48 0.06 50)" },
              children: formatDate(session.timestamp)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "font-display text-sm font-bold shrink-0 ml-4",
            style: { color: "oklch(0.48 0.18 44)" },
            children: [
              session.beadCount,
              " beads"
            ]
          }
        )
      ]
    }
  );
}
function MantraCard({
  mantra,
  isSelected,
  onSelect,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      onClick: onSelect,
      disabled,
      "data-ocid": `mala-mantra-select.${mantra.id}`,
      whileHover: !disabled ? { scale: 1.01 } : {},
      whileTap: !disabled ? { scale: 0.98 } : {},
      className: "text-left w-full transition-smooth focus-visible:outline-2 focus-visible:outline-ring",
      style: {
        padding: "0.75rem 1rem",
        background: isSelected ? "linear-gradient(135deg, oklch(0.89 0.09 56 / 0.95), oklch(0.86 0.11 52 / 0.9))" : "oklch(0.92 0.06 60 / 0.55)",
        border: isSelected ? "1.5px solid oklch(0.62 0.16 48)" : "1px solid oklch(0.78 0.08 52 / 0.5)",
        borderRadius: "3px",
        boxShadow: isSelected ? "0 2px 10px oklch(0.58 0.18 48 / 0.18), inset 0 1px 0 rgba(255,248,220,0.4)" : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled && !isSelected ? 0.5 : 1
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: mantra.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-sm font-semibold italic",
              style: {
                color: isSelected ? "oklch(0.22 0.08 36)" : "oklch(0.32 0.06 44)"
              },
              children: mantra.situation
            }
          ),
          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "ml-auto font-body text-xs font-medium px-1.5 py-0.5 rounded",
              style: {
                background: "oklch(0.62 0.20 48)",
                color: "oklch(0.96 0.04 70)"
              },
              children: "Selected"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body text-xs italic",
            style: { color: "oklch(0.52 0.10 48)" },
            children: [
              mantra.name,
              " · ",
              mantra.deity
            ]
          }
        )
      ]
    }
  );
}
function ActiveMantraPanel({
  mantra,
  onSpeak,
  isSpeaking
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.35 },
      className: "mb-6",
      style: {
        background: "linear-gradient(160deg, oklch(0.94 0.07 62 / 0.95) 0%, oklch(0.90 0.09 56 / 0.9) 100%)",
        border: "1.5px solid oklch(0.70 0.14 50 / 0.5)",
        borderRadius: "3px",
        boxShadow: "0 4px 20px oklch(0.48 0.16 44 / 0.12), inset 0 1px 0 rgba(255,248,220,0.5)",
        padding: "1.25rem 1.5rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: mantra.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-lg font-bold italic",
                  style: { color: "oklch(0.22 0.08 36)" },
                  children: mantra.situation
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs",
                style: { color: "oklch(0.52 0.08 50)" },
                children: mantra.situationHindi
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-sm font-semibold italic",
                style: { color: mantra.deityColor },
                children: mantra.deity
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic",
                style: { color: "oklch(0.52 0.08 50)" },
                children: mantra.name
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mb-3 p-4 text-center",
            style: {
              background: "oklch(0.96 0.05 68 / 0.7)",
              border: "1px solid oklch(0.76 0.10 52 / 0.4)",
              borderRadius: "2px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-semibold leading-relaxed whitespace-pre-line",
                style: {
                  fontSize: "clamp(1.05rem, 3.5vw, 1.35rem)",
                  color: "oklch(0.18 0.10 32)",
                  lineHeight: "1.9",
                  letterSpacing: "0.02em"
                },
                children: mantra.sanskrit
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body italic leading-relaxed whitespace-pre-line",
            style: {
              fontSize: "0.82rem",
              color: "oklch(0.38 0.10 46)",
              lineHeight: "1.7"
            },
            children: mantra.transliteration
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mb-3 px-3 py-2",
            style: {
              background: "oklch(0.92 0.06 58 / 0.5)",
              borderLeft: "3px solid oklch(0.62 0.20 48 / 0.6)",
              borderRadius: "0 2px 2px 0"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-sm italic",
                style: { color: "oklch(0.32 0.06 44)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-semibold not-italic",
                      style: { color: "oklch(0.48 0.14 46)" },
                      children: [
                        "Meaning:",
                        " "
                      ]
                    }
                  ),
                  mantra.meaning
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-xs italic flex-1",
              style: { color: "oklch(0.42 0.10 48)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "not-italic font-semibold",
                    style: { color: "oklch(0.52 0.16 46)" },
                    children: [
                      "✦",
                      " "
                    ]
                  }
                ),
                mantra.benefit
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-xs shrink-0 italic",
              style: { color: "oklch(0.58 0.06 50)" },
              children: mantra.source
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onSpeak,
            "data-ocid": "mala-mantra-listen-btn",
            className: "flex items-center gap-2 transition-smooth focus-visible:outline-2 focus-visible:outline-ring",
            style: {
              padding: "0.4rem 1rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontStyle: "italic",
              color: isSpeaking ? "oklch(0.28 0.08 36)" : "oklch(0.38 0.12 46)",
              background: isSpeaking ? "oklch(0.88 0.12 54)" : "oklch(0.91 0.08 58 / 0.7)",
              border: `1px solid ${isSpeaking ? "oklch(0.62 0.16 48)" : "oklch(0.72 0.10 50 / 0.5)"}`,
              borderRadius: "2px",
              boxShadow: isSpeaking ? "0 0 8px oklch(0.72 0.22 52 / 0.3)" : "none"
            },
            "aria-label": isSpeaking ? "Stop mantra audio" : "Listen to mantra",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSpeaking ? "⏹ Stop" : "🔊 Listen to Mantra" })
          }
        )
      ]
    },
    mantra.id
  );
}
function MalaPage() {
  const [count, setCount] = reactExports.useState(0);
  const [selectedMantraId, setSelectedMantraId] = reactExports.useState(
    MANTRAS_18[0].id
  );
  const [showCelebration, setShowCelebration] = reactExports.useState(false);
  const [elapsedSeconds, setElapsedSeconds] = reactExports.useState(0);
  const [sessionStarted, setSessionStarted] = reactExports.useState(false);
  const [showAllMantras, setShowAllMantras] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const { addSession, history, totalBeads, todaySessions } = useMalaHistory();
  const { addPoints } = usePoints();
  const { recordPractice } = useStreak();
  const { speak, stop, isSpeaking, unlockAudio } = useTTS();
  const selectedMantra = MANTRAS_18.find((m) => m.id === selectedMantraId) ?? MANTRAS_18[0];
  reactExports.useEffect(() => {
    if (sessionStarted && !showCelebration) {
      timerRef.current = setInterval(
        () => setElapsedSeconds((s) => s + 1),
        1e3
      );
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [sessionStarted, showCelebration]);
  const handleIncrement = reactExports.useCallback(() => {
    unlockAudio();
    setCount((prev) => {
      const next = prev + 1;
      if (!sessionStarted) setSessionStarted(true);
      if (next >= TOTAL_BEADS) {
        setShowCelebration(true);
        addSession(TOTAL_BEADS, selectedMantra.name);
        addPoints("listening", 15);
        recordPractice();
        return TOTAL_BEADS;
      }
      return next;
    });
  }, [
    selectedMantra,
    addSession,
    addPoints,
    recordPractice,
    sessionStarted,
    unlockAudio
  ]);
  const handleReset = reactExports.useCallback(() => {
    stop();
    setCount(0);
    setElapsedSeconds(0);
    setSessionStarted(false);
    setShowCelebration(false);
  }, [stop]);
  const handleCompleteSession = reactExports.useCallback(() => {
    if (count > 0 && count < TOTAL_BEADS) {
      addSession(count, selectedMantra.name);
      addPoints("listening", Math.floor(count / TOTAL_BEADS * 10));
      recordPractice();
    }
    handleReset();
  }, [
    count,
    selectedMantra,
    addSession,
    addPoints,
    recordPractice,
    handleReset
  ]);
  const handleCelebrationClose = reactExports.useCallback(() => {
    setShowCelebration(false);
    setCount(0);
    setElapsedSeconds(0);
    setSessionStarted(false);
  }, []);
  const handleMantraSelect = reactExports.useCallback(
    (id) => {
      if (sessionStarted && count > 0) return;
      stop();
      setSelectedMantraId(id);
      setShowAllMantras(false);
    },
    [sessionStarted, count, stop]
  );
  const handleSpeak = reactExports.useCallback(() => {
    if (isSpeaking) {
      stop();
      return;
    }
    unlockAudio();
    setTimeout(() => speak(selectedMantra.ttsText, "en", "male", 0.7), 150);
  }, [isSpeaking, speak, stop, unlockAudio, selectedMantra]);
  reactExports.useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        handleIncrement();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleIncrement]);
  const todayMalas = todaySessions.filter(
    (s) => s.beadCount === TOTAL_BEADS
  ).length;
  const totalMalas = Math.floor(totalBeads / TOTAL_BEADS);
  const visibleMantras = showAllMantras ? MANTRAS_18 : MANTRAS_18.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-2", children: "Sacred Practice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "chapter-header", children: "Digital Japa Mala" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-translation mt-2 mx-auto max-w-md", children: "18 mantras for every season of life. Full Sanskrit always visible. Choose your mantra, chant 108 times, and draw the mind toward the Divine." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ॐ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-6 mt-4 flex-wrap", children: [
            { label: "Malas Lifetime", value: totalMalas },
            { label: "Today's Malas", value: todayMalas },
            sessionStarted ? { label: "Duration", value: formatDuration(elapsedSeconds) } : null
          ].filter(Boolean).map(
            (s) => s && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-2xl font-bold",
                  style: { color: "oklch(0.48 0.18 44)" },
                  children: s.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic",
                  style: { color: "oklch(0.48 0.06 50)" },
                  children: s.label
                }
              )
            ] }, s.label)
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "mb-6",
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-4",
            style: {
              background: "oklch(0.91 0.07 58 / 0.6)",
              border: "1px solid oklch(0.72 0.08 52 / 0.45)",
              borderRadius: "3px",
              boxShadow: "inset 0 1px 0 rgba(255,248,220,0.3), 0 2px 8px rgba(80,55,30,0.08)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-verse-number",
                    style: {
                      borderBottom: "1px solid oklch(0.70 0.10 50 / 0.3)",
                      paddingBottom: "0.4rem"
                    },
                    children: "✦ Choose Your Mantra — 18 Life Situations"
                  }
                ),
                sessionStarted && count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs italic",
                    style: { color: "oklch(0.52 0.08 50)" },
                    children: "— Complete or reset to change"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
                  "data-ocid": "mala-mantra-grid",
                  children: visibleMantras.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MantraCard,
                    {
                      mantra: m,
                      isSelected: selectedMantraId === m.id,
                      onSelect: () => handleMantraSelect(m.id),
                      disabled: sessionStarted && count > 0
                    },
                    m.id
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowAllMantras((v) => !v),
                  "data-ocid": "mala-show-all-mantras-btn",
                  className: "mt-3 w-full transition-smooth",
                  style: {
                    padding: "0.45rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    fontStyle: "italic",
                    color: "oklch(0.38 0.12 46)",
                    background: "oklch(0.93 0.06 60 / 0.5)",
                    border: "1px dashed oklch(0.68 0.10 50 / 0.5)",
                    borderRadius: "2px"
                  },
                  children: showAllMantras ? "▲ Show Less Mantras" : `▼ Show All 18 Mantras (${18 - 6} more)`
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActiveMantraPanel,
      {
        mantra: selectedMantra,
        onSpeak: handleSpeak,
        isSpeaking
      },
      selectedMantra.id
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.15, type: "spring", stiffness: 100 },
        className: "mb-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative p-6 text-center",
            style: {
              background: "radial-gradient(ellipse at 50% 15%, oklch(0.93 0.07 60 / 0.8) 0%, oklch(0.88 0.09 55 / 0.6) 100%)",
              border: "1px solid oklch(0.72 0.08 52 / 0.4)",
              borderRadius: "3px",
              boxShadow: "inset 0 0 60px oklch(0.18 0.04 44 / 0.06), 0 2px 12px rgba(80,55,30,0.10)"
            },
            children: [
              [
                "top-2 left-3",
                "top-2 right-3",
                "bottom-2 left-3",
                "bottom-2 right-3"
              ].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `absolute ${pos} font-display text-xs select-none pointer-events-none`,
                  style: { color: "oklch(0.62 0.14 48 / 0.35)" },
                  "aria-hidden": true,
                  children: "✦"
                },
                pos
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number mb-1", children: selectedMantra.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mb-1",
                  style: { color: "oklch(0.42 0.10 48)" },
                  children: selectedMantra.deity
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mb-4 p-3 mx-auto max-w-sm",
                  style: {
                    background: "oklch(0.96 0.05 68 / 0.8)",
                    border: "1px solid oklch(0.72 0.12 50 / 0.5)",
                    borderRadius: "2px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display font-semibold whitespace-pre-line text-center",
                        style: {
                          fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                          color: "oklch(0.18 0.10 32)",
                          lineHeight: "1.9",
                          letterSpacing: "0.02em"
                        },
                        children: selectedMantra.sanskrit
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body italic text-center mt-1 whitespace-pre-line",
                        style: {
                          fontSize: "0.7rem",
                          color: "oklch(0.48 0.08 46)",
                          lineHeight: "1.6"
                        },
                        children: selectedMantra.transliteration
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs italic mb-4",
                  style: { color: "oklch(0.52 0.08 50)" },
                  children: "— Japa mala of 108 sacred beads —"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleIncrement,
                  disabled: count >= TOTAL_BEADS,
                  className: "block mx-auto w-full transition-smooth focus-visible:outline-2 focus-visible:outline-ring",
                  style: {
                    cursor: count >= TOTAL_BEADS ? "not-allowed" : "pointer",
                    opacity: count >= TOTAL_BEADS ? 0.7 : 1
                  },
                  "data-ocid": "mala-bead-tap",
                  "aria-label": `Count bead — currently ${count} of 108`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MalaDiagram, { count })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "font-body text-xs italic mt-2",
                  style: { color: "oklch(0.52 0.08 50)" },
                  children: [
                    "Tap the mala above, or press",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "kbd",
                      {
                        style: {
                          padding: "0.15rem 0.4rem",
                          borderRadius: "2px",
                          border: "1px solid oklch(0.70 0.08 52)",
                          background: "oklch(0.88 0.06 56)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "oklch(0.32 0.06 46)"
                        },
                        children: "Space"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-center mt-5 flex-wrap", children: [
                count > 0 && count < TOTAL_BEADS && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleCompleteSession,
                    className: "transition-smooth",
                    style: {
                      padding: "0.45rem 1.25rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      fontStyle: "italic",
                      color: "oklch(0.28 0.08 36)",
                      background: "oklch(0.90 0.08 57)",
                      border: "1px solid oklch(0.65 0.12 48)",
                      borderRadius: "2px",
                      boxShadow: "0 1px 4px rgba(80,55,30,0.12)"
                    },
                    "data-ocid": "mala-complete-session-btn",
                    children: "Record Partial Session"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleReset,
                    className: "transition-smooth",
                    style: {
                      padding: "0.45rem 1.1rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      color: "oklch(0.52 0.06 50)",
                      background: "transparent",
                      border: "1px solid oklch(0.72 0.07 52 / 0.5)",
                      borderRadius: "2px"
                    },
                    "aria-label": "Reset mala",
                    "data-ocid": "mala-reset-btn",
                    children: "Reset Mala"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "mb-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5",
            style: {
              background: "oklch(0.90 0.07 58 / 0.5)",
              border: "1px solid oklch(0.72 0.07 52 / 0.4)",
              borderRadius: "2px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridVisualization, { count }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-center gap-4 mt-4 text-xs font-body italic",
                  style: { color: "oklch(0.52 0.06 50)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block w-3 h-3 rounded-full",
                          style: {
                            background: "radial-gradient(circle at 35% 35%, oklch(0.72 0.22 50), oklch(0.48 0.18 40))",
                            border: "1px solid oklch(0.42 0.16 40)"
                          }
                        }
                      ),
                      "Counted"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block w-3 h-3 rounded-full",
                          style: {
                            background: "oklch(0.80 0.05 54)",
                            border: "1px solid oklch(0.70 0.06 52)"
                          }
                        }
                      ),
                      "Remaining"
                    ] })
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-5",
              style: {
                background: "oklch(0.91 0.07 58 / 0.55)",
                border: "1px solid oklch(0.72 0.07 52 / 0.38)",
                borderRadius: "2px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-verse-number", children: "Japa Record" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-xs italic",
                      style: { color: "oklch(0.52 0.10 48)" },
                      children: [
                        totalBeads,
                        " total sacred beads counted"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: history.slice(0, 10).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SessionEntry, { session: s }, s.id)) })
              ]
            }
          )
        ]
      }
    ),
    history.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.3 },
        className: "text-center py-10",
        "data-ocid": "mala-empty-state",
        style: {
          border: "1px dashed oklch(0.68 0.10 50 / 0.45)",
          borderRadius: "2px",
          background: "oklch(0.91 0.07 58 / 0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-4xl mb-3",
              style: { color: "oklch(0.58 0.18 48 / 0.6)" },
              children: "ॐ"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display text-base font-semibold italic",
              style: { color: "oklch(0.28 0.08 36)" },
              children: "Begin Your First Japa"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-body text-sm mt-2 italic",
              style: { color: "oklch(0.52 0.06 50)" },
              children: [
                "Choose a life situation mantra above and tap the mala to begin.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Your sessions will be recorded here."
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showCelebration, onOpenChange: handleCelebrationClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContent,
      {
        className: "max-w-sm text-center",
        style: {
          background: "radial-gradient(ellipse at 50% 0%, oklch(0.93 0.07 60) 0%, oklch(0.88 0.09 55) 100%)",
          border: "2px solid oklch(0.62 0.14 48 / 0.6)",
          borderRadius: "2px",
          boxShadow: "0 8px 40px rgba(80,55,30,0.3), inset 0 1px 0 rgba(255,248,220,0.35)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "space-y-5 py-4",
            initial: { scale: 0.85, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 200, damping: 16 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦ ✦ ✦" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  animate: { rotate: [0, -10, 10, -10, 0] },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "text-5xl leading-none",
                  children: "🙏"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-2xl font-bold italic",
                    style: { color: "oklch(0.28 0.08 36)" },
                    children: "Mala Complete!"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm italic mt-1",
                    style: { color: "oklch(0.52 0.10 46)" },
                    children: "108 sacred beads counted · Hare Krishna 🙏"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-ornate", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "॥" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-left space-y-2 text-sm font-body p-4",
                  style: {
                    background: "oklch(0.93 0.07 60 / 0.65)",
                    border: "1px solid oklch(0.70 0.10 50 / 0.4)",
                    borderRadius: "2px"
                  },
                  children: [
                    { label: "Mantra", val: selectedMantra.name },
                    { label: "Duration", val: formatDuration(elapsedSeconds) },
                    { label: "Sacred Points", val: "+15 ✦" }
                  ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex justify-between items-baseline gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "italic",
                            style: { color: "oklch(0.52 0.06 50)" },
                            children: label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-medium text-right",
                            style: {
                              color: label === "Sacred Points" ? "oklch(0.48 0.18 44)" : "oklch(0.28 0.08 36)"
                            },
                            children: val
                          }
                        )
                      ]
                    },
                    label
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleCelebrationClose,
                  className: "w-full transition-smooth",
                  style: {
                    padding: "0.65rem 1.5rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    fontWeight: "600",
                    color: "oklch(0.92 0.07 58)",
                    background: "linear-gradient(135deg, oklch(0.38 0.12 36) 0%, oklch(0.54 0.20 46) 100%)",
                    border: "1px solid oklch(0.42 0.14 40)",
                    borderRadius: "2px",
                    boxShadow: "0 3px 16px rgba(80,55,30,0.25)"
                  },
                  "data-ocid": "mala-celebration-close-btn",
                  children: "Begin Another Mala ✦"
                }
              )
            ]
          }
        )
      }
    ) })
  ] });
}
export {
  MalaPage
};
