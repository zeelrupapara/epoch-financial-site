import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCards from "@/components/IndustryCards";

export const metadata = {
  title: "Bridge Loans | EPOCH Financial",
  description:
    "Access structured bridge loan financing for middle market companies. EPOCH Financial provides commercial bridge financing solutions.",
  keywords:
    "bridge loans, bridge financing, commercial bridge loan, short-term financing, middle market, acquisition financing",
};

const valueProps = [
  {
    icon: "attach_money",
    title: "Support Transitional Capital Requirements",
    description:
      "Bridge loan financing provides short-term capital designed to support corporate acquisitions, refinancing events, recapitalizations, working capital initiatives, and commercial real estate transactions.",
  },
  {
    icon: "verified_user",
    title: "Establish Senior Secured Bridge Credit Facilities",
    description:
      "We structure senior secured business bridge loan facilities based on enterprise value, asset strength, and transaction objectives. These facilities provide dependable liquidity during periods of growth, restructuring, or capital transition.",
  },
  {
    icon: "trending_up",
    title: "Support Corporate Transactions and Transitional Liquidity Events",
    description:
      "Our bridge loan facilities support acquisitions, partner buyouts, debt refinancing, operational stabilization, and strategic growth initiatives without delays caused by traditional bank underwriting.",
  },
  {
    icon: "visibility",
    title: "Improve Liquidity and Financial Flexibility",
    description:
      "Structured bridge financing strengthens liquidity for both operating companies and commercial real estate investors. These facilities support operational stability, transaction execution, property acquisition, and capital restructuring initiatives.",
  },
];

const structuredSolutions = [
  { num: 1, title: "Align Bridge Financing With Enterprise and Asset Value", description: "We design bridge financing facilities based on business performance, collateral quality, and transaction requirements." },
  { num: 2, title: "Provide Committed Bridge Loan Capital", description: "Bridge loan facilities are typically structured from $1 million to $50 million with terms ranging from 6 to 18 months." },
  { num: 3, title: "Revenue-Based Bridge Loan Underwriting Approach", description: "Our revenue-based bridge loans emphasize top-line performance, gross margin consistency, enterprise stability, and overall capital structure rather than strict reliance on traditional EBITDA covenant models." },
  { num: 4, title: "Bridge Capital Until Permanent Financing Is Secured", description: "Bridge loan financing serves as a temporary capital solution until permanent financing, asset sales, or recapitalizations are completed." },
  { num: 5, title: "Apply Disciplined Credit Evaluation", description: "We assess business performance, asset quality, sponsor strength, and transaction structure to ensure bridge loan financing aligns with risk and repayment strategy." },
  { num: 6, title: "Maintain Senior Secured Financing Structure", description: "We structure bridge financing facilities with senior secured positions to provide capital stability and protect long-term financing objectives." },
];

const benefits = [
  { num: 1, title: "Execute Acquisitions and Strategic Transactions Quickly", description: "Bridge financing allows companies and investors to complete corporate acquisitions, recapitalizations, and commercial real estate transactions without delays." },
  { num: 2, title: "Access Flexible Short-Term Capital", description: "Facilities are structured based on enterprise value, revenue performance, and asset strength, providing immediate liquidity aligned with transaction objectives." },
  { num: 3, title: "Support Revenue Volatility and Growth Transitions", description: "Revenue-based bridge loans provide liquidity for companies experiencing earnings fluctuations, rapid expansion, or capital markets timing gaps." },
  { num: 4, title: "Facilitate Commercial Real Estate Acquisition and Stabilization", description: "Commercial bridge loan facilities support acquisition, lease-up, repositioning, and refinancing of income-producing properties." },
  { num: 5, title: "Preserve Ownership and Avoid Equity Dilution", description: "Bridge capital provides non-dilutive liquidity, protecting shareholder value for public companies and preserving sponsor control for private businesses." },
  { num: 6, title: "Maintain Liquidity During Capital Structure Transitions", description: "Bridge financing supports refinancing, debt maturities, restructuring events, and balance sheet repositioning." },
  { num: 7, title: "Align Financing With Business and Asset Performance", description: "Facilities are structured based on revenue durability, collateral quality, enterprise strength, and defined exit strategies." },
  { num: 8, title: "Improve Execution Certainty Across Corporate and Real Estate Transactions", description: "Committed bridge loan capital ensures operating companies and property investors can move forward confidently with time-sensitive opportunities." },
];

const qualifiesCards = [
  { icon: "history", title: "Established Middle Market Companies", description: "Companies with stable operations, predictable revenue, and defined capital requirements qualify for bridge loan financing." },
  { icon: "apartment", title: "Commercial Real Estate Investors and Owners", description: "Companies acquiring, refinancing, or stabilizing commercial real estate assets benefit from bridge loan commercial real estate financing." },
  { icon: "domain", title: "Private Equity-Backed Companies", description: "Sponsor-backed companies use bridge financing to support acquisitions, recapitalizations, and portfolio expansion." },
  { icon: "swap_horiz", title: "Companies Executing Acquisitions or Refinancing", description: "Bridge loan financing supports companies completing acquisitions, restructuring capital, or refinancing existing debt." },
  { icon: "assessment", title: "Companies With Diversified Revenue Streams", description: "Bridge loan facilities are structured based on revenue performance, gross margin stability, enterprise strength, and clearly defined repayment or refinancing strategies." },
  { icon: "rocket_launch", title: "Defined Permanent Financing Strategy", description: "Planning refinancing, recapitalization, or asset sales are strong candidates for bridge financing." },
];

const industries = [
  { image: "/assets/images/industry-business-services.jpg", icon: "business_center", name: "Business Services", description: "Service companies use business bridge loan solutions to support acquisitions, recapitalizations, and liquidity transitions." },
  { image: "/assets/images/industry-construction.jpg", icon: "precision_manufacturing", name: "Manufacturing", description: "Manufacturers use bridge financing to support acquisitions, restructuring, and operational expansion." },
  { image: "/assets/images/industry-distribution.jpg", icon: "memory", name: "Technology Companies", description: "Technology companies use bridge loan financing to support acquisitions and growth initiatives." },
  { image: "/assets/images/industry-technology.jpg", icon: "local_hospital", name: "Healthcare & Professional Services", description: "Healthcare and professional service providers use bridge financing to support acquisitions and expansion." },
  { image: "/assets/images/industry-healthcare.jpg", icon: "local_shipping", name: "Distribution & Logistics", description: "Distribution and logistics companies use bridge loan financing to support acquisitions and capital transitions." },
  { image: "/assets/images/industry-manufacturing.jpg", icon: "bolt", name: "Energy & Infrastructure", description: "Energy companies use bridge financing to support acquisitions, recapitalizations, and infrastructure investments." },
];

const processSteps = [
  { title: "Transaction Review", description: "Evaluate enterprise performance, asset quality, transaction structure, and capital objectives." },
  { title: "Facility Structuring", description: "Design bridge financing aligned with enterprise value, revenue performance, and defined exit or refinancing strategy." },
  { title: "Credit Underwriting", description: "Apply institutional underwriting standards focused on enterprise stability, collateral quality, and repayment visibility." },
  { title: "Facility Execution", description: "Execute bridge financing efficiently with clear documentation, defined terms, and reliable capital deployment." },
  { title: "Transition to Permanent Capital", description: "Support the transition to permanent financing, asset monetization, or recapitalization upon facility maturity." },
];

const whyEpochItems = [
  { icon: "shield", title: "Structured Bridge Loan Facilities", description: "Each bridge facility is structured around enterprise value, revenue performance, and transaction objectives." },
  { icon: "tune", title: "Revenue-Based Underwriting", description: "We assess top-line performance, gross margin consistency, and enterprise strength rather than relying solely on EBITDA-based covenant models." },
  { icon: "speed", title: "Execution Certainty and Speed", description: "Our process is designed to deliver reliable execution timelines, ensuring capital is available when required for time-sensitive transactions." },
  { icon: "account_balance", title: "Senior Secured Positioning", description: "We maintain senior secured positions in all bridge financing structures, providing capital stability and lender protection." },
  { icon: "handshake", title: "Flexible Capital for Complex Transactions", description: "We provide bridge financing across corporate acquisitions, recapitalizations, real estate, and refinancing events." },
];

const faqs = {
  intro: "Everything you need to know about our bridge financing solutions. Can't find what you're looking for? Contact our team.",
  items: [
    { question: "What is commercial bridge financing?", answer: "Commercial bridge financing is short-term capital designed to support acquisitions, refinancing events, recapitalizations, and operational transitions. It provides immediate liquidity while companies arrange permanent financing or complete strategic transactions." },
    { question: "What is the typical bridge loan facility size?", answer: "Bridge loan facilities are typically structured from $1 million to $50 million depending on enterprise value, collateral strength, and transaction objectives. Larger facilities may be available for complex transactions with strong enterprise fundamentals." },
    { question: "What is the typical loan term?", answer: "Bridge financing terms typically range from 6 to 18 months, providing sufficient time to complete acquisitions, arrange permanent financing, stabilize real estate assets, or execute defined exit strategies." },
    { question: "What types of transactions does bridge financing support?", answer: "Bridge financing supports corporate acquisitions, recapitalizations, refinancing events, working capital needs, partner buyouts, and commercial real estate acquisitions and repositioning." },
    { question: "How does revenue-based underwriting work?", answer: "Our revenue-based approach emphasizes top-line revenue performance, gross margin consistency, enterprise stability, and overall capital structure rather than strict EBITDA covenant models. This allows companies experiencing earnings volatility or rapid growth to access bridge capital." },
  ],
};

