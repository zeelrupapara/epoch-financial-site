"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

/* ── DATA ──────────────────────────────────────────────────────────────── */

const capitalSolutions = [
  {
    id: "operational-liquidity",
    number: "01",
    icon: "account_balance_wallet",
    title: "Operational Liquidity & Receivables Financing",
    description:
      "Maintaining consistent cash flow is critical, particularly where revenues are driven by subscriptions, advertising contracts, or enterprise billing cycles.",
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Managing delays in advertising or enterprise receivables",
      "Supporting content licensing and production costs",
      "Funding customer acquisition and retention strategies",
      "Stabilizing cash flow across recurring revenue cycles",
      "Maintaining liquidity during platform scaling",
    ],
    footnote:
      "These solutions are typically structured within asset-based or revolving frameworks aligned with receivables quality and revenue visibility.",
    image:
      "/assets/images/mediatelecom-hero.jpg",
  },
  {
    id: "infrastructure-network",
    number: "02",
    icon: "cell_tower",
    title: "Infrastructure & Network Financing",
    description:
      "Telecommunications and digital media platforms require continuous investment in infrastructure, including network expansion, data centers, and transmission systems.",
    useCasesTitle: "Common applications include:",
    useCases: [
      "Expanding fiber, wireless, or broadband networks",
      "Investing in data centers and cloud infrastructure",
      "Upgrading transmission and distribution systems",
      "Supporting 5G and next-generation network rollouts",
      "Enhancing capacity to meet growing data demand",
    ],
    footnote:
      "Facilities are aligned with asset value, utilization, and long-term infrastructure strategies.",
    image:
      "/assets/images/mediatelecom-operations.jpg",
  },
  {
    id: "content-ip",
    number: "03",
    icon: "movie",
    title: "Content & Intellectual Property Financing",
    description:
      "Content creation, acquisition, and licensing are central to media businesses, requiring capital aligned with production timelines and monetization cycles.",
    useCasesTitle: "Typical scenarios include:",
    useCases: [
      "Funding original content production",
      "Acquiring media rights and licensing agreements",
      "Supporting multi-platform content distribution",
      "Financing content libraries and catalogs",
      "Aligning capital with release and monetization schedules",
    ],
    footnote:
      "These structures are designed around content value, contractual revenue streams, and audience engagement metrics.",
    image:
      "/assets/images/mediatelecom-hero.jpg",
  },
  {
    id: "working-capital-tech",
    number: "04",
    icon: "developer_board",
    title: "Working Capital & Technology Investment",
    description:
      "Ongoing investment in technology, platforms, and digital ecosystems is essential to remain competitive in media and telecommunications.",
    useCasesTitle: "Common use cases include:",
    useCases: [
      "Funding software development and platform upgrades",
      "Supporting streaming and digital delivery infrastructure",
      "Managing vendor and technology partner payments",
      "Investing in cybersecurity and data management systems",
      "Supporting innovation across digital products and services",
    ],
    footnote:
      "Facilities are aligned with operational requirements, technology cycles, and growth strategies.",
    image:
      "/assets/images/mediatelecom-operations.jpg",
  },
];

