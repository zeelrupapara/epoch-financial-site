"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const businessLoans = [
  { label: "Accounts Receivable Financing", href: "/ar-financing" },
  { label: "Asset Based Lending", href: "/abl" },
  { label: "Bridge Loans", href: "/bridge" },
];

const industriesCol1 = [
  { label: "Business Services", href: "/business-services" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Technology & Software", href: "/technology" },
  { label: "Consumer Products", href: "/consumer-packaged" },
  { label: "Industrials & Manufacturing", href: "/manufacturing" },
  { label: "Distribution & Logistics", href: "/distribution-logistics" },
];

const industriesCol2 = [
  { label: "Financial Services", href: "/financial-services" },
  { label: "Media & Telecommunications", href: "/media-telecommunications" },
  { label: "Oil & Gas", href: "/oil-gas" },
  { label: "Education Services", href: "/education-services" },
  { label: "Government Contracting", href: "/government-contracting" },
  { label: "Construction", href: "/construction" },
];

function ScrollLink({ href, className, children }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => router.push(href), 300);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a2540]">
      <div className="mx-auto max-w-[1600px] px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6 md:gap-y-10 mb-12">
          {/* Col 1: Logo + Tagline */}
          <div className="flex flex-col gap-4">
            <ScrollLink href="/" className="flex items-center">
              <img
                src="/assets/logo/epoch-logo-white@3x.webp"
                alt="EPOCH Financial"
                width={140}
                height={48}
                className="h-12 w-auto"
              />
            </ScrollLink>
            <p className="text-slate-500 text-[13px] leading-relaxed">
              Specialty finance firm dedicated to receivable-anchored credit strategies.
            </p>
          </div>

          {/* Col 2: Business Loans */}
          <div>
            <h4 className="font-semibold md:text-lg text-base mb-4 text-slate-400 uppercase tracking-widest">
              Business Loans
            </h4>
            <ul className="flex flex-col gap-2.5">
              {businessLoans.map((item) => (
                <li key={item.href}>
                  <ScrollLink
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-[13px]"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries A-F */}
          <div>
            <h4 className="font-semibold md:text-lg text-base mb-4 text-slate-400 uppercase tracking-widest">
              Industries
            </h4>
            <ul className="flex flex-col gap-2.5">
              {industriesCol1.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-[13px]"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industries G-Z */}
          <div>
            <h4 className="font-semibold md:text-lg text-base mb-4 text-slate-400 uppercase tracking-widest sm:block hidden">
              &nbsp;
            </h4>
            <ul className="flex flex-col gap-2.5">
              {industriesCol2.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-[13px]"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-semibold md:text-lg text-base mb-4 text-slate-400 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary/70 shrink-0 mt-0.5" style={{ fontSize: 16 }}>
                  location_on
                </span>
                <span>
                  3350 Riverwood Parkway<br />
                  Suite 1900<br />
                  Atlanta, GA 30339
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary/70 shrink-0" style={{ fontSize: 16 }}>
                  phone
                </span>
                <a href="tel:+18884000170" className="hover:text-white transition-colors">
                  888-400-0170
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary/70 shrink-0" style={{ fontSize: 16 }}>
                  mail
                </span>
                <a href="mailto:tatenhan@epochfinancial.com" className="hover:text-white transition-colors">
                  tatenhan@epochfinancial.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-slate-600">
          <p>&copy; 2026 EPOCH Financial. All Rights Reserved.</p>
          <ScrollLink href="/privacy-policy" className="hover:text-slate-400 transition-colors">
            Privacy Policy
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
}
