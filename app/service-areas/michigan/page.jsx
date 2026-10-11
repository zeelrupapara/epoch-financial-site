import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/service-areas/michigan";

export const metadata = seoMetadata(ROUTE);

const data = {
  route: ROUTE,
  state: "Michigan",
  hero: {
    title: "Accounts Receivable Financing Services in Michigan",
    intro:
      "Michigan's industrial and commercial companies often carry substantial receivables tied to ongoing customer relationships. EPOCH Financial helps middle-market businesses evaluate $3M–$75M+ AR financing around liquidity needs, collateral quality, and capital requirements.",
    cta: "Discuss Your Financing Requirements",
  },
  profile: {
    title: "Key Financing Terms and Parameters",
    intro: "Michigan companies evaluating AR financing can consider the following facility parameters:",
    columnLabel: "Michigan Considerations",
    rows: [
      { label: "Eligible Receivables", value: "Commercial B2B receivables" },
      { label: "Advance Rate", value: "Up to 85%–90%" },
      { label: "Facility Size", value: "$3M to $75M+" },
      { label: "Customer Concentration", value: "Subject to portfolio and eligibility requirements" },
      { label: "Pricing", value: "Starting from 0.75%, based on transaction profile" },
      { label: "Use of Capital", value: "Working capital, growth, acquisitions, refinancing, and liquidity" },
      { label: "Facility Structure", value: "Revolving receivables-backed facilities" },
      { label: "Target Companies", value: "Middle-market companies with approximately $15M to $1B+ in annual revenue" },
    ],
  },
  review: {
    title: "Receivables Review Criteria",
    intro:
      "Michigan companies seeking AR financing are assessed across several factors that influence collateral availability and facility capacity:",
    factors: [
      "Invoice Aging",
      "Debtor Credit Quality",
      "Customer Concentration",
      "Dilution Levels",
      "Cross-Aging",
      "Unbilled Receivables",
      "Existing Liens",
      "Current Credit Facilities",
    ],
    outro: "These considerations help establish the eligible receivables base and determine available financing capacity.",
  },
  borrowingBase: {
    title: "Illustrative Financing Capacity",
    intro:
      "For example, a Michigan company with $20MM in gross receivables and $16MM in eligible A/R could support approximately $14.4MM in gross availability at a 90% advance rate.",
    columnLabel: "Receivables Base",
    rows: [
      { label: "Gross Accounts Receivable", value: "$20MM" },
      { label: "Ineligible Receivables", value: "($4MM)" },
      { label: "Eligible Receivables", value: "$16MM" },
      { label: "Advance Rate", value: "90%" },
      { label: "Illustrative Gross Availability", value: "$14.4MM" },
    ],
    disclaimer:
      "Final availability depends on collateral eligibility, reserves, concentration limits, dilution, and other transaction-specific adjustments.",
  },
  triggers: {
    title: "When Michigan Companies Consider AR Financing",
    intro:
      "Michigan middle-market companies may consider receivables financing when additional borrowing capacity is needed or existing capital arrangements no longer match operating requirements.",
    items: [
      "Accelerating Revenue Growth",
      "New Customer or Contract Expansion",
      "Increased Working Capital Requirements",
      "Bank Line Constraints",
      "Maturing Credit Facilities",
      "Acquisition Financing",
      "Business Expansion",
      "Seasonal Cash Flow Demands",
      "Lender Replacement",
      "Refinancing Existing Debt",
    ],
  },
  industries: {
    title: "Industries We Serve Across Michigan",
    intro:
      "Michigan's diverse middle market includes manufacturers, automotive suppliers, distributors, logistics companies, healthcare organizations, and professional service firms with substantial commercial receivable portfolios. We structure accounts receivable financing around customer credit quality, payment cycles, concentration, and eligible collateral to provide liquidity aligned with each company's operating model and strategic capital requirements.",
    items: [
      {
        icon: "factory",
        title: "Manufacturing & Industrial Businesses",
        description:
          "Manufacturers can face significant gaps between production expenditures and customer collections. We structure accounts receivable facilities to convert eligible commercial receivables into working capital, supporting production requirements, supplier obligations, expansion, and ongoing liquidity needs.",
      },
      {
        icon: "directions_car",
        title: "Automotive & Mobility Businesses",
        description:
          "Automotive manufacturers, suppliers, and mobility companies often operate across complex customer relationships and extended payment cycles. Our receivables financing structures can provide liquidity against eligible invoices, helping businesses manage cash conversion while supporting production growth and customer requirements.",
      },
      {
        icon: "local_shipping",
        title: "Transportation & Logistics",
        description:
          "Transportation and logistics companies frequently carry substantial receivables while absorbing operating costs well before customer payment. We provide receivables based liquidity designed to support cash flow through extended collection cycles, helping companies manage ongoing operating and expansion requirements.",
      },
      {
        icon: "medical_services",
        title: "Healthcare & Medical Services",
        description:
          "Healthcare organizations can experience extended reimbursement and collection cycles that place pressure on operating liquidity. We structure financing around eligible receivables, payer quality, collection performance, and customer concentration to support working capital and continued business development.",
      },
      {
        icon: "warehouse",
        title: "Distribution & Wholesale Businesses",
        description:
          "Distributors and wholesalers often extend payment terms to commercial customers while managing inventory and supplier commitments. Accounts receivable financing can unlock liquidity from eligible customer invoices, supporting inventory purchases, supplier obligations, revenue growth, and broader working capital requirements.",
      },
      {
        icon: "support_agent",
        title: "Business & Professional Services",
        description:
          "Professional service companies with established commercial clients may carry substantial receivables tied to contractual billing and project completion. We structure financing against qualified receivables and underlying customer credit strength to improve liquidity and support expansion, hiring, acquisitions, and operational requirements.",
      },
    ],
  },
  locations: {
    title: "Locations We Serve in Michigan",
    intro:
      "EPOCH Financial supports middle-market companies across Michigan, including major commercial centers such as Detroit, Grand Rapids, Ann Arbor, Warren, Sterling Heights, Lansing, Dearborn, Troy, Livonia, Novi, Southfield and other surrounding areas.",
    cities: [
      "Detroit",
      "Grand Rapids",
      "Ann Arbor",
      "Warren",
      "Sterling Heights",
      "Lansing",
      "Dearborn",
      "Troy",
      "Livonia",
      "Novi",
      "Southfield",
    ],
  },
  comparison: {
    title: "Accounts Receivable Financing vs. Factoring in Michigan",
    intro:
      "Michigan companies may consider either accounts receivable financing or factoring depending on their liquidity needs, facility objectives, and preferred approach to managing customer receivables.",
    rightLabel: "Factoring",
    rows: [
      [
        "Provides a revolving facility where availability is based on eligible accounts receivable and adjusts as the receivables portfolio changes.",
        "Provides funding against specific invoices, with availability tied to the receivables selected for factoring.",
      ],
      [
        "Supports recurring working capital, operating requirements, growth, and broader liquidity needs.",
        "Primarily helps convert outstanding invoices into cash before customers make payment.",
      ],
      [
        "The company generally retains control of customer relationships and its collection process.",
        "The factor may take an active role in customer collections and payment administration.",
      ],
      [
        "Borrowing capacity can expand as eligible receivables increase, supporting changing working capital requirements.",
        "Funding capacity is generally determined by the volume and eligibility of invoices submitted for factoring.",
      ],
      [
        "Can support broader capital requirements, including acquisitions, refinancing, expansion, and ongoing working capital.",
        "Primarily addresses cash flow timing between issuing invoices and receiving customer payments.",
      ],
      [
        "Underwriting considers receivable aging, customer concentration, dilution, payment history, and overall collateral quality.",
        "Assessment generally focuses on individual invoices, customer credit quality, and invoice eligibility.",
      ],
    ],
  },
  cta: {
    title: "Receivables Financing for Businesses Across Michigan",
    body: "Assess a receivables financing structure tailored to your customer portfolio, liquidity position, and capital objectives.",
    button: "Discuss Your Financing Requirements",
  },
  faqs: {
    items: [
      {
        question: "How is borrowing capacity determined from a Michigan company's receivables?",
        answer:
          "Borrowing capacity is typically driven by the eligible receivables base, customer credit quality, aging, dilution, concentration, payment performance, and other facility-specific eligibility criteria.",
      },
      {
        question: "Can accounts receivable financing accommodate significant customer concentration?",
        answer:
          "Potentially. Concentration is evaluated as part of the overall receivables portfolio, with facility availability and advance parameters structured around the credit quality, payment history, and strategic importance of concentrated customers.",
      },
      {
        question: "How does customer payment behavior affect the financing structure?",
        answer:
          "Payment performance directly influences receivable eligibility and borrowing availability. Aging trends, historical collections, disputes, dilution, and changes in customer payment patterns can affect the ongoing collateral assessment.",
      },
    ],
  },
};

export default function MichiganPage() {
  return <StateARFinancingPage data={data} />;
}
