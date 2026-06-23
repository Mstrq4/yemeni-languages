import { ScrollText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-black/40 border-t border-stone-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="h-6 w-6 text-amber-500" />
              <span className="font-amiri text-lg font-bold text-stone-900 dark:text-white">
                اللغات اليمنية القديمة
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              منصة تعليمية تهدف إلى إحياء المعرفة باللغة اليمنية القديمة وخط المسند،
              وتعريف الأجيال بحضارة اليمن العريقة.
            </p>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-amiri text-base font-bold text-stone-900 dark:text-white mb-4">
              فريق العمل
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                د. هديل الصلوي — إشراف علمي
              </li>
              <li className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                يوسف الدرعي — إعداد
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-amiri text-base font-bold text-stone-900 dark:text-white mb-4">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
                >
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="/lesson/1"
                  className="text-sm text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
                >
                  الدرس الأول: حروف المسند
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 dark:border-white/10">
          <p className="text-center text-xs text-stone-400 dark:text-stone-500">
            © 2026 اللغات اليمنية القديمة — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
