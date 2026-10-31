import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ExpandableDescription from "./ExpandableDescription";
import { getGradeImage } from "./productsData";

export default function TechnicalGradeCard({ grade, index, category }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#5BC242]/50 group">
      {/* Card Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-3 sm:p-4 flex items-center justify-center border-b border-gray-100">
        <div className="relative w-full h-full">
          <Image
            src={getGradeImage(grade, category)}
            alt={grade.name}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#0D4E22] shadow-xs border border-gray-100">
            {grade.badge}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-xs text-white">
            Grade #{index + 1}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#0D4E22] transition-colors leading-snug">
            {grade.name}
          </h4>
          <p className="text-xs font-bold text-[#469A35]">{grade.role}</p>
          <ExpandableDescription text={grade.desc} />
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-gray-500">
            Bulk Technical / Formulated
          </span>
          <a
            href={`/contact?grade=${encodeURIComponent(grade.name)}`}
            className="inline-flex items-center text-xs font-bold text-[#0D4E22] hover:text-[#469A35] gap-1"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
