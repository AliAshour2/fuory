interface ProductCardProps {
  name: string;
  image: string;
  description?: string;
}

const ProductCard = ({ name, image, description }: ProductCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-gray-200">
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content (title + description) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-center">
        <h3
          className="text-white text-2xl font-bebas font-bold tracking-tight drop-shadow-lg 
          transform transition-transform duration-500 group-hover:-translate-y-3"
        >
          {name}
        </h3>

        {description && (
          <p
            className="text-gray-200 text-sm leading-relaxed font-medium opacity-0 
            transform translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
          >
            {description}
          </p>
        )}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </div>
  );
};

export default ProductCard;
