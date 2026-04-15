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
    color: "from-blue-500/10 to-transparent",
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
    color: "from-cyan-500/10 to-transparent",
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
    color: "from-indigo-500/10 to-transparent",
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
    color: "from-primary/10 to-transparent",
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
    color: "from-sky-500/10 to-transparent",
  },
];

export default function TechReceivablesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <div
            key={item.num}
            className={`group relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2
              ${isLast ? "md:col-span-2 lg:col-span-1" : ""}
              bg-white/40 backdrop-blur-sm border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]
              hover:shadow-[0_24px_48px_rgba(13,162,231,0.08)] hover:bg-white/60
            `}
          >
            {/* Background Accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-primary transition-colors duration-500"
                >
                  <span className="material-symbols-outlined text-primary group-hover:text-white" style={{ fontSize: 24 }}>{item.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-primary/30 group-hover:text-primary/60 transition-colors uppercase tracking-[0.2em]">Step {item.num}</span>
              </div>

              <h3 className="text-secondary text-lg font-extrabold leading-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-body-gray text-[13px] leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{item.body}</p>

              <div className="flex flex-col gap-2.5 pt-6 border-t border-border-light/50">
                {item.characteristics.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <div className="h-1 w-1 shrink-0 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="text-body-gray text-[12px] font-medium group-hover:text-secondary transition-colors">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
          </div>
        );
      })}

    
    </div>
  );
}

