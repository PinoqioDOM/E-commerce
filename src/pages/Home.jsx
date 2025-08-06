import React, { useRef } from 'react';
import ProductCard from '../components/ProductCard';
import categories from '../data/categories.js';
import laptops from '../data/products/laptops.js';
import monitors from '../data/products/monitors.js';
import keyboards from '../data/products/keyboards.js';
import mouse from '../data/products/mouse.js';
import headphones from '../data/products/headphones.js';
import printers from '../data/products/printers.js';
import gaming from '../data/products/gaming.js';
import { useNavigate } from 'react-router-dom';

const Home = ({ onAddToCart, onAddToWishlist }) => {
  const navigate = useNavigate();
  const allProducts = [...laptops, ...monitors, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming];
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">კატეგორიები</h1>

      <div className="relative flex items-center mb-8">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 hidden md:block"
        >
          <span className="text-xl">&lt;</span>
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/category/${category.id}`)}
              className="flex-shrink-0 w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
            >
              <span className="text-lg font-semibold">{category.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 hidden md:block"
        >
          <span className="text-xl">&gt;</span>
        </button>
      </div>

      {categories.map((category) => {
        const categoryProducts = allProducts.filter(p => p.categoryId === category.id);
        const visibleProducts = categoryProducts.slice(0, 5);

        if (visibleProducts.length > 0) {
          return (
            <div key={category.id} className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                {categoryProducts.length > 5 && (
                  <button
                    onClick={() => navigate(`/category/${category.id}`)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    ნახე ყველა
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onAddToWishlist={onAddToWishlist}
                  />
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Home;