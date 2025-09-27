import { Button } from "@/components/ui/button";
import type { ProductVariety } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface VarietiesSectionProps {
  varieties: ProductVariety[];
}

export function VarietiesSection({ varieties }: VarietiesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVariety = () => {
    setCurrentIndex((prev) => (prev + 1) % varieties.length);
  };

  const prevVariety = () => {
    setCurrentIndex((prev) => (prev - 1 + varieties.length) % varieties.length);
  };

  const currentVariety = varieties[currentIndex];

  return (
    <section className="relative w-full h-screen flex items-center">
      <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-veneer text-green-500 mb-2 uppercase tracking-wide text-center"
        >
          Our Varieties
        </motion.h2>

        {/* Content (Image + Info) */}
        <div className="relative flex-1 grid lg:grid-cols-2 gap-6 items-center">
          {/* Variety Image */}
          <motion.div
            key={currentVariety.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center p-2"
          >
            <div className="relative  w-full max-w-md aspect-square">
              <img
                src={currentVariety.image}
                alt={currentVariety.name}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Variety Info */}
          <motion.div
            key={currentVariety.name}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center p-6 space-y-6"
          >
            <h3 className="text-3xl lg:text-5xl font-bold text-green-900 leading-tight">
              {currentVariety.name}
            </h3>
            <div className="w-20 h-1 bg-green-500 rounded-full"></div>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              {currentVariety.description}
            </p>
          </motion.div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-2">
          {varieties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-4 bg-green-600 rounded-full shadow-md"
                  : "w-4 h-4 bg-gray-300 hover:bg-green-300 rounded-full hover:scale-110"
              }`}
            >
              {index === currentIndex && (
                <span className="absolute inset-0 bg-green-500 rounded-full animate-ping"></span>
              )}
            </button>
          ))}
        </div>

        {/* Global Navigation Arrows (outside content) */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20">
          <Button
            onClick={prevVariety}
            size="lg"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-110 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20">
          <Button
            onClick={nextVariety}
            size="lg"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-110 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
