"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

const financingSolutions = [
  {
    id: "working-capital",
    icon: "account_balance_wallet",
    label: "Working Capital",
    title: "Working Capital Financing",
    description: [
      "Working capital financing supports manufacturing and industrial companies in managing day-to-day operational liquidity while maintaining consistent production and service delivery.",
      "Businesses often face timing gaps between raw material purchases, production cycles, and customer payments. Accounts receivable financing for manufacturing companies plays a direct role in closing this gap by converting receivables into immediate working capital.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Raw material purchasing",
      "Inventory production cycles",
      "Managing customer payment terms",
      "Funding large purchase orders",
      "Stabilizing operational liquidity",
    ],
    note: "Facilities are typically structured using AR financing for manufacturing businesses or broader ABL facilities, depending on asset profile and scale.",
  },
  {
    id: "equipment",
    icon: "precision_manufacturing",
    label: "Equipment Financing",
    title: "Equipment Financing",
    description: [
      "Manufacturing and industrial operations depend heavily on specialized machinery, production equipment, and technical infrastructure. Equipment financing allows businesses to invest in critical assets while preserving working capital for operational needs. These facilities are commonly structured within asset-based lending (ABL) frameworks for manufacturing & industrial sectors, where equipment value supports the financing structure alongside receivables and other assets.",
    ],
    useCasesTitle: "Common equipment financing scenarios include:",
    useCases: [
      "Purchasing new production machinery",
      "Expanding manufacturing or industrial capacity",
      "Upgrading automation systems",
      "Replacing aging equipment",
      "Increasing operational efficiency",
    ],
    note: "Financing structures are supported by the underlying equipment value along with overall business performance. Equipment financing enables companies to improve productivity and output without placing pressure on cash flow.",
  },
  {
    id: "expansion",
    icon: "trending_up",
    label: "Expansion Financing",
    title: "Production & Operational Expansion Financing",
    description: [
      "Manufacturing and industrial companies often require capital to scale operations in response to increased demand or new business opportunities. Expansion financing supports businesses growing production capacity while maintaining operational stability.",
    ],
    useCasesTitle: "Typical expansion scenarios include:",
    useCases: [
      "Increasing production or operational capacity",
      "Expanding facilities or industrial infrastructure",
      "Hiring additional workforce",
      "Investing in new production or service capabilities",
      "Supporting higher order volumes",
    ],
    note: "Facilities are structured around projected revenue growth, operational scalability, and demand visibility. Expansion financing enables businesses to scale efficiently while maintaining financial discipline.",
  },
  {
    id: "supply-chain",
    icon: "sync_alt",
    label: "Supply Chain",
    title: "Supply Chain Financing",
    description: [
      "Manufacturers rely on complex supply chains involving suppliers, distributors, and production partners. Accounts receivable financing for manufacturing businesses strengthens this structure by improving liquidity tied to outstanding invoices, allowing businesses to meet supplier obligations without delays.",
    ],
    useCasesTitle: "Common supply chain financing uses include:",
    useCases: [
      "Paying suppliers earlier to secure favorable pricing",
      "Managing domestic and international supply chains",
      "Supporting bulk material purchases",
      "Strengthening vendor relationships",
    ],
    note: "Facilities are structured around supplier terms, procurement cycles, and operational purchasing needs. Supply chain financing ensures uninterrupted access to materials and components required for consistent operations.",
  },
];

const industriesSupported = [
  {
    icon: "construction",
    title: "Industrial Equipment & Machinery",
    description:
      "Companies in this sector manufacture equipment and machinery used across construction, infrastructure, transportation, and heavy industrial applications. Financing typically supports equipment investment, working capital, and capacity expansion.",
    characteristics: [
      "Large-scale production facilities",
      "Long-term commercial and industrial buyers",
      "Specialized machinery and tooling",
      "Stable, project-driven demand",
    ],
  },
  {
    icon: "directions_car",
    title: "Automotive & Industrial Supply Chain",
    description:
      "Businesses in this segment produce components and systems that support automotive and broader industrial supply chains. Financing commonly supports production scaling, supplier obligations, and contract-driven operations.",
    characteristics: [
      "Tiered supplier relationships",
      "High-volume production environments",
      "Long-term supply agreements",
      "Precision-driven manufacturing processes",
    ],
  },
  {
    icon: "restaurant",
    title: "Food, Beverage & Processed Goods",
    description:
      "Manufacturers in this category produce consumable goods distributed across retail, wholesale, and institutional channels. Financing supports inventory cycles, equipment upgrades, and facility expansion.",
    characteristics: [
      "High inventory turnover",
      "Consistent, demand-driven production",
      "Established distribution networks",
      "Scalable processing and manufacturing systems",
    ],
  },
  {
    icon: "shopping_bag",
    title: "Consumer & Retail Product Manufacturing",
    description:
      "This segment includes manufacturers producing goods for retail and e-commerce markets. Financing structures support production scaling, inventory management, and distribution expansion.",
    characteristics: [
      "Household goods",
      "Personal care products",
      "Packaged consumer items",
      "Apparel and textile manufacturing",
    ],
  },
  {
    icon: "memory",
    title: "Electronics & Technology Manufacturing",
    description:
      "Companies in this sector manufacture components and systems used in electronics, telecommunications, and industrial technology. Financing typically supports equipment investment and operational expansion.",
    characteristics: [
      "High-precision production environments",
      "Integrated global supply chains",
      "Specialized manufacturing equipment",
      "Contract-based production models",
    ],
  },
];

const financingStats = [
  {
    label: "Loan Size",
    value: "$3 Million – $75 Million",
    icon: "payments",
    desc: "Structured facilities sized to match your operational scale and capital requirements",
  },
  {
    label: "Annual Revenue",
    value: "$15M+",
    icon: "trending_up",
    desc: "Middle market companies with consistent and measurable revenue generation",
  },
  {
    label: "Borrowers",
    value: "Private & Sponsor-Backed",
    icon: "business",
    desc: "Privately owned manufacturing companies, industrial operators, and sponsor-backed production businesses",
  },
];

const strategicAdvantages = [
  {
    icon: "speed",
    title: "Efficient Execution Framework",
    description:
      "Direct financing structures streamline execution by minimizing reliance on multiple capital providers. Evaluation, structuring, and funding operate within a unified framework, enhancing efficiency from initial assessment through closing.",
  },
  {
    icon: "bolt",
    title: "Timely Capital Access",
    description:
      "Manufacturing and industrial transactions often require prompt access to capital, particularly for production expansion, equipment investment, and supply chain commitments. Efficient credit processes enable faster evaluation and execution.",
  },
  {
    icon: "tune",
    title: "Flexible Capital Structures",
    description:
      "Manufacturing and industrial businesses require diversified credit facilities to support varying operational needs across the business cycle. Flexible structuring ensures alignment with operational requirements and evolving capital demands.",
    listTitle: "These may include:",
    list: [
      "Working capital facilities",
      "Equipment financing",
      "Term loans",
      "Growth capital structures",
    ],
  },
  {
    icon: "analytics",
    title: "Operational Performance Analysis",
    description:
      "Financing structures are developed through a detailed evaluation of operational performance rather than reliance on static financial metrics. This approach supports disciplined and sustainable financing outcomes.",
    listTitle: "Detailed analysis typically evaluates:",
    list: [
      "Revenue stability and cash flow visibility",
      "Production capacity and utilization levels",
      "Customer concentration and diversification",
      "Inventory management and supply chain efficiency",
      "Operating margins and cost structure",
    ],
    note: "This comprehensive evaluation supports resilient credit structures across varying market conditions.",
  },
  {
    icon: "schedule",
    title: "Defined Execution Timelines",
    description:
      "Manufacturing and industrial transactions require clear and predictable execution timelines to support operational planning. Structured diligence processes with defined milestones enhance certainty and reduce execution risk.",
  },
];

