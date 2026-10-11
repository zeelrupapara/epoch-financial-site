import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/service-areas/georgia";

export const metadata = seoMetadata(ROUTE);

const data = {
  route: ROUTE,
  state: "Georgia",
  hero: {
    title: "Accounts Receivable Financing for Georgia Middle Market Companies",
    intro:
      "Georgia middle-market companies can use accounts receivable financing to support growth, acquisitions, and working capital. We help Georgia middle-market companies evaluate receivables-backed financing based on receivable quality, borrowing needs, and broader capital requirements.",
    cta: "Discuss Financing Opportunity",
  },
  profile: {
    title: "Key Financing Profile Features for Georgia Mid-Market Businesses",
    intro: "Georgia companies evaluating accounts receivable financing can consider the following key facility parameters:",
    columnLabel: "Georgia Considerations",
    rows: [
      { label: "Annual Revenue", value: "Typically $15M+" },
      { label: "Facility Size", value: "$3M to $75M+" },
      { label: "Eligible Receivables", value: "Commercial B2B invoices" },
      { label: "Advance Rate", value: "Up to 90%" },
      { label: "Transaction Timing", value: "Based on diligence, structure, and lender requirements" },
      { label: "Financing Structure", value: "Receivables-backed revolving facilities" },
    ],
  },
  review: {
    title: "Receivables Review & Borrowing Factors",
    intro: "Georgia companies evaluating AR financing may consider the receivables and facility factors that influence borrowing capacity.",
    factors: [
      "A/R Aging & Eligibility",
      "Customer Credit Quality",
      "Customer Concentration",
      "Dilution & Cross-Aging",
      "Unbilled & Progress Receivables",
      "Existing UCC Liens",
      "Current Debt Obligations",
      "Borrowing-Base Availability",
    ],
    outro: "These factors help evaluate eligible collateral, potential borrowing capacity, and financing structure.",
  },
  borrowingBase: {
    title: "Illustrative Borrowing Base",
    intro:
      "A Georgia middle-market company with $20MM in receivables and $16MM in eligible A/R could support approximately $14.4MM in gross borrowing capacity at a 90% advance rate.",
    columnLabel: "Borrowing Base Calculation",
    rows: [
      { label: "Total Accounts Receivable", value: "$20MM" },
      { label: "Less: Ineligible Receivables", value: "($4MM)" },
      { label: "Eligible Accounts Receivable", value: "$16MM" },
      { label: "Advance Rate", value: "90%" },
      { label: "Potential Gross Borrowing Capacity", value: "$14.4MM" },
    ],
    disclaimer:
      "Actual availability may vary based on reserves, concentration limits, dilution, customer eligibility, and other transaction-specific requirements.",
  },
  triggers: {
    title: "When Georgia Companies Consider Receivables Financing",
    intro:
      "Georgia middle-market companies may evaluate AR financing when receivables growth, customer payment cycles, or changes in their capital structure create additional liquidity requirements.",
    items: [
      "Rapid Revenue Growth",
      "Large Customer or Contract Requirements",
      "Increasing Receivables Balances",
      "Working Capital Constraints",
      "Undersized Bank Facilities",
      "Refinancing Existing Debt",
      "Acquisition Financing",
      "Business Expansion",
      "Seasonal Liquidity Requirements",
      "Lender Replacement",
      "Balance Sheet Restructuring",
    ],
  },
  industries: {
    title: "Industries We Support Across Georgia",
    intro:
      "Georgia's manufacturing sector spans automotive suppliers, aerospace components, food processing, and industrial equipment production. We help companies across diverse sectors leverage outstanding accounts receivable to improve liquidity while maintaining existing customer relationships. Each facility is structured around the quality of eligible receivables, customer credit strength, and ongoing working capital requirements.",
    items: [
      {
        icon: "factory",
        title: "Manufacturing",
        description:
          "Georgia's manufacturing sector spans automotive suppliers, aerospace components, food processing, and industrial equipment production. Extended customer payment terms can tie up significant working capital while businesses continue funding raw materials, labor, and production. Accounts receivable financing helps unlock liquidity to support ongoing operations and future growth.",
      },
      {
        icon: "local_shipping",
        title: "Transportation & Logistics",
        description:
          "Georgia's transportation and logistics sector, supported by the Port of Savannah, Hartsfield-Jackson Atlanta International Airport, and major interstate freight corridors, often experiences significant working capital tied up in commercial receivables. Customized accounts receivable financing helps businesses improve liquidity while supporting continued operational growth.",
      },
      {
        icon: "warehouse",
        title: "Distribution & Wholesale",
        description:
          "Distributors and wholesalers must maintain inventory levels while extending commercial credit to customers. Accounts receivable financing converts eligible receivables into working capital, helping businesses replenish inventory, fulfill larger orders, and manage seasonal demand.",
      },
      {
        icon: "medical_services",
        title: "Healthcare",
        description:
          "Healthcare providers serving commercial organizations, healthcare networks, and business clients often experience extended payment cycles. Financing eligible receivables helps improve cash flow, allowing organizations to invest in staffing, technology, and operational growth.",
      },
      {
        icon: "restaurant",
        title: "Food & Beverage",
        description:
          "Georgia's food manufacturing and distribution businesses supply regional and national retailers, wholesalers, and food service companies. Receivables financing liquidity requirements tied up in outstanding invoices, supporting production schedules, inventory purchases, and supply chain continuity.",
      },
      {
        icon: "memory",
        title: "Technology",
        description:
          "Atlanta's growing technology and fintech ecosystem includes companies serving enterprise clients on extended payment terms. Accounts receivable financing helps technology businesses access working capital to support product development, hiring, customer expansion, and strategic investments without waiting for invoice payments.",
      },
      {
        icon: "groups",
        title: "Staffing",
        description:
          "Staffing companies with significant commercial receivables may evaluate A/R financing to support payroll cycles, contract growth, and increasing working capital requirements.",
      },
      {
        icon: "engineering",
        title: "Industrial Services",
        description:
          "Industrial service providers frequently complete maintenance, engineering, construction support, and field service projects before receiving payment. Receivables financing provides working capital to manage labor costs, equipment expenses, and ongoing project commitments.",
      },
      {
        icon: "support_agent",
        title: "Business Services",
        description:
          "Professional service firms, facility management companies, and outsourced business service providers often maintain significant accounts receivable balances from commercial customers. Financing eligible receivables improves cash flow and provides additional financial flexibility to support business expansion.",
      },
      {
        icon: "package_2",
        title: "Packaging",
        description:
          "Packaging companies serving manufacturers, consumer product companies, and distribution businesses often produce large commercial orders with extended payment terms. Accounts receivable financing improves liquidity, helping businesses purchase materials, maintain production capacity, and fulfill customer demand.",
      },
      {
        icon: "shopping_bag",
        title: "Consumer Products",
        description:
          "Consumer product manufacturers and suppliers selling to retailers, distributors, and national chains often wait weeks or months for payment. Receivables financing unlocks working capital tied to outstanding invoices, enabling businesses to increase production, launch new products, and support continued sales growth.",
      },
    ],
  },
  locations: {
    title: "Georgia Accounts Receivable Financing Where Your Business Operates",
    intro:
      "Our Georgia coverage includes Atlanta, Augusta, Athens, Columbus, Macon, Roswell, Savannah, Sandy Springs, and surrounding commercial markets, supporting middle-market companies with receivables financing requirements.",
    cities: ["Atlanta", "Augusta", "Athens", "Columbus", "Macon", "Roswell", "Savannah", "Sandy Springs"],
  },
  comparison: {
    title: "Accounts Receivable Financing or Factoring: What Georgia Companies Consider",
    intro:
      "Businesses searching for factoring companies in Georgia are often exploring ways to improve cash flow from outstanding invoices. While both solutions provide access to working capital, they are structured differently and are suited to different financing needs.",
    rows: [
      ["Uses eligible accounts receivable as collateral for a financing facility.", "Involves selling invoices to a factoring company."],
      [
        "Designed for middle market companies with larger working capital requirements.",
        "Often structured around the purchase of designated receivables and the factoring provider's servicing requirements.",
      ],
      ["Can be structured alongside existing lending facilities and broader capital strategies.", "Typically operates as a standalone funding solution."],
      ["Financing availability can increase as eligible receivables grow.", "Funding depends on the invoices purchased by the factoring company."],
      [
        "Allows businesses to access scalable working capital tailored to their financing objectives.",
        "Primarily focuses on the purchase and servicing of designated receivables.",
      ],
    ],
    outro:
      "EPOCH Financial structures customized accounts receivable financing solutions through specialty finance companies and institutional lending partners. Our focus is on helping middle market businesses secure flexible receivables backed financing that aligns with their working capital requirements, growth initiatives, and long term financing strategy.",
  },
  cta: {
    title: "Connect with Our Georgia Receivables Financing Team",
    body:
      "Evaluate a receivables financing structure aligned with your portfolio, liquidity requirements, and broader capital strategy.",
    button: "Schedule a Meeting",
  },
  faqs: {
    items: [
      {
        question: "Can accounts receivable financing support sponsor backed acquisitions or recapitalizations?",
        answer:
          "Yes. Accounts receivable financing can provide incremental liquidity alongside senior debt, asset based lending, or private credit facilities to support acquisitions, recapitalizations, and post closing working capital requirements, subject to collateral availability and transaction structure.",
      },
      {
        question: "How are borrowing base calculations customized for middle market companies?",
        answer:
          "Borrowing bases are structured based on receivables quality, customer concentration, invoice aging, dilution trends, industry dynamics, and reporting capabilities. Each facility is designed around the company's operating profile rather than applying standardized eligibility criteria.",
      },
      {
        question: "Can an accounts receivable financing facility be integrated with an existing capital structure?",
        answer:
          "Facilities can often be structured alongside senior secured debt, asset based lending, equipment financing, or other private credit solutions. The financing strategy is determined by collateral allocation, lien position, and overall liquidity objectives.",
      },
    ],
  },
};

export default function GeorgiaPage() {
  return <StateARFinancingPage data={data} />;
}
