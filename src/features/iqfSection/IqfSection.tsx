import { ChevronLeft, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { IqfProducts } from "@/constants/products"

export default function IQF_Section() {
  return (
    <section id="frozen" className="bg-[url('../src/assets/images/backgrounds/iqf.webp')] max-h-[620px] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 min-h-[80vh] flex items-center justify-center sm:justify-end p-4 sm:p-8">
        <div className="w-full max-w-md sm:mr-8">
          <Carousel className="w-full">
            <CarouselContent>
              {IqfProducts.map((product, index) => (
                <CarouselItem key={index}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 sm:h-full object-cover rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="right-2 bg-white/80 hover:bg-white">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
