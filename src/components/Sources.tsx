"use client";

import { motion } from "framer-motion";
import { Landmark, Scroll, BookOpen, Library, BookText } from "lucide-react";
import { sources } from "@/lib/data";

const iconMap: Record<string, any> = {
  Landmark, Scroll, BookOpen, Library, BookText,
};

export default function Sources() {
  return (
    <section id="sources" className="py-16 sm:py-20 md:py-28 bg-stone-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              مصادر المعرفة
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            خمس مصادر رئيسية تُغذّي معرفتنا باللغة اليمنية القديمة وحضارة اليمن
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {sources.map((s: any, i: number) => {
            const Icon = iconMap[s.icon] || BookOpen;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 p-5 sm:p-6 hover:border-amber-500 transition-colors flex flex-col shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-3 group-hover:border-amber-500 transition-colors">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 dark:text-amber-400" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-stone-300 dark:text-white/10">{i + 1}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50 mb-2">{s.title}</h3>
                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300 flex-1">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
