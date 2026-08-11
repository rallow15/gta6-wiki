import type { Metadata } from "next";
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
  const t = await getTranslations("Gta5Vs6Comparison");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-5-vs-gta-6-comparison" : "/comparaison-gta-5-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/comparaison-gta-5-gta-6",
        en: "/en/gta-5-vs-gta-6-comparison",
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

const accentColor = {
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  teal: "text-accent-teal",
  gold: "text-yellow-400",
};

export default async function Gta5Vs6ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Gta5Vs6Comparison");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-5-vs-gta-6-comparison" : "/comparaison-gta-5-gta-6";

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
        {/* Intro */}
        <div className="mb-8 card-base p-6 sm:p-8" data-plate="primary">
          <p className="text-text-secondary leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Comparison sections */}
        {(["0", "1", "2", "3", "4"] as const).map((i) => {
          const accents = ["primary", "sunset", "teal", "gold", "primary"] as const;
          const accent = accents[parseInt(i)];
          return (
            <div key={i} className="mb-10">
              <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[accent]} mb-5 border-b border-border/50 pb-2`}>
                {t(`sections.${i}.title`)}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(["gta5", "gta6"] as const).map((game) => (
                  <div key={game} className={`card-base p-5 ${game === "gta6" ? "border border-accent-primary/30" : ""}`} data-plate={accent}>
                    <h3 className={`font-semibold text-text-primary mb-2 ${game === "gta6" ? "text-accent-primary" : ""}`}>
                      {t(`sections.${i}.${game}Label`)}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {t(`sections.${i}.${game}Text`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Verdict */}
        <div className="mb-10 card-base p-6 sm:p-8 border-accent-primary/30" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-4">
            {t("verdictTitle")}
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {t("verdictText")}
          </p>
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