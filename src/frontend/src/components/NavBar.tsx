import { LANGUAGE_LABELS, useLanguage } from "@/hooks/use-language";
import type { Language } from "@/types/gita";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BookMarked,
  BookMarkedIcon,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  Clock3,
  Compass,
  Eye,
  Feather,
  Flame,
  Flower2,
  Grid3x3,
  Heart,
  Home,
  Image,
  MapPin,
  MessageCircle,
  Mic,
  Milestone,
  Music,
  Share2,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  User,
  Users,
  Waves,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DESKTOP_GROUPS = [
  {
    label: "गीता पाठ",
    romanLabel: "Reader",
    items: [
      { to: "/", label: "अध्याय", sublabel: "18 Chapters", icon: BookOpen },
      {
        to: "/guidance/life",
        label: "जीवन मार्ग",
        sublabel: "Life Guidance",
        icon: BookMarked,
      },
      {
        to: "/daily-verse",
        label: "आज का श्लोक",
        sublabel: "Daily Verse",
        icon: Sun,
      },
      {
        to: "/commentary",
        label: "आचार्य दर्शन",
        sublabel: "Scholars' Vision",
        icon: Eye,
      },
    ],
  },
  {
    label: "साधना",
    romanLabel: "Sadhana",
    items: [
      { to: "/naam", label: "नाम लेखन", sublabel: "Write Naam", icon: Feather },
      { to: "/mala", label: "जपमाला", sublabel: "Digital Mala", icon: Music },
      {
        to: "/mantra",
        label: "मंत्र पाठ",
        sublabel: "Sacred Mantras",
        icon: Mic,
      },
      {
        to: "/rituals",
        label: "दैनिक धर्म",
        sublabel: "Daily Rituals",
        icon: Flame,
      },
      { to: "/timer", label: "ध्यान काल", sublabel: "Focus Timer", icon: Clock },
      { to: "/memorize", label: "श्लोक स्मरण", sublabel: "Memorize", icon: Star },
    ],
  },
  {
    label: "कृष्ण संवाद",
    romanLabel: "Krishna",
    items: [
      {
        to: "/guidance",
        label: "कृष्ण वाणी",
        sublabel: "Ask Krishna AI",
        icon: Compass,
      },
      {
        to: "/kurukshetra",
        label: "मेरा कुरुक्षेत्र",
        sublabel: "My Battlefield",
        icon: Shield,
      },
      {
        to: "/emergency",
        label: "आपातकाल",
        sublabel: "Emergency Mode",
        icon: Sparkles,
      },
      {
        to: "/fear-dissolution",
        label: "भय मुक्ति",
        sublabel: "Fear Dissolution",
        icon: Waves,
      },
      {
        to: "/audio",
        label: "श्रवण",
        sublabel: "24×7 Audio",
        icon: MessageCircle,
      },
    ],
  },
  {
    label: "आत्म बोध",
    romanLabel: "Spirituality",
    items: [
      {
        to: "/virtual-temple",
        label: "वर्चुअल मंदिर",
        sublabel: "Virtual Temple",
        icon: Flower2,
      },
      {
        to: "/16-sanskaar",
        label: "षोडश संस्कार",
        sublabel: "16 Sacred Rites",
        icon: Milestone,
      },
      {
        to: "/garbha-sanskar",
        label: "गर्भ संस्कार",
        sublabel: "Sacred Womb",
        icon: Heart,
      },
      {
        to: "/antim-yatra",
        label: "अंतिम यात्रा",
        sublabel: "Final Journey",
        icon: BookMarkedIcon,
      },
      {
        to: "/stotram-library",
        label: "स्तोत्र ग्रंथालय",
        sublabel: "Stotram Library",
        icon: BookOpen,
      },
    ],
  },
  {
    label: "प्रगति",
    romanLabel: "Progress",
    items: [
      {
        to: "/journal",
        label: "ध्यान पत्रिका",
        sublabel: "Spiritual Journal",
        icon: Heart,
      },
      {
        to: "/karma-mirror",
        label: "कर्म दर्पण",
        sublabel: "Karma Mirror",
        icon: TrendingUp,
      },
      {
        to: "/life-purpose",
        label: "जीवन लक्ष्य",
        sublabel: "Life Purpose Finder",
        icon: Star,
      },
      {
        to: "/heatmap",
        label: "अध्ययन मंडल",
        sublabel: "Progress Map",
        icon: TrendingUp,
      },
      {
        to: "/verse-share",
        label: "श्लोक साझा",
        sublabel: "Share Verse",
        icon: Share2,
      },
    ],
  },
  {
    label: "अन्वेषण",
    romanLabel: "Discover",
    items: [
      { to: "/gallery", label: "दर्शन", sublabel: "Gallery", icon: Image },
      { to: "/calendar", label: "उत्सव", sublabel: "Festivals", icon: Calendar },
      {
        to: "/challenges",
        label: "साधना",
        sublabel: "Challenges",
        icon: Flame,
      },
      { to: "/community", label: "सत्संग", sublabel: "Community", icon: Users },
      {
        to: "/vedic-clock",
        label: "वैदिक काल",
        sublabel: "Vedic Clock",
        icon: Clock3,
      },
      {
        to: "/kurukshetra-map",
        label: "कुरुक्षेत्र मानचित्र",
        sublabel: "Battlefield Map",
        icon: MapPin,
      },
      { to: "/store", label: "भंडार", sublabel: "Store", icon: ShoppingBag },
    ],
  },
];

