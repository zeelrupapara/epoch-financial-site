import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/service-areas/north-dakota");

const parameters = [
  { label: "Advance Rate", value: "Typically structured around eligible receivables, with advance rates potentially reaching 85%–90%." },
  { label: "Facility Size", value: "Financing requirements may range from approximately $3 million to $75 million+." },
  { label: "Eligible Receivables", value: "Evaluated based on aging, customer credit quality, concentration, payment history, and collectability." },
  { label: "Borrowing Capacity", value: "Determined by the eligible receivables base, advance rates, and overall collateral quality." },
  { label: "Pricing", value: "Considered based on receivable quality, transaction structure, risk profile, and facility requirements." },
  { label: "Facility Structure", value: "May include revolving receivables-based facilities aligned with ongoing liquidity and working capital needs." },
  { label: "Strategic Uses", value: "Can support working capital, growth, acquisitions, refinancing, and replacement of existing facilities." },
];

const benefits = [
  {
    icon: "account_balance",
    title: "Expand Borrowing Capacity",
    description:
      "We assess eligible receivables as a collateral base to support greater borrowing capacity, particularly where conventional cash-flow lending may not fully reflect the company's underlying asset position.",
  },
  {
    icon: "trending_up",
    title: "Fund Growth Without Restructuring Operations",
    description:
      "A receivables-based facility can provide incremental liquidity as sales and eligible receivables grow, helping companies support larger customer commitments and increased operating requirements.",
  },
  {
    icon: "handshake",
    title: "Support Acquisition and Expansion Transactions",
    description:
      "Receivables financing can be incorporated into acquisition, expansion, or recapitalization structures where additional liquidity is required alongside the existing capital stack.",
  },
  {
    icon: "shield",
    title: "Strengthen Liquidity During Transition",
    description:
      "For companies managing refinancing, bank replacement, covenant pressure, or other transitional circumstances, an AR facility can provide a collateral-driven source of liquidity.",
  },
  {
    icon: "sync",
    title: "Align Financing With Working Capital Cycles",
    description:
      "Facility availability can be structured around the company's receivables profile, helping align borrowing capacity with customer payment cycles and underlying operating requirements.",
  },
  {
    icon: "tune",
    title: "Create Greater Capital Structure Flexibility",
    description:
      "Receivables can serve as a dedicated collateral component within a broader financing strategy, allowing management to evaluate liquidity, leverage, and capital structure objectives together.",
  },
];

const industries = [
  {
    icon: "oil_barrel",
    title: "Energy & Oilfield Services",
    description:
      "Oilfield service companies and energy businesses often carry substantial commercial receivables tied to contractors, operators, and project-based customers. We structure accounts receivable financing around customer quality, invoice aging, payment performance, and concentration to support liquidity throughout operating cycles.",
  },
  {
    icon: "agriculture",
    title: "Agriculture & Agribusiness",
    description:
      "Agricultural suppliers, grain businesses, processors, and related companies may experience extended collection periods and seasonal fluctuations in receivables. We evaluate the quality and composition of the receivables portfolio to structure financing that supports working capital and seasonal liquidity requirements.",
  },
  {
    icon: "factory",
    title: "Manufacturing & Industrial Businesses",
    description:
      "Manufacturers frequently carry receivables generated through distributors, commercial buyers, and long-term customer relationships. We structure financing around eligible accounts, customer concentrations, payment terms, and aging to increase liquidity while supporting production requirements and business expansion.",
  },
  {
    icon: "local_shipping",
    title: "Transportation & Logistics",
    description:
      "Freight carriers, transportation companies, and logistics providers can experience timing gaps between service delivery and customer payment. We assess commercial receivables based on obligor quality, invoice aging, and payment history to structure financing that supports ongoing operating liquidity.",
  },
  {
    icon: "construction",
    title: "Construction & Infrastructure",
    description:
      "Construction contractors and infrastructure service providers often manage receivables associated with milestone billing, project completion, and extended commercial payment terms. We evaluate the underlying receivables and customer obligations to structure financing that supports payroll, project execution, and working capital requirements.",
  },
  {
    icon: "medical_services",
    title: "Healthcare & Medical Services",
    description:
      "Healthcare and medical service companies may have receivables tied to commercial payors, institutional customers, and other reimbursement sources. We consider receivable quality, payment performance, aging, and eligibility when evaluating financing structures designed to improve liquidity and support continued operations.",
  },
  {
    icon: "warehouse",
    title: "Distribution & Wholesale Businesses",
    description:
      "Distributors and wholesalers often maintain significant commercial receivables alongside inventory and supplier obligations. We structure accounts receivable financing around customer credit quality, concentration, aging, and collection cycles to support liquidity and accommodate increasing sales volumes.",
  },
];

const cities = [
  "Fargo",
  "Bismarck",
  "Grand Forks",
  "Minot",
  "West Fargo",
  "Williston",
  "Dickinson",
  "Mandan",
  "Jamestown",
  "Watford City",
  "Wahpeton",
  "Devils Lake",
];

