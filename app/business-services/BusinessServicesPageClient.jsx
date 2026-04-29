"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const creditSolutions = [
  {
    id: "receivables",
    icon: "account_balance_wallet",
    label: "Receivables Financing",
    title: "Operational Liquidity & Receivables Financing",
    description:
      "Maintaining consistent cash flow is critical for service companies managing billing cycles and milestone-based payments. We advise on and structure accounts receivable financing for middle market service companies, enabling liquidity through contracted receivables. Accounts receivable financing supports ongoing working capital requirements across operations.",
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Managing delays in client payments and billing cycles",
      "Supporting payroll for service delivery teams",
      "Funding ongoing operational requirements across service delivery functions",
      "Stabilizing cash flow across contract periods",
      "Improving liquidity across multi-client portfolios",
    ],
    note: "These solutions are commonly structured through asset-based lending facilities or revolving credit frameworks.",
  },
  {
    id: "workforce",
    icon: "groups",
    label: "Workforce Financing",
    title: "Human Capital & Workforce Financing",
    description:
      "Workforce represents the primary cost center for business services companies. We advise on financing to support hiring, retention, and scaling of service delivery teams while preserving liquidity. This is particularly relevant for companies experiencing growth or onboarding large contracts.",
    useCasesTitle: "Common applications include:",
    useCases: [
      "Scaling workforce to support new client engagements",
      "Managing recurring workforce and payroll obligations at scale",
      "Supporting contractor and project-based staffing",
      "Aligning labor costs with revenue cycles",
    ],
    note: "Facilities are typically aligned with receivables visibility, contract duration, and workforce utilization.",
  },
  {
    id: "expansion",
    icon: "trending_up",
    label: "Growth & Expansion",
    title: "Growth & Contract Expansion Financing",
    description:
      "We advise on financing structures that support expansion across clients, service lines, and geographies while maintaining financial discipline and operational balance. Structured credit facilities enable growth while maintaining financial discipline and operational balance. Financing is generally aligned with contracted revenue and client performance metrics.",
    useCasesTitle: "Typical scenarios include:",
    useCases: [
      "Expanding into new markets or service verticals",
      "Onboarding larger enterprise clients",
      "Supporting strategic partnerships and acquisitions",
      "Scaling multi-location service platforms",
    ],
    note: "These solutions are structured to align with revenue predictability and long-term growth objectives.",
  },
  {
    id: "technology",
    icon: "computer",
    label: "Technology & Systems",
    title: "Technology, Systems & Infrastructure Financing",
    description:
      "We structure financing to support investment in technology, systems, and infrastructure without disrupting working capital. Financing solutions support these investments without placing pressure on working capital. This includes both operational systems and client-facing platforms.",
    useCasesTitle: "Common use cases include:",
    useCases: [
      "Investing in service delivery platforms and tools",
      "Enhancing CRM and workflow management systems",
      "Supporting digital transformation initiatives",
      "Upgrading operational infrastructure",
    ],
    note: "Facilities are aligned with business performance, cost structures, and scalability requirements, supporting sustained operational efficiency and service delivery consistency.",
  },
];

