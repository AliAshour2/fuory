import { ChevronDown } from "lucide-react";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  sortOrder: string;
  setSortOrder: (order: string) => void;
  category: string;
}

const ProductGrid = ({
  products,
  sortOrder,
  setSortOrder,
  category,
}: ProductGridProps) => {
  return (
    <main className="w-full md:w-3/4 p-8">
      <h1 className="text-6xl md:text-9xl  mb-2 text-green-500 font-veneer">
        {category.toUpperCase()}
      </h1>
      <p className="text-gray-600 mb-4">
        Grow along with the popularity of {category}
      </p>
      <p className="text-gray-600 mb-8 md-w-[50%]">
        Discover the world of {category} with Fuory. Our carefully selected
        range combines flavor, freshness, and nutrition ,bringing the best of
        nature directly from our fields to your destination.
      </p>
      <div className="flex justify-between items-center mb-8">
        <div className="relative">
          <div className="relative inline-block w-40">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 text-gray-700 text-sm rounded-xl px-4 py-2 pr-10 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            >
              <option value="default">Sort</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            {/* Custom icon */}
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-4 h-4" />
          </div>
          <ChevronDown
            size={16}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductGrid;
