// FilterComponent.js

import React, { useState, useEffect } from 'react';

const FilterComponent = ({ products, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    handleFilter();
  }, [minPrice, maxPrice, sortOrder, products]);

  const handleFilter = () => {
    let filteredProducts = [...products];

    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;

    filteredProducts = filteredProducts.filter(product => {
      const price = product.price;
      return price >= min && price <= max;
    });

    if (sortOrder === 'asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    onFilterChange(filteredProducts);
  };

  return (
    <aside className="w-64 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">ფილტრი</h3>
      
      <div className="mb-8">
        <h4 className="font-semibold text-lg mb-3 text-gray-700">ფასი</h4>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="მინ. ფასი"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="მაქს. ფასი"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-3 text-gray-700">დალაგება</h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="sortOrder"
              value="asc"
              checked={sortOrder === 'asc'}
              onChange={() => setSortOrder('asc')}
              className="form-radio text-blue-600 h-5 w-5"
            />
            <span>ფასი: ზრდადობით (იაფიდან ძვირისკენ)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="sortOrder"
              value="desc"
              checked={sortOrder === 'desc'}
              onChange={() => setSortOrder('desc')}
              className="form-radio text-blue-600 h-5 w-5"
            />
            <span>ფასი: კლებადობით (ძვირიდან იაფისკენ)</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default FilterComponent;