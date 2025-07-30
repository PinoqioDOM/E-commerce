import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../design/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Eva Solo, Multi, ალუმინის ქვაბი, 3.6 ლ",
      price: 263.73,
      oldPrice: 447.95,
      discount: 41,
      quantity: 1,
      image: "/your-product-image.jpg"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1>შენი კალათა</h1>
          <div className="empty-cart">
            <p>თქვენი კალათა ცარიელია</p>
            <Link to="/" className="btn green-btn">შოპინგის გაგრძელება</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 style={{textAlign:'start'}}>შენს კალათაში  {getTotalItems()} ნივთია</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-full">
                <img src={item.image} alt={item.name} className="product-img-full" />
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="price-section">
                    <strong className="current-price">{item.price} ₾</strong>
                    <span className="old-price">{item.oldPrice} ₾</span>
                    <span className="discount">-{item.discount}%</span>
                  </div>
                </div>
                
                <div className="quantity-section">
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="item-total">
                  <strong>{(item.price * item.quantity).toFixed(2)} ₾</strong>
                </div>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  className="remove-btn-full"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-card">
              <h3>შეკვეთის შეჯამება</h3>
              
              <div className="summary-row">
                <span>პროდუქტები ({getTotalItems()})</span>
                <span>{getTotalPrice()} ₾</span>
              </div>
              
              <div className="summary-row">
                <span>მიწოდება</span>
                <span>უფასო</span>
              </div>
              
              <hr />
              
              <div className="summary-row total">
                <strong>სულ: {getTotalPrice()} ₾</strong>
              </div>
              
              <Link to="/checkout" className="btn green-btn checkout-btn">
                ყიდვა
              </Link>
              
              <Link to="/" className="continue-shopping">
                შოპინგის გაგრძელება
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;