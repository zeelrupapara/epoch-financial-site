"use client";

import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

const financingStrategies = [
  {
    id: "receivables",
    icon: "receipt_long",
    title: "Receivables Liquidity Solutions",
    description:
      "In government contract finance, receivables represent a high-quality asset due to the creditworthiness of government payors. However, extended payment cycles can create pressure on operational liquidity.",
    note: "Receivables-based structures convert approved invoices into immediate working capital, enabling contractors to sustain execution without disruption.",
    useCasesTitle: "Typical applications include:",
    useCases: [
      "Managing payroll across active contracts",
      "Paying subcontractors and vendors",
      "Bridging delayed government disbursements",
      "Funding ongoing contract execution",
      "Stabilizing working capital cycles",
    ],
    footnote:
      "These facilities are commonly structured within broader government contractors financing frameworks, including asset-based lending structures.",
  },
  {
    id: "contract-backed",
    icon: "verified",
    title: "Contract-Backed Facilities",
    description:
      "Awarded contracts form the foundation of government contract financing, offering predictable revenue visibility and structured payment timelines.",
    note: "Financing solutions are aligned with contract value, performance milestones, and disbursement schedules, enabling contractors to access capital based on secured work.",
    useCasesTitle: "Common use cases include:",
    useCases: [
      "Funding newly awarded contracts",
      "Supporting multi-year agreements",
      "Managing mobilization costs",
      "Scaling across multiple contracts",
      "Leveraging contract backlog",
    ],
    footnote:
      "Within federal government contract financing, underwriting places strong emphasis on agency credit quality and contract enforceability.",
  },
  {
    id: "equipment",
    icon: "precision_manufacturing",
    title: "Equipment Capital Financing",
    description:
      "Government contractors require specialized equipment and infrastructure to fulfill contract obligations efficiently. Equipment financing enables capital investment without constraining liquidity.",
    note: "These structures align asset utilization with contract duration, ensuring efficient deployment of capital.",
    useCasesTitle: "Typical scenarios include:",
    useCases: [
      "Acquiring contract-specific equipment",
      "Expanding operational infrastructure",
      "Upgrading systems and technology",
      "Supporting field operations",
      "Replacing outdated machinery",
    ],
    footnote: "Facilities are often integrated within broader government contract finance structures.",
  },
  {
    id: "expansion",
    icon: "trending_up",
    title: "Contract Expansion Capital",
    description:
      "As contractors secure larger or additional projects, capital requirements increase across workforce, materials, and operational capacity.",
    note: "Government contract financing supports controlled expansion aligned with backlog visibility and execution capability.",
    useCasesTitle: "Typical growth drivers include:",
    useCases: [
      "Scaling into higher-value contracts",
      "Expanding across agencies or regions",
      "Increasing workforce capacity",
      "Adding service capabilities",
      "Managing higher contract volumes",
    ],
    footnote: "These structures ensure growth is supported without compromising financial discipline.",
  },
  {
    id: "subcontractor",
    icon: "handshake",
    title: "Subcontractor Payment Support",
    description:
      "Government contracting ecosystems depend on reliable subcontractor and vendor relationships. Delays in payments can impact execution timelines and compliance.",
    note: "Structured financing ensures timely payments across the supply chain.",
    useCasesTitle: "Common uses include:",
    useCases: [
      "Paying subcontractors on time",
      "Managing vendor obligations",
      "Supporting procurement cycles",
      "Strengthening supplier relationships",
      "Maintaining contract timelines",
    ],
    footnote:
      "This layer of government contractors\u2019 financing enhances operational stability and execution reliability.",
  },
];

