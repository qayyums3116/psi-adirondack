
import { Building2, Palette, Users } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      title: "Enterprises",
      description: "Gain first-mover advantage by ensuring your product appears at the top of AI-generated search results.",
      icon: Building2,
      features: [
        "Enterprise-scale automation",
        "Priority AI search positioning", 
        "Advanced analytics & reporting",
        "Dedicated account management"
      ],
      color: "psi-green",
      bgPattern: "dots"
    },
    {
      title: "Digital Marketing Agencies",
      description: "Offer cutting-edge SEO and AI-driven content strategies to your clients with ease.",
      icon: Palette,
      features: [
        "White-label solutions available",
        "Multi-client dashboard",
        "Scalable pricing models",
        "Agency partner support"
      ],
      color: "psi-purple",
      bgPattern: "lines"
    },
    {
      title: "Product Teams",
      description: "Let your teams focus on strategy while our platform handles the heavy lifting of content creation and publication.",
      icon: Users,
      features: [
        "API-first integration",
        "Automated workflows",
        "Team collaboration tools",
        "Performance tracking"
      ],
      color: "psi-green",
      bgPattern: "circles"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-psi-dark relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-psi-green rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-psi-purple rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-psi-green rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-psi-purple rounded-full animate-ping delay-500"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-psi-purple/20 to-psi-green/20 rounded-full mb-6">
            <Users className="w-5 h-5 text-psi-purple" />
            <span className="text-psi-text font-semibold">Target Audience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-psi-text mb-4">
            Who Is This <span className="text-psi-purple">For</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Built for teams and organizations ready to lead in the AI-first search era
          </p>
        </div>

        {/* Masonry-style Layout */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className={`group relative overflow-hidden rounded-3xl border-2 border-${audience.color}/20 hover:border-${audience.color}/60 transition-all duration-500 hover:-translate-y-2 ${index === 1 ? 'lg:mt-12' : ''}`}
            >
              {/* Card Background with Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${audience.color}/5 to-transparent`}></div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                {audience.bgPattern === 'dots' && (
                  <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle, #1DB954 1px, transparent 1px)`, backgroundSize: '20px 20px'}}></div>
                )}
                {audience.bgPattern === 'lines' && (
                  <div className="absolute inset-0" style={{backgroundImage: `linear-gradient(45deg, #BB86FC 1px, transparent 1px)`, backgroundSize: '20px 20px'}}></div>
                )}
                {audience.bgPattern === 'circles' && (
                  <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 50% 50%, #1DB954 1px, transparent 2px)`, backgroundSize: '30px 30px'}}></div>
                )}
              </div>
              
              <div className="relative p-8">
                {/* Floating Icon */}
                <div className={`w-20 h-20 mb-6 rounded-2xl bg-${audience.color}/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <audience.icon className={`w-10 h-10 text-${audience.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-psi-text mb-4">{audience.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">{audience.description}</p>
                
                {/* Feature List with Custom Styling */}
                <div className="space-y-3">
                  {audience.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/item">
                      <div className={`w-2 h-2 bg-${audience.color} rounded-full mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200`}></div>
                      <span className="text-sm text-gray-300 group-hover/item:text-psi-text transition-colors duration-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-${audience.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
