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
  const t = await getTranslations("PrivacyPolicy");
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = locale === "en" ? "/en/privacy-policy" : "/politique-confidentialite";

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/politique-confidentialite", en: "/en/privacy-policy" },
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

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <SectionPage
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="glass-card p-6 sm:p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("dataCollection.heading")}
          </h2>
          <p>
            {t("dataCollection.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("cookies.heading")}
          </h2>
          <p>
            {t("cookies.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("analytics.heading")}
          </h2>
          <p>
            {t("analytics.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("externalLinks.heading")}
          </h2>
          <p>
            {t("externalLinks.text")}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {t("contact.heading")}
          </h2>
          <p>
            {t("contact.text")}
          </p>
        </div>
        <div className="border-t border-night-violet/50 pt-4 text-text-muted text-xs">
          {t("lastUpdated")}
        </div>
      </div>
    </SectionPage>
  );
}