const segments = [
  {
    icon: "military_tech",
    title: "Defense and Security Contractors",
    description:
      "Financing supports companies delivering products and services to defense agencies, where long-term contracts and strict compliance standards are common.",
    characteristics: [
      "Multi-year contracts",
      "High compliance requirements",
      "Specialized equipment needs",
      "Stable demand backed by government budgets",
    ],
  },
  {
    icon: "architecture",
    title: "Infrastructure and Public Works Contractors",
    description:
      "Businesses executing public infrastructure projects require financing aligned with phased delivery and milestone-based payments.",
    characteristics: [
      "Large-scale project execution",
      "High material and labor costs",
      "Structured payment schedules",
      "Multi-phase contracts",
    ],
  },
  {
    icon: "computer",
    title: "Government IT and Technology Services",
    description:
      "Technology contractors benefit from recurring, contract-based revenue models supported by long-term agreements.",
    characteristics: [
      "Service-based contracts",
      "Skilled workforce requirements",
      "Long-term agency relationships",
      "Scalable delivery models",
    ],
  },
  {
    icon: "local_hospital",
    title: "Healthcare and Public Sector Services",
    description:
      "Contractors providing essential services require consistent liquidity to maintain uninterrupted operations.",
    characteristics: [
      "Recurring contracts",
      "Predictable demand",
      "Workforce-driven operations",
      "High renewal rates",
    ],
  },
  {
    icon: "apartment",
    title: "Facilities and Support Services",
    description:
      "Companies delivering maintenance and operational support services rely on stable, long-term agreements.",
    characteristics: [
      "Ongoing service contracts",
      "Distributed operations",
      "Labor-intensive cost structures",
      "Consistent revenue streams",
    ],
  },
];

const financingParams = [
  {
    icon: "payments",
    label: "Loan Size",
    value: "$3 million to $75 million",
  },
  {
    icon: "trending_up",
    label: "Annual Revenue",
    value: "$20 million to $500 million",
  },
  {
    icon: "groups",
    label: "Borrowers",
    desc: "Government contractors, service providers, infrastructure firms, and sponsor-backed companies",
  },
];

const strategicAdvantages = [
  {
    icon: "hub",
    title: "Streamlined Execution Approach",
    description:
      "A unified financing structure reduces complexity and improves efficiency across underwriting, structuring, and funding.",
    bulletsTitle: null,
    bullets: null,
    footnote: null,
  },
  {
    icon: "bolt",
    title: "Timely Access to Capital",
    description:
      "Contractors often require immediate liquidity during mobilization and execution phases. Efficient credit processes support faster funding timelines.",
    bulletsTitle: null,
    bullets: null,
    footnote: null,
  },
  {
    icon: "tune",
    title: "Flexible Financing Structures",
    description:
      "Government contractors benefit from adaptable capital solutions that align with varying contract requirements.",
    bulletsTitle: "These may include:",
    bullets: [
      "Receivables-based financing",
      "Contract-backed credit facilities",
      "Equipment financing",
      "Growth capital solutions",
    ],
    footnote: null,
  },
  {
    icon: "analytics",
    title: "Performance-Focused Evaluation",
    description:
      "Financing decisions are based on operational and contract performance rather than static financial metrics.",
    bulletsTitle: "Key evaluation factors include:",
    bullets: [
      "Contract backlog and pipeline",
      "Agency credit quality",
      "Revenue concentration",
      "Execution history",
      "Cost structure and margins",
    ],
    footnote: "This approach supports sustainable and scalable financing outcomes.",
  },
  {
    icon: "schedule",
    title: "Predictable Funding Timelines",
    description:
      "Defined underwriting processes provide clarity and reliability, enabling contractors to plan operations with confidence.",
    bulletsTitle: null,
    bullets: null,
    footnote: null,
  },
];

