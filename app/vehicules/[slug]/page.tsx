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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.id === slug);
  if (!vehicle) return { title: "Véhicule introuvable" };

  const url = `/vehicules/${vehicle.id}`;
  const title = `${vehicle.name} — Véhicule GTA 6`;
  const description = `${vehicle.description} Catégorie : ${vehicle.category}. Inspiration : ${vehicle.inspired}. Source : ${vehicle.source}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      vehicle.name,
      `${vehicle.name} GTA 6`,
      `${vehicle.category} GTA 6`,
      `voiture GTA 6 ${vehicle.inspired}`,
      "véhicule GTA VI",
    ],
    openGraph: {
      title: `${title} | CodeTricheGTA6`,
      description,
      url,
      type: "article",
      images: [{ url: vehicle.image, width: 1200, height: 630, alt: vehicle.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CodeTricheGTA6`,
      description,
      images: [vehicle.image],
    },
  };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.id === slug);

  if (!vehicle) {
    notFound();
  }

  const url = `${BASE_URL}/vehicules/${vehicle.id}`;
  return (
    <>
      <JsonLd
        data={[
          vehicleJsonLd(vehicle, url),
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Véhicules", url: `${BASE_URL}/vehicules` },
            { name: vehicle.name, url },
          ]),
        ]}
      />
      <VehicleDetail vehicle={vehicle} />
    </>
  );
}