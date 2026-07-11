"use client"
import React, { useRef } from 'react';
import { Sprout, ArrowLeft, ArrowRight, Quote } from 'lucide-react'; // Make sure lucide-react is installed

const testimonialsData = [
  {
    quote: "We promote eco-friendly agricultural practices that protect soil health and increase long-term crop performance seamlessly.",
    name: "Quinn Perez Jordan",
    role: "Founder CEO"
  },
  {
    quote: "We promote eco-friendly agricultural practices that maximize input value while keeping the local biodiversity completely intact.",
    name: "Jessica Reed",
    role: "Co Founder"
  },
  {
    quote: "We promote eco-friendly agricultural practices that bring commercial security, transparency, and sustainable output scales.",
    name: "David Brown",
    role: "Farm Manager"
  },
  {
    quote: "Greenglobe has completely transformed how we monitor our crop metrics and execute resource distribution tracks.",
    name: "Sarah Jenkins",
    role: "Operations Director"
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 360; // Card width + gap spacing configuration
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#FAF8F2] py-20 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden">

      {/* Background Stylized Sketch Overlay Mask Simulation */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(91, 194, 66, 0.1), transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 w-full">

        {/* ========================================================================= */}
        {/* UPPER BLOCK: Section Typography Header & Control Arrows */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full">
          <div className="space-y-3 text-left">
            {/* Tag Badge */}
            <div className="flex items-center gap-2 text-[#469A35] font-bold text-xs uppercase tracking-widest">
              <Sprout className="w-4 h-4" />
              <span>Testimonial</span>
            </div>
            {/* Section Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D4E22] tracking-tight leading-[1.15]">
              Real Voices Behind Real <br /> Agricultural Growth
            </h2>
          </div>

          {/* Interactive Control Sliders */}
          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#5BC242] text-white flex items-center justify-center hover:bg-[#4ba834] transition-colors shadow-xs cursor-pointer"
              aria-label="Slide Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#5BC242] text-white flex items-center justify-center hover:bg-[#4ba834] transition-colors shadow-xs cursor-pointer"
              aria-label="Slide Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LOWER BLOCK: Dynamic Card Slider Track Wrapper */}
        {/* ========================================================================= */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scrollbar-none pb-4 flex"
        >
          <div className="flex gap-6 w-max pr-4">
            {testimonialsData.map((t, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[340px] md:w-[360px] bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.015)] border border-gray-100/60 relative flex flex-col justify-between overflow-hidden min-h-[300px] shrink-0 group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
              >
                {/* 1. Large Translucent Background Giant Quote Watermark */}
                <div className="absolute right-[-10px] bottom-[-10px] text-gray-100 opacity-65 pointer-events-none select-none z-0 transform group-hover:scale-105 transition-transform duration-500">
                  <Quote className="w-48 h-48 stroke-[0.5]" />
                </div>

                {/* 2. Top Green Mini Branding Quote Indicator */}
                <div className="text-[#5BC242] relative z-10">
                  <Quote className="w-10 h-10 fill-current transform scale-x-[-1]" />
                </div>

                {/* 3. Central Review Content String */}
                <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed text-left pt-6 relative z-10 flex-1">
                  {t.quote}
                </p>

                {/* 4. Bottom Identity/Role Metadata Box */}
                <div className="pt-8 border-t border-gray-50 mt-auto text-left relative z-10">
                  <h4 className="text-base font-extrabold text-[#0D4E22] tracking-tight">
                    {t.name}
                  </h4>
                  <span className="text-xs font-bold text-gray-400 tracking-wide mt-0.5 block">
                    {t.role}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}