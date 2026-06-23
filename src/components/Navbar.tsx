"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "عن اللغة" },
  { href: "/#dialects", label: "اللهجات" },
  { href: "/#sources", label: "المصادر" },
  { href: "/lesson/1", label: "الدرس الأول" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    if (href.startsWith("/lesson")) return pathname.startsWith("/lesson");
    return false;
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-stone-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* SVG logo */}
            <svg
              viewBox="0 0 100 100"
              className="h-8 w-8 sm:h-9 sm:w-9 shrink-0"
              aria-hidden="true"
            >
              <rect width="100" height="100" rx="20" fill="currentColor" className="text-amber-500" />
              <text
                x="50"
                y="68"
                fontSize="60"
                textAnchor="middle"
                fill="#030712"
                fontFamily="serif"
              >
                𐩣
              </text>
            </svg>
            <span className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50">
              لغات يمنية
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-colors rounded-lg ${
                    active
                      ? "text-amber-600 dark:text-amber-500"
                      : "text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-2 -bottom-px h-0.5 bg-amber-500 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="mr-2 lg:mr-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: hamburger + theme toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="h-10 w-10 rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:border-amber-500 transition-colors"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-stone-200 dark:border-white/10 bg-white/90 dark:bg-[#030712]/90 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-500"
                        : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
