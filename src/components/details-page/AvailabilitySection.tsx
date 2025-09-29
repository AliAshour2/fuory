import type { AvailabilityMonth } from "@/types/product";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface AvailabilitySectionProps {
  availability: AvailabilityMonth[];
}

export function AvailabilitySection({
  availability,
}: AvailabilitySectionProps) {
  return (
    <section className="bg-gradient-to-br from-natures-pink/80 via-white to-green-50 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-veneer text-green-600 mb-4 uppercase tracking-wider relative inline-block">
            Availability
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Check when this beautiful product is in season and ready for harvest
          </p>
        </motion.div>

        {/* Enhanced Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {availability.map((month, index) => (
            <motion.div
              key={month.month}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80,
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative group"
            >
              <div
                className={`flex flex-col items-center p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
                  month.available
                    ? "bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 shadow-lg shadow-green-100/50 hover:shadow-xl hover:shadow-green-200/50 hover:border-green-300"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 opacity-75 hover:opacity-90"
                }`}
              >
                {/* Background pattern for available months */}
                {month.available && (
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-2 right-2 w-8 h-8 border-2 border-green-400 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-green-400 rounded-full"></div>
                  </div>
                )}

                {/* Month with enhanced styling */}
                <h3
                  className={`text-base sm:text-lg font-semibold mb-4 uppercase tracking-wider relative z-10 ${
                    month.available ? "text-green-800" : "text-gray-500"
                  }`}
                >
                  {month.month}
                  {month.available && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400 rounded-full"
                    />
                  )}
                </h3>

                {/* Enhanced Status Indicator */}
                <motion.div
                  className={`relative flex justify-center items-center ${
                    month.available ? "text-green-600" : "text-gray-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {month.available ? (
                    <>
                      {/* Animated checkmark background */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                        className="absolute inset-0 bg-green-500 rounded-full"
                      />
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1 + 0.5,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 relative z-10"
                      >
                        <Check className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[3]" />
                      </motion.div>

                      {/* Pulsing effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-400"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-inner relative">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 stroke-[3]" />
                    </div>
                  )}
                </motion.div>

                {/* Availability text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className={`text-xs font-medium mt-3 uppercase tracking-wide ${
                    month.available ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {month.available ? "In Season" : "Out of Season"}
                </motion.p>
              </div>

              {/* Enhanced hover effect */}
              {month.available && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 blur-md -z-10"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200/50"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm"></div>
            <span className="text-sm text-gray-600 font-medium">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-300 shadow-sm"></div>
            <span className="text-sm text-gray-600 font-medium">
              Unavailable
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
