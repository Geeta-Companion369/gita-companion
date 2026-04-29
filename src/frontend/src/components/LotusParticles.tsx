// ─── LotusParticles ─────────────────────────────────────────────────────────
// Floating flower petal particles for sacred pages — pure CSS animation,
// staggered keyframe delays, gold/saffron/rose/pink palette.
// Soft, sacred, gentle — floating upward like offerings to the divine.

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number; // %
  delay: number; // s
  duration: number; // s
  size: number; // px
  hue: number; // oklch hue
  startY: number; // vh offset
  chroma: number; // color saturation
  shape: "rounded" | "teardrop" | "oval" | "lotus" | "elongated";
  swayOffset: number; // horizontal sway px
}

// Reduced count — 18 petals (sacred number, less visual noise)
const PETAL_COUNT = 18;

// Warm sacred hues: gold, saffron, rose, pink, amber, lotus pink — NO cool blues
const PETAL_HUES = [54, 46, 32, 340, 300, 350, 44, 36, 52, 56, 330, 48];

function generatePetals(): Petal[] {
  return Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    left: 2 + Math.round((i / PETAL_COUNT) * 96),
    delay: -(i * 1.4),
    duration: 11 + (i % 7) * 2.2, // 11–25s — slow, graceful
    size: 8 + (i % 5) * 4, // 8–24px
    hue: PETAL_HUES[i % PETAL_HUES.length],
    startY: 88 + (i % 4) * 4,
    chroma: 0.2 + (i % 4) * 0.04, // 0.20–0.32
    shape: (["rounded", "teardrop", "oval", "lotus", "elongated"] as const)[
      i % 5
    ],
    swayOffset: 12 + (i % 5) * 10,
  }));
}

// Compute border-radius for each shape
function getShapeStyle(shape: Petal["shape"]): string {
  switch (shape) {
    case "rounded":
      return "50% 0 50% 0";
    case "teardrop":
      return "50% 50% 50% 0";
    case "oval":
      return "50%";
    case "lotus":
      return "30% 70% 70% 30% / 30% 30% 70% 70%";
    case "elongated":
      return "50% 50% 40% 40%";
    default:
      return "50%";
  }
}

interface LotusParticlesProps {
  /** zIndex defaults to 0 */
  zIndex?: number;
  /** opacity multiplier 0–1 */
  opacity?: number;
}

export function LotusParticles({
  zIndex = 0,
  opacity = 0.55,
}: LotusParticlesProps) {
  const [petals] = useState<Petal[]>(() => generatePetals());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex }}
    >
      <style>{`
        @keyframes lotus-float-up {
          0%   { transform: translateY(0) translateX(0px) rotate(0deg) scale(1);         opacity: 0; }
          6%   { opacity: ${opacity}; }
          30%  { transform: translateY(-30vh) translateX(var(--sway-pos)) rotate(120deg) scale(1.12); opacity: ${opacity}; }
          55%  { transform: translateY(-60vh) translateX(var(--sway-neg)) rotate(250deg) scale(1.06); opacity: ${opacity * 0.85}; }
          80%  { transform: translateY(-90vh) translateX(var(--sway-pos)) rotate(340deg) scale(0.92); opacity: ${opacity * 0.5}; }
          94%  { opacity: ${opacity * 0.2}; }
          100% { transform: translateY(-115vh) translateX(0px) rotate(380deg) scale(0.55); opacity: 0; }
        }
        .lotus-float-petal {
          position: absolute;
          animation: lotus-float-up var(--dur) ease-in-out var(--delay) infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {petals.map((p) => (
        <div
          key={p.id}
          className="lotus-float-petal"
          style={
            {
              bottom: `${p.startY - 88}vh`,
              left: `${p.left}%`,
              width: p.size,
              height:
                p.shape === "oval"
                  ? p.size * 0.6
                  : p.shape === "elongated"
                    ? p.size * 1.5
                    : p.size * 1.25,
              background: `oklch(0.80 ${p.chroma} ${p.hue} / 0.75)`,
              borderRadius: getShapeStyle(p.shape),
              boxShadow: `0 0 ${p.size * 0.8}px oklch(0.84 ${Math.min(p.chroma + 0.06, 0.4)} ${p.hue} / 0.40), 0 0 ${p.size * 1.6}px oklch(0.80 ${p.chroma} ${p.hue} / 0.18)`,
              "--dur": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--sway-pos": `${p.swayOffset}px`,
              "--sway-neg": `${-p.swayOffset * 0.7}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// ─── Petal Burst ──────────────────────────────────────────────────────────────
// Fire a burst of flower petals centered at origin (percentage coords).
// Used on: completing mala, correct quiz answer, temple offering.

interface PetalBurstProps {
  originX?: number; // % from left, default 50
  originY?: number; // % from top, default 50
}

export function PetalBurst({ originX = 50, originY = 50 }: PetalBurstProps) {
  const burstPetals = [
    { hue: 340, size: 10, angle: 0, dist: 80 },
    { hue: 54, size: 12, angle: 30, dist: 110 },
    { hue: 32, size: 9, angle: 60, dist: 90 },
    { hue: 350, size: 11, angle: 90, dist: 130 },
    { hue: 300, size: 10, angle: 120, dist: 100 },
    { hue: 46, size: 13, angle: 150, dist: 120 },
    { hue: 350, size: 9, angle: 180, dist: 85 },
    { hue: 54, size: 11, angle: 210, dist: 105 },
    { hue: 32, size: 10, angle: 240, dist: 95 },
    { hue: 340, size: 12, angle: 270, dist: 115 },
    { hue: 340, size: 9, angle: 300, dist: 88 },
    { hue: 48, size: 11, angle: 330, dist: 108 },
    // Outer ring
    { hue: 54, size: 8, angle: 15, dist: 160 },
    { hue: 340, size: 7, angle: 75, dist: 145 },
    { hue: 300, size: 9, angle: 135, dist: 170 },
    { hue: 32, size: 8, angle: 195, dist: 155 },
    { hue: 300, size: 7, angle: 255, dist: 150 },
    { hue: 46, size: 9, angle: 315, dist: 165 },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{ zIndex: 50 }}
    >
      <style>{`
        @keyframes petal-burst-out {
          0%   { opacity: 1; transform: scale(1); }
          70%  { opacity: 0.6; }
          100% { opacity: 0; transform: scale(0) translateY(-18px); }
        }
      `}</style>
      {burstPetals.map((bp) => (
        <div
          key={`burst-${bp.angle}`}
          style={{
            position: "absolute",
            left: `${originX}%`,
            top: `${originY}%`,
            width: bp.size,
            height: bp.size * 1.3,
            borderRadius: "50% 50% 40% 40%",
            background: `oklch(0.82 0.26 ${bp.hue} / 0.90)`,
            boxShadow: `0 0 ${bp.size * 1.5}px oklch(0.84 0.30 ${bp.hue} / 0.55)`,
            animation: `petal-burst-out 1.2s ease-out ${bp.angle * 0.002}s forwards`,
            transform: `rotate(${bp.angle}deg) translateX(${bp.dist}px)`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
