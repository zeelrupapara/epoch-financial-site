import HealthcarePageClient from "./HealthcarePageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/healthcare-financing");

export default function HealthcarePage() {
  return <HealthcarePageClient />;
}
