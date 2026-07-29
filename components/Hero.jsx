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
          className="object-cover object-center brightness-90"
        />
      </div>

      {/* 2. Middle Layer: Green Linear Gradient Overlay */}
      <div
        className="absolute inset-0 z-[10] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(16, 85, 31, 0.25) 0%, rgba(16, 85, 31, 0.75) 60%, #10551f 100%)'
        }}
      />

      {/* 3. Foreground Layer: Transparent Indian Farmer Cutout */}
      {/* <div className="absolute inset-x-0 bottom-0 top-16 flex items-end justify-center z-[20] pointer-events-none">
        <div className="relative w-full max-w-[720px] sm:max-w-[780px] h-[85%] sm:h-[90%] md:h-[95%]">
          <Image
            src="/hero-img-1.png" // Indian Farmer Cutout image in public/
            alt="Smiling Indian Farmer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 750px"
            className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div> */}

      {/* 4. Soft Bottom Glow Overlay */}
      <div
        className="absolute inset-0 z-[25] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 60%, #10551f 100%)'
        }}
      />

      {/* 5. Interactive Layer: Copywriting Text & Floating Dashboard Cards */}
      <div className="relative max-w-7xl mx-auto w-full z-[30] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 pt-72 pb-16 h-full my-auto">

        {/* Left Block: Core Typography Titles & Primary CTA Buttons */}
        <div className="flex flex-col max-w-2xl text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#69d34f]/20 border border-[#69d34f]/40 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#69d34f] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#69d34f] animate-pulse" />
              Empowering Indian Agriculture
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-sans text-white leading-[1.15] drop-shadow-md">
              Premium Fertilizer <span className="font-serif italic text-[#69d34f] font-normal">Raw Materials</span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-xl font-medium leading-relaxed drop-shadow">
              Empowering local Indian farmers with sustainable, high-yield agricultural inputs and premium raw materials for maximum harvest quality.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-6">
            {/* Primary Discovery Anchor */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#69d34f] hover:bg-[#5bc242] text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us
            </a>
            {/* Arrow Badge Detail */}
            <a
              href="/contact"
              className="p-4 bg-[#69d34f] hover:bg-[#5bc242] text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              aria-label="Contact Us Arrow"
            >
              <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Floating Badge / Stat Card */}
        <div className="hidden lg:flex flex-col gap-4 self-end pb-4">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center gap-4 shadow-xl hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#69d34f]/30 flex items-center justify-center text-[#69d34f]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold">100% Authentic</p>
              <p className="text-xs text-gray-300">Indian Farmers Choice</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}