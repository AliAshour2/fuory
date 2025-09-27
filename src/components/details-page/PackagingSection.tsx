
import { Button } from "@/components/ui/button";
import type { PackagingOption } from "@/types/product";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PackagingSectionProps {
  packagingOptions: PackagingOption[];
}

export function PackagingSection({ packagingOptions }: PackagingSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextOption = () => {
    setCurrentIndex((prev) => (prev + 1) % packagingOptions.length);
  };

  const prevOption = () => {
    setCurrentIndex((prev) => (prev - 1 + packagingOptions.length) % packagingOptions.length);
  };

  return (
    <div className="bg-natures-cream py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-natures-teal mb-12 uppercase tracking-wide">
          Packaging Options
        </h2>

        <div className="space-y-8 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            You can order ready-to-eat products in various packaging. Loose per package and in multi-packs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Products look attractive in our packaging. If you prefer to use your private label, we are happy to help.
            Take a look at some examples below and contact us to discuss possibilities.
          </p>
          <Button className="bg-natures-purple hover:bg-natures-purple/90 text-white">
            Contact
          </Button>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagingOptions.map((option, index) => (
              <div
                key={option.id}
                className={`transition-all duration-300 ${
                  index === currentIndex ? "scale-105 opacity-100" : "opacity-75"
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square">
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {option.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {packagingOptions.length > 3 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={prevOption}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextOption}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {packagingOptions.map((_, index) => (
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
