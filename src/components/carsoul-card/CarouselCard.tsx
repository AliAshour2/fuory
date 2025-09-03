interface CarouselCardProps {
  image: string;
  name: string;
  description: string;
}
const CarouselCard = (CarouselCard: CarouselCardProps) => {
  return (
    <div>
      <div className="w-72 h-72">
        <img
          src={CarouselCard.image}
          className="w-full h-full"
          alt={CarouselCard.description}
        />
      </div>
      <span className="text-3xl">{CarouselCard.name}</span>
    </div>
  );
};

export default CarouselCard;
