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
import UserReturns from "./components/UserReturns"
import UserAddress from "./components/UserAddress"
import UserNotifications from "./components/UserNotifications"
import Product from "./pages/Product"

function App() {
  return (
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
            <Route path="returns" element={<UserReturns />} />
            <Route path="address" element={<UserAddress />} />
            <Route path="notifications" element={<UserNotifications />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>

          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App