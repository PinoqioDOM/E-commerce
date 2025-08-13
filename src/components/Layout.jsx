import React, { useState, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import categories from '../data/categories.js';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const scrollContainerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState("აირჩიეთ კატეგორია");
    const dropdownRef = useRef(null);

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

    const handleCategoryClick = (category) => {
        navigate(`/category/${category.id}`);
        setSelectedCategoryName(category.name);
        setIsMenuOpen(false);
    };

    const isCategoryPage = location.pathname.startsWith('/category'); 

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div>
            <Header />

            {/* კატეგორიების სქროლი დიდი ეკრანებისთვის*/}
            {!isCategoryPage && (
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
            )}

            {/*Dropdown მენიუ პატარა ეკრანებისთვის */}
            {!isCategoryPage && (
                <div className="md:hidden p-4 relative mx-auto max-w-xs" ref={dropdownRef}>
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block w-full py-3 px-4 border-2 border-[#90EE90] rounded-xl shadow-lg 
                                   cursor-pointer bg-white text-gray-800 font-bold flex justify-between items-center"
                    >
                        {selectedCategoryName}
                        <span>&#9660;</span>
                    </div>
                    
                    {isMenuOpen && (
                        <ul className="absolute top-full left-0 right-0 z-40 bg-white border-2 border-[#90EE90] rounded-xl shadow-lg mt-2 overflow-hidden">
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <button
                                        onClick={() => handleCategoryClick(category)}
                                        className="block w-full text-left py-3 px-4 hover:bg-gray-100 transition-colors"
                                    >
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;