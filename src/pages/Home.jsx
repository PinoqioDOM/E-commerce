import React from 'react'
import ProductCard from '../components/ProductCard'
import categories from '../data/categories.js'
import laptops from '../data/products/laptops.js'
import monitors from '../data/products/monitors.js'
import keyboards from '../data/products/keyboards.js'
import mouse from '../data/products/mouse.js'
import headphones from '../data/products/headphones.js'
import printers from '../data/products/printers.js'
import gaming from '../data/products/gaming.js'
import { useNavigate } from 'react-router-dom'

const Home = ({ onAddToCart, onAddToWishlist }) => {
  const navigate = useNavigate()
  const allProducts = [...laptops, ...monitors, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming]

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">კატეგორიები</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => navigate(`/category/${category.id}`)}
            className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <span className="text-lg font-semibold">{category.name}</span>
          </div>
        ))}
      </div>

      {categories.map((category) => {
        const categoryProducts = allProducts.filter(p => p.categoryId === category.id)
        const visibleProducts = categoryProducts.slice(0, 5) 
        if (visibleProducts.length > 0) {
          return (
            <div key={category.id} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
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
              {categoryProducts.length > 5 && (
                <button
                  onClick={() => navigate(`/category/${category.id}`)}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  ნახე ყველა 
                </button>
              )}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default Home