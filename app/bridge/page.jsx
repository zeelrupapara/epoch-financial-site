import BridgeContactForm from "@/components/bridge/BridgeContactForm";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import IndustryCards from "@/components/IndustryCards";
import FadeUp from "@/components/FadeUp";
import StructuredSolutionsCards from "@/components/StructuredSolutionsCards";
import Link from "next/link";

export const metadata = {
  title: "Commercial Bridge Financing | EPOCH Financial",
  description:
    "Secure bridge loan financing to overcome temporary cash constraints, fund acquisitions, refinancing, and commercial real estate transactions with certainty.",
  keywords:
    "commercial real estate financing, structured real estate financing, institutional real estate debt, bridge financing commercial real estate, transitional real estate financing, CRE credit solutions, acquisition financing real estate, real estate recapitalization, value add real estate financing, office building financing, commercial refinance solutions, acquisition financing middle market, leveraged finance middle market, growth capital solutions, recapitalization financing, turnaround financing, special situations financing, event driven financing, strategic capital solutions, corporate liquidity solutions, expansion financing middle market",
};

const valueProps = [
  {
    icon: "attach_money",
    title: "Support Transitional Capital Requirements",
    description:
      "Bridge financings are structured to support acquisitions, refinancing events, recapitalizations, and commercial real estate transactions. These include transitional real estate situations, acquisition financings, and recapitalization initiatives, where timing and execution certainty are critical.",
  },
  {
    icon: "verified_user",
    title: "Establish Senior Secured Bridge Credit Facilities",
    description:
      "We structure senior secured bridge credit facilities based on enterprise value, collateral quality, and transaction objectives. These facilities provide dependable liquidity during periods of growth, restructuring, or capital transition.",
  },
  {
    icon: "trending_up",
    title: "Support Corporate Transactions and Transitional Liquidity Events",
    description:
      "Bridge financings support middle market acquisitions, leveraged transactions, partner buyouts, refinancing events, and other time-sensitive corporate situations. Our process ensures companies can execute time-sensitive transactions without delays associated with traditional bank underwriting or capital markets timing gaps.",
  },
  {
    icon: "visibility",
    title:
      "Align Bridge Financing With Liquidity and Capital Structure Objectives",
    description:
      "We structure bridge financings to align with operating liquidity needs and real estate investment strategies, supporting acquisitions, refinancing, and capital structure transitions across corporate and property-level transactions.",
  },
];

const structuredSolutions = [
  {
    num: 1,
    title: "Align Bridge Financing With Enterprise and Asset Value",
    description:
      "We design bridge financing facilities based on business performance, collateral quality, and transaction requirements. This ensures financing aligns with enterprise strength and capital objectives.",
  },
  {
    num: 2,
    title: "Facilities Provide Committed Bridge Loan Capital",
    description:
      "Bridge financing facilities are structured from $1 million to $50 million with terms ranging from 6 to 18 months, providing immediate access to capital for acquisitions, refinancing, recapitalizations, or working capital initiatives.",
  },
  {
    num: 3,
    title: "Revenue-Based Bridge Loan Underwriting Approach",
    description:
      "Revenue-based bridge loan structures emphasize top-line performance, gross margin consistency, enterprise stability, and overall capital structure rather than strict reliance on traditional EBITDA covenant models. This approach supports growth capital solutions, turnaround financing, and special situations financing, allowing companies experiencing earnings volatility or rapid expansion to access dependable liquidity.",
  },
  {
    num: 4,
    title: "Bridge Capital Until Permanent Financing Is Secured",
    description:
      "Bridge loan financing serves as a temporary capital solution until permanent financing, asset sales, or recapitalizations are completed.",
  },
  {
    num: 5,
    title: "Apply Disciplined Credit Evaluation",
    description:
      "We assess business performance, asset quality, sponsor strength, and transaction structure to ensure bridge loan financing aligns with risk and repayment strategy.",
  },
  {
    num: 6,
    title: "Maintain Senior Secured Financing Structure",
    description:
      "Bridge financing facilities are structured with senior secured positions to provide capital stability and protect long-term financing objectives.",
  },
];

