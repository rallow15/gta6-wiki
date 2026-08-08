"use client";

import { useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-deep-bg">
      <div className="text-center max-w-md">
        <h1 className="font-display text-6xl mb-4">
          <span className="neon-text text-neon-pink">Error</span>
        </h1>
        <p className="text-text-secondary mb-8">
          Something went wrong. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="neon-pulse-btn inline-flex items-center justify-center gap-2 rounded-lg bg-neon-pink px-6 py-3 text-sm font-bold text-white shadow-lg shadow-neon-pink/25 transition-all hover:shadow-neon-pink/40 hover:scale-105"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-lagoon-cyan/30 px-6 py-3 text-sm font-semibold text-lagoon-cyan transition-all hover:border-lagoon-cyan/60 hover:bg-lagoon-cyan/5"
          >
            {t("homeLink")}
          </Link>
        </div>
      </div>
    </div>
  );
}