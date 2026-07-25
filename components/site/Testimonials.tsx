"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Maison Studio transformed our penthouse into a sanctuary of quiet beauty. Every morning when the sunlight hits the travertine wall, it feels like a work of art.",
    author: "Eleanor & Mark Vance",
    location: "South Mumbai Residence",
    year: "2024",
  },
  {
    quote: "They listen deeper than any architects we've worked with. The flow of rooms, the hidden storage, and the warmth of wood grain exceeded all our hopes.",
    author: "Dr. Vikram Sethi",
    location: "Lonavala Villa",
    year: "2025",
  },
  {
    quote: "Restraint is hard to achieve, but Maison mastered it effortlessly. Their selection of raw linen and custom furniture gave our space soul.",
    author: "Ananya Roy",
    location: "Bandra Apartment",
    year: "2024",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[index];

  return (
    <section id="praise" className="px-5 sm:px-8 md:px-14 py-16 sm:py-28 max-w-6xl mx-auto">
      <Reveal>
        <div className="flex flex-row items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#8A7664] font-mono block mb-2">
              — Client Reflections
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#141210]">
              Living in our work.
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={prev}
              aria-label="Previous quote"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#141210]/20 flex items-center justify-center hover:bg-[#141210] hover:text-[#FAF8F5] transition cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next quote"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#141210]/20 flex items-center justify-center hover:bg-[#141210] hover:text-[#FAF8F5] transition cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal key={index} variant="scale">
        <div className="bg-[#F2EEE9] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 md:p-16 border border-[#141210]/10 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 text-[#141210]/5 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none" />

          <p className="font-display text-xl sm:text-3xl md:text-4xl text-[#141210] leading-relaxed max-w-4xl relative z-10">
            "{current.quote}"
          </p>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#141210]/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-display text-lg sm:text-xl text-[#141210] block">
                {current.author}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8A7664] font-mono">
                {current.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === index ? "w-7 bg-[#141210]" : "w-2 bg-[#141210]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
