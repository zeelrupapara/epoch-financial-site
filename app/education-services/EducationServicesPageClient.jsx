"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

/* ── DATA ──────────────────────────────────────────────────────────────── */

const creditFacilities = [
  {
    id: "working-capital",
    number: "01",
    icon: "account_balance_wallet",
    title: "Working Capital Financing",
    descriptions: [
      "Working capital financing supports education providers in managing liquidity across enrollment cycles and tuition payment timelines. Cash flow gaps often arise between admissions, course delivery, and fee realization, particularly in institutions offering installment-based payment models.",
      "Accounts receivable (AR) financing plays a critical role in bridging this gap by converting tuition receivables into immediate liquidity, ensuring uninterrupted academic operations.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Managing faculty and administrative payroll",
      "Supporting day-to-day operational expenses",
      "Supporting enrollment growth and student acquisition strategies",
      "Bridging tuition receivables and deferred payment plans",
      "Maintaining liquidity during seasonal enrollment cycles",
    ],
    footnote:
      "Facilities are typically structured using receivable-backed financing or broader asset-based lending solutions, depending on fee structures and payment reliability.",
    image:
      "/assets/images/education-hero.jpg",
  },
  {
    id: "contract-based",
    number: "02",
    icon: "description",
    title: "Contract-Based Financing",
    descriptions: [
      "Contract-based financing is a key structure within the education sector, where capital is secured against long-term institutional contracts, government funding arrangements, or corporate training agreements.",
    ],
    useCasesTitle: "Common financing scenarios include:",
    useCases: [
      "Supporting large-scale training programs",
      "Supporting government or institutional contracts",
      "Expanding corporate learning and development services",
      "Scaling multi-campus education platforms",
      "Refinancing existing contract-backed obligations",
    ],
    footnote:
      "These structures align capital availability with contract performance and revenue visibility.",
    image:
      "/assets/images/education-partner.jpg",
  },
  {
    id: "campus-development",
    number: "03",
    icon: "apartment",
    title: "Campus Development & Expansion Financing",
    descriptions: [
      "Education providers require capital to expand infrastructure, develop new campuses, and upgrade facilities. Development financing supports these capital-intensive initiatives while maintaining operational continuity.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Developing new campuses and training centers",
      "Expanding classroom and digital infrastructure",
      "Investing in technology-enabled learning systems",
      "Upgrading existing facilities",
      "Supporting institutional growth initiatives",
    ],
    footnote:
      "Facilities are structured around enrollment projections, institutional performance, and long-term growth strategies.",
    image:
      "/assets/images/education-operations.jpg",
  },
  {
    id: "edtech-infrastructure",
    number: "04",
    icon: "devices",
    title: "Digital & EdTech Infrastructure Financing",
    descriptions: [
      "With the rapid adoption of digital learning, education providers require investment in technology platforms, content development, and delivery infrastructure. Financing is structured around subscription revenues, platform usage, and recurring income streams.",
    ],
    useCasesTitle: "Common financing uses include:",
    useCases: [
      "Building and scaling online learning platforms",
      "Developing digital course content",
      "Investing in learning management systems (LMS)",
      "Supporting hybrid and remote education models",
      "Expanding digital distribution capabilities",
    ],
    footnote:
      "Facilities are supported by recurring revenues and scalable business models, aligning capital with platform growth.",
    image:
      "/assets/images/education-hero.jpg",
  },
];

