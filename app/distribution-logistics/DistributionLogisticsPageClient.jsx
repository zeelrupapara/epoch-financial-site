"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

const financingSolutions = [
  {
    id: "receivables",
    icon: "account_balance_wallet",
    label: "Receivables Financing",
    title: "Operational Liquidity & Receivables Financing",
    description: [
      "Maintaining consistent cash flow is essential for distribution and logistics businesses. AR financing for logistics companies plays a critical role by converting outstanding invoices into immediate liquidity, reducing the gap between service delivery and customer payments.",
      "Accounts Receivable Financing for logistics companies enables businesses to unlock working capital tied up in receivables while maintaining operational continuity.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Managing extended customer payment terms",
      "Supporting freight and delivery operations",
      "Funding large distribution orders",
      "Stabilizing day-to-day cash flow",
      "Improving liquidity across supply chain cycles",
    ],
    note: "These solutions are commonly structured within asset-based lending facilities or revolving credit structures.",
  },
  {
    id: "inventory",
    icon: "inventory_2",
    label: "Inventory Financing",
    title: "Inventory Financing for Distributors",
    description: [
      "Inventory plays a central role in distribution finance. Inventory financing for distributors allows businesses to access capital against stock, ensuring uninterrupted supply and efficient order fulfillment.",
      "This form of distributor financing is particularly valuable for businesses managing high-volume or seasonal inventory requirements.",
    ],
    useCasesTitle: "Common applications include:",
    useCases: [
      "Bulk purchasing to secure favorable pricing",
      "Managing warehouse stock levels",
      "Supporting multi-location distribution",
      "Preparing for seasonal demand spikes",
    ],
    note: "Facilities are structured based on inventory turnover, valuation, and demand consistency, forming a key component of broader asset-based credit facilities.",
  },
  {
    id: "wholesale",
    icon: "storefront",
    label: "Wholesale Financing",
    title: "Wholesale & Commercial Distribution Financing",
    description: [
      "Wholesale businesses require structured financing to manage supplier payments, inventory cycles, and customer demand. Wholesale financing solutions support large-scale procurement and distribution operations.",
      "Financing is typically delivered through senior secured credit facilities and working capital solutions designed to support operational scalability and transaction volume.",
    ],
    useCasesTitle: "Typical scenarios include:",
    useCases: [
      "Managing supplier payment cycles",
      "Funding large wholesale orders",
      "Supporting distribution agreements",
      "Scaling commercial operations",
    ],
    note: "Commercial wholesale finance solutions are aligned with transaction volume, customer base, and operational stability.",
  },
  {
    id: "fleet",
    icon: "local_shipping",
    label: "Fleet & Equipment",
    title: "Fleet, Equipment & Logistics Financing",
    description: [
      "Logistics operations depend on transportation assets and infrastructure. Financing solutions support investment in fleet, equipment, and logistics systems without placing pressure on working capital.",
    ],
    useCasesTitle: "Common use cases include:",
    useCases: [
      "Expanding transportation capacity",
      "Upgrading fleet and delivery systems",
      "Investing in warehouse equipment",
      "Enhancing logistics technology",
    ],
    note: "These facilities are structured based on asset value and operational performance, supporting long-term scalability.",
  },
];

const sectorsSupported = [
  {
    icon: "local_shipping",
    title: "Freight & Carrier Services",
    description:
      "Businesses focused on transporting goods across regions require capital to manage fleet operations and fuel costs.",
    characteristics: [
      "High asset utilization",
      "Time-sensitive delivery models",
      "Contract-based revenue streams",
      "Consistent operational demand",
    ],
  },
  {
    icon: "warehouse",
    title: "Wholesale & Bulk Distribution",
    description:
      "Companies distributing goods to retailers and commercial buyers require financing to manage inventory and supplier relationships.",
    characteristics: [
      "Volume-driven operations",
      "Broad customer networks",
      "High inventory movement",
      "Multi-channel distribution",
    ],
  },
  {
    icon: "hub",
    title: "Third-Party Logistics Providers (3PL)",
    description:
      "3PL companies manage integrated logistics services, including warehousing and fulfillment. Financing supports infrastructure and service expansion.",
    characteristics: [
      "End-to-end logistics solutions",
      "Long-term contracts",
      "Scalable service platforms",
      "Technology integration",
    ],
  },
  {
    icon: "shopping_cart",
    title: "E-commerce Fulfillment & Delivery",
    description:
      "Rapid fulfillment and last-mile delivery operations require capital to manage inventory, warehousing, and logistics technology.",
    characteristics: [
      "High transaction volumes",
      "Fast turnaround requirements",
      "Digital integration",
      "Scalable distribution systems",
    ],
  },
];

