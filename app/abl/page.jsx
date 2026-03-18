import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCards from "@/components/IndustryCards";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Asset Based Lending | EPOCH Financial",
  description:
    "Our asset-based financing solutions provide dependable access to capital aligned with middle market growth objectives.",
  keywords:
    "asset based lending, ABL, asset based loan, borrowing base, working capital, middle market",
};

const valueProps = [
  {
    icon: "account_balance_wallet",
    title: "Leverage Eligible Assets to Support Credit Availability",
    description:
      "Accounts receivable, inventory, and equipment provide a reliable collateral base that supports structured borrowing capacity aligned with operational asset strength and liquidity requirements.",
  },
  {
    icon: "verified_user",
    title: "Establish Senior Secured Revolving Credit Capacity",
    description:
      "Asset-based loan facility provides committed revolving credit availability secured by defined borrowing bases. This ensures dependable liquidity aligned with eligible collateral performance and business scale.",
  },
  {
    icon: "trending_up",
    title: "Increase Borrowing Capacity as Asset Levels Grow",
    description:
      "Credit availability adjusts dynamically based on receivable balances, inventory levels, and asset expansion. This ensures asset-based loan financing capacity scales alongside business growth.",
  },
  {
    icon: "visibility",
    title: "Improve Working Capital Efficiency and Liquidity Planning",
    description:
      "Asset-based finance improves balance sheet efficiency by converting asset value into accessible capital. These asset-based financial services strengthen liquidity forecasting and treasury planning.",
  },
  {
    icon: "rocket_launch",
    title: "Support Strategic Growth and Capital Deployment",
    description:
      "ABL loans provide dependable liquidity to support acquisitions, refinancing, inventory investment, and operational expansion without ownership dilution.",
  },
];

const structuringCards = [
  {
    num: 1,
    title: "Collateral Analysis and Borrowing Base Design",
    description:
      "Facilities are structured around eligible receivables, inventory, equipment, and other business assets. A defined borrowing base establishes advance availability and ensures ongoing liquidity aligned with operational asset levels.",
  },
  {
    num: 2,
    title: "Advance Rates Based on Asset Quality",
    description:
      "Advance rates reflect asset characteristics, customer credit profile, asset liquidity, and historical performance. Higher-quality collateral supports increased borrowing availability and enhanced capital efficiency.",
  },
  {
    num: 3,
    title: "Facility Scalability and Availability",
    description:
      "Asset-based lending facilities expand in parallel with asset growth. As receivables increase or inventory levels expand, borrowing capacity adjusts accordingly, ensuring liquidity scales with business operations.",
  },
  {
    num: 4,
    title: "Covenant Structures Aligned with Operational Stability",
    description:
      "Facilities are structured with performance-based covenants designed to support operational continuity while maintaining appropriate financial discipline. Compared to traditional cash flow loans, ABL facilities often provide greater flexibility during periods of earnings volatility.",
  },
  {
    num: 5,
    title: "Ongoing Collateral Monitoring and Risk Management",
    description:
      "Lenders maintain structured collateral monitoring processes, including borrowing base reporting and periodic field examinations. These measures ensure facility integrity while preserving consistent capital access.",
  },
];

const advantages = [
  {
    num: 1,
    title: "Convert Balance Sheet Assets into Immediate Liquidity",
    description:
      "ABL facilities unlock liquidity embedded in receivables, inventory, and equipment. This allows companies to deploy capital without divesting equity or disrupting ownership structure.",
  },
  {
    num: 2,
    title: "Increase Liquidity Without Equity Dilution",
    description:
      "Asset-based lending provides growth capital while preserving shareholder ownership. Companies maintain strategic control while strengthening balance sheet liquidity.",
  },
  {
    num: 3,
    title: "Enhance Financial Flexibility During Growth or Transition",
    description:
      "ABL structures provide dependable liquidity during acquisitions, restructurings, rapid growth phases, or cyclical revenue periods.",
  },
  {
    num: 4,
    title: "Scale Capital Availability with Operational Expansion",
    description:
      "As asset levels increase, borrowing capacity expands proportionally. This ensures capital availability remains aligned with business growth.",
  },
  {
    num: 5,
    title: "Reduce Reliance on Cash Flow–Based Lending Constraints",
    description:
      "ABL facilities prioritize asset value and collateral strength, allowing companies to access capital even during earnings volatility or transitional periods.",
    colSpan: true,
  },
];

const qualifiesCards = [
  { icon: "history", title: "Established Operating History", description: "Companies with a proven business model, stable operations, and consistent revenue generation." },
  { icon: "account_balance_wallet", title: "Strong Eligible Asset Base", description: "Businesses with meaningful accounts receivable, inventory, equipment, or other financeable assets." },
  { icon: "receipt_long", title: "Consistent Working Capital Asset Levels", description: "Companies that generate recurring receivables and maintain operational inventory or equipment." },
  { icon: "diversity_3", title: "Diversified Customer and Revenue Profile", description: "Organizations serving multiple commercial customers across industries." },
  { icon: "assessment", title: "Professional Financial Reporting and Controls", description: "Companies with accurate financial reporting, reliable accounting systems, and timely financial visibility." },
  { icon: "attach_money", title: "Middle Market Capital Requirements", description: "Businesses requiring structured liquidity solutions, typically $10 million or more." },
  { icon: "precision_manufacturing", title: "Asset-Intensive Business Model", description: "Companies operating in sectors such as manufacturing, distribution, logistics, staffing, and industrial services." },
  { icon: "domain", title: "Private Equity–Backed or Privately Held Companies", description: "Suitable for sponsor-backed and independently owned middle market companies." },
];

