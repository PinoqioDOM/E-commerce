import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import Cart from '../assets/shopping-icon.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search submitted:', searchQuery);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log('Live search:', e.target.value);
  };

  return (
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
            aria-label="ძებნა"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>

        <div className="nav-right">
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'cart-link active' : 'cart-link'}>
            <div className="cart-icon-wrapper">
              <img src={Cart} alt="Cart" width="30px" />
              <span className="cart-count">0</span>
            </div>
            <span>კალათა</span>
          </NavLink>

          <Link to="/login" className="auth-link">
            👤 შესვლა
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;