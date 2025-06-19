
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for small teams getting started",
      products: "Up to 10 products automated",
      price: "$499",
      period: "/month",
      features: [
        "10 products automated",
        "Basic compliance checks",
        "Standard templates",
        "Email support",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Growth Plan", 
      description: "Ideal for growing businesses",
      products: "Up to 50 products automated",
      price: "$1,499",
      period: "/month",
      features: [
        "50 products automated",
        "Advanced compliance workflows",
        "Custom templates & branding",
        "Priority support",
        "Weekly reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      description: "For large organizations",
      products: "100+ products, custom services",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited products",
        "Custom compliance audits",
        "Dedicated account manager",
        "24/7 phone support",
        "Real-time analytics",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-psi-dark text-psi-text">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-psi-green">Plan</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Flexible pricing options to match your automation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-gray-900/50 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-psi-green shadow-lg shadow-psi-green/10' 
                  : 'border-gray-800 hover:border-psi-purple/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-psi-green text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <p className="text-psi-green font-medium mb-4">{plan.products}</p>
                
                <div className="flex items-end justify-center mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-psi-green mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToDemo}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-psi-green hover:bg-psi-green/80 text-black'
                    : 'bg-gray-800 hover:bg-gray-700 text-psi-text border border-gray-700 hover:border-psi-purple/50'
                }`}
              >
                {plan.name === "Enterprise Plan" ? "Talk to Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <Button 
            onClick={scrollToDemo}
            variant="outline"
            className="border-psi-purple text-psi-purple hover:bg-psi-purple hover:text-black"
          >
            Talk to Sales for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
