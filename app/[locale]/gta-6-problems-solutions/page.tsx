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
  const t = await getTranslations("ProblemsSolutions");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions",
      languages: {
        fr: "/problemes-gta-6-solutions",
        en: "/en/gta-6-problems-solutions",
      },
    },
    keywords: t.raw("metaKeywords"),
    openGraph: {
      title: `${t("metaTitle")} | ${siteName}`,
      description: t("metaDescription"),
      url: isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const accentColor = {
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  teal: "text-accent-teal",
  gold: "text-yellow-400",
};

const accentBorder = {
  primary: "border-accent-primary/20",
  sunset: "border-accent-sunset/20",
  teal: "border-accent-teal/20",
  gold: "border-yellow-400/20",
};

const accentBg = {
  primary: "card-base",
  sunset: "card-base",
  teal: "card-base",
  gold: "card-base",
};

const categoryAccents = ["primary", "sunset", "teal", "gold"] as const;

export default async function ProblemesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ProblemsSolutions");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions";

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
            { name: t("breadcrumbName"), url: `${BASE_URL}${canonicalPath}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title="GTA 6 —"
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              {t.rich("notice", {
                strong: (chunks) => <strong className="text-accent-teal">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        {/* Minimum requirements */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5">
            {t("specsTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-3">{t("specs.minimum.title")}</h3>
              <ul className="text-sm text-text-secondary space-y-1.5">
                {(["0", "1", "2", "3", "4"] as const).map((i) => (
                  <li key={i} className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> {t(`specs.minimum.items.${i}`)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">{t("specs.recommended.title")}</h3>
              <ul className="text-sm text-text-secondary space-y-1.5">
                {(["0", "1", "2", "3", "4"] as const).map((i) => (
                  <li key={i} className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> {t(`specs.recommended.items.${i}`)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-surface-muted rounded text-xs text-text-muted">
            {t.rich("specs.consoles", { strong: (chunks) => <strong className="text-accent-teal">{chunks}</strong> })}
          </div>
        </div>

        {/* Problem categories */}
        {(["0", "1", "2", "3"] as const).map((catIdx, i) => {
          const accent = categoryAccents[i];
          return (
            <div key={catIdx} className="mb-10">
              <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[accent]} mb-5 border-b border-border/50 pb-2`}>
                {t(`categories.${catIdx}.title`)}
              </h2>
              <div className="space-y-4">
                {(["0", "1", "2"] as const).map((probIdx) => (
                  <div key={probIdx} className={`${accentBg[accent]} p-5 border ${accentBorder[accent]}`} data-plate="primary">
                    <h3 className="font-semibold text-text-primary mb-2">{t(`categories.${catIdx}.problems.${probIdx}.name`)}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{t("causeLabel")}</p>
                        <p className="text-sm text-text-secondary">{t(`categories.${catIdx}.problems.${probIdx}.cause`)}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{t("fixLabel")}</p>
                        <p className="text-sm text-text-secondary">{t(`categories.${catIdx}.problems.${probIdx}.fix`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
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
          <Link href={isEn ? "/en/news" : "/actualites"} className="text-accent-primary hover:underline">
            {t("newsLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}