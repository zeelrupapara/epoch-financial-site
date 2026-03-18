"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

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
    useCasesTitle: "Common portfolio recapitalization objectives include:",
    useCases: ["Refinancing of maturing debt across portfolios", "Release of equity from stabilized assets", "Capital structure optimization", "Partial asset dispositions", "Repositioning capital deployment"],
  },
];

const assetTypes = [
  {
    name: "Office",
    icon: "business",
    imageLeft: true,
    image: "/assets/images/industry-business-services.jpg",
    description: "EPOCH finances office assets across primary and secondary markets. Underwriting focuses on tenant credit quality, lease term durability, and market fundamentals supporting long-term occupancy stability.",
    points: ["Single-tenant and multi-tenant office buildings", "Class A and Class B urban and suburban assets", "Medical office and professional suites"],
  },
  {
    name: "Multifamily",
    icon: "apartment",
    imageLeft: false,
    image: "/assets/images/industry-distribution.jpg",
    description: "Multifamily financing supports acquisition and stabilization of apartment communities across institutional markets. Underwriting emphasizes occupancy levels, rental income trends, and market supply-demand dynamics.",
    points: ["Garden-style and mid-rise apartment communities", "Urban core and suburban apartment assets", "Workforce and market-rate housing"],
  },
  {
    name: "Industrial",
    icon: "warehouse",
    imageLeft: true,
    image: "/assets/images/industry-manufacturing.jpg",
    description: "Industrial real estate financing supports acquisition of warehouse, distribution, and logistics facilities. Underwriting evaluates tenant lease structures, location fundamentals, and asset functionality within supply chain ecosystems.",
    points: ["Warehouse and distribution centers", "Last-mile logistics facilities", "Flex industrial properties"],
  },
  {
    name: "Retail",
    icon: "storefront",
    imageLeft: false,
    image: "/assets/images/industry-healthcare.jpg",
    description: "Retail financing supports necessity-based and service-oriented retail assets with durable tenant profiles. Underwriting focuses on tenant credit quality, lease structure, and in-trade area demand dynamics.",
    points: ["Grocery-anchored neighborhood centers", "Strip retail and service retail centers", "Single-tenant net lease properties"],
  },
  {
    name: "Hospitality",
    icon: "hotel",
    imageLeft: true,
    image: "/assets/images/industry-technology.jpg",
    description: "Hospitality financing supports acquisition and repositioning of select-service and extended-stay hotel assets. Underwriting evaluates brand affiliation, RevPAR performance, market positioning, and operational management quality.",
    points: ["Select-service branded hotels", "Extended-stay hotel assets", "Independent boutique hospitality properties"],
  },
];

const alternativeAssets = [
  {
    id: "self-storage",
    label: "Self Storage",
    title: "Self Storage Financing",
    description: "Self storage assets benefit from low operational costs, strong demand fundamentals, and resilient performance across market cycles. EPOCH provides financing for stabilized and transitional self storage facilities.",
    features: ["Stabilized and value-add self storage assets", "Climate-controlled and standard storage facilities", "Multi-location portfolio financing available"],
  },
  {
    id: "student",
    label: "Student Housing",
    title: "Student Housing Financing",
    description: "Student housing assets near major universities demonstrate stable demand and predictable leasing cycles. EPOCH finances purpose-built student housing projects aligned with institutional university markets.",
    features: ["Purpose-built student housing communities", "On and off-campus residential assets", "University-adjacent market positioning"],
  },
  {
    id: "medical",
    label: "Medical Office",
    title: "Medical Office Financing",
    description: "Medical office assets supported by health system credit and institutional tenants offer durable cash flow profiles. EPOCH finances on-campus and community medical office facilities.",
    features: ["Health system and physician group tenancies", "On-campus hospital-adjacent facilities", "Specialty care and outpatient medical buildings"],
  },
  {
    id: "senior",
    label: "Senior Housing",
    title: "Senior Housing Financing",
    description: "Senior housing assets benefit from demographic demand drivers and essential care service delivery. EPOCH provides financing for independent living, assisted living, and memory care communities.",
    features: ["Independent living communities", "Assisted living and memory care facilities", "Continuing care retirement communities"],
  },
  {
    id: "data",
    label: "Data Centers",
    title: "Data Center Financing",
    description: "Data center assets serve critical digital infrastructure demand with long-term lease commitments from institutional tenants. EPOCH provides financing for stabilized data center facilities.",
    features: ["Stabilized colocation data centers", "Enterprise data center assets", "Edge computing facility financing"],
  },
];

