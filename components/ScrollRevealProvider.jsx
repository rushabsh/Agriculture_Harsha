"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Select semantic elements and sections to animate on scroll
    const initObserver = () => {
      const targets = document.querySelectorAll(
        "section, main > div, footer, [data-reveal], .reveal-item"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              // Once revealed, no need to keep observing this element
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -60px 0px",
          threshold: 0.08,
        }
      );

      targets.forEach((target, index) => {
        // Exclude the hero section or first top section from heavy translate so above-the-fold content is instantly visible
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          // Above the fold: quick fade-in-up
          target.classList.add("reveal-above-fold");
          setTimeout(() => {
            target.classList.add("reveal-visible");
          }, 50 * index);
        } else {
          // Below the fold: scroll-triggered entry
          target.classList.add("reveal-on-scroll");
          observer.observe(target);
        }
      });

      return observer;
    };

    // Small delay to allow Next.js route transition to paint DOM
    const timer = setTimeout(() => {
      const observer = initObserver();
      return () => observer?.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
