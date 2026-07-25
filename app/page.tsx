"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";

const rooms = [
  { title: "Bedroom", img: "/assets/room-bedroom.jpg" },
  { title: "Bathroom", img: "/assets/room-bathroom.jpg" },
  { title: "Kitchen", img: "/assets/room-kitchen.jpg" },
  { title: "Living Hall", img: "/assets/room-hall.jpg" },
  { title: "Balcony", img: "/assets/room-balcony.jpg" },
  { title: "Home Office", img: "/assets/room-office.jpg" },
  { title: "Dining", img: "/assets/room-dining.jpg" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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
      <section className="relative z-10 h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-14 text-[#F8F7F4]">
        <div className="max-w-3xl">
          <span className="inline-block text-xs tracking-[0.3em] uppercase opacity-90 mb-6 font-medium">
            Interior Design Studio · Est. 2014
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] drop-shadow-sm">
            Spaces that hold<br />the quiet you crave.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg opacity-90 leading-relaxed drop-shadow-sm">
            We compose interiors with restraint and warmth — considered
            materials, honest light, and rooms that feel inevitable.
          </p>
        </div>
      </section>

      {/* Content wrapper — sits above the fixed hero */}
      <div className="relative z-10 bg-[#F8F7F4] rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(26,15,10,0.2)]">
        {/* SECTION 2 — About */}
        <section id="about" className="px-6 md:px-14 py-28 md:py-40 max-w-6xl mx-auto">
          <Reveal>
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

        {/* SECTION 3 — Signature Work */}
        <section id="spaces" className="px-6 md:px-14 pb-28 md:pb-40 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <Reveal>
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
              <Reveal className="w-[70%]">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-[#F1EFEA]">
                  <Image
                    src="/assets/feature-1.jpg"
                    alt="Warm minimal interior detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120} className="w-full">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[5/4] bg-[#F1EFEA]">
                  <Image
                    src="/assets/feature-2.jpg"
                    alt="Cozy reading nook"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
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
                  className="w-[75vw] sm:w-[46vw] md:w-[32vw] lg:w-[26vw] shrink-0"
                >
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-[#F1EFEA]">
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 75vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between px-1">
                    <span className="font-display text-xl">{r.title}</span>
                    <span className="text-xs tracking-widest uppercase text-[#1A0F0A]/50">
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
            <div className="rounded-[2.5rem] bg-[#F1EFEA] p-8 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
                    — Inquiry
                  </span>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                    Tell us about the space you'd like to shape.
                  </h2>
                  <p className="mt-6 text-[#1A0F0A]/70">
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
