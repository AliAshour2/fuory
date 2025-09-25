import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import { products as allProducts, IqfProducts } from "@/constants/products";

interface Product {
  id: number;
  name: string;
  image: string;
  description?: string;
}

interface ProductsContextType {
  products: Product[];
  IqfProducts: Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsContext.Provider value={{ products: allProducts, IqfProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}
