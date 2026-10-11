import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/financial-services/accounts-receivable-financing/florida";

export const metadata = seoMetadata(ROUTE);

const data = {
  route: ROUTE,
  state: "Florida",
  hero: {
    title: "Accounts Receivable Financing in Florida",
    intro:
      "Florida middle-market companies can use $3M–$75M+ accounts receivable financing to support working capital, growth, and liquidity while maintaining established customer payment terms and receivables structures.",
    cta: "Discuss Your Financing Requirements",
  },
  profile: {
    title: "Key Financing Profile Features for Florida Businesses",
    rows: [
      { label: "Annual Revenue", value: "Typically $15 Million+" },
      { label: "Facility Size", value: "$3 Million to $75+ Million" },
      { label: "Eligible Receivables", value: "Commercial B2B invoices" },
      { label: "Advance Rate", value: "Up to 90%" },
      { label: "Funding Timeline", value: "Following due diligence" },
      { label: "Financing Structure", value: "Coordinated through specialty finance companies and institutional lending partners" },
    ],
  },
  review: {
    title: "Receivables Eligibility & Facility Capacity",
    intro: "Florida companies seeking AR financing are evaluated based on the quality and availability of receivables, including:",
    factors: [
      "A/R Aging",
      "Customer Credit Quality",
      "Customer Concentration",
      "Dilution",
      "Cross-Aging",
      "Unbilled Receivables",
      "Existing Liens",
      "Current Debt Obligations",
      "Borrowing-Base Availability",
    ],
    outro: "These factors determine the eligible collateral base and potential facility availability.",
  },
  borrowingBase: {
    title: "Illustrative Borrowing Base",
    intro:
      "A Florida company with $20MM in total receivables and $16MM in eligible A/R could generate approximately $14.4MM in gross availability at a 90% advance rate.",
    columnLabel: "Borrowing Base",
    rows: [
      { label: "Total Accounts Receivable", value: "$20MM" },
      { label: "Ineligible Receivables", value: "($4MM)" },
      { label: "Eligible Receivables", value: "$16MM" },
      { label: "Advance Rate", value: "90%" },
      { label: "Potential Gross Availability", value: "$14.4MM" },
    ],
    disclaimer:
      "Actual availability may vary based on reserves, concentration limits, dilution, eligibility requirements, and facility terms.",
  },
  triggers: {
    title: "When Florida Companies Consider AR Financing",
    intro:
      "Accounts receivable financing may become relevant when Florida middle-market companies need additional borrowing capacity or their existing financing no longer matches business requirements.",
    items: [
      "Revenue Growth",
      "Large Customer Contracts",
      "Increased Receivables",
      "Working Capital Gaps",
      "Limited Bank Availability",
      "Facility Maturity",
      "Acquisitions",
      "Business Expansion",
      "Refinancing",
      "Seasonal Liquidity Needs",
      "Lender Replacement",
    ],
  },
  industries: {
    title: "Industries We Serve Across Florida",
    intro:
      "Florida's diverse middle market includes businesses with different billing cycles, customer concentrations, contract structures, and receivables profiles. We structure accounts receivable finance in Florida around the quality, aging, concentration, and performance of eligible commercial receivables, with financing aligned to each industry's working capital requirements.",
    items: [
      {
        icon: "factory",
        title: "Manufacturing & Industrial Businesses",
        description:
          "Manufacturers can use receivables based liquidity to manage production cycles, supplier obligations, customer payment terms, and increased order volumes without disrupting operating cash flow.",
      },
      {
        icon: "local_shipping",
        title: "Transportation & Logistics",
        description:
          "Transportation and logistics companies often manage extended customer payment cycles alongside fuel, payroll, fleet, and operating costs. Receivables financing can help align liquidity with these timing requirements.",
      },
      {
        icon: "medical_services",
        title: "Healthcare & Medical Services",
        description:
          "Healthcare businesses may experience lengthy reimbursement cycles and significant receivables balances. Financing can provide liquidity against eligible receivables while supporting ongoing operational requirements.",
      },
      {
        icon: "warehouse",
        title: "Distribution & Wholesale Businesses",
        description:
          "Distributors and wholesalers can use receivables financing to improve liquidity when customer payment terms extend beyond supplier obligations, supporting inventory purchases, order fulfillment, and business growth.",
      },
      {
        icon: "support_agent",
        title: "Business & Professional Services",
        description:
          "Professional services companies with established commercial customers and recurring or contracted billing can leverage eligible receivables to support payroll, project execution, expansion, and other working capital requirements.",
      },
      {
        icon: "groups",
        title: "Staffing & Workforce Services",
        description:
          "Staffing companies often fund payroll before receiving customer payments. Receivables financing can help bridge the timing gap between payroll obligations and collections from established commercial accounts.",
      },
    ],
  },
  locations: {
    title: "Locations We Serve in Florida",
    intro:
      "EPOCH Financial advises Florida middle-market companies evaluating receivables-backed financing across Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, St. Petersburg, West Palm Beach, Naples, Sarasota, Fort Myers, Boca Raton, Palm Beach Gardens, Delray Beach, Lakeland, Gainesville, Tallahassee, Melbourne, Clearwater, Pensacola, and surrounding markets.",
    cities: [
      "Miami",
      "Tampa",
      "Orlando",
      "Jacksonville",
      "Fort Lauderdale",
      "St. Petersburg",
      "West Palm Beach",
      "Naples",
      "Sarasota",
      "Fort Myers",
      "Boca Raton",
      "Palm Beach Gardens",
      "Delray Beach",
      "Lakeland",
      "Gainesville",
      "Tallahassee",
      "Melbourne",
      "Clearwater",
      "Pensacola",
    ],
  },
  comparison: {
    title: "Accounts Receivable Financing vs. Factoring in Florida",
    intro:
      "Florida middle market companies evaluating receivables based liquidity should distinguish between an accounts receivable financing facility and traditional factoring. While both structures leverage commercial receivables, they differ in collateral treatment, facility structure, capital scalability, and integration with the broader capital strategy.",
    rows: [
      [
        "Structured as a financing facility secured by eligible accounts receivable, with availability determined by collateral eligibility and portfolio performance.",
        "Structured around the purchase of designated receivables, with funding tied to invoices acquired by the factoring provider.",
      ],
      [
        "Well suited to middle market companies requiring recurring working capital capacity aligned with a substantial receivables portfolio.",
        "Generally oriented toward transaction specific liquidity requirements and selected receivables.",
      ],
      [
        "Can be incorporated into a broader capital structure alongside other financing arrangements, subject to applicable intercreditor and collateral considerations.",
        "Typically operates as a receivables purchase arrangement with its own commercial and documentation framework.",
      ],
      [
        "Borrowing capacity can scale with eligible receivables, subject to advance rates, eligibility criteria, concentration limits, and portfolio performance.",
        "Funding capacity is primarily linked to the volume and eligibility of receivables presented for purchase.",
      ],
      [
        "Provides greater flexibility for companies managing recurring working capital requirements, expansion initiatives, acquisitions, or strategic transactions.",
        "Primarily addresses liquidity requirements associated with specific receivables and customer payment cycles.",
      ],
      [
        "Facility economics and availability can be evaluated against customer credit quality, aging, dilution, concentration, historical collections, and portfolio composition.",
        "Economics are generally driven by the receivables purchased, customer payment performance, purchase terms, and applicable factoring charges.",
      ],
    ],
  },
  cta: {
    title: "Discuss Receivables Financing for Your Florida Business",
    body: "Evaluate a receivables financing structure aligned with your portfolio, liquidity requirements, and broader capital strategy.",
    button: "Discuss Your Financing Requirements",
  },
  faqs: {
    items: [
      {
        question: "What size companies does EPOCH Financial work with?",
        answer:
          "EPOCH Financial primarily works with middle-market businesses generating approximately $15 million to $1 billion+ in annual revenue. Financing opportunities are evaluated based on factors such as financial performance, collateral availability, industry dynamics, liquidity requirements, and transaction objectives.",
      },
      {
        question: "How does accounts receivable financing support Florida businesses?",
        answer:
          "Accounts receivable financing helps Florida businesses convert outstanding invoices into working capital that can be used for growth initiatives, operating expenses, inventory purchases, and other business requirements. This financing structure can improve liquidity while allowing companies to continue extending payment terms to customers.",
      },
    ],
  },
};

export default function FloridaPage() {
  return <StateARFinancingPage data={data} />;
}
