"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

const financingSolutions = [
  {
    id: "freight-receivables",
    icon: "receipt_long",
    label: "Freight Receivables",
    title: "Freight Receivables Financing",
    description: [
      "In transportation, receivables are generated from completed shipments and contracted freight movement, yet payment cycles are often extended, creating pressure on liquidity.",
      "Receivables-based financing converts freight invoices into immediate working capital, enabling carriers and logistics providers to maintain continuous operations.",
    ],
    useCasesTitle: "Typical applications include:",
    useCases: [
      "Managing fuel and driver expenses",
      "Supporting ongoing operational expenditure",
      "Bridging delayed shipper payments",
      "Sustaining continuous freight movement",
      "Stabilizing working capital cycles",
    ],
    note: "These facilities are commonly structured within broader transportation financing frameworks, including asset-based lending solutions.",
  },
  {
    id: "fleet-equipment",
    icon: "local_shipping",
    label: "Fleet & Equipment",
    title: "Fleet & Equipment Financing",
    description: [
      "Transportation companies rely heavily on fleet assets to sustain and scale operations. Transportation equipment financing enables fleet acquisition, upgrades, and replacement without straining cash flow.",
      "These structures align repayment with asset utilization and revenue generation.",
    ],
    useCasesTitle: "Typical scenarios include:",
    useCases: [
      "Purchasing trucks, trailers, and specialized vehicles",
      "Expanding fleet capacity",
      "Upgrading aging equipment",
      "Supporting maintenance and replacement cycles",
      "Investing in technology-enabled logistics assets",
    ],
    note: "Facilities are often integrated within broader transportation financing structures.",
  },
  {
    id: "working-capital",
    icon: "account_balance_wallet",
    label: "Working Capital",
    title: "Working Capital Solutions for Operations",
    description: [
      "Transportation businesses face ongoing working capital demands driven by fuel costs, maintenance, payroll, and route operations.",
      "Structured working capital solutions provide liquidity to manage these recurring expenses efficiently.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Funding fuel and toll expenses",
      "Managing workforce-related expenses",
      "Covering insurance and compliance costs",
      "Supporting expansion across new lanes, routes, and regional networks",
      "Maintaining operational continuity",
    ],
    note: "These solutions ensure uninterrupted service delivery and financial stability.",
  },
  {
    id: "growth-expansion",
    icon: "trending_up",
    label: "Growth & Expansion",
    title: "Growth & Capacity Expansion Capital",
    description: [
      "As transportation companies expand into new routes, contracts, or regions, capital requirements increase across fleet, workforce, and infrastructure.",
      "Transportation financing supports scalable growth aligned with operational capacity and demand visibility.",
    ],
    useCasesTitle: "Typical growth drivers include:",
    useCases: [
      "Expanding into new geographic markets",
      "Increasing fleet size and capacity",
      "Scaling contract volumes",
      "Adding new service lines",
      "Enhancing logistics capabilities",
    ],
    note: "These structures enable controlled expansion without disrupting cash flow balance.",
  },
  {
    id: "broker-carrier",
    icon: "handshake",
    label: "Broker & Carrier",
    title: "Broker & Carrier Payment Support",
    description: [
      "Transportation ecosystems depend on timely payments between brokers, carriers, and vendors. Delays can disrupt operations and strain relationships.",
      "Structured financing ensures consistent payment flow across the network.",
    ],
    useCasesTitle: "Common uses include:",
    useCases: [
      "Paying carriers and owner-operators on time",
      "Managing broker payment cycles",
      "Supporting vendor and partner obligations",
      "Strengthening carrier relationships",
      "Maintaining delivery timelines",
    ],
    note: "This layer of commercial transportation financing enhances operational efficiency and reliability across the supply chain.",
  },
];

