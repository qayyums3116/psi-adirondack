
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="demo-section" className="py-20 bg-gradient-to-r from-psi-green/10 to-psi-purple/10 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-psi-text mb-6">
          Ready to dominate AI search?
        </h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Request your personalized demo now and see how PsiAdirondack Intelligence can transform your content strategy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            className="bg-psi-green hover:bg-psi-green/80 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psi-green/25"
          >
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            className="border-psi-purple text-psi-purple hover:bg-psi-purple hover:text-black px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            Schedule a Call
            <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-psi-green" />
            <span>sales@psiadirondack.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-psi-purple" />
            <span>1-800-PSI-INTEL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
