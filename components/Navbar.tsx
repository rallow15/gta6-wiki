"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navItems: { href: string; labelFr: string; labelEn: string }[] = [
  { href: "/codes", labelFr: "Codes", labelEn: "Cheats" },
  { href: "/vehicles", labelFr: "Véhicules", labelEn: "Vehicles" },
  { href: "/weapons", labelFr: "Armes", labelEn: "Weapons" },
  { href: "/characters", labelFr: "Personnages", labelEn: "Characters" },
  { href: "/locations", labelFr: "Lieux", labelEn: "Locations" },
  { href: "/gallery", labelFr: "Galerie", labelEn: "Gallery" },
  { href: "/news", labelFr: "Actus", labelEn: "News" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const logoText = locale === "en" ? "CHEAT CODES" : "CODE TRICHE";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neon-pink/10 bg-deep-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/images/logo/logo-icon.png"
              alt="GTA 6 CodeTriche"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,46,154,0.6)]"
            />
            <span className="font-display text-lg sm:text-xl tracking-wider text-text-primary transition-all group-hover:text-neon-pink">
              {logoText}
              <span className="text-neon-pink"> GTA6</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-neon-pink rounded-lg hover:bg-neon-pink/5"
              >
                {locale === "en" ? item.labelEn : item.labelFr}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-neon-pink"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neon-pink/10 bg-deep-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-neon-pink hover:bg-neon-pink/5 rounded-lg transition-colors"
                >
                  {locale === "en" ? item.labelEn : item.labelFr}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}