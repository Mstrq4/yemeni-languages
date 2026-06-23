"use client";

import { motion } from "framer-motion";
import { Languages, ScrollText, PenLine, GitBranch } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-stone-50 dark:bg-[#030712]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              عن اللغة اليمنية القديمة
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
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
            <div className="rounded-2xl bg-amber-500 text-white px-8 py-4 shadow-lg shadow-amber-500/20">
              <div className="flex items-center gap-3">
                <Languages className="h-6 w-6" />
                <span className="font-amiri text-lg sm:text-xl font-bold">
                  اللغة اليمنية القديمة
                </span>
              </div>
              <p className="text-xs text-white/80 mt-1 text-center">
                لا نعرف اسمها
              </p>
            </div>
          </div>

          {/* Connector line */}
          <div className="w-px h-12 bg-stone-300 dark:bg-white/20" />

          {/* Two branches: Scripts and Dialects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {/* Scripts branch */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-6 py-3 w-full text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <ScrollText className="h-5 w-5 text-amber-500" />
                  <span className="font-amiri text-base font-bold text-stone-900 dark:text-white">
                    الخطوط
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-4 py-2">
                    <p className="text-sm font-bold text-amber-500">المسند</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      الخط الرئيسي — نقوش على الحجر والبرونز
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-4 py-2">
                    <p className="text-sm font-bold text-amber-500">الزبور</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      خطّ منفصل — كتابة يومية على الخشب
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dialects branch */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-6 py-3 w-full text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <GitBranch className="h-5 w-5 text-amber-500" />
                  <span className="font-amiri text-base font-bold text-stone-900 dark:text-white">
                    اللهجات
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-sm font-bold text-amber-500">السبئية</p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-sm font-bold text-amber-500">المعينية</p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-sm font-bold text-amber-500">الحضرمية</p>
                  </div>
                  <div className="rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-3 py-2">
                    <p className="text-sm font-bold text-amber-500">القتبانية</p>
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
            className="mt-12 max-w-2xl"
          >
            <div className="rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-6">
              <div className="flex items-start gap-3">
                <PenLine className="h-5 w-5 text-amber-500 shrink-0 mt-1" />
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  <span className="font-bold text-stone-900 dark:text-white">
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
