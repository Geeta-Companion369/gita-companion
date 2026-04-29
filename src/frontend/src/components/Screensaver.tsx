import { ALL_VERSES, VERSE_BY_ID, getRandomVerse } from "@/data/gita-index";
import type { GitaVerse } from "@/data/gita-verses-ch1";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useScreensaver, useScreensaverPrefs } from "@/hooks/use-screensaver";
import { useTTS } from "@/hooks/use-tts";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";

function ScreensaverPortal({
  onDismiss,
  rotateCount,
}: {
  onDismiss: () => void;
  rotateCount: number;
}) {
  const { bookmarkedOnly, setBookmarkedOnly } = useScreensaverPrefs();
  const { bookmarks, addBookmark, removeBookmark, isBookmarked } =
    useBookmarks();
  const { speak, stop, isSpeaking } = useTTS();

  const verse = useMemo<GitaVerse>(() => {
    if (bookmarkedOnly && bookmarks.length > 0) {
      const idx = rotateCount % bookmarks.length;
      const bm = bookmarks[idx];
      const found = VERSE_BY_ID[`${bm.chapterId}.${bm.verseId}`];
      if (found) return found;
    }
    const all = ALL_VERSES;
    return all[(rotateCount * 37 + 7) % all.length] ?? getRandomVerse();
  }, [rotateCount, bookmarkedOnly, bookmarks]);

  const hasSpokenRef = useRef(false);
  const verseIdRef = useRef<string>("");

  // Auto-play TTS on verse shown
  useEffect(() => {
    if (verseIdRef.current !== verse.id) {
      verseIdRef.current = verse.id;
      hasSpokenRef.current = false;
    }
    if (!hasSpokenRef.current) {
      hasSpokenRef.current = true;
      speak(verse.sanskrit, "hi", "male", 0.7, () => {
        speak(verse.english, "en", "male", 0.8);
      });
    }
    return () => stop();
  }, [verse.id, verse.sanskrit, verse.english, speak, stop]);

  const handleBookmark = () => {
    if (isBookmarked(verse.chapter, verse.verse)) {
      removeBookmark(verse.chapter, verse.verse);
      toast("Bookmark removed");
    } else {
      addBookmark(verse.chapter, verse.verse);
      toast.success("✦ Verse bookmarked — Hare Krishna 🙏");
    }
  };

  const bookmarked = isBookmarked(verse.chapter, verse.verse);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.22 0.08 46) 0%, oklch(0.14 0.06 38) 60%, oklch(0.10 0.04 30) 100%)",
      }}
      data-ocid="screensaver.canvas_target"
    >
      {/* Full-screen dismiss button (background layer) */}
      <button
        type="button"
        aria-label="Dismiss screensaver"
        onClick={onDismiss}
        className="absolute inset-0 w-full h-full"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 0,
        }}
      />
      {/* Candlelight vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, oklch(0.68 0.18 46 / 0.10) 0%, transparent 65%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Om watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
        style={{
          opacity: 0.04,
          fontSize: "clamp(12rem, 40vw, 28rem)",
          fontFamily: "var(--font-display)",
          color: "oklch(0.82 0.28 52)",
          zIndex: 1,
        }}
      >
        ॐ
      </div>

      {/* Verse card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={verse.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative max-w-3xl w-full mx-auto px-8 py-12 text-center"
          style={{ zIndex: 2 }}
        >
          {/* Ornate top border */}
          <div className="mb-8">
            <div className="flex items-center gap-3 justify-center mb-2">
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.6), transparent)",
                }}
              />
              <span
                style={{
                  color: "oklch(0.72 0.28 52 / 0.7)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.4em",
                }}
              >
                ॥ श्रीमद्भगवद्गीता ॥
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.72 0.28 52 / 0.6), transparent)",
                }}
              />
            </div>
            <p
              style={{
                color: "oklch(0.72 0.28 52 / 0.65)",
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
              }}
            >
              Chapter {verse.chapter}, Verse {verse.verse}
            </p>
          </div>

          {/* Sanskrit — glowing pulse */}
          <motion.p
            animate={{
              textShadow: [
                "0 0 20px oklch(0.78 0.28 52 / 0.3)",
                "0 0 48px oklch(0.78 0.28 52 / 0.7)",
                "0 0 20px oklch(0.78 0.28 52 / 0.3)",
              ],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.2rem, 3.2vw, 2rem)",
              lineHeight: 2.1,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "oklch(0.88 0.24 52)",
              marginBottom: "1.5rem",
            }}
          >
            {verse.sanskrit}
          </motion.p>

          {/* Transliteration */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
              color: "oklch(0.75 0.12 52 / 0.8)",
              marginBottom: "1.5rem",
              fontStyle: "italic",
              letterSpacing: "0.03em",
            }}
          >
            {verse.transliteration}
          </p>

          {/* Separator */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              style={{
                width: 40,
                height: 1,
                background: "oklch(0.72 0.28 52 / 0.35)",
              }}
            />
            <span
              style={{
                color: "oklch(0.72 0.28 52 / 0.55)",
                fontSize: "0.85rem",
              }}
            >
              ❧
            </span>
            <div
              style={{
                width: 40,
                height: 1,
                background: "oklch(0.72 0.28 52 / 0.35)",
              }}
            />
          </div>

          {/* English translation */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              lineHeight: 1.9,
              color: "oklch(0.84 0.07 60 / 0.9)",
              maxWidth: "42rem",
              margin: "0 auto 2rem",
            }}
          >
            {verse.english}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              data-ocid="screensaver.close_button"
              onClick={onDismiss}
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid oklch(0.72 0.28 52 / 0.4)",
                borderRadius: "2px",
                background: "transparent",
                color: "oklch(0.84 0.12 60 / 0.7)",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              ✕ Dismiss
            </button>

            <button
              type="button"
              data-ocid="screensaver.toggle"
              onClick={() => {
                if (isSpeaking) stop();
                else
                  speak(verse.sanskrit, "hi", "male", 0.7, () =>
                    speak(verse.english, "en", "male", 0.8),
                  );
              }}
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid oklch(0.72 0.28 52 / 0.4)",
                borderRadius: "2px",
                background: isSpeaking
                  ? "oklch(0.72 0.28 52 / 0.15)"
                  : "transparent",
                color: "oklch(0.84 0.12 60 / 0.7)",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              {isSpeaking ? "⏹ Silence" : "▶ Listen"}
            </button>

            <button
              type="button"
              data-ocid="screensaver.toggle"
              onClick={handleBookmark}
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid oklch(0.72 0.28 52 / 0.4)",
                borderRadius: "2px",
                background: bookmarked
                  ? "oklch(0.72 0.28 52 / 0.18)"
                  : "transparent",
                color: bookmarked
                  ? "oklch(0.84 0.24 52)"
                  : "oklch(0.84 0.12 60 / 0.7)",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              {bookmarked ? "✦ Bookmarked" : "☆ Bookmark"}
            </button>

            <label
              htmlFor="screensaver-bm-only"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "oklch(0.75 0.08 56 / 0.65)",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              <input
                id="screensaver-bm-only"
                type="checkbox"
                checked={bookmarkedOnly}
                onChange={(e) => setBookmarkedOnly(e.target.checked)}
                style={{ accentColor: "oklch(0.72 0.28 52)" }}
              />
              Bookmarked verses only
            </label>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tap to dismiss hint */}
      <p
        className="absolute bottom-8 text-center pointer-events-none"
        style={{
          color: "oklch(0.68 0.08 52 / 0.45)",
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          zIndex: 1,
        }}
      >
        Tap anywhere or press any key to continue
      </p>

      {/* Footer tagline */}
      <p
        className="absolute bottom-4 text-center pointer-events-none"
        style={{
          color: "oklch(0.72 0.18 52 / 0.3)",
          fontFamily: "var(--font-display)",
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          zIndex: 1,
        }}
      >
        ॥ हरे कृष्ण ॥
      </p>
    </div>
  );
}

export function Screensaver() {
  const { isActive, dismiss, rotateCount } = useScreensaver();

  if (!isActive) return null;

  return createPortal(
    <ScreensaverPortal onDismiss={dismiss} rotateCount={rotateCount} />,
    document.body,
  );
}
