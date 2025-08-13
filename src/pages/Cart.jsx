import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5.00;
    const discount = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
    const total = subtotal + shipping;

    const handleQuantityChange = (id, action) => {
        const item = cartItems.find(i => i.id === id);
        if (item) {
            const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity > 0) {
                updateQuantity(id, newQuantity);
            } else {
                removeFromCart(id);
            }
        }
    };

    return (
        <div className="container mx-auto p-4 flex flex-col lg:flex-row">

            <div className="w-full lg:w-2/3 pr-4 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold mb-4">კალათაში {cartItems.length} ნივთი</h2>
                
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">თქვენი კალათა ცარიელია.</div>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 p-4 border rounded-lg">
                            <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mr-4">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain p-1" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800 text-sm mb-1">{item.name}</h3>
                                    <div className="text-sm text-gray-500">მიწოდება: 8-10 დღე</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto justify-end">
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
                                <span className="text-lg font-bold text-gray-900 min-w-[80px] text-right">{(item.price * item.quantity).toFixed(2)} ₾</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 hover:bg-red-50 rounded-lg transition-colors w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 cursor-pointer"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="w-full lg:w-1/3 pl-4">
                <div className="sticky top-20 bg-white p-4 border rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">გადახდა</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>ჯამური ({cartItems.length} ნივთი)</span>
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
                        <div className="flex justify-between font-bold text-lg border-t mt-2 pt-2">
                            <span>სულ</span>
                            <span>{(total - discount).toFixed(2)} ₾</span>
                        </div>
                    </div>
                    <Link
                        to="/checkout"
                        className="mt-4 w-full bg-green-400 text-gray-800 py-3 px-4 rounded-lg font-bold hover:bg-green-500 transition-colors flex items-center justify-center hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    >
                        გადახდა
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;