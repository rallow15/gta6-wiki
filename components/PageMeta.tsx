"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ShieldCheck, CalendarDays, Info } from "lucide-react";

interface PageMetaProps {
  /** ISO date displayed as "Last updated". */
  lastUpdated: string;
  /** Optional: show the editorial methodology link. */
  showMethodology?: boolean;
  /** Optional extra note shown below the date. */
  note?: string;
}

export default function PageMeta({ lastUpdated, showMethodology = true, note }: PageMetaProps) {
  const t = useTranslations("PageMeta");

  return (
    <div className="mb-8 space-y-3">
      <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-lagoon-cyan/30 bg-lagoon-cyan/10 text-lagoon-cyan font-semibold uppercase tracking-wider">
          <ShieldCheck className="h-3.5 w-3.5" />
          {t("fanSite")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {t("lastUpdated")} {lastUpdated}
        </span>
      </div>

      {showMethodology && (
        <div className="nb-card-cyan nb-press p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" />
            <div className="text-sm text-text-secondary">
              <p className="mb-1">{t("methodology")}</p>
              <Link
                href="/about"
                className="text-lagoon-cyan hover:underline underline-offset-4 decoration-1 font-semibold"
              >
                {t("aboutLink")} →
              </Link>
            </div>
          </div>
        </div>
      )}

      {note && (
        <div className="text-sm text-text-secondary italic border-l-2 border-neon-pink/40 pl-3">
          {note}
        </div>
      )}
    </div>
  );
}
