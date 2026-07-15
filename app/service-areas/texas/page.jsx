import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/service-areas/texas");

const solutions = [
  {
    icon: "receipt_long",
    title: "Accounts Receivable Financing (AR)",
    paragraphs: [
      "We structure accounts receivable financing facilities for Texas businesses seeking to monetize working capital embedded within receivables portfolios. By advancing against eligible invoices, companies can accelerate liquidity, optimize cash conversion cycles, and enhance financial flexibility without diluting ownership or disrupting existing banking relationships.",
      "Facilities are underwritten based on portfolio composition, customer credit quality, concentration metrics, and historical payment performance, creating scalable financing solutions aligned with operational and strategic capital requirements.",
    ],
  },
  {
    icon: "inventory",
    title: "Asset-Based Lending (ABL)",
    paragraphs: [
      "We provide asset-based lending facilities supported by accounts receivable, inventory, equipment, and other eligible collateral. These structures are designed to maximize borrowing capacity while aligning availability with the company's asset base and operating profile.",
      "ABL facilities can support acquisitions, expansion initiatives, working capital requirements, refinancing transactions, and other corporate objectives where liquidity and borrowing flexibility are critical components of the capital strategy.",
    ],
  },
  {
    icon: "trending_up",
    title: "Bridge and Transitional Capital",
    paragraphs: [
      "We structure bridge and transitional capital solutions for businesses navigating acquisitions, recapitalizations, refinancing events, operational restructurings, and other transaction-driven opportunities. These facilities provide interim liquidity designed to address timing gaps and transaction-specific funding requirements.",
      "Each structure is tailored to the company's capital needs, collateral profile, and execution timeline, providing the flexibility required to advance strategic initiatives while preserving operational continuity and financial optionality.",
    ],
  },
];

const guidelines = [
  { label: "Annual Business Revenue", value: "$15 million to $1 billion+" },
  { label: "Financing Requirement", value: "$3 million to $75 million+" },
  { label: "Advance Rate", value: "Up to 85% to 90% of eligible accounts receivable" },
  { label: "Financing Rates", value: "Typically start from 0.75%, with pricing tailored to the transaction structure and risk profile" },
  { label: "Funding Timeline", value: "Expedited approvals and funding following due diligence and collateral review" },
  { label: "Geographic Coverage", value: "Financing available for qualified businesses throughout Texas, including Houston, Dallas, Fort Worth, Austin, San Antonio, and other major commercial markets" },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing & Industrial Businesses",
    description:
      "Financing solutions structured for manufacturers, processors, fabricators, and industrial operators seeking additional liquidity, acquisition capital, operational flexibility, or balance sheet optimization.",
  },
  {
    icon: "local_shipping",
    title: "Transportation & Logistics",
    description:
      "Capital solutions for freight carriers, third-party logistics providers, distribution operators, and supply chain businesses requiring financing aligned with fleet assets, receivables, and growth initiatives.",
  },
  {
    icon: "medical_services",
    title: "Healthcare & Medical Services",
    description:
      "Structured financing for healthcare organizations, specialty practices, medical service providers, and healthcare platforms pursuing expansion, acquisitions, refinancing transactions, and working capital objectives.",
  },
  {
    icon: "domain",
    title: "Commercial Real Estate Platforms",
    description:
      "Financing facilities supporting commercial real estate owners, operators, investors, and sponsors executing acquisitions, recapitalizations, bridge financing transactions, and portfolio growth strategies.",
  },
  {
    icon: "warehouse",
    title: "Distribution & Wholesale Businesses",
    description:
      "Capital solutions for distributors and wholesale businesses managing large customer portfolios, inventory-intensive operations, and ongoing liquidity requirements across multiple markets.",
  },
  {
    icon: "support_agent",
    title: "Business & Professional Services",
    description:
      "Financing structures designed for service-based organizations with recurring revenue streams, contractual relationships, and transaction-driven capital requirements supporting strategic growth initiatives.",
  },
];

const cities = [
  "Houston",
  "Dallas",
  "Fort Worth",
  "Austin",
  "San Antonio",
  "Plano",
  "Irving",
  "Frisco",
  "Arlington",
  "McKinney",
  "Richardson",
  "The Woodlands",
  "Sugar Land",
  "Midland",
  "Odessa",
  "Corpus Christi",
  "Beaumont",
  "Waco",
  "Tyler",
];

