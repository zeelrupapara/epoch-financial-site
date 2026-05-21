import { articles as blogPosts } from "./blog/data";
import { articles as insightArticles } from "./articles/data";

const SITE_URL = "https://www.epochfinancial.com";

// Top-level marketing + industry pages, with crawl-priority hints.
const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/our-approach", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ar-financing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/abl", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bridge", priority: 0.9, changeFrequency: "monthly" },
  { path: "/commercial-real-estate", priority: 0.9, changeFrequency: "monthly" },
  { path: "/financial-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/business-services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/healthcare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/technology", priority: 0.7, changeFrequency: "monthly" },
  { path: "/manufacturing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/construction", priority: 0.7, changeFrequency: "monthly" },
  { path: "/consumer-packaged", priority: 0.7, changeFrequency: "monthly" },
  { path: "/distribution-logistics", priority: 0.7, changeFrequency: "monthly" },
  { path: "/education-services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/government-contracting", priority: 0.7, changeFrequency: "monthly" },
  { path: "/media-telecommunications", priority: 0.7, changeFrequency: "monthly" },
  { path: "/oil-gas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/transportation-freight", priority: 0.7, changeFrequency: "monthly" },
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
