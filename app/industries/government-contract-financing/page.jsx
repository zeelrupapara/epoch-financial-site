import GovernmentContractingPageClient from "./GovernmentContractingPageClient";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/government-contract-financing");

export default function GovernmentContractingPage() {
  return <GovernmentContractingPageClient />;
}