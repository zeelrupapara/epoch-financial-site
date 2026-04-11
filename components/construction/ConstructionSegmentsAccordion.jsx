"use client";

import { useState } from "react";

const segments = [
  {
    id: "commercial",
    icon: "apartment",
    title: "Commercial Construction",
    body: "Commercial construction companies focus on building offices, retail centers, hospitality assets, and mixed-use developments. These projects involve large contract values, phased execution, and coordination across multiple stakeholders.",
    characteristics: [
      "Large-scale, multi-phase project execution",
      "Milestone-based billing and retainage structures",
      "Coordination with developers, architects, and contractors",
      "High capital requirements and extended timelines",
      "Exposure to market and tenant demand cycles",
    ],
  },
  {
    id: "residential",
    icon: "home",
    title: "Residential Construction",
    body: "Residential construction includes single-family, multi-family, and large-scale housing developments. Operations are driven by project pipelines, sales velocity, and land development cycles.",
    characteristics: [
      "Volume-driven project execution",
      "Dependence on housing demand and sales cycles",
      "Land acquisition and development requirements",
      "Shorter project timelines compared to commercial builds",
      "Sensitivity to interest rates and market conditions",
    ],
  },
  {
    id: "infrastructure",
    icon: "route",
    title: "Infrastructure & Civil Construction",
    body: "Infrastructure and civil construction companies work on public and private sector projects such as roads, bridges, utilities, and transportation networks. These projects are typically long-term and contract-driven.",
    characteristics: [
      "Large, government-backed or public-private contracts",
      "Extended project durations and complex approvals",
      "Progress-based billing structures",
      "High equipment and labor intensity",
      "Regulatory and compliance-driven execution",
    ],
  },
  {
    id: "industrial",
    icon: "factory",
    title: "Industrial Construction",
    body: "Industrial construction focuses on facilities such as manufacturing plants, warehouses, and logistics centers. These projects require specialized design, engineering, and execution capabilities.",
    characteristics: [
      "Specialized construction requirements and technical complexity",
      "High capital investment per project",
      "Alignment with manufacturing and supply chain demand",
      "Longer planning and development cycles",
      "Integration with operational infrastructure",
    ],
  },
  {
    id: "realestate",
    icon: "location_city",
    title: "Real Estate Development & Construction",
    body: "Developers involved in construction manage projects from land acquisition through completion. This segment combines construction execution with asset value creation and investment strategies.",
    characteristics: [
      "Capital tied to land acquisition and development phases",
      "Phased construction aligned with project valuation",
      "Exposure to real estate market cycles",
      "Coordination across financing, design, and construction",
      "Long-term value creation through asset development",
    ],
  },
  {
    id: "specialty",
    icon: "electrical_services",
    title: "Specialty & Subcontracting Services",
    body: "Specialty contractors provide focused services such as electrical, plumbing, HVAC, and finishing work. These businesses operate within broader construction projects and depend on contract flow.",
    characteristics: [
      "Project-based revenue tied to general contractors",
      "High dependence on project pipeline continuity",
      "Skilled labor requirements",
      "Shorter work cycles within larger projects",
      "Cost control and execution efficiency focus",
    ],
  },
  {
    id: "engineering",
    icon: "engineering",
    title: "Engineering & Project Management Services",
    body: "Engineering and project management firms support planning, design, and execution oversight across construction projects. Their role is critical in ensuring timelines, budgets, and compliance are maintained.",
    characteristics: [
      "Fee-based revenue tied to project scope",
      "Involvement across planning and execution phases",
      "Focus on design, compliance, and efficiency",
      "Coordination across multiple stakeholders",
      "Scalable across large and complex project portfolios",
    ],
  },
  {
    id: "rental",
    icon: "forklift",
    title: "Equipment Rental & Construction Support Services",
    body: "This segment includes companies providing equipment leasing, logistics, and site support services. These businesses play a supporting role in enabling project execution.",
    characteristics: [
      "Revenue linked to equipment utilization rates",
      "Capital-intensive asset base",
      "Demand driven by construction activity levels",
      "Short- to medium-term rental contracts",
      "Ongoing maintenance and asset management requirements",
    ],
  },
];

export default function ConstructionSegmentsAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col divide-y divide-border-light border border-border-light rounded-2xl overflow-hidden">
      {segments.map((seg) => {
        const isOpen = open === seg.id;
        return (
          <div key={seg.id} className={`transition-colors duration-200 ${isOpen ? "bg-secondary" : "bg-white hover:bg-bg-alt"}`}>
            <button
              onClick={() => setOpen(isOpen ? null : seg.id)}
              className="w-full flex items-center gap-4 px-6 md:px-8 py-5 text-left"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                  isOpen ? "bg-primary/20 text-white" : "bg-secondary/8 text-secondary"
                }`}
                style={{ background: isOpen ? "rgba(13,162,231,0.18)" : "rgba(17,55,95,0.07)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{seg.icon}</span>
              </span>
              <span className={`flex-1 text-base md:text-lg font-bold transition-colors duration-200 ${isOpen ? "text-white" : "text-secondary"}`}>
                {seg.title}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-primary" : "text-body-gray/50"}`}
                style={{ fontSize: 22 }}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-6 md:px-8 pb-7 pt-0">
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">{seg.body}</p>
                <p className="text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-3">Characteristics</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {seg.characteristics.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-white/65 text-sm">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/25 mt-0.5">
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
