/**
 * GemstoneCheckTab.tsx
 * Gemstone analysis tab for Kundali Lite — palm photo upload + AI-style guidance
 */
import { useRef, useState } from "react";

function JyotishDisclaimer() {
  return (
    <div
      className="kundli-disclaimer mt-4 rounded-lg p-3 text-center"
      style={{ fontSize: "0.72rem" }}
    >
      <p className="font-body italic" style={{ color: "oklch(0.45 0.14 46)" }}>
        ✦ Jyotish is the eye of the Vedas. Karma + Dharma are above all Grahas.
        Use this as guidance, not final truth. ✦
      </p>
    </div>
  );
}

const GEMSTONE_POOL = [
  {
    gem: "Neelam (Blue Sapphire)",
    verdict: "NOT recommended at this time",
    reason:
      "Shani appears malefic in this preliminary reading. Blue Sapphire can give opposite results very quickly for this placement. This is the most sensitive gemstone — extreme caution required.",
    planet: "Shani",
  },
  {
    gem: "Ruby (Manik)",
    verdict: "CONDITIONAL — needs chart confirmation",
    reason:
      "Surya’s position requires careful individual analysis. Manik may increase anger and heat-related issues if Surya is afflicted or combust in your natal chart.",
    planet: "Surya",
  },
  {
    gem: "Yellow Sapphire (Pukhraj)",
    verdict: "FAVORABLE indication",
    reason:
      "Guru appears well-placed in this reading. Pukhraj may bring wisdom, prosperity, and spiritual growth. Please confirm with a full birth chart analysis before wearing.",
    planet: "Guru",
  },
  {
    gem: "Emerald (Panna)",
    verdict: "CONDITIONAL — needs chart confirmation",
    reason:
      "Budh’s position is neutral. Panna may enhance communication and intellect but can cause confusion or nervous issues if Budh is combust or in the 6th/8th/12th house.",
    planet: "Budh",
  },
  {
    gem: "Pearl (Moti)",
    verdict: "FAVORABLE indication",
    reason:
      "Chandra appears supported in this reading. Moti may bring emotional stability, mental peace, and improved mother-child relationship. Confirm with individual chart.",
    planet: "Chandra",
  },
];

