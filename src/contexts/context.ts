import { createContext } from "react";
import type { ProductsContextType } from "@/types/product";

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);