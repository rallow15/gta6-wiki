import type { Metadata } from "next";
import Image from "next/image";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { getSiteName, getSiteLocale } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("About");
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const isEn = locale === "en";
  const path = isEn ? "/en/about" : "/a-propos";

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/a-propos", en: "/en/about" },
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

export default async function AProposPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("About");
  const isEn = locale === "en";

  const commitmentItems = [0, 1, 2, 3].map((i) => t(`commitmentItems.${i}`));

  return (
    <>
      <JsonLd
        data={sectionBreadcrumb(
          t("breadcrumbName"),
          isEn ? "/en/about" : "/a-propos",
          locale
        )}
      />
      <SectionPage title={t("title")} subtitle={t("subtitle")}>
        <div className="glass-card p-6 sm:p-8 space-y-6">
          {/* Logo badge */}
          <div className="flex justify-center">
            <Image
              src="/images/logo/logo-badge.webp"
              alt={t("logoAlt")}
              width={200}
              height={200}
              className="w-48 h-auto rounded-xl"
            />
          </div>
          <div>
            <h2 className="font-display text-xl tracking-wider text-neon-pink mb-3">
              {t("whatIsTitle")}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t("whatIsText")}
            </p>
          </div>

          <div className="border-t border-night-violet/50 pt-6">
            <h2 className="font-display text-xl tracking-wider text-lagoon-cyan mb-3">
              {t("commitmentTitle")}
            </h2>
            <ul className="space-y-2 text-text-secondary">
              {commitmentItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-neon-pink mt-1">&#x25B8;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-night-violet/50 pt-6">
            <h2 className="font-display text-xl tracking-wider text-sunset-orange mb-3">
              {t("disclaimerTitle")}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              {t("disclaimerText")}
            </p>
          </div>

          <div className="border-t border-night-violet/50 pt-6">
            <h2 className="font-display text-xl tracking-wider text-sand-yellow mb-3">
              {t("contactTitle")}
            </h2>
            <p className="text-text-secondary">
              {t("contactText")}
            </p>
          </div>
        </div>
      </SectionPage>
    </>
  );
}