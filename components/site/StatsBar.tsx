"use client";

import { Reveal } from "./Reveal";

const stats = [
  { value: "12+", label: "Years of Practice", detail: "Dedicated architectural & interior curation" },
  { value: "140+", label: "Residences & Spaces", detail: "Bespoke projects across residential & boutique spaces" },
  { value: "18", label: "Design Accolades", detail: "Recognized for quiet luxury & sustainable craft" },
  { value: "100%", label: "Custom Material Sourcing", detail: "Honest natural stones, warm woods, & hand-finished metals" },
];

export function StatsBar() {
  return (
    <section className="px-6 md:px-14 py-16 max-w-7xl mx-auto border-y border-[#1A0F0A]/10 my-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, idx) => (
          <Reveal key={stat.label} delay={idx * 90} variant="fade-up">
            <div className="group flex flex-col justify-between h-full p-2">
              <div>
                <span className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A0F0A] tracking-tight block transition-transform duration-500 group-hover:translate-x-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A0F0A]/70 mt-3 block">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-[#1A0F0A]/50 mt-2 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