const sectorsSupported = [
  {
    icon: "route",
    title: "Long-Haul Trucking Companies",
    description:
      "Financing supports carriers operating across regional and national routes, where consistent fleet utilization and fuel management are critical.",
    characteristics: [
      "High fuel and maintenance costs",
      "Long receivables cycles",
      "Asset-intensive operations",
      "Volume-driven revenue models",
    ],
  },
  {
    icon: "swap_horiz",
    title: "Freight Brokerage Firms",
    description:
      "Brokers require strong liquidity to manage payment gaps between shippers and carriers while maintaining network reliability.",
    characteristics: [
      "Asset-light business model",
      "High transaction volumes",
      "Timing gaps in payments",
      "Dependence on carrier relationships",
    ],
  },
  {
    icon: "package_2",
    title: "Last-Mile Delivery Providers",
    description:
      "Companies focused on final-stage delivery operate in fast-paced environments with high delivery frequency and tight timelines.",
    characteristics: [
      "High delivery volumes",
      "Short contract cycles",
      "Labor-intensive operations",
      "Route optimization requirements",
    ],
  },
  {
    icon: "hub",
    title: "Third-Party Logistics (3PL) Providers",
    description:
      "3PL companies manage integrated logistics solutions, requiring capital to support multi-client operations and scalable infrastructure.",
    characteristics: [
      "Multi-client service models",
      "Variable shipment volumes",
      "Technology-driven operations",
      "Contract-based revenue streams",
    ],
  },
  {
    icon: "ac_unit",
    title: "Specialized & Refrigerated Transport",
    description:
      "Operators handling temperature-sensitive or specialized freight require investment in compliant equipment and consistent operational funding.",
    characteristics: [
      "Specialized fleet requirements",
      "Regulatory compliance needs",
      "Higher operating costs",
      "Niche service demand",
    ],
  },
  {
    icon: "train",
    title: "Intermodal & Rail Logistics Providers",
    description:
      "Businesses leveraging multiple transportation modes require financing aligned with complex coordination and infrastructure dependencies.",
    characteristics: [
      "Multi-modal operations",
      "Infrastructure reliance",
      "Coordinated shipment cycles",
      "Scalable network requirements",
    ],
  },
  {
    icon: "fire_truck",
    title: "Fleet-Intensive Regional Carriers",
    description:
      "Regional carriers operating within defined geographies require flexible capital to manage fleet efficiency and route density.",
    characteristics: [
      "Moderate fleet size",
      "Regional route optimization",
      "Recurring client relationships",
      "Predictable shipment volumes",
    ],
  },
];

const financingStats = [
  {
    label: "Loan Size",
    value: "$5M – $100M+",
    icon: "payments",
    desc: "",
  },
  {
    label: "Annual Revenue",
    value: "$20M – $1B",
    icon: "trending_up",
    desc: "",
  },
  {
    label: "Borrowers",
    value: "Trucking, Freight Brokers, 3PL & Logistics",
    icon: "business",
    desc: "Trucking companies, freight brokers, 3PL providers, logistics platforms, and sponsor-backed transportation operators",
  },
];

const strategicAdvantages = [
  {
    icon: "speed",
    title: "Improved Operational Efficiency",
    description:
      "Well-structured financing frameworks help streamline financial processes, allowing businesses to manage day-to-day operations without disruption and maintain focus on service delivery.",
  },
  {
    icon: "account_balance_wallet",
    title: "Reliable Working Capital Availability",
    description:
      "Ongoing expenses such as fuel, payroll, and maintenance require consistent liquidity, with aligned financing structures supporting smoother cash flow across billing cycles.",
  },
  {
    icon: "tune",
    title: "Adaptable Financing Structures",
    description:
      "Transportation businesses benefit from availability under the facility scales with eligible receivables and shipment volume, providing dynamic liquidity tied directly to operational activity.",
    listTitle: "These may include:",
    listItems: [
      "Freight receivables-based solutions",
      "Asset-backed financing structures",
      "Fleet and equipment funding",
      "Expansion-oriented capital",
    ],
  },
  {
    icon: "analytics",
    title: "Performance-Oriented Financial Structuring",
    description:
      "Financing approaches are often aligned with operational performance and revenue visibility rather than relying solely on historical financial metrics.",
    listTitle: "Key considerations include:",
    listItems: [
      "Shipment volume consistency",
      "Receivables quality and payment cycles",
      "Customer mix and concentration",
      "Fleet utilization levels",
      "Cost efficiency and margins",
    ],
    extraParagraph:
      "This supports more practical and scalable financial planning.",
  },
  {
    icon: "visibility",
    title: "Greater Visibility in Funding Timelines",
    description:
      "Defined financial processes provide better predictability, enabling transportation companies to plan operations, manage capacity, and respond to demand with greater confidence.",
  },
];

