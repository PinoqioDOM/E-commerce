import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const MessageModal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-4 text-center shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">შეტყობინება</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          დახურვა
        </button>
      </div>
    </div>
  );
};

const Checkout = ({ onCloseCheckout }) => {
  const { cartItems, clearCart } = useCart(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  });
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.address || !formData.cardNumber) {
      setMessageContent('გთხოვთ შეავსოთ ყველა ველი.');
      setMessageModalOpen(true);
      return;
    }
    
    if (cartItems.length === 0) {
      setMessageContent('თქვენი კალათა ცარიელია. გთხოვთ, დაამატოთ პროდუქტები.');
      setMessageModalOpen(true);
      return;
    }

    console.log('Order:', { products: cartItems, totalAmount, customerInfo: formData });
    setMessageContent('შეკვეთა წარმატებით გაიგზავნა!');
    setMessageModalOpen(true);

    clearCart(); 

    setFormData({
      name: '',
      email: '',
      address: '',
      cardNumber: '',
    });
  };

  const handleMessageModalClose = () => {
    setMessageModalOpen(false);
    if (messageContent === 'შეკვეთა წარმატებით გაიგზავნა!') {
      onCloseCheckout(); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sans">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">შეკვეთის განთავსება</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">შეკვეთილი პროდუქტები:</h3>
          {cartItems.length > 0 ? (
            <div className="space-y-2 mb-4 border rounded-md p-3 bg-gray-50">
              {cartItems.map((product, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span className="text-gray-700 font-medium">{product.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">x{product.quantity}</span>
                    <span className="font-semibold text-blue-600">{product.price}₾</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mb-4 italic">არ არის შერჩეული პროდუქტები</p>
          )}
          
          <div className="flex justify-between items-center text-xl font-bold border-t pt-4 mt-4">
            <span className="text-gray-800">ჯამი:</span>
            <span className="text-green-600">{totalAmount}₾</span>
          </div>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="სახელი"
            value={formData.name}
            onChange={handleChange('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          
          <input
            type="email"
            placeholder="ემაილი"
            value={formData.email}
            onChange={handleChange('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          
          <input
            type="text"
            placeholder="მისამართი"
            value={formData.address}
            onChange={handleChange('address')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          
          <input
            type="text"
            placeholder="ბარათის ნომერი"
            value={formData.cardNumber}
            onChange={handleChange('cardNumber')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              შეკვეთის დასრულება ({totalAmount}₾)
            </button>
            <button
              onClick={onCloseCheckout} 
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              გაუქმება
            </button>
          </div>
        </div>
      </div>
      <MessageModal
        message={messageContent}
        isOpen={messageModalOpen}
        onClose={handleMessageModalClose}
      />
    </div>
  );
};

export default Checkout;
