import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import categories from '../data/categories.js';
import { useRef } from 'react';

const Layout = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        if (categoryId) {
            navigate(`/category/${categoryId}`);
        }
    };

    return (
        <div>
            <Header />

            {/* კატეგორიების სქროლი დიდი ეკრანებისთვის */}
            <div className="relative flex items-center mb-8 px-4 max-w-7xl mx-auto hidden md:flex">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100"
                >
                    <span className="text-xl">&lt;</span>
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => navigate(`/category/${category.id}`)}
                            className="flex-shrink-0 w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                        >
                            <span className="text-lg font-semibold">{category.name}</span>
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100"
                >
                    <span className="text-xl">&gt;</span>
                </button>
            </div>

            {/* კატეგორიების select მენიუ პატარა ეკრანებისთვის */}
            <div className="md:hidden p-4">
                <div className="relative">
                    <select
                        onChange={handleCategoryChange}
                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
                    >
                        <option value="">აირჩიეთ კატეგორია</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;