import React from 'react';
import { Link } from 'react-router-dom';
import '../design/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-code">404</div>
        <div className="error-message">
          <h1>გვერდი ვერ მოიძებნა</h1>
          <p>სამწუხაროდ, თქვენ მიერ მოთხოვნილი გვერდი არ არსებობს ან გადატანილია.</p>
        </div>
        
        <div className="error-actions">
          <Link to="/" className="btn primary-btn">
            🏠 მთავარ გვერდზე დაბრუნება
          </Link>
          <button onClick={() => window.history.back()} className="btn secondary-btn">
            ← უკან დაბრუნება
          </button>
        </div>
        
        <div className="suggestions">
          <h3>შესაძლოა დაგაინტერესებთ:</h3>
          <div className="suggestion-links">
            <Link to="/" className="suggestion-link">მთავარი გვერდი</Link>
            <Link to="/products" className="suggestion-link">პროდუქტები</Link>
            <Link to="/cart" className="suggestion-link">კალათა</Link>
            <Link to="/contact" className="suggestion-link">კონტაქტი</Link>
          </div>
        </div>
      </div>
      
      <div className="error-illustration">
        <div className="floating-elements">
          <div className="element element-1">🛒</div>
          <div className="element element-2">📦</div>
          <div className="element element-3">🔍</div>
          <div className="element element-4">💫</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;