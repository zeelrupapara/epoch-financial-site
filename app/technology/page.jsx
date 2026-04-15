import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FadeUp from "@/components/FadeUp";
import TechCapitalSolutions from "@/components/technology/TechCapitalSolutions";
import TechReceivablesSection from "@/components/technology/TechReceivablesSection";

export const metadata = {
  title: "Financing Solutions for Middle Market Technology Companies | EPOCH Financial",
  description:
    "Explore tailored capital solutions for middle market technology companies, supporting growth, product development, recurring revenue, and scalable infrastructure.",
};

const advantages = [
  {
    icon: "visibility",
    title: "Improved Cash Flow Visibility",
    description:
      "Financial solutions align liquidity with recurring revenues such as SaaS subscriptions and contracted services, enabling predictable and stable cash flow management.",
  },
  {
    icon: "lightbulb",
    title: "Support for Product Development & Innovation",
    description:
      "Access to capital enables continuous investment in software development, platform enhancements, and innovation initiatives without disrupting day-to-day operations.",
  },
  {
    icon: "tune",
    title: "Flexibility Across Revenue Models",
    description:
      "Technology companies operate across subscription, usage-based, and project-driven models. Structured frameworks adapt to these varying revenue streams.",
  },
  {
    icon: "trending_up",
    title: "Scalable Capital for Growth",
    description:
      "As businesses expand customer bases, enter new markets, or scale platforms, capital structures grow in line with operational and strategic objectives.",
  },
  {
    icon: "speed",
    title: "Enhanced Operational Efficiency",
    description:
      "Reliable liquidity supports seamless platform performance, service delivery, and customer experience in competitive digital markets.",
  },
  {
    icon: "savings",
    title: "Preservation of Internal Capital",
    description:
      "Structured solutions allow companies to allocate internal resources toward innovation, talent acquisition, and long-term strategic initiatives.",
  },
];

const whyEpoch = [
  {
    icon: "hub",
    title: "Deep Industry Alignment",
    description:
      "Capital approaches reflect a strong understanding of SaaS models, subscription revenues, product development cycles, and platform-based ecosystems, ensuring alignment with how technology businesses operate and grow.",
  },
  {
    icon: "tune",
    title: "Flexible Structuring Approach",
    description:
      "Frameworks are adapted around recurring revenue visibility, customer contracts, and intellectual property, allowing financial strategies to evolve alongside changing market conditions and growth priorities.",
  },
  {
    icon: "rocket_launch",
    title: "Built for Scaling Businesses",
    description:
      "Approaches are tailored for companies expanding across markets, products, and customer segments, supporting growth in user base, platform capabilities, and geographic reach.",
  },
  {
    icon: "memory",
    title: "Technology-Centric Investment Focus",
    description:
      "Capital strategies support ongoing investment in software development, cloud infrastructure, cybersecurity, and digital platforms essential for maintaining competitiveness.",
  },
  {
    icon: "verified",
    title: "Operational Stability & Efficiency",
    description:
      "Disciplined financial structures help maintain consistent operations, optimize resource allocation, and support seamless service delivery in dynamic environments.",
  },
  {
    icon: "timeline",
    title: "Aligned for Sustainable Growth",
    description:
      "Capital frameworks evolve with business objectives, enabling continued investment in innovation, talent, and product expansion while maintaining financial balance and resilience.",
  },
];

const faqs = {
  intro: "Everything you need to know about capital solutions for technology companies. Can't find what you're looking for? Contact our team.",
  items: [
    {
      question: "What are capital solutions for technology companies?",
      answer:
        "Capital solutions for technology companies are structured financial approaches designed to support product development, recurring revenue models, infrastructure investment, and overall business growth. They are tailored to align with evolving digital business models and operational needs.",
    },
    {
      question: "Can capital solutions support product development and innovation?",
      answer:
        "Yes, they enable continuous investment in software development, platform enhancements, and new product initiatives while maintaining operational stability. This ensures companies remain competitive in rapidly evolving technology markets.",
    },
    {
      question: "What types of technology companies can benefit from these solutions?",
      answer:
        "SaaS providers, software developers, IT services firms, platform-based businesses, and other middle market technology companies can benefit from structured capital strategies. These approaches are suitable for both growth-stage and established companies operating at scale.",
    },
  ],
};

