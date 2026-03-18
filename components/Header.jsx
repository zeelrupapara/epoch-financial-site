"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const businessLoans = [
  { label: "Accounts Receivable Financing", href: "/ar-financing" },
  { label: "Asset Based Lending", href: "/abl" },
  { label: "Commercial Real Estate Loans", href: "/commercial-real-estate" },
  { label: "Bridge Loans", href: "/bridge" },
];

const industries = [
  "Business Services",
  "Healthcare",
  "Technology & Software",
  "Consumer Products",
  "Industrials & Manufacturing",
  "Distribution & Logistics",
  "Financial Services",
  "Media & Telecommunications",
  "Energy & Infrastructure",
  "Education Services",
  "Government Contracting",
  "Construction",
];

const aboutLinks = [
  { label: "About EPOCH Financial", href: "#" },
  { label: "Our Approach", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({
    loans: false,
    industries: false,
    about: false,
  });

  const toggleMobile = (key) =>
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-light bg-white backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-[1600px] flex items-center justify-between px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/logo/epoch-logo@3x.webp"
              alt="EPOCH Financial"
              width={160}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-secondary hover:text-primary transition-colors text-[14px] font-medium rounded-lg hover:bg-bg-alt"
            >
              Home
            </Link>

            {/* Business Loans Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-secondary hover:text-primary transition-colors text-[14px] font-medium rounded-lg hover:bg-bg-alt flex items-center gap-1">
                Business Loans
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  expand_more
                </span>
              </button>
              <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-border-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                {businessLoans.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-[13px] text-body-gray hover:text-primary hover:bg-bg-alt transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-secondary hover:text-primary transition-colors text-[14px] font-medium rounded-lg hover:bg-bg-alt flex items-center gap-1">
                Industries
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  expand_more
                </span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white rounded-xl shadow-xl border border-border-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 z-50">
                <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                  {industries.map((name) => (
                    <Link
                      key={name}
                      href="#"
                      className="px-3 py-2 text-[13px] text-body-gray hover:text-primary hover:bg-bg-alt rounded-lg transition-colors font-medium"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="px-4 py-2 text-secondary hover:text-primary transition-colors text-[14px] font-medium rounded-lg hover:bg-bg-alt"
            >
              Articles
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-secondary hover:text-primary transition-colors text-[14px] font-medium rounded-lg hover:bg-bg-alt flex items-center gap-1">
                About
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  expand_more
                </span>
              </button>
              <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-border-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-[13px] text-body-gray hover:text-primary hover:bg-bg-alt transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Contact CTA */}
          <Link
            href="#"
            className="hidden lg:flex items-center justify-center rounded-lg px-5 py-2.5 bg-primary hover:bg-primary/90 transition-colors text-white text-[14px] font-semibold shadow-sm shrink-0"
          >
            Contact
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-bg-alt transition-colors"
          >
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: 24 }}>
              menu
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/assets/logo/epoch-logo@3x.webp"
              alt="EPOCH Financial"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-bg-alt transition-colors"
          >
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: 22 }}>
              close
            </span>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium text-secondary hover:text-primary hover:bg-bg-alt rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>home</span>
            Home
          </Link>

          {/* Business Loans */}
          <div>
            <button
              onClick={() => toggleMobile("loans")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-medium text-secondary hover:text-primary hover:bg-bg-alt rounded-lg transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>account_balance</span>
                Business Loans
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-200 ${mobileExpanded.loans ? "rotate-180" : ""}`}
                style={{ fontSize: 18 }}
              >
                expand_more
              </span>
            </button>
            {mobileExpanded.loans && (
              <div className="flex flex-col gap-0.5 ml-8 mt-1 border-l-2 border-primary/15 pl-3">
                {businessLoans.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-[13px] text-body-gray hover:text-primary hover:bg-bg-alt rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries */}
          <div>
            <button
              onClick={() => toggleMobile("industries")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-medium text-secondary hover:text-primary hover:bg-bg-alt rounded-lg transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>domain</span>
                Industries
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-200 ${mobileExpanded.industries ? "rotate-180" : ""}`}
                style={{ fontSize: 18 }}
              >
                expand_more
              </span>
            </button>
            {mobileExpanded.industries && (
              <div className="flex flex-col gap-0.5 ml-8 mt-1 border-l-2 border-primary/15 pl-3">
                {industries.map((name) => (
                  <Link
                    key={name}
                    href="#"
                    className="px-3 py-2 text-[13px] text-body-gray hover:text-primary hover:bg-bg-alt rounded-lg transition-colors font-medium"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium text-secondary hover:text-primary hover:bg-bg-alt rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>article</span>
            Articles
          </Link>

          {/* About */}
          <div>
            <button
              onClick={() => toggleMobile("about")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-medium text-secondary hover:text-primary hover:bg-bg-alt rounded-lg transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>info</span>
                About
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-200 ${mobileExpanded.about ? "rotate-180" : ""}`}
                style={{ fontSize: 18 }}
              >
                expand_more
              </span>
            </button>
            {mobileExpanded.about && (
              <div className="flex flex-col gap-0.5 ml-8 mt-1 border-l-2 border-primary/15 pl-3">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-[13px] text-body-gray hover:text-primary hover:bg-bg-alt rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="px-4 py-4 border-t border-border-light">
          <Link
            href="#"
            className="flex items-center justify-center gap-2 w-full rounded-lg px-5 py-3 bg-primary hover:bg-primary/90 transition-colors text-white text-[14px] font-semibold shadow-sm"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
            Contact Us
          </Link>
          <div className="flex items-center gap-2 mt-3 px-1">
            <span className="material-symbols-outlined text-primary/60" style={{ fontSize: 16 }}>phone</span>
            <a
              href="tel:+18884000170"
              className="text-[12px] text-body-gray hover:text-primary transition-colors"
            >
              888-400-0170
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
