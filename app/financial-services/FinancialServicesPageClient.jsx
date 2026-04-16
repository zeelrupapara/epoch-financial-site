"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

/* ── DATA ──────────────────────────────────────────────────────────────── */

const capitalStrategies = [
  {
    id: "working-capital",
    number: "01",
    icon: "account_balance",
    title: "Revenue-Linked Working Capital Solutions",
    description:
      "Financial services firms often experience timing gaps between revenue generation and cash realization. These gaps can arise from billing cycles, performance fee structures, or delayed settlements. Revenue-linked working capital solutions convert accrued income into usable liquidity, allowing firms to maintain operational consistency without disrupting growth initiatives.",
    useCasesTitle: "Where this is applied:",
    useCases: [
      "Managing ongoing operational costs and compensation structures",
      "Supporting client onboarding and service expansion",
      "Bridging settlement cycles and advisory fee realization",
      "Maintaining liquidity during market-driven revenue variability",
    ],
    footnote:
      "Capital structures are calibrated based on revenue quality, client diversification, and historical cash flow performance.",
  },
  {
    id: "recurring-revenue",
    number: "02",
    icon: "autorenew",
    title: "Recurring Revenue & Contract-Based Structures",
    description:
      "Many financial services platforms operate on long-term client relationships and contractual revenue streams. These predictable cash flows form the basis for structured capital solutions.",
    useCasesTitle: "Common applications include:",
    useCases: [
      "Scaling wealth and asset management platforms",
      "Supporting insurance brokerage and renewal-based income models",
      "Financing long-term advisory or servicing agreements",
      "Expanding institutional client coverage",
      "Refinancing existing obligations tied to contracted revenues",
    ],
    footnote:
      "Capital availability is aligned with revenue continuity and contractual visibility rather than short-term fluctuations.",
  },
  {
    id: "strategic-growth",
    number: "03",
    icon: "trending_up",
    title: "Strategic Growth & Consolidation Financing",
    description:
      "Growth in financial services is often driven by acquisitions, team lift-outs, and platform expansion. Structured capital supports these initiatives while preserving operational flexibility.",
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Acquiring complementary advisory or brokerage businesses",
      "Expanding into new geographies or client segments",
      "Supporting ownership transitions and recapitalizations",
      "Building multi-service financial platforms",
      "Integrating technology or service capabilities",
    ],
    footnote:
      "Structures are designed to align with integration timelines and projected revenue synergies.",
  },
  {
    id: "technology",
    number: "04",
    icon: "developer_board",
    title: "Technology, Data & Platform Investment",
    description:
      "As financial services become increasingly technology-driven, firms require capital to invest in systems that enhance efficiency, compliance, and client experience.",
    useCasesTitle: "Common areas of investment include:",
    useCases: [
      "Portfolio management and reporting systems",
      "Automation and workflow platforms",
      "Data analytics and risk management tools",
      "Cybersecurity and regulatory compliance infrastructure",
      "Digital client engagement platforms",
    ],
    footnote:
      "Capital structures are supported by recurring revenues and long-term platform scalability.",
  },
];

const segments = [
  {
    id: "wealth",
    icon: "candlestick_chart",
    title: "Wealth & Asset Management Platforms",
    description:
      "Firms managing client capital require financing aligned with fee income and AUM growth trajectories.",
    characteristics: [
      "Recurring management and advisory fees",
      "Long-term client relationships",
      "Scalable platform economics",
      "Performance-linked upside",
    ],
  },
  {
    id: "insurance",
    icon: "shield_with_heart",
    title: "Insurance Brokerage & Distribution",
    description:
      "Insurance firms operate on commission-based and renewal-driven income streams.",
    characteristics: [
      "Recurring policy renewals",
      "Predictable commission income",
      "Strong client retention dynamics",
      "Regulatory oversight",
    ],
  },
  {
    id: "specialty",
    icon: "account_tree",
    title: "Specialty Finance Platforms",
    description:
      "Non-bank lenders and structured finance providers require capital aligned with portfolio growth.",
    characteristics: [
      "Asset-backed revenue generation",
      "Portfolio-based risk structures",
      "Capital-intensive operating models",
      "Yield-driven performance metrics",
    ],
  },
  {
    id: "fintech",
    icon: "developer_mode",
    title: "Fintech & Digital Finance Companies",
    description:
      "Technology-led platforms are reshaping financial service delivery with scalable models.",
    characteristics: [
      "Transaction or subscription-based revenues",
      "High-growth scalability",
      "Data-driven operations",
      "Platform-centric delivery",
    ],
  },
  {
    id: "advisory",
    icon: "handshake",
    title: "Advisory & Corporate Finance Firms",
    description:
      "Advisory firms operate on a mix of retainer, success-based, and project-driven revenue streams.",
    characteristics: [
      "Fee-based income structures",
      "Variable deal cycles",
      "High-margin service offerings",
      "Relationship-driven business models",
    ],
  },
];

