import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  ShoppingCart,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function CategoryDetailShowcase({
  category,
  detail,
  onBack,
}) {
  return (
    <div className="space-y-10">
      {/* Top Action / Back Button Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <button
          type="button"
          suppressHydrationWarning
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50 hover:text-[#0D4E22] transition-colors cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Categories</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
          <span>Category:</span>
          <span className="px-3 py-1 bg-[#0D4E22] text-white rounded-full">
            {category}
          </span>
          <span className="px-2.5 py-1 bg-[#5BC242]/20 text-[#0D4E22] rounded-full">
            {detail.grades?.length || 0} Grades Listed
          </span>
        </div>
      </div>

      {/* Hero Overview Showcase */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Description Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#5BC242]/15 border border-[#5BC242]/30 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#0D4E22]">
            <Sparkles className="w-3.5 h-3.5 text-[#469A35]" />
            <span>{detail.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D4E22] font-serif tracking-tight leading-tight">
            {detail.title}
          </h2>

          <p className="text-base sm:text-lg font-semibold text-gray-700 leading-snug">
            {detail.subtitle}
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {detail.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0D4E22] hover:bg-[#093718] text-white font-bold rounded-2xl text-sm transition-all shadow-md gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Request Bulk Quote & COA</span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FDF0B4] hover:bg-[#fae68f] text-black font-bold rounded-2xl text-sm transition-all shadow-xs gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Technical Desk</span>
            </a>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-6 flex items-center justify-center group">
            <div className="relative w-full h-full">
              <Image
                src={detail.primaryImage}
                alt={detail.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain object-center group-hover:scale-104 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/65 backdrop-blur-md rounded-full text-[11px] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#69D34F]" />
                Lab Assayed • Licence: LCFWD2023100392
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
