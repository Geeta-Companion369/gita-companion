import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useRef, useState } from "react";

// ─── Blueprint Content Data ──────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "first-time",
    title: "SECTION A — FIRST TIME USER FLOW",
    icon: "🙏",
    items: [
      {
        heading: "Screen 1 — Splash Screen",
        body: 'Full screen sacred background — saffron/gold gradient with soft divine light rays from centre. App logo — Krishna-Arjuna chariot painting, circular frame, parchment background. "SANATAN DHARMA" in gold text large above logo. "KRISHNA AI" bold gold-brown below logo. Tagline: "Ask Krishna. Find Your Path." Sacred Om symbol ॐ glowing softly. Flower petals floating gently across screen. Auto-advances to Screen 2 after 3 seconds.',
      },
      {
        heading: "Screen 2 — Welcome Screen",
        body: 'Beautiful Krishna image — peaceful, divine. "Hare Krishna" greeting in Sanskrit. "Welcome to Krishna AI" main heading. "Your lifelong guide to the Bhagavad Gita and Sanatan Dharma" subtitle. "Begin Your Journey" gold ornate button. Language selector at top right — default English.',
      },
      {
        heading: "Screen 3 — Free Trial / Subscription Screen",
        body: '🙏 Folded hands symbol. "Hare Krishna, [User Name]!" "Your 7-day free journey ends soon. Continue with Krishna for" ₹108/month — large bold saffron/orange. "Less than ₹4 per day — the price of Krishna\'s presence in your life". Box: "The Bhagavad Gita reading remains free forever — Krishna\'s wisdom is for every soul." "CONTINUE WITH KRISHNA → ₹108/MONTH" button. Always free: Bhagavad Gita Reader + Emergency Mode. Subscription: All remaining 19 pathways.',
      },
    ],
  },
  {
    id: "home",
    title: "SECTION B — HOME SCREEN",
    icon: "🏠",
    items: [
      {
        heading: "Home Screen Elements",
        body: 'App logo small circular top left. "Sanatan Dharma" brand name. "KRISHNA AI — ASK KRISHNA. FIND YOUR PATH." tagline. Language selector + Full Audio Mode toggle top right. Emergency red button always visible. Scrolling ticker: sacred verse + Hare Krishna Mahamantra. ॐ large glowing centre. "Jai Shri Krishna" sacred greeting. Today\'s Verse of the Day — Sanskrit + translation. Today\'s Panchang — Tithi, Nakshatra, Yoga, Karana, Sunrise/Sunset. Daily Sanskrit Word. "Krishna, I need you" red floating button always visible. Bottom Navigation Bar always visible — 5 icons: Home | Chat AI | Menu | Mala Jaap | Profile.',
      },
    ],
  },
];

