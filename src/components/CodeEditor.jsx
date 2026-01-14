import React from "react";

export const CodeEditor = ({ code, onChange, accent = "#2563EB" }) => {
  const lines = code.split("\n");

  // pequeño helper para convertir hex -> rgba con alfa
  const hexToRgba = (hex, a = 1) => {
    const h = hex.replace("#", "");
    const bigint = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const accentBg = hexToRgba(accent, 0.08);
  const accentSoft = hexToRgba(accent, 0.12);

  return (
    <div
      className="flex-1 flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
      style={{ ["--accent"]: accent }}
    >
      <div
        className="flex items-center px-4 py-2 border-b"
        style={{ background: `linear-gradient(90deg, ${accentBg}, transparent)` }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: hexToRgba(accent, 0.9) }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: hexToRgba(accent, 0.6) }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: hexToRgba(accent, 0.3) }}
            />
          </div>
          <span className="ml-2 text-xs font-mono" style={{ color: accent }}>
            script.js
          </span>
        </div>
      </div>

      <div className="flex flex-1 relative font-mono text-sm bg-slate-50/30">
        <div
          className="w-14 text-slate-500 flex flex-col items-center pt-4 select-none border-r"
          style={{
            background: `linear-gradient(180deg, ${accentSoft}, transparent)`,
            borderColor: hexToRgba(accent, 0.08)
          }}
        >
          {lines.map((_, i) => (
            <span
              key={i}
              className="text-xs mb-1"
              style={{ color: hexToRgba(accent, 0.9), opacity: 0.9 }}
            >
              {i + 1}
            </span>
          ))}
        </div>

        <textarea
          className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 p-4 resize-none leading-relaxed outline-none"
          spellCheck="false"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          style={{
            caretColor: accent,
            color: "#0f172a",
            backgroundImage: `linear-gradient(0deg, ${hexToRgba(accent, 0.02)} 1px, transparent 1px)`,
            backgroundSize: "100% 32px"
          }}
        />
      </div>
    </div>
  );
};