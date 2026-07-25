import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";

export const metadata: Metadata = {
  title: "Inquiry — Maison Studio",
  description: "Start a project with Maison Studio. Tell us about your home, timeline and vision.",
  openGraph: {
    title: "Inquiry — Maison Studio",
    description: "Start an interior design project with Maison Studio.",
    type: "website",
  },
};

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A0F0A]">
      <Nav />
      <main className="pt-40 pb-24 px-6 md:px-14 max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
          — Inquiry
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02]">
          Let's shape<br />your space.
        </h1>
        <p className="mt-8 max-w-xl text-[#1A0F0A]/75 text-lg">
          Share a few details and we'll be in touch within two business days
          to schedule an introductory conversation.
        </p>

        <div className="mt-14">
          <InquiryForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