const PATHWAYS = [
  {
    num: 1,
    id: "gita",
    title: "PATHWAY 1 — BHAGAVAD GITA READER",
    icon: "📖",
    color: "oklch(0.84 0.34 54)",
    screens: [
      {
        heading: "Screen 1.1 — Entry Screen",
        body: 'Full screen sacred background — saffron/gold gradient. Animated page-turn effect playing in centre. Title: "श्रीमद्भगवद्गीता" large Devanagari + selected language below. Tagline: "The Song of God — as spoken by Krishna to Arjuna on the battlefield of Kurukshetra." Language selector top right (18 languages). "Begin Reading" gold ornate button. Ornate temple arch border framing the screen.',
      },
      {
        heading: "Screen 1.2 — Chapter Selection",
        body: 'Heading: "18 Adhyaya — Choose Your Chapter." All 18 chapters as sacred cards:\nCh.1 Arjuna Vishada Yoga — 47 verses | Ch.2 Sankhya Yoga — 72v | Ch.3 Karma Yoga — 43v | Ch.4 Jnana Karma Sannyasa Yoga — 42v | Ch.5 Karma Sannyasa Yoga — 29v | Ch.6 Atma Samyama Yoga — 47v | Ch.7 Jnana Vijnana Yoga — 30v | Ch.8 Akshara Brahma Yoga — 28v | Ch.9 Raja Vidya Yoga — 34v | Ch.10 Vibhuti Yoga — 42v | Ch.11 Vishwarupa Darshana Yoga — 55v | Ch.12 Bhakti Yoga — 20v | Ch.13 Kshetra Vibhaga Yoga — 35v | Ch.14 Guna Traya Vibhaga Yoga — 27v | Ch.15 Purushottama Yoga — 20v | Ch.16 Daivasura Vibhaga Yoga — 24v | Ch.17 Shraddha Traya Vibhaga Yoga — 28v | Ch.18 Moksha Sannyasa Yoga — 78v.\nTotal: 700 Verses — every single one included.',
      },
      {
        heading: "Screen 1.3 — Verse Reading Screen",
        body: 'Chapter name + number at top. Progress: "Verse X of Y". Every verse displays: Sanskrit original (Devanagari), Transliteration (Roman script), Word-by-word meaning, Full translation in selected language, Purport/Commentary, Source reference e.g. BG 2.47. Swipe/tap arrows — animated page-turn. Tool icons: Audio / Bookmark / Share / Font size / Highlight.',
      },
      {
        heading: "Screen 1.4 — Audio Player",
        body: "Verse displayed while audio plays. Sanskrit recitation + translation in selected language. Controls: Play / Pause / Previous / Next. Speed: 0.5x to 1.5x. Auto-advance through full chapter. Background audio — plays with screen locked. Progress bar showing position in chapter.",
      },
      {
        heading: "Screens 1.5–1.7 — Bookmarks / Search / Settings",
        body: "Bookmarks: All saved verses organised by chapter. Tap to return to verse. Delete/Share options. Search: Search any word, theme, or verse number across all 18 chapters. Results tap to go to verse. Settings: Language / Font size / Theme (parchment/saffron/warm dark) / Audio / Offline download toggle.",
      },
      {
        heading: "Key Features",
        body: "✦ 100% complete — all 18 chapters, 700 verses, every word, every punctuation. ✦ Offline available. ✦ Screen reader support for blind users. ✦ Remembers last verse read — never loses your place. ✦ Interlinked with Krishna AI Chatbot.",
      },
    ],
  },
  {
    num: 2,
    id: "chatbot",
    title: "PATHWAY 2 — KRISHNA AI CHATBOT",
    icon: "🕉️",
    color: "oklch(0.66 0.22 268)",
    screens: [
      {
        heading: "Screen 2.1 — Entry Screen",
        body: 'Deep lapis blue background with golden divine light rays. Krishna image — peaceful, holding flute. "Krishna AI" in gold Sanskrit-style font. "Ask Krishna. Find Your Path." subtitle. "Every answer from the Bhagavad Gita, 4 Vedas, and 18 Puranas" tagline. "Begin Conversation" gold ornate button. 18 languages. Flower petals floating gently.',
      },
      {
        heading: "Screen 2.2 — Main Chat Screen",
        body: 'User bubbles: lotus pink/saffron. Krishna bubbles: gold/cream with Krishna icon. Every answer shows source scripture e.g. "Source: Bhagavad Gita, Chapter 2, Verse 47." Input: "Ask Krishna anything..." Voice input button. Life situations covered: Career & Duty, Relationships, Grief & Loss, Fear & Anxiety, Anger, Purpose, Death, Dharma, Karma, Liberation.',
      },
      {
        heading: "Screen 2.3 — Arjuna's Dilemma Mode",
        body: "User describes personal dilemma or conflict. Krishna AI responds with compassion — acknowledges dilemma, gives relevant Gita verse(s), explains deeper meaning, practical guidance for today's world, source always shown. Background: Kurukshetra battlefield scene — sacred, divine, not frightening.",
      },
      {
        heading: "Screen 2.4 — Multi-Emotion Guidance",
        body: '"How are you feeling today?" Emotions: Confused/Lost, Grieving/Sad, Angry/Frustrated, Fearful/Anxious, Joyful/Grateful, Seeking Purpose, In Conflict, Peaceful/Devoted. Response includes: verse in Sanskrit, translation, how it applies to current feeling, simple practice or mantra for today, source scripture.',
      },
      {
        heading: "Screens 2.5–2.7 — History / Saved / Scripture Library",
        body: "Conversation History: All past conversations by date. Export as PDF with signature. Saved Answers: Bookmarked by topic. Shareable. Scripture Source Library: Shelf 1 — Bhagavad Gita (18 chapters). Shelf 2 — 4 Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda). Shelf 3 — 18 Puranas: Brahma, Padma, Vishnu, Shiva, Bhagavata, Narada, Markandeya, Agni, Bhavishya, Brahmavaivarta, Linga, Varaha, Skanda, Vamana, Kurma, Matsya, Garuda, Brahmanda.",
      },
      {
        heading: "Accuracy Rules — Non-Negotiable",
        body: "✦ Only from Gita, 4 Vedas, 18 Puranas — no other sources ever. ✦ Source always shown — never a bare answer without scripture reference. ✦ No fabricated answers — if not in scripture, Krishna AI says so honestly. ✦ No personal opinions — only what the scriptures say. ✦ No fear-based responses — only guidance, wisdom, compassion.",
      },
    ],
  },
  {
    num: 3,
    id: "mala",
    title: "PATHWAY 3 — DIGITAL MALA",
    icon: "📿",
    color: "oklch(0.76 0.28 340)",
    screens: [
      {
        heading: "Screens 3.1–3.3 — Entry / Counter / Completion",
        body: 'Entry: Select mantra (Hare Krishna Mahamantra / Om Namah Shivaya / Gayatri / Om Namo Narayanaya / etc.) Select count: 108 / 54 / 27. "Begin Jaap" button. Counter: Digital mala — all 108 beads visible. Each bead highlights on tap. Soft sacred click sound. Current/108 count. Vibration toggle. Round counter. Pause/Reset. Completion: "108 Jaap completed — Jai Shri Krishna". Today + lifetime count. Share. Badge unlocked.',
      },
      {
        heading: "Key Features",
        body: "✦ Works fully offline. ✦ Tracks daily + lifetime jaap count. ✦ Interlinked with Naam Jaap and Achievements & Rewards.",
      },
    ],
  },
  {
    num: 4,
    id: "naam",
    title: "PATHWAY 4 — NAAM JAAP",
    icon: "🙏",
    color: "oklch(0.80 0.32 46)",
    screens: [
      {
        heading: "Screens 4.1–4.3 — Entry / Jaap / 108 Names List",
        body: 'Entry: Select deity — Krishna / Shiva / Hanuman / Durga / Ganesha / Lakshmi / Saraswati. 108 names of selected deity. "Begin Naam Jaap." Naam Jaap Screen: Current naam large in Sanskrit + translation. Audio plays naam aloud. Auto-advances. Progress: Naam 1 of 108. Pause/Repeat/Speed. 108 Names List: All 108 names with Sanskrit, transliteration, meaning. Tap any name to hear pronunciation.',
      },
      {
        heading: "Key Features",
        body: "✦ All 108 names for 7 deities. ✦ Audio for every naam. ✦ Works offline.",
      },
    ],
  },
  {
    num: 5,
    id: "mantra",
    title: "PATHWAY 5 — SACRED MANTRA PLAYER",
    icon: "🎵",
    color: "oklch(0.74 0.28 32)",
    screens: [
      {
        heading: "Screens 5.1–5.3 — Entry / Player / Details",
        body: "Entry: 18 sacred mantras as cards — each shows mantra name, deity, benefit, duration. Player: Sanskrit + transliteration. Meaning and significance. Correct sacred speed (not rushed). 108x counter. Play/Pause/Repeat/Speed. Details: Full mantra text. Word-by-word meaning. When to chant, how many times, which direction to face. Benefits as per scripture. Source scripture always shown.",
      },
      {
        heading: "Key Features",
        body: "✦ 18 sacred mantras. ✦ Correct pronunciation speed — not rushed. ✦ Scripture source for every mantra. ✦ Works offline.",
      },
    ],
  },
  {
    num: 6,
    id: "rituals",
    title: "PATHWAY 6 — DAILY DHARMIC RITUALS",
    icon: "🪔",
    color: "oklch(0.80 0.32 50)",
    screens: [
      {
        heading: "Screen 6.1–6.2 — Day Selection / Day Detail",
        body: "Day Selection: Today highlighted automatically. 7 day cards — Sunday to Saturday. Each shows: deity, colour, vrat, key ritual. Day Detail flow: 1. Sankalp (sacred intention setting) 2. Deity image + name 3. Vrat rules 4. Step-by-step ritual vidhi 5. Mantras for the day 6. Daan guidance 7. Hora Chakra 8. Health benefits 9. Family rules 10. Puranic story.",
      },
      {
        heading:
          "Screens 6.3–6.6 — Varna / Sankalp Tracker / Ekadashi / Annual Fasts",
        body: "Varna Selection: Brahmin / Kshatriya / Vaishya / Shudra — ritual flow changes per varna. Sankalp Tracker: Daily completion, streak counter, badges. Ekadashi Section: All 24 Ekadashis listed with full Puranic story, fast rules, vidhi, Do's and Don'ts, mantras, paaran time, prasad, benefits. Annual Fasts: All major Hindu fasts with story, vidhi, rules, benefits, Do's and Don'ts.",
      },
    ],
  },
  {
    num: 7,
    id: "temple",
    title: "PATHWAY 7 — VIRTUAL TEMPLE",
    icon: "🏛️",
    color: "oklch(0.82 0.36 54)",
    screens: [
      {
        heading: "Screens 7.1–7.2 — Entry / Main Temple",
        body: 'Entry: Grand temple entrance — HD, sacred, inviting. "Virtual Temple — Enter with Devotion." "Enter Temple" gold button. Main Temple: Today\'s deity (changes daily per schedule). HD deity image — real photo or 3D idol, no cartoons. Gesture offerings all working: Flowers / Agarbatti / Prasad / Aarti (correct clockwise motion) / Bell. Unique aarti and aarti song per deity. Full screen immersive experience.',
      },
      {
        heading: "Screen 7.3 — Live Darshan Schedule",
        body: "Sunday: Surya Narayan Temple, Arasavalli (Surya) | Monday: Mahakaleshwar Temple, Ujjain (Shiva) | Tuesday: Kastbhanjan Hanuman, Sarangpur (Hanuman) | Wednesday: Siddhivinayak Temple, Mumbai (Ganesha) | Thursday: Dwarkadhish Mandir, Dwarka (Krishna) | Friday: Mahalakshmi Temple, Mumbai (Lakshmi) | Saturday: Shani Shingnapur, Maharashtra (Shani) | All days: ISKCON Vrindavan (Krishna). Auto-refreshes every 5 minutes. Pure live darshan — no animations. Plays inside app.",
      },
      {
        heading: "Screen 7.4 — 7 Day Deity Guide",
        body: "All 7 days and their deities listed. Tap any day to see full puja vidhi, mantra, and Puranic story for that deity.",
      },
    ],
  },
  {
    num: 8,
    id: "gallery",
    title: "PATHWAY 8 — KRISHNA GALLERY",
    icon: "🖼️",
    color: "oklch(0.72 0.24 310)",
    screens: [
      {
        heading: "Section 1 — Images",
        body: "100 individual Krishna photos extracted from user-supplied sheets. Each photo displayed individually — full and clear. Tap any image to open full screen view. No lotus placeholders. No upload button. No Darshan section.",
      },
      {
        heading: "Section 2 — Story Cards",
        body: "18 story cards made by the build team. Each card has a Gita story with sacred artwork. Tap any card to read the full story.",
      },
    ],
  },
  {
    num: 9,
    id: "video",
    title: "PATHWAY 9 — VIDEO SECTION",
    icon: "🎬",
    color: "oklch(0.74 0.28 32)",
    screens: [
      {
        heading: "Screen 9.1 — Featured Film",
        body: 'One section only: Featured Film. "Kurukshetra — The Sacred War" — embedded YouTube video, plays inside the app. Smooth playback, clear audio. No Season 1, no Season 2, no extra sections. No external redirects — everything inside the app.',
      },
    ],
  },
  {
    num: 10,
    id: "kurukshetra",
    title: "PATHWAY 10 — MY KURUKSHETRA",
    icon: "⚔️",
    color: "oklch(0.72 0.24 50)",
    screens: [
      {
        heading:
          "Screens 10.1–10.3 — Entry / 21-Day Challenge / Personal Journal",
        body: 'Entry: "My Kurukshetra — Every soul has a battlefield." User\'s personal story — from loss to hope through the Gita. 21-Day Dharma Challenge: Days 1–21 as journey cards. Each day: practice + relevant Gita verse + reflection question + badge on completion. Streak tracker. Share progress. Personal Journal: User writes own Kurukshetra story. Private, saved permanently. Reflection prompts to guide writing.',
      },
    ],
  },
  {
    num: 11,
    id: "emergency",
    title: "PATHWAY 11 — EMERGENCY MODE",
    icon: "🆘",
    color: "oklch(0.62 0.28 18)",
    screens: [
      {
        heading: "Screens 11.1–11.3 — Entry / Helplines / Comfort Mode",
        body: 'Entry: "Krishna, I need you" large prominent button. Always free, always offline. User\'s personal story of hope through the Gita. Immediate comfort verse appears on tap. Helplines: 70+ India helplines by category (Suicide Prevention / Mental Health / Women\'s Help / Child Help / Domestic Violence / Senior Citizens / Disaster Relief). 19+ International helplines. Tap to call directly. Comfort Mode: Gentle compassionate verses for crisis. "You are not alone — Krishna walks with you" always displayed. Works offline with pre-loaded Gita verses.',
      },
    ],
  },
  {
    num: 12,
    id: "garbha",
    title: "PATHWAY 12 — GARBHA SANSKAR",
    icon: "🌸",
    color: "oklch(0.78 0.26 340)",
    screens: [
      {
        heading: "Screens 12.1–12.3 — Entry / Month Guide / Namakarana",
        body: "Entry: \"Garbha Sanskar — Sacred Wisdom for a Divine Pregnancy.\" For expecting mothers. Soft lotus pink and gold design. Month-by-Month Guide: 9 months (Month 1–9). Each: spiritual development of baby, mantras to recite, stories to read/listen to, Ayurvedic foods, Do's and Don'ts, prayers and shlokas. Namakarana: Naming ceremony guidance. Vedic rules for choosing baby's name. Muhurta (auspicious time). Full ceremony vidhi.",
      },
    ],
  },
  {
    num: 13,
    id: "youth",
    title: "PATHWAY 13 — YOUTH DHARMA HUB",
    icon: "🌟",
    color: "oklch(0.82 0.34 50)",
    screens: [
      {
        heading: "Screens 13.1–13.6 — Entry through Challenges",
        body: 'Entry: "Youth Dharma Hub — Dharma for the Modern Age." Ages 13–30. Modern language. What Would Krishna Say About: Career/Relationships/Social media/Peer pressure/Identity/Exam stress/Family conflicts — with Gita wisdom. Dharma Explained: Simple modern language wisdom cards, shareable. Short Stories: Sacred moral stories in engaging modern style with audio narration. Youth Quiz: 11/21/51 pts per correct answer. Redeemable in Rewards. Youth Challenges: Dharmic challenges — complete for badge and share.',
      },
    ],
  },
  {
    num: 14,
    id: "sanskaar",
    title: "PATHWAY 14 — 16 SANSKAAR MODULE",
    icon: "🌺",
    color: "oklch(0.70 0.22 160)",
    screens: [
      {
        heading: "All 16 Sacred Rites of Life",
        body: "1. Garbhadhan — Conception | 2. Punsavana — Foetal rite (3rd month) | 3. Simantonnayana — Hair parting (7th month) | 4. Jatakarma — Birth rite | 5. Namakarana — Naming ceremony (11th day) | 6. Nishkramana — First outing (4th month) | 7. Annaprashana — First solid food (6th month) | 8. Chudakarana — First haircut | 9. Karnavedha — Ear piercing | 10. Vidyarambha — Beginning of education | 11. Upanayana — Sacred thread ceremony | 12. Vedarambha — Vedic study begins | 13. Keshanta — First shave | 14. Samavartana — End of studentship | 15. Vivaha — Marriage | 16. Antyesti — Last rites.\nEach Sanskaar has: meaning, complete vidhi, mantras, story, Vedic reference, source scripture.",
      },
    ],
  },
  {
    num: 15,
    id: "satsang",
    title: "PATHWAY 15 — SATSANG CIRCLES",
    icon: "🫂",
    color: "oklch(0.68 0.24 152)",
    screens: [
      {
        heading: "Screens 15.1–15.4 — Entry / Circles / Inside / Mann Ki Baat",
        body: 'Entry: "Satsang Circles — The Web of Dharma." "Join a circle. Grow together in Dharma." Available Circles: Gita Study / Bhakti & Devotion / Dharma in Daily Life / Youth Dharma / Mothers & Garbha Sanskar / Grief & Healing / Karma & Purpose. Inside a Circle: Internal chat after joining. Devotee Wall — members post experiences. Internal Q&A — answered by community + Krishna AI. Mann Ki Baat: Share thoughts, reflections, experiences. 18 topic affiliations. Fully interlinked.',
      },
    ],
  },
  {
    num: 16,
    id: "donation",
    title: "PATHWAY 16 — DONATION MODULE",
    icon: "💛",
    color: "oklch(0.76 0.28 340)",
    screens: [
      {
        heading: "Screens 16.1–16.2 — Entry / Donate",
        body: 'Entry: "Dana — The Dharma of Giving." Verse on the importance of dana. "Every rupee serves Dharma." Donate Screen: QR code displayed (admin-uploaded). Bank transfer details: Account Name / Account Number / IFSC Code / Bank Name / UPI ID. Payment gateway button. Receipt option after donation.',
      },
    ],
  },
  {
    num: 17,
    id: "achievements",
    title: "PATHWAY 17 — ACHIEVEMENTS & REWARDS",
    icon: "🏆",
    color: "oklch(0.84 0.38 54)",
    screens: [
      {
        heading: "Screens 17.1–17.4 — Overview / Points / Reward Store / Quiz",
        body: 'Overview: User\'s current points, badges, streak. Achievement ladder displayed. Points & Badges: Earned from reading, jaap, quiz, daily rituals, emergency usage, challenge completion. Reward Store: Redeem for Vedas PDF / Puranas PDF / sacred wallpapers / exclusive content / special darshan access — all with "Sanatan Dharma - Krishna AI" signature. Quiz: Easy 11 pts / Medium 21 pts / Hard 51 pts per correct answer. Streak bonus for consecutive correct answers.',
      },
    ],
  },
  {
    num: 18,
    id: "antim",
    title: "PATHWAY 18 — ANTIM YAATRA",
    icon: "🕯️",
    color: "oklch(0.68 0.20 58)",
    screens: [
      {
        heading: "Screens 18.1–18.6 — Entry through Shraddha & Tarpan",
        body: 'Entry: "Antim Yaatra — The Sacred Final Journey." "For those who walk this path, and for those who guide them." Soft compassionate design. Garuda Purana: Full teachings on death, afterlife, liberation vs rebirth. 13-Day Ritual Guide: Day 1 — immediate duties (body/family/priest). Days 2–12 — daily mantras, daan, prayers, pind daan guidance. Day 13 — Tehravi final ceremony. Family Duties: Who does what, in what order. Male/female duties. What to wear/avoid. Pind Daan: Full procedure. Sacred locations: Gaya / Prayagraj / Haridwar / Varanasi. Shraddha & Tarpan: Annual remembrance, water offering procedure, Pitru Paksha guidance. All from Garuda Purana + Dharma Shastras.',
      },
    ],
  },
  {
    num: 19,
    id: "kundali",
    title: "PATHWAY 19 — KUNDALI LITE + GRAHA REMEDIES",
    icon: "🪐",
    color: "oklch(0.76 0.26 48)",
    screens: [
      {
        heading: "Screens 19.1–19.2 — My Kundali / Aaj Ka Graha",
        body: 'My Kundali: Input Name / DOB / Time of Birth / Place of Birth — entered once, saved permanently. Output: Lagna Chart (North Indian box format) + Moon Chart. Full planetary degrees (Swiss Ephemeris accuracy). Mahadasha / Antardasha / Pratyantar Dasha timeline. Lagnesh, Moon Sign, current period. Swastik design. "Download PDF" with "Sanatan Dharma - Krishna AI" signature. Aaj Ka Graha: Today\'s Chandra + Gochar vs user\'s Moon/Lagna. Panchang displayed. Colour code: Green (Shubh) / Yellow (Neutral) / Red (Savdhaan). One remedy for the day. "Set Remedy Reminder" button.',
      },
      {
        heading:
          "Screens 19.3–19.6 — Graha Shanti / Gemstone / Transit / Weekly",
        body: 'Graha Shanti: 9 tabs — Surya / Chandra / Mangal / Budh / Guru / Shukra / Shani / Rahu / Ketu. Each: role, strong gives, weak causes, remedies (daan/mantra/seva), avoid, gemstone warning. "Play Mantra 108x" button. Gemstone Check: Upload palm photo. AI result with reason. Warning: "Consult qualified Daivagna before wearing." "Book Jyotishi Call" button. Transit Calendar: 12-month Vakri/Gochar/Eclipse view. Push alert 3 days before major transit. Safety Rules: No fear language. No hard predictions. Medical disclaimer. Footer: "Jyotish is eye of Vedas. Karma + Dharma are above all grahas."',
      },
    ],
  },
  {
    num: 20,
    id: "moksha",
    title: "PATHWAY 20 — ROADMAP TO MOKSHA",
    icon: "🪷",
    color: "oklch(0.74 0.26 140)",
    screens: [
      {
        heading: "Screens 20.1–20.6 — Entry through Self-Assessment",
        body: 'Entry: "Roadmap to Moksha — The Ultimate Freedom." Based on Ashtavakra Gita teachings. "Liberation is not after death — it is possible right now." What is Moksha: Simply explained from Ashtavakra Gita + Bhagavad Gita. 4 Paths to Liberation: Jnana Yoga (knowledge) / Bhakti Yoga (devotion) / Karma Yoga (action) / Raja Yoga (meditation) — each with Gita verses. Daily Practices: For each of the 4 paths — simple, doable, practical. Interlinked with Mala/Naam Jaap/Mantras. Ashtavakra Gita Teachings: Sanskrit verse + translation + commentary — one per day. Where Am I on the Path: Self-assessment tool. Output: Stage + guidance for next stage.',
      },
    ],
  },
  {
    num: 21,
    id: "purpose",
    title: "PATHWAY 21 — LIFE PURPOSE FINDER",
    icon: "✨",
    color: "oklch(0.82 0.30 68)",
    screens: [
      {
        heading:
          "Screens 21.1–21.4 — Entry / Questions / Mapping / Dharma Statement",
        body: 'Entry: "Life Purpose Finder — Your Dharma Awaits." "Every soul has a purpose. Krishna placed it within you." Guided Questions: What gives you joy / What you are naturally good at / What the world needs from you / What your life stage demands — based on Svadharma framework. Dharma Mapping: Krishna AI maps answers to Gita teachings. Considers Varna, nature, skills, life stage, current struggles. Output: Dharmic purpose statement + suggested practices + most relevant Gita verse + source. My Dharma Statement: Saved permanently to profile. Shareable as sacred card with "Sanatan Dharma - Krishna AI" branding.',
      },
    ],
  },
];

const CLOSING_SECTIONS = [
  {
    id: "profile",
    title: "SECTION D — PROFILE TAB",
    icon: "👤",
    body: 'Name, email, phone (view only). Subscription status: Free Trial / Active / Expired. Trial days remaining. Language preference. Total streak (days in a row). Total points earned. Badges earned — displayed visually. "Go to Kundali Lite" link. Arjun\'s Book Trophy Shelf — Sanatana Dharma 1916 book displayed as a sacred gift from Arjun, with special shelf and soft animation.',
  },
  {
    id: "about",
    title: "SECTION E — ABOUT SECTION",
    icon: "🕉️",
    body: '"Books are the bones of Dharma, mantras and verses are the nerves of Dharma, images are the imagination of Dharma, and videos are the visuals of Dharma — and the soul is the one who experiences it all."\n\nMission statement. User\'s personal journey — from loss to hope through the Gita.\n\nDigital Dharma Movement vision:\n✦ Krishna AI (Bhagavad Gita) — live now\n✦ Future: Ramayana AI / Mahabharata AI / Vedas AI / Puranas AI / Bible AI / Quran AI / Guru Granth Sahib AI\n\n"Sanatan Dharma — owned and built with devotion."',
  },
  {
    id: "design",
    title: "SECTION F — DESIGN STANDARDS",
    icon: "🎨",
    body: 'Sacred Colour Palette Only: Gold / Saffron / Lotus Pink / Lapis Blue / Cream / Parchment — NO black, NO grey, NO rainbow colours.\n\nVisual Elements: Ornate sacred temple-style borders on every screen. Temple arch framing. Flower petal effects (no glitter). Soft divine light rays from centre or top.\n\nTypography: Sanskrit-style ornate font for all headings. Clean highly readable font for all body text. Never small/thin/hard-to-read fonts.\n\nImages: Real devotional artwork only — no cartoons, no diagrams, no emojis. HD quality — no blurry/pixelated images.\n\nStandard: "Love at first sight" — every screen must be beautiful the moment it opens.\n\nNavigation: Bottom bar always visible (5 icons). 18 languages — Sanskrit as base. Audio toggle for blind users. Full screen reader support. Voice input and output on all key features.\n\nDownloads: All carry "Sanatan Dharma - Krishna AI" signature embossed at bottom right.',
  },
];

// ─── PDF Generation ──────────────────────────────────────────────────────────
async function generateBlueprintPDF() {
  const { jsPDF } = await import("jspdf");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const W = 210;
  const H = 297;
  const ML = 18;
  const MR = 18;
  const MT = 20;
  const textW = W - ML - MR;
  let pageNum = 1;

  // Colors
  const GOLD = [198, 153, 43] as [number, number, number];
  const SAFFRON = [217, 119, 6] as [number, number, number];
  const DARK_GOLD = [146, 64, 14] as [number, number, number];
  const CREAM = [255, 248, 231] as [number, number, number];
  const PARCHMENT = [245, 222, 179] as [number, number, number];
  const INK = [34, 20, 10] as [number, number, number];
  const LAPIS = [63, 81, 181] as [number, number, number];

  function addPageFooter() {
    pdf.setFillColor(...PARCHMENT);
    pdf.rect(0, H - 12, W, 12, "F");
    pdf.setDrawColor(...GOLD);
    pdf.setLineWidth(0.4);
    pdf.line(ML, H - 12, W - MR, H - 12);
    pdf.setFontSize(7.5);
    pdf.setTextColor(...DARK_GOLD);
    pdf.setFont("helvetica", "italic");
    pdf.text("Sanatan Dharma - Krishna AI", W - MR, H - 4, { align: "right" });
    pdf.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    pdf.setFont("helvetica", "normal");
    pdf.text(`— ${pageNum} —`, W / 2, H - 4, { align: "center" });
    pdf.setTextColor(...INK);
  }

  function newPage() {
    addPageFooter();
    pdf.addPage();
    pageNum++;
    // Parchment background
    pdf.setFillColor(...CREAM);
    pdf.rect(0, 0, W, H, "F");
    // Ornate top border line
    pdf.setDrawColor(...GOLD);
    pdf.setLineWidth(0.6);
    pdf.line(ML, MT - 5, W - MR, MT - 5);
  }

  function divider(y: number) {
    pdf.setDrawColor(...GOLD);
    pdf.setLineWidth(0.3);
    pdf.line(ML, y, W - MR, y);
    pdf.setFontSize(9);
    pdf.setTextColor(...SAFFRON);
    pdf.setFont("helvetica", "normal");
    pdf.text("✦ ——— ✦", W / 2, y + 4, { align: "center" });
    return y + 8;
  }

  // ── COVER PAGE ──────────────────────────────────────────────────────────────
  // Gradient-like background
  pdf.setFillColor(...CREAM);
  pdf.rect(0, 0, W, H, "F");
  // Top gold bar
  pdf.setFillColor(...GOLD);
  pdf.rect(0, 0, W, 8, "F");
  // Bottom gold bar
  pdf.setFillColor(...GOLD);
  pdf.rect(0, H - 8, W, 8, "F");

  // Inner ornate border
  pdf.setDrawColor(...GOLD);
  pdf.setLineWidth(1.2);
  pdf.rect(10, 10, W - 20, H - 20);
  pdf.setDrawColor(...PARCHMENT);
  pdf.setLineWidth(0.4);
  pdf.rect(12, 12, W - 24, H - 24);

  let cy = 55;

  // OM symbol
  pdf.setFontSize(52);
  pdf.setTextColor(...GOLD);
  pdf.setFont("helvetica", "bold");
  pdf.text("\u0950", W / 2, cy, { align: "center" });
  cy += 18;

  // Title
  pdf.setFontSize(20);
  pdf.setTextColor(...INK);
  pdf.setFont("helvetica", "bold");
  pdf.text("SANATAN DHARMA: KRISHNA AI", W / 2, cy, { align: "center" });
  cy += 10;

  // Subtitle
  pdf.setFontSize(14);
  pdf.setTextColor(...SAFFRON);
  pdf.setFont("helvetica", "italic");
  pdf.text("Complete App Blueprint", W / 2, cy, { align: "center" });
  cy += 8;

  // Line
  pdf.setFontSize(10);
  pdf.setTextColor(...DARK_GOLD);
  pdf.setFont("helvetica", "normal");
  pdf.text("All 21 Sacred Pathways — Full Screen-to-Text Format", W / 2, cy, {
    align: "center",
  });
  cy += 14;

  // Divider
  pdf.setDrawColor(...GOLD);
  pdf.setLineWidth(0.5);
  pdf.line(ML + 20, cy, W - MR - 20, cy);
  cy += 8;

  // Date
  pdf.setFontSize(11);
  pdf.setTextColor(...DARK_GOLD);
  pdf.setFont("helvetica", "italic");
  pdf.text("May 2026", W / 2, cy, { align: "center" });
  cy += 14;

  // Signature divider
  pdf.setFontSize(10);
  pdf.setTextColor(...SAFFRON);
  pdf.setFont("helvetica", "bold");
  pdf.text(
    "\u2726 \u2014\u2014\u2014 KRISHNA AI \u2014\u2014\u2014 \u2726",
    W / 2,
    cy,
    {
      align: "center",
    },
  );
  cy += 16;

  // Table of contents summary
  pdf.setFontSize(9);
  pdf.setTextColor(...INK);
  pdf.setFont("helvetica", "normal");
  const tocLines = [
    "Section A — First Time User Flow",
    "Section B — Home Screen",
    "Pathways 1–21 — All Sacred Features (Full Detail)",
    "Section D — Profile Tab",
    "Section E — About Section",
    "Section F — Design Standards",
  ];
  for (const line of tocLines) {
    pdf.text(`\u2022 ${line}`, W / 2, cy, { align: "center" });
    cy += 6;
  }

  cy += 10;
  // Bottom signature
  pdf.setFontSize(8);
  pdf.setTextColor(...DARK_GOLD);
  pdf.setFont("helvetica", "italic");
  pdf.text("Sanatan Dharma - Krishna AI", W - MR - 10, H - 20, {
    align: "right",
  });

  // ── CONTENT PAGES ──────────────────────────────────────────────────────────
  newPage();
  let y = MT;

  function checkPageBreak(needed: number) {
    if (y + needed > H - 18) {
      newPage();
      y = MT;
    }
  }

  function writeSectionHeader(title: string, icon: string) {
    checkPageBreak(20);
    // Section background strip
    pdf.setFillColor(...PARCHMENT);
    pdf.rect(ML - 2, y - 5, textW + 4, 12, "F");
    pdf.setDrawColor(...GOLD);
    pdf.setLineWidth(0.5);
    pdf.rect(ML - 2, y - 5, textW + 4, 12);
    pdf.setFontSize(12);
    pdf.setTextColor(...DARK_GOLD);
    pdf.setFont("helvetica", "bold");
    pdf.text(`${icon}  ${title}`, ML + 2, y + 3);
    y += 14;
  }

  function writeHeading(
    text: string,
    color: [number, number, number] = SAFFRON,
  ) {
    checkPageBreak(12);
    pdf.setFontSize(10);
    pdf.setTextColor(...color);
    pdf.setFont("helvetica", "bold");
    pdf.text(text, ML, y);
    y += 7;
  }

  function writeBody(text: string) {
    const lines = pdf.splitTextToSize(text, textW);
    const needed = lines.length * 5 + 3;
    checkPageBreak(needed);
    pdf.setFontSize(8.5);
    pdf.setTextColor(...INK);
    pdf.setFont("helvetica", "normal");
    pdf.text(lines, ML, y);
    y += lines.length * 5 + 4;
  }

  function writePathwayHeader(
    num: number,
    title: string,
    icon: string,
    _color: string,
  ) {
    checkPageBreak(22);
    // Pathway header background
    pdf.setFillColor(...GOLD);
    pdf.rect(ML - 2, y - 6, textW + 4, 14, "F");
    pdf.setFontSize(11);
    pdf.setTextColor(...CREAM);
    pdf.setFont("helvetica", "bold");
    pdf.text(`${icon}  ${title}`, ML + 2, y + 3);
    // Number badge
    pdf.setFillColor(...DARK_GOLD);
    pdf.circle(W - MR - 8, y, 5, "F");
    pdf.setFontSize(8);
    pdf.setTextColor(...CREAM);
    pdf.text(String(num), W - MR - 8, y + 1.5, { align: "center" });
    y += 16;
  }

  // Sections A and B
  for (const section of SECTIONS) {
    writeSectionHeader(section.title, section.icon);
    for (const item of section.items) {
      writeHeading(item.heading);
      writeBody(item.body);
      y += 2;
    }
    y = divider(y);
    y += 4;
  }

  // All 21 Pathways
  for (const pathway of PATHWAYS) {
    writePathwayHeader(pathway.num, pathway.title, pathway.icon, pathway.color);
    for (const screen of pathway.screens) {
      writeHeading(screen.heading, LAPIS);
      writeBody(screen.body);
      y += 2;
    }
    y = divider(y);
    y += 4;
  }

  // Closing sections
  for (const section of CLOSING_SECTIONS) {
    writeSectionHeader(section.title, section.icon);
    writeBody(section.body);
    y += 4;
    y = divider(y);
    y += 4;
  }

  // Final page footer
  addPageFooter();

  pdf.save("Krishna-AI-App-Blueprint.pdf");
}

