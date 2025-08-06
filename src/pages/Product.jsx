import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import laptops from '../data/products/laptops.js';
import monitors from '../data/products/monitors.js';
import keyboards from '../data/products/keyboards.js';
import mouse from '../data/products/mouse.js';
import headphones from '../data/products/headphones.js';
import printers from '../data/products/printers.js';
import gaming from '../data/products/gaming.js';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/ProductCard.jsx';

const Product = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const allProducts = [...laptops, ...monitors, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming];
  const product = allProducts.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) return <div>პროდუქტი არ მოიძებნა</div>;

  const categoryProducts = allProducts.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 5);

  return (
    <div className="flex flex-col p-4 gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex flex-col lg:flex-row gap-4">
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto">
            <div className="w-16 h-16 border rounded-md cursor-pointer p-1">
              <img src={product.imageId ? `/images/${product.imageId}.jpg` : '/default.jpg'} alt={product.name} className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="w-16 h-16 border rounded-md cursor-pointer p-1">
              <img src={product.imageId ? `/images/${product.imageId}.jpg` : '/default.jpg'} alt={product.name} className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="w-16 h-16 border rounded-md cursor-pointer p-1">
              <img src={product.imageId ? `/images/${product.imageId}.jpg` : '/default.jpg'} alt={product.name} className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="w-16 h-16 border rounded-md cursor-pointer p-1">
              <img src={product.imageId ? `/images/${product.imageId}.jpg` : '/default.jpg'} alt={product.name} className="w-full h-full object-cover rounded-sm" />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center p-4 rounded-lg shadow-md bg-gray-50">
            <img
              src={product.imageId ? `/images/${product.imageId}.jpg` : '/default.jpg'}
              alt={product.name}
              className="w-full max-w-xl object-contain"
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="border-b pb-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-500 text-sm">ID: {product.id}</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400">
                <span className="text-xl">⭐️</span>
                <span className="text-xl">⭐️</span>
                <span className="text-xl">⭐️</span>
                <span className="text-xl">⭐️</span>
                <span className="text-xl">✩</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-gray-700">ფერი:</span>
              <span className="text-gray-900">Desert Titanium</span>
              <div className="border border-green-500 rounded-full w-6 h-6 bg-yellow-300"></div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-gray-700">მეხსიერება:</span>
              <div className="border border-gray-300 rounded-full px-4 py-1 text-gray-700 cursor-pointer">256 GB</div>
              <div className="border border-gray-300 rounded-full px-4 py-1 text-gray-700 cursor-pointer">512 GB</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-gray-700">ბრენდი:</span>
              <span className="text-blue-500 cursor-pointer">Apple</span>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>ბოლო თაობის ჩიპსეტი, გაუმჯობესებული მეხსიერება და 8 GB ოპერატიული მეხსიერება</li>
            <li>LTPO Super Retina XDR OLED, 120 Hz, 1220 x 2688 გაფართოების ეკრანზე გაუმჯობესებული დეტალები</li>
            <li>გაუმჯობესებული რეზოლუციის მქონე, 48 MP კამერა OIS-ით / 5X ოპტიკური ზუმით</li>
            <li>ინტეგრირებული Apple Intelligence სისტემა</li>
            <li>სწრაფი დატენვის რეჟიმი, უსადენო დატენვის ფუნქციით</li>
            <li>დახვეწილი, ბრჭყვიალა დიზაინი და გამძლეობის მახასიათებლები</li>
          </ul>
        </div>

        <div className="lg:w-1/4 flex flex-col gap-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-4xl font-bold text-gray-900 mb-2">{product.price} ₾</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <p>თვეში 150₾-დან</p>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">33%</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>შეძენისას მიიღებთ 2 საათში</span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors mb-2 cursor-pointer"
            >
              დაამატე კალათაში
            </button>
            <button
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              ყიდვა
            </button>
          </div>
        </div>
      </div>
      
      {categoryProducts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">მსგავსი პროდუქტები</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoryProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          <button
            onClick={() => navigate(`/category/${product.categoryId}`)}
            className="mt-4 text-blue-500 hover:underline cursor-pointer"
          >
            ყველას ნახვა
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;