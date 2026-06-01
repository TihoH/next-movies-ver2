"use client";

import { LayoutGrid, Rows3 } from "lucide-react";

interface SortResultsProps {
  gridCols: number;
  setGridCols: (value: number) => void;
}

export default function SortResults({
  gridCols,
  setGridCols,
}: SortResultsProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#181818] p-1">
      <button
      aria-label="Показать списком"
        onClick={() => setGridCols(1)}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer ${
          gridCols === 1
            ? "bg-[#c28a3c] text-black shadow-[0_0_20px_rgba(194,138,60,0.35)]"
            : "text-gray-400 hover:text-white hover:bg-[#222]"
        }`}
      >
        <Rows3 size={18} />
        <span className="hidden md:block">Список</span>
      </button>

      <button
      aria-label="Показать сеткой"
        onClick={() => setGridCols(2)}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer ${
          gridCols === 2
            ? "bg-[#c28a3c] text-black shadow-[0_0_20px_rgba(194,138,60,0.35)]"
            : "text-gray-400 hover:text-white hover:bg-[#222]"
        }`}
      >
        <LayoutGrid size={18} />
        <span className="hidden md:block">Сетка</span>
      </button>
    </div>
  );
}