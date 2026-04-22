import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FadeUp from "@/components/FadeUp";
import ApproachSwiperSection from "./ApproachSwiperSection";

export const metadata = {
  title: "Our Capital Approach | EPOCH Financial",
  description:
    "EPOCH Financial works with middle market companies to structure and execute credit solutions within complex, capital-intensive environments.",
  keywords:
    "capital approach, structured credit, middle market, asset based lending, receivable financing, EPOCH Financial",
};


export default function OurApproachPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 82%)), url("/assets/images/approach-hero-bg.jpg")',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>trending_up</span>
                OUR APPROACH
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Our Approach to Structured Credit
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                 EPOCH Financial works with middle market companies to structure
                and execute credit solutions within complex, capital-intensive
                environments. Each engagement is centered on aligning capital
                structure, cash flow dynamics, and strategic objectives. The firm
                evaluates collateral, develops lender-ready financing structures,
                and manages a disciplined process across private credit and
                asset-based lenders to deliver solutions that support operational
                execution and maintain flexibility across evolving business
                conditions.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  Discuss a Financing Opportunity
                </Link>
                <Link
                  href="/abl"
                  className="rounded-full border-2 border-white/40 px-4 sm:px-7 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/60"
                >
                  Explore Credit Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApproachSwiperSection />

      {/* PARTNER CTA */}
      <CTABanner
        title="Partner with a Capital Provider Focused on the Middle Market."
        description="EPOCH Financial works alongside management teams and financial stakeholders to structure and execute credit solutions aligned with complex business needs."
        buttonText="Explore Structured Credit Solutions"
        bgImage="/assets/images/cta-bg-new.jpg"
      />
    </>
  );
}
