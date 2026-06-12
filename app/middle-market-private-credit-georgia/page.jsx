import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/middle-market-private-credit-georgia");

const solutions = [
  {
    icon: "receipt_long",
    title: "Accounts Receivable Financing (AR)",
    description:
      "Structured AR facilities sized through receivables aging, customer credit quality, concentration exposure, and overall receivables performance. Commonly used to support payroll, inventory purchases, vendor obligations, and operating liquidity while improving cash flow timing against outstanding receivables.",
  },
  {
    icon: "inventory",
    title: "Asset-Based Lending (ABL)",
    description:
      "Borrowing-base facilities anchored by accounts receivable, inventory, and other operating assets. Borrowing availability adjusts with receivable and inventory levels, allowing companies to access liquidity that scales alongside operational activity and revenue growth.",
  },
  {
    icon: "trending_up",
    title: "Bridge and Transitional Capital",
    description:
      "Bridge and transitional structures for acquisitions, refinancing events, turnaround periods, and time-sensitive growth initiatives. May incorporate AR financing or ABL components within a broader capital framework to maintain continuity of liquidity.",
  },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing & Industrial Platforms",
    description:
      "Structures align with production cycles, supply chain exposure, and working capital intensity, with emphasis on asset conversion and operational scalability.",
  },
  {
    icon: "local_shipping",
    title: "Transportation & Logistics",
    description:
      "As a major logistics hub, Georgia businesses require structures aligned with freight cycles, receivables timing, and infrastructure-backed assets.",
  },
  {
    icon: "medical_services",
    title: "Healthcare & Medical Services",
    description:
      "Financing solutions for healthcare and medical service providers based on reimbursement visibility, recurring revenue patterns, and operational liquidity requirements.",
  },
  {
    icon: "domain",
    title: "Commercial Real Estate Platforms",
    description:
      "Solutions support acquisitions, recapitalizations, and transitional assets, with underwriting based on asset-level income and market positioning.",
  },
  {
    icon: "support_agent",
    title: "Business & Financial Services",
    description:
      "Structures align with fee-based income, contracted revenues, and client retention metrics, supporting platform growth.",
  },
];

const cities = [
  "Atlanta",
  "Macon",
  "Columbus",
  "Augusta",
  "Savannah",
  "Athens",
  "Roswell",
  "Sandy Springs",
];

const pillars = [
  {
    icon: "verified",
    title: "Disciplined Credit Approach",
    description:
      "Private credit strategies are grounded in underwriting rigor and structural integrity, with a focus on downside protection and long-term performance alignment. EPOCH Financial evaluates collateral quality, receivable performance, leverage capacity, cash flow durability, and enterprise value support when structuring financing opportunities for lenders.",
  },
  {
    icon: "rocket_launch",
    title: "Structured Execution Framework",
    description:
      "A structured process covering financial review, collateral analysis, lender positioning, data preparation, and coordination throughout underwriting and closing. We coordinate with banks, private credit funds, and specialty finance groups to identify financing structures aligned with borrower objectives and transaction timelines.",
  },
  {
    icon: "handshake",
    title: "Alignment with Middle Market and Sponsor Dynamics",
    description:
      "Capital structures designed to support both independently owned companies and sponsor-backed platforms. Aligned with acquisition strategies, recapitalizations, and growth initiatives, while maintaining flexibility within evolving capital structures.",
  },
  {
    icon: "trending_up",
    title: "Focus on Long-Term Value Creation",
    description:
      "Structure financing solutions that support ongoing growth, improve liquidity flexibility, and position companies for future acquisitions, refinancing opportunities, or capital events. Structures are developed to adapt alongside business performance.",
  },
];

export default function GeorgiaPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(11 35 65 / 72%), rgb(11 35 65 / 88%)), url("/assets/images/businesscreditsolution.jfif")',
            }}
          >
            <div className="relative z-10 max-w-3xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>location_on</span>
                SERVICE AREA — GEORGIA
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                Middle Market Private Credit, Accounts Receivable Financing &amp; ABL in Georgia
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                Middle-market companies across Georgia rely on EPOCH Financial to structure accounts receivable financing, asset-based lending (ABL), and private credit facilities aligned with liquidity needs, collateral availability, and transaction objectives. We work with borrowers, operators, and financial sponsors to evaluate collateral, prepare lender-ready opportunities, and run structured financing processes for acquisitions, recapitalizations, refinancing initiatives, and growth capital transactions.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Georgia Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPITAL SOLUTIONS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Capital Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Structured Middle Market Capital Solutions in Georgia
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-bg-alt p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug">{s.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Industries We Serve Across Georgia
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We support middle-market companies across Georgia with financing structures tailored to industry-specific cash flow cycles, collateral profiles, and operating requirements. Financing structures may incorporate accounts receivable financing and asset-based lending solutions where receivables, inventory, and other operating assets support borrowing capacity, considered alongside cash flow-based and hybrid structuring approaches.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-white p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug">{s.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Locations</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Locations We Serve in Georgia
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              EPOCH Financial supports borrowers and sponsor-backed companies across Georgia, including major commercial, manufacturing, and logistics markets where acquisition activity and working capital demand continue to drive private credit activity. Financing structures are tailored around collateral availability, liquidity requirements, and transaction objectives.
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <FadeUp key={city} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-alt px-5 py-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>location_on</span>
                  <span className="text-secondary font-semibold text-base">{city}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Approach</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Our Approach to Private Credit in Georgia
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Middle-market borrowers and financial sponsors require more than capital availability. They require structured execution, lender alignment, and financing strategies built around operational realities. EPOCH Financial structures credit solutions around liquidity requirements, collateral quality, transaction objectives, and long-term business performance while maintaining disciplined underwriting standards throughout the process.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 80}>
                <div className="flex gap-5 rounded-2xl border border-border-light bg-white p-8 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{p.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-secondary font-bold text-lg leading-snug">{p.title}</h3>
                    <p className="text-body-gray text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgb(11 35 65 / 92%), rgb(11 35 65 / 96%)), url("/assets/images/businesscreditsolution.jfif")',
        }}
      >
        <div className="mx-auto max-w-[1600px] relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
              Private Credit Solutions Across Georgia
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              EPOCH Financial works with middle-market companies and sponsor-backed platforms across Georgia to structure accounts receivable financing, asset-based lending, and private credit solutions aligned with liquidity needs, collateral availability, and transaction execution requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our Georgia Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
