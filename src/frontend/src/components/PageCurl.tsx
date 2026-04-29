// ─── PageCurl ─────────────────────────────────────────────────────────────────
// Finger-drag page-curl component that works with both mouse and touch.
// Uses pointer events + CSS clip-path + transform for a realistic parchment curl.

import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface PageCurlProps {
  children: ReactNode;
  onNextPage: () => void;
  onPrevPage: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

interface DragState {
  startX: number;
  startY: number;
  tracking: boolean;
  side: "left" | "right" | null;
}

const TRIGGER_THRESHOLD = 0.28; // 28% of width to trigger turn
const MIN_DRAG_PX = 10; // minimum drag before registering

export function PageCurl({
  children,
  onNextPage,
  onPrevPage,
  canGoNext,
  canGoPrev,
}: PageCurlProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState>({
    startX: 0,
    startY: 0,
    tracking: false,
    side: null,
  });

  const [curlProgress, setCurlProgress] = useState(0); // 0..1
  const [curlSide, setCurlSide] = useState<"left" | "right" | null>(null);
  const [isSnapping, setIsSnapping] = useState(false);
  const [isTurning, setIsTurning] = useState(false);

  const resetCurl = useCallback((animated: boolean) => {
    setIsSnapping(animated);
    setCurlProgress(0);
    setCurlSide(null);
    setTimeout(
      () => {
        setIsSnapping(false);
        dragRef.current.tracking = false;
        dragRef.current.side = null;
      },
      animated ? 320 : 0,
    );
  }, []);

  const completeTurn = useCallback(
    (side: "left" | "right") => {
      setIsTurning(true);
      setIsSnapping(true);
      setCurlProgress(1);

      setTimeout(() => {
        setIsTurning(false);
        setCurlProgress(0);
        setCurlSide(null);
        setIsSnapping(false);
        dragRef.current.tracking = false;
        dragRef.current.side = null;

        if (side === "right" && canGoNext) onNextPage();
        else if (side === "left" && canGoPrev) onPrevPage();
      }, 350);
    },
    [canGoNext, canGoPrev, onNextPage, onPrevPage],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // Only track primary pointer (ignore secondary touches)
      if (e.pointerType === "touch" && !e.isPrimary) return;
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        tracking: true,
        side: null,
      };
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragRef.current.tracking || isTurning) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;

      // If scroll-dominant gesture, cancel tracking
      if (Math.abs(dy) > Math.abs(dx) * 1.8 && Math.abs(dx) < 30) {
        dragRef.current.tracking = false;
        resetCurl(false);
        return;
      }

      if (Math.abs(dx) < MIN_DRAG_PX) return;

      const containerWidth = containerRef.current?.offsetWidth ?? 400;

      // Determine swipe direction
      if (!dragRef.current.side) {
        if (dx < 0 && canGoNext) {
          dragRef.current.side = "right";
          setCurlSide("right");
        } else if (dx > 0 && canGoPrev) {
          dragRef.current.side = "left";
          setCurlSide("left");
        } else {
          return; // Can't go in this direction
        }
      }

      // Prevent page scroll when tracking horizontal gesture
      e.preventDefault();

      const rawProgress = Math.abs(dx) / containerWidth;
      const progress = Math.min(rawProgress, 1);
      setCurlProgress(progress);
    },
    [isTurning, canGoNext, canGoPrev, resetCurl],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragRef.current.tracking || isTurning) return;
      const dx = e.clientX - dragRef.current.startX;
      const containerWidth = containerRef.current?.offsetWidth ?? 400;
      const ratio = Math.abs(dx) / containerWidth;
      const side = dragRef.current.side;

      if (ratio >= TRIGGER_THRESHOLD && side) {
        completeTurn(side);
      } else {
        resetCurl(true);
      }
    },
    [isTurning, completeTurn, resetCurl],
  );

  const handlePointerCancel = useCallback(() => {
    resetCurl(true);
  }, [resetCurl]);

  // Touch: prevent default scroll during horizontal drag (captured in move handler)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const opts = { passive: false };
    const noOp = () => {};
    el.addEventListener("touchstart", noOp, opts);
    return () => el.removeEventListener("touchstart", noOp);
  }, []);

  // ── Visual curl calculations ──────────────────────────────────────────────
  // Right curl (swipe left → next page): bottom-right corner peels up
  // Left curl (swipe right → prev page): bottom-left corner peels up

  const curlSize = Math.min(80 + curlProgress * 120, 200); // px
  const opacity = Math.min(curlProgress * 2.5, 1);
  const shadowBlur = curlProgress * 28;

  // Hint arrows for edges
  const showNextHint = canGoNext && curlProgress === 0 && !curlSide;
  const showPrevHint = canGoPrev && curlProgress === 0 && !curlSide;

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{ touchAction: curlSide ? "none" : "pan-y" }}
      data-ocid="page-curl.canvas_target"
    >
      {/* Main page content */}
      <div
        style={{
          transition: isTurning ? "opacity 0.28s ease" : undefined,
          opacity: isTurning ? 1 - curlProgress * 0.4 : 1,
        }}
      >
        {children}
      </div>

      {/* ── Right corner curl (swipe-left → next) ── */}
      {curlSide === "right" && curlProgress > 0 && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: curlSize,
            height: curlSize,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          {/* Peel shadow */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: curlSize,
              height: curlSize,
              background: `radial-gradient(ellipse at 100% 100%, oklch(0.18 0.06 44 / ${0.45 * curlProgress}) 0%, transparent 70%)`,
              filter: `blur(${shadowBlur * 0.4}px)`,
              transform: "translate(8px, 8px)",
            }}
          />
          {/* Curling parchment flap — clip-path triangle reveals warmer underside */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: curlSize,
              height: curlSize,
              background:
                "linear-gradient(225deg, oklch(0.98 0.06 78) 0%, oklch(0.94 0.09 68) 40%, oklch(0.88 0.11 60) 100%)",
              clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
              boxShadow: `${-shadowBlur * 0.5}px ${-shadowBlur * 0.5}px ${shadowBlur}px oklch(0.18 0.06 44 / 0.4)`,
              opacity,
              transform: `perspective(400px) rotateX(${curlProgress * 6}deg) rotateY(${curlProgress * -8}deg)`,
              transformOrigin: "right bottom",
              transition: isSnapping
                ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {/* Grain texture on the peel */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='0.06'/%3E%3C/svg%3E\")",
                clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
              }}
            />
            {/* Gold edge glimmer */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.6), transparent)",
              }}
            />
          </div>
        </div>
      )}

      {/* ── Left corner curl (swipe-right → prev) ── */}
      {curlSide === "left" && curlProgress > 0 && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: curlSize,
            height: curlSize,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          {/* Shadow */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: curlSize,
              height: curlSize,
              background: `radial-gradient(ellipse at 0% 100%, oklch(0.18 0.06 44 / ${0.4 * curlProgress}) 0%, transparent 70%)`,
              filter: `blur(${shadowBlur * 0.4}px)`,
              transform: "translate(-8px, 8px)",
            }}
          />
          {/* Peel flap */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: curlSize,
              height: curlSize,
              background:
                "linear-gradient(315deg, oklch(0.98 0.06 78) 0%, oklch(0.94 0.09 68) 40%, oklch(0.88 0.11 60) 100%)",
              clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
              boxShadow: `${shadowBlur * 0.5}px ${-shadowBlur * 0.5}px ${shadowBlur}px oklch(0.18 0.06 44 / 0.35)`,
              opacity,
              transform: `perspective(400px) rotateX(${curlProgress * 6}deg) rotateY(${curlProgress * 8}deg)`,
              transformOrigin: "left bottom",
              transition: isSnapping
                ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          />
        </div>
      )}

      {/* ── Edge hint arrows — visible when not dragging ── */}
      {showPrevHint && (
        <div
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.22,
          }}
        >
          <span
            className="font-display text-accent"
            style={{ fontSize: "1.2rem" }}
          >
            ‹
          </span>
        </div>
      )}
      {showNextHint && (
        <div
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.22,
          }}
        >
          <span
            className="font-display text-accent"
            style={{ fontSize: "1.2rem" }}
          >
            ›
          </span>
        </div>
      )}

      {/* ── Progress indicator: thin gold line at bottom ── */}
      {curlProgress > 0 && curlSide && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent ${curlSide === "right" ? "0%" : `${(1 - curlProgress) * 100}%`}, oklch(0.72 0.28 52 / ${opacity * 0.7}) ${curlSide === "right" ? `${curlProgress * 100}%` : "100%"}, transparent 100%)`,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
