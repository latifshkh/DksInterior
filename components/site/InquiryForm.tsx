"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

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
      <Field label="Project type" name="type" placeholder="Residential, Villa, Boutique…" />
      <div className={compact ? "" : "md:col-span-2"}>
        <Field label="Tell us about your space" name="message" textarea />
      </div>
      <div className={compact ? "" : "md:col-span-2 flex justify-end"}>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#141210] text-[#FAF8F5] px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-[#8A7664] disabled:opacity-60 transition cursor-pointer"
        >
          {loading ? "Sending…" : "Send inquiry"} <ArrowUpRight size={14} />
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
    "w-full bg-[#FAF8F5]/80 border border-[#141210]/15 rounded-2xl px-4 py-3 text-[#141210] text-sm placeholder:text-[#141210]/40 focus:outline-none focus:border-[#141210] focus:ring-1 focus:ring-[#141210] transition";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[#8A7664] font-mono mb-2">
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
