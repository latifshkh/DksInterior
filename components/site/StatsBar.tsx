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
    <section className="px-5 sm:px-8 md:px-14 py-12 sm:py-16 max-w-7xl mx-auto border-y border-[#141210]/10 my-10 sm:my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {stats.map((stat, idx) => (
          <Reveal key={stat.label} delay={idx * 80} variant="fade-up">
            <div className="group flex flex-col justify-between h-full p-2 border-b sm:border-b-0 border-[#141210]/5 pb-6 sm:pb-0">
              <div>
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#141210] tracking-tight block transition-transform duration-500 group-hover:translate-x-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#8A7664] mt-2 block font-mono">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-[#141210]/60 mt-2 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
