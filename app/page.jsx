import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "Senior Secured Working Capital Solutions for Middle Market Companies | EPOCH Financial",
  description:
    "EPOCH Financial provides structured credit and working capital solutions for middle market companies, including AR financing and asset-based lending.",
  keywords:
    "middle market financing, structured credit solutions, commercial finance advisory, capital solutions for operating companies, institutional financing solutions, private credit solutions, specialty finance solutions, corporate finance advisory, liquidity solutions for middle market companies, structured capital solutions",
};

const focusPlatformCards = [
  {
    icon: "receipt_long",
    title: "Accounts Receivable Financing",
    image: "/assets/images/ar-hero.jpg",
  },
  {
    icon: "account_balance",
    title: "AR-Anchored Asset-Based Lending",
    image: "/assets/images/abl-hero.jpg",
  },
  {
    icon: "trending_up",
    title: "Selective Revenue-Aligned Bridge Capital",
    image: "/assets/images/bridge-hero.jpg",
  },
];

const solutionsCards = [
  {
    icon: "description",
    title: "Accounts Receivable Financing",
    image: "/assets/images/solution-ar-new.jpg",
    paragraphs: [
      "We structure and facilitate senior secured revolving credit facilities supported by eligible receivables. These facilities form a key part of broader structured credit solutions, where capital availability is driven by asset quality.",
      "Borrowing capacity is determined through disciplined analysis of receivable quality, concentration levels, and historical collection performance. This approach ensures that capital availability remains aligned with measurable asset strength.",
      "Such solutions provide reliable liquidity solutions for middle market companies, supporting working capital needs while maintaining operational control.",
    ],
    href: "/ar-financing",
  },
  {
    icon: "inventory",
    title: "AR-Anchored Asset-Based Lending",
    image: "/assets/images/solution-abl-new.jpg",
    paragraphs: [
      "Asset-based lending facilities are structured around defined borrowing base frameworks, with receivables serving as the primary collateral component.",
      "These structures are designed to scale alongside asset growth while maintaining disciplined credit parameters. Where appropriate, additional collateral support may be incorporated to strengthen structural integrity.",
      "As part of broader capital solutions for operating companies, AR-anchored lending supports consistent liquidity access while reinforcing balance sheet flexibility.",
    ],
    href: "/abl",
  },
  {
    icon: "payments",
    title: "Revenue-Aligned Bridge Capital",
    image: "/assets/images/solution-bridge-new.jpg",
    paragraphs: [
      "We structure and facilitate selective bridge capital solutions to address defined transitional liquidity needs. These facilities are aligned with forward revenue visibility and clearly identifiable repayment sources.",
      "Bridge capital solutions are typically structured for situations involving refinancing transitions, operational repositioning, or near-term liquidity events.",
      "These solutions are delivered within a broader framework of structured capital solutions, ensuring alignment between capital deployment and business objectives.",
    ],
    href: "/bridge",
  },
];

const targetChecklist = [
  "Recurring business-to-business revenue",
  "Transparent financial reporting and receivable aging",
  "Defined cash conversion cycles",
  "Established operational infrastructure",
  "Professional financial management",
];

const industryFocusItems = [
  { icon: "precision_manufacturing", name: "Manufacturing", image: "/assets/images/industry-construction-new.jpg" },
  { icon: "local_shipping", name: "Distribution", image: "/assets/images/industry-distribution-new.jpg" },
  { icon: "inventory", name: "Logistics", image: "/assets/images/industry-distribution-new.jpg" },
  { icon: "groups", name: "Staffing", image: "/assets/images/industry-business-services-new.jpg" },
  { icon: "apartment", name: "Government Contracts", image: "/assets/images/industry-government-new.jpg" },
  { icon: "business_center", name: "Service Companies", image: "/assets/images/industry-business-services-new.jpg" },
  { icon: "local_hospital", name: "Medical", image: "/assets/images/industry-healthcare-new.jpg" },
  { icon: "construction", name: "Commercial Construction", image: "/assets/images/industry-construction-new.jpg" },
];

