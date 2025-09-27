
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
    <div className="bg-natures-cream min-h-screen relative">
      {/* Header */}
      <header className="bg-natures-purple text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-natures-teal mb-4 uppercase tracking-wide">
                {product.name}
              </h1>
              <p className="text-xl text-natures-lime font-medium mb-6">
                {product.alt}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
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
                    className="bg-natures-purple hover:bg-natures-purple/90 text-white"
                  >
                    {section.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        {sections.length > 0 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection(sections[0].id)}
              className="flex flex-col items-center gap-2 text-natures-teal hover:bg-white/50"
            >
              <ChevronDown className="h-6 w-6 animate-bounce" />
              <span className="text-sm">Explore</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
