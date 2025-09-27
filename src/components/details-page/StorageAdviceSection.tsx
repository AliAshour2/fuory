import type { StorageAdvice } from "@/types/product";
import { Thermometer } from "lucide-react";
import { motion } from "framer-motion";

interface StorageAdviceSectionProps {
  storageAdvice: StorageAdvice;
}

export const StorageAdviceSection = ({ storageAdvice }: StorageAdviceSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* Left Icon */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Thermometer className="w-60 h-60 text-green-600" strokeWidth={2.5} />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-6xl font-veneer text-green-700 uppercase mb-8 tracking-wide">
            Storage Advice
          </h2>
          <ul className="space-y-5 text-lg text-green-900">
            <motion.li
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-green-700"></span>
              <span>{storageAdvice.transport}</span>
            </motion.li>

            <motion.li
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-green-700"></span>
              <span>{storageAdvice.shop}</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
