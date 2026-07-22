import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquiry — Maison Studio" },
      {
        name: "description",
        content:
          "Start a project with Maison Studio. Tell us about your home, timeline and vision.",
      },
      { property: "og:title", content: "Inquiry — Maison Studio" },
      {
        property: "og:description",
        content: "Start an interior design project with Maison Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InquiryPage,
});

function InquiryPage() {
  return (
    <div className="min-h-screen bg-[color:var(--ivory)] text-[color:var(--ink)]">
      <Nav />
      <main className="pt-40 pb-24 px-6 md:px-14 max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--ink)]/60">
          — Inquiry
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02]">
          Let's shape<br />your space.
        </h1>
        <p className="mt-8 max-w-xl text-[color:var(--ink)]/75 text-lg">
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
