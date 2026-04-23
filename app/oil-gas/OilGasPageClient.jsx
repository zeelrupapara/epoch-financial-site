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
      "Working capital financing supports oil and gas companies in managing liquidity across production cycles and receivable timelines from offtake agreements and counterparties. Cash flow gaps often arise between production, delivery, and payment realization, particularly in volatile pricing environments.",
      "Accounts receivable (AR) financing for oil and gas businesses plays a critical role in bridging this gap by converting receivables into immediate liquidity, ensuring uninterrupted operations.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Covering lease operating expenses (LOE)",
      "Managing field-level operating costs",
      "Supporting vendor and oilfield service payments",
      "Bridging receivables from offtake contracts",
      "Stabilizing liquidity during commodity price fluctuations",
    ],
    note: "Facilities are typically structured using AR financing for oil and gas businesses or broader asset-based lending solutions, depending on contract strength and counterparty profile.",
  },
  {
    id: "rbl",
    icon: "oil_barrel",
    label: "Reserve-Based Lending",
    title: "Reserve-Based Lending (RBL)",
    description: [
      "Reserve-based lending is a core financing structure in the oil and gas sector, where capital is secured against the value of proven oil and gas reserves. Borrowing bases are periodically redetermined based on reserve reports, production forecasts, and commodity pricing.",
    ],
    useCasesTitle: "Common financing scenarios include:",
    useCases: [
      "Funding drilling and development programs",
      "Scaling production from existing reserves",
      "Acquiring producing assets",
      "Supporting ongoing field operations",
      "Refinancing existing reserve-backed debt",
    ],
    note: "RBL structures provide flexibility by aligning capital availability with reserve performance and market conditions.",
  },
  {
    id: "production",
    icon: "precision_manufacturing",
    label: "Production & Development",
    title: "Production & Development Financing",
    description: [
      "Oil and gas companies require capital to move assets from exploration to production and to enhance output from existing fields. Production and development financing supports these capital-intensive activities while maintaining operational continuity.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Developing new wells and production sites",
      "Enhancing recovery from existing fields",
      "Funding completion and stimulation activities",
      "Expanding production infrastructure",
      "Supporting lifecycle asset development",
    ],
    note: "Facilities are structured around production timelines, reserve quality, and expected output to ensure disciplined capital deployment.",
  },
  {
    id: "midstream",
    icon: "hub",
    label: "Midstream Infrastructure",
    title: "Midstream Infrastructure Financing",
    description: [
      "Midstream operations require significant investment in transportation, storage, and processing infrastructure. Credit facilities are structured around long-term contracts, throughput volumes, and counterparty strength to ensure stable and predictable cash flows.",
    ],
    useCasesTitle: "Common financing uses include:",
    useCases: [
      "Pipeline development and expansion",
      "Storage facility construction",
      "Gas processing and compression infrastructure",
      "Transportation and logistics networks",
      "Infrastructure upgrades and capacity expansion",
    ],
    note: "Facilities are supported by contracted revenues and asset value, providing long-term capital aligned with infrastructure performance.",
  },
];

const sectorsSupported = [
  {
    icon: "oil_barrel",
    title: "Upstream Exploration & Production (E&P)",
    description:
      "Companies in this sector focus on the exploration, development, and production of oil and gas reserves. Financing typically supports drilling programs, field development, and ongoing production activities aligned with reserve value and output.",
    characteristics: [
      "Proven and probable reserve base",
      "Capital-intensive drilling and development cycles",
      "Commodity price exposure",
      "Production-driven revenue models",
    ],
  },
  {
    icon: "build",
    title: "Oilfield Services & Equipment",
    description:
      "Businesses in this segment provide critical services, equipment, and technical support to upstream operators. Financing supports working capital, equipment investment, and contract execution across field operations.",
    characteristics: [
      "Contract-based service agreements",
      "Specialized equipment and technical capabilities",
      "Exposure to operator activity levels",
      "Recurring service-driven revenue streams",
    ],
  },
  {
    icon: "local_shipping",
    title: "Midstream Transportation & Storage",
    description:
      "Midstream companies operate infrastructure for the transportation, storage, and handling of oil and gas. Financing is typically structured around long-term contracts, throughput volumes, and asset-backed revenue stability.",
    characteristics: [
      "Pipeline and storage infrastructure assets",
      "Long-term, contract-based cash flows",
      "Volume-driven revenue models",
      "Stable, fee-based income structures",
    ],
  },
  {
    icon: "factory",
    title: "Gas Processing & Energy Infrastructure",
    description:
      "This sector includes businesses involved in processing, compression, and treatment of natural gas, as well as related infrastructure. Financing supports infrastructure development, expansion, and operational efficiency.",
    characteristics: [
      "Capital-intensive infrastructure assets",
      "Long-term processing agreements",
      "Integrated energy network operations",
      "Predictable, contract-backed revenues",
    ],
  },
  {
    icon: "local_gas_station",
    title: "Integrated & Downstream Distribution",
    description:
      "Companies operating across refining, distribution, and delivery of energy products require financing to support large-scale operations and working capital efficiency. Structures are aligned with receivables, inventory movement, and distribution cycles.",
    characteristics: [
      "Large-scale distribution networks",
      "High-volume product movement",
      "Contract-driven sales channels",
      "Working capital-intensive operations",
    ],
  },
];

