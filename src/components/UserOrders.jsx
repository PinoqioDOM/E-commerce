import React from 'react';
import { useCart } from '../context/CartContext';

const UserOrders = () => {
  const { orders } = useCart();

  const getStatusColor = (status) => {
    switch (status) {
      case 'დამუშავებაში':
        return 'text-orange-600 bg-orange-100';
      case 'გაგზავნილი':
        return 'text-blue-600 bg-blue-100';
      case 'მიწოდებული':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">შეკვეთები</h2>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-gray-500 text-lg">თქვენ ჯერ არ გაქვთ შეკვეთები</p>
          <p className="text-gray-400 text-sm mt-2">დაუკვეთეთ რამე და აქ გამოჩნდება</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">შეკვეთები</h2>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  შეკვეთა #{order.id}
                </h3>
                <p className="text-sm text-gray-600">
                  {order.date} - {order.time}
                </p>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">მიღებული პროდუქტები:</h4>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 px-3 bg-white rounded border">
                    <span className="text-gray-700">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">x{item.quantity}</span>
                      <span className="font-semibold text-blue-600">{item.price}₾</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <p><strong>სახელი:</strong> {order.customerInfo.name}</p>
                  <p><strong>ემაილი:</strong> {order.customerInfo.email}</p>
                  <p><strong>მისამართი:</strong> {order.customerInfo.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">
                    ჯამი: {order.total}₾
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;