const whyPartner = [
  {
    icon: "factory",
    title: "Industry-Aligned Expertise",
    description:
      "We evaluate manufacturing and industrial businesses using frameworks that prioritize operational performance, production capacity, and asset quality. This ensures financing aligns with how businesses operate in practice.",
  },
  {
    icon: "business_center",
    title: "Dedicated Middle Market Focus",
    description:
      "We focus specifically on middle market companies that operate between traditional bank lending and large institutional capital markets. Our financing solutions are structured to address the unique capital requirements of this segment.",
  },
  {
    icon: "build",
    title: "Customized Capital Structuring",
    description:
      "We structure each financing solution based on the company's operating model, production cycles, and growth objectives. This approach ensures alignment with both near-term execution and long-term strategy.",
  },
  {
    icon: "verified",
    title: "Consistent Execution",
    description:
      "We provide reliable and predictable access to capital, supported by streamlined evaluation and structuring processes that improve execution timelines.",
  },
  {
    icon: "handshake",
    title: "Long-Term Capital Alignment",
    description:
      "We build capital relationships that extend beyond a single transaction. Our approach supports ongoing financing needs, including expansion, acquisitions, and long-term operational development.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about manufacturing and industrial financing. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "How is leverage determined in manufacturing financing?",
      answer:
        "Leverage is typically determined based on operating cash flow, equipment assets, customer diversification, and overall financial performance. Lenders also review historical revenue stability and the company's ability to maintain consistent production output.",
    },
    {
      question: "What types of assets support manufacturing financing?",
      answer:
        "Manufacturing financing may be supported by accounts receivable, inventory, equipment, and overall business cash flow. These assets help lenders assess collateral strength and the company's ability to sustain operations.",
    },
    {
      question: "How are manufacturing companies evaluated by lenders?",
      answer:
        "Evaluation typically considers revenue trends, production capacity, customer concentration, supply chain relationships, and operating margins. This analysis helps determine the company's financial stability and its ability to support long-term financing.",
    },
    {
      question: "How long does manufacturing financing take to close?",
      answer:
        "Execution timelines vary depending on transaction complexity, but streamlined underwriting processes can significantly improve closing speed. Well-prepared financial documentation and operational transparency can further accelerate the approval process.",
    },
  ],
};

