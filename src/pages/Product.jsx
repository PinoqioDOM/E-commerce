import React from 'react'
import { useParams } from 'react-router-dom'
import laptops from '../data/products/laptops.js'
import monitors from '../data/products/monitors.js'
import keyboards from '../data/products/keyboards.js'
import mouse from '../data/products/mouse.js'
import headphones from '../data/products/headphones.js'
import printers from '../data/products/printers.js'
import gaming from '../data/products/gaming.js'

const Product = ({ onAddToCart, onAddToWishlist }) => {
  const { id } = useParams()
  const allProducts = [...laptops, ...desktops, ...monitors, ...keyboards, ...mouse, ...headphones, ...printers, ...gaming]
  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) return <div>პროდუქტი არ მოიძებნა</div>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.imageId ? `/images/${product.imageId}.jpg` : '/default.jpg'} alt={product.name} className="w-full max-w-md mb-4" />
      <p className="text-xl font-bold mb-2">{product.price} ₾</p>
      <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white p-2 rounded">დაამატე კალათაში</button>
      <button onClick={() => onAddToWishlist(product)} className="ml-2 bg-red-500 text-white p-2 rounded">დაამატე რჩეულებში</button>
    </div>
  )
}

export default Product