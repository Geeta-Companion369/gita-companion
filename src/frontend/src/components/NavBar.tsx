import { LANGUAGE_LABELS, useLanguage } from "@/hooks/use-language";
import type { Language } from "@/types/gita";
import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, ChevronDown, LayoutGrid, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LANGUAGES = Object.entries(LANGUAGE_LABELS) as [Language, string][];

// ─── BIG 3-option menu bar — Library · Menu · Chatbot AI ─────────────────────
const MENU_OPTIONS = [
  {
    to: "/library",
    label: "Library",
    sublabel: "Pustakaalaye",
    icon: BookOpen,
    ocid: "menu-bar-library",
  },
  {
    to: "/menu",
    label: "Menu",
    sublabel: "Menu",
    icon: LayoutGrid,
    ocid: "menu-bar-menu",
  },
  {
    to: "/guidance",
    label: "Chatbot AI",
    sublabel: "Dharma Sanketa",
    icon: MessageCircle,
    ocid: "menu-bar-chatbot",
  },
] as const;

function isOptionActive(currentPath: string, optionTo: string): boolean {
  if (optionTo === "/menu") return currentPath === "/menu";
  if (optionTo === "/") return currentPath === "/";
  return currentPath === optionTo || currentPath.startsWith(optionTo);
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

      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between gap-3">
        {/* Brand — keep existing logo + name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 flex-shrink-0 group"
          data-ocid="nav-home-brand"
        >
          <div
            className="w-11 h-11 rounded-full flex-shrink-0 overflow-hidden transition-smooth"
            style={{
              border: "2.5px solid oklch(0.70 0.30 50)",
              boxShadow:
                "0 3px 16px oklch(0.76 0.36 54 / 0.55), inset 0 1px 0 rgba(255,248,200,0.4)",
            }}
          >
            <img
              src="/assets/screenshot_20260503_041711_gallery-019deae2-ecb2-73dd-b68c-df7a042ad732.jpg"
              alt="Sanatan Dharma: Krishna AI"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
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
              Sanatan Dharma
            </span>
            <span
              className="font-body text-[10px] tracking-[0.22em] uppercase block leading-none"
              style={{ color: "oklch(0.52 0.22 46)", letterSpacing: "0.2em" }}
            >
              Krishna AI · Ask Krishna. Find Your Path.
            </span>
          </div>
        </Link>

        {/* Language selector — kept from prior NavBar */}
        <div ref={langRef} className="relative">
          <button
            type="button"
            onClick={() => setLangOpen((v) => !v)}
            className="flex items-center gap-1 px-3 py-2 text-sm font-body transition-smooth"
            style={{
              color: "oklch(0.32 0.10 38)",
              border: "1px solid oklch(0.68 0.22 50 / 0.6)",
              borderRadius: "4px",
              background: "oklch(0.90 0.06 66 / 0.6)",
              minHeight: "44px",
            }}
            aria-label="Select language"
            data-ocid="lang-selector"
          >
            <span className="italic font-semibold">
              {LANGUAGE_LABELS[language]}
            </span>
            <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
          {langOpen && (
            <div
              className="absolute top-full right-0 mt-1.5 w-40 z-50 py-1 overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.93 0.06 68) 0%, oklch(0.90 0.07 64) 100%)",
                border: "1.5px solid oklch(0.70 0.22 50 / 0.7)",
                borderRadius: "4px",
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
                  className="w-full text-left px-3 py-2.5 text-sm font-body transition-smooth"
                  style={{
                    color:
                      language === lang
                        ? "oklch(0.52 0.24 46)"
                        : "oklch(0.32 0.10 36)",
                    fontWeight: language === lang ? 700 : 400,
                  }}
                >
                  {langLabel}
                </button>
              ))}
              <div className="manuscript-header-border mx-2 mt-1" />
            </div>
          )}
        </div>
      </div>

      {/* ─── BIG 3-OPTION MENU BAR — Library · Menu · Chatbot AI ─────────────── */}
      <nav
        className="max-w-7xl mx-auto px-3 pb-3"
        aria-label="Primary navigation"
        data-ocid="menu-bar-3option"
      >
        <div className="menu-bar-3option">
          {MENU_OPTIONS.map(({ to, label, sublabel, icon: Icon, ocid }) => {
            const active = isOptionActive(location.pathname, to);
            return (
              <Link
                key={to}
                to={to}
                className={[
                  "menu-bar-3option__item",
                  active ? "menu-bar-3option__item--active" : "",
                ].join(" ")}
                data-ocid={ocid}
                aria-current={active ? "page" : undefined}
              >
                <span className="menu-bar-3option__icon">
                  <Icon style={{ width: 26, height: 26 }} strokeWidth={2.25} />
                </span>
                <span className="menu-bar-3option__label">{label}</span>
                <span className="menu-bar-3option__sublabel">{sublabel}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom ornate rule */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.68 0.28 50 / 0.5) 12%, oklch(0.80 0.36 54 / 0.9) 50%, oklch(0.68 0.28 50 / 0.5) 88%, transparent 100%)",
          boxShadow: "0 0 12px oklch(0.76 0.36 54 / 0.4)",
        }}
      />
    </header>
  );
}