const whyPartner = [
  {
    icon: "hub",
    title: "Industry-Aligned Structuring",
    description:
      "Financing solutions are designed around transportation-specific dynamics, including freight cycles, receivables timing, and asset intensity. This ensures capital structures remain practical and aligned with how transportation businesses operate.",
  },
  {
    icon: "monitoring",
    title: "Focus on Operational Performance",
    description:
      "Approaches are centered on shipment volumes, receivables quality, and fleet utilization rather than relying solely on historical financial metrics. This allows financing to reflect real-time business activity.",
  },
  {
    icon: "tune",
    title: "Flexible Capital Solutions",
    description:
      "Transportation companies often experience fluctuations in demand and working capital needs. Flexible structures adapt to changes in volume, route expansion, and seasonal trends.",
  },
  {
    icon: "expand",
    title: "Scalable Financing Approach",
    description:
      "As companies grow across routes, contracts, and regions, financing structures are built to scale alongside operations, supporting expansion without disrupting existing workflows.",
  },
  {
    icon: "verified",
    title: "Clarity and Execution Efficiency",
    description:
      "We structure lender-ready facilities and manage a competitive process across private credit and asset-based lenders to deliver executable outcomes.",
  },
  {
    icon: "handshake",
    title: "Alignment with Long-Term Growth",
    description:
      "Financing is structured to support both immediate liquidity needs and broader strategic objectives, helping transportation companies strengthen stability while positioning for sustained growth.",
  },
];

const faqs = {
  intro: "Frequently Asked Questions",
  items: [
    {
      question: "How does freight receivables financing work?",
      answer:
        "Freight receivables financing converts unpaid freight invoices into immediate liquidity, allowing transportation companies to maintain operations while waiting for customer payments. This helps reduce dependence on delayed payment cycles and improves day-to-day cash flow stability.",
    },
    {
      question: "Who can benefit from transportation financing solutions?",
      answer:
        "Middle market trucking companies, freight brokers, 3PL providers, and logistics platforms can benefit from financing aligned with freight volumes, receivables cycles, and operational demands. These solutions are particularly relevant for businesses managing high shipment volumes and tight operating margins.",
    },
    {
      question:
        "What types of financing are commonly used in transportation?",
      answer:
        "Common structures include receivables-based financing, asset-based lending, fleet and equipment financing, and growth capital solutions. Each structure can be aligned with specific operational needs, from daily liquidity to long-term expansion.",
    },
    {
      question: "Can financing support fleet expansion?",
      answer:
        "Yes, financing solutions can be aligned with fleet acquisition and expansion, allowing companies to scale operations without disrupting working capital. This ensures growth initiatives are supported without placing strain on existing cash reserves.",
    },
  ],
};

