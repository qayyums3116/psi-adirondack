
import { Eye, Zap, TrendingUp } from "lucide-react";

const ValuePropositionSection = () => {
  const benefits = [
    {
      title: "Visibility Everywhere",
      description: "Your content surfaces in every AI-powered search engine, ensuring top-of-mind visibility.",
      icon: Eye,
      color: "psi-green",
      gradient: "from-psi-green/20 to-psi-green/5"
    },
    {
      title: "Automated Content Seeding",
      description: "We replace manual outreach and content publication workflows, automating product pages on Wikipedia, open blogs, Quora, and Stack Overflow.",
      icon: Zap,
      color: "psi-purple",
      gradient: "from-psi-purple/20 to-psi-purple/5"
    },
    {
      title: "Scalable SEO Uplift",
      description: "Increase SEO results while reducing overhead by up to 80% through automated compliance and content publishing.",
      icon: TrendingUp,
      color: "psi-green",
      gradient: "from-psi-green/20 to-psi-green/5"
    }
  ];

  return (
    <section className="py-24 bg-psi-dark relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-psi-dark via-gray-900/50 to-psi-dark"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-psi-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-psi-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-psi-green rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-psi-purple rounded-full animate-bounce delay-300 opacity-40"></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-psi-green rounded-full animate-bounce delay-700 opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with Enhanced Typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-psi-green/10 to-psi-purple/10 rounded-full mb-6 border border-psi-green/20">
            <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse mr-3"></div>
            <span className="text-psi-green font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse ml-3 delay-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-psi-green via-psi-purple to-psi-green bg-[length:200%_100%] animate-gradient-shift">
                PsiAdirondack
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-psi-green to-psi-purple rounded-full"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-psi-purple to-psi-green">
              Intelligence?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your content strategy with our comprehensive AI automation platform
          </p>
        </div>

        {/* Benefits in Modern Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative p-8 lg:p-10 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/30 hover:border-psi-green/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                  
                  {/* Floating Icon Container */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} border ${benefit.color === 'psi-green' ? 'border-psi-green/20' : 'border-psi-purple/20'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className={`w-10 h-10 ${benefit.color === 'psi-green' ? 'text-psi-green' : 'text-psi-purple'}`} />
                    </div>
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${benefit.color === 'psi-green' ? 'bg-psi-green' : 'bg-psi-purple'} flex items-center justify-center shadow-lg animate-pulse`}>
                      <IconComponent className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-psi-green transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${benefit.color === 'psi-green' ? 'from-psi-green to-transparent' : 'from-psi-purple to-transparent'}`}></div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${benefit.color === 'psi-green' ? 'from-psi-green/50 to-transparent' : 'from-psi-purple/50 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                {/* Connection Line for Desktop */}
                {index < benefits.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-psi-green/30 to-psi-purple/30 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with Enhanced Styling */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-psi-green/20 to-psi-purple/20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-full border border-psi-green/20 hover:border-psi-green/40 transition-all duration-300">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse delay-400"></div>
                </div>
                <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-psi-green to-psi-purple">
                  Ready to transform your content strategy?
                </span>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse delay-600"></div>
                  <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse delay-800"></div>
                  <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
