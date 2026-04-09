"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const TRUNCATE_AT = 100;

export default function StructuredSolutionsCards({ cards }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function handleToggle(i) {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {cards.map((card, i) => {
        const isLong = card.description.length > TRUNCATE_AT;
        const expanded = expandedIndex === i;
        const displayText =
          isLong && !expanded
            ? card.description.slice(0, TRUNCATE_AT).trimEnd() + "..."
            : card.description;

        return (
          <FadeUp key={card.num} delay={i * 80}>
            <div className="flex h-full flex-col gap-3 p-7 rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 rounded-t-2xl -mx-6 -mt-6 mb-2" style={{ background: "linear-gradient(90deg, #11375F, #0DA2E7)" }} />
              <div className="flex items-center gap-4">
                <span
                  className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl text-white text-base md:text-lg font-bold shrink-0"
                  style={{ background: "linear-gradient(135deg, #11375F, #0DA2E7)" }}
                >
                  {card.num}
                </span>
                <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{card.title}</h3>
              </div>
              <p className="text-body-gray md:text-base text-sm leading-relaxed flex-1">{displayText}</p>
              {isLong && (
                <button
                  onClick={() => handleToggle(i)}
                  className="mt-1 text-primary text-sm font-semibold hover:underline self-start"
                >
                  {expanded ? "Show less" : "Show more..."}
                </button>
              )}
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
