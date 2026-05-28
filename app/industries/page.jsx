import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  alternates: { canonical: "/industries" },
  title: "Structured Credit Solutions for Middle Market Industries",
  description:
    "EPOCH Financial provides structured credit solutions for manufacturing, staffing, logistics, healthcare, and other middle market industries.",
  keywords:
    "structured credit, middle market industries, manufacturing finance, staffing finance, logistics finance, healthcare finance, government contracting, working capital",
};

const industries = [
  {
    icon: "factory",
    title: "Manufacturing",
    href: "/industries/manufacturing-financing",
    description:
      "Structured credit solutions designed to support production cycles, supplier obligations, inventory management, and receivable-backed liquidity requirements for operationally established manufacturing companies.",
  },
  {
    icon: "warehouse",
    title: "Distribution",
    href: "/industries/distribution-logistics-financing",
    description:
      "Working capital structures aligned with recurring invoicing environments, inventory movement, customer payment cycles, and scalable operational liquidity requirements across distribution businesses.",
  },
  {
    icon: "local_shipping",
    title: "Logistics and Transportation",
    href: "/industries/transportation-freight-financing",
    description:
      "Receivable-based credit solutions supporting transportation companies managing contract revenue, operating expenses, fleet obligations, and ongoing working capital requirements.",
  },
  {
    icon: "groups",
    title: "Staffing",
    href: "/industries/business-services",
    description:
      "Structured financing solutions supporting payroll timing, recurring customer invoicing, contract staffing expansion, and liquidity stability for staffing and workforce management companies.",
  },
  {
    icon: "account_balance",
    title: "Government Contracting",
    href: "/industries/government-contract-financing",
    description:
      "Working capital advisory solutions aligned with government receivable structures, procurement requirements, contract execution timelines, and operational funding needs.",
  },
  {
    icon: "support_agent",
    title: "Service Companies",
    href: "/industries/business-services",
    description:
      "Senior secured credit solutions for service-based companies with recurring commercial revenue, established client relationships, and consistent receivable generation.",
  },
  {
    icon: "medical_services",
    title: "Healthcare and Medical",
    href: "/industries/healthcare-financing",
    description:
      "Receivable-focused financing structures supporting healthcare companies managing reimbursement cycles, operational liquidity requirements, and multi-payer billing environments.",
  },
  {
    icon: "construction",
    title: "Commercial Construction",
    href: "/industries/commercial-construction-financing",
    description:
      "Structured working capital solutions supporting project-based billing cycles, subcontractor obligations, vendor payments, and receivable-backed liquidity requirements.",
  },
];

export default function IndustriesPage() {
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
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>domain</span>
                INDUSTRIES
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Industry-Focused Structured Credit Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                EPOCH Financial provides structured credit advisory solutions for middle-market companies operating across industries that have recurring commercial receivables, predictable billing cycles, and established operational infrastructure supporting disciplined working capital structures.
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

      {/* ─── INDUSTRIES GRID ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Industries We Serve</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Sectors With Receivable-Backed Working Capital Needs
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              We structure senior secured credit facilities for operationally established companies across these industry sectors.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
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
                    Explore Industry
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
              Find the Right Industry-Specific Financing
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              Connect with our team to evaluate structured credit solutions aligned with your industry, receivables, and operational requirements.
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
