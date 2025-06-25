import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Globe, MessageCircle, Users, Code, Brain } from "lucide-react";

const platforms = [
  {
    id: 1,
    name: "Wikipedia",
    icon: Globe,
    title: "Automated Page Creation",
    description: "Automated page creation with optimized content for high visibility in the world's largest knowledge base.",
    strategy: "Maximize visibility on Wikipedia with automated product pages that establish authoritative presence.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 2,
    name: "Quora",
    icon: MessageCircle,
    title: "Expert Q&A Engagement",
    description: "Targeting high-traffic Q&A forums with branded content to engage users and generate quality leads.",
    strategy: "Engage in relevant conversations on Quora with expert-driven content that positions you as a thought leader.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10"
  },
  {
    id: 3,
    name: "Reddit",
    icon: Users,
    title: "Community Integration",
    description: "Strategic community engagement with authentic content that drives organic visibility and brand awareness.",
    strategy: "Build authentic presence in relevant Reddit communities with valuable, engaging content.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10"
  },
  {
    id: 4,
    name: "Stack Overflow",
    icon: Code,
    title: "Technical Authority",
    description: "Establish technical expertise through strategic answers and content in developer communities.",
    strategy: "Dominate technical discussions with expert solutions that showcase your product's capabilities.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: 5,
    name: "Generative AI Engines",
    icon: Brain,
    title: "AI Search Optimization",
    description: "Ensure your product surfaces in AI search results through automated content seeding and continuous optimization.",
    strategy: "Dominate AI search engines like ChatGPT by embedding your brand into the next-gen AI ecosystem.",
    color: "from-psi-green to-psi-purple",
    bgColor: "bg-gradient-to-r from-psi-green/10 to-psi-purple/10"
  }
];

const AISeedingStrategySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % platforms.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % platforms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentPlatform = platforms[currentSlide];
  const IconComponent = currentPlatform.icon;

  return (
    <section className="relative py-12 md:py-20 bg-psi-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-psi-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-40 md:w-80 h-40 md:h-80 bg-psi-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-psi-text mb-4 md:mb-6">
            AI Seeding Strategy
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-platform visibility approach designed for the evolving AI landscape
          </p>
        </motion.div>

        {/* Slideshow Container */}
        <div className="relative">
          {/* Main Slide Display */}
          <div className="relative h-[600px] sm:h-[500px] md:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`absolute inset-0 ${currentPlatform.bgColor} opacity-20`}></div>
                
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                  {/* Platform Icon */}
                  <motion.div
                    className="mb-6 md:mb-8 flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className={`p-4 md:p-6 rounded-full bg-gradient-to-r ${currentPlatform.color} shadow-2xl`}>
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </motion.div>

                  {/* Platform Name */}
                  <motion.h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-psi-text mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {currentPlatform.name}
                  </motion.h3>

                  {/* Platform Title */}
                  <motion.h4
                    className="text-lg md:text-xl lg:text-2xl font-semibold text-psi-green mb-4 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {currentPlatform.title}
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {currentPlatform.description}
                  </motion.p>

                  {/* Strategy */}
                  <motion.p
                    className="text-sm md:text-base text-psi-purple font-medium mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {currentPlatform.strategy}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Button className="bg-psi-green hover:bg-psi-green/80 text-black font-semibold px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg transition-all duration-300 hover:scale-105">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-gray-800/80 hover:bg-gray-700/80 text-psi-text rounded-full transition-all duration-300 hover:scale-110 z-10"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-gray-800/80 hover:bg-gray-700/80 text-psi-text rounded-full transition-all duration-300 hover:scale-110 z-10"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
            {platforms.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-psi-green scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-psi-text mb-3 md:mb-4">
            Ready to Dominate AI Search?
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
            Our platform adapts to every shift in the AI landscape, ensuring your visibility today and tomorrow.
          </p>
          <Button className="bg-psi-purple hover:bg-psi-purple/80 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-all duration-300 hover:scale-105">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AISeedingStrategySection;
