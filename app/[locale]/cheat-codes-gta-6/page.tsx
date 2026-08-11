import type { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, Clock, Shield, AlertTriangle } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("CheatCodes");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/cheat-codes-gta-6" : "/code-triche-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/code-triche-gta-6",
        en: "/en/cheat-codes-gta-6",
      },
    },
    keywords: t.raw("metaKeywords"),
    openGraph: {
      title: `${t("metaTitle")} | ${siteName}`,
      description: t("metaDescription"),
      url: canonicalPath,
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

export default async function CheatCodesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("CheatCodes");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/cheat-codes-gta-6" : "/code-triche-gta-6";
  const codesPath = isEn ? "/en/codes" : "/codes";

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
    { question: t("faqs.3.question"), answer: t("faqs.3.answer") },
    { question: t("faqs.4.question"), answer: t("faqs.4.answer") },
    { question: t("faqs.5.question"), answer: t("faqs.5.answer") },
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
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        {/* Release notice */}
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{t("noticeStrong")}</strong> {t("noticeRest")}
            </p>
          </div>
        </div>

        {/* History section — GTA cheat codes through the years */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5">
            {t("historyTitle")}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {t("historyIntro")}
          </p>
          <div className="space-y-4">
            {(["0", "1", "2", "3"] as const).map((i) => (
              <div key={i} className="flex items-start gap-3 border-b border-border/30 pb-3 last:border-0">
                <span className="font-display text-lg text-accent-teal shrink-0">{t(`historyGames.${i}.year`)}</span>
                <div>
                  <h3 className="font-semibold text-text-primary">{t(`historyGames.${i}.title`)}</h3>
                  <p className="text-sm text-text-muted">{t(`historyGames.${i}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What we expect in GTA 6 */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("expectTitle")}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {t("expectIntro")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {(["0", "1", "2", "3"] as const).map((i) => (
              <div key={i} className="card-base p-5 border border-accent-sunset/20" data-plate="sunset">
                <h3 className="font-semibold text-text-primary mb-1">{t(`expectCategories.${i}.name`)}</h3>
                <p className="text-sm text-text-muted">{t(`expectCategories.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How cheats work in GTA */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="teal">
          <h2 className="font-display font-bold text-2xl tracking-tight text-lagoon-cyan mb-5">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {t("howItWorksIntro")}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {(["0", "1", "2"] as const).map((i) => (
              <div key={i} className="card-base p-5 border border-lagoon-cyan/20">
                <Gamepad2 className="h-5 w-5 text-lagoon-cyan mb-2" />
                <h3 className="font-semibold text-text-primary mb-1">{t(`howItWorksPlatforms.${i}.name`)}</h3>
                <p className="text-sm text-text-muted">{t(`howItWorksPlatforms.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GTA Online warning */}
        <div className="mb-10 card-base p-6 border-accent-sunset/20" data-plate="sunset">
          <h3 className="font-display font-bold text-lg tracking-tight text-accent-sunset mb-3">
            <AlertTriangle className="inline h-5 w-5 mr-1 -mt-0.5" /> {t("onlineWarningTitle")}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {(["0", "1", "2"] as const).map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
                <span>{t(`onlineWarningItems.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important notes */}
        <div className="mb-10 card-base p-6 border-accent-primary/20" data-plate="primary">
          <h3 className="font-display font-bold text-lg tracking-tight text-accent-primary mb-3">
            <Shield className="inline h-5 w-5 mr-1 -mt-0.5" /> {t("importantTitle")}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {(["0", "1", "2", "3"] as const).map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-primary mt-0.5">&#x25B8;</span>
                <span>{t(`importantItems.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>

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
          <Link href={codesPath} className="text-accent-primary hover:underline">{t("codesHubLink")}</Link>
        </div>
      </SectionPage>
    </>
  );
}