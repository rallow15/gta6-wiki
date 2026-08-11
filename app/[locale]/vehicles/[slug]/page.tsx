import type { Metadata } from "next";
import { vehicles } from "@/lib/data";
import { notFound } from "next/navigation";
import VehicleDetail from "./VehicleDetail";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, vehicleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const vehicle = vehicles.find((v) => v.id === slug);
  if (!vehicle) return { title: "Vehicle not found" };

  const isEn = locale === "en";
  const description = isEn ? vehicle.descriptionEn : vehicle.description;
  const inspired = isEn ? vehicle.inspiredEn : vehicle.inspired;
  const url = isEn ? `/en/vehicles/${vehicle.id}` : `/vehicules/${vehicle.id}`;
  const title = isEn ? `${vehicle.name} — GTA 6 Vehicle` : `${vehicle.name} — Véhicule GTA 6`;
  const metaDesc = `${description} Category: ${isEn ? vehicle.category : vehicle.category}. Inspired by: ${inspired}. Source: ${vehicle.source}.`;

  return {
    title,
    description: metaDesc,
    alternates: {
      canonical: url,
      languages: {
        fr: `/vehicules/${vehicle.id}`,
        en: `/en/vehicles/${vehicle.id}`,
      },
    },
    keywords: [
      vehicle.name,
      `${vehicle.name} GTA 6`,
      `${vehicle.category} GTA 6`,
      `${inspired} GTA 6`,
    ],
    openGraph: {
      title: `${title} | ${isEn ? "GTA6CheatCodes" : "CodeTricheGTA6"}`,
      description: metaDesc,
      url,
      type: "article",
      locale: isEn ? "en_US" : "fr_FR",
      images: [{ url: vehicle.image, width: 1200, height: 630, alt: vehicle.name }],
    },
  };
}

export default async function VehiclePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const vehicle = vehicles.find((v) => v.id === slug);

  if (!vehicle) {
    notFound();
  }

  const isEn = locale === "en";
  const url = `${BASE_URL}${isEn ? `/en/vehicles/${vehicle.id}` : `/vehicules/${vehicle.id}`}`;
  return (
    <>
      <JsonLd
        data={[
          vehicleJsonLd(vehicle, url),
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Vehicles" : "Véhicules", url: `${BASE_URL}${isEn ? "/en/vehicles" : "/vehicules"}` },
            { name: vehicle.name, url },
          ]),
        ]}
      />
      <VehicleDetail vehicle={vehicle} locale={locale} />
    </>
  );
}