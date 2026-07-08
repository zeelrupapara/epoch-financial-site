import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/financial-services/accounts-receivable-line-of-credit");

const sections = [
  {
    "kicker": "PRODUCT OVERVIEW",
    "h2": "What is an AR line of credit?",
    "paragraphs": [
      "An AR line of credit — also called a receivables-secured revolver or accounts receivable line of credit — is a senior secured revolving credit facility in which a company's outstanding commercial invoices serve as the primary collateral. The company retains ownership of its receivables and continues collecting from its customers. The lender advances against invoices as they are billed, and availability revolves as customers pay: collections reduce the outstanding balance, new invoices replenish the borrowing base.",
      "The structure sits between invoice factoring and a cash-flow bank revolver. Unlike factoring, receivables are pledged, not sold, and the customer relationship remains untouched. Unlike a bank revolver underwritten to EBITDA, availability is tied directly to collateral — so a CFO managing net-30, net-60, or net-90 payment terms sees borrowing capacity expand in lockstep with billing volume rather than waiting on a leverage-based credit committee decision. Once the facility is in place, incremental draws typically fund within 24-48 hours.",
      "EPOCH structures and facilitates AR lines of credit for the private credit middle market — facilities from $1 million to $50 million and above — acting as advisor between the borrower and institutional capital providers, and aligning facility mechanics with the company's receivable composition, obligor quality, and reporting cadence."
    ]
  },
  {
    "kicker": "BORROWING BASE MECHANICS",
    "h2": "How does the borrowing base determine availability?",
    "paragraphs": [
      "Availability under an AR line of credit is governed by a single formula: Availability = Eligible Accounts Receivable × Advance Rate − Reserves. \"Eligible\" is the operative word. Lenders start with the gross AR aging and deduct categories of receivables that carry elevated collection risk before applying the advance rate.",
      "Worked example: a distributor carries $9.6 million in gross receivables. The lender excludes $1.1 million in invoices aged past 90 days and $500,000 of exposure above a 20% single-obligor concentration cap, leaving $8.0 million in eligible AR. At an 85% advance rate, the borrowing base yields $8,000,000 × 85% = $6.8 million in availability. If the company bills an additional $1 million to eligible obligors next month, availability grows by $850,000 — no amendment, no re-underwriting.",
      "The borrowing base is certified through a periodic borrowing base certificate — weekly or monthly depending on facility size and draw frequency — which reconciles the AR aging, ineligibles, and outstanding balance. Common exclusions from eligibility include:"
    ],
    "bullets": [
      "Invoices aged more than 90 days from invoice date",
      "Cross-aged obligors — customers with 25% or more of their balance past due, disqualifying their entire balance",
      "Concentration excess — exposure to a single obligor above a negotiated cap, typically 20-25% of the pool",
      "Contra accounts, where the customer is also a vendor and can offset payment",
      "Foreign, affiliate, and government receivables without additional structuring",
      "Pre-billed, unbilled, or progress-billed amounts not yet earned"
    ]
  },
  {
    "kicker": "TERMS & ECONOMICS",
    "h2": "What advance rates and pricing should a CFO expect?",
    "paragraphs": [
      "Pricing on an AR line of credit reflects obligor credit quality, dilution history, concentration, and reporting integrity — not the borrower's leverage profile. The ranges below represent typical middle-market terms; diversified pools of investment-grade obligors price at the favorable end.",
      "The economics reward utilization discipline. A company carrying an average drawn balance of $4 million at 1.0% per month pays $40,000 monthly — roughly 12% annualized on funds actually deployed, with only an unused line fee on the remaining committed capacity. Because interest accrues on the drawn balance rather than on every invoice generated, effective cost falls as collections turn faster."
    ],
    "table": {
      "headers": [
        "Component",
        "Typical Range",
        "What drives it"
      ],
      "rows": [
        [
          "Advance rate on eligible AR",
          "85-90%",
          "Obligor credit quality, dilution below ~5%, diversification"
        ],
        [
          "Facility size",
          "$1M-$50M+",
          "Eligible receivable base and projected billing volume"
        ],
        [
          "Monthly rate on drawn balance",
          "0.75-1.50%",
          "Collateral quality, concentration, reporting cadence"
        ],
        [
          "Unused line fee",
          "0.25-0.50% per annum",
          "Charged on committed, undrawn capacity"
        ],
        [
          "Funding speed per draw",
          "24-48 hours",
          "After facility close and initial field exam"
        ],
        [
          "Term",
          "1-3 years, renewable",
          "Facility size and lender type"
        ]
      ]
    }
  },
  {
    "kicker": "STRUCTURE COMPARISON",
    "h2": "How does an AR line of credit differ from invoice factoring?",
    "paragraphs": [
      "Both structures monetize receivables, but they are fundamentally different transactions. Factoring is a sale of the asset; an AR line of credit is a loan secured by it. For a middle-market company protective of its customer relationships and its balance sheet presentation, the distinctions matter.",
      "The cost gap widens with scale. A factor discounting invoices at 2.5% on 45-day average collections implies an annualized cost above 20% on every dollar billed. An AR line of credit at 1.0% per month accrues only on the drawn balance — a company that draws 60% of availability pays materially less for the same liquidity, while retaining the collections function and the customer relationship."
    ],
    "table": {
      "headers": [
        "Dimension",
        "AR Line of Credit",
        "Invoice Factoring"
      ],
      "rows": [
        [
          "Ownership of receivables",
          "Retained by the company; pledged as collateral",
          "Sold to the factor, invoice by invoice"
        ],
        [
          "Customer notification",
          "Typically non-notification; customers pay as usual",
          "Customers notified and redirected to pay the factor"
        ],
        [
          "Cost",
          "0.75-1.50% per month on drawn balance only",
          "1-5% discount per invoice, on all factored volume"
        ],
        [
          "Control of collections",
          "Company manages its own AR and customer dialogue",
          "Factor controls collections and customer contact"
        ],
        [
          "Balance sheet treatment",
          "Debt; receivables stay on the balance sheet",
          "True sale; receivables removed from the balance sheet"
        ],
        [
          "Scalability",
          "Committed facility to $50M+, grows with the base",
          "Per-invoice; economics rarely improve with scale"
        ]
      ]
    }
  },
  {
    "kicker": "STRUCTURE COMPARISON",
    "h2": "How does an AR line of credit compare to a traditional bank revolver?",
    "paragraphs": [
      "A traditional bank revolver is underwritten to cash flow. Availability is sized off EBITDA, and the facility carries financial covenants — leverage, fixed charge coverage — that constrain the company precisely when performance is in transition. An AR line of credit is underwritten to collateral. Availability is a function of the receivable base, financial covenants are lighter or absent, and the trade-off is more rigorous collateral reporting: borrowing base certificates, periodic field exams, and AR verification.",
      "The practical differences show up in three places. Capacity: a bank may cap a revolver at 1.0-1.5x EBITDA, while an AR facility on $8 million of eligible receivables delivers $6.8 million regardless of a compressed margin year. Speed: bank credit processes commonly run 60-90 days; collateral-based facilities arranged through private credit typically reach close in two to four weeks. Flexibility: when revenue doubles, an AR line of credit's availability doubles with it — a bank revolver requires an amendment and a new committee approval.",
      "For sponsor-backed platforms executing add-on acquisitions, or companies whose growth has outrun their bank's hold limit, the AR line of credit frequently operates alongside or in place of the bank facility rather than as a last resort."
    ]
  },
  {
    "kicker": "FIT PROFILE",
    "h2": "Who is an AR line of credit right for?",
    "paragraphs": [
      "The structure fits middle-market companies — typically $10 million to $500 million in revenue — that invoice creditworthy commercial or institutional customers on net-30 to net-90 terms. It is a working-capital instrument for finance teams managing the gap between billing and collection at scale, and it is most valuable in specific situations:"
    ],
    "bullets": [
      "Growth outpacing bank capacity — billing volume rising faster than an EBITDA-sized revolver can accommodate",
      "PE sponsor-backed platforms funding add-on acquisitions or integration working capital without additional equity",
      "Seasonal or project-driven working capital cycles, where peak AR balances demand peak availability",
      "Covenant pressure or bank exit — companies transitioning out of a bank relationship that need committed liquidity without a leverage test",
      "Post-restructuring or turnaround situations, where the receivable base is stronger than the income statement",
      "Concentration-heavy revenue models — staffing, manufacturing, distribution, business services, oilfield services, and government contracting — where structured eligibility handles what a bank declines"
    ]
  },
  {
    "kicker": "UNDERWRITING & PROCESS",
    "h2": "How do you qualify for an AR line of credit?",
    "paragraphs": [
      "Underwriting centers on the collateral, not the borrower's earnings. Lenders evaluate obligor credit quality, the aging profile, dilution history — credit memos, chargebacks, and offsets, ideally below 5% of billings — customer concentration, and the integrity of the company's financial reporting. A company with disciplined invoicing and clean AR systems will qualify for stronger advance rates and pricing than its income statement alone would suggest.",
      "The diligence package is standard for a controller to assemble: current AR and AP agings, two to three years of financial statements, a customer concentration summary, sample invoices and underlying contracts, and a dilution analysis. From a complete package, an indicative term sheet typically follows within days; a field exam and legal documentation carry the facility to close in two to four weeks; and first funding occurs within 24-48 hours of closing.",
      "EPOCH manages this process end to end — assembling the diligence file, structuring eligibility and reserves to maximize usable availability, and negotiating terms with institutional capital providers so the facility the CFO signs reflects the collateral's real quality."
    ]
  }
];

