import { motion } from "framer-motion";
import homepageBackground from "@/assets/images/backgrounds/homepage.webp";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white"
      aria-label="Homepage Hero Section"
    >
      {/* Background Image with Overlay */}
      <img
        src={homepageBackground}
        alt="Fresh fruits and vegetables exported from Egypt"
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-20 px-6 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-dm leading-tight max-w-3xl"
        >
          Premium Fruits & Vegetables Exported from Egypt
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-lg md:text-2xl font-light text-white/90 max-w-2xl"
        >
          Supplying fresh, handpicked produce to global markets with care and
          quality.
        </motion.h2>

        <motion.a
          href="#products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all shadow-md hover:shadow-lg"
        >
          Explore Our Products
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
