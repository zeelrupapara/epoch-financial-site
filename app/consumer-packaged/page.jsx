import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import CPGFacilitiesTabs from "@/components/consumer-packaged/CPGFacilitiesTabs";
import CPGSegmentsDisplay from "@/components/consumer-packaged/CPGSegmentsDisplay";

export const metadata = {
  title: "CPG Credit Facilities for Middle Market Companies",
  description:
    "Credit facilities for middle market consumer packaged goods companies, aligned with receivables, inventory, and multi-channel distribution.",
  keywords:
    "consumer packaged goods industry, consumer packaged goods, consumer product goods, cpg finance, middle market CPG financing, consumer packaged goods financing, CPG credit facilities, asset-based lending CPG, receivables financing CPG, inventory financing CPG companies, working capital financing CPG, structured credit CPG companies, CPG revolving credit facility, borrowing base financing CPG",
};

const benefits = [
  {
    icon: "account_balance_wallet",
    title: "Improved Working Capital Efficiency",
    description:
      "Financing solutions enable access to liquidity tied up in receivables and inventory, enabling CPG companies to maintain consistent liquidity across production and distribution cycles. This improves cash flow visibility and supports smoother day-to-day operations.",
  },
  {
    icon: "inventory_2",
    title: "Support for Inventory and Production Cycles",
    description:
      "Access to structured capital allows businesses to invest in raw materials, manage production schedules, and maintain optimal inventory levels. This supports continuous supply and timely fulfillment of retail and wholesale demand.",
  },
  {
    icon: "schedule",
    title: "Flexibility to Manage Retail Payment Terms",
    description:
      "Extended payment cycles from retailers can create cash flow gaps. Financing bridges this gap by improving liquidity timing, allowing companies to operate without disruption while maintaining strong customer relationships.",
  },
  {
    icon: "trending_up",
    title: "Scalable Capital Aligned with Growth",
    description:
      "As revenue and operations expand, financing facilities can scale accordingly. This provides ongoing access to capital that aligns with business growth, new product launches, and market expansion strategies.",
  },
  {
    icon: "hub",
    title: "Enhanced Supply Chain Stability",
    description:
      "Reliable financing supports procurement, manufacturing, and distribution activities, reducing operational bottlenecks. This strengthens the overall supply chain and improves the company's ability to respond to demand fluctuations.",
  },
  {
    icon: "savings",
    title: "Reduced Pressure on Internal Cash Reserves",
    description:
      "By leveraging external financing, businesses can preserve internal cash for strategic initiatives such as marketing, innovation, and expansion, rather than tying it up in working capital requirements.",
  },
];

const whyEpoch = [
  {
    title: "CPG-Focused Expertise",
    description:
      "Deep understanding of consumer packaged goods operations, including inventory cycles, receivables dynamics, and multi-channel distribution, ensures financing solutions are aligned with production demands and retail execution requirements.",
  },
  {
    title: "Customized Structuring",
    description:
      "Each financing solution is tailored to receivables quality, inventory composition, and sales channels, ensuring capital structures align with operating models, growth strategies, and evolving market conditions.",
  },
  {
    title: "Middle Market Specialization",
    description:
      "Focused on companies operating beyond conventional bank thresholds, supporting flexible capital strategies designed to align with growth-stage CPG businesses with complex working capital and supply chain requirements.",
  },
  {
    title: "Disciplined Execution",
    description:
      "Consistent delivery through disciplined evaluation processes and transparent execution, and defined timelines supports consistent capital availability across operational and growth initiatives, enabling businesses to execute production, distribution, and expansion strategies without disruption.",
  },
  {
    title: "Long-Term Capital Alignment",
    description:
      "Ongoing support across growth phases, product expansion, and market development ensures capital solutions remain aligned with long-term strategic objectives and operational scalability.",
  },
];

