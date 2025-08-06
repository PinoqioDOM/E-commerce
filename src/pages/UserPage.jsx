import React, { useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserSidebar from '../components/UserSidebar';
import categories from '../data/categories.js';
import laptops from '../data/products/laptops.js';
import monitors from '../data/products/monitors.js';
import keyboards from '../data/products/keyboards.js';
import mouse from '../data/products/mouse.js';
import headphones from '../data/products/headphones.js';
import printers from '../data/products/printers.js';
import gaming from '../data/products/gaming.js';

const UserPage = () => {
  const navigate = useNavigate();
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
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 ml-5">გამარჯობა, TORNIKЕ</h2>
      <div className="border-t border-gray-200 mb-6"></div>
      
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
      
      <div className="flex gap-8">
        <UserSidebar />
        
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPage;