import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCards from "@/components/IndustryCards";
import FadeUp from "@/components/FadeUp";
import ARFinancingContactForm from "@/components/ARFinancingContactForm";

export const metadata = {
  title: "Accounts Receivable Financing | EPOCH Financial",
  description:
    "Access scalable liquidity through accounts receivable financing. EPOCH Financial provides AR financing for middle-market companies.",
  keywords:
    "accounts receivable financing company, accounts receivable finance, financing accounts receivable, ar finance, ar financing, ar lending, accounts receivable financing, loan against accounts receivable, accounts receivable lending, accounts receivable loans, accounts receivables financing, accounts receivable funding, ar funding, account financing receivables, accounts receivable line of credit financing",
};

const valueProps = [
  {
    icon: "receipt_long",
    title: "Use Contracted Customer Obligations to Support Liquidity",
    description:
      "Commercial receivables represent legally enforceable payment obligations supported by customer credit strength and invoice performance, forming the foundation of a structured receivables facility.",
  },
  {
    icon: "verified_user",
    title: "Establish Committed Credit Availability Secured by Receivables",
    description:
      "We structure and execute senior secured revolving receivables-backed credit facilities for the private credit middle market. These solutions support disciplined borrowing and align credit availability with eligible collateral performance.",
  },
  {
    icon: "trending_up",
    title: "Expand Capital Availability as Revenue Increases",
    description:
      "Accounts receivable financing availability reflects eligible collateral balances within structured alternative credit solutions, ensuring borrowing capacity aligns with receivable quality and portfolio performance.",
  },
  {
    icon: "visibility",
    title: "Improve Liquidity, Visibility and Financial Stability",
    description:
      "Structured accounts receivable financing solutions strengthen capital planning visibility and improve balance sheet efficiency through collateral-backed accounts receivable funding and revolving credit availability.",
  },
];

const structuredSolutions = [
  { num: 1, title: "Customize Facility Around Assets", description: "We design structured accounts receivable financing solutions aligned with receivable composition, within broader opportunistic credit strategies, obligor credit quality, and contractual payment performance." },
  { num: 2, title: "Provide Committed Revolving Capital", description: "These facilities provide companies with consistent AR financing to support operational scale, strategic execution priorities, and financial planning." },
  { num: 3, title: "Determine Capacity From Collateral", description: "Borrowing availability is determined using qualified receivables, ensuring capital reflects current portfolio value." },
  { num: 4, title: "Adjust Availability With Growth", description: "Credit access expands naturally as billing volume increases and receivable balances strengthen." },
  { num: 5, title: "Apply Institutional Risk Evaluation", description: "Obligor profiles, payment consistency, and reporting integrity are evaluated as part of institutional credit underwriting before facility structuring." },
  { num: 6, title: "Senior Secured Credit with Institutional Discipline", description: "We structure senior secured credit facilities designed to align with institutional credit standards, ensuring durability, transparency, and dependable execution." },
];

const benefits = [
  { num: 1, title: "Access Institutional Working Capital Through Private Credit Middle Market Solutions", description: "Unlock committed liquidity secured by receivables to support operations, acquisitions, and strategic growth initiatives." },
  { num: 2, title: "Increase Revolving Credit Capacity With Revenue Growth", description: "Expand borrowing availability as receivable balances grow, aligning credit capacity with operational scale." },
  { num: 3, title: "Strengthen Asset-Based Lending Availability", description: "Leverage receivable portfolios to establish dependable working capital without relying on cash flow volatility." },
  { num: 4, title: "Improve Balance Sheet Efficiency and Capital Utilization", description: "Convert outstanding receivables into deployable capital and optimize overall working capital performance." },
  { num: 5, title: "Maintain Non-Dilutive Institutional Capital Access", description: "Secure working capital financing without equity issuance or changes to ownership structure." },
  { num: 6, title: "Enhance Liquidity Predictability and Financial Planning", description: "Maintain consistent access to revolving credit facilities aligned with receivable performance and business activity." },
  { num: 7, title: "Reduce Dependence on Unsecured Credit Facilities", description: "Use asset-secured financing structures to strengthen liquidity stability and long-term financial flexibility." },
  { num: 8, title: "Access Flexible Receivables Financing Solutions Within Alternative Credit Strategies", description: "Companies implement structured credit facilities aligned with collateral performance and operational requirements." },
];

