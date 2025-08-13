import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext.jsx';
import FilterComponent from '../components/FilterComponent.jsx';

const CategoryPage = () => {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('პროდუქტები');
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, addToWishlist } = useCart();

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
            name = 'კომპიუტერები';
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

  const handleFilterChange = (newProducts) => {
    setFilteredProducts(newProducts);
  };

  if (isLoading) {
    return <div className="p-4 text-center">იტვირთება...</div>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{categoryName}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ფილტრი */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <FilterComponent products={allProducts} onFilterChange={handleFilterChange} />
        </div>

        {/* პროდუქტების სია */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="p-4 text-center">ამ კრიტერიუმებით პროდუქტი არ მოიძებნა.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onAddToWishlist={addToWishlist}
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