import { Layout } from "@/components/Layout";
import { Screensaver } from "@/components/Screensaver";
import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useNavigate,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Suspense, lazy, useEffect, useState } from "react";

// Lazy-load pages
const HomePage = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.HomePage })),
);
const ChapterPage = lazy(() =>
  import("@/pages/Chapter").then((m) => ({ default: m.ChapterPage })),
);
const VersePage = lazy(() =>
  import("@/pages/Verse").then((m) => ({ default: m.VersePage })),
);
const GuidancePage = lazy(() =>
  import("@/pages/Guidance").then((m) => ({ default: m.GuidancePage })),
);
const MalaPage = lazy(() =>
  import("@/pages/Mala").then((m) => ({ default: m.MalaPage })),
);
const NaamPage = lazy(() =>
  import("@/pages/Naam").then((m) => ({ default: m.NaamPage })),
);
const MantraPage = lazy(() =>
  import("@/pages/Mantra").then((m) => ({ default: m.MantraPage })),
);
const AudioPage = lazy(() =>
  import("@/pages/Audio").then((m) => ({ default: m.AudioPage })),
);
const GalleryPage = lazy(() =>
  import("@/pages/Gallery").then((m) => ({ default: m.GalleryPage })),
);
const VideosPage = lazy(() =>
  import("@/pages/Videos").then((m) => ({ default: m.VideosPage })),
);
const ProfilePage = lazy(() =>
  import("@/pages/Profile").then((m) => ({ default: m.ProfilePage })),
);
const SettingsPage = lazy(() =>
  import("@/pages/Settings").then((m) => ({ default: m.SettingsPage })),
);
const StorePage = lazy(() =>
  import("@/pages/Store").then((m) => ({ default: m.StorePage })),
);
const ChallengesPage = lazy(() =>
  import("@/pages/Challenges").then((m) => ({ default: m.ChallengesPage })),
);
const CalendarPage = lazy(() =>
  import("@/pages/Calendar").then((m) => ({ default: m.CalendarPage })),
);
const LifeGuidancePage = lazy(() =>
  import("@/pages/LifeGuidance").then((m) => ({ default: m.LifeGuidancePage })),
);
const JournalPage = lazy(() =>
  import("@/pages/Journal").then((m) => ({ default: m.JournalPage })),
);
const HeatmapPage = lazy(() =>
  import("@/pages/Heatmap").then((m) => ({ default: m.HeatmapPage })),
);
const MemorizePage = lazy(() =>
  import("@/pages/Memorize").then((m) => ({ default: m.MemorizePage })),
);
const MoodFinderPage = lazy(() =>
  import("@/pages/MoodFinder").then((m) => ({ default: m.MoodFinderPage })),
);
const TypingPracticePage = lazy(() =>
  import("@/pages/TypingPractice").then((m) => ({
    default: m.TypingPracticePage,
  })),
);
const CommentaryPage = lazy(() =>
  import("@/pages/Commentary").then((m) => ({ default: m.CommentaryPage })),
);
const DailyVersePage = lazy(() =>
  import("@/pages/DailyVerse").then((m) => ({ default: m.DailyVersePage })),
);
const VerseSharePage = lazy(() =>
  import("@/pages/VerseShare").then((m) => ({ default: m.VerseSharePage })),
);
const TimerPage = lazy(() =>
  import("@/pages/Timer").then((m) => ({ default: m.TimerPage })),
);

