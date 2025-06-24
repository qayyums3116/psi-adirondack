
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Zap } from "lucide-react";

const AIEvolutionSection = () => {
  const adaptabilityPoints = [
    {
      icon: Brain,
      title: "Predictive Strategy",
      description: "We anticipate AI search evolution before it happens, positioning your brand ahead of trends."
    },
    {
      icon: TrendingUp,
      title: "Continuous Adaptation",
      description: "Our platform evolves with every AI update, ensuring sustained visibility across new search paradigms."
    },
    {
      icon: Zap,
      title: "Future-Ready Architecture",
      description: "Built for tomorrow's AI landscape, not just today's. Your investment scales with AI advancement."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-psi-dark to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-psi-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-psi-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-psi-green/10 to-psi-purple/10 rounded-full mb-6 border border-psi-green/20">
            <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse mr-3"></div>
            <span className="text-psi-green font-semibold text-sm uppercase tracking-wider">The AI Landscape is Shifting</span>
            <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse ml-3 delay-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Today's AI Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-psi-green to-psi-purple">
              Won't Work Tomorrow
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The current AI environment is not the future AI environment. We're always looking for shifts 
            and altering our strategies based on those shifts to keep you ahead.
          </p>
        </motion.div>

        {/* Key Message */}
        <motion.div
          className="bg-gradient-to-r from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-psi-green/20 mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-psi-green/20 to-psi-purple/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">Ψ</span>
            </div>
            <h3 className="text-2xl font-bold text-psi-green">Our Core Philosophy</h3>
          </div>
          <p className="text-lg text-gray-300 italic">
            "AI is evolving rapidly, and we're always evolving with it. Our strategies are built to adapt, 
            and we ensure your product's visibility is future-proofed."
          </p>
        </motion.div>

        {/* Adaptability Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {adaptabilityPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-psi-green/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-psi-green/20 to-psi-purple/20 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-8 h-8 text-psi-green" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{point.title}</h4>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEvolutionSection;
