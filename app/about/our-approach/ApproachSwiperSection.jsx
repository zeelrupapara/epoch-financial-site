"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FadeUp from "@/components/FadeUp";

const approachCards = [
  {
    icon: "architecture",
    title: "Strategic Capital Structuring",
    description:
      "Each engagement is centered on building financing structures aligned with operational demands, financial strategy, and long-term business objectives.",
  },
  {
    icon: "rocket_launch",
    title: "Beyond Conventional Financing",
    description:
      "Middle market companies require more than capital access. Solutions are structured to support liquidity, improve capital efficiency, and align with broader business priorities.",
  },
  {
    icon: "query_stats",
    title: "Comprehensive Financial Assessment",
    description:
      "Each transaction begins with a detailed evaluation of capital structure, cash flow dynamics, and growth plans to ensure precise alignment with financing requirements.",
  },
  {
    icon: "tune",
    title: "Customized Credit Solutions",
    description:
      "Financing structures are tailored to enhance liquidity while maintaining balance sheet strength and operational flexibility.",
  },
  {
    icon: "account_balance",
    title: "Structured Credit Expertise",
    description:
      "Experience spans receivable-anchored credit facilities, asset-based lending structures, and hybrid capital solutions designed for evolving business environments.",
  },
  {
    icon: "sync_alt",
    title: "Cycle-Responsive Structures",
    description:
      "Financing structures are developed to adapt to changing market conditions, fluctuating revenues, and operational demands without disrupting business continuity.",
  },
  {
    icon: "verified",
    title: "Disciplined Execution",
    description:
      "A strong focus on underwriting rigor, lender alignment, and execution efficiency ensures transactions move forward with speed and precision.",
  },
  {
    icon: "handshake",
    title: "Certainty and Execution Confidence",
    description:
      "In time-sensitive situations, disciplined processes and coordinated lender engagement ensure clarity and confidence at every stage of the transaction.",
  },
];

export default function ApproachSwiperSection() {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 overflow-hidden">
      <div className="mx-auto max-w-[1600px]">
        <FadeUp className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight max-w-xl">
            A Disciplined Approach to Capital Deployment
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => swiper?.slidePrev()}
              disabled={isBeginning}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-secondary/20 bg-white text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                chevron_left
              </span>
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              disabled={isEnd}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-secondary/20 bg-white text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                chevron_right
              </span>
            </button>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="overflow-hidden pb-3 -mb-3">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(s) => {
                setIsBeginning(s.isBeginning);
                setIsEnd(s.isEnd);
              }}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{
                480: { slidesPerView: 1.3, spaceBetween: 16 },
                640: { slidesPerView: 1.8, spaceBetween: 20 },
                900: { slidesPerView: 2.4, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 24 },
                1440: { slidesPerView: 3.5, spaceBetween: 24 },
              }}
              style={{ paddingBottom: "8px" }}
              className="[&_.swiper-wrapper]:items-stretch"
            >
              {approachCards.map((card, i) => (
                <SwiperSlide key={card.title} className="!h-auto">
                  <div className="group flex flex-col bg-white border border-border-light rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full p-8 gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #11375F, #0DA2E7)" }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 26 }}>
                        {card.icon}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-primary/60 uppercase tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="lg:text-[17px] md:text-base text-[15px] font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-body-gray md:text-[14px] text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