const qualifiesCards = [
  { icon: "history", title: "Established Operating History", description: "Companies with stable operations and predictable revenue generation. A proven business model supports structured working capital access." },
  { icon: "verified", title: "Creditworthy Commercial Customers", description: "Businesses that invoice reliable commercial or institutional clients. Strong obligors improve borrowing strength and financing availability." },
  { icon: "receipt_long", title: "Consistent Accounts Receivable Volume", description: "Companies that generate regular receivables through ongoing invoicing. Recurring receivables support continuous access to working capital." },
  { icon: "diversity_3", title: "Diversified Customer Base", description: "Businesses that serve multiple customers across industries. Diversification strengthens receivable quality and reduces concentration risk." },
  { icon: "assessment", title: "Professional Financial Reporting", description: "Organizations with accurate accounting systems and timely financial reporting. Strong reporting enables efficient underwriting and scalable financing." },
  { icon: "rocket_launch", title: "Need for Additional Working Capital Capacity", description: "Companies that require capital beyond traditional bank limits. Receivables-based financing unlocks liquidity aligned with operational growth." },
  { icon: "domain", title: "Private Equity-Backed or Privately Held Companies", description: "Suitable for sponsor-backed and independent middle market companies. The structure supports growth, acquisitions, and operational stability." },
];

const industries = [
  { image: "/assets/images/industry-business-services-new.jpg", icon: "business_center", name: "Business Services", description: "Professional service providers are billing corporate clients for consulting, outsourced operations, and recurring service engagements." },
  { image: "/assets/images/industry-construction-new.jpg", icon: "construction", name: "Construction", description: "Contractors and subcontractors performing commercial and infrastructure projects with progress billing and verified receivable schedules." },
  { image: "/assets/images/industry-distribution-new.jpg", icon: "local_shipping", name: "Distribution and Supply Chain", description: "Distributors and wholesalers supplying commercial customers through structured invoicing and consistent product delivery cycles." },
  { image: "/assets/images/industry-energy-new.jpg", icon: "bolt", name: "Energy Services", description: "Service providers supporting energy, utilities, and infrastructure sectors with commercial receivables from established industry operators." },
  { image: "/assets/images/industry-government-new.jpg", icon: "account_balance", name: "Government", description: "Companies delivering products or services under approved government agreements with reliable and trackable receivable obligations." },
  { image: "/assets/images/industry-government-new.jpg", icon: "apartment", name: "Government Contracting", description: "Companies performing federal, state, or municipal contracts with approved receivables supported by contractual payment obligations." },
  { image: "/assets/images/industry-distribution-new.jpg", icon: "inventory_2", name: "Logistics", description: "Third-party logistics providers managing warehousing, fulfillment, and supply chain operations with ongoing commercial billing structures." },
  { image: "/assets/images/industry-manufacturing.jpg", icon: "precision_manufacturing", name: "Manufacturing", description: "Companies producing goods or providing industrial services with established commercial invoicing and recurring customer payment cycles." },
  { image: "/assets/images/industry-oil-gas.jpg", icon: "oil_barrel", name: "Oil and Gas", description: "Service providers supporting upstream, midstream, and downstream operations with structured invoicing to commercial or institutional customers." },
  { image: "/assets/images/industry-business-services-new.jpg", icon: "groups", name: "Staffing", description: "Staffing firms providing workforce solutions and generating recurring receivables from commercial and institutional client contracts." },
  { image: "/assets/images/industry-technology.jpg", icon: "computer", name: "Technology Companies", description: "Technology providers delivering software, IT services, or managed solutions through recurring commercial invoicing arrangements." },
  { image: "/assets/images/industry-distribution-new.jpg", icon: "local_shipping", name: "Transportation", description: "Freight carriers and transportation providers generating receivables through contracted commercial shipping and logistics operations." },
];

