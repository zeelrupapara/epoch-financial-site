"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

/* ── DATA ─────────────────────────────────────────────────────────── */

const financingSolutions = [
  {
    id: "receivables",
    icon: "account_balance",
    title: "Operational Liquidity & Healthcare Receivables Financing",
    description:
      "Maintaining consistent cash flow is essential for healthcare companies managing extended reimbursement cycles and third-party payer delays. Receivables-based financing structures provide liquidity through the monetization of eligible patient and insurance receivables.",
    note: "Accounts receivable financing supports working capital requirements tied to ongoing operations.",
    useCasesTitle: "Typical use cases include:",
    useCases: [
      "Managing delayed insurance and third-party reimbursements",
      "Supporting clinical and administrative payroll obligations",
      "Funding ongoing operational expenses",
      "Stabilizing cash flow across billing cycles",
      "Improving liquidity across multi-location healthcare networks",
    ],
    footnote:
      "These solutions are commonly structured through asset-based lending facilities or revolving credit frameworks.",
  },
  {
    id: "equipment",
    icon: "medical_services",
    title: "Medical Equipment & Asset Financing",
    description:
      "Medical equipment and infrastructure represent core assets within healthcare operations, often requiring significant upfront investment. Equipment-backed financing solutions are structured against eligible medical assets, including diagnostic and treatment equipment.",
    note: "This form of financing is particularly relevant for organizations investing in advanced technologies and facility upgrades.",
    useCasesTitle: "Common applications include:",
    useCases: [
      "Acquiring diagnostic and treatment equipment",
      "Upgrading existing medical technology",
      "Expanding clinical capabilities and service offerings",
      "Supporting facility modernization initiatives",
    ],
    footnote:
      "Facilities are generally aligned with asset value, utilization, and operational lifespan, forming a key component of broader capital structures.",
  },
  {
    id: "expansion",
    icon: "domain_add",
    title: "Healthcare Services & Facility Expansion Financing",
    description:
      "Scaled healthcare platforms often require capital to support expansion across facilities, service lines, and geographic markets. Structured financing solutions support these initiatives while maintaining operational balance and financial discipline.",
    note: "Financing is typically aligned with revenue visibility, patient volumes, and service line performance.",
    useCasesTitle: "Typical scenarios include:",
    useCases: [
      "Expanding hospitals, clinics, and outpatient centers",
      "Adding new service lines or specialties",
      "Supporting acquisitions and strategic partnerships",
      "Scaling multi-location healthcare platforms",
    ],
    footnote:
      "These solutions are aligned with operational scale, revenue consistency, and long-term growth objectives.",
  },
  {
    id: "staffing",
    icon: "manage_accounts",
    title: "Staffing, Operations & Infrastructure Financing",
    description:
      "Efficient healthcare operations require continuous investment in workforce, systems, and infrastructure. Financing solutions support these investments without disrupting working capital or operational stability.",
    note: "This includes both day-to-day operational needs and long-term infrastructure development.",
    useCasesTitle: "Common use cases include:",
    useCases: [
      "Managing clinical and non-clinical staffing requirements",
      "Investing in healthcare IT systems and digital infrastructure",
      "Enhancing patient care facilities and operational systems",
      "Supporting compliance and regulatory initiatives",
    ],
    footnote:
      "Facilities are aligned with operational performance, cost structures, and long-term sustainability, supporting consistent delivery of care and financial stability.",
  },
];

