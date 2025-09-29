import type { StorageAdvice } from "@/types/product";
import { Thermometer } from "lucide-react";
import { motion } from "framer-motion";

interface StorageAdviceSectionProps {
  storageAdvice: StorageAdvice;
}

const iconVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function StorageAdviceSection({ storageAdvice }: StorageAdviceSectionProps) {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <Thermometer className="h-50 w-50 text-green-500 drop-shadow-lg" />
          </motion.div>

          {/* Title + Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl md:text-6xl font-veneer text-green-500 mb-6 uppercase tracking-wide drop-shadow">
              Storage Advice
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-relaxed text-lg">
              <li>{storageAdvice.transport}</li>
              <li>{storageAdvice.shop}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