const whyPartner = [
  { icon: "shield", title: "Structured Private Credit Approach", description: "Each facility is structured around asset fundamentals, NOI performance, sponsor experience, and clearly defined exit strategies." },
  { icon: "tune", title: "Flexible Across Asset Types", description: "We finance primary and alternative commercial real estate asset classes using disciplined private credit underwriting." },
  { icon: "speed", title: "Execution Certainty", description: "Our underwriting process delivers reliable execution timelines for acquisitions, refinancing, and transitional transactions." },
  { icon: "account_balance", title: "Institutional Underwriting Standards", description: "Each transaction is evaluated using institutional real estate lending standards aligned with asset-level and portfolio-level fundamentals." },
  { icon: "handshake", title: "Sponsor-Aligned Capital", description: "We structure facilities aligned with sponsor objectives, investment timelines, and value-creation strategies." },
];

const faqs = {
  intro: "Everything you need to know about our commercial real estate financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    { question: "What types of commercial real estate assets does EPOCH finance?", answer: "EPOCH finances a broad range of commercial real estate asset types including office, multifamily, industrial, retail, hospitality, and alternative asset classes such as self storage, student housing, medical office, senior housing, and data centers." },
    { question: "What loan sizes are available?", answer: "Loan sizes vary based on asset type, market, and transaction structure. We work with middle market sponsors and institutional investors across a range of deal sizes. Contact us to discuss your specific financing requirements." },
    { question: "Does EPOCH finance transitional or value-add assets?", answer: "Yes. EPOCH specifically structures financing for transitional and value-add commercial real estate assets including lease-up strategies, repositioning programs, and renovation projects where conventional lenders may decline or delay financing." },
    { question: "What is the typical loan term for bridge financing?", answer: "Bridge loan terms typically range from 12 to 36 months, structured to align with the asset's stabilization timeline, value-creation strategy, and defined exit or refinancing pathway." },
    { question: "How does EPOCH evaluate commercial real estate transactions?", answer: "Each transaction is evaluated using institutional credit underwriting focused on asset fundamentals, projected NOI performance, sponsor experience, equity commitment, and clearly defined exit strategies. Our process aligns with institutional real estate lending standards." },
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
                'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1h6lRhphjbGJiwybD2fEB-hONq7HT4qJ7aBQJMNnVHIaif3xJU0-mldzFw2Cuu4DMkhr1KGVeZxk3De27Mbj0E-LTVFD-TnlQeMP9rY28a9jY-6BcKtumOPSFdSPBwJck28arOXreLimaqHsd5AEu7pY9GyUJsTAC-28Md2LWW8zgJk4lOBVziZPJdDpFIqS8UloUKkv9_VGg7ruivY9nMuT4w4QM9Ber0ejWgyp_5NINhWskTOVdzp5uQWkv6EZMSYtjzemm6ws")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
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
                href="#"
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
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Core Capital Solutions for Commercial Real Estate
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH structures commercial real estate financing through four core capital solutions designed to align
              with asset performance, sponsor objectives, and transaction structure.
            </p>
          </div>

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
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Primary Asset Types We Finance
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH provides structured financing across primary commercial real estate asset classes with established
              institutional demand and durable income performance.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {assetTypes.map((asset) => (
              <div
                key={asset.name}
                className={`flex flex-col ${asset.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="lg:w-[45%] relative h-[260px] lg:h-[340px] w-full rounded-2xl overflow-hidden">
                  <Image src={asset.image} alt={asset.name} fill className="object-cover" />
                </div>
                <div className="lg:w-[55%] flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>{asset.icon}</span>
                    <h3 className="2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-secondary">{asset.name}</h3>
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{asset.description}</p>
                  <ul className="flex flex-col gap-2">
                    {asset.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>check_circle</span>
                        <span className="text-body-gray text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATIVE ASSET CLASSES - Vertical Tabs */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Alternative Asset Classes
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              EPOCH provides structured financing for alternative commercial real estate asset classes with established
              institutional demand profiles and durable operating fundamentals.
            </p>
          </div>
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
                <p className="text-body-gray md:text-base text-sm leading-relaxed mb-5">{activeAlt.description}</p>
                <ul className="flex flex-col gap-3">
                  {activeAlt.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>check_circle</span>
                      <span className="text-body-gray text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        title="Explore Commercial Real Estate Financing"
        description="EPOCH structures commercial real estate loans across primary and alternative asset classes for middle market sponsors and institutional investors."
        buttonText="Discuss Your Transaction"
      />

      {/* WHY PARTNER */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Partner with EPOCH Financial<br />for Commercial Real Estate?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-border-light bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
                </div>
                <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.title}</h3>
                <p className="text-body-gray md:text-base text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        title="Ready to Discuss Your Real Estate Financing?"
        description="Our team evaluates commercial real estate transactions using institutional underwriting standards. Submit your transaction for a confidential review."
        buttonText="Submit Your Transaction"
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
