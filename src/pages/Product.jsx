import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import laptops from '../data/products/laptops.js';
import monitors from '../data/products/monitors.js';
import keyboards from '../data/products/keyboards.js';
import mouse from '../data/products/mouse.js';
import headphones from '../data/products/headphones.js';
import printers from '../data/products/printers.js';
import gaming from '../data/products/gaming.js';
import categories from '../data/categories.js';
import computers from '../data/products/computer.js';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/ProductCard.jsx';

// მიიღეთ isLoggedIn და onShowLoginModal props-ად
const Product = ({ isLoggedIn, onShowLoginModal }) => {
  const { addToCart, addToWishlist } = useCart(); // დაამატეთ addToWishlist
  const { id } = useParams();
  const allProducts = [...laptops, ...monitors,...computers, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming];
  const product = allProducts.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(product?.images?.[0] || '/default.jpg');

  useEffect(() => {
    if (product) {
      setMainImage(product.images?.[0] || '/default.jpg');
    }
  }, [product]);

  if (!product) return <div className="text-center text-base sm:text-lg p-4">პროდუქტი არ მოიძებნა</div>;

  const category = categories.find(c => c.id === product.categoryId);

  const categoryProducts = allProducts.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col p-2 sm:p-4 gap-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="md:w-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex flex-row sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto max-h-[80px] sm:max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {/* აქ product.images Applies product.images */}
            {product.images && product.images.map((image, index) => (
              <div
                key={index}
                className="w-16 h-16 min-w-[64px]  rounded-md cursor-pointer p-1"
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-sm" />
              </div>
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center p-2 sm:p-3 rounded-lg">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px] h-auto object-contain border-none shadow-none"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-3 sm:gap-4">
          <div className="border-b pb-3 sm:pb-4">
            <div className="flex items-center justify-between">
              {category && <p className="text-xs sm:text-sm font-semibold text-blue-500">{category.name}</p>}
              <p className="text-gray-500 text-xs sm:text-sm">ID: {product.id}</p>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400 flex">
                <span className="text-lg sm:text-xl">⭐️</span>
                <span className="text-lg sm:text-xl">⭐️</span>
                <span className="text-lg sm:text-xl">⭐️</span>
                <span className="text-lg sm:text-xl">⭐️</span>
                <span className="text-lg sm:text-xl">✩</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="font-semibold text-gray-700">ბრენდი:</span>
              <span className="text-blue-500 cursor-pointer">{product.name.split(' ')[0]}</span>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/3 lg:w-1/4 flex flex-col gap-3 sm:gap-4">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.price} ₾</p>
            <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
              <p>თვეში 150₾-დან</p>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">33%</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 mb-3 sm:mb-4 text-xs sm:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>შეძენისას მიიღებთ 2 საათში</span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-green-500 text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors mb-2 text-xs sm:text-sm cursor-pointer"
            >
              დაამატე კალათაში
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 w-full bg-blue-600 text-white text-center py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-sm cursor-pointer"
            >
              ყიდვა
            </button>
          </div>
        </div>
      </div>

      {categoryProducts.length > 0 && (
        <div className="w-full mt-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">მსგავსი პროდუქტები</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {categoryProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={addToCart}
                onAddToWishlist={addToWishlist}
                isLoggedIn={isLoggedIn} 
                onShowLoginModal={onShowLoginModal} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;