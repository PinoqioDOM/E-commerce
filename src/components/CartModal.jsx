import React, { useState } from 'react';

const CartModal = ({ isOpen, onClose, cartButtonRef }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = (263.73 * quantity).toFixed(2);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal positioned below cart */}
      <div 
        className="absolute top-full right-0 mt-2 bg-white rounded-xl w-96 shadow-2xl border z-50"
        style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '15px',
          width: '500px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Arrow pointing up */}
        <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t rotate-45 transform"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            ჩემი კალათა
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Product Item */}
        <div className="p-4">
          <div className="flex items-center gap-4">
            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='80' height='40' x='10' y='30' fill='%23e5e5e5' rx='5'/%3E%3Crect width='10' height='20' x='5' y='35' fill='%23999'/%3E%3Crect width='10' height='20' x='85' y='35' fill='%23999'/%3E%3C/svg%3E"
                alt="Eva Solo, Multi pot"
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-800 text-sm mb-1 cursor-pointer">
                Eva Solo, Multi, ალუმინის ქვაბი, 3.6 ლ
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-gray-900">263.73 ₾</span>
                <span className="text-sm text-gray-500 line-through">447.95 ₾</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                  -41%
                </span>
              </div>
            </div>

            {/* Delete Button */}
            <button className="p-2 hover:bg-red-50 rounded-lg transition-colors w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 cursor-pointer">
              🗑️
            </button>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-end mt-3">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button 
                onClick={() => handleQuantityChange('decrease')}
                className="p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 cursor-pointer"
                disabled={quantity === 1}
              >
                −
              </button>
              <span className="px-4 py-2 text-center min-w-[50px] font-medium text-gray-800">
                {quantity}
              </span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="p-3 hover:bg-gray-50 transition-colors w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-gray-800 text-lg">სულ : {totalPrice} ₾</span>
          </div>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer">
              ნივთები (1)
            </button>
            <button className="flex-1 bg-green-400 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-green-500 transition-colors cursor-pointer">
              ყიდვა
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;