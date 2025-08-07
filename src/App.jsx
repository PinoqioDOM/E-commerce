import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Error from "./pages/Error"
import UserPage from "./pages/UserPage"
import UserSettings from "./components/UserSettings"
import UserOrders from "./components/UserOrders"
import UserWishlist from "./components/UserWishlist"
import UserAddress from "./components/UserAddress"
import Product from "./pages/Product"
import { Provider } from 'react-redux'
import { CartProvider } from './context/CartContext';
import { store } from './store'
import UserAddProduct from "./components/UserAddProduct"

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
                          
              <Route path="/user" element={<UserPage />}>
                <Route index element={<UserSettings />} />
                <Route path="orders" element={<UserOrders />} />
                <Route path="wishlist" element={<UserWishlist />} />
                <Route path="address" element={<UserAddress />} />
                <Route path="settings" element={<UserSettings />} />
                <Route path="addproduct" element={<UserAddProduct />} /> 
              </Route>

              <Route path="/product/:id" element={<Product />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  )
}

export default App