const operatingSegments = [
  {
    icon: "local_hospital",
    title: "Hospitals & Health Systems",
    description:
      "Hospitals and integrated health systems operate with high patient volumes, complex service delivery models, and significant infrastructure requirements. Managing costs, staffing, and regulatory compliance is critical to maintaining operational efficiency and quality care.",
    characteristics: [
      "High fixed operating and infrastructure costs",
      "Complex revenue cycles with third-party payers",
      "Continuous patient care and service delivery",
      "Regulatory and compliance-intensive environment",
      "Multi-department and multi-location operations",
    ],
  },
  {
    icon: "medical_services",
    title: "Outpatient Clinics & Ambulatory Care Centers",
    description:
      "Outpatient clinics and ambulatory care centers focus on specialized and routine care delivered outside hospital settings. These facilities require efficient patient throughput and consistent cash flow management.",
    characteristics: [
      "High patient turnover and appointment-based services",
      "Lower infrastructure costs compared to hospitals",
      "Dependence on timely reimbursements",
      "Focus on specialized or routine treatments",
      "Scalable multi-location models",
    ],
  },
  {
    icon: "biotech",
    title: "Diagnostic & Imaging Centers",
    description:
      "Diagnostic and imaging centers provide essential testing and imaging services, often requiring significant investment in advanced medical equipment and technology. Operational efficiency and equipment utilization are key drivers.",
    characteristics: [
      "High investment in diagnostic equipment",
      "Revenue tied to test volumes and referrals",
      "Dependence on physician and hospital networks",
      "Ongoing technology upgrades required",
      "Consistent demand across healthcare systems",
    ],
  },
  {
    icon: "science",
    title: "Pharmaceutical & Life Sciences Companies",
    description:
      "Pharmaceutical and life sciences companies operate within research-driven and highly regulated environments. Significant capital is allocated toward development, testing, and commercialization of products.",
    characteristics: [
      "High research and development costs",
      "Long product development cycles",
      "Strict regulatory approval processes",
      "Intellectual property-driven value",
      "Global distribution and commercialization strategies",
    ],
  },
  {
    icon: "precision_manufacturing",
    title: "Medical Devices & Equipment Manufacturers",
    description:
      "Medical device companies focus on designing, manufacturing, and distributing healthcare equipment. Innovation, regulatory approvals, and supply chain efficiency are central to operations.",
    characteristics: [
      "Innovation and technology-driven production",
      "Regulatory approvals and certifications required",
      "Capital-intensive manufacturing processes",
      "Global supply chain dependencies",
      "Product lifecycle management and upgrades",
    ],
  },
  {
    icon: "elderly",
    title: "Long-Term Care & Senior Living Facilities",
    description:
      "Long-term care providers, including nursing homes and assisted living facilities, focus on ongoing patient support and residential care. Operations are centered on staffing, compliance, and consistent service delivery.",
    characteristics: [
      "Recurring revenue from long-term care services",
      "High staffing and operational requirements",
      "Regulatory and compliance oversight",
      "Stable but cost-sensitive operating environment",
      "Growing demand driven by aging populations",
    ],
  },
  {
    icon: "monitor_heart",
    title: "Healthcare IT & Digital Health Providers",
    description:
      "Healthcare IT and digital health companies support the sector through technology solutions, including electronic records, telehealth, and data management systems. Growth is driven by digital adoption and efficiency needs.",
    characteristics: [
      "Technology-driven service delivery models",
      "Recurring revenue through software or platforms",
      "Integration with healthcare providers and systems",
      "Focus on data security and compliance",
      "Rapid growth and innovation cycles",
    ],
  },
];

const financingParams = [
  { icon: "payments", label: "Loan Size", value: "$5M – $100M+" },
  { icon: "trending_up", label: "Annual Revenue", value: "$25M – $500M" },
  {
    icon: "groups",
    label: "Borrowers",
    desc: "Hospitals, outpatient clinics, diagnostic centers, physician groups, and sponsor-backed healthcare platforms",
  },
];

const strategicBenefits = [
  {
    icon: "water_drop",
    title: "Improved Working Capital Efficiency",
    description:
      "Financing structures enable access to liquidity tied up in receivables, allowing healthcare organizations to maintain consistent cash flow despite delayed insurance reimbursements. This improves visibility and supports uninterrupted day-to-day operations.",
  },
  {
    icon: "groups",
    title: "Support for Staffing and Operational Costs",
    description:
      "Access to structured capital helps manage ongoing expenses such as clinical staffing, administrative functions, and facility operations. This ensures continuity in patient care without disruptions caused by cash flow timing gaps.",
  },
  {
    icon: "sync_alt",
    title: "Flexibility to Manage Reimbursement Cycles",
    description:
      "Healthcare providers operating at scale often manage extended payment timelines from insurers and third-party payers. Structured capital frameworks help bridge these gaps by aligning liquidity with billing cycles, allowing operations to run smoothly while maintaining financial balance.",
  },
  {
    icon: "trending_up",
    title: "Scalable Capital Aligned with Growth",
    description:
      "As healthcare organizations expand services, locations, or patient volumes, financing structures can scale accordingly. This supports growth initiatives such as new facilities, additional service lines, and increased capacity.",
  },
  {
    icon: "shield",
    title: "Enhanced Operational Stability",
    description:
      "Reliable access to capital supports consistent service delivery, procurement of medical supplies, and infrastructure maintenance. This reduces operational strain and strengthens the ability to manage fluctuating patient demand.",
  },
  {
    icon: "savings",
    title: "Reduced Pressure on Internal Cash Reserves",
    description:
      "By utilizing structured financing, healthcare companies can preserve internal cash for strategic priorities such as technology upgrades, quality improvements, and long-term expansion, rather than allocating it toward routine working capital needs.",
  },
];

