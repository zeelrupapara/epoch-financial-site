import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FadeUp from "@/components/FadeUp";
import { seoMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = seoMetadata("/");

const focusPlatformCards = [
  {
    icon: "receipt_long",
    title: "Accounts Receivable Financing",
    image: "/assets/images/ar-hero.jpg",
  },
  {
    icon: "account_balance",
    title: "AR-Anchored Asset-Based Lending",
    image: "/assets/images/abl-hero.jpg",
  },
  {
    icon: "auto_awesome",
    title: "Strategic Capital",
    image: "/assets/images/businesscreditsolution.jfif",
  },
  {
    icon: "trending_up",
    title: "Selective Revenue-Aligned Bridge Capital",
    image: "/assets/images/bridge-hero.jpg",
  },
];

const solutionsCards = [
  {
    icon: "description",
    title: "Accounts Receivable Financing",
    image: "/assets/images/solution-ar-new.jpg",
    paragraphs: [
      "We structure and facilitate senior secured revolving credit facilities supported by eligible receivables. These facilities form a key part of broader structured credit solutions, where capital availability is driven by asset quality.",
      "Borrowing capacity is determined through disciplined analysis of receivable quality, concentration levels, and historical collection performance. This approach ensures that capital availability remains aligned with measurable asset strength.",
      "Such solutions provide reliable liquidity solutions for middle market companies, supporting working capital needs while maintaining operational control.",
    ],
    href: "/financial-services/accounts-receivable-financing",
  },
  {
    icon: "inventory",
    title: "AR-Anchored Asset-Based Lending",
    image: "/assets/images/solution-abl-new.jpg",
    paragraphs: [
      "Asset-based lending facilities are structured around defined borrowing base frameworks, with receivables serving as the primary collateral component.",
      "These structures are designed to scale alongside asset growth while maintaining disciplined credit parameters. Where appropriate, additional collateral support may be incorporated to strengthen structural integrity.",
      "As part of broader capital solutions for operating companies, AR-anchored lending supports consistent liquidity access while reinforcing balance sheet flexibility.",
    ],
    href: "/financial-services/asset-based-lending",
  },
  {
    icon: "auto_awesome",
    title: "Strategic Capital",
    image: "/assets/images/businesscreditsolution.jfif",
    paragraphs: [
      "We structure and facilitate strategic capital solutions for middle market companies facing acquisition, recapitalization, refinancing, ownership transition, or special situation financing needs.",
      "Transactions typically start at $20 million and may exceed $200 million, with structures that may combine senior secured credit, asset-based lending, unitranche financing, subordinated debt, or bridge capital.",
      "Our role is to evaluate the company, collateral base, cash flow profile, transaction objective, and repayment visibility, then structure a lender-ready financing package aligned with institutional credit standards.",
    ],
    href: "/financial-services/strategic-capital",
  },
  {
    icon: "payments",
    title: "Revenue-Aligned Bridge Capital",
    image: "/assets/images/solution-bridge-new.jpg",
    paragraphs: [
      "We structure and facilitate selective bridge capital solutions to address defined transitional liquidity needs. These facilities are aligned with forward revenue visibility and clearly identifiable repayment sources.",
      "Bridge capital solutions are typically structured for situations involving refinancing transitions, operational repositioning, or near-term liquidity events.",
      "These solutions are delivered within a broader framework of structured capital solutions, ensuring alignment between capital deployment and business objectives.",
    ],
    href: "/financial-services/bridge-financing",
  },
];

const recentEngagements = [
  { amount: "$175M", industry: "Heavy Equipment Rental and Construction Services", type: "ABL" },
  { amount: "$55M", industry: "Consumer Retail / E-commerce", type: "ABL" },
  { amount: "$50M", industry: "Foodservice Distribution and Wholesale Supply", type: "ABL" },
  { amount: "$25M", industry: "Clean Energy and Sustainable Aviation Fuel", type: "ABL" },
  { amount: "$22M", industry: "Construction and Heavy Industrial Services", type: "ABL" },
  { amount: "$20M", industry: "Environmental Services / CleanTech / Sustainability Consulting", type: "ABL" },
  { amount: "$17M", industry: "Transportation and Logistics", type: "Line of Credit" },
  { amount: "$15M", industry: "Food & Beverage / Agriculture Processing", type: "Line of Credit" },
  { amount: "$15M", industry: "Medical Devices and Healthcare Technology", type: "Equipment" },
  { amount: "$10M", industry: "Aerospace, Satellite Communications, and Telecommunications Technology", type: "ABL" },
  { amount: "$9M", industry: "Staffing and Recruiting", type: "Bridge Financing" },
  { amount: "$7M", industry: "Transportation and Logistics", type: "Line of Credit" },
];

const targetChecklist = [
  "Recurring business-to-business revenue",
  "Transparent financial reporting and receivable aging",
  "Defined cash conversion cycles",
  "Established operational infrastructure",
  "Professional financial management",
];

const industryFocusItems = [
  { icon: "precision_manufacturing", name: "Manufacturing", image: "/assets/images/industry-construction-new.jpg" },
  { icon: "local_shipping", name: "Distribution", image: "/assets/images/industry-distribution-new.jpg" },
  { icon: "inventory", name: "Logistics", image: "/assets/images/industry-distribution-new.jpg" },
  { icon: "groups", name: "Staffing", image: "/assets/images/industry-business-services-new.jpg" },
  { icon: "apartment", name: "Government Contracts", image: "/assets/images/industry-government-new.jpg" },
  { icon: "business_center", name: "Service Companies", image: "/assets/images/industry-business-services-new.jpg" },
  { icon: "local_hospital", name: "Medical", image: "/assets/images/industry-healthcare-new.jpg" },
  { icon: "construction", name: "Commercial Construction", image: "/assets/images/industry-construction-new.jpg" },
];

const approachCards = [
  {
    icon: "filter_alt",
    title: "Selectivity",
    description:
      "We evaluate opportunities where collateral quality, reporting transparency, and operational stability support well-structured capital solutions.",
  },
  {
    icon: "handshake",
    title: "Alignment",
    description:
      "We structure capital solutions that support business stability while maintaining appropriate structural integrity and risk discipline.",
  },
  {
    icon: "my_location",
    title: "Execution",
    description:
      "Our process is designed for clarity and efficiency, with defined diligence workflows, coordinated documentation, and consistent performance visibility.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd route="/" />
      {/* HERO — no animation, above the fold */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[380px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(11 35 65 / 72%), rgb(11 35 65 / 88%)), url("/assets/images/mainhero.png")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>account_balance</span>
                COMMERCIAL FINANCE ADVISORY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Senior Secured Working Capital Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                We structure and execute senior secured credit solutions for middle market companies. Our focus is disciplined financing anchored by accounts receivable, designed to support dependable liquidity access and long-term operating stability.
              </p>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                We operate within a defined private credit framework centered on collateral performance, structural integrity, and institutional underwriting standards. Solutions are structured to align capital availability with asset quality, enabling businesses to operate with confidence and continuity.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  Discuss a Financing Opportunity
                </Link>
                <Link
                  href="/about/our-approach"
                  className="rounded-full border-2 border-white/40 px-4 sm:px-7 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/60"
                >
                  View Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A COMMERCIAL FINANCE ADVISORY FIRM */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              A Commercial Finance Advisory Firm Focused on Structured Credit Solutions
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-3 leading-relaxed">
              Established 1999, EPOCH Financial is a commercial finance advisory firm dedicated to structured credit solutions for middle market companies. We structure and facilitate working capital solutions where accounts receivable represent a reliable and analyzable asset base.
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 font-medium">
              Our advisory practice is built on a clear strategic focus:
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPlatformCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 80}>
                <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border-light bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-semibold text-secondary">{card.title}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={300} className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We concentrate on a disciplined segment of private credit where collateral transparency, repayment visibility, and structural protections define risk management. This focused approach allows us to deliver consistent underwriting standards, clear credit structures, and dependable execution.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] mt-3 hover:underline"
            >
              Learn more
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CORE FINANCING SOLUTIONS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center mb-8 leading-tight">
              Core Financing Solutions
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 100}>
                <div className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-3">{card.title}</h3>
                  <div className="text-body-gray md:text-base text-sm leading-relaxed">
                    {card.paragraphs.map((p, i) => (
                      <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>
                    ))}
                  </div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-primary font-semibold text-[14px] mt-auto pt-5 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT FINANCING ENGAGEMENTS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3 text-center">Representative Transactions</p>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center mb-4 leading-tight">
              Recent Middle Market Financing Engagements
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-12">
              A representative view of recent middle market transactions facilitated by EPOCH Financial across asset-based lending, lines of credit, equipment, and bridge financing.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {recentEngagements.map((deal, i) => (
              <FadeUp key={i} delay={(i % 4) * 60}>
                <div className="group relative flex flex-col h-full rounded-2xl border border-border-light bg-bg-alt p-7 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider mb-5">
                    {deal.type}
                  </span>
                  <div className="text-secondary 2xl:text-[40px] lg:text-[34px] text-[30px] font-extrabold leading-none mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {deal.amount}
                  </div>
                  <p className="text-body-gray text-sm leading-relaxed mt-auto">
                    {deal.industry}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <p className="text-body-gray/70 text-xs md:text-sm text-center mt-10 max-w-3xl mx-auto italic">
            Transaction details are representative and shown without identifying borrower names. EPOCH Financial structures and facilitates senior secured credit solutions; transactions are funded by institutional lenders.
          </p>
        </div>
      </section>

      {/* TARGET COMPANIES */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px] flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <FadeUp className="flex flex-col gap-5 lg:w-[55%]">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Target Companies
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold -mt-2">
              Serving the Middle Market Businesses
            </p>
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We work with middle market companies that demonstrate operational discipline and consistent business performance, and structure and coordinate tailored credit solutions to support their growth.
            </p>
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We work with independent operators, management teams, private equity sponsors, and speciality finance platforms seeking structured corporate finance advisory support. Our focus is on businesses where asset quality and financial transparency support disciplined credit underwriting.
            </p>
          </FadeUp>
          <FadeUp delay={150} className="lg:w-[45%] w-full">
            <div className="rounded-2xl border border-border-light overflow-hidden">
              <div className="px-6 py-4" style={{ background: "linear-gradient(135deg, #11375F, #0DA2E7)" }}>
                <p className="text-white font-semibold md:text-base text-sm">Typical characteristics include:</p>
              </div>
              <ul className="flex flex-col divide-y divide-border-light bg-bg-alt">
                {targetChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 px-6 py-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>check</span>
                    </span>
                    <span className="text-secondary text-[14px] font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Industry Focus
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold mt-2">
              Sectors with Durable Receivable Collateral
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              We focus on industries where receivables represent a consistent, measurable, and financeable asset base. Core sectors include:
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industryFocusItems.map((item, i) => (
              <FadeUp key={item.name} delay={i * 50}>
                <div className="flex items-center gap-3 p-5 rounded-xl bg-white border border-border-light hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>{item.icon}</span>
                  <span className="text-secondary font-medium text-[14px]">{item.name}</span>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400} className="text-center mt-6">
            <p className="text-body-gray md:text-base text-sm max-w-3xl mx-auto leading-relaxed">
              These industries typically demonstrate predictable billing cycles, diversified customer bases, and structured receivable generation suitable for senior secured financing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Our Approach
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold mt-2">
              Disciplined, Selective, and Execution-Focused
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Our operating philosophy is grounded in selectivity, structural clarity, and execution discipline.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto">
            {approachCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 100}>
                <div className={`relative flex flex-col items-center text-center px-8 py-8 lg:py-0 ${i < approachCards.length - 1 ? "lg:border-r border-b lg:border-b-0 border-secondary/10" : ""}`}>
                  <span className="text-[72px] font-black text-secondary/[0.04] leading-none select-none absolute top-0 lg:-top-2">0{i + 1}</span>
                  <div className="relative z-10 flex flex-col items-center gap-3 mt-6">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>{card.icon}</span>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{card.title}</h3>
                    <div className="w-8 h-[2px] bg-primary/40 rounded-full" />
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={300} className="text-center mt-8">
            <p className="text-body-gray md:text-base text-sm max-w-3xl mx-auto leading-relaxed">
              This approach enables dependable execution and long-term alignment.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CTABanner
        title="Discuss a Financing Opportunity"
        description="We engage with management teams and private equity sponsors seeking structured working capital solutions."
        description2="Financial information may be submitted for confidential review. Each opportunity is evaluated through a disciplined process designed to provide clarity and timely feedback."
        buttonText="Submit Financing Inquiry"
      />
    </>
  );
}
