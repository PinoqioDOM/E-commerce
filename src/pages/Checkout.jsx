import React, { useState } from 'react'

const Checkout = ({ products = [], totalAmount = 0 }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = () => {
    console.log('Order:', { products, totalAmount, customerInfo: formData });
    alert('შეკვეთა წარმატებით გაიგზავნა!');
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">შეკვეთის განთავსება</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">შეკვეთილი პროდუქტები:</h3>
          {products.length > 0 ? (
            <div className="space-y-2 mb-4">
              {products.map((product, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">{product.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">x{product.quantity}</span>
                    <span className="font-semibold">{product.price}₾</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mb-4">არ არის შერჩეული პროდუქტები</p>
          )}
          
          <div className="flex justify-between items-center text-xl font-bold border-t pt-2">
            <span>ჯამი:</span>
            <span>{totalAmount}₾</span>
          </div>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="სახელი"
            value={formData.name}
            onChange={handleChange('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="email"
            placeholder="ემაილი"
            value={formData.email}
            onChange={handleChange('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="text"
            placeholder="მისამართი"
            value={formData.address}
            onChange={handleChange('address')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="text"
            placeholder="ბარათის ნომერი"
            value={formData.cardNumber}
            onChange={handleChange('cardNumber')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              შეკვეთის დასრულება ({totalAmount}₾)
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              გაუქმება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout