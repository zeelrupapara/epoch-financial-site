import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/service-areas/alabama");

const solutions = [
  {
    "icon": "receipt_long",
    "title": "Accounts Receivable Financing (AR)",
    "paragraphs": [
      "Many Alabama middle-market businesses carry substantial amounts of working capital within their accounts receivable portfolios. As payment cycles lengthen and liquidity demands evolve, we help companies convert outstanding invoices into accessible working capital through customized accounts receivable financing solutions. This approach can improve cash flow efficiency while providing the financial flexibility needed to support ongoing operations and growth initiatives.",
      "We structure facilities based on a detailed assessment of receivables quality, customer payment performance, concentration levels, and overall portfolio strength to align financing capacity with each company's business objectives."
    ]
  },
  {
    "icon": "inventory",
    "title": "Asset-Based Lending (ABL)",
    "paragraphs": [
      "For businesses with significant asset value, asset-based lending can provide a flexible and scalable source of capital supported by accounts receivable, inventory, equipment, and other eligible collateral. We structure customized ABL facilities designed to maximize borrowing availability while supporting liquidity management and long-term growth strategies.",
      "Our financing solutions are tailored to each company's asset profile, operational requirements, and capital objectives, helping businesses access additional liquidity for expansion initiatives, acquisitions, inventory investments, and other strategic opportunities."
    ]
  },
  {
    "icon": "trending_up",
    "title": "Bridge and Transitional Capital",
    "paragraphs": [
      "Strategic transactions and business transitions often create immediate capital requirements that cannot always be addressed through conventional financing channels. We structure bridge and transitional capital solutions for Alabama businesses pursuing acquisitions, refinancing events, recapitalizations, turnaround initiatives, ownership transitions, and other time-sensitive opportunities.",
      "Each financing facility is customized around the company's liquidity needs, transaction timeline, collateral profile, and overall capital strategy. Our objective is to provide flexible short-term financing solutions that help management teams execute critical initiatives while maintaining operational stability and financial flexibility."
    ]
  }
];

const guidelines = [
  {
    "label": "Annual Business Revenue",
    "value": "$15 million to $1 billion+"
  },
  {
    "label": "Financing Requirement",
    "value": "$3 million to $75 million+"
  },
  {
    "label": "Advance Rate",
    "value": "Up to 85% to 90% of eligible accounts receivable"
  },
  {
    "label": "Financing Rates",
    "value": "Typically start from 0.75%, with pricing tailored to the transaction structure and risk profile"
  },
  {
    "label": "Funding Timeline",
    "value": "Expedited approvals and funding following due diligence and collateral review"
  },
  {
    "label": "Geographic Coverage",
    "value": "Financing available for qualified businesses throughout Alabama, including Birmingham, Huntsville, Mobile, Montgomery, Tuscaloosa, Auburn, Dothan, Decatur, Hoover, Madison, and other major commercial markets"
  }
];

const industries = [
  {
    "icon": "factory",
    "title": "Manufacturing & Industrial Businesses",
    "description": "We structure financing solutions for manufacturers and industrial companies based on production cycles, inventory requirements, supply chain demands, and working capital needs, helping businesses maintain liquidity while supporting operational growth."
  },
  {
    "icon": "flight",
    "title": "Automotive & Aerospace Companies",
    "description": "Alabama's automotive and aerospace sectors often require capital to support production schedules, equipment investments, supplier relationships, and expansion initiatives. We structure financing facilities aligned with these unique operating requirements."
  },
  {
    "icon": "local_shipping",
    "title": "Transportation & Logistics",
    "description": "Transportation and logistics companies face ongoing working capital demands related to fleet operations, freight cycles, and customer payment terms. We provide financing solutions designed to support liquidity and operational efficiency."
  },
  {
    "icon": "medical_services",
    "title": "Healthcare & Medical Services",
    "description": "We work with healthcare providers and medical service organizations to structure financing solutions based on receivables performance, reimbursement cycles, and operational cash flow requirements."
  },
  {
    "icon": "domain",
    "title": "Commercial Real Estate Platforms",
    "description": "Financing structures support acquisitions, recapitalizations, transitional assets, and portfolio growth initiatives, with solutions tailored to asset performance and investment objectives."
  },
  {
    "icon": "warehouse",
    "title": "Distribution & Wholesale Businesses",
    "description": "We structure financing solutions for distribution and wholesale companies managing significant inventory positions, supplier relationships, and extended customer payment cycles, helping improve liquidity and working capital efficiency."
  }
];

const cities = [
  "Birmingham",
  "Huntsville",
  "Montgomery",
  "Mobile",
  "Tuscaloosa",
  "Auburn",
  "Hoover",
  "Decatur",
  "Dothan",
  "Madison"
];

