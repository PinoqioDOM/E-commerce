import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from './ProductCard'

const UserWishlist = () => {
  const location = useLocation()
  const wishlistItems = location.state?.wishlistItems || []

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">სურვილების სია</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => <ProductCard key={item.id} product={item} onAddToCart={() => {}} onAddToWishlist={() => {}} />)
        ) : (
          <p>სურვილების სია ცარიელია.</p>
        )}
      </div>
    </div>
  )
}

export default UserWishlist