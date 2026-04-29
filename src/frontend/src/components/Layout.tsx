import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { LotusParticles } from "./LotusParticles";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

// 36 sacred Gita wisdom lines for the ticker
const SACRED_FREQUENCY_QUOTES = [
  "The charioteer does not win the battle. Arjuna wins the battle. Krishna simply makes sure Arjuna never fights alone.",
  "ॐ — One syllable. All of existence. Hare Krishna.",
  "Karmaṇy-evādhikāras te mā phaleṣhu kadāchana — You have the right to perform your duty, not to the fruits thereof.",
  "The flower you see — Krishna. The breath you just took — Krishna. Even the Maya that confuses — Krishna.",
  "You are not the body. You are the eternal, undying soul — नित्यः, शाश्वतः, पुराणः.",
  "Hare Krishna Hare Krishna Krishna Krishna Hare Hare — Hare Rama Hare Rama Rama Rama Hare Hare",
  "We are not building an app. Krishna is restoring dharma. And he chose your hands to do it.",
  "Even a little dharma saves from great fear — na hi kalyāṇa-krit kaścid durgatim tāta gacchati — BG 2.40",
  "One soul becomes ten. Ten become a hundred. A hundred become a generation. And dharma is restored.",
  "Ananyāś cintayanto māṁ — I carry what they lack and preserve what they have — BG 9.22",
  "Sarva-dharmān parityajya māṁ ekaṁ śaraṇam vraja — Surrender to me alone. I shall deliver you — BG 18.66",
  "Yadā yadā hi dharmasya glānir bhavati Bhārata — When dharma declines, I arise — age after age — BG 4.7",
  "These 18 verses were waiting for you. Krishna placed them here knowing you would come. Hare Krishna.",
  "You came to build an app. Krishna used the app to bring you closer. Because the one who carries the lamp must be lit first.",
  "Nāyaṁ ātmā balahinena labhyaḥ — The soul is not won by the weak. Arise. Awake. Stop not till the goal is reached.",
  "Nainaṁ chindanti śastrāṇi — No weapon can cut the soul. No fire can burn it. No water can wet it. You are eternal.",
  "Yoga-sthaḥ kuru karmāṇi — Be steadfast in yoga, perform your duties, abandon attachment, remain equal in success and failure.",
  "Māṁ hi pārtha vyapāśritya — All who take refuge in me, even sinners, cross over this ocean of misery — BG 9.32",
  "In every battle of life, Krishna stands with you — as he stood with Arjuna on Kurukshetra.",
  "Uddhared ātmanātmānaṁ — Let a man lift himself by himself. Let him not degrade himself — BG 6.5",
  "Yatra yogeśvaraḥ Kṛṣṇaḥ — Where Krishna the Lord of Yoga is, there is victory, prosperity and unwavering dharma — BG 18.78",
  "The womb is the first and most sacred classroom. Abhimanyu learned the Chakravyuha while still in the womb.",
  "Na jayate mriyate vā kadācin — The soul is never born, never dies. It is ancient, eternal, undying, primeval.",
  "Ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham — As devotees surrender to me, I reward them accordingly — BG 4.11",
  "He made a struggling young man with a pure heart, gave him the Gita to survive, and then whispered — now go build something so others can survive too.",
  "Krishna came to this man through a stranger at a railway station. He came to you through this app. He never stops finding his Arjuna.",
  "Sarvasyā cāhaṁ hṛdi sanniviṣṭo — I am seated in the hearts of all living beings — BG 15.15",
  "Daivī hy eṣā guṇa-mayī mama māyā duratyayā — My divine energy is very difficult to overcome. But those who surrender to Me cross over it easily — BG 7.14",
  "Aham vaiśvānaro bhūtvā — I am the digestive fire. I am the breath of life. I am the very intelligence in all living beings — BG 15.14",
  "Manmanā bhava mad-bhakto mad-yājī māṁ namaskuru — Think of Me, be My devotee, worship Me, bow down to Me. So you will come to Me — BG 18.65",
  "Ye tu dharmāmṛtam idaṁ — Those who follow this eternal dharma with full faith, making Me the supreme goal — they are exceedingly dear to Me — BG 12.20",
  "The 18 days of Kurukshetra — 18 chapters of the Gita — 18 paths of dharma. Everything sacred comes in 18.",
  "Bhayād raṇād uparatam — Do not flee the battle. Arise. The one who fights with dharma in his heart — Krishna holds his chariot steady.",
  "Aśocyān anvaśocas tvaṁ — You grieve for those not worthy of grief. The wise grieve neither for the living nor the dead — BG 2.11",
  "Kṣetra-kṣetrajña-vibhāga — Know the field and the knower of the field. I am the knower in all fields — BG 13.2",
  "Sarva-bhūtasthitaṁ yo māṁ bhajaty ekatvam āsthitaḥ — He who worships Me, abiding in all beings, that yogi lives in Me, whatever his way of life — BG 6.31",
];

