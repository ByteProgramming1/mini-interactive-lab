import React from "react";
import * as Icons from "lucide-react";

export const LevelCard = ({ level, onSelect }) => {
  const Icon = Icons[level.icon] || Icons.Image;
  const ArrowRight = Icons.ArrowRight || Icons.ArrowRight;
  const accent = level?.color || "#2563EB";

  const hexToRgba = (hex, a = 1) => {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    const bigint = parseInt(full, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const accentBg = hexToRgba(accent, 0.08);
  const accentSoft = hexToRgba(accent, 0.12);
  const accentStrong = accent;

  return (
    <div
      className="group flex flex-col bg-white rounded-xl border p-6 shadow-sm transition-all cursor-pointer"
      onClick={() => onSelect(level.id)}
      style={{ borderColor: hexToRgba(accent, 0.12) }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-3xl font-black font-['Space_Grotesk']"
          style={{ color: hexToRgba(accent, 0.18) }}
        >
          {String(level.id).padStart(2, "0")}
        </span>

        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: accentBg }}
        >
          <Icon color={accentStrong} size={20} />
        </div>
      </div>

      <h3 className="text-slate-900 text-xl font-bold mb-2 font-['Space_Grotesk']">
        {level.title}
      </h3>

      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        {level.description}
      </p>

      <button
        className="mt-auto w-full py-3 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors"
        style={{
          backgroundColor: accentStrong,
          boxShadow: `0 6px 18px ${hexToRgba(accent, 0.12)}`
        }}
      >
        Empezar
        <ArrowRight color="#ffffff" size={16} />
      </button>
    </div>
  );
};