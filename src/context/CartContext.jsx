import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';

import {
  getCategories,
  getCategoryById,
  addCategory,
  deleteCategory,
} from '../services/categoryService';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart უნდა გამოყენებულ იქნეს CartProvider-ის შიგნით');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch {
      return [];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const localData = localStorage.getItem('wishlistItems');
      return localData ? JSON.parse(localData) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState([]);

  // პროდუქტის და კატეგორიის წამოღება backend-იდან
  useEffect(() => {
    const fetchData = async () => {
      try {
        const prodData = await getProducts();
        setProducts(prodData);

        const catData = await getCategories();
        setCategories(catData);
      } catch (error) {
        console.error('მონაცემების წამოღების შეცდომა:', error);
      }
    };
    fetchData();
  }, []);

  // localStorage სინქრონიზაცია
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // კალათა
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const value = {
    products,
    categories,
    cartItems,
    wishlistItems,
    orders,
    addToCart,
    removeFromCart,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    addOrder,
    cartItemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),

    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,

    getCategoryById,
    addCategory,
    deleteCategory,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
