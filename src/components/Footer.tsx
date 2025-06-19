
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-psi-text py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-psi-green to-psi-purple rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              <span className="text-psi-text font-bold text-lg">PsiAdirondack</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dominating generative search with AI-driven content seeding and automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-psi-green transition-colors">Content Automation</a></li>
              <li><a href="#" className="hover:text-psi-green transition-colors">AI Search Optimization</a></li>
              <li><a href="#" className="hover:text-psi-green transition-colors">Brand Compliance</a></li>
              <li><a href="#" className="hover:text-psi-green transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-psi-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-psi-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-psi-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-psi-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-psi-green" />
                <span>sales@psiadirondack.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-psi-purple" />
                <span>1-800-PSI-INTEL</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-psi-green" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PsiAdirondack Intelligence. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-psi-green transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-psi-green transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-psi-green transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
