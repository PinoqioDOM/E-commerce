import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import CartModal from './CartModal';
import UserModal from './UserModal';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, logout } from '../store/authSlice';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef(null);
  const { cartItems, cartItemCount, removeFromCart } = useCart();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const userButtonRef = useRef(null);

  const handleCartClick = () => {
    setIsCartOpen(true);
    setIsUserModalOpen(false);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsUserModalOpen(false);
  };

  const handleUserModalClick = () => {
    setIsUserModalOpen(!isUserModalOpen);
    setIsCartOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-8 px-4 bg-[#90EE90] relative">
        <Link to="/">
          <img src={Logo} alt="Veli Logo" className="w-[150px] cursor-pointer" />
        </Link>

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
            className="flex items-center gap-4 cursor-pointer text-[#333] font-medium text-base p-3 rounded-xl bg-white/20 backdrop-blur-lg border border-white/10 hover:bg-white/30 hover:scale-[1.03] hover:shadow-[0_0_10px_#fff] hover:border-2 hover:border-white hover:font-bold transition-all slideRight"
          >
            <i className="fa-solid fa-basket-shopping text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              {cartItemCount}
            </span>
          </div>

          {isCartOpen && (
            <CartModal
              isOpen={isCartOpen}
              onClose={handleCloseCart}
              cartButtonRef={cartButtonRef}
              cartItems={cartItems}
              onRemoveProduct={removeFromCart}
            />
          )}
        </div>

        <nav className="relative" ref={userButtonRef}>
          {!isLoggedIn ? (
            <Link to="/login" 
              className="flex items-center gap-4 cursor-pointer text-[#333] font-medium text-base p-3 rounded-xl bg-white/20 backdrop-blur-lg border border-white/10 hover:bg-white/30 hover:scale-[1.03] hover:shadow-[0_0_10px_#fff] hover:border-2 hover:border-white hover:font-bold transition-all slideRight"
            >
              <i className="fa-solid fa-circle-user text-lg"></i>
              <p className="text-[#333] no-underline">შესვლა</p>
            </Link>
          ) : (
            <div
              onClick={handleUserModalClick}
              className="flex items-center gap-4 cursor-pointer text-[#333] font-medium text-base p-3 rounded-xl bg-white/20 backdrop-blur-lg border border-white/10 hover:bg-white/30 hover:scale-[1.03] hover:shadow-[0_0_10px_#fff] hover:border-2 hover:border-white hover:font-bold transition-all slideRight"
            >
              <i className="fa-solid fa-circle-user text-lg"></i>
              <span>ჩემი ველი</span>
            </div>
          )}

          {isUserModalOpen && (
            <UserModal
              isOpen={isUserModalOpen}
              onClose={() => setIsUserModalOpen(false)}
              onLogout={handleLogout}
            />
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;