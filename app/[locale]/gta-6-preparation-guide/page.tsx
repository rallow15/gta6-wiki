import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Gamepad2, Package, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
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
  const t = await getTranslations("Gta6PreparationGuide");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-6-preparation-guide" : "/guide-preparation-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/guide-preparation-gta-6",
        en: "/en/gta-6-preparation-guide",
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

const sectionIcons: Record<string, React.ReactNode> = {
  "0": <Monitor className="h-5 w-5 shrink-0" />,
  "1": <Gamepad2 className="h-5 w-5 shrink-0" />,
  "2": <Package className="h-5 w-5 shrink-0" />,
  "3": <Calendar className="h-5 w-5 shrink-0" />,
};

const accentColor = {
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  teal: "text-accent-teal",
  gold: "text-yellow-400",
};

const sectionAccents = ["primary", "sunset", "teal", "gold"] as const;

export default async function PreparationGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Gta6PreparationGuide");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-6-preparation-guide" : "/guide-preparation-gta-6";

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
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        {/* Notice */}
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              {t.rich("notice", {
                strong: (chunks) => <strong className="text-accent-teal">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        {/* Sections */}
        {(["0", "1", "2", "3"] as const).map((sectionIdx, i) => {
          const accent = sectionAccents[i];
          return (
            <div key={sectionIdx} className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                {sectionIcons[sectionIdx]}
                <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[accent]} border-b border-border/50 pb-2 flex-1`}>
                  {t(`sections.${sectionIdx}.title`)}
                </h2>
              </div>
              <div className="space-y-3">
                {(["0", "1", "2", "3", "4"] as const).filter(j => {
                  try { t(`sections.${sectionIdx}.items.${j}.label`); return true; } catch { return false; }
                }).map((itemIdx) => (
                  <div key={itemIdx} className="card-base p-5" data-plate={accent}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-teal" />
                      <div>
                        <h3 className="font-semibold text-text-primary">{t(`sections.${sectionIdx}.items.${itemIdx}.label`)}</h3>
                        <p className="mt-1 text-sm text-text-muted">{t(`sections.${sectionIdx}.items.${itemIdx}.desc`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Quick links */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("linksTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href={isEn ? "/en/cheat-codes-gta-6" : "/code-triche-gta-6"} className="card-base p-4 group flex items-center gap-3" data-plate="primary">
              <Gamepad2 className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{t("links.cheatCodes.title")}</h3>
                <p className="text-xs text-text-muted">{t("links.cheatCodes.desc")}</p>
              </div>
            </Link>
            <Link href={isEn ? "/en/release-date-gta-6" : "/date-de-sortie-gta-6"} className="card-base p-4 group flex items-center gap-3" data-plate="primary">
              <Calendar className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{t("links.releaseDate.title")}</h3>
                <p className="text-xs text-text-muted">{t("links.releaseDate.desc")}</p>
              </div>
            </Link>
          </div>
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
      </SectionPage>
    </>
  );
}