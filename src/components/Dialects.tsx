"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Landmark } from "lucide-react";
import { dialects } from "@/lib/data";

export default function Dialects() {
  return (
    <section
      id="dialects"
      className="py-16 sm:py-20 md:py-28 bg-stone-50 dark:bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              اللهجات الأربع
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            أربع لهجات تفرّعت من اللغة اليمنية القديمة، لكلٍّ منها مملكتها ومنطقة
            نفوذها
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {dialects.map((dialect, idx) => (
            <motion.div
              key={dialect.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 p-5 sm:p-6 hover:border-amber-500 transition-colors shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-500">
                    {dialect.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {dialect.kingdom}
                  </p>
                </div>
                <div className="rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-2 shrink-0">
                  <Landmark className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                  <MapPin className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0" />
                  {dialect.region}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                  <Calendar className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0" />
                  {dialect.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {dialect.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
