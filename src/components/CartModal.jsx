import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// onRemoveProduct props-ისთვის default ღირებულება დაემატა
const CartModal = ({ isOpen, onClose, cartButtonRef, cartItems = [], onRemoveProduct = () => {} }) => {
  const [quantity, setQuantity] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) navigate('/');
  }, [isOpen, navigate]);

  const handleQuantityChange = (productId, action) => {
    setQuantity(prevQuantities => {
      const currentQty = prevQuantities[productId] || 1;
      if (action === 'increase') {
        return { ...prevQuantities, [productId]: currentQty + 1 };
      } else if (action === 'decrease') {
        if (currentQty <= 1) {
          onRemoveProduct(productId);
          const newQuantities = { ...prevQuantities };
          delete newQuantities[productId];
          return newQuantities;
        }
        return { ...prevQuantities, [productId]: currentQty - 1 };
      }
      return prevQuantities;
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const qty = quantity[item.id] || 1;
    return sum + (item.price * qty);
  }, 0).toFixed(2);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      <div 
        className="absolute top-full right-0 mt-2 bg-white rounded-xl w-96 shadow-2xl border z-50"
        style={{
          top: '100%',
          right: 0,
          marginTop: '15px',
          maxHeight: '70vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t rotate-45 transform"></div>
        
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

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center py-4">თქვენი კალათა ცარიელია</p>
          ) : (
            cartItems.map((item) => {
              const itemQty = quantity[item.id] || 1;

              return (
                <div key={item.id} className="flex items-center gap-4 mb-4 last:mb-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={item.imageId ? `/images/${item.imageId}.jpg` : '/default.jpg'}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm mb-1 cursor-pointer">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-gray-900">{item.price} ₾</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button 
                        onClick={() => handleQuantityChange(item.id, 'decrease')}
                        className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-600 cursor-pointer"
                        disabled={itemQty <= 1}
                      >
                        −
                      </button>
                      <span className="px-4 py-2 text-center min-w-[50px] font-medium text-gray-800">
                        {itemQty}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 'increase')}
                        className="p-2 hover:bg-gray-50 transition-colors w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-600 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemoveProduct(item.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-800 text-lg">სულ : {totalPrice} ₾</span>
            </div>
            
            <div className="flex gap-3">
              <Link to="/cart" onClick={onClose} className="flex-1 bg-black text-white text-center py-3 px-4 rounded-lg font-bold hover:bg-gray-800 transition-colors cursor-pointer">
                ნივთები ({cartItems.length})
              </Link>
              <Link to="/checkout" onClick={onClose} className="flex-1 bg-green-400 text-gray-800 text-center py-3 px-4 rounded-lg font-bold hover:bg-green-500 transition-colors cursor-pointer">
                ყიდვა
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartModal;