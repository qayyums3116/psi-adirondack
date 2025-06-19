
import { Settings, CheckCircle, TrendingUp } from "lucide-react";

const PhasesSection = () => {
  const phases = [
    {
      title: "Alpha Phase",
      description: "Core automation of page creation and basic compliance checks.",
      icon: Settings,
      color: "psi-green"
    },
    {
      title: "Beta Phase", 
      description: "Advanced compliance workflows, dynamic templating, and brand-style enforcement.",
      icon: CheckCircle,
      color: "psi-purple"
    },
    {
      title: "Sigma Phase",
      description: "Continuous monitoring and iterative content optimization using graph-analysis feedback loops.",
      icon: TrendingUp,
      color: "psi-green"
    }
  ];

  return (
    <section className="py-20 bg-psi-dark text-psi-text relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-psi-green/5 via-transparent to-psi-purple/5"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-psi-green/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-psi-purple/20 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-psi-purple/20 rounded-full mb-4">
            <span className="text-psi-purple font-semibold">Delivery Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Phased Delivery: <span className="text-psi-green">Alpha → Beta → Sigma</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A systematic approach to delivering comprehensive AI-driven content automation
          </p>
        </div>

        {/* Mobile-First Responsive Design */}
        <div className="space-y-12 lg:space-y-0">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-psi-green via-psi-purple to-psi-green opacity-30"></div>
            
            <div className="space-y-24">
              {phases.map((phase, index) => (
                <div 
                  key={phase.title}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2 w-full">
                    <div className={`bg-gradient-to-br ${phase.color === 'psi-green' ? 'from-psi-green/10 to-psi-green/5' : 'from-psi-purple/10 to-psi-purple/5'} p-8 rounded-3xl border ${phase.color === 'psi-green' ? 'border-psi-green/20' : 'border-psi-purple/20'} backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                      <div className={`w-20 h-20 mb-6 rounded-2xl ${phase.color === 'psi-green' ? 'bg-psi-green/20' : 'bg-psi-purple/20'} flex items-center justify-center`}>
                        <phase.icon className={`w-10 h-10 ${phase.color === 'psi-green' ? 'text-psi-green' : 'text-psi-purple'}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full ${phase.color === 'psi-green' ? 'bg-psi-green' : 'bg-psi-purple'} flex items-center justify-center shadow-lg animate-pulse`}>
                      <phase.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="lg:w-1/2 w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Design */}
          <div className="lg:hidden">
            {phases.map((phase, index) => (
              <div key={phase.title} className="relative mb-12 last:mb-0">
                {/* Connecting Line for Mobile */}
                {index < phases.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-psi-green to-psi-purple opacity-30"></div>
                )}
                
                <div className="flex items-start gap-6">
                  {/* Phase Icon */}
                  <div className={`w-16 h-16 rounded-full ${phase.color === 'psi-green' ? 'bg-psi-green' : 'bg-psi-purple'} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <phase.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${phase.color === 'psi-green' ? 'from-psi-green/10 to-psi-green/5' : 'from-psi-purple/10 to-psi-purple/5'} p-6 rounded-2xl border ${phase.color === 'psi-green' ? 'border-psi-green/20' : 'border-psi-purple/20'} backdrop-blur-sm`}>
                      <div className={`w-14 h-14 mb-4 rounded-xl ${phase.color === 'psi-green' ? 'bg-psi-green/20' : 'bg-psi-purple/20'} flex items-center justify-center`}>
                        <phase.icon className={`w-7 h-7 ${phase.color === 'psi-green' ? 'text-psi-green' : 'text-psi-purple'}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
