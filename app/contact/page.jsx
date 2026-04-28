"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white pt-8 2xl:px-6 lg:px-16 md:px-12 px-4 mb-8 xl:mb-16">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="relative flex min-h-[340px] flex-col justify-center rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-20"
            style={{
              backgroundImage:
                'linear-gradient(rgb(17 55 95 / 55%), rgb(17 55 95 / 82%)), url("/assets/images/contact-hero.jpg")',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>mail</span>
                Get In Touch
              </span>
              <h1 className="text-white xl:text-[48px] lg:text-[38px] text-[28px] font-extrabold leading-[1.12] tracking-tight">
                Contact EPOCH Financial
              </h1>
              <p className="text-white/80 md:text-base text-sm max-w-xl leading-relaxed">
                Send us a message and we'll get back to you. EPOCH Financial supports middle market companies up to $1B in revenues and focuses on businesses with at least $10 million in annual sales that need dependable working capital or growth financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white 2xl:py-20 xl:py-16 md:py-14 py-12 2xl:px-6 lg:px-16 md:px-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 xl:gap-20">

            {/* Left: contact info */}
            <FadeUp>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-3">Contact Us</p>
                  <h2 className="text-secondary 2xl:text-[30px] lg:text-[24px] text-[22px] font-bold leading-tight mb-4">
                    Let's Discuss Your Financing Needs
                  </h2>
                  <p className="text-body-gray text-sm leading-relaxed">
                    Whether you're exploring a new credit facility, looking to restructure existing capital, or evaluating financing options — our team is ready to help.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: "mail",
                      label: "Email",
                      value: "info@epochfinancial.com",
                    },
                    {
                      icon: "phone",
                      label: "Phone",
                      value: "+1 (800) 000-0000",
                    },
                    {
                      icon: "location_on",
                      label: "Office",
                      value: "Atlanta, Georgia, USA",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-body-gray/60 uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="text-secondary font-semibold text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-primary/5 border border-primary/15 p-6">
                  <p className="text-secondary font-bold text-sm mb-2">Financing Range</p>
                  <p className="text-body-gray text-sm leading-relaxed">
                    We structure credit facilities from <span className="text-primary font-semibold">$3M+</span> for middle market companies with at least $15M+ in annual revenues.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right: form */}
            <FadeUp delay={80}>
              <div className="bg-bg-alt rounded-2xl border border-border-light p-8 xl:p-10">
                <h3 className="text-secondary font-bold text-[20px] mb-1">Send Us a Message</h3>
                <p className="text-body-gray text-sm mb-8">We'll get back to you within 1 business day.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: 36 }}>check_circle</span>
                    </div>
                    <h3 className="text-secondary text-2xl font-bold">Thank You</h3>
                    <p className="text-body-gray max-w-md">
                      Your message has been received. A member of our team will be in touch shortly to discuss your financing opportunity.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-secondary">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-secondary">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-secondary">
                        Company Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-secondary">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-secondary">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Your business address"
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-secondary">Service Type</label>
                      <select
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="Accounts Receivable Financing">Accounts Receivable Financing</option>
                        <option value="Asset-Based Lending">Asset-Based Lending</option>
                        <option value="Bridge Financing">Bridge Financing</option>
                        <option value="Working Capital">Working Capital</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-sm font-semibold text-secondary">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your financing needs, company overview, and any relevant details..."
                        className="rounded-xl border border-border-light bg-white px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
                      >
                        Send Message
                        <span className="material-symbols-outlined ml-2 align-middle" style={{ fontSize: 18 }}>send</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeUp>

          </div>
        </div>
      </section>
    </>
  );
}
