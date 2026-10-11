import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import ServiceAreaLeadForm from "@/components/ServiceAreaLeadForm";

const HERO_BG =
  'linear-gradient(rgb(11 35 65 / 72%), rgb(11 35 65 / 88%)), url("/assets/images/businesscreditsolution.jfif")';
const CTA_BG =
  'linear-gradient(rgb(11 35 65 / 92%), rgb(11 35 65 / 96%)), url("/assets/images/businesscreditsolution.jfif")';

const SECTION = "2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4";
const H2 = "text-secondary 2xl:text-[34px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight";
const EYEBROW = "text-primary text-[11px] font-semibold uppercase tracking-widest mb-3";
const LEAD = "text-body-gray text-sm md:text-base leading-relaxed max-w-3xl";

function SectionHeading({ eyebrow, title, lead, className = "mb-12" }) {
  return (
    <FadeUp delay={80}>
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className={`${H2} ${lead ? "mb-4" : className}`}>{title}</h2>
      {lead && <p className={`${LEAD} ${className}`}>{lead}</p>}
    </FadeUp>
  );
}

/**
 * Shared layout for the "Accounts Receivable Financing in [State]" pages.
 * Every string on the page comes from the `data` object so each state page
 * stays a pure content file.
 */
export default function StateARFinancingPage({ data }) {
  const {
    route,
    state,
    hero,
    profile,
    review,
    borrowingBase,
    triggers,
    industries,
    locations,
    comparison,
    cta,
    faqs,
  } = data;

  return (
    <>
      <JsonLd route={route} />

      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-6 md:p-12 lg:p-16"
            style={{ backgroundImage: HERO_BG }}
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
              <div className="lg:col-span-7 flex flex-col items-start gap-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>location_on</span>
                  SERVICE AREA — {state.toUpperCase()}
                </span>
                <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                  {hero.title}
                </h1>
                <p className="text-white/80 md:text-base text-sm leading-relaxed">{hero.intro}</p>
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                >
                  {hero.cta}
                </Link>
              </div>
              <div className="lg:col-span-5 w-full">
                <div className="rounded-2xl bg-white shadow-2xl p-6 md:p-7">
                  <h2 className="text-secondary text-lg font-bold mb-1">Request {state} Financing</h2>
                  <p className="text-body-gray text-[13px] mb-4">Tell us about your capital need — our team responds promptly.</p>
                  <ServiceAreaLeadForm state={state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINANCING PROFILE ─── */}
      <section className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Financing Profile" title={profile.title} lead={profile.intro} />
          <FadeUp delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-border-light">
              <table className="w-full text-left text-sm md:text-[15px]">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-5 py-4 font-semibold">Financing Parameter</th>
                    <th className="px-5 py-4 font-semibold">{profile.columnLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.rows.map((r, i) => (
                    <tr key={r.label} className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                      <td className="px-5 py-4 font-semibold text-secondary whitespace-nowrap">{r.label}</td>
                      <td className="px-5 py-4 text-body-gray">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── RECEIVABLES REVIEW + BORROWING BASE ─── */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <SectionHeading eyebrow="Receivables Review" title={review.title} lead={review.intro} className="mb-8" />
            <FadeUp delay={140}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {review.factors.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-2xl border border-border-light bg-white px-5 py-4">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>check_circle</span>
                    <span className="text-secondary font-semibold text-sm md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body-gray text-sm leading-relaxed mt-6">{review.outro}</p>
            </FadeUp>
          </div>
          <div>
            <SectionHeading eyebrow="Illustrative Example" title={borrowingBase.title} lead={borrowingBase.intro} className="mb-8" />
            <FadeUp delay={200}>
              <div className="overflow-x-auto rounded-2xl border border-border-light">
                <table className="w-full text-left text-sm md:text-[15px]">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="px-5 py-4 font-semibold">{borrowingBase.columnLabel}</th>
                      <th className="px-5 py-4 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {borrowingBase.rows.map((r, i) => {
                      const last = i === borrowingBase.rows.length - 1;
                      return (
                        <tr key={r.label} className={last ? "bg-primary/10" : i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                          <td className={`px-5 py-4 ${last ? "font-bold text-secondary" : "text-body-gray"}`}>{r.label}</td>
                          <td className={`px-5 py-4 text-right tabular-nums ${last ? "font-bold text-secondary" : "font-semibold text-secondary"}`}>{r.value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-body-gray text-xs md:text-sm leading-relaxed mt-4 italic">{borrowingBase.disclaimer}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── WHEN COMPANIES CONSIDER AR FINANCING ─── */}
      <section className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Financing Needs" title={triggers.title} lead={triggers.intro} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {triggers.items.map((t, i) => (
              <FadeUp key={t} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-alt px-5 py-4 h-full">
                  <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 22 }}>arrow_circle_right</span>
                  <span className="text-secondary font-semibold text-sm md:text-base">{t}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Industries" title={industries.title} lead={industries.intro} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.items.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-light bg-white p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-lg leading-snug">{s.title}</h3>
                  <p className="text-body-gray text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className={`bg-white ${SECTION}`}>
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Locations" title={locations.title} lead={locations.intro} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.cities.map((city, i) => (
              <FadeUp key={city} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-alt px-5 py-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>location_on</span>
                  <span className="text-secondary font-semibold text-base">{city}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AR FINANCING VS FACTORING ─── */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Comparison" title={comparison.title} lead={comparison.intro} />
          <FadeUp delay={140}>
            <div className="overflow-x-auto rounded-2xl border border-border-light">
              <table className="w-full text-left text-sm md:text-[15px]">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-5 py-4 font-semibold w-1/2">Accounts Receivable Financing</th>
                    <th className="px-5 py-4 font-semibold w-1/2">{comparison.rightLabel ?? "Traditional Factoring"}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map(([left, right], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                      <td className="px-5 py-4 text-secondary align-top leading-relaxed">{left}</td>
                      <td className="px-5 py-4 text-body-gray align-top leading-relaxed">{right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {comparison.outro && (
              <p className={`${LEAD} mt-8`}>{comparison.outro}</p>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={faqs} />

      {/* ─── CTA ─── */}
      <section className={`relative ${SECTION} bg-cover bg-center overflow-hidden`} style={{ backgroundImage: CTA_BG }}>
        <div className="mx-auto max-w-[1600px] relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
              {cta.title}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">{cta.body}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              {cta.button}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
