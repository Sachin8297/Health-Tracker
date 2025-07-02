import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'All Products', icon: 'Grid3X3' },
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt' },
  { id: 'home', name: 'Home & Garden', icon: 'Home' },
  { id: 'sports', name: 'Sports', icon: 'Dumbbell' },
  { id: 'books', name: 'Books', icon: 'Book' },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    features: ["Active Noise Cancellation", "30hr Battery", "Wireless Charging", "Voice Assistant"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    category: "electronics",
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and sleep tracking.",
    rating: 4.6,
    reviews: 892,
    inStock: true,
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-Day Battery"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "clothing",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Comfortable and sustainable organic cotton t-shirt perfect for everyday wear. Available in multiple colors.",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    features: ["100% Organic Cotton", "Pre-shrunk", "Machine Washable", "Multiple Colors"]
  },
  {
    id: 4,
    name: "Modern Table Lamp",
    price: 89.99,
    category: "home",
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sleek and modern table lamp with adjustable brightness and contemporary design that complements any room.",
    rating: 4.7,
    reviews: 298,
    inStock: true,
    features: ["Adjustable Brightness", "Modern Design", "Energy Efficient LED", "Touch Control"]
  },
  {
    id: 5,
    name: "Professional Yoga Mat",
    price: 59.99,
    category: "sports",
    image: "https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "High-quality yoga mat with superior grip and cushioning. Perfect for yoga, pilates, and other floor exercises.",
    rating: 4.5,
    reviews: 423,
    inStock: true,
    features: ["Non-slip Surface", "Extra Thick Padding", "Eco-friendly Material", "Carry Strap"]
  },
  {
    id: 6,
    name: "Bestselling Novel",
    price: 14.99,
    category: "books",
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "A captivating story that has topped bestseller lists worldwide. Perfect for book clubs and leisure reading.",
    rating: 4.9,
    reviews: 2341,
    inStock: true,
    features: ["Bestseller", "Award Winner", "Book Club Favorite", "Available in Hardcover"]
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    price: 39.99,
    category: "electronics",
    image: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
    rating: 4.3,
    reviews: 567,
    inStock: true,
    features: ["Fast Charging", "Universal Compatibility", "LED Indicator", "Slim Design"]
  },
  {
    id: 8,
    name: "Designer Jeans",
    price: 129.99,
    originalPrice: 179.99,
    category: "clothing",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Premium designer jeans with perfect fit and comfort. Made from high-quality denim with stretch.",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    features: ["Premium Denim", "Stretch Fabric", "Designer Cut", "Multiple Sizes"]
  }
];