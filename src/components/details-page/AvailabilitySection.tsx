
import type { AvailabilityMonth } from "@/types/product";
import { Check } from "lucide-react";

interface AvailabilitySectionProps {
  availability: AvailabilityMonth[];
}

export function AvailabilitySection({ availability }: AvailabilitySectionProps) {
  return (
    <div className="bg-natures-pink py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-natures-purple mb-12 uppercase tracking-wide">
          Availability
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {availability.map((month) => (
            <div key={month.month} className="text-center">
              <h3 className="text-xl font-bold text-natures-purple mb-4 uppercase">
                {month.month}
              </h3>
              <div className="flex justify-center">
                {month.available ? (
                  <div className="w-12 h-12 bg-natures-teal rounded-full flex items-center justify-center">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {month.available ? "Available" : "Not Available"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
