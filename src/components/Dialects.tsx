"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Landmark } from "lucide-react";
import { dialects } from "@/lib/data";

export default function Dialects() {
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
              اللهجات الأربع
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            أربع لهجات تفرّعت من اللغة اليمنية القديمة، لكلٍّ منها مملكتها ومنطقة
            نفوذها
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dialects.map((dialect, idx) => (
            <motion.div
              key={dialect.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-6 hover:border-amber-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-amiri text-xl font-bold text-amber-500">
                    {dialect.name}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {dialect.kingdom}
                  </p>
                </div>
                <div className="rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-2">
                  <Landmark className="h-5 w-5 text-amber-500" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  {dialect.region}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                  <Calendar className="h-4 w-4 text-amber-500" />
                  {dialect.period}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {dialect.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
