import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Secrets");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: isEn ? "/en/secrets-easter-eggs-gta-6" : "/secrets-easter-eggs-gta-6",
      languages: {
        fr: "/secrets-easter-eggs-gta-6",
        en: "/en/secrets-easter-eggs-gta-6",
      },
    },
    keywords: t.raw("metaKeywords"),
    openGraph: {
      title: `${t("metaTitle")} | ${siteName}`,
      description: t("metaDescription"),
      url: isEn ? "/en/secrets-easter-eggs-gta-6" : "/secrets-easter-eggs-gta-6",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const accentColor: Record<string, string> = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentBorder: Record<string, string> = {
  teal: "border-accent-teal/30",
  primary: "border-accent-primary/30",
  sunset: "border-accent-sunset/30",
  gold: "border-yellow-400/30",
};

const categoryKeys = ["viceCity", "rdr", "leonida", "hidden"] as const;
const categoryAccents = ["teal", "sunset", "primary", "gold"] as const;

export default async function SecretsEasterEggsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Secrets");
  const isEn = locale === "en";

  const lieuxPath = isEn ? "/locations" : "/lieux";
  const statusBadge = t.raw("statusBadge") as Record<string, string>;

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
    { question: t("faqs.3.question"), answer: t("faqs.3.answer") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t("breadcrumbHome"), url: BASE_URL },
            { name: t("breadcrumbName"), url: `${BASE_URL}/secrets-easter-eggs-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/secrets-easter-eggs-gta-6`),
        ]}
      />
      <SectionPage
        title="SECRETS & EASTER EGGS"
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="gold">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              {t.rich("notice", {
                strong: (chunks) => <strong className="text-accent-teal">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        {categoryKeys.map((catKey, i) => {
          const accent = categoryAccents[i];
          const itemIndices = ["0", "1", "2", "3"] as const;
          return (
            <div key={catKey} className="mb-10">
              <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[accent]} mb-5 border-b border-border/50 pb-2`}>
                {t(`categories.${catKey}.title`)}
              </h2>
              <div className="space-y-3">
                {itemIndices.filter(j => {
                  try { t(`categories.${catKey}.items.${j}.name`); return true; } catch { return false; }
                }).map((j) => {
                  const status = t(`categories.${catKey}.items.${j}.status`);
                  return (
                    <div key={j} className={`card-base p-5 border ${accentBorder[accent]}`} data-plate="gold">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold text-text-primary">{t(`categories.${catKey}.items.${j}.name`)}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border shrink-0 ${statusBadge[status] ?? ""}`}>
                          {status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-text-muted">{t(`categories.${catKey}.items.${j}.desc`)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Leaks & theories */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="gold">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("theoriesTitle")}
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            {(["0", "1", "2", "3"] as const).map((idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
                <span><strong className="text-text-primary">{t(`theories.${idx}.title`)}</strong> — {t(`theories.${idx}.desc`)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="gold">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("faqTitle")}
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-text-primary mb-1">{f.question}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href={lieuxPath} className="text-accent-primary hover:underline">
            {t("allLocationsLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}