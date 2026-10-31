import StateARFinancingPage from "@/components/StateARFinancingPage";
import { seoMetadata } from "@/lib/seo";

const ROUTE = "/financial-services/accounts-receivable-financing/oregon";

export const metadata = seoMetadata(ROUTE);

const data = {
  "route": ROUTE,
  "state": "Oregon",
  "hero": {
    "title": "Accounts Receivable Financing in Oregon",
    "intro": "Oregon companies with substantial commercial receivables may have financing needs that exceed existing credit availability. We advise middle-market businesses on structuring receivables-backed facilities for ongoing operations, expansion, and changes in capital requirements.",
    "cta": "Discuss Your Financing Requirements"
  },
  "profile": {
    "title": "Oregon Accounts Receivable Financing Parameters",
    "intro": "Facility terms depend on the size and composition of the receivables portfolio, the proposed use of proceeds, and the company's existing debt arrangements.",
    "columnLabel": "Typical Considerations",
    "rows": [
      {
        "label": "Advance Rate",
        "value": "Up to 85%–90% of eligible receivables"
      },
      {
        "label": "Facility Size",
        "value": "$3MM to $75MM+"
      },
      {
        "label": "Eligible Receivables",
        "value": "Based on aging, obligor quality, concentration, and collectability"
      },
      {
        "label": "Borrowing Capacity",
        "value": "Determined by eligible receivables, advance rates, concentration limits, and reserves"
      },
      {
        "label": "Pricing",
        "value": "Based on collateral quality, structure, risk, and facility requirements"
      },
      {
        "label": "Facility Structure",
        "value": "Revolving receivables-based facilities for ongoing liquidity"
      },
      {
        "label": "Strategic Uses",
        "value": "Working capital, expansion, acquisitions, refinancing, and facility replacement"
      }
    ]
  },
  "review": {
    "title": "How We Evaluate the Receivables Base",
    "intro": "Our review examines invoice-level risks, including overdue balances, customer disputes, contractual restrictions, and exposure to individual account debtors. These findings help establish which receivables may qualify under a proposed facility.",
    "factors": [
      "Invoice Aging",
      "Customer Concentration",
      "Obligor Credit Quality",
      "Payment History",
      "Dilution",
      "Disputes and Offsets",
      "Contractual Restrictions",
      "Existing Liens",
      "Unbilled and Progress Receivables"
    ]
  },
  "triggers": {
    "title": "Financing Situations We Address",
    "intro": "A change in sales volume, customer mix, or debt arrangements can alter a company's need for capital. We help management teams assess receivables financing when existing credit arrangements no longer fit their business plans.",
    "items": [
      "Business Growth",
      "Major Contract Awards",
      "Restricted Bank Credit",
      "Existing Facility Refinancing",
      "Acquisition Transactions",
      "Geographic Expansion",
      "Seasonal Cash Flow Demands"
    ]
  },
  "industries": {
    "title": "Industries We Serve Across Oregon",
    "intro": "Oregon's economy includes semiconductor production, industrial manufacturing, agricultural processing, freight transportation, and wholesale distribution. Each sector presents different commercial billing practices, customer relationships, and collection patterns that can influence receivables financing.",
    "items": [
      {
        "icon": "factory",
        "title": "Manufacturing & Advanced Manufacturing",
        "description": "Manufacturers may invoice customers at different stages of production or following shipment. Order terms, delivery acceptance, and customer payment practices can affect the portion of outstanding receivables available for financing."
      },
      {
        "icon": "memory",
        "title": "Technology & Semiconductor Companies",
        "description": "Semiconductor and technology businesses may serve large corporate buyers through negotiated supply agreements. We consider contractual payment provisions, customer concentration, and any conditions that could delay invoice collection."
      },
      {
        "icon": "agriculture",
        "title": "Food Processing & Agribusiness",
        "description": "Processors and agricultural businesses may experience fluctuations in sales volumes throughout the year. The timing of customer orders, invoice settlement, and seasonal activity can influence financing requirements."
      },
      {
        "icon": "local_shipping",
        "title": "Transportation & Logistics",
        "description": "Freight and logistics operators may bill shippers, brokers, and other commercial customers under different payment arrangements. Invoice documentation, billing disputes, and payment delays are relevant when assessing receivables eligibility."
      },
      {
        "icon": "warehouse",
        "title": "Distribution & Wholesale",
        "description": "Wholesale distributors often extend payment terms to established business customers while maintaining supplier commitments. The relationship between outstanding invoices, customer concentration, and purchasing cycles can shape facility requirements."
      },
      {
        "icon": "business_center",
        "title": "Business & Commercial Services",
        "description": "Commercial service providers may bill through recurring agreements, milestone payments, or completed projects. Contract terms and customer acceptance requirements can determine when invoiced amounts become collectible."
      }
    ]
  },
  "locations": {
    "title": "Locations We Serve in Oregon",
    "intro": "We work with qualified middle-market companies across Oregon, including businesses in Portland, Salem, Eugene, Hillsboro, Beaverton, Bend, Medford, Gresham, Corvallis, and Springfield.",
    "cities": [
      "Portland",
      "Salem",
      "Eugene",
      "Hillsboro",
      "Beaverton",
      "Bend",
      "Medford",
      "Gresham",
      "Corvallis",
      "Springfield"
    ]
  },
  "comparison": {
    "title": "Receivable Financing vs. Factoring Companies in Oregon",
    "intro": "The distinction between receivables financing and factoring extends beyond how invoices generate liquidity. Facility control, collection responsibilities, pricing arrangements, and the treatment of outstanding invoices can differ. We help companies assess these differences against their existing credit arrangements and operating preferences.",
    "rightLabel": "Factoring",
    "rows": [
      [
        "Typically structured as a revolving credit facility secured by eligible receivables.",
        "Typically involves the purchase or assignment of individual receivables."
      ],
      [
        "Borrowing capacity can expand as eligible receivables increase, subject to advance rates and facility terms.",
        "Funding is generally tied to specific invoices submitted and approved for purchase."
      ],
      [
        "Pricing is generally determined by facility structure, collateral quality, risk profile, and financing requirements.",
        "Costs may include discount fees and other transaction-based charges."
      ],
      [
        "Companies generally maintain direct customer relationships and manage collections.",
        "Depending on the arrangement, the factoring company may participate in collections or customer communication."
      ],
      [
        "Often suited to middle-market companies seeking recurring liquidity through a structured working capital facility.",
        "Often suited to companies seeking invoice-level liquidity and transaction-oriented funding."
      ],
      [
        "Can support ongoing working capital, growth, acquisitions, refinancing, and other strategic capital requirements.",
        "Primarily focused on converting outstanding invoices into near-term liquidity."
      ]
    ]
  },
  "cta": {
    "title": "Discuss Your Oregon Receivables Financing Requirements",
    "body": "Contact EPOCH Financial to discuss your receivables financing requirements.",
    "button": "Contact Our Team"
  },
  "faqs": {
    "items": [
      {
        "question": "How is borrowing capacity determined from Oregon business receivables?",
        "answer": "Borrowing capacity is generally established through a borrowing base tied to eligible receivables. The assessment considers aging, obligor credit quality, concentration, dilution, payment performance, contractual terms, and applicable reserves. We evaluate these factors collectively to determine the available collateral base and appropriate financing structure."
      },
      {
        "question": "What factors affect the advance rate on eligible receivables?",
        "answer": "Advance rates are influenced by the quality and predictability of the receivables pool. Key considerations include customer credit strength, concentration exposure, aging, collection history, dilution, payment trends, and consistency of underlying sales. We assess these characteristics to determine an advance rate aligned with the collateral profile, with qualifying structures potentially reaching 85%–90%."
      },
      {
        "question": "How are customer concentration and credit quality evaluated?",
        "answer": "Customer concentration is evaluated based on the percentage of receivables attributable to individual obligors and the resulting dependency within the collateral pool. Credit quality may include payment history, financial strength, commercial standing, industry exposure, and collection performance. Our assessment considers how these factors may affect eligibility, concentration limits, reserves, and overall borrowing capacity."
      },
      {
        "question": "What types of commercial receivables can be included in a financing facility?",
        "answer": "Eligible receivables generally consist of enforceable commercial invoices owed by creditworthy business or institutional customers. Eligibility may depend on invoice aging, payment terms, obligor quality, concentration, dilution, contractual restrictions, and collection history. We review the receivables pool against the proposed facility criteria to determine which accounts can contribute to borrowing capacity."
      },
      {
        "question": "How can accounts receivable financing support Oregon companies with seasonal liquidity needs?",
        "answer": "A receivables-based facility can provide liquidity that adjusts with the eligible receivables base, helping companies manage increased sales, extended customer payment cycles, or seasonal working capital requirements. We structure facilities around the company’s receivables profile and liquidity requirements to provide greater flexibility during periods of increased operating demand."
      },
      {
        "question": "What financing structures are available for middle-market companies with substantial receivables?",
        "answer": "Middle-market companies may evaluate revolving receivables-based facilities structured around an established borrowing base and defined eligibility criteria. Structures can support ongoing working capital, refinancing, acquisition-related liquidity, growth initiatives, or replacement of an existing facility. We coordinate the financing process around facility size, advance rates, reserves, collateral quality, and the company’s broader capital objectives."
      }
    ]
  }
};

export default function OregonPage() {
  return <StateARFinancingPage data={data} />;
}
