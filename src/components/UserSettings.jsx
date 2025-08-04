import React from 'react';

const UserSettings = () => {
  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">პარამეტრები</h2>
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300">პაროლის შეცვლა</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300">პირადი მონაცემები</button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ელ. ფოსტა</label>
          <p className="mt-1 text-gray-900">alxanixhvili1995@gmail.ru</p>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">სახელი, გვარი</label>
            <p className="mt-1 text-gray-900">Tornike Alxanixhvili</p>
          </div>
          <button className="text-sm font-medium text-green-600 hover:underline">შეცვლა</button>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">მობილურის ნომერი</label>
            <p className="mt-1 text-gray-900">არ არის მითითებული</p>
          </div>
          <button className="text-sm font-medium text-green-600 hover:underline">შეცვლა</button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
