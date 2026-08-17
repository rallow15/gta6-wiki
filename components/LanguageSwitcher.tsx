"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, string> = {
  fr: "Français",
  en: "English",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: string) => {
    setOpen(false);
    if (newLocale === locale) return;
    // Type assertion needed because pathname can include dynamic segments
    // that don't match the strict next-intl Pathname type
    router.replace(pathname as any, { locale: newLocale as any });
  };

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", onDocClick);
      return () => document.removeEventListener("mousedown", onDocClick);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={locale === "en" ? "Change language" : "Changer de langue"}
        className="inline-flex items-center gap-1.5 border-2 border-lagoon-cyan/60 hover:border-lagoon-cyan text-lagoon-cyan px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
      >
        {locale.toUpperCase()}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 mt-2 min-w-[8.5rem] border-2 border-neon-pink bg-deep-bg shadow-[4px_4px_0_0_var(--color-lagoon-cyan)] p-1 z-50"
          >
            {routing.locales.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === loc}
                  onClick={() => switchLocale(loc)}
                  className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between gap-2 ${
                    locale === loc
                      ? "bg-neon-pink text-white"
                      : "text-text-secondary hover:text-neon-pink hover:bg-neon-pink/10"
                  }`}
                >
                  {LABELS[loc] ?? loc.toUpperCase()}
                  <span className="opacity-70">{loc.toUpperCase()}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}