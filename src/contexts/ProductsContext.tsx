import type { ReactNode } from "react";
import { products as allProducts, IqfProducts } from "@/constants/products";
import type { Product } from "@/types/product";
import { ProductsContext } from "./context";

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const fruits = allProducts.filter(
    (p) => p.category === "fruit"
  ) as Product[];
  const vegetables = allProducts.filter(
    (p) => p.category === "vegetable"
  ) as Product[];

  return (
    <ProductsContext.Provider
      value={{ products: { fruits, vegetables }, IqfProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
