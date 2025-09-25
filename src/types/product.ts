export type ProductCategory = 'fruit' | 'vegetable';

export interface Product {
  id: number;
  name: string;
  image: string;
  category: ProductCategory;
  description?: string;
}

export interface IqfProduct {
  id: number;
  name: string;
  image: string;
}

export interface ProductsContextType {
  products: {
    fruits: Product[];
    vegetables: Product[];
  };
  IqfProducts: IqfProduct[];
}