const whyEpoch = [
  {
    icon: "medical_information",
    title: "Healthcare-Focused Understanding",
    description:
      "Capital structures are aligned with complex healthcare operations, including reimbursement timelines, patient volumes, and regulatory requirements across multi-site platforms.",
  },
  {
    icon: "build_circle",
    title: "Customized Structuring",
    description:
      "Solutions are aligned with receivables quality, service mix, and operational scale, ensuring capital frameworks reflect real-world healthcare dynamics and evolving growth priorities.",
  },
  {
    icon: "corporate_fare",
    title: "Middle Market Specialization",
    description:
      "Solutions are focused on healthcare organizations operating beyond traditional bank thresholds, supporting flexible capital approaches suited to multi-site providers, specialty practices, and expanding healthcare platforms.",
  },
  {
    icon: "verified",
    title: "Disciplined Approach",
    description:
      "A disciplined and consistent approach is applied to evaluating operational performance, asset quality, and financial positioning, supporting reliable capital alignment across both routine operations and strategic initiatives.",
  },
  {
    icon: "timeline",
    title: "Long-Term Alignment",
    description:
      "Capital structures are continuously aligned with expansion plans, technology investments, and service line growth, supporting long-term objectives while maintaining operational balance.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about our healthcare financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "What types of healthcare companies typically use financing solutions?",
      answer:
        "Financing solutions are commonly utilized by hospitals, outpatient clinics, diagnostic centers, physician groups, and multi-location healthcare platforms. These organizations often require structured capital to manage operations, reimbursement cycles, and expansion initiatives.",
    },
    {
      question: "How do reimbursement cycles impact healthcare financing needs?",
      answer:
        "Healthcare companies often experience delays in payments from insurers and third-party payers. Financing helps align liquidity with these cycles, ensuring consistent cash flow to support staffing, operations, and patient care without disruption.",
    },
    {
      question: "What assets are typically considered in healthcare financing structures?",
      answer:
        "Financing structures are generally aligned with accounts receivable, medical equipment, and predictable cash flows. These elements reflect the operational and financial profile of healthcare businesses.",
    },
    {
      question: "Can financing support healthcare expansion initiatives?",
      answer:
        "Yes, structured capital can support expansion efforts such as opening new facilities, adding service lines, upgrading equipment, or entering new markets, while maintaining operational stability.",
    },
    {
      question: "How does financing improve working capital management in healthcare?",
      answer:
        "Financing enables access to liquidity tied up in receivables, helping healthcare providers manage ongoing expenses, maintain cash flow consistency, and operate efficiently across billing cycles.",
    },
    {
      question: "Is financing suitable for multi-location healthcare providers?",
      answer:
        "Multi-location providers often benefit from financing structures that align with consolidated receivables and operational scale, supporting consistent liquidity across all facilities.",
    },
  ],
};

/* ── COMPONENT ────────────────────────────────────────────────────── */