const faqs = {
  intro:
    "Everything you need to know about consumer packaged goods financing. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "What types of CPG companies can benefit from financing solutions?",
      answer:
        "Financing solutions are designed for a broad range of consumer packaged goods companies, including manufacturers, brand owners, private label producers, and multi-channel distributors. Businesses with consistent revenue, established retail relationships, and scalable operations are typically well-positioned to benefit from structured capital.",
    },
    {
      question: "What financing structures are commonly used in the CPG industry?",
      answer:
        "Common structures include accounts receivable financing, inventory financing, and asset-based lending facilities. These solutions are often structured as revolving lines of credit or hybrid facilities, allowing businesses to access liquidity based on receivables and inventory levels.",
    },
    {
      question: "How is borrowing capacity determined for CPG companies?",
      answer:
        "Financing capacity is typically influenced by the quality of receivables, inventory valuation, customer concentration, and historical revenue performance. Additional considerations include operational consistency, reporting transparency, and overall financial strength.",
    },
    {
      question: "Can financing support seasonal demand and product launches?",
      answer:
        "Yes, structured financing solutions are designed to provide flexibility for seasonal demand fluctuations, promotional cycles, and new product launches. Facilities can scale with increased inventory requirements and higher sales volumes during peak periods.",
    },
  ],
};

