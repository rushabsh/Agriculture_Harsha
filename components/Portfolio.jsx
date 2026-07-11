"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const slides = [
    {
      title: "Seeds of Change",
      tags: ["Agriculture", "Harvesting"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-1-1520x1240.webp"
    },
    {
      title: "Farming the Future",
      tags: ["Crop", "Harvesting"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-2-1520x1240.webp"
    },
    {
      title: "Growing with Results",
      tags: ["Agriculture", "Organic"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-3-1520x1240.webp"
    },
    {
      title: "Real Impact, Real Yields",
      tags: ["Harvesting", "Organic"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-4-1520x1240.webp"
    },
    {
      title: "Tech Meets Soil",
      tags: ["Harvesting", "Organic"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-5-1520x1240.webp"
    },
    {
      title: "Better Crops, Better Lives",
      tags: ["Agriculture", "Organic"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-6-1520x1240.webp"
    },
    {
      title: "From Struggle to Strength",
      tags: ["Crop", "Farming"],
      img: "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/pf-7-1520x1240.webp"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Responsive items to show: 3 on large screens, 2 on tablet, 1 on mobile
  const itemsToShow = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 >= slides.length - (itemsToShow - 1) ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? slides.length - itemsToShow : prev - 1
    );
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title and Controls Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col items-start gap-4">
            <div className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Latest Cases</div>
            <h2 className="text-quaternary text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight leading-tight max-w-2xl">
              Where Agriculture Meets Technology and Trust
            </h2>
          </div>

          {/* Swiper Control Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 text-quaternary hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-gray-200 text-quaternary hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`
            }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 group cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {slide.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-white/95 text-quaternary text-xs font-bold rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Text below Card */}
                <div className="mt-6 flex flex-col items-start gap-1">
                  <h3 className="text-quaternary font-bold text-xl group-hover:text-primary transition-colors duration-300">
                    {slide.title}
                  </h3>
                  <div className="text-gray-400 font-semibold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:text-quaternary transition-colors">
                    View Project Case
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
