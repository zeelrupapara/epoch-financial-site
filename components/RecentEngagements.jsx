"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";

const engagements = [
  { amount: "$175M", industry: "Heavy Equipment Rental and Construction Services", type: "ABL" },
  { amount: "$55M", industry: "Consumer Retail / E-commerce", type: "ABL" },
  { amount: "$50M", industry: "Foodservice Distribution and Wholesale Supply", type: "ABL" },
  { amount: "$25M", industry: "Clean Energy and Sustainable Aviation Fuel", type: "ABL" },
  { amount: "$22M", industry: "Construction and Heavy Industrial Services", type: "ABL" },
  { amount: "$20M", industry: "Environmental Services / CleanTech / Sustainability Consulting", type: "ABL" },
  { amount: "$17M", industry: "Transportation and Logistics", type: "Line of Credit" },
  { amount: "$15M", industry: "Food & Beverage / Agriculture Processing", type: "Line of Credit" },
  { amount: "$15M", industry: "Medical Devices and Healthcare Technology", type: "Equipment" },
  { amount: "$10M", industry: "Aerospace, Satellite Communications, and Telecommunications Technology", type: "ABL" },
  { amount: "$9M", industry: "Staffing and Recruiting", type: "Bridge Financing" },
  { amount: "$7M", industry: "Transportation and Logistics", type: "Line of Credit" },
];

// Duplicate the list so the marquee can loop seamlessly without a visible jump.
const looped = [...engagements, ...engagements];

function Card({ deal }) {
  return (
    <div className="group shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] flex flex-col rounded-2xl border border-border-light bg-white p-7 md:p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-1.5 w-16 bg-primary rounded-br-lg" />

      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider mb-6">
        {deal.type}
      </span>

      <div className="text-secondary 2xl:text-[44px] xl:text-[40px] lg:text-[38px] md:text-[36px] text-[34px] font-extrabold leading-none mb-3 tracking-tight group-hover:text-primary transition-colors">
        {deal.amount}
      </div>
      <p className="text-body-gray/60 text-[11px] font-semibold uppercase tracking-wider mb-4">Total Facility</p>

      <p className="text-body-gray text-sm leading-relaxed mb-8 flex-1">
        {deal.industry}
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
      >
        Discuss a similar opportunity
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
      </Link>
    </div>
  );
}

export default function RecentEngagements() {
  return (
    <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12">
      <div className="mx-auto max-w-[1600px] 2xl:px-6 lg:px-16 md:px-12 px-4">
        <FadeUp delay={80}>
          <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3 text-center">Representative Transactions</p>
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center mb-4 leading-tight">
            Recent Middle Market Financing Engagements
          </h2>
          <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Representative middle market financing engagements facilitated by EPOCH Financial across asset-based lending, lines of credit, equipment financing, and bridge capital.
          </p>
        </FadeUp>
      </div>

      {/* Marquee — full-bleed so cards scroll edge-to-edge */}
      <div className="relative engagement-marquee group overflow-hidden" aria-label="Recent financing engagements carousel">
        {/* Fade gradients on left/right edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="engagement-track flex gap-5 md:gap-6 py-4">
          {looped.map((deal, i) => (
            <Card key={i} deal={deal} />
          ))}
        </div>
      </div>

      <style>{`
        .engagement-track {
          width: max-content;
          animation: engagement-scroll 60s linear infinite;
        }
        .engagement-marquee:hover .engagement-track {
          animation-play-state: paused;
        }
        @keyframes engagement-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .engagement-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
