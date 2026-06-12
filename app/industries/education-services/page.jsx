import EducationServicesPageClient from "./EducationServicesPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/education-services");

export default function EducationServicesPage() {
  return <EducationServicesPageClient />;
}
