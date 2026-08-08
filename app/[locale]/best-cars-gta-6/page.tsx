import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { vehicles } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("BestCars");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/meilleures-voitures-gta-6",
        en: "/en/best-cars-gta-6",
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

// Editorial ranking (sportives/supercars first, then the rest by category).
const ranking = [
  ...vehicles.filter((v) => v.category === "Sportive"),
  ...vehicles.filter((v) => v.category === "Muscle"),
  ...vehicles.filter((v) => v.category === "SUV"),
  ...vehicles.filter((v) => v.category === "Classique"),
  ...vehicles.filter((v) => v.category === "Moto"),
  ...vehicles.filter((v) => v.category === "Bateau"),
];

export default async function MeilleuresVoituresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("BestCars");
  const isEn = locale === "en";

  const vehicleBasePath = isEn ? "/vehicles" : "/vehicules";
  const canonicalPath = isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6";

  const categoryMap = t.raw("categoryMap") as Record<string, string>;

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
            { name: t("breadcrumbVehicles"), url: `${BASE_URL}${vehicleBasePath}` },
            { name: t("breadcrumbName"), url: `${BASE_URL}${canonicalPath}` },
          ]),
          itemListJsonLd(
            t("breadcrumbName"),
            `${BASE_URL}${canonicalPath}`,
            ranking.map((v) => ({
              name: v.name,
              url: `${BASE_URL}${vehicleBasePath}/${v.id}`,
              image: `${BASE_URL}${v.image}`,
            })),
          ),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title="GTA 6"
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="space-y-4">
          {ranking.map((vehicle, i) => (
            <Link
              key={vehicle.id}
              href={`${vehicleBasePath}/${vehicle.id}`}
              className="neon-glow-card shimmer-line overflow-hidden group block flex flex-col sm:flex-row"
            >
              <div className="relative h-40 sm:h-32 sm:w-56 w-full shrink-0 overflow-hidden bg-deep-bg-light">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 224px"
                />
                <span className="absolute top-3 left-3 font-display text-2xl font-bold text-white drop-shadow-lg">
                  #{i + 1}
                </span>
                {vehicle.edition && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-sunset-orange/90 text-white">
                    {vehicle.edition}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors">
                    {vehicle.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-deep-bg-light border border-night-violet/30 text-text-muted shrink-0">
                    {categoryMap[vehicle.category] ?? vehicle.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-text-muted">{vehicle.description}</p>
                <p className="mt-2 text-xs italic text-sunset-orange">
                  {t("inspiredBy")} {vehicle.inspired}
                </p>
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
          <Link href={vehicleBasePath} className="text-neon-pink hover:underline">
            {t("allVehiclesLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}