export interface ProductChange {
  dir: "up" | "down";
  pct: number;
}

export interface Product {
  id: string | number;
  slug: string;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: ProductChange;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  markets: MarketPrice[];
}

export interface MarketPrice {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface Category {
  id: string | number;
  icon: string;
  nameBn: string;
}

export interface ProductListProps {
  data: Product[];
}

export interface ProductCardProps {
  product: Product;
}

export interface CategoryItemProps {
  category: Category;
}

export interface CategoryRouteProps {
  params: Promise<{ id: string }>;
}

export type CategoryDetails = Product;
