import type { Metadata } from "next";
import Link from "next/link";
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
  const t = await getTranslations("Codes");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/codes" : "/codes";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: { fr: "/codes", en: "/en/codes" },
    },
    keywords: t.raw("metaKeywords"),
    openGraph: {
      title: `${t("metaTitle")} | ${siteName}`,
      description: t("metaDescription"),
      url: canonicalPath,
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

export default async function CodesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Codes");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/codes" : "/codes";
  const cheatLink = isEn ? "/en/cheat-codes-gta-6" : "/code-triche-gta-6";

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
            <svg
              className="h-5 w-5 text-accent-teal shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{t("noticeStrong")}</strong>{" "}
              {t("noticeRest")}
            </p>
          </div>
        </div>

        {/* Link to full cheat codes page */}
        <div className="mb-10">
          <Link
            href={cheatLink}
            className="block card-base p-6 group hover:border-accent-primary/40 transition-colors"
            data-plate="primary"
          >
            <h2 className="font-display font-bold text-xl tracking-tight text-accent-primary group-hover:text-accent-teal transition-colors mb-2">
              {t("linkToFullPage")}
            </h2>
            <p className="text-sm text-text-secondary">{t("linkToFullPageDesc")}</p>
          </Link>
        </div>

        {/* How cheats will work */}
        <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
          {t("howItWorksTitle")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {(["0", "1", "2"] as const).map((i) => (
            <div key={i} className="card-base p-5" data-plate="primary">
              <span className="text-2xl mb-2 block">{t(`platforms.${i}.icon`)}</span>
              <h3 className="font-display font-bold text-lg tracking-tight text-accent-primary mb-2">
                {t(`platforms.${i}.name`)}
              </h3>
              <p className="text-sm text-text-secondary">{t(`platforms.${i}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* Categories preview */}
        <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
          {t("categoriesTitle")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {(["0", "1", "2", "3"] as const).map((i) => (
            <div key={i} className="card-base p-5" data-plate="primary">
              <span className="text-xl mb-1 block">{t(`categories.${i}.icon`)}</span>
              <h3 className="font-semibold text-text-primary">{t(`categories.${i}.name`)}</h3>
              <p className="text-sm text-text-muted">{t(`categories.${i}.desc`)}</p>
            </div>
          ))}
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
          <Link href={cheatLink} className="text-accent-primary hover:underline">{t("allCheatCodesLink")}</Link>
        </div>
      </SectionPage>
    </>
  );
}