const financingStats = [
  {
    label: "Loan Size",
    value: "$3M – $75M",
    icon: "payments",
    desc: "",
  },
  {
    label: "Annual Revenue",
    value: "$20M – $500M",
    icon: "trending_up",
    desc: "",
  },
  {
    label: "Borrowers",
    value: "Distribution Firms & Operators",
    icon: "business",
    desc: "Distribution firms, logistics operators, freight companies, and sponsor-backed supply chain businesses",
  },
];

const strategicAdvantages = [
  {
    icon: "speed",
    title: "Streamlined Capital Access",
    description:
      "Efficient structuring enables faster funding decisions and quicker capital deployment, helping businesses respond to urgent operational requirements such as inventory procurement, supplier payments, and transportation-related expenses.",
  },
  {
    icon: "tune",
    title: "Flexible Financing Structures",
    description:
      "Solutions range from receivables-based facilities to inventory-backed lending and asset-based revolvers, allowing alignment with evolving operational needs.",
  },
  {
    icon: "analytics",
    title: "Operationally Focused Evaluation",
    description:
      "Financing decisions are based on business performance, including inventory turnover, receivables quality, customer diversification, and supply chain efficiency, ensuring structures reflect real operational strength rather than static financial metrics.",
  },
  {
    icon: "expand",
    title: "Scalable Capital Deployment",
    description:
      "Facilities are designed to scale alongside business growth, enabling companies to expand operations, increase inventory levels, and enhance distribution capabilities without creating financial constraints or disrupting workflows.",
  },
  {
    icon: "schedule",
    title: "Predictable Execution Timelines",
    description:
      "Clearly defined processes and structured timelines provide transparency throughout the financing lifecycle, allowing businesses to plan operations with confidence while reducing uncertainty and execution-related risks.",
  },
];

const whyPartner = [
  {
    icon: "hub",
    title: "Distribution-Focused Expertise",
    description:
      "Deep understanding of distribution finance, wholesale financing, and logistics funding structures ensures solutions are aligned with inventory cycles, receivables dynamics, and operational complexities across diverse supply chain environments.",
  },
  {
    icon: "build",
    title: "Customized Structuring",
    description:
      "Each distributor financing solution is tailored to inventory cycles, receivables profiles, and operational requirements, ensuring capital structures align with business models, growth plans, and evolving supply chain demands.",
  },
  {
    icon: "business_center",
    title: "Middle Market Specialization",
    description:
      "Focused on companies operating beyond traditional bank lending thresholds, providing flexible financing solutions designed to meet the capital needs of growing distribution and logistics businesses in the middle market segment.",
  },
  {
    icon: "verified",
    title: "Reliable Execution",
    description:
      "Consistent delivery supported by streamlined underwriting, disciplined structuring, and efficient processes ensures predictable timelines, allowing businesses to access capital quickly and execute operational strategies without unnecessary delays.",
  },
  {
    icon: "handshake",
    title: "Long-Term Capital Partnership",
    description:
      "Ongoing support for growth, expansion, and evolving financing needs, helping businesses adapt to changing market conditions while maintaining access to reliable capital solutions aligned with long-term strategic objectives.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about distribution and logistics financing. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question:
        "How are advance rates structured in distribution and logistics financing facilities?",
      answer:
        "Advance rates are determined based on asset quality, including receivables aging, inventory turnover, and customer credit strength. Lenders also apply eligibility criteria, concentration limits, and borrowing base formulas to manage risk.",
    },
    {
      question:
        "How do lenders assess collateral quality across receivables and inventory?",
      answer:
        "Collateral evaluation focuses on receivables aging schedules, dilution risk, customer concentration, and inventory characteristics such as turnover velocity, obsolescence risk, and marketability within defined liquidation scenarios.",
    },
    {
      question:
        "What structural differences exist between AR financing and full ABL facilities in logistics?",
      answer:
        "AR financing primarily leverages receivables for liquidity, while asset-based lending facilities incorporate inventory, equipment, and broader collateral pools, offering higher borrowing capacity and greater structural flexibility.",
    },
    {
      question:
        "What diligence is typically required for middle market distribution financing transactions?",
      answer:
        "Diligence includes detailed reviews of financial statements, accounts receivable aging, inventory reports, customer contracts, supply chain relationships, and operational performance metrics to validate credit quality and structure alignment.",
    },
  ],
};

