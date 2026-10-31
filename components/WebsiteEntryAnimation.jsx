"use client";

import { useEffect, useState } from "react";

export default function WebsiteEntryAnimation() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("loading"); // "loading" | "exiting" | "done"

  useEffect(() => {
    // Smooth progress counter from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.max(1, Math.floor((100 - prev) * 0.08) + 1);
        return Math.min(100, prev + step);
      });
    }, 40);

    // Trigger exit animation after progress finishes
    const exitTimer = setTimeout(() => {
      setStage("exiting");
    }, 2400);

    // Unmount completely
    const removeTimer = setTimeout(() => {
      setStage("done");
    }, 3100);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-between py-12 sm:py-16 px-4 bg-[#FCFBF8] select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        stage === "exiting"
          ? "opacity-0 scale-102 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* =========================================================================
          1. TOP BRANDING SECTION (Exact replica of user's image)
      ========================================================================= */}
      <div className="flex flex-col items-center text-center mt-4 sm:mt-8 animate-fadeIn">
        {/* Rounded Green App Icon with White Twin Leaves */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[26px] bg-[#1E7A34] shadow-[0_14px_34px_rgba(30,122,52,0.22)] flex items-center justify-center mb-6 transition-transform hover:scale-105 duration-300">
          <svg
            className="w-11 h-11 sm:w-13 sm:h-13 text-white drop-shadow-xs"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            {/* Left Leaf */}
            <path d="M30.5 44C21 39 16 28 17.5 17C28 18 36 24 35.5 35C35.5 39 33.5 42.5 30.5 44Z" />
            {/* Right Leaf */}
            <path d="M33.5 44C43 39 48 28 46.5 17C36 18 28 24 28.5 35C28.5 39 30.5 42.5 33.5 44Z" />
          </svg>
        </div>

        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight font-serif text-[#0D4E22] leading-none mb-2">
          Green<span className="text-[#2E7D32]">Globe</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#1E7A34] mb-2.5">
          AGROCHEMICAL INDUSTRIES
        </p>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-gray-500 font-normal">
          Growing a greener tomorrow.
        </p>
      </div>

      {/* =========================================================================
          2. CENTER ANIMATED LANDSCAPE & TRACTOR TRACK
      ========================================================================= */}
      <div className="w-full max-w-2xl relative my-auto py-8">
        {/* Background Subtle Hills & Trees Silhouette */}
        <div className="relative w-full h-28 overflow-hidden pointer-events-none">
          {/* Subtle rolling distant hill */}
          <svg
            className="absolute bottom-4 left-0 w-full h-16 text-[#EBF2E8]/70"
            viewBox="0 0 800 80"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,60 Q180,20 380,45 T750,30 Q800,45 800,60 L800,80 L0,80 Z" />
          </svg>

          {/* Nearer soft hill */}
          <svg
            className="absolute bottom-4 left-0 w-full h-12 text-[#E4EDE0]/80"
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,45 Q260,25 500,40 T800,35 L800,60 L0,60 Z" />
          </svg>

          {/* Minimalist Background Foliage / Trees */}
          <div className="absolute bottom-5 left-[12%] w-2.5 h-7 bg-[#B2D0AB] rounded-full opacity-60" />
          <div className="absolute bottom-5 left-[15%] w-2 h-5 bg-[#C0D9B9] rounded-full opacity-50" />
          <div className="absolute bottom-5 left-[68%] w-2.5 h-8 bg-[#B2D0AB] rounded-full opacity-60" />
          <div className="absolute bottom-5 left-[71%] w-2 h-6 bg-[#C0D9B9] rounded-full opacity-50" />
        </div>

        {/* Ground Track Line */}
        <div className="relative w-full h-[2px] bg-[#D7DDD4] mt-[-16px]">
          {/* Moving Road Dashes */}
          <div className="absolute inset-x-0 -top-3 h-2 overflow-hidden opacity-40">
            <div className="w-[200%] h-full flex gap-12 animate-[tractorTrack_1.8s_linear_infinite]">
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
              <div className="w-8 h-[2px] bg-gray-400 rounded-full shrink-0" />
            </div>
          </div>
        </div>

        {/* Milestone Signpost on the Right (Card with Leaf Logo) */}
        <div className="absolute right-12 sm:right-24 bottom-[30px] flex flex-col items-center pointer-events-none z-10">
          {/* Milestone Pole */}
          <div className="w-[1.5px] h-10 bg-[#D1D5DB]" />
          {/* Milestone White Rounded Square Badge */}
          <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center -mt-2">
            <svg
              className="w-6 h-6 text-[#1E7A34]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21C6.5 17.5 4 11 5 4C11 4.5 16 7.5 16.5 14C16.5 17 14.5 19.5 12 21Z" />
              <path
                d="M12 21C17.5 17.5 20 11 19 4C13 4.5 8 7.5 7.5 14C7.5 17 9.5 19.5 12 21Z"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* =====================================================================
            ANIMATED TRACTOR DRIVING ON FIELD
        ===================================================================== */}
        <div
          className="absolute bottom-[30px] z-20 transition-all duration-300 ease-out"
          style={{
            left: `calc(10% + (${progress} * 0.55%))`,
          }}
        >
          {/* Subtle Suspension Bounce */}
          <div className="relative animate-[tractorBounce_0.35s_ease-in-out_infinite_alternate]">
            {/* Animated Soil Dust Particles behind Plow */}
            <div className="absolute -left-6 bottom-1 flex items-center gap-1 opacity-75">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7C7B0] animate-[soilDust_0.4s_ease-out_infinite]" />
              <span className="w-2 h-2 rounded-full bg-[#E5D8C5] animate-[soilDust_0.45s_ease-out_infinite_0.1s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBBBA4] animate-[soilDust_0.5s_ease-out_infinite_0.2s]" />
            </div>

            {/* Exhaust Smoke Puff */}
            <div className="absolute left-10 -top-4 pointer-events-none">
              <span className="block w-2 h-2 rounded-full bg-gray-300/80 animate-[smokePuff_0.6s_ease-out_infinite]" />
            </div>

            {/* Complete Vector Tractor Illustration */}
            <svg
              className="w-24 h-16 sm:w-28 sm:h-18"
              viewBox="0 0 140 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* --- TILLER / PLOW ATTACHMENT BEHIND --- */}
              <g stroke="#2B2B2B" strokeWidth="2.5" strokeLinecap="round">
                <line x1="8" y1="62" x2="26" y2="60" />
                <line x1="14" y1="62" x2="10" y2="72" />
                <line x1="20" y1="61" x2="17" y2="73" />
                <line x1="26" y1="60" x2="24" y2="72" />
              </g>

              {/* --- FARMER IN HAT --- */}
              {/* Farmer Body */}
              <rect
                x="38"
                y="38"
                width="14"
                height="16"
                rx="3"
                fill="#3F7A3E"
                stroke="#1B4D1B"
                strokeWidth="1.5"
              />
              {/* Farmer Head */}
              <circle cx="45" cy="30" r="5.5" fill="#F8D4B4" />
              {/* Farmer Hat Brim */}
              <ellipse cx="45" cy="27" rx="9" ry="2.5" fill="#4B7744" />
              {/* Farmer Hat Crown */}
              <path
                d="M40 27 C40 21, 50 21, 50 27 Z"
                fill="#3B6335"
                stroke="#2A4725"
                strokeWidth="0.8"
              />
              {/* Farmer Arm & Steering Wheel */}
              <line
                x1="46"
                y1="43"
                x2="54"
                y2="45"
                stroke="#F8D4B4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Steering Column & Wheel */}
              <line
                x1="57"
                y1="41"
                x2="54"
                y2="49"
                stroke="#2A2A2A"
                strokeWidth="2"
              />
              <circle cx="57" cy="41" r="3.5" fill="#1A1A1A" />

              {/* --- TRACTOR CHASSIS & HOOD --- */}
              {/* Rear Fender */}
              <path
                d="M26 58 C26 42, 42 42, 52 50 L52 64 L26 64 Z"
                fill="#3C8C38"
                stroke="#1B5E20"
                strokeWidth="2"
              />
              {/* Hood / Engine Body */}
              <path
                d="M50 48 L88 48 C91 48, 93 50, 93 53 L93 68 L50 68 Z"
                fill="#48A343"
                stroke="#1B5E20"
                strokeWidth="2"
              />
              {/* Hood Highlights & Grill Details */}
              <line
                x1="86"
                y1="52"
                x2="86"
                y2="64"
                stroke="#2B6B26"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="82"
                y1="52"
                x2="82"
                y2="64"
                stroke="#2B6B26"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Exhaust Pipe */}
              <path
                d="M78 48 L78 30 L80 27"
                stroke="#2A2A2A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Headlight */}
              <circle
                cx="93"
                cy="54"
                r="3"
                fill="#FFF176"
                stroke="#FBC02D"
                strokeWidth="1"
              />

              {/* --- WHEELS (Front & Rear with Yellow Rims) --- */}
              {/* LARGE REAR WHEEL */}
              <g className="animate-[wheelSpin_0.8s_linear_infinite] origin-[36px_66px]">
                {/* Outer Black Tire */}
                <circle
                  cx="36"
                  cy="66"
                  r="17"
                  fill="#2A2E2B"
                  stroke="#1A1C1A"
                  strokeWidth="2.5"
                />
                {/* Yellow Rim */}
                <circle
                  cx="36"
                  cy="66"
                  r="10.5"
                  fill="#FFCC00"
                  stroke="#E6B800"
                  strokeWidth="1.5"
                />
                {/* Center Hub */}
                <circle cx="36" cy="66" r="3.5" fill="#2A2E2B" />
                {/* Wheel Spokes */}
                <line
                  x1="36"
                  y1="56.5"
                  x2="36"
                  y2="75.5"
                  stroke="#CC9900"
                  strokeWidth="1.5"
                />
                <line
                  x1="26.5"
                  y1="66"
                  x2="45.5"
                  y2="66"
                  stroke="#CC9900"
                  strokeWidth="1.5"
                />
              </g>

              {/* SMALL FRONT WHEEL */}
              <g className="animate-[wheelSpin_0.5s_linear_infinite] origin-[86px_73px]">
                {/* Outer Black Tire */}
                <circle
                  cx="86"
                  cy="73"
                  r="11"
                  fill="#2A2E2B"
                  stroke="#1A1C1A"
                  strokeWidth="2"
                />
                {/* Yellow Rim */}
                <circle
                  cx="86"
                  cy="73"
                  r="6.5"
                  fill="#FFCC00"
                  stroke="#E6B800"
                  strokeWidth="1.2"
                />
                {/* Center Hub */}
                <circle cx="86" cy="73" r="2.2" fill="#2A2E2B" />
                {/* Wheel Spokes */}
                <line
                  x1="86"
                  y1="67"
                  x2="86"
                  y2="79"
                  stroke="#CC9900"
                  strokeWidth="1.2"
                />
                <line
                  x1="80"
                  y1="73"
                  x2="92"
                  y2="73"
                  stroke="#CC9900"
                  strokeWidth="1.2"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. BOTTOM LOADING STATUS & PROGRESS
      ========================================================================= */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-10 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
          Preparing your experience
          <span className="inline-block animate-pulse">...</span>
        </h2>

        {/* Minimalist Progress Meter */}
        <div className="w-48 sm:w-56 h-1.5 bg-[#E8ECE5] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#1E7A34] to-[#5BC242] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[11px] font-semibold text-gray-400">
          {progress}%
        </span>
      </div>

      {/* =========================================================================
          KEYFRAME STYLES
      ========================================================================= */}
      <style jsx>{`
        @keyframes wheelSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes tractorBounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-2px);
          }
        }
        @keyframes tractorTrack {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes soilDust {
          0% {
            transform: translate(0, 0) scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: translate(-12px, -6px) scale(1.4);
            opacity: 0;
          }
        }
        @keyframes smokePuff {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-10px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
