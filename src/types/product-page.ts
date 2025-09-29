import type { Product } from './product';

export interface ProductPageConfig {
  showAvailability?: boolean;
  showStorageAdvice?: boolean;
  showVarieties?: boolean;
  showGrowingLocations?: boolean;
  showGrowingInfo?: boolean;
  showRipeningInfo?: boolean;
  showTips?: boolean;
  showPackaging?: boolean;
  showRecipes?: boolean;
  enableSectionNavigation?: boolean;
  stickyNavigation?: boolean;
}

export interface ProductPageProps {
  product: Product;
  config?: ProductPageConfig;
  className?: string;
}