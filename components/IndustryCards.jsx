"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useState } from "react";

const TRUNCATE_AT = 100;

function IndustryCard({ industry, delay, expanded, onToggle }) {
  const isLong = industry.description.length > TRUNCATE_AT;
  const displayText =
    isLong && !expanded
      ? industry.description.slice(0, TRUNCATE_AT).trimEnd() + "..."
      : industry.description;

  return (
    <FadeUp delay={delay}>
      <div className="rounded-2xl border border-border-light overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white h-full flex flex-col">
        <div className="relative w-full h-60 shrink-0">
          <img
            src={industry.image}
            alt={industry.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 26 }}>
              {industry.icon}
            </span>
            <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{industry.name}</h3>
          </div>
          <p className="text-body-gray md:text-base text-sm leading-relaxed flex-1">
            {displayText}
          </p>
          {isLong && (
            <button
              onClick={onToggle}
              className="mt-2 text-primary text-sm font-semibold hover:underline self-start"
            >
              {expanded ? "Show less" : "Show more..."}
            </button>
          )}
        </div>
      </div>
    </FadeUp>
  );
}

export default function IndustryCards({ title, description, industries }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function handleToggle(i) {
    setExpandedIndex(prev => (prev === i ? null : i));
  }

  return (
    <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
      <div className="mx-auto max-w-[1600px]">
        <FadeUp className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-body-gray md:text-base text-sm mt-2 leading-relaxed">{description}</p>
          )}
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {industries.map((industry, i) => (
            <IndustryCard
              key={i}
              industry={industry}
              delay={i * 80}
              expanded={expandedIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
        <FadeUp delay={industries.length * 80} className="text-center mt-5">
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline"
          >
            View All Industries
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