const coreSegments = [
  {
    icon: "business_center",
    title: "Professional & Consulting Services Firms",
    description:
      "Consulting and advisory firms provide specialized expertise across strategy, finance, legal, and operations. Revenue is typically tied to engagements, retainers, or milestone-based contracts, requiring consistent delivery and strong client relationships.",
    characteristics: [
      "Knowledge-driven service delivery models",
      "Revenue linked to engagements and retainers",
      "High margin potential with low capital intensity",
      "Dependence on client relationships and reputation",
      "Flexible and scalable operating structures",
    ],
  },
  {
    icon: "people",
    title: "Staffing & Workforce Solutions Providers",
    description:
      "Staffing firms support clients with temporary, permanent, and project-based workforce solutions. These businesses operate with high payroll intensity and rely on efficient billing and collection cycles.",
    characteristics: [
      "High-volume payroll and working capital needs",
      "Revenue tied to client contracts and placements",
      "Short billing cycles with margin sensitivity",
      "Exposure to labor market dynamics",
      "Scalable multi-client service model",
    ],
  },
  {
    icon: "apartment",
    title: "Facility Management & Support Services Companies",
    description:
      "Facility management providers deliver essential services such as maintenance, security, and operations management across commercial environments. These businesses rely on long-term contracts and consistent service execution.",
    characteristics: [
      "Contract-based recurring revenue streams",
      "Labor-intensive operations",
      "Multi-location service delivery",
      "Dependence on long-term client agreements",
      "Focus on operational efficiency and cost control",
    ],
  },
  {
    icon: "campaign",
    title: "Marketing & Advertising Services Agencies",
    description:
      "Marketing and advertising firms provide branding, digital campaigns, and strategic communication services. Revenue is generated through project work, retainers, and performance-based engagements.",
    characteristics: [
      "Mix of project-based and recurring revenue",
      "High reliance on creative and strategic talent",
      "Client-driven campaign cycles",
      "Performance-focused delivery models",
      "Scalable across industries and clients",
    ],
  },
  {
    icon: "local_shipping",
    title: "Logistics & Supply Chain Service Providers",
    description:
      "Logistics companies manage transportation, warehousing, and distribution services for clients. Operations require coordination across networks and alignment with client demand cycles.",
    characteristics: [
      "Revenue tied to service volumes and contracts",
      "Asset-light and asset-heavy models",
      "Dependence on operational efficiency",
      "Exposure to cost variables such as fuel and labor",
      "Multi-location and network-driven operations",
    ],
  },
  {
    icon: "support_agent",
    title: "Business Process Outsourcing (BPO) Providers",
    description:
      "BPO companies deliver outsourced business functions including customer support, finance, and administrative services. These businesses operate on recurring contracts and require consistent service quality.",
    characteristics: [
      "Recurring revenue through long-term contracts",
      "High workforce and infrastructure requirements",
      "Focus on efficiency and service delivery standards",
      "Technology-enabled operations",
      "Scalable global delivery models",
    ],
  },
];

const capitalStats = [
  {
    icon: "payments",
    label: "Loan Size",
    value: "$5 million to $100 million+",
  },
  {
    icon: "trending_up",
    label: "Annual Revenue",
    value: "$15M+",
  },
  {
    icon: "domain",
    label: "Borrowers",
    desc: "Staffing firms, consulting and advisory businesses, facility management companies, marketing agencies, logistics providers, and multi-location service platforms",
  },
];

const benefits = [
  {
    title: "Better Alignment with Revenue Cycles",
    description:
      "Service companies often operate on milestone-based or recurring billing models. Credit solutions help align liquidity with these cycles, reducing mismatches between revenue recognition and cash inflows.",
  },
  {
    title: "Stronger Liquidity Position",
    description:
      "Access to structured credit enhances near-term liquidity, enabling companies to manage obligations such as payroll, vendor payments, and overhead without relying solely on internal cash flows.",
  },
  {
    title: "Support for Contract Execution",
    description:
      "With access to reliable capital, companies can confidently take on larger or more complex client engagements. This ensures resources are available to deliver services without financial constraints.",
  },
  {
    title: "Operational Flexibility",
    description:
      "Credit facilities provide the flexibility to navigate changes in client demand, project timelines, or market conditions, allowing businesses to adjust operations without disruption.",
  },
  {
    title: "Efficient Capital Allocation",
    description:
      "By supplementing internal cash with external credit, service companies can allocate capital more effectively toward growth initiatives, talent acquisition, and capability expansion.",
  },
  {
    title: "Stability Across Business Cycles",
    description:
      "Structured credit supports consistency in operations, helping service companies manage fluctuations in revenue, client concentration, or seasonal demand while maintaining financial balance.",
  },
];

const whyEpoch = [
  {
    icon: "insights",
    title: "Industry-Specific Operating Insight",
    description:
      "A strong understanding of business services sectors such as staffing, consulting, facility management, and logistics ensures capital solutions are aligned with billing cycles, contract structures, and client delivery models.",
  },
  {
    icon: "receipt_long",
    title: "Receivables and Contract-Driven Structuring",
    description:
      "Capital frameworks are built around the quality of receivables and enforceability of client contracts, supporting liquidity across milestone-based, recurring, and project-driven revenue streams.",
  },
  {
    icon: "manage_accounts",
    title: "Support for Workforce-Intensive Models",
    description:
      "Business services companies rely heavily on human capital. Financing approaches are aligned with payroll cycles, contractor obligations, and staffing scalability to maintain uninterrupted service delivery.",
  },
  {
    icon: "tune",
    title: "Adaptability Across Service Segments",
    description:
      "Solutions are structured to address the nuances of different service verticals, accommodating variations in client concentration, service duration, and operational complexity.",
  },
  {
    icon: "open_in_new",
    title: "Alignment with Client Growth and Expansion",
    description:
      "Capital solutions support onboarding of new clients, expansion into new markets, and scaling of service capabilities, ensuring companies can grow without operational constraints.",
  },
  {
    icon: "sync",
    title: "Consistency Across Operating Cycles",
    description:
      "Disciplined structuring supports stability across varying client demand cycles, helping service companies maintain financial balance while managing fluctuations in workload and revenue timing.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about our business services financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "How do non-banking credit solutions differ from traditional bank financing?",
      answer:
        "Non-banking credit solutions typically offer greater flexibility in structuring, especially for companies with complex revenue models or evolving growth needs. These solutions are often better aligned with contract-based cash flows and operational realities.",
    },
    {
      question: "Can financing support onboarding new service contracts?",
      answer:
        "Access to capital enables companies to onboard new clients, hire required staff, and deliver services without upfront constraints. We structure facilities aligned with contract requirements, allowing companies to scale engagements while maintaining operational continuity.",
    },
    {
      question: "Can multi-client service providers access scalable financing?",
      answer:
        "Yes, facilities are designed to scale with a diversified client base, allowing companies to increase borrowing capacity as receivables and contract volumes grow.",
    },
  ],
};

export default function BusinessServicesPageClient() {
  const [activeTab, setActiveTab] = useState("receivables");
  const activeSolution = creditSolutions.find((s) => s.id === activeTab) || creditSolutions[0];

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-top bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/businesscreditsolution.jfif")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  business_center
                </span>
                BUSINESS SERVICES INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Tailored Credit Advisory for Service-Based Middle Market Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                We advise on and structure flexible credit facilities aligned with contract-driven revenue models,
                receivables cycles, and workforce intensity. Our approach connects capital availability to operating
                realities, supporting liquidity, execution, and growth while preserving balance sheet flexibility.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  Evaluate a Financing Opportunity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW CREDIT FACILITIES SUPPORT — split text with highlight box ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <FadeUp className="lg:w-[42%] flex flex-col gap-5">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Our Approach
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                How Credit Facilities Support Service Provider Operations
              </h2>
              <div className="w-14 h-1 rounded-full bg-primary" />
            </FadeUp>

            <div className="lg:w-[58%] flex flex-col gap-6 justify-center">
              <FadeUp delay={80}>
                <div className="flex gap-5">
                  <div className="shrink-0 mt-2.5 flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <div className="w-px bg-primary/20 mt-2" style={{ height: 32 }} />
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">
                    Credit facilities play a central role in supporting service-based companies where revenue is tied
                    to contracts, milestones, and recurring engagements. We structure financing arrangements to bridge
                    timing gaps between service delivery and client payment cycles.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={140}>
                <div className="flex gap-5">
                  <div className="shrink-0 mt-2.5 flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <div className="w-px bg-primary/20 mt-2" style={{ height: 32 }} />
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">
                    This enables companies to maintain payroll continuity, invest in workforce expansion, and manage
                    operating costs without disruption.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={200}>
                <div className="flex gap-5">
                  <div className="shrink-0 mt-2.5">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">
                    Beyond liquidity, well-structured facilities support scaling initiatives, including onboarding new
                    clients and executing larger contracts. By aligning capital with cash flow timing, companies
                    improve financial stability, optimize resource allocation, and maintain consistent operating
                    performance.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRUCTURED CREDIT SOLUTIONS — horizontal tabs ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Facility Framework
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Structured Credit Solutions for the Business Services Sector
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Business services companies operate within contract-driven revenue models, requiring disciplined and
              scalable capital structures to support client delivery, workforce management, and operational continuity
              across multiple engagements and locations.
            </p>
          </FadeUp>

          {/* Horizontal tab pills */}
          <div className="flex text-nowrap overflow-x-auto gap-3 mb-6 justify-center">
            {creditSolutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-semibold transition-all cursor-pointer border ${
                  activeTab === s.id
                    ? "bg-secondary text-white border-secondary shadow-lg"
                    : "bg-white text-secondary border-border-light hover:border-primary/40 hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: 18 }}>
                  {s.icon}
                </span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }}
            />
            <div className="p-7 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-[55%] flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: 30 }}>
                        {activeSolution.icon}
                      </span>
                    </div>
                    <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-secondary leading-snug">
                      {activeSolution.title}
                    </h3>
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">
                    {activeSolution.description}
                  </p>
                  {activeSolution.note && (
                    <p className="text-body-gray text-sm leading-relaxed italic border-l-4 border-primary/30 pl-4 bg-primary/[0.03] py-2 rounded-r-lg">
                      {activeSolution.note}
                    </p>
                  )}
                </div>
                <div className="lg:w-[45%]">
                  <div className="h-full bg-bg-alt rounded-xl p-6 border border-border-light">
                    <p className="text-secondary text-sm font-bold uppercase tracking-wide mb-5">
                      {activeSolution.useCasesTitle}
                    </p>
                    <ul className="flex flex-col gap-3.5">
                      {activeSolution.useCases.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                            style={{ fontSize: 20 }}
                          >
                            check_circle
                          </span>
                          <span className="text-body-gray text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA BANNER ── */}
      <CTABanner
        title="Drive Liquidity Through Receivables Financing for Service Companies"
        buttonText="Discuss a Financing Structure"
        bgImage="/assets/images/cta-bg-alt2.jpg"
      />

      {/* ── CORE OPERATING SEGMENTS — the ONE card section ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          {/* Header + nav */}
          <FadeUp>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
              <div>
                <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
                  Industry Coverage
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight max-w-xl">
                  Core Operating Segments Within the Service-Based Industry
                </h2>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  id="seg-prev"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_back</span>
                </button>
                <button
                  id="seg-next"
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
              modules={[Navigation, Pagination]}
              navigation={{ prevEl: "#seg-prev", nextEl: "#seg-next" }}
              // pagination={{ clickable: true, el: "#seg-dots" }}
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
              {coreSegments.map((seg, i) => (
                <SwiperSlide key={seg.title} className="!h-auto">
                  <div className="group relative flex flex-col h-full rounded-2xl border border-border-light bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div
                      className="h-1 w-full shrink-0"
                      style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }}
                    />
                    <div className="flex flex-col gap-4 p-7 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <span className="material-symbols-outlined" style={{ fontSize: 26 }}>
                            {seg.icon}
                          </span>
                        </div>
                        <span className="text-4xl font-black select-none tabular-nums text-secondary/10">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-[17px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                        {seg.title}
                      </h3>
                      <p className="text-body-gray text-sm leading-relaxed">{seg.description}</p>
                      <div className="w-8 h-0.5 rounded-full bg-primary/40" />
                      <div>
                        <p className="text-secondary text-xs font-bold uppercase tracking-wide mb-3">
                          Characteristics
                        </p>
                        <ul className="flex flex-col gap-2">
                          {seg.characteristics.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span
                                className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                                style={{ fontSize: 15 }}
                              >
                                arrow_right
                              </span>
                              <span className="text-body-gray text-[13px] leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>

            {/* Pagination dots */}
            <div id="seg-dots" className="flex justify-center gap-2 mt-8 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-secondary/20 [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet-active]:w-5" />
          </FadeUp>

        </div>
      </section>

      {/* ── CAPITAL FRAMEWORK / STATS — dark section ── */}
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
              Credit Size and Capital Frameworks Across Service-Based Enterprises
            </h2>
            <p className="text-white/50 md:text-base text-sm mt-4 leading-relaxed">
              Financing solutions are structured for middle market service-based companies operating within defined
              capital parameters and institutional credit frameworks.
            </p>
          </FadeUp>

          <div
            className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {capitalStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 100}>
                <div
                  className="group flex flex-col items-center text-center gap-4 p-8 md:p-10 transition-colors duration-300 hover:bg-white/5"
                  style={{
                    borderRight: i < capitalStats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                      {stat.icon}
                    </span>
                  </div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    {stat.label}
                  </span>
                  {stat.value && (
                    <p className="text-white text-[22px] md:text-[26px] lg:text-[30px] font-extrabold leading-tight">
                      {stat.value}
                    </p>
                  )}
                  {stat.desc && (
                    <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">{stat.desc}</p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400} className="text-center mt-10">
            <p className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed">
              Each facility is designed based on receivables quality, contract structures, billing cycles, workforce
              intensity, and overall operational performance and growth objectives.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── BENEFITS — numbered split-row layout ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Key Advantages
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Benefits of Structured Financing for Service-Oriented Businesses
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Structured financing enhances liquidity, supports execution, and aligns capital with operating cycles
              for service-based companies. These structures are designed to align capital with operating cycles,
              improving overall efficiency and stability.
            </p>
          </FadeUp>

          <div className="max-w-[1100px] mx-auto bg-white rounded-2xl border border-border-light overflow-hidden shadow-sm">
            {benefits.map((benefit, i) => (
              <FadeUp key={benefit.title} delay={i * 60}>
                <div
                  className={`group flex flex-col sm:flex-row gap-5 md:gap-10 px-6 md:px-10 py-7 md:py-8 transition-colors duration-300 hover:bg-primary/[0.02] ${
                    i !== benefits.length - 1 ? "border-b border-border-light" : ""
                  }`}
                >
                  <div className="sm:w-[44%] flex items-start gap-4">
                    <span className="shrink-0 text-[44px] md:text-[56px] font-black leading-none select-none tabular-nums text-primary/20 group-hover:text-primary/30 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <div className="w-5 h-[3px] rounded-full bg-primary mb-2.5 group-hover:w-8 transition-all duration-300" />
                      <h3 className="text-[17px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  <div className="sm:w-[56%] flex items-center">
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EPOCH — 2-column stacked list with animated left accent ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          {/* Title + paragraph row with image */}
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-center mb-14">
            {/* Left: label + heading + paragraph + button */}
            <FadeUp className="lg:w-[55%]">
              <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
                Our Commitment
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-5">
                Why Partner with EPOCH Financial for Business Services Financing
              </h2>
              <p className="text-body-gray md:text-base text-sm leading-relaxed">
                EPOCH Financial acts as an advisor to middle market business services companies, structuring and
                executing financing solutions aligned with contract-based revenue models, workforce intensity, and
                multi-client operating environments. We structure and execute financing strategies aligned with
                contract-driven revenue models, including opportunity positioning, lender selection, and execution.
                Our approach ensures transactions are aligned with both operational realities and capital market
                conditions.
              </p>
            </FadeUp>

            {/* Right: image */}
            <FadeUp delay={100} className="lg:w-[45%] w-full">
              <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[380px] w-full">
                <img
                  src="/assets/images/industry-business-services-new.jpg"
                  alt="Business services financing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
              </div>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {whyEpoch.map((item, i) => (
              <FadeUp key={item.title} delay={i * 70}>
                <div
                  className={`group flex items-start gap-5 py-7 pl-5 border-l-4 border-transparent hover:border-primary hover:pl-6 transition-all duration-300 ${
                    i < whyEpoch.length - 2 ? "border-b border-border-light" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-alt text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mt-0.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-secondary mb-1.5 leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-body-gray text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={500} className="mt-10">
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-8 py-3.5 text-white text-[15px] font-semibold shadow-lg hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                arrow_forward
              </span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title={"Private Credit Solutions for\nBusiness Services Companies"}
        description="We advise on and structure capital solutions for business services companies, aligning financing with contract-backed revenue models and workforce-driven cost structures. These approaches support liquidity across billing cycles, enable efficient payroll management, and provide flexibility to scale operations, expand client engagements, and invest in service delivery capabilities."
        buttonText="Contact Our Team"
        bgImage="/assets/images/cta-bg-alt1.jpg"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
