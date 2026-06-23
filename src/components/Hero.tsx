"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-[#030712]">
      <Particles />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Musnad sample */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="rounded-2xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-8 py-6">
              <span className="font-amiri text-4xl sm:text-5xl text-amber-500 tracking-wider">
                𐩣𐩫𐩧𐩨 𐩪𐩨𐩱
              </span>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                مكرب سبأ
              </p>
            </div>
          </motion.div>

          <h1 className="font-amiri text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              اللغات اليمنية القديمة
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            رحلة في عالم اللغة اليمنية القديمة وخط المسند — لغة ممالك سبأ ومعين
            وحضرموت وقتبان التي ازدهرت في جنوب الجزيرة العربية لأكثر من ألف عام.
          </p>

          <p className="text-sm text-stone-500 dark:text-stone-400 mb-10 max-w-xl mx-auto">
            تعلّم حروف المسند، اقرأ النقوش الأصلية، واكتشف حضارة اليمن القديم
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/lesson/1"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
            >
              <BookOpen className="h-5 w-5" />
              ابدأ الدرس الأول
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-900 dark:text-white px-8 py-3 rounded-full font-medium hover:border-amber-500 transition-colors"
            >
              تعرّف أكثر
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent dark:from-[#030712]" />
    </section>
  );
}
