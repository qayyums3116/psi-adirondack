
import { Link, FileText, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Connect Your Brand",
      description: "Integrate your product information into our system via API or dashboard.",
      icon: Link,
      color: "psi-green"
    },
    {
      title: "Define Templates & Guidelines",
      description: "Upload your brand's guidelines including logo, tone of voice, and content standards.",
      icon: FileText,
      color: "psi-purple"
    },
    {
      title: "Go Live in Days",
      description: "Once templates are set, our system automatically creates, publishes, and monitors content across key platforms.",
      icon: Rocket,
      color: "psi-green"
    }
  ];

  return (
    <section className="py-20 bg-psi-dark text-psi-text relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-psi-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-psi-purple/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-psi-green">Works</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started with our streamlined three-step process
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={step.title} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-12 lg:gap-20`}>
              {/* Step Icon - Large Circular Design */}
              <div className="flex-shrink-0">
                <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-${step.color}/30 to-${step.color}/10 flex items-center justify-center border-2 border-${step.color}/50 hover:scale-110 transition-all duration-300`}>
                  <div className={`w-24 h-24 rounded-full bg-${step.color}/20 flex items-center justify-center`}>
                    <step.icon className={`w-12 h-12 text-${step.color}`} />
                  </div>
                  {/* Floating Icon */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center shadow-lg animate-bounce`}>
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
              
              {/* Connecting Arrow for larger screens */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-1/4' : 'left-1/4'} mt-32`}>
                  <div className={`w-20 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-psi-green to-psi-purple' : 'from-psi-purple to-psi-green'} relative`}>
                    <div className={`absolute ${index % 2 === 0 ? '-right-2' : '-left-2'} top-1/2 transform -translate-y-1/2 w-0 h-0 border-4 ${index % 2 === 0 ? 'border-l-psi-purple border-r-transparent' : 'border-r-psi-green border-l-transparent'} border-t-transparent border-b-transparent`}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
