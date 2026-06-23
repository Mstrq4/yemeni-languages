import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100/80 dark:bg-[#030712]/80 backdrop-blur-xl border-t border-stone-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif text-amber-500 dark:text-amber-400">𐩣</span>
              <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50">لغات يمنية</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              منصة تعليمية لإحياء المعرفة باللغة اليمنية القديمة وخط المسند
            </p>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50 mb-3 sm:mb-4">فريق العمل</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                د. هديل الصلوي — إشراف علمي
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                يوسف الدرعي — إعداد
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50 mb-3 sm:mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/lesson/1" className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  الدرس الأول: حروف المسند
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-stone-200 dark:border-white/10">
          <p className="text-center text-xs text-stone-400 dark:text-stone-500">
            © 2026 لغات يمنية — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