const comparison = [
  {
    ar: "Structured around a company's eligible receivables portfolio and its broader borrowing requirements.",
    factoring: "Structured primarily around the purchase or advance of qualifying individual receivables.",
  },
  {
    ar: "Borrowing capacity is determined through analysis of receivable eligibility, aging, dilution, customer concentration, and credit quality.",
    factoring: "Funding availability is generally determined by the eligibility and credit profile of specific customer invoices.",
  },
  {
    ar: "Can provide a revolving financing structure that scales with the company's eligible receivables.",
    factoring: "Funding generally increases as additional eligible invoices are submitted and approved.",
  },
  {
    ar: "Receivables remain part of the company's broader collateral and financing framework.",
    factoring: "Receivables are typically sold or assigned as part of the factoring arrangement.",
  },
  {
    ar: "Can be incorporated into refinancing, bank replacement, acquisition, growth, and broader liquidity strategies.",
    factoring: "Primarily addresses liquidity generated from outstanding customer invoices.",
  },
  {
    ar: "Facility terms can be evaluated in relation to borrowing capacity, liquidity requirements, and the company's overall capital structure.",
    factoring: "Terms are generally driven by invoice volume, customer credit quality, advance levels, and collection performance.",
  },
  {
    ar: "Better aligned with companies seeking a structured, ongoing receivables-based credit facility.",
    factoring: "Often suited to companies seeking transaction-level liquidity tied directly to receivable turnover.",
  },
];

const faqs = {
  items: [
    {
      question: "Can accounts receivable financing improve cash flow without increasing equity?",
      answer:
        "Yes. A receivables-based facility can convert eligible outstanding invoices into working capital, allowing companies to improve liquidity without relying solely on equity contributions.",
    },
    {
      question: "Why does customer concentration matter in accounts receivable financing?",
      answer:
        "Concentration can affect borrowing capacity because the financial strength and payment behavior of major customers can materially influence the risk profile of the receivables portfolio.",
    },
    {
      question: "What makes accounts receivable financing suitable for refinancing?",
      answer:
        "A structured receivables facility can provide an alternative source of liquidity when a company is refinancing existing debt, replacing a bank line, addressing borrowing constraints, or restructuring its capital base.",
    },
  ],
};

export default function NorthDakotaPage() {
  return (
    <>
      <JsonLd route="/service-areas/north-dakota" />
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(11 35 65 / 72%), rgb(11 35 65 / 88%)), url("/assets/images/businesscreditsolution.jfif")',
            }}
          >
            <div className="relative z-10 max-w-3xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>location_on</span>
                SERVICE AREA — NORTH DAKOTA
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                Accounts Receivable Financing Services in North Dakota
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                North Dakota middle-market companies can leverage accounts receivable to strengthen liquidity and borrowing capacity. We structure receivables-based financing around customer quality, aging, concentration, and collateral availability. Our approach supports working capital, growth, acquisitions, refinancing, and bank replacement strategies while aligning the facility with broader capital structure and strategic requirements.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss Your Financing Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARAMETERS ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Parameters</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Key Accounts Receivable Financing Parameters
            </h2>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-border-light">
              <table className="w-full text-left text-sm md:text-[15px]">
                <tbody>
                  {parameters.map((g, i) => (
                    <tr key={g.label} className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                      <td className="px-5 py-4 font-semibold text-secondary whitespace-nowrap">{g.label}</td>
                      <td className="px-5 py-4 text-body-gray">{g.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Business Growth</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              How Accounts Receivable Financing Supports North Dakota Business Growth
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 60}>
                <div className="flex gap-5 rounded-2xl border border-border-light bg-bg-alt p-8 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{b.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-secondary font-bold text-lg leading-snug">{b.title}</h3>
                    <p className="text-body-gray text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Industries We Serve Across North Dakota
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              North Dakota companies across multiple industries can use accounts receivable as a strategic source of liquidity. We structure receivables-based financing around invoice quality, customer creditworthiness, payment terms, concentration, and borrowing capacity. Our approach supports middle-market companies managing working capital requirements, growth initiatives, refinancing, and changing liquidity needs.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-white p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug">{s.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Locations</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Locations We Serve in North Dakota
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              North Dakota businesses across energy, agriculture, manufacturing, logistics, healthcare, and commercial services often carry substantial receivables that can influence liquidity and borrowing capacity. EPOCH Financial structures accounts receivable financing around receivable quality, customer creditworthiness, payment cycles, and collateral availability, helping middle-market companies strengthen working capital and support growth, refinancing, and other strategic requirements.
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city, i) => (
              <FadeUp key={city} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-alt px-5 py-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>location_on</span>
                  <span className="text-secondary font-semibold text-base">{city}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Comparing Accounts Receivable Financing and Factoring in North Dakota
            </h2>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-border-light">
              <table className="w-full text-left text-sm md:text-[15px]">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-5 py-4 font-semibold w-1/2">Accounts Receivable Financing</th>
                    <th className="px-5 py-4 font-semibold w-1/2">Factoring</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                      <td className="px-5 py-4 text-body-gray align-top">{row.ar}</td>
                      <td className="px-5 py-4 text-body-gray align-top">{row.factoring}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-4xl mt-8">
              We assess the quality and composition of the receivables portfolio alongside the company&apos;s liquidity requirements and broader capital objectives. This allows management to evaluate whether a structured accounts receivable facility or factoring arrangement is more appropriate for its financing strategy.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={faqs} />

      {/* ─── CTA ─── */}
      <section
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgb(11 35 65 / 92%), rgb(11 35 65 / 96%)), url("/assets/images/businesscreditsolution.jfif")',
        }}
      >
        <div className="mx-auto max-w-[1600px] relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
              Strategic Accounts Receivable Financing for North Dakota Businesses
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              We structure accounts receivable financing around eligible receivables, customer quality, and liquidity requirements to support working capital, growth, and refinancing needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Discuss Your Financing Requirements
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
