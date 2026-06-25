import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/financial-services");

const services = [
  {
    icon: "receipt_long",
    title: "Receivable-Based Credit Facilities",
    href: "/financial-services/accounts-receivable-financing",
    description:
      "Senior secured working capital structures supported by eligible accounts receivable and disciplined borrowing base methodologies.",
  },
  {
    icon: "inventory",
    title: "AR-Driven Asset-Based Lending",
    href: "/financial-services/asset-based-lending",
    description:
      "Scalable credit solutions designed around receivable performance, collateral transparency, and operational liquidity requirements.",
  },
  {
    icon: "auto_awesome",
    title: "Strategic Capital Solutions",
    href: "/financial-services/strategic-capital-solutions",
    description:
      "Acquisition financing, recapitalizations, partner buyouts, and special situation credit for middle market transactions starting at $20MM to $200MM+.",
  },
  {
    icon: "trending_up",
    title: "Transitional Bridge Credit Solutions",
    href: "/financial-services/bridge-financing",
    description:
      "Structured short-term capital solutions aligned with refinancing visibility, operational transitions, and defined repayment pathways.",
  },
];

const pillars = [
  {
    icon: "verified",
    title: "Structured Credit Focus",
    description:
      "EPOCH Financial focuses on disciplined working capital advisory solutions structured around receivable quality, collateral transparency, and senior secured credit frameworks for middle market companies.",
  },
  {
    icon: "history",
    title: "Middle Market Experience",
    description:
      "Since 1999, EPOCH Financial has supported middle market businesses, management teams, and private equity sponsors requiring tailored financing strategies aligned with operational objectives.",
  },
  {
    icon: "fact_check",
    title: "Disciplined Credit Approach",
    description:
      "Our advisory process emphasizes structural integrity, repayment visibility, financial transparency, and measurable collateral performance to support dependable liquidity and long-term financing stability.",
  },
  {
    icon: "rocket_launch",
    title: "Execution-Oriented Process",
    description:
      "We coordinate financing opportunities through a clear and efficient process designed to support timely evaluations, structured execution, and consistent communication throughout engagement stages.",
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
                Senior Secured Working Capital Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Structured credit solutions for middle market companies seeking disciplined liquidity access, receivable-based borrowing capacity, and dependable capital support aligned with operational performance, financial transparency, and long-term business continuity.
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

      {/* ─── ADVISORY INTRO ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <FadeUp delay={80}>
                <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">About EPOCH Financial</p>
                <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight">
                  Structured Credit Advisory for Middle Market Companies
                </h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              <FadeUp delay={120}>
                <p className="text-body-gray text-sm md:text-base leading-relaxed">
                  EPOCH Financial is a commercial finance advisory platform focused on structured credit solutions for middle-market companies. Our platform is built around disciplined working capital strategies where accounts receivable serve as a transparent and analyzable foundation for senior secured credit structures.
                </p>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="text-body-gray text-sm md:text-base leading-relaxed">
                  We work with operationally established businesses, management teams, independent operators, private equity sponsors, and specialty finance platforms seeking strategic financial advisory support aligned with long-term business performance and liquidity stability.
                </p>
              </FadeUp>
              <FadeUp delay={200}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn more
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE SOLUTIONS ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Core Structured Credit Solutions
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-border-light bg-white p-8 hover:border-primary/25 hover:shadow-lg transition-all duration-300 h-full"
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

      {/* ─── PILLARS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Why EPOCH</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12">
              Trusted Advisory Support for Working Capital Solutions
            </h2>
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
