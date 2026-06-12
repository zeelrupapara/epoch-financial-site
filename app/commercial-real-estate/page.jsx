import CREPageClient from "./CREPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/commercial-real-estate");

export default function CommercialRealEstatePage() {
  return <CREPageClient />;
}
