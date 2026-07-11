"use client";

import Image from "next/image";
import { useState } from "react";

export default function WhyChooseUs() {
  const principles = [
    {
      id: "premium-quality",
      title: "Premium Quality Products",
      desc: "We adhere to the highest industry benchmarks, ensuring that every product delivered meets rigorous quality standards and fulfills your operational expectations perfectly.",
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/accordion-1-1.webp"
    },
    {
      id: "bulk-supply",
      title: "Bulk Supply Capability",
      desc: "Equipped with extensive infrastructure, we easily accommodate high-volume scaling demands, offering stable, large-capacity supply tracks for commercial agricultural ventures.",
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/accordion-1-2.webp"
    },
    {
      id: "competitive-pricing",
      title: "Competitive Pricing",
      desc: "Maximize your market overheads. We provide transparent, value-driven, and competitive pricing frameworks optimized to fit both small-scale budgets and enterprise projects.",
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/accordion-1-3.webp"
    },
    {
      id: "timely-delivery",
      title: "Timely Delivery & Dispatch",
      desc: "Minimize downtime with our efficient logistical pipelines. We guarantee strict timeline management, giving you secure, fast dispatch and prompt, predictable arrivals.",
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/accordion-1-1.webp"
    },
    {
      id: "reliable-sourcing",
      title: "Reliable Sourcing & Technical Support",
      desc: "Gain peace of mind through vetted sourcing links paired with specialized technical support. Our dedicated team is available to help solve real-time application or supply questions.",
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/accordion-1-2.webp"
    },
    {
      id: "product-availability",
      title: "Consistent Product Availability",
      desc: "Avoid supply shortages. We maintain optimized inventory buffers year-round to guarantee that critical resources are constantly available when you need them.",
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/accordion-1-3.webp"
    }
  ];

  const [activeId, setActiveId] = useState(principles[0].id);

  return (
    <section id="principles" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] relative overflow-hidden select-none">

      {/* Decorative subtle background design accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-quaternary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ========================================================================= */}
        {/* LEFT COLUMN: Section Typography Headers & Modern Accordion List */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col items-start gap-8 order-2 lg:order-1">

          {/* Section Sub-header tag */}
          <div className="space-y-3">
            <div className="text-primary font-bold text-xs uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary inline-block" />
              Why Choose Us
            </div>
            <h2 className="text-quaternary text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight leading-[1.15]">
              Why Choose <span className="font-serif italic text-primary font-normal">Greenglobe?</span>
            </h2>
          </div>

          {/* Premium Interacting Accordion Stack */}
          <div className="w-full space-y-3.5">
            {principles.map((p, idx) => {
              const isOpen = activeId === p.id;
              const displayIndex = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={p.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                    ? "bg-white border-primary shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                    : "bg-white/40 border-gray-200/80 hover:bg-white/80 hover:border-gray-300"
                    }`}
                >
                  {/* Interactive Button Bar Header */}
                  <button
                    onClick={() => setActiveId(p.id)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer focus:outline-none group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Leading Numeric Metric Identifier */}
                      <span className={`text-xs font-bold tracking-wider transition-colors duration-200 ${isOpen ? "text-primary" : "text-gray-400"}`}>
                        {displayIndex}
                      </span>
                      <span className={`text-base sm:text-lg font-bold font-sans transition-colors duration-200 ${isOpen ? "text-primary" : "text-quaternary group-hover:text-primary"}`}>
                        {p.title}
                      </span>
                    </div>

                    {/* Round Indicator Element Wrap */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? "bg-primary text-white rotate-180" : "bg-gray-100 text-quaternary group-hover:bg-gray-200/70"
                      }`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* High-Performance Smooth CSS Grid Expansion Wrapper */}
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pl-14 text-sm text-content/90 leading-relaxed font-medium">
                        {p.desc}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: Elevated Structural Media Showcase Component */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[460px] lg:max-w-[480px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-[10px] border-white bg-white group">

            {/* Conditional Image Display with Smooth Crossfade Properties */}
            {principles.map((p) => (
              <Image
                key={p.id}
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform ${activeId === p.id
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-[1.03] rotate-1 pointer-events-none"
                  }`}
              />
            ))}

            {/* Inlaid Framing Box Border Detail Overlay */}
            <div className="absolute inset-0 border border-primary/10 rounded-2xl pointer-events-none m-3 z-10" />

            {/* Subtle Gradient Shade over media elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  );
}