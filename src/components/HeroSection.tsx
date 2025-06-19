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
        className="relative z-10 max-w-3xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Dominate Generative Search with{" "}
          <span className="text-psi-green">AI-Driven Content Seeding</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Ensure your product surfaces in every AI-driven search engine with automated content seeding.
        </motion.p>

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
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
