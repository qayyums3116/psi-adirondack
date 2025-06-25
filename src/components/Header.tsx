
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Solutions", href: "#ai-seeding-strategy" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#demo-section" }
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "ai-seeding-strategy", 
        "about",
        "how-it-works",
        "pricing", 
        "testimonials",
        "demo-section"
      ];
      const scrollPosition = window.scrollY + 150;

      // Check sections in reverse order to prioritize lower sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const sectionId = href.substring(1);
    // Smooth scroll to section
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-psi-dark/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Greek Psi Symbol */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-psi-green to-psi-purple rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">Ψ</span>
            </div>
            <span className="text-psi-text font-bold text-xl">PsiAdirondack</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-colors duration-200 text-sm whitespace-nowrap ${
                    isActive 
                      ? 'text-psi-green font-semibold' 
                      : 'text-gray-300 hover:text-psi-green'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              onClick={scrollToDemo}
              className="bg-psi-green hover:bg-psi-green/80 text-black font-semibold"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-psi-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`transition-colors duration-200 text-left ${
                      isActive 
                        ? 'text-psi-green font-semibold' 
                        : 'text-gray-300 hover:text-psi-green'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <Button 
                onClick={scrollToDemo}
                className="bg-psi-green hover:bg-psi-green/80 text-black font-semibold mt-4"
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