const financingParams = [
  { icon: "payments", label: "Capital Size", value: "$5 million to $150 million" },
  { icon: "trending_up", label: "Revenue Range", value: "$20 million to $500 million" },
  {
    icon: "groups",
    label: "Platforms",
    desc: "Advisory firms, asset managers, insurance brokers, fintech companies, and specialty finance providers",
  },
];

const strategicBenefits = [
  {
    icon: "sync_alt",
    num: "01",
    title: "Alignment with Revenue Models",
    description:
      "Capital structures are built around how firms actually generate income, ensuring better liquidity planning and execution.",
  },
  {
    icon: "balance",
    num: "02",
    title: "Enhanced Financial Flexibility",
    description:
      "Access to structured capital improves balance sheet efficiency without limiting operational decision-making.",
  },
  {
    icon: "rocket_launch",
    num: "03",
    title: "Support for Platform Expansion",
    description:
      "Enables firms to pursue acquisitions, enter new markets, and expand service capabilities.",
  },
  {
    icon: "storm",
    num: "04",
    title: "Resilience Across Market Conditions",
    description:
      "Flexible structures help firms navigate revenue variability linked to market performance and economic cycles.",
  },
  {
    icon: "linear_scale",
    num: "05",
    title: "Long-Term Scalability",
    description:
      "Capital evolves alongside platform growth, supporting increasing client assets and service complexity.",
  },
];

