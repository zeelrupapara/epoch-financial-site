import DistributionLogisticsPageClient from "./DistributionLogisticsPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/distribution-logistics-financing");

export default function DistributionLogisticsPage() {
  return <DistributionLogisticsPageClient />;
}
