import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCards from "@/components/IndustryCards";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Accounts Receivable Financing | EPOCH Financial",
  description:
    "Access scalable liquidity through accounts receivable financing. EPOCH Financial provides AR financing for middle-market companies.",
  keywords:
    "accounts receivable financing, AR financing, receivables, working capital, revolving credit, middle market",
};

const valueProps = [
  {
    icon: "attach_money",
    title: "Use Contracted Customer Obligations to Support Liquidity",
    description:
      "Commercial receivables represent legally enforceable payment obligations supported by customer credit strength and invoice performance, forming the foundation of a structured receivables facility.",
  },
  {
    icon: "verified_user",
    title: "Establish Committed Credit Availability Secured by Receivables",
    description:
      "We structure senior secured revolving accounts receivable lending and accounts receivable line of credit financing solutions that support disciplined borrowing and align credit availability with eligible collateral performance.",
  },
  {
    icon: "trending_up",
    title: "Expand Capital Availability as Revenue Increases",
    description:
      "Accounts receivables loan availability reflects eligible collateral balances, ensuring borrowing capacity aligns with receivable quality and portfolio performance.",
  },
  {
    icon: "visibility",
    title: "Improve Liquidity, Visibility and Financial Stability",
    description:
      "Structured financing accounts receivable solutions strengthen capital planning visibility and improve balance sheet efficiency through collateral-backed accounts receivable funding and revolving credit availability.",
  },
];

const structuredSolutions = [
  { num: 1, title: "Customize Facility Around Assets", description: "We design a structured accounts receivable financing option aligned with receivable composition, obligor credit quality, and contractual payment performance." },
  { num: 2, title: "Provide Committed Revolving Capital", description: "Companies maintain consistent AR funding to support operations, execution priorities, and financial planning." },
  { num: 3, title: "Determine Capacity From Collateral", description: "We calculate availability using qualified receivables, ensuring capital reflects current portfolio value." },
  { num: 4, title: "Adjust Availability With Growth", description: "Credit access expands naturally as billing volume increases and receivable balances strengthen." },
  { num: 5, title: "Apply Institutional Risk Evaluation", description: "We assess obligor profiles, payment consistency, and reporting integrity before establishing facility commitments." },
  { num: 6, title: "Protect Capital Through Secured Position", description: "We maintain senior secured interest and monitor collateral performance through structured compliance frameworks." },
];

const benefits = [
  { num: 1, title: "Access Institutional Working Capital Financing", description: "Unlock committed liquidity secured by receivables to support operations, acquisitions, and strategic growth initiatives." },
  { num: 2, title: "Increase Revolving Credit Capacity With Revenue Growth", description: "Expand borrowing availability as receivable balances grow, aligning credit capacity with operational scale." },
  { num: 3, title: "Strengthen Asset-Based Lending Availability", description: "Leverage receivable portfolios to establish dependable working capital without relying on cash flow volatility." },
  { num: 4, title: "Improve Balance Sheet Efficiency and Capital Utilization", description: "Convert outstanding receivables into deployable capital and optimize overall working capital performance." },
  { num: 5, title: "Maintain Non-Dilutive Institutional Capital Access", description: "Secure working capital financing without equity issuance or changes to ownership structure." },
  { num: 6, title: "Enhance Liquidity Predictability and Financial Planning", description: "Maintain consistent access to revolving credit facilities aligned with receivable performance and business activity." },
  { num: 7, title: "Reduce Dependence on Unsecured Credit Facilities", description: "Use asset-secured financing structures to strengthen liquidity stability and long-term financial flexibility." },
  { num: 8, title: "Access Flexible Account Receivable Financing Options", description: "Companies implement structured credit facilities aligned with collateral performance and operational requirements." },
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
  { image: "/assets/images/buissness-service.jpg", icon: "business_center", name: "Business Services", description: "Professional service providers billing corporate clients for consulting, outsourced operations, and recurring service engagements." },
  { image: "/assets/images/constructre.jpg", icon: "construction", name: "Construction", description: "Contractors and subcontractors performing commercial and infrastructure projects with progress billing and verified receivable schedules." },
  { image: "/assets/images/supply-chain.jpg", icon: "local_shipping", name: "Distribution and Supply Chain", description: "Distributors and wholesalers supplying commercial customers through structured invoicing and consistent product delivery cycles." },
  { image: "/assets/images/energy-service.jpg", icon: "bolt", name: "Energy Services", description: "Service providers supporting energy, utilities, and infrastructure sectors with commercial receivables from established industry operators." },
  { image: "/assets/images/govermanet-contracting.jpg", icon: "account_balance", name: "Government", description: "Companies delivering products or services under approved government agreements with reliable and trackable receivable obligations." },
  { image: "/assets/images/govermanet-contracting.jpg", icon: "apartment", name: "Government Contracting", description: "Companies performing federal, state, or municipal contracts with approved receivables supported by contractual payment obligations." },
];

