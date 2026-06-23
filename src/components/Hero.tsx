"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 8 + 12,
  left: Math.random() * 100,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-[#030712] pt-16">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute star-light dark:star-dark rounded-full"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: "-10px",
              animation: `particle-fall ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
        {/* Musnad preview card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 px-6 py-4 sm:px-8 sm:py-6 shadow-lg shadow-amber-500/5">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-amber-500 dark:text-amber-400 tracking-wider">
              𐩣𐩫𐩧𐩨 𐩪𐩨𐩱
            </span>
            <p className="mt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400">مكرب سبأ</p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
            اللغات اليمنية القديمة
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 mb-3 max-w-2xl mx-auto leading-relaxed"
        >
          رحلة في عالم اللغة اليمنية القديمة وخط المسند — لغة ممالك سبأ ومعين وحضرموت وقتبان
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs sm:text-sm md:text-base text-stone-500 dark:text-stone-400 mb-8 max-w-xl mx-auto"
        >
          تعلّم حروف المسند، اقرأ النقوش الأصلية، واكتشف حضارة اليمن القديم
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/lesson/1"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 w-full sm:w-auto justify-center"
          >
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            ابدأ الدرس الأول
            <ArrowLeft className="h-4 w-4 shrink-0" />
          </Link>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:border-amber-500 transition-colors w-full sm:w-auto justify-center"
          >
            تعرّف أكثر
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-stone-50 to-transparent dark:from-[#030712] pointer-events-none" />
    </section>
  );
}
