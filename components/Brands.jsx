"use client";

import Image from "next/image";

export default function Brands() {
  const logos = [
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/1.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/2.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/3.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/4.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/5.webp",
    "https://wgl-dsites.net/verdaagro/wp-content/uploads/2025/08/6.webp",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#F8F6F1] p-2">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F8F6F1] to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F8F6F1] to-transparent" />

        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative mx-10 flex h-20 w-48 flex-shrink-0 items-center justify-center group"
            >
              <Image
                src={logo}
                alt={`Brand ${index + 1}`}
                fill
                priority
                sizes="192px"
                className="max-h-10 w-auto object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}