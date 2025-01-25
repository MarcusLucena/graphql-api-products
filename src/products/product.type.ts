export interface ProductDetails {
  name: string;
  description: string;
}

export interface Product {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: ProductDetails;
  fullPriceInCents: string;
  salePriceInCents: string;
  rating: number;
  image: string;
  stockAvailable: boolean;
}

export interface ProductsData {
  products: Product[];
}