export default function TransportationFreightPageClient() {
  const [activeTab, setActiveTab] = useState("freight-receivables");
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
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/transportation-hero.jpg")',
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
                TRANSPORTATION
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Middle Market Financing Solutions for Transportation Businesses
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Scalable financing solutions support middle market transportation
                companies by aligning capital with growth, enhancing liquidity,
                funding fleet expansion, and ensuring flexibility to manage
                evolving operational and cash flow demands.
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

      {/* ── HOW FINANCING ADAPTS — serpentine roadmap ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mt-3">
              Structuring Credit Around Transportation Cash Flow Dynamics
            </h2>
          </FadeUp>

          {/* Roadmap */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical center line — desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" style={{ marginLeft: "0px" }} />

            {/* Mobile vertical line */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            {[
              {
                text: "Middle market transportation companies operate within a revenue model driven by freight volumes, contracted shipments, and delivery cycles, where cash flow realization is often delayed due to invoicing timelines and extended payment terms.",
                icon: "local_shipping",
                tag: "Revenue Model",
              },
              {
                text: "Transportation credit facilities are structured around freight receivables, with advance rates, eligibility criteria, and concentration thresholds aligned to invoice quality and customer payment performance. Rather than relying solely on balance sheet strength, facilities are structured around freight invoices, volume consistency, and revenue visibility.",
                icon: "receipt_long",
                tag: "Credit Structure",
              },
              {
                text: "For companies operating across regional or national networks, additional considerations include customer concentration, route density, fleet utilization, and exposure to fuel and operating costs.",
                icon: "map",
                tag: "Network Factors",
              },
              {
                text: "Capital solutions are structured to reflect these operational dynamics, ensuring liquidity supports continuous movement, operational stability, and scalable growth without disrupting day-to-day execution.",
                icon: "rocket_launch",
                tag: "Capital Deployment",
              },
            ].map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeUp key={i} delay={i * 120}>
                  {/* Desktop layout */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] items-center mb-20 last:mb-0">
                    {/* Left side */}
                    <div className={isEven ? "" : "order-3"}>
                      <div
                        className={`bg-bg-alt rounded-2xl p-8 border border-border-light hover:shadow-xl transition-all duration-300 relative group ${
                          isEven ? "mr-4" : "ml-4"
                        }`}
                      >
                        {/* Arrow pointer toward center */}
                        <div
                          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-bg-alt border-border-light rotate-45 ${
                            isEven
                              ? "-right-1.5 border-r border-t"
                              : "-left-1.5 border-l border-b"
                          }`}
                        />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: 22 }}
                            >
                              {item.icon}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-body-gray md:text-base text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {/* Center milestone */}
                    <div className="flex justify-center relative z-10 order-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" style={{ animationDuration: "3s" }} />
                        <div
                          className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg relative"
                          style={{
                            background: "linear-gradient(135deg, #11375F 0%, #0DA2E7 100%)",
                          }}
                        >
                          <span className="text-white text-base font-extrabold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Opposite side — image placeholder */}
                    <div className={isEven ? "order-3" : ""}>
                      <div
                        className={`rounded-2xl overflow-hidden border border-border-light aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5 relative group hover:shadow-lg transition-all duration-300 ${
                          isEven ? "ml-4" : "mr-4"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-primary/[0.06] group-hover:from-secondary/[0.06] group-hover:to-primary/[0.10] transition-all duration-300" />
                        <div className="text-center relative z-10">
                          <span
                            className="material-symbols-outlined text-secondary/15 group-hover:text-secondary/25 transition-colors duration-300"
                            style={{ fontSize: 56 }}
                          >
                            {item.icon}
                          </span>
                          <p className="text-secondary/25 text-xs mt-2 font-medium">
                            Image Placeholder
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden flex gap-5 mb-10 last:mb-0 relative">
                    {/* Milestone dot */}
                    <div className="shrink-0 relative z-10">
                      <div
                        className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          background: "linear-gradient(135deg, #11375F 0%, #0DA2E7 100%)",
                        }}
                      >
                        <span className="text-white text-sm font-extrabold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1">
                      <div className="bg-bg-alt rounded-2xl p-6 border border-border-light lg:mb-0 mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontSize: 20 }}
                          >
                            {item.icon}
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-body-gray text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CORE CAPITAL SOLUTIONS — vertical left sidebar tabs + right panel ── */}
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
              Core Financing Strategies for Transportation Companies
            </h2>
            <p className="text-white/60 md:text-base text-sm mt-4 leading-relaxed">
              Financing strategies are structured to align with freight cycles,
              receivables timing, and operational demands across transportation
              and logistics businesses.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left — vertical tab list */}
            <div className="lg:w-[280px] shrink-0 flex lg:flex-col flex-row gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {financingSolutions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left text-[13px] font-semibold transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink ${
                    activeTab === s.id
                      ? "bg-white text-secondary shadow-lg"
                      : "bg-white/8 text-white/70 hover:bg-white/15 border border-white/10"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined shrink-0 ${
                      activeTab === s.id ? "text-primary" : ""
                    }`}
                    style={{ fontSize: 22 }}
                  >
                    {s.icon}
                  </span>
                  {s.label}
                </button>
              ))}
            </div>

            {/* Right — content panel */}
            {activeSolution && (
              <FadeUp className="flex-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
                  <div className="p-7 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
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

                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-[55%] flex flex-col gap-4">
                        {activeSolution.description.map((p, i) => (
                          <p
                            key={i}
                            className="text-body-gray md:text-base text-sm leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                        {activeSolution.note && (
                          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mt-1">
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
                        <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-7 h-full">
                          <p className="text-white text-sm font-semibold mb-5">
                            {activeSolution.useCasesTitle}
                          </p>
                          <ul className="flex flex-col gap-3.5">
                            {activeSolution.useCases.map((item, idx) => (
                              <li
                                key={item}
                                className="flex items-start gap-3"
                              >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary text-[11px] font-bold mt-0.5">
                                  {String(idx + 1).padStart(2, "0")}
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
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Enhance Liquidity for Transportation Companies with AR Financing Structures"
        buttonText="Discuss a Financing Structure"
      />

      {/* ── SECTORS SUPPORTED — responsive card grid with colored top accent + hover lift ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Major Transportation Segments Supported
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Financing solutions support diverse transportation segments,
              aligning capital with freight cycles, asset intensity, and
              sector-specific operational demands.
            </p>
          </FadeUp>

          {/* Top row — 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {sectorsSupported.slice(0, 4).map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 70}>
                <div className="group h-full bg-white rounded-2xl border border-border-light overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Placeholder image area */}
                  <div className="relative h-36 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center overflow-hidden">
                    <span
                      className="material-symbols-outlined text-secondary/15 group-hover:text-secondary/25 transition-colors duration-300"
                      style={{ fontSize: 64 }}
                    >
                      {sector.icon}
                    </span>
                    <div className="absolute top-3 left-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-sm text-primary">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 20 }}
                        >
                          {sector.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-base font-bold text-secondary leading-snug">
                      {sector.title}
                    </h3>
                    <p className="text-body-gray text-[13px] leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-border-light">
                      <ul className="flex flex-col gap-1.5">
                        {sector.characteristics.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <span
                              className="material-symbols-outlined text-primary shrink-0"
                              style={{ fontSize: 14 }}
                            >
                              chevron_right
                            </span>
                            <span className="text-body-gray text-[12px]">
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

          {/* Bottom row — 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-[calc(75%)] lg:mx-auto">
            {sectorsSupported.slice(4).map((sector, i) => (
              <FadeUp key={sector.title} delay={(i + 4) * 70}>
                <div className="group h-full bg-white rounded-2xl border border-border-light overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Placeholder image area */}
                  <div className="relative h-36 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center overflow-hidden">
                    <span
                      className="material-symbols-outlined text-secondary/15 group-hover:text-secondary/25 transition-colors duration-300"
                      style={{ fontSize: 64 }}
                    >
                      {sector.icon}
                    </span>
                    <div className="absolute top-3 left-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-sm text-primary">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 20 }}
                        >
                          {sector.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-base font-bold text-secondary leading-snug">
                      {sector.title}
                    </h3>
                    <p className="text-body-gray text-[13px] leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-border-light">
                      <ul className="flex flex-col gap-1.5">
                        {sector.characteristics.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <span
                              className="material-symbols-outlined text-primary shrink-0"
                              style={{ fontSize: 14 }}
                            >
                              chevron_right
                            </span>
                            <span className="text-body-gray text-[12px]">
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

      {/* ── FINANCING RANGE — gradient cards in a row ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Middle Market Transportation Industry <br className="lg:block hidden" /> Financing Parameters
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Transportation financing for middle market companies typically
              operates within ranges aligned with fleet scale, freight volumes,
              and receivables intensity.
            </p>
            <p className="text-body-gray/70 text-sm mt-2">
              Typical transaction profile:
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financingStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 100}>
                <div
                  className="relative rounded-2xl overflow-hidden p-8 text-center h-full flex flex-col items-center justify-center gap-4"
                  style={{
                    background: `linear-gradient(${
                      135 + i * 20
                    }deg, #11375F 0%, #1a4a7a 100%)`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full" />
                  <span
                    className="material-symbols-outlined text-primary relative z-10"
                    style={{ fontSize: 40 }}
                  >
                    {stat.icon}
                  </span>
                  <span className="text-white/50 text-[11px] font-semibold uppercase tracking-widest relative z-10">
                    {stat.label}
                  </span>
                  <p className="text-white 2xl:text-[28px] lg:text-[24px] text-[22px] font-extrabold leading-tight relative z-10">
                    {stat.value}
                  </p>
                  {stat.desc && (
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs relative z-10">
                      {stat.desc}
                    </p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200} className="text-center mt-8">
            <p className="text-body-gray md:text-base text-sm max-w-2xl mx-auto leading-relaxed">
              Structures are customized based on fleet size, freight invoice
              quality, customer concentration, contract stability, and overall
              operational performance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── KEY ADVANTAGES — numbered vertical list with expandable details ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Strategic Advantages of Transportation Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Transportation companies operate in fast-moving, cost-intensive
              environments where financing structures must align with freight
              cycles, asset utilization, and operational timing.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left — placeholder image */}
            <FadeUp className="lg:w-[40%] lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl overflow-hidden border border-border-light aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-secondary/10 to-primary/10">
                <div className="text-center p-8">
                  <span
                    className="material-symbols-outlined text-secondary/15"
                    style={{ fontSize: 80 }}
                  >
                    local_shipping
                  </span>
                  <p className="text-secondary/30 text-sm mt-3 font-medium">
                    Image Placeholder
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right — advantage items with large step numbers */}
            <div className="lg:w-[60%] flex flex-col gap-0">
              {strategicAdvantages.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div
                    className={`flex gap-5 py-7 ${
                      i !== strategicAdvantages.length - 1
                        ? "border-b border-border-light"
                        : ""
                    }`}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <span className="text-primary/20 text-[32px] font-black leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 22 }}
                        >
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="lg:text-lg text-base font-bold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body-gray text-sm leading-relaxed">
                        {item.description}
                      </p>
                      {item.listTitle && (
                        <div className="mt-3">
                          <p className="text-secondary text-sm font-semibold mb-2">
                            {item.listTitle}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                            {item.listItems.map((li) => (
                              <li
                                key={li}
                                className="flex items-center gap-2"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-body-gray text-[13px]">
                                  {li}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.extraParagraph && (
                        <p className="text-body-gray text-sm leading-relaxed mt-3">
                          {item.extraParagraph}
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

      {/* ── WHY PARTNER — centered heading + 3-col card grid with bottom gradient bar ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Mid Market Transportation Companies Choose EPOCH Financial?
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Mid market transportation companies operate in environments where
              timing, scale, and capital efficiency directly impact performance.
              EPOCH Financial aligns financing structures with these realities,
              ensuring capital supports ongoing operations, fleet utilization,
              and growth without adding unnecessary complexity.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="group h-full flex flex-col rounded-2xl bg-bg-alt overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-7 flex flex-col gap-4 flex-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 28 }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="lg:text-lg text-base font-bold text-secondary leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-body-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="h-1.5 w-full"
                    style={{
                      background: `linear-gradient(90deg, #0DA2E7 ${
                        i * 15
                      }%, #11375F)`,
                    }}
                  />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={500} className="text-center mt-10">
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline"
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
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title="Partner with a Transportation Financing Provider"
        description="Transportation companies operate in high-volume, time-sensitive environments where maintaining liquidity and operational continuity is critical to performance."
        description2="EPOCH Financial delivers financing solutions designed to align with freight cycles, receivables timing, and fleet-driven operations, supporting efficient cash flow management and scalable growth."
        buttonText="Contact Our Team"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