export default function ManufacturingPageClient() {
  const [activeTab, setActiveTab] = useState("working-capital");
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
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/manufacturing-hero.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  precision_manufacturing
                </span>
                MANUFACTURING &amp; INDUSTRIAL
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Manufacturing &amp; Industrial Credit Facilities for Structured Middle Market Capital
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Structured credit solutions for middle market manufacturing and industrial companies designed to enhance liquidity,
                support operational execution, and enable disciplined expansion across capital-intensive production environments.
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

      {/* ── HOW FUNDING ALIGNS — split heading + bullet paragraphs ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <FadeUp className="lg:w-[38%] flex flex-col gap-4">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Our Approach
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                How Credit Structures Align with Manufacturing &amp; Industrial Operating Models
              </h2>
              <div className="w-16 h-1 rounded-full bg-primary mt-1" />
            </FadeUp>
            <div className="lg:w-[62%] flex flex-col gap-6">
              {[
                "Financing structures align with the operating profile of mid-market manufacturing and industrial businesses, focusing on production capacity, revenue consistency, customer diversification, and asset strength to support disciplined capital deployment.",
                "These businesses operate within capital-intensive environments with ongoing inventory cycles and extended operating timelines. Financing solutions maintain liquidity, support operational stability, and enable scalable growth without disrupting core execution.",
                "EPOCH Financial structures financing services tailored to middle market manufacturing and industrial businesses. The focus remains on delivering disciplined, flexible capital aligned with operational requirements and growth objectives.",
              ].map((text, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </div>
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE FINANCING SOLUTIONS — vertical sidebar tabs ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Core Credit Solutions for Manufacturing &amp; Industrial Companies
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH structures financing facilities using several primary strategies designed specifically for
              manufacturing and industrial operations, production cycles, and capital investment requirements.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Vertical tab buttons */}
            <div className="lg:w-[230px] shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
              {financingSolutions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl text-left text-[13px] font-semibold whitespace-nowrap lg:whitespace-normal transition-all cursor-pointer ${
                    activeTab === s.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-secondary hover:bg-primary/10 border border-border-light"
                  }`}
                >
                  <span className="material-symbols-outlined shrink-0" style={{ fontSize: 20 }}>
                    {s.icon}
                  </span>
                  {s.label}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            {activeSolution && (
              <div className="flex-1 bg-white rounded-2xl p-7 md:p-10 border border-border-light shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-[50%] flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                          {activeSolution.icon}
                        </span>
                      </div>
                      <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-secondary">
                        {activeSolution.title}
                      </h3>
                    </div>
                    {activeSolution.description.map((p, i) => (
                      <p key={i} className="text-body-gray md:text-base text-sm leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {activeSolution.note && (
                      <p className="text-body-gray text-sm leading-relaxed italic border-l-4 border-primary/30 pl-4 mt-1">
                        {activeSolution.note}
                      </p>
                    )}
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-[14px] hover:gap-2.5 transition-all mt-2"
                    >
                      Learn More
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                  <div className="lg:w-[50%]">
                    <div className="bg-bg-alt rounded-xl p-6 border border-border-light h-full">
                      <p className="text-secondary text-sm font-semibold mb-4">{activeSolution.useCasesTitle}</p>
                      <ul className="flex flex-col gap-3">
                        {activeSolution.useCases.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span
                              className="material-symbols-outlined text-primary shrink-0"
                              style={{ fontSize: 20 }}
                            >
                              check_circle
                            </span>
                            <span className="text-body-gray text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Leverage AR Financing for Manufacturing &amp; Industrial Companies"
        buttonText="Discuss a Financing Structure"
      />

      {/* ── INDUSTRIES SUPPORTED — numbered icon cards with inline list ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Industries Supported Across Manufacturing &amp; Industrial Sectors
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Mid-market financing solutions support a range of manufacturing and industrial sectors with scalable
              operations, defined production capabilities, and consistent end-market demand.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesSupported.map((industry, i) => (
              <FadeUp key={industry.title} delay={i * 80}>
                <div className="relative flex flex-col h-full gap-4 p-7 rounded-2xl border border-border-light bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="absolute top-5 right-5 text-4xl font-bold text-secondary/10 select-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: 26 }}>
                        {industry.icon}
                      </span>
                    </div>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary leading-snug pr-10">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-body-gray text-sm leading-relaxed">{industry.description}</p>
                  <div className="w-8 h-[2px] rounded-full bg-primary/40" />
                  <ul className="flex flex-col gap-2">
                    {industry.characteristics.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                          style={{ fontSize: 16 }}
                        >
                          arrow_right
                        </span>
                        <span className="text-body-gray text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING RANGE — large metric cards ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Mid Market Manufacturing &amp; Industrial Financing Range
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Middle market manufacturing financing typically supports companies operating within defined capital
              ranges. Typical transaction characteristics include:
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financingStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 100}>
                <div className="flex flex-col items-center text-center gap-3 p-8 rounded-2xl bg-white border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white mb-1">
                    <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                      {stat.icon}
                    </span>
                  </div>
                  <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                    {stat.label}
                  </span>
                  <p className="text-secondary 2xl:text-[28px] lg:text-[24px] text-[22px] font-extrabold leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-body-gray text-sm leading-relaxed">{stat.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400} className="text-center mt-8">
            <p className="text-body-gray md:text-base text-sm max-w-2xl mx-auto leading-relaxed">
              Financing structures are customized based on operating performance, equipment assets, and projected
              growth initiatives.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STRATEGIC ADVANTAGES — vertical icon timeline ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Strategic Advantages of Manufacturing &amp; Industrial Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Manufacturing and industrial businesses require financing structures that align with production cycles,
              capital allocation, and operational growth priorities.
            </p>
          </FadeUp>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
            <div className="flex flex-col gap-8">
              {strategicAdvantages.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="relative z-10 shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-primary/10">
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.description}</p>
                      {item.listTitle && (
                        <p className="text-body-gray text-sm font-semibold mt-3">{item.listTitle}</p>
                      )}
                      {item.list && (
                        <ul className="mt-2 flex flex-col gap-2">
                          {item.list.map((li) => (
                            <li key={li} className="flex items-center gap-2.5">
                              <span
                                className="material-symbols-outlined text-primary shrink-0"
                                style={{ fontSize: 16 }}
                              >
                                check
                              </span>
                              <span className="text-body-gray text-sm">{li}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.note && (
                        <p className="text-body-gray text-sm leading-relaxed mt-3 italic">{item.note}</p>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER WITH EPOCH — gradient-top accent cards ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Partner With EPOCH Financial for Industrial &amp; Manufacturing Financing?
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              We work with middle market manufacturing and industrial businesses that require capital partners with a
              clear understanding of production environments, asset structures, and supply chain dynamics.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="relative h-full flex flex-col gap-3 p-7 rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Gradient top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: "linear-gradient(90deg, #11375F, #0DA2E7)" }}
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mt-1">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.title}</h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={500} className="text-center mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline"
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
        title="Partner With Manufacturing &amp; Industrial Capital Provider"
        description="Manufacturing companies require reliable access to capital to support production growth, equipment investment, and operational expansion."
        description2="EPOCH provides structured financing solutions designed specifically for middle market manufacturing businesses."
        buttonText="Contact Our Team"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
