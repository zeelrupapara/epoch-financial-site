"use client";

import { useState } from "react";

export default function BridgeContactForm() {
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 36 }}>check_circle</span>
        </div>
        <h3 className="text-secondary text-2xl font-bold">Thank You</h3>
        <p className="text-body-gray max-w-md">
          Your inquiry has been received. A member of our team will be in touch to discuss your bridge financing opportunity.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-secondary">
          Name: <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-secondary">
          Email: <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-secondary">
          Company Name: <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="companyName"
          required
          value={form.companyName}
          onChange={handleChange}
          placeholder="Your company name"
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-secondary">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-secondary">Address:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Your business address"
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>

      {/* Service Type */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-secondary">Service Type:</label>
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all bg-white"
        >
          <option value="">Select a service</option>
          <option value="Acquisition Financing">Acquisition Financing</option>
          <option value="Refinancing">Refinancing</option>
          <option value="Recapitalization">Recapitalization</option>
          <option value="Commercial Real Estate Bridge">Commercial Real Estate Bridge</option>
          <option value="Working Capital Bridge">Working Capital Bridge</option>
          <option value="Partner Buyout">Partner Buyout</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-sm font-semibold text-secondary">Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your transaction, financing needs, and timeline..."
          className="rounded-xl border border-border-light px-4 py-3 text-sm text-secondary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#0b8fcc]"
        >
          Request A Quote
        </button>
      </div>
    </form>
  );
}
