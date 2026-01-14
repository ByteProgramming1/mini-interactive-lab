import React from "react";
import * as Icons from "lucide-react";

export const LevelSidebar = ({ levels, currentId, onSelect }) => {
  const hexToRgba = (hex, a = 1) => {
    const h = hex?.replace("#", "") ?? "2563EB";
    const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    const bigint = parseInt(full, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 bg-white overflow-y-auto p-4 gap-3">
      <div className="px-2 py-1 text-slate-500 text-sm font-semibold uppercase">Niveles</div>
      {Object.values(levels).map(level => {
        const Icon = Icons[level.icon] || Icons.Image;
        const accent = level.color || "#2563EB";
        const isActive = currentId === level.id;
        return (
          <button
            key={level.id}
            onClick={() => onSelect(level.id)}
            className={`flex items-center gap-3 w-full text-left rounded-lg px-3 py-2 transition-colors ${
              isActive ? "shadow-sm" : "hover:bg-slate-50"
            }`}
            style={{
              background: isActive ? hexToRgba(accent, 0.06) : "transparent",
              borderLeft: `4px solid ${isActive ? accent : "transparent"}`
            }}
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-md shrink-0"
              style={{
                background: hexToRgba(accent, 0.08)
              }}
            >
              <Icon color={accent} size={16} />
            </div>

            <div className="flex-1">
              <div className="text-sm font-medium text-slate-900">{level.title}</div>
            </div>

            <div className="text-xs font-mono text-slate-400">{String(level.id).padStart(2, "0")}</div>
          </button>
        );
      })}
    </aside>
  );
};