const industries = [
  { image: "/assets/images/industry-business-services.jpg", icon: "precision_manufacturing", name: "Manufacturing", description: "Manufacturers leverage receivables, raw materials, and equipment to support production expansion, acquisitions, and working capital optimization." },
  { image: "/assets/images/industry-construction.jpg", icon: "local_shipping", name: "Distribution and Wholesale", description: "Distributors utilize receivables and inventory financing to support large-scale purchasing and supply chain stability." },
  { image: "/assets/images/industry-distribution.jpg", icon: "warehouse", name: "Transportation and Logistics", description: "Transportation providers access capital secured by receivables and fleet assets to support expansion and operational continuity." },
  { image: "/assets/images/industry-technology.jpg", icon: "groups", name: "Staffing and Professional Services", description: "Staffing firms leverage receivables to support payroll obligations and growth initiatives." },
  { image: "/assets/images/industry-healthcare.jpg", icon: "storefront", name: "Retail and Consumer Products", description: "Retail and consumer product companies use inventory and receivables financing to support seasonal growth and expansion." },
  { image: "/assets/images/industry-manufacturing.jpg", icon: "restaurant", name: "Food and Beverage", description: "Companies leverage inventory and receivables to maintain production scale and supply chain continuity." },
];

const processSteps = [
  { title: "Collateral Diligence and Eligibility Analysis", description: "Conduct comprehensive evaluation of receivables, inventory, equipment, and other eligible assets. This includes assessing asset liquidity, turnover, concentration risk, and underlying collateral performance to establish a reliable borrowing base framework." },
  { title: "Borrowing Base Structuring and Facility Design", description: "Structure revolving and term credit facilities based on eligible collateral value, advance rates, and operational requirements. Facility sizing aligns with asset levels, liquidity objectives, and anticipated growth trajectory." },
  { title: "Institutional Credit Underwriting", description: "Apply rigorous underwriting standards focused on collateral quality, enterprise stability, financial reporting integrity, and risk-adjusted credit structuring." },
  { title: "Facility Execution and Operational Integration", description: "Finalize legal documentation, establish borrowing base reporting protocols, and implement collateral monitoring procedures." },
  { title: "Ongoing Collateral Monitoring and Liquidity Expansion", description: "Continuously monitor asset performance, borrowing base availability, and collateral trends. As asset levels increase, borrowing capacity adjusts accordingly." },
];

const whyEpochItems = [
  { icon: "shield", title: "Structured Asset-Based Loan Facilities", description: "Each asset based loan facility is structured around collateral strength, supporting acquisitions, refinancing, and large-scale working capital requirements." },
  { icon: "tune", title: "Scalable Borrowing Base Structures", description: "The asset based lending loan availability adjusts with receivables, inventory, and equipment levels, ensuring liquidity remains aligned with operational growth." },
  { icon: "speed", title: "Execution Certainty and Speed", description: "Our underwriting and structuring process is built to deliver reliable execution timelines, ensuring capital is available when required for strategic initiatives." },
  { icon: "account_balance", title: "Reliable Execution and Credit Structuring", description: "Our asset based lending facility structuring process ensures disciplined underwriting, execution certainty, and dependable liquidity access for strategic capital initiatives." },
  { icon: "handshake", title: "Long-Term Funding Partnership", description: "We provide consistent asset based funding that scales alongside asset growth, supporting acquisitions, expansion, and evolving enterprise capital requirements." },
];

const faqs = {
  intro: "Everything you need to know about our asset-based lending solutions. Can't find what you're looking for? Contact our team.",
  items: [
    { question: "How are asset-based lending facilities structured for middle market companies?", answer: "Facilities are structured around a defined borrowing base supported by eligible collateral such as receivables, inventory, and equipment. Borrowing availability adjusts dynamically based on asset levels, ensuring liquidity scales with operational activity and balance sheet strength." },
    { question: "What is the typical facility size?", answer: "Asset-based lending facilities typically begin at $10 million and scale significantly depending on collateral value and business size. Facility capacity can increase as the company expands its receivables, inventory, or asset base." },
    { question: "How quickly can facilities be established?", answer: "Execution timelines vary depending on collateral complexity, reporting readiness, and diligence requirements. Companies with organized financial reporting and asset tracking systems typically experience faster execution." },
    { question: "Does asset-based lending restrict operational flexibility?", answer: "Asset-based lending is designed to support operational continuity while maintaining appropriate financial discipline through borrowing base reporting and collateral monitoring. Compared to traditional cash flow loans, these facilities often provide greater flexibility during earnings volatility." },
    { question: "Can asset-based lending support acquisitions and expansion?", answer: "Yes, asset-based lending is widely used to support acquisitions, expansion initiatives, recapitalizations, and working capital optimization. As asset levels increase following acquisitions or growth, borrowing capacity can expand accordingly." },
  ],
};

export default function ABLPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("/assets/images/abl-hero.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>account_balance</span>
                ASSET-BASED LENDING
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Asset-Based Lending Services
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Leverage eligible receivables, inventory, and equipment to establish committed borrowing capacity,
                enhance liquidity coverage, support acquisitions, and strengthen overall balance sheet efficiency and
                flexibility.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Link
                  href="#"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  Discuss a Financing Opportunity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
              Strengthen Liquidity Through<br />Asset-Based Lending Facilities
            </h2>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <FadeUp className="lg:w-[40%] shrink-0 flex" delay={100}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[280px]">
                <Image
                  src="/assets/images/abl-value-prop.jpg"
                  alt="Modern warehouse with organized inventory"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <div className="lg:w-[60%] flex flex-col gap-4">
              {valueProps.map((vp, i) => (
                <FadeUp key={vp.title} delay={150 + i * 80}>
                  <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border border-border-light bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{vp.icon}</span>
                    </div>
                    <div>
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-1">{vp.title}</h3>
                      <p className="text-body-gray md:text-base text-sm leading-relaxed">{vp.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURING */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Structuring Asset-Based Lending Facilities
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-5 leading-relaxed">
              Asset-based lending facilities are underwritten based on collateral quality, asset liquidity, and
              operational performance. These facilities provide revolving and term components that expand alongside the
              company&apos;s asset base.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structuringCards.map((card, i) => (
              <FadeUp key={card.num} delay={i * 80}>
                <div className="flex flex-col gap-3 p-7 rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="h-2 rounded-t-2xl -mx-6 -mt-6 mb-1"
                    style={{ background: "linear-gradient(90deg, #11375F, #0DA2E7)" }}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl text-white text-base md:text-lg font-bold shrink-0"
                      style={{ background: "linear-gradient(135deg, #11375F, #0DA2E7)" }}
                    >
                      {card.num}
                    </span>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{card.title}</h3>
                  </div>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{card.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
              Strategic Advantages for Middle Market Companies
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {advantages.map((adv, i) => (
              <FadeUp key={adv.num} delay={i * 70} className={adv.colSpan ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto" : ""}>
                <div className="flex gap-4 p-5 rounded-2xl border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-[14px] font-bold shrink-0">
                    {adv.num}
                  </span>
                  <div>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-1">{adv.title}</h3>
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHO QUALIFIES */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Eligibility Criteria</p>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Who Qualifies for Asset-Based<br className="sm:block hidden" />Working Capital Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              This asset-based lending solution is designed for established middle market companies with significant
              asset bases, strong financial controls, and ongoing liquidity requirements.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-light">
            {qualifiesCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 70}>
                <div className="bg-white flex flex-col gap-4 px-7 py-8 group h-full">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 40 }}>{card.icon}</span>
                    <span className="text-4xl font-bold text-secondary/20 tabular-nums select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[3px] rounded-full bg-primary" />
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary leading-snug">{card.title}</h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{card.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustryCards
        title="Industries We Support with Asset-Based Lending"
        description="Asset-based lending supports asset-intensive middle market sectors, including:"
        industries={industries}
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Asset-Backed Financing Process"
        description="We implement a disciplined, institutionally structured process designed to establish scalable liquidity aligned with collateral composition, operational complexity, and long-term capital strategy."
        steps={processSteps}
      />

      {/* WHY EPOCH */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Why Middle Market Companies<br className="sm:block hidden" />Partner with EPOCH Financial?
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-5 leading-relaxed">
              We deliver institutional asset-based financing solutions designed specifically for middle market enterprises
              and sponsor-backed platforms.
            </p>
          </FadeUp>
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
            <div className="lg:w-[55%] flex flex-col gap-5">
              {whyEpochItems.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div className="flex flex-col sm:flex-row items-start gap-3 p-3 rounded-2xl border-l-4 border-primary bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.title}</h3>
                      <p className="text-body-gray md:text-base text-sm leading-snug">{item.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="lg:w-[45%] shrink-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ minHeight: 320 }}>
                <Image
                  src="/assets/images/team-photo.jpg"
                  alt="EPOCH Financial advisory team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CTABanner
        title={"Strengthen Liquidity with\nInstitutional Asset-Based Lending"}
        description="Asset-based lending transforms existing asset value into scalable, dependable liquidity. For middle market companies, these facilities provide the financial flexibility required to support acquisitions, expansion, operational stability, and long-term enterprise growth."
        description2="Our asset-based lending solutions deliver structured, institutional capital aligned with the scale, complexity, and strategic objectives of middle market businesses."
        buttonText="Submit Financing Inquiry"
        bgImage="/assets/images/abl-cta-bg.jpg"
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
