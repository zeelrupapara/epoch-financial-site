import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/asset-based-lending-north-dakota");

const keyFactors = [
  {
    icon: "verified",
    title: "Collateral Quality and Eligibility",
    description:
      "We assess the quality, liquidity, and eligibility of receivables, inventory, equipment, real estate, and other operating assets that may support borrowing capacity.",
  },
  {
    icon: "calculate",
    title: "Borrowing Base Structure",
    description:
      "The financing structure should align advance rates and borrowing base calculations with the company's collateral composition, concentration levels, and ongoing liquidity requirements.",
  },
  {
    icon: "payments",
    title: "Working Capital Requirements",
    description:
      "Facility sizing and structure should reflect seasonal needs, operating cycles, customer payment patterns, and the company's anticipated working capital demands.",
  },
  {
    icon: "account_tree",
    title: "Capital Structure Alignment",
    description:
      "Asset-based financing can be structured alongside existing debt, subordinated capital, or other sources to support broader capital structure objectives.",
  },
  {
    icon: "flag",
    title: "Strategic Financing Objectives",
    description:
      "Companies may use asset-backed facilities to support acquisitions, refinancing, expansion, liquidity management, or other strategic initiatives while maintaining appropriate financial flexibility.",
  },
  {
    icon: "monitoring",
    title: "Reporting and Monitoring",
    description:
      "Ongoing collateral reporting, borrowing base availability, and financial information requirements should be considered when evaluating the overall structure and execution process.",
  },
];

const leveragePoints = [
  {
    icon: "account_balance",
    title: "Optimize Borrowing Capacity",
    description:
      "We evaluate eligible receivables, inventory, equipment, and other collateral to determine how the asset base can support incremental liquidity and overall facility capacity.",
  },
  {
    icon: "handshake",
    title: "Support Acquisition Financing",
    description:
      "Asset-based structures can contribute to acquisition funding by incorporating existing and acquired collateral into a coordinated financing framework, subject to eligibility, valuation, and borrowing base considerations.",
  },
  {
    icon: "sync_alt",
    title: "Address Refinancing Requirements",
    description:
      "Companies approaching maturities, facing lender constraints, or reassessing existing facilities can evaluate asset-based financing as part of a broader refinancing and capital structure strategy.",
  },
  {
    icon: "trending_up",
    title: "Fund Growth Initiatives",
    description:
      "Increased borrowing capacity can support expansion, contract growth, capital expenditures, or inventory requirements while aligning facility availability with the company's operating assets.",
  },
  {
    icon: "waves",
    title: "Manage Liquidity Through Cycles",
    description:
      "Borrowing availability can be structured around fluctuations in receivables and inventory, providing a more responsive liquidity framework for companies with seasonal or working-capital-intensive operations.",
  },
  {
    icon: "layers",
    title: "Integrate With the Capital Stack",
    description:
      "Asset-based financing can complement cash flow debt, subordinated capital, sponsor-backed financing, or other sources, allowing companies to optimize liquidity and capital structure across different strategic objectives.",
  },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing and Industrial",
    description:
      "Manufacturers with substantial accounts receivable, inventory, machinery, and production equipment can evaluate asset-based structures around collateral eligibility, borrowing capacity, and working capital requirements. These facilities may support production expansion, capital expenditures, acquisitions, or refinancing needs.",
  },
  {
    icon: "bolt",
    title: "Energy and Natural Resources",
    description:
      "Energy and resource companies often operate with significant equipment, receivables, and other operating assets. We evaluate the underlying collateral profile and liquidity requirements to help structure financing that supports operating needs, project requirements, expansion, or broader capital structure objectives.",
  },
  {
    icon: "agriculture",
    title: "Agriculture and Agribusiness",
    description:
      "Agribusiness companies can have significant inventory, receivables, equipment, and seasonal working capital requirements. Asset-based financing can be structured around these assets to accommodate operating cycles, inventory accumulation, expansion initiatives, and liquidity requirements.",
  },
  {
    icon: "local_shipping",
    title: "Transportation and Logistics",
    description:
      "Transportation and logistics companies typically maintain equipment-intensive operations alongside commercial receivables and recurring working capital demands. Financing structures can incorporate eligible operating assets to support fleet investment, expansion, refinancing, and ongoing liquidity management.",
  },
  {
    icon: "warehouse",
    title: "Wholesale and Distribution",
    description:
      "Distributors with concentrated receivables and substantial inventory may have borrowing capacity that varies with customer mix, inventory quality, and operating cycles. We structure financing considerations around collateral availability to support growth, purchasing requirements, acquisitions, and working capital needs.",
  },
  {
    icon: "construction",
    title: "Construction and Related Services",
    description:
      "Construction businesses may have significant receivables, equipment, and project-related working capital requirements. Asset-based structures can be evaluated around collateral quality, contract-related receivables, equipment values, and liquidity needs to support expansion, refinancing, or operational requirements.",
  },
  {
    icon: "medical_services",
    title: "Healthcare and Business Services",
    description:
      "Established healthcare and business service companies may hold recurring commercial receivables that can contribute to borrowing capacity. We evaluate receivable quality, customer concentration, collection patterns, and broader capital requirements when developing an appropriate financing strategy.",
  },
  {
    icon: "oil_barrel",
    title: "Oilfield and Energy Services",
    description:
      "Oilfield service companies can maintain substantial equipment fleets, commercial receivables, and other operating assets while managing cyclical demand and capital-intensive requirements. Asset-based financing can be considered to support liquidity, equipment investment, growth initiatives, refinancing, and changing operating requirements.",
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
    abl: "Broader Collateral Base: Financing can be structured around receivables, inventory, equipment, real estate, and other eligible assets.",
    factoring: "Receivables-Focused: Factoring primarily relies on eligible accounts receivable to provide liquidity.",
  },
  {
    abl: "Greater Facility Flexibility: Structures can be tailored to borrowing capacity, liquidity requirements, capital expenditures, acquisitions, and refinancing objectives.",
    factoring: "Transaction-Focused Liquidity: Facilities are generally designed around converting outstanding receivables into near-term liquidity.",
  },
  {
    abl: "Capital Structure Integration: Asset-based facilities can be incorporated into a broader senior secured capital structure alongside other financing sources.",
    factoring: "Standalone Receivables Structure: Factoring is typically positioned as a receivables monetization arrangement rather than a broader capital structure solution.",
  },
  {
    abl: "Borrowing Base Approach: Availability can reflect multiple eligible asset classes, subject to advance rates, reserves, eligibility criteria, and collateral controls.",
    factoring: "Invoice-Based Availability: Financing capacity is generally driven by the value and eligibility of specific receivables.",
  },
  {
    abl: "Strategic Applications: Suitable for companies evaluating growth, acquisitions, refinancing, restructuring, or more complex liquidity requirements.",
    factoring: "Working Capital Application: Often used when the primary objective is accelerating cash conversion from outstanding customer invoices.",
  },
  {
    abl: "Middle-Market Orientation: Can accommodate more complex businesses with diverse collateral pools and sophisticated financing requirements.",
    factoring: "Receivables-Centric Approach: More narrowly aligned with companies seeking liquidity against commercial receivables.",
  },
];

