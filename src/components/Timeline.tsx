"use client";

import { motion } from "framer-motion";
import { timelinePeriods } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="py-20 sm:py-28 bg-stone-50 dark:bg-[#030712]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              الخط الزمني
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            أبرز المحطات في تاريخ اللغة اليمنية القديمة وممالكها
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-1/2 md:translate-x-0 md:translate-x-[-50%] top-0 bottom-0 w-px bg-stone-200 dark:bg-white/10" />

          {timelinePeriods.map((item, idx) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center mb-8 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-1/2 md:translate-x-[-50%] z-10">
                <div className="h-4 w-4 rounded-full bg-amber-500 border-4 border-stone-50 dark:border-[#030712]" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 pr-10 md:pr-0 md:pl-10">
                <div
                  className={`rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-5 ${
                    idx % 2 === 0 ? "md:ml-10" : "md:mr-10"
                  }`}
                >
                  <span className="text-xs font-bold text-amber-500">
                    {item.period}
                  </span>
                  <h3 className="font-amiri text-lg font-bold text-stone-900 dark:text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
