import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutAgrigo from "@/components/About/AboutAgrigo";
import AgricultureIntelligence from "@/components/About/AgricultureIntelligence";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Breadcrumb Header */}
      <section className="relative h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black select-none">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: "url('/breadcum-1.jpg')" }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 space-y-4 max-w-3xl mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#5BC242]/20 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
            Sustainable Agriculture
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none font-serif">
            About GreenGlobe
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 pt-2">
            <a href="/" className="hover:text-[#69D34F] transition-colors">Home</a>
            <span className="text-white/40">/</span>
            <span className="text-[#69D34F]">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-1">
        <AboutAgrigo />
        < AgricultureIntelligence />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
