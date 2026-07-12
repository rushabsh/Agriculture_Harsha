import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import About from "../components/About";
import Services from "../components/Services";
// import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
// import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Brands />
        {/* <AboutSection /> */}
        <About />
        <Services />
        <Features />
        <WhyChooseUs />
        {/* <Portfolio /> */}
        <Statistics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
