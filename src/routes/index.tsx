import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import bedroom from "@/assets/room-bedroom.jpg";
import bathroom from "@/assets/room-bathroom.jpg";
import kitchen from "@/assets/room-kitchen.jpg";
import hall from "@/assets/room-hall.jpg";
import balcony from "@/assets/room-balcony.jpg";
import office from "@/assets/room-office.jpg";
import dining from "@/assets/room-dining.jpg";
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Studio — Interior Design for Considered Living" },
      {
        name: "description",
        content:
          "Maison Studio designs warm, minimal interiors for homes and spaces — bedroom, bathroom, kitchen, hall, balcony and beyond.",
      },
      { property: "og:title", content: "Maison Studio — Interior Design" },
      {
        property: "og:description",
        content: "Warm, minimal interiors for homes and considered spaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const rooms = [
  { title: "Bedroom", img: bedroom },
  { title: "Bathroom", img: bathroom },
  { title: "Kitchen", img: kitchen },
  { title: "Living Hall", img: hall },
  { title: "Balcony", img: balcony },
  { title: "Home Office", img: office },
  { title: "Dining", img: dining },
];

function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero darkens as user scrolls the first viewport
  const heroDim = Math.min(scrollY / (typeof window !== "undefined" ? window.innerHeight : 800), 1) * 0.35;

  return (
    <div className="bg-[color:var(--ivory)] text-[color:var(--ink)]">
      <Nav />

      {/* HERO — fixed, next section slides up over it */}
      <section className="relative h-screen">
        <div className="fixed inset-0 -z-10">
          <img
            src={heroImg}
            alt="A serene modern living room with warm ivory tones"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-[color:var(--ink)] transition-[opacity] duration-100"
            style={{ opacity: heroDim }}
          />
        </div>

        <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-14 text-[color:var(--ivory)]">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.3em] uppercase opacity-80 mb-6">
              Interior Design Studio · Est. 2014
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Spaces that hold<br />the quiet you crave.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg opacity-90">
              We compose interiors with restraint and warmth — considered
              materials, honest light, and rooms that feel inevitable.
            </p>
          </div>
        </div>
      </section>

      {/* Content wrapper — sits above the fixed hero */}
      <div className="relative z-10 bg-[color:var(--ivory)] rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(26,15,10,0.15)]">
        {/* SECTION 2 — About */}
        <section id="about" className="px-6 md:px-14 py-28 md:py-40 max-w-6xl mx-auto">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--ink)]/60">
              — Philosophy
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Interior design is the practice of listening — to a room,
              to the light it holds, and to the people who will live inside it.
            </h2>
            <p className="mt-10 max-w-2xl text-lg text-[color:var(--ink)]/75 leading-relaxed">
              Every project begins as a conversation. We shape space with quiet
              geometry and honest materials — travertine and oiled oak, brushed
              linen, warm plaster — creating interiors that age gracefully and
              feel unmistakably yours.
            </p>
          </Reveal>
        </section>

        {/* SECTION 3 — Text left, two cards right (70%/100%) */}
        <section id="spaces" className="px-6 md:px-14 pb-28 md:pb-40 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <Reveal>
                <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--ink)]/60">
                  — Signature Work
                </span>
                <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  Considered
                  <br />by nature,
                  <br />crafted by hand.
                </h2>
                <p className="mt-8 text-[color:var(--ink)]/75 leading-relaxed max-w-md">
                  We design each home like an atelier piece — measured to the
                  millimetre, softened by texture, and finished with quiet
                  detail you feel more than see.
                </p>
                <a
                  href="/inquiry"
                  className="mt-10 inline-flex items-center gap-2 text-sm border-b border-[color:var(--ink)] pb-1 hover:gap-3 transition-all"
                >
                  Start a project <ArrowUpRight size={16} />
                </a>
              </Reveal>
            </div>

            <div className="flex flex-col items-end gap-6">
              <Reveal className="w-[70%]">
                <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-[color:var(--ivory-soft)]">
                  <img
                    src={feature1}
                    alt="Warm minimal interior detail"
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120} className="w-full">
                <div className="overflow-hidden rounded-[2rem] aspect-[5/4] bg-[color:var(--ivory-soft)]">
                  <img
                    src={feature2}
                    alt="Cozy reading nook"
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Auto-moving room marquee */}
        <section id="rooms" className="pb-28 md:pb-40">
          <div className="px-6 md:px-14 max-w-7xl mx-auto mb-12">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--ink)]/60">
                  — Rooms we shape
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  Every corner, considered.
                </h2>
              </div>
              <p className="max-w-md text-[color:var(--ink)]/70">
                From the intimacy of a bedroom to the openness of a balcony —
                we design each room to hold its own quiet moment.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <div className="marquee-track group-hover:marquee-paused flex gap-6 w-max">
              {[...rooms, ...rooms].map((r, i) => (
                <div
                  key={i}
                  className="w-[75vw] sm:w-[46vw] md:w-[32vw] lg:w-[26vw] shrink-0"
                >
                  <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-[color:var(--ivory-soft)]">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      width={1200}
                      height={1500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between px-1">
                    <span className="font-display text-xl">{r.title}</span>
                    <span className="text-xs tracking-widest uppercase text-[color:var(--ink)]/50">
                      0{(i % rooms.length) + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INQUIRY */}
        <section id="inquiry" className="px-6 md:px-14 pb-28 md:pb-40 max-w-6xl mx-auto">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[color:var(--ivory-soft)] p-8 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--ink)]/60">
                    — Inquiry
                  </span>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                    Tell us about the space you'd like to shape.
                  </h2>
                  <p className="mt-6 text-[color:var(--ink)]/70">
                    We take on a small number of projects each year so we can
                    give every home the attention it deserves.
                  </p>
                </div>
                <InquiryForm compact />
              </div>
            </div>
          </Reveal>
        </section>

        <Footer />
      </div>
    </div>
  );
}
