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
    <section id="process" className="px-6 md:px-14 py-24 md:py-36 max-w-7xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
          — Design Methodology
        </span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          A quiet, methodical journey<br />from concept to lived reality.
        </h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
        {/* Step Navigation Cards */}
        <div className="lg:col-span-5 space-y-3">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 70} variant="slide-right">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-[#1A0F0A] text-[#F8F7F4] border-[#1A0F0A] shadow-md"
                      : "bg-[#F1EFEA]/60 text-[#1A0F0A] border-transparent hover:bg-[#F1EFEA]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-wider px-2.5 py-1 rounded-full ${
                      isSelected
                        ? "bg-[#F8F7F4]/15 text-[#F8F7F4]"
                        : "bg-[#1A0F0A]/5 text-[#1A0F0A]/60"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl leading-snug flex items-center justify-between">
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
            <div className="bg-[#F1EFEA] rounded-[2.5rem] p-8 md:p-12 border border-[#1A0F0A]/10 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              <div className="absolute top-8 right-8 text-8xl font-display text-[#1A0F0A]/5 pointer-events-none select-none">
                {steps[activeStep].number}
              </div>

              <div>
                <div className="w-12 h-12 rounded-full bg-[#1A0F0A] text-[#F8F7F4] grid place-items-center mb-6">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon size={20} strokeWidth={1.5} />;
                  })()}
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-[#1A0F0A]/50 block mb-2 font-mono">
                  Phase {steps[activeStep].number} of 04
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-[#1A0F0A]">
                  {steps[activeStep].title}
                </h3>

                <p className="mt-5 text-[#1A0F0A]/75 text-base md:text-lg leading-relaxed max-w-xl">
                  {steps[activeStep].summary}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1A0F0A]/10">
                <span className="text-xs uppercase tracking-widest font-medium text-[#1A0F0A]/60 block mb-3">
                  Key Deliverables:
                </span>
                <ul className="grid sm:grid-cols-3 gap-3 text-xs text-[#1A0F0A]/80 font-medium">
                  {steps[activeStep].details.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-[#F8F7F4] px-3 py-2 rounded-xl border border-[#1A0F0A]/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A0F0A]" />
                      {item}
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
