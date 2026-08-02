import { locations } from "@/lib/data";
import LocationDetail from "./LocationDetail";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.id }));
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

  return <LocationDetail location={location} />;
}