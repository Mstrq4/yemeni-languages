"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/lesson/1", label: "الدرس الأول" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-stone-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <ScrollText className="h-7 w-7 text-amber-500" />
            <span className="font-amiri text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
              اللغات اليمنية القديمة
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-2 sm:gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm sm:text-base font-medium transition-colors ${
                    isActive
                      ? "text-amber-500"
                      : "text-stone-600 dark:text-stone-300 hover:text-amber-500"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-amber-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
