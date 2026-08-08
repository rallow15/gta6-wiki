import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import SectionPage from "@/components/SectionPage";
import { getSiteName, getSiteLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("LegalNotice");
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = locale === "en" ? "/en/legal-notice" : "/mentions-legales";

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/mentions-legales", en: "/en/legal-notice" },
    },
    robots: { index: false, follow: true },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "website",
      locale: ogLocale,
      siteName,
    },
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("LegalNotice");

  return (
    <SectionPage
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="glass-card p-6 sm:p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("publisher.heading")}
          </h2>
          <p>
            {t("publisher.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("intellectualProperty.heading")}
          </h2>
          <p>
            {t("intellectualProperty.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("content.heading")}
          </h2>
          <p>
            {t("content.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("advertising.heading")}
          </h2>
          <p>
            {t("advertising.text")}
          </p>
        </div>
      </div>
    </SectionPage>
  );
}