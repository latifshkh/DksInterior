"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" />
      <Field label="Project type" name="type" placeholder="Residential, Commercial…" />
      <div className={compact ? "" : "md:col-span-2"}>
        <Field label="Tell us about your space" name="message" textarea />
      </div>
      <div className={compact ? "" : "md:col-span-2 flex justify-end"}>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-full bg-[#1A0F0A] text-[#F8F7F4] px-6 py-3 text-sm hover:opacity-90 disabled:opacity-60 transition cursor-pointer"
        >
          {loading ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border border-[#1A0F0A]/15 rounded-2xl px-4 py-3 text-[#1A0F0A] placeholder:text-[#1A0F0A]/40 focus:outline-none focus:border-[#1A0F0A] transition";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[#1A0F0A]/60 mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
