"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Eye } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { StatsBar } from "@/components/site/StatsBar";
import { ProcessSection } from "@/components/site/ProcessSection";
import { MaterialsShowcase } from "@/components/site/MaterialsShowcase";
import { Testimonials } from "@/components/site/Testimonials";
import { RoomModal, type RoomData } from "@/components/site/RoomModal";

const rooms: RoomData[] = [
  {
    title: "Bedroom",
    img: "/assets/room-bedroom.jpg",
    description: "Designed as an acoustic sanctuary. Soft lime-plastered walls, concealed ambient lighting, and bespoke oak headboards foster deep restfulness.",
    features: ["Acoustic wall plastering", "Concealed dimmable cove lighting", "Custom oak bedstead & floating tables"],
  },
  {
    title: "Bathroom",
    img: "/assets/room-bathroom.jpg",
    description: "Monolithic travertine basins and brushed gunmetal fixtures evoke a spa-like stillness. Light filters softly through fluted glass partitions.",
    features: ["Honed travertine slab vanity", "Rainfall shower with ambient niche", "Bespoke fluted glass enclosure"],
  },
  {
    title: "Kitchen",
    img: "/assets/room-kitchen.jpg",
    description: "Seamless joinery conceals modern appliances behind hand-oiled oak panels. A raw granite island acts as the tactile heart of culinary life.",
    features: ["Concealed pantry joinery", "Leathered granite island counter", "Hand-brushed brass hardware"],
  },
  {
    title: "Living Hall",
    img: "/assets/room-hall.jpg",
    description: "Generous ceiling heights and open spatial geometry. Floor-to-ceiling Belgian linen drapes frame natural sunlight throughout the day.",
    features: ["Custom low-profile sectional", "Recessed architectural shelving", "Belgian linen light filtration"],
  },
  {
    title: "Balcony",
    img: "/assets/room-balcony.jpg",
    description: "An outdoor extension of the living room. Weathered teak decking, organic planter troughs, and ambient low-voltage garden lighting.",
    features: ["Ipe wood decking & seating", "Custom stone planter troughs", "Subtle evening mood lighting"],
  },
  {
    title: "Home Office",
    img: "/assets/room-office.jpg",
    description: "Built for focused clarity. Acoustic wool wall coverings, an integrated walnut writing desk, and anti-glare architectural task lighting.",
    features: ["Solid walnut executive desk", "Sound-dampening wool wall panels", "Hidden cable & tech integration"],
  },
  {
    title: "Dining",
    img: "/assets/room-dining.jpg",
    description: "A ceremonial setting for gathering. A 10-seater solid timber table anchored by a hand-blown ceramic pendant light.",
    features: ["10-seater solid oak dining table", "Sculptural ceramic pendant fixture", "Integrated climate wine credenza"],
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroDim = Math.min(scrollY / (typeof window !== "undefined" ? window.innerHeight : 800), 1) * 0.35;

  return (
    <div className="text-[#1A0F0A]">
      <Nav />

      {/* HERO BACKGROUND — fixed so website content slides up over it */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero-interior3.jpg"
          alt="A serene modern living room with warm interior design"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-black/30 transition-opacity duration-100"
          style={{ opacity: 0.25 + heroDim }}
        />
      </div>

      {/* HERO CONTENT SECTION */}
      <section className="relative z-10 h-screen flex flex-col justify-between pb-12 pt-28 md:pb-20 px-6 md:px-14 text-[#F8F7F4]">
        <div />

        <div className="max-w-3xl">
          <Reveal variant="fade-up" delay={100}>
            <span className="inline-block text-xs tracking-[0.3em] uppercase opacity-90 mb-6 font-medium">
              Interior Design Studio · Est. 2014
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={250}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] drop-shadow-sm">
              Spaces that hold<br />the quiet you crave.
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={400}>
            <p className="mt-6 max-w-xl text-base md:text-lg opacity-90 leading-relaxed drop-shadow-sm">
              We compose interiors with restraint and warmth — considered
              materials, honest light, and rooms that feel inevitable.
            </p>
          </Reveal>
        </div>

        {/* Minimal Scroll Down Indicator */}
        <Reveal variant="fade" delay={600} className="flex justify-between items-end">
          <div className="hidden sm:flex items-center gap-3 text-xs tracking-[0.25em] uppercase opacity-75 font-mono">
            <span>Scroll to explore</span>
            <div className="w-8 h-[1px] bg-white/40" />
          </div>
          <a
            href="#about"
            aria-label="Scroll down to about section"
            className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm grid place-items-center hover:bg-white hover:text-[#1A0F0A] transition animate-float-bounce"
          >
            <ArrowDown size={16} />
          </a>
        </Reveal>
      </section>

      {/* Content wrapper — sits above the fixed hero */}
      <div className="relative z-10 bg-[#F8F7F4] rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(26,15,10,0.2)]">
        {/* SECTION 2 — About */}
        <section id="about" className="px-6 md:px-14 pt-28 md:pt-40 pb-16 max-w-6xl mx-auto">
          <Reveal variant="fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
              — Philosophy
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Interior design is the practice of listening — to a room,
              to the light it holds, and to the people who will live inside it.
            </h2>
            <p className="mt-10 max-w-2xl text-lg text-[#1A0F0A]/75 leading-relaxed">
              Every project begins as a conversation. We shape space with quiet
              geometry and honest materials — travertine and oiled oak, brushed
              linen, warm plaster — creating interiors that age gracefully and
              feel unmistakably yours.
            </p>
          </Reveal>
        </section>

        {/* STATS BAR */}
        <StatsBar />

        {/* SECTION 3 — Signature Work */}
        <section id="spaces" className="px-6 md:px-14 py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <Reveal variant="fade-up">
                <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
                  — Signature Work
                </span>
                <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  Considered
                  <br />by nature,
                  <br />crafted by hand.
                </h2>
                <p className="mt-8 text-[#1A0F0A]/75 leading-relaxed max-w-md">
                  We design each home like an atelier piece — measured to the
                  millimetre, softened by texture, and finished with quiet
                  detail you feel more than see.
                </p>
                <Link
                  href="/inquiry"
                  className="mt-10 inline-flex items-center gap-2 text-sm border-b border-[#1A0F0A] pb-1 hover:gap-3 transition-all"
                >
                  Start a project <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            </div>

            <div className="flex flex-col items-end gap-6">
              <Reveal className="w-[75%]" variant="scale">
                <div
                  onClick={() => setSelectedRoom(rooms[0])}
                  className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-[#F1EFEA] cursor-pointer"
                >
                  <Image
                    src="/assets/feature-1.jpg"
                    alt="Warm minimal interior detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                    <span className="bg-[#F8F7F4]/90 backdrop-blur-md text-[#1A0F0A] text-xs font-mono px-4 py-2 rounded-full flex items-center gap-2">
                      <Eye size={14} /> Inspect Space
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className="w-full" variant="scale">
                <div
                  onClick={() => setSelectedRoom(rooms[3])}
                  className="group relative overflow-hidden rounded-[2rem] aspect-[5/4] bg-[#F1EFEA] cursor-pointer"
                >
                  <Image
                    src="/assets/feature-2.jpg"
                    alt="Cozy reading nook"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                    <span className="bg-[#F8F7F4]/90 backdrop-blur-md text-[#1A0F0A] text-xs font-mono px-4 py-2 rounded-full flex items-center gap-2">
                      <Eye size={14} /> Inspect Space
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION — Process / Methodology */}
        <ProcessSection />

        {/* SECTION — Materials & Tactile Architecture */}
        <MaterialsShowcase />

        {/* SECTION 4 — Auto-moving room marquee */}
        <section id="rooms" className="py-24 md:py-36">
          <div className="px-6 md:px-14 max-w-7xl mx-auto mb-12">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
                  — Rooms we shape
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  Every corner, considered.
                </h2>
              </div>
              <p className="max-w-md text-[#1A0F0A]/70">
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
                  onClick={() => setSelectedRoom(r)}
                  className="w-[75vw] sm:w-[46vw] md:w-[32vw] lg:w-[26vw] shrink-0 group/card cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-[#F1EFEA]">
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 75vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-all duration-300 grid place-items-center opacity-0 group-hover/card:opacity-100">
                      <span className="bg-[#F8F7F4]/90 backdrop-blur-md text-[#1A0F0A] text-xs font-mono px-4 py-2 rounded-full flex items-center gap-2">
                        <Eye size={14} /> View Details
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between px-1">
                    <span className="font-display text-xl group-hover/card:translate-x-1 transition-transform duration-300">
                      {r.title}
                    </span>
                    <span className="text-xs tracking-widest uppercase text-[#1A0F0A]/50">
                      0{(i % rooms.length) + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION — Testimonials / Praise */}
        <Testimonials />

        {/* INQUIRY */}
        <section id="inquiry" className="px-6 md:px-14 pb-28 md:pb-40 max-w-6xl mx-auto">
          <Reveal variant="scale">
            <div className="rounded-[2.5rem] bg-[#F1EFEA] p-8 md:p-14 border border-[#1A0F0A]/10">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
                    — Inquiry
                  </span>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                    Tell us about the space you'd like to shape.
                  </h2>
                  <p className="mt-6 text-[#1A0F0A]/70 leading-relaxed">
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

      {/* Interactive Room Modal Lightbox */}
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </div>
  );
}
