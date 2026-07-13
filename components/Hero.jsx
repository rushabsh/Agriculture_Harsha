import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  ];

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
              Discover More
            </a>
            {/* Arrow Badge Detail */}
            <div className="p-4 bg-[#69d34f] text-white rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Block: Floating Review Social Proof Widget */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] w-fit flex flex-col gap-4 border border-gray-100/50 self-start lg:self-auto ml-0 lg:ml-auto">
          {/* Avatar Stack Row */}
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className={`relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs ${i > 0 ? '-ml-3' : ''}`}
              >
                <Image
                  src={src}
                  alt="User Reviewer Avatar"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ))}
            {/* Plus Action Tag Counter */}
            <div className="w-10 h-10 rounded-full bg-[#69d34f] text-white flex items-center justify-center text-sm font-bold border-2 border-white shadow-xs -ml-3">
              +
            </div>
          </div>

          {/* Rating Matrix */}
          <div className="space-y-1">
            <div className="flex items-center gap-0.5 text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              {/* Distinctive Fractional Final Star */}
              <svg className="w-4 h-4 fill-[#69d34f]" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            <p className="text-[10px] md:text-xs font-bold text-gray-900 tracking-wider uppercase pt-0.5">
              Trusted by 2k+ Customers
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}