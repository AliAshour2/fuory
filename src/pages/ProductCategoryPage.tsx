import { useState, useMemo } from "react";
import type { Product } from "@/types/product";
import { useProducts } from "@/hooks/useProducts";
import Sidebar from "@/components/product-category/Sidebar";
import ProductGrid from "@/components/product-category/ProductGrid";

const ProductCategoryPage = () => {
  const { products: productData } = useProducts();
  const allProducts = useMemo(
    () => [...productData.fruits, ...productData.vegetables],
    [productData]
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("fruit");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["Fruit", "Vegetables", "Frozen", "Seasonings"];

  const filteredProducts = useMemo(() => {
    let products: Product[] = [];

    if (selectedCategory === "fruit") {
      products = productData.fruits;
    } else if (selectedCategory === "vegetables") {
      products = productData.vegetables;
    } else {
      // For now, other categories will show all products
      products = allProducts;
    }

    if (searchTerm) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      products.sort((a, b) => b.name.localeCompare(a.name));
    }

    return products;
  }, [allProducts, productData, selectedCategory, searchTerm, sortOrder]);

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
