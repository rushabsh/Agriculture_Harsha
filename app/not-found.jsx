import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center select-none mt-20">
        <div className="max-w-xl mx-auto flex flex-col items-center">

          {/* Koala Illustration */}
          <div className="relative w-[320px] sm:w-[450px] aspect-[4/3] max-w-full">
            <Image
              src="/error-img.png"
              alt="404 - Page is not Found"
              fill
              priority
              className="object-contain"
            />
          </div>


          {/* Messages */}
          <div className="space-y-2 mt-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B5C2E] tracking-tight leading-tight">
              Sorry, Page is not Found
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#0B5C2E]">
              Please go back
            </p>
          </div>

          {/* Action Button Row */}
          <div className="flex items-center gap-2 mt-8">
            <Link
              href="/"
              className="bg-[#66CD4E] hover:bg-[#59b841] text-white font-extrabold text-xs px-8 py-4 rounded-xl uppercase tracking-wider transition-colors shadow-md flex items-center justify-center h-12"
            >
              Back To Home
            </Link>
            <Link
              href="/"
              className="bg-[#66CD4E] hover:bg-[#59b841] text-white px-4 rounded-xl transition-colors shadow-md flex items-center justify-center h-12 w-12"
              aria-label="Go home arrow"
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
