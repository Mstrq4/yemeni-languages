"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Type,
  BookOpen,
  AlignRight,
  ChevronRight,
  ChevronLeft,
  Layers,
} from "lucide-react";
import FlipCard from "./FlipCard";
import {
  musnadLetters,
  musnadWords,
  musnadSentences,
  letterGroups,
} from "@/lib/data";

type Mode = "letters" | "words" | "sentences";

const modes: { id: Mode; label: string; icon: typeof Type }[] = [
  { id: "letters", label: "الحروف", icon: Type },
  { id: "words", label: "الكلمات", icon: BookOpen },
  { id: "sentences", label: "الجمل", icon: AlignRight },
];

const ITEMS_PER_PAGE = 12;

export default function LessonClient() {
  const [mode, setMode] = useState<Mode>("letters");
  const [page, setPage] = useState(0);
  const [letterGroup, setLetterGroup] = useState<string | null>(null);

  // Filter letters by group
  const filteredLetters = useMemo(() => {
    if (!letterGroup) return musnadLetters;
    return musnadLetters.filter((l) => l.group === letterGroup);
  }, [letterGroup]);

  // Get current data
  const currentData = useMemo(() => {
    if (mode === "letters") return filteredLetters;
    if (mode === "words") return musnadWords;
    return musnadSentences;
  }, [mode, filteredLetters]);

  // Paginate
  const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(page, totalPages - 1);
  const paginatedData = currentData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setLetterGroup(null);
    setPage(0);
  };

  const handleGroupChange = (group: string | null) => {
    setLetterGroup(group);
    setPage(0);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#030712] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-amiri text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-l from-amber-400 to-amber-600 bg-clip-text text-transparent">
              الدرس الأول: حروف المسند
            </span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            تعلّم حروف المسند بالبطاقات القابلة للقلب — اقرأ الحرف بالمسند ثم اضغط
            للتحقق من قراءتك
          </p>
        </div>

        {/* Mode tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {modes.map((m) => {
            const Icon = m.icon;
            const isActive = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => handleModeChange(m.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-500 text-white"
                    : "bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500"
                }`}
              >
                <Icon className="h-4 w-4" />
                {m.label}
              </button>
            );
          })}
        </div>

        {/* Letter group filter (only for letters mode) */}
        {mode === "letters" && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => handleGroupChange(null)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                !letterGroup
                  ? "bg-amber-500 text-white"
                  : "bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              الكل
            </button>
            {Object.entries(letterGroups).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleGroupChange(key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  letterGroup === key
                    ? "bg-amber-500 text-white"
                    : "bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500"
                }`}
              >
                {label}
                <span className="mr-1.5 text-stone-400 dark:text-stone-500">
                  ({musnadLetters.filter((l) => l.group === key).length})
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${letterGroup}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8"
          >
            {paginatedData.map((item, idx) => {
              if (mode === "letters") {
                const letter = item as (typeof musnadLetters)[0];
                return (
                  <FlipCard
                    key={`${mode}-${idx}`}
                    front={letter.musnad}
                    back={letter.arabic}
                    fontSize="text-5xl"
                  />
                );
              }
              if (mode === "words") {
                const word = item as (typeof musnadWords)[0];
                return (
                  <FlipCard
                    key={`${mode}-${idx}`}
                    front={word.musnad}
                    back={word.arabic}
                    subBack={word.meaning}
                    fontSize="text-3xl"
                  />
                );
              }
              const sentence = item as (typeof musnadSentences)[0];
              return (
                <div
                  key={`${mode}-${idx}`}
                  className="col-span-2 sm:col-span-3 md:col-span-4"
                >
                  <FlipCard
                    front={sentence.musnad}
                    back={sentence.arabic}
                    subBack={sentence.source}
                    fontSize="text-2xl"
                  />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
              السابق
            </button>

            <span className="text-sm text-stone-500 dark:text-stone-400">
              صفحة {currentPage + 1} من {totalPages}
            </span>

            <button
              onClick={() => setPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-amber-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              التالي
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Info note */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 p-5">
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed text-center">
              <span className="font-bold text-amber-500">طريقة الاستخدام:</span>{" "}
              اقرأ الحرف أو الكلمة بالمسند من الواجهة الأمامية، ثم اضغط على البطاقة
              لقلبها والتحقق من قراءتك الصحيحة بالعربية
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