// ─── Exactly 5 mobile tabs — Library replaces Maala Jaap ─────────────────────
const MOBILE_NAV = [
  { to: "/", label: "गृह", sublabel: "Home", icon: Home },
  { to: "/guidance", label: "कृष्ण AI", sublabel: "Chat AI", icon: Compass },
  { to: "/menu", label: "मार्ग", sublabel: "Menu", icon: Grid3x3 },
  { to: "/library", label: "ग्रन्थ", sublabel: "Library", icon: BookOpen },
  { to: "/profile", label: "प्रोफाइल", sublabel: "Profile", icon: User },
];

const LANGUAGES = Object.entries(LANGUAGE_LABELS) as [Language, string][];

function TocDropdown({
  label,
  romanLabel,
  items,
  currentPath,
}: {
  label: string;
  romanLabel: string;
  items: {
    to: string;
    label: string;
    sublabel: string;
    icon: React.ElementType;
  }[];
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isGroupActive = items.some(
    (i) => currentPath.startsWith(i.to) && i.to !== "/",
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col items-center gap-0 px-2.5 py-2 transition-smooth rounded-sm group"
        style={{
          color: isGroupActive ? "oklch(0.72 0.32 50)" : "oklch(0.28 0.10 36)",
          background: isGroupActive
            ? "oklch(0.76 0.36 54 / 0.12)"
            : "transparent",
        }}
        aria-haspopup="true"
        aria-expanded={open}
        data-ocid={`nav-group-${romanLabel.toLowerCase()}`}
      >
        <span
          className="font-body text-[10px] leading-none"
          style={{ color: "oklch(0.52 0.18 44 / 0.8)" }}
        >
          {label}
        </span>
        <span
          className="font-display text-xs font-bold italic leading-tight flex items-center gap-0.5"
          style={{
            color: isGroupActive
              ? "oklch(0.62 0.28 48)"
              : "oklch(0.22 0.08 32)",
          }}
        >
          {romanLabel}
          <ChevronDown
            className={`w-3 h-3 transition-smooth opacity-70 ${open ? "rotate-180" : ""}`}
          />
        </span>
        {isGroupActive && (
          <div
            style={{
              height: "2px",
              width: "80%",
              marginTop: "2px",
              background:
                "linear-gradient(90deg, transparent, oklch(0.76 0.36 54), transparent)",
              borderRadius: "2px",
            }}
          />
        )}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-1.5 w-60 z-50 py-2 overflow-hidden"
          role="menu"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.94 0.06 68) 0%, oklch(0.91 0.07 64) 100%)",
            border: "1.5px solid oklch(0.72 0.22 52 / 0.7)",
            borderRadius: "3px",
            boxShadow:
              "0 12px 40px rgba(60,40,20,0.28), inset 0 1px 0 rgba(255,248,200,0.35)",
          }}
        >
          <div className="manuscript-header-border mx-3 mb-2" />
          <p
            className="font-body text-[10px] italic text-center tracking-widest mb-2 opacity-60"
            style={{ color: "oklch(0.52 0.18 44)" }}
          >
            ✦ {label} ✦
          </p>
          {items.map(({ to, label: itemLabel, sublabel, icon: Icon }) => {
            const active =
              currentPath === to || (currentPath.startsWith(to) && to !== "/");
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={[
                  "flex items-start gap-3 px-4 py-2.5 transition-smooth",
                  active ? "bg-accent/10" : "hover:bg-accent/6",
                ].join(" ")}
                role="menuitem"
                style={{
                  color: active ? "oklch(0.52 0.24 44)" : "oklch(0.28 0.10 36)",
                }}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-70" />
                <div>
                  <span className="font-body text-xs block leading-tight font-semibold">
                    {itemLabel}
                  </span>
                  <span className="font-body text-[10px] italic leading-tight opacity-65">
                    {sublabel}
                  </span>
                </div>
                {active && (
                  <div
                    className="ml-auto w-1 h-1 rounded-full self-center"
                    style={{ background: "oklch(0.72 0.32 52)" }}
                  />
                )}
              </Link>
            );
          })}
          <div className="manuscript-header-border mx-3 mt-2" />
        </div>
      )}
    </div>
  );
}

