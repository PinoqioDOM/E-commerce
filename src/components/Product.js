export const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    nameGe: "აიფონ 15 პრო",
    price: 2899,
    originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    category: "smartphones",
    categoryGe: "სმარტფონები",
    brand: "Apple",
    inStock: true,
    description: "Latest iPhone with advanced camera system and titanium design",
    descriptionGe: "უახლესი აიფონი განახლებული კამერით და ტიტანის დიზაინით",
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    nameGe: "სამსუნგ გალაქსი S24 ულტრა",
    price: 2599,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    category: "smartphones",
    categoryGe: "სმარტფონები",
    brand: "Samsung",
    inStock: true,
    description: "Premium Android phone with S Pen and exceptional camera",
    descriptionGe: "პრემიუმ ანდროიდ ტელეფონი S Pen-ით და შესანიშნავი კამერით",
    rating: 4.7,
    reviewCount: 203
  },
  {
    id: 3,
    name: "MacBook Air M3",
    nameGe: "მაკბუქ ეირ M3",
    price: 3299,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    category: "laptops",
    categoryGe: "ლეპტოპები",
    brand: "Apple",
    inStock: true,
    description: "Ultra-thin laptop with M3 chip and all-day battery life",
    descriptionGe: "ულტრა თხელი ლეპტოპი M3 ჩიპით და მთელი დღის ბატარეით",
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    nameGe: "სონი WH-1000XM5",
    price: 899,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    category: "headphones",
    categoryGe: "ყურსასმენები",
    brand: "Sony",
    inStock: false,
    description: "Premium noise-canceling wireless headphones",
    descriptionGe: "პრემიუმ ხმაურგამრიცხავი უსადენო ყურსასმენები",
    rating: 4.6,
    reviewCount: 312
  },
  {
    id: 5,
    name: "iPad Pro 12.9\"",
    nameGe: "აიპედ პრო 12.9\"",
    price: 2499,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    category: "tablets",
    categoryGe: "ტაბლეტები",
    brand: "Apple",
    inStock: true,
    description: "Professional tablet with M2 chip and Liquid Retina display",
    descriptionGe: "პროფესიონალური ტაბლეტი M2 ჩიპით და Liquid Retina ეკრანით",
    rating: 4.8,
    reviewCount: 127
  }
];

// Helper functions
export const getProductById = (id) => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return mockProducts.filter(product => product.category === category);
};

export const getInStockProducts = () => {
  return mockProducts.filter(product => product.inStock);
};

export const getDiscountedProducts = () => {
  return mockProducts.filter(product => product.originalPrice > product.price);
};