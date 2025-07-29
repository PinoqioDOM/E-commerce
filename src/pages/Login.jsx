import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); 
  };

  return (
    <div className="overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={handleClose}>×</button>

        <h2>{activeTab === 'login' ? 'გაიარე ავტორიზაცია' : 'გაიარე რეგისტრაცია'}</h2>

        <div className="auth-tabs">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            ავტორიზაცია
          </button>

          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => setActiveTab('register')}
          >
            რეგისტრაცია
          </button>
        </div>

        {activeTab === 'login' ? (
          <form className="log-in-form">
            <input type="email" placeholder="მეილი" required />
            <input type="password" placeholder="პაროლი" required />
            <button type="submit">შესვლა</button>
          </form>
        ) : (
          <form className="log-in-form">
            <input type="email" placeholder="მეილი*" required />
            <input type="text" placeholder="სახელი,გვარი*" required />
            <input type="tel" placeholder="მობილურის ნომერი*" required />
            <input type="password" placeholder="პაროლი*" required />
            <button type="submit">რეგისტრაცია</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
