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
      label: "Fields Results",
      imgSrc: "/counter-img-3.png", // Place your fresh vegetables/oil cutout image here
      alt: "Fields Results",
    },
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
      </div>
    </section>
  );
}
