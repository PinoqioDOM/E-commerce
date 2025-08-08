const API_BASE_URL = 'http://localhost:8000/api'; 

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'ავთენტიფიკაციის შეცდომა');
    }

    const data = await response.json();
    // ტოკენის შენახვა localStorage-ში ან სხვაგან
    localStorage.setItem('authToken', data.token);
    return data;
  } catch (error) {
    console.error('შესვლის შეცდომა:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'რეგისტრაციის შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('რეგისტრაციის შეცდომა:', error);
    throw error;
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};