const benefits = [
  {
    num: 1,
    title: "Execute Acquisitions and Strategic Transactions Quickly",
    description:
      "Bridge financing allows companies and investors to complete corporate acquisitions, recapitalizations, and commercial real estate transactions without delays.",
  },
  {
    num: 2,
    title: "Access Flexible Short-Term Capital",
    description:
      "Facilities are structured based on enterprise value, revenue performance, and asset strength, providing immediate liquidity aligned with transaction objectives.",
  },
  {
    num: 3,
    title: "Support Revenue Volatility and Growth Transitions",
    description:
      "Revenue-based bridge loans provide liquidity for companies experiencing earnings fluctuations, rapid expansion, or capital markets timing gaps.",
  },
  {
    num: 4,
    title: "Facilitate Commercial Real Estate Acquisition and Stabilization",
    description:
      "Commercial bridge loan facilities support acquisition, lease-up, repositioning, and refinancing of income-producing properties.",
  },
  {
    num: 5,
    title: "Preserve Ownership and Avoid Equity Dilution",
    description:
      "Bridge capital provides non-dilutive liquidity, protecting shareholder value for public companies and preserving sponsor control for private businesses.",
  },
  {
    num: 6,
    title: "Maintain Liquidity During Capital Structure Transitions",
    description:
      "Bridge financing supports recapitalization financing, corporate liquidity solutions, refinancing, debt maturities, restructuring events, and balance sheet repositioning.",
  },
  {
    num: 7,
    title: "Align Financing With Business and Asset Performance",
    description:
      "Facilities are structured based on revenue durability, collateral quality, enterprise strength, and defined exit strategies.",
  },
  {
    num: 8,
    title:
      "Improve Execution Certainty Across Corporate and Real Estate Transactions",
    description:
      "Committed bridge loan capital ensures operating companies and property investors can move forward confidently with time-sensitive opportunities.",
  },
];

const qualifiesCards = [
  {
    icon: "history",
    title: "Established Middle Market Companies",
    description:
      "Companies with stable operations, predictable revenue, and defined capital requirements qualify for bridge loan financing.",
  },
  {
    icon: "apartment",
    title: "Commercial Real Estate Investors and Owners",
    description:
      "Companies acquiring, refinancing, or stabilizing commercial real estate assets benefit from bridge loan commercial real estate financing.",
  },
  {
    icon: "domain",
    title: "Private Equity-Backed Companies",
    description:
      "Sponsor-backed companies use bridge financing to support acquisitions, recapitalizations, and portfolio expansion.",
  },
  {
    icon: "swap_horiz",
    title: "Companies Executing Acquisitions or Refinancing",
    description:
      "Bridge loan financing supports companies completing acquisitions, restructuring capital, or refinancing existing debt.",
  },
  {
    icon: "assessment",
    title:
      "Companies With Diversified Revenue Streams and Institutional Financial Reporting",
    description:
      "Bridge loan facilities are structured based on revenue performance, gross margin stability, enterprise strength, and clearly defined repayment or refinancing strategies.",
  },
  {
    icon: "rocket_launch",
    title: "Defined Permanent Financing Strategy",
    description:
      "Companies planning refinancing, recapitalization, or asset sales are strong candidates for bridge financing.",
  },
];

const industries = [
  {
    image: "/assets/images/industry-business-services-new.jpg",
    icon: "business_center",
    name: "Business Services",
    description:
      "Service companies use business bridge loan solutions to support acquisitions, recapitalizations, and liquidity transitions.",
  },
  {
    image: "/assets/images/industry-construction-new.jpg",
    icon: "precision_manufacturing",
    name: "Manufacturing",
    description:
      "Manufacturers use bridge financing to support acquisitions, restructuring, and operational expansion.",
  },
  {
    image: "/assets/images/industry-technology.jpg",
    icon: "memory",
    name: "Technology Companies",
    description:
      "Technology companies use bridge financing to support acquisitions and growth initiatives.",
  },
  {
    image: "/assets/images/industry-healthcare-new.jpg",
    icon: "local_hospital",
    name: "Healthcare and Professional Services",
    description:
      "Healthcare and professional service providers use bridge financing to support acquisitions and expansion.",
  },
  {
    image: "/assets/images/industry-distribution-new.jpg",
    icon: "local_shipping",
    name: "Distribution and Logistics",
    description:
      "Distribution and logistics companies use bridge loan financing to support acquisitions and capital transitions.",
  },
  {
    image: "/assets/images/energy-service.jpg",
    icon: "bolt",
    name: "Energy and Infrastructure",
    description:
      "Energy companies use bridge financing to support acquisitions, recapitalizations, and infrastructure investments.",
  },
  {
    image: "/assets/images/commercial.jpg",
    icon: "apartment",
    name: "Commercial Real Estate",
    description:
      "Bridge loan commercial real estate financing supports acquisition, stabilization, repositioning, and refinancing of commercial properties.",
  },
];

