import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

const UserWishlist = () => {
  const { wishlistItems, loading, addToCart, removeFromWishlist } = useCart();

  if (loading) {
    return <p className="text-center mt-8">ჩატვირთვა...</p>;
  }

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">სურვილების სია</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={() => addToCart(item)}
              onAddToWishlist={() => removeFromWishlist(item.id)}
            />
          ))
        ) : (
          <p>სურვილების სია ცარიელია.</p>
        )}
      </div>
    </div>
  );
};

export default UserWishlist;