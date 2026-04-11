"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "receivables",
    icon: "receipt_long",
    label: "Operational Liquidity & Receivables",
    title: "Operational Liquidity & Receivables Financing",
    body: "Construction companies operate with delayed payments, retainage, and milestone billing, creating timing gaps between revenue recognition and cash collection. Receivables-based credit facilities are structured to bridge these gaps and align liquidity with project activity.",
    bullets: [
      "Managing retainage and delayed progress payments",
      "Supporting subcontractor and supplier obligations",
      "Funding ongoing project execution costs",
      "Stabilizing cash flow across billing cycles",
      "Maintaining liquidity across multiple job sites",
    ],
    note: "These solutions are typically structured within asset-based or revolving credit frameworks.",
    href: "/ar-financing",
  },
  {
    id: "equipment",
    icon: "construction",
    label: "Equipment & Asset Financing",
    title: "Equipment & Asset Financing",
    body: "Heavy machinery and construction equipment are core to operational efficiency and project delivery. Equipment-backed financing is structured against eligible assets, enabling companies to invest in, upgrade, or expand their fleet without disrupting liquidity.",
    bullets: [
      "Acquiring construction machinery and specialized equipment",
      "Upgrading or replacing aging assets",
      "Expanding fleet capacity for new projects",
      "Enhancing productivity across job sites",
    ],
    note: "Facilities are aligned with asset value, utilization, and lifecycle, forming a key component of construction capital structures.",
    href: "/abl",
  },
  {
    id: "realestate",
    icon: "domain",
    label: "Project & Real Estate Development",
    title: "Project & Real Estate Development Financing",
    body: "Construction companies involved in development projects require capital aligned with project timelines, land acquisition, and build phases. Asset based financing for real estate is often structured against underlying property value and project progress, supporting disciplined execution.",
    bullets: [
      "Funding ground-up construction and development projects",
      "Supporting land acquisition and site preparation",
      "Financing phased project development",
      "Aligning capital with project milestones and valuations",
    ],
    note: "These solutions are structured to reflect project scale, timelines, and asset performance.",
    href: "/commercial-real-estate",
  },
  {
    id: "workingcapital",
    icon: "payments",
    label: "Working Capital, Labor & Material",
    title: "Working Capital, Labor & Material Financing",
    body: "Construction operations require continuous investment in labor, materials, and site infrastructure. Financing structures support these ongoing requirements while maintaining liquidity and operational continuity.",
    bullets: [
      "Managing labor and subcontractor costs",
      "Funding raw materials and procurement cycles",
      "Supporting site setup and infrastructure development",
      "Managing cost fluctuations across project phases",
    ],
    note: "Facilities are aligned with project demands, cost structures, and execution timelines, supporting consistent delivery and financial stability across construction operations.",
    href: "/abl",
  },
];

export default function ConstructionFacilitiesTabs() {
  const [active, setActive] = useState("receivables");
  const tab = tabs.find((t) => t.id === active);

  return (
    <div className="mt-10">
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-t-xl text-sm font-semibold transition-all duration-200 border-b-0 ${
              active === t.id
                ? "bg-white text-primary border border-border-light border-b-white shadow-sm"
                : "bg-bg-alt text-body-gray hover:text-secondary hover:bg-white/60 border border-transparent"
            }`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{t.icon}</span>
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white border border-border-light rounded-b-2xl rounded-tr-2xl p-8 md:p-10 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-secondary text-xl md:text-2xl font-bold mb-4">{tab.title}</h3>
            <p className="text-body-gray text-sm md:text-base leading-relaxed mb-6">{tab.body}</p>
            <p className="text-secondary text-sm font-semibold mb-3 uppercase tracking-wider">Typical use cases include:</p>
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
            <p className="text-body-gray/70 text-sm italic border-l-2 border-primary/30 pl-4">{tab.note}</p>
          </div>
          <div className="lg:w-[220px] shrink-0 flex flex-col gap-4 justify-between">
            <div className="rounded-xl bg-secondary/5 border border-border-light p-5 flex flex-col items-center text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>{tab.icon}</span>
              </div>
              <p className="text-secondary text-sm font-bold leading-snug">{tab.title}</p>
            </div>
            <Link
              href={tab.href}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0b8fcc] transition-colors"
            >
              Learn More
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
