import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/financial-services/strategic-capital");

const solutions = [
  {
    icon: "handshake",
    title: "Acquisition Financing",
    description:
      "Acquisition financing can support the purchase of a business, division, asset base, or strategic platform. We evaluate the target's receivables, assets, cash flow, customer base, and operating history, then structure a financing solution that supports closing and post-transaction liquidity. May include senior secured debt, asset-based lending, term debt, bridge capital, or structured private credit.",
  },
  {
    icon: "trending_up",
    title: "Recapitalization Financing",
    description:
      "Recapitalization financing may refinance existing debt, improve liquidity, restructure the balance sheet, fund shareholder liquidity, or create additional operating flexibility. We assess borrowing capacity, collateral strength, repayment sources, and lender options to build a more durable capital structure aligned with long-term objectives.",
  },
  {
    icon: "group_work",
    title: "Partner and Shareholder Buyouts",
    description:
      "Ownership transitions often require capital that traditional banks may not provide quickly or in sufficient size. We assist with partner buyouts, shareholder liquidity events, management-led transactions, and sponsor-backed ownership changes. Facilities are structured around available collateral, cash flow, enterprise value, and post-transaction debt service capacity.",
  },
  {
    icon: "shield",
    title: "Special Situation and Transitional Credit",
    description:
      "Special situation financing may be appropriate during rapid growth, lender fatigue, covenant pressure, customer concentration, acquisition integration, refinancing deadlines, or temporary earnings disruption. We identify the strongest supportable structure based on receivables, inventory, equipment, real estate, cash flow, and transaction-specific repayment sources.",
  },
];

const capitalStructures = [
  "Senior secured credit facilities",
  "Asset-based lending facilities",
  "Accounts receivable-backed revolvers",
  "Unitranche credit facilities",
  "Term loans",
  "Bridge financing",
  "Mezzanine or subordinated debt",
  "Sale-leaseback financing",
  "Stretch senior structures",
  "Refinancing and lender replacement solutions",
];

const useCases = [
  "Business acquisitions",
  "Management buyouts",
  "Partner or shareholder buyouts",
  "Refinancing existing debt",
  "Recapitalizations",
  "Growth initiatives",
  "Turnaround or transition situations",
  "Bank replacement financing",
  "Covenant pressure or maturity deadlines",
  "Complex collateral or non-traditional structures",
  "Sponsor-backed or independent company transactions",
];

const approachItems = [
  "Supportable debt capacity",
  "Appropriate capital structure",
  "Collateral and borrowing base strength",
  "Lender fit",
  "Likely financing terms",
  "Required due diligence materials",
  "Execution strategy",
];

export default function StrategicCapitalSolutionsPage() {
  return (
    <>
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
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>auto_awesome</span>
                STRATEGIC CAPITAL
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                Strategic Capital Solutions for Acquisitions, Recapitalizations &amp; Special Situations
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                EPOCH Financial structures and facilitates strategic capital solutions for middle market companies facing acquisition, recapitalization, refinancing, ownership transition, or special situation financing needs. Transactions typically start at $20 million and may exceed $200 million.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Strategic Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <FadeUp delay={80}>
                <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Overview</p>
                <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight">
                  Strategic Capital Solutions for Middle Market Companies
                </h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              <FadeUp delay={120}>
                <p className="text-body-gray text-sm md:text-base leading-relaxed">
                  EPOCH Financial structures and facilitates strategic capital solutions for middle market companies facing acquisition, recapitalization, refinancing, ownership transition, or special situation financing needs. Transactions typically start at $20 million and may exceed $200 million, depending on the company&apos;s credit profile, collateral base, cash flow, transaction structure, and lender appetite.
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-body-gray text-sm md:text-base leading-relaxed">
                  While many companies require traditional working capital, certain transactions demand a broader capital strategy. These situations may involve a combination of senior secured credit, asset-based lending, unitranche financing, subordinated debt, bridge capital, or other structured private credit solutions.
                </p>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="text-body-gray text-sm md:text-base leading-relaxed">
                  Our role is to evaluate the company, collateral base, cash flow profile, transaction objective, and repayment visibility, then structure a lender-ready financing package aligned with institutional credit standards.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">What We Structure</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Financing Solutions for Complex Transactions
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Middle market companies often need capital for events that do not fit neatly into traditional bank lending. EPOCH helps companies and sponsors evaluate financing alternatives for transactions involving growth, transition, restructuring, or ownership change.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="flex gap-5 rounded-2xl border border-border-light bg-white p-8 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-secondary font-bold text-lg leading-snug">{s.title}</h3>
                    <p className="text-body-gray text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPITAL STRUCTURES ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Available Structures</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Capital Structures We Help Facilitate
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Each financing is evaluated based on the company&apos;s capital need, credit profile, collateral base, and execution timeline. The appropriate structure depends on collateral quality, cash flow durability, leverage tolerance, transaction purpose, and lender appetite.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {capitalStructures.map((item, i) => (
              <FadeUp key={item} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-xl border border-border-light bg-bg-alt px-5 py-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>check_circle</span>
                  <span className="text-secondary font-semibold text-sm">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHEN APPROPRIATE ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              When Strategic Capital May Be Appropriate
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Strategic capital solutions may be suitable for companies seeking financing for any of the following situations.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {useCases.map((item, i) => (
              <FadeUp key={item} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-xl border border-border-light bg-white px-5 py-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>flag</span>
                  <span className="text-secondary font-semibold text-sm">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <FadeUp delay={80}>
                <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Approach</p>
                <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
                  Lender-Ready, Credit-Focused Execution
                </h2>
                <p className="text-body-gray text-sm md:text-base leading-relaxed">
                  EPOCH begins with a detailed review of the company&apos;s financial statements, accounts receivable, collateral base, debt structure, operating performance, and transaction objective. The goal is to present the opportunity clearly, professionally, and credibly to lenders capable of understanding middle market complexity.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={120}>
                <p className="text-body-gray text-[11px] font-semibold uppercase tracking-widest mb-4">From there, we help determine</p>
              </FadeUp>
              <div className="flex flex-col gap-3">
                {approachItems.map((item, i) => (
                  <FadeUp key={item} delay={i * 50}>
                    <div className="flex items-center gap-4 rounded-xl border border-border-light bg-bg-alt px-5 py-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">{i + 1}</span>
                      <span className="text-secondary font-semibold text-sm md:text-base">{item}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR MIDDLE MARKET ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-4xl">
            <FadeUp delay={80}>
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Focus</p>
              <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-6">
                Built for Middle Market Execution
              </h2>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-body-gray text-sm md:text-base leading-relaxed mb-4">
                EPOCH focuses on established middle market companies and transaction opportunities generally ranging from <strong className="text-secondary">$20 million to $200 million+</strong>, with an emphasis on structured credit, private credit, and lender-ready execution. Our focus is on businesses with meaningful revenue, commercial receivables, operating history, and a defined capital need.
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-body-gray text-sm md:text-base leading-relaxed">
                We are particularly effective in situations where the company has a real asset base, institutional customers, recurring revenue, strong receivables, or a transaction that requires experienced private credit execution.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

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
              Discuss a Strategic Financing Opportunity
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              If your company is evaluating an acquisition, recapitalization, refinancing, ownership transition, or special situation financing need, EPOCH Financial can help assess the opportunity and structure a capital solution aligned with lender expectations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Discuss a Financing Opportunity
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
