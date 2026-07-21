import React from 'react';
import Image from 'next/image';

export default function Hero() {

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 overflow-hidden select-none bg-[#10551f]">

      {/* 1. Base Layer: Field Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-1.jpg" // Located in your public/ folder
          alt="Farmland Landscape Background"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center"
        />
      </div>

      {/* 2. Middle Layer: Exact DevTools Green Linear Overlay */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(16, 85, 31, 0.1) 10%, #10551f 100%)'
        }}
      />

      {/* 3. Foreground Layer: Transparent Farmer */}
      <div className="absolute inset-x-0 bottom-0 top-12 flex items-end justify-center z-50 pointer-events-none">
        <div className="relative w-full max-w-[750px] h-[85%] sm:h-[90%] md:h-[95%]">
          <Image
            src="/hero-img-1.png" // Located in your public/ folder
            alt="Smiling Farmer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 750px"
            className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>

      {/* 4. Middle Layer: Exact DevTools Green Linear Overlay */}
      <div
        className="absolute inset-0 z-60 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(16, 85, 31, 0.1) 50%, #10551f 100%)'
        }}
      />

      {/* 5. Interactive Layer: Copywriting Text & Floating Dashboard Cards */}
      <div className="relative max-w-7xl mx-auto w-full z-100 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 pt-72 pb-12 h-full my-auto">

        {/* Left Block: Core Typography Titles & Primary CTA Buttons */}
        <div className="flex flex-col max-w-2xl text-left">
          <div className="space-y-3">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#69d34f]">
              Modern Agriculture Solutions
            </span>

            <h1 className="text-quaternary text-3xl sm:text-4xl lg:text-8xl font-bold font-sans text-white leading-[1.15]">
              Premium Fertilizer <span className="font-serif italic text-primary font-normal">Raw Materials</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 pt-2">
            {/* Primary Discovery Anchor */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#69d34f] hover:bg-[#5bc242] text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-colors duration-200 shadow-sm"
            >
              Contact
            </a>
            {/* Arrow Badge Detail */}
            <div className="p-4 bg-[#69d34f] text-white rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}