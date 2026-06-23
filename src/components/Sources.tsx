"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Scroll,
  BookOpen,
  Library,
  BookText,
  type LucideIcon,
} from "lucide-react";
import { sources } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Scroll,
  BookOpen,
  Library,
  BookText,
};

export default function Sources() {
  return (
    <section className="py-20 sm:py-28 bg-stone-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              مصادر المعرفة
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            خمس مصادر رئيسية تُغذّي معرفتنا باللغة اليمنية القديمة وحضارة اليمن
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sources.map((source, idx) => {
            const Icon = iconMap[source.icon] || BookOpen;
            return (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-6 hover:border-amber-500 transition-colors flex flex-col"
              >
                {/* Number badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-3 group-hover:border-amber-500 transition-colors">
                    <Icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <span className="font-amiri text-2xl font-bold text-stone-300 dark:text-white/10">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="font-amiri text-lg font-bold text-stone-900 dark:text-white mb-2">
                  {source.title}
                </h3>

                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300 flex-1">
                  {source.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
