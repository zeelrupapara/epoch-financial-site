import ArticlesGrid from "./ArticlesGrid";

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
            className="relative flex min-h-[300px] lg:min-h-[380px] flex-col justify-center rounded-2xl overflow-hidden p-8 md:p-16 lg:p-20"
            style={{ background: "linear-gradient(135deg, #11375F 0%, #0a2540 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
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
      <ArticlesGrid />
    </>
  );
}
