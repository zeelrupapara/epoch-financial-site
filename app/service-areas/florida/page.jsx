import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/service-areas/florida");

const solutions = [
  {
    icon: "receipt_long",
    title: "Accounts Receivable Financing (AR)",
    paragraphs: [
      "Companies with significant accounts receivable portfolios often require additional liquidity to support growth, manage extended customer payment cycles, and strengthen working capital. We structure accounts receivable financing facilities that convert outstanding invoices into accessible working capital, helping businesses improve liquidity without waiting for customer payments.",
      "Financing structures are developed through a detailed review of receivables quality, customer payment history, concentration levels, and overall portfolio performance. Accounts receivable financing facilities may provide advances of up to 90% of eligible receivables, helping Florida businesses improve liquidity while supporting growth initiatives and working capital requirements.",
    ],
  },
  {
    icon: "inventory",
    title: "Asset-Based Lending (ABL)",
    paragraphs: [
      "Companies with substantial collateral bases may benefit from asset-based lending facilities secured by eligible receivables, inventory, equipment, and other business assets. We structure ABL facilities designed to maximize borrowing availability while aligning with the company's operating cycle and capital requirements.",
      "Asset-based lending facilities may include eligible accounts receivable, inventory, equipment, and other business assets as collateral, creating additional borrowing capacity for companies seeking flexible working capital financing in Florida.",
    ],
  },
  {
    icon: "trending_up",
    title: "Bridge and Transitional Capital",
    paragraphs: [
      "Business transitions often create short-term financing needs that require timely and customized capital solutions. We structure bridge and transitional capital facilities for companies pursuing acquisitions, refinancing transactions, recapitalizations, turnaround initiatives, or other strategic events.",
      "Each financing structure is designed around the company's liquidity requirements, transaction timeline, and collateral profile, helping management teams maintain financial flexibility while executing critical business objectives.",
    ],
  },
];

const guidelines = [
  { label: "Annual Business Revenue", value: "$15 million–$1 billion+" },
  { label: "Financing Requirement", value: "$3 million–$75 million+" },
  { label: "Advance Rate", value: "Up to 85%–90% of eligible accounts receivable" },
  { label: "Financing Rates", value: "Typically start from 0.75%, with pricing customized based on the transaction profile" },
  { label: "Funding Timeline", value: "Expedited approvals and funding following due diligence and collateral review" },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing & Industrial Businesses",
    description:
      "Structures are designed around production schedules, inventory management requirements, supply chain dynamics, and working capital needs, helping manufacturers maintain liquidity while supporting operational growth.",
  },
  {
    icon: "local_shipping",
    title: "Transportation & Logistics",
    description:
      "Florida's transportation, distribution, and logistics sectors often require capital solutions aligned with freight cycles, customer payment terms, fleet-related assets, and seasonal volume fluctuations.",
  },
  {
    icon: "medical_services",
    title: "Healthcare & Medical Services",
    description:
      "We structure financing solutions for healthcare providers, medical service organizations, and related businesses based on reimbursement cycles, receivables performance, recurring revenue streams, and operational cash flow requirements.",
  },
  {
    icon: "domain",
    title: "Commercial Real Estate Platforms",
    description:
      "Solutions support acquisitions, recapitalizations, transitional assets, and portfolio growth initiatives, with financing structures evaluated through asset performance, income generation, and market fundamentals.",
  },
  {
    icon: "warehouse",
    title: "Distribution & Wholesale Businesses",
    description:
      "Structures are tailored to businesses managing significant inventory positions, supplier relationships, and extended customer payment terms, helping improve working capital efficiency and liquidity management.",
  },
  {
    icon: "support_agent",
    title: "Business & Professional Services",
    description:
      "Financing solutions align with contracted revenues, recurring client relationships, project-based billing structures, and growth initiatives, supporting operational flexibility and business expansion.",
  },
];

const cities = [
  "Miami",
  "Tampa",
  "Orlando",
  "Jacksonville",
  "Fort Lauderdale",
  "St. Petersburg",
  "West Palm Beach",
  "Naples",
  "Sarasota",
  "Fort Myers",
  "Boca Raton",
  "Palm Beach Gardens",
  "Delray Beach",
  "Lakeland",
  "Gainesville",
  "Tallahassee",
  "Melbourne",
  "Clearwater",
  "Pensacola",
];

