import React from 'react';
import { Sprout, Plane, ShieldCheck, Waves, Play } from 'lucide-react'; // Make sure lucide-react is installed
import Image from 'next/image';

export default function Features() {
    return (
        <section className="w-full bg-[#0b6e39] py-20 px-4 sm:px-6 lg:px-8 select-none overflow-hidden relative text-white">

            {/* Subtle vector background overlay lines simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 sm:gap-16">

                {/* UPPER BLOCK: Asymmetric Title & Primary Feature Banner Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left Text Block */}
                    <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                        <div className="space-y-4">
                            {/* Tag/Badge Element */}
                            <div className="flex items-center gap-2 text-[#7ce052] font-bold text-xs uppercase tracking-widest">
                                <Sprout className="w-4 h-4" />
                                <span>Agriculture Features</span>
                            </div>
                            {/* Main Headline */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
                                High Quality <br /> Features for Modern <br /> Farming Needs
                            </h2>
                        </div>

                        {/* CTA Interaction Row */}
                        <div className="flex items-center gap-1.5 pt-2">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#7ce052] hover:bg-[#6bd041] text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-colors shadow-xs"
                            >
                                Get Solutions
                            </a>
                            <div className="p-3.5 bg-[#7ce052] text-white rounded-xl flex items-center justify-center">
                                <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Showcase Image Card */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[580px] aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
                            <Image
                                src="/feature-img-01.jpg"
                                alt="Farmers reviewing tablet data in a crop field"
                                fill
                                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                                sizes="(max-width: 1024px) 100vw, 680px"
                                priority
                            />
                        </div>
                    </div>

                </div>

                {/* LOWER BLOCK: Video Mini Player Thumbnail & Features Matrix Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-white/10 pt-12">

                    {/* Left Side Video Capsule Thumbnail Player */}
                    <div className="lg:col-span-4 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[340px] aspect-[16/10] relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer border border-white/10">
                            <Image
                                src="/feature-img-02.jpg"
                                alt="Greenhouse worker inspecting plants"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Center Floating White Play Button Ring Accent */}
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors group-hover:bg-black/20 z-10">
                                <div className="w-12 h-12 rounded-full bg-white text-[#0b6e39] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-5 h-5 fill-current ml-0.5" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side 2x2 Clean Features Grid Matrix Layout */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

                        {/* Feature Item 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-white text-[#0b6e39] flex items-center justify-center shadow-md shrink-0">
                                <Plane className="w-6 h-6 stroke-[1.8]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold tracking-tight">Smart Equipment Integration</h3>
                                <p className="text-xs text-white/70 font-medium leading-relaxed max-w-xs">
                                    Deploy integrated smart sensors and automated drone routing architectures.
                                </p>
                            </div>
                        </div>

                        {/* Feature Item 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-white text-[#0b6e39] flex items-center justify-center shadow-md shrink-0">
                                <Sprout className="w-6 h-6 stroke-[1.8]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold tracking-tight">AI-Powered Crop Monitoring</h3>
                                <p className="text-xs text-white/70 font-medium leading-relaxed max-w-xs">
                                    Track crop growth metrics continuously via data-driven models.
                                </p>
                            </div>
                        </div>

                        {/* Feature Item 3 */}
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-white text-[#0b6e39] flex items-center justify-center shadow-md shrink-0">
                                <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold tracking-tight">Eco-Friendly Farming Practices</h3>
                                <p className="text-xs text-white/70 font-medium leading-relaxed max-w-xs">
                                    Protect local biomes through target inputs and soil preservation techniques.
                                </p>
                            </div>
                        </div>

                        {/* Feature Item 4 */}
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-white text-[#0b6e39] flex items-center justify-center shadow-md shrink-0">
                                <Waves className="w-6 h-6 stroke-[1.8]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold tracking-tight">Moisture-Based Irrigation Control</h3>
                                <p className="text-xs text-white/70 font-medium leading-relaxed max-w-xs">
                                    Automate watering cycles based directly on localized real-time soil data.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}