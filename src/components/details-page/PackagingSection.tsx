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
    <section className="bg-natures-cream py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto pe-4 sm:pe-6 lg:pe-8">
        {/* Title */}
        <h2 className="text-start text-8xl sm:text-4xl lg:text-8xl font-veneer text-green-600 mb-3 sm:mb-14 lg:mb-6 uppercase tracking-wide">
          Packaging Options
        </h2>

        {/* Intro text */}
        <div className="max-w-3xl  space-y-4 mb-10 lg:mb-14 text-start">
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            You can order ready-to-eat EAT ME mangoes in various packaging. Loose per package of approximately 4 kg and in a 2-pack.
          </p>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Mangoes look attractive in Nature's Pride EAT ME packaging. If you prefer to use your private label, we are happy to help. Take a look at some examples below and contact us to discuss possibilities.
          </p>
          <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
            Contact
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl  p-6 sm:p-8 lg:p-10">
            {/* Navigation arrows */}
            <button
              onClick={prevOption}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-natures-teal hover:bg-natures-teal hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextOption}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-natures-teal hover:bg-natures-teal hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {packagingOptions.map((option) => (
                <div
                  key={option.id}
                  className="w-full flex-shrink-0 flex justify-center px-4"
                >
                  <div className="relative w-full max-w-sm">
                    <div className="aspect-square h-60">
                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {packagingOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-green-600"
                    : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer instruction */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Swipe or use arrows to explore packaging options
        </p>
      </div>
    </section>
  );
}
