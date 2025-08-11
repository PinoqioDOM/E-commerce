import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useCart();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    addToWishlist(product);
  };

  const imageUrl = product.images?.[0] || '/default.jpg';

  return (
    <div onClick={handleClick} className="relative w-64 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
      <img src={imageUrl} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-xl font-bold text-gray-900 mt-2">{product.price} ₾</p>
      </div>
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={handleAddToCart} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
          <span>🛒</span>
        </button>
        <button onClick={handleAddToWishlist} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
          <span>❤️</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;