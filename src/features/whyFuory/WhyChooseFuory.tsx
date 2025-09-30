import { motion } from "framer-motion";
import { Leaf, Truck, Package, Droplet, Sprout } from "lucide-react";
import whyBackground from "@/assets/images/whybackground.webp";

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const iconVariants = {
  hidden: { rotate: -90, opacity: 0, scale: 0.5 },
  visible: { rotate: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const WhyChooseFuory = () => {
  const items = [
    {
      title: "Agriculture",
      text: "Applying International Standards in Agriculture and Irrigation.",
      icon: <Droplet className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Harvest",
      text: "Harvest using modern methods according to International Terms and Quality Standards.",
      icon: <Leaf className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Packing and Transport",
      text: "Hygiene and Safety packing and Transportation as per set procedures and conditions of International Quality and Hygiene Standards.",
      icon: <Package className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Product Delivery",
      text: "High-level and best quality Product delivery.",
      icon: <Truck className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Growing Plants",
      text: "Our goal is Planting as per client’s needs to meet all orders and demands.",
      icon: <Sprout className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-20 px-6 text-white" style={{backgroundImage: `url(${whyBackground})`}}>
      <div className="absolute inset-0" />
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-7xl font-bold mb-12 font-dm"
        >
          Why Choose <span className="text-green-400">Fuory</span>
        </motion.h2>

        {/* Grid with stagger animation */}
        <motion.div
          className="grid md:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              viewport={{once:false}}
              className="flex flex-col items-center text-center backdrop-blur-3xl rounded-2xl p-6 shadow-lg cursor-pointer"
            >
              {/* Icon with pop animation */}
              <motion.div variants={iconVariants} className="mb-4">
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseFuory;
