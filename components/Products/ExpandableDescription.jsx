"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExpandableDescription({ text, maxHeight = "max-h-24" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const isLong = text.includes("\n") || text.length > 160;

  if (!isLong) {
    return (
      <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[1600px]" : `${maxHeight} overflow-hidden`
          }`}
        >
          <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
        {!isExpanded && (
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
        )}
      </div>

      <button
        type="button"
        suppressHydrationWarning
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D4E22] hover:text-[#469A35] transition-colors cursor-pointer py-0.5 group/btn select-none"
      >
        <span>{isExpanded ? "Show Less" : "Read More & Specifications"}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 text-[#469A35] ${
            isExpanded ? "rotate-180" : "group-hover/btn:translate-y-0.5"
          }`}
        />
      </button>
    </div>
  );
}