const pillars = [
  {
    icon: "tune",
    title: "Strategic Capital Structuring",
    description:
      "Every business has unique capital requirements influenced by its operating model, growth trajectory, and financial position. We assess liquidity needs, cash flow generation, asset composition, and strategic objectives to develop tailored financing structures. Our goal is to create capital solutions that support immediate business priorities while maintaining flexibility for future growth opportunities and evolving market conditions.",
  },
  {
    icon: "query_stats",
    title: "Comprehensive Financial Analysis",
    description:
      "Each engagement begins with a thorough evaluation of financial performance, operational trends, collateral quality, and overall capital structure. This analytical process helps identify financing alternatives that align with business fundamentals and strategic goals. By applying a disciplined credit perspective, we help support sustainable borrowing capacity, financial stability, and long-term capital efficiency.",
  },
  {
    icon: "rocket_launch",
    title: "Efficient Transaction Management",
    description:
      "Private credit transactions often involve multiple stakeholders, extensive due diligence, and complex documentation requirements. We oversee the process from initial evaluation through closing, coordinating lender engagement, underwriting activities, and transaction execution. Our structured approach helps streamline communication, improve process efficiency, and support timely completion while minimizing potential execution challenges.",
  },
  {
    icon: "trending_up",
    title: "Long-Term Capital Perspective",
    description:
      "Financing decisions can influence future expansion plans, acquisition opportunities, and broader corporate objectives. Our focus extends beyond a single transaction to evaluate how capital structures may support long-term business growth and financial flexibility. This forward-looking approach helps ensure financing solutions remain aligned with changing business needs and evolving market environments.",
  },
];

const faqs = {
  items: [
    {
      question: "Can accounts receivable financing work alongside existing debt?",
      answer:
        "Yes. It can be structured alongside senior credit facilities or incorporated into a broader capital strategy. The structure is tailored to complement your existing capital stack while optimizing working capital availability.",
    },
    {
      question: "Which Texas businesses are the best fit?",
      answer:
        "EPOCH Financial works with established Texas businesses generating $15 million to $1 billion+ in annual revenue and seeking $3 million to $75 million+ in financing. Facilities are customized to meet the liquidity needs and growth objectives of each business.",
    },
    {
      question: "What factors influence advance rates?",
      answer:
        "Advance rates are based on receivables quality, customer payment history, industry risk, and portfolio concentration. The final advance rate is determined through a comprehensive underwriting and collateral review process.",
    },
    {
      question: "Can the financing facility support acquisitions?",
      answer:
        "Yes. Accounts receivable financing can provide the working capital needed to support acquisitions, expansions, and other strategic initiatives. It can also help maintain liquidity during integration and post-acquisition growth.",
    },
  ],
};

export default function TexasPage() {
  return (
    <>
      <JsonLd route="/service-areas/texas" />
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
                SERVICE AREA — TEXAS
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                Middle Market Private Credit Solutions in Texas
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                Texas businesses operate in highly competitive and capital-intensive markets where access to flexible funding is essential for growth and stability. EPOCH Financial provides customized asset-based lending (ABL) and accounts receivable financing solutions that help middle market companies improve liquidity, optimize working capital, and support strategic business objectives.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Texas Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPITAL SOLUTIONS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Capital Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Private Credit and Structured Finance Solutions in Texas
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-bg-alt p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug">{s.title}</h3>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-body-gray text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINANCING GUIDELINES ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Parameters</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Our Financing Guidelines
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              EPOCH Financial provides customized financing solutions for established businesses across Texas. We work with companies that have strong commercial receivables and financing needs that align with our underwriting approach. Every facility is structured based on the quality of the accounts receivable portfolio, customer credit strength, industry, and the company&apos;s growth objectives.
            </p>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-border-light">
              <table className="w-full text-left text-sm md:text-[15px]">
                <tbody>
                  {guidelines.map((g, i) => (
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

      {/* ─── INDUSTRIES ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Industries We Serve Across Texas
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We work with middle-market companies across Texas that require customized financing solutions to support growth, acquisitions, recapitalizations, liquidity events, and complex operating environments. Our focus is on businesses with established revenue profiles, financeable collateral, and capital requirements that extend beyond conventional lending parameters.
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
              Locations We Serve in Texas
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We provide financing solutions to middle-market businesses across Texas, supporting companies operating within complex capital structures, asset-intensive industries, and transaction-driven environments. Our focus includes businesses pursuing acquisitions, growth investments, recapitalizations, operational expansion, and other strategic initiatives where flexible capital and execution certainty are critical considerations.
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

      {/* ─── APPROACH ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Approach</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Our Approach to Private Credit in Texas
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Texas middle-market companies operate in a diverse and rapidly evolving economy where access to flexible capital can play a critical role in supporting growth, acquisitions, and operational initiatives. We develop customized private credit solutions designed to align with each company&apos;s financial profile, industry considerations, and long-term objectives. Our approach emphasizes strategic structuring, comprehensive analysis, and disciplined execution throughout the financing process.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 80}>
                <div className="flex gap-5 rounded-2xl border border-border-light bg-bg-alt p-8 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{p.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-secondary font-bold text-lg leading-snug">{p.title}</h3>
                    <p className="text-body-gray text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
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
              Tailored Private Credit Solutions for Texas Businesses
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              Texas middle-market companies operate within a dynamic economic landscape where access to customized private credit solutions can be a critical component of long-term value creation. EPOCH Financial assists businesses in evaluating and structuring financing solutions tailored to their liquidity requirements, asset composition, operating performance, and strategic growth objectives, helping support both immediate capital needs and future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our Texas Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