const faqs = {
  items: [
    {
      question: "What information is typically required to evaluate an asset-based financing opportunity?",
      answer:
        "Evaluation may involve financial statements, accounts receivable aging, inventory reports, customer concentration data, equipment schedules, existing debt details, borrowing requirements, and information regarding the company's strategic objectives.",
    },
    {
      question: "Can asset-based financing provide greater liquidity during periods of growth?",
      answer:
        "Potentially. As eligible receivables or inventory increase, borrowing availability may increase under the applicable borrowing base structure. This can help align liquidity with working capital requirements during periods of expansion.",
    },
    {
      question: "How does EPOCH Financial support the financing process?",
      answer:
        "We evaluate the company's financing requirements, help develop a lender-ready opportunity, identify appropriate financing sources, coordinate lender engagement, and manage the process through diligence and execution. EPOCH Financial acts as an advisor and process manager rather than the direct capital provider.",
    },
  ],
};

export default function AssetBasedLendingNorthDakotaPage() {
  return (
    <>
      <JsonLd route="/asset-based-lending-north-dakota" />
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
                ASSET BASED LENDING — NORTH DAKOTA
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                Asset Based Lending Services in North Dakota
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                Strong asset coverage can create meaningful borrowing capacity beyond traditional credit structures. We structure asset-based financing around receivables, inventory, equipment, and other operating assets to support liquidity, working capital, growth, acquisitions, and refinancing. Our process considers collateral quality, borrowing capacity, capital requirements, and transaction objectives while coordinating appropriate financing sources.
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

      {/* ─── KEY FACTORS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Key Factors</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Key Factors in North Dakota Asset Based Lending
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFactors.map((f, i) => (
              <FadeUp key={f.title} delay={i * 60}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-bg-alt p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{f.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug">{f.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{f.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEVERAGE ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Capital Strategy</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              How North Dakota Companies Can Leverage Asset Based Financing
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Asset-based financing can be integrated into a broader capital strategy when borrowing capacity needs to reflect the company&apos;s underlying asset base. For middle-market businesses, the structure can support liquidity while accommodating complex operating and transaction requirements.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leveragePoints.map((b, i) => (
              <FadeUp key={b.title} delay={i * 60}>
                <div className="flex gap-5 rounded-2xl border border-border-light bg-white p-8 h-full">
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
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Industries We Serve Across North Dakota
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We work with middle-market companies across North Dakota where asset composition, working capital intensity, and capital requirements influence financing strategy. Our approach can be tailored across industries with distinct collateral and liquidity profiles.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-bg-alt p-8 h-full">
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
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Locations</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Locations We Serve in North Dakota
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We support middle-market companies across North Dakota, structuring asset-based financing strategies around their collateral profile, liquidity requirements, and broader capital objectives. Our coverage includes key commercial and industrial markets throughout the state.
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city, i) => (
              <FadeUp key={city} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-white px-5 py-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>location_on</span>
                  <span className="text-secondary font-semibold text-base">{city}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Asset Based Financing Services vs. Factoring Companies in North Dakota
            </h2>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-border-light">
              <table className="w-full text-left text-sm md:text-[15px]">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-5 py-4 font-semibold w-1/2">Asset Based Financing Services</th>
                    <th className="px-5 py-4 font-semibold w-1/2">Factoring Companies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                      <td className="px-5 py-4 text-body-gray align-top">{row.abl}</td>
                      <td className="px-5 py-4 text-body-gray align-top">{row.factoring}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-4xl mt-8">
              Asset-based financing offers a broader, more strategic financing framework, while factoring is primarily focused on monetizing receivables for liquidity.
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
              Review Your North Dakota Financing Opportunity
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              Assess how your company&apos;s receivables, inventory, equipment, and other assets can support a financing structure aligned with current liquidity needs and long-term capital objectives.
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
