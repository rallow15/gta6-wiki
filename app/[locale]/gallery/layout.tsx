import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getSiteName, getSiteLocale } from "@/lib/site";

// galerie/page.tsx is a client component ("use client"); metadata lives here.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Gallery");
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = locale === "en" ? "/en/gallery" : "/galerie";

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/galerie", en: "/en/gallery" },
    },
    keywords: t.raw("metaKeywords") as string[],
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

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children;
}