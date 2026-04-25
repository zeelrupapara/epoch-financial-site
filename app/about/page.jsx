import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About Us | EPOCH Financial",
  description:
    "EPOCH Financial is a commercial finance advisory firm focused on delivering structured credit solutions for middle market companies.",
  keywords:
    "about EPOCH Financial, commercial finance advisory, middle market, structured credit, receivable financing, asset based lending",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[300px] lg:min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 78%)), url("/assets/images/dallas-skyline-hero.jpg")',
            }}
          >
            <div className="relative z-10 w-full flex flex-col items-center text-center gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>business</span>
                ABOUT US
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                About EPOCH Financial
              </h1>
              <p className="text-white/70 md:text-lg text-base max-w-2xl leading-relaxed">
                A commercial finance advisory firm focused on structured credit solutions for middle market companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

            {/* Left — dark stats panel */}
            <FadeUp className="lg:col-span-2 h-full" delay={100}>
              <div className="h-full rounded-2xl bg-secondary p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[360px]">
                <div>
                  <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Who We Are</p>
                  <h2 className="text-white 2xl:text-[30px] lg:text-[24px] md:text-[22px] text-[20px] font-bold leading-snug">
                    Commercial Finance Advisory for the Middle Market
                  </h2>
                  <div className="w-10 h-[2px] rounded-full mt-5" style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }} />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 mt-8 border-t border-white/10">
                  <div>
                    <p className="text-white 2xl:text-[36px] text-[28px] font-extrabold leading-none mb-1">$20M</p>
                    <p className="text-white/50 text-[12px] leading-snug mt-1">Min. annual revenue</p>
                  </div>
                  <div>
                    <p className="text-white 2xl:text-[36px] text-[28px] font-extrabold leading-none mb-1">$1B+</p>
                    <p className="text-white/50 text-[12px] leading-snug mt-1">Max. annual revenue</p>
                  </div>
                  <div>
                    <p className="text-primary 2xl:text-[36px] text-[28px] font-extrabold leading-none mb-1">3</p>
                    <p className="text-white/50 text-[12px] leading-snug mt-1">Core credit solution types</p>
                  </div>
                  <div>
                    <p className="text-primary 2xl:text-[36px] text-[28px] font-extrabold leading-none mb-1">100%</p>
                    <p className="text-white/50 text-[12px] leading-snug mt-1">Middle market focus</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — text content */}
            <FadeUp className="lg:col-span-3 flex flex-col gap-6 justify-center" delay={80}>
              <div>
                <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Our Firm</p>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-2">
                  Structured Financing for Middle Market Companies
                </h2>
                <div className="w-10 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }} />
              </div>
              <div className="divide-y divide-border-light">
                <p className="text-body-gray md:text-base text-sm leading-relaxed pb-5">
                  EPOCH Financial is a commercial finance advisory firm focused on
                  delivering structured credit solutions for middle market
                  companies. The firm works with businesses generating $20 million
                  to $1 billion in annual revenue, providing financing solutions
                  grounded in collateral performance, structural integrity, and
                  institutional underwriting standards.
                </p>
                <p className="text-body-gray md:text-base text-sm leading-relaxed py-5">
                  Within the middle market, capital is a core component of
                  operating strategy. EPOCH Financial partners with management
                  teams and financial stakeholders to structure credit facilities
                  that enhance liquidity, support operational execution, and
                  maintain disciplined capital efficiency. Each engagement is
                  approached with a focus on alignment between asset quality, cash
                  flow visibility, and long-term business objectives.
                </p>
                <p className="text-body-gray md:text-base text-sm leading-relaxed pt-5">
                  The firm&apos;s platform centers on receivable-anchored
                  financing, asset-based lending, and selective structured capital
                  solutions, designed to deliver dependable execution in situations
                  where traditional lending frameworks are insufficient.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          {/* Section header */}
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-8 border-b border-border-light">
            <div>
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Insights</p>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                Insights and Perspectives on<br className="sm:block hidden" />
                Middle Market Capital
              </h2>
            </div>
            <Link
              href="/articles"
              className="shrink-0 inline-flex items-center gap-2 text-primary text-[13px] font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Articles
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </FadeUp>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                category: "Private Credit",
                date: "February 27, 2026",
                title: "How Private Credit Market Liquidity Helps Ensure Stable Capital Access",
                description: "An analysis of how private credit liquidity dynamics affect middle market borrowers and capital availability.",
                href: "/articles",
              },
              {
                category: "Market Outlook",
                date: "February 16, 2026",
                title: "Private Credit in 2026: Opportunity or Emerging Risk for Middle Market Borrowers",
                description: "A perspective on evolving private credit conditions and what they mean for middle market companies seeking structured financing.",
                href: "/articles",
              },
              {
                category: "Capital Strategy",
                date: "February 11, 2026",
                title: "How Middle Market Companies Optimize Capital Structures for Growth",
                description: "A guide to capital structure optimization strategies for middle market companies focused on growth and operational efficiency.",
                href: "/articles",
              },
            ].map((insight, i) => (
              <FadeUp key={i} delay={i * 100} className="group">
                <Link href={insight.href} className="flex flex-col h-full">
                  {/* Top gradient accent bar */}
                  <div
                    className="w-full h-[3px] rounded-full mb-6 group-hover:opacity-80 transition-opacity"
                    style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }}
                  />
                  {/* Category + date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-secondary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {insight.category}
                    </span>
                    <span className="text-body-gray text-[12px]">{insight.date}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-secondary 2xl:text-[19px] lg:text-[17px] text-[16px] font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-200 flex-1">
                    {insight.title}
                  </h3>
                  {/* Description */}
                  <p className="text-body-gray text-[14px] leading-relaxed mb-5">
                    {insight.description}
                  </p>
                  {/* Read more */}
                  <span className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold border-t border-border-light pt-4 group-hover:gap-2.5 transition-all duration-200">
                    Read More
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
