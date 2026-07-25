"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { Compass, Layers, Feather, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Spatial Intent",
    icon: Compass,
    summary: "We listen to your daily rituals, observe how natural light travels through the structure, and establish the emotional baseline of your home.",
    details: [
      "Site topography & natural light study",
      "Lifestyle & movement pattern mapping",
      "Material tactile moodboards",
    ],
  },
  {
    number: "02",
    title: "Geometry & Material Harmony",
    icon: Layers,
    summary: "Architectural layouts are distilled into pure proportions. We curate pairings of warm travertine, oiled oak, lime plaster, and hand-brushed metals.",
    details: [
      "Custom spatial joinery drawings",
      "Lighting & shadow architectural plan",
      "Authentic material sampling",
    ],
  },
  {
    number: "03",
    title: "Artisanal Craft & Fabrication",
    icon: Feather,
    summary: "Every custom table, credenza, and plaster wall is built in collaboration with master stonemasons, carpenters, and textile weavers.",
    details: [
      "Bespoke millwork & furniture crafting",
      "Millimeter-precision installation",
      "Acoustic & textural refinement",
    ],
  },
  {
    number: "04",
    title: "Styling & Turnkey Handover",
    icon: Sparkles,
    summary: "Artworks, vintage ceramics, and curated linens are placed with intention. The home is handed over completely ready for living.",
    details: [
      "Art curation & antique placement",
      "Textile & botanical layer integration",
      "Complete white-glove reveal",
    ],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="px-5 sm:px-8 md:px-14 py-16 sm:py-28 max-w-7xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-2">
          — Design Methodology
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#141210]">
          A quiet, methodical journey<br className="hidden sm:inline" /> from concept to lived reality.
        </h2>
      </Reveal>

      <div className="mt-10 sm:mt-14 grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Step Navigation Cards */}
        <div className="lg:col-span-5 space-y-2.5">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <Reveal key={step.number} delay={index * 60} variant="slide-right">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center sm:items-start gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-[#141210] text-[#FAF8F5] border-[#141210] shadow-sm"
                      : "bg-[#F2EEE9]/70 text-[#141210] border-transparent hover:bg-[#F2EEE9]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                      isSelected
                        ? "bg-[#FAF8F5]/15 text-[#FAF8F5]"
                        : "bg-[#141210]/5 text-[#141210]/60"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg sm:text-xl leading-snug truncate">
                      {step.title}
                    </h3>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Selected Step Display Panel */}
        <div className="lg:col-span-7">
          <Reveal variant="scale" key={activeStep}>
            <div className="bg-[#F2EEE9] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-[#141210]/10 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              <div className="absolute top-6 right-6 text-7xl sm:text-8xl font-display text-[#141210]/5 pointer-events-none select-none">
                {steps[activeStep].number}
              </div>

              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#141210] text-[#FAF8F5] grid place-items-center mb-5">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon size={18} strokeWidth={1.5} />;
                  })()}
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-[#8A7664] block mb-2 font-mono">
                  Phase {steps[activeStep].number} of 04
                </span>
                <h3 className="font-display text-2xl sm:text-4xl text-[#141210]">
                  {steps[activeStep].title}
                </h3>

                <p className="mt-4 text-[#141210]/80 text-sm sm:text-base leading-relaxed max-w-xl">
                  {steps[activeStep].summary}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#141210]/10">
                <span className="text-xs uppercase tracking-widest font-medium text-[#141210]/60 block mb-3 font-mono">
                  Key Deliverables:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#141210]/85 font-medium">
                  {steps[activeStep].details.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-[#FAF8F5] px-3 py-2 rounded-xl border border-[#141210]/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A7664] shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
