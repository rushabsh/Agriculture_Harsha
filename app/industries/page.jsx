import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import { Sprout, ArrowRight, Factory, ShieldCheck, Layers, TestTubeDiagonal, TrendingUp, Truck } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    title: "Fertilizer Manufacturers",
    subtitle: "Bulk Primary Nutrients & Industrial Core Blending",
    desc: "We supply massive volumes of essential macro-nutrient bases like Nitrogen, Phosphorus, and Potassium compounds to major domestic production facilities, ensuring seamless raw material pipelines.",
    highlights: ["High-Volume Macro Ingredients", "Bulk Handling Logistics", "Strict Quality Spec Adherence"],
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=400&h=300&q=80",
    icon: Factory,
    iconColor: "text-[#0D4E22]",
  },
  {
    id: 2,
    title: "Agrochemical Companies",
    subtitle: "Active Compounds & Stable Base Formulations",
    desc: "Partnering with agrochemical formulation plants to source pure tech-grade ingredients, processing agents, and vital additives required for premium crop protection products.",
    highlights: ["Tech-Grade Chemical Sourcing", "Formulation-Ready Bases", "Batch Consistency Guarantees"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&h=400&q=80",
    icon: ShieldCheck,
    iconColor: "text-logo-blue",
  },
  {
    id: 3,
    title: "Contract Manufacturing Units",
    subtitle: "Flexible Sourcing Options for Third-Party Blenders",
    desc: "Providing highly adaptive supply arrangements for job-work and private label blending operations that require fluctuating, responsive input volumes without sacrificing quality.",
    highlights: ["Just-In-Time Delivery Integration", "Custom Packaging Specifications", "Flexible Minimum Order Quantities"],
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&h=400&q=80",
    icon: Layers,
    iconColor: "text-logo-red",
  },
  {
    id: 4,
    title: "Micronutrient Manufacturers",
    subtitle: "Essential Trace Elements & Chelated Chemical Compounds",
    desc: "Sourcing vital trace elements including Zinc, Boron, Iron, and Manganese derivatives required for the production of advanced specialty and crop-specific secondary nutrition systems.",
    highlights: ["Chelated Element Precursors", "High Solubility Profiles", "Advanced Purity Testing Matrix"],
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&h=400&q=80",
    icon: TestTubeDiagonal,
    iconColor: "text-logo-blue",
  },
  {
    id: 5,
    title: "Traders and Distributors",
    subtitle: "B2B Wholesale Portfolios & Merchant Distribution Networks",
    desc: "Fueling regional distribution lines with stable pricing, reliable bulk allocations, and verified testing certifications to keep trade inventories moving fluidly across states.",
    highlights: ["Transparent Tiered Pricing", "Verified Lab Testing Sheets", "Regional Multi-Hub Distribution"],
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&h=400&q=80",
    icon: TrendingUp,
    iconColor: "text-[#0D4E22]",
  },
  {
    id: 6,
    title: "Agricultural Input Companies",
    subtitle: "Complete Portfolio Sourcing for Field Retail Networks",
    desc: "Helping multi-product crop input brands diversify their retail shelf catalog by delivering ready-to-process or premium raw materials for mainstream local brands.",
    highlights: ["Diverse Ingredient Catalog", "Year-Round Freight Allocation", "Scalable Seasonal Sourcing Plans"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&h=400&q=80",
    icon: Truck,
    iconColor: "text-logo-red",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Breadcrumb Header */}
      <section className="relative h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: "url('/breadcum-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 space-y-4 max-w-3xl mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#5BC242]/20 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
            Sectors & Partnerships
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none font-serif">
            Industries We Serve
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-medium max-w-xl mx-auto">
            From large commercial growers to research organizations, we deliver targeted agricultural inputs and automation.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 pt-2">
            <a href="/" className="hover:text-[#69D34F] transition-colors">Home</a>
            <span className="text-white/40">/</span>
            <span className="text-[#69D34F]">Industries</span>
          </div>
        </div>
      </section>

      {/* Main Content Asymmetric Grid List */}
      <main className="flex-1 bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">

          {/* Introductory Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#469A35] font-bold text-xs uppercase tracking-wider">
              <Sprout className="w-4 h-4" />
              <span>Industry Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D4E22] tracking-tight leading-tight">
              Tailored Farming Solutions For Every Enterprise
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
              We understand that different sectors require distinct operational scales, regulations, and technologies. Discover how we empower each industry.
            </p>
          </div>

          {/* Asymmetric Alternating Layout */}
          <div className="space-y-20 md:space-y-32">
            {industries.map((ind, index) => {
              const IconComp = ind.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={ind.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  {/* Image Block: Dynamic Order based on Index */}
                  <div
                    className={`lg:col-span-6 flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <div className="w-full aspect-[4/3] max-w-[560px] relative rounded-[28px] overflow-hidden shadow-md group">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Text Details Block */}
                  <div
                    className={`lg:col-span-6 space-y-6 text-left flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    {/* Badge Icon Header */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-[#FAF8F2] border border-gray-100 rounded-2xl flex items-center justify-center shadow-xs ${ind.iconColor || "text-[#0D4E22]"}`}>
                        <IconComp className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#469A35]">
                          Enterprise Sector
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0D4E22] tracking-tight">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-gray-900 leading-relaxed">
                      {ind.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">
                      {ind.desc}
                    </p>

                    {/* Bullet Highlights Grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {ind.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-[#5BC242] rounded-full mt-2 shrink-0" />
                          <span className="text-xs sm:text-sm font-bold text-gray-700 leading-tight">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Contact Link button */}
                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0D4E22] hover:text-[#469A35] uppercase tracking-wider transition-colors"
                      >
                        <span>Learn More Sourcing Options</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* Brands & Partnership Slider Section */}
      <section className="bg-[#FAF8F2] py-16">
        <Brands />
      </section>
      {/* Client Success Testimonials */}
      <Testimonials />
      <Footer />
    </div>
  );
}