const processSteps = [
  { title: "Collateral Evaluation", description: "Review receivable quality, obligor strength, payment performance, and overall portfolio stability." },
  { title: "Facility Structuring", description: "Design revolving credit facilities aligned with receivable volume, business model, and liquidity requirements." },
  { title: "Credit Underwriting", description: "Institutional underwriting standards are applied with a focus on asset performance, risk management, and structural integrity." },
  { title: "Facility Implementation", description: "Execute financing efficiently with defined reporting, collateral monitoring, and operational alignment." },
  { title: "Ongoing Liquidity Support", description: "Provide continuous access to working capital that adjusts with receivable growth and business expansion." },
];

const whyEpochItems = [
  { icon: "shield", title: "Institutional Credit Expertise", description: "As a trusted accounts receivable financing company, we structure receivables facilities using disciplined underwriting, collateral analysis, and institutional credit standards. Our team evaluates collateral quality, obligor strength, and portfolio performance to deliver reliable and scalable working capital solutions." },
  { icon: "tune", title: "Facilities Aligned With Receivable Performance", description: "We structure each receivables facility based on actual collateral composition and billing characteristics. This ensures borrowing availability reflects portfolio strength and supports ongoing operational requirements." },
  { icon: "trending_up", title: "Scalable Liquidity That Supports Growth", description: "Our revolving credit structures expand as receivable balances grow. Companies maintain consistent access to working capital without renegotiating facility terms or replacing existing financing." },
  { icon: "speed", title: "Efficient Execution and Implementation", description: "Transactions are executed through a structured and transparent process designed to support efficient implementation. Our team works closely with company leadership to implement facilities efficiently and align with operational timelines." },
  { icon: "handshake", title: "Reliable Institutional Capital Access", description: "We facilitate dependable access to private credit middle market solutions designed for institutional working capital needs. Structured credit solutions support operational continuity, acquisitions, and long-term strategic initiatives." },
  { icon: "diversity_3", title: "Long-Term Financing Partnership Approach", description: "We build durable relationships with companies and financial sponsors. Structured solutions evolve alongside business growth, ensuring ongoing liquidity and financial flexibility." },
];

const faqs = {
  intro: "Everything you need to know about our accounts receivable financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    { question: "What types of receivables qualify for financing?", answer: "Eligible receivables generally include invoices issued to creditworthy commercial or institutional customers with verifiable payment obligations. Qualification depends on obligor strength, payment history, invoice aging, and overall portfolio diversification." },
    { question: "How much capital can companies access through receivable financing?", answer: "Facility size depends on receivable volume, obligor credit quality, and portfolio performance. Middle market companies typically access credit facilities ranging from several million to over $100 million. Borrowing capacity increases as receivable balances grow, creating scalable liquidity aligned with revenue generation." },
    { question: "How is borrowing capacity determined?", answer: "Borrowing availability is calculated using a borrowing base formula applied to eligible receivables. Advance rates depend on customer credit quality, payment history, aging, and concentration. This structure ensures financing aligns directly with collateral performance and receivable stability." },
    { question: "How does receivable financing differ from traditional bank lending?", answer: "Receivable financing focuses primarily on collateral quality rather than enterprise valuation or cash flow alone. This allows companies to access larger and more flexible credit facilities, particularly when traditional bank capacity becomes constrained due to growth, acquisitions, or structural complexity." },
    { question: "How quickly can a receivable financing facility be implemented?", answer: "Implementation timelines depend on portfolio size, reporting quality, and transaction complexity. Middle market facilities typically close within several weeks once underwriting, collateral review, and documentation are completed." },
  ],
};

