import CTABanner from "@/components/CTABanner";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Our Capital Approach | EPOCH Financial",
  description:
    "EPOCH Financial works with middle market companies to structure and execute credit solutions within complex, capital-intensive environments.",
  keywords:
    "capital approach, structured credit, middle market, asset based lending, receivable financing, EPOCH Financial",
};

const approachCards = [
  {
    icon: "architecture",
    title: "Strategic Capital Structuring",
    description:
      "Each engagement is centered on building financing structures aligned with operational demands, financial strategy, and long-term business objectives.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "rocket_launch",
    title: "Beyond Conventional Financing",
    description:
      "Middle market companies require more than capital access. Solutions are structured to support liquidity, improve capital efficiency, and align with broader business priorities.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "query_stats",
    title: "Comprehensive Financial Assessment",
    description:
      "Each transaction begins with a detailed evaluation of capital structure, cash flow dynamics, and growth plans to ensure precise alignment with financing requirements.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "tune",
    title: "Customized Credit Solutions",
    description:
      "Financing structures are tailored to enhance liquidity while maintaining balance sheet strength and operational flexibility.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "account_balance",
    title: "Structured Credit Expertise",
    description:
      "Experience spans receivable-anchored credit facilities, asset-based lending structures, and hybrid capital solutions designed for evolving business environments.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "sync_alt",
    title: "Cycle-Responsive Structures",
    description:
      "Financing structures are developed to adapt to changing market conditions, fluctuating revenues, and operational demands without disrupting business continuity.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "verified",
    title: "Disciplined Execution",
    description:
      "A strong focus on underwriting rigor, lender alignment, and execution efficiency ensures transactions move forward with speed and precision.",
    image: "/assets/images/placeholder.svg",
  },
  {
    icon: "handshake",
    title: "Certainty and Execution Confidence",
    description:
      "In time-sensitive situations, disciplined processes and coordinated lender engagement ensure clarity and confidence at every stage of the transaction.",
    image: "/assets/images/placeholder.svg",
  },
];

export default function OurApproachPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[300px] lg:min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("/assets/images/approach-hero.jpg")',
            }}
          >
            <div className="relative z-10 w-full flex flex-col items-center text-center gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 14 }}
                >
                  trending_up
                </span>
                OUR APPROACH
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Our Approach to Structured Credit
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            <FadeUp className="lg:w-[45%] shrink-0 flex" delay={100}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[320px]">
                <img
                  src="/assets/images/placeholder.svg"
                  alt="Capital approach structured finance advisory"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp className="lg:w-[55%] flex flex-col gap-6 justify-center">
              <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
                Our Approach to Structured Credit
              </h2>
              <p className="text-body-gray md:text-base text-sm leading-relaxed">
                EPOCH Financial works with middle market companies to structure
                and execute credit solutions within complex, capital-intensive
                environments. Each engagement is centered on aligning capital
                structure, cash flow dynamics, and strategic objectives. The firm
                evaluates collateral, develops lender-ready financing structures,
                and manages a disciplined process across private credit and
                asset-based lenders to deliver solutions that support operational
                execution and maintain flexibility across evolving business
                conditions.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* A DISCIPLINED APPROACH TO CAPITAL DEPLOYMENT */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              A Disciplined Approach to Capital Deployment
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {approachCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 80} className="flex">
                <div className="rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11375F]/60 to-transparent" />
                    <div
                      className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #11375F, #0DA2E7)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        {card.icon}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <CTABanner
        title="Partner with a Capital Provider Focused on the Middle Market."
        description="EPOCH Financial works alongside management teams and financial stakeholders to structure and execute credit solutions aligned with complex business needs."
        buttonText="Explore Structured Credit Solutions"
        bgImage="/assets/images/placeholder.svg"
      />
    </>
  );
}
