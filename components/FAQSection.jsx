import FadeUp from "@/components/FadeUp";

export default function FAQSection({ faqs }) {
  return (
    <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
      <div className="mx-auto max-w-4xl">
        <FadeUp className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>help</span>
            Got Questions?
          </span>
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body-gray md:text-base text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            {faqs.intro || "Everything you need to know. Can't find what you're looking for? Contact our team."}
          </p>
        </FadeUp>
        <div className="flex flex-col gap-3">
          {faqs.items.map((faq, i) => (
            <FadeUp key={i} delay={i * 70}>
              <details className="group rounded-2xl bg-white border border-border-light shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <summary className="flex items-center gap-4 cursor-pointer list-none px-6 py-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-open:bg-primary group-open:text-white transition-colors duration-200">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
                  </span>
                  <h3 className="lg:text-xl md:text-lg text-base font-semibold text-secondary flex-1">
                    {faq.question}
                  </h3>
                  <span
                    className="material-symbols-outlined text-body-gray group-open:rotate-180 transition-transform duration-300 shrink-0"
                    style={{ fontSize: 20 }}
                  >
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5 ml-12">
                  <p className="text-body-gray md:text-base text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