// ─── Blueprint Section Card ──────────────────────────────────────────────────
function SectionCard({
  title,
  icon,
  children,
  colorAccent = "oklch(0.82 0.34 54)",
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  colorAccent?: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden mb-5"
      style={{
        border: `1.5px solid ${colorAccent}55`,
        boxShadow: `0 4px 20px ${colorAccent}22`,
        background:
          "linear-gradient(160deg, oklch(0.97 0.06 70 / 0.98) 0%, oklch(0.95 0.08 64 / 0.98) 100%)",
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.94 0.12 56 / 0.97) 0%, oklch(0.91 0.16 50 / 0.97) 100%)",
          borderBottom: `1.5px solid ${colorAccent}40`,
        }}
      >
        <span style={{ fontSize: "1.2rem" }}>{icon}</span>
        <h2
          className="font-display font-bold italic"
          style={{
            fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
            color: "oklch(0.18 0.10 36)",
            textShadow: "0 1px 4px oklch(0.82 0.34 54 / 0.25)",
          }}
        >
          {title}
        </h2>
      </div>
      {/* Body */}
      <div className="px-4 py-3 space-y-3">{children}</div>
    </div>
  );
}

// ─── Screen Item ─────────────────────────────────────────────────────────────
function ScreenItem({ heading, body }: { heading: string; body: string }) {
  return (
    <div
      className="rounded-lg p-3"
      style={{
        background: "oklch(0.96 0.05 70 / 0.80)",
        border: "1px solid oklch(0.82 0.20 56 / 0.35)",
      }}
    >
      <p
        className="font-display font-bold italic mb-1.5"
        style={{ fontSize: "0.8rem", color: "oklch(0.45 0.22 46)" }}
      >
        {heading}
      </p>
      <p
        className="font-body leading-relaxed whitespace-pre-line"
        style={{ fontSize: "0.75rem", color: "oklch(0.22 0.08 36)" }}
      >
        {body}
      </p>
    </div>
  );
}

