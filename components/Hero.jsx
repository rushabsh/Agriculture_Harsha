import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f4f4f6] overflow-hidden flex flex-col justify-between pt-36 sm:pt-40 lg:pt-40">
      {/* Centered Hero Content */}
      <div className="gap-3 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal text-[#27272a] tracking-tight leading-[1.08] max-w-4xl">
          Smart Agricultural<br className="hidden sm:inline" /> Advancement
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-lg text-[#61616b] max-w-2xl font-normal leading-relaxed text-center">
          Empowering farmers with intelligent tools and real-time insights to boost productivity and support sustainable agricultural growth.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex items-center gap-2 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-[#5BC242] hover:bg-[#4ba834] text-white font-bold rounded-xl text-sm transition-colors shadow-xs"
          >
            LEARN MORE
          </a>
          <div className="p-3.5 bg-[#5BC242] text-white rounded-xl flex items-center justify-center">
            <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>

      </div>

      {/* Hero Field Image Section */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[580px] overflow-hidden">
        {/* Soft top gradient blend into the light background */}
        <div className="absolute top-0 inset-x-0 h-24 sm:h-36 bg-gradient-to-b from-[#f4f4f6] via-[#f4f4f6]/60 to-transparent z-10 pointer-events-none" />

        <Image
          src="/hero-bg-img.webp"
          alt="Agricultural Field Landscape"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
}