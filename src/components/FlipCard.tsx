"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

interface FlipCardProps {
  front: string;
  back: string;
  subBack?: string;
}

export default function FlipCard({ front, back, subBack }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="group relative w-full h-40 sm:h-48 md:h-52 cursor-pointer [perspective:1000px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-[#030712] rounded-2xl"
      aria-label={`بطاقة: ${front} — اضغط للقلب`}
    >
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Front — Musnad only, large, centered, Amiri font */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 flex flex-col items-center justify-center p-3 sm:p-4 group-hover:border-amber-500 transition-colors shadow-sm">
          <span className="font-serif text-5xl sm:text-6xl text-amber-500 dark:text-amber-400 tracking-wider">
            {front}
          </span>
          <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-xs text-stone-400 dark:text-stone-500 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            اضغط للقلب
          </span>
        </div>

        {/* Back — Arabic equivalent, smaller, amber-500 bg */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-amber-500 border border-amber-400 flex flex-col items-center justify-center p-3 sm:p-4">
          <span className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-wider">
            {back}
          </span>
          {subBack && (
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/80 text-center">
              {subBack}
            </span>
          )}
          <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-xs text-white/70 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            اضغط للرجوع
          </span>
        </div>
      </motion.div>
    </div>
  );
}
