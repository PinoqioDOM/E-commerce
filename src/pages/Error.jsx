import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      
      {/* Badge Error Card */}
      <div className="relative transform hover:scale-105 transition-all duration-300 hover:rotate-1">
        {/* Error Badge */}
        <div className="absolute -top-3 -right-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white shadow-lg animate-pulse border-2 border-white">
            404 ERROR
          </span>
        </div>
        
        {/* Main Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30 max-w-lg mx-auto hover:shadow-3xl transition-all duration-500">
          {/* Card Header with Icon Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/30">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              {/* Floating mini badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-gray-800">!</span>
              </div>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="text-center text-white">
            <h1 className="text-2xl font-extrabold mb-4 drop-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              როგორც ჩანს, ისეთ გვერდზე აღმოჩნდით,<br />
              რომელიც არ იძებნება.
            </h1>
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-900/40 backdrop-blur-sm rounded-full mb-6 border border-gray-500/30">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-200">გვერდი ვერ მოიძებნა</span>
            </div>
            
            {/* Action Button with Badge Effect */}
            <Link
              to="/"
              className="group relative inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transition-all duration-300 ease-in-out font-bold text-base overflow-hidden"
            >
              {/* Button badge indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></div>
              
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              მთავარ გვერდზე დაბრუნება
            </Link>
          </div>
        </div>
        
        {/* Decorative badges around the card */}
        <div className="absolute -bottom-2 -left-2 px-2 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs rounded-full shadow-lg border border-white/20">
          404
        </div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs rounded-full shadow-lg border border-white/20">
          ERROR
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;