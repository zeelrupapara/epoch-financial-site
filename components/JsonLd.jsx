import { seoSchema } from "@/lib/seo";

// Renders per-page JSON-LD structured data from seo.yaml. Returns null when the
// page has no schema entry — zero DOM impact until the optimizer adds one.
export default function JsonLd({ route }) {
  const schema = seoSchema(route);
  if (!schema) return null;

  const blocks = [];
  if (Array.isArray(schema.faq) && schema.faq.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: schema.faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }
  if (schema.breadcrumb === "auto" && route !== "/") {
    const segments = route.split("/").filter(Boolean);
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epochfinancial.com/" },
        ...segments.map((seg, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          item: "https://www.epochfinancial.com/" + segments.slice(0, i + 1).join("/"),
        })),
      ],
    });
  }
  if (blocks.length === 0) return null;

  return blocks.map((block, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
    />
  ));
}
