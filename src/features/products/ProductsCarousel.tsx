import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProducts } from "@/hooks/useProducts";
import pattern from "@/assets/images/patterns/pattern.webp";
import CarouselCard from "@/components/carsoul-card/CarouselCard";

import { motion } from "framer-motion";

const ProductsCarousel = () => {
  const { products } = useProducts();
  const allProducts = [...products.fruits, ...products.vegetables];
  return (
    <section
      id="products"
      className="flex justify-center items-center  w-full h-screen"
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl text-center mb-12 text-white font-veneer tracking-wider"
        >
          Our Fresh Products
        </motion.h2>
        <Carousel className="w-full">
          <CarouselContent>
            {allProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 animate-fade-up "
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <CarouselCard
                    image={product.image}
                    name={product.name}
                    description={product.description}
                  ></CarouselCard>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductsCarousel;