export default function DistributionLogisticsPageClient() {
  const [activeTab, setActiveTab] = useState("receivables");
  const activeSolution = financingSolutions.find((s) => s.id === activeTab);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("/assets/images/industry-distribution.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  local_shipping
                </span>
                DISTRIBUTION &amp; LOGISTICS
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Distribution &amp; Logistics Financing for Scalable Middle
                Market Operations
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Capital solutions designed for distribution and logistics
                companies to strengthen liquidity, optimize supply chain
                performance, and support long-term operational growth across
                complex networks.
              </p>
              <Link
                href="#"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Evaluate a Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW FINANCING SUPPORTS — full-width alternating rows ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mt-3">
              How Financing Supports Distribution &amp; Logistics Businesses
            </h2>
          </FadeUp>
          <div className="max-w-4xl mx-auto flex flex-col gap-0">
            {[
              "Distribution and logistics companies operate within high-volume, time-sensitive environments where access to capital directly impacts operational efficiency. Financing solutions are structured around receivables cycles, inventory movement, and transportation assets to ensure consistent liquidity.",
              "These structures are typically delivered through working capital facilities, asset-based revolvers, and senior secured credit facilities, enabling businesses to maintain supplier relationships, manage liquidity, and scale operations without disruption.",
              "EPOCH Financial delivers tailored financing solutions aligned with supply chain complexity, operational scale, and long-term growth strategy.",
            ].map((text, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div
                  className={`flex items-start gap-5 py-7 ${
                    i !== 2 ? "border-b border-border-light" : ""
                  }`}
                >
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed flex-1">
                    {text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FINANCING SOLUTIONS — grid cards that expand on click ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Key Financing Solutions for Distribution &amp; Logistics Companies
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH structures capital solutions designed specifically for
              distribution businesses, wholesale operators, and logistics
              companies requiring disciplined and flexible funding.
            </p>
          </FadeUp>

          {/* Solution selector — icon grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {financingSolutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl text-center transition-all cursor-pointer ${
                  activeTab === s.id
                    ? "bg-secondary text-white shadow-xl scale-[1.02]"
                    : "bg-bg-alt text-secondary hover:bg-secondary/5 border border-border-light"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 32 }}
                >
                  {s.icon}
                </span>
                <span className="text-[13px] font-semibold">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Expanded content */}
          {activeSolution && (
            <FadeUp>
              <div className="bg-bg-alt rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left — description */}
                  <div className="lg:w-[55%] p-8 md:p-10 flex flex-col gap-4">
                    <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-secondary">
                      {activeSolution.title}
                    </h3>
                    {activeSolution.description.map((p, i) => (
                      <p
                        key={i}
                        className="text-body-gray md:text-base text-sm leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                    {activeSolution.note && (
                      <div className="flex gap-3 bg-white rounded-xl p-4 mt-1">
                        <span
                          className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                          style={{ fontSize: 18 }}
                        >
                          info
                        </span>
                        <p className="text-body-gray text-sm leading-relaxed">
                          {activeSolution.note}
                        </p>
                      </div>
                    )}
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-[14px] hover:gap-2.5 transition-all mt-2"
                    >
                      Learn More
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 16 }}
                      >
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                  {/* Right — use cases on dark bg */}
                  <div className="lg:w-[45%] bg-secondary p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-white text-sm font-semibold mb-5">
                      {activeSolution.useCasesTitle}
                    </p>
                    <ul className="flex flex-col gap-4">
                      {activeSolution.useCases.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                            style={{ fontSize: 18 }}
                          >
                            check_circle
                          </span>
                          <span className="text-white/80 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Secure AR Financing for Distribution &amp; Logistics Companies"
        buttonText="Discuss a Financing Structure"
      />

      {/* ── SECTORS SUPPORTED — left heading + right stacked rows ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <FadeUp className="lg:w-[35%] lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                Sectors Supported Within Distribution &amp; Logistics
              </h2>
              <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
                Financing solutions are designed to support a diverse range of
                distribution and logistics segments with scalable and
                operationally intensive models.
              </p>
              <div className="w-16 h-1 rounded-full bg-primary mt-5" />
            </FadeUp>
            <div className="lg:w-[65%]">
              {sectorsSupported.map((sector, i) => (
                <FadeUp key={sector.title} delay={i * 80}>
                  <div
                    className={`flex gap-5 py-8 ${
                      i !== sectorsSupported.length - 1
                        ? "border-b border-border-light"
                        : ""
                    }`}
                  >
                    <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 24 }}
                      >
                        {sector.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="lg:text-lg text-base font-bold text-secondary mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-body-gray text-sm leading-relaxed mb-3">
                        {sector.description}
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                        {sector.characteristics.map((item) => (
                          <span
                            key={item}
                            className="flex items-center gap-1.5 text-[13px] text-body-gray"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCING RANGE — left heading + right inline stats ── */}
      <section
        className="2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4"
        style={{
          background:
            "linear-gradient(135deg, #11375F 0%, #1a4a7a 100%)",
        }}
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <FadeUp className="lg:w-[40%]">
              <h2 className="text-white 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                Typical Financing Range for Distribution &amp; Logistics
                Businesses
              </h2>
              <p className="text-white/60 md:text-base text-sm mt-4 leading-relaxed">
                Financing solutions are structured for middle market companies
                operating within defined capital parameters.
              </p>
              <p className="text-white/40 text-sm mt-6 leading-relaxed">
                Each facility is customized based on asset composition,
                operational scale, and growth objectives.
              </p>
            </FadeUp>
            <div className="lg:w-[60%] flex flex-col gap-5">
              {financingStats.map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 100}>
                  <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 28 }}
                      >
                        {stat.icon}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/50 text-[11px] font-semibold uppercase tracking-widest">
                        {stat.label}
                      </span>
                      <p className="text-white text-2xl font-extrabold leading-tight mt-1">
                        {stat.value}
                      </p>
                      {stat.desc && (
                        <p className="text-white/40 text-sm mt-1">
                          {stat.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC ADVANTAGES — 2+3 masonry-style grid ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Advantages of Distribution &amp; Logistics Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Distribution and logistics businesses require financing solutions
              that align with operational speed, inventory cycles, and customer
              demand.
            </p>
          </FadeUp>
          {/* First row — 2 wide items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {strategicAdvantages.slice(0, 2).map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="flex gap-5 p-8 rounded-2xl bg-bg-alt h-full">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 24 }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="lg:text-lg text-base font-bold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          {/* Second row — 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicAdvantages.slice(2).map((item, i) => (
              <FadeUp key={item.title} delay={(i + 2) * 80}>
                <div className="flex flex-col gap-4 p-7 rounded-2xl bg-bg-alt h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 24 }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="lg:text-lg text-base font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-body-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER WITH EPOCH — full-width rows with left border accent ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Partner With EPOCH Financial for Distribution &amp; Logistics
              Financing?
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH Financial partners with distribution and logistics companies
              requiring specialized capital solutions across complex supply
              chains.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
            {whyPartner.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="border-l-[3px] border-primary pl-5 py-1">
                  <span
                    className="material-symbols-outlined text-primary mb-2 block"
                    style={{ fontSize: 44 }}
                  >
                    {item.icon}
                  </span>
                  <h3 className="text-base font-bold text-secondary mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-body-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={500} className="text-center mt-10">
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline"
            >
              Learn More
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 18 }}
              >
                arrow_forward
              </span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title="Work With a Dedicated Distribution &amp; Logistics Capital Partner"
        description="Distribution and logistics companies require dependable access to capital to manage inventory, maintain supply chains, and scale operations."
        description2="We deliver structured distribution financing and logistics funding solutions tailored to middle market businesses."
        buttonText="Contact Our Team"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
