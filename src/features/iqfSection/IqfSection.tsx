// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// import {IqfProducts} from "@/constants/products"

// export default function IQF_Section() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === IqfProducts.length - 1 ? 0 : prevIndex + 1))
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? IqfProducts.length - 1 : prevIndex - 1))
//   }

//   return (
//     <div
//       className="bg-[url('../src/assets/images/backgrounds/iqf.png')]  max-h-[620px] bg-cover bg-center bg-no-repeat relative"
//     >
//       <div className="absolute inset-0 "></div>

//       <div className="relative z-10 min-h-screen flex items-center justify-end p-8">
//         <div className="max-w-md mr-8">
//           <div className="flex flex-col items-center">
            

//             <div className="relative w-full max-w-md">
//               {/* Carousel Container */}
//               <div className="relative overflow-hidden rounded-xl  ">
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                   {IqfProducts.map((image, index) => (
//                     <div key={index} className="w-full flex-shrink-0">
//                       <img src={image.image || "/placeholder.svg"} alt={image.name} className="w-full h-80 object-cover" />
                      
//                     </div>
//                   ))}
//                 </div>

//                 {/* Navigation Buttons */}
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
//                   onClick={prevSlide}
//                 >
//                   <ChevronLeft className="h-4 w-4" />
//                 </Button>

//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
//                   onClick={nextSlide}
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </Button>
//               </div>

//               {/* Dots Indicator */}
//               <div className="flex justify-center mt-6 space-x-2">
//                 {IqfProducts.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`w-3 h-3 rounded-full transition-colors ${
//                       index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
//                     }`}
//                     onClick={() => setCurrentIndex(index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { IqfProducts } from "@/constants/products"

export default function IQF_Section() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === IqfProducts.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? IqfProducts.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="bg-[url('../src/assets/images/backgrounds/iqf.png')] max-h-[620px] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 min-h-[80vh] flex items-center justify-center sm:justify-end p-4 sm:p-8">
        <div className="w-full max-w-md sm:mr-8">
          <div className="flex flex-col items-center">
            <div className="relative w-full">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {IqfProducts.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                      <img
                        src={image.image || "/placeholder.svg"}
                        alt={image.name}
                        className="w-full h-80 sm:h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {IqfProducts.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
