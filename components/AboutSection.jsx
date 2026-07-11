import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 select-none">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Top Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        {/* Tag/Badge */}
                        <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-50">
                            About Company
                        </span>
                        {/* Main Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15]">
                            Modern Solutions for <br className="hidden sm:inline" /> Traditional Challenges
                        </h2>
                    </div>

                    {/* Read More Button */}
                    <a
                        href="#read-more"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FDF0B4] text-gray-950 font-bold rounded-2xl text-[14px] transition-all duration-300 hover:bg-[#fae68f] w-fit shadow-xs"
                    >
                        <span className="w-1.5 h-1.5 bg-gray-950 rounded-full animate-pulse" />
                        Read More
                    </a>
                </div>

                {/* Center Feature Image */}
                <div className="w-full aspect-[16/8] md:aspect-[16/7] relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                    <Image
                        src="/h2-2.webp" // Ensure your image is located in the public/ folder
                        alt="Modern agriculture harvesting solutions"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 1280px"
                        className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Bottom Dual Paragraph Description Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start mt-2">
                    {/* Bold Left Paragraph */}
                    <p className="text-lg sm:text-xl font-semibold text-gray-950 leading-relaxed md:pr-4">
                        We don't just grow crops — we grow trust, opportunity, and a better future.
                        We are dedicated to supporting farmers, enhancing food security, and promoting sustainable agriculture.
                    </p>

                    {/* Secondary Informational Right Paragraph */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium space-y-4">
                        With years of experience and a deep understanding of local and global challenges,
                        we provide high-quality seeds, modern farming solutions, expert field support, and agri-tech
                        innovations that empower growers to increase productivity and protect natural resources.
                        Our mission is rooted in more than just farming — it's about building partnerships,
                        preserving the land, and helping communities thrive.
                    </p>
                </div>

            </div>
        </section>
    );
}