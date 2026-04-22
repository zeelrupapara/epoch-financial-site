import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import ConstructionFacilitiesTabs from "@/components/construction/ConstructionFacilitiesTabs";
import ConstructionSegmentsAccordion from "@/components/construction/ConstructionSegmentsAccordion";

export const metadata = {
  title: "Construction Financing Solutions for Middle Market Companies | EPOCH Financial",
  description:
    "Explore structured capital for construction firms: AR financing, equipment finance, and project-based solutions to boost cash flow and growth.",
  keywords:
    "commercial construction financing, commercial construction lending, construction loan for commercial property",
};

const benefits = [
  {
    icon: "account_balance_wallet",
    title: "Improved Cash Flow Management",
    description:
      "Credit facilities unlock liquidity tied up in receivables, including progress billings and retainage, enabling construction companies to maintain consistent cash flow despite delayed collections.",
  },
  {
    icon: "engineering",
    title: "Support for Project Execution Costs",
    description:
      "Access to structured capital supports ongoing project expenses such as subcontractor payments, materials procurement, and site development. This ensures projects continue without disruption due to timing gaps in cash inflows.",
  },
  {
    icon: "sync_alt",
    title: "Flexibility Across Contract Cycles",
    description:
      "Construction projects often involve phased billing and extended payment timelines. Structured capital frameworks align liquidity with these cycles, allowing companies to manage multiple projects simultaneously while maintaining financial balance.",
  },
  {
    icon: "trending_up",
    title: "Scalable Capital Aligned with Project Growth",
    description:
      "As construction companies expand their project pipeline or take on larger contracts, financing structures can scale accordingly. This supports growth across new geographies, larger developments, and increased project volume.",
  },
  {
    icon: "verified",
    title: "Enhanced Operational Continuity",
    description:
      "Reliable access to capital supports consistent execution across job sites, helping manage labor, equipment utilization, and supplier commitments without delays, even during cash flow fluctuations.",
  },
  {
    icon: "savings",
    title: "Reduced Strain on Internal Capital",
    description:
      "By utilizing structured financing, construction companies can preserve internal cash reserves for strategic priorities such as equipment investment, expansion initiatives, and long-term development opportunities.",
  },
];

const whyEpoch = [
  {
    num: "01",
    title: "Execution-Led Approach",
    description:
      "We lead the full credit process from structuring through closing, managing lender engagement, negotiating terms, and driving transaction execution.",
  },
  {
    num: "02",
    title: "Lender Process Management",
    description:
      "We run competitive lender processes across banks, private credit funds, and specialty finance providers to optimize structure, pricing, and certainty of execution.",
  },
  {
    num: "03",
    title: "Construction-Focused Structuring",
    description:
      "Facilities are designed around contract cycles, receivables behavior, equipment usage, and project timelines, ensuring alignment with real operating conditions.",
  },
  {
    num: "04",
    title: "Transaction Control & Certainty",
    description:
      "We maintain control over timelines, documentation, and execution, reducing delays and improving deal certainty in complex construction environments.",
  },
  {
    num: "05",
    title: "Middle Market Specialization",
    description:
      "Focused on companies operating beyond traditional bank thresholds, where structure, flexibility, and execution capability are critical.",
  },
];

const faqs = {
  intro: "Everything you need to know about construction financing. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "What is the role of receivables in construction financing structures?",
      answer:
        "Receivables, including progress billings and retainage, often form a key component of construction financing. Structures such as AR financing for construction companies align liquidity with receivables performance and collection cycles.",
    },
    {
      question: "Can financing solutions support multiple ongoing projects simultaneously?",
      answer:
        "Yes, structured capital frameworks are designed to support companies operating across multiple job sites, with availability often linked to overall receivables, contract backlog, and project pipeline.",
    },
    {
      question: "How do construction companies manage delayed payments and retainage?",
      answer:
        "Structured capital solutions help bridge delays caused by retainage and milestone billing by aligning liquidity with expected receivables, supporting consistent cash flow across project cycles.",
    },
    {
      question: "Can financing scale with project growth or expansion?",
      answer:
        "Financing structures are typically designed to scale alongside project volume, contract size, and geographic expansion, supporting companies as they take on larger or more complex developments.",
    },
  ],
};

