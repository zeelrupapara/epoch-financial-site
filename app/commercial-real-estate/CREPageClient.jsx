"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";

const coreSolutions = [
  {
    id: "bridge",
    icon: "swap_horiz",
    label: "Bridge Financing",
    title: "Bridge Financing",
    description: [
      "Bridge financing supports transitional and event-driven real estate transactions including acquisitions, lease-up strategies, recapitalizations, and refinancing events.",
      "Facilities are secured by commercial real estate assets and underwritten based on current asset performance, forward net operating income projections, and sponsor execution capability.",
      "Structured bridge capital provides certainty during periods when conventional lenders may delay or decline financing due to transitional asset characteristics.",
    ],
    useCasesTitle: "Typical use cases include:",
    useCases: ["Acquisition financing", "Maturity refinancing", "Lease-up stabilization", "Repositioning capital", "Recapitalization transactions"],
    effectiveTitle: "This solution is particularly effective where:",
    effectiveItems: ["Permanent financing is pending stabilization", "A defined value-creation timeline exists", "Sponsors require expedited execution"],
  },
  {
    id: "acquisition",
    icon: "real_estate_agent",
    label: "Acquisition Financing",
    title: "Acquisition Financing",
    description: [
      "Acquisition financing supports sponsors acquiring stabilized or transitional commercial real estate assets. Facilities are structured based on asset-level performance, market conditions, and sponsor equity commitment.",
      "Underwriting incorporates in-place lease income, tenant credit quality, market supply-demand dynamics, and projected operating performance.",
      "Acquisition financing structures provide sponsors with flexible leverage aligned with asset fundamentals and defined investment timelines.",
    ],
    useCasesTitle: "Common acquisition financing scenarios include:",
    useCases: ["Office building acquisitions", "Multifamily apartment community purchases", "Industrial logistics facility acquisitions", "Retail property investments", "Hospitality asset acquisitions"],
  },
  {
    id: "transitional",
    icon: "autorenew",
    label: "Transitional Asset",
    title: "Transitional Asset Financing",
    description: [
      "Many commercial real estate investments involve assets undergoing operational improvement or repositioning prior to stabilization. Transitional asset financing supports sponsors executing value creation strategies across institutional property types.",
      "Facilities are structured around projected stabilization milestones, forward net operating income growth, and clearly defined exit strategies.",
      "This approach allows sponsors to implement operational improvements while maintaining access to structured capital.",
    ],
    useCasesTitle: "Typical scenarios include:",
    useCases: ["Lease-up of newly delivered properties", "Renovation and repositioning strategies", "Tenant reconfiguration programs", "Redevelopment of underperforming assets", "Stabilization prior to permanent financing"],
  },
  {
    id: "portfolio",
    icon: "account_balance_wallet",
    label: "Portfolio Recapitalization",
    title: "Portfolio Recapitalization Financing",
    description: [
      "Portfolio recapitalization financing supports real estate sponsors seeking to optimize capital structures across multi-asset portfolios.",
      "Portfolio-level financing evaluates combined asset performance, tenant diversification, geographic exposure, and sponsor operational capability.",
      "This structure enables sponsors to unlock capital while maintaining long-term ownership positions across institutional real estate assets.",
    ],
    useCasesTitle: "Transactions may involve:",
    useCases: ["Refinancing existing portfolio debt", "Releasing trapped equity from stabilized assets", "Realigning ownership structures", "Funding expansion initiatives", "Supporting sponsor liquidity events"],
  },
];

