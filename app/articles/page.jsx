import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { articles } from "./data";

export const metadata = {
  title: "Articles | EPOCH Financial",
  description:
    "Insights and perspectives on middle market capital, accounts receivable financing, asset-based lending, and structured credit solutions.",
  keywords:
    "EPOCH Financial articles, middle market finance, accounts receivable, factoring, supply chain finance, government contracts",
};

export default function ArticlesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[300px] lg:min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/city-skyline-us.jpg")',
            }}
          >
            <div className="relative z-10 w-full flex flex-col items-center text-center gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  article
                </span>
                ARTICLES
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Insights &amp; Perspectives
              </h1>
              <p className="text-white/70 md:text-lg text-base max-w-2xl">
                Expert analysis on middle market capital, receivable financing,
                and structured credit solutions for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 100}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-border-light shadow-md hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-body-gray text-sm">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 16 }}
                      >
                        calendar_today
                      </span>
                      {article.date}
                    </div>
                    <h3 className="text-secondary text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-body-gray text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-2 group-hover:gap-2 transition-all duration-200">
                      Read More
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 18 }}
                      >
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
