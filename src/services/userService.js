const API_BASE_URL = 'http://localhost:8000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'მომხმარებლის ინფორმაციის მიღების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('მომხმარებლის ინფორმაციის მიღების შეცდომა:', error);
    throw error;
  }
};

export const updateProfile = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პროფილის განახლების შეცდომა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('პროფილის განახლების შეცდომა:', error);
    throw error;
  }
};
