import TransportationFreightPageClient from "./TransportationFreightPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/transportation-freight-financing");

export default function TransportationFreightPage() {
  return <TransportationFreightPageClient />;
}