export default function ConsumerPackagedPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/consumerpackage.jfif")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>shopping_bag</span>
                CONSUMER PACKAGED GOODS INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Middle Market Financing for Consumer Product Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Middle market consumer packaged goods companies require scalable liquidity solutions through middle market CPG financing to manage inventory, production, and distribution cycles. Consumer packaged goods financing solutions provide liquidity, align capital with cash flow, and support operational scale across production and distribution cycles.
              </p>
              <Link
                href="#opportunity"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Evaluate a Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROLE OF CREDIT FACILITIES ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">

          <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 pb-10 border-b border-border-light">
            <div className="flex flex-col gap-3 max-w-2xl">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest">Overview</p>
              <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight">
                Role of Credit Facilities in CPG Operations
              </h2>
              <div className="w-12 h-1 rounded-full bg-primary" />
            </div>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-lg">
              Capital aligned with receivables, inventory, and multi-channel distribution cycles.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeUp delay={80}>
              <div
                className="bg-bg-alt rounded-2xl p-7 flex gap-5 items-start h-full"
                style={{ border: "1px solid #e5e7eb", borderLeft: "4px solid #0DA2E7" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>inventory_2</span>
                </div>
                <p className="text-body-gray text-sm leading-relaxed">
                  Consumer packaged goods companies operate within complex supply chains where capital is allocated across inventory, production, and receivables. CPG credit facilities are structured against receivables and inventory to provide liquidity across operating cycles.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={160}>
              <div
                className="bg-bg-alt rounded-2xl p-7 flex gap-5 items-start h-full"
                style={{ border: "1px solid #e5e7eb", borderLeft: "4px solid #0DA2E7" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>local_shipping</span>
                </div>
                <p className="text-body-gray text-sm leading-relaxed">
                  Facilities support procurement, manufacturing, and distribution activities, aligned with receivables performance and inventory turnover.
                </p>
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ─── CORE FINANCING SOLUTIONS ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Financing Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Core Financing Solutions for Consumer Packaged Goods Companies
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-10">
              EPOCH Financial structures credit facilities designed specifically for consumer packaged goods companies, including manufacturers, brand owners, and distributors requiring disciplined and scalable funding across complex supply chains.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <CPGFacilitiesTabs />
          </FadeUp>
        </div>
      </section>

      {/* ─── AR FINANCING CTA CONNECTOR ─── */}
      <section className="bg-white 2xl:px-6 lg:px-16 md:px-12 px-4 py-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>receipt_long</span>
              </span>
              <div>
                <p className="text-secondary font-bold text-base">Access AR Financing for Consumer Packaged Goods Companies</p>
                <p className="text-body-gray text-sm mt-0.5">Structured receivables facilities aligned with retailer and distributor payment cycles.</p>
              </div>
            </div>
            <Link
              href="/ar-financing"
              className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b8fcc] transition-colors shadow-sm"
            >
              Discuss a Financing Structure
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CORE SEGMENTS ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industry Segments</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Core Segments Across the CPG Industry
            </h2>
          </FadeUp>
          <FadeUp delay={160}>
            <CPGSegmentsDisplay />
          </FadeUp>
        </div>
      </section>

      {/* ─── TYPICAL FINANCING RANGE ─── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-6 text-center">Transaction Profile</p>
            <h2 className="text-white 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12 text-center">
              Typical Financing Range for Consumer Packaged Goods Industry
            </h2>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-12">
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[48px] lg:text-[38px] text-[32px] font-black leading-none mb-2">$3M+</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Loan Size</span>
              </div>
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[48px] lg:text-[38px] text-[32px] font-black leading-none mb-2">$15M+</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Annual Revenue</span>
              </div>
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[48px] lg:text-[38px] text-[32px] font-black leading-none mb-2">Middle Market</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Focus</span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="border-t border-white/10 pt-8 max-w-3xl mx-auto text-center">
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-2">
                Borrowing base facilities are structured for middle market consumer packaged goods companies operating within defined capital parameters.
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                Borrowers include manufacturers, brand owners, private label producers, and sponsor-backed CPG platforms. Each facility is structured using borrowing base financing CPG methodologies based on receivables quality, inventory profile, and distribution channels.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Benefits of Financing for CPG Companies
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Credit facilities provide CPG companies with liquidity, flexibility, and scalability to manage operations efficiently while supporting growth and maintaining stability across supply chain cycles.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`flex gap-6 py-8 px-0 md:px-6 ${
                    i % 2 === 0 ? "md:border-r border-border-light" : ""
                  } ${
                    i < benefits.length - 2 ? "border-b border-border-light" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 24 }}>{b.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-secondary font-bold text-base mb-2">{b.title}</h3>
                    <p className="text-body-gray text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── WHY EPOCH ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          {/* Top: heading + image */}
          <FadeUp delay={80}>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-14">
              <div className="lg:w-[48%] shrink-0">
                <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Advantage</p>
                <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
                  Why EPOCH Financial Is a Strategic Partner for CPG Financing
                </h2>
                <p className="text-body-gray text-sm md:text-base leading-relaxed mb-6">
                  EPOCH Financial works alongside consumer packaged goods companies requiring structured and scalable financing frameworks across complex production, inventory, and distribution environments.
                </p>
              </div>
              <div className="w-full lg:w-[52%] relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[320px] lg:min-h-[340px] shrink-0">
                <img
                  src="/assets/images/consumer.jpg"
                  alt="Strategic capital solutions for CPG companies"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-secondary text-[12px] font-semibold shadow-sm">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 15 }}>verified</span>
                    Middle Market Specialist
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Right: numbered stacked list */}
            <FadeUp className="flex-1" delay={160}>
              <div className="flex flex-col">
                {whyEpoch.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex gap-6 md:gap-8 py-7 border-b border-border-light last:border-b-0 group"
                  >
                    <div className="text-[44px] md:text-[52px] font-black text-primary/15 leading-none shrink-0 w-14 md:w-16 select-none group-hover:text-primary/25 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-secondary font-bold text-base md:text-lg mb-2">{item.title}</h3>
                      <p className="text-body-gray text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC CAPITAL SOLUTIONS CTA ─── */}
      <section
        id="opportunity"
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgb(17 55 95 / 88%), rgb(17 55 95 / 94%)), url("/assets/images/warehouse.jpg")',
        }}
      >
        <div className="mx-auto max-w-[1600px] relative z-10">
          <FadeUp delay={80}>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
              <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
                Strategic Capital Solutions for Consumer Packaged Goods Companies
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                Consumer packaged goods companies require consistent access to capital to support production cycles, manage inventory, and execute across complex, multi-channel distribution networks.
              </p>
              <p className="text-white/55 text-sm md:text-base leading-relaxed mb-10">
                Structured financing frameworks are designed to align with the working capital dynamics of middle market CPG businesses, enabling operational efficiency and scalable growth.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
              >
                Contact Our Team
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={faqs} />
    </>
  );
}
