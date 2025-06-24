
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Eye } from "lucide-react";

const SmartApproachSection = () => {
  const smartFeatures = [
    {
      icon: Brain,
      title: "Proprietary AI Models",
      description: "Our custom-built AI algorithms optimize content for emerging search patterns before they become mainstream.",
      tech: "Machine Learning IP"
    },
    {
      icon: Zap,
      title: "Automated Scalability",
      description: "Intelligent automation that scales content seeding across unlimited channels without human intervention.",
      tech: "Automation Engine"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced forecasting models that predict AI search trends and adapt strategies proactively.",
      tech: "Trend Prediction IP"
    },
    {
      icon: Eye,
      title: "Multi-Channel Intelligence",
      description: "Smart channel selection and content optimization across Wikipedia, Quora, Reddit, Stack Overflow, and emerging platforms.",
      tech: "Channel Optimization"
    }
  ];

  const metrics = [
    { label: "Visibility Score", description: "Comprehensive measurement of your brand's presence across AI search engines" },
    { label: "Share of Voice", description: "Your percentage of mentions compared to competitors in AI-generated responses" },
    { label: "Referral Rate", description: "Traffic and conversions driven by AI search engine recommendations" },
    { label: "Future-Readiness Index", description: "How well-positioned you are for next-generation AI search platforms" }
  ];

  return (
    <section className="py-24 bg-psi-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-psi-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-psi-purple/5 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-psi-green/10 to-psi-purple/10 rounded-full mb-6 border border-psi-green/20">
            <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse mr-3"></div>
            <span className="text-psi-green font-semibold text-sm uppercase tracking-wider">What Makes Us Smart</span>
            <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse ml-3 delay-500"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-psi-green to-psi-purple">Intellectual Property</span>
            <br />Drives Real Results
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built on proprietary technology and data science that adapts to generative search trends, 
            our platform delivers measurable results through intelligent automation.
          </p>
        </motion.div>

        {/* Smart Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {smartFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-psi-green/30 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-psi-green/20 to-psi-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-psi-green" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <span className="text-xs px-3 py-1 bg-psi-purple/20 text-psi-purple rounded-full font-semibold">
                      {feature.tech}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          className="bg-gradient-to-r from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-psi-purple/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">How We Measure Success</h3>
            <p className="text-gray-300">Data-driven metrics that evolve with AI advancement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-psi-green/5 to-psi-purple/5 rounded-xl border border-gray-700/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-psi-green mb-2">{metric.label}</h4>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-psi-green/10 to-psi-purple/10 rounded-2xl p-8 border border-psi-green/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Commitment to Results</h3>
            <p className="text-lg text-gray-300 mb-4">
              We stand by our solution and ensure every client achieves real, measurable results. 
              By doing what we say, we help your brand get the traction it deserves in AI search engines.
            </p>
            <div className="flex items-center justify-center space-x-4 text-psi-green font-semibold">
              <span>✓ Deliver on promises</span>
              <span>✓ Measurable results</span>
              <span>✓ Future-proof strategy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartApproachSection;
