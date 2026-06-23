"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Pen, Repeat, ChevronLeft, ChevronRight } from "lucide-react";
import FlipCard from "./FlipCard";
import { musnadLetters, letterGroups, musnadWords, musnadSentences } from "@/lib/data";

type Mode = "letters" | "words" | "sentences";

export default function LessonClient() {
  const [mode, setMode] = useState<Mode>("letters");
  const [group, setGroup] = useState<string>("أساسية");
  const [page, setPage] = useState(0);

  const perPage = mode === "letters" ? 12 : mode === "words" ? 12 : 4;

  const items: any[] =
    mode === "letters"
      ? musnadLetters.filter((l: any) => (l as any).group === group)
      : mode === "words"
      ? musnadWords as any[]
      : musnadSentences as any[];

  const totalPages = Math.ceil(items.length / perPage);
  const current = items.slice(page * perPage, (page + 1) * perPage);

  const modes = [
    { key: "letters" as Mode, label: "الحروف", icon: BookOpen },
    { key: "words" as Mode, label: "الكلمات", icon: Pen },
    { key: "sentences" as Mode, label: "الجمل", icon: Repeat },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#030712] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              تعلم الخط المسند
            </span>
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-300">
            اضغط على البطاقة لترى المقابل بالعربية
          </p>
        </div>

        {/* Mode Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.key}
                onClick={() => { setMode(m.key); setPage(0); }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  mode === m.key
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                    : "bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500"
                }`}
              >
                <Icon className="h-4 w-4" />
                {m.label}
              </button>
            );
          })}
        </div>

        {/* Letter Groups */}
        {mode === "letters" && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(letterGroups).map((g) => (
              <button
                key={g}
                onClick={() => { setGroup(g); setPage(0); }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  group === g
                    ? "bg-amber-500 text-white"
                    : "bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${group}-${page}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`grid gap-3 sm:gap-4 ${
              mode === "sentences"
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            }`}
          >
            {current.map((item: any, i: number) => (
              <FlipCard
                key={i}
                front={item.musnad}
                back={item.arabic}
                subBack={item.meaning || item.source}
                frontSize={mode === "sentences" ? "text-xl sm:text-2xl md:text-3xl" : "text-5xl sm:text-6xl"}
                backSize={mode === "sentences" ? "text-base sm:text-lg" : "text-2xl sm:text-3xl"}
                wide={mode === "sentences"}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="p-2 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500 transition-colors disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="text-sm text-stone-500 dark:text-stone-400">{page + 1} / {totalPages}</span>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500 transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
