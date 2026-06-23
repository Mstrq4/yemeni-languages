"use client";

import { motion } from "framer-motion";
import { timelinePeriods } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-stone-50 dark:bg-[#030712]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              الخط الزمني
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            أبرز المحطات في تاريخ اللغة اليمنية القديمة وممالكها
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-1/2 md:translate-x-[-50%] top-0 bottom-0 w-px bg-stone-200 dark:bg-white/10" />

          {timelinePeriods.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-6 sm:mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-1/2 md:translate-x-[-50%] z-10">
                <div className="h-4 w-4 rounded-full bg-amber-500 border-4 border-stone-50 dark:border-[#030712]" />
              </div>
              {/* Card */}
              <div className="w-full md:w-1/2 pr-10 md:pr-0 md:pl-10">
                <div className={`rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 p-4 sm:p-5 shadow-sm ${i % 2 === 0 ? "md:ml-10" : "md:mr-10"}`}>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-500">{item.period}</span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50 mt-1 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">{item.description}</p>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