const whyEpoch = [
  {
    icon: "policy",
    title: "Industry-Specific Understanding",
    description:
      "Financing structures are aligned with government procurement processes, contract cycles, and compliance requirements.",
  },
  {
    icon: "corporate_fare",
    title: "Dedicated Middle Market Focus",
    description:
      "Solutions are designed specifically for companies operating between traditional bank lending and large institutional capital providers.",
  },
  {
    icon: "build_circle",
    title: "Tailored Capital Structuring",
    description: "Each facility is structured around contract dynamics, operational needs, and growth strategy.",
  },
  {
    icon: "verified_user",
    title: "Consistent and Reliable Execution",
    description: "Streamlined underwriting and structured processes ensure predictable outcomes.",
  },
  {
    icon: "timeline",
    title: "Long-Term Capital Support",
    description:
      "Financing relationships are built to support ongoing growth, including contract expansion and future opportunities.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about our government contract financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "How is leverage determined in government contractors financing?",
      answer:
        "Leverage is based on contract value, backlog visibility, agency credit strength, and execution history rather than solely on balance sheet metrics.",
    },
    {
      question: "What collateral supports government contract finance?",
      answer:
        "Collateral typically includes accounts receivable, contract rights, equipment, and cash flow. In federal government contract financing, agency strength plays a critical role.",
    },
    {
      question: "How are government contractors evaluated?",
      answer:
        "Evaluation focuses on contract pipeline, revenue concentration, agency exposure, operational scalability, and past performance.",
    },
    {
      question: "How long does government contract financing take to close?",
      answer:
        "Timelines depend on complexity, but strong documentation and structured underwriting processes can significantly accelerate execution.",
    },
  ],
};

export default function GovernmentContractingPageClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 82%)), url("/assets/images/govermanet-contracting.jpg")',
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
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  assured_workload
                </span>
                GOVERNMENT CONTRACTING INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Middle Market Credit Solutions for Government Contractors
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                Structured capital solutions for government contractors financing designed specifically for middle market
                companies to enhance liquidity, support contract execution, and enable controlled expansion across
                compliance-driven environments.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="#"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  Evaluate a Financing Opportunity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALIGNING CREDIT STRUCTURES — sticky left heading + right paragraphs ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left sticky heading */}
            <FadeUp className="lg:w-[40%] flex flex-col gap-5 lg:sticky lg:top-28">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Contract Cash Flow
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
                Aligning Credit Structures with Contract-Driven Cash Flow Cycles
              </h2>
              <div className="w-14 h-1 rounded-full bg-primary" />
              <p className="text-body-gray text-sm leading-relaxed mt-2">
                Middle market government contractors operate within a revenue model defined by awarded contracts, yet
                cash flow realization is often delayed due to approval processes, milestone billing, and government
                payment timelines.
              </p>
            </FadeUp>

            {/* Right: remaining 3 paragraphs */}
            <div className="lg:w-[60%] flex flex-col gap-8 lg:pt-10">
              {[
                "Government contract financing is structured to address these timing gaps by aligning liquidity with contract performance cycles. Rather than relying solely on balance sheet strength, facilities are designed around contract value, backlog visibility, and payment certainty.",
                "For companies engaged in federal work, federal government contract financing incorporates additional considerations such as agency credit quality, regulatory compliance, and historical execution performance.",
                "Credit facilities are structured to directly reflect these operating realities, ensuring liquidity supports execution without disrupting day-to-day operations",
              ].map((para, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{para}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE FINANCING STRATEGIES — swiper carousel ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          {/* Header row */}
          <FadeUp>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
                  Financing Strategies
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
                  Core Financing Strategies for Government Contracting Businesses
                </h2>
                <p className="text-body-gray md:text-base text-sm leading-relaxed">
                  Financing strategies are structured to align with contract cycles, receivables, and execution demands
                  across government contracting operations.
                </p>
              </div>

              {/* Custom nav buttons */}
              <div className="flex items-center gap-3 shrink-0 sm:pt-2">
                <button
                  id="strat-prev"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_back</span>
                </button>
                <button
                  id="strat-next"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                </button>
              </div>
            </div>
          </FadeUp>

          {/* Swiper */}
          <FadeUp delay={80}>
            <div className="overflow-hidden pb-3 -mb-3">
            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: "#strat-prev", nextEl: "#strat-next" }}
              spaceBetween={16}
              slidesPerView={1.1}
              breakpoints={{
                480:  { slidesPerView: 1.3, spaceBetween: 16 },
                640:  { slidesPerView: 1.7, spaceBetween: 20 },
                900:  { slidesPerView: 2.2, spaceBetween: 20 },
                1200: { slidesPerView: 3,   spaceBetween: 24 },
              }}
              style={{ paddingBottom: "8px" }}
              className="[&_.swiper-wrapper]:items-stretch"
            >
              {financingStrategies.map((strategy) => (
                <SwiperSlide key={strategy.id} className="!h-auto">
                  <div className="group flex flex-col bg-white rounded-2xl border border-border-light hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">

                    {/* Top bar */}
                    <div className="h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />

                    <div className="flex flex-col flex-1 p-7 gap-5">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                          {strategy.icon}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[17px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                        {strategy.title}
                      </h3>

                      {/* Description */}
                      <p className="text-body-gray text-sm leading-relaxed">
                        {strategy.description}
                      </p>

                      {/* Note */}
                      <p className="text-body-gray text-sm leading-relaxed">
                        {strategy.note}
                      </p>

                      {/* Use cases */}
                      <div className="mt-auto pt-5 border-t border-border-light flex flex-col gap-2.5">
                        <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-1">
                          {strategy.useCasesTitle}
                        </p>
                        {strategy.useCases.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 15 }}>
                              check_circle
                            </span>
                            <span className="text-body-gray text-[13px] leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn more */}
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-primary text-[13px] font-semibold w-fit hover:gap-2 transition-all duration-200 mt-1"
                      >
                        Learn More
                        <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>

          </FadeUp>

        </div>
      </section>

      {/* ── MID CTA ── */}
      <CTABanner
        title="Optimize Working Capital with AR Financing for Government Contracts"
        buttonText="Discuss a Financing Structure"
        bgImage="/assets/images/cta-bg-alt1.jpg"
      />

      {/* ── SEGMENTS — card grid ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Segments Supported
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Major Government Contracting Segments Supported
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Financing solutions support diverse government contracting segments, aligning capital with contract
              structures, execution requirements, and sector-specific operational and compliance demands.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {segments.map((seg, i) => (
              <FadeUp key={seg.title} delay={i * 70}>
                <div className="group flex flex-col bg-white border border-border-light rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                      {seg.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-secondary leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                    {seg.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-gray text-sm leading-relaxed mb-5">
                    {seg.description}
                  </p>

                  {/* Characteristics */}
                  <div className="mt-auto pt-5 border-t border-border-light flex flex-col gap-2.5">
                    <p className="text-secondary text-[11px] font-bold uppercase tracking-widest mb-1">
                      Characteristics
                    </p>
                    {seg.characteristics.map((c) => (
                      <div key={c} className="flex items-start gap-2.5">
                        <span
                          className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                          style={{ fontSize: 15 }}
                        >
                          check_circle
                        </span>
                        <span className="text-body-gray text-[13px] leading-relaxed">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING PARAMETERS — dark section ── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 overflow-hidden relative">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(13,162,231,0.04)" }}
        />
        <div className="relative mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Transaction Profile
            </span>
            <h2 className="text-white 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Middle Market Government Contract Financing Parameters
            </h2>
            <p className="text-white/50 md:text-base text-sm mt-4 leading-relaxed">
              Government contract financing for middle market companies typically operates within defined ranges:
            </p>
            <p className="text-white/35 text-sm mt-1">Typical transaction profile:</p>
          </FadeUp>

          <div
            className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {financingParams.map((param, i) => (
              <FadeUp key={param.label} delay={i * 100}>
                <div
                  className="group flex flex-col items-center text-center gap-4 p-8 md:p-10 transition-colors duration-300 hover:bg-white/5"
                  style={{
                    borderRight:
                      i < financingParams.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                      {param.icon}
                    </span>
                  </div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    {param.label}
                  </span>
                  {param.value && (
                    <p className="text-white text-[22px] md:text-[26px] lg:text-[30px] font-extrabold leading-tight">
                      {param.value}
                    </p>
                  )}
                  {param.desc && (
                    <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">{param.desc}</p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400} className="text-center mt-10">
            <p className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed">
              Structures are customized based on contract concentration, agency exposure, and operational performance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STRATEGIC ADVANTAGES — dark left panel + feature rows right ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-stretch">

            {/* Left: dark sticky panel */}
            <FadeUp className="lg:w-[36%] shrink-0">
              <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden bg-secondary flex flex-col justify-between p-8 xl:p-10 lg:sticky lg:top-28">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                <div className="relative z-10 flex flex-col gap-6">
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/20 text-primary px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest">
                    Key Advantages
                  </span>
                  <h2 className="text-white 2xl:text-[34px] lg:text-[26px] md:text-[28px] text-[24px] font-bold leading-tight">
                    Strategic Advantages of Government Contract Financing
                  </h2>
                  <div className="w-10 h-0.5 rounded-full bg-primary" />
                  <p className="text-white/55 text-sm leading-relaxed">
                    Government contractors require financing structures aligned with contract cycles, compliance
                    requirements, and execution timelines.
                  </p>
                </div>
                <div className="relative z-10 mt-10 grid grid-cols-2 gap-4">
                  {[
                    { value: "5", label: "Core Advantages" },
                    { value: "Fast", label: "Funding Access" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.05] border border-white/10 rounded-xl p-4">
                      <p className="text-primary text-[22px] font-black leading-none mb-1">{stat.value}</p>
                      <p className="text-white/50 text-[11px] font-medium leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right: stacked advantage rows */}
            <div className="lg:w-[64%] flex flex-col gap-4">
              {strategicAdvantages.map((adv, i) => (
                <FadeUp key={adv.title} delay={i * 60}>
                  <div className="group bg-white rounded-2xl border border-border-light hover:border-primary/25 hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="flex items-start gap-5 p-6 xl:p-7">
                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-white group-hover:bg-primary transition-all duration-300">
                        <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                          {adv.icon}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col gap-2">
                        <h3 className="text-[16px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                          {adv.title}
                        </h3>
                        <p className="text-body-gray text-sm leading-relaxed">{adv.description}</p>

                        {adv.bullets && (
                          <div className="mt-2 pt-3 border-t border-border-light">
                            <p className="text-secondary text-[11px] font-bold uppercase tracking-wider mb-2.5">
                              {adv.bulletsTitle}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                              {adv.bullets.map((b) => (
                                <div key={b} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                  <span className="text-body-gray text-[13px]">{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {adv.footnote && (
                          <p className="text-body-gray/70 text-[12px] leading-relaxed mt-1 italic">
                            {adv.footnote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EPOCH — split layout with image ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">

            {/* Left: image */}
            <FadeUp className="lg:w-[44%] shrink-0">
              <div className="relative h-full min-h-[420px] lg:min-h-[560px] rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/industry-government-new.jpg"
                  alt="Government contractors partnering with EPOCH Financial"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-lg font-bold leading-snug">
                    Structured Capital Solutions for Middle Market Government Contractors
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right: heading + items */}
            <div className="lg:w-[56%] flex flex-col justify-center">
              <FadeUp>
                <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
                  Our Commitment
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
                  Why Middle Market Government Contractors Partner with EPOCH Financial
                </h2>
                <p className="text-body-gray md:text-base text-sm leading-relaxed mb-8">
                  Credit facilities are structured to align capital with contract cycles, execution demands, and growth
                  objectives, ensuring consistent, scalable performance for middle market government contractors.
                </p>
              </FadeUp>

              <div className="flex flex-col gap-4">
                {whyEpoch.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 70}>
                    <div className="group flex items-start gap-4 p-5 rounded-xl bg-bg-alt border border-border-light hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-secondary mb-1 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-body-gray text-[13px] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={500} className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-8 py-3.5 text-white text-[15px] font-semibold shadow-lg hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Learn more
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    arrow_forward
                  </span>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title={"Partner with a Government Contract\nFinancing Provider"}
        description="Government contractors require consistent access to structured capital to support execution, liquidity management, and scalable growth. Credit facilities are structured to align with the operational realities of middle market government contractors."
        buttonText="Contact Our Team"
        bgImage="/assets/images/cta-bg-alt3.jpg"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
