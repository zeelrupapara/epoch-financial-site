import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  alternates: { canonical: "/financial-services" },
  title: "Financial Services & Business Funding Solutions | EPOCH Financial",
  description:
    "Explore EPOCH Financial's senior secured credit solutions for middle market companies — accounts receivable financing, asset-based lending, and bridge financing.",
  keywords:
    "business loans, financial services, accounts receivable financing, asset-based lending, bridge financing, working capital, middle market credit",
};

const services = [
  {
    icon: "receipt_long",
    title: "Accounts Receivable Financing",
    href: "/financial-services/accounts-receivable-financing",
    description:
      "Senior secured revolving credit facilities supported by eligible receivables. Borrowing capacity is driven by receivable quality, concentration, and collection performance — providing reliable working capital without equity dilution.",
  },
  {
    icon: "inventory",
    title: "Asset-Based Lending",
    href: "/financial-services/asset-based-lending",
    description:
      "Borrowing-base facilities structured around receivables, inventory, equipment, and other eligible collateral. Built to scale with asset growth while maintaining disciplined credit parameters and balance sheet flexibility.",
  },
  {
    icon: "trending_up",
    title: "Bridge Financing",
    href: "/financial-services/bridge-financing",
    description:
      "Selective bridge capital for defined transitional liquidity needs — refinancing transitions, operational repositioning, or near-term liquidity events — aligned with forward revenue visibility and clear repayment sources.",
  },
];

export default function FinancialServicesPage() {
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
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>account_balance</span>
                FINANCIAL SERVICES
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Senior Secured Funding Solutions for Middle Market Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                EPOCH Financial structures and facilitates senior secured credit solutions anchored by accounts receivable and other eligible collateral — designed to support dependable liquidity, working capital, and long-term operating stability.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                Discuss a Financing Opportunity
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Structured Credit Solutions
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We deliver disciplined, asset-backed financing structures for middle market companies — each aligned with collateral quality, reporting transparency, and operational stability.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-border-light bg-bg-alt p-8 hover:border-primary/25 hover:bg-white hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed flex-1">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Explore Solution
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </span>
                </Link>
              </FadeUp>
            ))}
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
              Explore the Right Financing Structure
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              Connect with our team to evaluate senior secured credit solutions aligned with your receivables, collateral, and working capital objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
