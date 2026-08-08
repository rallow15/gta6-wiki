import { Link } from "@/i18n/navigation";
import { Gamepad2 } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Platform = "PS5" | "Xbox" | "PC";

const FAQ_KEYS: Record<Platform, string[]> = {
  PS5: ["commentEntrer", "trophees", "confirmes"],
  Xbox: ["commentEntrer", "succes", "confirmes"],
  PC: ["commentEntrer", "succes", "confirmes"],
};

const CANONICAL_PATHS: Record<Platform, { fr: string; en: string }> = {
  PS5: { fr: "/codes-gta-6-ps5", en: "/en/cheat-codes-gta-6-ps5" },
  Xbox: { fr: "/codes-gta-6-xbox", en: "/en/cheat-codes-gta-6-xbox" },
  PC: { fr: "/codes-gta-6-pc", en: "/en/cheat-codes-gta-6-pc" },
};

export async function codesPlatformMetadata(platform: Platform, locale: string = "fr"): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "CodesPlatform" });
  const paths = CANONICAL_PATHS[platform];
  const siteName = getSiteName(locale);
  const siteLocale = getSiteLocale(locale);

  const title = t(`${platform}.metaTitle`);
  const description = t(`${platform}.metaDescription`);
  const keywords = t.raw(`${platform}.metaKeywords`) as string[];
  const ogDescription = t(`${platform}.ogDescription`);

  return {
    title,
    description,
    alternates: {
      canonical: locale === "en" ? paths.en : paths.fr,
      languages: { fr: paths.fr, en: paths.en },
    },
    keywords,
    openGraph: {
      title: `${title} | ${siteName}`,
      description: ogDescription,
      url: locale === "en" ? paths.en : paths.fr,
      type: "website",
      locale: siteLocale,
      siteName,
    },
  };
}

export function CodesPlatformContent({ platform, locale = "fr" }: { platform: Platform; locale?: string }) {
  const t = useTranslations("CodesPlatform");
  const paths = CANONICAL_PATHS[platform];
  const canonicalPath = locale === "en" ? paths.en : paths.fr;

  const faqKeys = FAQ_KEYS[platform];
  const faqs = faqKeys.map((key) => ({
    question: t(`${platform}.faqs.${key}.question`),
    answer: t(`${platform}.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t("breadcrumbHome"), url: BASE_URL },
            { name: t("breadcrumbCodes"), url: `${BASE_URL}${locale === "en" ? "/en/codes" : "/codes"}` },
            { name: t(`${platform}.heading`), url: `${BASE_URL}${canonicalPath}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title={t(`${platform}.headingUpper`)}
        subtitle={t(`${platform}.subtitle`)}
      >
        {/* How to enter */}
        <div className="mb-8 glass-card p-5">
          <h2 className="font-display text-lg tracking-wider text-neon-pink mb-2">
            {t(`${platform}.howToEnterTitle`)}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">{t(`${platform}.enterMethod`)}</p>
          <p className="mt-2 text-xs text-text-muted">
            {t(`${platform}.buttons`)} : <span className="text-text-secondary">{t(`${platform}.buttonsList`)}</span>
          </p>
        </div>

        {/* Coming soon */}
        <div className="glass-card p-8 text-center">
          <Gamepad2 className="h-10 w-10 text-neon-pink mx-auto mb-4" />
          <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
            {t(`${platform}.comingSoonTitle`)}
          </h3>
          <p className="text-text-muted max-w-md mx-auto">
            {t.rich(`${platform}.comingSoonText`, {
              bold: (chunks) => <strong className="text-lagoon-cyan">{chunks}</strong>,
            })}
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-10 glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
            {t(`${platform}.faqTitle`)}
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

        <div className="mt-8 text-center space-x-4">
          <Link href="/codes" className="text-neon-pink hover:underline">{t("allCodesLink")}</Link>
          <Link href="/cheat-codes-gta-6-ps5" className="text-text-muted hover:text-text-primary">PS5</Link>
          <Link href="/cheat-codes-gta-6-xbox" className="text-text-muted hover:text-text-primary">Xbox</Link>
          <Link href="/cheat-codes-gta-6-pc" className="text-text-muted hover:text-text-primary">PC</Link>
        </div>
      </SectionPage>
    </>
  );
}