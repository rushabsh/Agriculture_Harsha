import Image from "next/image";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function AllProductsOverview({
  products,
  categoryDetails,
  onSelectCategory,
}) {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D4E22] bg-[#5BC242]/15 px-4 py-1.5 rounded-full">
          60 Total Technical Formulations
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-serif">
          Bulk Fertilizer Raw Materials & Formulations
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Leading Importer, Manufacturer and Bulk Supplier of premium fertilizer raw materials.
          Click on any category card below to view all individual technical grades, purity levels,
          and specifications.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const IconComp = product.icon;
          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Surface with Category Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-4 flex items-center justify-center border-b border-gray-100">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#0D4E22] shadow-xs border border-gray-100">
                  {product.badge}
                </div>
                <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-xs">
                  {product.itemCount}
                </div>
              </div>

              {/* Product Details Box */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div
                    className={`flex items-center gap-2 ${
                      product.iconColor || "text-[#469A35]"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      Assayed Quality Guaranteed
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D4E22] tracking-tight leading-snug group-hover:text-[#469A35] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {product.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Supply Mode
                    </span>
                    <span className="text-xs font-bold text-gray-800">
                      {product.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {categoryDetails[product.category] ? (
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => onSelectCategory(product.category)}
                        className="inline-flex items-center justify-center py-2.5 px-3 bg-[#0D4E22] hover:bg-[#093718] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs group-hover:shadow-md gap-1.5"
                      >
                        <span>View Technicals</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <a
                        href={`/contact?subject=${encodeURIComponent(
                          product.name
                        )}`}
                        className="inline-flex items-center justify-center py-2.5 px-3 bg-[#0D4E22] hover:bg-[#093718] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs group-hover:shadow-md gap-1.5"
                      >
                        <span>Get Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href={`/contact?subject=${encodeURIComponent(
                        product.name
                      )}`}
                      className="inline-flex items-center justify-center py-2.5 px-3 bg-[#FDF0B4] hover:bg-[#fae68f] text-black text-xs font-bold rounded-xl transition-all shadow-xs gap-1.5"
                      title="Inquire about this product"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
