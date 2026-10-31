import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ProductsHero({
  selectedCategory,
  currentDetail,
  onSelectCategory,
}) {
  return (
    <section className="relative h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="/breadcum-1.jpg"
        alt="Products catalog hero background"
        fill
        priority
        quality={80}
        className="object-cover opacity-65 transition-transform duration-[2000ms] hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="relative z-10 text-center px-4 space-y-4 max-w-4xl mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5BC242]/20 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Licence No.: LCFWD2023100392</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none font-serif">
          {selectedCategory === "All"
            ? "Our Products & Technicals"
            : selectedCategory}
        </h1>
        <p className="text-gray-200 text-sm md:text-base font-medium max-w-2xl mx-auto">
          {selectedCategory === "All"
            ? "Official technical catalog of 61 formulations: Water Soluble Grades, PGR Formulations, Chelated Micronutrients, and Oxide Micronutrients."
            : currentDetail?.subtitle ||
              "Comprehensive technical specifications, formulations, and application guides."}
        </p>
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 pt-2">
          <Link href="/" className="hover:text-[#69D34F] transition-colors">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => onSelectCategory("All")}
            className="hover:text-[#69D34F] transition-colors cursor-pointer"
          >
            Products
          </button>
          {selectedCategory !== "All" && (
            <>
              <span className="text-white/40">/</span>
              <span className="text-[#69D34F]">{selectedCategory}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
