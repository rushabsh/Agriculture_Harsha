import { Building2, FileCheck2, Phone, Mail } from "lucide-react";

export default function ProductsCredentialsBanner() {
  return (
    <section className="bg-[#0D4E22] border-y border-[#5BC242]/30 py-3 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#69D34F]" />
          <span className="font-semibold text-gray-200">
            GREENGOBE AGROCHEMICAL INDUSTRIES — Wakad, Pune, Maharashtra
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-gray-300">
          <span className="inline-flex items-center gap-1.5 font-bold text-[#FDF0B4]">
            <FileCheck2 className="w-3.5 h-3.5" />
            Licence: LCFWD2023100392
          </span>
          <a
            href="tel:9325466881"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#69D34F]" />
            +91 93254 66881
          </a>
          <a
            href="mailto:greenglobeimports@gmail.com"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#69D34F]" />
            greenglobeimports@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
