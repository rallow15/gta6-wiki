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
      <div className="text-center max-w-md nb-card p-8">
        <h1 className="font-display text-6xl mb-4">
          <span className="neon-text text-neon-pink">Error</span>
        </h1>
        <p className="text-text-secondary mb-8">
          Something went wrong. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="nb-btn justify-center px-6 py-3 text-sm font-bold"
          >
            Try again
          </button>
          <Link
            href="/"
            className="nb-btn-ghost justify-center px-6 py-3 text-sm font-semibold"
          >
            {t("homeLink")}
          </Link>
        </div>
      </div>
    </div>
  );
}