const segments = [
  {
    id: "telecom-services",
    icon: "signal_cellular_alt",
    title: "Telecommunications Services",
    description:
      "Telecommunications companies provide voice, data, and connectivity services across wireless, broadband, and enterprise networks.",
    characteristics: [
      "Recurring revenue from subscription-based models",
      "High infrastructure investment requirements",
      "Long-term customer contracts",
      "Continuous network upgrades and expansion",
      "Exposure to regulatory frameworks",
    ],
    image:
      "/assets/images/mediatelecom-telecom.jpg",
  },
  {
    id: "broadcasting-digital",
    icon: "live_tv",
    title: "Broadcasting & Digital Media",
    description:
      "This segment includes television networks, streaming platforms, and digital publishers delivering content across multiple channels.",
    characteristics: [
      "Revenue from advertising, subscriptions, and licensing",
      "Content-driven audience engagement",
      "Multi-platform distribution strategies",
      "Fluctuations based on viewership and ad demand",
      "Ongoing investment in content creation",
    ],
    image:
      "/assets/images/mediatelecom-hero.jpg",
  },
  {
    id: "content-production",
    icon: "videocam",
    title: "Content Production & Distribution",
    description:
      "Companies involved in film, television, and digital content production and distribution operate across global markets.",
    characteristics: [
      "Project-based and recurring revenue mix",
      "High upfront production costs",
      "Monetization through licensing and distribution",
      "Dependence on audience demand and content performance",
      "Multi-channel revenue streams",
    ],
    image:
      "/assets/images/mediatelecom-operations.jpg",
  },
  {
    id: "infrastructure-providers",
    icon: "settings_input_antenna",
    title: "Infrastructure & Network Providers",
    description:
      "This includes companies that build and operate telecom towers, fiber networks, and data centers.",
    characteristics: [
      "Asset-intensive business models",
      "Long-term contracts with service providers",
      "Stable, predictable cash flows",
      "High capital expenditure requirements",
      "Focus on asset utilization and uptime",
    ],
    image:
      "/assets/images/mediatelecom-hero.jpg",
  },
  {
    id: "tech-platform",
    icon: "stream",
    title: "Technology & Platform Providers",
    description:
      "Companies offering streaming platforms, communication tools, and digital media technologies.",
    characteristics: [
      "Subscription and usage-based revenue models",
      "Continuous innovation and product development",
      "High customer acquisition and retention focus",
      "Scalable digital infrastructure",
      "Rapidly evolving competitive landscape",
    ],
    image:
      "/assets/images/mediatelecom-operations.jpg",
  },
];

const benefits = [
  {
    icon: "waterfall_chart",
    title: "Improved Cash Flow Visibility",
    description:
      "Structured capital solutions align liquidity with recurring revenues such as subscriptions and contracted income, supporting predictable cash flow management.",
    accent: "bg-primary",
  },
  {
    icon: "cell_tower",
    title: "Support for Infrastructure & Content Investment",
    description:
      "Access to capital enables ongoing investment in network expansion, content development, and digital platforms without disrupting operations.",
    accent: "bg-secondary",
  },
  {
    icon: "sync_alt",
    title: "Flexibility Across Revenue Cycles",
    description:
      "Revenue streams in this industry vary across subscriptions, advertising, and licensing. Structured frameworks adapt to these dynamics.",
    accent: "bg-primary/80",
  },
  {
    icon: "trending_up",
    title: "Scalable Capital for Growth",
    description:
      "As companies expand subscriber bases, content libraries, or network reach, capital structures scale alongside growth initiatives.",
    accent: "bg-secondary/80",
  },
  {
    icon: "verified_user",
    title: "Enhanced Operational Continuity",
    description:
      "Reliable liquidity supports uninterrupted service delivery, platform performance, and customer experience.",
    accent: "bg-primary",
  },
  {
    icon: "savings",
    title: "Preservation of Internal Capital",
    description:
      "Structured solutions allow companies to allocate internal resources toward innovation, strategic expansion, and long-term initiatives.",
    accent: "bg-secondary",
  },
];

