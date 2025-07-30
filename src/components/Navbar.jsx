import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Cart from '../assets/shopping-icon.png';
import CartModal from './CartModal';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) console.log('Search submitted:', searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/">
            <img src={Logo} alt="Logo" width="100px" />
          </Link>

          <form className="search-form" onSubmit={handleSearchSubmit}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="რას ეძებ"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>

          <div className="nav-right">
            <button className="cart-link" onClick={() => setShowCart(true)}>
              <div className="cart-icon-wrapper">
                <img src={Cart} alt="Cart" width="30px" />
                <span className="cart-count">1</span>
              </div>
              <span>კალათა</span>
            </button>

            <Link to="/login" className="auth-link">👤 შესვლა</Link>
          </div>
        </div>
      </nav>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
};

export default Navbar;
