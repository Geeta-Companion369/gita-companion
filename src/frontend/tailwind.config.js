import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        sacred: {
          DEFAULT: "oklch(var(--sacred) / <alpha-value>)",
          foreground: "oklch(var(--sacred-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "0.25rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(60,40,20,0.06)",
        sacred: "0 6px 24px rgba(200,155,45,0.42), 0 2px 8px rgba(180,130,40,0.22), inset 0 1px 2px rgba(255,248,220,0.55), 0 0 32px rgba(244,208,63,0.18)",
        elevated:
          "0 12px 48px rgba(220,175,65,0.48), 0 4px 12px rgba(180,130,40,0.28), inset 0 2px 4px rgba(255,248,220,0.5), 0 0 40px rgba(244,208,63,0.22)",
        "warm-glow":
          "0 12px 64px rgba(238,175,65,0.62), 0 4px 16px rgba(200,155,55,0.32), inset 0 2px 4px rgba(255,248,220,0.45), 0 0 48px rgba(244,208,63,0.28)",
        "glow-divine":
          "0 0 48px rgba(244,208,63,0.35), 0 0 80px rgba(244,208,63,0.2), inset 0 1px 2px rgba(255,248,220,0.6)",
        "glow-accent": "0 0 32px rgba(244,208,63,0.28), 0 0 64px rgba(244,208,63,0.15)",
        "sacred-glow":
          "0 10px 52px rgba(190,145,210,0.5), 0 3px 12px rgba(160,120,200,0.28), inset 0 1px 2px rgba(255,248,220,0.3)",
        candlelight:
          "0 0 64px rgba(250,200,90,0.5), 0 6px 20px rgba(160,110,45,0.3)",
        spine: "inset -3px 0 14px rgba(60,40,20,0.35), inset 2px 0 6px rgba(255,240,180,0.22)",
        "page-edge": "4px 0 20px rgba(60,40,20,0.12)",
        "wax-seal":
          "0 6px 22px rgba(120,72,14,0.42), 0 2px 6px rgba(120,72,14,0.28), inset 0 1px 0 rgba(255,248,200,0.36), inset 0 -1px 0 rgba(0,0,0,0.14)",
        "manuscript-inner":
          "inset 0 0 80px rgba(60,40,20,0.08), inset -4px 0 40px rgba(60,40,20,0.05)",
        "divine-gold":
          "0 0 0 1px oklch(0.78 0.34 54 / 0.4), 0 0 24px oklch(0.78 0.34 54 / 0.6), 0 0 56px oklch(0.78 0.34 54 / 0.25), 0 6px 24px rgba(0,0,0,0.18)",
        "jewel-card":
          "0 8px 40px rgba(0,0,0,0.42), 0 3px 10px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,248,220,0.7), inset 0 0 50px rgba(255,220,120,0.08)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in-slow": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
          "75%": { opacity: "0.97" },
        },
        "divine-glow-breathe": {
          "0%, 100%": {
            opacity: "1",
            filter:
              "drop-shadow(0 0 14px oklch(0.78 0.38 54 / 0.8)) drop-shadow(0 0 32px oklch(0.62 0.3 268 / 0.4))",
          },
          "50%": {
            opacity: "0.95",
            filter:
              "drop-shadow(0 0 24px oklch(0.78 0.38 54 / 0.95)) drop-shadow(0 0 48px oklch(0.62 0.3 268 / 0.5))",
          },
        },
        "luxury-border-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-shift-home": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-shift-guidance": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-shift-emergency": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-shift-garbha": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-shift-temple": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-shift-nature": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glitter-burst": {
          "0%": { opacity: "1", transform: "translate(0, 0) scale(1)" },
          "100%": { opacity: "0", transform: "translate(var(--tx), var(--ty)) scale(0)" },
        },
        "lotus-float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0.8",
          },
          "50%": { transform: "translateY(-20px) rotate(15deg)", opacity: "0.6" },
        },
        "kundli-shimmer": {
          "0%, 100%": {
            boxShadow: "0 0 0 2px oklch(0.78 0.34 54 / 0.3), inset 0 0 20px oklch(0.78 0.34 54 / 0.1)",
          },
          "50%": {
            boxShadow: "0 0 16px oklch(0.78 0.34 54 / 0.6), 0 0 0 2px oklch(0.78 0.34 54 / 0.6), inset 0 0 24px oklch(0.78 0.34 54 / 0.25)",
          },
        },
        "dasha-pulse": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "graha-glow": {
          "0%, 100%": {
            boxShadow: "0 0 12px oklch(0.78 0.34 54 / 0.4)",
          },
          "50%": {
            boxShadow: "0 0 24px oklch(0.78 0.34 54 / 0.75)",
          },
        },
        "transit-shimmer": {
          "0%, 100%": {
            borderColor: "oklch(0.78 0.34 54 / 0.3)",
            boxShadow: "0 0 0 1px oklch(0.78 0.34 54 / 0.3)",
          },
          "50%": {
            borderColor: "oklch(0.78 0.34 54 / 0.75)",
            boxShadow: "0 0 16px oklch(0.78 0.34 54 / 0.5), 0 0 0 1px oklch(0.78 0.34 54 / 0.6)",
          },
        },
        "payment-slide-in": {
          "from": { transform: "translateX(100%)", opacity: "0" },
          "to": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "fade-in-slow": "fade-in-slow 0.8s ease-out",
        "slide-up": "slide-up 0.35s ease-out",
        flicker: "flicker 4s ease-in-out infinite",
        "divine-glow-breathe": "divine-glow-breathe 3s ease-in-out infinite",
        "luxury-border": "luxury-border-shift 6s linear infinite",
        "rainbow-shift": "rainbow-shift-home 10s ease-in-out infinite",
        "lotus-float": "lotus-float 4s ease-in-out infinite",
        "glitter-burst": "glitter-burst 0.8s ease-out",
        "kundli-shimmer": "kundli-shimmer 3.5s ease-in-out infinite",
        "dasha-pulse": "dasha-pulse 2s ease-in-out infinite",
        "graha-glow": "graha-glow 2.8s ease-in-out infinite",
        "transit-shimmer": "transit-shimmer 4s ease-in-out infinite",
        "payment-slide-in": "payment-slide-in 0.4s ease-out",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