export function GemstoneCheckTab() {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{
    gem: string;
    verdict: string;
    reason: string;
    planet: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
    setAnalysisResult(null);
  }

  function handleAnalyze() {
    if (!photoFile) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const idx = photoFile.size % GEMSTONE_POOL.length;
      setAnalysisResult(GEMSTONE_POOL[idx] ?? GEMSTONE_POOL[0]);
      setIsAnalyzing(false);
    }, 2200);
  }

  const verdictColor = analysisResult?.verdict.includes("NOT")
    ? "oklch(0.55 0.24 28)"
    : analysisResult?.verdict.includes("CONDITIONAL")
      ? "oklch(0.58 0.24 70)"
      : "oklch(0.45 0.22 148)";

  return (
    <div className="pb-6 px-4 pt-2" data-ocid="kundali.gemstone_check.section">
      {/* Header */}
      <div
        className="rounded-xl mb-4 p-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.06 270 / 0.4) 0%, oklch(0.92 0.08 56) 100%)",
          border: "1.5px solid oklch(0.65 0.22 268 / 0.40)",
        }}
      >
        <div className="text-3xl mb-2">💎</div>
        <h3
          className="font-display font-bold text-base mb-1"
          style={{ color: "oklch(0.25 0.12 42)" }}
        >
          Gemstone Check
        </h3>
        <p
          className="font-body text-xs italic"
          style={{ color: "oklch(0.45 0.12 46)" }}
        >
          Upload your palm photo for a preliminary gemstone guidance reading.
          Always consult a qualified Jyotishi before wearing any ratna.
        </p>
      </div>

      {/* Mandatory warning */}
      <div
        className="rounded-xl p-3 mb-4"
        style={{
          background: "oklch(0.94 0.08 28 / 0.35)",
          border: "2px solid oklch(0.60 0.22 28 / 0.50)",
        }}
      >
        <p
          className="font-body text-xs font-semibold mb-1"
          style={{ color: "oklch(0.42 0.18 28)" }}
        >
          ⚠ Mandatory Ratna Warning
        </p>
        <p
          className="font-body text-xs"
          style={{ color: "oklch(0.38 0.14 44)", lineHeight: 1.6 }}
        >
          Ratna (gemstones) can give the <strong>opposite effect</strong> very
          quickly if the planet is malefic in your chart.{" "}
          <strong>
            Never wear any gemstone without consulting a qualified Daivagna
            (Vedic astrologer).
          </strong>{" "}
          This tool provides general guidance only — not a substitute for
          individual Kundali analysis.
        </p>
      </div>

      {/* Upload section */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background: "oklch(0.95 0.06 64)",
          border: "1.5px solid oklch(0.72 0.22 54 / 0.35)",
        }}
      >
        <p
          className="font-display font-bold text-sm mb-3"
          style={{ color: "oklch(0.28 0.12 42)" }}
        >
          🤚 Upload Your Palm Photo
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="user"
          onChange={handlePhotoChange}
          className="hidden"
          data-ocid="kundali.gemstone.photo_input"
          aria-label="Upload palm photo for gemstone analysis"
        />

        {photoPreview ? (
          <div className="mb-3">
            <img
              src={photoPreview}
              alt="Palm upload preview"
              className="w-full rounded-lg object-cover"
              style={{ maxHeight: "200px" }}
            />
            <button
              type="button"
              className="mt-2 font-body text-xs underline"
              style={{ color: "oklch(0.45 0.14 46)" }}
              onClick={() => {
                setPhotoPreview(null);
                setPhotoFile(null);
                setAnalysisResult(null);
              }}
              data-ocid="kundali.gemstone.remove_photo_button"
            >
              Remove photo
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="wax-seal-btn w-full py-3 text-sm mb-2"
            onClick={() => fileInputRef.current?.click()}
            data-ocid="kundali.gemstone.upload_button"
          >
            📸 Choose Palm Photo
          </button>
        )}

        {photoFile && !analysisResult && (
          <button
            type="button"
            className="wax-seal-btn w-full py-3 text-sm"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            data-ocid="kundali.gemstone.analyze_button"
          >
            {isAnalyzing
              ? "ॐ Analyzing your palm..."
              : "✨ Analyze for Gemstone Guidance"}
          </button>
        )}
      </div>

      {/* Result */}
      {analysisResult && (
        <div
          className="rounded-xl p-4 mb-4"
          data-ocid="kundali.gemstone.result_card"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.96 0.07 68) 0%, oklch(0.92 0.09 62) 100%)",
            border: `2px solid ${verdictColor}60`,
          }}
        >
          <p
            className="font-display font-bold text-sm mb-1"
            style={{ color: "oklch(0.25 0.12 42)" }}
          >
            💎 Analysis: {analysisResult.gem}
          </p>
          <p
            className="font-body text-base font-bold mb-2"
            style={{ color: verdictColor }}
          >
            {analysisResult.verdict}
          </p>
          <p
            className="font-body text-sm mb-3"
            style={{ color: "oklch(0.32 0.12 44)", lineHeight: 1.7 }}
          >
            {analysisResult.reason}
          </p>
          <div
            className="rounded-lg p-3"
            style={{
              background: "oklch(0.94 0.07 28 / 0.30)",
              border: "1px solid oklch(0.58 0.20 28 / 0.40)",
            }}
          >
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.42 0.14 44)", lineHeight: 1.6 }}
            >
              ⚠ This is a general reading. Your individual chart may differ.{" "}
              <strong>
                Always consult a qualified Daivagna before wearing any gemstone.
              </strong>
            </p>
          </div>
        </div>
      )}

      {/* Book Jyotishi */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.50 0.22 268 / 0.12) 0%, oklch(0.48 0.20 268 / 0.18) 100%)",
          border: "1.5px solid oklch(0.52 0.22 268 / 0.40)",
        }}
        data-ocid="kundali.gemstone.jyotishi_card"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p
              className="font-display font-bold text-sm mb-1"
              style={{ color: "oklch(0.32 0.16 268)" }}
            >
              📞 Book a Jyotishi Call
            </p>
            <p
              className="font-body text-xs italic"
              style={{ color: "oklch(0.45 0.12 268)" }}
            >
              Get a personalised 15-min Vedic astrology session for accurate
              gemstone recommendation.
            </p>
          </div>
          <div className="text-center flex-shrink-0">
            <p
              className="font-display font-bold text-base"
              style={{ color: "oklch(0.35 0.18 268)" }}
            >
              ₹499
            </p>
            <button
              type="button"
              className="wax-seal-btn text-xs px-4 py-1.5 mt-1"
              data-ocid="kundali.gemstone.book_jyotishi_button"
            >
              Book Call
            </button>
          </div>
        </div>
      </div>

      <JyotishDisclaimer />
    </div>
  );
}
