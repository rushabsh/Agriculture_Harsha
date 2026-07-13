import Image from "next/image";
import React from "react";

export default function Statistics() {
  const statCards = [
    {
      percentage: "84%",
      label: "Efficiency",
      imgSrc: "/counter-img-1.png", // Place your corn cob cutout image here
      alt: "Corn efficiency stat graphic",
    },
    {
      percentage: "94%",
      label: "Farm Growth",
      imgSrc: "/counter-img-2.png", // Place your corn kernels cutout image here
      alt: "Corn kernels growth stat graphic",
    },
    {
      percentage: "99%",
      label: "Organic Farm",
      imgSrc: "/counter-img-3.png", // Place your fresh vegetables/oil cutout image here
      alt: "Organic farm vegetables stat graphic",
    },
  ];

  const brandLogos = [
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/1.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/2.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/3.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/4.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/5.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/6.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/1.webp", // Add your remaining corporate stamp icons
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/2.webp",
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 select-none overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col gap-16">
        {/* ========================================================================= */}
        {/* UPPER BLOCK: Giant Headline Typography */}
        {/* ========================================================================= */}
        <div className="w-full text-center">
          <h1 className="text-[11vw] font-black tracking-tight text-[#0D4E22] leading-none uppercase select-none">
            Statistics
          </h1>
        </div>

        {/* ========================================================================= */}
        {/* MIDDLE BLOCK: Stat Cards Grid (3 Columns) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#0d4e22] rounded-[20px] pt-8 px-8 pb-0 min-h-[360px] relative flex flex-col justify-between overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] transition-all duration-300"
            >
              {/* Stat Typography Details */}
              <div className="space-y-1 text-left relative z-10">
                <span className="block text-5xl lg:text-6xl font-extrabold text-[#0D4E22] tracking-tighter">
                  {card.percentage}
                </span>
                <span className="block text-sm font-bold text-gray-500 tracking-wide">
                  {card.label}
                </span>
              </div>

              {/* Floating Bottom Graphics Vector Container */}
              <div className="w-full h-[200px] relative mt-auto ml-auto overflow-visible pointer-events-none flex items-end justify-center">
                <Image
                  src={card.imgSrc}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-contain object-bottom transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* LOWER BLOCK: Divider Line & Partnership Badges Grid */}
        {/* ========================================================================= */}
        <div className="w-full space-y-10 pt-8">
          {/* Section Divider Line with Center Text */}
          <div className="relative flex items-center justify-center w-full">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-dashed border-gray-200" />
            </div>
            <div className="relative bg-white px-6">
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400">
                Partnerships With{" "}
                <span className="text-[#0D4E22]">Leading Brands</span>
              </span>
            </div>
          </div>

          {/* Vetted Corporate Green Brand Stamps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full items-center justify-items-center">
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] rounded-xl p-4 flex items-center justify-center h-20 border border-gray-100 shadow-2xs hover:bg-white hover:border-gray-200 transition-colors duration-200 cursor-pointer group w-full"
              >
                {/* Centered inner container with absolute boundary size */}
                <div className="relative h-10 w-full max-w-[120px]">
                  <Image
                    src={logo}
                    alt={`Corporate Stamp Badge ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-contain filter grayscale opacity-60 mix-blend-multiply group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
