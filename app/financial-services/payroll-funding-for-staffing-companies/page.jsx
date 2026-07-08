import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata("/financial-services/payroll-funding-for-staffing-companies");

const sections = [
  {
    "kicker": "THE PROBLEM",
    "h2": "Why Does Growth Strain a Staffing Company's Cash Position?",
    "paragraphs": [
      "The economics of staffing impose a structural mismatch: payroll is due every week, but receivables pay on net-30, net-60, or net-90 terms. A staffing firm running $500,000 in weekly payroll with clients on net-60 terms is carrying roughly eight to nine weeks of payroll — over $4 million in cash — before the first dollar of collections arrives. Payroll taxes, workers' compensation, and benefits push the outlay higher still.",
      "The mismatch compounds with growth. Consider a firm billing $2 million per month on net-60 terms. Direct labor costs typically run 70-80% of billings in commercial staffing, so the firm disburses roughly $1.5 million in monthly payroll while carrying approximately $4 million in outstanding receivables at any given time. Win a new master service agreement that doubles placements, and the working capital requirement doubles with it — immediately, and before a single new invoice is collected.",
      "This is why staffing CFOs routinely watch profitable, growing companies run out of cash. The problem is not profitability; it is timing. Payroll funding exists to close that timing gap by monetizing receivables the day they are invoiced rather than 30, 60, or 90 days later."
    ]
  },
  {
    "kicker": "MECHANICS",
    "h2": "How Does Payroll Funding Work?",
    "paragraphs": [
      "Payroll funding is a receivables-based facility purpose-built around the staffing payroll cycle. The mechanics are straightforward: you place talent, bill your client, and submit the invoice to the funding provider. After verification — typically confirmation of approved timesheets — the provider advances 85-90% of invoice face value within 24-48 hours. When your client pays, the remaining 10-15% reserve is released to you, less the funding fee.",
      "A worked example: a staffing firm submits a $1,000,000 weekly invoice batch. At a 90% advance rate, $900,000 is wired within 24-48 hours — in time to cover that week's payroll and payroll tax deposits. If clients pay in 30 days at a 1.00% monthly fee, the cost is $10,000, and the firm receives the remaining $90,000 reserve upon collection. Net proceeds: $990,000 on $1,000,000 of billings, with cash in hand two months earlier than the receivable would otherwise convert.",
      "EPOCH structures and facilitates these facilities through its network of institutional lenders and specialty finance providers. Our role is advisory: we scope the requirement with your finance team, position the credit, negotiate advance rates, fee structures, and covenants across competing capital providers, and manage execution through funding."
    ]
  },
  {
    "kicker": "FACILITY TERMS",
    "h2": "What Advance Rates and Funding Speed Should You Expect?",
    "paragraphs": [
      "Terms vary with client credit quality, invoice concentration, and vertical, but well-structured payroll funding facilities for middle-market staffing companies generally fall within the following parameters.",
      "Two variables deserve a CFO's attention beyond the headline advance rate. First, the effective cost: a 1.00% monthly fee on receivables collected in 45 days is materially different from the same rate on 90-day government receivables — model the fee against your actual DSO, not the stated payment terms. Second, verification speed: a provider that verifies timesheets electronically funds in 24 hours; one that verifies manually can slip to 72. In a business where payroll is due Friday regardless, that difference is operational, not cosmetic."
    ],
    "table": {
      "headers": [
        "Facility Parameter",
        "Typical Range",
        "What Drives It"
      ],
      "rows": [
        [
          "Advance rate",
          "85-90% of invoice face value",
          "Client credit quality, dilution history, concentration"
        ],
        [
          "Funding speed",
          "24-48 hours after invoice verification",
          "Timesheet approval workflow, provider platform"
        ],
        [
          "Funding fee",
          "0.75-1.50% per month outstanding",
          "Volume, average DSO, obligor credit"
        ],
        [
          "Facility size",
          "$1M to $50M+",
          "Trailing billings and projected placement growth"
        ],
        [
          "Client payment terms accommodated",
          "Net-30, net-60, net-90",
          "Facility sized to receivables cycle, not payroll cycle"
        ]
      ]
    }
  },
  {
    "kicker": "UNDERWRITING",
    "h2": "Why Is Underwriting Based on Your Clients' Credit, Not Yours?",
    "paragraphs": [
      "In a payroll funding facility, the primary repayment source is your client's payment of the invoice — not your company's cash flow. Underwriters therefore focus on the credit quality of the obligors: the hospital systems, technology companies, manufacturers, and government agencies that owe you money. A staffing firm billing investment-grade clients can access substantial funding capacity even with a thin balance sheet, a short operating history, or recent losses from a growth investment.",
      "This inverts the conventional bank lending calculus. A bank line of credit is sized against your historical EBITDA and tangible net worth — figures that lag a fast-growing staffing firm by design, and that PE sponsors deliberately compress through reinvestment. Payroll funding is sized against your receivables, which lead. For a sponsor-backed platform executing a roll-up, or a founder-led firm that just landed a national account, that distinction determines whether the growth is fundable at all.",
      "Practically, expect diligence to concentrate on accounts receivable aging, obligor concentration, dilution (credit memos, disputes, rebates), and the integrity of your time-and-billing process. Companies with clean AR hygiene and diversified client rosters command the top of the advance-rate and pricing ranges."
    ]
  },
  {
    "kicker": "SECTOR COVERAGE",
    "h2": "Which Staffing Verticals Do We Fund?",
    "paragraphs": [
      "EPOCH structures payroll funding across the staffing spectrum, with facility terms calibrated to each vertical's billing dynamics and payer behavior."
    ],
    "bullets": [
      "Healthcare staffing — travel nursing, allied health, locum tenens, and per-diem placements, where hospital systems and MSPs commonly pay net-60 to net-90 and weekly payroll obligations are among the largest in the industry",
      "IT and professional staffing — high bill rates and long contract durations create concentrated, high-dollar receivables; facilities are structured to absorb single-client concentrations that general-purpose lenders decline",
      "Light industrial and commercial staffing — high headcount, weekly pay cycles, and volume billing demand fast, systematic invoice verification and reliable 24-48 hour funding",
      "Government staffing — federal, state, and municipal contracts pair strong obligor credit with extended payment cycles; facilities are structured around assignment-of-claims requirements and net-90 realities"
    ]
  },
  {
    "kicker": "GROWTH CAPACITY",
    "h2": "How Does the Facility Scale From $1M to $50M in Placements?",
    "paragraphs": [
      "The defining structural advantage of payroll funding is that capacity grows with billings. Because the facility is secured by and sized against receivables, every new placement generates its own borrowing base. A firm that grows weekly billings from $250,000 to $1 million does not return to committee for a new credit approval — the facility expands with the invoices, subject to obligor credit and concentration parameters agreed at closing.",
      "Contrast that with a fixed bank line. A $3 million revolver that comfortably supported $12 million in annual billings becomes a hard ceiling at $25 million — and renegotiating it takes a quarter the CFO does not have when a national account starts ramping. Well-structured payroll funding facilities scale from $1 million to $50 million+ within a single agreement, which is why they are a standard tool for PE-backed staffing platforms executing add-on acquisitions and organic ramp simultaneously.",
      "EPOCH structures facilities with growth headroom negotiated up front: accordion features, pre-agreed concentration relief for named national accounts, and pricing grids that step down as volume increases — so the cost of capital falls as the platform scales rather than getting repriced facility by facility."
    ]
  },
  {
    "kicker": "STRUCTURE COMPARISON",
    "h2": "Payroll Funding vs. Staffing Factoring: What Is the Difference?",
    "paragraphs": [
      "The two terms are often used interchangeably, and the legal core is the same: both are receivables-based financing in which the funder advances against invoices and is repaid from client collections. The distinction is operational. Payroll funding is factoring purpose-built for the staffing industry — the funding calendar is synchronized to your payroll dates, verification is built around timesheet approval workflows, and providers typically layer in payroll-adjacent services such as payroll tax administration, invoice processing, and credit monitoring on prospective clients.",
      "Generic factoring treats each invoice as a discrete transaction; payroll funding treats the payroll cycle as the organizing event. For a controller managing 400 contractors across three pay frequencies, that difference shows up every Friday. The structural choices that matter in either label are the same: recourse versus non-recourse treatment of client non-payment, notification versus non-notification of your clients, whether the facility is structured as a true sale of receivables or a secured revolving loan, and termination economics.",
      "EPOCH's role is to arbitrate those choices against your circumstances — client mix, sponsor requirements, reporting obligations — and run a competitive process across payroll funders, factors, and asset-based lenders so the structure is chosen deliberately rather than defaulted into. In many cases, a staffing firm at scale is better served graduating from factoring economics to an asset-based revolver; we advise on that transition as well."
    ]
  }
];