const approachCards = [
  {
    icon: "filter_alt",
    title: "Selectivity",
    description:
      "We evaluate opportunities where collateral quality, reporting transparency, and operational stability support well-structured capital solutions.",
  },
  {
    icon: "handshake",
    title: "Alignment",
    description:
      "We structure capital solutions that support business stability while maintaining appropriate structural integrity and risk discipline.",
  },
  {
    icon: "my_location",
    title: "Execution",
    description:
      "Our process is designed for clarity and efficiency, with defined diligence workflows, coordinated documentation, and consistent performance visibility.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — no animation, above the fold */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[380px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/home-hero.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>account_balance</span>
                PRIVATE CREDIT PLATFORM
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Senior Secured Working Capital Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                We structure and execute senior secured credit solutions for middle market companies. Our focus is disciplined financing anchored by accounts receivable, designed to support dependable liquidity access and long-term operating stability.
              </p>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                We operate within a defined private credit framework centered on collateral performance, structural integrity, and institutional underwriting standards. Solutions are structured to align capital availability with asset quality, enabling businesses to operate with confidence and continuity.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="#"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  Discuss a Financing Opportunity
                </Link>
                <Link
                  href="#"
                  className="rounded-full border-2 border-white/40 px-4 sm:px-7 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/60"
                >
                  View Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A FOCUSED PRIVATE CREDIT PLATFORM */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              A Focused Private Credit Platform
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-3 leading-relaxed">
              EPOCH Financial is a specialty finance firm dedicated to receivable-anchored credit strategies. We structure and facilitate working credit solutions where accounts receivable represent a reliable and analyzable asset base.
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 font-medium">
              Our platform is built on a clear strategic focus:
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusPlatformCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 80}>
                <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border-light bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-semibold text-secondary">{card.title}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={300} className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We concentrate on a disciplined segment of private credit where collateral transparency, repayment visibility, and structural protections define risk management. This focused approach allows us to deliver consistent underwriting standards, clear credit structures, and dependable execution.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] mt-3 hover:underline"
            >
              Learn more
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CORE FINANCING SOLUTIONS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp>
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center mb-8 leading-tight">
              Core Financing Solutions
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 100}>
                <div className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                  </div>
                  <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary mb-3">{card.title}</h3>
                  <div className="text-body-gray md:text-base text-sm leading-relaxed">
                    {card.paragraphs.map((p, i) => (
                      <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>
                    ))}
                  </div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-primary font-semibold text-[14px] mt-auto pt-5 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET COMPANIES */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px] flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <FadeUp className="flex flex-col gap-5 lg:w-[55%]">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Target Companies
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold -mt-2">
              Serving the Middle Market Businesses
            </p>
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We work with middle market companies that demonstrate operational discipline and consistent business performance, and structure and coordinate tailored credit solutions to support their growth.
            </p>
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We work with independent operators, management teams, private equity sponsors, and speciality finance platforms seeking structured corporate finance advisory support. Our focus is on businesses where asset quality and financial transparency support disciplined credit underwriting.
            </p>
          </FadeUp>
          <FadeUp delay={150} className="lg:w-[45%] w-full">
            <div className="rounded-2xl border border-border-light overflow-hidden">
              <div className="px-6 py-4" style={{ background: "linear-gradient(135deg, #11375F, #0DA2E7)" }}>
                <p className="text-white font-semibold md:text-base text-sm">Typical characteristics include:</p>
              </div>
              <ul className="flex flex-col divide-y divide-border-light bg-bg-alt">
                {targetChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 px-6 py-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>check</span>
                    </span>
                    <span className="text-secondary text-[14px] font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Industry Focus
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold mt-2">
              Sectors with Durable Receivable Collateral
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              We focus on industries where receivables represent a consistent, measurable, and financeable asset base. Core sectors include:
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industryFocusItems.map((item, i) => (
              <FadeUp key={item.name} delay={i * 50}>
                <div className="flex items-center gap-3 p-5 rounded-xl bg-white border border-border-light hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>{item.icon}</span>
                  <span className="text-secondary font-medium text-[14px]">{item.name}</span>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400} className="text-center mt-6">
            <p className="text-body-gray md:text-base text-sm max-w-3xl mx-auto leading-relaxed">
              These industries typically demonstrate predictable billing cycles, diversified customer bases, and structured receivable generation suitable for senior secured financing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Our Approach
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold mt-2">
              Disciplined, Selective, and Execution-Focused
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Our operating philosophy is grounded in selectivity, structural clarity, and execution discipline.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto">
            {approachCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 100}>
                <div className={`relative flex flex-col items-center text-center px-8 py-8 lg:py-0 ${i < approachCards.length - 1 ? "lg:border-r border-b lg:border-b-0 border-secondary/10" : ""}`}>
                  <span className="text-[72px] font-black text-secondary/[0.04] leading-none select-none absolute top-0 lg:-top-2">0{i + 1}</span>
                  <div className="relative z-10 flex flex-col items-center gap-3 mt-6">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>{card.icon}</span>
                    <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{card.title}</h3>
                    <div className="w-8 h-[2px] bg-primary/40 rounded-full" />
                    <p className="text-body-gray md:text-base text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={300} className="text-center mt-8">
            <p className="text-body-gray md:text-base text-sm max-w-3xl mx-auto leading-relaxed">
              This approach enables dependable execution and long-term alignment.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CTABanner
        title="Discuss a Financing Opportunity"
        description="We engage with management teams and private equity sponsors seeking structured working capital solutions."
        description2="Financial information may be submitted for confidential review. Each opportunity is evaluated through a disciplined process designed to provide clarity and timely feedback."
        buttonText="Submit Financing Inquiry"
      />
    </>
  );
}
