import { Button } from "@/components/ui/button";
import type { PackagingOption } from "@/types/product";
import { ChevronLeft, ChevronRight, Package, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackagingSectionProps {
  packagingOptions: PackagingOption[];
}

export function PackagingSection({ packagingOptions }: PackagingSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextOption = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % packagingOptions.length);
  };

  const prevOption = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + packagingOptions.length) % packagingOptions.length);
  };

  const goToOption = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentOption = packagingOptions[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    })
  };

  return (
    <section className="bg-gradient-to-br from-natures-cream via-white to-green-50/30 py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-green-200/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-natures-pink/15 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-start mb-8 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm rounded-full px-4 py-1 border border-green-200/60 mb-3">
            <Package className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
              Premium Packaging
            </span>
            <Sparkles className="w-4 h-4 text-green-600 fill-current" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-veneer text-green-600 mb-3 uppercase tracking-wide bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text">
            Packaging Options
          </h2>
        </motion.div>

        {/* Enhanced Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 mb-10 lg:mb-12 text-start"
        >

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-3 text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-600/30">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-2xl shadow-green-500/10 p-6 lg:p-10"
          >
            {/* Enhanced Navigation Arrows */}
            <motion.button
              onClick={prevOption}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl shadow-2xl shadow-green-500/30 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            
            <motion.button
              onClick={nextOption}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl shadow-2xl shadow-green-500/30 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>

            {/* Animated Content */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentOption.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  className="w-full grid lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[400px]"
                >
                  {/* Enhanced Image */}
                  <motion.div 
                    className="flex justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative w-full max-w-sm">

                      <div className="aspect-square relative">
                        <motion.img
                          src={currentOption.image}
                          alt={currentOption.name}
                          className="w-full h-full object-contain drop-shadow-2xl"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Content */}
                  <motion.div 
                    className="text-center lg:text-left space-y-4 lg:space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-2xl lg:text-4xl font-bold text-green-900 mb-3">
                        {currentOption.name}
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto lg:mx-0"
                      />
                    </div>
                    <motion.p 
                      className="text-gray-700 text-lg leading-relaxed font-light bg-white/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {currentOption.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced Dots Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-3 mt-6"
          >
            {packagingOptions.map((option, index) => (
              <motion.button
                key={option.id}
                onClick={() => goToOption(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-green-600 scale-110 shadow-md shadow-green-500/50"
                      : "bg-gray-300 hover:bg-green-400"
                  }`}
                >
                  {index === currentIndex && (
                    <motion.span
                      layoutId="packagingDot"
                      className="absolute inset-0 bg-green-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                    {option.name}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 mt-4 text-sm flex items-center justify-center gap-2"
        >
          <span className="animate-pulse">←</span>
          Swipe or use arrows to explore packaging options
          <span className="animate-pulse">→</span>
        </motion.p>
      </div>
    </section>
  );
}