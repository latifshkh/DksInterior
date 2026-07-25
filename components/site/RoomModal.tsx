"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Sparkles } from "lucide-react";

export interface RoomData {
  title: string;
  img: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export function RoomModal({
  room,
  onClose,
}: {
  room: RoomData | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (room) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [room, onClose]);

  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#F8F7F4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#1A0F0A]/10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70 grid place-items-center transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Image column */}
        <div className="relative md:w-1/2 min-h-[260px] md:min-h-[460px] bg-[#F1EFEA]">
          <Image
            src={room.img}
            alt={room.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Info column */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#1A0F0A]/60 font-mono block mb-2">
              Bespoke Room Architecture
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-[#1A0F0A]">
              {room.title}
            </h3>
            <p className="mt-4 text-[#1A0F0A]/75 text-sm md:text-base leading-relaxed">
              {room.description ||
                `Our approach to the ${room.title.toLowerCase()} prioritizes spatial breathing room, acoustic warmth, and natural light transition through hand-selected natural finishes.`}
            </p>

            <div className="mt-6 pt-6 border-t border-[#1A0F0A]/10">
              <span className="text-xs uppercase tracking-widest text-[#1A0F0A]/60 font-medium block mb-3">
                Key Design Focus
              </span>
              <ul className="space-y-2 text-xs text-[#1A0F0A]/80 font-medium">
                {(room.features || [
                  "Concealed architectural lighting strips",
                  "Integrated custom joinery & storage",
                  "Natural acoustics & organic wall plaster",
                ]).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Sparkles size={14} className="text-[#1A0F0A]/50 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1A0F0A]/10 flex items-center justify-between gap-4">
            <Link
              href={`/inquiry?space=${encodeURIComponent(room.title)}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A0F0A] text-[#F8F7F4] text-xs uppercase tracking-widest px-6 py-3 hover:opacity-90 transition"
            >
              Inquire about this space <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-[#1A0F0A]/60 hover:text-[#1A0F0A] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
