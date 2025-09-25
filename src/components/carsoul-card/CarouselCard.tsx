interface CarouselCardProps {
  image: string;
  name: string;
  description?: string;
}

const CarouselCard = ({ image, name, description }: CarouselCardProps) => {
  return (
    <div className="p-4">
      <div className="rounded-xl overflow-hidden  transition-transform hover:scale-105 duration-300">
        <div className="flex items-center justify-center overflow-hidden mx-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-6 pb-6 text-center">
          <h3 className="text-3xl font-bold mb-2 text-white font-bebas">
            {name}
          </h3>
          {description && (
            <p className="text-gray-200 font-bebas">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
