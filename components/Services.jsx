"use client"
import React, { useRef } from 'react';
import { Sprout, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const servicesData = [
  {
    title: "Farm Management",
    category: "Management",
    desc: "We promote eco-friendly agricultural practices that protect",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&h=250&q=80",
    isActive: false,
  },
  {
    title: "Agri-Tech Solutions",
    category: "Agri-Tech Solutions",
    desc: "We promote eco-friendly agricultural practices that protect",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250&q=80",
    isActive: true, // Distinct green card matching image
  },
  {
    title: "Agri-Tech Solutions",
    category: "Agri-Tech Solutions",
    desc: "We promote eco-friendly agricultural practices that protect",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250&q=80",
    isActive: false,
  },
  {
    title: "Green Farming",
    category: "Green Farming",
    desc: "We promote eco-friendly agricultural practices that protect",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=400&h=250&q=80",
    isActive: false,
  },
  {
    title: "Wheat Farming",
    category: "Wheat Farming",
    desc: "We promote eco-friendly agricultural practices that protect",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&h=250&q=80",
    isActive: false,
  }
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white pt-20 pb-0 select-none flex flex-col justify-between min-h-screen relative overflow-hidden">

      {/* Top Heading Content Area */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            {/* Tag/Badge Accent */}
            <div className="flex items-center gap-2 text-[#469A35] font-bold text-xs uppercase tracking-wider">
              <Sprout className="w-4 h-4" />
              <span>Service</span>
            </div>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D4E22] tracking-tight leading-[1.15]">
              Future-Ready Farming <br /> Solutions
            </h2>
          </div>

          {/* Navigation Action Arrow Buttons */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#5BC242] text-white flex items-center justify-center hover:bg-[#4ba834] transition-colors shadow-xs"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#5BC242] text-white flex items-center justify-center hover:bg-[#4ba834] transition-colors shadow-xs"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Cards Scroll Slider Box */}
      <div className="w-full pl-4 sm:pl-6 lg:pl-[calc((100vw-1280px)/2+32px)] overflow-x-auto scrollbar-none pb-12 z-10" ref={scrollRef}>
        <div className="flex gap-6 pr-6 w-max">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`w-[290px] sm:w-[320px] rounded-[24px] p-6 border flex flex-col justify-between gap-8 shadow-xs transition-all duration-300 transform hover:-translate-y-1 ${item.isActive
                ? 'bg-[#0D4E22] border-[#0D4E22] text-white'
                : 'bg-white border-gray-200 text-gray-900'
                }`}
            >
              {/* Card Headings Info */}
              <div className="space-y-3">
                <h3 className={`text-lg sm:text-xl font-bold ${item.isActive ? 'text-white' : 'text-[#0D4E22]'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${item.isActive ? 'text-gray-200' : 'text-gray-500'}`}>
                  {item.desc}
                </p>

                {/* Micro CTA Details Tag */}
                <a
                  href={`#details-${index}`}
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider pt-2 ${item.isActive ? 'text-[#5BC242] hover:text-white' : 'text-[#0D4E22] hover:text-[#5BC242]'
                    }`}
                >
                  <span>More Details</span>
                  <svg className="w-3 h-3 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Capsule Image Base Element */}
              <div className="w-full aspect-[2/1] relative rounded-full overflow-hidden shadow-xs">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner Graphic Element Layout */}
      <div className="w-full w-full h-[140px] sm:h-[180px] md:h-[220px] relative mt-auto z-0 shrink-0">
        <Image
          src="/service-bg.png" // Exact mapping requested filename inside public/
          alt="Fresh vegetables alignment graphic footer"
          fill
          sizes="100vw"
          className="w-full h-full object-cover object-top"
        />
      </div>

    </section>
  );
}