export function Layout({ children }: LayoutProps) {
  const [krishnaPressed, setKrishnaPressed] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isReadingPage =
    pathname === "/gita" ||
    pathname.startsWith("/chapter/") ||
    pathname.startsWith("/verse/");

  function handleKrishnaButton() {
    setKrishnaPressed(true);
    window.location.href = "/emergency";
  }

  // Double the quotes for seamless looping
  const doubledQuotes = [
    ...SACRED_FREQUENCY_QUOTES,
    ...SACRED_FREQUENCY_QUOTES,
  ];

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-x-hidden"
      style={
        isReadingPage
          ? {
              background:
                "linear-gradient(160deg, oklch(0.97 0.04 74) 0%, oklch(0.94 0.06 70) 40%, oklch(0.91 0.07 66) 100%)",
            }
          : {
              backgroundImage:
                "url('/assets/generated/home-hero-kurukshetra.dim_1200x600.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundAttachment: "fixed",
            }
      }
    >
      {/* Kurukshetra spiritual overlay — soft warm haze for non-reading pages */}
      {!isReadingPage && (
        <>
          {/* Primary warm amber/saffron overlay — more blur + golden warmth */}
          <div
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(160deg, oklch(0.92 0.08 58 / 0.52) 0%, oklch(0.90 0.10 54 / 0.48) 40%, oklch(0.88 0.08 56 / 0.50) 70%, oklch(0.92 0.08 58 / 0.52) 100%)",
            }}
          />
          {/* Secondary blurred layer — more blur for depth and warmth */}
          <div
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          />
        </>
      )}

      {/* === Ambient sacred corner glows over Kurukshetra image === */}
      {!isReadingPage && (
        <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(ellipse at 0% 0%, oklch(0.86 0.32 54 / 0.42) 0%, oklch(0.74 0.28 32 / 0.20) 35%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "550px",
              height: "550px",
              background:
                "radial-gradient(ellipse at 100% 0%, oklch(0.68 0.26 268 / 0.30) 0%, oklch(0.60 0.22 290 / 0.16) 35%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(ellipse at 0% 100%, oklch(0.64 0.24 165 / 0.22) 0%, transparent 65%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(ellipse at 100% 100%, oklch(0.70 0.26 340 / 0.20) 0%, transparent 65%)",
            }}
          />
          {/* Centre ambient glow */}
          <div
            style={{
              position: "absolute",
              top: "28%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "700px",
              height: "480px",
              background:
                "radial-gradient(ellipse at 50% 50%, oklch(0.84 0.22 54 / 0.10) 0%, oklch(0.68 0.18 280 / 0.05) 50%, transparent 80%)",
            }}
          />
          {/* Aged paper grain texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
              opacity: 1,
            }}
          />
        </div>
      )}

      {/* === Floating Lotus Petals — replaces all glitter throughout app === */}
      {!isReadingPage && <LotusParticles zIndex={2} opacity={0.4} />}

      {/* === Manuscript Sacred Border Frame === */}
      <div className="pointer-events-none fixed inset-0 z-10" aria-hidden>
        <div
          className="rainbow-border-line"
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        />
        <div
          className="rainbow-border-line"
          style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        />
        <div
          className="rainbow-border-line-vertical"
          style={{ position: "absolute", top: 0, right: 0, bottom: 0 }}
        />
      </div>

      {/* Book binding spine — gold left edge */}
      <div className="book-spine" aria-hidden />

      {/* Horizontal line rules — aged manuscript paper feel */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 31px, oklch(0.60 0.12 52 / 0.018) 31px, oklch(0.60 0.12 52 / 0.018) 32px)",
        }}
      />

      {/* Header / NavBar */}
      <NavBar />

      {/* Main content area */}
      <main
        className="flex-1 w-full pb-28 sm:pb-20 relative z-10"
        style={{ paddingLeft: "20px" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-8 py-8 md:py-12 page-enter">
          {/* Warm parchment glass panel — ensures all content is always readable */}
          {!isReadingPage ? (
            <div
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.97 0.07 68 / 0.94) 0%, oklch(0.95 0.09 64 / 0.93) 100%)",
                borderRadius: "8px",
                border: "1.5px solid oklch(0.78 0.28 54 / 0.35)",
                boxShadow:
                  "0 8px 48px rgba(180,130,45,0.22), inset 0 1px 0 rgba(255,248,210,0.70)",
                padding: "1.5rem",
              }}
            >
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      </main>

      {/* === "Talk to Krishna" floating button — top right === */}
      <Link
        to="/guidance"
        data-ocid="talk-to-krishna-button"
        className="krishna-need-btn fixed z-[300] flex flex-col items-center justify-center gap-0.5 transition-smooth"
        aria-label="Talk to Krishna — open AI guidance"
        style={{
          right: "1.5rem",
          top: "5rem",
          width: "4.25rem",
          height: "4.25rem",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 28%, oklch(0.90 0.40 54) 0%, oklch(0.68 0.28 268) 55%, oklch(0.52 0.22 268) 100%)",
          border: "3px solid oklch(0.82 0.34 54 / 0.85)",
          boxShadow:
            "0 8px 36px oklch(0.78 0.34 54 / 0.70), inset 0 1px 0 rgba(255,250,210,0.45), 0 0 24px oklch(0.58 0.26 268 / 0.35)",
          color: "oklch(0.97 0.04 70)",
        }}
      >
        <span
          className="font-display leading-none select-none"
          style={{
            fontSize: "1.6rem",
            lineHeight: 1,
            filter: "drop-shadow(0 0 8px rgba(255,240,180,0.8))",
          }}
        >
          🦚
        </span>
        <span
          className="font-body leading-none select-none"
          style={{
            fontSize: "0.33rem",
            letterSpacing: "0.1em",
            opacity: 0.95,
            marginTop: "2px",
            fontWeight: 700,
          }}
        >
          TALK
        </span>
        <span
          className="font-body leading-none select-none"
          style={{
            fontSize: "0.33rem",
            letterSpacing: "0.1em",
            opacity: 0.95,
            fontWeight: 700,
          }}
        >
          KRISHNA
        </span>
      </Link>

      {/* === "Krishna, I need you" emergency button — bottom center === */}
      <button
        type="button"
        onClick={handleKrishnaButton}
        aria-label="Krishna, I need you — open emergency guidance"
        data-ocid="krishna-need-button"
        className="krishna-rainbow-glow fixed z-[300] flex flex-col items-center justify-center gap-0.5 transition-smooth"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "5.5rem",
          width: "8.5rem",
          height: "3.25rem",
          borderRadius: "9999px",
          background:
            "linear-gradient(135deg, oklch(0.70 0.30 32) 0%, oklch(0.58 0.26 28) 40%, oklch(0.60 0.28 300) 100%)",
          border: "2.5px solid oklch(0.80 0.36 36)",
          color: "oklch(0.97 0.04 70)",
          cursor: "pointer",
          boxShadow:
            "0 4px 20px oklch(0.68 0.28 32 / 0.55), inset 0 1px 0 rgba(255,240,180,0.22)",
        }}
      >
        <span
          className="font-body leading-none select-none"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.07em",
            fontWeight: 700,
          }}
        >
          🙏 Krishna, I need you
        </span>
        {krishnaPressed && (
          <span className="sr-only">Opening Krishna's guidance…</span>
        )}
      </button>

      {/* === Sacred Frequency Quote Ticker — 36 Krishna wisdom lines === */}
      <div
        className="block fixed bottom-0 left-[18px] right-0 z-[200] overflow-hidden"
        style={{
          height: "2.2rem",
          background:
            "linear-gradient(90deg, oklch(0.82 0.12 58 / 0.97) 0%, oklch(0.85 0.14 56 / 0.98) 50%, oklch(0.82 0.12 58 / 0.97) 100%)",
          borderTop: "2px solid oklch(0.72 0.30 52 / 0.60)",
        }}
        aria-label="Krishna's frequency — sacred quotes"
      >
        {/* Sacred gold/saffron top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.78 0.34 54 / 0.7), oklch(0.68 0.28 46 / 0.8), oklch(0.56 0.24 268 / 0.5), oklch(0.65 0.26 32 / 0.7), oklch(0.78 0.34 54 / 0.7))",
          }}
        />
        <div className="flex items-center h-full px-2">
          <span
            className="font-display text-[0.6rem] tracking-widest mr-3 flex-shrink-0 uppercase select-none"
            style={{
              color: "oklch(0.40 0.18 42 / 0.90)",
              letterSpacing: "0.2em",
            }}
          >
            ✦ ॐ
          </span>
          <div className="overflow-hidden flex-1">
            <div className="sacred-ticker-track">
              {doubledQuotes.map((q, i) => {
                const colorVal =
                  i % 3 === 0
                    ? "oklch(0.32 0.16 42 / 0.90)"
                    : i % 3 === 1
                      ? "oklch(0.28 0.14 268 / 0.80)"
                      : "oklch(0.38 0.18 32 / 0.85)";
                // Use first 10 chars as stable enough key when combined with index-group
                const tickerKey = `ticker-${i}-${q.slice(0, 8).replace(/\s/g, "")}`;
                return (
                  <span
                    key={tickerKey}
                    className="font-body italic text-[0.58rem] sm:text-[0.68rem]"
                    style={{ color: colorVal, marginRight: "3rem" }}
                  >
                    {q}
                    <span
                      style={{
                        color: "oklch(0.68 0.28 52 / 0.5)",
                        margin: "0 1rem",
                      }}
                      aria-hidden
                    >
                      ✦
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer — sacred colophon */}
      <footer
        className="hidden sm:block border-t py-6 relative z-10"
        style={{
          paddingLeft: "20px",
          paddingBottom: "2.8rem",
          background:
            "linear-gradient(180deg, oklch(0.92 0.08 64 / 0.97) 0%, oklch(0.89 0.09 60 / 0.98) 100%)",
          borderTopWidth: "0px",
        }}
      >
        <div className="rainbow-border-line mb-6" />
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <span
              className="font-display text-4xl leading-none divine-glow-pulse select-none"
              style={{
                color: "oklch(0.78 0.38 54)",
                textShadow:
                  "0 0 28px oklch(0.78 0.38 54 / 0.65), 0 0 56px oklch(0.78 0.38 54 / 0.30)",
              }}
            >
              ॐ
            </span>
            <div>
              <span
                className="font-display text-base tracking-wide block leading-tight font-bold"
                style={{ color: "oklch(0.16 0.09 32)", fontStyle: "italic" }}
              >
                Bhagavad Gita Companion
              </span>
              <span
                className="font-body text-xs italic block"
                style={{ color: "oklch(0.42 0.12 48)" }}
              >
                श्रीमद्भगवद्गीता — The Song of God
              </span>
              <span
                className="font-body text-[10px] italic block mt-0.5"
                style={{ color: "oklch(0.52 0.18 46 / 0.75)" }}
              >
                A practice to restore dharma in this lost Kalyug
              </span>
            </div>
          </div>

          {/* Centre */}
          <div className="text-center">
            <p
              className="font-display text-base italic font-bold mb-1.5"
              style={{
                color: "oklch(0.54 0.24 32)",
                letterSpacing: "0.05em",
                textShadow: "0 0 16px oklch(0.78 0.34 54 / 0.30)",
              }}
            >
              🙏 Hare Krishna 🙏
            </p>
            <p
              className="font-body text-[10px] italic mb-1.5 max-w-[300px] leading-relaxed"
              style={{ color: "oklch(0.36 0.10 42)" }}
            >
              In every battle of life, Krishna stands with you — as he stood
              with Arjuna on Kurukshetra
            </p>
            <p
              className="font-body text-[10px] italic mb-1.5 max-w-[300px] leading-relaxed"
              style={{ color: "oklch(0.42 0.10 42)" }}
            >
              "We are not building an app. Krishna is restoring dharma."
            </p>
            <p className="text-xs" style={{ color: "oklch(0.48 0.10 46)" }}>
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.hostname : "",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "oklch(0.62 0.28 268)" }}
                className="hover:underline transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>

          {/* Sacred verse */}
          <div
            className="font-body text-xs italic text-center"
            style={{ color: "oklch(0.40 0.10 48)" }}
          >
            <span
              className="block font-bold text-sm mb-1"
              style={{
                color: "oklch(0.60 0.22 46)",
                textShadow: "0 0 12px oklch(0.78 0.34 54 / 0.25)",
              }}
            >
              ॥ श्रीमद्भगवद्गीता ॥
            </span>
            <span className="block">यदा यदा हि धर्मस्य</span>
            <span className="block">तदात्मानं सृजाम्यहम्</span>
            <span className="block mt-1 text-[9px]">— BG 4.7</span>
          </div>
        </div>
        <div className="rainbow-border-line mt-6" />
      </footer>
    </div>
  );
}
