import React, { useState } from 'react';

const UserAddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState(''); 
  const [message, setMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!productName || !price || !category || !imageUrl) {
      setMessage('გთხოვთ შეავსოთ ყველა ველი.');
      return;
    }

    const newProduct = {
      name: productName,
      price: parseFloat(price), 
      category: category,
      imageUrl: imageUrl,
      id: Date.now(), 
    };

    console.log('ახალი პროდუქტი დამატებულია:', newProduct);
    setMessage('პროდუქტი წარმატებით დაემატა!');

    setProductName('');
    setPrice('');
    setCategory('');
    setImageUrl('');
  };

  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">პროდუქტის დამატება</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-2 border-t pt-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            პროდუქტის დასახელება:
          </label>
          <input
            type="text"
            id="productName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="მაგ: ლეპტოპი Dell XPS 15"
            required
          />
        </div>

        <div className="flex flex-col gap-2 border-t pt-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            ფასი (₾):
          </label>
          <input
            type="number"
            id="price"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="მაგ: 2500"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="flex flex-col gap-2 border-t pt-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            კატეგორია:
          </label>
          <input
            type="text"
            id="category"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="მაგ: ლეპტოპები, ტელეფონები"
            required
          />
        </div>

        <div className="flex flex-col gap-2 border-t pt-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            სურათის URL:
          </label>
          <input
            type="url"
            id="imageUrl"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="მაგ: https://example.com/image.jpg"
            required
          />
        </div>

        {message && (
          <div className={`p-3 rounded-md text-center ${message.includes('წარმატებით') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold mt-4"
        >
          პროდუქტის დამატება
        </button>
      </form>
    </div>
  );
};

export default UserAddProduct;