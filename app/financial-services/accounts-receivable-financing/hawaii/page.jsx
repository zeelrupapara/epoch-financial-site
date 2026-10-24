import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/financial-services/accounts-receivable-financing/hawaii";

export const metadata = seoMetadata(ROUTE);

const data = {
  "route": ROUTE,
  "state": "Hawaii",
  "hero": {
    "title": "Accounts Receivable Financing for Hawaii Businesses",
    "intro": "EPOCH Financial works with Hawaii middle-market businesses seeking $3M–$75M+ in accounts receivable financing. We evaluate receivables quality, customer payment patterns, concentration risks, and existing credit obligations to determine potential borrowing capacity, and coordinate lender engagement around working capital demands, liquidity gaps, and growth objectives.",
    "cta": "Discuss Your Financing Requirements"
  },
  "profile": {
    "title": "Key Parameters for Hawaii Accounts Receivable Financing",
    "intro": "We assess these parameters to determine potential facility capacity and coordinate suitable capital provider engagement.",
    "columnLabel": "Typical Criteria",
    "rows": [
      {
        "label": "Annual Revenue",
        "value": "$15MM+"
      },
      {
        "label": "Facility Size",
        "value": "$3MM–$75MM+"
      },
      {
        "label": "Eligible Receivables",
        "value": "Commercial B2B invoices"
      },
      {
        "label": "Advance Rate",
        "value": "Up to 90%"
      },
      {
        "label": "Facility Type",
        "value": "Revolving working capital"
      },
      {
        "label": "Financing Sources",
        "value": "Asset-based lenders, private credit funds, institutional finance providers"
      },
      {
        "label": "Evaluation Criteria",
        "value": "Invoice aging, customer concentration, dilution, existing liens, and borrowing-base availability"
      }
    ]
  },
  "review": {
    "title": "Assessing Receivables Eligibility and Available Capacity",
    "intro": "A financing assessment considers invoice documentation, collection patterns, customer payment reliability, and restrictions attached to outstanding balances. EPOCH Financial reviews these factors alongside existing debt arrangements before engaging capital providers.",
    "factors": [
      {
        "title": "Outstanding Invoices",
        "description": "Aging schedules, overdue balances, and collection history"
      },
      {
        "title": "Customer Concentration",
        "description": "Exposure to major accounts and payment reliability"
      },
      {
        "title": "Receivables Eligibility",
        "description": "Disputed invoices, credit notes, and contractual deductions"
      },
      {
        "title": "Payment Arrangements",
        "description": "Customer terms, acceptance conditions, and collection restrictions"
      },
      {
        "title": "Existing Financing",
        "description": "Current liens, credit agreements, and intercreditor requirements"
      }
    ],
    "outro": "Capital providers set the final eligibility criteria during underwriting."
  },
  "borrowingBase": {
    "title": "Illustrative Receivables Financing Scenario",
    "intro": "A Hawaii-based food distribution company has $14MM in outstanding commercial receivables. An eligibility review identifies $2MM in disputed invoices and balances excluded due to customer concentration limits, leaving $12MM in eligible receivables. At an illustrative 85% advance rate, this could support $10.2MM in gross financing capacity before reserves and other adjustments.",
    "columnLabel": "Borrowing Base Calculation",
    "rows": [
      {
        "label": "Total Accounts Receivable",
        "value": "$14MM"
      },
      {
        "label": "Ineligible Receivables",
        "value": "($2MM)"
      },
      {
        "label": "Eligible Receivables",
        "value": "$12MM"
      },
      {
        "label": "Illustrative Advance Rate",
        "value": "85%"
      },
      {
        "label": "Potential Gross Availability",
        "value": "$10.2MM"
      }
    ],
    "disclaimer": "The final facility depends on invoice eligibility, customer creditworthiness, concentration limits, collection patterns, existing security interests, and capital provider due diligence."
  },
  "triggers": {
    "title": "Financing Considerations as Business Needs Change",
    "intro": "Hawaii middle-market companies may reassess receivables financing when customer collections, operating costs, or commercial commitments change. Reviewing available receivables can help businesses evaluate additional liquidity without relying solely on existing credit arrangements.",
    "items": [
      "Large Invoices Creating Cash Flow Gaps",
      "Seasonal Revenue Fluctuations",
      "Extended Customer Payment Terms",
      "New Contracts Requiring Inventory",
      "Limited Availability Under Existing Facilities",
      "Acquisition Liquidity Requirements",
      "Changes in Payment Reliability or Concentration"
    ]
  },
  "industries": {
    "title": "Industries We Serve Across Hawaii",
    "intro": "We advise Hawaii middle-market companies across industries where receivables influence working capital availability, liquidity planning, and financing capacity.",
    "items": [
      {
        "icon": "hotel",
        "title": "Tourism and Hospitality",
        "description": "Hotels, resorts, and hospitality suppliers may have receivables tied to corporate bookings, travel operators, and commercial service agreements. We review payment schedules, customer concentration, and collection patterns to assess potential financing capacity."
      },
      {
        "icon": "restaurant",
        "title": "Food Distribution and Processing",
        "description": "Food wholesalers, commercial distributors, and processors often manage recurring invoices alongside inventory and supplier expenses. We evaluate buyer payment terms, receivables eligibility, and collection timelines when assessing financing opportunities."
      },
      {
        "icon": "construction",
        "title": "Construction and Building Materials",
        "description": "Construction companies and material suppliers may carry outstanding balances across multiple projects. We examine progress billing, contract terms, invoice disputes, and payment schedules to determine which receivables may qualify."
      },
      {
        "icon": "agriculture",
        "title": "Agriculture and Food Production",
        "description": "Agricultural businesses and food producers supply wholesalers, retailers, and institutional buyers. We assess receivables quality, seasonal sales patterns, customer payment history, and working capital requirements."
      },
      {
        "icon": "local_shipping",
        "title": "Transportation and Logistics",
        "description": "Freight operators, cargo service providers, and logistics companies generate receivables through commercial contracts. We review billing arrangements, customer credit quality, collection cycles, and existing financing obligations."
      },
      {
        "icon": "medical_services",
        "title": "Healthcare and Medical Supplies",
        "description": "Medical distributors and healthcare service providers work with hospitals, clinics, and other institutional customers. We assess invoice documentation, payment terms, customer concentration, and outstanding balances to evaluate potential borrowing capacity."
      },
      {
        "icon": "warehouse",
        "title": "Wholesale and Commercial Distribution",
        "description": "Wholesale businesses serving retail and commercial accounts may experience gaps between supplier payments and customer collections. We examine invoice eligibility, debtor concentration, and inventory-related working capital needs."
      },
      {
        "icon": "directions_boat",
        "title": "Marine and Shipping Services",
        "description": "Marine contractors, vessel support providers, and shipping-related businesses manage receivables from commercial service agreements. We review contract structures, payment schedules, customer reliability, and outstanding obligations when evaluating financing options."
      }
    ]
  },
  "locations": {
    "title": "Locations We Serve in Hawaii",
    "intro": "EPOCH Financial advises middle-market companies across Hawaii, including businesses in Honolulu, Pearl City, Hilo, Kailua, Kahului, Kapolei, Kaneohe, Lihue, and Kihei. We assess accounts receivable financing opportunities based on eligible commercial invoices, customer payment terms, and working capital requirements across the state's key business centers.",
    "cities": [
      "Honolulu",
      "Pearl City",
      "Hilo",
      "Kailua",
      "Kahului",
      "Kapolei",
      "Kaneohe",
      "Lihue",
      "Kihei"
    ]
  },
  "process": {
    "title": "Why Hawaii Companies Work With Us on Receivables Financing",
    "intro": "We help Hawaii middle-market companies evaluate receivables financing opportunities through a structured advisory process focused on borrowing capacity, collateral eligibility, and capital requirements.",
    "steps": [
      {
        "title": "Receivables Assessment",
        "description": "We review invoice eligibility, aging, customer concentration, and collection patterns to assess potential financing capacity."
      },
      {
        "title": "Financing Structure Evaluation",
        "description": "We evaluate facility structures against working capital needs, existing debt obligations, and collateral availability."
      },
      {
        "title": "Capital Provider Coordination",
        "description": "We prepare lender-ready opportunities and coordinate engagement with relevant capital providers."
      },
      {
        "title": "Existing Facility Review",
        "description": "We assess current credit arrangements, lien considerations, and refinancing requirements to identify potential structural constraints."
      },
      {
        "title": "Transaction Process Management",
        "description": "We coordinate lender discussions, diligence requirements, and financing terms through the transaction process."
      }
    ]
  },
  "comparison": {
    "title": "Accounts Receivable Financing vs. Factoring in Hawaii",
    "intro": "Hawaii middle-market companies evaluating receivables-based liquidity should distinguish between an accounts receivable financing facility and traditional factoring. While both structures leverage commercial receivables, they differ in collateral treatment, facility structure, capital scalability, and integration with the broader capital strategy.",
    "rows": [
      [
        "Structured as a financing facility secured by eligible accounts receivable, with availability determined by collateral eligibility and portfolio performance.",
        "Structured around the purchase of designated receivables, with funding tied to invoices acquired by the factoring provider."
      ],
      [
        "Well suited to middle market companies requiring recurring working capital capacity aligned with a substantial receivables portfolio.",
        "Generally oriented toward transaction specific liquidity requirements and selected receivables."
      ],
      [
        "Can be incorporated into a broader capital structure alongside other financing arrangements, subject to applicable intercreditor and collateral considerations.",
        "Typically operates as a receivables purchase arrangement with its own commercial and documentation framework."
      ],
      [
        "Borrowing capacity can scale with eligible receivables, subject to advance rates, eligibility criteria, concentration limits, and portfolio performance.",
        "Funding capacity is primarily linked to the volume and eligibility of receivables presented for purchase."
      ],
      [
        "Provides greater flexibility for companies managing recurring working capital requirements, expansion initiatives, acquisitions, or strategic transactions.",
        "Primarily addresses liquidity requirements associated with specific receivables and customer payment cycles."
      ],
      [
        "Facility economics and availability can be evaluated against customer credit quality, aging, dilution, concentration, historical collections, and portfolio composition.",
        "Economics are generally driven by the receivables purchased, customer payment performance, purchase terms, and applicable factoring charges."
      ]
    ]
  },
  "cta": {
    "title": "Discuss Your Hawaii Receivables Financing Requirements",
    "body": "Review your eligible receivables, assess potential borrowing capacity, and discuss your working capital requirements with EPOCH Financial.",
    "button": "Contact Our Team"
  },
  "faqs": {
    "items": [
      {
        "question": "Which Hawaii businesses may qualify for accounts receivable financing?",
        "answer": "Hawaii middle-market companies with established B2B sales, creditworthy customers, and eligible outstanding invoices may be candidates for accounts receivable financing, subject to underwriting and facility requirements."
      },
      {
        "question": "How do customer payment terms affect receivables financing?",
        "answer": "Longer payment terms can increase outstanding receivables and working capital pressure. We assess collection patterns, invoice aging, and customer payment reliability when evaluating potential financing capacity."
      },
      {
        "question": "Can receivables financing support seasonal businesses in Hawaii?",
        "answer": "Yes. Businesses with seasonal sales cycles may evaluate receivables financing to manage operating expenses and supplier commitments while awaiting customer payments, subject to eligible collateral and facility terms."
      },
      {
        "question": "How are eligible receivables determined?",
        "answer": "Eligibility depends on invoice validity, aging, customer credit quality, contractual terms, disputes, dilution, and concentration limits. Capital providers establish the final eligibility criteria during underwriting."
      }
    ]
  }
};

export default function HawaiiPage() {
  return <StateARFinancingPage data={data} />;
}
