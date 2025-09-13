import { motion } from "framer-motion";
import { Leaf, Truck, Package, Droplet, Sprout } from "lucide-react";

const WhyChooseFuory = () => {
  const items = [
    {
      title: "Agriculture",
      text: "Applying International Standards in Agriculture and Irrigation.",
      icon: <Droplet className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Harvest",
      text: "Harvest using modern methods according to International Terms and Quality Standards.",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Packing and Transport",
      text: "Hygiene and Safety packing and Transportation as per set procedures and conditions of International Quality and Hygiene Standards.",
      icon: <Package className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Product Delivery",
      text: "High-level and best quality Product delivery.",
      icon: <Truck className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Growing Plants",
      text: "Our goal is Planting as per client’s needs to meet all orders and demands.",
      icon: <Sprout className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section className="relative bg-[url('../src/assets/images/whybackground.jpeg')] bg-cover bg-center bg-no-repeat py-20 px-6 text-white">
      <div className="absolute inset-0" />
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-7xl font-bold mb-12 font-dm"
        >
          Why Choose <span className="text-green-400">Fuory</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center  backdrop-blur-xs rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFuory;