export default function ConstructionPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage: 'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/industry-construction-new.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>construction</span>
                CONSTRUCTION INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Credit Solutions for Middle Market Construction Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Credit facilities for middle market construction companies are structured around project timelines, contract cycles, and asset performance. We structure and execute credit facilities aligned with construction workflows, supporting project delivery, liquidity across active jobs, and disciplined capital management in complex operating environments.
              </p>
              <Link
                href="#opportunity"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Evaluate a Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW STRUCTURED CREDIT SUPPORTS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Image */}
            <FadeUp className="lg:w-[42%] shrink-0" delay={80}>
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 380 }}>
                <img
                  src="/assets/images/industry-construction-new.jpg"
                  alt="Commercial construction project site"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay tag */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                  <p className="text-secondary text-sm font-bold leading-snug">
                    "Liquidity aligned with project timelines, milestone billing, and extended receivables cycles."
                  </p>
                </div>
              </div>
            </FadeUp>
            {/* Content */}
            <FadeUp className="lg:w-[58%]" delay={160}>
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Overview</p>
              <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-5">
                How Structured Credit Supports Commercial Construction Operations
              </h2>
              <div className="space-y-4 text-body-gray text-sm md:text-base leading-relaxed">
                <p>
                  Structured credit supports commercial construction operations by aligning capital with project timelines, milestone billing, and extended receivables cycles. In this environment, liquidity is often tied up across ongoing projects, making consistency in capital access critical for execution.
                </p>
                <p>
                  Solutions such as AR financing for construction companies are commonly integrated to align availability with billed and unbilled receivables, helping manage delays from retainage and contract-based payments.
                </p>
                <p>
                  These structures adjust with receivables performance and project activity, creating a responsive financial framework. This enables better management of subcontractor payments, procurement, and labor costs while maintaining operational continuity across projects. At EPOCH Financial, we structure and execute credit facilities aligned with construction workflows, managing lender engagement, facility design, and transaction execution from initial structuring through closing.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── STRUCTURED CREDIT FACILITIES (TABS) ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="max-w-3xl mb-2">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Capital Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-3">
              Structured Credit Facilities for Construction Companies
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed">
              Construction companies operate within complex, capital-intensive environments, requiring disciplined and scalable capital structures to support project execution, contract cycles, and continuity across multiple job sites and development phases.
            </p>
          </FadeUp>
          <ConstructionFacilitiesTabs />

          {/* Mid-section CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl bg-secondary p-8 md:p-10">
            <div>
              <p className="text-white text-lg md:text-xl font-bold mb-1">Unlock Liquidity Through Receivables Financing in Construction</p>
            </div>
            <Link
              href="#opportunity"
              className="shrink-0 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-[#0b8fcc] transition-colors whitespace-nowrap"
            >
              Discuss a Financing Structure
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CORE SEGMENTS (ACCORDION) ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industry Segments</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight">
              Understanding Core Segments of the Construction Industry
            </h2>
          </FadeUp>
          <ConstructionSegmentsAccordion />
        </div>
      </section>

      {/* ─── FINANCING SIZE & STRUCTURE ─── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left */}
            <FadeUp className="lg:w-[40%] shrink-0">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Transaction Profile</p>
              <h2 className="text-white 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-5">
                Construction Industry Financing Size and Structure
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Credit facilities are structured for middle market construction companies based on contract backlog, receivables quality, and asset coverage. We design and execute these facilities in coordination with lenders, aligning structure, sizing, and availability with project-driven cash flow dynamics.
              </p>
            </FadeUp>
            {/* Right — stat blocks */}
            <FadeUp className="lg:w-[60%]" delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mb-6">
                <div className="bg-[#0c2d50] p-8 flex flex-col gap-1">
                  <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-2">Loan Size</p>
                  <p className="text-white text-3xl font-extrabold">$10M</p>
                  <p className="text-white/40 text-sm">to</p>
                  <p className="text-white text-3xl font-extrabold">$150M+</p>
                </div>
                <div className="bg-[#0d3258] p-8 flex flex-col gap-1">
                  <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-2">Annual Revenue</p>
                  <p className="text-white text-3xl font-extrabold">$30M</p>
                  <p className="text-white/40 text-sm">to</p>
                  <p className="text-white text-3xl font-extrabold">$750M</p>
                </div>
                <div className="bg-[#0f3760] p-8 flex flex-col justify-between gap-3">
                  <p className="text-primary text-[11px] font-semibold uppercase tracking-widest">Borrowers</p>
                  <p className="text-white/70 text-sm leading-relaxed">General contractors, subcontractors, infrastructure developers, real estate developers, and sponsor-backed construction platforms</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed border-l-2 border-primary/40 pl-4">
                Each facility is designed based on contract backlog, receivables quality, project timelines, equipment base, and overall operational scale and growth objectives.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC BENEFITS ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight">
              Strategic Benefits of Financing for Construction Businesses
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed mt-4">
              Credit facilities support construction companies in managing project-driven cash flow, contract timing gaps, and execution across multiple job sites.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 70}>
                <div className="relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border-light overflow-hidden">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/8 text-secondary mb-5" style={{ background: "rgba(17,55,95,0.07)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{b.icon}</span>
                  </div>
                  <h3 className="text-secondary text-base md:text-lg font-bold mb-3 leading-snug">{b.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{b.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY EPOCH ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Partner with EPOCH Financial for Construction Capital Solutions 
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed mt-4">
              EPOCH Financial works alongside middle market construction companies requiring structured and scalable capital solutions across complex project cycles and asset-intensive environments. 
            </p>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left sticky image block */}
            <FadeUp className="lg:w-[38%] shrink-0 lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 320 }}>
                <img
                  src="/assets/images/constructre.jpg"
                  alt="EPOCH Financial construction partners"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-bold leading-snug">Why Partner with EPOCH Financial for Construction Capital Solutions</p>
                </div>
              </div>
              <Link
                href="/about/our-approach"
                className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Learn More
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </FadeUp>

            {/* Right — numbered steps */}
            <div className="lg:w-[62%] flex flex-col gap-0 relative">
              {/* Connecting line */}
              <div className="absolute left-[23px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent hidden md:block" />
              {whyEpoch.map((item, i) => (
                <FadeUp key={item.num} delay={i * 90}>
                  <div className="flex gap-6 pb-8 last:pb-0">
                    <div className="shrink-0 flex flex-col items-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-primary text-[13px] font-black z-10">
                        {item.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-2 pb-2">
                      <h3 className="text-secondary text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-body-gray text-sm md:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TAILORED CTA ─── */}
      <section
        id="opportunity"
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0c2d50, #11375F 50%, #164d87)" }}
      >
        {/* Decorative circle */}
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary/10 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
        <div className="mx-auto max-w-[1600px] relative z-10">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-extrabold leading-tight mb-5">
              Tailored Capital Solutions for Commercial Construction Companies
            </h2>
            <p className="text-white/65 text-sm md:text-base leading-relaxed mb-8">
              Discuss a credit facility structured around your project pipeline, contract cycles, and asset base. We will evaluate, structure, and execute a financing solution aligned with your timelines and operational requirements.
            </p>
            <div className="flex justify-center">
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-secondary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-primary hover:text-white"
              >
                Contact Our Team
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
