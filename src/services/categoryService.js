const API_BASE_URL = 'http://localhost:3000'; 

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-category`, {
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

// GET კატეგორია ID-ით
export const getCategoryById = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-category/${categoryId}`, {
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

// POST კატეგორიის დამატება
export const addCategory = async (categoryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-category`, {
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

// POST მრავალი კატეგორიის დამატება
export const addManyCategories = async (categoriesData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-category/many`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(categoriesData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'მრავალი კატეგორიის დამატების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('მრავალი კატეგორიის დამატების შეცდომა:', error);
    throw error;
  }
};

// DELETE კატეგორიის წაშლა ID-ით
export const deleteCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-category/${categoryId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'კატეგორიის წაშლის შეცდომა');
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : { message: 'კატეგორია წარმატებით წაიშალა' };
    
    return data;
  } catch (error) {
    console.error(`კატეგორიის ${categoryId} წაშლის შეცდომა:`, error);
    throw error;
  }
};

// DELETE ყველა კატეგორია
export const deleteAllCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-category/delete-all`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'ყველა კატეგორიის წაშლის შეცდომა');
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : { message: 'ყველა კატეგორია წარმატებით წაიშალა' };
    
    return data;
  } catch (error) {
    console.error('ყველა კატეგორიის წაშლის შეცდომა:', error);
    throw error;
  }
};