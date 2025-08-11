const API_BASE_URL = 'http://localhost:3000';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პროდუქტების მიღების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('პროდუქტების მიღების შეცდომა:', error);
    throw error;
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პროდუქტის დამატების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('პროდუქტის დამატების შეცდომა:', error);
    throw error;
  }
};

// POST მრავალი პროდუქტის დამატება
export const addManyProducts = async (productsData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/many`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(productsData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'მრავალი პროდუქტის დამატების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('მრავალი პროდუქტის დამატების შეცდომა:', error);
    throw error;
  }
};

// GET პროდუქტი ID-ით
export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პროდუქტის მიღების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`პროდუქტის ${productId} მიღების შეცდომა:`, error);
    throw error;
  }
};

// PUT პროდუქტის განახლება
export const updateProduct = async (productId, productData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პროდუქტის განახლების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`პროდუქტის ${productId} განახლების შეცდომა:`, error);
    throw error;
  }
};

// DELETE პროდუქტი ID-ით
export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პროდუქტის წაშლის შეცდომა');
    }

    return { success: true, message: 'პროდუქტი წარმატებით წაიშალა' };
  } catch (error) {
    console.error(`პროდუქტის ${productId} წაშლის შეცდომა:`, error);
    throw error;
  }
};

export const deleteAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/delete-all`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'ყველა პროდუქტის წაშლის შეცდომა');
    }

    return { success: true, message: 'ყველა პროდუქტი წარმატებით წაიშალა' };
  } catch (error) {
    console.error('ყველა პროდუქტის წაშლის შეცდომა:', error);
    throw error;
  }
};