"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

interface FlipCardProps {
  front: string;
  back: string;
  subBack?: string;
  frontSize?: string;
  backSize?: string;
  wide?: boolean;
}

export default function FlipCard({
  front,
  back,
  subBack,
  frontSize = "text-5xl sm:text-6xl",
  backSize = "text-2xl sm:text-3xl",
  wide = false,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      className={`flip-container ${flipped ? "flipped" : ""} w-full h-40 sm:h-48 md:h-52 cursor-pointer select-none ${wide ? "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6" : ""}`}
      aria-label="اقلب البطاقة"
    >
      <div className="flip-inner relative w-full h-full">
        {/* Front — Musnad only */}
        <div className="flip-front absolute inset-0 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 flex flex-col items-center justify-center p-3 hover:border-amber-500 transition-colors">
          <span className={`font-serif ${frontSize} text-amber-500 dark:text-amber-400 tracking-wider leading-tight`}>
            {front}
          </span>
          <span className="absolute bottom-2 right-2 text-xs text-stone-400 dark:text-stone-500 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            اضغط للقلب
          </span>
        </div>

        {/* Back — Arabic */}
        <div className="flip-back absolute inset-0 rounded-2xl bg-amber-500 border border-amber-400 flex flex-col items-center justify-center p-3 overflow-hidden">
          <span className={`font-serif ${backSize} text-white font-bold tracking-wider text-center leading-tight`}>
            {back}
          </span>
          {subBack && (
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/80 text-center px-2">
              {subBack}
            </span>
          )}
          <span className="absolute bottom-2 right-2 text-xs text-white/70 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            اضغط للرجوع
          </span>
        </div>
      </div>
    </div>
  );
}
