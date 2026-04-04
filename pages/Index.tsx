import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import QuoteModal from "@/components/QuoteModal";

const Index = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <HowItWorksSection onOpenQuote={() => setIsQuoteOpen(true)} />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default Index;