const financingStats = [
  {
    label: "Credit Facility Size",
    value: "$5M – $100M",
    icon: "payments",
    desc: "",
  },
  {
    label: "Annual Revenue",
    value: "$25M – $500M",
    icon: "trending_up",
    desc: "",
  },
  {
    label: "Borrowers",
    value: "E&P, Oilfield Services & Midstream",
    icon: "business",
    desc: "Exploration & production (E&P) companies, oilfield service providers, midstream operators, and energy infrastructure businesses",
  },
];

const strategicAdvantages = [
  {
    icon: "verified",
    title: "Asset-Backed Capital Access",
    description:
      "Oil and gas financing allows companies to leverage proven reserves, receivables, and infrastructure assets to secure funding. This approach reduces reliance on unsecured credit and aligns borrowing capacity with the underlying value of operational assets, ensuring more efficient capital utilization.",
  },
  {
    icon: "tune",
    title: "Flexibility Across Commodity Cycles",
    description:
      "Financing structures are designed to adapt to fluctuations in commodity prices and production output. Borrowing bases and repayment terms adjust based on market conditions, helping businesses maintain liquidity and financial stability during both high-growth and downturn periods.",
  },
  {
    icon: "speed",
    title: "Improved Working Capital Efficiency",
    description:
      "Receivable-based financing enables companies to convert contract-backed invoices into immediate liquidity. This improves cash flow management, allowing businesses to meet operational expenses, vendor payments, and service obligations without delays.",
  },
  {
    icon: "expand",
    title: "Support for Capital-Intensive Operations",
    description:
      "Oil and gas businesses require significant investment in drilling, production, and infrastructure. Structured financing supports these capital requirements without placing pressure on internal cash reserves, enabling companies to sustain and expand operations efficiently.",
  },
  {
    icon: "analytics",
    title: "Scalable Growth and Expansion",
    description:
      "Financing solutions are designed to scale with business performance, supporting expansion initiatives such as new field development, infrastructure investment, and asset acquisitions. This ensures companies can pursue growth opportunities while maintaining financial stability.",
  },
];

const whyPartner = [
  {
    icon: "hub",
    title: "Industry-Aligned Financing Expertise",
    description:
      "We understand the complexities of oil and gas operations, including reserve valuation, production cycles, and commodity-driven revenue models. Our financing structures are designed to align with these factors, ensuring capital supports both operational stability and growth.",
  },
  {
    icon: "build",
    title: "Customized Capital Structures",
    description:
      "We do not apply standardized lending models. Each financing solution is structured based on asset profiles, contract strength, and cash flow visibility, enabling tailored capital deployment across upstream and midstream operations.",
  },
  {
    icon: "account_balance_wallet",
    title: "Asset-Based and Receivable-Driven Solutions",
    description:
      "Our facilities leverage receivables, reserves, and infrastructure assets to provide efficient access to capital. This approach enhances liquidity while maintaining flexibility across changing market conditions.",
  },
  {
    icon: "tune",
    title: "Flexible and Scalable Financing",
    description:
      "We structure credit structures that adapt to production levels, commodity cycles, and business growth. This ensures companies can scale operations, manage volatility, and pursue expansion opportunities without financial constraints.",
  },
  {
    icon: "schedule",
    title: "Execution Certainty and Speed",
    description:
      "We manage lender engagement, drive timelines, and execute transactions with certainty, enabling companies to act on opportunities and maintain operational continuity.",
  },
  {
    icon: "handshake",
    title: "Long-Term Capital Partnership",
    description:
      "We position ourselves as a long-term capital partner, supporting businesses through different market cycles with disciplined financing strategies that drive performance, stability, and sustained growth.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about oil and gas financing. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question:
        "What is reserve-based lending (RBL) in oil and gas financing?",
      answer:
        "Reserve-based lending is a core financing structure where borrowing capacity is determined by the value of proven oil and gas reserves. The borrowing base is periodically reassessed based on reserve reports, production performance, and commodity pricing.",
    },
    {
      question:
        "How does financing support upstream oil and gas operations?",
      answer:
        "Financing supports upstream activities such as drilling, field development, and production scaling. Structures are aligned with reserve quality, production output, and capital expenditure requirements to ensure operational continuity.",
    },
    {
      question:
        "Can oil and gas companies leverage receivables for financing?",
      answer:
        "Yes, companies can utilize accounts receivable (AR) financing to convert invoices from offtake agreements and counterparties into immediate liquidity. This improves cash flow timing and supports ongoing operational expenses.",
    },
    {
      question:
        "How are borrowing bases determined in oil and gas financing?",
      answer:
        "Borrowing bases are typically calculated using a combination of reserve valuations, production forecasts, receivables quality, and commodity price assumptions. These are reviewed periodically to reflect current market and operational conditions.",
    },
    {
      question:
        "Is financing available for midstream oil and gas infrastructure?",
      answer:
        "Yes, financing can be structured for pipelines, storage facilities, and processing assets. These facilities are generally supported by long-term contracts, throughput agreements, and stable, fee-based revenue streams.",
    },
  ],
};

