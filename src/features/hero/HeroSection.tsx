import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}

      <img
        src="../src/assets/images/backgrounds/homepage.webp"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-dm">
          Welcome to Our World
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Fresh, healthy, and sustainable sweet potatoes.
        </motion.div>
        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition">
          Get Started
        </button>
        <div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
