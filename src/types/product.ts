export type ProductCategory = 'fruit' | 'vegetable';

export interface Product {
  id: number;
  name: string;
  image: string;
  category: ProductCategory;
  description?: string;
  alt?: string;
  availability?: AvailabilityMonth[];
  storageAdvice?: StorageAdvice;
  varieties?: ProductVariety[];
  growingLocations?: string[];
  growingInfo?: GrowingInfo;
  ripeningInfo?: string;
  tips?: string[];
  packagingOptions?: PackagingOption[];
  recipes?: string[];
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



export interface ProductVariety {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface AvailabilityMonth {
  month: string;
  available: boolean;
}

export interface StorageAdvice {
  transport: string;
  shop: string;
}

export interface GrowingInfo {
  title: string;
  description: string;
  image?: string;
}

export interface PackagingOption {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Recipe {
  title: string;
  image: string;
  description: string;
  link?: string;
}

export interface Tip {
  title: string;
  description: string;
}

export interface ProductData {
  // Basic product info
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;

  // Optional sections data
  availability?: AvailabilityMonth[];
  storageAdvice?: StorageAdvice;
  varieties?: ProductVariety[];
  growingLocations?: string[];
  growingInfo?: GrowingInfo;
  ripeningInfo?: GrowingInfo;
  tips?: Tip[];
  packagingOptions?: PackagingOption[];
  recipes?: Recipe;
}

export interface ProductPageConfig {
  // Control which sections to show
  showAvailability?: boolean;
  showStorageAdvice?: boolean;
  showVarieties?: boolean;
  showGrowingLocations?: boolean;
  showGrowingInfo?: boolean;
  showRipeningInfo?: boolean;
  showTips?: boolean;
  showPackaging?: boolean;
  showRecipes?: boolean;

  // Navigation options
  enableSectionNavigation?: boolean;
  stickyNavigation?: boolean;
}

export interface ProductPageProps {
  product: ProductData;
  config?: ProductPageConfig;
  className?: string;
}