const segments = [
  {
    id: "higher-education",
    icon: "school",
    title: "Higher Education Institutions",
    description:
      "Universities and colleges require financing to support academic programs, infrastructure, and operational continuity.",
    characteristics: [
      "Enrollment-driven revenue models",
      "Long academic cycles",
      "Recurring tuition income",
      "Institutional funding structures",
    ],
    image:
      "/assets/images/education-hero.jpg",
  },
  {
    id: "k12-networks",
    icon: "menu_book",
    title: "K\u201312 Education Networks",
    description:
      "Private school networks and education groups require capital to manage operations and expand campuses.",
    characteristics: [
      "Predictable fee structures",
      "Seasonal enrollment cycles",
      "Multi-campus operations",
      "Stable demand-driven revenues",
    ],
    image:
      "/assets/images/education-operations.jpg",
  },
  {
    id: "vocational-training",
    icon: "engineering",
    title: "Vocational Training & Skill Development",
    description:
      "Training institutes and certification providers focus on workforce development and industry-specific education.",
    characteristics: [
      "Short-term program cycles",
      "Corporate and government contracts",
      "High enrollment variability",
      "Outcome-based revenue models",
    ],
    image:
      "/assets/images/education-partner.jpg",
  },
  {
    id: "edtech-platforms",
    icon: "computer",
    title: "EdTech & Online Learning Platforms",
    description:
      "Digital education providers operate scalable, technology-driven learning models.",
    characteristics: [
      "Subscription-based revenues",
      "Scalable digital infrastructure",
      "Recurring user engagement",
      "Technology-driven delivery models",
    ],
    image:
      "/assets/images/education-hero.jpg",
  },
  {
    id: "corporate-training",
    icon: "groups",
    title: "Corporate Training & Professional Education",
    description:
      "Organizations providing enterprise learning solutions require financing aligned with contract-based revenues.",
    characteristics: [
      "Long-term corporate contracts",
      "Recurring training programs",
      "Predictable revenue streams",
      "High client retention rates",
    ],
    image:
      "/assets/images/education-operations.jpg",
  },
];

const keyAdvantages = [
  {
    icon: "sync_alt",
    title: "Predictable Revenue Alignment",
    description:
      "Financing structures align with tuition cycles and contract-based income, ensuring consistent liquidity throughout academic periods.",
    colorClass: "text-primary bg-primary/10",
  },
  {
    icon: "waterfall_chart",
    title: "Improved Working Capital Efficiency",
    description:
      "Receivable-based financing allows institutions to convert tuition and contract receivables into immediate capital, improving cash flow management.",
    colorClass: "text-secondary bg-secondary/10",
  },
  {
    icon: "apartment",
    title: "Support for Infrastructure Expansion",
    description:
      "Structured credit supports campus development, digital transformation, and institutional growth without disrupting existing operations.",
    colorClass: "text-primary bg-primary/10",
  },
  {
    icon: "calendar_month",
    title: "Flexibility Across Enrollment Cycles",
    description:
      "Financing adapts to seasonal enrollment fluctuations, ensuring stability during both peak and low admission periods.",
    colorClass: "text-secondary bg-secondary/10",
  },
  {
    icon: "trending_up",
    title: "Scalable Growth Opportunities",
    description:
      "Facilities are designed to scale with institutional expansion, supporting new campuses, programs, and digital platforms.",
    colorClass: "text-primary bg-primary/10",
  },
];

const whyEpoch = [
  {
    icon: "verified",
    title: "Industry-Aligned Expertise",
    description:
      "We understand the operational dynamics of education institutions, including enrollment cycles, tuition models, and regulatory frameworks. This enables us to structure financing that aligns closely with academic timelines and institutional requirements.",
    borderColor: "border-primary",
  },
  {
    icon: "tune",
    title: "Customized Capital Structures",
    description:
      "Each financing solution is tailored based on institutional size, revenue visibility, and growth objectives. Our approach ensures capital structures are aligned with both short-term needs and long-term strategic plans.",
    borderColor: "border-secondary",
  },
  {
    icon: "receipt_long",
    title: "Receivable-Driven Financing Solutions",
    description:
      "Facilities leverage tuition receivables and contract-backed revenues to enhance liquidity and capital efficiency. This improves cash flow predictability while reducing reliance on traditional unsecured financing.",
    borderColor: "border-primary",
  },
  {
    icon: "expand",
    title: "Flexible and Scalable Structures",
    description:
      "Credit facilities adapt to enrollment trends and institutional expansion strategies. This allows education providers to scale operations without disrupting financial stability.",
    borderColor: "border-secondary",
  },
  {
    icon: "task_alt",
    title: "Execution Certainty",
    description:
      "We manage lender engagement and execution timelines to ensure efficient deal closure. Our structured process minimizes delays and provides confidence in transaction outcomes.",
    borderColor: "border-primary",
  },
  {
    icon: "handshake",
    title: "Long-Term Capital Partnership",
    description:
      "We support education providers through various growth phases with structured financing solutions aligned to long-term objectives. Our focus is on building enduring relationships that support sustained institutional growth and performance.",
    borderColor: "border-secondary",
  },
];

