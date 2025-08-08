const API_BASE_URL = 'http://localhost:8000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'კატეგორიების მიღების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('კატეგორიების მიღების შეცდომა:', error);
    throw error;
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${categoryId}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'კატეგორიის მიღების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`კატეგორიის ${categoryId} მიღების შეცდომა:`, error);
    throw error;
  }
};

export const addCategory = async (categoryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(categoryData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'კატეგორიის დამატების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('კატეგორიის დამატების შეცდომა:', error);
    throw error;
  }
};
