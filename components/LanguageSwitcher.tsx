"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // Type assertion needed because pathname can include dynamic segments
    // that don't match the strict next-intl Pathname type
    router.replace(pathname as any, { locale: newLocale as any });
  };

  return (
    <div className="flex items-center rounded-lg border border-border/50 overflow-hidden">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
            locale === loc
              ? "bg-neon-pink text-white"
              : "text-text-muted hover:text-text-primary hover:bg-surface-muted"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}