import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialistsSection from "@/components/SpecialistsSection";
import PricingSection from "@/components/PricingSection";
import EcosystemSection from "@/components/EcosystemSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <SpecialistsSection />
      <PricingSection />
      <EcosystemSection />
      <TestimonialsSection />
      <FAQSection />
      <KnowledgeSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
};

export default Index;
