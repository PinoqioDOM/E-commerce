import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path='/cart' element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<SingleProduct />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App