import { useState, useMemo } from "react";
import type { Product } from "@/types/product";
import { useProducts } from "@/hooks/useProducts";
import Sidebar from "@/components/product-category/Sidebar";
import ProductGrid from "@/components/product-category/ProductGrid";

const ProductCategoryPage = () => {
  const { products: productData } = useProducts();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Fruit");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["Fruit", "Vegetables"];

  const filteredProducts = useMemo(() => {
    // Determine which products to show based on category
    let products: Product[] = [];
    if (selectedCategory === "Fruit") {
      products = productData.fruits;
    } else if (selectedCategory === "Vegetables") {
      products = productData.vegetables;
    }

    // Apply search filter
    if (searchTerm) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortOrder === "asc") {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      products.sort((a, b) => b.name.localeCompare(a.name));
    }

    return products;
  }, [productData, selectedCategory, searchTerm, sortOrder]);

  return (
    <div className="flex flex-col md:flex-row pt-24">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ProductGrid
        products={filteredProducts}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        category={selectedCategory}
      />
    </div>
  );
};

export default ProductCategoryPage;
