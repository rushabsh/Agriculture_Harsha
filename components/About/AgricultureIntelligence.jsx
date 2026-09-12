import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Play, Check } from 'lucide-react';

export default function AgricultureIntelligence() {
    return (
        <div className="w-full font-sans">
            {/* UPPER SECTION: Solutions & Feature Cards */}
            <section className="bg-[#FAF7EE] py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Image and Feature Boxes Grid */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-sm">
                            <Image
                                src="/maha-farmer-5.avif"
                                alt="Farmer harvesting strawberries in greenhouse"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Dark Green Feature Cards Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="bg-[#0B5C2E] text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
                                <div className="w-8 h-8 rounded-full bg-[#66CD4E]/20 flex items-center justify-center">
                                    <span className="w-4 h-4 rounded-full bg-[#66CD4E] flex items-center justify-center text-[#0B5C2E] font-bold text-[10px]">✓</span>
                                </div>
                                <div className="mt-6 space-y-2">
                                    <h4 className="font-bold text-lg">Quality-Assured Raw Materials
                                    </h4>
                                    <p className="text-xs text-gray-300/90 leading-relaxed">
                                        Reliable fertilizer raw materials sourced to meet consistent quality and production requirements.                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#0B5C2E] text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
                                <div className="w-8 h-8 rounded-full bg-[#66CD4E]/20 flex items-center justify-center">
                                    <span className="w-4 h-4 rounded-full bg-[#66CD4E] flex items-center justify-center text-[#0B5C2E] font-bold text-[10px]">✓</span>
                                </div>
                                <div className="mt-6 space-y-2">
                                    <h4 className="font-bold text-lg">Bulk Supply Solutions
                                    </h4>
                                    <p className="text-xs text-gray-300/90 leading-relaxed">
                                        Efficient bulk sourcing and supply for manufacturers, distributors, and agricultural businesses.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Header and Lists */}
                    <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:pt-4">
                        <div className="flex items-center gap-2 text-[#4FB845] font-bold text-xs uppercase tracking-wider">
                            <span className="w-3 h-3 text-[#4FB845]">🌿</span>
                            FERTILIZER GRADE SOLUTIONS
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B5C2E] leading-tight">
                            Solutions Built to Enhance Agricultural Efficiency
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                            We provide high-quality fertilizer grades and raw materials designed to support efficient nutrient management, healthy crop development, and improved agricultural productivity.                        </p>

                        {/* List with light green checkboxes */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm font-bold text-[#0B5C2E]">
                                <div className="w-5 h-5 rounded-full bg-[#66CD4E] flex items-center justify-center text-white text-[10px]">
                                    ✓
                                </div>
                                Consistent Quality & Reliable Supply

                            </div>

                            <div className="flex items-center gap-3 text-sm font-bold text-[#0B5C2E]">
                                <div className="w-5 h-5 rounded-full bg-[#66CD4E] flex items-center justify-center text-white text-[10px]">
                                    ✓
                                </div>
                                Solutions for Diverse Crop Requirements
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-2 pt-4">
                            <a href="http://localhost:3000/contact">
                                <button className="bg-[#66CD4E] hover:bg-[#59b841] text-white font-bold text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider transition-colors">
                                    EXPLORE OUR GRADES
                                </button>
                            </a>

                            <button className="bg-[#66CD4E] hover:bg-[#59b841] text-white p-3.5 rounded-xl transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOWER SECTION: Tractor Banner with Overlapping Video Card */}
            <section className="relative w-full h-[450px] md:h-[550px]">
                {/* Background Tractor Banner Image */}
                <Image
                    src="/video-image-2.jpg"
                    alt="Modern tractor working on farm fields"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Light Overlay over the image */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Overlapping Absolute Box */}
                <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 bg-white p-8 md:p-10 rounded-3xl shadow-xl max-w-md w-[calc(100%-3rem)] z-20">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B5C2E] leading-tight">
                            Driving Modern Agriculture Forward
                        </h3>

                        {/* Video Play Trigger Area */}
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-[#0B5C2E] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                            </div>
                            <div className="text-xs font-bold text-[#0B5C2E] tracking-wide leading-snug">
                                Modern Agriculture &<br /> Farming Reel
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}