export function NavBar() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 relative"
      style={{
        paddingLeft: "20px",
        background:
          "linear-gradient(180deg, oklch(0.88 0.10 60) 0%, oklch(0.85 0.11 58) 60%, oklch(0.82 0.10 56) 100%)",
        borderBottom: "3px solid transparent",
        borderImage:
          "linear-gradient(90deg, oklch(0.58 0.26 46), oklch(0.82 0.38 54), oklch(0.86 0.42 54), oklch(0.82 0.38 54), oklch(0.58 0.26 46)) 1",
        boxShadow:
          "0 4px 24px rgba(60,40,20,0.22), 0 1px 0 rgba(255,248,200,0.30), inset 0 -1px 0 rgba(180,130,40,0.25)",
      }}
      data-ocid="navbar"
    >
      {/* Temple arch top ornament */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.76 0.36 54 / 0.6) 15%, oklch(0.86 0.42 54) 50%, oklch(0.76 0.36 54 / 0.6) 85%, transparent 100%)",
          boxShadow: "0 0 16px oklch(0.76 0.36 54 / 0.5)",
        }}
      />

      {/* Hare Krishna greeting bar */}
      <div
        className="text-center py-0.5"
        style={{
          background: "oklch(0.80 0.12 56 / 0.5)",
          borderBottom: "1px solid oklch(0.72 0.20 52 / 0.3)",
        }}
      >
        <p
          className="font-display text-[10px] italic tracking-[0.4em]"
          style={{
            color: "oklch(0.42 0.18 44)",
            textShadow: "0 0 12px oklch(0.76 0.36 54 / 0.4)",
          }}
        >
          🙏 &nbsp; हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे &nbsp; 🙏
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-3 h-14 flex items-center justify-between gap-3">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 flex-shrink-0 group"
          data-ocid="nav-home-brand"
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth"
            style={{
              background:
                "radial-gradient(circle at 38% 30%, oklch(0.86 0.40 54) 0%, oklch(0.72 0.32 50) 50%, oklch(0.48 0.20 42) 100%)",
              border: "2.5px solid oklch(0.70 0.30 50)",
              boxShadow:
                "0 3px 16px oklch(0.76 0.36 54 / 0.55), inset 0 1px 0 rgba(255,248,200,0.4)",
            }}
          >
            <span
              className="font-display font-bold leading-none select-none"
              style={{
                fontSize: "1.6rem",
                color: "oklch(0.12 0.08 28)",
                textShadow: "0 1px 4px rgba(255,240,180,0.4)",
              }}
            >
              ॐ
            </span>
          </div>
          <div className="hidden sm:block">
            <span
              className="font-display text-lg font-bold block leading-tight"
              style={{
                color: "oklch(0.18 0.10 30)",
                fontStyle: "italic",
                textShadow: "0 1px 3px rgba(218,160,60,0.2)",
              }}
            >
              Bhagavad Gita
            </span>
            <span
              className="font-body text-[10px] tracking-[0.22em] uppercase block leading-none"
              style={{ color: "oklch(0.52 0.22 46)", letterSpacing: "0.2em" }}
            >
              Sacred Companion
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden lg:flex items-center gap-0"
          aria-label="Main navigation"
        >
          <span
            className="font-body text-base mr-1.5 select-none"
            style={{ color: "oklch(0.72 0.30 50 / 0.7)" }}
          >
            ❧
          </span>
          {DESKTOP_GROUPS.map((group, i) => (
            <div key={group.romanLabel} className="flex items-center">
              {i > 0 && (
                <span
                  className="font-body text-xs select-none mx-0.5"
                  style={{ color: "oklch(0.60 0.18 48 / 0.55)" }}
                >
                  ✦
                </span>
              )}
              <TocDropdown
                label={group.label}
                romanLabel={group.romanLabel}
                items={group.items}
                currentPath={location.pathname}
              />
            </div>
          ))}
          <span
            className="font-body text-base ml-1.5 select-none"
            style={{ color: "oklch(0.72 0.30 50 / 0.7)" }}
          >
            ❧
          </span>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 px-2 py-1 text-xs font-body transition-smooth"
              style={{
                color: "oklch(0.32 0.10 38)",
                border: "1px solid oklch(0.68 0.22 50 / 0.6)",
                borderRadius: "2px",
                background: "oklch(0.90 0.06 66 / 0.6)",
              }}
              aria-label="Select language"
              data-ocid="lang-selector"
            >
              <span className="italic">{LANGUAGE_LABELS[language]}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            {langOpen && (
              <div
                className="absolute top-full right-0 mt-1.5 w-36 z-50 py-1 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.93 0.06 68) 0%, oklch(0.90 0.07 64) 100%)",
                  border: "1.5px solid oklch(0.70 0.22 50 / 0.7)",
                  borderRadius: "3px",
                  boxShadow: "0 10px 28px rgba(60,40,20,0.22)",
                }}
              >
                <div className="manuscript-header-border mx-2 mb-1" />
                {LANGUAGES.map(([lang, langLabel]) => (
                  <button
                    type="button"
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-body transition-smooth"
                    style={{
                      color:
                        language === lang
                          ? "oklch(0.52 0.24 46)"
                          : "oklch(0.32 0.10 36)",
                    }}
                  >
                    {langLabel}
                  </button>
                ))}
                <div className="manuscript-header-border mx-2 mt-1" />
              </div>
            )}
          </div>

          <Link
            to="/emergency"
            data-ocid="nav-emergency-button"
            aria-label="Emergency Mode"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-xs font-body transition-smooth rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.28 0.20 18), oklch(0.22 0.18 14))",
              border: "1px solid oklch(0.55 0.26 22 / 0.7)",
              color: "oklch(0.90 0.12 60)",
              borderRadius: "3px",
              boxShadow: "0 2px 8px oklch(0.28 0.22 18 / 0.4)",
            }}
          >
            <Sparkles className="w-3 h-3 opacity-90" />
            <span className="italic font-semibold">Emergency</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-body transition-smooth rounded-sm"
            style={{
              color:
                location.pathname === "/profile"
                  ? "oklch(0.52 0.24 46)"
                  : "oklch(0.30 0.10 36)",
            }}
            data-ocid="nav-profile"
          >
            <User className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden sm:inline italic text-xs font-semibold">
              Arjun
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom ornate rule */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.68 0.28 50 / 0.5) 12%, oklch(0.80 0.36 54 / 0.9) 50%, oklch(0.68 0.28 50 / 0.5) 88%, transparent 100%)",
          boxShadow: "0 0 12px oklch(0.76 0.36 54 / 0.4)",
        }}
      />

      {/* ─── Mobile Bottom Navigation — exactly 5 tabs ─────────────────────────── */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        aria-label="Mobile navigation"
        data-ocid="mobile-nav"
        style={{
          paddingLeft: "20px",
          background:
            "linear-gradient(180deg, oklch(0.86 0.09 60) 0%, oklch(0.83 0.10 56) 100%)",
          borderTop: "3px solid transparent",
          borderImage:
            "linear-gradient(90deg, oklch(0.58 0.26 46), oklch(0.82 0.38 54), oklch(0.58 0.26 46)) 1",
          boxShadow:
            "0 -4px 20px rgba(60,40,20,0.18), inset 0 1px 0 rgba(255,248,200,0.2)",
        }}
      >
        <div
          className="absolute top-0 left-5 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.76 0.36 54 / 0.8), transparent)",
          }}
        />

        {MOBILE_NAV.map(({ to, icon: Icon, label, sublabel }) => {
          const isActive =
            to === "/menu"
              ? location.pathname === "/menu"
              : location.pathname === to ||
                (location.pathname.startsWith(to) && to !== "/");

          return (
            <Link
              key={to}
              to={to}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 transition-smooth min-h-[56px]"
              style={{
                color: isActive ? "oklch(0.52 0.24 46)" : "oklch(0.36 0.12 38)",
              }}
              data-ocid={`mobile-nav-${sublabel.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {to === "/menu" ? (
                <div
                  className="flex items-center justify-center transition-smooth"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: isActive
                      ? "radial-gradient(circle, oklch(0.78 0.32 54 / 0.30) 0%, transparent 100%)"
                      : "transparent",
                    border: isActive
                      ? "1.5px solid oklch(0.72 0.30 52 / 0.6)"
                      : "1.5px solid transparent",
                    boxShadow: isActive
                      ? "0 0 10px oklch(0.72 0.30 52 / 0.3)"
                      : "none",
                  }}
                >
                  <Icon
                    style={{ width: "16px", height: "16px" }}
                    className={`transition-smooth ${isActive ? "scale-110" : ""}`}
                  />
                </div>
              ) : (
                <Icon
                  style={{ width: "18px", height: "18px" }}
                  className={`transition-smooth ${isActive ? "scale-110" : ""}`}
                />
              )}
              <span
                className="text-[9px] font-display leading-none"
                style={
                  isActive
                    ? { color: "oklch(0.58 0.26 48)", fontWeight: 700 }
                    : {}
                }
              >
                {label}
              </span>
              <span className="text-[7.5px] font-body italic leading-none opacity-65">
                {sublabel}
              </span>
              {isActive && (
                <div
                  style={{
                    width: "22px",
                    height: "2px",
                    borderRadius: "1px",
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.76 0.36 54), transparent)",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