const processSteps = [
  { title: "Collateral Evaluation", description: "Review receivable quality, obligor strength, payment performance, and overall portfolio stability." },
  { title: "Facility Structuring", description: "Design revolving credit facilities aligned with receivable volume, business model, and liquidity requirements." },
  { title: "Credit Underwriting", description: "Apply institutional underwriting standards focused on asset performance, risk management, and structural integrity." },
  { title: "Facility Implementation", description: "Execute financing efficiently with defined reporting, collateral monitoring, and operational alignment." },
  { title: "Ongoing Liquidity Support", description: "Provide continuous access to working capital that adjusts with receivable growth and business expansion." },
];

const whyEpochItems = [
  { icon: "shield", title: "Institutional Credit Expertise", description: "As a trusted accounts receivable financing company, we structure receivables facilities using disciplined underwriting, collateral analysis, and institutional credit standards." },
  { icon: "tune", title: "Facilities Aligned With Receivable Performance", description: "We structure each receivables facility based on actual collateral composition and billing characteristics. This ensures borrowing availability reflects portfolio strength." },
  { icon: "trending_up", title: "Scalable Liquidity That Supports Growth", description: "Our revolving credit structures expand as receivable balances grow. Companies maintain consistent access to working capital without renegotiating facility terms." },
  { icon: "speed", title: "Execution Certainty", description: "Our underwriting and structuring process is built to deliver reliable execution timelines, ensuring capital is available when required." },
  { icon: "handshake", title: "Long-Term Receivables Financing Partnership", description: "We provide consistent receivables-based funding that scales alongside business growth, supporting acquisitions, expansion, and operational continuity." },
];

const faqs = {
  intro: "Everything you need to know about our accounts receivable financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    { question: "What is accounts receivable financing?", answer: "Accounts receivable financing is a structured credit facility secured by commercial invoices. Companies use outstanding receivables as collateral to access revolving working capital, improving liquidity without equity dilution." },
    { question: "How does AR financing differ from factoring?", answer: "Unlike factoring, which involves selling receivables at a discount, AR financing provides a revolving credit facility secured by receivables. The company retains ownership of receivables and manages collections, while maintaining control over customer relationships." },
    { question: "What types of receivables qualify?", answer: "Eligible receivables typically include billed, undisputed commercial invoices owed by creditworthy customers. Concentration limits, aging requirements, and customer credit quality are evaluated during underwriting to determine eligible collateral." },
    { question: "How quickly can a facility be established?", answer: "Execution timelines depend on collateral complexity, reporting readiness, and diligence requirements. Companies with organized receivable reporting and financial systems typically experience faster execution." },
    { question: "Can AR financing support business growth?", answer: "Yes. As receivable balances grow, borrowing availability expands accordingly. This makes AR financing an effective tool for companies experiencing rapid growth, seasonal fluctuations, or expanding into new markets." },
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
              backgroundImage: 'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("/assets/images/arf-img.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>receipt_long</span>
                ACCOUNTS RECEIVABLE FINANCING
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Accounts Receivable Financing Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Unlock committed working capital through a structured receivables facility secured by commercial invoices.
                Strengthen liquidity, stabilize operations, and execute growth without equity dilution.
              </p>
              <Link
                href="#"
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
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-10">
              Generate Consistent Liquidity<br />From Commercial Receivable Portfolios
            </h2>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <FadeUp className="lg:w-[40%] shrink-0 flex" delay={100}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[280px]">
                <Image
                  src="/assets/images/commercial.jpg"
                  alt="Business professional reviewing financial documents"
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
                  className="flex flex-col gap-4 p-8 md:p-10 group hover:bg-white/[0.04] transition-colors duration-300 h-full"
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
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
              Benefits of Accounts Receivable Financing<br />for Middle Market Companies
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <FadeUp key={b.num} delay={i * 70}>
                <div className="flex gap-4 p-5 rounded-2xl border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white text-[14px] font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, #11375F, #0DA2E7)" }}
                  >
                    {b.num}
                  </span>
                  <div>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-1">{b.title}</h3>
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
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
                  <p className="text-white text-2xl font-extrabold">$5M – $100M+</p>
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
        description="We provide AR financing solutions to middle-market companies operating in industries with consistent invoicing and commercial payment structures."
        industries={industries}
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Accounts Receivable Financing Process"
        description="We follow a disciplined and transparent process to deliver reliable working capital secured by commercial receivables."
        steps={processSteps}
      />

      {/* WHY EPOCH */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
              Why EPOCH Financial Is a Trusted<br />Receivables Financing Partner?
            </h2>
          </FadeUp>
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
            <div className="lg:w-[55%] flex flex-col gap-5">
              {whyEpochItems.map((item, i) => (
                <FadeUp key={item.title} delay={i * 80}>
                  <div className="flex flex-col sm:flex-row items-start gap-3 p-4 rounded-2xl border-l-4 border-primary bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                  src="/assets/images/arf-sec.jpg"
                  alt="EPOCH Financial team"
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
        title="Unlock Liquidity Through Accounts Receivable Financing"
        description="Structured receivables financing provides dependable working capital without equity dilution. For middle market companies, AR financing delivers scalable liquidity aligned with commercial invoice performance."
        description2="Our accounts receivable financing solutions are built for middle market businesses seeking institutional working capital solutions."
        buttonText="Submit Financing Inquiry"
        bgImage="/assets/images/ar-cta-bg.jpg"
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
