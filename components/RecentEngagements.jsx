"use client";

import { useState, useRef } from "react";
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

const FILTERS = ["All", "ABL", "Line of Credit", "Equipment", "Bridge Financing"];

export default function RecentEngagements() {
  const [active, setActive] = useState("All");
  const scrollRef = useRef(null);

  const visible = active === "All" ? engagements : engagements.filter((e) => e.type === active);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
      <div className="mx-auto max-w-[1600px]">
        <FadeUp delay={80}>
          <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3 text-center">Representative Transactions</p>
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold text-center mb-4 leading-tight">
            Recent Middle Market Financing Engagements
          </h2>
          <p className="text-body-gray text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-10">
            Representative middle market financing engagements facilitated by EPOCH Financial across asset-based lending, lines of credit, equipment financing, and bridge capital.
          </p>
        </FadeUp>

        {/* FILTER PILLS */}
        <FadeUp delay={120}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {FILTERS.map((label) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={
                    "inline-flex items-center rounded-full border px-5 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[13px] font-semibold transition-all duration-200 " +
                    (isActive
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-secondary border-border-light hover:border-primary hover:text-primary")
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* CAROUSEL */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white border border-border-light shadow-md hover:bg-primary hover:text-white hover:border-primary text-secondary transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>chevron_left</span>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-1 pb-4 -mx-1 [scrollbar-width:thin] [-ms-overflow-style:none] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-bg-alt [&::-webkit-scrollbar-thumb]:bg-primary/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/50"
            style={{ scrollBehavior: "smooth" }}
          >
            {visible.map((deal, i) => (
              <div
                key={`${active}-${i}`}
                data-card
                className="group snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[44%] lg:w-[31%] xl:w-[23.5%] flex flex-col rounded-2xl border border-border-light bg-white p-7 md:p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* corner accent */}
                <div className="absolute top-0 left-0 h-1.5 w-16 bg-primary rounded-br-lg" />

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider mb-6">
                  {deal.type}
                </span>

                <div className="text-secondary 2xl:text-[48px] xl:text-[42px] lg:text-[40px] md:text-[36px] text-[36px] font-extrabold leading-none mb-3 tracking-tight group-hover:text-primary transition-colors">
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
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white border border-border-light shadow-md hover:bg-primary hover:text-white hover:border-primary text-secondary transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>chevron_right</span>
          </button>
        </div>

      </div>
    </section>
  );
}
