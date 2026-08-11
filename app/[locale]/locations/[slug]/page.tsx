import type { Metadata } from "next";
import { locations } from "@/lib/data";
import LocationDetail from "./LocationDetail";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, placeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const location = locations.find((l) => l.id === slug);
  if (!location) return { title: "Location not found" };

  const isEn = locale === "en";
  const description = isEn ? location.descriptionEn : location.description;
  const features = isEn && location.featuresEn ? location.featuresEn : location.features;
  const url = isEn ? `/en/locations/${location.id}` : `/lieux/${location.id}`;
  const title = isEn ? `${location.name} — GTA 6 Location` : `${location.name} — Lieu GTA 6`;
  const metaDesc = `${description} Type: ${location.type}. Areas: ${features.join(", ")}.`;

  return {
    title,
    description: metaDesc,
    alternates: {
      canonical: url,
      languages: {
        fr: `/lieux/${location.id}`,
        en: `/en/locations/${location.id}`,
      },
    },
    keywords: [
      location.name,
      `${location.name} GTA 6`,
      `${location.name} GTA VI`,
      `${location.type} GTA 6`,
      isEn ? "GTA 6 locations" : "lieux GTA 6",
      "Vice City",
      "Leonida",
    ],
    openGraph: {
      title: `${title} | ${isEn ? "GTA6CheatCodes" : "CodeTricheGTA6"}`,
      description: metaDesc,
      url,
      type: "article",
      locale: isEn ? "en_US" : "fr_FR",
      images: [{ url: location.image, width: 1200, height: 630, alt: location.name }],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const location = locations.find((l) => l.id === slug);

  if (!location) {
    return (
      <div className="pt-20 text-center">
        <h1 className="font-display text-4xl text-neon-pink neon-text">404</h1>
        <p className="text-text-muted mt-4">Location not found</p>
      </div>
    );
  }

  const isEn = locale === "en";
  const url = `${BASE_URL}${isEn ? `/en/locations/${location.id}` : `/lieux/${location.id}`}`;
  return (
    <>
      <JsonLd
        data={[
          placeJsonLd(location, url),
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Locations" : "Lieux", url: `${BASE_URL}${isEn ? "/en/locations" : "/lieux"}` },
            { name: location.name, url },
          ]),
        ]}
      />
      <LocationDetail location={location} locale={locale} />
    </>
  );
}