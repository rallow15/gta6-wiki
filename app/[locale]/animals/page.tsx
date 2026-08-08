import type { Metadata } from "next";
import { Bug } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { getSiteName, getSiteLocale } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Animals");
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const isEn = locale === "en";
  const path = isEn ? "/en/animals" : "/animaux";

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/animaux", en: "/en/animals" },
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

export default async function AnimauxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Animals");

  return (
    <SectionPage title={t("title")} subtitle={t("subtitle")}>
      <div className="glass-card p-8 text-center">
        <Bug className="h-10 w-10 text-lagoon-cyan mx-auto mb-4" />
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          {t("comingSoonTitle")}
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          {t("comingSoonText")}
        </p>
      </div>
    </SectionPage>
  );
}