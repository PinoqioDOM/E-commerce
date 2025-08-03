import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'BePureHome, ალუმინის ქვაბი', price: 196.00, quantity: 1, originalPrice: 447.95, discount: '-47%' },
    { id: 2, name: 'WOUD, ჭიქა, 26 x 46 ი', price: 279.92, quantity: 1, originalPrice: 529.00, discount: '-47%' },
  ]);

  const handleQuantityChange = (id, action) => {
    setItems(items.map(item =>
      item.id === id
        ? {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : Math.max(0, item.quantity - 1)
          }
        : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const discount = items.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto p-4 flex">

      <div className="w-2/3 pr-4">
        <h2 className="text-2xl font-bold mb-4">კალათაში 4 ნივთი</h2>
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4 p-4 border rounded-lg">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mr-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='80' height='40' x='10' y='30' fill='%23e5e5e5' rx='5'/%3E%3Crect width='10' height='20' x='5' y='35' fill='%23999'/%3E%3Crect width='10' height='20' x='85' y='35' fill='%23999'/%3E%3C/svg%3E"
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm mb-1">{item.name}</h3>
                <div className="text-sm text-gray-500">ოქმძ: 8-10 დღე</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(item.id, 'decrease')}
                  className="p-2 hover:bg-gray-50 transition-colors w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-600 cursor-pointer"
                >
                  −
                </button>
                <span className="px-4 py-2 text-center min-w-[50px] font-medium text-gray-800">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, 'increase')}
                  className="p-2 hover:bg-gray-50 transition-colors w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-600 cursor-pointer"
                >
                  +
                </button>
              </div>
              <span className="text-lg font-bold text-gray-900">{item.price.toFixed(2)} ₾</span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 cursor-pointer"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/3 pl-4">
        <div className="sticky top-20 bg-white p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">გადახდა</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>ჩვეულებრივი ({items.length})</span>
              <span>{subtotal.toFixed(2)} ₾</span>
            </div>
            <div className="flex justify-between">
              <span>მიწოდების ღირებულება</span>
              <span>{shipping.toFixed(2)} ₾</span>
            </div>
            <div className="flex justify-between">
              <span>ფასდაკლება</span>
              <span>-{discount.toFixed(2)} ₾</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>ჯამური ღირებულება</span>
              <span>{total.toFixed(2)} ₾</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="mt-4 w-full bg-green-400 text-gray-800 py-3 px-4 rounded-lg font-bold hover:bg-green-500 transition-colors flex items-center justify-center hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"          >
            გადახდა
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;