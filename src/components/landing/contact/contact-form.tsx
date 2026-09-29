"use client";

import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const SUBJECTS = [
  "Enrolment Enquiry",
  "School Visit",
  "Fees & Payments",
  "Academic Support",
  "General Enquiry",
];

const labelCls =
  "mb-1.5 block font-body text-[0.8125rem] font-semibold text-text-muted";

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof typeof INITIAL_FORM) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to your API route / email service here
    setSent(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSent(false), 4000);
  };

  if (sent) {
    return (
      <div className="py-12 px-6 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M6 16l7 7L26 9"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h4 className="mb-2 font-display text-[1.3rem] text-primary">
          Message Sent!
        </h4>
        <p className="font-body text-[0.9375rem] text-text-muted">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelCls}>
            Parent/Guardian Name *
          </label>
          <input
            id="contact-name"
            className="form-input"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelCls}>
            Email Address *
          </label>
          <input
            id="contact-email"
            className="form-input"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelCls}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            className="form-input"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+233 000 000 000"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelCls}>
            Subject *
          </label>
          <select
            id="contact-subject"
            className="form-input"
            required
            value={form.subject}
            onChange={update("subject")}
          >
            <option value="">Select a subject</option>
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelCls}>
          Message *
        </label>
        <textarea
          id="contact-message"
          className="form-input min-h-30 resize-y"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="btn-primary mt-1 flex w-full cursor-pointer items-center justify-center gap-2 py-3.75 text-base"
      >
        Send Message
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M15.75 2.25L8.25 9.75M15.75 2.25L10.5 15.75l-2.25-6-6-2.25 13.5-5.25z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
