import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/service-areas/california");

const solutions = [
  {
    "icon": "receipt_long",
    "title": "Accounts Receivable Financing (AR)",
    "paragraphs": [
      "California middle-market companies often experience working capital constraints due to extended payment terms, seasonal fluctuations, or rapid growth. We help businesses unlock liquidity from outstanding receivables through customized accounts receivable financing solutions that convert unpaid invoices into immediate working capital. This additional liquidity can support day-to-day operations, growth initiatives, and strategic investments without waiting for customer payments.",
      "Our facilities are structured around receivables quality, customer diversification, payment performance, and overall portfolio strength to provide financing solutions aligned with each company's operational and financial objectives."
    ]
  },
  {
    "icon": "inventory",
    "title": "Asset-Based Lending (ABL)",
    "paragraphs": [
      "For California businesses with valuable asset portfolios, asset-based lending can provide a flexible source of capital secured by accounts receivable, inventory, equipment, and other eligible assets. We structure customized ABL facilities that help maximize borrowing capacity while supporting liquidity management, operational flexibility, and long-term growth objectives.",
      "Each financing solution is designed around the company's collateral profile, capital requirements, and business strategy, providing access to working capital for expansion projects, acquisitions, inventory purchases, and other strategic initiatives."
    ]
  },
  {
    "icon": "trending_up",
    "title": "Private Credit Solutions",
    "paragraphs": [
      "California middle-market companies often require financing structures that extend beyond traditional bank lending. We provide customized private credit solutions for businesses seeking growth capital, acquisition financing, recapitalizations, refinancing opportunities, and other complex financing requirements. Our approach focuses on delivering flexible capital structures that align with each company's unique operational and strategic goals.",
      "Every facility is tailored to the borrower's cash flow profile, capital needs, transaction objectives, and overall business strategy, helping management teams secure the financing required to execute growth plans and navigate evolving market conditions."
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
    "label": "Industries Served",
    "value": "Manufacturing, technology, logistics, wholesale distribution, food and beverage, healthcare, aerospace, life sciences, apparel, and other commercial sectors"
  },
  {
    "label": "Geographic Coverage",
    "value": "Financing available for qualified businesses throughout California, including Los Angeles, San Diego, San Jose, San Francisco, Sacramento, Fresno, Oakland, Irvine, Anaheim, Long Beach, and other major commercial markets"
  }
];

const industries = [
  {
    "icon": "memory",
    "title": "Technology & Software Companies",
    "description": "California's technology sector often requires capital to support growth initiatives, product development, acquisitions, and operational scaling. We help businesses access financing solutions that align with evolving revenue models, working capital requirements, and strategic expansion plans."
  },
  {
    "icon": "factory",
    "title": "Manufacturing & Industrial Enterprises",
    "description": "Manufacturers and industrial businesses frequently require capital to support production activities, equipment investments, inventory management, and facility expansion. We structure financing solutions designed to improve liquidity while supporting operational efficiency and long-term growth objectives."
  },
  {
    "icon": "medical_services",
    "title": "Healthcare & Life Sciences",
    "description": "Healthcare providers, medical organizations, and life sciences companies operate in an environment influenced by reimbursement timelines, regulatory requirements, and ongoing investment needs. We develop financing solutions that support cash flow management and organizational growth."
  },
  {
    "icon": "local_shipping",
    "title": "Transportation, Logistics & Supply Chain Businesses",
    "description": "Companies involved in transportation, warehousing, and logistics often face significant working capital demands related to operations, equipment, and customer payment cycles. Our financing solutions are designed to enhance liquidity and support continued business expansion."
  },
  {
    "icon": "warehouse",
    "title": "Distribution & Wholesale Companies",
    "description": "Distribution businesses require access to capital to manage inventory levels, supplier obligations, and customer receivables. We structure financing facilities that help improve working capital efficiency while supporting growth and operational flexibility."
  },
  {
    "icon": "domain",
    "title": "Commercial Real Estate & Investment Platforms",
    "description": "Real estate investors, developers, and commercial property operators often require financing to support acquisitions, portfolio expansion, refinancing initiatives, and transitional opportunities. We structure capital solutions tailored to investment strategies, asset performance, and transaction objectives."
  }
];

const cities = [
  "Los Angeles",
  "San Diego",
  "San Jose",
  "San Francisco",
  "Sacramento",
  "Fresno",
  "Oakland",
  "Long Beach",
  "Irvine",
  "Anaheim"
];

const pillars = [
  {
    "icon": "tune",
    "title": "Strategic Capital Planning",
    "description": "Effective financing begins with understanding how capital supports broader business goals. We work closely with management teams to evaluate growth initiatives, liquidity requirements, and transaction objectives, helping structure financing solutions that align with both near-term priorities and long-term strategic plans."
  },
  {
    "icon": "query_stats",
    "title": "Industry-Focused Evaluation",
    "description": "Every industry presents unique operational and financial considerations. We assess business performance, revenue drivers, asset composition, market position, and industry-specific risks to identify financing structures that support stability, scalability, and future growth opportunities."
  },
  {
    "icon": "rocket_launch",
    "title": "Flexible Execution Process",
    "description": "Financing transactions often require coordination among multiple stakeholders and advisors. We maintain a disciplined process that helps facilitate due diligence, financing evaluations, lender engagement, and transaction execution, allowing businesses to move forward with greater efficiency and confidence."
  },
  {
    "icon": "trending_up",
    "title": "Growth-Oriented Financing Solutions",
    "description": "Capital requirements evolve as companies expand, pursue acquisitions, invest in operations, or respond to changing market conditions. We focus on structuring financing solutions that provide flexibility today while supporting future business objectives, helping companies remain well-positioned for continued growth and value creation."
  }
];

const faqs = {
  "items": [
    {
      "question": "Can accounts receivable financing support growth initiatives?",
      "answer": "Yes. Many California businesses use accounts receivable financing to fund expansion, increase inventory, hire employees, support larger customer contracts, or strengthen working capital without relying solely on traditional bank financing."
    },
    {
      "question": "Does EPOCH Financial finance businesses throughout California?",
      "answer": "Yes. We provide financing solutions for qualified businesses across California, including Los Angeles, San Diego, San Francisco, San Jose, Sacramento, Fresno, Oakland, Irvine, Long Beach, and other major commercial markets."
    },
    {
      "question": "How quickly can a financing facility be completed?",
      "answer": "The timeline depends on transaction complexity, due diligence, and collateral review. Once underwriting requirements are satisfied, financing can be completed through an expedited execution process."
    },
    {
      "question": "Can accounts receivable financing complement an existing lending relationship?",
      "answer": "Yes. It can often be structured alongside senior credit facilities or incorporated into a broader capital strategy, depending on the company's existing debt structure and financing objectives."
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd route="/service-areas/california" />
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
                SERVICE AREA — CALIFORNIA
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                {"Private Credit for California Middle Market Companies"}
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                {"As California companies navigate expansion, acquisitions, and evolving market conditions, access to flexible capital becomes increasingly important. EPOCH Financial structures accounts receivable financing, ABL, and private credit facilities that align with business objectives, strengthen cash flow, and support long-term value creation."}
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a California Financing Opportunity
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
              {"Customized Private Credit Solutions for California Companies"}
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
              {"EPOCH Financial provides tailored financing solutions to established businesses throughout California. We partner with organizations that possess robust commercial receivables and operational needs aligned with our underwriting criteria. Each facility is meticulously structured to reflect the quality of your accounts receivable portfolio, customer credit profiles, specific industry dynamics, and long-term growth objectives."}
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
              Industries We Serve Across California
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              {"California's diverse economy creates unique financing requirements across a wide range of industries. We work with middle-market companies seeking flexible capital solutions to strengthen liquidity, support expansion initiatives, manage operational demands, and pursue strategic opportunities. Each financing structure is customized based on industry dynamics, asset availability, cash flow characteristics, and long-term business objectives."}
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
              Locations We Serve in California
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              {"As one of the largest economies in the world, California is home to a broad range of middle-market businesses operating across technology, healthcare, manufacturing, logistics, distribution, and commercial real estate. The state's dynamic business environment often requires flexible capital solutions to support growth, acquisitions, working capital management, and strategic transactions. We work with companies throughout California, structuring customized financing solutions designed to meet evolving operational and financial objectives."}
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
              Our Approach to Private Credit in California
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              {"California's middle-market businesses operate in one of the most dynamic and diverse economic environments in the country. Whether navigating expansion opportunities, acquisitions, market shifts, or changing capital needs, companies often require financing solutions that can adapt to evolving business conditions. Our approach focuses on delivering flexible private credit solutions designed to support liquidity, operational performance, and long-term growth objectives."}
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
              {"Discuss Your California Business Financing Needs"}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              {"Middle-market companies often require financing solutions that align with changing business priorities and growth opportunities. EPOCH Financial helps California businesses evaluate capital options and structure customized financing solutions tailored to their operational and strategic objectives. Connect with our team to explore financing alternatives designed to strengthen liquidity, support expansion, and position your business for long-term success."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our California Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
