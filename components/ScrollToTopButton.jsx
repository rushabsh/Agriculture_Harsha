"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 md:absolute md:bottom-6 md:right-12 p-3 md:p-3.5 bg-[#fdf6d4] hover:bg-[#faeeb4] text-black rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 group z-20 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
