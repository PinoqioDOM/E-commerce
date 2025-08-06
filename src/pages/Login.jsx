import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "ავტორიზაცია" : "რეგისტრაცია");
    // აქ უნდა იყოს შენი ავტორიზაციის/რეგისტრაციის ლოგიკა (მაგ., API-ს გამოძახება)
    // მაგალითად, თუ ფორმა სწორადაა შევსებული:
    dispatch(login()); // ავტორიზაციის/რეგისტრაციის წარმატების შემდეგ
    navigate("/"); 
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
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
            onClick={() => setIsLogin(true)}
          >
            ავტორიზაცია
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium transition-colors border-b-2 ${
              !isLogin
                ? "text-black border-black font-bold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            } cursor-pointer`}
            onClick={() => setIsLogin(false)}
          >
            რეგისტრაცია
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="მეილი*"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
            required
          />

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="სახელი, გვარი*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="მობილურის ნომერი*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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

          <button
            type="submit"
            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors mt-6 cursor-pointer"
          >
            {isLogin ? "შესვლა" : "რეგისტრაცია"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;