const processSteps = [
  {
    title: "Transaction Review",
    description:
      "Evaluate enterprise performance, asset quality, transaction structure, and capital objectives.",
  },
  {
    title: "Facility Structuring",
    description:
      "Design bridge financing facilities aligned with collateral strength and financing requirements.",
  },
  {
    title: "Credit Underwriting",
    description:
      "Conduct detailed credit review based on enterprise value, asset quality, and repayment strategy.",
  },
  {
    title: "Facility Execution",
    description:
      "Execute bridge loan financing efficiently with defined structure, documentation, and funding timelines.",
  },
  {
    title: "Transition to Permanent Financing",
    description:
      "Support refinancing or transition to permanent capital solutions as business objectives are achieved.",
  },
];

const whyEpochItems = [
  {
    icon: "shield",
    title: "Deep Experience in Bridge Loan Financing",
    description:
      "We structure bridge loan financing for private and public middle market operating companies as well as commercial real estate investors, ensuring reliable capital access across corporate and property transactions.",
    image: "/assets/images/bridge-why-1.jpg",
  },
  {
    icon: "timer",
    title: "Reliable Commercial Bridge Loan Execution",
    description:
      "Bridge loan financing is executed with defined timelines, providing dependable capital to support acquisitions, refinancing, and recapitalizations while ensuring transaction certainty and minimal operational disruption.",
    image: "/assets/images/bridge-why-2.jpg",
  },
  {
    icon: "trending_up",
    title: "Revenue-Focused Bridge Capital Expertise",
    description:
      "Structured bridge capital solutions focus on revenue durability, capital structure flexibility, and clearly defined exit strategies to ensure reliable short-term liquidity.",
    image: "/assets/images/bridge-why-3.jpg",
  },
  {
    icon: "tune",
    title: "Flexible Bridge Financing Structures",
    description:
      "We structure bridge financing based on transaction size, enterprise value, and asset strength, ensuring capital solutions align with borrower objectives and risk-adjusted lending considerations.",
    image: "/assets/images/bridge-why-4.jpg",
  },
  {
    icon: "speed",
    title: "Efficient Transaction Timelines",
    description:
      "We execute bridge financing transactions within defined timelines, enabling companies and investors to access capital quickly for time-sensitive acquisitions, refinancing, or transitional financing needs.",
    image: "/assets/images/bridge-why-5.jpg",
  },
  {
    icon: "handshake",
    title: "Long-Term Financing Partnership",
    description:
      "We support companies beyond initial bridge financing, helping transition to permanent capital solutions while maintaining reliable financing relationships aligned with long-term business growth objectives.",
    image: "/assets/images/bridge-why-6.jpg",
  },
];

