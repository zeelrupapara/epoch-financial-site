import FinancialServicesPageClient from "./FinancialServicesPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/financial-services");

export default function FinancialServicesPage() {
  return <FinancialServicesPageClient />;
}
