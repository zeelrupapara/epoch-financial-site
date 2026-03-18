import Link from "next/link";

export default function ProcessSteps({ title, description, steps }) {
  return (
    <section className="bg-bg-alt 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-secondary 2xl:text-[36px] lg:text-[28px] md:text-[24px] text-[22px] font-bold leading-tight">
            {title}
          </h2>
          <p className="text-body-gray md:text-base text-sm mt-3 leading-relaxed">{description}</p>
        </div>
        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-border-light z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center gap-2.5">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold shadow-lg ring-2 ring-primary/20">
                  {i + 1}
                </div>
                <h3 className="lg:text-xl md:text-lg text-base font-bold text-secondary">{step.title}</h3>
                <p className="text-body-gray md:text-base text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline"
          >
            View Our Approach
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
