const segments = [
  {
    num: "01",
    icon: "restaurant",
    title: "Food & Beverage",
    body: "Food and beverage companies operate with high-volume production, rapid inventory turnover, and strict regulatory requirements. Demand patterns and shelf-life constraints require efficient supply chain and distribution management.",
    characteristics: [
      "High inventory turnover and short shelf life",
      "Strict regulatory and quality standards",
      "Seasonal and consumption-driven demand",
      "Dependence on efficient distribution networks",
      "Margin sensitivity requiring cost control",
    ],
  },
  {
    num: "02",
    icon: "spa",
    title: "Personal Care & Cosmetics",
    body: "Personal care and cosmetics companies are driven by brand positioning, innovation, and changing consumer trends. Strong marketing and multi-channel distribution are essential to sustain growth and competitiveness.",
    characteristics: [
      "Strong focus on branding and differentiation",
      "Trend-driven demand cycles",
      "High marketing and acquisition costs",
      "Multi-channel sales strategy",
      "SKU diversity with moderate turnover",
    ],
  },
  {
    num: "03",
    icon: "cleaning_services",
    title: "Household & Cleaning Products",
    body: "Household and cleaning products benefit from stable demand and predictable consumption patterns. Operations focus on high-volume production, cost efficiency, and strong distribution networks across retail and wholesale channels.",
    characteristics: [
      "Stable and recurring demand",
      "High-volume standardized production",
      "Price-sensitive competitive landscape",
      "Strong retail distribution reliance",
      "Predictable revenue patterns",
    ],
  },
  {
    num: "04",
    icon: "favorite",
    title: "Health & Wellness Products",
    body: "Health and wellness companies experience growing demand driven by consumer awareness. Operations require regulatory compliance, quality assurance, and strong branding to support premium positioning and market expansion strategies.",
    characteristics: [
      "Growth driven by health awareness",
      "Regulatory and compliance-intensive",
      "Premium pricing potential",
      "Brand trust is critical",
      "Expansion across new markets",
    ],
  },
  {
    num: "05",
    icon: "devices",
    title: "Consumer Electronics & Accessories",
    body: "Consumer electronics and accessories companies operate with rapid innovation cycles and fluctuating demand. Efficient inventory management and strong distribution channels are critical to manage product lifecycles and market shifts.",
    characteristics: [
      "Short product life cycles",
      "Demand variability from trends",
      "Inventory obsolescence risk",
      "Strong e-commerce presence",
      "Seasonal demand spikes",
    ],
  },
  {
    num: "06",
    icon: "checkroom",
    title: "Apparel & Lifestyle Products",
    body: "Apparel and lifestyle companies are influenced by fashion trends and seasonal demand. Managing inventory, product cycles, and brand positioning is essential to remain competitive across retail and digital channels.",
    characteristics: [
      "Seasonal and trend-driven demand",
      "High SKU diversity",
      "Inventory risk from unsold stock",
      "Brand-driven purchasing decisions",
      "Multi-channel distribution model",
    ],
  },
];

export default function CPGSegmentsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {segments.map((seg, i) => (
        <div
          key={seg.num}
          className="relative flex flex-col gap-5 rounded-2xl border border-border-light bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
        >
          {/* Faded number watermark */}
          <span className="absolute top-4 right-5 text-[52px] font-black leading-none select-none text-secondary/6 tabular-nums">
            {seg.num}
          </span>

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-2xl" />

          {/* Icon */}
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ background: "rgba(13,162,231,0.10)" }}
          >
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>
              {seg.icon}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-secondary text-lg font-bold leading-snug pr-8">{seg.title}</h3>

          {/* Body */}
          <p className="text-body-gray text-sm leading-relaxed">{seg.body}</p>

          {/* Divider */}
          <div className="h-px bg-border-light" />

          {/* Characteristics */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/70 mb-3">
              Characteristics
            </p>
            <ul className="flex flex-col gap-2">
              {seg.characteristics.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5"
                    style={{ background: "rgba(13,162,231,0.12)" }}
                  >
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 10 }}>
                      check
                    </span>
                  </span>
                  <span className="text-body-gray text-[13px] leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
