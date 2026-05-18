import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <Marquee />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

