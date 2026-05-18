"use client";

import { useState } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { articles } from "./data";

const INITIAL_COUNT = 9;

export default function ArticlesGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? articles : articles.slice(0, INITIAL_COUNT);
  const hasMore = articles.length > INITIAL_COUNT;

  return (
    <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visible.map((article, i) => (
            <FadeUp key={article.slug} delay={i * 100}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-border-light shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                {article.image && (
                  <div className="w-full h-48 overflow-hidden shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-secondary text-xl font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-body-gray text-sm leading-relaxed line-clamp-3 flex-1">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-auto group-hover:gap-3 transition-all duration-200 border-t border-border-light pt-4">
                    Read More
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              {showAll ? "Show Less" : `View All Articles (${articles.length})`}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {showAll ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
