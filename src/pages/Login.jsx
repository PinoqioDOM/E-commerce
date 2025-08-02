import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "ავტორიზაცია" : "რეგისტრაცია");
    navigate("/"); // Redirect to home after submission
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-full max-w-md mx-auto p-8 bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative">
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
            className={`flex-1 py-3 text-center font-medium transition-all border-b-2 ${
              isLogin
                ? "text-black border-black font-bold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            } cursor-pointer`}
            onClick={() => setIsLogin(true)}
          >
            ავტორიზაცია
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium transition-all border-b-2 ${
              !isLogin
                ? "text-black border-black font-bold"
                : "text-gray-500 border-transparent hover:text-gray-700"
            } cursor-pointer`}
            onClick={() => setIsLogin(false)}
          >
            რეგისტრაცია
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="მეილი*"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
          />

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="სახელი, გვარი*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
              />
              <input
                type="tel"
                placeholder="მობილურის ნომერი*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
              />
            </>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="პაროლი*"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-gray-600 hover:text-gray-800 transition-colors"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {!isLogin && (
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="გაიმეორე პაროლი*"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-600 transition-colors"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-gray-600 hover:text-gray-800 transition-colors"
              >
                {showConfirm ? "🙈" : "👁️"}
              </span>
            </div>
          )}

          {isLogin && (
            <p className="text-sm text-green-700 cursor-pointer hover:text-green-800 transition-colors -mt-2">
              დაგავიწყდა პაროლი?
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors mt-6 cursor-pointer"
          >
            {isLogin ? "შესვლა" : "რეგისტრაცია"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;