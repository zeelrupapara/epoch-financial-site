const items = [
  {
    num: "01",
    icon: "sync_alt",
    title: "Receivables-Based Liquidity in Technology Operations",
    body: "Technology companies leverage receivables to maintain liquidity and support ongoing operations, particularly in environments driven by subscription billing, enterprise contracts, and usage-based revenue models.",
    characteristics: [
      "Recurring receivables from SaaS subscriptions and service agreements",
      "Predictable cash flow tied to contracted customer relationships",
      "Exposure to billing cycles and delayed enterprise payments",
      "Ongoing working capital needs to support growth and operations",
      "Alignment with scalable and recurring revenue models",
    ],
  },
  {
    num: "02",
    icon: "account_balance_wallet",
    title: "Working Capital Optimization Through Receivables",
    body: "Receivables play a key role in optimizing working capital by bridging the gap between revenue recognition and cash collection in technology businesses.",
    characteristics: [
      "Supports product development and operational continuity",
      "Improves cash flow timing across billing cycles",
      "Reduces pressure from delayed customer payments",
      "Enhances financial flexibility during growth phases",
      "Aligns with recurring and project-based revenue streams",
    ],
  },
  {
    num: "03",
    icon: "autorenew",
    title: "Receivables Management in Subscription-Based Models",
    body: "Subscription-driven technology companies rely on effective receivables management to maintain steady liquidity and operational efficiency.",
    characteristics: [
      "Monthly or annual billing cycles with predictable inflows",
      "High customer retention and contract-based revenues",
      "Dependence on timely collections and billing accuracy",
      "Integration with customer lifecycle and revenue tracking",
      "Supports scalability across expanding user bases",
    ],
  },
  {
    num: "04",
    icon: "business",
    title: "Enterprise & Contract Receivables in Tech Operations",
    body: "Technology companies serving enterprise clients often manage large, contract-based receivables that influence liquidity and cash flow planning.",
    characteristics: [
      "Larger invoice sizes with extended payment terms",
      "Concentration risk across key enterprise customers",
      "Alignment with long-term service or licensing agreements",
      "Exposure to negotiation-driven payment structures",
      "Importance of receivables visibility and tracking",
    ],
  },
  {
    num: "05",
    icon: "trending_up",
    title: "Liquidity Support for Scaling Technology Businesses",
    body: "As technology companies scale, receivables become a critical component in sustaining liquidity and funding operational expansion.",
    characteristics: [
      "Increasing receivables volume with business growth",
      "Need for liquidity to support hiring and infrastructure",
      "Alignment with customer acquisition and expansion strategies",
      "Supports investment in platforms and innovation",
      "Enables smoother scaling across evolving revenue cycles",
    ],
  },
];

export default function TechReceivablesSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border-light rounded-2xl overflow-hidden">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const isOdd = items.length % 2 !== 0;
        return (
          <div
            key={item.num}
            className={`flex flex-col gap-4 p-7 md:p-8 border-b border-border-light
              ${i % 2 === 0 && !isLast ? "lg:border-r" : ""}
              ${isLast && isOdd ? "lg:col-span-2 lg:border-r-0" : ""}
              ${isLast ? "border-b-0" : ""}
              ${i === items.length - 2 && !isOdd ? "lg:border-b-0" : ""}
            `}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(13,162,231,0.10)" }}
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>{item.icon}</span>
              </span>
              <span className="text-[11px] font-bold text-primary/50 tabular-nums">{item.num}</span>
            </div>
            <h3 className="text-secondary text-base md:text-lg font-bold leading-snug">{item.title}</h3>
            <p className="text-body-gray text-sm leading-relaxed">{item.body}</p>
            <div className="h-px bg-border-light" />
            <ul className="flex flex-col gap-1.5">
              {item.characteristics.map((c) => (
                <li key={c} className="flex items-start gap-2 text-body-gray text-[13px] leading-snug">
                  <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full bg-primary/40" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