const whyEpoch = [
  {
    icon: "psychology",
    title: "Deep Sector Understanding",
    description:
      "We structure solutions based on how financial services firms generate revenue, manage clients, and operate within regulatory frameworks. This ensures capital structures are practical, compliant, and aligned with real business performance drivers.",
  },
  {
    icon: "architecture",
    title: "Tailored Structuring Approach",
    description:
      "Each transaction is designed around specific revenue streams, growth objectives, and operational requirements. This allows for precise alignment between capital availability and the firm's strategic direction.",
  },
  {
    icon: "hub",
    title: "Revenue-Centric Capital Design",
    description:
      "We focus on aligning capital with fee income, contracts, and portfolio performance to improve predictability. This enhances cash flow visibility while reducing reliance on rigid financing structures.",
  },
  {
    icon: "expand",
    title: "Scalable Capital Frameworks",
    description:
      "Capital frameworks are designed to support growth, acquisitions, and evolving platform strategies. They are designed to expand alongside increasing assets, client base, and service capabilities.",
  },
  {
    icon: "speed",
    title: "Execution-Focused Process",
    description:
      "We manage the process end-to-end to ensure timelines, counterparties, and outcomes remain aligned. This approach maintains alignment and continuity throughout the transaction lifecycle.",
  },
  {
    icon: "diversity_3",
    title: "Long-Term Strategic Alignment",
    description:
      "Our approach supports firms through multiple phases of growth, not just a single transaction. We focus on building enduring capital strategies that evolve with changing business and market conditions.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about our financial services financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "How is financing structured for financial services firms?",
      answer:
        "Structures are typically aligned with fee income, client contracts, and portfolio performance rather than traditional asset-heavy models.",
    },
    {
      question: "What types of revenue can support financing?",
      answer:
        "Recurring advisory fees, commissions, servicing income, and contracted revenues are commonly used to support capital structures.",
    },
    {
      question: "Can firms use future or accrued revenue for liquidity?",
      answer:
        "Yes, accrued but unrealized revenue can often be structured into immediate liquidity depending on predictability and client quality.",
    },
    {
      question: "Is capital available for acquisitions and expansion?",
      answer:
        "Yes, structured capital can support acquisitions, platform expansion, and strategic growth initiatives.",
    },
    {
      question: "How does financing adapt to market fluctuations?",
      answer:
        "Flexible structures allow capital availability to adjust in line with revenue performance and broader market conditions.",
    },
  ],
};

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function FinancialServicesPageClient() {
  const [activeStrategy, setActiveStrategy] = useState(null);
  const [activeSegment, setActiveSegment] = useState(0);

  const parallaxContainerRef = useRef(null);
  const parallaxImgRef = useRef(null);

  const toggleStrategy = (id) =>
    setActiveStrategy((prev) => (prev === id ? null : id));

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxContainerRef.current || !parallaxImgRef.current) return;
      const rect = parallaxContainerRef.current.getBoundingClientRect();
      const centerOffset =
        rect.top + rect.height / 2 - window.innerHeight / 2;
      parallaxImgRef.current.style.transform = `translateY(${centerOffset * 0.12}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── HERO ── same UI pattern as other pages ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4 mb-8 xl:mb-16">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 82%)), url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80")',
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
                  account_balance_wallet
                </span>
                FINANCIAL SERVICES INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Middle Market Financial Services Capital Solutions and Structured Financing
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                Strategic capital solutions for middle market financial services platforms, structured around
                recurring fee income, portfolio performance, and contracted revenue streams to support
                liquidity, platform scalability, and long-term value creation.
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

      {/* ── ALIGNING CAPITAL — three-pillar horizontal layout ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-12">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Capital Alignment
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-3xl">
              Aligning Capital with Financial Services Business Models
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border-light border border-border-light rounded-2xl overflow-hidden">
            {[
              {
                num: "1",
                accent: "bg-primary",
                body: "Financial services firms operate on diverse revenue models, including advisory fees, transaction-based income, servicing contracts, and portfolio-driven returns. Capital solutions in this sector are structured to reflect these underlying cash flow dynamics rather than relying solely on traditional balance sheet metrics.",
              },
              {
                num: "2",
                accent: "bg-secondary",
                body: "Capital availability is typically aligned with revenue visibility, client retention, and asset performance. This enables firms to access capital that moves in line with business activity, whether tied to assets under management, policy renewals, or advisory mandates.",
              },
              {
                num: "3",
                accent: "bg-primary/70",
                body: "Rather than static structures, financing frameworks are designed to remain responsive to market cycles, regulatory considerations, and evolving client demand.",
              },
            ].map((item, i) => (
              <FadeUp key={item.num} delay={i * 80}>
                <div className="group relative flex flex-col gap-5 p-8 xl:p-10 h-full bg-white hover:bg-bg-alt transition-colors duration-300">
                  <div className={`w-1 h-10 rounded-full ${item.accent} shrink-0`} />
                  <span className="text-xl font-bold text-primary/40 uppercase tracking-widest">
                    0{item.num}
                  </span>
                  <p className="text-body-gray text-[13px] leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPITAL STRATEGIES — numbered accordion with image ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">

            {/* Left: sticky heading + image */}
            <FadeUp className="lg:w-[38%] lg:sticky lg:top-28 flex flex-col gap-6 shrink-0">
              <div className="flex flex-col gap-3">
                <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                  Capital Strategies
                </span>
                <h2 className="text-secondary 2xl:text-[34px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                  Capital Strategies Designed for Financial Services Platforms
                </h2>
                <div className="w-12 h-1 rounded-full bg-primary" />
                <p className="text-body-gray text-[13px] leading-relaxed mt-1">
                  EPOCH Financial structures capital solutions across a range of financial services segments,
                  ensuring alignment with operational models and growth strategies.
                </p>
              </div>

              {/* Image with overlay */}
              <div
                ref={parallaxContainerRef}
                className="relative rounded-2xl overflow-hidden"
                style={{ minHeight: 300 }}
              >
                <img
                  ref={parallaxImgRef}
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
                  alt="Financial services capital strategy"
                  className="w-full h-auto block"
                  style={{ marginTop: "-8%", marginBottom: "-8%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-[13px] font-semibold leading-snug">
                    Structured capital aligned with fee income, contracts, and portfolio performance
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right: accordion list */}
            <div className="lg:w-[62%] flex flex-col">
              {capitalStrategies.map((strategy, i) => {
                const isOpen = activeStrategy === strategy.id;
                return (
                  <FadeUp key={strategy.id} delay={i * 60}>
                    <div
                      className={`border-b border-border-light mt-5 transition-colors duration-200 ${
                        isOpen ? "bg-white rounded-2xl border border-border-light mb-3 shadow-sm" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleStrategy(strategy.id)}
                        className="w-full flex items-center gap-5 py-6 px-2 text-left group"
                      >
                        <span
                          className={`text-[36px] mx-5 xl:text-[44px] font-extrabold leading-none shrink-0 transition-colors duration-300 ${
                            isOpen ? "text-primary" : "text-border-light"
                          }`}
                          style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                          {strategy.number}
                        </span>
                        <div className="flex-1 flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                              isOpen
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                            }`}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                              {strategy.icon}
                            </span>
                          </div>
                          <h3
                            className={`text-[15px] xl:text-[16px] font-bold leading-snug transition-colors duration-300 ${
                              isOpen ? "text-primary" : "text-secondary group-hover:text-primary"
                            }`}
                          >
                            {strategy.title}
                          </h3>
                        </div>
                        <span
                          className={`material-symbols-outlined shrink-0 transition-transform duration-300 text-body-gray/50 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                          style={{ fontSize: 22 }}
                        >
                          expand_more
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-7 flex flex-col gap-5">
                          <p className="text-body-gray text-[13px] leading-relaxed">
                            {strategy.description}
                          </p>

                          <div>
                            <p className="text-secondary text-[11px] font-bold uppercase tracking-widest mb-3">
                              {strategy.useCasesTitle}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                              {strategy.useCases.map((uc) => (
                                <div key={uc} className="flex items-start gap-2">
                                  <span
                                    className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                                    style={{ fontSize: 15 }}
                                  >
                                    check_circle
                                  </span>
                                  <span className="text-body-gray text-[13px] leading-relaxed">{uc}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {strategy.footnote && (
                            <p className="text-body-gray/60 text-[12px] italic leading-relaxed border-l-2 border-primary/20 pl-3">
                              {strategy.footnote}
                            </p>
                          )}

                          <Link
                            href="#"
                            className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold hover:gap-2.5 transition-all duration-200 w-fit"
                          >
                            Learn More
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                              arrow_forward
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      <CTABanner
        title="Unlock Liquidity Through Revenue and Portfolio-Based Structures"
        buttonText="Discuss a Financing Structure"
        bgImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ── FINANCIAL SERVICES SEGMENTS — vertical tab panel ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-12">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Industry Segments
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-3xl">
              Financial Services Segments Supported
            </h2>
            <p className="text-body-gray text-sm mt-3 leading-relaxed max-w-2xl">
              Capital solutions are structured across a wide spectrum of financial services platforms, each with
              distinct revenue drivers and operating frameworks.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 items-start">
            {/* Left: segment list */}
            <FadeUp className="lg:w-[36%] flex flex-col shrink-0">
              {segments.map((seg, i) => (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(i)}
                  className={`flex items-center gap-4 px-5 py-4 text-left rounded-xl border transition-all duration-300 mb-2 ${
                    activeSegment === i
                      ? "border-primary/30 bg-primary/5 shadow-sm"
                      : "border-transparent hover:border-border-light hover:bg-bg-alt"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      activeSegment === i ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                      {seg.icon}
                    </span>
                  </div>
                  <span
                    className={`text-[14px] font-semibold leading-snug transition-colors duration-300 ${
                      activeSegment === i ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {seg.title}
                  </span>
                  {activeSegment === i && (
                    <span
                      className="material-symbols-outlined text-primary ml-auto shrink-0"
                      style={{ fontSize: 18 }}
                    >
                      chevron_right
                    </span>
                  )}
                </button>
              ))}
            </FadeUp>

            {/* Right: detail panel */}
            <FadeUp delay={80} className="lg:w-[64%]">
              {segments[activeSegment] && (
                <div className="relative overflow-hidden rounded-2xl bg-secondary text-white">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                  <div className="relative z-10 p-8 xl:p-10 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 border border-white/20 text-white">
                        <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                          {segments[activeSegment].icon}
                        </span>
                      </div>
                      <h3 className="text-white text-[20px] xl:text-[22px] font-bold leading-snug">
                        {segments[activeSegment].title}
                      </h3>
                    </div>

                    <p className="text-white/75 text-[14px] leading-relaxed">
                      {segments[activeSegment].description}
                    </p>

                    <div>
                      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-4">
                        Characteristics
                      </p>
                      <div className="flex flex-col gap-3">
                        {segments[activeSegment].characteristics.map((c) => (
                          <div key={c} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-white/80 text-[13px] leading-relaxed">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">
                          {activeSegment + 1} of {segments.length}
                        </span>
                        <div className="flex gap-1.5 ml-2">
                          {segments.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveSegment(idx)}
                              className={`rounded-full transition-all duration-300 ${
                                idx === activeSegment
                                  ? "w-5 h-1.5 bg-primary"
                                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TRANSACTION PROFILE — dark section ── */}
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
              Middle Market Financial Services Transaction Profile
            </h2>
            <p className="text-white/50 md:text-base text-sm mt-4 leading-relaxed">
              Capital solutions are structured for firms operating at scale, where revenue visibility and
              platform strength support institutional-grade financing.
            </p>
            <p className="text-white/35 text-sm mt-1">Transaction overview:</p>
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
              Capital strategies are tailored based on revenue consistency, client concentration, portfolio
              quality, and growth trajectory.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STRATEGIC BENEFITS — professional two-column layout ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

            {/* Left — sticky heading panel */}
            <FadeUp className="lg:w-[38%] lg:sticky lg:top-28 shrink-0 flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 text-primary text-[11px] font-semibold uppercase tracking-widest">
                  <span className="w-5 h-px bg-primary" />
                  Key Benefits
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-[1.2]">
                  Strategic Benefits of Structured Capital in Financial Services
                </h2>
              </div>

              <p className="text-body-gray text-[14px] leading-relaxed">
                Five structural advantages that define how EPOCH Financial approaches capital solutions for middle market financial services platforms.
              </p>

              {/* Stat row */}
              <div className="flex items-stretch gap-0 border border-border-light rounded-xl overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-1 px-6 py-5 flex-1 bg-bg-alt">
                  <span className="text-[32px] font-extrabold text-secondary leading-none">5</span>
                  <span className="text-[10px] font-semibold text-body-gray/70 uppercase tracking-wider text-center">Core Benefits</span>
                </div>
                <div className="w-px bg-border-light" />
                <div className="flex flex-col items-center justify-center gap-1 px-6 py-5 flex-1 bg-bg-alt">
                  <span className="text-[32px] font-extrabold text-primary leading-none">100%</span>
                  <span className="text-[10px] font-semibold text-body-gray/70 uppercase tracking-wider text-center">Revenue-Aligned</span>
                </div>
              </div>

              {/* Accent image strip */}
              <div className="relative rounded-xl overflow-hidden h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80"
                  alt="Financial services capital benefits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-[12px] font-medium leading-snug">
                    Structured capital aligned with how firms actually generate revenue
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right — benefits list */}
            <div className="lg:w-[62%] flex flex-col">
              {strategicBenefits.map((benefit, i) => (
                <FadeUp key={benefit.title} delay={i * 65}>
                  <div className="group flex items-start gap-5 xl:gap-7 py-8 border-t border-border-light hover:pl-1.5 transition-all duration-300">

                    {/* Icon circle */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg-alt border border-border-light text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mt-0.5">
                      <span className="material-symbols-outlined" style={{ fontSize: 21 }}>
                        {benefit.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-primary/50 tracking-[0.18em] uppercase">
                          {benefit.num}
                        </span>
                        <div className="w-4 h-px bg-border-light" />
                        <h3 className="text-secondary text-[16px] xl:text-[17px] font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-body-gray text-[13px] xl:text-[14px] leading-relaxed pl-8">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <span className="material-symbols-outlined text-border-light group-hover:text-primary shrink-0 mt-1 transition-colors duration-300" style={{ fontSize: 18 }}>
                      arrow_forward
                    </span>
                  </div>
                </FadeUp>
              ))}

              {/* Bottom rule */}
              <div className="border-t border-border-light" />
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH EPOCH — open feature grid 3x2 ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">

            {/* Left: heading + image */}
            <FadeUp className="lg:w-[35%] shrink-0 flex flex-col gap-5">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Our Commitment
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
                Why Work With EPOCH Financial?
              </h2>
              <div className="w-12 h-1 rounded-full bg-primary" />
              <p className="text-body-gray text-[13px] leading-relaxed">
                EPOCH Financial works alongside financial services firms to structure capital solutions that
                reflect real operating models, not generic lending frameworks.
              </p>

              <div className="relative rounded-2xl overflow-hidden mt-2" style={{ minHeight: 280 }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="EPOCH Financial team working with financial services clients"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 280 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-[13px] font-semibold leading-snug">
                    Structured capital solutions that reflect real operating models
                  </p>
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold hover:gap-2.5 transition-all duration-200 w-fit mt-2"
              >
                Learn more
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  arrow_forward
                </span>
              </Link>
            </FadeUp>

            {/* Right: 3x2 open grid — no cards, just icon + text */}
            <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 divide-y divide-border-light sm:divide-y-0">
              {whyEpoch.map((item, i) => (
                <FadeUp key={item.title} delay={i * 55}>
                  <div
                    className={`group flex flex-col gap-4 py-8 xl:py-10 px-6 xl:px-7 transition-colors duration-300 hover:bg-bg-alt ${
                      i % 3 !== 2 ? "sm:border-r border-border-light" : ""
                    } ${i < 3 ? "xl:border-b border-border-light" : ""}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-secondary text-[15px] font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-body-gray text-[12px] xl:text-[13px] leading-relaxed">
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
        title={"Structure a Financial Services\nCapital Strategy"}
        description="Financial services platforms require capital solutions that align with revenue dynamics, regulatory requirements, and growth ambitions. We structure financing strategies that support liquidity, scalability, and long-term platform development."
        buttonText="Contact Our Team"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
