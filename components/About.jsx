import React from 'react';
import { Sprout, Eye } from 'lucide-react'; // Make sure lucide-react is installed
import Image from 'next/image';

export default function AboutFuture() {
  return (
    <section className="w-full bg-[#FAF8F2] py-20 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Main 3-Column Grid for Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* 1. LEFT COLUMN: Small Image (lg:col-span-3) */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px] aspect-[4/5] relative rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/about-img-1.jpg" // Left image reference
                alt="Farmer checking crops closely"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* 2. CENTER COLUMN: Header & Info Matrix (lg:col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6 text-left">

            {/* Tag/Badge with Small Leaf Accent */}
            <div className="flex items-center gap-2 text-[#469A35] font-bold text-xs uppercase tracking-wider">
              <Sprout className="w-4 h-4 text-[#469A35]" />
              <span>About Agrigo</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D4E22] tracking-tight leading-[1.15]">
              Building stronger <br /> Futures through smart <br /> Agriculture
            </h2>

            {/* Sub-description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              Building stronger futures through smart agriculture means combining advanced technology, data-driven insights,
            </p>

            {/* Action CTA Buttons */}
            <div className="flex items-center gap-1.5 pt-2">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#5BC242] hover:bg-[#4ba834] text-white font-bold rounded-xl text-sm transition-colors shadow-xs"
              >
                ABOUT MORE
              </a>
              <div className="p-3.5 bg-[#5BC242] text-white rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            {/* Dual White Info Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Card 1: Crop Monitoring */}
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0D4E22]">
                  {/* Styled like the placeholder wireframe icon */}
                  <Eye className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0D4E22]">Crop Monitoring</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    Agriculture means combining advanced technology,
                  </p>
                </div>
              </div>

              {/* Card 2: Automated Irrigation */}
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0D4E22]">
                  <Sprout className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0D4E22]">Automated Irrigation</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    Agriculture means combining advanced technology,
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 3. RIGHT COLUMN: Tall Showcase Image (lg:col-span-4) */}
          <div className="lg:col-span-4 order-3 flex justify-center lg:justify-end relative group">
            <div className="w-full max-w-[420px] aspect-[4/5] lg:aspect-[3.8/5] relative rounded-[20px] overflow-hidden shadow-sm">
              <Image
                src="/about-img-2.jpg" // Right image reference
                alt="Researcher inspecting lush green crops"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Small green tag accent floating on right image matching image detail */}
              <div className="absolute bottom-4 right-4 bg-[#5BC242] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-xs">
                8%
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}