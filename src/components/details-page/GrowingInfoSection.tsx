import type { GrowingInfo } from "@/types/product";
import { Sprout, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface GrowingInfoSectionProps {
  growingInfo: GrowingInfo;
}

export function GrowingInfoSection({ growingInfo }: GrowingInfoSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                viewport={{ once: false }}
              >
                <Sprout className="h-7 w-7 text-white" />
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-veneer text-green-500 uppercase tracking-wide">
                Growing Information
              </h2>
            </div>

            {/* Title */}
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-green-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {growingInfo.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-700 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              {growingInfo.description}
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center gap-3 text-green-700 bg-green-100/70 px-4 py-2 rounded-xl w-fit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: false }}
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">
                Grown in Egypt&apos;s fertile regions
              </span>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {growingInfo.image ? (
              <img
                src={growingInfo.image}
                alt={growingInfo.title}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:shadow-green-200"
              />
            ) : (
              <div className="w-full h-96 bg-green-200 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-green-800">
                  <Sprout className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    Sustainable Growing Practices
                  </p>
                </div>
              </div>
            )}

            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
