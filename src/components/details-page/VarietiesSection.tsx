
import { Button } from "@/components/ui/button";
import type { ProductVariety } from "@/types/product";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-natures-teal mb-12 uppercase tracking-wide text-center">
          The Most Common Varieties
        </h2>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Variety Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                <img
                  src={currentVariety.image}
                  alt={currentVariety.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4">
                <Button
                  onClick={prevVariety}
                  size="lg"
                  className="rounded-full bg-white shadow-lg hover:bg-gray-50 text-natures-teal border-2 border-natures-teal"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-4">
                <Button
                  onClick={nextVariety}
                  size="lg"
                  className="rounded-full bg-natures-teal hover:bg-natures-teal/90 text-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Variety Info */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-natures-purple">
                {currentVariety.name}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {currentVariety.description}
              </p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {varieties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-natures-teal" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
