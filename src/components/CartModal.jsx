import { Link } from 'react-router-dom';
import '../design/CartModal.css';

const CartModal = ({ onClose }) => {
  const handleViewCart = () => {
    onClose();
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h3>ჩემი კალათა</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-item">
          <img src="/your-product-image.jpg" alt="product" className="product-img" />
          <div className="cart-details">
            <p>Eva Solo, Multi, ალუმინის ქვაბი, 3.6 ლ</p>
            <div className="price">
              <strong>263.73 ₾</strong>
              <span className="old-price">447.95 ₾</span>
              <span className="discount">-41%</span>
            </div>
            <div className="quantity-control">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <button className="remove-btn">🗑️</button>
        </div>

        <div className="cart-modal-footer">
          <div>სულ: <strong>263.73 ₾</strong></div>
          <div className="cart-actions">
            <Link to="/cart" className="btn black-btn" onClick={handleViewCart}>ნახვა</Link>
            <Link to="/checkout" className="btn green-btn">ყიდვა</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;