"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

interface FlipCardProps {
  front: string;
  back: string;
  subBack?: string;
  fontSize?: string;
}

export default function FlipCard({
  front,
  back,
  subBack,
  fontSize = "text-4xl",
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      onClick={() => setIsFlipped(!isFlipped)}
      className="group relative w-full h-48 sm:h-56 rounded-2xl cursor-pointer [perspective:1000px] focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl"
      aria-label="اقلب البطاقة"
    >
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Front — Musnad only */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex flex-col items-center justify-center p-4 group-hover:border-amber-500 transition-colors">
          <span className={`font-amiri ${fontSize} text-amber-500 tracking-wider`}>
            {front}
          </span>
          <span className="absolute bottom-3 right-3 text-xs text-stone-400 dark:text-stone-500 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            اضغط للقلب
          </span>
        </div>

        {/* Back — Arabic equivalent */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-amber-500 border border-amber-400 flex flex-col items-center justify-center p-4">
          <span className={`font-amiri ${fontSize} text-white font-bold tracking-wider`}>
            {back}
          </span>
          {subBack && (
            <span className="mt-2 text-sm text-white/80">{subBack}</span>
          )}
          <span className="absolute bottom-3 right-3 text-xs text-white/70 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            اضغط للرجوع
          </span>
        </div>
      </motion.div>
    </button>
  );
}
