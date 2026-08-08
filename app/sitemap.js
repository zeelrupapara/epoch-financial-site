import { articles as blogPosts } from "./blog/data";
import { articles as insightArticles } from "./articles/data";

const SITE_URL = "https://www.epochfinancial.com";

// Top-level marketing + industry pages, with crawl-priority hints.
const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/our-approach", priority: 0.7, changeFrequency: "monthly" },
  { path: "/financial-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/financial-services/accounts-receivable-financing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/financial-services/asset-based-lending", priority: 0.9, changeFrequency: "monthly" },
  { path: "/financial-services/payroll-funding-for-staffing-companies", priority: 0.9, changeFrequency: "monthly" },
  { path: "/financial-services/strategic-capital-solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/financial-services/bridge-financing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/commercial-real-estate", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries/financial-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/business-services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/healthcare-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/technology-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/manufacturing-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/commercial-construction-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/cpg-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/distribution-logistics-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/education-services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/energy-infrastructure-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/government-contract-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/media-telecommunications-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/oil-gas-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/transportation-freight-financing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/service-areas/alabama", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/california", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/georgia", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/florida", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/texas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/articles", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

function parseDate(value) {
  const d = value ? new Date(value) : new Date();
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parseDate(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // /articles/[slug] — dedupe against blog slugs to avoid duplicate URLs.
  const blogSlugs = new Set(blogPosts.map((p) => p.slug));
  const articleEntries = insightArticles
    .filter((a) => !blogSlugs.has(a.slug))
    .map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: parseDate(article.date),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [...staticEntries, ...blogEntries, ...articleEntries];
}
