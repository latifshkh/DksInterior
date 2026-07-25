"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";

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
    <section id="materials" className="px-5 sm:px-8 md:px-14 py-16 sm:py-28 max-w-7xl mx-auto border-t border-[#141210]/10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left header & tabs */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-2">
              — Tactile Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#141210]">
              Materials that age with dignity.
            </h2>
            <p className="mt-4 sm:mt-6 text-[#141210]/80 text-sm sm:text-base leading-relaxed">
              We never use synthetic substitutes. Every room is composed from authentic raw elements that develop a soft, living patina over time.
            </p>
          </Reveal>

          {/* Interactive Material Tabs */}
          <div className="mt-8 space-y-2.5">
            {materials.map((m) => {
              const isActive = m.id === selectedId;
              return (
                <Reveal key={m.id} variant="fade-up">
                  <button
                    onClick={() => setSelectedId(m.id)}
                    className={`w-full text-left px-4 sm:px-5 py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? "bg-[#141210] text-[#FAF8F5] border-[#141210] shadow-sm translate-x-1"
                        : "bg-[#F2EEE9]/60 hover:bg-[#F2EEE9] text-[#141210] border-transparent"
                    }`}
                  >
                    <div>
                      <span className="font-display text-base sm:text-lg block">{m.name}</span>
                      <span className={`text-[11px] uppercase tracking-wider ${isActive ? "text-[#FAF8F5]/70" : "text-[#141210]/50"}`}>
                        {m.category}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${
                        isActive ? "bg-[#FAF8F5]/15 text-[#FAF8F5]" : "bg-[#141210]/5 text-[#141210]/60"
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
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#F2EEE9] border border-[#141210]/10 p-5 sm:p-7">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black/5 shadow-inner mb-5">
                <Image
                  src={activeMaterial.img}
                  alt={activeMaterial.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white text-[11px]">
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {activeMaterial.origin}
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {activeMaterial.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-2xl sm:text-3xl text-[#141210]">
                  {activeMaterial.name}
                </h3>
                <p className="text-[#141210]/80 text-xs sm:text-base leading-relaxed">
                  {activeMaterial.description}
                </p>
                <div className="pt-3 border-t border-[#141210]/10 flex items-center gap-2 text-xs font-medium text-[#8A7664]">
                  <Sparkles size={14} className="shrink-0" />
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
