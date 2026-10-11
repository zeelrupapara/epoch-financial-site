import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/service-areas/north-carolina";

export const metadata = seoMetadata(ROUTE);

const data = {
  route: ROUTE,
  state: "North Carolina",
  hero: {
    title: "Accounts Receivable Financing in North Carolina",
    intro:
      "EPOCH Financial advises North Carolina middle-market companies seeking $3MM to $75MM+ in accounts receivable financing. We evaluate eligible receivables, borrowing capacity, existing debt, liquidity requirements, and overall capital structure.",
    cta: "Discuss Your Financing Requirements",
  },
  profile: {
    title: "North Carolina Accounts Receivable Financing Parameters",
    intro:
      "We evaluate North Carolina receivables financing requirements based on eligible collateral, borrowing capacity, liquidity needs, and facility objectives.",
    columnLabel: "North Carolina Considerations",
    rows: [
      { label: "Revenue", value: "Typically $15MM+" },
      { label: "Facility Size", value: "$3MM to $75MM+" },
      { label: "Collateral", value: "Eligible commercial B2B receivables" },
      { label: "Advance Rate", value: "Up to 90%" },
      { label: "Borrowing Capacity", value: "Based on eligible receivables, aging, concentration, dilution, and applicable reserves" },
      { label: "Structure", value: "Revolving working-capital facilities" },
      { label: "Capital Sources", value: "Asset-based lenders, private credit funds, specialty finance companies, and institutional lenders" },
    ],
  },
  review: {
    title: "Underwriting Focus",
    intro: "We review the following factors when assessing receivables eligibility and borrowing capacity:",
    factors: [
      "A/R Aging & Eligibility",
      "Customer Concentration",
      "Dilution & Cross-Aging",
      "Progress Billing & Unbilled A/R",
      "UCC Liens",
      "Current Lender Obligations",
      "Borrowing-Base Availability",
    ],
    outro: "We assess these factors to determine receivables eligibility, borrowing capacity, and the appropriate financing structure.",
  },
  borrowingBase: {
    title: "Borrowing Capacity",
    intro:
      "A $20MM receivables portfolio with $16MM eligible at a 90% advance rate may support approximately $14.4MM of gross borrowing capacity, subject to reserves and concentration limits.",
    columnLabel: "Borrowing Base Calculation",
    rows: [
      { label: "Total Accounts Receivable", value: "$20MM" },
      { label: "Less: Ineligible Receivables", value: "($4MM)" },
      { label: "Eligible Accounts Receivable", value: "$16MM" },
      { label: "Advance Rate", value: "90%" },
      { label: "Potential Gross Borrowing Capacity", value: "$14.4MM" },
    ],
    disclaimer: "Actual borrowing capacity may be lower after reserves, concentration limits, and other applicable adjustments.",
  },
  triggers: {
    title: "Financing Situations We Address",
    intro:
      "North Carolina middle-market companies may evaluate receivables financing when working capital requirements increase, existing facilities become undersized, or the capital structure changes.",
    items: [
      "Rapid Growth",
      "Large Contract Awards",
      "Undersized Bank Facilities",
      "Refinancing Existing Debt",
      "Acquisitions",
      "Expansion",
      "Seasonal Working-Capital Requirements",
    ],
  },
  industries: {
    title: "Industries We Serve Across North Carolina",
    intro:
      "North Carolina's middle-market economy spans manufacturing, healthcare, life sciences, logistics, technology, and distribution. Companies across these sectors may experience extended customer payment cycles, large commercial contracts, seasonal working capital requirements, or increased receivables as they expand. We evaluate accounts receivable financing based on receivable quality, customer concentration, payment performance, borrowing capacity, and broader liquidity requirements.",
    items: [
      {
        icon: "biotech",
        title: "Life Sciences & Biopharmaceuticals",
        description:
          "North Carolina's life sciences companies may generate commercial receivables across pharmaceutical, biotechnology, medical, and healthcare relationships. We evaluate whether eligible receivables can support liquidity as customer volumes, contracts, and payment cycles expand.",
      },
      {
        icon: "medical_services",
        title: "Healthcare",
        description:
          "North Carolina healthcare companies may generate recurring commercial receivables across providers, medical organizations, suppliers, and other business relationships. We evaluate eligible receivables based on customer quality, payment performance, concentration, and borrowing requirements.",
      },
      {
        icon: "precision_manufacturing",
        title: "Advanced Manufacturing",
        description:
          "North Carolina's aerospace, automotive, chemical, machinery, and precision manufacturing companies may carry significant B2B receivables while funding production and supplier obligations. We assess whether eligible invoices can support additional borrowing capacity.",
      },
      {
        icon: "local_shipping",
        title: "Transportation & Logistics",
        description:
          "North Carolina transportation and distribution businesses may manage recurring commercial receivables alongside fuel, payroll, fleet, and operating expenses. We assess customer quality, payment performance, concentration, and eligible borrowing capacity.",
      },
      {
        icon: "memory",
        title: "Technology & Business Services",
        description:
          "North Carolina technology and business service companies may experience growing receivables as commercial contracts and project volumes increase. We evaluate whether eligible invoices can support additional liquidity without relying solely on standard collection cycles.",
      },
      {
        icon: "warehouse",
        title: "Wholesale & Distribution",
        description:
          "North Carolina wholesalers and distributors may operate with high invoice volumes and extended customer payment terms. We assess whether eligible receivables can support inventory purchases, supplier obligations, and continued sales growth.",
      },
    ],
  },
  locations: {
    title: "Locations We Serve in North Carolina",
    intro:
      "EPOCH works with middle-market companies across Charlotte, Raleigh, Durham, Greensboro, Winston-Salem, Wilmington, and surrounding North Carolina markets, including manufacturing, healthcare, life sciences, logistics, technology, and distribution.",
    cities: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Winston-Salem", "Wilmington"],
  },
  role: {
    title: "Our Role",
    intro:
      "EPOCH Financial acts as a commercial finance advisor, structuring financing opportunities and coordinating engagement with appropriate capital providers. We evaluate the financing requirement, assess the collateral and capital structure, and help position the opportunity for financing discussions.",
    providers: ["Asset-Based Lenders", "Specialty Finance Companies", "Private Credit Funds", "Institutional Lenders"],
  },
  comparison: {
    title: "How Receivables Financing Differs From Factoring in North Carolina",
    intro:
      "For North Carolina mid-market companies, the distinction often comes down to financing structure, receivable control, and how liquidity is accessed.",
    rightLabel: "Factoring",
    rows: [
      ["Structured as financing against eligible commercial receivables.", "Typically involves the sale or assignment of individual receivables."],
      ["Borrowing capacity is generally linked to an eligible receivables borrowing base.", "Funding is generally tied to the invoices being factored."],
      ["Can support an ongoing working capital facility.", "Often structured around recurring invoice purchases."],
      [
        "Facility structure can account for receivable quality, concentration, aging, and reserves.",
        "Pricing and availability can vary based on invoice quality and customer payment characteristics.",
      ],
      [
        "Often suited to established middle-market companies seeking a structured liquidity facility.",
        "Commonly used where companies want to monetize outstanding invoices through a factoring arrangement.",
      ],
    ],
  },
  cta: {
    title: "Discuss Your North Carolina Financing Requirements",
    body: "Contact EPOCH Financial to evaluate borrowing capacity and available financing structures.",
    button: "Discuss Your Financing Requirements",
  },
  faqs: {
    items: [
      {
        question: "How do you determine whether North Carolina receivables are eligible for financing?",
        answer:
          "We evaluate factors including invoice aging, obligor credit quality, payment history, customer concentration, dilution, disputes, and overall collectability.",
      },
      {
        question: "Can North Carolina companies finance receivables from customers outside the state?",
        answer:
          "Yes. We evaluate the underlying receivables based on obligor quality, payment performance, contractual terms, and eligibility criteria rather than customer location alone.",
      },
      {
        question: "What facility size can North Carolina businesses consider through accounts receivable financing?",
        answer:
          "Financing requirements may range from approximately $3 million to $75 million+, depending on eligible receivables, borrowing capacity, liquidity needs, and the proposed facility structure.",
      },
      {
        question: "Can accounts receivable financing support seasonal working capital requirements?",
        answer:
          "We help evaluate whether a receivables-based facility can align with seasonal fluctuations in invoicing, collections, and working capital requirements.",
      },
    ],
  },
};

export default function NorthCarolinaPage() {
  return <StateARFinancingPage data={data} />;
}
