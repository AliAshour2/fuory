import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { ChevronDown } from "lucide-react";
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
    <div className="relative min-h-screen ">
      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-veneer text-natures-teal mb-4 uppercase tracking-tight leading-tight drop-shadow-sm"
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-600 font-medium mb-6"
            >
              {product.alt}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed"
            >
              {product.description}
            </motion.p>

            {/* Section Navigation Buttons */}
            {sections.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {sections.slice(0, 2).map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-6 py-2 shadow-md transition-all hover:scale-105"
                  >
                    {section.label}
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="h-96 w-full max-w-md rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        {sections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection(sections[0].id)}
              className="flex flex-col items-center gap-2 text-natures-teal hover:bg-white/60 transition"
            >
              <ChevronDown className="h-6 w-6 animate-bounce" />
              <span className="text-sm font-medium animate-pulse">Explore</span>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
