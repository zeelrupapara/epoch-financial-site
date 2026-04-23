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
            className="relative flex min-h-[300px] lg:min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-left bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 82%)), url("/assets/images/about-hero-bg.jpg")',
            }}
          >
            <div className="relative z-10 w-full flex flex-col items-center text-center gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  business
                </span>
                ABOUT US
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            <FadeUp className="lg:w-[45%] shrink-0 flex" delay={100}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[320px]">
                <img
                  src="/assets/images/old-site/boardroom-new.jpg"
                  alt="High-level executive conference room"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp className="lg:w-[55%] flex flex-col gap-6 justify-center">
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                Structured Financing for<br className="sm:block hidden" />
                Middle Market Companies
              </h2>
              <p className="text-body-gray md:text-base text-sm leading-relaxed">
                EPOCH Financial is a commercial finance advisory firm focused on
                delivering structured credit solutions for middle market
                companies. The firm works with businesses generating $20 million
                to $1 billion in annual revenue, providing financing solutions
                grounded in collateral performance, structural integrity, and
                institutional underwriting standards.
              </p>
              <p className="text-body-gray md:text-base text-sm leading-relaxed">
                Within the middle market, capital is a core component of
                operating strategy. EPOCH Financial partners with management
                teams and financial stakeholders to structure credit facilities
                that enhance liquidity, support operational execution, and
                maintain disciplined capital efficiency. Each engagement is
                approached with a focus on alignment between asset quality, cash
                flow visibility, and long-term business objectives.
              </p>
              <p className="text-body-gray md:text-base text-sm leading-relaxed">
                The firm&apos;s platform centers on receivable-anchored
                financing, asset-based lending, and selective structured capital
                solutions, designed to deliver dependable execution in situations
                where traditional lending frameworks are insufficient.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Insights and Perspectives on<br className="sm:block hidden" />
              Middle Market Capital
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                image: "/assets/images/blog-liquidity-new.jpg",
                date: "February 27, 2026",
                title: "How Private Credit Market Liquidity Helps Ensure Stable Capital Access",
                href: "#",
              },
              {
                image: "/assets/images/blog-risk-new.jpg",
                date: "February 16, 2026",
                title: "Private Credit in 2026: Opportunity or Emerging Risk for Middle Market Borrowers",
                href: "#",
              },
              {
                image: "/assets/images/blog-growth-new.jpg",
                date: "February 11, 2026",
                title: "How Middle Market Companies Optimize Capital Structures for Growth",
                href: "#",
              },
            ].map((insight, i) => (
              <FadeUp key={i} delay={i * 120}>
                <Link
                  href={insight.href}
                  className="group block rounded-2xl overflow-hidden bg-[#11375F] shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <span className="text-[#4EADF1] text-sm font-medium">
                      {insight.date}
                    </span>
                    <h3 className="text-white text-base font-bold leading-snug line-clamp-2">
                      {insight.title}
                    </h3>
                    <span className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
                      Read More...
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
