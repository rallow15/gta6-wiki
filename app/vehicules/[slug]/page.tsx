import { vehicles } from "@/lib/data";
import { notFound } from "next/navigation";
import VehicleDetail from "./VehicleDetail";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.id }));
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.id === slug);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetail vehicle={vehicle} />;
}