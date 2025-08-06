import React from 'react'
import ProductCard from '../components/ProductCard'
import categories from '../data/categories.js'
import keyboards from '../data/products/keyboards.js' 
import { useNavigate } from 'react-router-dom'

const Home = ({ onAddToCart, onAddToWishlist }) => {
  const navigate = useNavigate()
  const allProducts = [...keyboards]

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
        const categoryProducts = allProducts.filter(p => p.categoryId === category.id).slice(0, 5)
        if (categoryProducts.length > 0) {
          return (
            <div key={category.id} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onAddToWishlist={onAddToWishlist}
                  />
                ))}
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default Home