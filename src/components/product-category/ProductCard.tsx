interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard = ({ name, image }: ProductCardProps) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-full h-auto mb-2" />
      <p className="text-gray-700">{name}</p>
    </div>
  );
};

export default ProductCard;
