"use client";

import { motion } from "framer-motion";
import { Languages, ScrollText, PenLine, GitBranch } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 bg-stone-50 dark:bg-[#030712]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              عن اللغة اليمنية القديمة
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            هناك لغة يمنية قديمة واحدة، لا نعرف اسمها، ولكنها تفرّعت إلى أربع لهجات
            وامتلكت خطّين للكتابة
          </p>
        </motion.div>

        {/* Tree Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Root node */}
          <div className="relative">
            <div className="rounded-2xl bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 shadow-lg shadow-amber-500/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <Languages className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold">
                  اللغة اليمنية القديمة
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 mt-1 text-center">
                لا نعرف اسمها
              </p>
            </div>
          </div>

          {/* Connector line */}
          <div className="w-px h-8 sm:h-12 bg-stone-300 dark:bg-white/20" />

          {/* Two branches: Scripts and Dialects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full max-w-3xl">
            {/* Scripts branch */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 px-4 sm:px-6 py-3 w-full text-center shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <ScrollText className="h-5 w-5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50">
                    الخطوط
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 sm:px-4 py-2">
                    <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">المسند</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      الخط الرئيسي — نقوش على الحجر والبرونز
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 sm:px-4 py-2">
                    <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">الزبور</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      خطّ منفصل — كتابة يومية على الخشب
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dialects branch */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 px-4 sm:px-6 py-3 w-full text-center shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <GitBranch className="h-5 w-5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50">
                    اللهجات
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">السبئية</p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">المعينية</p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">الحضرمية</p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-500">القتبانية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key concept note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 sm:mt-12 max-w-2xl"
          >
            <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 p-4 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <PenLine className="h-5 w-5 text-amber-500 dark:text-amber-400 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  <span className="font-bold text-stone-900 dark:text-stone-50">
                    مفهوم مهم:
                  </span>{" "}
                  الزبور ليس «خط المسند المائل»، بل هو خطٌّ منفصل عن المسند،
                  يُستخدم للكتابة اليومية على أدوات خشبية، بينما المسند هو الخط
                  الرئيسي للنقوش الأثرية على الحجر والبرونز.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
