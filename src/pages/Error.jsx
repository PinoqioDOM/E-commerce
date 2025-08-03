import { Link } from 'react-router-dom';
import ErrorBack from '../assets/Error.jpg';

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${ErrorBack})` }}
    >
      <div className="absolute inset-0  opacity-30"></div>
      
      <div className="relative text-center text-white p-6 rounded-lg  bg-opacity-40 backdrop-blur-sm max-w-lg mx-auto">     
        <p className="text-3xl font-extrabold mb-4 drop-shadow-lg">
          როგორც ჩანს, ისეთ გვერდზე აღმოჩნდით, <br /> რომელიც არ იძებნება.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-12 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out font-bold text-lg"
        >
          მთავარ გვერდზე დაბრუნება
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;