const faqs = {
  items: [
    {
      question:
        "How do we structure bridge loan financing for sponsor-backed acquisitions?",
      answer:
        "Bridge financings are structured and executed based on enterprise value, collateral strength, cash flow profile, and sponsor support. Our focus is on providing reliable short-term capital with a clearly defined exit strategy such as refinancing, recapitalization, or asset sale to ensure repayment certainty and transaction stability.",
    },
    {
      question:
        "What underwriting factors do we evaluate before approving bridge financing?",
      answer:
        "We evaluate enterprise value, asset quality, borrower financial performance, leverage levels, collateral coverage, and sponsor strength. Our underwriting also focuses on the borrower's ability to execute the exit strategy, ensuring bridge financing aligns with transaction risk, repayment certainty, and capital preservation.",
    },
    {
      question:
        "Can bridge loan financing be integrated within an existing capital structure?",
      answer:
        "Yes. We structure bridge financing alongside senior secured loans, mezzanine financing, or existing credit facilities. This approach helps companies access additional liquidity while maintaining balanced leverage, protecting collateral coverage, and supporting acquisitions, recapitalizations, or refinancing transactions efficiently.",
    },
    {
      question:
        "Why is a clearly defined exit strategy critical in bridge financing?",
      answer:
        "We require a defined exit strategy because bridge financing is designed as a short-term capital solution. Repayment typically comes from permanent financing, asset sale, recapitalization, or improved financial performance, ensuring a predictable transition and minimizing refinancing risk.",
    },
    {
      question:
        "How do we determine bridge loan sizing and capital availability?",
      answer:
        "We evaluate appropriate facility sizing based on enterprise value, collateral strength, transaction size, and repayment visibility. Our goal is to provide sufficient liquidity while maintaining appropriate leverage levels and ensuring strong collateral protection throughout the financing period.",
    },
    {
      question:
        "How do we support transitional or time-sensitive financing situations?",
      answer:
        "We advise on and arrange bridge financing to support corporate acquisitions, debt maturities, recapitalizations, working capital needs, and commercial real estate acquisition or stabilization transitions. Our structured approach ensures companies and investors access timely capital while positioning the transaction for permanent long-term financing solutions.",
    },
    {
      question:
        "How does collateral quality impact bridge financing structure?",
      answer:
        "Collateral quality plays a critical role in determining loan structure, leverage, and terms. We evaluate asset liquidity, valuation stability, and enterprise strength to ensure bridge financing is supported by reliable collateral and aligned with risk management standards.",
    },
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
              backgroundImage: 'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/bridgefinance.jfif")',
            }}
          >
            <div className="relative z-10 max-w-3xl flex flex-col items-start gap-4 p-8 md:p-16 lg:p-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  trending_up
                </span>
                BRIDGE FINANCING
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Commercial Bridge Financing Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-3xl leading-relaxed">
                We structure and execute non-dilutive bridge financings for
                private and publicly traded middle market companies, supporting
                acquisitions, refinancing events, recapitalizations, and
                strategic liquidity requirements.
              </p>
              <p className="text-white/80 md:text-base text-sm max-w-3xl leading-relaxed">
                We advise public and private companies on accessing bridge
                capital that preserves shareholder ownership and maintains
                control across sponsor-backed and independently owned
                businesses.
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

          <FadeUp className="pb-12 border-b border-border-light">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Value Proposition</p>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Structure Bridge Financings Across Corporate<br />and Real Estate Transactions
            </h2>
            <p className="text-body-gray md:text-[15px] text-sm max-w-2xl leading-relaxed">
              Structured bridge capital solutions across corporate and real estate transactions, aligned with timing and execution certainty.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 xl:grid-cols-4 divide-y xl:divide-y-0 xl:divide-x divide-border-light">
            {valueProps.map((vp, i) => (
              <FadeUp key={vp.title} delay={i * 90} className="group px-0 xl:px-10 py-10 xl:py-12 first:xl:pl-0 last:xl:pr-0">
                <span
                  className="material-symbols-outlined text-primary block mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontSize: 52 }}
                >
                  {vp.icon}
                </span>
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
      <section className="2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Structured Bridge Loan Financing Solutions
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-5 leading-relaxed">
              Bridge capital solutions prioritize top-line revenue performance,
              gross margin consistency, enterprise stability, and overall
              capital structure. Unlike traditional covenant-heavy lending
              models, our approach provides flexibility for companies
              experiencing earnings volatility, rapid growth, balance sheet
              transitions, or capital markets timing gaps. Facilities are
              structured to deliver execution certainty while preserving
              ownership and avoiding equity dilution.
            </p>
          </FadeUp>
          <StructuredSolutionsCards cards={structuredSolutions} />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          <FadeUp className="mb-12">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Key Benefits</p>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Benefits of Bridge Financing<br />for Middle Market Companies
            </h2>
            <p className="text-body-gray md:text-[15px] text-sm max-w-2xl leading-relaxed">
              Bridge capital solutions provide dependable short-term liquidity aligned with acquisition, refinancing, and transitional financing objectives.
            </p>
          </FadeUp>

          {/* Two-column list — no cards, no counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-border-light">

            {/* Left column */}
            <div className="divide-y divide-border-light md:pr-10">
              {benefits.slice(0, 4).map((b, i) => (
                <FadeUp key={b.num} delay={i * 80} className="group py-8 first:pt-0">
                  <div
                    className="w-8 h-[2px] rounded-full mb-4"
                    style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }}
                  />
                  <h3 className="text-secondary lg:text-[17px] text-[16px] font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                    {b.title}
                  </h3>
                  <p className="text-body-gray text-[14px] leading-relaxed">{b.description}</p>
                </FadeUp>
              ))}
            </div>

            {/* Right column */}
            <div className="divide-y divide-border-light md:pl-10 border-t md:border-t-0 border-border-light">
              {benefits.slice(4).map((b, i) => (
                <FadeUp key={b.num} delay={(i + 4) * 80} className="group py-8 first:pt-0 md:first:pt-8">
                  <div
                    className="w-8 h-[2px] rounded-full mb-4"
                    style={{ background: "linear-gradient(90deg, #0DA2E7, #11375F)" }}
                  />
                  <h3 className="text-secondary lg:text-[17px] text-[16px] font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                    {b.title}
                  </h3>
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
          <FadeUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Who Qualifies for Bridge Loan Financing
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-2 leading-relaxed">
              This bridge financing solution is designed for private and
              publicly traded middle market companies as well as commercial real
              estate investors with established revenue streams, institutional
              reporting, diversified operations, and defined refinancing or exit
              strategies.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light">
            {qualifiesCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 70}>
                <div className="bg-bg-alt flex flex-col gap-4 px-7 py-8 group h-full">
                  <div className="flex items-center justify-between">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: 40 }}
                    >
                      {card.icon}
                    </span>
                    <span className="text-4xl font-bold text-secondary/20 tabular-nums select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[3px] rounded-full bg-primary" />
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustryCards
        title="Industries We Support With Commercial Bridge Financing"
        description="We advise on and deliver access to bridge capital and commercial real estate financing solutions to middle market companies across multiple industries."
        industries={industries}
      />

      {/* PROCESS */}
      <ProcessSteps
        title="Our Bridge Financing Process"
        description="We follow a structured and efficient process to deliver bridge loan financing aligned with transaction timelines and capital requirements."
        steps={processSteps}
        ctaLabel="View Our Approach"
        ctaHref="/about/our-approach"
      />

      {/* WHY EPOCH */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-start">

            {/* Left sticky heading */}
            <FadeUp className="lg:w-[32%] lg:sticky lg:top-28 self-start">
              <span className="inline-block text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Our Advantage</span>
              <h2 className="text-white 2xl:text-[36px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
                Why EPOCH Financial Is a Trusted
                <br />
                Bridge Financing Partner?
              </h2>
              <div className="w-10 h-1 bg-primary rounded-full mb-7" />
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <p className="text-white text-[38px] font-extrabold leading-none mb-1">{whyEpochItems.length}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">Reasons companies trust EPOCH for bridge financing</p>
              </div>
            </FadeUp>

            {/* Right: connected timeline list */}
            <div className="lg:w-[68%] relative">
              <div className="absolute left-[22px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-primary/10 hidden md:block" />
              <div className="flex flex-col">
                {whyEpochItems.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 70}>
                    <div className={`flex gap-7 group ${i < whyEpochItems.length - 1 ? "pb-9" : ""}`}>
                      {/* Icon circle on line */}
                      <div className="shrink-0 z-10 relative">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${i % 2 === 0 ? "bg-primary" : "bg-white/10"}`}>
                          <span className="material-symbols-outlined text-white" style={{ fontSize: 20 }}>{item.icon}</span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-white/20 text-[11px] font-bold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                          <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <h3 className="text-white font-bold text-[16px] leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-white/55 text-[14px] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DISCUSS FORM */}
      <section className="bg-bg-alt 2xl:pt-20 xl:pt-16 md:pt-14 pt-12 2xl:px-6 lg:px-16 md:px-12 px-4 pb-6">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4 text-center">
              Discuss Your Bridge Financing Opportunity
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed mb-8 max-w-2xl text-center mx-auto">
              EPOCH Financial provides structured, non-dilutive bridge loan facilities for private and public middle market companies. Connect with our team to secure short-term bridge capital aligned with your transaction objectives, revenue profile, and long-term financing strategy.
            </p>
          </FadeUp>
          <FadeUp delay={160} className="bg-white rounded-2xl border max-w-4xl mx-auto border-border-light shadow-sm p-8 md:p-10">
            <BridgeContactForm />
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
