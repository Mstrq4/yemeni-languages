import type { Metadata } from "next";

// Local fonts via @fontsource — no CDN, no next/font/google
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/700.css";

import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "لغات يمنية | Ancient Yemeni Languages",
  description:
    "منصة تعليمية عن اللغة اليمنية القديمة وخط المسند — تعلّم الحروف والكلمات والنقوش الأصلية",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-stone-50 dark:bg-[#030712] font-sans text-stone-900 dark:text-stone-50 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
