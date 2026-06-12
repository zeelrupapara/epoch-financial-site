import OilGasPageClient from "./OilGasPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/oil-gas-financing");

export default function OilGasPage() {
  return <OilGasPageClient />;
}
