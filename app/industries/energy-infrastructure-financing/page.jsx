import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/industries/energy-infrastructure-financing");

const advantages = [
  {
    icon: "bolt",
    title: "Capital Aligned to Project Cycles",
    description:
      "Energy and infrastructure projects move through extended development, construction, and operating phases. Financing structures are aligned with these milestones to support continuity across each stage.",
  },
  {
    icon: "engineering",
    title: "Support for Equipment & Mobilization",
    description:
      "Access to capital enables investment in equipment, mobilization, and project readiness without disrupting day-to-day operations or straining internal cash reserves.",
  },
  {
    icon: "account_tree",
    title: "Flexibility Across Contract Structures",
    description:
      "Companies operate under EPC contracts, service agreements, offtake arrangements, and milestone billing. Structured frameworks adapt to these varied revenue and payment patterns.",
  },
  {
    icon: "trending_up",
    title: "Scalable Capital for Growth",
    description:
      "As companies take on larger projects, expand service lines, or enter new markets, capital structures scale in line with operational and strategic objectives.",
  },
  {
    icon: "water_drop",
    title: "Bridging Extended Payment Cycles",
    description:
      "Receivables and progress billings in energy and infrastructure work often carry long collection periods. Financing bridges these cycles to maintain stable working capital.",
  },
  {
    icon: "savings",
    title: "Preservation of Internal Capital",
    description:
      "Structured solutions allow companies to direct internal resources toward project delivery, safety, and long-term capability rather than short-term liquidity gaps.",
  },
];

const whyEpoch = [
  {
    icon: "hub",
    title: "Sector Alignment",
    description:
      "Capital approaches reflect an understanding of how energy and infrastructure businesses operate — long project timelines, milestone billing, subcontractor networks, and capital-intensive execution.",
  },
  {
    icon: "tune",
    title: "Flexible Structuring Approach",
    description:
      "Frameworks are built around receivables, progress billings, contracts, and equipment, allowing financing to evolve with project pipelines and changing market conditions.",
  },
  {
    icon: "verified",
    title: "Disciplined Underwriting",
    description:
      "Structures are anchored by collateral quality, contract strength, and counterparty performance, supporting durable credit aligned with measurable asset value.",
  },
  {
    icon: "groups",
    title: "Lender Coordination",
    description:
      "We manage lender relationships and execute transactions so companies can focus on project delivery rather than navigating fragmented capital markets.",
  },
  {
    icon: "shield",
    title: "Operational Stability",
    description:
      "Reliable liquidity supports consistent execution, payroll, and subcontractor obligations across multi-phase energy and infrastructure programs.",
  },
  {
    icon: "timeline",
    title: "Aligned for Long-Term Growth",
    description:
      "Capital frameworks evolve with the project pipeline, enabling companies to pursue larger mandates while maintaining financial balance and resilience.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about capital solutions for energy and infrastructure companies. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "What is energy and infrastructure financing?",
      answer:
        "Energy and infrastructure financing refers to structured credit solutions that support companies operating across power generation, utilities, energy services, and infrastructure projects. These structures are aligned with project cycles, contracts, and receivables to provide dependable working capital.",
    },
    {
      question: "What types of companies can benefit from these solutions?",
      answer:
        "Energy services firms, power and utility contractors, infrastructure developers, EPC contractors, and equipment-intensive operators in the energy sector can benefit from structured capital aligned with their contract and billing cycles.",
    },
    {
      question: "How is capital structured for project-based work?",
      answer:
        "Financing is typically anchored by eligible receivables, progress billings, equipment, and contracts. Borrowing capacity is aligned with measurable asset quality and counterparty strength, allowing capital availability to scale with the project pipeline.",
    },
  ],
};

