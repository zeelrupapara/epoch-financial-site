import { seoMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import ContactPageClient from "./ContactPageClient";

const ROUTE = "/contact";

export const metadata = seoMetadata(ROUTE);

export default function ContactPage() {
  return (
    <>
      <JsonLd route={ROUTE} />
      <ContactPageClient />
    </>
  );
}
