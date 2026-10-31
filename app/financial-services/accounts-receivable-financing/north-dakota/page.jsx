import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/financial-services/accounts-receivable-financing/north-dakota";

export const metadata = seoMetadata(ROUTE);

const data = {
  "route": ROUTE,
  "state": "North Dakota",
  "hero": {
    "title": "Accounts Receivable Financing Services in North Dakota",
    "intro": "We advise North Dakota middle-market companies on $3M–$75M+ accounts receivable financing opportunities. Our process evaluates eligible receivables, borrowing capacity, existing debt, and liquidity requirements to prepare lender-ready opportunities and coordinate financing execution.",
    "cta": "Discuss Your Financing Requirements"
  },
  "profile": {
    "title": "North Dakota Accounts Receivable Financing Parameters",
    "intro": "We evaluate North Dakota receivables financing opportunities based on eligible collateral, borrowing capacity, facility requirements, and the company's broader capital objectives.",
    "columnLabel": "North Dakota Considerations",
    "rows": [
      {
        "label": "Revenue",
        "value": "Typically $15MM+"
      },
      {
        "label": "Facility Size",
        "value": "$3MM to $75MM+"
      },
      {
        "label": "Collateral",
        "value": "Eligible commercial B2B receivables"
      },
      {
        "label": "Advance Rate",
        "value": "Up to 90%"
      },
      {
        "label": "Borrowing Capacity",
        "value": "Based on eligible receivables, aging, concentration, and dilution"
      },
      {
        "label": "Structure",
        "value": "Revolving working-capital facilities"
      },
      {
        "label": "Potential Financing Sources",
        "value": "Asset-based lending groups, private credit funds, and institutional financing providers"
      },
      {
        "label": "Strategic Uses",
        "value": "Working capital, growth, acquisitions, refinancing, and facility replacement"
      }
    ]
  },
  "review": {
    "title": "Receivables Assessment",
    "intro": "Our review focuses on the following factors to assess eligible collateral, borrowing-base availability, and potential facility constraints:",
    "factors": [
      "A/R Aging & Eligibility",
      "Customer Concentration",
      "Dilution & Cross-Aging",
      "Progress Billing & Unbilled A/R",
      "UCC Liens",
      "Existing Financing Obligations",
      "Borrowing-Base Availability"
    ],
    "outro": "These considerations help establish the eligible collateral base and support an appropriate receivables financing structure."
  },
  "borrowingBase": {
    "title": "Illustrative Receivables Availability",
    "intro": "A North Dakota company with $20MM in total receivables and $16MM in eligible A/R could generate approximately $14.4MM in gross borrowing capacity at a 90% advance rate, before reserves and other adjustments.",
    "columnLabel": "Receivables Calculation",
    "rows": [
      {
        "label": "Total Accounts Receivable",
        "value": "$20MM"
      },
      {
        "label": "Less: Ineligible Receivables",
        "value": "($4MM)"
      },
      {
        "label": "Eligible Accounts Receivable",
        "value": "$16MM"
      },
      {
        "label": "Advance Rate",
        "value": "90%"
      },
      {
        "label": "Potential Gross Availability",
        "value": "$14.4MM"
      }
    ],
    "disclaimer": "Actual availability will depend on receivable eligibility, concentration limits, reserves, and other facility-specific requirements."
  },
  "industries": {
    "title": "Industries We Serve Across North Dakota",
    "intro": "North Dakota's energy, agriculture, manufacturing, and commercial sectors generate receivables through project contracts, product sales, and ongoing business relationships. We evaluate how customer payment terms, seasonal demand, and receivable composition affect borrowing capacity and working capital requirements.",
    "items": [
      {
        "icon": "oil_barrel",
        "title": "Energy & Oilfield Services",
        "description": "Energy and oilfield service companies may carry substantial receivables from operators, contractors, and project-based customers. We assess customer concentration, invoice aging, and payment performance to evaluate borrowing capacity and working capital requirements."
      },
      {
        "icon": "agriculture",
        "title": "Agriculture & Agribusiness",
        "description": "Grain businesses, agricultural suppliers, and processors may experience seasonal collection patterns and fluctuating liquidity needs. We evaluate receivable eligibility, customer payment terms, and collection cycles to assess financing capacity throughout seasonal operating periods."
      },
      {
        "icon": "factory",
        "title": "Manufacturing & Industrial Businesses",
        "description": "Manufacturers selling to distributors and commercial buyers may need additional liquidity to support production, fulfill orders, and accommodate extended payment terms. We assess eligible receivables and customer concentrations against these working capital requirements."
      },
      {
        "icon": "local_shipping",
        "title": "Transportation & Logistics",
        "description": "Freight carriers and logistics providers often pay fuel, payroll, and operating expenses before customers settle invoices. We evaluate obligor quality, invoice aging, and collection patterns to assess whether receivables can support ongoing operating liquidity."
      },
      {
        "icon": "construction",
        "title": "Construction & Infrastructure",
        "description": "Construction contractors and infrastructure service providers may carry receivables tied to project milestones, completion approvals, and extended payment terms. We review billing structures, customer obligations, and receivable eligibility to assess borrowing capacity and project-related working capital needs."
      },
      {
        "icon": "medical_services",
        "title": "Healthcare & Medical Services",
        "description": "Healthcare and medical service companies may have receivables from commercial payors, institutional customers, and other reimbursement sources. We assess payment performance, aging, and eligibility to determine how the receivables portfolio may support liquidity requirements."
      },
      {
        "icon": "warehouse",
        "title": "Distribution & Wholesale Businesses",
        "description": "Distributors and wholesalers may need to finance the gap between paying suppliers and collecting from commercial customers. We evaluate customer credit quality, concentration, and collection cycles to assess receivables-based borrowing capacity as sales volumes change."
      }
    ]
  },
  "locations": {
    "title": "Locations We Serve in North Dakota",
    "intro": "We advise middle-market companies across Fargo, Bismarck, Grand Forks, Minot, West Fargo, Williston, Dickinson, Mandan, Jamestown, Wahpeton, Devils Lake, and Valley City on accounts receivable financing opportunities.",
    "cities": [
      "Fargo",
      "Bismarck",
      "Grand Forks",
      "Minot",
      "West Fargo",
      "Williston",
      "Dickinson",
      "Mandan",
      "Jamestown",
      "Wahpeton",
      "Devils Lake",
      "Valley City"
    ]
  },
  "comparison": {
    "title": "Comparing Accounts Receivable Financing and Factoring in North Dakota",
    "intro": "We evaluate receivables financing and factoring against a company's liquidity needs, collateral profile, and broader capital structure. This comparison helps management assess which approach better aligns with its borrowing requirements, refinancing plans, and ongoing working capital needs.",
    "rightLabel": "Factoring",
    "rows": [
      [
        "Structured around a company’s eligible receivables portfolio and its broader borrowing requirements.",
        "Structured primarily around the purchase or advance of qualifying individual receivables."
      ],
      [
        "Borrowing capacity is determined through analysis of receivable eligibility, aging, dilution, customer concentration, and credit quality.",
        "Funding availability is generally determined by the eligibility and credit profile of specific customer invoices."
      ],
      [
        "Can provide a revolving financing structure that scales with the company’s eligible receivables.",
        "Funding generally increases as additional eligible invoices are submitted and approved."
      ],
      [
        "Receivables remain part of the company’s broader collateral and financing framework.",
        "Receivables are typically sold or assigned as part of the factoring arrangement."
      ],
      [
        "Can be incorporated into refinancing, bank replacement, acquisition, growth, and broader liquidity strategies.",
        "Primarily addresses liquidity generated from outstanding customer invoices."
      ],
      [
        "Facility terms can be evaluated in relation to borrowing capacity, liquidity requirements, and the company’s overall capital structure.",
        "Terms are generally driven by invoice volume, customer credit quality, advance levels, and collection performance."
      ],
      [
        "Better aligned with companies seeking a structured, ongoing receivables-based credit facility.",
        "Often suited to companies seeking transaction-level liquidity tied directly to receivable turnover."
      ]
    ]
  },
  "cta": {
    "title": "Strategic Accounts Receivable Financing for North Dakota Businesses",
    "body": "We evaluate receivables financing to support working capital, growth, and refinancing needs.",
    "button": "Discuss Your Financing Requirements"
  },
  "faqs": {
    "items": [
      {
        "question": "Can accounts receivable financing improve cash flow without increasing equity?",
        "answer": "Yes. A receivables-based facility can make eligible invoice value available as working capital, potentially improving liquidity without requiring additional equity contributions. Availability depends on receivable eligibility and facility terms."
      },
      {
        "question": "Why does customer concentration matter in accounts receivable financing?",
        "answer": "Concentration can affect borrowing capacity because the financial strength and payment behavior of major customers can materially influence the risk profile of the receivables portfolio."
      },
      {
        "question": "What makes accounts receivable financing suitable for refinancing?",
        "answer": "A structured receivables facility can provide an alternative source of liquidity when a company is refinancing existing debt, replacing a bank line, addressing borrowing constraints, or restructuring its capital base."
      }
    ]
  }
};

export default function NorthDakotaPage() {
  return <StateARFinancingPage data={data} />;
}
