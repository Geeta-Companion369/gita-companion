import type React from "react";

// Pre-computed petal data to avoid array-index keys
function buildPetals(
  count: number,
  radius: number,
  centerX: number,
  centerY: number,
) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 360) / count;
    const rad = (angle * Math.PI) / 180;
    return {
      id: `petal-${count}-${radius}-${i}`,
      cx: centerX + radius * Math.sin(rad),
      cy: centerY - radius * Math.cos(rad),
      angle,
    };
  });
}

function buildDots(
  count: number,
  radius: number,
  centerX: number,
  centerY: number,
) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 360) / count;
    const rad = (angle * Math.PI) / 180;
    return {
      id: `dot-${count}-${radius}-${i}`,
      cx: centerX + radius * Math.sin(rad),
      cy: centerY - radius * Math.cos(rad),
      major: i % 3 === 0,
    };
  });
}

const OUTER_PETALS_A = buildPetals(16, 118, 160, 160);
const INNER_PETALS_A = buildPetals(8, 82, 160, 160);
const PETALS_B = buildPetals(8, 88, 160, 160);
const DOTS_B = buildDots(36, 135, 160, 160);

const FLUTE_HOLES = [115, 126, 137, 148, 159, 170, 181];

export function LogoPreview() {
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #2C1A0E 0%, #1A0F07 50%, #2C1A0E 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "clamp(24px, 5vw, 60px) clamp(16px, 4vw, 40px)",
    fontFamily: "'Noto Serif', 'Georgia', 'Arial Unicode MS', serif",
  };

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "clamp(20px, 4vw, 40px)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
    color: "#D4AF37",
    fontFamily: "'Noto Serif', 'Arial Unicode MS', serif",
    letterSpacing: "0.12em",
    margin: "0 0 10px 0",
    textShadow: "0 0 30px rgba(212,175,55,0.5), 0 2px 8px rgba(0,0,0,0.8)",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
    color: "rgba(212,175,55,0.65)",
    letterSpacing: "0.08em",
    margin: 0,
    fontStyle: "italic",
  };

  const dividerStyle: React.CSSProperties = {
    width: "clamp(160px, 40vw, 320px)",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
    margin: "0 auto clamp(24px, 4vw, 48px)",
  };

  const cardsWrapStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "clamp(20px, 4vw, 48px)",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "900px",
  };

  const cardStyle: React.CSSProperties = {
    background:
      "linear-gradient(145deg, #2A1808 0%, #1A0F07 60%, #221408 100%)",
    border: "1px solid rgba(212,175,55,0.25)",
    borderRadius: "16px",
    padding: "clamp(20px, 3vw, 36px) clamp(16px, 2.5vw, 32px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flex: "1 1 280px",
    maxWidth: "380px",
    boxShadow:
      "0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(212,175,55,0.12)",
  };

  const badgeStyleA: React.CSSProperties = {
    background: "linear-gradient(135deg, #8B6914, #D4AF37, #8B6914)",
    color: "#1A0F07",
    fontWeight: "800",
    fontSize: "0.75rem",
    letterSpacing: "0.18em",
    padding: "4px 14px",
    borderRadius: "20px",
    textTransform: "uppercase",
    boxShadow: "0 2px 12px rgba(212,175,55,0.35)",
  };

  const badgeStyleB: React.CSSProperties = {
    background: "linear-gradient(135deg, #5A4310, #B8961F, #5A4310)",
    color: "#1A0F07",
    fontWeight: "800",
    fontSize: "0.75rem",
    letterSpacing: "0.18em",
    padding: "4px 14px",
    borderRadius: "20px",
    textTransform: "uppercase",
    boxShadow: "0 2px 12px rgba(212,175,55,0.35)",
  };

  const captionTitleStyle: React.CSSProperties = {
    fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
    color: "#D4AF37",
    fontWeight: "700",
    letterSpacing: "0.06em",
    textAlign: "center",
    margin: "0 0 6px 0",
    textShadow: "0 0 12px rgba(212,175,55,0.4)",
  };

  const captionSubStyle: React.CSSProperties = {
    fontSize: "clamp(0.72rem, 1.4vw, 0.82rem)",
    color: "rgba(212,175,55,0.55)",
    textAlign: "center",
    lineHeight: "1.6",
    margin: 0,
    fontStyle: "italic",
  };

  const footerCardStyle: React.CSSProperties = {
    marginTop: "clamp(24px, 4vw, 48px)",
    background:
      "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))",
    border: "1px solid rgba(212,175,55,0.3)",
    borderRadius: "12px",
    padding: "clamp(16px, 3vw, 28px) clamp(20px, 4vw, 48px)",
    textAlign: "center",
    maxWidth: "680px",
    width: "100%",
  };

  const footerTextStyle: React.CSSProperties = {
    fontSize: "clamp(0.85rem, 2vw, 1rem)",
    color: "rgba(212,175,55,0.8)",
    lineHeight: "1.7",
    fontFamily: "'Noto Serif', 'Georgia', serif",
    letterSpacing: "0.04em",
    margin: 0,
  };

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>ॐ गीता साथी ॐ</h1>
        <p style={subtitleStyle}>
          Choose your sacred emblem — the heart of the app
        </p>
      </div>

      {/* Gold Divider */}
      <div style={dividerStyle} />

      {/* Logo Cards */}
      <div style={cardsWrapStyle}>
        {/* LOGO A — Circular Temple Medallion */}
        <div style={cardStyle} data-ocid="logo.option_a.card">
          <span style={badgeStyleA}>Option A</span>

          <svg
            viewBox="0 0 320 320"
            width="clamp(200px, 45vw, 260px)"
            height="clamp(200px, 45vw, 260px)"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo Option A: Circular Temple Medallion"
          >
            <defs>
              <radialGradient id="bgGradA" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2C1A0E" />
                <stop offset="100%" stopColor="#0E0704" />
              </radialGradient>
              <radialGradient id="goldGradA" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5D060" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8B6914" />
              </radialGradient>
              <linearGradient id="goldLinA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D060" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8B6914" />
              </linearGradient>
              <filter id="glowA" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id="textGlowA"
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
              >
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <path id="circleTextPathA" d="M160,35 A125,125 0 1,1 159.9,35" />
            </defs>

            {/* Background circle */}
            <circle cx="160" cy="160" r="155" fill="url(#bgGradA)" />

            {/* Outer dotted ring */}
            <circle
              cx="160"
              cy="160"
              r="148"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeDasharray="3,5"
              opacity="0.5"
            />
            {/* Triple concentric gold rings */}
            <circle
              cx="160"
              cy="160"
              r="140"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.2"
              opacity="0.7"
            />
            <circle
              cx="160"
              cy="160"
              r="132"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.8"
              opacity="0.45"
            />

            {/* 16 outer lotus petals */}
            {OUTER_PETALS_A.map((p) => (
              <ellipse
                key={p.id}
                cx={p.cx}
                cy={p.cy}
                rx="11"
                ry="22"
                fill="url(#goldGradA)"
                opacity="0.8"
                transform={`rotate(${p.angle}, ${p.cx}, ${p.cy})`}
              />
            ))}

            {/* 8 inner lotus petals */}
            {INNER_PETALS_A.map((p) => (
              <ellipse
                key={p.id}
                cx={p.cx}
                cy={p.cy}
                rx="8"
                ry="18"
                fill="url(#goldGradA)"
                opacity="0.45"
                transform={`rotate(${p.angle}, ${p.cx}, ${p.cy})`}
              />
            ))}

            {/* Inner solid circle */}
            <circle
              cx="160"
              cy="160"
              r="62"
              fill="#0E0704"
              stroke="#D4AF37"
              strokeWidth="1.5"
              opacity="0.95"
            />

            {/* PEACOCK FEATHER */}
            <g filter="url(#glowA)" opacity="0.95">
              <line
                x1="160"
                y1="118"
                x2="160"
                y2="148"
                stroke="#D4AF37"
                strokeWidth="2"
              />
              <path
                d="M160,120 Q148,122 144,116 Q152,118 160,120"
                fill="#D4AF37"
                opacity="0.7"
              />
              <path
                d="M160,120 Q172,122 176,116 Q168,118 160,120"
                fill="#D4AF37"
                opacity="0.7"
              />
              <path
                d="M160,126 Q146,128 141,122 Q152,124 160,126"
                fill="#D4AF37"
                opacity="0.6"
              />
              <path
                d="M160,126 Q174,128 179,122 Q168,124 160,126"
                fill="#D4AF37"
                opacity="0.6"
              />
              <ellipse
                cx="160"
                cy="115"
                rx="7"
                ry="10"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <ellipse
                cx="160"
                cy="115"
                rx="3"
                ry="5"
                fill="#D4AF37"
                opacity="0.9"
              />
            </g>

            {/* BANSURI FLUTE */}
            <g filter="url(#glowA)">
              <rect
                x="100"
                y="155"
                width="120"
                height="10"
                rx="5"
                fill="url(#goldLinA)"
                opacity="0.95"
              />
              {FLUTE_HOLES.map((hx) => (
                <circle
                  key={`flute-hole-A-${hx}`}
                  cx={hx}
                  cy="160"
                  r="2.8"
                  fill="#0E0704"
                  opacity="0.9"
                />
              ))}
            </g>

            {/* OM symbol */}
            <text
              x="160"
              y="192"
              textAnchor="middle"
              fill="url(#goldGradA)"
              fontSize="24"
              fontFamily="'Noto Serif', 'Arial Unicode MS', serif"
              fontWeight="bold"
              filter="url(#textGlowA)"
              opacity="0.95"
            >
              ॐ
            </text>

            {/* Curved Sanskrit text */}
            <text
              fontFamily="'Noto Serif', 'Arial Unicode MS', serif"
              fontSize="9"
              fill="#D4AF37"
              opacity="0.75"
              letterSpacing="1.5"
            >
              <textPath href="#circleTextPathA" startOffset="0%">
                ॥ श्री कृष्णाय नमः ॥ हरे कृष्ण हरे राम ॥ श्री राधे ॥
              </textPath>
            </text>
          </svg>

          <div>
            <p style={captionTitleStyle}>Circular Temple Medallion</p>
            <p style={captionSubStyle}>
              Bansuri flute · Peacock feather · Om with lotus petals
              <br />
              Like a sacred temple seal carved in gold
            </p>
          </div>
        </div>

        {/* LOGO B — Sacred Yantra Inscription */}
        <div style={cardStyle} data-ocid="logo.option_b.card">
          <span style={badgeStyleB}>Option B</span>

          <svg
            viewBox="0 0 320 320"
            width="clamp(200px, 45vw, 260px)"
            height="clamp(200px, 45vw, 260px)"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo Option B: Sacred Yantra Inscription"
          >
            <defs>
              <radialGradient id="bgGradB" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2C1A0E" />
                <stop offset="100%" stopColor="#0E0704" />
              </radialGradient>
              <radialGradient id="goldGradB" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5D060" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8B6914" />
              </radialGradient>
              <filter id="glowB" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="omGlowB" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <path id="circleTextPathB" d="M160,34 A126,126 0 1,1 159.9,34" />
            </defs>

            {/* Background circle */}
            <circle cx="160" cy="160" r="155" fill="url(#bgGradB)" />

            {/* Triple outer rings */}
            <circle
              cx="160"
              cy="160"
              r="148"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle
              cx="160"
              cy="160"
              r="140"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              opacity="0.4"
            />
            <circle
              cx="160"
              cy="160"
              r="132"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.6"
              opacity="0.25"
            />

            {/* 36 dots */}
            {DOTS_B.map((d) => (
              <circle
                key={d.id}
                cx={d.cx}
                cy={d.cy}
                r="2.2"
                fill="#D4AF37"
                opacity={d.major ? "0.85" : "0.45"}
              />
            ))}

            {/* 8 background lotus petals */}
            {PETALS_B.map((p) => (
              <ellipse
                key={p.id}
                cx={p.cx}
                cy={p.cy}
                rx="10"
                ry="22"
                fill="#D4AF37"
                opacity="0.15"
                transform={`rotate(${p.angle}, ${p.cx}, ${p.cy})`}
              />
            ))}

            {/* SHATKONA — Sacred hexagram */}
            <g filter="url(#glowB)">
              <polygon
                points="160,68 214,158 106,158"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                opacity="0.75"
              />
              <polygon
                points="160,252 106,162 214,162"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                opacity="0.75"
              />
            </g>

            {/* Inner circle */}
            <circle
              cx="160"
              cy="160"
              r="58"
              fill="#0E0704"
              stroke="#D4AF37"
              strokeWidth="1.5"
              opacity="0.97"
            />

            {/* Center text */}
            <g filter="url(#omGlowB)">
              <text
                x="160"
                y="147"
                textAnchor="middle"
                fill="url(#goldGradB)"
                fontSize="22"
                fontFamily="'Noto Serif', 'Arial Unicode MS', serif"
                fontWeight="bold"
              >
                ॐ
              </text>
            </g>
            <text
              x="160"
              y="166"
              textAnchor="middle"
              fill="#D4AF37"
              fontSize="13"
              fontFamily="'Noto Serif', 'Arial Unicode MS', serif"
              fontWeight="bold"
              opacity="0.95"
            >
              श्रीकृष्ण
            </text>
            <text
              x="160"
              y="182"
              textAnchor="middle"
              fill="#D4AF37"
              fontSize="11"
              fontFamily="'Noto Serif', 'Arial Unicode MS', serif"
              fontWeight="bold"
              opacity="0.85"
            >
              अर्पणमस्तु
            </text>

            {/* Curved Sanskrit text */}
            <text
              fontFamily="'Noto Serif', 'Arial Unicode MS', serif"
              fontSize="9"
              fill="#D4AF37"
              opacity="0.75"
              letterSpacing="1"
            >
              <textPath href="#circleTextPathB" startOffset="0%">
                ॥ हरे कृष्ण ॥ हरे राम ॥ श्रीकृष्णार्पणमस्तु ॥ जय श्री कृष्ण ॥
              </textPath>
            </text>
          </svg>

          <div>
            <p style={captionTitleStyle}>Sacred Yantra Inscription</p>
            <p style={captionSubStyle}>
              श्रीकृष्णार्पणमस्तु · Shatkona sacred geometry · Lotus base
              <br />
              Like an ancient Vedic yantra from a sacred manuscript
            </p>
          </div>
        </div>
      </div>

      {/* Footer prompt */}
      <div style={footerCardStyle} data-ocid="logo.footer_prompt">
        <p style={footerTextStyle}>
          ✦ &nbsp; Which sacred emblem speaks to your heart? &nbsp; ✦
          <br />
          <span style={{ color: "#D4AF37", fontWeight: "700" }}>Reply A</span>{" "}
          for Temple Medallion &nbsp;·&nbsp;{" "}
          <span style={{ color: "#D4AF37", fontWeight: "700" }}>Reply B</span>{" "}
          for Yantra Inscription
        </p>
      </div>

      <div style={{ height: "clamp(20px, 4vw, 40px)" }} />
    </div>
  );
}
