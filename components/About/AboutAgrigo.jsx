import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Target, Globe, Award, Sparkles } from 'lucide-react';

export default function AgrigoRedesign() {
    const avatars = [
        { id: 1, src: 'https://images.unsplash.com/photo-1534528741775-w=100&auto=format&fit=crop&q=80' },
        { id: 2, src: 'https://images.unsplash.com/photo-1507003211169-w=100&auto=format&fit=crop&q=80' },
        { id: 3, src: 'https://images.unsplash.com/photo-1494790108377-w=100&auto=format&fit=crop&q=80' },
        { id: 4, src: 'https://images.unsplash.com/photo-1500648767791-w=100&auto=format&fit=crop&q=80' },
    ];

    const pillars = [
        {
            title: "Our Mission",
            desc: "To provide premium fertilizer raw materials with dependable service and competitive pricing.",
            icon: Target,
            position: 'translate-y-8',
        },
        {
            title: "Our Vision",
            desc: "To become one of India's most trusted partners for fertilizer raw material sourcing and supply solutions.",
            icon: Globe,
            position: 'translate-y-0',
        },
        {
            title: "Our Values",
            desc: "Quality, Integrity, Customer Commitment, and fostering productive Long-Term Partnerships.",
            icon: Award,
            position: 'translate-y-12',
        },
        {
            title: "Our Promise",
            desc: "Ensuring steady grade purity, verified sourcing chains, and dedicated logistic support.",
            icon: Sparkles,
            position: 'translate-y-4',
        },
    ];

    return (
        <section className="relative min-h-screen w-full text-[#0B4A27] bg-white font-sans py-20 px-6 md:px-12 lg:px-24 overflow-hidden select-none">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* UPPER GRID SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24 relative">

                    {/* Left Side: Smooth Organic Masked Image */}
                    <div className="lg:col-span-3 hidden lg:block pt-14 z-10">
                        <div
                            className="relative w-full h-48 shadow-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                            style={{ borderRadius: '10px' }}
                        >
                            <Image
                                src="/about-img-2.jpg"
                                alt="Farmer checking crops"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Column: Header & Trust Badges */}
                    <div className="lg:col-span-6 space-y-8 text-left z-10">

                        <div className="flex items-center gap-2 text-[#4FB845] font-bold text-xs uppercase tracking-wider">
                            <span className="w-3 h-3 text-[#4FB845]">🌿</span>
                            ABOUT GREENGLOBE
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B4A27] leading-[1.15] font-serif">
                            Reliable Sourcing for India's Fertilizer Industry
                        </h1>
                    </div>

                    {/* Right Column: Description, Rounded Buttons & Organic Tractor Image */}
                    <div className="lg:col-span-3 space-y-8 lg:pt-6 text-left z-10">
                        <div className="space-y-4">
                            <p className="text-[#3E654C] text-sm leading-relaxed font-semibold">
                                Greenglobe Agrochemical Industries is committed to providing reliable and high-quality fertilizer raw materials to the Indian agriculture and fertilizer industry.
                            </p>

                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="bg-[#60C347] hover:bg-[#52B23A] text-white font-bold text-xs px-7 py-4 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase inline-block"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-[#60C347] hover:bg-[#52B23A] text-white p-4 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                                aria-label="Go to contact"
                            >
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                            </Link>
                        </div>

                        {/* Beautiful Custom Asymmetric Oval Image Container */}
                        <div
                            className="relative w-full h-44 shadow-xl overflow-hidden hidden lg:block mt-10 transition-transform duration-500 hover:scale-[1.02]"
                            style={{ borderRadius: '10px' }}
                        >
                            <Image
                                src="/about-img-1.jpg"
                                alt="Tractor in green field"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Stylized Outline Typography Overlay Asset */}
                    <div
                        className="absolute bottom-[-100px] left-[-40px] text-[13rem] font-serif font-black tracking-widest select-none pointer-events-none opacity-50 font-sans hidden lg:block"
                        style={{
                            WebkitTextStroke: '2px #cbecdaff',
                            color: 'transparent',
                            lineHeight: 1
                        }}
                    >
                        GREENGLOBE
                    </div>
                </div>

                {/* LOWER GLASSMORPHIC STAGGERED CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 relative">

                    {/* Subtle geometric star accent sparkle visible in design */}
                    <div className="absolute right-[-2%] bottom-[-10%] text-[#CDDEC1] text-7xl select-none opacity-60 hidden lg:block">✦</div>

                    {pillars.map((pillar, index) => {
                        const IconComp = pillar.icon;
                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden bg-[#0A4725] text-white p-8 rounded-[2rem] flex flex-col justify-between aspect-[4/4.5] shadow-[0_20px_40px_rgba(5,45,22,0.25)] transition-all duration-500 hover:-translate-y-1 border border-white/5 ${pillar.position}`}
                            >
                                {/* The Realistic Internal Gloss/Reflection Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/15 mix-blend-overlay"
                                    style={{
                                        clipPath: 'ellipse(70% 40% at 50% 0%)',
                                        transform: 'scale(1.2)'
                                    }}
                                />

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#60C347] drop-shadow-sm shrink-0">
                                    <IconComp className="w-6 h-6 stroke-[1.5]" />
                                </div>

                                {/* Content */}
                                <div className="mt-6 space-y-3 relative z-10 text-left">
                                    <h3 className="text-xl font-bold tracking-tight text-[#FFF3A3] drop-shadow-sm font-serif">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}