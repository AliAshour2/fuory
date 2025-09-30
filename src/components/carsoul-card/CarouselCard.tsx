interface CarouselCardProps {
  image: string;
  name: string;
  description?: string;
}

const CarouselCard = ({ image, name, description }: CarouselCardProps) => {
  return (
    <div className="p-4">
      <div className="group rounded-xl overflow-hidden relative">
        {/* Image */}
        <div className="flex items-center justify-center h-96 w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay (Name + Description) */}
        <div className="absolute -bottom-7 group-hover:-bottom-4 left-0 w-full p-4 text-center   transition-all duration-500 ease-in-out">
          <h3 className="text-3xl font-bold mb-2 text-white font-bebas">
            {name}
          </h3>

          {description && (
            <p
              className="
                text-gray-200 font-bebas opacity-0 translate-y-6 
                transition-all duration-500 ease-in-out 
                group-hover:opacity-100 group-hover:translate-y-0
              "
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
