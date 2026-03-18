import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Financial & Business Funding Solutions | EPOCH Financial",
  description:
    "EPOCH Financial structures and facilitates senior secured credit solutions for middle market companies and specialty lenders.",
  keywords:
    "private credit, senior secured, working capital, accounts receivable financing, asset based lending, bridge capital",
};

const focusPlatformCards = [
  { icon: "receipt_long", title: "Accounts Receivable Financing" },
  { icon: "account_balance", title: "AR-Anchored Asset-Based Lending" },
  { icon: "trending_up", title: "Selective Revenue-Aligned Bridge Capital" },
];

const solutionsCards = [
  {
    icon: "description",
    title: "Accounts Receivable Financing",
    paragraphs: [
      "We structure senior secured revolving credit facilities supported by eligible receivables. These facilities enable companies and specialty lenders to access liquidity directly tied to billed and collectible revenue.",
      "Borrowing capacity is determined through disciplined analysis of receivable quality, concentration levels, and historical collection performance. This ensures that capital availability remains aligned with measurable asset strength.",
      "Accounts receivable financing provides dependable working capital while preserving operational continuity and financial control.",
    ],
    href: "/ar-financing",
  },
  {
    icon: "inventory",
    title: "AR-Anchored Asset-Based Lending",
    paragraphs: [
      "Our asset-based lending facilities are structured around defined borrowing base frameworks, with receivables serving as the primary collateral component.",
      "These facilities are designed to scale alongside asset growth while maintaining disciplined credit parameters. Where appropriate, additional collateral support may be incorporated to strengthen structural protections.",
      "AR-anchored asset-based lending provides a stable and scalable liquidity foundation for businesses with consistent receivable generation and transparent reporting practices.",
    ],
    href: "/abl",
  },
  {
    icon: "payments",
    title: "Revenue-Aligned Bridge Capital",
    paragraphs: [
      "We provide selective bridge capital to address defined transitional liquidity needs. These facilities are structured against forward revenue visibility and identifiable repayment sources.",
      "Bridge capital is typically used in situations involving refinancing transitions, operational repositioning, or near-term liquidity events.",
      "Our approach to bridge financing prioritizes structural clarity, senior secured positioning, and clearly defined exit pathways.",
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
  { icon: "business_center", name: "Business Services" },
  { icon: "local_hospital", name: "Healthcare" },
  { icon: "memory", name: "Technology & Software" },
  { icon: "shopping_bag", name: "Consumer Products" },
  { icon: "precision_manufacturing", name: "Industrials & Manufacturing" },
  { icon: "local_shipping", name: "Distribution & Logistics" },
  { icon: "account_balance", name: "Financial Services" },
  { icon: "cell_tower", name: "Media & Telecom" },
  { icon: "bolt", name: "Energy & Infrastructure" },
  { icon: "school", name: "Education Services" },
  { icon: "apartment", name: "Government Contracting" },
  { icon: "construction", name: "Construction" },
];

const approachCards = [
  {
    icon: "filter_alt",
    title: "Selectivity",
    description:
      "We pursue opportunities where collateral quality, reporting transparency, and operational stability support disciplined credit structures.",
  },
  {
    icon: "handshake",
    title: "Alignment",
    description:
      "We structure capital solutions that support borrower stability while maintaining appropriate lender protections and structural integrity.",
  },
  {
    icon: "my_location",
    title: "Execution",
    description:
      "Our process is designed for clarity and efficiency, with defined diligence workflows, coordinated documentation, and ongoing performance monitoring.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[380px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(17,55,95,0.72), rgba(17,55,95,0.88)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1h6lRhphjbGJiwybD2fEB-hONq7HT4qJ7aBQJMNnVHIaif3xJU0-mldzFw2Cuu4DMkhr1KGVeZxk3De27Mbj0E-LTVFD-TnlQeMP9rY28a9jY-6BcKtumOPSFdSPBwJck28arOXreLimaqHsd5AEu7pY9GyUJsTAC-28Md2LWW8zgJk4lOBVziZPJdDpFIqS8UloUKkv9_VGg7ruivY9nMuT4w4QM9Ber0ejWgyp_5NINhWskTOVdzp5uQWkv6EZMSYtjzemm6ws")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>account_balance</span>
                PRIVATE CREDIT PLATFORM
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Senior Secured Working Capital Solutions
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                EPOCH Financial structures and facilitates senior secured credit solutions for middle market companies
                and specialty lenders. Our focus is disciplined financing anchored by accounts receivable, designed to
                provide dependable liquidity and support long-term operating stability.
              </p>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                We operate within a defined private credit mandate centered on collateral performance, structural
                integrity, and institutional underwriting standards. Our solutions are built to align capital
                availability with asset quality, enabling businesses to operate with confidence and continuity.
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
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              A Focused Private Credit Platform
            </h2>
            <p className="text-body-gray md:text-base text-sm mt-3 leading-relaxed">
              EPOCH Financial is a specialty finance firm dedicated to receivable-anchored credit strategies. We provide
              structured working capital solutions where accounts receivable represent a reliable and analyzable asset
              base.
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 font-medium">
              Our platform is built on a clear strategic focus:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {focusPlatformCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border-light bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                </div>
                <h3 className="lg:text-xl md:text-lg text-base font-semibold text-secondary">{card.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We concentrate on a disciplined segment of private credit where collateral transparency, repayment
              visibility, and structural protections define risk management. This focused approach allows us to deliver
              consistent underwriting standards, clear credit structures, and dependable execution.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] mt-3 hover:underline"
            >
              Learn more
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CORE FINANCING SOLUTIONS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center mb-8 leading-tight">
            Core Financing Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {solutionsCards.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* TARGET COMPANIES */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Target Companies
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold -mt-2">
              Serving the Lower and Core Middle Market
            </p>
            <p className="text-body-gray md:text-base text-sm leading-relaxed">
              We partner with middle market companies and specialty lenders that demonstrate operational discipline and
              consistent business performance.
            </p>
            <p className="text-secondary md:text-base text-sm font-semibold mt-1">
              Typical characteristics include:
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {targetChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span>
                  </span>
                  <span className="text-body-gray text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-body-gray md:text-base text-sm leading-relaxed mt-2">
              We work with independent operators, management teams, private equity sponsors, and specialty finance
              platforms seeking structured working capital solutions.
            </p>
          </div>
          <div className="relative h-[300px] lg:h-[540px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/assets/images/team-photo.jpg"
              alt="EPOCH Financial team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Industry Focus
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold mt-2">
              Sectors with Durable Receivable Collateral
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              We focus on industries where receivables represent a consistent, measurable, and financeable asset base.
              Core sectors include:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industryFocusItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 p-5 rounded-xl bg-white border border-border-light hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>{item.icon}</span>
                <span className="text-secondary font-medium text-[14px]">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="text-body-gray md:text-base text-sm text-center max-w-3xl mx-auto leading-relaxed mt-6">
            These industries typically demonstrate predictable billing cycles, diversified customer bases, and structured
            receivable generation suitable for senior secured financing.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
              Our Approach
            </h2>
            <p className="text-primary md:text-base text-sm font-semibold mt-2">
              Disciplined, Selective, and Execution-Focused
            </p>
            <p className="text-body-gray md:text-base text-sm mt-4 leading-relaxed">
              Our operating philosophy is grounded in selectivity, structural clarity, and execution discipline.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border-light bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{card.icon}</span>
                </div>
                <h3 className="lg:text-xl md:text-lg text-base font-semibold text-secondary">{card.title}</h3>
                <p className="text-body-gray md:text-base text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
          <p className="text-body-gray md:text-base text-sm text-center max-w-3xl mx-auto leading-relaxed mt-6">
            This approach enables dependable execution and long-term credit alignment.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CTABanner
        title="Discuss a Financing Opportunity"
        description="We welcome discussions with management teams, private equity sponsors, and specialty lenders, seeking structured working capital solutions."
        description2="Financial information may be submitted for confidential review. Each opportunity is evaluated through a disciplined process designed to provide clarity and timely feedback."
        buttonText="Submit Financing Inquiry"
      />
    </>
  );
}
