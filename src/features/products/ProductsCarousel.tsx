import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/constants/products";
import pattern from "@/assets/images/patterns/pattern.png";

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
                <div className="p-4">
                  <div className="rounded-xl overflow-hidden  transition-transform hover:scale-105 duration-300">
                    <div className="flex items-center justify-center overflow-hidden mx-auto">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="py-6 pb-6 text-center">
                      <h3 className="text-3xl font-bold mb-2 text-white font-bebas">
                        {product.name}
                      </h3>
                      <p className="text-gray-200 font-bebas">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
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