// New feature pages (stubs)
const EmergencyPage = lazy(() =>
  import("@/pages/Emergency").then((m) => ({ default: m.EmergencyPage })),
);
const KurukshetraPage = lazy(() =>
  import("@/pages/Kurukshetra").then((m) => ({ default: m.KurukshetraPage })),
);
const RitualsPage = lazy(() =>
  import("@/pages/Rituals").then((m) => ({ default: m.RitualsPage })),
);
const GarbhaSanskarPage = lazy(() =>
  import("@/pages/GarbhaSanskar").then((m) => ({
    default: m.GarbhaSanskarPage,
  })),
);
const SanskaarPage = lazy(() =>
  import("@/pages/Sanskaar").then((m) => ({ default: m.SanskaarPage })),
);
const VirtualTemplePage = lazy(() =>
  import("@/pages/VirtualTemple").then((m) => ({
    default: m.VirtualTemplePage,
  })),
);
const AntimYatraPage = lazy(() =>
  import("@/pages/AntimYatra").then((m) => ({ default: m.AntimYatraPage })),
);
const LifePurposePage = lazy(() =>
  import("@/pages/LifePurpose").then((m) => ({ default: m.LifePurposePage })),
);
const SpiritualWillPage = lazy(() =>
  import("@/pages/SpiritualWill").then((m) => ({
    default: m.SpiritualWillPage,
  })),
);
const CommunityPage = lazy(() =>
  import("@/pages/Community").then((m) => ({ default: m.CommunityPage })),
);
const KarmaMirrorPage = lazy(() =>
  import("@/pages/KarmaMirror").then((m) => ({ default: m.KarmaMirrorPage })),
);
const FearDissolutionPage = lazy(() =>
  import("@/pages/FearDissolution").then((m) => ({
    default: m.FearDissolutionPage,
  })),
);
const VedicClockPage = lazy(() =>
  import("@/pages/VedicClock").then((m) => ({ default: m.VedicClockPage })),
);
const StotramLibraryPage = lazy(() =>
  import("@/pages/StotramLibrary").then((m) => ({
    default: m.StotramLibraryPage,
  })),
);
const HavanGuidePage = lazy(() =>
  import("@/pages/HavanGuide").then((m) => ({ default: m.HavanGuidePage })),
);
const DharmaTimelinePage = lazy(() =>
  import("@/pages/DharmaTimeline").then((m) => ({
    default: m.DharmaTimelinePage,
  })),
);
const KurukshetraMapPage = lazy(() =>
  import("@/pages/KurukshetraMap").then((m) => ({
    default: m.KurukshetraMapPage,
  })),
);
const QuizPage = lazy(() =>
  import("@/pages/Quiz").then((m) => ({ default: m.QuizPage })),
);
const YouthPage = lazy(() =>
  import("@/pages/Youth").then((m) => ({ default: m.YouthPage })),
);
const GitaIndexPage = lazy(() =>
  import("@/pages/GitaIndex").then((m) => ({ default: m.GitaIndexPage })),
);
const MenuPage = lazy(() =>
  import("@/pages/Menu").then((m) => ({ default: m.MenuPage })),
);
const LibraryPage = lazy(() =>
  import("@/pages/Library").then((m) => ({ default: m.LibraryPage })),
);
const YouthHugPage = lazy(() =>
  import("@/pages/YouthHug").then((m) => ({ default: m.YouthHugPage })),
);
const DharmaWellnessPage = lazy(() =>
  import("@/pages/DharmaWellness").then((m) => ({
    default: m.DharmaWellnessPage,
  })),
);
const MannKiBaatPage = lazy(() =>
  import("@/pages/MannKiBaat").then((m) => ({ default: m.MannKiBaatPage })),
);
const AboutPage = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.AboutPage })),
);

const LOADER_QUOTES = [
  "Karmaṇy-evādhikāras te — You have the right to act, not to the fruits thereof.",
  "Nainaṁ chindanti śastrāṇi — No weapon can cut the soul. You are eternal.",
  "Yadā yadā hi dharmasya — When dharma declines, I arise — age after age.",
  "Surrender to me alone. I shall deliver you from all sins. Do not fear.",
  "I am the same to all beings. Those who worship me with devotion — they are in me, and I am in them.",
];

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function SubscriptionModal() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const firstVisit = localStorage.getItem("gita-first-visit");
      if (!firstVisit) {
        localStorage.setItem("gita-first-visit", Date.now().toString());
        return;
      }
      const dismissed = localStorage.getItem("gita-sub-dismissed");
      if (dismissed && Date.now() - Number(dismissed) < 24 * 60 * 60 * 1000)
        return;
      const subscribed = localStorage.getItem("gita-subscribed") === "true";
      if (subscribed) return;
      const elapsed = Date.now() - Number(firstVisit);
      if (elapsed >= SEVEN_DAYS_MS) {
        const timer = setTimeout(() => setShow(true), 3000);
        return () => clearTimeout(timer);
      }
    } catch {
      /* silent */
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem("gita-sub-dismissed", Date.now().toString());
    } catch {
      /* silent */
    }
    setShow(false);
  }
  function subscribe() {
    setShow(false);
    navigate({ to: "/profile" });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: "oklch(0.12 0.02 40 / 0.65)",
            backdropFilter: "blur(4px)",
          }}
          onClick={dismiss}
          data-ocid="subscription.modal"
        >
          <motion.div
            className="w-full max-w-md overflow-hidden"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background:
                "linear-gradient(160deg, oklch(0.96 0.08 60) 0%, oklch(0.93 0.10 56) 100%)",
              border: "2.5px solid oklch(0.72 0.30 54 / 0.55)",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(180,130,45,0.35)",
            }}
          >
            <div
              className="h-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.84 0.38 54), oklch(0.65 0.28 46), oklch(0.72 0.22 268), oklch(0.84 0.38 54))",
              }}
            />
            <div className="p-6 text-center">
              <p className="text-4xl mb-3">🙏</p>
              <h2
                className="font-display text-xl font-bold italic mb-2"
                style={{ color: "oklch(0.22 0.10 32)" }}
              >
                Hare Krishna, Arjun!
              </h2>
              <p
                className="font-body text-sm italic mb-1"
                style={{ color: "oklch(0.32 0.12 40)" }}
              >
                Your 7-day free journey ends soon. Continue with Krishna for
              </p>
              <p
                className="font-display text-3xl font-bold mb-1"
                style={{ color: "oklch(0.55 0.26 48)" }}
              >
                ₹108/month
              </p>
              <p
                className="font-body text-xs italic mb-4"
                style={{ color: "oklch(0.52 0.10 46)" }}
              >
                Less than ₹4 per day — the price of Krishna's presence in your
                life
              </p>
              <div
                className="mx-auto mb-4 p-3 rounded text-left"
                style={{
                  background: "oklch(0.72 0.30 52 / 0.10)",
                  border: "1px solid oklch(0.72 0.30 52 / 0.30)",
                  maxWidth: "340px",
                }}
              >
                <p
                  className="font-body text-xs italic"
                  style={{ color: "oklch(0.35 0.12 40)" }}
                >
                  ✦ The Bhagavad Gita reading remains{" "}
                  <strong>free forever</strong> — Krishna's wisdom is for every
                  soul.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={subscribe}
                  className="wax-seal-btn py-3 text-base w-full"
                  data-ocid="subscription.subscribe-button"
                >
                  Continue with Krishna — ₹108/month ✦
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="font-body text-xs italic py-2 transition-smooth"
                  style={{ color: "oklch(0.55 0.10 46)" }}
                  data-ocid="subscription.dismiss-button"
                >
                  Remind me tomorrow
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PageLoader() {
  const quote =
    LOADER_QUOTES[Math.floor(Date.now() / 1000) % LOADER_QUOTES.length];
  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-5"
      style={{ minHeight: "40vh" }}
    >
      <div className="om-loading" aria-label="Loading sacred content…">
        ॐ
      </div>
      <p
        className="font-display italic text-center max-w-sm px-4"
        style={{
          fontSize: "0.85rem",
          color: "oklch(0.38 0.20 46)",
          textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.30)",
          lineHeight: 1.8,
        }}
      >
        {quote}
      </p>
      <p
        className="font-body text-xs italic tracking-widest"
        style={{ color: "oklch(0.52 0.18 46 / 0.75)" }}
      >
        ✦ Hare Krishna ✦
      </p>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Toaster richColors position="top-center" />
      <Screensaver />
      <SubscriptionModal />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const chapterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chapter/$id",
  component: ChapterPage,
});
const verseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/verse/$chapterId/$verseId",
  component: VersePage,
});
const guidanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guidance",
  component: GuidancePage,
});
const malaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mala",
  component: MalaPage,
});
const naamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/naam",
  component: NaamPage,
});
const mantraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mantra",
  component: MantraPage,
});
const audioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/audio",
  component: AudioPage,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});
const videosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/videos",
  component: VideosPage,
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});
const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});
const storeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/store",
  component: StorePage,
});
const challengesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/challenges",
  component: ChallengesPage,
});
const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calendar",
  component: CalendarPage,
});
const lifeGuidanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guidance/life",
  component: LifeGuidancePage,
});
const journalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/journal",
  component: JournalPage,
});
const heatmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/heatmap",
  component: HeatmapPage,
});
const memorizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/memorize",
  component: MemorizePage,
});
const moodFinderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mood",
  component: MoodFinderPage,
});
const typingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/typing",
  component: TypingPracticePage,
});
const commentaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/commentary",
  component: CommentaryPage,
});
const dailyVerseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/daily-verse",
  component: DailyVersePage,
});
const verseShareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/verse-share",
  component: VerseSharePage,
});
const timerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/timer",
  component: TimerPage,
});
// New routes
const emergencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/emergency",
  component: EmergencyPage,
});
const kurukshetraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kurukshetra",
  component: KurukshetraPage,
});
const ritualsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rituals",
  component: RitualsPage,
});
const garbhaSanskarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/garbha-sanskar",
  component: GarbhaSanskarPage,
});
const sanskaarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/16-sanskaar",
  component: SanskaarPage,
});
const virtualTempleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/virtual-temple",
  component: VirtualTemplePage,
});
const antimYatraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/antim-yatra",
  component: AntimYatraPage,
});
const lifePurposeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/life-purpose",
  component: LifePurposePage,
});
const spiritualWillRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/spiritual-will",
  component: SpiritualWillPage,
});
const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/community",
  component: CommunityPage,
});
const karmaMirrorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/karma-mirror",
  component: KarmaMirrorPage,
});
const fearDissolutionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fear-dissolution",
  component: FearDissolutionPage,
});
const vedicClockRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vedic-clock",
  component: VedicClockPage,
});
const stotramLibraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stotram-library",
  component: StotramLibraryPage,
});
const havanGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/havan-guide",
  component: HavanGuidePage,
});
const dharmaTimelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dharma-timeline",
  component: DharmaTimelinePage,
});
const kurukshetraMapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kurukshetra-map",
  component: KurukshetraMapPage,
});
const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: QuizPage,
});
const youthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/youth",
  component: YouthPage,
});
const gitaIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gita",
  component: GitaIndexPage,
});
const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: MenuPage,
});
const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library",
  component: LibraryPage,
});
const youthHugRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/youth-hug",
  component: YouthHugPage,
});
const dharmaWellnessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dharma-wellness",
  component: DharmaWellnessPage,
});
const mannKiBaatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mann-ki-baat",
  component: MannKiBaatPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  chapterRoute,
  verseRoute,
  guidanceRoute,
  malaRoute,
  naamRoute,
  mantraRoute,
  audioRoute,
  galleryRoute,
  videosRoute,
  profileRoute,
  settingsRoute,
  storeRoute,
  challengesRoute,
  calendarRoute,
  lifeGuidanceRoute,
  journalRoute,
  heatmapRoute,
  memorizeRoute,
  moodFinderRoute,
  typingRoute,
  commentaryRoute,
  dailyVerseRoute,
  verseShareRoute,
  timerRoute,
  emergencyRoute,
  kurukshetraRoute,
  ritualsRoute,
  garbhaSanskarRoute,
  sanskaarRoute,
  virtualTempleRoute,
  antimYatraRoute,
  lifePurposeRoute,
  spiritualWillRoute,
  communityRoute,
  karmaMirrorRoute,
  fearDissolutionRoute,
  vedicClockRoute,
  stotramLibraryRoute,
  havanGuideRoute,
  dharmaTimelineRoute,
  kurukshetraMapRoute,
  quizRoute,
  youthRoute,
  gitaIndexRoute,
  menuRoute,
  libraryRoute,
  youthHugRoute,
  dharmaWellnessRoute,
  mannKiBaatRoute,
  aboutRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
