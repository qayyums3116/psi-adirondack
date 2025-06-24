

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AIEvolutionSection from "@/components/AIEvolutionSection";
import PhasesSection from "@/components/PhasesSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SmartApproachSection from "@/components/SmartApproachSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTASection from "@/components/FinalCTASection";
import AISeedingStrategySection from "@/components/AISeedingStrategySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-psi-dark font-inter relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-psi-dark via-gray-900 to-psi-dark"></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="animate-pulse absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-psi-green to-transparent"></div>
          <div className="animate-pulse absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-psi-purple to-transparent delay-1000"></div>
          <div className="animate-pulse absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-psi-green to-transparent delay-2000"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-psi-green rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-psi-purple rounded-full animate-bounce opacity-40 delay-500"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-psi-green rounded-full animate-bounce opacity-50 delay-1000"></div>
        <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-psi-purple rounded-full animate-bounce opacity-30 delay-1500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-psi-green/30 rotate-45 animate-spin opacity-20" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-20 w-12 h-12 border border-psi-purple/30 rotate-12 animate-spin opacity-25" style={{animationDuration: '15s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <div id="home">
            <HeroSection />
          </div>
          <AIEvolutionSection />
          <div id="ai-seeding-strategy">
            <AISeedingStrategySection />
          </div>
          <div id="about">
            <PhasesSection />
            <ValuePropositionSection />
            <div id="how-it-works">
              <HowItWorksSection />
            </div>
            <SmartApproachSection />
            <TargetAudienceSection />
          </div>
          <div id="pricing">
            <PricingSection />
          </div>
          <div id="testimonials">
            <TestimonialSection />
          </div>
          <FinalCTASection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
