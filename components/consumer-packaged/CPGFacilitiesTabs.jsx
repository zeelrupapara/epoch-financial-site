"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "receivables",
    icon: "receipt_long",
    label: "Operational Liquidity & Receivables",
    title: "Operational Liquidity & Receivables Financing",
    body: "Maintaining consistent cash flow is essential for CPG companies operating with extended retailer payment cycles. Receivables financing CPG structures provide liquidity through the monetization of eligible accounts tied to retailer and distributor receivables. Receivables are advanced through structured facilities to support working capital financing CPG requirements aligned with sales cycles.",
    bullets: [
      "Managing extended retailer and distributor payment terms",
      "Supporting ongoing production and order fulfillment",
      "Funding large retail or wholesale orders",
      "Stabilizing day-to-day cash flow",
      "Improving liquidity across multi-channel sales cycles",
    ],
    note: "These solutions are commonly structured through asset-based lending CPG facilities or revolving credit frameworks.",
    href: "/ar-financing",
  },
  {
    id: "inventory",
    icon: "inventory_2",
    label: "Inventory Financing",
    title: "Inventory Financing for CPG Companies",
    body: "Inventory is a core asset in the CPG sector, often requiring significant upfront investment. Inventory financing CPG companies structures are designed against raw materials and finished goods within defined advance rates. This form of financing is particularly valuable for companies managing high-volume production or seasonal demand fluctuations.",
    bullets: [
      "Procuring raw materials in bulk",
      "Managing finished goods across warehouses",
      "Supporting product launches and retail expansion",
      "Preparing for seasonal or promotional demand spikes",
    ],
    note: "Facilities are generally aligned with inventory turnover, valuation, and demand predictability, forming a key component of broader asset-based credit solutions.",
    href: "/abl",
  },
  {
    id: "retail",
    icon: "storefront",
    label: "Retail & Wholesale Distribution",
    title: "Retail & Wholesale Distribution Financing",
    body: "CPG companies rely heavily on retail and wholesale channels, where financing is essential to manage procurement, fulfillment, and large-scale order execution. Structured financing solutions support high-volume transactions and evolving distribution networks. Financing is typically delivered through senior secured structures including a CPG revolving credit facility aligned with sales velocity and customer concentration.",
    bullets: [
      "Managing large retailer purchase orders",
      "Supporting distribution agreements and channel expansion",
      "Funding multi-location retail supply chains",
      "Scaling national or regional distribution operations",
    ],
    note: "These solutions are aligned with transaction volume, customer base strength, and operational stability.",
    href: "/abl",
  },
  {
    id: "production",
    icon: "precision_manufacturing",
    label: "Production, Equipment & Supply Chain",
    title: "Production, Equipment & Supply Chain Financing",
    body: "Efficient production and supply chain operations require continuous investment in equipment, manufacturing capacity, and logistics infrastructure. Structured financing frameworks for CPG companies support these investments without constraining working capital.",
    bullets: [
      "Expanding manufacturing capacity",
      "Upgrading production lines and packaging systems",
      "Investing in warehousing and distribution infrastructure",
      "Enhancing supply chain technology and automation",
    ],
    note: "Facilities are aligned with asset value and operational performance, supporting long-term growth and scalability.",
    href: "/abl",
  },
];

export default function CPGFacilitiesTabs() {
  const [active, setActive] = useState("receivables");
  const tab = tabs.find((t) => t.id === active);

  return (
    <div className="flex flex-col lg:flex-row border border-border-light rounded-2xl overflow-hidden shadow-sm">
      {/* Vertical sidebar */}
      <div className="lg:w-[260px] shrink-0 bg-secondary flex flex-col">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex items-center gap-3 px-5 py-5 text-left border-b border-white/10 last:border-b-0 transition-all duration-200 relative ${
              active === t.id
                ? "bg-primary text-white"
                : "text-white/55 hover:bg-white/8 hover:text-white"
            }`}
          >
            {active === t.id && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-primary hidden lg:block" />
            )}
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                active === t.id ? "bg-white/20" : "bg-white/8"
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{t.icon}</span>
            </span>
            <span className="text-[13px] font-semibold leading-snug">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="flex-1 bg-white p-8 md:p-10">
        <h3 className="text-secondary text-xl md:text-2xl font-bold mb-4">{tab.title}</h3>
        <p className="text-body-gray text-sm md:text-base leading-relaxed mb-6">{tab.body}</p>
        <p className="text-secondary text-[11px] font-semibold uppercase tracking-widest mb-3">Typical use cases include:</p>
        <ul className="flex flex-col gap-2.5 mb-6">
          {tab.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-body-gray text-sm md:text-base">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 13 }}>check</span>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <p className="text-body-gray/70 text-sm italic border-l-2 border-primary/30 pl-4 mb-8">{tab.note}</p>
        <Link
          href={tab.href}
          className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-primary transition-colors duration-200"
        >
          Learn More
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
