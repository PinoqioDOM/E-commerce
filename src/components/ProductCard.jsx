import React from 'react'
import NinjaPic from '../assets/ninja.jpg'

const ProductCard = () => {
  return (
    <div className="relative w-64 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <img src={NinjaPic} alt="Product" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Ninja AF140EU Air Fryer 4.7L Black</h3>
        <p className="text-xl font-bold text-gray-900 mt-2">399.00 ₾</p>
      </div>
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
          <span>🛒</span>
        </button>
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  )
}

export default ProductCard