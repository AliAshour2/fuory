import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { ChevronDown, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

interface ProductHeroProps {
  product: Product;
  sections: Section[];
  onNavigateToSection: (sectionId: string) => void;
}

export function ProductHero({
  product,
  sections,
  onNavigateToSection,
}: ProductHeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onNavigateToSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-green-50/30 to-natures-pink/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-natures-pink/15 rounded-full blur-3xl"
        />
        
        {/* Animated leaves */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-5 text-green-300/40"
        >
          <Leaf className="w-8 h-8" />
        </motion.div>

      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200/60"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 uppercase tracking-wide">
                Fresh & Organic
              </span>
            </motion.div>

            {/* Product Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-veneer text-natures-teal mb-6 uppercase tracking-tight leading-[0.9]"
            >
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                {product.name.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Alternative Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl text-green-600 font-light mb-8 italic"
            >
              {product.alt}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm"
            >
              {product.description}
            </motion.p>

            {/* Section Navigation Buttons */}
            {sections.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {sections.slice(0, 2).map((section, index) => (
                  <motion.div
                    key={section.id}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      onClick={() => scrollToSection(section.id)}
                      className="group relative bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 overflow-hidden"
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        {section.label}
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl -z-10"
              />
              
              {/* Image container */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-96 w-full max-w-lg rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-2xl shadow-green-500/10"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transform transition duration-700 hover:scale-110"
                />
                

              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        {sections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(sections[0].id)}
                className="group flex flex-col items-center gap-3 text-natures-teal/80 hover:text-natures-teal hover:bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 transition-all duration-300 border border-white/20"
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex flex-col items-center"
                >
                  <ChevronDown className="h-6 w-6 mb-1" />
                  <span className="text-sm font-medium">Explore More</span>
                </motion.div>
                <motion.div
                  className="w-px h-6 bg-gradient-to-b from-transparent via-natures-teal/50 to-transparent"
                  animate={{ height: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}