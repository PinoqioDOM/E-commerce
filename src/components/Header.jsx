import { useState } from 'react'
import Logo from '../assets/Logo.png'
import Login from '../pages/Login'

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)

  const handleLoginClick = () => {
    setShowLogin(true)
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }

  return (
    <>
      <div className='navbar-container'>
        <img src={Logo} alt="Veli Logo" className='logo' />
        
        <div className="search-wrapper">
          <input
            type="text"
            name="search"
            id="search"
            className='search-input'
            placeholder='რას ეძებ?'
          />
          <i className="fa-solid fa-magnifying-glass search-icon fa-xl"></i>
        </div>

        <div className="basket">
          <div className='nav-item cart glass-button'>
            <i className="fa-solid fa-basket-shopping fa-lg"></i>
            <span className='count'>0</span>
            <span>კალათა</span>
          </div>
        </div>

        <nav>
          <div className='login-btn glass-button'>
            <i className="fa-solid fa-circle-user fa-lg"></i>
            <span onClick={handleLoginClick}>შესვლა</span>
          </div>
        </nav>
      </div>

      {/* Modal overlay for Login component */}
      {showLogin && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseLogin}
        >
          <div 
            className="relative bg-white rounded-2xl shadow-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseLogin}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            
            {/* Login component content */}
            <div className="p-8">
              <Login />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header