export default function TechnologyPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 44%), rgb(17 55 95 / 72%)), url("/assets/images/industry-technology.jpg")',
            }}
          >
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>memory</span>
                TECHNOLOGY INDUSTRY
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
                Credit Solutions for Middle Market Technology Companies
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-2xl leading-relaxed">
                Credit-driven capital strategies for middle market technology companies align financing with revenue models, supporting product innovation, recurring income cycles, infrastructure investment, and sustained growth while maintaining liquidity discipline and financial flexibility.
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

      {/* ─── IMPACT OF CAPITAL SOLUTIONS ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Overview</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-10">
              The Impact of Capital Solutions on Technology Operations
            </h2>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <FadeUp className="lg:w-[52%]" delay={120}>
              <p className="text-body-gray text-sm md:text-[17px] leading-relaxed font-medium border-l-4 border-primary pl-6 italic">
                Capital solutions play a critical role in supporting technology operations by aligning financial resources with dynamic business needs and growth cycles. For middle market technology companies, access to structured capital enables investment in product development, cloud infrastructure, and talent acquisition without disrupting cash flow stability.
              </p>
            </FadeUp>
            <FadeUp className="lg:w-[48%] flex flex-col gap-5" delay={180}>
              <p className="text-body-gray text-sm md:text-base leading-relaxed">
                These solutions also help manage uneven revenue patterns, particularly in subscription-based and project-driven models. By providing flexible liquidity, capital strategies allow companies to scale operations, enhance service delivery, and respond quickly to market opportunities.
              </p>
              <p className="text-body-gray text-sm md:text-base leading-relaxed">
                Additionally, disciplined capital structuring supports risk management, improves financial visibility, and strengthens overall operational resilience in an increasingly competitive and innovation-driven technology landscape.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── SPECIALIZED CAPITAL SOLUTIONS ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Financing Solutions</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Specialized Capital Solutions for Tech Businesses
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-10">
              Technology companies operate in innovation-driven and fast-scaling environments, requiring flexible capital frameworks to support product development, cloud infrastructure, and evolving digital business models.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <TechCapitalSolutions />
          </FadeUp>
        </div>
      </section>

      {/* ─── RECEIVABLES CTA CONNECTOR ─── */}
      <section className="bg-white 2xl:px-6 lg:px-16 md:px-12 px-4 py-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>receipt_long</span>
              </span>
              <p className="text-secondary font-bold text-base">
                Driving Liquidity Through Receivables in Technology Businesses
              </p>
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

      {/* ─── RECEIVABLES DETAIL ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Receivables</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-10">
              Driving Liquidity Through Receivables in Technology Businesses
            </h2>
          </FadeUp>
          <FadeUp delay={160}>
            <TechReceivablesSection />
          </FadeUp>
        </div>
      </section>

      {/* ─── CAPITAL SIZE & STRUCTURING ─── */}
      <section className="bg-secondary 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4 text-center">Transaction Profile</p>
            <h2 className="text-white 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-12 text-center">
              Capital Size and Structuring in Technology Financing
            </h2>
          </FadeUp>
          <FadeUp delay={140}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-10">
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[44px] lg:text-[36px] text-[30px] font-black leading-none mb-2">$10M – $150M+</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Loan Size</span>
              </div>
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[44px] lg:text-[36px] text-[30px] font-black leading-none mb-2">$50M – $1B+</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Annual Revenue</span>
              </div>
              <div className="flex flex-col items-center text-center px-8 py-6">
                <span className="text-primary xl:text-[44px] lg:text-[36px] text-[30px] font-black leading-none mb-2">Middle Market</span>
                <span className="text-white/55 text-sm font-medium uppercase tracking-wider">Focus</span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="border-t border-white/10 pt-8 max-w-3xl mx-auto text-center">
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-2">
                Financing solutions are structured for middle market technology companies operating within scalable business models and evolving digital ecosystems.
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                Companies include SaaS providers, software developers, IT services firms, platform-based businesses, and sponsor-backed technology companies. Each structure is aligned with recurring revenue visibility, customer contracts, intellectual property value, and overall operational scalability.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── STRATEGIC ADVANTAGES ─── */}
      <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <FadeUp delay={80}>
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
              Strategic Advantages of Capital Solutions in Technology
            </h2>
            <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mb-12">
              Structured capital solutions support middle market technology companies with the liquidity, flexibility, and scalability required to manage product development, recurring revenue models, and rapid growth cycles while maintaining operational efficiency across evolving digital environments.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:[&>*:nth-child(-n+4)]:border-b lg:[&>*:nth-child(-n+3)]:border-b md:[&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(odd)]:border-r-0 lg:[&>*:not(:nth-child(3n))]:border-r border-border-light">
              {advantages.map((a) => (
                <div key={a.title} className="flex flex-col gap-4 p-7 md:p-8 group">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-primary/15"
                    style={{ background: "rgba(13,162,231,0.08)" }}
                  >
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>{a.icon}</span>
                  </div>
                  <div className="w-8 h-[2px] rounded-full bg-primary/40" />
                  <h3 className="text-secondary font-bold text-base leading-snug">{a.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── WHY EPOCH ─── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: image */}
            <FadeUp className="lg:w-[44%] shrink-0" delay={80}>
              <div className="relative rounded-2xl overflow-hidden min-h-[360px] lg:min-h-[480px]">
                <img
                  src="/assets/images/approach-financial-assessment.jpg"
                  alt="EPOCH Financial technology capital solutions"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                    <p className="text-secondary text-sm font-bold leading-snug">
                      "Capital strategies designed for innovation-driven, fast-scaling technology businesses."
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right: content */}
            <FadeUp className="lg:w-[56%] flex flex-col justify-center" delay={160}>
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Our Advantage</p>
              <h2 className="text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-4">
                Why Partner with EPOCH Financial for Technology Capital Solutions
              </h2>
              <p className="text-body-gray text-sm md:text-base leading-relaxed mb-8">
                Middle market technology companies operate in fast-evolving, innovation-led environments shaped by recurring revenue models, rapid product cycles, and continuous investment in digital infrastructure. Capital strategies are designed to align with these dynamics, supporting operational efficiency and long-term scalability.
              </p>
              <div className="flex flex-col gap-0">
                {whyEpoch.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 py-5 border-b border-border-light last:border-b-0"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
                      style={{ background: "rgba(13,162,231,0.10)" }}
                    >
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>{item.icon}</span>
                    </span>
                    <div>
                      <h3 className="text-secondary font-bold text-sm md:text-base mb-1">{item.title}</h3>
                      <p className="text-body-gray text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mt-6"
              >
                Learn More
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── ADAPTIVE CTA ─── */}
      <section
        id="opportunity"
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgb(17 55 95 / 88%), rgb(17 55 95 / 94%)), url("/assets/images/bridge-technology.jpg")',
        }}
      >
        <div className="mx-auto max-w-[1600px] relative z-10">
          <FadeUp delay={80}>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
              <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
                Adaptive Capital Solutions for Tech Firms
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
                Access flexible capital strategies designed to align with your technology business model, support growth initiatives, and enhance operational efficiency. Connect with us to explore solutions built around your needs.
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