const pillars = [
  {
    "icon": "tune",
    "title": "Customized Financing Structures",
    "description": "No two businesses have identical capital requirements. We evaluate liquidity needs, collateral availability, cash flow characteristics, and growth plans to structure financing solutions tailored to the specific circumstances of each company. Our objective is to support both immediate funding requirements and long-term business goals."
  },
  {
    "icon": "query_stats",
    "title": "Comprehensive Financial Analysis",
    "description": "Every opportunity begins with a detailed review of financial performance, asset quality, operating trends, and overall capital structure. This process helps identify financing alternatives that align with business fundamentals while supporting financial flexibility and sustainable growth."
  },
  {
    "icon": "rocket_launch",
    "title": "Efficient Transaction Management",
    "description": "We coordinate the financing process from initial evaluation through closing, helping streamline due diligence, underwriting, documentation, and financing discussions. By maintaining a structured process, we support efficient execution and timely transaction completion."
  },
  {
    "icon": "trending_up",
    "title": "Long-Term Capital Perspective",
    "description": "Financing decisions often influence future growth opportunities, acquisitions, and strategic initiatives. Our focus extends beyond a single transaction to help ensure financing structures remain aligned with evolving business requirements and long-term value creation objectives."
  }
];

const faqs = {
  "items": [
    {
      "question": "Is financing available throughout Alabama?",
      "answer": "Yes. EPOCH Financial serves qualified businesses across Alabama, including Birmingham, Huntsville, Mobile, Montgomery, Tuscaloosa, Auburn, Dothan, Decatur, Hoover, Madison, and other major commercial markets."
    },
    {
      "question": "Can accounts receivable financing be structured alongside an existing lending relationship?",
      "answer": "In many cases, yes. Receivables financing can often complement an existing senior credit facility or be incorporated into a broader capital structure, subject to lender requirements and transaction terms."
    },
    {
      "question": "What information is reviewed during underwriting?",
      "answer": "The underwriting process typically evaluates the accounts receivable portfolio, customer credit profiles, financial performance, industry risk, and the company's financing objectives to determine the appropriate facility structure."
    },
    {
      "question": "Why do Alabama businesses choose EPOCH Financial?",
      "answer": "Businesses choose EPOCH Financial for customized financing structures, institutional underwriting expertise, competitive pricing, and facilities designed to align with each company's receivables portfolio, capital requirements, and long-term growth strategy."
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd route="/service-areas/alabama" />
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
                SERVICE AREA — ALABAMA
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                {"Commercial Accounts Receivable Financing, ABL & Private Credit for Alabama Companies"}
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                {"Alabama businesses operate across industries where maintaining liquidity and access to flexible capital can support growth, acquisitions, and day-to-day operations. EPOCH Financial provides accounts receivable financing, asset-based lending, and private credit solutions tailored to the unique needs of middle-market companies, helping strengthen cash flow, working capital, and overall financial flexibility."}
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Alabama Financing Opportunity
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
              {"Middle-Market Private Credit and Structured Finance Solutions in Alabama"}
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
              {"EPOCH Financial works with established Alabama businesses to provide financing solutions that strengthen working capital and support long term growth. We tailor each facility based on the quality of eligible receivables, customer credit profiles, industry risk, and the company's financing goals, creating structures that align with operational and strategic priorities."}
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
              Industries We Serve Across Alabama
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              {"Alabama's economy is driven by industries that require reliable access to working capital and flexible financing solutions to support growth, acquisitions, and operational stability. We work with middle-market businesses across the state, structuring capital solutions based on each company's financial profile, collateral availability, and industry-specific requirements."}
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
              Locations We Serve in Alabama
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              {"Alabama continues to attract investment across manufacturing, automotive, aerospace, logistics, healthcare, and commercial real estate sectors, creating ongoing demand for flexible capital solutions. We work with middle-market businesses throughout the state, providing customized financing solutions designed to support working capital requirements, growth initiatives, acquisitions, and other strategic business objectives."}
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
              Our Approach to Private Credit in Alabama
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              {"Middle-market companies across Alabama operate in competitive industries where access to the right capital solution can support growth, liquidity, and operational flexibility. We focus on developing customized financing solutions that align with each company's financial profile, industry dynamics, and long-term objectives. Our approach emphasizes thoughtful structuring, detailed analysis, and efficient execution throughout the financing process."}
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
              {"Strategic Private Credit Solutions for Alabama Companies"}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              {"Capital requirements can evolve quickly as businesses pursue expansion, acquisitions, operational investments, or other strategic initiatives. We work closely with middle-market companies across Alabama to evaluate financing opportunities and develop customized capital solutions that align with their objectives. Connect with our team to discuss your funding requirements and explore financing structures designed to support both near-term priorities and long-term growth."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our Alabama Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
