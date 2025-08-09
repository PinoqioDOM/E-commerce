import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, logout, clearAuthError, userRegister } from '../store/authSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && status === 'succeeded') {
      navigate("/");
    }
  }, [isLoggedIn, status, navigate]);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [isLogin, formData, dispatch]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearAuthError());

    if (isLogin) {
      if (!formData.email || !formData.password) {
        return;
      }
      dispatch(userLogin({ email: formData.email, password: formData.password }));
    } else {
      if (!formData.email || !formData.password || !formData.fullName || !formData.phoneNumber || !formData.confirmPassword) {
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        return;
      }
      dispatch(userRegister(formData));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 font-sans">
      <div className="w-full max-w-md mx-auto p-8 bg-white rounded-[20px] shadow-xl relative animate-in">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 cursor-pointer"
        >
          ×
        </button>
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "გაიარე ავტორიზაცია" : "შექმენი ანგარიში"}
        </h3>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`flex-1 py-3 text-center font-medium transition-colors border-b-2 ${
              isLogin
                ? "text-black border-black font-bold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            } cursor-pointer`}
            onClick={() => {
              setIsLogin(true);
              setFormData({ email: '', password: '', fullName: '', phoneNumber: '', confirmPassword: '' });
              dispatch(clearAuthError());
            }}
          >
            ავტორიზაცია
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium transition-colors border-b-2 ${
              !isLogin
                ? "text-black border-black font-bold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            } cursor-pointer`}
            onClick={() => {
              setIsLogin(false);
              setFormData({ email: '', password: '', fullName: '', phoneNumber: '', confirmPassword: '' });
              dispatch(clearAuthError());
            }}
          >
            რეგისტრაცია
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="მეილი*"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
            required
          />

          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="სახელი, გვარი*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="მობილურის ნომერი*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="პაროლი*"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {!isLogin && (
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="გაიმეორე პაროლი*"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-gray-600 hover:text-gray-800 transition-colors"
              >
                {showConfirm ? "🙈" : "👁️"}
              </button>
            </div>
          )}

          {isLogin && (
            <p className="text-sm text-green-700 cursor-pointer hover:text-green-800 transition-colors -mt-2">
              დაგავიწყდა პაროლი?
            </p>
          )}

          {error && (
            <p className="text-red-600 text-center text-sm mt-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className={`w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors mt-6 ${
              status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={status === 'loading'}
          >
            {status === 'loading'
              ? (isLogin ? "შესვლა..." : "რეგისტრაცია...")
              : (isLogin ? "შესვლა" : "რეგისტრაცია")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;