const assetTypes = [
  {
    name: "Office",
    icon: "business",
    imageLeft: true,
    image: "/assets/images/cre-office-new.jpg",
    description: "Office properties include buildings leased to corporate tenants for professional, administrative, and business operations.",
    pointsIntro: "Typical characteristics include:",
    points: ["Class A or Class B office buildings", "Central business district locations or major suburban markets", "Diversified tenant rosters or credit tenants", "Long-term lease structures"],
    closingText: "Financing commonly supports acquisitions, refinancing transactions, tenant improvement programs, and lease-up repositioning strategies.",
  },
  {
    name: "Multifamily",
    icon: "apartment",
    imageLeft: false,
    image: "/assets/images/cre-multifamily-new.jpg",
    description: "Multifamily properties consist of professionally managed apartment communities with stabilized occupancy and consistent rental income.",
    pointsIntro: "Typical institutional multifamily characteristics include:",
    points: ["Apartment communities with 100 or more units", "Garden-style, mid-rise, or high-rise developments", "Strong rent collections and stable occupancy", "Institutional ownership or professional management"],
    closingText: "Financing is frequently used for acquisitions, refinancing, value-add renovation strategies, and portfolio recapitalizations.",
  },
  {
    name: "Industrial",
    icon: "warehouse",
    imageLeft: true,
    image: "/assets/images/cre-industrial-new.jpg",
    description: "Industrial real estate includes warehouse, logistics, and distribution facilities supporting modern supply chains and e-commerce fulfillment networks.",
    pointsIntro: "Common property formats include:",
    points: ["Distribution centers", "Flex industrial properties", "Last-mile logistics facilities", "Light manufacturing or assembly space"],
    closingText: "Industrial properties are currently among the most financeable asset classes due to strong tenant demand and long-term lease structures.",
  },
  {
    name: "Retail",
    icon: "storefront",
    imageLeft: false,
    image: "/assets/images/cre-retail-new.jpg",
    description: "Institutional retail properties typically consist of well-located retail centers anchored by national or strong regional tenants.",
    pointsIntro: "Typical formats include:",
    points: ["Grocery-anchored shopping centers", "Lifestyle retail centers", "Power centers", "Net-leased retail portfolios"],
    closingText: "Lenders generally favor properties with essential retail tenants, high traffic locations, and strong tenant credit profiles.",
  },
  {
    name: "Hospitality",
    icon: "hotel",
    imageLeft: true,
    image: "/assets/images/cre-hospitality-new.jpg",
    description: "Hospitality assets include branded hotels with established operating history and professional management.",
    pointsIntro: "Typical hospitality property types include:",
    points: ["Select-service hotels", "Limited-service hotels", "Full-service branded hotels"],
    closingText: "Financing considerations include brand affiliation, revenue per available room performance, location demand drivers, and operating history.",
  },
];

const alternativeAssets = [
  {
    id: "self-storage",
    label: "Self Storage",
    title: "Self Storage",
    description: "Self-storage properties benefit from strong operating margins, stable occupancy patterns, and growing institutional ownership.",
    description2: "These assets are often financed through bridge or permanent debt facilities depending on stabilization status.",
    features: [],
  },
  {
    id: "student",
    label: "Student Housing",
    title: "Student Housing",
    description: "Student housing consists of purpose-built residential communities located near major universities and educational institutions.",
    description2: "These properties typically demonstrate strong demand and predictable occupancy patterns when supported by experienced operators.",
    features: [],
  },
  {
    id: "medical",
    label: "Medical Office",
    title: "Medical Office",
    description: "Medical office buildings are healthcare facilities leased to medical providers, hospital systems, and specialty clinics.",
    description2: "These assets are attractive to lenders due to long-term leases, stable tenant demand, and the specialized nature of medical occupancy.",
    features: [],
  },
  {
    id: "senior",
    label: "Senior Housing",
    title: "Senior Housing and Assisted Living",
    description: "Senior housing properties provide residential and healthcare-related services for aging populations.",
    description2: "Financing requires experienced operators and stable operating performance.",
    featuresIntro: "Typical formats include:",
    features: ["Independent living communities", "Assisted living facilities", "Memory care centers"],
  },
  {
    id: "data",
    label: "Data Centers",
    title: "Data Centers",
    description: "Data centers are specialized facilities supporting cloud computing infrastructure and digital services.",
    description2: "Key characteristics include high power requirements, long-term enterprise tenants, and significant capital investment.",
    description3: "Institutional demand for data infrastructure has increased significantly in recent years.",
    features: [],
  },
];

const financingRange = [
  { label: "Loan Size", value: "Up To $100M+", icon: "payments" },
  { label: "Annual Revenue", value: "$15M+", icon: "trending_up" },
  { label: "Focus", value: "Middle Market", icon: "track_changes" },
];

