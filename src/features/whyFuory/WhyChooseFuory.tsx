import { motion } from "framer-motion";
import {
  Leaf,
  Truck,
  Package,
  Droplet,
  Sprout,
  ArrowUpRight,
} from "lucide-react";
import whyBackground from "@/assets/images/whybackground.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const WhyChooseFuory = () => {
  const items = [
    {
      number: "01",
      title: "Agriculture",
      text: "Applying international standards in agriculture and irrigation to ensure healthy and high-quality crops.",
      icon: Droplet,
    },
    {
      number: "02",
      title: "Harvest",
      text: "Modern harvesting methods following international terms and strict quality standards.",
      icon: Leaf,
    },
    {
      number: "03",
      title: "Packing & Transport",
      text: "Safe and hygienic packing and transportation following international quality and food-safety procedures.",
      icon: Package,
    },
    {
      number: "04",
      title: "Product Delivery",
      text: "Reliable delivery of premium-quality products while maintaining freshness throughout the supply chain.",
      icon: Truck,
    },
    {
      number: "05",
      title: "Growing Plants",
      text: "Planting according to client requirements to meet specific orders, quantities, and market demands.",
      icon: Sprout,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-24 sm:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${whyBackground})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Background green glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* Decorative circles */}
      <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-white/10" />

      <div className="absolute right-20 top-20 h-16 w-16 rounded-full border border-green-400/20" />

      {/* Main container */}
      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-16 max-w-4xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-green-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
              Our Difference
            </span>

            <span className="h-px w-10 bg-green-400" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
           className="mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-5xl"
          >
            Why Choose{" "}
            <span className="relative text-green-400 
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-5xl
            ">
              Fuory ?

              
            </span>

            
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
          >
            From cultivation to delivery, we maintain strict quality standards
            at every stage to deliver fresh, reliable, and export-ready
            products to global markets.
          </motion.p>
        </div>

        {/* ================= CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                }}
                className="group relative h-full"
              >
                {/* Card glow */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    bg-green-500/10
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative flex h-full min-h-[330px]
                    flex-col overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.07]
                    p-7
                    backdrop-blur-xl
                    transition-all duration-500

                    group-hover:border-green-400/30
                    group-hover:bg-white/[0.11]
                  "
                >

                  {/* Top section */}
                  <div className="mb-8 flex items-center justify-between">

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-green-400/20
                        bg-green-400/10
                        text-green-400
                        transition-all duration-300

                        group-hover:bg-green-400
                        group-hover:text-white
                      "
                    >
                      <Icon
                        className="h-7 w-7"
                        strokeWidth={1.8}
                      />
                    </motion.div>

                    {/* Number */}
                    <span
                      className="
                        font-mono
                        text-xs
                        font-medium
                        tracking-widest
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-green-400/70
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">

                    <h3
                      className="
                        mb-4
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-white/60
                        transition-colors
                        duration-300
                        group-hover:text-white/75
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                  {/* Bottom */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/10
                      pt-5
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-wider
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-green-300
                      "
                    >
                      Fuory Standard
                    </span>

                    <motion.div
                      whileHover={{
                        x: 4,
                        y: -2,
                      }}
                      className="
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-green-400
                      "
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>

                  </div>

                  {/* Animated bottom line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-green-400
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM TRUST ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >

          {/* Decorative circles */}
          <div className="flex -space-x-2">

            <div className="h-8 w-8 rounded-full border-2 border-black/40 bg-green-500/20 backdrop-blur-sm" />

            <div className="h-8 w-8 rounded-full border-2 border-black/40 bg-green-400/20 backdrop-blur-sm" />

            <div className="h-8 w-8 rounded-full border-2 border-black/40 bg-emerald-500/20 backdrop-blur-sm" />

          </div>

          <p className="text-sm text-white/50">
            Quality-driven from{" "}
            <span className="font-medium text-white/80">
              farm to global market
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseFuory;