const faqs = {
  "items": [
    {
      "question": "What is payroll funding for staffing companies?",
      "answer": "Payroll funding is receivables-based financing purpose-built for staffing firms. A funding provider advances 85-90% of invoice face value within 24-48 hours of timesheet verification, so weekly payroll is covered while clients pay on net-30 to net-90 terms. The remaining reserve is released, less a fee, when the client pays. Facilities are underwritten on client credit quality and typically range from $1 million to $50 million or more."
    },
    {
      "question": "How much does payroll funding cost?",
      "answer": "Funding fees typically run 0.75-1.50% per month on outstanding advances, driven by billing volume, average days sales outstanding, and client credit quality. On a $1,000,000 invoice batch collected in 30 days at 1.00%, the cost is $10,000. Effective cost should be modeled against actual collection timing: the same monthly rate costs three times as much on 90-day receivables as on 30-day receivables."
    },
    {
      "question": "How quickly can a staffing company access payroll funding?",
      "answer": "Once a facility is in place, funding runs on a 24-48 hour cycle: invoices are submitted, timesheets are verified, and 85-90% of face value is wired — typically ahead of the weekly payroll deadline. Establishing a new facility generally takes two to four weeks, covering receivables diligence, obligor credit review, and documentation. Firms with clean AR aging and electronic time-and-billing systems move fastest."
    },
    {
      "question": "Can a staffing company qualify with a weak balance sheet or recent losses?",
      "answer": "Yes, in most cases. Payroll funding is underwritten primarily on the credit quality of the staffing firm's clients — the hospitals, corporations, and government agencies that owe the invoices — rather than on the firm's own financials. A company with thin equity, a short operating history, or losses driven by growth investment can access substantial capacity if its client base is creditworthy and its receivables records are clean."
    },
    {
      "question": "Is payroll funding the same as factoring, and is it debt?",
      "answer": "Payroll funding is factoring adapted to the staffing industry, with funding synchronized to payroll dates and timesheet-based verification. Structurally, facilities are documented either as a true sale of receivables or as a secured revolving loan, and either with or without recourse for client non-payment. Those choices carry different accounting and risk implications, so the structure should be selected deliberately with your finance team and advisors — it is a key negotiation point, not a default."
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd route="/financial-services/payroll-funding-for-staffing-companies" />
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
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>groups</span>
                STAFFING INDUSTRY
              </span>
              <h1 className="text-white xl:text-[44px] lg:text-[34px] text-[26px] font-extrabold leading-[1.15] tracking-tight">
                {"Payroll Funding for Staffing Companies"}
              </h1>
              <p className="text-white/80 md:text-base text-sm leading-relaxed">
                {"Payroll funding converts a staffing company's outstanding invoices into immediate working capital — typically 85-90% of invoice face value, funded within 24-48 hours — so weekly payroll never depends on when clients pay. EPOCH structures and facilitates payroll funding facilities from $1 million to $50 million+ for middle-market staffing firms, underwritten on the credit quality of your client base rather than your balance sheet."}
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