const strategicAdvantages = [
  {
    icon: "account_balance",
    title: "Advisor-Led Execution",
    description: "An advisor-led structure eliminates syndication risk and third-party capital dependencies. Evaluation, structuring, and facilitation operate within a single advisory framework, allowing transactions to progress efficiently from initial review through closing.",
  },
  {
    icon: "speed",
    title: "Responsive Credit Governance",
    description: "Efficient access to internal credit decision-makers allows transactions to move forward without prolonged approval timelines. This structure enables timely feedback and structural adjustments during underwriting.",
  },
  {
    icon: "tune",
    title: "Customized Structural Design",
    description: "Commercial real estate assets vary significantly in terms of tenant composition, lease duration, market exposure, and operating performance.",
    points: ["Asset-level risk profile", "Sponsor equity commitment", "Capital stack composition", "Defined exit strategy"],
    pointsIntro: "Financing structures are designed to reflect:",
    closingText: "This tailored approach ensures that leverage levels and covenant structures align with projected asset performance.",
  },
  {
    icon: "shield",
    title: "Asset-Level Underwriting Discipline",
    description: "Institutional commercial real estate underwriting extends beyond simple valuation metrics.",
    points: ["Debt yield coverage", "Lease rollover concentration", "Tenant credit exposure", "Market supply and demand conditions", "Forward net operating income projections"],
    pointsIntro: "Detailed analysis typically evaluates:",
    closingText: "This comprehensive evaluation supports resilient credit structures across varying market conditions.",
  },
  {
    icon: "schedule",
    title: "Defined Execution Timelines",
    description: "Acquisition and refinancing transactions often require predictable closing schedules. Structured diligence frameworks with defined documentation milestones improve certainty of execution and reduce transaction risk.",
  },
];

const transactionStructures = [
  {
    icon: "real_estate_agent",
    title: "Acquisition Financing",
    description: "Capital structures supporting acquisition of stabilized or transitional properties including office, industrial, multifamily, retail, and mixed-use assets.",
  },
  {
    icon: "account_balance_wallet",
    title: "Portfolio Recapitalizations",
    description: "Financing solutions designed to optimize leverage, release equity, or realign capital structures across multi-asset portfolios.",
  },
  {
    icon: "autorenew",
    title: "Repositioning and Value-Add Strategies",
    description: "Bridge financing facilities supporting lease-up programs, property renovations, redevelopment initiatives, and operational improvements.",
  },
  {
    icon: "trending_up",
    title: "Stabilization of Transitional Assets",
    description: "Liquidity solutions for assets approaching stabilization or transitioning toward permanent financing eligibility.",
  },
  {
    icon: "swap_horiz",
    title: "Sponsor Liquidity and Capital Events",
    description: "Facilities designed to support partial sponsor liquidity, equity recapitalizations, and structured ownership transitions.",
  },
];

const whyPartner = [
  { icon: "shield", title: "Institutional Approach to Private Credit", description: "Commercial real estate investments are evaluated using a disciplined private credit framework focused on asset quality, debt yield coverage, loan-to-value discipline, and clearly defined exit strategies." },
  { icon: "tune", title: "Middle Market Specialization", description: "Middle market companies frequently operate between traditional bank lending and large institutional capital markets. Financing solutions are designed specifically for this segment." },
  { icon: "architecture", title: "Customized Structuring Capability", description: "Each facility is structured to reflect property characteristics, investment timelines, and capital stack positioning." },
  { icon: "speed", title: "Execution Certainty", description: "Real estate transactions are time sensitive. Streamlined underwriting and credit governance improve predictability of closing timelines." },
  { icon: "handshake", title: "Long-Term Capital Relationships", description: "Real estate sponsors benefit from financing relationships that extend beyond individual transactions. Capital partnerships support portfolio growth, refinancing strategies, and future investment opportunities." },
];

const faqs = {
  intro: "Everything you need to know about our commercial real estate financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    { question: "How is leverage determined in middle market commercial real estate transactions?", answer: "Leverage levels are determined based on asset quality, in-place and projected net operating income, debt yield coverage, and market liquidity conditions. Loan-to-value metrics are evaluated alongside debt service coverage and exit strategy visibility." },
    { question: "How are transitional assets underwritten?", answer: "Underwriting incorporates both current property performance and forward projections. Lease-up assumptions, tenant rollover schedules, capital improvement requirements, and market absorption trends are analyzed to determine stabilization feasibility." },
    { question: "How is capital structured across the real estate capital stack?", answer: "Middle market real estate transactions may include layered capital structures such as senior secured facilities, mezzanine capital, and working capital components. Structural subordination and collateral priority are evaluated to align risk allocation with expected asset performance." },
    { question: "What distinguishes advisory-led execution in middle market real estate transactions?", answer: "Advisory-led credit platforms operate with streamlined underwriting frameworks and defined decision-making authority. This allows customized structuring and faster execution in complex or time-sensitive real estate transactions." },
  ],
};

