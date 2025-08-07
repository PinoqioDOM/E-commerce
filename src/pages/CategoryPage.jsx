import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import categories from '../data/categories.js';
import FilterComponent from '../components/FilterComponent.jsx'; 

const CategoryPage = ({ onAddToCart, onAddToWishlist }) => {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('პროდუქტები');
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let module;
        let name;
        switch (id) {
          case '1':
            module = await import('../data/products/laptops.js');
            name = 'ლეპტოპები';
            break;
          case '2':
            module = await import('../data/products/computer.js');
            name = 'კომპიუტერბი';
            break;
          case '3':
            module = await import('../data/products/monitors.js');
            name = 'მონიტორები';
            break;
          case '4':
            module = await import('../data/products/keyboards.js');
            name = 'კლავიატურები';
            break;
          case '5':
            module = await import('../data/products/mouse.js');
            name = 'მაუსები';
            break;
          case '6':
            module = await import('../data/products/headphones.js');
            name = 'ყურსასმენები';
            break;
          case '7':
            module = await import('../data/products/printers.js');
            name = 'პრინტერები';
            break;
          case '8':
            module = await import('../data/products/gaming.js');
            name = 'Gaming';
            break;
          default:
            module = { default: [] };
            name = 'პროდუქტები';
        }
        setAllProducts(module.default);
        setFilteredProducts(module.default);
        setCategoryName(name);
      } catch (error) {
        console.error("პროდუქტების ჩატვირთვის შეცდომა:", error);
        setAllProducts([]);
        setFilteredProducts([]);
        setCategoryName('პროდუქტები');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

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

  const handleFilterChange = (newProducts) => {
    setFilteredProducts(newProducts);
  };

  if (isLoading) {
    return <div className="p-4 text-center">იტვირთება...</div>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* კატეგორიების სქროლი */}
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

      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>

      <div className="flex gap-8">
        {/* ფილტრის კომპონენტის გამოძახება */}
        <FilterComponent products={allProducts} onFilterChange={handleFilterChange} />
        
        {/* პროდუქტების სია */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="p-4 text-center">ამ კრიტერიუმებით პროდუქტი არ მოიძებნა.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onAddToWishlist={onAddToWishlist}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;