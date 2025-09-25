import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", delay: 0.1 },
    { name: "Products", href: "#products", delay: 0.2 },
    { name: "Frozen", href: "#frozen", delay: 0.3 },
  ];

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
        } px-6 py-4`}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: scrolled ? 0.85 : 1 }}
          className="flex items-center h-16 w-16 flex-shrink-0 transition-all duration-300"
        >
          <img
            src="src/assets/images/logos/fuory-logo.webp"
            className="w-full h-full object-contain"
            alt="fuory logo"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: link.delay }}
              className="relative px-4 py-2 text-lg font-light text-gray-800
                        hover:text-emerald-600 transition-colors duration-200"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400
                       text-white text-sm font-medium shadow-md hover:shadow-lg
                       transition-all duration-300"
          >
            <a href="#contact">Get in Touch</a>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full
                     bg-emerald-600 text-white font-medium text-sm transition-all duration-200
                     hover:bg-emerald-700"
          aria-label="Toggle menu"
        >
          MENU
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: link.delay, duration: 0.4 }}
                  className="text-3xl font-light text-gray-800 hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="px-8 py-3 mt-4 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400
                           text-white text-lg font-medium shadow-lg hover:shadow-xl
                           transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