const pillars = [
  {
    icon: "tune",
    title: "Customized Capital Structuring",
    description:
      "No two businesses have identical financing requirements. We evaluate liquidity needs, collateral availability, cash flow characteristics, and growth plans to develop financing structures tailored to the specific circumstances of each transaction. The objective is to create capital solutions that support both immediate needs and long-term business goals.",
  },
  {
    icon: "query_stats",
    title: "Comprehensive Financial Analysis",
    description:
      "Every opportunity begins with a detailed review of financial performance, asset quality, operating trends, and overall capital structure. This process helps identify financing alternatives that align with business fundamentals while supporting sustainable borrowing capacity and financial flexibility.",
  },
  {
    icon: "rocket_launch",
    title: "Efficient Transaction Management",
    description:
      "We coordinate the financing process from initial evaluation through closing, helping streamline communication, due diligence, underwriting, and lender engagement. By maintaining a structured process, we work to improve execution efficiency and support timely transaction completion.",
  },
  {
    icon: "trending_up",
    title: "Long-Term Capital Perspective",
    description:
      "Financing decisions often influence future growth opportunities, acquisitions, and strategic initiatives. Our focus extends beyond a single transaction to help ensure capital structures remain aligned with evolving business requirements, changing market conditions, and long-term value creation objectives.",
  },
];

const faqs = {
  items: [
    {
      question: "What size companies does EPOCH Financial work with?",
      answer:
        "EPOCH Financial primarily works with middle-market businesses generating approximately $15 million to $1 billion+ in annual revenue. Financing opportunities are evaluated based on factors such as financial performance, collateral availability, industry dynamics, liquidity requirements, and transaction objectives.",
    },
    {
      question: "How does asset-based lending work in Florida?",
      answer:
        "Asset-based lending provides financing secured by eligible business assets such as accounts receivable, inventory, equipment, and other collateral.",
    },
    {
      question: "How does accounts receivable financing support Florida businesses?",
      answer:
        "Accounts receivable financing helps Florida businesses convert outstanding invoices into working capital that can be used for growth initiatives, operating expenses, inventory purchases, and other business requirements. This financing structure can improve liquidity while allowing companies to continue extending payment terms to customers.",
    },
  ],
};

export default function FloridaPage() {
  return (
    <>
      <JsonLd route="/service-areas/florida" />
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
                SERVICE AREA — FLORIDA
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                Middle Market Private Credit Solutions in Florida
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                Businesses across Florida operate in dynamic and competitive markets where access to flexible capital is essential for sustained growth and operational efficiency. EPOCH Financial provides private credit, accounts receivable financing, and asset-based lending solutions designed to support liquidity, working capital optimization, acquisitions, growth initiatives, and operational stability. Our financing programs are structured around each company&apos;s unique capital requirements and business objectives.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Florida Financing Opportunity
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
              Private Credit and Structured Finance Solutions in Florida
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

      {/* ─── FINANCING GUIDELINES (Florida-specific section) ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Parameters</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Our Financing Guidelines
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              To ensure the best financing outcomes, EPOCH works with established businesses that meet our general financing parameters. Every facility is customized based on the quality of receivables, customer creditworthiness, and the company&apos;s financing objectives.
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
              Industries We Serve Across Florida
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Florida&apos;s economy spans a broad range of industries, each with distinct operating cycles, capital requirements, and liquidity challenges. Financing structures must be aligned with these underlying business dynamics. We work with middle-market businesses to structure capital solutions that support working capital, growth initiatives, acquisitions, and operational stability. By evaluating each company&apos;s financial position, collateral profile, and industry dynamics, we help identify financing structures that align with both immediate capital needs and long-term business objectives.
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
              Locations We Serve in Florida
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              As one of the largest business markets in the United States, Florida continues to attract investment across logistics, healthcare, manufacturing, aerospace, construction, technology, distribution, and commercial real estate sectors. EPOCH Financial provides middle market financing in Florida through customized accounts receivable financing, asset-based lending, and private credit solutions tailored to business-specific capital requirements.
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
              Our Approach to Private Credit in Florida
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Middle-market companies across Florida operate in highly competitive and capital-intensive environments where access to the right capital solution can significantly influence growth and operational flexibility. EPOCH Financial focuses on developing customized private credit solutions that align with each company&apos;s financial profile, industry dynamics, and long-term objectives. Our approach emphasizes thoughtful structuring, disciplined analysis, and efficient execution throughout the financing process.
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
              Private Credit Solutions Across Florida
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              Access to flexible capital remains a key consideration for middle-market companies pursuing growth, acquisitions, recapitalizations, and operational expansion. EPOCH Financial works with businesses across Florida to evaluate financing alternatives that align with liquidity objectives, collateral availability, and long-term capital requirements while supporting strategic business initiatives and ongoing operational needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our Florida Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