const faqs = {
  "items": [
    {
      "question": "What advance rate can we expect on an AR line of credit?",
      "answer": "Middle-market AR lines of credit typically advance 85-90% of eligible accounts receivable. The rate is driven by obligor credit quality, customer diversification, and dilution history — a pool of investment-grade commercial obligors with dilution below 5% of billings supports the top of the range. Availability is calculated on eligible AR after exclusions such as invoices over 90 days, concentration excess, and contra accounts."
    },
    {
      "question": "How much does an accounts receivable line of credit cost?",
      "answer": "Typical pricing runs 0.75-1.50% per month on the drawn balance, plus an unused line fee of 0.25-0.50% per annum on committed, undrawn capacity. A company carrying a $4 million average balance at 1.0% monthly pays roughly $40,000 per month — about 12% annualized on deployed funds. Because interest accrues only on the amount drawn, effective cost is usually well below per-invoice factoring discounts."
    },
    {
      "question": "Will our customers know we have an AR line of credit?",
      "answer": "Generally, no. Most AR lines of credit are structured on a non-notification basis: the company retains ownership of its receivables, manages its own collections, and customers continue paying as they always have — often into a lockbox account controlled under the facility. This differs from invoice factoring, where receivables are sold and customers are formally notified to redirect payment to the factor."
    },
    {
      "question": "How quickly can an AR line of credit fund?",
      "answer": "Once the facility is closed, individual draws typically fund within 24-48 hours of submitting a borrowing base certificate. Establishing the facility itself — diligence, field exam, and documentation — generally takes two to four weeks with a complete package, compared with the 60-90 days common for traditional bank credit processes. First funding usually occurs within 24-48 hours of closing."
    },
    {
      "question": "What makes a receivable ineligible for the borrowing base?",
      "answer": "Standard exclusions include invoices aged more than 90 days from invoice date, cross-aged obligors whose entire balance is disqualified once 25% or more is past due, single-customer exposure above a 20-25% concentration cap, contra accounts where the customer is also a vendor, foreign and affiliate receivables, and unbilled or progress-billed amounts. Structuring these eligibility definitions well is often the difference between nominal and usable availability."
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd route="/financial-services/accounts-receivable-line-of-credit" />
      {/* ─── HERO ─── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[420px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(11 35 65 / 72%), rgb(11 35 65 / 88%)), url("/assets/images/businesscreditsolution.jfif")',
            }}
          >
            <div className="relative z-10 max-w-3xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>credit_card</span>
                AR LINE OF CREDIT
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                {"Accounts Receivable Line of Credit"}
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                {"An accounts receivable line of credit is a revolving facility secured by outstanding commercial invoices, with availability set by a borrowing base — typically 85-90% of eligible receivables. EPOCH structures and facilitates AR lines of credit from $1 million to $50 million and above for middle-market companies, converting the working-capital drag of net-30 to net-90 terms into committed liquidity."}
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 sm:px-8 py-2.5 sm:py-3.5 sm:text-[15px] text-[14px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
              >
                {"Discuss a Financing Opportunity"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTENT SECTIONS ─── */}
      {sections.map((s, idx) => (
        <section
          key={s.h2}
          className={(idx % 2 === 0 ? "bg-white" : "bg-bg-alt") + " 2xl:py-16 xl:py-14 md:py-12 py-10 2xl:px-6 lg:px-16 md:px-12 px-4"}
        >
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={80}>
              {s.kicker && (
                <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">{s.kicker}</p>
              )}
              <h2 className="text-secondary 2xl:text-[30px] lg:text-[26px] md:text-[24px] text-[22px] font-bold leading-tight mb-6">
                {s.h2}
              </h2>
            </FadeUp>
            {s.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={120 + i * 40}>
                <p className="text-body-gray text-sm md:text-base leading-[1.8] mb-4">{p}</p>
              </FadeUp>
            ))}
            {s.bullets && s.bullets.length > 0 && (
              <FadeUp delay={160}>
                <ul className="flex flex-col gap-3 mt-2 mb-4">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 20 }}>check_circle</span>
                      <span className="text-body-gray text-sm md:text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            )}
            {s.table && (
              <FadeUp delay={200}>
                <div className="overflow-x-auto mt-4 rounded-2xl border border-border-light">
                  <table className="w-full text-left text-sm md:text-[15px]">
                    <thead>
                      <tr className="bg-secondary text-white">
                        {s.table.headers.map((h, i) => (
                          <th key={i} className="px-5 py-4 font-semibold whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                          {row.map((cell, ci) => (
                            <td key={ci} className={"px-5 py-4 align-top " + (ci === 0 ? "font-semibold text-secondary" : "text-body-gray")}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeUp>
            )}
          </div>
        </section>
      ))}

      <FAQSection faqs={faqs} />

      {/* ─── CTA ─── */}
      <section
        className="relative 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgb(11 35 65 / 92%), rgb(11 35 65 / 96%)), url("/assets/images/businesscreditsolution.jfif")',
        }}
      >
        <div className="mx-auto max-w-[1600px] relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-white 2xl:text-[38px] lg:text-[30px] md:text-[26px] text-[22px] font-bold leading-tight mb-5">
              Discuss a Financing Opportunity
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
              Connect with our team to evaluate a financing structure aligned with your receivables, working capital cycle, and growth objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] transition-all"
            >
              Contact Our Team
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
