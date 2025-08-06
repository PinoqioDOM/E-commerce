import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import laptops from '../data/products/laptops.js'
import desktops from '../data/products/desktops.js'
import monitors from '../data/products/monitors.js'
import keyboards from '../data/products/keyboards.js'
import mouse from '../data/products/mouse.js'
import headphones from '../data/products/headphones.js'
import printers from '../data/products/printers.js'
import gaming from '../data/products/gaming.js'

const CategoryPage = ({ onAddToCart, onAddToWishlist }) => {
  const { id } = useParams()
  const allProducts = [...laptops, ...desktops, ...monitors, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming]
  const categoryProducts = allProducts.filter(p => p.categoryId === parseInt(id))

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">პროდუქტები</h1>
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

export default CategoryPage