export default function HealthcarePageClient() {
  const [activeTab, setActiveTab] = useState(0);
  const active = financingSolutions[activeTab];

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4 mb-8 xl:mb-16">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[440px] flex-col justify-center rounded-2xl overflow-hidden p-8 md:p-16 lg:p-20 bg-secondary bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgb(17 55 95 / 72%), rgb(17 55 95 / 88%)), url("/assets/images/healthcare-campus-hero.jpg")',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  local_hospital
                </span>
                HEALTHCARE INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Middle Market Credit Solutions for Healthcare Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                Mid-market healthcare companies require consistent working capital to manage receivables cycles, regulatory
                costs, and operational demands. Structured middle market financing solutions help maintain liquidity,
                support expansion, and ensure financial stability.
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

      {/* ── ROLE OF CREDIT FACILITIES — image right + content left ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-3xl">
            <FadeUp className="flex flex-col justify-center gap-7">
              <div className="flex flex-col gap-4">
                <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                  Credit Facilities
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
                  Role of Credit Facilities in Healthcare Operations
                </h2>
                <div className="w-12 h-1 rounded-full bg-primary" />
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-white rounded-2xl border border-border-light p-6 flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                      account_balance
                    </span>
                  </div>
                  <p className="text-body-gray text-sm leading-relaxed">
                    Credit facilities play a critical role in supporting both the day-to-day and strategic operations
                    of healthcare businesses. These structures provide reliable access to working capital, enabling
                    organizations to manage delayed insurance reimbursements, payroll obligations, and high operating
                    costs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-border-light p-6 flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                      trending_up
                    </span>
                  </div>
                  <p className="text-body-gray text-sm leading-relaxed">
                    In a sector defined by regulatory complexity and capital-intensive infrastructure, credit
                    facilities help maintain liquidity and operational continuity. They also support expansion
                    initiatives, including facility upgrades, equipment acquisition, and service line growth, by
                    aligning capital availability with receivables and cash flow cycles. These solutions are
                    structured to ensure stability, flexibility, and long-term growth.
                  </p>
                </div>
              </div>

              {/* Three highlight tags */}
              <div className="flex flex-wrap gap-2.5">
                {["Stability", "Flexibility", "Long-Term Growth"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-white text-[12px] font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE FINANCING SOLUTIONS — interactive vertical tabs ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
              Financing Solutions
            </span>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Comprehensive Financing Solutions for the Medical Sector
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Healthcare organizations operate within complex financial environments, requiring disciplined and scalable
              capital structures to support patient care, regulatory compliance, and operational continuity across
              multi-facility networks.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* Tab list */}
            <FadeUp className="lg:w-[34%] flex flex-col gap-3">
              {financingSolutions.map((sol, i) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                    activeTab === i
                      ? "border-primary/25 bg-white shadow-md"
                      : "border-transparent bg-white/50 hover:bg-white"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      activeTab === i ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                      {sol.icon}
                    </span>
                  </div>
                  <p
                    className={`text-[14px] font-semibold leading-snug pt-1 transition-colors duration-300 ${
                      activeTab === i ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {sol.title}
                  </p>
                </button>
              ))}
            </FadeUp>

            {/* Content panel */}
            <FadeUp delay={80} className="lg:w-[66%]">
              <div className="bg-white rounded-2xl border border-border-light p-8 xl:p-10 h-full flex flex-col gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                    {active.icon}
                  </span>
                </div>
                <h3 className="text-secondary 2xl:text-[22px] text-[18px] font-bold leading-snug">
                  {active.title}
                </h3>
                <p className="text-body-gray text-sm leading-relaxed">{active.description}</p>
                <div className="flex gap-3 bg-primary/[0.04] border border-primary/10 rounded-xl px-4 py-3.5">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 16 }}>
                    info
                  </span>
                  <p className="text-body-gray text-[13px] leading-relaxed">{active.note}</p>
                </div>
                <div>
                  <p className="text-secondary text-[11px] font-bold uppercase tracking-widest mb-3">
                    {active.useCasesTitle}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {active.useCases.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span
                          className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                          style={{ fontSize: 15 }}
                        >
                          check_circle
                        </span>
                        <span className="text-body-gray text-[13px] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {active.footnote && (
                  <p className="text-body-gray/60 text-[12px] italic leading-relaxed">{active.footnote}</p>
                )}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold hover:gap-2.5 transition-all duration-200 w-fit mt-auto"
                >
                  Learn More
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      <CTABanner
        title="Tap into Receivables Financing for Healthcare Operations"
        buttonText="Discuss a Financing Structure"
        bgImage="/assets/images/cta-bg-alt3.jpg"
      />

      {/* ── KEY OPERATING SEGMENTS — swiper with tag-pill characteristics ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
              <div>
                <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">
                  Industry Segments
                </span>
                <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight max-w-xl">
                  Key Operating Segments in the Medical Industry
                </h2>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  id="hc-seg-prev"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                    arrow_back
                  </span>
                </button>
                <button
                  id="hc-seg-next"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <div className="overflow-hidden pb-3 -mb-3">
              <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: "#hc-seg-prev", nextEl: "#hc-seg-next" }}
                spaceBetween={16}
                slidesPerView={1.1}
                breakpoints={{
                  480: { slidesPerView: 1.3, spaceBetween: 16 },
                  640: { slidesPerView: 1.7, spaceBetween: 20 },
                  900: { slidesPerView: 2.2, spaceBetween: 20 },
                  1200: { slidesPerView: 3, spaceBetween: 24 },
                }}
                style={{ paddingBottom: "8px" }}
                className="[&_.swiper-wrapper]:items-stretch"
              >
                {operatingSegments.map((seg) => (
                  <SwiperSlide key={seg.title} className="!h-auto">
                    <div className="group flex flex-col bg-white border border-border-light rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full overflow-hidden">
                      <div className="flex items-center gap-4 p-6 pb-4 border-b border-border-light">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                            {seg.icon}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                          {seg.title}
                        </h3>
                      </div>
                      <div className="px-6 py-5 flex flex-col gap-4 flex-1">
                        <p className="text-body-gray text-[13px] leading-relaxed">{seg.description}</p>
                        <div className="mt-auto pt-4 border-t border-border-light">
                          <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-3">
                            Characteristics
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {seg.characteristics.map((c) => (
                              <span
                                key={c}
                                className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/[0.06] text-secondary/80 text-[11px] font-medium border border-primary/10"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINANCING SIZE & STRUCTURE — dark section ── */}
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
              Healthcare Industry Financing Size and Structure
            </h2>
            <p className="text-white/50 md:text-base text-sm mt-4 leading-relaxed">
              Financing solutions are structured for middle market healthcare companies operating within clearly defined
              capital parameters and institutional frameworks.
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
              Each facility is designed based on receivables quality, reimbursement cycles, asset base, regulatory
              environment, and overall operational and growth objectives.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STRATEGIC BENEFITS — 2-col open feature grid ── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
            {/* Left sticky heading */}
            <FadeUp className="lg:w-[36%] lg:sticky lg:top-28 flex flex-col gap-5">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Key Benefits
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
                Strategic Benefits of Financing for Healthcare Providers
              </h2>
              <div className="w-14 h-1 rounded-full bg-primary" />
              <p className="text-body-gray text-sm leading-relaxed mt-2">
                Structured capital solutions support healthcare providers with the liquidity, flexibility, and
                scalability required to manage complex operations while maintaining stability across reimbursement
                cycles and service delivery models.
              </p>
            </FadeUp>

            {/* Right: benefits list */}
            <div className="lg:w-[64%] flex flex-col divide-y divide-border-light">
              {strategicBenefits.map((benefit, i) => (
                <FadeUp key={benefit.title} delay={i * 55}>
                  <div className="group flex items-start gap-5 py-7 hover:pl-1 transition-all duration-300">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-border-light text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 mt-0.5">
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        {benefit.icon}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[16px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-body-gray text-[13px] leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EPOCH — sticky left + scrolling right ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">

            {/* Left sticky: label + heading + paragraph + image */}
            <FadeUp className="lg:w-[40%] lg:sticky lg:top-28 flex flex-col gap-5 shrink-0">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-widest">
                Our Commitment
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight">
                Reasons to Partner with EPOCH Financial for Healthcare Capital Solutions
              </h2>
              <div className="w-14 h-1 rounded-full bg-primary" />
              <p className="text-body-gray text-sm leading-relaxed">
                Structured and scalable capital solutions are provided to middle market healthcare operators across
                complex care delivery models and multi-asset environments.
              </p>

            </FadeUp>

            {/* Right: why epoch items + CTA */}
            <div className="lg:w-[60%] flex flex-col">
              <div className="flex flex-col divide-y divide-border-light">
                {whyEpoch.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 60}>
                    <div className="group flex items-start gap-5 py-7 hover:pl-1 transition-all duration-300">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg-alt border border-border-light text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 mt-0.5">
                        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-[16px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-body-gray text-[13px] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={400} className="mt-8">
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
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        title={"Capital Solutions Designed for\nHealthcare Organizations"}
        description="Strategic capital solutions are designed to support healthcare organizations in managing reimbursement cycles, operational costs, and growth initiatives. Structured approaches align capital with receivables and cash flow, enabling stability across day-to-day operations while supporting expansion, infrastructure investment, and long-term service delivery objectives."
        buttonText="Contact Our Team"
        bgImage="/assets/images/nashville-healthcare-cta.jpg"
      />

      {/* ── FAQ ── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
