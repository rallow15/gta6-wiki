import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("ViceCityMap");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/carte-vice-city-gta-6",
        en: "/en/vice-city-map-gta-6",
      },
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

export default async function CarteViceCityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ViceCityMap");
  const isEn = locale === "en";

  const lieuxPath = isEn ? "/locations" : "/lieux";
  const canonicalPath = isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6";

  const typeMap = t.raw("typeMap") as Record<string, string>;
  const featureMap = t.raw("featureMap") as Record<string, string>;

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t("breadcrumbHome"), url: BASE_URL },
            { name: t("breadcrumbLocations"), url: `${BASE_URL}${lieuxPath}` },
            { name: t("breadcrumbName"), url: `${BASE_URL}${canonicalPath}` },
          ]),
          itemListJsonLd(
            t("breadcrumbName"),
            `${BASE_URL}${canonicalPath}`,
            locations.map((l) => ({
              name: l.name,
              url: `${BASE_URL}${lieuxPath}/${l.id}`,
              image: `${BASE_URL}${l.image}`,
            })),
          ),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 neon-glow-card-cyan p-6 sm:p-8 border-lagoon-cyan/20">
          <h2 className="font-display text-2xl tracking-wider text-lagoon-cyan mb-3">
            {t("stateTitle")}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            {t.rich("stateText", {
              strong: (chunks) => <strong>{chunks}</strong>,
              "lagoon-cyan": (chunks) => <strong className="text-lagoon-cyan">{chunks}</strong>,
              "neon-pink": (chunks) => <strong className="text-neon-pink">{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`${lieuxPath}/${loc.id}`}
              className="neon-glow-card shimmer-line overflow-hidden group block"
            >
              <div className="relative h-44 w-full overflow-hidden bg-deep-bg-light">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-deep-bg/80 text-lagoon-cyan border border-lagoon-cyan/30">
                  {typeMap[loc.type] ?? loc.type}
                </span>
                <h3 className="absolute bottom-3 left-3 font-display text-xl tracking-wider text-white drop-shadow-lg">
                  {loc.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-text-muted">{loc.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {loc.features.map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20">
                      {featureMap[f] ?? f}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 glass-card p-6 sm:p-8">
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
          <Link href={lieuxPath} className="text-neon-pink hover:underline">
            {t("allLocationsLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}