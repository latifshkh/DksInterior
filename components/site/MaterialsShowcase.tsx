"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Sparkles, Layers } from "lucide-react";

const materials = [
  {
    id: "stone",
    name: "Brushed Travertine",
    category: "Natural Stone",
    origin: "Tuscany, Italy",
    description: "Honed porous stone with soft warm ivory veining. Brings architectural weight without visual stiffness.",
    img: "/assets/feature-1.jpg",
    tactileNote: "Velvety matte finish, naturally cool to touch",
  },
  {
    id: "oak",
    name: "European Oiled Oak",
    category: "Timber & Joinery",
    origin: "Bavaria, Germany",
    description: "Sustainably harvested solid oak finished with organic beeswax. Ages into a rich honey patina over decades.",
    img: "/assets/feature-2.jpg",
    tactileNote: "Deep wood grain, warm tactile touch",
  },
  {
    id: "plaster",
    name: "Warm Lime Plaster",
    category: "Wall Finishes",
    origin: "Marrakech, Morocco",
    description: "Hand-troweled mineral plaster that diffuses daylight softly across walls, eliminating harsh glares.",
    img: "/assets/room-bedroom.jpg",
    tactileNote: "Soft chalky texture, subtle organic variation",
  },
  {
    id: "linen",
    name: "Raw Belgian Linen",
    category: "Soft Textiles",
    origin: "Flanders, Belgium",
    description: "Heavy weight unbleached flax linen used for custom drapery, acoustic wall panels, and deep sofa upholstery.",
    img: "/assets/room-dining.jpg",
    tactileNote: "Organic texture, gentle acoustic absorption",
  },
];

export function MaterialsShowcase() {
  const [selectedId, setSelectedId] = useState(materials[0].id);
  const activeMaterial = materials.find((m) => m.id === selectedId) || materials[0];

  return (
    <section id="materials" className="px-6 md:px-14 py-24 md:py-36 max-w-7xl mx-auto border-t border-[#1A0F0A]/10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left header & tabs */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
              — Tactile Architecture
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Materials that age with dignity.
            </h2>
            <p className="mt-6 text-[#1A0F0A]/75 text-base leading-relaxed">
              We never use synthetic substitutes. Every room is composed from authentic raw elements that develop a soft, living patina over time.
            </p>
          </Reveal>

          {/* Interactive Material Tabs */}
          <div className="mt-10 space-y-3">
            {materials.map((m) => {
              const isActive = m.id === selectedId;
              return (
                <Reveal key={m.id} variant="fade-up">
                  <button
                    onClick={() => setSelectedId(m.id)}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? "bg-[#1A0F0A] text-[#F8F7F4] border-[#1A0F0A] shadow-sm translate-x-1"
                        : "bg-[#F1EFEA]/40 hover:bg-[#F1EFEA] text-[#1A0F0A] border-transparent"
                    }`}
                  >
                    <div>
                      <span className="font-display text-lg block">{m.name}</span>
                      <span className={`text-xs uppercase tracking-wider ${isActive ? "text-[#F8F7F4]/70" : "text-[#1A0F0A]/50"}`}>
                        {m.category}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full ${
                        isActive ? "bg-[#F8F7F4]/15 text-[#F8F7F4]" : "bg-[#1A0F0A]/5 text-[#1A0F0A]/60"
                      }`}
                    >
                      {m.origin}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Right material preview showcase */}
        <div className="lg:col-span-7">
          <Reveal variant="scale" key={activeMaterial.id}>
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#F1EFEA] border border-[#1A0F0A]/10 p-6 md:p-8">
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-black/5 shadow-inner mb-6">
                <Image
                  src={activeMaterial.img}
                  alt={activeMaterial.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white text-xs">
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    {activeMaterial.origin}
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    {activeMaterial.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl md:text-3xl text-[#1A0F0A]">
                  {activeMaterial.name}
                </h3>
                <p className="text-[#1A0F0A]/75 text-sm md:text-base leading-relaxed">
                  {activeMaterial.description}
                </p>
                <div className="pt-4 border-t border-[#1A0F0A]/10 flex items-center gap-2 text-xs font-medium text-[#1A0F0A]/70">
                  <Sparkles size={14} className="text-[#1A0F0A]" />
                  <span>Tactile Note: {activeMaterial.tactileNote}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
