import { Button } from "@/components/ui/button";
import type { ProductVariety } from "@/types/product";
import { ChevronLeft, ChevronRight, Star, Leaf } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VarietiesSectionProps {
  varieties: ProductVariety[];
}

export function VarietiesSection({ varieties }: VarietiesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextVariety = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % varieties.length);
  };

  const prevVariety = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + varieties.length) % varieties.length);
  };

  const goToVariety = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentVariety = varieties[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -10 : 10,
    })
  };

  const infoVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* Title - Reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-2 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm rounded-full px-4 py-1 border border-green-200/60 mb-2">
            <Star className="w-4 h-4 text-green-600 fill-current" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
              Premium Varieties
            </span>
            <Leaf className="w-4 h-4 text-green-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-veneer text-green-600 mb-2 uppercase tracking-wide ">
            Our Varieties
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto font-light">
            Discover the unique characteristics of each variety
          </p>
        </motion.div>

        {/* Content Container - Reduced spacing */}
        <div className="relative flex-1 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[400px]">
          
          {/* Image Carousel */}
          <motion.div className="relative flex items-center justify-center p-2">
            <div className="relative w-full max-w-md">
              
              {/* Main Carousel Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-xl shadow-green-500/10">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentVariety.image}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                      rotateY: { duration: 0.5 }
                    }}
                    className="w-full h-full"
                  >
                    <img
                      src={currentVariety.image}
                      alt={currentVariety.name}
                      className="w-full h-full object-contain p-6 transform transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Thumbnail Carousel */}
                {varieties.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex gap-1 bg-black/20 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                      {varieties.map((variety, index) => (
                        <motion.button
                          key={variety.name}
                          onClick={() => goToVariety(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentIndex
                              ? "border-green-500 shadow-md shadow-green-500/50 scale-105"
                              : "border-white/30 hover:border-green-300"
                          }`}
                        >
                          <img
                            src={variety.image}
                            alt={variety.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover transition-transform duration-300 hover:scale-110"
                          />
                          {index === currentIndex && (
                            <motion.div
                              layoutId="activeThumb"
                              className="absolute inset-0 bg-green-500/20 border-2 border-green-400 rounded-lg"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full shadow-lg z-10"
              >
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {currentIndex + 1}/{varieties.length}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Variety Info - Reduced spacing */}
          <motion.div className="flex flex-col justify-center p-4 space-y-4 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentVariety.name}
                custom={direction}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold text-green-900 leading-tight mb-2">
                    {currentVariety.name}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  />
                </div>
                
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-light bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  {currentVariety.description}
                </p>

                {/* Features List */}
                {currentVariety.features && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  >
                    {currentVariety.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2 text-green-800"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="w-1.5 h-1.5 bg-green-500 rounded-full"
                        />
                        <span className="text-xs font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Dots Navigation - Reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-3 mt-4"
        >
          {varieties.map((variety, index) => (
            <motion.button
              key={variety.name}
              onClick={() => goToVariety(index)}
              whileHover={{ scale: 1.1 }}
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
                    layoutId="activeDot"
                    className="absolute inset-0 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Navigation Arrows - Smaller */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 z-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={prevVariety}
              size="sm"
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-600/40 transition-all duration-300 group backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="absolute top-1/2 right-2 -translate-y-1/2 z-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={nextVariety}
              size="sm"
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-600/40 transition-all duration-300 group backdrop-blur-sm border border-white/20"
            >
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}