// ─── Pathway Card ─────────────────────────────────────────────────────────────
function PathwayCard({ pathway }: { pathway: (typeof PATHWAYS)[number] }) {
  return (
    <div
      className="rounded-xl overflow-hidden mb-5"
      style={{
        border: `1.5px solid ${pathway.color}55`,
        boxShadow: `0 4px 20px ${pathway.color}20`,
        background:
          "linear-gradient(160deg, oklch(0.97 0.06 70 / 0.98) 0%, oklch(0.95 0.08 64 / 0.98) 100%)",
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{
          background: `linear-gradient(135deg, ${pathway.color}22 0%, ${pathway.color}14 100%)`,
          borderBottom: `1.5px solid ${pathway.color}40`,
        }}
      >
        {/* Number badge */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold"
          style={{
            background: `radial-gradient(circle, ${pathway.color}55, ${pathway.color}22)`,
            border: `1.5px solid ${pathway.color}66`,
            fontSize: "0.75rem",
            color: "oklch(0.18 0.10 36)",
          }}
        >
          {pathway.num}
        </div>
        <span style={{ fontSize: "1.1rem" }}>{pathway.icon}</span>
        <h2
          className="font-display font-bold italic"
          style={{
            fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)",
            color: "oklch(0.18 0.10 36)",
            textShadow: "0 1px 3px oklch(0.82 0.34 54 / 0.20)",
          }}
        >
          {pathway.title}
        </h2>
      </div>
      {/* Screens */}
      <div className="px-4 py-3 space-y-2.5">
        {pathway.screens.map((screen, i) => (
          <ScreenItem
            // biome-ignore lint/suspicious/noArrayIndexKey: static content
            key={i}
            heading={screen.heading}
            body={screen.body}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Download Button ──────────────────────────────────────────────────────────
function DownloadButton({
  onDownload,
  loading,
}: {
  onDownload: () => void;
  loading: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onDownload}
      disabled={loading}
      whileHover={{ scale: loading ? 1 : 1.03 }}
      whileTap={{ scale: loading ? 1 : 0.97 }}
      className="flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold italic transition-all"
      style={{
        background: loading
          ? "oklch(0.78 0.18 54)"
          : "linear-gradient(135deg, oklch(0.78 0.34 54), oklch(0.65 0.28 46))",
        color: "oklch(0.10 0.06 28)",
        fontSize: "0.88rem",
        boxShadow: loading
          ? "none"
          : "0 4px 18px oklch(0.78 0.34 54 / 0.45), 0 0 24px oklch(0.82 0.36 54 / 0.22)",
        border: "1.5px solid oklch(0.82 0.36 54 / 0.60)",
        cursor: loading ? "not-allowed" : "pointer",
      }}
      data-ocid="blueprint.download_button"
    >
      {loading ? (
        <>
          <span style={{ fontSize: "1rem" }}>⏳</span>
          Generating PDF...
        </>
      ) : (
        <>
          <span style={{ fontSize: "1rem" }}>📜</span>
          Download Blueprint PDF
          <span
            className="font-body text-xs font-normal"
            style={{ color: "oklch(0.35 0.12 40)" }}
          >
            (A4)
          </span>
        </>
      )}
    </motion.button>
  );
}

// ─── Main Blueprint Page ──────────────────────────────────────────────────────
export function BlueprintPage() {
  const navigate = useNavigate();
  const [pdfLoading, setPdfLoading] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    setPdfLoading(true);
    try {
      await generateBlueprintPDF();
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <div
      className="max-w-3xl mx-auto pb-10"
      ref={topRef}
      data-ocid="blueprint.page"
    >
      {/* ─── Header ─── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center pt-5 pb-6 mb-1"
      >
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate({ to: "/menu" })}
          className="absolute left-0 top-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-smooth"
          style={{
            background: "oklch(0.92 0.10 58 / 0.80)",
            border: "1px solid oklch(0.78 0.24 52 / 0.50)",
            color: "oklch(0.32 0.14 40)",
            fontSize: "0.72rem",
          }}
          data-ocid="blueprint.back_button"
        >
          <span>←</span>
          <span className="font-body">Menu</span>
        </button>

        <p
          className="font-display text-[9px] tracking-[0.4em] uppercase mb-2"
          style={{ color: "oklch(0.58 0.22 54 / 0.75)" }}
        >
          ✦ ॐ ✦ · ✦ ॐ ✦ · ✦ ॐ ✦
        </p>
        <h1
          className="font-display font-bold italic leading-tight mb-1"
          style={{
            fontSize: "clamp(1.3rem, 4.5vw, 1.8rem)",
            color: "oklch(0.18 0.10 36)",
            textShadow: "0 2px 10px oklch(0.82 0.34 54 / 0.35)",
          }}
        >
          SANATAN DHARMA: KRISHNA AI
        </h1>
        <p
          className="font-display italic mb-1"
          style={{
            fontSize: "clamp(0.88rem, 2.5vw, 1.05rem)",
            color: "oklch(0.45 0.22 46)",
          }}
        >
          Complete App Blueprint
        </p>
        <p
          className="font-body text-xs italic mb-4"
          style={{ color: "oklch(0.42 0.14 48 / 0.85)" }}
        >
          All 21 Sacred Pathways — Full Screen-to-Text Format
        </p>

        {/* Download button top */}
        <div className="flex justify-center">
          <DownloadButton onDownload={handleDownload} loading={pdfLoading} />
        </div>

        {/* Ornate divider */}
        <div
          className="mt-4 mx-auto"
          style={{
            height: "2px",
            maxWidth: "380px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.78 0.34 54), oklch(0.65 0.28 46), oklch(0.78 0.34 54), transparent)",
          }}
        />
        <p
          className="font-body text-[9px] italic mt-1"
          style={{ color: "oklch(0.52 0.18 50 / 0.70)" }}
        >
          ✦ ——— KRISHNA AI ——— ✦
        </p>
      </motion.div>

      {/* ─── Blueprint Content ─── */}
      <div id="blueprint-content" className="space-y-1 px-1">
        {/* Cover summary card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-xl p-5 mb-6 text-center"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.95 0.12 58 / 0.97) 0%, oklch(0.92 0.16 50 / 0.97) 100%)",
            border: "2px solid oklch(0.78 0.30 52 / 0.55)",
            boxShadow:
              "0 8px 36px oklch(0.78 0.34 54 / 0.25), inset 0 1px 0 rgba(255,248,210,0.8)",
          }}
        >
          <p style={{ fontSize: "2.5rem", lineHeight: 1 }}>ॐ</p>
          <p
            className="font-display font-bold italic mt-2 mb-1"
            style={{ fontSize: "0.95rem", color: "oklch(0.20 0.10 36)" }}
          >
            SANATAN DHARMA: KRISHNA AI
          </p>
          <p
            className="font-body text-xs italic mb-2"
            style={{ color: "oklch(0.45 0.16 48)" }}
          >
            This blueprint contains the complete screen-by-screen specification
            for all 21 Sacred Pathways. Every feature, every screen, every
            detail — documented for the final build.
          </p>
          <p
            className="font-body text-[9px] tracking-widest"
            style={{ color: "oklch(0.55 0.20 50 / 0.80)" }}
          >
            ✦ May 2026 · Sanatan Dharma - Krishna AI ✦
          </p>
        </motion.div>

        {/* Section A + B */}
        {SECTIONS.map((section, si) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + si * 0.07, duration: 0.4 }}
          >
            <SectionCard title={section.title} icon={section.icon}>
              {section.items.map((item, ii) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static content
                <ScreenItem key={ii} heading={item.heading} body={item.body} />
              ))}
            </SectionCard>
          </motion.div>
        ))}

        {/* Pathways 1–21 */}
        {PATHWAYS.map((pathway, pi) => (
          <motion.div
            key={pathway.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + pi * 0.03, duration: 0.4 }}
          >
            <PathwayCard pathway={pathway} />
          </motion.div>
        ))}

        {/* Closing sections */}
        {CLOSING_SECTIONS.map((section, ci) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + ci * 0.07, duration: 0.4 }}
          >
            <SectionCard title={section.title} icon={section.icon}>
              <p
                className="font-body leading-relaxed whitespace-pre-line"
                style={{ fontSize: "0.75rem", color: "oklch(0.22 0.08 36)" }}
              >
                {section.body}
              </p>
            </SectionCard>
          </motion.div>
        ))}

        {/* Final quote + signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center py-6 mt-2"
          style={{
            borderTop: "1px solid oklch(0.78 0.26 52 / 0.30)",
          }}
        >
          <p
            className="font-display italic font-bold mb-2"
            style={{ fontSize: "0.9rem", color: "oklch(0.30 0.14 40)" }}
          >
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत
          </p>
          <p
            className="font-body text-xs italic mb-4"
            style={{ color: "oklch(0.45 0.14 48 / 0.85)" }}
          >
            \"Whenever dharma declines... I manifest myself.\" — Bhagavad Gita
            4:7
          </p>
          <p
            className="font-body text-[9px] italic tracking-widest"
            style={{ color: "oklch(0.52 0.18 50 / 0.65)" }}
          >
            ✦ Sanatan Dharma - Krishna AI ✦ May 2026 ✦
          </p>
        </motion.div>
      </div>

      {/* Download button bottom */}
      <div className="flex justify-center mt-4">
        <DownloadButton onDownload={handleDownload} loading={pdfLoading} />
      </div>
    </div>
  );
}
