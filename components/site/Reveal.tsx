"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "fade-up" | "fade" | "scale" | "slide-right";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const timer = setTimeout(() => setShown(true), delay);
            io.disconnect();
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const animationClass = {
    "fade-up": "reveal-fade-up-in",
    fade: "reveal-fade-in",
    scale: "reveal-scale-in",
    "slide-right": "reveal-slide-right-in",
  }[variant];

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? animationClass : "reveal"}`}
    >
      {children}
    </div>
  );
}

