import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import CartModal from "./CartModal";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef(null);
  const cartItemCount = 1;

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-8 px-4 bg-[#90EE90] relative">
        <img src={Logo} alt="Veli Logo" className="w-[150px] cursor-pointer" />
        
        <div className="relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="p-4 text-base border-none rounded-lg outline-none bg-white w-[700px] transition-shadow hover:shadow-[0_0_10px_#000] cursor-pointer"
            placeholder="რას ეძებ?"
          />
          <i className="fa-solid fa-magnifying-glass absolute right-2.5 text-[#555] pointer-events-none text-base"></i>
        </div>
        
        <div className="relative" ref={cartButtonRef}>
          <div 
            onClick={handleCartClick}
            className="flex items-center gap-4 cursor-pointer text-[#333] font-medium text-base p-3 rounded-xl bg-white/10 backdrop-blur-lg hover:scale-[1.03] hover:shadow-[0_0_10px_#fff] hover:border-2 hover:border-white hover:bg-white hover:font-bold transition-all"
          >
            <i className="fa-solid fa-basket-shopping text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              {cartItemCount}
            </span>
            <span>კალათა</span>
          </div>
          
          {/* Cart Modal positioned relative to this container */}
          {isCartOpen && (
            <CartModal 
              isOpen={isCartOpen} 
              onClose={handleCloseCart}
              cartButtonRef={cartButtonRef}
            />
          )}
        </div>
        
        <nav>
          <div className="flex items-center gap-4 cursor-pointer text-[#333] font-medium text-base p-3 rounded-xl bg-white/10 backdrop-blur-lg hover:scale-[1.03] hover:shadow-[0_0_10px_#fff] hover:border-2 hover:border-white hover:bg-white hover:font-bold transition-all">
            <i className="fa-solid fa-circle-user text-lg"></i>
            <Link to="/login" className="text-[#333] no-underline">შესვლა</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;