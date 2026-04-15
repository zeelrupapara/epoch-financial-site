const solutions = [
  {
    num: "01",
    icon: "receipt_long",
    title: "Operational Liquidity & Receivables Financing",
    body: "Maintaining consistent cash flow is essential, particularly for companies with subscription-based, SaaS, or project-driven revenue models.",
    bullets: [
      "Managing delays in customer or enterprise receivables",
      "Supporting ongoing product development and release cycles",
      "Funding customer acquisition and go-to-market strategies",
      "Stabilizing cash flow across recurring revenue streams",
      "Maintaining liquidity during rapid scaling phases",
    ],
    note: "These solutions are typically structured within asset-based or recurring revenue-aligned frameworks, reflecting receivables quality and revenue predictability.",
  },
  {
    num: "02",
    icon: "cloud",
    title: "Infrastructure & Cloud Investment",
    body: "Technology businesses require continuous investment in digital infrastructure, including cloud environments, data systems, and platform scalability.",
    bullets: [
      "Expanding cloud infrastructure and hosting environments",
      "Investing in data centers and storage capabilities",
      "Enhancing system architecture and platform scalability",
      "Supporting DevOps, automation, and deployment pipelines",
      "Increasing capacity to handle user and data growth",
    ],
    note: "Facilities are aligned with infrastructure utilization, scalability needs, and long-term technology strategies.",
  },
  {
    num: "03",
    icon: "lightbulb",
    title: "Product Development & Intellectual Property Financing",
    body: "Innovation is central to technology companies, requiring capital aligned with development timelines and commercialization cycles.",
    bullets: [
      "Funding software development and product innovation",
      "Supporting research and development initiatives",
      "Financing proprietary technology and IP creation",
      "Enhancing product features and platform capabilities",
      "Aligning capital with product launch and adoption cycles",
    ],
    note: "These structures are designed around intellectual property value, recurring revenue potential, and market adoption metrics.",
  },
  {
    num: "04",
    icon: "payments",
    title: "Working Capital & Technology Investment",
    body: "Ongoing investment in platforms, talent, and digital capabilities is critical for sustaining competitiveness and growth.",
    bullets: [
      "Funding technology upgrades and platform enhancements",
      "Supporting SaaS infrastructure and digital delivery models",
      "Managing vendor, licensing, and service provider payments",
      "Investing in cybersecurity and data protection systems",
      "Enabling innovation across digital products and services",
    ],
    note: "Facilities are aligned with operational requirements, development cycles, and long-term growth objectives.",
  },
];

export default function TechCapitalSolutions() {
  return (
    <div className="flex flex-col gap-0 rounded-2xl overflow-hidden border border-border-light">
      {solutions.map((sol, i) => (
        <div
          key={sol.num}
          className={`flex flex-col lg:flex-row border-b border-border-light last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-bg-alt"}`}
        >
          {/* Left: number + icon + title */}
          <div className="lg:w-[280px] shrink-0 flex flex-row lg:flex-col gap-4 items-start lg:items-start p-6 lg:p-8 lg:border-r border-border-light">
            <span
              className="text-[48px] lg:text-[64px] font-black leading-none select-none"
              style={{ color: "rgba(13,162,231,0.14)" }}
            >
              {sol.num}
            </span>
            <div className="flex flex-col gap-2">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "rgba(13,162,231,0.10)" }}
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>{sol.icon}</span>
              </span>
              <h3 className="text-secondary text-base font-bold leading-snug">{sol.title}</h3>
            </div>
          </div>

          {/* Right: body + bullets + note */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col gap-5">
            <p className="text-body-gray text-sm md:text-base leading-relaxed">{sol.body}</p>
            <div className="flex flex-wrap gap-2">
              {sol.bullets.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[12px] text-secondary font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </span>
              ))}
            </div>
            <p className="text-body-gray/65 text-sm italic border-l-2 border-primary/30 pl-4">{sol.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
