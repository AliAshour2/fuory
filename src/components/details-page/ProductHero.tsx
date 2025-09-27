import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { ArrowLeft, ChevronDown } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface ProductHeroProps {
  product: Product;
  sections: Section[];
  onNavigateToSection: (sectionId: string) => void;
}

export function ProductHero({ product, sections, onNavigateToSection }: ProductHeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onNavigateToSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 via-natures-cream to-white">
      {/* Header */}
      <header className="bg-natures-purple text-white shadow-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center gap-4 p-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 transition"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-veneer text-natures-teal mb-4 uppercase tracking-tight leading-tight drop-shadow-sm">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-green-600 font-medium mb-6">
                {product.alt}
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Section Navigation Buttons */}
            {sections.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {sections.slice(0, 2).map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-6 py-2 shadow-md transition-all hover:scale-105"
                  >
                    {section.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="h-96 w-full max-w-md rounded-2xl overflow-hidden  transform transition duration-500 hover:scale-105 hover:rotate-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Decorative Glow */}
            <div className="absolute -z-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        {sections.length > 0 && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection(sections[0].id)}
              className="flex flex-col items-center gap-2 text-natures-teal hover:bg-white/60 transition"
            >
              <ChevronDown className="h-6 w-6 animate-bounce" />
              <span className="text-sm font-medium animate-pulse">Explore</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