export default function EnergyInfrastructurePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(11 35 65 / 72%), rgb(11 35 65 / 88%)), url("/assets/images/oil-gas-epoch.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>bolt</span>
                ENERGY &amp; INFRASTRUCTURE
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Credit Solutions for Middle Market Energy &amp; Infrastructure Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Structured capital strategies for middle market energy and infrastructure companies align financing with project cycles, contracts, and receivables — supporting execution, equipment investment, and sustained growth while maintaining liquidity discipline.
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

      {/* ─── OVERVIEW ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Overview</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-10">
              The Impact of Capital Solutions on Energy &amp; Infrastructure Operations
            </h2>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <FadeUp className="lg:w-[52%]" delay={120}>
              <p className="text-body-gray text-sm md:text-[17px] leading-relaxed font-medium border-l-4 border-primary pl-6 italic">
                Capital solutions play a critical role in supporting energy and infrastructure operations by aligning financial resources with extended project cycles and capital-intensive execution. For middle market companies, access to structured capital enables investment in equipment, mobilization, and project delivery without disrupting cash flow stability.
              </p>
            </FadeUp>
            <FadeUp className="lg:w-[48%] flex flex-col gap-5" delay={180}>
              <p className="text-body-gray text-sm md:text-base leading-relaxed">
                These solutions also help manage uneven payment patterns common to milestone billing, progress payments, and long collection cycles. By providing flexible liquidity, capital strategies allow companies to take on larger mandates and respond to new opportunities.
              </p>
              <p className="text-body-gray text-sm md:text-base leading-relaxed">
                Disciplined capital structuring supports risk management, improves financial visibility, and strengthens operational resilience across the power, utilities, and infrastructure landscape.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── CAPITAL SIZE & STRUCTURING ─── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4 text-center">Transaction Profile</p>
            <h2 className="text-white 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12 text-center">
              Capital Size and Structuring in Energy &amp; Infrastructure Financing
            </h2>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-10">
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[44px] lg:text-[36px] text-[30px] font-black leading-none mb-2">Up To $100M+</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Loan Size</span>
              </div>
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[44px] lg:text-[36px] text-[30px] font-black leading-none mb-2">$15M+</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Annual Revenue</span>
              </div>
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[44px] lg:text-[36px] text-[30px] font-black leading-none mb-2">Middle Market</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Focus</span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="border-t border-white/10 pt-8 max-w-3xl mx-auto text-center">
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-2">
                Financing solutions are structured for middle market energy and infrastructure companies operating across capital-intensive, project-driven business models.
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                Companies include energy services firms, power and utility contractors, infrastructure developers, EPC contractors, and equipment-intensive operators. Each structure is aligned with receivables, progress billings, contract strength, and counterparty performance.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── STRATEGIC ADVANTAGES ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Strategic Advantages of Capital Solutions in Energy &amp; Infrastructure
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Structured capital solutions provide energy and infrastructure companies with the liquidity, flexibility, and scalability required to manage extended project cycles, milestone billing, and capital-intensive execution while maintaining operational stability.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {advantages.map((a) => (
                <div
                  key={a.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-border-light bg-white p-7 md:p-8 hover:border-primary/25 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-primary/15"
                    style={{ background: "rgba(13,162,231,0.08)" }}
                  >
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>{a.icon}</span>
                  </div>
                  <div className="w-8 h-[2px] rounded-full bg-primary/40" />
                  <h3 className="text-secondary font-bold text-base leading-snug">{a.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── WHY EPOCH ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-14">
            <FadeUp>
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Advantage</p>
              <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
                Why Partner with EPOCH Financial for Energy &amp; Infrastructure Capital
              </h2>
              <p className="text-body-gray text-sm md:text-base leading-relaxed mb-8">
                Middle market energy and infrastructure companies operate in capital-intensive, project-driven environments shaped by long timelines, milestone billing, and complex counterparty structures. Capital strategies are designed to align with these dynamics, supporting execution and long-term scalability.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Learn More
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </Link>
            </FadeUp>
            <FadeUp delay={80} className="flex flex-col justify-center gap-6">
              <div className="rounded-2xl bg-primary/5 border-l-4 border-primary p-7">
                <span className="text-primary text-[48px] font-black leading-none select-none">"</span>
                <p className="text-secondary font-semibold text-base leading-relaxed -mt-3">
                  Capital strategies designed for capital-intensive, project-driven energy and infrastructure businesses.
                </p>
              </div>
              <div className="flex items-center gap-4 pl-1">
                <span className="text-[52px] font-black text-primary leading-none">{whyEpoch.length}</span>
                <p className="text-body-gray text-sm leading-snug">Reasons energy &amp; infrastructure<br />companies choose EPOCH</p>
              </div>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyEpoch.map((item, i) => (
              <FadeUp key={item.title} delay={i * 60}>
                <div className="flex flex-col gap-4 p-7 rounded-2xl border border-border-light bg-bg-alt hover:bg-white hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{item.icon}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <h3 className="text-secondary font-bold text-[15px] leading-snug group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-body-gray text-[13px] leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="opportunity"
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgb(11 35 65 / 92%), rgb(11 35 65 / 96%)), url("/assets/images/oil-gas-epoch.jpg")',
        }}
      >
        <div className="mx-auto max-w-[1600px] relative z-10">
          <FadeUp delay={80}>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
              <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
                Adaptive Capital Solutions for Energy &amp; Infrastructure
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
                Access flexible capital strategies designed to align with your project pipeline, support execution, and enhance operational stability. Connect with us to explore solutions built around your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
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
