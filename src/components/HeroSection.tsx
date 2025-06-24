
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-psi-dark text-psi-text px-4 py-16">
      {/* Background blobs */}
      <motion.div
        className="absolute top-10 left-[-10%] w-72 h-72 bg-psi-green/30 rounded-full blur-3xl"
        animate={{ x: [0, 120, 0], y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-[-10%] w-96 h-96 bg-psi-purple/30 rounded-full blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Centered content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* AI Evolution Banner */}
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-psi-green/10 to-psi-purple/10 rounded-full border border-psi-green/20 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="w-2 h-2 bg-psi-green rounded-full animate-pulse mr-3"></div>
          <span className="text-psi-green font-semibold text-sm uppercase tracking-wider">
            AI is evolving rapidly - We're evolving with it
          </span>
          <div className="w-2 h-2 bg-psi-purple rounded-full animate-pulse ml-3 delay-500"></div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Future-Proof Your Brand in{" "}
          <span className="text-psi-green">Generative AI Search</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          The current AI environment is not the future. Our strategies adapt to every shift, 
          ensuring your product's visibility is always ahead of the curve in tomorrow's Generative AI landscape.
        </motion.p>

        {/* Key differentiator */}
        <motion.div
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-psi-purple/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-psi-purple font-semibold text-lg">
            "We're building today for the Generative AI environment of tomorrow"
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
        >
          <Button
            onClick={scrollToDemo}
            className="bg-psi-green hover:bg-psi-green/80 text-black font-semibold px-8 py-4 text-lg rounded-lg
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psi-green/25 mx-auto"
          >
            See How We Adapt
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
