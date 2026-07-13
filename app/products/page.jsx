"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sprout, Droplet, ShoppingCart, ArrowRight, FlaskConical, TestTube, Settings } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Seeds & Soil", "Agri-Tech", "Crop Care"];

const productsData = [
  {
    id: 1,
    name: "Water Soluble Fertilizers",
    category: "Macro Nutrients",
    desc: "High-quality, high-solubility grades perfectly suited for industrial manufacturing and custom blending applications.",
    price: "Bulk / Quote Basis",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=400&h=300&q=80",
    icon: Droplet,
    iconColor: "text-[#469A35]",
  },
  {
    id: 2,
    name: "PGR Grades",
    category: "Growth Regulators",
    desc: "Reliable, high-purity raw materials engineered specifically for creating advanced plant growth formulations.",
    price: "Bulk / Quote Basis",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=400&h=300&q=80",
    icon: Sprout,
    iconColor: "text-logo-blue",
  },
  {
    id: 3,
    name: "Chelated Micronutrients",
    category: "Micronutrients",
    desc: "Premium EDTA-based individual micronutrients including Zinc, Iron, Manganese, Copper, and custom specialty blends.",
    price: "Bulk / Quote Basis",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300&q=80",
    icon: FlaskConical,
    iconColor: "text-logo-red",
  },
  {
    id: 4,
    name: "Liquid Micronutrient Formulations",
    category: "Micronutrients",
    desc: "Premium liquid nutrient solutions engineered explicitly to meet modern precision agriculture and high-efficiency requirements.",
    price: "Bulk / Quote Basis",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&h=300&q=80",
    icon: TestTube,
    iconColor: "text-logo-blue",
  },
  {
    id: 5,
    name: "Customized Solutions",
    category: "Sourcing Services",
    desc: "Tailored industrial product sourcing, specialized formulation, and supply support configured to your precise business requirements.",
    price: "Custom Allocation",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=400&h=300&q=80",
    icon: Settings,
    iconColor: "text-logo-red",
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb Hero */}
      <section className="relative h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: "url('/breadcum-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 space-y-4 max-w-3xl mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#5BC242]/20 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
            Premium Quality Inputs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none font-serif">
            Our Products
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-medium max-w-xl mx-auto">
            Explore our curated catalog of smart agricultural tools, organic soil boosters, and protective crop formulations.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 pt-2">
            <a href="/" className="hover:text-[#69D34F] transition-colors">Home</a>
            <span className="text-white/40">/</span>
            <span className="text-[#69D34F]">Products</span>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <main className="flex-1 bg-[#FAF8F2] py-16 md:py-24 px-4 sm:px-6 lg:px-8 select-none">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Category Switcher Menu */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${selectedCategory === cat
                  ? "bg-[#0D4E22] text-white shadow-md scale-102"
                  : "bg-white text-gray-700 border border-gray-200/80 hover:bg-[#FAF8F2] hover:text-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const IconComp = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Surface with Category Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#0D4E22] shadow-xs">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Details Box */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className={`flex items-center gap-2 ${product.iconColor || "text-[#469A35]"}`}>
                        <IconComp className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Quality Verified</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0D4E22] tracking-tight leading-snug group-hover:text-[#469A35] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {product.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">MSRP / Price</span>
                        <p className="text-lg font-bold text-gray-900">{product.price}</p>
                      </div>
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center p-3.5 bg-[#FDF0B4] text-black font-bold rounded-2xl hover:bg-[#fae68f] transition-all duration-300 shadow-xs group-hover:scale-102"
                        title="Inquire about this product"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        <span className="text-xs font-bold">Inquire Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Consulting Banner Block */}
          <div className="bg-[#0D4E22] rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16 text-white relative mt-16 shadow-xl">
            {/* Ambient Background Graphic Layer */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <Sprout className="w-96 h-96" />
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
                Bulk Orders & Sourcing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none font-serif text-[#FDF0B4]">
                Looking for Wholesale Supplies?
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                We accommodate bulk contract sourcing and technical setups for large-scale enterprise farming, greenhouses, and commercial agricultural retail networks.
              </p>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#5BC242] hover:bg-[#4ba834] text-white font-bold rounded-2xl text-sm transition-colors gap-2"
                >
                  <span>Consult Sourcing Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
