export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  category: string;
  vendorId: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
  tags: string[];
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  banner: string;
  description: string;
  rating: number;
  reviewCount: number;
  products: Product[];
  brandColors: {
    primary: string;
    secondary: string;
  };
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  rating: number;
  vendor: string;
  inStock: boolean;
}