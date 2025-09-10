import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/constants/products";
import pattern from "@/assets/images/patterns/pattern.png";
import CarouselCard from "@/components/carsoul-card/CarouselCard";

const ProductsCarousel = () => {
  return (
    <section
      className="flex justify-center items-center  w-full h-screen"
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-12 text-white font-veneer">
          Our Fresh Products
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 animate-fade-up "
              >
                <CarouselCard
                  image={product.image}
                  name={product.name}
                  description={product.description}
                ></CarouselCard>
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