export default function ARFinancingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage: 'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/accountreciveble.jfif")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>receipt_long</span>
                ACCOUNTS RECEIVABLE FINANCING
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Accounts Receivable Financing Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Unlock committed working capital through structured accounts receivable financing solutions within broader private credit middle market strategies.
                Strengthen liquidity, stabilize operations, and execute growth without equity dilution.
              </p>
              <Link
                href="#discuss"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          {/* Section header */}
          <FadeUp className="pb-12 border-b border-border-light">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Value Proposition</p>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Generate Consistent Liquidity<br />From Commercial Receivable Portfolios
            </h2>
            <p className="text-body-gray md:text-[15px] text-sm max-w-2xl leading-relaxed">
              Structured credit solutions that unlock working capital and align liquidity with operational performance.
            </p>
          </FadeUp>

          {/* Feature pillars — no cards, vertical dividers only */}
          <div className="grid grid-cols-1 xl:grid-cols-4 divide-y xl:divide-y-0 xl:divide-x divide-border-light">
            {valueProps.map((vp, i) => (
              <FadeUp key={vp.title} delay={i * 90} className="group px-0 xl:px-10 py-10 xl:py-12 first:xl:pl-0 last:xl:pr-0">

                {/* Large free-floating icon */}
                <span
                  className="material-symbols-outlined text-primary block mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontSize: 52 }}
                >
                  {vp.icon}
                </span>

                {/* Gradient accent line */}
                <div
                  className="w-10 h-[3px] rounded-full mb-6"
                  style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }}
                />

                <h3 className="text-secondary lg:text-[17px] text-[16px] font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                  {vp.title}
                </h3>
                <p className="text-body-gray text-[14px] leading-relaxed">
                  {vp.description}
                </p>

              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* STRUCTURED SOLUTIONS */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Framework</p>
            <h2 className="text-white 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Structured Receivable-Backed Credit Solutions
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
            {structuredSolutions.map((item, i) => (
              <FadeUp key={item.num} delay={i * 80} className="h-full">
                <div
                  className="flex flex-col gap-4 p-5 md:p-10 group hover:bg-white/[0.04] transition-colors duration-300 h-full"
                  style={{ background: "#11375F" }}
                >
                  <span className="text-[44px] font-black leading-none tabular-nums text-primary select-none">
                    {String(item.num).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-bold md:text-xl text-lg leading-snug group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-white/50 md:text-base text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          <FadeUp className="mb-12">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Key Benefits</p>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Benefits of Accounts Receivable Financing<br />for Middle Market Companies
            </h2>
            <p className="text-body-gray md:text-[15px] text-sm max-w-2xl leading-relaxed">
              Receivables-backed credit solutions that strengthen liquidity, expand borrowing capacity, and support long-term growth.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-border-light">
            <div className="divide-y divide-border-light md:pr-10">
              {benefits.slice(0, 4).map((b, i) => (
                <FadeUp key={b.num} delay={i * 80} className="group py-8 first:pt-0">
                  <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }} />
                  <h3 className="text-secondary lg:text-[17px] text-[16px] font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">{b.title}</h3>
                  <p className="text-body-gray text-[14px] leading-relaxed">{b.description}</p>
                </FadeUp>
              ))}
            </div>
            <div className="divide-y divide-border-light md:pl-10 border-t md:border-t-0 border-border-light">
              {benefits.slice(4).map((b, i) => (
                <FadeUp key={b.num} delay={(i + 4) * 80} className="group py-8 first:pt-0 md:first:pt-8">
                  <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }} />
                  <h3 className="text-secondary lg:text-[17px] text-[16px] font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">{b.title}</h3>
                  <p className="text-body-gray text-[14px] leading-relaxed">{b.description}</p>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHO QUALIFIES */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-xl">

              {/* Left Panel — dark navy */}
              <div className="lg:w-[36%] shrink-0 bg-secondary flex flex-col justify-between p-8 md:p-10 lg:p-12">
                <div>
                  <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Eligibility Criteria</p>
                  <h2 className="text-white 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-5">
                    Who Qualifies for Receivables-Based Working Capital Financing
                  </h2>
                  <p className="text-white/60 md:text-base text-sm leading-relaxed">
                    This AR Financing solution is designed for established middle market companies with strong commercial
                    receivables and consistent operating performance.
                  </p>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Facility Range</p>
                  <p className="text-white text-2xl font-extrabold">Up To $100M+</p>
                  <p className="text-white/50 text-sm mt-1">Revolving credit secured by commercial receivables</p>
                </div>
              </div>

              {/* Right Panel — white list */}
              <div className="lg:w-[64%] bg-white divide-y divide-border-light">
                {qualifiesCards.map((card, i) => (
                  <div key={card.title} className="flex items-start gap-5 px-8 md:px-10 py-6 group hover:bg-primary/[0.03] transition-colors duration-200">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/8 text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200 mt-0.5" style={{ background: "rgba(17,55,95,0.07)" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{card.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-1">{card.title}</h3>
                      <p className="text-body-gray text-sm leading-relaxed">{card.description}</p>
                    </div>
                    <span className="text-[13px] font-bold text-primary/30 tabular-nums shrink-0 mt-1 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustryCards
        title="Industries We Support with Accounts Receivable Financing"
        description="We structure AR financing solutions for middle-market companies operating in industries with consistent invoicing and commercial payment structures."
        industries={industries}
      />

      {/* PROCESS */}
      
      <ProcessSteps
        title="Our Accounts Receivable Financing Process"
        description="We follow a disciplined and transparent process to deliver reliable working capital secured by commercial receivables. Our approach aligns liquidity access with collateral quality, operational scale, and long-term financial objectives."
        steps={processSteps}
      />

      {/* WHY EPOCH */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-start">

            {/* Left: sticky heading panel */}
            <FadeUp className="lg:w-[34%] lg:sticky lg:top-28 self-start">
              <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">
                Our Advantage
              </span>
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
                Why EPOCH Financial Is a Trusted<br className="hidden md:block" />Receivables Financing Partner?
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mb-6" />
              {/* Decorative stat block */}
              <div className="rounded-2xl bg-secondary p-7 mt-2">
                <p className="text-white/50 text-[11px] uppercase tracking-widest font-semibold mb-2">Financing Advantage</p>
                <p className="text-white text-[42px] font-extrabold leading-none mb-1">6</p>
                <p className="text-white/70 text-[14px] leading-relaxed">Reasons institutions choose EPOCH as their receivables financing partner</p>
              </div>
            </FadeUp>

            {/* Right: connected vertical timeline */}
            <div className="lg:w-[66%] relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[22px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-primary/10 hidden md:block" />

              <div className="flex flex-col gap-0">
                {whyEpochItems.map((item, i) => {
                  const isLast = i === whyEpochItems.length - 1;
                  const accentBg = i % 2 === 0 ? "bg-primary" : "bg-secondary";
                  return (
                    <FadeUp key={item.title} delay={i * 80}>
                      <div className={`flex gap-7 group ${!isLast ? "pb-10" : ""}`}>
                        {/* Icon circle on the line */}
                        <div className="relative shrink-0 z-10">
                          <div className={`w-11 h-11 rounded-full ${accentBg} flex items-center justify-center shadow-lg`}>
                            <span className="material-symbols-outlined text-white" style={{ fontSize: 20 }}>
                              {item.icon}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1 pb-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[11px] font-bold text-body-gray/50 tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="h-px flex-1 bg-border-light" />
                          </div>
                          <h3 className="text-secondary font-bold text-[17px] leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="text-body-gray text-[14px] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DISCUSS YOUR RECEIVABLE FINANCING OPPORTUNITY */}
      <section id="discuss" className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left — text */}
            <FadeUp className="lg:w-[38%] shrink-0">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
              <h2 className="text-secondary 2xl:text-[34px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-5">
                Discuss Your Receivable Financing Opportunity
              </h2>
              <p className="text-body-gray md:text-base text-sm leading-relaxed mb-4">
                EPOCH Financial partners with middle market companies that require institutional accounts receivable financing to strengthen liquidity and support operational growth.
              </p>
              <p className="text-body-gray md:text-base text-sm leading-relaxed">
                Connect with our team to structure a senior secured credit facility aligned with your receivable portfolio, collateral quality, and working capital requirements.
              </p>
            </FadeUp>

            {/* Right — form */}
            <FadeUp className="lg:w-[62%] w-full" delay={120}>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <ARFinancingContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