export default function BridgePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[380px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("/assets/images/bridge-hero.jpg")',
            }}
          >
            <div className="relative z-10 max-w-3xl flex flex-col items-start gap-4 p-8 md:p-16 lg:p-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>trending_up</span>
                BRIDGE FINANCING
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Commercial Bridge Financing Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-3xl leading-relaxed">
                Access structured, non-dilutive bridge capital tailored for private and publicly traded middle market
                companies requiring short-term liquidity to support acquisitions, refinancing events, recapitalizations,
                working capital needs, or strategic growth initiatives.
              </p>
              <p className="text-white/80 md:text-base text-sm max-w-3xl leading-relaxed">
                For publicly traded companies, bridge financing provides non-dilutive liquidity that preserves
                shareholder ownership. For privately held and sponsor-backed businesses, it offers flexible capital
                without altering control or equity structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
            Provide Immediate Liquidity<br />Through Bridge Loan Financing
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: 280 }}>
                <Image
                  src="/assets/images/bridge-value-prop.jpg"
                  alt="Commercial real estate modern building exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-[60%] flex flex-col gap-4">
              {valueProps.map((vp) => (
                <div
                  key={vp.title}
                  className="flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border border-border-light bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{vp.icon}</span>
                  </div>
                  <div>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-1">{vp.title}</h3>
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{vp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURED SOLUTIONS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Structured Bridge Loan Financing Solutions
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-5 leading-relaxed">
              Our bridge capital solutions prioritize top-line revenue performance, gross margin consistency, enterprise
              stability, and overall capital structure. Unlike traditional covenant-heavy lending models, our approach
              provides flexibility for companies experiencing earnings volatility, rapid growth, balance sheet
              transitions, or capital markets timing gaps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structuredSolutions.map((card) => (
              <div
                key={card.num}
                className="flex flex-col gap-3 p-7 rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-2 rounded-t-2xl -mx-6 -mt-6 mb-2" style={{ background: "linear-gradient(90deg, #11375F, #0DA2E7)" }} />
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
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
            Benefits of Bridge Financing<br />for Middle Market Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.num} className="flex gap-4 p-5 rounded-2xl border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-[14px] font-bold shrink-0">
                  {b.num}
                </span>
                <div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-1">{b.title}</h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO QUALIFIES */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Who Qualifies for Bridge Loan Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-2 leading-relaxed">
              This bridge financing solution is designed for private and publicly traded middle market companies as well
              as commercial real estate investors with established revenue streams, institutional reporting, diversified
              operations, and defined refinancing or exit strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifiesCards.map((card) => (
              <div key={card.title} className="flex flex-col gap-1.5 p-5 rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                </div>
                <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{card.title}</h3>
                <p className="text-body-gray md:text-base text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustryCards
        title="Industries We Support With Commercial Bridge Financing"
        description="We provide bridge financing and commercial real estate financing solutions to middle market companies across multiple industries."
        industries={industries}
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Bridge Financing Process"
        description="We follow a structured and efficient process to deliver bridge loan financing aligned with transaction timelines and capital requirements."
        steps={processSteps}
      />

      {/* WHY EPOCH */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center leading-tight mb-8">
            Why Partner with EPOCH Financial<br />for Bridge Financing?
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
            <div className="lg:w-[55%] flex flex-col gap-5">
              {whyEpochItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col sm:flex-row items-start gap-3 p-4 rounded-2xl border-l-4 border-primary bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{item.title}</h3>
                    <p className="text-body-gray md:text-base text-sm leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-[45%] shrink-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ minHeight: 320 }}>
                <Image
                  src="/assets/images/bridge-value-prop.jpg"
                  alt="EPOCH Financial bridge financing"
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
        title="Access Bridge Financing for Your Next Transaction"
        description="Structured bridge loan financing provides immediate, non-dilutive capital for acquisitions, refinancing, recapitalizations, and commercial real estate transactions."
        description2="Our bridge financing solutions are built for middle market companies and real estate investors seeking reliable execution and institutional capital access."
        buttonText="Submit Financing Inquiry"
        bgImage="/assets/images/bridge-cta-bg.jpg"
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
