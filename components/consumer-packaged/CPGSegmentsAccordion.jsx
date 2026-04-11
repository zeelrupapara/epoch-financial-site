"use client";

import { useState } from "react";

const segments = [
  {
    id: "food",
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
    id: "personalcare",
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
    id: "household",
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
    id: "health",
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
    id: "electronics",
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
    id: "apparel",
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

export default function CPGSegmentsAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {segments.map((seg) => {
        const isOpen = open === seg.id;
        return (
          <div
            key={seg.id}
            className={`rounded-xl overflow-hidden border transition-all duration-200 ${
              isOpen ? "border-primary/40 shadow-md" : "border-border-light shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : seg.id)}
              className={`w-full flex items-center gap-4 px-5 md:px-7 py-5 text-left transition-colors duration-200 ${
                isOpen ? "bg-primary/6" : "bg-white hover:bg-bg-alt"
              }`}
              style={{ background: isOpen ? "rgba(13,162,231,0.06)" : undefined }}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                  isOpen ? "bg-primary text-white shadow-sm" : "bg-secondary/8 text-secondary"
                }`}
                style={{ background: isOpen ? undefined : "rgba(17,55,95,0.07)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{seg.icon}</span>
              </span>
              <span
                className={`flex-1 text-base font-bold transition-colors duration-200 ${
                  isOpen ? "text-primary" : "text-secondary"
                }`}
              >
                {seg.title}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-primary" : "text-body-gray/40"
                }`}
                style={{ fontSize: 22 }}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-5 md:px-7 pb-6 pt-4 border-t border-primary/10 bg-white">
                <p className="text-body-gray text-sm md:text-base leading-relaxed mb-5">{seg.body}</p>
                <p className="text-secondary text-[11px] font-semibold uppercase tracking-widest mb-3">Characteristics</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {seg.characteristics.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-body-gray text-sm">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/12 mt-0.5"
                        style={{ background: "rgba(13,162,231,0.12)" }}>
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 11 }}>check</span>
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
