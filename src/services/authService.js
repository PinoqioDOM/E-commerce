const API_BASE_URL = 'http://localhost:3000/api';

// helper function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Function to log in a user
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
    localStorage.setItem('authToken', data.access_token);
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

export const getCurrentUser = async () => {
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error('ავტორიზაციის ჟეტონი ვერ მოიძებნა');
    }

    const response = await fetch(`${API_BASE_URL}/user/current-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'მომხმარებლის მონაცემების მიღება ვერ მოხერხდა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('მომხმარებლის მონაცემების მიღების შეცდომა:', error);
    throw error;
  }
};

export const updateUser = async (updatedUserData) => {
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error('ავტორიზაციის ჟეტონი ვერ მოიძებნა');
    }

    const response = await fetch(`${API_BASE_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUserData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'მომხმარებლის მონაცემების განახლება ვერ მოხერხდა');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('მომხმარებლის მონაცემების განახლების შეცდომა:', error);
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error('ავტორიზაციის ჟეტონი ვერ მოიძებნა');
    }

    const response = await fetch(`${API_BASE_URL}/user/change-password`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(passwordData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'პაროლის შეცვლა ვერ მოხერხდა');
    }

    return await response.json();
  } catch (error) {
    console.error('პაროლის შეცვლის შეცდომა:', error);
    throw error;
  }
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};