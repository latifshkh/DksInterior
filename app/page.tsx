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
    <div className="text-[#141210] bg-[#FAF8F5]">
      <Nav />

      {/* HERO BACKGROUND — fixed so website content slides up over it */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero-interior4.jpg"
          alt="A serene modern living room with warm interior design"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-black/35 transition-opacity duration-100"
          style={{ opacity: 0.28 + heroDim }}
        />
      </div>

      {/* HERO CONTENT SECTION */}
      <section className="relative z-10 min-h-[100dvh] flex flex-col justify-between pb-10 pt-28 sm:pb-16 px-5 sm:px-8 md:px-14 text-[#FAF8F5]">
        <div />

        <div className="max-w-3xl my-auto">
          <Reveal variant="fade-up" delay={80}>
            <span className="inline-block text-[11px] sm:text-xs tracking-[0.3em] uppercase opacity-90 mb-4 sm:mb-6 font-mono font-medium text-[#FAF8F5]/90">
              Interior Design Studio · Est. 2014
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] drop-shadow-sm">
              Spaces that hold<br />the quiet you crave.
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={350}>
            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg opacity-90 leading-relaxed drop-shadow-sm font-sans">
              We compose interiors with restraint and warmth — considered
              materials, honest light, and rooms that feel inevitable.
            </p>
          </Reveal>
        </div>

        {/* Minimal Scroll Down Indicator */}
        <Reveal variant="fade" delay={500} className="flex justify-between items-end pt-6">
          <div className="hidden sm:flex items-center gap-3 text-xs tracking-[0.25em] uppercase opacity-75 font-mono">
            <span>Scroll to explore</span>
            <div className="w-8 h-[1px] bg-white/40" />
          </div>
          <a
            href="#about"
            aria-label="Scroll down to about section"
            className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm grid place-items-center hover:bg-white hover:text-[#141210] transition animate-float-bounce ml-auto sm:ml-0"
          >
            <ArrowDown size={16} />
          </a>
        </Reveal>
      </section>

      {/* Content wrapper — sits above the fixed hero */}
      <div className="relative z-10 bg-[#FAF8F5] rounded-t-[2.2rem] sm:rounded-t-[3rem] shadow-[0_-20px_60px_rgba(20,18,16,0.2)]">
        {/* SECTION 2 — About */}
        <section id="about" className="px-5 sm:px-8 md:px-14 pt-20 sm:pt-36 pb-12 max-w-6xl mx-auto">
          <Reveal variant="fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-3">
              — Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl leading-[1.08] text-[#141210]">
              Interior design is the practice of listening — to a room,
              to the light it holds, and to the people who will live inside it.
            </h2>
            <p className="mt-6 sm:mt-10 max-w-2xl text-base sm:text-lg text-[#141210]/80 leading-relaxed font-sans">
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
        <section id="spaces" className="px-5 sm:px-8 md:px-14 py-16 sm:py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <Reveal variant="fade-up">
                <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-3">
                  — Signature Work
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#141210]">
                  Considered
                  <br />by nature,
                  <br />crafted by hand.
                </h2>
                <p className="mt-6 sm:mt-8 text-[#141210]/80 leading-relaxed max-w-md text-sm sm:text-base">
                  We design each home like an atelier piece — measured to the
                  millimetre, softened by texture, and finished with quiet
                  detail you feel more than see.
                </p>
                <Link
                  href="/inquiry"
                  className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-[#141210] pb-1 hover:text-[#8A7664] hover:border-[#8A7664] transition-all font-mono"
                >
                  Start a project <ArrowUpRight size={15} />
                </Link>
              </Reveal>
            </div>

            <div className="flex flex-col items-end gap-5 sm:gap-6">
              <Reveal className="w-full sm:w-[78%]" variant="scale">
                <div
                  onClick={() => setSelectedRoom(rooms[0])}
                  className="group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] aspect-[4/5] bg-[#F2EEE9] cursor-pointer shadow-sm"
                >
                  <Image
                    src="/assets/feature-1.jpg"
                    alt="Warm minimal interior detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                    <span className="bg-[#FAF8F5]/90 backdrop-blur-md text-[#141210] text-xs font-mono px-4 py-2 rounded-full flex items-center gap-2">
                      <Eye size={14} /> Inspect Space
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100} className="w-full" variant="scale">
                <div
                  onClick={() => setSelectedRoom(rooms[3])}
                  className="group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] aspect-[5/4] bg-[#F2EEE9] cursor-pointer shadow-sm"
                >
                  <Image
                    src="/assets/feature-2.jpg"
                    alt="Cozy reading nook"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                    <span className="bg-[#FAF8F5]/90 backdrop-blur-md text-[#141210] text-xs font-mono px-4 py-2 rounded-full flex items-center gap-2">
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
        <section id="rooms" className="py-16 sm:py-28">
          <div className="px-5 sm:px-8 md:px-14 max-w-7xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-2">
                  — Rooms we shape
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#141210]">
                  Every corner, considered.
                </h2>
              </div>
              <p className="max-w-md text-[#141210]/75 text-xs sm:text-base">
                From the intimacy of a bedroom to the openness of a balcony —
                we design each room to hold its own quiet moment.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <div className="marquee-track group-hover:marquee-paused flex gap-4 sm:gap-6 w-max px-3">
              {[...rooms, ...rooms].map((r, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedRoom(r)}
                  className="w-[82vw] sm:w-[48vw] md:w-[32vw] lg:w-[26vw] shrink-0 group/card cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] aspect-[4/5] bg-[#F2EEE9]">
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-all duration-300 grid place-items-center opacity-0 group-hover/card:opacity-100">
                      <span className="bg-[#FAF8F5]/90 backdrop-blur-md text-[#141210] text-xs font-mono px-4 py-2 rounded-full flex items-center gap-2">
                        <Eye size={14} /> View Details
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center justify-between px-1">
                    <span className="font-display text-lg sm:text-xl text-[#141210] group-hover/card:translate-x-1 transition-transform duration-300">
                      {r.title}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A7664]">
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
        <section id="inquiry" className="px-5 sm:px-8 md:px-14 pb-20 sm:pb-36 max-w-6xl mx-auto">
          <Reveal variant="scale">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#F2EEE9] p-6 sm:p-12 md:p-14 border border-[#141210]/10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 md:gap-14">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-2">
                    — Inquiry
                  </span>
                  <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] text-[#141210]">
                    Tell us about the space you'd like to shape.
                  </h2>
                  <p className="mt-4 sm:mt-6 text-[#141210]/80 text-xs sm:text-base leading-relaxed">
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
