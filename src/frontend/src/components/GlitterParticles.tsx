// GlitterParticles.tsx — replaced with flower petal particles (no glitter)
// Keeps the same API so existing imports still work.
// All "glitter" effects are replaced with gentle falling flower petals.

import { useEffect, useRef, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  delay: number;
  duration: number;
  shape: "rounded" | "teardrop" | "lotus" | "oval" | "elongated";
}

// Warm sacred hues — gold, saffron, rose, pink, amber — NO cool blues
const PETAL_HUES = [54, 46, 32, 340, 300, 350, 52, 44, 56, 330, 48, 36];

function genPetal(id: number): Petal {
  const hueIdx = Math.floor(Math.random() * PETAL_HUES.length);
  return {
    id,
    x: Math.random() * 96 + 2,
    y: Math.random() * 90 + 5,
    size: 6 + Math.random() * 10,
    hue: PETAL_HUES[hueIdx],
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    shape: (["rounded", "teardrop", "lotus", "oval", "elongated"] as const)[
      Math.floor(Math.random() * 5)
    ],
  };
}

function borderRadiusForShape(shape: Petal["shape"]): string {
  switch (shape) {
    case "rounded":
      return "50% 0 50% 0";
    case "teardrop":
      return "50% 50% 50% 0";
    case "lotus":
      return "30% 70% 70% 30% / 30% 30% 70% 70%";
    case "oval":
      return "50%";
    case "elongated":
      return "50% 50% 40% 40%";
    default:
      return "50%";
  }
}

interface GlitterParticlesProps {
  count?: number;
  burst?: boolean;
  burstOrigin?: { x: number; y: number };
  className?: string;
}

export function GlitterParticles({
  count = 14,
  burst = false,
  burstOrigin = { x: 50, y: 50 },
  className = "",
}: GlitterParticlesProps) {
  const [petals, setPetals] = useState<Petal[]>(() =>
    Array.from({ length: count }, (_, i) => genPetal(i)),
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextIdRef = useRef(count);

  useEffect(() => {
    // Gently refresh one petal every 2.5s for continuous flow
    intervalRef.current = setInterval(() => {
      const replaceIdx = Math.floor(Math.random() * count);
      setPetals((prev) => {
        const next = [...prev];
        next[replaceIdx] = genPetal(nextIdRef.current++);
        return next;
      });
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [count]);

  // Burst mode — explosion of petals from origin point
  if (burst) {
    const burstAngles = [
      0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
      320, 340,
    ];
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        aria-hidden
        style={{ zIndex: 50 }}
      >
        <style>{`
          @keyframes glitter-petal-burst {
            0%   { opacity: 1; transform: scale(1.2); }
            60%  { opacity: 0.7; }
            100% { opacity: 0; transform: scale(0) translateY(-15px); }
          }
        `}</style>
        {burstAngles.map((angle) => {
          const dist = 60 + Math.random() * 100;
          const hue = PETAL_HUES[Math.floor(Math.random() * PETAL_HUES.length)];
          const sz = 8 + Math.random() * 8;
          return (
            <div
              key={angle}
              style={{
                position: "absolute",
                left: `${burstOrigin.x}%`,
                top: `${burstOrigin.y}%`,
                width: sz,
                height: sz * 1.3,
                borderRadius: "50% 50% 40% 40%",
                background: `oklch(0.82 0.26 ${hue} / 0.88)`,
                boxShadow: `0 0 ${sz * 1.5}px oklch(0.84 0.30 ${hue} / 0.50)`,
                animation: `glitter-petal-burst 1.1s ease-out ${angle * 0.002}s forwards`,
                transform: `rotate(${angle}deg) translateX(${dist}px)`,
                opacity: 0,
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}
      aria-hidden
      style={{ zIndex: 3 }}
    >
      <style>{`
        @keyframes petal-ambient-float {
          0%,100% { opacity: 0; transform: scale(0.6) translateY(0px) rotate(0deg); }
          20%  { opacity: 0.65; transform: scale(1.1) translateY(-6px) rotate(45deg); }
          50%  { opacity: 0.45; transform: scale(0.9) translateY(-12px) rotate(120deg); }
          80%  { opacity: 0.60; transform: scale(1.0) translateY(-6px) rotate(200deg); }
        }
        .ambient-petal {
          position: absolute;
          animation: petal-ambient-float var(--pdur) ease-in-out var(--pdelay) infinite;
          will-change: opacity, transform;
        }
      `}</style>
      {petals.map((p) => (
        <div
          key={p.id}
          className="ambient-petal"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.shape === "oval" ? p.size * 0.6 : p.size * 1.25,
              borderRadius: borderRadiusForShape(p.shape),
              background: `oklch(0.80 0.24 ${p.hue} / 0.72)`,
              boxShadow: `0 0 ${p.size * 1.2}px oklch(0.84 0.28 ${p.hue} / 0.38)`,
              "--pdur": `${p.duration}s`,
              "--pdelay": `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