export default function CREPageClient() {
  const [activeTab, setActiveTab] = useState("bridge");
  const [activeAltTab, setActiveAltTab] = useState("self-storage");

  const activeSolution = coreSolutions.find((s) => s.id === activeTab);
  const activeAlt = alternativeAssets.find((a) => a.id === activeAltTab);

  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/cre-hero.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>location_city</span>
                COMMERCIAL REAL ESTATE
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Commercial Real Estate Loans
              </h1>
              <h2 className="text-primary/90 xl:text-xl lg:text-lg text-base font-semibold -mt-2">
                Structured Private Credit Solutions for Middle Market Real Estate Platforms
              </h2>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Structured commercial real estate loans designed for middle market sponsors, real estate investment
                platforms, and institutional property investors. Financing solutions support acquisitions, refinancing,
                recapitalizations, and transitional asset strategies across established commercial real estate sectors.
              </p>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Facilities are structured around asset fundamentals, projected net operating income performance, sponsor
                experience, and clearly defined exit strategies. Each transaction is evaluated using disciplined private
                credit underwriting aligned with institutional real estate lending standards.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPITAL SOLUTIONS - Tabs */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Core Capital Solutions for Commercial Real Estate
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH structures commercial real estate financing through three core capital solutions designed to align
              with asset performance, sponsor objectives, and transaction structure.
            </p>
          </FadeUp>

          {/* Tab Buttons */}
          <div className="flex flex-wrap border-b border-border-light mb-0">
            {coreSolutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-5 py-4 text-[14px] font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === s.id
                    ? "border-primary text-primary"
                    : "border-transparent text-body-gray hover:text-secondary"
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeSolution && (
            <div className="bg-bg-alt rounded-b-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
                <div className="lg:w-[45%] flex flex-col gap-4">
                  <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-secondary">{activeSolution.title}</h3>
                  {activeSolution.description.map((p, i) => (
                    <p key={i} className="text-body-gray md:text-base text-sm leading-relaxed">{p}</p>
                  ))}
                  <Link href="#" className="inline-flex items-center gap-1.5 text-primary font-semibold text-[14px] hover:gap-2.5 transition-all mt-2">
                    Learn More
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                </div>
                <div className="lg:w-[55%] flex flex-col gap-6">
                  <div className="bg-white rounded-xl p-6 border border-border-light">
                    <p className="text-secondary text-sm font-semibold mb-3">{activeSolution.useCasesTitle}</p>
                    <ul className="flex flex-col gap-2.5">
                      {activeSolution.useCases.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>check_circle</span>
                          <span className="text-body-gray text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {activeSolution.effectiveItems && (
                    <div className="bg-white rounded-xl p-6 border border-border-light">
                      <p className="text-secondary text-sm font-semibold mb-3">{activeSolution.effectiveTitle}</p>
                      <ul className="flex flex-col gap-2.5">
                        {activeSolution.effectiveItems.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>check_circle</span>
                            <span className="text-body-gray text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ASSETS WE FINANCE */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Commercial Real Estate Assets We Finance
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Middle market commercial real estate financing is primarily directed toward established institutional
              property sectors with predictable cash flow characteristics, professional management structures, and
              scalable tenant demand.
            </p>
          </FadeUp>
          <div className="flex flex-col gap-12">
            {assetTypes.map((asset, i) => (
              <FadeUp key={asset.name} delay={i * 80}>
              <div
                className={`flex flex-col ${asset.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="lg:w-[45%] relative h-[260px] lg:h-[340px] w-full rounded-2xl overflow-hidden">
                  <img src={asset.image} alt={asset.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="lg:w-[55%] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>{asset.icon}</span>
                    <h3 className="2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-secondary">{asset.name}</h3>
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{asset.description}</p>
                  {asset.pointsIntro && (
                    <p className="text-secondary text-sm font-semibold">{asset.pointsIntro}</p>
                  )}
                  <ul className="flex flex-col gap-2">
                    {asset.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>check_circle</span>
                        <span className="text-body-gray text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  {asset.closingText && (
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{asset.closingText}</p>
                  )}
                </div>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATIVE ASSET CLASSES - Vertical Tabs */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Alternative Institutional Real Estate Asset Classes
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              In addition to traditional property sectors, several specialized asset classes have become increasingly
              financeable within institutional commercial real estate markets.
            </p>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tab buttons */}
            <div className="lg:w-[220px] shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {alternativeAssets.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActiveAltTab(a.id)}
                  className={`px-5 py-3 rounded-xl text-left text-[14px] font-semibold whitespace-nowrap transition-all ${
                    activeAltTab === a.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-bg-alt text-secondary hover:bg-primary/10"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
            {/* Tab content */}
            {activeAlt && (
              <div className="flex-1 bg-bg-alt rounded-2xl p-8">
                <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-secondary mb-4">{activeAlt.title}</h3>
                <p className="text-body-gray md:text-base text-sm leading-relaxed mb-3">{activeAlt.description}</p>
                {activeAlt.description2 && (
                  <p className="text-body-gray md:text-base text-sm leading-relaxed mb-5">{activeAlt.description2}</p>
                )}
                {activeAlt.description3 && (
                  <p className="text-body-gray md:text-base text-sm leading-relaxed mb-5">{activeAlt.description3}</p>
                )}
                {activeAlt.features.length > 0 && (
                  <>
                    {activeAlt.featuresIntro && (
                      <p className="text-secondary text-sm font-semibold mb-3">{activeAlt.featuresIntro}</p>
                    )}
                    <ul className="flex flex-col gap-3">
                      {activeAlt.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>check_circle</span>
                          <span className="text-body-gray text-[15px]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        title="Secure Asset-Based Lending for Middle Market Commercial Real Estate Transactions"
        buttonText="Get Consultation Now"
      />

      {/* FINANCING RANGE */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Middle Market Commercial Real Estate Financing Range
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Middle market commercial real estate financing typically supports institutional transactions within defined capital parameters.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financingRange.map((item, i) => (
              <FadeUp key={item.label} delay={i * 80}>
                <div className="flex flex-col items-center h-full gap-3 p-6 rounded-2xl border border-border-light bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.label}</h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <p className="text-body-gray md:text-base text-sm leading-relaxed text-center mt-8 max-w-3xl mx-auto">
              Financing structures are tailored to asset-level performance, sponsor experience, and defined investment timelines.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Strategic Advantages of Commercial Real Estate Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Commercial real estate transactions require disciplined underwriting, structural flexibility, and reliable execution timelines.
            </p>
          </FadeUp>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
            <div className="flex flex-col gap-8">
              {strategicAdvantages.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="relative z-10 shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-primary/10">
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{item.icon}</span>
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-2">{item.title}</h3>
                      <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.description}</p>
                      {item.pointsIntro && (
                        <p className="text-secondary text-sm font-semibold mt-3">{item.pointsIntro}</p>
                      )}
                      {item.points && (
                        <ul className="mt-2 flex flex-col gap-2">
                          {item.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2.5">
                              <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 16 }}>check</span>
                              <span className="text-body-gray text-sm">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.closingText && (
                        <p className="text-body-gray md:text-base text-sm leading-relaxed mt-3">{item.closingText}</p>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPRESENTATIVE TRANSACTION STRUCTURES */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Representative Commercial Real Estate Transaction Structures
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Commercial real estate financing solutions are structured across a range of transaction types based on asset fundamentals and sponsor investment strategies.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transactionStructures.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="flex flex-col gap-3 p-6 rounded-2xl border border-border-light h-full bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.title}</h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Partner With EPOCH Financial for Structured Commercial Real Estate Capital?
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Middle market real estate platforms require structured capital solutions aligned with asset performance, sponsor strategy, and transaction timing.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="flex flex-col gap-3 p-6 rounded-2xl border border-border-light h-full bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.title}</h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        title="Partner With a Structured Credit Advisor"
        description="Commercial real estate transactions require disciplined leverage, flexible capital structures, and reliable execution."
        description2="EPOCH structures and facilitates credit solutions designed for middle market real estate sponsors pursuing acquisitions, refinancing strategies, and transitional asset investments."
        buttonText="Request a Quote"
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
