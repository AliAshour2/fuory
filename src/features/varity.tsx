import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Snowflake,
  Sprout,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// Images
import orangesImg from "@/assets/images/varity/oranges.webp";
import fruitsImg from "@/assets/images/varity/fruits.webp";
import vegetablesImg from "@/assets/images/varity/vegetables.webp";
import frozenImg from "@/assets/images/varity/frozen.webp";

const AgriculturalShowcase = () => {
  const products = [
    {
      id: "citrus",
      number: "01",
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
      icon: Leaf,
    },
    {
      id: "fresh-fruits",
      number: "02",
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
      alt: "Fresh Egyptian fruits including grapes, pomegranates, watermelons, mango, strawberry, Cantaloupe, Melon, Kiwi, Tangerine, Mandarin, sweetpotato and figs for export",
      icon: Sprout,
    },
    {
      id: "vegetables",
      number: "03",
      title: "VEGETABLES",
      subtitle: "Farm Fresh Quality",
      description:
        "Our fresh vegetables including potatoes, sweetpotato, Carrot, Beans, Cabbage, Broccoli, Cucumber, onions, tomatoes, and peppers are cultivated using the latest agricultural methods. We ensure products are free of pesticide residues and heavy metals through certified examination.",
      features: [
        "Pesticide residue free",
        "Heavy metal tested",
        "Safe packaging materials",
        "Food safety certified",
      ],
      image: vegetablesImg,
      alt: "Fresh Egyptian vegetables including potatoes, sweetpotato, carrot, beans, cabbage, broccoli, cucumber, onions, tomatoes, and peppers for export",
      icon: ShieldCheck,
    },
    {
      id: "iqf",
      number: "04",
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
      icon: Snowflake,
    },
  ];

  const [activeProduct, setActiveProduct] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const setupCarousel = useCallback((api: CarouselApi) => {
    setCarouselApi(api);
  }, []);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(activeProduct);
    }
  }, [activeProduct, carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      setActiveProduct(selectedIndex);
    };

    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  const active = products[activeProduct];
  const ActiveIcon = active.icon;

  const nextProduct = () => {
    setActiveProduct((current) =>
      current === products.length - 1 ? 0 : current + 1
    );
  };

  const previousProduct = () => {
    setActiveProduct((current) =>
      current === 0 ? products.length - 1 : current - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f9f5] py-20 md:py-28 lg:py-32">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large soft glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-green-300/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[120px]"
        />

        {/* Decorative rings */}
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-green-600/10" />
        <div className="absolute -right-12 top-36 h-48 w-48 rounded-full border border-green-600/10" />

        <div className="absolute bottom-20 left-[-120px] h-64 w-64 rounded-full border border-green-600/10" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-20"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-green-600/50" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
              Our Products
            </span>

            <span className="h-px w-10 bg-green-600/50" />
          </div>

          {/* Heading */}
          <h2 className="font-veneer text-5xl uppercase tracking-wide text-gray-950 sm:text-6xl md:text-7xl">
            From Our Farms
            <br />
            <span className="text-green-600">To The World</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We believe in working with accredited farmers to deliver
            carefully selected Egyptian produce that meets international
            quality and export standards.
          </p>
        </motion.div>

        {/* =========================================================
            CATEGORY NAVIGATION
        ========================================================== */}

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  viewport={{ once: true }}
  className="mb-12 md:mb-16"
>
  <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-200/80 bg-white/70 p-2 shadow-sm backdrop-blur-xl sm:gap-3">
    {products.map((product, index) => {
      const Icon = product.icon;
      const isActive = activeProduct === index;

      return (
        <button
          key={product.id}
          onClick={() => setActiveProduct(index)}
          className={`group relative flex items-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 ${
            isActive
              ? "text-white shadow-lg shadow-green-900/15"
              : "text-gray-500 hover:bg-green-50 hover:text-green-700"
          }`}
        >
          {/* Animated background */}
          {isActive && (
            <motion.span
              layoutId="activeCategory"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="absolute inset-0 z-0 rounded-xl bg-green-700"
            />
          )}

          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            <Icon
              className={`h-4 w-4 transition-transform duration-300 ${
                isActive
                  ? "text-white"
                  : "text-gray-400 group-hover:scale-110 group-hover:text-green-700"
              }`}
            />

            <span
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-white"
                  : "text-gray-500 group-hover:text-green-700"
              }`}
            >
              {product.title}
            </span>
          </span>
        </button>
      );
    })}
  </div>
</motion.div>

        {/* =========================================================
            MAIN SHOWCASE
        ========================================================== */}

        <div className="hidden lg:block">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] xl:gap-24">
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 25 }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                {/* Number */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tracking-[0.25em] text-green-700">
                      CATEGORY
                    </span>

                    <span className="h-px w-12 bg-green-600/30" />
                  </div>

                  <span className="font-veneer text-5xl text-green-700/10">
                    {active.number}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-white shadow-lg shadow-green-900/10">
                      <ActiveIcon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                      {active.subtitle}
                    </span>
                  </div>

                  <h3 className="font-veneer text-6xl uppercase leading-[0.9] tracking-wide text-gray-950 xl:text-7xl">
                    {active.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl text-base leading-8 text-gray-600 xl:text-lg">
                  {active.description}
                </p>

                {/* Features */}
                <div className="mt-9 grid max-w-xl grid-cols-2 gap-3">
                  {active.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.07,
                        duration: 0.35,
                      }}
                      className="group flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <Check className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA + controls */}
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Button
                    size="lg"
                    className="group h-14 rounded-full bg-green-700 px-7 text-base font-semibold text-white shadow-lg shadow-green-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
                  >
                    Explore {active.title}

                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={previousProduct}
                      aria-label="Previous category"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-green-600 hover:bg-green-700 hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={nextProduct}
                      aria-label="Next category"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-green-600 hover:bg-green-700 hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =====================================================
                RIGHT IMAGE
            ====================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, x: 35, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -25, scale: 0.97 }}
                transition={{ duration: 0.55 }}
                className="relative"
              >
                {/* Background decoration */}
                <div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border border-green-600/10" />

                {/* Main image */}
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl shadow-gray-900/10">
                  <motion.img
                    src={active.image || "/placeholder.svg"}
                    alt={active.alt}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.045 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    loading="lazy"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

                  {/* Top badge */}
                  <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2.5 text-white shadow-lg backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-green-400" />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Egyptian Produce
                    </span>
                  </div>

                  {/* Bottom image information */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                        Fuory Export
                      </p>

                      <p className="text-xl font-semibold text-white">
                        Premium Quality
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-green-700 shadow-lg transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Floating quality card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-xl xl:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        Quality
                      </p>

                      <p className="text-sm font-bold text-gray-900">
                        Export Ready
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Vertical category number */}
                <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-green-700/50">
                    {active.number} / 04 — {active.title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom progress */}
          <div className="mt-16 flex items-center justify-between border-t border-gray-200/80 pt-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Browse Categories
              </span>

              <div className="h-px w-16 bg-gray-300" />

              <span className="text-sm font-semibold text-green-700">
                {active.number} / 04
              </span>
            </div>

            <div className="flex items-center gap-2">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  aria-label={`Go to ${product.title}`}
                  className="group flex items-center"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeProduct === index
                        ? "w-10 bg-green-700"
                        : "w-3 bg-gray-300 group-hover:bg-green-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE / TABLET CAROUSEL
        ========================================================== */}

        <div className="block lg:hidden">
          <Carousel
            setApi={setupCarousel}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <CarouselItem key={product.id}>
                    <div className="space-y-7 px-1">
                      {/* Image */}
                      <div className="relative">
                        <div className="absolute -right-2 -top-2 h-full w-full rounded-[1.5rem] border border-green-600/10" />

                        <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gray-200 shadow-xl">
                          <motion.img
                            src={product.image || "/placeholder.svg"}
                            alt={product.alt}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.7 }}
                            loading="lazy"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                          {/* Badge */}
                          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-white backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                              Egyptian Produce
                            </span>
                          </div>

                          {/* Number */}
                          <span className="absolute bottom-4 right-5 font-veneer text-5xl text-white/30">
                            {product.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="rounded-[1.5rem] border border-gray-200/80 bg-white/80 p-6 shadow-lg backdrop-blur-xl sm:p-8">
                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                              {product.number} / 04
                            </p>

                            <p className="text-sm font-semibold text-green-700">
                              {product.subtitle}
                            </p>
                          </div>
                        </div>

                        <h3 className="font-veneer text-4xl uppercase tracking-wide text-gray-950 sm:text-5xl">
                          {product.title}
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mt-7 grid grid-cols-2 gap-3">
                          {product.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50/80 p-3"
                            >
                              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                <Check className="h-3 w-3" />
                              </div>

                              <span className="text-xs font-medium leading-5 text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button
                          size="lg"
                          className="group mt-7 h-13 w-full rounded-full bg-green-700 text-sm font-semibold text-white shadow-lg shadow-green-900/10 hover:bg-green-800"
                        >
                          Explore {product.title}

                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Mobile controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  aria-label={`Go to ${product.title}`}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      activeProduct === index
                        ? "w-9 bg-green-700"
                        : "w-2.5 bg-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={previousProduct}
                aria-label="Previous category"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-green-600 hover:bg-green-700 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextProduct}
                aria-label="Next category"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-green-600 hover:bg-green-700 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid overflow-hidden rounded-2xl border border-green-900/10 bg-green-900 px-5 py-5 shadow-xl shadow-green-950/10 sm:grid-cols-3 sm:px-8 md:mt-28"
        >
          <div className="flex items-center gap-3 py-3 sm:border-r sm:border-white/10 sm:pr-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-green-300">
              <Sprout className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-green-200/60">
                Source
              </p>

              <p className="text-sm font-semibold text-white">
                Trusted Farmers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 py-3 sm:border-t-0 sm:px-8 sm:border-r">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-green-300">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-green-200/60">
                Standard
              </p>

              <p className="text-sm font-semibold text-white">
                Quality Controlled
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 py-3 sm:border-t-0 sm:pl-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-green-300">
              <Truck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-green-200/60">
                Delivery
              </p>

              <p className="text-sm font-semibold text-white">
                Global Export Ready
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgriculturalShowcase;