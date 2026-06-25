import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Explore EPOCH Financial's commercial finance solutions.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/financial-services/accounts-receivable-financing", label: "Accounts Receivable Financing" },
  { href: "/financial-services/asset-based-lending", label: "Asset-Based Lending" },
  { href: "/financial-services/strategic-capital-solutions", label: "Strategic Capital Solutions" },
  { href: "/financial-services/bridge-financing", label: "Bridge Financing" },
  { href: "/articles", label: "Articles" },
];

export default function NotFound() {
  return (
    <section className="bg-white 2xl:px-6 lg:px-16 md:px-12 px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative flex flex-col items-center text-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-10 md:p-16 lg:p-20"
          style={{
            backgroundImage:
              'linear-gradient(rgb(11 35 65 / 88%), rgb(11 35 65 / 94%)), url("/assets/images/mainhero.png")',
          }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
            Error 404
          </span>
          <h1 className="text-white mt-5 xl:text-[44px] lg:text-[36px] text-[28px] font-extrabold leading-[1.15] tracking-tight">
            This page could not be found
          </h1>
          <p className="text-white/80 mt-4 md:text-base text-sm max-w-xl leading-relaxed">
            The page you were looking for may have moved or no longer exists.
            Use the links below to find what you need, or return to the homepage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border-2 border-white/40 px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="mt-8 rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