export default function OilGasPageClient() {
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
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/industry-oil-gas.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  oil_barrel
                </span>
                OIL &amp; GAS
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Middle Market Oil &amp; Gas Credit Facilities and Structured
                Energy Financing
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Credit facilities for middle market oil and gas companies structured around reserve value, production cycles, and contract-backed revenues to support operations, liquidity, and disciplined growth.
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

      {/* ── HOW FINANCING ADAPTS — stacked numbered cards ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="max-w-3xl mb-12">
            <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mt-3">
              How Financing Adapts to Oil &amp; Gas Operational Needs
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              "Credit facilities in the oil and gas sector are structured around reserve value, production output, and contract-backed cash flows. Borrowing bases adjust with commodity prices and performance, while receivable-backed and asset-based structures provide working capital and support ongoing operations.",
              "Facilities often combine term debt and revolving structures to support both operational needs and strategic initiatives. Transactions are structured and executed to align with operational requirements, with lender engagement managed throughout the process.",
              "The financing process is structured and managed to improve capital efficiency, mitigate risk, and ensure execution certainty across changing market conditions.",
            ].map((text, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="relative bg-bg-alt rounded-2xl p-7 h-full border-l-4 border-primary overflow-hidden">
                  <div className="absolute -top-4 -right-3 h-20 w-20 flex items-center justify-center rounded-bl-3xl bg-primary/10">
                    <span className="text-[32px] font-black text-primary/40 leading-none select-none mt-2 mr-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed relative z-10 pt-2 pr-12">
                    {text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE CAPITAL SOLUTIONS — horizontal pill tabs + full-width panel ── */}
      <section
        className="2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4"
        style={{
          background:
            "linear-gradient(135deg, #11375F 0%, #1a4a7a 50%, #11375F 100%)",
        }}
      >
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-white 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Core Credit Facilities for Oil &amp; Gas Companies
            </h2>
            <p className="text-white/60 md:text-base text-sm mt-4 leading-relaxed">
              EPOCH Financial structures financing facilities using several primary
              strategies designed specifically for oil and gas operations,
              reserve development, and energy infrastructure across upstream and
              midstream environments.
            </p>
          </FadeUp>

          {/* Horizontal pill tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {financingSolutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                  activeTab === s.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/10"
                }`}
              >
                <span
                  className="material-symbols-outlined shrink-0"
                  style={{ fontSize: 18 }}
                >
                  {s.icon}
                </span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          {activeSolution && (
            <FadeUp>
              <div className="bg-white rounded-2xl p-7 md:p-10 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-[55%] flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white shrink-0">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 30 }}
                        >
                          {activeSolution.icon}
                        </span>
                      </div>
                      <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-secondary">
                        {activeSolution.title}
                      </h3>
                    </div>
                    {activeSolution.description.map((p, i) => (
                      <p
                        key={i}
                        className="text-body-gray md:text-base text-sm leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                    {activeSolution.note && (
                      <div className="bg-secondary/5 rounded-xl p-4 mt-1">
                        <p className="text-body-gray text-sm leading-relaxed italic">
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
                  <div className="lg:w-[45%]">
                    <div className="bg-secondary rounded-2xl p-7 h-full">
                      <p className="text-white text-sm font-semibold mb-5">
                        {activeSolution.useCasesTitle}
                      </p>
                      <ul className="flex flex-col gap-3.5">
                        {activeSolution.useCases.map((item, idx) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-[11px] font-bold mt-0.5">
                              {idx + 1}
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
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Access Immediate Liquidity with AR Financing for Oil &amp; Gas"
        buttonText="Discuss a Financing Structure"
      />

      {/* ── SECTORS SUPPORTED — left-aligned icon + expandable style cards ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Industries Supported Across Oil &amp; Gas Sectors
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Middle market oil and gas businesses require credit structures aligned with asset strength, production efficiency, and contract-driven cash flows.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* First row — 3 cards */}
            {sectorsSupported.slice(0, 3).map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 80}>
                <div className="group h-full flex flex-col rounded-2xl bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div
                    className="h-2 w-full"
                    style={{
                      background: `linear-gradient(90deg, #11375F ${30 + i * 20}%, #0DA2E7)`,
                    }}
                  />
                  <div className="p-7 flex flex-col gap-4 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 24 }}
                      >
                        {sector.icon}
                      </span>
                    </div>
                    <h3 className="lg:text-lg text-base font-bold text-secondary leading-snug">
                      {sector.title}
                    </h3>
                    <p className="text-body-gray text-sm leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border-light">
                      <ul className="grid grid-cols-1 gap-2">
                        {sector.characteristics.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-body-gray text-[13px]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          {/* Second row — 2 cards centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 plea lg:max-w-[calc(66.666%+12px)] lg:mx-auto">
            {sectorsSupported.slice(3).map((sector, i) => (
              <FadeUp key={sector.title} delay={(i + 3) * 80}>
                <div className="group h-full flex flex-col rounded-2xl bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div
                    className="h-2 w-full"
                    style={{
                      background: `linear-gradient(90deg, #11375F ${70 + i * 15}%, #0DA2E7)`,
                    }}
                  />
                  <div className="p-7 flex flex-col gap-4 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 24 }}
                      >
                        {sector.icon}
                      </span>
                    </div>
                    <h3 className="lg:text-lg text-base font-bold text-secondary leading-snug">
                      {sector.title}
                    </h3>
                    <p className="text-body-gray text-sm leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border-light">
                      <ul className="grid grid-cols-1 gap-2">
                        {sector.characteristics.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-body-gray text-[13px]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING RANGE — horizontal stat bar ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Mid Market Oil &amp; Gas Energy Financing Range
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Middle market oil and gas financing supports companies operating
              within defined capital ranges, aligned with asset intensity,
              reserve value, and production scale across upstream and midstream
              segments.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
                {financingStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center gap-3 py-6 md:py-2 px-6"
                  >
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: 36 }}
                    >
                      {stat.icon}
                    </span>
                    <span className="text-white/50 text-[11px] font-semibold uppercase tracking-widest">
                      {stat.label}
                    </span>
                    <p className="text-white 2xl:text-[28px] lg:text-[24px] text-[22px] font-extrabold leading-tight">
                      {stat.value}
                    </p>
                    {stat.desc && (
                      <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                        {stat.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200} className="text-center mt-8">
            <p className="text-body-gray md:text-base text-sm max-w-2xl mx-auto leading-relaxed">
              Financing structures are customized based on reserve reports,
              production performance, contract-backed revenues, and overall
              asset quality to ensure alignment with operational requirements
              and growth objectives.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── KEY ADVANTAGES — image left + accordion right ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Key Advantages of Oil &amp; Gas Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Oil and gas financing is structured to align with the
              industry&apos;s capital-intensive nature, production-driven
              revenue models, and asset-backed operations. These credit facilities provide access to liquidity while supporting
              operations, infrastructure investment, and disciplined growth across volatile energy markets. By aligning capital with
              reserves, contracts, and cash flow cycles, businesses can
              maintain financial discipline while scaling efficiently.
            </p>
          </FadeUp>
          <div>
            {/* advantage items */}
            <div className="flex flex-col">
              {strategicAdvantages.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div
                    className={`flex gap-4 py-6 ${
                      i !== strategicAdvantages.length - 1
                        ? "border-b border-border-light"
                        : ""
                    }`}
                  >
                    <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="lg:text-lg text-base font-bold text-secondary mb-1">
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
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER WITH EPOCH — two-column with large left heading ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left sticky heading */}
            <FadeUp className="lg:w-[35%] lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                Why Partner With EPOCH Financial for Financing Oil &amp; Gas
                Companies?
              </h2>
              <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
                EPOCH Financial advises on, structures, and executes credit facilities for oil and gas companies. We manage the full process from structuring through lender engagement and closing, aligning each transaction with asset strength, production performance, and contract-backed revenues.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline mt-6"
              >
                Learn more
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 18 }}
                >
                  arrow_forward
                </span>
              </Link>
            </FadeUp>

            {/* Right cards grid */}
            <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyPartner.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div className="group h-full flex flex-col gap-3 p-6 rounded-2xl border border-border-light bg-bg-alt hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 22 }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-body-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title="Advise on an Oil &amp; Gas Credit Facility"
        description="Oil and gas companies require consistent access to capital to support exploration, production, and infrastructure development."
        description2="We advise on and structure credit facilities aligned with reserve value, production performance, and contract-backed revenues, ensuring execution certainty and alignment with operational needs."
        buttonText="Contact Our Team"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
