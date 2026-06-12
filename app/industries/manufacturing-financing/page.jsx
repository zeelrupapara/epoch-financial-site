import ManufacturingPageClient from "./ManufacturingPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/manufacturing-financing");

export default function ManufacturingPage() {
  return <ManufacturingPageClient />;
}
