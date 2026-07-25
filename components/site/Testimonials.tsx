"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Maison Studio transformed our penthouse into an sanctuary of quiet beauty. Every morning when the sunlight hits the travertine wall, it feels like a work of art.",
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
    quote: "Restraint is hard to achieve, but Maison mastered it effortless. Their selection of raw linen and custom furniture gave our space soul.",
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
    <section id="praise" className="px-6 md:px-14 py-24 md:py-36 max-w-6xl mx-auto">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#1A0F0A]/60">
              — Client Reflections
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Living in our work.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous quote"
              className="w-12 h-12 rounded-full border border-[#1A0F0A]/20 flex items-center justify-center hover:bg-[#1A0F0A] hover:text-[#F8F7F4] transition cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next quote"
              className="w-12 h-12 rounded-full border border-[#1A0F0A]/20 flex items-center justify-center hover:bg-[#1A0F0A] hover:text-[#F8F7F4] transition cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal key={index} variant="scale">
        <div className="bg-[#F1EFEA] rounded-[2.5rem] p-8 md:p-16 border border-[#1A0F0A]/10 relative overflow-hidden">
          <Quote className="absolute top-8 right-8 text-[#1A0F0A]/10 w-24 h-24 pointer-events-none" />

          <p className="font-display text-2xl md:text-4xl text-[#1A0F0A] leading-relaxed max-w-4xl relative z-10">
            "{current.quote}"
          </p>

          <div className="mt-10 pt-8 border-t border-[#1A0F0A]/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-display text-xl text-[#1A0F0A] block">
                {current.author}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#1A0F0A]/60">
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
                    i === index ? "w-8 bg-[#1A0F0A]" : "w-2 bg-[#1A0F0A]/20"
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
