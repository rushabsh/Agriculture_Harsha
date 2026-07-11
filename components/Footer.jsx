"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full min-h-screen flex flex-col justify-end items-center px-4 sm:px-6 md:px-8 pb-8 md:pb-12 overflow-hidden bg-[#150e07]">

      {/* Background Image Optimized Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer-bg.webp" // Make sure this is in your public/ directory
          alt="Hay bales background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Warm shadow gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative w-full max-w-7xl flex flex-col items-center z-10 mt-16 sm:mt-24 md:mt-32 w-full">

        {/* Giant Overlapping Branding Text */}
        <h2 className="text-[14vw] sm:text-[12vw] font-bold tracking-tight text-[#fdf6d4] opacity-[0.85] select-none leading-none mb-[-25px] sm:mb-[-50px] md:mb-[-75px] transition-transform pointer-events-none text-center">
          VerdaAgro
        </h2>

        {/* Central Frosted Glass Dashboard Card */}
        <div className="w-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

            {/* Left Box: Contact & Social Tags */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <p className="text-white font-medium text-base md:text-lg max-w-sm leading-relaxed">
                  Driven by passion. Grounded in purpose. Focused on results.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:verda@mail.com"
                    className="block text-xl sm:text-2xl md:text-3xl font-bold text-[#fdf6d4] hover:underline break-all sm:break-normal"
                  >
                    verda@mail.com
                  </a>
                  <a
                    href="tel:+18001234657"
                    className="block text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-[#fdf6d4] transition-colors"
                  >
                    +1 800 123 46 57
                  </a>
                </div>
              </div>

              {/* Pill Social Tags */}
              <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                {['Instagram', 'Twitter', 'Facebook', 'Linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-3.5 py-1.5 border border-white/20 rounded-full text-xs font-semibold text-white/90 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Box: Navigation Matrix Links */}
            <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6 lg:pl-12 flex flex-col">
              <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Useful Links</h3>
              <nav className="grid grid-cols-2 gap-3 md:flex md:flex-col md:space-y-3">
                {['Company', 'Services', 'Features', 'FAQs', 'Getting Started'].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-white/70 hover:text-[#fdf6d4] text-sm font-medium transition-colors w-fit"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Box: Newsletter Form Block */}
            <div className="md:col-span-4 border-t md:border-t-0 border-white/10 pt-6 md:pt-0 flex flex-col justify-between space-y-6 md:space-y-8">
              <div>
                <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Subscribe</h3>

                {/* Clean Inlined Newsletter Field */}
                <div className="relative border-b border-white/30 pb-2 flex items-center justify-between group focus-within:border-[#fdf6d4] transition-colors">
                  <input
                    type="email"
                    placeholder="Get news & updates"
                    className="bg-transparent text-white placeholder-white/60 focus:outline-none w-full text-sm pr-4 font-medium"
                  />
                  <Mail className="w-4 h-4 text-white/60 group-focus-within:text-[#fdf6d4] shrink-0" />
                </div>

                <p className="text-white/50 text-xs leading-relaxed mt-3 md:mt-4 font-medium">
                  Our expertise, as well as our passion for web design, sets us apart from other agencies.
                </p>
              </div>

              {/* Dynamic Legal Signature Row inside the frame */}
              <div className="text-[11px] text-white/40 font-medium pt-2 md:pt-4">
                © {new Date().getFullYear()} VerdaAgro by WebGeniusLab. All Rights Reserved
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Absolute Bottom Right Floating Back-To-Top Trigger */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 md:absolute md:bottom-6 md:right-12 p-3 md:p-3.5 bg-[#fdf6d4] hover:bg-[#faeeb4] text-black rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 group z-20 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </footer>
  );
}