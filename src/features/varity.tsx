import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import variety images
import orangesImg from "@/assets/images/varity/oranges.webp";
import fruitsImg from "@/assets/images/varity/fruits.webp";
import vegetablesImg from "@/assets/images/varity/vegetables.webp";
import frozenImg from "@/assets/images/varity/frozen.webp";

const AgriculturalShowcase = () => {
  const products = [
    {
      id: "citrus",
      title: "CITRUS",
      subtitle: "Premium Egyptian Citrus",
      description:
        "Citrus fruits are one of the most important products that Egypt exports to the world. Egyptian citrus fruits are distinguished by their high quality with lower levels of salinity, varying between oranges, tangerines, lemons, and grapefruits.",
      features: [
        "High juice content",
        "Optimal sugar levels",
        "Low acidity",
        "International standards",
      ],
      image: orangesImg,
      alt: "Premium Egyptian Citrus fruits including oranges, tangerines, lemons, and grapefruits for export",
    },
    {
      id: "fresh-fruits",
      title: "FRESH FRUITS",
      subtitle: "Organically Grown Excellence",
      description:
        "Fuory provides high-quality fresh fruits from cultivation to packaging. We offer grapes, pomegranates, and figs, following international specifications to preserve fruits with their full specifications without defects.",
      features: [
        "EU approved pesticides",
        "International quality standards",
        "Perfect ripeness",
        "Export ready",
      ],
      image: fruitsImg,
      alt: "Fresh Egyptian fruits including grapes, pomegranates,watermelons, mango, strawberry, Cantaloupe, Melon, Kiwi, Tangerine, Mandarin, sweetpotato and figs for export",
    },
    {
      id: "vegetables",
      title: "VEGETABLES",
      subtitle: "Farm Fresh Quality",
      description:
        "Our fresh vegetables including potatoes, sweetpotato, Carrot, Beans,Cabbage, Broccoli, Cucumber, onions, tomatoes, and peppers are cultivated using the latest agricultural methods. We ensure products are free of pesticide residues and heavy metals through certified examination.",
      features: [
        "Pesticide residue free",
        "Heavy metal tested",
        "Safe packaging materials",
        "Food safety certified",
      ],
      image: vegetablesImg,
      alt: "Fresh Egyptian vegetables including potatoes, sweetpotato, carrot, beans, cabbage, broccoli, cucumber, onions, tomatoes, and peppers for export",
    },
    {
      id: "iqf",
      title: "IQF",
      subtitle: "Individual Quick Freezing",
      description:
        "Our IQF technology freezes products in minutes, preventing large ice crystal formation. This preserves shape, color, smell, and taste after defrost, while allowing consumers to use exact quantities needed.",
      features: [
        "Rapid freezing process",
        "Preserved nutrients",
        "Individual separation",
        "Extended shelf life",
      ],
      image: frozenImg,
      alt: "Egyptian frozen fruits and vegetables using IQF technology for export",
    },
  ];
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section className="relative min-h-screen ">
      {/* Animated floating background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-green-300/30 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-20 h-20 bg-green-400/20 rounded-full"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-600 text-6xl font-veneer font-medium tracking-wider uppercase mb-4">
            CATEGORIES
          </p>
          <span className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 font-dm">
            We believe in working with{" "}
            <span className="text-green-600 font-dm">accredited farmers</span>
          </span>
        </motion.div>

        {/* Product Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {products.map((product, index) => (
            <Button
              key={product.id}
              variant={activeProduct === index ? "default" : "outline"}
              onClick={() => setActiveProduct(index)}
              className={`px-8 py-3 text-lg font-medium transition-all duration-300 rounded-full ${
                activeProduct === index
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  : "border-green-400 text-green-600 hover:bg-green-100"
              }`}
            >
              {product.title}
            </Button>
          ))}
        </motion.div>

        {/* Active Product */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            key={products[activeProduct].id}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {products[activeProduct].title}
              </h2>
              <p className="text-xl text-green-600 font-medium mb-6">
                {products[activeProduct].subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {products[activeProduct].description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {products[activeProduct].features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl border border-green-200 bg-white/60 backdrop-blur-sm p-4 shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="px-8 py-4 text-lg font-medium bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md"
            >
              READ MORE
            </Button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            key={products[activeProduct].image}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm border border-green-200 shadow-lg">
              <motion.img
                src={products[activeProduct].image || "/placeholder.svg"}
                alt={products[activeProduct].alt}
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgriculturalShowcase;
