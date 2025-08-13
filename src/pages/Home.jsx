import React from 'react';
import ProductCard from '../components/ProductCard';
import categories from '../data/categories.js';
import laptops from '../data/products/laptops.js';
import monitors from '../data/products/monitors.js';
import keyboards from '../data/products/keyboards.js';
import mouse from '../data/products/mouse.js';
import headphones from '../data/products/headphones.js';
import printers from '../data/products/printers.js';
import computers from '../data/products/computer.js';
import gaming from '../data/products/gaming.js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx'; 

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useCart(); 
  const allProducts = [...laptops, ...monitors, ...computers, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">პროდუქტები</h1>

      {categories.map((category) => {
        const categoryProducts = allProducts.filter(p => p.categoryId === category.id);
        const visibleProducts = categoryProducts.slice(0, 4);

        if (visibleProducts.length > 0) {
          return (
            <div key={category.id} className="mb-8">
              <div className="flex justify-between items-center mb-4 w-full">
                <h2 
                  onClick={() => navigate(`/category/${category.id}`)}
                  className="text-2xl font-bold cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {category.name}
                </h2>
              </div>
              
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 w-full">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onAddToWishlist={addToWishlist}
                  />
                ))}
              </div>

              <div className="md:hidden">
                <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {visibleProducts.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-80">
                      <ProductCard
                        product={product}
                        onAddToCart={addToCart}
                        onAddToWishlist={addToWishlist}
                      />
                    </div>
                  ))}
                </div>
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