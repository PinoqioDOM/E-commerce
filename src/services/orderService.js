const API_BASE_URL = 'http://localhost:3000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

export const createOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'შეკვეთის შექმნის შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('შეკვეთის შექმნის შეცდომა:', error);
    throw error;
  }
};

export const getUserOrders = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/user`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'შეკვეთების ისტორიის მიღების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('შეკვეთების ისტორიის მიღების შეცდომა:', error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}/status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status: newStatus }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'შეკვეთის სტატუსის განახლების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`შეკვეთის ${orderId} სტატუსის განახლების შეცდომა:`, error);
    throw error;
  }
};
