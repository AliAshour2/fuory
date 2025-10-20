"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useProducts } from "@/hooks/useProducts"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import CarouselCard from "@/components/carsoul-card/CarouselCard"

type CategoryFilter = "all" | "fruits" | "vegetables"
import pattern2 from "@/assets/images/backgrounds/pattern2.webp"
const ProductsCarousel = () => {
  const { products } = useProducts()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [category, setCategory] = useState<CategoryFilter>("all")

  // Update current slide and count when API is available
  useEffect(() => {
    if (!api) return

    const updateState = () => {
      setCurrent(api.selectedScrollSnap())
      setCount(api.scrollSnapList().length)
    }

    // Set initial state
    updateState()

    // Listen for slide changes
    api.on("select", updateState)

    // Cleanup
    return () => {
      api.off("select", updateState)
    }
  }, [api])

  // Filter products based on category
  const filteredProducts =
    category === "all"
      ? [...products.fruits, ...products.vegetables]
      : category === "fruits"
        ? products.fruits
        : products.vegetables

  // Reset carousel when category changes
  useEffect(() => {
    if (api) {
      api.scrollTo(0)
    }
  }, [category, api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  // Always show exactly 3 dots that represent the current visible slides
  const getVisibleDots = () => {
    // If we have 3 or fewer total slides, show dots for all slides
    if (count <= 3) {
      return Array.from({ length: count }).map((_, index) => index)
    }
    
    // Always show exactly 3 dots that represent the current, next, and previous positions
    // This creates a sliding window of 3 dots that move with the carousel
    const dots = [];
    
    if (current === 0) {
      // At start: show 0, 1, 2
      dots.push(0, 1, 2);
    } else if (current === count - 1) {
      // At end: show last 3 slides
      dots.push(count - 3, count - 2, count - 1);
    } else {
      // In middle: show previous, current, next
      dots.push(current - 1, current, current + 1);
    }
    
    return dots;
  }

  const visibleDots = getVisibleDots()

  if (filteredProducts.length === 0) {
    return (
      <section
        id="products"
        className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600"
      >
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">No products available</h2>
          <p className="text-white/80">Check back soon for fresh products!</p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="products"
      className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${pattern2})`,
      }}
    >
      <div className="container mx-auto px-4 py-12 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 font-veneer text-5xl tracking-wider text-white md:text-7xl">
            Our Fresh Products
          </h2>

          {/* Category Filter Tabs */}
          <div className="mx-auto flex w-fit gap-2 rounded-full bg-white/10 p-2 backdrop-blur-sm">
            {(["all", "fruits", "vegetables"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-medium capitalize transition-all duration-300",
                  category === cat ? "bg-white text-emerald-600 shadow-lg" : "text-white hover:bg-white/20",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="relative w-full">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredProducts.map((product, index) => (
                    <CarouselItem key={product.id} className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full"
                      >
                        <CarouselCard
                          id={product.name}
                          image={product.image}
                          name={product.name}
                          description={product.description}
                        />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Always show arrows but make them visible on all devices */}
                <CarouselPrevious className="left-0 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:flex" />
                <CarouselNext className="right-0 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:flex" />
              </Carousel>
            </div>

            {/* Pagination Dots - Always show exactly 3 dots representing visible slides */}
            <div className="mt-8 flex justify-center gap-2">
              {visibleDots.map((dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => scrollTo(dotIndex)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    current === dotIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60",
                  )}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="mt-4 text-center">
              <p className="text-sm text-white/80">
                Slide {current + 1} of {count}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProductsCarousel