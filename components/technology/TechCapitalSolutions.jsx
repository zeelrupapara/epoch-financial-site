"use client";

import { useState } from "react";

const solutions = [
  {
    num: "01",
    icon: "receipt_long",
    label: "Receivables",
    title: "Operational Liquidity & Receivables Financing",
    body: "Maintaining consistent cash flow is essential, particularly for companies with subscription-based, SaaS, or project-driven revenue models.",
    bullets: [
      { icon: "sync_alt", text: "Managing delays in customer or enterprise receivables" },
      { icon: "code", text: "Supporting ongoing product development and release cycles" },
      { icon: "campaign", text: "Funding customer acquisition and go-to-market strategies" },
      { icon: "waterfall_chart", text: "Stabilizing cash flow across recurring revenue streams" },
      { icon: "rocket_launch", text: "Maintaining liquidity during rapid scaling phases" },
    ],
    note: "Typically structured within asset-based or recurring revenue-aligned frameworks, reflecting receivables quality and revenue predictability.",
    stat: { value: "SaaS / ARR", label: "Revenue Model Alignment" },
  },
  {
    num: "02",
    icon: "cloud",
    label: "Infrastructure",
    title: "Infrastructure & Cloud Investment",
    body: "Technology businesses require continuous investment in digital infrastructure, including cloud environments, data systems, and platform scalability.",
    bullets: [
      { icon: "cloud_upload", text: "Expanding cloud infrastructure and hosting environments" },
      { icon: "storage", text: "Investing in data centers and storage capabilities" },
      { icon: "architecture", text: "Enhancing system architecture and platform scalability" },
      { icon: "settings_suggest", text: "Supporting DevOps, automation, and deployment pipelines" },
      { icon: "bar_chart", text: "Increasing capacity to handle user and data growth" },
    ],
    note: "Facilities are aligned with infrastructure utilization, scalability needs, and long-term technology strategies.",
    stat: { value: "Cloud-Native", label: "Infrastructure Focus" },
  },
  {
    num: "03",
    icon: "lightbulb",
    label: "Product & IP",
    title: "Product Development & IP Financing",
    body: "Innovation is central to technology companies, requiring capital aligned with development timelines and commercialization cycles.",
    bullets: [
      { icon: "construction", text: "Funding software development and product innovation" },
      { icon: "science", text: "Supporting research and development initiatives" },
      { icon: "verified_user", text: "Financing proprietary technology and IP creation" },
      { icon: "add_circle", text: "Enhancing product features and platform capabilities" },
      { icon: "timeline", text: "Aligning capital with product launch and adoption cycles" },
    ],
    note: "Structures designed around intellectual property value, recurring revenue potential, and market adoption metrics.",
    stat: { value: "IP-Backed", label: "Collateral Structure" },
  },
  {
    num: "04",
    icon: "payments",
    label: "Working Capital",
    title: "Working Capital & Technology Investment",
    body: "Ongoing investment in platforms, talent, and digital capabilities is critical for sustaining competitiveness and growth.",
    bullets: [
      { icon: "devices", text: "Funding technology upgrades and platform enhancements" },
      { icon: "integration_instructions", text: "Supporting SaaS infrastructure and digital delivery models" },
      { icon: "handshake", text: "Managing vendor, licensing, and service provider payments" },
      { icon: "security", text: "Investing in cybersecurity and data protection systems" },
      { icon: "lightbulb_circle", text: "Enabling innovation across digital products and services" },
    ],
    note: "Facilities are aligned with operational requirements, development cycles, and long-term growth objectives.",
    stat: { value: "Flexible", label: "Capital Structure" },
  },
];

const tabAccents = [
  { active: "bg-primary", ring: "ring-primary/40", glow: "bg-primary", bar: "bg-gradient-to-r from-primary to-[#0b8fcc]" },
  { active: "bg-primary", ring: "ring-primary/40", glow: "bg-primary", bar: "bg-gradient-to-r from-primary to-[#0b8fcc]" },
  { active: "bg-primary", ring: "ring-primary/40", glow: "bg-primary", bar: "bg-gradient-to-r from-primary to-[#0b8fcc]" },
  { active: "bg-primary", ring: "ring-primary/40", glow: "bg-primary", bar: "bg-gradient-to-r from-primary to-[#0b8fcc]" },
];

export default function TechCapitalSolutions() {
  const [active, setActive] = useState(0);
  const sol = solutions[active];
  const accent = tabAccents[active];

  return (
    <div className="flex flex-col gap-0">

      {/* ── Tab Bar ── */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8">
        {solutions.map((s, i) => {
          const isActive = i === active;
          const a = tabAccents[i];
          return (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              className={`group relative flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-300 border
                ${isActive
                  ? `${a.active} border-transparent shadow-lg ring-4 ${a.ring} text-white`
                  : "bg-white border-slate-200/80 hover:border-primary/30 hover:bg-primary/[0.03] text-secondary"
                }`}
            >
              {/* icon */}
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300
                  ${isActive ? "bg-white/20" : "bg-primary/8"}`}
              >
                <span
                  className={`material-symbols-outlined transition-colors duration-300 ${isActive ? "text-white" : "text-primary"}`}
                  style={{ fontSize: 20 }}
                >
                  {s.icon}
                </span>
              </span>

              <div className="flex flex-col min-w-0">
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isActive ? "text-white/60" : "text-primary/50"}`}>
                  {s.num}
                </span>
                <span className={`text-[13px] font-bold leading-tight truncate transition-colors ${isActive ? "text-white" : "text-secondary group-hover:text-primary"}`}>
                  {s.label}
                </span>
              </div>

              {/* active dot */}
              {isActive && (
                <span className="ml-auto h-2 w-2 rounded-full bg-white/60 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Content Panel ── */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-sm">

        {/* Top accent bar */}
        <div className={`h-1.5 w-full ${accent.bar} transition-all duration-500`} />

        <div className="flex flex-col lg:flex-row">

          {/* Left column */}
          <div className="lg:w-[42%] shrink-0 flex flex-col gap-6 p-8 lg:p-10 lg:border-r border-slate-100">

            {/* Header */}
            <div className="flex items-start gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accent.active} shadow-md`}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: 28 }}>{sol.icon}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">Solution {sol.num}</span>
                <h3 className="text-secondary font-extrabold text-lg leading-snug mt-0.5">{sol.title}</h3>
              </div>
            </div>

            {/* Body */}
            <p className="text-body-gray text-sm md:text-base leading-relaxed">{sol.body}</p>

            {/* Stat badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-4">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent.active}`}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: 18 }}>insights</span>
              </span>
              <div>
                <p className="text-secondary font-black text-base leading-none">{sol.stat.value}</p>
                <p className="text-body-gray/70 text-[11px] uppercase tracking-wider font-semibold mt-0.5">{sol.stat.label}</p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-auto flex items-start gap-3 rounded-2xl bg-primary/[0.04] border border-primary/10 px-4 py-3.5">
              <span className="material-symbols-outlined text-primary/50 mt-0.5 shrink-0" style={{ fontSize: 15 }}>info</span>
              <p className="text-body-gray/70 text-[12px] italic leading-relaxed">{sol.note}</p>
            </div>
          </div>

          {/* Right column — bullets */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50 mb-5">Key Capabilities</p>
            <div className="flex flex-col gap-3">
              {sol.bullets.map((b, idx) => (
                <div
                  key={b.text}
                  className="group/item flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-4 hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-300 cursor-default"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${accent.active} opacity-80 group-hover/item:opacity-100 transition-opacity`}
                  >
                    <span className="material-symbols-outlined text-white" style={{ fontSize: 17 }}>{b.icon}</span>
                  </span>
                  <span className="text-secondary text-sm font-medium leading-snug group-hover/item:text-primary transition-colors">{b.text}</span>
                  <span className="ml-auto text-[10px] font-black text-slate-300 group-hover/item:text-primary/40 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative large number */}
        <div
          className="absolute bottom-4 right-8 text-[120px] font-black leading-none select-none pointer-events-none transition-all duration-500"
          style={{ color: "rgba(13,162,231,0.04)" }}
        >
          {sol.num}
        </div>
      </div>
    </div>
  );
}