const whyEpoch = [
  {
    number: "01",
    title: "Deep Industry Alignment",
    description:
      "Capital structures are developed with a strong understanding of subscription-based revenues, advertising cycles, content lifecycles, and network infrastructure requirements, ensuring alignment with how media and telecom businesses operate on a daily basis.",
  },
  {
    number: "02",
    title: "Flexible Structuring Approach",
    description:
      "Solutions are tailored around revenue visibility, contracted income streams, and asset profiles such as infrastructure and content libraries, allowing capital frameworks to adapt to changing business conditions and growth priorities.",
  },
  {
    number: "03",
    title: "Focused on Middle Market Dynamics",
    description:
      "Approaches are designed specifically for companies operating at scale, where capital needs extend beyond conventional structures, supporting multi-platform operations, regional expansion, and diversified revenue streams.",
  },
  {
    number: "04",
    title: "Consistent & Disciplined Frameworks",
    description:
      "A structured methodology focused on performance metrics, asset quality, and operational scale ensures stability and reliability across both ongoing activities and strategic initiatives.",
  },
  {
    number: "05",
    title: "Aligned for Long-Term Growth",
    description:
      "Capital structures evolve alongside business objectives, supporting investments in technology, network expansion, content development, and platform innovation while maintaining financial balance.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about our media and telecommunications financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question:
        "What types of capital structures are commonly used in media and telecommunications?",
      answer:
        "Capital structures are typically aligned with recurring revenues, infrastructure assets, and content value, including receivables-based frameworks, asset-backed structures, and scalable revolving solutions.",
    },
    {
      question: "How do recurring revenue models impact capital structuring?",
      answer:
        "Subscription, advertising, and contracted revenues provide visibility and predictability, allowing capital solutions to be aligned with cash flow cycles and long-term growth strategies.",
    },
    {
      question:
        "Can capital solutions support ongoing network and infrastructure expansion?",
      answer:
        "Yes, capital structures are designed to align with long-term infrastructure investments such as fiber networks, wireless systems, and data centers, supporting continuous expansion and upgrades.",
    },
    {
      question:
        "How is content investment supported within financial structures?",
      answer:
        "Content-related investments are typically aligned with production timelines, licensing agreements, and monetization cycles, ensuring capital availability throughout the content lifecycle.",
    },
    {
      question:
        "What role do receivables play in media and telecom capital solutions?",
      answer:
        "Receivables from subscriptions, advertising contracts, and enterprise billing cycles often support liquidity structures, helping maintain consistent cash flow.",
    },
  ],
};

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function MediaTelecomPageClient() {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeSolution, setActiveSolution] = useState(null);

  return (
    <>
      {/* ── HERO ── same UI as other pages ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4 mb-8 xl:mb-16">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 82%)), url("/assets/images/atlanta-media-night.jpg")',
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
                  cell_tower
                </span>
                MEDIA & TELECOMMUNICATIONS INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Financial Solutions for Middle Market Media &amp; Telecommunications Platforms
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                Structured capital solutions for media and telecommunications companies are aligned with
                subscriber growth, content monetization cycles, and infrastructure investment needs,
                supporting liquidity stability, operational scalability, and disciplined financial
                management across evolving digital ecosystems.
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

      {/* ── HOW CAPITAL SOLUTIONS DRIVE — staggered left-right split ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <FadeUp>
                <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
                  Capital Alignment
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-2xl">
                  How Capital Solutions Drive Media &amp; Telecom Operations
                </h2>
              </FadeUp>
              <div className="shrink-0 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-5 flex flex-col gap-1">
                <span className="text-[28px] font-extrabold text-primary leading-none">$150M+</span>
                <span className="text-[11px] text-body-gray font-medium uppercase tracking-wider">Max Loan Size</span>
              </div>
            </div>

            <div className="flex flex-col">
              {[
                {
                  body: "Structured credit supports media and telecommunications operations by aligning capital with subscription revenue cycles, advertising receivables, and ongoing infrastructure investments. In this environment, liquidity is often distributed across content production, network expansion, and platform development, making consistent access to capital essential.",
                  accent: "bg-primary",
                },
                {
                  body: "Solutions such as receivables-based structures are commonly integrated to align availability with contracted revenues, advertising income, and enterprise billing cycles. These structures adjust with revenue performance and usage trends, creating a responsive financial framework.",
                  accent: "bg-secondary",
                },
                {
                  body: "This enables better management of content investments, network upgrades, technology deployment, and customer acquisition costs while maintaining operational continuity. The focus remains on aligning capital structures with recurring revenue models and long-term infrastructure strategies.",
                  accent: "bg-primary/70",
                },
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="flex gap-5 py-6 border-b border-border-light last:border-0 group hover:pl-1 transition-all duration-300">
                    <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
                      <div className={`w-2 h-2 rounded-full ${item.accent} shrink-0`} />
                      {i < 2 && <div className="w-px flex-1 bg-border-light" />}
                    </div>
                    <p className="text-body-gray text-[14px] leading-relaxed">{item.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TAILORED CAPITAL SOLUTIONS — vertical stepper timeline ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-14 text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Capital Solutions
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
              Tailored Capital Solutions for Media &amp; Telecommunications Businesses
            </h2>
            <p className="text-body-gray text-sm mt-4 leading-relaxed">
              Media and telecommunications companies operate within capital-intensive and rapidly evolving
              environments, requiring scalable capital frameworks to support content delivery, network
              infrastructure, and digital platform growth.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            {/* Left: stepper selector */}
            <div className="lg:w-[35%] flex flex-col shrink-0">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[22px] top-6 bottom-6 w-px bg-border-light" />

                {capitalSolutions.map((sol, i) => (
                  <FadeUp key={sol.id} delay={i * 60}>
                    <button
                      onClick={() =>
                        setActiveSolution(activeSolution === sol.id ? null : sol.id)
                      }
                      className={`relative flex items-start gap-4 w-full text-left py-5 px-2 group transition-all duration-200`}
                    >
                      {/* Step dot */}
                      <div
                        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          activeSolution === sol.id
                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                            : "bg-white border-border-light text-body-gray group-hover:border-primary group-hover:text-primary"
                        }`}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                          {sol.icon}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 pt-1.5">
                        <span
                          className={`text-[12px] font-bold uppercase tracking-widest transition-colors duration-200 ${
                            activeSolution === sol.id ? "text-primary" : "text-body-gray/50"
                          }`}
                        >
                          {sol.number}
                        </span>
                        <span
                          className={`text-[17px] font-bold leading-snug transition-colors duration-200 ${
                            activeSolution === sol.id
                              ? "text-primary"
                              : "text-secondary group-hover:text-primary"
                          }`}
                        >
                          {sol.title}
                        </span>
                      </div>
                    </button>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Right: expanded content panel */}
            <FadeUp delay={120} className="lg:w-[65%]">
              {activeSolution ? (
                (() => {
                  const sol = capitalSolutions.find((s) => s.id === activeSolution);
                  if (!sol) return null;
                  return (
                    <div className="rounded-2xl overflow-hidden border border-border-light bg-white shadow-sm">
                      <div className="bg-gradient-to-r from-secondary to-secondary/85 p-6 xl:p-8 flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                            {sol.icon}
                          </span>
                        </div>
                        <h3 className="text-white text-[18px] font-bold leading-snug">{sol.title}</h3>
                      </div>
                      <div className="p-6 xl:p-8 flex flex-col gap-5">
                        <p className="text-body-gray text-[14px] leading-relaxed">{sol.description}</p>
                        <div>
                          <p className="text-secondary text-[11px] font-bold uppercase tracking-widest mb-3">
                            {sol.useCasesTitle}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                            {sol.useCases.map((uc) => (
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
                        {sol.footnote && (
                          <p className="text-body-gray/60 text-[12px] italic leading-relaxed border-l-2 border-primary/25 pl-3">
                            {sol.footnote}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="rounded-2xl border-2 border-dashed border-border-light bg-white flex flex-col items-center justify-center gap-4 h-64 text-center px-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                      touch_app
                    </span>
                  </div>
                  <p className="text-body-gray text-[14px]">
                    Select a capital solution on the left to explore details
                  </p>
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      <CTABanner
        title="Access Liquidity from Receivables in Telecom Operations"
        buttonText="Discuss a Financing Structure"
        bgImage="/assets/images/mediatelecom-cta.jpg"
      />

      {/* ── SEGMENTS — horizontal pill tabs + full content panel ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-10">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Industry Segments
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-3xl">
              Understanding Different Segments of Tech Businesses
            </h2>
          </FadeUp>

          {/* Pill selector */}
          <FadeUp delay={60} className="mb-8">
            <div className="flex flex-wrap gap-2">
              {segments.map((seg, i) => (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold border transition-all duration-300 ${
                    activeSegment === i
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                      : "bg-white text-secondary border-border-light hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                    {seg.icon}
                  </span>
                  {seg.title}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Segment content */}
          <FadeUp delay={100}>
            {segments[activeSegment] && (
              <div className="rounded-2xl overflow-hidden border border-border-light">
                {/* Segment header */}
                <div className="bg-secondary p-8 xl:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 border border-white/30 text-white">
                      <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                        {segments[activeSegment].icon}
                      </span>
                    </div>
                    <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">
                      {activeSegment + 1} / {segments.length}
                    </span>
                  </div>
                  <h3 className="text-white text-[22px] xl:text-[24px] font-bold leading-snug">
                    {segments[activeSegment].title}
                  </h3>
                  <p className="text-white/75 text-[13px] leading-relaxed mt-2">
                    {segments[activeSegment].description}
                  </p>
                </div>

                {/* Characteristics side */}
                <div className="bg-bg-alt p-8 xl:p-10 flex flex-col justify-center gap-6">
                  <div>
                    <p className="text-body-gray/50 text-[10px] font-bold uppercase tracking-widest mb-5">
                      Characteristics
                    </p>
                    <div className="flex flex-col gap-4">
                      {segments[activeSegment].characteristics.map((char, ci) => (
                        <div key={char} className="flex items-start gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                              check
                            </span>
                          </div>
                          <span className="text-secondary text-[14px] leading-relaxed font-medium">
                            {char}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Segment navigation dots */}
                  <div className="flex gap-2 pt-2 border-t border-border-light">
                    {segments.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSegment(idx)}
                        className={`rounded-full transition-all duration-300 ${
                          idx === activeSegment
                            ? "w-6 h-2 bg-primary"
                            : "w-2 h-2 bg-border-light hover:bg-primary/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── TRANSACTION PROFILE — dark section with centered layout ── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 overflow-hidden relative">
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "rgba(13,162,231,0.05)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(13,162,231,0.03)" }}
        />
        <div className="relative mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Transaction Profile
            </span>
            <h2 className="text-white 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Media &amp; Telecommunications Financing Size and Structure
            </h2>
            <p className="text-white/50 md:text-base text-sm mt-4 leading-relaxed">
              Financing solutions are structured for middle market media and telecommunications companies
              operating within defined capital frameworks and scalable business models.
            </p>
          </FadeUp>

          {/* Three stat blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              {
                icon: "payments",
                label: "Loan Size",
                value: "$10M – $150M+",
                sub: "Scalable capital for middle market operators",
              },
              {
                icon: "bar_chart",
                label: "Annual Revenue",
                value: "$30M – $750M",
                sub: "Revenue range for qualified companies",
              },
              {
                icon: "domain",
                label: "Companies",
                value: null,
                sub: "Telecom operators, media platforms, content producers, infrastructure providers, and sponsor-backed digital platforms",
              },
            ].map((param, i) => (
              <FadeUp key={param.label} delay={i * 100}>
                <div className="group flex flex-col items-center text-center gap-5 p-10 xl:p-12 bg-secondary hover:bg-white/5 transition-colors duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined" style={{ fontSize: 30 }}>
                      {param.icon}
                    </span>
                  </div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    {param.label}
                  </span>
                  {param.value && (
                    <p className="text-white text-[26px] md:text-[30px] lg:text-[34px] font-extrabold leading-none">
                      {param.value}
                    </p>
                  )}
                  <p className="text-white/55 text-[13px] leading-relaxed max-w-[260px]">{param.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={350} className="text-center mt-10">
            <p className="text-white/35 text-sm max-w-2xl mx-auto leading-relaxed italic">
              Each structure is aligned with revenue visibility, infrastructure assets, content value, and
              overall operational scale.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CORE BENEFITS — asymmetric 2-col grid with bold border accents ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-14 max-w-3xl">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Key Benefits
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
              Core Benefits of Capital Solutions for Media &amp; Telecommunications Sector
            </h2>
            <p className="text-body-gray text-sm mt-4 leading-relaxed max-w-2xl">
              Structured capital solutions support middle market telecommunications companies with the
              liquidity, flexibility, and scalability required to manage infrastructure investments,
              subscriber growth, and recurring revenue cycles while maintaining operational stability
              across evolving network and technology environments.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <FadeUp key={benefit.title} delay={i * 55}>
                <div className="group relative flex flex-col gap-4 p-7 xl:p-8 rounded-2xl border border-border-light bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${benefit.accent} rounded-t-2xl`} />

                  <div className="flex items-start gap-4 mt-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                        {benefit.icon}
                      </span>
                    </div>
                    <h3 className="text-secondary text-[15px] xl:text-[16px] font-bold leading-snug group-hover:text-primary transition-colors duration-300 pt-1">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-body-gray text-[13px] leading-relaxed">{benefit.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH EPOCH — editorial numbered rows ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

            {/* Left: sticky heading + image */}
            <FadeUp className="lg:w-[35%] lg:sticky lg:top-28 shrink-0 flex flex-col gap-6">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Our Approach
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
                Why Work with EPOCH Financial for Media &amp; Telecom Capital Solutions
              </h2>
              <div className="w-12 h-1 rounded-full bg-primary" />
              <p className="text-body-gray text-[13px] leading-relaxed">
                Middle market media and telecommunications companies operate within dynamic, capital-intensive
                environments shaped by evolving technologies, recurring revenue models, and continuous
                infrastructure demands. Structured capital approaches are designed to align with these
                complexities, supporting operational consistency and long-term scalability.
              </p>

              <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>verified</span>
                </div>
                <p className="text-secondary text-[13px] font-semibold leading-snug">
                  Structured capital approaches aligned with media and telecom complexities
                </p>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold hover:gap-2.5 transition-all duration-200 w-fit"
              >
                Learn More
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  arrow_forward
                </span>
              </Link>
            </FadeUp>

            {/* Right: editorial numbered list */}
            <div className="lg:w-[65%] flex flex-col">
              {whyEpoch.map((item, i) => (
                <FadeUp key={item.title} delay={i * 65}>
                  <div className="group flex items-start gap-6 xl:gap-8 py-8 border-b border-border-light first:border-t hover:bg-white hover:px-5 hover:rounded-2xl transition-all duration-300">
                    {/* Large number */}
                    <span className="text-[52px] xl:text-[60px] font-extrabold leading-none text-border-light group-hover:text-primary/20 transition-colors duration-300 shrink-0 select-none tabular-nums">
                      {item.number}
                    </span>

                    {/* Text */}
                    <div className="flex flex-col gap-2 pt-3">
                      <h3 className="text-secondary text-[16px] xl:text-[17px] font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-body-gray text-[13px] xl:text-[14px] leading-relaxed">
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

      {/* ── FINAL CTA ── */}
      <CTABanner
        title="Tailored Capital Solutions for Media & Telecommunications Companies"
        description="Explore capital structures designed around your revenue models, infrastructure assets, and growth strategy. Evaluate solutions aligned with operational requirements, technology investment cycles, and long-term industry evolution."
        buttonText="Contact Our Team"
        bgImage="/assets/images/mediatelecom-cta.jpg"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
