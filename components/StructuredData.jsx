const SITE_URL = "https://www.epochfinancial.com";

// Organization + WebSite schema rendered once, sitewide, from the root layout.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE_URL}/#organization`,
  name: "EPOCH Financial",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo/epoch-logo@3x.webp`,
  description:
    "EPOCH Financial structures and facilitates senior secured credit solutions for middle market companies and specialty lenders.",
  telephone: "+1-888-400-0170",
  email: "reachus@epochfinancial.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3350 Riverwood Parkway, Suite 1900",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30339",
    addressCountry: "US",
  },
  areaServed: "US",
  knowsAbout: [
    "Accounts Receivable Financing",
    "Asset-Based Lending",
    "Bridge Financing",
    "Commercial Real Estate Loans",
    "Private Credit",
    "Middle Market Finance",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "EPOCH Financial",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
