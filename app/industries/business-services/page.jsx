import BusinessServicesPageClient from "./BusinessServicesPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/business-services");

export default function BusinessServicesPage() {
  return <BusinessServicesPageClient />;
}
