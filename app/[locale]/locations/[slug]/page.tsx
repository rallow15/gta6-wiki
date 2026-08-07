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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.id === slug);
  if (!location) return { title: "Lieu introuvable" };

  const url = `/lieux/${location.id}`;
  const title = `${location.name} — Lieu GTA 6`;
  const description = `${location.description} Type : ${location.type}. Zones : ${location.features.join(", ")}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      location.name,
      `${location.name} GTA 6`,
      `${location.name} GTA VI`,
      `${location.type} GTA 6`,
      "lieux GTA 6",
      "Vice City",
      "Leonida",
    ],
    openGraph: {
      title: `${title} | CodeTricheGTA6`,
      description,
      url,
      type: "article",
      images: [{ url: location.image, width: 1200, height: 630, alt: location.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CodeTricheGTA6`,
      description,
      images: [location.image],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.id === slug);

  if (!location) {
    return (
      <div className="pt-20 text-center">
        <h1 className="font-display text-4xl text-neon-pink neon-text">404</h1>
        <p className="text-text-muted mt-4">Lieu non trouve</p>
      </div>
    );
  }

  const url = `${BASE_URL}/lieux/${location.id}`;
  return (
    <>
      <JsonLd
        data={[
          placeJsonLd(location, url),
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Lieux", url: `${BASE_URL}/lieux` },
            { name: location.name, url },
          ]),
        ]}
      />
      <LocationDetail location={location} />
    </>
  );
}