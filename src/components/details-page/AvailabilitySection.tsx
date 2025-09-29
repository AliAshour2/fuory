import type { AvailabilityMonth } from "@/types/product";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface AvailabilitySectionProps {
  availability: AvailabilityMonth[];
}

export function AvailabilitySection({ availability }: AvailabilitySectionProps) {
  return (
    <section className="bg-natures-pink py-10 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-veneer text-green-500 mb-12 text-center uppercase tracking-widest"
        >
          Availability
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {availability.map((month) => (
            <motion.div
              key={month.month}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`flex flex-col items-center p-4 rounded-xl shadow-sm transition-transform duration-300 ${
                month.available
                  ? "bg-gradient-to-br from-green-100 via-green-200 to-green-50 hover:scale-105"
                  : "bg-gray-200 opacity-60"
              }`}
            >
              {/* Month */}
              <h3
                className={`text-sm sm:text-base md:text-lg font-bold mb-3 uppercase tracking-wide ${
                  month.available ? "text-green-700" : "text-gray-500"
                }`}
              >
                {month.month}
              </h3>

              {/* Status */}
              <div className="flex justify-center">
                {month.available ? (
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-400 flex items-center justify-center" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
