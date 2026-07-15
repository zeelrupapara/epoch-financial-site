"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/submitContactForm";

// Compact lead form for service-area page heroes. Same fields as the AR
// financing form, tightened spacing so it fits a hero side card.
export default function ServiceAreaLeadForm({ state }) {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    estimatedVolume: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await submitContactForm(
        { ...form, serviceArea: state },
        {
          subject: `New ${state} financing inquiry — EPOCH Financial`,
          replyTo: form.email,
        }
      );
      setSubmitted(true);
    } catch (err) {
      setError(
        "Sorry, your message couldn't be sent. Please try again or email reachus@epochfinancial.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    "rounded-lg border border-border-light px-3.5 py-2.5 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all bg-white";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>check_circle</span>
        </div>
        <h3 className="text-secondary text-xl font-bold">Thank You</h3>
        <p className="text-body-gray text-sm max-w-xs">
          Your inquiry has been received. A member of our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-semibold text-secondary">Company Name <span className="text-primary">*</span></label>
        <input type="text" name="companyName" required value={form.companyName} onChange={handleChange} placeholder="Your company name" className={inputCls} />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-semibold text-secondary">Contact Name <span className="text-primary">*</span></label>
        <input type="text" name="contactName" required value={form.contactName} onChange={handleChange} placeholder="Your full name" className={inputCls} />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-semibold text-secondary">Email Address <span className="text-primary">*</span></label>
        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputCls} />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-semibold text-secondary">Phone Number</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputCls} />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label className="text-[13px] font-semibold text-secondary">Estimated Annual Receivable Volume</label>
        <select name="estimatedVolume" value={form.estimatedVolume} onChange={handleChange} className={inputCls}>
          <option value="">Select estimated volume</option>
          <option value="15-25M">$15M – $25M</option>
          <option value="25-50M">$25M – $50M</option>
          <option value="50-100M">$50M – $100M</option>
          <option value="100M+">$100M+</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label className="text-[13px] font-semibold text-secondary">Additional Information</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Describe your receivable portfolio, industry, and working capital requirements..." className={inputCls + " resize-none"} />
      </div>
      <div className="sm:col-span-2">
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-primary"
        >
          {submitting ? "Sending…" : "Submit Financing Inquiry"}
        </button>
      </div>
    </form>
  );
}
