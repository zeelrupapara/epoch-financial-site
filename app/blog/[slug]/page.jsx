import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../data";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metaTitle ?? `${article.title} | EPOCH Financial`,
    description: article.metaDescription ?? article.description,
    keywords: article.metaKeywords ?? `${article.category}, EPOCH Financial, middle market finance, ${article.title}`,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] lg:min-h-[520px] flex-col justify-end rounded-2xl overflow-hidden p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage: article.image
                ? `linear-gradient(135deg, rgba(17,55,95,0.55) 0%, rgba(10,37,64,0.65) 100%), url("${article.image}")`
                : "linear-gradient(135deg, #11375F 0%, #0a2540 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative z-10 w-full flex flex-col gap-4 max-w-4xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider w-fit">
                {article.category}
              </span>
              <h1 className="text-white xl:text-[40px] lg:text-[32px] text-[24px] font-extrabold leading-[1.2] tracking-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="bg-white 2xl:px-6 lg:px-16 md:px-12 px-4 pt-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-Fxl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-body-gray">
              <Link
                href="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 }}
              >
                chevron_right
              </span>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Articles
              </Link>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 }}
              >
                chevron_right
              </span>
              <span className="text-secondary font-medium line-clamp-1">
                {article.title}
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="bg-white 2xl:py-16 xl:py-14 md:py-12 py-10 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
                {article.content.map((block, i) => {
                  const renderBoldLabel = (text) => {
                    const separators = [" - ", ": "];
                    for (const sep of separators) {
                      const idx = text.indexOf(sep);
                      if (idx > 0 && idx < 80) {
                        return (
                          <>
                            <strong className="text-secondary font-semibold">
                              {text.slice(0, idx)}
                            </strong>
                            {sep}
                            {text.slice(idx + sep.length)}
                          </>
                        );
                      }
                    }
                    return text;
                  };

                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className="text-secondary 2xl:text-[28px] lg:text-[24px] text-[20px] font-bold leading-tight mt-10 mb-4"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "subheading") {
                    return (
                      <h3
                        key={i}
                        className="text-secondary 2xl:text-[22px] lg:text-[20px] text-[18px] font-bold leading-tight mt-8 mb-3"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={i}
                        className="text-body-gray md:text-base text-sm leading-[1.8] mb-5"
                      >
                        {renderBoldLabel(block.text)}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul
                        key={i}
                        className="space-y-3 mb-6 ml-1"
                      >
                        {block.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-body-gray md:text-base text-sm leading-[1.7]"
                          >
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: 14 }}
                              >
                                check
                              </span>
                            </span>
                            <span>{renderBoldLabel(item)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
