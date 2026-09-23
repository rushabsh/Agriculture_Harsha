"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log unexpected runtime error
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center mt-16">
        <div className="max-w-lg mx-auto flex flex-col items-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shadow-sm">
            <AlertCircle className="w-10 h-10 stroke-[1.8]" />
          </div>

          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 bg-[#5BC242]/15 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D4E22]">
              System Notice
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D4E22] tracking-tight font-serif">
              Something Went Wrong
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed font-medium">
              We encountered an unexpected error while loading this page. Please try refreshing or return to the homepage.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#5BC242] hover:bg-[#4ba834] text-white font-bold rounded-xl text-sm transition-colors shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
