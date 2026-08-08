import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  const t = await getTranslations("ReleaseDate");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/release-date-gta-6" : "/date-de-sortie-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/date-de-sortie-gta-6",
        en: "/en/release-date-gta-6",
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

export default async function DateSortiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ReleaseDate");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/release-date-gta-6" : "/date-de-sortie-gta-6";

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
        {/* Release date highlight */}
        <div className="mb-8 neon-glow-card-cyan p-6 sm:p-8 text-center">
          <p className="text-sm uppercase tracking-widest text-text-muted mb-2">
            {t("releaseDateLabel")}
          </p>
          <p className="font-display text-3xl sm:text-5xl tracking-wider text-lagoon-cyan neon-text-cyan">
            {t("releaseDateValue")}
          </p>
          <p className="mt-3 text-text-secondary">
            PlayStation 5 · Xbox Series X|S · PC
          </p>
        </div>

        {/* Timeline of delays */}
        <div className="mb-10 glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-neon-pink mb-5">
            {t("timelineTitle")}
          </h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="shrink-0 w-24 text-sm font-semibold text-sunset-orange">
                {t("timeline.0.date")}
              </span>
              <div>
                <p className="text-text-primary font-semibold">
                  {t("timeline.0.title")}
                </p>
                <p className="text-sm text-text-muted">
                  {t("timeline.0.desc")}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-24 text-sm font-semibold text-sunset-orange">
                {t("timeline.1.date")}
              </span>
              <div>
                <p className="text-text-primary font-semibold">
                  {t("timeline.1.title")}
                </p>
                <p className="text-sm text-text-muted">
                  {t("timeline.1.desc")}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-24 text-sm font-semibold text-sunset-orange">
                {t("timeline.2.date")}
              </span>
              <div>
                <p className="text-text-primary font-semibold">
                  {t("timeline.2.title")}
                </p>
                <p className="text-sm text-text-muted">
                  {t("timeline.2.desc")}
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Editions */}
        <div className="mb-10 grid sm:grid-cols-2 gap-4">
          <div className="neon-glow-card p-6">
            <h3 className="font-display text-xl tracking-wider text-neon-pink mb-2">
              {t("standardEdition.title")}
            </h3>
            <p className="text-2xl font-bold text-text-primary mb-3">{t("standardEdition.price")}</p>
            <ul className="text-sm text-text-secondary space-y-1.5">
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-neon-pink shrink-0" /> {t("standardEdition.features.0")}</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-neon-pink shrink-0" /> {t("standardEdition.features.1")}</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-neon-pink shrink-0" /> {t("standardEdition.features.2")}</li>
            </ul>
          </div>
          <div className="neon-glow-card-orange p-6">
            <h3 className="font-display text-xl tracking-wider text-sunset-orange mb-2">
              {t("ultimateEdition.title")}
            </h3>
            <p className="text-2xl font-bold text-text-primary mb-3">{t("ultimateEdition.price")}</p>
            <ul className="text-sm text-text-secondary space-y-1.5">
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-sunset-orange shrink-0" /> {t("ultimateEdition.features.0")}</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-sunset-orange shrink-0" /> {t("ultimateEdition.features.1")}</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-sunset-orange shrink-0" /> {t("ultimateEdition.features.2")}</li>
            </ul>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-10 neon-glow-card-cyan p-6 sm:p-8 border-lagoon-cyan/20">
          <h2 className="font-display text-2xl tracking-wider text-lagoon-cyan mb-4">
            {t("platformsTitle")}
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-lagoon-cyan mt-0.5 shrink-0" /><span>{t.rich("platforms.0", { strong: (chunks) => <strong>{chunks}</strong> })}</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-lagoon-cyan mt-0.5 shrink-0" /><span>{t.rich("platforms.1", { strong: (chunks) => <strong>{chunks}</strong> })}</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-lagoon-cyan mt-0.5 shrink-0" /><span>{t.rich("platforms.2", { strong: (chunks) => <strong>{chunks}</strong> })}</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
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
          <Link href={isEn ? "/en/news" : "/actualites"} className="text-neon-pink hover:underline">
            {t("newsLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}