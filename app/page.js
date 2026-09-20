import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Features from "@/components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "@/components/Statistics";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Services />
        <Features />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
