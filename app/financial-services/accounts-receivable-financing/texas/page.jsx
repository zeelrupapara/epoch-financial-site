import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/financial-services/accounts-receivable-financing/texas";

export const metadata = seoMetadata(ROUTE);

const data = {
  route: ROUTE,
  state: "Texas",
  hero: {
    title: "Accounts Receivable Financing Services in Texas",
    intro:
      "EPOCH Financial works with Texas middle-market companies evaluating $3MM to $75MM+ in receivables-backed financing. We assess A/R quality, borrowing capacity, existing obligations, liquidity needs, and capital structure to develop an appropriate financing approach.",
    cta: "Request a Financing Review",
  },
  profile: {
    title: "Key Accounts Receivable Financing Profile for Texas Companies",
    intro:
      "A Texas company's receivables financing profile depends on the quality of its A/R, customer concentration, borrowing needs, existing debt, and overall liquidity position.",
    columnLabel: "Typical Considerations",
    rows: [
      { label: "Annual Revenue", value: "$15MM+" },
      { label: "Facility Size", value: "$3MM–$75MM+" },
      { label: "Eligible Receivables", value: "Commercial B2B receivables" },
      { label: "Advance Rate", value: "Up to 90%" },
      { label: "Funding Timeline", value: "Based on diligence and transaction structure" },
      { label: "Financing Structure", value: "Revolving receivables-backed facilities" },
    ],
  },
  review: {
    title: "What We Review in the Receivables Base",
    intro: "Facility capacity depends on the quality and availability of the underlying receivables. Key considerations include:",
    factors: [
      "Invoice Aging",
      "Receivable Eligibility",
      "Customer Concentration",
      "Dilution & Cross-Aging",
      "Unbilled & Progress Receivables",
      "Existing UCC Liens",
      "Current Debt Obligations",
      "Borrowing-Base Availability",
    ],
    outro: "These factors help establish the eligible collateral base and available borrowing capacity.",
  },
  borrowingBase: {
    title: "Example of Available Capacity",
    intro:
      "Consider a Texas company with $50MM in total A/R, of which $40MM qualifies as eligible collateral. Applying a 90% advance rate produces $36MM of potential gross availability before reserves and other adjustments.",
    columnLabel: "Receivables Calculation",
    rows: [
      { label: "Total A/R", value: "$50MM" },
      { label: "Ineligible A/R", value: "($10MM)" },
      { label: "Eligible A/R", value: "$40MM" },
      { label: "Advance Rate", value: "90%" },
      { label: "Potential Gross Availability", value: "$36MM" },
    ],
    disclaimer:
      "Final availability may be reduced by reserves, concentration limits, dilution, and other facility-specific requirements.",
  },
  triggers: {
    title: "Situations That May Create a Financing Need",
    intro:
      "Companies may consider receivables financing when their existing capital structure does not provide sufficient flexibility for changing business requirements.",
    items: [
      "Revenue Expansion",
      "Major Customer Contracts",
      "Higher Working Capital Needs",
      "Limited Bank Capacity",
      "Debt Refinancing",
      "Acquisitions",
      "Geographic or Operational Expansion",
      "Seasonal Cash Requirements",
      "Lender Replacement",
    ],
  },
  industries: {
    title: "Industries We Serve Across Texas",
    intro:
      "We work with middle market companies across Texas that maintain established receivables portfolios and require additional liquidity to support working capital, growth initiatives, and complex operating requirements. Our focus is on companies with strong revenue profiles, financeable receivables, and capital needs that extend beyond the capacity or flexibility of conventional credit facilities.",
    items: [
      {
        icon: "factory",
        title: "Manufacturing & Industrial Businesses",
        description:
          "Accounts receivable financing structures for manufacturers, processors, fabricators, and industrial operators seeking to improve liquidity, manage production cycles, and support expanding customer programs.",
      },
      {
        icon: "local_shipping",
        title: "Transportation & Logistics",
        description:
          "Receivables-based financing for freight carriers, logistics providers, and supply chain operators managing significant billing volumes, extended collection cycles, and ongoing working capital requirements.",
      },
      {
        icon: "medical_services",
        title: "Healthcare & Medical Services",
        description:
          "Customized financing structures for healthcare organizations and medical service providers seeking to enhance liquidity, support operational expansion, and manage the capital requirements associated with continued growth.",
      },
      {
        icon: "warehouse",
        title: "Distribution & Wholesale Businesses",
        description:
          "Accounts receivable financing for distributors and wholesale companies managing substantial customer portfolios, extended payment terms, and increasing working capital requirements.",
      },
      {
        icon: "support_agent",
        title: "Business & Professional Services",
        description:
          "Receivables financing structures designed for service-based organizations with established customer relationships, recurring billing activity, and ongoing capital requirements.",
      },
      {
        icon: "oil_barrel",
        title: "Energy & Oilfield Services",
        description:
          "Customized receivables financing solutions for Texas energy and oilfield service companies managing significant operating expenditures, project-related cash flow requirements, and extended customer payment cycles.",
      },
    ],
  },
  locations: {
    title: "Locations We Serve in Texas",
    intro:
      "We advise middle-market Texas companies evaluating receivables-backed financing across Houston, Dallas, Austin, San Antonio, Fort Worth, Plano, Irving, Frisco, Arlington, McKinney, Richardson, Midland, Odessa, Corpus Christi, Beaumont, Waco, Tyler, and surrounding markets.",
    cities: [
      "Houston",
      "Dallas",
      "Austin",
      "San Antonio",
      "Fort Worth",
      "Plano",
      "Irving",
      "Frisco",
      "Arlington",
      "McKinney",
      "Richardson",
      "Midland",
      "Odessa",
      "Corpus Christi",
      "Beaumont",
      "Waco",
      "Tyler",
    ],
  },
  comparison: {
    title: "Accounts Receivable Financing vs. Factoring in Texas",
    intro:
      "Texas middle market companies often require working capital structures that can accommodate significant receivables portfolios, multi-location operations, and expansion across diverse industries. When evaluating accounts receivable financing and traditional factoring, the distinction extends beyond how receivables generate liquidity to include facility design, collateral administration, financing capacity, and compatibility with the company's broader capital structure.",
    rows: [
      [
        "Structured as a revolving or ongoing financing facility supported by eligible accounts receivable and established borrowing parameters.",
        "Structured around the purchase of individual or designated receivables by the factoring provider.",
      ],
      [
        "Designed for companies requiring consistent access to working capital as receivables are generated and collected over the ordinary course of business.",
        "Generally focused on converting specific invoices into immediate liquidity.",
      ],
      [
        "Availability may fluctuate with eligible receivables and is evaluated against borrowing base criteria, concentration, aging, dilution, and collection performance.",
        "Funding is determined by the receivables selected for purchase and the applicable terms established by the factoring company.",
      ],
      [
        "Can support larger and more complex working capital requirements across manufacturing, transportation, distribution, energy, and other Texas industries.",
        "May be used where liquidity requirements are more closely connected to individual invoices or selected customer relationships.",
      ],
      [
        "Can be structured alongside other senior or institutional financing arrangements, subject to collateral priorities and intercreditor considerations.",
        "Typically operates under a separate receivables purchase and servicing framework.",
      ],
      [
        "Provides a scalable source of liquidity that can support operational growth, increased sales activity, acquisitions, and changing working capital requirements.",
        "Liquidity is primarily generated through the ongoing sale of receivables rather than through a borrowing base financing structure.",
      ],
      [
        "Financing terms are structured around the quality and composition of the receivables portfolio and the company's broader capital requirements.",
        "Commercial terms are primarily determined by the receivables purchased, customer payment performance, and applicable factoring economics.",
      ],
    ],
  },
  cta: {
    title: "Tailored Private Credit Solutions for Texas Businesses",
    body:
      "Texas middle market companies need flexible capital to support growth, acquisitions, refinancing, and working capital. We structure private credit solutions around each company's financial profile, assets, liquidity needs, and future strategic objectives.",
    button: "Request a Financing Review",
  },
  faqs: {
    items: [
      {
        question: "Can accounts receivable financing work alongside existing debt?",
        answer:
          "Yes. It can be structured alongside senior credit facilities or incorporated into a broader capital strategy. The structure is tailored to complement your existing capital stack while optimizing working capital availability.",
      },
      {
        question: "Which Texas companies typically consider accounts receivable financing?",
        answer:
          "We advise established Texas middle-market companies with $15 million to $1 billion+ in annual revenue that are evaluating $3 million to $75 million+ in receivables-backed financing. We help companies evaluate financing structures aligned with their liquidity requirements, capital position, and growth objectives.",
      },
      {
        question: "What factors influence advance rates?",
        answer:
          "Advance rates are based on receivables quality, customer payment history, industry risk, and portfolio concentration. The final advance rate depends on the receivables profile, collateral quality, customer concentration, and requirements established through lender diligence.",
      },
      {
        question: "Can the financing facility support acquisitions?",
        answer:
          "Yes. Accounts receivable financing can provide the working capital needed to support acquisitions, expansions, and other strategic initiatives. It can also help maintain liquidity during integration and post-acquisition growth.",
      },
    ],
  },
};

export default function TexasPage() {
  return <StateARFinancingPage data={data} />;
}
