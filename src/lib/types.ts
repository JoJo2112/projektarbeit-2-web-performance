export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  images: string[];
};

export type Review = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};