const faqs = {
  items: [
    {
      question: "What is contract-based financing in education?",
      answer:
        "It is a financing structure where borrowing capacity is linked to long-term institutional contracts, government funding, or corporate training agreements. This approach provides predictable access to capital by aligning funding with committed revenue streams and contractual cash flow visibility.",
    },
    {
      question: "How does financing support education operations?",
      answer:
        "Financing supports payroll, infrastructure, technology investment, and operational expenses aligned with academic cycles.",
    },
    {
      question: "Can education providers leverage receivables for financing?",
      answer:
        "Yes, tuition and contract receivables can be converted into immediate liquidity through receivable-based financing.",
    },
    {
      question: "How are borrowing bases determined in education financing?",
      answer:
        "They are typically based on enrollment levels, tuition receivables, contract strength, and revenue visibility.",
    },
    {
      question: "Is financing available for digital education platforms?",
      answer:
        "Yes, financing can be structured around subscription-based revenues and platform scalability for edtech businesses.",
    },
  ],
};

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function EducationServicesPageClient() {
  const [activeFacility, setActiveFacility] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);

  return (
    <>
      {/* ── HERO ── same UI as other pages ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4 mb-8 xl:mb-16">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(11 35 65 / 75%), rgb(11 35 65 / 90%)), url("/assets/images/educationhero.jfif")',
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
                  school
                </span>
                EDUCATION SERVICES INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Middle Market Education Financing and Structured Credit Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                Credit facilities for middle market education service providers structured around
                enrollment cycles, tuition receivables, and contract-backed revenues to support
                operations, liquidity, and long-term institutional growth.
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

      {/* ── HOW FINANCING ADAPTS ── Vertical timeline left + image right ── */}
      <section className="bg-white xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="xl:mb-0 mb-10">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Operational Alignment
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-2xl">
              How Financing Adapts to Education Operational Needs
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                num: "01",
                icon: "account_balance",
                text: "Credit facilities in the education sector are structured around predictable enrollment cycles, tuition inflows, and institutional contracts. Borrowing bases adjust based on student intake, fee collection timelines, and contract-backed revenues, while receivable-backed and asset-based structures ensure consistent liquidity to support ongoing institutional operations.",
              },
              {
                num: "02",
                icon: "sync_alt",
                text: "Facilities often combine term debt and revolving structures to support both operational stability and expansion initiatives. Transactions are structured and executed to align with academic cycles and institutional requirements, with lender engagement managed throughout the process.",
              },
              {
                num: "03",
                icon: "verified",
                text: "The financing process is structured to improve capital efficiency, mitigate risk, and ensure execution certainty across changing enrollment patterns and regulatory environments.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="rounded-2xl border border-border-light bg-bg-alt p-7 h-full flex flex-col gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
                      <span className="text-white text-[12px] font-bold tracking-tight">{item.num}</span>
                    </div>
                    <span className="material-symbols-outlined text-primary/30" style={{ fontSize: 28 }}>{item.icon}</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  <p className="text-body-gray text-[14px] leading-relaxed flex-1">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-8">
            <div className="inline-flex items-center gap-4 bg-primary/5 border border-primary/15 rounded-2xl px-7 py-5">
              <span className="text-[32px] font-extrabold text-primary leading-none">$100M+</span>
              <span className="text-[13px] text-body-gray font-medium uppercase tracking-wider">Max Facility Size</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CORE CREDIT FACILITIES ── Sticky left tab nav + right content panel ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-10">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Financing Structures
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-2xl">
              Core Credit Facilities for Education Service Providers
            </h2>
            <p className="text-body-gray text-[15px] mt-3 max-w-2xl leading-relaxed">
              EPOCH Financial advises on and structures financing facilities using several primary
              strategies designed specifically for education institutions, training providers, and
              education infrastructure platforms.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: sticky vertical tab nav */}
            <div className="lg:w-[28%] lg:sticky lg:top-28 self-start">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {creditFacilities.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFacility(i)}
                    className={`flex items-start gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 w-full ${
                      activeFacility === i
                        ? "bg-secondary text-white shadow-lg"
                        : "bg-white text-secondary hover:bg-white/70 border border-border-light"
                    }`}
                  >
                    <span
                      className={`text-[13px] font-bold tabular-nums shrink-0 pt-0.5 ${
                        activeFacility === i ? "text-primary/80" : "text-primary"
                      }`}
                    >
                      {f.number}
                    </span>
                    <span className="text-[14px] font-semibold leading-snug">{f.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: content panel */}
            <div className="lg:w-[72%]">
              {creditFacilities.map((f, i) => (
                <div key={f.id} className={activeFacility === i ? "block" : "hidden"}>
                  <FadeUp>
                    <div className="bg-white rounded-2xl overflow-hidden border border-border-light shadow-sm">
                      {/* Styled header */}
                      <div className="bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80 p-7 flex items-center gap-5">
                        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 shrink-0 gap-1">
                          <span className="text-primary text-[10px] font-bold tracking-widest">{f.number}</span>
                          <span className="material-symbols-outlined text-white" style={{ fontSize: 22 }}>{f.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-white text-[20px] font-bold leading-snug">{f.title}</h3>
                        </div>
                      </div>
                      {/* Body */}
                      <div className="p-8">
                        {f.descriptions.map((desc, di) => (
                          <p
                            key={di}
                            className={`text-body-gray text-[15px] leading-relaxed ${
                              di < f.descriptions.length - 1 ? "mb-4" : ""
                            }`}
                          >
                            {desc}
                          </p>
                        ))}
                        <div className="mt-6">
                          <p className="text-secondary font-semibold text-[14px] mb-3">
                            {f.useCasesTitle}
                          </p>
                          <ul className="space-y-2.5">
                            {f.useCases.map((uc, ui) => (
                              <li
                                key={ui}
                                className="flex items-start gap-3 text-body-gray text-[14px]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] shrink-0" />
                                {uc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="mt-6 text-[13px] text-body-gray italic border-l-2 border-primary/30 pl-4 leading-relaxed">
                          {f.footnote}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-CTA ── Two-tone horizontal split ── */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[160px]">
          <div className="md:w-[60%] bg-secondary px-8 md:px-16 lg:px-20 py-12 flex items-center">
            <FadeUp>
              <h3 className="text-white 2xl:text-[28px] lg:text-[24px] text-[20px] font-bold leading-snug max-w-xl">
                Access Immediate Liquidity with Receivable Financing for Education Providers
              </h3>
            </FadeUp>
          </div>
          <div className="md:w-[40%] bg-primary px-8 md:px-12 py-12 flex items-center justify-center md:justify-start">
            <FadeUp>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-[15px] font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Discuss a Financing Structure
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_forward
                </span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SUPPORTED ── Sticky image left + interactive list right ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-12">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Sector Coverage
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-2xl">
              Industries Supported Across Education Services
            </h2>
            <p className="text-body-gray text-[15px] mt-3 max-w-2xl leading-relaxed">
              Middle market education service providers require credit structures aligned with
              enrollment trends, institutional strength, and contract-driven cash flows.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {segments.map((seg, i) => {
              const isActive = activeSegment === i;
              return (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(i)}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 p-6 ${
                    isActive
                      ? "bg-secondary border-secondary shadow-xl"
                      : "bg-white border-border-light hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}>
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{seg.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className={`font-bold text-[16px] leading-snug ${isActive ? "text-white" : "text-secondary"}`}>
                          {seg.title}
                        </h3>
                        <span className={`text-[10px] font-bold tabular-nums shrink-0 mt-0.5 ${isActive ? "text-primary" : "text-body-gray/30"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className={`text-[13px] leading-relaxed ${isActive ? "text-white/70" : "text-body-gray"}`}>
                        {seg.description}
                      </p>
                      {isActive && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {seg.characteristics.map((c, ci) => (
                            <span key={ci} className="inline-flex items-center gap-1.5 bg-white/10 text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/20">
                              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINANCING RANGE ── Dark section with large metrics ── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-10">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Transaction Profile
            </span>
            <h2 className="text-white 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-2xl">
              Middle Market Education Financing Range
            </h2>
            <p className="text-white/70 text-[15px] mt-3 max-w-2xl leading-relaxed">
              Middle market education financing supports institutions operating within defined
              capital ranges aligned with enrollment scale, infrastructure, and revenue visibility.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Left: two big metric blocks */}
            <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FadeUp>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30" />
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-4">
                    Loan Size
                  </p>
                  <p className="text-white 2xl:text-[32px] lg:text-[26px] text-[24px] font-extrabold leading-none">
                    Up To $100M+
                  </p>
                </div>
              </FadeUp>
              <FadeUp>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/20" />
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-4">
                    Annual Revenue
                  </p>
                  <p className="text-white 2xl:text-[32px] lg:text-[26px] text-[24px] font-extrabold leading-none">
                    $15M+
                  </p>
                </div>
              </FadeUp>
              <FadeUp>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10" />
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-4">
                    Focus
                  </p>
                  <p className="text-white 2xl:text-[32px] lg:text-[26px] text-[24px] font-extrabold leading-none">
                    Middle Market
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right: institution types + footnote */}
            <FadeUp className="lg:w-[45%]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full flex flex-col justify-between gap-6">
                <div>
                  <p className="text-white/50 text-[11px] uppercase tracking-widest font-semibold mb-4">
                    Typical transaction characteristics include:
                  </p>
                  <p className="text-white/80 text-[15px] leading-relaxed">
                    Institutions include universities, school networks, training providers, edtech
                    platforms, and corporate education firms
                  </p>
                </div>
                <div>
                  <div className="w-12 h-0.5 bg-primary mb-5" />
                  <p className="text-white/60 text-[14px] leading-relaxed italic">
                    Financing structures are customized based on enrollment trends, receivables
                    quality, contract-backed revenues, and institutional strength
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── KEY ADVANTAGES ── Dark split: sticky heading left + open list right ── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

            {/* Left: sticky heading block */}
            <FadeUp className="lg:w-[36%] lg:sticky lg:top-28 self-start">
              <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">
                Competitive Edge
              </span>
              <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
                Key Advantages of Education Financing
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed mb-10">
                Education financing is structured to align with recurring revenue models, enrollment
                cycles, and infrastructure-driven operations.
              </p>
              {/* Visual counter */}
              <div className="flex items-end gap-4">
                <span className="text-[72px] font-extrabold text-primary leading-none">
                  {keyAdvantages.length}
                </span>
                <div className="pb-3">
                  <p className="text-white font-semibold text-[16px] leading-tight">Key</p>
                  <p className="text-white/50 text-[13px]">Financing Advantages</p>
                </div>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-primary/60 to-transparent" />
            </FadeUp>

            {/* Right: open numbered list */}
            <div className="lg:w-[64%]">
              {keyAdvantages.map((adv, i) => (
                <FadeUp key={i}>
                  <div className={`flex gap-6 xl:gap-10 py-8 ${i < keyAdvantages.length - 1 ? "border-b border-white/10" : ""}`}>

                    {/* Number + icon column */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="text-white/15 font-extrabold text-[40px] leading-none tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mt-1">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
                          {adv.icon}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-white font-bold text-[18px] leading-snug mb-3">
                        {adv.title}
                      </h3>
                      <p className="text-white/60 text-[15px] leading-relaxed">
                        {adv.description}
                      </p>
                    </div>

                    {/* Right accent */}
                    <div className="hidden xl:flex items-start pt-3 shrink-0">
                      <div className="w-8 h-0.5 bg-primary/40 mt-3" />
                    </div>

                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY EPOCH ── 2-col grid with left-border accents + right image ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="mb-10">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Our Approach
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight max-w-2xl">
              Why Partner With EPOCH Financial for Education Financing?
            </h2>
            <p className="text-body-gray text-[15px] mt-3 max-w-2xl leading-relaxed">
              EPOCH Financial advises on, structures, and executes credit facilities for education
              service providers, aligning each transaction with enrollment performance, receivables,
              and institutional growth strategies.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {whyEpoch.map((item, i) => (
              <FadeUp key={i} delay={i * 55}>
                <div className={`group relative rounded-2xl border bg-white p-7 h-full flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden border-border-light`}>
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${item.borderColor === "border-primary" ? "bg-primary" : "bg-secondary"}`} />
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{item.icon}</span>
                    </div>
                    <h3 className="text-secondary font-bold text-[15px] leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-gray text-[13px] leading-relaxed flex-1">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] group"
            >
              <span>Learn more</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title="Plan an Education Financing Structure"
        description="Education institutions require reliable access to capital to sustain academic operations, invest in infrastructure, and scale institutional capabilities. We advise on and structure credit facilities aligned with enrollment trends, tuition inflows, and contract-based revenue streams."
        buttonText="Contact Our Team"
        bgImage="/assets/images/education-cta.jpg"
      />

      {/* ── FAQs ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
